// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
goog.require('goog.object');
goog.scope(function(){
cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__15582){
var vec__15583 = p__15582;
var i = cljs.core.nth.call(null,vec__15583,(0),null);
var v = cljs.core.nth.call(null,vec__15583,(1),null);
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
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__15586 = seg;
var gcol = cljs.core.nth.call(null,vec__15586,(0),null);
var source = cljs.core.nth.call(null,vec__15586,(1),null);
var line = cljs.core.nth.call(null,vec__15586,(2),null);
var col = cljs.core.nth.call(null,vec__15586,(3),null);
var name = cljs.core.nth.call(null,vec__15586,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5823__auto__)){
var name__$1 = temp__5823__auto__;
return (cljs.source_map.goog$module$goog$object.get.call(null,source_map,"names")[name__$1]);
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
var vec__15589 = seg;
var gcol = cljs.core.nth.call(null,vec__15589,(0),null);
var source = cljs.core.nth.call(null,vec__15589,(1),null);
var line = cljs.core.nth.call(null,vec__15589,(2),null);
var col = cljs.core.nth.call(null,vec__15589,(3),null);
var name = cljs.core.nth.call(null,vec__15589,(4),null);
var vec__15592 = relseg;
var rgcol = cljs.core.nth.call(null,vec__15592,(0),null);
var rsource = cljs.core.nth.call(null,vec__15592,(1),null);
var rline = cljs.core.nth.call(null,vec__15592,(2),null);
var rcol = cljs.core.nth.call(null,vec__15592,(3),null);
var rname = cljs.core.nth.call(null,vec__15592,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__5002__auto__ = col;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
var map__15595 = segmap;
var map__15595__$1 = cljs.core.__destructure_map.call(null,map__15595);
var gcol = cljs.core.get.call(null,map__15595__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15595__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15595__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15595__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__15597 = arguments.length;
switch (G__15597) {
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

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__15601 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15605 = cljs.core.next.call(null,segs__$1);
var G__15606 = nrelseg;
var G__15607 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15605;
relseg__$1 = G__15606;
result__$1 = G__15607;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15601,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15601,(1),null);
var G__15608 = (gline + (1));
var G__15609 = cljs.core.next.call(null,lines__$1);
var G__15610 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15611 = result__$1;
gline = G__15608;
lines__$1 = G__15609;
relseg = G__15610;
result = G__15611;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__15613 = segmap;
var map__15613__$1 = cljs.core.__destructure_map.call(null,map__15613);
var gcol = cljs.core.get.call(null,map__15613__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15613__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15613__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15613__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15613__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__15612_SHARP_){
return cljs.core.conj.call(null,p1__15612_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__15615 = arguments.length;
switch (G__15615) {
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

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__15619 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15623 = cljs.core.next.call(null,segs__$1);
var G__15624 = nrelseg;
var G__15625 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15623;
relseg__$1 = G__15624;
result__$1 = G__15625;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15619,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15619,(1),null);
var G__15626 = (gline + (1));
var G__15627 = cljs.core.next.call(null,lines__$1);
var G__15628 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15629 = result__$1;
gline = G__15626;
lines__$1 = G__15627;
relseg = G__15628;
result = G__15629;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__15630){
var vec__15631 = p__15630;
var _ = cljs.core.nth.call(null,vec__15631,(0),null);
var source = cljs.core.nth.call(null,vec__15631,(1),null);
var line = cljs.core.nth.call(null,vec__15631,(2),null);
var col = cljs.core.nth.call(null,vec__15631,(3),null);
var name = cljs.core.nth.call(null,vec__15631,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__15634){
var vec__15635 = p__15634;
var gcol = cljs.core.nth.call(null,vec__15635,(0),null);
var sidx = cljs.core.nth.call(null,vec__15635,(1),null);
var line = cljs.core.nth.call(null,vec__15635,(2),null);
var col = cljs.core.nth.call(null,vec__15635,(3),null);
var name = cljs.core.nth.call(null,vec__15635,(4),null);
var seg = vec__15635;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__15638){
var vec__15639 = p__15638;
var _ = cljs.core.nth.call(null,vec__15639,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15639,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__15639,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__15639,(3),null);
var lname = cljs.core.nth.call(null,vec__15639,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5821__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5821__auto__)){
var name = temp__5821__auto__;
var idx = (function (){var temp__5821__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5821__auto____$1)){
var idx = temp__5821__auto____$1;
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
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__15645 = cljs.core.seq.call(null,infos);
var chunk__15646 = null;
var count__15647 = (0);
var i__15648 = (0);
while(true){
if((i__15648 < count__15647)){
var info = cljs.core._nth.call(null,chunk__15646,i__15648);
var segv_15999 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_16000 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16001 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_16000 > (lc_16001 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__15645,chunk__15646,count__15647,i__15648,segv_15999,gline_16000,lc_16001,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_16000 - (lc_16001 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15999], null));
});})(seq__15645,chunk__15646,count__15647,i__15648,segv_15999,gline_16000,lc_16001,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__15645,chunk__15646,count__15647,i__15648,segv_15999,gline_16000,lc_16001,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16000], null),cljs.core.conj,segv_15999);
});})(seq__15645,chunk__15646,count__15647,i__15648,segv_15999,gline_16000,lc_16001,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16002 = seq__15645;
var G__16003 = chunk__15646;
var G__16004 = count__15647;
var G__16005 = (i__15648 + (1));
seq__15645 = G__16002;
chunk__15646 = G__16003;
count__15647 = G__16004;
i__15648 = G__16005;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__15645);
if(temp__5823__auto__){
var seq__15645__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15645__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__15645__$1);
var G__16006 = cljs.core.chunk_rest.call(null,seq__15645__$1);
var G__16007 = c__5525__auto__;
var G__16008 = cljs.core.count.call(null,c__5525__auto__);
var G__16009 = (0);
seq__15645 = G__16006;
chunk__15646 = G__16007;
count__15647 = G__16008;
i__15648 = G__16009;
continue;
} else {
var info = cljs.core.first.call(null,seq__15645__$1);
var segv_16010 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_16011 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16012 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_16011 > (lc_16012 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__15645,chunk__15646,count__15647,i__15648,segv_16010,gline_16011,lc_16012,info,seq__15645__$1,temp__5823__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_16011 - (lc_16012 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16010], null));
});})(seq__15645,chunk__15646,count__15647,i__15648,segv_16010,gline_16011,lc_16012,info,seq__15645__$1,temp__5823__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__15645,chunk__15646,count__15647,i__15648,segv_16010,gline_16011,lc_16012,info,seq__15645__$1,temp__5823__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16011], null),cljs.core.conj,segv_16010);
});})(seq__15645,chunk__15646,count__15647,i__15648,segv_16010,gline_16011,lc_16012,info,seq__15645__$1,temp__5823__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16013 = cljs.core.next.call(null,seq__15645__$1);
var G__16014 = null;
var G__16015 = (0);
var G__16016 = (0);
seq__15645 = G__16013;
chunk__15646 = G__16014;
count__15647 = G__16015;
i__15648 = G__16016;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__15649_16017 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__15650_16018 = null;
var count__15651_16019 = (0);
var i__15652_16020 = (0);
while(true){
if((i__15652_16020 < count__15651_16019)){
var vec__15825_16021 = cljs.core._nth.call(null,chunk__15650_16018,i__15652_16020);
var source_idx_16022 = cljs.core.nth.call(null,vec__15825_16021,(0),null);
var vec__15828_16023 = cljs.core.nth.call(null,vec__15825_16021,(1),null);
var __16024 = cljs.core.nth.call(null,vec__15828_16023,(0),null);
var lines_16025__$1 = cljs.core.nth.call(null,vec__15828_16023,(1),null);
var seq__15831_16026 = cljs.core.seq.call(null,lines_16025__$1);
var chunk__15832_16027 = null;
var count__15833_16028 = (0);
var i__15834_16029 = (0);
while(true){
if((i__15834_16029 < count__15833_16028)){
var vec__15873_16030 = cljs.core._nth.call(null,chunk__15832_16027,i__15834_16029);
var line_16031 = cljs.core.nth.call(null,vec__15873_16030,(0),null);
var cols_16032 = cljs.core.nth.call(null,vec__15873_16030,(1),null);
var seq__15876_16033 = cljs.core.seq.call(null,cols_16032);
var chunk__15877_16034 = null;
var count__15878_16035 = (0);
var i__15879_16036 = (0);
while(true){
if((i__15879_16036 < count__15878_16035)){
var vec__15886_16037 = cljs.core._nth.call(null,chunk__15877_16034,i__15879_16036);
var col_16038 = cljs.core.nth.call(null,vec__15886_16037,(0),null);
var infos_16039 = cljs.core.nth.call(null,vec__15886_16037,(1),null);
encode_cols.call(null,infos_16039,source_idx_16022,line_16031,col_16038);


var G__16040 = seq__15876_16033;
var G__16041 = chunk__15877_16034;
var G__16042 = count__15878_16035;
var G__16043 = (i__15879_16036 + (1));
seq__15876_16033 = G__16040;
chunk__15877_16034 = G__16041;
count__15878_16035 = G__16042;
i__15879_16036 = G__16043;
continue;
} else {
var temp__5823__auto___16044 = cljs.core.seq.call(null,seq__15876_16033);
if(temp__5823__auto___16044){
var seq__15876_16045__$1 = temp__5823__auto___16044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15876_16045__$1)){
var c__5525__auto___16046 = cljs.core.chunk_first.call(null,seq__15876_16045__$1);
var G__16047 = cljs.core.chunk_rest.call(null,seq__15876_16045__$1);
var G__16048 = c__5525__auto___16046;
var G__16049 = cljs.core.count.call(null,c__5525__auto___16046);
var G__16050 = (0);
seq__15876_16033 = G__16047;
chunk__15877_16034 = G__16048;
count__15878_16035 = G__16049;
i__15879_16036 = G__16050;
continue;
} else {
var vec__15889_16051 = cljs.core.first.call(null,seq__15876_16045__$1);
var col_16052 = cljs.core.nth.call(null,vec__15889_16051,(0),null);
var infos_16053 = cljs.core.nth.call(null,vec__15889_16051,(1),null);
encode_cols.call(null,infos_16053,source_idx_16022,line_16031,col_16052);


var G__16054 = cljs.core.next.call(null,seq__15876_16045__$1);
var G__16055 = null;
var G__16056 = (0);
var G__16057 = (0);
seq__15876_16033 = G__16054;
chunk__15877_16034 = G__16055;
count__15878_16035 = G__16056;
i__15879_16036 = G__16057;
continue;
}
} else {
}
}
break;
}


var G__16058 = seq__15831_16026;
var G__16059 = chunk__15832_16027;
var G__16060 = count__15833_16028;
var G__16061 = (i__15834_16029 + (1));
seq__15831_16026 = G__16058;
chunk__15832_16027 = G__16059;
count__15833_16028 = G__16060;
i__15834_16029 = G__16061;
continue;
} else {
var temp__5823__auto___16062 = cljs.core.seq.call(null,seq__15831_16026);
if(temp__5823__auto___16062){
var seq__15831_16063__$1 = temp__5823__auto___16062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15831_16063__$1)){
var c__5525__auto___16064 = cljs.core.chunk_first.call(null,seq__15831_16063__$1);
var G__16065 = cljs.core.chunk_rest.call(null,seq__15831_16063__$1);
var G__16066 = c__5525__auto___16064;
var G__16067 = cljs.core.count.call(null,c__5525__auto___16064);
var G__16068 = (0);
seq__15831_16026 = G__16065;
chunk__15832_16027 = G__16066;
count__15833_16028 = G__16067;
i__15834_16029 = G__16068;
continue;
} else {
var vec__15892_16069 = cljs.core.first.call(null,seq__15831_16063__$1);
var line_16070 = cljs.core.nth.call(null,vec__15892_16069,(0),null);
var cols_16071 = cljs.core.nth.call(null,vec__15892_16069,(1),null);
var seq__15895_16072 = cljs.core.seq.call(null,cols_16071);
var chunk__15896_16073 = null;
var count__15897_16074 = (0);
var i__15898_16075 = (0);
while(true){
if((i__15898_16075 < count__15897_16074)){
var vec__15905_16076 = cljs.core._nth.call(null,chunk__15896_16073,i__15898_16075);
var col_16077 = cljs.core.nth.call(null,vec__15905_16076,(0),null);
var infos_16078 = cljs.core.nth.call(null,vec__15905_16076,(1),null);
encode_cols.call(null,infos_16078,source_idx_16022,line_16070,col_16077);


var G__16079 = seq__15895_16072;
var G__16080 = chunk__15896_16073;
var G__16081 = count__15897_16074;
var G__16082 = (i__15898_16075 + (1));
seq__15895_16072 = G__16079;
chunk__15896_16073 = G__16080;
count__15897_16074 = G__16081;
i__15898_16075 = G__16082;
continue;
} else {
var temp__5823__auto___16083__$1 = cljs.core.seq.call(null,seq__15895_16072);
if(temp__5823__auto___16083__$1){
var seq__15895_16084__$1 = temp__5823__auto___16083__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15895_16084__$1)){
var c__5525__auto___16085 = cljs.core.chunk_first.call(null,seq__15895_16084__$1);
var G__16086 = cljs.core.chunk_rest.call(null,seq__15895_16084__$1);
var G__16087 = c__5525__auto___16085;
var G__16088 = cljs.core.count.call(null,c__5525__auto___16085);
var G__16089 = (0);
seq__15895_16072 = G__16086;
chunk__15896_16073 = G__16087;
count__15897_16074 = G__16088;
i__15898_16075 = G__16089;
continue;
} else {
var vec__15908_16090 = cljs.core.first.call(null,seq__15895_16084__$1);
var col_16091 = cljs.core.nth.call(null,vec__15908_16090,(0),null);
var infos_16092 = cljs.core.nth.call(null,vec__15908_16090,(1),null);
encode_cols.call(null,infos_16092,source_idx_16022,line_16070,col_16091);


var G__16093 = cljs.core.next.call(null,seq__15895_16084__$1);
var G__16094 = null;
var G__16095 = (0);
var G__16096 = (0);
seq__15895_16072 = G__16093;
chunk__15896_16073 = G__16094;
count__15897_16074 = G__16095;
i__15898_16075 = G__16096;
continue;
}
} else {
}
}
break;
}


var G__16097 = cljs.core.next.call(null,seq__15831_16063__$1);
var G__16098 = null;
var G__16099 = (0);
var G__16100 = (0);
seq__15831_16026 = G__16097;
chunk__15832_16027 = G__16098;
count__15833_16028 = G__16099;
i__15834_16029 = G__16100;
continue;
}
} else {
}
}
break;
}


