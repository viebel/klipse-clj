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
return cljs.core.reduce.call(null,(function (m,p__10007){
var vec__10008 = p__10007;
var i = cljs.core.nth.call(null,vec__10008,(0),null);
var v = cljs.core.nth.call(null,vec__10008,(1),null);
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
var vec__10011 = seg;
var gcol = cljs.core.nth.call(null,vec__10011,(0),null);
var source = cljs.core.nth.call(null,vec__10011,(1),null);
var line = cljs.core.nth.call(null,vec__10011,(2),null);
var col = cljs.core.nth.call(null,vec__10011,(3),null);
var name = cljs.core.nth.call(null,vec__10011,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5804__auto__)){
var name__$1 = temp__5804__auto__;
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
var vec__10014 = seg;
var gcol = cljs.core.nth.call(null,vec__10014,(0),null);
var source = cljs.core.nth.call(null,vec__10014,(1),null);
var line = cljs.core.nth.call(null,vec__10014,(2),null);
var col = cljs.core.nth.call(null,vec__10014,(3),null);
var name = cljs.core.nth.call(null,vec__10014,(4),null);
var vec__10017 = relseg;
var rgcol = cljs.core.nth.call(null,vec__10017,(0),null);
var rsource = cljs.core.nth.call(null,vec__10017,(1),null);
var rline = cljs.core.nth.call(null,vec__10017,(2),null);
var rcol = cljs.core.nth.call(null,vec__10017,(3),null);
var rname = cljs.core.nth.call(null,vec__10017,(4),null);
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
var map__10020 = segmap;
var map__10020__$1 = (((((!((map__10020 == null))))?(((((map__10020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10020):map__10020);
var gcol = cljs.core.get.call(null,map__10020__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10020__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10020__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10020__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__10020,map__10020__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__10020,map__10020__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__10020,map__10020__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__10020,map__10020__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10020,map__10020__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__10020,map__10020__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__10023 = arguments.length;
switch (G__10023) {
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
var vec__10027 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10031 = cljs.core.next.call(null,segs__$1);
var G__10032 = nrelseg;
var G__10033 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10031;
relseg__$1 = G__10032;
result__$1 = G__10033;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10027,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10027,(1),null);
var G__10034 = (gline + (1));
var G__10035 = cljs.core.next.call(null,lines__$1);
var G__10036 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10037 = result__$1;
gline = G__10034;
lines__$1 = G__10035;
relseg = G__10036;
result = G__10037;
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
var map__10039 = segmap;
var map__10039__$1 = (((((!((map__10039 == null))))?(((((map__10039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10039):map__10039);
var gcol = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__10039,map__10039__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__10039,map__10039__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__10038_SHARP_){
return cljs.core.conj.call(null,p1__10038_SHARP_,d__$1);
});})(map__10039,map__10039__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10039,map__10039__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__10042 = arguments.length;
switch (G__10042) {
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
var vec__10046 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10050 = cljs.core.next.call(null,segs__$1);
var G__10051 = nrelseg;
var G__10052 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10050;
relseg__$1 = G__10051;
result__$1 = G__10052;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10046,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10046,(1),null);
var G__10053 = (gline + (1));
var G__10054 = cljs.core.next.call(null,lines__$1);
var G__10055 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10056 = result__$1;
gline = G__10053;
lines__$1 = G__10054;
relseg = G__10055;
result = G__10056;
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
return (function (p__10057){
var vec__10058 = p__10057;
var _ = cljs.core.nth.call(null,vec__10058,(0),null);
var source = cljs.core.nth.call(null,vec__10058,(1),null);
var line = cljs.core.nth.call(null,vec__10058,(2),null);
var col = cljs.core.nth.call(null,vec__10058,(3),null);
var name = cljs.core.nth.call(null,vec__10058,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__10061){
var vec__10062 = p__10061;
var gcol = cljs.core.nth.call(null,vec__10062,(0),null);
var sidx = cljs.core.nth.call(null,vec__10062,(1),null);
var line = cljs.core.nth.call(null,vec__10062,(2),null);
var col = cljs.core.nth.call(null,vec__10062,(3),null);
var name = cljs.core.nth.call(null,vec__10062,(4),null);
var seg = vec__10062;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__10062,gcol,sidx,line,col,name,seg,relseg){
return (function (p__10065){
var vec__10066 = p__10065;
var _ = cljs.core.nth.call(null,vec__10066,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10066,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10066,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10066,(3),null);
var lname = cljs.core.nth.call(null,vec__10066,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__10062,gcol,sidx,line,col,name,seg,relseg))
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
var temp__5802__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var idx = (function (){var temp__5802__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
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
var seq__10072 = cljs.core.seq.call(null,infos);
var chunk__10073 = null;
var count__10074 = (0);
var i__10075 = (0);
while(true){
if((i__10075 < count__10074)){
var info = cljs.core._nth.call(null,chunk__10073,i__10075);
var segv_10426 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10427 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10428 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10427 > (lc_10428 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10072,chunk__10073,count__10074,i__10075,segv_10426,gline_10427,lc_10428,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10427 - (lc_10428 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10426], null));
});})(seq__10072,chunk__10073,count__10074,i__10075,segv_10426,gline_10427,lc_10428,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10072,chunk__10073,count__10074,i__10075,segv_10426,gline_10427,lc_10428,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10427], null),cljs.core.conj,segv_10426);
});})(seq__10072,chunk__10073,count__10074,i__10075,segv_10426,gline_10427,lc_10428,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10429 = seq__10072;
var G__10430 = chunk__10073;
var G__10431 = count__10074;
var G__10432 = (i__10075 + (1));
seq__10072 = G__10429;
chunk__10073 = G__10430;
count__10074 = G__10431;
i__10075 = G__10432;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10072);
if(temp__5804__auto__){
var seq__10072__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10072__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10072__$1);
var G__10433 = cljs.core.chunk_rest.call(null,seq__10072__$1);
var G__10434 = c__4550__auto__;
var G__10435 = cljs.core.count.call(null,c__4550__auto__);
var G__10436 = (0);
seq__10072 = G__10433;
chunk__10073 = G__10434;
count__10074 = G__10435;
i__10075 = G__10436;
continue;
} else {
var info = cljs.core.first.call(null,seq__10072__$1);
var segv_10437 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10438 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10439 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10438 > (lc_10439 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10072,chunk__10073,count__10074,i__10075,segv_10437,gline_10438,lc_10439,info,seq__10072__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10438 - (lc_10439 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10437], null));
});})(seq__10072,chunk__10073,count__10074,i__10075,segv_10437,gline_10438,lc_10439,info,seq__10072__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10072,chunk__10073,count__10074,i__10075,segv_10437,gline_10438,lc_10439,info,seq__10072__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10438], null),cljs.core.conj,segv_10437);
});})(seq__10072,chunk__10073,count__10074,i__10075,segv_10437,gline_10438,lc_10439,info,seq__10072__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10440 = cljs.core.next.call(null,seq__10072__$1);
var G__10441 = null;
var G__10442 = (0);
var G__10443 = (0);
seq__10072 = G__10440;
chunk__10073 = G__10441;
count__10074 = G__10442;
i__10075 = G__10443;
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
var seq__10076_10444 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__10077_10445 = null;
var count__10078_10446 = (0);
var i__10079_10447 = (0);
while(true){
if((i__10079_10447 < count__10078_10446)){
var vec__10252_10448 = cljs.core._nth.call(null,chunk__10077_10445,i__10079_10447);
var source_idx_10449 = cljs.core.nth.call(null,vec__10252_10448,(0),null);
var vec__10255_10450 = cljs.core.nth.call(null,vec__10252_10448,(1),null);
var __10451 = cljs.core.nth.call(null,vec__10255_10450,(0),null);
var lines_10452__$1 = cljs.core.nth.call(null,vec__10255_10450,(1),null);
var seq__10258_10453 = cljs.core.seq.call(null,lines_10452__$1);
var chunk__10259_10454 = null;
var count__10260_10455 = (0);
var i__10261_10456 = (0);
while(true){
if((i__10261_10456 < count__10260_10455)){
var vec__10300_10457 = cljs.core._nth.call(null,chunk__10259_10454,i__10261_10456);
var line_10458 = cljs.core.nth.call(null,vec__10300_10457,(0),null);
var cols_10459 = cljs.core.nth.call(null,vec__10300_10457,(1),null);
var seq__10303_10460 = cljs.core.seq.call(null,cols_10459);
var chunk__10304_10461 = null;
var count__10305_10462 = (0);
var i__10306_10463 = (0);
while(true){
if((i__10306_10463 < count__10305_10462)){
var vec__10313_10464 = cljs.core._nth.call(null,chunk__10304_10461,i__10306_10463);
var col_10465 = cljs.core.nth.call(null,vec__10313_10464,(0),null);
var infos_10466 = cljs.core.nth.call(null,vec__10313_10464,(1),null);
encode_cols.call(null,infos_10466,source_idx_10449,line_10458,col_10465);


var G__10467 = seq__10303_10460;
var G__10468 = chunk__10304_10461;
var G__10469 = count__10305_10462;
var G__10470 = (i__10306_10463 + (1));
seq__10303_10460 = G__10467;
chunk__10304_10461 = G__10468;
count__10305_10462 = G__10469;
i__10306_10463 = G__10470;
continue;
} else {
var temp__5804__auto___10471 = cljs.core.seq.call(null,seq__10303_10460);
if(temp__5804__auto___10471){
var seq__10303_10472__$1 = temp__5804__auto___10471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10303_10472__$1)){
var c__4550__auto___10473 = cljs.core.chunk_first.call(null,seq__10303_10472__$1);
var G__10474 = cljs.core.chunk_rest.call(null,seq__10303_10472__$1);
var G__10475 = c__4550__auto___10473;
var G__10476 = cljs.core.count.call(null,c__4550__auto___10473);
var G__10477 = (0);
seq__10303_10460 = G__10474;
chunk__10304_10461 = G__10475;
count__10305_10462 = G__10476;
i__10306_10463 = G__10477;
continue;
} else {
var vec__10316_10478 = cljs.core.first.call(null,seq__10303_10472__$1);
var col_10479 = cljs.core.nth.call(null,vec__10316_10478,(0),null);
var infos_10480 = cljs.core.nth.call(null,vec__10316_10478,(1),null);
encode_cols.call(null,infos_10480,source_idx_10449,line_10458,col_10479);


var G__10481 = cljs.core.next.call(null,seq__10303_10472__$1);
var G__10482 = null;
var G__10483 = (0);
var G__10484 = (0);
seq__10303_10460 = G__10481;
chunk__10304_10461 = G__10482;
count__10305_10462 = G__10483;
i__10306_10463 = G__10484;
continue;
}
} else {
}
}
break;
}


var G__10485 = seq__10258_10453;
var G__10486 = chunk__10259_10454;
var G__10487 = count__10260_10455;
var G__10488 = (i__10261_10456 + (1));
seq__10258_10453 = G__10485;
chunk__10259_10454 = G__10486;
count__10260_10455 = G__10487;
i__10261_10456 = G__10488;
continue;
} else {
var temp__5804__auto___10489 = cljs.core.seq.call(null,seq__10258_10453);
if(temp__5804__auto___10489){
var seq__10258_10490__$1 = temp__5804__auto___10489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10258_10490__$1)){
var c__4550__auto___10491 = cljs.core.chunk_first.call(null,seq__10258_10490__$1);
var G__10492 = cljs.core.chunk_rest.call(null,seq__10258_10490__$1);
var G__10493 = c__4550__auto___10491;
var G__10494 = cljs.core.count.call(null,c__4550__auto___10491);
var G__10495 = (0);
seq__10258_10453 = G__10492;
chunk__10259_10454 = G__10493;
count__10260_10455 = G__10494;
i__10261_10456 = G__10495;
continue;
} else {
var vec__10319_10496 = cljs.core.first.call(null,seq__10258_10490__$1);
var line_10497 = cljs.core.nth.call(null,vec__10319_10496,(0),null);
var cols_10498 = cljs.core.nth.call(null,vec__10319_10496,(1),null);
var seq__10322_10499 = cljs.core.seq.call(null,cols_10498);
var chunk__10323_10500 = null;
var count__10324_10501 = (0);
var i__10325_10502 = (0);
while(true){
if((i__10325_10502 < count__10324_10501)){
var vec__10332_10503 = cljs.core._nth.call(null,chunk__10323_10500,i__10325_10502);
var col_10504 = cljs.core.nth.call(null,vec__10332_10503,(0),null);
var infos_10505 = cljs.core.nth.call(null,vec__10332_10503,(1),null);
encode_cols.call(null,infos_10505,source_idx_10449,line_10497,col_10504);


var G__10506 = seq__10322_10499;
var G__10507 = chunk__10323_10500;
var G__10508 = count__10324_10501;
var G__10509 = (i__10325_10502 + (1));
seq__10322_10499 = G__10506;
chunk__10323_10500 = G__10507;
count__10324_10501 = G__10508;
i__10325_10502 = G__10509;
continue;
} else {
var temp__5804__auto___10510__$1 = cljs.core.seq.call(null,seq__10322_10499);
if(temp__5804__auto___10510__$1){
var seq__10322_10511__$1 = temp__5804__auto___10510__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10322_10511__$1)){
var c__4550__auto___10512 = cljs.core.chunk_first.call(null,seq__10322_10511__$1);
var G__10513 = cljs.core.chunk_rest.call(null,seq__10322_10511__$1);
var G__10514 = c__4550__auto___10512;
var G__10515 = cljs.core.count.call(null,c__4550__auto___10512);
var G__10516 = (0);
seq__10322_10499 = G__10513;
chunk__10323_10500 = G__10514;
count__10324_10501 = G__10515;
i__10325_10502 = G__10516;
continue;
} else {
var vec__10335_10517 = cljs.core.first.call(null,seq__10322_10511__$1);
var col_10518 = cljs.core.nth.call(null,vec__10335_10517,(0),null);
var infos_10519 = cljs.core.nth.call(null,vec__10335_10517,(1),null);
encode_cols.call(null,infos_10519,source_idx_10449,line_10497,col_10518);


var G__10520 = cljs.core.next.call(null,seq__10322_10511__$1);
var G__10521 = null;
var G__10522 = (0);
var G__10523 = (0);
seq__10322_10499 = G__10520;
chunk__10323_10500 = G__10521;
count__10324_10501 = G__10522;
i__10325_10502 = G__10523;
continue;
}
} else {
}
}
break;
}


var G__10524 = cljs.core.next.call(null,seq__10258_10490__$1);
var G__10525 = null;
var G__10526 = (0);
var G__10527 = (0);
seq__10258_10453 = G__10524;
chunk__10259_10454 = G__10525;
count__10260_10455 = G__10526;
i__10261_10456 = G__10527;
continue;
}
} else {
}
}
break;
}


