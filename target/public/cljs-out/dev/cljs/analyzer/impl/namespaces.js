// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.analyzer.impl.namespaces');
goog.require('cljs.core');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__11195 = libspec;
var seq__11196 = cljs.core.seq.call(null,vec__11195);
var first__11197 = cljs.core.first.call(null,seq__11196);
var seq__11196__$1 = cljs.core.next.call(null,seq__11196);
var lib = first__11197;
var spec = seq__11196__$1;
var libspec__$1 = vec__11195;
var vec__11198 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__11198,(0),null);
var vec__11201 = cljs.core.nth.call(null,vec__11198,(1),null);
var seq__11202 = cljs.core.seq.call(null,vec__11201);
var first__11203 = cljs.core.first.call(null,seq__11202);
var seq__11202__$1 = cljs.core.next.call(null,seq__11202);
var _ = first__11203;
var first__11203__$1 = cljs.core.first.call(null,seq__11202__$1);
var seq__11202__$2 = cljs.core.next.call(null,seq__11202__$1);
var alias = first__11203__$1;
var post_spec = seq__11202__$2;
var post = vec__11201;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__11204 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__11204,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__11204;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__11205 = cljs.core.seq.call(null,new_as_aliases);
var chunk__11206 = null;
var count__11207 = (0);
var i__11208 = (0);
while(true){
if((i__11208 < count__11207)){
var vec__11215 = cljs.core._nth.call(null,chunk__11206,i__11208);
var alias = cljs.core.nth.call(null,vec__11215,(0),null);
var _ = cljs.core.nth.call(null,vec__11215,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11221 = seq__11205;
var G__11222 = chunk__11206;
var G__11223 = count__11207;
var G__11224 = (i__11208 + (1));
seq__11205 = G__11221;
chunk__11206 = G__11222;
count__11207 = G__11223;
i__11208 = G__11224;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__11205);
if(temp__5823__auto__){
var seq__11205__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11205__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11205__$1);
var G__11225 = cljs.core.chunk_rest.call(null,seq__11205__$1);
var G__11226 = c__5525__auto__;
var G__11227 = cljs.core.count.call(null,c__5525__auto__);
var G__11228 = (0);
seq__11205 = G__11225;
chunk__11206 = G__11226;
count__11207 = G__11227;
i__11208 = G__11228;
continue;
} else {
var vec__11218 = cljs.core.first.call(null,seq__11205__$1);
var alias = cljs.core.nth.call(null,vec__11218,(0),null);
var _ = cljs.core.nth.call(null,vec__11218,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11229 = cljs.core.next.call(null,seq__11205__$1);
var G__11230 = null;
var G__11231 = (0);
var G__11232 = (0);
seq__11205 = G__11229;
chunk__11206 = G__11230;
count__11207 = G__11231;
i__11208 = G__11232;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__11234 = arguments.length;
switch (G__11234) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (ret__$1,libspec){
var map__11235 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__11235__$1 = cljs.core.__destructure_map.call(null,map__11235);
var as_alias = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__11236 = ret__$1;
var G__11236__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__11236,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__11236);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__11236__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__11236__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__11238,p__11239){
var map__11240 = p__11238;
var map__11240__$1 = cljs.core.__destructure_map.call(null,map__11240);
var ret__$1 = map__11240__$1;
var as_aliases = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__11241 = p__11239;
var seq__11242 = cljs.core.seq.call(null,vec__11241);
var first__11243 = cljs.core.first.call(null,seq__11242);
var seq__11242__$1 = cljs.core.next.call(null,seq__11242);
var spec_key = first__11243;
var libspecs = seq__11242__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__11244 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__11244__$1 = cljs.core.__destructure_map.call(null,map__11244);
var as_aliases__$1 = cljs.core.get.call(null,map__11244__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__11244__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__11245 = ret__$1;
var G__11245__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__11245,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__11245);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__11245__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__11245__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map
