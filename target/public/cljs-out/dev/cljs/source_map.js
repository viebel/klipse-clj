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
return cljs.core.reduce.call(null,(function (m,p__12752){
var vec__12753 = p__12752;
var i = cljs.core.nth.call(null,vec__12753,(0),null);
var v = cljs.core.nth.call(null,vec__12753,(1),null);
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
var vec__12756 = seg;
var gcol = cljs.core.nth.call(null,vec__12756,(0),null);
var source = cljs.core.nth.call(null,vec__12756,(1),null);
var line = cljs.core.nth.call(null,vec__12756,(2),null);
var col = cljs.core.nth.call(null,vec__12756,(3),null);
var name = cljs.core.nth.call(null,vec__12756,(4),null);
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
var vec__12759 = seg;
var gcol = cljs.core.nth.call(null,vec__12759,(0),null);
var source = cljs.core.nth.call(null,vec__12759,(1),null);
var line = cljs.core.nth.call(null,vec__12759,(2),null);
var col = cljs.core.nth.call(null,vec__12759,(3),null);
var name = cljs.core.nth.call(null,vec__12759,(4),null);
var vec__12762 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12762,(0),null);
var rsource = cljs.core.nth.call(null,vec__12762,(1),null);
var rline = cljs.core.nth.call(null,vec__12762,(2),null);
var rcol = cljs.core.nth.call(null,vec__12762,(3),null);
var rname = cljs.core.nth.call(null,vec__12762,(4),null);
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
var map__12765 = segmap;
var map__12765__$1 = (((((!((map__12765 == null))))?(((((map__12765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12765):map__12765);
var gcol = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12765,map__12765__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12765,map__12765__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12765,map__12765__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12765,map__12765__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12765,map__12765__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12765,map__12765__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__12768 = arguments.length;
switch (G__12768) {
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
var vec__12772 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12776 = cljs.core.next.call(null,segs__$1);
var G__12777 = nrelseg;
var G__12778 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12776;
relseg__$1 = G__12777;
result__$1 = G__12778;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12772,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12772,(1),null);
var G__12779 = (gline + (1));
var G__12780 = cljs.core.next.call(null,lines__$1);
var G__12781 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12782 = result__$1;
gline = G__12779;
lines__$1 = G__12780;
relseg = G__12781;
result = G__12782;
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
var map__12784 = segmap;
var map__12784__$1 = (((((!((map__12784 == null))))?(((((map__12784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12784):map__12784);
var gcol = cljs.core.get.call(null,map__12784__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12784__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12784__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12784__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12784,map__12784__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12784,map__12784__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12783_SHARP_){
return cljs.core.conj.call(null,p1__12783_SHARP_,d__$1);
});})(map__12784,map__12784__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12784,map__12784__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__12787 = arguments.length;
switch (G__12787) {
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
var vec__12791 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12795 = cljs.core.next.call(null,segs__$1);
var G__12796 = nrelseg;
var G__12797 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12795;
relseg__$1 = G__12796;
result__$1 = G__12797;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12791,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12791,(1),null);
var G__12798 = (gline + (1));
var G__12799 = cljs.core.next.call(null,lines__$1);
var G__12800 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12801 = result__$1;
gline = G__12798;
lines__$1 = G__12799;
relseg = G__12800;
result = G__12801;
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
return (function (p__12802){
var vec__12803 = p__12802;
var _ = cljs.core.nth.call(null,vec__12803,(0),null);
var source = cljs.core.nth.call(null,vec__12803,(1),null);
var line = cljs.core.nth.call(null,vec__12803,(2),null);
var col = cljs.core.nth.call(null,vec__12803,(3),null);
var name = cljs.core.nth.call(null,vec__12803,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12806){
var vec__12807 = p__12806;
var gcol = cljs.core.nth.call(null,vec__12807,(0),null);
var sidx = cljs.core.nth.call(null,vec__12807,(1),null);
var line = cljs.core.nth.call(null,vec__12807,(2),null);
var col = cljs.core.nth.call(null,vec__12807,(3),null);
var name = cljs.core.nth.call(null,vec__12807,(4),null);
var seg = vec__12807;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12807,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12810){
var vec__12811 = p__12810;
var _ = cljs.core.nth.call(null,vec__12811,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12811,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12811,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12811,(3),null);
var lname = cljs.core.nth.call(null,vec__12811,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12807,gcol,sidx,line,col,name,seg,relseg))
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
var seq__12817 = cljs.core.seq.call(null,infos);
var chunk__12818 = null;
var count__12819 = (0);
var i__12820 = (0);
while(true){
if((i__12820 < count__12819)){
var info = cljs.core._nth.call(null,chunk__12818,i__12820);
var segv_13171 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13172 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13173 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13172 > (lc_13173 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12817,chunk__12818,count__12819,i__12820,segv_13171,gline_13172,lc_13173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13172 - (lc_13173 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13171], null));
});})(seq__12817,chunk__12818,count__12819,i__12820,segv_13171,gline_13172,lc_13173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12817,chunk__12818,count__12819,i__12820,segv_13171,gline_13172,lc_13173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13172], null),cljs.core.conj,segv_13171);
});})(seq__12817,chunk__12818,count__12819,i__12820,segv_13171,gline_13172,lc_13173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__13174 = seq__12817;
var G__13175 = chunk__12818;
var G__13176 = count__12819;
var G__13177 = (i__12820 + (1));
seq__12817 = G__13174;
chunk__12818 = G__13175;
count__12819 = G__13176;
i__12820 = G__13177;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12817);
if(temp__5720__auto__){
var seq__12817__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12817__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12817__$1);
var G__13178 = cljs.core.chunk_rest.call(null,seq__12817__$1);
var G__13179 = c__4550__auto__;
var G__13180 = cljs.core.count.call(null,c__4550__auto__);
var G__13181 = (0);
seq__12817 = G__13178;
chunk__12818 = G__13179;
count__12819 = G__13180;
i__12820 = G__13181;
continue;
} else {
var info = cljs.core.first.call(null,seq__12817__$1);
var segv_13182 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13183 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13184 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13183 > (lc_13184 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12817,chunk__12818,count__12819,i__12820,segv_13182,gline_13183,lc_13184,info,seq__12817__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13183 - (lc_13184 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13182], null));
});})(seq__12817,chunk__12818,count__12819,i__12820,segv_13182,gline_13183,lc_13184,info,seq__12817__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12817,chunk__12818,count__12819,i__12820,segv_13182,gline_13183,lc_13184,info,seq__12817__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13183], null),cljs.core.conj,segv_13182);
});})(seq__12817,chunk__12818,count__12819,i__12820,segv_13182,gline_13183,lc_13184,info,seq__12817__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__13185 = cljs.core.next.call(null,seq__12817__$1);
var G__13186 = null;
var G__13187 = (0);
var G__13188 = (0);
seq__12817 = G__13185;
chunk__12818 = G__13186;
count__12819 = G__13187;
i__12820 = G__13188;
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
var seq__12821_13189 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12822_13190 = null;
var count__12823_13191 = (0);
var i__12824_13192 = (0);
while(true){
if((i__12824_13192 < count__12823_13191)){
var vec__12997_13193 = cljs.core._nth.call(null,chunk__12822_13190,i__12824_13192);
var source_idx_13194 = cljs.core.nth.call(null,vec__12997_13193,(0),null);
var vec__13000_13195 = cljs.core.nth.call(null,vec__12997_13193,(1),null);
var __13196 = cljs.core.nth.call(null,vec__13000_13195,(0),null);
var lines_13197__$1 = cljs.core.nth.call(null,vec__13000_13195,(1),null);
var seq__13003_13198 = cljs.core.seq.call(null,lines_13197__$1);
var chunk__13004_13199 = null;
var count__13005_13200 = (0);
var i__13006_13201 = (0);
while(true){
if((i__13006_13201 < count__13005_13200)){
var vec__13045_13202 = cljs.core._nth.call(null,chunk__13004_13199,i__13006_13201);
var line_13203 = cljs.core.nth.call(null,vec__13045_13202,(0),null);
var cols_13204 = cljs.core.nth.call(null,vec__13045_13202,(1),null);
var seq__13048_13205 = cljs.core.seq.call(null,cols_13204);
var chunk__13049_13206 = null;
var count__13050_13207 = (0);
var i__13051_13208 = (0);
while(true){
if((i__13051_13208 < count__13050_13207)){
var vec__13058_13209 = cljs.core._nth.call(null,chunk__13049_13206,i__13051_13208);
var col_13210 = cljs.core.nth.call(null,vec__13058_13209,(0),null);
var infos_13211 = cljs.core.nth.call(null,vec__13058_13209,(1),null);
encode_cols.call(null,infos_13211,source_idx_13194,line_13203,col_13210);


var G__13212 = seq__13048_13205;
var G__13213 = chunk__13049_13206;
var G__13214 = count__13050_13207;
var G__13215 = (i__13051_13208 + (1));
seq__13048_13205 = G__13212;
chunk__13049_13206 = G__13213;
count__13050_13207 = G__13214;
i__13051_13208 = G__13215;
continue;
} else {
var temp__5720__auto___13216 = cljs.core.seq.call(null,seq__13048_13205);
if(temp__5720__auto___13216){
var seq__13048_13217__$1 = temp__5720__auto___13216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13048_13217__$1)){
var c__4550__auto___13218 = cljs.core.chunk_first.call(null,seq__13048_13217__$1);
var G__13219 = cljs.core.chunk_rest.call(null,seq__13048_13217__$1);
var G__13220 = c__4550__auto___13218;
var G__13221 = cljs.core.count.call(null,c__4550__auto___13218);
var G__13222 = (0);
seq__13048_13205 = G__13219;
chunk__13049_13206 = G__13220;
count__13050_13207 = G__13221;
i__13051_13208 = G__13222;
continue;
} else {
var vec__13061_13223 = cljs.core.first.call(null,seq__13048_13217__$1);
var col_13224 = cljs.core.nth.call(null,vec__13061_13223,(0),null);
var infos_13225 = cljs.core.nth.call(null,vec__13061_13223,(1),null);
encode_cols.call(null,infos_13225,source_idx_13194,line_13203,col_13224);


var G__13226 = cljs.core.next.call(null,seq__13048_13217__$1);
var G__13227 = null;
var G__13228 = (0);
var G__13229 = (0);
seq__13048_13205 = G__13226;
chunk__13049_13206 = G__13227;
count__13050_13207 = G__13228;
i__13051_13208 = G__13229;
continue;
}
} else {
}
}
break;
}


var G__13230 = seq__13003_13198;
var G__13231 = chunk__13004_13199;
var G__13232 = count__13005_13200;
var G__13233 = (i__13006_13201 + (1));
seq__13003_13198 = G__13230;
chunk__13004_13199 = G__13231;
count__13005_13200 = G__13232;
i__13006_13201 = G__13233;
continue;
} else {
var temp__5720__auto___13234 = cljs.core.seq.call(null,seq__13003_13198);
if(temp__5720__auto___13234){
var seq__13003_13235__$1 = temp__5720__auto___13234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13003_13235__$1)){
var c__4550__auto___13236 = cljs.core.chunk_first.call(null,seq__13003_13235__$1);
var G__13237 = cljs.core.chunk_rest.call(null,seq__13003_13235__$1);
var G__13238 = c__4550__auto___13236;
var G__13239 = cljs.core.count.call(null,c__4550__auto___13236);
var G__13240 = (0);
seq__13003_13198 = G__13237;
chunk__13004_13199 = G__13238;
count__13005_13200 = G__13239;
i__13006_13201 = G__13240;
continue;
} else {
var vec__13064_13241 = cljs.core.first.call(null,seq__13003_13235__$1);
var line_13242 = cljs.core.nth.call(null,vec__13064_13241,(0),null);
var cols_13243 = cljs.core.nth.call(null,vec__13064_13241,(1),null);
var seq__13067_13244 = cljs.core.seq.call(null,cols_13243);
var chunk__13068_13245 = null;
var count__13069_13246 = (0);
var i__13070_13247 = (0);
while(true){
if((i__13070_13247 < count__13069_13246)){
var vec__13077_13248 = cljs.core._nth.call(null,chunk__13068_13245,i__13070_13247);
var col_13249 = cljs.core.nth.call(null,vec__13077_13248,(0),null);
var infos_13250 = cljs.core.nth.call(null,vec__13077_13248,(1),null);
encode_cols.call(null,infos_13250,source_idx_13194,line_13242,col_13249);


var G__13251 = seq__13067_13244;
var G__13252 = chunk__13068_13245;
var G__13253 = count__13069_13246;
var G__13254 = (i__13070_13247 + (1));
seq__13067_13244 = G__13251;
chunk__13068_13245 = G__13252;
count__13069_13246 = G__13253;
i__13070_13247 = G__13254;
continue;
} else {
var temp__5720__auto___13255__$1 = cljs.core.seq.call(null,seq__13067_13244);
if(temp__5720__auto___13255__$1){
var seq__13067_13256__$1 = temp__5720__auto___13255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13067_13256__$1)){
var c__4550__auto___13257 = cljs.core.chunk_first.call(null,seq__13067_13256__$1);
var G__13258 = cljs.core.chunk_rest.call(null,seq__13067_13256__$1);
var G__13259 = c__4550__auto___13257;
var G__13260 = cljs.core.count.call(null,c__4550__auto___13257);
var G__13261 = (0);
seq__13067_13244 = G__13258;
chunk__13068_13245 = G__13259;
count__13069_13246 = G__13260;
i__13070_13247 = G__13261;
continue;
} else {
var vec__13080_13262 = cljs.core.first.call(null,seq__13067_13256__$1);
var col_13263 = cljs.core.nth.call(null,vec__13080_13262,(0),null);
var infos_13264 = cljs.core.nth.call(null,vec__13080_13262,(1),null);
encode_cols.call(null,infos_13264,source_idx_13194,line_13242,col_13263);


var G__13265 = cljs.core.next.call(null,seq__13067_13256__$1);
var G__13266 = null;
var G__13267 = (0);
var G__13268 = (0);
seq__13067_13244 = G__13265;
chunk__13068_13245 = G__13266;
count__13069_13246 = G__13267;
i__13070_13247 = G__13268;
continue;
}
} else {
}
}
break;
}


var G__13269 = cljs.core.next.call(null,seq__13003_13235__$1);
var G__13270 = null;
var G__13271 = (0);
var G__13272 = (0);
seq__13003_13198 = G__13269;
chunk__13004_13199 = G__13270;
count__13005_13200 = G__13271;
i__13006_13201 = G__13272;
continue;
}
} else {
}
}
break;
}