var G__16101 = seq__15649_16017;
var G__16102 = chunk__15650_16018;
var G__16103 = count__15651_16019;
var G__16104 = (i__15652_16020 + (1));
seq__15649_16017 = G__16101;
chunk__15650_16018 = G__16102;
count__15651_16019 = G__16103;
i__15652_16020 = G__16104;
continue;
} else {
var temp__5823__auto___16105 = cljs.core.seq.call(null,seq__15649_16017);
if(temp__5823__auto___16105){
var seq__15649_16106__$1 = temp__5823__auto___16105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15649_16106__$1)){
var c__5525__auto___16107 = cljs.core.chunk_first.call(null,seq__15649_16106__$1);
var G__16108 = cljs.core.chunk_rest.call(null,seq__15649_16106__$1);
var G__16109 = c__5525__auto___16107;
var G__16110 = cljs.core.count.call(null,c__5525__auto___16107);
var G__16111 = (0);
seq__15649_16017 = G__16108;
chunk__15650_16018 = G__16109;
count__15651_16019 = G__16110;
i__15652_16020 = G__16111;
continue;
} else {
var vec__15911_16112 = cljs.core.first.call(null,seq__15649_16106__$1);
var source_idx_16113 = cljs.core.nth.call(null,vec__15911_16112,(0),null);
var vec__15914_16114 = cljs.core.nth.call(null,vec__15911_16112,(1),null);
var __16115 = cljs.core.nth.call(null,vec__15914_16114,(0),null);
var lines_16116__$1 = cljs.core.nth.call(null,vec__15914_16114,(1),null);
var seq__15917_16117 = cljs.core.seq.call(null,lines_16116__$1);
var chunk__15918_16118 = null;
var count__15919_16119 = (0);
var i__15920_16120 = (0);
while(true){
if((i__15920_16120 < count__15919_16119)){
var vec__15959_16121 = cljs.core._nth.call(null,chunk__15918_16118,i__15920_16120);
var line_16122 = cljs.core.nth.call(null,vec__15959_16121,(0),null);
var cols_16123 = cljs.core.nth.call(null,vec__15959_16121,(1),null);
var seq__15962_16124 = cljs.core.seq.call(null,cols_16123);
var chunk__15963_16125 = null;
var count__15964_16126 = (0);
var i__15965_16127 = (0);
while(true){
if((i__15965_16127 < count__15964_16126)){
var vec__15972_16128 = cljs.core._nth.call(null,chunk__15963_16125,i__15965_16127);
var col_16129 = cljs.core.nth.call(null,vec__15972_16128,(0),null);
var infos_16130 = cljs.core.nth.call(null,vec__15972_16128,(1),null);
encode_cols.call(null,infos_16130,source_idx_16113,line_16122,col_16129);


var G__16131 = seq__15962_16124;
var G__16132 = chunk__15963_16125;
var G__16133 = count__15964_16126;
var G__16134 = (i__15965_16127 + (1));
seq__15962_16124 = G__16131;
chunk__15963_16125 = G__16132;
count__15964_16126 = G__16133;
i__15965_16127 = G__16134;
continue;
} else {
var temp__5823__auto___16135__$1 = cljs.core.seq.call(null,seq__15962_16124);
if(temp__5823__auto___16135__$1){
var seq__15962_16136__$1 = temp__5823__auto___16135__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15962_16136__$1)){
var c__5525__auto___16137 = cljs.core.chunk_first.call(null,seq__15962_16136__$1);
var G__16138 = cljs.core.chunk_rest.call(null,seq__15962_16136__$1);
var G__16139 = c__5525__auto___16137;
var G__16140 = cljs.core.count.call(null,c__5525__auto___16137);
var G__16141 = (0);
seq__15962_16124 = G__16138;
chunk__15963_16125 = G__16139;
count__15964_16126 = G__16140;
i__15965_16127 = G__16141;
continue;
} else {
var vec__15975_16142 = cljs.core.first.call(null,seq__15962_16136__$1);
var col_16143 = cljs.core.nth.call(null,vec__15975_16142,(0),null);
var infos_16144 = cljs.core.nth.call(null,vec__15975_16142,(1),null);
encode_cols.call(null,infos_16144,source_idx_16113,line_16122,col_16143);


var G__16145 = cljs.core.next.call(null,seq__15962_16136__$1);
var G__16146 = null;
var G__16147 = (0);
var G__16148 = (0);
seq__15962_16124 = G__16145;
chunk__15963_16125 = G__16146;
count__15964_16126 = G__16147;
i__15965_16127 = G__16148;
continue;
}
} else {
}
}
break;
}


var G__16149 = seq__15917_16117;
var G__16150 = chunk__15918_16118;
var G__16151 = count__15919_16119;
var G__16152 = (i__15920_16120 + (1));
seq__15917_16117 = G__16149;
chunk__15918_16118 = G__16150;
count__15919_16119 = G__16151;
i__15920_16120 = G__16152;
continue;
} else {
var temp__5823__auto___16153__$1 = cljs.core.seq.call(null,seq__15917_16117);
if(temp__5823__auto___16153__$1){
var seq__15917_16154__$1 = temp__5823__auto___16153__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15917_16154__$1)){
var c__5525__auto___16155 = cljs.core.chunk_first.call(null,seq__15917_16154__$1);
var G__16156 = cljs.core.chunk_rest.call(null,seq__15917_16154__$1);
var G__16157 = c__5525__auto___16155;
var G__16158 = cljs.core.count.call(null,c__5525__auto___16155);
var G__16159 = (0);
seq__15917_16117 = G__16156;
chunk__15918_16118 = G__16157;
count__15919_16119 = G__16158;
i__15920_16120 = G__16159;
continue;
} else {
var vec__15978_16160 = cljs.core.first.call(null,seq__15917_16154__$1);
var line_16161 = cljs.core.nth.call(null,vec__15978_16160,(0),null);
var cols_16162 = cljs.core.nth.call(null,vec__15978_16160,(1),null);
var seq__15981_16163 = cljs.core.seq.call(null,cols_16162);
var chunk__15982_16164 = null;
var count__15983_16165 = (0);
var i__15984_16166 = (0);
while(true){
if((i__15984_16166 < count__15983_16165)){
var vec__15991_16167 = cljs.core._nth.call(null,chunk__15982_16164,i__15984_16166);
var col_16168 = cljs.core.nth.call(null,vec__15991_16167,(0),null);
var infos_16169 = cljs.core.nth.call(null,vec__15991_16167,(1),null);
encode_cols.call(null,infos_16169,source_idx_16113,line_16161,col_16168);


var G__16170 = seq__15981_16163;
var G__16171 = chunk__15982_16164;
var G__16172 = count__15983_16165;
var G__16173 = (i__15984_16166 + (1));
seq__15981_16163 = G__16170;
chunk__15982_16164 = G__16171;
count__15983_16165 = G__16172;
i__15984_16166 = G__16173;
continue;
} else {
var temp__5823__auto___16174__$2 = cljs.core.seq.call(null,seq__15981_16163);
if(temp__5823__auto___16174__$2){
var seq__15981_16175__$1 = temp__5823__auto___16174__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15981_16175__$1)){
var c__5525__auto___16176 = cljs.core.chunk_first.call(null,seq__15981_16175__$1);
var G__16177 = cljs.core.chunk_rest.call(null,seq__15981_16175__$1);
var G__16178 = c__5525__auto___16176;
var G__16179 = cljs.core.count.call(null,c__5525__auto___16176);
var G__16180 = (0);
seq__15981_16163 = G__16177;
chunk__15982_16164 = G__16178;
count__15983_16165 = G__16179;
i__15984_16166 = G__16180;
continue;
} else {
var vec__15994_16181 = cljs.core.first.call(null,seq__15981_16175__$1);
var col_16182 = cljs.core.nth.call(null,vec__15994_16181,(0),null);
var infos_16183 = cljs.core.nth.call(null,vec__15994_16181,(1),null);
encode_cols.call(null,infos_16183,source_idx_16113,line_16161,col_16182);


var G__16184 = cljs.core.next.call(null,seq__15981_16175__$1);
var G__16185 = null;
var G__16186 = (0);
var G__16187 = (0);
seq__15981_16163 = G__16184;
chunk__15982_16164 = G__16185;
count__15983_16165 = G__16186;
i__15984_16166 = G__16187;
continue;
}
} else {
}
}
break;
}


