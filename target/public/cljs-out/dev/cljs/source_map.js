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
return cljs.core.reduce.call(null,(function (m,p__15667){
var vec__15668 = p__15667;
var i = cljs.core.nth.call(null,vec__15668,(0),null);
var v = cljs.core.nth.call(null,vec__15668,(1),null);
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
var vec__15671 = seg;
var gcol = cljs.core.nth.call(null,vec__15671,(0),null);
var source = cljs.core.nth.call(null,vec__15671,(1),null);
var line = cljs.core.nth.call(null,vec__15671,(2),null);
var col = cljs.core.nth.call(null,vec__15671,(3),null);
var name = cljs.core.nth.call(null,vec__15671,(4),null);
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
var vec__15674 = seg;
var gcol = cljs.core.nth.call(null,vec__15674,(0),null);
var source = cljs.core.nth.call(null,vec__15674,(1),null);
var line = cljs.core.nth.call(null,vec__15674,(2),null);
var col = cljs.core.nth.call(null,vec__15674,(3),null);
var name = cljs.core.nth.call(null,vec__15674,(4),null);
var vec__15677 = relseg;
var rgcol = cljs.core.nth.call(null,vec__15677,(0),null);
var rsource = cljs.core.nth.call(null,vec__15677,(1),null);
var rline = cljs.core.nth.call(null,vec__15677,(2),null);
var rcol = cljs.core.nth.call(null,vec__15677,(3),null);
var rname = cljs.core.nth.call(null,vec__15677,(4),null);
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
var map__15680 = segmap;
var map__15680__$1 = cljs.core.__destructure_map.call(null,map__15680);
var gcol = cljs.core.get.call(null,map__15680__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15680__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15680__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15680__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__15682 = arguments.length;
switch (G__15682) {
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
var vec__15686 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15690 = cljs.core.next.call(null,segs__$1);
var G__15691 = nrelseg;
var G__15692 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15690;
relseg__$1 = G__15691;
result__$1 = G__15692;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15686,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15686,(1),null);
var G__15693 = (gline + (1));
var G__15694 = cljs.core.next.call(null,lines__$1);
var G__15695 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15696 = result__$1;
gline = G__15693;
lines__$1 = G__15694;
relseg = G__15695;
result = G__15696;
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
var map__15698 = segmap;
var map__15698__$1 = cljs.core.__destructure_map.call(null,map__15698);
var gcol = cljs.core.get.call(null,map__15698__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15698__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15698__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15698__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__15697_SHARP_){
return cljs.core.conj.call(null,p1__15697_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__15700 = arguments.length;
switch (G__15700) {
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
var vec__15704 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15708 = cljs.core.next.call(null,segs__$1);
var G__15709 = nrelseg;
var G__15710 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15708;
relseg__$1 = G__15709;
result__$1 = G__15710;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15704,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15704,(1),null);
var G__15711 = (gline + (1));
var G__15712 = cljs.core.next.call(null,lines__$1);
var G__15713 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15714 = result__$1;
gline = G__15711;
lines__$1 = G__15712;
relseg = G__15713;
result = G__15714;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__15715){
var vec__15716 = p__15715;
var _ = cljs.core.nth.call(null,vec__15716,(0),null);
var source = cljs.core.nth.call(null,vec__15716,(1),null);
var line = cljs.core.nth.call(null,vec__15716,(2),null);
var col = cljs.core.nth.call(null,vec__15716,(3),null);
var name = cljs.core.nth.call(null,vec__15716,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__15719){
var vec__15720 = p__15719;
var gcol = cljs.core.nth.call(null,vec__15720,(0),null);
var sidx = cljs.core.nth.call(null,vec__15720,(1),null);
var line = cljs.core.nth.call(null,vec__15720,(2),null);
var col = cljs.core.nth.call(null,vec__15720,(3),null);
var name = cljs.core.nth.call(null,vec__15720,(4),null);
var seg = vec__15720;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__15723){
var vec__15724 = p__15723;
var _ = cljs.core.nth.call(null,vec__15724,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15724,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__15724,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__15724,(3),null);
var lname = cljs.core.nth.call(null,vec__15724,(4),null);
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
var seq__15730 = cljs.core.seq.call(null,infos);
var chunk__15731 = null;
var count__15732 = (0);
var i__15733 = (0);
while(true){
if((i__15733 < count__15732)){
var info = cljs.core._nth.call(null,chunk__15731,i__15733);
var segv_16084 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_16085 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16086 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_16085 > (lc_16086 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__15730,chunk__15731,count__15732,i__15733,segv_16084,gline_16085,lc_16086,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_16085 - (lc_16086 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16084], null));
});})(seq__15730,chunk__15731,count__15732,i__15733,segv_16084,gline_16085,lc_16086,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__15730,chunk__15731,count__15732,i__15733,segv_16084,gline_16085,lc_16086,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16085], null),cljs.core.conj,segv_16084);
});})(seq__15730,chunk__15731,count__15732,i__15733,segv_16084,gline_16085,lc_16086,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16087 = seq__15730;
var G__16088 = chunk__15731;
var G__16089 = count__15732;
var G__16090 = (i__15733 + (1));
seq__15730 = G__16087;
chunk__15731 = G__16088;
count__15732 = G__16089;
i__15733 = G__16090;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__15730);
if(temp__5823__auto__){
var seq__15730__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15730__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__15730__$1);
var G__16091 = cljs.core.chunk_rest.call(null,seq__15730__$1);
var G__16092 = c__5525__auto__;
var G__16093 = cljs.core.count.call(null,c__5525__auto__);
var G__16094 = (0);
seq__15730 = G__16091;
chunk__15731 = G__16092;
count__15732 = G__16093;
i__15733 = G__16094;
continue;
} else {
var info = cljs.core.first.call(null,seq__15730__$1);
var segv_16095 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_16096 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16097 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_16096 > (lc_16097 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__15730,chunk__15731,count__15732,i__15733,segv_16095,gline_16096,lc_16097,info,seq__15730__$1,temp__5823__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_16096 - (lc_16097 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16095], null));
});})(seq__15730,chunk__15731,count__15732,i__15733,segv_16095,gline_16096,lc_16097,info,seq__15730__$1,temp__5823__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__15730,chunk__15731,count__15732,i__15733,segv_16095,gline_16096,lc_16097,info,seq__15730__$1,temp__5823__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16096], null),cljs.core.conj,segv_16095);
});})(seq__15730,chunk__15731,count__15732,i__15733,segv_16095,gline_16096,lc_16097,info,seq__15730__$1,temp__5823__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16098 = cljs.core.next.call(null,seq__15730__$1);
var G__16099 = null;
var G__16100 = (0);
var G__16101 = (0);
seq__15730 = G__16098;
chunk__15731 = G__16099;
count__15732 = G__16100;
i__15733 = G__16101;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__15734_16102 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__15735_16103 = null;
var count__15736_16104 = (0);
var i__15737_16105 = (0);
while(true){
if((i__15737_16105 < count__15736_16104)){
var vec__15910_16106 = cljs.core._nth.call(null,chunk__15735_16103,i__15737_16105);
var source_idx_16107 = cljs.core.nth.call(null,vec__15910_16106,(0),null);
var vec__15913_16108 = cljs.core.nth.call(null,vec__15910_16106,(1),null);
var __16109 = cljs.core.nth.call(null,vec__15913_16108,(0),null);
var lines_16110__$1 = cljs.core.nth.call(null,vec__15913_16108,(1),null);
var seq__15916_16111 = cljs.core.seq.call(null,lines_16110__$1);
var chunk__15917_16112 = null;
var count__15918_16113 = (0);
var i__15919_16114 = (0);
while(true){
if((i__15919_16114 < count__15918_16113)){
var vec__15958_16115 = cljs.core._nth.call(null,chunk__15917_16112,i__15919_16114);
var line_16116 = cljs.core.nth.call(null,vec__15958_16115,(0),null);
var cols_16117 = cljs.core.nth.call(null,vec__15958_16115,(1),null);
var seq__15961_16118 = cljs.core.seq.call(null,cols_16117);
var chunk__15962_16119 = null;
var count__15963_16120 = (0);
var i__15964_16121 = (0);
while(true){
if((i__15964_16121 < count__15963_16120)){
var vec__15971_16122 = cljs.core._nth.call(null,chunk__15962_16119,i__15964_16121);
var col_16123 = cljs.core.nth.call(null,vec__15971_16122,(0),null);
var infos_16124 = cljs.core.nth.call(null,vec__15971_16122,(1),null);
encode_cols.call(null,infos_16124,source_idx_16107,line_16116,col_16123);


var G__16125 = seq__15961_16118;
var G__16126 = chunk__15962_16119;
var G__16127 = count__15963_16120;
var G__16128 = (i__15964_16121 + (1));
seq__15961_16118 = G__16125;
chunk__15962_16119 = G__16126;
count__15963_16120 = G__16127;
i__15964_16121 = G__16128;
continue;
} else {
var temp__5823__auto___16129 = cljs.core.seq.call(null,seq__15961_16118);
if(temp__5823__auto___16129){
var seq__15961_16130__$1 = temp__5823__auto___16129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15961_16130__$1)){
var c__5525__auto___16131 = cljs.core.chunk_first.call(null,seq__15961_16130__$1);
var G__16132 = cljs.core.chunk_rest.call(null,seq__15961_16130__$1);
var G__16133 = c__5525__auto___16131;
var G__16134 = cljs.core.count.call(null,c__5525__auto___16131);
var G__16135 = (0);
seq__15961_16118 = G__16132;
chunk__15962_16119 = G__16133;
count__15963_16120 = G__16134;
i__15964_16121 = G__16135;
continue;
} else {
var vec__15974_16136 = cljs.core.first.call(null,seq__15961_16130__$1);
var col_16137 = cljs.core.nth.call(null,vec__15974_16136,(0),null);
var infos_16138 = cljs.core.nth.call(null,vec__15974_16136,(1),null);
encode_cols.call(null,infos_16138,source_idx_16107,line_16116,col_16137);


var G__16139 = cljs.core.next.call(null,seq__15961_16130__$1);
var G__16140 = null;
var G__16141 = (0);
var G__16142 = (0);
seq__15961_16118 = G__16139;
chunk__15962_16119 = G__16140;
count__15963_16120 = G__16141;
i__15964_16121 = G__16142;
continue;
}
} else {
}
}
break;
}


var G__16143 = seq__15916_16111;
var G__16144 = chunk__15917_16112;
var G__16145 = count__15918_16113;
var G__16146 = (i__15919_16114 + (1));
seq__15916_16111 = G__16143;
chunk__15917_16112 = G__16144;
count__15918_16113 = G__16145;
i__15919_16114 = G__16146;
continue;
} else {
var temp__5823__auto___16147 = cljs.core.seq.call(null,seq__15916_16111);
if(temp__5823__auto___16147){
var seq__15916_16148__$1 = temp__5823__auto___16147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15916_16148__$1)){
var c__5525__auto___16149 = cljs.core.chunk_first.call(null,seq__15916_16148__$1);
var G__16150 = cljs.core.chunk_rest.call(null,seq__15916_16148__$1);
var G__16151 = c__5525__auto___16149;
var G__16152 = cljs.core.count.call(null,c__5525__auto___16149);
var G__16153 = (0);
seq__15916_16111 = G__16150;
chunk__15917_16112 = G__16151;
count__15918_16113 = G__16152;
i__15919_16114 = G__16153;
continue;
} else {
var vec__15977_16154 = cljs.core.first.call(null,seq__15916_16148__$1);
var line_16155 = cljs.core.nth.call(null,vec__15977_16154,(0),null);
var cols_16156 = cljs.core.nth.call(null,vec__15977_16154,(1),null);
var seq__15980_16157 = cljs.core.seq.call(null,cols_16156);
var chunk__15981_16158 = null;
var count__15982_16159 = (0);
var i__15983_16160 = (0);
while(true){
if((i__15983_16160 < count__15982_16159)){
var vec__15990_16161 = cljs.core._nth.call(null,chunk__15981_16158,i__15983_16160);
var col_16162 = cljs.core.nth.call(null,vec__15990_16161,(0),null);
var infos_16163 = cljs.core.nth.call(null,vec__15990_16161,(1),null);
encode_cols.call(null,infos_16163,source_idx_16107,line_16155,col_16162);


var G__16164 = seq__15980_16157;
var G__16165 = chunk__15981_16158;
var G__16166 = count__15982_16159;
var G__16167 = (i__15983_16160 + (1));
seq__15980_16157 = G__16164;
chunk__15981_16158 = G__16165;
count__15982_16159 = G__16166;
i__15983_16160 = G__16167;
continue;
} else {
var temp__5823__auto___16168__$1 = cljs.core.seq.call(null,seq__15980_16157);
if(temp__5823__auto___16168__$1){
var seq__15980_16169__$1 = temp__5823__auto___16168__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15980_16169__$1)){
var c__5525__auto___16170 = cljs.core.chunk_first.call(null,seq__15980_16169__$1);
var G__16171 = cljs.core.chunk_rest.call(null,seq__15980_16169__$1);
var G__16172 = c__5525__auto___16170;
var G__16173 = cljs.core.count.call(null,c__5525__auto___16170);
var G__16174 = (0);
seq__15980_16157 = G__16171;
chunk__15981_16158 = G__16172;
count__15982_16159 = G__16173;
i__15983_16160 = G__16174;
continue;
} else {
var vec__15993_16175 = cljs.core.first.call(null,seq__15980_16169__$1);
var col_16176 = cljs.core.nth.call(null,vec__15993_16175,(0),null);
var infos_16177 = cljs.core.nth.call(null,vec__15993_16175,(1),null);
encode_cols.call(null,infos_16177,source_idx_16107,line_16155,col_16176);


var G__16178 = cljs.core.next.call(null,seq__15980_16169__$1);
var G__16179 = null;
var G__16180 = (0);
var G__16181 = (0);
seq__15980_16157 = G__16178;
chunk__15981_16158 = G__16179;
count__15982_16159 = G__16180;
i__15983_16160 = G__16181;
continue;
}
} else {
}
}
break;
}


var G__16182 = cljs.core.next.call(null,seq__15916_16148__$1);
var G__16183 = null;
var G__16184 = (0);
var G__16185 = (0);
seq__15916_16111 = G__16182;
chunk__15917_16112 = G__16183;
count__15918_16113 = G__16184;
i__15919_16114 = G__16185;
continue;
}
} else {
}
}
break;
}