var G__10528 = seq__10076_10444;
var G__10529 = chunk__10077_10445;
var G__10530 = count__10078_10446;
var G__10531 = (i__10079_10447 + (1));
seq__10076_10444 = G__10528;
chunk__10077_10445 = G__10529;
count__10078_10446 = G__10530;
i__10079_10447 = G__10531;
continue;
} else {
var temp__5804__auto___10532 = cljs.core.seq.call(null,seq__10076_10444);
if(temp__5804__auto___10532){
var seq__10076_10533__$1 = temp__5804__auto___10532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10076_10533__$1)){
var c__4550__auto___10534 = cljs.core.chunk_first.call(null,seq__10076_10533__$1);
var G__10535 = cljs.core.chunk_rest.call(null,seq__10076_10533__$1);
var G__10536 = c__4550__auto___10534;
var G__10537 = cljs.core.count.call(null,c__4550__auto___10534);
var G__10538 = (0);
seq__10076_10444 = G__10535;
chunk__10077_10445 = G__10536;
count__10078_10446 = G__10537;
i__10079_10447 = G__10538;
continue;
} else {
var vec__10338_10539 = cljs.core.first.call(null,seq__10076_10533__$1);
var source_idx_10540 = cljs.core.nth.call(null,vec__10338_10539,(0),null);
var vec__10341_10541 = cljs.core.nth.call(null,vec__10338_10539,(1),null);
var __10542 = cljs.core.nth.call(null,vec__10341_10541,(0),null);
var lines_10543__$1 = cljs.core.nth.call(null,vec__10341_10541,(1),null);
var seq__10344_10544 = cljs.core.seq.call(null,lines_10543__$1);
var chunk__10345_10545 = null;
var count__10346_10546 = (0);
var i__10347_10547 = (0);
while(true){
if((i__10347_10547 < count__10346_10546)){
var vec__10386_10548 = cljs.core._nth.call(null,chunk__10345_10545,i__10347_10547);
var line_10549 = cljs.core.nth.call(null,vec__10386_10548,(0),null);
var cols_10550 = cljs.core.nth.call(null,vec__10386_10548,(1),null);
var seq__10389_10551 = cljs.core.seq.call(null,cols_10550);
var chunk__10390_10552 = null;
var count__10391_10553 = (0);
var i__10392_10554 = (0);
while(true){
if((i__10392_10554 < count__10391_10553)){
var vec__10399_10555 = cljs.core._nth.call(null,chunk__10390_10552,i__10392_10554);
var col_10556 = cljs.core.nth.call(null,vec__10399_10555,(0),null);
var infos_10557 = cljs.core.nth.call(null,vec__10399_10555,(1),null);
encode_cols.call(null,infos_10557,source_idx_10540,line_10549,col_10556);


var G__10558 = seq__10389_10551;
var G__10559 = chunk__10390_10552;
var G__10560 = count__10391_10553;
var G__10561 = (i__10392_10554 + (1));
seq__10389_10551 = G__10558;
chunk__10390_10552 = G__10559;
count__10391_10553 = G__10560;
i__10392_10554 = G__10561;
continue;
} else {
var temp__5804__auto___10562__$1 = cljs.core.seq.call(null,seq__10389_10551);
if(temp__5804__auto___10562__$1){
var seq__10389_10563__$1 = temp__5804__auto___10562__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10389_10563__$1)){
var c__4550__auto___10564 = cljs.core.chunk_first.call(null,seq__10389_10563__$1);
var G__10565 = cljs.core.chunk_rest.call(null,seq__10389_10563__$1);
var G__10566 = c__4550__auto___10564;
var G__10567 = cljs.core.count.call(null,c__4550__auto___10564);
var G__10568 = (0);
seq__10389_10551 = G__10565;
chunk__10390_10552 = G__10566;
count__10391_10553 = G__10567;
i__10392_10554 = G__10568;
continue;
} else {
var vec__10402_10569 = cljs.core.first.call(null,seq__10389_10563__$1);
var col_10570 = cljs.core.nth.call(null,vec__10402_10569,(0),null);
var infos_10571 = cljs.core.nth.call(null,vec__10402_10569,(1),null);
encode_cols.call(null,infos_10571,source_idx_10540,line_10549,col_10570);


var G__10572 = cljs.core.next.call(null,seq__10389_10563__$1);
var G__10573 = null;
var G__10574 = (0);
var G__10575 = (0);
seq__10389_10551 = G__10572;
chunk__10390_10552 = G__10573;
count__10391_10553 = G__10574;
i__10392_10554 = G__10575;
continue;
}
} else {
}
}
break;
}


var G__10576 = seq__10344_10544;
var G__10577 = chunk__10345_10545;
var G__10578 = count__10346_10546;
var G__10579 = (i__10347_10547 + (1));
seq__10344_10544 = G__10576;
chunk__10345_10545 = G__10577;
count__10346_10546 = G__10578;
i__10347_10547 = G__10579;
continue;
} else {
var temp__5804__auto___10580__$1 = cljs.core.seq.call(null,seq__10344_10544);
if(temp__5804__auto___10580__$1){
var seq__10344_10581__$1 = temp__5804__auto___10580__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10344_10581__$1)){
var c__4550__auto___10582 = cljs.core.chunk_first.call(null,seq__10344_10581__$1);
var G__10583 = cljs.core.chunk_rest.call(null,seq__10344_10581__$1);
var G__10584 = c__4550__auto___10582;
var G__10585 = cljs.core.count.call(null,c__4550__auto___10582);
var G__10586 = (0);
seq__10344_10544 = G__10583;
chunk__10345_10545 = G__10584;
count__10346_10546 = G__10585;
i__10347_10547 = G__10586;
continue;
} else {
var vec__10405_10587 = cljs.core.first.call(null,seq__10344_10581__$1);
var line_10588 = cljs.core.nth.call(null,vec__10405_10587,(0),null);
var cols_10589 = cljs.core.nth.call(null,vec__10405_10587,(1),null);
var seq__10408_10590 = cljs.core.seq.call(null,cols_10589);
var chunk__10409_10591 = null;
var count__10410_10592 = (0);
var i__10411_10593 = (0);
while(true){
if((i__10411_10593 < count__10410_10592)){
var vec__10418_10594 = cljs.core._nth.call(null,chunk__10409_10591,i__10411_10593);
var col_10595 = cljs.core.nth.call(null,vec__10418_10594,(0),null);
var infos_10596 = cljs.core.nth.call(null,vec__10418_10594,(1),null);
encode_cols.call(null,infos_10596,source_idx_10540,line_10588,col_10595);


var G__10597 = seq__10408_10590;
var G__10598 = chunk__10409_10591;
var G__10599 = count__10410_10592;
var G__10600 = (i__10411_10593 + (1));
seq__10408_10590 = G__10597;
chunk__10409_10591 = G__10598;
count__10410_10592 = G__10599;
i__10411_10593 = G__10600;
continue;
} else {
var temp__5804__auto___10601__$2 = cljs.core.seq.call(null,seq__10408_10590);
if(temp__5804__auto___10601__$2){
var seq__10408_10602__$1 = temp__5804__auto___10601__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10408_10602__$1)){
var c__4550__auto___10603 = cljs.core.chunk_first.call(null,seq__10408_10602__$1);
var G__10604 = cljs.core.chunk_rest.call(null,seq__10408_10602__$1);
var G__10605 = c__4550__auto___10603;
var G__10606 = cljs.core.count.call(null,c__4550__auto___10603);
var G__10607 = (0);
seq__10408_10590 = G__10604;
chunk__10409_10591 = G__10605;
count__10410_10592 = G__10606;
i__10411_10593 = G__10607;
continue;
} else {
var vec__10421_10608 = cljs.core.first.call(null,seq__10408_10602__$1);
var col_10609 = cljs.core.nth.call(null,vec__10421_10608,(0),null);
var infos_10610 = cljs.core.nth.call(null,vec__10421_10608,(1),null);
encode_cols.call(null,infos_10610,source_idx_10540,line_10588,col_10609);


var G__10611 = cljs.core.next.call(null,seq__10408_10602__$1);
var G__10612 = null;
var G__10613 = (0);
var G__10614 = (0);
seq__10408_10590 = G__10611;
chunk__10409_10591 = G__10612;
count__10410_10592 = G__10613;
i__10411_10593 = G__10614;
continue;
}
} else {
}
}
break;
}