var G__16188 = cljs.core.next.call(null,seq__15917_16154__$1);
var G__16189 = null;
var G__16190 = (0);
var G__16191 = (0);
seq__15917_16117 = G__16188;
chunk__15918_16118 = G__16189;
count__15919_16119 = G__16190;
i__15920_16120 = G__16191;
continue;
}
} else {
}
}
break;
}


var G__16192 = cljs.core.next.call(null,seq__15649_16106__$1);
var G__16193 = null;
var G__16194 = (0);
var G__16195 = (0);
seq__15649_16017 = G__16192;
chunk__15650_16018 = G__16193;
count__15651_16019 = G__16194;
i__15652_16020 = G__16195;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__15997 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__15642_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15642_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__15643_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__15643_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__15644_SHARP_){
return clojure.string.join.call(null,",",p1__15644_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__15998 = G__15997;
cljs.source_map.goog$module$goog$object.set.call(null,G__15998,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__15998;
} else {
return G__15997;
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
var vec__16196 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__16196,(0),null);
var col_map = cljs.core.nth.call(null,vec__16196,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__16199 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__16199,(0),null);
var infos = cljs.core.nth.call(null,vec__16199,(1),null);
var G__16204 = cljs.core.next.call(null,col_map_seq);
var G__16205 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__16199,col,infos,vec__16196,line,col_map){
return (function (v,p__16202){
var map__16203 = p__16202;
var map__16203__$1 = cljs.core.__destructure_map.call(null,map__16203);
var gline = cljs.core.get.call(null,map__16203__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__16203__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__16199,col,infos,vec__16196,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__16204;
new_cols = G__16205;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16206 = cljs.core.next.call(null,line_map_seq);
var G__16207 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__16206;
new_lines = G__16207;
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
var seq__16208_16416 = cljs.core.seq.call(null,reverse_map);
var chunk__16209_16417 = null;
var count__16210_16418 = (0);
var i__16211_16419 = (0);
while(true){
if((i__16211_16419 < count__16210_16418)){
var vec__16314_16420 = cljs.core._nth.call(null,chunk__16209_16417,i__16211_16419);
var line_16421 = cljs.core.nth.call(null,vec__16314_16420,(0),null);
var columns_16422 = cljs.core.nth.call(null,vec__16314_16420,(1),null);
var seq__16317_16423 = cljs.core.seq.call(null,columns_16422);
var chunk__16318_16424 = null;
var count__16319_16425 = (0);
var i__16320_16426 = (0);
while(true){
if((i__16320_16426 < count__16319_16425)){
var vec__16343_16427 = cljs.core._nth.call(null,chunk__16318_16424,i__16320_16426);
var column_16428 = cljs.core.nth.call(null,vec__16343_16427,(0),null);
var column_info_16429 = cljs.core.nth.call(null,vec__16343_16427,(1),null);
var seq__16346_16430 = cljs.core.seq.call(null,column_info_16429);
var chunk__16347_16431 = null;
var count__16348_16432 = (0);
var i__16349_16433 = (0);
while(true){
if((i__16349_16433 < count__16348_16432)){
var map__16352_16434 = cljs.core._nth.call(null,chunk__16347_16431,i__16349_16433);
var map__16352_16435__$1 = cljs.core.__destructure_map.call(null,map__16352_16434);
var gline_16436 = cljs.core.get.call(null,map__16352_16435__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16437 = cljs.core.get.call(null,map__16352_16435__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16438 = cljs.core.get.call(null,map__16352_16435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16436], null),cljs.core.fnil.call(null,((function (seq__16346_16430,chunk__16347_16431,count__16348_16432,i__16349_16433,seq__16317_16423,chunk__16318_16424,count__16319_16425,i__16320_16426,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16352_16434,map__16352_16435__$1,gline_16436,gcol_16437,name_16438,vec__16343_16427,column_16428,column_info_16429,vec__16314_16420,line_16421,columns_16422,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16437], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16421,new cljs.core.Keyword(null,"col","col",-1959363084),column_16428,new cljs.core.Keyword(null,"name","name",1843675177),name_16438], null));
});})(seq__16346_16430,chunk__16347_16431,count__16348_16432,i__16349_16433,seq__16317_16423,chunk__16318_16424,count__16319_16425,i__16320_16426,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16352_16434,map__16352_16435__$1,gline_16436,gcol_16437,name_16438,vec__16343_16427,column_16428,column_info_16429,vec__16314_16420,line_16421,columns_16422,inverted))
,cljs.core.sorted_map.call(null)));


var G__16439 = seq__16346_16430;
var G__16440 = chunk__16347_16431;
var G__16441 = count__16348_16432;
var G__16442 = (i__16349_16433 + (1));
seq__16346_16430 = G__16439;
chunk__16347_16431 = G__16440;
count__16348_16432 = G__16441;
i__16349_16433 = G__16442;
continue;
} else {
var temp__5823__auto___16443 = cljs.core.seq.call(null,seq__16346_16430);
if(temp__5823__auto___16443){
var seq__16346_16444__$1 = temp__5823__auto___16443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16346_16444__$1)){
var c__5525__auto___16445 = cljs.core.chunk_first.call(null,seq__16346_16444__$1);
var G__16446 = cljs.core.chunk_rest.call(null,seq__16346_16444__$1);
var G__16447 = c__5525__auto___16445;
var G__16448 = cljs.core.count.call(null,c__5525__auto___16445);
var G__16449 = (0);
seq__16346_16430 = G__16446;
chunk__16347_16431 = G__16447;
count__16348_16432 = G__16448;
i__16349_16433 = G__16449;
continue;
} else {
var map__16353_16450 = cljs.core.first.call(null,seq__16346_16444__$1);
var map__16353_16451__$1 = cljs.core.__destructure_map.call(null,map__16353_16450);
var gline_16452 = cljs.core.get.call(null,map__16353_16451__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16453 = cljs.core.get.call(null,map__16353_16451__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16454 = cljs.core.get.call(null,map__16353_16451__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16452], null),cljs.core.fnil.call(null,((function (seq__16346_16430,chunk__16347_16431,count__16348_16432,i__16349_16433,seq__16317_16423,chunk__16318_16424,count__16319_16425,i__16320_16426,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16353_16450,map__16353_16451__$1,gline_16452,gcol_16453,name_16454,seq__16346_16444__$1,temp__5823__auto___16443,vec__16343_16427,column_16428,column_info_16429,vec__16314_16420,line_16421,columns_16422,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16453], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16421,new cljs.core.Keyword(null,"col","col",-1959363084),column_16428,new cljs.core.Keyword(null,"name","name",1843675177),name_16454], null));
});})(seq__16346_16430,chunk__16347_16431,count__16348_16432,i__16349_16433,seq__16317_16423,chunk__16318_16424,count__16319_16425,i__16320_16426,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16353_16450,map__16353_16451__$1,gline_16452,gcol_16453,name_16454,seq__16346_16444__$1,temp__5823__auto___16443,vec__16343_16427,column_16428,column_info_16429,vec__16314_16420,line_16421,columns_16422,inverted))
,cljs.core.sorted_map.call(null)));


