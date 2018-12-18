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
var x__18564__auto__ = (((value == null))?null:value);
var m__18565__auto__ = (devtools.format._header[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,value);
} else {
var m__18562__auto__ = (devtools.format._header["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,value);
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
var x__18564__auto__ = (((value == null))?null:value);
var m__18565__auto__ = (devtools.format._has_body[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,value);
} else {
var m__18562__auto__ = (devtools.format._has_body["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,value);
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
var x__18564__auto__ = (((value == null))?null:value);
var m__18565__auto__ = (devtools.format._body[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,value);
} else {
var m__18562__auto__ = (devtools.format._body["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,value);
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
var o41846 = temp__5718__auto__;
var temp__5718__auto____$1 = (o41846["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o41847 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o41847["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o41848 = temp__5718__auto____$2;
return (o41848["make_template"]);
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
var o41849 = temp__5718__auto__;
var temp__5718__auto____$1 = (o41849["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o41850 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o41850["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o41851 = temp__5718__auto____$2;
return (o41851["make_group"]);
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
var o41852 = temp__5718__auto__;
var temp__5718__auto____$1 = (o41852["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o41853 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o41853["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o41854 = temp__5718__auto____$2;
return (o41854["make_reference"]);
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
var o41855 = temp__5718__auto__;
var temp__5718__auto____$1 = (o41855["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o41856 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o41856["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o41857 = temp__5718__auto____$2;
return (o41857["make_surrogate"]);
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
var o41858 = temp__5718__auto__;
var temp__5718__auto____$1 = (o41858["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o41859 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o41859["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o41860 = temp__5718__auto____$2;
return (o41860["render_markup"]);
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
var o41861 = temp__5718__auto__;
var temp__5718__auto____$1 = (o41861["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o41862 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o41862["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o41863 = temp__5718__auto____$2;
return (o41863["_LT_header_GT_"]);
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
var o41864 = temp__5718__auto__;
var temp__5718__auto____$1 = (o41864["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o41865 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o41865["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o41866 = temp__5718__auto____$2;
return (o41866["_LT_standard_body_GT_"]);
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
var args__19135__auto__ = [];
var len__19125__auto___41868 = arguments.length;
var i__19126__auto___41869 = (0);
while(true){
if((i__19126__auto___41869 < len__19125__auto___41868)){
args__19135__auto__.push((arguments[i__19126__auto___41869]));

var G__41870 = (i__19126__auto___41869 + (1));
i__19126__auto___41869 = G__41870;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq41867){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41867));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41872 = arguments.length;
var i__19126__auto___41873 = (0);
while(true){
if((i__19126__auto___41873 < len__19125__auto___41872)){
args__19135__auto__.push((arguments[i__19126__auto___41873]));

var G__41874 = (i__19126__auto___41873 + (1));
i__19126__auto___41873 = G__41874;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq41871){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41871));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41876 = arguments.length;
var i__19126__auto___41877 = (0);
while(true){
if((i__19126__auto___41877 < len__19125__auto___41876)){
args__19135__auto__.push((arguments[i__19126__auto___41877]));

var G__41878 = (i__19126__auto___41877 + (1));
i__19126__auto___41877 = G__41878;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq41875){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41875));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41880 = arguments.length;
var i__19126__auto___41881 = (0);
while(true){
if((i__19126__auto___41881 < len__19125__auto___41880)){
args__19135__auto__.push((arguments[i__19126__auto___41881]));

var G__41882 = (i__19126__auto___41881 + (1));
i__19126__auto___41881 = G__41882;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq41879){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41879));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41884 = arguments.length;
var i__19126__auto___41885 = (0);
while(true){
if((i__19126__auto___41885 < len__19125__auto___41884)){
args__19135__auto__.push((arguments[i__19126__auto___41885]));

var G__41886 = (i__19126__auto___41885 + (1));
i__19126__auto___41885 = G__41886;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq41883){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41883));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41888 = arguments.length;
var i__19126__auto___41889 = (0);
while(true){
if((i__19126__auto___41889 < len__19125__auto___41888)){
args__19135__auto__.push((arguments[i__19126__auto___41889]));

var G__41890 = (i__19126__auto___41889 + (1));
i__19126__auto___41889 = G__41890;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq41887){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41887));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41892 = arguments.length;
var i__19126__auto___41893 = (0);
while(true){
if((i__19126__auto___41893 < len__19125__auto___41892)){
args__19135__auto__.push((arguments[i__19126__auto___41893]));

var G__41894 = (i__19126__auto___41893 + (1));
i__19126__auto___41893 = G__41894;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq41891){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41891));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41902 = arguments.length;
var i__19126__auto___41903 = (0);
while(true){
if((i__19126__auto___41903 < len__19125__auto___41902)){
args__19135__auto__.push((arguments[i__19126__auto___41903]));

var G__41904 = (i__19126__auto___41903 + (1));
i__19126__auto___41903 = G__41904;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41898){
var vec__41899 = p__41898;
var state_override = cljs.core.nth.call(null,vec__41899,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__41899,state_override){
return (function (p1__41895_SHARP_){
return cljs.core.merge.call(null,p1__41895_SHARP_,state_override);
});})(vec__41899,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq41896){
var G__41897 = cljs.core.first.call(null,seq41896);
var seq41896__$1 = cljs.core.next.call(null,seq41896);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41897,seq41896__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41906 = arguments.length;
var i__19126__auto___41907 = (0);
while(true){
if((i__19126__auto___41907 < len__19125__auto___41906)){
args__19135__auto__.push((arguments[i__19126__auto___41907]));

var G__41908 = (i__19126__auto___41907 + (1));
i__19126__auto___41907 = G__41908;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq41905){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41905));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__19135__auto__ = [];
var len__19125__auto___41911 = arguments.length;
var i__19126__auto___41912 = (0);
while(true){
if((i__19126__auto___41912 < len__19125__auto___41911)){
args__19135__auto__.push((arguments[i__19126__auto___41912]));

var G__41913 = (i__19126__auto___41912 + (1));
i__19126__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
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
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq41909){
var G__41910 = cljs.core.first.call(null,seq41909);
var seq41909__$1 = cljs.core.next.call(null,seq41909);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41910,seq41909__$1);
});


//# sourceMappingURL=format.js.map
