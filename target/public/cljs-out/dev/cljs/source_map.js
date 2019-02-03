// Compiled by ClojureScript 1.10.516 {}
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
return cljs.core.reduce.call(null,(function (m,p__10107){
var vec__10108 = p__10107;
var i = cljs.core.nth.call(null,vec__10108,(0),null);
var v = cljs.core.nth.call(null,vec__10108,(1),null);
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
var vec__10111 = seg;
var gcol = cljs.core.nth.call(null,vec__10111,(0),null);
var source = cljs.core.nth.call(null,vec__10111,(1),null);
var line = cljs.core.nth.call(null,vec__10111,(2),null);
var col = cljs.core.nth.call(null,vec__10111,(3),null);
var name = cljs.core.nth.call(null,vec__10111,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
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
var vec__10114 = seg;
var gcol = cljs.core.nth.call(null,vec__10114,(0),null);
var source = cljs.core.nth.call(null,vec__10114,(1),null);
var line = cljs.core.nth.call(null,vec__10114,(2),null);
var col = cljs.core.nth.call(null,vec__10114,(3),null);
var name = cljs.core.nth.call(null,vec__10114,(4),null);
var vec__10117 = relseg;
var rgcol = cljs.core.nth.call(null,vec__10117,(0),null);
var rsource = cljs.core.nth.call(null,vec__10117,(1),null);
var rline = cljs.core.nth.call(null,vec__10117,(2),null);
var rcol = cljs.core.nth.call(null,vec__10117,(3),null);
var rname = cljs.core.nth.call(null,vec__10117,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var map__10120 = segmap;
var map__10120__$1 = (((((!((map__10120 == null))))?(((((map__10120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10120):map__10120);
var gcol = cljs.core.get.call(null,map__10120__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10120__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10120__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10120__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10120__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__10120,map__10120__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__10120,map__10120__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__10120,map__10120__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__10120,map__10120__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10120,map__10120__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__10120,map__10120__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__10123 = arguments.length;
switch (G__10123) {
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
var vec__10127 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10131 = cljs.core.next.call(null,segs__$1);
var G__10132 = nrelseg;
var G__10133 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10131;
relseg__$1 = G__10132;
result__$1 = G__10133;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10127,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10127,(1),null);
var G__10134 = (gline + (1));
var G__10135 = cljs.core.next.call(null,lines__$1);
var G__10136 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10137 = result__$1;
gline = G__10134;
lines__$1 = G__10135;
relseg = G__10136;
result = G__10137;
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
var map__10139 = segmap;
var map__10139__$1 = (((((!((map__10139 == null))))?(((((map__10139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10139):map__10139);
var gcol = cljs.core.get.call(null,map__10139__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10139__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10139__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10139__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10139__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__10139,map__10139__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__10139,map__10139__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__10138_SHARP_){
return cljs.core.conj.call(null,p1__10138_SHARP_,d__$1);
});})(map__10139,map__10139__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10139,map__10139__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__10142 = arguments.length;
switch (G__10142) {
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
var vec__10146 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10150 = cljs.core.next.call(null,segs__$1);
var G__10151 = nrelseg;
var G__10152 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10150;
relseg__$1 = G__10151;
result__$1 = G__10152;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10146,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10146,(1),null);
var G__10153 = (gline + (1));
var G__10154 = cljs.core.next.call(null,lines__$1);
var G__10155 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10156 = result__$1;
gline = G__10153;
lines__$1 = G__10154;
relseg = G__10155;
result = G__10156;
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
return (function (p__10157){
var vec__10158 = p__10157;
var _ = cljs.core.nth.call(null,vec__10158,(0),null);
var source = cljs.core.nth.call(null,vec__10158,(1),null);
var line = cljs.core.nth.call(null,vec__10158,(2),null);
var col = cljs.core.nth.call(null,vec__10158,(3),null);
var name = cljs.core.nth.call(null,vec__10158,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__10161){
var vec__10162 = p__10161;
var gcol = cljs.core.nth.call(null,vec__10162,(0),null);
var sidx = cljs.core.nth.call(null,vec__10162,(1),null);
var line = cljs.core.nth.call(null,vec__10162,(2),null);
var col = cljs.core.nth.call(null,vec__10162,(3),null);
var name = cljs.core.nth.call(null,vec__10162,(4),null);
var seg = vec__10162;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__10162,gcol,sidx,line,col,name,seg,relseg){
return (function (p__10165){
var vec__10166 = p__10165;
var _ = cljs.core.nth.call(null,vec__10166,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10166,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10166,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10166,(3),null);
var lname = cljs.core.nth.call(null,vec__10166,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__10162,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
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
var seq__10172 = cljs.core.seq.call(null,infos);
var chunk__10173 = null;
var count__10174 = (0);
var i__10175 = (0);
while(true){
if((i__10175 < count__10174)){
var info = cljs.core._nth.call(null,chunk__10173,i__10175);
var segv_10526 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10527 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10528 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10527 > (lc_10528 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10172,chunk__10173,count__10174,i__10175,segv_10526,gline_10527,lc_10528,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10527 - (lc_10528 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10526], null));
});})(seq__10172,chunk__10173,count__10174,i__10175,segv_10526,gline_10527,lc_10528,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10172,chunk__10173,count__10174,i__10175,segv_10526,gline_10527,lc_10528,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10527], null),cljs.core.conj,segv_10526);
});})(seq__10172,chunk__10173,count__10174,i__10175,segv_10526,gline_10527,lc_10528,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10529 = seq__10172;
var G__10530 = chunk__10173;
var G__10531 = count__10174;
var G__10532 = (i__10175 + (1));
seq__10172 = G__10529;
chunk__10173 = G__10530;
count__10174 = G__10531;
i__10175 = G__10532;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10172);
if(temp__5720__auto__){
var seq__10172__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10172__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10172__$1);
var G__10533 = cljs.core.chunk_rest.call(null,seq__10172__$1);
var G__10534 = c__4550__auto__;
var G__10535 = cljs.core.count.call(null,c__4550__auto__);
var G__10536 = (0);
seq__10172 = G__10533;
chunk__10173 = G__10534;
count__10174 = G__10535;
i__10175 = G__10536;
continue;
} else {
var info = cljs.core.first.call(null,seq__10172__$1);
var segv_10537 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10538 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10539 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10538 > (lc_10539 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10172,chunk__10173,count__10174,i__10175,segv_10537,gline_10538,lc_10539,info,seq__10172__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10538 - (lc_10539 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10537], null));
});})(seq__10172,chunk__10173,count__10174,i__10175,segv_10537,gline_10538,lc_10539,info,seq__10172__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10172,chunk__10173,count__10174,i__10175,segv_10537,gline_10538,lc_10539,info,seq__10172__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10538], null),cljs.core.conj,segv_10537);
});})(seq__10172,chunk__10173,count__10174,i__10175,segv_10537,gline_10538,lc_10539,info,seq__10172__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10540 = cljs.core.next.call(null,seq__10172__$1);
var G__10541 = null;
var G__10542 = (0);
var G__10543 = (0);
seq__10172 = G__10540;
chunk__10173 = G__10541;
count__10174 = G__10542;
i__10175 = G__10543;
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
var seq__10176_10544 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__10177_10545 = null;
var count__10178_10546 = (0);
var i__10179_10547 = (0);
while(true){
if((i__10179_10547 < count__10178_10546)){
var vec__10352_10548 = cljs.core._nth.call(null,chunk__10177_10545,i__10179_10547);
var source_idx_10549 = cljs.core.nth.call(null,vec__10352_10548,(0),null);
var vec__10355_10550 = cljs.core.nth.call(null,vec__10352_10548,(1),null);
var __10551 = cljs.core.nth.call(null,vec__10355_10550,(0),null);
var lines_10552__$1 = cljs.core.nth.call(null,vec__10355_10550,(1),null);
var seq__10358_10553 = cljs.core.seq.call(null,lines_10552__$1);
var chunk__10359_10554 = null;
var count__10360_10555 = (0);
var i__10361_10556 = (0);
while(true){
if((i__10361_10556 < count__10360_10555)){
var vec__10400_10557 = cljs.core._nth.call(null,chunk__10359_10554,i__10361_10556);
var line_10558 = cljs.core.nth.call(null,vec__10400_10557,(0),null);
var cols_10559 = cljs.core.nth.call(null,vec__10400_10557,(1),null);
var seq__10403_10560 = cljs.core.seq.call(null,cols_10559);
var chunk__10404_10561 = null;
var count__10405_10562 = (0);
var i__10406_10563 = (0);
while(true){
if((i__10406_10563 < count__10405_10562)){
var vec__10413_10564 = cljs.core._nth.call(null,chunk__10404_10561,i__10406_10563);
var col_10565 = cljs.core.nth.call(null,vec__10413_10564,(0),null);
var infos_10566 = cljs.core.nth.call(null,vec__10413_10564,(1),null);
encode_cols.call(null,infos_10566,source_idx_10549,line_10558,col_10565);


var G__10567 = seq__10403_10560;
var G__10568 = chunk__10404_10561;
var G__10569 = count__10405_10562;
var G__10570 = (i__10406_10563 + (1));
seq__10403_10560 = G__10567;
chunk__10404_10561 = G__10568;
count__10405_10562 = G__10569;
i__10406_10563 = G__10570;
continue;
} else {
var temp__5720__auto___10571 = cljs.core.seq.call(null,seq__10403_10560);
if(temp__5720__auto___10571){
var seq__10403_10572__$1 = temp__5720__auto___10571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10403_10572__$1)){
var c__4550__auto___10573 = cljs.core.chunk_first.call(null,seq__10403_10572__$1);
var G__10574 = cljs.core.chunk_rest.call(null,seq__10403_10572__$1);
var G__10575 = c__4550__auto___10573;
var G__10576 = cljs.core.count.call(null,c__4550__auto___10573);
var G__10577 = (0);
seq__10403_10560 = G__10574;
chunk__10404_10561 = G__10575;
count__10405_10562 = G__10576;
i__10406_10563 = G__10577;
continue;
} else {
var vec__10416_10578 = cljs.core.first.call(null,seq__10403_10572__$1);
var col_10579 = cljs.core.nth.call(null,vec__10416_10578,(0),null);
var infos_10580 = cljs.core.nth.call(null,vec__10416_10578,(1),null);
encode_cols.call(null,infos_10580,source_idx_10549,line_10558,col_10579);


var G__10581 = cljs.core.next.call(null,seq__10403_10572__$1);
var G__10582 = null;
var G__10583 = (0);
var G__10584 = (0);
seq__10403_10560 = G__10581;
chunk__10404_10561 = G__10582;
count__10405_10562 = G__10583;
i__10406_10563 = G__10584;
continue;
}
} else {
}
}
break;
}


var G__10585 = seq__10358_10553;
var G__10586 = chunk__10359_10554;
var G__10587 = count__10360_10555;
var G__10588 = (i__10361_10556 + (1));
seq__10358_10553 = G__10585;
chunk__10359_10554 = G__10586;
count__10360_10555 = G__10587;
i__10361_10556 = G__10588;
continue;
} else {
var temp__5720__auto___10589 = cljs.core.seq.call(null,seq__10358_10553);
if(temp__5720__auto___10589){
var seq__10358_10590__$1 = temp__5720__auto___10589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10358_10590__$1)){
var c__4550__auto___10591 = cljs.core.chunk_first.call(null,seq__10358_10590__$1);
var G__10592 = cljs.core.chunk_rest.call(null,seq__10358_10590__$1);
var G__10593 = c__4550__auto___10591;
var G__10594 = cljs.core.count.call(null,c__4550__auto___10591);
var G__10595 = (0);
seq__10358_10553 = G__10592;
chunk__10359_10554 = G__10593;
count__10360_10555 = G__10594;
i__10361_10556 = G__10595;
continue;
} else {
var vec__10419_10596 = cljs.core.first.call(null,seq__10358_10590__$1);
var line_10597 = cljs.core.nth.call(null,vec__10419_10596,(0),null);
var cols_10598 = cljs.core.nth.call(null,vec__10419_10596,(1),null);
var seq__10422_10599 = cljs.core.seq.call(null,cols_10598);
var chunk__10423_10600 = null;
var count__10424_10601 = (0);
var i__10425_10602 = (0);
while(true){
if((i__10425_10602 < count__10424_10601)){
var vec__10432_10603 = cljs.core._nth.call(null,chunk__10423_10600,i__10425_10602);
var col_10604 = cljs.core.nth.call(null,vec__10432_10603,(0),null);
var infos_10605 = cljs.core.nth.call(null,vec__10432_10603,(1),null);
encode_cols.call(null,infos_10605,source_idx_10549,line_10597,col_10604);


var G__10606 = seq__10422_10599;
var G__10607 = chunk__10423_10600;
var G__10608 = count__10424_10601;
var G__10609 = (i__10425_10602 + (1));
seq__10422_10599 = G__10606;
chunk__10423_10600 = G__10607;
count__10424_10601 = G__10608;
i__10425_10602 = G__10609;
continue;
} else {
var temp__5720__auto___10610__$1 = cljs.core.seq.call(null,seq__10422_10599);
if(temp__5720__auto___10610__$1){
var seq__10422_10611__$1 = temp__5720__auto___10610__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10422_10611__$1)){
var c__4550__auto___10612 = cljs.core.chunk_first.call(null,seq__10422_10611__$1);
var G__10613 = cljs.core.chunk_rest.call(null,seq__10422_10611__$1);
var G__10614 = c__4550__auto___10612;
var G__10615 = cljs.core.count.call(null,c__4550__auto___10612);
var G__10616 = (0);
seq__10422_10599 = G__10613;
chunk__10423_10600 = G__10614;
count__10424_10601 = G__10615;
i__10425_10602 = G__10616;
continue;
} else {
var vec__10435_10617 = cljs.core.first.call(null,seq__10422_10611__$1);
var col_10618 = cljs.core.nth.call(null,vec__10435_10617,(0),null);
var infos_10619 = cljs.core.nth.call(null,vec__10435_10617,(1),null);
encode_cols.call(null,infos_10619,source_idx_10549,line_10597,col_10618);


var G__10620 = cljs.core.next.call(null,seq__10422_10611__$1);
var G__10621 = null;
var G__10622 = (0);
var G__10623 = (0);
seq__10422_10599 = G__10620;
chunk__10423_10600 = G__10621;
count__10424_10601 = G__10622;
i__10425_10602 = G__10623;
continue;
}
} else {
}
}
break;
}


var G__10624 = cljs.core.next.call(null,seq__10358_10590__$1);
var G__10625 = null;
var G__10626 = (0);
var G__10627 = (0);
seq__10358_10553 = G__10624;
chunk__10359_10554 = G__10625;
count__10360_10555 = G__10626;
i__10361_10556 = G__10627;
continue;
}
} else {
}
}
break;
}


