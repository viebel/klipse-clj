// Compiled by ClojureScript 1.10.492 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4607__auto__ = [];
var len__4601__auto___36217 = arguments.length;
var i__4602__auto___36218 = (0);
while(true){
if((i__4602__auto___36218 < len__4601__auto___36217)){
args__4607__auto__.push((arguments[i__4602__auto___36218]));

var G__36219 = (i__4602__auto___36218 + (1));
i__4602__auto___36218 = G__36219;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq36216){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36216));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4607__auto__ = [];
var len__4601__auto___36221 = arguments.length;
var i__4602__auto___36222 = (0);
while(true){
if((i__4602__auto___36222 < len__4601__auto___36221)){
args__4607__auto__.push((arguments[i__4602__auto___36222]));

var G__36223 = (i__4602__auto___36222 + (1));
i__4602__auto___36222 = G__36223;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq36220){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36220));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__36224 = cljs.core._EQ_;
var expr__36225 = c;
if(cljs.core.truth_(pred__36224.call(null,"\b",expr__36225))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__36224.call(null,"\t",expr__36225))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__36224.call(null,"\n",expr__36225))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__36224.call(null,"\f",expr__36225))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__36224.call(null,"\r",expr__36225))){
return "\\return";
} else {
if(cljs.core.truth_(pred__36224.call(null,"\"",expr__36225))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__36224.call(null,"\\",expr__36225))){
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
var args__4607__auto__ = [];
var len__4601__auto___36228 = arguments.length;
var i__4602__auto___36229 = (0);
while(true){
if((i__4602__auto___36229 < len__4601__auto___36228)){
args__4607__auto__.push((arguments[i__4602__auto___36229]));

var G__36230 = (i__4602__auto___36229 + (1));
i__4602__auto___36229 = G__36230;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq36227){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36227));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4607__auto__ = [];
var len__4601__auto___36232 = arguments.length;
var i__4602__auto___36233 = (0);
while(true){
if((i__4602__auto___36233 < len__4601__auto___36232)){
args__4607__auto__.push((arguments[i__4602__auto___36233]));

var G__36234 = (i__4602__auto___36233 + (1));
i__4602__auto___36233 = G__36234;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq36231){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36231));
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
var vec__36238 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__36238,(0),null);
var new_context = cljs.core.nth.call(null,vec__36238,(1),null);
var G__36241 = new_context;
var G__36242 = remainder;
var G__36243 = cljs.core.conj.call(null,acc,result);
context = G__36241;
lis__$1 = G__36242;
acc = G__36243;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__36247 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__36247,(0),null);
var new_context = cljs.core.nth.call(null,vec__36247,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__36250 = new_context;
var G__36251 = cljs.core.conj.call(null,acc,result);
context = G__36250;
acc = G__36251;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__36255 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__36255,(0),null);
var continue$ = cljs.core.nth.call(null,vec__36255,(1),null);
var new_context = cljs.core.nth.call(null,vec__36255,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__36258 = new_context;
var G__36259 = cljs.core.conj.call(null,acc,result);
context = G__36258;
acc = G__36259;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = (function cljs$pprint$unzip_map_$_iter__36260(s__36261){
return (new cljs.core.LazySeq(null,(function (){
var s__36261__$1 = s__36261;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36261__$1);
if(temp__5720__auto__){
var s__36261__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36261__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__36261__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__36263 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__36262 = (0);
while(true){
if((i__36262 < size__4393__auto__)){
var vec__36264 = cljs.core._nth.call(null,c__4392__auto__,i__36262);
var k = cljs.core.nth.call(null,vec__36264,(0),null);
var vec__36267 = cljs.core.nth.call(null,vec__36264,(1),null);
var v1 = cljs.core.nth.call(null,vec__36267,(0),null);
var v2 = cljs.core.nth.call(null,vec__36267,(1),null);
cljs.core.chunk_append.call(null,b__36263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__36292 = (i__36262 + (1));
i__36262 = G__36292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36263),cljs$pprint$unzip_map_$_iter__36260.call(null,cljs.core.chunk_rest.call(null,s__36261__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36263),null);
}
} else {
var vec__36270 = cljs.core.first.call(null,s__36261__$2);
var k = cljs.core.nth.call(null,vec__36270,(0),null);
var vec__36273 = cljs.core.nth.call(null,vec__36270,(1),null);
var v1 = cljs.core.nth.call(null,vec__36273,(0),null);
var v2 = cljs.core.nth.call(null,vec__36273,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__36260.call(null,cljs.core.rest.call(null,s__36261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = (function cljs$pprint$unzip_map_$_iter__36276(s__36277){
return (new cljs.core.LazySeq(null,(function (){
var s__36277__$1 = s__36277;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36277__$1);
if(temp__5720__auto__){
var s__36277__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36277__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__36277__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__36279 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__36278 = (0);
while(true){
if((i__36278 < size__4393__auto__)){
var vec__36280 = cljs.core._nth.call(null,c__4392__auto__,i__36278);
var k = cljs.core.nth.call(null,vec__36280,(0),null);
var vec__36283 = cljs.core.nth.call(null,vec__36280,(1),null);
var v1 = cljs.core.nth.call(null,vec__36283,(0),null);
var v2 = cljs.core.nth.call(null,vec__36283,(1),null);
cljs.core.chunk_append.call(null,b__36279,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__36293 = (i__36278 + (1));
i__36278 = G__36293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36279),cljs$pprint$unzip_map_$_iter__36276.call(null,cljs.core.chunk_rest.call(null,s__36277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36279),null);
}
} else {
var vec__36286 = cljs.core.first.call(null,s__36277__$2);
var k = cljs.core.nth.call(null,vec__36286,(0),null);
var vec__36289 = cljs.core.nth.call(null,vec__36286,(1),null);
var v1 = cljs.core.nth.call(null,vec__36289,(0),null);
var v2 = cljs.core.nth.call(null,vec__36289,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__36276.call(null,cljs.core.rest.call(null,s__36277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = (function cljs$pprint$tuple_map_$_iter__36294(s__36295){
return (new cljs.core.LazySeq(null,(function (){
var s__36295__$1 = s__36295;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36295__$1);
if(temp__5720__auto__){
var s__36295__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36295__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__36295__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__36297 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__36296 = (0);
while(true){
if((i__36296 < size__4393__auto__)){
var vec__36298 = cljs.core._nth.call(null,c__4392__auto__,i__36296);
var k = cljs.core.nth.call(null,vec__36298,(0),null);
var v = cljs.core.nth.call(null,vec__36298,(1),null);
cljs.core.chunk_append.call(null,b__36297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__36304 = (i__36296 + (1));
i__36296 = G__36304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36297),cljs$pprint$tuple_map_$_iter__36294.call(null,cljs.core.chunk_rest.call(null,s__36295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36297),null);
}
} else {
var vec__36301 = cljs.core.first.call(null,s__36295__$2);
var k = cljs.core.nth.call(null,vec__36301,(0),null);
var v = cljs.core.nth.call(null,vec__36301,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__36294.call(null,cljs.core.rest.call(null,s__36295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,m);
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
var G__36305 = (n - (1));
n = G__36305;
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
var G__36306 = (n + (1));
n = G__36306;
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
var G__36307 = (pos + (1));
pos = G__36307;
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
var x__4304__auto__ = (((pp == null))?null:pp);
var m__4305__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,pp);
} else {
var m__4302__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,pp);
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
var G__36310 = arguments.length;
switch (G__36310) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint36311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint36311 = (function (writer,max_columns,fields,meta36312){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta36312 = meta36312;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint36311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_36313,meta36312__$1){
var self__ = this;
var _36313__$1 = this;
return (new cljs.pprint.t_cljs$pprint36311(self__.writer,self__.max_columns,self__.fields,meta36312__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint36311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_36313){
var self__ = this;
var _36313__$1 = this;
return self__.meta36312;
});})(fields))
;

cljs.pprint.t_cljs$pprint36311.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint36311.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint36311.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__36314 = cljs.core._EQ_;
var expr__36315 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__36314.call(null,String,expr__36315))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__36314,expr__36315,this$__$1,fields){
return (function (p1__36308_SHARP_){
return cljs.core._EQ_.call(null,p1__36308_SHARP_,"\n");
});})(s,nl,pred__36314,expr__36315,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__36314.call(null,Number,expr__36315))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36315)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint36311.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta36312","meta36312",1583021152,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint36311.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint36311.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint36311";

cljs.pprint.t_cljs$pprint36311.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.pprint/t_cljs$pprint36311");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint36311.
 */
cljs.pprint.__GT_t_cljs$pprint36311 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint36311(writer__$1,max_columns__$1,fields__$1,meta36312){
return (new cljs.pprint.t_cljs$pprint36311(writer__$1,max_columns__$1,fields__$1,meta36312));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint36311(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4256__auto__,k__4257__auto__){
var self__ = this;
var this__4256__auto____$1 = this;
return this__4256__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4257__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4258__auto__,k36319,else__4259__auto__){
var self__ = this;
var this__4258__auto____$1 = this;
var G__36323 = k36319;
var G__36323__$1 = (((G__36323 instanceof cljs.core.Keyword))?G__36323.fqn:null);
switch (G__36323__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36319,else__4259__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4275__auto__,f__4276__auto__,init__4277__auto__){
var self__ = this;
var this__4275__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4275__auto____$1){
return (function (ret__4278__auto__,p__36324){
var vec__36325 = p__36324;
var k__4279__auto__ = cljs.core.nth.call(null,vec__36325,(0),null);
var v__4280__auto__ = cljs.core.nth.call(null,vec__36325,(1),null);
return f__4276__auto__.call(null,ret__4278__auto__,k__4279__auto__,v__4280__auto__);
});})(this__4275__auto____$1))
,init__4277__auto__,this__4275__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4270__auto__,writer__4271__auto__,opts__4272__auto__){
var self__ = this;
var this__4270__auto____$1 = this;
var pr_pair__4273__auto__ = ((function (this__4270__auto____$1){
return (function (keyval__4274__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,cljs.core.pr_writer,""," ","",opts__4272__auto__,keyval__4274__auto__);
});})(this__4270__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,pr_pair__4273__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4272__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36318){
var self__ = this;
var G__36318__$1 = this;
return (new cljs.core.RecordIter((0),G__36318__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4254__auto__){
var self__ = this;
var this__4254__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4260__auto__){
var self__ = this;
var this__4260__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4252__auto__){
var self__ = this;
var this__4252__auto____$1 = this;
var h__4114__auto__ = self__.__hash;
if((!((h__4114__auto__ == null)))){
return h__4114__auto__;
} else {
var h__4114__auto____$1 = ((function (h__4114__auto__,this__4252__auto____$1){
return (function (coll__4253__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__4253__auto__));
});})(h__4114__auto__,this__4252__auto____$1))
.call(null,this__4252__auto____$1);
self__.__hash = h__4114__auto____$1;

return h__4114__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36320,other36321){
var self__ = this;
var this36320__$1 = this;
return (((!((other36321 == null)))) && ((this36320__$1.constructor === other36321.constructor)) && (cljs.core._EQ_.call(null,this36320__$1.parent,other36321.parent)) && (cljs.core._EQ_.call(null,this36320__$1.section,other36321.section)) && (cljs.core._EQ_.call(null,this36320__$1.start_col,other36321.start_col)) && (cljs.core._EQ_.call(null,this36320__$1.indent,other36321.indent)) && (cljs.core._EQ_.call(null,this36320__$1.done_nl,other36321.done_nl)) && (cljs.core._EQ_.call(null,this36320__$1.intra_block_nl,other36321.intra_block_nl)) && (cljs.core._EQ_.call(null,this36320__$1.prefix,other36321.prefix)) && (cljs.core._EQ_.call(null,this36320__$1.per_line_prefix,other36321.per_line_prefix)) && (cljs.core._EQ_.call(null,this36320__$1.suffix,other36321.suffix)) && (cljs.core._EQ_.call(null,this36320__$1.logical_block_callback,other36321.logical_block_callback)) && (cljs.core._EQ_.call(null,this36320__$1.__extmap,other36321.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4265__auto__,k__4266__auto__){
var self__ = this;
var this__4265__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4266__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4265__auto____$1),self__.__meta),k__4266__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4266__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4263__auto__,k__4264__auto__,G__36318){
var self__ = this;
var this__4263__auto____$1 = this;
var pred__36328 = cljs.core.keyword_identical_QMARK_;
var expr__36329 = k__4264__auto__;
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__36329))){
return (new cljs.pprint.logical_block(G__36318,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,G__36318,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__36318,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__36318,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__36318,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__36318,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__36318,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__36318,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__36318,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36328.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__36329))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__36318,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4264__auto__,G__36318),null));
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

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4268__auto__){
var self__ = this;
var this__4268__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4255__auto__,G__36318){
var self__ = this;
var this__4255__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__36318,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4261__auto__,entry__4262__auto__){
var self__ = this;
var this__4261__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4262__auto__)){
return this__4261__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4262__auto__,(0)),cljs.core._nth.call(null,entry__4262__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4261__auto____$1,entry__4262__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4299__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4299__auto__,writer__4300__auto__){
return cljs.core._write.call(null,writer__4300__auto__,"cljs.pprint/logical-block");
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
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__36322){
var extmap__4295__auto__ = (function (){var G__36331 = cljs.core.dissoc.call(null,G__36322,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__36322)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36331);
} else {
return G__36331;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__36322),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__36322),null,cljs.core.not_empty.call(null,extmap__4295__auto__),null));
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
var G__36333 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__36333;
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
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4256__auto__,k__4257__auto__){
var self__ = this;
var this__4256__auto____$1 = this;
return this__4256__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4257__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4258__auto__,k36335,else__4259__auto__){
var self__ = this;
var this__4258__auto____$1 = this;
var G__36339 = k36335;
var G__36339__$1 = (((G__36339 instanceof cljs.core.Keyword))?G__36339.fqn:null);
switch (G__36339__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36335,else__4259__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4275__auto__,f__4276__auto__,init__4277__auto__){
var self__ = this;
var this__4275__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4275__auto____$1){
return (function (ret__4278__auto__,p__36340){
var vec__36341 = p__36340;
var k__4279__auto__ = cljs.core.nth.call(null,vec__36341,(0),null);
var v__4280__auto__ = cljs.core.nth.call(null,vec__36341,(1),null);
return f__4276__auto__.call(null,ret__4278__auto__,k__4279__auto__,v__4280__auto__);
});})(this__4275__auto____$1))
,init__4277__auto__,this__4275__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4270__auto__,writer__4271__auto__,opts__4272__auto__){
var self__ = this;
var this__4270__auto____$1 = this;
var pr_pair__4273__auto__ = ((function (this__4270__auto____$1){
return (function (keyval__4274__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,cljs.core.pr_writer,""," ","",opts__4272__auto__,keyval__4274__auto__);
});})(this__4270__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,pr_pair__4273__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4272__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36334){
var self__ = this;
var G__36334__$1 = this;
return (new cljs.core.RecordIter((0),G__36334__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4254__auto__){
var self__ = this;
var this__4254__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4260__auto__){
var self__ = this;
var this__4260__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4252__auto__){
var self__ = this;
var this__4252__auto____$1 = this;
var h__4114__auto__ = self__.__hash;
if((!((h__4114__auto__ == null)))){
return h__4114__auto__;
} else {
var h__4114__auto____$1 = ((function (h__4114__auto__,this__4252__auto____$1){
return (function (coll__4253__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__4253__auto__));
});})(h__4114__auto__,this__4252__auto____$1))
.call(null,this__4252__auto____$1);
self__.__hash = h__4114__auto____$1;

return h__4114__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36336,other36337){
var self__ = this;
var this36336__$1 = this;
return (((!((other36337 == null)))) && ((this36336__$1.constructor === other36337.constructor)) && (cljs.core._EQ_.call(null,this36336__$1.type_tag,other36337.type_tag)) && (cljs.core._EQ_.call(null,this36336__$1.data,other36337.data)) && (cljs.core._EQ_.call(null,this36336__$1.trailing_white_space,other36337.trailing_white_space)) && (cljs.core._EQ_.call(null,this36336__$1.start_pos,other36337.start_pos)) && (cljs.core._EQ_.call(null,this36336__$1.end_pos,other36337.end_pos)) && (cljs.core._EQ_.call(null,this36336__$1.__extmap,other36337.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4265__auto__,k__4266__auto__){
var self__ = this;
var this__4265__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4266__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4265__auto____$1),self__.__meta),k__4266__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4266__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4263__auto__,k__4264__auto__,G__36334){
var self__ = this;
var this__4263__auto____$1 = this;
var pred__36344 = cljs.core.keyword_identical_QMARK_;
var expr__36345 = k__4264__auto__;
if(cljs.core.truth_(pred__36344.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__36345))){
return (new cljs.pprint.buffer_blob(G__36334,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36344.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__36345))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__36334,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36344.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__36345))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__36334,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36344.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__36345))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__36334,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36344.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__36345))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__36334,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4264__auto__,G__36334),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4268__auto__){
var self__ = this;
var this__4268__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4255__auto__,G__36334){
var self__ = this;
var this__4255__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__36334,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4261__auto__,entry__4262__auto__){
var self__ = this;
var this__4261__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4262__auto__)){
return this__4261__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4262__auto__,(0)),cljs.core._nth.call(null,entry__4262__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4261__auto____$1,entry__4262__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4299__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4299__auto__,writer__4300__auto__){
return cljs.core._write.call(null,writer__4300__auto__,"cljs.pprint/buffer-blob");
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
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__36338){
var extmap__4295__auto__ = (function (){var G__36347 = cljs.core.dissoc.call(null,G__36338,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__36338)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36347);
} else {
return G__36347;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__36338),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__36338),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__36338),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__36338),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__36338),null,cljs.core.not_empty.call(null,extmap__4295__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__30673__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30673__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
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
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4256__auto__,k__4257__auto__){
var self__ = this;
var this__4256__auto____$1 = this;
return this__4256__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4257__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4258__auto__,k36350,else__4259__auto__){
var self__ = this;
var this__4258__auto____$1 = this;
var G__36354 = k36350;
var G__36354__$1 = (((G__36354 instanceof cljs.core.Keyword))?G__36354.fqn:null);
switch (G__36354__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36350,else__4259__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4275__auto__,f__4276__auto__,init__4277__auto__){
var self__ = this;
var this__4275__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4275__auto____$1){
return (function (ret__4278__auto__,p__36355){
var vec__36356 = p__36355;
var k__4279__auto__ = cljs.core.nth.call(null,vec__36356,(0),null);
var v__4280__auto__ = cljs.core.nth.call(null,vec__36356,(1),null);
return f__4276__auto__.call(null,ret__4278__auto__,k__4279__auto__,v__4280__auto__);
});})(this__4275__auto____$1))
,init__4277__auto__,this__4275__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4270__auto__,writer__4271__auto__,opts__4272__auto__){
var self__ = this;
var this__4270__auto____$1 = this;
var pr_pair__4273__auto__ = ((function (this__4270__auto____$1){
return (function (keyval__4274__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,cljs.core.pr_writer,""," ","",opts__4272__auto__,keyval__4274__auto__);
});})(this__4270__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,pr_pair__4273__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4272__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36349){
var self__ = this;
var G__36349__$1 = this;
return (new cljs.core.RecordIter((0),G__36349__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4254__auto__){
var self__ = this;
var this__4254__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4260__auto__){
var self__ = this;
var this__4260__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4252__auto__){
var self__ = this;
var this__4252__auto____$1 = this;
var h__4114__auto__ = self__.__hash;
if((!((h__4114__auto__ == null)))){
return h__4114__auto__;
} else {
var h__4114__auto____$1 = ((function (h__4114__auto__,this__4252__auto____$1){
return (function (coll__4253__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__4253__auto__));
});})(h__4114__auto__,this__4252__auto____$1))
.call(null,this__4252__auto____$1);
self__.__hash = h__4114__auto____$1;

return h__4114__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36351,other36352){
var self__ = this;
var this36351__$1 = this;
return (((!((other36352 == null)))) && ((this36351__$1.constructor === other36352.constructor)) && (cljs.core._EQ_.call(null,this36351__$1.type_tag,other36352.type_tag)) && (cljs.core._EQ_.call(null,this36351__$1.type,other36352.type)) && (cljs.core._EQ_.call(null,this36351__$1.logical_block,other36352.logical_block)) && (cljs.core._EQ_.call(null,this36351__$1.start_pos,other36352.start_pos)) && (cljs.core._EQ_.call(null,this36351__$1.end_pos,other36352.end_pos)) && (cljs.core._EQ_.call(null,this36351__$1.__extmap,other36352.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4265__auto__,k__4266__auto__){
var self__ = this;
var this__4265__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4266__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4265__auto____$1),self__.__meta),k__4266__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4266__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4263__auto__,k__4264__auto__,G__36349){
var self__ = this;
var this__4263__auto____$1 = this;
var pred__36359 = cljs.core.keyword_identical_QMARK_;
var expr__36360 = k__4264__auto__;
if(cljs.core.truth_(pred__36359.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__36360))){
return (new cljs.pprint.nl_t(G__36349,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36359.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__36360))){
return (new cljs.pprint.nl_t(self__.type_tag,G__36349,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36359.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__36360))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__36349,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36359.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__36360))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__36349,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36359.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__36360))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__36349,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4264__auto__,G__36349),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4268__auto__){
var self__ = this;
var this__4268__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4255__auto__,G__36349){
var self__ = this;
var this__4255__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__36349,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4261__auto__,entry__4262__auto__){
var self__ = this;
var this__4261__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4262__auto__)){
return this__4261__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4262__auto__,(0)),cljs.core._nth.call(null,entry__4262__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4261__auto____$1,entry__4262__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4299__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4299__auto__,writer__4300__auto__){
return cljs.core._write.call(null,writer__4300__auto__,"cljs.pprint/nl-t");
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
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__36353){
var extmap__4295__auto__ = (function (){var G__36362 = cljs.core.dissoc.call(null,G__36353,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__36353)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36362);
} else {
return G__36362;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__36353),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__36353),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__36353),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__36353),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__36353),null,cljs.core.not_empty.call(null,extmap__4295__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__30673__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30673__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
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
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4256__auto__,k__4257__auto__){
var self__ = this;
var this__4256__auto____$1 = this;
return this__4256__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4257__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4258__auto__,k36365,else__4259__auto__){
var self__ = this;
var this__4258__auto____$1 = this;
var G__36369 = k36365;
var G__36369__$1 = (((G__36369 instanceof cljs.core.Keyword))?G__36369.fqn:null);
switch (G__36369__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36365,else__4259__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4275__auto__,f__4276__auto__,init__4277__auto__){
var self__ = this;
var this__4275__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4275__auto____$1){
return (function (ret__4278__auto__,p__36370){
var vec__36371 = p__36370;
var k__4279__auto__ = cljs.core.nth.call(null,vec__36371,(0),null);
var v__4280__auto__ = cljs.core.nth.call(null,vec__36371,(1),null);
return f__4276__auto__.call(null,ret__4278__auto__,k__4279__auto__,v__4280__auto__);
});})(this__4275__auto____$1))
,init__4277__auto__,this__4275__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4270__auto__,writer__4271__auto__,opts__4272__auto__){
var self__ = this;
var this__4270__auto____$1 = this;
var pr_pair__4273__auto__ = ((function (this__4270__auto____$1){
return (function (keyval__4274__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,cljs.core.pr_writer,""," ","",opts__4272__auto__,keyval__4274__auto__);
});})(this__4270__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,pr_pair__4273__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4272__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36364){
var self__ = this;
var G__36364__$1 = this;
return (new cljs.core.RecordIter((0),G__36364__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4254__auto__){
var self__ = this;
var this__4254__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4260__auto__){
var self__ = this;
var this__4260__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4252__auto__){
var self__ = this;
var this__4252__auto____$1 = this;
var h__4114__auto__ = self__.__hash;
if((!((h__4114__auto__ == null)))){
return h__4114__auto__;
} else {
var h__4114__auto____$1 = ((function (h__4114__auto__,this__4252__auto____$1){
return (function (coll__4253__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__4253__auto__));
});})(h__4114__auto__,this__4252__auto____$1))
.call(null,this__4252__auto____$1);
self__.__hash = h__4114__auto____$1;

return h__4114__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36366,other36367){
var self__ = this;
var this36366__$1 = this;
return (((!((other36367 == null)))) && ((this36366__$1.constructor === other36367.constructor)) && (cljs.core._EQ_.call(null,this36366__$1.type_tag,other36367.type_tag)) && (cljs.core._EQ_.call(null,this36366__$1.logical_block,other36367.logical_block)) && (cljs.core._EQ_.call(null,this36366__$1.start_pos,other36367.start_pos)) && (cljs.core._EQ_.call(null,this36366__$1.end_pos,other36367.end_pos)) && (cljs.core._EQ_.call(null,this36366__$1.__extmap,other36367.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4265__auto__,k__4266__auto__){
var self__ = this;
var this__4265__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4266__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4265__auto____$1),self__.__meta),k__4266__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4266__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4263__auto__,k__4264__auto__,G__36364){
var self__ = this;
var this__4263__auto____$1 = this;
var pred__36374 = cljs.core.keyword_identical_QMARK_;
var expr__36375 = k__4264__auto__;
if(cljs.core.truth_(pred__36374.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__36375))){
return (new cljs.pprint.start_block_t(G__36364,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36374.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__36375))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__36364,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36374.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__36375))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__36364,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36374.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__36375))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__36364,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4264__auto__,G__36364),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4268__auto__){
var self__ = this;
var this__4268__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4255__auto__,G__36364){
var self__ = this;
var this__4255__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__36364,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4261__auto__,entry__4262__auto__){
var self__ = this;
var this__4261__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4262__auto__)){
return this__4261__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4262__auto__,(0)),cljs.core._nth.call(null,entry__4262__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4261__auto____$1,entry__4262__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4299__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4299__auto__,writer__4300__auto__){
return cljs.core._write.call(null,writer__4300__auto__,"cljs.pprint/start-block-t");
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
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__36368){
var extmap__4295__auto__ = (function (){var G__36377 = cljs.core.dissoc.call(null,G__36368,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__36368)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36377);
} else {
return G__36377;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__36368),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__36368),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__36368),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__36368),null,cljs.core.not_empty.call(null,extmap__4295__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__30673__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30673__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
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
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4256__auto__,k__4257__auto__){
var self__ = this;
var this__4256__auto____$1 = this;
return this__4256__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4257__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4258__auto__,k36380,else__4259__auto__){
var self__ = this;
var this__4258__auto____$1 = this;
var G__36384 = k36380;
var G__36384__$1 = (((G__36384 instanceof cljs.core.Keyword))?G__36384.fqn:null);
switch (G__36384__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36380,else__4259__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4275__auto__,f__4276__auto__,init__4277__auto__){
var self__ = this;
var this__4275__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4275__auto____$1){
return (function (ret__4278__auto__,p__36385){
var vec__36386 = p__36385;
var k__4279__auto__ = cljs.core.nth.call(null,vec__36386,(0),null);
var v__4280__auto__ = cljs.core.nth.call(null,vec__36386,(1),null);
return f__4276__auto__.call(null,ret__4278__auto__,k__4279__auto__,v__4280__auto__);
});})(this__4275__auto____$1))
,init__4277__auto__,this__4275__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4270__auto__,writer__4271__auto__,opts__4272__auto__){
var self__ = this;
var this__4270__auto____$1 = this;
var pr_pair__4273__auto__ = ((function (this__4270__auto____$1){
return (function (keyval__4274__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,cljs.core.pr_writer,""," ","",opts__4272__auto__,keyval__4274__auto__);
});})(this__4270__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,pr_pair__4273__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4272__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36379){
var self__ = this;
var G__36379__$1 = this;
return (new cljs.core.RecordIter((0),G__36379__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4254__auto__){
var self__ = this;
var this__4254__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4260__auto__){
var self__ = this;
var this__4260__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4252__auto__){
var self__ = this;
var this__4252__auto____$1 = this;
var h__4114__auto__ = self__.__hash;
if((!((h__4114__auto__ == null)))){
return h__4114__auto__;
} else {
var h__4114__auto____$1 = ((function (h__4114__auto__,this__4252__auto____$1){
return (function (coll__4253__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__4253__auto__));
});})(h__4114__auto__,this__4252__auto____$1))
.call(null,this__4252__auto____$1);
self__.__hash = h__4114__auto____$1;

return h__4114__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36381,other36382){
var self__ = this;
var this36381__$1 = this;
return (((!((other36382 == null)))) && ((this36381__$1.constructor === other36382.constructor)) && (cljs.core._EQ_.call(null,this36381__$1.type_tag,other36382.type_tag)) && (cljs.core._EQ_.call(null,this36381__$1.logical_block,other36382.logical_block)) && (cljs.core._EQ_.call(null,this36381__$1.start_pos,other36382.start_pos)) && (cljs.core._EQ_.call(null,this36381__$1.end_pos,other36382.end_pos)) && (cljs.core._EQ_.call(null,this36381__$1.__extmap,other36382.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4265__auto__,k__4266__auto__){
var self__ = this;
var this__4265__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4266__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4265__auto____$1),self__.__meta),k__4266__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4266__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4263__auto__,k__4264__auto__,G__36379){
var self__ = this;
var this__4263__auto____$1 = this;
var pred__36389 = cljs.core.keyword_identical_QMARK_;
var expr__36390 = k__4264__auto__;
if(cljs.core.truth_(pred__36389.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__36390))){
return (new cljs.pprint.end_block_t(G__36379,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36389.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__36390))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__36379,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36389.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__36390))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__36379,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36389.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__36390))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__36379,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4264__auto__,G__36379),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4268__auto__){
var self__ = this;
var this__4268__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4255__auto__,G__36379){
var self__ = this;
var this__4255__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__36379,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4261__auto__,entry__4262__auto__){
var self__ = this;
var this__4261__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4262__auto__)){
return this__4261__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4262__auto__,(0)),cljs.core._nth.call(null,entry__4262__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4261__auto____$1,entry__4262__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4299__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4299__auto__,writer__4300__auto__){
return cljs.core._write.call(null,writer__4300__auto__,"cljs.pprint/end-block-t");
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
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__36383){
var extmap__4295__auto__ = (function (){var G__36392 = cljs.core.dissoc.call(null,G__36383,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__36383)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36392);
} else {
return G__36392;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__36383),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__36383),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__36383),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__36383),null,cljs.core.not_empty.call(null,extmap__4295__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__30673__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30673__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
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
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4256__auto__,k__4257__auto__){
var self__ = this;
var this__4256__auto____$1 = this;
return this__4256__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4257__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4258__auto__,k36395,else__4259__auto__){
var self__ = this;
var this__4258__auto____$1 = this;
var G__36399 = k36395;
var G__36399__$1 = (((G__36399 instanceof cljs.core.Keyword))?G__36399.fqn:null);
switch (G__36399__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36395,else__4259__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4275__auto__,f__4276__auto__,init__4277__auto__){
var self__ = this;
var this__4275__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4275__auto____$1){
return (function (ret__4278__auto__,p__36400){
var vec__36401 = p__36400;
var k__4279__auto__ = cljs.core.nth.call(null,vec__36401,(0),null);
var v__4280__auto__ = cljs.core.nth.call(null,vec__36401,(1),null);
return f__4276__auto__.call(null,ret__4278__auto__,k__4279__auto__,v__4280__auto__);
});})(this__4275__auto____$1))
,init__4277__auto__,this__4275__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4270__auto__,writer__4271__auto__,opts__4272__auto__){
var self__ = this;
var this__4270__auto____$1 = this;
var pr_pair__4273__auto__ = ((function (this__4270__auto____$1){
return (function (keyval__4274__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,cljs.core.pr_writer,""," ","",opts__4272__auto__,keyval__4274__auto__);
});})(this__4270__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,pr_pair__4273__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4272__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36394){
var self__ = this;
var G__36394__$1 = this;
return (new cljs.core.RecordIter((0),G__36394__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4254__auto__){
var self__ = this;
var this__4254__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4260__auto__){
var self__ = this;
var this__4260__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4252__auto__){
var self__ = this;
var this__4252__auto____$1 = this;
var h__4114__auto__ = self__.__hash;
if((!((h__4114__auto__ == null)))){
return h__4114__auto__;
} else {
var h__4114__auto____$1 = ((function (h__4114__auto__,this__4252__auto____$1){
return (function (coll__4253__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__4253__auto__));
});})(h__4114__auto__,this__4252__auto____$1))
.call(null,this__4252__auto____$1);
self__.__hash = h__4114__auto____$1;

return h__4114__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36396,other36397){
var self__ = this;
var this36396__$1 = this;
return (((!((other36397 == null)))) && ((this36396__$1.constructor === other36397.constructor)) && (cljs.core._EQ_.call(null,this36396__$1.type_tag,other36397.type_tag)) && (cljs.core._EQ_.call(null,this36396__$1.logical_block,other36397.logical_block)) && (cljs.core._EQ_.call(null,this36396__$1.relative_to,other36397.relative_to)) && (cljs.core._EQ_.call(null,this36396__$1.offset,other36397.offset)) && (cljs.core._EQ_.call(null,this36396__$1.start_pos,other36397.start_pos)) && (cljs.core._EQ_.call(null,this36396__$1.end_pos,other36397.end_pos)) && (cljs.core._EQ_.call(null,this36396__$1.__extmap,other36397.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4265__auto__,k__4266__auto__){
var self__ = this;
var this__4265__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4266__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4265__auto____$1),self__.__meta),k__4266__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4266__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4263__auto__,k__4264__auto__,G__36394){
var self__ = this;
var this__4263__auto____$1 = this;
var pred__36404 = cljs.core.keyword_identical_QMARK_;
var expr__36405 = k__4264__auto__;
if(cljs.core.truth_(pred__36404.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__36405))){
return (new cljs.pprint.indent_t(G__36394,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36404.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__36405))){
return (new cljs.pprint.indent_t(self__.type_tag,G__36394,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36404.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__36405))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__36394,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36404.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__36405))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__36394,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36404.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__36405))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__36394,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36404.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__36405))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__36394,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4264__auto__,G__36394),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4268__auto__){
var self__ = this;
var this__4268__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4255__auto__,G__36394){
var self__ = this;
var this__4255__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__36394,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4261__auto__,entry__4262__auto__){
var self__ = this;
var this__4261__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4262__auto__)){
return this__4261__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4262__auto__,(0)),cljs.core._nth.call(null,entry__4262__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4261__auto____$1,entry__4262__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4299__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4299__auto__,writer__4300__auto__){
return cljs.core._write.call(null,writer__4300__auto__,"cljs.pprint/indent-t");
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
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__36398){
var extmap__4295__auto__ = (function (){var G__36407 = cljs.core.dissoc.call(null,G__36398,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__36398)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36407);
} else {
return G__36407;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__36398),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__36398),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__36398),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__36398),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__36398),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__36398),null,cljs.core.not_empty.call(null,extmap__4295__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__30673__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30673__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__){
return (function (p1__36410_SHARP_,p2__36409_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__36409_SHARP_);
});})(method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5720__auto___36411 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___36411)){
var cb_36412 = temp__5720__auto___36411;
cb_36412.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5720__auto___36413 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___36413)){
var prefix_36414 = temp__5720__auto___36413;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_36414);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5720__auto___36415 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___36415)){
var cb_36416 = temp__5720__auto___36415;
cb_36416.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
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
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__36417 = cljs.core._EQ_;
var expr__36418 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__36417.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__36418))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__36417.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__36418))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36418)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4002__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4002__auto__){
return or__4002__auto__;
} else {
var and__3991__auto__ = (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))));
if(and__3991__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__3991__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__5718__auto___36420 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___36420)){
var tws_36421 = temp__5718__auto___36420;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_36421);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__36422 = cljs.core.seq.call(null,tokens);
var chunk__36423 = null;
var count__36424 = (0);
var i__36425 = (0);
while(true){
if((i__36425 < count__36424)){
var token = cljs.core._nth.call(null,chunk__36423,i__36425);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___36426 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___36426)){
var tws_36427 = temp__5718__auto___36426;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_36427);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_36428 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__3991__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3991__auto__)){
return tws_36428;
} else {
return and__3991__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_36428);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__36429 = seq__36422;
var G__36430 = chunk__36423;
var G__36431 = count__36424;
var G__36432 = (i__36425 + (1));
seq__36422 = G__36429;
chunk__36423 = G__36430;
count__36424 = G__36431;
i__36425 = G__36432;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36422);
if(temp__5720__auto__){
var seq__36422__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36422__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__36422__$1);
var G__36433 = cljs.core.chunk_rest.call(null,seq__36422__$1);
var G__36434 = c__4421__auto__;
var G__36435 = cljs.core.count.call(null,c__4421__auto__);
var G__36436 = (0);
seq__36422 = G__36433;
chunk__36423 = G__36434;
count__36424 = G__36435;
i__36425 = G__36436;
continue;
} else {
var token = cljs.core.first.call(null,seq__36422__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___36437 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___36437)){
var tws_36438 = temp__5718__auto___36437;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_36438);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_36439 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__3991__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3991__auto__)){
return tws_36439;
} else {
return and__3991__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_36439);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__36440 = cljs.core.next.call(null,seq__36422__$1);
var G__36441 = null;
var G__36442 = (0);
var G__36443 = (0);
seq__36422 = G__36440;
chunk__36423 = G__36441;
count__36424 = G__36442;
i__36425 = G__36443;
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
var or__4002__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__3991__auto__ = miser_width;
if(cljs.core.truth_(and__3991__auto__)){
var and__3991__auto____$1 = maxcol;
if(cljs.core.truth_(and__3991__auto____$1)){
var and__3991__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__3991__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__3991__auto____$2;
}
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
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
var or__4002__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__4002__auto____$1){
return or__4002__auto____$1;
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
return (function (p1__36444_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__36444_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__36444_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__36445_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__36445_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__36445_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
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

var G__36446 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__36446;
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

var istr_36447 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_36447);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__36448_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__36448_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__36449 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__36449,(0),null);
var b = cljs.core.nth.call(null,vec__36449,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__36452 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__36452,(0),null);
var remainder = cljs.core.nth.call(null,vec__36452,(1),null);
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
var G__36455 = new_buffer;
buffer = G__36455;
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
var oldpos_36460 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_36461 = (oldpos_36460 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_36461);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_36460,newpos_36461));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__36456_36462 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__36457_36463 = null;
var count__36458_36464 = (0);
var i__36459_36465 = (0);
while(true){
if((i__36459_36465 < count__36458_36464)){
var l_36466__$1 = cljs.core._nth.call(null,chunk__36457_36463,i__36459_36465);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_36466__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__36467 = seq__36456_36462;
var G__36468 = chunk__36457_36463;
var G__36469 = count__36458_36464;
var G__36470 = (i__36459_36465 + (1));
seq__36456_36462 = G__36467;
chunk__36457_36463 = G__36468;
count__36458_36464 = G__36469;
i__36459_36465 = G__36470;
continue;
} else {
var temp__5720__auto___36471 = cljs.core.seq.call(null,seq__36456_36462);
if(temp__5720__auto___36471){
var seq__36456_36472__$1 = temp__5720__auto___36471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36456_36472__$1)){
var c__4421__auto___36473 = cljs.core.chunk_first.call(null,seq__36456_36472__$1);
var G__36474 = cljs.core.chunk_rest.call(null,seq__36456_36472__$1);
var G__36475 = c__4421__auto___36473;
var G__36476 = cljs.core.count.call(null,c__4421__auto___36473);
var G__36477 = (0);
seq__36456_36462 = G__36474;
chunk__36457_36463 = G__36475;
count__36458_36464 = G__36476;
i__36459_36465 = G__36477;
continue;
} else {
var l_36478__$1 = cljs.core.first.call(null,seq__36456_36472__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_36478__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__36479 = cljs.core.next.call(null,seq__36456_36472__$1);
var G__36480 = null;
var G__36481 = (0);
var G__36482 = (0);
seq__36456_36462 = G__36479;
chunk__36457_36463 = G__36480;
count__36458_36464 = G__36481;
i__36459_36465 = G__36482;
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint36483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint36483 = (function (writer,max_columns,miser_width,lb,fields,meta36484){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta36484 = meta36484;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint36483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_36485,meta36484__$1){
var self__ = this;
var _36485__$1 = this;
return (new cljs.pprint.t_cljs$pprint36483(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta36484__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint36483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_36485){
var self__ = this;
var _36485__$1 = this;
return self__.meta36484;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint36483.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint36483.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__36486 = cljs.core._EQ_;
var expr__36487 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__36486.call(null,String,expr__36487))){
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
if(cljs.core.truth_(pred__36486.call(null,Number,expr__36487))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36487)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint36483.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint36483.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint36483.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
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

cljs.pprint.t_cljs$pprint36483.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta36484","meta36484",-1967574121,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint36483.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint36483.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint36483";

cljs.pprint.t_cljs$pprint36483.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.pprint/t_cljs$pprint36483");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint36483.
 */
cljs.pprint.__GT_t_cljs$pprint36483 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint36483(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta36484){
return (new cljs.pprint.t_cljs$pprint36483(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta36484));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint36483(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__5720__auto___36489 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___36489)){
var cb_36490 = temp__5720__auto___36489;
cb_36490.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
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

var temp__5720__auto___36491 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___36491)){
var cb_36492 = temp__5720__auto___36491;
cb_36492.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_36493 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_36494 = (oldpos_36493 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_36494);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_36493,newpos_36494));
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

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__36495 = cljs.core._EQ_;
var expr__36496 = relative_to;
if(cljs.core.truth_(pred__36495.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__36496))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__36495.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__36496))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36496)].join('')));
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
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__36498_SHARP_){
var temp__5720__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__36498_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__36498_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__3991__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__3991__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__3991__auto__;
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
var length_reached = (function (){var and__3991__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__3991__auto__)){
var and__3991__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__3991__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
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
var args__4607__auto__ = [];
var len__4601__auto___36531 = arguments.length;
var i__4602__auto___36532 = (0);
while(true){
if((i__4602__auto___36532 < len__4601__auto___36531)){
args__4607__auto__.push((arguments[i__4602__auto___36532]));

var G__36533 = (i__4602__auto___36532 + (1));
i__4602__auto___36532 = G__36533;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR__orig_val__36503 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__36504 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__36505 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__36506 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__36507 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__36508 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__36509 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__36510 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__36511 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__36512 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__36513 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__36514 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__36515 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__36516 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__36517 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__36518 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__36519 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__36520 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__36521 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__36522 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__36523 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__36524 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__36525 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__36526 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__36515;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__36516;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__36517;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__36518;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__36519;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__36520;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__36521;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__36522;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__36523;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__36524;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__36525;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__36526;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__30656__auto___36534 = base_writer;
var new_writer__30657__auto___36535 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__30656__auto___36534));
var _STAR_out_STAR__orig_val__36527_36536 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__36528_36537 = ((new_writer__30657__auto___36535)?cljs.pprint.make_pretty_writer.call(null,base_writer__30656__auto___36534,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__30656__auto___36534);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__36528_36537;

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__36527_36536;
}} else {
var _STAR_out_STAR__orig_val__36529_36538 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__36530_36539 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__36530_36539;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__36529_36538;
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
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__36514;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__36513;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__36512;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__36511;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__36510;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__36509;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__36508;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__36507;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__36506;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__36505;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__36504;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__36503;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq36501){
var G__36502 = cljs.core.first.call(null,seq36501);
var seq36501__$1 = cljs.core.next.call(null,seq36501);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36502,seq36501__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__36541 = arguments.length;
switch (G__36541) {
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
var _STAR_out_STAR__orig_val__36542 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__36543 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__36543;

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__36542;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__30656__auto__ = writer;
var new_writer__30657__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__30656__auto__));
var _STAR_out_STAR__orig_val__36544 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__36545 = ((new_writer__30657__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__30656__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__30656__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__36545;

try{var _STAR_print_pretty_STAR__orig_val__36546_36549 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__36547_36550 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__36547_36550;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__36546_36549;
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__36544;
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
var and__3991__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__3991__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__3991__auto__;
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
var args__4607__auto__ = [];
var len__4601__auto___36554 = arguments.length;
var i__4602__auto___36555 = (0);
while(true){
if((i__4602__auto___36555 < len__4601__auto___36554)){
args__4607__auto__.push((arguments[i__4602__auto___36555]));

var G__36556 = (i__4602__auto___36555 + (1));
i__4602__auto___36555 = G__36556;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((2) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4608__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq36551){
var G__36552 = cljs.core.first.call(null,seq36551);
var seq36551__$1 = cljs.core.next.call(null,seq36551);
var G__36553 = cljs.core.first.call(null,seq36551__$1);
var seq36551__$2 = cljs.core.next.call(null,seq36551__$1);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36552,G__36553,seq36551__$2);
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
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4256__auto__,k__4257__auto__){
var self__ = this;
var this__4256__auto____$1 = this;
return this__4256__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4257__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4258__auto__,k36558,else__4259__auto__){
var self__ = this;
var this__4258__auto____$1 = this;
var G__36562 = k36558;
var G__36562__$1 = (((G__36562 instanceof cljs.core.Keyword))?G__36562.fqn:null);
switch (G__36562__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36558,else__4259__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4275__auto__,f__4276__auto__,init__4277__auto__){
var self__ = this;
var this__4275__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4275__auto____$1){
return (function (ret__4278__auto__,p__36563){
var vec__36564 = p__36563;
var k__4279__auto__ = cljs.core.nth.call(null,vec__36564,(0),null);
var v__4280__auto__ = cljs.core.nth.call(null,vec__36564,(1),null);
return f__4276__auto__.call(null,ret__4278__auto__,k__4279__auto__,v__4280__auto__);
});})(this__4275__auto____$1))
,init__4277__auto__,this__4275__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4270__auto__,writer__4271__auto__,opts__4272__auto__){
var self__ = this;
var this__4270__auto____$1 = this;
var pr_pair__4273__auto__ = ((function (this__4270__auto____$1){
return (function (keyval__4274__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,cljs.core.pr_writer,""," ","",opts__4272__auto__,keyval__4274__auto__);
});})(this__4270__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,pr_pair__4273__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4272__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36557){
var self__ = this;
var G__36557__$1 = this;
return (new cljs.core.RecordIter((0),G__36557__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4254__auto__){
var self__ = this;
var this__4254__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4260__auto__){
var self__ = this;
var this__4260__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4252__auto__){
var self__ = this;
var this__4252__auto____$1 = this;
var h__4114__auto__ = self__.__hash;
if((!((h__4114__auto__ == null)))){
return h__4114__auto__;
} else {
var h__4114__auto____$1 = ((function (h__4114__auto__,this__4252__auto____$1){
return (function (coll__4253__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__4253__auto__));
});})(h__4114__auto__,this__4252__auto____$1))
.call(null,this__4252__auto____$1);
self__.__hash = h__4114__auto____$1;

return h__4114__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36559,other36560){
var self__ = this;
var this36559__$1 = this;
return (((!((other36560 == null)))) && ((this36559__$1.constructor === other36560.constructor)) && (cljs.core._EQ_.call(null,this36559__$1.seq,other36560.seq)) && (cljs.core._EQ_.call(null,this36559__$1.rest,other36560.rest)) && (cljs.core._EQ_.call(null,this36559__$1.pos,other36560.pos)) && (cljs.core._EQ_.call(null,this36559__$1.__extmap,other36560.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4265__auto__,k__4266__auto__){
var self__ = this;
var this__4265__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4266__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4265__auto____$1),self__.__meta),k__4266__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4266__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4263__auto__,k__4264__auto__,G__36557){
var self__ = this;
var this__4263__auto____$1 = this;
var pred__36567 = cljs.core.keyword_identical_QMARK_;
var expr__36568 = k__4264__auto__;
if(cljs.core.truth_(pred__36567.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__36568))){
return (new cljs.pprint.arg_navigator(G__36557,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36567.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__36568))){
return (new cljs.pprint.arg_navigator(self__.seq,G__36557,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36567.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__36568))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__36557,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4264__auto__,G__36557),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4268__auto__){
var self__ = this;
var this__4268__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4255__auto__,G__36557){
var self__ = this;
var this__4255__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__36557,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4261__auto__,entry__4262__auto__){
var self__ = this;
var this__4261__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4262__auto__)){
return this__4261__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4262__auto__,(0)),cljs.core._nth.call(null,entry__4262__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4261__auto____$1,entry__4262__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4299__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4299__auto__,writer__4300__auto__){
return cljs.core._write.call(null,writer__4300__auto__,"cljs.pprint/arg-navigator");
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
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__36561){
var extmap__4295__auto__ = (function (){var G__36570 = cljs.core.dissoc.call(null,G__36561,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__36561)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36570);
} else {
return G__36570;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__36561),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__36561),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__36561),null,cljs.core.not_empty.call(null,extmap__4295__auto__),null));
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
var vec__36572 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__36572,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36572,(1),null);
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
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4256__auto__,k__4257__auto__){
var self__ = this;
var this__4256__auto____$1 = this;
return this__4256__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4257__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4258__auto__,k36576,else__4259__auto__){
var self__ = this;
var this__4258__auto____$1 = this;
var G__36580 = k36576;
var G__36580__$1 = (((G__36580 instanceof cljs.core.Keyword))?G__36580.fqn:null);
switch (G__36580__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36576,else__4259__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4275__auto__,f__4276__auto__,init__4277__auto__){
var self__ = this;
var this__4275__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4275__auto____$1){
return (function (ret__4278__auto__,p__36581){
var vec__36582 = p__36581;
var k__4279__auto__ = cljs.core.nth.call(null,vec__36582,(0),null);
var v__4280__auto__ = cljs.core.nth.call(null,vec__36582,(1),null);
return f__4276__auto__.call(null,ret__4278__auto__,k__4279__auto__,v__4280__auto__);
});})(this__4275__auto____$1))
,init__4277__auto__,this__4275__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4270__auto__,writer__4271__auto__,opts__4272__auto__){
var self__ = this;
var this__4270__auto____$1 = this;
var pr_pair__4273__auto__ = ((function (this__4270__auto____$1){
return (function (keyval__4274__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,cljs.core.pr_writer,""," ","",opts__4272__auto__,keyval__4274__auto__);
});})(this__4270__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4271__auto__,pr_pair__4273__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4272__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36575){
var self__ = this;
var G__36575__$1 = this;
return (new cljs.core.RecordIter((0),G__36575__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4254__auto__){
var self__ = this;
var this__4254__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4260__auto__){
var self__ = this;
var this__4260__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4252__auto__){
var self__ = this;
var this__4252__auto____$1 = this;
var h__4114__auto__ = self__.__hash;
if((!((h__4114__auto__ == null)))){
return h__4114__auto__;
} else {
var h__4114__auto____$1 = ((function (h__4114__auto__,this__4252__auto____$1){
return (function (coll__4253__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__4253__auto__));
});})(h__4114__auto__,this__4252__auto____$1))
.call(null,this__4252__auto____$1);
self__.__hash = h__4114__auto____$1;

return h__4114__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36577,other36578){
var self__ = this;
var this36577__$1 = this;
return (((!((other36578 == null)))) && ((this36577__$1.constructor === other36578.constructor)) && (cljs.core._EQ_.call(null,this36577__$1.func,other36578.func)) && (cljs.core._EQ_.call(null,this36577__$1.def,other36578.def)) && (cljs.core._EQ_.call(null,this36577__$1.params,other36578.params)) && (cljs.core._EQ_.call(null,this36577__$1.offset,other36578.offset)) && (cljs.core._EQ_.call(null,this36577__$1.__extmap,other36578.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4265__auto__,k__4266__auto__){
var self__ = this;
var this__4265__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4266__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4265__auto____$1),self__.__meta),k__4266__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4266__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4263__auto__,k__4264__auto__,G__36575){
var self__ = this;
var this__4263__auto____$1 = this;
var pred__36585 = cljs.core.keyword_identical_QMARK_;
var expr__36586 = k__4264__auto__;
if(cljs.core.truth_(pred__36585.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__36586))){
return (new cljs.pprint.compiled_directive(G__36575,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36585.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__36586))){
return (new cljs.pprint.compiled_directive(self__.func,G__36575,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36585.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36586))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__36575,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36585.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__36586))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__36575,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4264__auto__,G__36575),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4268__auto__){
var self__ = this;
var this__4268__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4255__auto__,G__36575){
var self__ = this;
var this__4255__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__36575,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4261__auto__,entry__4262__auto__){
var self__ = this;
var this__4261__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4262__auto__)){
return this__4261__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4262__auto__,(0)),cljs.core._nth.call(null,entry__4262__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4261__auto____$1,entry__4262__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4299__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4299__auto__,writer__4300__auto__){
return cljs.core._write.call(null,writer__4300__auto__,"cljs.pprint/compiled-directive");
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
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__36579){
var extmap__4295__auto__ = (function (){var G__36588 = cljs.core.dissoc.call(null,G__36579,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__36579)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36588);
} else {
return G__36588;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__36579),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__36579),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36579),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__36579),null,cljs.core.not_empty.call(null,extmap__4295__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__36590,navigator){
var vec__36591 = p__36590;
var param = cljs.core.nth.call(null,vec__36591,(0),null);
var vec__36594 = cljs.core.nth.call(null,vec__36591,(1),null);
var raw_val = cljs.core.nth.call(null,vec__36594,(0),null);
var offset = cljs.core.nth.call(null,vec__36594,(1),null);
var vec__36597 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__36597,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__36597,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__36600 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__36600,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__36600,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4002__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
var vec__36603 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__36603,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__36603,(1),null);
var base_output = (function (){var or__4002__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__36606_SHARP_){
if((p1__36606_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__36606_SHARP_,base),cljs.core.quot.call(null,p1__36606_SHARP_,base)], null);
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
return (function (p1__36607_SHARP_){
if((p1__36607_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__36607_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__36607_SHARP_ - (10))));
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
var vec__36609 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__36609,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__36609,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_36612 = (arg < (0));
var pos_arg_36613 = ((neg_36612)?(- arg):arg);
var raw_str_36614 = cljs.pprint.opt_base_str.call(null,base,pos_arg_36613);
var group_str_36615 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_36612,pos_arg_36613,raw_str_36614,vec__36609,arg,arg_navigator__$1){
return (function (p1__36608_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__36608_SHARP_);
});})(neg_36612,pos_arg_36613,raw_str_36614,vec__36609,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_36614));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_36614);
var signed_str_36616 = ((neg_36612)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_36615)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_36615)].join(''):group_str_36615
));
var padded_str_36617 = (((signed_str_36616.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_36616.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_36616)].join(''):signed_str_36616);
cljs.pprint.print.call(null,padded_str_36617);
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
var G__36618 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__36619 = (pos - (1));
var G__36620 = cljs.core.first.call(null,remainder);
var G__36621 = cljs.core.next.call(null,remainder);
acc = G__36618;
pos = G__36619;
this$ = G__36620;
remainder = G__36621;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__36622 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36622,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36622,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_36625 = (((arg < (0)))?(- arg):arg);
var parts_36626 = cljs.pprint.remainders.call(null,(1000),abs_arg_36625);
if((cljs.core.count.call(null,parts_36626) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_36627 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_36626);
var full_str_36628 = cljs.pprint.add_english_scales.call(null,parts_strs_36627,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_36628].join(''));
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
var vec__36629 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36629,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36629,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_36632 = (((arg < (0)))?(- arg):arg);
var parts_36633 = cljs.pprint.remainders.call(null,(1000),abs_arg_36632);
if((cljs.core.count.call(null,parts_36633) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_36634 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_36633));
var head_str_36635 = cljs.pprint.add_english_scales.call(null,parts_strs_36634,(1));
var tail_str_36636 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_36633));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_36635)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_36636))))))?[head_str_36635,", ",tail_str_36636].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_36635))))?[head_str_36635,"th"].join(''):tail_str_36636
))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_36637 = cljs.core.rem.call(null,arg,(100));
var not_teens_36638 = ((((11) < low_two_digits_36637)) || (((19) > low_two_digits_36637)));
var low_digit_36639 = cljs.core.rem.call(null,low_two_digits_36637,(10));
cljs.pprint.print.call(null,(((((low_digit_36639 === (1))) && (not_teens_36638)))?"st":(((((low_digit_36639 === (2))) && (not_teens_36638)))?"nd":(((((low_digit_36639 === (3))) && (not_teens_36638)))?"rd":"th"
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
var vec__36640 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36640,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36640,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_36643 = cljs.pprint.remainders.call(null,(10),arg);
var acc_36644 = cljs.core.PersistentVector.EMPTY;
var pos_36645 = (cljs.core.count.call(null,digits_36643) - (1));
var digits_36646__$1 = digits_36643;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_36646__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_36644));
} else {
var digit_36647 = cljs.core.first.call(null,digits_36646__$1);
var G__36648 = ((cljs.core._EQ_.call(null,(0),digit_36647))?acc_36644:cljs.core.conj.call(null,acc_36644,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_36645),(digit_36647 - (1)))));
var G__36649 = (pos_36645 - (1));
var G__36650 = cljs.core.next.call(null,digits_36646__$1);
acc_36644 = G__36648;
pos_36645 = G__36649;
digits_36646__$1 = G__36650;
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
var vec__36651 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__36651,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36651,(1),null);
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
var vec__36654 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__36654,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36654,(1),null);
var pred__36657_36660 = cljs.core._EQ_;
var expr__36658_36661 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__36657_36660.call(null,"o",expr__36658_36661))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__36657_36660.call(null,"u",expr__36658_36661))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__36657_36660.call(null,null,expr__36658_36661))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36658_36661)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__36662 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__36662,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36662,(1),null);
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
var vec__36665 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__36665,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__36665,(1),null);
var vec__36668 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__36668,(0),null);
var offsets = cljs.core.nth.call(null,vec__36668,(1),null);
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
var vec__36671 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__36671,(0),null);
var e = cljs.core.nth.call(null,vec__36671,(1),null);
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
var G__36674 = (i - (1));
i = G__36674;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4002__auto__ = d;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4090__auto__ = (2);
var y__4091__auto__ = w;
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4090__auto__ = (e + (1));
var y__4091__auto__ = (w__$1 - (1));
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})():(w__$1 + e)
));
var vec__36675 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__36675,(0),null);
var e1 = cljs.core.nth.call(null,vec__36675,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__36675,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__36675,(3),null);
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
var vec__36678 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__36678,(0),null);
var e1 = cljs.core.nth.call(null,vec__36678,(1),null);
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
var vec__36681 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36681,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36681,(1),null);
var vec__36684 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__36684,(0),null);
var abs = cljs.core.nth.call(null,vec__36684,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__36687 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__36687,(0),null);
var exp = cljs.core.nth.call(null,vec__36687,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4002__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
var vec__36690 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__36690,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__36690,(1),null);
var expanded = cljs.core.nth.call(null,vec__36690,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__3991__auto__ = w;
if(cljs.core.truth_(and__3991__auto__)){
var and__3991__auto____$1 = d;
if(cljs.core.truth_(and__3991__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_36693 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_36694 = (cljs.core.truth_(add_sign)?(len_36693 + (1)):len_36693);
var prepend_zero_36695__$1 = ((prepend_zero) && ((!((signed_len_36694 >= w)))));
var append_zero_36696__$1 = ((append_zero) && ((!((signed_len_36694 >= w)))));
var full_len_36697 = ((((prepend_zero_36695__$1) || (append_zero_36696__$1)))?(signed_len_36694 + (1)):signed_len_36694);
if(cljs.core.truth_((function (){var and__3991__auto__ = (full_len_36697 > w);
if(and__3991__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3991__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_36697),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_36695__$1)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero_36696__$1)?"0":null)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero)?"0":null)].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__36698 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36698,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36698,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__36704_36714 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__36705_36715 = G__36704_36714;
var mantissa_36716 = cljs.core.nth.call(null,vec__36705_36715,(0),null);
var exp_36717 = cljs.core.nth.call(null,vec__36705_36715,(1),null);
var G__36704_36718__$1 = G__36704_36714;
while(true){
var vec__36708_36719 = G__36704_36718__$1;
var mantissa_36720__$1 = cljs.core.nth.call(null,vec__36708_36719,(0),null);
var exp_36721__$1 = cljs.core.nth.call(null,vec__36708_36719,(1),null);
var w_36722 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_36723 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_36724 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_36725 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_36726 = (function (){var or__4002__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return "E";
}
})();
var add_sign_36727 = (function (){var or__4002__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_36728 = (k_36725 <= (0));
var scaled_exp_36729 = (exp_36721__$1 - (k_36725 - (1)));
var scaled_exp_str_36730 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_36729));
var scaled_exp_str_36731__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_36726),(((scaled_exp_36729 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_36724)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_36724 - cljs.core.count.call(null,scaled_exp_str_36730)),"0")):null)),scaled_exp_str_36730].join('');
var exp_width_36732 = cljs.core.count.call(null,scaled_exp_str_36731__$1);
var base_mantissa_width_36733 = cljs.core.count.call(null,mantissa_36720__$1);
var scaled_mantissa_36734 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_36725),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_36720__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_36723)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_36723 - (base_mantissa_width_36733 - (1))) - (((k_36725 < (0)))?(- k_36725):(0))),"0")):null))].join('');
var w_mantissa_36735 = (cljs.core.truth_(w_36722)?(w_36722 - exp_width_36732):null);
var vec__36711_36736 = cljs.pprint.round_str.call(null,scaled_mantissa_36734,(0),((cljs.core._EQ_.call(null,k_36725,(0)))?(d_36723 - (1)):(((k_36725 > (0)))?d_36723:(((k_36725 < (0)))?(d_36723 - (1)):null))),(cljs.core.truth_(w_mantissa_36735)?(w_mantissa_36735 - (cljs.core.truth_(add_sign_36727)?(1):(0))):null));
var rounded_mantissa_36737 = cljs.core.nth.call(null,vec__36711_36736,(0),null);
var __36738 = cljs.core.nth.call(null,vec__36711_36736,(1),null);
var incr_exp_36739 = cljs.core.nth.call(null,vec__36711_36736,(2),null);
var full_mantissa_36740 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_36737,k_36725);
var append_zero_36741 = ((cljs.core._EQ_.call(null,k_36725,cljs.core.count.call(null,rounded_mantissa_36737))) && ((d_36723 == null)));
if(cljs.core.not.call(null,incr_exp_36739)){
if(cljs.core.truth_(w_36722)){
var len_36742 = (cljs.core.count.call(null,full_mantissa_36740) + exp_width_36732);
var signed_len_36743 = (cljs.core.truth_(add_sign_36727)?(len_36742 + (1)):len_36742);
var prepend_zero_36744__$1 = ((prepend_zero_36728) && ((!(cljs.core._EQ_.call(null,signed_len_36743,w_36722)))));
var full_len_36745 = ((prepend_zero_36744__$1)?(signed_len_36743 + (1)):signed_len_36743);
var append_zero_36746__$1 = ((append_zero_36741) && ((full_len_36745 < w_36722)));
if(cljs.core.truth_((function (){var and__3991__auto__ = (function (){var or__4002__auto__ = (full_len_36745 > w_36722);
if(or__4002__auto__){
return or__4002__auto__;
} else {
var and__3991__auto__ = e_36724;
if(cljs.core.truth_(and__3991__auto__)){
return ((exp_width_36732 - (2)) > e_36724);
} else {
return and__3991__auto__;
}
}
})();
if(cljs.core.truth_(and__3991__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3991__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_36722,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_36722 - full_len_36745) - ((append_zero_36746__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_36727)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_36744__$1)?"0":null),full_mantissa_36740,((append_zero_36746__$1)?"0":null),scaled_exp_str_36731__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_36727)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_36728)?"0":null),full_mantissa_36740,((append_zero_36741)?"0":null),scaled_exp_str_36731__$1].join(''));
}
} else {
var G__36747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_36737,(exp_36721__$1 + (1))], null);
G__36704_36718__$1 = G__36747;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__36748 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36748,(0),null);
var _ = cljs.core.nth.call(null,vec__36748,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__36751 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__36751,(0),null);
var exp = cljs.core.nth.call(null,vec__36751,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4090__auto__ = cljs.core.count.call(null,mantissa);
var y__4091__auto__ = (function (){var x__4093__auto__ = n;
var y__4094__auto__ = (7);
return ((x__4093__auto__ < y__4094__auto__) ? x__4093__auto__ : y__4094__auto__);
})();
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
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
var vec__36754 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36754,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36754,(1),null);
var vec__36757 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__36757,(0),null);
var exp = cljs.core.nth.call(null,vec__36757,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4002__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (arg < (0));
}
})();
var vec__36760 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__36760,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__36760,(1),null);
var expanded = cljs.core.nth.call(null,vec__36760,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[(cljs.core.truth_((function (){var and__3991__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3991__auto__)){
return add_sign;
} else {
return and__3991__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__3991__auto__){
return add_sign;
} else {
return and__3991__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),full_repr].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__36763 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__36763,(0),null);
var navigator = cljs.core.nth.call(null,vec__36763,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__36766 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__36766,(0),null);
var navigator = cljs.core.nth.call(null,vec__36766,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__36769 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__36769,(0),null);
var navigator = cljs.core.nth.call(null,vec__36769,(1),null);
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
var vec__36772 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__36772,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36772,(1),null);
var vec__36775 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__36775,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__36775,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4002__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4002__auto__){
return or__4002__auto__;
} else {
var and__3991__auto__ = max_count;
if(cljs.core.truth_(and__3991__auto__)){
return (count >= max_count);
} else {
return and__3991__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__36778 = (count + (1));
var G__36779 = iter_result;
var G__36780 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__36778;
args__$1 = G__36779;
last_pos = G__36780;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__36781 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__36781,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36781,(1),null);
var vec__36784 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__36784,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__36784,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4002__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4002__auto__){
return or__4002__auto__;
} else {
var and__3991__auto__ = max_count;
if(cljs.core.truth_(and__3991__auto__)){
return (count >= max_count);
} else {
return and__3991__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__36787 = (count + (1));
var G__36788 = cljs.core.next.call(null,arg_list__$1);
count = G__36787;
arg_list__$1 = G__36788;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__36789 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__36789,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36789,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4002__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4002__auto__){
return or__4002__auto__;
} else {
var and__3991__auto__ = max_count;
if(cljs.core.truth_(and__3991__auto__)){
return (count >= max_count);
} else {
return and__3991__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__36792 = (count + (1));
var G__36793 = iter_result;
var G__36794 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__36792;
navigator__$2 = G__36793;
last_pos = G__36794;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__36795 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__36795,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36795,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4002__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4002__auto__){
return or__4002__auto__;
} else {
var and__3991__auto__ = max_count;
if(cljs.core.truth_(and__3991__auto__)){
return (count >= max_count);
} else {
return and__3991__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__36801 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__36801,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__36801,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__36804 = (count + (1));
var G__36805 = navigator__$3;
count = G__36804;
navigator__$2 = G__36805;
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
var vec__36811 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__36814 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__36815 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__36815;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__36814;
}})();
var iter_result = cljs.core.nth.call(null,vec__36811,(0),null);
var result_str = cljs.core.nth.call(null,vec__36811,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__36816 = cljs.core.next.call(null,clauses__$1);
var G__36817 = cljs.core.conj.call(null,acc,result_str);
var G__36818 = iter_result;
clauses__$1 = G__36816;
acc = G__36817;
navigator__$1 = G__36818;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__36819 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var else$ = temp__5720__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__36822 = cljs.core.nth.call(null,vec__36819,(0),null);
var eol_str = cljs.core.nth.call(null,vec__36822,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__36819,(1),null);
var navigator__$1 = (function (){var or__4002__auto__ = new_navigator;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return navigator;
}
})();
var vec__36825 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var p = temp__5720__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__36825,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__36825,(1),null);
var navigator__$2 = (function (){var or__4002__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4002__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4002__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__36828 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__36828,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__36828,(1),null);
var slots = (function (){var x__4090__auto__ = (1);
var y__4091__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4090__auto__ = minpad;
var y__4091__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__3991__auto__ = eol_str;
if(cljs.core.truth_(and__3991__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__3991__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_36831__$1 = slots;
var extra_pad_36832__$1 = extra_pad;
var strs_36833__$1 = strs;
var pad_only_36834 = (function (){var or__4002__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_36833__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_36833__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_36834))?cljs.core.first.call(null,strs_36833__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4002__auto__ = pad_only_36834;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = cljs.core.next.call(null,strs_36833__$1);
if(or__4002__auto____$1){
return or__4002__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_36832__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__36835 = (slots_36831__$1 - (1));
var G__36836 = (extra_pad_36832__$1 - (1));
var G__36837 = (cljs.core.truth_(pad_only_36834)?strs_36833__$1:cljs.core.next.call(null,strs_36833__$1));
var G__36838 = false;
slots_36831__$1 = G__36835;
extra_pad_36832__$1 = G__36836;
strs_36833__$1 = G__36837;
pad_only_36834 = G__36838;
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint36839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint36839 = (function (writer,meta36840){
this.writer = writer;
this.meta36840 = meta36840;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint36839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36841,meta36840__$1){
var self__ = this;
var _36841__$1 = this;
return (new cljs.pprint.t_cljs$pprint36839(self__.writer,meta36840__$1));
});

cljs.pprint.t_cljs$pprint36839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36841){
var self__ = this;
var _36841__$1 = this;
return self__.meta36840;
});

cljs.pprint.t_cljs$pprint36839.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint36839.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__36842 = cljs.core._EQ_;
var expr__36843 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__36842.call(null,String,expr__36843))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__36842.call(null,Number,expr__36843))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36843)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint36839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta36840","meta36840",915581263,null)], null);
});

