// Compiled by ClojureScript 1.10.520 {}
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
return cljs.core.reduce.call(null,(function (m,p__10004){
var vec__10005 = p__10004;
var i = cljs.core.nth.call(null,vec__10005,(0),null);
var v = cljs.core.nth.call(null,vec__10005,(1),null);
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
var vec__10008 = seg;
var gcol = cljs.core.nth.call(null,vec__10008,(0),null);
var source = cljs.core.nth.call(null,vec__10008,(1),null);
var line = cljs.core.nth.call(null,vec__10008,(2),null);
var col = cljs.core.nth.call(null,vec__10008,(3),null);
var name = cljs.core.nth.call(null,vec__10008,(4),null);
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
var vec__10011 = seg;
var gcol = cljs.core.nth.call(null,vec__10011,(0),null);
var source = cljs.core.nth.call(null,vec__10011,(1),null);
var line = cljs.core.nth.call(null,vec__10011,(2),null);
var col = cljs.core.nth.call(null,vec__10011,(3),null);
var name = cljs.core.nth.call(null,vec__10011,(4),null);
var vec__10014 = relseg;
var rgcol = cljs.core.nth.call(null,vec__10014,(0),null);
var rsource = cljs.core.nth.call(null,vec__10014,(1),null);
var rline = cljs.core.nth.call(null,vec__10014,(2),null);
var rcol = cljs.core.nth.call(null,vec__10014,(3),null);
var rname = cljs.core.nth.call(null,vec__10014,(4),null);
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
var map__10017 = segmap;
var map__10017__$1 = (((((!((map__10017 == null))))?(((((map__10017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10017):map__10017);
var gcol = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__10017,map__10017__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__10017,map__10017__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__10017,map__10017__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__10017,map__10017__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10017,map__10017__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__10017,map__10017__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__10020 = arguments.length;
switch (G__10020) {
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
var vec__10024 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10028 = cljs.core.next.call(null,segs__$1);
var G__10029 = nrelseg;
var G__10030 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10028;
relseg__$1 = G__10029;
result__$1 = G__10030;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10024,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10024,(1),null);
var G__10031 = (gline + (1));
var G__10032 = cljs.core.next.call(null,lines__$1);
var G__10033 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10034 = result__$1;
gline = G__10031;
lines__$1 = G__10032;
relseg = G__10033;
result = G__10034;
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
var map__10036 = segmap;
var map__10036__$1 = (((((!((map__10036 == null))))?(((((map__10036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10036):map__10036);
var gcol = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__10036,map__10036__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__10036,map__10036__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__10035_SHARP_){
return cljs.core.conj.call(null,p1__10035_SHARP_,d__$1);
});})(map__10036,map__10036__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10036,map__10036__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__10039 = arguments.length;
switch (G__10039) {
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
var vec__10043 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10047 = cljs.core.next.call(null,segs__$1);
var G__10048 = nrelseg;
var G__10049 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10047;
relseg__$1 = G__10048;
result__$1 = G__10049;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10043,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10043,(1),null);
var G__10050 = (gline + (1));
var G__10051 = cljs.core.next.call(null,lines__$1);
var G__10052 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10053 = result__$1;
gline = G__10050;
lines__$1 = G__10051;
relseg = G__10052;
result = G__10053;
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
return (function (p__10054){
var vec__10055 = p__10054;
var _ = cljs.core.nth.call(null,vec__10055,(0),null);
var source = cljs.core.nth.call(null,vec__10055,(1),null);
var line = cljs.core.nth.call(null,vec__10055,(2),null);
var col = cljs.core.nth.call(null,vec__10055,(3),null);
var name = cljs.core.nth.call(null,vec__10055,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__10058){
var vec__10059 = p__10058;
var gcol = cljs.core.nth.call(null,vec__10059,(0),null);
var sidx = cljs.core.nth.call(null,vec__10059,(1),null);
var line = cljs.core.nth.call(null,vec__10059,(2),null);
var col = cljs.core.nth.call(null,vec__10059,(3),null);
var name = cljs.core.nth.call(null,vec__10059,(4),null);
var seg = vec__10059;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__10059,gcol,sidx,line,col,name,seg,relseg){
return (function (p__10062){
var vec__10063 = p__10062;
var _ = cljs.core.nth.call(null,vec__10063,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10063,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10063,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10063,(3),null);
var lname = cljs.core.nth.call(null,vec__10063,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__10059,gcol,sidx,line,col,name,seg,relseg))
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
var seq__10069 = cljs.core.seq.call(null,infos);
var chunk__10070 = null;
var count__10071 = (0);
var i__10072 = (0);
while(true){
if((i__10072 < count__10071)){
var info = cljs.core._nth.call(null,chunk__10070,i__10072);
var segv_10423 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10424 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10425 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10424 > (lc_10425 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10069,chunk__10070,count__10071,i__10072,segv_10423,gline_10424,lc_10425,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10424 - (lc_10425 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10423], null));
});})(seq__10069,chunk__10070,count__10071,i__10072,segv_10423,gline_10424,lc_10425,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10069,chunk__10070,count__10071,i__10072,segv_10423,gline_10424,lc_10425,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10424], null),cljs.core.conj,segv_10423);
});})(seq__10069,chunk__10070,count__10071,i__10072,segv_10423,gline_10424,lc_10425,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10426 = seq__10069;
var G__10427 = chunk__10070;
var G__10428 = count__10071;
var G__10429 = (i__10072 + (1));
seq__10069 = G__10426;
chunk__10070 = G__10427;
count__10071 = G__10428;
i__10072 = G__10429;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10069);
if(temp__5720__auto__){
var seq__10069__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10069__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10069__$1);
var G__10430 = cljs.core.chunk_rest.call(null,seq__10069__$1);
var G__10431 = c__4550__auto__;
var G__10432 = cljs.core.count.call(null,c__4550__auto__);
var G__10433 = (0);
seq__10069 = G__10430;
chunk__10070 = G__10431;
count__10071 = G__10432;
i__10072 = G__10433;
continue;
} else {
var info = cljs.core.first.call(null,seq__10069__$1);
var segv_10434 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10435 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10436 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10435 > (lc_10436 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10069,chunk__10070,count__10071,i__10072,segv_10434,gline_10435,lc_10436,info,seq__10069__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10435 - (lc_10436 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10434], null));
});})(seq__10069,chunk__10070,count__10071,i__10072,segv_10434,gline_10435,lc_10436,info,seq__10069__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10069,chunk__10070,count__10071,i__10072,segv_10434,gline_10435,lc_10436,info,seq__10069__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10435], null),cljs.core.conj,segv_10434);
});})(seq__10069,chunk__10070,count__10071,i__10072,segv_10434,gline_10435,lc_10436,info,seq__10069__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10437 = cljs.core.next.call(null,seq__10069__$1);
var G__10438 = null;
var G__10439 = (0);
var G__10440 = (0);
seq__10069 = G__10437;
chunk__10070 = G__10438;
count__10071 = G__10439;
i__10072 = G__10440;
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
var seq__10073_10441 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__10074_10442 = null;
var count__10075_10443 = (0);
var i__10076_10444 = (0);
while(true){
if((i__10076_10444 < count__10075_10443)){
var vec__10249_10445 = cljs.core._nth.call(null,chunk__10074_10442,i__10076_10444);
var source_idx_10446 = cljs.core.nth.call(null,vec__10249_10445,(0),null);
var vec__10252_10447 = cljs.core.nth.call(null,vec__10249_10445,(1),null);
var __10448 = cljs.core.nth.call(null,vec__10252_10447,(0),null);
var lines_10449__$1 = cljs.core.nth.call(null,vec__10252_10447,(1),null);
var seq__10255_10450 = cljs.core.seq.call(null,lines_10449__$1);
var chunk__10256_10451 = null;
var count__10257_10452 = (0);
var i__10258_10453 = (0);
while(true){
if((i__10258_10453 < count__10257_10452)){
var vec__10297_10454 = cljs.core._nth.call(null,chunk__10256_10451,i__10258_10453);
var line_10455 = cljs.core.nth.call(null,vec__10297_10454,(0),null);
var cols_10456 = cljs.core.nth.call(null,vec__10297_10454,(1),null);
var seq__10300_10457 = cljs.core.seq.call(null,cols_10456);
var chunk__10301_10458 = null;
var count__10302_10459 = (0);
var i__10303_10460 = (0);
while(true){
if((i__10303_10460 < count__10302_10459)){
var vec__10310_10461 = cljs.core._nth.call(null,chunk__10301_10458,i__10303_10460);
var col_10462 = cljs.core.nth.call(null,vec__10310_10461,(0),null);
var infos_10463 = cljs.core.nth.call(null,vec__10310_10461,(1),null);
encode_cols.call(null,infos_10463,source_idx_10446,line_10455,col_10462);


var G__10464 = seq__10300_10457;
var G__10465 = chunk__10301_10458;
var G__10466 = count__10302_10459;
var G__10467 = (i__10303_10460 + (1));
seq__10300_10457 = G__10464;
chunk__10301_10458 = G__10465;
count__10302_10459 = G__10466;
i__10303_10460 = G__10467;
continue;
} else {
var temp__5720__auto___10468 = cljs.core.seq.call(null,seq__10300_10457);
if(temp__5720__auto___10468){
var seq__10300_10469__$1 = temp__5720__auto___10468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10300_10469__$1)){
var c__4550__auto___10470 = cljs.core.chunk_first.call(null,seq__10300_10469__$1);
var G__10471 = cljs.core.chunk_rest.call(null,seq__10300_10469__$1);
var G__10472 = c__4550__auto___10470;
var G__10473 = cljs.core.count.call(null,c__4550__auto___10470);
var G__10474 = (0);
seq__10300_10457 = G__10471;
chunk__10301_10458 = G__10472;
count__10302_10459 = G__10473;
i__10303_10460 = G__10474;
continue;
} else {
var vec__10313_10475 = cljs.core.first.call(null,seq__10300_10469__$1);
var col_10476 = cljs.core.nth.call(null,vec__10313_10475,(0),null);
var infos_10477 = cljs.core.nth.call(null,vec__10313_10475,(1),null);
encode_cols.call(null,infos_10477,source_idx_10446,line_10455,col_10476);


var G__10478 = cljs.core.next.call(null,seq__10300_10469__$1);
var G__10479 = null;
var G__10480 = (0);
var G__10481 = (0);
seq__10300_10457 = G__10478;
chunk__10301_10458 = G__10479;
count__10302_10459 = G__10480;
i__10303_10460 = G__10481;
continue;
}
} else {
}
}
break;
}


var G__10482 = seq__10255_10450;
var G__10483 = chunk__10256_10451;
var G__10484 = count__10257_10452;
var G__10485 = (i__10258_10453 + (1));
seq__10255_10450 = G__10482;
chunk__10256_10451 = G__10483;
count__10257_10452 = G__10484;
i__10258_10453 = G__10485;
continue;
} else {
var temp__5720__auto___10486 = cljs.core.seq.call(null,seq__10255_10450);
if(temp__5720__auto___10486){
var seq__10255_10487__$1 = temp__5720__auto___10486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10255_10487__$1)){
var c__4550__auto___10488 = cljs.core.chunk_first.call(null,seq__10255_10487__$1);
var G__10489 = cljs.core.chunk_rest.call(null,seq__10255_10487__$1);
var G__10490 = c__4550__auto___10488;
var G__10491 = cljs.core.count.call(null,c__4550__auto___10488);
var G__10492 = (0);
seq__10255_10450 = G__10489;
chunk__10256_10451 = G__10490;
count__10257_10452 = G__10491;
i__10258_10453 = G__10492;
continue;
} else {
var vec__10316_10493 = cljs.core.first.call(null,seq__10255_10487__$1);
var line_10494 = cljs.core.nth.call(null,vec__10316_10493,(0),null);
var cols_10495 = cljs.core.nth.call(null,vec__10316_10493,(1),null);
var seq__10319_10496 = cljs.core.seq.call(null,cols_10495);
var chunk__10320_10497 = null;
var count__10321_10498 = (0);
var i__10322_10499 = (0);
while(true){
if((i__10322_10499 < count__10321_10498)){
var vec__10329_10500 = cljs.core._nth.call(null,chunk__10320_10497,i__10322_10499);
var col_10501 = cljs.core.nth.call(null,vec__10329_10500,(0),null);
var infos_10502 = cljs.core.nth.call(null,vec__10329_10500,(1),null);
encode_cols.call(null,infos_10502,source_idx_10446,line_10494,col_10501);


var G__10503 = seq__10319_10496;
var G__10504 = chunk__10320_10497;
var G__10505 = count__10321_10498;
var G__10506 = (i__10322_10499 + (1));
seq__10319_10496 = G__10503;
chunk__10320_10497 = G__10504;
count__10321_10498 = G__10505;
i__10322_10499 = G__10506;
continue;
} else {
var temp__5720__auto___10507__$1 = cljs.core.seq.call(null,seq__10319_10496);
if(temp__5720__auto___10507__$1){
var seq__10319_10508__$1 = temp__5720__auto___10507__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10319_10508__$1)){
var c__4550__auto___10509 = cljs.core.chunk_first.call(null,seq__10319_10508__$1);
var G__10510 = cljs.core.chunk_rest.call(null,seq__10319_10508__$1);
var G__10511 = c__4550__auto___10509;
var G__10512 = cljs.core.count.call(null,c__4550__auto___10509);
var G__10513 = (0);
seq__10319_10496 = G__10510;
chunk__10320_10497 = G__10511;
count__10321_10498 = G__10512;
i__10322_10499 = G__10513;
continue;
} else {
var vec__10332_10514 = cljs.core.first.call(null,seq__10319_10508__$1);
var col_10515 = cljs.core.nth.call(null,vec__10332_10514,(0),null);
var infos_10516 = cljs.core.nth.call(null,vec__10332_10514,(1),null);
encode_cols.call(null,infos_10516,source_idx_10446,line_10494,col_10515);


var G__10517 = cljs.core.next.call(null,seq__10319_10508__$1);
var G__10518 = null;
var G__10519 = (0);
var G__10520 = (0);
seq__10319_10496 = G__10517;
chunk__10320_10497 = G__10518;
count__10321_10498 = G__10519;
i__10322_10499 = G__10520;
continue;
}
} else {
}
}
break;
}


var G__10521 = cljs.core.next.call(null,seq__10255_10487__$1);
var G__10522 = null;
var G__10523 = (0);
var G__10524 = (0);
seq__10255_10450 = G__10521;
chunk__10256_10451 = G__10522;
count__10257_10452 = G__10523;
i__10258_10453 = G__10524;
continue;
}
} else {
}
}
break;
}


