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
var x__18567__auto__ = (((value == null))?null:value);
var m__18568__auto__ = (devtools.format._header[goog.typeOf(x__18567__auto__)]);
if((!((m__18568__auto__ == null)))){
return m__18568__auto__.call(null,value);
} else {
var m__18565__auto__ = (devtools.format._header["_"]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,value);
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
var x__18567__auto__ = (((value == null))?null:value);
var m__18568__auto__ = (devtools.format._has_body[goog.typeOf(x__18567__auto__)]);
if((!((m__18568__auto__ == null)))){
return m__18568__auto__.call(null,value);
} else {
var m__18565__auto__ = (devtools.format._has_body["_"]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,value);
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
var x__18567__auto__ = (((value == null))?null:value);
var m__18568__auto__ = (devtools.format._body[goog.typeOf(x__18567__auto__)]);
if((!((m__18568__auto__ == null)))){
return m__18568__auto__.call(null,value);
} else {
var m__18565__auto__ = (devtools.format._body["_"]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,value);
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
var o34633 = temp__5718__auto__;
var temp__5718__auto____$1 = (o34633["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o34634 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o34634["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o34635 = temp__5718__auto____$2;
return (o34635["make_template"]);
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
var o34636 = temp__5718__auto__;
var temp__5718__auto____$1 = (o34636["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o34637 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o34637["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o34638 = temp__5718__auto____$2;
return (o34638["make_group"]);
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
var o34639 = temp__5718__auto__;
var temp__5718__auto____$1 = (o34639["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o34640 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o34640["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o34641 = temp__5718__auto____$2;
return (o34641["make_reference"]);
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
var o34642 = temp__5718__auto__;
var temp__5718__auto____$1 = (o34642["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o34643 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o34643["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o34644 = temp__5718__auto____$2;
return (o34644["make_surrogate"]);
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
var o34645 = temp__5718__auto__;
var temp__5718__auto____$1 = (o34645["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o34646 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o34646["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o34647 = temp__5718__auto____$2;
return (o34647["render_markup"]);
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
var o34648 = temp__5718__auto__;
var temp__5718__auto____$1 = (o34648["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o34649 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o34649["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o34650 = temp__5718__auto____$2;
return (o34650["_LT_header_GT_"]);
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
var o34651 = temp__5718__auto__;
var temp__5718__auto____$1 = (o34651["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o34652 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o34652["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o34653 = temp__5718__auto____$2;
return (o34653["_LT_standard_body_GT_"]);
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
var args__19138__auto__ = [];
var len__19128__auto___34655 = arguments.length;
var i__19129__auto___34656 = (0);
while(true){
if((i__19129__auto___34656 < len__19128__auto___34655)){
args__19138__auto__.push((arguments[i__19129__auto___34656]));

var G__34657 = (i__19129__auto___34656 + (1));
i__19129__auto___34656 = G__34657;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq34654){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34654));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34659 = arguments.length;
var i__19129__auto___34660 = (0);
while(true){
if((i__19129__auto___34660 < len__19128__auto___34659)){
args__19138__auto__.push((arguments[i__19129__auto___34660]));

var G__34661 = (i__19129__auto___34660 + (1));
i__19129__auto___34660 = G__34661;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq34658){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34658));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34663 = arguments.length;
var i__19129__auto___34664 = (0);
while(true){
if((i__19129__auto___34664 < len__19128__auto___34663)){
args__19138__auto__.push((arguments[i__19129__auto___34664]));

var G__34665 = (i__19129__auto___34664 + (1));
i__19129__auto___34664 = G__34665;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq34662){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34662));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34667 = arguments.length;
var i__19129__auto___34668 = (0);
while(true){
if((i__19129__auto___34668 < len__19128__auto___34667)){
args__19138__auto__.push((arguments[i__19129__auto___34668]));

var G__34669 = (i__19129__auto___34668 + (1));
i__19129__auto___34668 = G__34669;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq34666){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34666));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34671 = arguments.length;
var i__19129__auto___34672 = (0);
while(true){
if((i__19129__auto___34672 < len__19128__auto___34671)){
args__19138__auto__.push((arguments[i__19129__auto___34672]));

var G__34673 = (i__19129__auto___34672 + (1));
i__19129__auto___34672 = G__34673;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq34670){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34670));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34675 = arguments.length;
var i__19129__auto___34676 = (0);
while(true){
if((i__19129__auto___34676 < len__19128__auto___34675)){
args__19138__auto__.push((arguments[i__19129__auto___34676]));

var G__34677 = (i__19129__auto___34676 + (1));
i__19129__auto___34676 = G__34677;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq34674){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34674));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34679 = arguments.length;
var i__19129__auto___34680 = (0);
while(true){
if((i__19129__auto___34680 < len__19128__auto___34679)){
args__19138__auto__.push((arguments[i__19129__auto___34680]));

var G__34681 = (i__19129__auto___34680 + (1));
i__19129__auto___34680 = G__34681;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq34678){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34678));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34689 = arguments.length;
var i__19129__auto___34690 = (0);
while(true){
if((i__19129__auto___34690 < len__19128__auto___34689)){
args__19138__auto__.push((arguments[i__19129__auto___34690]));

var G__34691 = (i__19129__auto___34690 + (1));
i__19129__auto___34690 = G__34691;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__34685){
var vec__34686 = p__34685;
var state_override = cljs.core.nth.call(null,vec__34686,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__34686,state_override){
return (function (p1__34682_SHARP_){
return cljs.core.merge.call(null,p1__34682_SHARP_,state_override);
});})(vec__34686,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq34683){
var G__34684 = cljs.core.first.call(null,seq34683);
var seq34683__$1 = cljs.core.next.call(null,seq34683);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34684,seq34683__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34693 = arguments.length;
var i__19129__auto___34694 = (0);
while(true){
if((i__19129__auto___34694 < len__19128__auto___34693)){
args__19138__auto__.push((arguments[i__19129__auto___34694]));

var G__34695 = (i__19129__auto___34694 + (1));
i__19129__auto___34694 = G__34695;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq34692){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34692));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__19138__auto__ = [];
var len__19128__auto___34698 = arguments.length;
var i__19129__auto___34699 = (0);
while(true){
if((i__19129__auto___34699 < len__19128__auto___34698)){
args__19138__auto__.push((arguments[i__19129__auto___34699]));

var G__34700 = (i__19129__auto___34699 + (1));
i__19129__auto___34699 = G__34700;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
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
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq34696){
var G__34697 = cljs.core.first.call(null,seq34696);
var seq34696__$1 = cljs.core.next.call(null,seq34696);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34697,seq34696__$1);
});


//# sourceMappingURL=format.js.map
