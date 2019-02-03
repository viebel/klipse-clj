// Compiled by ClojureScript 1.10.516 {}
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
return (function (p__24754){
var vec__24755 = p__24754;
var k = cljs.core.nth.call(null,vec__24755,(0),null);
var v = cljs.core.nth.call(null,vec__24755,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__24758 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__24758)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__24758)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__24758)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__24758)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__24758)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__24758)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24758)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__24759){
var map__24760 = p__24759;
var map__24760__$1 = (((((!((map__24760 == null))))?(((((map__24760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24760):map__24760);
var request = map__24760__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__24760__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__24760__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__24760__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__24762 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__24762,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__24762,response_type);

G__24762.setTimeoutInterval(timeout);

G__24762.setWithCredentials(send_credentials);

return G__24762;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__24763){
var map__24764 = p__24763;
var map__24764__$1 = (((((!((map__24764 == null))))?(((((map__24764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24764):map__24764);
var request = map__24764__$1;
var request_method = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
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
});})(channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_24788 = ((function (channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__24766_24789 = xhr;
G__24766_24789.setProgressEventsEnabled(true);

G__24766_24789.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_24788,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__24766_24789.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_24788,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__20882__auto___24790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24790,channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24790,channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_24777){
var state_val_24778 = (state_24777[(1)]);
if((state_val_24778 === (1))){
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(2),cancel);
} else {
if((state_val_24778 === (2))){
var inst_24768 = (state_24777[(2)]);
var inst_24769 = xhr.isComplete();
var inst_24770 = cljs.core.not.call(null,inst_24769);
var state_24777__$1 = (function (){var statearr_24779 = state_24777;
(statearr_24779[(7)] = inst_24768);

return statearr_24779;
})();
if(inst_24770){
var statearr_24780_24791 = state_24777__$1;
(statearr_24780_24791[(1)] = (3));

} else {
var statearr_24781_24792 = state_24777__$1;
(statearr_24781_24792[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (3))){
var inst_24772 = xhr.abort();
var state_24777__$1 = state_24777;
var statearr_24782_24793 = state_24777__$1;
(statearr_24782_24793[(2)] = inst_24772);

(statearr_24782_24793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (4))){
var state_24777__$1 = state_24777;
var statearr_24783_24794 = state_24777__$1;
(statearr_24783_24794[(2)] = null);

(statearr_24783_24794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (5))){
var inst_24775 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24777__$1,inst_24775);
} else {
return null;
}
}
}
}
}
});})(c__20882__auto___24790,channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__20715__auto__,c__20882__auto___24790,channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__20716__auto__ = null;
var cljs_http$core$xhr_$_state_machine__20716__auto____0 = (function (){
var statearr_24784 = [null,null,null,null,null,null,null,null];
(statearr_24784[(0)] = cljs_http$core$xhr_$_state_machine__20716__auto__);

(statearr_24784[(1)] = (1));

return statearr_24784;
});
var cljs_http$core$xhr_$_state_machine__20716__auto____1 = (function (state_24777){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24785){if((e24785 instanceof Object)){
var ex__20719__auto__ = e24785;
var statearr_24786_24795 = state_24777;
(statearr_24786_24795[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24796 = state_24777;
state_24777 = G__24796;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__20716__auto__ = function(state_24777){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__20716__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__20716__auto____1.call(this,state_24777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__20716__auto____0;
cljs_http$core$xhr_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__20716__auto____1;
return cljs_http$core$xhr_$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24790,channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__20884__auto__ = (function (){var statearr_24787 = f__20883__auto__.call(null);
(statearr_24787[(6)] = c__20882__auto___24790);

return statearr_24787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24790,channel,request_url,method,headers__$1,xhr,map__24764,map__24764__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__24797){
var map__24798 = p__24797;
var map__24798__$1 = (((((!((map__24798 == null))))?(((((map__24798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24798):map__24798);
var request = map__24798__$1;
var timeout = cljs.core.get.call(null,map__24798__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__24798__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__24798__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__24798__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_24811 = jsonp.send(null,((function (channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_24811], null));

if(cljs.core.truth_(cancel)){
var c__20882__auto___24812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24812,req_24811,channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24812,req_24811,channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_24804){
var state_val_24805 = (state_24804[(1)]);
if((state_val_24805 === (1))){
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24804__$1,(2),cancel);
} else {
if((state_val_24805 === (2))){
var inst_24801 = (state_24804[(2)]);
var inst_24802 = jsonp.cancel(req_24811);
var state_24804__$1 = (function (){var statearr_24806 = state_24804;
(statearr_24806[(7)] = inst_24801);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24804__$1,inst_24802);
} else {
return null;
}
}
});})(c__20882__auto___24812,req_24811,channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__20715__auto__,c__20882__auto___24812,req_24811,channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__20716__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__20716__auto____0 = (function (){
var statearr_24807 = [null,null,null,null,null,null,null,null];
(statearr_24807[(0)] = cljs_http$core$jsonp_$_state_machine__20716__auto__);

(statearr_24807[(1)] = (1));

return statearr_24807;
});
var cljs_http$core$jsonp_$_state_machine__20716__auto____1 = (function (state_24804){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24808){if((e24808 instanceof Object)){
var ex__20719__auto__ = e24808;
var statearr_24809_24813 = state_24804;
(statearr_24809_24813[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24814 = state_24804;
state_24804 = G__24814;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__20716__auto__ = function(state_24804){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__20716__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__20716__auto____1.call(this,state_24804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__20716__auto____0;
cljs_http$core$jsonp_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__20716__auto____1;
return cljs_http$core$jsonp_$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24812,req_24811,channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__20884__auto__ = (function (){var statearr_24810 = f__20883__auto__.call(null);
(statearr_24810[(6)] = c__20882__auto___24812);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24812,req_24811,channel,jsonp,map__24798,map__24798__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__24815){
var map__24816 = p__24815;
var map__24816__$1 = (((((!((map__24816 == null))))?(((((map__24816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24816):map__24816);
var request = map__24816__$1;
var request_method = cljs.core.get.call(null,map__24816__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
