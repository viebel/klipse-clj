// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__19135__auto__ = [];
var len__19125__auto___43356 = arguments.length;
var i__19126__auto___43357 = (0);
while(true){
if((i__19126__auto___43357 < len__19125__auto___43356)){
args__19135__auto__.push((arguments[i__19126__auto___43357]));

var G__43358 = (i__19126__auto___43357 + (1));
i__19126__auto___43357 = G__43358;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq43355){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43355));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__19135__auto__ = [];
var len__19125__auto___43360 = arguments.length;
var i__19126__auto___43361 = (0);
while(true){
if((i__19126__auto___43361 < len__19125__auto___43360)){
args__19135__auto__.push((arguments[i__19126__auto___43361]));

var G__43362 = (i__19126__auto___43361 + (1));
i__19126__auto___43361 = G__43362;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq43359){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43359));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__43363 = cljs.core._EQ_;
var expr__43364 = c;
if(cljs.core.truth_(pred__43363.call(null,"\b",expr__43364))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__43363.call(null,"\t",expr__43364))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__43363.call(null,"\n",expr__43364))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__43363.call(null,"\f",expr__43364))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__43363.call(null,"\r",expr__43364))){
return "\\return";
} else {
if(cljs.core.truth_(pred__43363.call(null,"\"",expr__43364))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__43363.call(null,"\\",expr__43364))){
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
var args__19135__auto__ = [];
var len__19125__auto___43367 = arguments.length;
var i__19126__auto___43368 = (0);
while(true){
if((i__19126__auto___43368 < len__19125__auto___43367)){
args__19135__auto__.push((arguments[i__19126__auto___43368]));

var G__43369 = (i__19126__auto___43368 + (1));
i__19126__auto___43368 = G__43369;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq43366){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43366));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__19135__auto__ = [];
var len__19125__auto___43371 = arguments.length;
var i__19126__auto___43372 = (0);
while(true){
if((i__19126__auto___43372 < len__19125__auto___43371)){
args__19135__auto__.push((arguments[i__19126__auto___43372]));

var G__43373 = (i__19126__auto___43372 + (1));
i__19126__auto___43372 = G__43373;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq43370){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43370));
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
var vec__43377 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__43377,(0),null);
var new_context = cljs.core.nth.call(null,vec__43377,(1),null);
var G__43380 = new_context;
var G__43381 = remainder;
var G__43382 = cljs.core.conj.call(null,acc,result);
context = G__43380;
lis__$1 = G__43381;
acc = G__43382;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__43386 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__43386,(0),null);
var new_context = cljs.core.nth.call(null,vec__43386,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__43389 = new_context;
var G__43390 = cljs.core.conj.call(null,acc,result);
context = G__43389;
acc = G__43390;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__43394 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__43394,(0),null);
var continue$ = cljs.core.nth.call(null,vec__43394,(1),null);
var new_context = cljs.core.nth.call(null,vec__43394,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__43397 = new_context;
var G__43398 = cljs.core.conj.call(null,acc,result);
context = G__43397;
acc = G__43398;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18724__auto__ = (function cljs$pprint$unzip_map_$_iter__43399(s__43400){
return (new cljs.core.LazySeq(null,(function (){
var s__43400__$1 = s__43400;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43400__$1);
if(temp__5720__auto__){
var s__43400__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43400__$2)){
var c__18722__auto__ = cljs.core.chunk_first.call(null,s__43400__$2);
var size__18723__auto__ = cljs.core.count.call(null,c__18722__auto__);
var b__43402 = cljs.core.chunk_buffer.call(null,size__18723__auto__);
if((function (){var i__43401 = (0);
while(true){
if((i__43401 < size__18723__auto__)){
var vec__43403 = cljs.core._nth.call(null,c__18722__auto__,i__43401);
var k = cljs.core.nth.call(null,vec__43403,(0),null);
var vec__43406 = cljs.core.nth.call(null,vec__43403,(1),null);
var v1 = cljs.core.nth.call(null,vec__43406,(0),null);
var v2 = cljs.core.nth.call(null,vec__43406,(1),null);
cljs.core.chunk_append.call(null,b__43402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__43431 = (i__43401 + (1));
i__43401 = G__43431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43402),cljs$pprint$unzip_map_$_iter__43399.call(null,cljs.core.chunk_rest.call(null,s__43400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43402),null);
}
} else {
var vec__43409 = cljs.core.first.call(null,s__43400__$2);
var k = cljs.core.nth.call(null,vec__43409,(0),null);
var vec__43412 = cljs.core.nth.call(null,vec__43409,(1),null);
var v1 = cljs.core.nth.call(null,vec__43412,(0),null);
var v2 = cljs.core.nth.call(null,vec__43412,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__43399.call(null,cljs.core.rest.call(null,s__43400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18724__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18724__auto__ = (function cljs$pprint$unzip_map_$_iter__43415(s__43416){
return (new cljs.core.LazySeq(null,(function (){
var s__43416__$1 = s__43416;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43416__$1);
if(temp__5720__auto__){
var s__43416__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43416__$2)){
var c__18722__auto__ = cljs.core.chunk_first.call(null,s__43416__$2);
var size__18723__auto__ = cljs.core.count.call(null,c__18722__auto__);
var b__43418 = cljs.core.chunk_buffer.call(null,size__18723__auto__);
if((function (){var i__43417 = (0);
while(true){
if((i__43417 < size__18723__auto__)){
var vec__43419 = cljs.core._nth.call(null,c__18722__auto__,i__43417);
var k = cljs.core.nth.call(null,vec__43419,(0),null);
var vec__43422 = cljs.core.nth.call(null,vec__43419,(1),null);
var v1 = cljs.core.nth.call(null,vec__43422,(0),null);
var v2 = cljs.core.nth.call(null,vec__43422,(1),null);
cljs.core.chunk_append.call(null,b__43418,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__43432 = (i__43417 + (1));
i__43417 = G__43432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43418),cljs$pprint$unzip_map_$_iter__43415.call(null,cljs.core.chunk_rest.call(null,s__43416__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43418),null);
}
} else {
var vec__43425 = cljs.core.first.call(null,s__43416__$2);
var k = cljs.core.nth.call(null,vec__43425,(0),null);
var vec__43428 = cljs.core.nth.call(null,vec__43425,(1),null);
var v1 = cljs.core.nth.call(null,vec__43428,(0),null);
var v2 = cljs.core.nth.call(null,vec__43428,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__43415.call(null,cljs.core.rest.call(null,s__43416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18724__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18724__auto__ = (function cljs$pprint$tuple_map_$_iter__43433(s__43434){
return (new cljs.core.LazySeq(null,(function (){
var s__43434__$1 = s__43434;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43434__$1);
if(temp__5720__auto__){
var s__43434__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43434__$2)){
var c__18722__auto__ = cljs.core.chunk_first.call(null,s__43434__$2);
var size__18723__auto__ = cljs.core.count.call(null,c__18722__auto__);
var b__43436 = cljs.core.chunk_buffer.call(null,size__18723__auto__);
if((function (){var i__43435 = (0);
while(true){
if((i__43435 < size__18723__auto__)){
var vec__43437 = cljs.core._nth.call(null,c__18722__auto__,i__43435);
var k = cljs.core.nth.call(null,vec__43437,(0),null);
var v = cljs.core.nth.call(null,vec__43437,(1),null);
cljs.core.chunk_append.call(null,b__43436,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__43443 = (i__43435 + (1));
i__43435 = G__43443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43436),cljs$pprint$tuple_map_$_iter__43433.call(null,cljs.core.chunk_rest.call(null,s__43434__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43436),null);
}
} else {
var vec__43440 = cljs.core.first.call(null,s__43434__$2);
var k = cljs.core.nth.call(null,vec__43440,(0),null);
var v = cljs.core.nth.call(null,vec__43440,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__43433.call(null,cljs.core.rest.call(null,s__43434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18724__auto__.call(null,m);
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
var G__43444 = (n - (1));
n = G__43444;
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
var G__43445 = (n + (1));
n = G__43445;
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
var G__43446 = (pos + (1));
pos = G__43446;
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
var x__18564__auto__ = (((pp == null))?null:pp);
var m__18565__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,pp);
} else {
var m__18562__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,pp);
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
var G__43449 = arguments.length;
switch (G__43449) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43450 = (function (writer,max_columns,fields,meta43451){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta43451 = meta43451;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_43452,meta43451__$1){
var self__ = this;
var _43452__$1 = this;
return (new cljs.pprint.t_cljs$pprint43450(self__.writer,self__.max_columns,self__.fields,meta43451__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint43450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_43452){
var self__ = this;
var _43452__$1 = this;
return self__.meta43451;
});})(fields))
;

cljs.pprint.t_cljs$pprint43450.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint43450.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint43450.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43453 = cljs.core._EQ_;
var expr__43454 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43453.call(null,String,expr__43454))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__43453,expr__43454,this$__$1,fields){
return (function (p1__43447_SHARP_){
return cljs.core._EQ_.call(null,p1__43447_SHARP_,"\n");
});})(s,nl,pred__43453,expr__43454,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__43453.call(null,Number,expr__43454))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43454)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint43450.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta43451","meta43451",-1595753773,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint43450.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43450.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43450";

cljs.pprint.t_cljs$pprint43450.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.pprint/t_cljs$pprint43450");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43450.
 */
cljs.pprint.__GT_t_cljs$pprint43450 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint43450(writer__$1,max_columns__$1,fields__$1,meta43451){
return (new cljs.pprint.t_cljs$pprint43450(writer__$1,max_columns__$1,fields__$1,meta43451));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint43450(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k43458,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__43462 = k43458;
var G__43462__$1 = (((G__43462 instanceof cljs.core.Keyword))?G__43462.fqn:null);
switch (G__43462__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k43458,else__18513__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__43463){
var vec__43464 = p__43463;
var k__18533__auto__ = cljs.core.nth.call(null,vec__43464,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__43464,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.pprint.logical-block{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43457){
var self__ = this;
var G__43457__$1 = this;
return (new cljs.core.RecordIter((0),G__43457__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43459,other43460){
var self__ = this;
var this43459__$1 = this;
return (((!((other43460 == null)))) && ((this43459__$1.constructor === other43460.constructor)) && (cljs.core._EQ_.call(null,this43459__$1.parent,other43460.parent)) && (cljs.core._EQ_.call(null,this43459__$1.section,other43460.section)) && (cljs.core._EQ_.call(null,this43459__$1.start_col,other43460.start_col)) && (cljs.core._EQ_.call(null,this43459__$1.indent,other43460.indent)) && (cljs.core._EQ_.call(null,this43459__$1.done_nl,other43460.done_nl)) && (cljs.core._EQ_.call(null,this43459__$1.intra_block_nl,other43460.intra_block_nl)) && (cljs.core._EQ_.call(null,this43459__$1.prefix,other43460.prefix)) && (cljs.core._EQ_.call(null,this43459__$1.per_line_prefix,other43460.per_line_prefix)) && (cljs.core._EQ_.call(null,this43459__$1.suffix,other43460.suffix)) && (cljs.core._EQ_.call(null,this43459__$1.logical_block_callback,other43460.logical_block_callback)) && (cljs.core._EQ_.call(null,this43459__$1.__extmap,other43460.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__43457){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__43467 = cljs.core.keyword_identical_QMARK_;
var expr__43468 = k__18518__auto__;
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__43468))){
return (new cljs.pprint.logical_block(G__43457,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,G__43457,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__43457,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__43457,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__43457,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__43457,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__43457,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__43457,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__43457,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43467.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__43468))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__43457,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__43457),null));
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

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__43457){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__43457,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.pprint/logical-block");
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
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__43461){
var extmap__18551__auto__ = (function (){var G__43470 = cljs.core.dissoc.call(null,G__43461,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__43461)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43470);
} else {
return G__43470;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__43461),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__43461),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
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
var G__43472 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__43472;
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
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k43474,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__43478 = k43474;
var G__43478__$1 = (((G__43478 instanceof cljs.core.Keyword))?G__43478.fqn:null);
switch (G__43478__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k43474,else__18513__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__43479){
var vec__43480 = p__43479;
var k__18533__auto__ = cljs.core.nth.call(null,vec__43480,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__43480,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43473){
var self__ = this;
var G__43473__$1 = this;
return (new cljs.core.RecordIter((0),G__43473__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43475,other43476){
var self__ = this;
var this43475__$1 = this;
return (((!((other43476 == null)))) && ((this43475__$1.constructor === other43476.constructor)) && (cljs.core._EQ_.call(null,this43475__$1.type_tag,other43476.type_tag)) && (cljs.core._EQ_.call(null,this43475__$1.data,other43476.data)) && (cljs.core._EQ_.call(null,this43475__$1.trailing_white_space,other43476.trailing_white_space)) && (cljs.core._EQ_.call(null,this43475__$1.start_pos,other43476.start_pos)) && (cljs.core._EQ_.call(null,this43475__$1.end_pos,other43476.end_pos)) && (cljs.core._EQ_.call(null,this43475__$1.__extmap,other43476.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__43473){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__43483 = cljs.core.keyword_identical_QMARK_;
var expr__43484 = k__18518__auto__;
if(cljs.core.truth_(pred__43483.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43484))){
return (new cljs.pprint.buffer_blob(G__43473,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43483.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__43484))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__43473,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43483.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__43484))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__43473,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43483.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43484))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__43473,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43483.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43484))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__43473,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__43473),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__43473){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__43473,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.pprint/buffer-blob");
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
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__43477){
var extmap__18551__auto__ = (function (){var G__43486 = cljs.core.dissoc.call(null,G__43477,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43477)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43486);
} else {
return G__43486;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43477),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__43477),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__43477),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43477),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43477),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__39877__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39877__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
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
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k43489,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__43493 = k43489;
var G__43493__$1 = (((G__43493 instanceof cljs.core.Keyword))?G__43493.fqn:null);
switch (G__43493__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k43489,else__18513__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__43494){
var vec__43495 = p__43494;
var k__18533__auto__ = cljs.core.nth.call(null,vec__43495,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__43495,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.pprint.nl-t{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43488){
var self__ = this;
var G__43488__$1 = this;
return (new cljs.core.RecordIter((0),G__43488__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43490,other43491){
var self__ = this;
var this43490__$1 = this;
return (((!((other43491 == null)))) && ((this43490__$1.constructor === other43491.constructor)) && (cljs.core._EQ_.call(null,this43490__$1.type_tag,other43491.type_tag)) && (cljs.core._EQ_.call(null,this43490__$1.type,other43491.type)) && (cljs.core._EQ_.call(null,this43490__$1.logical_block,other43491.logical_block)) && (cljs.core._EQ_.call(null,this43490__$1.start_pos,other43491.start_pos)) && (cljs.core._EQ_.call(null,this43490__$1.end_pos,other43491.end_pos)) && (cljs.core._EQ_.call(null,this43490__$1.__extmap,other43491.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__43488){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__43498 = cljs.core.keyword_identical_QMARK_;
var expr__43499 = k__18518__auto__;
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43499))){
return (new cljs.pprint.nl_t(G__43488,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__43499))){
return (new cljs.pprint.nl_t(self__.type_tag,G__43488,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43499))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__43488,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43499))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__43488,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43499))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__43488,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__43488),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__43488){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__43488,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.pprint/nl-t");
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
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__43492){
var extmap__18551__auto__ = (function (){var G__43501 = cljs.core.dissoc.call(null,G__43492,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43492)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43501);
} else {
return G__43501;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43492),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__43492),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43492),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43492),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43492),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__39877__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39877__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
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
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k43504,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__43508 = k43504;
var G__43508__$1 = (((G__43508 instanceof cljs.core.Keyword))?G__43508.fqn:null);
switch (G__43508__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k43504,else__18513__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__43509){
var vec__43510 = p__43509;
var k__18533__auto__ = cljs.core.nth.call(null,vec__43510,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__43510,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43503){
var self__ = this;
var G__43503__$1 = this;
return (new cljs.core.RecordIter((0),G__43503__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43505,other43506){
var self__ = this;
var this43505__$1 = this;
return (((!((other43506 == null)))) && ((this43505__$1.constructor === other43506.constructor)) && (cljs.core._EQ_.call(null,this43505__$1.type_tag,other43506.type_tag)) && (cljs.core._EQ_.call(null,this43505__$1.logical_block,other43506.logical_block)) && (cljs.core._EQ_.call(null,this43505__$1.start_pos,other43506.start_pos)) && (cljs.core._EQ_.call(null,this43505__$1.end_pos,other43506.end_pos)) && (cljs.core._EQ_.call(null,this43505__$1.__extmap,other43506.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__43503){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__43513 = cljs.core.keyword_identical_QMARK_;
var expr__43514 = k__18518__auto__;
if(cljs.core.truth_(pred__43513.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43514))){
return (new cljs.pprint.start_block_t(G__43503,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43513.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43514))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__43503,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43513.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43514))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__43503,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43513.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43514))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__43503,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__43503),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__43503){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__43503,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.pprint/start-block-t");
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
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__43507){
var extmap__18551__auto__ = (function (){var G__43516 = cljs.core.dissoc.call(null,G__43507,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43507)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43516);
} else {
return G__43516;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43507),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43507),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43507),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43507),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__39877__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39877__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
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
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k43519,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__43523 = k43519;
var G__43523__$1 = (((G__43523 instanceof cljs.core.Keyword))?G__43523.fqn:null);
switch (G__43523__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k43519,else__18513__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__43524){
var vec__43525 = p__43524;
var k__18533__auto__ = cljs.core.nth.call(null,vec__43525,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__43525,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43518){
var self__ = this;
var G__43518__$1 = this;
return (new cljs.core.RecordIter((0),G__43518__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43520,other43521){
var self__ = this;
var this43520__$1 = this;
return (((!((other43521 == null)))) && ((this43520__$1.constructor === other43521.constructor)) && (cljs.core._EQ_.call(null,this43520__$1.type_tag,other43521.type_tag)) && (cljs.core._EQ_.call(null,this43520__$1.logical_block,other43521.logical_block)) && (cljs.core._EQ_.call(null,this43520__$1.start_pos,other43521.start_pos)) && (cljs.core._EQ_.call(null,this43520__$1.end_pos,other43521.end_pos)) && (cljs.core._EQ_.call(null,this43520__$1.__extmap,other43521.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__43518){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__43528 = cljs.core.keyword_identical_QMARK_;
var expr__43529 = k__18518__auto__;
if(cljs.core.truth_(pred__43528.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43529))){
return (new cljs.pprint.end_block_t(G__43518,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43528.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43529))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__43518,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43528.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43529))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__43518,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43528.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43529))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__43518,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__43518),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__43518){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__43518,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.pprint/end-block-t");
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
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__43522){
var extmap__18551__auto__ = (function (){var G__43531 = cljs.core.dissoc.call(null,G__43522,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43522)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43531);
} else {
return G__43531;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43522),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43522),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43522),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43522),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__39877__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39877__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
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
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k43534,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__43538 = k43534;
var G__43538__$1 = (((G__43538 instanceof cljs.core.Keyword))?G__43538.fqn:null);
switch (G__43538__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k43534,else__18513__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__43539){
var vec__43540 = p__43539;
var k__18533__auto__ = cljs.core.nth.call(null,vec__43540,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__43540,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.pprint.indent-t{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43533){
var self__ = this;
var G__43533__$1 = this;
return (new cljs.core.RecordIter((0),G__43533__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43535,other43536){
var self__ = this;
var this43535__$1 = this;
return (((!((other43536 == null)))) && ((this43535__$1.constructor === other43536.constructor)) && (cljs.core._EQ_.call(null,this43535__$1.type_tag,other43536.type_tag)) && (cljs.core._EQ_.call(null,this43535__$1.logical_block,other43536.logical_block)) && (cljs.core._EQ_.call(null,this43535__$1.relative_to,other43536.relative_to)) && (cljs.core._EQ_.call(null,this43535__$1.offset,other43536.offset)) && (cljs.core._EQ_.call(null,this43535__$1.start_pos,other43536.start_pos)) && (cljs.core._EQ_.call(null,this43535__$1.end_pos,other43536.end_pos)) && (cljs.core._EQ_.call(null,this43535__$1.__extmap,other43536.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__43533){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__43543 = cljs.core.keyword_identical_QMARK_;
var expr__43544 = k__18518__auto__;
if(cljs.core.truth_(pred__43543.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43544))){
return (new cljs.pprint.indent_t(G__43533,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43543.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43544))){
return (new cljs.pprint.indent_t(self__.type_tag,G__43533,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43543.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__43544))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__43533,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43543.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__43544))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__43533,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43543.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43544))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__43533,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43543.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43544))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__43533,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__43533),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__43533){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__43533,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.pprint/indent-t");
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
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__43537){
var extmap__18551__auto__ = (function (){var G__43546 = cljs.core.dissoc.call(null,G__43537,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__43537)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43546);
} else {
return G__43546;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43537),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43537),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__43537),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__43537),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43537),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43537),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__39877__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__39877__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__18894__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18895__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18896__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18897__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18898__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__,hierarchy__18898__auto__){
return (function (p1__43549_SHARP_,p2__43548_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__43548_SHARP_);
});})(method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__,hierarchy__18898__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18898__auto__,method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5720__auto___43550 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___43550)){
var cb_43551 = temp__5720__auto___43550;
cb_43551.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5720__auto___43552 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___43552)){
var prefix_43553 = temp__5720__auto___43552;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_43553);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5720__auto___43554 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___43554)){
var cb_43555 = temp__5720__auto___43554;
cb_43555.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__5720__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5720__auto__)){
var suffix = temp__5720__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__43556 = cljs.core._EQ_;
var expr__43557 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__43556.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__43557))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__43556.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__43557))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43557)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__17816__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__17816__auto__){
return or__17816__auto__;
} else {
var and__17801__auto__ = (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))));
if(and__17801__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__17801__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__5718__auto___43559 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___43559)){
var tws_43560 = temp__5718__auto___43559;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43560);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__43561 = cljs.core.seq.call(null,tokens);
var chunk__43562 = null;
var count__43563 = (0);
var i__43564 = (0);
while(true){
if((i__43564 < count__43563)){
var token = cljs.core._nth.call(null,chunk__43562,i__43564);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___43565 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___43565)){
var tws_43566 = temp__5718__auto___43565;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43566);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_43567 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__17801__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__17801__auto__)){
return tws_43567;
} else {
return and__17801__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43567);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__43568 = seq__43561;
var G__43569 = chunk__43562;
var G__43570 = count__43563;
var G__43571 = (i__43564 + (1));
seq__43561 = G__43568;
chunk__43562 = G__43569;
count__43563 = G__43570;
i__43564 = G__43571;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__43561);
if(temp__5720__auto__){
var seq__43561__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43561__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__43561__$1);
var G__43572 = cljs.core.chunk_rest.call(null,seq__43561__$1);
var G__43573 = c__18773__auto__;
var G__43574 = cljs.core.count.call(null,c__18773__auto__);
var G__43575 = (0);
seq__43561 = G__43572;
chunk__43562 = G__43573;
count__43563 = G__43574;
i__43564 = G__43575;
continue;
} else {
var token = cljs.core.first.call(null,seq__43561__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___43576 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___43576)){
var tws_43577 = temp__5718__auto___43576;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43577);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_43578 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__17801__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__17801__auto__)){
return tws_43578;
} else {
return and__17801__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_43578);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__43579 = cljs.core.next.call(null,seq__43561__$1);
var G__43580 = null;
var G__43581 = (0);
var G__43582 = (0);
seq__43561 = G__43579;
chunk__43562 = G__43580;
count__43563 = G__43581;
i__43564 = G__43582;
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
var or__17816__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__17801__auto__ = miser_width;
if(cljs.core.truth_(and__17801__auto__)){
var and__17801__auto____$1 = maxcol;
if(cljs.core.truth_(and__17801__auto____$1)){
var and__17801__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__17801__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__17801__auto____$2;
}
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__18894__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18895__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18896__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18897__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18898__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__,hierarchy__18898__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__,hierarchy__18898__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18898__auto__,method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__));
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
var or__17816__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
var or__17816__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__17816__auto____$1){
return or__17816__auto____$1;
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
return (function (p1__43583_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__43583_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__43583_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__43584_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__43584_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__43584_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
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

var G__43585 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__43585;
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

var istr_43586 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_43586);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__43587_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__43587_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__43588 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__43588,(0),null);
var b = cljs.core.nth.call(null,vec__43588,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__43591 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__43591,(0),null);
var remainder = cljs.core.nth.call(null,vec__43591,(1),null);
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
var G__43594 = new_buffer;
buffer = G__43594;
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

var temp__5718__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto__)){
var buf = temp__5718__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5720__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto__)){
var tws = temp__5720__auto__;
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
var oldpos_43599 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_43600 = (oldpos_43599 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_43600);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_43599,newpos_43600));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__43595_43601 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__43596_43602 = null;
var count__43597_43603 = (0);
var i__43598_43604 = (0);
while(true){
if((i__43598_43604 < count__43597_43603)){
var l_43605__$1 = cljs.core._nth.call(null,chunk__43596_43602,i__43598_43604);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_43605__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__43606 = seq__43595_43601;
var G__43607 = chunk__43596_43602;
var G__43608 = count__43597_43603;
var G__43609 = (i__43598_43604 + (1));
seq__43595_43601 = G__43606;
chunk__43596_43602 = G__43607;
count__43597_43603 = G__43608;
i__43598_43604 = G__43609;
continue;
} else {
var temp__5720__auto___43610 = cljs.core.seq.call(null,seq__43595_43601);
if(temp__5720__auto___43610){
var seq__43595_43611__$1 = temp__5720__auto___43610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43595_43611__$1)){
var c__18773__auto___43612 = cljs.core.chunk_first.call(null,seq__43595_43611__$1);
var G__43613 = cljs.core.chunk_rest.call(null,seq__43595_43611__$1);
var G__43614 = c__18773__auto___43612;
var G__43615 = cljs.core.count.call(null,c__18773__auto___43612);
var G__43616 = (0);
seq__43595_43601 = G__43613;
chunk__43596_43602 = G__43614;
count__43597_43603 = G__43615;
i__43598_43604 = G__43616;
continue;
} else {
var l_43617__$1 = cljs.core.first.call(null,seq__43595_43611__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_43617__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__43618 = cljs.core.next.call(null,seq__43595_43611__$1);
var G__43619 = null;
var G__43620 = (0);
var G__43621 = (0);
seq__43595_43601 = G__43618;
chunk__43596_43602 = G__43619;
count__43597_43603 = G__43620;
i__43598_43604 = G__43621;
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43622 = (function (writer,max_columns,miser_width,lb,fields,meta43623){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta43623 = meta43623;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_43624,meta43623__$1){
var self__ = this;
var _43624__$1 = this;
return (new cljs.pprint.t_cljs$pprint43622(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta43623__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_43624){
var self__ = this;
var _43624__$1 = this;
return self__.meta43623;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43622.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43622.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43625 = cljs.core._EQ_;
var expr__43626 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43625.call(null,String,expr__43626))){
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
if(cljs.core.truth_(pred__43625.call(null,Number,expr__43626))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43626)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43622.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43622.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint43622.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
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

cljs.pprint.t_cljs$pprint43622.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta43623","meta43623",2085943616,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint43622.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43622.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43622";

cljs.pprint.t_cljs$pprint43622.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.pprint/t_cljs$pprint43622");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43622.
 */
cljs.pprint.__GT_t_cljs$pprint43622 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint43622(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta43623){
return (new cljs.pprint.t_cljs$pprint43622(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta43623));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint43622(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__5720__auto___43628 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___43628)){
var cb_43629 = temp__5720__auto___43628;
cb_43629.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
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

var temp__5720__auto___43630 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___43630)){
var cb_43631 = temp__5720__auto___43630;
cb_43631.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_43632 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_43633 = (oldpos_43632 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_43633);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_43632,newpos_43633));
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

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__43634 = cljs.core._EQ_;
var expr__43635 = relative_to;
if(cljs.core.truth_(pred__43634.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__43635))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__43634.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__43635))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43635)].join('')));
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
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__43637_SHARP_){
var temp__5720__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__43637_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__43637_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__17801__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__17801__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__17801__auto__;
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
var length_reached = (function (){var and__17801__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__17801__auto__)){
var and__17801__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__17801__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
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
var args__19135__auto__ = [];
var len__19125__auto___43670 = arguments.length;
var i__19126__auto___43671 = (0);
while(true){
if((i__19126__auto___43671 < len__19125__auto___43670)){
args__19135__auto__.push((arguments[i__19126__auto___43671]));

var G__43672 = (i__19126__auto___43671 + (1));
i__19126__auto___43671 = G__43672;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR__orig_val__43642 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__43643 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__43644 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__43645 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__43646 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__43647 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__43648 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__43649 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__43650 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__43651 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__43652 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__43653 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__43654 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__43655 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__43656 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__43657 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__43658 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__43659 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__43660 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__43661 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__43662 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__43663 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__43664 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__43665 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__43654;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__43655;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__43656;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__43657;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__43658;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__43659;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__43660;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__43661;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__43662;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__43663;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__43664;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__43665;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__39860__auto___43673 = base_writer;
var new_writer__39861__auto___43674 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__39860__auto___43673));
var _STAR_out_STAR__orig_val__43666_43675 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43667_43676 = ((new_writer__39861__auto___43674)?cljs.pprint.make_pretty_writer.call(null,base_writer__39860__auto___43673,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__39860__auto___43673);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43667_43676;

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43666_43675;
}} else {
var _STAR_out_STAR__orig_val__43668_43677 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43669_43678 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43669_43678;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43668_43677;
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
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__43653;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__43652;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__43651;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__43650;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__43649;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__43648;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__43647;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__43646;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__43645;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__43644;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__43643;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__43642;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq43640){
var G__43641 = cljs.core.first.call(null,seq43640);
var seq43640__$1 = cljs.core.next.call(null,seq43640);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43641,seq43640__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__43680 = arguments.length;
switch (G__43680) {
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
var _STAR_out_STAR__orig_val__43681 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43682 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43682;

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43681;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__39860__auto__ = writer;
var new_writer__39861__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__39860__auto__));
var _STAR_out_STAR__orig_val__43683 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43684 = ((new_writer__39861__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__39860__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__39860__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43684;

try{var _STAR_print_pretty_STAR__orig_val__43685_43688 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__43686_43689 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__43686_43689;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__43685_43688;
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43683;
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
var and__17801__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__17801__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__17801__auto__;
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
var args__19135__auto__ = [];
var len__19125__auto___43693 = arguments.length;
var i__19126__auto___43694 = (0);
while(true){
if((i__19126__auto___43694 < len__19125__auto___43693)){
args__19135__auto__.push((arguments[i__19126__auto___43694]));

var G__43695 = (i__19126__auto___43694 + (1));
i__19126__auto___43694 = G__43695;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((2) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19136__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq43690){
var G__43691 = cljs.core.first.call(null,seq43690);
var seq43690__$1 = cljs.core.next.call(null,seq43690);
var G__43692 = cljs.core.first.call(null,seq43690__$1);
var seq43690__$2 = cljs.core.next.call(null,seq43690__$1);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43691,G__43692,seq43690__$2);
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
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k43697,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__43701 = k43697;
var G__43701__$1 = (((G__43701 instanceof cljs.core.Keyword))?G__43701.fqn:null);
switch (G__43701__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k43697,else__18513__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__43702){
var vec__43703 = p__43702;
var k__18533__auto__ = cljs.core.nth.call(null,vec__43703,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__43703,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43696){
var self__ = this;
var G__43696__$1 = this;
return (new cljs.core.RecordIter((0),G__43696__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43698,other43699){
var self__ = this;
var this43698__$1 = this;
return (((!((other43699 == null)))) && ((this43698__$1.constructor === other43699.constructor)) && (cljs.core._EQ_.call(null,this43698__$1.seq,other43699.seq)) && (cljs.core._EQ_.call(null,this43698__$1.rest,other43699.rest)) && (cljs.core._EQ_.call(null,this43698__$1.pos,other43699.pos)) && (cljs.core._EQ_.call(null,this43698__$1.__extmap,other43699.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__43696){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__43706 = cljs.core.keyword_identical_QMARK_;
var expr__43707 = k__18518__auto__;
if(cljs.core.truth_(pred__43706.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__43707))){
return (new cljs.pprint.arg_navigator(G__43696,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43706.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__43707))){
return (new cljs.pprint.arg_navigator(self__.seq,G__43696,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43706.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__43707))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__43696,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__43696),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__43696){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__43696,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.pprint/arg-navigator");
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
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__43700){
var extmap__18551__auto__ = (function (){var G__43709 = cljs.core.dissoc.call(null,G__43700,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__43700)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43709);
} else {
return G__43709;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__43700),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__43700),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__43700),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
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
var vec__43711 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__43711,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43711,(1),null);
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
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k43715,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__43719 = k43715;
var G__43719__$1 = (((G__43719 instanceof cljs.core.Keyword))?G__43719.fqn:null);
switch (G__43719__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k43715,else__18513__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__43720){
var vec__43721 = p__43720;
var k__18533__auto__ = cljs.core.nth.call(null,vec__43721,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__43721,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43714){
var self__ = this;
var G__43714__$1 = this;
return (new cljs.core.RecordIter((0),G__43714__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43716,other43717){
var self__ = this;
var this43716__$1 = this;
return (((!((other43717 == null)))) && ((this43716__$1.constructor === other43717.constructor)) && (cljs.core._EQ_.call(null,this43716__$1.func,other43717.func)) && (cljs.core._EQ_.call(null,this43716__$1.def,other43717.def)) && (cljs.core._EQ_.call(null,this43716__$1.params,other43717.params)) && (cljs.core._EQ_.call(null,this43716__$1.offset,other43717.offset)) && (cljs.core._EQ_.call(null,this43716__$1.__extmap,other43717.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__43714){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__43724 = cljs.core.keyword_identical_QMARK_;
var expr__43725 = k__18518__auto__;
if(cljs.core.truth_(pred__43724.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__43725))){
return (new cljs.pprint.compiled_directive(G__43714,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43724.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__43725))){
return (new cljs.pprint.compiled_directive(self__.func,G__43714,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43724.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__43725))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__43714,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43724.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__43725))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__43714,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__43714),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__43714){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__43714,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.pprint/compiled-directive");
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
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__43718){
var extmap__18551__auto__ = (function (){var G__43727 = cljs.core.dissoc.call(null,G__43718,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__43718)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43727);
} else {
return G__43727;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__43718),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__43718),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__43718),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__43718),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__43729,navigator){
var vec__43730 = p__43729;
var param = cljs.core.nth.call(null,vec__43730,(0),null);
var vec__43733 = cljs.core.nth.call(null,vec__43730,(1),null);
var raw_val = cljs.core.nth.call(null,vec__43733,(0),null);
var offset = cljs.core.nth.call(null,vec__43733,(1),null);
var vec__43736 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__43736,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__43736,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__43739 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__43739,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__43739,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__17816__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
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
var vec__43742 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__43742,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__43742,(1),null);
var base_output = (function (){var or__17816__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
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
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__43745_SHARP_){
if((p1__43745_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__43745_SHARP_,base),cljs.core.quot.call(null,p1__43745_SHARP_,base)], null);
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
return (function (p1__43746_SHARP_){
if((p1__43746_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__43746_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__43746_SHARP_ - (10))));
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
var vec__43748 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__43748,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__43748,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_43751 = (arg < (0));
var pos_arg_43752 = ((neg_43751)?(- arg):arg);
var raw_str_43753 = cljs.pprint.opt_base_str.call(null,base,pos_arg_43752);
var group_str_43754 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_43751,pos_arg_43752,raw_str_43753,vec__43748,arg,arg_navigator__$1){
return (function (p1__43747_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__43747_SHARP_);
});})(neg_43751,pos_arg_43752,raw_str_43753,vec__43748,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_43753));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_43753);
var signed_str_43755 = ((neg_43751)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_43754)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_43754)].join(''):group_str_43754
));
var padded_str_43756 = (((signed_str_43755.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_43755.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_43755)].join(''):signed_str_43755);
cljs.pprint.print.call(null,padded_str_43756);
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
var G__43757 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__43758 = (pos - (1));
var G__43759 = cljs.core.first.call(null,remainder);
var G__43760 = cljs.core.next.call(null,remainder);
acc = G__43757;
pos = G__43758;
this$ = G__43759;
remainder = G__43760;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__43761 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43761,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43761,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_43764 = (((arg < (0)))?(- arg):arg);
var parts_43765 = cljs.pprint.remainders.call(null,(1000),abs_arg_43764);
if((cljs.core.count.call(null,parts_43765) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_43766 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_43765);
var full_str_43767 = cljs.pprint.add_english_scales.call(null,parts_strs_43766,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_43767].join(''));
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
var vec__43768 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43768,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43768,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_43771 = (((arg < (0)))?(- arg):arg);
var parts_43772 = cljs.pprint.remainders.call(null,(1000),abs_arg_43771);
if((cljs.core.count.call(null,parts_43772) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_43773 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_43772));
var head_str_43774 = cljs.pprint.add_english_scales.call(null,parts_strs_43773,(1));
var tail_str_43775 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_43772));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_43774)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_43775))))))?[head_str_43774,", ",tail_str_43775].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_43774))))?[head_str_43774,"th"].join(''):tail_str_43775
))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_43776 = cljs.core.rem.call(null,arg,(100));
var not_teens_43777 = ((((11) < low_two_digits_43776)) || (((19) > low_two_digits_43776)));
var low_digit_43778 = cljs.core.rem.call(null,low_two_digits_43776,(10));
cljs.pprint.print.call(null,(((((low_digit_43778 === (1))) && (not_teens_43777)))?"st":(((((low_digit_43778 === (2))) && (not_teens_43777)))?"nd":(((((low_digit_43778 === (3))) && (not_teens_43777)))?"rd":"th"
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
var vec__43779 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43779,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43779,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_43782 = cljs.pprint.remainders.call(null,(10),arg);
var acc_43783 = cljs.core.PersistentVector.EMPTY;
var pos_43784 = (cljs.core.count.call(null,digits_43782) - (1));
var digits_43785__$1 = digits_43782;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_43785__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_43783));
} else {
var digit_43786 = cljs.core.first.call(null,digits_43785__$1);
var G__43787 = ((cljs.core._EQ_.call(null,(0),digit_43786))?acc_43783:cljs.core.conj.call(null,acc_43783,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_43784),(digit_43786 - (1)))));
var G__43788 = (pos_43784 - (1));
var G__43789 = cljs.core.next.call(null,digits_43785__$1);
acc_43783 = G__43787;
pos_43784 = G__43788;
digits_43785__$1 = G__43789;
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
var vec__43790 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__43790,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43790,(1),null);
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
var vec__43793 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__43793,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43793,(1),null);
var pred__43796_43799 = cljs.core._EQ_;
var expr__43797_43800 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__43796_43799.call(null,"o",expr__43797_43800))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__43796_43799.call(null,"u",expr__43797_43800))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__43796_43799.call(null,null,expr__43797_43800))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43797_43800)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__43801 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__43801,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43801,(1),null);
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
var vec__43804 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__43804,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__43804,(1),null);
var vec__43807 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__43807,(0),null);
var offsets = cljs.core.nth.call(null,vec__43807,(1),null);
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
var vec__43810 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__43810,(0),null);
var e = cljs.core.nth.call(null,vec__43810,(1),null);
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
var G__43813 = (i - (1));
i = G__43813;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__17816__auto__ = d;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__18174__auto__ = (2);
var y__18175__auto__ = w;
return ((x__18174__auto__ > y__18175__auto__) ? x__18174__auto__ : y__18175__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__18174__auto__ = (e + (1));
var y__18175__auto__ = (w__$1 - (1));
return ((x__18174__auto__ > y__18175__auto__) ? x__18174__auto__ : y__18175__auto__);
})():(w__$1 + e)
));
var vec__43814 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__43814,(0),null);
var e1 = cljs.core.nth.call(null,vec__43814,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__43814,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__43814,(3),null);
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
var vec__43817 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__43817,(0),null);
var e1 = cljs.core.nth.call(null,vec__43817,(1),null);
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
var vec__43820 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43820,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43820,(1),null);
var vec__43823 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__43823,(0),null);
var abs = cljs.core.nth.call(null,vec__43823,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__43826 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__43826,(0),null);
var exp = cljs.core.nth.call(null,vec__43826,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__17816__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
var vec__43829 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__43829,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__43829,(1),null);
var expanded = cljs.core.nth.call(null,vec__43829,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__17801__auto__ = w;
if(cljs.core.truth_(and__17801__auto__)){
var and__17801__auto____$1 = d;
if(cljs.core.truth_(and__17801__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_43832 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_43833 = (cljs.core.truth_(add_sign)?(len_43832 + (1)):len_43832);
var prepend_zero_43834__$1 = ((prepend_zero) && ((!((signed_len_43833 >= w)))));
var append_zero_43835__$1 = ((append_zero) && ((!((signed_len_43833 >= w)))));
var full_len_43836 = ((((prepend_zero_43834__$1) || (append_zero_43835__$1)))?(signed_len_43833 + (1)):signed_len_43833);
if(cljs.core.truth_((function (){var and__17801__auto__ = (full_len_43836 > w);
if(and__17801__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17801__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_43836),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_43834__$1)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero_43835__$1)?"0":null)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero)?"0":null)].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__43837 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43837,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43837,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__43843_43853 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__43844_43854 = G__43843_43853;
var mantissa_43855 = cljs.core.nth.call(null,vec__43844_43854,(0),null);
var exp_43856 = cljs.core.nth.call(null,vec__43844_43854,(1),null);
var G__43843_43857__$1 = G__43843_43853;
while(true){
var vec__43847_43858 = G__43843_43857__$1;
var mantissa_43859__$1 = cljs.core.nth.call(null,vec__43847_43858,(0),null);
var exp_43860__$1 = cljs.core.nth.call(null,vec__43847_43858,(1),null);
var w_43861 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_43862 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_43863 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_43864 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_43865 = (function (){var or__17816__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return "E";
}
})();
var add_sign_43866 = (function (){var or__17816__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_43867 = (k_43864 <= (0));
var scaled_exp_43868 = (exp_43860__$1 - (k_43864 - (1)));
var scaled_exp_str_43869 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_43868));
var scaled_exp_str_43870__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_43865),(((scaled_exp_43868 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_43863)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_43863 - cljs.core.count.call(null,scaled_exp_str_43869)),"0")):null)),scaled_exp_str_43869].join('');
var exp_width_43871 = cljs.core.count.call(null,scaled_exp_str_43870__$1);
var base_mantissa_width_43872 = cljs.core.count.call(null,mantissa_43859__$1);
var scaled_mantissa_43873 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_43864),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_43859__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_43862)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_43862 - (base_mantissa_width_43872 - (1))) - (((k_43864 < (0)))?(- k_43864):(0))),"0")):null))].join('');
var w_mantissa_43874 = (cljs.core.truth_(w_43861)?(w_43861 - exp_width_43871):null);
var vec__43850_43875 = cljs.pprint.round_str.call(null,scaled_mantissa_43873,(0),((cljs.core._EQ_.call(null,k_43864,(0)))?(d_43862 - (1)):(((k_43864 > (0)))?d_43862:(((k_43864 < (0)))?(d_43862 - (1)):null))),(cljs.core.truth_(w_mantissa_43874)?(w_mantissa_43874 - (cljs.core.truth_(add_sign_43866)?(1):(0))):null));
var rounded_mantissa_43876 = cljs.core.nth.call(null,vec__43850_43875,(0),null);
var __43877 = cljs.core.nth.call(null,vec__43850_43875,(1),null);
var incr_exp_43878 = cljs.core.nth.call(null,vec__43850_43875,(2),null);
var full_mantissa_43879 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_43876,k_43864);
var append_zero_43880 = ((cljs.core._EQ_.call(null,k_43864,cljs.core.count.call(null,rounded_mantissa_43876))) && ((d_43862 == null)));
if(cljs.core.not.call(null,incr_exp_43878)){
if(cljs.core.truth_(w_43861)){
var len_43881 = (cljs.core.count.call(null,full_mantissa_43879) + exp_width_43871);
var signed_len_43882 = (cljs.core.truth_(add_sign_43866)?(len_43881 + (1)):len_43881);
var prepend_zero_43883__$1 = ((prepend_zero_43867) && ((!(cljs.core._EQ_.call(null,signed_len_43882,w_43861)))));
var full_len_43884 = ((prepend_zero_43883__$1)?(signed_len_43882 + (1)):signed_len_43882);
var append_zero_43885__$1 = ((append_zero_43880) && ((full_len_43884 < w_43861)));
if(cljs.core.truth_((function (){var and__17801__auto__ = (function (){var or__17816__auto__ = (full_len_43884 > w_43861);
if(or__17816__auto__){
return or__17816__auto__;
} else {
var and__17801__auto__ = e_43863;
if(cljs.core.truth_(and__17801__auto__)){
return ((exp_width_43871 - (2)) > e_43863);
} else {
return and__17801__auto__;
}
}
})();
if(cljs.core.truth_(and__17801__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17801__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_43861,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_43861 - full_len_43884) - ((append_zero_43885__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_43866)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_43883__$1)?"0":null),full_mantissa_43879,((append_zero_43885__$1)?"0":null),scaled_exp_str_43870__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_43866)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_43867)?"0":null),full_mantissa_43879,((append_zero_43880)?"0":null),scaled_exp_str_43870__$1].join(''));
}
} else {
var G__43886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_43876,(exp_43860__$1 + (1))], null);
G__43843_43857__$1 = G__43886;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__43887 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43887,(0),null);
var _ = cljs.core.nth.call(null,vec__43887,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__43890 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__43890,(0),null);
var exp = cljs.core.nth.call(null,vec__43890,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__18174__auto__ = cljs.core.count.call(null,mantissa);
var y__18175__auto__ = (function (){var x__18181__auto__ = n;
var y__18182__auto__ = (7);
return ((x__18181__auto__ < y__18182__auto__) ? x__18181__auto__ : y__18182__auto__);
})();
return ((x__18174__auto__ > y__18175__auto__) ? x__18174__auto__ : y__18175__auto__);
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
var vec__43893 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__43893,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43893,(1),null);
var vec__43896 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__43896,(0),null);
var exp = cljs.core.nth.call(null,vec__43896,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__17816__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (arg < (0));
}
})();
var vec__43899 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__43899,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__43899,(1),null);
var expanded = cljs.core.nth.call(null,vec__43899,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[(cljs.core.truth_((function (){var and__17801__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__17801__auto__)){
return add_sign;
} else {
return and__17801__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_((function (){var and__17801__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__17801__auto__){
return add_sign;
} else {
return and__17801__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),full_repr].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__43902 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__43902,(0),null);
var navigator = cljs.core.nth.call(null,vec__43902,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__43905 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__43905,(0),null);
var navigator = cljs.core.nth.call(null,vec__43905,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__43908 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__43908,(0),null);
var navigator = cljs.core.nth.call(null,vec__43908,(1),null);
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
var vec__43911 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__43911,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43911,(1),null);
var vec__43914 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__43914,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__43914,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__17816__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__17816__auto__){
return or__17816__auto__;
} else {
var and__17801__auto__ = max_count;
if(cljs.core.truth_(and__17801__auto__)){
return (count >= max_count);
} else {
return and__17801__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__43917 = (count + (1));
var G__43918 = iter_result;
var G__43919 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__43917;
args__$1 = G__43918;
last_pos = G__43919;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__43920 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__43920,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43920,(1),null);
var vec__43923 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__43923,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__43923,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__17816__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__17816__auto__){
return or__17816__auto__;
} else {
var and__17801__auto__ = max_count;
if(cljs.core.truth_(and__17801__auto__)){
return (count >= max_count);
} else {
return and__17801__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__43926 = (count + (1));
var G__43927 = cljs.core.next.call(null,arg_list__$1);
count = G__43926;
arg_list__$1 = G__43927;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__43928 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__43928,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43928,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__17816__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__17816__auto__){
return or__17816__auto__;
} else {
var and__17801__auto__ = max_count;
if(cljs.core.truth_(and__17801__auto__)){
return (count >= max_count);
} else {
return and__17801__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__43931 = (count + (1));
var G__43932 = iter_result;
var G__43933 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__43931;
navigator__$2 = G__43932;
last_pos = G__43933;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__43934 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__43934,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__43934,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__17816__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__17816__auto__){
return or__17816__auto__;
} else {
var and__17801__auto__ = max_count;
if(cljs.core.truth_(and__17801__auto__)){
return (count >= max_count);
} else {
return and__17801__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__43940 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__43940,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__43940,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__43943 = (count + (1));
var G__43944 = navigator__$3;
count = G__43943;
navigator__$2 = G__43944;
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
var vec__43950 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__43953 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__43954 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__43954;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43953;
}})();
var iter_result = cljs.core.nth.call(null,vec__43950,(0),null);
var result_str = cljs.core.nth.call(null,vec__43950,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__43955 = cljs.core.next.call(null,clauses__$1);
var G__43956 = cljs.core.conj.call(null,acc,result_str);
var G__43957 = iter_result;
clauses__$1 = G__43955;
acc = G__43956;
navigator__$1 = G__43957;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__43958 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var else$ = temp__5720__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__43961 = cljs.core.nth.call(null,vec__43958,(0),null);
var eol_str = cljs.core.nth.call(null,vec__43961,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__43958,(1),null);
var navigator__$1 = (function (){var or__17816__auto__ = new_navigator;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return navigator;
}
})();
var vec__43964 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var p = temp__5720__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__43964,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__43964,(1),null);
var navigator__$2 = (function (){var or__17816__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__17816__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__17816__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__43967 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__43967,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__43967,(1),null);
var slots = (function (){var x__18174__auto__ = (1);
var y__18175__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__18174__auto__ > y__18175__auto__) ? x__18174__auto__ : y__18175__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__18174__auto__ = minpad;
var y__18175__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__18174__auto__ > y__18175__auto__) ? x__18174__auto__ : y__18175__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__17801__auto__ = eol_str;
if(cljs.core.truth_(and__17801__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__17801__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_43970__$1 = slots;
var extra_pad_43971__$1 = extra_pad;
var strs_43972__$1 = strs;
var pad_only_43973 = (function (){var or__17816__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_43972__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_43972__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_43973))?cljs.core.first.call(null,strs_43972__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__17816__auto__ = pad_only_43973;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
var or__17816__auto____$1 = cljs.core.next.call(null,strs_43972__$1);
if(or__17816__auto____$1){
return or__17816__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_43971__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__43974 = (slots_43970__$1 - (1));
var G__43975 = (extra_pad_43971__$1 - (1));
var G__43976 = (cljs.core.truth_(pad_only_43973)?strs_43972__$1:cljs.core.next.call(null,strs_43972__$1));
var G__43977 = false;
slots_43970__$1 = G__43974;
extra_pad_43971__$1 = G__43975;
strs_43972__$1 = G__43976;
pad_only_43973 = G__43977;
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43978 = (function (writer,meta43979){
this.writer = writer;
this.meta43979 = meta43979;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43980,meta43979__$1){
var self__ = this;
var _43980__$1 = this;
return (new cljs.pprint.t_cljs$pprint43978(self__.writer,meta43979__$1));
});

cljs.pprint.t_cljs$pprint43978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43980){
var self__ = this;
var _43980__$1 = this;
return self__.meta43979;
});

cljs.pprint.t_cljs$pprint43978.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint43978.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43981 = cljs.core._EQ_;
var expr__43982 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43981.call(null,String,expr__43982))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__43981.call(null,Number,expr__43982))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43982)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint43978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta43979","meta43979",775548909,null)], null);
});

cljs.pprint.t_cljs$pprint43978.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43978.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43978";

cljs.pprint.t_cljs$pprint43978.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.pprint/t_cljs$pprint43978");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43978.
 */
cljs.pprint.__GT_t_cljs$pprint43978 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint43978(writer__$1,meta43979){
return (new cljs.pprint.t_cljs$pprint43978(writer__$1,meta43979));
});

}