cljs.pprint.t_cljs$pprint36839.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint36839.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint36839";

cljs.pprint.t_cljs$pprint36839.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.pprint/t_cljs$pprint36839");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint36839.
 */
cljs.pprint.__GT_t_cljs$pprint36839 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint36839(writer__$1,meta36840){
return (new cljs.pprint.t_cljs$pprint36839(writer__$1,meta36840));
});

}

return (new cljs.pprint.t_cljs$pprint36839(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint36845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint36845 = (function (writer,meta36846){
this.writer = writer;
this.meta36846 = meta36846;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint36845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36847,meta36846__$1){
var self__ = this;
var _36847__$1 = this;
return (new cljs.pprint.t_cljs$pprint36845(self__.writer,meta36846__$1));
});

cljs.pprint.t_cljs$pprint36845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36847){
var self__ = this;
var _36847__$1 = this;
return self__.meta36846;
});

cljs.pprint.t_cljs$pprint36845.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint36845.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__36848 = cljs.core._EQ_;
var expr__36849 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__36848.call(null,String,expr__36849))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__36848.call(null,Number,expr__36849))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36849)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint36845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta36846","meta36846",-1810085280,null)], null);
});

cljs.pprint.t_cljs$pprint36845.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint36845.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint36845";

cljs.pprint.t_cljs$pprint36845.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.pprint/t_cljs$pprint36845");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint36845.
 */
