// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x44864_44865 = value;
x44864_44865.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x44867_44868 = value;
x44867_44868.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x44870_44871 = value;
x44870_44871.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var args__19135__auto__ = [];
var len__19125__auto___44878 = arguments.length;
var i__19126__auto___44879 = (0);
while(true){
if((i__19126__auto___44879 < len__19125__auto___44878)){
args__19135__auto__.push((arguments[i__19126__auto___44879]));

var G__44880 = (i__19126__auto___44879 + (1));
i__19126__auto___44879 = G__44880;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__44874_44881 = cljs.core.seq.call(null,items);
var chunk__44875_44882 = null;
var count__44876_44883 = (0);
var i__44877_44884 = (0);
while(true){
if((i__44877_44884 < count__44876_44883)){
var item_44885 = cljs.core._nth.call(null,chunk__44875_44882,i__44877_44884);
if((!((item_44885 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_44885)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_44885)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_44885));
}
} else {
}


var G__44886 = seq__44874_44881;
var G__44887 = chunk__44875_44882;
var G__44888 = count__44876_44883;
var G__44889 = (i__44877_44884 + (1));
seq__44874_44881 = G__44886;
chunk__44875_44882 = G__44887;
count__44876_44883 = G__44888;
i__44877_44884 = G__44889;
continue;
} else {
var temp__5720__auto___44890 = cljs.core.seq.call(null,seq__44874_44881);
if(temp__5720__auto___44890){
var seq__44874_44891__$1 = temp__5720__auto___44890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44874_44891__$1)){
var c__18773__auto___44892 = cljs.core.chunk_first.call(null,seq__44874_44891__$1);
var G__44893 = cljs.core.chunk_rest.call(null,seq__44874_44891__$1);
var G__44894 = c__18773__auto___44892;
var G__44895 = cljs.core.count.call(null,c__18773__auto___44892);
var G__44896 = (0);
seq__44874_44881 = G__44893;
chunk__44875_44882 = G__44894;
count__44876_44883 = G__44895;
i__44877_44884 = G__44896;
continue;
} else {
var item_44897 = cljs.core.first.call(null,seq__44874_44891__$1);
if((!((item_44897 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_44897)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_44897)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_44897));
}
} else {
}


var G__44898 = cljs.core.next.call(null,seq__44874_44891__$1);
var G__44899 = null;
var G__44900 = (0);
var G__44901 = (0);
seq__44874_44881 = G__44898;
chunk__44875_44882 = G__44899;
count__44876_44883 = G__44900;
i__44877_44884 = G__44901;
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
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq44873){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44873));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__19135__auto__ = [];
var len__19125__auto___44909 = arguments.length;
var i__19126__auto___44910 = (0);
while(true){
if((i__19126__auto___44910 < len__19125__auto___44909)){
args__19135__auto__.push((arguments[i__19126__auto___44910]));

var G__44911 = (i__19126__auto___44910 + (1));
i__19126__auto___44910 = G__44911;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((2) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19136__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__44905_44912 = cljs.core.seq.call(null,children);
var chunk__44906_44913 = null;
var count__44907_44914 = (0);
var i__44908_44915 = (0);
while(true){
if((i__44908_44915 < count__44907_44914)){
var child_44916 = cljs.core._nth.call(null,chunk__44906_44913,i__44908_44915);
if((!((child_44916 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_44916)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_44916))));
} else {
var temp__5718__auto___44917 = devtools.formatters.helpers.pref.call(null,child_44916);
if(cljs.core.truth_(temp__5718__auto___44917)){
var child_value_44918 = temp__5718__auto___44917;
template.push(child_value_44918);
} else {
}
}
} else {
}


var G__44919 = seq__44905_44912;
var G__44920 = chunk__44906_44913;
var G__44921 = count__44907_44914;
var G__44922 = (i__44908_44915 + (1));
seq__44905_44912 = G__44919;
chunk__44906_44913 = G__44920;
count__44907_44914 = G__44921;
i__44908_44915 = G__44922;
continue;
} else {
var temp__5720__auto___44923 = cljs.core.seq.call(null,seq__44905_44912);
if(temp__5720__auto___44923){
var seq__44905_44924__$1 = temp__5720__auto___44923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44905_44924__$1)){
var c__18773__auto___44925 = cljs.core.chunk_first.call(null,seq__44905_44924__$1);
var G__44926 = cljs.core.chunk_rest.call(null,seq__44905_44924__$1);
var G__44927 = c__18773__auto___44925;
var G__44928 = cljs.core.count.call(null,c__18773__auto___44925);
var G__44929 = (0);
seq__44905_44912 = G__44926;
chunk__44906_44913 = G__44927;
count__44907_44914 = G__44928;
i__44908_44915 = G__44929;
continue;
} else {
var child_44930 = cljs.core.first.call(null,seq__44905_44924__$1);
if((!((child_44930 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_44930)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_44930))));
} else {
var temp__5718__auto___44931 = devtools.formatters.helpers.pref.call(null,child_44930);
if(cljs.core.truth_(temp__5718__auto___44931)){
var child_value_44932 = temp__5718__auto___44931;
template.push(child_value_44932);
} else {
}
}
} else {
}