var G__10615 = cljs.core.next.call(null,seq__10344_10581__$1);
var G__10616 = null;
var G__10617 = (0);
var G__10618 = (0);
seq__10344_10544 = G__10615;
chunk__10345_10545 = G__10616;
count__10346_10546 = G__10617;
i__10347_10547 = G__10618;
continue;
}
} else {
}
}
break;
}


var G__10619 = cljs.core.next.call(null,seq__10076_10533__$1);
var G__10620 = null;
var G__10621 = (0);
var G__10622 = (0);
seq__10076_10444 = G__10619;
chunk__10077_10445 = G__10620;
count__10078_10446 = G__10621;
i__10079_10447 = G__10622;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__10424 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10069_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10069_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10070_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__10070_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10071_SHARP_){
return clojure.string.join.call(null,",",p1__10071_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__10425 = G__10424;
goog.object.set(G__10425,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__10425;
} else {
return G__10424;
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
var vec__10623 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__10623,(0),null);
var col_map = cljs.core.nth.call(null,vec__10623,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__10626 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__10626,(0),null);
var infos = cljs.core.nth.call(null,vec__10626,(1),null);
var G__10632 = cljs.core.next.call(null,col_map_seq);
var G__10633 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__10626,col,infos,vec__10623,line,col_map){
return (function (v,p__10629){
var map__10630 = p__10629;
var map__10630__$1 = (((((!((map__10630 == null))))?(((((map__10630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10630):map__10630);
var gline = cljs.core.get.call(null,map__10630__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__10630__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__10626,col,infos,vec__10623,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__10632;
new_cols = G__10633;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__10634 = cljs.core.next.call(null,line_map_seq);
var G__10635 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__10634;
new_lines = G__10635;
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
var seq__10636_10908 = cljs.core.seq.call(null,reverse_map);
var chunk__10637_10909 = null;
var count__10638_10910 = (0);
var i__10639_10911 = (0);
while(true){
if((i__10639_10911 < count__10638_10910)){
var vec__10774_10912 = cljs.core._nth.call(null,chunk__10637_10909,i__10639_10911);
var line_10913 = cljs.core.nth.call(null,vec__10774_10912,(0),null);
var columns_10914 = cljs.core.nth.call(null,vec__10774_10912,(1),null);
var seq__10777_10915 = cljs.core.seq.call(null,columns_10914);
var chunk__10778_10916 = null;
var count__10779_10917 = (0);
var i__10780_10918 = (0);
while(true){
if((i__10780_10918 < count__10779_10917)){
var vec__10811_10919 = cljs.core._nth.call(null,chunk__10778_10916,i__10780_10918);
var column_10920 = cljs.core.nth.call(null,vec__10811_10919,(0),null);
var column_info_10921 = cljs.core.nth.call(null,vec__10811_10919,(1),null);
var seq__10814_10922 = cljs.core.seq.call(null,column_info_10921);
var chunk__10815_10923 = null;
var count__10816_10924 = (0);
var i__10817_10925 = (0);
while(true){
if((i__10817_10925 < count__10816_10924)){
var map__10822_10926 = cljs.core._nth.call(null,chunk__10815_10923,i__10817_10925);
var map__10822_10927__$1 = (((((!((map__10822_10926 == null))))?(((((map__10822_10926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10822_10926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10822_10926):map__10822_10926);
var gline_10928 = cljs.core.get.call(null,map__10822_10927__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10929 = cljs.core.get.call(null,map__10822_10927__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10930 = cljs.core.get.call(null,map__10822_10927__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10928], null),cljs.core.fnil.call(null,((function (seq__10814_10922,chunk__10815_10923,count__10816_10924,i__10817_10925,seq__10777_10915,chunk__10778_10916,count__10779_10917,i__10780_10918,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10822_10926,map__10822_10927__$1,gline_10928,gcol_10929,name_10930,vec__10811_10919,column_10920,column_info_10921,vec__10774_10912,line_10913,columns_10914,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10929], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10913,new cljs.core.Keyword(null,"col","col",-1959363084),column_10920,new cljs.core.Keyword(null,"name","name",1843675177),name_10930], null));
});})(seq__10814_10922,chunk__10815_10923,count__10816_10924,i__10817_10925,seq__10777_10915,chunk__10778_10916,count__10779_10917,i__10780_10918,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10822_10926,map__10822_10927__$1,gline_10928,gcol_10929,name_10930,vec__10811_10919,column_10920,column_info_10921,vec__10774_10912,line_10913,columns_10914,inverted))
,cljs.core.sorted_map.call(null)));


var G__10931 = seq__10814_10922;
var G__10932 = chunk__10815_10923;
var G__10933 = count__10816_10924;
var G__10934 = (i__10817_10925 + (1));
seq__10814_10922 = G__10931;
chunk__10815_10923 = G__10932;
count__10816_10924 = G__10933;
i__10817_10925 = G__10934;
continue;
} else {
var temp__5804__auto___10935 = cljs.core.seq.call(null,seq__10814_10922);
if(temp__5804__auto___10935){
var seq__10814_10936__$1 = temp__5804__auto___10935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10814_10936__$1)){
var c__4550__auto___10937 = cljs.core.chunk_first.call(null,seq__10814_10936__$1);
var G__10938 = cljs.core.chunk_rest.call(null,seq__10814_10936__$1);
var G__10939 = c__4550__auto___10937;
var G__10940 = cljs.core.count.call(null,c__4550__auto___10937);
var G__10941 = (0);
seq__10814_10922 = G__10938;
chunk__10815_10923 = G__10939;
count__10816_10924 = G__10940;
i__10817_10925 = G__10941;
continue;
} else {
var map__10824_10942 = cljs.core.first.call(null,seq__10814_10936__$1);
var map__10824_10943__$1 = (((((!((map__10824_10942 == null))))?(((((map__10824_10942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10824_10942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10824_10942):map__10824_10942);
var gline_10944 = cljs.core.get.call(null,map__10824_10943__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10945 = cljs.core.get.call(null,map__10824_10943__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10946 = cljs.core.get.call(null,map__10824_10943__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10944], null),cljs.core.fnil.call(null,((function (seq__10814_10922,chunk__10815_10923,count__10816_10924,i__10817_10925,seq__10777_10915,chunk__10778_10916,count__10779_10917,i__10780_10918,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10824_10942,map__10824_10943__$1,gline_10944,gcol_10945,name_10946,seq__10814_10936__$1,temp__5804__auto___10935,vec__10811_10919,column_10920,column_info_10921,vec__10774_10912,line_10913,columns_10914,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10945], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10913,new cljs.core.Keyword(null,"col","col",-1959363084),column_10920,new cljs.core.Keyword(null,"name","name",1843675177),name_10946], null));
});})(seq__10814_10922,chunk__10815_10923,count__10816_10924,i__10817_10925,seq__10777_10915,chunk__10778_10916,count__10779_10917,i__10780_10918,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10824_10942,map__10824_10943__$1,gline_10944,gcol_10945,name_10946,seq__10814_10936__$1,temp__5804__auto___10935,vec__10811_10919,column_10920,column_info_10921,vec__10774_10912,line_10913,columns_10914,inverted))
,cljs.core.sorted_map.call(null)));


var G__10947 = cljs.core.next.call(null,seq__10814_10936__$1);
var G__10948 = null;
var G__10949 = (0);
var G__10950 = (0);
seq__10814_10922 = G__10947;
chunk__10815_10923 = G__10948;
count__10816_10924 = G__10949;
i__10817_10925 = G__10950;
continue;
}
} else {
}
}
break;
}


var G__10951 = seq__10777_10915;
var G__10952 = chunk__10778_10916;
var G__10953 = count__10779_10917;
var G__10954 = (i__10780_10918 + (1));
seq__10777_10915 = G__10951;
chunk__10778_10916 = G__10952;
count__10779_10917 = G__10953;
i__10780_10918 = G__10954;
continue;
} else {
var temp__5804__auto___10955 = cljs.core.seq.call(null,seq__10777_10915);
if(temp__5804__auto___10955){
var seq__10777_10956__$1 = temp__5804__auto___10955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10777_10956__$1)){
var c__4550__auto___10957 = cljs.core.chunk_first.call(null,seq__10777_10956__$1);
var G__10958 = cljs.core.chunk_rest.call(null,seq__10777_10956__$1);
var G__10959 = c__4550__auto___10957;
var G__10960 = cljs.core.count.call(null,c__4550__auto___10957);
var G__10961 = (0);
seq__10777_10915 = G__10958;
chunk__10778_10916 = G__10959;
count__10779_10917 = G__10960;
i__10780_10918 = G__10961;
continue;
} else {
var vec__10826_10962 = cljs.core.first.call(null,seq__10777_10956__$1);
var column_10963 = cljs.core.nth.call(null,vec__10826_10962,(0),null);
var column_info_10964 = cljs.core.nth.call(null,vec__10826_10962,(1),null);
var seq__10829_10965 = cljs.core.seq.call(null,column_info_10964);
var chunk__10830_10966 = null;
var count__10831_10967 = (0);
var i__10832_10968 = (0);
while(true){
if((i__10832_10968 < count__10831_10967)){
var map__10837_10969 = cljs.core._nth.call(null,chunk__10830_10966,i__10832_10968);
var map__10837_10970__$1 = (((((!((map__10837_10969 == null))))?(((((map__10837_10969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10837_10969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10837_10969):map__10837_10969);
var gline_10971 = cljs.core.get.call(null,map__10837_10970__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10972 = cljs.core.get.call(null,map__10837_10970__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10973 = cljs.core.get.call(null,map__10837_10970__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10971], null),cljs.core.fnil.call(null,((function (seq__10829_10965,chunk__10830_10966,count__10831_10967,i__10832_10968,seq__10777_10915,chunk__10778_10916,count__10779_10917,i__10780_10918,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10837_10969,map__10837_10970__$1,gline_10971,gcol_10972,name_10973,vec__10826_10962,column_10963,column_info_10964,seq__10777_10956__$1,temp__5804__auto___10955,vec__10774_10912,line_10913,columns_10914,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10972], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10913,new cljs.core.Keyword(null,"col","col",-1959363084),column_10963,new cljs.core.Keyword(null,"name","name",1843675177),name_10973], null));
});})(seq__10829_10965,chunk__10830_10966,count__10831_10967,i__10832_10968,seq__10777_10915,chunk__10778_10916,count__10779_10917,i__10780_10918,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10837_10969,map__10837_10970__$1,gline_10971,gcol_10972,name_10973,vec__10826_10962,column_10963,column_info_10964,seq__10777_10956__$1,temp__5804__auto___10955,vec__10774_10912,line_10913,columns_10914,inverted))
,cljs.core.sorted_map.call(null)));


var G__10974 = seq__10829_10965;
var G__10975 = chunk__10830_10966;
var G__10976 = count__10831_10967;
var G__10977 = (i__10832_10968 + (1));
seq__10829_10965 = G__10974;
chunk__10830_10966 = G__10975;
count__10831_10967 = G__10976;
i__10832_10968 = G__10977;
continue;
} else {
var temp__5804__auto___10978__$1 = cljs.core.seq.call(null,seq__10829_10965);
if(temp__5804__auto___10978__$1){
var seq__10829_10979__$1 = temp__5804__auto___10978__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10829_10979__$1)){
var c__4550__auto___10980 = cljs.core.chunk_first.call(null,seq__10829_10979__$1);
var G__10981 = cljs.core.chunk_rest.call(null,seq__10829_10979__$1);
var G__10982 = c__4550__auto___10980;
var G__10983 = cljs.core.count.call(null,c__4550__auto___10980);
var G__10984 = (0);
seq__10829_10965 = G__10981;
chunk__10830_10966 = G__10982;
count__10831_10967 = G__10983;
i__10832_10968 = G__10984;
continue;
} else {
var map__10839_10985 = cljs.core.first.call(null,seq__10829_10979__$1);
var map__10839_10986__$1 = (((((!((map__10839_10985 == null))))?(((((map__10839_10985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10839_10985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10839_10985):map__10839_10985);
var gline_10987 = cljs.core.get.call(null,map__10839_10986__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10988 = cljs.core.get.call(null,map__10839_10986__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10989 = cljs.core.get.call(null,map__10839_10986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10987], null),cljs.core.fnil.call(null,((function (seq__10829_10965,chunk__10830_10966,count__10831_10967,i__10832_10968,seq__10777_10915,chunk__10778_10916,count__10779_10917,i__10780_10918,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10839_10985,map__10839_10986__$1,gline_10987,gcol_10988,name_10989,seq__10829_10979__$1,temp__5804__auto___10978__$1,vec__10826_10962,column_10963,column_info_10964,seq__10777_10956__$1,temp__5804__auto___10955,vec__10774_10912,line_10913,columns_10914,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10988], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10913,new cljs.core.Keyword(null,"col","col",-1959363084),column_10963,new cljs.core.Keyword(null,"name","name",1843675177),name_10989], null));
});})(seq__10829_10965,chunk__10830_10966,count__10831_10967,i__10832_10968,seq__10777_10915,chunk__10778_10916,count__10779_10917,i__10780_10918,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10839_10985,map__10839_10986__$1,gline_10987,gcol_10988,name_10989,seq__10829_10979__$1,temp__5804__auto___10978__$1,vec__10826_10962,column_10963,column_info_10964,seq__10777_10956__$1,temp__5804__auto___10955,vec__10774_10912,line_10913,columns_10914,inverted))
,cljs.core.sorted_map.call(null)));


var G__10990 = cljs.core.next.call(null,seq__10829_10979__$1);
var G__10991 = null;
var G__10992 = (0);
var G__10993 = (0);
seq__10829_10965 = G__10990;
chunk__10830_10966 = G__10991;
count__10831_10967 = G__10992;
i__10832_10968 = G__10993;
continue;
}
} else {
}
}
break;
}


var G__10994 = cljs.core.next.call(null,seq__10777_10956__$1);
var G__10995 = null;
var G__10996 = (0);
var G__10997 = (0);
seq__10777_10915 = G__10994;
chunk__10778_10916 = G__10995;
count__10779_10917 = G__10996;
i__10780_10918 = G__10997;
continue;
}
} else {
}
}
break;
}


var G__10998 = seq__10636_10908;
var G__10999 = chunk__10637_10909;
var G__11000 = count__10638_10910;
var G__11001 = (i__10639_10911 + (1));
seq__10636_10908 = G__10998;
chunk__10637_10909 = G__10999;
count__10638_10910 = G__11000;
i__10639_10911 = G__11001;
continue;
} else {
var temp__5804__auto___11002 = cljs.core.seq.call(null,seq__10636_10908);
if(temp__5804__auto___11002){
var seq__10636_11003__$1 = temp__5804__auto___11002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10636_11003__$1)){
var c__4550__auto___11004 = cljs.core.chunk_first.call(null,seq__10636_11003__$1);
var G__11005 = cljs.core.chunk_rest.call(null,seq__10636_11003__$1);
var G__11006 = c__4550__auto___11004;
var G__11007 = cljs.core.count.call(null,c__4550__auto___11004);
var G__11008 = (0);
seq__10636_10908 = G__11005;
chunk__10637_10909 = G__11006;
count__10638_10910 = G__11007;
i__10639_10911 = G__11008;
continue;
} else {
var vec__10841_11009 = cljs.core.first.call(null,seq__10636_11003__$1);
var line_11010 = cljs.core.nth.call(null,vec__10841_11009,(0),null);
var columns_11011 = cljs.core.nth.call(null,vec__10841_11009,(1),null);
var seq__10844_11012 = cljs.core.seq.call(null,columns_11011);
var chunk__10845_11013 = null;
var count__10846_11014 = (0);
var i__10847_11015 = (0);
while(true){
if((i__10847_11015 < count__10846_11014)){
var vec__10878_11016 = cljs.core._nth.call(null,chunk__10845_11013,i__10847_11015);
var column_11017 = cljs.core.nth.call(null,vec__10878_11016,(0),null);
var column_info_11018 = cljs.core.nth.call(null,vec__10878_11016,(1),null);
var seq__10881_11019 = cljs.core.seq.call(null,column_info_11018);
var chunk__10882_11020 = null;
var count__10883_11021 = (0);
var i__10884_11022 = (0);
while(true){
if((i__10884_11022 < count__10883_11021)){
var map__10889_11023 = cljs.core._nth.call(null,chunk__10882_11020,i__10884_11022);
var map__10889_11024__$1 = (((((!((map__10889_11023 == null))))?(((((map__10889_11023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10889_11023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10889_11023):map__10889_11023);
var gline_11025 = cljs.core.get.call(null,map__10889_11024__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11026 = cljs.core.get.call(null,map__10889_11024__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11027 = cljs.core.get.call(null,map__10889_11024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11025], null),cljs.core.fnil.call(null,((function (seq__10881_11019,chunk__10882_11020,count__10883_11021,i__10884_11022,seq__10844_11012,chunk__10845_11013,count__10846_11014,i__10847_11015,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10889_11023,map__10889_11024__$1,gline_11025,gcol_11026,name_11027,vec__10878_11016,column_11017,column_info_11018,vec__10841_11009,line_11010,columns_11011,seq__10636_11003__$1,temp__5804__auto___11002,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11026], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11010,new cljs.core.Keyword(null,"col","col",-1959363084),column_11017,new cljs.core.Keyword(null,"name","name",1843675177),name_11027], null));
});})(seq__10881_11019,chunk__10882_11020,count__10883_11021,i__10884_11022,seq__10844_11012,chunk__10845_11013,count__10846_11014,i__10847_11015,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10889_11023,map__10889_11024__$1,gline_11025,gcol_11026,name_11027,vec__10878_11016,column_11017,column_info_11018,vec__10841_11009,line_11010,columns_11011,seq__10636_11003__$1,temp__5804__auto___11002,inverted))
,cljs.core.sorted_map.call(null)));


var G__11028 = seq__10881_11019;
var G__11029 = chunk__10882_11020;
var G__11030 = count__10883_11021;
var G__11031 = (i__10884_11022 + (1));
seq__10881_11019 = G__11028;
chunk__10882_11020 = G__11029;
count__10883_11021 = G__11030;
i__10884_11022 = G__11031;
continue;
} else {
var temp__5804__auto___11032__$1 = cljs.core.seq.call(null,seq__10881_11019);
if(temp__5804__auto___11032__$1){
var seq__10881_11033__$1 = temp__5804__auto___11032__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10881_11033__$1)){
var c__4550__auto___11034 = cljs.core.chunk_first.call(null,seq__10881_11033__$1);
var G__11035 = cljs.core.chunk_rest.call(null,seq__10881_11033__$1);
var G__11036 = c__4550__auto___11034;
var G__11037 = cljs.core.count.call(null,c__4550__auto___11034);
var G__11038 = (0);
seq__10881_11019 = G__11035;
chunk__10882_11020 = G__11036;
count__10883_11021 = G__11037;
i__10884_11022 = G__11038;
continue;
} else {
var map__10891_11039 = cljs.core.first.call(null,seq__10881_11033__$1);
var map__10891_11040__$1 = (((((!((map__10891_11039 == null))))?(((((map__10891_11039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10891_11039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10891_11039):map__10891_11039);
var gline_11041 = cljs.core.get.call(null,map__10891_11040__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11042 = cljs.core.get.call(null,map__10891_11040__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11043 = cljs.core.get.call(null,map__10891_11040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11041], null),cljs.core.fnil.call(null,((function (seq__10881_11019,chunk__10882_11020,count__10883_11021,i__10884_11022,seq__10844_11012,chunk__10845_11013,count__10846_11014,i__10847_11015,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10891_11039,map__10891_11040__$1,gline_11041,gcol_11042,name_11043,seq__10881_11033__$1,temp__5804__auto___11032__$1,vec__10878_11016,column_11017,column_info_11018,vec__10841_11009,line_11010,columns_11011,seq__10636_11003__$1,temp__5804__auto___11002,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11042], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11010,new cljs.core.Keyword(null,"col","col",-1959363084),column_11017,new cljs.core.Keyword(null,"name","name",1843675177),name_11043], null));
});})(seq__10881_11019,chunk__10882_11020,count__10883_11021,i__10884_11022,seq__10844_11012,chunk__10845_11013,count__10846_11014,i__10847_11015,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10891_11039,map__10891_11040__$1,gline_11041,gcol_11042,name_11043,seq__10881_11033__$1,temp__5804__auto___11032__$1,vec__10878_11016,column_11017,column_info_11018,vec__10841_11009,line_11010,columns_11011,seq__10636_11003__$1,temp__5804__auto___11002,inverted))
,cljs.core.sorted_map.call(null)));


var G__11044 = cljs.core.next.call(null,seq__10881_11033__$1);
var G__11045 = null;
var G__11046 = (0);
var G__11047 = (0);
seq__10881_11019 = G__11044;
chunk__10882_11020 = G__11045;
count__10883_11021 = G__11046;
i__10884_11022 = G__11047;
continue;
}
} else {
}
}
break;
}


var G__11048 = seq__10844_11012;
var G__11049 = chunk__10845_11013;
var G__11050 = count__10846_11014;
var G__11051 = (i__10847_11015 + (1));
seq__10844_11012 = G__11048;
chunk__10845_11013 = G__11049;
count__10846_11014 = G__11050;
i__10847_11015 = G__11051;
continue;
} else {
var temp__5804__auto___11052__$1 = cljs.core.seq.call(null,seq__10844_11012);
if(temp__5804__auto___11052__$1){
var seq__10844_11053__$1 = temp__5804__auto___11052__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10844_11053__$1)){
var c__4550__auto___11054 = cljs.core.chunk_first.call(null,seq__10844_11053__$1);
var G__11055 = cljs.core.chunk_rest.call(null,seq__10844_11053__$1);
var G__11056 = c__4550__auto___11054;
var G__11057 = cljs.core.count.call(null,c__4550__auto___11054);
var G__11058 = (0);
seq__10844_11012 = G__11055;
chunk__10845_11013 = G__11056;
count__10846_11014 = G__11057;
i__10847_11015 = G__11058;
continue;
} else {
var vec__10893_11059 = cljs.core.first.call(null,seq__10844_11053__$1);
var column_11060 = cljs.core.nth.call(null,vec__10893_11059,(0),null);
var column_info_11061 = cljs.core.nth.call(null,vec__10893_11059,(1),null);
var seq__10896_11062 = cljs.core.seq.call(null,column_info_11061);
var chunk__10897_11063 = null;
var count__10898_11064 = (0);
var i__10899_11065 = (0);
while(true){
if((i__10899_11065 < count__10898_11064)){
var map__10904_11066 = cljs.core._nth.call(null,chunk__10897_11063,i__10899_11065);
var map__10904_11067__$1 = (((((!((map__10904_11066 == null))))?(((((map__10904_11066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10904_11066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10904_11066):map__10904_11066);
var gline_11068 = cljs.core.get.call(null,map__10904_11067__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11069 = cljs.core.get.call(null,map__10904_11067__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11070 = cljs.core.get.call(null,map__10904_11067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11068], null),cljs.core.fnil.call(null,((function (seq__10896_11062,chunk__10897_11063,count__10898_11064,i__10899_11065,seq__10844_11012,chunk__10845_11013,count__10846_11014,i__10847_11015,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10904_11066,map__10904_11067__$1,gline_11068,gcol_11069,name_11070,vec__10893_11059,column_11060,column_info_11061,seq__10844_11053__$1,temp__5804__auto___11052__$1,vec__10841_11009,line_11010,columns_11011,seq__10636_11003__$1,temp__5804__auto___11002,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11069], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11010,new cljs.core.Keyword(null,"col","col",-1959363084),column_11060,new cljs.core.Keyword(null,"name","name",1843675177),name_11070], null));
});})(seq__10896_11062,chunk__10897_11063,count__10898_11064,i__10899_11065,seq__10844_11012,chunk__10845_11013,count__10846_11014,i__10847_11015,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10904_11066,map__10904_11067__$1,gline_11068,gcol_11069,name_11070,vec__10893_11059,column_11060,column_info_11061,seq__10844_11053__$1,temp__5804__auto___11052__$1,vec__10841_11009,line_11010,columns_11011,seq__10636_11003__$1,temp__5804__auto___11002,inverted))
,cljs.core.sorted_map.call(null)));


var G__11071 = seq__10896_11062;
var G__11072 = chunk__10897_11063;
var G__11073 = count__10898_11064;
var G__11074 = (i__10899_11065 + (1));
seq__10896_11062 = G__11071;
chunk__10897_11063 = G__11072;
count__10898_11064 = G__11073;
i__10899_11065 = G__11074;
continue;
} else {
var temp__5804__auto___11075__$2 = cljs.core.seq.call(null,seq__10896_11062);
if(temp__5804__auto___11075__$2){
var seq__10896_11076__$1 = temp__5804__auto___11075__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10896_11076__$1)){
var c__4550__auto___11077 = cljs.core.chunk_first.call(null,seq__10896_11076__$1);
var G__11078 = cljs.core.chunk_rest.call(null,seq__10896_11076__$1);
var G__11079 = c__4550__auto___11077;
var G__11080 = cljs.core.count.call(null,c__4550__auto___11077);
var G__11081 = (0);
seq__10896_11062 = G__11078;
chunk__10897_11063 = G__11079;
count__10898_11064 = G__11080;
i__10899_11065 = G__11081;
continue;
} else {
var map__10906_11082 = cljs.core.first.call(null,seq__10896_11076__$1);
var map__10906_11083__$1 = (((((!((map__10906_11082 == null))))?(((((map__10906_11082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10906_11082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10906_11082):map__10906_11082);
var gline_11084 = cljs.core.get.call(null,map__10906_11083__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11085 = cljs.core.get.call(null,map__10906_11083__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11086 = cljs.core.get.call(null,map__10906_11083__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11084], null),cljs.core.fnil.call(null,((function (seq__10896_11062,chunk__10897_11063,count__10898_11064,i__10899_11065,seq__10844_11012,chunk__10845_11013,count__10846_11014,i__10847_11015,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10906_11082,map__10906_11083__$1,gline_11084,gcol_11085,name_11086,seq__10896_11076__$1,temp__5804__auto___11075__$2,vec__10893_11059,column_11060,column_info_11061,seq__10844_11053__$1,temp__5804__auto___11052__$1,vec__10841_11009,line_11010,columns_11011,seq__10636_11003__$1,temp__5804__auto___11002,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11085], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11010,new cljs.core.Keyword(null,"col","col",-1959363084),column_11060,new cljs.core.Keyword(null,"name","name",1843675177),name_11086], null));
});})(seq__10896_11062,chunk__10897_11063,count__10898_11064,i__10899_11065,seq__10844_11012,chunk__10845_11013,count__10846_11014,i__10847_11015,seq__10636_10908,chunk__10637_10909,count__10638_10910,i__10639_10911,map__10906_11082,map__10906_11083__$1,gline_11084,gcol_11085,name_11086,seq__10896_11076__$1,temp__5804__auto___11075__$2,vec__10893_11059,column_11060,column_info_11061,seq__10844_11053__$1,temp__5804__auto___11052__$1,vec__10841_11009,line_11010,columns_11011,seq__10636_11003__$1,temp__5804__auto___11002,inverted))
,cljs.core.sorted_map.call(null)));


var G__11087 = cljs.core.next.call(null,seq__10896_11076__$1);
var G__11088 = null;
var G__11089 = (0);
var G__11090 = (0);
seq__10896_11062 = G__11087;
chunk__10897_11063 = G__11088;
count__10898_11064 = G__11089;
i__10899_11065 = G__11090;
continue;
}
} else {
}
}
break;
}


var G__11091 = cljs.core.next.call(null,seq__10844_11053__$1);
var G__11092 = null;
var G__11093 = (0);
var G__11094 = (0);
seq__10844_11012 = G__11091;
chunk__10845_11013 = G__11092;
count__10846_11014 = G__11093;
i__10847_11015 = G__11094;
continue;
}
} else {
}
}
break;
}


var G__11095 = cljs.core.next.call(null,seq__10636_11003__$1);
var G__11096 = null;
var G__11097 = (0);
var G__11098 = (0);
seq__10636_10908 = G__11095;
chunk__10637_10909 = G__11096;
count__10638_10910 = G__11097;
i__10639_10911 = G__11098;
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
