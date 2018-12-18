// Compiled by ClojureScript 1.10.439 {}
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
return (function (p__22979){
var vec__22980 = p__22979;
var k = cljs.core.nth.call(null,vec__22980,(0),null);
var v = cljs.core.nth.call(null,vec__22980,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__22983 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__22983)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__22983)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__22983)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__22983)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__22983)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__22983)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22983)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__22984){
var map__22985 = p__22984;
var map__22985__$1 = (((((!((map__22985 == null))))?(((((map__22985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22985):map__22985);
var request = map__22985__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__22985__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__22985__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__22985__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__22987 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__22987,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__22987,response_type);

G__22987.setTimeoutInterval(timeout);

G__22987.setWithCredentials(send_credentials);

return G__22987;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__22988){
var map__22989 = p__22988;
var map__22989__$1 = (((((!((map__22989 == null))))?(((((map__22989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22989):map__22989);
var request = map__22989__$1;
var request_method = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4047__auto__ = request_method;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
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
});})(channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_23013 = ((function (channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__22991_23014 = xhr;
G__22991_23014.setProgressEventsEnabled(true);

G__22991_23014.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_23013,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__22991_23014.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_23013,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__19107__auto___23015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___23015,channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___23015,channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_23002){
var state_val_23003 = (state_23002[(1)]);
if((state_val_23003 === (1))){
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23002__$1,(2),cancel);
} else {
if((state_val_23003 === (2))){
var inst_22993 = (state_23002[(2)]);
var inst_22994 = xhr.isComplete();
var inst_22995 = cljs.core.not.call(null,inst_22994);
var state_23002__$1 = (function (){var statearr_23004 = state_23002;
(statearr_23004[(7)] = inst_22993);

return statearr_23004;
})();
if(inst_22995){
var statearr_23005_23016 = state_23002__$1;
(statearr_23005_23016[(1)] = (3));

} else {
var statearr_23006_23017 = state_23002__$1;
(statearr_23006_23017[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (3))){
var inst_22997 = xhr.abort();
var state_23002__$1 = state_23002;
var statearr_23007_23018 = state_23002__$1;
(statearr_23007_23018[(2)] = inst_22997);

(statearr_23007_23018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (4))){
var state_23002__$1 = state_23002;
var statearr_23008_23019 = state_23002__$1;
(statearr_23008_23019[(2)] = null);

(statearr_23008_23019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (5))){
var inst_23000 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23002__$1,inst_23000);
} else {
return null;
}
}
}
}
}
});})(c__19107__auto___23015,channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__18940__auto__,c__19107__auto___23015,channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__18941__auto__ = null;
var cljs_http$core$xhr_$_state_machine__18941__auto____0 = (function (){
var statearr_23009 = [null,null,null,null,null,null,null,null];
(statearr_23009[(0)] = cljs_http$core$xhr_$_state_machine__18941__auto__);

(statearr_23009[(1)] = (1));

return statearr_23009;
});
var cljs_http$core$xhr_$_state_machine__18941__auto____1 = (function (state_23002){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_23002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e23010){if((e23010 instanceof Object)){
var ex__18944__auto__ = e23010;
var statearr_23011_23020 = state_23002;
(statearr_23011_23020[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23021 = state_23002;
state_23002 = G__23021;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__18941__auto__ = function(state_23002){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__18941__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__18941__auto____1.call(this,state_23002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__18941__auto____0;
cljs_http$core$xhr_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__18941__auto____1;
return cljs_http$core$xhr_$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___23015,channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__19109__auto__ = (function (){var statearr_23012 = f__19108__auto__.call(null);
(statearr_23012[(6)] = c__19107__auto___23015);

return statearr_23012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___23015,channel,request_url,method,headers__$1,xhr,map__22989,map__22989__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__23022){
var map__23023 = p__23022;
var map__23023__$1 = (((((!((map__23023 == null))))?(((((map__23023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23023):map__23023);
var request = map__23023__$1;
var timeout = cljs.core.get.call(null,map__23023__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__23023__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__23023__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__23023__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_23036 = jsonp.send(null,((function (channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_23036], null));

if(cljs.core.truth_(cancel)){
var c__19107__auto___23037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___23037,req_23036,channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___23037,req_23036,channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_23029){
var state_val_23030 = (state_23029[(1)]);
if((state_val_23030 === (1))){
var state_23029__$1 = state_23029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23029__$1,(2),cancel);
} else {
if((state_val_23030 === (2))){
var inst_23026 = (state_23029[(2)]);
var inst_23027 = jsonp.cancel(req_23036);
var state_23029__$1 = (function (){var statearr_23031 = state_23029;
(statearr_23031[(7)] = inst_23026);

return statearr_23031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23029__$1,inst_23027);
} else {
return null;
}
}
});})(c__19107__auto___23037,req_23036,channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__18940__auto__,c__19107__auto___23037,req_23036,channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__18941__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__18941__auto____0 = (function (){
var statearr_23032 = [null,null,null,null,null,null,null,null];
(statearr_23032[(0)] = cljs_http$core$jsonp_$_state_machine__18941__auto__);

(statearr_23032[(1)] = (1));

return statearr_23032;
});
var cljs_http$core$jsonp_$_state_machine__18941__auto____1 = (function (state_23029){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_23029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e23033){if((e23033 instanceof Object)){
var ex__18944__auto__ = e23033;
var statearr_23034_23038 = state_23029;
(statearr_23034_23038[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23039 = state_23029;
state_23029 = G__23039;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__18941__auto__ = function(state_23029){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__18941__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__18941__auto____1.call(this,state_23029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__18941__auto____0;
cljs_http$core$jsonp_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__18941__auto____1;
return cljs_http$core$jsonp_$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___23037,req_23036,channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__19109__auto__ = (function (){var statearr_23035 = f__19108__auto__.call(null);
(statearr_23035[(6)] = c__19107__auto___23037);

return statearr_23035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___23037,req_23036,channel,jsonp,map__23023,map__23023__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__23040){
var map__23041 = p__23040;
var map__23041__$1 = (((((!((map__23041 == null))))?(((((map__23041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23041):map__23041);
var request = map__23041__$1;
var request_method = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
