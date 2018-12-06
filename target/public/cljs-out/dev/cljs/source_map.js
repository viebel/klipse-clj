// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__12346){
var vec__12347 = p__12346;
var i = cljs.core.nth.call(null,vec__12347,(0),null);
var v = cljs.core.nth.call(null,vec__12347,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__12350 = seg;
var gcol = cljs.core.nth.call(null,vec__12350,(0),null);
var source = cljs.core.nth.call(null,vec__12350,(1),null);
var line = cljs.core.nth.call(null,vec__12350,(2),null);
var col = cljs.core.nth.call(null,vec__12350,(3),null);
var name = cljs.core.nth.call(null,vec__12350,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__12353 = seg;
var gcol = cljs.core.nth.call(null,vec__12353,(0),null);
var source = cljs.core.nth.call(null,vec__12353,(1),null);
var line = cljs.core.nth.call(null,vec__12353,(2),null);
var col = cljs.core.nth.call(null,vec__12353,(3),null);
var name = cljs.core.nth.call(null,vec__12353,(4),null);
var vec__12356 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12356,(0),null);
var rsource = cljs.core.nth.call(null,vec__12356,(1),null);
var rline = cljs.core.nth.call(null,vec__12356,(2),null);
var rcol = cljs.core.nth.call(null,vec__12356,(3),null);
var rname = cljs.core.nth.call(null,vec__12356,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3922__auto__ = source;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3922__auto__ = col;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__12359 = segmap;
var map__12359__$1 = ((((!((map__12359 == null)))?(((((map__12359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12359):map__12359);
var gcol = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12359,map__12359__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12359,map__12359__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12359,map__12359__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12359,map__12359__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12359,map__12359__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12359,map__12359__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__12362 = arguments.length;
switch (G__12362) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__12363 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12367 = cljs.core.next.call(null,segs__$1);
var G__12368 = nrelseg;
var G__12369 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12367;
relseg__$1 = G__12368;
result__$1 = G__12369;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12363,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12363,(1),null);
var G__12370 = (gline + (1));
var G__12371 = cljs.core.next.call(null,lines__$1);
var G__12372 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12373 = result__$1;
gline = G__12370;
lines__$1 = G__12371;
relseg = G__12372;
result = G__12373;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__12375 = segmap;
var map__12375__$1 = ((((!((map__12375 == null)))?(((((map__12375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12375):map__12375);
var gcol = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12375,map__12375__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12375,map__12375__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12374_SHARP_){
return cljs.core.conj.call(null,p1__12374_SHARP_,d__$1);
});})(map__12375,map__12375__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12375,map__12375__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__12378 = arguments.length;
switch (G__12378) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__12379 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12383 = cljs.core.next.call(null,segs__$1);
var G__12384 = nrelseg;
var G__12385 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12383;
relseg__$1 = G__12384;
result__$1 = G__12385;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12379,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12379,(1),null);
var G__12386 = (gline + (1));
var G__12387 = cljs.core.next.call(null,lines__$1);
var G__12388 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12389 = result__$1;
gline = G__12386;
lines__$1 = G__12387;
relseg = G__12388;
result = G__12389;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__12390){
var vec__12391 = p__12390;
var _ = cljs.core.nth.call(null,vec__12391,(0),null);
var source = cljs.core.nth.call(null,vec__12391,(1),null);
var line = cljs.core.nth.call(null,vec__12391,(2),null);
var col = cljs.core.nth.call(null,vec__12391,(3),null);
var name = cljs.core.nth.call(null,vec__12391,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12394){
var vec__12395 = p__12394;
var gcol = cljs.core.nth.call(null,vec__12395,(0),null);
var sidx = cljs.core.nth.call(null,vec__12395,(1),null);
var line = cljs.core.nth.call(null,vec__12395,(2),null);
var col = cljs.core.nth.call(null,vec__12395,(3),null);
var name = cljs.core.nth.call(null,vec__12395,(4),null);
var seg = vec__12395;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12395,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12398){
var vec__12399 = p__12398;
var _ = cljs.core.nth.call(null,vec__12399,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12399,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12399,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12399,(3),null);
var lname = cljs.core.nth.call(null,vec__12399,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12395,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__12405 = cljs.core.seq.call(null,infos);
var chunk__12406 = null;
var count__12407 = (0);
var i__12408 = (0);
while(true){
if((i__12408 < count__12407)){
var info = cljs.core._nth.call(null,chunk__12406,i__12408);
var segv_12487 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12488 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12489 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12488 > (lc_12489 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12405,chunk__12406,count__12407,i__12408,segv_12487,gline_12488,lc_12489,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12488 - (lc_12489 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12487], null));
});})(seq__12405,chunk__12406,count__12407,i__12408,segv_12487,gline_12488,lc_12489,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12405,chunk__12406,count__12407,i__12408,segv_12487,gline_12488,lc_12489,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12488], null),cljs.core.conj,segv_12487);
});})(seq__12405,chunk__12406,count__12407,i__12408,segv_12487,gline_12488,lc_12489,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__12490 = seq__12405;
var G__12491 = chunk__12406;
var G__12492 = count__12407;
var G__12493 = (i__12408 + (1));
seq__12405 = G__12490;
chunk__12406 = G__12491;
count__12407 = G__12492;
i__12408 = G__12493;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12405);
if(temp__5457__auto__){
var seq__12405__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12405__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__12405__$1);
var G__12494 = cljs.core.chunk_rest.call(null,seq__12405__$1);
var G__12495 = c__4319__auto__;
var G__12496 = cljs.core.count.call(null,c__4319__auto__);
var G__12497 = (0);
seq__12405 = G__12494;
chunk__12406 = G__12495;
count__12407 = G__12496;
i__12408 = G__12497;
continue;
} else {
var info = cljs.core.first.call(null,seq__12405__$1);
var segv_12498 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12499 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12500 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12499 > (lc_12500 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12405,chunk__12406,count__12407,i__12408,segv_12498,gline_12499,lc_12500,info,seq__12405__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12499 - (lc_12500 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12498], null));
});})(seq__12405,chunk__12406,count__12407,i__12408,segv_12498,gline_12499,lc_12500,info,seq__12405__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12405,chunk__12406,count__12407,i__12408,segv_12498,gline_12499,lc_12500,info,seq__12405__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12499], null),cljs.core.conj,segv_12498);
});})(seq__12405,chunk__12406,count__12407,i__12408,segv_12498,gline_12499,lc_12500,info,seq__12405__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__12501 = cljs.core.next.call(null,seq__12405__$1);
var G__12502 = null;
var G__12503 = (0);
var G__12504 = (0);
seq__12405 = G__12501;
chunk__12406 = G__12502;
count__12407 = G__12503;
i__12408 = G__12504;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__12409_12505 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12410_12506 = null;
var count__12411_12507 = (0);
var i__12412_12508 = (0);
while(true){
if((i__12412_12508 < count__12411_12507)){
var vec__12413_12509 = cljs.core._nth.call(null,chunk__12410_12506,i__12412_12508);
var source_idx_12510 = cljs.core.nth.call(null,vec__12413_12509,(0),null);
var vec__12416_12511 = cljs.core.nth.call(null,vec__12413_12509,(1),null);
var __12512 = cljs.core.nth.call(null,vec__12416_12511,(0),null);
var lines_12513__$1 = cljs.core.nth.call(null,vec__12416_12511,(1),null);
var seq__12419_12514 = cljs.core.seq.call(null,lines_12513__$1);
var chunk__12420_12515 = null;
var count__12421_12516 = (0);
var i__12422_12517 = (0);
while(true){
if((i__12422_12517 < count__12421_12516)){
var vec__12423_12518 = cljs.core._nth.call(null,chunk__12420_12515,i__12422_12517);
var line_12519 = cljs.core.nth.call(null,vec__12423_12518,(0),null);
var cols_12520 = cljs.core.nth.call(null,vec__12423_12518,(1),null);
var seq__12426_12521 = cljs.core.seq.call(null,cols_12520);
var chunk__12427_12522 = null;
var count__12428_12523 = (0);
var i__12429_12524 = (0);
while(true){
if((i__12429_12524 < count__12428_12523)){
var vec__12430_12525 = cljs.core._nth.call(null,chunk__12427_12522,i__12429_12524);
var col_12526 = cljs.core.nth.call(null,vec__12430_12525,(0),null);
var infos_12527 = cljs.core.nth.call(null,vec__12430_12525,(1),null);
encode_cols.call(null,infos_12527,source_idx_12510,line_12519,col_12526);


var G__12528 = seq__12426_12521;
var G__12529 = chunk__12427_12522;
var G__12530 = count__12428_12523;
var G__12531 = (i__12429_12524 + (1));
seq__12426_12521 = G__12528;
chunk__12427_12522 = G__12529;
count__12428_12523 = G__12530;
i__12429_12524 = G__12531;
continue;
} else {
var temp__5457__auto___12532 = cljs.core.seq.call(null,seq__12426_12521);
if(temp__5457__auto___12532){
var seq__12426_12533__$1 = temp__5457__auto___12532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12426_12533__$1)){
var c__4319__auto___12534 = cljs.core.chunk_first.call(null,seq__12426_12533__$1);
var G__12535 = cljs.core.chunk_rest.call(null,seq__12426_12533__$1);
var G__12536 = c__4319__auto___12534;
var G__12537 = cljs.core.count.call(null,c__4319__auto___12534);
var G__12538 = (0);
seq__12426_12521 = G__12535;
chunk__12427_12522 = G__12536;
count__12428_12523 = G__12537;
i__12429_12524 = G__12538;
continue;
} else {
var vec__12433_12539 = cljs.core.first.call(null,seq__12426_12533__$1);
var col_12540 = cljs.core.nth.call(null,vec__12433_12539,(0),null);
var infos_12541 = cljs.core.nth.call(null,vec__12433_12539,(1),null);
encode_cols.call(null,infos_12541,source_idx_12510,line_12519,col_12540);


var G__12542 = cljs.core.next.call(null,seq__12426_12533__$1);
var G__12543 = null;
var G__12544 = (0);
var G__12545 = (0);
seq__12426_12521 = G__12542;
chunk__12427_12522 = G__12543;
count__12428_12523 = G__12544;
i__12429_12524 = G__12545;
continue;
}
} else {
}
}
break;
}


var G__12546 = seq__12419_12514;
var G__12547 = chunk__12420_12515;
var G__12548 = count__12421_12516;
var G__12549 = (i__12422_12517 + (1));
seq__12419_12514 = G__12546;
chunk__12420_12515 = G__12547;
count__12421_12516 = G__12548;
i__12422_12517 = G__12549;
continue;
} else {
var temp__5457__auto___12550 = cljs.core.seq.call(null,seq__12419_12514);
if(temp__5457__auto___12550){
var seq__12419_12551__$1 = temp__5457__auto___12550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12419_12551__$1)){
var c__4319__auto___12552 = cljs.core.chunk_first.call(null,seq__12419_12551__$1);
var G__12553 = cljs.core.chunk_rest.call(null,seq__12419_12551__$1);
var G__12554 = c__4319__auto___12552;
var G__12555 = cljs.core.count.call(null,c__4319__auto___12552);
var G__12556 = (0);
seq__12419_12514 = G__12553;
chunk__12420_12515 = G__12554;
count__12421_12516 = G__12555;
i__12422_12517 = G__12556;
continue;
} else {
var vec__12436_12557 = cljs.core.first.call(null,seq__12419_12551__$1);
var line_12558 = cljs.core.nth.call(null,vec__12436_12557,(0),null);
var cols_12559 = cljs.core.nth.call(null,vec__12436_12557,(1),null);
var seq__12439_12560 = cljs.core.seq.call(null,cols_12559);
var chunk__12440_12561 = null;
var count__12441_12562 = (0);
var i__12442_12563 = (0);
while(true){
if((i__12442_12563 < count__12441_12562)){
var vec__12443_12564 = cljs.core._nth.call(null,chunk__12440_12561,i__12442_12563);
var col_12565 = cljs.core.nth.call(null,vec__12443_12564,(0),null);
var infos_12566 = cljs.core.nth.call(null,vec__12443_12564,(1),null);
encode_cols.call(null,infos_12566,source_idx_12510,line_12558,col_12565);


var G__12567 = seq__12439_12560;
var G__12568 = chunk__12440_12561;
var G__12569 = count__12441_12562;
var G__12570 = (i__12442_12563 + (1));
seq__12439_12560 = G__12567;
chunk__12440_12561 = G__12568;
count__12441_12562 = G__12569;
i__12442_12563 = G__12570;
continue;
} else {
var temp__5457__auto___12571__$1 = cljs.core.seq.call(null,seq__12439_12560);
if(temp__5457__auto___12571__$1){
var seq__12439_12572__$1 = temp__5457__auto___12571__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12439_12572__$1)){
var c__4319__auto___12573 = cljs.core.chunk_first.call(null,seq__12439_12572__$1);
var G__12574 = cljs.core.chunk_rest.call(null,seq__12439_12572__$1);
var G__12575 = c__4319__auto___12573;
var G__12576 = cljs.core.count.call(null,c__4319__auto___12573);
var G__12577 = (0);
seq__12439_12560 = G__12574;
chunk__12440_12561 = G__12575;
count__12441_12562 = G__12576;
i__12442_12563 = G__12577;
continue;
} else {
var vec__12446_12578 = cljs.core.first.call(null,seq__12439_12572__$1);
var col_12579 = cljs.core.nth.call(null,vec__12446_12578,(0),null);
var infos_12580 = cljs.core.nth.call(null,vec__12446_12578,(1),null);
encode_cols.call(null,infos_12580,source_idx_12510,line_12558,col_12579);


var G__12581 = cljs.core.next.call(null,seq__12439_12572__$1);
var G__12582 = null;
var G__12583 = (0);
var G__12584 = (0);
seq__12439_12560 = G__12581;
chunk__12440_12561 = G__12582;
count__12441_12562 = G__12583;
i__12442_12563 = G__12584;
continue;
}
} else {
}
}
break;
}


var G__12585 = cljs.core.next.call(null,seq__12419_12551__$1);
var G__12586 = null;
var G__12587 = (0);
var G__12588 = (0);
seq__12419_12514 = G__12585;
chunk__12420_12515 = G__12586;
count__12421_12516 = G__12587;
i__12422_12517 = G__12588;
continue;
}
} else {
}
}
break;
}