var G__13273 = seq__12821_13189;
var G__13274 = chunk__12822_13190;
var G__13275 = count__12823_13191;
var G__13276 = (i__12824_13192 + (1));
seq__12821_13189 = G__13273;
chunk__12822_13190 = G__13274;
count__12823_13191 = G__13275;
i__12824_13192 = G__13276;
continue;
} else {
var temp__5720__auto___13277 = cljs.core.seq.call(null,seq__12821_13189);
if(temp__5720__auto___13277){
var seq__12821_13278__$1 = temp__5720__auto___13277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12821_13278__$1)){
var c__4550__auto___13279 = cljs.core.chunk_first.call(null,seq__12821_13278__$1);
var G__13280 = cljs.core.chunk_rest.call(null,seq__12821_13278__$1);
var G__13281 = c__4550__auto___13279;
var G__13282 = cljs.core.count.call(null,c__4550__auto___13279);
var G__13283 = (0);
seq__12821_13189 = G__13280;
chunk__12822_13190 = G__13281;
count__12823_13191 = G__13282;
i__12824_13192 = G__13283;
continue;
} else {
var vec__13083_13284 = cljs.core.first.call(null,seq__12821_13278__$1);
var source_idx_13285 = cljs.core.nth.call(null,vec__13083_13284,(0),null);
var vec__13086_13286 = cljs.core.nth.call(null,vec__13083_13284,(1),null);
var __13287 = cljs.core.nth.call(null,vec__13086_13286,(0),null);
var lines_13288__$1 = cljs.core.nth.call(null,vec__13086_13286,(1),null);
var seq__13089_13289 = cljs.core.seq.call(null,lines_13288__$1);
var chunk__13090_13290 = null;
var count__13091_13291 = (0);
var i__13092_13292 = (0);
while(true){
if((i__13092_13292 < count__13091_13291)){
var vec__13131_13293 = cljs.core._nth.call(null,chunk__13090_13290,i__13092_13292);
var line_13294 = cljs.core.nth.call(null,vec__13131_13293,(0),null);
var cols_13295 = cljs.core.nth.call(null,vec__13131_13293,(1),null);
var seq__13134_13296 = cljs.core.seq.call(null,cols_13295);
var chunk__13135_13297 = null;
var count__13136_13298 = (0);
var i__13137_13299 = (0);
while(true){
if((i__13137_13299 < count__13136_13298)){
var vec__13144_13300 = cljs.core._nth.call(null,chunk__13135_13297,i__13137_13299);
var col_13301 = cljs.core.nth.call(null,vec__13144_13300,(0),null);
var infos_13302 = cljs.core.nth.call(null,vec__13144_13300,(1),null);
encode_cols.call(null,infos_13302,source_idx_13285,line_13294,col_13301);


var G__13303 = seq__13134_13296;
var G__13304 = chunk__13135_13297;
var G__13305 = count__13136_13298;
var G__13306 = (i__13137_13299 + (1));
seq__13134_13296 = G__13303;
chunk__13135_13297 = G__13304;
count__13136_13298 = G__13305;
i__13137_13299 = G__13306;
continue;
} else {
var temp__5720__auto___13307__$1 = cljs.core.seq.call(null,seq__13134_13296);
if(temp__5720__auto___13307__$1){
var seq__13134_13308__$1 = temp__5720__auto___13307__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13134_13308__$1)){
var c__4550__auto___13309 = cljs.core.chunk_first.call(null,seq__13134_13308__$1);
var G__13310 = cljs.core.chunk_rest.call(null,seq__13134_13308__$1);
var G__13311 = c__4550__auto___13309;
var G__13312 = cljs.core.count.call(null,c__4550__auto___13309);
var G__13313 = (0);
seq__13134_13296 = G__13310;
chunk__13135_13297 = G__13311;
count__13136_13298 = G__13312;
i__13137_13299 = G__13313;
continue;
} else {
var vec__13147_13314 = cljs.core.first.call(null,seq__13134_13308__$1);
var col_13315 = cljs.core.nth.call(null,vec__13147_13314,(0),null);
var infos_13316 = cljs.core.nth.call(null,vec__13147_13314,(1),null);
encode_cols.call(null,infos_13316,source_idx_13285,line_13294,col_13315);


var G__13317 = cljs.core.next.call(null,seq__13134_13308__$1);
var G__13318 = null;
var G__13319 = (0);
var G__13320 = (0);
seq__13134_13296 = G__13317;
chunk__13135_13297 = G__13318;
count__13136_13298 = G__13319;
i__13137_13299 = G__13320;
continue;
}
} else {
}
}
break;
}


var G__13321 = seq__13089_13289;
var G__13322 = chunk__13090_13290;
var G__13323 = count__13091_13291;
var G__13324 = (i__13092_13292 + (1));
seq__13089_13289 = G__13321;
chunk__13090_13290 = G__13322;
count__13091_13291 = G__13323;
i__13092_13292 = G__13324;
continue;
} else {
var temp__5720__auto___13325__$1 = cljs.core.seq.call(null,seq__13089_13289);
if(temp__5720__auto___13325__$1){
var seq__13089_13326__$1 = temp__5720__auto___13325__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13089_13326__$1)){
var c__4550__auto___13327 = cljs.core.chunk_first.call(null,seq__13089_13326__$1);
var G__13328 = cljs.core.chunk_rest.call(null,seq__13089_13326__$1);
var G__13329 = c__4550__auto___13327;
var G__13330 = cljs.core.count.call(null,c__4550__auto___13327);
var G__13331 = (0);
seq__13089_13289 = G__13328;
chunk__13090_13290 = G__13329;
count__13091_13291 = G__13330;
i__13092_13292 = G__13331;
continue;
} else {
var vec__13150_13332 = cljs.core.first.call(null,seq__13089_13326__$1);
var line_13333 = cljs.core.nth.call(null,vec__13150_13332,(0),null);
var cols_13334 = cljs.core.nth.call(null,vec__13150_13332,(1),null);
var seq__13153_13335 = cljs.core.seq.call(null,cols_13334);
var chunk__13154_13336 = null;
var count__13155_13337 = (0);
var i__13156_13338 = (0);
while(true){
if((i__13156_13338 < count__13155_13337)){
var vec__13163_13339 = cljs.core._nth.call(null,chunk__13154_13336,i__13156_13338);
var col_13340 = cljs.core.nth.call(null,vec__13163_13339,(0),null);
var infos_13341 = cljs.core.nth.call(null,vec__13163_13339,(1),null);
encode_cols.call(null,infos_13341,source_idx_13285,line_13333,col_13340);


var G__13342 = seq__13153_13335;
var G__13343 = chunk__13154_13336;
var G__13344 = count__13155_13337;
var G__13345 = (i__13156_13338 + (1));
seq__13153_13335 = G__13342;
chunk__13154_13336 = G__13343;
count__13155_13337 = G__13344;
i__13156_13338 = G__13345;
continue;
} else {
var temp__5720__auto___13346__$2 = cljs.core.seq.call(null,seq__13153_13335);
if(temp__5720__auto___13346__$2){
var seq__13153_13347__$1 = temp__5720__auto___13346__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13153_13347__$1)){
var c__4550__auto___13348 = cljs.core.chunk_first.call(null,seq__13153_13347__$1);
var G__13349 = cljs.core.chunk_rest.call(null,seq__13153_13347__$1);
var G__13350 = c__4550__auto___13348;
var G__13351 = cljs.core.count.call(null,c__4550__auto___13348);
var G__13352 = (0);
seq__13153_13335 = G__13349;
chunk__13154_13336 = G__13350;
count__13155_13337 = G__13351;
i__13156_13338 = G__13352;
continue;
} else {
var vec__13166_13353 = cljs.core.first.call(null,seq__13153_13347__$1);
var col_13354 = cljs.core.nth.call(null,vec__13166_13353,(0),null);
var infos_13355 = cljs.core.nth.call(null,vec__13166_13353,(1),null);
encode_cols.call(null,infos_13355,source_idx_13285,line_13333,col_13354);


var G__13356 = cljs.core.next.call(null,seq__13153_13347__$1);
var G__13357 = null;
var G__13358 = (0);
var G__13359 = (0);
seq__13153_13335 = G__13356;
chunk__13154_13336 = G__13357;
count__13155_13337 = G__13358;
i__13156_13338 = G__13359;
continue;
}
} else {
}
}
break;
}