var G__44933 = cljs.core.next.call(null,seq__44905_44924__$1);
var G__44934 = null;
var G__44935 = (0);
var G__44936 = (0);
seq__44905_44912 = G__44933;
chunk__44906_44913 = G__44934;
count__44907_44914 = G__44935;
i__44908_44915 = G__44936;
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
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq44902){
var G__44903 = cljs.core.first.call(null,seq44902);
var seq44902__$1 = cljs.core.next.call(null,seq44902);
var G__44904 = cljs.core.first.call(null,seq44902__$1);
var seq44902__$2 = cljs.core.next.call(null,seq44902__$1);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44903,G__44904,seq44902__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__19135__auto__ = [];
var len__19125__auto___44939 = arguments.length;
var i__19126__auto___44940 = (0);
while(true){
if((i__19126__auto___44940 < len__19125__auto___44939)){
args__19135__auto__.push((arguments[i__19126__auto___44940]));

var G__44941 = (i__19126__auto___44940 + (1));
i__19126__auto___44940 = G__44941;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq44937){
var G__44938 = cljs.core.first.call(null,seq44937);
var seq44937__$1 = cljs.core.next.call(null,seq44937);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44938,seq44937__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__19135__auto__ = [];
var len__19125__auto___44944 = arguments.length;
var i__19126__auto___44945 = (0);
while(true){
if((i__19126__auto___44945 < len__19125__auto___44944)){
args__19135__auto__.push((arguments[i__19126__auto___44945]));

var G__44946 = (i__19126__auto___44945 + (1));
i__19126__auto___44945 = G__44946;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq44942){
var G__44943 = cljs.core.first.call(null,seq44942);
var seq44942__$1 = cljs.core.next.call(null,seq44942);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44943,seq44942__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__44948 = arguments.length;
switch (G__44948) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj44950 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__17816__auto__ = start_index;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (0);
}
})()});
return obj44950;
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
var args__19135__auto__ = [];
var len__19125__auto___44958 = arguments.length;
var i__19126__auto___44959 = (0);
while(true){
if((i__19126__auto___44959 < len__19125__auto___44958)){
args__19135__auto__.push((arguments[i__19126__auto___44959]));

var G__44960 = (i__19126__auto___44959 + (1));
i__19126__auto___44959 = G__44960;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__44954){
var vec__44955 = p__44954;
var state_override_fn = cljs.core.nth.call(null,vec__44955,(0),null);
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
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq44952){
var G__44953 = cljs.core.first.call(null,seq44952);
var seq44952__$1 = cljs.core.next.call(null,seq44952);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44953,seq44952__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__44961 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__44962 = (1);
cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44962;

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44961;
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
var G__44963 = name;
switch (G__44963) {
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
var vec__44965 = tag;
var html_tag = cljs.core.nth.call(null,vec__44965,(0),null);
var style = cljs.core.nth.call(null,vec__44965,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__44968 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__44969 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__44969;

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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__44968;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__44970 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__44971 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__44972 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__44973 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__44972;

devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__44973;

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__44971;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__44970;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__44974 = initial_value;
var G__44975 = value.call(null);
initial_value = G__44974;
value = G__44975;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__44976 = initial_value;
var G__44977 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__44976;
value = G__44977;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__44978 = initial_value;
var G__44979 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__44978;
value = G__44979;
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
