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
return cljs.core.reduce.call(null,(function (m,p__25256){
var vec__25257 = p__25256;
var i = cljs.core.nth.call(null,vec__25257,(0),null);
var v = cljs.core.nth.call(null,vec__25257,(1),null);
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
var vec__25260 = seg;
var gcol = cljs.core.nth.call(null,vec__25260,(0),null);
var source = cljs.core.nth.call(null,vec__25260,(1),null);
var line = cljs.core.nth.call(null,vec__25260,(2),null);
var col = cljs.core.nth.call(null,vec__25260,(3),null);
var name = cljs.core.nth.call(null,vec__25260,(4),null);
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
var vec__25263 = seg;
var gcol = cljs.core.nth.call(null,vec__25263,(0),null);
var source = cljs.core.nth.call(null,vec__25263,(1),null);
var line = cljs.core.nth.call(null,vec__25263,(2),null);
var col = cljs.core.nth.call(null,vec__25263,(3),null);
var name = cljs.core.nth.call(null,vec__25263,(4),null);
var vec__25266 = relseg;
var rgcol = cljs.core.nth.call(null,vec__25266,(0),null);
var rsource = cljs.core.nth.call(null,vec__25266,(1),null);
var rline = cljs.core.nth.call(null,vec__25266,(2),null);
var rcol = cljs.core.nth.call(null,vec__25266,(3),null);
var rname = cljs.core.nth.call(null,vec__25266,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__17825__auto__ = source;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__17825__auto__ = line;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__17825__auto__ = col;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__17825__auto__ = name;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
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
var map__25269 = segmap;
var map__25269__$1 = (((((!((map__25269 == null))))?(((((map__25269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25269):map__25269);
var gcol = cljs.core.get.call(null,map__25269__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25269__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25269__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25269__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__25269,map__25269__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__25269,map__25269__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__25269,map__25269__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__25269,map__25269__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__25269,map__25269__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__25269,map__25269__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__25272 = arguments.length;
switch (G__25272) {
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
var vec__25276 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25280 = cljs.core.next.call(null,segs__$1);
var G__25281 = nrelseg;
var G__25282 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25280;
relseg__$1 = G__25281;
result__$1 = G__25282;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25276,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25276,(1),null);
var G__25283 = (gline + (1));
var G__25284 = cljs.core.next.call(null,lines__$1);
var G__25285 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25286 = result__$1;
gline = G__25283;
lines__$1 = G__25284;
relseg = G__25285;
result = G__25286;
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
var map__25288 = segmap;
var map__25288__$1 = (((((!((map__25288 == null))))?(((((map__25288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25288):map__25288);
var gcol = cljs.core.get.call(null,map__25288__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25288__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25288__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25288__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__25288,map__25288__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__25288,map__25288__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__25287_SHARP_){
return cljs.core.conj.call(null,p1__25287_SHARP_,d__$1);
});})(map__25288,map__25288__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__25288,map__25288__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__25291 = arguments.length;
switch (G__25291) {
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
var vec__25295 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25299 = cljs.core.next.call(null,segs__$1);
var G__25300 = nrelseg;
var G__25301 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25299;
relseg__$1 = G__25300;
result__$1 = G__25301;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25295,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25295,(1),null);
var G__25302 = (gline + (1));
var G__25303 = cljs.core.next.call(null,lines__$1);
var G__25304 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25305 = result__$1;
gline = G__25302;
lines__$1 = G__25303;
relseg = G__25304;
result = G__25305;
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
return (function (p__25306){
var vec__25307 = p__25306;
var _ = cljs.core.nth.call(null,vec__25307,(0),null);
var source = cljs.core.nth.call(null,vec__25307,(1),null);
var line = cljs.core.nth.call(null,vec__25307,(2),null);
var col = cljs.core.nth.call(null,vec__25307,(3),null);
var name = cljs.core.nth.call(null,vec__25307,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__25310){
var vec__25311 = p__25310;
var gcol = cljs.core.nth.call(null,vec__25311,(0),null);
var sidx = cljs.core.nth.call(null,vec__25311,(1),null);
var line = cljs.core.nth.call(null,vec__25311,(2),null);
var col = cljs.core.nth.call(null,vec__25311,(3),null);
var name = cljs.core.nth.call(null,vec__25311,(4),null);
var seg = vec__25311;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__25311,gcol,sidx,line,col,name,seg,relseg){
return (function (p__25314){
var vec__25315 = p__25314;
var _ = cljs.core.nth.call(null,vec__25315,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25315,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__25315,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__25315,(3),null);
var lname = cljs.core.nth.call(null,vec__25315,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__17825__auto__ = name;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__25311,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__17825__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
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
var seq__25321 = cljs.core.seq.call(null,infos);
var chunk__25322 = null;
var count__25323 = (0);
var i__25324 = (0);
while(true){
if((i__25324 < count__25323)){
var info = cljs.core._nth.call(null,chunk__25322,i__25324);
var segv_25675 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25676 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25677 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25676 > (lc_25677 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25321,chunk__25322,count__25323,i__25324,segv_25675,gline_25676,lc_25677,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25676 - (lc_25677 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25675], null));
});})(seq__25321,chunk__25322,count__25323,i__25324,segv_25675,gline_25676,lc_25677,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25321,chunk__25322,count__25323,i__25324,segv_25675,gline_25676,lc_25677,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25676], null),cljs.core.conj,segv_25675);
});})(seq__25321,chunk__25322,count__25323,i__25324,segv_25675,gline_25676,lc_25677,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__25678 = seq__25321;
var G__25679 = chunk__25322;
var G__25680 = count__25323;
var G__25681 = (i__25324 + (1));
seq__25321 = G__25678;
chunk__25322 = G__25679;
count__25323 = G__25680;
i__25324 = G__25681;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25321);
if(temp__5457__auto__){
var seq__25321__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25321__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__25321__$1);
var G__25682 = cljs.core.chunk_rest.call(null,seq__25321__$1);
var G__25683 = c__18782__auto__;
var G__25684 = cljs.core.count.call(null,c__18782__auto__);
var G__25685 = (0);
seq__25321 = G__25682;
chunk__25322 = G__25683;
count__25323 = G__25684;
i__25324 = G__25685;
continue;
} else {
var info = cljs.core.first.call(null,seq__25321__$1);
var segv_25686 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25687 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25688 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25687 > (lc_25688 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25321,chunk__25322,count__25323,i__25324,segv_25686,gline_25687,lc_25688,info,seq__25321__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25687 - (lc_25688 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25686], null));
});})(seq__25321,chunk__25322,count__25323,i__25324,segv_25686,gline_25687,lc_25688,info,seq__25321__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25321,chunk__25322,count__25323,i__25324,segv_25686,gline_25687,lc_25688,info,seq__25321__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25687], null),cljs.core.conj,segv_25686);
});})(seq__25321,chunk__25322,count__25323,i__25324,segv_25686,gline_25687,lc_25688,info,seq__25321__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__25689 = cljs.core.next.call(null,seq__25321__$1);
var G__25690 = null;
var G__25691 = (0);
var G__25692 = (0);
seq__25321 = G__25689;
chunk__25322 = G__25690;
count__25323 = G__25691;
i__25324 = G__25692;
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
var seq__25325_25693 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__25326_25694 = null;
var count__25327_25695 = (0);
var i__25328_25696 = (0);
while(true){
if((i__25328_25696 < count__25327_25695)){
var vec__25501_25697 = cljs.core._nth.call(null,chunk__25326_25694,i__25328_25696);
var source_idx_25698 = cljs.core.nth.call(null,vec__25501_25697,(0),null);
var vec__25504_25699 = cljs.core.nth.call(null,vec__25501_25697,(1),null);
var __25700 = cljs.core.nth.call(null,vec__25504_25699,(0),null);
var lines_25701__$1 = cljs.core.nth.call(null,vec__25504_25699,(1),null);
var seq__25507_25702 = cljs.core.seq.call(null,lines_25701__$1);
var chunk__25508_25703 = null;
var count__25509_25704 = (0);
var i__25510_25705 = (0);
while(true){
if((i__25510_25705 < count__25509_25704)){
var vec__25549_25706 = cljs.core._nth.call(null,chunk__25508_25703,i__25510_25705);
var line_25707 = cljs.core.nth.call(null,vec__25549_25706,(0),null);
var cols_25708 = cljs.core.nth.call(null,vec__25549_25706,(1),null);
var seq__25552_25709 = cljs.core.seq.call(null,cols_25708);
var chunk__25553_25710 = null;
var count__25554_25711 = (0);
var i__25555_25712 = (0);
while(true){
if((i__25555_25712 < count__25554_25711)){
var vec__25562_25713 = cljs.core._nth.call(null,chunk__25553_25710,i__25555_25712);
var col_25714 = cljs.core.nth.call(null,vec__25562_25713,(0),null);
var infos_25715 = cljs.core.nth.call(null,vec__25562_25713,(1),null);
encode_cols.call(null,infos_25715,source_idx_25698,line_25707,col_25714);


var G__25716 = seq__25552_25709;
var G__25717 = chunk__25553_25710;
var G__25718 = count__25554_25711;
var G__25719 = (i__25555_25712 + (1));
seq__25552_25709 = G__25716;
chunk__25553_25710 = G__25717;
count__25554_25711 = G__25718;
i__25555_25712 = G__25719;
continue;
} else {
var temp__5457__auto___25720 = cljs.core.seq.call(null,seq__25552_25709);
if(temp__5457__auto___25720){
var seq__25552_25721__$1 = temp__5457__auto___25720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25552_25721__$1)){
var c__18782__auto___25722 = cljs.core.chunk_first.call(null,seq__25552_25721__$1);
var G__25723 = cljs.core.chunk_rest.call(null,seq__25552_25721__$1);
var G__25724 = c__18782__auto___25722;
var G__25725 = cljs.core.count.call(null,c__18782__auto___25722);
var G__25726 = (0);
seq__25552_25709 = G__25723;
chunk__25553_25710 = G__25724;
count__25554_25711 = G__25725;
i__25555_25712 = G__25726;
continue;
} else {
var vec__25565_25727 = cljs.core.first.call(null,seq__25552_25721__$1);
var col_25728 = cljs.core.nth.call(null,vec__25565_25727,(0),null);
var infos_25729 = cljs.core.nth.call(null,vec__25565_25727,(1),null);
encode_cols.call(null,infos_25729,source_idx_25698,line_25707,col_25728);


var G__25730 = cljs.core.next.call(null,seq__25552_25721__$1);
var G__25731 = null;
var G__25732 = (0);
var G__25733 = (0);
seq__25552_25709 = G__25730;
chunk__25553_25710 = G__25731;
count__25554_25711 = G__25732;
i__25555_25712 = G__25733;
continue;
}
} else {
}
}
break;
}


var G__25734 = seq__25507_25702;
var G__25735 = chunk__25508_25703;
var G__25736 = count__25509_25704;
var G__25737 = (i__25510_25705 + (1));
seq__25507_25702 = G__25734;
chunk__25508_25703 = G__25735;
count__25509_25704 = G__25736;
i__25510_25705 = G__25737;
continue;
} else {
var temp__5457__auto___25738 = cljs.core.seq.call(null,seq__25507_25702);
if(temp__5457__auto___25738){
var seq__25507_25739__$1 = temp__5457__auto___25738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25507_25739__$1)){
var c__18782__auto___25740 = cljs.core.chunk_first.call(null,seq__25507_25739__$1);
var G__25741 = cljs.core.chunk_rest.call(null,seq__25507_25739__$1);
var G__25742 = c__18782__auto___25740;
var G__25743 = cljs.core.count.call(null,c__18782__auto___25740);
var G__25744 = (0);
seq__25507_25702 = G__25741;
chunk__25508_25703 = G__25742;
count__25509_25704 = G__25743;
i__25510_25705 = G__25744;
continue;
} else {
var vec__25568_25745 = cljs.core.first.call(null,seq__25507_25739__$1);
var line_25746 = cljs.core.nth.call(null,vec__25568_25745,(0),null);
var cols_25747 = cljs.core.nth.call(null,vec__25568_25745,(1),null);
var seq__25571_25748 = cljs.core.seq.call(null,cols_25747);
var chunk__25572_25749 = null;
var count__25573_25750 = (0);
var i__25574_25751 = (0);
while(true){
if((i__25574_25751 < count__25573_25750)){
var vec__25581_25752 = cljs.core._nth.call(null,chunk__25572_25749,i__25574_25751);
var col_25753 = cljs.core.nth.call(null,vec__25581_25752,(0),null);
var infos_25754 = cljs.core.nth.call(null,vec__25581_25752,(1),null);
encode_cols.call(null,infos_25754,source_idx_25698,line_25746,col_25753);


var G__25755 = seq__25571_25748;
var G__25756 = chunk__25572_25749;
var G__25757 = count__25573_25750;
var G__25758 = (i__25574_25751 + (1));
seq__25571_25748 = G__25755;
chunk__25572_25749 = G__25756;
count__25573_25750 = G__25757;
i__25574_25751 = G__25758;
continue;
} else {
var temp__5457__auto___25759__$1 = cljs.core.seq.call(null,seq__25571_25748);
if(temp__5457__auto___25759__$1){
var seq__25571_25760__$1 = temp__5457__auto___25759__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25571_25760__$1)){
var c__18782__auto___25761 = cljs.core.chunk_first.call(null,seq__25571_25760__$1);
var G__25762 = cljs.core.chunk_rest.call(null,seq__25571_25760__$1);
var G__25763 = c__18782__auto___25761;
var G__25764 = cljs.core.count.call(null,c__18782__auto___25761);
var G__25765 = (0);
seq__25571_25748 = G__25762;
chunk__25572_25749 = G__25763;
count__25573_25750 = G__25764;
i__25574_25751 = G__25765;
continue;
} else {
var vec__25584_25766 = cljs.core.first.call(null,seq__25571_25760__$1);
var col_25767 = cljs.core.nth.call(null,vec__25584_25766,(0),null);
var infos_25768 = cljs.core.nth.call(null,vec__25584_25766,(1),null);
encode_cols.call(null,infos_25768,source_idx_25698,line_25746,col_25767);


var G__25769 = cljs.core.next.call(null,seq__25571_25760__$1);
var G__25770 = null;
var G__25771 = (0);
var G__25772 = (0);
seq__25571_25748 = G__25769;
chunk__25572_25749 = G__25770;
count__25573_25750 = G__25771;
i__25574_25751 = G__25772;
continue;
}
} else {
}
}
break;
}


var G__25773 = cljs.core.next.call(null,seq__25507_25739__$1);
var G__25774 = null;
var G__25775 = (0);
var G__25776 = (0);
seq__25507_25702 = G__25773;
chunk__25508_25703 = G__25774;
count__25509_25704 = G__25775;
i__25510_25705 = G__25776;
continue;
}
} else {
}
}
break;
}