cljs.pprint.__GT_t_cljs$pprint36845 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint36845(writer__$1,meta36846){
return (new cljs.pprint.t_cljs$pprint36845(writer__$1,meta36846));
});

}

return (new cljs.pprint.t_cljs$pprint36845(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__3991__auto__ = first_QMARK_;
if(cljs.core.truth_(and__3991__auto__)){
var and__3991__auto____$1 = f;
if(cljs.core.truth_(and__3991__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__3991__auto__ = m;
if(cljs.core.truth_(and__3991__auto__)){
return (m.index + (1));
} else {
return and__3991__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint36851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint36851 = (function (writer,last_was_whitespace_QMARK_,meta36852){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta36852 = meta36852;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint36851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_36853,meta36852__$1){
var self__ = this;
var _36853__$1 = this;
return (new cljs.pprint.t_cljs$pprint36851(self__.writer,self__.last_was_whitespace_QMARK_,meta36852__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint36851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_36853){
var self__ = this;
var _36853__$1 = this;
return self__.meta36852;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint36851.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint36851.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__36854 = cljs.core._EQ_;
var expr__36855 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__36854.call(null,String,expr__36855))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__36854.call(null,Number,expr__36855))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36855)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint36851.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta36852","meta36852",908249512,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint36851.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint36851.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint36851";

cljs.pprint.t_cljs$pprint36851.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.pprint/t_cljs$pprint36851");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint36851.
 */
cljs.pprint.__GT_t_cljs$pprint36851 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint36851(writer__$1,last_was_whitespace_QMARK___$1,meta36852){
return (new cljs.pprint.t_cljs$pprint36851(writer__$1,last_was_whitespace_QMARK___$1,meta36852));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint36851(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint36857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint36857 = (function (writer,capped,meta36858){
this.writer = writer;
this.capped = capped;
this.meta36858 = meta36858;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint36857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_36859,meta36858__$1){
var self__ = this;
var _36859__$1 = this;
return (new cljs.pprint.t_cljs$pprint36857(self__.writer,self__.capped,meta36858__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint36857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_36859){
var self__ = this;
var _36859__$1 = this;
return self__.meta36858;
});})(capped))
;

cljs.pprint.t_cljs$pprint36857.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint36857.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__36860 = cljs.core._EQ_;
var expr__36861 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__36860.call(null,String,expr__36861))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__3991__auto__ = m;
if(cljs.core.truth_(and__3991__auto__)){
return m.index;
} else {
return and__3991__auto__;
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
if(cljs.core.truth_(pred__36860.call(null,Number,expr__36861))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__3991__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__3991__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36861)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint36857.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta36858","meta36858",-155052288,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint36857.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint36857.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint36857";

cljs.pprint.t_cljs$pprint36857.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.pprint/t_cljs$pprint36857");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint36857.
 */
cljs.pprint.__GT_t_cljs$pprint36857 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint36857(writer__$1,capped__$1,meta36858){
return (new cljs.pprint.t_cljs$pprint36857(writer__$1,capped__$1,meta36858));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint36857(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__36863 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__36864 = make_writer.call(null,cljs.core._STAR_out_STAR_);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__36864;

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__36863;
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
var colnum_36866 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_36867 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_36868 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_36869 = (((current_36868 < colnum_36866))?(colnum_36866 - current_36868):((cljs.core._EQ_.call(null,colinc_36867,(0)))?(0):(colinc_36867 - cljs.core.rem.call(null,(current_36868 - colnum_36866),colinc_36867))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_36869," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_36870 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_36871 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_36872 = (colrel_36870 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_36873 = (((colinc_36871 > (0)))?cljs.core.rem.call(null,start_col_36872,colinc_36871):(0));
var space_count_36874 = (colrel_36870 + ((cljs.core._EQ_.call(null,(0),offset_36873))?(0):(colinc_36871 - offset_36873)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_36874," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__36875 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36875,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36875,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36878_36882 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36879_36883 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36880_36884 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36881_36885 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36880_36884;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36881_36885;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36879_36883;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36878_36882;
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
return (function (p1__36886_SHARP_,p2__36887_SHARP_,p3__36888_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__36886_SHARP_,p2__36887_SHARP_,p3__36888_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__36889_SHARP_,p2__36890_SHARP_,p3__36891_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__36889_SHARP_,p2__36890_SHARP_,p3__36891_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__36892_SHARP_,p2__36893_SHARP_,p3__36894_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__36892_SHARP_,p2__36893_SHARP_,p3__36894_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__36895_SHARP_,p2__36896_SHARP_,p3__36897_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__36895_SHARP_,p2__36896_SHARP_,p3__36897_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__36898_SHARP_,p2__36899_SHARP_,p3__36900_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__36898_SHARP_,p2__36899_SHARP_,p3__36900_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__36901_SHARP_,p2__36902_SHARP_,p3__36903_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__36901_SHARP_,p2__36902_SHARP_,p3__36903_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__36904_SHARP_,p2__36905_SHARP_,p3__36906_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__36904_SHARP_),p1__36904_SHARP_,p2__36905_SHARP_,p3__36906_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__3991__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3991__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3991__auto__;
}
})())){
return (function (p1__36907_SHARP_,p2__36908_SHARP_,p3__36909_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__36907_SHARP_,p2__36908_SHARP_,p3__36909_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__36910_SHARP_,p2__36911_SHARP_,p3__36912_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__36910_SHARP_,p2__36911_SHARP_,p3__36912_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__36913_SHARP_,p2__36914_SHARP_,p3__36915_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__36913_SHARP_,p2__36914_SHARP_,p3__36915_SHARP_);
});
} else {
return (function (p1__36916_SHARP_,p2__36917_SHARP_,p3__36918_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__36916_SHARP_,p2__36917_SHARP_,p3__36918_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__36928 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__36928,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__36928,(1),null);
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
var n__4478__auto___36946 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_36947 = (0);
while(true){
if((i_36947 < n__4478__auto___36946)){
cljs.pprint.prn.call(null);

var G__36948 = (i_36947 + (1));
i_36947 = G__36948;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_36949 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_36949 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__4478__auto___36950 = (cnt_36949 - (1));
var i_36951 = (0);
while(true){
if((i_36951 < n__4478__auto___36950)){
cljs.pprint.prn.call(null);

var G__36952 = (i_36951 + (1));
i_36951 = G__36952;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4478__auto___36953 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_36954 = (0);
while(true){
if((i_36954 < n__4478__auto___36953)){
cljs.pprint.print.call(null,"\f");

var G__36955 = (i_36954 + (1));
i_36954 = G__36955;
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
return (function (p1__36919_SHARP_,p2__36920_SHARP_,p3__36921_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__36919_SHARP_,p2__36920_SHARP_,p3__36921_SHARP_);
});
} else {
return (function (p1__36922_SHARP_,p2__36923_SHARP_,p3__36924_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__36922_SHARP_,p2__36923_SHARP_,p3__36924_SHARP_);
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
var vec__36931 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__36931,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36931,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__36934 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__36934,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36934,(1),null);
var vec__36937 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__36937,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__36937,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__3991__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3991__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3991__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__36925_SHARP_,p2__36926_SHARP_,p3__36927_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__36925_SHARP_,p2__36926_SHARP_,p3__36927_SHARP_);
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
if(cljs.core.truth_((function (){var and__3991__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3991__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3991__auto__;
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
if(cljs.core.truth_((function (){var and__3991__auto__ = arg1;
if(cljs.core.truth_(and__3991__auto__)){
var and__3991__auto____$1 = arg2;
if(cljs.core.truth_(and__3991__auto____$1)){
return arg3;
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__3991__auto__ = arg1;
if(cljs.core.truth_(and__3991__auto__)){
return arg2;
} else {
return and__3991__auto__;
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
if(cljs.core.truth_((function (){var or__4002__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__36940 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36940,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36940,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__36943 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__36943,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__36943,(1),null);
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
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__36956){
var vec__36957 = p__36956;
var s = cljs.core.nth.call(null,vec__36957,(0),null);
var offset = cljs.core.nth.call(null,vec__36957,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__36957,(2),null);
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
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__36960){
var vec__36961 = p__36960;
var p = cljs.core.nth.call(null,vec__36961,(0),null);
var offset = cljs.core.nth.call(null,vec__36961,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__36964){
var vec__36965 = p__36964;
var s__$1 = cljs.core.nth.call(null,vec__36965,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__36965,(1),null);
var flags = cljs.core.nth.call(null,vec__36965,(2),null);
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
if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3991__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3991__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3991__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3991__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3991__auto__){
var and__3991__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__3991__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4093__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4094__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4093__auto__ < y__4094__auto__) ? x__4093__auto__ : y__4094__auto__);
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

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36968_SHARP_,p2__36969_SHARP_){
var val = cljs.core.first.call(null,p1__36968_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__36969_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__36969_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__36968_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__4394__auto__ = (function cljs$pprint$map_params_$_iter__36973(s__36974){
return (new cljs.core.LazySeq(null,(function (){
var s__36974__$1 = s__36974;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36974__$1);
if(temp__5720__auto__){
var s__36974__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36974__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__36974__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__36976 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__36975 = (0);
while(true){
if((i__36975 < size__4393__auto__)){
var vec__36977 = cljs.core._nth.call(null,c__4392__auto__,i__36975);
var name = cljs.core.nth.call(null,vec__36977,(0),null);
var vec__36980 = cljs.core.nth.call(null,vec__36977,(1),null);
var default$ = cljs.core.nth.call(null,vec__36980,(0),null);
cljs.core.chunk_append.call(null,b__36976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__36989 = (i__36975 + (1));
i__36975 = G__36989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36976),cljs$pprint$map_params_$_iter__36973.call(null,cljs.core.chunk_rest.call(null,s__36974__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36976),null);
}
} else {
var vec__36983 = cljs.core.first.call(null,s__36974__$2);
var name = cljs.core.nth.call(null,vec__36983,(0),null);
var vec__36986 = cljs.core.nth.call(null,vec__36983,(1),null);
var default$ = cljs.core.nth.call(null,vec__36986,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__36973.call(null,cljs.core.rest.call(null,s__36974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__36970_SHARP_,p2__36971_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__36970_SHARP_,p2__36971_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__36972_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__36972_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__36990 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__36990,(0),null);
var vec__36993 = cljs.core.nth.call(null,vec__36990,(1),null);
var rest = cljs.core.nth.call(null,vec__36993,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__36993,(1),null);
var vec__36996 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__36996,(0),null);
var vec__36999 = cljs.core.nth.call(null,vec__36996,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__36999,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__36999,(1),null);
var flags = cljs.core.nth.call(null,vec__36999,(2),null);
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
var and__3991__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__3991__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__3991__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__37002 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__37002,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__37002,(1),null);
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
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__37005){
var vec__37006 = p__37005;
var clause_map = cljs.core.nth.call(null,vec__37006,(0),null);
var saw_else = cljs.core.nth.call(null,vec__37006,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__37006,(2),null);
var vec__37009 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__37009,(0),null);
var vec__37012 = cljs.core.nth.call(null,vec__37009,(1),null);
var type = cljs.core.nth.call(null,vec__37012,(0),null);
var right_params = cljs.core.nth.call(null,vec__37012,(1),null);
var else_params = cljs.core.nth.call(null,vec__37012,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__37012,(3),null);
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
var _STAR_format_str_STAR__orig_val__37015 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__37016 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__37016;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR__orig_val__37015,_STAR_format_str_STAR__temp_val__37016){
return (function (p__37017){
var vec__37018 = p__37017;
var s = cljs.core.nth.call(null,vec__37018,(0),null);
var offset = cljs.core.nth.call(null,vec__37018,(1),null);
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
});})(_STAR_format_str_STAR__orig_val__37015,_STAR_format_str_STAR__temp_val__37016))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__37015;
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
if(cljs.core.truth_((function (){var or__4002__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__4002__auto____$1)){
return or__4002__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__37021 = cljs.core.next.call(null,format__$1);
format__$1 = G__37021;
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
var G__37023 = arguments.length;
switch (G__37023) {
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
var _STAR_out_STAR__orig_val__37024 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__37025 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__37025;

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
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__37024;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__37026 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__37026,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__37026,(1),null);
var vec__37029 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__37029,(0),null);
var offsets = cljs.core.nth.call(null,vec__37029,(1),null);
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
if(cljs.core.truth_((function (){var and__3991__auto__ = macro_char;
if(cljs.core.truth_(and__3991__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__3991__auto__;
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
var _STAR_current_level_STAR__orig_val__37033_37038 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37034_37039 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37035_37040 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37036_37041 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37035_37040;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37036_37041;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count37037_37042 = (0);
var alis_37043__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count37037_37042 < cljs.core._STAR_print_length_STAR_)))){
if(alis_37043__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_37043__$1));

if(cljs.core.next.call(null,alis_37043__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__37044 = (length_count37037_37042 + (1));
var G__37045 = cljs.core.next.call(null,alis_37043__$1);
length_count37037_37042 = G__37044;
alis_37043__$1 = G__37045;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37034_37039;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37033_37038;
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
var _STAR_current_level_STAR__orig_val__37046_37051 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37047_37052 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37048_37053 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37049_37054 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37048_37053;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37049_37054;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count37050_37055 = (0);
var aseq_37056 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count37050_37055 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_37056){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_37056));

if(cljs.core.next.call(null,aseq_37056)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__37057 = (length_count37050_37055 + (1));
var G__37058 = cljs.core.next.call(null,aseq_37056);
length_count37050_37055 = G__37057;
aseq_37056 = G__37058;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37047_37052;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37046_37051;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__30721__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37059__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37059 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37060__i = 0, G__37060__a = new Array(arguments.length -  0);
while (G__37060__i < G__37060__a.length) {G__37060__a[G__37060__i] = arguments[G__37060__i + 0]; ++G__37060__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37060__a,0,null);
} 
return G__37059__delegate.call(this,args__30723__auto__);};
G__37059.cljs$lang$maxFixedArity = 0;
G__37059.cljs$lang$applyTo = (function (arglist__37061){
var args__30723__auto__ = cljs.core.seq(arglist__37061);
return G__37059__delegate(args__30723__auto__);
});
G__37059.cljs$core$IFn$_invoke$arity$variadic = G__37059__delegate;
return G__37059;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__37062 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(10277),(10277),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__37062,(0),null);
var lift_map = cljs.core.nth.call(null,vec__37062,(1),null);
var amap__$1 = (function (){var or__4002__auto__ = lift_map;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37065_37074 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37066_37075 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37067_37076 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37068_37077 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37067_37076;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37068_37077;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count37069_37078 = (0);
var aseq_37079 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count37069_37078 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_37079){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37070_37080 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37071_37081 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37072_37082 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37073_37083 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37072_37082;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37073_37083;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_37079));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_37079)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37071_37081;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37070_37080;
}}


if(cljs.core.next.call(null,aseq_37079)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__37084 = (length_count37069_37078 + (1));
var G__37085 = cljs.core.next.call(null,aseq_37079);
length_count37069_37078 = G__37084;
aseq_37079 = G__37085;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37066_37075;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37065_37074;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__30721__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37086__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37086 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37087__i = 0, G__37087__a = new Array(arguments.length -  0);
while (G__37087__i < G__37087__a.length) {G__37087__a[G__37087__i] = arguments[G__37087__i + 0]; ++G__37087__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37087__a,0,null);
} 
return G__37086__delegate.call(this,args__30723__auto__);};
G__37086.cljs$lang$maxFixedArity = 0;
G__37086.cljs$lang$applyTo = (function (arglist__37088){
var args__30723__auto__ = cljs.core.seq(arglist__37088);
return G__37086__delegate(args__30723__auto__);
});
G__37086.cljs$core$IFn$_invoke$arity$variadic = G__37086__delegate;
return G__37086;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4002__auto__ = (function (){var temp__5720__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5720__auto__)){
var match = temp__5720__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37089_37095 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37090_37096 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37091_37097 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37092_37098 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37091_37097;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37092_37098;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__3991__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__3991__auto__){
return (!(cljs.core._realized_QMARK_.call(null,o)));
} else {
return and__3991__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37090_37096;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37089_37095;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__30721__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37099__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37099 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37100__i = 0, G__37100__a = new Array(arguments.length -  0);
while (G__37100__i < G__37100__a.length) {G__37100__a[G__37100__i] = arguments[G__37100__i + 0]; ++G__37100__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37100__a,0,null);
} 
return G__37099__delegate.call(this,args__30723__auto__);};
G__37099.cljs$lang$maxFixedArity = 0;
G__37099.cljs$lang$applyTo = (function (arglist__37101){
var args__30723__auto__ = cljs.core.seq(arglist__37101);
return G__37099__delegate(args__30723__auto__);
});
G__37099.cljs$core$IFn$_invoke$arity$variadic = G__37099__delegate;
return G__37099;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
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
cljs.pprint.simple_dispatch = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
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
var vec__37103 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__37103,(0),null);
var end = cljs.core.nth.call(null,vec__37103,(1),null);
var vec__37106 = reference;
var seq__37107 = cljs.core.seq.call(null,vec__37106);
var first__37108 = cljs.core.first.call(null,seq__37107);
var seq__37107__$1 = cljs.core.next.call(null,seq__37107);
var keyw = first__37108;
var args = seq__37107__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37109_37123 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37110_37124 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37111_37125 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37112_37126 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37111_37125;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37112_37126;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__30721__auto__ = "~w~:i";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args){
return (function() { 
var G__37127__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37127 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37128__i = 0, G__37128__a = new Array(arguments.length -  0);
while (G__37128__i < G__37128__a.length) {G__37128__a[G__37128__i] = arguments[G__37128__i + 0]; ++G__37128__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37128__a,0,null);
} 
return G__37127__delegate.call(this,args__30723__auto__);};
G__37127.cljs$lang$maxFixedArity = 0;
G__37127.cljs$lang$applyTo = (function (arglist__37129){
var args__30723__auto__ = cljs.core.seq(arglist__37129);
return G__37127__delegate(args__30723__auto__);
});
G__37127.cljs$core$IFn$_invoke$arity$variadic = G__37127__delegate;
return G__37127;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args))
})().call(null,keyw);

var args_37130__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_37130__$1)){
(function (){var format_in__30721__auto__ = " ";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (args_37130__$1,format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args){
return (function() { 
var G__37131__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37131 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37132__i = 0, G__37132__a = new Array(arguments.length -  0);
while (G__37132__i < G__37132__a.length) {G__37132__a[G__37132__i] = arguments[G__37132__i + 0]; ++G__37132__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37132__a,0,null);
} 
return G__37131__delegate.call(this,args__30723__auto__);};
G__37131.cljs$lang$maxFixedArity = 0;
G__37131.cljs$lang$applyTo = (function (arglist__37133){
var args__30723__auto__ = cljs.core.seq(arglist__37133);
return G__37131__delegate(args__30723__auto__);
});
G__37131.cljs$core$IFn$_invoke$arity$variadic = G__37131__delegate;
return G__37131;
})()
;
;})(args_37130__$1,format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args))
})().call(null);

var arg_37134 = cljs.core.first.call(null,args_37130__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_37134)){
var vec__37113_37135 = cljs.pprint.brackets.call(null,arg_37134);
var start_37136__$1 = cljs.core.nth.call(null,vec__37113_37135,(0),null);
var end_37137__$1 = cljs.core.nth.call(null,vec__37113_37135,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37116_37138 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37117_37139 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37118_37140 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37119_37141 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37118_37140;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37119_37141;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_37136__$1,null,end_37137__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_37134),(3))) && ((cljs.core.second.call(null,arg_37134) instanceof cljs.core.Keyword)))){
var vec__37120_37142 = arg_37134;
var ns_37143 = cljs.core.nth.call(null,vec__37120_37142,(0),null);
var kw_37144 = cljs.core.nth.call(null,vec__37120_37142,(1),null);
var lis_37145 = cljs.core.nth.call(null,vec__37120_37142,(2),null);
(function (){var format_in__30721__auto__ = "~w ~w ";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (args_37130__$1,format_in__30721__auto__,cf__30722__auto__,vec__37120_37142,ns_37143,kw_37144,lis_37145,_STAR_current_level_STAR__orig_val__37116_37138,_STAR_current_length_STAR__orig_val__37117_37139,_STAR_current_level_STAR__temp_val__37118_37140,_STAR_current_length_STAR__temp_val__37119_37141,vec__37113_37135,start_37136__$1,end_37137__$1,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args){
return (function() { 
var G__37146__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37146 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37147__i = 0, G__37147__a = new Array(arguments.length -  0);
while (G__37147__i < G__37147__a.length) {G__37147__a[G__37147__i] = arguments[G__37147__i + 0]; ++G__37147__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37147__a,0,null);
} 
return G__37146__delegate.call(this,args__30723__auto__);};
G__37146.cljs$lang$maxFixedArity = 0;
G__37146.cljs$lang$applyTo = (function (arglist__37148){
var args__30723__auto__ = cljs.core.seq(arglist__37148);
return G__37146__delegate(args__30723__auto__);
});
G__37146.cljs$core$IFn$_invoke$arity$variadic = G__37146__delegate;
return G__37146;
})()
;
;})(args_37130__$1,format_in__30721__auto__,cf__30722__auto__,vec__37120_37142,ns_37143,kw_37144,lis_37145,_STAR_current_level_STAR__orig_val__37116_37138,_STAR_current_length_STAR__orig_val__37117_37139,_STAR_current_level_STAR__temp_val__37118_37140,_STAR_current_length_STAR__temp_val__37119_37141,vec__37113_37135,start_37136__$1,end_37137__$1,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args))
})().call(null,ns_37143,kw_37144);

if(cljs.core.sequential_QMARK_.call(null,lis_37145)){
(function (){var format_in__30721__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_37145))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (args_37130__$1,format_in__30721__auto__,cf__30722__auto__,vec__37120_37142,ns_37143,kw_37144,lis_37145,_STAR_current_level_STAR__orig_val__37116_37138,_STAR_current_length_STAR__orig_val__37117_37139,_STAR_current_level_STAR__temp_val__37118_37140,_STAR_current_length_STAR__temp_val__37119_37141,vec__37113_37135,start_37136__$1,end_37137__$1,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args){
return (function() { 
var G__37149__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37149 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37150__i = 0, G__37150__a = new Array(arguments.length -  0);
while (G__37150__i < G__37150__a.length) {G__37150__a[G__37150__i] = arguments[G__37150__i + 0]; ++G__37150__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37150__a,0,null);
} 
return G__37149__delegate.call(this,args__30723__auto__);};
G__37149.cljs$lang$maxFixedArity = 0;
G__37149.cljs$lang$applyTo = (function (arglist__37151){
var args__30723__auto__ = cljs.core.seq(arglist__37151);
return G__37149__delegate(args__30723__auto__);
});
G__37149.cljs$core$IFn$_invoke$arity$variadic = G__37149__delegate;
return G__37149;
})()
;
;})(args_37130__$1,format_in__30721__auto__,cf__30722__auto__,vec__37120_37142,ns_37143,kw_37144,lis_37145,_STAR_current_level_STAR__orig_val__37116_37138,_STAR_current_length_STAR__orig_val__37117_37139,_STAR_current_level_STAR__temp_val__37118_37140,_STAR_current_length_STAR__temp_val__37119_37141,vec__37113_37135,start_37136__$1,end_37137__$1,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args))
})().call(null,lis_37145);
} else {
cljs.pprint.write_out.call(null,lis_37145);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__30721__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (args_37130__$1,format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37116_37138,_STAR_current_length_STAR__orig_val__37117_37139,_STAR_current_level_STAR__temp_val__37118_37140,_STAR_current_length_STAR__temp_val__37119_37141,vec__37113_37135,start_37136__$1,end_37137__$1,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args){
return (function() { 
var G__37152__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37152 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37153__i = 0, G__37153__a = new Array(arguments.length -  0);
while (G__37153__i < G__37153__a.length) {G__37153__a[G__37153__i] = arguments[G__37153__i + 0]; ++G__37153__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37153__a,0,null);
} 
return G__37152__delegate.call(this,args__30723__auto__);};
G__37152.cljs$lang$maxFixedArity = 0;
G__37152.cljs$lang$applyTo = (function (arglist__37154){
var args__30723__auto__ = cljs.core.seq(arglist__37154);
return G__37152__delegate(args__30723__auto__);
});
G__37152.cljs$core$IFn$_invoke$arity$variadic = G__37152__delegate;
return G__37152;
})()
;
;})(args_37130__$1,format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37116_37138,_STAR_current_length_STAR__orig_val__37117_37139,_STAR_current_level_STAR__temp_val__37118_37140,_STAR_current_length_STAR__temp_val__37119_37141,vec__37113_37135,start_37136__$1,end_37137__$1,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args))
})(),arg_37134);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37117_37139;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37116_37138;
}}


