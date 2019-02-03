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
var map__15112 = s;
var map__15112__$1 = (((((!((map__15112 == null))))?(((((map__15112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15112):map__15112);
var name = cljs.core.get.call(null,map__15112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15112__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15115 = info;
var map__15116 = G__15115;
var map__15116__$1 = (((((!((map__15116 == null))))?(((((map__15116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15116):map__15116);
var shadow = cljs.core.get.call(null,map__15116__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15115__$1 = G__15115;
while(true){
var d__$2 = d__$1;
var map__15120 = G__15115__$1;
var map__15120__$1 = (((((!((map__15120 == null))))?(((((map__15120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15120):map__15120);
var shadow__$1 = cljs.core.get.call(null,map__15120__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__15122 = (d__$2 + (1));
var G__15123 = shadow__$1;
d__$1 = G__15122;
G__15115__$1 = G__15123;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15124){
var map__15125 = p__15124;
var map__15125__$1 = (((((!((map__15125 == null))))?(((((map__15125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15125):map__15125);
var name_var = map__15125__$1;
var name = cljs.core.get.call(null,map__15125__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15125__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15127 = info;
var map__15127__$1 = (((((!((map__15127 == null))))?(((((map__15127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15127):map__15127);
var ns = cljs.core.get.call(null,map__15127__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__15127__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__15130 = arguments.length;
switch (G__15130) {
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
var G__15132 = cp;
switch (G__15132) {
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
var seq__15134_15138 = cljs.core.seq.call(null,s);
var chunk__15135_15139 = null;
var count__15136_15140 = (0);
var i__15137_15141 = (0);
while(true){
if((i__15137_15141 < count__15136_15140)){
var c_15142 = cljs.core._nth.call(null,chunk__15135_15139,i__15137_15141);
sb.append(cljs.compiler.escape_char.call(null,c_15142));


var G__15143 = seq__15134_15138;
var G__15144 = chunk__15135_15139;
var G__15145 = count__15136_15140;
var G__15146 = (i__15137_15141 + (1));
seq__15134_15138 = G__15143;
chunk__15135_15139 = G__15144;
count__15136_15140 = G__15145;
i__15137_15141 = G__15146;
continue;
} else {
var temp__5720__auto___15147 = cljs.core.seq.call(null,seq__15134_15138);
if(temp__5720__auto___15147){
var seq__15134_15148__$1 = temp__5720__auto___15147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15134_15148__$1)){
var c__4550__auto___15149 = cljs.core.chunk_first.call(null,seq__15134_15148__$1);
var G__15150 = cljs.core.chunk_rest.call(null,seq__15134_15148__$1);
var G__15151 = c__4550__auto___15149;
var G__15152 = cljs.core.count.call(null,c__4550__auto___15149);
var G__15153 = (0);
seq__15134_15138 = G__15150;
chunk__15135_15139 = G__15151;
count__15136_15140 = G__15152;
i__15137_15141 = G__15153;
continue;
} else {
var c_15154 = cljs.core.first.call(null,seq__15134_15148__$1);
sb.append(cljs.compiler.escape_char.call(null,c_15154));


var G__15155 = cljs.core.next.call(null,seq__15134_15148__$1);
var G__15156 = null;
var G__15157 = (0);
var G__15158 = (0);
seq__15134_15138 = G__15155;
chunk__15135_15139 = G__15156;
count__15136_15140 = G__15157;
i__15137_15141 = G__15158;
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
var map__15159_15164 = ast;
var map__15159_15165__$1 = (((((!((map__15159_15164 == null))))?(((((map__15159_15164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15159_15164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15159_15164):map__15159_15164);
var env_15166 = cljs.core.get.call(null,map__15159_15165__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15166))){
var map__15161_15167 = env_15166;
var map__15161_15168__$1 = (((((!((map__15161_15167 == null))))?(((((map__15161_15167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15161_15167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15161_15167):map__15161_15167);
var line_15169 = cljs.core.get.call(null,map__15161_15168__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15170 = cljs.core.get.call(null,map__15161_15168__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__15161_15167,map__15161_15168__$1,line_15169,column_15170,map__15159_15164,map__15159_15165__$1,env_15166){
return (function (m){
var minfo = (function (){var G__15163 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__15163,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15163;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15169 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__15161_15167,map__15161_15168__$1,line_15169,column_15170,map__15159_15164,map__15159_15165__$1,env_15166){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15170)?(column_15170 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__15161_15167,map__15161_15168__$1,line_15169,column_15170,map__15159_15164,map__15159_15165__$1,env_15166){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__15161_15167,map__15161_15168__$1,line_15169,column_15170,map__15159_15164,map__15159_15165__$1,env_15166))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__15161_15167,map__15161_15168__$1,line_15169,column_15170,map__15159_15164,map__15159_15165__$1,env_15166))
,cljs.core.sorted_map.call(null)));
});})(map__15161_15167,map__15161_15168__$1,line_15169,column_15170,map__15159_15164,map__15159_15165__$1,env_15166))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__15179 = arguments.length;
switch (G__15179) {
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
var len__4730__auto___15186 = arguments.length;
var i__4731__auto___15187 = (0);
while(true){
if((i__4731__auto___15187 < len__4730__auto___15186)){
args_arr__4751__auto__.push((arguments[i__4731__auto___15187]));

var G__15188 = (i__4731__auto___15187 + (1));
i__4731__auto___15187 = G__15188;
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
var s_15189 = (function (){var G__15180 = a;
if((!(typeof a === 'string'))){
return G__15180.toString();
} else {
return G__15180;
}
})();
var temp__5724__auto___15190 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___15190 == null)){
} else {
var sm_data_15191 = temp__5724__auto___15190;
cljs.core.swap_BANG_.call(null,sm_data_15191,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_15191,temp__5724__auto___15190,s_15189){
return (function (p1__15171_SHARP_){
return (p1__15171_SHARP_ + s_15189.length);
});})(sm_data_15191,temp__5724__auto___15190,s_15189))
);
}

cljs.core.print.call(null,s_15189);

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

var seq__15181 = cljs.core.seq.call(null,xs);
var chunk__15182 = null;
var count__15183 = (0);
var i__15184 = (0);
while(true){
if((i__15184 < count__15183)){
var x = cljs.core._nth.call(null,chunk__15182,i__15184);
cljs.compiler.emits.call(null,x);


var G__15192 = seq__15181;
var G__15193 = chunk__15182;
var G__15194 = count__15183;
var G__15195 = (i__15184 + (1));
seq__15181 = G__15192;
chunk__15182 = G__15193;
count__15183 = G__15194;
i__15184 = G__15195;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15181);
if(temp__5720__auto__){
var seq__15181__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15181__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15181__$1);
var G__15196 = cljs.core.chunk_rest.call(null,seq__15181__$1);
var G__15197 = c__4550__auto__;
var G__15198 = cljs.core.count.call(null,c__4550__auto__);
var G__15199 = (0);
seq__15181 = G__15196;
chunk__15182 = G__15197;
count__15183 = G__15198;
i__15184 = G__15199;
continue;
} else {
var x = cljs.core.first.call(null,seq__15181__$1);
cljs.compiler.emits.call(null,x);


var G__15200 = cljs.core.next.call(null,seq__15181__$1);
var G__15201 = null;
var G__15202 = (0);
var G__15203 = (0);
seq__15181 = G__15200;
chunk__15182 = G__15201;
count__15183 = G__15202;
i__15184 = G__15203;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq15173){
var G__15174 = cljs.core.first.call(null,seq15173);
var seq15173__$1 = cljs.core.next.call(null,seq15173);
var G__15175 = cljs.core.first.call(null,seq15173__$1);
var seq15173__$2 = cljs.core.next.call(null,seq15173__$1);
var G__15176 = cljs.core.first.call(null,seq15173__$2);
var seq15173__$3 = cljs.core.next.call(null,seq15173__$2);
var G__15177 = cljs.core.first.call(null,seq15173__$3);
var seq15173__$4 = cljs.core.next.call(null,seq15173__$3);
var G__15178 = cljs.core.first.call(null,seq15173__$4);
var seq15173__$5 = cljs.core.next.call(null,seq15173__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15174,G__15175,G__15176,G__15177,G__15178,seq15173__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15204){
var map__15205 = p__15204;
var map__15205__$1 = (((((!((map__15205 == null))))?(((((map__15205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15205):map__15205);
var m = map__15205__$1;
var gen_line = cljs.core.get.call(null,map__15205__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15214 = arguments.length;
switch (G__15214) {
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
var len__4730__auto___15220 = arguments.length;
var i__4731__auto___15221 = (0);
while(true){
if((i__4731__auto___15221 < len__4730__auto___15220)){
args_arr__4751__auto__.push((arguments[i__4731__auto___15221]));

var G__15222 = (i__4731__auto___15221 + (1));
i__4731__auto___15221 = G__15222;
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

var seq__15215_15223 = cljs.core.seq.call(null,xs);
var chunk__15216_15224 = null;
var count__15217_15225 = (0);
var i__15218_15226 = (0);
while(true){
if((i__15218_15226 < count__15217_15225)){
var x_15227 = cljs.core._nth.call(null,chunk__15216_15224,i__15218_15226);
cljs.compiler.emits.call(null,x_15227);


var G__15228 = seq__15215_15223;
var G__15229 = chunk__15216_15224;
var G__15230 = count__15217_15225;
var G__15231 = (i__15218_15226 + (1));
seq__15215_15223 = G__15228;
chunk__15216_15224 = G__15229;
count__15217_15225 = G__15230;
i__15218_15226 = G__15231;
continue;
} else {
var temp__5720__auto___15232 = cljs.core.seq.call(null,seq__15215_15223);
if(temp__5720__auto___15232){
var seq__15215_15233__$1 = temp__5720__auto___15232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15215_15233__$1)){
var c__4550__auto___15234 = cljs.core.chunk_first.call(null,seq__15215_15233__$1);
var G__15235 = cljs.core.chunk_rest.call(null,seq__15215_15233__$1);
var G__15236 = c__4550__auto___15234;
var G__15237 = cljs.core.count.call(null,c__4550__auto___15234);
var G__15238 = (0);
seq__15215_15223 = G__15235;
chunk__15216_15224 = G__15236;
count__15217_15225 = G__15237;
i__15218_15226 = G__15238;
continue;
} else {
var x_15239 = cljs.core.first.call(null,seq__15215_15233__$1);
cljs.compiler.emits.call(null,x_15239);


var G__15240 = cljs.core.next.call(null,seq__15215_15233__$1);
var G__15241 = null;
var G__15242 = (0);
var G__15243 = (0);
seq__15215_15223 = G__15240;
chunk__15216_15224 = G__15241;
count__15217_15225 = G__15242;
i__15218_15226 = G__15243;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15208){
var G__15209 = cljs.core.first.call(null,seq15208);
var seq15208__$1 = cljs.core.next.call(null,seq15208);
var G__15210 = cljs.core.first.call(null,seq15208__$1);
var seq15208__$2 = cljs.core.next.call(null,seq15208__$1);
var G__15211 = cljs.core.first.call(null,seq15208__$2);
var seq15208__$3 = cljs.core.next.call(null,seq15208__$2);
var G__15212 = cljs.core.first.call(null,seq15208__$3);
var seq15208__$4 = cljs.core.next.call(null,seq15208__$3);
var G__15213 = cljs.core.first.call(null,seq15208__$4);
var seq15208__$5 = cljs.core.next.call(null,seq15208__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15209,G__15210,G__15211,G__15212,G__15213,seq15208__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15244_15248 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15245_15249 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15246_15250 = true;
var _STAR_print_fn_STAR__temp_val__15247_15251 = ((function (_STAR_print_newline_STAR__orig_val__15244_15248,_STAR_print_fn_STAR__orig_val__15245_15249,_STAR_print_newline_STAR__temp_val__15246_15250,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15244_15248,_STAR_print_fn_STAR__orig_val__15245_15249,_STAR_print_newline_STAR__temp_val__15246_15250,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15246_15250;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15247_15251;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15245_15249;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15244_15248;
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
var vec__15252 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__15252,(0),null);
var name = cljs.core.nth.call(null,vec__15252,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__15252,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__15252,ns,name))
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
var vec__15255 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__15255,(0),null);
var flags = cljs.core.nth.call(null,vec__15255,(1),null);
var pattern = cljs.core.nth.call(null,vec__15255,(2),null);
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
return (function (p1__15258_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__15258_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__15260){
var map__15261 = p__15260;
var map__15261__$1 = (((((!((map__15261 == null))))?(((((map__15261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15261):map__15261);
var ast = map__15261__$1;
var info = cljs.core.get.call(null,map__15261__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15261__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15263 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15263__$1 = (((((!((map__15263 == null))))?(((((map__15263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15263):map__15263);
var cenv = map__15263__$1;
var options = cljs.core.get.call(null,map__15263__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__15265 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__15265,cljs.analyzer.es5_allowed);
} else {
return G__15265;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__15266 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__15266,reserved);
} else {
return G__15266;
}
})();
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__15267_15268 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15267_15269__$1 = (((G__15267_15268 instanceof cljs.core.Keyword))?G__15267_15268.fqn:null);
switch (G__15267_15269__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15271){
var map__15272 = p__15271;
var map__15272__$1 = (((((!((map__15272 == null))))?(((((map__15272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15272):map__15272);
var arg = map__15272__$1;
var env = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15274 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15274__$1 = (((((!((map__15274 == null))))?(((((map__15274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15274):map__15274);
var name = cljs.core.get.call(null,map__15274__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15276){
var map__15277 = p__15276;
var map__15277__$1 = (((((!((map__15277 == null))))?(((((map__15277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15277):map__15277);
var expr = cljs.core.get.call(null,map__15277__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15277__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15277__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__15279_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15279_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15280){
var map__15281 = p__15280;
var map__15281__$1 = (((((!((map__15281 == null))))?(((((map__15281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15281):map__15281);
var env = cljs.core.get.call(null,map__15281__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15281__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15281__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15283){
var map__15284 = p__15283;
var map__15284__$1 = (((((!((map__15284 == null))))?(((((map__15284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15284):map__15284);
var items = cljs.core.get.call(null,map__15284__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15284__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__15286_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15286_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15287){
var map__15288 = p__15287;
var map__15288__$1 = (((((!((map__15288 == null))))?(((((map__15288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15288):map__15288);
var items = cljs.core.get.call(null,map__15288__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15288__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___15312 = cljs.core.seq.call(null,items);
if(temp__5720__auto___15312){
var items_15313__$1 = temp__5720__auto___15312;
var vec__15290_15314 = items_15313__$1;
var seq__15291_15315 = cljs.core.seq.call(null,vec__15290_15314);
var first__15292_15316 = cljs.core.first.call(null,seq__15291_15315);
var seq__15291_15317__$1 = cljs.core.next.call(null,seq__15291_15315);
var vec__15293_15318 = first__15292_15316;
var k_15319 = cljs.core.nth.call(null,vec__15293_15318,(0),null);
var v_15320 = cljs.core.nth.call(null,vec__15293_15318,(1),null);
var r_15321 = seq__15291_15317__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15319),"\": ",emit_js_object_val.call(null,v_15320));

var seq__15296_15322 = cljs.core.seq.call(null,r_15321);
var chunk__15297_15323 = null;
var count__15298_15324 = (0);
var i__15299_15325 = (0);
while(true){
if((i__15299_15325 < count__15298_15324)){
var vec__15306_15326 = cljs.core._nth.call(null,chunk__15297_15323,i__15299_15325);
var k_15327__$1 = cljs.core.nth.call(null,vec__15306_15326,(0),null);
var v_15328__$1 = cljs.core.nth.call(null,vec__15306_15326,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15327__$1),"\": ",emit_js_object_val.call(null,v_15328__$1));


var G__15329 = seq__15296_15322;
var G__15330 = chunk__15297_15323;
var G__15331 = count__15298_15324;
var G__15332 = (i__15299_15325 + (1));
seq__15296_15322 = G__15329;
chunk__15297_15323 = G__15330;
count__15298_15324 = G__15331;
i__15299_15325 = G__15332;
continue;
} else {
var temp__5720__auto___15333__$1 = cljs.core.seq.call(null,seq__15296_15322);
if(temp__5720__auto___15333__$1){
var seq__15296_15334__$1 = temp__5720__auto___15333__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15296_15334__$1)){
var c__4550__auto___15335 = cljs.core.chunk_first.call(null,seq__15296_15334__$1);
var G__15336 = cljs.core.chunk_rest.call(null,seq__15296_15334__$1);
var G__15337 = c__4550__auto___15335;
var G__15338 = cljs.core.count.call(null,c__4550__auto___15335);
var G__15339 = (0);
seq__15296_15322 = G__15336;
chunk__15297_15323 = G__15337;
count__15298_15324 = G__15338;
i__15299_15325 = G__15339;
continue;
} else {
var vec__15309_15340 = cljs.core.first.call(null,seq__15296_15334__$1);
var k_15341__$1 = cljs.core.nth.call(null,vec__15309_15340,(0),null);
var v_15342__$1 = cljs.core.nth.call(null,vec__15309_15340,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15341__$1),"\": ",emit_js_object_val.call(null,v_15342__$1));


var G__15343 = cljs.core.next.call(null,seq__15296_15334__$1);
var G__15344 = null;
var G__15345 = (0);
var G__15346 = (0);
seq__15296_15322 = G__15343;
chunk__15297_15323 = G__15344;
count__15298_15324 = G__15345;
i__15299_15325 = G__15346;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__15347){
var map__15348 = p__15347;
var map__15348__$1 = (((((!((map__15348 == null))))?(((((map__15348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15348):map__15348);
var keys = cljs.core.get.call(null,map__15348__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15348__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__15348__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__15350){
var map__15351 = p__15350;
var map__15351__$1 = (((((!((map__15351 == null))))?(((((map__15351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15351):map__15351);
var items = cljs.core.get.call(null,map__15351__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__15353){
var map__15354 = p__15353;
var map__15354__$1 = (((((!((map__15354 == null))))?(((((map__15354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15354):map__15354);
var expr = cljs.core.get.call(null,map__15354__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__15356){
var map__15357 = p__15356;
var map__15357__$1 = (((((!((map__15357 == null))))?(((((map__15357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15357):map__15357);
var form = cljs.core.get.call(null,map__15357__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15357__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__15359 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15359__$1 = (((((!((map__15359 == null))))?(((((map__15359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15359):map__15359);
var op = cljs.core.get.call(null,map__15359__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15359__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15359__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__15361 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15361__$1 = (((((!((map__15361 == null))))?(((((map__15361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15361):map__15361);
var op = cljs.core.get.call(null,map__15361__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15361__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15361__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15363){
var map__15364 = p__15363;
var map__15364__$1 = (((((!((map__15364 == null))))?(((((map__15364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15364):map__15364);
var test = cljs.core.get.call(null,map__15364__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15364__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15364__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15364__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__15366){
var map__15367 = p__15366;
var map__15367__$1 = (((((!((map__15367 == null))))?(((((map__15367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15367):map__15367);
var v = cljs.core.get.call(null,map__15367__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__15367__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__15367__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__15369_15405 = cljs.core.seq.call(null,nodes);
var chunk__15370_15406 = null;
var count__15371_15407 = (0);
var i__15372_15408 = (0);
while(true){
if((i__15372_15408 < count__15371_15407)){
var map__15389_15409 = cljs.core._nth.call(null,chunk__15370_15406,i__15372_15408);
var map__15389_15410__$1 = (((((!((map__15389_15409 == null))))?(((((map__15389_15409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15389_15409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15389_15409):map__15389_15409);
var ts_15411 = cljs.core.get.call(null,map__15389_15410__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15390_15412 = cljs.core.get.call(null,map__15389_15410__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15390_15413__$1 = (((((!((map__15390_15412 == null))))?(((((map__15390_15412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15390_15412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15390_15412):map__15390_15412);
var then_15414 = cljs.core.get.call(null,map__15390_15413__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15393_15415 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15411));
var chunk__15394_15416 = null;
var count__15395_15417 = (0);
var i__15396_15418 = (0);
while(true){
if((i__15396_15418 < count__15395_15417)){
var test_15419 = cljs.core._nth.call(null,chunk__15394_15416,i__15396_15418);
cljs.compiler.emitln.call(null,"case ",test_15419,":");


var G__15420 = seq__15393_15415;
var G__15421 = chunk__15394_15416;
var G__15422 = count__15395_15417;
var G__15423 = (i__15396_15418 + (1));
seq__15393_15415 = G__15420;
chunk__15394_15416 = G__15421;
count__15395_15417 = G__15422;
i__15396_15418 = G__15423;
continue;
} else {
var temp__5720__auto___15424 = cljs.core.seq.call(null,seq__15393_15415);
if(temp__5720__auto___15424){
var seq__15393_15425__$1 = temp__5720__auto___15424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15393_15425__$1)){
var c__4550__auto___15426 = cljs.core.chunk_first.call(null,seq__15393_15425__$1);
var G__15427 = cljs.core.chunk_rest.call(null,seq__15393_15425__$1);
var G__15428 = c__4550__auto___15426;
var G__15429 = cljs.core.count.call(null,c__4550__auto___15426);
var G__15430 = (0);
seq__15393_15415 = G__15427;
chunk__15394_15416 = G__15428;
count__15395_15417 = G__15429;
i__15396_15418 = G__15430;
continue;
} else {
var test_15431 = cljs.core.first.call(null,seq__15393_15425__$1);
cljs.compiler.emitln.call(null,"case ",test_15431,":");


var G__15432 = cljs.core.next.call(null,seq__15393_15425__$1);
var G__15433 = null;
var G__15434 = (0);
var G__15435 = (0);
seq__15393_15415 = G__15432;
chunk__15394_15416 = G__15433;
count__15395_15417 = G__15434;
i__15396_15418 = G__15435;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15414);
} else {
cljs.compiler.emitln.call(null,then_15414);
}

cljs.compiler.emitln.call(null,"break;");


var G__15436 = seq__15369_15405;
var G__15437 = chunk__15370_15406;
var G__15438 = count__15371_15407;
var G__15439 = (i__15372_15408 + (1));
seq__15369_15405 = G__15436;
chunk__15370_15406 = G__15437;
count__15371_15407 = G__15438;
i__15372_15408 = G__15439;
continue;
} else {
var temp__5720__auto___15440 = cljs.core.seq.call(null,seq__15369_15405);
if(temp__5720__auto___15440){
var seq__15369_15441__$1 = temp__5720__auto___15440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15369_15441__$1)){
var c__4550__auto___15442 = cljs.core.chunk_first.call(null,seq__15369_15441__$1);
var G__15443 = cljs.core.chunk_rest.call(null,seq__15369_15441__$1);
var G__15444 = c__4550__auto___15442;
var G__15445 = cljs.core.count.call(null,c__4550__auto___15442);
var G__15446 = (0);
seq__15369_15405 = G__15443;
chunk__15370_15406 = G__15444;
count__15371_15407 = G__15445;
i__15372_15408 = G__15446;
continue;
} else {
var map__15397_15447 = cljs.core.first.call(null,seq__15369_15441__$1);
var map__15397_15448__$1 = (((((!((map__15397_15447 == null))))?(((((map__15397_15447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15397_15447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15397_15447):map__15397_15447);
var ts_15449 = cljs.core.get.call(null,map__15397_15448__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15398_15450 = cljs.core.get.call(null,map__15397_15448__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15398_15451__$1 = (((((!((map__15398_15450 == null))))?(((((map__15398_15450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15398_15450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15398_15450):map__15398_15450);
var then_15452 = cljs.core.get.call(null,map__15398_15451__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15401_15453 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15449));
var chunk__15402_15454 = null;
var count__15403_15455 = (0);
var i__15404_15456 = (0);
while(true){
if((i__15404_15456 < count__15403_15455)){
var test_15457 = cljs.core._nth.call(null,chunk__15402_15454,i__15404_15456);
cljs.compiler.emitln.call(null,"case ",test_15457,":");


var G__15458 = seq__15401_15453;
var G__15459 = chunk__15402_15454;
var G__15460 = count__15403_15455;
var G__15461 = (i__15404_15456 + (1));
seq__15401_15453 = G__15458;
chunk__15402_15454 = G__15459;
count__15403_15455 = G__15460;
i__15404_15456 = G__15461;
continue;
} else {
var temp__5720__auto___15462__$1 = cljs.core.seq.call(null,seq__15401_15453);
if(temp__5720__auto___15462__$1){
var seq__15401_15463__$1 = temp__5720__auto___15462__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15401_15463__$1)){
var c__4550__auto___15464 = cljs.core.chunk_first.call(null,seq__15401_15463__$1);
var G__15465 = cljs.core.chunk_rest.call(null,seq__15401_15463__$1);
var G__15466 = c__4550__auto___15464;
var G__15467 = cljs.core.count.call(null,c__4550__auto___15464);
var G__15468 = (0);
seq__15401_15453 = G__15465;
chunk__15402_15454 = G__15466;
count__15403_15455 = G__15467;
i__15404_15456 = G__15468;
continue;
} else {
var test_15469 = cljs.core.first.call(null,seq__15401_15463__$1);
cljs.compiler.emitln.call(null,"case ",test_15469,":");


var G__15470 = cljs.core.next.call(null,seq__15401_15463__$1);
var G__15471 = null;
var G__15472 = (0);
var G__15473 = (0);
seq__15401_15453 = G__15470;
chunk__15402_15454 = G__15471;
count__15403_15455 = G__15472;
i__15404_15456 = G__15473;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15452);
} else {
cljs.compiler.emitln.call(null,then_15452);
}

cljs.compiler.emitln.call(null,"break;");


var G__15474 = cljs.core.next.call(null,seq__15369_15441__$1);
var G__15475 = null;
var G__15476 = (0);
var G__15477 = (0);
seq__15369_15405 = G__15474;
chunk__15370_15406 = G__15475;
count__15371_15407 = G__15476;
i__15372_15408 = G__15477;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15478){
var map__15479 = p__15478;
var map__15479__$1 = (((((!((map__15479 == null))))?(((((map__15479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15479):map__15479);
var throw$ = cljs.core.get.call(null,map__15479__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__15479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__15482 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15482,(0),null);
var rstr = cljs.core.nth.call(null,vec__15482,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__15482,fstr,rstr,ret_t,axstr){
return (function (p1__15481_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15481_SHARP_);
});})(idx,vec__15482,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15485 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__15485,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__15485;
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
return (function (p1__15486_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15486_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15487 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15488 = cljs.core.seq.call(null,vec__15487);
var first__15489 = cljs.core.first.call(null,seq__15488);
var seq__15488__$1 = cljs.core.next.call(null,seq__15488);
var p = first__15489;
var first__15489__$1 = cljs.core.first.call(null,seq__15488__$1);
var seq__15488__$2 = cljs.core.next.call(null,seq__15488__$1);
var ts = first__15489__$1;
var first__15489__$2 = cljs.core.first.call(null,seq__15488__$2);
var seq__15488__$3 = cljs.core.next.call(null,seq__15488__$2);
var n = first__15489__$2;
var xs = seq__15488__$3;
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
var vec__15490 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15491 = cljs.core.seq.call(null,vec__15490);
var first__15492 = cljs.core.first.call(null,seq__15491);
var seq__15491__$1 = cljs.core.next.call(null,seq__15491);
var p = first__15492;
var first__15492__$1 = cljs.core.first.call(null,seq__15491__$1);
var seq__15491__$2 = cljs.core.next.call(null,seq__15491__$1);
var ts = first__15492__$1;
var xs = seq__15491__$2;
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
var G__15495 = arguments.length;
switch (G__15495) {
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
var vec__15503 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__15493_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15493_SHARP_);
} else {
return p1__15493_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__15504 = cljs.core.seq.call(null,vec__15503);
var first__15505 = cljs.core.first.call(null,seq__15504);
var seq__15504__$1 = cljs.core.next.call(null,seq__15504);
var x = first__15505;
var ys = seq__15504__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15506 = cljs.core.seq.call(null,ys);
var chunk__15507 = null;
var count__15508 = (0);
var i__15509 = (0);
while(true){
if((i__15509 < count__15508)){
var next_line = cljs.core._nth.call(null,chunk__15507,i__15509);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15515 = seq__15506;
var G__15516 = chunk__15507;
var G__15517 = count__15508;
var G__15518 = (i__15509 + (1));
seq__15506 = G__15515;
chunk__15507 = G__15516;
count__15508 = G__15517;
i__15509 = G__15518;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15506);
if(temp__5720__auto__){
var seq__15506__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15506__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15506__$1);
var G__15519 = cljs.core.chunk_rest.call(null,seq__15506__$1);
var G__15520 = c__4550__auto__;
var G__15521 = cljs.core.count.call(null,c__4550__auto__);
var G__15522 = (0);
seq__15506 = G__15519;
chunk__15507 = G__15520;
count__15508 = G__15521;
i__15509 = G__15522;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15506__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15523 = cljs.core.next.call(null,seq__15506__$1);
var G__15524 = null;
var G__15525 = (0);
var G__15526 = (0);
seq__15506 = G__15523;
chunk__15507 = G__15524;
count__15508 = G__15525;
i__15509 = G__15526;
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

var seq__15510_15527 = cljs.core.seq.call(null,docs__$2);
var chunk__15511_15528 = null;
var count__15512_15529 = (0);
var i__15513_15530 = (0);
while(true){
if((i__15513_15530 < count__15512_15529)){
var e_15531 = cljs.core._nth.call(null,chunk__15511_15528,i__15513_15530);
if(cljs.core.truth_(e_15531)){
print_comment_lines.call(null,e_15531);
} else {
}


var G__15532 = seq__15510_15527;
var G__15533 = chunk__15511_15528;
var G__15534 = count__15512_15529;
var G__15535 = (i__15513_15530 + (1));
seq__15510_15527 = G__15532;
chunk__15511_15528 = G__15533;
count__15512_15529 = G__15534;
i__15513_15530 = G__15535;
continue;
} else {
var temp__5720__auto___15536 = cljs.core.seq.call(null,seq__15510_15527);
if(temp__5720__auto___15536){
var seq__15510_15537__$1 = temp__5720__auto___15536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15510_15537__$1)){
var c__4550__auto___15538 = cljs.core.chunk_first.call(null,seq__15510_15537__$1);
var G__15539 = cljs.core.chunk_rest.call(null,seq__15510_15537__$1);
var G__15540 = c__4550__auto___15538;
var G__15541 = cljs.core.count.call(null,c__4550__auto___15538);
var G__15542 = (0);
seq__15510_15527 = G__15539;
chunk__15511_15528 = G__15540;
count__15512_15529 = G__15541;
i__15513_15530 = G__15542;
continue;
} else {
var e_15543 = cljs.core.first.call(null,seq__15510_15537__$1);
if(cljs.core.truth_(e_15543)){
print_comment_lines.call(null,e_15543);
} else {
}


var G__15544 = cljs.core.next.call(null,seq__15510_15537__$1);
var G__15545 = null;
var G__15546 = (0);
var G__15547 = (0);
seq__15510_15527 = G__15544;
chunk__15511_15528 = G__15545;
count__15512_15529 = G__15546;
i__15513_15530 = G__15547;
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
return (function (p1__15549_SHARP_){
return goog.string.startsWith(p1__15549_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15550){
var map__15551 = p__15550;
var map__15551__$1 = (((((!((map__15551 == null))))?(((((map__15551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15551):map__15551);
var doc = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15553){
var map__15554 = p__15553;
var map__15554__$1 = (((((!((map__15554 == null))))?(((((map__15554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15554):map__15554);
var name = cljs.core.get.call(null,map__15554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15554__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15554__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15556_15580 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15557_15581 = null;
var count__15558_15582 = (0);
var i__15559_15583 = (0);
while(true){
if((i__15559_15583 < count__15558_15582)){
var vec__15566_15584 = cljs.core._nth.call(null,chunk__15557_15581,i__15559_15583);
var i_15585 = cljs.core.nth.call(null,vec__15566_15584,(0),null);
var param_15586 = cljs.core.nth.call(null,vec__15566_15584,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15586);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15587 = seq__15556_15580;
var G__15588 = chunk__15557_15581;
var G__15589 = count__15558_15582;
var G__15590 = (i__15559_15583 + (1));
seq__15556_15580 = G__15587;
chunk__15557_15581 = G__15588;
count__15558_15582 = G__15589;
i__15559_15583 = G__15590;
continue;
} else {
var temp__5720__auto___15591 = cljs.core.seq.call(null,seq__15556_15580);
if(temp__5720__auto___15591){
var seq__15556_15592__$1 = temp__5720__auto___15591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15556_15592__$1)){
var c__4550__auto___15593 = cljs.core.chunk_first.call(null,seq__15556_15592__$1);
var G__15594 = cljs.core.chunk_rest.call(null,seq__15556_15592__$1);
var G__15595 = c__4550__auto___15593;
var G__15596 = cljs.core.count.call(null,c__4550__auto___15593);
var G__15597 = (0);
seq__15556_15580 = G__15594;
chunk__15557_15581 = G__15595;
count__15558_15582 = G__15596;
i__15559_15583 = G__15597;
continue;
} else {
var vec__15569_15598 = cljs.core.first.call(null,seq__15556_15592__$1);
var i_15599 = cljs.core.nth.call(null,vec__15569_15598,(0),null);
var param_15600 = cljs.core.nth.call(null,vec__15569_15598,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15600);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15601 = cljs.core.next.call(null,seq__15556_15592__$1);
var G__15602 = null;
var G__15603 = (0);
var G__15604 = (0);
seq__15556_15580 = G__15601;
chunk__15557_15581 = G__15602;
count__15558_15582 = G__15603;
i__15559_15583 = G__15604;
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

var seq__15572_15605 = cljs.core.seq.call(null,params);
var chunk__15573_15606 = null;
var count__15574_15607 = (0);
var i__15575_15608 = (0);
while(true){
if((i__15575_15608 < count__15574_15607)){
var param_15609 = cljs.core._nth.call(null,chunk__15573_15606,i__15575_15608);
cljs.compiler.emit.call(null,param_15609);

if(cljs.core._EQ_.call(null,param_15609,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15610 = seq__15572_15605;
var G__15611 = chunk__15573_15606;
var G__15612 = count__15574_15607;
var G__15613 = (i__15575_15608 + (1));
seq__15572_15605 = G__15610;
chunk__15573_15606 = G__15611;
count__15574_15607 = G__15612;
i__15575_15608 = G__15613;
continue;
} else {
var temp__5720__auto___15614 = cljs.core.seq.call(null,seq__15572_15605);
if(temp__5720__auto___15614){
var seq__15572_15615__$1 = temp__5720__auto___15614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15572_15615__$1)){
var c__4550__auto___15616 = cljs.core.chunk_first.call(null,seq__15572_15615__$1);
var G__15617 = cljs.core.chunk_rest.call(null,seq__15572_15615__$1);
var G__15618 = c__4550__auto___15616;
var G__15619 = cljs.core.count.call(null,c__4550__auto___15616);
var G__15620 = (0);
seq__15572_15605 = G__15617;
chunk__15573_15606 = G__15618;
count__15574_15607 = G__15619;
i__15575_15608 = G__15620;
continue;
} else {
var param_15621 = cljs.core.first.call(null,seq__15572_15615__$1);
cljs.compiler.emit.call(null,param_15621);

if(cljs.core._EQ_.call(null,param_15621,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15622 = cljs.core.next.call(null,seq__15572_15615__$1);
var G__15623 = null;
var G__15624 = (0);
var G__15625 = (0);
seq__15572_15605 = G__15622;
chunk__15573_15606 = G__15623;
count__15574_15607 = G__15624;
i__15575_15608 = G__15625;
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

var seq__15576_15626 = cljs.core.seq.call(null,params);
var chunk__15577_15627 = null;
var count__15578_15628 = (0);
var i__15579_15629 = (0);
while(true){
if((i__15579_15629 < count__15578_15628)){
var param_15630 = cljs.core._nth.call(null,chunk__15577_15627,i__15579_15629);
cljs.compiler.emit.call(null,param_15630);

if(cljs.core._EQ_.call(null,param_15630,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15631 = seq__15576_15626;
var G__15632 = chunk__15577_15627;
var G__15633 = count__15578_15628;
var G__15634 = (i__15579_15629 + (1));
seq__15576_15626 = G__15631;
chunk__15577_15627 = G__15632;
count__15578_15628 = G__15633;
i__15579_15629 = G__15634;
continue;
} else {
var temp__5720__auto___15635 = cljs.core.seq.call(null,seq__15576_15626);
if(temp__5720__auto___15635){
var seq__15576_15636__$1 = temp__5720__auto___15635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15576_15636__$1)){
var c__4550__auto___15637 = cljs.core.chunk_first.call(null,seq__15576_15636__$1);
var G__15638 = cljs.core.chunk_rest.call(null,seq__15576_15636__$1);
var G__15639 = c__4550__auto___15637;
var G__15640 = cljs.core.count.call(null,c__4550__auto___15637);
var G__15641 = (0);
seq__15576_15626 = G__15638;
chunk__15577_15627 = G__15639;
count__15578_15628 = G__15640;
i__15579_15629 = G__15641;
continue;
} else {
var param_15642 = cljs.core.first.call(null,seq__15576_15636__$1);
cljs.compiler.emit.call(null,param_15642);

if(cljs.core._EQ_.call(null,param_15642,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15643 = cljs.core.next.call(null,seq__15576_15636__$1);
var G__15644 = null;
var G__15645 = (0);
var G__15646 = (0);
seq__15576_15626 = G__15643;
chunk__15577_15627 = G__15644;
count__15578_15628 = G__15645;
i__15579_15629 = G__15646;
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
var seq__15647 = cljs.core.seq.call(null,params);
var chunk__15648 = null;
var count__15649 = (0);
var i__15650 = (0);
while(true){
if((i__15650 < count__15649)){
var param = cljs.core._nth.call(null,chunk__15648,i__15650);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15651 = seq__15647;
var G__15652 = chunk__15648;
var G__15653 = count__15649;
var G__15654 = (i__15650 + (1));
seq__15647 = G__15651;
chunk__15648 = G__15652;
count__15649 = G__15653;
i__15650 = G__15654;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15647);
if(temp__5720__auto__){
var seq__15647__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15647__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15647__$1);
var G__15655 = cljs.core.chunk_rest.call(null,seq__15647__$1);
var G__15656 = c__4550__auto__;
var G__15657 = cljs.core.count.call(null,c__4550__auto__);
var G__15658 = (0);
seq__15647 = G__15655;
chunk__15648 = G__15656;
count__15649 = G__15657;
i__15650 = G__15658;
continue;
} else {
var param = cljs.core.first.call(null,seq__15647__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15659 = cljs.core.next.call(null,seq__15647__$1);
var G__15660 = null;
var G__15661 = (0);
var G__15662 = (0);
seq__15647 = G__15659;
chunk__15648 = G__15660;
count__15649 = G__15661;
i__15650 = G__15662;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15663){
var map__15664 = p__15663;
var map__15664__$1 = (((((!((map__15664 == null))))?(((((map__15664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15664):map__15664);
var expr = cljs.core.get.call(null,map__15664__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__15664__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15664__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15664__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15664__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15666){
var map__15667 = p__15666;
var map__15667__$1 = (((((!((map__15667 == null))))?(((((map__15667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15667):map__15667);
var f = map__15667__$1;
var expr = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_15677__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15678 = cljs.compiler.munge.call(null,name_15677__$1);
var delegate_name_15679 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15678),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_15679," = function (");

var seq__15669_15680 = cljs.core.seq.call(null,params);
var chunk__15670_15681 = null;
var count__15671_15682 = (0);
var i__15672_15683 = (0);
while(true){
if((i__15672_15683 < count__15671_15682)){
var param_15684 = cljs.core._nth.call(null,chunk__15670_15681,i__15672_15683);
cljs.compiler.emit.call(null,param_15684);

if(cljs.core._EQ_.call(null,param_15684,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15685 = seq__15669_15680;
var G__15686 = chunk__15670_15681;
var G__15687 = count__15671_15682;
var G__15688 = (i__15672_15683 + (1));
seq__15669_15680 = G__15685;
chunk__15670_15681 = G__15686;
count__15671_15682 = G__15687;
i__15672_15683 = G__15688;
continue;
} else {
var temp__5720__auto___15689 = cljs.core.seq.call(null,seq__15669_15680);
if(temp__5720__auto___15689){
var seq__15669_15690__$1 = temp__5720__auto___15689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15669_15690__$1)){
var c__4550__auto___15691 = cljs.core.chunk_first.call(null,seq__15669_15690__$1);
var G__15692 = cljs.core.chunk_rest.call(null,seq__15669_15690__$1);
var G__15693 = c__4550__auto___15691;
var G__15694 = cljs.core.count.call(null,c__4550__auto___15691);
var G__15695 = (0);
seq__15669_15680 = G__15692;
chunk__15670_15681 = G__15693;
count__15671_15682 = G__15694;
i__15672_15683 = G__15695;
continue;
} else {
var param_15696 = cljs.core.first.call(null,seq__15669_15690__$1);
cljs.compiler.emit.call(null,param_15696);

if(cljs.core._EQ_.call(null,param_15696,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15697 = cljs.core.next.call(null,seq__15669_15690__$1);
var G__15698 = null;
var G__15699 = (0);
var G__15700 = (0);
seq__15669_15680 = G__15697;
chunk__15670_15681 = G__15698;
count__15671_15682 = G__15699;
i__15672_15683 = G__15700;
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

cljs.compiler.emitln.call(null,"var ",mname_15678," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_15701 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_15701,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_15679,".call(this,");

var seq__15673_15702 = cljs.core.seq.call(null,params);
var chunk__15674_15703 = null;
var count__15675_15704 = (0);
var i__15676_15705 = (0);
while(true){
if((i__15676_15705 < count__15675_15704)){
var param_15706 = cljs.core._nth.call(null,chunk__15674_15703,i__15676_15705);
cljs.compiler.emit.call(null,param_15706);

if(cljs.core._EQ_.call(null,param_15706,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15707 = seq__15673_15702;
var G__15708 = chunk__15674_15703;
var G__15709 = count__15675_15704;
var G__15710 = (i__15676_15705 + (1));
seq__15673_15702 = G__15707;
chunk__15674_15703 = G__15708;
count__15675_15704 = G__15709;
i__15676_15705 = G__15710;
continue;
} else {
var temp__5720__auto___15711 = cljs.core.seq.call(null,seq__15673_15702);
if(temp__5720__auto___15711){
var seq__15673_15712__$1 = temp__5720__auto___15711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15673_15712__$1)){
var c__4550__auto___15713 = cljs.core.chunk_first.call(null,seq__15673_15712__$1);
var G__15714 = cljs.core.chunk_rest.call(null,seq__15673_15712__$1);
var G__15715 = c__4550__auto___15713;
var G__15716 = cljs.core.count.call(null,c__4550__auto___15713);
var G__15717 = (0);
seq__15673_15702 = G__15714;
chunk__15674_15703 = G__15715;
count__15675_15704 = G__15716;
i__15676_15705 = G__15717;
continue;
} else {
var param_15718 = cljs.core.first.call(null,seq__15673_15712__$1);
cljs.compiler.emit.call(null,param_15718);

if(cljs.core._EQ_.call(null,param_15718,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15719 = cljs.core.next.call(null,seq__15673_15712__$1);
var G__15720 = null;
var G__15721 = (0);
var G__15722 = (0);
seq__15673_15702 = G__15719;
chunk__15674_15703 = G__15720;
count__15675_15704 = G__15721;
i__15676_15705 = G__15722;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_15678,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_15678,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_15677__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_15678,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15679,";");

cljs.compiler.emitln.call(null,"return ",mname_15678,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__15726){
var map__15727 = p__15726;
var map__15727__$1 = (((((!((map__15727 == null))))?(((((map__15727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15727):map__15727);
var variadic = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__15727,map__15727__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15723_SHARP_){
var and__4120__auto__ = p1__15723_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__15723_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__15727,map__15727__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_15780__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15781 = cljs.compiler.munge.call(null,name_15780__$1);
var maxparams_15782 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_15783 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_15780__$1,mname_15781,maxparams_15782,loop_locals,map__15727,map__15727__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15781),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_15780__$1,mname_15781,maxparams_15782,loop_locals,map__15727,map__15727__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_15784 = cljs.core.sort_by.call(null,((function (name_15780__$1,mname_15781,maxparams_15782,mmap_15783,loop_locals,map__15727,map__15727__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15724_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15724_SHARP_)));
});})(name_15780__$1,mname_15781,maxparams_15782,mmap_15783,loop_locals,map__15727,map__15727__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_15783));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_15781," = null;");

var seq__15729_15785 = cljs.core.seq.call(null,ms_15784);
var chunk__15730_15786 = null;
var count__15731_15787 = (0);
var i__15732_15788 = (0);
while(true){
if((i__15732_15788 < count__15731_15787)){
var vec__15739_15789 = cljs.core._nth.call(null,chunk__15730_15786,i__15732_15788);
var n_15790 = cljs.core.nth.call(null,vec__15739_15789,(0),null);
var meth_15791 = cljs.core.nth.call(null,vec__15739_15789,(1),null);
cljs.compiler.emits.call(null,"var ",n_15790," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15791))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15791);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15791);
}

cljs.compiler.emitln.call(null,";");


var G__15792 = seq__15729_15785;
var G__15793 = chunk__15730_15786;
var G__15794 = count__15731_15787;
var G__15795 = (i__15732_15788 + (1));
seq__15729_15785 = G__15792;
chunk__15730_15786 = G__15793;
count__15731_15787 = G__15794;
i__15732_15788 = G__15795;
continue;
} else {
var temp__5720__auto___15796 = cljs.core.seq.call(null,seq__15729_15785);
if(temp__5720__auto___15796){
var seq__15729_15797__$1 = temp__5720__auto___15796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15729_15797__$1)){
var c__4550__auto___15798 = cljs.core.chunk_first.call(null,seq__15729_15797__$1);
var G__15799 = cljs.core.chunk_rest.call(null,seq__15729_15797__$1);
var G__15800 = c__4550__auto___15798;
var G__15801 = cljs.core.count.call(null,c__4550__auto___15798);
var G__15802 = (0);
seq__15729_15785 = G__15799;
chunk__15730_15786 = G__15800;
count__15731_15787 = G__15801;
i__15732_15788 = G__15802;
continue;
} else {
var vec__15742_15803 = cljs.core.first.call(null,seq__15729_15797__$1);
var n_15804 = cljs.core.nth.call(null,vec__15742_15803,(0),null);
var meth_15805 = cljs.core.nth.call(null,vec__15742_15803,(1),null);
cljs.compiler.emits.call(null,"var ",n_15804," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15805))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15805);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15805);
}

cljs.compiler.emitln.call(null,";");


var G__15806 = cljs.core.next.call(null,seq__15729_15797__$1);
var G__15807 = null;
var G__15808 = (0);
var G__15809 = (0);
seq__15729_15785 = G__15806;
chunk__15730_15786 = G__15807;
count__15731_15787 = G__15808;
i__15732_15788 = G__15809;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_15781," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_15782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_15782)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_15782));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__15745_15810 = cljs.core.seq.call(null,ms_15784);
var chunk__15746_15811 = null;
var count__15747_15812 = (0);
var i__15748_15813 = (0);
while(true){
if((i__15748_15813 < count__15747_15812)){
var vec__15755_15814 = cljs.core._nth.call(null,chunk__15746_15811,i__15748_15813);
var n_15815 = cljs.core.nth.call(null,vec__15755_15814,(0),null);
var meth_15816 = cljs.core.nth.call(null,vec__15755_15814,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15816))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15817 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15817," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15818 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15817," = new cljs.core.IndexedSeq(",a_15818,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15815,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15782)),(((cljs.core.count.call(null,maxparams_15782) > (1)))?", ":null),restarg_15817,");");
} else {
var pcnt_15819 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15816));
cljs.compiler.emitln.call(null,"case ",pcnt_15819,":");

cljs.compiler.emitln.call(null,"return ",n_15815,".call(this",(((pcnt_15819 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15819,maxparams_15782)),null,(1),null)),(2),null))),");");
}


var G__15820 = seq__15745_15810;
var G__15821 = chunk__15746_15811;
var G__15822 = count__15747_15812;
var G__15823 = (i__15748_15813 + (1));
seq__15745_15810 = G__15820;
chunk__15746_15811 = G__15821;
count__15747_15812 = G__15822;
i__15748_15813 = G__15823;
continue;
} else {
var temp__5720__auto___15824 = cljs.core.seq.call(null,seq__15745_15810);
if(temp__5720__auto___15824){
var seq__15745_15825__$1 = temp__5720__auto___15824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15745_15825__$1)){
var c__4550__auto___15826 = cljs.core.chunk_first.call(null,seq__15745_15825__$1);
var G__15827 = cljs.core.chunk_rest.call(null,seq__15745_15825__$1);
var G__15828 = c__4550__auto___15826;
var G__15829 = cljs.core.count.call(null,c__4550__auto___15826);
var G__15830 = (0);
seq__15745_15810 = G__15827;
chunk__15746_15811 = G__15828;
count__15747_15812 = G__15829;
i__15748_15813 = G__15830;
continue;
} else {
var vec__15758_15831 = cljs.core.first.call(null,seq__15745_15825__$1);
var n_15832 = cljs.core.nth.call(null,vec__15758_15831,(0),null);
var meth_15833 = cljs.core.nth.call(null,vec__15758_15831,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15833))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15834 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15834," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15835 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15834," = new cljs.core.IndexedSeq(",a_15835,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15832,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15782)),(((cljs.core.count.call(null,maxparams_15782) > (1)))?", ":null),restarg_15834,");");
} else {
var pcnt_15836 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15833));
cljs.compiler.emitln.call(null,"case ",pcnt_15836,":");

cljs.compiler.emitln.call(null,"return ",n_15832,".call(this",(((pcnt_15836 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15836,maxparams_15782)),null,(1),null)),(2),null))),");");
}


var G__15837 = cljs.core.next.call(null,seq__15745_15825__$1);
var G__15838 = null;
var G__15839 = (0);
var G__15840 = (0);
seq__15745_15810 = G__15837;
chunk__15746_15811 = G__15838;
count__15747_15812 = G__15839;
i__15748_15813 = G__15840;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_15841 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_15784)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_15841,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_15781,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_15781,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_15780__$1,mname_15781,maxparams_15782,mmap_15783,ms_15784,loop_locals,map__15727,map__15727__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15725_SHARP_){
var vec__15761 = p1__15725_SHARP_;
var n = cljs.core.nth.call(null,vec__15761,(0),null);
var m = cljs.core.nth.call(null,vec__15761,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_15780__$1,mname_15781,maxparams_15782,mmap_15783,ms_15784,loop_locals,map__15727,map__15727__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_15784),".cljs$lang$applyTo;");
} else {
}

var seq__15764_15842 = cljs.core.seq.call(null,ms_15784);
var chunk__15765_15843 = null;
var count__15766_15844 = (0);
var i__15767_15845 = (0);
while(true){
if((i__15767_15845 < count__15766_15844)){
var vec__15774_15846 = cljs.core._nth.call(null,chunk__15765_15843,i__15767_15845);
var n_15847 = cljs.core.nth.call(null,vec__15774_15846,(0),null);
var meth_15848 = cljs.core.nth.call(null,vec__15774_15846,(1),null);
var c_15849 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15848));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15848))){
cljs.compiler.emitln.call(null,mname_15781,".cljs$core$IFn$_invoke$arity$variadic = ",n_15847,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15781,".cljs$core$IFn$_invoke$arity$",c_15849," = ",n_15847,";");
}


var G__15850 = seq__15764_15842;
var G__15851 = chunk__15765_15843;
var G__15852 = count__15766_15844;
var G__15853 = (i__15767_15845 + (1));
seq__15764_15842 = G__15850;
chunk__15765_15843 = G__15851;
count__15766_15844 = G__15852;
i__15767_15845 = G__15853;
continue;
} else {
var temp__5720__auto___15854 = cljs.core.seq.call(null,seq__15764_15842);
if(temp__5720__auto___15854){
var seq__15764_15855__$1 = temp__5720__auto___15854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15764_15855__$1)){
var c__4550__auto___15856 = cljs.core.chunk_first.call(null,seq__15764_15855__$1);
var G__15857 = cljs.core.chunk_rest.call(null,seq__15764_15855__$1);
var G__15858 = c__4550__auto___15856;
var G__15859 = cljs.core.count.call(null,c__4550__auto___15856);
var G__15860 = (0);
seq__15764_15842 = G__15857;
chunk__15765_15843 = G__15858;
count__15766_15844 = G__15859;
i__15767_15845 = G__15860;
continue;
} else {
var vec__15777_15861 = cljs.core.first.call(null,seq__15764_15855__$1);
var n_15862 = cljs.core.nth.call(null,vec__15777_15861,(0),null);
var meth_15863 = cljs.core.nth.call(null,vec__15777_15861,(1),null);
var c_15864 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15863));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15863))){
cljs.compiler.emitln.call(null,mname_15781,".cljs$core$IFn$_invoke$arity$variadic = ",n_15862,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15781,".cljs$core$IFn$_invoke$arity$",c_15864," = ",n_15862,";");
}


var G__15865 = cljs.core.next.call(null,seq__15764_15855__$1);
var G__15866 = null;
var G__15867 = (0);
var G__15868 = (0);
seq__15764_15842 = G__15865;
chunk__15765_15843 = G__15866;
count__15766_15844 = G__15867;
i__15767_15845 = G__15868;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_15781,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__15869){
var map__15870 = p__15869;
var map__15870__$1 = (((((!((map__15870 == null))))?(((((map__15870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15870):map__15870);
var statements = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__15872_15876 = cljs.core.seq.call(null,statements);
var chunk__15873_15877 = null;
var count__15874_15878 = (0);
var i__15875_15879 = (0);
while(true){
if((i__15875_15879 < count__15874_15878)){
var s_15880 = cljs.core._nth.call(null,chunk__15873_15877,i__15875_15879);
cljs.compiler.emitln.call(null,s_15880);


var G__15881 = seq__15872_15876;
var G__15882 = chunk__15873_15877;
var G__15883 = count__15874_15878;
var G__15884 = (i__15875_15879 + (1));
seq__15872_15876 = G__15881;
chunk__15873_15877 = G__15882;
count__15874_15878 = G__15883;
i__15875_15879 = G__15884;
continue;
} else {
var temp__5720__auto___15885 = cljs.core.seq.call(null,seq__15872_15876);
if(temp__5720__auto___15885){
var seq__15872_15886__$1 = temp__5720__auto___15885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15872_15886__$1)){
var c__4550__auto___15887 = cljs.core.chunk_first.call(null,seq__15872_15886__$1);
var G__15888 = cljs.core.chunk_rest.call(null,seq__15872_15886__$1);
var G__15889 = c__4550__auto___15887;
var G__15890 = cljs.core.count.call(null,c__4550__auto___15887);
var G__15891 = (0);
seq__15872_15876 = G__15888;
chunk__15873_15877 = G__15889;
count__15874_15878 = G__15890;
i__15875_15879 = G__15891;
continue;
} else {
var s_15892 = cljs.core.first.call(null,seq__15872_15886__$1);
cljs.compiler.emitln.call(null,s_15892);


var G__15893 = cljs.core.next.call(null,seq__15872_15886__$1);
var G__15894 = null;
var G__15895 = (0);
var G__15896 = (0);
seq__15872_15876 = G__15893;
chunk__15873_15877 = G__15894;
count__15874_15878 = G__15895;
i__15875_15879 = G__15896;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__15897){
var map__15898 = p__15897;
var map__15898__$1 = (((((!((map__15898 == null))))?(((((map__15898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15898):map__15898);
var try$ = cljs.core.get.call(null,map__15898__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__15898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__15898__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__15898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__15898__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15900,is_loop){
var map__15901 = p__15900;
var map__15901__$1 = (((((!((map__15901 == null))))?(((((map__15901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15901):map__15901);
var expr = cljs.core.get.call(null,map__15901__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__15901__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__15901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__15903_15917 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__15904_15918 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__15903_15917,context,map__15901,map__15901__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__15903_15917,context,map__15901,map__15901__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__15904_15918;

try{var seq__15905_15919 = cljs.core.seq.call(null,bindings);
var chunk__15906_15920 = null;
var count__15907_15921 = (0);
var i__15908_15922 = (0);
while(true){
if((i__15908_15922 < count__15907_15921)){
var map__15913_15923 = cljs.core._nth.call(null,chunk__15906_15920,i__15908_15922);
var map__15913_15924__$1 = (((((!((map__15913_15923 == null))))?(((((map__15913_15923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15913_15923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15913_15923):map__15913_15923);
var binding_15925 = map__15913_15924__$1;
var init_15926 = cljs.core.get.call(null,map__15913_15924__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15925);

cljs.compiler.emitln.call(null," = ",init_15926,";");


var G__15927 = seq__15905_15919;
var G__15928 = chunk__15906_15920;
var G__15929 = count__15907_15921;
var G__15930 = (i__15908_15922 + (1));
seq__15905_15919 = G__15927;
chunk__15906_15920 = G__15928;
count__15907_15921 = G__15929;
i__15908_15922 = G__15930;
continue;
} else {
var temp__5720__auto___15931 = cljs.core.seq.call(null,seq__15905_15919);
if(temp__5720__auto___15931){
var seq__15905_15932__$1 = temp__5720__auto___15931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15905_15932__$1)){
var c__4550__auto___15933 = cljs.core.chunk_first.call(null,seq__15905_15932__$1);
var G__15934 = cljs.core.chunk_rest.call(null,seq__15905_15932__$1);
var G__15935 = c__4550__auto___15933;
var G__15936 = cljs.core.count.call(null,c__4550__auto___15933);
var G__15937 = (0);
seq__15905_15919 = G__15934;
chunk__15906_15920 = G__15935;
count__15907_15921 = G__15936;
i__15908_15922 = G__15937;
continue;
} else {
var map__15915_15938 = cljs.core.first.call(null,seq__15905_15932__$1);
var map__15915_15939__$1 = (((((!((map__15915_15938 == null))))?(((((map__15915_15938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15915_15938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15915_15938):map__15915_15938);
var binding_15940 = map__15915_15939__$1;
var init_15941 = cljs.core.get.call(null,map__15915_15939__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15940);

cljs.compiler.emitln.call(null," = ",init_15941,";");


var G__15942 = cljs.core.next.call(null,seq__15905_15932__$1);
var G__15943 = null;
var G__15944 = (0);
var G__15945 = (0);
seq__15905_15919 = G__15942;
chunk__15906_15920 = G__15943;
count__15907_15921 = G__15944;
i__15908_15922 = G__15945;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__15903_15917;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__15946){
var map__15947 = p__15946;
var map__15947__$1 = (((((!((map__15947 == null))))?(((((map__15947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15947):map__15947);
var frame = cljs.core.get.call(null,map__15947__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__15947__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__15947__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___15949 = cljs.core.count.call(null,exprs);
var i_15950 = (0);
while(true){
if((i_15950 < n__4607__auto___15949)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_15950)," = ",exprs.call(null,i_15950),";");

var G__15951 = (i_15950 + (1));
i_15950 = G__15951;
continue;
} else {
}
break;
}

var n__4607__auto___15952 = cljs.core.count.call(null,exprs);
var i_15953 = (0);
while(true){
if((i_15953 < n__4607__auto___15952)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_15953))," = ",temps.call(null,i_15953),";");

var G__15954 = (i_15953 + (1));
i_15953 = G__15954;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__15955){
var map__15956 = p__15955;
var map__15956__$1 = (((((!((map__15956 == null))))?(((((map__15956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15956):map__15956);
var expr = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__15958_15970 = cljs.core.seq.call(null,bindings);
var chunk__15959_15971 = null;
var count__15960_15972 = (0);
var i__15961_15973 = (0);
while(true){
if((i__15961_15973 < count__15960_15972)){
var map__15966_15974 = cljs.core._nth.call(null,chunk__15959_15971,i__15961_15973);
var map__15966_15975__$1 = (((((!((map__15966_15974 == null))))?(((((map__15966_15974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15966_15974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15966_15974):map__15966_15974);
var binding_15976 = map__15966_15975__$1;
var init_15977 = cljs.core.get.call(null,map__15966_15975__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15976)," = ",init_15977,";");


var G__15978 = seq__15958_15970;
var G__15979 = chunk__15959_15971;
var G__15980 = count__15960_15972;
var G__15981 = (i__15961_15973 + (1));
seq__15958_15970 = G__15978;
chunk__15959_15971 = G__15979;
count__15960_15972 = G__15980;
i__15961_15973 = G__15981;
continue;
} else {
var temp__5720__auto___15982 = cljs.core.seq.call(null,seq__15958_15970);
if(temp__5720__auto___15982){
var seq__15958_15983__$1 = temp__5720__auto___15982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15958_15983__$1)){
var c__4550__auto___15984 = cljs.core.chunk_first.call(null,seq__15958_15983__$1);
var G__15985 = cljs.core.chunk_rest.call(null,seq__15958_15983__$1);
var G__15986 = c__4550__auto___15984;
var G__15987 = cljs.core.count.call(null,c__4550__auto___15984);
var G__15988 = (0);
seq__15958_15970 = G__15985;
chunk__15959_15971 = G__15986;
count__15960_15972 = G__15987;
i__15961_15973 = G__15988;
continue;
} else {
var map__15968_15989 = cljs.core.first.call(null,seq__15958_15983__$1);
var map__15968_15990__$1 = (((((!((map__15968_15989 == null))))?(((((map__15968_15989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15968_15989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15968_15989):map__15968_15989);
var binding_15991 = map__15968_15990__$1;
var init_15992 = cljs.core.get.call(null,map__15968_15990__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15991)," = ",init_15992,";");


var G__15993 = cljs.core.next.call(null,seq__15958_15983__$1);
var G__15994 = null;
var G__15995 = (0);
var G__15996 = (0);
seq__15958_15970 = G__15993;
chunk__15959_15971 = G__15994;
count__15960_15972 = G__15995;
i__15961_15973 = G__15996;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__15999){
var map__16000 = p__15999;
var map__16000__$1 = (((((!((map__16000 == null))))?(((((map__16000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16000):map__16000);
var expr = map__16000__$1;
var f = cljs.core.get.call(null,map__16000__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__16000__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__16002 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16000,map__16000__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16000,map__16000__$1,expr,f,args,env){
return (function (p1__15997_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15997_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16000,map__16000__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16000,map__16000__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16000,map__16000__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16000,map__16000__$1,expr,f,args,env){
return (function (p1__15998_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15998_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16000,map__16000__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16000,map__16000__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__16002,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__16002,(1),null);
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_16005 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_16005,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_16006 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_16006,args)),(((mfa_16006 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_16006,args)),"], 0))");
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
var fprop_16007 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_16007," ? ",f__$1,fprop_16007,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_16007," ? ",f__$1,fprop_16007,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__16008){
var map__16009 = p__16008;
var map__16009__$1 = (((((!((map__16009 == null))))?(((((map__16009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16009):map__16009);
var ctor = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__16011){
var map__16012 = p__16011;
var map__16012__$1 = (((((!((map__16012 == null))))?(((((map__16012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16012):map__16012);
var target = cljs.core.get.call(null,map__16012__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__16012__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__16012__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
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
var map__16014 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__16014__$1 = (((((!((map__16014 == null))))?(((((map__16014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16014):map__16014);
var options = cljs.core.get.call(null,map__16014__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__16014__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__16015 = options;
var map__16015__$1 = (((((!((map__16015 == null))))?(((((map__16015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16015):map__16015);
var target = cljs.core.get.call(null,map__16015__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__16015__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__16016 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__16021 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__16021__$1 = (((((!((map__16021 == null))))?(((((map__16021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16021):map__16021);
var node_libs = cljs.core.get.call(null,map__16021__$1,true);
var libs_to_load = cljs.core.get.call(null,map__16021__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__16016,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__16016,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__16023_16043 = cljs.core.seq.call(null,libs_to_load);
var chunk__16024_16044 = null;
var count__16025_16045 = (0);
var i__16026_16046 = (0);
while(true){
if((i__16026_16046 < count__16025_16045)){
var lib_16047 = cljs.core._nth.call(null,chunk__16024_16044,i__16026_16046);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_16047)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16047),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16047),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16047),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16047),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_16047,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16047),"');");
}

}
}
}


var G__16048 = seq__16023_16043;
var G__16049 = chunk__16024_16044;
var G__16050 = count__16025_16045;
var G__16051 = (i__16026_16046 + (1));
seq__16023_16043 = G__16048;
chunk__16024_16044 = G__16049;
count__16025_16045 = G__16050;
i__16026_16046 = G__16051;
continue;
} else {
var temp__5720__auto___16052 = cljs.core.seq.call(null,seq__16023_16043);
if(temp__5720__auto___16052){
var seq__16023_16053__$1 = temp__5720__auto___16052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16023_16053__$1)){
var c__4550__auto___16054 = cljs.core.chunk_first.call(null,seq__16023_16053__$1);
var G__16055 = cljs.core.chunk_rest.call(null,seq__16023_16053__$1);
var G__16056 = c__4550__auto___16054;
var G__16057 = cljs.core.count.call(null,c__4550__auto___16054);
var G__16058 = (0);
seq__16023_16043 = G__16055;
chunk__16024_16044 = G__16056;
count__16025_16045 = G__16057;
i__16026_16046 = G__16058;
continue;
} else {
var lib_16059 = cljs.core.first.call(null,seq__16023_16053__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_16059)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16059),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16059),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16059),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16059),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_16059,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16059),"');");
}

}
}
}


var G__16060 = cljs.core.next.call(null,seq__16023_16053__$1);
var G__16061 = null;
var G__16062 = (0);
var G__16063 = (0);
seq__16023_16043 = G__16060;
chunk__16024_16044 = G__16061;
count__16025_16045 = G__16062;
i__16026_16046 = G__16063;
continue;
}
} else {
}
}
break;
}

var seq__16027_16064 = cljs.core.seq.call(null,node_libs);
var chunk__16028_16065 = null;
var count__16029_16066 = (0);
var i__16030_16067 = (0);
while(true){
if((i__16030_16067 < count__16029_16066)){
var lib_16068 = cljs.core._nth.call(null,chunk__16028_16065,i__16030_16067);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_16068)," = require('",lib_16068,"');");


var G__16069 = seq__16027_16064;
var G__16070 = chunk__16028_16065;
var G__16071 = count__16029_16066;
var G__16072 = (i__16030_16067 + (1));
seq__16027_16064 = G__16069;
chunk__16028_16065 = G__16070;
count__16029_16066 = G__16071;
i__16030_16067 = G__16072;
continue;
} else {
var temp__5720__auto___16073 = cljs.core.seq.call(null,seq__16027_16064);
if(temp__5720__auto___16073){
var seq__16027_16074__$1 = temp__5720__auto___16073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16027_16074__$1)){
var c__4550__auto___16075 = cljs.core.chunk_first.call(null,seq__16027_16074__$1);
var G__16076 = cljs.core.chunk_rest.call(null,seq__16027_16074__$1);
var G__16077 = c__4550__auto___16075;
var G__16078 = cljs.core.count.call(null,c__4550__auto___16075);
var G__16079 = (0);
seq__16027_16064 = G__16076;
chunk__16028_16065 = G__16077;
count__16029_16066 = G__16078;
i__16030_16067 = G__16079;
continue;
} else {
var lib_16080 = cljs.core.first.call(null,seq__16027_16074__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_16080)," = require('",lib_16080,"');");


var G__16081 = cljs.core.next.call(null,seq__16027_16074__$1);
var G__16082 = null;
var G__16083 = (0);
var G__16084 = (0);
seq__16027_16064 = G__16081;
chunk__16028_16065 = G__16082;
count__16029_16066 = G__16083;
i__16030_16067 = G__16084;
continue;
}
} else {
}
}
break;
}

var seq__16031_16085 = cljs.core.seq.call(null,global_exports_libs);
var chunk__16032_16086 = null;
var count__16033_16087 = (0);
var i__16034_16088 = (0);
while(true){
if((i__16034_16088 < count__16033_16087)){
var lib_16089 = cljs.core._nth.call(null,chunk__16032_16086,i__16034_16088);
var map__16039_16090 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_16089));
var map__16039_16091__$1 = (((((!((map__16039_16090 == null))))?(((((map__16039_16090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16039_16090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16039_16090):map__16039_16090);
var global_exports_16092 = cljs.core.get.call(null,map__16039_16091__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_16092,lib_16089);


var G__16093 = seq__16031_16085;
var G__16094 = chunk__16032_16086;
var G__16095 = count__16033_16087;
var G__16096 = (i__16034_16088 + (1));
seq__16031_16085 = G__16093;
chunk__16032_16086 = G__16094;
count__16033_16087 = G__16095;
i__16034_16088 = G__16096;
continue;
} else {
var temp__5720__auto___16097 = cljs.core.seq.call(null,seq__16031_16085);
if(temp__5720__auto___16097){
var seq__16031_16098__$1 = temp__5720__auto___16097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16031_16098__$1)){
var c__4550__auto___16099 = cljs.core.chunk_first.call(null,seq__16031_16098__$1);
var G__16100 = cljs.core.chunk_rest.call(null,seq__16031_16098__$1);
var G__16101 = c__4550__auto___16099;
var G__16102 = cljs.core.count.call(null,c__4550__auto___16099);
var G__16103 = (0);
seq__16031_16085 = G__16100;
chunk__16032_16086 = G__16101;
count__16033_16087 = G__16102;
i__16034_16088 = G__16103;
continue;
} else {
var lib_16104 = cljs.core.first.call(null,seq__16031_16098__$1);
var map__16041_16105 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_16104));
var map__16041_16106__$1 = (((((!((map__16041_16105 == null))))?(((((map__16041_16105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16041_16105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16041_16105):map__16041_16105);
var global_exports_16107 = cljs.core.get.call(null,map__16041_16106__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_16107,lib_16104);


var G__16108 = cljs.core.next.call(null,seq__16031_16098__$1);
var G__16109 = null;
var G__16110 = (0);
var G__16111 = (0);
seq__16031_16085 = G__16108;
chunk__16032_16086 = G__16109;
count__16033_16087 = G__16110;
i__16034_16088 = G__16111;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__16112){
var map__16113 = p__16112;
var map__16113__$1 = (((((!((map__16113 == null))))?(((((map__16113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16113):map__16113);
var name = cljs.core.get.call(null,map__16113__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16113__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16113__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16113__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16113__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16113__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__16113__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__16115){
var map__16116 = p__16115;
var map__16116__$1 = (((((!((map__16116 == null))))?(((((map__16116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16116):map__16116);
var name = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__16118){
var map__16119 = p__16118;
var map__16119__$1 = (((((!((map__16119 == null))))?(((((map__16119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16119):map__16119);
var t = cljs.core.get.call(null,map__16119__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16119__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16119__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16119__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16119__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16121_16145 = cljs.core.seq.call(null,protocols);
var chunk__16122_16146 = null;
var count__16123_16147 = (0);
var i__16124_16148 = (0);
while(true){
if((i__16124_16148 < count__16123_16147)){
var protocol_16149 = cljs.core._nth.call(null,chunk__16122_16146,i__16124_16148);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16149)),"}");


var G__16150 = seq__16121_16145;
var G__16151 = chunk__16122_16146;
var G__16152 = count__16123_16147;
var G__16153 = (i__16124_16148 + (1));
seq__16121_16145 = G__16150;
chunk__16122_16146 = G__16151;
count__16123_16147 = G__16152;
i__16124_16148 = G__16153;
continue;
} else {
var temp__5720__auto___16154 = cljs.core.seq.call(null,seq__16121_16145);
if(temp__5720__auto___16154){
var seq__16121_16155__$1 = temp__5720__auto___16154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16121_16155__$1)){
var c__4550__auto___16156 = cljs.core.chunk_first.call(null,seq__16121_16155__$1);
var G__16157 = cljs.core.chunk_rest.call(null,seq__16121_16155__$1);
var G__16158 = c__4550__auto___16156;
var G__16159 = cljs.core.count.call(null,c__4550__auto___16156);
var G__16160 = (0);
seq__16121_16145 = G__16157;
chunk__16122_16146 = G__16158;
count__16123_16147 = G__16159;
i__16124_16148 = G__16160;
continue;
} else {
var protocol_16161 = cljs.core.first.call(null,seq__16121_16155__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16161)),"}");


var G__16162 = cljs.core.next.call(null,seq__16121_16155__$1);
var G__16163 = null;
var G__16164 = (0);
var G__16165 = (0);
seq__16121_16145 = G__16162;
chunk__16122_16146 = G__16163;
count__16123_16147 = G__16164;
i__16124_16148 = G__16165;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16125_16166 = cljs.core.seq.call(null,fields__$1);
var chunk__16126_16167 = null;
var count__16127_16168 = (0);
var i__16128_16169 = (0);
while(true){
if((i__16128_16169 < count__16127_16168)){
var fld_16170 = cljs.core._nth.call(null,chunk__16126_16167,i__16128_16169);
cljs.compiler.emitln.call(null,"this.",fld_16170," = ",fld_16170,";");


var G__16171 = seq__16125_16166;
var G__16172 = chunk__16126_16167;
var G__16173 = count__16127_16168;
var G__16174 = (i__16128_16169 + (1));
seq__16125_16166 = G__16171;
chunk__16126_16167 = G__16172;
count__16127_16168 = G__16173;
i__16128_16169 = G__16174;
continue;
} else {
var temp__5720__auto___16175 = cljs.core.seq.call(null,seq__16125_16166);
if(temp__5720__auto___16175){
var seq__16125_16176__$1 = temp__5720__auto___16175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16125_16176__$1)){
var c__4550__auto___16177 = cljs.core.chunk_first.call(null,seq__16125_16176__$1);
var G__16178 = cljs.core.chunk_rest.call(null,seq__16125_16176__$1);
var G__16179 = c__4550__auto___16177;
var G__16180 = cljs.core.count.call(null,c__4550__auto___16177);
var G__16181 = (0);
seq__16125_16166 = G__16178;
chunk__16126_16167 = G__16179;
count__16127_16168 = G__16180;
i__16128_16169 = G__16181;
continue;
} else {
var fld_16182 = cljs.core.first.call(null,seq__16125_16176__$1);
cljs.compiler.emitln.call(null,"this.",fld_16182," = ",fld_16182,";");


var G__16183 = cljs.core.next.call(null,seq__16125_16176__$1);
var G__16184 = null;
var G__16185 = (0);
var G__16186 = (0);
seq__16125_16166 = G__16183;
chunk__16126_16167 = G__16184;
count__16127_16168 = G__16185;
i__16128_16169 = G__16186;
continue;
}
} else {
}
}
break;
}

var seq__16129_16187 = cljs.core.seq.call(null,pmasks);
var chunk__16130_16188 = null;
var count__16131_16189 = (0);
var i__16132_16190 = (0);
while(true){
if((i__16132_16190 < count__16131_16189)){
var vec__16139_16191 = cljs.core._nth.call(null,chunk__16130_16188,i__16132_16190);
var pno_16192 = cljs.core.nth.call(null,vec__16139_16191,(0),null);
var pmask_16193 = cljs.core.nth.call(null,vec__16139_16191,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16192,"$ = ",pmask_16193,";");


var G__16194 = seq__16129_16187;
var G__16195 = chunk__16130_16188;
var G__16196 = count__16131_16189;
var G__16197 = (i__16132_16190 + (1));
seq__16129_16187 = G__16194;
chunk__16130_16188 = G__16195;
count__16131_16189 = G__16196;
i__16132_16190 = G__16197;
continue;
} else {
var temp__5720__auto___16198 = cljs.core.seq.call(null,seq__16129_16187);
if(temp__5720__auto___16198){
var seq__16129_16199__$1 = temp__5720__auto___16198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16129_16199__$1)){
var c__4550__auto___16200 = cljs.core.chunk_first.call(null,seq__16129_16199__$1);
var G__16201 = cljs.core.chunk_rest.call(null,seq__16129_16199__$1);
var G__16202 = c__4550__auto___16200;
var G__16203 = cljs.core.count.call(null,c__4550__auto___16200);
var G__16204 = (0);
seq__16129_16187 = G__16201;
chunk__16130_16188 = G__16202;
count__16131_16189 = G__16203;
i__16132_16190 = G__16204;
continue;
} else {
var vec__16142_16205 = cljs.core.first.call(null,seq__16129_16199__$1);
var pno_16206 = cljs.core.nth.call(null,vec__16142_16205,(0),null);
var pmask_16207 = cljs.core.nth.call(null,vec__16142_16205,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16206,"$ = ",pmask_16207,";");


var G__16208 = cljs.core.next.call(null,seq__16129_16199__$1);
var G__16209 = null;
var G__16210 = (0);
var G__16211 = (0);
seq__16129_16187 = G__16208;
chunk__16130_16188 = G__16209;
count__16131_16189 = G__16210;
i__16132_16190 = G__16211;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__16212){
var map__16213 = p__16212;
var map__16213__$1 = (((((!((map__16213 == null))))?(((((map__16213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16213):map__16213);
var t = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16215_16239 = cljs.core.seq.call(null,protocols);
var chunk__16216_16240 = null;
var count__16217_16241 = (0);
var i__16218_16242 = (0);
while(true){
if((i__16218_16242 < count__16217_16241)){
var protocol_16243 = cljs.core._nth.call(null,chunk__16216_16240,i__16218_16242);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16243)),"}");


var G__16244 = seq__16215_16239;
var G__16245 = chunk__16216_16240;
var G__16246 = count__16217_16241;
var G__16247 = (i__16218_16242 + (1));
seq__16215_16239 = G__16244;
chunk__16216_16240 = G__16245;
count__16217_16241 = G__16246;
i__16218_16242 = G__16247;
continue;
} else {
var temp__5720__auto___16248 = cljs.core.seq.call(null,seq__16215_16239);
if(temp__5720__auto___16248){
var seq__16215_16249__$1 = temp__5720__auto___16248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16215_16249__$1)){
var c__4550__auto___16250 = cljs.core.chunk_first.call(null,seq__16215_16249__$1);
var G__16251 = cljs.core.chunk_rest.call(null,seq__16215_16249__$1);
var G__16252 = c__4550__auto___16250;
var G__16253 = cljs.core.count.call(null,c__4550__auto___16250);
var G__16254 = (0);
seq__16215_16239 = G__16251;
chunk__16216_16240 = G__16252;
count__16217_16241 = G__16253;
i__16218_16242 = G__16254;
continue;
} else {
var protocol_16255 = cljs.core.first.call(null,seq__16215_16249__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16255)),"}");


var G__16256 = cljs.core.next.call(null,seq__16215_16249__$1);
var G__16257 = null;
var G__16258 = (0);
var G__16259 = (0);
seq__16215_16239 = G__16256;
chunk__16216_16240 = G__16257;
count__16217_16241 = G__16258;
i__16218_16242 = G__16259;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16219_16260 = cljs.core.seq.call(null,fields__$1);
var chunk__16220_16261 = null;
var count__16221_16262 = (0);
var i__16222_16263 = (0);
while(true){
if((i__16222_16263 < count__16221_16262)){
var fld_16264 = cljs.core._nth.call(null,chunk__16220_16261,i__16222_16263);
cljs.compiler.emitln.call(null,"this.",fld_16264," = ",fld_16264,";");


var G__16265 = seq__16219_16260;
var G__16266 = chunk__16220_16261;
var G__16267 = count__16221_16262;
var G__16268 = (i__16222_16263 + (1));
seq__16219_16260 = G__16265;
chunk__16220_16261 = G__16266;
count__16221_16262 = G__16267;
i__16222_16263 = G__16268;
continue;
} else {
var temp__5720__auto___16269 = cljs.core.seq.call(null,seq__16219_16260);
if(temp__5720__auto___16269){
var seq__16219_16270__$1 = temp__5720__auto___16269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16219_16270__$1)){
var c__4550__auto___16271 = cljs.core.chunk_first.call(null,seq__16219_16270__$1);
var G__16272 = cljs.core.chunk_rest.call(null,seq__16219_16270__$1);
var G__16273 = c__4550__auto___16271;
var G__16274 = cljs.core.count.call(null,c__4550__auto___16271);
var G__16275 = (0);
seq__16219_16260 = G__16272;
chunk__16220_16261 = G__16273;
count__16221_16262 = G__16274;
i__16222_16263 = G__16275;
continue;
} else {
var fld_16276 = cljs.core.first.call(null,seq__16219_16270__$1);
cljs.compiler.emitln.call(null,"this.",fld_16276," = ",fld_16276,";");


var G__16277 = cljs.core.next.call(null,seq__16219_16270__$1);
var G__16278 = null;
var G__16279 = (0);
var G__16280 = (0);
seq__16219_16260 = G__16277;
chunk__16220_16261 = G__16278;
count__16221_16262 = G__16279;
i__16222_16263 = G__16280;
continue;
}
} else {
}
}
break;
}

var seq__16223_16281 = cljs.core.seq.call(null,pmasks);
var chunk__16224_16282 = null;
var count__16225_16283 = (0);
var i__16226_16284 = (0);
while(true){
if((i__16226_16284 < count__16225_16283)){
var vec__16233_16285 = cljs.core._nth.call(null,chunk__16224_16282,i__16226_16284);
var pno_16286 = cljs.core.nth.call(null,vec__16233_16285,(0),null);
var pmask_16287 = cljs.core.nth.call(null,vec__16233_16285,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16286,"$ = ",pmask_16287,";");


var G__16288 = seq__16223_16281;
var G__16289 = chunk__16224_16282;
var G__16290 = count__16225_16283;
var G__16291 = (i__16226_16284 + (1));
seq__16223_16281 = G__16288;
chunk__16224_16282 = G__16289;
count__16225_16283 = G__16290;
i__16226_16284 = G__16291;
continue;
} else {
var temp__5720__auto___16292 = cljs.core.seq.call(null,seq__16223_16281);
if(temp__5720__auto___16292){
var seq__16223_16293__$1 = temp__5720__auto___16292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16223_16293__$1)){
var c__4550__auto___16294 = cljs.core.chunk_first.call(null,seq__16223_16293__$1);
var G__16295 = cljs.core.chunk_rest.call(null,seq__16223_16293__$1);
var G__16296 = c__4550__auto___16294;
var G__16297 = cljs.core.count.call(null,c__4550__auto___16294);
var G__16298 = (0);
seq__16223_16281 = G__16295;
chunk__16224_16282 = G__16296;
count__16225_16283 = G__16297;
i__16226_16284 = G__16298;
continue;
} else {
var vec__16236_16299 = cljs.core.first.call(null,seq__16223_16293__$1);
var pno_16300 = cljs.core.nth.call(null,vec__16236_16299,(0),null);
var pmask_16301 = cljs.core.nth.call(null,vec__16236_16299,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16300,"$ = ",pmask_16301,";");


var G__16302 = cljs.core.next.call(null,seq__16223_16293__$1);
var G__16303 = null;
var G__16304 = (0);
var G__16305 = (0);
seq__16223_16281 = G__16302;
chunk__16224_16282 = G__16303;
count__16225_16283 = G__16304;
i__16226_16284 = G__16305;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__16306){
var map__16307 = p__16306;
var map__16307__$1 = (((((!((map__16307 == null))))?(((((map__16307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16307):map__16307);
var target = cljs.core.get.call(null,map__16307__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16307__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16307__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16307__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16307__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16309){
var map__16310 = p__16309;
var map__16310__$1 = (((((!((map__16310 == null))))?(((((map__16310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16310):map__16310);
var op = cljs.core.get.call(null,map__16310__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__16310__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16310__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16310__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16310__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__13854__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13854__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__16316 = cljs.core.seq.call(null,table);
var chunk__16317 = null;
var count__16318 = (0);
var i__16319 = (0);
while(true){
if((i__16319 < count__16318)){
var vec__16326 = cljs.core._nth.call(null,chunk__16317,i__16319);
var sym = cljs.core.nth.call(null,vec__16326,(0),null);
var value = cljs.core.nth.call(null,vec__16326,(1),null);
var ns_16332 = cljs.core.namespace.call(null,sym);
var name_16333 = cljs.core.name.call(null,sym);
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


var G__16334 = seq__16316;
var G__16335 = chunk__16317;
var G__16336 = count__16318;
var G__16337 = (i__16319 + (1));
seq__16316 = G__16334;
chunk__16317 = G__16335;
count__16318 = G__16336;
i__16319 = G__16337;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16316);
if(temp__5720__auto__){
var seq__16316__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16316__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16316__$1);
var G__16338 = cljs.core.chunk_rest.call(null,seq__16316__$1);
var G__16339 = c__4550__auto__;
var G__16340 = cljs.core.count.call(null,c__4550__auto__);
var G__16341 = (0);
seq__16316 = G__16338;
chunk__16317 = G__16339;
count__16318 = G__16340;
i__16319 = G__16341;
continue;
} else {
var vec__16329 = cljs.core.first.call(null,seq__16316__$1);
var sym = cljs.core.nth.call(null,vec__16329,(0),null);
var value = cljs.core.nth.call(null,vec__16329,(1),null);
var ns_16342 = cljs.core.namespace.call(null,sym);
var name_16343 = cljs.core.name.call(null,sym);
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


var G__16344 = cljs.core.next.call(null,seq__16316__$1);
var G__16345 = null;
var G__16346 = (0);
var G__16347 = (0);
seq__16316 = G__16344;
chunk__16317 = G__16345;
count__16318 = G__16346;
i__16319 = G__16347;
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
var G__16349 = arguments.length;
switch (G__16349) {
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
var k_16354 = cljs.core.first.call(null,ks);
var vec__16350_16355 = cljs.core.conj.call(null,prefix,k_16354);
var top_16356 = cljs.core.nth.call(null,vec__16350_16355,(0),null);
var prefix_SINGLEQUOTE__16357 = vec__16350_16355;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_16354)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__16357) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_16356)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_16356)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16357)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_16356);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16357)),";");
}
} else {
}

var m_16358 = cljs.core.get.call(null,externs,k_16354);
if(cljs.core.empty_QMARK_.call(null,m_16358)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__16357,m_16358,top_level,known_externs);
}

var G__16359 = cljs.core.next.call(null,ks);
ks = G__16359;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
