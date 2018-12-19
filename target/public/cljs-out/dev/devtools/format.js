// Compiled by ClojureScript 1.10.492 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4304__auto__ = (((value == null))?null:value);
var m__4305__auto__ = (devtools.format._header[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,value);
} else {
var m__4302__auto__ = (devtools.format._header["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4304__auto__ = (((value == null))?null:value);
var m__4305__auto__ = (devtools.format._has_body[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,value);
} else {
var m__4302__auto__ = (devtools.format._has_body["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4304__auto__ = (((value == null))?null:value);
var m__4305__auto__ = (devtools.format._body[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,value);
} else {
var m__4302__auto__ = (devtools.format._body["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o33855 = temp__5718__auto__;
var temp__5718__auto____$1 = (o33855["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o33856 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o33856["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o33857 = temp__5718__auto____$2;
return (o33857["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o33858 = temp__5718__auto__;
var temp__5718__auto____$1 = (o33858["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o33859 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o33859["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o33860 = temp__5718__auto____$2;
return (o33860["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o33861 = temp__5718__auto__;
var temp__5718__auto____$1 = (o33861["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o33862 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o33862["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o33863 = temp__5718__auto____$2;
return (o33863["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o33864 = temp__5718__auto__;
var temp__5718__auto____$1 = (o33864["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o33865 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o33865["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o33866 = temp__5718__auto____$2;
return (o33866["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o33867 = temp__5718__auto__;
var temp__5718__auto____$1 = (o33867["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o33868 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o33868["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o33869 = temp__5718__auto____$2;
return (o33869["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o33870 = temp__5718__auto__;
var temp__5718__auto____$1 = (o33870["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o33871 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o33871["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o33872 = temp__5718__auto____$2;
return (o33872["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o33873 = temp__5718__auto__;
var temp__5718__auto____$1 = (o33873["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o33874 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o33874["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o33875 = temp__5718__auto____$2;
return (o33875["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33877 = arguments.length;
var i__4602__auto___33878 = (0);
while(true){
if((i__4602__auto___33878 < len__4601__auto___33877)){
args__4607__auto__.push((arguments[i__4602__auto___33878]));

var G__33879 = (i__4602__auto___33878 + (1));
i__4602__auto___33878 = G__33879;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq33876){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33876));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33881 = arguments.length;
var i__4602__auto___33882 = (0);
while(true){
if((i__4602__auto___33882 < len__4601__auto___33881)){
args__4607__auto__.push((arguments[i__4602__auto___33882]));

var G__33883 = (i__4602__auto___33882 + (1));
i__4602__auto___33882 = G__33883;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq33880){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33880));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33885 = arguments.length;
var i__4602__auto___33886 = (0);
while(true){
if((i__4602__auto___33886 < len__4601__auto___33885)){
args__4607__auto__.push((arguments[i__4602__auto___33886]));

var G__33887 = (i__4602__auto___33886 + (1));
i__4602__auto___33886 = G__33887;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq33884){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33884));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33889 = arguments.length;
var i__4602__auto___33890 = (0);
while(true){
if((i__4602__auto___33890 < len__4601__auto___33889)){
args__4607__auto__.push((arguments[i__4602__auto___33890]));

var G__33891 = (i__4602__auto___33890 + (1));
i__4602__auto___33890 = G__33891;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq33888){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33888));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33893 = arguments.length;
var i__4602__auto___33894 = (0);
while(true){
if((i__4602__auto___33894 < len__4601__auto___33893)){
args__4607__auto__.push((arguments[i__4602__auto___33894]));

var G__33895 = (i__4602__auto___33894 + (1));
i__4602__auto___33894 = G__33895;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq33892){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33892));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33897 = arguments.length;
var i__4602__auto___33898 = (0);
while(true){
if((i__4602__auto___33898 < len__4601__auto___33897)){
args__4607__auto__.push((arguments[i__4602__auto___33898]));

var G__33899 = (i__4602__auto___33898 + (1));
i__4602__auto___33898 = G__33899;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq33896){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33896));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33901 = arguments.length;
var i__4602__auto___33902 = (0);
while(true){
if((i__4602__auto___33902 < len__4601__auto___33901)){
args__4607__auto__.push((arguments[i__4602__auto___33902]));

var G__33903 = (i__4602__auto___33902 + (1));
i__4602__auto___33902 = G__33903;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq33900){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33900));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33911 = arguments.length;
var i__4602__auto___33912 = (0);
while(true){
if((i__4602__auto___33912 < len__4601__auto___33911)){
args__4607__auto__.push((arguments[i__4602__auto___33912]));

var G__33913 = (i__4602__auto___33912 + (1));
i__4602__auto___33912 = G__33913;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__33907){
var vec__33908 = p__33907;
var state_override = cljs.core.nth.call(null,vec__33908,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__33908,state_override){
return (function (p1__33904_SHARP_){
return cljs.core.merge.call(null,p1__33904_SHARP_,state_override);
});})(vec__33908,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq33905){
var G__33906 = cljs.core.first.call(null,seq33905);
var seq33905__$1 = cljs.core.next.call(null,seq33905);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33906,seq33905__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33915 = arguments.length;
var i__4602__auto___33916 = (0);
while(true){
if((i__4602__auto___33916 < len__4601__auto___33915)){
args__4607__auto__.push((arguments[i__4602__auto___33916]));

var G__33917 = (i__4602__auto___33916 + (1));
i__4602__auto___33916 = G__33917;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq33914){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33914));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4607__auto__ = [];
var len__4601__auto___33920 = arguments.length;
var i__4602__auto___33921 = (0);
while(true){
if((i__4602__auto___33921 < len__4601__auto___33920)){
args__4607__auto__.push((arguments[i__4602__auto___33921]));

var G__33922 = (i__4602__auto___33921 + (1));
i__4602__auto___33921 = G__33922;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq33918){
var G__33919 = cljs.core.first.call(null,seq33918);
var seq33918__$1 = cljs.core.next.call(null,seq33918);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33919,seq33918__$1);
});


//# sourceMappingURL=format.js.map