var G__10628 = seq__10176_10544;
var G__10629 = chunk__10177_10545;
var G__10630 = count__10178_10546;
var G__10631 = (i__10179_10547 + (1));
seq__10176_10544 = G__10628;
chunk__10177_10545 = G__10629;
count__10178_10546 = G__10630;
i__10179_10547 = G__10631;
continue;
} else {
var temp__5720__auto___10632 = cljs.core.seq.call(null,seq__10176_10544);
if(temp__5720__auto___10632){
var seq__10176_10633__$1 = temp__5720__auto___10632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10176_10633__$1)){
var c__4550__auto___10634 = cljs.core.chunk_first.call(null,seq__10176_10633__$1);
var G__10635 = cljs.core.chunk_rest.call(null,seq__10176_10633__$1);
var G__10636 = c__4550__auto___10634;
var G__10637 = cljs.core.count.call(null,c__4550__auto___10634);
var G__10638 = (0);
seq__10176_10544 = G__10635;
chunk__10177_10545 = G__10636;
count__10178_10546 = G__10637;
i__10179_10547 = G__10638;
continue;
} else {
var vec__10438_10639 = cljs.core.first.call(null,seq__10176_10633__$1);
var source_idx_10640 = cljs.core.nth.call(null,vec__10438_10639,(0),null);
var vec__10441_10641 = cljs.core.nth.call(null,vec__10438_10639,(1),null);
var __10642 = cljs.core.nth.call(null,vec__10441_10641,(0),null);
var lines_10643__$1 = cljs.core.nth.call(null,vec__10441_10641,(1),null);
var seq__10444_10644 = cljs.core.seq.call(null,lines_10643__$1);
var chunk__10445_10645 = null;
var count__10446_10646 = (0);
var i__10447_10647 = (0);
while(true){
if((i__10447_10647 < count__10446_10646)){
var vec__10486_10648 = cljs.core._nth.call(null,chunk__10445_10645,i__10447_10647);
var line_10649 = cljs.core.nth.call(null,vec__10486_10648,(0),null);
var cols_10650 = cljs.core.nth.call(null,vec__10486_10648,(1),null);
var seq__10489_10651 = cljs.core.seq.call(null,cols_10650);
var chunk__10490_10652 = null;
var count__10491_10653 = (0);
var i__10492_10654 = (0);
while(true){
if((i__10492_10654 < count__10491_10653)){
var vec__10499_10655 = cljs.core._nth.call(null,chunk__10490_10652,i__10492_10654);
var col_10656 = cljs.core.nth.call(null,vec__10499_10655,(0),null);
var infos_10657 = cljs.core.nth.call(null,vec__10499_10655,(1),null);
encode_cols.call(null,infos_10657,source_idx_10640,line_10649,col_10656);


var G__10658 = seq__10489_10651;
var G__10659 = chunk__10490_10652;
var G__10660 = count__10491_10653;
var G__10661 = (i__10492_10654 + (1));
seq__10489_10651 = G__10658;
chunk__10490_10652 = G__10659;
count__10491_10653 = G__10660;
i__10492_10654 = G__10661;
continue;
} else {
var temp__5720__auto___10662__$1 = cljs.core.seq.call(null,seq__10489_10651);
if(temp__5720__auto___10662__$1){
var seq__10489_10663__$1 = temp__5720__auto___10662__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10489_10663__$1)){
var c__4550__auto___10664 = cljs.core.chunk_first.call(null,seq__10489_10663__$1);
var G__10665 = cljs.core.chunk_rest.call(null,seq__10489_10663__$1);
var G__10666 = c__4550__auto___10664;
var G__10667 = cljs.core.count.call(null,c__4550__auto___10664);
var G__10668 = (0);
seq__10489_10651 = G__10665;
chunk__10490_10652 = G__10666;
count__10491_10653 = G__10667;
i__10492_10654 = G__10668;
continue;
} else {
var vec__10502_10669 = cljs.core.first.call(null,seq__10489_10663__$1);
var col_10670 = cljs.core.nth.call(null,vec__10502_10669,(0),null);
var infos_10671 = cljs.core.nth.call(null,vec__10502_10669,(1),null);
encode_cols.call(null,infos_10671,source_idx_10640,line_10649,col_10670);


var G__10672 = cljs.core.next.call(null,seq__10489_10663__$1);
var G__10673 = null;
var G__10674 = (0);
var G__10675 = (0);
seq__10489_10651 = G__10672;
chunk__10490_10652 = G__10673;
count__10491_10653 = G__10674;
i__10492_10654 = G__10675;
continue;
}
} else {
}
}
break;
}


var G__10676 = seq__10444_10644;
var G__10677 = chunk__10445_10645;
var G__10678 = count__10446_10646;
var G__10679 = (i__10447_10647 + (1));
seq__10444_10644 = G__10676;
chunk__10445_10645 = G__10677;
count__10446_10646 = G__10678;
i__10447_10647 = G__10679;
continue;
} else {
var temp__5720__auto___10680__$1 = cljs.core.seq.call(null,seq__10444_10644);
if(temp__5720__auto___10680__$1){
var seq__10444_10681__$1 = temp__5720__auto___10680__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10444_10681__$1)){
var c__4550__auto___10682 = cljs.core.chunk_first.call(null,seq__10444_10681__$1);
var G__10683 = cljs.core.chunk_rest.call(null,seq__10444_10681__$1);
var G__10684 = c__4550__auto___10682;
var G__10685 = cljs.core.count.call(null,c__4550__auto___10682);
var G__10686 = (0);
seq__10444_10644 = G__10683;
chunk__10445_10645 = G__10684;
count__10446_10646 = G__10685;
i__10447_10647 = G__10686;
continue;
} else {
var vec__10505_10687 = cljs.core.first.call(null,seq__10444_10681__$1);
var line_10688 = cljs.core.nth.call(null,vec__10505_10687,(0),null);
var cols_10689 = cljs.core.nth.call(null,vec__10505_10687,(1),null);
var seq__10508_10690 = cljs.core.seq.call(null,cols_10689);
var chunk__10509_10691 = null;
var count__10510_10692 = (0);
var i__10511_10693 = (0);
while(true){
if((i__10511_10693 < count__10510_10692)){
var vec__10518_10694 = cljs.core._nth.call(null,chunk__10509_10691,i__10511_10693);
var col_10695 = cljs.core.nth.call(null,vec__10518_10694,(0),null);
var infos_10696 = cljs.core.nth.call(null,vec__10518_10694,(1),null);
encode_cols.call(null,infos_10696,source_idx_10640,line_10688,col_10695);


var G__10697 = seq__10508_10690;
var G__10698 = chunk__10509_10691;
var G__10699 = count__10510_10692;
var G__10700 = (i__10511_10693 + (1));
seq__10508_10690 = G__10697;
chunk__10509_10691 = G__10698;
count__10510_10692 = G__10699;
i__10511_10693 = G__10700;
continue;
} else {
var temp__5720__auto___10701__$2 = cljs.core.seq.call(null,seq__10508_10690);
if(temp__5720__auto___10701__$2){
var seq__10508_10702__$1 = temp__5720__auto___10701__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10508_10702__$1)){
var c__4550__auto___10703 = cljs.core.chunk_first.call(null,seq__10508_10702__$1);
var G__10704 = cljs.core.chunk_rest.call(null,seq__10508_10702__$1);
var G__10705 = c__4550__auto___10703;
var G__10706 = cljs.core.count.call(null,c__4550__auto___10703);
var G__10707 = (0);
seq__10508_10690 = G__10704;
chunk__10509_10691 = G__10705;
count__10510_10692 = G__10706;
i__10511_10693 = G__10707;
continue;
} else {
var vec__10521_10708 = cljs.core.first.call(null,seq__10508_10702__$1);
var col_10709 = cljs.core.nth.call(null,vec__10521_10708,(0),null);
var infos_10710 = cljs.core.nth.call(null,vec__10521_10708,(1),null);
encode_cols.call(null,infos_10710,source_idx_10640,line_10688,col_10709);


var G__10711 = cljs.core.next.call(null,seq__10508_10702__$1);
var G__10712 = null;
var G__10713 = (0);
var G__10714 = (0);
seq__10508_10690 = G__10711;
chunk__10509_10691 = G__10712;
count__10510_10692 = G__10713;
i__10511_10693 = G__10714;
continue;
}
} else {
}
}
break;
}


