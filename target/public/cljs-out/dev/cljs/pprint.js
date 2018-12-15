// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__19144__auto__ = [];
var len__19134__auto___43363 = arguments.length;
var i__19135__auto___43364 = (0);
while(true){
if((i__19135__auto___43364 < len__19134__auto___43363)){
args__19144__auto__.push((arguments[i__19135__auto___43364]));

var G__43365 = (i__19135__auto___43364 + (1));
i__19135__auto___43364 = G__43365;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq43362){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43362));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__19144__auto__ = [];
var len__19134__auto___43367 = arguments.length;
var i__19135__auto___43368 = (0);
while(true){
if((i__19135__auto___43368 < len__19134__auto___43367)){
args__19144__auto__.push((arguments[i__19135__auto___43368]));

var G__43369 = (i__19135__auto___43368 + (1));
i__19135__auto___43368 = G__43369;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq43366){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43366));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__43370 = cljs.core._EQ_;
var expr__43371 = c;
if(cljs.core.truth_(pred__43370.call(null,"\b",expr__43371))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__43370.call(null,"\t",expr__43371))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__43370.call(null,"\n",expr__43371))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__43370.call(null,"\f",expr__43371))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__43370.call(null,"\r",expr__43371))){
return "\\return";
} else {
if(cljs.core.truth_(pred__43370.call(null,"\"",expr__43371))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__43370.call(null,"\\",expr__43371))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__19144__auto__ = [];
var len__19134__auto___43374 = arguments.length;
var i__19135__auto___43375 = (0);
while(true){
if((i__19135__auto___43375 < len__19134__auto___43374)){
args__19144__auto__.push((arguments[i__19135__auto___43375]));

var G__43376 = (i__19135__auto___43375 + (1));
i__19135__auto___43375 = G__43376;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq43373){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43373));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__19144__auto__ = [];
var len__19134__auto___43378 = arguments.length;
var i__19135__auto___43379 = (0);
while(true){
if((i__19135__auto___43379 < len__19134__auto___43378)){
args__19144__auto__.push((arguments[i__19135__auto___43379]));

var G__43380 = (i__19135__auto___43379 + (1));
i__19135__auto___43379 = G__43380;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq43377){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43377));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__43384 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__43384,(0),null);
var new_context = cljs.core.nth.call(null,vec__43384,(1),null);
var G__43387 = new_context;
var G__43388 = remainder;
var G__43389 = cljs.core.conj.call(null,acc,result);
context = G__43387;
lis__$1 = G__43388;
acc = G__43389;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__43393 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__43393,(0),null);
var new_context = cljs.core.nth.call(null,vec__43393,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__43396 = new_context;
var G__43397 = cljs.core.conj.call(null,acc,result);
context = G__43396;
acc = G__43397;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__43401 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__43401,(0),null);
var continue$ = cljs.core.nth.call(null,vec__43401,(1),null);
var new_context = cljs.core.nth.call(null,vec__43401,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__43404 = new_context;
var G__43405 = cljs.core.conj.call(null,acc,result);
context = G__43404;
acc = G__43405;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18733__auto__ = (function cljs$pprint$unzip_map_$_iter__43406(s__43407){
return (new cljs.core.LazySeq(null,(function (){
var s__43407__$1 = s__43407;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43407__$1);
if(temp__5457__auto__){
var s__43407__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43407__$2)){
var c__18731__auto__ = cljs.core.chunk_first.call(null,s__43407__$2);
var size__18732__auto__ = cljs.core.count.call(null,c__18731__auto__);
var b__43409 = cljs.core.chunk_buffer.call(null,size__18732__auto__);
if((function (){var i__43408 = (0);
while(true){
if((i__43408 < size__18732__auto__)){
var vec__43410 = cljs.core._nth.call(null,c__18731__auto__,i__43408);
var k = cljs.core.nth.call(null,vec__43410,(0),null);
var vec__43413 = cljs.core.nth.call(null,vec__43410,(1),null);
var v1 = cljs.core.nth.call(null,vec__43413,(0),null);
var v2 = cljs.core.nth.call(null,vec__43413,(1),null);
cljs.core.chunk_append.call(null,b__43409,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__43438 = (i__43408 + (1));
i__43408 = G__43438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43409),cljs$pprint$unzip_map_$_iter__43406.call(null,cljs.core.chunk_rest.call(null,s__43407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43409),null);
}
} else {
var vec__43416 = cljs.core.first.call(null,s__43407__$2);
var k = cljs.core.nth.call(null,vec__43416,(0),null);
var vec__43419 = cljs.core.nth.call(null,vec__43416,(1),null);
var v1 = cljs.core.nth.call(null,vec__43419,(0),null);
var v2 = cljs.core.nth.call(null,vec__43419,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__43406.call(null,cljs.core.rest.call(null,s__43407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18733__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18733__auto__ = (function cljs$pprint$unzip_map_$_iter__43422(s__43423){
return (new cljs.core.LazySeq(null,(function (){
var s__43423__$1 = s__43423;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43423__$1);
if(temp__5457__auto__){
var s__43423__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43423__$2)){
var c__18731__auto__ = cljs.core.chunk_first.call(null,s__43423__$2);
var size__18732__auto__ = cljs.core.count.call(null,c__18731__auto__);
var b__43425 = cljs.core.chunk_buffer.call(null,size__18732__auto__);
if((function (){var i__43424 = (0);
while(true){
if((i__43424 < size__18732__auto__)){
var vec__43426 = cljs.core._nth.call(null,c__18731__auto__,i__43424);
var k = cljs.core.nth.call(null,vec__43426,(0),null);
var vec__43429 = cljs.core.nth.call(null,vec__43426,(1),null);
var v1 = cljs.core.nth.call(null,vec__43429,(0),null);
var v2 = cljs.core.nth.call(null,vec__43429,(1),null);
cljs.core.chunk_append.call(null,b__43425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__43439 = (i__43424 + (1));
i__43424 = G__43439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43425),cljs$pprint$unzip_map_$_iter__43422.call(null,cljs.core.chunk_rest.call(null,s__43423__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43425),null);
}
} else {
var vec__43432 = cljs.core.first.call(null,s__43423__$2);
var k = cljs.core.nth.call(null,vec__43432,(0),null);
var vec__43435 = cljs.core.nth.call(null,vec__43432,(1),null);
var v1 = cljs.core.nth.call(null,vec__43435,(0),null);
var v2 = cljs.core.nth.call(null,vec__43435,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__43422.call(null,cljs.core.rest.call(null,s__43423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18733__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18733__auto__ = (function cljs$pprint$tuple_map_$_iter__43440(s__43441){
return (new cljs.core.LazySeq(null,(function (){
var s__43441__$1 = s__43441;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43441__$1);
if(temp__5457__auto__){
var s__43441__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43441__$2)){
var c__18731__auto__ = cljs.core.chunk_first.call(null,s__43441__$2);
var size__18732__auto__ = cljs.core.count.call(null,c__18731__auto__);
var b__43443 = cljs.core.chunk_buffer.call(null,size__18732__auto__);
if((function (){var i__43442 = (0);
while(true){
if((i__43442 < size__18732__auto__)){
var vec__43444 = cljs.core._nth.call(null,c__18731__auto__,i__43442);
var k = cljs.core.nth.call(null,vec__43444,(0),null);
var v = cljs.core.nth.call(null,vec__43444,(1),null);
cljs.core.chunk_append.call(null,b__43443,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__43450 = (i__43442 + (1));
i__43442 = G__43450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43443),cljs$pprint$tuple_map_$_iter__43440.call(null,cljs.core.chunk_rest.call(null,s__43441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43443),null);
}
} else {
var vec__43447 = cljs.core.first.call(null,s__43441__$2);
var k = cljs.core.nth.call(null,vec__43447,(0),null);
var v = cljs.core.nth.call(null,vec__43447,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__43440.call(null,cljs.core.rest.call(null,s__43441__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18733__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__43451 = (n - (1));
n = G__43451;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.call(null,n,len)) || ((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))))){
return cljs.core.subs.call(null,s,n);
} else {
var G__43452 = (n + (1));
n = G__43452;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos)))))){
return pos;
} else {
var G__43453 = (pos + (1));
pos = G__43453;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__18573__auto__ = (((pp == null))?null:pp);
var m__18574__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,pp);
} else {
var m__18571__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__43456 = arguments.length;
switch (G__43456) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43457 = (function (writer,max_columns,fields,meta43458){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta43458 = meta43458;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_43459,meta43458__$1){
var self__ = this;
var _43459__$1 = this;
return (new cljs.pprint.t_cljs$pprint43457(self__.writer,self__.max_columns,self__.fields,meta43458__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint43457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_43459){
var self__ = this;
var _43459__$1 = this;
return self__.meta43458;
});})(fields))
;

cljs.pprint.t_cljs$pprint43457.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint43457.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint43457.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43460 = cljs.core._EQ_;
var expr__43461 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43460.call(null,String,expr__43461))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__43460,expr__43461,this$__$1,fields){
return (function (p1__43454_SHARP_){
return cljs.core._EQ_.call(null,p1__43454_SHARP_,"\n");
});})(s,nl,pred__43460,expr__43461,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__43460.call(null,Number,expr__43461))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43461)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint43457.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta43458","meta43458",1772652654,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint43457.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43457.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43457";

cljs.pprint.t_cljs$pprint43457.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.pprint/t_cljs$pprint43457");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43457.
 */
cljs.pprint.__GT_t_cljs$pprint43457 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint43457(writer__$1,max_columns__$1,fields__$1,meta43458){
return (new cljs.pprint.t_cljs$pprint43457(writer__$1,max_columns__$1,fields__$1,meta43458));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint43457(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
return this__18519__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18520__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18521__auto__,k43465,else__18522__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
var G__43469 = k43465;
var G__43469__$1 = (((G__43469 instanceof cljs.core.Keyword))?G__43469.fqn:null);
switch (G__43469__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43465,else__18522__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18538__auto__,f__18539__auto__,init__18540__auto__){
var self__ = this;
var this__18538__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18538__auto____$1){
return (function (ret__18541__auto__,p__43470){
var vec__43471 = p__43470;
var k__18542__auto__ = cljs.core.nth.call(null,vec__43471,(0),null);
var v__18543__auto__ = cljs.core.nth.call(null,vec__43471,(1),null);
return f__18539__auto__.call(null,ret__18541__auto__,k__18542__auto__,v__18543__auto__);
});})(this__18538__auto____$1))
,init__18540__auto__,this__18538__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18533__auto__,writer__18534__auto__,opts__18535__auto__){
var self__ = this;
var this__18533__auto____$1 = this;
var pr_pair__18536__auto__ = ((function (this__18533__auto____$1){
return (function (keyval__18537__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,cljs.core.pr_writer,""," ","",opts__18535__auto__,keyval__18537__auto__);
});})(this__18533__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,pr_pair__18536__auto__,"#cljs.pprint.logical-block{",", ","}",opts__18535__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43464){
var self__ = this;
var G__43464__$1 = this;
return (new cljs.core.RecordIter((0),G__43464__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18517__auto__){
var self__ = this;
var this__18517__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18523__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18515__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
var h__18287__auto__ = self__.__hash;
if((!((h__18287__auto__ == null)))){
return h__18287__auto__;
} else {
var h__18287__auto____$1 = ((function (h__18287__auto__,this__18515__auto____$1){
return (function (coll__18516__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__18516__auto__));
});})(h__18287__auto__,this__18515__auto____$1))
.call(null,this__18515__auto____$1);
self__.__hash = h__18287__auto____$1;

return h__18287__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43466,other43467){
var self__ = this;
var this43466__$1 = this;
return (((!((other43467 == null)))) && ((this43466__$1.constructor === other43467.constructor)) && (cljs.core._EQ_.call(null,this43466__$1.parent,other43467.parent)) && (cljs.core._EQ_.call(null,this43466__$1.section,other43467.section)) && (cljs.core._EQ_.call(null,this43466__$1.start_col,other43467.start_col)) && (cljs.core._EQ_.call(null,this43466__$1.indent,other43467.indent)) && (cljs.core._EQ_.call(null,this43466__$1.done_nl,other43467.done_nl)) && (cljs.core._EQ_.call(null,this43466__$1.intra_block_nl,other43467.intra_block_nl)) && (cljs.core._EQ_.call(null,this43466__$1.prefix,other43467.prefix)) && (cljs.core._EQ_.call(null,this43466__$1.per_line_prefix,other43467.per_line_prefix)) && (cljs.core._EQ_.call(null,this43466__$1.suffix,other43467.suffix)) && (cljs.core._EQ_.call(null,this43466__$1.logical_block_callback,other43467.logical_block_callback)) && (cljs.core._EQ_.call(null,this43466__$1.__extmap,other43467.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18528__auto__,k__18529__auto__){
var self__ = this;
var this__18528__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__18529__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18528__auto____$1),self__.__meta),k__18529__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18529__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18526__auto__,k__18527__auto__,G__43464){
var self__ = this;
var this__18526__auto____$1 = this;
var pred__43474 = cljs.core.keyword_identical_QMARK_;
var expr__43475 = k__18527__auto__;
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__43475))){
return (new cljs.pprint.logical_block(G__43464,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,G__43464,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__43464,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__43464,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__43464,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__43464,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__43464,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__43464,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__43464,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43474.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__43475))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__43464,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18527__auto__,G__43464),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18531__auto__){
var self__ = this;
var this__18531__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18518__auto__,G__43464){
var self__ = this;
var this__18518__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__43464,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18524__auto__,entry__18525__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18525__auto__)){
return this__18524__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18525__auto__,(0)),cljs.core._nth.call(null,entry__18525__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18524__auto____$1,entry__18525__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__18564__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__18564__auto__,writer__18565__auto__){
return cljs.core._write.call(null,writer__18565__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__43468){
var extmap__18560__auto__ = (function (){var G__43477 = cljs.core.dissoc.call(null,G__43468,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__43468)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43477);
} else {
return G__43477;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__43468),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__43468),null,cljs.core.not_empty.call(null,extmap__18560__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__43479 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__43479;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
return this__18519__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18520__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18521__auto__,k43481,else__18522__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
var G__43485 = k43481;
var G__43485__$1 = (((G__43485 instanceof cljs.core.Keyword))?G__43485.fqn:null);
switch (G__43485__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43481,else__18522__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18538__auto__,f__18539__auto__,init__18540__auto__){
var self__ = this;
var this__18538__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18538__auto____$1){
return (function (ret__18541__auto__,p__43486){
var vec__43487 = p__43486;
var k__18542__auto__ = cljs.core.nth.call(null,vec__43487,(0),null);
var v__18543__auto__ = cljs.core.nth.call(null,vec__43487,(1),null);
return f__18539__auto__.call(null,ret__18541__auto__,k__18542__auto__,v__18543__auto__);
});})(this__18538__auto____$1))
,init__18540__auto__,this__18538__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18533__auto__,writer__18534__auto__,opts__18535__auto__){
var self__ = this;
var this__18533__auto____$1 = this;
var pr_pair__18536__auto__ = ((function (this__18533__auto____$1){
return (function (keyval__18537__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,cljs.core.pr_writer,""," ","",opts__18535__auto__,keyval__18537__auto__);
});})(this__18533__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,pr_pair__18536__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__18535__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43480){
var self__ = this;
var G__43480__$1 = this;
return (new cljs.core.RecordIter((0),G__43480__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18517__auto__){
var self__ = this;
var this__18517__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18523__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18515__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
var h__18287__auto__ = self__.__hash;
if((!((h__18287__auto__ == null)))){
return h__18287__auto__;
} else {
var h__18287__auto____$1 = ((function (h__18287__auto__,this__18515__auto____$1){
return (function (coll__18516__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__18516__auto__));
});})(h__18287__auto__,this__18515__auto____$1))
.call(null,this__18515__auto____$1);
self__.__hash = h__18287__auto____$1;

return h__18287__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43482,other43483){
var self__ = this;
var this43482__$1 = this;
return (((!((other43483 == null)))) && ((this43482__$1.constructor === other43483.constructor)) && (cljs.core._EQ_.call(null,this43482__$1.type_tag,other43483.type_tag)) && (cljs.core._EQ_.call(null,this43482__$1.data,other43483.data)) && (cljs.core._EQ_.call(null,this43482__$1.trailing_white_space,other43483.trailing_white_space)) && (cljs.core._EQ_.call(null,this43482__$1.start_pos,other43483.start_pos)) && (cljs.core._EQ_.call(null,this43482__$1.end_pos,other43483.end_pos)) && (cljs.core._EQ_.call(null,this43482__$1.__extmap,other43483.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18528__auto__,k__18529__auto__){
var self__ = this;
var this__18528__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__18529__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18528__auto____$1),self__.__meta),k__18529__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18529__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18526__auto__,k__18527__auto__,G__43480){
var self__ = this;
var this__18526__auto____$1 = this;
var pred__43490 = cljs.core.keyword_identical_QMARK_;
var expr__43491 = k__18527__auto__;
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43491))){
return (new cljs.pprint.buffer_blob(G__43480,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__43491))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__43480,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__43491))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__43480,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43491))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__43480,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43491))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__43480,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18527__auto__,G__43480),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18531__auto__){
var self__ = this;
var this__18531__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18518__auto__,G__43480){
var self__ = this;
var this__18518__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__43480,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18524__auto__,entry__18525__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18525__auto__)){
return this__18524__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18525__auto__,(0)),cljs.core._nth.call(null,entry__18525__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18524__auto____$1,entry__18525__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__18564__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__18564__auto__,writer__18565__auto__){
return cljs.core._write.call(null,writer__18565__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__43484){
var extmap__18560__auto__ = (function (){var G__43493 = cljs.core.dissoc.call(null,G__43484,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43484)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43493);
} else {
return G__43493;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43484),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__43484),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__43484),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43484),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43484),null,cljs.core.not_empty.call(null,extmap__18560__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__39886__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39886__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
return this__18519__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18520__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18521__auto__,k43496,else__18522__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
var G__43500 = k43496;
var G__43500__$1 = (((G__43500 instanceof cljs.core.Keyword))?G__43500.fqn:null);
switch (G__43500__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43496,else__18522__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18538__auto__,f__18539__auto__,init__18540__auto__){
var self__ = this;
var this__18538__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18538__auto____$1){
return (function (ret__18541__auto__,p__43501){
var vec__43502 = p__43501;
var k__18542__auto__ = cljs.core.nth.call(null,vec__43502,(0),null);
var v__18543__auto__ = cljs.core.nth.call(null,vec__43502,(1),null);
return f__18539__auto__.call(null,ret__18541__auto__,k__18542__auto__,v__18543__auto__);
});})(this__18538__auto____$1))
,init__18540__auto__,this__18538__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18533__auto__,writer__18534__auto__,opts__18535__auto__){
var self__ = this;
var this__18533__auto____$1 = this;
var pr_pair__18536__auto__ = ((function (this__18533__auto____$1){
return (function (keyval__18537__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,cljs.core.pr_writer,""," ","",opts__18535__auto__,keyval__18537__auto__);
});})(this__18533__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,pr_pair__18536__auto__,"#cljs.pprint.nl-t{",", ","}",opts__18535__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43495){
var self__ = this;
var G__43495__$1 = this;
return (new cljs.core.RecordIter((0),G__43495__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18517__auto__){
var self__ = this;
var this__18517__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18523__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18515__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
var h__18287__auto__ = self__.__hash;
if((!((h__18287__auto__ == null)))){
return h__18287__auto__;
} else {
var h__18287__auto____$1 = ((function (h__18287__auto__,this__18515__auto____$1){
return (function (coll__18516__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__18516__auto__));
});})(h__18287__auto__,this__18515__auto____$1))
.call(null,this__18515__auto____$1);
self__.__hash = h__18287__auto____$1;

return h__18287__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43497,other43498){
var self__ = this;
var this43497__$1 = this;
return (((!((other43498 == null)))) && ((this43497__$1.constructor === other43498.constructor)) && (cljs.core._EQ_.call(null,this43497__$1.type_tag,other43498.type_tag)) && (cljs.core._EQ_.call(null,this43497__$1.type,other43498.type)) && (cljs.core._EQ_.call(null,this43497__$1.logical_block,other43498.logical_block)) && (cljs.core._EQ_.call(null,this43497__$1.start_pos,other43498.start_pos)) && (cljs.core._EQ_.call(null,this43497__$1.end_pos,other43498.end_pos)) && (cljs.core._EQ_.call(null,this43497__$1.__extmap,other43498.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18528__auto__,k__18529__auto__){
var self__ = this;
var this__18528__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__18529__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18528__auto____$1),self__.__meta),k__18529__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18529__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18526__auto__,k__18527__auto__,G__43495){
var self__ = this;
var this__18526__auto____$1 = this;
var pred__43505 = cljs.core.keyword_identical_QMARK_;
var expr__43506 = k__18527__auto__;
if(cljs.core.truth_(pred__43505.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43506))){
return (new cljs.pprint.nl_t(G__43495,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43505.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__43506))){
return (new cljs.pprint.nl_t(self__.type_tag,G__43495,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43505.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43506))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__43495,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43505.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43506))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__43495,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43505.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43506))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__43495,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18527__auto__,G__43495),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18531__auto__){
var self__ = this;
var this__18531__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18518__auto__,G__43495){
var self__ = this;
var this__18518__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__43495,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18524__auto__,entry__18525__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18525__auto__)){
return this__18524__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18525__auto__,(0)),cljs.core._nth.call(null,entry__18525__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18524__auto____$1,entry__18525__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__18564__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__18564__auto__,writer__18565__auto__){
return cljs.core._write.call(null,writer__18565__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__43499){
var extmap__18560__auto__ = (function (){var G__43508 = cljs.core.dissoc.call(null,G__43499,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43499)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43508);
} else {
return G__43508;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__43499),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43499),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43499),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43499),null,cljs.core.not_empty.call(null,extmap__18560__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__39886__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39886__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
return this__18519__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18520__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18521__auto__,k43511,else__18522__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
var G__43515 = k43511;
var G__43515__$1 = (((G__43515 instanceof cljs.core.Keyword))?G__43515.fqn:null);
switch (G__43515__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43511,else__18522__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18538__auto__,f__18539__auto__,init__18540__auto__){
var self__ = this;
var this__18538__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18538__auto____$1){
return (function (ret__18541__auto__,p__43516){
var vec__43517 = p__43516;
var k__18542__auto__ = cljs.core.nth.call(null,vec__43517,(0),null);
var v__18543__auto__ = cljs.core.nth.call(null,vec__43517,(1),null);
return f__18539__auto__.call(null,ret__18541__auto__,k__18542__auto__,v__18543__auto__);
});})(this__18538__auto____$1))
,init__18540__auto__,this__18538__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18533__auto__,writer__18534__auto__,opts__18535__auto__){
var self__ = this;
var this__18533__auto____$1 = this;
var pr_pair__18536__auto__ = ((function (this__18533__auto____$1){
return (function (keyval__18537__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,cljs.core.pr_writer,""," ","",opts__18535__auto__,keyval__18537__auto__);
});})(this__18533__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,pr_pair__18536__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__18535__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43510){
var self__ = this;
var G__43510__$1 = this;
return (new cljs.core.RecordIter((0),G__43510__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18517__auto__){
var self__ = this;
var this__18517__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18523__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18515__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
var h__18287__auto__ = self__.__hash;
if((!((h__18287__auto__ == null)))){
return h__18287__auto__;
} else {
var h__18287__auto____$1 = ((function (h__18287__auto__,this__18515__auto____$1){
return (function (coll__18516__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__18516__auto__));
});})(h__18287__auto__,this__18515__auto____$1))
.call(null,this__18515__auto____$1);
self__.__hash = h__18287__auto____$1;

return h__18287__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43512,other43513){
var self__ = this;
var this43512__$1 = this;
return (((!((other43513 == null)))) && ((this43512__$1.constructor === other43513.constructor)) && (cljs.core._EQ_.call(null,this43512__$1.type_tag,other43513.type_tag)) && (cljs.core._EQ_.call(null,this43512__$1.logical_block,other43513.logical_block)) && (cljs.core._EQ_.call(null,this43512__$1.start_pos,other43513.start_pos)) && (cljs.core._EQ_.call(null,this43512__$1.end_pos,other43513.end_pos)) && (cljs.core._EQ_.call(null,this43512__$1.__extmap,other43513.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18528__auto__,k__18529__auto__){
var self__ = this;
var this__18528__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__18529__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18528__auto____$1),self__.__meta),k__18529__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18529__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18526__auto__,k__18527__auto__,G__43510){
var self__ = this;
var this__18526__auto____$1 = this;
var pred__43520 = cljs.core.keyword_identical_QMARK_;
var expr__43521 = k__18527__auto__;
if(cljs.core.truth_(pred__43520.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43521))){
return (new cljs.pprint.start_block_t(G__43510,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43520.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43521))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__43510,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43520.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43521))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__43510,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43520.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43521))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__43510,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18527__auto__,G__43510),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18531__auto__){
var self__ = this;
var this__18531__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18518__auto__,G__43510){
var self__ = this;
var this__18518__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__43510,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18524__auto__,entry__18525__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18525__auto__)){
return this__18524__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18525__auto__,(0)),cljs.core._nth.call(null,entry__18525__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18524__auto____$1,entry__18525__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__18564__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__18564__auto__,writer__18565__auto__){
return cljs.core._write.call(null,writer__18565__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__43514){
var extmap__18560__auto__ = (function (){var G__43523 = cljs.core.dissoc.call(null,G__43514,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43514)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43523);
} else {
return G__43523;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43514),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43514),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43514),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43514),null,cljs.core.not_empty.call(null,extmap__18560__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__39886__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39886__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
return this__18519__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18520__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18521__auto__,k43526,else__18522__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
var G__43530 = k43526;
var G__43530__$1 = (((G__43530 instanceof cljs.core.Keyword))?G__43530.fqn:null);
switch (G__43530__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43526,else__18522__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18538__auto__,f__18539__auto__,init__18540__auto__){
var self__ = this;
var this__18538__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18538__auto____$1){
return (function (ret__18541__auto__,p__43531){
var vec__43532 = p__43531;
var k__18542__auto__ = cljs.core.nth.call(null,vec__43532,(0),null);
var v__18543__auto__ = cljs.core.nth.call(null,vec__43532,(1),null);
return f__18539__auto__.call(null,ret__18541__auto__,k__18542__auto__,v__18543__auto__);
});})(this__18538__auto____$1))
,init__18540__auto__,this__18538__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18533__auto__,writer__18534__auto__,opts__18535__auto__){
var self__ = this;
var this__18533__auto____$1 = this;
var pr_pair__18536__auto__ = ((function (this__18533__auto____$1){
return (function (keyval__18537__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,cljs.core.pr_writer,""," ","",opts__18535__auto__,keyval__18537__auto__);
});})(this__18533__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,pr_pair__18536__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__18535__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43525){
var self__ = this;
var G__43525__$1 = this;
return (new cljs.core.RecordIter((0),G__43525__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18517__auto__){
var self__ = this;
var this__18517__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18523__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18515__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
var h__18287__auto__ = self__.__hash;
if((!((h__18287__auto__ == null)))){
return h__18287__auto__;
} else {
var h__18287__auto____$1 = ((function (h__18287__auto__,this__18515__auto____$1){
return (function (coll__18516__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__18516__auto__));
});})(h__18287__auto__,this__18515__auto____$1))
.call(null,this__18515__auto____$1);
self__.__hash = h__18287__auto____$1;

return h__18287__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43527,other43528){
var self__ = this;
var this43527__$1 = this;
return (((!((other43528 == null)))) && ((this43527__$1.constructor === other43528.constructor)) && (cljs.core._EQ_.call(null,this43527__$1.type_tag,other43528.type_tag)) && (cljs.core._EQ_.call(null,this43527__$1.logical_block,other43528.logical_block)) && (cljs.core._EQ_.call(null,this43527__$1.start_pos,other43528.start_pos)) && (cljs.core._EQ_.call(null,this43527__$1.end_pos,other43528.end_pos)) && (cljs.core._EQ_.call(null,this43527__$1.__extmap,other43528.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18528__auto__,k__18529__auto__){
var self__ = this;
var this__18528__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__18529__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18528__auto____$1),self__.__meta),k__18529__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18529__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18526__auto__,k__18527__auto__,G__43525){
var self__ = this;
var this__18526__auto____$1 = this;
var pred__43535 = cljs.core.keyword_identical_QMARK_;
var expr__43536 = k__18527__auto__;
if(cljs.core.truth_(pred__43535.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43536))){
return (new cljs.pprint.end_block_t(G__43525,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43535.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43536))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__43525,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43535.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43536))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__43525,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43535.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43536))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__43525,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18527__auto__,G__43525),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18531__auto__){
var self__ = this;
var this__18531__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18518__auto__,G__43525){
var self__ = this;
var this__18518__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__43525,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18524__auto__,entry__18525__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18525__auto__)){
return this__18524__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18525__auto__,(0)),cljs.core._nth.call(null,entry__18525__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18524__auto____$1,entry__18525__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__18564__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__18564__auto__,writer__18565__auto__){
return cljs.core._write.call(null,writer__18565__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__43529){
var extmap__18560__auto__ = (function (){var G__43538 = cljs.core.dissoc.call(null,G__43529,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43529)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43538);
} else {
return G__43538;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43529),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43529),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43529),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43529),null,cljs.core.not_empty.call(null,extmap__18560__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__39886__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39886__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
return this__18519__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18520__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18521__auto__,k43541,else__18522__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
var G__43545 = k43541;
var G__43545__$1 = (((G__43545 instanceof cljs.core.Keyword))?G__43545.fqn:null);
switch (G__43545__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43541,else__18522__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18538__auto__,f__18539__auto__,init__18540__auto__){
var self__ = this;
var this__18538__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18538__auto____$1){
return (function (ret__18541__auto__,p__43546){
var vec__43547 = p__43546;
var k__18542__auto__ = cljs.core.nth.call(null,vec__43547,(0),null);
var v__18543__auto__ = cljs.core.nth.call(null,vec__43547,(1),null);
return f__18539__auto__.call(null,ret__18541__auto__,k__18542__auto__,v__18543__auto__);
});})(this__18538__auto____$1))
,init__18540__auto__,this__18538__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18533__auto__,writer__18534__auto__,opts__18535__auto__){
var self__ = this;
var this__18533__auto____$1 = this;
var pr_pair__18536__auto__ = ((function (this__18533__auto____$1){
return (function (keyval__18537__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,cljs.core.pr_writer,""," ","",opts__18535__auto__,keyval__18537__auto__);
});})(this__18533__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,pr_pair__18536__auto__,"#cljs.pprint.indent-t{",", ","}",opts__18535__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43540){
var self__ = this;
var G__43540__$1 = this;
return (new cljs.core.RecordIter((0),G__43540__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18517__auto__){
var self__ = this;
var this__18517__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18523__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18515__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
var h__18287__auto__ = self__.__hash;
if((!((h__18287__auto__ == null)))){
return h__18287__auto__;
} else {
var h__18287__auto____$1 = ((function (h__18287__auto__,this__18515__auto____$1){
return (function (coll__18516__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__18516__auto__));
});})(h__18287__auto__,this__18515__auto____$1))
.call(null,this__18515__auto____$1);
self__.__hash = h__18287__auto____$1;

return h__18287__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43542,other43543){
var self__ = this;
var this43542__$1 = this;
return (((!((other43543 == null)))) && ((this43542__$1.constructor === other43543.constructor)) && (cljs.core._EQ_.call(null,this43542__$1.type_tag,other43543.type_tag)) && (cljs.core._EQ_.call(null,this43542__$1.logical_block,other43543.logical_block)) && (cljs.core._EQ_.call(null,this43542__$1.relative_to,other43543.relative_to)) && (cljs.core._EQ_.call(null,this43542__$1.offset,other43543.offset)) && (cljs.core._EQ_.call(null,this43542__$1.start_pos,other43543.start_pos)) && (cljs.core._EQ_.call(null,this43542__$1.end_pos,other43543.end_pos)) && (cljs.core._EQ_.call(null,this43542__$1.__extmap,other43543.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18528__auto__,k__18529__auto__){
var self__ = this;
var this__18528__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__18529__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18528__auto____$1),self__.__meta),k__18529__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18529__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18526__auto__,k__18527__auto__,G__43540){
var self__ = this;
var this__18526__auto____$1 = this;
var pred__43550 = cljs.core.keyword_identical_QMARK_;
var expr__43551 = k__18527__auto__;
if(cljs.core.truth_(pred__43550.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43551))){
return (new cljs.pprint.indent_t(G__43540,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43550.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43551))){
return (new cljs.pprint.indent_t(self__.type_tag,G__43540,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43550.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__43551))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__43540,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43550.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__43551))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__43540,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43550.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43551))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__43540,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43550.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43551))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__43540,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18527__auto__,G__43540),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18531__auto__){
var self__ = this;
var this__18531__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18518__auto__,G__43540){
var self__ = this;
var this__18518__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__43540,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18524__auto__,entry__18525__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18525__auto__)){
return this__18524__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18525__auto__,(0)),cljs.core._nth.call(null,entry__18525__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18524__auto____$1,entry__18525__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__18564__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__18564__auto__,writer__18565__auto__){
return cljs.core._write.call(null,writer__18565__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__43544){
var extmap__18560__auto__ = (function (){var G__43553 = cljs.core.dissoc.call(null,G__43544,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43544)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43553);
} else {
return G__43553;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43544),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43544),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__43544),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__43544),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43544),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43544),null,cljs.core.not_empty.call(null,extmap__18560__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__39886__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39886__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__18903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18906__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18907__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__,hierarchy__18907__auto__){
return (function (p1__43556_SHARP_,p2__43555_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__43555_SHARP_);
});})(method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__,hierarchy__18907__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18907__auto__,method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5457__auto___43557 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___43557)){
var cb_43558 = temp__5457__auto___43557;
cb_43558.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5457__auto___43559 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5457__auto___43559)){
var prefix_43560 = temp__5457__auto___43559;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_43560);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5457__auto___43561 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___43561)){
var cb_43562 = temp__5457__auto___43561;
cb_43562.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__5457__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5457__auto__)){
var suffix = temp__5457__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__43563 = cljs.core._EQ_;
var expr__43564 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__43563.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__43564))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__43563.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__43564))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43564)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__17825__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__17825__auto__){
return or__17825__auto__;
} else {
var and__17810__auto__ = (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))));
if(and__17810__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__17810__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__5455__auto___43566 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___43566)){
var tws_43567 = temp__5455__auto___43566;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43567);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__43568 = cljs.core.seq.call(null,tokens);
var chunk__43569 = null;
var count__43570 = (0);
var i__43571 = (0);
while(true){
if((i__43571 < count__43570)){
var token = cljs.core._nth.call(null,chunk__43569,i__43571);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5455__auto___43572 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___43572)){
var tws_43573 = temp__5455__auto___43572;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43573);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_43574 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__17810__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__17810__auto__)){
return tws_43574;
} else {
return and__17810__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43574);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__43575 = seq__43568;
var G__43576 = chunk__43569;
var G__43577 = count__43570;
var G__43578 = (i__43571 + (1));
seq__43568 = G__43575;
chunk__43569 = G__43576;
count__43570 = G__43577;
i__43571 = G__43578;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43568);
if(temp__5457__auto__){
var seq__43568__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43568__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__43568__$1);
var G__43579 = cljs.core.chunk_rest.call(null,seq__43568__$1);
var G__43580 = c__18782__auto__;
var G__43581 = cljs.core.count.call(null,c__18782__auto__);
var G__43582 = (0);
seq__43568 = G__43579;
chunk__43569 = G__43580;
count__43570 = G__43581;
i__43571 = G__43582;
continue;
} else {
var token = cljs.core.first.call(null,seq__43568__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5455__auto___43583 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___43583)){
var tws_43584 = temp__5455__auto___43583;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43584);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_43585 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__17810__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__17810__auto__)){
return tws_43585;
} else {
return and__17810__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43585);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__43586 = cljs.core.next.call(null,seq__43568__$1);
var G__43587 = null;
var G__43588 = (0);
var G__43589 = (0);
seq__43568 = G__43586;
chunk__43569 = G__43587;
count__43570 = G__43588;
i__43571 = G__43589;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__17825__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__17810__auto__ = miser_width;
if(cljs.core.truth_(and__17810__auto__)){
var and__17810__auto____$1 = maxcol;
if(cljs.core.truth_(and__17810__auto____$1)){
var and__17810__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__17810__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__17810__auto____$2;
}
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__18903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18906__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18907__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__,hierarchy__18907__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__,hierarchy__18907__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18907__auto__,method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__17825__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
var or__17825__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__17825__auto____$1){
return or__17825__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__43590_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__43590_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__43590_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__43591_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__43591_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__43591_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__43592 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__43592;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_43593 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_43593);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__43594_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__43594_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__43595 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__43595,(0),null);
var b = cljs.core.nth.call(null,vec__43595,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__43598 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__43598,(0),null);
var remainder = cljs.core.nth.call(null,vec__43598,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if((!((buffer === new_buffer)))){
var G__43601 = new_buffer;
buffer = G__43601;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__5455__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto__)){
var buf = temp__5455__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5457__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto__)){
var tws = temp__5457__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_43606 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_43607 = (oldpos_43606 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_43607);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_43606,newpos_43607));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__43602_43608 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__43603_43609 = null;
var count__43604_43610 = (0);
var i__43605_43611 = (0);
while(true){
if((i__43605_43611 < count__43604_43610)){
var l_43612__$1 = cljs.core._nth.call(null,chunk__43603_43609,i__43605_43611);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_43612__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__43613 = seq__43602_43608;
var G__43614 = chunk__43603_43609;
var G__43615 = count__43604_43610;
var G__43616 = (i__43605_43611 + (1));
seq__43602_43608 = G__43613;
chunk__43603_43609 = G__43614;
count__43604_43610 = G__43615;
i__43605_43611 = G__43616;
continue;
} else {
var temp__5457__auto___43617 = cljs.core.seq.call(null,seq__43602_43608);
if(temp__5457__auto___43617){
var seq__43602_43618__$1 = temp__5457__auto___43617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43602_43618__$1)){
var c__18782__auto___43619 = cljs.core.chunk_first.call(null,seq__43602_43618__$1);
var G__43620 = cljs.core.chunk_rest.call(null,seq__43602_43618__$1);
var G__43621 = c__18782__auto___43619;
var G__43622 = cljs.core.count.call(null,c__18782__auto___43619);
var G__43623 = (0);
seq__43602_43608 = G__43620;
chunk__43603_43609 = G__43621;
count__43604_43610 = G__43622;
i__43605_43611 = G__43623;
continue;
} else {
var l_43624__$1 = cljs.core.first.call(null,seq__43602_43618__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_43624__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__43625 = cljs.core.next.call(null,seq__43602_43618__$1);
var G__43626 = null;
var G__43627 = (0);
var G__43628 = (0);
seq__43602_43608 = G__43625;
chunk__43603_43609 = G__43626;
count__43604_43610 = G__43627;
i__43605_43611 = G__43628;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43629 = (function (writer,max_columns,miser_width,lb,fields,meta43630){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta43630 = meta43630;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_43631,meta43630__$1){
var self__ = this;
var _43631__$1 = this;
return (new cljs.pprint.t_cljs$pprint43629(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta43630__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_43631){
var self__ = this;
var _43631__$1 = this;
return self__.meta43630;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43629.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43629.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43632 = cljs.core._EQ_;
var expr__43633 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43632.call(null,String,expr__43633))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__43632.call(null,Number,expr__43633))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43633)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43629.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43629.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint43629.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43629.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta43630","meta43630",-2050561344,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43629.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43629.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43629";

cljs.pprint.t_cljs$pprint43629.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.pprint/t_cljs$pprint43629");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43629.
 */
cljs.pprint.__GT_t_cljs$pprint43629 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint43629(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta43630){
return (new cljs.pprint.t_cljs$pprint43629(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta43630));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint43629(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__5457__auto___43635 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___43635)){
var cb_43636 = temp__5457__auto___43635;
cb_43636.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__5457__auto___43637 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___43637)){
var cb_43638 = temp__5457__auto___43637;
cb_43638.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_43639 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_43640 = (oldpos_43639 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_43640);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_43639,newpos_43640));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__43641 = cljs.core._EQ_;
var expr__43642 = relative_to;
if(cljs.core.truth_(pred__43641.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__43642))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__43641.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__43642))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43642)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__43644_SHARP_){
var temp__5457__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__43644_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__43644_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__17810__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__17810__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__17810__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__17810__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__17810__auto__)){
var and__17810__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__17810__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})();
if((!(cljs.pprint._STAR_print_pretty_STAR_))){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__19144__auto__ = [];
var len__19134__auto___43677 = arguments.length;
var i__19135__auto___43678 = (0);
while(true){
if((i__19135__auto___43678 < len__19134__auto___43677)){
args__19144__auto__.push((arguments[i__19135__auto___43678]));

var G__43679 = (i__19135__auto___43678 + (1));
i__19135__auto___43678 = G__43679;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR__orig_val__43649 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__43650 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__43651 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__43652 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__43653 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__43654 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__43655 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__43656 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__43657 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__43658 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__43659 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__43660 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__43661 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__43662 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__43663 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__43664 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__43665 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__43666 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__43667 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__43668 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__43669 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__43670 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__43671 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__43672 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__43661;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__43662;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__43663;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__43664;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__43665;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__43666;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__43667;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__43668;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__43669;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__43670;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__43671;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__43672;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__39869__auto___43680 = base_writer;
var new_writer__39870__auto___43681 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__39869__auto___43680));
var _STAR_out_STAR__orig_val__43673_43682 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43674_43683 = ((new_writer__39870__auto___43681)?cljs.pprint.make_pretty_writer.call(null,base_writer__39869__auto___43680,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__39869__auto___43680);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43674_43683;

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43673_43682;
}} else {
var _STAR_out_STAR__orig_val__43675_43684 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43676_43685 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43676_43685;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43675_43684;
}}