var G__25777 = seq__25325_25693;
var G__25778 = chunk__25326_25694;
var G__25779 = count__25327_25695;
var G__25780 = (i__25328_25696 + (1));
seq__25325_25693 = G__25777;
chunk__25326_25694 = G__25778;
count__25327_25695 = G__25779;
i__25328_25696 = G__25780;
continue;
} else {
var temp__5457__auto___25781 = cljs.core.seq.call(null,seq__25325_25693);
if(temp__5457__auto___25781){
var seq__25325_25782__$1 = temp__5457__auto___25781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25325_25782__$1)){
var c__18782__auto___25783 = cljs.core.chunk_first.call(null,seq__25325_25782__$1);
var G__25784 = cljs.core.chunk_rest.call(null,seq__25325_25782__$1);
var G__25785 = c__18782__auto___25783;
var G__25786 = cljs.core.count.call(null,c__18782__auto___25783);
var G__25787 = (0);
seq__25325_25693 = G__25784;
chunk__25326_25694 = G__25785;
count__25327_25695 = G__25786;
i__25328_25696 = G__25787;
continue;
} else {
var vec__25587_25788 = cljs.core.first.call(null,seq__25325_25782__$1);
var source_idx_25789 = cljs.core.nth.call(null,vec__25587_25788,(0),null);
var vec__25590_25790 = cljs.core.nth.call(null,vec__25587_25788,(1),null);
var __25791 = cljs.core.nth.call(null,vec__25590_25790,(0),null);
var lines_25792__$1 = cljs.core.nth.call(null,vec__25590_25790,(1),null);
var seq__25593_25793 = cljs.core.seq.call(null,lines_25792__$1);
var chunk__25594_25794 = null;
var count__25595_25795 = (0);
var i__25596_25796 = (0);
while(true){
if((i__25596_25796 < count__25595_25795)){
var vec__25635_25797 = cljs.core._nth.call(null,chunk__25594_25794,i__25596_25796);
var line_25798 = cljs.core.nth.call(null,vec__25635_25797,(0),null);
var cols_25799 = cljs.core.nth.call(null,vec__25635_25797,(1),null);
var seq__25638_25800 = cljs.core.seq.call(null,cols_25799);
var chunk__25639_25801 = null;
var count__25640_25802 = (0);
var i__25641_25803 = (0);
while(true){
if((i__25641_25803 < count__25640_25802)){
var vec__25648_25804 = cljs.core._nth.call(null,chunk__25639_25801,i__25641_25803);
var col_25805 = cljs.core.nth.call(null,vec__25648_25804,(0),null);
var infos_25806 = cljs.core.nth.call(null,vec__25648_25804,(1),null);
encode_cols.call(null,infos_25806,source_idx_25789,line_25798,col_25805);


var G__25807 = seq__25638_25800;
var G__25808 = chunk__25639_25801;
var G__25809 = count__25640_25802;
var G__25810 = (i__25641_25803 + (1));
seq__25638_25800 = G__25807;
chunk__25639_25801 = G__25808;
count__25640_25802 = G__25809;
i__25641_25803 = G__25810;
continue;
} else {
var temp__5457__auto___25811__$1 = cljs.core.seq.call(null,seq__25638_25800);
if(temp__5457__auto___25811__$1){
var seq__25638_25812__$1 = temp__5457__auto___25811__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25638_25812__$1)){
var c__18782__auto___25813 = cljs.core.chunk_first.call(null,seq__25638_25812__$1);
var G__25814 = cljs.core.chunk_rest.call(null,seq__25638_25812__$1);
var G__25815 = c__18782__auto___25813;
var G__25816 = cljs.core.count.call(null,c__18782__auto___25813);
var G__25817 = (0);
seq__25638_25800 = G__25814;
chunk__25639_25801 = G__25815;
count__25640_25802 = G__25816;
i__25641_25803 = G__25817;
continue;
} else {
var vec__25651_25818 = cljs.core.first.call(null,seq__25638_25812__$1);
var col_25819 = cljs.core.nth.call(null,vec__25651_25818,(0),null);
var infos_25820 = cljs.core.nth.call(null,vec__25651_25818,(1),null);
encode_cols.call(null,infos_25820,source_idx_25789,line_25798,col_25819);


var G__25821 = cljs.core.next.call(null,seq__25638_25812__$1);
var G__25822 = null;
var G__25823 = (0);
var G__25824 = (0);
seq__25638_25800 = G__25821;
chunk__25639_25801 = G__25822;
count__25640_25802 = G__25823;
i__25641_25803 = G__25824;
continue;
}
} else {
}
}
break;
}


var G__25825 = seq__25593_25793;
var G__25826 = chunk__25594_25794;
var G__25827 = count__25595_25795;
var G__25828 = (i__25596_25796 + (1));
seq__25593_25793 = G__25825;
chunk__25594_25794 = G__25826;
count__25595_25795 = G__25827;
i__25596_25796 = G__25828;
continue;
} else {
var temp__5457__auto___25829__$1 = cljs.core.seq.call(null,seq__25593_25793);
if(temp__5457__auto___25829__$1){
var seq__25593_25830__$1 = temp__5457__auto___25829__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25593_25830__$1)){
var c__18782__auto___25831 = cljs.core.chunk_first.call(null,seq__25593_25830__$1);
var G__25832 = cljs.core.chunk_rest.call(null,seq__25593_25830__$1);
var G__25833 = c__18782__auto___25831;
var G__25834 = cljs.core.count.call(null,c__18782__auto___25831);
var G__25835 = (0);
seq__25593_25793 = G__25832;
chunk__25594_25794 = G__25833;
count__25595_25795 = G__25834;
i__25596_25796 = G__25835;
continue;
} else {
var vec__25654_25836 = cljs.core.first.call(null,seq__25593_25830__$1);
var line_25837 = cljs.core.nth.call(null,vec__25654_25836,(0),null);
var cols_25838 = cljs.core.nth.call(null,vec__25654_25836,(1),null);
var seq__25657_25839 = cljs.core.seq.call(null,cols_25838);
var chunk__25658_25840 = null;
var count__25659_25841 = (0);
var i__25660_25842 = (0);
while(true){
if((i__25660_25842 < count__25659_25841)){
var vec__25667_25843 = cljs.core._nth.call(null,chunk__25658_25840,i__25660_25842);
var col_25844 = cljs.core.nth.call(null,vec__25667_25843,(0),null);
var infos_25845 = cljs.core.nth.call(null,vec__25667_25843,(1),null);
encode_cols.call(null,infos_25845,source_idx_25789,line_25837,col_25844);


var G__25846 = seq__25657_25839;
var G__25847 = chunk__25658_25840;
var G__25848 = count__25659_25841;
var G__25849 = (i__25660_25842 + (1));
seq__25657_25839 = G__25846;
chunk__25658_25840 = G__25847;
count__25659_25841 = G__25848;
i__25660_25842 = G__25849;
continue;
} else {
var temp__5457__auto___25850__$2 = cljs.core.seq.call(null,seq__25657_25839);
if(temp__5457__auto___25850__$2){
var seq__25657_25851__$1 = temp__5457__auto___25850__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25657_25851__$1)){
var c__18782__auto___25852 = cljs.core.chunk_first.call(null,seq__25657_25851__$1);
var G__25853 = cljs.core.chunk_rest.call(null,seq__25657_25851__$1);
var G__25854 = c__18782__auto___25852;
var G__25855 = cljs.core.count.call(null,c__18782__auto___25852);
var G__25856 = (0);
seq__25657_25839 = G__25853;
chunk__25658_25840 = G__25854;
count__25659_25841 = G__25855;
i__25660_25842 = G__25856;
continue;
} else {
var vec__25670_25857 = cljs.core.first.call(null,seq__25657_25851__$1);
var col_25858 = cljs.core.nth.call(null,vec__25670_25857,(0),null);
var infos_25859 = cljs.core.nth.call(null,vec__25670_25857,(1),null);
encode_cols.call(null,infos_25859,source_idx_25789,line_25837,col_25858);


var G__25860 = cljs.core.next.call(null,seq__25657_25851__$1);
var G__25861 = null;
var G__25862 = (0);
var G__25863 = (0);
seq__25657_25839 = G__25860;
chunk__25658_25840 = G__25861;
count__25659_25841 = G__25862;
i__25660_25842 = G__25863;
continue;
}
} else {
}
}
break;
}


