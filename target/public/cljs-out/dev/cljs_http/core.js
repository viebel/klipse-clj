// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5823__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5823__auto__)){
var req = temp__5823__auto__;
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
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__25998){
var vec__25999 = p__25998;
var k = cljs.core.nth.call(null,vec__25999,(0),null);
var v = cljs.core.nth.call(null,vec__25999,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__26002 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__26002)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__26002)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__26002)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__26002)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__26002)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__26002)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26002)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__26003){
var map__26004 = p__26003;
var map__26004__$1 = cljs.core.__destructure_map.call(null,map__26004);
var request = map__26004__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__26004__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__26004__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__26004__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__26005 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__26005,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__26005,response_type);

G__26005.setTimeoutInterval(timeout);

G__26005.setWithCredentials(send_credentials);

return G__26005;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__26006){
var map__26007 = p__26006;
var map__26007__$1 = cljs.core.__destructure_map.call(null,map__26007);
var request = map__26007__$1;
var request_method = cljs.core.get.call(null,map__26007__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__26007__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__26007__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cancel = cljs.core.get.call(null,map__26007__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__26007__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__5002__auto__ = request_method;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
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
}));

if(cljs.core.truth_(progress)){
var listener_26031 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__26008_26032 = xhr;
G__26008_26032.setProgressEventsEnabled(true);

G__26008_26032.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_26031,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__26008_26032.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_26031,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__22108__auto___26033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_26019){
var state_val_26020 = (state_26019[(1)]);
if((state_val_26020 === (1))){
var state_26019__$1 = state_26019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26019__$1,(2),cancel);
} else {
if((state_val_26020 === (2))){
var inst_26010 = (state_26019[(2)]);
var inst_26011 = xhr.isComplete();
var inst_26012 = cljs.core.not.call(null,inst_26011);
var state_26019__$1 = (function (){var statearr_26021 = state_26019;
(statearr_26021[(7)] = inst_26010);

return statearr_26021;
})();
if(inst_26012){
var statearr_26022_26034 = state_26019__$1;
(statearr_26022_26034[(1)] = (3));

} else {
var statearr_26023_26035 = state_26019__$1;
(statearr_26023_26035[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (3))){
var inst_26014 = xhr.abort();
var state_26019__$1 = state_26019;
var statearr_26024_26036 = state_26019__$1;
(statearr_26024_26036[(2)] = inst_26014);

(statearr_26024_26036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (4))){
var state_26019__$1 = state_26019;
var statearr_26025_26037 = state_26019__$1;
(statearr_26025_26037[(2)] = null);

(statearr_26025_26037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (5))){
var inst_26017 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26019__$1,inst_26017);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__21984__auto__ = null;
var cljs_http$core$xhr_$_state_machine__21984__auto____0 = (function (){
var statearr_26026 = [null,null,null,null,null,null,null,null];
(statearr_26026[(0)] = cljs_http$core$xhr_$_state_machine__21984__auto__);

(statearr_26026[(1)] = (1));

return statearr_26026;
});
var cljs_http$core$xhr_$_state_machine__21984__auto____1 = (function (state_26019){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_26019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e26027){var ex__21987__auto__ = e26027;
var statearr_26028_26038 = state_26019;
(statearr_26028_26038[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_26019[(4)]))){
var statearr_26029_26039 = state_26019;
(statearr_26029_26039[(1)] = cljs.core.first.call(null,(state_26019[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26040 = state_26019;
state_26019 = G__26040;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__21984__auto__ = function(state_26019){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__21984__auto____1.call(this,state_26019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__21984__auto____0;
cljs_http$core$xhr_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__21984__auto____1;
return cljs_http$core$xhr_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_26030 = f__22109__auto__.call(null);
(statearr_26030[(6)] = c__22108__auto___26033);

return statearr_26030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__26041){
var map__26042 = p__26041;
var map__26042__$1 = cljs.core.__destructure_map.call(null,map__26042);
var request = map__26042__$1;
var timeout = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_26055 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_26055], null));

if(cljs.core.truth_(cancel)){
var c__22108__auto___26056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_26047){
var state_val_26048 = (state_26047[(1)]);
if((state_val_26048 === (1))){
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26047__$1,(2),cancel);
} else {
if((state_val_26048 === (2))){
var inst_26044 = (state_26047[(2)]);
var inst_26045 = jsonp.cancel(req_26055);
var state_26047__$1 = (function (){var statearr_26049 = state_26047;
(statearr_26049[(7)] = inst_26044);

return statearr_26049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26047__$1,inst_26045);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__21984__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__21984__auto____0 = (function (){
var statearr_26050 = [null,null,null,null,null,null,null,null];
(statearr_26050[(0)] = cljs_http$core$jsonp_$_state_machine__21984__auto__);

(statearr_26050[(1)] = (1));

return statearr_26050;
});
var cljs_http$core$jsonp_$_state_machine__21984__auto____1 = (function (state_26047){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_26047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e26051){var ex__21987__auto__ = e26051;
var statearr_26052_26057 = state_26047;
(statearr_26052_26057[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_26047[(4)]))){
var statearr_26053_26058 = state_26047;
(statearr_26053_26058[(1)] = cljs.core.first.call(null,(state_26047[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26059 = state_26047;
state_26047 = G__26059;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__21984__auto__ = function(state_26047){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__21984__auto____1.call(this,state_26047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__21984__auto____0;
cljs_http$core$jsonp_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__21984__auto____1;
return cljs_http$core$jsonp_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_26054 = f__22109__auto__.call(null);
(statearr_26054[(6)] = c__22108__auto___26056);

return statearr_26054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__26060){
var map__26061 = p__26060;
var map__26061__$1 = cljs.core.__destructure_map.call(null,map__26061);
var request = map__26061__$1;
var request_method = cljs.core.get.call(null,map__26061__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
