// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__29411_29415 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29412_29416 = null;
var count__29413_29417 = (0);
var i__29414_29418 = (0);
while(true){
if((i__29414_29418 < count__29413_29417)){
var k_29419 = cljs.core._nth.call(null,chunk__29412_29416,i__29414_29418);
var v_29420 = (b[k_29419]);
(a[k_29419] = v_29420);


var G__29421 = seq__29411_29415;
var G__29422 = chunk__29412_29416;
var G__29423 = count__29413_29417;
var G__29424 = (i__29414_29418 + (1));
seq__29411_29415 = G__29421;
chunk__29412_29416 = G__29422;
count__29413_29417 = G__29423;
i__29414_29418 = G__29424;
continue;
} else {
var temp__5720__auto___29425 = cljs.core.seq.call(null,seq__29411_29415);
if(temp__5720__auto___29425){
var seq__29411_29426__$1 = temp__5720__auto___29425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29411_29426__$1)){
var c__18773__auto___29427 = cljs.core.chunk_first.call(null,seq__29411_29426__$1);
var G__29428 = cljs.core.chunk_rest.call(null,seq__29411_29426__$1);
var G__29429 = c__18773__auto___29427;
var G__29430 = cljs.core.count.call(null,c__18773__auto___29427);
var G__29431 = (0);
seq__29411_29415 = G__29428;
chunk__29412_29416 = G__29429;
count__29413_29417 = G__29430;
i__29414_29418 = G__29431;
continue;
} else {
var k_29432 = cljs.core.first.call(null,seq__29411_29426__$1);
var v_29433 = (b[k_29432]);
(a[k_29432] = v_29433);


var G__29434 = cljs.core.next.call(null,seq__29411_29426__$1);
var G__29435 = null;
var G__29436 = (0);
var G__29437 = (0);
seq__29411_29415 = G__29434;
chunk__29412_29416 = G__29435;
count__29413_29417 = G__29436;
i__29414_29418 = G__29437;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/MapBuilder");
});

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/VectorBuilder");
});

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__29439 = arguments.length;
switch (G__29439) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__29441 = (i + (2));
var G__29442 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29441;
ret = G__29442;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/KeywordHandler");
});

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/SymbolHandler");
});

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29443_29447 = cljs.core.seq.call(null,v);
var chunk__29444_29448 = null;
var count__29445_29449 = (0);
var i__29446_29450 = (0);
while(true){
if((i__29446_29450 < count__29445_29449)){
var x_29451 = cljs.core._nth.call(null,chunk__29444_29448,i__29446_29450);
ret.push(x_29451);


var G__29452 = seq__29443_29447;
var G__29453 = chunk__29444_29448;
var G__29454 = count__29445_29449;
var G__29455 = (i__29446_29450 + (1));
seq__29443_29447 = G__29452;
chunk__29444_29448 = G__29453;
count__29445_29449 = G__29454;
i__29446_29450 = G__29455;
continue;
} else {
var temp__5720__auto___29456 = cljs.core.seq.call(null,seq__29443_29447);
if(temp__5720__auto___29456){
var seq__29443_29457__$1 = temp__5720__auto___29456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29443_29457__$1)){
var c__18773__auto___29458 = cljs.core.chunk_first.call(null,seq__29443_29457__$1);
var G__29459 = cljs.core.chunk_rest.call(null,seq__29443_29457__$1);
var G__29460 = c__18773__auto___29458;
var G__29461 = cljs.core.count.call(null,c__18773__auto___29458);
var G__29462 = (0);
seq__29443_29447 = G__29459;
chunk__29444_29448 = G__29460;
count__29445_29449 = G__29461;
i__29446_29450 = G__29462;
continue;
} else {
var x_29463 = cljs.core.first.call(null,seq__29443_29457__$1);
ret.push(x_29463);


var G__29464 = cljs.core.next.call(null,seq__29443_29457__$1);
var G__29465 = null;
var G__29466 = (0);
var G__29467 = (0);
seq__29443_29447 = G__29464;
chunk__29444_29448 = G__29465;
count__29445_29449 = G__29466;
i__29446_29450 = G__29467;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/ListHandler");
});

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/MapHandler");
});

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29468_29472 = cljs.core.seq.call(null,v);
var chunk__29469_29473 = null;
var count__29470_29474 = (0);
var i__29471_29475 = (0);
while(true){
if((i__29471_29475 < count__29470_29474)){
var x_29476 = cljs.core._nth.call(null,chunk__29469_29473,i__29471_29475);
ret.push(x_29476);


var G__29477 = seq__29468_29472;
var G__29478 = chunk__29469_29473;
var G__29479 = count__29470_29474;
var G__29480 = (i__29471_29475 + (1));
seq__29468_29472 = G__29477;
chunk__29469_29473 = G__29478;
count__29470_29474 = G__29479;
i__29471_29475 = G__29480;
continue;
} else {
var temp__5720__auto___29481 = cljs.core.seq.call(null,seq__29468_29472);
if(temp__5720__auto___29481){
var seq__29468_29482__$1 = temp__5720__auto___29481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29468_29482__$1)){
var c__18773__auto___29483 = cljs.core.chunk_first.call(null,seq__29468_29482__$1);
var G__29484 = cljs.core.chunk_rest.call(null,seq__29468_29482__$1);
var G__29485 = c__18773__auto___29483;
var G__29486 = cljs.core.count.call(null,c__18773__auto___29483);
var G__29487 = (0);
seq__29468_29472 = G__29484;
chunk__29469_29473 = G__29485;
count__29470_29474 = G__29486;
i__29471_29475 = G__29487;
continue;
} else {
var x_29488 = cljs.core.first.call(null,seq__29468_29482__$1);
ret.push(x_29488);


var G__29489 = cljs.core.next.call(null,seq__29468_29482__$1);
var G__29490 = null;
var G__29491 = (0);
var G__29492 = (0);
seq__29468_29472 = G__29489;
chunk__29469_29473 = G__29490;
count__29470_29474 = G__29491;
i__29471_29475 = G__29492;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/SetHandler");
});

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29493_29497 = cljs.core.seq.call(null,v);
var chunk__29494_29498 = null;
var count__29495_29499 = (0);
var i__29496_29500 = (0);
while(true){
if((i__29496_29500 < count__29495_29499)){
var x_29501 = cljs.core._nth.call(null,chunk__29494_29498,i__29496_29500);
ret.push(x_29501);


var G__29502 = seq__29493_29497;
var G__29503 = chunk__29494_29498;
var G__29504 = count__29495_29499;
var G__29505 = (i__29496_29500 + (1));
seq__29493_29497 = G__29502;
chunk__29494_29498 = G__29503;
count__29495_29499 = G__29504;
i__29496_29500 = G__29505;
continue;
} else {
var temp__5720__auto___29506 = cljs.core.seq.call(null,seq__29493_29497);
if(temp__5720__auto___29506){
var seq__29493_29507__$1 = temp__5720__auto___29506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29493_29507__$1)){
var c__18773__auto___29508 = cljs.core.chunk_first.call(null,seq__29493_29507__$1);
var G__29509 = cljs.core.chunk_rest.call(null,seq__29493_29507__$1);
var G__29510 = c__18773__auto___29508;
var G__29511 = cljs.core.count.call(null,c__18773__auto___29508);
var G__29512 = (0);
seq__29493_29497 = G__29509;
chunk__29494_29498 = G__29510;
count__29495_29499 = G__29511;
i__29496_29500 = G__29512;
continue;
} else {
var x_29513 = cljs.core.first.call(null,seq__29493_29507__$1);
ret.push(x_29513);


var G__29514 = cljs.core.next.call(null,seq__29493_29507__$1);
var G__29515 = null;
var G__29516 = (0);
var G__29517 = (0);
seq__29493_29497 = G__29514;
chunk__29494_29498 = G__29515;
count__29495_29499 = G__29516;
i__29496_29500 = G__29517;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/VectorHandler");
});

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/UUIDHandler");
});

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__29519 = arguments.length;
switch (G__29519) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__29520 = obj;
G__29520.push(kfn.call(null,k),vfn.call(null,v));