return (new cljs.pprint.t_cljs$pprint43978(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43984 = (function (writer,meta43985){
this.writer = writer;
this.meta43985 = meta43985;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43986,meta43985__$1){
var self__ = this;
var _43986__$1 = this;
return (new cljs.pprint.t_cljs$pprint43984(self__.writer,meta43985__$1));
});

cljs.pprint.t_cljs$pprint43984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43986){
var self__ = this;
var _43986__$1 = this;
return self__.meta43985;
});

cljs.pprint.t_cljs$pprint43984.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint43984.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43987 = cljs.core._EQ_;
var expr__43988 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43987.call(null,String,expr__43988))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__43987.call(null,Number,expr__43988))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43988)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint43984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta43985","meta43985",-221784260,null)], null);
});

cljs.pprint.t_cljs$pprint43984.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43984.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43984";

cljs.pprint.t_cljs$pprint43984.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.pprint/t_cljs$pprint43984");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43984.
 */
cljs.pprint.__GT_t_cljs$pprint43984 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint43984(writer__$1,meta43985){
return (new cljs.pprint.t_cljs$pprint43984(writer__$1,meta43985));
});

}

return (new cljs.pprint.t_cljs$pprint43984(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__17801__auto__ = first_QMARK_;
if(cljs.core.truth_(and__17801__auto__)){
var and__17801__auto____$1 = f;
if(cljs.core.truth_(and__17801__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__17801__auto__ = m;
if(cljs.core.truth_(and__17801__auto__)){
return (m.index + (1));
} else {
return and__17801__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43990 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43990 = (function (writer,last_was_whitespace_QMARK_,meta43991){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta43991 = meta43991;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_43992,meta43991__$1){
var self__ = this;
var _43992__$1 = this;
return (new cljs.pprint.t_cljs$pprint43990(self__.writer,self__.last_was_whitespace_QMARK_,meta43991__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_43992){
var self__ = this;
var _43992__$1 = this;
return self__.meta43991;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43990.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43990.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43993 = cljs.core._EQ_;
var expr__43994 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43993.call(null,String,expr__43994))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__43993.call(null,Number,expr__43994))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43994)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43990.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta43991","meta43991",653196306,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint43990.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43990.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43990";

cljs.pprint.t_cljs$pprint43990.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.pprint/t_cljs$pprint43990");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43990.
 */
cljs.pprint.__GT_t_cljs$pprint43990 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint43990(writer__$1,last_was_whitespace_QMARK___$1,meta43991){
return (new cljs.pprint.t_cljs$pprint43990(writer__$1,last_was_whitespace_QMARK___$1,meta43991));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint43990(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43996 = (function (writer,capped,meta43997){
this.writer = writer;
this.capped = capped;
this.meta43997 = meta43997;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint43996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_43998,meta43997__$1){
var self__ = this;
var _43998__$1 = this;
return (new cljs.pprint.t_cljs$pprint43996(self__.writer,self__.capped,meta43997__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint43996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_43998){
var self__ = this;
var _43998__$1 = this;
return self__.meta43997;
});})(capped))
;

cljs.pprint.t_cljs$pprint43996.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint43996.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43999 = cljs.core._EQ_;
var expr__44000 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__43999.call(null,String,expr__44000))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__17801__auto__ = m;
if(cljs.core.truth_(and__17801__auto__)){
return m.index;
} else {
return and__17801__auto__;
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
if(cljs.core.truth_(pred__43999.call(null,Number,expr__44000))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__17801__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__17801__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__17801__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44000)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint43996.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta43997","meta43997",-469103934,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint43996.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint43996.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43996";

cljs.pprint.t_cljs$pprint43996.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.pprint/t_cljs$pprint43996");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43996.
 */
cljs.pprint.__GT_t_cljs$pprint43996 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint43996(writer__$1,capped__$1,meta43997){
return (new cljs.pprint.t_cljs$pprint43996(writer__$1,capped__$1,meta43997));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint43996(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__44002 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__44003 = make_writer.call(null,cljs.core._STAR_out_STAR_);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__44003;

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__44002;
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
var colnum_44005 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_44006 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_44007 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_44008 = (((current_44007 < colnum_44005))?(colnum_44005 - current_44007):((cljs.core._EQ_.call(null,colinc_44006,(0)))?(0):(colinc_44006 - cljs.core.rem.call(null,(current_44007 - colnum_44005),colinc_44006))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_44008," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_44009 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_44010 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_44011 = (colrel_44009 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_44012 = (((colinc_44010 > (0)))?cljs.core.rem.call(null,start_col_44011,colinc_44010):(0));
var space_count_44013 = (colrel_44009 + ((cljs.core._EQ_.call(null,(0),offset_44012))?(0):(colinc_44010 - offset_44012)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_44013," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__44014 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__44014,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44014,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44017_44021 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44018_44022 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44019_44023 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44020_44024 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44019_44023;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44020_44024;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44018_44022;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44017_44021;
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
return (function (p1__44025_SHARP_,p2__44026_SHARP_,p3__44027_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__44025_SHARP_,p2__44026_SHARP_,p3__44027_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44028_SHARP_,p2__44029_SHARP_,p3__44030_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__44028_SHARP_,p2__44029_SHARP_,p3__44030_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44031_SHARP_,p2__44032_SHARP_,p3__44033_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__44031_SHARP_,p2__44032_SHARP_,p3__44033_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44034_SHARP_,p2__44035_SHARP_,p3__44036_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__44034_SHARP_,p2__44035_SHARP_,p3__44036_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44037_SHARP_,p2__44038_SHARP_,p3__44039_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__44037_SHARP_,p2__44038_SHARP_,p3__44039_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__44040_SHARP_,p2__44041_SHARP_,p3__44042_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__44040_SHARP_,p2__44041_SHARP_,p3__44042_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__44043_SHARP_,p2__44044_SHARP_,p3__44045_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__44043_SHARP_),p1__44043_SHARP_,p2__44044_SHARP_,p3__44045_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__17801__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__17801__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17801__auto__;
}
})())){
return (function (p1__44046_SHARP_,p2__44047_SHARP_,p3__44048_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__44046_SHARP_,p2__44047_SHARP_,p3__44048_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__44049_SHARP_,p2__44050_SHARP_,p3__44051_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__44049_SHARP_,p2__44050_SHARP_,p3__44051_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__44052_SHARP_,p2__44053_SHARP_,p3__44054_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__44052_SHARP_,p2__44053_SHARP_,p3__44054_SHARP_);
});
} else {
return (function (p1__44055_SHARP_,p2__44056_SHARP_,p3__44057_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__44055_SHARP_,p2__44056_SHARP_,p3__44057_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__44067 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__44067,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__44067,(1),null);
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
var n__18884__auto___44085 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_44086 = (0);
while(true){
if((i_44086 < n__18884__auto___44085)){
cljs.pprint.prn.call(null);

var G__44087 = (i_44086 + (1));
i_44086 = G__44087;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_44088 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_44088 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__18884__auto___44089 = (cnt_44088 - (1));
var i_44090 = (0);
while(true){
if((i_44090 < n__18884__auto___44089)){
cljs.pprint.prn.call(null);

var G__44091 = (i_44090 + (1));
i_44090 = G__44091;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__18884__auto___44092 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_44093 = (0);
while(true){
if((i_44093 < n__18884__auto___44092)){
cljs.pprint.print.call(null,"\f");

var G__44094 = (i_44093 + (1));
i_44093 = G__44094;
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
return (function (p1__44058_SHARP_,p2__44059_SHARP_,p3__44060_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__44058_SHARP_,p2__44059_SHARP_,p3__44060_SHARP_);
});
} else {
return (function (p1__44061_SHARP_,p2__44062_SHARP_,p3__44063_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__44061_SHARP_,p2__44062_SHARP_,p3__44063_SHARP_);
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
var vec__44070 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__44070,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44070,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__44073 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__44073,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44073,(1),null);
var vec__44076 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__44076,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__44076,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__17801__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__17801__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17801__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__44064_SHARP_,p2__44065_SHARP_,p3__44066_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__44064_SHARP_,p2__44065_SHARP_,p3__44066_SHARP_);
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
if(cljs.core.truth_((function (){var and__17801__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__17801__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__17801__auto__;
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
if(cljs.core.truth_((function (){var and__17801__auto__ = arg1;
if(cljs.core.truth_(and__17801__auto__)){
var and__17801__auto____$1 = arg2;
if(cljs.core.truth_(and__17801__auto____$1)){
return arg3;
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__17801__auto__ = arg1;
if(cljs.core.truth_(and__17801__auto__)){
return arg2;
} else {
return and__17801__auto__;
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
if(cljs.core.truth_((function (){var or__17816__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__44079 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__44079,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44079,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__44082 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__44082,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__44082,(1),null);
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
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__44095){
var vec__44096 = p__44095;
var s = cljs.core.nth.call(null,vec__44096,(0),null);
var offset = cljs.core.nth.call(null,vec__44096,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__44096,(2),null);
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
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__44099){
var vec__44100 = p__44099;
var p = cljs.core.nth.call(null,vec__44100,(0),null);
var offset = cljs.core.nth.call(null,vec__44100,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__44103){
var vec__44104 = p__44103;
var s__$1 = cljs.core.nth.call(null,vec__44104,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__44104,(1),null);
var flags = cljs.core.nth.call(null,vec__44104,(2),null);
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
if(cljs.core.truth_((function (){var and__17801__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__17801__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__17801__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__17801__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__17801__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__17801__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__17801__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__17801__auto__){
var and__17801__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__17801__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__18181__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__18182__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__18181__auto__ < y__18182__auto__) ? x__18181__auto__ : y__18182__auto__);
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

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__44107_SHARP_,p2__44108_SHARP_){
var val = cljs.core.first.call(null,p1__44107_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__44108_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__44108_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__44107_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__18724__auto__ = (function cljs$pprint$map_params_$_iter__44112(s__44113){
return (new cljs.core.LazySeq(null,(function (){
var s__44113__$1 = s__44113;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__44113__$1);
if(temp__5720__auto__){
var s__44113__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44113__$2)){
var c__18722__auto__ = cljs.core.chunk_first.call(null,s__44113__$2);
var size__18723__auto__ = cljs.core.count.call(null,c__18722__auto__);
var b__44115 = cljs.core.chunk_buffer.call(null,size__18723__auto__);
if((function (){var i__44114 = (0);
while(true){
if((i__44114 < size__18723__auto__)){
var vec__44116 = cljs.core._nth.call(null,c__18722__auto__,i__44114);
var name = cljs.core.nth.call(null,vec__44116,(0),null);
var vec__44119 = cljs.core.nth.call(null,vec__44116,(1),null);
var default$ = cljs.core.nth.call(null,vec__44119,(0),null);
cljs.core.chunk_append.call(null,b__44115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__44128 = (i__44114 + (1));
i__44114 = G__44128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44115),cljs$pprint$map_params_$_iter__44112.call(null,cljs.core.chunk_rest.call(null,s__44113__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44115),null);
}
} else {
var vec__44122 = cljs.core.first.call(null,s__44113__$2);
var name = cljs.core.nth.call(null,vec__44122,(0),null);
var vec__44125 = cljs.core.nth.call(null,vec__44122,(1),null);
var default$ = cljs.core.nth.call(null,vec__44125,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__44112.call(null,cljs.core.rest.call(null,s__44113__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18724__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__44109_SHARP_,p2__44110_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__44109_SHARP_,p2__44110_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__44111_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__44111_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__44129 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__44129,(0),null);
var vec__44132 = cljs.core.nth.call(null,vec__44129,(1),null);
var rest = cljs.core.nth.call(null,vec__44132,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__44132,(1),null);
var vec__44135 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__44135,(0),null);
var vec__44138 = cljs.core.nth.call(null,vec__44135,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__44138,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__44138,(1),null);
var flags = cljs.core.nth.call(null,vec__44138,(2),null);
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
var and__17801__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__17801__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__17801__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__44141 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__44141,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__44141,(1),null);
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
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__44144){
var vec__44145 = p__44144;
var clause_map = cljs.core.nth.call(null,vec__44145,(0),null);
var saw_else = cljs.core.nth.call(null,vec__44145,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__44145,(2),null);
var vec__44148 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__44148,(0),null);
var vec__44151 = cljs.core.nth.call(null,vec__44148,(1),null);
var type = cljs.core.nth.call(null,vec__44151,(0),null);
var right_params = cljs.core.nth.call(null,vec__44151,(1),null);
var else_params = cljs.core.nth.call(null,vec__44151,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__44151,(3),null);
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
var _STAR_format_str_STAR__orig_val__44154 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__44155 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__44155;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR__orig_val__44154,_STAR_format_str_STAR__temp_val__44155){
return (function (p__44156){
var vec__44157 = p__44156;
var s = cljs.core.nth.call(null,vec__44157,(0),null);
var offset = cljs.core.nth.call(null,vec__44157,(1),null);
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
});})(_STAR_format_str_STAR__orig_val__44154,_STAR_format_str_STAR__temp_val__44155))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__44154;
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
if(cljs.core.truth_((function (){var or__17816__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
var or__17816__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__17816__auto____$1)){
return or__17816__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__44160 = cljs.core.next.call(null,format__$1);
format__$1 = G__44160;
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
var G__44162 = arguments.length;
switch (G__44162) {
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
var _STAR_out_STAR__orig_val__44163 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__44164 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__44164;

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
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__44163;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__44165 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__44165,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__44165,(1),null);
var vec__44168 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__44168,(0),null);
var offsets = cljs.core.nth.call(null,vec__44168,(1),null);
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
if(cljs.core.truth_((function (){var and__17801__auto__ = macro_char;
if(cljs.core.truth_(and__17801__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__17801__auto__;
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
var _STAR_current_level_STAR__orig_val__44172_44177 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44173_44178 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44174_44179 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44175_44180 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44174_44179;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44175_44180;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count44176_44181 = (0);
var alis_44182__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44176_44181 < cljs.core._STAR_print_length_STAR_)))){
if(alis_44182__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_44182__$1));

if(cljs.core.next.call(null,alis_44182__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44183 = (length_count44176_44181 + (1));
var G__44184 = cljs.core.next.call(null,alis_44182__$1);
length_count44176_44181 = G__44183;
alis_44182__$1 = G__44184;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44173_44178;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44172_44177;
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
var _STAR_current_level_STAR__orig_val__44185_44190 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44186_44191 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44187_44192 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44188_44193 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44187_44192;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44188_44193;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count44189_44194 = (0);
var aseq_44195 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44189_44194 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_44195){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_44195));

if(cljs.core.next.call(null,aseq_44195)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44196 = (length_count44189_44194 + (1));
var G__44197 = cljs.core.next.call(null,aseq_44195);
length_count44189_44194 = G__44196;
aseq_44195 = G__44197;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44186_44191;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44185_44190;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__39925__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44198__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44198 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44199__i = 0, G__44199__a = new Array(arguments.length -  0);
while (G__44199__i < G__44199__a.length) {G__44199__a[G__44199__i] = arguments[G__44199__i + 0]; ++G__44199__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44199__a,0,null);
} 
return G__44198__delegate.call(this,args__39927__auto__);};
G__44198.cljs$lang$maxFixedArity = 0;
G__44198.cljs$lang$applyTo = (function (arglist__44200){
var args__39927__auto__ = cljs.core.seq(arglist__44200);
return G__44198__delegate(args__39927__auto__);
});
G__44198.cljs$core$IFn$_invoke$arity$variadic = G__44198__delegate;
return G__44198;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__44201 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10277,10277,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__44201,(0),null);
var lift_map = cljs.core.nth.call(null,vec__44201,(1),null);
var amap__$1 = (function (){var or__17816__auto__ = lift_map;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44204_44213 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44205_44214 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44206_44215 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44207_44216 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44206_44215;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44207_44216;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count44208_44217 = (0);
var aseq_44218 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44208_44217 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_44218){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44209_44219 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44210_44220 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44211_44221 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44212_44222 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44211_44221;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44212_44222;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_44218));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_44218)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44210_44220;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44209_44219;
}}


if(cljs.core.next.call(null,aseq_44218)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44223 = (length_count44208_44217 + (1));
var G__44224 = cljs.core.next.call(null,aseq_44218);
length_count44208_44217 = G__44223;
aseq_44218 = G__44224;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44205_44214;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44204_44213;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__39925__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44225__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44225 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44226__i = 0, G__44226__a = new Array(arguments.length -  0);
while (G__44226__i < G__44226__a.length) {G__44226__a[G__44226__i] = arguments[G__44226__i + 0]; ++G__44226__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44226__a,0,null);
} 
return G__44225__delegate.call(this,args__39927__auto__);};
G__44225.cljs$lang$maxFixedArity = 0;
G__44225.cljs$lang$applyTo = (function (arglist__44227){
var args__39927__auto__ = cljs.core.seq(arglist__44227);
return G__44225__delegate(args__39927__auto__);
});
G__44225.cljs$core$IFn$_invoke$arity$variadic = G__44225__delegate;
return G__44225;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__17816__auto__ = (function (){var temp__5720__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5720__auto__)){
var match = temp__5720__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44228_44234 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44229_44235 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44230_44236 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44231_44237 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44230_44236;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44231_44237;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__17801__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__17801__auto__){
return (!(cljs.core._realized_QMARK_.call(null,o)));
} else {
return and__17801__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44229_44235;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44228_44234;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__39925__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44238__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44238 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44239__i = 0, G__44239__a = new Array(arguments.length -  0);
while (G__44239__i < G__44239__a.length) {G__44239__a[G__44239__i] = arguments[G__44239__i + 0]; ++G__44239__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44239__a,0,null);
} 
return G__44238__delegate.call(this,args__39927__auto__);};
G__44238.cljs$lang$maxFixedArity = 0;
G__44238.cljs$lang$applyTo = (function (arglist__44240){
var args__39927__auto__ = cljs.core.seq(arglist__44240);
return G__44238__delegate(args__39927__auto__);
});
G__44238.cljs$core$IFn$_invoke$arity$variadic = G__44238__delegate;
return G__44238;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
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
cljs.pprint.simple_dispatch = (function (){var method_table__18894__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18895__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18896__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18897__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18898__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18898__auto__,method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__));
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
var vec__44242 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__44242,(0),null);
var end = cljs.core.nth.call(null,vec__44242,(1),null);
var vec__44245 = reference;
var seq__44246 = cljs.core.seq.call(null,vec__44245);
var first__44247 = cljs.core.first.call(null,seq__44246);
var seq__44246__$1 = cljs.core.next.call(null,seq__44246);
var keyw = first__44247;
var args = seq__44246__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44248_44262 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44249_44263 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44250_44264 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44251_44265 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44250_44264;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44251_44265;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__39925__auto__ = "~w~:i";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args){
return (function() { 
var G__44266__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44266 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44267__i = 0, G__44267__a = new Array(arguments.length -  0);
while (G__44267__i < G__44267__a.length) {G__44267__a[G__44267__i] = arguments[G__44267__i + 0]; ++G__44267__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44267__a,0,null);
} 
return G__44266__delegate.call(this,args__39927__auto__);};
G__44266.cljs$lang$maxFixedArity = 0;
G__44266.cljs$lang$applyTo = (function (arglist__44268){
var args__39927__auto__ = cljs.core.seq(arglist__44268);
return G__44266__delegate(args__39927__auto__);
});
G__44266.cljs$core$IFn$_invoke$arity$variadic = G__44266__delegate;
return G__44266;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args))
})().call(null,keyw);

var args_44269__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_44269__$1)){
(function (){var format_in__39925__auto__ = " ";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (args_44269__$1,format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args){
return (function() { 
var G__44270__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44270 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44271__i = 0, G__44271__a = new Array(arguments.length -  0);
while (G__44271__i < G__44271__a.length) {G__44271__a[G__44271__i] = arguments[G__44271__i + 0]; ++G__44271__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44271__a,0,null);
} 
return G__44270__delegate.call(this,args__39927__auto__);};
G__44270.cljs$lang$maxFixedArity = 0;
G__44270.cljs$lang$applyTo = (function (arglist__44272){
var args__39927__auto__ = cljs.core.seq(arglist__44272);
return G__44270__delegate(args__39927__auto__);
});
G__44270.cljs$core$IFn$_invoke$arity$variadic = G__44270__delegate;
return G__44270;
})()
;
;})(args_44269__$1,format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args))
})().call(null);

var arg_44273 = cljs.core.first.call(null,args_44269__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_44273)){
var vec__44252_44274 = cljs.pprint.brackets.call(null,arg_44273);
var start_44275__$1 = cljs.core.nth.call(null,vec__44252_44274,(0),null);
var end_44276__$1 = cljs.core.nth.call(null,vec__44252_44274,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44255_44277 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44256_44278 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44257_44279 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44258_44280 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44257_44279;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44258_44280;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_44275__$1,null,end_44276__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_44273),(3))) && ((cljs.core.second.call(null,arg_44273) instanceof cljs.core.Keyword)))){
var vec__44259_44281 = arg_44273;
var ns_44282 = cljs.core.nth.call(null,vec__44259_44281,(0),null);
var kw_44283 = cljs.core.nth.call(null,vec__44259_44281,(1),null);
var lis_44284 = cljs.core.nth.call(null,vec__44259_44281,(2),null);
(function (){var format_in__39925__auto__ = "~w ~w ";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (args_44269__$1,format_in__39925__auto__,cf__39926__auto__,vec__44259_44281,ns_44282,kw_44283,lis_44284,_STAR_current_level_STAR__orig_val__44255_44277,_STAR_current_length_STAR__orig_val__44256_44278,_STAR_current_level_STAR__temp_val__44257_44279,_STAR_current_length_STAR__temp_val__44258_44280,vec__44252_44274,start_44275__$1,end_44276__$1,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args){
return (function() { 
var G__44285__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44285 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44286__i = 0, G__44286__a = new Array(arguments.length -  0);
while (G__44286__i < G__44286__a.length) {G__44286__a[G__44286__i] = arguments[G__44286__i + 0]; ++G__44286__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44286__a,0,null);
} 
return G__44285__delegate.call(this,args__39927__auto__);};
G__44285.cljs$lang$maxFixedArity = 0;
G__44285.cljs$lang$applyTo = (function (arglist__44287){
var args__39927__auto__ = cljs.core.seq(arglist__44287);
return G__44285__delegate(args__39927__auto__);
});
G__44285.cljs$core$IFn$_invoke$arity$variadic = G__44285__delegate;
return G__44285;
})()
;
;})(args_44269__$1,format_in__39925__auto__,cf__39926__auto__,vec__44259_44281,ns_44282,kw_44283,lis_44284,_STAR_current_level_STAR__orig_val__44255_44277,_STAR_current_length_STAR__orig_val__44256_44278,_STAR_current_level_STAR__temp_val__44257_44279,_STAR_current_length_STAR__temp_val__44258_44280,vec__44252_44274,start_44275__$1,end_44276__$1,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args))
})().call(null,ns_44282,kw_44283);

if(cljs.core.sequential_QMARK_.call(null,lis_44284)){
(function (){var format_in__39925__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_44284))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (args_44269__$1,format_in__39925__auto__,cf__39926__auto__,vec__44259_44281,ns_44282,kw_44283,lis_44284,_STAR_current_level_STAR__orig_val__44255_44277,_STAR_current_length_STAR__orig_val__44256_44278,_STAR_current_level_STAR__temp_val__44257_44279,_STAR_current_length_STAR__temp_val__44258_44280,vec__44252_44274,start_44275__$1,end_44276__$1,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args){
return (function() { 
var G__44288__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44288 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44289__i = 0, G__44289__a = new Array(arguments.length -  0);
while (G__44289__i < G__44289__a.length) {G__44289__a[G__44289__i] = arguments[G__44289__i + 0]; ++G__44289__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44289__a,0,null);
} 
return G__44288__delegate.call(this,args__39927__auto__);};
G__44288.cljs$lang$maxFixedArity = 0;
G__44288.cljs$lang$applyTo = (function (arglist__44290){
var args__39927__auto__ = cljs.core.seq(arglist__44290);
return G__44288__delegate(args__39927__auto__);
});
G__44288.cljs$core$IFn$_invoke$arity$variadic = G__44288__delegate;
return G__44288;
})()
;
;})(args_44269__$1,format_in__39925__auto__,cf__39926__auto__,vec__44259_44281,ns_44282,kw_44283,lis_44284,_STAR_current_level_STAR__orig_val__44255_44277,_STAR_current_length_STAR__orig_val__44256_44278,_STAR_current_level_STAR__temp_val__44257_44279,_STAR_current_length_STAR__temp_val__44258_44280,vec__44252_44274,start_44275__$1,end_44276__$1,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args))
})().call(null,lis_44284);
} else {
cljs.pprint.write_out.call(null,lis_44284);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__39925__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (args_44269__$1,format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44255_44277,_STAR_current_length_STAR__orig_val__44256_44278,_STAR_current_level_STAR__temp_val__44257_44279,_STAR_current_length_STAR__temp_val__44258_44280,vec__44252_44274,start_44275__$1,end_44276__$1,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args){
return (function() { 
var G__44291__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44291 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44292__i = 0, G__44292__a = new Array(arguments.length -  0);
while (G__44292__i < G__44292__a.length) {G__44292__a[G__44292__i] = arguments[G__44292__i + 0]; ++G__44292__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44292__a,0,null);
} 
return G__44291__delegate.call(this,args__39927__auto__);};
G__44291.cljs$lang$maxFixedArity = 0;
G__44291.cljs$lang$applyTo = (function (arglist__44293){
var args__39927__auto__ = cljs.core.seq(arglist__44293);
return G__44291__delegate(args__39927__auto__);
});
G__44291.cljs$core$IFn$_invoke$arity$variadic = G__44291__delegate;
return G__44291;
})()
;
;})(args_44269__$1,format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44255_44277,_STAR_current_length_STAR__orig_val__44256_44278,_STAR_current_level_STAR__temp_val__44257_44279,_STAR_current_length_STAR__temp_val__44258_44280,vec__44252_44274,start_44275__$1,end_44276__$1,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args))
})(),arg_44273);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44256_44278;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44255_44277;
}}


if(cljs.core.next.call(null,args_44269__$1)){
(function (){var format_in__39925__auto__ = "~_";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (args_44269__$1,format_in__39925__auto__,cf__39926__auto__,vec__44252_44274,start_44275__$1,end_44276__$1,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args){
return (function() { 
var G__44294__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44294 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44295__i = 0, G__44295__a = new Array(arguments.length -  0);
while (G__44295__i < G__44295__a.length) {G__44295__a[G__44295__i] = arguments[G__44295__i + 0]; ++G__44295__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44295__a,0,null);
} 
return G__44294__delegate.call(this,args__39927__auto__);};
G__44294.cljs$lang$maxFixedArity = 0;
G__44294.cljs$lang$applyTo = (function (arglist__44296){
var args__39927__auto__ = cljs.core.seq(arglist__44296);
return G__44294__delegate(args__39927__auto__);
});
G__44294.cljs$core$IFn$_invoke$arity$variadic = G__44294__delegate;
return G__44294;
})()
;
;})(args_44269__$1,format_in__39925__auto__,cf__39926__auto__,vec__44252_44274,start_44275__$1,end_44276__$1,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_44273);

if(cljs.core.next.call(null,args_44269__$1)){
(function (){var format_in__39925__auto__ = "~:_";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (args_44269__$1,format_in__39925__auto__,cf__39926__auto__,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args){
return (function() { 
var G__44297__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44297 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44298__i = 0, G__44298__a = new Array(arguments.length -  0);
while (G__44298__i < G__44298__a.length) {G__44298__a[G__44298__i] = arguments[G__44298__i + 0]; ++G__44298__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44298__a,0,null);
} 
return G__44297__delegate.call(this,args__39927__auto__);};
G__44297.cljs$lang$maxFixedArity = 0;
G__44297.cljs$lang$applyTo = (function (arglist__44299){
var args__39927__auto__ = cljs.core.seq(arglist__44299);
return G__44297__delegate(args__39927__auto__);
});
G__44297.cljs$core$IFn$_invoke$arity$variadic = G__44297__delegate;
return G__44297;
})()
;
;})(args_44269__$1,format_in__39925__auto__,cf__39926__auto__,arg_44273,_STAR_current_level_STAR__orig_val__44248_44262,_STAR_current_length_STAR__orig_val__44249_44263,_STAR_current_level_STAR__temp_val__44250_44264,_STAR_current_length_STAR__temp_val__44251_44265,vec__44242,start,end,vec__44245,seq__44246,first__44247,seq__44246__$1,keyw,args))
})().call(null);
} else {
}
}