var G__13360 = cljs.core.next.call(null,seq__13089_13326__$1);
var G__13361 = null;
var G__13362 = (0);
var G__13363 = (0);
seq__13089_13289 = G__13360;
chunk__13090_13290 = G__13361;
count__13091_13291 = G__13362;
i__13092_13292 = G__13363;
continue;
}
} else {
}
}
break;
}


var G__13364 = cljs.core.next.call(null,seq__12821_13278__$1);
var G__13365 = null;
var G__13366 = (0);
var G__13367 = (0);
seq__12821_13189 = G__13364;
chunk__12822_13190 = G__13365;
count__12823_13191 = G__13366;
i__12824_13192 = G__13367;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__13169 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12814_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12814_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12815_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12815_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12816_SHARP_){
return clojure.string.join.call(null,",",p1__12816_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__13170 = G__13169;
goog.object.set(G__13170,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__13170;
} else {
return G__13169;
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
var vec__13368 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__13368,(0),null);
var col_map = cljs.core.nth.call(null,vec__13368,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__13371 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__13371,(0),null);
var infos = cljs.core.nth.call(null,vec__13371,(1),null);
var G__13377 = cljs.core.next.call(null,col_map_seq);
var G__13378 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__13371,col,infos,vec__13368,line,col_map){
return (function (v,p__13374){
var map__13375 = p__13374;
var map__13375__$1 = (((((!((map__13375 == null))))?(((((map__13375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13375):map__13375);
var gline = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__13371,col,infos,vec__13368,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__13377;
new_cols = G__13378;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__13379 = cljs.core.next.call(null,line_map_seq);
var G__13380 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__13379;
new_lines = G__13380;
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
var seq__13381_13653 = cljs.core.seq.call(null,reverse_map);
var chunk__13382_13654 = null;
var count__13383_13655 = (0);
var i__13384_13656 = (0);
while(true){
if((i__13384_13656 < count__13383_13655)){
var vec__13519_13657 = cljs.core._nth.call(null,chunk__13382_13654,i__13384_13656);
var line_13658 = cljs.core.nth.call(null,vec__13519_13657,(0),null);
var columns_13659 = cljs.core.nth.call(null,vec__13519_13657,(1),null);
var seq__13522_13660 = cljs.core.seq.call(null,columns_13659);
var chunk__13523_13661 = null;
var count__13524_13662 = (0);
var i__13525_13663 = (0);
while(true){
if((i__13525_13663 < count__13524_13662)){
var vec__13556_13664 = cljs.core._nth.call(null,chunk__13523_13661,i__13525_13663);
var column_13665 = cljs.core.nth.call(null,vec__13556_13664,(0),null);
var column_info_13666 = cljs.core.nth.call(null,vec__13556_13664,(1),null);
var seq__13559_13667 = cljs.core.seq.call(null,column_info_13666);
var chunk__13560_13668 = null;
var count__13561_13669 = (0);
var i__13562_13670 = (0);
while(true){
if((i__13562_13670 < count__13561_13669)){
var map__13567_13671 = cljs.core._nth.call(null,chunk__13560_13668,i__13562_13670);
var map__13567_13672__$1 = (((((!((map__13567_13671 == null))))?(((((map__13567_13671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13567_13671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13567_13671):map__13567_13671);
var gline_13673 = cljs.core.get.call(null,map__13567_13672__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13674 = cljs.core.get.call(null,map__13567_13672__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13675 = cljs.core.get.call(null,map__13567_13672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13673], null),cljs.core.fnil.call(null,((function (seq__13559_13667,chunk__13560_13668,count__13561_13669,i__13562_13670,seq__13522_13660,chunk__13523_13661,count__13524_13662,i__13525_13663,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13567_13671,map__13567_13672__$1,gline_13673,gcol_13674,name_13675,vec__13556_13664,column_13665,column_info_13666,vec__13519_13657,line_13658,columns_13659,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13674], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13658,new cljs.core.Keyword(null,"col","col",-1959363084),column_13665,new cljs.core.Keyword(null,"name","name",1843675177),name_13675], null));
});})(seq__13559_13667,chunk__13560_13668,count__13561_13669,i__13562_13670,seq__13522_13660,chunk__13523_13661,count__13524_13662,i__13525_13663,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13567_13671,map__13567_13672__$1,gline_13673,gcol_13674,name_13675,vec__13556_13664,column_13665,column_info_13666,vec__13519_13657,line_13658,columns_13659,inverted))
,cljs.core.sorted_map.call(null)));


var G__13676 = seq__13559_13667;
var G__13677 = chunk__13560_13668;
var G__13678 = count__13561_13669;
var G__13679 = (i__13562_13670 + (1));
seq__13559_13667 = G__13676;
chunk__13560_13668 = G__13677;
count__13561_13669 = G__13678;
i__13562_13670 = G__13679;
continue;
} else {
var temp__5720__auto___13680 = cljs.core.seq.call(null,seq__13559_13667);
if(temp__5720__auto___13680){
var seq__13559_13681__$1 = temp__5720__auto___13680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13559_13681__$1)){
var c__4550__auto___13682 = cljs.core.chunk_first.call(null,seq__13559_13681__$1);
var G__13683 = cljs.core.chunk_rest.call(null,seq__13559_13681__$1);
var G__13684 = c__4550__auto___13682;
var G__13685 = cljs.core.count.call(null,c__4550__auto___13682);
var G__13686 = (0);
seq__13559_13667 = G__13683;
chunk__13560_13668 = G__13684;
count__13561_13669 = G__13685;
i__13562_13670 = G__13686;
continue;
} else {
var map__13569_13687 = cljs.core.first.call(null,seq__13559_13681__$1);
var map__13569_13688__$1 = (((((!((map__13569_13687 == null))))?(((((map__13569_13687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13569_13687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13569_13687):map__13569_13687);
var gline_13689 = cljs.core.get.call(null,map__13569_13688__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13690 = cljs.core.get.call(null,map__13569_13688__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13691 = cljs.core.get.call(null,map__13569_13688__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13689], null),cljs.core.fnil.call(null,((function (seq__13559_13667,chunk__13560_13668,count__13561_13669,i__13562_13670,seq__13522_13660,chunk__13523_13661,count__13524_13662,i__13525_13663,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13569_13687,map__13569_13688__$1,gline_13689,gcol_13690,name_13691,seq__13559_13681__$1,temp__5720__auto___13680,vec__13556_13664,column_13665,column_info_13666,vec__13519_13657,line_13658,columns_13659,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13690], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13658,new cljs.core.Keyword(null,"col","col",-1959363084),column_13665,new cljs.core.Keyword(null,"name","name",1843675177),name_13691], null));
});})(seq__13559_13667,chunk__13560_13668,count__13561_13669,i__13562_13670,seq__13522_13660,chunk__13523_13661,count__13524_13662,i__13525_13663,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13569_13687,map__13569_13688__$1,gline_13689,gcol_13690,name_13691,seq__13559_13681__$1,temp__5720__auto___13680,vec__13556_13664,column_13665,column_info_13666,vec__13519_13657,line_13658,columns_13659,inverted))
,cljs.core.sorted_map.call(null)));


var G__13692 = cljs.core.next.call(null,seq__13559_13681__$1);
var G__13693 = null;
var G__13694 = (0);
var G__13695 = (0);
seq__13559_13667 = G__13692;
chunk__13560_13668 = G__13693;
count__13561_13669 = G__13694;
i__13562_13670 = G__13695;
continue;
}
} else {
}
}
break;
}


var G__13696 = seq__13522_13660;
var G__13697 = chunk__13523_13661;
var G__13698 = count__13524_13662;
var G__13699 = (i__13525_13663 + (1));
seq__13522_13660 = G__13696;
chunk__13523_13661 = G__13697;
count__13524_13662 = G__13698;
i__13525_13663 = G__13699;
continue;
} else {
var temp__5720__auto___13700 = cljs.core.seq.call(null,seq__13522_13660);
if(temp__5720__auto___13700){
var seq__13522_13701__$1 = temp__5720__auto___13700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13522_13701__$1)){
var c__4550__auto___13702 = cljs.core.chunk_first.call(null,seq__13522_13701__$1);
var G__13703 = cljs.core.chunk_rest.call(null,seq__13522_13701__$1);
var G__13704 = c__4550__auto___13702;
var G__13705 = cljs.core.count.call(null,c__4550__auto___13702);
var G__13706 = (0);
seq__13522_13660 = G__13703;
chunk__13523_13661 = G__13704;
count__13524_13662 = G__13705;
i__13525_13663 = G__13706;
continue;
} else {
var vec__13571_13707 = cljs.core.first.call(null,seq__13522_13701__$1);
var column_13708 = cljs.core.nth.call(null,vec__13571_13707,(0),null);
var column_info_13709 = cljs.core.nth.call(null,vec__13571_13707,(1),null);
var seq__13574_13710 = cljs.core.seq.call(null,column_info_13709);
var chunk__13575_13711 = null;
var count__13576_13712 = (0);
var i__13577_13713 = (0);
while(true){
if((i__13577_13713 < count__13576_13712)){
var map__13582_13714 = cljs.core._nth.call(null,chunk__13575_13711,i__13577_13713);
var map__13582_13715__$1 = (((((!((map__13582_13714 == null))))?(((((map__13582_13714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13582_13714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13582_13714):map__13582_13714);
var gline_13716 = cljs.core.get.call(null,map__13582_13715__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13717 = cljs.core.get.call(null,map__13582_13715__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13718 = cljs.core.get.call(null,map__13582_13715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13716], null),cljs.core.fnil.call(null,((function (seq__13574_13710,chunk__13575_13711,count__13576_13712,i__13577_13713,seq__13522_13660,chunk__13523_13661,count__13524_13662,i__13525_13663,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13582_13714,map__13582_13715__$1,gline_13716,gcol_13717,name_13718,vec__13571_13707,column_13708,column_info_13709,seq__13522_13701__$1,temp__5720__auto___13700,vec__13519_13657,line_13658,columns_13659,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13717], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13658,new cljs.core.Keyword(null,"col","col",-1959363084),column_13708,new cljs.core.Keyword(null,"name","name",1843675177),name_13718], null));
});})(seq__13574_13710,chunk__13575_13711,count__13576_13712,i__13577_13713,seq__13522_13660,chunk__13523_13661,count__13524_13662,i__13525_13663,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13582_13714,map__13582_13715__$1,gline_13716,gcol_13717,name_13718,vec__13571_13707,column_13708,column_info_13709,seq__13522_13701__$1,temp__5720__auto___13700,vec__13519_13657,line_13658,columns_13659,inverted))
,cljs.core.sorted_map.call(null)));


var G__13719 = seq__13574_13710;
var G__13720 = chunk__13575_13711;
var G__13721 = count__13576_13712;
var G__13722 = (i__13577_13713 + (1));
seq__13574_13710 = G__13719;
chunk__13575_13711 = G__13720;
count__13576_13712 = G__13721;
i__13577_13713 = G__13722;
continue;
} else {
var temp__5720__auto___13723__$1 = cljs.core.seq.call(null,seq__13574_13710);
if(temp__5720__auto___13723__$1){
var seq__13574_13724__$1 = temp__5720__auto___13723__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13574_13724__$1)){
var c__4550__auto___13725 = cljs.core.chunk_first.call(null,seq__13574_13724__$1);
var G__13726 = cljs.core.chunk_rest.call(null,seq__13574_13724__$1);
var G__13727 = c__4550__auto___13725;
var G__13728 = cljs.core.count.call(null,c__4550__auto___13725);
var G__13729 = (0);
seq__13574_13710 = G__13726;
chunk__13575_13711 = G__13727;
count__13576_13712 = G__13728;
i__13577_13713 = G__13729;
continue;
} else {
var map__13584_13730 = cljs.core.first.call(null,seq__13574_13724__$1);
var map__13584_13731__$1 = (((((!((map__13584_13730 == null))))?(((((map__13584_13730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13584_13730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13584_13730):map__13584_13730);
var gline_13732 = cljs.core.get.call(null,map__13584_13731__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13733 = cljs.core.get.call(null,map__13584_13731__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13734 = cljs.core.get.call(null,map__13584_13731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13732], null),cljs.core.fnil.call(null,((function (seq__13574_13710,chunk__13575_13711,count__13576_13712,i__13577_13713,seq__13522_13660,chunk__13523_13661,count__13524_13662,i__13525_13663,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13584_13730,map__13584_13731__$1,gline_13732,gcol_13733,name_13734,seq__13574_13724__$1,temp__5720__auto___13723__$1,vec__13571_13707,column_13708,column_info_13709,seq__13522_13701__$1,temp__5720__auto___13700,vec__13519_13657,line_13658,columns_13659,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13733], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13658,new cljs.core.Keyword(null,"col","col",-1959363084),column_13708,new cljs.core.Keyword(null,"name","name",1843675177),name_13734], null));
});})(seq__13574_13710,chunk__13575_13711,count__13576_13712,i__13577_13713,seq__13522_13660,chunk__13523_13661,count__13524_13662,i__13525_13663,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13584_13730,map__13584_13731__$1,gline_13732,gcol_13733,name_13734,seq__13574_13724__$1,temp__5720__auto___13723__$1,vec__13571_13707,column_13708,column_info_13709,seq__13522_13701__$1,temp__5720__auto___13700,vec__13519_13657,line_13658,columns_13659,inverted))
,cljs.core.sorted_map.call(null)));


var G__13735 = cljs.core.next.call(null,seq__13574_13724__$1);
var G__13736 = null;
var G__13737 = (0);
var G__13738 = (0);
seq__13574_13710 = G__13735;
chunk__13575_13711 = G__13736;
count__13576_13712 = G__13737;
i__13577_13713 = G__13738;
continue;
}
} else {
}
}
break;
}


var G__13739 = cljs.core.next.call(null,seq__13522_13701__$1);
var G__13740 = null;
var G__13741 = (0);
var G__13742 = (0);
seq__13522_13660 = G__13739;
chunk__13523_13661 = G__13740;
count__13524_13662 = G__13741;
i__13525_13663 = G__13742;
continue;
}
} else {
}
}
break;
}


var G__13743 = seq__13381_13653;
var G__13744 = chunk__13382_13654;
var G__13745 = count__13383_13655;
var G__13746 = (i__13384_13656 + (1));
seq__13381_13653 = G__13743;
chunk__13382_13654 = G__13744;
count__13383_13655 = G__13745;
i__13384_13656 = G__13746;
continue;
} else {
var temp__5720__auto___13747 = cljs.core.seq.call(null,seq__13381_13653);
if(temp__5720__auto___13747){
var seq__13381_13748__$1 = temp__5720__auto___13747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13381_13748__$1)){
var c__4550__auto___13749 = cljs.core.chunk_first.call(null,seq__13381_13748__$1);
var G__13750 = cljs.core.chunk_rest.call(null,seq__13381_13748__$1);
var G__13751 = c__4550__auto___13749;
var G__13752 = cljs.core.count.call(null,c__4550__auto___13749);
var G__13753 = (0);
seq__13381_13653 = G__13750;
chunk__13382_13654 = G__13751;
count__13383_13655 = G__13752;
i__13384_13656 = G__13753;
continue;
} else {
var vec__13586_13754 = cljs.core.first.call(null,seq__13381_13748__$1);
var line_13755 = cljs.core.nth.call(null,vec__13586_13754,(0),null);
var columns_13756 = cljs.core.nth.call(null,vec__13586_13754,(1),null);
var seq__13589_13757 = cljs.core.seq.call(null,columns_13756);
var chunk__13590_13758 = null;
var count__13591_13759 = (0);
var i__13592_13760 = (0);
while(true){
if((i__13592_13760 < count__13591_13759)){
var vec__13623_13761 = cljs.core._nth.call(null,chunk__13590_13758,i__13592_13760);
var column_13762 = cljs.core.nth.call(null,vec__13623_13761,(0),null);
var column_info_13763 = cljs.core.nth.call(null,vec__13623_13761,(1),null);
var seq__13626_13764 = cljs.core.seq.call(null,column_info_13763);
var chunk__13627_13765 = null;
var count__13628_13766 = (0);
var i__13629_13767 = (0);
while(true){
if((i__13629_13767 < count__13628_13766)){
var map__13634_13768 = cljs.core._nth.call(null,chunk__13627_13765,i__13629_13767);
var map__13634_13769__$1 = (((((!((map__13634_13768 == null))))?(((((map__13634_13768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13634_13768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13634_13768):map__13634_13768);
var gline_13770 = cljs.core.get.call(null,map__13634_13769__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13771 = cljs.core.get.call(null,map__13634_13769__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13772 = cljs.core.get.call(null,map__13634_13769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13770], null),cljs.core.fnil.call(null,((function (seq__13626_13764,chunk__13627_13765,count__13628_13766,i__13629_13767,seq__13589_13757,chunk__13590_13758,count__13591_13759,i__13592_13760,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13634_13768,map__13634_13769__$1,gline_13770,gcol_13771,name_13772,vec__13623_13761,column_13762,column_info_13763,vec__13586_13754,line_13755,columns_13756,seq__13381_13748__$1,temp__5720__auto___13747,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13771], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13755,new cljs.core.Keyword(null,"col","col",-1959363084),column_13762,new cljs.core.Keyword(null,"name","name",1843675177),name_13772], null));
});})(seq__13626_13764,chunk__13627_13765,count__13628_13766,i__13629_13767,seq__13589_13757,chunk__13590_13758,count__13591_13759,i__13592_13760,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13634_13768,map__13634_13769__$1,gline_13770,gcol_13771,name_13772,vec__13623_13761,column_13762,column_info_13763,vec__13586_13754,line_13755,columns_13756,seq__13381_13748__$1,temp__5720__auto___13747,inverted))
,cljs.core.sorted_map.call(null)));


var G__13773 = seq__13626_13764;
var G__13774 = chunk__13627_13765;
var G__13775 = count__13628_13766;
var G__13776 = (i__13629_13767 + (1));
seq__13626_13764 = G__13773;
chunk__13627_13765 = G__13774;
count__13628_13766 = G__13775;
i__13629_13767 = G__13776;
continue;
} else {
var temp__5720__auto___13777__$1 = cljs.core.seq.call(null,seq__13626_13764);
if(temp__5720__auto___13777__$1){
var seq__13626_13778__$1 = temp__5720__auto___13777__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13626_13778__$1)){
var c__4550__auto___13779 = cljs.core.chunk_first.call(null,seq__13626_13778__$1);
var G__13780 = cljs.core.chunk_rest.call(null,seq__13626_13778__$1);
var G__13781 = c__4550__auto___13779;
var G__13782 = cljs.core.count.call(null,c__4550__auto___13779);
var G__13783 = (0);
seq__13626_13764 = G__13780;
chunk__13627_13765 = G__13781;
count__13628_13766 = G__13782;
i__13629_13767 = G__13783;
continue;
} else {
var map__13636_13784 = cljs.core.first.call(null,seq__13626_13778__$1);
var map__13636_13785__$1 = (((((!((map__13636_13784 == null))))?(((((map__13636_13784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13636_13784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13636_13784):map__13636_13784);
var gline_13786 = cljs.core.get.call(null,map__13636_13785__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13787 = cljs.core.get.call(null,map__13636_13785__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13788 = cljs.core.get.call(null,map__13636_13785__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13786], null),cljs.core.fnil.call(null,((function (seq__13626_13764,chunk__13627_13765,count__13628_13766,i__13629_13767,seq__13589_13757,chunk__13590_13758,count__13591_13759,i__13592_13760,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13636_13784,map__13636_13785__$1,gline_13786,gcol_13787,name_13788,seq__13626_13778__$1,temp__5720__auto___13777__$1,vec__13623_13761,column_13762,column_info_13763,vec__13586_13754,line_13755,columns_13756,seq__13381_13748__$1,temp__5720__auto___13747,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13787], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13755,new cljs.core.Keyword(null,"col","col",-1959363084),column_13762,new cljs.core.Keyword(null,"name","name",1843675177),name_13788], null));
});})(seq__13626_13764,chunk__13627_13765,count__13628_13766,i__13629_13767,seq__13589_13757,chunk__13590_13758,count__13591_13759,i__13592_13760,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13636_13784,map__13636_13785__$1,gline_13786,gcol_13787,name_13788,seq__13626_13778__$1,temp__5720__auto___13777__$1,vec__13623_13761,column_13762,column_info_13763,vec__13586_13754,line_13755,columns_13756,seq__13381_13748__$1,temp__5720__auto___13747,inverted))
,cljs.core.sorted_map.call(null)));


var G__13789 = cljs.core.next.call(null,seq__13626_13778__$1);
var G__13790 = null;
var G__13791 = (0);
var G__13792 = (0);
seq__13626_13764 = G__13789;
chunk__13627_13765 = G__13790;
count__13628_13766 = G__13791;
i__13629_13767 = G__13792;
continue;
}
} else {
}
}
break;
}


var G__13793 = seq__13589_13757;
var G__13794 = chunk__13590_13758;
var G__13795 = count__13591_13759;
var G__13796 = (i__13592_13760 + (1));
seq__13589_13757 = G__13793;
chunk__13590_13758 = G__13794;
count__13591_13759 = G__13795;
i__13592_13760 = G__13796;
continue;
} else {
var temp__5720__auto___13797__$1 = cljs.core.seq.call(null,seq__13589_13757);
if(temp__5720__auto___13797__$1){
var seq__13589_13798__$1 = temp__5720__auto___13797__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13589_13798__$1)){
var c__4550__auto___13799 = cljs.core.chunk_first.call(null,seq__13589_13798__$1);
var G__13800 = cljs.core.chunk_rest.call(null,seq__13589_13798__$1);
var G__13801 = c__4550__auto___13799;
var G__13802 = cljs.core.count.call(null,c__4550__auto___13799);
var G__13803 = (0);
seq__13589_13757 = G__13800;
chunk__13590_13758 = G__13801;
count__13591_13759 = G__13802;
i__13592_13760 = G__13803;
continue;
} else {
var vec__13638_13804 = cljs.core.first.call(null,seq__13589_13798__$1);
var column_13805 = cljs.core.nth.call(null,vec__13638_13804,(0),null);
var column_info_13806 = cljs.core.nth.call(null,vec__13638_13804,(1),null);
var seq__13641_13807 = cljs.core.seq.call(null,column_info_13806);
var chunk__13642_13808 = null;
var count__13643_13809 = (0);
var i__13644_13810 = (0);
while(true){
if((i__13644_13810 < count__13643_13809)){
var map__13649_13811 = cljs.core._nth.call(null,chunk__13642_13808,i__13644_13810);
var map__13649_13812__$1 = (((((!((map__13649_13811 == null))))?(((((map__13649_13811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13649_13811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13649_13811):map__13649_13811);
var gline_13813 = cljs.core.get.call(null,map__13649_13812__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13814 = cljs.core.get.call(null,map__13649_13812__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13815 = cljs.core.get.call(null,map__13649_13812__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13813], null),cljs.core.fnil.call(null,((function (seq__13641_13807,chunk__13642_13808,count__13643_13809,i__13644_13810,seq__13589_13757,chunk__13590_13758,count__13591_13759,i__13592_13760,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13649_13811,map__13649_13812__$1,gline_13813,gcol_13814,name_13815,vec__13638_13804,column_13805,column_info_13806,seq__13589_13798__$1,temp__5720__auto___13797__$1,vec__13586_13754,line_13755,columns_13756,seq__13381_13748__$1,temp__5720__auto___13747,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13814], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13755,new cljs.core.Keyword(null,"col","col",-1959363084),column_13805,new cljs.core.Keyword(null,"name","name",1843675177),name_13815], null));
});})(seq__13641_13807,chunk__13642_13808,count__13643_13809,i__13644_13810,seq__13589_13757,chunk__13590_13758,count__13591_13759,i__13592_13760,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13649_13811,map__13649_13812__$1,gline_13813,gcol_13814,name_13815,vec__13638_13804,column_13805,column_info_13806,seq__13589_13798__$1,temp__5720__auto___13797__$1,vec__13586_13754,line_13755,columns_13756,seq__13381_13748__$1,temp__5720__auto___13747,inverted))
,cljs.core.sorted_map.call(null)));


var G__13816 = seq__13641_13807;
var G__13817 = chunk__13642_13808;
var G__13818 = count__13643_13809;
var G__13819 = (i__13644_13810 + (1));
seq__13641_13807 = G__13816;
chunk__13642_13808 = G__13817;
count__13643_13809 = G__13818;
i__13644_13810 = G__13819;
continue;
} else {
var temp__5720__auto___13820__$2 = cljs.core.seq.call(null,seq__13641_13807);
if(temp__5720__auto___13820__$2){
var seq__13641_13821__$1 = temp__5720__auto___13820__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13641_13821__$1)){
var c__4550__auto___13822 = cljs.core.chunk_first.call(null,seq__13641_13821__$1);
var G__13823 = cljs.core.chunk_rest.call(null,seq__13641_13821__$1);
var G__13824 = c__4550__auto___13822;
var G__13825 = cljs.core.count.call(null,c__4550__auto___13822);
var G__13826 = (0);
seq__13641_13807 = G__13823;
chunk__13642_13808 = G__13824;
count__13643_13809 = G__13825;
i__13644_13810 = G__13826;
continue;
} else {
var map__13651_13827 = cljs.core.first.call(null,seq__13641_13821__$1);
var map__13651_13828__$1 = (((((!((map__13651_13827 == null))))?(((((map__13651_13827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13651_13827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13651_13827):map__13651_13827);
var gline_13829 = cljs.core.get.call(null,map__13651_13828__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13830 = cljs.core.get.call(null,map__13651_13828__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13831 = cljs.core.get.call(null,map__13651_13828__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13829], null),cljs.core.fnil.call(null,((function (seq__13641_13807,chunk__13642_13808,count__13643_13809,i__13644_13810,seq__13589_13757,chunk__13590_13758,count__13591_13759,i__13592_13760,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13651_13827,map__13651_13828__$1,gline_13829,gcol_13830,name_13831,seq__13641_13821__$1,temp__5720__auto___13820__$2,vec__13638_13804,column_13805,column_info_13806,seq__13589_13798__$1,temp__5720__auto___13797__$1,vec__13586_13754,line_13755,columns_13756,seq__13381_13748__$1,temp__5720__auto___13747,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13830], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13755,new cljs.core.Keyword(null,"col","col",-1959363084),column_13805,new cljs.core.Keyword(null,"name","name",1843675177),name_13831], null));
});})(seq__13641_13807,chunk__13642_13808,count__13643_13809,i__13644_13810,seq__13589_13757,chunk__13590_13758,count__13591_13759,i__13592_13760,seq__13381_13653,chunk__13382_13654,count__13383_13655,i__13384_13656,map__13651_13827,map__13651_13828__$1,gline_13829,gcol_13830,name_13831,seq__13641_13821__$1,temp__5720__auto___13820__$2,vec__13638_13804,column_13805,column_info_13806,seq__13589_13798__$1,temp__5720__auto___13797__$1,vec__13586_13754,line_13755,columns_13756,seq__13381_13748__$1,temp__5720__auto___13747,inverted))
,cljs.core.sorted_map.call(null)));


var G__13832 = cljs.core.next.call(null,seq__13641_13821__$1);
var G__13833 = null;
var G__13834 = (0);
var G__13835 = (0);
seq__13641_13807 = G__13832;
chunk__13642_13808 = G__13833;
count__13643_13809 = G__13834;
i__13644_13810 = G__13835;
continue;
}
} else {
}
}
break;
}


var G__13836 = cljs.core.next.call(null,seq__13589_13798__$1);
var G__13837 = null;
var G__13838 = (0);
var G__13839 = (0);
seq__13589_13757 = G__13836;
chunk__13590_13758 = G__13837;
count__13591_13759 = G__13838;
i__13592_13760 = G__13839;
continue;
}
} else {
}
}
break;
}


var G__13840 = cljs.core.next.call(null,seq__13381_13748__$1);
var G__13841 = null;
var G__13842 = (0);
var G__13843 = (0);
seq__13381_13653 = G__13840;
chunk__13382_13654 = G__13841;
count__13383_13655 = G__13842;
i__13384_13656 = G__13843;
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
