// Compiled by ClojureScript 1.9.946 {}
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
if(cljs.core.truth_((function (){var and__38279__auto__ = v;
if(cljs.core.truth_(and__38279__auto__)){
return (v > (0));
} else {
return and__38279__auto__;
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
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__44711_SHARP_,p2__44710_SHARP_){
var vec__44712 = clojure.string.split.call(null,p2__44710_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__44712,(0),null);
var v = cljs.core.nth.call(null,vec__44712,(1),null);
return cljs.core.assoc.call(null,p1__44711_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__44715_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__44715_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__44716){
var vec__44717 = p__44716;
var k = cljs.core.nth.call(null,vec__44717,(0),null);
var v = cljs.core.nth.call(null,vec__44717,(1),null);
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
return (function (p1__44720_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44720_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__38279__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__38279__auto__){
var and__38279__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__38279__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__38279__auto____$1;
}
} else {
return and__38279__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
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
return cljs.core.async.map.call(null,(function (p1__44721_SHARP_){
return cljs_http.client.decode_body.call(null,p1__44721_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44728 = arguments.length;
var i__39463__auto___44729 = (0);
while(true){
if((i__39463__auto___44729 < len__39462__auto___44728)){
args__39469__auto__.push((arguments[i__39463__auto___44729]));

var G__44730 = (i__39463__auto___44729 + (1));
i__39463__auto___44729 = G__44730;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__44724){
var vec__44725 = p__44724;
var default_headers = cljs.core.nth.call(null,vec__44725,(0),null);
return ((function (vec__44725,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__38291__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__44725,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq44722){
var G__44723 = cljs.core.first.call(null,seq44722);
var seq44722__$1 = cljs.core.next.call(null,seq44722);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__44723,seq44722__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44737 = arguments.length;
var i__39463__auto___44738 = (0);
while(true){
if((i__39463__auto___44738 < len__39462__auto___44737)){
args__39469__auto__.push((arguments[i__39463__auto___44738]));

var G__44739 = (i__39463__auto___44738 + (1));
i__39463__auto___44738 = G__44739;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__44733){
var vec__44734 = p__44733;
var accept = cljs.core.nth.call(null,vec__44734,(0),null);
return ((function (vec__44734,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__38291__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__44734,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq44731){
var G__44732 = cljs.core.first.call(null,seq44731);
var seq44731__$1 = cljs.core.next.call(null,seq44731);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__44732,seq44731__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44746 = arguments.length;
var i__39463__auto___44747 = (0);
while(true){
if((i__39463__auto___44747 < len__39462__auto___44746)){
args__39469__auto__.push((arguments[i__39463__auto___44747]));

var G__44748 = (i__39463__auto___44747 + (1));
i__39463__auto___44747 = G__44748;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__44742){
var vec__44743 = p__44742;
var content_type = cljs.core.nth.call(null,vec__44743,(0),null);
return ((function (vec__44743,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__38291__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__44743,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq44740){
var G__44741 = cljs.core.first.call(null,seq44740);
var seq44740__$1 = cljs.core.next.call(null,seq44740);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__44741,seq44740__$1);
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__44749 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__44749__$1 = ((((!((map__44749 == null)))?((((map__44749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44749):map__44749);
var encoding = cljs.core.get.call(null,map__44749__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__44749__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__44753 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__44753__$1 = ((((!((map__44753 == null)))?((((map__44753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44753):map__44753);
var decoding = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__44753,map__44753__$1,decoding,decoding_opts){
return (function (p1__44751_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__44751_SHARP_,decoding,decoding_opts);
});})(map__44753,map__44753__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__44753,map__44753__$1,decoding,decoding_opts,transit_decode){
return (function (p1__44752_SHARP_){
return cljs_http.client.decode_body.call(null,p1__44752_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__44753,map__44753__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
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
return cljs.core.async.map.call(null,(function (p1__44755_SHARP_){
return cljs_http.client.decode_body.call(null,p1__44755_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__44756){
var map__44757 = p__44756;
var map__44757__$1 = ((((!((map__44757 == null)))?((((map__44757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44757):map__44757);
var req = map__44757__$1;
var query_params = cljs.core.get.call(null,map__44757__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__44759){
var map__44760 = p__44759;
var map__44760__$1 = ((((!((map__44760 == null)))?((((map__44760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44760):map__44760);
var request = map__44760__$1;
var form_params = cljs.core.get.call(null,map__44760__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__44760__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__44760__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__38279__auto__ = form_params;
if(cljs.core.truth_(and__38279__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__38279__auto__;
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
var seq__44762_44772 = cljs.core.seq.call(null,params);
var chunk__44763_44773 = null;
var count__44764_44774 = (0);
var i__44765_44775 = (0);
while(true){
if((i__44765_44775 < count__44764_44774)){
var vec__44766_44776 = cljs.core._nth.call(null,chunk__44763_44773,i__44765_44775);
var k_44777 = cljs.core.nth.call(null,vec__44766_44776,(0),null);
var v_44778 = cljs.core.nth.call(null,vec__44766_44776,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_44778)){
form_data.append(cljs.core.name.call(null,k_44777),cljs.core.first.call(null,v_44778),cljs.core.second.call(null,v_44778));
} else {
form_data.append(cljs.core.name.call(null,k_44777),v_44778);
}

var G__44779 = seq__44762_44772;
var G__44780 = chunk__44763_44773;
var G__44781 = count__44764_44774;
var G__44782 = (i__44765_44775 + (1));
seq__44762_44772 = G__44779;
chunk__44763_44773 = G__44780;
count__44764_44774 = G__44781;
i__44765_44775 = G__44782;
continue;
} else {
var temp__4657__auto___44783 = cljs.core.seq.call(null,seq__44762_44772);
if(temp__4657__auto___44783){
var seq__44762_44784__$1 = temp__4657__auto___44783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44762_44784__$1)){
var c__39130__auto___44785 = cljs.core.chunk_first.call(null,seq__44762_44784__$1);
var G__44786 = cljs.core.chunk_rest.call(null,seq__44762_44784__$1);
var G__44787 = c__39130__auto___44785;
var G__44788 = cljs.core.count.call(null,c__39130__auto___44785);
var G__44789 = (0);
seq__44762_44772 = G__44786;
chunk__44763_44773 = G__44787;
count__44764_44774 = G__44788;
i__44765_44775 = G__44789;
continue;
} else {
var vec__44769_44790 = cljs.core.first.call(null,seq__44762_44784__$1);
var k_44791 = cljs.core.nth.call(null,vec__44769_44790,(0),null);
var v_44792 = cljs.core.nth.call(null,vec__44769_44790,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_44792)){
form_data.append(cljs.core.name.call(null,k_44791),cljs.core.first.call(null,v_44792),cljs.core.second.call(null,v_44792));
} else {
form_data.append(cljs.core.name.call(null,k_44791),v_44792);
}

var G__44793 = cljs.core.next.call(null,seq__44762_44784__$1);
var G__44794 = null;
var G__44795 = (0);
var G__44796 = (0);
seq__44762_44772 = G__44793;
chunk__44763_44773 = G__44794;
count__44764_44774 = G__44795;
i__44765_44775 = G__44796;
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
return (function (p__44797){
var map__44798 = p__44797;
var map__44798__$1 = ((((!((map__44798 == null)))?((((map__44798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44798):map__44798);
var request = map__44798__$1;
var multipart_params = cljs.core.get.call(null,map__44798__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__44798__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__38279__auto__ = multipart_params;
if(cljs.core.truth_(and__38279__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__38279__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__44800_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__44800_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__44802){
var map__44803 = p__44802;
var map__44803__$1 = ((((!((map__44803 == null)))?((((map__44803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44803):map__44803);
var req = map__44803__$1;
var query_params = cljs.core.get.call(null,map__44803__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__44803,map__44803__$1,req,query_params){
return (function (p1__44801_SHARP_){
return cljs.core.merge.call(null,p1__44801_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__44803,map__44803__$1,req,query_params))
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
var args__39469__auto__ = [];
var len__39462__auto___44811 = arguments.length;
var i__39463__auto___44812 = (0);
while(true){
if((i__39463__auto___44812 < len__39462__auto___44811)){
args__39469__auto__.push((arguments[i__39463__auto___44812]));

var G__44813 = (i__39463__auto___44812 + (1));
i__39463__auto___44812 = G__44813;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__44807){
var vec__44808 = p__44807;
var credentials = cljs.core.nth.call(null,vec__44808,(0),null);
return ((function (vec__44808,credentials){
return (function (req){
var credentials__$1 = (function (){var or__38291__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__44808,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq44805){
var G__44806 = cljs.core.first.call(null,seq44805);
var seq44805__$1 = cljs.core.next.call(null,seq44805);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__44806,seq44805__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
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
var args__39469__auto__ = [];
var len__39462__auto___44820 = arguments.length;
var i__39463__auto___44821 = (0);
while(true){
if((i__39463__auto___44821 < len__39462__auto___44820)){
args__39469__auto__.push((arguments[i__39463__auto___44821]));

var G__44822 = (i__39463__auto___44821 + (1));
i__39463__auto___44821 = G__44822;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44816){
var vec__44817 = p__44816;
var req = cljs.core.nth.call(null,vec__44817,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq44814){
var G__44815 = cljs.core.first.call(null,seq44814);
var seq44814__$1 = cljs.core.next.call(null,seq44814);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__44815,seq44814__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44829 = arguments.length;
var i__39463__auto___44830 = (0);
while(true){
if((i__39463__auto___44830 < len__39462__auto___44829)){
args__39469__auto__.push((arguments[i__39463__auto___44830]));

var G__44831 = (i__39463__auto___44830 + (1));
i__39463__auto___44830 = G__44831;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44825){
var vec__44826 = p__44825;
var req = cljs.core.nth.call(null,vec__44826,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq44823){
var G__44824 = cljs.core.first.call(null,seq44823);
var seq44823__$1 = cljs.core.next.call(null,seq44823);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__44824,seq44823__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44838 = arguments.length;
var i__39463__auto___44839 = (0);
while(true){
if((i__39463__auto___44839 < len__39462__auto___44838)){
args__39469__auto__.push((arguments[i__39463__auto___44839]));

var G__44840 = (i__39463__auto___44839 + (1));
i__39463__auto___44839 = G__44840;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44834){
var vec__44835 = p__44834;
var req = cljs.core.nth.call(null,vec__44835,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq44832){
var G__44833 = cljs.core.first.call(null,seq44832);
var seq44832__$1 = cljs.core.next.call(null,seq44832);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__44833,seq44832__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44847 = arguments.length;
var i__39463__auto___44848 = (0);
while(true){
if((i__39463__auto___44848 < len__39462__auto___44847)){
args__39469__auto__.push((arguments[i__39463__auto___44848]));

var G__44849 = (i__39463__auto___44848 + (1));
i__39463__auto___44848 = G__44849;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44843){
var vec__44844 = p__44843;
var req = cljs.core.nth.call(null,vec__44844,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq44841){
var G__44842 = cljs.core.first.call(null,seq44841);
var seq44841__$1 = cljs.core.next.call(null,seq44841);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__44842,seq44841__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44856 = arguments.length;
var i__39463__auto___44857 = (0);
while(true){
if((i__39463__auto___44857 < len__39462__auto___44856)){
args__39469__auto__.push((arguments[i__39463__auto___44857]));

var G__44858 = (i__39463__auto___44857 + (1));
i__39463__auto___44857 = G__44858;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44852){
var vec__44853 = p__44852;
var req = cljs.core.nth.call(null,vec__44853,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq44850){
var G__44851 = cljs.core.first.call(null,seq44850);
var seq44850__$1 = cljs.core.next.call(null,seq44850);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__44851,seq44850__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44865 = arguments.length;
var i__39463__auto___44866 = (0);
while(true){
if((i__39463__auto___44866 < len__39462__auto___44865)){
args__39469__auto__.push((arguments[i__39463__auto___44866]));

var G__44867 = (i__39463__auto___44866 + (1));
i__39463__auto___44866 = G__44867;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44861){
var vec__44862 = p__44861;
var req = cljs.core.nth.call(null,vec__44862,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq44859){
var G__44860 = cljs.core.first.call(null,seq44859);
var seq44859__$1 = cljs.core.next.call(null,seq44859);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__44860,seq44859__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44874 = arguments.length;
var i__39463__auto___44875 = (0);
while(true){
if((i__39463__auto___44875 < len__39462__auto___44874)){
args__39469__auto__.push((arguments[i__39463__auto___44875]));

var G__44876 = (i__39463__auto___44875 + (1));
i__39463__auto___44875 = G__44876;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44870){
var vec__44871 = p__44870;
var req = cljs.core.nth.call(null,vec__44871,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq44868){
var G__44869 = cljs.core.first.call(null,seq44868);
var seq44868__$1 = cljs.core.next.call(null,seq44868);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__44869,seq44868__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44883 = arguments.length;
var i__39463__auto___44884 = (0);
while(true){
if((i__39463__auto___44884 < len__39462__auto___44883)){
args__39469__auto__.push((arguments[i__39463__auto___44884]));

var G__44885 = (i__39463__auto___44884 + (1));
i__39463__auto___44884 = G__44885;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44879){
var vec__44880 = p__44879;
var req = cljs.core.nth.call(null,vec__44880,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq44877){
var G__44878 = cljs.core.first.call(null,seq44877);
var seq44877__$1 = cljs.core.next.call(null,seq44877);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__44878,seq44877__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44892 = arguments.length;
var i__39463__auto___44893 = (0);
while(true){
if((i__39463__auto___44893 < len__39462__auto___44892)){
args__39469__auto__.push((arguments[i__39463__auto___44893]));

var G__44894 = (i__39463__auto___44893 + (1));
i__39463__auto___44893 = G__44894;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44888){
var vec__44889 = p__44888;
var req = cljs.core.nth.call(null,vec__44889,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq44886){
var G__44887 = cljs.core.first.call(null,seq44886);
var seq44886__$1 = cljs.core.next.call(null,seq44886);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__44887,seq44886__$1);
});


//# sourceMappingURL=client.js.map?rel=1517176493152