var G__16455 = cljs.core.next.call(null,seq__16346_16444__$1);
var G__16456 = null;
var G__16457 = (0);
var G__16458 = (0);
seq__16346_16430 = G__16455;
chunk__16347_16431 = G__16456;
count__16348_16432 = G__16457;
i__16349_16433 = G__16458;
continue;
}
} else {
}
}
break;
}


var G__16459 = seq__16317_16423;
var G__16460 = chunk__16318_16424;
var G__16461 = count__16319_16425;
var G__16462 = (i__16320_16426 + (1));
seq__16317_16423 = G__16459;
chunk__16318_16424 = G__16460;
count__16319_16425 = G__16461;
i__16320_16426 = G__16462;
continue;
} else {
var temp__5823__auto___16463 = cljs.core.seq.call(null,seq__16317_16423);
if(temp__5823__auto___16463){
var seq__16317_16464__$1 = temp__5823__auto___16463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16317_16464__$1)){
var c__5525__auto___16465 = cljs.core.chunk_first.call(null,seq__16317_16464__$1);
var G__16466 = cljs.core.chunk_rest.call(null,seq__16317_16464__$1);
var G__16467 = c__5525__auto___16465;
var G__16468 = cljs.core.count.call(null,c__5525__auto___16465);
var G__16469 = (0);
seq__16317_16423 = G__16466;
chunk__16318_16424 = G__16467;
count__16319_16425 = G__16468;
i__16320_16426 = G__16469;
continue;
} else {
var vec__16354_16470 = cljs.core.first.call(null,seq__16317_16464__$1);
var column_16471 = cljs.core.nth.call(null,vec__16354_16470,(0),null);
var column_info_16472 = cljs.core.nth.call(null,vec__16354_16470,(1),null);
var seq__16357_16473 = cljs.core.seq.call(null,column_info_16472);
var chunk__16358_16474 = null;
var count__16359_16475 = (0);
var i__16360_16476 = (0);
while(true){
if((i__16360_16476 < count__16359_16475)){
var map__16363_16477 = cljs.core._nth.call(null,chunk__16358_16474,i__16360_16476);
var map__16363_16478__$1 = cljs.core.__destructure_map.call(null,map__16363_16477);
var gline_16479 = cljs.core.get.call(null,map__16363_16478__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16480 = cljs.core.get.call(null,map__16363_16478__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16481 = cljs.core.get.call(null,map__16363_16478__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16479], null),cljs.core.fnil.call(null,((function (seq__16357_16473,chunk__16358_16474,count__16359_16475,i__16360_16476,seq__16317_16423,chunk__16318_16424,count__16319_16425,i__16320_16426,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16363_16477,map__16363_16478__$1,gline_16479,gcol_16480,name_16481,vec__16354_16470,column_16471,column_info_16472,seq__16317_16464__$1,temp__5823__auto___16463,vec__16314_16420,line_16421,columns_16422,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16480], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16421,new cljs.core.Keyword(null,"col","col",-1959363084),column_16471,new cljs.core.Keyword(null,"name","name",1843675177),name_16481], null));
});})(seq__16357_16473,chunk__16358_16474,count__16359_16475,i__16360_16476,seq__16317_16423,chunk__16318_16424,count__16319_16425,i__16320_16426,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16363_16477,map__16363_16478__$1,gline_16479,gcol_16480,name_16481,vec__16354_16470,column_16471,column_info_16472,seq__16317_16464__$1,temp__5823__auto___16463,vec__16314_16420,line_16421,columns_16422,inverted))
,cljs.core.sorted_map.call(null)));


