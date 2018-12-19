// Compiled by ClojureScript 1.10.492 {}
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
var temp__5720__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
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
return (function (p__24492){
var vec__24493 = p__24492;
var k = cljs.core.nth.call(null,vec__24493,(0),null);
var v = cljs.core.nth.call(null,vec__24493,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__24496 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__24496)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__24496)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__24496)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__24496)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__24496)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__24496)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24496)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__24497){
var map__24498 = p__24497;
var map__24498__$1 = (((((!((map__24498 == null))))?(((((map__24498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24498):map__24498);
var request = map__24498__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4002__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__24500 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__24500,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__24500,response_type);

G__24500.setTimeoutInterval(timeout);

G__24500.setWithCredentials(send_credentials);

return G__24500;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__24501){
var map__24502 = p__24501;
var map__24502__$1 = (((((!((map__24502 == null))))?(((((map__24502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24502):map__24502);
var request = map__24502__$1;
var request_method = cljs.core.get.call(null,map__24502__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__24502__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__24502__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__24502__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__24502__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__24502__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4002__auto__ = request_method;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_24526 = ((function (channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__24504_24527 = xhr;
G__24504_24527.setProgressEventsEnabled(true);

G__24504_24527.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_24526,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__24504_24527.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_24526,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__20620__auto___24528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___24528,channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___24528,channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_24515){
var state_val_24516 = (state_24515[(1)]);
if((state_val_24516 === (1))){
var state_24515__$1 = state_24515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24515__$1,(2),cancel);
} else {
if((state_val_24516 === (2))){
var inst_24506 = (state_24515[(2)]);
var inst_24507 = xhr.isComplete();
var inst_24508 = cljs.core.not.call(null,inst_24507);
var state_24515__$1 = (function (){var statearr_24517 = state_24515;
(statearr_24517[(7)] = inst_24506);

return statearr_24517;
})();
if(inst_24508){
var statearr_24518_24529 = state_24515__$1;
(statearr_24518_24529[(1)] = (3));

} else {
var statearr_24519_24530 = state_24515__$1;
(statearr_24519_24530[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (3))){
var inst_24510 = xhr.abort();
var state_24515__$1 = state_24515;
var statearr_24520_24531 = state_24515__$1;
(statearr_24520_24531[(2)] = inst_24510);

(statearr_24520_24531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (4))){
var state_24515__$1 = state_24515;
var statearr_24521_24532 = state_24515__$1;
(statearr_24521_24532[(2)] = null);

(statearr_24521_24532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (5))){
var inst_24513 = (state_24515[(2)]);
var state_24515__$1 = state_24515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24515__$1,inst_24513);
} else {
return null;
}
}
}
}
}
});})(c__20620__auto___24528,channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__20453__auto__,c__20620__auto___24528,channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__20454__auto__ = null;
var cljs_http$core$xhr_$_state_machine__20454__auto____0 = (function (){
var statearr_24522 = [null,null,null,null,null,null,null,null];
(statearr_24522[(0)] = cljs_http$core$xhr_$_state_machine__20454__auto__);

(statearr_24522[(1)] = (1));

return statearr_24522;
});
var cljs_http$core$xhr_$_state_machine__20454__auto____1 = (function (state_24515){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_24515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e24523){if((e24523 instanceof Object)){
var ex__20457__auto__ = e24523;
var statearr_24524_24533 = state_24515;
(statearr_24524_24533[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24534 = state_24515;
state_24515 = G__24534;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__20454__auto__ = function(state_24515){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__20454__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__20454__auto____1.call(this,state_24515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__20454__auto____0;
cljs_http$core$xhr_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__20454__auto____1;
return cljs_http$core$xhr_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___24528,channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__20622__auto__ = (function (){var statearr_24525 = f__20621__auto__.call(null);
(statearr_24525[(6)] = c__20620__auto___24528);

return statearr_24525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___24528,channel,request_url,method,headers__$1,xhr,map__24502,map__24502__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__24535){
var map__24536 = p__24535;
var map__24536__$1 = (((((!((map__24536 == null))))?(((((map__24536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24536):map__24536);
var request = map__24536__$1;
var timeout = cljs.core.get.call(null,map__24536__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__24536__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__24536__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__24536__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_24549 = jsonp.send(null,((function (channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_24549], null));

if(cljs.core.truth_(cancel)){
var c__20620__auto___24550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___24550,req_24549,channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___24550,req_24549,channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_24542){
var state_val_24543 = (state_24542[(1)]);
if((state_val_24543 === (1))){
var state_24542__$1 = state_24542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24542__$1,(2),cancel);
} else {
if((state_val_24543 === (2))){
var inst_24539 = (state_24542[(2)]);
var inst_24540 = jsonp.cancel(req_24549);
var state_24542__$1 = (function (){var statearr_24544 = state_24542;
(statearr_24544[(7)] = inst_24539);

return statearr_24544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24542__$1,inst_24540);
} else {
return null;
}
}
});})(c__20620__auto___24550,req_24549,channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__20453__auto__,c__20620__auto___24550,req_24549,channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__20454__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__20454__auto____0 = (function (){
var statearr_24545 = [null,null,null,null,null,null,null,null];
(statearr_24545[(0)] = cljs_http$core$jsonp_$_state_machine__20454__auto__);

(statearr_24545[(1)] = (1));

return statearr_24545;
});
var cljs_http$core$jsonp_$_state_machine__20454__auto____1 = (function (state_24542){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_24542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e24546){if((e24546 instanceof Object)){
var ex__20457__auto__ = e24546;
var statearr_24547_24551 = state_24542;
(statearr_24547_24551[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24552 = state_24542;
state_24542 = G__24552;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__20454__auto__ = function(state_24542){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__20454__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__20454__auto____1.call(this,state_24542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__20454__auto____0;
cljs_http$core$jsonp_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__20454__auto____1;
return cljs_http$core$jsonp_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___24550,req_24549,channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__20622__auto__ = (function (){var statearr_24548 = f__20621__auto__.call(null);
(statearr_24548[(6)] = c__20620__auto___24550);

return statearr_24548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___24550,req_24549,channel,jsonp,map__24536,map__24536__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__24553){
var map__24554 = p__24553;
var map__24554__$1 = (((((!((map__24554 == null))))?(((((map__24554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24554):map__24554);
var request = map__24554__$1;
var request_method = cljs.core.get.call(null,map__24554__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
