// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__23726){
var vec__23727 = p__23726;
var k = cljs.core.nth.call(null,vec__23727,(0),null);
var v = cljs.core.nth.call(null,vec__23727,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__23730 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__23730)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__23730)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__23730)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__23730)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__23730)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__23730)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23730)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__23731){
var map__23732 = p__23731;
var map__23732__$1 = ((((!((map__23732 == null)))?(((((map__23732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23732):map__23732);
var request = map__23732__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__23732__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__23732__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__23732__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__23734 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__23734,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__23734,response_type);

G__23734.setTimeoutInterval(timeout);

G__23734.setWithCredentials(send_credentials);

return G__23734;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__23735){
var map__23736 = p__23735;
var map__23736__$1 = ((((!((map__23736 == null)))?(((((map__23736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23736):map__23736);
var request = map__23736__$1;
var request_method = cljs.core.get.call(null,map__23736__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__23736__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__23736__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__23736__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__23736__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__23736__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__3922__auto__ = request_method;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_23760 = ((function (channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__23738_23761 = xhr;
G__23738_23761.setProgressEventsEnabled(true);

G__23738_23761.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_23760,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__23738_23761.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_23760,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__17125__auto___23762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___23762,channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___23762,channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_23749){
var state_val_23750 = (state_23749[(1)]);
if((state_val_23750 === (1))){
var state_23749__$1 = state_23749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23749__$1,(2),cancel);
} else {
if((state_val_23750 === (2))){
var inst_23740 = (state_23749[(2)]);
var inst_23741 = xhr.isComplete();
var inst_23742 = cljs.core.not.call(null,inst_23741);
var state_23749__$1 = (function (){var statearr_23751 = state_23749;
(statearr_23751[(7)] = inst_23740);

return statearr_23751;
})();
if(inst_23742){
var statearr_23752_23763 = state_23749__$1;
(statearr_23752_23763[(1)] = (3));

} else {
var statearr_23753_23764 = state_23749__$1;
(statearr_23753_23764[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (3))){
var inst_23744 = xhr.abort();
var state_23749__$1 = state_23749;
var statearr_23754_23765 = state_23749__$1;
(statearr_23754_23765[(2)] = inst_23744);

(statearr_23754_23765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (4))){
var state_23749__$1 = state_23749;
var statearr_23755_23766 = state_23749__$1;
(statearr_23755_23766[(2)] = null);

(statearr_23755_23766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (5))){
var inst_23747 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23749__$1,inst_23747);
} else {
return null;
}
}
}
}
}
});})(c__17125__auto___23762,channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__16968__auto__,c__17125__auto___23762,channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__16969__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16969__auto____0 = (function (){
var statearr_23756 = [null,null,null,null,null,null,null,null];
(statearr_23756[(0)] = cljs_http$core$xhr_$_state_machine__16969__auto__);

(statearr_23756[(1)] = (1));

return statearr_23756;
});
var cljs_http$core$xhr_$_state_machine__16969__auto____1 = (function (state_23749){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_23749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e23757){if((e23757 instanceof Object)){
var ex__16972__auto__ = e23757;
var statearr_23758_23767 = state_23749;
(statearr_23758_23767[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23768 = state_23749;
state_23749 = G__23768;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16969__auto__ = function(state_23749){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16969__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16969__auto____1.call(this,state_23749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16969__auto____0;
cljs_http$core$xhr_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16969__auto____1;
return cljs_http$core$xhr_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___23762,channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__17127__auto__ = (function (){var statearr_23759 = f__17126__auto__.call(null);
(statearr_23759[(6)] = c__17125__auto___23762);

return statearr_23759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___23762,channel,request_url,method,headers__$1,xhr,map__23736,map__23736__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__23769){
var map__23770 = p__23769;
var map__23770__$1 = ((((!((map__23770 == null)))?(((((map__23770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23770):map__23770);
var request = map__23770__$1;
var timeout = cljs.core.get.call(null,map__23770__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__23770__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__23770__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__23770__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_23783 = jsonp.send(null,((function (channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_23783], null));

if(cljs.core.truth_(cancel)){
var c__17125__auto___23784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___23784,req_23783,channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___23784,req_23783,channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_23776){
var state_val_23777 = (state_23776[(1)]);
if((state_val_23777 === (1))){
var state_23776__$1 = state_23776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23776__$1,(2),cancel);
} else {
if((state_val_23777 === (2))){
var inst_23773 = (state_23776[(2)]);
var inst_23774 = jsonp.cancel(req_23783);
var state_23776__$1 = (function (){var statearr_23778 = state_23776;
(statearr_23778[(7)] = inst_23773);

return statearr_23778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23776__$1,inst_23774);
} else {
return null;
}
}
});})(c__17125__auto___23784,req_23783,channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__16968__auto__,c__17125__auto___23784,req_23783,channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__16969__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16969__auto____0 = (function (){
var statearr_23779 = [null,null,null,null,null,null,null,null];
(statearr_23779[(0)] = cljs_http$core$jsonp_$_state_machine__16969__auto__);

(statearr_23779[(1)] = (1));

return statearr_23779;
});
var cljs_http$core$jsonp_$_state_machine__16969__auto____1 = (function (state_23776){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_23776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e23780){if((e23780 instanceof Object)){
var ex__16972__auto__ = e23780;
var statearr_23781_23785 = state_23776;
(statearr_23781_23785[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23786 = state_23776;
state_23776 = G__23786;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16969__auto__ = function(state_23776){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16969__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16969__auto____1.call(this,state_23776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16969__auto____0;
cljs_http$core$jsonp_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16969__auto____1;
return cljs_http$core$jsonp_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___23784,req_23783,channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__17127__auto__ = (function (){var statearr_23782 = f__17126__auto__.call(null);
(statearr_23782[(6)] = c__17125__auto___23784);

return statearr_23782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___23784,req_23783,channel,jsonp,map__23770,map__23770__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__23787){
var map__23788 = p__23787;
var map__23788__$1 = ((((!((map__23788 == null)))?(((((map__23788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23788):map__23788);
var request = map__23788__$1;
var request_method = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