var G__16186 = seq__15734_16102;
var G__16187 = chunk__15735_16103;
var G__16188 = count__15736_16104;
var G__16189 = (i__15737_16105 + (1));
seq__15734_16102 = G__16186;
chunk__15735_16103 = G__16187;
count__15736_16104 = G__16188;
i__15737_16105 = G__16189;
continue;
} else {
var temp__5823__auto___16190 = cljs.core.seq.call(null,seq__15734_16102);
if(temp__5823__auto___16190){
var seq__15734_16191__$1 = temp__5823__auto___16190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15734_16191__$1)){
var c__5525__auto___16192 = cljs.core.chunk_first.call(null,seq__15734_16191__$1);
var G__16193 = cljs.core.chunk_rest.call(null,seq__15734_16191__$1);
var G__16194 = c__5525__auto___16192;
var G__16195 = cljs.core.count.call(null,c__5525__auto___16192);
var G__16196 = (0);
seq__15734_16102 = G__16193;
chunk__15735_16103 = G__16194;
count__15736_16104 = G__16195;
i__15737_16105 = G__16196;
continue;
} else {
var vec__15996_16197 = cljs.core.first.call(null,seq__15734_16191__$1);
var source_idx_16198 = cljs.core.nth.call(null,vec__15996_16197,(0),null);
var vec__15999_16199 = cljs.core.nth.call(null,vec__15996_16197,(1),null);
var __16200 = cljs.core.nth.call(null,vec__15999_16199,(0),null);
var lines_16201__$1 = cljs.core.nth.call(null,vec__15999_16199,(1),null);
var seq__16002_16202 = cljs.core.seq.call(null,lines_16201__$1);
var chunk__16003_16203 = null;
var count__16004_16204 = (0);
var i__16005_16205 = (0);
while(true){
if((i__16005_16205 < count__16004_16204)){
var vec__16044_16206 = cljs.core._nth.call(null,chunk__16003_16203,i__16005_16205);
var line_16207 = cljs.core.nth.call(null,vec__16044_16206,(0),null);
var cols_16208 = cljs.core.nth.call(null,vec__16044_16206,(1),null);
var seq__16047_16209 = cljs.core.seq.call(null,cols_16208);
var chunk__16048_16210 = null;
var count__16049_16211 = (0);
var i__16050_16212 = (0);
while(true){
if((i__16050_16212 < count__16049_16211)){
var vec__16057_16213 = cljs.core._nth.call(null,chunk__16048_16210,i__16050_16212);
var col_16214 = cljs.core.nth.call(null,vec__16057_16213,(0),null);
var infos_16215 = cljs.core.nth.call(null,vec__16057_16213,(1),null);
encode_cols.call(null,infos_16215,source_idx_16198,line_16207,col_16214);


var G__16216 = seq__16047_16209;
var G__16217 = chunk__16048_16210;
var G__16218 = count__16049_16211;
var G__16219 = (i__16050_16212 + (1));
seq__16047_16209 = G__16216;
chunk__16048_16210 = G__16217;
count__16049_16211 = G__16218;
i__16050_16212 = G__16219;
continue;
} else {
var temp__5823__auto___16220__$1 = cljs.core.seq.call(null,seq__16047_16209);
if(temp__5823__auto___16220__$1){
var seq__16047_16221__$1 = temp__5823__auto___16220__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16047_16221__$1)){
var c__5525__auto___16222 = cljs.core.chunk_first.call(null,seq__16047_16221__$1);
var G__16223 = cljs.core.chunk_rest.call(null,seq__16047_16221__$1);
var G__16224 = c__5525__auto___16222;
var G__16225 = cljs.core.count.call(null,c__5525__auto___16222);
var G__16226 = (0);
seq__16047_16209 = G__16223;
chunk__16048_16210 = G__16224;
count__16049_16211 = G__16225;
i__16050_16212 = G__16226;
continue;
} else {
var vec__16060_16227 = cljs.core.first.call(null,seq__16047_16221__$1);
var col_16228 = cljs.core.nth.call(null,vec__16060_16227,(0),null);
var infos_16229 = cljs.core.nth.call(null,vec__16060_16227,(1),null);
encode_cols.call(null,infos_16229,source_idx_16198,line_16207,col_16228);


var G__16230 = cljs.core.next.call(null,seq__16047_16221__$1);
var G__16231 = null;
var G__16232 = (0);
var G__16233 = (0);
seq__16047_16209 = G__16230;
chunk__16048_16210 = G__16231;
count__16049_16211 = G__16232;
i__16050_16212 = G__16233;
continue;
}
} else {
}
}
break;
}


var G__16234 = seq__16002_16202;
var G__16235 = chunk__16003_16203;
var G__16236 = count__16004_16204;
var G__16237 = (i__16005_16205 + (1));
seq__16002_16202 = G__16234;
chunk__16003_16203 = G__16235;
count__16004_16204 = G__16236;
i__16005_16205 = G__16237;
continue;
} else {
var temp__5823__auto___16238__$1 = cljs.core.seq.call(null,seq__16002_16202);
if(temp__5823__auto___16238__$1){
var seq__16002_16239__$1 = temp__5823__auto___16238__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16002_16239__$1)){
var c__5525__auto___16240 = cljs.core.chunk_first.call(null,seq__16002_16239__$1);
var G__16241 = cljs.core.chunk_rest.call(null,seq__16002_16239__$1);
var G__16242 = c__5525__auto___16240;
var G__16243 = cljs.core.count.call(null,c__5525__auto___16240);
var G__16244 = (0);
seq__16002_16202 = G__16241;
chunk__16003_16203 = G__16242;
count__16004_16204 = G__16243;
i__16005_16205 = G__16244;
continue;
} else {
var vec__16063_16245 = cljs.core.first.call(null,seq__16002_16239__$1);
var line_16246 = cljs.core.nth.call(null,vec__16063_16245,(0),null);
var cols_16247 = cljs.core.nth.call(null,vec__16063_16245,(1),null);
var seq__16066_16248 = cljs.core.seq.call(null,cols_16247);
var chunk__16067_16249 = null;
var count__16068_16250 = (0);
var i__16069_16251 = (0);
while(true){
if((i__16069_16251 < count__16068_16250)){
var vec__16076_16252 = cljs.core._nth.call(null,chunk__16067_16249,i__16069_16251);
var col_16253 = cljs.core.nth.call(null,vec__16076_16252,(0),null);
var infos_16254 = cljs.core.nth.call(null,vec__16076_16252,(1),null);
encode_cols.call(null,infos_16254,source_idx_16198,line_16246,col_16253);


var G__16255 = seq__16066_16248;
var G__16256 = chunk__16067_16249;
var G__16257 = count__16068_16250;
var G__16258 = (i__16069_16251 + (1));
seq__16066_16248 = G__16255;
chunk__16067_16249 = G__16256;
count__16068_16250 = G__16257;
i__16069_16251 = G__16258;
continue;
} else {
var temp__5823__auto___16259__$2 = cljs.core.seq.call(null,seq__16066_16248);
if(temp__5823__auto___16259__$2){
var seq__16066_16260__$1 = temp__5823__auto___16259__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16066_16260__$1)){
var c__5525__auto___16261 = cljs.core.chunk_first.call(null,seq__16066_16260__$1);
var G__16262 = cljs.core.chunk_rest.call(null,seq__16066_16260__$1);
var G__16263 = c__5525__auto___16261;
var G__16264 = cljs.core.count.call(null,c__5525__auto___16261);
var G__16265 = (0);
seq__16066_16248 = G__16262;
chunk__16067_16249 = G__16263;
count__16068_16250 = G__16264;
i__16069_16251 = G__16265;
continue;
} else {
var vec__16079_16266 = cljs.core.first.call(null,seq__16066_16260__$1);
var col_16267 = cljs.core.nth.call(null,vec__16079_16266,(0),null);
var infos_16268 = cljs.core.nth.call(null,vec__16079_16266,(1),null);
encode_cols.call(null,infos_16268,source_idx_16198,line_16246,col_16267);


var G__16269 = cljs.core.next.call(null,seq__16066_16260__$1);
var G__16270 = null;
var G__16271 = (0);
var G__16272 = (0);
seq__16066_16248 = G__16269;
chunk__16067_16249 = G__16270;
count__16068_16250 = G__16271;
i__16069_16251 = G__16272;
continue;
}
} else {
}
}
break;
}


