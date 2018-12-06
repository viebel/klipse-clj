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
return cljs.core.reduce.call(null,(function (m,p__34079){
var vec__34080 = p__34079;
var i = cljs.core.nth.call(null,vec__34080,(0),null);
var v = cljs.core.nth.call(null,vec__34080,(1),null);
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
var vec__34083 = seg;
var gcol = cljs.core.nth.call(null,vec__34083,(0),null);
var source = cljs.core.nth.call(null,vec__34083,(1),null);
var line = cljs.core.nth.call(null,vec__34083,(2),null);
var col = cljs.core.nth.call(null,vec__34083,(3),null);
var name = cljs.core.nth.call(null,vec__34083,(4),null);
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
var vec__34086 = seg;
var gcol = cljs.core.nth.call(null,vec__34086,(0),null);
var source = cljs.core.nth.call(null,vec__34086,(1),null);
var line = cljs.core.nth.call(null,vec__34086,(2),null);
var col = cljs.core.nth.call(null,vec__34086,(3),null);
var name = cljs.core.nth.call(null,vec__34086,(4),null);
var vec__34089 = relseg;
var rgcol = cljs.core.nth.call(null,vec__34089,(0),null);
var rsource = cljs.core.nth.call(null,vec__34089,(1),null);
var rline = cljs.core.nth.call(null,vec__34089,(2),null);
var rcol = cljs.core.nth.call(null,vec__34089,(3),null);
var rname = cljs.core.nth.call(null,vec__34089,(4),null);
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
var map__34092 = segmap;
var map__34092__$1 = ((((!((map__34092 == null)))?(((((map__34092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34092):map__34092);
var gcol = cljs.core.get.call(null,map__34092__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__34092__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__34092__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__34092__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__34092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__34092,map__34092__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__34092,map__34092__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__34092,map__34092__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__34092,map__34092__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__34092,map__34092__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__34092,map__34092__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__34095 = arguments.length;
switch (G__34095) {
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
var vec__34096 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__34100 = cljs.core.next.call(null,segs__$1);
var G__34101 = nrelseg;
var G__34102 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__34100;
relseg__$1 = G__34101;
result__$1 = G__34102;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__34096,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__34096,(1),null);
var G__34103 = (gline + (1));
var G__34104 = cljs.core.next.call(null,lines__$1);
var G__34105 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__34106 = result__$1;
gline = G__34103;
lines__$1 = G__34104;
relseg = G__34105;
result = G__34106;
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
var map__34108 = segmap;
var map__34108__$1 = ((((!((map__34108 == null)))?(((((map__34108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34108):map__34108);
var gcol = cljs.core.get.call(null,map__34108__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__34108__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__34108__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__34108__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__34108__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__34108,map__34108__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__34108,map__34108__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__34107_SHARP_){
return cljs.core.conj.call(null,p1__34107_SHARP_,d__$1);
});})(map__34108,map__34108__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__34108,map__34108__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__34111 = arguments.length;
switch (G__34111) {
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
var vec__34112 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__34116 = cljs.core.next.call(null,segs__$1);
var G__34117 = nrelseg;
var G__34118 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__34116;
relseg__$1 = G__34117;
result__$1 = G__34118;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__34112,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__34112,(1),null);
var G__34119 = (gline + (1));
var G__34120 = cljs.core.next.call(null,lines__$1);
var G__34121 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__34122 = result__$1;
gline = G__34119;
lines__$1 = G__34120;
relseg = G__34121;
result = G__34122;
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
return (function (p__34123){
var vec__34124 = p__34123;
var _ = cljs.core.nth.call(null,vec__34124,(0),null);
var source = cljs.core.nth.call(null,vec__34124,(1),null);
var line = cljs.core.nth.call(null,vec__34124,(2),null);
var col = cljs.core.nth.call(null,vec__34124,(3),null);
var name = cljs.core.nth.call(null,vec__34124,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__34127){
var vec__34128 = p__34127;
var gcol = cljs.core.nth.call(null,vec__34128,(0),null);
var sidx = cljs.core.nth.call(null,vec__34128,(1),null);
var line = cljs.core.nth.call(null,vec__34128,(2),null);
var col = cljs.core.nth.call(null,vec__34128,(3),null);
var name = cljs.core.nth.call(null,vec__34128,(4),null);
var seg = vec__34128;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__34128,gcol,sidx,line,col,name,seg,relseg){
return (function (p__34131){
var vec__34132 = p__34131;
var _ = cljs.core.nth.call(null,vec__34132,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__34132,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__34132,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__34132,(3),null);
var lname = cljs.core.nth.call(null,vec__34132,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__34128,gcol,sidx,line,col,name,seg,relseg))
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
var seq__34138 = cljs.core.seq.call(null,infos);
var chunk__34139 = null;
var count__34140 = (0);
var i__34141 = (0);
while(true){
if((i__34141 < count__34140)){
var info = cljs.core._nth.call(null,chunk__34139,i__34141);
var segv_34220 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_34221 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_34222 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_34221 > (lc_34222 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__34138,chunk__34139,count__34140,i__34141,segv_34220,gline_34221,lc_34222,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_34221 - (lc_34222 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_34220], null));
});})(seq__34138,chunk__34139,count__34140,i__34141,segv_34220,gline_34221,lc_34222,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__34138,chunk__34139,count__34140,i__34141,segv_34220,gline_34221,lc_34222,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34221], null),cljs.core.conj,segv_34220);
});})(seq__34138,chunk__34139,count__34140,i__34141,segv_34220,gline_34221,lc_34222,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__34223 = seq__34138;
var G__34224 = chunk__34139;
var G__34225 = count__34140;
var G__34226 = (i__34141 + (1));
seq__34138 = G__34223;
chunk__34139 = G__34224;
count__34140 = G__34225;
i__34141 = G__34226;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34138);
if(temp__5457__auto__){
var seq__34138__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34138__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34138__$1);
var G__34227 = cljs.core.chunk_rest.call(null,seq__34138__$1);
var G__34228 = c__4319__auto__;
var G__34229 = cljs.core.count.call(null,c__4319__auto__);
var G__34230 = (0);
seq__34138 = G__34227;
chunk__34139 = G__34228;
count__34140 = G__34229;
i__34141 = G__34230;
continue;
} else {
var info = cljs.core.first.call(null,seq__34138__$1);
var segv_34231 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_34232 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_34233 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_34232 > (lc_34233 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__34138,chunk__34139,count__34140,i__34141,segv_34231,gline_34232,lc_34233,info,seq__34138__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_34232 - (lc_34233 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_34231], null));
});})(seq__34138,chunk__34139,count__34140,i__34141,segv_34231,gline_34232,lc_34233,info,seq__34138__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__34138,chunk__34139,count__34140,i__34141,segv_34231,gline_34232,lc_34233,info,seq__34138__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34232], null),cljs.core.conj,segv_34231);
});})(seq__34138,chunk__34139,count__34140,i__34141,segv_34231,gline_34232,lc_34233,info,seq__34138__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__34234 = cljs.core.next.call(null,seq__34138__$1);
var G__34235 = null;
var G__34236 = (0);
var G__34237 = (0);
seq__34138 = G__34234;
chunk__34139 = G__34235;
count__34140 = G__34236;
i__34141 = G__34237;
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
var seq__34142_34238 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__34143_34239 = null;
var count__34144_34240 = (0);
var i__34145_34241 = (0);
while(true){
if((i__34145_34241 < count__34144_34240)){
var vec__34146_34242 = cljs.core._nth.call(null,chunk__34143_34239,i__34145_34241);
var source_idx_34243 = cljs.core.nth.call(null,vec__34146_34242,(0),null);
var vec__34149_34244 = cljs.core.nth.call(null,vec__34146_34242,(1),null);
var __34245 = cljs.core.nth.call(null,vec__34149_34244,(0),null);
var lines_34246__$1 = cljs.core.nth.call(null,vec__34149_34244,(1),null);
var seq__34152_34247 = cljs.core.seq.call(null,lines_34246__$1);
var chunk__34153_34248 = null;
var count__34154_34249 = (0);
var i__34155_34250 = (0);
while(true){
if((i__34155_34250 < count__34154_34249)){
var vec__34156_34251 = cljs.core._nth.call(null,chunk__34153_34248,i__34155_34250);
var line_34252 = cljs.core.nth.call(null,vec__34156_34251,(0),null);
var cols_34253 = cljs.core.nth.call(null,vec__34156_34251,(1),null);
var seq__34159_34254 = cljs.core.seq.call(null,cols_34253);
var chunk__34160_34255 = null;
var count__34161_34256 = (0);
var i__34162_34257 = (0);
while(true){
if((i__34162_34257 < count__34161_34256)){
var vec__34163_34258 = cljs.core._nth.call(null,chunk__34160_34255,i__34162_34257);
var col_34259 = cljs.core.nth.call(null,vec__34163_34258,(0),null);
var infos_34260 = cljs.core.nth.call(null,vec__34163_34258,(1),null);
encode_cols.call(null,infos_34260,source_idx_34243,line_34252,col_34259);


var G__34261 = seq__34159_34254;
var G__34262 = chunk__34160_34255;
var G__34263 = count__34161_34256;
var G__34264 = (i__34162_34257 + (1));
seq__34159_34254 = G__34261;
chunk__34160_34255 = G__34262;
count__34161_34256 = G__34263;
i__34162_34257 = G__34264;
continue;
} else {
var temp__5457__auto___34265 = cljs.core.seq.call(null,seq__34159_34254);
if(temp__5457__auto___34265){
var seq__34159_34266__$1 = temp__5457__auto___34265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34159_34266__$1)){
var c__4319__auto___34267 = cljs.core.chunk_first.call(null,seq__34159_34266__$1);
var G__34268 = cljs.core.chunk_rest.call(null,seq__34159_34266__$1);
var G__34269 = c__4319__auto___34267;
var G__34270 = cljs.core.count.call(null,c__4319__auto___34267);
var G__34271 = (0);
seq__34159_34254 = G__34268;
chunk__34160_34255 = G__34269;
count__34161_34256 = G__34270;
i__34162_34257 = G__34271;
continue;
} else {
var vec__34166_34272 = cljs.core.first.call(null,seq__34159_34266__$1);
var col_34273 = cljs.core.nth.call(null,vec__34166_34272,(0),null);
var infos_34274 = cljs.core.nth.call(null,vec__34166_34272,(1),null);
encode_cols.call(null,infos_34274,source_idx_34243,line_34252,col_34273);


var G__34275 = cljs.core.next.call(null,seq__34159_34266__$1);
var G__34276 = null;
var G__34277 = (0);
var G__34278 = (0);
seq__34159_34254 = G__34275;
chunk__34160_34255 = G__34276;
count__34161_34256 = G__34277;
i__34162_34257 = G__34278;
continue;
}
} else {
}
}
break;
}


var G__34279 = seq__34152_34247;
var G__34280 = chunk__34153_34248;
var G__34281 = count__34154_34249;
var G__34282 = (i__34155_34250 + (1));
seq__34152_34247 = G__34279;
chunk__34153_34248 = G__34280;
count__34154_34249 = G__34281;
i__34155_34250 = G__34282;
continue;
} else {
var temp__5457__auto___34283 = cljs.core.seq.call(null,seq__34152_34247);
if(temp__5457__auto___34283){
var seq__34152_34284__$1 = temp__5457__auto___34283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34152_34284__$1)){
var c__4319__auto___34285 = cljs.core.chunk_first.call(null,seq__34152_34284__$1);
var G__34286 = cljs.core.chunk_rest.call(null,seq__34152_34284__$1);
var G__34287 = c__4319__auto___34285;
var G__34288 = cljs.core.count.call(null,c__4319__auto___34285);
var G__34289 = (0);
seq__34152_34247 = G__34286;
chunk__34153_34248 = G__34287;
count__34154_34249 = G__34288;
i__34155_34250 = G__34289;
continue;
} else {
var vec__34169_34290 = cljs.core.first.call(null,seq__34152_34284__$1);
var line_34291 = cljs.core.nth.call(null,vec__34169_34290,(0),null);
var cols_34292 = cljs.core.nth.call(null,vec__34169_34290,(1),null);
var seq__34172_34293 = cljs.core.seq.call(null,cols_34292);
var chunk__34173_34294 = null;
var count__34174_34295 = (0);
var i__34175_34296 = (0);
while(true){
if((i__34175_34296 < count__34174_34295)){
var vec__34176_34297 = cljs.core._nth.call(null,chunk__34173_34294,i__34175_34296);
var col_34298 = cljs.core.nth.call(null,vec__34176_34297,(0),null);
var infos_34299 = cljs.core.nth.call(null,vec__34176_34297,(1),null);
encode_cols.call(null,infos_34299,source_idx_34243,line_34291,col_34298);


var G__34300 = seq__34172_34293;
var G__34301 = chunk__34173_34294;
var G__34302 = count__34174_34295;
var G__34303 = (i__34175_34296 + (1));
seq__34172_34293 = G__34300;
chunk__34173_34294 = G__34301;
count__34174_34295 = G__34302;
i__34175_34296 = G__34303;
continue;
} else {
var temp__5457__auto___34304__$1 = cljs.core.seq.call(null,seq__34172_34293);
if(temp__5457__auto___34304__$1){
var seq__34172_34305__$1 = temp__5457__auto___34304__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34172_34305__$1)){
var c__4319__auto___34306 = cljs.core.chunk_first.call(null,seq__34172_34305__$1);
var G__34307 = cljs.core.chunk_rest.call(null,seq__34172_34305__$1);
var G__34308 = c__4319__auto___34306;
var G__34309 = cljs.core.count.call(null,c__4319__auto___34306);
var G__34310 = (0);
seq__34172_34293 = G__34307;
chunk__34173_34294 = G__34308;
count__34174_34295 = G__34309;
i__34175_34296 = G__34310;
continue;
} else {
var vec__34179_34311 = cljs.core.first.call(null,seq__34172_34305__$1);
var col_34312 = cljs.core.nth.call(null,vec__34179_34311,(0),null);
var infos_34313 = cljs.core.nth.call(null,vec__34179_34311,(1),null);
encode_cols.call(null,infos_34313,source_idx_34243,line_34291,col_34312);


var G__34314 = cljs.core.next.call(null,seq__34172_34305__$1);
var G__34315 = null;
var G__34316 = (0);
var G__34317 = (0);
seq__34172_34293 = G__34314;
chunk__34173_34294 = G__34315;
count__34174_34295 = G__34316;
i__34175_34296 = G__34317;
continue;
}
} else {
}
}
break;
}


var G__34318 = cljs.core.next.call(null,seq__34152_34284__$1);
var G__34319 = null;
var G__34320 = (0);
var G__34321 = (0);
seq__34152_34247 = G__34318;
chunk__34153_34248 = G__34319;
count__34154_34249 = G__34320;
i__34155_34250 = G__34321;
continue;
}
} else {
}
}
break;
}


