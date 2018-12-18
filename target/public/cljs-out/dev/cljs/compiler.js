// Compiled by ClojureScript 0.0.668480191 {}
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
var map__21535 = s;
var map__21535__$1 = (((((!((map__21535 == null))))?(((((map__21535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21535):map__21535);
var name = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__21538 = info;
var map__21539 = G__21538;
var map__21539__$1 = (((((!((map__21539 == null))))?(((((map__21539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21539):map__21539);
var shadow = cljs.core.get.call(null,map__21539__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__21538__$1 = G__21538;
while(true){
var d__$2 = d__$1;
var map__21543 = G__21538__$1;
var map__21543__$1 = (((((!((map__21543 == null))))?(((((map__21543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21543):map__21543);
var shadow__$1 = cljs.core.get.call(null,map__21543__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__21545 = (d__$2 + (1));
var G__21546 = shadow__$1;
d__$1 = G__21545;
G__21538__$1 = G__21546;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21547){
var map__21548 = p__21547;
var map__21548__$1 = (((((!((map__21548 == null))))?(((((map__21548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21548):map__21548);
var name_var = map__21548__$1;
var name = cljs.core.get.call(null,map__21548__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__21548__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__21550 = info;
var map__21550__$1 = (((((!((map__21550 == null))))?(((((map__21550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21550):map__21550);
var ns = cljs.core.get.call(null,map__21550__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__21550__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__21553 = arguments.length;
switch (G__21553) {
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
var G__21555 = cp;
switch (G__21555) {
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
var seq__21557_21561 = cljs.core.seq.call(null,s);
var chunk__21558_21562 = null;
var count__21559_21563 = (0);
var i__21560_21564 = (0);
while(true){
if((i__21560_21564 < count__21559_21563)){
var c_21565 = cljs.core._nth.call(null,chunk__21558_21562,i__21560_21564);
sb.append(cljs.compiler.escape_char.call(null,c_21565));


var G__21566 = seq__21557_21561;
var G__21567 = chunk__21558_21562;
var G__21568 = count__21559_21563;
var G__21569 = (i__21560_21564 + (1));
seq__21557_21561 = G__21566;
chunk__21558_21562 = G__21567;
count__21559_21563 = G__21568;
i__21560_21564 = G__21569;
continue;
} else {
var temp__5720__auto___21570 = cljs.core.seq.call(null,seq__21557_21561);
if(temp__5720__auto___21570){
var seq__21557_21571__$1 = temp__5720__auto___21570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21557_21571__$1)){
var c__18776__auto___21572 = cljs.core.chunk_first.call(null,seq__21557_21571__$1);
var G__21573 = cljs.core.chunk_rest.call(null,seq__21557_21571__$1);
var G__21574 = c__18776__auto___21572;
var G__21575 = cljs.core.count.call(null,c__18776__auto___21572);
var G__21576 = (0);
seq__21557_21561 = G__21573;
chunk__21558_21562 = G__21574;
count__21559_21563 = G__21575;
i__21560_21564 = G__21576;
continue;
} else {
var c_21577 = cljs.core.first.call(null,seq__21557_21571__$1);
sb.append(cljs.compiler.escape_char.call(null,c_21577));


var G__21578 = cljs.core.next.call(null,seq__21557_21571__$1);
var G__21579 = null;
var G__21580 = (0);
var G__21581 = (0);
seq__21557_21561 = G__21578;
chunk__21558_21562 = G__21579;
count__21559_21563 = G__21580;
i__21560_21564 = G__21581;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__18897__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18898__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18899__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18900__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18901__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18901__auto__,method_table__18897__auto__,prefer_table__18898__auto__,method_cache__18899__auto__,cached_hierarchy__18900__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__21582_21587 = ast;
var map__21582_21588__$1 = (((((!((map__21582_21587 == null))))?(((((map__21582_21587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21582_21587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21582_21587):map__21582_21587);
var env_21589 = cljs.core.get.call(null,map__21582_21588__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_21589))){
var map__21584_21590 = env_21589;
var map__21584_21591__$1 = (((((!((map__21584_21590 == null))))?(((((map__21584_21590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21584_21590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21584_21590):map__21584_21590);
var line_21592 = cljs.core.get.call(null,map__21584_21591__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21593 = cljs.core.get.call(null,map__21584_21591__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__21584_21590,map__21584_21591__$1,line_21592,column_21593,map__21582_21587,map__21582_21588__$1,env_21589){
return (function (m){
var minfo = (function (){var G__21586 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__21586,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__21586;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_21592 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__21584_21590,map__21584_21591__$1,line_21592,column_21593,map__21582_21587,map__21582_21588__$1,env_21589){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21593)?(column_21593 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__21584_21590,map__21584_21591__$1,line_21592,column_21593,map__21582_21587,map__21582_21588__$1,env_21589){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__21584_21590,map__21584_21591__$1,line_21592,column_21593,map__21582_21587,map__21582_21588__$1,env_21589))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21584_21590,map__21584_21591__$1,line_21592,column_21593,map__21582_21587,map__21582_21588__$1,env_21589))
,cljs.core.sorted_map.call(null)));
});})(map__21584_21590,map__21584_21591__$1,line_21592,column_21593,map__21582_21587,map__21582_21588__$1,env_21589))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__21602 = arguments.length;
switch (G__21602) {
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
var args_arr__19157__auto__ = [];
var len__19128__auto___21609 = arguments.length;
var i__19129__auto___21610 = (0);
while(true){
if((i__19129__auto___21610 < len__19128__auto___21609)){
args_arr__19157__auto__.push((arguments[i__19129__auto___21610]));

var G__21611 = (i__19129__auto___21610 + (1));
i__19129__auto___21610 = G__21611;
continue;
} else {
}
break;
}

var argseq__19158__auto__ = (new cljs.core.IndexedSeq(args_arr__19157__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19158__auto__);

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
var s_21612 = (function (){var G__21603 = a;
if((!(typeof a === 'string'))){
return G__21603.toString();
} else {
return G__21603;
}
})();
var temp__5724__auto___21613 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___21613 == null)){
} else {
var sm_data_21614 = temp__5724__auto___21613;
cljs.core.swap_BANG_.call(null,sm_data_21614,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_21614,temp__5724__auto___21613,s_21612){
return (function (p1__21594_SHARP_){
return (p1__21594_SHARP_ + s_21612.length);
});})(sm_data_21614,temp__5724__auto___21613,s_21612))
);
}

cljs.core.print.call(null,s_21612);

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

var seq__21604 = cljs.core.seq.call(null,xs);
var chunk__21605 = null;
var count__21606 = (0);
var i__21607 = (0);
while(true){
if((i__21607 < count__21606)){
var x = cljs.core._nth.call(null,chunk__21605,i__21607);
cljs.compiler.emits.call(null,x);


var G__21615 = seq__21604;
var G__21616 = chunk__21605;
var G__21617 = count__21606;
var G__21618 = (i__21607 + (1));
seq__21604 = G__21615;
chunk__21605 = G__21616;
count__21606 = G__21617;
i__21607 = G__21618;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21604);
if(temp__5720__auto__){
var seq__21604__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21604__$1)){
var c__18776__auto__ = cljs.core.chunk_first.call(null,seq__21604__$1);
var G__21619 = cljs.core.chunk_rest.call(null,seq__21604__$1);
var G__21620 = c__18776__auto__;
var G__21621 = cljs.core.count.call(null,c__18776__auto__);
var G__21622 = (0);
seq__21604 = G__21619;
chunk__21605 = G__21620;
count__21606 = G__21621;
i__21607 = G__21622;
continue;
} else {
var x = cljs.core.first.call(null,seq__21604__$1);
cljs.compiler.emits.call(null,x);


var G__21623 = cljs.core.next.call(null,seq__21604__$1);
var G__21624 = null;
var G__21625 = (0);
var G__21626 = (0);
seq__21604 = G__21623;
chunk__21605 = G__21624;
count__21606 = G__21625;
i__21607 = G__21626;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq21596){
var G__21597 = cljs.core.first.call(null,seq21596);
var seq21596__$1 = cljs.core.next.call(null,seq21596);
var G__21598 = cljs.core.first.call(null,seq21596__$1);
var seq21596__$2 = cljs.core.next.call(null,seq21596__$1);
var G__21599 = cljs.core.first.call(null,seq21596__$2);
var seq21596__$3 = cljs.core.next.call(null,seq21596__$2);
var G__21600 = cljs.core.first.call(null,seq21596__$3);
var seq21596__$4 = cljs.core.next.call(null,seq21596__$3);
var G__21601 = cljs.core.first.call(null,seq21596__$4);
var seq21596__$5 = cljs.core.next.call(null,seq21596__$4);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21597,G__21598,G__21599,G__21600,G__21601,seq21596__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__21627){
var map__21628 = p__21627;
var map__21628__$1 = (((((!((map__21628 == null))))?(((((map__21628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21628):map__21628);
var m = map__21628__$1;
var gen_line = cljs.core.get.call(null,map__21628__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__21637 = arguments.length;
switch (G__21637) {
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
var args_arr__19157__auto__ = [];
var len__19128__auto___21643 = arguments.length;
var i__19129__auto___21644 = (0);
while(true){
if((i__19129__auto___21644 < len__19128__auto___21643)){
args_arr__19157__auto__.push((arguments[i__19129__auto___21644]));

var G__21645 = (i__19129__auto___21644 + (1));
i__19129__auto___21644 = G__21645;
continue;
} else {
}
break;
}

var argseq__19158__auto__ = (new cljs.core.IndexedSeq(args_arr__19157__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19158__auto__);

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

var seq__21638_21646 = cljs.core.seq.call(null,xs);
var chunk__21639_21647 = null;
var count__21640_21648 = (0);
var i__21641_21649 = (0);
while(true){
if((i__21641_21649 < count__21640_21648)){
var x_21650 = cljs.core._nth.call(null,chunk__21639_21647,i__21641_21649);
cljs.compiler.emits.call(null,x_21650);


var G__21651 = seq__21638_21646;
var G__21652 = chunk__21639_21647;
var G__21653 = count__21640_21648;
var G__21654 = (i__21641_21649 + (1));
seq__21638_21646 = G__21651;
chunk__21639_21647 = G__21652;
count__21640_21648 = G__21653;
i__21641_21649 = G__21654;
continue;
} else {
var temp__5720__auto___21655 = cljs.core.seq.call(null,seq__21638_21646);
if(temp__5720__auto___21655){
var seq__21638_21656__$1 = temp__5720__auto___21655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21638_21656__$1)){
var c__18776__auto___21657 = cljs.core.chunk_first.call(null,seq__21638_21656__$1);
var G__21658 = cljs.core.chunk_rest.call(null,seq__21638_21656__$1);
var G__21659 = c__18776__auto___21657;
var G__21660 = cljs.core.count.call(null,c__18776__auto___21657);
var G__21661 = (0);
seq__21638_21646 = G__21658;
chunk__21639_21647 = G__21659;
count__21640_21648 = G__21660;
i__21641_21649 = G__21661;
continue;
} else {
var x_21662 = cljs.core.first.call(null,seq__21638_21656__$1);
cljs.compiler.emits.call(null,x_21662);


var G__21663 = cljs.core.next.call(null,seq__21638_21656__$1);
var G__21664 = null;
var G__21665 = (0);
var G__21666 = (0);
seq__21638_21646 = G__21663;
chunk__21639_21647 = G__21664;
count__21640_21648 = G__21665;
i__21641_21649 = G__21666;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21631){
var G__21632 = cljs.core.first.call(null,seq21631);
var seq21631__$1 = cljs.core.next.call(null,seq21631);
var G__21633 = cljs.core.first.call(null,seq21631__$1);
var seq21631__$2 = cljs.core.next.call(null,seq21631__$1);
var G__21634 = cljs.core.first.call(null,seq21631__$2);
var seq21631__$3 = cljs.core.next.call(null,seq21631__$2);
var G__21635 = cljs.core.first.call(null,seq21631__$3);
var seq21631__$4 = cljs.core.next.call(null,seq21631__$3);
var G__21636 = cljs.core.first.call(null,seq21631__$4);
var seq21631__$5 = cljs.core.next.call(null,seq21631__$4);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21632,G__21633,G__21634,G__21635,G__21636,seq21631__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__18969__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21667_21671 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21668_21672 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21669_21673 = true;
var _STAR_print_fn_STAR__temp_val__21670_21674 = ((function (_STAR_print_newline_STAR__orig_val__21667_21671,_STAR_print_fn_STAR__orig_val__21668_21672,_STAR_print_newline_STAR__temp_val__21669_21673,sb__18969__auto__){
return (function (x__18970__auto__){
return sb__18969__auto__.append(x__18970__auto__);
});})(_STAR_print_newline_STAR__orig_val__21667_21671,_STAR_print_fn_STAR__orig_val__21668_21672,_STAR_print_newline_STAR__temp_val__21669_21673,sb__18969__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21669_21673;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21670_21674;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21668_21672;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21667_21671;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18969__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__18897__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18898__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18899__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18900__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18901__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18901__auto__,method_table__18897__auto__,prefer_table__18898__auto__,method_cache__18899__auto__,cached_hierarchy__18900__auto__));
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
var vec__21675 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__21675,(0),null);
var name = cljs.core.nth.call(null,vec__21675,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__21675,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__21675,ns,name))
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
var vec__21678 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__21678,(0),null);
var flags = cljs.core.nth.call(null,vec__21678,(1),null);
var pattern = cljs.core.nth.call(null,vec__21678,(2),null);
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
var temp__5718__auto__ = (function (){var and__17804__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__17804__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__17804__auto__;
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
var temp__5718__auto__ = (function (){var and__17804__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__17804__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__17804__auto__;
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
return (function (p1__21681_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__21681_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__21683){
var map__21684 = p__21683;
var map__21684__$1 = (((((!((map__21684 == null))))?(((((map__21684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21684):map__21684);
var ast = map__21684__$1;
var info = cljs.core.get.call(null,map__21684__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__21684__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__21684__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__21686 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__21686__$1 = (((((!((map__21686 == null))))?(((((map__21686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21686):map__21686);
var cenv = map__21686__$1;
var options = cljs.core.get.call(null,map__21686__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__17819__auto__ = js_module_name;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
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
var reserved = (function (){var G__21688 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__17804__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__17804__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__17804__auto__;
}
})())){
return clojure.set.difference.call(null,G__21688,cljs.analyzer.es5_allowed);
} else {
return G__21688;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__17819__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__21689 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__21689,reserved);
} else {
return G__21689;
}
})();
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__21690_21691 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__21690_21692__$1 = (((G__21690_21691 instanceof cljs.core.Keyword))?G__21690_21691.fqn:null);
switch (G__21690_21692__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__17804__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__17804__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__17804__auto__;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__21694){
var map__21695 = p__21694;
var map__21695__$1 = (((((!((map__21695 == null))))?(((((map__21695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21695):map__21695);
var arg = map__21695__$1;
var env = cljs.core.get.call(null,map__21695__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__21695__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__21695__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__21695__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__21697 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__21697__$1 = (((((!((map__21697 == null))))?(((((map__21697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21697):map__21697);
var name = cljs.core.get.call(null,map__21697__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__21699){
var map__21700 = p__21699;
var map__21700__$1 = (((((!((map__21700 == null))))?(((((map__21700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21700):map__21700);
var expr = cljs.core.get.call(null,map__21700__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__21700__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__21700__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__21702_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21702_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__21703){
var map__21704 = p__21703;
var map__21704__$1 = (((((!((map__21704 == null))))?(((((map__21704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21704):map__21704);
var env = cljs.core.get.call(null,map__21704__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__21704__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__21704__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__21706){
var map__21707 = p__21706;
var map__21707__$1 = (((((!((map__21707 == null))))?(((((map__21707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21707):map__21707);
var items = cljs.core.get.call(null,map__21707__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21707__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__21709_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21709_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__21710){
var map__21711 = p__21710;
var map__21711__$1 = (((((!((map__21711 == null))))?(((((map__21711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21711):map__21711);
var items = cljs.core.get.call(null,map__21711__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___21735 = cljs.core.seq.call(null,items);
if(temp__5720__auto___21735){
var items_21736__$1 = temp__5720__auto___21735;
var vec__21713_21737 = items_21736__$1;
var seq__21714_21738 = cljs.core.seq.call(null,vec__21713_21737);
var first__21715_21739 = cljs.core.first.call(null,seq__21714_21738);
var seq__21714_21740__$1 = cljs.core.next.call(null,seq__21714_21738);
var vec__21716_21741 = first__21715_21739;
var k_21742 = cljs.core.nth.call(null,vec__21716_21741,(0),null);
var v_21743 = cljs.core.nth.call(null,vec__21716_21741,(1),null);
var r_21744 = seq__21714_21740__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_21742),"\": ",emit_js_object_val.call(null,v_21743));

var seq__21719_21745 = cljs.core.seq.call(null,r_21744);
var chunk__21720_21746 = null;
var count__21721_21747 = (0);
var i__21722_21748 = (0);
while(true){
if((i__21722_21748 < count__21721_21747)){
var vec__21729_21749 = cljs.core._nth.call(null,chunk__21720_21746,i__21722_21748);
var k_21750__$1 = cljs.core.nth.call(null,vec__21729_21749,(0),null);
var v_21751__$1 = cljs.core.nth.call(null,vec__21729_21749,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_21750__$1),"\": ",emit_js_object_val.call(null,v_21751__$1));


var G__21752 = seq__21719_21745;
var G__21753 = chunk__21720_21746;
var G__21754 = count__21721_21747;
var G__21755 = (i__21722_21748 + (1));
seq__21719_21745 = G__21752;
chunk__21720_21746 = G__21753;
count__21721_21747 = G__21754;
i__21722_21748 = G__21755;
continue;
} else {
var temp__5720__auto___21756__$1 = cljs.core.seq.call(null,seq__21719_21745);
if(temp__5720__auto___21756__$1){
var seq__21719_21757__$1 = temp__5720__auto___21756__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21719_21757__$1)){
var c__18776__auto___21758 = cljs.core.chunk_first.call(null,seq__21719_21757__$1);
var G__21759 = cljs.core.chunk_rest.call(null,seq__21719_21757__$1);
var G__21760 = c__18776__auto___21758;
var G__21761 = cljs.core.count.call(null,c__18776__auto___21758);
var G__21762 = (0);
seq__21719_21745 = G__21759;
chunk__21720_21746 = G__21760;
count__21721_21747 = G__21761;
i__21722_21748 = G__21762;
continue;
} else {
var vec__21732_21763 = cljs.core.first.call(null,seq__21719_21757__$1);
var k_21764__$1 = cljs.core.nth.call(null,vec__21732_21763,(0),null);
var v_21765__$1 = cljs.core.nth.call(null,vec__21732_21763,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_21764__$1),"\": ",emit_js_object_val.call(null,v_21765__$1));


var G__21766 = cljs.core.next.call(null,seq__21719_21757__$1);
var G__21767 = null;
var G__21768 = (0);
var G__21769 = (0);
seq__21719_21745 = G__21766;
chunk__21720_21746 = G__21767;
count__21721_21747 = G__21768;
i__21722_21748 = G__21769;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__21770){
var map__21771 = p__21770;
var map__21771__$1 = (((((!((map__21771 == null))))?(((((map__21771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21771):map__21771);
var keys = cljs.core.get.call(null,map__21771__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__21771__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__21771__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__21773){
var map__21774 = p__21773;
var map__21774__$1 = (((((!((map__21774 == null))))?(((((map__21774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21774):map__21774);
var items = cljs.core.get.call(null,map__21774__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21774__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__21776){
var map__21777 = p__21776;
var map__21777__$1 = (((((!((map__21777 == null))))?(((((map__21777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21777):map__21777);
var expr = cljs.core.get.call(null,map__21777__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__21779){
var map__21780 = p__21779;
var map__21780__$1 = (((((!((map__21780 == null))))?(((((map__21780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21780):map__21780);
var form = cljs.core.get.call(null,map__21780__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__21780__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__21782 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__21782__$1 = (((((!((map__21782 == null))))?(((((map__21782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21782):map__21782);
var op = cljs.core.get.call(null,map__21782__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__21782__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__21782__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__17819__auto__ = (function (){var and__17804__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__17804__auto__){
var and__17804__auto____$1 = form;
if(cljs.core.truth_(and__17804__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__17804__auto____$1;
}
} else {
return and__17804__auto__;
}
})();
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
var and__17804__auto__ = (!((const_expr == null)));
if(and__17804__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__17804__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__21784 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__21784__$1 = (((((!((map__21784 == null))))?(((((map__21784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21784):map__21784);
var op = cljs.core.get.call(null,map__21784__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__21784__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__21784__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__17819__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__17819__auto__){
return or__17819__auto__;
} else {
var and__17804__auto__ = (!((const_expr == null)));
if(and__17804__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__17804__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__17819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__21786){
var map__21787 = p__21786;
var map__21787__$1 = (((((!((map__21787 == null))))?(((((map__21787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21787):map__21787);
var test = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__17819__auto__ = unchecked;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__21789){
var map__21790 = p__21789;
var map__21790__$1 = (((((!((map__21790 == null))))?(((((map__21790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21790):map__21790);
var v = cljs.core.get.call(null,map__21790__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__21790__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__21790__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__21790__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__21792_21828 = cljs.core.seq.call(null,nodes);
var chunk__21793_21829 = null;
var count__21794_21830 = (0);
var i__21795_21831 = (0);
while(true){
if((i__21795_21831 < count__21794_21830)){
var map__21812_21832 = cljs.core._nth.call(null,chunk__21793_21829,i__21795_21831);
var map__21812_21833__$1 = (((((!((map__21812_21832 == null))))?(((((map__21812_21832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21812_21832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21812_21832):map__21812_21832);
var ts_21834 = cljs.core.get.call(null,map__21812_21833__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__21813_21835 = cljs.core.get.call(null,map__21812_21833__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__21813_21836__$1 = (((((!((map__21813_21835 == null))))?(((((map__21813_21835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21813_21835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21813_21835):map__21813_21835);
var then_21837 = cljs.core.get.call(null,map__21813_21836__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__21816_21838 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_21834));
var chunk__21817_21839 = null;
var count__21818_21840 = (0);
var i__21819_21841 = (0);
while(true){
if((i__21819_21841 < count__21818_21840)){
var test_21842 = cljs.core._nth.call(null,chunk__21817_21839,i__21819_21841);
cljs.compiler.emitln.call(null,"case ",test_21842,":");


var G__21843 = seq__21816_21838;
var G__21844 = chunk__21817_21839;
var G__21845 = count__21818_21840;
var G__21846 = (i__21819_21841 + (1));
seq__21816_21838 = G__21843;
chunk__21817_21839 = G__21844;
count__21818_21840 = G__21845;
i__21819_21841 = G__21846;
continue;
} else {
var temp__5720__auto___21847 = cljs.core.seq.call(null,seq__21816_21838);
if(temp__5720__auto___21847){
var seq__21816_21848__$1 = temp__5720__auto___21847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21816_21848__$1)){
var c__18776__auto___21849 = cljs.core.chunk_first.call(null,seq__21816_21848__$1);
var G__21850 = cljs.core.chunk_rest.call(null,seq__21816_21848__$1);
var G__21851 = c__18776__auto___21849;
var G__21852 = cljs.core.count.call(null,c__18776__auto___21849);
var G__21853 = (0);
seq__21816_21838 = G__21850;
chunk__21817_21839 = G__21851;
count__21818_21840 = G__21852;
i__21819_21841 = G__21853;
continue;
} else {
var test_21854 = cljs.core.first.call(null,seq__21816_21848__$1);
cljs.compiler.emitln.call(null,"case ",test_21854,":");


var G__21855 = cljs.core.next.call(null,seq__21816_21848__$1);
var G__21856 = null;
var G__21857 = (0);
var G__21858 = (0);
seq__21816_21838 = G__21855;
chunk__21817_21839 = G__21856;
count__21818_21840 = G__21857;
i__21819_21841 = G__21858;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_21837);
} else {
cljs.compiler.emitln.call(null,then_21837);
}

cljs.compiler.emitln.call(null,"break;");


var G__21859 = seq__21792_21828;
var G__21860 = chunk__21793_21829;
var G__21861 = count__21794_21830;
var G__21862 = (i__21795_21831 + (1));
seq__21792_21828 = G__21859;
chunk__21793_21829 = G__21860;
count__21794_21830 = G__21861;
i__21795_21831 = G__21862;
continue;
} else {
var temp__5720__auto___21863 = cljs.core.seq.call(null,seq__21792_21828);
if(temp__5720__auto___21863){
var seq__21792_21864__$1 = temp__5720__auto___21863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21792_21864__$1)){
var c__18776__auto___21865 = cljs.core.chunk_first.call(null,seq__21792_21864__$1);
var G__21866 = cljs.core.chunk_rest.call(null,seq__21792_21864__$1);
var G__21867 = c__18776__auto___21865;
var G__21868 = cljs.core.count.call(null,c__18776__auto___21865);
var G__21869 = (0);
seq__21792_21828 = G__21866;
chunk__21793_21829 = G__21867;
count__21794_21830 = G__21868;
i__21795_21831 = G__21869;
continue;
} else {
var map__21820_21870 = cljs.core.first.call(null,seq__21792_21864__$1);
var map__21820_21871__$1 = (((((!((map__21820_21870 == null))))?(((((map__21820_21870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21820_21870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21820_21870):map__21820_21870);
var ts_21872 = cljs.core.get.call(null,map__21820_21871__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__21821_21873 = cljs.core.get.call(null,map__21820_21871__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__21821_21874__$1 = (((((!((map__21821_21873 == null))))?(((((map__21821_21873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21821_21873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21821_21873):map__21821_21873);
var then_21875 = cljs.core.get.call(null,map__21821_21874__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__21824_21876 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_21872));
var chunk__21825_21877 = null;
var count__21826_21878 = (0);
var i__21827_21879 = (0);
while(true){
if((i__21827_21879 < count__21826_21878)){
var test_21880 = cljs.core._nth.call(null,chunk__21825_21877,i__21827_21879);
cljs.compiler.emitln.call(null,"case ",test_21880,":");


var G__21881 = seq__21824_21876;
var G__21882 = chunk__21825_21877;
var G__21883 = count__21826_21878;
var G__21884 = (i__21827_21879 + (1));
seq__21824_21876 = G__21881;
chunk__21825_21877 = G__21882;
count__21826_21878 = G__21883;
i__21827_21879 = G__21884;
continue;
} else {
var temp__5720__auto___21885__$1 = cljs.core.seq.call(null,seq__21824_21876);
if(temp__5720__auto___21885__$1){
var seq__21824_21886__$1 = temp__5720__auto___21885__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21824_21886__$1)){
var c__18776__auto___21887 = cljs.core.chunk_first.call(null,seq__21824_21886__$1);
var G__21888 = cljs.core.chunk_rest.call(null,seq__21824_21886__$1);
var G__21889 = c__18776__auto___21887;
var G__21890 = cljs.core.count.call(null,c__18776__auto___21887);
var G__21891 = (0);
seq__21824_21876 = G__21888;
chunk__21825_21877 = G__21889;
count__21826_21878 = G__21890;
i__21827_21879 = G__21891;
continue;
} else {
var test_21892 = cljs.core.first.call(null,seq__21824_21886__$1);
cljs.compiler.emitln.call(null,"case ",test_21892,":");


var G__21893 = cljs.core.next.call(null,seq__21824_21886__$1);
var G__21894 = null;
var G__21895 = (0);
var G__21896 = (0);
seq__21824_21876 = G__21893;
chunk__21825_21877 = G__21894;
count__21826_21878 = G__21895;
i__21827_21879 = G__21896;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_21875);
} else {
cljs.compiler.emitln.call(null,then_21875);
}

cljs.compiler.emitln.call(null,"break;");


var G__21897 = cljs.core.next.call(null,seq__21792_21864__$1);
var G__21898 = null;
var G__21899 = (0);
var G__21900 = (0);
seq__21792_21828 = G__21897;
chunk__21793_21829 = G__21898;
count__21794_21830 = G__21899;
i__21795_21831 = G__21900;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__21901){
var map__21902 = p__21901;
var map__21902__$1 = (((((!((map__21902 == null))))?(((((map__21902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21902):map__21902);
var throw$ = cljs.core.get.call(null,map__21902__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__21902__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__21905 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__21905,(0),null);
var rstr = cljs.core.nth.call(null,vec__21905,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__21905,fstr,rstr,ret_t,axstr){
return (function (p1__21904_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__21904_SHARP_);
});})(idx,vec__21905,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__21908 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__21908,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__21908;
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
return (function (p1__21909_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__21909_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__21910 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__21911 = cljs.core.seq.call(null,vec__21910);
var first__21912 = cljs.core.first.call(null,seq__21911);
var seq__21911__$1 = cljs.core.next.call(null,seq__21911);
var p = first__21912;
var first__21912__$1 = cljs.core.first.call(null,seq__21911__$1);
var seq__21911__$2 = cljs.core.next.call(null,seq__21911__$1);
var ts = first__21912__$1;
var first__21912__$2 = cljs.core.first.call(null,seq__21911__$2);
var seq__21911__$3 = cljs.core.next.call(null,seq__21911__$2);
var n = first__21912__$2;
var xs = seq__21911__$3;
if(cljs.core.truth_((function (){var and__17804__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__17804__auto__){
var and__17804__auto____$1 = ts;
if(cljs.core.truth_(and__17804__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__17804__auto____$1;
}
} else {
return and__17804__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__21913 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__21914 = cljs.core.seq.call(null,vec__21913);
var first__21915 = cljs.core.first.call(null,seq__21914);
var seq__21914__$1 = cljs.core.next.call(null,seq__21914);
var p = first__21915;
var first__21915__$1 = cljs.core.first.call(null,seq__21914__$1);
var seq__21914__$2 = cljs.core.next.call(null,seq__21914__$1);
var ts = first__21915__$1;
var xs = seq__21914__$2;
if(cljs.core.truth_((function (){var and__17804__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__17804__auto__){
var and__17804__auto____$1 = ts;
if(cljs.core.truth_(and__17804__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__17804__auto____$1;
}
} else {
return and__17804__auto__;
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
var G__21918 = arguments.length;
switch (G__21918) {
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
var vec__21926 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__21916_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__21916_SHARP_);
} else {
return p1__21916_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__21927 = cljs.core.seq.call(null,vec__21926);
var first__21928 = cljs.core.first.call(null,seq__21927);
var seq__21927__$1 = cljs.core.next.call(null,seq__21927);
var x = first__21928;
var ys = seq__21927__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__21929 = cljs.core.seq.call(null,ys);
var chunk__21930 = null;
var count__21931 = (0);
var i__21932 = (0);
while(true){
if((i__21932 < count__21931)){
var next_line = cljs.core._nth.call(null,chunk__21930,i__21932);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__21938 = seq__21929;
var G__21939 = chunk__21930;
var G__21940 = count__21931;
var G__21941 = (i__21932 + (1));
seq__21929 = G__21938;
chunk__21930 = G__21939;
count__21931 = G__21940;
i__21932 = G__21941;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21929);
if(temp__5720__auto__){
var seq__21929__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21929__$1)){
var c__18776__auto__ = cljs.core.chunk_first.call(null,seq__21929__$1);
var G__21942 = cljs.core.chunk_rest.call(null,seq__21929__$1);
var G__21943 = c__18776__auto__;
var G__21944 = cljs.core.count.call(null,c__18776__auto__);
var G__21945 = (0);
seq__21929 = G__21942;
chunk__21930 = G__21943;
count__21931 = G__21944;
i__21932 = G__21945;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__21929__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__21946 = cljs.core.next.call(null,seq__21929__$1);
var G__21947 = null;
var G__21948 = (0);
var G__21949 = (0);
seq__21929 = G__21946;
chunk__21930 = G__21947;
count__21931 = G__21948;
i__21932 = G__21949;
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

var seq__21933_21950 = cljs.core.seq.call(null,docs__$2);
var chunk__21934_21951 = null;
var count__21935_21952 = (0);
var i__21936_21953 = (0);
while(true){
if((i__21936_21953 < count__21935_21952)){
var e_21954 = cljs.core._nth.call(null,chunk__21934_21951,i__21936_21953);
if(cljs.core.truth_(e_21954)){
print_comment_lines.call(null,e_21954);
} else {
}


var G__21955 = seq__21933_21950;
var G__21956 = chunk__21934_21951;
var G__21957 = count__21935_21952;
var G__21958 = (i__21936_21953 + (1));
seq__21933_21950 = G__21955;
chunk__21934_21951 = G__21956;
count__21935_21952 = G__21957;
i__21936_21953 = G__21958;
continue;
} else {
var temp__5720__auto___21959 = cljs.core.seq.call(null,seq__21933_21950);
if(temp__5720__auto___21959){
var seq__21933_21960__$1 = temp__5720__auto___21959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21933_21960__$1)){
var c__18776__auto___21961 = cljs.core.chunk_first.call(null,seq__21933_21960__$1);
var G__21962 = cljs.core.chunk_rest.call(null,seq__21933_21960__$1);
var G__21963 = c__18776__auto___21961;
var G__21964 = cljs.core.count.call(null,c__18776__auto___21961);
var G__21965 = (0);
seq__21933_21950 = G__21962;
chunk__21934_21951 = G__21963;
count__21935_21952 = G__21964;
i__21936_21953 = G__21965;
continue;
} else {
var e_21966 = cljs.core.first.call(null,seq__21933_21960__$1);
if(cljs.core.truth_(e_21966)){
print_comment_lines.call(null,e_21966);
} else {
}


var G__21967 = cljs.core.next.call(null,seq__21933_21960__$1);
var G__21968 = null;
var G__21969 = (0);
var G__21970 = (0);
seq__21933_21950 = G__21967;
chunk__21934_21951 = G__21968;
count__21935_21952 = G__21969;
i__21936_21953 = G__21970;
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
var and__17804__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__21972_SHARP_){
return goog.string.startsWith(p1__21972_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__17804__auto__)){
var and__17804__auto____$1 = opts;
if(cljs.core.truth_(and__17804__auto____$1)){
var and__17804__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__17804__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__17804__auto____$2;
}
} else {
return and__17804__auto____$1;
}
} else {
return and__17804__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__21973){
var map__21974 = p__21973;
var map__21974__$1 = (((((!((map__21974 == null))))?(((((map__21974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21974):map__21974);
var doc = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__17819__auto__ = init;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
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

if(cljs.core.truth_((function (){var and__17804__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__17804__auto__){
return test;
} else {
return and__17804__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__21976){
var map__21977 = p__21976;
var map__21977__$1 = (((((!((map__21977 == null))))?(((((map__21977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21977):map__21977);
var name = cljs.core.get.call(null,map__21977__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__21977__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__21977__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__21979_22003 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__21980_22004 = null;
var count__21981_22005 = (0);
var i__21982_22006 = (0);
while(true){
if((i__21982_22006 < count__21981_22005)){
var vec__21989_22007 = cljs.core._nth.call(null,chunk__21980_22004,i__21982_22006);
var i_22008 = cljs.core.nth.call(null,vec__21989_22007,(0),null);
var param_22009 = cljs.core.nth.call(null,vec__21989_22007,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_22009);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__22010 = seq__21979_22003;
var G__22011 = chunk__21980_22004;
var G__22012 = count__21981_22005;
var G__22013 = (i__21982_22006 + (1));
seq__21979_22003 = G__22010;
chunk__21980_22004 = G__22011;
count__21981_22005 = G__22012;
i__21982_22006 = G__22013;
continue;
} else {
var temp__5720__auto___22014 = cljs.core.seq.call(null,seq__21979_22003);
if(temp__5720__auto___22014){
var seq__21979_22015__$1 = temp__5720__auto___22014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21979_22015__$1)){
var c__18776__auto___22016 = cljs.core.chunk_first.call(null,seq__21979_22015__$1);
var G__22017 = cljs.core.chunk_rest.call(null,seq__21979_22015__$1);
var G__22018 = c__18776__auto___22016;
var G__22019 = cljs.core.count.call(null,c__18776__auto___22016);
var G__22020 = (0);
seq__21979_22003 = G__22017;
chunk__21980_22004 = G__22018;
count__21981_22005 = G__22019;
i__21982_22006 = G__22020;
continue;
} else {
var vec__21992_22021 = cljs.core.first.call(null,seq__21979_22015__$1);
var i_22022 = cljs.core.nth.call(null,vec__21992_22021,(0),null);
var param_22023 = cljs.core.nth.call(null,vec__21992_22021,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_22023);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__22024 = cljs.core.next.call(null,seq__21979_22015__$1);
var G__22025 = null;
var G__22026 = (0);
var G__22027 = (0);
seq__21979_22003 = G__22024;
chunk__21980_22004 = G__22025;
count__21981_22005 = G__22026;
i__21982_22006 = G__22027;
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

var seq__21995_22028 = cljs.core.seq.call(null,params);
var chunk__21996_22029 = null;
var count__21997_22030 = (0);
var i__21998_22031 = (0);
while(true){
if((i__21998_22031 < count__21997_22030)){
var param_22032 = cljs.core._nth.call(null,chunk__21996_22029,i__21998_22031);
cljs.compiler.emit.call(null,param_22032);

if(cljs.core._EQ_.call(null,param_22032,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22033 = seq__21995_22028;
var G__22034 = chunk__21996_22029;
var G__22035 = count__21997_22030;
var G__22036 = (i__21998_22031 + (1));
seq__21995_22028 = G__22033;
chunk__21996_22029 = G__22034;
count__21997_22030 = G__22035;
i__21998_22031 = G__22036;
continue;
} else {
var temp__5720__auto___22037 = cljs.core.seq.call(null,seq__21995_22028);
if(temp__5720__auto___22037){
var seq__21995_22038__$1 = temp__5720__auto___22037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21995_22038__$1)){
var c__18776__auto___22039 = cljs.core.chunk_first.call(null,seq__21995_22038__$1);
var G__22040 = cljs.core.chunk_rest.call(null,seq__21995_22038__$1);
var G__22041 = c__18776__auto___22039;
var G__22042 = cljs.core.count.call(null,c__18776__auto___22039);
var G__22043 = (0);
seq__21995_22028 = G__22040;
chunk__21996_22029 = G__22041;
count__21997_22030 = G__22042;
i__21998_22031 = G__22043;
continue;
} else {
var param_22044 = cljs.core.first.call(null,seq__21995_22038__$1);
cljs.compiler.emit.call(null,param_22044);

if(cljs.core._EQ_.call(null,param_22044,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22045 = cljs.core.next.call(null,seq__21995_22038__$1);
var G__22046 = null;
var G__22047 = (0);
var G__22048 = (0);
seq__21995_22028 = G__22045;
chunk__21996_22029 = G__22046;
count__21997_22030 = G__22047;
i__21998_22031 = G__22048;
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

var seq__21999_22049 = cljs.core.seq.call(null,params);
var chunk__22000_22050 = null;
var count__22001_22051 = (0);
var i__22002_22052 = (0);
while(true){
if((i__22002_22052 < count__22001_22051)){
var param_22053 = cljs.core._nth.call(null,chunk__22000_22050,i__22002_22052);
cljs.compiler.emit.call(null,param_22053);

if(cljs.core._EQ_.call(null,param_22053,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22054 = seq__21999_22049;
var G__22055 = chunk__22000_22050;
var G__22056 = count__22001_22051;
var G__22057 = (i__22002_22052 + (1));
seq__21999_22049 = G__22054;
chunk__22000_22050 = G__22055;
count__22001_22051 = G__22056;
i__22002_22052 = G__22057;
continue;
} else {
var temp__5720__auto___22058 = cljs.core.seq.call(null,seq__21999_22049);
if(temp__5720__auto___22058){
var seq__21999_22059__$1 = temp__5720__auto___22058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21999_22059__$1)){
var c__18776__auto___22060 = cljs.core.chunk_first.call(null,seq__21999_22059__$1);
var G__22061 = cljs.core.chunk_rest.call(null,seq__21999_22059__$1);
var G__22062 = c__18776__auto___22060;
var G__22063 = cljs.core.count.call(null,c__18776__auto___22060);
var G__22064 = (0);
seq__21999_22049 = G__22061;
chunk__22000_22050 = G__22062;
count__22001_22051 = G__22063;
i__22002_22052 = G__22064;
continue;
} else {
var param_22065 = cljs.core.first.call(null,seq__21999_22059__$1);
cljs.compiler.emit.call(null,param_22065);

if(cljs.core._EQ_.call(null,param_22065,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22066 = cljs.core.next.call(null,seq__21999_22059__$1);
var G__22067 = null;
var G__22068 = (0);
var G__22069 = (0);
seq__21999_22049 = G__22066;
chunk__22000_22050 = G__22067;
count__22001_22051 = G__22068;
i__22002_22052 = G__22069;
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
var seq__22070 = cljs.core.seq.call(null,params);
var chunk__22071 = null;
var count__22072 = (0);
var i__22073 = (0);
while(true){
if((i__22073 < count__22072)){
var param = cljs.core._nth.call(null,chunk__22071,i__22073);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22074 = seq__22070;
var G__22075 = chunk__22071;
var G__22076 = count__22072;
var G__22077 = (i__22073 + (1));
seq__22070 = G__22074;
chunk__22071 = G__22075;
count__22072 = G__22076;
i__22073 = G__22077;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22070);
if(temp__5720__auto__){
var seq__22070__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22070__$1)){
var c__18776__auto__ = cljs.core.chunk_first.call(null,seq__22070__$1);
var G__22078 = cljs.core.chunk_rest.call(null,seq__22070__$1);
var G__22079 = c__18776__auto__;
var G__22080 = cljs.core.count.call(null,c__18776__auto__);
var G__22081 = (0);
seq__22070 = G__22078;
chunk__22071 = G__22079;
count__22072 = G__22080;
i__22073 = G__22081;
continue;
} else {
var param = cljs.core.first.call(null,seq__22070__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22082 = cljs.core.next.call(null,seq__22070__$1);
var G__22083 = null;
var G__22084 = (0);
var G__22085 = (0);
seq__22070 = G__22082;
chunk__22071 = G__22083;
count__22072 = G__22084;
i__22073 = G__22085;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__22086){
var map__22087 = p__22086;
var map__22087__$1 = (((((!((map__22087 == null))))?(((((map__22087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22087):map__22087);
var expr = cljs.core.get.call(null,map__22087__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__22087__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__22087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22087__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__22087__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__22087__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__22089){
var map__22090 = p__22089;
var map__22090__$1 = (((((!((map__22090 == null))))?(((((map__22090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22090):map__22090);
var f = map__22090__$1;
var expr = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_22100__$1 = (function (){var or__17819__auto__ = name;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_22101 = cljs.compiler.munge.call(null,name_22100__$1);
var delegate_name_22102 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22101),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_22102," = function (");

var seq__22092_22103 = cljs.core.seq.call(null,params);
var chunk__22093_22104 = null;
var count__22094_22105 = (0);
var i__22095_22106 = (0);
while(true){
if((i__22095_22106 < count__22094_22105)){
var param_22107 = cljs.core._nth.call(null,chunk__22093_22104,i__22095_22106);
cljs.compiler.emit.call(null,param_22107);

if(cljs.core._EQ_.call(null,param_22107,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22108 = seq__22092_22103;
var G__22109 = chunk__22093_22104;
var G__22110 = count__22094_22105;
var G__22111 = (i__22095_22106 + (1));
seq__22092_22103 = G__22108;
chunk__22093_22104 = G__22109;
count__22094_22105 = G__22110;
i__22095_22106 = G__22111;
continue;
} else {
var temp__5720__auto___22112 = cljs.core.seq.call(null,seq__22092_22103);
if(temp__5720__auto___22112){
var seq__22092_22113__$1 = temp__5720__auto___22112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22092_22113__$1)){
var c__18776__auto___22114 = cljs.core.chunk_first.call(null,seq__22092_22113__$1);
var G__22115 = cljs.core.chunk_rest.call(null,seq__22092_22113__$1);
var G__22116 = c__18776__auto___22114;
var G__22117 = cljs.core.count.call(null,c__18776__auto___22114);
var G__22118 = (0);
seq__22092_22103 = G__22115;
chunk__22093_22104 = G__22116;
count__22094_22105 = G__22117;
i__22095_22106 = G__22118;
continue;
} else {
var param_22119 = cljs.core.first.call(null,seq__22092_22113__$1);
cljs.compiler.emit.call(null,param_22119);

if(cljs.core._EQ_.call(null,param_22119,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22120 = cljs.core.next.call(null,seq__22092_22113__$1);
var G__22121 = null;
var G__22122 = (0);
var G__22123 = (0);
seq__22092_22103 = G__22120;
chunk__22093_22104 = G__22121;
count__22094_22105 = G__22122;
i__22095_22106 = G__22123;
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

cljs.compiler.emitln.call(null,"var ",mname_22101," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_22124 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_22124,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_22102,".call(this,");

var seq__22096_22125 = cljs.core.seq.call(null,params);
var chunk__22097_22126 = null;
var count__22098_22127 = (0);
var i__22099_22128 = (0);
while(true){
if((i__22099_22128 < count__22098_22127)){
var param_22129 = cljs.core._nth.call(null,chunk__22097_22126,i__22099_22128);
cljs.compiler.emit.call(null,param_22129);

if(cljs.core._EQ_.call(null,param_22129,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22130 = seq__22096_22125;
var G__22131 = chunk__22097_22126;
var G__22132 = count__22098_22127;
var G__22133 = (i__22099_22128 + (1));
seq__22096_22125 = G__22130;
chunk__22097_22126 = G__22131;
count__22098_22127 = G__22132;
i__22099_22128 = G__22133;
continue;
} else {
var temp__5720__auto___22134 = cljs.core.seq.call(null,seq__22096_22125);
if(temp__5720__auto___22134){
var seq__22096_22135__$1 = temp__5720__auto___22134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22096_22135__$1)){
var c__18776__auto___22136 = cljs.core.chunk_first.call(null,seq__22096_22135__$1);
var G__22137 = cljs.core.chunk_rest.call(null,seq__22096_22135__$1);
var G__22138 = c__18776__auto___22136;
var G__22139 = cljs.core.count.call(null,c__18776__auto___22136);
var G__22140 = (0);
seq__22096_22125 = G__22137;
chunk__22097_22126 = G__22138;
count__22098_22127 = G__22139;
i__22099_22128 = G__22140;
continue;
} else {
var param_22141 = cljs.core.first.call(null,seq__22096_22135__$1);
cljs.compiler.emit.call(null,param_22141);

if(cljs.core._EQ_.call(null,param_22141,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22142 = cljs.core.next.call(null,seq__22096_22135__$1);
var G__22143 = null;
var G__22144 = (0);
var G__22145 = (0);
seq__22096_22125 = G__22142;
chunk__22097_22126 = G__22143;
count__22098_22127 = G__22144;
i__22099_22128 = G__22145;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_22101,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_22101,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_22100__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_22101,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_22102,";");

cljs.compiler.emitln.call(null,"return ",mname_22101,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__22149){
var map__22150 = p__22149;
var map__22150__$1 = (((((!((map__22150 == null))))?(((((map__22150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22150):map__22150);
var variadic = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__22150,map__22150__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22146_SHARP_){
var and__17804__auto__ = p1__22146_SHARP_;
if(cljs.core.truth_(and__17804__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__22146_SHARP_));
} else {
return and__17804__auto__;
}
});})(map__22150,map__22150__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_22203__$1 = (function (){var or__17819__auto__ = name;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_22204 = cljs.compiler.munge.call(null,name_22203__$1);
var maxparams_22205 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_22206 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_22203__$1,mname_22204,maxparams_22205,loop_locals,map__22150,map__22150__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22204),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_22203__$1,mname_22204,maxparams_22205,loop_locals,map__22150,map__22150__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_22207 = cljs.core.sort_by.call(null,((function (name_22203__$1,mname_22204,maxparams_22205,mmap_22206,loop_locals,map__22150,map__22150__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22147_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22147_SHARP_)));
});})(name_22203__$1,mname_22204,maxparams_22205,mmap_22206,loop_locals,map__22150,map__22150__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_22206));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_22204," = null;");

var seq__22152_22208 = cljs.core.seq.call(null,ms_22207);
var chunk__22153_22209 = null;
var count__22154_22210 = (0);
var i__22155_22211 = (0);
while(true){
if((i__22155_22211 < count__22154_22210)){
var vec__22162_22212 = cljs.core._nth.call(null,chunk__22153_22209,i__22155_22211);
var n_22213 = cljs.core.nth.call(null,vec__22162_22212,(0),null);
var meth_22214 = cljs.core.nth.call(null,vec__22162_22212,(1),null);
cljs.compiler.emits.call(null,"var ",n_22213," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22214))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_22214);
} else {
cljs.compiler.emit_fn_method.call(null,meth_22214);
}

cljs.compiler.emitln.call(null,";");


var G__22215 = seq__22152_22208;
var G__22216 = chunk__22153_22209;
var G__22217 = count__22154_22210;
var G__22218 = (i__22155_22211 + (1));
seq__22152_22208 = G__22215;
chunk__22153_22209 = G__22216;
count__22154_22210 = G__22217;
i__22155_22211 = G__22218;
continue;
} else {
var temp__5720__auto___22219 = cljs.core.seq.call(null,seq__22152_22208);
if(temp__5720__auto___22219){
var seq__22152_22220__$1 = temp__5720__auto___22219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22152_22220__$1)){
var c__18776__auto___22221 = cljs.core.chunk_first.call(null,seq__22152_22220__$1);
var G__22222 = cljs.core.chunk_rest.call(null,seq__22152_22220__$1);
var G__22223 = c__18776__auto___22221;
var G__22224 = cljs.core.count.call(null,c__18776__auto___22221);
var G__22225 = (0);
seq__22152_22208 = G__22222;
chunk__22153_22209 = G__22223;
count__22154_22210 = G__22224;
i__22155_22211 = G__22225;
continue;
} else {
var vec__22165_22226 = cljs.core.first.call(null,seq__22152_22220__$1);
var n_22227 = cljs.core.nth.call(null,vec__22165_22226,(0),null);
var meth_22228 = cljs.core.nth.call(null,vec__22165_22226,(1),null);
cljs.compiler.emits.call(null,"var ",n_22227," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22228))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_22228);
} else {
cljs.compiler.emit_fn_method.call(null,meth_22228);
}

cljs.compiler.emitln.call(null,";");


var G__22229 = cljs.core.next.call(null,seq__22152_22220__$1);
var G__22230 = null;
var G__22231 = (0);
var G__22232 = (0);
seq__22152_22208 = G__22229;
chunk__22153_22209 = G__22230;
count__22154_22210 = G__22231;
i__22155_22211 = G__22232;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_22204," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_22205),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_22205)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_22205));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__22168_22233 = cljs.core.seq.call(null,ms_22207);
var chunk__22169_22234 = null;
var count__22170_22235 = (0);
var i__22171_22236 = (0);
while(true){
if((i__22171_22236 < count__22170_22235)){
var vec__22178_22237 = cljs.core._nth.call(null,chunk__22169_22234,i__22171_22236);
var n_22238 = cljs.core.nth.call(null,vec__22178_22237,(0),null);
var meth_22239 = cljs.core.nth.call(null,vec__22178_22237,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22239))){
cljs.compiler.emitln.call(null,"default:");

var restarg_22240 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_22240," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_22241 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_22240," = new cljs.core.IndexedSeq(",a_22241,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_22238,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_22205)),(((cljs.core.count.call(null,maxparams_22205) > (1)))?", ":null),restarg_22240,");");
} else {
var pcnt_22242 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22239));
cljs.compiler.emitln.call(null,"case ",pcnt_22242,":");

cljs.compiler.emitln.call(null,"return ",n_22238,".call(this",(((pcnt_22242 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_22242,maxparams_22205)),null,(1),null)),(2),null))),");");
}


var G__22243 = seq__22168_22233;
var G__22244 = chunk__22169_22234;
var G__22245 = count__22170_22235;
var G__22246 = (i__22171_22236 + (1));
seq__22168_22233 = G__22243;
chunk__22169_22234 = G__22244;
count__22170_22235 = G__22245;
i__22171_22236 = G__22246;
continue;
} else {
var temp__5720__auto___22247 = cljs.core.seq.call(null,seq__22168_22233);
if(temp__5720__auto___22247){
var seq__22168_22248__$1 = temp__5720__auto___22247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22168_22248__$1)){
var c__18776__auto___22249 = cljs.core.chunk_first.call(null,seq__22168_22248__$1);
var G__22250 = cljs.core.chunk_rest.call(null,seq__22168_22248__$1);
var G__22251 = c__18776__auto___22249;
var G__22252 = cljs.core.count.call(null,c__18776__auto___22249);
var G__22253 = (0);
seq__22168_22233 = G__22250;
chunk__22169_22234 = G__22251;
count__22170_22235 = G__22252;
i__22171_22236 = G__22253;
continue;
} else {
var vec__22181_22254 = cljs.core.first.call(null,seq__22168_22248__$1);
var n_22255 = cljs.core.nth.call(null,vec__22181_22254,(0),null);
var meth_22256 = cljs.core.nth.call(null,vec__22181_22254,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22256))){
cljs.compiler.emitln.call(null,"default:");

var restarg_22257 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_22257," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_22258 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_22257," = new cljs.core.IndexedSeq(",a_22258,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_22255,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_22205)),(((cljs.core.count.call(null,maxparams_22205) > (1)))?", ":null),restarg_22257,");");
} else {
var pcnt_22259 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22256));
cljs.compiler.emitln.call(null,"case ",pcnt_22259,":");

cljs.compiler.emitln.call(null,"return ",n_22255,".call(this",(((pcnt_22259 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_22259,maxparams_22205)),null,(1),null)),(2),null))),");");
}


var G__22260 = cljs.core.next.call(null,seq__22168_22248__$1);
var G__22261 = null;
var G__22262 = (0);
var G__22263 = (0);
seq__22168_22233 = G__22260;
chunk__22169_22234 = G__22261;
count__22170_22235 = G__22262;
i__22171_22236 = G__22263;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_22264 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_22207)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_22264,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_22204,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_22204,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_22203__$1,mname_22204,maxparams_22205,mmap_22206,ms_22207,loop_locals,map__22150,map__22150__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22148_SHARP_){
var vec__22184 = p1__22148_SHARP_;
var n = cljs.core.nth.call(null,vec__22184,(0),null);
var m = cljs.core.nth.call(null,vec__22184,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_22203__$1,mname_22204,maxparams_22205,mmap_22206,ms_22207,loop_locals,map__22150,map__22150__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_22207),".cljs$lang$applyTo;");
} else {
}

var seq__22187_22265 = cljs.core.seq.call(null,ms_22207);
var chunk__22188_22266 = null;
var count__22189_22267 = (0);
var i__22190_22268 = (0);
while(true){
if((i__22190_22268 < count__22189_22267)){
var vec__22197_22269 = cljs.core._nth.call(null,chunk__22188_22266,i__22190_22268);
var n_22270 = cljs.core.nth.call(null,vec__22197_22269,(0),null);
var meth_22271 = cljs.core.nth.call(null,vec__22197_22269,(1),null);
var c_22272 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22271));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22271))){
cljs.compiler.emitln.call(null,mname_22204,".cljs$core$IFn$_invoke$arity$variadic = ",n_22270,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_22204,".cljs$core$IFn$_invoke$arity$",c_22272," = ",n_22270,";");
}


var G__22273 = seq__22187_22265;
var G__22274 = chunk__22188_22266;
var G__22275 = count__22189_22267;
var G__22276 = (i__22190_22268 + (1));
seq__22187_22265 = G__22273;
chunk__22188_22266 = G__22274;
count__22189_22267 = G__22275;
i__22190_22268 = G__22276;
continue;
} else {
var temp__5720__auto___22277 = cljs.core.seq.call(null,seq__22187_22265);
if(temp__5720__auto___22277){
var seq__22187_22278__$1 = temp__5720__auto___22277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22187_22278__$1)){
var c__18776__auto___22279 = cljs.core.chunk_first.call(null,seq__22187_22278__$1);
var G__22280 = cljs.core.chunk_rest.call(null,seq__22187_22278__$1);
var G__22281 = c__18776__auto___22279;
var G__22282 = cljs.core.count.call(null,c__18776__auto___22279);
var G__22283 = (0);
seq__22187_22265 = G__22280;
chunk__22188_22266 = G__22281;
count__22189_22267 = G__22282;
i__22190_22268 = G__22283;
continue;
} else {
var vec__22200_22284 = cljs.core.first.call(null,seq__22187_22278__$1);
var n_22285 = cljs.core.nth.call(null,vec__22200_22284,(0),null);
var meth_22286 = cljs.core.nth.call(null,vec__22200_22284,(1),null);
var c_22287 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22286));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22286))){
cljs.compiler.emitln.call(null,mname_22204,".cljs$core$IFn$_invoke$arity$variadic = ",n_22285,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_22204,".cljs$core$IFn$_invoke$arity$",c_22287," = ",n_22285,";");
}


var G__22288 = cljs.core.next.call(null,seq__22187_22278__$1);
var G__22289 = null;
var G__22290 = (0);
var G__22291 = (0);
seq__22187_22265 = G__22288;
chunk__22188_22266 = G__22289;
count__22189_22267 = G__22290;
i__22190_22268 = G__22291;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_22204,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__22292){
var map__22293 = p__22292;
var map__22293__$1 = (((((!((map__22293 == null))))?(((((map__22293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22293):map__22293);
var statements = cljs.core.get.call(null,map__22293__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__22293__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__22293__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__22295_22299 = cljs.core.seq.call(null,statements);
var chunk__22296_22300 = null;
var count__22297_22301 = (0);
var i__22298_22302 = (0);
while(true){
if((i__22298_22302 < count__22297_22301)){
var s_22303 = cljs.core._nth.call(null,chunk__22296_22300,i__22298_22302);
cljs.compiler.emitln.call(null,s_22303);


var G__22304 = seq__22295_22299;
var G__22305 = chunk__22296_22300;
var G__22306 = count__22297_22301;
var G__22307 = (i__22298_22302 + (1));
seq__22295_22299 = G__22304;
chunk__22296_22300 = G__22305;
count__22297_22301 = G__22306;
i__22298_22302 = G__22307;
continue;
} else {
var temp__5720__auto___22308 = cljs.core.seq.call(null,seq__22295_22299);
if(temp__5720__auto___22308){
var seq__22295_22309__$1 = temp__5720__auto___22308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22295_22309__$1)){
var c__18776__auto___22310 = cljs.core.chunk_first.call(null,seq__22295_22309__$1);
var G__22311 = cljs.core.chunk_rest.call(null,seq__22295_22309__$1);
var G__22312 = c__18776__auto___22310;
var G__22313 = cljs.core.count.call(null,c__18776__auto___22310);
var G__22314 = (0);
seq__22295_22299 = G__22311;
chunk__22296_22300 = G__22312;
count__22297_22301 = G__22313;
i__22298_22302 = G__22314;
continue;
} else {
var s_22315 = cljs.core.first.call(null,seq__22295_22309__$1);
cljs.compiler.emitln.call(null,s_22315);


var G__22316 = cljs.core.next.call(null,seq__22295_22309__$1);
var G__22317 = null;
var G__22318 = (0);
var G__22319 = (0);
seq__22295_22299 = G__22316;
chunk__22296_22300 = G__22317;
count__22297_22301 = G__22318;
i__22298_22302 = G__22319;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__22320){
var map__22321 = p__22320;
var map__22321__$1 = (((((!((map__22321 == null))))?(((((map__22321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22321):map__22321);
var try$ = cljs.core.get.call(null,map__22321__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__22321__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__22321__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__22321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__22321__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__17819__auto__ = name;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__22323,is_loop){
var map__22324 = p__22323;
var map__22324__$1 = (((((!((map__22324 == null))))?(((((map__22324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22324):map__22324);
var expr = cljs.core.get.call(null,map__22324__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__22324__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__22324__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__22326_22340 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__22327_22341 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__22326_22340,context,map__22324,map__22324__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__22326_22340,context,map__22324,map__22324__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__22327_22341;

try{var seq__22328_22342 = cljs.core.seq.call(null,bindings);
var chunk__22329_22343 = null;
var count__22330_22344 = (0);
var i__22331_22345 = (0);
while(true){
if((i__22331_22345 < count__22330_22344)){
var map__22336_22346 = cljs.core._nth.call(null,chunk__22329_22343,i__22331_22345);
var map__22336_22347__$1 = (((((!((map__22336_22346 == null))))?(((((map__22336_22346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22336_22346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22336_22346):map__22336_22346);
var binding_22348 = map__22336_22347__$1;
var init_22349 = cljs.core.get.call(null,map__22336_22347__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_22348);

cljs.compiler.emitln.call(null," = ",init_22349,";");


var G__22350 = seq__22328_22342;
var G__22351 = chunk__22329_22343;
var G__22352 = count__22330_22344;
var G__22353 = (i__22331_22345 + (1));
seq__22328_22342 = G__22350;
chunk__22329_22343 = G__22351;
count__22330_22344 = G__22352;
i__22331_22345 = G__22353;
continue;
} else {
var temp__5720__auto___22354 = cljs.core.seq.call(null,seq__22328_22342);
if(temp__5720__auto___22354){
var seq__22328_22355__$1 = temp__5720__auto___22354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22328_22355__$1)){
var c__18776__auto___22356 = cljs.core.chunk_first.call(null,seq__22328_22355__$1);
var G__22357 = cljs.core.chunk_rest.call(null,seq__22328_22355__$1);
var G__22358 = c__18776__auto___22356;
var G__22359 = cljs.core.count.call(null,c__18776__auto___22356);
var G__22360 = (0);
seq__22328_22342 = G__22357;
chunk__22329_22343 = G__22358;
count__22330_22344 = G__22359;
i__22331_22345 = G__22360;
continue;
} else {
var map__22338_22361 = cljs.core.first.call(null,seq__22328_22355__$1);
var map__22338_22362__$1 = (((((!((map__22338_22361 == null))))?(((((map__22338_22361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22338_22361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22338_22361):map__22338_22361);
var binding_22363 = map__22338_22362__$1;
var init_22364 = cljs.core.get.call(null,map__22338_22362__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_22363);

cljs.compiler.emitln.call(null," = ",init_22364,";");


var G__22365 = cljs.core.next.call(null,seq__22328_22355__$1);
var G__22366 = null;
var G__22367 = (0);
var G__22368 = (0);
seq__22328_22342 = G__22365;
chunk__22329_22343 = G__22366;
count__22330_22344 = G__22367;
i__22331_22345 = G__22368;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__22326_22340;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__22369){
var map__22370 = p__22369;
var map__22370__$1 = (((((!((map__22370 == null))))?(((((map__22370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22370):map__22370);
var frame = cljs.core.get.call(null,map__22370__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__22370__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__22370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__18887__auto___22372 = cljs.core.count.call(null,exprs);
var i_22373 = (0);
while(true){
if((i_22373 < n__18887__auto___22372)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_22373)," = ",exprs.call(null,i_22373),";");

var G__22374 = (i_22373 + (1));
i_22373 = G__22374;
continue;
} else {
}
break;
}

var n__18887__auto___22375 = cljs.core.count.call(null,exprs);
var i_22376 = (0);
while(true){
if((i_22376 < n__18887__auto___22375)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_22376))," = ",temps.call(null,i_22376),";");

var G__22377 = (i_22376 + (1));
i_22376 = G__22377;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__22378){
var map__22379 = p__22378;
var map__22379__$1 = (((((!((map__22379 == null))))?(((((map__22379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22379):map__22379);
var expr = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__22381_22393 = cljs.core.seq.call(null,bindings);
var chunk__22382_22394 = null;
var count__22383_22395 = (0);
var i__22384_22396 = (0);
while(true){
if((i__22384_22396 < count__22383_22395)){
var map__22389_22397 = cljs.core._nth.call(null,chunk__22382_22394,i__22384_22396);
var map__22389_22398__$1 = (((((!((map__22389_22397 == null))))?(((((map__22389_22397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22389_22397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22389_22397):map__22389_22397);
var binding_22399 = map__22389_22398__$1;
var init_22400 = cljs.core.get.call(null,map__22389_22398__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_22399)," = ",init_22400,";");


var G__22401 = seq__22381_22393;
var G__22402 = chunk__22382_22394;
var G__22403 = count__22383_22395;
var G__22404 = (i__22384_22396 + (1));
seq__22381_22393 = G__22401;
chunk__22382_22394 = G__22402;
count__22383_22395 = G__22403;
i__22384_22396 = G__22404;
continue;
} else {
var temp__5720__auto___22405 = cljs.core.seq.call(null,seq__22381_22393);
if(temp__5720__auto___22405){
var seq__22381_22406__$1 = temp__5720__auto___22405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22381_22406__$1)){
var c__18776__auto___22407 = cljs.core.chunk_first.call(null,seq__22381_22406__$1);
var G__22408 = cljs.core.chunk_rest.call(null,seq__22381_22406__$1);
var G__22409 = c__18776__auto___22407;
var G__22410 = cljs.core.count.call(null,c__18776__auto___22407);
var G__22411 = (0);
seq__22381_22393 = G__22408;
chunk__22382_22394 = G__22409;
count__22383_22395 = G__22410;
i__22384_22396 = G__22411;
continue;
} else {
var map__22391_22412 = cljs.core.first.call(null,seq__22381_22406__$1);
var map__22391_22413__$1 = (((((!((map__22391_22412 == null))))?(((((map__22391_22412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22391_22412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22391_22412):map__22391_22412);
var binding_22414 = map__22391_22413__$1;
var init_22415 = cljs.core.get.call(null,map__22391_22413__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_22414)," = ",init_22415,";");


var G__22416 = cljs.core.next.call(null,seq__22381_22406__$1);
var G__22417 = null;
var G__22418 = (0);
var G__22419 = (0);
seq__22381_22393 = G__22416;
chunk__22382_22394 = G__22417;
count__22383_22395 = G__22418;
i__22384_22396 = G__22419;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__22422){
var map__22423 = p__22422;
var map__22423__$1 = (((((!((map__22423 == null))))?(((((map__22423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22423):map__22423);
var expr = map__22423__$1;
var f = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__17804__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__17804__auto__){
var and__17804__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__17804__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__17804__auto____$1;
}
} else {
return and__17804__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__17804__auto__ = protocol;
if(cljs.core.truth_(and__17804__auto__)){
var and__17804__auto____$1 = tag;
if(cljs.core.truth_(and__17804__auto____$1)){
var or__17819__auto__ = (function (){var and__17804__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__17804__auto____$2){
var and__17804__auto____$3 = protocol;
if(cljs.core.truth_(and__17804__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__17804__auto____$3;
}
} else {
return and__17804__auto____$2;
}
})();
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
var and__17804__auto____$2 = (function (){var or__17819__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__17819__auto____$1){
return or__17819__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__17804__auto____$2)){
var or__17819__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__17819__auto____$1){
return or__17819__auto____$1;
} else {
var and__17804__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__17804__auto____$3){
var and__17804__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__17804__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__17804__auto____$4;
}
} else {
return and__17804__auto____$3;
}
}
} else {
return and__17804__auto____$2;
}
}
} else {
return and__17804__auto____$1;
}
} else {
return and__17804__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__17819__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__17819__auto__){
return or__17819__auto__;
} else {
var or__17819__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__17819__auto____$1)){
return or__17819__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__17819__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__17819__auto__){
return or__17819__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__22425 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__17804__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__17804__auto__)){
return (arity > mfa);
} else {
return and__17804__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22423,map__22423__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22423,map__22423__$1,expr,f,args,env){
return (function (p1__22420_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__22420_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22423,map__22423__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22423,map__22423__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22423,map__22423__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22423,map__22423__$1,expr,f,args,env){
return (function (p1__22421_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__22421_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22423,map__22423__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22423,map__22423__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__22425,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__22425,(1),null);
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_22428 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_22428,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_22429 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_22429,args)),(((mfa_22429 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_22429,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__17819__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
var or__17819__auto____$1 = js_QMARK_;
if(or__17819__auto____$1){
return or__17819__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__17804__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__17804__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__17804__auto__;
}
})())){
var fprop_22430 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_22430," ? ",f__$1,fprop_22430,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_22430," ? ",f__$1,fprop_22430,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__22431){
var map__22432 = p__22431;
var map__22432__$1 = (((((!((map__22432 == null))))?(((((map__22432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22432):map__22432);
var ctor = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__22434){
var map__22435 = p__22434;
var map__22435__$1 = (((((!((map__22435 == null))))?(((((map__22435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22435):map__22435);
var target = cljs.core.get.call(null,map__22435__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__22435__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__22435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__17819__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__22437 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__22437__$1 = (((((!((map__22437 == null))))?(((((map__22437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22437):map__22437);
var options = cljs.core.get.call(null,map__22437__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__22437__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__22438 = options;
var map__22438__$1 = (((((!((map__22438 == null))))?(((((map__22438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22438):map__22438);
var target = cljs.core.get.call(null,map__22438__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__22438__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__22439 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__22444 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__22444__$1 = (((((!((map__22444 == null))))?(((((map__22444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22444):map__22444);
var node_libs = cljs.core.get.call(null,map__22444__$1,true);
var libs_to_load = cljs.core.get.call(null,map__22444__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__22439,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__22439,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__22446_22466 = cljs.core.seq.call(null,libs_to_load);
var chunk__22447_22467 = null;
var count__22448_22468 = (0);
var i__22449_22469 = (0);
while(true){
if((i__22449_22469 < count__22448_22468)){
var lib_22470 = cljs.core._nth.call(null,chunk__22447_22467,i__22449_22469);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_22470)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__17819__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22470),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22470),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__17819__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22470),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22470),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_22470,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22470),"');");
}

}
}
}


var G__22471 = seq__22446_22466;
var G__22472 = chunk__22447_22467;
var G__22473 = count__22448_22468;
var G__22474 = (i__22449_22469 + (1));
seq__22446_22466 = G__22471;
chunk__22447_22467 = G__22472;
count__22448_22468 = G__22473;
i__22449_22469 = G__22474;
continue;
} else {
var temp__5720__auto___22475 = cljs.core.seq.call(null,seq__22446_22466);
if(temp__5720__auto___22475){
var seq__22446_22476__$1 = temp__5720__auto___22475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22446_22476__$1)){
var c__18776__auto___22477 = cljs.core.chunk_first.call(null,seq__22446_22476__$1);
var G__22478 = cljs.core.chunk_rest.call(null,seq__22446_22476__$1);
var G__22479 = c__18776__auto___22477;
var G__22480 = cljs.core.count.call(null,c__18776__auto___22477);
var G__22481 = (0);
seq__22446_22466 = G__22478;
chunk__22447_22467 = G__22479;
count__22448_22468 = G__22480;
i__22449_22469 = G__22481;
continue;
} else {
var lib_22482 = cljs.core.first.call(null,seq__22446_22476__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_22482)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__17819__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22482),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22482),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__17819__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22482),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22482),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_22482,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22482),"');");
}

}
}
}


var G__22483 = cljs.core.next.call(null,seq__22446_22476__$1);
var G__22484 = null;
var G__22485 = (0);
var G__22486 = (0);
seq__22446_22466 = G__22483;
chunk__22447_22467 = G__22484;
count__22448_22468 = G__22485;
i__22449_22469 = G__22486;
continue;
}
} else {
}
}
break;
}

var seq__22450_22487 = cljs.core.seq.call(null,node_libs);
var chunk__22451_22488 = null;
var count__22452_22489 = (0);
var i__22453_22490 = (0);
while(true){
if((i__22453_22490 < count__22452_22489)){
var lib_22491 = cljs.core._nth.call(null,chunk__22451_22488,i__22453_22490);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_22491)," = require('",lib_22491,"');");


var G__22492 = seq__22450_22487;
var G__22493 = chunk__22451_22488;
var G__22494 = count__22452_22489;
var G__22495 = (i__22453_22490 + (1));
seq__22450_22487 = G__22492;
chunk__22451_22488 = G__22493;
count__22452_22489 = G__22494;
i__22453_22490 = G__22495;
continue;
} else {
var temp__5720__auto___22496 = cljs.core.seq.call(null,seq__22450_22487);
if(temp__5720__auto___22496){
var seq__22450_22497__$1 = temp__5720__auto___22496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22450_22497__$1)){
var c__18776__auto___22498 = cljs.core.chunk_first.call(null,seq__22450_22497__$1);
var G__22499 = cljs.core.chunk_rest.call(null,seq__22450_22497__$1);
var G__22500 = c__18776__auto___22498;
var G__22501 = cljs.core.count.call(null,c__18776__auto___22498);
var G__22502 = (0);
seq__22450_22487 = G__22499;
chunk__22451_22488 = G__22500;
count__22452_22489 = G__22501;
i__22453_22490 = G__22502;
continue;
} else {
var lib_22503 = cljs.core.first.call(null,seq__22450_22497__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_22503)," = require('",lib_22503,"');");


var G__22504 = cljs.core.next.call(null,seq__22450_22497__$1);
var G__22505 = null;
var G__22506 = (0);
var G__22507 = (0);
seq__22450_22487 = G__22504;
chunk__22451_22488 = G__22505;
count__22452_22489 = G__22506;
i__22453_22490 = G__22507;
continue;
}
} else {
}
}
break;
}

var seq__22454_22508 = cljs.core.seq.call(null,global_exports_libs);
var chunk__22455_22509 = null;
var count__22456_22510 = (0);
var i__22457_22511 = (0);
while(true){
if((i__22457_22511 < count__22456_22510)){
var lib_22512 = cljs.core._nth.call(null,chunk__22455_22509,i__22457_22511);
var map__22462_22513 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_22512));
var map__22462_22514__$1 = (((((!((map__22462_22513 == null))))?(((((map__22462_22513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22462_22513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22462_22513):map__22462_22513);
var global_exports_22515 = cljs.core.get.call(null,map__22462_22514__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_22515,lib_22512);


var G__22516 = seq__22454_22508;
var G__22517 = chunk__22455_22509;
var G__22518 = count__22456_22510;
var G__22519 = (i__22457_22511 + (1));
seq__22454_22508 = G__22516;
chunk__22455_22509 = G__22517;
count__22456_22510 = G__22518;
i__22457_22511 = G__22519;
continue;
} else {
var temp__5720__auto___22520 = cljs.core.seq.call(null,seq__22454_22508);
if(temp__5720__auto___22520){
var seq__22454_22521__$1 = temp__5720__auto___22520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22454_22521__$1)){
var c__18776__auto___22522 = cljs.core.chunk_first.call(null,seq__22454_22521__$1);
var G__22523 = cljs.core.chunk_rest.call(null,seq__22454_22521__$1);
var G__22524 = c__18776__auto___22522;
var G__22525 = cljs.core.count.call(null,c__18776__auto___22522);
var G__22526 = (0);
seq__22454_22508 = G__22523;
chunk__22455_22509 = G__22524;
count__22456_22510 = G__22525;
i__22457_22511 = G__22526;
continue;
} else {
var lib_22527 = cljs.core.first.call(null,seq__22454_22521__$1);
var map__22464_22528 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_22527));
var map__22464_22529__$1 = (((((!((map__22464_22528 == null))))?(((((map__22464_22528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22464_22528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22464_22528):map__22464_22528);
var global_exports_22530 = cljs.core.get.call(null,map__22464_22529__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_22530,lib_22527);


var G__22531 = cljs.core.next.call(null,seq__22454_22521__$1);
var G__22532 = null;
var G__22533 = (0);
var G__22534 = (0);
seq__22454_22508 = G__22531;
chunk__22455_22509 = G__22532;
count__22456_22510 = G__22533;
i__22457_22511 = G__22534;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__22535){
var map__22536 = p__22535;
var map__22536__$1 = (((((!((map__22536 == null))))?(((((map__22536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22536):map__22536);
var name = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__22538){
var map__22539 = p__22538;
var map__22539__$1 = (((((!((map__22539 == null))))?(((((map__22539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22539):map__22539);
var name = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__22541){
var map__22542 = p__22541;
var map__22542__$1 = (((((!((map__22542 == null))))?(((((map__22542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22542):map__22542);
var t = cljs.core.get.call(null,map__22542__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__22542__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__22542__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__22542__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__22542__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__22544_22568 = cljs.core.seq.call(null,protocols);
var chunk__22545_22569 = null;
var count__22546_22570 = (0);
var i__22547_22571 = (0);
while(true){
if((i__22547_22571 < count__22546_22570)){
var protocol_22572 = cljs.core._nth.call(null,chunk__22545_22569,i__22547_22571);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22572)),"}");


var G__22573 = seq__22544_22568;
var G__22574 = chunk__22545_22569;
var G__22575 = count__22546_22570;
var G__22576 = (i__22547_22571 + (1));
seq__22544_22568 = G__22573;
chunk__22545_22569 = G__22574;
count__22546_22570 = G__22575;
i__22547_22571 = G__22576;
continue;
} else {
var temp__5720__auto___22577 = cljs.core.seq.call(null,seq__22544_22568);
if(temp__5720__auto___22577){
var seq__22544_22578__$1 = temp__5720__auto___22577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22544_22578__$1)){
var c__18776__auto___22579 = cljs.core.chunk_first.call(null,seq__22544_22578__$1);
var G__22580 = cljs.core.chunk_rest.call(null,seq__22544_22578__$1);
var G__22581 = c__18776__auto___22579;
var G__22582 = cljs.core.count.call(null,c__18776__auto___22579);
var G__22583 = (0);
seq__22544_22568 = G__22580;
chunk__22545_22569 = G__22581;
count__22546_22570 = G__22582;
i__22547_22571 = G__22583;
continue;
} else {
var protocol_22584 = cljs.core.first.call(null,seq__22544_22578__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22584)),"}");


var G__22585 = cljs.core.next.call(null,seq__22544_22578__$1);
var G__22586 = null;
var G__22587 = (0);
var G__22588 = (0);
seq__22544_22568 = G__22585;
chunk__22545_22569 = G__22586;
count__22546_22570 = G__22587;
i__22547_22571 = G__22588;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__22548_22589 = cljs.core.seq.call(null,fields__$1);
var chunk__22549_22590 = null;
var count__22550_22591 = (0);
var i__22551_22592 = (0);
while(true){
if((i__22551_22592 < count__22550_22591)){
var fld_22593 = cljs.core._nth.call(null,chunk__22549_22590,i__22551_22592);
cljs.compiler.emitln.call(null,"this.",fld_22593," = ",fld_22593,";");


var G__22594 = seq__22548_22589;
var G__22595 = chunk__22549_22590;
var G__22596 = count__22550_22591;
var G__22597 = (i__22551_22592 + (1));
seq__22548_22589 = G__22594;
chunk__22549_22590 = G__22595;
count__22550_22591 = G__22596;
i__22551_22592 = G__22597;
continue;
} else {
var temp__5720__auto___22598 = cljs.core.seq.call(null,seq__22548_22589);
if(temp__5720__auto___22598){
var seq__22548_22599__$1 = temp__5720__auto___22598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22548_22599__$1)){
var c__18776__auto___22600 = cljs.core.chunk_first.call(null,seq__22548_22599__$1);
var G__22601 = cljs.core.chunk_rest.call(null,seq__22548_22599__$1);
var G__22602 = c__18776__auto___22600;
var G__22603 = cljs.core.count.call(null,c__18776__auto___22600);
var G__22604 = (0);
seq__22548_22589 = G__22601;
chunk__22549_22590 = G__22602;
count__22550_22591 = G__22603;
i__22551_22592 = G__22604;
continue;
} else {
var fld_22605 = cljs.core.first.call(null,seq__22548_22599__$1);
cljs.compiler.emitln.call(null,"this.",fld_22605," = ",fld_22605,";");


var G__22606 = cljs.core.next.call(null,seq__22548_22599__$1);
var G__22607 = null;
var G__22608 = (0);
var G__22609 = (0);
seq__22548_22589 = G__22606;
chunk__22549_22590 = G__22607;
count__22550_22591 = G__22608;
i__22551_22592 = G__22609;
continue;
}
} else {
}
}
break;
}

var seq__22552_22610 = cljs.core.seq.call(null,pmasks);
var chunk__22553_22611 = null;
var count__22554_22612 = (0);
var i__22555_22613 = (0);
while(true){
if((i__22555_22613 < count__22554_22612)){
var vec__22562_22614 = cljs.core._nth.call(null,chunk__22553_22611,i__22555_22613);
var pno_22615 = cljs.core.nth.call(null,vec__22562_22614,(0),null);
var pmask_22616 = cljs.core.nth.call(null,vec__22562_22614,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22615,"$ = ",pmask_22616,";");


var G__22617 = seq__22552_22610;
var G__22618 = chunk__22553_22611;
var G__22619 = count__22554_22612;
var G__22620 = (i__22555_22613 + (1));
seq__22552_22610 = G__22617;
chunk__22553_22611 = G__22618;
count__22554_22612 = G__22619;
i__22555_22613 = G__22620;
continue;
} else {
var temp__5720__auto___22621 = cljs.core.seq.call(null,seq__22552_22610);
if(temp__5720__auto___22621){
var seq__22552_22622__$1 = temp__5720__auto___22621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22552_22622__$1)){
var c__18776__auto___22623 = cljs.core.chunk_first.call(null,seq__22552_22622__$1);
var G__22624 = cljs.core.chunk_rest.call(null,seq__22552_22622__$1);
var G__22625 = c__18776__auto___22623;
var G__22626 = cljs.core.count.call(null,c__18776__auto___22623);
var G__22627 = (0);
seq__22552_22610 = G__22624;
chunk__22553_22611 = G__22625;
count__22554_22612 = G__22626;
i__22555_22613 = G__22627;
continue;
} else {
var vec__22565_22628 = cljs.core.first.call(null,seq__22552_22622__$1);
var pno_22629 = cljs.core.nth.call(null,vec__22565_22628,(0),null);
var pmask_22630 = cljs.core.nth.call(null,vec__22565_22628,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22629,"$ = ",pmask_22630,";");


var G__22631 = cljs.core.next.call(null,seq__22552_22622__$1);
var G__22632 = null;
var G__22633 = (0);
var G__22634 = (0);
seq__22552_22610 = G__22631;
chunk__22553_22611 = G__22632;
count__22554_22612 = G__22633;
i__22555_22613 = G__22634;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__22635){
var map__22636 = p__22635;
var map__22636__$1 = (((((!((map__22636 == null))))?(((((map__22636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22636):map__22636);
var t = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__22638_22662 = cljs.core.seq.call(null,protocols);
var chunk__22639_22663 = null;
var count__22640_22664 = (0);
var i__22641_22665 = (0);
while(true){
if((i__22641_22665 < count__22640_22664)){
var protocol_22666 = cljs.core._nth.call(null,chunk__22639_22663,i__22641_22665);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22666)),"}");


var G__22667 = seq__22638_22662;
var G__22668 = chunk__22639_22663;
var G__22669 = count__22640_22664;
var G__22670 = (i__22641_22665 + (1));
seq__22638_22662 = G__22667;
chunk__22639_22663 = G__22668;
count__22640_22664 = G__22669;
i__22641_22665 = G__22670;
continue;
} else {
var temp__5720__auto___22671 = cljs.core.seq.call(null,seq__22638_22662);
if(temp__5720__auto___22671){
var seq__22638_22672__$1 = temp__5720__auto___22671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22638_22672__$1)){
var c__18776__auto___22673 = cljs.core.chunk_first.call(null,seq__22638_22672__$1);
var G__22674 = cljs.core.chunk_rest.call(null,seq__22638_22672__$1);
var G__22675 = c__18776__auto___22673;
var G__22676 = cljs.core.count.call(null,c__18776__auto___22673);
var G__22677 = (0);
seq__22638_22662 = G__22674;
chunk__22639_22663 = G__22675;
count__22640_22664 = G__22676;
i__22641_22665 = G__22677;
continue;
} else {
var protocol_22678 = cljs.core.first.call(null,seq__22638_22672__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22678)),"}");


var G__22679 = cljs.core.next.call(null,seq__22638_22672__$1);
var G__22680 = null;
var G__22681 = (0);
var G__22682 = (0);
seq__22638_22662 = G__22679;
chunk__22639_22663 = G__22680;
count__22640_22664 = G__22681;
i__22641_22665 = G__22682;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__22642_22683 = cljs.core.seq.call(null,fields__$1);
var chunk__22643_22684 = null;
var count__22644_22685 = (0);
var i__22645_22686 = (0);
while(true){
if((i__22645_22686 < count__22644_22685)){
var fld_22687 = cljs.core._nth.call(null,chunk__22643_22684,i__22645_22686);
cljs.compiler.emitln.call(null,"this.",fld_22687," = ",fld_22687,";");


var G__22688 = seq__22642_22683;
var G__22689 = chunk__22643_22684;
var G__22690 = count__22644_22685;
var G__22691 = (i__22645_22686 + (1));
seq__22642_22683 = G__22688;
chunk__22643_22684 = G__22689;
count__22644_22685 = G__22690;
i__22645_22686 = G__22691;
continue;
} else {
var temp__5720__auto___22692 = cljs.core.seq.call(null,seq__22642_22683);
if(temp__5720__auto___22692){
var seq__22642_22693__$1 = temp__5720__auto___22692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22642_22693__$1)){
var c__18776__auto___22694 = cljs.core.chunk_first.call(null,seq__22642_22693__$1);
var G__22695 = cljs.core.chunk_rest.call(null,seq__22642_22693__$1);
var G__22696 = c__18776__auto___22694;
var G__22697 = cljs.core.count.call(null,c__18776__auto___22694);
var G__22698 = (0);
seq__22642_22683 = G__22695;
chunk__22643_22684 = G__22696;
count__22644_22685 = G__22697;
i__22645_22686 = G__22698;
continue;
} else {
var fld_22699 = cljs.core.first.call(null,seq__22642_22693__$1);
cljs.compiler.emitln.call(null,"this.",fld_22699," = ",fld_22699,";");


var G__22700 = cljs.core.next.call(null,seq__22642_22693__$1);
var G__22701 = null;
var G__22702 = (0);
var G__22703 = (0);
seq__22642_22683 = G__22700;
chunk__22643_22684 = G__22701;
count__22644_22685 = G__22702;
i__22645_22686 = G__22703;
continue;
}
} else {
}
}
break;
}

var seq__22646_22704 = cljs.core.seq.call(null,pmasks);
var chunk__22647_22705 = null;
var count__22648_22706 = (0);
var i__22649_22707 = (0);
while(true){
if((i__22649_22707 < count__22648_22706)){
var vec__22656_22708 = cljs.core._nth.call(null,chunk__22647_22705,i__22649_22707);
var pno_22709 = cljs.core.nth.call(null,vec__22656_22708,(0),null);
var pmask_22710 = cljs.core.nth.call(null,vec__22656_22708,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22709,"$ = ",pmask_22710,";");


var G__22711 = seq__22646_22704;
var G__22712 = chunk__22647_22705;
var G__22713 = count__22648_22706;
var G__22714 = (i__22649_22707 + (1));
seq__22646_22704 = G__22711;
chunk__22647_22705 = G__22712;
count__22648_22706 = G__22713;
i__22649_22707 = G__22714;
continue;
} else {
var temp__5720__auto___22715 = cljs.core.seq.call(null,seq__22646_22704);
if(temp__5720__auto___22715){
var seq__22646_22716__$1 = temp__5720__auto___22715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22646_22716__$1)){
var c__18776__auto___22717 = cljs.core.chunk_first.call(null,seq__22646_22716__$1);
var G__22718 = cljs.core.chunk_rest.call(null,seq__22646_22716__$1);
var G__22719 = c__18776__auto___22717;
var G__22720 = cljs.core.count.call(null,c__18776__auto___22717);
var G__22721 = (0);
seq__22646_22704 = G__22718;
chunk__22647_22705 = G__22719;
count__22648_22706 = G__22720;
i__22649_22707 = G__22721;
continue;
} else {
var vec__22659_22722 = cljs.core.first.call(null,seq__22646_22716__$1);
var pno_22723 = cljs.core.nth.call(null,vec__22659_22722,(0),null);
var pmask_22724 = cljs.core.nth.call(null,vec__22659_22722,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22723,"$ = ",pmask_22724,";");


var G__22725 = cljs.core.next.call(null,seq__22646_22716__$1);
var G__22726 = null;
var G__22727 = (0);
var G__22728 = (0);
seq__22646_22704 = G__22725;
chunk__22647_22705 = G__22726;
count__22648_22706 = G__22727;
i__22649_22707 = G__22728;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__22729){
var map__22730 = p__22729;
var map__22730__$1 = (((((!((map__22730 == null))))?(((((map__22730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22730):map__22730);
var target = cljs.core.get.call(null,map__22730__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__22730__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__22730__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__22730__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22730__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__22732){
var map__22733 = p__22732;
var map__22733__$1 = (((((!((map__22733 == null))))?(((((map__22733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22733):map__22733);
var op = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__17804__auto__ = code;
if(cljs.core.truth_(and__17804__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__17804__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__21527__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21527__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__22739 = cljs.core.seq.call(null,table);
var chunk__22740 = null;
var count__22741 = (0);
var i__22742 = (0);
while(true){
if((i__22742 < count__22741)){
var vec__22749 = cljs.core._nth.call(null,chunk__22740,i__22742);
var sym = cljs.core.nth.call(null,vec__22749,(0),null);
var value = cljs.core.nth.call(null,vec__22749,(1),null);
var ns_22755 = cljs.core.namespace.call(null,sym);
var name_22756 = cljs.core.name.call(null,sym);
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


var G__22757 = seq__22739;
var G__22758 = chunk__22740;
var G__22759 = count__22741;
var G__22760 = (i__22742 + (1));
seq__22739 = G__22757;
chunk__22740 = G__22758;
count__22741 = G__22759;
i__22742 = G__22760;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22739);
if(temp__5720__auto__){
var seq__22739__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22739__$1)){
var c__18776__auto__ = cljs.core.chunk_first.call(null,seq__22739__$1);
var G__22761 = cljs.core.chunk_rest.call(null,seq__22739__$1);
var G__22762 = c__18776__auto__;
var G__22763 = cljs.core.count.call(null,c__18776__auto__);
var G__22764 = (0);
seq__22739 = G__22761;
chunk__22740 = G__22762;
count__22741 = G__22763;
i__22742 = G__22764;
continue;
} else {
var vec__22752 = cljs.core.first.call(null,seq__22739__$1);
var sym = cljs.core.nth.call(null,vec__22752,(0),null);
var value = cljs.core.nth.call(null,vec__22752,(1),null);
var ns_22765 = cljs.core.namespace.call(null,sym);
var name_22766 = cljs.core.name.call(null,sym);
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


var G__22767 = cljs.core.next.call(null,seq__22739__$1);
var G__22768 = null;
var G__22769 = (0);
var G__22770 = (0);
seq__22739 = G__22767;
chunk__22740 = G__22768;
count__22741 = G__22769;
i__22742 = G__22770;
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
var G__22772 = arguments.length;
switch (G__22772) {
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
var k_22777 = cljs.core.first.call(null,ks);
var vec__22773_22778 = cljs.core.conj.call(null,prefix,k_22777);
var top_22779 = cljs.core.nth.call(null,vec__22773_22778,(0),null);
var prefix_SINGLEQUOTE__22780 = vec__22773_22778;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_22777)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__22780) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_22779)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_22779)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__22780)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_22779);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__22780)),";");
}
} else {
}

var m_22781 = cljs.core.get.call(null,externs,k_22777);
if(cljs.core.empty_QMARK_.call(null,m_22781)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__22780,m_22781,top_level,known_externs);
}

var G__22782 = cljs.core.next.call(null,ks);
ks = G__22782;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
