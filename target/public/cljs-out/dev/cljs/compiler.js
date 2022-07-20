// Compiled by ClojureScript 1.10.520 {}
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
var map__11114 = s;
var map__11114__$1 = (((((!((map__11114 == null))))?(((((map__11114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11114):map__11114);
var name = cljs.core.get.call(null,map__11114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11114__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11117 = info;
var map__11118 = G__11117;
var map__11118__$1 = (((((!((map__11118 == null))))?(((((map__11118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11118):map__11118);
var shadow = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11117__$1 = G__11117;
while(true){
var d__$2 = d__$1;
var map__11122 = G__11117__$1;
var map__11122__$1 = (((((!((map__11122 == null))))?(((((map__11122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11122):map__11122);
var shadow__$1 = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__11124 = (d__$2 + (1));
var G__11125 = shadow__$1;
d__$1 = G__11124;
G__11117__$1 = G__11125;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11126){
var map__11127 = p__11126;
var map__11127__$1 = (((((!((map__11127 == null))))?(((((map__11127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11127):map__11127);
var name_var = map__11127__$1;
var name = cljs.core.get.call(null,map__11127__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11127__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__11129 = info;
var map__11129__$1 = (((((!((map__11129 == null))))?(((((map__11129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11129):map__11129);
var ns = cljs.core.get.call(null,map__11129__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__11129__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__11132 = arguments.length;
switch (G__11132) {
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
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11478),(11478),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
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
var G__11134 = cp;
switch (G__11134) {
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
var seq__11136_11140 = cljs.core.seq.call(null,s);
var chunk__11137_11141 = null;
var count__11138_11142 = (0);
var i__11139_11143 = (0);
while(true){
if((i__11139_11143 < count__11138_11142)){
var c_11144 = cljs.core._nth.call(null,chunk__11137_11141,i__11139_11143);
sb.append(cljs.compiler.escape_char.call(null,c_11144));


var G__11145 = seq__11136_11140;
var G__11146 = chunk__11137_11141;
var G__11147 = count__11138_11142;
var G__11148 = (i__11139_11143 + (1));
seq__11136_11140 = G__11145;
chunk__11137_11141 = G__11146;
count__11138_11142 = G__11147;
i__11139_11143 = G__11148;
continue;
} else {
var temp__5720__auto___11149 = cljs.core.seq.call(null,seq__11136_11140);
if(temp__5720__auto___11149){
var seq__11136_11150__$1 = temp__5720__auto___11149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11136_11150__$1)){
var c__4550__auto___11151 = cljs.core.chunk_first.call(null,seq__11136_11150__$1);
var G__11152 = cljs.core.chunk_rest.call(null,seq__11136_11150__$1);
var G__11153 = c__4550__auto___11151;
var G__11154 = cljs.core.count.call(null,c__4550__auto___11151);
var G__11155 = (0);
seq__11136_11140 = G__11152;
chunk__11137_11141 = G__11153;
count__11138_11142 = G__11154;
i__11139_11143 = G__11155;
continue;
} else {
var c_11156 = cljs.core.first.call(null,seq__11136_11150__$1);
sb.append(cljs.compiler.escape_char.call(null,c_11156));


var G__11157 = cljs.core.next.call(null,seq__11136_11150__$1);
var G__11158 = null;
var G__11159 = (0);
var G__11160 = (0);
seq__11136_11140 = G__11157;
chunk__11137_11141 = G__11158;
count__11138_11142 = G__11159;
i__11139_11143 = G__11160;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__11161_11166 = ast;
var map__11161_11167__$1 = (((((!((map__11161_11166 == null))))?(((((map__11161_11166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11161_11166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11161_11166):map__11161_11166);
var env_11168 = cljs.core.get.call(null,map__11161_11167__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_11168))){
var map__11163_11169 = env_11168;
var map__11163_11170__$1 = (((((!((map__11163_11169 == null))))?(((((map__11163_11169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11163_11169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11163_11169):map__11163_11169);
var line_11171 = cljs.core.get.call(null,map__11163_11170__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_11172 = cljs.core.get.call(null,map__11163_11170__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__11163_11169,map__11163_11170__$1,line_11171,column_11172,map__11161_11166,map__11161_11167__$1,env_11168){
return (function (m){
var minfo = (function (){var G__11165 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__11165,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__11165;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_11171 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__11163_11169,map__11163_11170__$1,line_11171,column_11172,map__11161_11166,map__11161_11167__$1,env_11168){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_11172)?(column_11172 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__11163_11169,map__11163_11170__$1,line_11171,column_11172,map__11161_11166,map__11161_11167__$1,env_11168){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__11163_11169,map__11163_11170__$1,line_11171,column_11172,map__11161_11166,map__11161_11167__$1,env_11168))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__11163_11169,map__11163_11170__$1,line_11171,column_11172,map__11161_11166,map__11161_11167__$1,env_11168))
,cljs.core.sorted_map.call(null)));
});})(map__11163_11169,map__11163_11170__$1,line_11171,column_11172,map__11161_11166,map__11161_11167__$1,env_11168))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__11181 = arguments.length;
switch (G__11181) {
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
var args_arr__4751__auto__ = [];
var len__4730__auto___11188 = arguments.length;
var i__4731__auto___11189 = (0);
while(true){
if((i__4731__auto___11189 < len__4730__auto___11188)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11189]));

var G__11190 = (i__4731__auto___11189 + (1));
i__4731__auto___11189 = G__11190;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

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
var s_11191 = (function (){var G__11182 = a;
if((!(typeof a === 'string'))){
return G__11182.toString();
} else {
return G__11182;
}
})();
var temp__5724__auto___11192 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___11192 == null)){
} else {
var sm_data_11193 = temp__5724__auto___11192;
cljs.core.swap_BANG_.call(null,sm_data_11193,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_11193,temp__5724__auto___11192,s_11191){
return (function (p1__11173_SHARP_){
return (p1__11173_SHARP_ + s_11191.length);
});})(sm_data_11193,temp__5724__auto___11192,s_11191))
);
}

cljs.core.print.call(null,s_11191);

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

var seq__11183 = cljs.core.seq.call(null,xs);
var chunk__11184 = null;
var count__11185 = (0);
var i__11186 = (0);
while(true){
if((i__11186 < count__11185)){
var x = cljs.core._nth.call(null,chunk__11184,i__11186);
cljs.compiler.emits.call(null,x);


var G__11194 = seq__11183;
var G__11195 = chunk__11184;
var G__11196 = count__11185;
var G__11197 = (i__11186 + (1));
seq__11183 = G__11194;
chunk__11184 = G__11195;
count__11185 = G__11196;
i__11186 = G__11197;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11183);
if(temp__5720__auto__){
var seq__11183__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11183__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11183__$1);
var G__11198 = cljs.core.chunk_rest.call(null,seq__11183__$1);
var G__11199 = c__4550__auto__;
var G__11200 = cljs.core.count.call(null,c__4550__auto__);
var G__11201 = (0);
seq__11183 = G__11198;
chunk__11184 = G__11199;
count__11185 = G__11200;
i__11186 = G__11201;
continue;
} else {
var x = cljs.core.first.call(null,seq__11183__$1);
cljs.compiler.emits.call(null,x);


var G__11202 = cljs.core.next.call(null,seq__11183__$1);
var G__11203 = null;
var G__11204 = (0);
var G__11205 = (0);
seq__11183 = G__11202;
chunk__11184 = G__11203;
count__11185 = G__11204;
i__11186 = G__11205;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq11175){
var G__11176 = cljs.core.first.call(null,seq11175);
var seq11175__$1 = cljs.core.next.call(null,seq11175);
var G__11177 = cljs.core.first.call(null,seq11175__$1);
var seq11175__$2 = cljs.core.next.call(null,seq11175__$1);
var G__11178 = cljs.core.first.call(null,seq11175__$2);
var seq11175__$3 = cljs.core.next.call(null,seq11175__$2);
var G__11179 = cljs.core.first.call(null,seq11175__$3);
var seq11175__$4 = cljs.core.next.call(null,seq11175__$3);
var G__11180 = cljs.core.first.call(null,seq11175__$4);
var seq11175__$5 = cljs.core.next.call(null,seq11175__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11176,G__11177,G__11178,G__11179,G__11180,seq11175__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__11206){
var map__11207 = p__11206;
var map__11207__$1 = (((((!((map__11207 == null))))?(((((map__11207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11207):map__11207);
var m = map__11207__$1;
var gen_line = cljs.core.get.call(null,map__11207__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__11216 = arguments.length;
switch (G__11216) {
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
var args_arr__4751__auto__ = [];
var len__4730__auto___11222 = arguments.length;
var i__4731__auto___11223 = (0);
while(true){
if((i__4731__auto___11223 < len__4730__auto___11222)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11223]));

var G__11224 = (i__4731__auto___11223 + (1));
i__4731__auto___11223 = G__11224;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

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

var seq__11217_11225 = cljs.core.seq.call(null,xs);
var chunk__11218_11226 = null;
var count__11219_11227 = (0);
var i__11220_11228 = (0);
while(true){
if((i__11220_11228 < count__11219_11227)){
var x_11229 = cljs.core._nth.call(null,chunk__11218_11226,i__11220_11228);
cljs.compiler.emits.call(null,x_11229);


var G__11230 = seq__11217_11225;
var G__11231 = chunk__11218_11226;
var G__11232 = count__11219_11227;
var G__11233 = (i__11220_11228 + (1));
seq__11217_11225 = G__11230;
chunk__11218_11226 = G__11231;
count__11219_11227 = G__11232;
i__11220_11228 = G__11233;
continue;
} else {
var temp__5720__auto___11234 = cljs.core.seq.call(null,seq__11217_11225);
if(temp__5720__auto___11234){
var seq__11217_11235__$1 = temp__5720__auto___11234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11217_11235__$1)){
var c__4550__auto___11236 = cljs.core.chunk_first.call(null,seq__11217_11235__$1);
var G__11237 = cljs.core.chunk_rest.call(null,seq__11217_11235__$1);
var G__11238 = c__4550__auto___11236;
var G__11239 = cljs.core.count.call(null,c__4550__auto___11236);
var G__11240 = (0);
seq__11217_11225 = G__11237;
chunk__11218_11226 = G__11238;
count__11219_11227 = G__11239;
i__11220_11228 = G__11240;
continue;
} else {
var x_11241 = cljs.core.first.call(null,seq__11217_11235__$1);
cljs.compiler.emits.call(null,x_11241);


var G__11242 = cljs.core.next.call(null,seq__11217_11235__$1);
var G__11243 = null;
var G__11244 = (0);
var G__11245 = (0);
seq__11217_11225 = G__11242;
chunk__11218_11226 = G__11243;
count__11219_11227 = G__11244;
i__11220_11228 = G__11245;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11210){
var G__11211 = cljs.core.first.call(null,seq11210);
var seq11210__$1 = cljs.core.next.call(null,seq11210);
var G__11212 = cljs.core.first.call(null,seq11210__$1);
var seq11210__$2 = cljs.core.next.call(null,seq11210__$1);
var G__11213 = cljs.core.first.call(null,seq11210__$2);
var seq11210__$3 = cljs.core.next.call(null,seq11210__$2);
var G__11214 = cljs.core.first.call(null,seq11210__$3);
var seq11210__$4 = cljs.core.next.call(null,seq11210__$3);
var G__11215 = cljs.core.first.call(null,seq11210__$4);
var seq11210__$5 = cljs.core.next.call(null,seq11210__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11211,G__11212,G__11213,G__11214,G__11215,seq11210__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11246_11250 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11247_11251 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11248_11252 = true;
var _STAR_print_fn_STAR__temp_val__11249_11253 = ((function (_STAR_print_newline_STAR__orig_val__11246_11250,_STAR_print_fn_STAR__orig_val__11247_11251,_STAR_print_newline_STAR__temp_val__11248_11252,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11246_11250,_STAR_print_fn_STAR__orig_val__11247_11251,_STAR_print_newline_STAR__temp_val__11248_11252,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11248_11252;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11249_11253;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11247_11251;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11246_11250;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
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
var vec__11254 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__11254,(0),null);
var name = cljs.core.nth.call(null,vec__11254,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__11254,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__11254,ns,name))
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
var vec__11257 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__11257,(0),null);
var flags = cljs.core.nth.call(null,vec__11257,(1),null);
var pattern = cljs.core.nth.call(null,vec__11257,(2),null);
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
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
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
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
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
return (function (p1__11260_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__11260_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__11262){
var map__11263 = p__11262;
var map__11263__$1 = (((((!((map__11263 == null))))?(((((map__11263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11263):map__11263);
var ast = map__11263__$1;
var info = cljs.core.get.call(null,map__11263__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__11263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__11263__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__11265 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__11265__$1 = (((((!((map__11265 == null))))?(((((map__11265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11265):map__11265);
var cenv = map__11265__$1;
var options = cljs.core.get.call(null,map__11265__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var reserved = (function (){var G__11267 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__11267,cljs.analyzer.es5_allowed);
} else {
return G__11267;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__11268 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__11268,reserved);
} else {
return G__11268;
}
})();
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__11269_11270 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__11269_11271__$1 = (((G__11269_11270 instanceof cljs.core.Keyword))?G__11269_11270.fqn:null);
switch (G__11269_11271__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4120__auto__;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__11273){
var map__11274 = p__11273;
var map__11274__$1 = (((((!((map__11274 == null))))?(((((map__11274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11274):map__11274);
var arg = map__11274__$1;
var env = cljs.core.get.call(null,map__11274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__11274__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__11274__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__11274__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__11276 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__11276__$1 = (((((!((map__11276 == null))))?(((((map__11276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11276):map__11276);
var name = cljs.core.get.call(null,map__11276__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__11278){
var map__11279 = p__11278;
var map__11279__$1 = (((((!((map__11279 == null))))?(((((map__11279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11279):map__11279);
var expr = cljs.core.get.call(null,map__11279__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__11279__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__11279__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__11281_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11281_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__11282){
var map__11283 = p__11282;
var map__11283__$1 = (((((!((map__11283 == null))))?(((((map__11283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11283):map__11283);
var env = cljs.core.get.call(null,map__11283__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__11283__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11283__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__11285){
var map__11286 = p__11285;
var map__11286__$1 = (((((!((map__11286 == null))))?(((((map__11286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11286):map__11286);
var items = cljs.core.get.call(null,map__11286__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__11288_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11288_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__11289){
var map__11290 = p__11289;
var map__11290__$1 = (((((!((map__11290 == null))))?(((((map__11290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11290):map__11290);
var items = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___11314 = cljs.core.seq.call(null,items);
if(temp__5720__auto___11314){
var items_11315__$1 = temp__5720__auto___11314;
var vec__11292_11316 = items_11315__$1;
var seq__11293_11317 = cljs.core.seq.call(null,vec__11292_11316);
var first__11294_11318 = cljs.core.first.call(null,seq__11293_11317);
var seq__11293_11319__$1 = cljs.core.next.call(null,seq__11293_11317);
var vec__11295_11320 = first__11294_11318;
var k_11321 = cljs.core.nth.call(null,vec__11295_11320,(0),null);
var v_11322 = cljs.core.nth.call(null,vec__11295_11320,(1),null);
var r_11323 = seq__11293_11319__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_11321),"\": ",emit_js_object_val.call(null,v_11322));

var seq__11298_11324 = cljs.core.seq.call(null,r_11323);
var chunk__11299_11325 = null;
var count__11300_11326 = (0);
var i__11301_11327 = (0);
while(true){
if((i__11301_11327 < count__11300_11326)){
var vec__11308_11328 = cljs.core._nth.call(null,chunk__11299_11325,i__11301_11327);
var k_11329__$1 = cljs.core.nth.call(null,vec__11308_11328,(0),null);
var v_11330__$1 = cljs.core.nth.call(null,vec__11308_11328,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11329__$1),"\": ",emit_js_object_val.call(null,v_11330__$1));


var G__11331 = seq__11298_11324;
var G__11332 = chunk__11299_11325;
var G__11333 = count__11300_11326;
var G__11334 = (i__11301_11327 + (1));
seq__11298_11324 = G__11331;
chunk__11299_11325 = G__11332;
count__11300_11326 = G__11333;
i__11301_11327 = G__11334;
continue;
} else {
var temp__5720__auto___11335__$1 = cljs.core.seq.call(null,seq__11298_11324);
if(temp__5720__auto___11335__$1){
var seq__11298_11336__$1 = temp__5720__auto___11335__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11298_11336__$1)){
var c__4550__auto___11337 = cljs.core.chunk_first.call(null,seq__11298_11336__$1);
var G__11338 = cljs.core.chunk_rest.call(null,seq__11298_11336__$1);
var G__11339 = c__4550__auto___11337;
var G__11340 = cljs.core.count.call(null,c__4550__auto___11337);
var G__11341 = (0);
seq__11298_11324 = G__11338;
chunk__11299_11325 = G__11339;
count__11300_11326 = G__11340;
i__11301_11327 = G__11341;
continue;
} else {
var vec__11311_11342 = cljs.core.first.call(null,seq__11298_11336__$1);
var k_11343__$1 = cljs.core.nth.call(null,vec__11311_11342,(0),null);
var v_11344__$1 = cljs.core.nth.call(null,vec__11311_11342,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11343__$1),"\": ",emit_js_object_val.call(null,v_11344__$1));


var G__11345 = cljs.core.next.call(null,seq__11298_11336__$1);
var G__11346 = null;
var G__11347 = (0);
var G__11348 = (0);
seq__11298_11324 = G__11345;
chunk__11299_11325 = G__11346;
count__11300_11326 = G__11347;
i__11301_11327 = G__11348;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__11349){
var map__11350 = p__11349;
var map__11350__$1 = (((((!((map__11350 == null))))?(((((map__11350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11350):map__11350);
var keys = cljs.core.get.call(null,map__11350__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11350__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__11350__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__11352){
var map__11353 = p__11352;
var map__11353__$1 = (((((!((map__11353 == null))))?(((((map__11353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11353):map__11353);
var items = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__11355){
var map__11356 = p__11355;
var map__11356__$1 = (((((!((map__11356 == null))))?(((((map__11356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11356):map__11356);
var expr = cljs.core.get.call(null,map__11356__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__11358){
var map__11359 = p__11358;
var map__11359__$1 = (((((!((map__11359 == null))))?(((((map__11359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11359):map__11359);
var form = cljs.core.get.call(null,map__11359__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__11359__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__11361 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11361__$1 = (((((!((map__11361 == null))))?(((((map__11361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11361):map__11361);
var op = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__11363 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11363__$1 = (((((!((map__11363 == null))))?(((((map__11363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11363):map__11363);
var op = cljs.core.get.call(null,map__11363__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11363__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11363__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__11365){
var map__11366 = p__11365;
var map__11366__$1 = (((((!((map__11366 == null))))?(((((map__11366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11366):map__11366);
var test = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__11368){
var map__11369 = p__11368;
var map__11369__$1 = (((((!((map__11369 == null))))?(((((map__11369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11369):map__11369);
var v = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__11371_11407 = cljs.core.seq.call(null,nodes);
var chunk__11372_11408 = null;
var count__11373_11409 = (0);
var i__11374_11410 = (0);
while(true){
if((i__11374_11410 < count__11373_11409)){
var map__11391_11411 = cljs.core._nth.call(null,chunk__11372_11408,i__11374_11410);
var map__11391_11412__$1 = (((((!((map__11391_11411 == null))))?(((((map__11391_11411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11391_11411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11391_11411):map__11391_11411);
var ts_11413 = cljs.core.get.call(null,map__11391_11412__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11392_11414 = cljs.core.get.call(null,map__11391_11412__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11392_11415__$1 = (((((!((map__11392_11414 == null))))?(((((map__11392_11414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11392_11414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11392_11414):map__11392_11414);
var then_11416 = cljs.core.get.call(null,map__11392_11415__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11395_11417 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11413));
var chunk__11396_11418 = null;
var count__11397_11419 = (0);
var i__11398_11420 = (0);
while(true){
if((i__11398_11420 < count__11397_11419)){
var test_11421 = cljs.core._nth.call(null,chunk__11396_11418,i__11398_11420);
cljs.compiler.emitln.call(null,"case ",test_11421,":");


var G__11422 = seq__11395_11417;
var G__11423 = chunk__11396_11418;
var G__11424 = count__11397_11419;
var G__11425 = (i__11398_11420 + (1));
seq__11395_11417 = G__11422;
chunk__11396_11418 = G__11423;
count__11397_11419 = G__11424;
i__11398_11420 = G__11425;
continue;
} else {
var temp__5720__auto___11426 = cljs.core.seq.call(null,seq__11395_11417);
if(temp__5720__auto___11426){
var seq__11395_11427__$1 = temp__5720__auto___11426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11395_11427__$1)){
var c__4550__auto___11428 = cljs.core.chunk_first.call(null,seq__11395_11427__$1);
var G__11429 = cljs.core.chunk_rest.call(null,seq__11395_11427__$1);
var G__11430 = c__4550__auto___11428;
var G__11431 = cljs.core.count.call(null,c__4550__auto___11428);
var G__11432 = (0);
seq__11395_11417 = G__11429;
chunk__11396_11418 = G__11430;
count__11397_11419 = G__11431;
i__11398_11420 = G__11432;
continue;
} else {
var test_11433 = cljs.core.first.call(null,seq__11395_11427__$1);
cljs.compiler.emitln.call(null,"case ",test_11433,":");


var G__11434 = cljs.core.next.call(null,seq__11395_11427__$1);
var G__11435 = null;
var G__11436 = (0);
var G__11437 = (0);
seq__11395_11417 = G__11434;
chunk__11396_11418 = G__11435;
count__11397_11419 = G__11436;
i__11398_11420 = G__11437;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11416);
} else {
cljs.compiler.emitln.call(null,then_11416);
}

cljs.compiler.emitln.call(null,"break;");


var G__11438 = seq__11371_11407;
var G__11439 = chunk__11372_11408;
var G__11440 = count__11373_11409;
var G__11441 = (i__11374_11410 + (1));
seq__11371_11407 = G__11438;
chunk__11372_11408 = G__11439;
count__11373_11409 = G__11440;
i__11374_11410 = G__11441;
continue;
} else {
var temp__5720__auto___11442 = cljs.core.seq.call(null,seq__11371_11407);
if(temp__5720__auto___11442){
var seq__11371_11443__$1 = temp__5720__auto___11442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11371_11443__$1)){
var c__4550__auto___11444 = cljs.core.chunk_first.call(null,seq__11371_11443__$1);
var G__11445 = cljs.core.chunk_rest.call(null,seq__11371_11443__$1);
var G__11446 = c__4550__auto___11444;
var G__11447 = cljs.core.count.call(null,c__4550__auto___11444);
var G__11448 = (0);
seq__11371_11407 = G__11445;
chunk__11372_11408 = G__11446;
count__11373_11409 = G__11447;
i__11374_11410 = G__11448;
continue;
} else {
var map__11399_11449 = cljs.core.first.call(null,seq__11371_11443__$1);
var map__11399_11450__$1 = (((((!((map__11399_11449 == null))))?(((((map__11399_11449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11399_11449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11399_11449):map__11399_11449);
var ts_11451 = cljs.core.get.call(null,map__11399_11450__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11400_11452 = cljs.core.get.call(null,map__11399_11450__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11400_11453__$1 = (((((!((map__11400_11452 == null))))?(((((map__11400_11452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11400_11452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11400_11452):map__11400_11452);
var then_11454 = cljs.core.get.call(null,map__11400_11453__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11403_11455 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11451));
var chunk__11404_11456 = null;
var count__11405_11457 = (0);
var i__11406_11458 = (0);
while(true){
if((i__11406_11458 < count__11405_11457)){
var test_11459 = cljs.core._nth.call(null,chunk__11404_11456,i__11406_11458);
cljs.compiler.emitln.call(null,"case ",test_11459,":");


var G__11460 = seq__11403_11455;
var G__11461 = chunk__11404_11456;
var G__11462 = count__11405_11457;
var G__11463 = (i__11406_11458 + (1));
seq__11403_11455 = G__11460;
chunk__11404_11456 = G__11461;
count__11405_11457 = G__11462;
i__11406_11458 = G__11463;
continue;
} else {
var temp__5720__auto___11464__$1 = cljs.core.seq.call(null,seq__11403_11455);
if(temp__5720__auto___11464__$1){
var seq__11403_11465__$1 = temp__5720__auto___11464__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11403_11465__$1)){
var c__4550__auto___11466 = cljs.core.chunk_first.call(null,seq__11403_11465__$1);
var G__11467 = cljs.core.chunk_rest.call(null,seq__11403_11465__$1);
var G__11468 = c__4550__auto___11466;
var G__11469 = cljs.core.count.call(null,c__4550__auto___11466);
var G__11470 = (0);
seq__11403_11455 = G__11467;
chunk__11404_11456 = G__11468;
count__11405_11457 = G__11469;
i__11406_11458 = G__11470;
continue;
} else {
var test_11471 = cljs.core.first.call(null,seq__11403_11465__$1);
cljs.compiler.emitln.call(null,"case ",test_11471,":");


var G__11472 = cljs.core.next.call(null,seq__11403_11465__$1);
var G__11473 = null;
var G__11474 = (0);
var G__11475 = (0);
seq__11403_11455 = G__11472;
chunk__11404_11456 = G__11473;
count__11405_11457 = G__11474;
i__11406_11458 = G__11475;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11454);
} else {
cljs.compiler.emitln.call(null,then_11454);
}

cljs.compiler.emitln.call(null,"break;");


var G__11476 = cljs.core.next.call(null,seq__11371_11443__$1);
var G__11477 = null;
var G__11478 = (0);
var G__11479 = (0);
seq__11371_11407 = G__11476;
chunk__11372_11408 = G__11477;
count__11373_11409 = G__11478;
i__11374_11410 = G__11479;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__11480){
var map__11481 = p__11480;
var map__11481__$1 = (((((!((map__11481 == null))))?(((((map__11481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11481):map__11481);
var throw$ = cljs.core.get.call(null,map__11481__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__11481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__11484 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__11484,(0),null);
var rstr = cljs.core.nth.call(null,vec__11484,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__11484,fstr,rstr,ret_t,axstr){
return (function (p1__11483_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11483_SHARP_);
});})(idx,vec__11484,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__11487 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__11487,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__11487;
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
return (function (p1__11488_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11488_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__11489 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11490 = cljs.core.seq.call(null,vec__11489);
var first__11491 = cljs.core.first.call(null,seq__11490);
var seq__11490__$1 = cljs.core.next.call(null,seq__11490);
var p = first__11491;
var first__11491__$1 = cljs.core.first.call(null,seq__11490__$1);
var seq__11490__$2 = cljs.core.next.call(null,seq__11490__$1);
var ts = first__11491__$1;
var first__11491__$2 = cljs.core.first.call(null,seq__11490__$2);
var seq__11490__$3 = cljs.core.next.call(null,seq__11490__$2);
var n = first__11491__$2;
var xs = seq__11490__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__11492 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11493 = cljs.core.seq.call(null,vec__11492);
var first__11494 = cljs.core.first.call(null,seq__11493);
var seq__11493__$1 = cljs.core.next.call(null,seq__11493);
var p = first__11494;
var first__11494__$1 = cljs.core.first.call(null,seq__11493__$1);
var seq__11493__$2 = cljs.core.next.call(null,seq__11493__$1);
var ts = first__11494__$1;
var xs = seq__11493__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
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
var G__11497 = arguments.length;
switch (G__11497) {
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
var vec__11505 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__11495_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__11495_SHARP_);
} else {
return p1__11495_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__11506 = cljs.core.seq.call(null,vec__11505);
var first__11507 = cljs.core.first.call(null,seq__11506);
var seq__11506__$1 = cljs.core.next.call(null,seq__11506);
var x = first__11507;
var ys = seq__11506__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__11508 = cljs.core.seq.call(null,ys);
var chunk__11509 = null;
var count__11510 = (0);
var i__11511 = (0);
while(true){
if((i__11511 < count__11510)){
var next_line = cljs.core._nth.call(null,chunk__11509,i__11511);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11517 = seq__11508;
var G__11518 = chunk__11509;
var G__11519 = count__11510;
var G__11520 = (i__11511 + (1));
seq__11508 = G__11517;
chunk__11509 = G__11518;
count__11510 = G__11519;
i__11511 = G__11520;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11508);
if(temp__5720__auto__){
var seq__11508__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11508__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11508__$1);
var G__11521 = cljs.core.chunk_rest.call(null,seq__11508__$1);
var G__11522 = c__4550__auto__;
var G__11523 = cljs.core.count.call(null,c__4550__auto__);
var G__11524 = (0);
seq__11508 = G__11521;
chunk__11509 = G__11522;
count__11510 = G__11523;
i__11511 = G__11524;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__11508__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11525 = cljs.core.next.call(null,seq__11508__$1);
var G__11526 = null;
var G__11527 = (0);
var G__11528 = (0);
seq__11508 = G__11525;
chunk__11509 = G__11526;
count__11510 = G__11527;
i__11511 = G__11528;
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

var seq__11512_11529 = cljs.core.seq.call(null,docs__$2);
var chunk__11513_11530 = null;
var count__11514_11531 = (0);
var i__11515_11532 = (0);
while(true){
if((i__11515_11532 < count__11514_11531)){
var e_11533 = cljs.core._nth.call(null,chunk__11513_11530,i__11515_11532);
if(cljs.core.truth_(e_11533)){
print_comment_lines.call(null,e_11533);
} else {
}


var G__11534 = seq__11512_11529;
var G__11535 = chunk__11513_11530;
var G__11536 = count__11514_11531;
var G__11537 = (i__11515_11532 + (1));
seq__11512_11529 = G__11534;
chunk__11513_11530 = G__11535;
count__11514_11531 = G__11536;
i__11515_11532 = G__11537;
continue;
} else {
var temp__5720__auto___11538 = cljs.core.seq.call(null,seq__11512_11529);
if(temp__5720__auto___11538){
var seq__11512_11539__$1 = temp__5720__auto___11538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11512_11539__$1)){
var c__4550__auto___11540 = cljs.core.chunk_first.call(null,seq__11512_11539__$1);
var G__11541 = cljs.core.chunk_rest.call(null,seq__11512_11539__$1);
var G__11542 = c__4550__auto___11540;
var G__11543 = cljs.core.count.call(null,c__4550__auto___11540);
var G__11544 = (0);
seq__11512_11529 = G__11541;
chunk__11513_11530 = G__11542;
count__11514_11531 = G__11543;
i__11515_11532 = G__11544;
continue;
} else {
var e_11545 = cljs.core.first.call(null,seq__11512_11539__$1);
if(cljs.core.truth_(e_11545)){
print_comment_lines.call(null,e_11545);
} else {
}


var G__11546 = cljs.core.next.call(null,seq__11512_11539__$1);
var G__11547 = null;
var G__11548 = (0);
var G__11549 = (0);
seq__11512_11529 = G__11546;
chunk__11513_11530 = G__11547;
count__11514_11531 = G__11548;
i__11515_11532 = G__11549;
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
var and__4120__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__11551_SHARP_){
return goog.string.startsWith(p1__11551_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4120__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__11552){
var map__11553 = p__11552;
var map__11553__$1 = (((((!((map__11553 == null))))?(((((map__11553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11553):map__11553);
var doc = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__11553__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__11555){
var map__11556 = p__11555;
var map__11556__$1 = (((((!((map__11556 == null))))?(((((map__11556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11556):map__11556);
var name = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__11558_11582 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__11559_11583 = null;
var count__11560_11584 = (0);
var i__11561_11585 = (0);
while(true){
if((i__11561_11585 < count__11560_11584)){
var vec__11568_11586 = cljs.core._nth.call(null,chunk__11559_11583,i__11561_11585);
var i_11587 = cljs.core.nth.call(null,vec__11568_11586,(0),null);
var param_11588 = cljs.core.nth.call(null,vec__11568_11586,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11588);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11589 = seq__11558_11582;
var G__11590 = chunk__11559_11583;
var G__11591 = count__11560_11584;
var G__11592 = (i__11561_11585 + (1));
seq__11558_11582 = G__11589;
chunk__11559_11583 = G__11590;
count__11560_11584 = G__11591;
i__11561_11585 = G__11592;
continue;
} else {
var temp__5720__auto___11593 = cljs.core.seq.call(null,seq__11558_11582);
if(temp__5720__auto___11593){
var seq__11558_11594__$1 = temp__5720__auto___11593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11558_11594__$1)){
var c__4550__auto___11595 = cljs.core.chunk_first.call(null,seq__11558_11594__$1);
var G__11596 = cljs.core.chunk_rest.call(null,seq__11558_11594__$1);
var G__11597 = c__4550__auto___11595;
var G__11598 = cljs.core.count.call(null,c__4550__auto___11595);
var G__11599 = (0);
seq__11558_11582 = G__11596;
chunk__11559_11583 = G__11597;
count__11560_11584 = G__11598;
i__11561_11585 = G__11599;
continue;
} else {
var vec__11571_11600 = cljs.core.first.call(null,seq__11558_11594__$1);
var i_11601 = cljs.core.nth.call(null,vec__11571_11600,(0),null);
var param_11602 = cljs.core.nth.call(null,vec__11571_11600,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11602);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11603 = cljs.core.next.call(null,seq__11558_11594__$1);
var G__11604 = null;
var G__11605 = (0);
var G__11606 = (0);
seq__11558_11582 = G__11603;
chunk__11559_11583 = G__11604;
count__11560_11584 = G__11605;
i__11561_11585 = G__11606;
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

var seq__11574_11607 = cljs.core.seq.call(null,params);
var chunk__11575_11608 = null;
var count__11576_11609 = (0);
var i__11577_11610 = (0);
while(true){
if((i__11577_11610 < count__11576_11609)){
var param_11611 = cljs.core._nth.call(null,chunk__11575_11608,i__11577_11610);
cljs.compiler.emit.call(null,param_11611);

if(cljs.core._EQ_.call(null,param_11611,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11612 = seq__11574_11607;
var G__11613 = chunk__11575_11608;
var G__11614 = count__11576_11609;
var G__11615 = (i__11577_11610 + (1));
seq__11574_11607 = G__11612;
chunk__11575_11608 = G__11613;
count__11576_11609 = G__11614;
i__11577_11610 = G__11615;
continue;
} else {
var temp__5720__auto___11616 = cljs.core.seq.call(null,seq__11574_11607);
if(temp__5720__auto___11616){
var seq__11574_11617__$1 = temp__5720__auto___11616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11574_11617__$1)){
var c__4550__auto___11618 = cljs.core.chunk_first.call(null,seq__11574_11617__$1);
var G__11619 = cljs.core.chunk_rest.call(null,seq__11574_11617__$1);
var G__11620 = c__4550__auto___11618;
var G__11621 = cljs.core.count.call(null,c__4550__auto___11618);
var G__11622 = (0);
seq__11574_11607 = G__11619;
chunk__11575_11608 = G__11620;
count__11576_11609 = G__11621;
i__11577_11610 = G__11622;
continue;
} else {
var param_11623 = cljs.core.first.call(null,seq__11574_11617__$1);
cljs.compiler.emit.call(null,param_11623);

if(cljs.core._EQ_.call(null,param_11623,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11624 = cljs.core.next.call(null,seq__11574_11617__$1);
var G__11625 = null;
var G__11626 = (0);
var G__11627 = (0);
seq__11574_11607 = G__11624;
chunk__11575_11608 = G__11625;
count__11576_11609 = G__11626;
i__11577_11610 = G__11627;
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

var seq__11578_11628 = cljs.core.seq.call(null,params);
var chunk__11579_11629 = null;
var count__11580_11630 = (0);
var i__11581_11631 = (0);
while(true){
if((i__11581_11631 < count__11580_11630)){
var param_11632 = cljs.core._nth.call(null,chunk__11579_11629,i__11581_11631);
cljs.compiler.emit.call(null,param_11632);

if(cljs.core._EQ_.call(null,param_11632,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11633 = seq__11578_11628;
var G__11634 = chunk__11579_11629;
var G__11635 = count__11580_11630;
var G__11636 = (i__11581_11631 + (1));
seq__11578_11628 = G__11633;
chunk__11579_11629 = G__11634;
count__11580_11630 = G__11635;
i__11581_11631 = G__11636;
continue;
} else {
var temp__5720__auto___11637 = cljs.core.seq.call(null,seq__11578_11628);
if(temp__5720__auto___11637){
var seq__11578_11638__$1 = temp__5720__auto___11637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11578_11638__$1)){
var c__4550__auto___11639 = cljs.core.chunk_first.call(null,seq__11578_11638__$1);
var G__11640 = cljs.core.chunk_rest.call(null,seq__11578_11638__$1);
var G__11641 = c__4550__auto___11639;
var G__11642 = cljs.core.count.call(null,c__4550__auto___11639);
var G__11643 = (0);
seq__11578_11628 = G__11640;
chunk__11579_11629 = G__11641;
count__11580_11630 = G__11642;
i__11581_11631 = G__11643;
continue;
} else {
var param_11644 = cljs.core.first.call(null,seq__11578_11638__$1);
cljs.compiler.emit.call(null,param_11644);

if(cljs.core._EQ_.call(null,param_11644,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11645 = cljs.core.next.call(null,seq__11578_11638__$1);
var G__11646 = null;
var G__11647 = (0);
var G__11648 = (0);
seq__11578_11628 = G__11645;
chunk__11579_11629 = G__11646;
count__11580_11630 = G__11647;
i__11581_11631 = G__11648;
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
var seq__11649 = cljs.core.seq.call(null,params);
var chunk__11650 = null;
var count__11651 = (0);
var i__11652 = (0);
while(true){
if((i__11652 < count__11651)){
var param = cljs.core._nth.call(null,chunk__11650,i__11652);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11653 = seq__11649;
var G__11654 = chunk__11650;
var G__11655 = count__11651;
var G__11656 = (i__11652 + (1));
seq__11649 = G__11653;
chunk__11650 = G__11654;
count__11651 = G__11655;
i__11652 = G__11656;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11649);
if(temp__5720__auto__){
var seq__11649__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11649__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11649__$1);
var G__11657 = cljs.core.chunk_rest.call(null,seq__11649__$1);
var G__11658 = c__4550__auto__;
var G__11659 = cljs.core.count.call(null,c__4550__auto__);
var G__11660 = (0);
seq__11649 = G__11657;
chunk__11650 = G__11658;
count__11651 = G__11659;
i__11652 = G__11660;
continue;
} else {
var param = cljs.core.first.call(null,seq__11649__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11661 = cljs.core.next.call(null,seq__11649__$1);
var G__11662 = null;
var G__11663 = (0);
var G__11664 = (0);
seq__11649 = G__11661;
chunk__11650 = G__11662;
count__11651 = G__11663;
i__11652 = G__11664;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__11665){
var map__11666 = p__11665;
var map__11666__$1 = (((((!((map__11666 == null))))?(((((map__11666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11666):map__11666);
var expr = cljs.core.get.call(null,map__11666__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__11666__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__11666__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11666__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__11666__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__11668){
var map__11669 = p__11668;
var map__11669__$1 = (((((!((map__11669 == null))))?(((((map__11669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11669):map__11669);
var f = map__11669__$1;
var expr = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_11679__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_11680 = cljs.compiler.munge.call(null,name_11679__$1);
var delegate_name_11681 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_11680),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_11681," = function (");

var seq__11671_11682 = cljs.core.seq.call(null,params);
var chunk__11672_11683 = null;
var count__11673_11684 = (0);
var i__11674_11685 = (0);
while(true){
if((i__11674_11685 < count__11673_11684)){
var param_11686 = cljs.core._nth.call(null,chunk__11672_11683,i__11674_11685);
cljs.compiler.emit.call(null,param_11686);

if(cljs.core._EQ_.call(null,param_11686,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11687 = seq__11671_11682;
var G__11688 = chunk__11672_11683;
var G__11689 = count__11673_11684;
var G__11690 = (i__11674_11685 + (1));
seq__11671_11682 = G__11687;
chunk__11672_11683 = G__11688;
count__11673_11684 = G__11689;
i__11674_11685 = G__11690;
continue;
} else {
var temp__5720__auto___11691 = cljs.core.seq.call(null,seq__11671_11682);
if(temp__5720__auto___11691){
var seq__11671_11692__$1 = temp__5720__auto___11691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11671_11692__$1)){
var c__4550__auto___11693 = cljs.core.chunk_first.call(null,seq__11671_11692__$1);
var G__11694 = cljs.core.chunk_rest.call(null,seq__11671_11692__$1);
var G__11695 = c__4550__auto___11693;
var G__11696 = cljs.core.count.call(null,c__4550__auto___11693);
var G__11697 = (0);
seq__11671_11682 = G__11694;
chunk__11672_11683 = G__11695;
count__11673_11684 = G__11696;
i__11674_11685 = G__11697;
continue;
} else {
var param_11698 = cljs.core.first.call(null,seq__11671_11692__$1);
cljs.compiler.emit.call(null,param_11698);

if(cljs.core._EQ_.call(null,param_11698,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11699 = cljs.core.next.call(null,seq__11671_11692__$1);
var G__11700 = null;
var G__11701 = (0);
var G__11702 = (0);
seq__11671_11682 = G__11699;
chunk__11672_11683 = G__11700;
count__11673_11684 = G__11701;
i__11674_11685 = G__11702;
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

cljs.compiler.emitln.call(null,"var ",mname_11680," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_11703 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_11703,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_11681,".call(this,");

var seq__11675_11704 = cljs.core.seq.call(null,params);
var chunk__11676_11705 = null;
var count__11677_11706 = (0);
var i__11678_11707 = (0);
while(true){
if((i__11678_11707 < count__11677_11706)){
var param_11708 = cljs.core._nth.call(null,chunk__11676_11705,i__11678_11707);
cljs.compiler.emit.call(null,param_11708);

if(cljs.core._EQ_.call(null,param_11708,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11709 = seq__11675_11704;
var G__11710 = chunk__11676_11705;
var G__11711 = count__11677_11706;
var G__11712 = (i__11678_11707 + (1));
seq__11675_11704 = G__11709;
chunk__11676_11705 = G__11710;
count__11677_11706 = G__11711;
i__11678_11707 = G__11712;
continue;
} else {
var temp__5720__auto___11713 = cljs.core.seq.call(null,seq__11675_11704);
if(temp__5720__auto___11713){
var seq__11675_11714__$1 = temp__5720__auto___11713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11675_11714__$1)){
var c__4550__auto___11715 = cljs.core.chunk_first.call(null,seq__11675_11714__$1);
var G__11716 = cljs.core.chunk_rest.call(null,seq__11675_11714__$1);
var G__11717 = c__4550__auto___11715;
var G__11718 = cljs.core.count.call(null,c__4550__auto___11715);
var G__11719 = (0);
seq__11675_11704 = G__11716;
chunk__11676_11705 = G__11717;
count__11677_11706 = G__11718;
i__11678_11707 = G__11719;
continue;
} else {
var param_11720 = cljs.core.first.call(null,seq__11675_11714__$1);
cljs.compiler.emit.call(null,param_11720);

if(cljs.core._EQ_.call(null,param_11720,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11721 = cljs.core.next.call(null,seq__11675_11714__$1);
var G__11722 = null;
var G__11723 = (0);
var G__11724 = (0);
seq__11675_11704 = G__11721;
chunk__11676_11705 = G__11722;
count__11677_11706 = G__11723;
i__11678_11707 = G__11724;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_11680,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_11680,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_11679__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_11680,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_11681,";");

cljs.compiler.emitln.call(null,"return ",mname_11680,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__11728){
var map__11729 = p__11728;
var map__11729__$1 = (((((!((map__11729 == null))))?(((((map__11729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11729):map__11729);
var variadic = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__11729,map__11729__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11725_SHARP_){
var and__4120__auto__ = p1__11725_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__11725_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__11729,map__11729__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_11782__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_11783 = cljs.compiler.munge.call(null,name_11782__$1);
var maxparams_11784 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_11785 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_11782__$1,mname_11783,maxparams_11784,loop_locals,map__11729,map__11729__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_11783),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_11782__$1,mname_11783,maxparams_11784,loop_locals,map__11729,map__11729__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_11786 = cljs.core.sort_by.call(null,((function (name_11782__$1,mname_11783,maxparams_11784,mmap_11785,loop_locals,map__11729,map__11729__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11726_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11726_SHARP_)));
});})(name_11782__$1,mname_11783,maxparams_11784,mmap_11785,loop_locals,map__11729,map__11729__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_11785));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_11783," = null;");

var seq__11731_11787 = cljs.core.seq.call(null,ms_11786);
var chunk__11732_11788 = null;
var count__11733_11789 = (0);
var i__11734_11790 = (0);
while(true){
if((i__11734_11790 < count__11733_11789)){
var vec__11741_11791 = cljs.core._nth.call(null,chunk__11732_11788,i__11734_11790);
var n_11792 = cljs.core.nth.call(null,vec__11741_11791,(0),null);
var meth_11793 = cljs.core.nth.call(null,vec__11741_11791,(1),null);
cljs.compiler.emits.call(null,"var ",n_11792," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11793))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_11793);
} else {
cljs.compiler.emit_fn_method.call(null,meth_11793);
}

cljs.compiler.emitln.call(null,";");


var G__11794 = seq__11731_11787;
var G__11795 = chunk__11732_11788;
var G__11796 = count__11733_11789;
var G__11797 = (i__11734_11790 + (1));
seq__11731_11787 = G__11794;
chunk__11732_11788 = G__11795;
count__11733_11789 = G__11796;
i__11734_11790 = G__11797;
continue;
} else {
var temp__5720__auto___11798 = cljs.core.seq.call(null,seq__11731_11787);
if(temp__5720__auto___11798){
var seq__11731_11799__$1 = temp__5720__auto___11798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11731_11799__$1)){
var c__4550__auto___11800 = cljs.core.chunk_first.call(null,seq__11731_11799__$1);
var G__11801 = cljs.core.chunk_rest.call(null,seq__11731_11799__$1);
var G__11802 = c__4550__auto___11800;
var G__11803 = cljs.core.count.call(null,c__4550__auto___11800);
var G__11804 = (0);
seq__11731_11787 = G__11801;
chunk__11732_11788 = G__11802;
count__11733_11789 = G__11803;
i__11734_11790 = G__11804;
continue;
} else {
var vec__11744_11805 = cljs.core.first.call(null,seq__11731_11799__$1);
var n_11806 = cljs.core.nth.call(null,vec__11744_11805,(0),null);
var meth_11807 = cljs.core.nth.call(null,vec__11744_11805,(1),null);
cljs.compiler.emits.call(null,"var ",n_11806," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11807))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_11807);
} else {
cljs.compiler.emit_fn_method.call(null,meth_11807);
}

cljs.compiler.emitln.call(null,";");


var G__11808 = cljs.core.next.call(null,seq__11731_11799__$1);
var G__11809 = null;
var G__11810 = (0);
var G__11811 = (0);
seq__11731_11787 = G__11808;
chunk__11732_11788 = G__11809;
count__11733_11789 = G__11810;
i__11734_11790 = G__11811;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_11783," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_11784),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_11784)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_11784));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__11747_11812 = cljs.core.seq.call(null,ms_11786);
var chunk__11748_11813 = null;
var count__11749_11814 = (0);
var i__11750_11815 = (0);
while(true){
if((i__11750_11815 < count__11749_11814)){
var vec__11757_11816 = cljs.core._nth.call(null,chunk__11748_11813,i__11750_11815);
var n_11817 = cljs.core.nth.call(null,vec__11757_11816,(0),null);
var meth_11818 = cljs.core.nth.call(null,vec__11757_11816,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11818))){
cljs.compiler.emitln.call(null,"default:");

var restarg_11819 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_11819," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_11820 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_11819," = new cljs.core.IndexedSeq(",a_11820,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_11817,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_11784)),(((cljs.core.count.call(null,maxparams_11784) > (1)))?", ":null),restarg_11819,");");
} else {
var pcnt_11821 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11818));
cljs.compiler.emitln.call(null,"case ",pcnt_11821,":");

cljs.compiler.emitln.call(null,"return ",n_11817,".call(this",(((pcnt_11821 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_11821,maxparams_11784)),null,(1),null)),(2),null))),");");
}


var G__11822 = seq__11747_11812;
var G__11823 = chunk__11748_11813;
var G__11824 = count__11749_11814;
var G__11825 = (i__11750_11815 + (1));
seq__11747_11812 = G__11822;
chunk__11748_11813 = G__11823;
count__11749_11814 = G__11824;
i__11750_11815 = G__11825;
continue;
} else {
var temp__5720__auto___11826 = cljs.core.seq.call(null,seq__11747_11812);
if(temp__5720__auto___11826){
var seq__11747_11827__$1 = temp__5720__auto___11826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11747_11827__$1)){
var c__4550__auto___11828 = cljs.core.chunk_first.call(null,seq__11747_11827__$1);
var G__11829 = cljs.core.chunk_rest.call(null,seq__11747_11827__$1);
var G__11830 = c__4550__auto___11828;
var G__11831 = cljs.core.count.call(null,c__4550__auto___11828);
var G__11832 = (0);
seq__11747_11812 = G__11829;
chunk__11748_11813 = G__11830;
count__11749_11814 = G__11831;
i__11750_11815 = G__11832;
continue;
} else {
var vec__11760_11833 = cljs.core.first.call(null,seq__11747_11827__$1);
var n_11834 = cljs.core.nth.call(null,vec__11760_11833,(0),null);
var meth_11835 = cljs.core.nth.call(null,vec__11760_11833,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11835))){
cljs.compiler.emitln.call(null,"default:");

var restarg_11836 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_11836," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_11837 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_11836," = new cljs.core.IndexedSeq(",a_11837,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_11834,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_11784)),(((cljs.core.count.call(null,maxparams_11784) > (1)))?", ":null),restarg_11836,");");
} else {
var pcnt_11838 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11835));
cljs.compiler.emitln.call(null,"case ",pcnt_11838,":");

cljs.compiler.emitln.call(null,"return ",n_11834,".call(this",(((pcnt_11838 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_11838,maxparams_11784)),null,(1),null)),(2),null))),");");
}


var G__11839 = cljs.core.next.call(null,seq__11747_11827__$1);
var G__11840 = null;
var G__11841 = (0);
var G__11842 = (0);
seq__11747_11812 = G__11839;
chunk__11748_11813 = G__11840;
count__11749_11814 = G__11841;
i__11750_11815 = G__11842;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_11843 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_11786)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_11843,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_11783,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_11783,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_11782__$1,mname_11783,maxparams_11784,mmap_11785,ms_11786,loop_locals,map__11729,map__11729__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11727_SHARP_){
var vec__11763 = p1__11727_SHARP_;
var n = cljs.core.nth.call(null,vec__11763,(0),null);
var m = cljs.core.nth.call(null,vec__11763,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_11782__$1,mname_11783,maxparams_11784,mmap_11785,ms_11786,loop_locals,map__11729,map__11729__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_11786),".cljs$lang$applyTo;");
} else {
}

var seq__11766_11844 = cljs.core.seq.call(null,ms_11786);
var chunk__11767_11845 = null;
var count__11768_11846 = (0);
var i__11769_11847 = (0);
while(true){
if((i__11769_11847 < count__11768_11846)){
var vec__11776_11848 = cljs.core._nth.call(null,chunk__11767_11845,i__11769_11847);
var n_11849 = cljs.core.nth.call(null,vec__11776_11848,(0),null);
var meth_11850 = cljs.core.nth.call(null,vec__11776_11848,(1),null);
var c_11851 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11850));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11850))){
cljs.compiler.emitln.call(null,mname_11783,".cljs$core$IFn$_invoke$arity$variadic = ",n_11849,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_11783,".cljs$core$IFn$_invoke$arity$",c_11851," = ",n_11849,";");
}


var G__11852 = seq__11766_11844;
var G__11853 = chunk__11767_11845;
var G__11854 = count__11768_11846;
var G__11855 = (i__11769_11847 + (1));
seq__11766_11844 = G__11852;
chunk__11767_11845 = G__11853;
count__11768_11846 = G__11854;
i__11769_11847 = G__11855;
continue;
} else {
var temp__5720__auto___11856 = cljs.core.seq.call(null,seq__11766_11844);
if(temp__5720__auto___11856){
var seq__11766_11857__$1 = temp__5720__auto___11856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11766_11857__$1)){
var c__4550__auto___11858 = cljs.core.chunk_first.call(null,seq__11766_11857__$1);
var G__11859 = cljs.core.chunk_rest.call(null,seq__11766_11857__$1);
var G__11860 = c__4550__auto___11858;
var G__11861 = cljs.core.count.call(null,c__4550__auto___11858);
var G__11862 = (0);
seq__11766_11844 = G__11859;
chunk__11767_11845 = G__11860;
count__11768_11846 = G__11861;
i__11769_11847 = G__11862;
continue;
} else {
var vec__11779_11863 = cljs.core.first.call(null,seq__11766_11857__$1);
var n_11864 = cljs.core.nth.call(null,vec__11779_11863,(0),null);
var meth_11865 = cljs.core.nth.call(null,vec__11779_11863,(1),null);
var c_11866 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11865));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11865))){
cljs.compiler.emitln.call(null,mname_11783,".cljs$core$IFn$_invoke$arity$variadic = ",n_11864,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_11783,".cljs$core$IFn$_invoke$arity$",c_11866," = ",n_11864,";");
}


var G__11867 = cljs.core.next.call(null,seq__11766_11857__$1);
var G__11868 = null;
var G__11869 = (0);
var G__11870 = (0);
seq__11766_11844 = G__11867;
chunk__11767_11845 = G__11868;
count__11768_11846 = G__11869;
i__11769_11847 = G__11870;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_11783,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__11871){
var map__11872 = p__11871;
var map__11872__$1 = (((((!((map__11872 == null))))?(((((map__11872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11872):map__11872);
var statements = cljs.core.get.call(null,map__11872__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__11872__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__11872__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__11874_11878 = cljs.core.seq.call(null,statements);
var chunk__11875_11879 = null;
var count__11876_11880 = (0);
var i__11877_11881 = (0);
while(true){
if((i__11877_11881 < count__11876_11880)){
var s_11882 = cljs.core._nth.call(null,chunk__11875_11879,i__11877_11881);
cljs.compiler.emitln.call(null,s_11882);


var G__11883 = seq__11874_11878;
var G__11884 = chunk__11875_11879;
var G__11885 = count__11876_11880;
var G__11886 = (i__11877_11881 + (1));
seq__11874_11878 = G__11883;
chunk__11875_11879 = G__11884;
count__11876_11880 = G__11885;
i__11877_11881 = G__11886;
continue;
} else {
var temp__5720__auto___11887 = cljs.core.seq.call(null,seq__11874_11878);
if(temp__5720__auto___11887){
var seq__11874_11888__$1 = temp__5720__auto___11887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11874_11888__$1)){
var c__4550__auto___11889 = cljs.core.chunk_first.call(null,seq__11874_11888__$1);
var G__11890 = cljs.core.chunk_rest.call(null,seq__11874_11888__$1);
var G__11891 = c__4550__auto___11889;
var G__11892 = cljs.core.count.call(null,c__4550__auto___11889);
var G__11893 = (0);
seq__11874_11878 = G__11890;
chunk__11875_11879 = G__11891;
count__11876_11880 = G__11892;
i__11877_11881 = G__11893;
continue;
} else {
var s_11894 = cljs.core.first.call(null,seq__11874_11888__$1);
cljs.compiler.emitln.call(null,s_11894);


var G__11895 = cljs.core.next.call(null,seq__11874_11888__$1);
var G__11896 = null;
var G__11897 = (0);
var G__11898 = (0);
seq__11874_11878 = G__11895;
chunk__11875_11879 = G__11896;
count__11876_11880 = G__11897;
i__11877_11881 = G__11898;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__11899){
var map__11900 = p__11899;
var map__11900__$1 = (((((!((map__11900 == null))))?(((((map__11900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11900):map__11900);
var try$ = cljs.core.get.call(null,map__11900__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__11900__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__11900__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__11900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__11900__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__11902,is_loop){
var map__11903 = p__11902;
var map__11903__$1 = (((((!((map__11903 == null))))?(((((map__11903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11903):map__11903);
var expr = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__11905_11919 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__11906_11920 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__11905_11919,context,map__11903,map__11903__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__11905_11919,context,map__11903,map__11903__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__11906_11920;

try{var seq__11907_11921 = cljs.core.seq.call(null,bindings);
var chunk__11908_11922 = null;
var count__11909_11923 = (0);
var i__11910_11924 = (0);
while(true){
if((i__11910_11924 < count__11909_11923)){
var map__11915_11925 = cljs.core._nth.call(null,chunk__11908_11922,i__11910_11924);
var map__11915_11926__$1 = (((((!((map__11915_11925 == null))))?(((((map__11915_11925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11915_11925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11915_11925):map__11915_11925);
var binding_11927 = map__11915_11926__$1;
var init_11928 = cljs.core.get.call(null,map__11915_11926__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_11927);

cljs.compiler.emitln.call(null," = ",init_11928,";");


var G__11929 = seq__11907_11921;
var G__11930 = chunk__11908_11922;
var G__11931 = count__11909_11923;
var G__11932 = (i__11910_11924 + (1));
seq__11907_11921 = G__11929;
chunk__11908_11922 = G__11930;
count__11909_11923 = G__11931;
i__11910_11924 = G__11932;
continue;
} else {
var temp__5720__auto___11933 = cljs.core.seq.call(null,seq__11907_11921);
if(temp__5720__auto___11933){
var seq__11907_11934__$1 = temp__5720__auto___11933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11907_11934__$1)){
var c__4550__auto___11935 = cljs.core.chunk_first.call(null,seq__11907_11934__$1);
var G__11936 = cljs.core.chunk_rest.call(null,seq__11907_11934__$1);
var G__11937 = c__4550__auto___11935;
var G__11938 = cljs.core.count.call(null,c__4550__auto___11935);
var G__11939 = (0);
seq__11907_11921 = G__11936;
chunk__11908_11922 = G__11937;
count__11909_11923 = G__11938;
i__11910_11924 = G__11939;
continue;
} else {
var map__11917_11940 = cljs.core.first.call(null,seq__11907_11934__$1);
var map__11917_11941__$1 = (((((!((map__11917_11940 == null))))?(((((map__11917_11940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11917_11940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11917_11940):map__11917_11940);
var binding_11942 = map__11917_11941__$1;
var init_11943 = cljs.core.get.call(null,map__11917_11941__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_11942);

cljs.compiler.emitln.call(null," = ",init_11943,";");


var G__11944 = cljs.core.next.call(null,seq__11907_11934__$1);
var G__11945 = null;
var G__11946 = (0);
var G__11947 = (0);
seq__11907_11921 = G__11944;
chunk__11908_11922 = G__11945;
count__11909_11923 = G__11946;
i__11910_11924 = G__11947;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__11905_11919;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__11948){
var map__11949 = p__11948;
var map__11949__$1 = (((((!((map__11949 == null))))?(((((map__11949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11949):map__11949);
var frame = cljs.core.get.call(null,map__11949__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__11949__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__11949__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___11951 = cljs.core.count.call(null,exprs);
var i_11952 = (0);
while(true){
if((i_11952 < n__4607__auto___11951)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_11952)," = ",exprs.call(null,i_11952),";");

var G__11953 = (i_11952 + (1));
i_11952 = G__11953;
continue;
} else {
}
break;
}

var n__4607__auto___11954 = cljs.core.count.call(null,exprs);
var i_11955 = (0);
while(true){
if((i_11955 < n__4607__auto___11954)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_11955))," = ",temps.call(null,i_11955),";");

var G__11956 = (i_11955 + (1));
i_11955 = G__11956;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__11957){
var map__11958 = p__11957;
var map__11958__$1 = (((((!((map__11958 == null))))?(((((map__11958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11958):map__11958);
var expr = cljs.core.get.call(null,map__11958__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__11958__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__11958__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__11960_11972 = cljs.core.seq.call(null,bindings);
var chunk__11961_11973 = null;
var count__11962_11974 = (0);
var i__11963_11975 = (0);
while(true){
if((i__11963_11975 < count__11962_11974)){
var map__11968_11976 = cljs.core._nth.call(null,chunk__11961_11973,i__11963_11975);
var map__11968_11977__$1 = (((((!((map__11968_11976 == null))))?(((((map__11968_11976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11968_11976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11968_11976):map__11968_11976);
var binding_11978 = map__11968_11977__$1;
var init_11979 = cljs.core.get.call(null,map__11968_11977__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_11978)," = ",init_11979,";");


var G__11980 = seq__11960_11972;
var G__11981 = chunk__11961_11973;
var G__11982 = count__11962_11974;
var G__11983 = (i__11963_11975 + (1));
seq__11960_11972 = G__11980;
chunk__11961_11973 = G__11981;
count__11962_11974 = G__11982;
i__11963_11975 = G__11983;
continue;
} else {
var temp__5720__auto___11984 = cljs.core.seq.call(null,seq__11960_11972);
if(temp__5720__auto___11984){
var seq__11960_11985__$1 = temp__5720__auto___11984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11960_11985__$1)){
var c__4550__auto___11986 = cljs.core.chunk_first.call(null,seq__11960_11985__$1);
var G__11987 = cljs.core.chunk_rest.call(null,seq__11960_11985__$1);
var G__11988 = c__4550__auto___11986;
var G__11989 = cljs.core.count.call(null,c__4550__auto___11986);
var G__11990 = (0);
seq__11960_11972 = G__11987;
chunk__11961_11973 = G__11988;
count__11962_11974 = G__11989;
i__11963_11975 = G__11990;
continue;
} else {
var map__11970_11991 = cljs.core.first.call(null,seq__11960_11985__$1);
var map__11970_11992__$1 = (((((!((map__11970_11991 == null))))?(((((map__11970_11991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11970_11991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11970_11991):map__11970_11991);
var binding_11993 = map__11970_11992__$1;
var init_11994 = cljs.core.get.call(null,map__11970_11992__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_11993)," = ",init_11994,";");


var G__11995 = cljs.core.next.call(null,seq__11960_11985__$1);
var G__11996 = null;
var G__11997 = (0);
var G__11998 = (0);
seq__11960_11972 = G__11995;
chunk__11961_11973 = G__11996;
count__11962_11974 = G__11997;
i__11963_11975 = G__11998;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12001){
var map__12002 = p__12001;
var map__12002__$1 = (((((!((map__12002 == null))))?(((((map__12002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12002):map__12002);
var expr = map__12002__$1;
var f = cljs.core.get.call(null,map__12002__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__12002__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12002__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4120__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__12004 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12002,map__12002__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12002,map__12002__$1,expr,f,args,env){
return (function (p1__11999_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__11999_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12002,map__12002__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12002,map__12002__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12002,map__12002__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12002,map__12002__$1,expr,f,args,env){
return (function (p1__12000_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12000_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12002,map__12002__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12002,map__12002__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__12004,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__12004,(1),null);
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_12007 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_12007,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_12008 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_12008,args)),(((mfa_12008 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_12008,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4120__auto__;
}
})())){
var fprop_12009 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_12009," ? ",f__$1,fprop_12009,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_12009," ? ",f__$1,fprop_12009,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12010){
var map__12011 = p__12010;
var map__12011__$1 = (((((!((map__12011 == null))))?(((((map__12011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12011):map__12011);
var ctor = cljs.core.get.call(null,map__12011__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__12011__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12011__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12013){
var map__12014 = p__12013;
var map__12014__$1 = (((((!((map__12014 == null))))?(((((map__12014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12014):map__12014);
var target = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4131__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__12016 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12016__$1 = (((((!((map__12016 == null))))?(((((map__12016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12016):map__12016);
var options = cljs.core.get.call(null,map__12016__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__12016__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12017 = options;
var map__12017__$1 = (((((!((map__12017 == null))))?(((((map__12017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12017):map__12017);
var target = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12018 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12023 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12023__$1 = (((((!((map__12023 == null))))?(((((map__12023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12023):map__12023);
var node_libs = cljs.core.get.call(null,map__12023__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12023__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__12018,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__12018,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12025_12045 = cljs.core.seq.call(null,libs_to_load);
var chunk__12026_12046 = null;
var count__12027_12047 = (0);
var i__12028_12048 = (0);
while(true){
if((i__12028_12048 < count__12027_12047)){
var lib_12049 = cljs.core._nth.call(null,chunk__12026_12046,i__12028_12048);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12049)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12049),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12049),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12049),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12049),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12049,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12049),"');");
}

}
}
}


var G__12050 = seq__12025_12045;
var G__12051 = chunk__12026_12046;
var G__12052 = count__12027_12047;
var G__12053 = (i__12028_12048 + (1));
seq__12025_12045 = G__12050;
chunk__12026_12046 = G__12051;
count__12027_12047 = G__12052;
i__12028_12048 = G__12053;
continue;
} else {
var temp__5720__auto___12054 = cljs.core.seq.call(null,seq__12025_12045);
if(temp__5720__auto___12054){
var seq__12025_12055__$1 = temp__5720__auto___12054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12025_12055__$1)){
var c__4550__auto___12056 = cljs.core.chunk_first.call(null,seq__12025_12055__$1);
var G__12057 = cljs.core.chunk_rest.call(null,seq__12025_12055__$1);
var G__12058 = c__4550__auto___12056;
var G__12059 = cljs.core.count.call(null,c__4550__auto___12056);
var G__12060 = (0);
seq__12025_12045 = G__12057;
chunk__12026_12046 = G__12058;
count__12027_12047 = G__12059;
i__12028_12048 = G__12060;
continue;
} else {
var lib_12061 = cljs.core.first.call(null,seq__12025_12055__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12061)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12061),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12061),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12061),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12061),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12061,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12061),"');");
}

}
}
}


var G__12062 = cljs.core.next.call(null,seq__12025_12055__$1);
var G__12063 = null;
var G__12064 = (0);
var G__12065 = (0);
seq__12025_12045 = G__12062;
chunk__12026_12046 = G__12063;
count__12027_12047 = G__12064;
i__12028_12048 = G__12065;
continue;
}
} else {
}
}
break;
}

var seq__12029_12066 = cljs.core.seq.call(null,node_libs);
var chunk__12030_12067 = null;
var count__12031_12068 = (0);
var i__12032_12069 = (0);
while(true){
if((i__12032_12069 < count__12031_12068)){
var lib_12070 = cljs.core._nth.call(null,chunk__12030_12067,i__12032_12069);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12070)," = require('",lib_12070,"');");


var G__12071 = seq__12029_12066;
var G__12072 = chunk__12030_12067;
var G__12073 = count__12031_12068;
var G__12074 = (i__12032_12069 + (1));
seq__12029_12066 = G__12071;
chunk__12030_12067 = G__12072;
count__12031_12068 = G__12073;
i__12032_12069 = G__12074;
continue;
} else {
var temp__5720__auto___12075 = cljs.core.seq.call(null,seq__12029_12066);
if(temp__5720__auto___12075){
var seq__12029_12076__$1 = temp__5720__auto___12075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12029_12076__$1)){
var c__4550__auto___12077 = cljs.core.chunk_first.call(null,seq__12029_12076__$1);
var G__12078 = cljs.core.chunk_rest.call(null,seq__12029_12076__$1);
var G__12079 = c__4550__auto___12077;
var G__12080 = cljs.core.count.call(null,c__4550__auto___12077);
var G__12081 = (0);
seq__12029_12066 = G__12078;
chunk__12030_12067 = G__12079;
count__12031_12068 = G__12080;
i__12032_12069 = G__12081;
continue;
} else {
var lib_12082 = cljs.core.first.call(null,seq__12029_12076__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12082)," = require('",lib_12082,"');");


var G__12083 = cljs.core.next.call(null,seq__12029_12076__$1);
var G__12084 = null;
var G__12085 = (0);
var G__12086 = (0);
seq__12029_12066 = G__12083;
chunk__12030_12067 = G__12084;
count__12031_12068 = G__12085;
i__12032_12069 = G__12086;
continue;
}
} else {
}
}
break;
}

var seq__12033_12087 = cljs.core.seq.call(null,global_exports_libs);
var chunk__12034_12088 = null;
var count__12035_12089 = (0);
var i__12036_12090 = (0);
while(true){
if((i__12036_12090 < count__12035_12089)){
var lib_12091 = cljs.core._nth.call(null,chunk__12034_12088,i__12036_12090);
var map__12041_12092 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12091));
var map__12041_12093__$1 = (((((!((map__12041_12092 == null))))?(((((map__12041_12092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12041_12092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12041_12092):map__12041_12092);
var global_exports_12094 = cljs.core.get.call(null,map__12041_12093__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12094,lib_12091);


var G__12095 = seq__12033_12087;
var G__12096 = chunk__12034_12088;
var G__12097 = count__12035_12089;
var G__12098 = (i__12036_12090 + (1));
seq__12033_12087 = G__12095;
chunk__12034_12088 = G__12096;
count__12035_12089 = G__12097;
i__12036_12090 = G__12098;
continue;
} else {
var temp__5720__auto___12099 = cljs.core.seq.call(null,seq__12033_12087);
if(temp__5720__auto___12099){
var seq__12033_12100__$1 = temp__5720__auto___12099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12033_12100__$1)){
var c__4550__auto___12101 = cljs.core.chunk_first.call(null,seq__12033_12100__$1);
var G__12102 = cljs.core.chunk_rest.call(null,seq__12033_12100__$1);
var G__12103 = c__4550__auto___12101;
var G__12104 = cljs.core.count.call(null,c__4550__auto___12101);
var G__12105 = (0);
seq__12033_12087 = G__12102;
chunk__12034_12088 = G__12103;
count__12035_12089 = G__12104;
i__12036_12090 = G__12105;
continue;
} else {
var lib_12106 = cljs.core.first.call(null,seq__12033_12100__$1);
var map__12043_12107 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12106));
var map__12043_12108__$1 = (((((!((map__12043_12107 == null))))?(((((map__12043_12107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12043_12107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12043_12107):map__12043_12107);
var global_exports_12109 = cljs.core.get.call(null,map__12043_12108__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12109,lib_12106);


var G__12110 = cljs.core.next.call(null,seq__12033_12100__$1);
var G__12111 = null;
var G__12112 = (0);
var G__12113 = (0);
seq__12033_12087 = G__12110;
chunk__12034_12088 = G__12111;
count__12035_12089 = G__12112;
i__12036_12090 = G__12113;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12114){
var map__12115 = p__12114;
var map__12115__$1 = (((((!((map__12115 == null))))?(((((map__12115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12115):map__12115);
var name = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12115__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12117){
var map__12118 = p__12117;
var map__12118__$1 = (((((!((map__12118 == null))))?(((((map__12118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12118):map__12118);
var name = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__12120){
var map__12121 = p__12120;
var map__12121__$1 = (((((!((map__12121 == null))))?(((((map__12121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12121):map__12121);
var t = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12123_12147 = cljs.core.seq.call(null,protocols);
var chunk__12124_12148 = null;
var count__12125_12149 = (0);
var i__12126_12150 = (0);
while(true){
if((i__12126_12150 < count__12125_12149)){
var protocol_12151 = cljs.core._nth.call(null,chunk__12124_12148,i__12126_12150);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12151)),"}");


var G__12152 = seq__12123_12147;
var G__12153 = chunk__12124_12148;
var G__12154 = count__12125_12149;
var G__12155 = (i__12126_12150 + (1));
seq__12123_12147 = G__12152;
chunk__12124_12148 = G__12153;
count__12125_12149 = G__12154;
i__12126_12150 = G__12155;
continue;
} else {
var temp__5720__auto___12156 = cljs.core.seq.call(null,seq__12123_12147);
if(temp__5720__auto___12156){
var seq__12123_12157__$1 = temp__5720__auto___12156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12123_12157__$1)){
var c__4550__auto___12158 = cljs.core.chunk_first.call(null,seq__12123_12157__$1);
var G__12159 = cljs.core.chunk_rest.call(null,seq__12123_12157__$1);
var G__12160 = c__4550__auto___12158;
var G__12161 = cljs.core.count.call(null,c__4550__auto___12158);
var G__12162 = (0);
seq__12123_12147 = G__12159;
chunk__12124_12148 = G__12160;
count__12125_12149 = G__12161;
i__12126_12150 = G__12162;
continue;
} else {
var protocol_12163 = cljs.core.first.call(null,seq__12123_12157__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12163)),"}");


var G__12164 = cljs.core.next.call(null,seq__12123_12157__$1);
var G__12165 = null;
var G__12166 = (0);
var G__12167 = (0);
seq__12123_12147 = G__12164;
chunk__12124_12148 = G__12165;
count__12125_12149 = G__12166;
i__12126_12150 = G__12167;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12127_12168 = cljs.core.seq.call(null,fields__$1);
var chunk__12128_12169 = null;
var count__12129_12170 = (0);
var i__12130_12171 = (0);
while(true){
if((i__12130_12171 < count__12129_12170)){
var fld_12172 = cljs.core._nth.call(null,chunk__12128_12169,i__12130_12171);
cljs.compiler.emitln.call(null,"this.",fld_12172," = ",fld_12172,";");


var G__12173 = seq__12127_12168;
var G__12174 = chunk__12128_12169;
var G__12175 = count__12129_12170;
var G__12176 = (i__12130_12171 + (1));
seq__12127_12168 = G__12173;
chunk__12128_12169 = G__12174;
count__12129_12170 = G__12175;
i__12130_12171 = G__12176;
continue;
} else {
var temp__5720__auto___12177 = cljs.core.seq.call(null,seq__12127_12168);
if(temp__5720__auto___12177){
var seq__12127_12178__$1 = temp__5720__auto___12177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12127_12178__$1)){
var c__4550__auto___12179 = cljs.core.chunk_first.call(null,seq__12127_12178__$1);
var G__12180 = cljs.core.chunk_rest.call(null,seq__12127_12178__$1);
var G__12181 = c__4550__auto___12179;
var G__12182 = cljs.core.count.call(null,c__4550__auto___12179);
var G__12183 = (0);
seq__12127_12168 = G__12180;
chunk__12128_12169 = G__12181;
count__12129_12170 = G__12182;
i__12130_12171 = G__12183;
continue;
} else {
var fld_12184 = cljs.core.first.call(null,seq__12127_12178__$1);
cljs.compiler.emitln.call(null,"this.",fld_12184," = ",fld_12184,";");


var G__12185 = cljs.core.next.call(null,seq__12127_12178__$1);
var G__12186 = null;
var G__12187 = (0);
var G__12188 = (0);
seq__12127_12168 = G__12185;
chunk__12128_12169 = G__12186;
count__12129_12170 = G__12187;
i__12130_12171 = G__12188;
continue;
}
} else {
}
}
break;
}

var seq__12131_12189 = cljs.core.seq.call(null,pmasks);
var chunk__12132_12190 = null;
var count__12133_12191 = (0);
var i__12134_12192 = (0);
while(true){
if((i__12134_12192 < count__12133_12191)){
var vec__12141_12193 = cljs.core._nth.call(null,chunk__12132_12190,i__12134_12192);
var pno_12194 = cljs.core.nth.call(null,vec__12141_12193,(0),null);
var pmask_12195 = cljs.core.nth.call(null,vec__12141_12193,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12194,"$ = ",pmask_12195,";");


var G__12196 = seq__12131_12189;
var G__12197 = chunk__12132_12190;
var G__12198 = count__12133_12191;
var G__12199 = (i__12134_12192 + (1));
seq__12131_12189 = G__12196;
chunk__12132_12190 = G__12197;
count__12133_12191 = G__12198;
i__12134_12192 = G__12199;
continue;
} else {
var temp__5720__auto___12200 = cljs.core.seq.call(null,seq__12131_12189);
if(temp__5720__auto___12200){
var seq__12131_12201__$1 = temp__5720__auto___12200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12131_12201__$1)){
var c__4550__auto___12202 = cljs.core.chunk_first.call(null,seq__12131_12201__$1);
var G__12203 = cljs.core.chunk_rest.call(null,seq__12131_12201__$1);
var G__12204 = c__4550__auto___12202;
var G__12205 = cljs.core.count.call(null,c__4550__auto___12202);
var G__12206 = (0);
seq__12131_12189 = G__12203;
chunk__12132_12190 = G__12204;
count__12133_12191 = G__12205;
i__12134_12192 = G__12206;
continue;
} else {
var vec__12144_12207 = cljs.core.first.call(null,seq__12131_12201__$1);
var pno_12208 = cljs.core.nth.call(null,vec__12144_12207,(0),null);
var pmask_12209 = cljs.core.nth.call(null,vec__12144_12207,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12208,"$ = ",pmask_12209,";");


var G__12210 = cljs.core.next.call(null,seq__12131_12201__$1);
var G__12211 = null;
var G__12212 = (0);
var G__12213 = (0);
seq__12131_12189 = G__12210;
chunk__12132_12190 = G__12211;
count__12133_12191 = G__12212;
i__12134_12192 = G__12213;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__12214){
var map__12215 = p__12214;
var map__12215__$1 = (((((!((map__12215 == null))))?(((((map__12215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12215):map__12215);
var t = cljs.core.get.call(null,map__12215__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12215__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12215__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12215__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12215__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12217_12241 = cljs.core.seq.call(null,protocols);
var chunk__12218_12242 = null;
var count__12219_12243 = (0);
var i__12220_12244 = (0);
while(true){
if((i__12220_12244 < count__12219_12243)){
var protocol_12245 = cljs.core._nth.call(null,chunk__12218_12242,i__12220_12244);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12245)),"}");


var G__12246 = seq__12217_12241;
var G__12247 = chunk__12218_12242;
var G__12248 = count__12219_12243;
var G__12249 = (i__12220_12244 + (1));
seq__12217_12241 = G__12246;
chunk__12218_12242 = G__12247;
count__12219_12243 = G__12248;
i__12220_12244 = G__12249;
continue;
} else {
var temp__5720__auto___12250 = cljs.core.seq.call(null,seq__12217_12241);
if(temp__5720__auto___12250){
var seq__12217_12251__$1 = temp__5720__auto___12250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12217_12251__$1)){
var c__4550__auto___12252 = cljs.core.chunk_first.call(null,seq__12217_12251__$1);
var G__12253 = cljs.core.chunk_rest.call(null,seq__12217_12251__$1);
var G__12254 = c__4550__auto___12252;
var G__12255 = cljs.core.count.call(null,c__4550__auto___12252);
var G__12256 = (0);
seq__12217_12241 = G__12253;
chunk__12218_12242 = G__12254;
count__12219_12243 = G__12255;
i__12220_12244 = G__12256;
continue;
} else {
var protocol_12257 = cljs.core.first.call(null,seq__12217_12251__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12257)),"}");


var G__12258 = cljs.core.next.call(null,seq__12217_12251__$1);
var G__12259 = null;
var G__12260 = (0);
var G__12261 = (0);
seq__12217_12241 = G__12258;
chunk__12218_12242 = G__12259;
count__12219_12243 = G__12260;
i__12220_12244 = G__12261;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12221_12262 = cljs.core.seq.call(null,fields__$1);
var chunk__12222_12263 = null;
var count__12223_12264 = (0);
var i__12224_12265 = (0);
while(true){
if((i__12224_12265 < count__12223_12264)){
var fld_12266 = cljs.core._nth.call(null,chunk__12222_12263,i__12224_12265);
cljs.compiler.emitln.call(null,"this.",fld_12266," = ",fld_12266,";");


var G__12267 = seq__12221_12262;
var G__12268 = chunk__12222_12263;
var G__12269 = count__12223_12264;
var G__12270 = (i__12224_12265 + (1));
seq__12221_12262 = G__12267;
chunk__12222_12263 = G__12268;
count__12223_12264 = G__12269;
i__12224_12265 = G__12270;
continue;
} else {
var temp__5720__auto___12271 = cljs.core.seq.call(null,seq__12221_12262);
if(temp__5720__auto___12271){
var seq__12221_12272__$1 = temp__5720__auto___12271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12221_12272__$1)){
var c__4550__auto___12273 = cljs.core.chunk_first.call(null,seq__12221_12272__$1);
var G__12274 = cljs.core.chunk_rest.call(null,seq__12221_12272__$1);
var G__12275 = c__4550__auto___12273;
var G__12276 = cljs.core.count.call(null,c__4550__auto___12273);
var G__12277 = (0);
seq__12221_12262 = G__12274;
chunk__12222_12263 = G__12275;
count__12223_12264 = G__12276;
i__12224_12265 = G__12277;
continue;
} else {
var fld_12278 = cljs.core.first.call(null,seq__12221_12272__$1);
cljs.compiler.emitln.call(null,"this.",fld_12278," = ",fld_12278,";");


var G__12279 = cljs.core.next.call(null,seq__12221_12272__$1);
var G__12280 = null;
var G__12281 = (0);
var G__12282 = (0);
seq__12221_12262 = G__12279;
chunk__12222_12263 = G__12280;
count__12223_12264 = G__12281;
i__12224_12265 = G__12282;
continue;
}
} else {
}
}
break;
}

var seq__12225_12283 = cljs.core.seq.call(null,pmasks);
var chunk__12226_12284 = null;
var count__12227_12285 = (0);
var i__12228_12286 = (0);
while(true){
if((i__12228_12286 < count__12227_12285)){
var vec__12235_12287 = cljs.core._nth.call(null,chunk__12226_12284,i__12228_12286);
var pno_12288 = cljs.core.nth.call(null,vec__12235_12287,(0),null);
var pmask_12289 = cljs.core.nth.call(null,vec__12235_12287,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12288,"$ = ",pmask_12289,";");


var G__12290 = seq__12225_12283;
var G__12291 = chunk__12226_12284;
var G__12292 = count__12227_12285;
var G__12293 = (i__12228_12286 + (1));
seq__12225_12283 = G__12290;
chunk__12226_12284 = G__12291;
count__12227_12285 = G__12292;
i__12228_12286 = G__12293;
continue;
} else {
var temp__5720__auto___12294 = cljs.core.seq.call(null,seq__12225_12283);
if(temp__5720__auto___12294){
var seq__12225_12295__$1 = temp__5720__auto___12294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12225_12295__$1)){
var c__4550__auto___12296 = cljs.core.chunk_first.call(null,seq__12225_12295__$1);
var G__12297 = cljs.core.chunk_rest.call(null,seq__12225_12295__$1);
var G__12298 = c__4550__auto___12296;
var G__12299 = cljs.core.count.call(null,c__4550__auto___12296);
var G__12300 = (0);
seq__12225_12283 = G__12297;
chunk__12226_12284 = G__12298;
count__12227_12285 = G__12299;
i__12228_12286 = G__12300;
continue;
} else {
var vec__12238_12301 = cljs.core.first.call(null,seq__12225_12295__$1);
var pno_12302 = cljs.core.nth.call(null,vec__12238_12301,(0),null);
var pmask_12303 = cljs.core.nth.call(null,vec__12238_12301,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12302,"$ = ",pmask_12303,";");


var G__12304 = cljs.core.next.call(null,seq__12225_12295__$1);
var G__12305 = null;
var G__12306 = (0);
var G__12307 = (0);
seq__12225_12283 = G__12304;
chunk__12226_12284 = G__12305;
count__12227_12285 = G__12306;
i__12228_12286 = G__12307;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__12308){
var map__12309 = p__12308;
var map__12309__$1 = (((((!((map__12309 == null))))?(((((map__12309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12309):map__12309);
var target = cljs.core.get.call(null,map__12309__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__12309__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__12309__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__12309__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12311){
var map__12312 = p__12311;
var map__12312__$1 = (((((!((map__12312 == null))))?(((((map__12312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12312):map__12312);
var op = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11106__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11106__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__12318 = cljs.core.seq.call(null,table);
var chunk__12319 = null;
var count__12320 = (0);
var i__12321 = (0);
while(true){
if((i__12321 < count__12320)){
var vec__12328 = cljs.core._nth.call(null,chunk__12319,i__12321);
var sym = cljs.core.nth.call(null,vec__12328,(0),null);
var value = cljs.core.nth.call(null,vec__12328,(1),null);
var ns_12334 = cljs.core.namespace.call(null,sym);
var name_12335 = cljs.core.name.call(null,sym);
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


var G__12336 = seq__12318;
var G__12337 = chunk__12319;
var G__12338 = count__12320;
var G__12339 = (i__12321 + (1));
seq__12318 = G__12336;
chunk__12319 = G__12337;
count__12320 = G__12338;
i__12321 = G__12339;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12318);
if(temp__5720__auto__){
var seq__12318__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12318__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12318__$1);
var G__12340 = cljs.core.chunk_rest.call(null,seq__12318__$1);
var G__12341 = c__4550__auto__;
var G__12342 = cljs.core.count.call(null,c__4550__auto__);
var G__12343 = (0);
seq__12318 = G__12340;
chunk__12319 = G__12341;
count__12320 = G__12342;
i__12321 = G__12343;
continue;
} else {
var vec__12331 = cljs.core.first.call(null,seq__12318__$1);
var sym = cljs.core.nth.call(null,vec__12331,(0),null);
var value = cljs.core.nth.call(null,vec__12331,(1),null);
var ns_12344 = cljs.core.namespace.call(null,sym);
var name_12345 = cljs.core.name.call(null,sym);
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


var G__12346 = cljs.core.next.call(null,seq__12318__$1);
var G__12347 = null;
var G__12348 = (0);
var G__12349 = (0);
seq__12318 = G__12346;
chunk__12319 = G__12347;
count__12320 = G__12348;
i__12321 = G__12349;
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
var G__12351 = arguments.length;
switch (G__12351) {
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
var k_12356 = cljs.core.first.call(null,ks);
var vec__12352_12357 = cljs.core.conj.call(null,prefix,k_12356);
var top_12358 = cljs.core.nth.call(null,vec__12352_12357,(0),null);
var prefix_SINGLEQUOTE__12359 = vec__12352_12357;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_12356)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__12359) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_12358)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_12358)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12359)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_12358);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12359)),";");
}
} else {
}

var m_12360 = cljs.core.get.call(null,externs,k_12356);
if(cljs.core.empty_QMARK_.call(null,m_12360)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__12359,m_12360,top_level,known_externs);
}

var G__12361 = cljs.core.next.call(null,ks);
ks = G__12361;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