if(cljs.core.next.call(null,args_37130__$1)){
(function (){var format_in__30721__auto__ = "~_";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (args_37130__$1,format_in__30721__auto__,cf__30722__auto__,vec__37113_37135,start_37136__$1,end_37137__$1,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args){
return (function() { 
var G__37155__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37155 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37156__i = 0, G__37156__a = new Array(arguments.length -  0);
while (G__37156__i < G__37156__a.length) {G__37156__a[G__37156__i] = arguments[G__37156__i + 0]; ++G__37156__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37156__a,0,null);
} 
return G__37155__delegate.call(this,args__30723__auto__);};
G__37155.cljs$lang$maxFixedArity = 0;
G__37155.cljs$lang$applyTo = (function (arglist__37157){
var args__30723__auto__ = cljs.core.seq(arglist__37157);
return G__37155__delegate(args__30723__auto__);
});
G__37155.cljs$core$IFn$_invoke$arity$variadic = G__37155__delegate;
return G__37155;
})()
;
;})(args_37130__$1,format_in__30721__auto__,cf__30722__auto__,vec__37113_37135,start_37136__$1,end_37137__$1,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_37134);

if(cljs.core.next.call(null,args_37130__$1)){
(function (){var format_in__30721__auto__ = "~:_";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (args_37130__$1,format_in__30721__auto__,cf__30722__auto__,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args){
return (function() { 
var G__37158__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37158 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37159__i = 0, G__37159__a = new Array(arguments.length -  0);
while (G__37159__i < G__37159__a.length) {G__37159__a[G__37159__i] = arguments[G__37159__i + 0]; ++G__37159__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37159__a,0,null);
} 
return G__37158__delegate.call(this,args__30723__auto__);};
G__37158.cljs$lang$maxFixedArity = 0;
G__37158.cljs$lang$applyTo = (function (arglist__37160){
var args__30723__auto__ = cljs.core.seq(arglist__37160);
return G__37158__delegate(args__30723__auto__);
});
G__37158.cljs$core$IFn$_invoke$arity$variadic = G__37158__delegate;
return G__37158;
})()
;
;})(args_37130__$1,format_in__30721__auto__,cf__30722__auto__,arg_37134,_STAR_current_level_STAR__orig_val__37109_37123,_STAR_current_length_STAR__orig_val__37110_37124,_STAR_current_level_STAR__temp_val__37111_37125,_STAR_current_length_STAR__temp_val__37112_37126,vec__37103,start,end,vec__37106,seq__37107,first__37108,seq__37107__$1,keyw,args))
})().call(null);
} else {
}
}

