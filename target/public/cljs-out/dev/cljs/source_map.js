// Compiled by ClojureScript 0.0.668480191 {}
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
return cljs.core.reduce.call(null,(function (m,p__25247){
var vec__25248 = p__25247;
var i = cljs.core.nth.call(null,vec__25248,(0),null);
var v = cljs.core.nth.call(null,vec__25248,(1),null);
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
var vec__25251 = seg;
var gcol = cljs.core.nth.call(null,vec__25251,(0),null);
var source = cljs.core.nth.call(null,vec__25251,(1),null);
var line = cljs.core.nth.call(null,vec__25251,(2),null);
var col = cljs.core.nth.call(null,vec__25251,(3),null);
var name = cljs.core.nth.call(null,vec__25251,(4),null);
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
var vec__25254 = seg;
var gcol = cljs.core.nth.call(null,vec__25254,(0),null);
var source = cljs.core.nth.call(null,vec__25254,(1),null);
var line = cljs.core.nth.call(null,vec__25254,(2),null);
var col = cljs.core.nth.call(null,vec__25254,(3),null);
var name = cljs.core.nth.call(null,vec__25254,(4),null);
var vec__25257 = relseg;
var rgcol = cljs.core.nth.call(null,vec__25257,(0),null);
var rsource = cljs.core.nth.call(null,vec__25257,(1),null);
var rline = cljs.core.nth.call(null,vec__25257,(2),null);
var rcol = cljs.core.nth.call(null,vec__25257,(3),null);
var rname = cljs.core.nth.call(null,vec__25257,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__17816__auto__ = source;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__17816__auto__ = line;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__17816__auto__ = col;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__17816__auto__ = name;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
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
var map__25260 = segmap;
var map__25260__$1 = (((((!((map__25260 == null))))?(((((map__25260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25260):map__25260);
var gcol = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__25260,map__25260__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__25260,map__25260__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__25260,map__25260__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__25260,map__25260__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__25260,map__25260__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__25260,map__25260__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__25263 = arguments.length;
switch (G__25263) {
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
var vec__25267 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25271 = cljs.core.next.call(null,segs__$1);
var G__25272 = nrelseg;
var G__25273 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25271;
relseg__$1 = G__25272;
result__$1 = G__25273;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25267,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25267,(1),null);
var G__25274 = (gline + (1));
var G__25275 = cljs.core.next.call(null,lines__$1);
var G__25276 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25277 = result__$1;
gline = G__25274;
lines__$1 = G__25275;
relseg = G__25276;
result = G__25277;
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
var map__25279 = segmap;
var map__25279__$1 = (((((!((map__25279 == null))))?(((((map__25279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25279):map__25279);
var gcol = cljs.core.get.call(null,map__25279__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25279__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25279__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25279__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25279__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__25279,map__25279__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__25279,map__25279__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__25278_SHARP_){
return cljs.core.conj.call(null,p1__25278_SHARP_,d__$1);
});})(map__25279,map__25279__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__25279,map__25279__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__25282 = arguments.length;
switch (G__25282) {
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
var vec__25286 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25290 = cljs.core.next.call(null,segs__$1);
var G__25291 = nrelseg;
var G__25292 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25290;
relseg__$1 = G__25291;
result__$1 = G__25292;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25286,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25286,(1),null);
var G__25293 = (gline + (1));
var G__25294 = cljs.core.next.call(null,lines__$1);
var G__25295 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25296 = result__$1;
gline = G__25293;
lines__$1 = G__25294;
relseg = G__25295;
result = G__25296;
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
return (function (p__25297){
var vec__25298 = p__25297;
var _ = cljs.core.nth.call(null,vec__25298,(0),null);
var source = cljs.core.nth.call(null,vec__25298,(1),null);
var line = cljs.core.nth.call(null,vec__25298,(2),null);
var col = cljs.core.nth.call(null,vec__25298,(3),null);
var name = cljs.core.nth.call(null,vec__25298,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__25301){
var vec__25302 = p__25301;
var gcol = cljs.core.nth.call(null,vec__25302,(0),null);
var sidx = cljs.core.nth.call(null,vec__25302,(1),null);
var line = cljs.core.nth.call(null,vec__25302,(2),null);
var col = cljs.core.nth.call(null,vec__25302,(3),null);
var name = cljs.core.nth.call(null,vec__25302,(4),null);
var seg = vec__25302;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__25302,gcol,sidx,line,col,name,seg,relseg){
return (function (p__25305){
var vec__25306 = p__25305;
var _ = cljs.core.nth.call(null,vec__25306,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25306,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__25306,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__25306,(3),null);
var lname = cljs.core.nth.call(null,vec__25306,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__17816__auto__ = name;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__25302,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__17816__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
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
var seq__25312 = cljs.core.seq.call(null,infos);
var chunk__25313 = null;
var count__25314 = (0);
var i__25315 = (0);
while(true){
if((i__25315 < count__25314)){
var info = cljs.core._nth.call(null,chunk__25313,i__25315);
var segv_25666 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25667 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25668 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25667 > (lc_25668 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25312,chunk__25313,count__25314,i__25315,segv_25666,gline_25667,lc_25668,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25667 - (lc_25668 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25666], null));
});})(seq__25312,chunk__25313,count__25314,i__25315,segv_25666,gline_25667,lc_25668,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25312,chunk__25313,count__25314,i__25315,segv_25666,gline_25667,lc_25668,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25667], null),cljs.core.conj,segv_25666);
});})(seq__25312,chunk__25313,count__25314,i__25315,segv_25666,gline_25667,lc_25668,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__25669 = seq__25312;
var G__25670 = chunk__25313;
var G__25671 = count__25314;
var G__25672 = (i__25315 + (1));
seq__25312 = G__25669;
chunk__25313 = G__25670;
count__25314 = G__25671;
i__25315 = G__25672;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25312);
if(temp__5720__auto__){
var seq__25312__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25312__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__25312__$1);
var G__25673 = cljs.core.chunk_rest.call(null,seq__25312__$1);
var G__25674 = c__18773__auto__;
var G__25675 = cljs.core.count.call(null,c__18773__auto__);
var G__25676 = (0);
seq__25312 = G__25673;
chunk__25313 = G__25674;
count__25314 = G__25675;
i__25315 = G__25676;
continue;
} else {
var info = cljs.core.first.call(null,seq__25312__$1);
var segv_25677 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25678 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25679 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25678 > (lc_25679 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25312,chunk__25313,count__25314,i__25315,segv_25677,gline_25678,lc_25679,info,seq__25312__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25678 - (lc_25679 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25677], null));
});})(seq__25312,chunk__25313,count__25314,i__25315,segv_25677,gline_25678,lc_25679,info,seq__25312__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25312,chunk__25313,count__25314,i__25315,segv_25677,gline_25678,lc_25679,info,seq__25312__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25678], null),cljs.core.conj,segv_25677);
});})(seq__25312,chunk__25313,count__25314,i__25315,segv_25677,gline_25678,lc_25679,info,seq__25312__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__25680 = cljs.core.next.call(null,seq__25312__$1);
var G__25681 = null;
var G__25682 = (0);
var G__25683 = (0);
seq__25312 = G__25680;
chunk__25313 = G__25681;
count__25314 = G__25682;
i__25315 = G__25683;
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
var seq__25316_25684 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__25317_25685 = null;
var count__25318_25686 = (0);
var i__25319_25687 = (0);
while(true){
if((i__25319_25687 < count__25318_25686)){
var vec__25492_25688 = cljs.core._nth.call(null,chunk__25317_25685,i__25319_25687);
var source_idx_25689 = cljs.core.nth.call(null,vec__25492_25688,(0),null);
var vec__25495_25690 = cljs.core.nth.call(null,vec__25492_25688,(1),null);
var __25691 = cljs.core.nth.call(null,vec__25495_25690,(0),null);
var lines_25692__$1 = cljs.core.nth.call(null,vec__25495_25690,(1),null);
var seq__25498_25693 = cljs.core.seq.call(null,lines_25692__$1);
var chunk__25499_25694 = null;
var count__25500_25695 = (0);
var i__25501_25696 = (0);
while(true){
if((i__25501_25696 < count__25500_25695)){
var vec__25540_25697 = cljs.core._nth.call(null,chunk__25499_25694,i__25501_25696);
var line_25698 = cljs.core.nth.call(null,vec__25540_25697,(0),null);
var cols_25699 = cljs.core.nth.call(null,vec__25540_25697,(1),null);
var seq__25543_25700 = cljs.core.seq.call(null,cols_25699);
var chunk__25544_25701 = null;
var count__25545_25702 = (0);
var i__25546_25703 = (0);
while(true){
if((i__25546_25703 < count__25545_25702)){
var vec__25553_25704 = cljs.core._nth.call(null,chunk__25544_25701,i__25546_25703);
var col_25705 = cljs.core.nth.call(null,vec__25553_25704,(0),null);
var infos_25706 = cljs.core.nth.call(null,vec__25553_25704,(1),null);
encode_cols.call(null,infos_25706,source_idx_25689,line_25698,col_25705);


var G__25707 = seq__25543_25700;
var G__25708 = chunk__25544_25701;
var G__25709 = count__25545_25702;
var G__25710 = (i__25546_25703 + (1));
seq__25543_25700 = G__25707;
chunk__25544_25701 = G__25708;
count__25545_25702 = G__25709;
i__25546_25703 = G__25710;
continue;
} else {
var temp__5720__auto___25711 = cljs.core.seq.call(null,seq__25543_25700);
if(temp__5720__auto___25711){
var seq__25543_25712__$1 = temp__5720__auto___25711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25543_25712__$1)){
var c__18773__auto___25713 = cljs.core.chunk_first.call(null,seq__25543_25712__$1);
var G__25714 = cljs.core.chunk_rest.call(null,seq__25543_25712__$1);
var G__25715 = c__18773__auto___25713;
var G__25716 = cljs.core.count.call(null,c__18773__auto___25713);
var G__25717 = (0);
seq__25543_25700 = G__25714;
chunk__25544_25701 = G__25715;
count__25545_25702 = G__25716;
i__25546_25703 = G__25717;
continue;
} else {
var vec__25556_25718 = cljs.core.first.call(null,seq__25543_25712__$1);
var col_25719 = cljs.core.nth.call(null,vec__25556_25718,(0),null);
var infos_25720 = cljs.core.nth.call(null,vec__25556_25718,(1),null);
encode_cols.call(null,infos_25720,source_idx_25689,line_25698,col_25719);


var G__25721 = cljs.core.next.call(null,seq__25543_25712__$1);
var G__25722 = null;
var G__25723 = (0);
var G__25724 = (0);
seq__25543_25700 = G__25721;
chunk__25544_25701 = G__25722;
count__25545_25702 = G__25723;
i__25546_25703 = G__25724;
continue;
}
} else {
}
}
break;
}


var G__25725 = seq__25498_25693;
var G__25726 = chunk__25499_25694;
var G__25727 = count__25500_25695;
var G__25728 = (i__25501_25696 + (1));
seq__25498_25693 = G__25725;
chunk__25499_25694 = G__25726;
count__25500_25695 = G__25727;
i__25501_25696 = G__25728;
continue;
} else {
var temp__5720__auto___25729 = cljs.core.seq.call(null,seq__25498_25693);
if(temp__5720__auto___25729){
var seq__25498_25730__$1 = temp__5720__auto___25729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25498_25730__$1)){
var c__18773__auto___25731 = cljs.core.chunk_first.call(null,seq__25498_25730__$1);
var G__25732 = cljs.core.chunk_rest.call(null,seq__25498_25730__$1);
var G__25733 = c__18773__auto___25731;
var G__25734 = cljs.core.count.call(null,c__18773__auto___25731);
var G__25735 = (0);
seq__25498_25693 = G__25732;
chunk__25499_25694 = G__25733;
count__25500_25695 = G__25734;
i__25501_25696 = G__25735;
continue;
} else {
var vec__25559_25736 = cljs.core.first.call(null,seq__25498_25730__$1);
var line_25737 = cljs.core.nth.call(null,vec__25559_25736,(0),null);
var cols_25738 = cljs.core.nth.call(null,vec__25559_25736,(1),null);
var seq__25562_25739 = cljs.core.seq.call(null,cols_25738);
var chunk__25563_25740 = null;
var count__25564_25741 = (0);
var i__25565_25742 = (0);
while(true){
if((i__25565_25742 < count__25564_25741)){
var vec__25572_25743 = cljs.core._nth.call(null,chunk__25563_25740,i__25565_25742);
var col_25744 = cljs.core.nth.call(null,vec__25572_25743,(0),null);
var infos_25745 = cljs.core.nth.call(null,vec__25572_25743,(1),null);
encode_cols.call(null,infos_25745,source_idx_25689,line_25737,col_25744);


var G__25746 = seq__25562_25739;
var G__25747 = chunk__25563_25740;
var G__25748 = count__25564_25741;
var G__25749 = (i__25565_25742 + (1));
seq__25562_25739 = G__25746;
chunk__25563_25740 = G__25747;
count__25564_25741 = G__25748;
i__25565_25742 = G__25749;
continue;
} else {
var temp__5720__auto___25750__$1 = cljs.core.seq.call(null,seq__25562_25739);
if(temp__5720__auto___25750__$1){
var seq__25562_25751__$1 = temp__5720__auto___25750__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25562_25751__$1)){
var c__18773__auto___25752 = cljs.core.chunk_first.call(null,seq__25562_25751__$1);
var G__25753 = cljs.core.chunk_rest.call(null,seq__25562_25751__$1);
var G__25754 = c__18773__auto___25752;
var G__25755 = cljs.core.count.call(null,c__18773__auto___25752);
var G__25756 = (0);
seq__25562_25739 = G__25753;
chunk__25563_25740 = G__25754;
count__25564_25741 = G__25755;
i__25565_25742 = G__25756;
continue;
} else {
var vec__25575_25757 = cljs.core.first.call(null,seq__25562_25751__$1);
var col_25758 = cljs.core.nth.call(null,vec__25575_25757,(0),null);
var infos_25759 = cljs.core.nth.call(null,vec__25575_25757,(1),null);
encode_cols.call(null,infos_25759,source_idx_25689,line_25737,col_25758);


var G__25760 = cljs.core.next.call(null,seq__25562_25751__$1);
var G__25761 = null;
var G__25762 = (0);
var G__25763 = (0);
seq__25562_25739 = G__25760;
chunk__25563_25740 = G__25761;
count__25564_25741 = G__25762;
i__25565_25742 = G__25763;
continue;
}
} else {
}
}
break;
}


var G__25764 = cljs.core.next.call(null,seq__25498_25730__$1);
var G__25765 = null;
var G__25766 = (0);
var G__25767 = (0);
seq__25498_25693 = G__25764;
chunk__25499_25694 = G__25765;
count__25500_25695 = G__25766;
i__25501_25696 = G__25767;
continue;
}
} else {
}
}
break;
}