var G__44300 = cljs.core.next.call(null,args_44269__$1);
args_44269__$1 = G__44300;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44249_44263;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44248_44262;
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
var vec__44301 = alis;
var seq__44302 = cljs.core.seq.call(null,vec__44301);
var first__44303 = cljs.core.first.call(null,seq__44302);
var seq__44302__$1 = cljs.core.next.call(null,seq__44302);
var ns_sym = first__44303;
var first__44303__$1 = cljs.core.first.call(null,seq__44302__$1);
var seq__44302__$2 = cljs.core.next.call(null,seq__44302__$1);
var ns_name = first__44303__$1;
var stuff = seq__44302__$2;
var vec__44304 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__44304,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__44304,(1),null);
var vec__44307 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__44307,(0),null);
var references = cljs.core.nth.call(null,vec__44307,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44310_44314 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44311_44315 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44312_44316 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44313_44317 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44312_44316;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44313_44317;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__39925__auto__ = "~w ~1I~@_~w";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44310_44314,_STAR_current_length_STAR__orig_val__44311_44315,_STAR_current_level_STAR__temp_val__44312_44316,_STAR_current_length_STAR__temp_val__44313_44317,vec__44301,seq__44302,first__44303,seq__44302__$1,ns_sym,first__44303__$1,seq__44302__$2,ns_name,stuff,vec__44304,doc_str,stuff__$1,vec__44307,attr_map,references){
return (function() { 
var G__44318__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44318 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44319__i = 0, G__44319__a = new Array(arguments.length -  0);
while (G__44319__i < G__44319__a.length) {G__44319__a[G__44319__i] = arguments[G__44319__i + 0]; ++G__44319__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44319__a,0,null);
} 
return G__44318__delegate.call(this,args__39927__auto__);};
G__44318.cljs$lang$maxFixedArity = 0;
G__44318.cljs$lang$applyTo = (function (arglist__44320){
var args__39927__auto__ = cljs.core.seq(arglist__44320);
return G__44318__delegate(args__39927__auto__);
});
G__44318.cljs$core$IFn$_invoke$arity$variadic = G__44318__delegate;
return G__44318;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44310_44314,_STAR_current_length_STAR__orig_val__44311_44315,_STAR_current_level_STAR__temp_val__44312_44316,_STAR_current_length_STAR__temp_val__44313_44317,vec__44301,seq__44302,first__44303,seq__44302__$1,ns_sym,first__44303__$1,seq__44302__$2,ns_name,stuff,vec__44304,doc_str,stuff__$1,vec__44307,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__17816__auto__ = doc_str;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
var or__17816__auto____$1 = attr_map;
if(cljs.core.truth_(or__17816__auto____$1)){
return or__17816__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__39925__auto__ = "~@:_";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44310_44314,_STAR_current_length_STAR__orig_val__44311_44315,_STAR_current_level_STAR__temp_val__44312_44316,_STAR_current_length_STAR__temp_val__44313_44317,vec__44301,seq__44302,first__44303,seq__44302__$1,ns_sym,first__44303__$1,seq__44302__$2,ns_name,stuff,vec__44304,doc_str,stuff__$1,vec__44307,attr_map,references){
return (function() { 
var G__44321__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44321 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44322__i = 0, G__44322__a = new Array(arguments.length -  0);
while (G__44322__i < G__44322__a.length) {G__44322__a[G__44322__i] = arguments[G__44322__i + 0]; ++G__44322__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44322__a,0,null);
} 
return G__44321__delegate.call(this,args__39927__auto__);};
G__44321.cljs$lang$maxFixedArity = 0;
G__44321.cljs$lang$applyTo = (function (arglist__44323){
var args__39927__auto__ = cljs.core.seq(arglist__44323);
return G__44321__delegate(args__39927__auto__);
});
G__44321.cljs$core$IFn$_invoke$arity$variadic = G__44321__delegate;
return G__44321;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44310_44314,_STAR_current_length_STAR__orig_val__44311_44315,_STAR_current_level_STAR__temp_val__44312_44316,_STAR_current_length_STAR__temp_val__44313_44317,vec__44301,seq__44302,first__44303,seq__44302__$1,ns_sym,first__44303__$1,seq__44302__$2,ns_name,stuff,vec__44304,doc_str,stuff__$1,vec__44307,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__17816__auto__ = attr_map;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__39925__auto__ = "~w~:[~;~:@_~]";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44310_44314,_STAR_current_length_STAR__orig_val__44311_44315,_STAR_current_level_STAR__temp_val__44312_44316,_STAR_current_length_STAR__temp_val__44313_44317,vec__44301,seq__44302,first__44303,seq__44302__$1,ns_sym,first__44303__$1,seq__44302__$2,ns_name,stuff,vec__44304,doc_str,stuff__$1,vec__44307,attr_map,references){
return (function() { 
var G__44324__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44324 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44325__i = 0, G__44325__a = new Array(arguments.length -  0);
while (G__44325__i < G__44325__a.length) {G__44325__a[G__44325__i] = arguments[G__44325__i + 0]; ++G__44325__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44325__a,0,null);
} 
return G__44324__delegate.call(this,args__39927__auto__);};
G__44324.cljs$lang$maxFixedArity = 0;
G__44324.cljs$lang$applyTo = (function (arglist__44326){
var args__39927__auto__ = cljs.core.seq(arglist__44326);
return G__44324__delegate(args__39927__auto__);
});
G__44324.cljs$core$IFn$_invoke$arity$variadic = G__44324__delegate;
return G__44324;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44310_44314,_STAR_current_length_STAR__orig_val__44311_44315,_STAR_current_level_STAR__temp_val__44312_44316,_STAR_current_length_STAR__temp_val__44313_44317,vec__44301,seq__44302,first__44303,seq__44302__$1,ns_sym,first__44303__$1,seq__44302__$2,ns_name,stuff,vec__44304,doc_str,stuff__$1,vec__44307,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_44327__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_44327__$1));

