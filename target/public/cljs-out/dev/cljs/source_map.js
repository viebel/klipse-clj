// Compiled by ClojureScript 1.10.439 {}
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
return cljs.core.reduce.call(null,(function (m,p__11795){
var vec__11796 = p__11795;
var i = cljs.core.nth.call(null,vec__11796,(0),null);
var v = cljs.core.nth.call(null,vec__11796,(1),null);
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
var vec__11799 = seg;
var gcol = cljs.core.nth.call(null,vec__11799,(0),null);
var source = cljs.core.nth.call(null,vec__11799,(1),null);
var line = cljs.core.nth.call(null,vec__11799,(2),null);
var col = cljs.core.nth.call(null,vec__11799,(3),null);
var name = cljs.core.nth.call(null,vec__11799,(4),null);
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
var vec__11802 = seg;
var gcol = cljs.core.nth.call(null,vec__11802,(0),null);
var source = cljs.core.nth.call(null,vec__11802,(1),null);
var line = cljs.core.nth.call(null,vec__11802,(2),null);
var col = cljs.core.nth.call(null,vec__11802,(3),null);
var name = cljs.core.nth.call(null,vec__11802,(4),null);
var vec__11805 = relseg;
var rgcol = cljs.core.nth.call(null,vec__11805,(0),null);
var rsource = cljs.core.nth.call(null,vec__11805,(1),null);
var rline = cljs.core.nth.call(null,vec__11805,(2),null);
var rcol = cljs.core.nth.call(null,vec__11805,(3),null);
var rname = cljs.core.nth.call(null,vec__11805,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4047__auto__ = source;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4047__auto__ = line;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4047__auto__ = col;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var map__11808 = segmap;
var map__11808__$1 = (((((!((map__11808 == null))))?(((((map__11808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11808):map__11808);
var gcol = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__11808,map__11808__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__11808,map__11808__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__11808,map__11808__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__11808,map__11808__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11808,map__11808__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__11808,map__11808__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__11811 = arguments.length;
switch (G__11811) {
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
var vec__11812 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11816 = cljs.core.next.call(null,segs__$1);
var G__11817 = nrelseg;
var G__11818 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11816;
relseg__$1 = G__11817;
result__$1 = G__11818;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11812,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11812,(1),null);
var G__11819 = (gline + (1));
var G__11820 = cljs.core.next.call(null,lines__$1);
var G__11821 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11822 = result__$1;
gline = G__11819;
lines__$1 = G__11820;
relseg = G__11821;
result = G__11822;
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
var map__11824 = segmap;
var map__11824__$1 = (((((!((map__11824 == null))))?(((((map__11824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11824):map__11824);
var gcol = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__11824,map__11824__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__11824,map__11824__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__11823_SHARP_){
return cljs.core.conj.call(null,p1__11823_SHARP_,d__$1);
});})(map__11824,map__11824__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11824,map__11824__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__11827 = arguments.length;
switch (G__11827) {
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
var vec__11828 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11832 = cljs.core.next.call(null,segs__$1);
var G__11833 = nrelseg;
var G__11834 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11832;
relseg__$1 = G__11833;
result__$1 = G__11834;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11828,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11828,(1),null);
var G__11835 = (gline + (1));
var G__11836 = cljs.core.next.call(null,lines__$1);
var G__11837 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11838 = result__$1;
gline = G__11835;
lines__$1 = G__11836;
relseg = G__11837;
result = G__11838;
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
return (function (p__11839){
var vec__11840 = p__11839;
var _ = cljs.core.nth.call(null,vec__11840,(0),null);
var source = cljs.core.nth.call(null,vec__11840,(1),null);
var line = cljs.core.nth.call(null,vec__11840,(2),null);
var col = cljs.core.nth.call(null,vec__11840,(3),null);
var name = cljs.core.nth.call(null,vec__11840,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__11843){
var vec__11844 = p__11843;
var gcol = cljs.core.nth.call(null,vec__11844,(0),null);
var sidx = cljs.core.nth.call(null,vec__11844,(1),null);
var line = cljs.core.nth.call(null,vec__11844,(2),null);
var col = cljs.core.nth.call(null,vec__11844,(3),null);
var name = cljs.core.nth.call(null,vec__11844,(4),null);
var seg = vec__11844;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__11844,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11847){
var vec__11848 = p__11847;
var _ = cljs.core.nth.call(null,vec__11848,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11848,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11848,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11848,(3),null);
var lname = cljs.core.nth.call(null,vec__11848,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11844,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var seq__11854 = cljs.core.seq.call(null,infos);
var chunk__11855 = null;
var count__11856 = (0);
var i__11857 = (0);
while(true){
if((i__11857 < count__11856)){
var info = cljs.core._nth.call(null,chunk__11855,i__11857);
var segv_11936 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11937 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11938 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11937 > (lc_11938 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11854,chunk__11855,count__11856,i__11857,segv_11936,gline_11937,lc_11938,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11937 - (lc_11938 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11936], null));
});})(seq__11854,chunk__11855,count__11856,i__11857,segv_11936,gline_11937,lc_11938,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11854,chunk__11855,count__11856,i__11857,segv_11936,gline_11937,lc_11938,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11937], null),cljs.core.conj,segv_11936);
});})(seq__11854,chunk__11855,count__11856,i__11857,segv_11936,gline_11937,lc_11938,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11939 = seq__11854;
var G__11940 = chunk__11855;
var G__11941 = count__11856;
var G__11942 = (i__11857 + (1));
seq__11854 = G__11939;
chunk__11855 = G__11940;
count__11856 = G__11941;
i__11857 = G__11942;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11854);
if(temp__5720__auto__){
var seq__11854__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11854__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__11854__$1);
var G__11943 = cljs.core.chunk_rest.call(null,seq__11854__$1);
var G__11944 = c__4461__auto__;
var G__11945 = cljs.core.count.call(null,c__4461__auto__);
var G__11946 = (0);
seq__11854 = G__11943;
chunk__11855 = G__11944;
count__11856 = G__11945;
i__11857 = G__11946;
continue;
} else {
var info = cljs.core.first.call(null,seq__11854__$1);
var segv_11947 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11948 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11949 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11948 > (lc_11949 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11854,chunk__11855,count__11856,i__11857,segv_11947,gline_11948,lc_11949,info,seq__11854__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11948 - (lc_11949 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11947], null));
});})(seq__11854,chunk__11855,count__11856,i__11857,segv_11947,gline_11948,lc_11949,info,seq__11854__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11854,chunk__11855,count__11856,i__11857,segv_11947,gline_11948,lc_11949,info,seq__11854__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11948], null),cljs.core.conj,segv_11947);
});})(seq__11854,chunk__11855,count__11856,i__11857,segv_11947,gline_11948,lc_11949,info,seq__11854__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11950 = cljs.core.next.call(null,seq__11854__$1);
var G__11951 = null;
var G__11952 = (0);
var G__11953 = (0);
seq__11854 = G__11950;
chunk__11855 = G__11951;
count__11856 = G__11952;
i__11857 = G__11953;
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
var seq__11858_11954 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11859_11955 = null;
var count__11860_11956 = (0);
var i__11861_11957 = (0);
while(true){
if((i__11861_11957 < count__11860_11956)){
var vec__11862_11958 = cljs.core._nth.call(null,chunk__11859_11955,i__11861_11957);
var source_idx_11959 = cljs.core.nth.call(null,vec__11862_11958,(0),null);
var vec__11865_11960 = cljs.core.nth.call(null,vec__11862_11958,(1),null);
var __11961 = cljs.core.nth.call(null,vec__11865_11960,(0),null);
var lines_11962__$1 = cljs.core.nth.call(null,vec__11865_11960,(1),null);
var seq__11868_11963 = cljs.core.seq.call(null,lines_11962__$1);
var chunk__11869_11964 = null;
var count__11870_11965 = (0);
var i__11871_11966 = (0);
while(true){
if((i__11871_11966 < count__11870_11965)){
var vec__11872_11967 = cljs.core._nth.call(null,chunk__11869_11964,i__11871_11966);
var line_11968 = cljs.core.nth.call(null,vec__11872_11967,(0),null);
var cols_11969 = cljs.core.nth.call(null,vec__11872_11967,(1),null);
var seq__11875_11970 = cljs.core.seq.call(null,cols_11969);
var chunk__11876_11971 = null;
var count__11877_11972 = (0);
var i__11878_11973 = (0);
while(true){
if((i__11878_11973 < count__11877_11972)){
var vec__11879_11974 = cljs.core._nth.call(null,chunk__11876_11971,i__11878_11973);
var col_11975 = cljs.core.nth.call(null,vec__11879_11974,(0),null);
var infos_11976 = cljs.core.nth.call(null,vec__11879_11974,(1),null);
encode_cols.call(null,infos_11976,source_idx_11959,line_11968,col_11975);


var G__11977 = seq__11875_11970;
var G__11978 = chunk__11876_11971;
var G__11979 = count__11877_11972;
var G__11980 = (i__11878_11973 + (1));
seq__11875_11970 = G__11977;
chunk__11876_11971 = G__11978;
count__11877_11972 = G__11979;
i__11878_11973 = G__11980;
continue;
} else {
var temp__5720__auto___11981 = cljs.core.seq.call(null,seq__11875_11970);
if(temp__5720__auto___11981){
var seq__11875_11982__$1 = temp__5720__auto___11981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11875_11982__$1)){
var c__4461__auto___11983 = cljs.core.chunk_first.call(null,seq__11875_11982__$1);
var G__11984 = cljs.core.chunk_rest.call(null,seq__11875_11982__$1);
var G__11985 = c__4461__auto___11983;
var G__11986 = cljs.core.count.call(null,c__4461__auto___11983);
var G__11987 = (0);
seq__11875_11970 = G__11984;
chunk__11876_11971 = G__11985;
count__11877_11972 = G__11986;
i__11878_11973 = G__11987;
continue;
} else {
var vec__11882_11988 = cljs.core.first.call(null,seq__11875_11982__$1);
var col_11989 = cljs.core.nth.call(null,vec__11882_11988,(0),null);
var infos_11990 = cljs.core.nth.call(null,vec__11882_11988,(1),null);
encode_cols.call(null,infos_11990,source_idx_11959,line_11968,col_11989);


var G__11991 = cljs.core.next.call(null,seq__11875_11982__$1);
var G__11992 = null;
var G__11993 = (0);
var G__11994 = (0);
seq__11875_11970 = G__11991;
chunk__11876_11971 = G__11992;
count__11877_11972 = G__11993;
i__11878_11973 = G__11994;
continue;
}
} else {
}
}
break;
}


var G__11995 = seq__11868_11963;
var G__11996 = chunk__11869_11964;
var G__11997 = count__11870_11965;
var G__11998 = (i__11871_11966 + (1));
seq__11868_11963 = G__11995;
chunk__11869_11964 = G__11996;
count__11870_11965 = G__11997;
i__11871_11966 = G__11998;
continue;
} else {
var temp__5720__auto___11999 = cljs.core.seq.call(null,seq__11868_11963);
if(temp__5720__auto___11999){
var seq__11868_12000__$1 = temp__5720__auto___11999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11868_12000__$1)){
var c__4461__auto___12001 = cljs.core.chunk_first.call(null,seq__11868_12000__$1);
var G__12002 = cljs.core.chunk_rest.call(null,seq__11868_12000__$1);
var G__12003 = c__4461__auto___12001;
var G__12004 = cljs.core.count.call(null,c__4461__auto___12001);
var G__12005 = (0);
seq__11868_11963 = G__12002;
chunk__11869_11964 = G__12003;
count__11870_11965 = G__12004;
i__11871_11966 = G__12005;
continue;
} else {
var vec__11885_12006 = cljs.core.first.call(null,seq__11868_12000__$1);
var line_12007 = cljs.core.nth.call(null,vec__11885_12006,(0),null);
var cols_12008 = cljs.core.nth.call(null,vec__11885_12006,(1),null);
var seq__11888_12009 = cljs.core.seq.call(null,cols_12008);
var chunk__11889_12010 = null;
var count__11890_12011 = (0);
var i__11891_12012 = (0);
while(true){
if((i__11891_12012 < count__11890_12011)){
var vec__11892_12013 = cljs.core._nth.call(null,chunk__11889_12010,i__11891_12012);
var col_12014 = cljs.core.nth.call(null,vec__11892_12013,(0),null);
var infos_12015 = cljs.core.nth.call(null,vec__11892_12013,(1),null);
encode_cols.call(null,infos_12015,source_idx_11959,line_12007,col_12014);


var G__12016 = seq__11888_12009;
var G__12017 = chunk__11889_12010;
var G__12018 = count__11890_12011;
var G__12019 = (i__11891_12012 + (1));
seq__11888_12009 = G__12016;
chunk__11889_12010 = G__12017;
count__11890_12011 = G__12018;
i__11891_12012 = G__12019;
continue;
} else {
var temp__5720__auto___12020__$1 = cljs.core.seq.call(null,seq__11888_12009);
if(temp__5720__auto___12020__$1){
var seq__11888_12021__$1 = temp__5720__auto___12020__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11888_12021__$1)){
var c__4461__auto___12022 = cljs.core.chunk_first.call(null,seq__11888_12021__$1);
var G__12023 = cljs.core.chunk_rest.call(null,seq__11888_12021__$1);
var G__12024 = c__4461__auto___12022;
var G__12025 = cljs.core.count.call(null,c__4461__auto___12022);
var G__12026 = (0);
seq__11888_12009 = G__12023;
chunk__11889_12010 = G__12024;
count__11890_12011 = G__12025;
i__11891_12012 = G__12026;
continue;
} else {
var vec__11895_12027 = cljs.core.first.call(null,seq__11888_12021__$1);
var col_12028 = cljs.core.nth.call(null,vec__11895_12027,(0),null);
var infos_12029 = cljs.core.nth.call(null,vec__11895_12027,(1),null);
encode_cols.call(null,infos_12029,source_idx_11959,line_12007,col_12028);


var G__12030 = cljs.core.next.call(null,seq__11888_12021__$1);
var G__12031 = null;
var G__12032 = (0);
var G__12033 = (0);
seq__11888_12009 = G__12030;
chunk__11889_12010 = G__12031;
count__11890_12011 = G__12032;
i__11891_12012 = G__12033;
continue;
}
} else {
}
}
break;
}


var G__12034 = cljs.core.next.call(null,seq__11868_12000__$1);
var G__12035 = null;
var G__12036 = (0);
var G__12037 = (0);
seq__11868_11963 = G__12034;
chunk__11869_11964 = G__12035;
count__11870_11965 = G__12036;
i__11871_11966 = G__12037;
continue;
}
} else {
}
}
break;
}


