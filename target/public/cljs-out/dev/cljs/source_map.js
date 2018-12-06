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
return cljs.core.reduce.call(null,(function (m,p__117261){
var vec__117262 = p__117261;
var i = cljs.core.nth.call(null,vec__117262,(0),null);
var v = cljs.core.nth.call(null,vec__117262,(1),null);
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
var vec__117265 = seg;
var gcol = cljs.core.nth.call(null,vec__117265,(0),null);
var source = cljs.core.nth.call(null,vec__117265,(1),null);
var line = cljs.core.nth.call(null,vec__117265,(2),null);
var col = cljs.core.nth.call(null,vec__117265,(3),null);
var name = cljs.core.nth.call(null,vec__117265,(4),null);
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
var vec__117268 = seg;
var gcol = cljs.core.nth.call(null,vec__117268,(0),null);
var source = cljs.core.nth.call(null,vec__117268,(1),null);
var line = cljs.core.nth.call(null,vec__117268,(2),null);
var col = cljs.core.nth.call(null,vec__117268,(3),null);
var name = cljs.core.nth.call(null,vec__117268,(4),null);
var vec__117271 = relseg;
var rgcol = cljs.core.nth.call(null,vec__117271,(0),null);
var rsource = cljs.core.nth.call(null,vec__117271,(1),null);
var rline = cljs.core.nth.call(null,vec__117271,(2),null);
var rcol = cljs.core.nth.call(null,vec__117271,(3),null);
var rname = cljs.core.nth.call(null,vec__117271,(4),null);
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
var map__117274 = segmap;
var map__117274__$1 = ((((!((map__117274 == null)))?(((((map__117274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117274):map__117274);
var gcol = cljs.core.get.call(null,map__117274__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__117274__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__117274__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__117274__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__117274__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__117274,map__117274__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__117274,map__117274__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__117274,map__117274__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__117274,map__117274__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__117274,map__117274__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__117274,map__117274__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__117277 = arguments.length;
switch (G__117277) {
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
var vec__117278 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__117282 = cljs.core.next.call(null,segs__$1);
var G__117283 = nrelseg;
var G__117284 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__117282;
relseg__$1 = G__117283;
result__$1 = G__117284;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__117278,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__117278,(1),null);
var G__117285 = (gline + (1));
var G__117286 = cljs.core.next.call(null,lines__$1);
var G__117287 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__117288 = result__$1;
gline = G__117285;
lines__$1 = G__117286;
relseg = G__117287;
result = G__117288;
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
var map__117290 = segmap;
var map__117290__$1 = ((((!((map__117290 == null)))?(((((map__117290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117290):map__117290);
var gcol = cljs.core.get.call(null,map__117290__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__117290__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__117290__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__117290__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__117290__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__117290,map__117290__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__117290,map__117290__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__117289_SHARP_){
return cljs.core.conj.call(null,p1__117289_SHARP_,d__$1);
});})(map__117290,map__117290__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__117290,map__117290__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__117293 = arguments.length;
switch (G__117293) {
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
var vec__117294 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__117298 = cljs.core.next.call(null,segs__$1);
var G__117299 = nrelseg;
var G__117300 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__117298;
relseg__$1 = G__117299;
result__$1 = G__117300;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__117294,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__117294,(1),null);
var G__117301 = (gline + (1));
var G__117302 = cljs.core.next.call(null,lines__$1);
var G__117303 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__117304 = result__$1;
gline = G__117301;
lines__$1 = G__117302;
relseg = G__117303;
result = G__117304;
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
return (function (p__117305){
var vec__117306 = p__117305;
var _ = cljs.core.nth.call(null,vec__117306,(0),null);
var source = cljs.core.nth.call(null,vec__117306,(1),null);
var line = cljs.core.nth.call(null,vec__117306,(2),null);
var col = cljs.core.nth.call(null,vec__117306,(3),null);
var name = cljs.core.nth.call(null,vec__117306,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__117309){
var vec__117310 = p__117309;
var gcol = cljs.core.nth.call(null,vec__117310,(0),null);
var sidx = cljs.core.nth.call(null,vec__117310,(1),null);
var line = cljs.core.nth.call(null,vec__117310,(2),null);
var col = cljs.core.nth.call(null,vec__117310,(3),null);
var name = cljs.core.nth.call(null,vec__117310,(4),null);
var seg = vec__117310;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__117310,gcol,sidx,line,col,name,seg,relseg){
return (function (p__117313){
var vec__117314 = p__117313;
var _ = cljs.core.nth.call(null,vec__117314,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__117314,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__117314,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__117314,(3),null);
var lname = cljs.core.nth.call(null,vec__117314,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__117310,gcol,sidx,line,col,name,seg,relseg))
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
var seq__117320 = cljs.core.seq.call(null,infos);
var chunk__117321 = null;
var count__117322 = (0);
var i__117323 = (0);
while(true){
if((i__117323 < count__117322)){
var info = cljs.core._nth.call(null,chunk__117321,i__117323);
var segv_117402 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_117403 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_117404 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_117403 > (lc_117404 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__117320,chunk__117321,count__117322,i__117323,segv_117402,gline_117403,lc_117404,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_117403 - (lc_117404 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_117402], null));
});})(seq__117320,chunk__117321,count__117322,i__117323,segv_117402,gline_117403,lc_117404,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__117320,chunk__117321,count__117322,i__117323,segv_117402,gline_117403,lc_117404,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117403], null),cljs.core.conj,segv_117402);
});})(seq__117320,chunk__117321,count__117322,i__117323,segv_117402,gline_117403,lc_117404,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__117405 = seq__117320;
var G__117406 = chunk__117321;
var G__117407 = count__117322;
var G__117408 = (i__117323 + (1));
seq__117320 = G__117405;
chunk__117321 = G__117406;
count__117322 = G__117407;
i__117323 = G__117408;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__117320);
if(temp__5457__auto__){
var seq__117320__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117320__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__117320__$1);
var G__117409 = cljs.core.chunk_rest.call(null,seq__117320__$1);
var G__117410 = c__4319__auto__;
var G__117411 = cljs.core.count.call(null,c__4319__auto__);
var G__117412 = (0);
seq__117320 = G__117409;
chunk__117321 = G__117410;
count__117322 = G__117411;
i__117323 = G__117412;
continue;
} else {
var info = cljs.core.first.call(null,seq__117320__$1);
var segv_117413 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_117414 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_117415 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_117414 > (lc_117415 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__117320,chunk__117321,count__117322,i__117323,segv_117413,gline_117414,lc_117415,info,seq__117320__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_117414 - (lc_117415 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_117413], null));
});})(seq__117320,chunk__117321,count__117322,i__117323,segv_117413,gline_117414,lc_117415,info,seq__117320__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__117320,chunk__117321,count__117322,i__117323,segv_117413,gline_117414,lc_117415,info,seq__117320__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117414], null),cljs.core.conj,segv_117413);
});})(seq__117320,chunk__117321,count__117322,i__117323,segv_117413,gline_117414,lc_117415,info,seq__117320__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__117416 = cljs.core.next.call(null,seq__117320__$1);
var G__117417 = null;
var G__117418 = (0);
var G__117419 = (0);
seq__117320 = G__117416;
chunk__117321 = G__117417;
count__117322 = G__117418;
i__117323 = G__117419;
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
var seq__117324_117420 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__117325_117421 = null;
var count__117326_117422 = (0);
var i__117327_117423 = (0);
while(true){
if((i__117327_117423 < count__117326_117422)){
var vec__117328_117424 = cljs.core._nth.call(null,chunk__117325_117421,i__117327_117423);
var source_idx_117425 = cljs.core.nth.call(null,vec__117328_117424,(0),null);
var vec__117331_117426 = cljs.core.nth.call(null,vec__117328_117424,(1),null);
var __117427 = cljs.core.nth.call(null,vec__117331_117426,(0),null);
var lines_117428__$1 = cljs.core.nth.call(null,vec__117331_117426,(1),null);
var seq__117334_117429 = cljs.core.seq.call(null,lines_117428__$1);
var chunk__117335_117430 = null;
var count__117336_117431 = (0);
var i__117337_117432 = (0);
while(true){
if((i__117337_117432 < count__117336_117431)){
var vec__117338_117433 = cljs.core._nth.call(null,chunk__117335_117430,i__117337_117432);
var line_117434 = cljs.core.nth.call(null,vec__117338_117433,(0),null);
var cols_117435 = cljs.core.nth.call(null,vec__117338_117433,(1),null);
var seq__117341_117436 = cljs.core.seq.call(null,cols_117435);
var chunk__117342_117437 = null;
var count__117343_117438 = (0);
var i__117344_117439 = (0);
while(true){
if((i__117344_117439 < count__117343_117438)){
var vec__117345_117440 = cljs.core._nth.call(null,chunk__117342_117437,i__117344_117439);
var col_117441 = cljs.core.nth.call(null,vec__117345_117440,(0),null);
var infos_117442 = cljs.core.nth.call(null,vec__117345_117440,(1),null);
encode_cols.call(null,infos_117442,source_idx_117425,line_117434,col_117441);


var G__117443 = seq__117341_117436;
var G__117444 = chunk__117342_117437;
var G__117445 = count__117343_117438;
var G__117446 = (i__117344_117439 + (1));
seq__117341_117436 = G__117443;
chunk__117342_117437 = G__117444;
count__117343_117438 = G__117445;
i__117344_117439 = G__117446;
continue;
} else {
var temp__5457__auto___117447 = cljs.core.seq.call(null,seq__117341_117436);
if(temp__5457__auto___117447){
var seq__117341_117448__$1 = temp__5457__auto___117447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117341_117448__$1)){
var c__4319__auto___117449 = cljs.core.chunk_first.call(null,seq__117341_117448__$1);
var G__117450 = cljs.core.chunk_rest.call(null,seq__117341_117448__$1);
var G__117451 = c__4319__auto___117449;
var G__117452 = cljs.core.count.call(null,c__4319__auto___117449);
var G__117453 = (0);
seq__117341_117436 = G__117450;
chunk__117342_117437 = G__117451;
count__117343_117438 = G__117452;
i__117344_117439 = G__117453;
continue;
} else {
var vec__117348_117454 = cljs.core.first.call(null,seq__117341_117448__$1);
var col_117455 = cljs.core.nth.call(null,vec__117348_117454,(0),null);
var infos_117456 = cljs.core.nth.call(null,vec__117348_117454,(1),null);
encode_cols.call(null,infos_117456,source_idx_117425,line_117434,col_117455);


var G__117457 = cljs.core.next.call(null,seq__117341_117448__$1);
var G__117458 = null;
var G__117459 = (0);
var G__117460 = (0);
seq__117341_117436 = G__117457;
chunk__117342_117437 = G__117458;
count__117343_117438 = G__117459;
i__117344_117439 = G__117460;
continue;
}
} else {
}
}
break;
}


var G__117461 = seq__117334_117429;
var G__117462 = chunk__117335_117430;
var G__117463 = count__117336_117431;
var G__117464 = (i__117337_117432 + (1));
seq__117334_117429 = G__117461;
chunk__117335_117430 = G__117462;
count__117336_117431 = G__117463;
i__117337_117432 = G__117464;
continue;
} else {
var temp__5457__auto___117465 = cljs.core.seq.call(null,seq__117334_117429);
if(temp__5457__auto___117465){
var seq__117334_117466__$1 = temp__5457__auto___117465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117334_117466__$1)){
var c__4319__auto___117467 = cljs.core.chunk_first.call(null,seq__117334_117466__$1);
var G__117468 = cljs.core.chunk_rest.call(null,seq__117334_117466__$1);
var G__117469 = c__4319__auto___117467;
var G__117470 = cljs.core.count.call(null,c__4319__auto___117467);
var G__117471 = (0);
seq__117334_117429 = G__117468;
chunk__117335_117430 = G__117469;
count__117336_117431 = G__117470;
i__117337_117432 = G__117471;
continue;
} else {
var vec__117351_117472 = cljs.core.first.call(null,seq__117334_117466__$1);
var line_117473 = cljs.core.nth.call(null,vec__117351_117472,(0),null);
var cols_117474 = cljs.core.nth.call(null,vec__117351_117472,(1),null);
var seq__117354_117475 = cljs.core.seq.call(null,cols_117474);
var chunk__117355_117476 = null;
var count__117356_117477 = (0);
var i__117357_117478 = (0);
while(true){
if((i__117357_117478 < count__117356_117477)){
var vec__117358_117479 = cljs.core._nth.call(null,chunk__117355_117476,i__117357_117478);
var col_117480 = cljs.core.nth.call(null,vec__117358_117479,(0),null);
var infos_117481 = cljs.core.nth.call(null,vec__117358_117479,(1),null);
encode_cols.call(null,infos_117481,source_idx_117425,line_117473,col_117480);


var G__117482 = seq__117354_117475;
var G__117483 = chunk__117355_117476;
var G__117484 = count__117356_117477;
var G__117485 = (i__117357_117478 + (1));
seq__117354_117475 = G__117482;
chunk__117355_117476 = G__117483;
count__117356_117477 = G__117484;
i__117357_117478 = G__117485;
continue;
} else {
var temp__5457__auto___117486__$1 = cljs.core.seq.call(null,seq__117354_117475);
if(temp__5457__auto___117486__$1){
var seq__117354_117487__$1 = temp__5457__auto___117486__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117354_117487__$1)){
var c__4319__auto___117488 = cljs.core.chunk_first.call(null,seq__117354_117487__$1);
var G__117489 = cljs.core.chunk_rest.call(null,seq__117354_117487__$1);
var G__117490 = c__4319__auto___117488;
var G__117491 = cljs.core.count.call(null,c__4319__auto___117488);
var G__117492 = (0);
seq__117354_117475 = G__117489;
chunk__117355_117476 = G__117490;
count__117356_117477 = G__117491;
i__117357_117478 = G__117492;
continue;
} else {
var vec__117361_117493 = cljs.core.first.call(null,seq__117354_117487__$1);
var col_117494 = cljs.core.nth.call(null,vec__117361_117493,(0),null);
var infos_117495 = cljs.core.nth.call(null,vec__117361_117493,(1),null);
encode_cols.call(null,infos_117495,source_idx_117425,line_117473,col_117494);


var G__117496 = cljs.core.next.call(null,seq__117354_117487__$1);
var G__117497 = null;
var G__117498 = (0);
var G__117499 = (0);
seq__117354_117475 = G__117496;
chunk__117355_117476 = G__117497;
count__117356_117477 = G__117498;
i__117357_117478 = G__117499;
continue;
}
} else {
}
}
break;
}


var G__117500 = cljs.core.next.call(null,seq__117334_117466__$1);
var G__117501 = null;
var G__117502 = (0);
var G__117503 = (0);
seq__117334_117429 = G__117500;
chunk__117335_117430 = G__117501;
count__117336_117431 = G__117502;
i__117337_117432 = G__117503;
continue;
}
} else {
}
}
break;
}


