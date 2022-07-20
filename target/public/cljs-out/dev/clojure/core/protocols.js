// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.core.protocols.Datafiable = function(){};

/**
 * return a representation of o as data (default identity)
 */
clojure.core.protocols.datafy = (function clojure$core$protocols$datafy(o){
if((((!((o == null)))) && ((!((o.clojure$core$protocols$Datafiable$datafy$arity$1 == null)))))){
return o.clojure$core$protocols$Datafiable$datafy$arity$1(o);
} else {
var x__4433__auto__ = (((o == null))?null:o);
var m__4434__auto__ = (clojure.core.protocols.datafy[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,o);
} else {
var temp__5718__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,o),new cljs.core.Symbol("clojure.core.protocols","datafy","clojure.core.protocols/datafy",707534751,null));
if(temp__5718__auto__){
var meta_impl__4432__auto__ = temp__5718__auto__;
return meta_impl__4432__auto__.call(null,o);
} else {
var m__4431__auto__ = (clojure.core.protocols.datafy["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,o);
} else {
throw cljs.core.missing_protocol.call(null,"Datafiable.datafy",o);
}
}
}
}
});

goog.object.set(clojure.core.protocols.Datafiable,"null",true);

goog.object.set(clojure.core.protocols.datafy,"null",(function (_){
return null;
}));

goog.object.set(clojure.core.protocols.Datafiable,"_",true);

goog.object.set(clojure.core.protocols.datafy,"_",(function (o){
return o;
}));

/**
 * @interface
 */
clojure.core.protocols.Navigable = function(){};

/**
 * return (possibly transformed) v in the context of coll and k (a key/index or nil),
 * defaults to returning v.
 */
clojure.core.protocols.nav = (function clojure$core$protocols$nav(coll,k,v){
if((((!((coll == null)))) && ((!((coll.clojure$core$protocols$Navigable$nav$arity$3 == null)))))){
return coll.clojure$core$protocols$Navigable$nav$arity$3(coll,k,v);
} else {
var x__4433__auto__ = (((coll == null))?null:coll);
var m__4434__auto__ = (clojure.core.protocols.nav[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,coll,k,v);
} else {
var temp__5718__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,coll),new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null));
if(temp__5718__auto__){
var meta_impl__4432__auto__ = temp__5718__auto__;
return meta_impl__4432__auto__.call(null,coll,k,v);
} else {
var m__4431__auto__ = (clojure.core.protocols.nav["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,coll,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"Navigable.nav",coll);
}
}
}
}
});

goog.object.set(clojure.core.protocols.Navigable,"_",true);

goog.object.set(clojure.core.protocols.nav,"_",(function (_,___$1,x){
return x;
}));

//# sourceMappingURL=protocols.js.map
