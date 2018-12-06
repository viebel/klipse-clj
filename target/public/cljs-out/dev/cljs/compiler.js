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
var map__34685 = s;
var map__34685__$1 = ((((!((map__34685 == null)))?(((((map__34685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34685):map__34685);
var name = cljs.core.get.call(null,map__34685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__34685__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__34688 = info;
var map__34689 = G__34688;
var map__34689__$1 = ((((!((map__34689 == null)))?(((((map__34689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34689):map__34689);
var shadow = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__34688__$1 = G__34688;
while(true){
var d__$2 = d__$1;
var map__34691 = G__34688__$1;
var map__34691__$1 = ((((!((map__34691 == null)))?(((((map__34691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34691):map__34691);
var shadow__$1 = cljs.core.get.call(null,map__34691__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__34693 = (d__$2 + (1));
var G__34694 = shadow__$1;
d__$1 = G__34693;
G__34688__$1 = G__34694;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__34695){
var map__34696 = p__34695;
var map__34696__$1 = ((((!((map__34696 == null)))?(((((map__34696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34696):map__34696);
var name_var = map__34696__$1;
var name = cljs.core.get.call(null,map__34696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__34696__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__34698 = info;
var map__34698__$1 = ((((!((map__34698 == null)))?(((((map__34698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34698):map__34698);
var ns = cljs.core.get.call(null,map__34698__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__34698__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__34701 = arguments.length;
switch (G__34701) {
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
var G__34703 = cp;
switch (G__34703) {
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
var seq__34705_34709 = cljs.core.seq.call(null,s);
var chunk__34706_34710 = null;
var count__34707_34711 = (0);
var i__34708_34712 = (0);
while(true){
if((i__34708_34712 < count__34707_34711)){
var c_34713 = cljs.core._nth.call(null,chunk__34706_34710,i__34708_34712);
sb.append(cljs.compiler.escape_char.call(null,c_34713));


var G__34714 = seq__34705_34709;
var G__34715 = chunk__34706_34710;
var G__34716 = count__34707_34711;
var G__34717 = (i__34708_34712 + (1));
seq__34705_34709 = G__34714;
chunk__34706_34710 = G__34715;
count__34707_34711 = G__34716;
i__34708_34712 = G__34717;
continue;
} else {
var temp__5457__auto___34718 = cljs.core.seq.call(null,seq__34705_34709);
if(temp__5457__auto___34718){
var seq__34705_34719__$1 = temp__5457__auto___34718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34705_34719__$1)){
var c__4319__auto___34720 = cljs.core.chunk_first.call(null,seq__34705_34719__$1);
var G__34721 = cljs.core.chunk_rest.call(null,seq__34705_34719__$1);
var G__34722 = c__4319__auto___34720;
var G__34723 = cljs.core.count.call(null,c__4319__auto___34720);
var G__34724 = (0);
seq__34705_34709 = G__34721;
chunk__34706_34710 = G__34722;
count__34707_34711 = G__34723;
i__34708_34712 = G__34724;
continue;
} else {
var c_34725 = cljs.core.first.call(null,seq__34705_34719__$1);
sb.append(cljs.compiler.escape_char.call(null,c_34725));


var G__34726 = cljs.core.next.call(null,seq__34705_34719__$1);
var G__34727 = null;
var G__34728 = (0);
var G__34729 = (0);
seq__34705_34709 = G__34726;
chunk__34706_34710 = G__34727;
count__34707_34711 = G__34728;
i__34708_34712 = G__34729;
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
var val__9457__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__9457__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__34730_34735 = ast;
var map__34730_34736__$1 = ((((!((map__34730_34735 == null)))?(((((map__34730_34735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34730_34735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34730_34735):map__34730_34735);
var env_34737 = cljs.core.get.call(null,map__34730_34736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_34737))){
var map__34732_34738 = env_34737;
var map__34732_34739__$1 = ((((!((map__34732_34738 == null)))?(((((map__34732_34738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34732_34738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34732_34738):map__34732_34738);
var line_34740 = cljs.core.get.call(null,map__34732_34739__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34741 = cljs.core.get.call(null,map__34732_34739__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__34732_34738,map__34732_34739__$1,line_34740,column_34741,map__34730_34735,map__34730_34736__$1,env_34737,val__9457__auto__){
return (function (m){
var minfo = (function (){var G__34734 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__34734,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__34734;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_34740 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__34732_34738,map__34732_34739__$1,line_34740,column_34741,map__34730_34735,map__34730_34736__$1,env_34737,val__9457__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_34741)?(column_34741 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__34732_34738,map__34732_34739__$1,line_34740,column_34741,map__34730_34735,map__34730_34736__$1,env_34737,val__9457__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__34732_34738,map__34732_34739__$1,line_34740,column_34741,map__34730_34735,map__34730_34736__$1,env_34737,val__9457__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__34732_34738,map__34732_34739__$1,line_34740,column_34741,map__34730_34735,map__34730_34736__$1,env_34737,val__9457__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__34732_34738,map__34732_34739__$1,line_34740,column_34741,map__34730_34735,map__34730_34736__$1,env_34737,val__9457__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__9457__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34748 = arguments.length;
var i__4500__auto___34749 = (0);
while(true){
if((i__4500__auto___34749 < len__4499__auto___34748)){
args__4502__auto__.push((arguments[i__4500__auto___34749]));

var G__34750 = (i__4500__auto___34749 + (1));
i__4500__auto___34749 = G__34750;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__34744_34751 = cljs.core.seq.call(null,xs);
var chunk__34745_34752 = null;
var count__34746_34753 = (0);
var i__34747_34754 = (0);
while(true){
if((i__34747_34754 < count__34746_34753)){
var x_34755 = cljs.core._nth.call(null,chunk__34745_34752,i__34747_34754);
if((x_34755 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_34755)){
cljs.compiler.emit.call(null,x_34755);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_34755)){
cljs.core.apply.call(null,cljs.compiler.emits,x_34755);
} else {
if(goog.isFunction(x_34755)){
x_34755.call(null);
} else {
var s_34756 = cljs.core.print_str.call(null,x_34755);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__34744_34751,chunk__34745_34752,count__34746_34753,i__34747_34754,s_34756,x_34755){
return (function (p1__34742_SHARP_){
return (p1__34742_SHARP_ + cljs.core.count.call(null,s_34756));
});})(seq__34744_34751,chunk__34745_34752,count__34746_34753,i__34747_34754,s_34756,x_34755))
);
}

cljs.core.print.call(null,s_34756);

}
}
}
}


var G__34757 = seq__34744_34751;
var G__34758 = chunk__34745_34752;
var G__34759 = count__34746_34753;
var G__34760 = (i__34747_34754 + (1));
seq__34744_34751 = G__34757;
chunk__34745_34752 = G__34758;
count__34746_34753 = G__34759;
i__34747_34754 = G__34760;
continue;
} else {
var temp__5457__auto___34761 = cljs.core.seq.call(null,seq__34744_34751);
if(temp__5457__auto___34761){
var seq__34744_34762__$1 = temp__5457__auto___34761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34744_34762__$1)){
var c__4319__auto___34763 = cljs.core.chunk_first.call(null,seq__34744_34762__$1);
var G__34764 = cljs.core.chunk_rest.call(null,seq__34744_34762__$1);
var G__34765 = c__4319__auto___34763;
var G__34766 = cljs.core.count.call(null,c__4319__auto___34763);
var G__34767 = (0);
seq__34744_34751 = G__34764;
chunk__34745_34752 = G__34765;
count__34746_34753 = G__34766;
i__34747_34754 = G__34767;
continue;
} else {
var x_34768 = cljs.core.first.call(null,seq__34744_34762__$1);
if((x_34768 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_34768)){
cljs.compiler.emit.call(null,x_34768);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_34768)){
cljs.core.apply.call(null,cljs.compiler.emits,x_34768);
} else {
if(goog.isFunction(x_34768)){
x_34768.call(null);
} else {
var s_34769 = cljs.core.print_str.call(null,x_34768);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__34744_34751,chunk__34745_34752,count__34746_34753,i__34747_34754,s_34769,x_34768,seq__34744_34762__$1,temp__5457__auto___34761){
return (function (p1__34742_SHARP_){
return (p1__34742_SHARP_ + cljs.core.count.call(null,s_34769));
});})(seq__34744_34751,chunk__34745_34752,count__34746_34753,i__34747_34754,s_34769,x_34768,seq__34744_34762__$1,temp__5457__auto___34761))
);
}

cljs.core.print.call(null,s_34769);

}
}
}
}


var G__34770 = cljs.core.next.call(null,seq__34744_34762__$1);
var G__34771 = null;
var G__34772 = (0);
var G__34773 = (0);
seq__34744_34751 = G__34770;
chunk__34745_34752 = G__34771;
count__34746_34753 = G__34772;
i__34747_34754 = G__34773;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq34743){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34743));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34779 = arguments.length;
var i__4500__auto___34780 = (0);
while(true){
if((i__4500__auto___34780 < len__4499__auto___34779)){
args__4502__auto__.push((arguments[i__4500__auto___34780]));

var G__34781 = (i__4500__auto___34780 + (1));
i__4500__auto___34780 = G__34781;
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

var _STAR_flush_on_newline_STAR_34775_34782 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_34775_34782;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__34776){
var map__34777 = p__34776;
var map__34777__$1 = ((((!((map__34777 == null)))?(((((map__34777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34777):map__34777);
var m = map__34777__$1;
var gen_line = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq34774){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34774));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34783_34785 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34784_34786 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34783_34785,_STAR_print_fn_STAR_34784_34786,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_34783_34785,_STAR_print_fn_STAR_34784_34786,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34784_34786;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34783_34785;
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
var vec__34787 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__34787,(0),null);
var flags = cljs.core.nth.call(null,vec__34787,(1),null);
var pattern = cljs.core.nth.call(null,vec__34787,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__34791){
var map__34792 = p__34791;
var map__34792__$1 = ((((!((map__34792 == null)))?(((((map__34792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34792):map__34792);
var ast = map__34792__$1;
var info = cljs.core.get.call(null,map__34792__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__34792__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__34792__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__34794 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__34794__$1 = ((((!((map__34794 == null)))?(((((map__34794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34794):map__34794);
var cenv = map__34794__$1;
var options = cljs.core.get.call(null,map__34794__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__34796 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__34796,cljs.analyzer.es5_allowed);
} else {
return G__34796;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__34797 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__34797,reserved);
} else {
return G__34797;
}
})();
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__34798_34799 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__34798_34800__$1 = (((G__34798_34799 instanceof cljs.core.Keyword))?G__34798_34799.fqn:null);
switch (G__34798_34800__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__34802){
var map__34803 = p__34802;
var map__34803__$1 = ((((!((map__34803 == null)))?(((((map__34803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34803):map__34803);
var arg = map__34803__$1;
var env = cljs.core.get.call(null,map__34803__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__34803__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__34803__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__34803__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__34805 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__34805__$1 = ((((!((map__34805 == null)))?(((((map__34805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34805):map__34805);
var name = cljs.core.get.call(null,map__34805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__34807){
var map__34808 = p__34807;
var map__34808__$1 = ((((!((map__34808 == null)))?(((((map__34808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34808):map__34808);
var expr = cljs.core.get.call(null,map__34808__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__34808__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__34808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__34810_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__34810_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__34811){
var map__34812 = p__34811;
var map__34812__$1 = ((((!((map__34812 == null)))?(((((map__34812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34812):map__34812);
var env = cljs.core.get.call(null,map__34812__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__34812__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__34812__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__34814){
var map__34815 = p__34814;
var map__34815__$1 = ((((!((map__34815 == null)))?(((((map__34815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34815):map__34815);
var items = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__34817){
var map__34818 = p__34817;
var map__34818__$1 = ((((!((map__34818 == null)))?(((((map__34818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34818):map__34818);
var items = cljs.core.get.call(null,map__34818__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_34820 = cljs.core.count.call(null,items);
if((cnt_34820 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_34820,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__34821_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__34821_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__34822){
var map__34823 = p__34822;
var map__34823__$1 = ((((!((map__34823 == null)))?(((((map__34823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34823):map__34823);
var items = cljs.core.get.call(null,map__34823__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34823__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__34825){
var map__34826 = p__34825;
var map__34826__$1 = ((((!((map__34826 == null)))?(((((map__34826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34826):map__34826);
var items = cljs.core.get.call(null,map__34826__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__34826__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__34826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___34844 = cljs.core.seq.call(null,items);
if(temp__5457__auto___34844){
var items_34845__$1 = temp__5457__auto___34844;
var vec__34828_34846 = items_34845__$1;
var seq__34829_34847 = cljs.core.seq.call(null,vec__34828_34846);
var first__34830_34848 = cljs.core.first.call(null,seq__34829_34847);
var seq__34829_34849__$1 = cljs.core.next.call(null,seq__34829_34847);
var vec__34831_34850 = first__34830_34848;
var k_34851 = cljs.core.nth.call(null,vec__34831_34850,(0),null);
var v_34852 = cljs.core.nth.call(null,vec__34831_34850,(1),null);
var r_34853 = seq__34829_34849__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_34851),"\": ",v_34852);

var seq__34834_34854 = cljs.core.seq.call(null,r_34853);
var chunk__34835_34855 = null;
var count__34836_34856 = (0);
var i__34837_34857 = (0);
while(true){
if((i__34837_34857 < count__34836_34856)){
var vec__34838_34858 = cljs.core._nth.call(null,chunk__34835_34855,i__34837_34857);
var k_34859__$1 = cljs.core.nth.call(null,vec__34838_34858,(0),null);
var v_34860__$1 = cljs.core.nth.call(null,vec__34838_34858,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_34859__$1),"\": ",v_34860__$1);


var G__34861 = seq__34834_34854;
var G__34862 = chunk__34835_34855;
var G__34863 = count__34836_34856;
var G__34864 = (i__34837_34857 + (1));
seq__34834_34854 = G__34861;
chunk__34835_34855 = G__34862;
count__34836_34856 = G__34863;
i__34837_34857 = G__34864;
continue;
} else {
var temp__5457__auto___34865__$1 = cljs.core.seq.call(null,seq__34834_34854);
if(temp__5457__auto___34865__$1){
var seq__34834_34866__$1 = temp__5457__auto___34865__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34834_34866__$1)){
var c__4319__auto___34867 = cljs.core.chunk_first.call(null,seq__34834_34866__$1);
var G__34868 = cljs.core.chunk_rest.call(null,seq__34834_34866__$1);
var G__34869 = c__4319__auto___34867;
var G__34870 = cljs.core.count.call(null,c__4319__auto___34867);
var G__34871 = (0);
seq__34834_34854 = G__34868;
chunk__34835_34855 = G__34869;
count__34836_34856 = G__34870;
i__34837_34857 = G__34871;
continue;
} else {
var vec__34841_34872 = cljs.core.first.call(null,seq__34834_34866__$1);
var k_34873__$1 = cljs.core.nth.call(null,vec__34841_34872,(0),null);
var v_34874__$1 = cljs.core.nth.call(null,vec__34841_34872,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_34873__$1),"\": ",v_34874__$1);


var G__34875 = cljs.core.next.call(null,seq__34834_34866__$1);
var G__34876 = null;
var G__34877 = (0);
var G__34878 = (0);
seq__34834_34854 = G__34875;
chunk__34835_34855 = G__34876;
count__34836_34856 = G__34877;
i__34837_34857 = G__34878;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__34879){
var map__34880 = p__34879;
var map__34880__$1 = ((((!((map__34880 == null)))?(((((map__34880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34880):map__34880);
var items = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__34882){
var map__34883 = p__34882;
var map__34883__$1 = ((((!((map__34883 == null)))?(((((map__34883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34883):map__34883);
var form = cljs.core.get.call(null,map__34883__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__34883__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__34885){
var map__34886 = p__34885;
var map__34886__$1 = ((((!((map__34886 == null)))?(((((map__34886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34886):map__34886);
var op = cljs.core.get.call(null,map__34886__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__34886__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__34886__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__34888){
var map__34889 = p__34888;
var map__34889__$1 = ((((!((map__34889 == null)))?(((((map__34889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34889):map__34889);
var op = cljs.core.get.call(null,map__34889__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__34889__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__34889__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__34891){
var map__34892 = p__34891;
var map__34892__$1 = ((((!((map__34892 == null)))?(((((map__34892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34892):map__34892);
var test = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__34894){
var map__34895 = p__34894;
var map__34895__$1 = ((((!((map__34895 == null)))?(((((map__34895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34895):map__34895);
var v = cljs.core.get.call(null,map__34895__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__34895__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__34895__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__34895__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__34895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__34897_34915 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__34898_34916 = null;
var count__34899_34917 = (0);
var i__34900_34918 = (0);
while(true){
if((i__34900_34918 < count__34899_34917)){
var vec__34901_34919 = cljs.core._nth.call(null,chunk__34898_34916,i__34900_34918);
var ts_34920 = cljs.core.nth.call(null,vec__34901_34919,(0),null);
var then_34921 = cljs.core.nth.call(null,vec__34901_34919,(1),null);
var seq__34904_34922 = cljs.core.seq.call(null,ts_34920);
var chunk__34905_34923 = null;
var count__34906_34924 = (0);
var i__34907_34925 = (0);
while(true){
if((i__34907_34925 < count__34906_34924)){
var test_34926 = cljs.core._nth.call(null,chunk__34905_34923,i__34907_34925);
cljs.compiler.emitln.call(null,"case ",test_34926,":");


var G__34927 = seq__34904_34922;
var G__34928 = chunk__34905_34923;
var G__34929 = count__34906_34924;
var G__34930 = (i__34907_34925 + (1));
seq__34904_34922 = G__34927;
chunk__34905_34923 = G__34928;
count__34906_34924 = G__34929;
i__34907_34925 = G__34930;
continue;
} else {
var temp__5457__auto___34931 = cljs.core.seq.call(null,seq__34904_34922);
if(temp__5457__auto___34931){
var seq__34904_34932__$1 = temp__5457__auto___34931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34904_34932__$1)){
var c__4319__auto___34933 = cljs.core.chunk_first.call(null,seq__34904_34932__$1);
var G__34934 = cljs.core.chunk_rest.call(null,seq__34904_34932__$1);
var G__34935 = c__4319__auto___34933;
var G__34936 = cljs.core.count.call(null,c__4319__auto___34933);
var G__34937 = (0);
seq__34904_34922 = G__34934;
chunk__34905_34923 = G__34935;
count__34906_34924 = G__34936;
i__34907_34925 = G__34937;
continue;
} else {
var test_34938 = cljs.core.first.call(null,seq__34904_34932__$1);
cljs.compiler.emitln.call(null,"case ",test_34938,":");


var G__34939 = cljs.core.next.call(null,seq__34904_34932__$1);
var G__34940 = null;
var G__34941 = (0);
var G__34942 = (0);
seq__34904_34922 = G__34939;
chunk__34905_34923 = G__34940;
count__34906_34924 = G__34941;
i__34907_34925 = G__34942;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_34921);
} else {
cljs.compiler.emitln.call(null,then_34921);
}

cljs.compiler.emitln.call(null,"break;");


var G__34943 = seq__34897_34915;
var G__34944 = chunk__34898_34916;
var G__34945 = count__34899_34917;
var G__34946 = (i__34900_34918 + (1));
seq__34897_34915 = G__34943;
chunk__34898_34916 = G__34944;
count__34899_34917 = G__34945;
i__34900_34918 = G__34946;
continue;
} else {
var temp__5457__auto___34947 = cljs.core.seq.call(null,seq__34897_34915);
if(temp__5457__auto___34947){
var seq__34897_34948__$1 = temp__5457__auto___34947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34897_34948__$1)){
var c__4319__auto___34949 = cljs.core.chunk_first.call(null,seq__34897_34948__$1);
var G__34950 = cljs.core.chunk_rest.call(null,seq__34897_34948__$1);
var G__34951 = c__4319__auto___34949;
var G__34952 = cljs.core.count.call(null,c__4319__auto___34949);
var G__34953 = (0);
seq__34897_34915 = G__34950;
chunk__34898_34916 = G__34951;
count__34899_34917 = G__34952;
i__34900_34918 = G__34953;
continue;
} else {
var vec__34908_34954 = cljs.core.first.call(null,seq__34897_34948__$1);
var ts_34955 = cljs.core.nth.call(null,vec__34908_34954,(0),null);
var then_34956 = cljs.core.nth.call(null,vec__34908_34954,(1),null);
var seq__34911_34957 = cljs.core.seq.call(null,ts_34955);
var chunk__34912_34958 = null;
var count__34913_34959 = (0);
var i__34914_34960 = (0);
while(true){
if((i__34914_34960 < count__34913_34959)){
var test_34961 = cljs.core._nth.call(null,chunk__34912_34958,i__34914_34960);
cljs.compiler.emitln.call(null,"case ",test_34961,":");


var G__34962 = seq__34911_34957;
var G__34963 = chunk__34912_34958;
var G__34964 = count__34913_34959;
var G__34965 = (i__34914_34960 + (1));
seq__34911_34957 = G__34962;
chunk__34912_34958 = G__34963;
count__34913_34959 = G__34964;
i__34914_34960 = G__34965;
continue;
} else {
var temp__5457__auto___34966__$1 = cljs.core.seq.call(null,seq__34911_34957);
if(temp__5457__auto___34966__$1){
var seq__34911_34967__$1 = temp__5457__auto___34966__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34911_34967__$1)){
var c__4319__auto___34968 = cljs.core.chunk_first.call(null,seq__34911_34967__$1);
var G__34969 = cljs.core.chunk_rest.call(null,seq__34911_34967__$1);
var G__34970 = c__4319__auto___34968;
var G__34971 = cljs.core.count.call(null,c__4319__auto___34968);
var G__34972 = (0);
seq__34911_34957 = G__34969;
chunk__34912_34958 = G__34970;
count__34913_34959 = G__34971;
i__34914_34960 = G__34972;
continue;
} else {
var test_34973 = cljs.core.first.call(null,seq__34911_34967__$1);
cljs.compiler.emitln.call(null,"case ",test_34973,":");


var G__34974 = cljs.core.next.call(null,seq__34911_34967__$1);
var G__34975 = null;
var G__34976 = (0);
var G__34977 = (0);
seq__34911_34957 = G__34974;
chunk__34912_34958 = G__34975;
count__34913_34959 = G__34976;
i__34914_34960 = G__34977;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_34956);
} else {
cljs.compiler.emitln.call(null,then_34956);
}

cljs.compiler.emitln.call(null,"break;");


var G__34978 = cljs.core.next.call(null,seq__34897_34948__$1);
var G__34979 = null;
var G__34980 = (0);
var G__34981 = (0);
seq__34897_34915 = G__34978;
chunk__34898_34916 = G__34979;
count__34899_34917 = G__34980;
i__34900_34918 = G__34981;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__34982){
var map__34983 = p__34982;
var map__34983__$1 = ((((!((map__34983 == null)))?(((((map__34983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34983):map__34983);
var throw$ = cljs.core.get.call(null,map__34983__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__34983__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__34986 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__34986,(0),null);
var rstr = cljs.core.nth.call(null,vec__34986,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__34986,fstr,rstr,ret_t,axstr){
return (function (p1__34985_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__34985_SHARP_);
});})(idx,vec__34986,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__34989 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34989),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__34989;
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
return (function (p1__34990_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__34990_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__34991 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__34992 = cljs.core.seq.call(null,vec__34991);
var first__34993 = cljs.core.first.call(null,seq__34992);
var seq__34992__$1 = cljs.core.next.call(null,seq__34992);
var p = first__34993;
var first__34993__$1 = cljs.core.first.call(null,seq__34992__$1);
var seq__34992__$2 = cljs.core.next.call(null,seq__34992__$1);
var ts = first__34993__$1;
var first__34993__$2 = cljs.core.first.call(null,seq__34992__$2);
var seq__34992__$3 = cljs.core.next.call(null,seq__34992__$2);
var n = first__34993__$2;
var xs = seq__34992__$3;
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
var vec__34994 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__34995 = cljs.core.seq.call(null,vec__34994);
var first__34996 = cljs.core.first.call(null,seq__34995);
var seq__34995__$1 = cljs.core.next.call(null,seq__34995);
var p = first__34996;
var first__34996__$1 = cljs.core.first.call(null,seq__34995__$1);
var seq__34995__$2 = cljs.core.next.call(null,seq__34995__$1);
var ts = first__34996__$1;
var xs = seq__34995__$2;
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
var G__34999 = arguments.length;
switch (G__34999) {
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
var vec__35007 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__34997_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__34997_SHARP_);
} else {
return p1__34997_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__35008 = cljs.core.seq.call(null,vec__35007);
var first__35009 = cljs.core.first.call(null,seq__35008);
var seq__35008__$1 = cljs.core.next.call(null,seq__35008);
var x = first__35009;
var ys = seq__35008__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__35010 = cljs.core.seq.call(null,ys);
var chunk__35011 = null;
var count__35012 = (0);
var i__35013 = (0);
while(true){
if((i__35013 < count__35012)){
var next_line = cljs.core._nth.call(null,chunk__35011,i__35013);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__35019 = seq__35010;
var G__35020 = chunk__35011;
var G__35021 = count__35012;
var G__35022 = (i__35013 + (1));
seq__35010 = G__35019;
chunk__35011 = G__35020;
count__35012 = G__35021;
i__35013 = G__35022;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35010);
if(temp__5457__auto__){
var seq__35010__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35010__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35010__$1);
var G__35023 = cljs.core.chunk_rest.call(null,seq__35010__$1);
var G__35024 = c__4319__auto__;
var G__35025 = cljs.core.count.call(null,c__4319__auto__);
var G__35026 = (0);
seq__35010 = G__35023;
chunk__35011 = G__35024;
count__35012 = G__35025;
i__35013 = G__35026;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__35010__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__35027 = cljs.core.next.call(null,seq__35010__$1);
var G__35028 = null;
var G__35029 = (0);
var G__35030 = (0);
seq__35010 = G__35027;
chunk__35011 = G__35028;
count__35012 = G__35029;
i__35013 = G__35030;
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

var seq__35014_35031 = cljs.core.seq.call(null,docs__$2);
var chunk__35015_35032 = null;
var count__35016_35033 = (0);
var i__35017_35034 = (0);
while(true){
if((i__35017_35034 < count__35016_35033)){
var e_35035 = cljs.core._nth.call(null,chunk__35015_35032,i__35017_35034);
if(cljs.core.truth_(e_35035)){
print_comment_lines.call(null,e_35035);
} else {
}


var G__35036 = seq__35014_35031;
var G__35037 = chunk__35015_35032;
var G__35038 = count__35016_35033;
var G__35039 = (i__35017_35034 + (1));
seq__35014_35031 = G__35036;
chunk__35015_35032 = G__35037;
count__35016_35033 = G__35038;
i__35017_35034 = G__35039;
continue;
} else {
var temp__5457__auto___35040 = cljs.core.seq.call(null,seq__35014_35031);
if(temp__5457__auto___35040){
var seq__35014_35041__$1 = temp__5457__auto___35040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35014_35041__$1)){
var c__4319__auto___35042 = cljs.core.chunk_first.call(null,seq__35014_35041__$1);
var G__35043 = cljs.core.chunk_rest.call(null,seq__35014_35041__$1);
var G__35044 = c__4319__auto___35042;
var G__35045 = cljs.core.count.call(null,c__4319__auto___35042);
var G__35046 = (0);
seq__35014_35031 = G__35043;
chunk__35015_35032 = G__35044;
count__35016_35033 = G__35045;
i__35017_35034 = G__35046;
continue;
} else {
var e_35047 = cljs.core.first.call(null,seq__35014_35041__$1);
if(cljs.core.truth_(e_35047)){
print_comment_lines.call(null,e_35047);
} else {
}


var G__35048 = cljs.core.next.call(null,seq__35014_35041__$1);
var G__35049 = null;
var G__35050 = (0);
var G__35051 = (0);
seq__35014_35031 = G__35048;
chunk__35015_35032 = G__35049;
count__35016_35033 = G__35050;
i__35017_35034 = G__35051;
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
return (function (p1__35053_SHARP_){
return goog.string.startsWith(p1__35053_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__35054){
var map__35055 = p__35054;
var map__35055__$1 = ((((!((map__35055 == null)))?(((((map__35055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35055):map__35055);
var name = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__35057){
var map__35058 = p__35057;
var map__35058__$1 = ((((!((map__35058 == null)))?(((((map__35058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35058):map__35058);
var name = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__35060_35078 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__35061_35079 = null;
var count__35062_35080 = (0);
var i__35063_35081 = (0);
while(true){
if((i__35063_35081 < count__35062_35080)){
var vec__35064_35082 = cljs.core._nth.call(null,chunk__35061_35079,i__35063_35081);
var i_35083 = cljs.core.nth.call(null,vec__35064_35082,(0),null);
var param_35084 = cljs.core.nth.call(null,vec__35064_35082,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_35084);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__35085 = seq__35060_35078;
var G__35086 = chunk__35061_35079;
var G__35087 = count__35062_35080;
var G__35088 = (i__35063_35081 + (1));
seq__35060_35078 = G__35085;
chunk__35061_35079 = G__35086;
count__35062_35080 = G__35087;
i__35063_35081 = G__35088;
continue;
} else {
var temp__5457__auto___35089 = cljs.core.seq.call(null,seq__35060_35078);
if(temp__5457__auto___35089){
var seq__35060_35090__$1 = temp__5457__auto___35089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35060_35090__$1)){
var c__4319__auto___35091 = cljs.core.chunk_first.call(null,seq__35060_35090__$1);
var G__35092 = cljs.core.chunk_rest.call(null,seq__35060_35090__$1);
var G__35093 = c__4319__auto___35091;
var G__35094 = cljs.core.count.call(null,c__4319__auto___35091);
var G__35095 = (0);
seq__35060_35078 = G__35092;
chunk__35061_35079 = G__35093;
count__35062_35080 = G__35094;
i__35063_35081 = G__35095;
continue;
} else {
var vec__35067_35096 = cljs.core.first.call(null,seq__35060_35090__$1);
var i_35097 = cljs.core.nth.call(null,vec__35067_35096,(0),null);
var param_35098 = cljs.core.nth.call(null,vec__35067_35096,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_35098);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__35099 = cljs.core.next.call(null,seq__35060_35090__$1);
var G__35100 = null;
var G__35101 = (0);
var G__35102 = (0);
seq__35060_35078 = G__35099;
chunk__35061_35079 = G__35100;
count__35062_35080 = G__35101;
i__35063_35081 = G__35102;
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

var seq__35070_35103 = cljs.core.seq.call(null,params);
var chunk__35071_35104 = null;
var count__35072_35105 = (0);
var i__35073_35106 = (0);
while(true){
if((i__35073_35106 < count__35072_35105)){
var param_35107 = cljs.core._nth.call(null,chunk__35071_35104,i__35073_35106);
cljs.compiler.emit.call(null,param_35107);

if(cljs.core._EQ_.call(null,param_35107,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35108 = seq__35070_35103;
var G__35109 = chunk__35071_35104;
var G__35110 = count__35072_35105;
var G__35111 = (i__35073_35106 + (1));
seq__35070_35103 = G__35108;
chunk__35071_35104 = G__35109;
count__35072_35105 = G__35110;
i__35073_35106 = G__35111;
continue;
} else {
var temp__5457__auto___35112 = cljs.core.seq.call(null,seq__35070_35103);
if(temp__5457__auto___35112){
var seq__35070_35113__$1 = temp__5457__auto___35112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35070_35113__$1)){
var c__4319__auto___35114 = cljs.core.chunk_first.call(null,seq__35070_35113__$1);
var G__35115 = cljs.core.chunk_rest.call(null,seq__35070_35113__$1);
var G__35116 = c__4319__auto___35114;
var G__35117 = cljs.core.count.call(null,c__4319__auto___35114);
var G__35118 = (0);
seq__35070_35103 = G__35115;
chunk__35071_35104 = G__35116;
count__35072_35105 = G__35117;
i__35073_35106 = G__35118;
continue;
} else {
var param_35119 = cljs.core.first.call(null,seq__35070_35113__$1);
cljs.compiler.emit.call(null,param_35119);

if(cljs.core._EQ_.call(null,param_35119,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35120 = cljs.core.next.call(null,seq__35070_35113__$1);
var G__35121 = null;
var G__35122 = (0);
var G__35123 = (0);
seq__35070_35103 = G__35120;
chunk__35071_35104 = G__35121;
count__35072_35105 = G__35122;
i__35073_35106 = G__35123;
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

var seq__35074_35124 = cljs.core.seq.call(null,params);
var chunk__35075_35125 = null;
var count__35076_35126 = (0);
var i__35077_35127 = (0);
while(true){
if((i__35077_35127 < count__35076_35126)){
var param_35128 = cljs.core._nth.call(null,chunk__35075_35125,i__35077_35127);
cljs.compiler.emit.call(null,param_35128);

if(cljs.core._EQ_.call(null,param_35128,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35129 = seq__35074_35124;
var G__35130 = chunk__35075_35125;
var G__35131 = count__35076_35126;
var G__35132 = (i__35077_35127 + (1));
seq__35074_35124 = G__35129;
chunk__35075_35125 = G__35130;
count__35076_35126 = G__35131;
i__35077_35127 = G__35132;
continue;
} else {
var temp__5457__auto___35133 = cljs.core.seq.call(null,seq__35074_35124);
if(temp__5457__auto___35133){
var seq__35074_35134__$1 = temp__5457__auto___35133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35074_35134__$1)){
var c__4319__auto___35135 = cljs.core.chunk_first.call(null,seq__35074_35134__$1);
var G__35136 = cljs.core.chunk_rest.call(null,seq__35074_35134__$1);
var G__35137 = c__4319__auto___35135;
var G__35138 = cljs.core.count.call(null,c__4319__auto___35135);
var G__35139 = (0);
seq__35074_35124 = G__35136;
chunk__35075_35125 = G__35137;
count__35076_35126 = G__35138;
i__35077_35127 = G__35139;
continue;
} else {
var param_35140 = cljs.core.first.call(null,seq__35074_35134__$1);
cljs.compiler.emit.call(null,param_35140);

if(cljs.core._EQ_.call(null,param_35140,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35141 = cljs.core.next.call(null,seq__35074_35134__$1);
var G__35142 = null;
var G__35143 = (0);
var G__35144 = (0);
seq__35074_35124 = G__35141;
chunk__35075_35125 = G__35142;
count__35076_35126 = G__35143;
i__35077_35127 = G__35144;
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
var seq__35145 = cljs.core.seq.call(null,params);
var chunk__35146 = null;
var count__35147 = (0);
var i__35148 = (0);
while(true){
if((i__35148 < count__35147)){
var param = cljs.core._nth.call(null,chunk__35146,i__35148);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35149 = seq__35145;
var G__35150 = chunk__35146;
var G__35151 = count__35147;
var G__35152 = (i__35148 + (1));
seq__35145 = G__35149;
chunk__35146 = G__35150;
count__35147 = G__35151;
i__35148 = G__35152;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35145);
if(temp__5457__auto__){
var seq__35145__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35145__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35145__$1);
var G__35153 = cljs.core.chunk_rest.call(null,seq__35145__$1);
var G__35154 = c__4319__auto__;
var G__35155 = cljs.core.count.call(null,c__4319__auto__);
var G__35156 = (0);
seq__35145 = G__35153;
chunk__35146 = G__35154;
count__35147 = G__35155;
i__35148 = G__35156;
continue;
} else {
var param = cljs.core.first.call(null,seq__35145__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35157 = cljs.core.next.call(null,seq__35145__$1);
var G__35158 = null;
var G__35159 = (0);
var G__35160 = (0);
seq__35145 = G__35157;
chunk__35146 = G__35158;
count__35147 = G__35159;
i__35148 = G__35160;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__35161){
var map__35162 = p__35161;
var map__35162__$1 = ((((!((map__35162 == null)))?(((((map__35162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35162):map__35162);
var type = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__35164){
var map__35165 = p__35164;
var map__35165__$1 = ((((!((map__35165 == null)))?(((((map__35165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35165):map__35165);
var f = map__35165__$1;
var type = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_35175__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_35176 = cljs.compiler.munge.call(null,name_35175__$1);
var delegate_name_35177 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_35176),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_35177," = function (");

var seq__35167_35178 = cljs.core.seq.call(null,params);
var chunk__35168_35179 = null;
var count__35169_35180 = (0);
var i__35170_35181 = (0);
while(true){
if((i__35170_35181 < count__35169_35180)){
var param_35182 = cljs.core._nth.call(null,chunk__35168_35179,i__35170_35181);
cljs.compiler.emit.call(null,param_35182);

if(cljs.core._EQ_.call(null,param_35182,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35183 = seq__35167_35178;
var G__35184 = chunk__35168_35179;
var G__35185 = count__35169_35180;
var G__35186 = (i__35170_35181 + (1));
seq__35167_35178 = G__35183;
chunk__35168_35179 = G__35184;
count__35169_35180 = G__35185;
i__35170_35181 = G__35186;
continue;
} else {
var temp__5457__auto___35187 = cljs.core.seq.call(null,seq__35167_35178);
if(temp__5457__auto___35187){
var seq__35167_35188__$1 = temp__5457__auto___35187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35167_35188__$1)){
var c__4319__auto___35189 = cljs.core.chunk_first.call(null,seq__35167_35188__$1);
var G__35190 = cljs.core.chunk_rest.call(null,seq__35167_35188__$1);
var G__35191 = c__4319__auto___35189;
var G__35192 = cljs.core.count.call(null,c__4319__auto___35189);
var G__35193 = (0);
seq__35167_35178 = G__35190;
chunk__35168_35179 = G__35191;
count__35169_35180 = G__35192;
i__35170_35181 = G__35193;
continue;
} else {
var param_35194 = cljs.core.first.call(null,seq__35167_35188__$1);
cljs.compiler.emit.call(null,param_35194);

if(cljs.core._EQ_.call(null,param_35194,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35195 = cljs.core.next.call(null,seq__35167_35188__$1);
var G__35196 = null;
var G__35197 = (0);
var G__35198 = (0);
seq__35167_35178 = G__35195;
chunk__35168_35179 = G__35196;
count__35169_35180 = G__35197;
i__35170_35181 = G__35198;
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

cljs.compiler.emitln.call(null,"var ",mname_35176," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_35199 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_35199,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_35177,".call(this,");

var seq__35171_35200 = cljs.core.seq.call(null,params);
var chunk__35172_35201 = null;
var count__35173_35202 = (0);
var i__35174_35203 = (0);
while(true){
if((i__35174_35203 < count__35173_35202)){
var param_35204 = cljs.core._nth.call(null,chunk__35172_35201,i__35174_35203);
cljs.compiler.emit.call(null,param_35204);

if(cljs.core._EQ_.call(null,param_35204,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35205 = seq__35171_35200;
var G__35206 = chunk__35172_35201;
var G__35207 = count__35173_35202;
var G__35208 = (i__35174_35203 + (1));
seq__35171_35200 = G__35205;
chunk__35172_35201 = G__35206;
count__35173_35202 = G__35207;
i__35174_35203 = G__35208;
continue;
} else {
var temp__5457__auto___35209 = cljs.core.seq.call(null,seq__35171_35200);
if(temp__5457__auto___35209){
var seq__35171_35210__$1 = temp__5457__auto___35209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35171_35210__$1)){
var c__4319__auto___35211 = cljs.core.chunk_first.call(null,seq__35171_35210__$1);
var G__35212 = cljs.core.chunk_rest.call(null,seq__35171_35210__$1);
var G__35213 = c__4319__auto___35211;
var G__35214 = cljs.core.count.call(null,c__4319__auto___35211);
var G__35215 = (0);
seq__35171_35200 = G__35212;
chunk__35172_35201 = G__35213;
count__35173_35202 = G__35214;
i__35174_35203 = G__35215;
continue;
} else {
var param_35216 = cljs.core.first.call(null,seq__35171_35210__$1);
cljs.compiler.emit.call(null,param_35216);

if(cljs.core._EQ_.call(null,param_35216,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35217 = cljs.core.next.call(null,seq__35171_35210__$1);
var G__35218 = null;
var G__35219 = (0);
var G__35220 = (0);
seq__35171_35200 = G__35217;
chunk__35172_35201 = G__35218;
count__35173_35202 = G__35219;
i__35174_35203 = G__35220;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_35176,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_35176,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_35175__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_35176,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_35177,";");

cljs.compiler.emitln.call(null,"return ",mname_35176,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__35224){
var map__35225 = p__35224;
var map__35225__$1 = ((((!((map__35225 == null)))?(((((map__35225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35225):map__35225);
var name = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__35225,map__35225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__35221_SHARP_){
var and__3911__auto__ = p1__35221_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__35221_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__35225,map__35225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_35260__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_35261 = cljs.compiler.munge.call(null,name_35260__$1);
var maxparams_35262 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_35263 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_35260__$1,mname_35261,maxparams_35262,loop_locals,map__35225,map__35225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_35261),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_35260__$1,mname_35261,maxparams_35262,loop_locals,map__35225,map__35225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_35264 = cljs.core.sort_by.call(null,((function (name_35260__$1,mname_35261,maxparams_35262,mmap_35263,loop_locals,map__35225,map__35225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__35222_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__35222_SHARP_)));
});})(name_35260__$1,mname_35261,maxparams_35262,mmap_35263,loop_locals,map__35225,map__35225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_35263));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_35261," = null;");

var seq__35227_35265 = cljs.core.seq.call(null,ms_35264);
var chunk__35228_35266 = null;
var count__35229_35267 = (0);
var i__35230_35268 = (0);
while(true){
if((i__35230_35268 < count__35229_35267)){
var vec__35231_35269 = cljs.core._nth.call(null,chunk__35228_35266,i__35230_35268);
var n_35270 = cljs.core.nth.call(null,vec__35231_35269,(0),null);
var meth_35271 = cljs.core.nth.call(null,vec__35231_35269,(1),null);
cljs.compiler.emits.call(null,"var ",n_35270," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35271))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_35271);
} else {
cljs.compiler.emit_fn_method.call(null,meth_35271);
}

cljs.compiler.emitln.call(null,";");


var G__35272 = seq__35227_35265;
var G__35273 = chunk__35228_35266;
var G__35274 = count__35229_35267;
var G__35275 = (i__35230_35268 + (1));
seq__35227_35265 = G__35272;
chunk__35228_35266 = G__35273;
count__35229_35267 = G__35274;
i__35230_35268 = G__35275;
continue;
} else {
var temp__5457__auto___35276 = cljs.core.seq.call(null,seq__35227_35265);
if(temp__5457__auto___35276){
var seq__35227_35277__$1 = temp__5457__auto___35276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35227_35277__$1)){
var c__4319__auto___35278 = cljs.core.chunk_first.call(null,seq__35227_35277__$1);
var G__35279 = cljs.core.chunk_rest.call(null,seq__35227_35277__$1);
var G__35280 = c__4319__auto___35278;
var G__35281 = cljs.core.count.call(null,c__4319__auto___35278);
var G__35282 = (0);
seq__35227_35265 = G__35279;
chunk__35228_35266 = G__35280;
count__35229_35267 = G__35281;
i__35230_35268 = G__35282;
continue;
} else {
var vec__35234_35283 = cljs.core.first.call(null,seq__35227_35277__$1);
var n_35284 = cljs.core.nth.call(null,vec__35234_35283,(0),null);
var meth_35285 = cljs.core.nth.call(null,vec__35234_35283,(1),null);
cljs.compiler.emits.call(null,"var ",n_35284," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35285))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_35285);
} else {
cljs.compiler.emit_fn_method.call(null,meth_35285);
}

cljs.compiler.emitln.call(null,";");


var G__35286 = cljs.core.next.call(null,seq__35227_35277__$1);
var G__35287 = null;
var G__35288 = (0);
var G__35289 = (0);
seq__35227_35265 = G__35286;
chunk__35228_35266 = G__35287;
count__35229_35267 = G__35288;
i__35230_35268 = G__35289;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_35261," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_35262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_35262)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_35262));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__35237_35290 = cljs.core.seq.call(null,ms_35264);
var chunk__35238_35291 = null;
var count__35239_35292 = (0);
var i__35240_35293 = (0);
while(true){
if((i__35240_35293 < count__35239_35292)){
var vec__35241_35294 = cljs.core._nth.call(null,chunk__35238_35291,i__35240_35293);
var n_35295 = cljs.core.nth.call(null,vec__35241_35294,(0),null);
var meth_35296 = cljs.core.nth.call(null,vec__35241_35294,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35296))){
cljs.compiler.emitln.call(null,"default:");

var restarg_35297 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_35297," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_35298 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_35297," = new cljs.core.IndexedSeq(",a_35298,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_35295,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_35262)),(((cljs.core.count.call(null,maxparams_35262) > (1)))?", ":null),restarg_35297,");");
} else {
var pcnt_35299 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35296));
cljs.compiler.emitln.call(null,"case ",pcnt_35299,":");

cljs.compiler.emitln.call(null,"return ",n_35295,".call(this",(((pcnt_35299 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_35299,maxparams_35262)),null,(1),null)),(2),null))),");");
}


var G__35300 = seq__35237_35290;
var G__35301 = chunk__35238_35291;
var G__35302 = count__35239_35292;
var G__35303 = (i__35240_35293 + (1));
seq__35237_35290 = G__35300;
chunk__35238_35291 = G__35301;
count__35239_35292 = G__35302;
i__35240_35293 = G__35303;
continue;
} else {
var temp__5457__auto___35304 = cljs.core.seq.call(null,seq__35237_35290);
if(temp__5457__auto___35304){
var seq__35237_35305__$1 = temp__5457__auto___35304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35237_35305__$1)){
var c__4319__auto___35306 = cljs.core.chunk_first.call(null,seq__35237_35305__$1);
var G__35307 = cljs.core.chunk_rest.call(null,seq__35237_35305__$1);
var G__35308 = c__4319__auto___35306;
var G__35309 = cljs.core.count.call(null,c__4319__auto___35306);
var G__35310 = (0);
seq__35237_35290 = G__35307;
chunk__35238_35291 = G__35308;
count__35239_35292 = G__35309;
i__35240_35293 = G__35310;
continue;
} else {
var vec__35244_35311 = cljs.core.first.call(null,seq__35237_35305__$1);
var n_35312 = cljs.core.nth.call(null,vec__35244_35311,(0),null);
var meth_35313 = cljs.core.nth.call(null,vec__35244_35311,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35313))){
cljs.compiler.emitln.call(null,"default:");

var restarg_35314 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_35314," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_35315 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_35314," = new cljs.core.IndexedSeq(",a_35315,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_35312,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_35262)),(((cljs.core.count.call(null,maxparams_35262) > (1)))?", ":null),restarg_35314,");");
} else {
var pcnt_35316 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35313));
cljs.compiler.emitln.call(null,"case ",pcnt_35316,":");

cljs.compiler.emitln.call(null,"return ",n_35312,".call(this",(((pcnt_35316 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_35316,maxparams_35262)),null,(1),null)),(2),null))),");");
}


var G__35317 = cljs.core.next.call(null,seq__35237_35305__$1);
var G__35318 = null;
var G__35319 = (0);
var G__35320 = (0);
seq__35237_35290 = G__35317;
chunk__35238_35291 = G__35318;
count__35239_35292 = G__35319;
i__35240_35293 = G__35320;
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
cljs.compiler.emitln.call(null,mname_35261,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_35261,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_35260__$1,mname_35261,maxparams_35262,mmap_35263,ms_35264,loop_locals,map__35225,map__35225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__35223_SHARP_){
var vec__35247 = p1__35223_SHARP_;
var n = cljs.core.nth.call(null,vec__35247,(0),null);
var m = cljs.core.nth.call(null,vec__35247,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_35260__$1,mname_35261,maxparams_35262,mmap_35263,ms_35264,loop_locals,map__35225,map__35225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_35264),".cljs$lang$applyTo;");
} else {
}

var seq__35250_35321 = cljs.core.seq.call(null,ms_35264);
var chunk__35251_35322 = null;
var count__35252_35323 = (0);
var i__35253_35324 = (0);
while(true){
if((i__35253_35324 < count__35252_35323)){
var vec__35254_35325 = cljs.core._nth.call(null,chunk__35251_35322,i__35253_35324);
var n_35326 = cljs.core.nth.call(null,vec__35254_35325,(0),null);
var meth_35327 = cljs.core.nth.call(null,vec__35254_35325,(1),null);
var c_35328 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35327));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35327))){
cljs.compiler.emitln.call(null,mname_35261,".cljs$core$IFn$_invoke$arity$variadic = ",n_35326,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_35261,".cljs$core$IFn$_invoke$arity$",c_35328," = ",n_35326,";");
}


var G__35329 = seq__35250_35321;
var G__35330 = chunk__35251_35322;
var G__35331 = count__35252_35323;
var G__35332 = (i__35253_35324 + (1));
seq__35250_35321 = G__35329;
chunk__35251_35322 = G__35330;
count__35252_35323 = G__35331;
i__35253_35324 = G__35332;
continue;
} else {
var temp__5457__auto___35333 = cljs.core.seq.call(null,seq__35250_35321);
if(temp__5457__auto___35333){
var seq__35250_35334__$1 = temp__5457__auto___35333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35250_35334__$1)){
var c__4319__auto___35335 = cljs.core.chunk_first.call(null,seq__35250_35334__$1);
var G__35336 = cljs.core.chunk_rest.call(null,seq__35250_35334__$1);
var G__35337 = c__4319__auto___35335;
var G__35338 = cljs.core.count.call(null,c__4319__auto___35335);
var G__35339 = (0);
seq__35250_35321 = G__35336;
chunk__35251_35322 = G__35337;
count__35252_35323 = G__35338;
i__35253_35324 = G__35339;
continue;
} else {
var vec__35257_35340 = cljs.core.first.call(null,seq__35250_35334__$1);
var n_35341 = cljs.core.nth.call(null,vec__35257_35340,(0),null);
var meth_35342 = cljs.core.nth.call(null,vec__35257_35340,(1),null);
var c_35343 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35342));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35342))){
cljs.compiler.emitln.call(null,mname_35261,".cljs$core$IFn$_invoke$arity$variadic = ",n_35341,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_35261,".cljs$core$IFn$_invoke$arity$",c_35343," = ",n_35341,";");
}


var G__35344 = cljs.core.next.call(null,seq__35250_35334__$1);
var G__35345 = null;
var G__35346 = (0);
var G__35347 = (0);
seq__35250_35321 = G__35344;
chunk__35251_35322 = G__35345;
count__35252_35323 = G__35346;
i__35253_35324 = G__35347;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_35261,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__35348){
var map__35349 = p__35348;
var map__35349__$1 = ((((!((map__35349 == null)))?(((((map__35349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35349):map__35349);
var statements = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__35351_35355 = cljs.core.seq.call(null,statements);
var chunk__35352_35356 = null;
var count__35353_35357 = (0);
var i__35354_35358 = (0);
while(true){
if((i__35354_35358 < count__35353_35357)){
var s_35359 = cljs.core._nth.call(null,chunk__35352_35356,i__35354_35358);
cljs.compiler.emitln.call(null,s_35359);


var G__35360 = seq__35351_35355;
var G__35361 = chunk__35352_35356;
var G__35362 = count__35353_35357;
var G__35363 = (i__35354_35358 + (1));
seq__35351_35355 = G__35360;
chunk__35352_35356 = G__35361;
count__35353_35357 = G__35362;
i__35354_35358 = G__35363;
continue;
} else {
var temp__5457__auto___35364 = cljs.core.seq.call(null,seq__35351_35355);
if(temp__5457__auto___35364){
var seq__35351_35365__$1 = temp__5457__auto___35364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35351_35365__$1)){
var c__4319__auto___35366 = cljs.core.chunk_first.call(null,seq__35351_35365__$1);
var G__35367 = cljs.core.chunk_rest.call(null,seq__35351_35365__$1);
var G__35368 = c__4319__auto___35366;
var G__35369 = cljs.core.count.call(null,c__4319__auto___35366);
var G__35370 = (0);
seq__35351_35355 = G__35367;
chunk__35352_35356 = G__35368;
count__35353_35357 = G__35369;
i__35354_35358 = G__35370;
continue;
} else {
var s_35371 = cljs.core.first.call(null,seq__35351_35365__$1);
cljs.compiler.emitln.call(null,s_35371);


var G__35372 = cljs.core.next.call(null,seq__35351_35365__$1);
var G__35373 = null;
var G__35374 = (0);
var G__35375 = (0);
seq__35351_35355 = G__35372;
chunk__35352_35356 = G__35373;
count__35353_35357 = G__35374;
i__35354_35358 = G__35375;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__35376){
var map__35377 = p__35376;
var map__35377__$1 = ((((!((map__35377 == null)))?(((((map__35377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35377):map__35377);
var env = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__35379,is_loop){
var map__35380 = p__35379;
var map__35380__$1 = ((((!((map__35380 == null)))?(((((map__35380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35380):map__35380);
var bindings = cljs.core.get.call(null,map__35380__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__35380__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__35380__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_35382_35391 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_35382_35391,context,map__35380,map__35380__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_35382_35391,context,map__35380,map__35380__$1,bindings,expr,env))
,bindings):null));

try{var seq__35383_35392 = cljs.core.seq.call(null,bindings);
var chunk__35384_35393 = null;
var count__35385_35394 = (0);
var i__35386_35395 = (0);
while(true){
if((i__35386_35395 < count__35385_35394)){
var map__35387_35396 = cljs.core._nth.call(null,chunk__35384_35393,i__35386_35395);
var map__35387_35397__$1 = ((((!((map__35387_35396 == null)))?(((((map__35387_35396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35387_35396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35387_35396):map__35387_35396);
var binding_35398 = map__35387_35397__$1;
var init_35399 = cljs.core.get.call(null,map__35387_35397__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_35398);

cljs.compiler.emitln.call(null," = ",init_35399,";");


var G__35400 = seq__35383_35392;
var G__35401 = chunk__35384_35393;
var G__35402 = count__35385_35394;
var G__35403 = (i__35386_35395 + (1));
seq__35383_35392 = G__35400;
chunk__35384_35393 = G__35401;
count__35385_35394 = G__35402;
i__35386_35395 = G__35403;
continue;
} else {
var temp__5457__auto___35404 = cljs.core.seq.call(null,seq__35383_35392);
if(temp__5457__auto___35404){
var seq__35383_35405__$1 = temp__5457__auto___35404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35383_35405__$1)){
var c__4319__auto___35406 = cljs.core.chunk_first.call(null,seq__35383_35405__$1);
var G__35407 = cljs.core.chunk_rest.call(null,seq__35383_35405__$1);
var G__35408 = c__4319__auto___35406;
var G__35409 = cljs.core.count.call(null,c__4319__auto___35406);
var G__35410 = (0);
seq__35383_35392 = G__35407;
chunk__35384_35393 = G__35408;
count__35385_35394 = G__35409;
i__35386_35395 = G__35410;
continue;
} else {
var map__35389_35411 = cljs.core.first.call(null,seq__35383_35405__$1);
var map__35389_35412__$1 = ((((!((map__35389_35411 == null)))?(((((map__35389_35411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35389_35411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35389_35411):map__35389_35411);
var binding_35413 = map__35389_35412__$1;
var init_35414 = cljs.core.get.call(null,map__35389_35412__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_35413);

cljs.compiler.emitln.call(null," = ",init_35414,";");


var G__35415 = cljs.core.next.call(null,seq__35383_35405__$1);
var G__35416 = null;
var G__35417 = (0);
var G__35418 = (0);
seq__35383_35392 = G__35415;
chunk__35384_35393 = G__35416;
count__35385_35394 = G__35417;
i__35386_35395 = G__35418;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_35382_35391;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__35419){
var map__35420 = p__35419;
var map__35420__$1 = ((((!((map__35420 == null)))?(((((map__35420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35420):map__35420);
var frame = cljs.core.get.call(null,map__35420__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__35420__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__35420__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___35422 = cljs.core.count.call(null,exprs);
var i_35423 = (0);
while(true){
if((i_35423 < n__4376__auto___35422)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_35423)," = ",exprs.call(null,i_35423),";");

var G__35424 = (i_35423 + (1));
i_35423 = G__35424;
continue;
} else {
}
break;
}

var n__4376__auto___35425 = cljs.core.count.call(null,exprs);
var i_35426 = (0);
while(true){
if((i_35426 < n__4376__auto___35425)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_35426))," = ",temps.call(null,i_35426),";");

var G__35427 = (i_35426 + (1));
i_35426 = G__35427;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__35428){
var map__35429 = p__35428;
var map__35429__$1 = ((((!((map__35429 == null)))?(((((map__35429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35429):map__35429);
var bindings = cljs.core.get.call(null,map__35429__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__35429__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__35429__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__35431_35439 = cljs.core.seq.call(null,bindings);
var chunk__35432_35440 = null;
var count__35433_35441 = (0);
var i__35434_35442 = (0);
while(true){
if((i__35434_35442 < count__35433_35441)){
var map__35435_35443 = cljs.core._nth.call(null,chunk__35432_35440,i__35434_35442);
var map__35435_35444__$1 = ((((!((map__35435_35443 == null)))?(((((map__35435_35443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35435_35443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35435_35443):map__35435_35443);
var binding_35445 = map__35435_35444__$1;
var init_35446 = cljs.core.get.call(null,map__35435_35444__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_35445)," = ",init_35446,";");


var G__35447 = seq__35431_35439;
var G__35448 = chunk__35432_35440;
var G__35449 = count__35433_35441;
var G__35450 = (i__35434_35442 + (1));
seq__35431_35439 = G__35447;
chunk__35432_35440 = G__35448;
count__35433_35441 = G__35449;
i__35434_35442 = G__35450;
continue;
} else {
var temp__5457__auto___35451 = cljs.core.seq.call(null,seq__35431_35439);
if(temp__5457__auto___35451){
var seq__35431_35452__$1 = temp__5457__auto___35451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35431_35452__$1)){
var c__4319__auto___35453 = cljs.core.chunk_first.call(null,seq__35431_35452__$1);
var G__35454 = cljs.core.chunk_rest.call(null,seq__35431_35452__$1);
var G__35455 = c__4319__auto___35453;
var G__35456 = cljs.core.count.call(null,c__4319__auto___35453);
var G__35457 = (0);
seq__35431_35439 = G__35454;
chunk__35432_35440 = G__35455;
count__35433_35441 = G__35456;
i__35434_35442 = G__35457;
continue;
} else {
var map__35437_35458 = cljs.core.first.call(null,seq__35431_35452__$1);
var map__35437_35459__$1 = ((((!((map__35437_35458 == null)))?(((((map__35437_35458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35437_35458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35437_35458):map__35437_35458);
var binding_35460 = map__35437_35459__$1;
var init_35461 = cljs.core.get.call(null,map__35437_35459__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_35460)," = ",init_35461,";");


var G__35462 = cljs.core.next.call(null,seq__35431_35452__$1);
var G__35463 = null;
var G__35464 = (0);
var G__35465 = (0);
seq__35431_35439 = G__35462;
chunk__35432_35440 = G__35463;
count__35433_35441 = G__35464;
i__35434_35442 = G__35465;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__35468){
var map__35469 = p__35468;
var map__35469__$1 = ((((!((map__35469 == null)))?(((((map__35469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35469):map__35469);
var expr = map__35469__$1;
var f = cljs.core.get.call(null,map__35469__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__35469__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35469__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__35471 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35469,map__35469__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35469,map__35469__$1,expr,f,args,env){
return (function (p1__35466_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__35466_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35469,map__35469__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35469,map__35469__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35469,map__35469__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35469,map__35469__$1,expr,f,args,env){
return (function (p1__35467_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__35467_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35469,map__35469__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35469,map__35469__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__35471,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__35471,(1),null);
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_35474 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_35474,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_35475 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_35475,args)),(((mfa_35475 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_35475,args)),"], 0))");
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
var fprop_35476 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_35476," ? ",f__$1,fprop_35476,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_35476," ? ",f__$1,fprop_35476,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__35477){
var map__35478 = p__35477;
var map__35478__$1 = ((((!((map__35478 == null)))?(((((map__35478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35478):map__35478);
var ctor = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__35480){
var map__35481 = p__35480;
var map__35481__$1 = ((((!((map__35481 == null)))?(((((map__35481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35481):map__35481);
var target = cljs.core.get.call(null,map__35481__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__35481__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__35481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__35483 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__35483__$1 = ((((!((map__35483 == null)))?(((((map__35483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35483):map__35483);
var options = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__35484 = options;
var map__35484__$1 = ((((!((map__35484 == null)))?(((((map__35484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35484):map__35484);
var target = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__35485 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__35490 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__35490__$1 = ((((!((map__35490 == null)))?(((((map__35490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35490):map__35490);
var node_libs = cljs.core.get.call(null,map__35490__$1,true);
var libs_to_load = cljs.core.get.call(null,map__35490__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__35485,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__35485,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__35492_35508 = cljs.core.seq.call(null,libs_to_load);
var chunk__35493_35509 = null;
var count__35494_35510 = (0);
var i__35495_35511 = (0);
while(true){
if((i__35495_35511 < count__35494_35510)){
var lib_35512 = cljs.core._nth.call(null,chunk__35493_35509,i__35495_35511);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_35512)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35512),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35512),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35512),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35512),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35512),"');");

}
}
}


var G__35513 = seq__35492_35508;
var G__35514 = chunk__35493_35509;
var G__35515 = count__35494_35510;
var G__35516 = (i__35495_35511 + (1));
seq__35492_35508 = G__35513;
chunk__35493_35509 = G__35514;
count__35494_35510 = G__35515;
i__35495_35511 = G__35516;
continue;
} else {
var temp__5457__auto___35517 = cljs.core.seq.call(null,seq__35492_35508);
if(temp__5457__auto___35517){
var seq__35492_35518__$1 = temp__5457__auto___35517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35492_35518__$1)){
var c__4319__auto___35519 = cljs.core.chunk_first.call(null,seq__35492_35518__$1);
var G__35520 = cljs.core.chunk_rest.call(null,seq__35492_35518__$1);
var G__35521 = c__4319__auto___35519;
var G__35522 = cljs.core.count.call(null,c__4319__auto___35519);
var G__35523 = (0);
seq__35492_35508 = G__35520;
chunk__35493_35509 = G__35521;
count__35494_35510 = G__35522;
i__35495_35511 = G__35523;
continue;
} else {
var lib_35524 = cljs.core.first.call(null,seq__35492_35518__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_35524)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35524),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35524),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35524),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35524),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35524),"');");

}
}
}


var G__35525 = cljs.core.next.call(null,seq__35492_35518__$1);
var G__35526 = null;
var G__35527 = (0);
var G__35528 = (0);
seq__35492_35508 = G__35525;
chunk__35493_35509 = G__35526;
count__35494_35510 = G__35527;
i__35495_35511 = G__35528;
continue;
}
} else {
}
}
break;
}

var seq__35496_35529 = cljs.core.seq.call(null,node_libs);
var chunk__35497_35530 = null;
var count__35498_35531 = (0);
var i__35499_35532 = (0);
while(true){
if((i__35499_35532 < count__35498_35531)){
var lib_35533 = cljs.core._nth.call(null,chunk__35497_35530,i__35499_35532);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_35533)," = require('",lib_35533,"');");


var G__35534 = seq__35496_35529;
var G__35535 = chunk__35497_35530;
var G__35536 = count__35498_35531;
var G__35537 = (i__35499_35532 + (1));
seq__35496_35529 = G__35534;
chunk__35497_35530 = G__35535;
count__35498_35531 = G__35536;
i__35499_35532 = G__35537;
continue;
} else {
var temp__5457__auto___35538 = cljs.core.seq.call(null,seq__35496_35529);
if(temp__5457__auto___35538){
var seq__35496_35539__$1 = temp__5457__auto___35538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35496_35539__$1)){
var c__4319__auto___35540 = cljs.core.chunk_first.call(null,seq__35496_35539__$1);
var G__35541 = cljs.core.chunk_rest.call(null,seq__35496_35539__$1);
var G__35542 = c__4319__auto___35540;
var G__35543 = cljs.core.count.call(null,c__4319__auto___35540);
var G__35544 = (0);
seq__35496_35529 = G__35541;
chunk__35497_35530 = G__35542;
count__35498_35531 = G__35543;
i__35499_35532 = G__35544;
continue;
} else {
var lib_35545 = cljs.core.first.call(null,seq__35496_35539__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_35545)," = require('",lib_35545,"');");


var G__35546 = cljs.core.next.call(null,seq__35496_35539__$1);
var G__35547 = null;
var G__35548 = (0);
var G__35549 = (0);
seq__35496_35529 = G__35546;
chunk__35497_35530 = G__35547;
count__35498_35531 = G__35548;
i__35499_35532 = G__35549;
continue;
}
} else {
}
}
break;
}

var seq__35500_35550 = cljs.core.seq.call(null,global_exports_libs);
var chunk__35501_35551 = null;
var count__35502_35552 = (0);
var i__35503_35553 = (0);
while(true){
if((i__35503_35553 < count__35502_35552)){
var lib_35554 = cljs.core._nth.call(null,chunk__35501_35551,i__35503_35553);
var map__35504_35555 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_35554));
var map__35504_35556__$1 = ((((!((map__35504_35555 == null)))?(((((map__35504_35555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35504_35555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35504_35555):map__35504_35555);
var global_exports_35557 = cljs.core.get.call(null,map__35504_35556__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_35554)," = goog.global.",cljs.core.get.call(null,global_exports_35557,cljs.core.symbol.call(null,lib_35554)),";");


var G__35558 = seq__35500_35550;
var G__35559 = chunk__35501_35551;
var G__35560 = count__35502_35552;
var G__35561 = (i__35503_35553 + (1));
seq__35500_35550 = G__35558;
chunk__35501_35551 = G__35559;
count__35502_35552 = G__35560;
i__35503_35553 = G__35561;
continue;
} else {
var temp__5457__auto___35562 = cljs.core.seq.call(null,seq__35500_35550);
if(temp__5457__auto___35562){
var seq__35500_35563__$1 = temp__5457__auto___35562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35500_35563__$1)){
var c__4319__auto___35564 = cljs.core.chunk_first.call(null,seq__35500_35563__$1);
var G__35565 = cljs.core.chunk_rest.call(null,seq__35500_35563__$1);
var G__35566 = c__4319__auto___35564;
var G__35567 = cljs.core.count.call(null,c__4319__auto___35564);
var G__35568 = (0);
seq__35500_35550 = G__35565;
chunk__35501_35551 = G__35566;
count__35502_35552 = G__35567;
i__35503_35553 = G__35568;
continue;
} else {
var lib_35569 = cljs.core.first.call(null,seq__35500_35563__$1);
var map__35506_35570 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_35569));
var map__35506_35571__$1 = ((((!((map__35506_35570 == null)))?(((((map__35506_35570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35506_35570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35506_35570):map__35506_35570);
var global_exports_35572 = cljs.core.get.call(null,map__35506_35571__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_35569)," = goog.global.",cljs.core.get.call(null,global_exports_35572,cljs.core.symbol.call(null,lib_35569)),";");


var G__35573 = cljs.core.next.call(null,seq__35500_35563__$1);
var G__35574 = null;
var G__35575 = (0);
var G__35576 = (0);
seq__35500_35550 = G__35573;
chunk__35501_35551 = G__35574;
count__35502_35552 = G__35575;
i__35503_35553 = G__35576;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__35577){
var map__35578 = p__35577;
var map__35578__$1 = ((((!((map__35578 == null)))?(((((map__35578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35578):map__35578);
var name = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__35580){
var map__35581 = p__35580;
var map__35581__$1 = ((((!((map__35581 == null)))?(((((map__35581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35581):map__35581);
var name = cljs.core.get.call(null,map__35581__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__35581__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__35581__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__35581__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__35581__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__35581__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__35581__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__35583){
var map__35584 = p__35583;
var map__35584__$1 = ((((!((map__35584 == null)))?(((((map__35584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35584):map__35584);
var t = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__35586_35604 = cljs.core.seq.call(null,protocols);
var chunk__35587_35605 = null;
var count__35588_35606 = (0);
var i__35589_35607 = (0);
while(true){
if((i__35589_35607 < count__35588_35606)){
var protocol_35608 = cljs.core._nth.call(null,chunk__35587_35605,i__35589_35607);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35608)].join('')),"}");


var G__35609 = seq__35586_35604;
var G__35610 = chunk__35587_35605;
var G__35611 = count__35588_35606;
var G__35612 = (i__35589_35607 + (1));
seq__35586_35604 = G__35609;
chunk__35587_35605 = G__35610;
count__35588_35606 = G__35611;
i__35589_35607 = G__35612;
continue;
} else {
var temp__5457__auto___35613 = cljs.core.seq.call(null,seq__35586_35604);
if(temp__5457__auto___35613){
var seq__35586_35614__$1 = temp__5457__auto___35613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35586_35614__$1)){
var c__4319__auto___35615 = cljs.core.chunk_first.call(null,seq__35586_35614__$1);
var G__35616 = cljs.core.chunk_rest.call(null,seq__35586_35614__$1);
var G__35617 = c__4319__auto___35615;
var G__35618 = cljs.core.count.call(null,c__4319__auto___35615);
var G__35619 = (0);
seq__35586_35604 = G__35616;
chunk__35587_35605 = G__35617;
count__35588_35606 = G__35618;
i__35589_35607 = G__35619;
continue;
} else {
var protocol_35620 = cljs.core.first.call(null,seq__35586_35614__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35620)].join('')),"}");


var G__35621 = cljs.core.next.call(null,seq__35586_35614__$1);
var G__35622 = null;
var G__35623 = (0);
var G__35624 = (0);
seq__35586_35604 = G__35621;
chunk__35587_35605 = G__35622;
count__35588_35606 = G__35623;
i__35589_35607 = G__35624;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__35590_35625 = cljs.core.seq.call(null,fields__$1);
var chunk__35591_35626 = null;
var count__35592_35627 = (0);
var i__35593_35628 = (0);
while(true){
if((i__35593_35628 < count__35592_35627)){
var fld_35629 = cljs.core._nth.call(null,chunk__35591_35626,i__35593_35628);
cljs.compiler.emitln.call(null,"this.",fld_35629," = ",fld_35629,";");


var G__35630 = seq__35590_35625;
var G__35631 = chunk__35591_35626;
var G__35632 = count__35592_35627;
var G__35633 = (i__35593_35628 + (1));
seq__35590_35625 = G__35630;
chunk__35591_35626 = G__35631;
count__35592_35627 = G__35632;
i__35593_35628 = G__35633;
continue;
} else {
var temp__5457__auto___35634 = cljs.core.seq.call(null,seq__35590_35625);
if(temp__5457__auto___35634){
var seq__35590_35635__$1 = temp__5457__auto___35634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35590_35635__$1)){
var c__4319__auto___35636 = cljs.core.chunk_first.call(null,seq__35590_35635__$1);
var G__35637 = cljs.core.chunk_rest.call(null,seq__35590_35635__$1);
var G__35638 = c__4319__auto___35636;
var G__35639 = cljs.core.count.call(null,c__4319__auto___35636);
var G__35640 = (0);
seq__35590_35625 = G__35637;
chunk__35591_35626 = G__35638;
count__35592_35627 = G__35639;
i__35593_35628 = G__35640;
continue;
} else {
var fld_35641 = cljs.core.first.call(null,seq__35590_35635__$1);
cljs.compiler.emitln.call(null,"this.",fld_35641," = ",fld_35641,";");


var G__35642 = cljs.core.next.call(null,seq__35590_35635__$1);
var G__35643 = null;
var G__35644 = (0);
var G__35645 = (0);
seq__35590_35625 = G__35642;
chunk__35591_35626 = G__35643;
count__35592_35627 = G__35644;
i__35593_35628 = G__35645;
continue;
}
} else {
}
}
break;
}

var seq__35594_35646 = cljs.core.seq.call(null,pmasks);
var chunk__35595_35647 = null;
var count__35596_35648 = (0);
var i__35597_35649 = (0);
while(true){
if((i__35597_35649 < count__35596_35648)){
var vec__35598_35650 = cljs.core._nth.call(null,chunk__35595_35647,i__35597_35649);
var pno_35651 = cljs.core.nth.call(null,vec__35598_35650,(0),null);
var pmask_35652 = cljs.core.nth.call(null,vec__35598_35650,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35651,"$ = ",pmask_35652,";");


var G__35653 = seq__35594_35646;
var G__35654 = chunk__35595_35647;
var G__35655 = count__35596_35648;
var G__35656 = (i__35597_35649 + (1));
seq__35594_35646 = G__35653;
chunk__35595_35647 = G__35654;
count__35596_35648 = G__35655;
i__35597_35649 = G__35656;
continue;
} else {
var temp__5457__auto___35657 = cljs.core.seq.call(null,seq__35594_35646);
if(temp__5457__auto___35657){
var seq__35594_35658__$1 = temp__5457__auto___35657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35594_35658__$1)){
var c__4319__auto___35659 = cljs.core.chunk_first.call(null,seq__35594_35658__$1);
var G__35660 = cljs.core.chunk_rest.call(null,seq__35594_35658__$1);
var G__35661 = c__4319__auto___35659;
var G__35662 = cljs.core.count.call(null,c__4319__auto___35659);
var G__35663 = (0);
seq__35594_35646 = G__35660;
chunk__35595_35647 = G__35661;
count__35596_35648 = G__35662;
i__35597_35649 = G__35663;
continue;
} else {
var vec__35601_35664 = cljs.core.first.call(null,seq__35594_35658__$1);
var pno_35665 = cljs.core.nth.call(null,vec__35601_35664,(0),null);
var pmask_35666 = cljs.core.nth.call(null,vec__35601_35664,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35665,"$ = ",pmask_35666,";");


var G__35667 = cljs.core.next.call(null,seq__35594_35658__$1);
var G__35668 = null;
var G__35669 = (0);
var G__35670 = (0);
seq__35594_35646 = G__35667;
chunk__35595_35647 = G__35668;
count__35596_35648 = G__35669;
i__35597_35649 = G__35670;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__35671){
var map__35672 = p__35671;
var map__35672__$1 = ((((!((map__35672 == null)))?(((((map__35672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35672):map__35672);
var t = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__35674_35692 = cljs.core.seq.call(null,protocols);
var chunk__35675_35693 = null;
var count__35676_35694 = (0);
var i__35677_35695 = (0);
while(true){
if((i__35677_35695 < count__35676_35694)){
var protocol_35696 = cljs.core._nth.call(null,chunk__35675_35693,i__35677_35695);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35696)].join('')),"}");


var G__35697 = seq__35674_35692;
var G__35698 = chunk__35675_35693;
var G__35699 = count__35676_35694;
var G__35700 = (i__35677_35695 + (1));
seq__35674_35692 = G__35697;
chunk__35675_35693 = G__35698;
count__35676_35694 = G__35699;
i__35677_35695 = G__35700;
continue;
} else {
var temp__5457__auto___35701 = cljs.core.seq.call(null,seq__35674_35692);
if(temp__5457__auto___35701){
var seq__35674_35702__$1 = temp__5457__auto___35701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35674_35702__$1)){
var c__4319__auto___35703 = cljs.core.chunk_first.call(null,seq__35674_35702__$1);
var G__35704 = cljs.core.chunk_rest.call(null,seq__35674_35702__$1);
var G__35705 = c__4319__auto___35703;
var G__35706 = cljs.core.count.call(null,c__4319__auto___35703);
var G__35707 = (0);
seq__35674_35692 = G__35704;
chunk__35675_35693 = G__35705;
count__35676_35694 = G__35706;
i__35677_35695 = G__35707;
continue;
} else {
var protocol_35708 = cljs.core.first.call(null,seq__35674_35702__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35708)].join('')),"}");


var G__35709 = cljs.core.next.call(null,seq__35674_35702__$1);
var G__35710 = null;
var G__35711 = (0);
var G__35712 = (0);
seq__35674_35692 = G__35709;
chunk__35675_35693 = G__35710;
count__35676_35694 = G__35711;
i__35677_35695 = G__35712;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__35678_35713 = cljs.core.seq.call(null,fields__$1);
var chunk__35679_35714 = null;
var count__35680_35715 = (0);
var i__35681_35716 = (0);
while(true){
if((i__35681_35716 < count__35680_35715)){
var fld_35717 = cljs.core._nth.call(null,chunk__35679_35714,i__35681_35716);
cljs.compiler.emitln.call(null,"this.",fld_35717," = ",fld_35717,";");


var G__35718 = seq__35678_35713;
var G__35719 = chunk__35679_35714;
var G__35720 = count__35680_35715;
var G__35721 = (i__35681_35716 + (1));
seq__35678_35713 = G__35718;
chunk__35679_35714 = G__35719;
count__35680_35715 = G__35720;
i__35681_35716 = G__35721;
continue;
} else {
var temp__5457__auto___35722 = cljs.core.seq.call(null,seq__35678_35713);
if(temp__5457__auto___35722){
var seq__35678_35723__$1 = temp__5457__auto___35722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35678_35723__$1)){
var c__4319__auto___35724 = cljs.core.chunk_first.call(null,seq__35678_35723__$1);
var G__35725 = cljs.core.chunk_rest.call(null,seq__35678_35723__$1);
var G__35726 = c__4319__auto___35724;
var G__35727 = cljs.core.count.call(null,c__4319__auto___35724);
var G__35728 = (0);
seq__35678_35713 = G__35725;
chunk__35679_35714 = G__35726;
count__35680_35715 = G__35727;
i__35681_35716 = G__35728;
continue;
} else {
var fld_35729 = cljs.core.first.call(null,seq__35678_35723__$1);
cljs.compiler.emitln.call(null,"this.",fld_35729," = ",fld_35729,";");


var G__35730 = cljs.core.next.call(null,seq__35678_35723__$1);
var G__35731 = null;
var G__35732 = (0);
var G__35733 = (0);
seq__35678_35713 = G__35730;
chunk__35679_35714 = G__35731;
count__35680_35715 = G__35732;
i__35681_35716 = G__35733;
continue;
}
} else {
}
}
break;
}

var seq__35682_35734 = cljs.core.seq.call(null,pmasks);
var chunk__35683_35735 = null;
var count__35684_35736 = (0);
var i__35685_35737 = (0);
while(true){
if((i__35685_35737 < count__35684_35736)){
var vec__35686_35738 = cljs.core._nth.call(null,chunk__35683_35735,i__35685_35737);
var pno_35739 = cljs.core.nth.call(null,vec__35686_35738,(0),null);
var pmask_35740 = cljs.core.nth.call(null,vec__35686_35738,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35739,"$ = ",pmask_35740,";");


var G__35741 = seq__35682_35734;
var G__35742 = chunk__35683_35735;
var G__35743 = count__35684_35736;
var G__35744 = (i__35685_35737 + (1));
seq__35682_35734 = G__35741;
chunk__35683_35735 = G__35742;
count__35684_35736 = G__35743;
i__35685_35737 = G__35744;
continue;
} else {
var temp__5457__auto___35745 = cljs.core.seq.call(null,seq__35682_35734);
if(temp__5457__auto___35745){
var seq__35682_35746__$1 = temp__5457__auto___35745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35682_35746__$1)){
var c__4319__auto___35747 = cljs.core.chunk_first.call(null,seq__35682_35746__$1);
var G__35748 = cljs.core.chunk_rest.call(null,seq__35682_35746__$1);
var G__35749 = c__4319__auto___35747;
var G__35750 = cljs.core.count.call(null,c__4319__auto___35747);
var G__35751 = (0);
seq__35682_35734 = G__35748;
chunk__35683_35735 = G__35749;
count__35684_35736 = G__35750;
i__35685_35737 = G__35751;
continue;
} else {
var vec__35689_35752 = cljs.core.first.call(null,seq__35682_35746__$1);
var pno_35753 = cljs.core.nth.call(null,vec__35689_35752,(0),null);
var pmask_35754 = cljs.core.nth.call(null,vec__35689_35752,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35753,"$ = ",pmask_35754,";");


var G__35755 = cljs.core.next.call(null,seq__35682_35746__$1);
var G__35756 = null;
var G__35757 = (0);
var G__35758 = (0);
seq__35682_35734 = G__35755;
chunk__35683_35735 = G__35756;
count__35684_35736 = G__35757;
i__35685_35737 = G__35758;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__35759){
var map__35760 = p__35759;
var map__35760__$1 = ((((!((map__35760 == null)))?(((((map__35760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35760):map__35760);
var target = cljs.core.get.call(null,map__35760__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__35760__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__35760__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__35760__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35760__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__35762){
var map__35763 = p__35762;
var map__35763__$1 = ((((!((map__35763 == null)))?(((((map__35763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35763):map__35763);
var op = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__35768 = cljs.core.seq.call(null,table);
var chunk__35769 = null;
var count__35770 = (0);
var i__35771 = (0);
while(true){
if((i__35771 < count__35770)){
var vec__35772 = cljs.core._nth.call(null,chunk__35769,i__35771);
var sym = cljs.core.nth.call(null,vec__35772,(0),null);
var value = cljs.core.nth.call(null,vec__35772,(1),null);
var ns_35778 = cljs.core.namespace.call(null,sym);
var name_35779 = cljs.core.name.call(null,sym);
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


var G__35780 = seq__35768;
var G__35781 = chunk__35769;
var G__35782 = count__35770;
var G__35783 = (i__35771 + (1));
seq__35768 = G__35780;
chunk__35769 = G__35781;
count__35770 = G__35782;
i__35771 = G__35783;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35768);
if(temp__5457__auto__){
var seq__35768__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35768__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35768__$1);
var G__35784 = cljs.core.chunk_rest.call(null,seq__35768__$1);
var G__35785 = c__4319__auto__;
var G__35786 = cljs.core.count.call(null,c__4319__auto__);
var G__35787 = (0);
seq__35768 = G__35784;
chunk__35769 = G__35785;
count__35770 = G__35786;
i__35771 = G__35787;
continue;
} else {
var vec__35775 = cljs.core.first.call(null,seq__35768__$1);
var sym = cljs.core.nth.call(null,vec__35775,(0),null);
var value = cljs.core.nth.call(null,vec__35775,(1),null);
var ns_35788 = cljs.core.namespace.call(null,sym);
var name_35789 = cljs.core.name.call(null,sym);
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


var G__35790 = cljs.core.next.call(null,seq__35768__$1);
var G__35791 = null;
var G__35792 = (0);
var G__35793 = (0);
seq__35768 = G__35790;
chunk__35769 = G__35791;
count__35770 = G__35792;
i__35771 = G__35793;
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
var G__35795 = arguments.length;
switch (G__35795) {
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
var k_35800 = cljs.core.first.call(null,ks);
var vec__35796_35801 = cljs.core.conj.call(null,prefix,k_35800);
var top_35802 = cljs.core.nth.call(null,vec__35796_35801,(0),null);
var prefix_SINGLEQUOTE__35803 = vec__35796_35801;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_35800)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__35803) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_35802)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_35802))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__35803)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_35802);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__35803)),";");
}
} else {
}

var m_35804 = cljs.core.get.call(null,externs,k_35800);
if(cljs.core.empty_QMARK_.call(null,m_35804)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__35803,m_35804,top_level,known_externs);
}

var G__35805 = cljs.core.next.call(null,ks);
ks = G__35805;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
