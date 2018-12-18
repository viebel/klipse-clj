// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_.call(null,(state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400 = (function (f,meta31401){
this.f = f;
this.meta31401 = meta31401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31402,meta31401__$1){
var self__ = this;
var _31402__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400(self__.f,meta31401__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31402){
var self__ = this;
var _31402__$1 = this;
return self__.meta31401;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31401","meta31401",-1180148649,null)], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers31400";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers31400");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers31400.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers31400 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers31400(f__$1,meta31401){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400(f__$1,meta31401));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers31400(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(0)).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e31403){if((e31403 instanceof Object)){
var ex = e31403;
cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(6)));

throw ex;
} else {
throw e31403;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5718__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){
var statearr_31404_31406 = state;
(statearr_31404_31406[(2)] = x);

(statearr_31404_31406[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__5718__auto__)){
var cb = temp__5718__auto__;
var statearr_31405_31407 = state;
(statearr_31405_31407[(2)] = cljs.core.deref.call(null,cb));

(statearr_31405_31407[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){
var statearr_31408_31410 = state;
(statearr_31408_31410[(2)] = ret_val);

(statearr_31408_31410[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__5718__auto__)){
var cb = temp__5718__auto__;
var statearr_31409_31411 = state;
(statearr_31409_31411[(2)] = cljs.core.deref.call(null,cb));

(statearr_31409_31411[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){
return null;
});})(c))
));
}

cljs.core.async.impl.protocols.close_BANG_.call(null,c);

return c;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18510__auto__,k__18511__auto__){
var self__ = this;
var this__18510__auto____$1 = this;
return this__18510__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18511__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18512__auto__,k31413,else__18513__auto__){
var self__ = this;
var this__18512__auto____$1 = this;
var G__31417 = k31413;
var G__31417__$1 = (((G__31417 instanceof cljs.core.Keyword))?G__31417.fqn:null);
switch (G__31417__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31413,else__18513__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__18529__auto__,f__18530__auto__,init__18531__auto__){
var self__ = this;
var this__18529__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__18529__auto____$1){
return (function (ret__18532__auto__,p__31418){
var vec__31419 = p__31418;
var k__18533__auto__ = cljs.core.nth.call(null,vec__31419,(0),null);
var v__18534__auto__ = cljs.core.nth.call(null,vec__31419,(1),null);
return f__18530__auto__.call(null,ret__18532__auto__,k__18533__auto__,v__18534__auto__);
});})(this__18529__auto____$1))
,init__18531__auto__,this__18529__auto____$1);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18524__auto__,writer__18525__auto__,opts__18526__auto__){
var self__ = this;
var this__18524__auto____$1 = this;
var pr_pair__18527__auto__ = ((function (this__18524__auto____$1){
return (function (keyval__18528__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,cljs.core.pr_writer,""," ","",opts__18526__auto__,keyval__18528__auto__);
});})(this__18524__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18525__auto__,pr_pair__18527__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__18526__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31412){
var self__ = this;
var G__31412__$1 = this;
return (new cljs.core.RecordIter((0),G__31412__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18508__auto__){
var self__ = this;
var this__18508__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18505__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18514__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18506__auto__){
var self__ = this;
var this__18506__auto____$1 = this;
var h__18278__auto__ = self__.__hash;
if((!((h__18278__auto__ == null)))){
return h__18278__auto__;
} else {
var h__18278__auto____$1 = ((function (h__18278__auto__,this__18506__auto____$1){
return (function (coll__18507__auto__){
return (846900531 ^ cljs.core.hash_unordered_coll.call(null,coll__18507__auto__));
});})(h__18278__auto__,this__18506__auto____$1))
.call(null,this__18506__auto____$1);
self__.__hash = h__18278__auto____$1;

return h__18278__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31414,other31415){
var self__ = this;
var this31414__$1 = this;
return (((!((other31415 == null)))) && ((this31414__$1.constructor === other31415.constructor)) && (cljs.core._EQ_.call(null,this31414__$1.catch_block,other31415.catch_block)) && (cljs.core._EQ_.call(null,this31414__$1.catch_exception,other31415.catch_exception)) && (cljs.core._EQ_.call(null,this31414__$1.finally_block,other31415.finally_block)) && (cljs.core._EQ_.call(null,this31414__$1.continue_block,other31415.continue_block)) && (cljs.core._EQ_.call(null,this31414__$1.prev,other31415.prev)) && (cljs.core._EQ_.call(null,this31414__$1.__extmap,other31415.__extmap)));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18519__auto__,k__18520__auto__){
var self__ = this;
var this__18519__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__18520__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18519__auto____$1),self__.__meta),k__18520__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18520__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18517__auto__,k__18518__auto__,G__31412){
var self__ = this;
var this__18517__auto____$1 = this;
var pred__31422 = cljs.core.keyword_identical_QMARK_;
var expr__31423 = k__18518__auto__;
if(cljs.core.truth_(pred__31422.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),expr__31423))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__31412,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31422.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),expr__31423))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__31412,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31422.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),expr__31423))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__31412,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31422.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),expr__31423))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__31412,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31422.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226),expr__31423))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__31412,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18518__auto__,G__31412),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18522__auto__){
var self__ = this;
var this__18522__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18509__auto__,G__31412){
var self__ = this;
var this__18509__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__31412,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18515__auto__,entry__18516__auto__){
var self__ = this;
var this__18515__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18516__auto__)){
return this__18515__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18516__auto__,(0)),cljs.core._nth.call(null,entry__18516__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18515__auto____$1,entry__18516__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Class","Class",2064526977,null)], null)),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__18555__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-helpers/ExceptionFrame",null,(1),null));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__18555__auto__,writer__18556__auto__){
return cljs.core._write.call(null,writer__18556__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/ExceptionFrame.
 */
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-helpers/ExceptionFrame, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__31416){
var extmap__18551__auto__ = (function (){var G__31425 = cljs.core.dissoc.call(null,G__31416,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226));
if(cljs.core.record_QMARK_.call(null,G__31416)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31425);
} else {
return G__31425;
}
})();
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__31416),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__31416),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__31416),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__31416),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__31416),null,cljs.core.not_empty.call(null,extmap__18551__auto__),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_31427 = state;
(statearr_31427[(4)] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(4))));

