// Compiled by ClojureScript 1.10.492 {}
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
return cljs.core.reduce.call(null,(function (m,p__12490){
var vec__12491 = p__12490;
var i = cljs.core.nth.call(null,vec__12491,(0),null);
var v = cljs.core.nth.call(null,vec__12491,(1),null);
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
var vec__12494 = seg;
var gcol = cljs.core.nth.call(null,vec__12494,(0),null);
var source = cljs.core.nth.call(null,vec__12494,(1),null);
var line = cljs.core.nth.call(null,vec__12494,(2),null);
var col = cljs.core.nth.call(null,vec__12494,(3),null);
var name = cljs.core.nth.call(null,vec__12494,(4),null);
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
var vec__12497 = seg;
var gcol = cljs.core.nth.call(null,vec__12497,(0),null);
var source = cljs.core.nth.call(null,vec__12497,(1),null);
var line = cljs.core.nth.call(null,vec__12497,(2),null);
var col = cljs.core.nth.call(null,vec__12497,(3),null);
var name = cljs.core.nth.call(null,vec__12497,(4),null);
var vec__12500 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12500,(0),null);
var rsource = cljs.core.nth.call(null,vec__12500,(1),null);
var rline = cljs.core.nth.call(null,vec__12500,(2),null);
var rcol = cljs.core.nth.call(null,vec__12500,(3),null);
var rname = cljs.core.nth.call(null,vec__12500,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4002__auto__ = source;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4002__auto__ = line;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4002__auto__ = col;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4002__auto__ = name;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
var map__12503 = segmap;
var map__12503__$1 = (((((!((map__12503 == null))))?(((((map__12503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12503):map__12503);
var gcol = cljs.core.get.call(null,map__12503__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12503__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12503__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12503__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12503__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12503,map__12503__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12503,map__12503__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12503,map__12503__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12503,map__12503__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12503,map__12503__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12503,map__12503__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__12506 = arguments.length;
switch (G__12506) {
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
var vec__12510 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12514 = cljs.core.next.call(null,segs__$1);
var G__12515 = nrelseg;
var G__12516 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12514;
relseg__$1 = G__12515;
result__$1 = G__12516;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12510,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12510,(1),null);
var G__12517 = (gline + (1));
var G__12518 = cljs.core.next.call(null,lines__$1);
var G__12519 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12520 = result__$1;
gline = G__12517;
lines__$1 = G__12518;
relseg = G__12519;
result = G__12520;
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
var map__12522 = segmap;
var map__12522__$1 = (((((!((map__12522 == null))))?(((((map__12522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12522):map__12522);
var gcol = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12522,map__12522__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12522,map__12522__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12521_SHARP_){
return cljs.core.conj.call(null,p1__12521_SHARP_,d__$1);
});})(map__12522,map__12522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12522,map__12522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__12525 = arguments.length;
switch (G__12525) {
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
var vec__12529 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12533 = cljs.core.next.call(null,segs__$1);
var G__12534 = nrelseg;
var G__12535 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12533;
relseg__$1 = G__12534;
result__$1 = G__12535;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12529,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12529,(1),null);
var G__12536 = (gline + (1));
var G__12537 = cljs.core.next.call(null,lines__$1);
var G__12538 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12539 = result__$1;
gline = G__12536;
lines__$1 = G__12537;
relseg = G__12538;
result = G__12539;
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
return (function (p__12540){
var vec__12541 = p__12540;
var _ = cljs.core.nth.call(null,vec__12541,(0),null);
var source = cljs.core.nth.call(null,vec__12541,(1),null);
var line = cljs.core.nth.call(null,vec__12541,(2),null);
var col = cljs.core.nth.call(null,vec__12541,(3),null);
var name = cljs.core.nth.call(null,vec__12541,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12544){
var vec__12545 = p__12544;
var gcol = cljs.core.nth.call(null,vec__12545,(0),null);
var sidx = cljs.core.nth.call(null,vec__12545,(1),null);
var line = cljs.core.nth.call(null,vec__12545,(2),null);
var col = cljs.core.nth.call(null,vec__12545,(3),null);
var name = cljs.core.nth.call(null,vec__12545,(4),null);
var seg = vec__12545;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12545,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12548){
var vec__12549 = p__12548;
var _ = cljs.core.nth.call(null,vec__12549,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12549,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12549,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12549,(3),null);
var lname = cljs.core.nth.call(null,vec__12549,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4002__auto__ = name;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12545,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__4002__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
var seq__12555 = cljs.core.seq.call(null,infos);
var chunk__12556 = null;
var count__12557 = (0);
var i__12558 = (0);
while(true){
if((i__12558 < count__12557)){
var info = cljs.core._nth.call(null,chunk__12556,i__12558);
var segv_12909 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12910 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12911 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12910 > (lc_12911 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12555,chunk__12556,count__12557,i__12558,segv_12909,gline_12910,lc_12911,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12910 - (lc_12911 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12909], null));
});})(seq__12555,chunk__12556,count__12557,i__12558,segv_12909,gline_12910,lc_12911,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12555,chunk__12556,count__12557,i__12558,segv_12909,gline_12910,lc_12911,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12910], null),cljs.core.conj,segv_12909);
});})(seq__12555,chunk__12556,count__12557,i__12558,segv_12909,gline_12910,lc_12911,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__12912 = seq__12555;
var G__12913 = chunk__12556;
var G__12914 = count__12557;
var G__12915 = (i__12558 + (1));
seq__12555 = G__12912;
chunk__12556 = G__12913;
count__12557 = G__12914;
i__12558 = G__12915;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12555);
if(temp__5720__auto__){
var seq__12555__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12555__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__12555__$1);
var G__12916 = cljs.core.chunk_rest.call(null,seq__12555__$1);
var G__12917 = c__4421__auto__;
var G__12918 = cljs.core.count.call(null,c__4421__auto__);
var G__12919 = (0);
seq__12555 = G__12916;
chunk__12556 = G__12917;
count__12557 = G__12918;
i__12558 = G__12919;
continue;
} else {
var info = cljs.core.first.call(null,seq__12555__$1);
var segv_12920 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12921 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12922 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12921 > (lc_12922 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12555,chunk__12556,count__12557,i__12558,segv_12920,gline_12921,lc_12922,info,seq__12555__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12921 - (lc_12922 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12920], null));
});})(seq__12555,chunk__12556,count__12557,i__12558,segv_12920,gline_12921,lc_12922,info,seq__12555__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12555,chunk__12556,count__12557,i__12558,segv_12920,gline_12921,lc_12922,info,seq__12555__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12921], null),cljs.core.conj,segv_12920);
});})(seq__12555,chunk__12556,count__12557,i__12558,segv_12920,gline_12921,lc_12922,info,seq__12555__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__12923 = cljs.core.next.call(null,seq__12555__$1);
var G__12924 = null;
var G__12925 = (0);
var G__12926 = (0);
seq__12555 = G__12923;
chunk__12556 = G__12924;
count__12557 = G__12925;
i__12558 = G__12926;
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
var seq__12559_12927 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12560_12928 = null;
var count__12561_12929 = (0);
var i__12562_12930 = (0);
while(true){
if((i__12562_12930 < count__12561_12929)){
var vec__12735_12931 = cljs.core._nth.call(null,chunk__12560_12928,i__12562_12930);
var source_idx_12932 = cljs.core.nth.call(null,vec__12735_12931,(0),null);
var vec__12738_12933 = cljs.core.nth.call(null,vec__12735_12931,(1),null);
var __12934 = cljs.core.nth.call(null,vec__12738_12933,(0),null);
var lines_12935__$1 = cljs.core.nth.call(null,vec__12738_12933,(1),null);
var seq__12741_12936 = cljs.core.seq.call(null,lines_12935__$1);
var chunk__12742_12937 = null;
var count__12743_12938 = (0);
var i__12744_12939 = (0);
while(true){
if((i__12744_12939 < count__12743_12938)){
var vec__12783_12940 = cljs.core._nth.call(null,chunk__12742_12937,i__12744_12939);
var line_12941 = cljs.core.nth.call(null,vec__12783_12940,(0),null);
var cols_12942 = cljs.core.nth.call(null,vec__12783_12940,(1),null);
var seq__12786_12943 = cljs.core.seq.call(null,cols_12942);
var chunk__12787_12944 = null;
var count__12788_12945 = (0);
var i__12789_12946 = (0);
while(true){
if((i__12789_12946 < count__12788_12945)){
var vec__12796_12947 = cljs.core._nth.call(null,chunk__12787_12944,i__12789_12946);
var col_12948 = cljs.core.nth.call(null,vec__12796_12947,(0),null);
var infos_12949 = cljs.core.nth.call(null,vec__12796_12947,(1),null);
encode_cols.call(null,infos_12949,source_idx_12932,line_12941,col_12948);


var G__12950 = seq__12786_12943;
var G__12951 = chunk__12787_12944;
var G__12952 = count__12788_12945;
var G__12953 = (i__12789_12946 + (1));
seq__12786_12943 = G__12950;
chunk__12787_12944 = G__12951;
count__12788_12945 = G__12952;
i__12789_12946 = G__12953;
continue;
} else {
var temp__5720__auto___12954 = cljs.core.seq.call(null,seq__12786_12943);
if(temp__5720__auto___12954){
var seq__12786_12955__$1 = temp__5720__auto___12954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12786_12955__$1)){
var c__4421__auto___12956 = cljs.core.chunk_first.call(null,seq__12786_12955__$1);
var G__12957 = cljs.core.chunk_rest.call(null,seq__12786_12955__$1);
var G__12958 = c__4421__auto___12956;
var G__12959 = cljs.core.count.call(null,c__4421__auto___12956);
var G__12960 = (0);
seq__12786_12943 = G__12957;
chunk__12787_12944 = G__12958;
count__12788_12945 = G__12959;
i__12789_12946 = G__12960;
continue;
} else {
var vec__12799_12961 = cljs.core.first.call(null,seq__12786_12955__$1);
var col_12962 = cljs.core.nth.call(null,vec__12799_12961,(0),null);
var infos_12963 = cljs.core.nth.call(null,vec__12799_12961,(1),null);
encode_cols.call(null,infos_12963,source_idx_12932,line_12941,col_12962);


var G__12964 = cljs.core.next.call(null,seq__12786_12955__$1);
var G__12965 = null;
var G__12966 = (0);
var G__12967 = (0);
seq__12786_12943 = G__12964;
chunk__12787_12944 = G__12965;
count__12788_12945 = G__12966;
i__12789_12946 = G__12967;
continue;
}
} else {
}
}
break;
}


var G__12968 = seq__12741_12936;
var G__12969 = chunk__12742_12937;
var G__12970 = count__12743_12938;
var G__12971 = (i__12744_12939 + (1));
seq__12741_12936 = G__12968;
chunk__12742_12937 = G__12969;
count__12743_12938 = G__12970;
i__12744_12939 = G__12971;
continue;
} else {
var temp__5720__auto___12972 = cljs.core.seq.call(null,seq__12741_12936);
if(temp__5720__auto___12972){
var seq__12741_12973__$1 = temp__5720__auto___12972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12741_12973__$1)){
var c__4421__auto___12974 = cljs.core.chunk_first.call(null,seq__12741_12973__$1);
var G__12975 = cljs.core.chunk_rest.call(null,seq__12741_12973__$1);
var G__12976 = c__4421__auto___12974;
var G__12977 = cljs.core.count.call(null,c__4421__auto___12974);
var G__12978 = (0);
seq__12741_12936 = G__12975;
chunk__12742_12937 = G__12976;
count__12743_12938 = G__12977;
i__12744_12939 = G__12978;
continue;
} else {
var vec__12802_12979 = cljs.core.first.call(null,seq__12741_12973__$1);
var line_12980 = cljs.core.nth.call(null,vec__12802_12979,(0),null);
var cols_12981 = cljs.core.nth.call(null,vec__12802_12979,(1),null);
var seq__12805_12982 = cljs.core.seq.call(null,cols_12981);
var chunk__12806_12983 = null;
var count__12807_12984 = (0);
var i__12808_12985 = (0);
while(true){
if((i__12808_12985 < count__12807_12984)){
var vec__12815_12986 = cljs.core._nth.call(null,chunk__12806_12983,i__12808_12985);
var col_12987 = cljs.core.nth.call(null,vec__12815_12986,(0),null);
var infos_12988 = cljs.core.nth.call(null,vec__12815_12986,(1),null);
encode_cols.call(null,infos_12988,source_idx_12932,line_12980,col_12987);


var G__12989 = seq__12805_12982;
var G__12990 = chunk__12806_12983;
var G__12991 = count__12807_12984;
var G__12992 = (i__12808_12985 + (1));
seq__12805_12982 = G__12989;
chunk__12806_12983 = G__12990;
count__12807_12984 = G__12991;
i__12808_12985 = G__12992;
continue;
} else {
var temp__5720__auto___12993__$1 = cljs.core.seq.call(null,seq__12805_12982);
if(temp__5720__auto___12993__$1){
var seq__12805_12994__$1 = temp__5720__auto___12993__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12805_12994__$1)){
var c__4421__auto___12995 = cljs.core.chunk_first.call(null,seq__12805_12994__$1);
var G__12996 = cljs.core.chunk_rest.call(null,seq__12805_12994__$1);
var G__12997 = c__4421__auto___12995;
var G__12998 = cljs.core.count.call(null,c__4421__auto___12995);
var G__12999 = (0);
seq__12805_12982 = G__12996;
chunk__12806_12983 = G__12997;
count__12807_12984 = G__12998;
i__12808_12985 = G__12999;
continue;
} else {
var vec__12818_13000 = cljs.core.first.call(null,seq__12805_12994__$1);
var col_13001 = cljs.core.nth.call(null,vec__12818_13000,(0),null);
var infos_13002 = cljs.core.nth.call(null,vec__12818_13000,(1),null);
encode_cols.call(null,infos_13002,source_idx_12932,line_12980,col_13001);


var G__13003 = cljs.core.next.call(null,seq__12805_12994__$1);
var G__13004 = null;
var G__13005 = (0);
var G__13006 = (0);
seq__12805_12982 = G__13003;
chunk__12806_12983 = G__13004;
count__12807_12984 = G__13005;
i__12808_12985 = G__13006;
continue;
}
} else {
}
}
break;
}


var G__13007 = cljs.core.next.call(null,seq__12741_12973__$1);
var G__13008 = null;
var G__13009 = (0);
var G__13010 = (0);
seq__12741_12936 = G__13007;
chunk__12742_12937 = G__13008;
count__12743_12938 = G__13009;
i__12744_12939 = G__13010;
continue;
}
} else {
}
}
break;
}