var temp__5720__auto___44328 = cljs.core.next.call(null,references_44327__$1);
if(temp__5720__auto___44328){
var references_44329__$2 = temp__5720__auto___44328;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44330 = references_44329__$2;
references_44327__$1 = G__44330;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44311_44315;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44310_44314;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__39925__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44331__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44331 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44332__i = 0, G__44332__a = new Array(arguments.length -  0);
while (G__44332__i < G__44332__a.length) {G__44332__a[G__44332__i] = arguments[G__44332__i + 0]; ++G__44332__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44332__a,0,null);
} 
return G__44331__delegate.call(this,args__39927__auto__);};
G__44331.cljs$lang$maxFixedArity = 0;
G__44331.cljs$lang$applyTo = (function (arglist__44333){
var args__39927__auto__ = cljs.core.seq(arglist__44333);
return G__44331__delegate(args__39927__auto__);
});
G__44331.cljs$core$IFn$_invoke$arity$variadic = G__44331__delegate;
return G__44331;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__39925__auto__ = " ~_";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44334__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44334 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44335__i = 0, G__44335__a = new Array(arguments.length -  0);
while (G__44335__i < G__44335__a.length) {G__44335__a[G__44335__i] = arguments[G__44335__i + 0]; ++G__44335__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44335__a,0,null);
} 
return G__44334__delegate.call(this,args__39927__auto__);};
G__44334.cljs$lang$maxFixedArity = 0;
G__44334.cljs$lang$applyTo = (function (arglist__44336){
var args__39927__auto__ = cljs.core.seq(arglist__44336);
return G__44334__delegate(args__39927__auto__);
});
G__44334.cljs$core$IFn$_invoke$arity$variadic = G__44334__delegate;
return G__44334;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
})().call(null);
} else {
(function (){var format_in__39925__auto__ = " ~@_";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44337__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44337 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44338__i = 0, G__44338__a = new Array(arguments.length -  0);
while (G__44338__i < G__44338__a.length) {G__44338__a[G__44338__i] = arguments[G__44338__i + 0]; ++G__44338__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44338__a,0,null);
} 
return G__44337__delegate.call(this,args__39927__auto__);};
G__44337.cljs$lang$maxFixedArity = 0;
G__44337.cljs$lang$applyTo = (function (arglist__44339){
var args__39927__auto__ = cljs.core.seq(arglist__44339);
return G__44337__delegate(args__39927__auto__);
});
G__44337.cljs$core$IFn$_invoke$arity$variadic = G__44337__delegate;
return G__44337;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
})().call(null);
}