var G__16482 = seq__16357_16473;
var G__16483 = chunk__16358_16474;
var G__16484 = count__16359_16475;
var G__16485 = (i__16360_16476 + (1));
seq__16357_16473 = G__16482;
chunk__16358_16474 = G__16483;
count__16359_16475 = G__16484;
i__16360_16476 = G__16485;
continue;
} else {
var temp__5823__auto___16486__$1 = cljs.core.seq.call(null,seq__16357_16473);
if(temp__5823__auto___16486__$1){
var seq__16357_16487__$1 = temp__5823__auto___16486__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16357_16487__$1)){
var c__5525__auto___16488 = cljs.core.chunk_first.call(null,seq__16357_16487__$1);
var G__16489 = cljs.core.chunk_rest.call(null,seq__16357_16487__$1);
var G__16490 = c__5525__auto___16488;
var G__16491 = cljs.core.count.call(null,c__5525__auto___16488);
var G__16492 = (0);
seq__16357_16473 = G__16489;
chunk__16358_16474 = G__16490;
count__16359_16475 = G__16491;
i__16360_16476 = G__16492;
continue;
} else {
var map__16364_16493 = cljs.core.first.call(null,seq__16357_16487__$1);
var map__16364_16494__$1 = cljs.core.__destructure_map.call(null,map__16364_16493);
var gline_16495 = cljs.core.get.call(null,map__16364_16494__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16496 = cljs.core.get.call(null,map__16364_16494__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16497 = cljs.core.get.call(null,map__16364_16494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16495], null),cljs.core.fnil.call(null,((function (seq__16357_16473,chunk__16358_16474,count__16359_16475,i__16360_16476,seq__16317_16423,chunk__16318_16424,count__16319_16425,i__16320_16426,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16364_16493,map__16364_16494__$1,gline_16495,gcol_16496,name_16497,seq__16357_16487__$1,temp__5823__auto___16486__$1,vec__16354_16470,column_16471,column_info_16472,seq__16317_16464__$1,temp__5823__auto___16463,vec__16314_16420,line_16421,columns_16422,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16496], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16421,new cljs.core.Keyword(null,"col","col",-1959363084),column_16471,new cljs.core.Keyword(null,"name","name",1843675177),name_16497], null));
});})(seq__16357_16473,chunk__16358_16474,count__16359_16475,i__16360_16476,seq__16317_16423,chunk__16318_16424,count__16319_16425,i__16320_16426,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16364_16493,map__16364_16494__$1,gline_16495,gcol_16496,name_16497,seq__16357_16487__$1,temp__5823__auto___16486__$1,vec__16354_16470,column_16471,column_info_16472,seq__16317_16464__$1,temp__5823__auto___16463,vec__16314_16420,line_16421,columns_16422,inverted))
,cljs.core.sorted_map.call(null)));


