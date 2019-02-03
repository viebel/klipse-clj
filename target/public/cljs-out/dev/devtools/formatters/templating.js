// Compiled by ClojureScript 1.10.492 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x35674_35675 = value;
x35674_35675.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x35677_35678 = value;
x35677_35678.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x35680_35681 = value;
x35680_35681.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__19138__auto__ = [];
var len__19128__auto___35688 = arguments.length;
var i__19129__auto___35689 = (0);
while(true){
if((i__19129__auto___35689 < len__19128__auto___35688)){
args__19138__auto__.push((arguments[i__19129__auto___35689]));

var G__35690 = (i__19129__auto___35689 + (1));
i__19129__auto___35689 = G__35690;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__35684_35691 = cljs.core.seq.call(null,items);
var chunk__35685_35692 = null;
var count__35686_35693 = (0);
var i__35687_35694 = (0);
while(true){
if((i__35687_35694 < count__35686_35693)){
var item_35695 = cljs.core._nth.call(null,chunk__35685_35692,i__35687_35694);
if((!((item_35695 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_35695)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_35695)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_35695));
}
} else {
}


var G__35696 = seq__35684_35691;
var G__35697 = chunk__35685_35692;
var G__35698 = count__35686_35693;
var G__35699 = (i__35687_35694 + (1));
seq__35684_35691 = G__35696;
chunk__35685_35692 = G__35697;
count__35686_35693 = G__35698;
i__35687_35694 = G__35699;
continue;
} else {
var temp__5720__auto___35700 = cljs.core.seq.call(null,seq__35684_35691);
if(temp__5720__auto___35700){
var seq__35684_35701__$1 = temp__5720__auto___35700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35684_35701__$1)){
var c__18776__auto___35702 = cljs.core.chunk_first.call(null,seq__35684_35701__$1);
var G__35703 = cljs.core.chunk_rest.call(null,seq__35684_35701__$1);
var G__35704 = c__18776__auto___35702;
var G__35705 = cljs.core.count.call(null,c__18776__auto___35702);
var G__35706 = (0);
seq__35684_35691 = G__35703;
chunk__35685_35692 = G__35704;
count__35686_35693 = G__35705;
i__35687_35694 = G__35706;
continue;
} else {
var item_35707 = cljs.core.first.call(null,seq__35684_35701__$1);
if((!((item_35707 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_35707)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_35707)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_35707));
}
} else {
}


var G__35708 = cljs.core.next.call(null,seq__35684_35701__$1);
var G__35709 = null;
var G__35710 = (0);
var G__35711 = (0);
seq__35684_35691 = G__35708;
chunk__35685_35692 = G__35709;
count__35686_35693 = G__35710;
i__35687_35694 = G__35711;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq35683){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35683));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__19138__auto__ = [];
var len__19128__auto___35719 = arguments.length;
var i__19129__auto___35720 = (0);
while(true){
if((i__19129__auto___35720 < len__19128__auto___35719)){
args__19138__auto__.push((arguments[i__19129__auto___35720]));

var G__35721 = (i__19129__auto___35720 + (1));
i__19129__auto___35720 = G__35721;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((2) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19139__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__35715_35722 = cljs.core.seq.call(null,children);
var chunk__35716_35723 = null;
var count__35717_35724 = (0);
var i__35718_35725 = (0);
while(true){
if((i__35718_35725 < count__35717_35724)){
var child_35726 = cljs.core._nth.call(null,chunk__35716_35723,i__35718_35725);
if((!((child_35726 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_35726)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_35726))));
} else {
var temp__5718__auto___35727 = devtools.formatters.helpers.pref.call(null,child_35726);
if(cljs.core.truth_(temp__5718__auto___35727)){
var child_value_35728 = temp__5718__auto___35727;
template.push(child_value_35728);
} else {
}
}
} else {
}


var G__35729 = seq__35715_35722;
var G__35730 = chunk__35716_35723;
var G__35731 = count__35717_35724;
var G__35732 = (i__35718_35725 + (1));
seq__35715_35722 = G__35729;
chunk__35716_35723 = G__35730;
count__35717_35724 = G__35731;
i__35718_35725 = G__35732;
continue;
} else {
var temp__5720__auto___35733 = cljs.core.seq.call(null,seq__35715_35722);
if(temp__5720__auto___35733){
var seq__35715_35734__$1 = temp__5720__auto___35733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35715_35734__$1)){
var c__18776__auto___35735 = cljs.core.chunk_first.call(null,seq__35715_35734__$1);
var G__35736 = cljs.core.chunk_rest.call(null,seq__35715_35734__$1);
var G__35737 = c__18776__auto___35735;
var G__35738 = cljs.core.count.call(null,c__18776__auto___35735);
var G__35739 = (0);
seq__35715_35722 = G__35736;
chunk__35716_35723 = G__35737;
count__35717_35724 = G__35738;
i__35718_35725 = G__35739;
continue;
} else {
var child_35740 = cljs.core.first.call(null,seq__35715_35734__$1);
if((!((child_35740 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_35740)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_35740))));
} else {
var temp__5718__auto___35741 = devtools.formatters.helpers.pref.call(null,child_35740);
if(cljs.core.truth_(temp__5718__auto___35741)){
var child_value_35742 = temp__5718__auto___35741;
template.push(child_value_35742);
} else {
}
}
} else {
}


