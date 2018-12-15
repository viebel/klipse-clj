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
if(cljs.core.truth_((function (){var and__17810__auto__ = v;
if(cljs.core.truth_(and__17810__auto__)){
return (v > (0));
} else {
return and__17810__auto__;
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
return cljs.core.reduce.call(null,(function (p1__35656_SHARP_,p2__35655_SHARP_){
var vec__35657 = clojure.string.split.call(null,p2__35655_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__35657,(0),null);
var v = cljs.core.nth.call(null,vec__35657,(1),null);
return cljs.core.assoc.call(null,p1__35656_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__35660_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__35660_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__35661){
var vec__35662 = p__35661;
var k = cljs.core.nth.call(null,vec__35662,(0),null);
var v = cljs.core.nth.call(null,vec__35662,(1),null);
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
return (function (p1__35665_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35665_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__17810__auto__){
var and__17810__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__17810__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type","")));
} else {
return and__17810__auto____$1;
}
} else {
return and__17810__auto__;
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
var temp__5455__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
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
return cljs.core.async.map.call(null,(function (p1__35666_SHARP_){
return cljs_http.client.decode_body.call(null,p1__35666_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35673 = arguments.length;
var i__19135__auto___35674 = (0);
while(true){
if((i__19135__auto___35674 < len__19134__auto___35673)){
args__19144__auto__.push((arguments[i__19135__auto___35674]));

var G__35675 = (i__19135__auto___35674 + (1));
i__19135__auto___35674 = G__35675;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__35669){
var vec__35670 = p__35669;
var default_headers = cljs.core.nth.call(null,vec__35670,(0),null);
return ((function (vec__35670,default_headers){
return (function (request){
var temp__5455__auto__ = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var default_headers__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__35670,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq35667){
var G__35668 = cljs.core.first.call(null,seq35667);
var seq35667__$1 = cljs.core.next.call(null,seq35667);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35668,seq35667__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35682 = arguments.length;
var i__19135__auto___35683 = (0);
while(true){
if((i__19135__auto___35683 < len__19134__auto___35682)){
args__19144__auto__.push((arguments[i__19135__auto___35683]));

var G__35684 = (i__19135__auto___35683 + (1));
i__19135__auto___35683 = G__35684;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__35678){
var vec__35679 = p__35678;
var accept = cljs.core.nth.call(null,vec__35679,(0),null);
return ((function (vec__35679,accept){
return (function (request){
var temp__5455__auto__ = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var accept__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__35679,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq35676){
var G__35677 = cljs.core.first.call(null,seq35676);
var seq35676__$1 = cljs.core.next.call(null,seq35676);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35677,seq35676__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35691 = arguments.length;
var i__19135__auto___35692 = (0);
while(true){
if((i__19135__auto___35692 < len__19134__auto___35691)){
args__19144__auto__.push((arguments[i__19135__auto___35692]));

var G__35693 = (i__19135__auto___35692 + (1));
i__19135__auto___35692 = G__35693;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__35687){
var vec__35688 = p__35687;
var content_type = cljs.core.nth.call(null,vec__35688,(0),null);
return ((function (vec__35688,content_type){
return (function (request){
var temp__5455__auto__ = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var content_type__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__35688,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq35685){
var G__35686 = cljs.core.first.call(null,seq35685);
var seq35685__$1 = cljs.core.next.call(null,seq35685);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35686,seq35685__$1);
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
var temp__5455__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var map__35694 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__35694__$1 = (((((!((map__35694 == null))))?(((((map__35694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35694):map__35694);
var encoding = cljs.core.get.call(null,map__35694__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__35694__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__35698 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__35698__$1 = (((((!((map__35698 == null))))?(((((map__35698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35698):map__35698);
var decoding = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__35698,map__35698__$1,decoding,decoding_opts){
return (function (p1__35696_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__35696_SHARP_,decoding,decoding_opts);
});})(map__35698,map__35698__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__35698,map__35698__$1,decoding,decoding_opts,transit_decode){
return (function (p1__35697_SHARP_){
return cljs_http.client.decode_body.call(null,p1__35697_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__35698,map__35698__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
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
return cljs.core.async.map.call(null,(function (p1__35700_SHARP_){
return cljs_http.client.decode_body.call(null,p1__35700_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__35701){
var map__35702 = p__35701;
var map__35702__$1 = (((((!((map__35702 == null))))?(((((map__35702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35702):map__35702);
var req = map__35702__$1;
var query_params = cljs.core.get.call(null,map__35702__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__35704){
var map__35705 = p__35704;
var map__35705__$1 = (((((!((map__35705 == null))))?(((((map__35705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35705):map__35705);
var request = map__35705__$1;
var form_params = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__17810__auto__ = form_params;
if(cljs.core.truth_(and__17810__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__17810__auto__;
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
var seq__35707_35723 = cljs.core.seq.call(null,params);
var chunk__35708_35724 = null;
var count__35709_35725 = (0);
var i__35710_35726 = (0);
while(true){
if((i__35710_35726 < count__35709_35725)){
var vec__35717_35727 = cljs.core._nth.call(null,chunk__35708_35724,i__35710_35726);
var k_35728 = cljs.core.nth.call(null,vec__35717_35727,(0),null);
var v_35729 = cljs.core.nth.call(null,vec__35717_35727,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_35729)){
form_data.append(cljs.core.name.call(null,k_35728),cljs.core.first.call(null,v_35729),cljs.core.second.call(null,v_35729));
} else {
form_data.append(cljs.core.name.call(null,k_35728),v_35729);
}


var G__35730 = seq__35707_35723;
var G__35731 = chunk__35708_35724;
var G__35732 = count__35709_35725;
var G__35733 = (i__35710_35726 + (1));
seq__35707_35723 = G__35730;
chunk__35708_35724 = G__35731;
count__35709_35725 = G__35732;
i__35710_35726 = G__35733;
continue;
} else {
var temp__5457__auto___35734 = cljs.core.seq.call(null,seq__35707_35723);
if(temp__5457__auto___35734){
var seq__35707_35735__$1 = temp__5457__auto___35734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35707_35735__$1)){
var c__18782__auto___35736 = cljs.core.chunk_first.call(null,seq__35707_35735__$1);
var G__35737 = cljs.core.chunk_rest.call(null,seq__35707_35735__$1);
var G__35738 = c__18782__auto___35736;
var G__35739 = cljs.core.count.call(null,c__18782__auto___35736);
var G__35740 = (0);
seq__35707_35723 = G__35737;
chunk__35708_35724 = G__35738;
count__35709_35725 = G__35739;
i__35710_35726 = G__35740;
continue;
} else {
var vec__35720_35741 = cljs.core.first.call(null,seq__35707_35735__$1);
var k_35742 = cljs.core.nth.call(null,vec__35720_35741,(0),null);
var v_35743 = cljs.core.nth.call(null,vec__35720_35741,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_35743)){
form_data.append(cljs.core.name.call(null,k_35742),cljs.core.first.call(null,v_35743),cljs.core.second.call(null,v_35743));
} else {
form_data.append(cljs.core.name.call(null,k_35742),v_35743);
}


var G__35744 = cljs.core.next.call(null,seq__35707_35735__$1);
var G__35745 = null;
var G__35746 = (0);
var G__35747 = (0);
seq__35707_35723 = G__35744;
chunk__35708_35724 = G__35745;
count__35709_35725 = G__35746;
i__35710_35726 = G__35747;
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
return (function (p__35748){
var map__35749 = p__35748;
var map__35749__$1 = (((((!((map__35749 == null))))?(((((map__35749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35749):map__35749);
var request = map__35749__$1;
var multipart_params = cljs.core.get.call(null,map__35749__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__35749__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__17810__auto__ = multipart_params;
if(cljs.core.truth_(and__17810__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__17810__auto__;
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
var temp__5455__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__35751_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__35751_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__35753){
var map__35754 = p__35753;
var map__35754__$1 = (((((!((map__35754 == null))))?(((((map__35754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35754):map__35754);
var req = map__35754__$1;
var query_params = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5455__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5455__auto__,map__35754,map__35754__$1,req,query_params){
return (function (p1__35752_SHARP_){
return cljs.core.merge.call(null,p1__35752_SHARP_,query_params);
});})(spec,temp__5455__auto__,map__35754,map__35754__$1,req,query_params))
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
var args__19144__auto__ = [];
var len__19134__auto___35762 = arguments.length;
var i__19135__auto___35763 = (0);
while(true){
if((i__19135__auto___35763 < len__19134__auto___35762)){
args__19144__auto__.push((arguments[i__19135__auto___35763]));

var G__35764 = (i__19135__auto___35763 + (1));
i__19135__auto___35763 = G__35764;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__35758){
var vec__35759 = p__35758;
var credentials = cljs.core.nth.call(null,vec__35759,(0),null);
return ((function (vec__35759,credentials){
return (function (req){
var credentials__$1 = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
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
;})(vec__35759,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq35756){
var G__35757 = cljs.core.first.call(null,seq35756);
var seq35756__$1 = cljs.core.next.call(null,seq35756);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35757,seq35756__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5455__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var oauth_token = temp__5455__auto__;
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
var temp__5455__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var custom_channel = temp__5455__auto__;
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
var args__19144__auto__ = [];
var len__19134__auto___35771 = arguments.length;
var i__19135__auto___35772 = (0);
while(true){
if((i__19135__auto___35772 < len__19134__auto___35771)){
args__19144__auto__.push((arguments[i__19135__auto___35772]));

var G__35773 = (i__19135__auto___35772 + (1));
i__19135__auto___35772 = G__35773;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35767){
var vec__35768 = p__35767;
var req = cljs.core.nth.call(null,vec__35768,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.delete$.cljs$lang$applyTo = (function (seq35765){
var G__35766 = cljs.core.first.call(null,seq35765);
var seq35765__$1 = cljs.core.next.call(null,seq35765);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35766,seq35765__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35780 = arguments.length;
var i__19135__auto___35781 = (0);
while(true){
if((i__19135__auto___35781 < len__19134__auto___35780)){
args__19144__auto__.push((arguments[i__19135__auto___35781]));

var G__35782 = (i__19135__auto___35781 + (1));
i__19135__auto___35781 = G__35782;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35776){
var vec__35777 = p__35776;
var req = cljs.core.nth.call(null,vec__35777,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.get.cljs$lang$applyTo = (function (seq35774){
var G__35775 = cljs.core.first.call(null,seq35774);
var seq35774__$1 = cljs.core.next.call(null,seq35774);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35775,seq35774__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35789 = arguments.length;
var i__19135__auto___35790 = (0);
while(true){
if((i__19135__auto___35790 < len__19134__auto___35789)){
args__19144__auto__.push((arguments[i__19135__auto___35790]));

var G__35791 = (i__19135__auto___35790 + (1));
i__19135__auto___35790 = G__35791;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35785){
var vec__35786 = p__35785;
var req = cljs.core.nth.call(null,vec__35786,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.head.cljs$lang$applyTo = (function (seq35783){
var G__35784 = cljs.core.first.call(null,seq35783);
var seq35783__$1 = cljs.core.next.call(null,seq35783);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35784,seq35783__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35798 = arguments.length;
var i__19135__auto___35799 = (0);
while(true){
if((i__19135__auto___35799 < len__19134__auto___35798)){
args__19144__auto__.push((arguments[i__19135__auto___35799]));

var G__35800 = (i__19135__auto___35799 + (1));
i__19135__auto___35799 = G__35800;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35794){
var vec__35795 = p__35794;
var req = cljs.core.nth.call(null,vec__35795,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq35792){
var G__35793 = cljs.core.first.call(null,seq35792);
var seq35792__$1 = cljs.core.next.call(null,seq35792);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35793,seq35792__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35807 = arguments.length;
var i__19135__auto___35808 = (0);
while(true){
if((i__19135__auto___35808 < len__19134__auto___35807)){
args__19144__auto__.push((arguments[i__19135__auto___35808]));

var G__35809 = (i__19135__auto___35808 + (1));
i__19135__auto___35808 = G__35809;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35803){
var vec__35804 = p__35803;
var req = cljs.core.nth.call(null,vec__35804,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.move.cljs$lang$applyTo = (function (seq35801){
var G__35802 = cljs.core.first.call(null,seq35801);
var seq35801__$1 = cljs.core.next.call(null,seq35801);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35802,seq35801__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35816 = arguments.length;
var i__19135__auto___35817 = (0);
while(true){
if((i__19135__auto___35817 < len__19134__auto___35816)){
args__19144__auto__.push((arguments[i__19135__auto___35817]));

var G__35818 = (i__19135__auto___35817 + (1));
i__19135__auto___35817 = G__35818;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35812){
var vec__35813 = p__35812;
var req = cljs.core.nth.call(null,vec__35813,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.options.cljs$lang$applyTo = (function (seq35810){
var G__35811 = cljs.core.first.call(null,seq35810);
var seq35810__$1 = cljs.core.next.call(null,seq35810);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35811,seq35810__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35825 = arguments.length;
var i__19135__auto___35826 = (0);
while(true){
if((i__19135__auto___35826 < len__19134__auto___35825)){
args__19144__auto__.push((arguments[i__19135__auto___35826]));

var G__35827 = (i__19135__auto___35826 + (1));
i__19135__auto___35826 = G__35827;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35821){
var vec__35822 = p__35821;
var req = cljs.core.nth.call(null,vec__35822,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.patch.cljs$lang$applyTo = (function (seq35819){
var G__35820 = cljs.core.first.call(null,seq35819);
var seq35819__$1 = cljs.core.next.call(null,seq35819);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35820,seq35819__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35834 = arguments.length;
var i__19135__auto___35835 = (0);
while(true){
if((i__19135__auto___35835 < len__19134__auto___35834)){
args__19144__auto__.push((arguments[i__19135__auto___35835]));

var G__35836 = (i__19135__auto___35835 + (1));
i__19135__auto___35835 = G__35836;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35830){
var vec__35831 = p__35830;
var req = cljs.core.nth.call(null,vec__35831,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.post.cljs$lang$applyTo = (function (seq35828){
var G__35829 = cljs.core.first.call(null,seq35828);
var seq35828__$1 = cljs.core.next.call(null,seq35828);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35829,seq35828__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__19144__auto__ = [];
var len__19134__auto___35843 = arguments.length;
var i__19135__auto___35844 = (0);
while(true){
if((i__19135__auto___35844 < len__19134__auto___35843)){
args__19144__auto__.push((arguments[i__19135__auto___35844]));

var G__35845 = (i__19135__auto___35844 + (1));
i__19135__auto___35844 = G__35845;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35839){
var vec__35840 = p__35839;
var req = cljs.core.nth.call(null,vec__35840,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.put.cljs$lang$applyTo = (function (seq35837){
var G__35838 = cljs.core.first.call(null,seq35837);
var seq35837__$1 = cljs.core.next.call(null,seq35837);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35838,seq35837__$1);
});


//# sourceMappingURL=client.js.map
