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
return cljs.core.reduce.call(null,(function (m,p__42334){
var vec__42335 = p__42334;
var i = cljs.core.nth.call(null,vec__42335,(0),null);
var v = cljs.core.nth.call(null,vec__42335,(1),null);
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
var vec__42338 = seg;
var gcol = cljs.core.nth.call(null,vec__42338,(0),null);
var source = cljs.core.nth.call(null,vec__42338,(1),null);
var line = cljs.core.nth.call(null,vec__42338,(2),null);
var col = cljs.core.nth.call(null,vec__42338,(3),null);
var name = cljs.core.nth.call(null,vec__42338,(4),null);
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
var vec__42344 = seg;
var gcol = cljs.core.nth.call(null,vec__42344,(0),null);
var source = cljs.core.nth.call(null,vec__42344,(1),null);
var line = cljs.core.nth.call(null,vec__42344,(2),null);
var col = cljs.core.nth.call(null,vec__42344,(3),null);
var name = cljs.core.nth.call(null,vec__42344,(4),null);
var vec__42347 = relseg;
var rgcol = cljs.core.nth.call(null,vec__42347,(0),null);
var rsource = cljs.core.nth.call(null,vec__42347,(1),null);
var rline = cljs.core.nth.call(null,vec__42347,(2),null);
var rcol = cljs.core.nth.call(null,vec__42347,(3),null);
var rname = cljs.core.nth.call(null,vec__42347,(4),null);
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
var map__42356 = segmap;
var map__42356__$1 = ((((!((map__42356 == null)))?(((((map__42356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42356):map__42356);
var gcol = cljs.core.get.call(null,map__42356__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__42356__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__42356__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__42356__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__42356__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__42356,map__42356__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__42356,map__42356__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__42356,map__42356__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__42356,map__42356__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__42356,map__42356__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__42356,map__42356__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__42372 = arguments.length;
switch (G__42372) {
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
var vec__42373 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__42389 = cljs.core.next.call(null,segs__$1);
var G__42390 = nrelseg;
var G__42391 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__42389;
relseg__$1 = G__42390;
result__$1 = G__42391;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__42373,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__42373,(1),null);
var G__42392 = (gline + (1));
var G__42393 = cljs.core.next.call(null,lines__$1);
var G__42394 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__42395 = result__$1;
gline = G__42392;
lines__$1 = G__42393;
relseg = G__42394;
result = G__42395;
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
var map__42397 = segmap;
var map__42397__$1 = ((((!((map__42397 == null)))?(((((map__42397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42397):map__42397);
var gcol = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__42397,map__42397__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__42397,map__42397__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__42396_SHARP_){
return cljs.core.conj.call(null,p1__42396_SHARP_,d__$1);
});})(map__42397,map__42397__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__42397,map__42397__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__42405 = arguments.length;
switch (G__42405) {
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
var vec__42417 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__42437 = cljs.core.next.call(null,segs__$1);
var G__42438 = nrelseg;
var G__42439 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__42437;
relseg__$1 = G__42438;
result__$1 = G__42439;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__42417,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__42417,(1),null);
var G__42446 = (gline + (1));
var G__42447 = cljs.core.next.call(null,lines__$1);
var G__42448 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__42449 = result__$1;
gline = G__42446;
lines__$1 = G__42447;
relseg = G__42448;
result = G__42449;
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
return (function (p__42462){
var vec__42463 = p__42462;
var _ = cljs.core.nth.call(null,vec__42463,(0),null);
var source = cljs.core.nth.call(null,vec__42463,(1),null);
var line = cljs.core.nth.call(null,vec__42463,(2),null);
var col = cljs.core.nth.call(null,vec__42463,(3),null);
var name = cljs.core.nth.call(null,vec__42463,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__42466){
var vec__42467 = p__42466;
var gcol = cljs.core.nth.call(null,vec__42467,(0),null);
var sidx = cljs.core.nth.call(null,vec__42467,(1),null);
var line = cljs.core.nth.call(null,vec__42467,(2),null);
var col = cljs.core.nth.call(null,vec__42467,(3),null);
var name = cljs.core.nth.call(null,vec__42467,(4),null);
var seg = vec__42467;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__42467,gcol,sidx,line,col,name,seg,relseg){
return (function (p__42470){
var vec__42471 = p__42470;
var _ = cljs.core.nth.call(null,vec__42471,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42471,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__42471,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__42471,(3),null);
var lname = cljs.core.nth.call(null,vec__42471,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__42467,gcol,sidx,line,col,name,seg,relseg))
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
var seq__42499 = cljs.core.seq.call(null,infos);
var chunk__42501 = null;
var count__42502 = (0);
var i__42503 = (0);
while(true){
if((i__42503 < count__42502)){
var info = cljs.core._nth.call(null,chunk__42501,i__42503);
var segv_42614 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_42615 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_42616 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_42615 > (lc_42616 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__42499,chunk__42501,count__42502,i__42503,segv_42614,gline_42615,lc_42616,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_42615 - (lc_42616 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_42614], null));
});})(seq__42499,chunk__42501,count__42502,i__42503,segv_42614,gline_42615,lc_42616,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__42499,chunk__42501,count__42502,i__42503,segv_42614,gline_42615,lc_42616,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42615], null),cljs.core.conj,segv_42614);
});})(seq__42499,chunk__42501,count__42502,i__42503,segv_42614,gline_42615,lc_42616,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__42639 = seq__42499;
var G__42640 = chunk__42501;
var G__42641 = count__42502;
var G__42642 = (i__42503 + (1));
seq__42499 = G__42639;
chunk__42501 = G__42640;
count__42502 = G__42641;
i__42503 = G__42642;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__42499);
if(temp__5457__auto__){
var seq__42499__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42499__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__42499__$1);
var G__42650 = cljs.core.chunk_rest.call(null,seq__42499__$1);
var G__42651 = c__4319__auto__;
var G__42652 = cljs.core.count.call(null,c__4319__auto__);
var G__42653 = (0);
seq__42499 = G__42650;
chunk__42501 = G__42651;
count__42502 = G__42652;
i__42503 = G__42653;
continue;
} else {
var info = cljs.core.first.call(null,seq__42499__$1);
var segv_42658 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_42659 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_42660 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_42659 > (lc_42660 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__42499,chunk__42501,count__42502,i__42503,segv_42658,gline_42659,lc_42660,info,seq__42499__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_42659 - (lc_42660 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_42658], null));
});})(seq__42499,chunk__42501,count__42502,i__42503,segv_42658,gline_42659,lc_42660,info,seq__42499__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__42499,chunk__42501,count__42502,i__42503,segv_42658,gline_42659,lc_42660,info,seq__42499__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42659], null),cljs.core.conj,segv_42658);
});})(seq__42499,chunk__42501,count__42502,i__42503,segv_42658,gline_42659,lc_42660,info,seq__42499__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__42682 = cljs.core.next.call(null,seq__42499__$1);
var G__42683 = null;
var G__42684 = (0);
var G__42685 = (0);
seq__42499 = G__42682;
chunk__42501 = G__42683;
count__42502 = G__42684;
i__42503 = G__42685;
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
var seq__42506_42686 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__42507_42687 = null;
var count__42508_42688 = (0);
var i__42509_42689 = (0);
while(true){
if((i__42509_42689 < count__42508_42688)){
var vec__42510_42694 = cljs.core._nth.call(null,chunk__42507_42687,i__42509_42689);
var source_idx_42695 = cljs.core.nth.call(null,vec__42510_42694,(0),null);
var vec__42513_42696 = cljs.core.nth.call(null,vec__42510_42694,(1),null);
var __42697 = cljs.core.nth.call(null,vec__42513_42696,(0),null);
var lines_42698__$1 = cljs.core.nth.call(null,vec__42513_42696,(1),null);
var seq__42516_42702 = cljs.core.seq.call(null,lines_42698__$1);
var chunk__42517_42703 = null;
var count__42518_42704 = (0);
var i__42519_42705 = (0);
while(true){
if((i__42519_42705 < count__42518_42704)){
var vec__42520_42710 = cljs.core._nth.call(null,chunk__42517_42703,i__42519_42705);
var line_42711 = cljs.core.nth.call(null,vec__42520_42710,(0),null);
var cols_42712 = cljs.core.nth.call(null,vec__42520_42710,(1),null);
var seq__42523_42713 = cljs.core.seq.call(null,cols_42712);
var chunk__42524_42714 = null;
var count__42525_42715 = (0);
var i__42526_42716 = (0);
while(true){
if((i__42526_42716 < count__42525_42715)){
var vec__42527_42717 = cljs.core._nth.call(null,chunk__42524_42714,i__42526_42716);
var col_42718 = cljs.core.nth.call(null,vec__42527_42717,(0),null);
var infos_42719 = cljs.core.nth.call(null,vec__42527_42717,(1),null);
encode_cols.call(null,infos_42719,source_idx_42695,line_42711,col_42718);


var G__42724 = seq__42523_42713;
var G__42725 = chunk__42524_42714;
var G__42726 = count__42525_42715;
var G__42727 = (i__42526_42716 + (1));
seq__42523_42713 = G__42724;
chunk__42524_42714 = G__42725;
count__42525_42715 = G__42726;
i__42526_42716 = G__42727;
continue;
} else {
var temp__5457__auto___42735 = cljs.core.seq.call(null,seq__42523_42713);
if(temp__5457__auto___42735){
var seq__42523_42736__$1 = temp__5457__auto___42735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42523_42736__$1)){
var c__4319__auto___42737 = cljs.core.chunk_first.call(null,seq__42523_42736__$1);
var G__42738 = cljs.core.chunk_rest.call(null,seq__42523_42736__$1);
var G__42739 = c__4319__auto___42737;
var G__42740 = cljs.core.count.call(null,c__4319__auto___42737);
var G__42741 = (0);
seq__42523_42713 = G__42738;
chunk__42524_42714 = G__42739;
count__42525_42715 = G__42740;
i__42526_42716 = G__42741;
continue;
} else {
var vec__42530_42745 = cljs.core.first.call(null,seq__42523_42736__$1);
var col_42746 = cljs.core.nth.call(null,vec__42530_42745,(0),null);
var infos_42747 = cljs.core.nth.call(null,vec__42530_42745,(1),null);
encode_cols.call(null,infos_42747,source_idx_42695,line_42711,col_42746);


var G__42748 = cljs.core.next.call(null,seq__42523_42736__$1);
var G__42749 = null;
var G__42750 = (0);
var G__42751 = (0);
seq__42523_42713 = G__42748;
chunk__42524_42714 = G__42749;
count__42525_42715 = G__42750;
i__42526_42716 = G__42751;
continue;
}
} else {
}
}
break;
}


var G__42752 = seq__42516_42702;
var G__42753 = chunk__42517_42703;
var G__42754 = count__42518_42704;
var G__42755 = (i__42519_42705 + (1));
seq__42516_42702 = G__42752;
chunk__42517_42703 = G__42753;
count__42518_42704 = G__42754;
i__42519_42705 = G__42755;
continue;
} else {
var temp__5457__auto___42756 = cljs.core.seq.call(null,seq__42516_42702);
if(temp__5457__auto___42756){
var seq__42516_42757__$1 = temp__5457__auto___42756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42516_42757__$1)){
var c__4319__auto___42758 = cljs.core.chunk_first.call(null,seq__42516_42757__$1);
var G__42759 = cljs.core.chunk_rest.call(null,seq__42516_42757__$1);
var G__42760 = c__4319__auto___42758;
var G__42761 = cljs.core.count.call(null,c__4319__auto___42758);
var G__42762 = (0);
seq__42516_42702 = G__42759;
chunk__42517_42703 = G__42760;
count__42518_42704 = G__42761;
i__42519_42705 = G__42762;
continue;
} else {
var vec__42533_42763 = cljs.core.first.call(null,seq__42516_42757__$1);
var line_42764 = cljs.core.nth.call(null,vec__42533_42763,(0),null);
var cols_42765 = cljs.core.nth.call(null,vec__42533_42763,(1),null);
var seq__42536_42770 = cljs.core.seq.call(null,cols_42765);
var chunk__42537_42771 = null;
var count__42538_42772 = (0);
var i__42539_42773 = (0);
while(true){
if((i__42539_42773 < count__42538_42772)){
var vec__42540_42775 = cljs.core._nth.call(null,chunk__42537_42771,i__42539_42773);
var col_42776 = cljs.core.nth.call(null,vec__42540_42775,(0),null);
var infos_42777 = cljs.core.nth.call(null,vec__42540_42775,(1),null);
encode_cols.call(null,infos_42777,source_idx_42695,line_42764,col_42776);


var G__42783 = seq__42536_42770;
var G__42784 = chunk__42537_42771;
var G__42785 = count__42538_42772;
var G__42786 = (i__42539_42773 + (1));
seq__42536_42770 = G__42783;
chunk__42537_42771 = G__42784;
count__42538_42772 = G__42785;
i__42539_42773 = G__42786;
continue;
} else {
var temp__5457__auto___42788__$1 = cljs.core.seq.call(null,seq__42536_42770);
if(temp__5457__auto___42788__$1){
var seq__42536_42794__$1 = temp__5457__auto___42788__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42536_42794__$1)){
var c__4319__auto___42795 = cljs.core.chunk_first.call(null,seq__42536_42794__$1);
var G__42796 = cljs.core.chunk_rest.call(null,seq__42536_42794__$1);
var G__42797 = c__4319__auto___42795;
var G__42798 = cljs.core.count.call(null,c__4319__auto___42795);
var G__42799 = (0);
seq__42536_42770 = G__42796;
chunk__42537_42771 = G__42797;
count__42538_42772 = G__42798;
i__42539_42773 = G__42799;
continue;
} else {
var vec__42543_42801 = cljs.core.first.call(null,seq__42536_42794__$1);
var col_42802 = cljs.core.nth.call(null,vec__42543_42801,(0),null);
var infos_42803 = cljs.core.nth.call(null,vec__42543_42801,(1),null);
encode_cols.call(null,infos_42803,source_idx_42695,line_42764,col_42802);


var G__42808 = cljs.core.next.call(null,seq__42536_42794__$1);
var G__42809 = null;
var G__42810 = (0);
var G__42811 = (0);
seq__42536_42770 = G__42808;
chunk__42537_42771 = G__42809;
count__42538_42772 = G__42810;
i__42539_42773 = G__42811;
continue;
}
} else {
}
}
break;
}


var G__42816 = cljs.core.next.call(null,seq__42516_42757__$1);
var G__42817 = null;
var G__42818 = (0);
var G__42819 = (0);
seq__42516_42702 = G__42816;
chunk__42517_42703 = G__42817;
count__42518_42704 = G__42818;
i__42519_42705 = G__42819;
continue;
}
} else {
}
}
break;
}


