// Compiled by ClojureScript 1.10.439 {}
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
var map__13589 = s;
var map__13589__$1 = (((((!((map__13589 == null))))?(((((map__13589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13589):map__13589);
var name = cljs.core.get.call(null,map__13589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13589__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__13592 = info;
var map__13593 = G__13592;
var map__13593__$1 = (((((!((map__13593 == null))))?(((((map__13593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13593):map__13593);
var shadow = cljs.core.get.call(null,map__13593__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__13592__$1 = G__13592;
while(true){
var d__$2 = d__$1;
var map__13595 = G__13592__$1;
var map__13595__$1 = (((((!((map__13595 == null))))?(((((map__13595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13595):map__13595);
var shadow__$1 = cljs.core.get.call(null,map__13595__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__13597 = (d__$2 + (1));
var G__13598 = shadow__$1;
d__$1 = G__13597;
G__13592__$1 = G__13598;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13599){
var map__13600 = p__13599;
var map__13600__$1 = (((((!((map__13600 == null))))?(((((map__13600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13600):map__13600);
var name_var = map__13600__$1;
var name = cljs.core.get.call(null,map__13600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13600__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__13602 = info;
var map__13602__$1 = (((((!((map__13602 == null))))?(((((map__13602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13602):map__13602);
var ns = cljs.core.get.call(null,map__13602__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__13602__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__13605 = arguments.length;
switch (G__13605) {
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
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11321),(11321),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
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
var G__13607 = cp;
switch (G__13607) {
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
var seq__13609_13613 = cljs.core.seq.call(null,s);
var chunk__13610_13614 = null;
var count__13611_13615 = (0);
var i__13612_13616 = (0);
while(true){
if((i__13612_13616 < count__13611_13615)){
var c_13617 = cljs.core._nth.call(null,chunk__13610_13614,i__13612_13616);
sb.append(cljs.compiler.escape_char.call(null,c_13617));


var G__13618 = seq__13609_13613;
var G__13619 = chunk__13610_13614;
var G__13620 = count__13611_13615;
var G__13621 = (i__13612_13616 + (1));
seq__13609_13613 = G__13618;
chunk__13610_13614 = G__13619;
count__13611_13615 = G__13620;
i__13612_13616 = G__13621;
continue;
} else {
var temp__5720__auto___13622 = cljs.core.seq.call(null,seq__13609_13613);
if(temp__5720__auto___13622){
var seq__13609_13623__$1 = temp__5720__auto___13622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13609_13623__$1)){
var c__4461__auto___13624 = cljs.core.chunk_first.call(null,seq__13609_13623__$1);
var G__13625 = cljs.core.chunk_rest.call(null,seq__13609_13623__$1);
var G__13626 = c__4461__auto___13624;
var G__13627 = cljs.core.count.call(null,c__4461__auto___13624);
var G__13628 = (0);
seq__13609_13613 = G__13625;
chunk__13610_13614 = G__13626;
count__13611_13615 = G__13627;
i__13612_13616 = G__13628;
continue;
} else {
var c_13629 = cljs.core.first.call(null,seq__13609_13623__$1);
sb.append(cljs.compiler.escape_char.call(null,c_13629));


var G__13630 = cljs.core.next.call(null,seq__13609_13623__$1);
var G__13631 = null;
var G__13632 = (0);
var G__13633 = (0);
seq__13609_13613 = G__13630;
chunk__13610_13614 = G__13631;
count__13611_13615 = G__13632;
i__13612_13616 = G__13633;
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
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__13634_13639 = ast;
var map__13634_13640__$1 = (((((!((map__13634_13639 == null))))?(((((map__13634_13639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13634_13639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13634_13639):map__13634_13639);
var env_13641 = cljs.core.get.call(null,map__13634_13640__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_13641))){
var map__13636_13642 = env_13641;
var map__13636_13643__$1 = (((((!((map__13636_13642 == null))))?(((((map__13636_13642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13636_13642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13636_13642):map__13636_13642);
var line_13644 = cljs.core.get.call(null,map__13636_13643__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13645 = cljs.core.get.call(null,map__13636_13643__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__13636_13642,map__13636_13643__$1,line_13644,column_13645,map__13634_13639,map__13634_13640__$1,env_13641){
return (function (m){
var minfo = (function (){var G__13638 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__13638,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__13638;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_13644 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__13636_13642,map__13636_13643__$1,line_13644,column_13645,map__13634_13639,map__13634_13640__$1,env_13641){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13645)?(column_13645 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__13636_13642,map__13636_13643__$1,line_13644,column_13645,map__13634_13639,map__13634_13640__$1,env_13641){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__13636_13642,map__13636_13643__$1,line_13644,column_13645,map__13634_13639,map__13634_13640__$1,env_13641))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__13636_13642,map__13636_13643__$1,line_13644,column_13645,map__13634_13639,map__13634_13640__$1,env_13641))
,cljs.core.sorted_map.call(null)));
});})(map__13636_13642,map__13636_13643__$1,line_13644,column_13645,map__13634_13639,map__13634_13640__$1,env_13641))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__13654 = arguments.length;
switch (G__13654) {
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
var args_arr__4662__auto__ = [];
var len__4641__auto___13661 = arguments.length;
var i__4642__auto___13662 = (0);
while(true){
if((i__4642__auto___13662 < len__4641__auto___13661)){
args_arr__4662__auto__.push((arguments[i__4642__auto___13662]));

var G__13663 = (i__4642__auto___13662 + (1));
i__4642__auto___13662 = G__13663;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4663__auto__);

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
var s_13664 = (function (){var G__13655 = a;
if((!(typeof a === 'string'))){
return G__13655.toString();
} else {
return G__13655;
}
})();
var temp__5724__auto___13665 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___13665 == null)){
} else {
var sm_data_13666 = temp__5724__auto___13665;
cljs.core.swap_BANG_.call(null,sm_data_13666,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_13666,temp__5724__auto___13665,s_13664){
return (function (p1__13646_SHARP_){
return (p1__13646_SHARP_ + s_13664.length);
});})(sm_data_13666,temp__5724__auto___13665,s_13664))
);
}

cljs.core.print.call(null,s_13664);

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

var seq__13656 = cljs.core.seq.call(null,xs);
var chunk__13657 = null;
var count__13658 = (0);
var i__13659 = (0);
while(true){
if((i__13659 < count__13658)){
var x = cljs.core._nth.call(null,chunk__13657,i__13659);
cljs.compiler.emits.call(null,x);


var G__13667 = seq__13656;
var G__13668 = chunk__13657;
var G__13669 = count__13658;
var G__13670 = (i__13659 + (1));
seq__13656 = G__13667;
chunk__13657 = G__13668;
count__13658 = G__13669;
i__13659 = G__13670;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13656);
if(temp__5720__auto__){
var seq__13656__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13656__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__13656__$1);
var G__13671 = cljs.core.chunk_rest.call(null,seq__13656__$1);
var G__13672 = c__4461__auto__;
var G__13673 = cljs.core.count.call(null,c__4461__auto__);
var G__13674 = (0);
seq__13656 = G__13671;
chunk__13657 = G__13672;
count__13658 = G__13673;
i__13659 = G__13674;
continue;
} else {
var x = cljs.core.first.call(null,seq__13656__$1);
cljs.compiler.emits.call(null,x);


var G__13675 = cljs.core.next.call(null,seq__13656__$1);
var G__13676 = null;
var G__13677 = (0);
var G__13678 = (0);
seq__13656 = G__13675;
chunk__13657 = G__13676;
count__13658 = G__13677;
i__13659 = G__13678;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq13648){
var G__13649 = cljs.core.first.call(null,seq13648);
var seq13648__$1 = cljs.core.next.call(null,seq13648);
var G__13650 = cljs.core.first.call(null,seq13648__$1);
var seq13648__$2 = cljs.core.next.call(null,seq13648__$1);
var G__13651 = cljs.core.first.call(null,seq13648__$2);
var seq13648__$3 = cljs.core.next.call(null,seq13648__$2);
var G__13652 = cljs.core.first.call(null,seq13648__$3);
var seq13648__$4 = cljs.core.next.call(null,seq13648__$3);
var G__13653 = cljs.core.first.call(null,seq13648__$4);
var seq13648__$5 = cljs.core.next.call(null,seq13648__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13649,G__13650,G__13651,G__13652,G__13653,seq13648__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__13679){
var map__13680 = p__13679;
var map__13680__$1 = (((((!((map__13680 == null))))?(((((map__13680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13680):map__13680);
var m = map__13680__$1;
var gen_line = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__13689 = arguments.length;
switch (G__13689) {
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
var args_arr__4662__auto__ = [];
var len__4641__auto___13695 = arguments.length;
var i__4642__auto___13696 = (0);
while(true){
if((i__4642__auto___13696 < len__4641__auto___13695)){
args_arr__4662__auto__.push((arguments[i__4642__auto___13696]));

var G__13697 = (i__4642__auto___13696 + (1));
i__4642__auto___13696 = G__13697;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4663__auto__);

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

var seq__13690_13698 = cljs.core.seq.call(null,xs);
var chunk__13691_13699 = null;
var count__13692_13700 = (0);
var i__13693_13701 = (0);
while(true){
if((i__13693_13701 < count__13692_13700)){
var x_13702 = cljs.core._nth.call(null,chunk__13691_13699,i__13693_13701);
cljs.compiler.emits.call(null,x_13702);


var G__13703 = seq__13690_13698;
var G__13704 = chunk__13691_13699;
var G__13705 = count__13692_13700;
var G__13706 = (i__13693_13701 + (1));
seq__13690_13698 = G__13703;
chunk__13691_13699 = G__13704;
count__13692_13700 = G__13705;
i__13693_13701 = G__13706;
continue;
} else {
var temp__5720__auto___13707 = cljs.core.seq.call(null,seq__13690_13698);
if(temp__5720__auto___13707){
var seq__13690_13708__$1 = temp__5720__auto___13707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13690_13708__$1)){
var c__4461__auto___13709 = cljs.core.chunk_first.call(null,seq__13690_13708__$1);
var G__13710 = cljs.core.chunk_rest.call(null,seq__13690_13708__$1);
var G__13711 = c__4461__auto___13709;
var G__13712 = cljs.core.count.call(null,c__4461__auto___13709);
var G__13713 = (0);
seq__13690_13698 = G__13710;
chunk__13691_13699 = G__13711;
count__13692_13700 = G__13712;
i__13693_13701 = G__13713;
continue;
} else {
var x_13714 = cljs.core.first.call(null,seq__13690_13708__$1);
cljs.compiler.emits.call(null,x_13714);


var G__13715 = cljs.core.next.call(null,seq__13690_13708__$1);
var G__13716 = null;
var G__13717 = (0);
var G__13718 = (0);
seq__13690_13698 = G__13715;
chunk__13691_13699 = G__13716;
count__13692_13700 = G__13717;
i__13693_13701 = G__13718;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq13683){
var G__13684 = cljs.core.first.call(null,seq13683);
var seq13683__$1 = cljs.core.next.call(null,seq13683);
var G__13685 = cljs.core.first.call(null,seq13683__$1);
var seq13683__$2 = cljs.core.next.call(null,seq13683__$1);
var G__13686 = cljs.core.first.call(null,seq13683__$2);
var seq13683__$3 = cljs.core.next.call(null,seq13683__$2);
var G__13687 = cljs.core.first.call(null,seq13683__$3);
var seq13683__$4 = cljs.core.next.call(null,seq13683__$3);
var G__13688 = cljs.core.first.call(null,seq13683__$4);
var seq13683__$5 = cljs.core.next.call(null,seq13683__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13684,G__13685,G__13686,G__13687,G__13688,seq13683__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13719_13723 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13720_13724 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13721_13725 = true;
var _STAR_print_fn_STAR__temp_val__13722_13726 = ((function (_STAR_print_newline_STAR__orig_val__13719_13723,_STAR_print_fn_STAR__orig_val__13720_13724,_STAR_print_newline_STAR__temp_val__13721_13725,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__13719_13723,_STAR_print_fn_STAR__orig_val__13720_13724,_STAR_print_newline_STAR__temp_val__13721_13725,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13721_13725;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13722_13726;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13720_13724;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13719_13723;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
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
var vec__13727 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__13727,(0),null);
var name = cljs.core.nth.call(null,vec__13727,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__13727,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__13727,ns,name))
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
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.type.call(null,x)))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
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
var vec__13730 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__13730,(0),null);
var flags = cljs.core.nth.call(null,vec__13730,(1),null);
var pattern = cljs.core.nth.call(null,vec__13730,(2),null);
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
var symstr = (((!((ns == null))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
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
var temp__5718__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
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
var temp__5718__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
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
return (function (p1__13733_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__13733_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__13735){
var map__13736 = p__13735;
var map__13736__$1 = (((((!((map__13736 == null))))?(((((map__13736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13736):map__13736);
var ast = map__13736__$1;
var info = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__13738 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__13738__$1 = (((((!((map__13738 == null))))?(((((map__13738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13738):map__13738);
var cenv = map__13738__$1;
var options = cljs.core.get.call(null,map__13738__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4047__auto__ = js_module_name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var reserved = (function (){var G__13740 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__13740,cljs.analyzer.es5_allowed);
} else {
return G__13740;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__13741 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__13741,reserved);
} else {
return G__13741;
}
})();
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__13742_13743 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__13742_13744__$1 = (((G__13742_13743 instanceof cljs.core.Keyword))?G__13742_13743.fqn:null);
switch (G__13742_13744__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4036__auto__;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__13746){
var map__13747 = p__13746;
var map__13747__$1 = (((((!((map__13747 == null))))?(((((map__13747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13747):map__13747);
var arg = map__13747__$1;
var env = cljs.core.get.call(null,map__13747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__13747__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__13747__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__13747__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__13749 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__13749__$1 = (((((!((map__13749 == null))))?(((((map__13749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13749):map__13749);
var name = cljs.core.get.call(null,map__13749__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__13751){
var map__13752 = p__13751;
var map__13752__$1 = (((((!((map__13752 == null))))?(((((map__13752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13752):map__13752);
var expr = cljs.core.get.call(null,map__13752__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__13752__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__13752__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__13754_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13754_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__13755){
var map__13756 = p__13755;
var map__13756__$1 = (((((!((map__13756 == null))))?(((((map__13756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13756):map__13756);
var env = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__13758){
var map__13759 = p__13758;
var map__13759__$1 = (((((!((map__13759 == null))))?(((((map__13759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13759):map__13759);
var items = cljs.core.get.call(null,map__13759__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13759__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__13761_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13761_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__13762){
var map__13763 = p__13762;
var map__13763__$1 = (((((!((map__13763 == null))))?(((((map__13763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13763):map__13763);
var items = cljs.core.get.call(null,map__13763__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___13781 = cljs.core.seq.call(null,items);
if(temp__5720__auto___13781){
var items_13782__$1 = temp__5720__auto___13781;
var vec__13765_13783 = items_13782__$1;
var seq__13766_13784 = cljs.core.seq.call(null,vec__13765_13783);
var first__13767_13785 = cljs.core.first.call(null,seq__13766_13784);
var seq__13766_13786__$1 = cljs.core.next.call(null,seq__13766_13784);
var vec__13768_13787 = first__13767_13785;
var k_13788 = cljs.core.nth.call(null,vec__13768_13787,(0),null);
var v_13789 = cljs.core.nth.call(null,vec__13768_13787,(1),null);
var r_13790 = seq__13766_13786__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_13788),"\": ",emit_js_object_val.call(null,v_13789));

var seq__13771_13791 = cljs.core.seq.call(null,r_13790);
var chunk__13772_13792 = null;
var count__13773_13793 = (0);
var i__13774_13794 = (0);
while(true){
if((i__13774_13794 < count__13773_13793)){
var vec__13775_13795 = cljs.core._nth.call(null,chunk__13772_13792,i__13774_13794);
var k_13796__$1 = cljs.core.nth.call(null,vec__13775_13795,(0),null);
var v_13797__$1 = cljs.core.nth.call(null,vec__13775_13795,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13796__$1),"\": ",emit_js_object_val.call(null,v_13797__$1));


var G__13798 = seq__13771_13791;
var G__13799 = chunk__13772_13792;
var G__13800 = count__13773_13793;
var G__13801 = (i__13774_13794 + (1));
seq__13771_13791 = G__13798;
chunk__13772_13792 = G__13799;
count__13773_13793 = G__13800;
i__13774_13794 = G__13801;
continue;
} else {
var temp__5720__auto___13802__$1 = cljs.core.seq.call(null,seq__13771_13791);
if(temp__5720__auto___13802__$1){
var seq__13771_13803__$1 = temp__5720__auto___13802__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13771_13803__$1)){
var c__4461__auto___13804 = cljs.core.chunk_first.call(null,seq__13771_13803__$1);
var G__13805 = cljs.core.chunk_rest.call(null,seq__13771_13803__$1);
var G__13806 = c__4461__auto___13804;
var G__13807 = cljs.core.count.call(null,c__4461__auto___13804);
var G__13808 = (0);
seq__13771_13791 = G__13805;
chunk__13772_13792 = G__13806;
count__13773_13793 = G__13807;
i__13774_13794 = G__13808;
continue;
} else {
var vec__13778_13809 = cljs.core.first.call(null,seq__13771_13803__$1);
var k_13810__$1 = cljs.core.nth.call(null,vec__13778_13809,(0),null);
var v_13811__$1 = cljs.core.nth.call(null,vec__13778_13809,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13810__$1),"\": ",emit_js_object_val.call(null,v_13811__$1));


var G__13812 = cljs.core.next.call(null,seq__13771_13803__$1);
var G__13813 = null;
var G__13814 = (0);
var G__13815 = (0);
seq__13771_13791 = G__13812;
chunk__13772_13792 = G__13813;
count__13773_13793 = G__13814;
i__13774_13794 = G__13815;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__13816){
var map__13817 = p__13816;
var map__13817__$1 = (((((!((map__13817 == null))))?(((((map__13817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13817):map__13817);
var keys = cljs.core.get.call(null,map__13817__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__13817__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__13817__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__13819){
var map__13820 = p__13819;
var map__13820__$1 = (((((!((map__13820 == null))))?(((((map__13820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13820):map__13820);
var items = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__13822){
var map__13823 = p__13822;
var map__13823__$1 = (((((!((map__13823 == null))))?(((((map__13823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13823):map__13823);
var expr = cljs.core.get.call(null,map__13823__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__13825){
var map__13826 = p__13825;
var map__13826__$1 = (((((!((map__13826 == null))))?(((((map__13826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13826):map__13826);
var form = cljs.core.get.call(null,map__13826__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__13826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__13828 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__13828__$1 = (((((!((map__13828 == null))))?(((((map__13828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13828):map__13828);
var op = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4047__auto__ = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4036__auto__){
var and__4036__auto____$1 = form;
if(cljs.core.truth_(and__4036__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!((const_expr == null)));
if(and__4036__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4036__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__13830 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__13830__$1 = (((((!((map__13830 == null))))?(((((map__13830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13830):map__13830);
var op = cljs.core.get.call(null,map__13830__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13830__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__13830__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4047__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!((const_expr == null)));
if(and__4036__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4036__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__13832){
var map__13833 = p__13832;
var map__13833__$1 = (((((!((map__13833 == null))))?(((((map__13833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13833):map__13833);
var test = cljs.core.get.call(null,map__13833__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__13833__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__13833__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__13833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__13833__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4047__auto__ = unchecked;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__13835){
var map__13836 = p__13835;
var map__13836__$1 = (((((!((map__13836 == null))))?(((((map__13836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13836):map__13836);
var v = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__13838_13858 = cljs.core.seq.call(null,nodes);
var chunk__13839_13859 = null;
var count__13840_13860 = (0);
var i__13841_13861 = (0);
while(true){
if((i__13841_13861 < count__13840_13860)){
var map__13842_13862 = cljs.core._nth.call(null,chunk__13839_13859,i__13841_13861);
var map__13842_13863__$1 = (((((!((map__13842_13862 == null))))?(((((map__13842_13862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13842_13862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13842_13862):map__13842_13862);
var ts_13864 = cljs.core.get.call(null,map__13842_13863__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__13843_13865 = cljs.core.get.call(null,map__13842_13863__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__13843_13866__$1 = (((((!((map__13843_13865 == null))))?(((((map__13843_13865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13843_13865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13843_13865):map__13843_13865);
var then_13867 = cljs.core.get.call(null,map__13843_13866__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__13846_13868 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_13864));
var chunk__13847_13869 = null;
var count__13848_13870 = (0);
var i__13849_13871 = (0);
while(true){
if((i__13849_13871 < count__13848_13870)){
var test_13872 = cljs.core._nth.call(null,chunk__13847_13869,i__13849_13871);
cljs.compiler.emitln.call(null,"case ",test_13872,":");


var G__13873 = seq__13846_13868;
var G__13874 = chunk__13847_13869;
var G__13875 = count__13848_13870;
var G__13876 = (i__13849_13871 + (1));
seq__13846_13868 = G__13873;
chunk__13847_13869 = G__13874;
count__13848_13870 = G__13875;
i__13849_13871 = G__13876;
continue;
} else {
var temp__5720__auto___13877 = cljs.core.seq.call(null,seq__13846_13868);
if(temp__5720__auto___13877){
var seq__13846_13878__$1 = temp__5720__auto___13877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13846_13878__$1)){
var c__4461__auto___13879 = cljs.core.chunk_first.call(null,seq__13846_13878__$1);
var G__13880 = cljs.core.chunk_rest.call(null,seq__13846_13878__$1);
var G__13881 = c__4461__auto___13879;
var G__13882 = cljs.core.count.call(null,c__4461__auto___13879);
var G__13883 = (0);
seq__13846_13868 = G__13880;
chunk__13847_13869 = G__13881;
count__13848_13870 = G__13882;
i__13849_13871 = G__13883;
continue;
} else {
var test_13884 = cljs.core.first.call(null,seq__13846_13878__$1);
cljs.compiler.emitln.call(null,"case ",test_13884,":");


var G__13885 = cljs.core.next.call(null,seq__13846_13878__$1);
var G__13886 = null;
var G__13887 = (0);
var G__13888 = (0);
seq__13846_13868 = G__13885;
chunk__13847_13869 = G__13886;
count__13848_13870 = G__13887;
i__13849_13871 = G__13888;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13867);
} else {
cljs.compiler.emitln.call(null,then_13867);
}

cljs.compiler.emitln.call(null,"break;");


var G__13889 = seq__13838_13858;
var G__13890 = chunk__13839_13859;
var G__13891 = count__13840_13860;
var G__13892 = (i__13841_13861 + (1));
seq__13838_13858 = G__13889;
chunk__13839_13859 = G__13890;
count__13840_13860 = G__13891;
i__13841_13861 = G__13892;
continue;
} else {
var temp__5720__auto___13893 = cljs.core.seq.call(null,seq__13838_13858);
if(temp__5720__auto___13893){
var seq__13838_13894__$1 = temp__5720__auto___13893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13838_13894__$1)){
var c__4461__auto___13895 = cljs.core.chunk_first.call(null,seq__13838_13894__$1);
var G__13896 = cljs.core.chunk_rest.call(null,seq__13838_13894__$1);
var G__13897 = c__4461__auto___13895;
var G__13898 = cljs.core.count.call(null,c__4461__auto___13895);
var G__13899 = (0);
seq__13838_13858 = G__13896;
chunk__13839_13859 = G__13897;
count__13840_13860 = G__13898;
i__13841_13861 = G__13899;
continue;
} else {
var map__13850_13900 = cljs.core.first.call(null,seq__13838_13894__$1);
var map__13850_13901__$1 = (((((!((map__13850_13900 == null))))?(((((map__13850_13900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13850_13900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13850_13900):map__13850_13900);
var ts_13902 = cljs.core.get.call(null,map__13850_13901__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__13851_13903 = cljs.core.get.call(null,map__13850_13901__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__13851_13904__$1 = (((((!((map__13851_13903 == null))))?(((((map__13851_13903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13851_13903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13851_13903):map__13851_13903);
var then_13905 = cljs.core.get.call(null,map__13851_13904__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__13854_13906 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_13902));
var chunk__13855_13907 = null;
var count__13856_13908 = (0);
var i__13857_13909 = (0);
while(true){
if((i__13857_13909 < count__13856_13908)){
var test_13910 = cljs.core._nth.call(null,chunk__13855_13907,i__13857_13909);
cljs.compiler.emitln.call(null,"case ",test_13910,":");


var G__13911 = seq__13854_13906;
var G__13912 = chunk__13855_13907;
var G__13913 = count__13856_13908;
var G__13914 = (i__13857_13909 + (1));
seq__13854_13906 = G__13911;
chunk__13855_13907 = G__13912;
count__13856_13908 = G__13913;
i__13857_13909 = G__13914;
continue;
} else {
var temp__5720__auto___13915__$1 = cljs.core.seq.call(null,seq__13854_13906);
if(temp__5720__auto___13915__$1){
var seq__13854_13916__$1 = temp__5720__auto___13915__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13854_13916__$1)){
var c__4461__auto___13917 = cljs.core.chunk_first.call(null,seq__13854_13916__$1);
var G__13918 = cljs.core.chunk_rest.call(null,seq__13854_13916__$1);
var G__13919 = c__4461__auto___13917;
var G__13920 = cljs.core.count.call(null,c__4461__auto___13917);
var G__13921 = (0);
seq__13854_13906 = G__13918;
chunk__13855_13907 = G__13919;
count__13856_13908 = G__13920;
i__13857_13909 = G__13921;
continue;
} else {
var test_13922 = cljs.core.first.call(null,seq__13854_13916__$1);
cljs.compiler.emitln.call(null,"case ",test_13922,":");


var G__13923 = cljs.core.next.call(null,seq__13854_13916__$1);
var G__13924 = null;
var G__13925 = (0);
var G__13926 = (0);
seq__13854_13906 = G__13923;
chunk__13855_13907 = G__13924;
count__13856_13908 = G__13925;
i__13857_13909 = G__13926;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13905);
} else {
cljs.compiler.emitln.call(null,then_13905);
}

cljs.compiler.emitln.call(null,"break;");


var G__13927 = cljs.core.next.call(null,seq__13838_13894__$1);
var G__13928 = null;
var G__13929 = (0);
var G__13930 = (0);
seq__13838_13858 = G__13927;
chunk__13839_13859 = G__13928;
count__13840_13860 = G__13929;
i__13841_13861 = G__13930;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__13931){
var map__13932 = p__13931;
var map__13932__$1 = (((((!((map__13932 == null))))?(((((map__13932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13932):map__13932);
var throw$ = cljs.core.get.call(null,map__13932__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__13932__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__13935 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__13935,(0),null);
var rstr = cljs.core.nth.call(null,vec__13935,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__13935,fstr,rstr,ret_t,axstr){
return (function (p1__13934_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13934_SHARP_);
});})(idx,vec__13935,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__13938 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13938),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__13938;
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
return (function (p1__13939_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13939_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__13940 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__13941 = cljs.core.seq.call(null,vec__13940);
var first__13942 = cljs.core.first.call(null,seq__13941);
var seq__13941__$1 = cljs.core.next.call(null,seq__13941);
var p = first__13942;
var first__13942__$1 = cljs.core.first.call(null,seq__13941__$1);
var seq__13941__$2 = cljs.core.next.call(null,seq__13941__$1);
var ts = first__13942__$1;
var first__13942__$2 = cljs.core.first.call(null,seq__13941__$2);
var seq__13941__$3 = cljs.core.next.call(null,seq__13941__$2);
var n = first__13942__$2;
var xs = seq__13941__$3;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4036__auto__){
var and__4036__auto____$1 = ts;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__13943 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__13944 = cljs.core.seq.call(null,vec__13943);
var first__13945 = cljs.core.first.call(null,seq__13944);
var seq__13944__$1 = cljs.core.next.call(null,seq__13944);
var p = first__13945;
var first__13945__$1 = cljs.core.first.call(null,seq__13944__$1);
var seq__13944__$2 = cljs.core.next.call(null,seq__13944__$1);
var ts = first__13945__$1;
var xs = seq__13944__$2;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4036__auto__){
var and__4036__auto____$1 = ts;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
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
var G__13948 = arguments.length;
switch (G__13948) {
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
var vec__13956 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__13946_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__13946_SHARP_);
} else {
return p1__13946_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__13957 = cljs.core.seq.call(null,vec__13956);
var first__13958 = cljs.core.first.call(null,seq__13957);
var seq__13957__$1 = cljs.core.next.call(null,seq__13957);
var x = first__13958;
var ys = seq__13957__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__13959 = cljs.core.seq.call(null,ys);
var chunk__13960 = null;
var count__13961 = (0);
var i__13962 = (0);
while(true){
if((i__13962 < count__13961)){
var next_line = cljs.core._nth.call(null,chunk__13960,i__13962);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__13968 = seq__13959;
var G__13969 = chunk__13960;
var G__13970 = count__13961;
var G__13971 = (i__13962 + (1));
seq__13959 = G__13968;
chunk__13960 = G__13969;
count__13961 = G__13970;
i__13962 = G__13971;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13959);
if(temp__5720__auto__){
var seq__13959__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13959__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__13959__$1);
var G__13972 = cljs.core.chunk_rest.call(null,seq__13959__$1);
var G__13973 = c__4461__auto__;
var G__13974 = cljs.core.count.call(null,c__4461__auto__);
var G__13975 = (0);
seq__13959 = G__13972;
chunk__13960 = G__13973;
count__13961 = G__13974;
i__13962 = G__13975;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__13959__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__13976 = cljs.core.next.call(null,seq__13959__$1);
var G__13977 = null;
var G__13978 = (0);
var G__13979 = (0);
seq__13959 = G__13976;
chunk__13960 = G__13977;
count__13961 = G__13978;
i__13962 = G__13979;
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

var seq__13963_13980 = cljs.core.seq.call(null,docs__$2);
var chunk__13964_13981 = null;
var count__13965_13982 = (0);
var i__13966_13983 = (0);
while(true){
if((i__13966_13983 < count__13965_13982)){
var e_13984 = cljs.core._nth.call(null,chunk__13964_13981,i__13966_13983);
if(cljs.core.truth_(e_13984)){
print_comment_lines.call(null,e_13984);
} else {
}


var G__13985 = seq__13963_13980;
var G__13986 = chunk__13964_13981;
var G__13987 = count__13965_13982;
var G__13988 = (i__13966_13983 + (1));
seq__13963_13980 = G__13985;
chunk__13964_13981 = G__13986;
count__13965_13982 = G__13987;
i__13966_13983 = G__13988;
continue;
} else {
var temp__5720__auto___13989 = cljs.core.seq.call(null,seq__13963_13980);
if(temp__5720__auto___13989){
var seq__13963_13990__$1 = temp__5720__auto___13989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13963_13990__$1)){
var c__4461__auto___13991 = cljs.core.chunk_first.call(null,seq__13963_13990__$1);
var G__13992 = cljs.core.chunk_rest.call(null,seq__13963_13990__$1);
var G__13993 = c__4461__auto___13991;
var G__13994 = cljs.core.count.call(null,c__4461__auto___13991);
var G__13995 = (0);
seq__13963_13980 = G__13992;
chunk__13964_13981 = G__13993;
count__13965_13982 = G__13994;
i__13966_13983 = G__13995;
continue;
} else {
var e_13996 = cljs.core.first.call(null,seq__13963_13990__$1);
if(cljs.core.truth_(e_13996)){
print_comment_lines.call(null,e_13996);
} else {
}


var G__13997 = cljs.core.next.call(null,seq__13963_13990__$1);
var G__13998 = null;
var G__13999 = (0);
var G__14000 = (0);
seq__13963_13980 = G__13997;
chunk__13964_13981 = G__13998;
count__13965_13982 = G__13999;
i__13966_13983 = G__14000;
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
var and__4036__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__14002_SHARP_){
return goog.string.startsWith(p1__14002_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = opts;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4036__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__14003){
var map__14004 = p__14003;
var map__14004__$1 = (((((!((map__14004 == null))))?(((((map__14004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14004):map__14004);
var doc = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4047__auto__ = init;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4036__auto__){
return test;
} else {
return and__4036__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__14006){
var map__14007 = p__14006;
var map__14007__$1 = (((((!((map__14007 == null))))?(((((map__14007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14007):map__14007);
var name = cljs.core.get.call(null,map__14007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__14007__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__14007__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__14009_14027 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__14010_14028 = null;
var count__14011_14029 = (0);
var i__14012_14030 = (0);
while(true){
if((i__14012_14030 < count__14011_14029)){
var vec__14013_14031 = cljs.core._nth.call(null,chunk__14010_14028,i__14012_14030);
var i_14032 = cljs.core.nth.call(null,vec__14013_14031,(0),null);
var param_14033 = cljs.core.nth.call(null,vec__14013_14031,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14033);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__14034 = seq__14009_14027;
var G__14035 = chunk__14010_14028;
var G__14036 = count__14011_14029;
var G__14037 = (i__14012_14030 + (1));
seq__14009_14027 = G__14034;
chunk__14010_14028 = G__14035;
count__14011_14029 = G__14036;
i__14012_14030 = G__14037;
continue;
} else {
var temp__5720__auto___14038 = cljs.core.seq.call(null,seq__14009_14027);
if(temp__5720__auto___14038){
var seq__14009_14039__$1 = temp__5720__auto___14038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14009_14039__$1)){
var c__4461__auto___14040 = cljs.core.chunk_first.call(null,seq__14009_14039__$1);
var G__14041 = cljs.core.chunk_rest.call(null,seq__14009_14039__$1);
var G__14042 = c__4461__auto___14040;
var G__14043 = cljs.core.count.call(null,c__4461__auto___14040);
var G__14044 = (0);
seq__14009_14027 = G__14041;
chunk__14010_14028 = G__14042;
count__14011_14029 = G__14043;
i__14012_14030 = G__14044;
continue;
} else {
var vec__14016_14045 = cljs.core.first.call(null,seq__14009_14039__$1);
var i_14046 = cljs.core.nth.call(null,vec__14016_14045,(0),null);
var param_14047 = cljs.core.nth.call(null,vec__14016_14045,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14047);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__14048 = cljs.core.next.call(null,seq__14009_14039__$1);
var G__14049 = null;
var G__14050 = (0);
var G__14051 = (0);
seq__14009_14027 = G__14048;
chunk__14010_14028 = G__14049;
count__14011_14029 = G__14050;
i__14012_14030 = G__14051;
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

var seq__14019_14052 = cljs.core.seq.call(null,params);
var chunk__14020_14053 = null;
var count__14021_14054 = (0);
var i__14022_14055 = (0);
while(true){
if((i__14022_14055 < count__14021_14054)){
var param_14056 = cljs.core._nth.call(null,chunk__14020_14053,i__14022_14055);
cljs.compiler.emit.call(null,param_14056);

if(cljs.core._EQ_.call(null,param_14056,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14057 = seq__14019_14052;
var G__14058 = chunk__14020_14053;
var G__14059 = count__14021_14054;
var G__14060 = (i__14022_14055 + (1));
seq__14019_14052 = G__14057;
chunk__14020_14053 = G__14058;
count__14021_14054 = G__14059;
i__14022_14055 = G__14060;
continue;
} else {
var temp__5720__auto___14061 = cljs.core.seq.call(null,seq__14019_14052);
if(temp__5720__auto___14061){
var seq__14019_14062__$1 = temp__5720__auto___14061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14019_14062__$1)){
var c__4461__auto___14063 = cljs.core.chunk_first.call(null,seq__14019_14062__$1);
var G__14064 = cljs.core.chunk_rest.call(null,seq__14019_14062__$1);
var G__14065 = c__4461__auto___14063;
var G__14066 = cljs.core.count.call(null,c__4461__auto___14063);
var G__14067 = (0);
seq__14019_14052 = G__14064;
chunk__14020_14053 = G__14065;
count__14021_14054 = G__14066;
i__14022_14055 = G__14067;
continue;
} else {
var param_14068 = cljs.core.first.call(null,seq__14019_14062__$1);
cljs.compiler.emit.call(null,param_14068);

if(cljs.core._EQ_.call(null,param_14068,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14069 = cljs.core.next.call(null,seq__14019_14062__$1);
var G__14070 = null;
var G__14071 = (0);
var G__14072 = (0);
seq__14019_14052 = G__14069;
chunk__14020_14053 = G__14070;
count__14021_14054 = G__14071;
i__14022_14055 = G__14072;
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

var seq__14023_14073 = cljs.core.seq.call(null,params);
var chunk__14024_14074 = null;
var count__14025_14075 = (0);
var i__14026_14076 = (0);
while(true){
if((i__14026_14076 < count__14025_14075)){
var param_14077 = cljs.core._nth.call(null,chunk__14024_14074,i__14026_14076);
cljs.compiler.emit.call(null,param_14077);

if(cljs.core._EQ_.call(null,param_14077,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14078 = seq__14023_14073;
var G__14079 = chunk__14024_14074;
var G__14080 = count__14025_14075;
var G__14081 = (i__14026_14076 + (1));
seq__14023_14073 = G__14078;
chunk__14024_14074 = G__14079;
count__14025_14075 = G__14080;
i__14026_14076 = G__14081;
continue;
} else {
var temp__5720__auto___14082 = cljs.core.seq.call(null,seq__14023_14073);
if(temp__5720__auto___14082){
var seq__14023_14083__$1 = temp__5720__auto___14082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14023_14083__$1)){
var c__4461__auto___14084 = cljs.core.chunk_first.call(null,seq__14023_14083__$1);
var G__14085 = cljs.core.chunk_rest.call(null,seq__14023_14083__$1);
var G__14086 = c__4461__auto___14084;
var G__14087 = cljs.core.count.call(null,c__4461__auto___14084);
var G__14088 = (0);
seq__14023_14073 = G__14085;
chunk__14024_14074 = G__14086;
count__14025_14075 = G__14087;
i__14026_14076 = G__14088;
continue;
} else {
var param_14089 = cljs.core.first.call(null,seq__14023_14083__$1);
cljs.compiler.emit.call(null,param_14089);

if(cljs.core._EQ_.call(null,param_14089,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14090 = cljs.core.next.call(null,seq__14023_14083__$1);
var G__14091 = null;
var G__14092 = (0);
var G__14093 = (0);
seq__14023_14073 = G__14090;
chunk__14024_14074 = G__14091;
count__14025_14075 = G__14092;
i__14026_14076 = G__14093;
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
var seq__14094 = cljs.core.seq.call(null,params);
var chunk__14095 = null;
var count__14096 = (0);
var i__14097 = (0);
while(true){
if((i__14097 < count__14096)){
var param = cljs.core._nth.call(null,chunk__14095,i__14097);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14098 = seq__14094;
var G__14099 = chunk__14095;
var G__14100 = count__14096;
var G__14101 = (i__14097 + (1));
seq__14094 = G__14098;
chunk__14095 = G__14099;
count__14096 = G__14100;
i__14097 = G__14101;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14094);
if(temp__5720__auto__){
var seq__14094__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14094__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__14094__$1);
var G__14102 = cljs.core.chunk_rest.call(null,seq__14094__$1);
var G__14103 = c__4461__auto__;
var G__14104 = cljs.core.count.call(null,c__4461__auto__);
var G__14105 = (0);
seq__14094 = G__14102;
chunk__14095 = G__14103;
count__14096 = G__14104;
i__14097 = G__14105;
continue;
} else {
var param = cljs.core.first.call(null,seq__14094__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14106 = cljs.core.next.call(null,seq__14094__$1);
var G__14107 = null;
var G__14108 = (0);
var G__14109 = (0);
seq__14094 = G__14106;
chunk__14095 = G__14107;
count__14096 = G__14108;
i__14097 = G__14109;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__14110){
var map__14111 = p__14110;
var map__14111__$1 = (((((!((map__14111 == null))))?(((((map__14111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14111):map__14111);
var expr = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__14113){
var map__14114 = p__14113;
var map__14114__$1 = (((((!((map__14114 == null))))?(((((map__14114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14114):map__14114);
var f = map__14114__$1;
var expr = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_14124__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14125 = cljs.compiler.munge.call(null,name_14124__$1);
var delegate_name_14126 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14125),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_14126," = function (");

var seq__14116_14127 = cljs.core.seq.call(null,params);
var chunk__14117_14128 = null;
var count__14118_14129 = (0);
var i__14119_14130 = (0);
while(true){
if((i__14119_14130 < count__14118_14129)){
var param_14131 = cljs.core._nth.call(null,chunk__14117_14128,i__14119_14130);
cljs.compiler.emit.call(null,param_14131);

if(cljs.core._EQ_.call(null,param_14131,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14132 = seq__14116_14127;
var G__14133 = chunk__14117_14128;
var G__14134 = count__14118_14129;
var G__14135 = (i__14119_14130 + (1));
seq__14116_14127 = G__14132;
chunk__14117_14128 = G__14133;
count__14118_14129 = G__14134;
i__14119_14130 = G__14135;
continue;
} else {
var temp__5720__auto___14136 = cljs.core.seq.call(null,seq__14116_14127);
if(temp__5720__auto___14136){
var seq__14116_14137__$1 = temp__5720__auto___14136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14116_14137__$1)){
var c__4461__auto___14138 = cljs.core.chunk_first.call(null,seq__14116_14137__$1);
var G__14139 = cljs.core.chunk_rest.call(null,seq__14116_14137__$1);
var G__14140 = c__4461__auto___14138;
var G__14141 = cljs.core.count.call(null,c__4461__auto___14138);
var G__14142 = (0);
seq__14116_14127 = G__14139;
chunk__14117_14128 = G__14140;
count__14118_14129 = G__14141;
i__14119_14130 = G__14142;
continue;
} else {
var param_14143 = cljs.core.first.call(null,seq__14116_14137__$1);
cljs.compiler.emit.call(null,param_14143);

if(cljs.core._EQ_.call(null,param_14143,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14144 = cljs.core.next.call(null,seq__14116_14137__$1);
var G__14145 = null;
var G__14146 = (0);
var G__14147 = (0);
seq__14116_14127 = G__14144;
chunk__14117_14128 = G__14145;
count__14118_14129 = G__14146;
i__14119_14130 = G__14147;
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

cljs.compiler.emitln.call(null,"var ",mname_14125," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_14148 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_14148,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_14126,".call(this,");

var seq__14120_14149 = cljs.core.seq.call(null,params);
var chunk__14121_14150 = null;
var count__14122_14151 = (0);
var i__14123_14152 = (0);
while(true){
if((i__14123_14152 < count__14122_14151)){
var param_14153 = cljs.core._nth.call(null,chunk__14121_14150,i__14123_14152);
cljs.compiler.emit.call(null,param_14153);

if(cljs.core._EQ_.call(null,param_14153,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14154 = seq__14120_14149;
var G__14155 = chunk__14121_14150;
var G__14156 = count__14122_14151;
var G__14157 = (i__14123_14152 + (1));
seq__14120_14149 = G__14154;
chunk__14121_14150 = G__14155;
count__14122_14151 = G__14156;
i__14123_14152 = G__14157;
continue;
} else {
var temp__5720__auto___14158 = cljs.core.seq.call(null,seq__14120_14149);
if(temp__5720__auto___14158){
var seq__14120_14159__$1 = temp__5720__auto___14158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14120_14159__$1)){
var c__4461__auto___14160 = cljs.core.chunk_first.call(null,seq__14120_14159__$1);
var G__14161 = cljs.core.chunk_rest.call(null,seq__14120_14159__$1);
var G__14162 = c__4461__auto___14160;
var G__14163 = cljs.core.count.call(null,c__4461__auto___14160);
var G__14164 = (0);
seq__14120_14149 = G__14161;
chunk__14121_14150 = G__14162;
count__14122_14151 = G__14163;
i__14123_14152 = G__14164;
continue;
} else {
var param_14165 = cljs.core.first.call(null,seq__14120_14159__$1);
cljs.compiler.emit.call(null,param_14165);

if(cljs.core._EQ_.call(null,param_14165,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14166 = cljs.core.next.call(null,seq__14120_14159__$1);
var G__14167 = null;
var G__14168 = (0);
var G__14169 = (0);
seq__14120_14149 = G__14166;
chunk__14121_14150 = G__14167;
count__14122_14151 = G__14168;
i__14123_14152 = G__14169;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_14125,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_14125,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_14124__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_14125,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_14126,";");

cljs.compiler.emitln.call(null,"return ",mname_14125,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__14173){
var map__14174 = p__14173;
var map__14174__$1 = (((((!((map__14174 == null))))?(((((map__14174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14174):map__14174);
var variadic = cljs.core.get.call(null,map__14174__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__14174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__14174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__14174__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__14174__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__14174__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__14174__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__14174,map__14174__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__14170_SHARP_){
var and__4036__auto__ = p1__14170_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14170_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__14174,map__14174__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_14209__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14210 = cljs.compiler.munge.call(null,name_14209__$1);
var maxparams_14211 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_14212 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_14209__$1,mname_14210,maxparams_14211,loop_locals,map__14174,map__14174__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14210),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_14209__$1,mname_14210,maxparams_14211,loop_locals,map__14174,map__14174__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_14213 = cljs.core.sort_by.call(null,((function (name_14209__$1,mname_14210,maxparams_14211,mmap_14212,loop_locals,map__14174,map__14174__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__14171_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__14171_SHARP_)));
});})(name_14209__$1,mname_14210,maxparams_14211,mmap_14212,loop_locals,map__14174,map__14174__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_14212));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_14210," = null;");

var seq__14176_14214 = cljs.core.seq.call(null,ms_14213);
var chunk__14177_14215 = null;
var count__14178_14216 = (0);
var i__14179_14217 = (0);
while(true){
if((i__14179_14217 < count__14178_14216)){
var vec__14180_14218 = cljs.core._nth.call(null,chunk__14177_14215,i__14179_14217);
var n_14219 = cljs.core.nth.call(null,vec__14180_14218,(0),null);
var meth_14220 = cljs.core.nth.call(null,vec__14180_14218,(1),null);
cljs.compiler.emits.call(null,"var ",n_14219," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14220))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14220);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14220);
}

cljs.compiler.emitln.call(null,";");


var G__14221 = seq__14176_14214;
var G__14222 = chunk__14177_14215;
var G__14223 = count__14178_14216;
var G__14224 = (i__14179_14217 + (1));
seq__14176_14214 = G__14221;
chunk__14177_14215 = G__14222;
count__14178_14216 = G__14223;
i__14179_14217 = G__14224;
continue;
} else {
var temp__5720__auto___14225 = cljs.core.seq.call(null,seq__14176_14214);
if(temp__5720__auto___14225){
var seq__14176_14226__$1 = temp__5720__auto___14225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14176_14226__$1)){
var c__4461__auto___14227 = cljs.core.chunk_first.call(null,seq__14176_14226__$1);
var G__14228 = cljs.core.chunk_rest.call(null,seq__14176_14226__$1);
var G__14229 = c__4461__auto___14227;
var G__14230 = cljs.core.count.call(null,c__4461__auto___14227);
var G__14231 = (0);
seq__14176_14214 = G__14228;
chunk__14177_14215 = G__14229;
count__14178_14216 = G__14230;
i__14179_14217 = G__14231;
continue;
} else {
var vec__14183_14232 = cljs.core.first.call(null,seq__14176_14226__$1);
var n_14233 = cljs.core.nth.call(null,vec__14183_14232,(0),null);
var meth_14234 = cljs.core.nth.call(null,vec__14183_14232,(1),null);
cljs.compiler.emits.call(null,"var ",n_14233," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14234))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14234);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14234);
}

cljs.compiler.emitln.call(null,";");


var G__14235 = cljs.core.next.call(null,seq__14176_14226__$1);
var G__14236 = null;
var G__14237 = (0);
var G__14238 = (0);
seq__14176_14214 = G__14235;
chunk__14177_14215 = G__14236;
count__14178_14216 = G__14237;
i__14179_14217 = G__14238;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_14210," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_14211),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_14211)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_14211));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__14186_14239 = cljs.core.seq.call(null,ms_14213);
var chunk__14187_14240 = null;
var count__14188_14241 = (0);
var i__14189_14242 = (0);
while(true){
if((i__14189_14242 < count__14188_14241)){
var vec__14190_14243 = cljs.core._nth.call(null,chunk__14187_14240,i__14189_14242);
var n_14244 = cljs.core.nth.call(null,vec__14190_14243,(0),null);
var meth_14245 = cljs.core.nth.call(null,vec__14190_14243,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14245))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14246 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14246," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14247 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14246," = new cljs.core.IndexedSeq(",a_14247,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14244,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14211)),(((cljs.core.count.call(null,maxparams_14211) > (1)))?", ":null),restarg_14246,");");
} else {
var pcnt_14248 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14245));
cljs.compiler.emitln.call(null,"case ",pcnt_14248,":");

cljs.compiler.emitln.call(null,"return ",n_14244,".call(this",(((pcnt_14248 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14248,maxparams_14211)),null,(1),null)),(2),null))),");");
}


var G__14249 = seq__14186_14239;
var G__14250 = chunk__14187_14240;
var G__14251 = count__14188_14241;
var G__14252 = (i__14189_14242 + (1));
seq__14186_14239 = G__14249;
chunk__14187_14240 = G__14250;
count__14188_14241 = G__14251;
i__14189_14242 = G__14252;
continue;
} else {
var temp__5720__auto___14253 = cljs.core.seq.call(null,seq__14186_14239);
if(temp__5720__auto___14253){
var seq__14186_14254__$1 = temp__5720__auto___14253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14186_14254__$1)){
var c__4461__auto___14255 = cljs.core.chunk_first.call(null,seq__14186_14254__$1);
var G__14256 = cljs.core.chunk_rest.call(null,seq__14186_14254__$1);
var G__14257 = c__4461__auto___14255;
var G__14258 = cljs.core.count.call(null,c__4461__auto___14255);
var G__14259 = (0);
seq__14186_14239 = G__14256;
chunk__14187_14240 = G__14257;
count__14188_14241 = G__14258;
i__14189_14242 = G__14259;
continue;
} else {
var vec__14193_14260 = cljs.core.first.call(null,seq__14186_14254__$1);
var n_14261 = cljs.core.nth.call(null,vec__14193_14260,(0),null);
var meth_14262 = cljs.core.nth.call(null,vec__14193_14260,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14262))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14263 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14263," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14264 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14263," = new cljs.core.IndexedSeq(",a_14264,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14261,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14211)),(((cljs.core.count.call(null,maxparams_14211) > (1)))?", ":null),restarg_14263,");");
} else {
var pcnt_14265 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14262));
cljs.compiler.emitln.call(null,"case ",pcnt_14265,":");

cljs.compiler.emitln.call(null,"return ",n_14261,".call(this",(((pcnt_14265 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14265,maxparams_14211)),null,(1),null)),(2),null))),");");
}


var G__14266 = cljs.core.next.call(null,seq__14186_14254__$1);
var G__14267 = null;
var G__14268 = (0);
var G__14269 = (0);
seq__14186_14239 = G__14266;
chunk__14187_14240 = G__14267;
count__14188_14241 = G__14268;
i__14189_14242 = G__14269;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_14270 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_14213)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_14270,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_14210,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_14210,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_14209__$1,mname_14210,maxparams_14211,mmap_14212,ms_14213,loop_locals,map__14174,map__14174__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__14172_SHARP_){
var vec__14196 = p1__14172_SHARP_;
var n = cljs.core.nth.call(null,vec__14196,(0),null);
var m = cljs.core.nth.call(null,vec__14196,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_14209__$1,mname_14210,maxparams_14211,mmap_14212,ms_14213,loop_locals,map__14174,map__14174__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_14213),".cljs$lang$applyTo;");
} else {
}

var seq__14199_14271 = cljs.core.seq.call(null,ms_14213);
var chunk__14200_14272 = null;
var count__14201_14273 = (0);
var i__14202_14274 = (0);
while(true){
if((i__14202_14274 < count__14201_14273)){
var vec__14203_14275 = cljs.core._nth.call(null,chunk__14200_14272,i__14202_14274);
var n_14276 = cljs.core.nth.call(null,vec__14203_14275,(0),null);
var meth_14277 = cljs.core.nth.call(null,vec__14203_14275,(1),null);
var c_14278 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14277));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14277))){
cljs.compiler.emitln.call(null,mname_14210,".cljs$core$IFn$_invoke$arity$variadic = ",n_14276,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14210,".cljs$core$IFn$_invoke$arity$",c_14278," = ",n_14276,";");
}


var G__14279 = seq__14199_14271;
var G__14280 = chunk__14200_14272;
var G__14281 = count__14201_14273;
var G__14282 = (i__14202_14274 + (1));
seq__14199_14271 = G__14279;
chunk__14200_14272 = G__14280;
count__14201_14273 = G__14281;
i__14202_14274 = G__14282;
continue;
} else {
var temp__5720__auto___14283 = cljs.core.seq.call(null,seq__14199_14271);
if(temp__5720__auto___14283){
var seq__14199_14284__$1 = temp__5720__auto___14283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14199_14284__$1)){
var c__4461__auto___14285 = cljs.core.chunk_first.call(null,seq__14199_14284__$1);
var G__14286 = cljs.core.chunk_rest.call(null,seq__14199_14284__$1);
var G__14287 = c__4461__auto___14285;
var G__14288 = cljs.core.count.call(null,c__4461__auto___14285);
var G__14289 = (0);
seq__14199_14271 = G__14286;
chunk__14200_14272 = G__14287;
count__14201_14273 = G__14288;
i__14202_14274 = G__14289;
continue;
} else {
var vec__14206_14290 = cljs.core.first.call(null,seq__14199_14284__$1);
var n_14291 = cljs.core.nth.call(null,vec__14206_14290,(0),null);
var meth_14292 = cljs.core.nth.call(null,vec__14206_14290,(1),null);
var c_14293 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14292));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14292))){
cljs.compiler.emitln.call(null,mname_14210,".cljs$core$IFn$_invoke$arity$variadic = ",n_14291,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14210,".cljs$core$IFn$_invoke$arity$",c_14293," = ",n_14291,";");
}


var G__14294 = cljs.core.next.call(null,seq__14199_14284__$1);
var G__14295 = null;
var G__14296 = (0);
var G__14297 = (0);
seq__14199_14271 = G__14294;
chunk__14200_14272 = G__14295;
count__14201_14273 = G__14296;
i__14202_14274 = G__14297;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_14210,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__14298){
var map__14299 = p__14298;
var map__14299__$1 = (((((!((map__14299 == null))))?(((((map__14299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14299):map__14299);
var statements = cljs.core.get.call(null,map__14299__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__14299__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__14299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__14301_14305 = cljs.core.seq.call(null,statements);
var chunk__14302_14306 = null;
var count__14303_14307 = (0);
var i__14304_14308 = (0);
while(true){
if((i__14304_14308 < count__14303_14307)){
var s_14309 = cljs.core._nth.call(null,chunk__14302_14306,i__14304_14308);
cljs.compiler.emitln.call(null,s_14309);


var G__14310 = seq__14301_14305;
var G__14311 = chunk__14302_14306;
var G__14312 = count__14303_14307;
var G__14313 = (i__14304_14308 + (1));
seq__14301_14305 = G__14310;
chunk__14302_14306 = G__14311;
count__14303_14307 = G__14312;
i__14304_14308 = G__14313;
continue;
} else {
var temp__5720__auto___14314 = cljs.core.seq.call(null,seq__14301_14305);
if(temp__5720__auto___14314){
var seq__14301_14315__$1 = temp__5720__auto___14314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14301_14315__$1)){
var c__4461__auto___14316 = cljs.core.chunk_first.call(null,seq__14301_14315__$1);
var G__14317 = cljs.core.chunk_rest.call(null,seq__14301_14315__$1);
var G__14318 = c__4461__auto___14316;
var G__14319 = cljs.core.count.call(null,c__4461__auto___14316);
var G__14320 = (0);
seq__14301_14305 = G__14317;
chunk__14302_14306 = G__14318;
count__14303_14307 = G__14319;
i__14304_14308 = G__14320;
continue;
} else {
var s_14321 = cljs.core.first.call(null,seq__14301_14315__$1);
cljs.compiler.emitln.call(null,s_14321);


var G__14322 = cljs.core.next.call(null,seq__14301_14315__$1);
var G__14323 = null;
var G__14324 = (0);
var G__14325 = (0);
seq__14301_14305 = G__14322;
chunk__14302_14306 = G__14323;
count__14303_14307 = G__14324;
i__14304_14308 = G__14325;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__14326){
var map__14327 = p__14326;
var map__14327__$1 = (((((!((map__14327 == null))))?(((((map__14327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14327):map__14327);
var try$ = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__14329,is_loop){
var map__14330 = p__14329;
var map__14330__$1 = (((((!((map__14330 == null))))?(((((map__14330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14330):map__14330);
var expr = cljs.core.get.call(null,map__14330__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__14330__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__14330__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__14332_14342 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__14333_14343 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__14332_14342,context,map__14330,map__14330__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__14332_14342,context,map__14330,map__14330__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__14333_14343;

try{var seq__14334_14344 = cljs.core.seq.call(null,bindings);
var chunk__14335_14345 = null;
var count__14336_14346 = (0);
var i__14337_14347 = (0);
while(true){
if((i__14337_14347 < count__14336_14346)){
var map__14338_14348 = cljs.core._nth.call(null,chunk__14335_14345,i__14337_14347);
var map__14338_14349__$1 = (((((!((map__14338_14348 == null))))?(((((map__14338_14348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14338_14348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14338_14348):map__14338_14348);
var binding_14350 = map__14338_14349__$1;
var init_14351 = cljs.core.get.call(null,map__14338_14349__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14350);

cljs.compiler.emitln.call(null," = ",init_14351,";");


var G__14352 = seq__14334_14344;
var G__14353 = chunk__14335_14345;
var G__14354 = count__14336_14346;
var G__14355 = (i__14337_14347 + (1));
seq__14334_14344 = G__14352;
chunk__14335_14345 = G__14353;
count__14336_14346 = G__14354;
i__14337_14347 = G__14355;
continue;
} else {
var temp__5720__auto___14356 = cljs.core.seq.call(null,seq__14334_14344);
if(temp__5720__auto___14356){
var seq__14334_14357__$1 = temp__5720__auto___14356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14334_14357__$1)){
var c__4461__auto___14358 = cljs.core.chunk_first.call(null,seq__14334_14357__$1);
var G__14359 = cljs.core.chunk_rest.call(null,seq__14334_14357__$1);
var G__14360 = c__4461__auto___14358;
var G__14361 = cljs.core.count.call(null,c__4461__auto___14358);
var G__14362 = (0);
seq__14334_14344 = G__14359;
chunk__14335_14345 = G__14360;
count__14336_14346 = G__14361;
i__14337_14347 = G__14362;
continue;
} else {
var map__14340_14363 = cljs.core.first.call(null,seq__14334_14357__$1);
var map__14340_14364__$1 = (((((!((map__14340_14363 == null))))?(((((map__14340_14363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14340_14363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14340_14363):map__14340_14363);
var binding_14365 = map__14340_14364__$1;
var init_14366 = cljs.core.get.call(null,map__14340_14364__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14365);

cljs.compiler.emitln.call(null," = ",init_14366,";");


var G__14367 = cljs.core.next.call(null,seq__14334_14357__$1);
var G__14368 = null;
var G__14369 = (0);
var G__14370 = (0);
seq__14334_14344 = G__14367;
chunk__14335_14345 = G__14368;
count__14336_14346 = G__14369;
i__14337_14347 = G__14370;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__14332_14342;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__14371){
var map__14372 = p__14371;
var map__14372__$1 = (((((!((map__14372 == null))))?(((((map__14372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14372):map__14372);
var frame = cljs.core.get.call(null,map__14372__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__14372__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__14372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___14374 = cljs.core.count.call(null,exprs);
var i_14375 = (0);
while(true){
if((i_14375 < n__4518__auto___14374)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_14375)," = ",exprs.call(null,i_14375),";");

var G__14376 = (i_14375 + (1));
i_14375 = G__14376;
continue;
} else {
}
break;
}

var n__4518__auto___14377 = cljs.core.count.call(null,exprs);
var i_14378 = (0);
while(true){
if((i_14378 < n__4518__auto___14377)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_14378))," = ",temps.call(null,i_14378),";");

var G__14379 = (i_14378 + (1));
i_14378 = G__14379;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__14380){
var map__14381 = p__14380;
var map__14381__$1 = (((((!((map__14381 == null))))?(((((map__14381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14381):map__14381);
var expr = cljs.core.get.call(null,map__14381__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__14381__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__14381__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__14383_14391 = cljs.core.seq.call(null,bindings);
var chunk__14384_14392 = null;
var count__14385_14393 = (0);
var i__14386_14394 = (0);
while(true){
if((i__14386_14394 < count__14385_14393)){
var map__14387_14395 = cljs.core._nth.call(null,chunk__14384_14392,i__14386_14394);
var map__14387_14396__$1 = (((((!((map__14387_14395 == null))))?(((((map__14387_14395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14387_14395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14387_14395):map__14387_14395);
var binding_14397 = map__14387_14396__$1;
var init_14398 = cljs.core.get.call(null,map__14387_14396__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14397)," = ",init_14398,";");


var G__14399 = seq__14383_14391;
var G__14400 = chunk__14384_14392;
var G__14401 = count__14385_14393;
var G__14402 = (i__14386_14394 + (1));
seq__14383_14391 = G__14399;
chunk__14384_14392 = G__14400;
count__14385_14393 = G__14401;
i__14386_14394 = G__14402;
continue;
} else {
var temp__5720__auto___14403 = cljs.core.seq.call(null,seq__14383_14391);
if(temp__5720__auto___14403){
var seq__14383_14404__$1 = temp__5720__auto___14403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14383_14404__$1)){
var c__4461__auto___14405 = cljs.core.chunk_first.call(null,seq__14383_14404__$1);
var G__14406 = cljs.core.chunk_rest.call(null,seq__14383_14404__$1);
var G__14407 = c__4461__auto___14405;
var G__14408 = cljs.core.count.call(null,c__4461__auto___14405);
var G__14409 = (0);
seq__14383_14391 = G__14406;
chunk__14384_14392 = G__14407;
count__14385_14393 = G__14408;
i__14386_14394 = G__14409;
continue;
} else {
var map__14389_14410 = cljs.core.first.call(null,seq__14383_14404__$1);
var map__14389_14411__$1 = (((((!((map__14389_14410 == null))))?(((((map__14389_14410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14389_14410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14389_14410):map__14389_14410);
var binding_14412 = map__14389_14411__$1;
var init_14413 = cljs.core.get.call(null,map__14389_14411__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14412)," = ",init_14413,";");


var G__14414 = cljs.core.next.call(null,seq__14383_14404__$1);
var G__14415 = null;
var G__14416 = (0);
var G__14417 = (0);
seq__14383_14391 = G__14414;
chunk__14384_14392 = G__14415;
count__14385_14393 = G__14416;
i__14386_14394 = G__14417;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__14420){
var map__14421 = p__14420;
var map__14421__$1 = (((((!((map__14421 == null))))?(((((map__14421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14421):map__14421);
var expr = map__14421__$1;
var f = cljs.core.get.call(null,map__14421__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__14421__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14421__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4036__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4036__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4036__auto__ = protocol;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = tag;
if(cljs.core.truth_(and__4036__auto____$1)){
var or__4047__auto__ = (function (){var and__4036__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto____$2){
var and__4036__auto____$3 = protocol;
if(cljs.core.truth_(and__4036__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4036__auto____$3;
}
} else {
return and__4036__auto____$2;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto____$2 = (function (){var or__4047__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4036__auto____$2)){
var or__4047__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
var and__4036__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4036__auto____$3){
var and__4036__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4036__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4036__auto____$4;
}
} else {
return and__4036__auto____$3;
}
}
} else {
return and__4036__auto____$2;
}
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4047__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4047__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__14423 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (arity > mfa);
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14421,map__14421__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14421,map__14421__$1,expr,f,args,env){
return (function (p1__14418_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14418_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14421,map__14421__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14421,map__14421__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14421,map__14421__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14421,map__14421__$1,expr,f,args,env){
return (function (p1__14419_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14419_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14421,map__14421__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14421,map__14421__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__14423,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__14423,(1),null);
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14426 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_14426,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14427 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_14427,args)),(((mfa_14427 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_14427,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = js_QMARK_;
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4036__auto__;
}
})())){
var fprop_14428 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_14428," ? ",f__$1,fprop_14428,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_14428," ? ",f__$1,fprop_14428,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__14429){
var map__14430 = p__14429;
var map__14430__$1 = (((((!((map__14430 == null))))?(((((map__14430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14430):map__14430);
var ctor = cljs.core.get.call(null,map__14430__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__14430__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14430__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__14432){
var map__14433 = p__14432;
var map__14433__$1 = (((((!((map__14433 == null))))?(((((map__14433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14433):map__14433);
var target = cljs.core.get.call(null,map__14433__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__14433__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__14433__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4047__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__14435 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__14435__$1 = (((((!((map__14435 == null))))?(((((map__14435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14435):map__14435);
var options = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__14436 = options;
var map__14436__$1 = (((((!((map__14436 == null))))?(((((map__14436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14436):map__14436);
var target = cljs.core.get.call(null,map__14436__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__14436__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__14437 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__14442 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__14442__$1 = (((((!((map__14442 == null))))?(((((map__14442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14442):map__14442);
var node_libs = cljs.core.get.call(null,map__14442__$1,true);
var libs_to_load = cljs.core.get.call(null,map__14442__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__14437,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__14437,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__14444_14460 = cljs.core.seq.call(null,libs_to_load);
var chunk__14445_14461 = null;
var count__14446_14462 = (0);
var i__14447_14463 = (0);
while(true){
if((i__14447_14463 < count__14446_14462)){
var lib_14464 = cljs.core._nth.call(null,chunk__14445_14461,i__14447_14463);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_14464)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14464),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14464),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14464),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14464),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_14464,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14464),"');");
}

}
}
}


var G__14465 = seq__14444_14460;
var G__14466 = chunk__14445_14461;
var G__14467 = count__14446_14462;
var G__14468 = (i__14447_14463 + (1));
seq__14444_14460 = G__14465;
chunk__14445_14461 = G__14466;
count__14446_14462 = G__14467;
i__14447_14463 = G__14468;
continue;
} else {
var temp__5720__auto___14469 = cljs.core.seq.call(null,seq__14444_14460);
if(temp__5720__auto___14469){
var seq__14444_14470__$1 = temp__5720__auto___14469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14444_14470__$1)){
var c__4461__auto___14471 = cljs.core.chunk_first.call(null,seq__14444_14470__$1);
var G__14472 = cljs.core.chunk_rest.call(null,seq__14444_14470__$1);
var G__14473 = c__4461__auto___14471;
var G__14474 = cljs.core.count.call(null,c__4461__auto___14471);
var G__14475 = (0);
seq__14444_14460 = G__14472;
chunk__14445_14461 = G__14473;
count__14446_14462 = G__14474;
i__14447_14463 = G__14475;
continue;
} else {
var lib_14476 = cljs.core.first.call(null,seq__14444_14470__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_14476)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14476),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14476),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14476),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14476),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_14476,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14476),"');");
}

}
}
}


var G__14477 = cljs.core.next.call(null,seq__14444_14470__$1);
var G__14478 = null;
var G__14479 = (0);
var G__14480 = (0);
seq__14444_14460 = G__14477;
chunk__14445_14461 = G__14478;
count__14446_14462 = G__14479;
i__14447_14463 = G__14480;
continue;
}
} else {
}
}
break;
}

var seq__14448_14481 = cljs.core.seq.call(null,node_libs);
var chunk__14449_14482 = null;
var count__14450_14483 = (0);
var i__14451_14484 = (0);
while(true){
if((i__14451_14484 < count__14450_14483)){
var lib_14485 = cljs.core._nth.call(null,chunk__14449_14482,i__14451_14484);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_14485)," = require('",lib_14485,"');");


var G__14486 = seq__14448_14481;
var G__14487 = chunk__14449_14482;
var G__14488 = count__14450_14483;
var G__14489 = (i__14451_14484 + (1));
seq__14448_14481 = G__14486;
chunk__14449_14482 = G__14487;
count__14450_14483 = G__14488;
i__14451_14484 = G__14489;
continue;
} else {
var temp__5720__auto___14490 = cljs.core.seq.call(null,seq__14448_14481);
if(temp__5720__auto___14490){
var seq__14448_14491__$1 = temp__5720__auto___14490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14448_14491__$1)){
var c__4461__auto___14492 = cljs.core.chunk_first.call(null,seq__14448_14491__$1);
var G__14493 = cljs.core.chunk_rest.call(null,seq__14448_14491__$1);
var G__14494 = c__4461__auto___14492;
var G__14495 = cljs.core.count.call(null,c__4461__auto___14492);
var G__14496 = (0);
seq__14448_14481 = G__14493;
chunk__14449_14482 = G__14494;
count__14450_14483 = G__14495;
i__14451_14484 = G__14496;
continue;
} else {
var lib_14497 = cljs.core.first.call(null,seq__14448_14491__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_14497)," = require('",lib_14497,"');");


var G__14498 = cljs.core.next.call(null,seq__14448_14491__$1);
var G__14499 = null;
var G__14500 = (0);
var G__14501 = (0);
seq__14448_14481 = G__14498;
chunk__14449_14482 = G__14499;
count__14450_14483 = G__14500;
i__14451_14484 = G__14501;
continue;
}
} else {
}
}
break;
}

var seq__14452_14502 = cljs.core.seq.call(null,global_exports_libs);
var chunk__14453_14503 = null;
var count__14454_14504 = (0);
var i__14455_14505 = (0);
while(true){
if((i__14455_14505 < count__14454_14504)){
var lib_14506 = cljs.core._nth.call(null,chunk__14453_14503,i__14455_14505);
var map__14456_14507 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_14506));
var map__14456_14508__$1 = (((((!((map__14456_14507 == null))))?(((((map__14456_14507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14456_14507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14456_14507):map__14456_14507);
var global_exports_14509 = cljs.core.get.call(null,map__14456_14508__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_14509,lib_14506);


var G__14510 = seq__14452_14502;
var G__14511 = chunk__14453_14503;
var G__14512 = count__14454_14504;
var G__14513 = (i__14455_14505 + (1));
seq__14452_14502 = G__14510;
chunk__14453_14503 = G__14511;
count__14454_14504 = G__14512;
i__14455_14505 = G__14513;
continue;
} else {
var temp__5720__auto___14514 = cljs.core.seq.call(null,seq__14452_14502);
if(temp__5720__auto___14514){
var seq__14452_14515__$1 = temp__5720__auto___14514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14452_14515__$1)){
var c__4461__auto___14516 = cljs.core.chunk_first.call(null,seq__14452_14515__$1);
var G__14517 = cljs.core.chunk_rest.call(null,seq__14452_14515__$1);
var G__14518 = c__4461__auto___14516;
var G__14519 = cljs.core.count.call(null,c__4461__auto___14516);
var G__14520 = (0);
seq__14452_14502 = G__14517;
chunk__14453_14503 = G__14518;
count__14454_14504 = G__14519;
i__14455_14505 = G__14520;
continue;
} else {
var lib_14521 = cljs.core.first.call(null,seq__14452_14515__$1);
var map__14458_14522 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_14521));
var map__14458_14523__$1 = (((((!((map__14458_14522 == null))))?(((((map__14458_14522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14458_14522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14458_14522):map__14458_14522);
var global_exports_14524 = cljs.core.get.call(null,map__14458_14523__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_14524,lib_14521);


var G__14525 = cljs.core.next.call(null,seq__14452_14515__$1);
var G__14526 = null;
var G__14527 = (0);
var G__14528 = (0);
seq__14452_14502 = G__14525;
chunk__14453_14503 = G__14526;
count__14454_14504 = G__14527;
i__14455_14505 = G__14528;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__14529){
var map__14530 = p__14529;
var map__14530__$1 = (((((!((map__14530 == null))))?(((((map__14530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14530):map__14530);
var name = cljs.core.get.call(null,map__14530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14530__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14530__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14530__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14530__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14530__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__14530__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__14532){
var map__14533 = p__14532;
var map__14533__$1 = (((((!((map__14533 == null))))?(((((map__14533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14533):map__14533);
var name = cljs.core.get.call(null,map__14533__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14533__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14533__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14533__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14533__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14533__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__14533__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__14535){
var map__14536 = p__14535;
var map__14536__$1 = (((((!((map__14536 == null))))?(((((map__14536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14536):map__14536);
var t = cljs.core.get.call(null,map__14536__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14536__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14536__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14536__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14536__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14538_14556 = cljs.core.seq.call(null,protocols);
var chunk__14539_14557 = null;
var count__14540_14558 = (0);
var i__14541_14559 = (0);
while(true){
if((i__14541_14559 < count__14540_14558)){
var protocol_14560 = cljs.core._nth.call(null,chunk__14539_14557,i__14541_14559);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14560)),"}");


var G__14561 = seq__14538_14556;
var G__14562 = chunk__14539_14557;
var G__14563 = count__14540_14558;
var G__14564 = (i__14541_14559 + (1));
seq__14538_14556 = G__14561;
chunk__14539_14557 = G__14562;
count__14540_14558 = G__14563;
i__14541_14559 = G__14564;
continue;
} else {
var temp__5720__auto___14565 = cljs.core.seq.call(null,seq__14538_14556);
if(temp__5720__auto___14565){
var seq__14538_14566__$1 = temp__5720__auto___14565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14538_14566__$1)){
var c__4461__auto___14567 = cljs.core.chunk_first.call(null,seq__14538_14566__$1);
var G__14568 = cljs.core.chunk_rest.call(null,seq__14538_14566__$1);
var G__14569 = c__4461__auto___14567;
var G__14570 = cljs.core.count.call(null,c__4461__auto___14567);
var G__14571 = (0);
seq__14538_14556 = G__14568;
chunk__14539_14557 = G__14569;
count__14540_14558 = G__14570;
i__14541_14559 = G__14571;
continue;
} else {
var protocol_14572 = cljs.core.first.call(null,seq__14538_14566__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14572)),"}");


var G__14573 = cljs.core.next.call(null,seq__14538_14566__$1);
var G__14574 = null;
var G__14575 = (0);
var G__14576 = (0);
seq__14538_14556 = G__14573;
chunk__14539_14557 = G__14574;
count__14540_14558 = G__14575;
i__14541_14559 = G__14576;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14542_14577 = cljs.core.seq.call(null,fields__$1);
var chunk__14543_14578 = null;
var count__14544_14579 = (0);
var i__14545_14580 = (0);
while(true){
if((i__14545_14580 < count__14544_14579)){
var fld_14581 = cljs.core._nth.call(null,chunk__14543_14578,i__14545_14580);
cljs.compiler.emitln.call(null,"this.",fld_14581," = ",fld_14581,";");


var G__14582 = seq__14542_14577;
var G__14583 = chunk__14543_14578;
var G__14584 = count__14544_14579;
var G__14585 = (i__14545_14580 + (1));
seq__14542_14577 = G__14582;
chunk__14543_14578 = G__14583;
count__14544_14579 = G__14584;
i__14545_14580 = G__14585;
continue;
} else {
var temp__5720__auto___14586 = cljs.core.seq.call(null,seq__14542_14577);
if(temp__5720__auto___14586){
var seq__14542_14587__$1 = temp__5720__auto___14586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14542_14587__$1)){
var c__4461__auto___14588 = cljs.core.chunk_first.call(null,seq__14542_14587__$1);
var G__14589 = cljs.core.chunk_rest.call(null,seq__14542_14587__$1);
var G__14590 = c__4461__auto___14588;
var G__14591 = cljs.core.count.call(null,c__4461__auto___14588);
var G__14592 = (0);
seq__14542_14577 = G__14589;
chunk__14543_14578 = G__14590;
count__14544_14579 = G__14591;
i__14545_14580 = G__14592;
continue;
} else {
var fld_14593 = cljs.core.first.call(null,seq__14542_14587__$1);
cljs.compiler.emitln.call(null,"this.",fld_14593," = ",fld_14593,";");


var G__14594 = cljs.core.next.call(null,seq__14542_14587__$1);
var G__14595 = null;
var G__14596 = (0);
var G__14597 = (0);
seq__14542_14577 = G__14594;
chunk__14543_14578 = G__14595;
count__14544_14579 = G__14596;
i__14545_14580 = G__14597;
continue;
}
} else {
}
}
break;
}

var seq__14546_14598 = cljs.core.seq.call(null,pmasks);
var chunk__14547_14599 = null;
var count__14548_14600 = (0);
var i__14549_14601 = (0);
while(true){
if((i__14549_14601 < count__14548_14600)){
var vec__14550_14602 = cljs.core._nth.call(null,chunk__14547_14599,i__14549_14601);
var pno_14603 = cljs.core.nth.call(null,vec__14550_14602,(0),null);
var pmask_14604 = cljs.core.nth.call(null,vec__14550_14602,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14603,"$ = ",pmask_14604,";");


var G__14605 = seq__14546_14598;
var G__14606 = chunk__14547_14599;
var G__14607 = count__14548_14600;
var G__14608 = (i__14549_14601 + (1));
seq__14546_14598 = G__14605;
chunk__14547_14599 = G__14606;
count__14548_14600 = G__14607;
i__14549_14601 = G__14608;
continue;
} else {
var temp__5720__auto___14609 = cljs.core.seq.call(null,seq__14546_14598);
if(temp__5720__auto___14609){
var seq__14546_14610__$1 = temp__5720__auto___14609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14546_14610__$1)){
var c__4461__auto___14611 = cljs.core.chunk_first.call(null,seq__14546_14610__$1);
var G__14612 = cljs.core.chunk_rest.call(null,seq__14546_14610__$1);
var G__14613 = c__4461__auto___14611;
var G__14614 = cljs.core.count.call(null,c__4461__auto___14611);
var G__14615 = (0);
seq__14546_14598 = G__14612;
chunk__14547_14599 = G__14613;
count__14548_14600 = G__14614;
i__14549_14601 = G__14615;
continue;
} else {
var vec__14553_14616 = cljs.core.first.call(null,seq__14546_14610__$1);
var pno_14617 = cljs.core.nth.call(null,vec__14553_14616,(0),null);
var pmask_14618 = cljs.core.nth.call(null,vec__14553_14616,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14617,"$ = ",pmask_14618,";");


var G__14619 = cljs.core.next.call(null,seq__14546_14610__$1);
var G__14620 = null;
var G__14621 = (0);
var G__14622 = (0);
seq__14546_14598 = G__14619;
chunk__14547_14599 = G__14620;
count__14548_14600 = G__14621;
i__14549_14601 = G__14622;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__14623){
var map__14624 = p__14623;
var map__14624__$1 = (((((!((map__14624 == null))))?(((((map__14624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14624):map__14624);
var t = cljs.core.get.call(null,map__14624__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14624__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14624__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14624__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14624__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14626_14644 = cljs.core.seq.call(null,protocols);
var chunk__14627_14645 = null;
var count__14628_14646 = (0);
var i__14629_14647 = (0);
while(true){
if((i__14629_14647 < count__14628_14646)){
var protocol_14648 = cljs.core._nth.call(null,chunk__14627_14645,i__14629_14647);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14648)),"}");


var G__14649 = seq__14626_14644;
var G__14650 = chunk__14627_14645;
var G__14651 = count__14628_14646;
var G__14652 = (i__14629_14647 + (1));
seq__14626_14644 = G__14649;
chunk__14627_14645 = G__14650;
count__14628_14646 = G__14651;
i__14629_14647 = G__14652;
continue;
} else {
var temp__5720__auto___14653 = cljs.core.seq.call(null,seq__14626_14644);
if(temp__5720__auto___14653){
var seq__14626_14654__$1 = temp__5720__auto___14653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14626_14654__$1)){
var c__4461__auto___14655 = cljs.core.chunk_first.call(null,seq__14626_14654__$1);
var G__14656 = cljs.core.chunk_rest.call(null,seq__14626_14654__$1);
var G__14657 = c__4461__auto___14655;
var G__14658 = cljs.core.count.call(null,c__4461__auto___14655);
var G__14659 = (0);
seq__14626_14644 = G__14656;
chunk__14627_14645 = G__14657;
count__14628_14646 = G__14658;
i__14629_14647 = G__14659;
continue;
} else {
var protocol_14660 = cljs.core.first.call(null,seq__14626_14654__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14660)),"}");


var G__14661 = cljs.core.next.call(null,seq__14626_14654__$1);
var G__14662 = null;
var G__14663 = (0);
var G__14664 = (0);
seq__14626_14644 = G__14661;
chunk__14627_14645 = G__14662;
count__14628_14646 = G__14663;
i__14629_14647 = G__14664;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14630_14665 = cljs.core.seq.call(null,fields__$1);
var chunk__14631_14666 = null;
var count__14632_14667 = (0);
var i__14633_14668 = (0);
while(true){
if((i__14633_14668 < count__14632_14667)){
var fld_14669 = cljs.core._nth.call(null,chunk__14631_14666,i__14633_14668);
cljs.compiler.emitln.call(null,"this.",fld_14669," = ",fld_14669,";");


var G__14670 = seq__14630_14665;
var G__14671 = chunk__14631_14666;
var G__14672 = count__14632_14667;
var G__14673 = (i__14633_14668 + (1));
seq__14630_14665 = G__14670;
chunk__14631_14666 = G__14671;
count__14632_14667 = G__14672;
i__14633_14668 = G__14673;
continue;
} else {
var temp__5720__auto___14674 = cljs.core.seq.call(null,seq__14630_14665);
if(temp__5720__auto___14674){
var seq__14630_14675__$1 = temp__5720__auto___14674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14630_14675__$1)){
var c__4461__auto___14676 = cljs.core.chunk_first.call(null,seq__14630_14675__$1);
var G__14677 = cljs.core.chunk_rest.call(null,seq__14630_14675__$1);
var G__14678 = c__4461__auto___14676;
var G__14679 = cljs.core.count.call(null,c__4461__auto___14676);
var G__14680 = (0);
seq__14630_14665 = G__14677;
chunk__14631_14666 = G__14678;
count__14632_14667 = G__14679;
i__14633_14668 = G__14680;
continue;
} else {
var fld_14681 = cljs.core.first.call(null,seq__14630_14675__$1);
cljs.compiler.emitln.call(null,"this.",fld_14681," = ",fld_14681,";");


var G__14682 = cljs.core.next.call(null,seq__14630_14675__$1);
var G__14683 = null;
var G__14684 = (0);
var G__14685 = (0);
seq__14630_14665 = G__14682;
chunk__14631_14666 = G__14683;
count__14632_14667 = G__14684;
i__14633_14668 = G__14685;
continue;
}
} else {
}
}
break;
}

var seq__14634_14686 = cljs.core.seq.call(null,pmasks);
var chunk__14635_14687 = null;
var count__14636_14688 = (0);
var i__14637_14689 = (0);
while(true){
if((i__14637_14689 < count__14636_14688)){
var vec__14638_14690 = cljs.core._nth.call(null,chunk__14635_14687,i__14637_14689);
var pno_14691 = cljs.core.nth.call(null,vec__14638_14690,(0),null);
var pmask_14692 = cljs.core.nth.call(null,vec__14638_14690,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14691,"$ = ",pmask_14692,";");


var G__14693 = seq__14634_14686;
var G__14694 = chunk__14635_14687;
var G__14695 = count__14636_14688;
var G__14696 = (i__14637_14689 + (1));
seq__14634_14686 = G__14693;
chunk__14635_14687 = G__14694;
count__14636_14688 = G__14695;
i__14637_14689 = G__14696;
continue;
} else {
var temp__5720__auto___14697 = cljs.core.seq.call(null,seq__14634_14686);
if(temp__5720__auto___14697){
var seq__14634_14698__$1 = temp__5720__auto___14697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14634_14698__$1)){
var c__4461__auto___14699 = cljs.core.chunk_first.call(null,seq__14634_14698__$1);
var G__14700 = cljs.core.chunk_rest.call(null,seq__14634_14698__$1);
var G__14701 = c__4461__auto___14699;
var G__14702 = cljs.core.count.call(null,c__4461__auto___14699);
var G__14703 = (0);
seq__14634_14686 = G__14700;
chunk__14635_14687 = G__14701;
count__14636_14688 = G__14702;
i__14637_14689 = G__14703;
continue;
} else {
var vec__14641_14704 = cljs.core.first.call(null,seq__14634_14698__$1);
var pno_14705 = cljs.core.nth.call(null,vec__14641_14704,(0),null);
var pmask_14706 = cljs.core.nth.call(null,vec__14641_14704,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14705,"$ = ",pmask_14706,";");


var G__14707 = cljs.core.next.call(null,seq__14634_14698__$1);
var G__14708 = null;
var G__14709 = (0);
var G__14710 = (0);
seq__14634_14686 = G__14707;
chunk__14635_14687 = G__14708;
count__14636_14688 = G__14709;
i__14637_14689 = G__14710;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__14711){
var map__14712 = p__14711;
var map__14712__$1 = (((((!((map__14712 == null))))?(((((map__14712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14712):map__14712);
var target = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__14714){
var map__14715 = p__14714;
var map__14715__$1 = (((((!((map__14715 == null))))?(((((map__14715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14715):map__14715);
var op = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__12409__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12409__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__14721 = cljs.core.seq.call(null,table);
var chunk__14722 = null;
var count__14723 = (0);
var i__14724 = (0);
while(true){
if((i__14724 < count__14723)){
var vec__14725 = cljs.core._nth.call(null,chunk__14722,i__14724);
var sym = cljs.core.nth.call(null,vec__14725,(0),null);
var value = cljs.core.nth.call(null,vec__14725,(1),null);
var ns_14731 = cljs.core.namespace.call(null,sym);
var name_14732 = cljs.core.name.call(null,sym);
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


var G__14733 = seq__14721;
var G__14734 = chunk__14722;
var G__14735 = count__14723;
var G__14736 = (i__14724 + (1));
seq__14721 = G__14733;
chunk__14722 = G__14734;
count__14723 = G__14735;
i__14724 = G__14736;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14721);
if(temp__5720__auto__){
var seq__14721__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14721__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__14721__$1);
var G__14737 = cljs.core.chunk_rest.call(null,seq__14721__$1);
var G__14738 = c__4461__auto__;
var G__14739 = cljs.core.count.call(null,c__4461__auto__);
var G__14740 = (0);
seq__14721 = G__14737;
chunk__14722 = G__14738;
count__14723 = G__14739;
i__14724 = G__14740;
continue;
} else {
var vec__14728 = cljs.core.first.call(null,seq__14721__$1);
var sym = cljs.core.nth.call(null,vec__14728,(0),null);
var value = cljs.core.nth.call(null,vec__14728,(1),null);
var ns_14741 = cljs.core.namespace.call(null,sym);
var name_14742 = cljs.core.name.call(null,sym);
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


var G__14743 = cljs.core.next.call(null,seq__14721__$1);
var G__14744 = null;
var G__14745 = (0);
var G__14746 = (0);
seq__14721 = G__14743;
chunk__14722 = G__14744;
count__14723 = G__14745;
i__14724 = G__14746;
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
var G__14748 = arguments.length;
switch (G__14748) {
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
var k_14753 = cljs.core.first.call(null,ks);
var vec__14749_14754 = cljs.core.conj.call(null,prefix,k_14753);
var top_14755 = cljs.core.nth.call(null,vec__14749_14754,(0),null);
var prefix_SINGLEQUOTE__14756 = vec__14749_14754;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_14753)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__14756) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_14755)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_14755)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__14756)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_14755);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__14756)),";");
}
} else {
}

var m_14757 = cljs.core.get.call(null,externs,k_14753);
if(cljs.core.empty_QMARK_.call(null,m_14757)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__14756,m_14757,top_level,known_externs);
}

var G__14758 = cljs.core.next.call(null,ks);
ks = G__14758;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