var G__117504 = seq__117324_117420;
var G__117505 = chunk__117325_117421;
var G__117506 = count__117326_117422;
var G__117507 = (i__117327_117423 + (1));
seq__117324_117420 = G__117504;
chunk__117325_117421 = G__117505;
count__117326_117422 = G__117506;
i__117327_117423 = G__117507;
continue;
} else {
var temp__5457__auto___117508 = cljs.core.seq.call(null,seq__117324_117420);
if(temp__5457__auto___117508){
var seq__117324_117509__$1 = temp__5457__auto___117508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117324_117509__$1)){
var c__4319__auto___117510 = cljs.core.chunk_first.call(null,seq__117324_117509__$1);
var G__117511 = cljs.core.chunk_rest.call(null,seq__117324_117509__$1);
var G__117512 = c__4319__auto___117510;
var G__117513 = cljs.core.count.call(null,c__4319__auto___117510);
var G__117514 = (0);
seq__117324_117420 = G__117511;
chunk__117325_117421 = G__117512;
count__117326_117422 = G__117513;
i__117327_117423 = G__117514;
continue;
} else {
var vec__117364_117515 = cljs.core.first.call(null,seq__117324_117509__$1);
var source_idx_117516 = cljs.core.nth.call(null,vec__117364_117515,(0),null);
var vec__117367_117517 = cljs.core.nth.call(null,vec__117364_117515,(1),null);
var __117518 = cljs.core.nth.call(null,vec__117367_117517,(0),null);
var lines_117519__$1 = cljs.core.nth.call(null,vec__117367_117517,(1),null);
var seq__117370_117520 = cljs.core.seq.call(null,lines_117519__$1);
var chunk__117371_117521 = null;
var count__117372_117522 = (0);
var i__117373_117523 = (0);
while(true){
if((i__117373_117523 < count__117372_117522)){
var vec__117374_117524 = cljs.core._nth.call(null,chunk__117371_117521,i__117373_117523);
var line_117525 = cljs.core.nth.call(null,vec__117374_117524,(0),null);
var cols_117526 = cljs.core.nth.call(null,vec__117374_117524,(1),null);
var seq__117377_117527 = cljs.core.seq.call(null,cols_117526);
var chunk__117378_117528 = null;
var count__117379_117529 = (0);
var i__117380_117530 = (0);
while(true){
if((i__117380_117530 < count__117379_117529)){
var vec__117381_117531 = cljs.core._nth.call(null,chunk__117378_117528,i__117380_117530);
var col_117532 = cljs.core.nth.call(null,vec__117381_117531,(0),null);
var infos_117533 = cljs.core.nth.call(null,vec__117381_117531,(1),null);
encode_cols.call(null,infos_117533,source_idx_117516,line_117525,col_117532);


var G__117534 = seq__117377_117527;
var G__117535 = chunk__117378_117528;
var G__117536 = count__117379_117529;
var G__117537 = (i__117380_117530 + (1));
seq__117377_117527 = G__117534;
chunk__117378_117528 = G__117535;
count__117379_117529 = G__117536;
i__117380_117530 = G__117537;
continue;
} else {
var temp__5457__auto___117538__$1 = cljs.core.seq.call(null,seq__117377_117527);
if(temp__5457__auto___117538__$1){
var seq__117377_117539__$1 = temp__5457__auto___117538__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117377_117539__$1)){
var c__4319__auto___117540 = cljs.core.chunk_first.call(null,seq__117377_117539__$1);
var G__117541 = cljs.core.chunk_rest.call(null,seq__117377_117539__$1);
var G__117542 = c__4319__auto___117540;
var G__117543 = cljs.core.count.call(null,c__4319__auto___117540);
var G__117544 = (0);
seq__117377_117527 = G__117541;
chunk__117378_117528 = G__117542;
count__117379_117529 = G__117543;
i__117380_117530 = G__117544;
continue;
} else {
var vec__117384_117545 = cljs.core.first.call(null,seq__117377_117539__$1);
var col_117546 = cljs.core.nth.call(null,vec__117384_117545,(0),null);
var infos_117547 = cljs.core.nth.call(null,vec__117384_117545,(1),null);
encode_cols.call(null,infos_117547,source_idx_117516,line_117525,col_117546);


var G__117548 = cljs.core.next.call(null,seq__117377_117539__$1);
var G__117549 = null;
var G__117550 = (0);
var G__117551 = (0);
seq__117377_117527 = G__117548;
chunk__117378_117528 = G__117549;
count__117379_117529 = G__117550;
i__117380_117530 = G__117551;
continue;
}
} else {
}
}
break;
}


var G__117552 = seq__117370_117520;
var G__117553 = chunk__117371_117521;
var G__117554 = count__117372_117522;
var G__117555 = (i__117373_117523 + (1));
seq__117370_117520 = G__117552;
chunk__117371_117521 = G__117553;
count__117372_117522 = G__117554;
i__117373_117523 = G__117555;
continue;
} else {
var temp__5457__auto___117556__$1 = cljs.core.seq.call(null,seq__117370_117520);
if(temp__5457__auto___117556__$1){
var seq__117370_117557__$1 = temp__5457__auto___117556__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117370_117557__$1)){
var c__4319__auto___117558 = cljs.core.chunk_first.call(null,seq__117370_117557__$1);
var G__117559 = cljs.core.chunk_rest.call(null,seq__117370_117557__$1);
var G__117560 = c__4319__auto___117558;
var G__117561 = cljs.core.count.call(null,c__4319__auto___117558);
var G__117562 = (0);
seq__117370_117520 = G__117559;
chunk__117371_117521 = G__117560;
count__117372_117522 = G__117561;
i__117373_117523 = G__117562;
continue;
} else {
var vec__117387_117563 = cljs.core.first.call(null,seq__117370_117557__$1);
var line_117564 = cljs.core.nth.call(null,vec__117387_117563,(0),null);
var cols_117565 = cljs.core.nth.call(null,vec__117387_117563,(1),null);
var seq__117390_117566 = cljs.core.seq.call(null,cols_117565);
var chunk__117391_117567 = null;
var count__117392_117568 = (0);
var i__117393_117569 = (0);
while(true){
if((i__117393_117569 < count__117392_117568)){
var vec__117394_117570 = cljs.core._nth.call(null,chunk__117391_117567,i__117393_117569);
var col_117571 = cljs.core.nth.call(null,vec__117394_117570,(0),null);
var infos_117572 = cljs.core.nth.call(null,vec__117394_117570,(1),null);
encode_cols.call(null,infos_117572,source_idx_117516,line_117564,col_117571);


var G__117573 = seq__117390_117566;
var G__117574 = chunk__117391_117567;
var G__117575 = count__117392_117568;
var G__117576 = (i__117393_117569 + (1));
seq__117390_117566 = G__117573;
chunk__117391_117567 = G__117574;
count__117392_117568 = G__117575;
i__117393_117569 = G__117576;
continue;
} else {
var temp__5457__auto___117577__$2 = cljs.core.seq.call(null,seq__117390_117566);
if(temp__5457__auto___117577__$2){
var seq__117390_117578__$1 = temp__5457__auto___117577__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117390_117578__$1)){
var c__4319__auto___117579 = cljs.core.chunk_first.call(null,seq__117390_117578__$1);
var G__117580 = cljs.core.chunk_rest.call(null,seq__117390_117578__$1);
var G__117581 = c__4319__auto___117579;
var G__117582 = cljs.core.count.call(null,c__4319__auto___117579);
var G__117583 = (0);
seq__117390_117566 = G__117580;
chunk__117391_117567 = G__117581;
count__117392_117568 = G__117582;
i__117393_117569 = G__117583;
continue;
} else {
var vec__117397_117584 = cljs.core.first.call(null,seq__117390_117578__$1);
var col_117585 = cljs.core.nth.call(null,vec__117397_117584,(0),null);
var infos_117586 = cljs.core.nth.call(null,vec__117397_117584,(1),null);
encode_cols.call(null,infos_117586,source_idx_117516,line_117564,col_117585);


var G__117587 = cljs.core.next.call(null,seq__117390_117578__$1);
var G__117588 = null;
var G__117589 = (0);
var G__117590 = (0);
seq__117390_117566 = G__117587;
chunk__117391_117567 = G__117588;
count__117392_117568 = G__117589;
i__117393_117569 = G__117590;
continue;
}
} else {
}
}
break;
}