var G__10715 = cljs.core.next.call(null,seq__10444_10681__$1);
var G__10716 = null;
var G__10717 = (0);
var G__10718 = (0);
seq__10444_10644 = G__10715;
chunk__10445_10645 = G__10716;
count__10446_10646 = G__10717;
i__10447_10647 = G__10718;
continue;
}
} else {
}
}
break;
}


var G__10719 = cljs.core.next.call(null,seq__10176_10633__$1);
var G__10720 = null;
var G__10721 = (0);
var G__10722 = (0);
seq__10176_10544 = G__10719;
chunk__10177_10545 = G__10720;
count__10178_10546 = G__10721;
i__10179_10547 = G__10722;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__10524 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10169_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10169_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10170_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__10170_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10171_SHARP_){
return clojure.string.join.call(null,",",p1__10171_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__10525 = G__10524;
goog.object.set(G__10525,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__10525;
} else {
return G__10524;
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
var vec__10723 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__10723,(0),null);
var col_map = cljs.core.nth.call(null,vec__10723,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__10726 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__10726,(0),null);
var infos = cljs.core.nth.call(null,vec__10726,(1),null);
var G__10732 = cljs.core.next.call(null,col_map_seq);
var G__10733 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__10726,col,infos,vec__10723,line,col_map){
return (function (v,p__10729){
var map__10730 = p__10729;
var map__10730__$1 = (((((!((map__10730 == null))))?(((((map__10730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10730):map__10730);
var gline = cljs.core.get.call(null,map__10730__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__10730__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__10726,col,infos,vec__10723,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__10732;
new_cols = G__10733;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__10734 = cljs.core.next.call(null,line_map_seq);
var G__10735 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__10734;
new_lines = G__10735;
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
var seq__10736_11008 = cljs.core.seq.call(null,reverse_map);
var chunk__10737_11009 = null;
var count__10738_11010 = (0);
var i__10739_11011 = (0);
while(true){
if((i__10739_11011 < count__10738_11010)){
var vec__10874_11012 = cljs.core._nth.call(null,chunk__10737_11009,i__10739_11011);
var line_11013 = cljs.core.nth.call(null,vec__10874_11012,(0),null);
var columns_11014 = cljs.core.nth.call(null,vec__10874_11012,(1),null);
var seq__10877_11015 = cljs.core.seq.call(null,columns_11014);
var chunk__10878_11016 = null;
var count__10879_11017 = (0);
var i__10880_11018 = (0);
while(true){
if((i__10880_11018 < count__10879_11017)){
var vec__10911_11019 = cljs.core._nth.call(null,chunk__10878_11016,i__10880_11018);
var column_11020 = cljs.core.nth.call(null,vec__10911_11019,(0),null);
var column_info_11021 = cljs.core.nth.call(null,vec__10911_11019,(1),null);
var seq__10914_11022 = cljs.core.seq.call(null,column_info_11021);
var chunk__10915_11023 = null;
var count__10916_11024 = (0);
var i__10917_11025 = (0);
while(true){
if((i__10917_11025 < count__10916_11024)){
var map__10922_11026 = cljs.core._nth.call(null,chunk__10915_11023,i__10917_11025);
var map__10922_11027__$1 = (((((!((map__10922_11026 == null))))?(((((map__10922_11026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10922_11026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10922_11026):map__10922_11026);
var gline_11028 = cljs.core.get.call(null,map__10922_11027__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11029 = cljs.core.get.call(null,map__10922_11027__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11030 = cljs.core.get.call(null,map__10922_11027__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11028], null),cljs.core.fnil.call(null,((function (seq__10914_11022,chunk__10915_11023,count__10916_11024,i__10917_11025,seq__10877_11015,chunk__10878_11016,count__10879_11017,i__10880_11018,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10922_11026,map__10922_11027__$1,gline_11028,gcol_11029,name_11030,vec__10911_11019,column_11020,column_info_11021,vec__10874_11012,line_11013,columns_11014,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11029], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11013,new cljs.core.Keyword(null,"col","col",-1959363084),column_11020,new cljs.core.Keyword(null,"name","name",1843675177),name_11030], null));
});})(seq__10914_11022,chunk__10915_11023,count__10916_11024,i__10917_11025,seq__10877_11015,chunk__10878_11016,count__10879_11017,i__10880_11018,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10922_11026,map__10922_11027__$1,gline_11028,gcol_11029,name_11030,vec__10911_11019,column_11020,column_info_11021,vec__10874_11012,line_11013,columns_11014,inverted))
,cljs.core.sorted_map.call(null)));


var G__11031 = seq__10914_11022;
var G__11032 = chunk__10915_11023;
var G__11033 = count__10916_11024;
var G__11034 = (i__10917_11025 + (1));
seq__10914_11022 = G__11031;
chunk__10915_11023 = G__11032;
count__10916_11024 = G__11033;
i__10917_11025 = G__11034;
continue;
} else {
var temp__5720__auto___11035 = cljs.core.seq.call(null,seq__10914_11022);
if(temp__5720__auto___11035){
var seq__10914_11036__$1 = temp__5720__auto___11035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10914_11036__$1)){
var c__4550__auto___11037 = cljs.core.chunk_first.call(null,seq__10914_11036__$1);
var G__11038 = cljs.core.chunk_rest.call(null,seq__10914_11036__$1);
var G__11039 = c__4550__auto___11037;
var G__11040 = cljs.core.count.call(null,c__4550__auto___11037);
var G__11041 = (0);
seq__10914_11022 = G__11038;
chunk__10915_11023 = G__11039;
count__10916_11024 = G__11040;
i__10917_11025 = G__11041;
continue;
} else {
var map__10924_11042 = cljs.core.first.call(null,seq__10914_11036__$1);
var map__10924_11043__$1 = (((((!((map__10924_11042 == null))))?(((((map__10924_11042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10924_11042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10924_11042):map__10924_11042);
var gline_11044 = cljs.core.get.call(null,map__10924_11043__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11045 = cljs.core.get.call(null,map__10924_11043__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11046 = cljs.core.get.call(null,map__10924_11043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11044], null),cljs.core.fnil.call(null,((function (seq__10914_11022,chunk__10915_11023,count__10916_11024,i__10917_11025,seq__10877_11015,chunk__10878_11016,count__10879_11017,i__10880_11018,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10924_11042,map__10924_11043__$1,gline_11044,gcol_11045,name_11046,seq__10914_11036__$1,temp__5720__auto___11035,vec__10911_11019,column_11020,column_info_11021,vec__10874_11012,line_11013,columns_11014,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11045], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11013,new cljs.core.Keyword(null,"col","col",-1959363084),column_11020,new cljs.core.Keyword(null,"name","name",1843675177),name_11046], null));
});})(seq__10914_11022,chunk__10915_11023,count__10916_11024,i__10917_11025,seq__10877_11015,chunk__10878_11016,count__10879_11017,i__10880_11018,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10924_11042,map__10924_11043__$1,gline_11044,gcol_11045,name_11046,seq__10914_11036__$1,temp__5720__auto___11035,vec__10911_11019,column_11020,column_info_11021,vec__10874_11012,line_11013,columns_11014,inverted))
,cljs.core.sorted_map.call(null)));


var G__11047 = cljs.core.next.call(null,seq__10914_11036__$1);
var G__11048 = null;
var G__11049 = (0);
var G__11050 = (0);
seq__10914_11022 = G__11047;
chunk__10915_11023 = G__11048;
count__10916_11024 = G__11049;
i__10917_11025 = G__11050;
continue;
}
} else {
}
}
break;
}


var G__11051 = seq__10877_11015;
var G__11052 = chunk__10878_11016;
var G__11053 = count__10879_11017;
var G__11054 = (i__10880_11018 + (1));
seq__10877_11015 = G__11051;
chunk__10878_11016 = G__11052;
count__10879_11017 = G__11053;
i__10880_11018 = G__11054;
continue;
} else {
var temp__5720__auto___11055 = cljs.core.seq.call(null,seq__10877_11015);
if(temp__5720__auto___11055){
var seq__10877_11056__$1 = temp__5720__auto___11055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10877_11056__$1)){
var c__4550__auto___11057 = cljs.core.chunk_first.call(null,seq__10877_11056__$1);
var G__11058 = cljs.core.chunk_rest.call(null,seq__10877_11056__$1);
var G__11059 = c__4550__auto___11057;
var G__11060 = cljs.core.count.call(null,c__4550__auto___11057);
var G__11061 = (0);
seq__10877_11015 = G__11058;
chunk__10878_11016 = G__11059;
count__10879_11017 = G__11060;
i__10880_11018 = G__11061;
continue;
} else {
var vec__10926_11062 = cljs.core.first.call(null,seq__10877_11056__$1);
var column_11063 = cljs.core.nth.call(null,vec__10926_11062,(0),null);
var column_info_11064 = cljs.core.nth.call(null,vec__10926_11062,(1),null);
var seq__10929_11065 = cljs.core.seq.call(null,column_info_11064);
var chunk__10930_11066 = null;
var count__10931_11067 = (0);
var i__10932_11068 = (0);
while(true){
if((i__10932_11068 < count__10931_11067)){
var map__10937_11069 = cljs.core._nth.call(null,chunk__10930_11066,i__10932_11068);
var map__10937_11070__$1 = (((((!((map__10937_11069 == null))))?(((((map__10937_11069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10937_11069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10937_11069):map__10937_11069);
var gline_11071 = cljs.core.get.call(null,map__10937_11070__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11072 = cljs.core.get.call(null,map__10937_11070__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11073 = cljs.core.get.call(null,map__10937_11070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11071], null),cljs.core.fnil.call(null,((function (seq__10929_11065,chunk__10930_11066,count__10931_11067,i__10932_11068,seq__10877_11015,chunk__10878_11016,count__10879_11017,i__10880_11018,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10937_11069,map__10937_11070__$1,gline_11071,gcol_11072,name_11073,vec__10926_11062,column_11063,column_info_11064,seq__10877_11056__$1,temp__5720__auto___11055,vec__10874_11012,line_11013,columns_11014,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11072], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11013,new cljs.core.Keyword(null,"col","col",-1959363084),column_11063,new cljs.core.Keyword(null,"name","name",1843675177),name_11073], null));
});})(seq__10929_11065,chunk__10930_11066,count__10931_11067,i__10932_11068,seq__10877_11015,chunk__10878_11016,count__10879_11017,i__10880_11018,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10937_11069,map__10937_11070__$1,gline_11071,gcol_11072,name_11073,vec__10926_11062,column_11063,column_info_11064,seq__10877_11056__$1,temp__5720__auto___11055,vec__10874_11012,line_11013,columns_11014,inverted))
,cljs.core.sorted_map.call(null)));


var G__11074 = seq__10929_11065;
var G__11075 = chunk__10930_11066;
var G__11076 = count__10931_11067;
var G__11077 = (i__10932_11068 + (1));
seq__10929_11065 = G__11074;
chunk__10930_11066 = G__11075;
count__10931_11067 = G__11076;
i__10932_11068 = G__11077;
continue;
} else {
var temp__5720__auto___11078__$1 = cljs.core.seq.call(null,seq__10929_11065);
if(temp__5720__auto___11078__$1){
var seq__10929_11079__$1 = temp__5720__auto___11078__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10929_11079__$1)){
var c__4550__auto___11080 = cljs.core.chunk_first.call(null,seq__10929_11079__$1);
var G__11081 = cljs.core.chunk_rest.call(null,seq__10929_11079__$1);
var G__11082 = c__4550__auto___11080;
var G__11083 = cljs.core.count.call(null,c__4550__auto___11080);
var G__11084 = (0);
seq__10929_11065 = G__11081;
chunk__10930_11066 = G__11082;
count__10931_11067 = G__11083;
i__10932_11068 = G__11084;
continue;
} else {
var map__10939_11085 = cljs.core.first.call(null,seq__10929_11079__$1);
var map__10939_11086__$1 = (((((!((map__10939_11085 == null))))?(((((map__10939_11085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10939_11085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10939_11085):map__10939_11085);
var gline_11087 = cljs.core.get.call(null,map__10939_11086__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11088 = cljs.core.get.call(null,map__10939_11086__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11089 = cljs.core.get.call(null,map__10939_11086__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11087], null),cljs.core.fnil.call(null,((function (seq__10929_11065,chunk__10930_11066,count__10931_11067,i__10932_11068,seq__10877_11015,chunk__10878_11016,count__10879_11017,i__10880_11018,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10939_11085,map__10939_11086__$1,gline_11087,gcol_11088,name_11089,seq__10929_11079__$1,temp__5720__auto___11078__$1,vec__10926_11062,column_11063,column_info_11064,seq__10877_11056__$1,temp__5720__auto___11055,vec__10874_11012,line_11013,columns_11014,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11088], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11013,new cljs.core.Keyword(null,"col","col",-1959363084),column_11063,new cljs.core.Keyword(null,"name","name",1843675177),name_11089], null));
});})(seq__10929_11065,chunk__10930_11066,count__10931_11067,i__10932_11068,seq__10877_11015,chunk__10878_11016,count__10879_11017,i__10880_11018,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10939_11085,map__10939_11086__$1,gline_11087,gcol_11088,name_11089,seq__10929_11079__$1,temp__5720__auto___11078__$1,vec__10926_11062,column_11063,column_info_11064,seq__10877_11056__$1,temp__5720__auto___11055,vec__10874_11012,line_11013,columns_11014,inverted))
,cljs.core.sorted_map.call(null)));


var G__11090 = cljs.core.next.call(null,seq__10929_11079__$1);
var G__11091 = null;
var G__11092 = (0);
var G__11093 = (0);
seq__10929_11065 = G__11090;
chunk__10930_11066 = G__11091;
count__10931_11067 = G__11092;
i__10932_11068 = G__11093;
continue;
}
} else {
}
}
break;
}


var G__11094 = cljs.core.next.call(null,seq__10877_11056__$1);
var G__11095 = null;
var G__11096 = (0);
var G__11097 = (0);
seq__10877_11015 = G__11094;
chunk__10878_11016 = G__11095;
count__10879_11017 = G__11096;
i__10880_11018 = G__11097;
continue;
}
} else {
}
}
break;
}


var G__11098 = seq__10736_11008;
var G__11099 = chunk__10737_11009;
var G__11100 = count__10738_11010;
var G__11101 = (i__10739_11011 + (1));
seq__10736_11008 = G__11098;
chunk__10737_11009 = G__11099;
count__10738_11010 = G__11100;
i__10739_11011 = G__11101;
continue;
} else {
var temp__5720__auto___11102 = cljs.core.seq.call(null,seq__10736_11008);
if(temp__5720__auto___11102){
var seq__10736_11103__$1 = temp__5720__auto___11102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10736_11103__$1)){
var c__4550__auto___11104 = cljs.core.chunk_first.call(null,seq__10736_11103__$1);
var G__11105 = cljs.core.chunk_rest.call(null,seq__10736_11103__$1);
var G__11106 = c__4550__auto___11104;
var G__11107 = cljs.core.count.call(null,c__4550__auto___11104);
var G__11108 = (0);
seq__10736_11008 = G__11105;
chunk__10737_11009 = G__11106;
count__10738_11010 = G__11107;
i__10739_11011 = G__11108;
continue;
} else {
var vec__10941_11109 = cljs.core.first.call(null,seq__10736_11103__$1);
var line_11110 = cljs.core.nth.call(null,vec__10941_11109,(0),null);
var columns_11111 = cljs.core.nth.call(null,vec__10941_11109,(1),null);
var seq__10944_11112 = cljs.core.seq.call(null,columns_11111);
var chunk__10945_11113 = null;
var count__10946_11114 = (0);
var i__10947_11115 = (0);
while(true){
if((i__10947_11115 < count__10946_11114)){
var vec__10978_11116 = cljs.core._nth.call(null,chunk__10945_11113,i__10947_11115);
var column_11117 = cljs.core.nth.call(null,vec__10978_11116,(0),null);
var column_info_11118 = cljs.core.nth.call(null,vec__10978_11116,(1),null);
var seq__10981_11119 = cljs.core.seq.call(null,column_info_11118);
var chunk__10982_11120 = null;
var count__10983_11121 = (0);
var i__10984_11122 = (0);
while(true){
if((i__10984_11122 < count__10983_11121)){
var map__10989_11123 = cljs.core._nth.call(null,chunk__10982_11120,i__10984_11122);
var map__10989_11124__$1 = (((((!((map__10989_11123 == null))))?(((((map__10989_11123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10989_11123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10989_11123):map__10989_11123);
var gline_11125 = cljs.core.get.call(null,map__10989_11124__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11126 = cljs.core.get.call(null,map__10989_11124__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11127 = cljs.core.get.call(null,map__10989_11124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11125], null),cljs.core.fnil.call(null,((function (seq__10981_11119,chunk__10982_11120,count__10983_11121,i__10984_11122,seq__10944_11112,chunk__10945_11113,count__10946_11114,i__10947_11115,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10989_11123,map__10989_11124__$1,gline_11125,gcol_11126,name_11127,vec__10978_11116,column_11117,column_info_11118,vec__10941_11109,line_11110,columns_11111,seq__10736_11103__$1,temp__5720__auto___11102,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11126], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11110,new cljs.core.Keyword(null,"col","col",-1959363084),column_11117,new cljs.core.Keyword(null,"name","name",1843675177),name_11127], null));
});})(seq__10981_11119,chunk__10982_11120,count__10983_11121,i__10984_11122,seq__10944_11112,chunk__10945_11113,count__10946_11114,i__10947_11115,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10989_11123,map__10989_11124__$1,gline_11125,gcol_11126,name_11127,vec__10978_11116,column_11117,column_info_11118,vec__10941_11109,line_11110,columns_11111,seq__10736_11103__$1,temp__5720__auto___11102,inverted))
,cljs.core.sorted_map.call(null)));


var G__11128 = seq__10981_11119;
var G__11129 = chunk__10982_11120;
var G__11130 = count__10983_11121;
var G__11131 = (i__10984_11122 + (1));
seq__10981_11119 = G__11128;
chunk__10982_11120 = G__11129;
count__10983_11121 = G__11130;
i__10984_11122 = G__11131;
continue;
} else {
var temp__5720__auto___11132__$1 = cljs.core.seq.call(null,seq__10981_11119);
if(temp__5720__auto___11132__$1){
var seq__10981_11133__$1 = temp__5720__auto___11132__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10981_11133__$1)){
var c__4550__auto___11134 = cljs.core.chunk_first.call(null,seq__10981_11133__$1);
var G__11135 = cljs.core.chunk_rest.call(null,seq__10981_11133__$1);
var G__11136 = c__4550__auto___11134;
var G__11137 = cljs.core.count.call(null,c__4550__auto___11134);
var G__11138 = (0);
seq__10981_11119 = G__11135;
chunk__10982_11120 = G__11136;
count__10983_11121 = G__11137;
i__10984_11122 = G__11138;
continue;
} else {
var map__10991_11139 = cljs.core.first.call(null,seq__10981_11133__$1);
var map__10991_11140__$1 = (((((!((map__10991_11139 == null))))?(((((map__10991_11139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10991_11139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10991_11139):map__10991_11139);
var gline_11141 = cljs.core.get.call(null,map__10991_11140__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11142 = cljs.core.get.call(null,map__10991_11140__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11143 = cljs.core.get.call(null,map__10991_11140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11141], null),cljs.core.fnil.call(null,((function (seq__10981_11119,chunk__10982_11120,count__10983_11121,i__10984_11122,seq__10944_11112,chunk__10945_11113,count__10946_11114,i__10947_11115,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10991_11139,map__10991_11140__$1,gline_11141,gcol_11142,name_11143,seq__10981_11133__$1,temp__5720__auto___11132__$1,vec__10978_11116,column_11117,column_info_11118,vec__10941_11109,line_11110,columns_11111,seq__10736_11103__$1,temp__5720__auto___11102,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11142], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11110,new cljs.core.Keyword(null,"col","col",-1959363084),column_11117,new cljs.core.Keyword(null,"name","name",1843675177),name_11143], null));
});})(seq__10981_11119,chunk__10982_11120,count__10983_11121,i__10984_11122,seq__10944_11112,chunk__10945_11113,count__10946_11114,i__10947_11115,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__10991_11139,map__10991_11140__$1,gline_11141,gcol_11142,name_11143,seq__10981_11133__$1,temp__5720__auto___11132__$1,vec__10978_11116,column_11117,column_info_11118,vec__10941_11109,line_11110,columns_11111,seq__10736_11103__$1,temp__5720__auto___11102,inverted))
,cljs.core.sorted_map.call(null)));


var G__11144 = cljs.core.next.call(null,seq__10981_11133__$1);
var G__11145 = null;
var G__11146 = (0);
var G__11147 = (0);
seq__10981_11119 = G__11144;
chunk__10982_11120 = G__11145;
count__10983_11121 = G__11146;
i__10984_11122 = G__11147;
continue;
}
} else {
}
}
break;
}


var G__11148 = seq__10944_11112;
var G__11149 = chunk__10945_11113;
var G__11150 = count__10946_11114;
var G__11151 = (i__10947_11115 + (1));
seq__10944_11112 = G__11148;
chunk__10945_11113 = G__11149;
count__10946_11114 = G__11150;
i__10947_11115 = G__11151;
continue;
} else {
var temp__5720__auto___11152__$1 = cljs.core.seq.call(null,seq__10944_11112);
if(temp__5720__auto___11152__$1){
var seq__10944_11153__$1 = temp__5720__auto___11152__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10944_11153__$1)){
var c__4550__auto___11154 = cljs.core.chunk_first.call(null,seq__10944_11153__$1);
var G__11155 = cljs.core.chunk_rest.call(null,seq__10944_11153__$1);
var G__11156 = c__4550__auto___11154;
var G__11157 = cljs.core.count.call(null,c__4550__auto___11154);
var G__11158 = (0);
seq__10944_11112 = G__11155;
chunk__10945_11113 = G__11156;
count__10946_11114 = G__11157;
i__10947_11115 = G__11158;
continue;
} else {
var vec__10993_11159 = cljs.core.first.call(null,seq__10944_11153__$1);
var column_11160 = cljs.core.nth.call(null,vec__10993_11159,(0),null);
var column_info_11161 = cljs.core.nth.call(null,vec__10993_11159,(1),null);
var seq__10996_11162 = cljs.core.seq.call(null,column_info_11161);
var chunk__10997_11163 = null;
var count__10998_11164 = (0);
var i__10999_11165 = (0);
while(true){
if((i__10999_11165 < count__10998_11164)){
var map__11004_11166 = cljs.core._nth.call(null,chunk__10997_11163,i__10999_11165);
var map__11004_11167__$1 = (((((!((map__11004_11166 == null))))?(((((map__11004_11166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11004_11166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11004_11166):map__11004_11166);
var gline_11168 = cljs.core.get.call(null,map__11004_11167__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11169 = cljs.core.get.call(null,map__11004_11167__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11170 = cljs.core.get.call(null,map__11004_11167__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11168], null),cljs.core.fnil.call(null,((function (seq__10996_11162,chunk__10997_11163,count__10998_11164,i__10999_11165,seq__10944_11112,chunk__10945_11113,count__10946_11114,i__10947_11115,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__11004_11166,map__11004_11167__$1,gline_11168,gcol_11169,name_11170,vec__10993_11159,column_11160,column_info_11161,seq__10944_11153__$1,temp__5720__auto___11152__$1,vec__10941_11109,line_11110,columns_11111,seq__10736_11103__$1,temp__5720__auto___11102,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11169], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11110,new cljs.core.Keyword(null,"col","col",-1959363084),column_11160,new cljs.core.Keyword(null,"name","name",1843675177),name_11170], null));
});})(seq__10996_11162,chunk__10997_11163,count__10998_11164,i__10999_11165,seq__10944_11112,chunk__10945_11113,count__10946_11114,i__10947_11115,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__11004_11166,map__11004_11167__$1,gline_11168,gcol_11169,name_11170,vec__10993_11159,column_11160,column_info_11161,seq__10944_11153__$1,temp__5720__auto___11152__$1,vec__10941_11109,line_11110,columns_11111,seq__10736_11103__$1,temp__5720__auto___11102,inverted))
,cljs.core.sorted_map.call(null)));


var G__11171 = seq__10996_11162;
var G__11172 = chunk__10997_11163;
var G__11173 = count__10998_11164;
var G__11174 = (i__10999_11165 + (1));
seq__10996_11162 = G__11171;
chunk__10997_11163 = G__11172;
count__10998_11164 = G__11173;
i__10999_11165 = G__11174;
continue;
} else {
var temp__5720__auto___11175__$2 = cljs.core.seq.call(null,seq__10996_11162);
if(temp__5720__auto___11175__$2){
var seq__10996_11176__$1 = temp__5720__auto___11175__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10996_11176__$1)){
var c__4550__auto___11177 = cljs.core.chunk_first.call(null,seq__10996_11176__$1);
var G__11178 = cljs.core.chunk_rest.call(null,seq__10996_11176__$1);
var G__11179 = c__4550__auto___11177;
var G__11180 = cljs.core.count.call(null,c__4550__auto___11177);
var G__11181 = (0);
seq__10996_11162 = G__11178;
chunk__10997_11163 = G__11179;
count__10998_11164 = G__11180;
i__10999_11165 = G__11181;
continue;
} else {
var map__11006_11182 = cljs.core.first.call(null,seq__10996_11176__$1);
var map__11006_11183__$1 = (((((!((map__11006_11182 == null))))?(((((map__11006_11182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11006_11182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11006_11182):map__11006_11182);
var gline_11184 = cljs.core.get.call(null,map__11006_11183__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11185 = cljs.core.get.call(null,map__11006_11183__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11186 = cljs.core.get.call(null,map__11006_11183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11184], null),cljs.core.fnil.call(null,((function (seq__10996_11162,chunk__10997_11163,count__10998_11164,i__10999_11165,seq__10944_11112,chunk__10945_11113,count__10946_11114,i__10947_11115,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__11006_11182,map__11006_11183__$1,gline_11184,gcol_11185,name_11186,seq__10996_11176__$1,temp__5720__auto___11175__$2,vec__10993_11159,column_11160,column_info_11161,seq__10944_11153__$1,temp__5720__auto___11152__$1,vec__10941_11109,line_11110,columns_11111,seq__10736_11103__$1,temp__5720__auto___11102,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11185], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11110,new cljs.core.Keyword(null,"col","col",-1959363084),column_11160,new cljs.core.Keyword(null,"name","name",1843675177),name_11186], null));
});})(seq__10996_11162,chunk__10997_11163,count__10998_11164,i__10999_11165,seq__10944_11112,chunk__10945_11113,count__10946_11114,i__10947_11115,seq__10736_11008,chunk__10737_11009,count__10738_11010,i__10739_11011,map__11006_11182,map__11006_11183__$1,gline_11184,gcol_11185,name_11186,seq__10996_11176__$1,temp__5720__auto___11175__$2,vec__10993_11159,column_11160,column_info_11161,seq__10944_11153__$1,temp__5720__auto___11152__$1,vec__10941_11109,line_11110,columns_11111,seq__10736_11103__$1,temp__5720__auto___11102,inverted))
,cljs.core.sorted_map.call(null)));


var G__11187 = cljs.core.next.call(null,seq__10996_11176__$1);
var G__11188 = null;
var G__11189 = (0);
var G__11190 = (0);
seq__10996_11162 = G__11187;
chunk__10997_11163 = G__11188;
count__10998_11164 = G__11189;
i__10999_11165 = G__11190;
continue;
}
} else {
}
}
break;
}


var G__11191 = cljs.core.next.call(null,seq__10944_11153__$1);
var G__11192 = null;
var G__11193 = (0);
var G__11194 = (0);
seq__10944_11112 = G__11191;
chunk__10945_11113 = G__11192;
count__10946_11114 = G__11193;
i__10947_11115 = G__11194;
continue;
}
} else {
}
}
break;
}


var G__11195 = cljs.core.next.call(null,seq__10736_11103__$1);
var G__11196 = null;
var G__11197 = (0);
var G__11198 = (0);
seq__10736_11008 = G__11195;
chunk__10737_11009 = G__11196;
count__10738_11010 = G__11197;
i__10739_11011 = G__11198;
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