if(optval === true){
cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__43660;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__43659;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__43658;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__43657;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__43656;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__43655;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__43654;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__43653;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__43652;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__43651;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__43650;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__43649;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq43647){
var G__43648 = cljs.core.first.call(null,seq43647);
var seq43647__$1 = cljs.core.next.call(null,seq43647);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43648,seq43647__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__43687 = arguments.length;
switch (G__43687) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__43688 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43689 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43689;

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43688;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__39869__auto__ = writer;
var new_writer__39870__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__39869__auto__));
var _STAR_out_STAR__orig_val__43690 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43691 = ((new_writer__39870__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__39869__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__39869__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43691;

try{var _STAR_print_pretty_STAR__orig_val__43692_43695 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__43693_43696 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__43693_43696;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__43692_43695;
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43690;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__17810__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__17810__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__17810__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__19144__auto__ = [];
var len__19134__auto___43700 = arguments.length;
var i__19135__auto___43701 = (0);
while(true){
if((i__19135__auto___43701 < len__19134__auto___43700)){
args__19144__auto__.push((arguments[i__19135__auto___43701]));

var G__43702 = (i__19135__auto___43701 + (1));
i__19135__auto___43701 = G__43702;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((2) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19145__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq43697){
var G__43698 = cljs.core.first.call(null,seq43697);
var seq43697__$1 = cljs.core.next.call(null,seq43697);
var G__43699 = cljs.core.first.call(null,seq43697__$1);
var seq43697__$2 = cljs.core.next.call(null,seq43697__$1);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43698,G__43699,seq43697__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.pprint._STAR_format_str_STAR_,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
return this__18519__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18520__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18521__auto__,k43704,else__18522__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
var G__43708 = k43704;
var G__43708__$1 = (((G__43708 instanceof cljs.core.Keyword))?G__43708.fqn:null);
switch (G__43708__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43704,else__18522__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18538__auto__,f__18539__auto__,init__18540__auto__){
var self__ = this;
var this__18538__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18538__auto____$1){
return (function (ret__18541__auto__,p__43709){
var vec__43710 = p__43709;
var k__18542__auto__ = cljs.core.nth.call(null,vec__43710,(0),null);
var v__18543__auto__ = cljs.core.nth.call(null,vec__43710,(1),null);
return f__18539__auto__.call(null,ret__18541__auto__,k__18542__auto__,v__18543__auto__);
});})(this__18538__auto____$1))
,init__18540__auto__,this__18538__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18533__auto__,writer__18534__auto__,opts__18535__auto__){
var self__ = this;
var this__18533__auto____$1 = this;
var pr_pair__18536__auto__ = ((function (this__18533__auto____$1){
return (function (keyval__18537__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,cljs.core.pr_writer,""," ","",opts__18535__auto__,keyval__18537__auto__);
});})(this__18533__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,pr_pair__18536__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__18535__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43703){
var self__ = this;
var G__43703__$1 = this;
return (new cljs.core.RecordIter((0),G__43703__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18517__auto__){
var self__ = this;
var this__18517__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18523__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18515__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
var h__18287__auto__ = self__.__hash;
if((!((h__18287__auto__ == null)))){
return h__18287__auto__;
} else {
var h__18287__auto____$1 = ((function (h__18287__auto__,this__18515__auto____$1){
return (function (coll__18516__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__18516__auto__));
});})(h__18287__auto__,this__18515__auto____$1))
.call(null,this__18515__auto____$1);
self__.__hash = h__18287__auto____$1;

return h__18287__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43705,other43706){
var self__ = this;
var this43705__$1 = this;
return (((!((other43706 == null)))) && ((this43705__$1.constructor === other43706.constructor)) && (cljs.core._EQ_.call(null,this43705__$1.seq,other43706.seq)) && (cljs.core._EQ_.call(null,this43705__$1.rest,other43706.rest)) && (cljs.core._EQ_.call(null,this43705__$1.pos,other43706.pos)) && (cljs.core._EQ_.call(null,this43705__$1.__extmap,other43706.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18528__auto__,k__18529__auto__){
var self__ = this;
var this__18528__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__18529__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18528__auto____$1),self__.__meta),k__18529__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18529__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18526__auto__,k__18527__auto__,G__43703){
var self__ = this;
var this__18526__auto____$1 = this;
var pred__43713 = cljs.core.keyword_identical_QMARK_;
var expr__43714 = k__18527__auto__;
if(cljs.core.truth_(pred__43713.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__43714))){
return (new cljs.pprint.arg_navigator(G__43703,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43713.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__43714))){
return (new cljs.pprint.arg_navigator(self__.seq,G__43703,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43713.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__43714))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__43703,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18527__auto__,G__43703),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18531__auto__){
var self__ = this;
var this__18531__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18518__auto__,G__43703){
var self__ = this;
var this__18518__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__43703,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18524__auto__,entry__18525__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18525__auto__)){
return this__18524__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18525__auto__,(0)),cljs.core._nth.call(null,entry__18525__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18524__auto____$1,entry__18525__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__18564__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__18564__auto__,writer__18565__auto__){
return cljs.core._write.call(null,writer__18565__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__43707){
var extmap__18560__auto__ = (function (){var G__43716 = cljs.core.dissoc.call(null,G__43707,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__43707)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43716);
} else {
return G__43716;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__43707),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__43707),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__43707),null,cljs.core.not_empty.call(null,extmap__18560__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__43718 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__43718,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43718,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
return this__18519__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18520__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18521__auto__,k43722,else__18522__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
var G__43726 = k43722;
var G__43726__$1 = (((G__43726 instanceof cljs.core.Keyword))?G__43726.fqn:null);
switch (G__43726__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43722,else__18522__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18538__auto__,f__18539__auto__,init__18540__auto__){
var self__ = this;
var this__18538__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18538__auto____$1){
return (function (ret__18541__auto__,p__43727){
var vec__43728 = p__43727;
var k__18542__auto__ = cljs.core.nth.call(null,vec__43728,(0),null);
var v__18543__auto__ = cljs.core.nth.call(null,vec__43728,(1),null);
return f__18539__auto__.call(null,ret__18541__auto__,k__18542__auto__,v__18543__auto__);
});})(this__18538__auto____$1))
,init__18540__auto__,this__18538__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18533__auto__,writer__18534__auto__,opts__18535__auto__){
var self__ = this;
var this__18533__auto____$1 = this;
var pr_pair__18536__auto__ = ((function (this__18533__auto____$1){
return (function (keyval__18537__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,cljs.core.pr_writer,""," ","",opts__18535__auto__,keyval__18537__auto__);
});})(this__18533__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18534__auto__,pr_pair__18536__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__18535__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43721){
var self__ = this;
var G__43721__$1 = this;
return (new cljs.core.RecordIter((0),G__43721__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18517__auto__){
var self__ = this;
var this__18517__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18523__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18515__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
var h__18287__auto__ = self__.__hash;
if((!((h__18287__auto__ == null)))){
return h__18287__auto__;
} else {
var h__18287__auto____$1 = ((function (h__18287__auto__,this__18515__auto____$1){
return (function (coll__18516__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__18516__auto__));
});})(h__18287__auto__,this__18515__auto____$1))
.call(null,this__18515__auto____$1);
self__.__hash = h__18287__auto____$1;

return h__18287__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43723,other43724){
var self__ = this;
var this43723__$1 = this;
return (((!((other43724 == null)))) && ((this43723__$1.constructor === other43724.constructor)) && (cljs.core._EQ_.call(null,this43723__$1.func,other43724.func)) && (cljs.core._EQ_.call(null,this43723__$1.def,other43724.def)) && (cljs.core._EQ_.call(null,this43723__$1.params,other43724.params)) && (cljs.core._EQ_.call(null,this43723__$1.offset,other43724.offset)) && (cljs.core._EQ_.call(null,this43723__$1.__extmap,other43724.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18528__auto__,k__18529__auto__){
var self__ = this;
var this__18528__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__18529__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18528__auto____$1),self__.__meta),k__18529__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18529__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18526__auto__,k__18527__auto__,G__43721){
var self__ = this;
var this__18526__auto____$1 = this;
var pred__43731 = cljs.core.keyword_identical_QMARK_;
var expr__43732 = k__18527__auto__;
if(cljs.core.truth_(pred__43731.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__43732))){
return (new cljs.pprint.compiled_directive(G__43721,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43731.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__43732))){
return (new cljs.pprint.compiled_directive(self__.func,G__43721,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43731.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__43732))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__43721,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43731.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__43732))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__43721,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18527__auto__,G__43721),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18531__auto__){
var self__ = this;
var this__18531__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18518__auto__,G__43721){
var self__ = this;
var this__18518__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__43721,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18524__auto__,entry__18525__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18525__auto__)){
return this__18524__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18525__auto__,(0)),cljs.core._nth.call(null,entry__18525__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18524__auto____$1,entry__18525__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__18564__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__18564__auto__,writer__18565__auto__){
return cljs.core._write.call(null,writer__18565__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__43725){
var extmap__18560__auto__ = (function (){var G__43734 = cljs.core.dissoc.call(null,G__43725,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__43725)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43734);
} else {
return G__43734;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__43725),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__43725),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__43725),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__43725),null,cljs.core.not_empty.call(null,extmap__18560__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__43736,navigator){
var vec__43737 = p__43736;
var param = cljs.core.nth.call(null,vec__43737,(0),null);
var vec__43740 = cljs.core.nth.call(null,vec__43737,(1),null);
var raw_val = cljs.core.nth.call(null,vec__43740,(0),null);
var offset = cljs.core.nth.call(null,vec__43740,(1),null);
var vec__43743 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__43743,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__43743,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__43746 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__43746,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__43746,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__17825__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__43749 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__43749,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__43749,(1),null);
var base_output = (function (){var or__17825__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__43752_SHARP_){
if((p1__43752_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__43752_SHARP_,base),cljs.core.quot.call(null,p1__43752_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__43753_SHARP_){
if((p1__43753_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__43753_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__43753_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__43755 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__43755,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__43755,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_43758 = (arg < (0));
var pos_arg_43759 = ((neg_43758)?(- arg):arg);
var raw_str_43760 = cljs.pprint.opt_base_str.call(null,base,pos_arg_43759);
var group_str_43761 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_43758,pos_arg_43759,raw_str_43760,vec__43755,arg,arg_navigator__$1){
return (function (p1__43754_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__43754_SHARP_);
});})(neg_43758,pos_arg_43759,raw_str_43760,vec__43755,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_43760));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_43760);
var signed_str_43762 = ((neg_43758)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_43761)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_43761)].join(''):group_str_43761
));
var padded_str_43763 = (((signed_str_43762.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_43762.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_43762)].join(''):signed_str_43762);
cljs.pprint.print.call(null,padded_str_43763);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && ((!(cljs.core.empty_QMARK_.call(null,acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__43764 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__43765 = (pos - (1));
var G__43766 = cljs.core.first.call(null,remainder);
var G__43767 = cljs.core.next.call(null,remainder);
acc = G__43764;
pos = G__43765;
this$ = G__43766;
remainder = G__43767;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__43768 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43768,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43768,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_43771 = (((arg < (0)))?(- arg):arg);
var parts_43772 = cljs.pprint.remainders.call(null,(1000),abs_arg_43771);
if((cljs.core.count.call(null,parts_43772) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_43773 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_43772);
var full_str_43774 = cljs.pprint.add_english_scales.call(null,parts_strs_43773,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_43774].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__43775 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43775,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43775,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_43778 = (((arg < (0)))?(- arg):arg);
var parts_43779 = cljs.pprint.remainders.call(null,(1000),abs_arg_43778);
if((cljs.core.count.call(null,parts_43779) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_43780 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_43779));
var head_str_43781 = cljs.pprint.add_english_scales.call(null,parts_strs_43780,(1));
var tail_str_43782 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_43779));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_43781)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_43782))))))?[head_str_43781,", ",tail_str_43782].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_43781))))?[head_str_43781,"th"].join(''):tail_str_43782
))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_43783 = cljs.core.rem.call(null,arg,(100));
var not_teens_43784 = ((((11) < low_two_digits_43783)) || (((19) > low_two_digits_43783)));
var low_digit_43785 = cljs.core.rem.call(null,low_two_digits_43783,(10));
cljs.pprint.print.call(null,(((((low_digit_43785 === (1))) && (not_teens_43784)))?"st":(((((low_digit_43785 === (2))) && (not_teens_43784)))?"nd":(((((low_digit_43785 === (3))) && (not_teens_43784)))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__43786 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43786,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43786,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_43789 = cljs.pprint.remainders.call(null,(10),arg);
var acc_43790 = cljs.core.PersistentVector.EMPTY;
var pos_43791 = (cljs.core.count.call(null,digits_43789) - (1));
var digits_43792__$1 = digits_43789;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_43792__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_43790));
} else {
var digit_43793 = cljs.core.first.call(null,digits_43792__$1);
var G__43794 = ((cljs.core._EQ_.call(null,(0),digit_43793))?acc_43790:cljs.core.conj.call(null,acc_43790,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_43791),(digit_43793 - (1)))));
var G__43795 = (pos_43791 - (1));
var G__43796 = cljs.core.next.call(null,digits_43792__$1);
acc_43790 = G__43794;
pos_43791 = G__43795;
digits_43792__$1 = G__43796;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__43797 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__43797,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43797,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__43800 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__43800,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43800,(1),null);
var pred__43803_43806 = cljs.core._EQ_;
var expr__43804_43807 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__43803_43806.call(null,"o",expr__43804_43807))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__43803_43806.call(null,"u",expr__43804_43807))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__43803_43806.call(null,null,expr__43804_43807))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43804_43807)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__43808 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__43808,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43808,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__43811 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__43811,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__43811,(1),null);
var vec__43814 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__43814,(0),null);
var offsets = cljs.core.nth.call(null,vec__43814,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__43817 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__43817,(0),null);
var e = cljs.core.nth.call(null,vec__43817,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = (((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+"))))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__43820 = (i - (1));
i = G__43820;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__17825__auto__ = d;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__18183__auto__ = (2);
var y__18184__auto__ = w;
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__18183__auto__ = (e + (1));
var y__18184__auto__ = (w__$1 - (1));
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
})():(w__$1 + e)
));
var vec__43821 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__43821,(0),null);
var e1 = cljs.core.nth.call(null,vec__43821,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__43821,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__43821,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__43824 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__43824,(0),null);
var e1 = cljs.core.nth.call(null,vec__43824,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__43827 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43827,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43827,(1),null);
var vec__43830 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__43830,(0),null);
var abs = cljs.core.nth.call(null,vec__43830,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__43833 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__43833,(0),null);
var exp = cljs.core.nth.call(null,vec__43833,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
var vec__43836 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__43836,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__43836,(1),null);
var expanded = cljs.core.nth.call(null,vec__43836,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__17810__auto__ = w;
if(cljs.core.truth_(and__17810__auto__)){
var and__17810__auto____$1 = d;
if(cljs.core.truth_(and__17810__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_43839 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_43840 = (cljs.core.truth_(add_sign)?(len_43839 + (1)):len_43839);
var prepend_zero_43841__$1 = ((prepend_zero) && ((!((signed_len_43840 >= w)))));
var append_zero_43842__$1 = ((append_zero) && ((!((signed_len_43840 >= w)))));
var full_len_43843 = ((((prepend_zero_43841__$1) || (append_zero_43842__$1)))?(signed_len_43840 + (1)):signed_len_43840);
if(cljs.core.truth_((function (){var and__17810__auto__ = (full_len_43843 > w);
if(and__17810__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17810__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_43843),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_43841__$1)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero_43842__$1)?"0":null)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero)?"0":null)].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__43844 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43844,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43844,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__43850_43860 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__43851_43861 = G__43850_43860;
var mantissa_43862 = cljs.core.nth.call(null,vec__43851_43861,(0),null);
var exp_43863 = cljs.core.nth.call(null,vec__43851_43861,(1),null);
var G__43850_43864__$1 = G__43850_43860;
while(true){
var vec__43854_43865 = G__43850_43864__$1;
var mantissa_43866__$1 = cljs.core.nth.call(null,vec__43854_43865,(0),null);
var exp_43867__$1 = cljs.core.nth.call(null,vec__43854_43865,(1),null);
var w_43868 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_43869 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_43870 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_43871 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_43872 = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return "E";
}
})();
var add_sign_43873 = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_43874 = (k_43871 <= (0));
var scaled_exp_43875 = (exp_43867__$1 - (k_43871 - (1)));
var scaled_exp_str_43876 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_43875));
var scaled_exp_str_43877__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_43872),(((scaled_exp_43875 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_43870)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_43870 - cljs.core.count.call(null,scaled_exp_str_43876)),"0")):null)),scaled_exp_str_43876].join('');
var exp_width_43878 = cljs.core.count.call(null,scaled_exp_str_43877__$1);
var base_mantissa_width_43879 = cljs.core.count.call(null,mantissa_43866__$1);
var scaled_mantissa_43880 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_43871),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_43866__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_43869)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_43869 - (base_mantissa_width_43879 - (1))) - (((k_43871 < (0)))?(- k_43871):(0))),"0")):null))].join('');
var w_mantissa_43881 = (cljs.core.truth_(w_43868)?(w_43868 - exp_width_43878):null);
var vec__43857_43882 = cljs.pprint.round_str.call(null,scaled_mantissa_43880,(0),((cljs.core._EQ_.call(null,k_43871,(0)))?(d_43869 - (1)):(((k_43871 > (0)))?d_43869:(((k_43871 < (0)))?(d_43869 - (1)):null))),(cljs.core.truth_(w_mantissa_43881)?(w_mantissa_43881 - (cljs.core.truth_(add_sign_43873)?(1):(0))):null));
var rounded_mantissa_43883 = cljs.core.nth.call(null,vec__43857_43882,(0),null);
var __43884 = cljs.core.nth.call(null,vec__43857_43882,(1),null);
var incr_exp_43885 = cljs.core.nth.call(null,vec__43857_43882,(2),null);
var full_mantissa_43886 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_43883,k_43871);
var append_zero_43887 = ((cljs.core._EQ_.call(null,k_43871,cljs.core.count.call(null,rounded_mantissa_43883))) && ((d_43869 == null)));
if(cljs.core.not.call(null,incr_exp_43885)){
if(cljs.core.truth_(w_43868)){
var len_43888 = (cljs.core.count.call(null,full_mantissa_43886) + exp_width_43878);
var signed_len_43889 = (cljs.core.truth_(add_sign_43873)?(len_43888 + (1)):len_43888);
var prepend_zero_43890__$1 = ((prepend_zero_43874) && ((!(cljs.core._EQ_.call(null,signed_len_43889,w_43868)))));
var full_len_43891 = ((prepend_zero_43890__$1)?(signed_len_43889 + (1)):signed_len_43889);
var append_zero_43892__$1 = ((append_zero_43887) && ((full_len_43891 < w_43868)));
if(cljs.core.truth_((function (){var and__17810__auto__ = (function (){var or__17825__auto__ = (full_len_43891 > w_43868);
if(or__17825__auto__){
return or__17825__auto__;
} else {
var and__17810__auto__ = e_43870;
if(cljs.core.truth_(and__17810__auto__)){
return ((exp_width_43878 - (2)) > e_43870);
} else {
return and__17810__auto__;
}
}
})();
if(cljs.core.truth_(and__17810__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17810__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_43868,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_43868 - full_len_43891) - ((append_zero_43892__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_43873)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_43890__$1)?"0":null),full_mantissa_43886,((append_zero_43892__$1)?"0":null),scaled_exp_str_43877__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_43873)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_43874)?"0":null),full_mantissa_43886,((append_zero_43887)?"0":null),scaled_exp_str_43877__$1].join(''));
}
} else {
var G__43893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_43883,(exp_43867__$1 + (1))], null);
G__43850_43864__$1 = G__43893;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__43894 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43894,(0),null);
var _ = cljs.core.nth.call(null,vec__43894,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__43897 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__43897,(0),null);
var exp = cljs.core.nth.call(null,vec__43897,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__18183__auto__ = cljs.core.count.call(null,mantissa);
var y__18184__auto__ = (function (){var x__18190__auto__ = n;
var y__18191__auto__ = (7);
return ((x__18190__auto__ < y__18191__auto__) ? x__18190__auto__ : y__18191__auto__);
})();
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__43900 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43900,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43900,(1),null);
var vec__43903 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__43903,(0),null);
var exp = cljs.core.nth.call(null,vec__43903,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (arg < (0));
}
})();
var vec__43906 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__43906,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__43906,(1),null);
var expanded = cljs.core.nth.call(null,vec__43906,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[(cljs.core.truth_((function (){var and__17810__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__17810__auto__)){
return add_sign;
} else {
return and__17810__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__17810__auto__){
return add_sign;
} else {
return and__17810__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),full_repr].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__43909 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__43909,(0),null);
var navigator = cljs.core.nth.call(null,vec__43909,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__43912 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__43912,(0),null);
var navigator = cljs.core.nth.call(null,vec__43912,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__43915 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__43915,(0),null);
var navigator = cljs.core.nth.call(null,vec__43915,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__43918 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__43918,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43918,(1),null);
var vec__43921 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__43921,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__43921,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__17825__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__17825__auto__){
return or__17825__auto__;
} else {
var and__17810__auto__ = max_count;
if(cljs.core.truth_(and__17810__auto__)){
return (count >= max_count);
} else {
return and__17810__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__43924 = (count + (1));
var G__43925 = iter_result;
var G__43926 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__43924;
args__$1 = G__43925;
last_pos = G__43926;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__43927 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__43927,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43927,(1),null);
var vec__43930 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__43930,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__43930,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__17825__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__17825__auto__){
return or__17825__auto__;
} else {
var and__17810__auto__ = max_count;
if(cljs.core.truth_(and__17810__auto__)){
return (count >= max_count);
} else {
return and__17810__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__43933 = (count + (1));
var G__43934 = cljs.core.next.call(null,arg_list__$1);
count = G__43933;
arg_list__$1 = G__43934;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__43935 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__43935,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43935,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__17825__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__17825__auto__){
return or__17825__auto__;
} else {
var and__17810__auto__ = max_count;
if(cljs.core.truth_(and__17810__auto__)){
return (count >= max_count);
} else {
return and__17810__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__43938 = (count + (1));
var G__43939 = iter_result;
var G__43940 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__43938;
navigator__$2 = G__43939;
last_pos = G__43940;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__43941 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__43941,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43941,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__17825__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__17825__auto__){
return or__17825__auto__;
} else {
var and__17810__auto__ = max_count;
if(cljs.core.truth_(and__17810__auto__)){
return (count >= max_count);
} else {
return and__17810__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__43947 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__43947,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__43947,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__43950 = (count + (1));
var G__43951 = navigator__$3;
count = G__43950;
navigator__$2 = G__43951;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__43957 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__43960 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43961 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43961;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43960;
}})();
var iter_result = cljs.core.nth.call(null,vec__43957,(0),null);
var result_str = cljs.core.nth.call(null,vec__43957,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__43962 = cljs.core.next.call(null,clauses__$1);
var G__43963 = cljs.core.conj.call(null,acc,result_str);
var G__43964 = iter_result;
clauses__$1 = G__43962;
acc = G__43963;
navigator__$1 = G__43964;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__43965 = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var else$ = temp__5457__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__43968 = cljs.core.nth.call(null,vec__43965,(0),null);
var eol_str = cljs.core.nth.call(null,vec__43968,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__43965,(1),null);
var navigator__$1 = (function (){var or__17825__auto__ = new_navigator;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return navigator;
}
})();
var vec__43971 = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__43971,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__43971,(1),null);
var navigator__$2 = (function (){var or__17825__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__17825__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__17825__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__43974 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__43974,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__43974,(1),null);
var slots = (function (){var x__18183__auto__ = (1);
var y__18184__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__18183__auto__ = minpad;
var y__18184__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__17810__auto__ = eol_str;
if(cljs.core.truth_(and__17810__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__17810__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_43977__$1 = slots;
var extra_pad_43978__$1 = extra_pad;
var strs_43979__$1 = strs;
var pad_only_43980 = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_43979__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_43979__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_43980))?cljs.core.first.call(null,strs_43979__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__17825__auto__ = pad_only_43980;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
var or__17825__auto____$1 = cljs.core.next.call(null,strs_43979__$1);
if(or__17825__auto____$1){
return or__17825__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_43978__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__43981 = (slots_43977__$1 - (1));
var G__43982 = (extra_pad_43978__$1 - (1));
var G__43983 = (cljs.core.truth_(pad_only_43980)?strs_43979__$1:cljs.core.next.call(null,strs_43979__$1));
var G__43984 = false;
slots_43977__$1 = G__43981;
extra_pad_43978__$1 = G__43982;
strs_43979__$1 = G__43983;
pad_only_43980 = G__43984;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43985 = (function (writer,meta43986){
this.writer = writer;
this.meta43986 = meta43986;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43987,meta43986__$1){
var self__ = this;
var _43987__$1 = this;
return (new cljs.pprint.t_cljs$pprint43985(self__.writer,meta43986__$1));
});

cljs.pprint.t_cljs$pprint43985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43987){
var self__ = this;
var _43987__$1 = this;
return self__.meta43986;
});

cljs.pprint.t_cljs$pprint43985.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint43985.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43988 = cljs.core._EQ_;
var expr__43989 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43988.call(null,String,expr__43989))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__43988.call(null,Number,expr__43989))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43989)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint43985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta43986","meta43986",-282120805,null)], null);
});