var G__16498 = cljs.core.next.call(null,seq__16357_16487__$1);
var G__16499 = null;
var G__16500 = (0);
var G__16501 = (0);
seq__16357_16473 = G__16498;
chunk__16358_16474 = G__16499;
count__16359_16475 = G__16500;
i__16360_16476 = G__16501;
continue;
}
} else {
}
}
break;
}


var G__16502 = cljs.core.next.call(null,seq__16317_16464__$1);
var G__16503 = null;
var G__16504 = (0);
var G__16505 = (0);
seq__16317_16423 = G__16502;
chunk__16318_16424 = G__16503;
count__16319_16425 = G__16504;
i__16320_16426 = G__16505;
continue;
}
} else {
}
}
break;
}


var G__16506 = seq__16208_16416;
var G__16507 = chunk__16209_16417;
var G__16508 = count__16210_16418;
var G__16509 = (i__16211_16419 + (1));
seq__16208_16416 = G__16506;
chunk__16209_16417 = G__16507;
count__16210_16418 = G__16508;
i__16211_16419 = G__16509;
continue;
} else {
var temp__5823__auto___16510 = cljs.core.seq.call(null,seq__16208_16416);
if(temp__5823__auto___16510){
var seq__16208_16511__$1 = temp__5823__auto___16510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16208_16511__$1)){
var c__5525__auto___16512 = cljs.core.chunk_first.call(null,seq__16208_16511__$1);
var G__16513 = cljs.core.chunk_rest.call(null,seq__16208_16511__$1);
var G__16514 = c__5525__auto___16512;
var G__16515 = cljs.core.count.call(null,c__5525__auto___16512);
var G__16516 = (0);
seq__16208_16416 = G__16513;
chunk__16209_16417 = G__16514;
count__16210_16418 = G__16515;
i__16211_16419 = G__16516;
continue;
} else {
var vec__16365_16517 = cljs.core.first.call(null,seq__16208_16511__$1);
var line_16518 = cljs.core.nth.call(null,vec__16365_16517,(0),null);
var columns_16519 = cljs.core.nth.call(null,vec__16365_16517,(1),null);
var seq__16368_16520 = cljs.core.seq.call(null,columns_16519);
var chunk__16369_16521 = null;
var count__16370_16522 = (0);
var i__16371_16523 = (0);
while(true){
if((i__16371_16523 < count__16370_16522)){
var vec__16394_16524 = cljs.core._nth.call(null,chunk__16369_16521,i__16371_16523);
var column_16525 = cljs.core.nth.call(null,vec__16394_16524,(0),null);
var column_info_16526 = cljs.core.nth.call(null,vec__16394_16524,(1),null);
var seq__16397_16527 = cljs.core.seq.call(null,column_info_16526);
var chunk__16398_16528 = null;
var count__16399_16529 = (0);
var i__16400_16530 = (0);
while(true){
if((i__16400_16530 < count__16399_16529)){
var map__16403_16531 = cljs.core._nth.call(null,chunk__16398_16528,i__16400_16530);
var map__16403_16532__$1 = cljs.core.__destructure_map.call(null,map__16403_16531);
var gline_16533 = cljs.core.get.call(null,map__16403_16532__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16534 = cljs.core.get.call(null,map__16403_16532__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16535 = cljs.core.get.call(null,map__16403_16532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16533], null),cljs.core.fnil.call(null,((function (seq__16397_16527,chunk__16398_16528,count__16399_16529,i__16400_16530,seq__16368_16520,chunk__16369_16521,count__16370_16522,i__16371_16523,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16403_16531,map__16403_16532__$1,gline_16533,gcol_16534,name_16535,vec__16394_16524,column_16525,column_info_16526,vec__16365_16517,line_16518,columns_16519,seq__16208_16511__$1,temp__5823__auto___16510,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16534], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16518,new cljs.core.Keyword(null,"col","col",-1959363084),column_16525,new cljs.core.Keyword(null,"name","name",1843675177),name_16535], null));
});})(seq__16397_16527,chunk__16398_16528,count__16399_16529,i__16400_16530,seq__16368_16520,chunk__16369_16521,count__16370_16522,i__16371_16523,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16403_16531,map__16403_16532__$1,gline_16533,gcol_16534,name_16535,vec__16394_16524,column_16525,column_info_16526,vec__16365_16517,line_16518,columns_16519,seq__16208_16511__$1,temp__5823__auto___16510,inverted))
,cljs.core.sorted_map.call(null)));