return G__29520;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x29521 = cljs.core.clone.call(null,handlers);
x29521.forEach = ((function (x29521,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__29522 = cljs.core.seq.call(null,coll);
var chunk__29523 = null;
var count__29524 = (0);
var i__29525 = (0);
while(true){
if((i__29525 < count__29524)){
var vec__29532 = cljs.core._nth.call(null,chunk__29523,i__29525);
var k = cljs.core.nth.call(null,vec__29532,(0),null);
var v = cljs.core.nth.call(null,vec__29532,(1),null);
f.call(null,v,k);


var G__29539 = seq__29522;
var G__29540 = chunk__29523;
var G__29541 = count__29524;
var G__29542 = (i__29525 + (1));
seq__29522 = G__29539;
chunk__29523 = G__29540;
count__29524 = G__29541;
i__29525 = G__29542;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29522);
if(temp__5720__auto__){
var seq__29522__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29522__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__29522__$1);
var G__29543 = cljs.core.chunk_rest.call(null,seq__29522__$1);
var G__29544 = c__18773__auto__;
var G__29545 = cljs.core.count.call(null,c__18773__auto__);
var G__29546 = (0);
seq__29522 = G__29543;
chunk__29523 = G__29544;
count__29524 = G__29545;
i__29525 = G__29546;
continue;
} else {
var vec__29535 = cljs.core.first.call(null,seq__29522__$1);
var k = cljs.core.nth.call(null,vec__29535,(0),null);
var v = cljs.core.nth.call(null,vec__29535,(1),null);
f.call(null,v,k);


var G__29547 = cljs.core.next.call(null,seq__29522__$1);
var G__29548 = null;
var G__29549 = (0);
var G__29550 = (0);
seq__29522 = G__29547;
chunk__29523 = G__29548;
count__29524 = G__29549;
i__29525 = G__29550;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29521,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x29521;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__29552 = arguments.length;
switch (G__29552) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit29553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit29553 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta29554){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta29554 = meta29554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit29553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29555,meta29554__$1){
var self__ = this;
var _29555__$1 = this;
return (new cognitect.transit.t_cognitect$transit29553(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta29554__$1));
});

cognitect.transit.t_cognitect$transit29553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29555){
var self__ = this;
var _29555__$1 = this;
return self__.meta29554;
});

cognitect.transit.t_cognitect$transit29553.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29553.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29553.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29553.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta29554","meta29554",1593906494,null)], null);
});

cognitect.transit.t_cognitect$transit29553.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit29553.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit29553";

cognitect.transit.t_cognitect$transit29553.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cognitect.transit/t_cognitect$transit29553");
});

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit29553.
 */
cognitect.transit.__GT_t_cognitect$transit29553 = (function cognitect$transit$__GT_t_cognitect$transit29553(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29554){
return (new cognitect.transit.t_cognitect$transit29553(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29554));
});

}

return (new cognitect.transit.t_cognitect$transit29553(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__17816__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});

//# sourceMappingURL=transit.js.map