cljs.pprint.t_cljs$pprint43985.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43985.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43985";

cljs.pprint.t_cljs$pprint43985.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.pprint/t_cljs$pprint43985");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43985.
 */
cljs.pprint.__GT_t_cljs$pprint43985 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint43985(writer__$1,meta43986){
return (new cljs.pprint.t_cljs$pprint43985(writer__$1,meta43986));
});

}

return (new cljs.pprint.t_cljs$pprint43985(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43991 = (function (writer,meta43992){
this.writer = writer;
this.meta43992 = meta43992;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43993,meta43992__$1){
var self__ = this;
var _43993__$1 = this;
return (new cljs.pprint.t_cljs$pprint43991(self__.writer,meta43992__$1));
});

cljs.pprint.t_cljs$pprint43991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43993){
var self__ = this;
var _43993__$1 = this;
return self__.meta43992;
});

cljs.pprint.t_cljs$pprint43991.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint43991.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43994 = cljs.core._EQ_;
var expr__43995 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43994.call(null,String,expr__43995))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__43994.call(null,Number,expr__43995))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43995)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint43991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta43992","meta43992",867599641,null)], null);
});

cljs.pprint.t_cljs$pprint43991.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43991.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43991";

cljs.pprint.t_cljs$pprint43991.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.pprint/t_cljs$pprint43991");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43991.
 */
