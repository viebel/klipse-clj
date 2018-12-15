// Compiled by ClojureScript 0.0.668480191 {}
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
var x__18573__auto__ = (((value == null))?null:value);
var m__18574__auto__ = (devtools.format._header[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,value);
} else {
var m__18571__auto__ = (devtools.format._header["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,value);
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
var x__18573__auto__ = (((value == null))?null:value);
var m__18574__auto__ = (devtools.format._has_body[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,value);
} else {
var m__18571__auto__ = (devtools.format._has_body["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,value);
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
var x__18573__auto__ = (((value == null))?null:value);
var m__18574__auto__ = (devtools.format._body[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,value);
} else {
var m__18571__auto__ = (devtools.format._body["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,value);
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

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41853 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41853["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41854 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41854["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41855 = temp__5455__auto____$2;
return (o41855["make_template"]);
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

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41856 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41856["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41857 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41857["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41858 = temp__5455__auto____$2;
return (o41858["make_group"]);
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

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41859 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41859["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41860 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41860["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41861 = temp__5455__auto____$2;
return (o41861["make_reference"]);
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

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41862 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41862["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41863 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41863["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41864 = temp__5455__auto____$2;
return (o41864["make_surrogate"]);
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

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41865 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41865["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41866 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41866["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41867 = temp__5455__auto____$2;
return (o41867["render_markup"]);
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

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41868 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41868["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41869 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41869["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41870 = temp__5455__auto____$2;
return (o41870["_LT_header_GT_"]);
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41871 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41871["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41872 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41872["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41873 = temp__5455__auto____$2;
return (o41873["_LT_standard_body_GT_"]);
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
var args__19144__auto__ = [];
var len__19134__auto___41875 = arguments.length;
var i__19135__auto___41876 = (0);
while(true){
if((i__19135__auto___41876 < len__19134__auto___41875)){
args__19144__auto__.push((arguments[i__19135__auto___41876]));

var G__41877 = (i__19135__auto___41876 + (1));
i__19135__auto___41876 = G__41877;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq41874){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41874));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41879 = arguments.length;
var i__19135__auto___41880 = (0);
while(true){
if((i__19135__auto___41880 < len__19134__auto___41879)){
args__19144__auto__.push((arguments[i__19135__auto___41880]));

var G__41881 = (i__19135__auto___41880 + (1));
i__19135__auto___41880 = G__41881;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq41878){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41878));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41883 = arguments.length;
var i__19135__auto___41884 = (0);
while(true){
if((i__19135__auto___41884 < len__19134__auto___41883)){
args__19144__auto__.push((arguments[i__19135__auto___41884]));

var G__41885 = (i__19135__auto___41884 + (1));
i__19135__auto___41884 = G__41885;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq41882){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41882));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41887 = arguments.length;
var i__19135__auto___41888 = (0);
while(true){
if((i__19135__auto___41888 < len__19134__auto___41887)){
args__19144__auto__.push((arguments[i__19135__auto___41888]));

var G__41889 = (i__19135__auto___41888 + (1));
i__19135__auto___41888 = G__41889;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq41886){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41886));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41891 = arguments.length;
var i__19135__auto___41892 = (0);
while(true){
if((i__19135__auto___41892 < len__19134__auto___41891)){
args__19144__auto__.push((arguments[i__19135__auto___41892]));

var G__41893 = (i__19135__auto___41892 + (1));
i__19135__auto___41892 = G__41893;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq41890){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41890));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41895 = arguments.length;
var i__19135__auto___41896 = (0);
while(true){
if((i__19135__auto___41896 < len__19134__auto___41895)){
args__19144__auto__.push((arguments[i__19135__auto___41896]));

var G__41897 = (i__19135__auto___41896 + (1));
i__19135__auto___41896 = G__41897;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq41894){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41894));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41899 = arguments.length;
var i__19135__auto___41900 = (0);
while(true){
if((i__19135__auto___41900 < len__19134__auto___41899)){
args__19144__auto__.push((arguments[i__19135__auto___41900]));

var G__41901 = (i__19135__auto___41900 + (1));
i__19135__auto___41900 = G__41901;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq41898){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41898));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41909 = arguments.length;
var i__19135__auto___41910 = (0);
while(true){
if((i__19135__auto___41910 < len__19134__auto___41909)){
args__19144__auto__.push((arguments[i__19135__auto___41910]));

var G__41911 = (i__19135__auto___41910 + (1));
i__19135__auto___41910 = G__41911;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41905){
var vec__41906 = p__41905;
var state_override = cljs.core.nth.call(null,vec__41906,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__41906,state_override){
return (function (p1__41902_SHARP_){
return cljs.core.merge.call(null,p1__41902_SHARP_,state_override);
});})(vec__41906,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq41903){
var G__41904 = cljs.core.first.call(null,seq41903);
var seq41903__$1 = cljs.core.next.call(null,seq41903);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41904,seq41903__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41913 = arguments.length;
var i__19135__auto___41914 = (0);
while(true){
if((i__19135__auto___41914 < len__19134__auto___41913)){
args__19144__auto__.push((arguments[i__19135__auto___41914]));

var G__41915 = (i__19135__auto___41914 + (1));
i__19135__auto___41914 = G__41915;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq41912){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41912));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__19144__auto__ = [];
var len__19134__auto___41918 = arguments.length;
var i__19135__auto___41919 = (0);
while(true){
if((i__19135__auto___41919 < len__19134__auto___41918)){
args__19144__auto__.push((arguments[i__19135__auto___41919]));

var G__41920 = (i__19135__auto___41919 + (1));
i__19135__auto___41919 = G__41920;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
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
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq41916){
var G__41917 = cljs.core.first.call(null,seq41916);
var seq41916__$1 = cljs.core.next.call(null,seq41916);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41917,seq41916__$1);
});


//# sourceMappingURL=format.js.map