var G__117591 = cljs.core.next.call(null,seq__117370_117557__$1);
var G__117592 = null;
var G__117593 = (0);
var G__117594 = (0);
seq__117370_117520 = G__117591;
chunk__117371_117521 = G__117592;
count__117372_117522 = G__117593;
i__117373_117523 = G__117594;
continue;
}
} else {
}
}
break;
}


var G__117595 = cljs.core.next.call(null,seq__117324_117509__$1);
var G__117596 = null;
var G__117597 = (0);
var G__117598 = (0);
seq__117324_117420 = G__117595;
chunk__117325_117421 = G__117596;
count__117326_117422 = G__117597;
i__117327_117423 = G__117598;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__117400 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__117317_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__117317_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__117318_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__117318_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__117319_SHARP_){
return clojure.string.join.call(null,",",p1__117319_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__117401 = G__117400;
goog.object.set(G__117401,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__117401;
} else {
return G__117400;
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
var vec__117599 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__117599,(0),null);
var col_map = cljs.core.nth.call(null,vec__117599,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__117602 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__117602,(0),null);
var infos = cljs.core.nth.call(null,vec__117602,(1),null);
var G__117608 = cljs.core.next.call(null,col_map_seq);
var G__117609 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__117602,col,infos,vec__117599,line,col_map){
return (function (v,p__117605){
var map__117606 = p__117605;
var map__117606__$1 = ((((!((map__117606 == null)))?(((((map__117606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117606):map__117606);
var gline = cljs.core.get.call(null,map__117606__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__117606__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__117602,col,infos,vec__117599,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__117608;
new_cols = G__117609;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__117610 = cljs.core.next.call(null,line_map_seq);
var G__117611 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__117610;
new_lines = G__117611;
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
var seq__117612_117674 = cljs.core.seq.call(null,reverse_map);
var chunk__117613_117675 = null;
var count__117614_117676 = (0);
var i__117615_117677 = (0);
while(true){
if((i__117615_117677 < count__117614_117676)){
var vec__117616_117678 = cljs.core._nth.call(null,chunk__117613_117675,i__117615_117677);
var line_117679 = cljs.core.nth.call(null,vec__117616_117678,(0),null);
var columns_117680 = cljs.core.nth.call(null,vec__117616_117678,(1),null);
var seq__117619_117681 = cljs.core.seq.call(null,columns_117680);
var chunk__117620_117682 = null;
var count__117621_117683 = (0);
var i__117622_117684 = (0);
while(true){
if((i__117622_117684 < count__117621_117683)){
var vec__117623_117685 = cljs.core._nth.call(null,chunk__117620_117682,i__117622_117684);
var column_117686 = cljs.core.nth.call(null,vec__117623_117685,(0),null);
var column_info_117687 = cljs.core.nth.call(null,vec__117623_117685,(1),null);
var seq__117626_117688 = cljs.core.seq.call(null,column_info_117687);
var chunk__117627_117689 = null;
var count__117628_117690 = (0);
var i__117629_117691 = (0);
while(true){
if((i__117629_117691 < count__117628_117690)){
var map__117630_117692 = cljs.core._nth.call(null,chunk__117627_117689,i__117629_117691);
var map__117630_117693__$1 = ((((!((map__117630_117692 == null)))?(((((map__117630_117692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117630_117692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117630_117692):map__117630_117692);
var gline_117694 = cljs.core.get.call(null,map__117630_117693__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_117695 = cljs.core.get.call(null,map__117630_117693__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_117696 = cljs.core.get.call(null,map__117630_117693__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117694], null),cljs.core.fnil.call(null,((function (seq__117626_117688,chunk__117627_117689,count__117628_117690,i__117629_117691,seq__117619_117681,chunk__117620_117682,count__117621_117683,i__117622_117684,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117630_117692,map__117630_117693__$1,gline_117694,gcol_117695,name_117696,vec__117623_117685,column_117686,column_info_117687,vec__117616_117678,line_117679,columns_117680,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_117695], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_117679,new cljs.core.Keyword(null,"col","col",-1959363084),column_117686,new cljs.core.Keyword(null,"name","name",1843675177),name_117696], null));
});})(seq__117626_117688,chunk__117627_117689,count__117628_117690,i__117629_117691,seq__117619_117681,chunk__117620_117682,count__117621_117683,i__117622_117684,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117630_117692,map__117630_117693__$1,gline_117694,gcol_117695,name_117696,vec__117623_117685,column_117686,column_info_117687,vec__117616_117678,line_117679,columns_117680,inverted))
,cljs.core.sorted_map.call(null)));


var G__117697 = seq__117626_117688;
var G__117698 = chunk__117627_117689;
var G__117699 = count__117628_117690;
var G__117700 = (i__117629_117691 + (1));
seq__117626_117688 = G__117697;
chunk__117627_117689 = G__117698;
count__117628_117690 = G__117699;
i__117629_117691 = G__117700;
continue;
} else {
var temp__5457__auto___117701 = cljs.core.seq.call(null,seq__117626_117688);
if(temp__5457__auto___117701){
var seq__117626_117702__$1 = temp__5457__auto___117701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117626_117702__$1)){
var c__4319__auto___117703 = cljs.core.chunk_first.call(null,seq__117626_117702__$1);
var G__117704 = cljs.core.chunk_rest.call(null,seq__117626_117702__$1);
var G__117705 = c__4319__auto___117703;
var G__117706 = cljs.core.count.call(null,c__4319__auto___117703);
var G__117707 = (0);
seq__117626_117688 = G__117704;
chunk__117627_117689 = G__117705;
count__117628_117690 = G__117706;
i__117629_117691 = G__117707;
continue;
} else {
var map__117632_117708 = cljs.core.first.call(null,seq__117626_117702__$1);
var map__117632_117709__$1 = ((((!((map__117632_117708 == null)))?(((((map__117632_117708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117632_117708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117632_117708):map__117632_117708);
var gline_117710 = cljs.core.get.call(null,map__117632_117709__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_117711 = cljs.core.get.call(null,map__117632_117709__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_117712 = cljs.core.get.call(null,map__117632_117709__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117710], null),cljs.core.fnil.call(null,((function (seq__117626_117688,chunk__117627_117689,count__117628_117690,i__117629_117691,seq__117619_117681,chunk__117620_117682,count__117621_117683,i__117622_117684,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117632_117708,map__117632_117709__$1,gline_117710,gcol_117711,name_117712,seq__117626_117702__$1,temp__5457__auto___117701,vec__117623_117685,column_117686,column_info_117687,vec__117616_117678,line_117679,columns_117680,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_117711], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_117679,new cljs.core.Keyword(null,"col","col",-1959363084),column_117686,new cljs.core.Keyword(null,"name","name",1843675177),name_117712], null));
});})(seq__117626_117688,chunk__117627_117689,count__117628_117690,i__117629_117691,seq__117619_117681,chunk__117620_117682,count__117621_117683,i__117622_117684,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117632_117708,map__117632_117709__$1,gline_117710,gcol_117711,name_117712,seq__117626_117702__$1,temp__5457__auto___117701,vec__117623_117685,column_117686,column_info_117687,vec__117616_117678,line_117679,columns_117680,inverted))
,cljs.core.sorted_map.call(null)));


var G__117713 = cljs.core.next.call(null,seq__117626_117702__$1);
var G__117714 = null;
var G__117715 = (0);
var G__117716 = (0);
seq__117626_117688 = G__117713;
chunk__117627_117689 = G__117714;
count__117628_117690 = G__117715;
i__117629_117691 = G__117716;
continue;
}
} else {
}
}
break;
}


var G__117717 = seq__117619_117681;
var G__117718 = chunk__117620_117682;
var G__117719 = count__117621_117683;
var G__117720 = (i__117622_117684 + (1));
seq__117619_117681 = G__117717;
chunk__117620_117682 = G__117718;
count__117621_117683 = G__117719;
i__117622_117684 = G__117720;
continue;
} else {
var temp__5457__auto___117721 = cljs.core.seq.call(null,seq__117619_117681);
if(temp__5457__auto___117721){
var seq__117619_117722__$1 = temp__5457__auto___117721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117619_117722__$1)){
var c__4319__auto___117723 = cljs.core.chunk_first.call(null,seq__117619_117722__$1);
var G__117724 = cljs.core.chunk_rest.call(null,seq__117619_117722__$1);
var G__117725 = c__4319__auto___117723;
var G__117726 = cljs.core.count.call(null,c__4319__auto___117723);
var G__117727 = (0);
seq__117619_117681 = G__117724;
chunk__117620_117682 = G__117725;
count__117621_117683 = G__117726;
i__117622_117684 = G__117727;
continue;
} else {
var vec__117634_117728 = cljs.core.first.call(null,seq__117619_117722__$1);
var column_117729 = cljs.core.nth.call(null,vec__117634_117728,(0),null);
var column_info_117730 = cljs.core.nth.call(null,vec__117634_117728,(1),null);
var seq__117637_117731 = cljs.core.seq.call(null,column_info_117730);
var chunk__117638_117732 = null;
var count__117639_117733 = (0);
var i__117640_117734 = (0);
while(true){
if((i__117640_117734 < count__117639_117733)){
var map__117641_117735 = cljs.core._nth.call(null,chunk__117638_117732,i__117640_117734);
var map__117641_117736__$1 = ((((!((map__117641_117735 == null)))?(((((map__117641_117735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117641_117735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117641_117735):map__117641_117735);
var gline_117737 = cljs.core.get.call(null,map__117641_117736__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_117738 = cljs.core.get.call(null,map__117641_117736__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_117739 = cljs.core.get.call(null,map__117641_117736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117737], null),cljs.core.fnil.call(null,((function (seq__117637_117731,chunk__117638_117732,count__117639_117733,i__117640_117734,seq__117619_117681,chunk__117620_117682,count__117621_117683,i__117622_117684,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117641_117735,map__117641_117736__$1,gline_117737,gcol_117738,name_117739,vec__117634_117728,column_117729,column_info_117730,seq__117619_117722__$1,temp__5457__auto___117721,vec__117616_117678,line_117679,columns_117680,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_117738], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_117679,new cljs.core.Keyword(null,"col","col",-1959363084),column_117729,new cljs.core.Keyword(null,"name","name",1843675177),name_117739], null));
});})(seq__117637_117731,chunk__117638_117732,count__117639_117733,i__117640_117734,seq__117619_117681,chunk__117620_117682,count__117621_117683,i__117622_117684,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117641_117735,map__117641_117736__$1,gline_117737,gcol_117738,name_117739,vec__117634_117728,column_117729,column_info_117730,seq__117619_117722__$1,temp__5457__auto___117721,vec__117616_117678,line_117679,columns_117680,inverted))
,cljs.core.sorted_map.call(null)));


var G__117740 = seq__117637_117731;
var G__117741 = chunk__117638_117732;
var G__117742 = count__117639_117733;
var G__117743 = (i__117640_117734 + (1));
seq__117637_117731 = G__117740;
chunk__117638_117732 = G__117741;
count__117639_117733 = G__117742;
i__117640_117734 = G__117743;
continue;
} else {
var temp__5457__auto___117744__$1 = cljs.core.seq.call(null,seq__117637_117731);
if(temp__5457__auto___117744__$1){
var seq__117637_117745__$1 = temp__5457__auto___117744__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117637_117745__$1)){
var c__4319__auto___117746 = cljs.core.chunk_first.call(null,seq__117637_117745__$1);
var G__117747 = cljs.core.chunk_rest.call(null,seq__117637_117745__$1);
var G__117748 = c__4319__auto___117746;
var G__117749 = cljs.core.count.call(null,c__4319__auto___117746);
var G__117750 = (0);
seq__117637_117731 = G__117747;
chunk__117638_117732 = G__117748;
count__117639_117733 = G__117749;
i__117640_117734 = G__117750;
continue;
} else {
var map__117643_117751 = cljs.core.first.call(null,seq__117637_117745__$1);
var map__117643_117752__$1 = ((((!((map__117643_117751 == null)))?(((((map__117643_117751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117643_117751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117643_117751):map__117643_117751);
var gline_117753 = cljs.core.get.call(null,map__117643_117752__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_117754 = cljs.core.get.call(null,map__117643_117752__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_117755 = cljs.core.get.call(null,map__117643_117752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117753], null),cljs.core.fnil.call(null,((function (seq__117637_117731,chunk__117638_117732,count__117639_117733,i__117640_117734,seq__117619_117681,chunk__117620_117682,count__117621_117683,i__117622_117684,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117643_117751,map__117643_117752__$1,gline_117753,gcol_117754,name_117755,seq__117637_117745__$1,temp__5457__auto___117744__$1,vec__117634_117728,column_117729,column_info_117730,seq__117619_117722__$1,temp__5457__auto___117721,vec__117616_117678,line_117679,columns_117680,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_117754], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_117679,new cljs.core.Keyword(null,"col","col",-1959363084),column_117729,new cljs.core.Keyword(null,"name","name",1843675177),name_117755], null));
});})(seq__117637_117731,chunk__117638_117732,count__117639_117733,i__117640_117734,seq__117619_117681,chunk__117620_117682,count__117621_117683,i__117622_117684,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117643_117751,map__117643_117752__$1,gline_117753,gcol_117754,name_117755,seq__117637_117745__$1,temp__5457__auto___117744__$1,vec__117634_117728,column_117729,column_info_117730,seq__117619_117722__$1,temp__5457__auto___117721,vec__117616_117678,line_117679,columns_117680,inverted))
,cljs.core.sorted_map.call(null)));


var G__117756 = cljs.core.next.call(null,seq__117637_117745__$1);
var G__117757 = null;
var G__117758 = (0);
var G__117759 = (0);
seq__117637_117731 = G__117756;
chunk__117638_117732 = G__117757;
count__117639_117733 = G__117758;
i__117640_117734 = G__117759;
continue;
}
} else {
}
}
break;
}


var G__117760 = cljs.core.next.call(null,seq__117619_117722__$1);
var G__117761 = null;
var G__117762 = (0);
var G__117763 = (0);
seq__117619_117681 = G__117760;
chunk__117620_117682 = G__117761;
count__117621_117683 = G__117762;
i__117622_117684 = G__117763;
continue;
}
} else {
}
}
break;
}


var G__117764 = seq__117612_117674;
var G__117765 = chunk__117613_117675;
var G__117766 = count__117614_117676;
var G__117767 = (i__117615_117677 + (1));
seq__117612_117674 = G__117764;
chunk__117613_117675 = G__117765;
count__117614_117676 = G__117766;
i__117615_117677 = G__117767;
continue;
} else {
var temp__5457__auto___117768 = cljs.core.seq.call(null,seq__117612_117674);
if(temp__5457__auto___117768){
var seq__117612_117769__$1 = temp__5457__auto___117768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117612_117769__$1)){
var c__4319__auto___117770 = cljs.core.chunk_first.call(null,seq__117612_117769__$1);
var G__117771 = cljs.core.chunk_rest.call(null,seq__117612_117769__$1);
var G__117772 = c__4319__auto___117770;
var G__117773 = cljs.core.count.call(null,c__4319__auto___117770);
var G__117774 = (0);
seq__117612_117674 = G__117771;
chunk__117613_117675 = G__117772;
count__117614_117676 = G__117773;
i__117615_117677 = G__117774;
continue;
} else {
var vec__117645_117775 = cljs.core.first.call(null,seq__117612_117769__$1);
var line_117776 = cljs.core.nth.call(null,vec__117645_117775,(0),null);
var columns_117777 = cljs.core.nth.call(null,vec__117645_117775,(1),null);
var seq__117648_117778 = cljs.core.seq.call(null,columns_117777);
var chunk__117649_117779 = null;
var count__117650_117780 = (0);
var i__117651_117781 = (0);
while(true){
if((i__117651_117781 < count__117650_117780)){
var vec__117652_117782 = cljs.core._nth.call(null,chunk__117649_117779,i__117651_117781);
var column_117783 = cljs.core.nth.call(null,vec__117652_117782,(0),null);
var column_info_117784 = cljs.core.nth.call(null,vec__117652_117782,(1),null);
var seq__117655_117785 = cljs.core.seq.call(null,column_info_117784);
var chunk__117656_117786 = null;
var count__117657_117787 = (0);
var i__117658_117788 = (0);
while(true){
if((i__117658_117788 < count__117657_117787)){
var map__117659_117789 = cljs.core._nth.call(null,chunk__117656_117786,i__117658_117788);
var map__117659_117790__$1 = ((((!((map__117659_117789 == null)))?(((((map__117659_117789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117659_117789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117659_117789):map__117659_117789);
var gline_117791 = cljs.core.get.call(null,map__117659_117790__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_117792 = cljs.core.get.call(null,map__117659_117790__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_117793 = cljs.core.get.call(null,map__117659_117790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117791], null),cljs.core.fnil.call(null,((function (seq__117655_117785,chunk__117656_117786,count__117657_117787,i__117658_117788,seq__117648_117778,chunk__117649_117779,count__117650_117780,i__117651_117781,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117659_117789,map__117659_117790__$1,gline_117791,gcol_117792,name_117793,vec__117652_117782,column_117783,column_info_117784,vec__117645_117775,line_117776,columns_117777,seq__117612_117769__$1,temp__5457__auto___117768,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_117792], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_117776,new cljs.core.Keyword(null,"col","col",-1959363084),column_117783,new cljs.core.Keyword(null,"name","name",1843675177),name_117793], null));
});})(seq__117655_117785,chunk__117656_117786,count__117657_117787,i__117658_117788,seq__117648_117778,chunk__117649_117779,count__117650_117780,i__117651_117781,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117659_117789,map__117659_117790__$1,gline_117791,gcol_117792,name_117793,vec__117652_117782,column_117783,column_info_117784,vec__117645_117775,line_117776,columns_117777,seq__117612_117769__$1,temp__5457__auto___117768,inverted))
,cljs.core.sorted_map.call(null)));


var G__117794 = seq__117655_117785;
var G__117795 = chunk__117656_117786;
var G__117796 = count__117657_117787;
var G__117797 = (i__117658_117788 + (1));
seq__117655_117785 = G__117794;
chunk__117656_117786 = G__117795;
count__117657_117787 = G__117796;
i__117658_117788 = G__117797;
continue;
} else {
var temp__5457__auto___117798__$1 = cljs.core.seq.call(null,seq__117655_117785);
if(temp__5457__auto___117798__$1){
var seq__117655_117799__$1 = temp__5457__auto___117798__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117655_117799__$1)){
var c__4319__auto___117800 = cljs.core.chunk_first.call(null,seq__117655_117799__$1);
var G__117801 = cljs.core.chunk_rest.call(null,seq__117655_117799__$1);
var G__117802 = c__4319__auto___117800;
var G__117803 = cljs.core.count.call(null,c__4319__auto___117800);
var G__117804 = (0);
seq__117655_117785 = G__117801;
chunk__117656_117786 = G__117802;
count__117657_117787 = G__117803;
i__117658_117788 = G__117804;
continue;
} else {
var map__117661_117805 = cljs.core.first.call(null,seq__117655_117799__$1);
var map__117661_117806__$1 = ((((!((map__117661_117805 == null)))?(((((map__117661_117805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117661_117805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117661_117805):map__117661_117805);
var gline_117807 = cljs.core.get.call(null,map__117661_117806__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_117808 = cljs.core.get.call(null,map__117661_117806__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_117809 = cljs.core.get.call(null,map__117661_117806__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117807], null),cljs.core.fnil.call(null,((function (seq__117655_117785,chunk__117656_117786,count__117657_117787,i__117658_117788,seq__117648_117778,chunk__117649_117779,count__117650_117780,i__117651_117781,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117661_117805,map__117661_117806__$1,gline_117807,gcol_117808,name_117809,seq__117655_117799__$1,temp__5457__auto___117798__$1,vec__117652_117782,column_117783,column_info_117784,vec__117645_117775,line_117776,columns_117777,seq__117612_117769__$1,temp__5457__auto___117768,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_117808], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_117776,new cljs.core.Keyword(null,"col","col",-1959363084),column_117783,new cljs.core.Keyword(null,"name","name",1843675177),name_117809], null));
});})(seq__117655_117785,chunk__117656_117786,count__117657_117787,i__117658_117788,seq__117648_117778,chunk__117649_117779,count__117650_117780,i__117651_117781,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117661_117805,map__117661_117806__$1,gline_117807,gcol_117808,name_117809,seq__117655_117799__$1,temp__5457__auto___117798__$1,vec__117652_117782,column_117783,column_info_117784,vec__117645_117775,line_117776,columns_117777,seq__117612_117769__$1,temp__5457__auto___117768,inverted))
,cljs.core.sorted_map.call(null)));


var G__117810 = cljs.core.next.call(null,seq__117655_117799__$1);
var G__117811 = null;
var G__117812 = (0);
var G__117813 = (0);
seq__117655_117785 = G__117810;
chunk__117656_117786 = G__117811;
count__117657_117787 = G__117812;
i__117658_117788 = G__117813;
continue;
}
} else {
}
}
break;
}


var G__117814 = seq__117648_117778;
var G__117815 = chunk__117649_117779;
var G__117816 = count__117650_117780;
var G__117817 = (i__117651_117781 + (1));
seq__117648_117778 = G__117814;
chunk__117649_117779 = G__117815;
count__117650_117780 = G__117816;
i__117651_117781 = G__117817;
continue;
} else {
var temp__5457__auto___117818__$1 = cljs.core.seq.call(null,seq__117648_117778);
if(temp__5457__auto___117818__$1){
var seq__117648_117819__$1 = temp__5457__auto___117818__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117648_117819__$1)){
var c__4319__auto___117820 = cljs.core.chunk_first.call(null,seq__117648_117819__$1);
var G__117821 = cljs.core.chunk_rest.call(null,seq__117648_117819__$1);
var G__117822 = c__4319__auto___117820;
var G__117823 = cljs.core.count.call(null,c__4319__auto___117820);
var G__117824 = (0);
seq__117648_117778 = G__117821;
chunk__117649_117779 = G__117822;
count__117650_117780 = G__117823;
i__117651_117781 = G__117824;
continue;
} else {
var vec__117663_117825 = cljs.core.first.call(null,seq__117648_117819__$1);
var column_117826 = cljs.core.nth.call(null,vec__117663_117825,(0),null);
var column_info_117827 = cljs.core.nth.call(null,vec__117663_117825,(1),null);
var seq__117666_117828 = cljs.core.seq.call(null,column_info_117827);
var chunk__117667_117829 = null;
var count__117668_117830 = (0);
var i__117669_117831 = (0);
while(true){
if((i__117669_117831 < count__117668_117830)){
var map__117670_117832 = cljs.core._nth.call(null,chunk__117667_117829,i__117669_117831);
var map__117670_117833__$1 = ((((!((map__117670_117832 == null)))?(((((map__117670_117832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117670_117832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117670_117832):map__117670_117832);
var gline_117834 = cljs.core.get.call(null,map__117670_117833__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_117835 = cljs.core.get.call(null,map__117670_117833__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_117836 = cljs.core.get.call(null,map__117670_117833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117834], null),cljs.core.fnil.call(null,((function (seq__117666_117828,chunk__117667_117829,count__117668_117830,i__117669_117831,seq__117648_117778,chunk__117649_117779,count__117650_117780,i__117651_117781,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117670_117832,map__117670_117833__$1,gline_117834,gcol_117835,name_117836,vec__117663_117825,column_117826,column_info_117827,seq__117648_117819__$1,temp__5457__auto___117818__$1,vec__117645_117775,line_117776,columns_117777,seq__117612_117769__$1,temp__5457__auto___117768,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_117835], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_117776,new cljs.core.Keyword(null,"col","col",-1959363084),column_117826,new cljs.core.Keyword(null,"name","name",1843675177),name_117836], null));
});})(seq__117666_117828,chunk__117667_117829,count__117668_117830,i__117669_117831,seq__117648_117778,chunk__117649_117779,count__117650_117780,i__117651_117781,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117670_117832,map__117670_117833__$1,gline_117834,gcol_117835,name_117836,vec__117663_117825,column_117826,column_info_117827,seq__117648_117819__$1,temp__5457__auto___117818__$1,vec__117645_117775,line_117776,columns_117777,seq__117612_117769__$1,temp__5457__auto___117768,inverted))
,cljs.core.sorted_map.call(null)));


var G__117837 = seq__117666_117828;
var G__117838 = chunk__117667_117829;
var G__117839 = count__117668_117830;
var G__117840 = (i__117669_117831 + (1));
seq__117666_117828 = G__117837;
chunk__117667_117829 = G__117838;
count__117668_117830 = G__117839;
i__117669_117831 = G__117840;
continue;
} else {
var temp__5457__auto___117841__$2 = cljs.core.seq.call(null,seq__117666_117828);
if(temp__5457__auto___117841__$2){
var seq__117666_117842__$1 = temp__5457__auto___117841__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__117666_117842__$1)){
var c__4319__auto___117843 = cljs.core.chunk_first.call(null,seq__117666_117842__$1);
var G__117844 = cljs.core.chunk_rest.call(null,seq__117666_117842__$1);
var G__117845 = c__4319__auto___117843;
var G__117846 = cljs.core.count.call(null,c__4319__auto___117843);
var G__117847 = (0);
seq__117666_117828 = G__117844;
chunk__117667_117829 = G__117845;
count__117668_117830 = G__117846;
i__117669_117831 = G__117847;
continue;
} else {
var map__117672_117848 = cljs.core.first.call(null,seq__117666_117842__$1);
var map__117672_117849__$1 = ((((!((map__117672_117848 == null)))?(((((map__117672_117848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117672_117848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117672_117848):map__117672_117848);
var gline_117850 = cljs.core.get.call(null,map__117672_117849__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_117851 = cljs.core.get.call(null,map__117672_117849__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_117852 = cljs.core.get.call(null,map__117672_117849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_117850], null),cljs.core.fnil.call(null,((function (seq__117666_117828,chunk__117667_117829,count__117668_117830,i__117669_117831,seq__117648_117778,chunk__117649_117779,count__117650_117780,i__117651_117781,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117672_117848,map__117672_117849__$1,gline_117850,gcol_117851,name_117852,seq__117666_117842__$1,temp__5457__auto___117841__$2,vec__117663_117825,column_117826,column_info_117827,seq__117648_117819__$1,temp__5457__auto___117818__$1,vec__117645_117775,line_117776,columns_117777,seq__117612_117769__$1,temp__5457__auto___117768,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_117851], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_117776,new cljs.core.Keyword(null,"col","col",-1959363084),column_117826,new cljs.core.Keyword(null,"name","name",1843675177),name_117852], null));
});})(seq__117666_117828,chunk__117667_117829,count__117668_117830,i__117669_117831,seq__117648_117778,chunk__117649_117779,count__117650_117780,i__117651_117781,seq__117612_117674,chunk__117613_117675,count__117614_117676,i__117615_117677,map__117672_117848,map__117672_117849__$1,gline_117850,gcol_117851,name_117852,seq__117666_117842__$1,temp__5457__auto___117841__$2,vec__117663_117825,column_117826,column_info_117827,seq__117648_117819__$1,temp__5457__auto___117818__$1,vec__117645_117775,line_117776,columns_117777,seq__117612_117769__$1,temp__5457__auto___117768,inverted))
,cljs.core.sorted_map.call(null)));


var G__117853 = cljs.core.next.call(null,seq__117666_117842__$1);
var G__117854 = null;
var G__117855 = (0);
var G__117856 = (0);
seq__117666_117828 = G__117853;
chunk__117667_117829 = G__117854;
count__117668_117830 = G__117855;
i__117669_117831 = G__117856;
continue;
}
} else {
}
}
break;
}


var G__117857 = cljs.core.next.call(null,seq__117648_117819__$1);
var G__117858 = null;
var G__117859 = (0);
var G__117860 = (0);
seq__117648_117778 = G__117857;
chunk__117649_117779 = G__117858;
count__117650_117780 = G__117859;
i__117651_117781 = G__117860;
continue;
}
} else {
}
}
break;
}


var G__117861 = cljs.core.next.call(null,seq__117612_117769__$1);
var G__117862 = null;
var G__117863 = (0);
var G__117864 = (0);
seq__117612_117674 = G__117861;
chunk__117613_117675 = G__117862;
count__117614_117676 = G__117863;
i__117615_117677 = G__117864;
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