cljs.pprint.__GT_t_cljs$pprint43991 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint43991(writer__$1,meta43992){
return (new cljs.pprint.t_cljs$pprint43991(writer__$1,meta43992));
});

}

return (new cljs.pprint.t_cljs$pprint43991(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__17810__auto__ = first_QMARK_;
if(cljs.core.truth_(and__17810__auto__)){
var and__17810__auto____$1 = f;
if(cljs.core.truth_(and__17810__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__17810__auto__ = m;
if(cljs.core.truth_(and__17810__auto__)){
return (m.index + (1));
} else {
return and__17810__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43997 = (function (writer,last_was_whitespace_QMARK_,meta43998){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta43998 = meta43998;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_43999,meta43998__$1){
var self__ = this;
var _43999__$1 = this;
return (new cljs.pprint.t_cljs$pprint43997(self__.writer,self__.last_was_whitespace_QMARK_,meta43998__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_43999){
var self__ = this;
var _43999__$1 = this;
return self__.meta43998;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43997.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43997.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__44000 = cljs.core._EQ_;
var expr__44001 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__44000.call(null,String,expr__44001))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__44000.call(null,Number,expr__44001))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44001)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43997.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta43998","meta43998",1334232470,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43997.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43997.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43997";

cljs.pprint.t_cljs$pprint43997.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.pprint/t_cljs$pprint43997");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43997.
 */
cljs.pprint.__GT_t_cljs$pprint43997 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint43997(writer__$1,last_was_whitespace_QMARK___$1,meta43998){
return (new cljs.pprint.t_cljs$pprint43997(writer__$1,last_was_whitespace_QMARK___$1,meta43998));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint43997(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint44003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint44003 = (function (writer,capped,meta44004){
this.writer = writer;
this.capped = capped;
this.meta44004 = meta44004;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint44003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_44005,meta44004__$1){
var self__ = this;
var _44005__$1 = this;
return (new cljs.pprint.t_cljs$pprint44003(self__.writer,self__.capped,meta44004__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint44003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_44005){
var self__ = this;
var _44005__$1 = this;
return self__.meta44004;
});})(capped))
;

cljs.pprint.t_cljs$pprint44003.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint44003.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__44006 = cljs.core._EQ_;
var expr__44007 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__44006.call(null,String,expr__44007))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__17810__auto__ = m;
if(cljs.core.truth_(and__17810__auto__)){
return m.index;
} else {
return and__17810__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__44006.call(null,Number,expr__44007))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__17810__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__17810__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44007)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint44003.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta44004","meta44004",-1365912119,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint44003.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint44003.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint44003";

cljs.pprint.t_cljs$pprint44003.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.pprint/t_cljs$pprint44003");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint44003.
 */
cljs.pprint.__GT_t_cljs$pprint44003 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint44003(writer__$1,capped__$1,meta44004){
return (new cljs.pprint.t_cljs$pprint44003(writer__$1,capped__$1,meta44004));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint44003(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__44009 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__44010 = make_writer.call(null,cljs.core._STAR_out_STAR_);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__44010;

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__44009;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_44012 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_44013 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_44014 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_44015 = (((current_44014 < colnum_44012))?(colnum_44012 - current_44014):((cljs.core._EQ_.call(null,colinc_44013,(0)))?(0):(colinc_44013 - cljs.core.rem.call(null,(current_44014 - colnum_44012),colinc_44013))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_44015," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_44016 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_44017 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_44018 = (colrel_44016 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_44019 = (((colinc_44017 > (0)))?cljs.core.rem.call(null,start_col_44018,colinc_44017):(0));
var space_count_44020 = (colrel_44016 + ((cljs.core._EQ_.call(null,(0),offset_44019))?(0):(colinc_44017 - offset_44019)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_44020," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__44021 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__44021,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44021,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44024_44028 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44025_44029 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44026_44030 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44027_44031 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44026_44030;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44027_44031;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44025_44029;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44024_44028;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44032_SHARP_,p2__44033_SHARP_,p3__44034_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__44032_SHARP_,p2__44033_SHARP_,p3__44034_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44035_SHARP_,p2__44036_SHARP_,p3__44037_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__44035_SHARP_,p2__44036_SHARP_,p3__44037_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44038_SHARP_,p2__44039_SHARP_,p3__44040_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__44038_SHARP_,p2__44039_SHARP_,p3__44040_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44041_SHARP_,p2__44042_SHARP_,p3__44043_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__44041_SHARP_,p2__44042_SHARP_,p3__44043_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44044_SHARP_,p2__44045_SHARP_,p3__44046_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__44044_SHARP_,p2__44045_SHARP_,p3__44046_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44047_SHARP_,p2__44048_SHARP_,p3__44049_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__44047_SHARP_,p2__44048_SHARP_,p3__44049_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__44050_SHARP_,p2__44051_SHARP_,p3__44052_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__44050_SHARP_),p1__44050_SHARP_,p2__44051_SHARP_,p3__44052_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__17810__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__17810__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17810__auto__;
}
})())){
return (function (p1__44053_SHARP_,p2__44054_SHARP_,p3__44055_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__44053_SHARP_,p2__44054_SHARP_,p3__44055_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__44056_SHARP_,p2__44057_SHARP_,p3__44058_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__44056_SHARP_,p2__44057_SHARP_,p3__44058_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__44059_SHARP_,p2__44060_SHARP_,p3__44061_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__44059_SHARP_,p2__44060_SHARP_,p3__44061_SHARP_);
});
} else {
return (function (p1__44062_SHARP_,p2__44063_SHARP_,p3__44064_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__44062_SHARP_,p2__44063_SHARP_,p3__44064_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__44074 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__44074,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__44074,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__18893__auto___44092 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_44093 = (0);
while(true){
if((i_44093 < n__18893__auto___44092)){
cljs.pprint.prn.call(null);

var G__44094 = (i_44093 + (1));
i_44093 = G__44094;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_44095 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_44095 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__18893__auto___44096 = (cnt_44095 - (1));
var i_44097 = (0);
while(true){
if((i_44097 < n__18893__auto___44096)){
cljs.pprint.prn.call(null);

var G__44098 = (i_44097 + (1));
i_44097 = G__44098;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__18893__auto___44099 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_44100 = (0);
while(true){
if((i_44100 < n__18893__auto___44099)){
cljs.pprint.print.call(null,"\f");

var G__44101 = (i_44100 + (1));
i_44100 = G__44101;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__44065_SHARP_,p2__44066_SHARP_,p3__44067_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__44065_SHARP_,p2__44066_SHARP_,p3__44067_SHARP_);
});
} else {
return (function (p1__44068_SHARP_,p2__44069_SHARP_,p3__44070_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__44068_SHARP_,p2__44069_SHARP_,p3__44070_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__44077 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__44077,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44077,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__44080 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__44080,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44080,(1),null);
var vec__44083 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__44083,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__44083,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__17810__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__17810__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17810__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__44071_SHARP_,p2__44072_SHARP_,p3__44073_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__44071_SHARP_,p2__44072_SHARP_,p3__44073_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__17810__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__17810__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17810__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__17810__auto__ = arg1;
if(cljs.core.truth_(and__17810__auto__)){
var and__17810__auto____$1 = arg2;
if(cljs.core.truth_(and__17810__auto____$1)){
return arg3;
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__17810__auto__ = arg1;
if(cljs.core.truth_(and__17810__auto__)){
return arg2;
} else {
return and__17810__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__17825__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__44086 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__44086,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44086,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__44089 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__44089,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44089,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__44102){
var vec__44103 = p__44102;
var s = cljs.core.nth.call(null,vec__44103,(0),null);
var offset = cljs.core.nth.call(null,vec__44103,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__44103,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__44106){
var vec__44107 = p__44106;
var p = cljs.core.nth.call(null,vec__44107,(0),null);
var offset = cljs.core.nth.call(null,vec__44107,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__44110){
var vec__44111 = p__44110;
var s__$1 = cljs.core.nth.call(null,vec__44111,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__44111,(1),null);
var flags = cljs.core.nth.call(null,vec__44111,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__17810__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__17810__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__17810__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__17810__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__17810__auto__){
var and__17810__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__17810__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__18190__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__18191__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__18190__auto__ < y__18191__auto__) ? x__18190__auto__ : y__18191__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__44114_SHARP_,p2__44115_SHARP_){
var val = cljs.core.first.call(null,p1__44114_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__44115_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__44115_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__44114_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__18733__auto__ = (function cljs$pprint$map_params_$_iter__44119(s__44120){
return (new cljs.core.LazySeq(null,(function (){
var s__44120__$1 = s__44120;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44120__$1);
if(temp__5457__auto__){
var s__44120__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44120__$2)){
var c__18731__auto__ = cljs.core.chunk_first.call(null,s__44120__$2);
var size__18732__auto__ = cljs.core.count.call(null,c__18731__auto__);
var b__44122 = cljs.core.chunk_buffer.call(null,size__18732__auto__);
if((function (){var i__44121 = (0);
while(true){
if((i__44121 < size__18732__auto__)){
var vec__44123 = cljs.core._nth.call(null,c__18731__auto__,i__44121);
var name = cljs.core.nth.call(null,vec__44123,(0),null);
var vec__44126 = cljs.core.nth.call(null,vec__44123,(1),null);
var default$ = cljs.core.nth.call(null,vec__44126,(0),null);
cljs.core.chunk_append.call(null,b__44122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__44135 = (i__44121 + (1));
i__44121 = G__44135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44122),cljs$pprint$map_params_$_iter__44119.call(null,cljs.core.chunk_rest.call(null,s__44120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44122),null);
}
} else {
var vec__44129 = cljs.core.first.call(null,s__44120__$2);
var name = cljs.core.nth.call(null,vec__44129,(0),null);
var vec__44132 = cljs.core.nth.call(null,vec__44129,(1),null);
var default$ = cljs.core.nth.call(null,vec__44132,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__44119.call(null,cljs.core.rest.call(null,s__44120__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18733__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__44116_SHARP_,p2__44117_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__44116_SHARP_,p2__44117_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__44118_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__44118_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__44136 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__44136,(0),null);
var vec__44139 = cljs.core.nth.call(null,vec__44136,(1),null);
var rest = cljs.core.nth.call(null,vec__44139,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__44139,(1),null);
var vec__44142 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__44142,(0),null);
var vec__44145 = cljs.core.nth.call(null,vec__44142,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__44145,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__44145,(1),null);
var flags = cljs.core.nth.call(null,vec__44145,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__17810__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__17810__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__17810__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__44148 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__44148,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__44148,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__44151){
var vec__44152 = p__44151;
var clause_map = cljs.core.nth.call(null,vec__44152,(0),null);
var saw_else = cljs.core.nth.call(null,vec__44152,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__44152,(2),null);
var vec__44155 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__44155,(0),null);
var vec__44158 = cljs.core.nth.call(null,vec__44155,(1),null);
var type = cljs.core.nth.call(null,vec__44158,(0),null);
var right_params = cljs.core.nth.call(null,vec__44158,(1),null);
var else_params = cljs.core.nth.call(null,vec__44158,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__44158,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__44161 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__44162 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__44162;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR__orig_val__44161,_STAR_format_str_STAR__temp_val__44162){
return (function (p__44163){
var vec__44164 = p__44163;
var s = cljs.core.nth.call(null,vec__44164,(0),null);
var offset = cljs.core.nth.call(null,vec__44164,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR__orig_val__44161,_STAR_format_str_STAR__temp_val__44162))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__44161;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__17825__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
var or__17825__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__17825__auto____$1)){
return or__17825__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__44167 = cljs.core.next.call(null,format__$1);
format__$1 = G__44167;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__44169 = arguments.length;
switch (G__44169) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not.call(null,stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty.call(null,format)) && (cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream)))))?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR__orig_val__44170 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__44171 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__44171;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__44170;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__44172 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__44172,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__44172,(1),null);
var vec__44175 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__44175,(0),null);
var offsets = cljs.core.nth.call(null,vec__44175,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__17810__auto__ = macro_char;
if(cljs.core.truth_(and__17810__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__17810__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44179_44184 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44180_44185 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44181_44186 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44182_44187 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44181_44186;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44182_44187;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count44183_44188 = (0);
var alis_44189__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44183_44188 < cljs.core._STAR_print_length_STAR_)))){
if(alis_44189__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_44189__$1));

if(cljs.core.next.call(null,alis_44189__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44190 = (length_count44183_44188 + (1));
var G__44191 = cljs.core.next.call(null,alis_44189__$1);
length_count44183_44188 = G__44190;
alis_44189__$1 = G__44191;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44180_44185;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44179_44184;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44192_44197 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44193_44198 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44194_44199 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44195_44200 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44194_44199;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44195_44200;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count44196_44201 = (0);
var aseq_44202 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44196_44201 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_44202){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_44202));

if(cljs.core.next.call(null,aseq_44202)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44203 = (length_count44196_44201 + (1));
var G__44204 = cljs.core.next.call(null,aseq_44202);
length_count44196_44201 = G__44203;
aseq_44202 = G__44204;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44193_44198;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44192_44197;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__39934__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44205__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44205 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44206__i = 0, G__44206__a = new Array(arguments.length -  0);
while (G__44206__i < G__44206__a.length) {G__44206__a[G__44206__i] = arguments[G__44206__i + 0]; ++G__44206__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44206__a,0,null);
} 
return G__44205__delegate.call(this,args__39936__auto__);};
G__44205.cljs$lang$maxFixedArity = 0;
G__44205.cljs$lang$applyTo = (function (arglist__44207){
var args__39936__auto__ = cljs.core.seq(arglist__44207);
return G__44205__delegate(args__39936__auto__);
});
G__44205.cljs$core$IFn$_invoke$arity$variadic = G__44205__delegate;
return G__44205;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__44208 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10277,10277,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__44208,(0),null);
var lift_map = cljs.core.nth.call(null,vec__44208,(1),null);
var amap__$1 = (function (){var or__17825__auto__ = lift_map;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44211_44220 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44212_44221 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44213_44222 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44214_44223 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44213_44222;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44214_44223;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count44215_44224 = (0);
var aseq_44225 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44215_44224 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_44225){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44216_44226 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44217_44227 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44218_44228 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44219_44229 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44218_44228;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44219_44229;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_44225));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_44225)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44217_44227;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44216_44226;
}}


if(cljs.core.next.call(null,aseq_44225)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44230 = (length_count44215_44224 + (1));
var G__44231 = cljs.core.next.call(null,aseq_44225);
length_count44215_44224 = G__44230;
aseq_44225 = G__44231;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44212_44221;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44211_44220;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__39934__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44232__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44232 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44233__i = 0, G__44233__a = new Array(arguments.length -  0);
while (G__44233__i < G__44233__a.length) {G__44233__a[G__44233__i] = arguments[G__44233__i + 0]; ++G__44233__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44233__a,0,null);
} 
return G__44232__delegate.call(this,args__39936__auto__);};
G__44232.cljs$lang$maxFixedArity = 0;
G__44232.cljs$lang$applyTo = (function (arglist__44234){
var args__39936__auto__ = cljs.core.seq(arglist__44234);
return G__44232__delegate(args__39936__auto__);
});
G__44232.cljs$core$IFn$_invoke$arity$variadic = G__44232__delegate;
return G__44232;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__17825__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44235_44241 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44236_44242 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44237_44243 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44238_44244 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44237_44243;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44238_44244;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__17810__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__17810__auto__){
return (!(cljs.core._realized_QMARK_.call(null,o)));
} else {
return and__17810__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44236_44242;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44235_44241;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__39934__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44245__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44245 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44246__i = 0, G__44246__a = new Array(arguments.length -  0);
while (G__44246__i < G__44246__a.length) {G__44246__a[G__44246__i] = arguments[G__44246__i + 0]; ++G__44246__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44246__a,0,null);
} 
return G__44245__delegate.call(this,args__39936__auto__);};
G__44245.cljs$lang$maxFixedArity = 0;
G__44245.cljs$lang$applyTo = (function (arglist__44247){
var args__39936__auto__ = cljs.core.seq(arglist__44247);
return G__44245__delegate(args__39936__auto__);
});
G__44245.cljs$core$IFn$_invoke$arity$variadic = G__44245__delegate;
return G__44245;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__18903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18906__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18907__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18907__auto__,method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__44249 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__44249,(0),null);
var end = cljs.core.nth.call(null,vec__44249,(1),null);
var vec__44252 = reference;
var seq__44253 = cljs.core.seq.call(null,vec__44252);
var first__44254 = cljs.core.first.call(null,seq__44253);
var seq__44253__$1 = cljs.core.next.call(null,seq__44253);
var keyw = first__44254;
var args = seq__44253__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44255_44269 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44256_44270 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44257_44271 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44258_44272 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44257_44271;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44258_44272;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__39934__auto__ = "~w~:i";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args){
return (function() { 
var G__44273__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44273 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44274__i = 0, G__44274__a = new Array(arguments.length -  0);
while (G__44274__i < G__44274__a.length) {G__44274__a[G__44274__i] = arguments[G__44274__i + 0]; ++G__44274__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44274__a,0,null);
} 
return G__44273__delegate.call(this,args__39936__auto__);};
G__44273.cljs$lang$maxFixedArity = 0;
G__44273.cljs$lang$applyTo = (function (arglist__44275){
var args__39936__auto__ = cljs.core.seq(arglist__44275);
return G__44273__delegate(args__39936__auto__);
});
G__44273.cljs$core$IFn$_invoke$arity$variadic = G__44273__delegate;
return G__44273;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args))
})().call(null,keyw);

var args_44276__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_44276__$1)){
(function (){var format_in__39934__auto__ = " ";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (args_44276__$1,format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args){
return (function() { 
var G__44277__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44277 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44278__i = 0, G__44278__a = new Array(arguments.length -  0);
while (G__44278__i < G__44278__a.length) {G__44278__a[G__44278__i] = arguments[G__44278__i + 0]; ++G__44278__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44278__a,0,null);
} 
return G__44277__delegate.call(this,args__39936__auto__);};
G__44277.cljs$lang$maxFixedArity = 0;
G__44277.cljs$lang$applyTo = (function (arglist__44279){
var args__39936__auto__ = cljs.core.seq(arglist__44279);
return G__44277__delegate(args__39936__auto__);
});
G__44277.cljs$core$IFn$_invoke$arity$variadic = G__44277__delegate;
return G__44277;
})()
;
;})(args_44276__$1,format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args))
})().call(null);

var arg_44280 = cljs.core.first.call(null,args_44276__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_44280)){
var vec__44259_44281 = cljs.pprint.brackets.call(null,arg_44280);
var start_44282__$1 = cljs.core.nth.call(null,vec__44259_44281,(0),null);
var end_44283__$1 = cljs.core.nth.call(null,vec__44259_44281,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44262_44284 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44263_44285 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44264_44286 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44265_44287 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44264_44286;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44265_44287;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_44282__$1,null,end_44283__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_44280),(3))) && ((cljs.core.second.call(null,arg_44280) instanceof cljs.core.Keyword)))){
var vec__44266_44288 = arg_44280;
var ns_44289 = cljs.core.nth.call(null,vec__44266_44288,(0),null);
var kw_44290 = cljs.core.nth.call(null,vec__44266_44288,(1),null);
var lis_44291 = cljs.core.nth.call(null,vec__44266_44288,(2),null);
(function (){var format_in__39934__auto__ = "~w ~w ";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (args_44276__$1,format_in__39934__auto__,cf__39935__auto__,vec__44266_44288,ns_44289,kw_44290,lis_44291,_STAR_current_level_STAR__orig_val__44262_44284,_STAR_current_length_STAR__orig_val__44263_44285,_STAR_current_level_STAR__temp_val__44264_44286,_STAR_current_length_STAR__temp_val__44265_44287,vec__44259_44281,start_44282__$1,end_44283__$1,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args){
return (function() { 
var G__44292__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44292 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44293__i = 0, G__44293__a = new Array(arguments.length -  0);
while (G__44293__i < G__44293__a.length) {G__44293__a[G__44293__i] = arguments[G__44293__i + 0]; ++G__44293__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44293__a,0,null);
} 
return G__44292__delegate.call(this,args__39936__auto__);};
G__44292.cljs$lang$maxFixedArity = 0;
G__44292.cljs$lang$applyTo = (function (arglist__44294){
var args__39936__auto__ = cljs.core.seq(arglist__44294);
return G__44292__delegate(args__39936__auto__);
});
G__44292.cljs$core$IFn$_invoke$arity$variadic = G__44292__delegate;
return G__44292;
})()
;
;})(args_44276__$1,format_in__39934__auto__,cf__39935__auto__,vec__44266_44288,ns_44289,kw_44290,lis_44291,_STAR_current_level_STAR__orig_val__44262_44284,_STAR_current_length_STAR__orig_val__44263_44285,_STAR_current_level_STAR__temp_val__44264_44286,_STAR_current_length_STAR__temp_val__44265_44287,vec__44259_44281,start_44282__$1,end_44283__$1,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args))
})().call(null,ns_44289,kw_44290);

