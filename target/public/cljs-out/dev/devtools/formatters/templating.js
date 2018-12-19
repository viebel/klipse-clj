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
var x37674_37675 = value;
x37674_37675.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x37677_37678 = value;
x37677_37678.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x37680_37681 = value;
x37680_37681.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var args__4607__auto__ = [];
var len__4601__auto___37688 = arguments.length;
var i__4602__auto___37689 = (0);
while(true){
if((i__4602__auto___37689 < len__4601__auto___37688)){
args__4607__auto__.push((arguments[i__4602__auto___37689]));

var G__37690 = (i__4602__auto___37689 + (1));
i__4602__auto___37689 = G__37690;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__37684_37691 = cljs.core.seq.call(null,items);
var chunk__37685_37692 = null;
var count__37686_37693 = (0);
var i__37687_37694 = (0);
while(true){
if((i__37687_37694 < count__37686_37693)){
var item_37695 = cljs.core._nth.call(null,chunk__37685_37692,i__37687_37694);
if((!((item_37695 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_37695)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_37695)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_37695));
}
} else {
}


var G__37696 = seq__37684_37691;
var G__37697 = chunk__37685_37692;
var G__37698 = count__37686_37693;
var G__37699 = (i__37687_37694 + (1));
seq__37684_37691 = G__37696;
chunk__37685_37692 = G__37697;
count__37686_37693 = G__37698;
i__37687_37694 = G__37699;
continue;
} else {
var temp__5720__auto___37700 = cljs.core.seq.call(null,seq__37684_37691);
if(temp__5720__auto___37700){
var seq__37684_37701__$1 = temp__5720__auto___37700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37684_37701__$1)){
var c__4421__auto___37702 = cljs.core.chunk_first.call(null,seq__37684_37701__$1);
var G__37703 = cljs.core.chunk_rest.call(null,seq__37684_37701__$1);
var G__37704 = c__4421__auto___37702;
var G__37705 = cljs.core.count.call(null,c__4421__auto___37702);
var G__37706 = (0);
seq__37684_37691 = G__37703;
chunk__37685_37692 = G__37704;
count__37686_37693 = G__37705;
i__37687_37694 = G__37706;
continue;
} else {
var item_37707 = cljs.core.first.call(null,seq__37684_37701__$1);
if((!((item_37707 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_37707)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_37707)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_37707));
}
} else {
}


var G__37708 = cljs.core.next.call(null,seq__37684_37701__$1);
var G__37709 = null;
var G__37710 = (0);
var G__37711 = (0);
seq__37684_37691 = G__37708;
chunk__37685_37692 = G__37709;
count__37686_37693 = G__37710;
i__37687_37694 = G__37711;
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
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq37683){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37683));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4607__auto__ = [];
var len__4601__auto___37719 = arguments.length;
var i__4602__auto___37720 = (0);
while(true){
if((i__4602__auto___37720 < len__4601__auto___37719)){
args__4607__auto__.push((arguments[i__4602__auto___37720]));

var G__37721 = (i__4602__auto___37720 + (1));
i__4602__auto___37720 = G__37721;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((2) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4608__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__37715_37722 = cljs.core.seq.call(null,children);
var chunk__37716_37723 = null;
var count__37717_37724 = (0);
var i__37718_37725 = (0);
while(true){
if((i__37718_37725 < count__37717_37724)){
var child_37726 = cljs.core._nth.call(null,chunk__37716_37723,i__37718_37725);
if((!((child_37726 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_37726)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_37726))));
} else {
var temp__5718__auto___37727 = devtools.formatters.helpers.pref.call(null,child_37726);
if(cljs.core.truth_(temp__5718__auto___37727)){
var child_value_37728 = temp__5718__auto___37727;
template.push(child_value_37728);
} else {
}
}
} else {
}


var G__37729 = seq__37715_37722;
var G__37730 = chunk__37716_37723;
var G__37731 = count__37717_37724;
var G__37732 = (i__37718_37725 + (1));
seq__37715_37722 = G__37729;
chunk__37716_37723 = G__37730;
count__37717_37724 = G__37731;
i__37718_37725 = G__37732;
continue;
} else {
var temp__5720__auto___37733 = cljs.core.seq.call(null,seq__37715_37722);
if(temp__5720__auto___37733){
var seq__37715_37734__$1 = temp__5720__auto___37733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37715_37734__$1)){
var c__4421__auto___37735 = cljs.core.chunk_first.call(null,seq__37715_37734__$1);
var G__37736 = cljs.core.chunk_rest.call(null,seq__37715_37734__$1);
var G__37737 = c__4421__auto___37735;
var G__37738 = cljs.core.count.call(null,c__4421__auto___37735);
var G__37739 = (0);
seq__37715_37722 = G__37736;
chunk__37716_37723 = G__37737;
count__37717_37724 = G__37738;
i__37718_37725 = G__37739;
continue;
} else {
var child_37740 = cljs.core.first.call(null,seq__37715_37734__$1);
if((!((child_37740 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_37740)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_37740))));
} else {
var temp__5718__auto___37741 = devtools.formatters.helpers.pref.call(null,child_37740);
if(cljs.core.truth_(temp__5718__auto___37741)){
var child_value_37742 = temp__5718__auto___37741;
template.push(child_value_37742);
} else {
}
}
} else {
}