var G__12038 = seq__11858_11954;
var G__12039 = chunk__11859_11955;
var G__12040 = count__11860_11956;
var G__12041 = (i__11861_11957 + (1));
seq__11858_11954 = G__12038;
chunk__11859_11955 = G__12039;
count__11860_11956 = G__12040;
i__11861_11957 = G__12041;
continue;
} else {
var temp__5720__auto___12042 = cljs.core.seq.call(null,seq__11858_11954);
if(temp__5720__auto___12042){
var seq__11858_12043__$1 = temp__5720__auto___12042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11858_12043__$1)){
var c__4461__auto___12044 = cljs.core.chunk_first.call(null,seq__11858_12043__$1);
var G__12045 = cljs.core.chunk_rest.call(null,seq__11858_12043__$1);
var G__12046 = c__4461__auto___12044;
var G__12047 = cljs.core.count.call(null,c__4461__auto___12044);
var G__12048 = (0);
seq__11858_11954 = G__12045;
chunk__11859_11955 = G__12046;
count__11860_11956 = G__12047;
i__11861_11957 = G__12048;
continue;
} else {
var vec__11898_12049 = cljs.core.first.call(null,seq__11858_12043__$1);
var source_idx_12050 = cljs.core.nth.call(null,vec__11898_12049,(0),null);
var vec__11901_12051 = cljs.core.nth.call(null,vec__11898_12049,(1),null);
var __12052 = cljs.core.nth.call(null,vec__11901_12051,(0),null);
var lines_12053__$1 = cljs.core.nth.call(null,vec__11901_12051,(1),null);
var seq__11904_12054 = cljs.core.seq.call(null,lines_12053__$1);
var chunk__11905_12055 = null;
var count__11906_12056 = (0);
var i__11907_12057 = (0);
while(true){
if((i__11907_12057 < count__11906_12056)){
var vec__11908_12058 = cljs.core._nth.call(null,chunk__11905_12055,i__11907_12057);
var line_12059 = cljs.core.nth.call(null,vec__11908_12058,(0),null);
var cols_12060 = cljs.core.nth.call(null,vec__11908_12058,(1),null);
var seq__11911_12061 = cljs.core.seq.call(null,cols_12060);
var chunk__11912_12062 = null;
var count__11913_12063 = (0);
var i__11914_12064 = (0);
while(true){
if((i__11914_12064 < count__11913_12063)){
var vec__11915_12065 = cljs.core._nth.call(null,chunk__11912_12062,i__11914_12064);
var col_12066 = cljs.core.nth.call(null,vec__11915_12065,(0),null);
var infos_12067 = cljs.core.nth.call(null,vec__11915_12065,(1),null);
encode_cols.call(null,infos_12067,source_idx_12050,line_12059,col_12066);


var G__12068 = seq__11911_12061;
var G__12069 = chunk__11912_12062;
var G__12070 = count__11913_12063;
var G__12071 = (i__11914_12064 + (1));
seq__11911_12061 = G__12068;
chunk__11912_12062 = G__12069;
count__11913_12063 = G__12070;
i__11914_12064 = G__12071;
continue;
} else {
var temp__5720__auto___12072__$1 = cljs.core.seq.call(null,seq__11911_12061);
if(temp__5720__auto___12072__$1){
var seq__11911_12073__$1 = temp__5720__auto___12072__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11911_12073__$1)){
var c__4461__auto___12074 = cljs.core.chunk_first.call(null,seq__11911_12073__$1);
var G__12075 = cljs.core.chunk_rest.call(null,seq__11911_12073__$1);
var G__12076 = c__4461__auto___12074;
var G__12077 = cljs.core.count.call(null,c__4461__auto___12074);
var G__12078 = (0);
seq__11911_12061 = G__12075;
chunk__11912_12062 = G__12076;
count__11913_12063 = G__12077;
i__11914_12064 = G__12078;
continue;
} else {
var vec__11918_12079 = cljs.core.first.call(null,seq__11911_12073__$1);
var col_12080 = cljs.core.nth.call(null,vec__11918_12079,(0),null);
var infos_12081 = cljs.core.nth.call(null,vec__11918_12079,(1),null);
encode_cols.call(null,infos_12081,source_idx_12050,line_12059,col_12080);


var G__12082 = cljs.core.next.call(null,seq__11911_12073__$1);
var G__12083 = null;
var G__12084 = (0);
var G__12085 = (0);
seq__11911_12061 = G__12082;
chunk__11912_12062 = G__12083;
count__11913_12063 = G__12084;
i__11914_12064 = G__12085;
continue;
}
} else {
}
}
break;
}


var G__12086 = seq__11904_12054;
var G__12087 = chunk__11905_12055;
var G__12088 = count__11906_12056;
var G__12089 = (i__11907_12057 + (1));
seq__11904_12054 = G__12086;
chunk__11905_12055 = G__12087;
count__11906_12056 = G__12088;
i__11907_12057 = G__12089;
continue;
} else {
var temp__5720__auto___12090__$1 = cljs.core.seq.call(null,seq__11904_12054);
if(temp__5720__auto___12090__$1){
var seq__11904_12091__$1 = temp__5720__auto___12090__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11904_12091__$1)){
var c__4461__auto___12092 = cljs.core.chunk_first.call(null,seq__11904_12091__$1);
var G__12093 = cljs.core.chunk_rest.call(null,seq__11904_12091__$1);
var G__12094 = c__4461__auto___12092;
var G__12095 = cljs.core.count.call(null,c__4461__auto___12092);
var G__12096 = (0);
seq__11904_12054 = G__12093;
chunk__11905_12055 = G__12094;
count__11906_12056 = G__12095;
i__11907_12057 = G__12096;
continue;
} else {
var vec__11921_12097 = cljs.core.first.call(null,seq__11904_12091__$1);
var line_12098 = cljs.core.nth.call(null,vec__11921_12097,(0),null);
var cols_12099 = cljs.core.nth.call(null,vec__11921_12097,(1),null);
var seq__11924_12100 = cljs.core.seq.call(null,cols_12099);
var chunk__11925_12101 = null;
var count__11926_12102 = (0);
var i__11927_12103 = (0);
while(true){
if((i__11927_12103 < count__11926_12102)){
var vec__11928_12104 = cljs.core._nth.call(null,chunk__11925_12101,i__11927_12103);
var col_12105 = cljs.core.nth.call(null,vec__11928_12104,(0),null);
var infos_12106 = cljs.core.nth.call(null,vec__11928_12104,(1),null);
encode_cols.call(null,infos_12106,source_idx_12050,line_12098,col_12105);


var G__12107 = seq__11924_12100;
var G__12108 = chunk__11925_12101;
var G__12109 = count__11926_12102;
var G__12110 = (i__11927_12103 + (1));
seq__11924_12100 = G__12107;
chunk__11925_12101 = G__12108;
count__11926_12102 = G__12109;
i__11927_12103 = G__12110;
continue;
} else {
var temp__5720__auto___12111__$2 = cljs.core.seq.call(null,seq__11924_12100);
if(temp__5720__auto___12111__$2){
var seq__11924_12112__$1 = temp__5720__auto___12111__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11924_12112__$1)){
var c__4461__auto___12113 = cljs.core.chunk_first.call(null,seq__11924_12112__$1);
var G__12114 = cljs.core.chunk_rest.call(null,seq__11924_12112__$1);
var G__12115 = c__4461__auto___12113;
var G__12116 = cljs.core.count.call(null,c__4461__auto___12113);
var G__12117 = (0);
seq__11924_12100 = G__12114;
chunk__11925_12101 = G__12115;
count__11926_12102 = G__12116;
i__11927_12103 = G__12117;
continue;
} else {
var vec__11931_12118 = cljs.core.first.call(null,seq__11924_12112__$1);
var col_12119 = cljs.core.nth.call(null,vec__11931_12118,(0),null);
var infos_12120 = cljs.core.nth.call(null,vec__11931_12118,(1),null);
encode_cols.call(null,infos_12120,source_idx_12050,line_12098,col_12119);


var G__12121 = cljs.core.next.call(null,seq__11924_12112__$1);
var G__12122 = null;
var G__12123 = (0);
var G__12124 = (0);
seq__11924_12100 = G__12121;
chunk__11925_12101 = G__12122;
count__11926_12102 = G__12123;
i__11927_12103 = G__12124;
continue;
}
} else {
}
}
break;
}