var G__16273 = cljs.core.next.call(null,seq__16002_16239__$1);
var G__16274 = null;
var G__16275 = (0);
var G__16276 = (0);
seq__16002_16202 = G__16273;
chunk__16003_16203 = G__16274;
count__16004_16204 = G__16275;
i__16005_16205 = G__16276;
continue;
}
} else {
}
}
break;
}


var G__16277 = cljs.core.next.call(null,seq__15734_16191__$1);
var G__16278 = null;
var G__16279 = (0);
var G__16280 = (0);
seq__15734_16102 = G__16277;
chunk__15735_16103 = G__16278;
count__15736_16104 = G__16279;
i__15737_16105 = G__16280;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__16082 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__15727_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15727_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__15728_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__15728_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__15729_SHARP_){
return clojure.string.join.call(null,",",p1__15729_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__16083 = G__16082;
cljs.source_map.goog$module$goog$object.set.call(null,G__16083,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__16083;
} else {
return G__16082;
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
var vec__16281 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__16281,(0),null);
var col_map = cljs.core.nth.call(null,vec__16281,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__16284 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__16284,(0),null);
var infos = cljs.core.nth.call(null,vec__16284,(1),null);
var G__16289 = cljs.core.next.call(null,col_map_seq);
var G__16290 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__16284,col,infos,vec__16281,line,col_map){
return (function (v,p__16287){
var map__16288 = p__16287;
var map__16288__$1 = cljs.core.__destructure_map.call(null,map__16288);
var gline = cljs.core.get.call(null,map__16288__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__16288__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__16284,col,infos,vec__16281,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__16289;
new_cols = G__16290;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16291 = cljs.core.next.call(null,line_map_seq);
var G__16292 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__16291;
new_lines = G__16292;
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
var seq__16293_16501 = cljs.core.seq.call(null,reverse_map);
var chunk__16294_16502 = null;
var count__16295_16503 = (0);
var i__16296_16504 = (0);
while(true){
if((i__16296_16504 < count__16295_16503)){
var vec__16399_16505 = cljs.core._nth.call(null,chunk__16294_16502,i__16296_16504);
var line_16506 = cljs.core.nth.call(null,vec__16399_16505,(0),null);
var columns_16507 = cljs.core.nth.call(null,vec__16399_16505,(1),null);
var seq__16402_16508 = cljs.core.seq.call(null,columns_16507);
var chunk__16403_16509 = null;
var count__16404_16510 = (0);
var i__16405_16511 = (0);
while(true){
if((i__16405_16511 < count__16404_16510)){
var vec__16428_16512 = cljs.core._nth.call(null,chunk__16403_16509,i__16405_16511);
var column_16513 = cljs.core.nth.call(null,vec__16428_16512,(0),null);
var column_info_16514 = cljs.core.nth.call(null,vec__16428_16512,(1),null);
var seq__16431_16515 = cljs.core.seq.call(null,column_info_16514);
var chunk__16432_16516 = null;
var count__16433_16517 = (0);
var i__16434_16518 = (0);
while(true){
if((i__16434_16518 < count__16433_16517)){
var map__16437_16519 = cljs.core._nth.call(null,chunk__16432_16516,i__16434_16518);
var map__16437_16520__$1 = cljs.core.__destructure_map.call(null,map__16437_16519);
var gline_16521 = cljs.core.get.call(null,map__16437_16520__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16522 = cljs.core.get.call(null,map__16437_16520__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16523 = cljs.core.get.call(null,map__16437_16520__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16521], null),cljs.core.fnil.call(null,((function (seq__16431_16515,chunk__16432_16516,count__16433_16517,i__16434_16518,seq__16402_16508,chunk__16403_16509,count__16404_16510,i__16405_16511,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16437_16519,map__16437_16520__$1,gline_16521,gcol_16522,name_16523,vec__16428_16512,column_16513,column_info_16514,vec__16399_16505,line_16506,columns_16507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16522], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16506,new cljs.core.Keyword(null,"col","col",-1959363084),column_16513,new cljs.core.Keyword(null,"name","name",1843675177),name_16523], null));
});})(seq__16431_16515,chunk__16432_16516,count__16433_16517,i__16434_16518,seq__16402_16508,chunk__16403_16509,count__16404_16510,i__16405_16511,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16437_16519,map__16437_16520__$1,gline_16521,gcol_16522,name_16523,vec__16428_16512,column_16513,column_info_16514,vec__16399_16505,line_16506,columns_16507,inverted))
,cljs.core.sorted_map.call(null)));


var G__16524 = seq__16431_16515;
var G__16525 = chunk__16432_16516;
var G__16526 = count__16433_16517;
var G__16527 = (i__16434_16518 + (1));
seq__16431_16515 = G__16524;
chunk__16432_16516 = G__16525;
count__16433_16517 = G__16526;
i__16434_16518 = G__16527;
continue;
} else {
var temp__5823__auto___16528 = cljs.core.seq.call(null,seq__16431_16515);
if(temp__5823__auto___16528){
var seq__16431_16529__$1 = temp__5823__auto___16528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16431_16529__$1)){
var c__5525__auto___16530 = cljs.core.chunk_first.call(null,seq__16431_16529__$1);
var G__16531 = cljs.core.chunk_rest.call(null,seq__16431_16529__$1);
var G__16532 = c__5525__auto___16530;
var G__16533 = cljs.core.count.call(null,c__5525__auto___16530);
var G__16534 = (0);
seq__16431_16515 = G__16531;
chunk__16432_16516 = G__16532;
count__16433_16517 = G__16533;
i__16434_16518 = G__16534;
continue;
} else {
var map__16438_16535 = cljs.core.first.call(null,seq__16431_16529__$1);
var map__16438_16536__$1 = cljs.core.__destructure_map.call(null,map__16438_16535);
var gline_16537 = cljs.core.get.call(null,map__16438_16536__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16538 = cljs.core.get.call(null,map__16438_16536__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16539 = cljs.core.get.call(null,map__16438_16536__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16537], null),cljs.core.fnil.call(null,((function (seq__16431_16515,chunk__16432_16516,count__16433_16517,i__16434_16518,seq__16402_16508,chunk__16403_16509,count__16404_16510,i__16405_16511,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16438_16535,map__16438_16536__$1,gline_16537,gcol_16538,name_16539,seq__16431_16529__$1,temp__5823__auto___16528,vec__16428_16512,column_16513,column_info_16514,vec__16399_16505,line_16506,columns_16507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16538], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16506,new cljs.core.Keyword(null,"col","col",-1959363084),column_16513,new cljs.core.Keyword(null,"name","name",1843675177),name_16539], null));
});})(seq__16431_16515,chunk__16432_16516,count__16433_16517,i__16434_16518,seq__16402_16508,chunk__16403_16509,count__16404_16510,i__16405_16511,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16438_16535,map__16438_16536__$1,gline_16537,gcol_16538,name_16539,seq__16431_16529__$1,temp__5823__auto___16528,vec__16428_16512,column_16513,column_info_16514,vec__16399_16505,line_16506,columns_16507,inverted))
,cljs.core.sorted_map.call(null)));