var G__25864 = cljs.core.next.call(null,seq__25593_25830__$1);
var G__25865 = null;
var G__25866 = (0);
var G__25867 = (0);
seq__25593_25793 = G__25864;
chunk__25594_25794 = G__25865;
count__25595_25795 = G__25866;
i__25596_25796 = G__25867;
continue;
}
} else {
}
}
break;
}


var G__25868 = cljs.core.next.call(null,seq__25325_25782__$1);
var G__25869 = null;
var G__25870 = (0);
var G__25871 = (0);
seq__25325_25693 = G__25868;
chunk__25326_25694 = G__25869;
count__25327_25695 = G__25870;
i__25328_25696 = G__25871;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__25673 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25318_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25318_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25319_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__25319_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25320_SHARP_){
return clojure.string.join.call(null,",",p1__25320_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__25674 = G__25673;
goog.object.set(G__25674,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__25674;
} else {
return G__25673;
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
var vec__25872 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__25872,(0),null);
var col_map = cljs.core.nth.call(null,vec__25872,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__25875 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__25875,(0),null);
var infos = cljs.core.nth.call(null,vec__25875,(1),null);
var G__25881 = cljs.core.next.call(null,col_map_seq);
var G__25882 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__25875,col,infos,vec__25872,line,col_map){
return (function (v,p__25878){
var map__25879 = p__25878;
var map__25879__$1 = (((((!((map__25879 == null))))?(((((map__25879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25879):map__25879);
var gline = cljs.core.get.call(null,map__25879__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__25879__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__25875,col,infos,vec__25872,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__25881;
new_cols = G__25882;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__25883 = cljs.core.next.call(null,line_map_seq);
var G__25884 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__25883;
new_lines = G__25884;
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
var seq__25885_26157 = cljs.core.seq.call(null,reverse_map);
var chunk__25886_26158 = null;
var count__25887_26159 = (0);
var i__25888_26160 = (0);
while(true){
if((i__25888_26160 < count__25887_26159)){
var vec__26023_26161 = cljs.core._nth.call(null,chunk__25886_26158,i__25888_26160);
var line_26162 = cljs.core.nth.call(null,vec__26023_26161,(0),null);
var columns_26163 = cljs.core.nth.call(null,vec__26023_26161,(1),null);
var seq__26026_26164 = cljs.core.seq.call(null,columns_26163);
var chunk__26027_26165 = null;
var count__26028_26166 = (0);
var i__26029_26167 = (0);
while(true){
if((i__26029_26167 < count__26028_26166)){
var vec__26060_26168 = cljs.core._nth.call(null,chunk__26027_26165,i__26029_26167);
var column_26169 = cljs.core.nth.call(null,vec__26060_26168,(0),null);
var column_info_26170 = cljs.core.nth.call(null,vec__26060_26168,(1),null);
var seq__26063_26171 = cljs.core.seq.call(null,column_info_26170);
var chunk__26064_26172 = null;
var count__26065_26173 = (0);
var i__26066_26174 = (0);
while(true){
if((i__26066_26174 < count__26065_26173)){
var map__26071_26175 = cljs.core._nth.call(null,chunk__26064_26172,i__26066_26174);
var map__26071_26176__$1 = (((((!((map__26071_26175 == null))))?(((((map__26071_26175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26071_26175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26071_26175):map__26071_26175);
var gline_26177 = cljs.core.get.call(null,map__26071_26176__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26178 = cljs.core.get.call(null,map__26071_26176__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26179 = cljs.core.get.call(null,map__26071_26176__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26177], null),cljs.core.fnil.call(null,((function (seq__26063_26171,chunk__26064_26172,count__26065_26173,i__26066_26174,seq__26026_26164,chunk__26027_26165,count__26028_26166,i__26029_26167,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26071_26175,map__26071_26176__$1,gline_26177,gcol_26178,name_26179,vec__26060_26168,column_26169,column_info_26170,vec__26023_26161,line_26162,columns_26163,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26178], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26162,new cljs.core.Keyword(null,"col","col",-1959363084),column_26169,new cljs.core.Keyword(null,"name","name",1843675177),name_26179], null));
});})(seq__26063_26171,chunk__26064_26172,count__26065_26173,i__26066_26174,seq__26026_26164,chunk__26027_26165,count__26028_26166,i__26029_26167,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26071_26175,map__26071_26176__$1,gline_26177,gcol_26178,name_26179,vec__26060_26168,column_26169,column_info_26170,vec__26023_26161,line_26162,columns_26163,inverted))
,cljs.core.sorted_map.call(null)));


var G__26180 = seq__26063_26171;
var G__26181 = chunk__26064_26172;
var G__26182 = count__26065_26173;
var G__26183 = (i__26066_26174 + (1));
seq__26063_26171 = G__26180;
chunk__26064_26172 = G__26181;
count__26065_26173 = G__26182;
i__26066_26174 = G__26183;
continue;
} else {
var temp__5457__auto___26184 = cljs.core.seq.call(null,seq__26063_26171);
if(temp__5457__auto___26184){
var seq__26063_26185__$1 = temp__5457__auto___26184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26063_26185__$1)){
var c__18782__auto___26186 = cljs.core.chunk_first.call(null,seq__26063_26185__$1);
var G__26187 = cljs.core.chunk_rest.call(null,seq__26063_26185__$1);
var G__26188 = c__18782__auto___26186;
var G__26189 = cljs.core.count.call(null,c__18782__auto___26186);
var G__26190 = (0);
seq__26063_26171 = G__26187;
chunk__26064_26172 = G__26188;
count__26065_26173 = G__26189;
i__26066_26174 = G__26190;
continue;
} else {
var map__26073_26191 = cljs.core.first.call(null,seq__26063_26185__$1);
var map__26073_26192__$1 = (((((!((map__26073_26191 == null))))?(((((map__26073_26191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26073_26191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26073_26191):map__26073_26191);
var gline_26193 = cljs.core.get.call(null,map__26073_26192__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26194 = cljs.core.get.call(null,map__26073_26192__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26195 = cljs.core.get.call(null,map__26073_26192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26193], null),cljs.core.fnil.call(null,((function (seq__26063_26171,chunk__26064_26172,count__26065_26173,i__26066_26174,seq__26026_26164,chunk__26027_26165,count__26028_26166,i__26029_26167,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26073_26191,map__26073_26192__$1,gline_26193,gcol_26194,name_26195,seq__26063_26185__$1,temp__5457__auto___26184,vec__26060_26168,column_26169,column_info_26170,vec__26023_26161,line_26162,columns_26163,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26194], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26162,new cljs.core.Keyword(null,"col","col",-1959363084),column_26169,new cljs.core.Keyword(null,"name","name",1843675177),name_26195], null));
});})(seq__26063_26171,chunk__26064_26172,count__26065_26173,i__26066_26174,seq__26026_26164,chunk__26027_26165,count__26028_26166,i__26029_26167,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26073_26191,map__26073_26192__$1,gline_26193,gcol_26194,name_26195,seq__26063_26185__$1,temp__5457__auto___26184,vec__26060_26168,column_26169,column_info_26170,vec__26023_26161,line_26162,columns_26163,inverted))
,cljs.core.sorted_map.call(null)));


var G__26196 = cljs.core.next.call(null,seq__26063_26185__$1);
var G__26197 = null;
var G__26198 = (0);
var G__26199 = (0);
seq__26063_26171 = G__26196;
chunk__26064_26172 = G__26197;
count__26065_26173 = G__26198;
i__26066_26174 = G__26199;
continue;
}
} else {
}
}
break;
}


var G__26200 = seq__26026_26164;
var G__26201 = chunk__26027_26165;
var G__26202 = count__26028_26166;
var G__26203 = (i__26029_26167 + (1));
seq__26026_26164 = G__26200;
chunk__26027_26165 = G__26201;
count__26028_26166 = G__26202;
i__26029_26167 = G__26203;
continue;
} else {
var temp__5457__auto___26204 = cljs.core.seq.call(null,seq__26026_26164);
if(temp__5457__auto___26204){
var seq__26026_26205__$1 = temp__5457__auto___26204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26026_26205__$1)){
var c__18782__auto___26206 = cljs.core.chunk_first.call(null,seq__26026_26205__$1);
var G__26207 = cljs.core.chunk_rest.call(null,seq__26026_26205__$1);
var G__26208 = c__18782__auto___26206;
var G__26209 = cljs.core.count.call(null,c__18782__auto___26206);
var G__26210 = (0);
seq__26026_26164 = G__26207;
chunk__26027_26165 = G__26208;
count__26028_26166 = G__26209;
i__26029_26167 = G__26210;
continue;
} else {
var vec__26075_26211 = cljs.core.first.call(null,seq__26026_26205__$1);
var column_26212 = cljs.core.nth.call(null,vec__26075_26211,(0),null);
var column_info_26213 = cljs.core.nth.call(null,vec__26075_26211,(1),null);
var seq__26078_26214 = cljs.core.seq.call(null,column_info_26213);
var chunk__26079_26215 = null;
var count__26080_26216 = (0);
var i__26081_26217 = (0);
while(true){
if((i__26081_26217 < count__26080_26216)){
var map__26086_26218 = cljs.core._nth.call(null,chunk__26079_26215,i__26081_26217);
var map__26086_26219__$1 = (((((!((map__26086_26218 == null))))?(((((map__26086_26218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26086_26218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26086_26218):map__26086_26218);
var gline_26220 = cljs.core.get.call(null,map__26086_26219__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26221 = cljs.core.get.call(null,map__26086_26219__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26222 = cljs.core.get.call(null,map__26086_26219__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26220], null),cljs.core.fnil.call(null,((function (seq__26078_26214,chunk__26079_26215,count__26080_26216,i__26081_26217,seq__26026_26164,chunk__26027_26165,count__26028_26166,i__26029_26167,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26086_26218,map__26086_26219__$1,gline_26220,gcol_26221,name_26222,vec__26075_26211,column_26212,column_info_26213,seq__26026_26205__$1,temp__5457__auto___26204,vec__26023_26161,line_26162,columns_26163,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26221], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26162,new cljs.core.Keyword(null,"col","col",-1959363084),column_26212,new cljs.core.Keyword(null,"name","name",1843675177),name_26222], null));
});})(seq__26078_26214,chunk__26079_26215,count__26080_26216,i__26081_26217,seq__26026_26164,chunk__26027_26165,count__26028_26166,i__26029_26167,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26086_26218,map__26086_26219__$1,gline_26220,gcol_26221,name_26222,vec__26075_26211,column_26212,column_info_26213,seq__26026_26205__$1,temp__5457__auto___26204,vec__26023_26161,line_26162,columns_26163,inverted))
,cljs.core.sorted_map.call(null)));


var G__26223 = seq__26078_26214;
var G__26224 = chunk__26079_26215;
var G__26225 = count__26080_26216;
var G__26226 = (i__26081_26217 + (1));
seq__26078_26214 = G__26223;
chunk__26079_26215 = G__26224;
count__26080_26216 = G__26225;
i__26081_26217 = G__26226;
continue;
} else {
var temp__5457__auto___26227__$1 = cljs.core.seq.call(null,seq__26078_26214);
if(temp__5457__auto___26227__$1){
var seq__26078_26228__$1 = temp__5457__auto___26227__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26078_26228__$1)){
var c__18782__auto___26229 = cljs.core.chunk_first.call(null,seq__26078_26228__$1);
var G__26230 = cljs.core.chunk_rest.call(null,seq__26078_26228__$1);
var G__26231 = c__18782__auto___26229;
var G__26232 = cljs.core.count.call(null,c__18782__auto___26229);
var G__26233 = (0);
seq__26078_26214 = G__26230;
chunk__26079_26215 = G__26231;
count__26080_26216 = G__26232;
i__26081_26217 = G__26233;
continue;
} else {
var map__26088_26234 = cljs.core.first.call(null,seq__26078_26228__$1);
var map__26088_26235__$1 = (((((!((map__26088_26234 == null))))?(((((map__26088_26234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26088_26234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26088_26234):map__26088_26234);
var gline_26236 = cljs.core.get.call(null,map__26088_26235__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26237 = cljs.core.get.call(null,map__26088_26235__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26238 = cljs.core.get.call(null,map__26088_26235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26236], null),cljs.core.fnil.call(null,((function (seq__26078_26214,chunk__26079_26215,count__26080_26216,i__26081_26217,seq__26026_26164,chunk__26027_26165,count__26028_26166,i__26029_26167,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26088_26234,map__26088_26235__$1,gline_26236,gcol_26237,name_26238,seq__26078_26228__$1,temp__5457__auto___26227__$1,vec__26075_26211,column_26212,column_info_26213,seq__26026_26205__$1,temp__5457__auto___26204,vec__26023_26161,line_26162,columns_26163,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26237], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26162,new cljs.core.Keyword(null,"col","col",-1959363084),column_26212,new cljs.core.Keyword(null,"name","name",1843675177),name_26238], null));
});})(seq__26078_26214,chunk__26079_26215,count__26080_26216,i__26081_26217,seq__26026_26164,chunk__26027_26165,count__26028_26166,i__26029_26167,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26088_26234,map__26088_26235__$1,gline_26236,gcol_26237,name_26238,seq__26078_26228__$1,temp__5457__auto___26227__$1,vec__26075_26211,column_26212,column_info_26213,seq__26026_26205__$1,temp__5457__auto___26204,vec__26023_26161,line_26162,columns_26163,inverted))
,cljs.core.sorted_map.call(null)));


var G__26239 = cljs.core.next.call(null,seq__26078_26228__$1);
var G__26240 = null;
var G__26241 = (0);
var G__26242 = (0);
seq__26078_26214 = G__26239;
chunk__26079_26215 = G__26240;
count__26080_26216 = G__26241;
i__26081_26217 = G__26242;
continue;
}
} else {
}
}
break;
}


var G__26243 = cljs.core.next.call(null,seq__26026_26205__$1);
var G__26244 = null;
var G__26245 = (0);
var G__26246 = (0);
seq__26026_26164 = G__26243;
chunk__26027_26165 = G__26244;
count__26028_26166 = G__26245;
i__26029_26167 = G__26246;
continue;
}
} else {
}
}
break;
}


var G__26247 = seq__25885_26157;
var G__26248 = chunk__25886_26158;
var G__26249 = count__25887_26159;
var G__26250 = (i__25888_26160 + (1));
seq__25885_26157 = G__26247;
chunk__25886_26158 = G__26248;
count__25887_26159 = G__26249;
i__25888_26160 = G__26250;
continue;
} else {
var temp__5457__auto___26251 = cljs.core.seq.call(null,seq__25885_26157);
if(temp__5457__auto___26251){
var seq__25885_26252__$1 = temp__5457__auto___26251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25885_26252__$1)){
var c__18782__auto___26253 = cljs.core.chunk_first.call(null,seq__25885_26252__$1);
var G__26254 = cljs.core.chunk_rest.call(null,seq__25885_26252__$1);
var G__26255 = c__18782__auto___26253;
var G__26256 = cljs.core.count.call(null,c__18782__auto___26253);
var G__26257 = (0);
seq__25885_26157 = G__26254;
chunk__25886_26158 = G__26255;
count__25887_26159 = G__26256;
i__25888_26160 = G__26257;
continue;
} else {
var vec__26090_26258 = cljs.core.first.call(null,seq__25885_26252__$1);
var line_26259 = cljs.core.nth.call(null,vec__26090_26258,(0),null);
var columns_26260 = cljs.core.nth.call(null,vec__26090_26258,(1),null);
var seq__26093_26261 = cljs.core.seq.call(null,columns_26260);
var chunk__26094_26262 = null;
var count__26095_26263 = (0);
var i__26096_26264 = (0);
while(true){
if((i__26096_26264 < count__26095_26263)){
var vec__26127_26265 = cljs.core._nth.call(null,chunk__26094_26262,i__26096_26264);
var column_26266 = cljs.core.nth.call(null,vec__26127_26265,(0),null);
var column_info_26267 = cljs.core.nth.call(null,vec__26127_26265,(1),null);
var seq__26130_26268 = cljs.core.seq.call(null,column_info_26267);
var chunk__26131_26269 = null;
var count__26132_26270 = (0);
var i__26133_26271 = (0);
while(true){
if((i__26133_26271 < count__26132_26270)){
var map__26138_26272 = cljs.core._nth.call(null,chunk__26131_26269,i__26133_26271);
var map__26138_26273__$1 = (((((!((map__26138_26272 == null))))?(((((map__26138_26272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26138_26272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26138_26272):map__26138_26272);
var gline_26274 = cljs.core.get.call(null,map__26138_26273__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26275 = cljs.core.get.call(null,map__26138_26273__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26276 = cljs.core.get.call(null,map__26138_26273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26274], null),cljs.core.fnil.call(null,((function (seq__26130_26268,chunk__26131_26269,count__26132_26270,i__26133_26271,seq__26093_26261,chunk__26094_26262,count__26095_26263,i__26096_26264,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26138_26272,map__26138_26273__$1,gline_26274,gcol_26275,name_26276,vec__26127_26265,column_26266,column_info_26267,vec__26090_26258,line_26259,columns_26260,seq__25885_26252__$1,temp__5457__auto___26251,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26275], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26259,new cljs.core.Keyword(null,"col","col",-1959363084),column_26266,new cljs.core.Keyword(null,"name","name",1843675177),name_26276], null));
});})(seq__26130_26268,chunk__26131_26269,count__26132_26270,i__26133_26271,seq__26093_26261,chunk__26094_26262,count__26095_26263,i__26096_26264,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26138_26272,map__26138_26273__$1,gline_26274,gcol_26275,name_26276,vec__26127_26265,column_26266,column_info_26267,vec__26090_26258,line_26259,columns_26260,seq__25885_26252__$1,temp__5457__auto___26251,inverted))
,cljs.core.sorted_map.call(null)));


var G__26277 = seq__26130_26268;
var G__26278 = chunk__26131_26269;
var G__26279 = count__26132_26270;
var G__26280 = (i__26133_26271 + (1));
seq__26130_26268 = G__26277;
chunk__26131_26269 = G__26278;
count__26132_26270 = G__26279;
i__26133_26271 = G__26280;
continue;
} else {
var temp__5457__auto___26281__$1 = cljs.core.seq.call(null,seq__26130_26268);
if(temp__5457__auto___26281__$1){
var seq__26130_26282__$1 = temp__5457__auto___26281__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26130_26282__$1)){
var c__18782__auto___26283 = cljs.core.chunk_first.call(null,seq__26130_26282__$1);
var G__26284 = cljs.core.chunk_rest.call(null,seq__26130_26282__$1);
var G__26285 = c__18782__auto___26283;
var G__26286 = cljs.core.count.call(null,c__18782__auto___26283);
var G__26287 = (0);
seq__26130_26268 = G__26284;
chunk__26131_26269 = G__26285;
count__26132_26270 = G__26286;
i__26133_26271 = G__26287;
continue;
} else {
var map__26140_26288 = cljs.core.first.call(null,seq__26130_26282__$1);
var map__26140_26289__$1 = (((((!((map__26140_26288 == null))))?(((((map__26140_26288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26140_26288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26140_26288):map__26140_26288);
var gline_26290 = cljs.core.get.call(null,map__26140_26289__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26291 = cljs.core.get.call(null,map__26140_26289__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26292 = cljs.core.get.call(null,map__26140_26289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26290], null),cljs.core.fnil.call(null,((function (seq__26130_26268,chunk__26131_26269,count__26132_26270,i__26133_26271,seq__26093_26261,chunk__26094_26262,count__26095_26263,i__26096_26264,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26140_26288,map__26140_26289__$1,gline_26290,gcol_26291,name_26292,seq__26130_26282__$1,temp__5457__auto___26281__$1,vec__26127_26265,column_26266,column_info_26267,vec__26090_26258,line_26259,columns_26260,seq__25885_26252__$1,temp__5457__auto___26251,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26291], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26259,new cljs.core.Keyword(null,"col","col",-1959363084),column_26266,new cljs.core.Keyword(null,"name","name",1843675177),name_26292], null));
});})(seq__26130_26268,chunk__26131_26269,count__26132_26270,i__26133_26271,seq__26093_26261,chunk__26094_26262,count__26095_26263,i__26096_26264,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26140_26288,map__26140_26289__$1,gline_26290,gcol_26291,name_26292,seq__26130_26282__$1,temp__5457__auto___26281__$1,vec__26127_26265,column_26266,column_info_26267,vec__26090_26258,line_26259,columns_26260,seq__25885_26252__$1,temp__5457__auto___26251,inverted))
,cljs.core.sorted_map.call(null)));


var G__26293 = cljs.core.next.call(null,seq__26130_26282__$1);
var G__26294 = null;
var G__26295 = (0);
var G__26296 = (0);
seq__26130_26268 = G__26293;
chunk__26131_26269 = G__26294;
count__26132_26270 = G__26295;
i__26133_26271 = G__26296;
continue;
}
} else {
}
}
break;
}


var G__26297 = seq__26093_26261;
var G__26298 = chunk__26094_26262;
var G__26299 = count__26095_26263;
var G__26300 = (i__26096_26264 + (1));
seq__26093_26261 = G__26297;
chunk__26094_26262 = G__26298;
count__26095_26263 = G__26299;
i__26096_26264 = G__26300;
continue;
} else {
var temp__5457__auto___26301__$1 = cljs.core.seq.call(null,seq__26093_26261);
if(temp__5457__auto___26301__$1){
var seq__26093_26302__$1 = temp__5457__auto___26301__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26093_26302__$1)){
var c__18782__auto___26303 = cljs.core.chunk_first.call(null,seq__26093_26302__$1);
var G__26304 = cljs.core.chunk_rest.call(null,seq__26093_26302__$1);
var G__26305 = c__18782__auto___26303;
var G__26306 = cljs.core.count.call(null,c__18782__auto___26303);
var G__26307 = (0);
seq__26093_26261 = G__26304;
chunk__26094_26262 = G__26305;
count__26095_26263 = G__26306;
i__26096_26264 = G__26307;
continue;
} else {
var vec__26142_26308 = cljs.core.first.call(null,seq__26093_26302__$1);
var column_26309 = cljs.core.nth.call(null,vec__26142_26308,(0),null);
var column_info_26310 = cljs.core.nth.call(null,vec__26142_26308,(1),null);
var seq__26145_26311 = cljs.core.seq.call(null,column_info_26310);
var chunk__26146_26312 = null;
var count__26147_26313 = (0);
var i__26148_26314 = (0);
while(true){
if((i__26148_26314 < count__26147_26313)){
var map__26153_26315 = cljs.core._nth.call(null,chunk__26146_26312,i__26148_26314);
var map__26153_26316__$1 = (((((!((map__26153_26315 == null))))?(((((map__26153_26315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26153_26315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26153_26315):map__26153_26315);
var gline_26317 = cljs.core.get.call(null,map__26153_26316__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26318 = cljs.core.get.call(null,map__26153_26316__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26319 = cljs.core.get.call(null,map__26153_26316__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26317], null),cljs.core.fnil.call(null,((function (seq__26145_26311,chunk__26146_26312,count__26147_26313,i__26148_26314,seq__26093_26261,chunk__26094_26262,count__26095_26263,i__26096_26264,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26153_26315,map__26153_26316__$1,gline_26317,gcol_26318,name_26319,vec__26142_26308,column_26309,column_info_26310,seq__26093_26302__$1,temp__5457__auto___26301__$1,vec__26090_26258,line_26259,columns_26260,seq__25885_26252__$1,temp__5457__auto___26251,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26318], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26259,new cljs.core.Keyword(null,"col","col",-1959363084),column_26309,new cljs.core.Keyword(null,"name","name",1843675177),name_26319], null));
});})(seq__26145_26311,chunk__26146_26312,count__26147_26313,i__26148_26314,seq__26093_26261,chunk__26094_26262,count__26095_26263,i__26096_26264,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26153_26315,map__26153_26316__$1,gline_26317,gcol_26318,name_26319,vec__26142_26308,column_26309,column_info_26310,seq__26093_26302__$1,temp__5457__auto___26301__$1,vec__26090_26258,line_26259,columns_26260,seq__25885_26252__$1,temp__5457__auto___26251,inverted))
,cljs.core.sorted_map.call(null)));


var G__26320 = seq__26145_26311;
var G__26321 = chunk__26146_26312;
var G__26322 = count__26147_26313;
var G__26323 = (i__26148_26314 + (1));
seq__26145_26311 = G__26320;
chunk__26146_26312 = G__26321;
count__26147_26313 = G__26322;
i__26148_26314 = G__26323;
continue;
} else {
var temp__5457__auto___26324__$2 = cljs.core.seq.call(null,seq__26145_26311);
if(temp__5457__auto___26324__$2){
var seq__26145_26325__$1 = temp__5457__auto___26324__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26145_26325__$1)){
var c__18782__auto___26326 = cljs.core.chunk_first.call(null,seq__26145_26325__$1);
var G__26327 = cljs.core.chunk_rest.call(null,seq__26145_26325__$1);
var G__26328 = c__18782__auto___26326;
var G__26329 = cljs.core.count.call(null,c__18782__auto___26326);
var G__26330 = (0);
seq__26145_26311 = G__26327;
chunk__26146_26312 = G__26328;
count__26147_26313 = G__26329;
i__26148_26314 = G__26330;
continue;
} else {
var map__26155_26331 = cljs.core.first.call(null,seq__26145_26325__$1);
var map__26155_26332__$1 = (((((!((map__26155_26331 == null))))?(((((map__26155_26331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26155_26331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26155_26331):map__26155_26331);
var gline_26333 = cljs.core.get.call(null,map__26155_26332__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26334 = cljs.core.get.call(null,map__26155_26332__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26335 = cljs.core.get.call(null,map__26155_26332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26333], null),cljs.core.fnil.call(null,((function (seq__26145_26311,chunk__26146_26312,count__26147_26313,i__26148_26314,seq__26093_26261,chunk__26094_26262,count__26095_26263,i__26096_26264,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26155_26331,map__26155_26332__$1,gline_26333,gcol_26334,name_26335,seq__26145_26325__$1,temp__5457__auto___26324__$2,vec__26142_26308,column_26309,column_info_26310,seq__26093_26302__$1,temp__5457__auto___26301__$1,vec__26090_26258,line_26259,columns_26260,seq__25885_26252__$1,temp__5457__auto___26251,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26334], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26259,new cljs.core.Keyword(null,"col","col",-1959363084),column_26309,new cljs.core.Keyword(null,"name","name",1843675177),name_26335], null));
});})(seq__26145_26311,chunk__26146_26312,count__26147_26313,i__26148_26314,seq__26093_26261,chunk__26094_26262,count__26095_26263,i__26096_26264,seq__25885_26157,chunk__25886_26158,count__25887_26159,i__25888_26160,map__26155_26331,map__26155_26332__$1,gline_26333,gcol_26334,name_26335,seq__26145_26325__$1,temp__5457__auto___26324__$2,vec__26142_26308,column_26309,column_info_26310,seq__26093_26302__$1,temp__5457__auto___26301__$1,vec__26090_26258,line_26259,columns_26260,seq__25885_26252__$1,temp__5457__auto___26251,inverted))
,cljs.core.sorted_map.call(null)));


var G__26336 = cljs.core.next.call(null,seq__26145_26325__$1);
var G__26337 = null;
var G__26338 = (0);
var G__26339 = (0);
seq__26145_26311 = G__26336;
chunk__26146_26312 = G__26337;
count__26147_26313 = G__26338;
i__26148_26314 = G__26339;
continue;
}
} else {
}
}
break;
}


var G__26340 = cljs.core.next.call(null,seq__26093_26302__$1);
var G__26341 = null;
var G__26342 = (0);
var G__26343 = (0);
seq__26093_26261 = G__26340;
chunk__26094_26262 = G__26341;
count__26095_26263 = G__26342;
i__26096_26264 = G__26343;
continue;
}
} else {
}
}
break;
}


var G__26344 = cljs.core.next.call(null,seq__25885_26252__$1);
var G__26345 = null;
var G__26346 = (0);
var G__26347 = (0);
seq__25885_26157 = G__26344;
chunk__25886_26158 = G__26345;
count__25887_26159 = G__26346;
i__25888_26160 = G__26347;
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
