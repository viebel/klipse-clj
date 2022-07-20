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
var map__11117 = s;
var map__11117__$1 = (((((!((map__11117 == null))))?(((((map__11117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11117):map__11117);
var name = cljs.core.get.call(null,map__11117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11117__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11120 = info;
var map__11121 = G__11120;
var map__11121__$1 = (((((!((map__11121 == null))))?(((((map__11121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11121):map__11121);
var shadow = cljs.core.get.call(null,map__11121__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11120__$1 = G__11120;
while(true){
var d__$2 = d__$1;
var map__11125 = G__11120__$1;
var map__11125__$1 = (((((!((map__11125 == null))))?(((((map__11125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11125):map__11125);
var shadow__$1 = cljs.core.get.call(null,map__11125__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__11127 = (d__$2 + (1));
var G__11128 = shadow__$1;
d__$1 = G__11127;
G__11120__$1 = G__11128;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11129){
var map__11130 = p__11129;
var map__11130__$1 = (((((!((map__11130 == null))))?(((((map__11130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11130):map__11130);
var name_var = map__11130__$1;
var name = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__11132 = info;
var map__11132__$1 = (((((!((map__11132 == null))))?(((((map__11132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11132):map__11132);
var ns = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__11135 = arguments.length;
switch (G__11135) {
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
var G__11137 = cp;
switch (G__11137) {
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
var seq__11139_11143 = cljs.core.seq.call(null,s);
var chunk__11140_11144 = null;
var count__11141_11145 = (0);
var i__11142_11146 = (0);
while(true){
if((i__11142_11146 < count__11141_11145)){
var c_11147 = cljs.core._nth.call(null,chunk__11140_11144,i__11142_11146);
sb.append(cljs.compiler.escape_char.call(null,c_11147));


var G__11148 = seq__11139_11143;
var G__11149 = chunk__11140_11144;
var G__11150 = count__11141_11145;
var G__11151 = (i__11142_11146 + (1));
seq__11139_11143 = G__11148;
chunk__11140_11144 = G__11149;
count__11141_11145 = G__11150;
i__11142_11146 = G__11151;
continue;
} else {
var temp__5804__auto___11152 = cljs.core.seq.call(null,seq__11139_11143);
if(temp__5804__auto___11152){
var seq__11139_11153__$1 = temp__5804__auto___11152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11139_11153__$1)){
var c__4550__auto___11154 = cljs.core.chunk_first.call(null,seq__11139_11153__$1);
var G__11155 = cljs.core.chunk_rest.call(null,seq__11139_11153__$1);
var G__11156 = c__4550__auto___11154;
var G__11157 = cljs.core.count.call(null,c__4550__auto___11154);
var G__11158 = (0);
seq__11139_11143 = G__11155;
chunk__11140_11144 = G__11156;
count__11141_11145 = G__11157;
i__11142_11146 = G__11158;
continue;
} else {
var c_11159 = cljs.core.first.call(null,seq__11139_11153__$1);
sb.append(cljs.compiler.escape_char.call(null,c_11159));


var G__11160 = cljs.core.next.call(null,seq__11139_11153__$1);
var G__11161 = null;
var G__11162 = (0);
var G__11163 = (0);
seq__11139_11143 = G__11160;
chunk__11140_11144 = G__11161;
count__11141_11145 = G__11162;
i__11142_11146 = G__11163;
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
var map__11164_11169 = ast;
var map__11164_11170__$1 = (((((!((map__11164_11169 == null))))?(((((map__11164_11169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11164_11169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11164_11169):map__11164_11169);
var env_11171 = cljs.core.get.call(null,map__11164_11170__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_11171))){
var map__11166_11172 = env_11171;
var map__11166_11173__$1 = (((((!((map__11166_11172 == null))))?(((((map__11166_11172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11166_11172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11166_11172):map__11166_11172);
var line_11174 = cljs.core.get.call(null,map__11166_11173__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_11175 = cljs.core.get.call(null,map__11166_11173__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__11166_11172,map__11166_11173__$1,line_11174,column_11175,map__11164_11169,map__11164_11170__$1,env_11171){
return (function (m){
var minfo = (function (){var G__11168 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__11168,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__11168;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_11174 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__11166_11172,map__11166_11173__$1,line_11174,column_11175,map__11164_11169,map__11164_11170__$1,env_11171){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_11175)?(column_11175 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__11166_11172,map__11166_11173__$1,line_11174,column_11175,map__11164_11169,map__11164_11170__$1,env_11171){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__11166_11172,map__11166_11173__$1,line_11174,column_11175,map__11164_11169,map__11164_11170__$1,env_11171))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__11166_11172,map__11166_11173__$1,line_11174,column_11175,map__11164_11169,map__11164_11170__$1,env_11171))
,cljs.core.sorted_map.call(null)));
});})(map__11166_11172,map__11166_11173__$1,line_11174,column_11175,map__11164_11169,map__11164_11170__$1,env_11171))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__11184 = arguments.length;
switch (G__11184) {
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
var len__4730__auto___11191 = arguments.length;
var i__4731__auto___11192 = (0);
while(true){
if((i__4731__auto___11192 < len__4730__auto___11191)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11192]));

var G__11193 = (i__4731__auto___11192 + (1));
i__4731__auto___11192 = G__11193;
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
var s_11194 = (function (){var G__11185 = a;
if((!(typeof a === 'string'))){
return G__11185.toString();
} else {
return G__11185;
}
})();
var temp__5808__auto___11195 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___11195 == null)){
} else {
var sm_data_11196 = temp__5808__auto___11195;
cljs.core.swap_BANG_.call(null,sm_data_11196,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_11196,temp__5808__auto___11195,s_11194){
return (function (p1__11176_SHARP_){
return (p1__11176_SHARP_ + s_11194.length);
});})(sm_data_11196,temp__5808__auto___11195,s_11194))
);
}

cljs.core.print.call(null,s_11194);

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

var seq__11186 = cljs.core.seq.call(null,xs);
var chunk__11187 = null;
var count__11188 = (0);
var i__11189 = (0);
while(true){
if((i__11189 < count__11188)){
var x = cljs.core._nth.call(null,chunk__11187,i__11189);
cljs.compiler.emits.call(null,x);


var G__11197 = seq__11186;
var G__11198 = chunk__11187;
var G__11199 = count__11188;
var G__11200 = (i__11189 + (1));
seq__11186 = G__11197;
chunk__11187 = G__11198;
count__11188 = G__11199;
i__11189 = G__11200;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11186);
if(temp__5804__auto__){
var seq__11186__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11186__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11186__$1);
var G__11201 = cljs.core.chunk_rest.call(null,seq__11186__$1);
var G__11202 = c__4550__auto__;
var G__11203 = cljs.core.count.call(null,c__4550__auto__);
var G__11204 = (0);
seq__11186 = G__11201;
chunk__11187 = G__11202;
count__11188 = G__11203;
i__11189 = G__11204;
continue;
} else {
var x = cljs.core.first.call(null,seq__11186__$1);
cljs.compiler.emits.call(null,x);


var G__11205 = cljs.core.next.call(null,seq__11186__$1);
var G__11206 = null;
var G__11207 = (0);
var G__11208 = (0);
seq__11186 = G__11205;
chunk__11187 = G__11206;
count__11188 = G__11207;
i__11189 = G__11208;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq11178){
var G__11179 = cljs.core.first.call(null,seq11178);
var seq11178__$1 = cljs.core.next.call(null,seq11178);
var G__11180 = cljs.core.first.call(null,seq11178__$1);
var seq11178__$2 = cljs.core.next.call(null,seq11178__$1);
var G__11181 = cljs.core.first.call(null,seq11178__$2);
var seq11178__$3 = cljs.core.next.call(null,seq11178__$2);
var G__11182 = cljs.core.first.call(null,seq11178__$3);
var seq11178__$4 = cljs.core.next.call(null,seq11178__$3);
var G__11183 = cljs.core.first.call(null,seq11178__$4);
var seq11178__$5 = cljs.core.next.call(null,seq11178__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11179,G__11180,G__11181,G__11182,G__11183,seq11178__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__11209){
var map__11210 = p__11209;
var map__11210__$1 = (((((!((map__11210 == null))))?(((((map__11210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11210):map__11210);
var m = map__11210__$1;
var gen_line = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__11219 = arguments.length;
switch (G__11219) {
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
var len__4730__auto___11225 = arguments.length;
var i__4731__auto___11226 = (0);
while(true){
if((i__4731__auto___11226 < len__4730__auto___11225)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11226]));

var G__11227 = (i__4731__auto___11226 + (1));
i__4731__auto___11226 = G__11227;
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

var seq__11220_11228 = cljs.core.seq.call(null,xs);
var chunk__11221_11229 = null;
var count__11222_11230 = (0);
var i__11223_11231 = (0);
while(true){
if((i__11223_11231 < count__11222_11230)){
var x_11232 = cljs.core._nth.call(null,chunk__11221_11229,i__11223_11231);
cljs.compiler.emits.call(null,x_11232);


var G__11233 = seq__11220_11228;
var G__11234 = chunk__11221_11229;
var G__11235 = count__11222_11230;
var G__11236 = (i__11223_11231 + (1));
seq__11220_11228 = G__11233;
chunk__11221_11229 = G__11234;
count__11222_11230 = G__11235;
i__11223_11231 = G__11236;
continue;
} else {
var temp__5804__auto___11237 = cljs.core.seq.call(null,seq__11220_11228);
if(temp__5804__auto___11237){
var seq__11220_11238__$1 = temp__5804__auto___11237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11220_11238__$1)){
var c__4550__auto___11239 = cljs.core.chunk_first.call(null,seq__11220_11238__$1);
var G__11240 = cljs.core.chunk_rest.call(null,seq__11220_11238__$1);
var G__11241 = c__4550__auto___11239;
var G__11242 = cljs.core.count.call(null,c__4550__auto___11239);
var G__11243 = (0);
seq__11220_11228 = G__11240;
chunk__11221_11229 = G__11241;
count__11222_11230 = G__11242;
i__11223_11231 = G__11243;
continue;
} else {
var x_11244 = cljs.core.first.call(null,seq__11220_11238__$1);
cljs.compiler.emits.call(null,x_11244);


var G__11245 = cljs.core.next.call(null,seq__11220_11238__$1);
var G__11246 = null;
var G__11247 = (0);
var G__11248 = (0);
seq__11220_11228 = G__11245;
chunk__11221_11229 = G__11246;
count__11222_11230 = G__11247;
i__11223_11231 = G__11248;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11213){
var G__11214 = cljs.core.first.call(null,seq11213);
var seq11213__$1 = cljs.core.next.call(null,seq11213);
var G__11215 = cljs.core.first.call(null,seq11213__$1);
var seq11213__$2 = cljs.core.next.call(null,seq11213__$1);
var G__11216 = cljs.core.first.call(null,seq11213__$2);
var seq11213__$3 = cljs.core.next.call(null,seq11213__$2);
var G__11217 = cljs.core.first.call(null,seq11213__$3);
var seq11213__$4 = cljs.core.next.call(null,seq11213__$3);
var G__11218 = cljs.core.first.call(null,seq11213__$4);
var seq11213__$5 = cljs.core.next.call(null,seq11213__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11214,G__11215,G__11216,G__11217,G__11218,seq11213__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11249_11253 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11250_11254 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11251_11255 = true;
var _STAR_print_fn_STAR__temp_val__11252_11256 = ((function (_STAR_print_newline_STAR__orig_val__11249_11253,_STAR_print_fn_STAR__orig_val__11250_11254,_STAR_print_newline_STAR__temp_val__11251_11255,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11249_11253,_STAR_print_fn_STAR__orig_val__11250_11254,_STAR_print_newline_STAR__temp_val__11251_11255,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11251_11255;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11252_11256;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11250_11254;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11249_11253;
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
var vec__11257 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__11257,(0),null);
var name = cljs.core.nth.call(null,vec__11257,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__11257,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__11257,ns,name))
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
var vec__11260 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__11260,(0),null);
var flags = cljs.core.nth.call(null,vec__11260,(1),null);
var pattern = cljs.core.nth.call(null,vec__11260,(2),null);
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
var temp__5802__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5802__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
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
return (function (p1__11263_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__11263_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__11265){
var map__11266 = p__11265;
var map__11266__$1 = (((((!((map__11266 == null))))?(((((map__11266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11266):map__11266);
var ast = map__11266__$1;
var info = cljs.core.get.call(null,map__11266__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__11266__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__11266__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__11268 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__11268__$1 = (((((!((map__11268 == null))))?(((((map__11268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11268):map__11268);
var cenv = map__11268__$1;
var options = cljs.core.get.call(null,map__11268__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__11270 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__11270,cljs.analyzer.es5_allowed);
} else {
return G__11270;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__11271 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__11271,reserved);
} else {
return G__11271;
}
})();
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__11272_11273 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__11272_11274__$1 = (((G__11272_11273 instanceof cljs.core.Keyword))?G__11272_11273.fqn:null);
switch (G__11272_11274__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__11276){
var map__11277 = p__11276;
var map__11277__$1 = (((((!((map__11277 == null))))?(((((map__11277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11277):map__11277);
var arg = map__11277__$1;
var env = cljs.core.get.call(null,map__11277__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__11277__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__11277__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__11277__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__11279 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__11279__$1 = (((((!((map__11279 == null))))?(((((map__11279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11279):map__11279);
var name = cljs.core.get.call(null,map__11279__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__11281){
var map__11282 = p__11281;
var map__11282__$1 = (((((!((map__11282 == null))))?(((((map__11282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11282):map__11282);
var expr = cljs.core.get.call(null,map__11282__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__11282__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__11282__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__11284_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11284_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__11285){
var map__11286 = p__11285;
var map__11286__$1 = (((((!((map__11286 == null))))?(((((map__11286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11286):map__11286);
var env = cljs.core.get.call(null,map__11286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__11286__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11286__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__11288){
var map__11289 = p__11288;
var map__11289__$1 = (((((!((map__11289 == null))))?(((((map__11289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11289):map__11289);
var items = cljs.core.get.call(null,map__11289__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__11291_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11291_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__11292){
var map__11293 = p__11292;
var map__11293__$1 = (((((!((map__11293 == null))))?(((((map__11293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11293):map__11293);
var items = cljs.core.get.call(null,map__11293__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11293__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5804__auto___11317 = cljs.core.seq.call(null,items);
if(temp__5804__auto___11317){
var items_11318__$1 = temp__5804__auto___11317;
var vec__11295_11319 = items_11318__$1;
var seq__11296_11320 = cljs.core.seq.call(null,vec__11295_11319);
var first__11297_11321 = cljs.core.first.call(null,seq__11296_11320);
var seq__11296_11322__$1 = cljs.core.next.call(null,seq__11296_11320);
var vec__11298_11323 = first__11297_11321;
var k_11324 = cljs.core.nth.call(null,vec__11298_11323,(0),null);
var v_11325 = cljs.core.nth.call(null,vec__11298_11323,(1),null);
var r_11326 = seq__11296_11322__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_11324),"\": ",emit_js_object_val.call(null,v_11325));

var seq__11301_11327 = cljs.core.seq.call(null,r_11326);
var chunk__11302_11328 = null;
var count__11303_11329 = (0);
var i__11304_11330 = (0);
while(true){
if((i__11304_11330 < count__11303_11329)){
var vec__11311_11331 = cljs.core._nth.call(null,chunk__11302_11328,i__11304_11330);
var k_11332__$1 = cljs.core.nth.call(null,vec__11311_11331,(0),null);
var v_11333__$1 = cljs.core.nth.call(null,vec__11311_11331,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11332__$1),"\": ",emit_js_object_val.call(null,v_11333__$1));


var G__11334 = seq__11301_11327;
var G__11335 = chunk__11302_11328;
var G__11336 = count__11303_11329;
var G__11337 = (i__11304_11330 + (1));
seq__11301_11327 = G__11334;
chunk__11302_11328 = G__11335;
count__11303_11329 = G__11336;
i__11304_11330 = G__11337;
continue;
} else {
var temp__5804__auto___11338__$1 = cljs.core.seq.call(null,seq__11301_11327);
if(temp__5804__auto___11338__$1){
var seq__11301_11339__$1 = temp__5804__auto___11338__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11301_11339__$1)){
var c__4550__auto___11340 = cljs.core.chunk_first.call(null,seq__11301_11339__$1);
var G__11341 = cljs.core.chunk_rest.call(null,seq__11301_11339__$1);
var G__11342 = c__4550__auto___11340;
var G__11343 = cljs.core.count.call(null,c__4550__auto___11340);
var G__11344 = (0);
seq__11301_11327 = G__11341;
chunk__11302_11328 = G__11342;
count__11303_11329 = G__11343;
i__11304_11330 = G__11344;
continue;
} else {
var vec__11314_11345 = cljs.core.first.call(null,seq__11301_11339__$1);
var k_11346__$1 = cljs.core.nth.call(null,vec__11314_11345,(0),null);
var v_11347__$1 = cljs.core.nth.call(null,vec__11314_11345,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11346__$1),"\": ",emit_js_object_val.call(null,v_11347__$1));


var G__11348 = cljs.core.next.call(null,seq__11301_11339__$1);
var G__11349 = null;
var G__11350 = (0);
var G__11351 = (0);
seq__11301_11327 = G__11348;
chunk__11302_11328 = G__11349;
count__11303_11329 = G__11350;
i__11304_11330 = G__11351;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__11352){
var map__11353 = p__11352;
var map__11353__$1 = (((((!((map__11353 == null))))?(((((map__11353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11353):map__11353);
var keys = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__11355){
var map__11356 = p__11355;
var map__11356__$1 = (((((!((map__11356 == null))))?(((((map__11356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11356):map__11356);
var items = cljs.core.get.call(null,map__11356__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11356__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__11358){
var map__11359 = p__11358;
var map__11359__$1 = (((((!((map__11359 == null))))?(((((map__11359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11359):map__11359);
var expr = cljs.core.get.call(null,map__11359__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__11361){
var map__11362 = p__11361;
var map__11362__$1 = (((((!((map__11362 == null))))?(((((map__11362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11362):map__11362);
var form = cljs.core.get.call(null,map__11362__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__11362__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__11364 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11364__$1 = (((((!((map__11364 == null))))?(((((map__11364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11364):map__11364);
var op = cljs.core.get.call(null,map__11364__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11364__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11364__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__11366 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11366__$1 = (((((!((map__11366 == null))))?(((((map__11366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11366):map__11366);
var op = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__11368){
var map__11369 = p__11368;
var map__11369__$1 = (((((!((map__11369 == null))))?(((((map__11369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11369):map__11369);
var test = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__11371){
var map__11372 = p__11371;
var map__11372__$1 = (((((!((map__11372 == null))))?(((((map__11372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11372):map__11372);
var v = cljs.core.get.call(null,map__11372__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__11372__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__11372__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__11372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__11374_11410 = cljs.core.seq.call(null,nodes);
var chunk__11375_11411 = null;
var count__11376_11412 = (0);
var i__11377_11413 = (0);
while(true){
if((i__11377_11413 < count__11376_11412)){
var map__11394_11414 = cljs.core._nth.call(null,chunk__11375_11411,i__11377_11413);
var map__11394_11415__$1 = (((((!((map__11394_11414 == null))))?(((((map__11394_11414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11394_11414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11394_11414):map__11394_11414);
var ts_11416 = cljs.core.get.call(null,map__11394_11415__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11395_11417 = cljs.core.get.call(null,map__11394_11415__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11395_11418__$1 = (((((!((map__11395_11417 == null))))?(((((map__11395_11417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11395_11417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11395_11417):map__11395_11417);
var then_11419 = cljs.core.get.call(null,map__11395_11418__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11398_11420 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11416));
var chunk__11399_11421 = null;
var count__11400_11422 = (0);
var i__11401_11423 = (0);
while(true){
if((i__11401_11423 < count__11400_11422)){
var test_11424 = cljs.core._nth.call(null,chunk__11399_11421,i__11401_11423);
cljs.compiler.emitln.call(null,"case ",test_11424,":");


var G__11425 = seq__11398_11420;
var G__11426 = chunk__11399_11421;
var G__11427 = count__11400_11422;
var G__11428 = (i__11401_11423 + (1));
seq__11398_11420 = G__11425;
chunk__11399_11421 = G__11426;
count__11400_11422 = G__11427;
i__11401_11423 = G__11428;
continue;
} else {
var temp__5804__auto___11429 = cljs.core.seq.call(null,seq__11398_11420);
if(temp__5804__auto___11429){
var seq__11398_11430__$1 = temp__5804__auto___11429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11398_11430__$1)){
var c__4550__auto___11431 = cljs.core.chunk_first.call(null,seq__11398_11430__$1);
var G__11432 = cljs.core.chunk_rest.call(null,seq__11398_11430__$1);
var G__11433 = c__4550__auto___11431;
var G__11434 = cljs.core.count.call(null,c__4550__auto___11431);
var G__11435 = (0);
seq__11398_11420 = G__11432;
chunk__11399_11421 = G__11433;
count__11400_11422 = G__11434;
i__11401_11423 = G__11435;
continue;
} else {
var test_11436 = cljs.core.first.call(null,seq__11398_11430__$1);
cljs.compiler.emitln.call(null,"case ",test_11436,":");


var G__11437 = cljs.core.next.call(null,seq__11398_11430__$1);
var G__11438 = null;
var G__11439 = (0);
var G__11440 = (0);
seq__11398_11420 = G__11437;
chunk__11399_11421 = G__11438;
count__11400_11422 = G__11439;
i__11401_11423 = G__11440;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11419);
} else {
cljs.compiler.emitln.call(null,then_11419);
}

cljs.compiler.emitln.call(null,"break;");


var G__11441 = seq__11374_11410;
var G__11442 = chunk__11375_11411;
var G__11443 = count__11376_11412;
var G__11444 = (i__11377_11413 + (1));
seq__11374_11410 = G__11441;
chunk__11375_11411 = G__11442;
count__11376_11412 = G__11443;
i__11377_11413 = G__11444;
continue;
} else {
var temp__5804__auto___11445 = cljs.core.seq.call(null,seq__11374_11410);
if(temp__5804__auto___11445){
var seq__11374_11446__$1 = temp__5804__auto___11445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11374_11446__$1)){
var c__4550__auto___11447 = cljs.core.chunk_first.call(null,seq__11374_11446__$1);
var G__11448 = cljs.core.chunk_rest.call(null,seq__11374_11446__$1);
var G__11449 = c__4550__auto___11447;
var G__11450 = cljs.core.count.call(null,c__4550__auto___11447);
var G__11451 = (0);
seq__11374_11410 = G__11448;
chunk__11375_11411 = G__11449;
count__11376_11412 = G__11450;
i__11377_11413 = G__11451;
continue;
} else {
var map__11402_11452 = cljs.core.first.call(null,seq__11374_11446__$1);
var map__11402_11453__$1 = (((((!((map__11402_11452 == null))))?(((((map__11402_11452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11402_11452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11402_11452):map__11402_11452);
var ts_11454 = cljs.core.get.call(null,map__11402_11453__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11403_11455 = cljs.core.get.call(null,map__11402_11453__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11403_11456__$1 = (((((!((map__11403_11455 == null))))?(((((map__11403_11455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11403_11455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11403_11455):map__11403_11455);
var then_11457 = cljs.core.get.call(null,map__11403_11456__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11406_11458 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11454));
var chunk__11407_11459 = null;
var count__11408_11460 = (0);
var i__11409_11461 = (0);
while(true){
if((i__11409_11461 < count__11408_11460)){
var test_11462 = cljs.core._nth.call(null,chunk__11407_11459,i__11409_11461);
cljs.compiler.emitln.call(null,"case ",test_11462,":");


var G__11463 = seq__11406_11458;
var G__11464 = chunk__11407_11459;
var G__11465 = count__11408_11460;
var G__11466 = (i__11409_11461 + (1));
seq__11406_11458 = G__11463;
chunk__11407_11459 = G__11464;
count__11408_11460 = G__11465;
i__11409_11461 = G__11466;
continue;
} else {
var temp__5804__auto___11467__$1 = cljs.core.seq.call(null,seq__11406_11458);
if(temp__5804__auto___11467__$1){
var seq__11406_11468__$1 = temp__5804__auto___11467__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11406_11468__$1)){
var c__4550__auto___11469 = cljs.core.chunk_first.call(null,seq__11406_11468__$1);
var G__11470 = cljs.core.chunk_rest.call(null,seq__11406_11468__$1);
var G__11471 = c__4550__auto___11469;
var G__11472 = cljs.core.count.call(null,c__4550__auto___11469);
var G__11473 = (0);
seq__11406_11458 = G__11470;
chunk__11407_11459 = G__11471;
count__11408_11460 = G__11472;
i__11409_11461 = G__11473;
continue;
} else {
var test_11474 = cljs.core.first.call(null,seq__11406_11468__$1);
cljs.compiler.emitln.call(null,"case ",test_11474,":");


var G__11475 = cljs.core.next.call(null,seq__11406_11468__$1);
var G__11476 = null;
var G__11477 = (0);
var G__11478 = (0);
seq__11406_11458 = G__11475;
chunk__11407_11459 = G__11476;
count__11408_11460 = G__11477;
i__11409_11461 = G__11478;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11457);
} else {
cljs.compiler.emitln.call(null,then_11457);
}

cljs.compiler.emitln.call(null,"break;");


var G__11479 = cljs.core.next.call(null,seq__11374_11446__$1);
var G__11480 = null;
var G__11481 = (0);
var G__11482 = (0);
seq__11374_11410 = G__11479;
chunk__11375_11411 = G__11480;
count__11376_11412 = G__11481;
i__11377_11413 = G__11482;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__11483){
var map__11484 = p__11483;
var map__11484__$1 = (((((!((map__11484 == null))))?(((((map__11484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11484):map__11484);
var throw$ = cljs.core.get.call(null,map__11484__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__11484__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__11487 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__11487,(0),null);
var rstr = cljs.core.nth.call(null,vec__11487,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__11487,fstr,rstr,ret_t,axstr){
return (function (p1__11486_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11486_SHARP_);
});})(idx,vec__11487,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__11490 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__11490,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__11490;
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
return (function (p1__11491_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11491_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__11492 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11493 = cljs.core.seq.call(null,vec__11492);
var first__11494 = cljs.core.first.call(null,seq__11493);
var seq__11493__$1 = cljs.core.next.call(null,seq__11493);
var p = first__11494;
var first__11494__$1 = cljs.core.first.call(null,seq__11493__$1);
var seq__11493__$2 = cljs.core.next.call(null,seq__11493__$1);
var ts = first__11494__$1;
var first__11494__$2 = cljs.core.first.call(null,seq__11493__$2);
var seq__11493__$3 = cljs.core.next.call(null,seq__11493__$2);
var n = first__11494__$2;
var xs = seq__11493__$3;
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
var vec__11495 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11496 = cljs.core.seq.call(null,vec__11495);
var first__11497 = cljs.core.first.call(null,seq__11496);
var seq__11496__$1 = cljs.core.next.call(null,seq__11496);
var p = first__11497;
var first__11497__$1 = cljs.core.first.call(null,seq__11496__$1);
var seq__11496__$2 = cljs.core.next.call(null,seq__11496__$1);
var ts = first__11497__$1;
var xs = seq__11496__$2;
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
var G__11500 = arguments.length;
switch (G__11500) {
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
var vec__11508 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__11498_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__11498_SHARP_);
} else {
return p1__11498_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__11509 = cljs.core.seq.call(null,vec__11508);
var first__11510 = cljs.core.first.call(null,seq__11509);
var seq__11509__$1 = cljs.core.next.call(null,seq__11509);
var x = first__11510;
var ys = seq__11509__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__11511 = cljs.core.seq.call(null,ys);
var chunk__11512 = null;
var count__11513 = (0);
var i__11514 = (0);
while(true){
if((i__11514 < count__11513)){
var next_line = cljs.core._nth.call(null,chunk__11512,i__11514);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11520 = seq__11511;
var G__11521 = chunk__11512;
var G__11522 = count__11513;
var G__11523 = (i__11514 + (1));
seq__11511 = G__11520;
chunk__11512 = G__11521;
count__11513 = G__11522;
i__11514 = G__11523;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11511);
if(temp__5804__auto__){
var seq__11511__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11511__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11511__$1);
var G__11524 = cljs.core.chunk_rest.call(null,seq__11511__$1);
var G__11525 = c__4550__auto__;
var G__11526 = cljs.core.count.call(null,c__4550__auto__);
var G__11527 = (0);
seq__11511 = G__11524;
chunk__11512 = G__11525;
count__11513 = G__11526;
i__11514 = G__11527;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__11511__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11528 = cljs.core.next.call(null,seq__11511__$1);
var G__11529 = null;
var G__11530 = (0);
var G__11531 = (0);
seq__11511 = G__11528;
chunk__11512 = G__11529;
count__11513 = G__11530;
i__11514 = G__11531;
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

var seq__11515_11532 = cljs.core.seq.call(null,docs__$2);
var chunk__11516_11533 = null;
var count__11517_11534 = (0);
var i__11518_11535 = (0);
while(true){
if((i__11518_11535 < count__11517_11534)){
var e_11536 = cljs.core._nth.call(null,chunk__11516_11533,i__11518_11535);
if(cljs.core.truth_(e_11536)){
print_comment_lines.call(null,e_11536);
} else {
}


var G__11537 = seq__11515_11532;
var G__11538 = chunk__11516_11533;
var G__11539 = count__11517_11534;
var G__11540 = (i__11518_11535 + (1));
seq__11515_11532 = G__11537;
chunk__11516_11533 = G__11538;
count__11517_11534 = G__11539;
i__11518_11535 = G__11540;
continue;
} else {
var temp__5804__auto___11541 = cljs.core.seq.call(null,seq__11515_11532);
if(temp__5804__auto___11541){
var seq__11515_11542__$1 = temp__5804__auto___11541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11515_11542__$1)){
var c__4550__auto___11543 = cljs.core.chunk_first.call(null,seq__11515_11542__$1);
var G__11544 = cljs.core.chunk_rest.call(null,seq__11515_11542__$1);
var G__11545 = c__4550__auto___11543;
var G__11546 = cljs.core.count.call(null,c__4550__auto___11543);
var G__11547 = (0);
seq__11515_11532 = G__11544;
chunk__11516_11533 = G__11545;
count__11517_11534 = G__11546;
i__11518_11535 = G__11547;
continue;
} else {
var e_11548 = cljs.core.first.call(null,seq__11515_11542__$1);
if(cljs.core.truth_(e_11548)){
print_comment_lines.call(null,e_11548);
} else {
}


var G__11549 = cljs.core.next.call(null,seq__11515_11542__$1);
var G__11550 = null;
var G__11551 = (0);
var G__11552 = (0);
seq__11515_11532 = G__11549;
chunk__11516_11533 = G__11550;
count__11517_11534 = G__11551;
i__11518_11535 = G__11552;
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
return (function (p1__11554_SHARP_){
return goog.string.startsWith(p1__11554_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__11555){
var map__11556 = p__11555;
var map__11556__$1 = (((((!((map__11556 == null))))?(((((map__11556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11556):map__11556);
var doc = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__11556__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emits.call(null," = ",(function (){var temp__5802__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5802__auto__)){
var define = temp__5802__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__11558){
var map__11559 = p__11558;
var map__11559__$1 = (((((!((map__11559 == null))))?(((((map__11559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11559):map__11559);
var name = cljs.core.get.call(null,map__11559__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11559__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11559__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__11561_11585 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__11562_11586 = null;
var count__11563_11587 = (0);
var i__11564_11588 = (0);
while(true){
if((i__11564_11588 < count__11563_11587)){
var vec__11571_11589 = cljs.core._nth.call(null,chunk__11562_11586,i__11564_11588);
var i_11590 = cljs.core.nth.call(null,vec__11571_11589,(0),null);
var param_11591 = cljs.core.nth.call(null,vec__11571_11589,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11591);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11592 = seq__11561_11585;
var G__11593 = chunk__11562_11586;
var G__11594 = count__11563_11587;
var G__11595 = (i__11564_11588 + (1));
seq__11561_11585 = G__11592;
chunk__11562_11586 = G__11593;
count__11563_11587 = G__11594;
i__11564_11588 = G__11595;
continue;
} else {
var temp__5804__auto___11596 = cljs.core.seq.call(null,seq__11561_11585);
if(temp__5804__auto___11596){
var seq__11561_11597__$1 = temp__5804__auto___11596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11561_11597__$1)){
var c__4550__auto___11598 = cljs.core.chunk_first.call(null,seq__11561_11597__$1);
var G__11599 = cljs.core.chunk_rest.call(null,seq__11561_11597__$1);
var G__11600 = c__4550__auto___11598;
var G__11601 = cljs.core.count.call(null,c__4550__auto___11598);
var G__11602 = (0);
seq__11561_11585 = G__11599;
chunk__11562_11586 = G__11600;
count__11563_11587 = G__11601;
i__11564_11588 = G__11602;
continue;
} else {
var vec__11574_11603 = cljs.core.first.call(null,seq__11561_11597__$1);
var i_11604 = cljs.core.nth.call(null,vec__11574_11603,(0),null);
var param_11605 = cljs.core.nth.call(null,vec__11574_11603,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11605);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11606 = cljs.core.next.call(null,seq__11561_11597__$1);
var G__11607 = null;
var G__11608 = (0);
var G__11609 = (0);
seq__11561_11585 = G__11606;
chunk__11562_11586 = G__11607;
count__11563_11587 = G__11608;
i__11564_11588 = G__11609;
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

var seq__11577_11610 = cljs.core.seq.call(null,params);
var chunk__11578_11611 = null;
var count__11579_11612 = (0);
var i__11580_11613 = (0);
while(true){
if((i__11580_11613 < count__11579_11612)){
var param_11614 = cljs.core._nth.call(null,chunk__11578_11611,i__11580_11613);
cljs.compiler.emit.call(null,param_11614);

if(cljs.core._EQ_.call(null,param_11614,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11615 = seq__11577_11610;
var G__11616 = chunk__11578_11611;
var G__11617 = count__11579_11612;
var G__11618 = (i__11580_11613 + (1));
seq__11577_11610 = G__11615;
chunk__11578_11611 = G__11616;
count__11579_11612 = G__11617;
i__11580_11613 = G__11618;
continue;
} else {
var temp__5804__auto___11619 = cljs.core.seq.call(null,seq__11577_11610);
if(temp__5804__auto___11619){
var seq__11577_11620__$1 = temp__5804__auto___11619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11577_11620__$1)){
var c__4550__auto___11621 = cljs.core.chunk_first.call(null,seq__11577_11620__$1);
var G__11622 = cljs.core.chunk_rest.call(null,seq__11577_11620__$1);
var G__11623 = c__4550__auto___11621;
var G__11624 = cljs.core.count.call(null,c__4550__auto___11621);
var G__11625 = (0);
seq__11577_11610 = G__11622;
chunk__11578_11611 = G__11623;
count__11579_11612 = G__11624;
i__11580_11613 = G__11625;
continue;
} else {
var param_11626 = cljs.core.first.call(null,seq__11577_11620__$1);
cljs.compiler.emit.call(null,param_11626);

if(cljs.core._EQ_.call(null,param_11626,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11627 = cljs.core.next.call(null,seq__11577_11620__$1);
var G__11628 = null;
var G__11629 = (0);
var G__11630 = (0);
seq__11577_11610 = G__11627;
chunk__11578_11611 = G__11628;
count__11579_11612 = G__11629;
i__11580_11613 = G__11630;
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

var seq__11581_11631 = cljs.core.seq.call(null,params);
var chunk__11582_11632 = null;
var count__11583_11633 = (0);
var i__11584_11634 = (0);
while(true){
if((i__11584_11634 < count__11583_11633)){
var param_11635 = cljs.core._nth.call(null,chunk__11582_11632,i__11584_11634);
cljs.compiler.emit.call(null,param_11635);

if(cljs.core._EQ_.call(null,param_11635,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11636 = seq__11581_11631;
var G__11637 = chunk__11582_11632;
var G__11638 = count__11583_11633;
var G__11639 = (i__11584_11634 + (1));
seq__11581_11631 = G__11636;
chunk__11582_11632 = G__11637;
count__11583_11633 = G__11638;
i__11584_11634 = G__11639;
continue;
} else {
var temp__5804__auto___11640 = cljs.core.seq.call(null,seq__11581_11631);
if(temp__5804__auto___11640){
var seq__11581_11641__$1 = temp__5804__auto___11640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11581_11641__$1)){
var c__4550__auto___11642 = cljs.core.chunk_first.call(null,seq__11581_11641__$1);
var G__11643 = cljs.core.chunk_rest.call(null,seq__11581_11641__$1);
var G__11644 = c__4550__auto___11642;
var G__11645 = cljs.core.count.call(null,c__4550__auto___11642);
var G__11646 = (0);
seq__11581_11631 = G__11643;
chunk__11582_11632 = G__11644;
count__11583_11633 = G__11645;
i__11584_11634 = G__11646;
continue;
} else {
var param_11647 = cljs.core.first.call(null,seq__11581_11641__$1);
cljs.compiler.emit.call(null,param_11647);

if(cljs.core._EQ_.call(null,param_11647,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11648 = cljs.core.next.call(null,seq__11581_11641__$1);
var G__11649 = null;
var G__11650 = (0);
var G__11651 = (0);
seq__11581_11631 = G__11648;
chunk__11582_11632 = G__11649;
count__11583_11633 = G__11650;
i__11584_11634 = G__11651;
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
var seq__11652 = cljs.core.seq.call(null,params);
var chunk__11653 = null;
var count__11654 = (0);
var i__11655 = (0);
while(true){
if((i__11655 < count__11654)){
var param = cljs.core._nth.call(null,chunk__11653,i__11655);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11656 = seq__11652;
var G__11657 = chunk__11653;
var G__11658 = count__11654;
var G__11659 = (i__11655 + (1));
seq__11652 = G__11656;
chunk__11653 = G__11657;
count__11654 = G__11658;
i__11655 = G__11659;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11652);
if(temp__5804__auto__){
var seq__11652__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11652__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11652__$1);
var G__11660 = cljs.core.chunk_rest.call(null,seq__11652__$1);
var G__11661 = c__4550__auto__;
var G__11662 = cljs.core.count.call(null,c__4550__auto__);
var G__11663 = (0);
seq__11652 = G__11660;
chunk__11653 = G__11661;
count__11654 = G__11662;
i__11655 = G__11663;
continue;
} else {
var param = cljs.core.first.call(null,seq__11652__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11664 = cljs.core.next.call(null,seq__11652__$1);
var G__11665 = null;
var G__11666 = (0);
var G__11667 = (0);
seq__11652 = G__11664;
chunk__11653 = G__11665;
count__11654 = G__11666;
i__11655 = G__11667;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__11668){
var map__11669 = p__11668;
var map__11669__$1 = (((((!((map__11669 == null))))?(((((map__11669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11669):map__11669);
var expr = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__11671){
var map__11672 = p__11671;
var map__11672__$1 = (((((!((map__11672 == null))))?(((((map__11672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11672):map__11672);
var f = map__11672__$1;
var expr = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_11682__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_11683 = cljs.compiler.munge.call(null,name_11682__$1);
var delegate_name_11684 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_11683),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_11684," = function (");

var seq__11674_11685 = cljs.core.seq.call(null,params);
var chunk__11675_11686 = null;
var count__11676_11687 = (0);
var i__11677_11688 = (0);
while(true){
if((i__11677_11688 < count__11676_11687)){
var param_11689 = cljs.core._nth.call(null,chunk__11675_11686,i__11677_11688);
cljs.compiler.emit.call(null,param_11689);

if(cljs.core._EQ_.call(null,param_11689,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11690 = seq__11674_11685;
var G__11691 = chunk__11675_11686;
var G__11692 = count__11676_11687;
var G__11693 = (i__11677_11688 + (1));
seq__11674_11685 = G__11690;
chunk__11675_11686 = G__11691;
count__11676_11687 = G__11692;
i__11677_11688 = G__11693;
continue;
} else {
var temp__5804__auto___11694 = cljs.core.seq.call(null,seq__11674_11685);
if(temp__5804__auto___11694){
var seq__11674_11695__$1 = temp__5804__auto___11694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11674_11695__$1)){
var c__4550__auto___11696 = cljs.core.chunk_first.call(null,seq__11674_11695__$1);
var G__11697 = cljs.core.chunk_rest.call(null,seq__11674_11695__$1);
var G__11698 = c__4550__auto___11696;
var G__11699 = cljs.core.count.call(null,c__4550__auto___11696);
var G__11700 = (0);
seq__11674_11685 = G__11697;
chunk__11675_11686 = G__11698;
count__11676_11687 = G__11699;
i__11677_11688 = G__11700;
continue;
} else {
var param_11701 = cljs.core.first.call(null,seq__11674_11695__$1);
cljs.compiler.emit.call(null,param_11701);

if(cljs.core._EQ_.call(null,param_11701,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11702 = cljs.core.next.call(null,seq__11674_11695__$1);
var G__11703 = null;
var G__11704 = (0);
var G__11705 = (0);
seq__11674_11685 = G__11702;
chunk__11675_11686 = G__11703;
count__11676_11687 = G__11704;
i__11677_11688 = G__11705;
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

cljs.compiler.emitln.call(null,"var ",mname_11683," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_11706 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_11706,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_11684,".call(this,");

var seq__11678_11707 = cljs.core.seq.call(null,params);
var chunk__11679_11708 = null;
var count__11680_11709 = (0);
var i__11681_11710 = (0);
while(true){
if((i__11681_11710 < count__11680_11709)){
var param_11711 = cljs.core._nth.call(null,chunk__11679_11708,i__11681_11710);
cljs.compiler.emit.call(null,param_11711);

if(cljs.core._EQ_.call(null,param_11711,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11712 = seq__11678_11707;
var G__11713 = chunk__11679_11708;
var G__11714 = count__11680_11709;
var G__11715 = (i__11681_11710 + (1));
seq__11678_11707 = G__11712;
chunk__11679_11708 = G__11713;
count__11680_11709 = G__11714;
i__11681_11710 = G__11715;
continue;
} else {
var temp__5804__auto___11716 = cljs.core.seq.call(null,seq__11678_11707);
if(temp__5804__auto___11716){
var seq__11678_11717__$1 = temp__5804__auto___11716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11678_11717__$1)){
var c__4550__auto___11718 = cljs.core.chunk_first.call(null,seq__11678_11717__$1);
var G__11719 = cljs.core.chunk_rest.call(null,seq__11678_11717__$1);
var G__11720 = c__4550__auto___11718;
var G__11721 = cljs.core.count.call(null,c__4550__auto___11718);
var G__11722 = (0);
seq__11678_11707 = G__11719;
chunk__11679_11708 = G__11720;
count__11680_11709 = G__11721;
i__11681_11710 = G__11722;
continue;
} else {
var param_11723 = cljs.core.first.call(null,seq__11678_11717__$1);
cljs.compiler.emit.call(null,param_11723);

if(cljs.core._EQ_.call(null,param_11723,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11724 = cljs.core.next.call(null,seq__11678_11717__$1);
var G__11725 = null;
var G__11726 = (0);
var G__11727 = (0);
seq__11678_11707 = G__11724;
chunk__11679_11708 = G__11725;
count__11680_11709 = G__11726;
i__11681_11710 = G__11727;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_11683,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_11683,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_11682__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_11683,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_11684,";");

cljs.compiler.emitln.call(null,"return ",mname_11683,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__11731){
var map__11732 = p__11731;
var map__11732__$1 = (((((!((map__11732 == null))))?(((((map__11732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11732):map__11732);
var variadic = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__11732,map__11732__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11728_SHARP_){
var and__4120__auto__ = p1__11728_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__11728_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__11732,map__11732__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_11785__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_11786 = cljs.compiler.munge.call(null,name_11785__$1);
var maxparams_11787 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_11788 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_11785__$1,mname_11786,maxparams_11787,loop_locals,map__11732,map__11732__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_11786),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_11785__$1,mname_11786,maxparams_11787,loop_locals,map__11732,map__11732__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_11789 = cljs.core.sort_by.call(null,((function (name_11785__$1,mname_11786,maxparams_11787,mmap_11788,loop_locals,map__11732,map__11732__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11729_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11729_SHARP_)));
});})(name_11785__$1,mname_11786,maxparams_11787,mmap_11788,loop_locals,map__11732,map__11732__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_11788));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_11786," = null;");

var seq__11734_11790 = cljs.core.seq.call(null,ms_11789);
var chunk__11735_11791 = null;
var count__11736_11792 = (0);
var i__11737_11793 = (0);
while(true){
if((i__11737_11793 < count__11736_11792)){
var vec__11744_11794 = cljs.core._nth.call(null,chunk__11735_11791,i__11737_11793);
var n_11795 = cljs.core.nth.call(null,vec__11744_11794,(0),null);
var meth_11796 = cljs.core.nth.call(null,vec__11744_11794,(1),null);
cljs.compiler.emits.call(null,"var ",n_11795," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11796))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_11796);
} else {
cljs.compiler.emit_fn_method.call(null,meth_11796);
}

cljs.compiler.emitln.call(null,";");


var G__11797 = seq__11734_11790;
var G__11798 = chunk__11735_11791;
var G__11799 = count__11736_11792;
var G__11800 = (i__11737_11793 + (1));
seq__11734_11790 = G__11797;
chunk__11735_11791 = G__11798;
count__11736_11792 = G__11799;
i__11737_11793 = G__11800;
continue;
} else {
var temp__5804__auto___11801 = cljs.core.seq.call(null,seq__11734_11790);
if(temp__5804__auto___11801){
var seq__11734_11802__$1 = temp__5804__auto___11801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11734_11802__$1)){
var c__4550__auto___11803 = cljs.core.chunk_first.call(null,seq__11734_11802__$1);
var G__11804 = cljs.core.chunk_rest.call(null,seq__11734_11802__$1);
var G__11805 = c__4550__auto___11803;
var G__11806 = cljs.core.count.call(null,c__4550__auto___11803);
var G__11807 = (0);
seq__11734_11790 = G__11804;
chunk__11735_11791 = G__11805;
count__11736_11792 = G__11806;
i__11737_11793 = G__11807;
continue;
} else {
var vec__11747_11808 = cljs.core.first.call(null,seq__11734_11802__$1);
var n_11809 = cljs.core.nth.call(null,vec__11747_11808,(0),null);
var meth_11810 = cljs.core.nth.call(null,vec__11747_11808,(1),null);
cljs.compiler.emits.call(null,"var ",n_11809," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11810))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_11810);
} else {
cljs.compiler.emit_fn_method.call(null,meth_11810);
}

cljs.compiler.emitln.call(null,";");


var G__11811 = cljs.core.next.call(null,seq__11734_11802__$1);
var G__11812 = null;
var G__11813 = (0);
var G__11814 = (0);
seq__11734_11790 = G__11811;
chunk__11735_11791 = G__11812;
count__11736_11792 = G__11813;
i__11737_11793 = G__11814;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_11786," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_11787),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_11787)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_11787));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__11750_11815 = cljs.core.seq.call(null,ms_11789);
var chunk__11751_11816 = null;
var count__11752_11817 = (0);
var i__11753_11818 = (0);
while(true){
if((i__11753_11818 < count__11752_11817)){
var vec__11760_11819 = cljs.core._nth.call(null,chunk__11751_11816,i__11753_11818);
var n_11820 = cljs.core.nth.call(null,vec__11760_11819,(0),null);
var meth_11821 = cljs.core.nth.call(null,vec__11760_11819,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11821))){
cljs.compiler.emitln.call(null,"default:");

var restarg_11822 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_11822," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_11823 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_11822," = new cljs.core.IndexedSeq(",a_11823,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_11820,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_11787)),(((cljs.core.count.call(null,maxparams_11787) > (1)))?", ":null),restarg_11822,");");
} else {
var pcnt_11824 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11821));
cljs.compiler.emitln.call(null,"case ",pcnt_11824,":");

cljs.compiler.emitln.call(null,"return ",n_11820,".call(this",(((pcnt_11824 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_11824,maxparams_11787)),null,(1),null)),(2),null))),");");
}


var G__11825 = seq__11750_11815;
var G__11826 = chunk__11751_11816;
var G__11827 = count__11752_11817;
var G__11828 = (i__11753_11818 + (1));
seq__11750_11815 = G__11825;
chunk__11751_11816 = G__11826;
count__11752_11817 = G__11827;
i__11753_11818 = G__11828;
continue;
} else {
var temp__5804__auto___11829 = cljs.core.seq.call(null,seq__11750_11815);
if(temp__5804__auto___11829){
var seq__11750_11830__$1 = temp__5804__auto___11829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11750_11830__$1)){
var c__4550__auto___11831 = cljs.core.chunk_first.call(null,seq__11750_11830__$1);
var G__11832 = cljs.core.chunk_rest.call(null,seq__11750_11830__$1);
var G__11833 = c__4550__auto___11831;
var G__11834 = cljs.core.count.call(null,c__4550__auto___11831);
var G__11835 = (0);
seq__11750_11815 = G__11832;
chunk__11751_11816 = G__11833;
count__11752_11817 = G__11834;
i__11753_11818 = G__11835;
continue;
} else {
var vec__11763_11836 = cljs.core.first.call(null,seq__11750_11830__$1);
var n_11837 = cljs.core.nth.call(null,vec__11763_11836,(0),null);
var meth_11838 = cljs.core.nth.call(null,vec__11763_11836,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11838))){
cljs.compiler.emitln.call(null,"default:");

var restarg_11839 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_11839," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_11840 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_11839," = new cljs.core.IndexedSeq(",a_11840,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_11837,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_11787)),(((cljs.core.count.call(null,maxparams_11787) > (1)))?", ":null),restarg_11839,");");
} else {
var pcnt_11841 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11838));
cljs.compiler.emitln.call(null,"case ",pcnt_11841,":");

cljs.compiler.emitln.call(null,"return ",n_11837,".call(this",(((pcnt_11841 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_11841,maxparams_11787)),null,(1),null)),(2),null))),");");
}


var G__11842 = cljs.core.next.call(null,seq__11750_11830__$1);
var G__11843 = null;
var G__11844 = (0);
var G__11845 = (0);
seq__11750_11815 = G__11842;
chunk__11751_11816 = G__11843;
count__11752_11817 = G__11844;
i__11753_11818 = G__11845;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_11846 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_11789)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_11846,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_11786,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_11786,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_11785__$1,mname_11786,maxparams_11787,mmap_11788,ms_11789,loop_locals,map__11732,map__11732__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11730_SHARP_){
var vec__11766 = p1__11730_SHARP_;
var n = cljs.core.nth.call(null,vec__11766,(0),null);
var m = cljs.core.nth.call(null,vec__11766,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_11785__$1,mname_11786,maxparams_11787,mmap_11788,ms_11789,loop_locals,map__11732,map__11732__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_11789),".cljs$lang$applyTo;");
} else {
}

var seq__11769_11847 = cljs.core.seq.call(null,ms_11789);
var chunk__11770_11848 = null;
var count__11771_11849 = (0);
var i__11772_11850 = (0);
while(true){
if((i__11772_11850 < count__11771_11849)){
var vec__11779_11851 = cljs.core._nth.call(null,chunk__11770_11848,i__11772_11850);
var n_11852 = cljs.core.nth.call(null,vec__11779_11851,(0),null);
var meth_11853 = cljs.core.nth.call(null,vec__11779_11851,(1),null);
var c_11854 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11853));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11853))){
cljs.compiler.emitln.call(null,mname_11786,".cljs$core$IFn$_invoke$arity$variadic = ",n_11852,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_11786,".cljs$core$IFn$_invoke$arity$",c_11854," = ",n_11852,";");
}


var G__11855 = seq__11769_11847;
var G__11856 = chunk__11770_11848;
var G__11857 = count__11771_11849;
var G__11858 = (i__11772_11850 + (1));
seq__11769_11847 = G__11855;
chunk__11770_11848 = G__11856;
count__11771_11849 = G__11857;
i__11772_11850 = G__11858;
continue;
} else {
var temp__5804__auto___11859 = cljs.core.seq.call(null,seq__11769_11847);
if(temp__5804__auto___11859){
var seq__11769_11860__$1 = temp__5804__auto___11859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11769_11860__$1)){
var c__4550__auto___11861 = cljs.core.chunk_first.call(null,seq__11769_11860__$1);
var G__11862 = cljs.core.chunk_rest.call(null,seq__11769_11860__$1);
var G__11863 = c__4550__auto___11861;
var G__11864 = cljs.core.count.call(null,c__4550__auto___11861);
var G__11865 = (0);
seq__11769_11847 = G__11862;
chunk__11770_11848 = G__11863;
count__11771_11849 = G__11864;
i__11772_11850 = G__11865;
continue;
} else {
var vec__11782_11866 = cljs.core.first.call(null,seq__11769_11860__$1);
var n_11867 = cljs.core.nth.call(null,vec__11782_11866,(0),null);
var meth_11868 = cljs.core.nth.call(null,vec__11782_11866,(1),null);
var c_11869 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11868));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11868))){
cljs.compiler.emitln.call(null,mname_11786,".cljs$core$IFn$_invoke$arity$variadic = ",n_11867,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_11786,".cljs$core$IFn$_invoke$arity$",c_11869," = ",n_11867,";");
}


var G__11870 = cljs.core.next.call(null,seq__11769_11860__$1);
var G__11871 = null;
var G__11872 = (0);
var G__11873 = (0);
seq__11769_11847 = G__11870;
chunk__11770_11848 = G__11871;
count__11771_11849 = G__11872;
i__11772_11850 = G__11873;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_11786,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__11874){
var map__11875 = p__11874;
var map__11875__$1 = (((((!((map__11875 == null))))?(((((map__11875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11875):map__11875);
var statements = cljs.core.get.call(null,map__11875__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__11875__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__11875__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__11877_11881 = cljs.core.seq.call(null,statements);
var chunk__11878_11882 = null;
var count__11879_11883 = (0);
var i__11880_11884 = (0);
while(true){
if((i__11880_11884 < count__11879_11883)){
var s_11885 = cljs.core._nth.call(null,chunk__11878_11882,i__11880_11884);
cljs.compiler.emitln.call(null,s_11885);


var G__11886 = seq__11877_11881;
var G__11887 = chunk__11878_11882;
var G__11888 = count__11879_11883;
var G__11889 = (i__11880_11884 + (1));
seq__11877_11881 = G__11886;
chunk__11878_11882 = G__11887;
count__11879_11883 = G__11888;
i__11880_11884 = G__11889;
continue;
} else {
var temp__5804__auto___11890 = cljs.core.seq.call(null,seq__11877_11881);
if(temp__5804__auto___11890){
var seq__11877_11891__$1 = temp__5804__auto___11890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11877_11891__$1)){
var c__4550__auto___11892 = cljs.core.chunk_first.call(null,seq__11877_11891__$1);
var G__11893 = cljs.core.chunk_rest.call(null,seq__11877_11891__$1);
var G__11894 = c__4550__auto___11892;
var G__11895 = cljs.core.count.call(null,c__4550__auto___11892);
var G__11896 = (0);
seq__11877_11881 = G__11893;
chunk__11878_11882 = G__11894;
count__11879_11883 = G__11895;
i__11880_11884 = G__11896;
continue;
} else {
var s_11897 = cljs.core.first.call(null,seq__11877_11891__$1);
cljs.compiler.emitln.call(null,s_11897);


var G__11898 = cljs.core.next.call(null,seq__11877_11891__$1);
var G__11899 = null;
var G__11900 = (0);
var G__11901 = (0);
seq__11877_11881 = G__11898;
chunk__11878_11882 = G__11899;
count__11879_11883 = G__11900;
i__11880_11884 = G__11901;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__11902){
var map__11903 = p__11902;
var map__11903__$1 = (((((!((map__11903 == null))))?(((((map__11903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11903):map__11903);
var try$ = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__11905,is_loop){
var map__11906 = p__11905;
var map__11906__$1 = (((((!((map__11906 == null))))?(((((map__11906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11906):map__11906);
var expr = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__11908_11922 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__11909_11923 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__11908_11922,context,map__11906,map__11906__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__11908_11922,context,map__11906,map__11906__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__11909_11923;

try{var seq__11910_11924 = cljs.core.seq.call(null,bindings);
var chunk__11911_11925 = null;
var count__11912_11926 = (0);
var i__11913_11927 = (0);
while(true){
if((i__11913_11927 < count__11912_11926)){
var map__11918_11928 = cljs.core._nth.call(null,chunk__11911_11925,i__11913_11927);
var map__11918_11929__$1 = (((((!((map__11918_11928 == null))))?(((((map__11918_11928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11918_11928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11918_11928):map__11918_11928);
var binding_11930 = map__11918_11929__$1;
var init_11931 = cljs.core.get.call(null,map__11918_11929__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_11930);

cljs.compiler.emitln.call(null," = ",init_11931,";");


var G__11932 = seq__11910_11924;
var G__11933 = chunk__11911_11925;
var G__11934 = count__11912_11926;
var G__11935 = (i__11913_11927 + (1));
seq__11910_11924 = G__11932;
chunk__11911_11925 = G__11933;
count__11912_11926 = G__11934;
i__11913_11927 = G__11935;
continue;
} else {
var temp__5804__auto___11936 = cljs.core.seq.call(null,seq__11910_11924);
if(temp__5804__auto___11936){
var seq__11910_11937__$1 = temp__5804__auto___11936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11910_11937__$1)){
var c__4550__auto___11938 = cljs.core.chunk_first.call(null,seq__11910_11937__$1);
var G__11939 = cljs.core.chunk_rest.call(null,seq__11910_11937__$1);
var G__11940 = c__4550__auto___11938;
var G__11941 = cljs.core.count.call(null,c__4550__auto___11938);
var G__11942 = (0);
seq__11910_11924 = G__11939;
chunk__11911_11925 = G__11940;
count__11912_11926 = G__11941;
i__11913_11927 = G__11942;
continue;
} else {
var map__11920_11943 = cljs.core.first.call(null,seq__11910_11937__$1);
var map__11920_11944__$1 = (((((!((map__11920_11943 == null))))?(((((map__11920_11943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11920_11943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11920_11943):map__11920_11943);
var binding_11945 = map__11920_11944__$1;
var init_11946 = cljs.core.get.call(null,map__11920_11944__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_11945);

cljs.compiler.emitln.call(null," = ",init_11946,";");


var G__11947 = cljs.core.next.call(null,seq__11910_11937__$1);
var G__11948 = null;
var G__11949 = (0);
var G__11950 = (0);
seq__11910_11924 = G__11947;
chunk__11911_11925 = G__11948;
count__11912_11926 = G__11949;
i__11913_11927 = G__11950;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__11908_11922;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__11951){
var map__11952 = p__11951;
var map__11952__$1 = (((((!((map__11952 == null))))?(((((map__11952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11952):map__11952);
var frame = cljs.core.get.call(null,map__11952__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__11952__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__11952__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___11954 = cljs.core.count.call(null,exprs);
var i_11955 = (0);
while(true){
if((i_11955 < n__4607__auto___11954)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_11955)," = ",exprs.call(null,i_11955),";");

var G__11956 = (i_11955 + (1));
i_11955 = G__11956;
continue;
} else {
}
break;
}

var n__4607__auto___11957 = cljs.core.count.call(null,exprs);
var i_11958 = (0);
while(true){
if((i_11958 < n__4607__auto___11957)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_11958))," = ",temps.call(null,i_11958),";");

var G__11959 = (i_11958 + (1));
i_11958 = G__11959;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__11960){
var map__11961 = p__11960;
var map__11961__$1 = (((((!((map__11961 == null))))?(((((map__11961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11961):map__11961);
var expr = cljs.core.get.call(null,map__11961__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__11961__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__11961__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__11963_11975 = cljs.core.seq.call(null,bindings);
var chunk__11964_11976 = null;
var count__11965_11977 = (0);
var i__11966_11978 = (0);
while(true){
if((i__11966_11978 < count__11965_11977)){
var map__11971_11979 = cljs.core._nth.call(null,chunk__11964_11976,i__11966_11978);
var map__11971_11980__$1 = (((((!((map__11971_11979 == null))))?(((((map__11971_11979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11971_11979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11971_11979):map__11971_11979);
var binding_11981 = map__11971_11980__$1;
var init_11982 = cljs.core.get.call(null,map__11971_11980__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_11981)," = ",init_11982,";");


var G__11983 = seq__11963_11975;
var G__11984 = chunk__11964_11976;
var G__11985 = count__11965_11977;
var G__11986 = (i__11966_11978 + (1));
seq__11963_11975 = G__11983;
chunk__11964_11976 = G__11984;
count__11965_11977 = G__11985;
i__11966_11978 = G__11986;
continue;
} else {
var temp__5804__auto___11987 = cljs.core.seq.call(null,seq__11963_11975);
if(temp__5804__auto___11987){
var seq__11963_11988__$1 = temp__5804__auto___11987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11963_11988__$1)){
var c__4550__auto___11989 = cljs.core.chunk_first.call(null,seq__11963_11988__$1);
var G__11990 = cljs.core.chunk_rest.call(null,seq__11963_11988__$1);
var G__11991 = c__4550__auto___11989;
var G__11992 = cljs.core.count.call(null,c__4550__auto___11989);
var G__11993 = (0);
seq__11963_11975 = G__11990;
chunk__11964_11976 = G__11991;
count__11965_11977 = G__11992;
i__11966_11978 = G__11993;
continue;
} else {
var map__11973_11994 = cljs.core.first.call(null,seq__11963_11988__$1);
var map__11973_11995__$1 = (((((!((map__11973_11994 == null))))?(((((map__11973_11994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11973_11994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11973_11994):map__11973_11994);
var binding_11996 = map__11973_11995__$1;
var init_11997 = cljs.core.get.call(null,map__11973_11995__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_11996)," = ",init_11997,";");


var G__11998 = cljs.core.next.call(null,seq__11963_11988__$1);
var G__11999 = null;
var G__12000 = (0);
var G__12001 = (0);
seq__11963_11975 = G__11998;
chunk__11964_11976 = G__11999;
count__11965_11977 = G__12000;
i__11966_11978 = G__12001;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12004){
var map__12005 = p__12004;
var map__12005__$1 = (((((!((map__12005 == null))))?(((((map__12005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12005):map__12005);
var expr = map__12005__$1;
var f = cljs.core.get.call(null,map__12005__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__12005__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12005__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var temp__5804__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5804__auto__)){
var ps = temp__5804__auto__;
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
var or__4131__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
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
var vec__12007 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12005,map__12005__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12005,map__12005__$1,expr,f,args,env){
return (function (p1__12002_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12002_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12005,map__12005__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12005,map__12005__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12005,map__12005__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12005,map__12005__$1,expr,f,args,env){
return (function (p1__12003_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12003_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12005,map__12005__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12005,map__12005__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__12007,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__12007,(1),null);
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_12010 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_12010,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_12011 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_12011,args)),(((mfa_12011 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_12011,args)),"], 0))");
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
var fprop_12012 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_12012," ? ",f__$1,fprop_12012,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_12012," ? ",f__$1,fprop_12012,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12013){
var map__12014 = p__12013;
var map__12014__$1 = (((((!((map__12014 == null))))?(((((map__12014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12014):map__12014);
var ctor = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12016){
var map__12017 = p__12016;
var map__12017__$1 = (((((!((map__12017 == null))))?(((((map__12017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12017):map__12017);
var target = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
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
var map__12019 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12019__$1 = (((((!((map__12019 == null))))?(((((map__12019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12019):map__12019);
var options = cljs.core.get.call(null,map__12019__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__12019__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12020 = options;
var map__12020__$1 = (((((!((map__12020 == null))))?(((((map__12020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12020):map__12020);
var target = cljs.core.get.call(null,map__12020__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__12020__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12021 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12026 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12026__$1 = (((((!((map__12026 == null))))?(((((map__12026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12026):map__12026);
var node_libs = cljs.core.get.call(null,map__12026__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12026__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__12021,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__12021,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12028_12048 = cljs.core.seq.call(null,libs_to_load);
var chunk__12029_12049 = null;
var count__12030_12050 = (0);
var i__12031_12051 = (0);
while(true){
if((i__12031_12051 < count__12030_12050)){
var lib_12052 = cljs.core._nth.call(null,chunk__12029_12049,i__12031_12051);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12052)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12052),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12052),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12052),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12052),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12052,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12052),"');");
}

}
}
}


var G__12053 = seq__12028_12048;
var G__12054 = chunk__12029_12049;
var G__12055 = count__12030_12050;
var G__12056 = (i__12031_12051 + (1));
seq__12028_12048 = G__12053;
chunk__12029_12049 = G__12054;
count__12030_12050 = G__12055;
i__12031_12051 = G__12056;
continue;
} else {
var temp__5804__auto___12057 = cljs.core.seq.call(null,seq__12028_12048);
if(temp__5804__auto___12057){
var seq__12028_12058__$1 = temp__5804__auto___12057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12028_12058__$1)){
var c__4550__auto___12059 = cljs.core.chunk_first.call(null,seq__12028_12058__$1);
var G__12060 = cljs.core.chunk_rest.call(null,seq__12028_12058__$1);
var G__12061 = c__4550__auto___12059;
var G__12062 = cljs.core.count.call(null,c__4550__auto___12059);
var G__12063 = (0);
seq__12028_12048 = G__12060;
chunk__12029_12049 = G__12061;
count__12030_12050 = G__12062;
i__12031_12051 = G__12063;
continue;
} else {
var lib_12064 = cljs.core.first.call(null,seq__12028_12058__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12064)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12064),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12064),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12064),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12064),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12064,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12064),"');");
}

}
}
}


var G__12065 = cljs.core.next.call(null,seq__12028_12058__$1);
var G__12066 = null;
var G__12067 = (0);
var G__12068 = (0);
seq__12028_12048 = G__12065;
chunk__12029_12049 = G__12066;
count__12030_12050 = G__12067;
i__12031_12051 = G__12068;
continue;
}
} else {
}
}
break;
}

var seq__12032_12069 = cljs.core.seq.call(null,node_libs);
var chunk__12033_12070 = null;
var count__12034_12071 = (0);
var i__12035_12072 = (0);
while(true){
if((i__12035_12072 < count__12034_12071)){
var lib_12073 = cljs.core._nth.call(null,chunk__12033_12070,i__12035_12072);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12073)," = require('",lib_12073,"');");


var G__12074 = seq__12032_12069;
var G__12075 = chunk__12033_12070;
var G__12076 = count__12034_12071;
var G__12077 = (i__12035_12072 + (1));
seq__12032_12069 = G__12074;
chunk__12033_12070 = G__12075;
count__12034_12071 = G__12076;
i__12035_12072 = G__12077;
continue;
} else {
var temp__5804__auto___12078 = cljs.core.seq.call(null,seq__12032_12069);
if(temp__5804__auto___12078){
var seq__12032_12079__$1 = temp__5804__auto___12078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12032_12079__$1)){
var c__4550__auto___12080 = cljs.core.chunk_first.call(null,seq__12032_12079__$1);
var G__12081 = cljs.core.chunk_rest.call(null,seq__12032_12079__$1);
var G__12082 = c__4550__auto___12080;
var G__12083 = cljs.core.count.call(null,c__4550__auto___12080);
var G__12084 = (0);
seq__12032_12069 = G__12081;
chunk__12033_12070 = G__12082;
count__12034_12071 = G__12083;
i__12035_12072 = G__12084;
continue;
} else {
var lib_12085 = cljs.core.first.call(null,seq__12032_12079__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12085)," = require('",lib_12085,"');");


var G__12086 = cljs.core.next.call(null,seq__12032_12079__$1);
var G__12087 = null;
var G__12088 = (0);
var G__12089 = (0);
seq__12032_12069 = G__12086;
chunk__12033_12070 = G__12087;
count__12034_12071 = G__12088;
i__12035_12072 = G__12089;
continue;
}
} else {
}
}
break;
}

var seq__12036_12090 = cljs.core.seq.call(null,global_exports_libs);
var chunk__12037_12091 = null;
var count__12038_12092 = (0);
var i__12039_12093 = (0);
while(true){
if((i__12039_12093 < count__12038_12092)){
var lib_12094 = cljs.core._nth.call(null,chunk__12037_12091,i__12039_12093);
var map__12044_12095 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12094));
var map__12044_12096__$1 = (((((!((map__12044_12095 == null))))?(((((map__12044_12095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12044_12095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12044_12095):map__12044_12095);
var global_exports_12097 = cljs.core.get.call(null,map__12044_12096__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12097,lib_12094);


var G__12098 = seq__12036_12090;
var G__12099 = chunk__12037_12091;
var G__12100 = count__12038_12092;
var G__12101 = (i__12039_12093 + (1));
seq__12036_12090 = G__12098;
chunk__12037_12091 = G__12099;
count__12038_12092 = G__12100;
i__12039_12093 = G__12101;
continue;
} else {
var temp__5804__auto___12102 = cljs.core.seq.call(null,seq__12036_12090);
if(temp__5804__auto___12102){
var seq__12036_12103__$1 = temp__5804__auto___12102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12036_12103__$1)){
var c__4550__auto___12104 = cljs.core.chunk_first.call(null,seq__12036_12103__$1);
var G__12105 = cljs.core.chunk_rest.call(null,seq__12036_12103__$1);
var G__12106 = c__4550__auto___12104;
var G__12107 = cljs.core.count.call(null,c__4550__auto___12104);
var G__12108 = (0);
seq__12036_12090 = G__12105;
chunk__12037_12091 = G__12106;
count__12038_12092 = G__12107;
i__12039_12093 = G__12108;
continue;
} else {
var lib_12109 = cljs.core.first.call(null,seq__12036_12103__$1);
var map__12046_12110 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12109));
var map__12046_12111__$1 = (((((!((map__12046_12110 == null))))?(((((map__12046_12110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12046_12110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12046_12110):map__12046_12110);
var global_exports_12112 = cljs.core.get.call(null,map__12046_12111__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12112,lib_12109);


var G__12113 = cljs.core.next.call(null,seq__12036_12103__$1);
var G__12114 = null;
var G__12115 = (0);
var G__12116 = (0);
seq__12036_12090 = G__12113;
chunk__12037_12091 = G__12114;
count__12038_12092 = G__12115;
i__12039_12093 = G__12116;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12117){
var map__12118 = p__12117;
var map__12118__$1 = (((((!((map__12118 == null))))?(((((map__12118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12118):map__12118);
var name = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12120){
var map__12121 = p__12120;
var map__12121__$1 = (((((!((map__12121 == null))))?(((((map__12121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12121):map__12121);
var name = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__12123){
var map__12124 = p__12123;
var map__12124__$1 = (((((!((map__12124 == null))))?(((((map__12124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12124):map__12124);
var t = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12126_12150 = cljs.core.seq.call(null,protocols);
var chunk__12127_12151 = null;
var count__12128_12152 = (0);
var i__12129_12153 = (0);
while(true){
if((i__12129_12153 < count__12128_12152)){
var protocol_12154 = cljs.core._nth.call(null,chunk__12127_12151,i__12129_12153);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12154)),"}");


var G__12155 = seq__12126_12150;
var G__12156 = chunk__12127_12151;
var G__12157 = count__12128_12152;
var G__12158 = (i__12129_12153 + (1));
seq__12126_12150 = G__12155;
chunk__12127_12151 = G__12156;
count__12128_12152 = G__12157;
i__12129_12153 = G__12158;
continue;
} else {
var temp__5804__auto___12159 = cljs.core.seq.call(null,seq__12126_12150);
if(temp__5804__auto___12159){
var seq__12126_12160__$1 = temp__5804__auto___12159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12126_12160__$1)){
var c__4550__auto___12161 = cljs.core.chunk_first.call(null,seq__12126_12160__$1);
var G__12162 = cljs.core.chunk_rest.call(null,seq__12126_12160__$1);
var G__12163 = c__4550__auto___12161;
var G__12164 = cljs.core.count.call(null,c__4550__auto___12161);
var G__12165 = (0);
seq__12126_12150 = G__12162;
chunk__12127_12151 = G__12163;
count__12128_12152 = G__12164;
i__12129_12153 = G__12165;
continue;
} else {
var protocol_12166 = cljs.core.first.call(null,seq__12126_12160__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12166)),"}");


var G__12167 = cljs.core.next.call(null,seq__12126_12160__$1);
var G__12168 = null;
var G__12169 = (0);
var G__12170 = (0);
seq__12126_12150 = G__12167;
chunk__12127_12151 = G__12168;
count__12128_12152 = G__12169;
i__12129_12153 = G__12170;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12130_12171 = cljs.core.seq.call(null,fields__$1);
var chunk__12131_12172 = null;
var count__12132_12173 = (0);
var i__12133_12174 = (0);
while(true){
if((i__12133_12174 < count__12132_12173)){
var fld_12175 = cljs.core._nth.call(null,chunk__12131_12172,i__12133_12174);
cljs.compiler.emitln.call(null,"this.",fld_12175," = ",fld_12175,";");


var G__12176 = seq__12130_12171;
var G__12177 = chunk__12131_12172;
var G__12178 = count__12132_12173;
var G__12179 = (i__12133_12174 + (1));
seq__12130_12171 = G__12176;
chunk__12131_12172 = G__12177;
count__12132_12173 = G__12178;
i__12133_12174 = G__12179;
continue;
} else {
var temp__5804__auto___12180 = cljs.core.seq.call(null,seq__12130_12171);
if(temp__5804__auto___12180){
var seq__12130_12181__$1 = temp__5804__auto___12180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12130_12181__$1)){
var c__4550__auto___12182 = cljs.core.chunk_first.call(null,seq__12130_12181__$1);
var G__12183 = cljs.core.chunk_rest.call(null,seq__12130_12181__$1);
var G__12184 = c__4550__auto___12182;
var G__12185 = cljs.core.count.call(null,c__4550__auto___12182);
var G__12186 = (0);
seq__12130_12171 = G__12183;
chunk__12131_12172 = G__12184;
count__12132_12173 = G__12185;
i__12133_12174 = G__12186;
continue;
} else {
var fld_12187 = cljs.core.first.call(null,seq__12130_12181__$1);
cljs.compiler.emitln.call(null,"this.",fld_12187," = ",fld_12187,";");


var G__12188 = cljs.core.next.call(null,seq__12130_12181__$1);
var G__12189 = null;
var G__12190 = (0);
var G__12191 = (0);
seq__12130_12171 = G__12188;
chunk__12131_12172 = G__12189;
count__12132_12173 = G__12190;
i__12133_12174 = G__12191;
continue;
}
} else {
}
}
break;
}

var seq__12134_12192 = cljs.core.seq.call(null,pmasks);
var chunk__12135_12193 = null;
var count__12136_12194 = (0);
var i__12137_12195 = (0);
while(true){
if((i__12137_12195 < count__12136_12194)){
var vec__12144_12196 = cljs.core._nth.call(null,chunk__12135_12193,i__12137_12195);
var pno_12197 = cljs.core.nth.call(null,vec__12144_12196,(0),null);
var pmask_12198 = cljs.core.nth.call(null,vec__12144_12196,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12197,"$ = ",pmask_12198,";");


var G__12199 = seq__12134_12192;
var G__12200 = chunk__12135_12193;
var G__12201 = count__12136_12194;
var G__12202 = (i__12137_12195 + (1));
seq__12134_12192 = G__12199;
chunk__12135_12193 = G__12200;
count__12136_12194 = G__12201;
i__12137_12195 = G__12202;
continue;
} else {
var temp__5804__auto___12203 = cljs.core.seq.call(null,seq__12134_12192);
if(temp__5804__auto___12203){
var seq__12134_12204__$1 = temp__5804__auto___12203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12134_12204__$1)){
var c__4550__auto___12205 = cljs.core.chunk_first.call(null,seq__12134_12204__$1);
var G__12206 = cljs.core.chunk_rest.call(null,seq__12134_12204__$1);
var G__12207 = c__4550__auto___12205;
var G__12208 = cljs.core.count.call(null,c__4550__auto___12205);
var G__12209 = (0);
seq__12134_12192 = G__12206;
chunk__12135_12193 = G__12207;
count__12136_12194 = G__12208;
i__12137_12195 = G__12209;
continue;
} else {
var vec__12147_12210 = cljs.core.first.call(null,seq__12134_12204__$1);
var pno_12211 = cljs.core.nth.call(null,vec__12147_12210,(0),null);
var pmask_12212 = cljs.core.nth.call(null,vec__12147_12210,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12211,"$ = ",pmask_12212,";");


var G__12213 = cljs.core.next.call(null,seq__12134_12204__$1);
var G__12214 = null;
var G__12215 = (0);
var G__12216 = (0);
seq__12134_12192 = G__12213;
chunk__12135_12193 = G__12214;
count__12136_12194 = G__12215;
i__12137_12195 = G__12216;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__12217){
var map__12218 = p__12217;
var map__12218__$1 = (((((!((map__12218 == null))))?(((((map__12218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12218):map__12218);
var t = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12220_12244 = cljs.core.seq.call(null,protocols);
var chunk__12221_12245 = null;
var count__12222_12246 = (0);
var i__12223_12247 = (0);
while(true){
if((i__12223_12247 < count__12222_12246)){
var protocol_12248 = cljs.core._nth.call(null,chunk__12221_12245,i__12223_12247);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12248)),"}");


var G__12249 = seq__12220_12244;
var G__12250 = chunk__12221_12245;
var G__12251 = count__12222_12246;
var G__12252 = (i__12223_12247 + (1));
seq__12220_12244 = G__12249;
chunk__12221_12245 = G__12250;
count__12222_12246 = G__12251;
i__12223_12247 = G__12252;
continue;
} else {
var temp__5804__auto___12253 = cljs.core.seq.call(null,seq__12220_12244);
if(temp__5804__auto___12253){
var seq__12220_12254__$1 = temp__5804__auto___12253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12220_12254__$1)){
var c__4550__auto___12255 = cljs.core.chunk_first.call(null,seq__12220_12254__$1);
var G__12256 = cljs.core.chunk_rest.call(null,seq__12220_12254__$1);
var G__12257 = c__4550__auto___12255;
var G__12258 = cljs.core.count.call(null,c__4550__auto___12255);
var G__12259 = (0);
seq__12220_12244 = G__12256;
chunk__12221_12245 = G__12257;
count__12222_12246 = G__12258;
i__12223_12247 = G__12259;
continue;
} else {
var protocol_12260 = cljs.core.first.call(null,seq__12220_12254__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12260)),"}");


var G__12261 = cljs.core.next.call(null,seq__12220_12254__$1);
var G__12262 = null;
var G__12263 = (0);
var G__12264 = (0);
seq__12220_12244 = G__12261;
chunk__12221_12245 = G__12262;
count__12222_12246 = G__12263;
i__12223_12247 = G__12264;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12224_12265 = cljs.core.seq.call(null,fields__$1);
var chunk__12225_12266 = null;
var count__12226_12267 = (0);
var i__12227_12268 = (0);
while(true){
if((i__12227_12268 < count__12226_12267)){
var fld_12269 = cljs.core._nth.call(null,chunk__12225_12266,i__12227_12268);
cljs.compiler.emitln.call(null,"this.",fld_12269," = ",fld_12269,";");


var G__12270 = seq__12224_12265;
var G__12271 = chunk__12225_12266;
var G__12272 = count__12226_12267;
var G__12273 = (i__12227_12268 + (1));
seq__12224_12265 = G__12270;
chunk__12225_12266 = G__12271;
count__12226_12267 = G__12272;
i__12227_12268 = G__12273;
continue;
} else {
var temp__5804__auto___12274 = cljs.core.seq.call(null,seq__12224_12265);
if(temp__5804__auto___12274){
var seq__12224_12275__$1 = temp__5804__auto___12274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12224_12275__$1)){
var c__4550__auto___12276 = cljs.core.chunk_first.call(null,seq__12224_12275__$1);
var G__12277 = cljs.core.chunk_rest.call(null,seq__12224_12275__$1);
var G__12278 = c__4550__auto___12276;
var G__12279 = cljs.core.count.call(null,c__4550__auto___12276);
var G__12280 = (0);
seq__12224_12265 = G__12277;
chunk__12225_12266 = G__12278;
count__12226_12267 = G__12279;
i__12227_12268 = G__12280;
continue;
} else {
var fld_12281 = cljs.core.first.call(null,seq__12224_12275__$1);
cljs.compiler.emitln.call(null,"this.",fld_12281," = ",fld_12281,";");


var G__12282 = cljs.core.next.call(null,seq__12224_12275__$1);
var G__12283 = null;
var G__12284 = (0);
var G__12285 = (0);
seq__12224_12265 = G__12282;
chunk__12225_12266 = G__12283;
count__12226_12267 = G__12284;
i__12227_12268 = G__12285;
continue;
}
} else {
}
}
break;
}

var seq__12228_12286 = cljs.core.seq.call(null,pmasks);
var chunk__12229_12287 = null;
var count__12230_12288 = (0);
var i__12231_12289 = (0);
while(true){
if((i__12231_12289 < count__12230_12288)){
var vec__12238_12290 = cljs.core._nth.call(null,chunk__12229_12287,i__12231_12289);
var pno_12291 = cljs.core.nth.call(null,vec__12238_12290,(0),null);
var pmask_12292 = cljs.core.nth.call(null,vec__12238_12290,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12291,"$ = ",pmask_12292,";");


var G__12293 = seq__12228_12286;
var G__12294 = chunk__12229_12287;
var G__12295 = count__12230_12288;
var G__12296 = (i__12231_12289 + (1));
seq__12228_12286 = G__12293;
chunk__12229_12287 = G__12294;
count__12230_12288 = G__12295;
i__12231_12289 = G__12296;
continue;
} else {
var temp__5804__auto___12297 = cljs.core.seq.call(null,seq__12228_12286);
if(temp__5804__auto___12297){
var seq__12228_12298__$1 = temp__5804__auto___12297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12228_12298__$1)){
var c__4550__auto___12299 = cljs.core.chunk_first.call(null,seq__12228_12298__$1);
var G__12300 = cljs.core.chunk_rest.call(null,seq__12228_12298__$1);
var G__12301 = c__4550__auto___12299;
var G__12302 = cljs.core.count.call(null,c__4550__auto___12299);
var G__12303 = (0);
seq__12228_12286 = G__12300;
chunk__12229_12287 = G__12301;
count__12230_12288 = G__12302;
i__12231_12289 = G__12303;
continue;
} else {
var vec__12241_12304 = cljs.core.first.call(null,seq__12228_12298__$1);
var pno_12305 = cljs.core.nth.call(null,vec__12241_12304,(0),null);
var pmask_12306 = cljs.core.nth.call(null,vec__12241_12304,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12305,"$ = ",pmask_12306,";");


var G__12307 = cljs.core.next.call(null,seq__12228_12298__$1);
var G__12308 = null;
var G__12309 = (0);
var G__12310 = (0);
seq__12228_12286 = G__12307;
chunk__12229_12287 = G__12308;
count__12230_12288 = G__12309;
i__12231_12289 = G__12310;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__12311){
var map__12312 = p__12311;
var map__12312__$1 = (((((!((map__12312 == null))))?(((((map__12312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12312):map__12312);
var target = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12314){
var map__12315 = p__12314;
var map__12315__$1 = (((((!((map__12315 == null))))?(((((map__12315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12315):map__12315);
var op = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11109__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11109__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__12321 = cljs.core.seq.call(null,table);
var chunk__12322 = null;
var count__12323 = (0);
var i__12324 = (0);
while(true){
if((i__12324 < count__12323)){
var vec__12331 = cljs.core._nth.call(null,chunk__12322,i__12324);
var sym = cljs.core.nth.call(null,vec__12331,(0),null);
var value = cljs.core.nth.call(null,vec__12331,(1),null);
var ns_12337 = cljs.core.namespace.call(null,sym);
var name_12338 = cljs.core.name.call(null,sym);
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


var G__12339 = seq__12321;
var G__12340 = chunk__12322;
var G__12341 = count__12323;
var G__12342 = (i__12324 + (1));
seq__12321 = G__12339;
chunk__12322 = G__12340;
count__12323 = G__12341;
i__12324 = G__12342;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12321);
if(temp__5804__auto__){
var seq__12321__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12321__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12321__$1);
var G__12343 = cljs.core.chunk_rest.call(null,seq__12321__$1);
var G__12344 = c__4550__auto__;
var G__12345 = cljs.core.count.call(null,c__4550__auto__);
var G__12346 = (0);
seq__12321 = G__12343;
chunk__12322 = G__12344;
count__12323 = G__12345;
i__12324 = G__12346;
continue;
} else {
var vec__12334 = cljs.core.first.call(null,seq__12321__$1);
var sym = cljs.core.nth.call(null,vec__12334,(0),null);
var value = cljs.core.nth.call(null,vec__12334,(1),null);
var ns_12347 = cljs.core.namespace.call(null,sym);
var name_12348 = cljs.core.name.call(null,sym);
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


var G__12349 = cljs.core.next.call(null,seq__12321__$1);
var G__12350 = null;
var G__12351 = (0);
var G__12352 = (0);
seq__12321 = G__12349;
chunk__12322 = G__12350;
count__12323 = G__12351;
i__12324 = G__12352;
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
var G__12354 = arguments.length;
switch (G__12354) {
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
var k_12359 = cljs.core.first.call(null,ks);
var vec__12355_12360 = cljs.core.conj.call(null,prefix,k_12359);
var top_12361 = cljs.core.nth.call(null,vec__12355_12360,(0),null);
var prefix_SINGLEQUOTE__12362 = vec__12355_12360;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_12359)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__12362) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_12361)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_12361)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12362)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_12361);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12362)),";");
}
} else {
}

var m_12363 = cljs.core.get.call(null,externs,k_12359);
if(cljs.core.empty_QMARK_.call(null,m_12363)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__12362,m_12363,top_level,known_externs);
}

var G__12364 = cljs.core.next.call(null,ks);
ks = G__12364;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