var G__16540 = cljs.core.next.call(null,seq__16431_16529__$1);
var G__16541 = null;
var G__16542 = (0);
var G__16543 = (0);
seq__16431_16515 = G__16540;
chunk__16432_16516 = G__16541;
count__16433_16517 = G__16542;
i__16434_16518 = G__16543;
continue;
}
} else {
}
}
break;
}


var G__16544 = seq__16402_16508;
var G__16545 = chunk__16403_16509;
var G__16546 = count__16404_16510;
var G__16547 = (i__16405_16511 + (1));
seq__16402_16508 = G__16544;
chunk__16403_16509 = G__16545;
count__16404_16510 = G__16546;
i__16405_16511 = G__16547;
continue;
} else {
var temp__5823__auto___16548 = cljs.core.seq.call(null,seq__16402_16508);
if(temp__5823__auto___16548){
var seq__16402_16549__$1 = temp__5823__auto___16548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16402_16549__$1)){
var c__5525__auto___16550 = cljs.core.chunk_first.call(null,seq__16402_16549__$1);
var G__16551 = cljs.core.chunk_rest.call(null,seq__16402_16549__$1);
var G__16552 = c__5525__auto___16550;
var G__16553 = cljs.core.count.call(null,c__5525__auto___16550);
var G__16554 = (0);
seq__16402_16508 = G__16551;
chunk__16403_16509 = G__16552;
count__16404_16510 = G__16553;
i__16405_16511 = G__16554;
continue;
} else {
var vec__16439_16555 = cljs.core.first.call(null,seq__16402_16549__$1);
var column_16556 = cljs.core.nth.call(null,vec__16439_16555,(0),null);
var column_info_16557 = cljs.core.nth.call(null,vec__16439_16555,(1),null);
var seq__16442_16558 = cljs.core.seq.call(null,column_info_16557);
var chunk__16443_16559 = null;
var count__16444_16560 = (0);
var i__16445_16561 = (0);
while(true){
if((i__16445_16561 < count__16444_16560)){
var map__16448_16562 = cljs.core._nth.call(null,chunk__16443_16559,i__16445_16561);
var map__16448_16563__$1 = cljs.core.__destructure_map.call(null,map__16448_16562);
var gline_16564 = cljs.core.get.call(null,map__16448_16563__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16565 = cljs.core.get.call(null,map__16448_16563__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16566 = cljs.core.get.call(null,map__16448_16563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16564], null),cljs.core.fnil.call(null,((function (seq__16442_16558,chunk__16443_16559,count__16444_16560,i__16445_16561,seq__16402_16508,chunk__16403_16509,count__16404_16510,i__16405_16511,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16448_16562,map__16448_16563__$1,gline_16564,gcol_16565,name_16566,vec__16439_16555,column_16556,column_info_16557,seq__16402_16549__$1,temp__5823__auto___16548,vec__16399_16505,line_16506,columns_16507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16565], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16506,new cljs.core.Keyword(null,"col","col",-1959363084),column_16556,new cljs.core.Keyword(null,"name","name",1843675177),name_16566], null));
});})(seq__16442_16558,chunk__16443_16559,count__16444_16560,i__16445_16561,seq__16402_16508,chunk__16403_16509,count__16404_16510,i__16405_16511,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16448_16562,map__16448_16563__$1,gline_16564,gcol_16565,name_16566,vec__16439_16555,column_16556,column_info_16557,seq__16402_16549__$1,temp__5823__auto___16548,vec__16399_16505,line_16506,columns_16507,inverted))
,cljs.core.sorted_map.call(null)));