var G__16536 = seq__16397_16527;
var G__16537 = chunk__16398_16528;
var G__16538 = count__16399_16529;
var G__16539 = (i__16400_16530 + (1));
seq__16397_16527 = G__16536;
chunk__16398_16528 = G__16537;
count__16399_16529 = G__16538;
i__16400_16530 = G__16539;
continue;
} else {
var temp__5823__auto___16540__$1 = cljs.core.seq.call(null,seq__16397_16527);
if(temp__5823__auto___16540__$1){
var seq__16397_16541__$1 = temp__5823__auto___16540__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16397_16541__$1)){
var c__5525__auto___16542 = cljs.core.chunk_first.call(null,seq__16397_16541__$1);
var G__16543 = cljs.core.chunk_rest.call(null,seq__16397_16541__$1);
var G__16544 = c__5525__auto___16542;
var G__16545 = cljs.core.count.call(null,c__5525__auto___16542);
var G__16546 = (0);
seq__16397_16527 = G__16543;
chunk__16398_16528 = G__16544;
count__16399_16529 = G__16545;
i__16400_16530 = G__16546;
continue;
} else {
var map__16404_16547 = cljs.core.first.call(null,seq__16397_16541__$1);
var map__16404_16548__$1 = cljs.core.__destructure_map.call(null,map__16404_16547);
var gline_16549 = cljs.core.get.call(null,map__16404_16548__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16550 = cljs.core.get.call(null,map__16404_16548__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16551 = cljs.core.get.call(null,map__16404_16548__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16549], null),cljs.core.fnil.call(null,((function (seq__16397_16527,chunk__16398_16528,count__16399_16529,i__16400_16530,seq__16368_16520,chunk__16369_16521,count__16370_16522,i__16371_16523,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16404_16547,map__16404_16548__$1,gline_16549,gcol_16550,name_16551,seq__16397_16541__$1,temp__5823__auto___16540__$1,vec__16394_16524,column_16525,column_info_16526,vec__16365_16517,line_16518,columns_16519,seq__16208_16511__$1,temp__5823__auto___16510,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16550], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16518,new cljs.core.Keyword(null,"col","col",-1959363084),column_16525,new cljs.core.Keyword(null,"name","name",1843675177),name_16551], null));
});})(seq__16397_16527,chunk__16398_16528,count__16399_16529,i__16400_16530,seq__16368_16520,chunk__16369_16521,count__16370_16522,i__16371_16523,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16404_16547,map__16404_16548__$1,gline_16549,gcol_16550,name_16551,seq__16397_16541__$1,temp__5823__auto___16540__$1,vec__16394_16524,column_16525,column_info_16526,vec__16365_16517,line_16518,columns_16519,seq__16208_16511__$1,temp__5823__auto___16510,inverted))
,cljs.core.sorted_map.call(null)));


var G__16552 = cljs.core.next.call(null,seq__16397_16541__$1);
var G__16553 = null;
var G__16554 = (0);
var G__16555 = (0);
seq__16397_16527 = G__16552;
chunk__16398_16528 = G__16553;
count__16399_16529 = G__16554;
i__16400_16530 = G__16555;
continue;
}
} else {
}
}
break;
}