if(cljs.core.sequential_QMARK_.call(null,lis_44291)){
(function (){var format_in__39934__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_44291))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (args_44276__$1,format_in__39934__auto__,cf__39935__auto__,vec__44266_44288,ns_44289,kw_44290,lis_44291,_STAR_current_level_STAR__orig_val__44262_44284,_STAR_current_length_STAR__orig_val__44263_44285,_STAR_current_level_STAR__temp_val__44264_44286,_STAR_current_length_STAR__temp_val__44265_44287,vec__44259_44281,start_44282__$1,end_44283__$1,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args){
return (function() { 
var G__44295__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44295 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44296__i = 0, G__44296__a = new Array(arguments.length -  0);
while (G__44296__i < G__44296__a.length) {G__44296__a[G__44296__i] = arguments[G__44296__i + 0]; ++G__44296__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44296__a,0,null);
} 
return G__44295__delegate.call(this,args__39936__auto__);};
G__44295.cljs$lang$maxFixedArity = 0;
G__44295.cljs$lang$applyTo = (function (arglist__44297){
var args__39936__auto__ = cljs.core.seq(arglist__44297);
return G__44295__delegate(args__39936__auto__);
});
G__44295.cljs$core$IFn$_invoke$arity$variadic = G__44295__delegate;
return G__44295;
})()
;
;})(args_44276__$1,format_in__39934__auto__,cf__39935__auto__,vec__44266_44288,ns_44289,kw_44290,lis_44291,_STAR_current_level_STAR__orig_val__44262_44284,_STAR_current_length_STAR__orig_val__44263_44285,_STAR_current_level_STAR__temp_val__44264_44286,_STAR_current_length_STAR__temp_val__44265_44287,vec__44259_44281,start_44282__$1,end_44283__$1,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args))
})().call(null,lis_44291);
} else {
cljs.pprint.write_out.call(null,lis_44291);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__39934__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (args_44276__$1,format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44262_44284,_STAR_current_length_STAR__orig_val__44263_44285,_STAR_current_level_STAR__temp_val__44264_44286,_STAR_current_length_STAR__temp_val__44265_44287,vec__44259_44281,start_44282__$1,end_44283__$1,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args){
return (function() { 
var G__44298__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44298 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44299__i = 0, G__44299__a = new Array(arguments.length -  0);
while (G__44299__i < G__44299__a.length) {G__44299__a[G__44299__i] = arguments[G__44299__i + 0]; ++G__44299__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44299__a,0,null);
} 
return G__44298__delegate.call(this,args__39936__auto__);};
G__44298.cljs$lang$maxFixedArity = 0;
G__44298.cljs$lang$applyTo = (function (arglist__44300){
var args__39936__auto__ = cljs.core.seq(arglist__44300);
return G__44298__delegate(args__39936__auto__);
});
G__44298.cljs$core$IFn$_invoke$arity$variadic = G__44298__delegate;
return G__44298;
})()
;
;})(args_44276__$1,format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44262_44284,_STAR_current_length_STAR__orig_val__44263_44285,_STAR_current_level_STAR__temp_val__44264_44286,_STAR_current_length_STAR__temp_val__44265_44287,vec__44259_44281,start_44282__$1,end_44283__$1,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args))
})(),arg_44280);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44263_44285;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44262_44284;
}}