var G__16567 = seq__16442_16558;
var G__16568 = chunk__16443_16559;
var G__16569 = count__16444_16560;
var G__16570 = (i__16445_16561 + (1));
seq__16442_16558 = G__16567;
chunk__16443_16559 = G__16568;
count__16444_16560 = G__16569;
i__16445_16561 = G__16570;
continue;
} else {
var temp__5823__auto___16571__$1 = cljs.core.seq.call(null,seq__16442_16558);
if(temp__5823__auto___16571__$1){
var seq__16442_16572__$1 = temp__5823__auto___16571__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16442_16572__$1)){
var c__5525__auto___16573 = cljs.core.chunk_first.call(null,seq__16442_16572__$1);
var G__16574 = cljs.core.chunk_rest.call(null,seq__16442_16572__$1);
var G__16575 = c__5525__auto___16573;
var G__16576 = cljs.core.count.call(null,c__5525__auto___16573);
var G__16577 = (0);
seq__16442_16558 = G__16574;
chunk__16443_16559 = G__16575;
count__16444_16560 = G__16576;
i__16445_16561 = G__16577;
continue;
} else {
var map__16449_16578 = cljs.core.first.call(null,seq__16442_16572__$1);
var map__16449_16579__$1 = cljs.core.__destructure_map.call(null,map__16449_16578);
var gline_16580 = cljs.core.get.call(null,map__16449_16579__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16581 = cljs.core.get.call(null,map__16449_16579__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16582 = cljs.core.get.call(null,map__16449_16579__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16580], null),cljs.core.fnil.call(null,((function (seq__16442_16558,chunk__16443_16559,count__16444_16560,i__16445_16561,seq__16402_16508,chunk__16403_16509,count__16404_16510,i__16405_16511,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16449_16578,map__16449_16579__$1,gline_16580,gcol_16581,name_16582,seq__16442_16572__$1,temp__5823__auto___16571__$1,vec__16439_16555,column_16556,column_info_16557,seq__16402_16549__$1,temp__5823__auto___16548,vec__16399_16505,line_16506,columns_16507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16581], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16506,new cljs.core.Keyword(null,"col","col",-1959363084),column_16556,new cljs.core.Keyword(null,"name","name",1843675177),name_16582], null));
});})(seq__16442_16558,chunk__16443_16559,count__16444_16560,i__16445_16561,seq__16402_16508,chunk__16403_16509,count__16404_16510,i__16405_16511,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16449_16578,map__16449_16579__$1,gline_16580,gcol_16581,name_16582,seq__16442_16572__$1,temp__5823__auto___16571__$1,vec__16439_16555,column_16556,column_info_16557,seq__16402_16549__$1,temp__5823__auto___16548,vec__16399_16505,line_16506,columns_16507,inverted))
,cljs.core.sorted_map.call(null)));


