// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__17804__auto__ = v;
if(cljs.core.truth_(and__17804__auto__)){
return (v > (0));
} else {
return and__17804__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_.call(null,s)))){
return cljs.core.reduce.call(null,(function (p1__25298_SHARP_,p2__25297_SHARP_){
var vec__25299 = clojure.string.split.call(null,p2__25297_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__25299,(0),null);
var v = cljs.core.nth.call(null,vec__25299,(1),null);
return cljs.core.assoc.call(null,p1__25298_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_.call(null,url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__25302_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__25302_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__25303){
var vec__25304 = p__25303;
var k = cljs.core.nth.call(null,vec__25304,(0),null);
var v = cljs.core.nth.call(null,vec__25304,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__25307_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25307_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__17804__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__17804__auto__){
var and__17804__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__17804__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type","")));
} else {
return and__17804__auto____$1;
}
} else {
return and__17804__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__25308_SHARP_){
return cljs_http.client.decode_body.call(null,p1__25308_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25315 = arguments.length;
var i__19129__auto___25316 = (0);
while(true){
if((i__19129__auto___25316 < len__19128__auto___25315)){
args__19138__auto__.push((arguments[i__19129__auto___25316]));

var G__25317 = (i__19129__auto___25316 + (1));
i__19129__auto___25316 = G__25317;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25311){
var vec__25312 = p__25311;
var default_headers = cljs.core.nth.call(null,vec__25312,(0),null);
return ((function (vec__25312,default_headers){
return (function (request){
var temp__5718__auto__ = (function (){var or__17819__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var default_headers__$1 = temp__5718__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__25312,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq25309){
var G__25310 = cljs.core.first.call(null,seq25309);
var seq25309__$1 = cljs.core.next.call(null,seq25309);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25310,seq25309__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25324 = arguments.length;
var i__19129__auto___25325 = (0);
while(true){
if((i__19129__auto___25325 < len__19128__auto___25324)){
args__19138__auto__.push((arguments[i__19129__auto___25325]));

var G__25326 = (i__19129__auto___25325 + (1));
i__19129__auto___25325 = G__25326;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25320){
var vec__25321 = p__25320;
var accept = cljs.core.nth.call(null,vec__25321,(0),null);
return ((function (vec__25321,accept){
return (function (request){
var temp__5718__auto__ = (function (){var or__17819__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var accept__$1 = temp__5718__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__25321,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq25318){
var G__25319 = cljs.core.first.call(null,seq25318);
var seq25318__$1 = cljs.core.next.call(null,seq25318);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25319,seq25318__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25333 = arguments.length;
var i__19129__auto___25334 = (0);
while(true){
if((i__19129__auto___25334 < len__19128__auto___25333)){
args__19138__auto__.push((arguments[i__19129__auto___25334]));

var G__25335 = (i__19129__auto___25334 + (1));
i__19129__auto___25334 = G__25335;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25329){
var vec__25330 = p__25329;
var content_type = cljs.core.nth.call(null,vec__25330,(0),null);
return ((function (vec__25330,content_type){
return (function (request){
var temp__5718__auto__ = (function (){var or__17819__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var content_type__$1 = temp__5718__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__25330,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq25327){
var G__25328 = cljs.core.first.call(null,seq25327);
var seq25327__$1 = cljs.core.next.call(null,seq25327);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25328,seq25327__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var map__25336 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__25336__$1 = (((((!((map__25336 == null))))?(((((map__25336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25336):map__25336);
var encoding = cljs.core.get.call(null,map__25336__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__25336__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__25340 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__25340__$1 = (((((!((map__25340 == null))))?(((((map__25340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25340):map__25340);
var decoding = cljs.core.get.call(null,map__25340__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__25340__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__25340,map__25340__$1,decoding,decoding_opts){
return (function (p1__25338_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__25338_SHARP_,decoding,decoding_opts);
});})(map__25340,map__25340__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__25340,map__25340__$1,decoding,decoding_opts,transit_decode){
return (function (p1__25339_SHARP_){
return cljs_http.client.decode_body.call(null,p1__25339_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__25340,map__25340__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__25342_SHARP_){
return cljs_http.client.decode_body.call(null,p1__25342_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__25343){
var map__25344 = p__25343;
var map__25344__$1 = (((((!((map__25344 == null))))?(((((map__25344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25344):map__25344);
var req = map__25344__$1;
var query_params = cljs.core.get.call(null,map__25344__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__25346){
var map__25347 = p__25346;
var map__25347__$1 = (((((!((map__25347 == null))))?(((((map__25347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25347):map__25347);
var request = map__25347__$1;
var form_params = cljs.core.get.call(null,map__25347__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__25347__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__25347__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__17804__auto__ = form_params;
if(cljs.core.truth_(and__17804__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__17804__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__25349_25365 = cljs.core.seq.call(null,params);
var chunk__25350_25366 = null;
var count__25351_25367 = (0);
var i__25352_25368 = (0);
while(true){
if((i__25352_25368 < count__25351_25367)){
var vec__25359_25369 = cljs.core._nth.call(null,chunk__25350_25366,i__25352_25368);
var k_25370 = cljs.core.nth.call(null,vec__25359_25369,(0),null);
var v_25371 = cljs.core.nth.call(null,vec__25359_25369,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_25371)){
form_data.append(cljs.core.name.call(null,k_25370),cljs.core.first.call(null,v_25371),cljs.core.second.call(null,v_25371));
} else {
form_data.append(cljs.core.name.call(null,k_25370),v_25371);
}


var G__25372 = seq__25349_25365;
var G__25373 = chunk__25350_25366;
var G__25374 = count__25351_25367;
var G__25375 = (i__25352_25368 + (1));
seq__25349_25365 = G__25372;
chunk__25350_25366 = G__25373;
count__25351_25367 = G__25374;
i__25352_25368 = G__25375;
continue;
} else {
var temp__5720__auto___25376 = cljs.core.seq.call(null,seq__25349_25365);
if(temp__5720__auto___25376){
var seq__25349_25377__$1 = temp__5720__auto___25376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25349_25377__$1)){
var c__18776__auto___25378 = cljs.core.chunk_first.call(null,seq__25349_25377__$1);
var G__25379 = cljs.core.chunk_rest.call(null,seq__25349_25377__$1);
var G__25380 = c__18776__auto___25378;
var G__25381 = cljs.core.count.call(null,c__18776__auto___25378);
var G__25382 = (0);
seq__25349_25365 = G__25379;
chunk__25350_25366 = G__25380;
count__25351_25367 = G__25381;
i__25352_25368 = G__25382;
continue;
} else {
var vec__25362_25383 = cljs.core.first.call(null,seq__25349_25377__$1);
var k_25384 = cljs.core.nth.call(null,vec__25362_25383,(0),null);
var v_25385 = cljs.core.nth.call(null,vec__25362_25383,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_25385)){
form_data.append(cljs.core.name.call(null,k_25384),cljs.core.first.call(null,v_25385),cljs.core.second.call(null,v_25385));
} else {
form_data.append(cljs.core.name.call(null,k_25384),v_25385);
}


var G__25386 = cljs.core.next.call(null,seq__25349_25377__$1);
var G__25387 = null;
var G__25388 = (0);
var G__25389 = (0);
seq__25349_25365 = G__25386;
chunk__25350_25366 = G__25387;
count__25351_25367 = G__25388;
i__25352_25368 = G__25389;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__25390){
var map__25391 = p__25390;
var map__25391__$1 = (((((!((map__25391 == null))))?(((((map__25391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25391):map__25391);
var request = map__25391__$1;
var multipart_params = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__17804__auto__ = multipart_params;
if(cljs.core.truth_(and__17804__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__17804__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5718__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__25393_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__25393_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__25395){
var map__25396 = p__25395;
var map__25396__$1 = (((((!((map__25396 == null))))?(((((map__25396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25396):map__25396);
var req = map__25396__$1;
var query_params = cljs.core.get.call(null,map__25396__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5718__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5718__auto__)){
var spec = temp__5718__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5718__auto__,map__25396,map__25396__$1,req,query_params){
return (function (p1__25394_SHARP_){
return cljs.core.merge.call(null,p1__25394_SHARP_,query_params);
});})(spec,temp__5718__auto__,map__25396,map__25396__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25404 = arguments.length;
var i__19129__auto___25405 = (0);
while(true){
if((i__19129__auto___25405 < len__19128__auto___25404)){
args__19138__auto__.push((arguments[i__19129__auto___25405]));

var G__25406 = (i__19129__auto___25405 + (1));
i__19129__auto___25405 = G__25406;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25400){
var vec__25401 = p__25400;
var credentials = cljs.core.nth.call(null,vec__25401,(0),null);
return ((function (vec__25401,credentials){
return (function (req){
var credentials__$1 = (function (){var or__17819__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_.call(null,credentials__$1)))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__25401,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq25398){
var G__25399 = cljs.core.first.call(null,seq25398);
var seq25398__$1 = cljs.core.next.call(null,seq25398);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25399,seq25398__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5718__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5718__auto__)){
var oauth_token = temp__5718__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var custom_channel = temp__5718__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25413 = arguments.length;
var i__19129__auto___25414 = (0);
while(true){
if((i__19129__auto___25414 < len__19128__auto___25413)){
args__19138__auto__.push((arguments[i__19129__auto___25414]));

var G__25415 = (i__19129__auto___25414 + (1));
i__19129__auto___25414 = G__25415;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25409){
var vec__25410 = p__25409;
var req = cljs.core.nth.call(null,vec__25410,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.delete$.cljs$lang$applyTo = (function (seq25407){
var G__25408 = cljs.core.first.call(null,seq25407);
var seq25407__$1 = cljs.core.next.call(null,seq25407);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25408,seq25407__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25422 = arguments.length;
var i__19129__auto___25423 = (0);
while(true){
if((i__19129__auto___25423 < len__19128__auto___25422)){
args__19138__auto__.push((arguments[i__19129__auto___25423]));

var G__25424 = (i__19129__auto___25423 + (1));
i__19129__auto___25423 = G__25424;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25418){
var vec__25419 = p__25418;
var req = cljs.core.nth.call(null,vec__25419,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.get.cljs$lang$applyTo = (function (seq25416){
var G__25417 = cljs.core.first.call(null,seq25416);
var seq25416__$1 = cljs.core.next.call(null,seq25416);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25417,seq25416__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25431 = arguments.length;
var i__19129__auto___25432 = (0);
while(true){
if((i__19129__auto___25432 < len__19128__auto___25431)){
args__19138__auto__.push((arguments[i__19129__auto___25432]));

var G__25433 = (i__19129__auto___25432 + (1));
i__19129__auto___25432 = G__25433;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25427){
var vec__25428 = p__25427;
var req = cljs.core.nth.call(null,vec__25428,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.head.cljs$lang$applyTo = (function (seq25425){
var G__25426 = cljs.core.first.call(null,seq25425);
var seq25425__$1 = cljs.core.next.call(null,seq25425);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25426,seq25425__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25440 = arguments.length;
var i__19129__auto___25441 = (0);
while(true){
if((i__19129__auto___25441 < len__19128__auto___25440)){
args__19138__auto__.push((arguments[i__19129__auto___25441]));

var G__25442 = (i__19129__auto___25441 + (1));
i__19129__auto___25441 = G__25442;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25436){
var vec__25437 = p__25436;
var req = cljs.core.nth.call(null,vec__25437,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq25434){
var G__25435 = cljs.core.first.call(null,seq25434);
var seq25434__$1 = cljs.core.next.call(null,seq25434);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25435,seq25434__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25449 = arguments.length;
var i__19129__auto___25450 = (0);
while(true){
if((i__19129__auto___25450 < len__19128__auto___25449)){
args__19138__auto__.push((arguments[i__19129__auto___25450]));

var G__25451 = (i__19129__auto___25450 + (1));
i__19129__auto___25450 = G__25451;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25445){
var vec__25446 = p__25445;
var req = cljs.core.nth.call(null,vec__25446,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.move.cljs$lang$applyTo = (function (seq25443){
var G__25444 = cljs.core.first.call(null,seq25443);
var seq25443__$1 = cljs.core.next.call(null,seq25443);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25444,seq25443__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25458 = arguments.length;
var i__19129__auto___25459 = (0);
while(true){
if((i__19129__auto___25459 < len__19128__auto___25458)){
args__19138__auto__.push((arguments[i__19129__auto___25459]));

var G__25460 = (i__19129__auto___25459 + (1));
i__19129__auto___25459 = G__25460;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25454){
var vec__25455 = p__25454;
var req = cljs.core.nth.call(null,vec__25455,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.options.cljs$lang$applyTo = (function (seq25452){
var G__25453 = cljs.core.first.call(null,seq25452);
var seq25452__$1 = cljs.core.next.call(null,seq25452);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25453,seq25452__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25467 = arguments.length;
var i__19129__auto___25468 = (0);
while(true){
if((i__19129__auto___25468 < len__19128__auto___25467)){
args__19138__auto__.push((arguments[i__19129__auto___25468]));

var G__25469 = (i__19129__auto___25468 + (1));
i__19129__auto___25468 = G__25469;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25463){
var vec__25464 = p__25463;
var req = cljs.core.nth.call(null,vec__25464,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.patch.cljs$lang$applyTo = (function (seq25461){
var G__25462 = cljs.core.first.call(null,seq25461);
var seq25461__$1 = cljs.core.next.call(null,seq25461);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25462,seq25461__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25476 = arguments.length;
var i__19129__auto___25477 = (0);
while(true){
if((i__19129__auto___25477 < len__19128__auto___25476)){
args__19138__auto__.push((arguments[i__19129__auto___25477]));

var G__25478 = (i__19129__auto___25477 + (1));
i__19129__auto___25477 = G__25478;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25472){
var vec__25473 = p__25472;
var req = cljs.core.nth.call(null,vec__25473,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.post.cljs$lang$applyTo = (function (seq25470){
var G__25471 = cljs.core.first.call(null,seq25470);
var seq25470__$1 = cljs.core.next.call(null,seq25470);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25471,seq25470__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__19138__auto__ = [];
var len__19128__auto___25485 = arguments.length;
var i__19129__auto___25486 = (0);
while(true){
if((i__19129__auto___25486 < len__19128__auto___25485)){
args__19138__auto__.push((arguments[i__19129__auto___25486]));

var G__25487 = (i__19129__auto___25486 + (1));
i__19129__auto___25486 = G__25487;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25481){
var vec__25482 = p__25481;
var req = cljs.core.nth.call(null,vec__25482,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.put.cljs$lang$applyTo = (function (seq25479){
var G__25480 = cljs.core.first.call(null,seq25479);
var seq25479__$1 = cljs.core.next.call(null,seq25479);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25480,seq25479__$1);
});


//# sourceMappingURL=client.js.map