var G__12589 = seq__12409_12505;
var G__12590 = chunk__12410_12506;
var G__12591 = count__12411_12507;
var G__12592 = (i__12412_12508 + (1));
seq__12409_12505 = G__12589;
chunk__12410_12506 = G__12590;
count__12411_12507 = G__12591;
i__12412_12508 = G__12592;
continue;
} else {
var temp__5457__auto___12593 = cljs.core.seq.call(null,seq__12409_12505);
if(temp__5457__auto___12593){
var seq__12409_12594__$1 = temp__5457__auto___12593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12409_12594__$1)){
var c__4319__auto___12595 = cljs.core.chunk_first.call(null,seq__12409_12594__$1);
var G__12596 = cljs.core.chunk_rest.call(null,seq__12409_12594__$1);
var G__12597 = c__4319__auto___12595;
var G__12598 = cljs.core.count.call(null,c__4319__auto___12595);
var G__12599 = (0);
seq__12409_12505 = G__12596;
chunk__12410_12506 = G__12597;
count__12411_12507 = G__12598;
i__12412_12508 = G__12599;
continue;
} else {
var vec__12449_12600 = cljs.core.first.call(null,seq__12409_12594__$1);
var source_idx_12601 = cljs.core.nth.call(null,vec__12449_12600,(0),null);
var vec__12452_12602 = cljs.core.nth.call(null,vec__12449_12600,(1),null);
var __12603 = cljs.core.nth.call(null,vec__12452_12602,(0),null);
var lines_12604__$1 = cljs.core.nth.call(null,vec__12452_12602,(1),null);
var seq__12455_12605 = cljs.core.seq.call(null,lines_12604__$1);
var chunk__12456_12606 = null;
var count__12457_12607 = (0);
var i__12458_12608 = (0);
while(true){
if((i__12458_12608 < count__12457_12607)){
var vec__12459_12609 = cljs.core._nth.call(null,chunk__12456_12606,i__12458_12608);
var line_12610 = cljs.core.nth.call(null,vec__12459_12609,(0),null);
var cols_12611 = cljs.core.nth.call(null,vec__12459_12609,(1),null);
var seq__12462_12612 = cljs.core.seq.call(null,cols_12611);
var chunk__12463_12613 = null;
var count__12464_12614 = (0);
var i__12465_12615 = (0);
while(true){
if((i__12465_12615 < count__12464_12614)){
var vec__12466_12616 = cljs.core._nth.call(null,chunk__12463_12613,i__12465_12615);
var col_12617 = cljs.core.nth.call(null,vec__12466_12616,(0),null);
var infos_12618 = cljs.core.nth.call(null,vec__12466_12616,(1),null);
encode_cols.call(null,infos_12618,source_idx_12601,line_12610,col_12617);


var G__12619 = seq__12462_12612;
var G__12620 = chunk__12463_12613;
var G__12621 = count__12464_12614;
var G__12622 = (i__12465_12615 + (1));
seq__12462_12612 = G__12619;
chunk__12463_12613 = G__12620;
count__12464_12614 = G__12621;
i__12465_12615 = G__12622;
continue;
} else {
var temp__5457__auto___12623__$1 = cljs.core.seq.call(null,seq__12462_12612);
if(temp__5457__auto___12623__$1){
var seq__12462_12624__$1 = temp__5457__auto___12623__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12462_12624__$1)){
var c__4319__auto___12625 = cljs.core.chunk_first.call(null,seq__12462_12624__$1);
var G__12626 = cljs.core.chunk_rest.call(null,seq__12462_12624__$1);
var G__12627 = c__4319__auto___12625;
var G__12628 = cljs.core.count.call(null,c__4319__auto___12625);
var G__12629 = (0);
seq__12462_12612 = G__12626;
chunk__12463_12613 = G__12627;
count__12464_12614 = G__12628;
i__12465_12615 = G__12629;
continue;
} else {
var vec__12469_12630 = cljs.core.first.call(null,seq__12462_12624__$1);
var col_12631 = cljs.core.nth.call(null,vec__12469_12630,(0),null);
var infos_12632 = cljs.core.nth.call(null,vec__12469_12630,(1),null);
encode_cols.call(null,infos_12632,source_idx_12601,line_12610,col_12631);


var G__12633 = cljs.core.next.call(null,seq__12462_12624__$1);
var G__12634 = null;
var G__12635 = (0);
var G__12636 = (0);
seq__12462_12612 = G__12633;
chunk__12463_12613 = G__12634;
count__12464_12614 = G__12635;
i__12465_12615 = G__12636;
continue;
}
} else {
}
}
break;
}


var G__12637 = seq__12455_12605;
var G__12638 = chunk__12456_12606;
var G__12639 = count__12457_12607;
var G__12640 = (i__12458_12608 + (1));
seq__12455_12605 = G__12637;
chunk__12456_12606 = G__12638;
count__12457_12607 = G__12639;
i__12458_12608 = G__12640;
continue;
} else {
var temp__5457__auto___12641__$1 = cljs.core.seq.call(null,seq__12455_12605);
if(temp__5457__auto___12641__$1){
var seq__12455_12642__$1 = temp__5457__auto___12641__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12455_12642__$1)){
var c__4319__auto___12643 = cljs.core.chunk_first.call(null,seq__12455_12642__$1);
var G__12644 = cljs.core.chunk_rest.call(null,seq__12455_12642__$1);
var G__12645 = c__4319__auto___12643;
var G__12646 = cljs.core.count.call(null,c__4319__auto___12643);
var G__12647 = (0);
seq__12455_12605 = G__12644;
chunk__12456_12606 = G__12645;
count__12457_12607 = G__12646;
i__12458_12608 = G__12647;
continue;
} else {
var vec__12472_12648 = cljs.core.first.call(null,seq__12455_12642__$1);
var line_12649 = cljs.core.nth.call(null,vec__12472_12648,(0),null);
var cols_12650 = cljs.core.nth.call(null,vec__12472_12648,(1),null);
var seq__12475_12651 = cljs.core.seq.call(null,cols_12650);
var chunk__12476_12652 = null;
var count__12477_12653 = (0);
var i__12478_12654 = (0);
while(true){
if((i__12478_12654 < count__12477_12653)){
var vec__12479_12655 = cljs.core._nth.call(null,chunk__12476_12652,i__12478_12654);
var col_12656 = cljs.core.nth.call(null,vec__12479_12655,(0),null);
var infos_12657 = cljs.core.nth.call(null,vec__12479_12655,(1),null);
encode_cols.call(null,infos_12657,source_idx_12601,line_12649,col_12656);


var G__12658 = seq__12475_12651;
var G__12659 = chunk__12476_12652;
var G__12660 = count__12477_12653;
var G__12661 = (i__12478_12654 + (1));
seq__12475_12651 = G__12658;
chunk__12476_12652 = G__12659;
count__12477_12653 = G__12660;
i__12478_12654 = G__12661;
continue;
} else {
var temp__5457__auto___12662__$2 = cljs.core.seq.call(null,seq__12475_12651);
if(temp__5457__auto___12662__$2){
var seq__12475_12663__$1 = temp__5457__auto___12662__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12475_12663__$1)){
var c__4319__auto___12664 = cljs.core.chunk_first.call(null,seq__12475_12663__$1);
var G__12665 = cljs.core.chunk_rest.call(null,seq__12475_12663__$1);
var G__12666 = c__4319__auto___12664;
var G__12667 = cljs.core.count.call(null,c__4319__auto___12664);
var G__12668 = (0);
seq__12475_12651 = G__12665;
chunk__12476_12652 = G__12666;
count__12477_12653 = G__12667;
i__12478_12654 = G__12668;
continue;
} else {
var vec__12482_12669 = cljs.core.first.call(null,seq__12475_12663__$1);
var col_12670 = cljs.core.nth.call(null,vec__12482_12669,(0),null);
var infos_12671 = cljs.core.nth.call(null,vec__12482_12669,(1),null);
encode_cols.call(null,infos_12671,source_idx_12601,line_12649,col_12670);


var G__12672 = cljs.core.next.call(null,seq__12475_12663__$1);
var G__12673 = null;
var G__12674 = (0);
var G__12675 = (0);
seq__12475_12651 = G__12672;
chunk__12476_12652 = G__12673;
count__12477_12653 = G__12674;
i__12478_12654 = G__12675;
continue;
}
} else {
}
}
break;
}