var G__16583 = cljs.core.next.call(null,seq__16442_16572__$1);
var G__16584 = null;
var G__16585 = (0);
var G__16586 = (0);
seq__16442_16558 = G__16583;
chunk__16443_16559 = G__16584;
count__16444_16560 = G__16585;
i__16445_16561 = G__16586;
continue;
}
} else {
}
}
break;
}


var G__16587 = cljs.core.next.call(null,seq__16402_16549__$1);
var G__16588 = null;
var G__16589 = (0);
var G__16590 = (0);
seq__16402_16508 = G__16587;
chunk__16403_16509 = G__16588;
count__16404_16510 = G__16589;
i__16405_16511 = G__16590;
continue;
}
} else {
}
}
break;
}


var G__16591 = seq__16293_16501;
var G__16592 = chunk__16294_16502;
var G__16593 = count__16295_16503;
var G__16594 = (i__16296_16504 + (1));
seq__16293_16501 = G__16591;
chunk__16294_16502 = G__16592;
count__16295_16503 = G__16593;
i__16296_16504 = G__16594;
continue;
} else {
var temp__5823__auto___16595 = cljs.core.seq.call(null,seq__16293_16501);
if(temp__5823__auto___16595){
var seq__16293_16596__$1 = temp__5823__auto___16595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16293_16596__$1)){
var c__5525__auto___16597 = cljs.core.chunk_first.call(null,seq__16293_16596__$1);
var G__16598 = cljs.core.chunk_rest.call(null,seq__16293_16596__$1);
var G__16599 = c__5525__auto___16597;
var G__16600 = cljs.core.count.call(null,c__5525__auto___16597);
var G__16601 = (0);
seq__16293_16501 = G__16598;
chunk__16294_16502 = G__16599;
count__16295_16503 = G__16600;
i__16296_16504 = G__16601;
continue;
} else {
var vec__16450_16602 = cljs.core.first.call(null,seq__16293_16596__$1);
var line_16603 = cljs.core.nth.call(null,vec__16450_16602,(0),null);
var columns_16604 = cljs.core.nth.call(null,vec__16450_16602,(1),null);
var seq__16453_16605 = cljs.core.seq.call(null,columns_16604);
var chunk__16454_16606 = null;
var count__16455_16607 = (0);
var i__16456_16608 = (0);
while(true){
if((i__16456_16608 < count__16455_16607)){
var vec__16479_16609 = cljs.core._nth.call(null,chunk__16454_16606,i__16456_16608);
var column_16610 = cljs.core.nth.call(null,vec__16479_16609,(0),null);
var column_info_16611 = cljs.core.nth.call(null,vec__16479_16609,(1),null);
var seq__16482_16612 = cljs.core.seq.call(null,column_info_16611);
var chunk__16483_16613 = null;
var count__16484_16614 = (0);
var i__16485_16615 = (0);
while(true){
if((i__16485_16615 < count__16484_16614)){
var map__16488_16616 = cljs.core._nth.call(null,chunk__16483_16613,i__16485_16615);
var map__16488_16617__$1 = cljs.core.__destructure_map.call(null,map__16488_16616);
var gline_16618 = cljs.core.get.call(null,map__16488_16617__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16619 = cljs.core.get.call(null,map__16488_16617__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16620 = cljs.core.get.call(null,map__16488_16617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16618], null),cljs.core.fnil.call(null,((function (seq__16482_16612,chunk__16483_16613,count__16484_16614,i__16485_16615,seq__16453_16605,chunk__16454_16606,count__16455_16607,i__16456_16608,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16488_16616,map__16488_16617__$1,gline_16618,gcol_16619,name_16620,vec__16479_16609,column_16610,column_info_16611,vec__16450_16602,line_16603,columns_16604,seq__16293_16596__$1,temp__5823__auto___16595,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16619], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16603,new cljs.core.Keyword(null,"col","col",-1959363084),column_16610,new cljs.core.Keyword(null,"name","name",1843675177),name_16620], null));
});})(seq__16482_16612,chunk__16483_16613,count__16484_16614,i__16485_16615,seq__16453_16605,chunk__16454_16606,count__16455_16607,i__16456_16608,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16488_16616,map__16488_16617__$1,gline_16618,gcol_16619,name_16620,vec__16479_16609,column_16610,column_info_16611,vec__16450_16602,line_16603,columns_16604,seq__16293_16596__$1,temp__5823__auto___16595,inverted))
,cljs.core.sorted_map.call(null)));