var G__10525 = seq__10073_10441;
var G__10526 = chunk__10074_10442;
var G__10527 = count__10075_10443;
var G__10528 = (i__10076_10444 + (1));
seq__10073_10441 = G__10525;
chunk__10074_10442 = G__10526;
count__10075_10443 = G__10527;
i__10076_10444 = G__10528;
continue;
} else {
var temp__5720__auto___10529 = cljs.core.seq.call(null,seq__10073_10441);
if(temp__5720__auto___10529){
var seq__10073_10530__$1 = temp__5720__auto___10529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10073_10530__$1)){
var c__4550__auto___10531 = cljs.core.chunk_first.call(null,seq__10073_10530__$1);
var G__10532 = cljs.core.chunk_rest.call(null,seq__10073_10530__$1);
var G__10533 = c__4550__auto___10531;
var G__10534 = cljs.core.count.call(null,c__4550__auto___10531);
var G__10535 = (0);
seq__10073_10441 = G__10532;
chunk__10074_10442 = G__10533;
count__10075_10443 = G__10534;
i__10076_10444 = G__10535;
continue;
} else {
var vec__10335_10536 = cljs.core.first.call(null,seq__10073_10530__$1);
var source_idx_10537 = cljs.core.nth.call(null,vec__10335_10536,(0),null);
var vec__10338_10538 = cljs.core.nth.call(null,vec__10335_10536,(1),null);
var __10539 = cljs.core.nth.call(null,vec__10338_10538,(0),null);
var lines_10540__$1 = cljs.core.nth.call(null,vec__10338_10538,(1),null);
var seq__10341_10541 = cljs.core.seq.call(null,lines_10540__$1);
var chunk__10342_10542 = null;
var count__10343_10543 = (0);
var i__10344_10544 = (0);
while(true){
if((i__10344_10544 < count__10343_10543)){
var vec__10383_10545 = cljs.core._nth.call(null,chunk__10342_10542,i__10344_10544);
var line_10546 = cljs.core.nth.call(null,vec__10383_10545,(0),null);
var cols_10547 = cljs.core.nth.call(null,vec__10383_10545,(1),null);
var seq__10386_10548 = cljs.core.seq.call(null,cols_10547);
var chunk__10387_10549 = null;
var count__10388_10550 = (0);
var i__10389_10551 = (0);
while(true){
if((i__10389_10551 < count__10388_10550)){
var vec__10396_10552 = cljs.core._nth.call(null,chunk__10387_10549,i__10389_10551);
var col_10553 = cljs.core.nth.call(null,vec__10396_10552,(0),null);
var infos_10554 = cljs.core.nth.call(null,vec__10396_10552,(1),null);
encode_cols.call(null,infos_10554,source_idx_10537,line_10546,col_10553);


var G__10555 = seq__10386_10548;
var G__10556 = chunk__10387_10549;
var G__10557 = count__10388_10550;
var G__10558 = (i__10389_10551 + (1));
seq__10386_10548 = G__10555;
chunk__10387_10549 = G__10556;
count__10388_10550 = G__10557;
i__10389_10551 = G__10558;
continue;
} else {
var temp__5720__auto___10559__$1 = cljs.core.seq.call(null,seq__10386_10548);
if(temp__5720__auto___10559__$1){
var seq__10386_10560__$1 = temp__5720__auto___10559__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10386_10560__$1)){
var c__4550__auto___10561 = cljs.core.chunk_first.call(null,seq__10386_10560__$1);
var G__10562 = cljs.core.chunk_rest.call(null,seq__10386_10560__$1);
var G__10563 = c__4550__auto___10561;
var G__10564 = cljs.core.count.call(null,c__4550__auto___10561);
var G__10565 = (0);
seq__10386_10548 = G__10562;
chunk__10387_10549 = G__10563;
count__10388_10550 = G__10564;
i__10389_10551 = G__10565;
continue;
} else {
var vec__10399_10566 = cljs.core.first.call(null,seq__10386_10560__$1);
var col_10567 = cljs.core.nth.call(null,vec__10399_10566,(0),null);
var infos_10568 = cljs.core.nth.call(null,vec__10399_10566,(1),null);
encode_cols.call(null,infos_10568,source_idx_10537,line_10546,col_10567);


var G__10569 = cljs.core.next.call(null,seq__10386_10560__$1);
var G__10570 = null;
var G__10571 = (0);
var G__10572 = (0);
seq__10386_10548 = G__10569;
chunk__10387_10549 = G__10570;
count__10388_10550 = G__10571;
i__10389_10551 = G__10572;
continue;
}
} else {
}
}
break;
}


var G__10573 = seq__10341_10541;
var G__10574 = chunk__10342_10542;
var G__10575 = count__10343_10543;
var G__10576 = (i__10344_10544 + (1));
seq__10341_10541 = G__10573;
chunk__10342_10542 = G__10574;
count__10343_10543 = G__10575;
i__10344_10544 = G__10576;
continue;
} else {
var temp__5720__auto___10577__$1 = cljs.core.seq.call(null,seq__10341_10541);
if(temp__5720__auto___10577__$1){
var seq__10341_10578__$1 = temp__5720__auto___10577__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10341_10578__$1)){
var c__4550__auto___10579 = cljs.core.chunk_first.call(null,seq__10341_10578__$1);
var G__10580 = cljs.core.chunk_rest.call(null,seq__10341_10578__$1);
var G__10581 = c__4550__auto___10579;
var G__10582 = cljs.core.count.call(null,c__4550__auto___10579);
var G__10583 = (0);
seq__10341_10541 = G__10580;
chunk__10342_10542 = G__10581;
count__10343_10543 = G__10582;
i__10344_10544 = G__10583;
continue;
} else {
var vec__10402_10584 = cljs.core.first.call(null,seq__10341_10578__$1);
var line_10585 = cljs.core.nth.call(null,vec__10402_10584,(0),null);
var cols_10586 = cljs.core.nth.call(null,vec__10402_10584,(1),null);
var seq__10405_10587 = cljs.core.seq.call(null,cols_10586);
var chunk__10406_10588 = null;
var count__10407_10589 = (0);
var i__10408_10590 = (0);
while(true){
if((i__10408_10590 < count__10407_10589)){
var vec__10415_10591 = cljs.core._nth.call(null,chunk__10406_10588,i__10408_10590);
var col_10592 = cljs.core.nth.call(null,vec__10415_10591,(0),null);
var infos_10593 = cljs.core.nth.call(null,vec__10415_10591,(1),null);
encode_cols.call(null,infos_10593,source_idx_10537,line_10585,col_10592);


var G__10594 = seq__10405_10587;
var G__10595 = chunk__10406_10588;
var G__10596 = count__10407_10589;
var G__10597 = (i__10408_10590 + (1));
seq__10405_10587 = G__10594;
chunk__10406_10588 = G__10595;
count__10407_10589 = G__10596;
i__10408_10590 = G__10597;
continue;
} else {
var temp__5720__auto___10598__$2 = cljs.core.seq.call(null,seq__10405_10587);
if(temp__5720__auto___10598__$2){
var seq__10405_10599__$1 = temp__5720__auto___10598__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10405_10599__$1)){
var c__4550__auto___10600 = cljs.core.chunk_first.call(null,seq__10405_10599__$1);
var G__10601 = cljs.core.chunk_rest.call(null,seq__10405_10599__$1);
var G__10602 = c__4550__auto___10600;
var G__10603 = cljs.core.count.call(null,c__4550__auto___10600);
var G__10604 = (0);
seq__10405_10587 = G__10601;
chunk__10406_10588 = G__10602;
count__10407_10589 = G__10603;
i__10408_10590 = G__10604;
continue;
} else {
var vec__10418_10605 = cljs.core.first.call(null,seq__10405_10599__$1);
var col_10606 = cljs.core.nth.call(null,vec__10418_10605,(0),null);
var infos_10607 = cljs.core.nth.call(null,vec__10418_10605,(1),null);
encode_cols.call(null,infos_10607,source_idx_10537,line_10585,col_10606);


var G__10608 = cljs.core.next.call(null,seq__10405_10599__$1);
var G__10609 = null;
var G__10610 = (0);
var G__10611 = (0);
seq__10405_10587 = G__10608;
chunk__10406_10588 = G__10609;
count__10407_10589 = G__10610;
i__10408_10590 = G__10611;
continue;
}
} else {
}
}
break;
}