var G__25768 = seq__25316_25684;
var G__25769 = chunk__25317_25685;
var G__25770 = count__25318_25686;
var G__25771 = (i__25319_25687 + (1));
seq__25316_25684 = G__25768;
chunk__25317_25685 = G__25769;
count__25318_25686 = G__25770;
i__25319_25687 = G__25771;
continue;
} else {
var temp__5720__auto___25772 = cljs.core.seq.call(null,seq__25316_25684);
if(temp__5720__auto___25772){
var seq__25316_25773__$1 = temp__5720__auto___25772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25316_25773__$1)){
var c__18773__auto___25774 = cljs.core.chunk_first.call(null,seq__25316_25773__$1);
var G__25775 = cljs.core.chunk_rest.call(null,seq__25316_25773__$1);
var G__25776 = c__18773__auto___25774;
var G__25777 = cljs.core.count.call(null,c__18773__auto___25774);
var G__25778 = (0);
seq__25316_25684 = G__25775;
chunk__25317_25685 = G__25776;
count__25318_25686 = G__25777;
i__25319_25687 = G__25778;
continue;
} else {
var vec__25578_25779 = cljs.core.first.call(null,seq__25316_25773__$1);
var source_idx_25780 = cljs.core.nth.call(null,vec__25578_25779,(0),null);
var vec__25581_25781 = cljs.core.nth.call(null,vec__25578_25779,(1),null);
var __25782 = cljs.core.nth.call(null,vec__25581_25781,(0),null);
var lines_25783__$1 = cljs.core.nth.call(null,vec__25581_25781,(1),null);
var seq__25584_25784 = cljs.core.seq.call(null,lines_25783__$1);
var chunk__25585_25785 = null;
var count__25586_25786 = (0);
var i__25587_25787 = (0);
while(true){
if((i__25587_25787 < count__25586_25786)){
var vec__25626_25788 = cljs.core._nth.call(null,chunk__25585_25785,i__25587_25787);
var line_25789 = cljs.core.nth.call(null,vec__25626_25788,(0),null);
var cols_25790 = cljs.core.nth.call(null,vec__25626_25788,(1),null);
var seq__25629_25791 = cljs.core.seq.call(null,cols_25790);
var chunk__25630_25792 = null;
var count__25631_25793 = (0);
var i__25632_25794 = (0);
while(true){
if((i__25632_25794 < count__25631_25793)){
var vec__25639_25795 = cljs.core._nth.call(null,chunk__25630_25792,i__25632_25794);
var col_25796 = cljs.core.nth.call(null,vec__25639_25795,(0),null);
var infos_25797 = cljs.core.nth.call(null,vec__25639_25795,(1),null);
encode_cols.call(null,infos_25797,source_idx_25780,line_25789,col_25796);


var G__25798 = seq__25629_25791;
var G__25799 = chunk__25630_25792;
var G__25800 = count__25631_25793;
var G__25801 = (i__25632_25794 + (1));
seq__25629_25791 = G__25798;
chunk__25630_25792 = G__25799;
count__25631_25793 = G__25800;
i__25632_25794 = G__25801;
continue;
} else {
var temp__5720__auto___25802__$1 = cljs.core.seq.call(null,seq__25629_25791);
if(temp__5720__auto___25802__$1){
var seq__25629_25803__$1 = temp__5720__auto___25802__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25629_25803__$1)){
var c__18773__auto___25804 = cljs.core.chunk_first.call(null,seq__25629_25803__$1);
var G__25805 = cljs.core.chunk_rest.call(null,seq__25629_25803__$1);
var G__25806 = c__18773__auto___25804;
var G__25807 = cljs.core.count.call(null,c__18773__auto___25804);
var G__25808 = (0);
seq__25629_25791 = G__25805;
chunk__25630_25792 = G__25806;
count__25631_25793 = G__25807;
i__25632_25794 = G__25808;
continue;
} else {
var vec__25642_25809 = cljs.core.first.call(null,seq__25629_25803__$1);
var col_25810 = cljs.core.nth.call(null,vec__25642_25809,(0),null);
var infos_25811 = cljs.core.nth.call(null,vec__25642_25809,(1),null);
encode_cols.call(null,infos_25811,source_idx_25780,line_25789,col_25810);


var G__25812 = cljs.core.next.call(null,seq__25629_25803__$1);
var G__25813 = null;
var G__25814 = (0);
var G__25815 = (0);
seq__25629_25791 = G__25812;
chunk__25630_25792 = G__25813;
count__25631_25793 = G__25814;
i__25632_25794 = G__25815;
continue;
}
} else {
}
}
break;
}


var G__25816 = seq__25584_25784;
var G__25817 = chunk__25585_25785;
var G__25818 = count__25586_25786;
var G__25819 = (i__25587_25787 + (1));
seq__25584_25784 = G__25816;
chunk__25585_25785 = G__25817;
count__25586_25786 = G__25818;
i__25587_25787 = G__25819;
continue;
} else {
var temp__5720__auto___25820__$1 = cljs.core.seq.call(null,seq__25584_25784);
if(temp__5720__auto___25820__$1){
var seq__25584_25821__$1 = temp__5720__auto___25820__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25584_25821__$1)){
var c__18773__auto___25822 = cljs.core.chunk_first.call(null,seq__25584_25821__$1);
var G__25823 = cljs.core.chunk_rest.call(null,seq__25584_25821__$1);
var G__25824 = c__18773__auto___25822;
var G__25825 = cljs.core.count.call(null,c__18773__auto___25822);
var G__25826 = (0);
seq__25584_25784 = G__25823;
chunk__25585_25785 = G__25824;
count__25586_25786 = G__25825;
i__25587_25787 = G__25826;
continue;
} else {
var vec__25645_25827 = cljs.core.first.call(null,seq__25584_25821__$1);
var line_25828 = cljs.core.nth.call(null,vec__25645_25827,(0),null);
var cols_25829 = cljs.core.nth.call(null,vec__25645_25827,(1),null);
var seq__25648_25830 = cljs.core.seq.call(null,cols_25829);
var chunk__25649_25831 = null;
var count__25650_25832 = (0);
var i__25651_25833 = (0);
while(true){
if((i__25651_25833 < count__25650_25832)){
var vec__25658_25834 = cljs.core._nth.call(null,chunk__25649_25831,i__25651_25833);
var col_25835 = cljs.core.nth.call(null,vec__25658_25834,(0),null);
var infos_25836 = cljs.core.nth.call(null,vec__25658_25834,(1),null);
encode_cols.call(null,infos_25836,source_idx_25780,line_25828,col_25835);


var G__25837 = seq__25648_25830;
var G__25838 = chunk__25649_25831;
var G__25839 = count__25650_25832;
var G__25840 = (i__25651_25833 + (1));
seq__25648_25830 = G__25837;
chunk__25649_25831 = G__25838;
count__25650_25832 = G__25839;
i__25651_25833 = G__25840;
continue;
} else {
var temp__5720__auto___25841__$2 = cljs.core.seq.call(null,seq__25648_25830);
if(temp__5720__auto___25841__$2){
var seq__25648_25842__$1 = temp__5720__auto___25841__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25648_25842__$1)){
var c__18773__auto___25843 = cljs.core.chunk_first.call(null,seq__25648_25842__$1);
var G__25844 = cljs.core.chunk_rest.call(null,seq__25648_25842__$1);
var G__25845 = c__18773__auto___25843;
var G__25846 = cljs.core.count.call(null,c__18773__auto___25843);
var G__25847 = (0);
seq__25648_25830 = G__25844;
chunk__25649_25831 = G__25845;
count__25650_25832 = G__25846;
i__25651_25833 = G__25847;
continue;
} else {
var vec__25661_25848 = cljs.core.first.call(null,seq__25648_25842__$1);
var col_25849 = cljs.core.nth.call(null,vec__25661_25848,(0),null);
var infos_25850 = cljs.core.nth.call(null,vec__25661_25848,(1),null);
encode_cols.call(null,infos_25850,source_idx_25780,line_25828,col_25849);


var G__25851 = cljs.core.next.call(null,seq__25648_25842__$1);
var G__25852 = null;
var G__25853 = (0);
var G__25854 = (0);
seq__25648_25830 = G__25851;
chunk__25649_25831 = G__25852;
count__25650_25832 = G__25853;
i__25651_25833 = G__25854;
continue;
}
} else {
}
}
break;
}


