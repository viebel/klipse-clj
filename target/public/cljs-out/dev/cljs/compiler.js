// Compiled by ClojureScript 1.10.516 {}
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
var map__11217 = s;
var map__11217__$1 = (((((!((map__11217 == null))))?(((((map__11217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11217):map__11217);
var name = cljs.core.get.call(null,map__11217__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11217__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11220 = info;
var map__11221 = G__11220;
var map__11221__$1 = (((((!((map__11221 == null))))?(((((map__11221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11221):map__11221);
var shadow = cljs.core.get.call(null,map__11221__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11220__$1 = G__11220;
while(true){
var d__$2 = d__$1;
var map__11225 = G__11220__$1;
var map__11225__$1 = (((((!((map__11225 == null))))?(((((map__11225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11225):map__11225);
var shadow__$1 = cljs.core.get.call(null,map__11225__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__11227 = (d__$2 + (1));
var G__11228 = shadow__$1;
d__$1 = G__11227;
G__11220__$1 = G__11228;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11229){
var map__11230 = p__11229;
var map__11230__$1 = (((((!((map__11230 == null))))?(((((map__11230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11230):map__11230);
var name_var = map__11230__$1;
var name = cljs.core.get.call(null,map__11230__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11230__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__11232 = info;
var map__11232__$1 = (((((!((map__11232 == null))))?(((((map__11232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11232):map__11232);
var ns = cljs.core.get.call(null,map__11232__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__11232__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__11235 = arguments.length;
switch (G__11235) {
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
var G__11237 = cp;
switch (G__11237) {
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
var seq__11239_11243 = cljs.core.seq.call(null,s);
var chunk__11240_11244 = null;
var count__11241_11245 = (0);
var i__11242_11246 = (0);
while(true){
if((i__11242_11246 < count__11241_11245)){
var c_11247 = cljs.core._nth.call(null,chunk__11240_11244,i__11242_11246);
sb.append(cljs.compiler.escape_char.call(null,c_11247));


var G__11248 = seq__11239_11243;
var G__11249 = chunk__11240_11244;
var G__11250 = count__11241_11245;
var G__11251 = (i__11242_11246 + (1));
seq__11239_11243 = G__11248;
chunk__11240_11244 = G__11249;
count__11241_11245 = G__11250;
i__11242_11246 = G__11251;
continue;
} else {
var temp__5720__auto___11252 = cljs.core.seq.call(null,seq__11239_11243);
if(temp__5720__auto___11252){
var seq__11239_11253__$1 = temp__5720__auto___11252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11239_11253__$1)){
var c__4550__auto___11254 = cljs.core.chunk_first.call(null,seq__11239_11253__$1);
var G__11255 = cljs.core.chunk_rest.call(null,seq__11239_11253__$1);
var G__11256 = c__4550__auto___11254;
var G__11257 = cljs.core.count.call(null,c__4550__auto___11254);
var G__11258 = (0);
seq__11239_11243 = G__11255;
chunk__11240_11244 = G__11256;
count__11241_11245 = G__11257;
i__11242_11246 = G__11258;
continue;
} else {
var c_11259 = cljs.core.first.call(null,seq__11239_11253__$1);
sb.append(cljs.compiler.escape_char.call(null,c_11259));


var G__11260 = cljs.core.next.call(null,seq__11239_11253__$1);
var G__11261 = null;
var G__11262 = (0);
var G__11263 = (0);
seq__11239_11243 = G__11260;
chunk__11240_11244 = G__11261;
count__11241_11245 = G__11262;
i__11242_11246 = G__11263;
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
var map__11264_11269 = ast;
var map__11264_11270__$1 = (((((!((map__11264_11269 == null))))?(((((map__11264_11269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11264_11269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11264_11269):map__11264_11269);
var env_11271 = cljs.core.get.call(null,map__11264_11270__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_11271))){
var map__11266_11272 = env_11271;
var map__11266_11273__$1 = (((((!((map__11266_11272 == null))))?(((((map__11266_11272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11266_11272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11266_11272):map__11266_11272);
var line_11274 = cljs.core.get.call(null,map__11266_11273__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_11275 = cljs.core.get.call(null,map__11266_11273__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__11266_11272,map__11266_11273__$1,line_11274,column_11275,map__11264_11269,map__11264_11270__$1,env_11271){
return (function (m){
var minfo = (function (){var G__11268 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__11268,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__11268;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_11274 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__11266_11272,map__11266_11273__$1,line_11274,column_11275,map__11264_11269,map__11264_11270__$1,env_11271){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_11275)?(column_11275 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__11266_11272,map__11266_11273__$1,line_11274,column_11275,map__11264_11269,map__11264_11270__$1,env_11271){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__11266_11272,map__11266_11273__$1,line_11274,column_11275,map__11264_11269,map__11264_11270__$1,env_11271))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__11266_11272,map__11266_11273__$1,line_11274,column_11275,map__11264_11269,map__11264_11270__$1,env_11271))
,cljs.core.sorted_map.call(null)));
});})(map__11266_11272,map__11266_11273__$1,line_11274,column_11275,map__11264_11269,map__11264_11270__$1,env_11271))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__11284 = arguments.length;
switch (G__11284) {
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
var len__4730__auto___11291 = arguments.length;
var i__4731__auto___11292 = (0);
while(true){
if((i__4731__auto___11292 < len__4730__auto___11291)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11292]));

var G__11293 = (i__4731__auto___11292 + (1));
i__4731__auto___11292 = G__11293;
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
var s_11294 = (function (){var G__11285 = a;
if((!(typeof a === 'string'))){
return G__11285.toString();
} else {
return G__11285;
}
})();
var temp__5724__auto___11295 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___11295 == null)){
} else {
var sm_data_11296 = temp__5724__auto___11295;
cljs.core.swap_BANG_.call(null,sm_data_11296,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_11296,temp__5724__auto___11295,s_11294){
return (function (p1__11276_SHARP_){
return (p1__11276_SHARP_ + s_11294.length);
});})(sm_data_11296,temp__5724__auto___11295,s_11294))
);
}

cljs.core.print.call(null,s_11294);

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

var seq__11286 = cljs.core.seq.call(null,xs);
var chunk__11287 = null;
var count__11288 = (0);
var i__11289 = (0);
while(true){
if((i__11289 < count__11288)){
var x = cljs.core._nth.call(null,chunk__11287,i__11289);
cljs.compiler.emits.call(null,x);


var G__11297 = seq__11286;
var G__11298 = chunk__11287;
var G__11299 = count__11288;
var G__11300 = (i__11289 + (1));
seq__11286 = G__11297;
chunk__11287 = G__11298;
count__11288 = G__11299;
i__11289 = G__11300;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11286);
if(temp__5720__auto__){
var seq__11286__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11286__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11286__$1);
var G__11301 = cljs.core.chunk_rest.call(null,seq__11286__$1);
var G__11302 = c__4550__auto__;
var G__11303 = cljs.core.count.call(null,c__4550__auto__);
var G__11304 = (0);
seq__11286 = G__11301;
chunk__11287 = G__11302;
count__11288 = G__11303;
i__11289 = G__11304;
continue;
} else {
var x = cljs.core.first.call(null,seq__11286__$1);
cljs.compiler.emits.call(null,x);


var G__11305 = cljs.core.next.call(null,seq__11286__$1);
var G__11306 = null;
var G__11307 = (0);
var G__11308 = (0);
seq__11286 = G__11305;
chunk__11287 = G__11306;
count__11288 = G__11307;
i__11289 = G__11308;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq11278){
var G__11279 = cljs.core.first.call(null,seq11278);
var seq11278__$1 = cljs.core.next.call(null,seq11278);
var G__11280 = cljs.core.first.call(null,seq11278__$1);
var seq11278__$2 = cljs.core.next.call(null,seq11278__$1);
var G__11281 = cljs.core.first.call(null,seq11278__$2);
var seq11278__$3 = cljs.core.next.call(null,seq11278__$2);
var G__11282 = cljs.core.first.call(null,seq11278__$3);
var seq11278__$4 = cljs.core.next.call(null,seq11278__$3);
var G__11283 = cljs.core.first.call(null,seq11278__$4);
var seq11278__$5 = cljs.core.next.call(null,seq11278__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11279,G__11280,G__11281,G__11282,G__11283,seq11278__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__11309){
var map__11310 = p__11309;
var map__11310__$1 = (((((!((map__11310 == null))))?(((((map__11310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11310):map__11310);
var m = map__11310__$1;
var gen_line = cljs.core.get.call(null,map__11310__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__11319 = arguments.length;
switch (G__11319) {
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
var len__4730__auto___11325 = arguments.length;
var i__4731__auto___11326 = (0);
while(true){
if((i__4731__auto___11326 < len__4730__auto___11325)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11326]));

var G__11327 = (i__4731__auto___11326 + (1));
i__4731__auto___11326 = G__11327;
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

var seq__11320_11328 = cljs.core.seq.call(null,xs);
var chunk__11321_11329 = null;
var count__11322_11330 = (0);
var i__11323_11331 = (0);
while(true){
if((i__11323_11331 < count__11322_11330)){
var x_11332 = cljs.core._nth.call(null,chunk__11321_11329,i__11323_11331);
cljs.compiler.emits.call(null,x_11332);


var G__11333 = seq__11320_11328;
var G__11334 = chunk__11321_11329;
var G__11335 = count__11322_11330;
var G__11336 = (i__11323_11331 + (1));
seq__11320_11328 = G__11333;
chunk__11321_11329 = G__11334;
count__11322_11330 = G__11335;
i__11323_11331 = G__11336;
continue;
} else {
var temp__5720__auto___11337 = cljs.core.seq.call(null,seq__11320_11328);
if(temp__5720__auto___11337){
var seq__11320_11338__$1 = temp__5720__auto___11337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11320_11338__$1)){
var c__4550__auto___11339 = cljs.core.chunk_first.call(null,seq__11320_11338__$1);
var G__11340 = cljs.core.chunk_rest.call(null,seq__11320_11338__$1);
var G__11341 = c__4550__auto___11339;
var G__11342 = cljs.core.count.call(null,c__4550__auto___11339);
var G__11343 = (0);
seq__11320_11328 = G__11340;
chunk__11321_11329 = G__11341;
count__11322_11330 = G__11342;
i__11323_11331 = G__11343;
continue;
} else {
var x_11344 = cljs.core.first.call(null,seq__11320_11338__$1);
cljs.compiler.emits.call(null,x_11344);


var G__11345 = cljs.core.next.call(null,seq__11320_11338__$1);
var G__11346 = null;
var G__11347 = (0);
var G__11348 = (0);
seq__11320_11328 = G__11345;
chunk__11321_11329 = G__11346;
count__11322_11330 = G__11347;
i__11323_11331 = G__11348;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11313){
var G__11314 = cljs.core.first.call(null,seq11313);
var seq11313__$1 = cljs.core.next.call(null,seq11313);
var G__11315 = cljs.core.first.call(null,seq11313__$1);
var seq11313__$2 = cljs.core.next.call(null,seq11313__$1);
var G__11316 = cljs.core.first.call(null,seq11313__$2);
var seq11313__$3 = cljs.core.next.call(null,seq11313__$2);
var G__11317 = cljs.core.first.call(null,seq11313__$3);
var seq11313__$4 = cljs.core.next.call(null,seq11313__$3);
var G__11318 = cljs.core.first.call(null,seq11313__$4);
var seq11313__$5 = cljs.core.next.call(null,seq11313__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11314,G__11315,G__11316,G__11317,G__11318,seq11313__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11349_11353 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11350_11354 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11351_11355 = true;
var _STAR_print_fn_STAR__temp_val__11352_11356 = ((function (_STAR_print_newline_STAR__orig_val__11349_11353,_STAR_print_fn_STAR__orig_val__11350_11354,_STAR_print_newline_STAR__temp_val__11351_11355,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11349_11353,_STAR_print_fn_STAR__orig_val__11350_11354,_STAR_print_newline_STAR__temp_val__11351_11355,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11351_11355;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11352_11356;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11350_11354;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11349_11353;
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
var vec__11357 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__11357,(0),null);
var name = cljs.core.nth.call(null,vec__11357,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__11357,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__11357,ns,name))
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
var vec__11360 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__11360,(0),null);
var flags = cljs.core.nth.call(null,vec__11360,(1),null);
var pattern = cljs.core.nth.call(null,vec__11360,(2),null);
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
return (function (p1__11363_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__11363_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__11365){
var map__11366 = p__11365;
var map__11366__$1 = (((((!((map__11366 == null))))?(((((map__11366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11366):map__11366);
var ast = map__11366__$1;
var info = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__11368 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__11368__$1 = (((((!((map__11368 == null))))?(((((map__11368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11368):map__11368);
var cenv = map__11368__$1;
var options = cljs.core.get.call(null,map__11368__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__11370 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__11370,cljs.analyzer.es5_allowed);
} else {
return G__11370;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__11371 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__11371,reserved);
} else {
return G__11371;
}
})();
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__11372_11373 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__11372_11374__$1 = (((G__11372_11373 instanceof cljs.core.Keyword))?G__11372_11373.fqn:null);
switch (G__11372_11374__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__11376){
var map__11377 = p__11376;
var map__11377__$1 = (((((!((map__11377 == null))))?(((((map__11377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11377):map__11377);
var arg = map__11377__$1;
var env = cljs.core.get.call(null,map__11377__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__11377__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__11377__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__11377__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__11379 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__11379__$1 = (((((!((map__11379 == null))))?(((((map__11379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11379):map__11379);
var name = cljs.core.get.call(null,map__11379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__11381){
var map__11382 = p__11381;
var map__11382__$1 = (((((!((map__11382 == null))))?(((((map__11382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11382):map__11382);
var expr = cljs.core.get.call(null,map__11382__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__11382__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__11382__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__11384_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11384_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__11385){
var map__11386 = p__11385;
var map__11386__$1 = (((((!((map__11386 == null))))?(((((map__11386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11386):map__11386);
var env = cljs.core.get.call(null,map__11386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__11386__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11386__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__11388){
var map__11389 = p__11388;
var map__11389__$1 = (((((!((map__11389 == null))))?(((((map__11389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11389):map__11389);
var items = cljs.core.get.call(null,map__11389__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11389__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__11391_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11391_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__11392){
var map__11393 = p__11392;
var map__11393__$1 = (((((!((map__11393 == null))))?(((((map__11393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11393):map__11393);
var items = cljs.core.get.call(null,map__11393__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11393__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___11417 = cljs.core.seq.call(null,items);
if(temp__5720__auto___11417){
var items_11418__$1 = temp__5720__auto___11417;
var vec__11395_11419 = items_11418__$1;
var seq__11396_11420 = cljs.core.seq.call(null,vec__11395_11419);
var first__11397_11421 = cljs.core.first.call(null,seq__11396_11420);
var seq__11396_11422__$1 = cljs.core.next.call(null,seq__11396_11420);
var vec__11398_11423 = first__11397_11421;
var k_11424 = cljs.core.nth.call(null,vec__11398_11423,(0),null);
var v_11425 = cljs.core.nth.call(null,vec__11398_11423,(1),null);
var r_11426 = seq__11396_11422__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_11424),"\": ",emit_js_object_val.call(null,v_11425));

var seq__11401_11427 = cljs.core.seq.call(null,r_11426);
var chunk__11402_11428 = null;
var count__11403_11429 = (0);
var i__11404_11430 = (0);
while(true){
if((i__11404_11430 < count__11403_11429)){
var vec__11411_11431 = cljs.core._nth.call(null,chunk__11402_11428,i__11404_11430);
var k_11432__$1 = cljs.core.nth.call(null,vec__11411_11431,(0),null);
var v_11433__$1 = cljs.core.nth.call(null,vec__11411_11431,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11432__$1),"\": ",emit_js_object_val.call(null,v_11433__$1));


var G__11434 = seq__11401_11427;
var G__11435 = chunk__11402_11428;
var G__11436 = count__11403_11429;
var G__11437 = (i__11404_11430 + (1));
seq__11401_11427 = G__11434;
chunk__11402_11428 = G__11435;
count__11403_11429 = G__11436;
i__11404_11430 = G__11437;
continue;
} else {
var temp__5720__auto___11438__$1 = cljs.core.seq.call(null,seq__11401_11427);
if(temp__5720__auto___11438__$1){
var seq__11401_11439__$1 = temp__5720__auto___11438__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11401_11439__$1)){
var c__4550__auto___11440 = cljs.core.chunk_first.call(null,seq__11401_11439__$1);
var G__11441 = cljs.core.chunk_rest.call(null,seq__11401_11439__$1);
var G__11442 = c__4550__auto___11440;
var G__11443 = cljs.core.count.call(null,c__4550__auto___11440);
var G__11444 = (0);
seq__11401_11427 = G__11441;
chunk__11402_11428 = G__11442;
count__11403_11429 = G__11443;
i__11404_11430 = G__11444;
continue;
} else {
var vec__11414_11445 = cljs.core.first.call(null,seq__11401_11439__$1);
var k_11446__$1 = cljs.core.nth.call(null,vec__11414_11445,(0),null);
var v_11447__$1 = cljs.core.nth.call(null,vec__11414_11445,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11446__$1),"\": ",emit_js_object_val.call(null,v_11447__$1));


var G__11448 = cljs.core.next.call(null,seq__11401_11439__$1);
var G__11449 = null;
var G__11450 = (0);
var G__11451 = (0);
seq__11401_11427 = G__11448;
chunk__11402_11428 = G__11449;
count__11403_11429 = G__11450;
i__11404_11430 = G__11451;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__11452){
var map__11453 = p__11452;
var map__11453__$1 = (((((!((map__11453 == null))))?(((((map__11453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11453):map__11453);
var keys = cljs.core.get.call(null,map__11453__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11453__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__11453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__11455){
var map__11456 = p__11455;
var map__11456__$1 = (((((!((map__11456 == null))))?(((((map__11456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11456):map__11456);
var items = cljs.core.get.call(null,map__11456__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11456__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__11458){
var map__11459 = p__11458;
var map__11459__$1 = (((((!((map__11459 == null))))?(((((map__11459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11459):map__11459);
var expr = cljs.core.get.call(null,map__11459__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__11461){
var map__11462 = p__11461;
var map__11462__$1 = (((((!((map__11462 == null))))?(((((map__11462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11462):map__11462);
var form = cljs.core.get.call(null,map__11462__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__11462__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__11464 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11464__$1 = (((((!((map__11464 == null))))?(((((map__11464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11464):map__11464);
var op = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__11466 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11466__$1 = (((((!((map__11466 == null))))?(((((map__11466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11466):map__11466);
var op = cljs.core.get.call(null,map__11466__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11466__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11466__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__11468){
var map__11469 = p__11468;
var map__11469__$1 = (((((!((map__11469 == null))))?(((((map__11469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11469):map__11469);
var test = cljs.core.get.call(null,map__11469__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__11469__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__11469__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__11469__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__11469__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__11471){
var map__11472 = p__11471;
var map__11472__$1 = (((((!((map__11472 == null))))?(((((map__11472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11472):map__11472);
var v = cljs.core.get.call(null,map__11472__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__11472__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__11472__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__11472__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__11474_11510 = cljs.core.seq.call(null,nodes);
var chunk__11475_11511 = null;
var count__11476_11512 = (0);
var i__11477_11513 = (0);
while(true){
if((i__11477_11513 < count__11476_11512)){
var map__11494_11514 = cljs.core._nth.call(null,chunk__11475_11511,i__11477_11513);
var map__11494_11515__$1 = (((((!((map__11494_11514 == null))))?(((((map__11494_11514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11494_11514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11494_11514):map__11494_11514);
var ts_11516 = cljs.core.get.call(null,map__11494_11515__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11495_11517 = cljs.core.get.call(null,map__11494_11515__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11495_11518__$1 = (((((!((map__11495_11517 == null))))?(((((map__11495_11517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11495_11517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11495_11517):map__11495_11517);
var then_11519 = cljs.core.get.call(null,map__11495_11518__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11498_11520 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11516));
var chunk__11499_11521 = null;
var count__11500_11522 = (0);
var i__11501_11523 = (0);
while(true){
if((i__11501_11523 < count__11500_11522)){
var test_11524 = cljs.core._nth.call(null,chunk__11499_11521,i__11501_11523);
cljs.compiler.emitln.call(null,"case ",test_11524,":");


var G__11525 = seq__11498_11520;
var G__11526 = chunk__11499_11521;
var G__11527 = count__11500_11522;
var G__11528 = (i__11501_11523 + (1));
seq__11498_11520 = G__11525;
chunk__11499_11521 = G__11526;
count__11500_11522 = G__11527;
i__11501_11523 = G__11528;
continue;
} else {
var temp__5720__auto___11529 = cljs.core.seq.call(null,seq__11498_11520);
if(temp__5720__auto___11529){
var seq__11498_11530__$1 = temp__5720__auto___11529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11498_11530__$1)){
var c__4550__auto___11531 = cljs.core.chunk_first.call(null,seq__11498_11530__$1);
var G__11532 = cljs.core.chunk_rest.call(null,seq__11498_11530__$1);
var G__11533 = c__4550__auto___11531;
var G__11534 = cljs.core.count.call(null,c__4550__auto___11531);
var G__11535 = (0);
seq__11498_11520 = G__11532;
chunk__11499_11521 = G__11533;
count__11500_11522 = G__11534;
i__11501_11523 = G__11535;
continue;
} else {
var test_11536 = cljs.core.first.call(null,seq__11498_11530__$1);
cljs.compiler.emitln.call(null,"case ",test_11536,":");


var G__11537 = cljs.core.next.call(null,seq__11498_11530__$1);
var G__11538 = null;
var G__11539 = (0);
var G__11540 = (0);
seq__11498_11520 = G__11537;
chunk__11499_11521 = G__11538;
count__11500_11522 = G__11539;
i__11501_11523 = G__11540;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11519);
} else {
cljs.compiler.emitln.call(null,then_11519);
}

cljs.compiler.emitln.call(null,"break;");


var G__11541 = seq__11474_11510;
var G__11542 = chunk__11475_11511;
var G__11543 = count__11476_11512;
var G__11544 = (i__11477_11513 + (1));
seq__11474_11510 = G__11541;
chunk__11475_11511 = G__11542;
count__11476_11512 = G__11543;
i__11477_11513 = G__11544;
continue;
} else {
var temp__5720__auto___11545 = cljs.core.seq.call(null,seq__11474_11510);
if(temp__5720__auto___11545){
var seq__11474_11546__$1 = temp__5720__auto___11545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11474_11546__$1)){
var c__4550__auto___11547 = cljs.core.chunk_first.call(null,seq__11474_11546__$1);
var G__11548 = cljs.core.chunk_rest.call(null,seq__11474_11546__$1);
var G__11549 = c__4550__auto___11547;
var G__11550 = cljs.core.count.call(null,c__4550__auto___11547);
var G__11551 = (0);
seq__11474_11510 = G__11548;
chunk__11475_11511 = G__11549;
count__11476_11512 = G__11550;
i__11477_11513 = G__11551;
continue;
} else {
var map__11502_11552 = cljs.core.first.call(null,seq__11474_11546__$1);
var map__11502_11553__$1 = (((((!((map__11502_11552 == null))))?(((((map__11502_11552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11502_11552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11502_11552):map__11502_11552);
var ts_11554 = cljs.core.get.call(null,map__11502_11553__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11503_11555 = cljs.core.get.call(null,map__11502_11553__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11503_11556__$1 = (((((!((map__11503_11555 == null))))?(((((map__11503_11555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11503_11555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11503_11555):map__11503_11555);
var then_11557 = cljs.core.get.call(null,map__11503_11556__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11506_11558 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11554));
var chunk__11507_11559 = null;
var count__11508_11560 = (0);
var i__11509_11561 = (0);
while(true){
if((i__11509_11561 < count__11508_11560)){
var test_11562 = cljs.core._nth.call(null,chunk__11507_11559,i__11509_11561);
cljs.compiler.emitln.call(null,"case ",test_11562,":");


var G__11563 = seq__11506_11558;
var G__11564 = chunk__11507_11559;
var G__11565 = count__11508_11560;
var G__11566 = (i__11509_11561 + (1));
seq__11506_11558 = G__11563;
chunk__11507_11559 = G__11564;
count__11508_11560 = G__11565;
i__11509_11561 = G__11566;
continue;
} else {
var temp__5720__auto___11567__$1 = cljs.core.seq.call(null,seq__11506_11558);
if(temp__5720__auto___11567__$1){
var seq__11506_11568__$1 = temp__5720__auto___11567__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11506_11568__$1)){
var c__4550__auto___11569 = cljs.core.chunk_first.call(null,seq__11506_11568__$1);
var G__11570 = cljs.core.chunk_rest.call(null,seq__11506_11568__$1);
var G__11571 = c__4550__auto___11569;
var G__11572 = cljs.core.count.call(null,c__4550__auto___11569);
var G__11573 = (0);
seq__11506_11558 = G__11570;
chunk__11507_11559 = G__11571;
count__11508_11560 = G__11572;
i__11509_11561 = G__11573;
continue;
} else {
var test_11574 = cljs.core.first.call(null,seq__11506_11568__$1);
cljs.compiler.emitln.call(null,"case ",test_11574,":");


var G__11575 = cljs.core.next.call(null,seq__11506_11568__$1);
var G__11576 = null;
var G__11577 = (0);
var G__11578 = (0);
seq__11506_11558 = G__11575;
chunk__11507_11559 = G__11576;
count__11508_11560 = G__11577;
i__11509_11561 = G__11578;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11557);
} else {
cljs.compiler.emitln.call(null,then_11557);
}

cljs.compiler.emitln.call(null,"break;");


var G__11579 = cljs.core.next.call(null,seq__11474_11546__$1);
var G__11580 = null;
var G__11581 = (0);
var G__11582 = (0);
seq__11474_11510 = G__11579;
chunk__11475_11511 = G__11580;
count__11476_11512 = G__11581;
i__11477_11513 = G__11582;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__11583){
var map__11584 = p__11583;
var map__11584__$1 = (((((!((map__11584 == null))))?(((((map__11584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11584):map__11584);
var throw$ = cljs.core.get.call(null,map__11584__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__11584__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__11587 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__11587,(0),null);
var rstr = cljs.core.nth.call(null,vec__11587,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__11587,fstr,rstr,ret_t,axstr){
return (function (p1__11586_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11586_SHARP_);
});})(idx,vec__11587,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__11590 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__11590,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__11590;
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
return (function (p1__11591_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11591_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__11592 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11593 = cljs.core.seq.call(null,vec__11592);
var first__11594 = cljs.core.first.call(null,seq__11593);
var seq__11593__$1 = cljs.core.next.call(null,seq__11593);
var p = first__11594;
var first__11594__$1 = cljs.core.first.call(null,seq__11593__$1);
var seq__11593__$2 = cljs.core.next.call(null,seq__11593__$1);
var ts = first__11594__$1;
var first__11594__$2 = cljs.core.first.call(null,seq__11593__$2);
var seq__11593__$3 = cljs.core.next.call(null,seq__11593__$2);
var n = first__11594__$2;
var xs = seq__11593__$3;
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
var vec__11595 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11596 = cljs.core.seq.call(null,vec__11595);
var first__11597 = cljs.core.first.call(null,seq__11596);
var seq__11596__$1 = cljs.core.next.call(null,seq__11596);
var p = first__11597;
var first__11597__$1 = cljs.core.first.call(null,seq__11596__$1);
var seq__11596__$2 = cljs.core.next.call(null,seq__11596__$1);
var ts = first__11597__$1;
var xs = seq__11596__$2;
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
var G__11600 = arguments.length;
switch (G__11600) {
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
var vec__11608 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__11598_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__11598_SHARP_);
} else {
return p1__11598_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__11609 = cljs.core.seq.call(null,vec__11608);
var first__11610 = cljs.core.first.call(null,seq__11609);
var seq__11609__$1 = cljs.core.next.call(null,seq__11609);
var x = first__11610;
var ys = seq__11609__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__11611 = cljs.core.seq.call(null,ys);
var chunk__11612 = null;
var count__11613 = (0);
var i__11614 = (0);
while(true){
if((i__11614 < count__11613)){
var next_line = cljs.core._nth.call(null,chunk__11612,i__11614);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11620 = seq__11611;
var G__11621 = chunk__11612;
var G__11622 = count__11613;
var G__11623 = (i__11614 + (1));
seq__11611 = G__11620;
chunk__11612 = G__11621;
count__11613 = G__11622;
i__11614 = G__11623;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11611);
if(temp__5720__auto__){
var seq__11611__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11611__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11611__$1);
var G__11624 = cljs.core.chunk_rest.call(null,seq__11611__$1);
var G__11625 = c__4550__auto__;
var G__11626 = cljs.core.count.call(null,c__4550__auto__);
var G__11627 = (0);
seq__11611 = G__11624;
chunk__11612 = G__11625;
count__11613 = G__11626;
i__11614 = G__11627;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__11611__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11628 = cljs.core.next.call(null,seq__11611__$1);
var G__11629 = null;
var G__11630 = (0);
var G__11631 = (0);
seq__11611 = G__11628;
chunk__11612 = G__11629;
count__11613 = G__11630;
i__11614 = G__11631;
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

var seq__11615_11632 = cljs.core.seq.call(null,docs__$2);
var chunk__11616_11633 = null;
var count__11617_11634 = (0);
var i__11618_11635 = (0);
while(true){
if((i__11618_11635 < count__11617_11634)){
var e_11636 = cljs.core._nth.call(null,chunk__11616_11633,i__11618_11635);
if(cljs.core.truth_(e_11636)){
print_comment_lines.call(null,e_11636);
} else {
}


var G__11637 = seq__11615_11632;
var G__11638 = chunk__11616_11633;
var G__11639 = count__11617_11634;
var G__11640 = (i__11618_11635 + (1));
seq__11615_11632 = G__11637;
chunk__11616_11633 = G__11638;
count__11617_11634 = G__11639;
i__11618_11635 = G__11640;
continue;
} else {
var temp__5720__auto___11641 = cljs.core.seq.call(null,seq__11615_11632);
if(temp__5720__auto___11641){
var seq__11615_11642__$1 = temp__5720__auto___11641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11615_11642__$1)){
var c__4550__auto___11643 = cljs.core.chunk_first.call(null,seq__11615_11642__$1);
var G__11644 = cljs.core.chunk_rest.call(null,seq__11615_11642__$1);
var G__11645 = c__4550__auto___11643;
var G__11646 = cljs.core.count.call(null,c__4550__auto___11643);
var G__11647 = (0);
seq__11615_11632 = G__11644;
chunk__11616_11633 = G__11645;
count__11617_11634 = G__11646;
i__11618_11635 = G__11647;
continue;
} else {
var e_11648 = cljs.core.first.call(null,seq__11615_11642__$1);
if(cljs.core.truth_(e_11648)){
print_comment_lines.call(null,e_11648);
} else {
}


var G__11649 = cljs.core.next.call(null,seq__11615_11642__$1);
var G__11650 = null;
var G__11651 = (0);
var G__11652 = (0);
seq__11615_11632 = G__11649;
chunk__11616_11633 = G__11650;
count__11617_11634 = G__11651;
i__11618_11635 = G__11652;
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
return (function (p1__11654_SHARP_){
return goog.string.startsWith(p1__11654_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__11655){
var map__11656 = p__11655;
var map__11656__$1 = (((((!((map__11656 == null))))?(((((map__11656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11656):map__11656);
var doc = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__11658){
var map__11659 = p__11658;
var map__11659__$1 = (((((!((map__11659 == null))))?(((((map__11659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11659):map__11659);
var name = cljs.core.get.call(null,map__11659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11659__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11659__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__11661_11685 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__11662_11686 = null;
var count__11663_11687 = (0);
var i__11664_11688 = (0);
while(true){
if((i__11664_11688 < count__11663_11687)){
var vec__11671_11689 = cljs.core._nth.call(null,chunk__11662_11686,i__11664_11688);
var i_11690 = cljs.core.nth.call(null,vec__11671_11689,(0),null);
var param_11691 = cljs.core.nth.call(null,vec__11671_11689,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11691);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11692 = seq__11661_11685;
var G__11693 = chunk__11662_11686;
var G__11694 = count__11663_11687;
var G__11695 = (i__11664_11688 + (1));
seq__11661_11685 = G__11692;
chunk__11662_11686 = G__11693;
count__11663_11687 = G__11694;
i__11664_11688 = G__11695;
continue;
} else {
var temp__5720__auto___11696 = cljs.core.seq.call(null,seq__11661_11685);
if(temp__5720__auto___11696){
var seq__11661_11697__$1 = temp__5720__auto___11696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11661_11697__$1)){
var c__4550__auto___11698 = cljs.core.chunk_first.call(null,seq__11661_11697__$1);
var G__11699 = cljs.core.chunk_rest.call(null,seq__11661_11697__$1);
var G__11700 = c__4550__auto___11698;
var G__11701 = cljs.core.count.call(null,c__4550__auto___11698);
var G__11702 = (0);
seq__11661_11685 = G__11699;
chunk__11662_11686 = G__11700;
count__11663_11687 = G__11701;
i__11664_11688 = G__11702;
continue;
} else {
var vec__11674_11703 = cljs.core.first.call(null,seq__11661_11697__$1);
var i_11704 = cljs.core.nth.call(null,vec__11674_11703,(0),null);
var param_11705 = cljs.core.nth.call(null,vec__11674_11703,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11705);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11706 = cljs.core.next.call(null,seq__11661_11697__$1);
var G__11707 = null;
var G__11708 = (0);
var G__11709 = (0);
seq__11661_11685 = G__11706;
chunk__11662_11686 = G__11707;
count__11663_11687 = G__11708;
i__11664_11688 = G__11709;
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

var seq__11677_11710 = cljs.core.seq.call(null,params);
var chunk__11678_11711 = null;
var count__11679_11712 = (0);
var i__11680_11713 = (0);
while(true){
if((i__11680_11713 < count__11679_11712)){
var param_11714 = cljs.core._nth.call(null,chunk__11678_11711,i__11680_11713);
cljs.compiler.emit.call(null,param_11714);

if(cljs.core._EQ_.call(null,param_11714,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11715 = seq__11677_11710;
var G__11716 = chunk__11678_11711;
var G__11717 = count__11679_11712;
var G__11718 = (i__11680_11713 + (1));
seq__11677_11710 = G__11715;
chunk__11678_11711 = G__11716;
count__11679_11712 = G__11717;
i__11680_11713 = G__11718;
continue;
} else {
var temp__5720__auto___11719 = cljs.core.seq.call(null,seq__11677_11710);
if(temp__5720__auto___11719){
var seq__11677_11720__$1 = temp__5720__auto___11719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11677_11720__$1)){
var c__4550__auto___11721 = cljs.core.chunk_first.call(null,seq__11677_11720__$1);
var G__11722 = cljs.core.chunk_rest.call(null,seq__11677_11720__$1);
var G__11723 = c__4550__auto___11721;
var G__11724 = cljs.core.count.call(null,c__4550__auto___11721);
var G__11725 = (0);
seq__11677_11710 = G__11722;
chunk__11678_11711 = G__11723;
count__11679_11712 = G__11724;
i__11680_11713 = G__11725;
continue;
} else {
var param_11726 = cljs.core.first.call(null,seq__11677_11720__$1);
cljs.compiler.emit.call(null,param_11726);

if(cljs.core._EQ_.call(null,param_11726,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11727 = cljs.core.next.call(null,seq__11677_11720__$1);
var G__11728 = null;
var G__11729 = (0);
var G__11730 = (0);
seq__11677_11710 = G__11727;
chunk__11678_11711 = G__11728;
count__11679_11712 = G__11729;
i__11680_11713 = G__11730;
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

var seq__11681_11731 = cljs.core.seq.call(null,params);
var chunk__11682_11732 = null;
var count__11683_11733 = (0);
var i__11684_11734 = (0);
while(true){
if((i__11684_11734 < count__11683_11733)){
var param_11735 = cljs.core._nth.call(null,chunk__11682_11732,i__11684_11734);
cljs.compiler.emit.call(null,param_11735);

if(cljs.core._EQ_.call(null,param_11735,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11736 = seq__11681_11731;
var G__11737 = chunk__11682_11732;
var G__11738 = count__11683_11733;
var G__11739 = (i__11684_11734 + (1));
seq__11681_11731 = G__11736;
chunk__11682_11732 = G__11737;
count__11683_11733 = G__11738;
i__11684_11734 = G__11739;
continue;
} else {
var temp__5720__auto___11740 = cljs.core.seq.call(null,seq__11681_11731);
if(temp__5720__auto___11740){
var seq__11681_11741__$1 = temp__5720__auto___11740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11681_11741__$1)){
var c__4550__auto___11742 = cljs.core.chunk_first.call(null,seq__11681_11741__$1);
var G__11743 = cljs.core.chunk_rest.call(null,seq__11681_11741__$1);
var G__11744 = c__4550__auto___11742;
var G__11745 = cljs.core.count.call(null,c__4550__auto___11742);
var G__11746 = (0);
seq__11681_11731 = G__11743;
chunk__11682_11732 = G__11744;
count__11683_11733 = G__11745;
i__11684_11734 = G__11746;
continue;
} else {
var param_11747 = cljs.core.first.call(null,seq__11681_11741__$1);
cljs.compiler.emit.call(null,param_11747);

if(cljs.core._EQ_.call(null,param_11747,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11748 = cljs.core.next.call(null,seq__11681_11741__$1);
var G__11749 = null;
var G__11750 = (0);
var G__11751 = (0);
seq__11681_11731 = G__11748;
chunk__11682_11732 = G__11749;
count__11683_11733 = G__11750;
i__11684_11734 = G__11751;
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
var seq__11752 = cljs.core.seq.call(null,params);
var chunk__11753 = null;
var count__11754 = (0);
var i__11755 = (0);
while(true){
if((i__11755 < count__11754)){
var param = cljs.core._nth.call(null,chunk__11753,i__11755);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11756 = seq__11752;
var G__11757 = chunk__11753;
var G__11758 = count__11754;
var G__11759 = (i__11755 + (1));
seq__11752 = G__11756;
chunk__11753 = G__11757;
count__11754 = G__11758;
i__11755 = G__11759;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11752);
if(temp__5720__auto__){
var seq__11752__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11752__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11752__$1);
var G__11760 = cljs.core.chunk_rest.call(null,seq__11752__$1);
var G__11761 = c__4550__auto__;
var G__11762 = cljs.core.count.call(null,c__4550__auto__);
var G__11763 = (0);
seq__11752 = G__11760;
chunk__11753 = G__11761;
count__11754 = G__11762;
i__11755 = G__11763;
continue;
} else {
var param = cljs.core.first.call(null,seq__11752__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11764 = cljs.core.next.call(null,seq__11752__$1);
var G__11765 = null;
var G__11766 = (0);
var G__11767 = (0);
seq__11752 = G__11764;
chunk__11753 = G__11765;
count__11754 = G__11766;
i__11755 = G__11767;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__11768){
var map__11769 = p__11768;
var map__11769__$1 = (((((!((map__11769 == null))))?(((((map__11769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11769):map__11769);
var expr = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__11771){
var map__11772 = p__11771;
var map__11772__$1 = (((((!((map__11772 == null))))?(((((map__11772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11772):map__11772);
var f = map__11772__$1;
var expr = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_11782__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_11783 = cljs.compiler.munge.call(null,name_11782__$1);
var delegate_name_11784 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_11783),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_11784," = function (");

var seq__11774_11785 = cljs.core.seq.call(null,params);
var chunk__11775_11786 = null;
var count__11776_11787 = (0);
var i__11777_11788 = (0);
while(true){
if((i__11777_11788 < count__11776_11787)){
var param_11789 = cljs.core._nth.call(null,chunk__11775_11786,i__11777_11788);
cljs.compiler.emit.call(null,param_11789);

if(cljs.core._EQ_.call(null,param_11789,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11790 = seq__11774_11785;
var G__11791 = chunk__11775_11786;
var G__11792 = count__11776_11787;
var G__11793 = (i__11777_11788 + (1));
seq__11774_11785 = G__11790;
chunk__11775_11786 = G__11791;
count__11776_11787 = G__11792;
i__11777_11788 = G__11793;
continue;
} else {
var temp__5720__auto___11794 = cljs.core.seq.call(null,seq__11774_11785);
if(temp__5720__auto___11794){
var seq__11774_11795__$1 = temp__5720__auto___11794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11774_11795__$1)){
var c__4550__auto___11796 = cljs.core.chunk_first.call(null,seq__11774_11795__$1);
var G__11797 = cljs.core.chunk_rest.call(null,seq__11774_11795__$1);
var G__11798 = c__4550__auto___11796;
var G__11799 = cljs.core.count.call(null,c__4550__auto___11796);
var G__11800 = (0);
seq__11774_11785 = G__11797;
chunk__11775_11786 = G__11798;
count__11776_11787 = G__11799;
i__11777_11788 = G__11800;
continue;
} else {
var param_11801 = cljs.core.first.call(null,seq__11774_11795__$1);
cljs.compiler.emit.call(null,param_11801);

if(cljs.core._EQ_.call(null,param_11801,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11802 = cljs.core.next.call(null,seq__11774_11795__$1);
var G__11803 = null;
var G__11804 = (0);
var G__11805 = (0);
seq__11774_11785 = G__11802;
chunk__11775_11786 = G__11803;
count__11776_11787 = G__11804;
i__11777_11788 = G__11805;
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

cljs.compiler.emitln.call(null,"var ",mname_11783," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_11806 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_11806,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_11784,".call(this,");

var seq__11778_11807 = cljs.core.seq.call(null,params);
var chunk__11779_11808 = null;
var count__11780_11809 = (0);
var i__11781_11810 = (0);
while(true){
if((i__11781_11810 < count__11780_11809)){
var param_11811 = cljs.core._nth.call(null,chunk__11779_11808,i__11781_11810);
cljs.compiler.emit.call(null,param_11811);

if(cljs.core._EQ_.call(null,param_11811,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11812 = seq__11778_11807;
var G__11813 = chunk__11779_11808;
var G__11814 = count__11780_11809;
var G__11815 = (i__11781_11810 + (1));
seq__11778_11807 = G__11812;
chunk__11779_11808 = G__11813;
count__11780_11809 = G__11814;
i__11781_11810 = G__11815;
continue;
} else {
var temp__5720__auto___11816 = cljs.core.seq.call(null,seq__11778_11807);
if(temp__5720__auto___11816){
var seq__11778_11817__$1 = temp__5720__auto___11816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11778_11817__$1)){
var c__4550__auto___11818 = cljs.core.chunk_first.call(null,seq__11778_11817__$1);
var G__11819 = cljs.core.chunk_rest.call(null,seq__11778_11817__$1);
var G__11820 = c__4550__auto___11818;
var G__11821 = cljs.core.count.call(null,c__4550__auto___11818);
var G__11822 = (0);
seq__11778_11807 = G__11819;
chunk__11779_11808 = G__11820;
count__11780_11809 = G__11821;
i__11781_11810 = G__11822;
continue;
} else {
var param_11823 = cljs.core.first.call(null,seq__11778_11817__$1);
cljs.compiler.emit.call(null,param_11823);

if(cljs.core._EQ_.call(null,param_11823,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11824 = cljs.core.next.call(null,seq__11778_11817__$1);
var G__11825 = null;
var G__11826 = (0);
var G__11827 = (0);
seq__11778_11807 = G__11824;
chunk__11779_11808 = G__11825;
count__11780_11809 = G__11826;
i__11781_11810 = G__11827;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_11783,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_11783,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_11782__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_11783,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_11784,";");

cljs.compiler.emitln.call(null,"return ",mname_11783,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__11831){
var map__11832 = p__11831;
var map__11832__$1 = (((((!((map__11832 == null))))?(((((map__11832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11832):map__11832);
var variadic = cljs.core.get.call(null,map__11832__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__11832__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11832__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__11832__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__11832__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__11832__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__11832__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__11832,map__11832__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11828_SHARP_){
var and__4120__auto__ = p1__11828_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__11828_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__11832,map__11832__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_11885__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_11886 = cljs.compiler.munge.call(null,name_11885__$1);
var maxparams_11887 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_11888 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_11885__$1,mname_11886,maxparams_11887,loop_locals,map__11832,map__11832__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_11886),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_11885__$1,mname_11886,maxparams_11887,loop_locals,map__11832,map__11832__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_11889 = cljs.core.sort_by.call(null,((function (name_11885__$1,mname_11886,maxparams_11887,mmap_11888,loop_locals,map__11832,map__11832__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11829_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11829_SHARP_)));
});})(name_11885__$1,mname_11886,maxparams_11887,mmap_11888,loop_locals,map__11832,map__11832__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_11888));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_11886," = null;");

var seq__11834_11890 = cljs.core.seq.call(null,ms_11889);
var chunk__11835_11891 = null;
var count__11836_11892 = (0);
var i__11837_11893 = (0);
while(true){
if((i__11837_11893 < count__11836_11892)){
var vec__11844_11894 = cljs.core._nth.call(null,chunk__11835_11891,i__11837_11893);
var n_11895 = cljs.core.nth.call(null,vec__11844_11894,(0),null);
var meth_11896 = cljs.core.nth.call(null,vec__11844_11894,(1),null);
cljs.compiler.emits.call(null,"var ",n_11895," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11896))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_11896);
} else {
cljs.compiler.emit_fn_method.call(null,meth_11896);
}

cljs.compiler.emitln.call(null,";");


var G__11897 = seq__11834_11890;
var G__11898 = chunk__11835_11891;
var G__11899 = count__11836_11892;
var G__11900 = (i__11837_11893 + (1));
seq__11834_11890 = G__11897;
chunk__11835_11891 = G__11898;
count__11836_11892 = G__11899;
i__11837_11893 = G__11900;
continue;
} else {
var temp__5720__auto___11901 = cljs.core.seq.call(null,seq__11834_11890);
if(temp__5720__auto___11901){
var seq__11834_11902__$1 = temp__5720__auto___11901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11834_11902__$1)){
var c__4550__auto___11903 = cljs.core.chunk_first.call(null,seq__11834_11902__$1);
var G__11904 = cljs.core.chunk_rest.call(null,seq__11834_11902__$1);
var G__11905 = c__4550__auto___11903;
var G__11906 = cljs.core.count.call(null,c__4550__auto___11903);
var G__11907 = (0);
seq__11834_11890 = G__11904;
chunk__11835_11891 = G__11905;
count__11836_11892 = G__11906;
i__11837_11893 = G__11907;
continue;
} else {
var vec__11847_11908 = cljs.core.first.call(null,seq__11834_11902__$1);
var n_11909 = cljs.core.nth.call(null,vec__11847_11908,(0),null);
var meth_11910 = cljs.core.nth.call(null,vec__11847_11908,(1),null);
cljs.compiler.emits.call(null,"var ",n_11909," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11910))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_11910);
} else {
cljs.compiler.emit_fn_method.call(null,meth_11910);
}

cljs.compiler.emitln.call(null,";");


var G__11911 = cljs.core.next.call(null,seq__11834_11902__$1);
var G__11912 = null;
var G__11913 = (0);
var G__11914 = (0);
seq__11834_11890 = G__11911;
chunk__11835_11891 = G__11912;
count__11836_11892 = G__11913;
i__11837_11893 = G__11914;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_11886," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_11887),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_11887)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_11887));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__11850_11915 = cljs.core.seq.call(null,ms_11889);
var chunk__11851_11916 = null;
var count__11852_11917 = (0);
var i__11853_11918 = (0);
while(true){
if((i__11853_11918 < count__11852_11917)){
var vec__11860_11919 = cljs.core._nth.call(null,chunk__11851_11916,i__11853_11918);
var n_11920 = cljs.core.nth.call(null,vec__11860_11919,(0),null);
var meth_11921 = cljs.core.nth.call(null,vec__11860_11919,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11921))){
cljs.compiler.emitln.call(null,"default:");

var restarg_11922 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_11922," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_11923 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_11922," = new cljs.core.IndexedSeq(",a_11923,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_11920,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_11887)),(((cljs.core.count.call(null,maxparams_11887) > (1)))?", ":null),restarg_11922,");");
} else {
var pcnt_11924 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11921));
cljs.compiler.emitln.call(null,"case ",pcnt_11924,":");

cljs.compiler.emitln.call(null,"return ",n_11920,".call(this",(((pcnt_11924 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_11924,maxparams_11887)),null,(1),null)),(2),null))),");");
}


var G__11925 = seq__11850_11915;
var G__11926 = chunk__11851_11916;
var G__11927 = count__11852_11917;
var G__11928 = (i__11853_11918 + (1));
seq__11850_11915 = G__11925;
chunk__11851_11916 = G__11926;
count__11852_11917 = G__11927;
i__11853_11918 = G__11928;
continue;
} else {
var temp__5720__auto___11929 = cljs.core.seq.call(null,seq__11850_11915);
if(temp__5720__auto___11929){
var seq__11850_11930__$1 = temp__5720__auto___11929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11850_11930__$1)){
var c__4550__auto___11931 = cljs.core.chunk_first.call(null,seq__11850_11930__$1);
var G__11932 = cljs.core.chunk_rest.call(null,seq__11850_11930__$1);
var G__11933 = c__4550__auto___11931;
var G__11934 = cljs.core.count.call(null,c__4550__auto___11931);
var G__11935 = (0);
seq__11850_11915 = G__11932;
chunk__11851_11916 = G__11933;
count__11852_11917 = G__11934;
i__11853_11918 = G__11935;
continue;
} else {
var vec__11863_11936 = cljs.core.first.call(null,seq__11850_11930__$1);
var n_11937 = cljs.core.nth.call(null,vec__11863_11936,(0),null);
var meth_11938 = cljs.core.nth.call(null,vec__11863_11936,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11938))){
cljs.compiler.emitln.call(null,"default:");

var restarg_11939 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_11939," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_11940 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_11939," = new cljs.core.IndexedSeq(",a_11940,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_11937,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_11887)),(((cljs.core.count.call(null,maxparams_11887) > (1)))?", ":null),restarg_11939,");");
} else {
var pcnt_11941 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11938));
cljs.compiler.emitln.call(null,"case ",pcnt_11941,":");

cljs.compiler.emitln.call(null,"return ",n_11937,".call(this",(((pcnt_11941 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_11941,maxparams_11887)),null,(1),null)),(2),null))),");");
}


var G__11942 = cljs.core.next.call(null,seq__11850_11930__$1);
var G__11943 = null;
var G__11944 = (0);
var G__11945 = (0);
seq__11850_11915 = G__11942;
chunk__11851_11916 = G__11943;
count__11852_11917 = G__11944;
i__11853_11918 = G__11945;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_11946 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_11889)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_11946,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_11886,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_11886,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_11885__$1,mname_11886,maxparams_11887,mmap_11888,ms_11889,loop_locals,map__11832,map__11832__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11830_SHARP_){
var vec__11866 = p1__11830_SHARP_;
var n = cljs.core.nth.call(null,vec__11866,(0),null);
var m = cljs.core.nth.call(null,vec__11866,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_11885__$1,mname_11886,maxparams_11887,mmap_11888,ms_11889,loop_locals,map__11832,map__11832__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_11889),".cljs$lang$applyTo;");
} else {
}

var seq__11869_11947 = cljs.core.seq.call(null,ms_11889);
var chunk__11870_11948 = null;
var count__11871_11949 = (0);
var i__11872_11950 = (0);
while(true){
if((i__11872_11950 < count__11871_11949)){
var vec__11879_11951 = cljs.core._nth.call(null,chunk__11870_11948,i__11872_11950);
var n_11952 = cljs.core.nth.call(null,vec__11879_11951,(0),null);
var meth_11953 = cljs.core.nth.call(null,vec__11879_11951,(1),null);
var c_11954 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11953));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11953))){
cljs.compiler.emitln.call(null,mname_11886,".cljs$core$IFn$_invoke$arity$variadic = ",n_11952,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_11886,".cljs$core$IFn$_invoke$arity$",c_11954," = ",n_11952,";");
}


var G__11955 = seq__11869_11947;
var G__11956 = chunk__11870_11948;
var G__11957 = count__11871_11949;
var G__11958 = (i__11872_11950 + (1));
seq__11869_11947 = G__11955;
chunk__11870_11948 = G__11956;
count__11871_11949 = G__11957;
i__11872_11950 = G__11958;
continue;
} else {
var temp__5720__auto___11959 = cljs.core.seq.call(null,seq__11869_11947);
if(temp__5720__auto___11959){
var seq__11869_11960__$1 = temp__5720__auto___11959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11869_11960__$1)){
var c__4550__auto___11961 = cljs.core.chunk_first.call(null,seq__11869_11960__$1);
var G__11962 = cljs.core.chunk_rest.call(null,seq__11869_11960__$1);
var G__11963 = c__4550__auto___11961;
var G__11964 = cljs.core.count.call(null,c__4550__auto___11961);
var G__11965 = (0);
seq__11869_11947 = G__11962;
chunk__11870_11948 = G__11963;
count__11871_11949 = G__11964;
i__11872_11950 = G__11965;
continue;
} else {
var vec__11882_11966 = cljs.core.first.call(null,seq__11869_11960__$1);
var n_11967 = cljs.core.nth.call(null,vec__11882_11966,(0),null);
var meth_11968 = cljs.core.nth.call(null,vec__11882_11966,(1),null);
var c_11969 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11968));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11968))){
cljs.compiler.emitln.call(null,mname_11886,".cljs$core$IFn$_invoke$arity$variadic = ",n_11967,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_11886,".cljs$core$IFn$_invoke$arity$",c_11969," = ",n_11967,";");
}


var G__11970 = cljs.core.next.call(null,seq__11869_11960__$1);
var G__11971 = null;
var G__11972 = (0);
var G__11973 = (0);
seq__11869_11947 = G__11970;
chunk__11870_11948 = G__11971;
count__11871_11949 = G__11972;
i__11872_11950 = G__11973;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_11886,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__11974){
var map__11975 = p__11974;
var map__11975__$1 = (((((!((map__11975 == null))))?(((((map__11975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11975):map__11975);
var statements = cljs.core.get.call(null,map__11975__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__11975__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__11975__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__11977_11981 = cljs.core.seq.call(null,statements);
var chunk__11978_11982 = null;
var count__11979_11983 = (0);
var i__11980_11984 = (0);
while(true){
if((i__11980_11984 < count__11979_11983)){
var s_11985 = cljs.core._nth.call(null,chunk__11978_11982,i__11980_11984);
cljs.compiler.emitln.call(null,s_11985);


var G__11986 = seq__11977_11981;
var G__11987 = chunk__11978_11982;
var G__11988 = count__11979_11983;
var G__11989 = (i__11980_11984 + (1));
seq__11977_11981 = G__11986;
chunk__11978_11982 = G__11987;
count__11979_11983 = G__11988;
i__11980_11984 = G__11989;
continue;
} else {
var temp__5720__auto___11990 = cljs.core.seq.call(null,seq__11977_11981);
if(temp__5720__auto___11990){
var seq__11977_11991__$1 = temp__5720__auto___11990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11977_11991__$1)){
var c__4550__auto___11992 = cljs.core.chunk_first.call(null,seq__11977_11991__$1);
var G__11993 = cljs.core.chunk_rest.call(null,seq__11977_11991__$1);
var G__11994 = c__4550__auto___11992;
var G__11995 = cljs.core.count.call(null,c__4550__auto___11992);
var G__11996 = (0);
seq__11977_11981 = G__11993;
chunk__11978_11982 = G__11994;
count__11979_11983 = G__11995;
i__11980_11984 = G__11996;
continue;
} else {
var s_11997 = cljs.core.first.call(null,seq__11977_11991__$1);
cljs.compiler.emitln.call(null,s_11997);


var G__11998 = cljs.core.next.call(null,seq__11977_11991__$1);
var G__11999 = null;
var G__12000 = (0);
var G__12001 = (0);
seq__11977_11981 = G__11998;
chunk__11978_11982 = G__11999;
count__11979_11983 = G__12000;
i__11980_11984 = G__12001;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12002){
var map__12003 = p__12002;
var map__12003__$1 = (((((!((map__12003 == null))))?(((((map__12003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12003):map__12003);
var try$ = cljs.core.get.call(null,map__12003__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__12003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__12003__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__12003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__12003__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__12005,is_loop){
var map__12006 = p__12005;
var map__12006__$1 = (((((!((map__12006 == null))))?(((((map__12006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12006):map__12006);
var expr = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__12008_12022 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__12009_12023 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__12008_12022,context,map__12006,map__12006__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__12008_12022,context,map__12006,map__12006__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__12009_12023;

try{var seq__12010_12024 = cljs.core.seq.call(null,bindings);
var chunk__12011_12025 = null;
var count__12012_12026 = (0);
var i__12013_12027 = (0);
while(true){
if((i__12013_12027 < count__12012_12026)){
var map__12018_12028 = cljs.core._nth.call(null,chunk__12011_12025,i__12013_12027);
var map__12018_12029__$1 = (((((!((map__12018_12028 == null))))?(((((map__12018_12028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12018_12028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12018_12028):map__12018_12028);
var binding_12030 = map__12018_12029__$1;
var init_12031 = cljs.core.get.call(null,map__12018_12029__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12030);

cljs.compiler.emitln.call(null," = ",init_12031,";");


var G__12032 = seq__12010_12024;
var G__12033 = chunk__12011_12025;
var G__12034 = count__12012_12026;
var G__12035 = (i__12013_12027 + (1));
seq__12010_12024 = G__12032;
chunk__12011_12025 = G__12033;
count__12012_12026 = G__12034;
i__12013_12027 = G__12035;
continue;
} else {
var temp__5720__auto___12036 = cljs.core.seq.call(null,seq__12010_12024);
if(temp__5720__auto___12036){
var seq__12010_12037__$1 = temp__5720__auto___12036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12010_12037__$1)){
var c__4550__auto___12038 = cljs.core.chunk_first.call(null,seq__12010_12037__$1);
var G__12039 = cljs.core.chunk_rest.call(null,seq__12010_12037__$1);
var G__12040 = c__4550__auto___12038;
var G__12041 = cljs.core.count.call(null,c__4550__auto___12038);
var G__12042 = (0);
seq__12010_12024 = G__12039;
chunk__12011_12025 = G__12040;
count__12012_12026 = G__12041;
i__12013_12027 = G__12042;
continue;
} else {
var map__12020_12043 = cljs.core.first.call(null,seq__12010_12037__$1);
var map__12020_12044__$1 = (((((!((map__12020_12043 == null))))?(((((map__12020_12043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12020_12043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12020_12043):map__12020_12043);
var binding_12045 = map__12020_12044__$1;
var init_12046 = cljs.core.get.call(null,map__12020_12044__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12045);

cljs.compiler.emitln.call(null," = ",init_12046,";");


var G__12047 = cljs.core.next.call(null,seq__12010_12037__$1);
var G__12048 = null;
var G__12049 = (0);
var G__12050 = (0);
seq__12010_12024 = G__12047;
chunk__12011_12025 = G__12048;
count__12012_12026 = G__12049;
i__12013_12027 = G__12050;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__12008_12022;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__12051){
var map__12052 = p__12051;
var map__12052__$1 = (((((!((map__12052 == null))))?(((((map__12052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12052):map__12052);
var frame = cljs.core.get.call(null,map__12052__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__12052__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__12052__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___12054 = cljs.core.count.call(null,exprs);
var i_12055 = (0);
while(true){
if((i_12055 < n__4607__auto___12054)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_12055)," = ",exprs.call(null,i_12055),";");

var G__12056 = (i_12055 + (1));
i_12055 = G__12056;
continue;
} else {
}
break;
}

var n__4607__auto___12057 = cljs.core.count.call(null,exprs);
var i_12058 = (0);
while(true){
if((i_12058 < n__4607__auto___12057)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_12058))," = ",temps.call(null,i_12058),";");

var G__12059 = (i_12058 + (1));
i_12058 = G__12059;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__12060){
var map__12061 = p__12060;
var map__12061__$1 = (((((!((map__12061 == null))))?(((((map__12061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12061):map__12061);
var expr = cljs.core.get.call(null,map__12061__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__12061__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__12061__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__12063_12075 = cljs.core.seq.call(null,bindings);
var chunk__12064_12076 = null;
var count__12065_12077 = (0);
var i__12066_12078 = (0);
while(true){
if((i__12066_12078 < count__12065_12077)){
var map__12071_12079 = cljs.core._nth.call(null,chunk__12064_12076,i__12066_12078);
var map__12071_12080__$1 = (((((!((map__12071_12079 == null))))?(((((map__12071_12079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12071_12079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12071_12079):map__12071_12079);
var binding_12081 = map__12071_12080__$1;
var init_12082 = cljs.core.get.call(null,map__12071_12080__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12081)," = ",init_12082,";");


var G__12083 = seq__12063_12075;
var G__12084 = chunk__12064_12076;
var G__12085 = count__12065_12077;
var G__12086 = (i__12066_12078 + (1));
seq__12063_12075 = G__12083;
chunk__12064_12076 = G__12084;
count__12065_12077 = G__12085;
i__12066_12078 = G__12086;
continue;
} else {
var temp__5720__auto___12087 = cljs.core.seq.call(null,seq__12063_12075);
if(temp__5720__auto___12087){
var seq__12063_12088__$1 = temp__5720__auto___12087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12063_12088__$1)){
var c__4550__auto___12089 = cljs.core.chunk_first.call(null,seq__12063_12088__$1);
var G__12090 = cljs.core.chunk_rest.call(null,seq__12063_12088__$1);
var G__12091 = c__4550__auto___12089;
var G__12092 = cljs.core.count.call(null,c__4550__auto___12089);
var G__12093 = (0);
seq__12063_12075 = G__12090;
chunk__12064_12076 = G__12091;
count__12065_12077 = G__12092;
i__12066_12078 = G__12093;
continue;
} else {
var map__12073_12094 = cljs.core.first.call(null,seq__12063_12088__$1);
var map__12073_12095__$1 = (((((!((map__12073_12094 == null))))?(((((map__12073_12094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12073_12094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12073_12094):map__12073_12094);
var binding_12096 = map__12073_12095__$1;
var init_12097 = cljs.core.get.call(null,map__12073_12095__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12096)," = ",init_12097,";");


var G__12098 = cljs.core.next.call(null,seq__12063_12088__$1);
var G__12099 = null;
var G__12100 = (0);
var G__12101 = (0);
seq__12063_12075 = G__12098;
chunk__12064_12076 = G__12099;
count__12065_12077 = G__12100;
i__12066_12078 = G__12101;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12104){
var map__12105 = p__12104;
var map__12105__$1 = (((((!((map__12105 == null))))?(((((map__12105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12105):map__12105);
var expr = map__12105__$1;
var f = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__12107 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12105,map__12105__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12105,map__12105__$1,expr,f,args,env){
return (function (p1__12102_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12102_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12105,map__12105__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12105,map__12105__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12105,map__12105__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12105,map__12105__$1,expr,f,args,env){
return (function (p1__12103_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12103_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12105,map__12105__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12105,map__12105__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__12107,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__12107,(1),null);
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_12110 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_12110,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_12111 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_12111,args)),(((mfa_12111 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_12111,args)),"], 0))");
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
var fprop_12112 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_12112," ? ",f__$1,fprop_12112,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_12112," ? ",f__$1,fprop_12112,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12113){
var map__12114 = p__12113;
var map__12114__$1 = (((((!((map__12114 == null))))?(((((map__12114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12114):map__12114);
var ctor = cljs.core.get.call(null,map__12114__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__12114__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12114__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12116){
var map__12117 = p__12116;
var map__12117__$1 = (((((!((map__12117 == null))))?(((((map__12117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12117):map__12117);
var target = cljs.core.get.call(null,map__12117__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__12117__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__12117__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
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
var map__12119 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12119__$1 = (((((!((map__12119 == null))))?(((((map__12119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12119):map__12119);
var options = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12120 = options;
var map__12120__$1 = (((((!((map__12120 == null))))?(((((map__12120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12120):map__12120);
var target = cljs.core.get.call(null,map__12120__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__12120__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12121 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12126 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12126__$1 = (((((!((map__12126 == null))))?(((((map__12126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12126):map__12126);
var node_libs = cljs.core.get.call(null,map__12126__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12126__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__12121,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__12121,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12128_12148 = cljs.core.seq.call(null,libs_to_load);
var chunk__12129_12149 = null;
var count__12130_12150 = (0);
var i__12131_12151 = (0);
while(true){
if((i__12131_12151 < count__12130_12150)){
var lib_12152 = cljs.core._nth.call(null,chunk__12129_12149,i__12131_12151);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12152)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12152),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12152),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12152),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12152),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12152,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12152),"');");
}

}
}
}


var G__12153 = seq__12128_12148;
var G__12154 = chunk__12129_12149;
var G__12155 = count__12130_12150;
var G__12156 = (i__12131_12151 + (1));
seq__12128_12148 = G__12153;
chunk__12129_12149 = G__12154;
count__12130_12150 = G__12155;
i__12131_12151 = G__12156;
continue;
} else {
var temp__5720__auto___12157 = cljs.core.seq.call(null,seq__12128_12148);
if(temp__5720__auto___12157){
var seq__12128_12158__$1 = temp__5720__auto___12157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12128_12158__$1)){
var c__4550__auto___12159 = cljs.core.chunk_first.call(null,seq__12128_12158__$1);
var G__12160 = cljs.core.chunk_rest.call(null,seq__12128_12158__$1);
var G__12161 = c__4550__auto___12159;
var G__12162 = cljs.core.count.call(null,c__4550__auto___12159);
var G__12163 = (0);
seq__12128_12148 = G__12160;
chunk__12129_12149 = G__12161;
count__12130_12150 = G__12162;
i__12131_12151 = G__12163;
continue;
} else {
var lib_12164 = cljs.core.first.call(null,seq__12128_12158__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12164)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12164),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12164),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12164),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12164),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12164,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12164),"');");
}

}
}
}


var G__12165 = cljs.core.next.call(null,seq__12128_12158__$1);
var G__12166 = null;
var G__12167 = (0);
var G__12168 = (0);
seq__12128_12148 = G__12165;
chunk__12129_12149 = G__12166;
count__12130_12150 = G__12167;
i__12131_12151 = G__12168;
continue;
}
} else {
}
}
break;
}

var seq__12132_12169 = cljs.core.seq.call(null,node_libs);
var chunk__12133_12170 = null;
var count__12134_12171 = (0);
var i__12135_12172 = (0);
while(true){
if((i__12135_12172 < count__12134_12171)){
var lib_12173 = cljs.core._nth.call(null,chunk__12133_12170,i__12135_12172);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12173)," = require('",lib_12173,"');");


var G__12174 = seq__12132_12169;
var G__12175 = chunk__12133_12170;
var G__12176 = count__12134_12171;
var G__12177 = (i__12135_12172 + (1));
seq__12132_12169 = G__12174;
chunk__12133_12170 = G__12175;
count__12134_12171 = G__12176;
i__12135_12172 = G__12177;
continue;
} else {
var temp__5720__auto___12178 = cljs.core.seq.call(null,seq__12132_12169);
if(temp__5720__auto___12178){
var seq__12132_12179__$1 = temp__5720__auto___12178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12132_12179__$1)){
var c__4550__auto___12180 = cljs.core.chunk_first.call(null,seq__12132_12179__$1);
var G__12181 = cljs.core.chunk_rest.call(null,seq__12132_12179__$1);
var G__12182 = c__4550__auto___12180;
var G__12183 = cljs.core.count.call(null,c__4550__auto___12180);
var G__12184 = (0);
seq__12132_12169 = G__12181;
chunk__12133_12170 = G__12182;
count__12134_12171 = G__12183;
i__12135_12172 = G__12184;
continue;
} else {
var lib_12185 = cljs.core.first.call(null,seq__12132_12179__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12185)," = require('",lib_12185,"');");


var G__12186 = cljs.core.next.call(null,seq__12132_12179__$1);
var G__12187 = null;
var G__12188 = (0);
var G__12189 = (0);
seq__12132_12169 = G__12186;
chunk__12133_12170 = G__12187;
count__12134_12171 = G__12188;
i__12135_12172 = G__12189;
continue;
}
} else {
}
}
break;
}

var seq__12136_12190 = cljs.core.seq.call(null,global_exports_libs);
var chunk__12137_12191 = null;
var count__12138_12192 = (0);
var i__12139_12193 = (0);
while(true){
if((i__12139_12193 < count__12138_12192)){
var lib_12194 = cljs.core._nth.call(null,chunk__12137_12191,i__12139_12193);
var map__12144_12195 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12194));
var map__12144_12196__$1 = (((((!((map__12144_12195 == null))))?(((((map__12144_12195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12144_12195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12144_12195):map__12144_12195);
var global_exports_12197 = cljs.core.get.call(null,map__12144_12196__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12197,lib_12194);


var G__12198 = seq__12136_12190;
var G__12199 = chunk__12137_12191;
var G__12200 = count__12138_12192;
var G__12201 = (i__12139_12193 + (1));
seq__12136_12190 = G__12198;
chunk__12137_12191 = G__12199;
count__12138_12192 = G__12200;
i__12139_12193 = G__12201;
continue;
} else {
var temp__5720__auto___12202 = cljs.core.seq.call(null,seq__12136_12190);
if(temp__5720__auto___12202){
var seq__12136_12203__$1 = temp__5720__auto___12202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12136_12203__$1)){
var c__4550__auto___12204 = cljs.core.chunk_first.call(null,seq__12136_12203__$1);
var G__12205 = cljs.core.chunk_rest.call(null,seq__12136_12203__$1);
var G__12206 = c__4550__auto___12204;
var G__12207 = cljs.core.count.call(null,c__4550__auto___12204);
var G__12208 = (0);
seq__12136_12190 = G__12205;
chunk__12137_12191 = G__12206;
count__12138_12192 = G__12207;
i__12139_12193 = G__12208;
continue;
} else {
var lib_12209 = cljs.core.first.call(null,seq__12136_12203__$1);
var map__12146_12210 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12209));
var map__12146_12211__$1 = (((((!((map__12146_12210 == null))))?(((((map__12146_12210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12146_12210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12146_12210):map__12146_12210);
var global_exports_12212 = cljs.core.get.call(null,map__12146_12211__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12212,lib_12209);


var G__12213 = cljs.core.next.call(null,seq__12136_12203__$1);
var G__12214 = null;
var G__12215 = (0);
var G__12216 = (0);
seq__12136_12190 = G__12213;
chunk__12137_12191 = G__12214;
count__12138_12192 = G__12215;
i__12139_12193 = G__12216;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12217){
var map__12218 = p__12217;
var map__12218__$1 = (((((!((map__12218 == null))))?(((((map__12218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12218):map__12218);
var name = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12220){
var map__12221 = p__12220;
var map__12221__$1 = (((((!((map__12221 == null))))?(((((map__12221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12221):map__12221);
var name = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__12223){
var map__12224 = p__12223;
var map__12224__$1 = (((((!((map__12224 == null))))?(((((map__12224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12224):map__12224);
var t = cljs.core.get.call(null,map__12224__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12224__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12224__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12224__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12224__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12226_12250 = cljs.core.seq.call(null,protocols);
var chunk__12227_12251 = null;
var count__12228_12252 = (0);
var i__12229_12253 = (0);
while(true){
if((i__12229_12253 < count__12228_12252)){
var protocol_12254 = cljs.core._nth.call(null,chunk__12227_12251,i__12229_12253);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12254)),"}");


var G__12255 = seq__12226_12250;
var G__12256 = chunk__12227_12251;
var G__12257 = count__12228_12252;
var G__12258 = (i__12229_12253 + (1));
seq__12226_12250 = G__12255;
chunk__12227_12251 = G__12256;
count__12228_12252 = G__12257;
i__12229_12253 = G__12258;
continue;
} else {
var temp__5720__auto___12259 = cljs.core.seq.call(null,seq__12226_12250);
if(temp__5720__auto___12259){
var seq__12226_12260__$1 = temp__5720__auto___12259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12226_12260__$1)){
var c__4550__auto___12261 = cljs.core.chunk_first.call(null,seq__12226_12260__$1);
var G__12262 = cljs.core.chunk_rest.call(null,seq__12226_12260__$1);
var G__12263 = c__4550__auto___12261;
var G__12264 = cljs.core.count.call(null,c__4550__auto___12261);
var G__12265 = (0);
seq__12226_12250 = G__12262;
chunk__12227_12251 = G__12263;
count__12228_12252 = G__12264;
i__12229_12253 = G__12265;
continue;
} else {
var protocol_12266 = cljs.core.first.call(null,seq__12226_12260__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12266)),"}");


var G__12267 = cljs.core.next.call(null,seq__12226_12260__$1);
var G__12268 = null;
var G__12269 = (0);
var G__12270 = (0);
seq__12226_12250 = G__12267;
chunk__12227_12251 = G__12268;
count__12228_12252 = G__12269;
i__12229_12253 = G__12270;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12230_12271 = cljs.core.seq.call(null,fields__$1);
var chunk__12231_12272 = null;
var count__12232_12273 = (0);
var i__12233_12274 = (0);
while(true){
if((i__12233_12274 < count__12232_12273)){
var fld_12275 = cljs.core._nth.call(null,chunk__12231_12272,i__12233_12274);
cljs.compiler.emitln.call(null,"this.",fld_12275," = ",fld_12275,";");


var G__12276 = seq__12230_12271;
var G__12277 = chunk__12231_12272;
var G__12278 = count__12232_12273;
var G__12279 = (i__12233_12274 + (1));
seq__12230_12271 = G__12276;
chunk__12231_12272 = G__12277;
count__12232_12273 = G__12278;
i__12233_12274 = G__12279;
continue;
} else {
var temp__5720__auto___12280 = cljs.core.seq.call(null,seq__12230_12271);
if(temp__5720__auto___12280){
var seq__12230_12281__$1 = temp__5720__auto___12280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12230_12281__$1)){
var c__4550__auto___12282 = cljs.core.chunk_first.call(null,seq__12230_12281__$1);
var G__12283 = cljs.core.chunk_rest.call(null,seq__12230_12281__$1);
var G__12284 = c__4550__auto___12282;
var G__12285 = cljs.core.count.call(null,c__4550__auto___12282);
var G__12286 = (0);
seq__12230_12271 = G__12283;
chunk__12231_12272 = G__12284;
count__12232_12273 = G__12285;
i__12233_12274 = G__12286;
continue;
} else {
var fld_12287 = cljs.core.first.call(null,seq__12230_12281__$1);
cljs.compiler.emitln.call(null,"this.",fld_12287," = ",fld_12287,";");


var G__12288 = cljs.core.next.call(null,seq__12230_12281__$1);
var G__12289 = null;
var G__12290 = (0);
var G__12291 = (0);
seq__12230_12271 = G__12288;
chunk__12231_12272 = G__12289;
count__12232_12273 = G__12290;
i__12233_12274 = G__12291;
continue;
}
} else {
}
}
break;
}

var seq__12234_12292 = cljs.core.seq.call(null,pmasks);
var chunk__12235_12293 = null;
var count__12236_12294 = (0);
var i__12237_12295 = (0);
while(true){
if((i__12237_12295 < count__12236_12294)){
var vec__12244_12296 = cljs.core._nth.call(null,chunk__12235_12293,i__12237_12295);
var pno_12297 = cljs.core.nth.call(null,vec__12244_12296,(0),null);
var pmask_12298 = cljs.core.nth.call(null,vec__12244_12296,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12297,"$ = ",pmask_12298,";");


var G__12299 = seq__12234_12292;
var G__12300 = chunk__12235_12293;
var G__12301 = count__12236_12294;
var G__12302 = (i__12237_12295 + (1));
seq__12234_12292 = G__12299;
chunk__12235_12293 = G__12300;
count__12236_12294 = G__12301;
i__12237_12295 = G__12302;
continue;
} else {
var temp__5720__auto___12303 = cljs.core.seq.call(null,seq__12234_12292);
if(temp__5720__auto___12303){
var seq__12234_12304__$1 = temp__5720__auto___12303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12234_12304__$1)){
var c__4550__auto___12305 = cljs.core.chunk_first.call(null,seq__12234_12304__$1);
var G__12306 = cljs.core.chunk_rest.call(null,seq__12234_12304__$1);
var G__12307 = c__4550__auto___12305;
var G__12308 = cljs.core.count.call(null,c__4550__auto___12305);
var G__12309 = (0);
seq__12234_12292 = G__12306;
chunk__12235_12293 = G__12307;
count__12236_12294 = G__12308;
i__12237_12295 = G__12309;
continue;
} else {
var vec__12247_12310 = cljs.core.first.call(null,seq__12234_12304__$1);
var pno_12311 = cljs.core.nth.call(null,vec__12247_12310,(0),null);
var pmask_12312 = cljs.core.nth.call(null,vec__12247_12310,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12311,"$ = ",pmask_12312,";");


var G__12313 = cljs.core.next.call(null,seq__12234_12304__$1);
var G__12314 = null;
var G__12315 = (0);
var G__12316 = (0);
seq__12234_12292 = G__12313;
chunk__12235_12293 = G__12314;
count__12236_12294 = G__12315;
i__12237_12295 = G__12316;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__12317){
var map__12318 = p__12317;
var map__12318__$1 = (((((!((map__12318 == null))))?(((((map__12318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12318):map__12318);
var t = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12320_12344 = cljs.core.seq.call(null,protocols);
var chunk__12321_12345 = null;
var count__12322_12346 = (0);
var i__12323_12347 = (0);
while(true){
if((i__12323_12347 < count__12322_12346)){
var protocol_12348 = cljs.core._nth.call(null,chunk__12321_12345,i__12323_12347);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12348)),"}");


var G__12349 = seq__12320_12344;
var G__12350 = chunk__12321_12345;
var G__12351 = count__12322_12346;
var G__12352 = (i__12323_12347 + (1));
seq__12320_12344 = G__12349;
chunk__12321_12345 = G__12350;
count__12322_12346 = G__12351;
i__12323_12347 = G__12352;
continue;
} else {
var temp__5720__auto___12353 = cljs.core.seq.call(null,seq__12320_12344);
if(temp__5720__auto___12353){
var seq__12320_12354__$1 = temp__5720__auto___12353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12320_12354__$1)){
var c__4550__auto___12355 = cljs.core.chunk_first.call(null,seq__12320_12354__$1);
var G__12356 = cljs.core.chunk_rest.call(null,seq__12320_12354__$1);
var G__12357 = c__4550__auto___12355;
var G__12358 = cljs.core.count.call(null,c__4550__auto___12355);
var G__12359 = (0);
seq__12320_12344 = G__12356;
chunk__12321_12345 = G__12357;
count__12322_12346 = G__12358;
i__12323_12347 = G__12359;
continue;
} else {
var protocol_12360 = cljs.core.first.call(null,seq__12320_12354__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12360)),"}");


var G__12361 = cljs.core.next.call(null,seq__12320_12354__$1);
var G__12362 = null;
var G__12363 = (0);
var G__12364 = (0);
seq__12320_12344 = G__12361;
chunk__12321_12345 = G__12362;
count__12322_12346 = G__12363;
i__12323_12347 = G__12364;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12324_12365 = cljs.core.seq.call(null,fields__$1);
var chunk__12325_12366 = null;
var count__12326_12367 = (0);
var i__12327_12368 = (0);
while(true){
if((i__12327_12368 < count__12326_12367)){
var fld_12369 = cljs.core._nth.call(null,chunk__12325_12366,i__12327_12368);
cljs.compiler.emitln.call(null,"this.",fld_12369," = ",fld_12369,";");


var G__12370 = seq__12324_12365;
var G__12371 = chunk__12325_12366;
var G__12372 = count__12326_12367;
var G__12373 = (i__12327_12368 + (1));
seq__12324_12365 = G__12370;
chunk__12325_12366 = G__12371;
count__12326_12367 = G__12372;
i__12327_12368 = G__12373;
continue;
} else {
var temp__5720__auto___12374 = cljs.core.seq.call(null,seq__12324_12365);
if(temp__5720__auto___12374){
var seq__12324_12375__$1 = temp__5720__auto___12374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12324_12375__$1)){
var c__4550__auto___12376 = cljs.core.chunk_first.call(null,seq__12324_12375__$1);
var G__12377 = cljs.core.chunk_rest.call(null,seq__12324_12375__$1);
var G__12378 = c__4550__auto___12376;
var G__12379 = cljs.core.count.call(null,c__4550__auto___12376);
var G__12380 = (0);
seq__12324_12365 = G__12377;
chunk__12325_12366 = G__12378;
count__12326_12367 = G__12379;
i__12327_12368 = G__12380;
continue;
} else {
var fld_12381 = cljs.core.first.call(null,seq__12324_12375__$1);
cljs.compiler.emitln.call(null,"this.",fld_12381," = ",fld_12381,";");


var G__12382 = cljs.core.next.call(null,seq__12324_12375__$1);
var G__12383 = null;
var G__12384 = (0);
var G__12385 = (0);
seq__12324_12365 = G__12382;
chunk__12325_12366 = G__12383;
count__12326_12367 = G__12384;
i__12327_12368 = G__12385;
continue;
}
} else {
}
}
break;
}

var seq__12328_12386 = cljs.core.seq.call(null,pmasks);
var chunk__12329_12387 = null;
var count__12330_12388 = (0);
var i__12331_12389 = (0);
while(true){
if((i__12331_12389 < count__12330_12388)){
var vec__12338_12390 = cljs.core._nth.call(null,chunk__12329_12387,i__12331_12389);
var pno_12391 = cljs.core.nth.call(null,vec__12338_12390,(0),null);
var pmask_12392 = cljs.core.nth.call(null,vec__12338_12390,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12391,"$ = ",pmask_12392,";");


var G__12393 = seq__12328_12386;
var G__12394 = chunk__12329_12387;
var G__12395 = count__12330_12388;
var G__12396 = (i__12331_12389 + (1));
seq__12328_12386 = G__12393;
chunk__12329_12387 = G__12394;
count__12330_12388 = G__12395;
i__12331_12389 = G__12396;
continue;
} else {
var temp__5720__auto___12397 = cljs.core.seq.call(null,seq__12328_12386);
if(temp__5720__auto___12397){
var seq__12328_12398__$1 = temp__5720__auto___12397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12328_12398__$1)){
var c__4550__auto___12399 = cljs.core.chunk_first.call(null,seq__12328_12398__$1);
var G__12400 = cljs.core.chunk_rest.call(null,seq__12328_12398__$1);
var G__12401 = c__4550__auto___12399;
var G__12402 = cljs.core.count.call(null,c__4550__auto___12399);
var G__12403 = (0);
seq__12328_12386 = G__12400;
chunk__12329_12387 = G__12401;
count__12330_12388 = G__12402;
i__12331_12389 = G__12403;
continue;
} else {
var vec__12341_12404 = cljs.core.first.call(null,seq__12328_12398__$1);
var pno_12405 = cljs.core.nth.call(null,vec__12341_12404,(0),null);
var pmask_12406 = cljs.core.nth.call(null,vec__12341_12404,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12405,"$ = ",pmask_12406,";");


var G__12407 = cljs.core.next.call(null,seq__12328_12398__$1);
var G__12408 = null;
var G__12409 = (0);
var G__12410 = (0);
seq__12328_12386 = G__12407;
chunk__12329_12387 = G__12408;
count__12330_12388 = G__12409;
i__12331_12389 = G__12410;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__12411){
var map__12412 = p__12411;
var map__12412__$1 = (((((!((map__12412 == null))))?(((((map__12412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12412):map__12412);
var target = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12414){
var map__12415 = p__12414;
var map__12415__$1 = (((((!((map__12415 == null))))?(((((map__12415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12415):map__12415);
var op = cljs.core.get.call(null,map__12415__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__12415__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__12415__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__12415__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__12415__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11209__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11209__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__12421 = cljs.core.seq.call(null,table);
var chunk__12422 = null;
var count__12423 = (0);
var i__12424 = (0);
while(true){
if((i__12424 < count__12423)){
var vec__12431 = cljs.core._nth.call(null,chunk__12422,i__12424);
var sym = cljs.core.nth.call(null,vec__12431,(0),null);
var value = cljs.core.nth.call(null,vec__12431,(1),null);
var ns_12437 = cljs.core.namespace.call(null,sym);
var name_12438 = cljs.core.name.call(null,sym);
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


var G__12439 = seq__12421;
var G__12440 = chunk__12422;
var G__12441 = count__12423;
var G__12442 = (i__12424 + (1));
seq__12421 = G__12439;
chunk__12422 = G__12440;
count__12423 = G__12441;
i__12424 = G__12442;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12421);
if(temp__5720__auto__){
var seq__12421__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12421__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12421__$1);
var G__12443 = cljs.core.chunk_rest.call(null,seq__12421__$1);
var G__12444 = c__4550__auto__;
var G__12445 = cljs.core.count.call(null,c__4550__auto__);
var G__12446 = (0);
seq__12421 = G__12443;
chunk__12422 = G__12444;
count__12423 = G__12445;
i__12424 = G__12446;
continue;
} else {
var vec__12434 = cljs.core.first.call(null,seq__12421__$1);
var sym = cljs.core.nth.call(null,vec__12434,(0),null);
var value = cljs.core.nth.call(null,vec__12434,(1),null);
var ns_12447 = cljs.core.namespace.call(null,sym);
var name_12448 = cljs.core.name.call(null,sym);
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


var G__12449 = cljs.core.next.call(null,seq__12421__$1);
var G__12450 = null;
var G__12451 = (0);
var G__12452 = (0);
seq__12421 = G__12449;
chunk__12422 = G__12450;
count__12423 = G__12451;
i__12424 = G__12452;
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
var G__12454 = arguments.length;
switch (G__12454) {
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
var k_12459 = cljs.core.first.call(null,ks);
var vec__12455_12460 = cljs.core.conj.call(null,prefix,k_12459);
var top_12461 = cljs.core.nth.call(null,vec__12455_12460,(0),null);
var prefix_SINGLEQUOTE__12462 = vec__12455_12460;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_12459)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__12462) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_12461)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_12461)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12462)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_12461);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12462)),";");
}
} else {
}

var m_12463 = cljs.core.get.call(null,externs,k_12459);
if(cljs.core.empty_QMARK_.call(null,m_12463)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__12462,m_12463,top_level,known_externs);
}

var G__12464 = cljs.core.next.call(null,ks);
ks = G__12464;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