var G__10612 = cljs.core.next.call(null,seq__10341_10578__$1);
var G__10613 = null;
var G__10614 = (0);
var G__10615 = (0);
seq__10341_10541 = G__10612;
chunk__10342_10542 = G__10613;
count__10343_10543 = G__10614;
i__10344_10544 = G__10615;
continue;
}
} else {
}
}
break;
}


var G__10616 = cljs.core.next.call(null,seq__10073_10530__$1);
var G__10617 = null;
var G__10618 = (0);
var G__10619 = (0);
seq__10073_10441 = G__10616;
chunk__10074_10442 = G__10617;
count__10075_10443 = G__10618;
i__10076_10444 = G__10619;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__10421 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10066_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10066_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10067_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__10067_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10068_SHARP_){
return clojure.string.join.call(null,",",p1__10068_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__10422 = G__10421;
goog.object.set(G__10422,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__10422;
} else {
return G__10421;
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
var vec__10620 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__10620,(0),null);
var col_map = cljs.core.nth.call(null,vec__10620,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__10623 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__10623,(0),null);
var infos = cljs.core.nth.call(null,vec__10623,(1),null);
var G__10629 = cljs.core.next.call(null,col_map_seq);
var G__10630 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__10623,col,infos,vec__10620,line,col_map){
return (function (v,p__10626){
var map__10627 = p__10626;
var map__10627__$1 = (((((!((map__10627 == null))))?(((((map__10627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10627):map__10627);
var gline = cljs.core.get.call(null,map__10627__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__10627__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__10623,col,infos,vec__10620,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__10629;
new_cols = G__10630;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__10631 = cljs.core.next.call(null,line_map_seq);
var G__10632 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__10631;
new_lines = G__10632;
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
var seq__10633_10905 = cljs.core.seq.call(null,reverse_map);
var chunk__10634_10906 = null;
var count__10635_10907 = (0);
var i__10636_10908 = (0);
while(true){
if((i__10636_10908 < count__10635_10907)){
var vec__10771_10909 = cljs.core._nth.call(null,chunk__10634_10906,i__10636_10908);
var line_10910 = cljs.core.nth.call(null,vec__10771_10909,(0),null);
var columns_10911 = cljs.core.nth.call(null,vec__10771_10909,(1),null);
var seq__10774_10912 = cljs.core.seq.call(null,columns_10911);
var chunk__10775_10913 = null;
var count__10776_10914 = (0);
var i__10777_10915 = (0);
while(true){
if((i__10777_10915 < count__10776_10914)){
var vec__10808_10916 = cljs.core._nth.call(null,chunk__10775_10913,i__10777_10915);
var column_10917 = cljs.core.nth.call(null,vec__10808_10916,(0),null);
var column_info_10918 = cljs.core.nth.call(null,vec__10808_10916,(1),null);
var seq__10811_10919 = cljs.core.seq.call(null,column_info_10918);
var chunk__10812_10920 = null;
var count__10813_10921 = (0);
var i__10814_10922 = (0);
while(true){
if((i__10814_10922 < count__10813_10921)){
var map__10819_10923 = cljs.core._nth.call(null,chunk__10812_10920,i__10814_10922);
var map__10819_10924__$1 = (((((!((map__10819_10923 == null))))?(((((map__10819_10923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10819_10923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10819_10923):map__10819_10923);
var gline_10925 = cljs.core.get.call(null,map__10819_10924__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10926 = cljs.core.get.call(null,map__10819_10924__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10927 = cljs.core.get.call(null,map__10819_10924__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10925], null),cljs.core.fnil.call(null,((function (seq__10811_10919,chunk__10812_10920,count__10813_10921,i__10814_10922,seq__10774_10912,chunk__10775_10913,count__10776_10914,i__10777_10915,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10819_10923,map__10819_10924__$1,gline_10925,gcol_10926,name_10927,vec__10808_10916,column_10917,column_info_10918,vec__10771_10909,line_10910,columns_10911,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10926], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10910,new cljs.core.Keyword(null,"col","col",-1959363084),column_10917,new cljs.core.Keyword(null,"name","name",1843675177),name_10927], null));
});})(seq__10811_10919,chunk__10812_10920,count__10813_10921,i__10814_10922,seq__10774_10912,chunk__10775_10913,count__10776_10914,i__10777_10915,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10819_10923,map__10819_10924__$1,gline_10925,gcol_10926,name_10927,vec__10808_10916,column_10917,column_info_10918,vec__10771_10909,line_10910,columns_10911,inverted))
,cljs.core.sorted_map.call(null)));


var G__10928 = seq__10811_10919;
var G__10929 = chunk__10812_10920;
var G__10930 = count__10813_10921;
var G__10931 = (i__10814_10922 + (1));
seq__10811_10919 = G__10928;
chunk__10812_10920 = G__10929;
count__10813_10921 = G__10930;
i__10814_10922 = G__10931;
continue;
} else {
var temp__5720__auto___10932 = cljs.core.seq.call(null,seq__10811_10919);
if(temp__5720__auto___10932){
var seq__10811_10933__$1 = temp__5720__auto___10932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10811_10933__$1)){
var c__4550__auto___10934 = cljs.core.chunk_first.call(null,seq__10811_10933__$1);
var G__10935 = cljs.core.chunk_rest.call(null,seq__10811_10933__$1);
var G__10936 = c__4550__auto___10934;
var G__10937 = cljs.core.count.call(null,c__4550__auto___10934);
var G__10938 = (0);
seq__10811_10919 = G__10935;
chunk__10812_10920 = G__10936;
count__10813_10921 = G__10937;
i__10814_10922 = G__10938;
continue;
} else {
var map__10821_10939 = cljs.core.first.call(null,seq__10811_10933__$1);
var map__10821_10940__$1 = (((((!((map__10821_10939 == null))))?(((((map__10821_10939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10821_10939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10821_10939):map__10821_10939);
var gline_10941 = cljs.core.get.call(null,map__10821_10940__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10942 = cljs.core.get.call(null,map__10821_10940__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10943 = cljs.core.get.call(null,map__10821_10940__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10941], null),cljs.core.fnil.call(null,((function (seq__10811_10919,chunk__10812_10920,count__10813_10921,i__10814_10922,seq__10774_10912,chunk__10775_10913,count__10776_10914,i__10777_10915,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10821_10939,map__10821_10940__$1,gline_10941,gcol_10942,name_10943,seq__10811_10933__$1,temp__5720__auto___10932,vec__10808_10916,column_10917,column_info_10918,vec__10771_10909,line_10910,columns_10911,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10942], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10910,new cljs.core.Keyword(null,"col","col",-1959363084),column_10917,new cljs.core.Keyword(null,"name","name",1843675177),name_10943], null));
});})(seq__10811_10919,chunk__10812_10920,count__10813_10921,i__10814_10922,seq__10774_10912,chunk__10775_10913,count__10776_10914,i__10777_10915,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10821_10939,map__10821_10940__$1,gline_10941,gcol_10942,name_10943,seq__10811_10933__$1,temp__5720__auto___10932,vec__10808_10916,column_10917,column_info_10918,vec__10771_10909,line_10910,columns_10911,inverted))
,cljs.core.sorted_map.call(null)));


var G__10944 = cljs.core.next.call(null,seq__10811_10933__$1);
var G__10945 = null;
var G__10946 = (0);
var G__10947 = (0);
seq__10811_10919 = G__10944;
chunk__10812_10920 = G__10945;
count__10813_10921 = G__10946;
i__10814_10922 = G__10947;
continue;
}
} else {
}
}
break;
}


var G__10948 = seq__10774_10912;
var G__10949 = chunk__10775_10913;
var G__10950 = count__10776_10914;
var G__10951 = (i__10777_10915 + (1));
seq__10774_10912 = G__10948;
chunk__10775_10913 = G__10949;
count__10776_10914 = G__10950;
i__10777_10915 = G__10951;
continue;
} else {
var temp__5720__auto___10952 = cljs.core.seq.call(null,seq__10774_10912);
if(temp__5720__auto___10952){
var seq__10774_10953__$1 = temp__5720__auto___10952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10774_10953__$1)){
var c__4550__auto___10954 = cljs.core.chunk_first.call(null,seq__10774_10953__$1);
var G__10955 = cljs.core.chunk_rest.call(null,seq__10774_10953__$1);
var G__10956 = c__4550__auto___10954;
var G__10957 = cljs.core.count.call(null,c__4550__auto___10954);
var G__10958 = (0);
seq__10774_10912 = G__10955;
chunk__10775_10913 = G__10956;
count__10776_10914 = G__10957;
i__10777_10915 = G__10958;
continue;
} else {
var vec__10823_10959 = cljs.core.first.call(null,seq__10774_10953__$1);
var column_10960 = cljs.core.nth.call(null,vec__10823_10959,(0),null);
var column_info_10961 = cljs.core.nth.call(null,vec__10823_10959,(1),null);
var seq__10826_10962 = cljs.core.seq.call(null,column_info_10961);
var chunk__10827_10963 = null;
var count__10828_10964 = (0);
var i__10829_10965 = (0);
while(true){
if((i__10829_10965 < count__10828_10964)){
var map__10834_10966 = cljs.core._nth.call(null,chunk__10827_10963,i__10829_10965);
var map__10834_10967__$1 = (((((!((map__10834_10966 == null))))?(((((map__10834_10966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10834_10966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10834_10966):map__10834_10966);
var gline_10968 = cljs.core.get.call(null,map__10834_10967__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10969 = cljs.core.get.call(null,map__10834_10967__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10970 = cljs.core.get.call(null,map__10834_10967__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10968], null),cljs.core.fnil.call(null,((function (seq__10826_10962,chunk__10827_10963,count__10828_10964,i__10829_10965,seq__10774_10912,chunk__10775_10913,count__10776_10914,i__10777_10915,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10834_10966,map__10834_10967__$1,gline_10968,gcol_10969,name_10970,vec__10823_10959,column_10960,column_info_10961,seq__10774_10953__$1,temp__5720__auto___10952,vec__10771_10909,line_10910,columns_10911,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10969], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10910,new cljs.core.Keyword(null,"col","col",-1959363084),column_10960,new cljs.core.Keyword(null,"name","name",1843675177),name_10970], null));
});})(seq__10826_10962,chunk__10827_10963,count__10828_10964,i__10829_10965,seq__10774_10912,chunk__10775_10913,count__10776_10914,i__10777_10915,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10834_10966,map__10834_10967__$1,gline_10968,gcol_10969,name_10970,vec__10823_10959,column_10960,column_info_10961,seq__10774_10953__$1,temp__5720__auto___10952,vec__10771_10909,line_10910,columns_10911,inverted))
,cljs.core.sorted_map.call(null)));


var G__10971 = seq__10826_10962;
var G__10972 = chunk__10827_10963;
var G__10973 = count__10828_10964;
var G__10974 = (i__10829_10965 + (1));
seq__10826_10962 = G__10971;
chunk__10827_10963 = G__10972;
count__10828_10964 = G__10973;
i__10829_10965 = G__10974;
continue;
} else {
var temp__5720__auto___10975__$1 = cljs.core.seq.call(null,seq__10826_10962);
if(temp__5720__auto___10975__$1){
var seq__10826_10976__$1 = temp__5720__auto___10975__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10826_10976__$1)){
var c__4550__auto___10977 = cljs.core.chunk_first.call(null,seq__10826_10976__$1);
var G__10978 = cljs.core.chunk_rest.call(null,seq__10826_10976__$1);
var G__10979 = c__4550__auto___10977;
var G__10980 = cljs.core.count.call(null,c__4550__auto___10977);
var G__10981 = (0);
seq__10826_10962 = G__10978;
chunk__10827_10963 = G__10979;
count__10828_10964 = G__10980;
i__10829_10965 = G__10981;
continue;
} else {
var map__10836_10982 = cljs.core.first.call(null,seq__10826_10976__$1);
var map__10836_10983__$1 = (((((!((map__10836_10982 == null))))?(((((map__10836_10982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10836_10982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10836_10982):map__10836_10982);
var gline_10984 = cljs.core.get.call(null,map__10836_10983__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10985 = cljs.core.get.call(null,map__10836_10983__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10986 = cljs.core.get.call(null,map__10836_10983__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10984], null),cljs.core.fnil.call(null,((function (seq__10826_10962,chunk__10827_10963,count__10828_10964,i__10829_10965,seq__10774_10912,chunk__10775_10913,count__10776_10914,i__10777_10915,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10836_10982,map__10836_10983__$1,gline_10984,gcol_10985,name_10986,seq__10826_10976__$1,temp__5720__auto___10975__$1,vec__10823_10959,column_10960,column_info_10961,seq__10774_10953__$1,temp__5720__auto___10952,vec__10771_10909,line_10910,columns_10911,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10985], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10910,new cljs.core.Keyword(null,"col","col",-1959363084),column_10960,new cljs.core.Keyword(null,"name","name",1843675177),name_10986], null));
});})(seq__10826_10962,chunk__10827_10963,count__10828_10964,i__10829_10965,seq__10774_10912,chunk__10775_10913,count__10776_10914,i__10777_10915,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10836_10982,map__10836_10983__$1,gline_10984,gcol_10985,name_10986,seq__10826_10976__$1,temp__5720__auto___10975__$1,vec__10823_10959,column_10960,column_info_10961,seq__10774_10953__$1,temp__5720__auto___10952,vec__10771_10909,line_10910,columns_10911,inverted))
,cljs.core.sorted_map.call(null)));


var G__10987 = cljs.core.next.call(null,seq__10826_10976__$1);
var G__10988 = null;
var G__10989 = (0);
var G__10990 = (0);
seq__10826_10962 = G__10987;
chunk__10827_10963 = G__10988;
count__10828_10964 = G__10989;
i__10829_10965 = G__10990;
continue;
}
} else {
}
}
break;
}


var G__10991 = cljs.core.next.call(null,seq__10774_10953__$1);
var G__10992 = null;
var G__10993 = (0);
var G__10994 = (0);
seq__10774_10912 = G__10991;
chunk__10775_10913 = G__10992;
count__10776_10914 = G__10993;
i__10777_10915 = G__10994;
continue;
}
} else {
}
}
break;
}


var G__10995 = seq__10633_10905;
var G__10996 = chunk__10634_10906;
var G__10997 = count__10635_10907;
var G__10998 = (i__10636_10908 + (1));
seq__10633_10905 = G__10995;
chunk__10634_10906 = G__10996;
count__10635_10907 = G__10997;
i__10636_10908 = G__10998;
continue;
} else {
var temp__5720__auto___10999 = cljs.core.seq.call(null,seq__10633_10905);
if(temp__5720__auto___10999){
var seq__10633_11000__$1 = temp__5720__auto___10999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10633_11000__$1)){
var c__4550__auto___11001 = cljs.core.chunk_first.call(null,seq__10633_11000__$1);
var G__11002 = cljs.core.chunk_rest.call(null,seq__10633_11000__$1);
var G__11003 = c__4550__auto___11001;
var G__11004 = cljs.core.count.call(null,c__4550__auto___11001);
var G__11005 = (0);
seq__10633_10905 = G__11002;
chunk__10634_10906 = G__11003;
count__10635_10907 = G__11004;
i__10636_10908 = G__11005;
continue;
} else {
var vec__10838_11006 = cljs.core.first.call(null,seq__10633_11000__$1);
var line_11007 = cljs.core.nth.call(null,vec__10838_11006,(0),null);
var columns_11008 = cljs.core.nth.call(null,vec__10838_11006,(1),null);
var seq__10841_11009 = cljs.core.seq.call(null,columns_11008);
var chunk__10842_11010 = null;
var count__10843_11011 = (0);
var i__10844_11012 = (0);
while(true){
if((i__10844_11012 < count__10843_11011)){
var vec__10875_11013 = cljs.core._nth.call(null,chunk__10842_11010,i__10844_11012);
var column_11014 = cljs.core.nth.call(null,vec__10875_11013,(0),null);
var column_info_11015 = cljs.core.nth.call(null,vec__10875_11013,(1),null);
var seq__10878_11016 = cljs.core.seq.call(null,column_info_11015);
var chunk__10879_11017 = null;
var count__10880_11018 = (0);
var i__10881_11019 = (0);
while(true){
if((i__10881_11019 < count__10880_11018)){
var map__10886_11020 = cljs.core._nth.call(null,chunk__10879_11017,i__10881_11019);
var map__10886_11021__$1 = (((((!((map__10886_11020 == null))))?(((((map__10886_11020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10886_11020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10886_11020):map__10886_11020);
var gline_11022 = cljs.core.get.call(null,map__10886_11021__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11023 = cljs.core.get.call(null,map__10886_11021__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11024 = cljs.core.get.call(null,map__10886_11021__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11022], null),cljs.core.fnil.call(null,((function (seq__10878_11016,chunk__10879_11017,count__10880_11018,i__10881_11019,seq__10841_11009,chunk__10842_11010,count__10843_11011,i__10844_11012,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10886_11020,map__10886_11021__$1,gline_11022,gcol_11023,name_11024,vec__10875_11013,column_11014,column_info_11015,vec__10838_11006,line_11007,columns_11008,seq__10633_11000__$1,temp__5720__auto___10999,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11023], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11007,new cljs.core.Keyword(null,"col","col",-1959363084),column_11014,new cljs.core.Keyword(null,"name","name",1843675177),name_11024], null));
});})(seq__10878_11016,chunk__10879_11017,count__10880_11018,i__10881_11019,seq__10841_11009,chunk__10842_11010,count__10843_11011,i__10844_11012,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10886_11020,map__10886_11021__$1,gline_11022,gcol_11023,name_11024,vec__10875_11013,column_11014,column_info_11015,vec__10838_11006,line_11007,columns_11008,seq__10633_11000__$1,temp__5720__auto___10999,inverted))
,cljs.core.sorted_map.call(null)));


var G__11025 = seq__10878_11016;
var G__11026 = chunk__10879_11017;
var G__11027 = count__10880_11018;
var G__11028 = (i__10881_11019 + (1));
seq__10878_11016 = G__11025;
chunk__10879_11017 = G__11026;
count__10880_11018 = G__11027;
i__10881_11019 = G__11028;
continue;
} else {
var temp__5720__auto___11029__$1 = cljs.core.seq.call(null,seq__10878_11016);
if(temp__5720__auto___11029__$1){
var seq__10878_11030__$1 = temp__5720__auto___11029__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10878_11030__$1)){
var c__4550__auto___11031 = cljs.core.chunk_first.call(null,seq__10878_11030__$1);
var G__11032 = cljs.core.chunk_rest.call(null,seq__10878_11030__$1);
var G__11033 = c__4550__auto___11031;
var G__11034 = cljs.core.count.call(null,c__4550__auto___11031);
var G__11035 = (0);
seq__10878_11016 = G__11032;
chunk__10879_11017 = G__11033;
count__10880_11018 = G__11034;
i__10881_11019 = G__11035;
continue;
} else {
var map__10888_11036 = cljs.core.first.call(null,seq__10878_11030__$1);
var map__10888_11037__$1 = (((((!((map__10888_11036 == null))))?(((((map__10888_11036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10888_11036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10888_11036):map__10888_11036);
var gline_11038 = cljs.core.get.call(null,map__10888_11037__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11039 = cljs.core.get.call(null,map__10888_11037__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11040 = cljs.core.get.call(null,map__10888_11037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11038], null),cljs.core.fnil.call(null,((function (seq__10878_11016,chunk__10879_11017,count__10880_11018,i__10881_11019,seq__10841_11009,chunk__10842_11010,count__10843_11011,i__10844_11012,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10888_11036,map__10888_11037__$1,gline_11038,gcol_11039,name_11040,seq__10878_11030__$1,temp__5720__auto___11029__$1,vec__10875_11013,column_11014,column_info_11015,vec__10838_11006,line_11007,columns_11008,seq__10633_11000__$1,temp__5720__auto___10999,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11039], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11007,new cljs.core.Keyword(null,"col","col",-1959363084),column_11014,new cljs.core.Keyword(null,"name","name",1843675177),name_11040], null));
});})(seq__10878_11016,chunk__10879_11017,count__10880_11018,i__10881_11019,seq__10841_11009,chunk__10842_11010,count__10843_11011,i__10844_11012,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10888_11036,map__10888_11037__$1,gline_11038,gcol_11039,name_11040,seq__10878_11030__$1,temp__5720__auto___11029__$1,vec__10875_11013,column_11014,column_info_11015,vec__10838_11006,line_11007,columns_11008,seq__10633_11000__$1,temp__5720__auto___10999,inverted))
,cljs.core.sorted_map.call(null)));


var G__11041 = cljs.core.next.call(null,seq__10878_11030__$1);
var G__11042 = null;
var G__11043 = (0);
var G__11044 = (0);
seq__10878_11016 = G__11041;
chunk__10879_11017 = G__11042;
count__10880_11018 = G__11043;
i__10881_11019 = G__11044;
continue;
}
} else {
}
}
break;
}


var G__11045 = seq__10841_11009;
var G__11046 = chunk__10842_11010;
var G__11047 = count__10843_11011;
var G__11048 = (i__10844_11012 + (1));
seq__10841_11009 = G__11045;
chunk__10842_11010 = G__11046;
count__10843_11011 = G__11047;
i__10844_11012 = G__11048;
continue;
} else {
var temp__5720__auto___11049__$1 = cljs.core.seq.call(null,seq__10841_11009);
if(temp__5720__auto___11049__$1){
var seq__10841_11050__$1 = temp__5720__auto___11049__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10841_11050__$1)){
var c__4550__auto___11051 = cljs.core.chunk_first.call(null,seq__10841_11050__$1);
var G__11052 = cljs.core.chunk_rest.call(null,seq__10841_11050__$1);
var G__11053 = c__4550__auto___11051;
var G__11054 = cljs.core.count.call(null,c__4550__auto___11051);
var G__11055 = (0);
seq__10841_11009 = G__11052;
chunk__10842_11010 = G__11053;
count__10843_11011 = G__11054;
i__10844_11012 = G__11055;
continue;
} else {
var vec__10890_11056 = cljs.core.first.call(null,seq__10841_11050__$1);
var column_11057 = cljs.core.nth.call(null,vec__10890_11056,(0),null);
var column_info_11058 = cljs.core.nth.call(null,vec__10890_11056,(1),null);
var seq__10893_11059 = cljs.core.seq.call(null,column_info_11058);
var chunk__10894_11060 = null;
var count__10895_11061 = (0);
var i__10896_11062 = (0);
while(true){
if((i__10896_11062 < count__10895_11061)){
var map__10901_11063 = cljs.core._nth.call(null,chunk__10894_11060,i__10896_11062);
var map__10901_11064__$1 = (((((!((map__10901_11063 == null))))?(((((map__10901_11063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10901_11063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10901_11063):map__10901_11063);
var gline_11065 = cljs.core.get.call(null,map__10901_11064__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11066 = cljs.core.get.call(null,map__10901_11064__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11067 = cljs.core.get.call(null,map__10901_11064__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11065], null),cljs.core.fnil.call(null,((function (seq__10893_11059,chunk__10894_11060,count__10895_11061,i__10896_11062,seq__10841_11009,chunk__10842_11010,count__10843_11011,i__10844_11012,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10901_11063,map__10901_11064__$1,gline_11065,gcol_11066,name_11067,vec__10890_11056,column_11057,column_info_11058,seq__10841_11050__$1,temp__5720__auto___11049__$1,vec__10838_11006,line_11007,columns_11008,seq__10633_11000__$1,temp__5720__auto___10999,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11066], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11007,new cljs.core.Keyword(null,"col","col",-1959363084),column_11057,new cljs.core.Keyword(null,"name","name",1843675177),name_11067], null));
});})(seq__10893_11059,chunk__10894_11060,count__10895_11061,i__10896_11062,seq__10841_11009,chunk__10842_11010,count__10843_11011,i__10844_11012,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10901_11063,map__10901_11064__$1,gline_11065,gcol_11066,name_11067,vec__10890_11056,column_11057,column_info_11058,seq__10841_11050__$1,temp__5720__auto___11049__$1,vec__10838_11006,line_11007,columns_11008,seq__10633_11000__$1,temp__5720__auto___10999,inverted))
,cljs.core.sorted_map.call(null)));


var G__11068 = seq__10893_11059;
var G__11069 = chunk__10894_11060;
var G__11070 = count__10895_11061;
var G__11071 = (i__10896_11062 + (1));
seq__10893_11059 = G__11068;
chunk__10894_11060 = G__11069;
count__10895_11061 = G__11070;
i__10896_11062 = G__11071;
continue;
} else {
var temp__5720__auto___11072__$2 = cljs.core.seq.call(null,seq__10893_11059);
if(temp__5720__auto___11072__$2){
var seq__10893_11073__$1 = temp__5720__auto___11072__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10893_11073__$1)){
var c__4550__auto___11074 = cljs.core.chunk_first.call(null,seq__10893_11073__$1);
var G__11075 = cljs.core.chunk_rest.call(null,seq__10893_11073__$1);
var G__11076 = c__4550__auto___11074;
var G__11077 = cljs.core.count.call(null,c__4550__auto___11074);
var G__11078 = (0);
seq__10893_11059 = G__11075;
chunk__10894_11060 = G__11076;
count__10895_11061 = G__11077;
i__10896_11062 = G__11078;
continue;
} else {
var map__10903_11079 = cljs.core.first.call(null,seq__10893_11073__$1);
var map__10903_11080__$1 = (((((!((map__10903_11079 == null))))?(((((map__10903_11079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10903_11079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10903_11079):map__10903_11079);
var gline_11081 = cljs.core.get.call(null,map__10903_11080__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11082 = cljs.core.get.call(null,map__10903_11080__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11083 = cljs.core.get.call(null,map__10903_11080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11081], null),cljs.core.fnil.call(null,((function (seq__10893_11059,chunk__10894_11060,count__10895_11061,i__10896_11062,seq__10841_11009,chunk__10842_11010,count__10843_11011,i__10844_11012,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10903_11079,map__10903_11080__$1,gline_11081,gcol_11082,name_11083,seq__10893_11073__$1,temp__5720__auto___11072__$2,vec__10890_11056,column_11057,column_info_11058,seq__10841_11050__$1,temp__5720__auto___11049__$1,vec__10838_11006,line_11007,columns_11008,seq__10633_11000__$1,temp__5720__auto___10999,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11082], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11007,new cljs.core.Keyword(null,"col","col",-1959363084),column_11057,new cljs.core.Keyword(null,"name","name",1843675177),name_11083], null));
});})(seq__10893_11059,chunk__10894_11060,count__10895_11061,i__10896_11062,seq__10841_11009,chunk__10842_11010,count__10843_11011,i__10844_11012,seq__10633_10905,chunk__10634_10906,count__10635_10907,i__10636_10908,map__10903_11079,map__10903_11080__$1,gline_11081,gcol_11082,name_11083,seq__10893_11073__$1,temp__5720__auto___11072__$2,vec__10890_11056,column_11057,column_info_11058,seq__10841_11050__$1,temp__5720__auto___11049__$1,vec__10838_11006,line_11007,columns_11008,seq__10633_11000__$1,temp__5720__auto___10999,inverted))
,cljs.core.sorted_map.call(null)));


var G__11084 = cljs.core.next.call(null,seq__10893_11073__$1);
var G__11085 = null;
var G__11086 = (0);
var G__11087 = (0);
seq__10893_11059 = G__11084;
chunk__10894_11060 = G__11085;
count__10895_11061 = G__11086;
i__10896_11062 = G__11087;
continue;
}
} else {
}
}
break;
}


var G__11088 = cljs.core.next.call(null,seq__10841_11050__$1);
var G__11089 = null;
var G__11090 = (0);
var G__11091 = (0);
seq__10841_11009 = G__11088;
chunk__10842_11010 = G__11089;
count__10843_11011 = G__11090;
i__10844_11012 = G__11091;
continue;
}
} else {
}
}
break;
}


var G__11092 = cljs.core.next.call(null,seq__10633_11000__$1);
var G__11093 = null;
var G__11094 = (0);
var G__11095 = (0);
seq__10633_10905 = G__11092;
chunk__10634_10906 = G__11093;
count__10635_10907 = G__11094;
i__10636_10908 = G__11095;
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