var G__13011 = seq__12559_12927;
var G__13012 = chunk__12560_12928;
var G__13013 = count__12561_12929;
var G__13014 = (i__12562_12930 + (1));
seq__12559_12927 = G__13011;
chunk__12560_12928 = G__13012;
count__12561_12929 = G__13013;
i__12562_12930 = G__13014;
continue;
} else {
var temp__5720__auto___13015 = cljs.core.seq.call(null,seq__12559_12927);
if(temp__5720__auto___13015){
var seq__12559_13016__$1 = temp__5720__auto___13015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12559_13016__$1)){
var c__4421__auto___13017 = cljs.core.chunk_first.call(null,seq__12559_13016__$1);
var G__13018 = cljs.core.chunk_rest.call(null,seq__12559_13016__$1);
var G__13019 = c__4421__auto___13017;
var G__13020 = cljs.core.count.call(null,c__4421__auto___13017);
var G__13021 = (0);
seq__12559_12927 = G__13018;
chunk__12560_12928 = G__13019;
count__12561_12929 = G__13020;
i__12562_12930 = G__13021;
continue;
} else {
var vec__12821_13022 = cljs.core.first.call(null,seq__12559_13016__$1);
var source_idx_13023 = cljs.core.nth.call(null,vec__12821_13022,(0),null);
var vec__12824_13024 = cljs.core.nth.call(null,vec__12821_13022,(1),null);
var __13025 = cljs.core.nth.call(null,vec__12824_13024,(0),null);
var lines_13026__$1 = cljs.core.nth.call(null,vec__12824_13024,(1),null);
var seq__12827_13027 = cljs.core.seq.call(null,lines_13026__$1);
var chunk__12828_13028 = null;
var count__12829_13029 = (0);
var i__12830_13030 = (0);
while(true){
if((i__12830_13030 < count__12829_13029)){
var vec__12869_13031 = cljs.core._nth.call(null,chunk__12828_13028,i__12830_13030);
var line_13032 = cljs.core.nth.call(null,vec__12869_13031,(0),null);
var cols_13033 = cljs.core.nth.call(null,vec__12869_13031,(1),null);
var seq__12872_13034 = cljs.core.seq.call(null,cols_13033);
var chunk__12873_13035 = null;
var count__12874_13036 = (0);
var i__12875_13037 = (0);
while(true){
if((i__12875_13037 < count__12874_13036)){
var vec__12882_13038 = cljs.core._nth.call(null,chunk__12873_13035,i__12875_13037);
var col_13039 = cljs.core.nth.call(null,vec__12882_13038,(0),null);
var infos_13040 = cljs.core.nth.call(null,vec__12882_13038,(1),null);
encode_cols.call(null,infos_13040,source_idx_13023,line_13032,col_13039);


var G__13041 = seq__12872_13034;
var G__13042 = chunk__12873_13035;
var G__13043 = count__12874_13036;
var G__13044 = (i__12875_13037 + (1));
seq__12872_13034 = G__13041;
chunk__12873_13035 = G__13042;
count__12874_13036 = G__13043;
i__12875_13037 = G__13044;
continue;
} else {
var temp__5720__auto___13045__$1 = cljs.core.seq.call(null,seq__12872_13034);
if(temp__5720__auto___13045__$1){
var seq__12872_13046__$1 = temp__5720__auto___13045__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12872_13046__$1)){
var c__4421__auto___13047 = cljs.core.chunk_first.call(null,seq__12872_13046__$1);
var G__13048 = cljs.core.chunk_rest.call(null,seq__12872_13046__$1);
var G__13049 = c__4421__auto___13047;
var G__13050 = cljs.core.count.call(null,c__4421__auto___13047);
var G__13051 = (0);
seq__12872_13034 = G__13048;
chunk__12873_13035 = G__13049;
count__12874_13036 = G__13050;
i__12875_13037 = G__13051;
continue;
} else {
var vec__12885_13052 = cljs.core.first.call(null,seq__12872_13046__$1);
var col_13053 = cljs.core.nth.call(null,vec__12885_13052,(0),null);
var infos_13054 = cljs.core.nth.call(null,vec__12885_13052,(1),null);
encode_cols.call(null,infos_13054,source_idx_13023,line_13032,col_13053);


var G__13055 = cljs.core.next.call(null,seq__12872_13046__$1);
var G__13056 = null;
var G__13057 = (0);
var G__13058 = (0);
seq__12872_13034 = G__13055;
chunk__12873_13035 = G__13056;
count__12874_13036 = G__13057;
i__12875_13037 = G__13058;
continue;
}
} else {
}
}
break;
}


var G__13059 = seq__12827_13027;
var G__13060 = chunk__12828_13028;
var G__13061 = count__12829_13029;
var G__13062 = (i__12830_13030 + (1));
seq__12827_13027 = G__13059;
chunk__12828_13028 = G__13060;
count__12829_13029 = G__13061;
i__12830_13030 = G__13062;
continue;
} else {
var temp__5720__auto___13063__$1 = cljs.core.seq.call(null,seq__12827_13027);
if(temp__5720__auto___13063__$1){
var seq__12827_13064__$1 = temp__5720__auto___13063__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12827_13064__$1)){
var c__4421__auto___13065 = cljs.core.chunk_first.call(null,seq__12827_13064__$1);
var G__13066 = cljs.core.chunk_rest.call(null,seq__12827_13064__$1);
var G__13067 = c__4421__auto___13065;
var G__13068 = cljs.core.count.call(null,c__4421__auto___13065);
var G__13069 = (0);
seq__12827_13027 = G__13066;
chunk__12828_13028 = G__13067;
count__12829_13029 = G__13068;
i__12830_13030 = G__13069;
continue;
} else {
var vec__12888_13070 = cljs.core.first.call(null,seq__12827_13064__$1);
var line_13071 = cljs.core.nth.call(null,vec__12888_13070,(0),null);
var cols_13072 = cljs.core.nth.call(null,vec__12888_13070,(1),null);
var seq__12891_13073 = cljs.core.seq.call(null,cols_13072);
var chunk__12892_13074 = null;
var count__12893_13075 = (0);
var i__12894_13076 = (0);
while(true){
if((i__12894_13076 < count__12893_13075)){
var vec__12901_13077 = cljs.core._nth.call(null,chunk__12892_13074,i__12894_13076);
var col_13078 = cljs.core.nth.call(null,vec__12901_13077,(0),null);
var infos_13079 = cljs.core.nth.call(null,vec__12901_13077,(1),null);
encode_cols.call(null,infos_13079,source_idx_13023,line_13071,col_13078);


var G__13080 = seq__12891_13073;
var G__13081 = chunk__12892_13074;
var G__13082 = count__12893_13075;
var G__13083 = (i__12894_13076 + (1));
seq__12891_13073 = G__13080;
chunk__12892_13074 = G__13081;
count__12893_13075 = G__13082;
i__12894_13076 = G__13083;
continue;
} else {
var temp__5720__auto___13084__$2 = cljs.core.seq.call(null,seq__12891_13073);
if(temp__5720__auto___13084__$2){
var seq__12891_13085__$1 = temp__5720__auto___13084__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12891_13085__$1)){
var c__4421__auto___13086 = cljs.core.chunk_first.call(null,seq__12891_13085__$1);
var G__13087 = cljs.core.chunk_rest.call(null,seq__12891_13085__$1);
var G__13088 = c__4421__auto___13086;
var G__13089 = cljs.core.count.call(null,c__4421__auto___13086);
var G__13090 = (0);
seq__12891_13073 = G__13087;
chunk__12892_13074 = G__13088;
count__12893_13075 = G__13089;
i__12894_13076 = G__13090;
continue;
} else {
var vec__12904_13091 = cljs.core.first.call(null,seq__12891_13085__$1);
var col_13092 = cljs.core.nth.call(null,vec__12904_13091,(0),null);
var infos_13093 = cljs.core.nth.call(null,vec__12904_13091,(1),null);
encode_cols.call(null,infos_13093,source_idx_13023,line_13071,col_13092);


var G__13094 = cljs.core.next.call(null,seq__12891_13085__$1);
var G__13095 = null;
var G__13096 = (0);
var G__13097 = (0);
seq__12891_13073 = G__13094;
chunk__12892_13074 = G__13095;
count__12893_13075 = G__13096;
i__12894_13076 = G__13097;
continue;
}
} else {
}
}
break;
}