var G__16621 = seq__16482_16612;
var G__16622 = chunk__16483_16613;
var G__16623 = count__16484_16614;
var G__16624 = (i__16485_16615 + (1));
seq__16482_16612 = G__16621;
chunk__16483_16613 = G__16622;
count__16484_16614 = G__16623;
i__16485_16615 = G__16624;
continue;
} else {
var temp__5823__auto___16625__$1 = cljs.core.seq.call(null,seq__16482_16612);
if(temp__5823__auto___16625__$1){
var seq__16482_16626__$1 = temp__5823__auto___16625__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16482_16626__$1)){
var c__5525__auto___16627 = cljs.core.chunk_first.call(null,seq__16482_16626__$1);
var G__16628 = cljs.core.chunk_rest.call(null,seq__16482_16626__$1);
var G__16629 = c__5525__auto___16627;
var G__16630 = cljs.core.count.call(null,c__5525__auto___16627);
var G__16631 = (0);
seq__16482_16612 = G__16628;
chunk__16483_16613 = G__16629;
count__16484_16614 = G__16630;
i__16485_16615 = G__16631;
continue;
} else {
var map__16489_16632 = cljs.core.first.call(null,seq__16482_16626__$1);
var map__16489_16633__$1 = cljs.core.__destructure_map.call(null,map__16489_16632);
var gline_16634 = cljs.core.get.call(null,map__16489_16633__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16635 = cljs.core.get.call(null,map__16489_16633__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16636 = cljs.core.get.call(null,map__16489_16633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16634], null),cljs.core.fnil.call(null,((function (seq__16482_16612,chunk__16483_16613,count__16484_16614,i__16485_16615,seq__16453_16605,chunk__16454_16606,count__16455_16607,i__16456_16608,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16489_16632,map__16489_16633__$1,gline_16634,gcol_16635,name_16636,seq__16482_16626__$1,temp__5823__auto___16625__$1,vec__16479_16609,column_16610,column_info_16611,vec__16450_16602,line_16603,columns_16604,seq__16293_16596__$1,temp__5823__auto___16595,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16635], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16603,new cljs.core.Keyword(null,"col","col",-1959363084),column_16610,new cljs.core.Keyword(null,"name","name",1843675177),name_16636], null));
});})(seq__16482_16612,chunk__16483_16613,count__16484_16614,i__16485_16615,seq__16453_16605,chunk__16454_16606,count__16455_16607,i__16456_16608,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16489_16632,map__16489_16633__$1,gline_16634,gcol_16635,name_16636,seq__16482_16626__$1,temp__5823__auto___16625__$1,vec__16479_16609,column_16610,column_info_16611,vec__16450_16602,line_16603,columns_16604,seq__16293_16596__$1,temp__5823__auto___16595,inverted))
,cljs.core.sorted_map.call(null)));


var G__16637 = cljs.core.next.call(null,seq__16482_16626__$1);
var G__16638 = null;
var G__16639 = (0);
var G__16640 = (0);
seq__16482_16612 = G__16637;
chunk__16483_16613 = G__16638;
count__16484_16614 = G__16639;
i__16485_16615 = G__16640;
continue;
}
} else {
}
}
break;
}