var G__42821 = seq__42506_42686;
var G__42822 = chunk__42507_42687;
var G__42823 = count__42508_42688;
var G__42824 = (i__42509_42689 + (1));
seq__42506_42686 = G__42821;
chunk__42507_42687 = G__42822;
count__42508_42688 = G__42823;
i__42509_42689 = G__42824;
continue;
} else {
var temp__5457__auto___42829 = cljs.core.seq.call(null,seq__42506_42686);
if(temp__5457__auto___42829){
var seq__42506_42830__$1 = temp__5457__auto___42829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42506_42830__$1)){
var c__4319__auto___42832 = cljs.core.chunk_first.call(null,seq__42506_42830__$1);
var G__42834 = cljs.core.chunk_rest.call(null,seq__42506_42830__$1);
var G__42835 = c__4319__auto___42832;
var G__42836 = cljs.core.count.call(null,c__4319__auto___42832);
var G__42837 = (0);
seq__42506_42686 = G__42834;
chunk__42507_42687 = G__42835;
count__42508_42688 = G__42836;
i__42509_42689 = G__42837;
continue;
} else {
var vec__42549_42843 = cljs.core.first.call(null,seq__42506_42830__$1);
var source_idx_42844 = cljs.core.nth.call(null,vec__42549_42843,(0),null);
var vec__42552_42845 = cljs.core.nth.call(null,vec__42549_42843,(1),null);
var __42846 = cljs.core.nth.call(null,vec__42552_42845,(0),null);
var lines_42847__$1 = cljs.core.nth.call(null,vec__42552_42845,(1),null);
var seq__42555_42853 = cljs.core.seq.call(null,lines_42847__$1);
var chunk__42556_42854 = null;
var count__42557_42855 = (0);
var i__42558_42856 = (0);
while(true){
if((i__42558_42856 < count__42557_42855)){
var vec__42559_42861 = cljs.core._nth.call(null,chunk__42556_42854,i__42558_42856);
var line_42862 = cljs.core.nth.call(null,vec__42559_42861,(0),null);
var cols_42863 = cljs.core.nth.call(null,vec__42559_42861,(1),null);
var seq__42562_42867 = cljs.core.seq.call(null,cols_42863);
var chunk__42563_42868 = null;
var count__42564_42869 = (0);
var i__42565_42870 = (0);
while(true){
if((i__42565_42870 < count__42564_42869)){
var vec__42566_42875 = cljs.core._nth.call(null,chunk__42563_42868,i__42565_42870);
var col_42876 = cljs.core.nth.call(null,vec__42566_42875,(0),null);
var infos_42877 = cljs.core.nth.call(null,vec__42566_42875,(1),null);
encode_cols.call(null,infos_42877,source_idx_42844,line_42862,col_42876);


var G__42881 = seq__42562_42867;
var G__42882 = chunk__42563_42868;
var G__42883 = count__42564_42869;
var G__42884 = (i__42565_42870 + (1));
seq__42562_42867 = G__42881;
chunk__42563_42868 = G__42882;
count__42564_42869 = G__42883;
i__42565_42870 = G__42884;
continue;
} else {
var temp__5457__auto___42889__$1 = cljs.core.seq.call(null,seq__42562_42867);
if(temp__5457__auto___42889__$1){
var seq__42562_42893__$1 = temp__5457__auto___42889__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42562_42893__$1)){
var c__4319__auto___42894 = cljs.core.chunk_first.call(null,seq__42562_42893__$1);
var G__42895 = cljs.core.chunk_rest.call(null,seq__42562_42893__$1);
var G__42896 = c__4319__auto___42894;
var G__42897 = cljs.core.count.call(null,c__4319__auto___42894);
var G__42898 = (0);
seq__42562_42867 = G__42895;
chunk__42563_42868 = G__42896;
count__42564_42869 = G__42897;
i__42565_42870 = G__42898;
continue;
} else {
var vec__42573_42903 = cljs.core.first.call(null,seq__42562_42893__$1);
var col_42904 = cljs.core.nth.call(null,vec__42573_42903,(0),null);
var infos_42905 = cljs.core.nth.call(null,vec__42573_42903,(1),null);
encode_cols.call(null,infos_42905,source_idx_42844,line_42862,col_42904);


var G__42907 = cljs.core.next.call(null,seq__42562_42893__$1);
var G__42908 = null;
var G__42909 = (0);
var G__42910 = (0);
seq__42562_42867 = G__42907;
chunk__42563_42868 = G__42908;
count__42564_42869 = G__42909;
i__42565_42870 = G__42910;
continue;
}
} else {
}
}
break;
}


var G__42913 = seq__42555_42853;
var G__42914 = chunk__42556_42854;
var G__42915 = count__42557_42855;
var G__42916 = (i__42558_42856 + (1));
seq__42555_42853 = G__42913;
chunk__42556_42854 = G__42914;
count__42557_42855 = G__42915;
i__42558_42856 = G__42916;
continue;
} else {
var temp__5457__auto___42917__$1 = cljs.core.seq.call(null,seq__42555_42853);
if(temp__5457__auto___42917__$1){
var seq__42555_42918__$1 = temp__5457__auto___42917__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42555_42918__$1)){
var c__4319__auto___42919 = cljs.core.chunk_first.call(null,seq__42555_42918__$1);
var G__42920 = cljs.core.chunk_rest.call(null,seq__42555_42918__$1);
var G__42921 = c__4319__auto___42919;
var G__42922 = cljs.core.count.call(null,c__4319__auto___42919);
var G__42923 = (0);
seq__42555_42853 = G__42920;
chunk__42556_42854 = G__42921;
count__42557_42855 = G__42922;
i__42558_42856 = G__42923;
continue;
} else {
var vec__42576_42924 = cljs.core.first.call(null,seq__42555_42918__$1);
var line_42925 = cljs.core.nth.call(null,vec__42576_42924,(0),null);
var cols_42926 = cljs.core.nth.call(null,vec__42576_42924,(1),null);
var seq__42579_42927 = cljs.core.seq.call(null,cols_42926);
var chunk__42580_42928 = null;
var count__42581_42929 = (0);
var i__42582_42930 = (0);
while(true){
if((i__42582_42930 < count__42581_42929)){
var vec__42583_42931 = cljs.core._nth.call(null,chunk__42580_42928,i__42582_42930);
var col_42932 = cljs.core.nth.call(null,vec__42583_42931,(0),null);
var infos_42933 = cljs.core.nth.call(null,vec__42583_42931,(1),null);
encode_cols.call(null,infos_42933,source_idx_42844,line_42925,col_42932);


var G__42934 = seq__42579_42927;
var G__42935 = chunk__42580_42928;
var G__42936 = count__42581_42929;
var G__42937 = (i__42582_42930 + (1));
seq__42579_42927 = G__42934;
chunk__42580_42928 = G__42935;
count__42581_42929 = G__42936;
i__42582_42930 = G__42937;
continue;
} else {
var temp__5457__auto___42938__$2 = cljs.core.seq.call(null,seq__42579_42927);
if(temp__5457__auto___42938__$2){
var seq__42579_42939__$1 = temp__5457__auto___42938__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42579_42939__$1)){
var c__4319__auto___42940 = cljs.core.chunk_first.call(null,seq__42579_42939__$1);
var G__42941 = cljs.core.chunk_rest.call(null,seq__42579_42939__$1);
var G__42942 = c__4319__auto___42940;
var G__42943 = cljs.core.count.call(null,c__4319__auto___42940);
var G__42944 = (0);
seq__42579_42927 = G__42941;
chunk__42580_42928 = G__42942;
count__42581_42929 = G__42943;
i__42582_42930 = G__42944;
continue;
} else {
var vec__42590_42945 = cljs.core.first.call(null,seq__42579_42939__$1);
var col_42946 = cljs.core.nth.call(null,vec__42590_42945,(0),null);
var infos_42947 = cljs.core.nth.call(null,vec__42590_42945,(1),null);
encode_cols.call(null,infos_42947,source_idx_42844,line_42925,col_42946);


var G__42951 = cljs.core.next.call(null,seq__42579_42939__$1);
var G__42952 = null;
var G__42953 = (0);
var G__42954 = (0);
seq__42579_42927 = G__42951;
chunk__42580_42928 = G__42952;
count__42581_42929 = G__42953;
i__42582_42930 = G__42954;
continue;
}
} else {
}
}
break;
}