var G__12676 = cljs.core.next.call(null,seq__12455_12642__$1);
var G__12677 = null;
var G__12678 = (0);
var G__12679 = (0);
seq__12455_12605 = G__12676;
chunk__12456_12606 = G__12677;
count__12457_12607 = G__12678;
i__12458_12608 = G__12679;
continue;
}
} else {
}
}
break;
}


var G__12680 = cljs.core.next.call(null,seq__12409_12594__$1);
var G__12681 = null;
var G__12682 = (0);
var G__12683 = (0);
seq__12409_12505 = G__12680;
chunk__12410_12506 = G__12681;
count__12411_12507 = G__12682;
i__12412_12508 = G__12683;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12485 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12402_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12402_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12403_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12403_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12404_SHARP_){
return clojure.string.join.call(null,",",p1__12404_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12486 = G__12485;
goog.object.set(G__12486,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12486;
} else {
return G__12485;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__12684 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12684,(0),null);
var col_map = cljs.core.nth.call(null,vec__12684,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12687 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12687,(0),null);
var infos = cljs.core.nth.call(null,vec__12687,(1),null);
var G__12693 = cljs.core.next.call(null,col_map_seq);
var G__12694 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12687,col,infos,vec__12684,line,col_map){
return (function (v,p__12690){
var map__12691 = p__12690;
var map__12691__$1 = ((((!((map__12691 == null)))?(((((map__12691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12691):map__12691);
var gline = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12687,col,infos,vec__12684,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12693;
new_cols = G__12694;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12695 = cljs.core.next.call(null,line_map_seq);
var G__12696 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12695;
new_lines = G__12696;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__12697_12759 = cljs.core.seq.call(null,reverse_map);
var chunk__12698_12760 = null;
var count__12699_12761 = (0);
var i__12700_12762 = (0);
while(true){
if((i__12700_12762 < count__12699_12761)){
var vec__12701_12763 = cljs.core._nth.call(null,chunk__12698_12760,i__12700_12762);
var line_12764 = cljs.core.nth.call(null,vec__12701_12763,(0),null);
var columns_12765 = cljs.core.nth.call(null,vec__12701_12763,(1),null);
var seq__12704_12766 = cljs.core.seq.call(null,columns_12765);
var chunk__12705_12767 = null;
var count__12706_12768 = (0);
var i__12707_12769 = (0);
while(true){
if((i__12707_12769 < count__12706_12768)){
var vec__12708_12770 = cljs.core._nth.call(null,chunk__12705_12767,i__12707_12769);
var column_12771 = cljs.core.nth.call(null,vec__12708_12770,(0),null);
var column_info_12772 = cljs.core.nth.call(null,vec__12708_12770,(1),null);
var seq__12711_12773 = cljs.core.seq.call(null,column_info_12772);
var chunk__12712_12774 = null;
var count__12713_12775 = (0);
var i__12714_12776 = (0);
while(true){
if((i__12714_12776 < count__12713_12775)){
var map__12715_12777 = cljs.core._nth.call(null,chunk__12712_12774,i__12714_12776);
var map__12715_12778__$1 = ((((!((map__12715_12777 == null)))?(((((map__12715_12777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12715_12777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12715_12777):map__12715_12777);
var gline_12779 = cljs.core.get.call(null,map__12715_12778__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12780 = cljs.core.get.call(null,map__12715_12778__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12781 = cljs.core.get.call(null,map__12715_12778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12779], null),cljs.core.fnil.call(null,((function (seq__12711_12773,chunk__12712_12774,count__12713_12775,i__12714_12776,seq__12704_12766,chunk__12705_12767,count__12706_12768,i__12707_12769,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12715_12777,map__12715_12778__$1,gline_12779,gcol_12780,name_12781,vec__12708_12770,column_12771,column_info_12772,vec__12701_12763,line_12764,columns_12765,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12780], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12764,new cljs.core.Keyword(null,"col","col",-1959363084),column_12771,new cljs.core.Keyword(null,"name","name",1843675177),name_12781], null));
});})(seq__12711_12773,chunk__12712_12774,count__12713_12775,i__12714_12776,seq__12704_12766,chunk__12705_12767,count__12706_12768,i__12707_12769,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12715_12777,map__12715_12778__$1,gline_12779,gcol_12780,name_12781,vec__12708_12770,column_12771,column_info_12772,vec__12701_12763,line_12764,columns_12765,inverted))
,cljs.core.sorted_map.call(null)));


var G__12782 = seq__12711_12773;
var G__12783 = chunk__12712_12774;
var G__12784 = count__12713_12775;
var G__12785 = (i__12714_12776 + (1));
seq__12711_12773 = G__12782;
chunk__12712_12774 = G__12783;
count__12713_12775 = G__12784;
i__12714_12776 = G__12785;
continue;
} else {
var temp__5457__auto___12786 = cljs.core.seq.call(null,seq__12711_12773);
if(temp__5457__auto___12786){
var seq__12711_12787__$1 = temp__5457__auto___12786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12711_12787__$1)){
var c__4319__auto___12788 = cljs.core.chunk_first.call(null,seq__12711_12787__$1);
var G__12789 = cljs.core.chunk_rest.call(null,seq__12711_12787__$1);
var G__12790 = c__4319__auto___12788;
var G__12791 = cljs.core.count.call(null,c__4319__auto___12788);
var G__12792 = (0);
seq__12711_12773 = G__12789;
chunk__12712_12774 = G__12790;
count__12713_12775 = G__12791;
i__12714_12776 = G__12792;
continue;
} else {
var map__12717_12793 = cljs.core.first.call(null,seq__12711_12787__$1);
var map__12717_12794__$1 = ((((!((map__12717_12793 == null)))?(((((map__12717_12793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12717_12793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12717_12793):map__12717_12793);
var gline_12795 = cljs.core.get.call(null,map__12717_12794__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12796 = cljs.core.get.call(null,map__12717_12794__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12797 = cljs.core.get.call(null,map__12717_12794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12795], null),cljs.core.fnil.call(null,((function (seq__12711_12773,chunk__12712_12774,count__12713_12775,i__12714_12776,seq__12704_12766,chunk__12705_12767,count__12706_12768,i__12707_12769,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12717_12793,map__12717_12794__$1,gline_12795,gcol_12796,name_12797,seq__12711_12787__$1,temp__5457__auto___12786,vec__12708_12770,column_12771,column_info_12772,vec__12701_12763,line_12764,columns_12765,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12796], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12764,new cljs.core.Keyword(null,"col","col",-1959363084),column_12771,new cljs.core.Keyword(null,"name","name",1843675177),name_12797], null));
});})(seq__12711_12773,chunk__12712_12774,count__12713_12775,i__12714_12776,seq__12704_12766,chunk__12705_12767,count__12706_12768,i__12707_12769,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12717_12793,map__12717_12794__$1,gline_12795,gcol_12796,name_12797,seq__12711_12787__$1,temp__5457__auto___12786,vec__12708_12770,column_12771,column_info_12772,vec__12701_12763,line_12764,columns_12765,inverted))
,cljs.core.sorted_map.call(null)));


var G__12798 = cljs.core.next.call(null,seq__12711_12787__$1);
var G__12799 = null;
var G__12800 = (0);
var G__12801 = (0);
seq__12711_12773 = G__12798;
chunk__12712_12774 = G__12799;
count__12713_12775 = G__12800;
i__12714_12776 = G__12801;
continue;
}
} else {
}
}
break;
}


var G__12802 = seq__12704_12766;
var G__12803 = chunk__12705_12767;
var G__12804 = count__12706_12768;
var G__12805 = (i__12707_12769 + (1));
seq__12704_12766 = G__12802;
chunk__12705_12767 = G__12803;
count__12706_12768 = G__12804;
i__12707_12769 = G__12805;
continue;
} else {
var temp__5457__auto___12806 = cljs.core.seq.call(null,seq__12704_12766);
if(temp__5457__auto___12806){
var seq__12704_12807__$1 = temp__5457__auto___12806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12704_12807__$1)){
var c__4319__auto___12808 = cljs.core.chunk_first.call(null,seq__12704_12807__$1);
var G__12809 = cljs.core.chunk_rest.call(null,seq__12704_12807__$1);
var G__12810 = c__4319__auto___12808;
var G__12811 = cljs.core.count.call(null,c__4319__auto___12808);
var G__12812 = (0);
seq__12704_12766 = G__12809;
chunk__12705_12767 = G__12810;
count__12706_12768 = G__12811;
i__12707_12769 = G__12812;
continue;
} else {
var vec__12719_12813 = cljs.core.first.call(null,seq__12704_12807__$1);
var column_12814 = cljs.core.nth.call(null,vec__12719_12813,(0),null);
var column_info_12815 = cljs.core.nth.call(null,vec__12719_12813,(1),null);
var seq__12722_12816 = cljs.core.seq.call(null,column_info_12815);
var chunk__12723_12817 = null;
var count__12724_12818 = (0);
var i__12725_12819 = (0);
while(true){
if((i__12725_12819 < count__12724_12818)){
var map__12726_12820 = cljs.core._nth.call(null,chunk__12723_12817,i__12725_12819);
var map__12726_12821__$1 = ((((!((map__12726_12820 == null)))?(((((map__12726_12820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12726_12820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12726_12820):map__12726_12820);
var gline_12822 = cljs.core.get.call(null,map__12726_12821__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12823 = cljs.core.get.call(null,map__12726_12821__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12824 = cljs.core.get.call(null,map__12726_12821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12822], null),cljs.core.fnil.call(null,((function (seq__12722_12816,chunk__12723_12817,count__12724_12818,i__12725_12819,seq__12704_12766,chunk__12705_12767,count__12706_12768,i__12707_12769,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12726_12820,map__12726_12821__$1,gline_12822,gcol_12823,name_12824,vec__12719_12813,column_12814,column_info_12815,seq__12704_12807__$1,temp__5457__auto___12806,vec__12701_12763,line_12764,columns_12765,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12823], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12764,new cljs.core.Keyword(null,"col","col",-1959363084),column_12814,new cljs.core.Keyword(null,"name","name",1843675177),name_12824], null));
});})(seq__12722_12816,chunk__12723_12817,count__12724_12818,i__12725_12819,seq__12704_12766,chunk__12705_12767,count__12706_12768,i__12707_12769,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12726_12820,map__12726_12821__$1,gline_12822,gcol_12823,name_12824,vec__12719_12813,column_12814,column_info_12815,seq__12704_12807__$1,temp__5457__auto___12806,vec__12701_12763,line_12764,columns_12765,inverted))
,cljs.core.sorted_map.call(null)));


var G__12825 = seq__12722_12816;
var G__12826 = chunk__12723_12817;
var G__12827 = count__12724_12818;
var G__12828 = (i__12725_12819 + (1));
seq__12722_12816 = G__12825;
chunk__12723_12817 = G__12826;
count__12724_12818 = G__12827;
i__12725_12819 = G__12828;
continue;
} else {
var temp__5457__auto___12829__$1 = cljs.core.seq.call(null,seq__12722_12816);
if(temp__5457__auto___12829__$1){
var seq__12722_12830__$1 = temp__5457__auto___12829__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12722_12830__$1)){
var c__4319__auto___12831 = cljs.core.chunk_first.call(null,seq__12722_12830__$1);
var G__12832 = cljs.core.chunk_rest.call(null,seq__12722_12830__$1);
var G__12833 = c__4319__auto___12831;
var G__12834 = cljs.core.count.call(null,c__4319__auto___12831);
var G__12835 = (0);
seq__12722_12816 = G__12832;
chunk__12723_12817 = G__12833;
count__12724_12818 = G__12834;
i__12725_12819 = G__12835;
continue;
} else {
var map__12728_12836 = cljs.core.first.call(null,seq__12722_12830__$1);
var map__12728_12837__$1 = ((((!((map__12728_12836 == null)))?(((((map__12728_12836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12728_12836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12728_12836):map__12728_12836);
var gline_12838 = cljs.core.get.call(null,map__12728_12837__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12839 = cljs.core.get.call(null,map__12728_12837__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12840 = cljs.core.get.call(null,map__12728_12837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12838], null),cljs.core.fnil.call(null,((function (seq__12722_12816,chunk__12723_12817,count__12724_12818,i__12725_12819,seq__12704_12766,chunk__12705_12767,count__12706_12768,i__12707_12769,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12728_12836,map__12728_12837__$1,gline_12838,gcol_12839,name_12840,seq__12722_12830__$1,temp__5457__auto___12829__$1,vec__12719_12813,column_12814,column_info_12815,seq__12704_12807__$1,temp__5457__auto___12806,vec__12701_12763,line_12764,columns_12765,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12839], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12764,new cljs.core.Keyword(null,"col","col",-1959363084),column_12814,new cljs.core.Keyword(null,"name","name",1843675177),name_12840], null));
});})(seq__12722_12816,chunk__12723_12817,count__12724_12818,i__12725_12819,seq__12704_12766,chunk__12705_12767,count__12706_12768,i__12707_12769,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12728_12836,map__12728_12837__$1,gline_12838,gcol_12839,name_12840,seq__12722_12830__$1,temp__5457__auto___12829__$1,vec__12719_12813,column_12814,column_info_12815,seq__12704_12807__$1,temp__5457__auto___12806,vec__12701_12763,line_12764,columns_12765,inverted))
,cljs.core.sorted_map.call(null)));


var G__12841 = cljs.core.next.call(null,seq__12722_12830__$1);
var G__12842 = null;
var G__12843 = (0);
var G__12844 = (0);
seq__12722_12816 = G__12841;
chunk__12723_12817 = G__12842;
count__12724_12818 = G__12843;
i__12725_12819 = G__12844;
continue;
}
} else {
}
}
break;
}


var G__12845 = cljs.core.next.call(null,seq__12704_12807__$1);
var G__12846 = null;
var G__12847 = (0);
var G__12848 = (0);
seq__12704_12766 = G__12845;
chunk__12705_12767 = G__12846;
count__12706_12768 = G__12847;
i__12707_12769 = G__12848;
continue;
}
} else {
}
}
break;
}


var G__12849 = seq__12697_12759;
var G__12850 = chunk__12698_12760;
var G__12851 = count__12699_12761;
var G__12852 = (i__12700_12762 + (1));
seq__12697_12759 = G__12849;
chunk__12698_12760 = G__12850;
count__12699_12761 = G__12851;
i__12700_12762 = G__12852;
continue;
} else {
var temp__5457__auto___12853 = cljs.core.seq.call(null,seq__12697_12759);
if(temp__5457__auto___12853){
var seq__12697_12854__$1 = temp__5457__auto___12853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12697_12854__$1)){
var c__4319__auto___12855 = cljs.core.chunk_first.call(null,seq__12697_12854__$1);
var G__12856 = cljs.core.chunk_rest.call(null,seq__12697_12854__$1);
var G__12857 = c__4319__auto___12855;
var G__12858 = cljs.core.count.call(null,c__4319__auto___12855);
var G__12859 = (0);
seq__12697_12759 = G__12856;
chunk__12698_12760 = G__12857;
count__12699_12761 = G__12858;
i__12700_12762 = G__12859;
continue;
} else {
var vec__12730_12860 = cljs.core.first.call(null,seq__12697_12854__$1);
var line_12861 = cljs.core.nth.call(null,vec__12730_12860,(0),null);
var columns_12862 = cljs.core.nth.call(null,vec__12730_12860,(1),null);
var seq__12733_12863 = cljs.core.seq.call(null,columns_12862);
var chunk__12734_12864 = null;
var count__12735_12865 = (0);
var i__12736_12866 = (0);
while(true){
if((i__12736_12866 < count__12735_12865)){
var vec__12737_12867 = cljs.core._nth.call(null,chunk__12734_12864,i__12736_12866);
var column_12868 = cljs.core.nth.call(null,vec__12737_12867,(0),null);
var column_info_12869 = cljs.core.nth.call(null,vec__12737_12867,(1),null);
var seq__12740_12870 = cljs.core.seq.call(null,column_info_12869);
var chunk__12741_12871 = null;
var count__12742_12872 = (0);
var i__12743_12873 = (0);
while(true){
if((i__12743_12873 < count__12742_12872)){
var map__12744_12874 = cljs.core._nth.call(null,chunk__12741_12871,i__12743_12873);
var map__12744_12875__$1 = ((((!((map__12744_12874 == null)))?(((((map__12744_12874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12744_12874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12744_12874):map__12744_12874);
var gline_12876 = cljs.core.get.call(null,map__12744_12875__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12877 = cljs.core.get.call(null,map__12744_12875__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12878 = cljs.core.get.call(null,map__12744_12875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12876], null),cljs.core.fnil.call(null,((function (seq__12740_12870,chunk__12741_12871,count__12742_12872,i__12743_12873,seq__12733_12863,chunk__12734_12864,count__12735_12865,i__12736_12866,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12744_12874,map__12744_12875__$1,gline_12876,gcol_12877,name_12878,vec__12737_12867,column_12868,column_info_12869,vec__12730_12860,line_12861,columns_12862,seq__12697_12854__$1,temp__5457__auto___12853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12877], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12861,new cljs.core.Keyword(null,"col","col",-1959363084),column_12868,new cljs.core.Keyword(null,"name","name",1843675177),name_12878], null));
});})(seq__12740_12870,chunk__12741_12871,count__12742_12872,i__12743_12873,seq__12733_12863,chunk__12734_12864,count__12735_12865,i__12736_12866,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12744_12874,map__12744_12875__$1,gline_12876,gcol_12877,name_12878,vec__12737_12867,column_12868,column_info_12869,vec__12730_12860,line_12861,columns_12862,seq__12697_12854__$1,temp__5457__auto___12853,inverted))
,cljs.core.sorted_map.call(null)));


var G__12879 = seq__12740_12870;
var G__12880 = chunk__12741_12871;
var G__12881 = count__12742_12872;
var G__12882 = (i__12743_12873 + (1));
seq__12740_12870 = G__12879;
chunk__12741_12871 = G__12880;
count__12742_12872 = G__12881;
i__12743_12873 = G__12882;
continue;
} else {
var temp__5457__auto___12883__$1 = cljs.core.seq.call(null,seq__12740_12870);
if(temp__5457__auto___12883__$1){
var seq__12740_12884__$1 = temp__5457__auto___12883__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12740_12884__$1)){
var c__4319__auto___12885 = cljs.core.chunk_first.call(null,seq__12740_12884__$1);
var G__12886 = cljs.core.chunk_rest.call(null,seq__12740_12884__$1);
var G__12887 = c__4319__auto___12885;
var G__12888 = cljs.core.count.call(null,c__4319__auto___12885);
var G__12889 = (0);
seq__12740_12870 = G__12886;
chunk__12741_12871 = G__12887;
count__12742_12872 = G__12888;
i__12743_12873 = G__12889;
continue;
} else {
var map__12746_12890 = cljs.core.first.call(null,seq__12740_12884__$1);
var map__12746_12891__$1 = ((((!((map__12746_12890 == null)))?(((((map__12746_12890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12746_12890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12746_12890):map__12746_12890);
var gline_12892 = cljs.core.get.call(null,map__12746_12891__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12893 = cljs.core.get.call(null,map__12746_12891__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12894 = cljs.core.get.call(null,map__12746_12891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12892], null),cljs.core.fnil.call(null,((function (seq__12740_12870,chunk__12741_12871,count__12742_12872,i__12743_12873,seq__12733_12863,chunk__12734_12864,count__12735_12865,i__12736_12866,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12746_12890,map__12746_12891__$1,gline_12892,gcol_12893,name_12894,seq__12740_12884__$1,temp__5457__auto___12883__$1,vec__12737_12867,column_12868,column_info_12869,vec__12730_12860,line_12861,columns_12862,seq__12697_12854__$1,temp__5457__auto___12853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12893], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12861,new cljs.core.Keyword(null,"col","col",-1959363084),column_12868,new cljs.core.Keyword(null,"name","name",1843675177),name_12894], null));
});})(seq__12740_12870,chunk__12741_12871,count__12742_12872,i__12743_12873,seq__12733_12863,chunk__12734_12864,count__12735_12865,i__12736_12866,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12746_12890,map__12746_12891__$1,gline_12892,gcol_12893,name_12894,seq__12740_12884__$1,temp__5457__auto___12883__$1,vec__12737_12867,column_12868,column_info_12869,vec__12730_12860,line_12861,columns_12862,seq__12697_12854__$1,temp__5457__auto___12853,inverted))
,cljs.core.sorted_map.call(null)));


var G__12895 = cljs.core.next.call(null,seq__12740_12884__$1);
var G__12896 = null;
var G__12897 = (0);
var G__12898 = (0);
seq__12740_12870 = G__12895;
chunk__12741_12871 = G__12896;
count__12742_12872 = G__12897;
i__12743_12873 = G__12898;
continue;
}
} else {
}
}
break;
}


var G__12899 = seq__12733_12863;
var G__12900 = chunk__12734_12864;
var G__12901 = count__12735_12865;
var G__12902 = (i__12736_12866 + (1));
seq__12733_12863 = G__12899;
chunk__12734_12864 = G__12900;
count__12735_12865 = G__12901;
i__12736_12866 = G__12902;
continue;
} else {
var temp__5457__auto___12903__$1 = cljs.core.seq.call(null,seq__12733_12863);
if(temp__5457__auto___12903__$1){
var seq__12733_12904__$1 = temp__5457__auto___12903__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12733_12904__$1)){
var c__4319__auto___12905 = cljs.core.chunk_first.call(null,seq__12733_12904__$1);
var G__12906 = cljs.core.chunk_rest.call(null,seq__12733_12904__$1);
var G__12907 = c__4319__auto___12905;
var G__12908 = cljs.core.count.call(null,c__4319__auto___12905);
var G__12909 = (0);
seq__12733_12863 = G__12906;
chunk__12734_12864 = G__12907;
count__12735_12865 = G__12908;
i__12736_12866 = G__12909;
continue;
} else {
var vec__12748_12910 = cljs.core.first.call(null,seq__12733_12904__$1);
var column_12911 = cljs.core.nth.call(null,vec__12748_12910,(0),null);
var column_info_12912 = cljs.core.nth.call(null,vec__12748_12910,(1),null);
var seq__12751_12913 = cljs.core.seq.call(null,column_info_12912);
var chunk__12752_12914 = null;
var count__12753_12915 = (0);
var i__12754_12916 = (0);
while(true){
if((i__12754_12916 < count__12753_12915)){
var map__12755_12917 = cljs.core._nth.call(null,chunk__12752_12914,i__12754_12916);
var map__12755_12918__$1 = ((((!((map__12755_12917 == null)))?(((((map__12755_12917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12755_12917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12755_12917):map__12755_12917);
var gline_12919 = cljs.core.get.call(null,map__12755_12918__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12920 = cljs.core.get.call(null,map__12755_12918__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12921 = cljs.core.get.call(null,map__12755_12918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12919], null),cljs.core.fnil.call(null,((function (seq__12751_12913,chunk__12752_12914,count__12753_12915,i__12754_12916,seq__12733_12863,chunk__12734_12864,count__12735_12865,i__12736_12866,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12755_12917,map__12755_12918__$1,gline_12919,gcol_12920,name_12921,vec__12748_12910,column_12911,column_info_12912,seq__12733_12904__$1,temp__5457__auto___12903__$1,vec__12730_12860,line_12861,columns_12862,seq__12697_12854__$1,temp__5457__auto___12853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12920], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12861,new cljs.core.Keyword(null,"col","col",-1959363084),column_12911,new cljs.core.Keyword(null,"name","name",1843675177),name_12921], null));
});})(seq__12751_12913,chunk__12752_12914,count__12753_12915,i__12754_12916,seq__12733_12863,chunk__12734_12864,count__12735_12865,i__12736_12866,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12755_12917,map__12755_12918__$1,gline_12919,gcol_12920,name_12921,vec__12748_12910,column_12911,column_info_12912,seq__12733_12904__$1,temp__5457__auto___12903__$1,vec__12730_12860,line_12861,columns_12862,seq__12697_12854__$1,temp__5457__auto___12853,inverted))
,cljs.core.sorted_map.call(null)));


var G__12922 = seq__12751_12913;
var G__12923 = chunk__12752_12914;
var G__12924 = count__12753_12915;
var G__12925 = (i__12754_12916 + (1));
seq__12751_12913 = G__12922;
chunk__12752_12914 = G__12923;
count__12753_12915 = G__12924;
i__12754_12916 = G__12925;
continue;
} else {
var temp__5457__auto___12926__$2 = cljs.core.seq.call(null,seq__12751_12913);
if(temp__5457__auto___12926__$2){
var seq__12751_12927__$1 = temp__5457__auto___12926__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12751_12927__$1)){
var c__4319__auto___12928 = cljs.core.chunk_first.call(null,seq__12751_12927__$1);
var G__12929 = cljs.core.chunk_rest.call(null,seq__12751_12927__$1);
var G__12930 = c__4319__auto___12928;
var G__12931 = cljs.core.count.call(null,c__4319__auto___12928);
var G__12932 = (0);
seq__12751_12913 = G__12929;
chunk__12752_12914 = G__12930;
count__12753_12915 = G__12931;
i__12754_12916 = G__12932;
continue;
} else {
var map__12757_12933 = cljs.core.first.call(null,seq__12751_12927__$1);
var map__12757_12934__$1 = ((((!((map__12757_12933 == null)))?(((((map__12757_12933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12757_12933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12757_12933):map__12757_12933);
var gline_12935 = cljs.core.get.call(null,map__12757_12934__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12936 = cljs.core.get.call(null,map__12757_12934__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12937 = cljs.core.get.call(null,map__12757_12934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12935], null),cljs.core.fnil.call(null,((function (seq__12751_12913,chunk__12752_12914,count__12753_12915,i__12754_12916,seq__12733_12863,chunk__12734_12864,count__12735_12865,i__12736_12866,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12757_12933,map__12757_12934__$1,gline_12935,gcol_12936,name_12937,seq__12751_12927__$1,temp__5457__auto___12926__$2,vec__12748_12910,column_12911,column_info_12912,seq__12733_12904__$1,temp__5457__auto___12903__$1,vec__12730_12860,line_12861,columns_12862,seq__12697_12854__$1,temp__5457__auto___12853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12936], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12861,new cljs.core.Keyword(null,"col","col",-1959363084),column_12911,new cljs.core.Keyword(null,"name","name",1843675177),name_12937], null));
});})(seq__12751_12913,chunk__12752_12914,count__12753_12915,i__12754_12916,seq__12733_12863,chunk__12734_12864,count__12735_12865,i__12736_12866,seq__12697_12759,chunk__12698_12760,count__12699_12761,i__12700_12762,map__12757_12933,map__12757_12934__$1,gline_12935,gcol_12936,name_12937,seq__12751_12927__$1,temp__5457__auto___12926__$2,vec__12748_12910,column_12911,column_info_12912,seq__12733_12904__$1,temp__5457__auto___12903__$1,vec__12730_12860,line_12861,columns_12862,seq__12697_12854__$1,temp__5457__auto___12853,inverted))
,cljs.core.sorted_map.call(null)));


var G__12938 = cljs.core.next.call(null,seq__12751_12927__$1);
var G__12939 = null;
var G__12940 = (0);
var G__12941 = (0);
seq__12751_12913 = G__12938;
chunk__12752_12914 = G__12939;
count__12753_12915 = G__12940;
i__12754_12916 = G__12941;
continue;
}
} else {
}
}
break;
}


var G__12942 = cljs.core.next.call(null,seq__12733_12904__$1);
var G__12943 = null;
var G__12944 = (0);
var G__12945 = (0);
seq__12733_12863 = G__12942;
chunk__12734_12864 = G__12943;
count__12735_12865 = G__12944;
i__12736_12866 = G__12945;
continue;
}
} else {
}
}
break;
}


var G__12946 = cljs.core.next.call(null,seq__12697_12854__$1);
var G__12947 = null;
var G__12948 = (0);
var G__12949 = (0);
seq__12697_12759 = G__12946;
chunk__12698_12760 = G__12947;
count__12699_12761 = G__12948;
i__12700_12762 = G__12949;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
