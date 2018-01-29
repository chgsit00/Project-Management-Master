// Compiled by ClojureScript 1.9.946 {}
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
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
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
return (function (p__44644){
var vec__44645 = p__44644;
var k = cljs.core.nth.call(null,vec__44645,(0),null);
var v = cljs.core.nth.call(null,vec__44645,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__44648 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__44648)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__44648)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__44648)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__44648)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__44648)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__44648)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44648)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__44649){
var map__44650 = p__44649;
var map__44650__$1 = ((((!((map__44650 == null)))?((((map__44650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44650):map__44650);
var request = map__44650__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__44650__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__44650__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__44650__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__38291__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__44652 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__44652,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__44652,response_type);

G__44652.setTimeoutInterval(timeout);

G__44652.setWithCredentials(send_credentials);

return G__44652;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__44653){
var map__44654 = p__44653;
var map__44654__$1 = ((((!((map__44654 == null)))?((((map__44654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44654):map__44654);
var request = map__44654__$1;
var request_method = cljs.core.get.call(null,map__44654__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__44654__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__44654__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__44654__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__44654__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__44654__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__38291__auto__ = request_method;
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
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
});})(channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_44678 = ((function (channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__44656_44679 = xhr;
G__44656_44679.setProgressEventsEnabled(true);

G__44656_44679.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_44678,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__44656_44679.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_44678,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__40843__auto___44680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___44680,channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___44680,channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_44667){
var state_val_44668 = (state_44667[(1)]);
if((state_val_44668 === (1))){
var state_44667__$1 = state_44667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44667__$1,(2),cancel);
} else {
if((state_val_44668 === (2))){
var inst_44658 = (state_44667[(2)]);
var inst_44659 = xhr.isComplete();
var inst_44660 = cljs.core.not.call(null,inst_44659);
var state_44667__$1 = (function (){var statearr_44669 = state_44667;
(statearr_44669[(7)] = inst_44658);

return statearr_44669;
})();
if(inst_44660){
var statearr_44670_44681 = state_44667__$1;
(statearr_44670_44681[(1)] = (3));

} else {
var statearr_44671_44682 = state_44667__$1;
(statearr_44671_44682[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (3))){
var inst_44662 = xhr.abort();
var state_44667__$1 = state_44667;
var statearr_44672_44683 = state_44667__$1;
(statearr_44672_44683[(2)] = inst_44662);

(statearr_44672_44683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (4))){
var state_44667__$1 = state_44667;
var statearr_44673_44684 = state_44667__$1;
(statearr_44673_44684[(2)] = null);

(statearr_44673_44684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (5))){
var inst_44665 = (state_44667[(2)]);
var state_44667__$1 = state_44667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44667__$1,inst_44665);
} else {
return null;
}
}
}
}
}
});})(c__40843__auto___44680,channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__40755__auto__,c__40843__auto___44680,channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__40756__auto__ = null;
var cljs_http$core$xhr_$_state_machine__40756__auto____0 = (function (){
var statearr_44674 = [null,null,null,null,null,null,null,null];
(statearr_44674[(0)] = cljs_http$core$xhr_$_state_machine__40756__auto__);

(statearr_44674[(1)] = (1));

return statearr_44674;
});
var cljs_http$core$xhr_$_state_machine__40756__auto____1 = (function (state_44667){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_44667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e44675){if((e44675 instanceof Object)){
var ex__40759__auto__ = e44675;
var statearr_44676_44685 = state_44667;
(statearr_44676_44685[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44686 = state_44667;
state_44667 = G__44686;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__40756__auto__ = function(state_44667){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__40756__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__40756__auto____1.call(this,state_44667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__40756__auto____0;
cljs_http$core$xhr_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__40756__auto____1;
return cljs_http$core$xhr_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___44680,channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__40845__auto__ = (function (){var statearr_44677 = f__40844__auto__.call(null);
(statearr_44677[(6)] = c__40843__auto___44680);

return statearr_44677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___44680,channel,request_url,method,headers__$1,xhr,map__44654,map__44654__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__44687){
var map__44688 = p__44687;
var map__44688__$1 = ((((!((map__44688 == null)))?((((map__44688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44688):map__44688);
var request = map__44688__$1;
var timeout = cljs.core.get.call(null,map__44688__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__44688__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__44688__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__44688__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_44701 = jsonp.send(null,((function (channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_44701], null));

if(cljs.core.truth_(cancel)){
var c__40843__auto___44702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___44702,req_44701,channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___44702,req_44701,channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_44694){
var state_val_44695 = (state_44694[(1)]);
if((state_val_44695 === (1))){
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44694__$1,(2),cancel);
} else {
if((state_val_44695 === (2))){
var inst_44691 = (state_44694[(2)]);
var inst_44692 = jsonp.cancel(req_44701);
var state_44694__$1 = (function (){var statearr_44696 = state_44694;
(statearr_44696[(7)] = inst_44691);

return statearr_44696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44694__$1,inst_44692);
} else {
return null;
}
}
});})(c__40843__auto___44702,req_44701,channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__40755__auto__,c__40843__auto___44702,req_44701,channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__40756__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__40756__auto____0 = (function (){
var statearr_44697 = [null,null,null,null,null,null,null,null];
(statearr_44697[(0)] = cljs_http$core$jsonp_$_state_machine__40756__auto__);

(statearr_44697[(1)] = (1));

return statearr_44697;
});
var cljs_http$core$jsonp_$_state_machine__40756__auto____1 = (function (state_44694){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_44694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e44698){if((e44698 instanceof Object)){
var ex__40759__auto__ = e44698;
var statearr_44699_44703 = state_44694;
(statearr_44699_44703[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44704 = state_44694;
state_44694 = G__44704;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__40756__auto__ = function(state_44694){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__40756__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__40756__auto____1.call(this,state_44694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__40756__auto____0;
cljs_http$core$jsonp_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__40756__auto____1;
return cljs_http$core$jsonp_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___44702,req_44701,channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__40845__auto__ = (function (){var statearr_44700 = f__40844__auto__.call(null);
(statearr_44700[(6)] = c__40843__auto___44702);

return statearr_44700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___44702,req_44701,channel,jsonp,map__44688,map__44688__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__44705){
var map__44706 = p__44705;
var map__44706__$1 = ((((!((map__44706 == null)))?((((map__44706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44706):map__44706);
var request = map__44706__$1;
var request_method = cljs.core.get.call(null,map__44706__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1517176492949