var G__42955 = cljs.core.next.call(null,seq__42555_42918__$1);
var G__42956 = null;
var G__42957 = (0);
var G__42958 = (0);
seq__42555_42853 = G__42955;
chunk__42556_42854 = G__42956;
count__42557_42855 = G__42957;
i__42558_42856 = G__42958;
continue;
}
} else {
}
}
break;
}


var G__42959 = cljs.core.next.call(null,seq__42506_42830__$1);
var G__42960 = null;
var G__42961 = (0);
var G__42962 = (0);
seq__42506_42686 = G__42959;
chunk__42507_42687 = G__42960;
count__42508_42688 = G__42961;
i__42509_42689 = G__42962;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__42593 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__42496_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42496_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__42497_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__42497_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__42498_SHARP_){
return clojure.string.join.call(null,",",p1__42498_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__42601 = G__42593;
goog.object.set(G__42601,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__42601;
} else {
return G__42593;
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
var vec__42963 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__42963,(0),null);
var col_map = cljs.core.nth.call(null,vec__42963,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__42966 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__42966,(0),null);
var infos = cljs.core.nth.call(null,vec__42966,(1),null);
var G__42972 = cljs.core.next.call(null,col_map_seq);
var G__42973 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__42966,col,infos,vec__42963,line,col_map){
return (function (v,p__42969){
var map__42970 = p__42969;
var map__42970__$1 = ((((!((map__42970 == null)))?(((((map__42970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42970):map__42970);
var gline = cljs.core.get.call(null,map__42970__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__42970__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__42966,col,infos,vec__42963,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__42972;
new_cols = G__42973;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__42981 = cljs.core.next.call(null,line_map_seq);
var G__42982 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__42981;
new_lines = G__42982;
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
var seq__42986_43072 = cljs.core.seq.call(null,reverse_map);
var chunk__42987_43073 = null;
var count__42988_43074 = (0);
var i__42989_43075 = (0);
while(true){
if((i__42989_43075 < count__42988_43074)){
var vec__42990_43077 = cljs.core._nth.call(null,chunk__42987_43073,i__42989_43075);
var line_43078 = cljs.core.nth.call(null,vec__42990_43077,(0),null);
var columns_43079 = cljs.core.nth.call(null,vec__42990_43077,(1),null);
var seq__42996_43080 = cljs.core.seq.call(null,columns_43079);
var chunk__42997_43081 = null;
var count__42998_43082 = (0);
var i__42999_43083 = (0);
while(true){
if((i__42999_43083 < count__42998_43082)){
var vec__43000_43084 = cljs.core._nth.call(null,chunk__42997_43081,i__42999_43083);
var column_43085 = cljs.core.nth.call(null,vec__43000_43084,(0),null);
var column_info_43086 = cljs.core.nth.call(null,vec__43000_43084,(1),null);
var seq__43003_43087 = cljs.core.seq.call(null,column_info_43086);
var chunk__43004_43088 = null;
var count__43005_43089 = (0);
var i__43006_43090 = (0);
while(true){
if((i__43006_43090 < count__43005_43089)){
var map__43007_43091 = cljs.core._nth.call(null,chunk__43004_43088,i__43006_43090);
var map__43007_43092__$1 = ((((!((map__43007_43091 == null)))?(((((map__43007_43091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43007_43091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43007_43091):map__43007_43091);
var gline_43093 = cljs.core.get.call(null,map__43007_43092__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_43094 = cljs.core.get.call(null,map__43007_43092__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_43095 = cljs.core.get.call(null,map__43007_43092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_43093], null),cljs.core.fnil.call(null,((function (seq__43003_43087,chunk__43004_43088,count__43005_43089,i__43006_43090,seq__42996_43080,chunk__42997_43081,count__42998_43082,i__42999_43083,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43007_43091,map__43007_43092__$1,gline_43093,gcol_43094,name_43095,vec__43000_43084,column_43085,column_info_43086,vec__42990_43077,line_43078,columns_43079,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_43094], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_43078,new cljs.core.Keyword(null,"col","col",-1959363084),column_43085,new cljs.core.Keyword(null,"name","name",1843675177),name_43095], null));
});})(seq__43003_43087,chunk__43004_43088,count__43005_43089,i__43006_43090,seq__42996_43080,chunk__42997_43081,count__42998_43082,i__42999_43083,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43007_43091,map__43007_43092__$1,gline_43093,gcol_43094,name_43095,vec__43000_43084,column_43085,column_info_43086,vec__42990_43077,line_43078,columns_43079,inverted))
,cljs.core.sorted_map.call(null)));


var G__43102 = seq__43003_43087;
var G__43103 = chunk__43004_43088;
var G__43104 = count__43005_43089;
var G__43105 = (i__43006_43090 + (1));
seq__43003_43087 = G__43102;
chunk__43004_43088 = G__43103;
count__43005_43089 = G__43104;
i__43006_43090 = G__43105;
continue;
} else {
var temp__5457__auto___43106 = cljs.core.seq.call(null,seq__43003_43087);
if(temp__5457__auto___43106){
var seq__43003_43107__$1 = temp__5457__auto___43106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43003_43107__$1)){
var c__4319__auto___43108 = cljs.core.chunk_first.call(null,seq__43003_43107__$1);
var G__43109 = cljs.core.chunk_rest.call(null,seq__43003_43107__$1);
var G__43110 = c__4319__auto___43108;
var G__43111 = cljs.core.count.call(null,c__4319__auto___43108);
var G__43112 = (0);
seq__43003_43087 = G__43109;
chunk__43004_43088 = G__43110;
count__43005_43089 = G__43111;
i__43006_43090 = G__43112;
continue;
} else {
var map__43009_43113 = cljs.core.first.call(null,seq__43003_43107__$1);
var map__43009_43114__$1 = ((((!((map__43009_43113 == null)))?(((((map__43009_43113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43009_43113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43009_43113):map__43009_43113);
var gline_43115 = cljs.core.get.call(null,map__43009_43114__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_43116 = cljs.core.get.call(null,map__43009_43114__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_43117 = cljs.core.get.call(null,map__43009_43114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_43115], null),cljs.core.fnil.call(null,((function (seq__43003_43087,chunk__43004_43088,count__43005_43089,i__43006_43090,seq__42996_43080,chunk__42997_43081,count__42998_43082,i__42999_43083,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43009_43113,map__43009_43114__$1,gline_43115,gcol_43116,name_43117,seq__43003_43107__$1,temp__5457__auto___43106,vec__43000_43084,column_43085,column_info_43086,vec__42990_43077,line_43078,columns_43079,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_43116], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_43078,new cljs.core.Keyword(null,"col","col",-1959363084),column_43085,new cljs.core.Keyword(null,"name","name",1843675177),name_43117], null));
});})(seq__43003_43087,chunk__43004_43088,count__43005_43089,i__43006_43090,seq__42996_43080,chunk__42997_43081,count__42998_43082,i__42999_43083,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43009_43113,map__43009_43114__$1,gline_43115,gcol_43116,name_43117,seq__43003_43107__$1,temp__5457__auto___43106,vec__43000_43084,column_43085,column_info_43086,vec__42990_43077,line_43078,columns_43079,inverted))
,cljs.core.sorted_map.call(null)));


var G__43118 = cljs.core.next.call(null,seq__43003_43107__$1);
var G__43119 = null;
var G__43120 = (0);
var G__43121 = (0);
seq__43003_43087 = G__43118;
chunk__43004_43088 = G__43119;
count__43005_43089 = G__43120;
i__43006_43090 = G__43121;
continue;
}
} else {
}
}
break;
}


var G__43122 = seq__42996_43080;
var G__43123 = chunk__42997_43081;
var G__43124 = count__42998_43082;
var G__43125 = (i__42999_43083 + (1));
seq__42996_43080 = G__43122;
chunk__42997_43081 = G__43123;
count__42998_43082 = G__43124;
i__42999_43083 = G__43125;
continue;
} else {
var temp__5457__auto___43126 = cljs.core.seq.call(null,seq__42996_43080);
if(temp__5457__auto___43126){
var seq__42996_43127__$1 = temp__5457__auto___43126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42996_43127__$1)){
var c__4319__auto___43128 = cljs.core.chunk_first.call(null,seq__42996_43127__$1);
var G__43129 = cljs.core.chunk_rest.call(null,seq__42996_43127__$1);
var G__43130 = c__4319__auto___43128;
var G__43131 = cljs.core.count.call(null,c__4319__auto___43128);
var G__43132 = (0);
seq__42996_43080 = G__43129;
chunk__42997_43081 = G__43130;
count__42998_43082 = G__43131;
i__42999_43083 = G__43132;
continue;
} else {
var vec__43011_43133 = cljs.core.first.call(null,seq__42996_43127__$1);
var column_43134 = cljs.core.nth.call(null,vec__43011_43133,(0),null);
var column_info_43135 = cljs.core.nth.call(null,vec__43011_43133,(1),null);
var seq__43016_43136 = cljs.core.seq.call(null,column_info_43135);
var chunk__43017_43137 = null;
var count__43018_43138 = (0);
var i__43019_43139 = (0);
while(true){
if((i__43019_43139 < count__43018_43138)){
var map__43020_43140 = cljs.core._nth.call(null,chunk__43017_43137,i__43019_43139);
var map__43020_43141__$1 = ((((!((map__43020_43140 == null)))?(((((map__43020_43140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43020_43140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43020_43140):map__43020_43140);
var gline_43142 = cljs.core.get.call(null,map__43020_43141__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_43143 = cljs.core.get.call(null,map__43020_43141__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_43144 = cljs.core.get.call(null,map__43020_43141__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_43142], null),cljs.core.fnil.call(null,((function (seq__43016_43136,chunk__43017_43137,count__43018_43138,i__43019_43139,seq__42996_43080,chunk__42997_43081,count__42998_43082,i__42999_43083,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43020_43140,map__43020_43141__$1,gline_43142,gcol_43143,name_43144,vec__43011_43133,column_43134,column_info_43135,seq__42996_43127__$1,temp__5457__auto___43126,vec__42990_43077,line_43078,columns_43079,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_43143], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_43078,new cljs.core.Keyword(null,"col","col",-1959363084),column_43134,new cljs.core.Keyword(null,"name","name",1843675177),name_43144], null));
});})(seq__43016_43136,chunk__43017_43137,count__43018_43138,i__43019_43139,seq__42996_43080,chunk__42997_43081,count__42998_43082,i__42999_43083,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43020_43140,map__43020_43141__$1,gline_43142,gcol_43143,name_43144,vec__43011_43133,column_43134,column_info_43135,seq__42996_43127__$1,temp__5457__auto___43126,vec__42990_43077,line_43078,columns_43079,inverted))
,cljs.core.sorted_map.call(null)));


var G__43145 = seq__43016_43136;
var G__43146 = chunk__43017_43137;
var G__43147 = count__43018_43138;
var G__43148 = (i__43019_43139 + (1));
seq__43016_43136 = G__43145;
chunk__43017_43137 = G__43146;
count__43018_43138 = G__43147;
i__43019_43139 = G__43148;
continue;
} else {
var temp__5457__auto___43149__$1 = cljs.core.seq.call(null,seq__43016_43136);
if(temp__5457__auto___43149__$1){
var seq__43016_43150__$1 = temp__5457__auto___43149__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43016_43150__$1)){
var c__4319__auto___43151 = cljs.core.chunk_first.call(null,seq__43016_43150__$1);
var G__43152 = cljs.core.chunk_rest.call(null,seq__43016_43150__$1);
var G__43153 = c__4319__auto___43151;
var G__43154 = cljs.core.count.call(null,c__4319__auto___43151);
var G__43155 = (0);
seq__43016_43136 = G__43152;
chunk__43017_43137 = G__43153;
count__43018_43138 = G__43154;
i__43019_43139 = G__43155;
continue;
} else {
var map__43026_43156 = cljs.core.first.call(null,seq__43016_43150__$1);
var map__43026_43157__$1 = ((((!((map__43026_43156 == null)))?(((((map__43026_43156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43026_43156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43026_43156):map__43026_43156);
var gline_43158 = cljs.core.get.call(null,map__43026_43157__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_43159 = cljs.core.get.call(null,map__43026_43157__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_43160 = cljs.core.get.call(null,map__43026_43157__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_43158], null),cljs.core.fnil.call(null,((function (seq__43016_43136,chunk__43017_43137,count__43018_43138,i__43019_43139,seq__42996_43080,chunk__42997_43081,count__42998_43082,i__42999_43083,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43026_43156,map__43026_43157__$1,gline_43158,gcol_43159,name_43160,seq__43016_43150__$1,temp__5457__auto___43149__$1,vec__43011_43133,column_43134,column_info_43135,seq__42996_43127__$1,temp__5457__auto___43126,vec__42990_43077,line_43078,columns_43079,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_43159], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_43078,new cljs.core.Keyword(null,"col","col",-1959363084),column_43134,new cljs.core.Keyword(null,"name","name",1843675177),name_43160], null));
});})(seq__43016_43136,chunk__43017_43137,count__43018_43138,i__43019_43139,seq__42996_43080,chunk__42997_43081,count__42998_43082,i__42999_43083,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43026_43156,map__43026_43157__$1,gline_43158,gcol_43159,name_43160,seq__43016_43150__$1,temp__5457__auto___43149__$1,vec__43011_43133,column_43134,column_info_43135,seq__42996_43127__$1,temp__5457__auto___43126,vec__42990_43077,line_43078,columns_43079,inverted))
,cljs.core.sorted_map.call(null)));


var G__43161 = cljs.core.next.call(null,seq__43016_43150__$1);
var G__43162 = null;
var G__43163 = (0);
var G__43164 = (0);
seq__43016_43136 = G__43161;
chunk__43017_43137 = G__43162;
count__43018_43138 = G__43163;
i__43019_43139 = G__43164;
continue;
}
} else {
}
}
break;
}


var G__43165 = cljs.core.next.call(null,seq__42996_43127__$1);
var G__43166 = null;
var G__43167 = (0);
var G__43168 = (0);
seq__42996_43080 = G__43165;
chunk__42997_43081 = G__43166;
count__42998_43082 = G__43167;
i__42999_43083 = G__43168;
continue;
}
} else {
}
}
break;
}


var G__43169 = seq__42986_43072;
var G__43170 = chunk__42987_43073;
var G__43171 = count__42988_43074;
var G__43172 = (i__42989_43075 + (1));
seq__42986_43072 = G__43169;
chunk__42987_43073 = G__43170;
count__42988_43074 = G__43171;
i__42989_43075 = G__43172;
continue;
} else {
var temp__5457__auto___43173 = cljs.core.seq.call(null,seq__42986_43072);
if(temp__5457__auto___43173){
var seq__42986_43174__$1 = temp__5457__auto___43173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42986_43174__$1)){
var c__4319__auto___43175 = cljs.core.chunk_first.call(null,seq__42986_43174__$1);
var G__43176 = cljs.core.chunk_rest.call(null,seq__42986_43174__$1);
var G__43177 = c__4319__auto___43175;
var G__43178 = cljs.core.count.call(null,c__4319__auto___43175);
var G__43179 = (0);
seq__42986_43072 = G__43176;
chunk__42987_43073 = G__43177;
count__42988_43074 = G__43178;
i__42989_43075 = G__43179;
continue;
} else {
var vec__43032_43180 = cljs.core.first.call(null,seq__42986_43174__$1);
var line_43181 = cljs.core.nth.call(null,vec__43032_43180,(0),null);
var columns_43182 = cljs.core.nth.call(null,vec__43032_43180,(1),null);
var seq__43035_43183 = cljs.core.seq.call(null,columns_43182);
var chunk__43036_43184 = null;
var count__43037_43185 = (0);
var i__43038_43186 = (0);
while(true){
if((i__43038_43186 < count__43037_43185)){
var vec__43039_43187 = cljs.core._nth.call(null,chunk__43036_43184,i__43038_43186);
var column_43188 = cljs.core.nth.call(null,vec__43039_43187,(0),null);
var column_info_43189 = cljs.core.nth.call(null,vec__43039_43187,(1),null);
var seq__43042_43190 = cljs.core.seq.call(null,column_info_43189);
var chunk__43043_43191 = null;
var count__43044_43192 = (0);
var i__43045_43193 = (0);
while(true){
if((i__43045_43193 < count__43044_43192)){
var map__43046_43194 = cljs.core._nth.call(null,chunk__43043_43191,i__43045_43193);
var map__43046_43195__$1 = ((((!((map__43046_43194 == null)))?(((((map__43046_43194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43046_43194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43046_43194):map__43046_43194);
var gline_43196 = cljs.core.get.call(null,map__43046_43195__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_43197 = cljs.core.get.call(null,map__43046_43195__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_43198 = cljs.core.get.call(null,map__43046_43195__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_43196], null),cljs.core.fnil.call(null,((function (seq__43042_43190,chunk__43043_43191,count__43044_43192,i__43045_43193,seq__43035_43183,chunk__43036_43184,count__43037_43185,i__43038_43186,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43046_43194,map__43046_43195__$1,gline_43196,gcol_43197,name_43198,vec__43039_43187,column_43188,column_info_43189,vec__43032_43180,line_43181,columns_43182,seq__42986_43174__$1,temp__5457__auto___43173,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_43197], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_43181,new cljs.core.Keyword(null,"col","col",-1959363084),column_43188,new cljs.core.Keyword(null,"name","name",1843675177),name_43198], null));
});})(seq__43042_43190,chunk__43043_43191,count__43044_43192,i__43045_43193,seq__43035_43183,chunk__43036_43184,count__43037_43185,i__43038_43186,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43046_43194,map__43046_43195__$1,gline_43196,gcol_43197,name_43198,vec__43039_43187,column_43188,column_info_43189,vec__43032_43180,line_43181,columns_43182,seq__42986_43174__$1,temp__5457__auto___43173,inverted))
,cljs.core.sorted_map.call(null)));


var G__43199 = seq__43042_43190;
var G__43200 = chunk__43043_43191;
var G__43201 = count__43044_43192;
var G__43202 = (i__43045_43193 + (1));
seq__43042_43190 = G__43199;
chunk__43043_43191 = G__43200;
count__43044_43192 = G__43201;
i__43045_43193 = G__43202;
continue;
} else {
var temp__5457__auto___43203__$1 = cljs.core.seq.call(null,seq__43042_43190);
if(temp__5457__auto___43203__$1){
var seq__43042_43204__$1 = temp__5457__auto___43203__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43042_43204__$1)){
var c__4319__auto___43205 = cljs.core.chunk_first.call(null,seq__43042_43204__$1);
var G__43206 = cljs.core.chunk_rest.call(null,seq__43042_43204__$1);
var G__43207 = c__4319__auto___43205;
var G__43208 = cljs.core.count.call(null,c__4319__auto___43205);
var G__43209 = (0);
seq__43042_43190 = G__43206;
chunk__43043_43191 = G__43207;
count__43044_43192 = G__43208;
i__43045_43193 = G__43209;
continue;
} else {
var map__43050_43210 = cljs.core.first.call(null,seq__43042_43204__$1);
var map__43050_43211__$1 = ((((!((map__43050_43210 == null)))?(((((map__43050_43210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43050_43210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43050_43210):map__43050_43210);
var gline_43212 = cljs.core.get.call(null,map__43050_43211__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_43213 = cljs.core.get.call(null,map__43050_43211__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_43214 = cljs.core.get.call(null,map__43050_43211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_43212], null),cljs.core.fnil.call(null,((function (seq__43042_43190,chunk__43043_43191,count__43044_43192,i__43045_43193,seq__43035_43183,chunk__43036_43184,count__43037_43185,i__43038_43186,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43050_43210,map__43050_43211__$1,gline_43212,gcol_43213,name_43214,seq__43042_43204__$1,temp__5457__auto___43203__$1,vec__43039_43187,column_43188,column_info_43189,vec__43032_43180,line_43181,columns_43182,seq__42986_43174__$1,temp__5457__auto___43173,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_43213], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_43181,new cljs.core.Keyword(null,"col","col",-1959363084),column_43188,new cljs.core.Keyword(null,"name","name",1843675177),name_43214], null));
});})(seq__43042_43190,chunk__43043_43191,count__43044_43192,i__43045_43193,seq__43035_43183,chunk__43036_43184,count__43037_43185,i__43038_43186,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43050_43210,map__43050_43211__$1,gline_43212,gcol_43213,name_43214,seq__43042_43204__$1,temp__5457__auto___43203__$1,vec__43039_43187,column_43188,column_info_43189,vec__43032_43180,line_43181,columns_43182,seq__42986_43174__$1,temp__5457__auto___43173,inverted))
,cljs.core.sorted_map.call(null)));


var G__43215 = cljs.core.next.call(null,seq__43042_43204__$1);
var G__43216 = null;
var G__43217 = (0);
var G__43218 = (0);
seq__43042_43190 = G__43215;
chunk__43043_43191 = G__43216;
count__43044_43192 = G__43217;
i__43045_43193 = G__43218;
continue;
}
} else {
}
}
break;
}


var G__43219 = seq__43035_43183;
var G__43220 = chunk__43036_43184;
var G__43221 = count__43037_43185;
var G__43222 = (i__43038_43186 + (1));
seq__43035_43183 = G__43219;
chunk__43036_43184 = G__43220;
count__43037_43185 = G__43221;
i__43038_43186 = G__43222;
continue;
} else {
var temp__5457__auto___43223__$1 = cljs.core.seq.call(null,seq__43035_43183);
if(temp__5457__auto___43223__$1){
var seq__43035_43224__$1 = temp__5457__auto___43223__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43035_43224__$1)){
var c__4319__auto___43225 = cljs.core.chunk_first.call(null,seq__43035_43224__$1);
var G__43226 = cljs.core.chunk_rest.call(null,seq__43035_43224__$1);
var G__43227 = c__4319__auto___43225;
var G__43228 = cljs.core.count.call(null,c__4319__auto___43225);
var G__43229 = (0);
seq__43035_43183 = G__43226;
chunk__43036_43184 = G__43227;
count__43037_43185 = G__43228;
i__43038_43186 = G__43229;
continue;
} else {
var vec__43058_43230 = cljs.core.first.call(null,seq__43035_43224__$1);
var column_43231 = cljs.core.nth.call(null,vec__43058_43230,(0),null);
var column_info_43232 = cljs.core.nth.call(null,vec__43058_43230,(1),null);
var seq__43061_43233 = cljs.core.seq.call(null,column_info_43232);
var chunk__43062_43234 = null;
var count__43063_43235 = (0);
var i__43064_43236 = (0);
while(true){
if((i__43064_43236 < count__43063_43235)){
var map__43065_43237 = cljs.core._nth.call(null,chunk__43062_43234,i__43064_43236);
var map__43065_43238__$1 = ((((!((map__43065_43237 == null)))?(((((map__43065_43237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43065_43237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43065_43237):map__43065_43237);
var gline_43239 = cljs.core.get.call(null,map__43065_43238__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_43240 = cljs.core.get.call(null,map__43065_43238__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_43241 = cljs.core.get.call(null,map__43065_43238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_43239], null),cljs.core.fnil.call(null,((function (seq__43061_43233,chunk__43062_43234,count__43063_43235,i__43064_43236,seq__43035_43183,chunk__43036_43184,count__43037_43185,i__43038_43186,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43065_43237,map__43065_43238__$1,gline_43239,gcol_43240,name_43241,vec__43058_43230,column_43231,column_info_43232,seq__43035_43224__$1,temp__5457__auto___43223__$1,vec__43032_43180,line_43181,columns_43182,seq__42986_43174__$1,temp__5457__auto___43173,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_43240], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_43181,new cljs.core.Keyword(null,"col","col",-1959363084),column_43231,new cljs.core.Keyword(null,"name","name",1843675177),name_43241], null));
});})(seq__43061_43233,chunk__43062_43234,count__43063_43235,i__43064_43236,seq__43035_43183,chunk__43036_43184,count__43037_43185,i__43038_43186,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43065_43237,map__43065_43238__$1,gline_43239,gcol_43240,name_43241,vec__43058_43230,column_43231,column_info_43232,seq__43035_43224__$1,temp__5457__auto___43223__$1,vec__43032_43180,line_43181,columns_43182,seq__42986_43174__$1,temp__5457__auto___43173,inverted))
,cljs.core.sorted_map.call(null)));


var G__43242 = seq__43061_43233;
var G__43243 = chunk__43062_43234;
var G__43244 = count__43063_43235;
var G__43245 = (i__43064_43236 + (1));
seq__43061_43233 = G__43242;
chunk__43062_43234 = G__43243;
count__43063_43235 = G__43244;
i__43064_43236 = G__43245;
continue;
} else {
var temp__5457__auto___43246__$2 = cljs.core.seq.call(null,seq__43061_43233);
if(temp__5457__auto___43246__$2){
var seq__43061_43247__$1 = temp__5457__auto___43246__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43061_43247__$1)){
var c__4319__auto___43248 = cljs.core.chunk_first.call(null,seq__43061_43247__$1);
var G__43249 = cljs.core.chunk_rest.call(null,seq__43061_43247__$1);
var G__43250 = c__4319__auto___43248;
var G__43251 = cljs.core.count.call(null,c__4319__auto___43248);
var G__43252 = (0);
seq__43061_43233 = G__43249;
chunk__43062_43234 = G__43250;
count__43063_43235 = G__43251;
i__43064_43236 = G__43252;
continue;
} else {
var map__43070_43253 = cljs.core.first.call(null,seq__43061_43247__$1);
var map__43070_43254__$1 = ((((!((map__43070_43253 == null)))?(((((map__43070_43253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43070_43253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43070_43253):map__43070_43253);
var gline_43255 = cljs.core.get.call(null,map__43070_43254__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_43256 = cljs.core.get.call(null,map__43070_43254__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_43257 = cljs.core.get.call(null,map__43070_43254__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_43255], null),cljs.core.fnil.call(null,((function (seq__43061_43233,chunk__43062_43234,count__43063_43235,i__43064_43236,seq__43035_43183,chunk__43036_43184,count__43037_43185,i__43038_43186,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43070_43253,map__43070_43254__$1,gline_43255,gcol_43256,name_43257,seq__43061_43247__$1,temp__5457__auto___43246__$2,vec__43058_43230,column_43231,column_info_43232,seq__43035_43224__$1,temp__5457__auto___43223__$1,vec__43032_43180,line_43181,columns_43182,seq__42986_43174__$1,temp__5457__auto___43173,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_43256], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_43181,new cljs.core.Keyword(null,"col","col",-1959363084),column_43231,new cljs.core.Keyword(null,"name","name",1843675177),name_43257], null));
});})(seq__43061_43233,chunk__43062_43234,count__43063_43235,i__43064_43236,seq__43035_43183,chunk__43036_43184,count__43037_43185,i__43038_43186,seq__42986_43072,chunk__42987_43073,count__42988_43074,i__42989_43075,map__43070_43253,map__43070_43254__$1,gline_43255,gcol_43256,name_43257,seq__43061_43247__$1,temp__5457__auto___43246__$2,vec__43058_43230,column_43231,column_info_43232,seq__43035_43224__$1,temp__5457__auto___43223__$1,vec__43032_43180,line_43181,columns_43182,seq__42986_43174__$1,temp__5457__auto___43173,inverted))
,cljs.core.sorted_map.call(null)));


var G__43258 = cljs.core.next.call(null,seq__43061_43247__$1);
var G__43259 = null;
var G__43260 = (0);
var G__43261 = (0);
seq__43061_43233 = G__43258;
chunk__43062_43234 = G__43259;
count__43063_43235 = G__43260;
i__43064_43236 = G__43261;
continue;
}
} else {
}
}
break;
}


var G__43262 = cljs.core.next.call(null,seq__43035_43224__$1);
var G__43263 = null;
var G__43264 = (0);
var G__43265 = (0);
seq__43035_43183 = G__43262;
chunk__43036_43184 = G__43263;
count__43037_43185 = G__43264;
i__43038_43186 = G__43265;
continue;
}
} else {
}
}
break;
}


var G__43266 = cljs.core.next.call(null,seq__42986_43174__$1);
var G__43267 = null;
var G__43268 = (0);
var G__43269 = (0);
seq__42986_43072 = G__43266;
chunk__42987_43073 = G__43267;
count__42988_43074 = G__43268;
i__42989_43075 = G__43269;
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