if(cljs.core.next.call(null,args_44276__$1)){
(function (){var format_in__39934__auto__ = "~_";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (args_44276__$1,format_in__39934__auto__,cf__39935__auto__,vec__44259_44281,start_44282__$1,end_44283__$1,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args){
return (function() { 
var G__44301__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44301 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44302__i = 0, G__44302__a = new Array(arguments.length -  0);
while (G__44302__i < G__44302__a.length) {G__44302__a[G__44302__i] = arguments[G__44302__i + 0]; ++G__44302__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44302__a,0,null);
} 
return G__44301__delegate.call(this,args__39936__auto__);};
G__44301.cljs$lang$maxFixedArity = 0;
G__44301.cljs$lang$applyTo = (function (arglist__44303){
var args__39936__auto__ = cljs.core.seq(arglist__44303);
return G__44301__delegate(args__39936__auto__);
});
G__44301.cljs$core$IFn$_invoke$arity$variadic = G__44301__delegate;
return G__44301;
})()
;
;})(args_44276__$1,format_in__39934__auto__,cf__39935__auto__,vec__44259_44281,start_44282__$1,end_44283__$1,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_44280);

if(cljs.core.next.call(null,args_44276__$1)){
(function (){var format_in__39934__auto__ = "~:_";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (args_44276__$1,format_in__39934__auto__,cf__39935__auto__,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args){
return (function() { 
var G__44304__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44304 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44305__i = 0, G__44305__a = new Array(arguments.length -  0);
while (G__44305__i < G__44305__a.length) {G__44305__a[G__44305__i] = arguments[G__44305__i + 0]; ++G__44305__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44305__a,0,null);
} 
return G__44304__delegate.call(this,args__39936__auto__);};
G__44304.cljs$lang$maxFixedArity = 0;
G__44304.cljs$lang$applyTo = (function (arglist__44306){
var args__39936__auto__ = cljs.core.seq(arglist__44306);
return G__44304__delegate(args__39936__auto__);
});
G__44304.cljs$core$IFn$_invoke$arity$variadic = G__44304__delegate;
return G__44304;
})()
;
;})(args_44276__$1,format_in__39934__auto__,cf__39935__auto__,arg_44280,_STAR_current_level_STAR__orig_val__44255_44269,_STAR_current_length_STAR__orig_val__44256_44270,_STAR_current_level_STAR__temp_val__44257_44271,_STAR_current_length_STAR__temp_val__44258_44272,vec__44249,start,end,vec__44252,seq__44253,first__44254,seq__44253__$1,keyw,args))
})().call(null);
} else {
}
}