var G__37161 = cljs.core.next.call(null,args_37130__$1);
args_37130__$1 = G__37161;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37110_37124;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37109_37123;
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
var vec__37162 = alis;
var seq__37163 = cljs.core.seq.call(null,vec__37162);
var first__37164 = cljs.core.first.call(null,seq__37163);
var seq__37163__$1 = cljs.core.next.call(null,seq__37163);
var ns_sym = first__37164;
var first__37164__$1 = cljs.core.first.call(null,seq__37163__$1);
var seq__37163__$2 = cljs.core.next.call(null,seq__37163__$1);
var ns_name = first__37164__$1;
var stuff = seq__37163__$2;
var vec__37165 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__37165,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__37165,(1),null);
var vec__37168 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__37168,(0),null);
var references = cljs.core.nth.call(null,vec__37168,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37171_37175 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37172_37176 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37173_37177 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37174_37178 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37173_37177;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37174_37178;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__30721__auto__ = "~w ~1I~@_~w";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37171_37175,_STAR_current_length_STAR__orig_val__37172_37176,_STAR_current_level_STAR__temp_val__37173_37177,_STAR_current_length_STAR__temp_val__37174_37178,vec__37162,seq__37163,first__37164,seq__37163__$1,ns_sym,first__37164__$1,seq__37163__$2,ns_name,stuff,vec__37165,doc_str,stuff__$1,vec__37168,attr_map,references){
return (function() { 
var G__37179__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37179 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37180__i = 0, G__37180__a = new Array(arguments.length -  0);
while (G__37180__i < G__37180__a.length) {G__37180__a[G__37180__i] = arguments[G__37180__i + 0]; ++G__37180__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37180__a,0,null);
} 
return G__37179__delegate.call(this,args__30723__auto__);};
G__37179.cljs$lang$maxFixedArity = 0;
G__37179.cljs$lang$applyTo = (function (arglist__37181){
var args__30723__auto__ = cljs.core.seq(arglist__37181);
return G__37179__delegate(args__30723__auto__);
});
G__37179.cljs$core$IFn$_invoke$arity$variadic = G__37179__delegate;
return G__37179;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37171_37175,_STAR_current_length_STAR__orig_val__37172_37176,_STAR_current_level_STAR__temp_val__37173_37177,_STAR_current_length_STAR__temp_val__37174_37178,vec__37162,seq__37163,first__37164,seq__37163__$1,ns_sym,first__37164__$1,seq__37163__$2,ns_name,stuff,vec__37165,doc_str,stuff__$1,vec__37168,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4002__auto__ = doc_str;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = attr_map;
if(cljs.core.truth_(or__4002__auto____$1)){
return or__4002__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__30721__auto__ = "~@:_";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37171_37175,_STAR_current_length_STAR__orig_val__37172_37176,_STAR_current_level_STAR__temp_val__37173_37177,_STAR_current_length_STAR__temp_val__37174_37178,vec__37162,seq__37163,first__37164,seq__37163__$1,ns_sym,first__37164__$1,seq__37163__$2,ns_name,stuff,vec__37165,doc_str,stuff__$1,vec__37168,attr_map,references){
return (function() { 
var G__37182__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37182 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37183__i = 0, G__37183__a = new Array(arguments.length -  0);
while (G__37183__i < G__37183__a.length) {G__37183__a[G__37183__i] = arguments[G__37183__i + 0]; ++G__37183__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37183__a,0,null);
} 
return G__37182__delegate.call(this,args__30723__auto__);};
G__37182.cljs$lang$maxFixedArity = 0;
G__37182.cljs$lang$applyTo = (function (arglist__37184){
var args__30723__auto__ = cljs.core.seq(arglist__37184);
return G__37182__delegate(args__30723__auto__);
});
G__37182.cljs$core$IFn$_invoke$arity$variadic = G__37182__delegate;
return G__37182;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37171_37175,_STAR_current_length_STAR__orig_val__37172_37176,_STAR_current_level_STAR__temp_val__37173_37177,_STAR_current_length_STAR__temp_val__37174_37178,vec__37162,seq__37163,first__37164,seq__37163__$1,ns_sym,first__37164__$1,seq__37163__$2,ns_name,stuff,vec__37165,doc_str,stuff__$1,vec__37168,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__4002__auto__ = attr_map;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__30721__auto__ = "~w~:[~;~:@_~]";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37171_37175,_STAR_current_length_STAR__orig_val__37172_37176,_STAR_current_level_STAR__temp_val__37173_37177,_STAR_current_length_STAR__temp_val__37174_37178,vec__37162,seq__37163,first__37164,seq__37163__$1,ns_sym,first__37164__$1,seq__37163__$2,ns_name,stuff,vec__37165,doc_str,stuff__$1,vec__37168,attr_map,references){
return (function() { 
var G__37185__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37185 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37186__i = 0, G__37186__a = new Array(arguments.length -  0);
while (G__37186__i < G__37186__a.length) {G__37186__a[G__37186__i] = arguments[G__37186__i + 0]; ++G__37186__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37186__a,0,null);
} 
return G__37185__delegate.call(this,args__30723__auto__);};
G__37185.cljs$lang$maxFixedArity = 0;
G__37185.cljs$lang$applyTo = (function (arglist__37187){
var args__30723__auto__ = cljs.core.seq(arglist__37187);
return G__37185__delegate(args__30723__auto__);
});
G__37185.cljs$core$IFn$_invoke$arity$variadic = G__37185__delegate;
return G__37185;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37171_37175,_STAR_current_length_STAR__orig_val__37172_37176,_STAR_current_level_STAR__temp_val__37173_37177,_STAR_current_length_STAR__temp_val__37174_37178,vec__37162,seq__37163,first__37164,seq__37163__$1,ns_sym,first__37164__$1,seq__37163__$2,ns_name,stuff,vec__37165,doc_str,stuff__$1,vec__37168,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_37188__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_37188__$1));