var G__35743 = cljs.core.next.call(null,seq__35715_35734__$1);
var G__35744 = null;
var G__35745 = (0);
var G__35746 = (0);
seq__35715_35722 = G__35743;
chunk__35716_35723 = G__35744;
count__35717_35724 = G__35745;
i__35718_35725 = G__35746;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq35712){
var G__35713 = cljs.core.first.call(null,seq35712);
var seq35712__$1 = cljs.core.next.call(null,seq35712);
var G__35714 = cljs.core.first.call(null,seq35712__$1);
var seq35712__$2 = cljs.core.next.call(null,seq35712__$1);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35713,G__35714,seq35712__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__19138__auto__ = [];
var len__19128__auto___35749 = arguments.length;
var i__19129__auto___35750 = (0);
while(true){
if((i__19129__auto___35750 < len__19128__auto___35749)){
args__19138__auto__.push((arguments[i__19129__auto___35750]));

var G__35751 = (i__19129__auto___35750 + (1));
i__19129__auto___35750 = G__35751;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq35747){
var G__35748 = cljs.core.first.call(null,seq35747);
var seq35747__$1 = cljs.core.next.call(null,seq35747);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35748,seq35747__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__19138__auto__ = [];
var len__19128__auto___35754 = arguments.length;
var i__19129__auto___35755 = (0);
while(true){
if((i__19129__auto___35755 < len__19128__auto___35754)){
args__19138__auto__.push((arguments[i__19129__auto___35755]));

var G__35756 = (i__19129__auto___35755 + (1));
i__19129__auto___35755 = G__35756;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq35752){
var G__35753 = cljs.core.first.call(null,seq35752);
var seq35752__$1 = cljs.core.next.call(null,seq35752);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35753,seq35752__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__35758 = arguments.length;
switch (G__35758) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj35760 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__17819__auto__ = start_index;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return (0);
}
})()});
return obj35760;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__19138__auto__ = [];
var len__19128__auto___35768 = arguments.length;
var i__19129__auto___35769 = (0);
while(true){
if((i__19129__auto___35769 < len__19128__auto___35768)){
args__19138__auto__.push((arguments[i__19129__auto___35769]));

var G__35770 = (i__19129__auto___35769 + (1));
i__19129__auto___35769 = G__35770;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35764){
var vec__35765 = p__35764;
var state_override_fn = cljs.core.nth.call(null,vec__35765,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq35762){
var G__35763 = cljs.core.first.call(null,seq35762);
var seq35762__$1 = cljs.core.next.call(null,seq35762);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35763,seq35762__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__35771 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__35772 = (1);
cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35772;

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35771;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__35773 = name;
switch (G__35773) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__35775 = tag;
var html_tag = cljs.core.nth.call(null,vec__35775,(0),null);
var style = cljs.core.nth.call(null,vec__35775,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__35778 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__35779 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__35779;

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__35778;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__35780 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__35781 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__35782 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__35783 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__35782;

devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__35783;

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__35781;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__35780;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__35784 = initial_value;
var G__35785 = value.call(null);
initial_value = G__35784;
value = G__35785;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__35786 = initial_value;
var G__35787 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__35786;
value = G__35787;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__35788 = initial_value;
var G__35789 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__35788;
value = G__35789;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map