var G__37743 = cljs.core.next.call(null,seq__37715_37734__$1);
var G__37744 = null;
var G__37745 = (0);
var G__37746 = (0);
seq__37715_37722 = G__37743;
chunk__37716_37723 = G__37744;
count__37717_37724 = G__37745;
i__37718_37725 = G__37746;
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
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq37712){
var G__37713 = cljs.core.first.call(null,seq37712);
var seq37712__$1 = cljs.core.next.call(null,seq37712);
var G__37714 = cljs.core.first.call(null,seq37712__$1);
var seq37712__$2 = cljs.core.next.call(null,seq37712__$1);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37713,G__37714,seq37712__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4607__auto__ = [];
var len__4601__auto___37749 = arguments.length;
var i__4602__auto___37750 = (0);
while(true){
if((i__4602__auto___37750 < len__4601__auto___37749)){
args__4607__auto__.push((arguments[i__4602__auto___37750]));

var G__37751 = (i__4602__auto___37750 + (1));
i__4602__auto___37750 = G__37751;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq37747){
var G__37748 = cljs.core.first.call(null,seq37747);
var seq37747__$1 = cljs.core.next.call(null,seq37747);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37748,seq37747__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4607__auto__ = [];
var len__4601__auto___37754 = arguments.length;
var i__4602__auto___37755 = (0);
while(true){
if((i__4602__auto___37755 < len__4601__auto___37754)){
args__4607__auto__.push((arguments[i__4602__auto___37755]));

var G__37756 = (i__4602__auto___37755 + (1));
i__4602__auto___37755 = G__37756;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq37752){
var G__37753 = cljs.core.first.call(null,seq37752);
var seq37752__$1 = cljs.core.next.call(null,seq37752);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37753,seq37752__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__37758 = arguments.length;
switch (G__37758) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj37760 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4002__auto__ = start_index;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (0);
}
})()});
return obj37760;
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
var args__4607__auto__ = [];
var len__4601__auto___37768 = arguments.length;
var i__4602__auto___37769 = (0);
while(true){
if((i__4602__auto___37769 < len__4601__auto___37768)){
args__4607__auto__.push((arguments[i__4602__auto___37769]));

var G__37770 = (i__4602__auto___37769 + (1));
i__4602__auto___37769 = G__37770;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37764){
var vec__37765 = p__37764;
var state_override_fn = cljs.core.nth.call(null,vec__37765,(0),null);
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
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq37762){
var G__37763 = cljs.core.first.call(null,seq37762);
var seq37762__$1 = cljs.core.next.call(null,seq37762);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37763,seq37762__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__37771 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__37772 = (1);
cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__37772;

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__37771;
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
var G__37773 = name;
switch (G__37773) {
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
var vec__37775 = tag;
var html_tag = cljs.core.nth.call(null,vec__37775,(0),null);
var style = cljs.core.nth.call(null,vec__37775,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__37778 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__37779 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__37779;

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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__37778;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__37780 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__37781 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__37782 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__37783 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__37782;

devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__37783;

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__37781;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__37780;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__37784 = initial_value;
var G__37785 = value.call(null);
initial_value = G__37784;
value = G__37785;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__37786 = initial_value;
var G__37787 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__37786;
value = G__37787;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__37788 = initial_value;
var G__37789 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__37788;
value = G__37789;
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