var temp__5720__auto___37189 = cljs.core.next.call(null,references_37188__$1);
if(temp__5720__auto___37189){
var references_37190__$2 = temp__5720__auto___37189;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__37191 = references_37190__$2;
references_37188__$1 = G__37191;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37172_37176;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37171_37175;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__30721__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37192__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37192 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37193__i = 0, G__37193__a = new Array(arguments.length -  0);
while (G__37193__i < G__37193__a.length) {G__37193__a[G__37193__i] = arguments[G__37193__i + 0]; ++G__37193__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37193__a,0,null);
} 
return G__37192__delegate.call(this,args__30723__auto__);};
G__37192.cljs$lang$maxFixedArity = 0;
G__37192.cljs$lang$applyTo = (function (arglist__37194){
var args__30723__auto__ = cljs.core.seq(arglist__37194);
return G__37192__delegate(args__30723__auto__);
});
G__37192.cljs$core$IFn$_invoke$arity$variadic = G__37192__delegate;
return G__37192;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__30721__auto__ = " ~_";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37195__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37195 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37196__i = 0, G__37196__a = new Array(arguments.length -  0);
while (G__37196__i < G__37196__a.length) {G__37196__a[G__37196__i] = arguments[G__37196__i + 0]; ++G__37196__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37196__a,0,null);
} 
return G__37195__delegate.call(this,args__30723__auto__);};
G__37195.cljs$lang$maxFixedArity = 0;
G__37195.cljs$lang$applyTo = (function (arglist__37197){
var args__30723__auto__ = cljs.core.seq(arglist__37197);
return G__37195__delegate(args__30723__auto__);
});
G__37195.cljs$core$IFn$_invoke$arity$variadic = G__37195__delegate;
return G__37195;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
})().call(null);
} else {
(function (){var format_in__30721__auto__ = " ~@_";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37198__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37198 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37199__i = 0, G__37199__a = new Array(arguments.length -  0);
while (G__37199__i < G__37199__a.length) {G__37199__a[G__37199__i] = arguments[G__37199__i + 0]; ++G__37199__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37199__a,0,null);
} 
return G__37198__delegate.call(this,args__30723__auto__);};
G__37198.cljs$lang$maxFixedArity = 0;
G__37198.cljs$lang$applyTo = (function (arglist__37200){
var args__30723__auto__ = cljs.core.seq(arglist__37200);
return G__37198__delegate(args__30723__auto__);
});
G__37198.cljs$core$IFn$_invoke$arity$variadic = G__37198__delegate;
return G__37198;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
})().call(null);
}