var G__13098 = cljs.core.next.call(null,seq__12827_13064__$1);
var G__13099 = null;
var G__13100 = (0);
var G__13101 = (0);
seq__12827_13027 = G__13098;
chunk__12828_13028 = G__13099;
count__12829_13029 = G__13100;
i__12830_13030 = G__13101;
continue;
}
} else {
}
}
break;
}


var G__13102 = cljs.core.next.call(null,seq__12559_13016__$1);
var G__13103 = null;
var G__13104 = (0);
var G__13105 = (0);
seq__12559_12927 = G__13102;
chunk__12560_12928 = G__13103;
count__12561_12929 = G__13104;
i__12562_12930 = G__13105;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12907 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12552_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12552_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12553_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12553_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12554_SHARP_){
return clojure.string.join.call(null,",",p1__12554_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12908 = G__12907;
goog.object.set(G__12908,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12908;
} else {
return G__12907;
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
var vec__13106 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__13106,(0),null);
var col_map = cljs.core.nth.call(null,vec__13106,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__13109 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__13109,(0),null);
var infos = cljs.core.nth.call(null,vec__13109,(1),null);
var G__13115 = cljs.core.next.call(null,col_map_seq);
var G__13116 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__13109,col,infos,vec__13106,line,col_map){
return (function (v,p__13112){
var map__13113 = p__13112;
var map__13113__$1 = (((((!((map__13113 == null))))?(((((map__13113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13113):map__13113);
var gline = cljs.core.get.call(null,map__13113__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__13113__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__13109,col,infos,vec__13106,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__13115;
new_cols = G__13116;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__13117 = cljs.core.next.call(null,line_map_seq);
var G__13118 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__13117;
new_lines = G__13118;
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
var seq__13119_13391 = cljs.core.seq.call(null,reverse_map);
var chunk__13120_13392 = null;
var count__13121_13393 = (0);
var i__13122_13394 = (0);
while(true){
if((i__13122_13394 < count__13121_13393)){
var vec__13257_13395 = cljs.core._nth.call(null,chunk__13120_13392,i__13122_13394);
var line_13396 = cljs.core.nth.call(null,vec__13257_13395,(0),null);
var columns_13397 = cljs.core.nth.call(null,vec__13257_13395,(1),null);
var seq__13260_13398 = cljs.core.seq.call(null,columns_13397);
var chunk__13261_13399 = null;
var count__13262_13400 = (0);
var i__13263_13401 = (0);
while(true){
if((i__13263_13401 < count__13262_13400)){
var vec__13294_13402 = cljs.core._nth.call(null,chunk__13261_13399,i__13263_13401);
var column_13403 = cljs.core.nth.call(null,vec__13294_13402,(0),null);
var column_info_13404 = cljs.core.nth.call(null,vec__13294_13402,(1),null);
var seq__13297_13405 = cljs.core.seq.call(null,column_info_13404);
var chunk__13298_13406 = null;
var count__13299_13407 = (0);
var i__13300_13408 = (0);
while(true){
if((i__13300_13408 < count__13299_13407)){
var map__13305_13409 = cljs.core._nth.call(null,chunk__13298_13406,i__13300_13408);
var map__13305_13410__$1 = (((((!((map__13305_13409 == null))))?(((((map__13305_13409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13305_13409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13305_13409):map__13305_13409);
var gline_13411 = cljs.core.get.call(null,map__13305_13410__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13412 = cljs.core.get.call(null,map__13305_13410__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13413 = cljs.core.get.call(null,map__13305_13410__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13411], null),cljs.core.fnil.call(null,((function (seq__13297_13405,chunk__13298_13406,count__13299_13407,i__13300_13408,seq__13260_13398,chunk__13261_13399,count__13262_13400,i__13263_13401,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13305_13409,map__13305_13410__$1,gline_13411,gcol_13412,name_13413,vec__13294_13402,column_13403,column_info_13404,vec__13257_13395,line_13396,columns_13397,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13412], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13396,new cljs.core.Keyword(null,"col","col",-1959363084),column_13403,new cljs.core.Keyword(null,"name","name",1843675177),name_13413], null));
});})(seq__13297_13405,chunk__13298_13406,count__13299_13407,i__13300_13408,seq__13260_13398,chunk__13261_13399,count__13262_13400,i__13263_13401,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13305_13409,map__13305_13410__$1,gline_13411,gcol_13412,name_13413,vec__13294_13402,column_13403,column_info_13404,vec__13257_13395,line_13396,columns_13397,inverted))
,cljs.core.sorted_map.call(null)));


var G__13414 = seq__13297_13405;
var G__13415 = chunk__13298_13406;
var G__13416 = count__13299_13407;
var G__13417 = (i__13300_13408 + (1));
seq__13297_13405 = G__13414;
chunk__13298_13406 = G__13415;
count__13299_13407 = G__13416;
i__13300_13408 = G__13417;
continue;
} else {
var temp__5720__auto___13418 = cljs.core.seq.call(null,seq__13297_13405);
if(temp__5720__auto___13418){
var seq__13297_13419__$1 = temp__5720__auto___13418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13297_13419__$1)){
var c__4421__auto___13420 = cljs.core.chunk_first.call(null,seq__13297_13419__$1);
var G__13421 = cljs.core.chunk_rest.call(null,seq__13297_13419__$1);
var G__13422 = c__4421__auto___13420;
var G__13423 = cljs.core.count.call(null,c__4421__auto___13420);
var G__13424 = (0);
seq__13297_13405 = G__13421;
chunk__13298_13406 = G__13422;
count__13299_13407 = G__13423;
i__13300_13408 = G__13424;
continue;
} else {
var map__13307_13425 = cljs.core.first.call(null,seq__13297_13419__$1);
var map__13307_13426__$1 = (((((!((map__13307_13425 == null))))?(((((map__13307_13425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13307_13425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13307_13425):map__13307_13425);
var gline_13427 = cljs.core.get.call(null,map__13307_13426__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13428 = cljs.core.get.call(null,map__13307_13426__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13429 = cljs.core.get.call(null,map__13307_13426__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13427], null),cljs.core.fnil.call(null,((function (seq__13297_13405,chunk__13298_13406,count__13299_13407,i__13300_13408,seq__13260_13398,chunk__13261_13399,count__13262_13400,i__13263_13401,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13307_13425,map__13307_13426__$1,gline_13427,gcol_13428,name_13429,seq__13297_13419__$1,temp__5720__auto___13418,vec__13294_13402,column_13403,column_info_13404,vec__13257_13395,line_13396,columns_13397,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13428], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13396,new cljs.core.Keyword(null,"col","col",-1959363084),column_13403,new cljs.core.Keyword(null,"name","name",1843675177),name_13429], null));
});})(seq__13297_13405,chunk__13298_13406,count__13299_13407,i__13300_13408,seq__13260_13398,chunk__13261_13399,count__13262_13400,i__13263_13401,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13307_13425,map__13307_13426__$1,gline_13427,gcol_13428,name_13429,seq__13297_13419__$1,temp__5720__auto___13418,vec__13294_13402,column_13403,column_info_13404,vec__13257_13395,line_13396,columns_13397,inverted))
,cljs.core.sorted_map.call(null)));


var G__13430 = cljs.core.next.call(null,seq__13297_13419__$1);
var G__13431 = null;
var G__13432 = (0);
var G__13433 = (0);
seq__13297_13405 = G__13430;
chunk__13298_13406 = G__13431;
count__13299_13407 = G__13432;
i__13300_13408 = G__13433;
continue;
}
} else {
}
}
break;
}


var G__13434 = seq__13260_13398;
var G__13435 = chunk__13261_13399;
var G__13436 = count__13262_13400;
var G__13437 = (i__13263_13401 + (1));
seq__13260_13398 = G__13434;
chunk__13261_13399 = G__13435;
count__13262_13400 = G__13436;
i__13263_13401 = G__13437;
continue;
} else {
var temp__5720__auto___13438 = cljs.core.seq.call(null,seq__13260_13398);
if(temp__5720__auto___13438){
var seq__13260_13439__$1 = temp__5720__auto___13438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13260_13439__$1)){
var c__4421__auto___13440 = cljs.core.chunk_first.call(null,seq__13260_13439__$1);
var G__13441 = cljs.core.chunk_rest.call(null,seq__13260_13439__$1);
var G__13442 = c__4421__auto___13440;
var G__13443 = cljs.core.count.call(null,c__4421__auto___13440);
var G__13444 = (0);
seq__13260_13398 = G__13441;
chunk__13261_13399 = G__13442;
count__13262_13400 = G__13443;
i__13263_13401 = G__13444;
continue;
} else {
var vec__13309_13445 = cljs.core.first.call(null,seq__13260_13439__$1);
var column_13446 = cljs.core.nth.call(null,vec__13309_13445,(0),null);
var column_info_13447 = cljs.core.nth.call(null,vec__13309_13445,(1),null);
var seq__13312_13448 = cljs.core.seq.call(null,column_info_13447);
var chunk__13313_13449 = null;
var count__13314_13450 = (0);
var i__13315_13451 = (0);
while(true){
if((i__13315_13451 < count__13314_13450)){
var map__13320_13452 = cljs.core._nth.call(null,chunk__13313_13449,i__13315_13451);
var map__13320_13453__$1 = (((((!((map__13320_13452 == null))))?(((((map__13320_13452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13320_13452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13320_13452):map__13320_13452);
var gline_13454 = cljs.core.get.call(null,map__13320_13453__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13455 = cljs.core.get.call(null,map__13320_13453__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13456 = cljs.core.get.call(null,map__13320_13453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13454], null),cljs.core.fnil.call(null,((function (seq__13312_13448,chunk__13313_13449,count__13314_13450,i__13315_13451,seq__13260_13398,chunk__13261_13399,count__13262_13400,i__13263_13401,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13320_13452,map__13320_13453__$1,gline_13454,gcol_13455,name_13456,vec__13309_13445,column_13446,column_info_13447,seq__13260_13439__$1,temp__5720__auto___13438,vec__13257_13395,line_13396,columns_13397,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13455], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13396,new cljs.core.Keyword(null,"col","col",-1959363084),column_13446,new cljs.core.Keyword(null,"name","name",1843675177),name_13456], null));
});})(seq__13312_13448,chunk__13313_13449,count__13314_13450,i__13315_13451,seq__13260_13398,chunk__13261_13399,count__13262_13400,i__13263_13401,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13320_13452,map__13320_13453__$1,gline_13454,gcol_13455,name_13456,vec__13309_13445,column_13446,column_info_13447,seq__13260_13439__$1,temp__5720__auto___13438,vec__13257_13395,line_13396,columns_13397,inverted))
,cljs.core.sorted_map.call(null)));


var G__13457 = seq__13312_13448;
var G__13458 = chunk__13313_13449;
var G__13459 = count__13314_13450;
var G__13460 = (i__13315_13451 + (1));
seq__13312_13448 = G__13457;
chunk__13313_13449 = G__13458;
count__13314_13450 = G__13459;
i__13315_13451 = G__13460;
continue;
} else {
var temp__5720__auto___13461__$1 = cljs.core.seq.call(null,seq__13312_13448);
if(temp__5720__auto___13461__$1){
var seq__13312_13462__$1 = temp__5720__auto___13461__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13312_13462__$1)){
var c__4421__auto___13463 = cljs.core.chunk_first.call(null,seq__13312_13462__$1);
var G__13464 = cljs.core.chunk_rest.call(null,seq__13312_13462__$1);
var G__13465 = c__4421__auto___13463;
var G__13466 = cljs.core.count.call(null,c__4421__auto___13463);
var G__13467 = (0);
seq__13312_13448 = G__13464;
chunk__13313_13449 = G__13465;
count__13314_13450 = G__13466;
i__13315_13451 = G__13467;
continue;
} else {
var map__13322_13468 = cljs.core.first.call(null,seq__13312_13462__$1);
var map__13322_13469__$1 = (((((!((map__13322_13468 == null))))?(((((map__13322_13468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13322_13468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13322_13468):map__13322_13468);
var gline_13470 = cljs.core.get.call(null,map__13322_13469__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13471 = cljs.core.get.call(null,map__13322_13469__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13472 = cljs.core.get.call(null,map__13322_13469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13470], null),cljs.core.fnil.call(null,((function (seq__13312_13448,chunk__13313_13449,count__13314_13450,i__13315_13451,seq__13260_13398,chunk__13261_13399,count__13262_13400,i__13263_13401,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13322_13468,map__13322_13469__$1,gline_13470,gcol_13471,name_13472,seq__13312_13462__$1,temp__5720__auto___13461__$1,vec__13309_13445,column_13446,column_info_13447,seq__13260_13439__$1,temp__5720__auto___13438,vec__13257_13395,line_13396,columns_13397,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13471], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13396,new cljs.core.Keyword(null,"col","col",-1959363084),column_13446,new cljs.core.Keyword(null,"name","name",1843675177),name_13472], null));
});})(seq__13312_13448,chunk__13313_13449,count__13314_13450,i__13315_13451,seq__13260_13398,chunk__13261_13399,count__13262_13400,i__13263_13401,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13322_13468,map__13322_13469__$1,gline_13470,gcol_13471,name_13472,seq__13312_13462__$1,temp__5720__auto___13461__$1,vec__13309_13445,column_13446,column_info_13447,seq__13260_13439__$1,temp__5720__auto___13438,vec__13257_13395,line_13396,columns_13397,inverted))
,cljs.core.sorted_map.call(null)));


var G__13473 = cljs.core.next.call(null,seq__13312_13462__$1);
var G__13474 = null;
var G__13475 = (0);
var G__13476 = (0);
seq__13312_13448 = G__13473;
chunk__13313_13449 = G__13474;
count__13314_13450 = G__13475;
i__13315_13451 = G__13476;
continue;
}
} else {
}
}
break;
}


var G__13477 = cljs.core.next.call(null,seq__13260_13439__$1);
var G__13478 = null;
var G__13479 = (0);
var G__13480 = (0);
seq__13260_13398 = G__13477;
chunk__13261_13399 = G__13478;
count__13262_13400 = G__13479;
i__13263_13401 = G__13480;
continue;
}
} else {
}
}
break;
}


var G__13481 = seq__13119_13391;
var G__13482 = chunk__13120_13392;
var G__13483 = count__13121_13393;
var G__13484 = (i__13122_13394 + (1));
seq__13119_13391 = G__13481;
chunk__13120_13392 = G__13482;
count__13121_13393 = G__13483;
i__13122_13394 = G__13484;
continue;
} else {
var temp__5720__auto___13485 = cljs.core.seq.call(null,seq__13119_13391);
if(temp__5720__auto___13485){
var seq__13119_13486__$1 = temp__5720__auto___13485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13119_13486__$1)){
var c__4421__auto___13487 = cljs.core.chunk_first.call(null,seq__13119_13486__$1);
var G__13488 = cljs.core.chunk_rest.call(null,seq__13119_13486__$1);
var G__13489 = c__4421__auto___13487;
var G__13490 = cljs.core.count.call(null,c__4421__auto___13487);
var G__13491 = (0);
seq__13119_13391 = G__13488;
chunk__13120_13392 = G__13489;
count__13121_13393 = G__13490;
i__13122_13394 = G__13491;
continue;
} else {
var vec__13324_13492 = cljs.core.first.call(null,seq__13119_13486__$1);
var line_13493 = cljs.core.nth.call(null,vec__13324_13492,(0),null);
var columns_13494 = cljs.core.nth.call(null,vec__13324_13492,(1),null);
var seq__13327_13495 = cljs.core.seq.call(null,columns_13494);
var chunk__13328_13496 = null;
var count__13329_13497 = (0);
var i__13330_13498 = (0);
while(true){
if((i__13330_13498 < count__13329_13497)){
var vec__13361_13499 = cljs.core._nth.call(null,chunk__13328_13496,i__13330_13498);
var column_13500 = cljs.core.nth.call(null,vec__13361_13499,(0),null);
var column_info_13501 = cljs.core.nth.call(null,vec__13361_13499,(1),null);
var seq__13364_13502 = cljs.core.seq.call(null,column_info_13501);
var chunk__13365_13503 = null;
var count__13366_13504 = (0);
var i__13367_13505 = (0);
while(true){
if((i__13367_13505 < count__13366_13504)){
var map__13372_13506 = cljs.core._nth.call(null,chunk__13365_13503,i__13367_13505);
var map__13372_13507__$1 = (((((!((map__13372_13506 == null))))?(((((map__13372_13506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13372_13506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13372_13506):map__13372_13506);
var gline_13508 = cljs.core.get.call(null,map__13372_13507__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13509 = cljs.core.get.call(null,map__13372_13507__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13510 = cljs.core.get.call(null,map__13372_13507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13508], null),cljs.core.fnil.call(null,((function (seq__13364_13502,chunk__13365_13503,count__13366_13504,i__13367_13505,seq__13327_13495,chunk__13328_13496,count__13329_13497,i__13330_13498,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13372_13506,map__13372_13507__$1,gline_13508,gcol_13509,name_13510,vec__13361_13499,column_13500,column_info_13501,vec__13324_13492,line_13493,columns_13494,seq__13119_13486__$1,temp__5720__auto___13485,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13509], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13493,new cljs.core.Keyword(null,"col","col",-1959363084),column_13500,new cljs.core.Keyword(null,"name","name",1843675177),name_13510], null));
});})(seq__13364_13502,chunk__13365_13503,count__13366_13504,i__13367_13505,seq__13327_13495,chunk__13328_13496,count__13329_13497,i__13330_13498,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13372_13506,map__13372_13507__$1,gline_13508,gcol_13509,name_13510,vec__13361_13499,column_13500,column_info_13501,vec__13324_13492,line_13493,columns_13494,seq__13119_13486__$1,temp__5720__auto___13485,inverted))
,cljs.core.sorted_map.call(null)));


var G__13511 = seq__13364_13502;
var G__13512 = chunk__13365_13503;
var G__13513 = count__13366_13504;
var G__13514 = (i__13367_13505 + (1));
seq__13364_13502 = G__13511;
chunk__13365_13503 = G__13512;
count__13366_13504 = G__13513;
i__13367_13505 = G__13514;
continue;
} else {
var temp__5720__auto___13515__$1 = cljs.core.seq.call(null,seq__13364_13502);
if(temp__5720__auto___13515__$1){
var seq__13364_13516__$1 = temp__5720__auto___13515__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13364_13516__$1)){
var c__4421__auto___13517 = cljs.core.chunk_first.call(null,seq__13364_13516__$1);
var G__13518 = cljs.core.chunk_rest.call(null,seq__13364_13516__$1);
var G__13519 = c__4421__auto___13517;
var G__13520 = cljs.core.count.call(null,c__4421__auto___13517);
var G__13521 = (0);
seq__13364_13502 = G__13518;
chunk__13365_13503 = G__13519;
count__13366_13504 = G__13520;
i__13367_13505 = G__13521;
continue;
} else {
var map__13374_13522 = cljs.core.first.call(null,seq__13364_13516__$1);
var map__13374_13523__$1 = (((((!((map__13374_13522 == null))))?(((((map__13374_13522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13374_13522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13374_13522):map__13374_13522);
var gline_13524 = cljs.core.get.call(null,map__13374_13523__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13525 = cljs.core.get.call(null,map__13374_13523__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13526 = cljs.core.get.call(null,map__13374_13523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13524], null),cljs.core.fnil.call(null,((function (seq__13364_13502,chunk__13365_13503,count__13366_13504,i__13367_13505,seq__13327_13495,chunk__13328_13496,count__13329_13497,i__13330_13498,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13374_13522,map__13374_13523__$1,gline_13524,gcol_13525,name_13526,seq__13364_13516__$1,temp__5720__auto___13515__$1,vec__13361_13499,column_13500,column_info_13501,vec__13324_13492,line_13493,columns_13494,seq__13119_13486__$1,temp__5720__auto___13485,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13525], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13493,new cljs.core.Keyword(null,"col","col",-1959363084),column_13500,new cljs.core.Keyword(null,"name","name",1843675177),name_13526], null));
});})(seq__13364_13502,chunk__13365_13503,count__13366_13504,i__13367_13505,seq__13327_13495,chunk__13328_13496,count__13329_13497,i__13330_13498,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13374_13522,map__13374_13523__$1,gline_13524,gcol_13525,name_13526,seq__13364_13516__$1,temp__5720__auto___13515__$1,vec__13361_13499,column_13500,column_info_13501,vec__13324_13492,line_13493,columns_13494,seq__13119_13486__$1,temp__5720__auto___13485,inverted))
,cljs.core.sorted_map.call(null)));


var G__13527 = cljs.core.next.call(null,seq__13364_13516__$1);
var G__13528 = null;
var G__13529 = (0);
var G__13530 = (0);
seq__13364_13502 = G__13527;
chunk__13365_13503 = G__13528;
count__13366_13504 = G__13529;
i__13367_13505 = G__13530;
continue;
}
} else {
}
}
break;
}


var G__13531 = seq__13327_13495;
var G__13532 = chunk__13328_13496;
var G__13533 = count__13329_13497;
var G__13534 = (i__13330_13498 + (1));
seq__13327_13495 = G__13531;
chunk__13328_13496 = G__13532;
count__13329_13497 = G__13533;
i__13330_13498 = G__13534;
continue;
} else {
var temp__5720__auto___13535__$1 = cljs.core.seq.call(null,seq__13327_13495);
if(temp__5720__auto___13535__$1){
var seq__13327_13536__$1 = temp__5720__auto___13535__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13327_13536__$1)){
var c__4421__auto___13537 = cljs.core.chunk_first.call(null,seq__13327_13536__$1);
var G__13538 = cljs.core.chunk_rest.call(null,seq__13327_13536__$1);
var G__13539 = c__4421__auto___13537;
var G__13540 = cljs.core.count.call(null,c__4421__auto___13537);
var G__13541 = (0);
seq__13327_13495 = G__13538;
chunk__13328_13496 = G__13539;
count__13329_13497 = G__13540;
i__13330_13498 = G__13541;
continue;
} else {
var vec__13376_13542 = cljs.core.first.call(null,seq__13327_13536__$1);
var column_13543 = cljs.core.nth.call(null,vec__13376_13542,(0),null);
var column_info_13544 = cljs.core.nth.call(null,vec__13376_13542,(1),null);
var seq__13379_13545 = cljs.core.seq.call(null,column_info_13544);
var chunk__13380_13546 = null;
var count__13381_13547 = (0);
var i__13382_13548 = (0);
while(true){
if((i__13382_13548 < count__13381_13547)){
var map__13387_13549 = cljs.core._nth.call(null,chunk__13380_13546,i__13382_13548);
var map__13387_13550__$1 = (((((!((map__13387_13549 == null))))?(((((map__13387_13549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13387_13549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13387_13549):map__13387_13549);
var gline_13551 = cljs.core.get.call(null,map__13387_13550__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13552 = cljs.core.get.call(null,map__13387_13550__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13553 = cljs.core.get.call(null,map__13387_13550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13551], null),cljs.core.fnil.call(null,((function (seq__13379_13545,chunk__13380_13546,count__13381_13547,i__13382_13548,seq__13327_13495,chunk__13328_13496,count__13329_13497,i__13330_13498,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13387_13549,map__13387_13550__$1,gline_13551,gcol_13552,name_13553,vec__13376_13542,column_13543,column_info_13544,seq__13327_13536__$1,temp__5720__auto___13535__$1,vec__13324_13492,line_13493,columns_13494,seq__13119_13486__$1,temp__5720__auto___13485,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13552], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13493,new cljs.core.Keyword(null,"col","col",-1959363084),column_13543,new cljs.core.Keyword(null,"name","name",1843675177),name_13553], null));
});})(seq__13379_13545,chunk__13380_13546,count__13381_13547,i__13382_13548,seq__13327_13495,chunk__13328_13496,count__13329_13497,i__13330_13498,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13387_13549,map__13387_13550__$1,gline_13551,gcol_13552,name_13553,vec__13376_13542,column_13543,column_info_13544,seq__13327_13536__$1,temp__5720__auto___13535__$1,vec__13324_13492,line_13493,columns_13494,seq__13119_13486__$1,temp__5720__auto___13485,inverted))
,cljs.core.sorted_map.call(null)));


var G__13554 = seq__13379_13545;
var G__13555 = chunk__13380_13546;
var G__13556 = count__13381_13547;
var G__13557 = (i__13382_13548 + (1));
seq__13379_13545 = G__13554;
chunk__13380_13546 = G__13555;
count__13381_13547 = G__13556;
i__13382_13548 = G__13557;
continue;
} else {
var temp__5720__auto___13558__$2 = cljs.core.seq.call(null,seq__13379_13545);
if(temp__5720__auto___13558__$2){
var seq__13379_13559__$1 = temp__5720__auto___13558__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13379_13559__$1)){
var c__4421__auto___13560 = cljs.core.chunk_first.call(null,seq__13379_13559__$1);
var G__13561 = cljs.core.chunk_rest.call(null,seq__13379_13559__$1);
var G__13562 = c__4421__auto___13560;
var G__13563 = cljs.core.count.call(null,c__4421__auto___13560);
var G__13564 = (0);
seq__13379_13545 = G__13561;
chunk__13380_13546 = G__13562;
count__13381_13547 = G__13563;
i__13382_13548 = G__13564;
continue;
} else {
var map__13389_13565 = cljs.core.first.call(null,seq__13379_13559__$1);
var map__13389_13566__$1 = (((((!((map__13389_13565 == null))))?(((((map__13389_13565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13389_13565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13389_13565):map__13389_13565);
var gline_13567 = cljs.core.get.call(null,map__13389_13566__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13568 = cljs.core.get.call(null,map__13389_13566__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13569 = cljs.core.get.call(null,map__13389_13566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13567], null),cljs.core.fnil.call(null,((function (seq__13379_13545,chunk__13380_13546,count__13381_13547,i__13382_13548,seq__13327_13495,chunk__13328_13496,count__13329_13497,i__13330_13498,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13389_13565,map__13389_13566__$1,gline_13567,gcol_13568,name_13569,seq__13379_13559__$1,temp__5720__auto___13558__$2,vec__13376_13542,column_13543,column_info_13544,seq__13327_13536__$1,temp__5720__auto___13535__$1,vec__13324_13492,line_13493,columns_13494,seq__13119_13486__$1,temp__5720__auto___13485,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13568], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13493,new cljs.core.Keyword(null,"col","col",-1959363084),column_13543,new cljs.core.Keyword(null,"name","name",1843675177),name_13569], null));
});})(seq__13379_13545,chunk__13380_13546,count__13381_13547,i__13382_13548,seq__13327_13495,chunk__13328_13496,count__13329_13497,i__13330_13498,seq__13119_13391,chunk__13120_13392,count__13121_13393,i__13122_13394,map__13389_13565,map__13389_13566__$1,gline_13567,gcol_13568,name_13569,seq__13379_13559__$1,temp__5720__auto___13558__$2,vec__13376_13542,column_13543,column_info_13544,seq__13327_13536__$1,temp__5720__auto___13535__$1,vec__13324_13492,line_13493,columns_13494,seq__13119_13486__$1,temp__5720__auto___13485,inverted))
,cljs.core.sorted_map.call(null)));


var G__13570 = cljs.core.next.call(null,seq__13379_13559__$1);
var G__13571 = null;
var G__13572 = (0);
var G__13573 = (0);
seq__13379_13545 = G__13570;
chunk__13380_13546 = G__13571;
count__13381_13547 = G__13572;
i__13382_13548 = G__13573;
continue;
}
} else {
}
}
break;
}


var G__13574 = cljs.core.next.call(null,seq__13327_13536__$1);
var G__13575 = null;
var G__13576 = (0);
var G__13577 = (0);
seq__13327_13495 = G__13574;
chunk__13328_13496 = G__13575;
count__13329_13497 = G__13576;
i__13330_13498 = G__13577;
continue;
}
} else {
}
}
break;
}


var G__13578 = cljs.core.next.call(null,seq__13119_13486__$1);
var G__13579 = null;
var G__13580 = (0);
var G__13581 = (0);
seq__13119_13391 = G__13578;
chunk__13120_13392 = G__13579;
count__13121_13393 = G__13580;
i__13122_13394 = G__13581;
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