return statearr_31427;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(4));
var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(5));
if(cljs.core.truth_((function (){var and__17801__auto__ = exception;
if(cljs.core.truth_(and__17801__auto__)){
return cljs.core.not.call(null,exception_frame);
} else {
return and__17801__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__17801__auto__ = exception;
if(cljs.core.truth_(and__17801__auto__)){
var and__17801__auto____$1 = catch_block;
if(cljs.core.truth_(and__17801__auto____$1)){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),catch_exception)) || ((exception instanceof catch_exception)));
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
}
})())){
var statearr_31428 = state;
(statearr_31428[(1)] = catch_block);

(statearr_31428[(2)] = exception);

(statearr_31428[(5)] = null);

(statearr_31428[(4)] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null));

return statearr_31428;
} else {
if(cljs.core.truth_((function (){var and__17801__auto__ = exception;
if(cljs.core.truth_(and__17801__auto__)){
return ((cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))));
} else {
return and__17801__auto__;
}
})())){
var statearr_31429_31433 = state;
(statearr_31429_31433[(4)] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__31434 = state;
state = G__31434;
continue;
} else {
if(cljs.core.truth_((function (){var and__17801__auto__ = exception;
if(cljs.core.truth_(and__17801__auto__)){
var and__17801__auto____$1 = cljs.core.not.call(null,catch_block);
if(and__17801__auto____$1){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
}
})())){
var statearr_31430 = state;
(statearr_31430[(1)] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_31430[(4)] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_31430;
} else {
if(cljs.core.truth_((function (){var and__17801__auto__ = cljs.core.not.call(null,exception);
if(and__17801__auto__){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__17801__auto__;
}
})())){
var statearr_31431 = state;
(statearr_31431[(1)] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_31431[(4)] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_31431;
} else {
if(((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))))){
var statearr_31432 = state;
(statearr_31432[(1)] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_31432[(4)] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_31432;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map
