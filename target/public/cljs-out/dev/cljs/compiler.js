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
var map__26366 = s;
var map__26366__$1 = (((((!((map__26366 == null))))?(((((map__26366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26366):map__26366);
var name = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__26369 = info;
var map__26370 = G__26369;
var map__26370__$1 = (((((!((map__26370 == null))))?(((((map__26370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26370):map__26370);
var shadow = cljs.core.get.call(null,map__26370__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__26369__$1 = G__26369;
while(true){
var d__$2 = d__$1;
var map__26374 = G__26369__$1;
var map__26374__$1 = (((((!((map__26374 == null))))?(((((map__26374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26374):map__26374);
var shadow__$1 = cljs.core.get.call(null,map__26374__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__26376 = (d__$2 + (1));
var G__26377 = shadow__$1;
d__$1 = G__26376;
G__26369__$1 = G__26377;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__26378){
var map__26379 = p__26378;
var map__26379__$1 = (((((!((map__26379 == null))))?(((((map__26379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26379):map__26379);
var name_var = map__26379__$1;
var name = cljs.core.get.call(null,map__26379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__26379__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__26381 = info;
var map__26381__$1 = (((((!((map__26381 == null))))?(((((map__26381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26381):map__26381);
var ns = cljs.core.get.call(null,map__26381__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__26381__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__26384 = arguments.length;
switch (G__26384) {
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
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",17,1,11471,11471,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
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
var G__26386 = cp;
switch (G__26386) {
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
var seq__26388_26392 = cljs.core.seq.call(null,s);
var chunk__26389_26393 = null;
var count__26390_26394 = (0);
var i__26391_26395 = (0);
while(true){
if((i__26391_26395 < count__26390_26394)){
var c_26396 = cljs.core._nth.call(null,chunk__26389_26393,i__26391_26395);
sb.append(cljs.compiler.escape_char.call(null,c_26396));


var G__26397 = seq__26388_26392;
var G__26398 = chunk__26389_26393;
var G__26399 = count__26390_26394;
var G__26400 = (i__26391_26395 + (1));
seq__26388_26392 = G__26397;
chunk__26389_26393 = G__26398;
count__26390_26394 = G__26399;
i__26391_26395 = G__26400;
continue;
} else {
var temp__5457__auto___26401 = cljs.core.seq.call(null,seq__26388_26392);
if(temp__5457__auto___26401){
var seq__26388_26402__$1 = temp__5457__auto___26401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26388_26402__$1)){
var c__18782__auto___26403 = cljs.core.chunk_first.call(null,seq__26388_26402__$1);
var G__26404 = cljs.core.chunk_rest.call(null,seq__26388_26402__$1);
var G__26405 = c__18782__auto___26403;
var G__26406 = cljs.core.count.call(null,c__18782__auto___26403);
var G__26407 = (0);
seq__26388_26392 = G__26404;
chunk__26389_26393 = G__26405;
count__26390_26394 = G__26406;
i__26391_26395 = G__26407;
continue;
} else {
var c_26408 = cljs.core.first.call(null,seq__26388_26402__$1);
sb.append(cljs.compiler.escape_char.call(null,c_26408));


var G__26409 = cljs.core.next.call(null,seq__26388_26402__$1);
var G__26410 = null;
var G__26411 = (0);
var G__26412 = (0);
seq__26388_26392 = G__26409;
chunk__26389_26393 = G__26410;
count__26390_26394 = G__26411;
i__26391_26395 = G__26412;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__18903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18906__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18907__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18907__auto__,method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__26413_26418 = ast;
var map__26413_26419__$1 = (((((!((map__26413_26418 == null))))?(((((map__26413_26418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26413_26418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26413_26418):map__26413_26418);
var env_26420 = cljs.core.get.call(null,map__26413_26419__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_26420))){
var map__26415_26421 = env_26420;
var map__26415_26422__$1 = (((((!((map__26415_26421 == null))))?(((((map__26415_26421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26415_26421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26415_26421):map__26415_26421);
var line_26423 = cljs.core.get.call(null,map__26415_26422__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26424 = cljs.core.get.call(null,map__26415_26422__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__26415_26421,map__26415_26422__$1,line_26423,column_26424,map__26413_26418,map__26413_26419__$1,env_26420){
return (function (m){
var minfo = (function (){var G__26417 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__26417,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__26417;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_26423 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__26415_26421,map__26415_26422__$1,line_26423,column_26424,map__26413_26418,map__26413_26419__$1,env_26420){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_26424)?(column_26424 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__26415_26421,map__26415_26422__$1,line_26423,column_26424,map__26413_26418,map__26413_26419__$1,env_26420){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__26415_26421,map__26415_26422__$1,line_26423,column_26424,map__26413_26418,map__26413_26419__$1,env_26420))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__26415_26421,map__26415_26422__$1,line_26423,column_26424,map__26413_26418,map__26413_26419__$1,env_26420))
,cljs.core.sorted_map.call(null)));
});})(map__26415_26421,map__26415_26422__$1,line_26423,column_26424,map__26413_26418,map__26413_26419__$1,env_26420))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__26433 = arguments.length;
switch (G__26433) {
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
var args_arr__19163__auto__ = [];
var len__19134__auto___26440 = arguments.length;
var i__19135__auto___26441 = (0);
while(true){
if((i__19135__auto___26441 < len__19134__auto___26440)){
args_arr__19163__auto__.push((arguments[i__19135__auto___26441]));

var G__26442 = (i__19135__auto___26441 + (1));
i__19135__auto___26441 = G__26442;
continue;
} else {
}
break;
}

var argseq__19164__auto__ = (new cljs.core.IndexedSeq(args_arr__19163__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19164__auto__);

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
var s_26443 = (function (){var G__26434 = a;
if((!(typeof a === 'string'))){
return G__26434.toString();
} else {
return G__26434;
}
})();
var temp__5461__auto___26444 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5461__auto___26444 == null)){
} else {
var sm_data_26445 = temp__5461__auto___26444;
cljs.core.swap_BANG_.call(null,sm_data_26445,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_26445,temp__5461__auto___26444,s_26443){
return (function (p1__26425_SHARP_){
return (p1__26425_SHARP_ + s_26443.length);
});})(sm_data_26445,temp__5461__auto___26444,s_26443))
);
}

cljs.core.print.call(null,s_26443);

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

var seq__26435 = cljs.core.seq.call(null,xs);
var chunk__26436 = null;
var count__26437 = (0);
var i__26438 = (0);
while(true){
if((i__26438 < count__26437)){
var x = cljs.core._nth.call(null,chunk__26436,i__26438);
cljs.compiler.emits.call(null,x);


var G__26446 = seq__26435;
var G__26447 = chunk__26436;
var G__26448 = count__26437;
var G__26449 = (i__26438 + (1));
seq__26435 = G__26446;
chunk__26436 = G__26447;
count__26437 = G__26448;
i__26438 = G__26449;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26435);
if(temp__5457__auto__){
var seq__26435__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26435__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__26435__$1);
var G__26450 = cljs.core.chunk_rest.call(null,seq__26435__$1);
var G__26451 = c__18782__auto__;
var G__26452 = cljs.core.count.call(null,c__18782__auto__);
var G__26453 = (0);
seq__26435 = G__26450;
chunk__26436 = G__26451;
count__26437 = G__26452;
i__26438 = G__26453;
continue;
} else {
var x = cljs.core.first.call(null,seq__26435__$1);
cljs.compiler.emits.call(null,x);


var G__26454 = cljs.core.next.call(null,seq__26435__$1);
var G__26455 = null;
var G__26456 = (0);
var G__26457 = (0);
seq__26435 = G__26454;
chunk__26436 = G__26455;
count__26437 = G__26456;
i__26438 = G__26457;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq26427){
var G__26428 = cljs.core.first.call(null,seq26427);
var seq26427__$1 = cljs.core.next.call(null,seq26427);
var G__26429 = cljs.core.first.call(null,seq26427__$1);
var seq26427__$2 = cljs.core.next.call(null,seq26427__$1);
var G__26430 = cljs.core.first.call(null,seq26427__$2);
var seq26427__$3 = cljs.core.next.call(null,seq26427__$2);
var G__26431 = cljs.core.first.call(null,seq26427__$3);
var seq26427__$4 = cljs.core.next.call(null,seq26427__$3);
var G__26432 = cljs.core.first.call(null,seq26427__$4);
var seq26427__$5 = cljs.core.next.call(null,seq26427__$4);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26428,G__26429,G__26430,G__26431,G__26432,seq26427__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__26458){
var map__26459 = p__26458;
var map__26459__$1 = (((((!((map__26459 == null))))?(((((map__26459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26459):map__26459);
var m = map__26459__$1;
var gen_line = cljs.core.get.call(null,map__26459__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__26468 = arguments.length;
switch (G__26468) {
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
var args_arr__19163__auto__ = [];
var len__19134__auto___26474 = arguments.length;
var i__19135__auto___26475 = (0);
while(true){
if((i__19135__auto___26475 < len__19134__auto___26474)){
args_arr__19163__auto__.push((arguments[i__19135__auto___26475]));

var G__26476 = (i__19135__auto___26475 + (1));
i__19135__auto___26475 = G__26476;
continue;
} else {
}
break;
}

var argseq__19164__auto__ = (new cljs.core.IndexedSeq(args_arr__19163__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19164__auto__);

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

var seq__26469_26477 = cljs.core.seq.call(null,xs);
var chunk__26470_26478 = null;
var count__26471_26479 = (0);
var i__26472_26480 = (0);
while(true){
if((i__26472_26480 < count__26471_26479)){
var x_26481 = cljs.core._nth.call(null,chunk__26470_26478,i__26472_26480);
cljs.compiler.emits.call(null,x_26481);


var G__26482 = seq__26469_26477;
var G__26483 = chunk__26470_26478;
var G__26484 = count__26471_26479;
var G__26485 = (i__26472_26480 + (1));
seq__26469_26477 = G__26482;
chunk__26470_26478 = G__26483;
count__26471_26479 = G__26484;
i__26472_26480 = G__26485;
continue;
} else {
var temp__5457__auto___26486 = cljs.core.seq.call(null,seq__26469_26477);
if(temp__5457__auto___26486){
var seq__26469_26487__$1 = temp__5457__auto___26486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26469_26487__$1)){
var c__18782__auto___26488 = cljs.core.chunk_first.call(null,seq__26469_26487__$1);
var G__26489 = cljs.core.chunk_rest.call(null,seq__26469_26487__$1);
var G__26490 = c__18782__auto___26488;
var G__26491 = cljs.core.count.call(null,c__18782__auto___26488);
var G__26492 = (0);
seq__26469_26477 = G__26489;
chunk__26470_26478 = G__26490;
count__26471_26479 = G__26491;
i__26472_26480 = G__26492;
continue;
} else {
var x_26493 = cljs.core.first.call(null,seq__26469_26487__$1);
cljs.compiler.emits.call(null,x_26493);


var G__26494 = cljs.core.next.call(null,seq__26469_26487__$1);
var G__26495 = null;
var G__26496 = (0);
var G__26497 = (0);
seq__26469_26477 = G__26494;
chunk__26470_26478 = G__26495;
count__26471_26479 = G__26496;
i__26472_26480 = G__26497;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq26462){
var G__26463 = cljs.core.first.call(null,seq26462);
var seq26462__$1 = cljs.core.next.call(null,seq26462);
var G__26464 = cljs.core.first.call(null,seq26462__$1);
var seq26462__$2 = cljs.core.next.call(null,seq26462__$1);
var G__26465 = cljs.core.first.call(null,seq26462__$2);
var seq26462__$3 = cljs.core.next.call(null,seq26462__$2);
var G__26466 = cljs.core.first.call(null,seq26462__$3);
var seq26462__$4 = cljs.core.next.call(null,seq26462__$3);
var G__26467 = cljs.core.first.call(null,seq26462__$4);
var seq26462__$5 = cljs.core.next.call(null,seq26462__$4);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26463,G__26464,G__26465,G__26466,G__26467,seq26462__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__18975__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26498_26502 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26499_26503 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26500_26504 = true;
var _STAR_print_fn_STAR__temp_val__26501_26505 = ((function (_STAR_print_newline_STAR__orig_val__26498_26502,_STAR_print_fn_STAR__orig_val__26499_26503,_STAR_print_newline_STAR__temp_val__26500_26504,sb__18975__auto__){
return (function (x__18976__auto__){
return sb__18975__auto__.append(x__18976__auto__);
});})(_STAR_print_newline_STAR__orig_val__26498_26502,_STAR_print_fn_STAR__orig_val__26499_26503,_STAR_print_newline_STAR__temp_val__26500_26504,sb__18975__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26500_26504;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26501_26505;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26499_26503;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26498_26502;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18975__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__18903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18906__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18907__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18907__auto__,method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__));
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
var vec__26506 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__26506,(0),null);
var name = cljs.core.nth.call(null,vec__26506,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__26506,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__26506,ns,name))
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
var vec__26509 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__26509,(0),null);
var flags = cljs.core.nth.call(null,vec__26509,(1),null);
var pattern = cljs.core.nth.call(null,vec__26509,(2),null);
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
var temp__5455__auto__ = (function (){var and__17810__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__17810__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__17810__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__17810__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__17810__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__17810__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
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
return (function (p1__26512_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__26512_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__26514){
var map__26515 = p__26514;
var map__26515__$1 = (((((!((map__26515 == null))))?(((((map__26515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26515):map__26515);
var ast = map__26515__$1;
var info = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__26517 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__26517__$1 = (((((!((map__26517 == null))))?(((((map__26517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26517):map__26517);
var cenv = map__26517__$1;
var options = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__17825__auto__ = js_module_name;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
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
var reserved = (function (){var G__26519 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__17810__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__17810__auto__;
}
})())){
return clojure.set.difference.call(null,G__26519,cljs.analyzer.es5_allowed);
} else {
return G__26519;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__17825__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__26520 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__26520,reserved);
} else {
return G__26520;
}
})();
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__26521_26522 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__26521_26523__$1 = (((G__26521_26522 instanceof cljs.core.Keyword))?G__26521_26522.fqn:null);
switch (G__26521_26523__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__17810__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__17810__auto__;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__26525){
var map__26526 = p__26525;
var map__26526__$1 = (((((!((map__26526 == null))))?(((((map__26526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26526):map__26526);
var arg = map__26526__$1;
var env = cljs.core.get.call(null,map__26526__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__26526__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__26526__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__26526__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__26528 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__26528__$1 = (((((!((map__26528 == null))))?(((((map__26528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26528):map__26528);
var name = cljs.core.get.call(null,map__26528__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__26530){
var map__26531 = p__26530;
var map__26531__$1 = (((((!((map__26531 == null))))?(((((map__26531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26531):map__26531);
var expr = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__26533_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26533_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__26534){
var map__26535 = p__26534;
var map__26535__$1 = (((((!((map__26535 == null))))?(((((map__26535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26535):map__26535);
var env = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__26537){
var map__26538 = p__26537;
var map__26538__$1 = (((((!((map__26538 == null))))?(((((map__26538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26538):map__26538);
var items = cljs.core.get.call(null,map__26538__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26538__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__26540_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26540_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__26541){
var map__26542 = p__26541;
var map__26542__$1 = (((((!((map__26542 == null))))?(((((map__26542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26542):map__26542);
var items = cljs.core.get.call(null,map__26542__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26542__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___26566 = cljs.core.seq.call(null,items);
if(temp__5457__auto___26566){
var items_26567__$1 = temp__5457__auto___26566;
var vec__26544_26568 = items_26567__$1;
var seq__26545_26569 = cljs.core.seq.call(null,vec__26544_26568);
var first__26546_26570 = cljs.core.first.call(null,seq__26545_26569);
var seq__26545_26571__$1 = cljs.core.next.call(null,seq__26545_26569);
var vec__26547_26572 = first__26546_26570;
var k_26573 = cljs.core.nth.call(null,vec__26547_26572,(0),null);
var v_26574 = cljs.core.nth.call(null,vec__26547_26572,(1),null);
var r_26575 = seq__26545_26571__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_26573),"\": ",emit_js_object_val.call(null,v_26574));

var seq__26550_26576 = cljs.core.seq.call(null,r_26575);
var chunk__26551_26577 = null;
var count__26552_26578 = (0);
var i__26553_26579 = (0);
while(true){
if((i__26553_26579 < count__26552_26578)){
var vec__26560_26580 = cljs.core._nth.call(null,chunk__26551_26577,i__26553_26579);
var k_26581__$1 = cljs.core.nth.call(null,vec__26560_26580,(0),null);
var v_26582__$1 = cljs.core.nth.call(null,vec__26560_26580,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_26581__$1),"\": ",emit_js_object_val.call(null,v_26582__$1));


var G__26583 = seq__26550_26576;
var G__26584 = chunk__26551_26577;
var G__26585 = count__26552_26578;
var G__26586 = (i__26553_26579 + (1));
seq__26550_26576 = G__26583;
chunk__26551_26577 = G__26584;
count__26552_26578 = G__26585;
i__26553_26579 = G__26586;
continue;
} else {
var temp__5457__auto___26587__$1 = cljs.core.seq.call(null,seq__26550_26576);
if(temp__5457__auto___26587__$1){
var seq__26550_26588__$1 = temp__5457__auto___26587__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26550_26588__$1)){
var c__18782__auto___26589 = cljs.core.chunk_first.call(null,seq__26550_26588__$1);
var G__26590 = cljs.core.chunk_rest.call(null,seq__26550_26588__$1);
var G__26591 = c__18782__auto___26589;
var G__26592 = cljs.core.count.call(null,c__18782__auto___26589);
var G__26593 = (0);
seq__26550_26576 = G__26590;
chunk__26551_26577 = G__26591;
count__26552_26578 = G__26592;
i__26553_26579 = G__26593;
continue;
} else {
var vec__26563_26594 = cljs.core.first.call(null,seq__26550_26588__$1);
var k_26595__$1 = cljs.core.nth.call(null,vec__26563_26594,(0),null);
var v_26596__$1 = cljs.core.nth.call(null,vec__26563_26594,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_26595__$1),"\": ",emit_js_object_val.call(null,v_26596__$1));


var G__26597 = cljs.core.next.call(null,seq__26550_26588__$1);
var G__26598 = null;
var G__26599 = (0);
var G__26600 = (0);
seq__26550_26576 = G__26597;
chunk__26551_26577 = G__26598;
count__26552_26578 = G__26599;
i__26553_26579 = G__26600;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__26601){
var map__26602 = p__26601;
var map__26602__$1 = (((((!((map__26602 == null))))?(((((map__26602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26602):map__26602);
var keys = cljs.core.get.call(null,map__26602__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__26602__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__26602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__26604){
var map__26605 = p__26604;
var map__26605__$1 = (((((!((map__26605 == null))))?(((((map__26605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26605):map__26605);
var items = cljs.core.get.call(null,map__26605__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26605__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__26607){
var map__26608 = p__26607;
var map__26608__$1 = (((((!((map__26608 == null))))?(((((map__26608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26608):map__26608);
var expr = cljs.core.get.call(null,map__26608__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__26610){
var map__26611 = p__26610;
var map__26611__$1 = (((((!((map__26611 == null))))?(((((map__26611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26611):map__26611);
var form = cljs.core.get.call(null,map__26611__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__26611__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__26613 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__26613__$1 = (((((!((map__26613 == null))))?(((((map__26613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26613):map__26613);
var op = cljs.core.get.call(null,map__26613__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__26613__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__26613__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__17825__auto__ = (function (){var and__17810__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__17810__auto__){
var and__17810__auto____$1 = form;
if(cljs.core.truth_(and__17810__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})();
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
var and__17810__auto__ = (!((const_expr == null)));
if(and__17810__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__17810__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__26615 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__26615__$1 = (((((!((map__26615 == null))))?(((((map__26615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26615):map__26615);
var op = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__17825__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__17825__auto__){
return or__17825__auto__;
} else {
var and__17810__auto__ = (!((const_expr == null)));
if(and__17810__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__17810__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__17825__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__26617){
var map__26618 = p__26617;
var map__26618__$1 = (((((!((map__26618 == null))))?(((((map__26618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26618):map__26618);
var test = cljs.core.get.call(null,map__26618__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__26618__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__26618__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__26618__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__26618__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__17825__auto__ = unchecked;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__26620){
var map__26621 = p__26620;
var map__26621__$1 = (((((!((map__26621 == null))))?(((((map__26621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26621):map__26621);
var v = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__26623_26659 = cljs.core.seq.call(null,nodes);
var chunk__26624_26660 = null;
var count__26625_26661 = (0);
var i__26626_26662 = (0);
while(true){
if((i__26626_26662 < count__26625_26661)){
var map__26643_26663 = cljs.core._nth.call(null,chunk__26624_26660,i__26626_26662);
var map__26643_26664__$1 = (((((!((map__26643_26663 == null))))?(((((map__26643_26663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26643_26663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26643_26663):map__26643_26663);
var ts_26665 = cljs.core.get.call(null,map__26643_26664__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__26644_26666 = cljs.core.get.call(null,map__26643_26664__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__26644_26667__$1 = (((((!((map__26644_26666 == null))))?(((((map__26644_26666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26644_26666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26644_26666):map__26644_26666);
var then_26668 = cljs.core.get.call(null,map__26644_26667__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__26647_26669 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_26665));
var chunk__26648_26670 = null;
var count__26649_26671 = (0);
var i__26650_26672 = (0);
while(true){
if((i__26650_26672 < count__26649_26671)){
var test_26673 = cljs.core._nth.call(null,chunk__26648_26670,i__26650_26672);
cljs.compiler.emitln.call(null,"case ",test_26673,":");


var G__26674 = seq__26647_26669;
var G__26675 = chunk__26648_26670;
var G__26676 = count__26649_26671;
var G__26677 = (i__26650_26672 + (1));
seq__26647_26669 = G__26674;
chunk__26648_26670 = G__26675;
count__26649_26671 = G__26676;
i__26650_26672 = G__26677;
continue;
} else {
var temp__5457__auto___26678 = cljs.core.seq.call(null,seq__26647_26669);
if(temp__5457__auto___26678){
var seq__26647_26679__$1 = temp__5457__auto___26678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26647_26679__$1)){
var c__18782__auto___26680 = cljs.core.chunk_first.call(null,seq__26647_26679__$1);
var G__26681 = cljs.core.chunk_rest.call(null,seq__26647_26679__$1);
var G__26682 = c__18782__auto___26680;
var G__26683 = cljs.core.count.call(null,c__18782__auto___26680);
var G__26684 = (0);
seq__26647_26669 = G__26681;
chunk__26648_26670 = G__26682;
count__26649_26671 = G__26683;
i__26650_26672 = G__26684;
continue;
} else {
var test_26685 = cljs.core.first.call(null,seq__26647_26679__$1);
cljs.compiler.emitln.call(null,"case ",test_26685,":");


var G__26686 = cljs.core.next.call(null,seq__26647_26679__$1);
var G__26687 = null;
var G__26688 = (0);
var G__26689 = (0);
seq__26647_26669 = G__26686;
chunk__26648_26670 = G__26687;
count__26649_26671 = G__26688;
i__26650_26672 = G__26689;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_26668);
} else {
cljs.compiler.emitln.call(null,then_26668);
}

cljs.compiler.emitln.call(null,"break;");


var G__26690 = seq__26623_26659;
var G__26691 = chunk__26624_26660;
var G__26692 = count__26625_26661;
var G__26693 = (i__26626_26662 + (1));
seq__26623_26659 = G__26690;
chunk__26624_26660 = G__26691;
count__26625_26661 = G__26692;
i__26626_26662 = G__26693;
continue;
} else {
var temp__5457__auto___26694 = cljs.core.seq.call(null,seq__26623_26659);
if(temp__5457__auto___26694){
var seq__26623_26695__$1 = temp__5457__auto___26694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26623_26695__$1)){
var c__18782__auto___26696 = cljs.core.chunk_first.call(null,seq__26623_26695__$1);
var G__26697 = cljs.core.chunk_rest.call(null,seq__26623_26695__$1);
var G__26698 = c__18782__auto___26696;
var G__26699 = cljs.core.count.call(null,c__18782__auto___26696);
var G__26700 = (0);
seq__26623_26659 = G__26697;
chunk__26624_26660 = G__26698;
count__26625_26661 = G__26699;
i__26626_26662 = G__26700;
continue;
} else {
var map__26651_26701 = cljs.core.first.call(null,seq__26623_26695__$1);
var map__26651_26702__$1 = (((((!((map__26651_26701 == null))))?(((((map__26651_26701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26651_26701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26651_26701):map__26651_26701);
var ts_26703 = cljs.core.get.call(null,map__26651_26702__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__26652_26704 = cljs.core.get.call(null,map__26651_26702__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__26652_26705__$1 = (((((!((map__26652_26704 == null))))?(((((map__26652_26704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26652_26704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26652_26704):map__26652_26704);
var then_26706 = cljs.core.get.call(null,map__26652_26705__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__26655_26707 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_26703));
var chunk__26656_26708 = null;
var count__26657_26709 = (0);
var i__26658_26710 = (0);
while(true){
if((i__26658_26710 < count__26657_26709)){
var test_26711 = cljs.core._nth.call(null,chunk__26656_26708,i__26658_26710);
cljs.compiler.emitln.call(null,"case ",test_26711,":");


var G__26712 = seq__26655_26707;
var G__26713 = chunk__26656_26708;
var G__26714 = count__26657_26709;
var G__26715 = (i__26658_26710 + (1));
seq__26655_26707 = G__26712;
chunk__26656_26708 = G__26713;
count__26657_26709 = G__26714;
i__26658_26710 = G__26715;
continue;
} else {
var temp__5457__auto___26716__$1 = cljs.core.seq.call(null,seq__26655_26707);
if(temp__5457__auto___26716__$1){
var seq__26655_26717__$1 = temp__5457__auto___26716__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26655_26717__$1)){
var c__18782__auto___26718 = cljs.core.chunk_first.call(null,seq__26655_26717__$1);
var G__26719 = cljs.core.chunk_rest.call(null,seq__26655_26717__$1);
var G__26720 = c__18782__auto___26718;
var G__26721 = cljs.core.count.call(null,c__18782__auto___26718);
var G__26722 = (0);
seq__26655_26707 = G__26719;
chunk__26656_26708 = G__26720;
count__26657_26709 = G__26721;
i__26658_26710 = G__26722;
continue;
} else {
var test_26723 = cljs.core.first.call(null,seq__26655_26717__$1);
cljs.compiler.emitln.call(null,"case ",test_26723,":");


var G__26724 = cljs.core.next.call(null,seq__26655_26717__$1);
var G__26725 = null;
var G__26726 = (0);
var G__26727 = (0);
seq__26655_26707 = G__26724;
chunk__26656_26708 = G__26725;
count__26657_26709 = G__26726;
i__26658_26710 = G__26727;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_26706);
} else {
cljs.compiler.emitln.call(null,then_26706);
}

cljs.compiler.emitln.call(null,"break;");


var G__26728 = cljs.core.next.call(null,seq__26623_26695__$1);
var G__26729 = null;
var G__26730 = (0);
var G__26731 = (0);
seq__26623_26659 = G__26728;
chunk__26624_26660 = G__26729;
count__26625_26661 = G__26730;
i__26626_26662 = G__26731;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__26732){
var map__26733 = p__26732;
var map__26733__$1 = (((((!((map__26733 == null))))?(((((map__26733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26733):map__26733);
var throw$ = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__26736 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__26736,(0),null);
var rstr = cljs.core.nth.call(null,vec__26736,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__26736,fstr,rstr,ret_t,axstr){
return (function (p1__26735_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26735_SHARP_);
});})(idx,vec__26736,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__26739 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__26739,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__26739;
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
return (function (p1__26740_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26740_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__26741 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26742 = cljs.core.seq.call(null,vec__26741);
var first__26743 = cljs.core.first.call(null,seq__26742);
var seq__26742__$1 = cljs.core.next.call(null,seq__26742);
var p = first__26743;
var first__26743__$1 = cljs.core.first.call(null,seq__26742__$1);
var seq__26742__$2 = cljs.core.next.call(null,seq__26742__$1);
var ts = first__26743__$1;
var first__26743__$2 = cljs.core.first.call(null,seq__26742__$2);
var seq__26742__$3 = cljs.core.next.call(null,seq__26742__$2);
var n = first__26743__$2;
var xs = seq__26742__$3;
if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__17810__auto__){
var and__17810__auto____$1 = ts;
if(cljs.core.truth_(and__17810__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__26744 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26745 = cljs.core.seq.call(null,vec__26744);
var first__26746 = cljs.core.first.call(null,seq__26745);
var seq__26745__$1 = cljs.core.next.call(null,seq__26745);
var p = first__26746;
var first__26746__$1 = cljs.core.first.call(null,seq__26745__$1);
var seq__26745__$2 = cljs.core.next.call(null,seq__26745__$1);
var ts = first__26746__$1;
var xs = seq__26745__$2;
if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__17810__auto__){
var and__17810__auto____$1 = ts;
if(cljs.core.truth_(and__17810__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
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
var G__26749 = arguments.length;
switch (G__26749) {
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
var vec__26757 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__26747_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__26747_SHARP_);
} else {
return p1__26747_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__26758 = cljs.core.seq.call(null,vec__26757);
var first__26759 = cljs.core.first.call(null,seq__26758);
var seq__26758__$1 = cljs.core.next.call(null,seq__26758);
var x = first__26759;
var ys = seq__26758__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__26760 = cljs.core.seq.call(null,ys);
var chunk__26761 = null;
var count__26762 = (0);
var i__26763 = (0);
while(true){
if((i__26763 < count__26762)){
var next_line = cljs.core._nth.call(null,chunk__26761,i__26763);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__26769 = seq__26760;
var G__26770 = chunk__26761;
var G__26771 = count__26762;
var G__26772 = (i__26763 + (1));
seq__26760 = G__26769;
chunk__26761 = G__26770;
count__26762 = G__26771;
i__26763 = G__26772;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26760);
if(temp__5457__auto__){
var seq__26760__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26760__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__26760__$1);
var G__26773 = cljs.core.chunk_rest.call(null,seq__26760__$1);
var G__26774 = c__18782__auto__;
var G__26775 = cljs.core.count.call(null,c__18782__auto__);
var G__26776 = (0);
seq__26760 = G__26773;
chunk__26761 = G__26774;
count__26762 = G__26775;
i__26763 = G__26776;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__26760__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__26777 = cljs.core.next.call(null,seq__26760__$1);
var G__26778 = null;
var G__26779 = (0);
var G__26780 = (0);
seq__26760 = G__26777;
chunk__26761 = G__26778;
count__26762 = G__26779;
i__26763 = G__26780;
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

var seq__26764_26781 = cljs.core.seq.call(null,docs__$2);
var chunk__26765_26782 = null;
var count__26766_26783 = (0);
var i__26767_26784 = (0);
while(true){
if((i__26767_26784 < count__26766_26783)){
var e_26785 = cljs.core._nth.call(null,chunk__26765_26782,i__26767_26784);
if(cljs.core.truth_(e_26785)){
print_comment_lines.call(null,e_26785);
} else {
}


var G__26786 = seq__26764_26781;
var G__26787 = chunk__26765_26782;
var G__26788 = count__26766_26783;
var G__26789 = (i__26767_26784 + (1));
seq__26764_26781 = G__26786;
chunk__26765_26782 = G__26787;
count__26766_26783 = G__26788;
i__26767_26784 = G__26789;
continue;
} else {
var temp__5457__auto___26790 = cljs.core.seq.call(null,seq__26764_26781);
if(temp__5457__auto___26790){
var seq__26764_26791__$1 = temp__5457__auto___26790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26764_26791__$1)){
var c__18782__auto___26792 = cljs.core.chunk_first.call(null,seq__26764_26791__$1);
var G__26793 = cljs.core.chunk_rest.call(null,seq__26764_26791__$1);
var G__26794 = c__18782__auto___26792;
var G__26795 = cljs.core.count.call(null,c__18782__auto___26792);
var G__26796 = (0);
seq__26764_26781 = G__26793;
chunk__26765_26782 = G__26794;
count__26766_26783 = G__26795;
i__26767_26784 = G__26796;
continue;
} else {
var e_26797 = cljs.core.first.call(null,seq__26764_26791__$1);
if(cljs.core.truth_(e_26797)){
print_comment_lines.call(null,e_26797);
} else {
}


var G__26798 = cljs.core.next.call(null,seq__26764_26791__$1);
var G__26799 = null;
var G__26800 = (0);
var G__26801 = (0);
seq__26764_26781 = G__26798;
chunk__26765_26782 = G__26799;
count__26766_26783 = G__26800;
i__26767_26784 = G__26801;
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
var and__17810__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__26803_SHARP_){
return goog.string.startsWith(p1__26803_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__17810__auto__)){
var and__17810__auto____$1 = opts;
if(cljs.core.truth_(and__17810__auto____$1)){
var and__17810__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__17810__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__17810__auto____$2;
}
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__26804){
var map__26805 = p__26804;
var map__26805__$1 = (((((!((map__26805 == null))))?(((((map__26805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26805):map__26805);
var name = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__17825__auto__ = init;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
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

if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__17810__auto__){
return test;
} else {
return and__17810__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__26807){
var map__26808 = p__26807;
var map__26808__$1 = (((((!((map__26808 == null))))?(((((map__26808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26808):map__26808);
var name = cljs.core.get.call(null,map__26808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__26808__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__26808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__26810_26834 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__26811_26835 = null;
var count__26812_26836 = (0);
var i__26813_26837 = (0);
while(true){
if((i__26813_26837 < count__26812_26836)){
var vec__26820_26838 = cljs.core._nth.call(null,chunk__26811_26835,i__26813_26837);
var i_26839 = cljs.core.nth.call(null,vec__26820_26838,(0),null);
var param_26840 = cljs.core.nth.call(null,vec__26820_26838,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26840);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__26841 = seq__26810_26834;
var G__26842 = chunk__26811_26835;
var G__26843 = count__26812_26836;
var G__26844 = (i__26813_26837 + (1));
seq__26810_26834 = G__26841;
chunk__26811_26835 = G__26842;
count__26812_26836 = G__26843;
i__26813_26837 = G__26844;
continue;
} else {
var temp__5457__auto___26845 = cljs.core.seq.call(null,seq__26810_26834);
if(temp__5457__auto___26845){
var seq__26810_26846__$1 = temp__5457__auto___26845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26810_26846__$1)){
var c__18782__auto___26847 = cljs.core.chunk_first.call(null,seq__26810_26846__$1);
var G__26848 = cljs.core.chunk_rest.call(null,seq__26810_26846__$1);
var G__26849 = c__18782__auto___26847;
var G__26850 = cljs.core.count.call(null,c__18782__auto___26847);
var G__26851 = (0);
seq__26810_26834 = G__26848;
chunk__26811_26835 = G__26849;
count__26812_26836 = G__26850;
i__26813_26837 = G__26851;
continue;
} else {
var vec__26823_26852 = cljs.core.first.call(null,seq__26810_26846__$1);
var i_26853 = cljs.core.nth.call(null,vec__26823_26852,(0),null);
var param_26854 = cljs.core.nth.call(null,vec__26823_26852,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26854);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__26855 = cljs.core.next.call(null,seq__26810_26846__$1);
var G__26856 = null;
var G__26857 = (0);
var G__26858 = (0);
seq__26810_26834 = G__26855;
chunk__26811_26835 = G__26856;
count__26812_26836 = G__26857;
i__26813_26837 = G__26858;
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

var seq__26826_26859 = cljs.core.seq.call(null,params);
var chunk__26827_26860 = null;
var count__26828_26861 = (0);
var i__26829_26862 = (0);
while(true){
if((i__26829_26862 < count__26828_26861)){
var param_26863 = cljs.core._nth.call(null,chunk__26827_26860,i__26829_26862);
cljs.compiler.emit.call(null,param_26863);

if(cljs.core._EQ_.call(null,param_26863,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26864 = seq__26826_26859;
var G__26865 = chunk__26827_26860;
var G__26866 = count__26828_26861;
var G__26867 = (i__26829_26862 + (1));
seq__26826_26859 = G__26864;
chunk__26827_26860 = G__26865;
count__26828_26861 = G__26866;
i__26829_26862 = G__26867;
continue;
} else {
var temp__5457__auto___26868 = cljs.core.seq.call(null,seq__26826_26859);
if(temp__5457__auto___26868){
var seq__26826_26869__$1 = temp__5457__auto___26868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26826_26869__$1)){
var c__18782__auto___26870 = cljs.core.chunk_first.call(null,seq__26826_26869__$1);
var G__26871 = cljs.core.chunk_rest.call(null,seq__26826_26869__$1);
var G__26872 = c__18782__auto___26870;
var G__26873 = cljs.core.count.call(null,c__18782__auto___26870);
var G__26874 = (0);
seq__26826_26859 = G__26871;
chunk__26827_26860 = G__26872;
count__26828_26861 = G__26873;
i__26829_26862 = G__26874;
continue;
} else {
var param_26875 = cljs.core.first.call(null,seq__26826_26869__$1);
cljs.compiler.emit.call(null,param_26875);

if(cljs.core._EQ_.call(null,param_26875,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26876 = cljs.core.next.call(null,seq__26826_26869__$1);
var G__26877 = null;
var G__26878 = (0);
var G__26879 = (0);
seq__26826_26859 = G__26876;
chunk__26827_26860 = G__26877;
count__26828_26861 = G__26878;
i__26829_26862 = G__26879;
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

var seq__26830_26880 = cljs.core.seq.call(null,params);
var chunk__26831_26881 = null;
var count__26832_26882 = (0);
var i__26833_26883 = (0);
while(true){
if((i__26833_26883 < count__26832_26882)){
var param_26884 = cljs.core._nth.call(null,chunk__26831_26881,i__26833_26883);
cljs.compiler.emit.call(null,param_26884);

if(cljs.core._EQ_.call(null,param_26884,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26885 = seq__26830_26880;
var G__26886 = chunk__26831_26881;
var G__26887 = count__26832_26882;
var G__26888 = (i__26833_26883 + (1));
seq__26830_26880 = G__26885;
chunk__26831_26881 = G__26886;
count__26832_26882 = G__26887;
i__26833_26883 = G__26888;
continue;
} else {
var temp__5457__auto___26889 = cljs.core.seq.call(null,seq__26830_26880);
if(temp__5457__auto___26889){
var seq__26830_26890__$1 = temp__5457__auto___26889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26830_26890__$1)){
var c__18782__auto___26891 = cljs.core.chunk_first.call(null,seq__26830_26890__$1);
var G__26892 = cljs.core.chunk_rest.call(null,seq__26830_26890__$1);
var G__26893 = c__18782__auto___26891;
var G__26894 = cljs.core.count.call(null,c__18782__auto___26891);
var G__26895 = (0);
seq__26830_26880 = G__26892;
chunk__26831_26881 = G__26893;
count__26832_26882 = G__26894;
i__26833_26883 = G__26895;
continue;
} else {
var param_26896 = cljs.core.first.call(null,seq__26830_26890__$1);
cljs.compiler.emit.call(null,param_26896);

if(cljs.core._EQ_.call(null,param_26896,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26897 = cljs.core.next.call(null,seq__26830_26890__$1);
var G__26898 = null;
var G__26899 = (0);
var G__26900 = (0);
seq__26830_26880 = G__26897;
chunk__26831_26881 = G__26898;
count__26832_26882 = G__26899;
i__26833_26883 = G__26900;
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
var seq__26901 = cljs.core.seq.call(null,params);
var chunk__26902 = null;
var count__26903 = (0);
var i__26904 = (0);
while(true){
if((i__26904 < count__26903)){
var param = cljs.core._nth.call(null,chunk__26902,i__26904);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26905 = seq__26901;
var G__26906 = chunk__26902;
var G__26907 = count__26903;
var G__26908 = (i__26904 + (1));
seq__26901 = G__26905;
chunk__26902 = G__26906;
count__26903 = G__26907;
i__26904 = G__26908;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26901);
if(temp__5457__auto__){
var seq__26901__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26901__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__26901__$1);
var G__26909 = cljs.core.chunk_rest.call(null,seq__26901__$1);
var G__26910 = c__18782__auto__;
var G__26911 = cljs.core.count.call(null,c__18782__auto__);
var G__26912 = (0);
seq__26901 = G__26909;
chunk__26902 = G__26910;
count__26903 = G__26911;
i__26904 = G__26912;
continue;
} else {
var param = cljs.core.first.call(null,seq__26901__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26913 = cljs.core.next.call(null,seq__26901__$1);
var G__26914 = null;
var G__26915 = (0);
var G__26916 = (0);
seq__26901 = G__26913;
chunk__26902 = G__26914;
count__26903 = G__26915;
i__26904 = G__26916;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__26917){
var map__26918 = p__26917;
var map__26918__$1 = (((((!((map__26918 == null))))?(((((map__26918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26918):map__26918);
var expr = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__26920){
var map__26921 = p__26920;
var map__26921__$1 = (((((!((map__26921 == null))))?(((((map__26921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26921):map__26921);
var f = map__26921__$1;
var expr = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_26931__$1 = (function (){var or__17825__auto__ = name;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_26932 = cljs.compiler.munge.call(null,name_26931__$1);
var delegate_name_26933 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_26932),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_26933," = function (");

var seq__26923_26934 = cljs.core.seq.call(null,params);
var chunk__26924_26935 = null;
var count__26925_26936 = (0);
var i__26926_26937 = (0);
while(true){
if((i__26926_26937 < count__26925_26936)){
var param_26938 = cljs.core._nth.call(null,chunk__26924_26935,i__26926_26937);
cljs.compiler.emit.call(null,param_26938);

if(cljs.core._EQ_.call(null,param_26938,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26939 = seq__26923_26934;
var G__26940 = chunk__26924_26935;
var G__26941 = count__26925_26936;
var G__26942 = (i__26926_26937 + (1));
seq__26923_26934 = G__26939;
chunk__26924_26935 = G__26940;
count__26925_26936 = G__26941;
i__26926_26937 = G__26942;
continue;
} else {
var temp__5457__auto___26943 = cljs.core.seq.call(null,seq__26923_26934);
if(temp__5457__auto___26943){
var seq__26923_26944__$1 = temp__5457__auto___26943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26923_26944__$1)){
var c__18782__auto___26945 = cljs.core.chunk_first.call(null,seq__26923_26944__$1);
var G__26946 = cljs.core.chunk_rest.call(null,seq__26923_26944__$1);
var G__26947 = c__18782__auto___26945;
var G__26948 = cljs.core.count.call(null,c__18782__auto___26945);
var G__26949 = (0);
seq__26923_26934 = G__26946;
chunk__26924_26935 = G__26947;
count__26925_26936 = G__26948;
i__26926_26937 = G__26949;
continue;
} else {
var param_26950 = cljs.core.first.call(null,seq__26923_26944__$1);
cljs.compiler.emit.call(null,param_26950);

if(cljs.core._EQ_.call(null,param_26950,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26951 = cljs.core.next.call(null,seq__26923_26944__$1);
var G__26952 = null;
var G__26953 = (0);
var G__26954 = (0);
seq__26923_26934 = G__26951;
chunk__26924_26935 = G__26952;
count__26925_26936 = G__26953;
i__26926_26937 = G__26954;
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

cljs.compiler.emitln.call(null,"var ",mname_26932," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_26955 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_26955,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_26933,".call(this,");

var seq__26927_26956 = cljs.core.seq.call(null,params);
var chunk__26928_26957 = null;
var count__26929_26958 = (0);
var i__26930_26959 = (0);
while(true){
if((i__26930_26959 < count__26929_26958)){
var param_26960 = cljs.core._nth.call(null,chunk__26928_26957,i__26930_26959);
cljs.compiler.emit.call(null,param_26960);

if(cljs.core._EQ_.call(null,param_26960,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26961 = seq__26927_26956;
var G__26962 = chunk__26928_26957;
var G__26963 = count__26929_26958;
var G__26964 = (i__26930_26959 + (1));
seq__26927_26956 = G__26961;
chunk__26928_26957 = G__26962;
count__26929_26958 = G__26963;
i__26930_26959 = G__26964;
continue;
} else {
var temp__5457__auto___26965 = cljs.core.seq.call(null,seq__26927_26956);
if(temp__5457__auto___26965){
var seq__26927_26966__$1 = temp__5457__auto___26965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26927_26966__$1)){
var c__18782__auto___26967 = cljs.core.chunk_first.call(null,seq__26927_26966__$1);
var G__26968 = cljs.core.chunk_rest.call(null,seq__26927_26966__$1);
var G__26969 = c__18782__auto___26967;
var G__26970 = cljs.core.count.call(null,c__18782__auto___26967);
var G__26971 = (0);
seq__26927_26956 = G__26968;
chunk__26928_26957 = G__26969;
count__26929_26958 = G__26970;
i__26930_26959 = G__26971;
continue;
} else {
var param_26972 = cljs.core.first.call(null,seq__26927_26966__$1);
cljs.compiler.emit.call(null,param_26972);

if(cljs.core._EQ_.call(null,param_26972,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26973 = cljs.core.next.call(null,seq__26927_26966__$1);
var G__26974 = null;
var G__26975 = (0);
var G__26976 = (0);
seq__26927_26956 = G__26973;
chunk__26928_26957 = G__26974;
count__26929_26958 = G__26975;
i__26930_26959 = G__26976;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_26932,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_26932,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_26931__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_26932,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_26933,";");

cljs.compiler.emitln.call(null,"return ",mname_26932,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__26980){
var map__26981 = p__26980;
var map__26981__$1 = (((((!((map__26981 == null))))?(((((map__26981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26981):map__26981);
var variadic = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__26981,map__26981__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__26977_SHARP_){
var and__17810__auto__ = p1__26977_SHARP_;
if(cljs.core.truth_(and__17810__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__26977_SHARP_));
} else {
return and__17810__auto__;
}
});})(map__26981,map__26981__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_27034__$1 = (function (){var or__17825__auto__ = name;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27035 = cljs.compiler.munge.call(null,name_27034__$1);
var maxparams_27036 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_27037 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_27034__$1,mname_27035,maxparams_27036,loop_locals,map__26981,map__26981__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27035),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_27034__$1,mname_27035,maxparams_27036,loop_locals,map__26981,map__26981__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_27038 = cljs.core.sort_by.call(null,((function (name_27034__$1,mname_27035,maxparams_27036,mmap_27037,loop_locals,map__26981,map__26981__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__26978_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26978_SHARP_)));
});})(name_27034__$1,mname_27035,maxparams_27036,mmap_27037,loop_locals,map__26981,map__26981__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_27037));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_27035," = null;");

var seq__26983_27039 = cljs.core.seq.call(null,ms_27038);
var chunk__26984_27040 = null;
var count__26985_27041 = (0);
var i__26986_27042 = (0);
while(true){
if((i__26986_27042 < count__26985_27041)){
var vec__26993_27043 = cljs.core._nth.call(null,chunk__26984_27040,i__26986_27042);
var n_27044 = cljs.core.nth.call(null,vec__26993_27043,(0),null);
var meth_27045 = cljs.core.nth.call(null,vec__26993_27043,(1),null);
cljs.compiler.emits.call(null,"var ",n_27044," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27045))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27045);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27045);
}

cljs.compiler.emitln.call(null,";");


var G__27046 = seq__26983_27039;
var G__27047 = chunk__26984_27040;
var G__27048 = count__26985_27041;
var G__27049 = (i__26986_27042 + (1));
seq__26983_27039 = G__27046;
chunk__26984_27040 = G__27047;
count__26985_27041 = G__27048;
i__26986_27042 = G__27049;
continue;
} else {
var temp__5457__auto___27050 = cljs.core.seq.call(null,seq__26983_27039);
if(temp__5457__auto___27050){
var seq__26983_27051__$1 = temp__5457__auto___27050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26983_27051__$1)){
var c__18782__auto___27052 = cljs.core.chunk_first.call(null,seq__26983_27051__$1);
var G__27053 = cljs.core.chunk_rest.call(null,seq__26983_27051__$1);
var G__27054 = c__18782__auto___27052;
var G__27055 = cljs.core.count.call(null,c__18782__auto___27052);
var G__27056 = (0);
seq__26983_27039 = G__27053;
chunk__26984_27040 = G__27054;
count__26985_27041 = G__27055;
i__26986_27042 = G__27056;
continue;
} else {
var vec__26996_27057 = cljs.core.first.call(null,seq__26983_27051__$1);
var n_27058 = cljs.core.nth.call(null,vec__26996_27057,(0),null);
var meth_27059 = cljs.core.nth.call(null,vec__26996_27057,(1),null);
cljs.compiler.emits.call(null,"var ",n_27058," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27059))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27059);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27059);
}

cljs.compiler.emitln.call(null,";");


var G__27060 = cljs.core.next.call(null,seq__26983_27051__$1);
var G__27061 = null;
var G__27062 = (0);
var G__27063 = (0);
seq__26983_27039 = G__27060;
chunk__26984_27040 = G__27061;
count__26985_27041 = G__27062;
i__26986_27042 = G__27063;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_27035," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_27036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_27036)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_27036));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__26999_27064 = cljs.core.seq.call(null,ms_27038);
var chunk__27000_27065 = null;
var count__27001_27066 = (0);
var i__27002_27067 = (0);
while(true){
if((i__27002_27067 < count__27001_27066)){
var vec__27009_27068 = cljs.core._nth.call(null,chunk__27000_27065,i__27002_27067);
var n_27069 = cljs.core.nth.call(null,vec__27009_27068,(0),null);
var meth_27070 = cljs.core.nth.call(null,vec__27009_27068,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27070))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27071 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27071," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27072 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27071," = new cljs.core.IndexedSeq(",a_27072,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27069,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27036)),(((cljs.core.count.call(null,maxparams_27036) > (1)))?", ":null),restarg_27071,");");
} else {
var pcnt_27073 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27070));
cljs.compiler.emitln.call(null,"case ",pcnt_27073,":");

cljs.compiler.emitln.call(null,"return ",n_27069,".call(this",(((pcnt_27073 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27073,maxparams_27036)),null,(1),null)),(2),null))),");");
}


var G__27074 = seq__26999_27064;
var G__27075 = chunk__27000_27065;
var G__27076 = count__27001_27066;
var G__27077 = (i__27002_27067 + (1));
seq__26999_27064 = G__27074;
chunk__27000_27065 = G__27075;
count__27001_27066 = G__27076;
i__27002_27067 = G__27077;
continue;
} else {
var temp__5457__auto___27078 = cljs.core.seq.call(null,seq__26999_27064);
if(temp__5457__auto___27078){
var seq__26999_27079__$1 = temp__5457__auto___27078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26999_27079__$1)){
var c__18782__auto___27080 = cljs.core.chunk_first.call(null,seq__26999_27079__$1);
var G__27081 = cljs.core.chunk_rest.call(null,seq__26999_27079__$1);
var G__27082 = c__18782__auto___27080;
var G__27083 = cljs.core.count.call(null,c__18782__auto___27080);
var G__27084 = (0);
seq__26999_27064 = G__27081;
chunk__27000_27065 = G__27082;
count__27001_27066 = G__27083;
i__27002_27067 = G__27084;
continue;
} else {
var vec__27012_27085 = cljs.core.first.call(null,seq__26999_27079__$1);
var n_27086 = cljs.core.nth.call(null,vec__27012_27085,(0),null);
var meth_27087 = cljs.core.nth.call(null,vec__27012_27085,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27087))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27088 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27088," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27089 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27088," = new cljs.core.IndexedSeq(",a_27089,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27086,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27036)),(((cljs.core.count.call(null,maxparams_27036) > (1)))?", ":null),restarg_27088,");");
} else {
var pcnt_27090 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27087));
cljs.compiler.emitln.call(null,"case ",pcnt_27090,":");

cljs.compiler.emitln.call(null,"return ",n_27086,".call(this",(((pcnt_27090 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27090,maxparams_27036)),null,(1),null)),(2),null))),");");
}


var G__27091 = cljs.core.next.call(null,seq__26999_27079__$1);
var G__27092 = null;
var G__27093 = (0);
var G__27094 = (0);
seq__26999_27064 = G__27091;
chunk__27000_27065 = G__27092;
count__27001_27066 = G__27093;
i__27002_27067 = G__27094;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_27095 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_27038)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_27095,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_27035,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_27035,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_27034__$1,mname_27035,maxparams_27036,mmap_27037,ms_27038,loop_locals,map__26981,map__26981__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__26979_SHARP_){
var vec__27015 = p1__26979_SHARP_;
var n = cljs.core.nth.call(null,vec__27015,(0),null);
var m = cljs.core.nth.call(null,vec__27015,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_27034__$1,mname_27035,maxparams_27036,mmap_27037,ms_27038,loop_locals,map__26981,map__26981__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_27038),".cljs$lang$applyTo;");
} else {
}

var seq__27018_27096 = cljs.core.seq.call(null,ms_27038);
var chunk__27019_27097 = null;
var count__27020_27098 = (0);
var i__27021_27099 = (0);
while(true){
if((i__27021_27099 < count__27020_27098)){
var vec__27028_27100 = cljs.core._nth.call(null,chunk__27019_27097,i__27021_27099);
var n_27101 = cljs.core.nth.call(null,vec__27028_27100,(0),null);
var meth_27102 = cljs.core.nth.call(null,vec__27028_27100,(1),null);
var c_27103 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27102));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27102))){
cljs.compiler.emitln.call(null,mname_27035,".cljs$core$IFn$_invoke$arity$variadic = ",n_27101,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27035,".cljs$core$IFn$_invoke$arity$",c_27103," = ",n_27101,";");
}


var G__27104 = seq__27018_27096;
var G__27105 = chunk__27019_27097;
var G__27106 = count__27020_27098;
var G__27107 = (i__27021_27099 + (1));
seq__27018_27096 = G__27104;
chunk__27019_27097 = G__27105;
count__27020_27098 = G__27106;
i__27021_27099 = G__27107;
continue;
} else {
var temp__5457__auto___27108 = cljs.core.seq.call(null,seq__27018_27096);
if(temp__5457__auto___27108){
var seq__27018_27109__$1 = temp__5457__auto___27108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27018_27109__$1)){
var c__18782__auto___27110 = cljs.core.chunk_first.call(null,seq__27018_27109__$1);
var G__27111 = cljs.core.chunk_rest.call(null,seq__27018_27109__$1);
var G__27112 = c__18782__auto___27110;
var G__27113 = cljs.core.count.call(null,c__18782__auto___27110);
var G__27114 = (0);
seq__27018_27096 = G__27111;
chunk__27019_27097 = G__27112;
count__27020_27098 = G__27113;
i__27021_27099 = G__27114;
continue;
} else {
var vec__27031_27115 = cljs.core.first.call(null,seq__27018_27109__$1);
var n_27116 = cljs.core.nth.call(null,vec__27031_27115,(0),null);
var meth_27117 = cljs.core.nth.call(null,vec__27031_27115,(1),null);
var c_27118 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27117));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27117))){
cljs.compiler.emitln.call(null,mname_27035,".cljs$core$IFn$_invoke$arity$variadic = ",n_27116,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27035,".cljs$core$IFn$_invoke$arity$",c_27118," = ",n_27116,";");
}


var G__27119 = cljs.core.next.call(null,seq__27018_27109__$1);
var G__27120 = null;
var G__27121 = (0);
var G__27122 = (0);
seq__27018_27096 = G__27119;
chunk__27019_27097 = G__27120;
count__27020_27098 = G__27121;
i__27021_27099 = G__27122;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_27035,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__27123){
var map__27124 = p__27123;
var map__27124__$1 = (((((!((map__27124 == null))))?(((((map__27124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27124):map__27124);
var statements = cljs.core.get.call(null,map__27124__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__27124__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__27124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__27126_27130 = cljs.core.seq.call(null,statements);
var chunk__27127_27131 = null;
var count__27128_27132 = (0);
var i__27129_27133 = (0);
while(true){
if((i__27129_27133 < count__27128_27132)){
var s_27134 = cljs.core._nth.call(null,chunk__27127_27131,i__27129_27133);
cljs.compiler.emitln.call(null,s_27134);


var G__27135 = seq__27126_27130;
var G__27136 = chunk__27127_27131;
var G__27137 = count__27128_27132;
var G__27138 = (i__27129_27133 + (1));
seq__27126_27130 = G__27135;
chunk__27127_27131 = G__27136;
count__27128_27132 = G__27137;
i__27129_27133 = G__27138;
continue;
} else {
var temp__5457__auto___27139 = cljs.core.seq.call(null,seq__27126_27130);
if(temp__5457__auto___27139){
var seq__27126_27140__$1 = temp__5457__auto___27139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27126_27140__$1)){
var c__18782__auto___27141 = cljs.core.chunk_first.call(null,seq__27126_27140__$1);
var G__27142 = cljs.core.chunk_rest.call(null,seq__27126_27140__$1);
var G__27143 = c__18782__auto___27141;
var G__27144 = cljs.core.count.call(null,c__18782__auto___27141);
var G__27145 = (0);
seq__27126_27130 = G__27142;
chunk__27127_27131 = G__27143;
count__27128_27132 = G__27144;
i__27129_27133 = G__27145;
continue;
} else {
var s_27146 = cljs.core.first.call(null,seq__27126_27140__$1);
cljs.compiler.emitln.call(null,s_27146);


var G__27147 = cljs.core.next.call(null,seq__27126_27140__$1);
var G__27148 = null;
var G__27149 = (0);
var G__27150 = (0);
seq__27126_27130 = G__27147;
chunk__27127_27131 = G__27148;
count__27128_27132 = G__27149;
i__27129_27133 = G__27150;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__27151){
var map__27152 = p__27151;
var map__27152__$1 = (((((!((map__27152 == null))))?(((((map__27152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27152):map__27152);
var try$ = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__17825__auto__ = name;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__27154,is_loop){
var map__27155 = p__27154;
var map__27155__$1 = (((((!((map__27155 == null))))?(((((map__27155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27155):map__27155);
var expr = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__27157_27171 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__27158_27172 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__27157_27171,context,map__27155,map__27155__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__27157_27171,context,map__27155,map__27155__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__27158_27172;

try{var seq__27159_27173 = cljs.core.seq.call(null,bindings);
var chunk__27160_27174 = null;
var count__27161_27175 = (0);
var i__27162_27176 = (0);
while(true){
if((i__27162_27176 < count__27161_27175)){
var map__27167_27177 = cljs.core._nth.call(null,chunk__27160_27174,i__27162_27176);
var map__27167_27178__$1 = (((((!((map__27167_27177 == null))))?(((((map__27167_27177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27167_27177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27167_27177):map__27167_27177);
var binding_27179 = map__27167_27178__$1;
var init_27180 = cljs.core.get.call(null,map__27167_27178__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27179);

cljs.compiler.emitln.call(null," = ",init_27180,";");


var G__27181 = seq__27159_27173;
var G__27182 = chunk__27160_27174;
var G__27183 = count__27161_27175;
var G__27184 = (i__27162_27176 + (1));
seq__27159_27173 = G__27181;
chunk__27160_27174 = G__27182;
count__27161_27175 = G__27183;
i__27162_27176 = G__27184;
continue;
} else {
var temp__5457__auto___27185 = cljs.core.seq.call(null,seq__27159_27173);
if(temp__5457__auto___27185){
var seq__27159_27186__$1 = temp__5457__auto___27185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27159_27186__$1)){
var c__18782__auto___27187 = cljs.core.chunk_first.call(null,seq__27159_27186__$1);
var G__27188 = cljs.core.chunk_rest.call(null,seq__27159_27186__$1);
var G__27189 = c__18782__auto___27187;
var G__27190 = cljs.core.count.call(null,c__18782__auto___27187);
var G__27191 = (0);
seq__27159_27173 = G__27188;
chunk__27160_27174 = G__27189;
count__27161_27175 = G__27190;
i__27162_27176 = G__27191;
continue;
} else {
var map__27169_27192 = cljs.core.first.call(null,seq__27159_27186__$1);
var map__27169_27193__$1 = (((((!((map__27169_27192 == null))))?(((((map__27169_27192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27169_27192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27169_27192):map__27169_27192);
var binding_27194 = map__27169_27193__$1;
var init_27195 = cljs.core.get.call(null,map__27169_27193__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27194);

cljs.compiler.emitln.call(null," = ",init_27195,";");


var G__27196 = cljs.core.next.call(null,seq__27159_27186__$1);
var G__27197 = null;
var G__27198 = (0);
var G__27199 = (0);
seq__27159_27173 = G__27196;
chunk__27160_27174 = G__27197;
count__27161_27175 = G__27198;
i__27162_27176 = G__27199;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__27157_27171;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__27200){
var map__27201 = p__27200;
var map__27201__$1 = (((((!((map__27201 == null))))?(((((map__27201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27201):map__27201);
var frame = cljs.core.get.call(null,map__27201__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__27201__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__27201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__18893__auto___27203 = cljs.core.count.call(null,exprs);
var i_27204 = (0);
while(true){
if((i_27204 < n__18893__auto___27203)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_27204)," = ",exprs.call(null,i_27204),";");

var G__27205 = (i_27204 + (1));
i_27204 = G__27205;
continue;
} else {
}
break;
}

var n__18893__auto___27206 = cljs.core.count.call(null,exprs);
var i_27207 = (0);
while(true){
if((i_27207 < n__18893__auto___27206)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_27207))," = ",temps.call(null,i_27207),";");

var G__27208 = (i_27207 + (1));
i_27207 = G__27208;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__27209){
var map__27210 = p__27209;
var map__27210__$1 = (((((!((map__27210 == null))))?(((((map__27210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27210):map__27210);
var expr = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__27212_27224 = cljs.core.seq.call(null,bindings);
var chunk__27213_27225 = null;
var count__27214_27226 = (0);
var i__27215_27227 = (0);
while(true){
if((i__27215_27227 < count__27214_27226)){
var map__27220_27228 = cljs.core._nth.call(null,chunk__27213_27225,i__27215_27227);
var map__27220_27229__$1 = (((((!((map__27220_27228 == null))))?(((((map__27220_27228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27220_27228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27220_27228):map__27220_27228);
var binding_27230 = map__27220_27229__$1;
var init_27231 = cljs.core.get.call(null,map__27220_27229__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27230)," = ",init_27231,";");


var G__27232 = seq__27212_27224;
var G__27233 = chunk__27213_27225;
var G__27234 = count__27214_27226;
var G__27235 = (i__27215_27227 + (1));
seq__27212_27224 = G__27232;
chunk__27213_27225 = G__27233;
count__27214_27226 = G__27234;
i__27215_27227 = G__27235;
continue;
} else {
var temp__5457__auto___27236 = cljs.core.seq.call(null,seq__27212_27224);
if(temp__5457__auto___27236){
var seq__27212_27237__$1 = temp__5457__auto___27236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27212_27237__$1)){
var c__18782__auto___27238 = cljs.core.chunk_first.call(null,seq__27212_27237__$1);
var G__27239 = cljs.core.chunk_rest.call(null,seq__27212_27237__$1);
var G__27240 = c__18782__auto___27238;
var G__27241 = cljs.core.count.call(null,c__18782__auto___27238);
var G__27242 = (0);
seq__27212_27224 = G__27239;
chunk__27213_27225 = G__27240;
count__27214_27226 = G__27241;
i__27215_27227 = G__27242;
continue;
} else {
var map__27222_27243 = cljs.core.first.call(null,seq__27212_27237__$1);
var map__27222_27244__$1 = (((((!((map__27222_27243 == null))))?(((((map__27222_27243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27222_27243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27222_27243):map__27222_27243);
var binding_27245 = map__27222_27244__$1;
var init_27246 = cljs.core.get.call(null,map__27222_27244__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27245)," = ",init_27246,";");


var G__27247 = cljs.core.next.call(null,seq__27212_27237__$1);
var G__27248 = null;
var G__27249 = (0);
var G__27250 = (0);
seq__27212_27224 = G__27247;
chunk__27213_27225 = G__27248;
count__27214_27226 = G__27249;
i__27215_27227 = G__27250;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__27253){
var map__27254 = p__27253;
var map__27254__$1 = (((((!((map__27254 == null))))?(((((map__27254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27254):map__27254);
var expr = map__27254__$1;
var f = cljs.core.get.call(null,map__27254__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__27254__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27254__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__17810__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__17810__auto__){
var and__17810__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__17810__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__17810__auto__ = protocol;
if(cljs.core.truth_(and__17810__auto__)){
var and__17810__auto____$1 = tag;
if(cljs.core.truth_(and__17810__auto____$1)){
var or__17825__auto__ = (function (){var and__17810__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__17810__auto____$2){
var and__17810__auto____$3 = protocol;
if(cljs.core.truth_(and__17810__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__17810__auto____$3;
}
} else {
return and__17810__auto____$2;
}
})();
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
var and__17810__auto____$2 = (function (){var or__17825__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__17825__auto____$1){
return or__17825__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__17810__auto____$2)){
var or__17825__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__17825__auto____$1){
return or__17825__auto____$1;
} else {
var and__17810__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__17810__auto____$3){
var and__17810__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__17810__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__17810__auto____$4;
}
} else {
return and__17810__auto____$3;
}
}
} else {
return and__17810__auto____$2;
}
}
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__17825__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__17825__auto__){
return or__17825__auto__;
} else {
var or__17825__auto____$1 = (function (){var temp__5457__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__17825__auto____$1)){
return or__17825__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__17825__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__17825__auto__){
return or__17825__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__27256 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__17810__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__17810__auto__)){
return (arity > mfa);
} else {
return and__17810__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27254,map__27254__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27254,map__27254__$1,expr,f,args,env){
return (function (p1__27251_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__27251_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27254,map__27254__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27254,map__27254__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27254,map__27254__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27254,map__27254__$1,expr,f,args,env){
return (function (p1__27252_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__27252_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27254,map__27254__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27254,map__27254__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__27256,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__27256,(1),null);
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_27259 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_27259,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_27260 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_27260,args)),(((mfa_27260 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_27260,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__17825__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
var or__17825__auto____$1 = js_QMARK_;
if(or__17825__auto____$1){
return or__17825__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__17810__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__17810__auto__;
}
})())){
var fprop_27261 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_27261," ? ",f__$1,fprop_27261,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_27261," ? ",f__$1,fprop_27261,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__27262){
var map__27263 = p__27262;
var map__27263__$1 = (((((!((map__27263 == null))))?(((((map__27263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27263):map__27263);
var ctor = cljs.core.get.call(null,map__27263__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__27263__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__27265){
var map__27266 = p__27265;
var map__27266__$1 = (((((!((map__27266 == null))))?(((((map__27266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27266):map__27266);
var target = cljs.core.get.call(null,map__27266__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__27266__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__27266__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__17825__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__27268 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__27268__$1 = (((((!((map__27268 == null))))?(((((map__27268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27268):map__27268);
var options = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__27269 = options;
var map__27269__$1 = (((((!((map__27269 == null))))?(((((map__27269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27269):map__27269);
var target = cljs.core.get.call(null,map__27269__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__27269__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__27270 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__27275 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__27275__$1 = (((((!((map__27275 == null))))?(((((map__27275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27275):map__27275);
var node_libs = cljs.core.get.call(null,map__27275__$1,true);
var libs_to_load = cljs.core.get.call(null,map__27275__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__27270,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__27270,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__27277_27297 = cljs.core.seq.call(null,libs_to_load);
var chunk__27278_27298 = null;
var count__27279_27299 = (0);
var i__27280_27300 = (0);
while(true){
if((i__27280_27300 < count__27279_27299)){
var lib_27301 = cljs.core._nth.call(null,chunk__27278_27298,i__27280_27300);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_27301)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__17825__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27301),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27301),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__17825__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27301),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27301),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_27301,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27301),"');");
}

}
}
}


var G__27302 = seq__27277_27297;
var G__27303 = chunk__27278_27298;
var G__27304 = count__27279_27299;
var G__27305 = (i__27280_27300 + (1));
seq__27277_27297 = G__27302;
chunk__27278_27298 = G__27303;
count__27279_27299 = G__27304;
i__27280_27300 = G__27305;
continue;
} else {
var temp__5457__auto___27306 = cljs.core.seq.call(null,seq__27277_27297);
if(temp__5457__auto___27306){
var seq__27277_27307__$1 = temp__5457__auto___27306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27277_27307__$1)){
var c__18782__auto___27308 = cljs.core.chunk_first.call(null,seq__27277_27307__$1);
var G__27309 = cljs.core.chunk_rest.call(null,seq__27277_27307__$1);
var G__27310 = c__18782__auto___27308;
var G__27311 = cljs.core.count.call(null,c__18782__auto___27308);
var G__27312 = (0);
seq__27277_27297 = G__27309;
chunk__27278_27298 = G__27310;
count__27279_27299 = G__27311;
i__27280_27300 = G__27312;
continue;
} else {
var lib_27313 = cljs.core.first.call(null,seq__27277_27307__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_27313)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__17825__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27313),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27313),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__17825__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27313),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27313),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_27313,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27313),"');");
}

}
}
}


var G__27314 = cljs.core.next.call(null,seq__27277_27307__$1);
var G__27315 = null;
var G__27316 = (0);
var G__27317 = (0);
seq__27277_27297 = G__27314;
chunk__27278_27298 = G__27315;
count__27279_27299 = G__27316;
i__27280_27300 = G__27317;
continue;
}
} else {
}
}
break;
}

var seq__27281_27318 = cljs.core.seq.call(null,node_libs);
var chunk__27282_27319 = null;
var count__27283_27320 = (0);
var i__27284_27321 = (0);
while(true){
if((i__27284_27321 < count__27283_27320)){
var lib_27322 = cljs.core._nth.call(null,chunk__27282_27319,i__27284_27321);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_27322)," = require('",lib_27322,"');");


var G__27323 = seq__27281_27318;
var G__27324 = chunk__27282_27319;
var G__27325 = count__27283_27320;
var G__27326 = (i__27284_27321 + (1));
seq__27281_27318 = G__27323;
chunk__27282_27319 = G__27324;
count__27283_27320 = G__27325;
i__27284_27321 = G__27326;
continue;
} else {
var temp__5457__auto___27327 = cljs.core.seq.call(null,seq__27281_27318);
if(temp__5457__auto___27327){
var seq__27281_27328__$1 = temp__5457__auto___27327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27281_27328__$1)){
var c__18782__auto___27329 = cljs.core.chunk_first.call(null,seq__27281_27328__$1);
var G__27330 = cljs.core.chunk_rest.call(null,seq__27281_27328__$1);
var G__27331 = c__18782__auto___27329;
var G__27332 = cljs.core.count.call(null,c__18782__auto___27329);
var G__27333 = (0);
seq__27281_27318 = G__27330;
chunk__27282_27319 = G__27331;
count__27283_27320 = G__27332;
i__27284_27321 = G__27333;
continue;
} else {
var lib_27334 = cljs.core.first.call(null,seq__27281_27328__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_27334)," = require('",lib_27334,"');");


var G__27335 = cljs.core.next.call(null,seq__27281_27328__$1);
var G__27336 = null;
var G__27337 = (0);
var G__27338 = (0);
seq__27281_27318 = G__27335;
chunk__27282_27319 = G__27336;
count__27283_27320 = G__27337;
i__27284_27321 = G__27338;
continue;
}
} else {
}
}
break;
}

var seq__27285_27339 = cljs.core.seq.call(null,global_exports_libs);
var chunk__27286_27340 = null;
var count__27287_27341 = (0);
var i__27288_27342 = (0);
while(true){
if((i__27288_27342 < count__27287_27341)){
var lib_27343 = cljs.core._nth.call(null,chunk__27286_27340,i__27288_27342);
var map__27293_27344 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_27343));
var map__27293_27345__$1 = (((((!((map__27293_27344 == null))))?(((((map__27293_27344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27293_27344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27293_27344):map__27293_27344);
var global_exports_27346 = cljs.core.get.call(null,map__27293_27345__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_27346,lib_27343);


var G__27347 = seq__27285_27339;
var G__27348 = chunk__27286_27340;
var G__27349 = count__27287_27341;
var G__27350 = (i__27288_27342 + (1));
seq__27285_27339 = G__27347;
chunk__27286_27340 = G__27348;
count__27287_27341 = G__27349;
i__27288_27342 = G__27350;
continue;
} else {
var temp__5457__auto___27351 = cljs.core.seq.call(null,seq__27285_27339);
if(temp__5457__auto___27351){
var seq__27285_27352__$1 = temp__5457__auto___27351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27285_27352__$1)){
var c__18782__auto___27353 = cljs.core.chunk_first.call(null,seq__27285_27352__$1);
var G__27354 = cljs.core.chunk_rest.call(null,seq__27285_27352__$1);
var G__27355 = c__18782__auto___27353;
var G__27356 = cljs.core.count.call(null,c__18782__auto___27353);
var G__27357 = (0);
seq__27285_27339 = G__27354;
chunk__27286_27340 = G__27355;
count__27287_27341 = G__27356;
i__27288_27342 = G__27357;
continue;
} else {
var lib_27358 = cljs.core.first.call(null,seq__27285_27352__$1);
var map__27295_27359 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_27358));
var map__27295_27360__$1 = (((((!((map__27295_27359 == null))))?(((((map__27295_27359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27295_27359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27295_27359):map__27295_27359);
var global_exports_27361 = cljs.core.get.call(null,map__27295_27360__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_27361,lib_27358);


var G__27362 = cljs.core.next.call(null,seq__27285_27352__$1);
var G__27363 = null;
var G__27364 = (0);
var G__27365 = (0);
seq__27285_27339 = G__27362;
chunk__27286_27340 = G__27363;
count__27287_27341 = G__27364;
i__27288_27342 = G__27365;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__27366){
var map__27367 = p__27366;
var map__27367__$1 = (((((!((map__27367 == null))))?(((((map__27367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27367):map__27367);
var name = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__27369){
var map__27370 = p__27369;
var map__27370__$1 = (((((!((map__27370 == null))))?(((((map__27370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27370):map__27370);
var name = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__27372){
var map__27373 = p__27372;
var map__27373__$1 = (((((!((map__27373 == null))))?(((((map__27373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27373):map__27373);
var t = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__27375_27399 = cljs.core.seq.call(null,protocols);
var chunk__27376_27400 = null;
var count__27377_27401 = (0);
var i__27378_27402 = (0);
while(true){
if((i__27378_27402 < count__27377_27401)){
var protocol_27403 = cljs.core._nth.call(null,chunk__27376_27400,i__27378_27402);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27403)),"}");


var G__27404 = seq__27375_27399;
var G__27405 = chunk__27376_27400;
var G__27406 = count__27377_27401;
var G__27407 = (i__27378_27402 + (1));
seq__27375_27399 = G__27404;
chunk__27376_27400 = G__27405;
count__27377_27401 = G__27406;
i__27378_27402 = G__27407;
continue;
} else {
var temp__5457__auto___27408 = cljs.core.seq.call(null,seq__27375_27399);
if(temp__5457__auto___27408){
var seq__27375_27409__$1 = temp__5457__auto___27408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27375_27409__$1)){
var c__18782__auto___27410 = cljs.core.chunk_first.call(null,seq__27375_27409__$1);
var G__27411 = cljs.core.chunk_rest.call(null,seq__27375_27409__$1);
var G__27412 = c__18782__auto___27410;
var G__27413 = cljs.core.count.call(null,c__18782__auto___27410);
var G__27414 = (0);
seq__27375_27399 = G__27411;
chunk__27376_27400 = G__27412;
count__27377_27401 = G__27413;
i__27378_27402 = G__27414;
continue;
} else {
var protocol_27415 = cljs.core.first.call(null,seq__27375_27409__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27415)),"}");


var G__27416 = cljs.core.next.call(null,seq__27375_27409__$1);
var G__27417 = null;
var G__27418 = (0);
var G__27419 = (0);
seq__27375_27399 = G__27416;
chunk__27376_27400 = G__27417;
count__27377_27401 = G__27418;
i__27378_27402 = G__27419;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__27379_27420 = cljs.core.seq.call(null,fields__$1);
var chunk__27380_27421 = null;
var count__27381_27422 = (0);
var i__27382_27423 = (0);
while(true){
if((i__27382_27423 < count__27381_27422)){
var fld_27424 = cljs.core._nth.call(null,chunk__27380_27421,i__27382_27423);
cljs.compiler.emitln.call(null,"this.",fld_27424," = ",fld_27424,";");


var G__27425 = seq__27379_27420;
var G__27426 = chunk__27380_27421;
var G__27427 = count__27381_27422;
var G__27428 = (i__27382_27423 + (1));
seq__27379_27420 = G__27425;
chunk__27380_27421 = G__27426;
count__27381_27422 = G__27427;
i__27382_27423 = G__27428;
continue;
} else {
var temp__5457__auto___27429 = cljs.core.seq.call(null,seq__27379_27420);
if(temp__5457__auto___27429){
var seq__27379_27430__$1 = temp__5457__auto___27429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27379_27430__$1)){
var c__18782__auto___27431 = cljs.core.chunk_first.call(null,seq__27379_27430__$1);
var G__27432 = cljs.core.chunk_rest.call(null,seq__27379_27430__$1);
var G__27433 = c__18782__auto___27431;
var G__27434 = cljs.core.count.call(null,c__18782__auto___27431);
var G__27435 = (0);
seq__27379_27420 = G__27432;
chunk__27380_27421 = G__27433;
count__27381_27422 = G__27434;
i__27382_27423 = G__27435;
continue;
} else {
var fld_27436 = cljs.core.first.call(null,seq__27379_27430__$1);
cljs.compiler.emitln.call(null,"this.",fld_27436," = ",fld_27436,";");


var G__27437 = cljs.core.next.call(null,seq__27379_27430__$1);
var G__27438 = null;
var G__27439 = (0);
var G__27440 = (0);
seq__27379_27420 = G__27437;
chunk__27380_27421 = G__27438;
count__27381_27422 = G__27439;
i__27382_27423 = G__27440;
continue;
}
} else {
}
}
break;
}

var seq__27383_27441 = cljs.core.seq.call(null,pmasks);
var chunk__27384_27442 = null;
var count__27385_27443 = (0);
var i__27386_27444 = (0);
while(true){
if((i__27386_27444 < count__27385_27443)){
var vec__27393_27445 = cljs.core._nth.call(null,chunk__27384_27442,i__27386_27444);
var pno_27446 = cljs.core.nth.call(null,vec__27393_27445,(0),null);
var pmask_27447 = cljs.core.nth.call(null,vec__27393_27445,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27446,"$ = ",pmask_27447,";");


var G__27448 = seq__27383_27441;
var G__27449 = chunk__27384_27442;
var G__27450 = count__27385_27443;
var G__27451 = (i__27386_27444 + (1));
seq__27383_27441 = G__27448;
chunk__27384_27442 = G__27449;
count__27385_27443 = G__27450;
i__27386_27444 = G__27451;
continue;
} else {
var temp__5457__auto___27452 = cljs.core.seq.call(null,seq__27383_27441);
if(temp__5457__auto___27452){
var seq__27383_27453__$1 = temp__5457__auto___27452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27383_27453__$1)){
var c__18782__auto___27454 = cljs.core.chunk_first.call(null,seq__27383_27453__$1);
var G__27455 = cljs.core.chunk_rest.call(null,seq__27383_27453__$1);
var G__27456 = c__18782__auto___27454;
var G__27457 = cljs.core.count.call(null,c__18782__auto___27454);
var G__27458 = (0);
seq__27383_27441 = G__27455;
chunk__27384_27442 = G__27456;
count__27385_27443 = G__27457;
i__27386_27444 = G__27458;
continue;
} else {
var vec__27396_27459 = cljs.core.first.call(null,seq__27383_27453__$1);
var pno_27460 = cljs.core.nth.call(null,vec__27396_27459,(0),null);
var pmask_27461 = cljs.core.nth.call(null,vec__27396_27459,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27460,"$ = ",pmask_27461,";");


var G__27462 = cljs.core.next.call(null,seq__27383_27453__$1);
var G__27463 = null;
var G__27464 = (0);
var G__27465 = (0);
seq__27383_27441 = G__27462;
chunk__27384_27442 = G__27463;
count__27385_27443 = G__27464;
i__27386_27444 = G__27465;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__27466){
var map__27467 = p__27466;
var map__27467__$1 = (((((!((map__27467 == null))))?(((((map__27467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27467):map__27467);
var t = cljs.core.get.call(null,map__27467__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__27467__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__27467__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__27467__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__27467__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__27469_27493 = cljs.core.seq.call(null,protocols);
var chunk__27470_27494 = null;
var count__27471_27495 = (0);
var i__27472_27496 = (0);
while(true){
if((i__27472_27496 < count__27471_27495)){
var protocol_27497 = cljs.core._nth.call(null,chunk__27470_27494,i__27472_27496);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27497)),"}");


var G__27498 = seq__27469_27493;
var G__27499 = chunk__27470_27494;
var G__27500 = count__27471_27495;
var G__27501 = (i__27472_27496 + (1));
seq__27469_27493 = G__27498;
chunk__27470_27494 = G__27499;
count__27471_27495 = G__27500;
i__27472_27496 = G__27501;
continue;
} else {
var temp__5457__auto___27502 = cljs.core.seq.call(null,seq__27469_27493);
if(temp__5457__auto___27502){
var seq__27469_27503__$1 = temp__5457__auto___27502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27469_27503__$1)){
var c__18782__auto___27504 = cljs.core.chunk_first.call(null,seq__27469_27503__$1);
var G__27505 = cljs.core.chunk_rest.call(null,seq__27469_27503__$1);
var G__27506 = c__18782__auto___27504;
var G__27507 = cljs.core.count.call(null,c__18782__auto___27504);
var G__27508 = (0);
seq__27469_27493 = G__27505;
chunk__27470_27494 = G__27506;
count__27471_27495 = G__27507;
i__27472_27496 = G__27508;
continue;
} else {
var protocol_27509 = cljs.core.first.call(null,seq__27469_27503__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27509)),"}");


var G__27510 = cljs.core.next.call(null,seq__27469_27503__$1);
var G__27511 = null;
var G__27512 = (0);
var G__27513 = (0);
seq__27469_27493 = G__27510;
chunk__27470_27494 = G__27511;
count__27471_27495 = G__27512;
i__27472_27496 = G__27513;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__27473_27514 = cljs.core.seq.call(null,fields__$1);
var chunk__27474_27515 = null;
var count__27475_27516 = (0);
var i__27476_27517 = (0);
while(true){
if((i__27476_27517 < count__27475_27516)){
var fld_27518 = cljs.core._nth.call(null,chunk__27474_27515,i__27476_27517);
cljs.compiler.emitln.call(null,"this.",fld_27518," = ",fld_27518,";");


var G__27519 = seq__27473_27514;
var G__27520 = chunk__27474_27515;
var G__27521 = count__27475_27516;
var G__27522 = (i__27476_27517 + (1));
seq__27473_27514 = G__27519;
chunk__27474_27515 = G__27520;
count__27475_27516 = G__27521;
i__27476_27517 = G__27522;
continue;
} else {
var temp__5457__auto___27523 = cljs.core.seq.call(null,seq__27473_27514);
if(temp__5457__auto___27523){
var seq__27473_27524__$1 = temp__5457__auto___27523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27473_27524__$1)){
var c__18782__auto___27525 = cljs.core.chunk_first.call(null,seq__27473_27524__$1);
var G__27526 = cljs.core.chunk_rest.call(null,seq__27473_27524__$1);
var G__27527 = c__18782__auto___27525;
var G__27528 = cljs.core.count.call(null,c__18782__auto___27525);
var G__27529 = (0);
seq__27473_27514 = G__27526;
chunk__27474_27515 = G__27527;
count__27475_27516 = G__27528;
i__27476_27517 = G__27529;
continue;
} else {
var fld_27530 = cljs.core.first.call(null,seq__27473_27524__$1);
cljs.compiler.emitln.call(null,"this.",fld_27530," = ",fld_27530,";");


var G__27531 = cljs.core.next.call(null,seq__27473_27524__$1);
var G__27532 = null;
var G__27533 = (0);
var G__27534 = (0);
seq__27473_27514 = G__27531;
chunk__27474_27515 = G__27532;
count__27475_27516 = G__27533;
i__27476_27517 = G__27534;
continue;
}
} else {
}
}
break;
}

var seq__27477_27535 = cljs.core.seq.call(null,pmasks);
var chunk__27478_27536 = null;
var count__27479_27537 = (0);
var i__27480_27538 = (0);
while(true){
if((i__27480_27538 < count__27479_27537)){
var vec__27487_27539 = cljs.core._nth.call(null,chunk__27478_27536,i__27480_27538);
var pno_27540 = cljs.core.nth.call(null,vec__27487_27539,(0),null);
var pmask_27541 = cljs.core.nth.call(null,vec__27487_27539,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27540,"$ = ",pmask_27541,";");


var G__27542 = seq__27477_27535;
var G__27543 = chunk__27478_27536;
var G__27544 = count__27479_27537;
var G__27545 = (i__27480_27538 + (1));
seq__27477_27535 = G__27542;
chunk__27478_27536 = G__27543;
count__27479_27537 = G__27544;
i__27480_27538 = G__27545;
continue;
} else {
var temp__5457__auto___27546 = cljs.core.seq.call(null,seq__27477_27535);
if(temp__5457__auto___27546){
var seq__27477_27547__$1 = temp__5457__auto___27546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27477_27547__$1)){
var c__18782__auto___27548 = cljs.core.chunk_first.call(null,seq__27477_27547__$1);
var G__27549 = cljs.core.chunk_rest.call(null,seq__27477_27547__$1);
var G__27550 = c__18782__auto___27548;
var G__27551 = cljs.core.count.call(null,c__18782__auto___27548);
var G__27552 = (0);
seq__27477_27535 = G__27549;
chunk__27478_27536 = G__27550;
count__27479_27537 = G__27551;
i__27480_27538 = G__27552;
continue;
} else {
var vec__27490_27553 = cljs.core.first.call(null,seq__27477_27547__$1);
var pno_27554 = cljs.core.nth.call(null,vec__27490_27553,(0),null);
var pmask_27555 = cljs.core.nth.call(null,vec__27490_27553,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27554,"$ = ",pmask_27555,";");


var G__27556 = cljs.core.next.call(null,seq__27477_27547__$1);
var G__27557 = null;
var G__27558 = (0);
var G__27559 = (0);
seq__27477_27535 = G__27556;
chunk__27478_27536 = G__27557;
count__27479_27537 = G__27558;
i__27480_27538 = G__27559;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__27560){
var map__27561 = p__27560;
var map__27561__$1 = (((((!((map__27561 == null))))?(((((map__27561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27561):map__27561);
var target = cljs.core.get.call(null,map__27561__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__27561__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__27561__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__27561__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27561__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__27563){
var map__27564 = p__27563;
var map__27564__$1 = (((((!((map__27564 == null))))?(((((map__27564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27564):map__27564);
var op = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__17810__auto__ = code;
if(cljs.core.truth_(and__17810__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__17810__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__26358__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26358__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__27570 = cljs.core.seq.call(null,table);
var chunk__27571 = null;
var count__27572 = (0);
var i__27573 = (0);
while(true){
if((i__27573 < count__27572)){
var vec__27580 = cljs.core._nth.call(null,chunk__27571,i__27573);
var sym = cljs.core.nth.call(null,vec__27580,(0),null);
var value = cljs.core.nth.call(null,vec__27580,(1),null);
var ns_27586 = cljs.core.namespace.call(null,sym);
var name_27587 = cljs.core.name.call(null,sym);
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


var G__27588 = seq__27570;
var G__27589 = chunk__27571;
var G__27590 = count__27572;
var G__27591 = (i__27573 + (1));
seq__27570 = G__27588;
chunk__27571 = G__27589;
count__27572 = G__27590;
i__27573 = G__27591;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27570);
if(temp__5457__auto__){
var seq__27570__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27570__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__27570__$1);
var G__27592 = cljs.core.chunk_rest.call(null,seq__27570__$1);
var G__27593 = c__18782__auto__;
var G__27594 = cljs.core.count.call(null,c__18782__auto__);
var G__27595 = (0);
seq__27570 = G__27592;
chunk__27571 = G__27593;
count__27572 = G__27594;
i__27573 = G__27595;
continue;
} else {
var vec__27583 = cljs.core.first.call(null,seq__27570__$1);
var sym = cljs.core.nth.call(null,vec__27583,(0),null);
var value = cljs.core.nth.call(null,vec__27583,(1),null);
var ns_27596 = cljs.core.namespace.call(null,sym);
var name_27597 = cljs.core.name.call(null,sym);
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


var G__27598 = cljs.core.next.call(null,seq__27570__$1);
var G__27599 = null;
var G__27600 = (0);
var G__27601 = (0);
seq__27570 = G__27598;
chunk__27571 = G__27599;
count__27572 = G__27600;
i__27573 = G__27601;
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
var G__27603 = arguments.length;
switch (G__27603) {
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
var k_27608 = cljs.core.first.call(null,ks);
var vec__27604_27609 = cljs.core.conj.call(null,prefix,k_27608);
var top_27610 = cljs.core.nth.call(null,vec__27604_27609,(0),null);
var prefix_SINGLEQUOTE__27611 = vec__27604_27609;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_27608)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__27611) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_27610)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_27610)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__27611)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_27610);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__27611)),";");
}
} else {
}

var m_27612 = cljs.core.get.call(null,externs,k_27608);
if(cljs.core.empty_QMARK_.call(null,m_27612)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__27611,m_27612,top_level,known_externs);
}

var G__27613 = cljs.core.next.call(null,ks);
ks = G__27613;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
