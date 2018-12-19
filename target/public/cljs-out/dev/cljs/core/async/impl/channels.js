// Compiled by ClojureScript 1.10.492 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798 = (function (val,meta18799){
this.val = val;
this.meta18799 = meta18799;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18800,meta18799__$1){
var self__ = this;
var _18800__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798(self__.val,meta18799__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18800){
var self__ = this;
var _18800__$1 = this;
return self__.meta18799;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta18799","meta18799",-943115174,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels18798";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels18798");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels18798.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels18798 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels18798(val__$1,meta18799){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798(val__$1,meta18799));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18798(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async.impl.channels/PutBox");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4304__auto__ = (((this$ == null))?null:this$);
var m__4305__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,this$);
} else {
var m__4302__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_18812 = self__.puts.pop();
if((putter_18812 == null)){
} else {
var put_handler_18813 = putter_18812.handler;
var val_18814 = putter_18812.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_18813)){
var put_cb_18815 = cljs.core.async.impl.protocols.commit.call(null,put_handler_18813);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_18815,put_handler_18813,val_18814,putter_18812,this$__$1){
return (function (){
return put_cb_18815.call(null,true);
});})(put_cb_18815,put_handler_18813,val_18814,putter_18812,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__3991__auto__ = self__.buf;
if(cljs.core.truth_(and__3991__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__3991__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__18816 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__18816;
continue;
} else {
var G__18817 = takers;
takers = G__18817;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__18801_18818 = cljs.core.seq.call(null,take_cbs);
var chunk__18802_18819 = null;
var count__18803_18820 = (0);
var i__18804_18821 = (0);
while(true){
if((i__18804_18821 < count__18803_18820)){
var f_18822 = cljs.core._nth.call(null,chunk__18802_18819,i__18804_18821);
cljs.core.async.impl.dispatch.run.call(null,f_18822);


var G__18823 = seq__18801_18818;
var G__18824 = chunk__18802_18819;
var G__18825 = count__18803_18820;
var G__18826 = (i__18804_18821 + (1));
seq__18801_18818 = G__18823;
chunk__18802_18819 = G__18824;
count__18803_18820 = G__18825;
i__18804_18821 = G__18826;
continue;
} else {
var temp__5720__auto___18827 = cljs.core.seq.call(null,seq__18801_18818);
if(temp__5720__auto___18827){
var seq__18801_18828__$1 = temp__5720__auto___18827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18801_18828__$1)){
var c__4421__auto___18829 = cljs.core.chunk_first.call(null,seq__18801_18828__$1);
var G__18830 = cljs.core.chunk_rest.call(null,seq__18801_18828__$1);
var G__18831 = c__4421__auto___18829;
var G__18832 = cljs.core.count.call(null,c__4421__auto___18829);
var G__18833 = (0);
seq__18801_18818 = G__18830;
chunk__18802_18819 = G__18831;
count__18803_18820 = G__18832;
i__18804_18821 = G__18833;
continue;
} else {
var f_18834 = cljs.core.first.call(null,seq__18801_18828__$1);
cljs.core.async.impl.dispatch.run.call(null,f_18834);


var G__18835 = cljs.core.next.call(null,seq__18801_18828__$1);
var G__18836 = null;
var G__18837 = (0);
var G__18838 = (0);
seq__18801_18818 = G__18835;
chunk__18802_18819 = G__18836;
count__18803_18820 = G__18837;
i__18804_18821 = G__18838;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5718__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5718__auto__)){
var take_cb = temp__5718__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__18805 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__3991__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__3991__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__3991__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))){
var G__18839 = cbs__$1;
cbs = G__18839;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__18805,(0),null);
var cbs = cljs.core.nth.call(null,vec__18805,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__18808_18840 = cljs.core.seq.call(null,cbs);
var chunk__18809_18841 = null;
var count__18810_18842 = (0);
var i__18811_18843 = (0);
while(true){
if((i__18811_18843 < count__18810_18842)){
var cb_18844 = cljs.core._nth.call(null,chunk__18809_18841,i__18811_18843);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__18808_18840,chunk__18809_18841,count__18810_18842,i__18811_18843,cb_18844,val,vec__18805,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return cb_18844.call(null,true);
});})(seq__18808_18840,chunk__18809_18841,count__18810_18842,i__18811_18843,cb_18844,val,vec__18805,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__18845 = seq__18808_18840;
var G__18846 = chunk__18809_18841;
var G__18847 = count__18810_18842;
var G__18848 = (i__18811_18843 + (1));
seq__18808_18840 = G__18845;
chunk__18809_18841 = G__18846;
count__18810_18842 = G__18847;
i__18811_18843 = G__18848;
continue;
} else {
var temp__5720__auto___18849 = cljs.core.seq.call(null,seq__18808_18840);
if(temp__5720__auto___18849){
var seq__18808_18850__$1 = temp__5720__auto___18849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18808_18850__$1)){
var c__4421__auto___18851 = cljs.core.chunk_first.call(null,seq__18808_18850__$1);
var G__18852 = cljs.core.chunk_rest.call(null,seq__18808_18850__$1);
var G__18853 = c__4421__auto___18851;
var G__18854 = cljs.core.count.call(null,c__4421__auto___18851);
var G__18855 = (0);
seq__18808_18840 = G__18852;
chunk__18809_18841 = G__18853;
count__18810_18842 = G__18854;
i__18811_18843 = G__18855;
continue;
} else {
var cb_18856 = cljs.core.first.call(null,seq__18808_18850__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__18808_18840,chunk__18809_18841,count__18810_18842,i__18811_18843,cb_18856,seq__18808_18850__$1,temp__5720__auto___18849,val,vec__18805,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return cb_18856.call(null,true);
});})(seq__18808_18840,chunk__18809_18841,count__18810_18842,i__18811_18843,cb_18856,seq__18808_18850__$1,temp__5720__auto___18849,val,vec__18805,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__18857 = cljs.core.next.call(null,seq__18808_18850__$1);
var G__18858 = null;
var G__18859 = (0);
var G__18860 = (0);
seq__18808_18840 = G__18857;
chunk__18809_18841 = G__18858;
count__18810_18842 = G__18859;
i__18811_18843 = G__18860;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__3991__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__3991__auto__;
}
})())){
var has_val = (function (){var and__3991__auto__ = self__.buf;
if(cljs.core.truth_(and__3991__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__3991__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__3991__auto__ = self__.buf;
if(cljs.core.truth_(and__3991__auto__)){
return (self__.puts.length === (0));
} else {
return and__3991__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_18861 = self__.takes.pop();
if((taker_18861 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_18861)){
var take_cb_18862 = cljs.core.async.impl.protocols.commit.call(null,taker_18861);
var val_18863 = (cljs.core.truth_((function (){var and__3991__auto__ = self__.buf;
if(cljs.core.truth_(and__3991__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__3991__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_18862,val_18863,taker_18861,this$__$1){
return (function (){
return take_cb_18862.call(null,val_18863);
});})(take_cb_18862,val_18863,taker_18861,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4002__auto__ = exh;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__18865 = arguments.length;
switch (G__18865) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__18869 = null;
var G__18869__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e18866){var t = e18866;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__18869__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e18867){var t = e18867;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__18869 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__18869__1.call(this,buf__$1);
case 2:
return G__18869__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18869.cljs$core$IFn$_invoke$arity$1 = G__18869__1;
G__18869.cljs$core$IFn$_invoke$arity$2 = G__18869__2;
return G__18869;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map