var G__25855 = cljs.core.next.call(null,seq__25584_25821__$1);
var G__25856 = null;
var G__25857 = (0);
var G__25858 = (0);
seq__25584_25784 = G__25855;
chunk__25585_25785 = G__25856;
count__25586_25786 = G__25857;
i__25587_25787 = G__25858;
continue;
}
} else {
}
}
break;
}


var G__25859 = cljs.core.next.call(null,seq__25316_25773__$1);
var G__25860 = null;
var G__25861 = (0);
var G__25862 = (0);
seq__25316_25684 = G__25859;
chunk__25317_25685 = G__25860;
count__25318_25686 = G__25861;
i__25319_25687 = G__25862;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__25664 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25309_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25309_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25310_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__25310_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25311_SHARP_){
return clojure.string.join.call(null,",",p1__25311_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__25665 = G__25664;
goog.object.set(G__25665,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__25665;
} else {
return G__25664;
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
var vec__25863 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__25863,(0),null);
var col_map = cljs.core.nth.call(null,vec__25863,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__25866 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__25866,(0),null);
var infos = cljs.core.nth.call(null,vec__25866,(1),null);
var G__25872 = cljs.core.next.call(null,col_map_seq);
var G__25873 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__25866,col,infos,vec__25863,line,col_map){
return (function (v,p__25869){
var map__25870 = p__25869;
var map__25870__$1 = (((((!((map__25870 == null))))?(((((map__25870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25870):map__25870);
var gline = cljs.core.get.call(null,map__25870__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__25870__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__25866,col,infos,vec__25863,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__25872;
new_cols = G__25873;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__25874 = cljs.core.next.call(null,line_map_seq);
var G__25875 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__25874;
new_lines = G__25875;
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
var seq__25876_26148 = cljs.core.seq.call(null,reverse_map);
var chunk__25877_26149 = null;
var count__25878_26150 = (0);
var i__25879_26151 = (0);
while(true){
if((i__25879_26151 < count__25878_26150)){
var vec__26014_26152 = cljs.core._nth.call(null,chunk__25877_26149,i__25879_26151);
var line_26153 = cljs.core.nth.call(null,vec__26014_26152,(0),null);
var columns_26154 = cljs.core.nth.call(null,vec__26014_26152,(1),null);
var seq__26017_26155 = cljs.core.seq.call(null,columns_26154);
var chunk__26018_26156 = null;
var count__26019_26157 = (0);
var i__26020_26158 = (0);
while(true){
if((i__26020_26158 < count__26019_26157)){
var vec__26051_26159 = cljs.core._nth.call(null,chunk__26018_26156,i__26020_26158);
var column_26160 = cljs.core.nth.call(null,vec__26051_26159,(0),null);
var column_info_26161 = cljs.core.nth.call(null,vec__26051_26159,(1),null);
var seq__26054_26162 = cljs.core.seq.call(null,column_info_26161);
var chunk__26055_26163 = null;
var count__26056_26164 = (0);
var i__26057_26165 = (0);
while(true){
if((i__26057_26165 < count__26056_26164)){
var map__26062_26166 = cljs.core._nth.call(null,chunk__26055_26163,i__26057_26165);
var map__26062_26167__$1 = (((((!((map__26062_26166 == null))))?(((((map__26062_26166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26062_26166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26062_26166):map__26062_26166);
var gline_26168 = cljs.core.get.call(null,map__26062_26167__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26169 = cljs.core.get.call(null,map__26062_26167__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26170 = cljs.core.get.call(null,map__26062_26167__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26168], null),cljs.core.fnil.call(null,((function (seq__26054_26162,chunk__26055_26163,count__26056_26164,i__26057_26165,seq__26017_26155,chunk__26018_26156,count__26019_26157,i__26020_26158,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26062_26166,map__26062_26167__$1,gline_26168,gcol_26169,name_26170,vec__26051_26159,column_26160,column_info_26161,vec__26014_26152,line_26153,columns_26154,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26169], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26153,new cljs.core.Keyword(null,"col","col",-1959363084),column_26160,new cljs.core.Keyword(null,"name","name",1843675177),name_26170], null));
});})(seq__26054_26162,chunk__26055_26163,count__26056_26164,i__26057_26165,seq__26017_26155,chunk__26018_26156,count__26019_26157,i__26020_26158,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26062_26166,map__26062_26167__$1,gline_26168,gcol_26169,name_26170,vec__26051_26159,column_26160,column_info_26161,vec__26014_26152,line_26153,columns_26154,inverted))
,cljs.core.sorted_map.call(null)));


var G__26171 = seq__26054_26162;
var G__26172 = chunk__26055_26163;
var G__26173 = count__26056_26164;
var G__26174 = (i__26057_26165 + (1));
seq__26054_26162 = G__26171;
chunk__26055_26163 = G__26172;
count__26056_26164 = G__26173;
i__26057_26165 = G__26174;
continue;
} else {
var temp__5720__auto___26175 = cljs.core.seq.call(null,seq__26054_26162);
if(temp__5720__auto___26175){
var seq__26054_26176__$1 = temp__5720__auto___26175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26054_26176__$1)){
var c__18773__auto___26177 = cljs.core.chunk_first.call(null,seq__26054_26176__$1);
var G__26178 = cljs.core.chunk_rest.call(null,seq__26054_26176__$1);
var G__26179 = c__18773__auto___26177;
var G__26180 = cljs.core.count.call(null,c__18773__auto___26177);
var G__26181 = (0);
seq__26054_26162 = G__26178;
chunk__26055_26163 = G__26179;
count__26056_26164 = G__26180;
i__26057_26165 = G__26181;
continue;
} else {
var map__26064_26182 = cljs.core.first.call(null,seq__26054_26176__$1);
var map__26064_26183__$1 = (((((!((map__26064_26182 == null))))?(((((map__26064_26182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26064_26182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26064_26182):map__26064_26182);
var gline_26184 = cljs.core.get.call(null,map__26064_26183__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26185 = cljs.core.get.call(null,map__26064_26183__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26186 = cljs.core.get.call(null,map__26064_26183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26184], null),cljs.core.fnil.call(null,((function (seq__26054_26162,chunk__26055_26163,count__26056_26164,i__26057_26165,seq__26017_26155,chunk__26018_26156,count__26019_26157,i__26020_26158,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26064_26182,map__26064_26183__$1,gline_26184,gcol_26185,name_26186,seq__26054_26176__$1,temp__5720__auto___26175,vec__26051_26159,column_26160,column_info_26161,vec__26014_26152,line_26153,columns_26154,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26185], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26153,new cljs.core.Keyword(null,"col","col",-1959363084),column_26160,new cljs.core.Keyword(null,"name","name",1843675177),name_26186], null));
});})(seq__26054_26162,chunk__26055_26163,count__26056_26164,i__26057_26165,seq__26017_26155,chunk__26018_26156,count__26019_26157,i__26020_26158,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26064_26182,map__26064_26183__$1,gline_26184,gcol_26185,name_26186,seq__26054_26176__$1,temp__5720__auto___26175,vec__26051_26159,column_26160,column_info_26161,vec__26014_26152,line_26153,columns_26154,inverted))
,cljs.core.sorted_map.call(null)));


var G__26187 = cljs.core.next.call(null,seq__26054_26176__$1);
var G__26188 = null;
var G__26189 = (0);
var G__26190 = (0);
seq__26054_26162 = G__26187;
chunk__26055_26163 = G__26188;
count__26056_26164 = G__26189;
i__26057_26165 = G__26190;
continue;
}
} else {
}
}
break;
}


var G__26191 = seq__26017_26155;
var G__26192 = chunk__26018_26156;
var G__26193 = count__26019_26157;
var G__26194 = (i__26020_26158 + (1));
seq__26017_26155 = G__26191;
chunk__26018_26156 = G__26192;
count__26019_26157 = G__26193;
i__26020_26158 = G__26194;
continue;
} else {
var temp__5720__auto___26195 = cljs.core.seq.call(null,seq__26017_26155);
if(temp__5720__auto___26195){
var seq__26017_26196__$1 = temp__5720__auto___26195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26017_26196__$1)){
var c__18773__auto___26197 = cljs.core.chunk_first.call(null,seq__26017_26196__$1);
var G__26198 = cljs.core.chunk_rest.call(null,seq__26017_26196__$1);
var G__26199 = c__18773__auto___26197;
var G__26200 = cljs.core.count.call(null,c__18773__auto___26197);
var G__26201 = (0);
seq__26017_26155 = G__26198;
chunk__26018_26156 = G__26199;
count__26019_26157 = G__26200;
i__26020_26158 = G__26201;
continue;
} else {
var vec__26066_26202 = cljs.core.first.call(null,seq__26017_26196__$1);
var column_26203 = cljs.core.nth.call(null,vec__26066_26202,(0),null);
var column_info_26204 = cljs.core.nth.call(null,vec__26066_26202,(1),null);
var seq__26069_26205 = cljs.core.seq.call(null,column_info_26204);
var chunk__26070_26206 = null;
var count__26071_26207 = (0);
var i__26072_26208 = (0);
while(true){
if((i__26072_26208 < count__26071_26207)){
var map__26077_26209 = cljs.core._nth.call(null,chunk__26070_26206,i__26072_26208);
var map__26077_26210__$1 = (((((!((map__26077_26209 == null))))?(((((map__26077_26209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26077_26209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26077_26209):map__26077_26209);
var gline_26211 = cljs.core.get.call(null,map__26077_26210__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26212 = cljs.core.get.call(null,map__26077_26210__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26213 = cljs.core.get.call(null,map__26077_26210__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26211], null),cljs.core.fnil.call(null,((function (seq__26069_26205,chunk__26070_26206,count__26071_26207,i__26072_26208,seq__26017_26155,chunk__26018_26156,count__26019_26157,i__26020_26158,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26077_26209,map__26077_26210__$1,gline_26211,gcol_26212,name_26213,vec__26066_26202,column_26203,column_info_26204,seq__26017_26196__$1,temp__5720__auto___26195,vec__26014_26152,line_26153,columns_26154,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26212], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26153,new cljs.core.Keyword(null,"col","col",-1959363084),column_26203,new cljs.core.Keyword(null,"name","name",1843675177),name_26213], null));
});})(seq__26069_26205,chunk__26070_26206,count__26071_26207,i__26072_26208,seq__26017_26155,chunk__26018_26156,count__26019_26157,i__26020_26158,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26077_26209,map__26077_26210__$1,gline_26211,gcol_26212,name_26213,vec__26066_26202,column_26203,column_info_26204,seq__26017_26196__$1,temp__5720__auto___26195,vec__26014_26152,line_26153,columns_26154,inverted))
,cljs.core.sorted_map.call(null)));


var G__26214 = seq__26069_26205;
var G__26215 = chunk__26070_26206;
var G__26216 = count__26071_26207;
var G__26217 = (i__26072_26208 + (1));
seq__26069_26205 = G__26214;
chunk__26070_26206 = G__26215;
count__26071_26207 = G__26216;
i__26072_26208 = G__26217;
continue;
} else {
var temp__5720__auto___26218__$1 = cljs.core.seq.call(null,seq__26069_26205);
if(temp__5720__auto___26218__$1){
var seq__26069_26219__$1 = temp__5720__auto___26218__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26069_26219__$1)){
var c__18773__auto___26220 = cljs.core.chunk_first.call(null,seq__26069_26219__$1);
var G__26221 = cljs.core.chunk_rest.call(null,seq__26069_26219__$1);
var G__26222 = c__18773__auto___26220;
var G__26223 = cljs.core.count.call(null,c__18773__auto___26220);
var G__26224 = (0);
seq__26069_26205 = G__26221;
chunk__26070_26206 = G__26222;
count__26071_26207 = G__26223;
i__26072_26208 = G__26224;
continue;
} else {
var map__26079_26225 = cljs.core.first.call(null,seq__26069_26219__$1);
var map__26079_26226__$1 = (((((!((map__26079_26225 == null))))?(((((map__26079_26225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26079_26225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26079_26225):map__26079_26225);
var gline_26227 = cljs.core.get.call(null,map__26079_26226__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26228 = cljs.core.get.call(null,map__26079_26226__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26229 = cljs.core.get.call(null,map__26079_26226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26227], null),cljs.core.fnil.call(null,((function (seq__26069_26205,chunk__26070_26206,count__26071_26207,i__26072_26208,seq__26017_26155,chunk__26018_26156,count__26019_26157,i__26020_26158,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26079_26225,map__26079_26226__$1,gline_26227,gcol_26228,name_26229,seq__26069_26219__$1,temp__5720__auto___26218__$1,vec__26066_26202,column_26203,column_info_26204,seq__26017_26196__$1,temp__5720__auto___26195,vec__26014_26152,line_26153,columns_26154,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26228], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26153,new cljs.core.Keyword(null,"col","col",-1959363084),column_26203,new cljs.core.Keyword(null,"name","name",1843675177),name_26229], null));
});})(seq__26069_26205,chunk__26070_26206,count__26071_26207,i__26072_26208,seq__26017_26155,chunk__26018_26156,count__26019_26157,i__26020_26158,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26079_26225,map__26079_26226__$1,gline_26227,gcol_26228,name_26229,seq__26069_26219__$1,temp__5720__auto___26218__$1,vec__26066_26202,column_26203,column_info_26204,seq__26017_26196__$1,temp__5720__auto___26195,vec__26014_26152,line_26153,columns_26154,inverted))
,cljs.core.sorted_map.call(null)));


var G__26230 = cljs.core.next.call(null,seq__26069_26219__$1);
var G__26231 = null;
var G__26232 = (0);
var G__26233 = (0);
seq__26069_26205 = G__26230;
chunk__26070_26206 = G__26231;
count__26071_26207 = G__26232;
i__26072_26208 = G__26233;
continue;
}
} else {
}
}
break;
}


var G__26234 = cljs.core.next.call(null,seq__26017_26196__$1);
var G__26235 = null;
var G__26236 = (0);
var G__26237 = (0);
seq__26017_26155 = G__26234;
chunk__26018_26156 = G__26235;
count__26019_26157 = G__26236;
i__26020_26158 = G__26237;
continue;
}
} else {
}
}
break;
}


var G__26238 = seq__25876_26148;
var G__26239 = chunk__25877_26149;
var G__26240 = count__25878_26150;
var G__26241 = (i__25879_26151 + (1));
seq__25876_26148 = G__26238;
chunk__25877_26149 = G__26239;
count__25878_26150 = G__26240;
i__25879_26151 = G__26241;
continue;
} else {
var temp__5720__auto___26242 = cljs.core.seq.call(null,seq__25876_26148);
if(temp__5720__auto___26242){
var seq__25876_26243__$1 = temp__5720__auto___26242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25876_26243__$1)){
var c__18773__auto___26244 = cljs.core.chunk_first.call(null,seq__25876_26243__$1);
var G__26245 = cljs.core.chunk_rest.call(null,seq__25876_26243__$1);
var G__26246 = c__18773__auto___26244;
var G__26247 = cljs.core.count.call(null,c__18773__auto___26244);
var G__26248 = (0);
seq__25876_26148 = G__26245;
chunk__25877_26149 = G__26246;
count__25878_26150 = G__26247;
i__25879_26151 = G__26248;
continue;
} else {
var vec__26081_26249 = cljs.core.first.call(null,seq__25876_26243__$1);
var line_26250 = cljs.core.nth.call(null,vec__26081_26249,(0),null);
var columns_26251 = cljs.core.nth.call(null,vec__26081_26249,(1),null);
var seq__26084_26252 = cljs.core.seq.call(null,columns_26251);
var chunk__26085_26253 = null;
var count__26086_26254 = (0);
var i__26087_26255 = (0);
while(true){
if((i__26087_26255 < count__26086_26254)){
var vec__26118_26256 = cljs.core._nth.call(null,chunk__26085_26253,i__26087_26255);
var column_26257 = cljs.core.nth.call(null,vec__26118_26256,(0),null);
var column_info_26258 = cljs.core.nth.call(null,vec__26118_26256,(1),null);
var seq__26121_26259 = cljs.core.seq.call(null,column_info_26258);
var chunk__26122_26260 = null;
var count__26123_26261 = (0);
var i__26124_26262 = (0);
while(true){
if((i__26124_26262 < count__26123_26261)){
var map__26129_26263 = cljs.core._nth.call(null,chunk__26122_26260,i__26124_26262);
var map__26129_26264__$1 = (((((!((map__26129_26263 == null))))?(((((map__26129_26263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26129_26263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26129_26263):map__26129_26263);
var gline_26265 = cljs.core.get.call(null,map__26129_26264__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26266 = cljs.core.get.call(null,map__26129_26264__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26267 = cljs.core.get.call(null,map__26129_26264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26265], null),cljs.core.fnil.call(null,((function (seq__26121_26259,chunk__26122_26260,count__26123_26261,i__26124_26262,seq__26084_26252,chunk__26085_26253,count__26086_26254,i__26087_26255,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26129_26263,map__26129_26264__$1,gline_26265,gcol_26266,name_26267,vec__26118_26256,column_26257,column_info_26258,vec__26081_26249,line_26250,columns_26251,seq__25876_26243__$1,temp__5720__auto___26242,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26266], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26250,new cljs.core.Keyword(null,"col","col",-1959363084),column_26257,new cljs.core.Keyword(null,"name","name",1843675177),name_26267], null));
});})(seq__26121_26259,chunk__26122_26260,count__26123_26261,i__26124_26262,seq__26084_26252,chunk__26085_26253,count__26086_26254,i__26087_26255,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26129_26263,map__26129_26264__$1,gline_26265,gcol_26266,name_26267,vec__26118_26256,column_26257,column_info_26258,vec__26081_26249,line_26250,columns_26251,seq__25876_26243__$1,temp__5720__auto___26242,inverted))
,cljs.core.sorted_map.call(null)));


var G__26268 = seq__26121_26259;
var G__26269 = chunk__26122_26260;
var G__26270 = count__26123_26261;
var G__26271 = (i__26124_26262 + (1));
seq__26121_26259 = G__26268;
chunk__26122_26260 = G__26269;
count__26123_26261 = G__26270;
i__26124_26262 = G__26271;
continue;
} else {
var temp__5720__auto___26272__$1 = cljs.core.seq.call(null,seq__26121_26259);
if(temp__5720__auto___26272__$1){
var seq__26121_26273__$1 = temp__5720__auto___26272__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26121_26273__$1)){
var c__18773__auto___26274 = cljs.core.chunk_first.call(null,seq__26121_26273__$1);
var G__26275 = cljs.core.chunk_rest.call(null,seq__26121_26273__$1);
var G__26276 = c__18773__auto___26274;
var G__26277 = cljs.core.count.call(null,c__18773__auto___26274);
var G__26278 = (0);
seq__26121_26259 = G__26275;
chunk__26122_26260 = G__26276;
count__26123_26261 = G__26277;
i__26124_26262 = G__26278;
continue;
} else {
var map__26131_26279 = cljs.core.first.call(null,seq__26121_26273__$1);
var map__26131_26280__$1 = (((((!((map__26131_26279 == null))))?(((((map__26131_26279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26131_26279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26131_26279):map__26131_26279);
var gline_26281 = cljs.core.get.call(null,map__26131_26280__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26282 = cljs.core.get.call(null,map__26131_26280__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26283 = cljs.core.get.call(null,map__26131_26280__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26281], null),cljs.core.fnil.call(null,((function (seq__26121_26259,chunk__26122_26260,count__26123_26261,i__26124_26262,seq__26084_26252,chunk__26085_26253,count__26086_26254,i__26087_26255,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26131_26279,map__26131_26280__$1,gline_26281,gcol_26282,name_26283,seq__26121_26273__$1,temp__5720__auto___26272__$1,vec__26118_26256,column_26257,column_info_26258,vec__26081_26249,line_26250,columns_26251,seq__25876_26243__$1,temp__5720__auto___26242,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26282], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26250,new cljs.core.Keyword(null,"col","col",-1959363084),column_26257,new cljs.core.Keyword(null,"name","name",1843675177),name_26283], null));
});})(seq__26121_26259,chunk__26122_26260,count__26123_26261,i__26124_26262,seq__26084_26252,chunk__26085_26253,count__26086_26254,i__26087_26255,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26131_26279,map__26131_26280__$1,gline_26281,gcol_26282,name_26283,seq__26121_26273__$1,temp__5720__auto___26272__$1,vec__26118_26256,column_26257,column_info_26258,vec__26081_26249,line_26250,columns_26251,seq__25876_26243__$1,temp__5720__auto___26242,inverted))
,cljs.core.sorted_map.call(null)));


var G__26284 = cljs.core.next.call(null,seq__26121_26273__$1);
var G__26285 = null;
var G__26286 = (0);
var G__26287 = (0);
seq__26121_26259 = G__26284;
chunk__26122_26260 = G__26285;
count__26123_26261 = G__26286;
i__26124_26262 = G__26287;
continue;
}
} else {
}
}
break;
}


var G__26288 = seq__26084_26252;
var G__26289 = chunk__26085_26253;
var G__26290 = count__26086_26254;
var G__26291 = (i__26087_26255 + (1));
seq__26084_26252 = G__26288;
chunk__26085_26253 = G__26289;
count__26086_26254 = G__26290;
i__26087_26255 = G__26291;
continue;
} else {
var temp__5720__auto___26292__$1 = cljs.core.seq.call(null,seq__26084_26252);
if(temp__5720__auto___26292__$1){
var seq__26084_26293__$1 = temp__5720__auto___26292__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26084_26293__$1)){
var c__18773__auto___26294 = cljs.core.chunk_first.call(null,seq__26084_26293__$1);
var G__26295 = cljs.core.chunk_rest.call(null,seq__26084_26293__$1);
var G__26296 = c__18773__auto___26294;
var G__26297 = cljs.core.count.call(null,c__18773__auto___26294);
var G__26298 = (0);
seq__26084_26252 = G__26295;
chunk__26085_26253 = G__26296;
count__26086_26254 = G__26297;
i__26087_26255 = G__26298;
continue;
} else {
var vec__26133_26299 = cljs.core.first.call(null,seq__26084_26293__$1);
var column_26300 = cljs.core.nth.call(null,vec__26133_26299,(0),null);
var column_info_26301 = cljs.core.nth.call(null,vec__26133_26299,(1),null);
var seq__26136_26302 = cljs.core.seq.call(null,column_info_26301);
var chunk__26137_26303 = null;
var count__26138_26304 = (0);
var i__26139_26305 = (0);
while(true){
if((i__26139_26305 < count__26138_26304)){
var map__26144_26306 = cljs.core._nth.call(null,chunk__26137_26303,i__26139_26305);
var map__26144_26307__$1 = (((((!((map__26144_26306 == null))))?(((((map__26144_26306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26144_26306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26144_26306):map__26144_26306);
var gline_26308 = cljs.core.get.call(null,map__26144_26307__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26309 = cljs.core.get.call(null,map__26144_26307__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26310 = cljs.core.get.call(null,map__26144_26307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26308], null),cljs.core.fnil.call(null,((function (seq__26136_26302,chunk__26137_26303,count__26138_26304,i__26139_26305,seq__26084_26252,chunk__26085_26253,count__26086_26254,i__26087_26255,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26144_26306,map__26144_26307__$1,gline_26308,gcol_26309,name_26310,vec__26133_26299,column_26300,column_info_26301,seq__26084_26293__$1,temp__5720__auto___26292__$1,vec__26081_26249,line_26250,columns_26251,seq__25876_26243__$1,temp__5720__auto___26242,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26309], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26250,new cljs.core.Keyword(null,"col","col",-1959363084),column_26300,new cljs.core.Keyword(null,"name","name",1843675177),name_26310], null));
});})(seq__26136_26302,chunk__26137_26303,count__26138_26304,i__26139_26305,seq__26084_26252,chunk__26085_26253,count__26086_26254,i__26087_26255,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26144_26306,map__26144_26307__$1,gline_26308,gcol_26309,name_26310,vec__26133_26299,column_26300,column_info_26301,seq__26084_26293__$1,temp__5720__auto___26292__$1,vec__26081_26249,line_26250,columns_26251,seq__25876_26243__$1,temp__5720__auto___26242,inverted))
,cljs.core.sorted_map.call(null)));


var G__26311 = seq__26136_26302;
var G__26312 = chunk__26137_26303;
var G__26313 = count__26138_26304;
var G__26314 = (i__26139_26305 + (1));
seq__26136_26302 = G__26311;
chunk__26137_26303 = G__26312;
count__26138_26304 = G__26313;
i__26139_26305 = G__26314;
continue;
} else {
var temp__5720__auto___26315__$2 = cljs.core.seq.call(null,seq__26136_26302);
if(temp__5720__auto___26315__$2){
var seq__26136_26316__$1 = temp__5720__auto___26315__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26136_26316__$1)){
var c__18773__auto___26317 = cljs.core.chunk_first.call(null,seq__26136_26316__$1);
var G__26318 = cljs.core.chunk_rest.call(null,seq__26136_26316__$1);
var G__26319 = c__18773__auto___26317;
var G__26320 = cljs.core.count.call(null,c__18773__auto___26317);
var G__26321 = (0);
seq__26136_26302 = G__26318;
chunk__26137_26303 = G__26319;
count__26138_26304 = G__26320;
i__26139_26305 = G__26321;
continue;
} else {
var map__26146_26322 = cljs.core.first.call(null,seq__26136_26316__$1);
var map__26146_26323__$1 = (((((!((map__26146_26322 == null))))?(((((map__26146_26322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26146_26322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26146_26322):map__26146_26322);
var gline_26324 = cljs.core.get.call(null,map__26146_26323__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26325 = cljs.core.get.call(null,map__26146_26323__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26326 = cljs.core.get.call(null,map__26146_26323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26324], null),cljs.core.fnil.call(null,((function (seq__26136_26302,chunk__26137_26303,count__26138_26304,i__26139_26305,seq__26084_26252,chunk__26085_26253,count__26086_26254,i__26087_26255,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26146_26322,map__26146_26323__$1,gline_26324,gcol_26325,name_26326,seq__26136_26316__$1,temp__5720__auto___26315__$2,vec__26133_26299,column_26300,column_info_26301,seq__26084_26293__$1,temp__5720__auto___26292__$1,vec__26081_26249,line_26250,columns_26251,seq__25876_26243__$1,temp__5720__auto___26242,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26325], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26250,new cljs.core.Keyword(null,"col","col",-1959363084),column_26300,new cljs.core.Keyword(null,"name","name",1843675177),name_26326], null));
});})(seq__26136_26302,chunk__26137_26303,count__26138_26304,i__26139_26305,seq__26084_26252,chunk__26085_26253,count__26086_26254,i__26087_26255,seq__25876_26148,chunk__25877_26149,count__25878_26150,i__25879_26151,map__26146_26322,map__26146_26323__$1,gline_26324,gcol_26325,name_26326,seq__26136_26316__$1,temp__5720__auto___26315__$2,vec__26133_26299,column_26300,column_info_26301,seq__26084_26293__$1,temp__5720__auto___26292__$1,vec__26081_26249,line_26250,columns_26251,seq__25876_26243__$1,temp__5720__auto___26242,inverted))
,cljs.core.sorted_map.call(null)));


var G__26327 = cljs.core.next.call(null,seq__26136_26316__$1);
var G__26328 = null;
var G__26329 = (0);
var G__26330 = (0);
seq__26136_26302 = G__26327;
chunk__26137_26303 = G__26328;
count__26138_26304 = G__26329;
i__26139_26305 = G__26330;
continue;
}
} else {
}
}
break;
}


var G__26331 = cljs.core.next.call(null,seq__26084_26293__$1);
var G__26332 = null;
var G__26333 = (0);
var G__26334 = (0);
seq__26084_26252 = G__26331;
chunk__26085_26253 = G__26332;
count__26086_26254 = G__26333;
i__26087_26255 = G__26334;
continue;
}
} else {
}
}
break;
}


var G__26335 = cljs.core.next.call(null,seq__25876_26243__$1);
var G__26336 = null;
var G__26337 = (0);
var G__26338 = (0);
seq__25876_26148 = G__26335;
chunk__25877_26149 = G__26336;
count__25878_26150 = G__26337;
i__25879_26151 = G__26338;
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