return (function (){var format_in__39925__auto__ = "~{~w~^ ~_~}";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44340__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44340 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44341__i = 0, G__44341__a = new Array(arguments.length -  0);
while (G__44341__i < G__44341__a.length) {G__44341__a[G__44341__i] = arguments[G__44341__i + 0]; ++G__44341__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44341__a,0,null);
} 
return G__44340__delegate.call(this,args__39927__auto__);};
G__44340.cljs$lang$maxFixedArity = 0;
G__44340.cljs$lang$applyTo = (function (arglist__44342){
var args__39927__auto__ = cljs.core.seq(arglist__44342);
return G__44340__delegate(args__39927__auto__);
});
G__44340.cljs$core$IFn$_invoke$arity$variadic = G__44340__delegate;
return G__44340;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__39925__auto__ = " ~_~{~w~^ ~_~}";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44343__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44343 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44344__i = 0, G__44344__a = new Array(arguments.length -  0);
while (G__44344__i < G__44344__a.length) {G__44344__a[G__44344__i] = arguments[G__44344__i + 0]; ++G__44344__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44344__a,0,null);
} 
return G__44343__delegate.call(this,args__39927__auto__);};
G__44343.cljs$lang$maxFixedArity = 0;
G__44343.cljs$lang$applyTo = (function (arglist__44345){
var args__39927__auto__ = cljs.core.seq(arglist__44345);
return G__44343__delegate(args__39927__auto__);
});
G__44343.cljs$core$IFn$_invoke$arity$variadic = G__44343__delegate;
return G__44343;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__44346 = alis;
var seq__44347 = cljs.core.seq.call(null,vec__44346);
var first__44348 = cljs.core.first.call(null,seq__44347);
var seq__44347__$1 = cljs.core.next.call(null,seq__44347);
var defn_sym = first__44348;
var first__44348__$1 = cljs.core.first.call(null,seq__44347__$1);
var seq__44347__$2 = cljs.core.next.call(null,seq__44347__$1);
var defn_name = first__44348__$1;
var stuff = seq__44347__$2;
var vec__44349 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__44349,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__44349,(1),null);
var vec__44352 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__44352,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__44352,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44355_44359 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44356_44360 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44357_44361 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44358_44362 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44357_44361;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44358_44362;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__39925__auto__ = "~w ~1I~@_~w";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44355_44359,_STAR_current_length_STAR__orig_val__44356_44360,_STAR_current_level_STAR__temp_val__44357_44361,_STAR_current_length_STAR__temp_val__44358_44362,vec__44346,seq__44347,first__44348,seq__44347__$1,defn_sym,first__44348__$1,seq__44347__$2,defn_name,stuff,vec__44349,doc_str,stuff__$1,vec__44352,attr_map,stuff__$2){
return (function() { 
var G__44363__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44363 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44364__i = 0, G__44364__a = new Array(arguments.length -  0);
while (G__44364__i < G__44364__a.length) {G__44364__a[G__44364__i] = arguments[G__44364__i + 0]; ++G__44364__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44364__a,0,null);
} 
return G__44363__delegate.call(this,args__39927__auto__);};
G__44363.cljs$lang$maxFixedArity = 0;
G__44363.cljs$lang$applyTo = (function (arglist__44365){
var args__39927__auto__ = cljs.core.seq(arglist__44365);
return G__44363__delegate(args__39927__auto__);
});
G__44363.cljs$core$IFn$_invoke$arity$variadic = G__44363__delegate;
return G__44363;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44355_44359,_STAR_current_length_STAR__orig_val__44356_44360,_STAR_current_level_STAR__temp_val__44357_44361,_STAR_current_length_STAR__temp_val__44358_44362,vec__44346,seq__44347,first__44348,seq__44347__$1,defn_sym,first__44348__$1,seq__44347__$2,defn_name,stuff,vec__44349,doc_str,stuff__$1,vec__44352,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__39925__auto__ = " ~_~w";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44355_44359,_STAR_current_length_STAR__orig_val__44356_44360,_STAR_current_level_STAR__temp_val__44357_44361,_STAR_current_length_STAR__temp_val__44358_44362,vec__44346,seq__44347,first__44348,seq__44347__$1,defn_sym,first__44348__$1,seq__44347__$2,defn_name,stuff,vec__44349,doc_str,stuff__$1,vec__44352,attr_map,stuff__$2){
return (function() { 
var G__44366__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44366 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44367__i = 0, G__44367__a = new Array(arguments.length -  0);
while (G__44367__i < G__44367__a.length) {G__44367__a[G__44367__i] = arguments[G__44367__i + 0]; ++G__44367__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44367__a,0,null);
} 
return G__44366__delegate.call(this,args__39927__auto__);};
G__44366.cljs$lang$maxFixedArity = 0;
G__44366.cljs$lang$applyTo = (function (arglist__44368){
var args__39927__auto__ = cljs.core.seq(arglist__44368);
return G__44366__delegate(args__39927__auto__);
});
G__44366.cljs$core$IFn$_invoke$arity$variadic = G__44366__delegate;
return G__44366;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44355_44359,_STAR_current_length_STAR__orig_val__44356_44360,_STAR_current_level_STAR__temp_val__44357_44361,_STAR_current_length_STAR__temp_val__44358_44362,vec__44346,seq__44347,first__44348,seq__44347__$1,defn_sym,first__44348__$1,seq__44347__$2,defn_name,stuff,vec__44349,doc_str,stuff__$1,vec__44352,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__39925__auto__ = " ~_~w";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44355_44359,_STAR_current_length_STAR__orig_val__44356_44360,_STAR_current_level_STAR__temp_val__44357_44361,_STAR_current_length_STAR__temp_val__44358_44362,vec__44346,seq__44347,first__44348,seq__44347__$1,defn_sym,first__44348__$1,seq__44347__$2,defn_name,stuff,vec__44349,doc_str,stuff__$1,vec__44352,attr_map,stuff__$2){
return (function() { 
var G__44369__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44369 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44370__i = 0, G__44370__a = new Array(arguments.length -  0);
while (G__44370__i < G__44370__a.length) {G__44370__a[G__44370__i] = arguments[G__44370__i + 0]; ++G__44370__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44370__a,0,null);
} 
return G__44369__delegate.call(this,args__39927__auto__);};
G__44369.cljs$lang$maxFixedArity = 0;
G__44369.cljs$lang$applyTo = (function (arglist__44371){
var args__39927__auto__ = cljs.core.seq(arglist__44371);
return G__44369__delegate(args__39927__auto__);
});
G__44369.cljs$core$IFn$_invoke$arity$variadic = G__44369__delegate;
return G__44369;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44355_44359,_STAR_current_length_STAR__orig_val__44356_44360,_STAR_current_level_STAR__temp_val__44357_44361,_STAR_current_length_STAR__temp_val__44358_44362,vec__44346,seq__44347,first__44348,seq__44347__$1,defn_sym,first__44348__$1,seq__44347__$2,defn_name,stuff,vec__44349,doc_str,stuff__$1,vec__44352,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__17816__auto__ = doc_str;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__17816__auto__ = doc_str;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44356_44360;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44355_44359;
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
var _STAR_current_level_STAR__orig_val__44372_44381 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44373_44382 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44374_44383 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44375_44384 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44374_44383;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44375_44384;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count44376_44385 = (0);
var binding_44386 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44376_44385 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_44386)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44377_44387 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44378_44388 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44379_44389 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44380_44390 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44379_44389;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44380_44390;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_44386));