var G__44307 = cljs.core.next.call(null,args_44276__$1);
args_44276__$1 = G__44307;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44256_44270;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44255_44269;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__44308 = alis;
var seq__44309 = cljs.core.seq.call(null,vec__44308);
var first__44310 = cljs.core.first.call(null,seq__44309);
var seq__44309__$1 = cljs.core.next.call(null,seq__44309);
var ns_sym = first__44310;
var first__44310__$1 = cljs.core.first.call(null,seq__44309__$1);
var seq__44309__$2 = cljs.core.next.call(null,seq__44309__$1);
var ns_name = first__44310__$1;
var stuff = seq__44309__$2;
var vec__44311 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__44311,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__44311,(1),null);
var vec__44314 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__44314,(0),null);
var references = cljs.core.nth.call(null,vec__44314,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44317_44321 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44318_44322 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44319_44323 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44320_44324 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44319_44323;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44320_44324;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__39934__auto__ = "~w ~1I~@_~w";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44317_44321,_STAR_current_length_STAR__orig_val__44318_44322,_STAR_current_level_STAR__temp_val__44319_44323,_STAR_current_length_STAR__temp_val__44320_44324,vec__44308,seq__44309,first__44310,seq__44309__$1,ns_sym,first__44310__$1,seq__44309__$2,ns_name,stuff,vec__44311,doc_str,stuff__$1,vec__44314,attr_map,references){
return (function() { 
var G__44325__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44325 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44326__i = 0, G__44326__a = new Array(arguments.length -  0);
while (G__44326__i < G__44326__a.length) {G__44326__a[G__44326__i] = arguments[G__44326__i + 0]; ++G__44326__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44326__a,0,null);
} 
return G__44325__delegate.call(this,args__39936__auto__);};
G__44325.cljs$lang$maxFixedArity = 0;
G__44325.cljs$lang$applyTo = (function (arglist__44327){
var args__39936__auto__ = cljs.core.seq(arglist__44327);
return G__44325__delegate(args__39936__auto__);
});
G__44325.cljs$core$IFn$_invoke$arity$variadic = G__44325__delegate;
return G__44325;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44317_44321,_STAR_current_length_STAR__orig_val__44318_44322,_STAR_current_level_STAR__temp_val__44319_44323,_STAR_current_length_STAR__temp_val__44320_44324,vec__44308,seq__44309,first__44310,seq__44309__$1,ns_sym,first__44310__$1,seq__44309__$2,ns_name,stuff,vec__44311,doc_str,stuff__$1,vec__44314,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__17825__auto__ = doc_str;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
var or__17825__auto____$1 = attr_map;
if(cljs.core.truth_(or__17825__auto____$1)){
return or__17825__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__39934__auto__ = "~@:_";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44317_44321,_STAR_current_length_STAR__orig_val__44318_44322,_STAR_current_level_STAR__temp_val__44319_44323,_STAR_current_length_STAR__temp_val__44320_44324,vec__44308,seq__44309,first__44310,seq__44309__$1,ns_sym,first__44310__$1,seq__44309__$2,ns_name,stuff,vec__44311,doc_str,stuff__$1,vec__44314,attr_map,references){
return (function() { 
var G__44328__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44328 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44329__i = 0, G__44329__a = new Array(arguments.length -  0);
while (G__44329__i < G__44329__a.length) {G__44329__a[G__44329__i] = arguments[G__44329__i + 0]; ++G__44329__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44329__a,0,null);
} 
return G__44328__delegate.call(this,args__39936__auto__);};
G__44328.cljs$lang$maxFixedArity = 0;
G__44328.cljs$lang$applyTo = (function (arglist__44330){
var args__39936__auto__ = cljs.core.seq(arglist__44330);
return G__44328__delegate(args__39936__auto__);
});
G__44328.cljs$core$IFn$_invoke$arity$variadic = G__44328__delegate;
return G__44328;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44317_44321,_STAR_current_length_STAR__orig_val__44318_44322,_STAR_current_level_STAR__temp_val__44319_44323,_STAR_current_length_STAR__temp_val__44320_44324,vec__44308,seq__44309,first__44310,seq__44309__$1,ns_sym,first__44310__$1,seq__44309__$2,ns_name,stuff,vec__44311,doc_str,stuff__$1,vec__44314,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__17825__auto__ = attr_map;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__39934__auto__ = "~w~:[~;~:@_~]";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44317_44321,_STAR_current_length_STAR__orig_val__44318_44322,_STAR_current_level_STAR__temp_val__44319_44323,_STAR_current_length_STAR__temp_val__44320_44324,vec__44308,seq__44309,first__44310,seq__44309__$1,ns_sym,first__44310__$1,seq__44309__$2,ns_name,stuff,vec__44311,doc_str,stuff__$1,vec__44314,attr_map,references){
return (function() { 
var G__44331__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44331 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44332__i = 0, G__44332__a = new Array(arguments.length -  0);
while (G__44332__i < G__44332__a.length) {G__44332__a[G__44332__i] = arguments[G__44332__i + 0]; ++G__44332__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44332__a,0,null);
} 
return G__44331__delegate.call(this,args__39936__auto__);};
G__44331.cljs$lang$maxFixedArity = 0;
G__44331.cljs$lang$applyTo = (function (arglist__44333){
var args__39936__auto__ = cljs.core.seq(arglist__44333);
return G__44331__delegate(args__39936__auto__);
});
G__44331.cljs$core$IFn$_invoke$arity$variadic = G__44331__delegate;
return G__44331;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44317_44321,_STAR_current_length_STAR__orig_val__44318_44322,_STAR_current_level_STAR__temp_val__44319_44323,_STAR_current_length_STAR__temp_val__44320_44324,vec__44308,seq__44309,first__44310,seq__44309__$1,ns_sym,first__44310__$1,seq__44309__$2,ns_name,stuff,vec__44311,doc_str,stuff__$1,vec__44314,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_44334__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_44334__$1));

var temp__5457__auto___44335 = cljs.core.next.call(null,references_44334__$1);
if(temp__5457__auto___44335){
var references_44336__$2 = temp__5457__auto___44335;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44337 = references_44336__$2;
references_44334__$1 = G__44337;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44318_44322;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44317_44321;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__39934__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44338__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44338 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44339__i = 0, G__44339__a = new Array(arguments.length -  0);
while (G__44339__i < G__44339__a.length) {G__44339__a[G__44339__i] = arguments[G__44339__i + 0]; ++G__44339__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44339__a,0,null);
} 
return G__44338__delegate.call(this,args__39936__auto__);};
G__44338.cljs$lang$maxFixedArity = 0;
G__44338.cljs$lang$applyTo = (function (arglist__44340){
var args__39936__auto__ = cljs.core.seq(arglist__44340);
return G__44338__delegate(args__39936__auto__);
});
G__44338.cljs$core$IFn$_invoke$arity$variadic = G__44338__delegate;
return G__44338;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__39934__auto__ = " ~_";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44341__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44341 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44342__i = 0, G__44342__a = new Array(arguments.length -  0);
while (G__44342__i < G__44342__a.length) {G__44342__a[G__44342__i] = arguments[G__44342__i + 0]; ++G__44342__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44342__a,0,null);
} 
return G__44341__delegate.call(this,args__39936__auto__);};
G__44341.cljs$lang$maxFixedArity = 0;
G__44341.cljs$lang$applyTo = (function (arglist__44343){
var args__39936__auto__ = cljs.core.seq(arglist__44343);
return G__44341__delegate(args__39936__auto__);
});
G__44341.cljs$core$IFn$_invoke$arity$variadic = G__44341__delegate;
return G__44341;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})().call(null);
} else {
(function (){var format_in__39934__auto__ = " ~@_";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44344__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44344 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44345__i = 0, G__44345__a = new Array(arguments.length -  0);
while (G__44345__i < G__44345__a.length) {G__44345__a[G__44345__i] = arguments[G__44345__i + 0]; ++G__44345__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44345__a,0,null);
} 
return G__44344__delegate.call(this,args__39936__auto__);};
G__44344.cljs$lang$maxFixedArity = 0;
G__44344.cljs$lang$applyTo = (function (arglist__44346){
var args__39936__auto__ = cljs.core.seq(arglist__44346);
return G__44344__delegate(args__39936__auto__);
});
G__44344.cljs$core$IFn$_invoke$arity$variadic = G__44344__delegate;
return G__44344;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})().call(null);
}

return (function (){var format_in__39934__auto__ = "~{~w~^ ~_~}";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44347__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44347 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44348__i = 0, G__44348__a = new Array(arguments.length -  0);
while (G__44348__i < G__44348__a.length) {G__44348__a[G__44348__i] = arguments[G__44348__i + 0]; ++G__44348__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44348__a,0,null);
} 
return G__44347__delegate.call(this,args__39936__auto__);};
G__44347.cljs$lang$maxFixedArity = 0;
G__44347.cljs$lang$applyTo = (function (arglist__44349){
var args__39936__auto__ = cljs.core.seq(arglist__44349);
return G__44347__delegate(args__39936__auto__);
});
G__44347.cljs$core$IFn$_invoke$arity$variadic = G__44347__delegate;
return G__44347;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__39934__auto__ = " ~_~{~w~^ ~_~}";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44350__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44350 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44351__i = 0, G__44351__a = new Array(arguments.length -  0);
while (G__44351__i < G__44351__a.length) {G__44351__a[G__44351__i] = arguments[G__44351__i + 0]; ++G__44351__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44351__a,0,null);
} 
return G__44350__delegate.call(this,args__39936__auto__);};
G__44350.cljs$lang$maxFixedArity = 0;
G__44350.cljs$lang$applyTo = (function (arglist__44352){
var args__39936__auto__ = cljs.core.seq(arglist__44352);
return G__44350__delegate(args__39936__auto__);
});
G__44350.cljs$core$IFn$_invoke$arity$variadic = G__44350__delegate;
return G__44350;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__44353 = alis;
var seq__44354 = cljs.core.seq.call(null,vec__44353);
var first__44355 = cljs.core.first.call(null,seq__44354);
var seq__44354__$1 = cljs.core.next.call(null,seq__44354);
var defn_sym = first__44355;
var first__44355__$1 = cljs.core.first.call(null,seq__44354__$1);
var seq__44354__$2 = cljs.core.next.call(null,seq__44354__$1);
var defn_name = first__44355__$1;
var stuff = seq__44354__$2;
var vec__44356 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__44356,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__44356,(1),null);
var vec__44359 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__44359,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__44359,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44362_44366 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44363_44367 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44364_44368 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44365_44369 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44364_44368;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44365_44369;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__39934__auto__ = "~w ~1I~@_~w";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44362_44366,_STAR_current_length_STAR__orig_val__44363_44367,_STAR_current_level_STAR__temp_val__44364_44368,_STAR_current_length_STAR__temp_val__44365_44369,vec__44353,seq__44354,first__44355,seq__44354__$1,defn_sym,first__44355__$1,seq__44354__$2,defn_name,stuff,vec__44356,doc_str,stuff__$1,vec__44359,attr_map,stuff__$2){
return (function() { 
var G__44370__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44370 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44371__i = 0, G__44371__a = new Array(arguments.length -  0);
while (G__44371__i < G__44371__a.length) {G__44371__a[G__44371__i] = arguments[G__44371__i + 0]; ++G__44371__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44371__a,0,null);
} 
return G__44370__delegate.call(this,args__39936__auto__);};
G__44370.cljs$lang$maxFixedArity = 0;
G__44370.cljs$lang$applyTo = (function (arglist__44372){
var args__39936__auto__ = cljs.core.seq(arglist__44372);
return G__44370__delegate(args__39936__auto__);
});
G__44370.cljs$core$IFn$_invoke$arity$variadic = G__44370__delegate;
return G__44370;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44362_44366,_STAR_current_length_STAR__orig_val__44363_44367,_STAR_current_level_STAR__temp_val__44364_44368,_STAR_current_length_STAR__temp_val__44365_44369,vec__44353,seq__44354,first__44355,seq__44354__$1,defn_sym,first__44355__$1,seq__44354__$2,defn_name,stuff,vec__44356,doc_str,stuff__$1,vec__44359,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__39934__auto__ = " ~_~w";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44362_44366,_STAR_current_length_STAR__orig_val__44363_44367,_STAR_current_level_STAR__temp_val__44364_44368,_STAR_current_length_STAR__temp_val__44365_44369,vec__44353,seq__44354,first__44355,seq__44354__$1,defn_sym,first__44355__$1,seq__44354__$2,defn_name,stuff,vec__44356,doc_str,stuff__$1,vec__44359,attr_map,stuff__$2){
return (function() { 
var G__44373__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44373 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44374__i = 0, G__44374__a = new Array(arguments.length -  0);
while (G__44374__i < G__44374__a.length) {G__44374__a[G__44374__i] = arguments[G__44374__i + 0]; ++G__44374__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44374__a,0,null);
} 
return G__44373__delegate.call(this,args__39936__auto__);};
G__44373.cljs$lang$maxFixedArity = 0;
G__44373.cljs$lang$applyTo = (function (arglist__44375){
var args__39936__auto__ = cljs.core.seq(arglist__44375);
return G__44373__delegate(args__39936__auto__);
});
G__44373.cljs$core$IFn$_invoke$arity$variadic = G__44373__delegate;
return G__44373;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44362_44366,_STAR_current_length_STAR__orig_val__44363_44367,_STAR_current_level_STAR__temp_val__44364_44368,_STAR_current_length_STAR__temp_val__44365_44369,vec__44353,seq__44354,first__44355,seq__44354__$1,defn_sym,first__44355__$1,seq__44354__$2,defn_name,stuff,vec__44356,doc_str,stuff__$1,vec__44359,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__39934__auto__ = " ~_~w";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44362_44366,_STAR_current_length_STAR__orig_val__44363_44367,_STAR_current_level_STAR__temp_val__44364_44368,_STAR_current_length_STAR__temp_val__44365_44369,vec__44353,seq__44354,first__44355,seq__44354__$1,defn_sym,first__44355__$1,seq__44354__$2,defn_name,stuff,vec__44356,doc_str,stuff__$1,vec__44359,attr_map,stuff__$2){
return (function() { 
var G__44376__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44376 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44377__i = 0, G__44377__a = new Array(arguments.length -  0);
while (G__44377__i < G__44377__a.length) {G__44377__a[G__44377__i] = arguments[G__44377__i + 0]; ++G__44377__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44377__a,0,null);
} 
return G__44376__delegate.call(this,args__39936__auto__);};
G__44376.cljs$lang$maxFixedArity = 0;
G__44376.cljs$lang$applyTo = (function (arglist__44378){
var args__39936__auto__ = cljs.core.seq(arglist__44378);
return G__44376__delegate(args__39936__auto__);
});
G__44376.cljs$core$IFn$_invoke$arity$variadic = G__44376__delegate;
return G__44376;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44362_44366,_STAR_current_length_STAR__orig_val__44363_44367,_STAR_current_level_STAR__temp_val__44364_44368,_STAR_current_length_STAR__temp_val__44365_44369,vec__44353,seq__44354,first__44355,seq__44354__$1,defn_sym,first__44355__$1,seq__44354__$2,defn_name,stuff,vec__44356,doc_str,stuff__$1,vec__44359,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__17825__auto__ = doc_str;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__17825__auto__ = doc_str;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44363_44367;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44362_44366;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44379_44388 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44380_44389 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44381_44390 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44382_44391 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44381_44390;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44382_44391;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count44383_44392 = (0);
var binding_44393 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44383_44392 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_44393)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44384_44394 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44385_44395 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44386_44396 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44387_44397 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44386_44396;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44387_44397;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_44393));