return (function (){var format_in__30721__auto__ = "~{~w~^ ~_~}";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37201__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37201 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37202__i = 0, G__37202__a = new Array(arguments.length -  0);
while (G__37202__i < G__37202__a.length) {G__37202__a[G__37202__i] = arguments[G__37202__i + 0]; ++G__37202__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37202__a,0,null);
} 
return G__37201__delegate.call(this,args__30723__auto__);};
G__37201.cljs$lang$maxFixedArity = 0;
G__37201.cljs$lang$applyTo = (function (arglist__37203){
var args__30723__auto__ = cljs.core.seq(arglist__37203);
return G__37201__delegate(args__30723__auto__);
});
G__37201.cljs$core$IFn$_invoke$arity$variadic = G__37201__delegate;
return G__37201;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__30721__auto__ = " ~_~{~w~^ ~_~}";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37204__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37204 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37205__i = 0, G__37205__a = new Array(arguments.length -  0);
while (G__37205__i < G__37205__a.length) {G__37205__a[G__37205__i] = arguments[G__37205__i + 0]; ++G__37205__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37205__a,0,null);
} 
return G__37204__delegate.call(this,args__30723__auto__);};
G__37204.cljs$lang$maxFixedArity = 0;
G__37204.cljs$lang$applyTo = (function (arglist__37206){
var args__30723__auto__ = cljs.core.seq(arglist__37206);
return G__37204__delegate(args__30723__auto__);
});
G__37204.cljs$core$IFn$_invoke$arity$variadic = G__37204__delegate;
return G__37204;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__37207 = alis;
var seq__37208 = cljs.core.seq.call(null,vec__37207);
var first__37209 = cljs.core.first.call(null,seq__37208);
var seq__37208__$1 = cljs.core.next.call(null,seq__37208);
var defn_sym = first__37209;
var first__37209__$1 = cljs.core.first.call(null,seq__37208__$1);
var seq__37208__$2 = cljs.core.next.call(null,seq__37208__$1);
var defn_name = first__37209__$1;
var stuff = seq__37208__$2;
var vec__37210 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__37210,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__37210,(1),null);
var vec__37213 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__37213,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__37213,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37216_37220 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37217_37221 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37218_37222 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37219_37223 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37218_37222;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37219_37223;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__30721__auto__ = "~w ~1I~@_~w";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37216_37220,_STAR_current_length_STAR__orig_val__37217_37221,_STAR_current_level_STAR__temp_val__37218_37222,_STAR_current_length_STAR__temp_val__37219_37223,vec__37207,seq__37208,first__37209,seq__37208__$1,defn_sym,first__37209__$1,seq__37208__$2,defn_name,stuff,vec__37210,doc_str,stuff__$1,vec__37213,attr_map,stuff__$2){
return (function() { 
var G__37224__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37224 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37225__i = 0, G__37225__a = new Array(arguments.length -  0);
while (G__37225__i < G__37225__a.length) {G__37225__a[G__37225__i] = arguments[G__37225__i + 0]; ++G__37225__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37225__a,0,null);
} 
return G__37224__delegate.call(this,args__30723__auto__);};
G__37224.cljs$lang$maxFixedArity = 0;
G__37224.cljs$lang$applyTo = (function (arglist__37226){
var args__30723__auto__ = cljs.core.seq(arglist__37226);
return G__37224__delegate(args__30723__auto__);
});
G__37224.cljs$core$IFn$_invoke$arity$variadic = G__37224__delegate;
return G__37224;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37216_37220,_STAR_current_length_STAR__orig_val__37217_37221,_STAR_current_level_STAR__temp_val__37218_37222,_STAR_current_length_STAR__temp_val__37219_37223,vec__37207,seq__37208,first__37209,seq__37208__$1,defn_sym,first__37209__$1,seq__37208__$2,defn_name,stuff,vec__37210,doc_str,stuff__$1,vec__37213,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__30721__auto__ = " ~_~w";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37216_37220,_STAR_current_length_STAR__orig_val__37217_37221,_STAR_current_level_STAR__temp_val__37218_37222,_STAR_current_length_STAR__temp_val__37219_37223,vec__37207,seq__37208,first__37209,seq__37208__$1,defn_sym,first__37209__$1,seq__37208__$2,defn_name,stuff,vec__37210,doc_str,stuff__$1,vec__37213,attr_map,stuff__$2){
return (function() { 
var G__37227__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37227 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37228__i = 0, G__37228__a = new Array(arguments.length -  0);
while (G__37228__i < G__37228__a.length) {G__37228__a[G__37228__i] = arguments[G__37228__i + 0]; ++G__37228__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37228__a,0,null);
} 
return G__37227__delegate.call(this,args__30723__auto__);};
G__37227.cljs$lang$maxFixedArity = 0;
G__37227.cljs$lang$applyTo = (function (arglist__37229){
var args__30723__auto__ = cljs.core.seq(arglist__37229);
return G__37227__delegate(args__30723__auto__);
});
G__37227.cljs$core$IFn$_invoke$arity$variadic = G__37227__delegate;
return G__37227;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37216_37220,_STAR_current_length_STAR__orig_val__37217_37221,_STAR_current_level_STAR__temp_val__37218_37222,_STAR_current_length_STAR__temp_val__37219_37223,vec__37207,seq__37208,first__37209,seq__37208__$1,defn_sym,first__37209__$1,seq__37208__$2,defn_name,stuff,vec__37210,doc_str,stuff__$1,vec__37213,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__30721__auto__ = " ~_~w";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37216_37220,_STAR_current_length_STAR__orig_val__37217_37221,_STAR_current_level_STAR__temp_val__37218_37222,_STAR_current_length_STAR__temp_val__37219_37223,vec__37207,seq__37208,first__37209,seq__37208__$1,defn_sym,first__37209__$1,seq__37208__$2,defn_name,stuff,vec__37210,doc_str,stuff__$1,vec__37213,attr_map,stuff__$2){
return (function() { 
var G__37230__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37230 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37231__i = 0, G__37231__a = new Array(arguments.length -  0);
while (G__37231__i < G__37231__a.length) {G__37231__a[G__37231__i] = arguments[G__37231__i + 0]; ++G__37231__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37231__a,0,null);
} 
return G__37230__delegate.call(this,args__30723__auto__);};
G__37230.cljs$lang$maxFixedArity = 0;
G__37230.cljs$lang$applyTo = (function (arglist__37232){
var args__30723__auto__ = cljs.core.seq(arglist__37232);
return G__37230__delegate(args__30723__auto__);
});
G__37230.cljs$core$IFn$_invoke$arity$variadic = G__37230__delegate;
return G__37230;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37216_37220,_STAR_current_length_STAR__orig_val__37217_37221,_STAR_current_level_STAR__temp_val__37218_37222,_STAR_current_length_STAR__temp_val__37219_37223,vec__37207,seq__37208,first__37209,seq__37208__$1,defn_sym,first__37209__$1,seq__37208__$2,defn_name,stuff,vec__37210,doc_str,stuff__$1,vec__37213,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__4002__auto__ = doc_str;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__4002__auto__ = doc_str;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37217_37221;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37216_37220;
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
var _STAR_current_level_STAR__orig_val__37233_37242 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37234_37243 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37235_37244 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37236_37245 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37235_37244;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37236_37245;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count37237_37246 = (0);
var binding_37247 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count37237_37246 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_37247)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37238_37248 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37239_37249 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37240_37250 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37241_37251 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37240_37250;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37241_37251;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_37247));