if(cljs.core.next.call(null,binding_44386)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_44386));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44378_44388;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44377_44387;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_44386))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44391 = (length_count44376_44385 + (1));
var G__44392 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_44386));
length_count44376_44385 = G__44391;
binding_44386 = G__44392;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44373_44382;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44372_44381;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44393_44397 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44394_44398 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44395_44399 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44396_44400 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44395_44399;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44396_44400;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
(function (){var format_in__39925__auto__ = "~w ~1I~@_";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44393_44397,_STAR_current_length_STAR__orig_val__44394_44398,_STAR_current_level_STAR__temp_val__44395_44399,_STAR_current_length_STAR__temp_val__44396_44400,base_sym){
return (function() { 
var G__44401__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44401 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44402__i = 0, G__44402__a = new Array(arguments.length -  0);
while (G__44402__i < G__44402__a.length) {G__44402__a[G__44402__i] = arguments[G__44402__i + 0]; ++G__44402__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44402__a,0,null);
} 
return G__44401__delegate.call(this,args__39927__auto__);};
G__44401.cljs$lang$maxFixedArity = 0;
G__44401.cljs$lang$applyTo = (function (arglist__44403){
var args__39927__auto__ = cljs.core.seq(arglist__44403);
return G__44401__delegate(args__39927__auto__);
});
G__44401.cljs$core$IFn$_invoke$arity$variadic = G__44401__delegate;
return G__44401;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44393_44397,_STAR_current_length_STAR__orig_val__44394_44398,_STAR_current_level_STAR__temp_val__44395_44399,_STAR_current_length_STAR__temp_val__44396_44400,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__39925__auto__ = " ~_~{~w~^ ~_~}";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44393_44397,_STAR_current_length_STAR__orig_val__44394_44398,_STAR_current_level_STAR__temp_val__44395_44399,_STAR_current_length_STAR__temp_val__44396_44400,base_sym){
return (function() { 
var G__44404__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44404 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44405__i = 0, G__44405__a = new Array(arguments.length -  0);
while (G__44405__i < G__44405__a.length) {G__44405__a[G__44405__i] = arguments[G__44405__i + 0]; ++G__44405__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44405__a,0,null);
} 
return G__44404__delegate.call(this,args__39927__auto__);};
G__44404.cljs$lang$maxFixedArity = 0;
G__44404.cljs$lang$applyTo = (function (arglist__44406){
var args__39927__auto__ = cljs.core.seq(arglist__44406);
return G__44404__delegate(args__39927__auto__);
});
G__44404.cljs$core$IFn$_invoke$arity$variadic = G__44404__delegate;
return G__44404;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44393_44397,_STAR_current_length_STAR__orig_val__44394_44398,_STAR_current_level_STAR__temp_val__44395_44399,_STAR_current_length_STAR__temp_val__44396_44400,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44394_44398;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44393_44397;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__39925__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__){
return (function() { 
var G__44407__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44407 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44408__i = 0, G__44408__a = new Array(arguments.length -  0);
while (G__44408__i < G__44408__a.length) {G__44408__a[G__44408__i] = arguments[G__44408__i + 0]; ++G__44408__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44408__a,0,null);
} 
return G__44407__delegate.call(this,args__39927__auto__);};
G__44407.cljs$lang$maxFixedArity = 0;
G__44407.cljs$lang$applyTo = (function (arglist__44409){
var args__39927__auto__ = cljs.core.seq(arglist__44409);
return G__44407__delegate(args__39927__auto__);
});
G__44407.cljs$core$IFn$_invoke$arity$variadic = G__44407__delegate;
return G__44407;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44410_44419 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44411_44420 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44412_44421 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44413_44422 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44412_44421;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44413_44422;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count44414_44423 = (0);
var alis_44424__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44414_44423 < cljs.core._STAR_print_length_STAR_)))){
if(alis_44424__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44415_44425 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44416_44426 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44417_44427 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44418_44428 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44417_44427;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44418_44428;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_44424__$1));