var G__16556 = seq__16368_16520;
var G__16557 = chunk__16369_16521;
var G__16558 = count__16370_16522;
var G__16559 = (i__16371_16523 + (1));
seq__16368_16520 = G__16556;
chunk__16369_16521 = G__16557;
count__16370_16522 = G__16558;
i__16371_16523 = G__16559;
continue;
} else {
var temp__5823__auto___16560__$1 = cljs.core.seq.call(null,seq__16368_16520);
if(temp__5823__auto___16560__$1){
var seq__16368_16561__$1 = temp__5823__auto___16560__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16368_16561__$1)){
var c__5525__auto___16562 = cljs.core.chunk_first.call(null,seq__16368_16561__$1);
var G__16563 = cljs.core.chunk_rest.call(null,seq__16368_16561__$1);
var G__16564 = c__5525__auto___16562;
var G__16565 = cljs.core.count.call(null,c__5525__auto___16562);
var G__16566 = (0);
seq__16368_16520 = G__16563;
chunk__16369_16521 = G__16564;
count__16370_16522 = G__16565;
i__16371_16523 = G__16566;
continue;
} else {
var vec__16405_16567 = cljs.core.first.call(null,seq__16368_16561__$1);
var column_16568 = cljs.core.nth.call(null,vec__16405_16567,(0),null);
var column_info_16569 = cljs.core.nth.call(null,vec__16405_16567,(1),null);
var seq__16408_16570 = cljs.core.seq.call(null,column_info_16569);
var chunk__16409_16571 = null;
var count__16410_16572 = (0);
var i__16411_16573 = (0);
while(true){
if((i__16411_16573 < count__16410_16572)){
var map__16414_16574 = cljs.core._nth.call(null,chunk__16409_16571,i__16411_16573);
var map__16414_16575__$1 = cljs.core.__destructure_map.call(null,map__16414_16574);
var gline_16576 = cljs.core.get.call(null,map__16414_16575__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16577 = cljs.core.get.call(null,map__16414_16575__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16578 = cljs.core.get.call(null,map__16414_16575__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16576], null),cljs.core.fnil.call(null,((function (seq__16408_16570,chunk__16409_16571,count__16410_16572,i__16411_16573,seq__16368_16520,chunk__16369_16521,count__16370_16522,i__16371_16523,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16414_16574,map__16414_16575__$1,gline_16576,gcol_16577,name_16578,vec__16405_16567,column_16568,column_info_16569,seq__16368_16561__$1,temp__5823__auto___16560__$1,vec__16365_16517,line_16518,columns_16519,seq__16208_16511__$1,temp__5823__auto___16510,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16577], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16518,new cljs.core.Keyword(null,"col","col",-1959363084),column_16568,new cljs.core.Keyword(null,"name","name",1843675177),name_16578], null));
});})(seq__16408_16570,chunk__16409_16571,count__16410_16572,i__16411_16573,seq__16368_16520,chunk__16369_16521,count__16370_16522,i__16371_16523,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16414_16574,map__16414_16575__$1,gline_16576,gcol_16577,name_16578,vec__16405_16567,column_16568,column_info_16569,seq__16368_16561__$1,temp__5823__auto___16560__$1,vec__16365_16517,line_16518,columns_16519,seq__16208_16511__$1,temp__5823__auto___16510,inverted))
,cljs.core.sorted_map.call(null)));


var G__16579 = seq__16408_16570;
var G__16580 = chunk__16409_16571;
var G__16581 = count__16410_16572;
var G__16582 = (i__16411_16573 + (1));
seq__16408_16570 = G__16579;
chunk__16409_16571 = G__16580;
count__16410_16572 = G__16581;
i__16411_16573 = G__16582;
continue;
} else {
var temp__5823__auto___16583__$2 = cljs.core.seq.call(null,seq__16408_16570);
if(temp__5823__auto___16583__$2){
var seq__16408_16584__$1 = temp__5823__auto___16583__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16408_16584__$1)){
var c__5525__auto___16585 = cljs.core.chunk_first.call(null,seq__16408_16584__$1);
var G__16586 = cljs.core.chunk_rest.call(null,seq__16408_16584__$1);
var G__16587 = c__5525__auto___16585;
var G__16588 = cljs.core.count.call(null,c__5525__auto___16585);
var G__16589 = (0);
seq__16408_16570 = G__16586;
chunk__16409_16571 = G__16587;
count__16410_16572 = G__16588;
i__16411_16573 = G__16589;
continue;
} else {
var map__16415_16590 = cljs.core.first.call(null,seq__16408_16584__$1);
var map__16415_16591__$1 = cljs.core.__destructure_map.call(null,map__16415_16590);
var gline_16592 = cljs.core.get.call(null,map__16415_16591__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16593 = cljs.core.get.call(null,map__16415_16591__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16594 = cljs.core.get.call(null,map__16415_16591__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16592], null),cljs.core.fnil.call(null,((function (seq__16408_16570,chunk__16409_16571,count__16410_16572,i__16411_16573,seq__16368_16520,chunk__16369_16521,count__16370_16522,i__16371_16523,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16415_16590,map__16415_16591__$1,gline_16592,gcol_16593,name_16594,seq__16408_16584__$1,temp__5823__auto___16583__$2,vec__16405_16567,column_16568,column_info_16569,seq__16368_16561__$1,temp__5823__auto___16560__$1,vec__16365_16517,line_16518,columns_16519,seq__16208_16511__$1,temp__5823__auto___16510,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16593], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16518,new cljs.core.Keyword(null,"col","col",-1959363084),column_16568,new cljs.core.Keyword(null,"name","name",1843675177),name_16594], null));
});})(seq__16408_16570,chunk__16409_16571,count__16410_16572,i__16411_16573,seq__16368_16520,chunk__16369_16521,count__16370_16522,i__16371_16523,seq__16208_16416,chunk__16209_16417,count__16210_16418,i__16211_16419,map__16415_16590,map__16415_16591__$1,gline_16592,gcol_16593,name_16594,seq__16408_16584__$1,temp__5823__auto___16583__$2,vec__16405_16567,column_16568,column_info_16569,seq__16368_16561__$1,temp__5823__auto___16560__$1,vec__16365_16517,line_16518,columns_16519,seq__16208_16511__$1,temp__5823__auto___16510,inverted))
,cljs.core.sorted_map.call(null)));


var G__16595 = cljs.core.next.call(null,seq__16408_16584__$1);
var G__16596 = null;
var G__16597 = (0);
var G__16598 = (0);
seq__16408_16570 = G__16595;
chunk__16409_16571 = G__16596;
count__16410_16572 = G__16597;
i__16411_16573 = G__16598;
continue;
}
} else {
}
}
break;
}


var G__16599 = cljs.core.next.call(null,seq__16368_16561__$1);
var G__16600 = null;
var G__16601 = (0);
var G__16602 = (0);
seq__16368_16520 = G__16599;
chunk__16369_16521 = G__16600;
count__16370_16522 = G__16601;
i__16371_16523 = G__16602;
continue;
}
} else {
}
}
break;
}


var G__16603 = cljs.core.next.call(null,seq__16208_16511__$1);
var G__16604 = null;
var G__16605 = (0);
var G__16606 = (0);
seq__16208_16416 = G__16603;
chunk__16209_16417 = G__16604;
count__16210_16418 = G__16605;
i__16211_16419 = G__16606;
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