var G__16641 = seq__16453_16605;
var G__16642 = chunk__16454_16606;
var G__16643 = count__16455_16607;
var G__16644 = (i__16456_16608 + (1));
seq__16453_16605 = G__16641;
chunk__16454_16606 = G__16642;
count__16455_16607 = G__16643;
i__16456_16608 = G__16644;
continue;
} else {
var temp__5823__auto___16645__$1 = cljs.core.seq.call(null,seq__16453_16605);
if(temp__5823__auto___16645__$1){
var seq__16453_16646__$1 = temp__5823__auto___16645__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16453_16646__$1)){
var c__5525__auto___16647 = cljs.core.chunk_first.call(null,seq__16453_16646__$1);
var G__16648 = cljs.core.chunk_rest.call(null,seq__16453_16646__$1);
var G__16649 = c__5525__auto___16647;
var G__16650 = cljs.core.count.call(null,c__5525__auto___16647);
var G__16651 = (0);
seq__16453_16605 = G__16648;
chunk__16454_16606 = G__16649;
count__16455_16607 = G__16650;
i__16456_16608 = G__16651;
continue;
} else {
var vec__16490_16652 = cljs.core.first.call(null,seq__16453_16646__$1);
var column_16653 = cljs.core.nth.call(null,vec__16490_16652,(0),null);
var column_info_16654 = cljs.core.nth.call(null,vec__16490_16652,(1),null);
var seq__16493_16655 = cljs.core.seq.call(null,column_info_16654);
var chunk__16494_16656 = null;
var count__16495_16657 = (0);
var i__16496_16658 = (0);
while(true){
if((i__16496_16658 < count__16495_16657)){
var map__16499_16659 = cljs.core._nth.call(null,chunk__16494_16656,i__16496_16658);
var map__16499_16660__$1 = cljs.core.__destructure_map.call(null,map__16499_16659);
var gline_16661 = cljs.core.get.call(null,map__16499_16660__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16662 = cljs.core.get.call(null,map__16499_16660__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16663 = cljs.core.get.call(null,map__16499_16660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16661], null),cljs.core.fnil.call(null,((function (seq__16493_16655,chunk__16494_16656,count__16495_16657,i__16496_16658,seq__16453_16605,chunk__16454_16606,count__16455_16607,i__16456_16608,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16499_16659,map__16499_16660__$1,gline_16661,gcol_16662,name_16663,vec__16490_16652,column_16653,column_info_16654,seq__16453_16646__$1,temp__5823__auto___16645__$1,vec__16450_16602,line_16603,columns_16604,seq__16293_16596__$1,temp__5823__auto___16595,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16662], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16603,new cljs.core.Keyword(null,"col","col",-1959363084),column_16653,new cljs.core.Keyword(null,"name","name",1843675177),name_16663], null));
});})(seq__16493_16655,chunk__16494_16656,count__16495_16657,i__16496_16658,seq__16453_16605,chunk__16454_16606,count__16455_16607,i__16456_16608,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16499_16659,map__16499_16660__$1,gline_16661,gcol_16662,name_16663,vec__16490_16652,column_16653,column_info_16654,seq__16453_16646__$1,temp__5823__auto___16645__$1,vec__16450_16602,line_16603,columns_16604,seq__16293_16596__$1,temp__5823__auto___16595,inverted))
,cljs.core.sorted_map.call(null)));


var G__16664 = seq__16493_16655;
var G__16665 = chunk__16494_16656;
var G__16666 = count__16495_16657;
var G__16667 = (i__16496_16658 + (1));
seq__16493_16655 = G__16664;
chunk__16494_16656 = G__16665;
count__16495_16657 = G__16666;
i__16496_16658 = G__16667;
continue;
} else {
var temp__5823__auto___16668__$2 = cljs.core.seq.call(null,seq__16493_16655);
if(temp__5823__auto___16668__$2){
var seq__16493_16669__$1 = temp__5823__auto___16668__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16493_16669__$1)){
var c__5525__auto___16670 = cljs.core.chunk_first.call(null,seq__16493_16669__$1);
var G__16671 = cljs.core.chunk_rest.call(null,seq__16493_16669__$1);
var G__16672 = c__5525__auto___16670;
var G__16673 = cljs.core.count.call(null,c__5525__auto___16670);
var G__16674 = (0);
seq__16493_16655 = G__16671;
chunk__16494_16656 = G__16672;
count__16495_16657 = G__16673;
i__16496_16658 = G__16674;
continue;
} else {
var map__16500_16675 = cljs.core.first.call(null,seq__16493_16669__$1);
var map__16500_16676__$1 = cljs.core.__destructure_map.call(null,map__16500_16675);
var gline_16677 = cljs.core.get.call(null,map__16500_16676__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16678 = cljs.core.get.call(null,map__16500_16676__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16679 = cljs.core.get.call(null,map__16500_16676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16677], null),cljs.core.fnil.call(null,((function (seq__16493_16655,chunk__16494_16656,count__16495_16657,i__16496_16658,seq__16453_16605,chunk__16454_16606,count__16455_16607,i__16456_16608,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16500_16675,map__16500_16676__$1,gline_16677,gcol_16678,name_16679,seq__16493_16669__$1,temp__5823__auto___16668__$2,vec__16490_16652,column_16653,column_info_16654,seq__16453_16646__$1,temp__5823__auto___16645__$1,vec__16450_16602,line_16603,columns_16604,seq__16293_16596__$1,temp__5823__auto___16595,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16678], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16603,new cljs.core.Keyword(null,"col","col",-1959363084),column_16653,new cljs.core.Keyword(null,"name","name",1843675177),name_16679], null));
});})(seq__16493_16655,chunk__16494_16656,count__16495_16657,i__16496_16658,seq__16453_16605,chunk__16454_16606,count__16455_16607,i__16456_16608,seq__16293_16501,chunk__16294_16502,count__16295_16503,i__16296_16504,map__16500_16675,map__16500_16676__$1,gline_16677,gcol_16678,name_16679,seq__16493_16669__$1,temp__5823__auto___16668__$2,vec__16490_16652,column_16653,column_info_16654,seq__16453_16646__$1,temp__5823__auto___16645__$1,vec__16450_16602,line_16603,columns_16604,seq__16293_16596__$1,temp__5823__auto___16595,inverted))
,cljs.core.sorted_map.call(null)));


var G__16680 = cljs.core.next.call(null,seq__16493_16669__$1);
var G__16681 = null;
var G__16682 = (0);
var G__16683 = (0);
seq__16493_16655 = G__16680;
chunk__16494_16656 = G__16681;
count__16495_16657 = G__16682;
i__16496_16658 = G__16683;
continue;
}
} else {
}
}
break;
}


var G__16684 = cljs.core.next.call(null,seq__16453_16646__$1);
var G__16685 = null;
var G__16686 = (0);
var G__16687 = (0);
seq__16453_16605 = G__16684;
chunk__16454_16606 = G__16685;
count__16455_16607 = G__16686;
i__16456_16608 = G__16687;
continue;
}
} else {
}
}
break;
}


var G__16688 = cljs.core.next.call(null,seq__16293_16596__$1);
var G__16689 = null;
var G__16690 = (0);
var G__16691 = (0);
seq__16293_16501 = G__16688;
chunk__16294_16502 = G__16689;
count__16295_16503 = G__16690;
i__16296_16504 = G__16691;
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