var G__34322 = seq__34142_34238;
var G__34323 = chunk__34143_34239;
var G__34324 = count__34144_34240;
var G__34325 = (i__34145_34241 + (1));
seq__34142_34238 = G__34322;
chunk__34143_34239 = G__34323;
count__34144_34240 = G__34324;
i__34145_34241 = G__34325;
continue;
} else {
var temp__5457__auto___34326 = cljs.core.seq.call(null,seq__34142_34238);
if(temp__5457__auto___34326){
var seq__34142_34327__$1 = temp__5457__auto___34326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34142_34327__$1)){
var c__4319__auto___34328 = cljs.core.chunk_first.call(null,seq__34142_34327__$1);
var G__34329 = cljs.core.chunk_rest.call(null,seq__34142_34327__$1);
var G__34330 = c__4319__auto___34328;
var G__34331 = cljs.core.count.call(null,c__4319__auto___34328);
var G__34332 = (0);
seq__34142_34238 = G__34329;
chunk__34143_34239 = G__34330;
count__34144_34240 = G__34331;
i__34145_34241 = G__34332;
continue;
} else {
var vec__34182_34333 = cljs.core.first.call(null,seq__34142_34327__$1);
var source_idx_34334 = cljs.core.nth.call(null,vec__34182_34333,(0),null);
var vec__34185_34335 = cljs.core.nth.call(null,vec__34182_34333,(1),null);
var __34336 = cljs.core.nth.call(null,vec__34185_34335,(0),null);
var lines_34337__$1 = cljs.core.nth.call(null,vec__34185_34335,(1),null);
var seq__34188_34338 = cljs.core.seq.call(null,lines_34337__$1);
var chunk__34189_34339 = null;
var count__34190_34340 = (0);
var i__34191_34341 = (0);
while(true){
if((i__34191_34341 < count__34190_34340)){
var vec__34192_34342 = cljs.core._nth.call(null,chunk__34189_34339,i__34191_34341);
var line_34343 = cljs.core.nth.call(null,vec__34192_34342,(0),null);
var cols_34344 = cljs.core.nth.call(null,vec__34192_34342,(1),null);
var seq__34195_34345 = cljs.core.seq.call(null,cols_34344);
var chunk__34196_34346 = null;
var count__34197_34347 = (0);
var i__34198_34348 = (0);
while(true){
if((i__34198_34348 < count__34197_34347)){
var vec__34199_34349 = cljs.core._nth.call(null,chunk__34196_34346,i__34198_34348);
var col_34350 = cljs.core.nth.call(null,vec__34199_34349,(0),null);
var infos_34351 = cljs.core.nth.call(null,vec__34199_34349,(1),null);
encode_cols.call(null,infos_34351,source_idx_34334,line_34343,col_34350);


var G__34352 = seq__34195_34345;
var G__34353 = chunk__34196_34346;
var G__34354 = count__34197_34347;
var G__34355 = (i__34198_34348 + (1));
seq__34195_34345 = G__34352;
chunk__34196_34346 = G__34353;
count__34197_34347 = G__34354;
i__34198_34348 = G__34355;
continue;
} else {
var temp__5457__auto___34356__$1 = cljs.core.seq.call(null,seq__34195_34345);
if(temp__5457__auto___34356__$1){
var seq__34195_34357__$1 = temp__5457__auto___34356__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34195_34357__$1)){
var c__4319__auto___34358 = cljs.core.chunk_first.call(null,seq__34195_34357__$1);
var G__34359 = cljs.core.chunk_rest.call(null,seq__34195_34357__$1);
var G__34360 = c__4319__auto___34358;
var G__34361 = cljs.core.count.call(null,c__4319__auto___34358);
var G__34362 = (0);
seq__34195_34345 = G__34359;
chunk__34196_34346 = G__34360;
count__34197_34347 = G__34361;
i__34198_34348 = G__34362;
continue;
} else {
var vec__34202_34363 = cljs.core.first.call(null,seq__34195_34357__$1);
var col_34364 = cljs.core.nth.call(null,vec__34202_34363,(0),null);
var infos_34365 = cljs.core.nth.call(null,vec__34202_34363,(1),null);
encode_cols.call(null,infos_34365,source_idx_34334,line_34343,col_34364);


var G__34366 = cljs.core.next.call(null,seq__34195_34357__$1);
var G__34367 = null;
var G__34368 = (0);
var G__34369 = (0);
seq__34195_34345 = G__34366;
chunk__34196_34346 = G__34367;
count__34197_34347 = G__34368;
i__34198_34348 = G__34369;
continue;
}
} else {
}
}
break;
}


var G__34370 = seq__34188_34338;
var G__34371 = chunk__34189_34339;
var G__34372 = count__34190_34340;
var G__34373 = (i__34191_34341 + (1));
seq__34188_34338 = G__34370;
chunk__34189_34339 = G__34371;
count__34190_34340 = G__34372;
i__34191_34341 = G__34373;
continue;
} else {
var temp__5457__auto___34374__$1 = cljs.core.seq.call(null,seq__34188_34338);
if(temp__5457__auto___34374__$1){
var seq__34188_34375__$1 = temp__5457__auto___34374__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34188_34375__$1)){
var c__4319__auto___34376 = cljs.core.chunk_first.call(null,seq__34188_34375__$1);
var G__34377 = cljs.core.chunk_rest.call(null,seq__34188_34375__$1);
var G__34378 = c__4319__auto___34376;
var G__34379 = cljs.core.count.call(null,c__4319__auto___34376);
var G__34380 = (0);
seq__34188_34338 = G__34377;
chunk__34189_34339 = G__34378;
count__34190_34340 = G__34379;
i__34191_34341 = G__34380;
continue;
} else {
var vec__34205_34381 = cljs.core.first.call(null,seq__34188_34375__$1);
var line_34382 = cljs.core.nth.call(null,vec__34205_34381,(0),null);
var cols_34383 = cljs.core.nth.call(null,vec__34205_34381,(1),null);
var seq__34208_34384 = cljs.core.seq.call(null,cols_34383);
var chunk__34209_34385 = null;
var count__34210_34386 = (0);
var i__34211_34387 = (0);
while(true){
if((i__34211_34387 < count__34210_34386)){
var vec__34212_34388 = cljs.core._nth.call(null,chunk__34209_34385,i__34211_34387);
var col_34389 = cljs.core.nth.call(null,vec__34212_34388,(0),null);
var infos_34390 = cljs.core.nth.call(null,vec__34212_34388,(1),null);
encode_cols.call(null,infos_34390,source_idx_34334,line_34382,col_34389);


var G__34391 = seq__34208_34384;
var G__34392 = chunk__34209_34385;
var G__34393 = count__34210_34386;
var G__34394 = (i__34211_34387 + (1));
seq__34208_34384 = G__34391;
chunk__34209_34385 = G__34392;
count__34210_34386 = G__34393;
i__34211_34387 = G__34394;
continue;
} else {
var temp__5457__auto___34395__$2 = cljs.core.seq.call(null,seq__34208_34384);
if(temp__5457__auto___34395__$2){
var seq__34208_34396__$1 = temp__5457__auto___34395__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34208_34396__$1)){
var c__4319__auto___34397 = cljs.core.chunk_first.call(null,seq__34208_34396__$1);
var G__34398 = cljs.core.chunk_rest.call(null,seq__34208_34396__$1);
var G__34399 = c__4319__auto___34397;
var G__34400 = cljs.core.count.call(null,c__4319__auto___34397);
var G__34401 = (0);
seq__34208_34384 = G__34398;
chunk__34209_34385 = G__34399;
count__34210_34386 = G__34400;
i__34211_34387 = G__34401;
continue;
} else {
var vec__34215_34402 = cljs.core.first.call(null,seq__34208_34396__$1);
var col_34403 = cljs.core.nth.call(null,vec__34215_34402,(0),null);
var infos_34404 = cljs.core.nth.call(null,vec__34215_34402,(1),null);
encode_cols.call(null,infos_34404,source_idx_34334,line_34382,col_34403);


var G__34405 = cljs.core.next.call(null,seq__34208_34396__$1);
var G__34406 = null;
var G__34407 = (0);
var G__34408 = (0);
seq__34208_34384 = G__34405;
chunk__34209_34385 = G__34406;
count__34210_34386 = G__34407;
i__34211_34387 = G__34408;
continue;
}
} else {
}
}
break;
}