if(cljs.core.next.call(null,binding_37247)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_37247));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37239_37249;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37238_37248;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_37247))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__37252 = (length_count37237_37246 + (1));
var G__37253 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_37247));
length_count37237_37246 = G__37252;
binding_37247 = G__37253;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37234_37243;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37233_37242;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37254_37258 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37255_37259 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37256_37260 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37257_37261 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37256_37260;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37257_37261;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
(function (){var format_in__30721__auto__ = "~w ~1I~@_";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37254_37258,_STAR_current_length_STAR__orig_val__37255_37259,_STAR_current_level_STAR__temp_val__37256_37260,_STAR_current_length_STAR__temp_val__37257_37261,base_sym){
return (function() { 
var G__37262__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37262 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37263__i = 0, G__37263__a = new Array(arguments.length -  0);
while (G__37263__i < G__37263__a.length) {G__37263__a[G__37263__i] = arguments[G__37263__i + 0]; ++G__37263__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37263__a,0,null);
} 
return G__37262__delegate.call(this,args__30723__auto__);};
G__37262.cljs$lang$maxFixedArity = 0;
G__37262.cljs$lang$applyTo = (function (arglist__37264){
var args__30723__auto__ = cljs.core.seq(arglist__37264);
return G__37262__delegate(args__30723__auto__);
});
G__37262.cljs$core$IFn$_invoke$arity$variadic = G__37262__delegate;
return G__37262;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37254_37258,_STAR_current_length_STAR__orig_val__37255_37259,_STAR_current_level_STAR__temp_val__37256_37260,_STAR_current_length_STAR__temp_val__37257_37261,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__30721__auto__ = " ~_~{~w~^ ~_~}";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37254_37258,_STAR_current_length_STAR__orig_val__37255_37259,_STAR_current_level_STAR__temp_val__37256_37260,_STAR_current_length_STAR__temp_val__37257_37261,base_sym){
return (function() { 
var G__37265__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37265 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37266__i = 0, G__37266__a = new Array(arguments.length -  0);
while (G__37266__i < G__37266__a.length) {G__37266__a[G__37266__i] = arguments[G__37266__i + 0]; ++G__37266__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37266__a,0,null);
} 
return G__37265__delegate.call(this,args__30723__auto__);};
G__37265.cljs$lang$maxFixedArity = 0;
G__37265.cljs$lang$applyTo = (function (arglist__37267){
var args__30723__auto__ = cljs.core.seq(arglist__37267);
return G__37265__delegate(args__30723__auto__);
});
G__37265.cljs$core$IFn$_invoke$arity$variadic = G__37265__delegate;
return G__37265;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37254_37258,_STAR_current_length_STAR__orig_val__37255_37259,_STAR_current_level_STAR__temp_val__37256_37260,_STAR_current_length_STAR__temp_val__37257_37261,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37255_37259;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37254_37258;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__30721__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__){
return (function() { 
var G__37268__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37268 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37269__i = 0, G__37269__a = new Array(arguments.length -  0);
while (G__37269__i < G__37269__a.length) {G__37269__a[G__37269__i] = arguments[G__37269__i + 0]; ++G__37269__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37269__a,0,null);
} 
return G__37268__delegate.call(this,args__30723__auto__);};
G__37268.cljs$lang$maxFixedArity = 0;
G__37268.cljs$lang$applyTo = (function (arglist__37270){
var args__30723__auto__ = cljs.core.seq(arglist__37270);
return G__37268__delegate(args__30723__auto__);
});
G__37268.cljs$core$IFn$_invoke$arity$variadic = G__37268__delegate;
return G__37268;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37271_37280 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37272_37281 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37273_37282 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37274_37283 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37273_37282;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37274_37283;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count37275_37284 = (0);
var alis_37285__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count37275_37284 < cljs.core._STAR_print_length_STAR_)))){
if(alis_37285__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37276_37286 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37277_37287 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37278_37288 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37279_37289 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37278_37288;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37279_37289;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_37285__$1));

if(cljs.core.next.call(null,alis_37285__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_37285__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37277_37287;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37276_37286;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_37285__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__37290 = (length_count37275_37284 + (1));
var G__37291 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_37285__$1));
length_count37275_37284 = G__37290;
alis_37285__$1 = G__37291;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37272_37281;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37271_37280;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37292_37301 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37293_37302 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37294_37303 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37295_37304 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37294_37303;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37295_37304;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__30721__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37292_37301,_STAR_current_length_STAR__orig_val__37293_37302,_STAR_current_level_STAR__temp_val__37294_37303,_STAR_current_length_STAR__temp_val__37295_37304){
return (function() { 
var G__37305__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37305 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37306__i = 0, G__37306__a = new Array(arguments.length -  0);
while (G__37306__i < G__37306__a.length) {G__37306__a[G__37306__i] = arguments[G__37306__i + 0]; ++G__37306__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37306__a,0,null);
} 
return G__37305__delegate.call(this,args__30723__auto__);};
G__37305.cljs$lang$maxFixedArity = 0;
G__37305.cljs$lang$applyTo = (function (arglist__37307){
var args__30723__auto__ = cljs.core.seq(arglist__37307);
return G__37305__delegate(args__30723__auto__);
});
G__37305.cljs$core$IFn$_invoke$arity$variadic = G__37305__delegate;
return G__37305;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_current_level_STAR__orig_val__37292_37301,_STAR_current_length_STAR__orig_val__37293_37302,_STAR_current_level_STAR__temp_val__37294_37303,_STAR_current_length_STAR__temp_val__37295_37304))
})(),alis);

var length_count37296_37308 = (0);
var alis_37309__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count37296_37308 < cljs.core._STAR_print_length_STAR_)))){
if(alis_37309__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37297_37310 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37298_37311 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37299_37312 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37300_37313 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37299_37312;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37300_37313;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_37309__$1));

if(cljs.core.next.call(null,alis_37309__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_37309__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37298_37311;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37297_37310;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_37309__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__37314 = (length_count37296_37308 + (1));
var G__37315 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_37309__$1));
length_count37296_37308 = G__37314;
alis_37309__$1 = G__37315;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37293_37302;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37292_37301;
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
var _STAR_symbol_map_STAR__orig_val__37318 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__37319 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR__orig_val__37318,args,nlis){
return (function (p1__37316_SHARP_,p2__37317_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__37316_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37317_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__37318,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__37319;

try{return (function (){var format_in__30721__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__30722__auto__ = ((typeof format_in__30721__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30721__auto__):format_in__30721__auto__);
return ((function (format_in__30721__auto__,cf__30722__auto__,_STAR_symbol_map_STAR__orig_val__37318,_STAR_symbol_map_STAR__temp_val__37319,args,nlis){
return (function() { 
var G__37320__delegate = function (args__30723__auto__){
var navigator__30724__auto__ = cljs.pprint.init_navigator.call(null,args__30723__auto__);
return cljs.pprint.execute_format.call(null,cf__30722__auto__,navigator__30724__auto__);
};
var G__37320 = function (var_args){
var args__30723__auto__ = null;
if (arguments.length > 0) {
var G__37321__i = 0, G__37321__a = new Array(arguments.length -  0);
while (G__37321__i < G__37321__a.length) {G__37321__a[G__37321__i] = arguments[G__37321__i + 0]; ++G__37321__i;}
  args__30723__auto__ = new cljs.core.IndexedSeq(G__37321__a,0,null);
} 
return G__37320__delegate.call(this,args__30723__auto__);};
G__37320.cljs$lang$maxFixedArity = 0;
G__37320.cljs$lang$applyTo = (function (arglist__37322){
var args__30723__auto__ = cljs.core.seq(arglist__37322);
return G__37320__delegate(args__30723__auto__);
});
G__37320.cljs$core$IFn$_invoke$arity$variadic = G__37320__delegate;
return G__37320;
})()
;
;})(format_in__30721__auto__,cf__30722__auto__,_STAR_symbol_map_STAR__orig_val__37318,_STAR_symbol_map_STAR__temp_val__37319,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__37318;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__37323_37328 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__37324_37329 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__37325_37330 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__37326_37331 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__37325_37330;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__37326_37331;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count37327_37332 = (0);
var alis_37333__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count37327_37332 < cljs.core._STAR_print_length_STAR_)))){
if(alis_37333__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_37333__$1));

if(cljs.core.next.call(null,alis_37333__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__37334 = (length_count37327_37332 + (1));
var G__37335 = cljs.core.next.call(null,alis_37333__$1);
length_count37327_37332 = G__37334;
alis_37333__$1 = G__37335;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__37324_37329;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__37323_37328;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4394__auto__ = (function cljs$pprint$two_forms_$_iter__37336(s__37337){
return (new cljs.core.LazySeq(null,(function (){
var s__37337__$1 = s__37337;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37337__$1);
if(temp__5720__auto__){
var s__37337__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37337__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__37337__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__37339 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__37338 = (0);
while(true){
if((i__37338 < size__4393__auto__)){
var x = cljs.core._nth.call(null,c__4392__auto__,i__37338);
cljs.core.chunk_append.call(null,b__37339,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__37340 = (i__37338 + (1));
i__37338 = G__37340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37339),cljs$pprint$two_forms_$_iter__37336.call(null,cljs.core.chunk_rest.call(null,s__37337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37339),null);
}
} else {
var x = cljs.core.first.call(null,s__37337__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__37336.call(null,cljs.core.rest.call(null,s__37337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__37341_SHARP_){
var vec__37342 = p1__37341_SHARP_;
var s = cljs.core.nth.call(null,vec__37342,(0),null);
var f = cljs.core.nth.call(null,vec__37342,(1),null);
if(cljs.core.not.call(null,(function (){var or__4002__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__37341_SHARP_;
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
cljs.pprint.code_dispatch = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
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
var padding = (function (){var x__4090__auto__ = (0);
var y__4091__auto__ = (width - cljs.core.count.call(null,s));
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__37349 = arguments.length;
switch (G__37349) {
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
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.call(null,(function (p1__37345_SHARP_){
return cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__37345_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,((function (widths){
return (function (p1__37346_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__37346_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__4394__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__37360(s__37361){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__37361__$1 = s__37361;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37361__$1);
if(temp__5720__auto__){
var s__37361__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37361__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__37361__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__37363 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__37362 = (0);
while(true){
if((i__37362 < size__4393__auto__)){
var vec__37364 = cljs.core._nth.call(null,c__4392__auto__,i__37362);
var col = cljs.core.nth.call(null,vec__37364,(0),null);
var width = cljs.core.nth.call(null,vec__37364,(1),null);
cljs.core.chunk_append.call(null,b__37363,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__37375 = (i__37362 + (1));
i__37362 = G__37375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37363),cljs$pprint$iter__37360.call(null,cljs.core.chunk_rest.call(null,s__37361__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37363),null);
}
} else {
var vec__37367 = cljs.core.first.call(null,s__37361__$2);
var col = cljs.core.nth.call(null,vec__37367,(0),null);
var width = cljs.core.nth.call(null,vec__37367,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__37360.call(null,cljs.core.rest.call(null,s__37361__$2)));
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
return iter__4394__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__4394__auto__,widths,spacers){
return (function (p1__37347_SHARP_){
return cljs.core.get.call(null,row,p1__37347_SHARP_);
});})(iter__4394__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__37370 = cljs.core.seq.call(null,rows);
var chunk__37371 = null;
var count__37372 = (0);
var i__37373 = (0);
while(true){
if((i__37373 < count__37372)){
var row = cljs.core._nth.call(null,chunk__37371,i__37373);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__37376 = seq__37370;
var G__37377 = chunk__37371;
var G__37378 = count__37372;
var G__37379 = (i__37373 + (1));
seq__37370 = G__37376;
chunk__37371 = G__37377;
count__37372 = G__37378;
i__37373 = G__37379;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37370);
if(temp__5720__auto__){
var seq__37370__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37370__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__37370__$1);
var G__37380 = cljs.core.chunk_rest.call(null,seq__37370__$1);
var G__37381 = c__4421__auto__;
var G__37382 = cljs.core.count.call(null,c__4421__auto__);
var G__37383 = (0);
seq__37370 = G__37380;
chunk__37371 = G__37381;
count__37372 = G__37382;
i__37373 = G__37383;
continue;
} else {
var row = cljs.core.first.call(null,seq__37370__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__37384 = cljs.core.next.call(null,seq__37370__$1);
var G__37385 = null;
var G__37386 = (0);
var G__37387 = (0);
seq__37370 = G__37384;
chunk__37371 = G__37385;
count__37372 = G__37386;
i__37373 = G__37387;
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