if(cljs.core.next.call(null,alis_44424__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_44424__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44416_44426;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44415_44425;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_44424__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44429 = (length_count44414_44423 + (1));
var G__44430 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_44424__$1));
length_count44414_44423 = G__44429;
alis_44424__$1 = G__44430;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44411_44420;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44410_44419;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44431_44440 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44432_44441 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44433_44442 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44434_44443 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44433_44442;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44434_44443;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__39925__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44431_44440,_STAR_current_length_STAR__orig_val__44432_44441,_STAR_current_level_STAR__temp_val__44433_44442,_STAR_current_length_STAR__temp_val__44434_44443){
return (function() { 
var G__44444__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44444 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44445__i = 0, G__44445__a = new Array(arguments.length -  0);
while (G__44445__i < G__44445__a.length) {G__44445__a[G__44445__i] = arguments[G__44445__i + 0]; ++G__44445__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44445__a,0,null);
} 
return G__44444__delegate.call(this,args__39927__auto__);};
G__44444.cljs$lang$maxFixedArity = 0;
G__44444.cljs$lang$applyTo = (function (arglist__44446){
var args__39927__auto__ = cljs.core.seq(arglist__44446);
return G__44444__delegate(args__39927__auto__);
});
G__44444.cljs$core$IFn$_invoke$arity$variadic = G__44444__delegate;
return G__44444;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_current_level_STAR__orig_val__44431_44440,_STAR_current_length_STAR__orig_val__44432_44441,_STAR_current_level_STAR__temp_val__44433_44442,_STAR_current_length_STAR__temp_val__44434_44443))
})(),alis);