var G__34409 = cljs.core.next.call(null,seq__34188_34375__$1);
var G__34410 = null;
var G__34411 = (0);
var G__34412 = (0);
seq__34188_34338 = G__34409;
chunk__34189_34339 = G__34410;
count__34190_34340 = G__34411;
i__34191_34341 = G__34412;
continue;
}
} else {
}
}
break;
}


var G__34413 = cljs.core.next.call(null,seq__34142_34327__$1);
var G__34414 = null;
var G__34415 = (0);
var G__34416 = (0);
seq__34142_34238 = G__34413;
chunk__34143_34239 = G__34414;
count__34144_34240 = G__34415;
i__34145_34241 = G__34416;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__34218 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__34135_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34135_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__34136_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__34136_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__34137_SHARP_){
return clojure.string.join.call(null,",",p1__34137_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__34219 = G__34218;
goog.object.set(G__34219,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__34219;
} else {
return G__34218;
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
var vec__34417 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__34417,(0),null);
var col_map = cljs.core.nth.call(null,vec__34417,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__34420 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__34420,(0),null);
var infos = cljs.core.nth.call(null,vec__34420,(1),null);
var G__34426 = cljs.core.next.call(null,col_map_seq);
var G__34427 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__34420,col,infos,vec__34417,line,col_map){
return (function (v,p__34423){
var map__34424 = p__34423;
var map__34424__$1 = ((((!((map__34424 == null)))?(((((map__34424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34424):map__34424);
var gline = cljs.core.get.call(null,map__34424__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__34424__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__34420,col,infos,vec__34417,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__34426;
new_cols = G__34427;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__34428 = cljs.core.next.call(null,line_map_seq);
var G__34429 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__34428;
new_lines = G__34429;
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
var seq__34430_34492 = cljs.core.seq.call(null,reverse_map);
var chunk__34431_34493 = null;
var count__34432_34494 = (0);
var i__34433_34495 = (0);
while(true){
if((i__34433_34495 < count__34432_34494)){
var vec__34434_34496 = cljs.core._nth.call(null,chunk__34431_34493,i__34433_34495);
var line_34497 = cljs.core.nth.call(null,vec__34434_34496,(0),null);
var columns_34498 = cljs.core.nth.call(null,vec__34434_34496,(1),null);
var seq__34437_34499 = cljs.core.seq.call(null,columns_34498);
var chunk__34438_34500 = null;
var count__34439_34501 = (0);
var i__34440_34502 = (0);
while(true){
if((i__34440_34502 < count__34439_34501)){
var vec__34441_34503 = cljs.core._nth.call(null,chunk__34438_34500,i__34440_34502);
var column_34504 = cljs.core.nth.call(null,vec__34441_34503,(0),null);
var column_info_34505 = cljs.core.nth.call(null,vec__34441_34503,(1),null);
var seq__34444_34506 = cljs.core.seq.call(null,column_info_34505);
var chunk__34445_34507 = null;
var count__34446_34508 = (0);
var i__34447_34509 = (0);
while(true){
if((i__34447_34509 < count__34446_34508)){
var map__34448_34510 = cljs.core._nth.call(null,chunk__34445_34507,i__34447_34509);
var map__34448_34511__$1 = ((((!((map__34448_34510 == null)))?(((((map__34448_34510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34448_34510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34448_34510):map__34448_34510);
var gline_34512 = cljs.core.get.call(null,map__34448_34511__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34513 = cljs.core.get.call(null,map__34448_34511__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34514 = cljs.core.get.call(null,map__34448_34511__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34512], null),cljs.core.fnil.call(null,((function (seq__34444_34506,chunk__34445_34507,count__34446_34508,i__34447_34509,seq__34437_34499,chunk__34438_34500,count__34439_34501,i__34440_34502,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34448_34510,map__34448_34511__$1,gline_34512,gcol_34513,name_34514,vec__34441_34503,column_34504,column_info_34505,vec__34434_34496,line_34497,columns_34498,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34513], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34497,new cljs.core.Keyword(null,"col","col",-1959363084),column_34504,new cljs.core.Keyword(null,"name","name",1843675177),name_34514], null));
});})(seq__34444_34506,chunk__34445_34507,count__34446_34508,i__34447_34509,seq__34437_34499,chunk__34438_34500,count__34439_34501,i__34440_34502,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34448_34510,map__34448_34511__$1,gline_34512,gcol_34513,name_34514,vec__34441_34503,column_34504,column_info_34505,vec__34434_34496,line_34497,columns_34498,inverted))
,cljs.core.sorted_map.call(null)));


var G__34515 = seq__34444_34506;
var G__34516 = chunk__34445_34507;
var G__34517 = count__34446_34508;
var G__34518 = (i__34447_34509 + (1));
seq__34444_34506 = G__34515;
chunk__34445_34507 = G__34516;
count__34446_34508 = G__34517;
i__34447_34509 = G__34518;
continue;
} else {
var temp__5457__auto___34519 = cljs.core.seq.call(null,seq__34444_34506);
if(temp__5457__auto___34519){
var seq__34444_34520__$1 = temp__5457__auto___34519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34444_34520__$1)){
var c__4319__auto___34521 = cljs.core.chunk_first.call(null,seq__34444_34520__$1);
var G__34522 = cljs.core.chunk_rest.call(null,seq__34444_34520__$1);
var G__34523 = c__4319__auto___34521;
var G__34524 = cljs.core.count.call(null,c__4319__auto___34521);
var G__34525 = (0);
seq__34444_34506 = G__34522;
chunk__34445_34507 = G__34523;
count__34446_34508 = G__34524;
i__34447_34509 = G__34525;
continue;
} else {
var map__34450_34526 = cljs.core.first.call(null,seq__34444_34520__$1);
var map__34450_34527__$1 = ((((!((map__34450_34526 == null)))?(((((map__34450_34526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34450_34526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34450_34526):map__34450_34526);
var gline_34528 = cljs.core.get.call(null,map__34450_34527__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34529 = cljs.core.get.call(null,map__34450_34527__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34530 = cljs.core.get.call(null,map__34450_34527__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34528], null),cljs.core.fnil.call(null,((function (seq__34444_34506,chunk__34445_34507,count__34446_34508,i__34447_34509,seq__34437_34499,chunk__34438_34500,count__34439_34501,i__34440_34502,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34450_34526,map__34450_34527__$1,gline_34528,gcol_34529,name_34530,seq__34444_34520__$1,temp__5457__auto___34519,vec__34441_34503,column_34504,column_info_34505,vec__34434_34496,line_34497,columns_34498,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34529], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34497,new cljs.core.Keyword(null,"col","col",-1959363084),column_34504,new cljs.core.Keyword(null,"name","name",1843675177),name_34530], null));
});})(seq__34444_34506,chunk__34445_34507,count__34446_34508,i__34447_34509,seq__34437_34499,chunk__34438_34500,count__34439_34501,i__34440_34502,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34450_34526,map__34450_34527__$1,gline_34528,gcol_34529,name_34530,seq__34444_34520__$1,temp__5457__auto___34519,vec__34441_34503,column_34504,column_info_34505,vec__34434_34496,line_34497,columns_34498,inverted))
,cljs.core.sorted_map.call(null)));


var G__34531 = cljs.core.next.call(null,seq__34444_34520__$1);
var G__34532 = null;
var G__34533 = (0);
var G__34534 = (0);
seq__34444_34506 = G__34531;
chunk__34445_34507 = G__34532;
count__34446_34508 = G__34533;
i__34447_34509 = G__34534;
continue;
}
} else {
}
}
break;
}


var G__34535 = seq__34437_34499;
var G__34536 = chunk__34438_34500;
var G__34537 = count__34439_34501;
var G__34538 = (i__34440_34502 + (1));
seq__34437_34499 = G__34535;
chunk__34438_34500 = G__34536;
count__34439_34501 = G__34537;
i__34440_34502 = G__34538;
continue;
} else {
var temp__5457__auto___34539 = cljs.core.seq.call(null,seq__34437_34499);
if(temp__5457__auto___34539){
var seq__34437_34540__$1 = temp__5457__auto___34539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34437_34540__$1)){
var c__4319__auto___34541 = cljs.core.chunk_first.call(null,seq__34437_34540__$1);
var G__34542 = cljs.core.chunk_rest.call(null,seq__34437_34540__$1);
var G__34543 = c__4319__auto___34541;
var G__34544 = cljs.core.count.call(null,c__4319__auto___34541);
var G__34545 = (0);
seq__34437_34499 = G__34542;
chunk__34438_34500 = G__34543;
count__34439_34501 = G__34544;
i__34440_34502 = G__34545;
continue;
} else {
var vec__34452_34546 = cljs.core.first.call(null,seq__34437_34540__$1);
var column_34547 = cljs.core.nth.call(null,vec__34452_34546,(0),null);
var column_info_34548 = cljs.core.nth.call(null,vec__34452_34546,(1),null);
var seq__34455_34549 = cljs.core.seq.call(null,column_info_34548);
var chunk__34456_34550 = null;
var count__34457_34551 = (0);
var i__34458_34552 = (0);
while(true){
if((i__34458_34552 < count__34457_34551)){
var map__34459_34553 = cljs.core._nth.call(null,chunk__34456_34550,i__34458_34552);
var map__34459_34554__$1 = ((((!((map__34459_34553 == null)))?(((((map__34459_34553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34459_34553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34459_34553):map__34459_34553);
var gline_34555 = cljs.core.get.call(null,map__34459_34554__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34556 = cljs.core.get.call(null,map__34459_34554__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34557 = cljs.core.get.call(null,map__34459_34554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34555], null),cljs.core.fnil.call(null,((function (seq__34455_34549,chunk__34456_34550,count__34457_34551,i__34458_34552,seq__34437_34499,chunk__34438_34500,count__34439_34501,i__34440_34502,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34459_34553,map__34459_34554__$1,gline_34555,gcol_34556,name_34557,vec__34452_34546,column_34547,column_info_34548,seq__34437_34540__$1,temp__5457__auto___34539,vec__34434_34496,line_34497,columns_34498,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34556], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34497,new cljs.core.Keyword(null,"col","col",-1959363084),column_34547,new cljs.core.Keyword(null,"name","name",1843675177),name_34557], null));
});})(seq__34455_34549,chunk__34456_34550,count__34457_34551,i__34458_34552,seq__34437_34499,chunk__34438_34500,count__34439_34501,i__34440_34502,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34459_34553,map__34459_34554__$1,gline_34555,gcol_34556,name_34557,vec__34452_34546,column_34547,column_info_34548,seq__34437_34540__$1,temp__5457__auto___34539,vec__34434_34496,line_34497,columns_34498,inverted))
,cljs.core.sorted_map.call(null)));


var G__34558 = seq__34455_34549;
var G__34559 = chunk__34456_34550;
var G__34560 = count__34457_34551;
var G__34561 = (i__34458_34552 + (1));
seq__34455_34549 = G__34558;
chunk__34456_34550 = G__34559;
count__34457_34551 = G__34560;
i__34458_34552 = G__34561;
continue;
} else {
var temp__5457__auto___34562__$1 = cljs.core.seq.call(null,seq__34455_34549);
if(temp__5457__auto___34562__$1){
var seq__34455_34563__$1 = temp__5457__auto___34562__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34455_34563__$1)){
var c__4319__auto___34564 = cljs.core.chunk_first.call(null,seq__34455_34563__$1);
var G__34565 = cljs.core.chunk_rest.call(null,seq__34455_34563__$1);
var G__34566 = c__4319__auto___34564;
var G__34567 = cljs.core.count.call(null,c__4319__auto___34564);
var G__34568 = (0);
seq__34455_34549 = G__34565;
chunk__34456_34550 = G__34566;
count__34457_34551 = G__34567;
i__34458_34552 = G__34568;
continue;
} else {
var map__34461_34569 = cljs.core.first.call(null,seq__34455_34563__$1);
var map__34461_34570__$1 = ((((!((map__34461_34569 == null)))?(((((map__34461_34569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34461_34569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34461_34569):map__34461_34569);
var gline_34571 = cljs.core.get.call(null,map__34461_34570__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34572 = cljs.core.get.call(null,map__34461_34570__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34573 = cljs.core.get.call(null,map__34461_34570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34571], null),cljs.core.fnil.call(null,((function (seq__34455_34549,chunk__34456_34550,count__34457_34551,i__34458_34552,seq__34437_34499,chunk__34438_34500,count__34439_34501,i__34440_34502,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34461_34569,map__34461_34570__$1,gline_34571,gcol_34572,name_34573,seq__34455_34563__$1,temp__5457__auto___34562__$1,vec__34452_34546,column_34547,column_info_34548,seq__34437_34540__$1,temp__5457__auto___34539,vec__34434_34496,line_34497,columns_34498,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34572], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34497,new cljs.core.Keyword(null,"col","col",-1959363084),column_34547,new cljs.core.Keyword(null,"name","name",1843675177),name_34573], null));
});})(seq__34455_34549,chunk__34456_34550,count__34457_34551,i__34458_34552,seq__34437_34499,chunk__34438_34500,count__34439_34501,i__34440_34502,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34461_34569,map__34461_34570__$1,gline_34571,gcol_34572,name_34573,seq__34455_34563__$1,temp__5457__auto___34562__$1,vec__34452_34546,column_34547,column_info_34548,seq__34437_34540__$1,temp__5457__auto___34539,vec__34434_34496,line_34497,columns_34498,inverted))
,cljs.core.sorted_map.call(null)));


var G__34574 = cljs.core.next.call(null,seq__34455_34563__$1);
var G__34575 = null;
var G__34576 = (0);
var G__34577 = (0);
seq__34455_34549 = G__34574;
chunk__34456_34550 = G__34575;
count__34457_34551 = G__34576;
i__34458_34552 = G__34577;
continue;
}
} else {
}
}
break;
}


var G__34578 = cljs.core.next.call(null,seq__34437_34540__$1);
var G__34579 = null;
var G__34580 = (0);
var G__34581 = (0);
seq__34437_34499 = G__34578;
chunk__34438_34500 = G__34579;
count__34439_34501 = G__34580;
i__34440_34502 = G__34581;
continue;
}
} else {
}
}
break;
}


var G__34582 = seq__34430_34492;
var G__34583 = chunk__34431_34493;
var G__34584 = count__34432_34494;
var G__34585 = (i__34433_34495 + (1));
seq__34430_34492 = G__34582;
chunk__34431_34493 = G__34583;
count__34432_34494 = G__34584;
i__34433_34495 = G__34585;
continue;
} else {
var temp__5457__auto___34586 = cljs.core.seq.call(null,seq__34430_34492);
if(temp__5457__auto___34586){
var seq__34430_34587__$1 = temp__5457__auto___34586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34430_34587__$1)){
var c__4319__auto___34588 = cljs.core.chunk_first.call(null,seq__34430_34587__$1);
var G__34589 = cljs.core.chunk_rest.call(null,seq__34430_34587__$1);
var G__34590 = c__4319__auto___34588;
var G__34591 = cljs.core.count.call(null,c__4319__auto___34588);
var G__34592 = (0);
seq__34430_34492 = G__34589;
chunk__34431_34493 = G__34590;
count__34432_34494 = G__34591;
i__34433_34495 = G__34592;
continue;
} else {
var vec__34463_34593 = cljs.core.first.call(null,seq__34430_34587__$1);
var line_34594 = cljs.core.nth.call(null,vec__34463_34593,(0),null);
var columns_34595 = cljs.core.nth.call(null,vec__34463_34593,(1),null);
var seq__34466_34596 = cljs.core.seq.call(null,columns_34595);
var chunk__34467_34597 = null;
var count__34468_34598 = (0);
var i__34469_34599 = (0);
while(true){
if((i__34469_34599 < count__34468_34598)){
var vec__34470_34600 = cljs.core._nth.call(null,chunk__34467_34597,i__34469_34599);
var column_34601 = cljs.core.nth.call(null,vec__34470_34600,(0),null);
var column_info_34602 = cljs.core.nth.call(null,vec__34470_34600,(1),null);
var seq__34473_34603 = cljs.core.seq.call(null,column_info_34602);
var chunk__34474_34604 = null;
var count__34475_34605 = (0);
var i__34476_34606 = (0);
while(true){
if((i__34476_34606 < count__34475_34605)){
var map__34477_34607 = cljs.core._nth.call(null,chunk__34474_34604,i__34476_34606);
var map__34477_34608__$1 = ((((!((map__34477_34607 == null)))?(((((map__34477_34607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34477_34607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34477_34607):map__34477_34607);
var gline_34609 = cljs.core.get.call(null,map__34477_34608__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34610 = cljs.core.get.call(null,map__34477_34608__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34611 = cljs.core.get.call(null,map__34477_34608__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34609], null),cljs.core.fnil.call(null,((function (seq__34473_34603,chunk__34474_34604,count__34475_34605,i__34476_34606,seq__34466_34596,chunk__34467_34597,count__34468_34598,i__34469_34599,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34477_34607,map__34477_34608__$1,gline_34609,gcol_34610,name_34611,vec__34470_34600,column_34601,column_info_34602,vec__34463_34593,line_34594,columns_34595,seq__34430_34587__$1,temp__5457__auto___34586,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34610], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34594,new cljs.core.Keyword(null,"col","col",-1959363084),column_34601,new cljs.core.Keyword(null,"name","name",1843675177),name_34611], null));
});})(seq__34473_34603,chunk__34474_34604,count__34475_34605,i__34476_34606,seq__34466_34596,chunk__34467_34597,count__34468_34598,i__34469_34599,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34477_34607,map__34477_34608__$1,gline_34609,gcol_34610,name_34611,vec__34470_34600,column_34601,column_info_34602,vec__34463_34593,line_34594,columns_34595,seq__34430_34587__$1,temp__5457__auto___34586,inverted))
,cljs.core.sorted_map.call(null)));


var G__34612 = seq__34473_34603;
var G__34613 = chunk__34474_34604;
var G__34614 = count__34475_34605;
var G__34615 = (i__34476_34606 + (1));
seq__34473_34603 = G__34612;
chunk__34474_34604 = G__34613;
count__34475_34605 = G__34614;
i__34476_34606 = G__34615;
continue;
} else {
var temp__5457__auto___34616__$1 = cljs.core.seq.call(null,seq__34473_34603);
if(temp__5457__auto___34616__$1){
var seq__34473_34617__$1 = temp__5457__auto___34616__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34473_34617__$1)){
var c__4319__auto___34618 = cljs.core.chunk_first.call(null,seq__34473_34617__$1);
var G__34619 = cljs.core.chunk_rest.call(null,seq__34473_34617__$1);
var G__34620 = c__4319__auto___34618;
var G__34621 = cljs.core.count.call(null,c__4319__auto___34618);
var G__34622 = (0);
seq__34473_34603 = G__34619;
chunk__34474_34604 = G__34620;
count__34475_34605 = G__34621;
i__34476_34606 = G__34622;
continue;
} else {
var map__34479_34623 = cljs.core.first.call(null,seq__34473_34617__$1);
var map__34479_34624__$1 = ((((!((map__34479_34623 == null)))?(((((map__34479_34623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34479_34623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34479_34623):map__34479_34623);
var gline_34625 = cljs.core.get.call(null,map__34479_34624__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34626 = cljs.core.get.call(null,map__34479_34624__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34627 = cljs.core.get.call(null,map__34479_34624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34625], null),cljs.core.fnil.call(null,((function (seq__34473_34603,chunk__34474_34604,count__34475_34605,i__34476_34606,seq__34466_34596,chunk__34467_34597,count__34468_34598,i__34469_34599,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34479_34623,map__34479_34624__$1,gline_34625,gcol_34626,name_34627,seq__34473_34617__$1,temp__5457__auto___34616__$1,vec__34470_34600,column_34601,column_info_34602,vec__34463_34593,line_34594,columns_34595,seq__34430_34587__$1,temp__5457__auto___34586,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34626], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34594,new cljs.core.Keyword(null,"col","col",-1959363084),column_34601,new cljs.core.Keyword(null,"name","name",1843675177),name_34627], null));
});})(seq__34473_34603,chunk__34474_34604,count__34475_34605,i__34476_34606,seq__34466_34596,chunk__34467_34597,count__34468_34598,i__34469_34599,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34479_34623,map__34479_34624__$1,gline_34625,gcol_34626,name_34627,seq__34473_34617__$1,temp__5457__auto___34616__$1,vec__34470_34600,column_34601,column_info_34602,vec__34463_34593,line_34594,columns_34595,seq__34430_34587__$1,temp__5457__auto___34586,inverted))
,cljs.core.sorted_map.call(null)));


var G__34628 = cljs.core.next.call(null,seq__34473_34617__$1);
var G__34629 = null;
var G__34630 = (0);
var G__34631 = (0);
seq__34473_34603 = G__34628;
chunk__34474_34604 = G__34629;
count__34475_34605 = G__34630;
i__34476_34606 = G__34631;
continue;
}
} else {
}
}
break;
}


var G__34632 = seq__34466_34596;
var G__34633 = chunk__34467_34597;
var G__34634 = count__34468_34598;
var G__34635 = (i__34469_34599 + (1));
seq__34466_34596 = G__34632;
chunk__34467_34597 = G__34633;
count__34468_34598 = G__34634;
i__34469_34599 = G__34635;
continue;
} else {
var temp__5457__auto___34636__$1 = cljs.core.seq.call(null,seq__34466_34596);
if(temp__5457__auto___34636__$1){
var seq__34466_34637__$1 = temp__5457__auto___34636__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34466_34637__$1)){
var c__4319__auto___34638 = cljs.core.chunk_first.call(null,seq__34466_34637__$1);
var G__34639 = cljs.core.chunk_rest.call(null,seq__34466_34637__$1);
var G__34640 = c__4319__auto___34638;
var G__34641 = cljs.core.count.call(null,c__4319__auto___34638);
var G__34642 = (0);
seq__34466_34596 = G__34639;
chunk__34467_34597 = G__34640;
count__34468_34598 = G__34641;
i__34469_34599 = G__34642;
continue;
} else {
var vec__34481_34643 = cljs.core.first.call(null,seq__34466_34637__$1);
var column_34644 = cljs.core.nth.call(null,vec__34481_34643,(0),null);
var column_info_34645 = cljs.core.nth.call(null,vec__34481_34643,(1),null);
var seq__34484_34646 = cljs.core.seq.call(null,column_info_34645);
var chunk__34485_34647 = null;
var count__34486_34648 = (0);
var i__34487_34649 = (0);
while(true){
if((i__34487_34649 < count__34486_34648)){
var map__34488_34650 = cljs.core._nth.call(null,chunk__34485_34647,i__34487_34649);
var map__34488_34651__$1 = ((((!((map__34488_34650 == null)))?(((((map__34488_34650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34488_34650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34488_34650):map__34488_34650);
var gline_34652 = cljs.core.get.call(null,map__34488_34651__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34653 = cljs.core.get.call(null,map__34488_34651__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34654 = cljs.core.get.call(null,map__34488_34651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34652], null),cljs.core.fnil.call(null,((function (seq__34484_34646,chunk__34485_34647,count__34486_34648,i__34487_34649,seq__34466_34596,chunk__34467_34597,count__34468_34598,i__34469_34599,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34488_34650,map__34488_34651__$1,gline_34652,gcol_34653,name_34654,vec__34481_34643,column_34644,column_info_34645,seq__34466_34637__$1,temp__5457__auto___34636__$1,vec__34463_34593,line_34594,columns_34595,seq__34430_34587__$1,temp__5457__auto___34586,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34653], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34594,new cljs.core.Keyword(null,"col","col",-1959363084),column_34644,new cljs.core.Keyword(null,"name","name",1843675177),name_34654], null));
});})(seq__34484_34646,chunk__34485_34647,count__34486_34648,i__34487_34649,seq__34466_34596,chunk__34467_34597,count__34468_34598,i__34469_34599,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34488_34650,map__34488_34651__$1,gline_34652,gcol_34653,name_34654,vec__34481_34643,column_34644,column_info_34645,seq__34466_34637__$1,temp__5457__auto___34636__$1,vec__34463_34593,line_34594,columns_34595,seq__34430_34587__$1,temp__5457__auto___34586,inverted))
,cljs.core.sorted_map.call(null)));


var G__34655 = seq__34484_34646;
var G__34656 = chunk__34485_34647;
var G__34657 = count__34486_34648;
var G__34658 = (i__34487_34649 + (1));
seq__34484_34646 = G__34655;
chunk__34485_34647 = G__34656;
count__34486_34648 = G__34657;
i__34487_34649 = G__34658;
continue;
} else {
var temp__5457__auto___34659__$2 = cljs.core.seq.call(null,seq__34484_34646);
if(temp__5457__auto___34659__$2){
var seq__34484_34660__$1 = temp__5457__auto___34659__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34484_34660__$1)){
var c__4319__auto___34661 = cljs.core.chunk_first.call(null,seq__34484_34660__$1);
var G__34662 = cljs.core.chunk_rest.call(null,seq__34484_34660__$1);
var G__34663 = c__4319__auto___34661;
var G__34664 = cljs.core.count.call(null,c__4319__auto___34661);
var G__34665 = (0);
seq__34484_34646 = G__34662;
chunk__34485_34647 = G__34663;
count__34486_34648 = G__34664;
i__34487_34649 = G__34665;
continue;
} else {
var map__34490_34666 = cljs.core.first.call(null,seq__34484_34660__$1);
var map__34490_34667__$1 = ((((!((map__34490_34666 == null)))?(((((map__34490_34666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34490_34666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34490_34666):map__34490_34666);
var gline_34668 = cljs.core.get.call(null,map__34490_34667__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34669 = cljs.core.get.call(null,map__34490_34667__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34670 = cljs.core.get.call(null,map__34490_34667__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34668], null),cljs.core.fnil.call(null,((function (seq__34484_34646,chunk__34485_34647,count__34486_34648,i__34487_34649,seq__34466_34596,chunk__34467_34597,count__34468_34598,i__34469_34599,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34490_34666,map__34490_34667__$1,gline_34668,gcol_34669,name_34670,seq__34484_34660__$1,temp__5457__auto___34659__$2,vec__34481_34643,column_34644,column_info_34645,seq__34466_34637__$1,temp__5457__auto___34636__$1,vec__34463_34593,line_34594,columns_34595,seq__34430_34587__$1,temp__5457__auto___34586,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34669], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34594,new cljs.core.Keyword(null,"col","col",-1959363084),column_34644,new cljs.core.Keyword(null,"name","name",1843675177),name_34670], null));
});})(seq__34484_34646,chunk__34485_34647,count__34486_34648,i__34487_34649,seq__34466_34596,chunk__34467_34597,count__34468_34598,i__34469_34599,seq__34430_34492,chunk__34431_34493,count__34432_34494,i__34433_34495,map__34490_34666,map__34490_34667__$1,gline_34668,gcol_34669,name_34670,seq__34484_34660__$1,temp__5457__auto___34659__$2,vec__34481_34643,column_34644,column_info_34645,seq__34466_34637__$1,temp__5457__auto___34636__$1,vec__34463_34593,line_34594,columns_34595,seq__34430_34587__$1,temp__5457__auto___34586,inverted))
,cljs.core.sorted_map.call(null)));


var G__34671 = cljs.core.next.call(null,seq__34484_34660__$1);
var G__34672 = null;
var G__34673 = (0);
var G__34674 = (0);
seq__34484_34646 = G__34671;
chunk__34485_34647 = G__34672;
count__34486_34648 = G__34673;
i__34487_34649 = G__34674;
continue;
}
} else {
}
}
break;
}


var G__34675 = cljs.core.next.call(null,seq__34466_34637__$1);
var G__34676 = null;
var G__34677 = (0);
var G__34678 = (0);
seq__34466_34596 = G__34675;
chunk__34467_34597 = G__34676;
count__34468_34598 = G__34677;
i__34469_34599 = G__34678;
continue;
}
} else {
}
}
break;
}


var G__34679 = cljs.core.next.call(null,seq__34430_34587__$1);
var G__34680 = null;
var G__34681 = (0);
var G__34682 = (0);
seq__34430_34492 = G__34679;
chunk__34431_34493 = G__34680;
count__34432_34494 = G__34681;
i__34433_34495 = G__34682;
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