if(cljs.core.next.call(null,binding_44393)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_44393));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44385_44395;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44384_44394;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_44393))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44398 = (length_count44383_44392 + (1));
var G__44399 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_44393));
length_count44383_44392 = G__44398;
binding_44393 = G__44399;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44380_44389;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44379_44388;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44400_44404 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44401_44405 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44402_44406 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44403_44407 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44402_44406;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44403_44407;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
(function (){var format_in__39934__auto__ = "~w ~1I~@_";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44400_44404,_STAR_current_length_STAR__orig_val__44401_44405,_STAR_current_level_STAR__temp_val__44402_44406,_STAR_current_length_STAR__temp_val__44403_44407,base_sym){
return (function() { 
var G__44408__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44408 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44409__i = 0, G__44409__a = new Array(arguments.length -  0);
while (G__44409__i < G__44409__a.length) {G__44409__a[G__44409__i] = arguments[G__44409__i + 0]; ++G__44409__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44409__a,0,null);
} 
return G__44408__delegate.call(this,args__39936__auto__);};
G__44408.cljs$lang$maxFixedArity = 0;
G__44408.cljs$lang$applyTo = (function (arglist__44410){
var args__39936__auto__ = cljs.core.seq(arglist__44410);
return G__44408__delegate(args__39936__auto__);
});
G__44408.cljs$core$IFn$_invoke$arity$variadic = G__44408__delegate;
return G__44408;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44400_44404,_STAR_current_length_STAR__orig_val__44401_44405,_STAR_current_level_STAR__temp_val__44402_44406,_STAR_current_length_STAR__temp_val__44403_44407,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__39934__auto__ = " ~_~{~w~^ ~_~}";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44400_44404,_STAR_current_length_STAR__orig_val__44401_44405,_STAR_current_level_STAR__temp_val__44402_44406,_STAR_current_length_STAR__temp_val__44403_44407,base_sym){
return (function() { 
var G__44411__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44411 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44412__i = 0, G__44412__a = new Array(arguments.length -  0);
while (G__44412__i < G__44412__a.length) {G__44412__a[G__44412__i] = arguments[G__44412__i + 0]; ++G__44412__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44412__a,0,null);
} 
return G__44411__delegate.call(this,args__39936__auto__);};
G__44411.cljs$lang$maxFixedArity = 0;
G__44411.cljs$lang$applyTo = (function (arglist__44413){
var args__39936__auto__ = cljs.core.seq(arglist__44413);
return G__44411__delegate(args__39936__auto__);
});
G__44411.cljs$core$IFn$_invoke$arity$variadic = G__44411__delegate;
return G__44411;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44400_44404,_STAR_current_length_STAR__orig_val__44401_44405,_STAR_current_level_STAR__temp_val__44402_44406,_STAR_current_length_STAR__temp_val__44403_44407,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44401_44405;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44400_44404;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__39934__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__){
return (function() { 
var G__44414__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44414 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44415__i = 0, G__44415__a = new Array(arguments.length -  0);
while (G__44415__i < G__44415__a.length) {G__44415__a[G__44415__i] = arguments[G__44415__i + 0]; ++G__44415__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44415__a,0,null);
} 
return G__44414__delegate.call(this,args__39936__auto__);};
G__44414.cljs$lang$maxFixedArity = 0;
G__44414.cljs$lang$applyTo = (function (arglist__44416){
var args__39936__auto__ = cljs.core.seq(arglist__44416);
return G__44414__delegate(args__39936__auto__);
});
G__44414.cljs$core$IFn$_invoke$arity$variadic = G__44414__delegate;
return G__44414;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44417_44426 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44418_44427 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44419_44428 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44420_44429 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44419_44428;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44420_44429;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count44421_44430 = (0);
var alis_44431__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44421_44430 < cljs.core._STAR_print_length_STAR_)))){
if(alis_44431__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44422_44432 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44423_44433 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44424_44434 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44425_44435 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44424_44434;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44425_44435;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_44431__$1));

if(cljs.core.next.call(null,alis_44431__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_44431__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44423_44433;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44422_44432;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_44431__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44436 = (length_count44421_44430 + (1));
var G__44437 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_44431__$1));
length_count44421_44430 = G__44436;
alis_44431__$1 = G__44437;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44418_44427;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44417_44426;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44438_44447 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44439_44448 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44440_44449 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44441_44450 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44440_44449;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44441_44450;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__39934__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44438_44447,_STAR_current_length_STAR__orig_val__44439_44448,_STAR_current_level_STAR__temp_val__44440_44449,_STAR_current_length_STAR__temp_val__44441_44450){
return (function() { 
var G__44451__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44451 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44452__i = 0, G__44452__a = new Array(arguments.length -  0);
while (G__44452__i < G__44452__a.length) {G__44452__a[G__44452__i] = arguments[G__44452__i + 0]; ++G__44452__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44452__a,0,null);
} 
return G__44451__delegate.call(this,args__39936__auto__);};
G__44451.cljs$lang$maxFixedArity = 0;
G__44451.cljs$lang$applyTo = (function (arglist__44453){
var args__39936__auto__ = cljs.core.seq(arglist__44453);
return G__44451__delegate(args__39936__auto__);
});
G__44451.cljs$core$IFn$_invoke$arity$variadic = G__44451__delegate;
return G__44451;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_current_level_STAR__orig_val__44438_44447,_STAR_current_length_STAR__orig_val__44439_44448,_STAR_current_level_STAR__temp_val__44440_44449,_STAR_current_length_STAR__temp_val__44441_44450))
})(),alis);

var length_count44442_44454 = (0);
var alis_44455__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44442_44454 < cljs.core._STAR_print_length_STAR_)))){
if(alis_44455__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44443_44456 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44444_44457 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44445_44458 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44446_44459 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44445_44458;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44446_44459;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_44455__$1));

if(cljs.core.next.call(null,alis_44455__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_44455__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44444_44457;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44443_44456;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_44455__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44460 = (length_count44442_44454 + (1));
var G__44461 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_44455__$1));
length_count44442_44454 = G__44460;
alis_44455__$1 = G__44461;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44439_44448;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44438_44447;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR__orig_val__44464 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__44465 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR__orig_val__44464,args,nlis){
return (function (p1__44462_SHARP_,p2__44463_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__44462_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44463_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__44464,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__44465;

try{return (function (){var format_in__39934__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__39935__auto__ = ((typeof format_in__39934__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39934__auto__):format_in__39934__auto__);
return ((function (format_in__39934__auto__,cf__39935__auto__,_STAR_symbol_map_STAR__orig_val__44464,_STAR_symbol_map_STAR__temp_val__44465,args,nlis){
return (function() { 
var G__44466__delegate = function (args__39936__auto__){
var navigator__39937__auto__ = cljs.pprint.init_navigator.call(null,args__39936__auto__);
return cljs.pprint.execute_format.call(null,cf__39935__auto__,navigator__39937__auto__);
};
var G__44466 = function (var_args){
var args__39936__auto__ = null;
if (arguments.length > 0) {
var G__44467__i = 0, G__44467__a = new Array(arguments.length -  0);
while (G__44467__i < G__44467__a.length) {G__44467__a[G__44467__i] = arguments[G__44467__i + 0]; ++G__44467__i;}
  args__39936__auto__ = new cljs.core.IndexedSeq(G__44467__a,0,null);
} 
return G__44466__delegate.call(this,args__39936__auto__);};
G__44466.cljs$lang$maxFixedArity = 0;
G__44466.cljs$lang$applyTo = (function (arglist__44468){
var args__39936__auto__ = cljs.core.seq(arglist__44468);
return G__44466__delegate(args__39936__auto__);
});
G__44466.cljs$core$IFn$_invoke$arity$variadic = G__44466__delegate;
return G__44466;
})()
;
;})(format_in__39934__auto__,cf__39935__auto__,_STAR_symbol_map_STAR__orig_val__44464,_STAR_symbol_map_STAR__temp_val__44465,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__44464;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44469_44474 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44470_44475 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44471_44476 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44472_44477 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44471_44476;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44472_44477;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count44473_44478 = (0);
var alis_44479__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44473_44478 < cljs.core._STAR_print_length_STAR_)))){
if(alis_44479__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_44479__$1));

if(cljs.core.next.call(null,alis_44479__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44480 = (length_count44473_44478 + (1));
var G__44481 = cljs.core.next.call(null,alis_44479__$1);
length_count44473_44478 = G__44480;
alis_44479__$1 = G__44481;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44470_44475;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44469_44474;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__18733__auto__ = (function cljs$pprint$two_forms_$_iter__44482(s__44483){
return (new cljs.core.LazySeq(null,(function (){
var s__44483__$1 = s__44483;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44483__$1);
if(temp__5457__auto__){
var s__44483__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44483__$2)){
var c__18731__auto__ = cljs.core.chunk_first.call(null,s__44483__$2);
var size__18732__auto__ = cljs.core.count.call(null,c__18731__auto__);
var b__44485 = cljs.core.chunk_buffer.call(null,size__18732__auto__);
if((function (){var i__44484 = (0);
while(true){
if((i__44484 < size__18732__auto__)){
var x = cljs.core._nth.call(null,c__18731__auto__,i__44484);
cljs.core.chunk_append.call(null,b__44485,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__44486 = (i__44484 + (1));
i__44484 = G__44486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44485),cljs$pprint$two_forms_$_iter__44482.call(null,cljs.core.chunk_rest.call(null,s__44483__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44485),null);
}
} else {
var x = cljs.core.first.call(null,s__44483__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__44482.call(null,cljs.core.rest.call(null,s__44483__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18733__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__44487_SHARP_){
var vec__44488 = p1__44487_SHARP_;
var s = cljs.core.nth.call(null,vec__44488,(0),null);
var f = cljs.core.nth.call(null,vec__44488,(1),null);
if(cljs.core.not.call(null,(function (){var or__17825__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__44487_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5455__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5455__auto__)){
var special_form = temp__5455__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5455__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5455__auto__)){
var arg_num = temp__5455__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__18903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18906__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18907__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18907__auto__,method_table__18903__auto__,prefer_table__18904__auto__,method_cache__18905__auto__,cached_hierarchy__18906__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__18183__auto__ = (0);
var y__18184__auto__ = (width - cljs.core.count.call(null,s));
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__44495 = arguments.length;
switch (G__44495) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,(function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.call(null,(function (p1__44491_SHARP_){
return cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__44491_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,((function (widths){
return (function (p1__44492_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__44492_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__18733__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__44506(s__44507){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__44507__$1 = s__44507;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44507__$1);
if(temp__5457__auto__){
var s__44507__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44507__$2)){
var c__18731__auto__ = cljs.core.chunk_first.call(null,s__44507__$2);
var size__18732__auto__ = cljs.core.count.call(null,c__18731__auto__);
var b__44509 = cljs.core.chunk_buffer.call(null,size__18732__auto__);
if((function (){var i__44508 = (0);
while(true){
if((i__44508 < size__18732__auto__)){
var vec__44510 = cljs.core._nth.call(null,c__18731__auto__,i__44508);
var col = cljs.core.nth.call(null,vec__44510,(0),null);
var width = cljs.core.nth.call(null,vec__44510,(1),null);
cljs.core.chunk_append.call(null,b__44509,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__44521 = (i__44508 + (1));
i__44508 = G__44521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44509),cljs$pprint$iter__44506.call(null,cljs.core.chunk_rest.call(null,s__44507__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44509),null);
}
} else {
var vec__44513 = cljs.core.first.call(null,s__44507__$2);
var col = cljs.core.nth.call(null,vec__44513,(0),null);
var width = cljs.core.nth.call(null,vec__44513,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__44506.call(null,cljs.core.rest.call(null,s__44507__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers))
,null,null));
});})(widths,spacers))
;
return iter__18733__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__18733__auto__,widths,spacers){
return (function (p1__44493_SHARP_){
return cljs.core.get.call(null,row,p1__44493_SHARP_);
});})(iter__18733__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__44516 = cljs.core.seq.call(null,rows);
var chunk__44517 = null;
var count__44518 = (0);
var i__44519 = (0);
while(true){
if((i__44519 < count__44518)){
var row = cljs.core._nth.call(null,chunk__44517,i__44519);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__44522 = seq__44516;
var G__44523 = chunk__44517;
var G__44524 = count__44518;
var G__44525 = (i__44519 + (1));
seq__44516 = G__44522;
chunk__44517 = G__44523;
count__44518 = G__44524;
i__44519 = G__44525;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44516);
if(temp__5457__auto__){
var seq__44516__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44516__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__44516__$1);
var G__44526 = cljs.core.chunk_rest.call(null,seq__44516__$1);
var G__44527 = c__18782__auto__;
var G__44528 = cljs.core.count.call(null,c__18782__auto__);
var G__44529 = (0);
seq__44516 = G__44526;
chunk__44517 = G__44527;
count__44518 = G__44528;
i__44519 = G__44529;
continue;
} else {
var row = cljs.core.first.call(null,seq__44516__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__44530 = cljs.core.next.call(null,seq__44516__$1);
var G__44531 = null;
var G__44532 = (0);
var G__44533 = (0);
seq__44516 = G__44530;
chunk__44517 = G__44531;
count__44518 = G__44532;
i__44519 = G__44533;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map