var length_count44435_44447 = (0);
var alis_44448__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44435_44447 < cljs.core._STAR_print_length_STAR_)))){
if(alis_44448__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44436_44449 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44437_44450 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44438_44451 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44439_44452 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44438_44451;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44439_44452;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_44448__$1));

if(cljs.core.next.call(null,alis_44448__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_44448__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44437_44450;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44436_44449;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_44448__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44453 = (length_count44435_44447 + (1));
var G__44454 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_44448__$1));
length_count44435_44447 = G__44453;
alis_44448__$1 = G__44454;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44432_44441;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44431_44440;
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
var _STAR_symbol_map_STAR__orig_val__44457 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__44458 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR__orig_val__44457,args,nlis){
return (function (p1__44455_SHARP_,p2__44456_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__44455_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44456_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__44457,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__44458;

try{return (function (){var format_in__39925__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__39926__auto__ = ((typeof format_in__39925__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__39925__auto__):format_in__39925__auto__);
return ((function (format_in__39925__auto__,cf__39926__auto__,_STAR_symbol_map_STAR__orig_val__44457,_STAR_symbol_map_STAR__temp_val__44458,args,nlis){
return (function() { 
var G__44459__delegate = function (args__39927__auto__){
var navigator__39928__auto__ = cljs.pprint.init_navigator.call(null,args__39927__auto__);
return cljs.pprint.execute_format.call(null,cf__39926__auto__,navigator__39928__auto__);
};
var G__44459 = function (var_args){
var args__39927__auto__ = null;
if (arguments.length > 0) {
var G__44460__i = 0, G__44460__a = new Array(arguments.length -  0);
while (G__44460__i < G__44460__a.length) {G__44460__a[G__44460__i] = arguments[G__44460__i + 0]; ++G__44460__i;}
  args__39927__auto__ = new cljs.core.IndexedSeq(G__44460__a,0,null);
} 
return G__44459__delegate.call(this,args__39927__auto__);};
G__44459.cljs$lang$maxFixedArity = 0;
G__44459.cljs$lang$applyTo = (function (arglist__44461){
var args__39927__auto__ = cljs.core.seq(arglist__44461);
return G__44459__delegate(args__39927__auto__);
});
G__44459.cljs$core$IFn$_invoke$arity$variadic = G__44459__delegate;
return G__44459;
})()
;
;})(format_in__39925__auto__,cf__39926__auto__,_STAR_symbol_map_STAR__orig_val__44457,_STAR_symbol_map_STAR__temp_val__44458,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__44457;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__44462_44467 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__44463_44468 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__44464_44469 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__44465_44470 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__44464_44469;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__44465_44470;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count44466_44471 = (0);
var alis_44472__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count44466_44471 < cljs.core._STAR_print_length_STAR_)))){
if(alis_44472__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_44472__$1));

if(cljs.core.next.call(null,alis_44472__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__44473 = (length_count44466_44471 + (1));
var G__44474 = cljs.core.next.call(null,alis_44472__$1);
length_count44466_44471 = G__44473;
alis_44472__$1 = G__44474;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__44463_44468;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__44462_44467;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__18724__auto__ = (function cljs$pprint$two_forms_$_iter__44475(s__44476){
return (new cljs.core.LazySeq(null,(function (){
var s__44476__$1 = s__44476;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__44476__$1);
if(temp__5720__auto__){
var s__44476__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44476__$2)){
var c__18722__auto__ = cljs.core.chunk_first.call(null,s__44476__$2);
var size__18723__auto__ = cljs.core.count.call(null,c__18722__auto__);
var b__44478 = cljs.core.chunk_buffer.call(null,size__18723__auto__);
if((function (){var i__44477 = (0);
while(true){
if((i__44477 < size__18723__auto__)){
var x = cljs.core._nth.call(null,c__18722__auto__,i__44477);
cljs.core.chunk_append.call(null,b__44478,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__44479 = (i__44477 + (1));
i__44477 = G__44479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44478),cljs$pprint$two_forms_$_iter__44475.call(null,cljs.core.chunk_rest.call(null,s__44476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44478),null);
}
} else {
var x = cljs.core.first.call(null,s__44476__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__44475.call(null,cljs.core.rest.call(null,s__44476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18724__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__44480_SHARP_){
var vec__44481 = p1__44480_SHARP_;
var s = cljs.core.nth.call(null,vec__44481,(0),null);
var f = cljs.core.nth.call(null,vec__44481,(1),null);
if(cljs.core.not.call(null,(function (){var or__17816__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__44480_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5718__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5718__auto__)){
var special_form = temp__5718__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5718__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5718__auto__)){
var arg_num = temp__5718__auto__;
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
cljs.pprint.code_dispatch = (function (){var method_table__18894__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18895__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18896__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18897__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18898__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18898__auto__,method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__));
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
var padding = (function (){var x__18174__auto__ = (0);
var y__18175__auto__ = (width - cljs.core.count.call(null,s));
return ((x__18174__auto__ > y__18175__auto__) ? x__18174__auto__ : y__18175__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__44488 = arguments.length;
switch (G__44488) {
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
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.call(null,(function (p1__44484_SHARP_){
return cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__44484_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,((function (widths){
return (function (p1__44485_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__44485_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__18724__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__44499(s__44500){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__44500__$1 = s__44500;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__44500__$1);
if(temp__5720__auto__){
var s__44500__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44500__$2)){
var c__18722__auto__ = cljs.core.chunk_first.call(null,s__44500__$2);
var size__18723__auto__ = cljs.core.count.call(null,c__18722__auto__);
var b__44502 = cljs.core.chunk_buffer.call(null,size__18723__auto__);
if((function (){var i__44501 = (0);
while(true){
if((i__44501 < size__18723__auto__)){
var vec__44503 = cljs.core._nth.call(null,c__18722__auto__,i__44501);
var col = cljs.core.nth.call(null,vec__44503,(0),null);
var width = cljs.core.nth.call(null,vec__44503,(1),null);
cljs.core.chunk_append.call(null,b__44502,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__44514 = (i__44501 + (1));
i__44501 = G__44514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44502),cljs$pprint$iter__44499.call(null,cljs.core.chunk_rest.call(null,s__44500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44502),null);
}
} else {
var vec__44506 = cljs.core.first.call(null,s__44500__$2);
var col = cljs.core.nth.call(null,vec__44506,(0),null);
var width = cljs.core.nth.call(null,vec__44506,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__44499.call(null,cljs.core.rest.call(null,s__44500__$2)));
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
return iter__18724__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__18724__auto__,widths,spacers){
return (function (p1__44486_SHARP_){
return cljs.core.get.call(null,row,p1__44486_SHARP_);
});})(iter__18724__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__44509 = cljs.core.seq.call(null,rows);
var chunk__44510 = null;
var count__44511 = (0);
var i__44512 = (0);
while(true){
if((i__44512 < count__44511)){
var row = cljs.core._nth.call(null,chunk__44510,i__44512);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__44515 = seq__44509;
var G__44516 = chunk__44510;
var G__44517 = count__44511;
var G__44518 = (i__44512 + (1));
seq__44509 = G__44515;
chunk__44510 = G__44516;
count__44511 = G__44517;
i__44512 = G__44518;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44509);
if(temp__5720__auto__){
var seq__44509__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44509__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__44509__$1);
var G__44519 = cljs.core.chunk_rest.call(null,seq__44509__$1);
var G__44520 = c__18773__auto__;
var G__44521 = cljs.core.count.call(null,c__18773__auto__);
var G__44522 = (0);
seq__44509 = G__44519;
chunk__44510 = G__44520;
count__44511 = G__44521;
i__44512 = G__44522;
continue;
} else {
var row = cljs.core.first.call(null,seq__44509__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__44523 = cljs.core.next.call(null,seq__44509__$1);
var G__44524 = null;
var G__44525 = (0);
var G__44526 = (0);
seq__44509 = G__44523;
chunk__44510 = G__44524;
count__44511 = G__44525;
i__44512 = G__44526;
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