var G__12125 = cljs.core.next.call(null,seq__11904_12091__$1);
var G__12126 = null;
var G__12127 = (0);
var G__12128 = (0);
seq__11904_12054 = G__12125;
chunk__11905_12055 = G__12126;
count__11906_12056 = G__12127;
i__11907_12057 = G__12128;
continue;
}
} else {
}
}
break;
}


var G__12129 = cljs.core.next.call(null,seq__11858_12043__$1);
var G__12130 = null;
var G__12131 = (0);
var G__12132 = (0);
seq__11858_11954 = G__12129;
chunk__11859_11955 = G__12130;
count__11860_11956 = G__12131;
i__11861_11957 = G__12132;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11934 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11851_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11851_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11852_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11852_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11853_SHARP_){
return clojure.string.join.call(null,",",p1__11853_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__11935 = G__11934;
goog.object.set(G__11935,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__11935;
} else {
return G__11934;
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
var vec__12133 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12133,(0),null);
var col_map = cljs.core.nth.call(null,vec__12133,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12136 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12136,(0),null);
var infos = cljs.core.nth.call(null,vec__12136,(1),null);
var G__12142 = cljs.core.next.call(null,col_map_seq);
var G__12143 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12136,col,infos,vec__12133,line,col_map){
return (function (v,p__12139){
var map__12140 = p__12139;
var map__12140__$1 = (((((!((map__12140 == null))))?(((((map__12140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12140):map__12140);
var gline = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12136,col,infos,vec__12133,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12142;
new_cols = G__12143;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12144 = cljs.core.next.call(null,line_map_seq);
var G__12145 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12144;
new_lines = G__12145;
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
var seq__12146_12208 = cljs.core.seq.call(null,reverse_map);
var chunk__12147_12209 = null;
var count__12148_12210 = (0);
var i__12149_12211 = (0);
while(true){
if((i__12149_12211 < count__12148_12210)){
var vec__12150_12212 = cljs.core._nth.call(null,chunk__12147_12209,i__12149_12211);
var line_12213 = cljs.core.nth.call(null,vec__12150_12212,(0),null);
var columns_12214 = cljs.core.nth.call(null,vec__12150_12212,(1),null);
var seq__12153_12215 = cljs.core.seq.call(null,columns_12214);
var chunk__12154_12216 = null;
var count__12155_12217 = (0);
var i__12156_12218 = (0);
while(true){
if((i__12156_12218 < count__12155_12217)){
var vec__12157_12219 = cljs.core._nth.call(null,chunk__12154_12216,i__12156_12218);
var column_12220 = cljs.core.nth.call(null,vec__12157_12219,(0),null);
var column_info_12221 = cljs.core.nth.call(null,vec__12157_12219,(1),null);
var seq__12160_12222 = cljs.core.seq.call(null,column_info_12221);
var chunk__12161_12223 = null;
var count__12162_12224 = (0);
var i__12163_12225 = (0);
while(true){
if((i__12163_12225 < count__12162_12224)){
var map__12164_12226 = cljs.core._nth.call(null,chunk__12161_12223,i__12163_12225);
var map__12164_12227__$1 = (((((!((map__12164_12226 == null))))?(((((map__12164_12226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12164_12226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12164_12226):map__12164_12226);
var gline_12228 = cljs.core.get.call(null,map__12164_12227__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12229 = cljs.core.get.call(null,map__12164_12227__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12230 = cljs.core.get.call(null,map__12164_12227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12228], null),cljs.core.fnil.call(null,((function (seq__12160_12222,chunk__12161_12223,count__12162_12224,i__12163_12225,seq__12153_12215,chunk__12154_12216,count__12155_12217,i__12156_12218,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12164_12226,map__12164_12227__$1,gline_12228,gcol_12229,name_12230,vec__12157_12219,column_12220,column_info_12221,vec__12150_12212,line_12213,columns_12214,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12229], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12213,new cljs.core.Keyword(null,"col","col",-1959363084),column_12220,new cljs.core.Keyword(null,"name","name",1843675177),name_12230], null));
});})(seq__12160_12222,chunk__12161_12223,count__12162_12224,i__12163_12225,seq__12153_12215,chunk__12154_12216,count__12155_12217,i__12156_12218,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12164_12226,map__12164_12227__$1,gline_12228,gcol_12229,name_12230,vec__12157_12219,column_12220,column_info_12221,vec__12150_12212,line_12213,columns_12214,inverted))
,cljs.core.sorted_map.call(null)));


var G__12231 = seq__12160_12222;
var G__12232 = chunk__12161_12223;
var G__12233 = count__12162_12224;
var G__12234 = (i__12163_12225 + (1));
seq__12160_12222 = G__12231;
chunk__12161_12223 = G__12232;
count__12162_12224 = G__12233;
i__12163_12225 = G__12234;
continue;
} else {
var temp__5720__auto___12235 = cljs.core.seq.call(null,seq__12160_12222);
if(temp__5720__auto___12235){
var seq__12160_12236__$1 = temp__5720__auto___12235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12160_12236__$1)){
var c__4461__auto___12237 = cljs.core.chunk_first.call(null,seq__12160_12236__$1);
var G__12238 = cljs.core.chunk_rest.call(null,seq__12160_12236__$1);
var G__12239 = c__4461__auto___12237;
var G__12240 = cljs.core.count.call(null,c__4461__auto___12237);
var G__12241 = (0);
seq__12160_12222 = G__12238;
chunk__12161_12223 = G__12239;
count__12162_12224 = G__12240;
i__12163_12225 = G__12241;
continue;
} else {
var map__12166_12242 = cljs.core.first.call(null,seq__12160_12236__$1);
var map__12166_12243__$1 = (((((!((map__12166_12242 == null))))?(((((map__12166_12242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12166_12242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12166_12242):map__12166_12242);
var gline_12244 = cljs.core.get.call(null,map__12166_12243__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12245 = cljs.core.get.call(null,map__12166_12243__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12246 = cljs.core.get.call(null,map__12166_12243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12244], null),cljs.core.fnil.call(null,((function (seq__12160_12222,chunk__12161_12223,count__12162_12224,i__12163_12225,seq__12153_12215,chunk__12154_12216,count__12155_12217,i__12156_12218,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12166_12242,map__12166_12243__$1,gline_12244,gcol_12245,name_12246,seq__12160_12236__$1,temp__5720__auto___12235,vec__12157_12219,column_12220,column_info_12221,vec__12150_12212,line_12213,columns_12214,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12245], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12213,new cljs.core.Keyword(null,"col","col",-1959363084),column_12220,new cljs.core.Keyword(null,"name","name",1843675177),name_12246], null));
});})(seq__12160_12222,chunk__12161_12223,count__12162_12224,i__12163_12225,seq__12153_12215,chunk__12154_12216,count__12155_12217,i__12156_12218,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12166_12242,map__12166_12243__$1,gline_12244,gcol_12245,name_12246,seq__12160_12236__$1,temp__5720__auto___12235,vec__12157_12219,column_12220,column_info_12221,vec__12150_12212,line_12213,columns_12214,inverted))
,cljs.core.sorted_map.call(null)));


var G__12247 = cljs.core.next.call(null,seq__12160_12236__$1);
var G__12248 = null;
var G__12249 = (0);
var G__12250 = (0);
seq__12160_12222 = G__12247;
chunk__12161_12223 = G__12248;
count__12162_12224 = G__12249;
i__12163_12225 = G__12250;
continue;
}
} else {
}
}
break;
}


var G__12251 = seq__12153_12215;
var G__12252 = chunk__12154_12216;
var G__12253 = count__12155_12217;
var G__12254 = (i__12156_12218 + (1));
seq__12153_12215 = G__12251;
chunk__12154_12216 = G__12252;
count__12155_12217 = G__12253;
i__12156_12218 = G__12254;
continue;
} else {
var temp__5720__auto___12255 = cljs.core.seq.call(null,seq__12153_12215);
if(temp__5720__auto___12255){
var seq__12153_12256__$1 = temp__5720__auto___12255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12153_12256__$1)){
var c__4461__auto___12257 = cljs.core.chunk_first.call(null,seq__12153_12256__$1);
var G__12258 = cljs.core.chunk_rest.call(null,seq__12153_12256__$1);
var G__12259 = c__4461__auto___12257;
var G__12260 = cljs.core.count.call(null,c__4461__auto___12257);
var G__12261 = (0);
seq__12153_12215 = G__12258;
chunk__12154_12216 = G__12259;
count__12155_12217 = G__12260;
i__12156_12218 = G__12261;
continue;
} else {
var vec__12168_12262 = cljs.core.first.call(null,seq__12153_12256__$1);
var column_12263 = cljs.core.nth.call(null,vec__12168_12262,(0),null);
var column_info_12264 = cljs.core.nth.call(null,vec__12168_12262,(1),null);
var seq__12171_12265 = cljs.core.seq.call(null,column_info_12264);
var chunk__12172_12266 = null;
var count__12173_12267 = (0);
var i__12174_12268 = (0);
while(true){
if((i__12174_12268 < count__12173_12267)){
var map__12175_12269 = cljs.core._nth.call(null,chunk__12172_12266,i__12174_12268);
var map__12175_12270__$1 = (((((!((map__12175_12269 == null))))?(((((map__12175_12269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12175_12269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12175_12269):map__12175_12269);
var gline_12271 = cljs.core.get.call(null,map__12175_12270__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12272 = cljs.core.get.call(null,map__12175_12270__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12273 = cljs.core.get.call(null,map__12175_12270__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12271], null),cljs.core.fnil.call(null,((function (seq__12171_12265,chunk__12172_12266,count__12173_12267,i__12174_12268,seq__12153_12215,chunk__12154_12216,count__12155_12217,i__12156_12218,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12175_12269,map__12175_12270__$1,gline_12271,gcol_12272,name_12273,vec__12168_12262,column_12263,column_info_12264,seq__12153_12256__$1,temp__5720__auto___12255,vec__12150_12212,line_12213,columns_12214,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12272], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12213,new cljs.core.Keyword(null,"col","col",-1959363084),column_12263,new cljs.core.Keyword(null,"name","name",1843675177),name_12273], null));
});})(seq__12171_12265,chunk__12172_12266,count__12173_12267,i__12174_12268,seq__12153_12215,chunk__12154_12216,count__12155_12217,i__12156_12218,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12175_12269,map__12175_12270__$1,gline_12271,gcol_12272,name_12273,vec__12168_12262,column_12263,column_info_12264,seq__12153_12256__$1,temp__5720__auto___12255,vec__12150_12212,line_12213,columns_12214,inverted))
,cljs.core.sorted_map.call(null)));


var G__12274 = seq__12171_12265;
var G__12275 = chunk__12172_12266;
var G__12276 = count__12173_12267;
var G__12277 = (i__12174_12268 + (1));
seq__12171_12265 = G__12274;
chunk__12172_12266 = G__12275;
count__12173_12267 = G__12276;
i__12174_12268 = G__12277;
continue;
} else {
var temp__5720__auto___12278__$1 = cljs.core.seq.call(null,seq__12171_12265);
if(temp__5720__auto___12278__$1){
var seq__12171_12279__$1 = temp__5720__auto___12278__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12171_12279__$1)){
var c__4461__auto___12280 = cljs.core.chunk_first.call(null,seq__12171_12279__$1);
var G__12281 = cljs.core.chunk_rest.call(null,seq__12171_12279__$1);
var G__12282 = c__4461__auto___12280;
var G__12283 = cljs.core.count.call(null,c__4461__auto___12280);
var G__12284 = (0);
seq__12171_12265 = G__12281;
chunk__12172_12266 = G__12282;
count__12173_12267 = G__12283;
i__12174_12268 = G__12284;
continue;
} else {
var map__12177_12285 = cljs.core.first.call(null,seq__12171_12279__$1);
var map__12177_12286__$1 = (((((!((map__12177_12285 == null))))?(((((map__12177_12285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12177_12285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12177_12285):map__12177_12285);
var gline_12287 = cljs.core.get.call(null,map__12177_12286__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12288 = cljs.core.get.call(null,map__12177_12286__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12289 = cljs.core.get.call(null,map__12177_12286__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12287], null),cljs.core.fnil.call(null,((function (seq__12171_12265,chunk__12172_12266,count__12173_12267,i__12174_12268,seq__12153_12215,chunk__12154_12216,count__12155_12217,i__12156_12218,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12177_12285,map__12177_12286__$1,gline_12287,gcol_12288,name_12289,seq__12171_12279__$1,temp__5720__auto___12278__$1,vec__12168_12262,column_12263,column_info_12264,seq__12153_12256__$1,temp__5720__auto___12255,vec__12150_12212,line_12213,columns_12214,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12288], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12213,new cljs.core.Keyword(null,"col","col",-1959363084),column_12263,new cljs.core.Keyword(null,"name","name",1843675177),name_12289], null));
});})(seq__12171_12265,chunk__12172_12266,count__12173_12267,i__12174_12268,seq__12153_12215,chunk__12154_12216,count__12155_12217,i__12156_12218,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12177_12285,map__12177_12286__$1,gline_12287,gcol_12288,name_12289,seq__12171_12279__$1,temp__5720__auto___12278__$1,vec__12168_12262,column_12263,column_info_12264,seq__12153_12256__$1,temp__5720__auto___12255,vec__12150_12212,line_12213,columns_12214,inverted))
,cljs.core.sorted_map.call(null)));


var G__12290 = cljs.core.next.call(null,seq__12171_12279__$1);
var G__12291 = null;
var G__12292 = (0);
var G__12293 = (0);
seq__12171_12265 = G__12290;
chunk__12172_12266 = G__12291;
count__12173_12267 = G__12292;
i__12174_12268 = G__12293;
continue;
}
} else {
}
}
break;
}


var G__12294 = cljs.core.next.call(null,seq__12153_12256__$1);
var G__12295 = null;
var G__12296 = (0);
var G__12297 = (0);
seq__12153_12215 = G__12294;
chunk__12154_12216 = G__12295;
count__12155_12217 = G__12296;
i__12156_12218 = G__12297;
continue;
}
} else {
}
}
break;
}


var G__12298 = seq__12146_12208;
var G__12299 = chunk__12147_12209;
var G__12300 = count__12148_12210;
var G__12301 = (i__12149_12211 + (1));
seq__12146_12208 = G__12298;
chunk__12147_12209 = G__12299;
count__12148_12210 = G__12300;
i__12149_12211 = G__12301;
continue;
} else {
var temp__5720__auto___12302 = cljs.core.seq.call(null,seq__12146_12208);
if(temp__5720__auto___12302){
var seq__12146_12303__$1 = temp__5720__auto___12302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12146_12303__$1)){
var c__4461__auto___12304 = cljs.core.chunk_first.call(null,seq__12146_12303__$1);
var G__12305 = cljs.core.chunk_rest.call(null,seq__12146_12303__$1);
var G__12306 = c__4461__auto___12304;
var G__12307 = cljs.core.count.call(null,c__4461__auto___12304);
var G__12308 = (0);
seq__12146_12208 = G__12305;
chunk__12147_12209 = G__12306;
count__12148_12210 = G__12307;
i__12149_12211 = G__12308;
continue;
} else {
var vec__12179_12309 = cljs.core.first.call(null,seq__12146_12303__$1);
var line_12310 = cljs.core.nth.call(null,vec__12179_12309,(0),null);
var columns_12311 = cljs.core.nth.call(null,vec__12179_12309,(1),null);
var seq__12182_12312 = cljs.core.seq.call(null,columns_12311);
var chunk__12183_12313 = null;
var count__12184_12314 = (0);
var i__12185_12315 = (0);
while(true){
if((i__12185_12315 < count__12184_12314)){
var vec__12186_12316 = cljs.core._nth.call(null,chunk__12183_12313,i__12185_12315);
var column_12317 = cljs.core.nth.call(null,vec__12186_12316,(0),null);
var column_info_12318 = cljs.core.nth.call(null,vec__12186_12316,(1),null);
var seq__12189_12319 = cljs.core.seq.call(null,column_info_12318);
var chunk__12190_12320 = null;
var count__12191_12321 = (0);
var i__12192_12322 = (0);
while(true){
if((i__12192_12322 < count__12191_12321)){
var map__12193_12323 = cljs.core._nth.call(null,chunk__12190_12320,i__12192_12322);
var map__12193_12324__$1 = (((((!((map__12193_12323 == null))))?(((((map__12193_12323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12193_12323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12193_12323):map__12193_12323);
var gline_12325 = cljs.core.get.call(null,map__12193_12324__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12326 = cljs.core.get.call(null,map__12193_12324__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12327 = cljs.core.get.call(null,map__12193_12324__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12325], null),cljs.core.fnil.call(null,((function (seq__12189_12319,chunk__12190_12320,count__12191_12321,i__12192_12322,seq__12182_12312,chunk__12183_12313,count__12184_12314,i__12185_12315,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12193_12323,map__12193_12324__$1,gline_12325,gcol_12326,name_12327,vec__12186_12316,column_12317,column_info_12318,vec__12179_12309,line_12310,columns_12311,seq__12146_12303__$1,temp__5720__auto___12302,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12326], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12310,new cljs.core.Keyword(null,"col","col",-1959363084),column_12317,new cljs.core.Keyword(null,"name","name",1843675177),name_12327], null));
});})(seq__12189_12319,chunk__12190_12320,count__12191_12321,i__12192_12322,seq__12182_12312,chunk__12183_12313,count__12184_12314,i__12185_12315,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12193_12323,map__12193_12324__$1,gline_12325,gcol_12326,name_12327,vec__12186_12316,column_12317,column_info_12318,vec__12179_12309,line_12310,columns_12311,seq__12146_12303__$1,temp__5720__auto___12302,inverted))
,cljs.core.sorted_map.call(null)));


var G__12328 = seq__12189_12319;
var G__12329 = chunk__12190_12320;
var G__12330 = count__12191_12321;
var G__12331 = (i__12192_12322 + (1));
seq__12189_12319 = G__12328;
chunk__12190_12320 = G__12329;
count__12191_12321 = G__12330;
i__12192_12322 = G__12331;
continue;
} else {
var temp__5720__auto___12332__$1 = cljs.core.seq.call(null,seq__12189_12319);
if(temp__5720__auto___12332__$1){
var seq__12189_12333__$1 = temp__5720__auto___12332__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12189_12333__$1)){
var c__4461__auto___12334 = cljs.core.chunk_first.call(null,seq__12189_12333__$1);
var G__12335 = cljs.core.chunk_rest.call(null,seq__12189_12333__$1);
var G__12336 = c__4461__auto___12334;
var G__12337 = cljs.core.count.call(null,c__4461__auto___12334);
var G__12338 = (0);
seq__12189_12319 = G__12335;
chunk__12190_12320 = G__12336;
count__12191_12321 = G__12337;
i__12192_12322 = G__12338;
continue;
} else {
var map__12195_12339 = cljs.core.first.call(null,seq__12189_12333__$1);
var map__12195_12340__$1 = (((((!((map__12195_12339 == null))))?(((((map__12195_12339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12195_12339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12195_12339):map__12195_12339);
var gline_12341 = cljs.core.get.call(null,map__12195_12340__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12342 = cljs.core.get.call(null,map__12195_12340__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12343 = cljs.core.get.call(null,map__12195_12340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12341], null),cljs.core.fnil.call(null,((function (seq__12189_12319,chunk__12190_12320,count__12191_12321,i__12192_12322,seq__12182_12312,chunk__12183_12313,count__12184_12314,i__12185_12315,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12195_12339,map__12195_12340__$1,gline_12341,gcol_12342,name_12343,seq__12189_12333__$1,temp__5720__auto___12332__$1,vec__12186_12316,column_12317,column_info_12318,vec__12179_12309,line_12310,columns_12311,seq__12146_12303__$1,temp__5720__auto___12302,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12342], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12310,new cljs.core.Keyword(null,"col","col",-1959363084),column_12317,new cljs.core.Keyword(null,"name","name",1843675177),name_12343], null));
});})(seq__12189_12319,chunk__12190_12320,count__12191_12321,i__12192_12322,seq__12182_12312,chunk__12183_12313,count__12184_12314,i__12185_12315,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12195_12339,map__12195_12340__$1,gline_12341,gcol_12342,name_12343,seq__12189_12333__$1,temp__5720__auto___12332__$1,vec__12186_12316,column_12317,column_info_12318,vec__12179_12309,line_12310,columns_12311,seq__12146_12303__$1,temp__5720__auto___12302,inverted))
,cljs.core.sorted_map.call(null)));


var G__12344 = cljs.core.next.call(null,seq__12189_12333__$1);
var G__12345 = null;
var G__12346 = (0);
var G__12347 = (0);
seq__12189_12319 = G__12344;
chunk__12190_12320 = G__12345;
count__12191_12321 = G__12346;
i__12192_12322 = G__12347;
continue;
}
} else {
}
}
break;
}


var G__12348 = seq__12182_12312;
var G__12349 = chunk__12183_12313;
var G__12350 = count__12184_12314;
var G__12351 = (i__12185_12315 + (1));
seq__12182_12312 = G__12348;
chunk__12183_12313 = G__12349;
count__12184_12314 = G__12350;
i__12185_12315 = G__12351;
continue;
} else {
var temp__5720__auto___12352__$1 = cljs.core.seq.call(null,seq__12182_12312);
if(temp__5720__auto___12352__$1){
var seq__12182_12353__$1 = temp__5720__auto___12352__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12182_12353__$1)){
var c__4461__auto___12354 = cljs.core.chunk_first.call(null,seq__12182_12353__$1);
var G__12355 = cljs.core.chunk_rest.call(null,seq__12182_12353__$1);
var G__12356 = c__4461__auto___12354;
var G__12357 = cljs.core.count.call(null,c__4461__auto___12354);
var G__12358 = (0);
seq__12182_12312 = G__12355;
chunk__12183_12313 = G__12356;
count__12184_12314 = G__12357;
i__12185_12315 = G__12358;
continue;
} else {
var vec__12197_12359 = cljs.core.first.call(null,seq__12182_12353__$1);
var column_12360 = cljs.core.nth.call(null,vec__12197_12359,(0),null);
var column_info_12361 = cljs.core.nth.call(null,vec__12197_12359,(1),null);
var seq__12200_12362 = cljs.core.seq.call(null,column_info_12361);
var chunk__12201_12363 = null;
var count__12202_12364 = (0);
var i__12203_12365 = (0);
while(true){
if((i__12203_12365 < count__12202_12364)){
var map__12204_12366 = cljs.core._nth.call(null,chunk__12201_12363,i__12203_12365);
var map__12204_12367__$1 = (((((!((map__12204_12366 == null))))?(((((map__12204_12366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12204_12366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12204_12366):map__12204_12366);
var gline_12368 = cljs.core.get.call(null,map__12204_12367__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12369 = cljs.core.get.call(null,map__12204_12367__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12370 = cljs.core.get.call(null,map__12204_12367__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12368], null),cljs.core.fnil.call(null,((function (seq__12200_12362,chunk__12201_12363,count__12202_12364,i__12203_12365,seq__12182_12312,chunk__12183_12313,count__12184_12314,i__12185_12315,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12204_12366,map__12204_12367__$1,gline_12368,gcol_12369,name_12370,vec__12197_12359,column_12360,column_info_12361,seq__12182_12353__$1,temp__5720__auto___12352__$1,vec__12179_12309,line_12310,columns_12311,seq__12146_12303__$1,temp__5720__auto___12302,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12369], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12310,new cljs.core.Keyword(null,"col","col",-1959363084),column_12360,new cljs.core.Keyword(null,"name","name",1843675177),name_12370], null));
});})(seq__12200_12362,chunk__12201_12363,count__12202_12364,i__12203_12365,seq__12182_12312,chunk__12183_12313,count__12184_12314,i__12185_12315,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12204_12366,map__12204_12367__$1,gline_12368,gcol_12369,name_12370,vec__12197_12359,column_12360,column_info_12361,seq__12182_12353__$1,temp__5720__auto___12352__$1,vec__12179_12309,line_12310,columns_12311,seq__12146_12303__$1,temp__5720__auto___12302,inverted))
,cljs.core.sorted_map.call(null)));


var G__12371 = seq__12200_12362;
var G__12372 = chunk__12201_12363;
var G__12373 = count__12202_12364;
var G__12374 = (i__12203_12365 + (1));
seq__12200_12362 = G__12371;
chunk__12201_12363 = G__12372;
count__12202_12364 = G__12373;
i__12203_12365 = G__12374;
continue;
} else {
var temp__5720__auto___12375__$2 = cljs.core.seq.call(null,seq__12200_12362);
if(temp__5720__auto___12375__$2){
var seq__12200_12376__$1 = temp__5720__auto___12375__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12200_12376__$1)){
var c__4461__auto___12377 = cljs.core.chunk_first.call(null,seq__12200_12376__$1);
var G__12378 = cljs.core.chunk_rest.call(null,seq__12200_12376__$1);
var G__12379 = c__4461__auto___12377;
var G__12380 = cljs.core.count.call(null,c__4461__auto___12377);
var G__12381 = (0);
seq__12200_12362 = G__12378;
chunk__12201_12363 = G__12379;
count__12202_12364 = G__12380;
i__12203_12365 = G__12381;
continue;
} else {
var map__12206_12382 = cljs.core.first.call(null,seq__12200_12376__$1);
var map__12206_12383__$1 = (((((!((map__12206_12382 == null))))?(((((map__12206_12382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12206_12382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12206_12382):map__12206_12382);
var gline_12384 = cljs.core.get.call(null,map__12206_12383__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12385 = cljs.core.get.call(null,map__12206_12383__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12386 = cljs.core.get.call(null,map__12206_12383__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12384], null),cljs.core.fnil.call(null,((function (seq__12200_12362,chunk__12201_12363,count__12202_12364,i__12203_12365,seq__12182_12312,chunk__12183_12313,count__12184_12314,i__12185_12315,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12206_12382,map__12206_12383__$1,gline_12384,gcol_12385,name_12386,seq__12200_12376__$1,temp__5720__auto___12375__$2,vec__12197_12359,column_12360,column_info_12361,seq__12182_12353__$1,temp__5720__auto___12352__$1,vec__12179_12309,line_12310,columns_12311,seq__12146_12303__$1,temp__5720__auto___12302,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12385], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12310,new cljs.core.Keyword(null,"col","col",-1959363084),column_12360,new cljs.core.Keyword(null,"name","name",1843675177),name_12386], null));
});})(seq__12200_12362,chunk__12201_12363,count__12202_12364,i__12203_12365,seq__12182_12312,chunk__12183_12313,count__12184_12314,i__12185_12315,seq__12146_12208,chunk__12147_12209,count__12148_12210,i__12149_12211,map__12206_12382,map__12206_12383__$1,gline_12384,gcol_12385,name_12386,seq__12200_12376__$1,temp__5720__auto___12375__$2,vec__12197_12359,column_12360,column_info_12361,seq__12182_12353__$1,temp__5720__auto___12352__$1,vec__12179_12309,line_12310,columns_12311,seq__12146_12303__$1,temp__5720__auto___12302,inverted))
,cljs.core.sorted_map.call(null)));


var G__12387 = cljs.core.next.call(null,seq__12200_12376__$1);
var G__12388 = null;
var G__12389 = (0);
var G__12390 = (0);
seq__12200_12362 = G__12387;
chunk__12201_12363 = G__12388;
count__12202_12364 = G__12389;
i__12203_12365 = G__12390;
continue;
}
} else {
}
}
break;
}


var G__12391 = cljs.core.next.call(null,seq__12182_12353__$1);
var G__12392 = null;
var G__12393 = (0);
var G__12394 = (0);
seq__12182_12312 = G__12391;
chunk__12183_12313 = G__12392;
count__12184_12314 = G__12393;
i__12185_12315 = G__12394;
continue;
}
} else {
}
}
break;
}


var G__12395 = cljs.core.next.call(null,seq__12146_12303__$1);
var G__12396 = null;
var G__12397 = (0);
var G__12398 = (0);
seq__12146_12208 = G__12395;
chunk__12147_12209 = G__12396;
count__12148_12210 = G__12397;
i__12149_12211 = G__12398;
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
