// Compiled by ClojureScript 1.10.238 {}
goog.provide('parinfer.indent_mode');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer.string');
goog.require('parinfer.reader');
/**
 * An initial state of our running state.
 */
parinfer.indent_mode.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),new cljs.core.Keyword(null,"backup","backup",26347393),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762)],[cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),null,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),null], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,false,(-1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null)]);
/**
 * Update the state by inferring closing delimiters.
 *   Do this by using the given indentation level.
 * 
 *   Example:
 * 
 *   (defn foo [a b
 *   ret           ;; <---  When we process `r`, we detect indentation, then...
 * 
 *   (defn foo [a b]  ;; <---  ... we insert a `]` after `b` since `[` is after `r` on the x-axis.
 *   ret           ;; <---  A `)` is inserted after `ret` if no further indented lines found.
 *   
 */
parinfer.indent_mode.close_delims = (function parinfer$indent_mode$close_delims(var_args){
var G__113794 = arguments.length;
switch (G__113794) {
case 1:
return parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$1 = (function (state){
return parinfer.indent_mode.close_delims.call(null,state,(0));
});

parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2 = (function (state,indent_x){
var vec__113795 = (function (){var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state);
var delims = "";
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,stack))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,delims], null);
} else {
var map__113799 = cljs.core.peek.call(null,stack);
var map__113799__$1 = ((((!((map__113799 == null)))?(((((map__113799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113799):map__113799);
var x_pos = cljs.core.get.call(null,map__113799__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.call(null,map__113799__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if((x_pos >= indent_x)){
var G__113803 = cljs.core.pop.call(null,stack);
var G__113804 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(delims),cljs.core.str.cljs$core$IFn$_invoke$arity$1(parinfer.reader.matching_delim.call(null,ch))].join('');
stack = G__113803;
delims = G__113804;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,delims], null);
}
}
break;
}
})();
var stack = cljs.core.nth.call(null,vec__113795,(0),null);
var delims = cljs.core.nth.call(null,vec__113795,(1),null);
var map__113798 = new cljs.core.Keyword(null,"insert","insert",1286475395).cljs$core$IFn$_invoke$arity$1(state);
var map__113798__$1 = ((((!((map__113798 == null)))?(((((map__113798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113798):map__113798);
var line_dy = cljs.core.get.call(null,map__113798__$1,new cljs.core.Keyword(null,"line-dy","line-dy",41667486));
var x_pos = cljs.core.get.call(null,map__113798__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var line_no = (new cljs.core.Keyword(null,"line-no","line-no",-666819466).cljs$core$IFn$_invoke$arity$1(state) + line_dy);
var state__$1 = cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),parinfer.string.insert_string,x_pos,delims),new cljs.core.Keyword(null,"stack","stack",-793405930),stack);
return state__$1;
});

parinfer.indent_mode.close_delims.cljs$lang$maxFixedArity = 2;

/**
 * Update the state's delim trail as we scan across a line.
 *   We eventually remove the delim trail since the indented
 *   content below can cause the delims to move.
 * 
 *   Example:
 * 
 *   (foo (+ 2 3) [(bar)] )    ;; a potential comment
 *                  ^^^^
 *                   |
 *                   +-- trailing delims that we will remove
 *                        (notice whitespace will also be removed)
 *   
 */
parinfer.indent_mode.update_delim_trail = (function parinfer$indent_mode$update_delim_trail(p__113806){
var map__113807 = p__113806;
var map__113807__$1 = ((((!((map__113807 == null)))?(((((map__113807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113807):map__113807);
var state = map__113807__$1;
var stack = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var delim_trail = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var backup = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var x_pos = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var cursor_line = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_x = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_in_comment_QMARK_ = cljs.core.get.call(null,map__113807__$1,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135));
var pass_char_QMARK_ = (function (){var or__3922__auto__ = cljs.core._EQ_.call(null,";",ch);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core._EQ_.call(null,",",ch);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = parinfer.reader.whitespace_QMARK_.call(null,ch);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return parinfer.reader.closing_delim_QMARK_.call(null,ch);
}
}
}
})();
var reset_QMARK_ = (cljs.core.truth_(parinfer.reader.in_code_QMARK_.call(null,stack))?(function (){var or__3922__auto__ = parinfer.reader.escaping_QMARK_.call(null,stack);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not.call(null,pass_char_QMARK_);
}
})():null);
var cursor_in_comment_QMARK___$1 = (function (){var or__3922__auto__ = cursor_in_comment_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto__ = cljs.core._EQ_.call(null,cursor_line,line_no);
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core._EQ_.call(null,x_pos,cursor_x);
if(and__3911__auto____$1){
return parinfer.reader.in_comment_QMARK_.call(null,stack);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
}
})();
var update_QMARK_ = (function (){var and__3911__auto__ = parinfer.reader.in_code_QMARK_.call(null,stack);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core.not.call(null,parinfer.reader.escaping_QMARK_.call(null,stack));
if(and__3911__auto____$1){
var and__3911__auto____$2 = parinfer.reader.closing_delim_QMARK_.call(null,ch);
if(cljs.core.truth_(and__3911__auto____$2)){
return parinfer.reader.valid_closer_QMARK_.call(null,stack,ch);
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var backup__$1 = (function (){var G__113809 = backup;
if(cljs.core.truth_(reset_QMARK_)){
return cljs.core.empty.call(null,G__113809);
} else {
return G__113809;
}
})();
var delim_trail__$1 = (cljs.core.truth_(reset_QMARK_)?cljs.core.PersistentArrayMap.EMPTY:(cljs.core.truth_(update_QMARK_)?cljs.core.assoc.call(null,cljs.core.update_in.call(null,delim_trail,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),((function (pass_char_QMARK_,reset_QMARK_,cursor_in_comment_QMARK___$1,update_QMARK_,backup__$1,map__113807,map__113807__$1,state,stack,delim_trail,backup,x_pos,ch,cursor_line,line_no,cursor_x,cursor_in_comment_QMARK_){
return (function (p1__113805_SHARP_){
var or__3922__auto__ = p1__113805_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return x_pos;
}
});})(pass_char_QMARK_,reset_QMARK_,cursor_in_comment_QMARK___$1,update_QMARK_,backup__$1,map__113807,map__113807__$1,state,stack,delim_trail,backup,x_pos,ch,cursor_line,line_no,cursor_x,cursor_in_comment_QMARK_))
),new cljs.core.Keyword(null,"end","end",-268185958),(x_pos + (1))):delim_trail
));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),cursor_in_comment_QMARK___$1,new cljs.core.Keyword(null,"backup","backup",26347393),backup__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),delim_trail__$1);
});
/**
 * The presence of the cursor can block the removal of some part of the delim trail.
 */
parinfer.indent_mode.block_delim_trail = (function parinfer$indent_mode$block_delim_trail(p__113810){
var map__113811 = p__113810;
var map__113811__$1 = ((((!((map__113811 == null)))?(((((map__113811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113811):map__113811);
var state = map__113811__$1;
var delim_trail = cljs.core.get.call(null,map__113811__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var line_no = cljs.core.get.call(null,map__113811__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.call(null,map__113811__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.call(null,map__113811__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_in_comment_QMARK_ = cljs.core.get.call(null,map__113811__$1,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135));
var map__113813 = delim_trail;
var map__113813__$1 = ((((!((map__113813 == null)))?(((((map__113813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113813):map__113813);
var start = cljs.core.get.call(null,map__113813__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__113813__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var cursor_block_QMARK_ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,line_no,cursor_line);
if(and__3911__auto__){
var and__3911__auto____$1 = start;
if(cljs.core.truth_(and__3911__auto____$1)){
return (((cursor_x > start)) && (cljs.core.not.call(null,cursor_in_comment_QMARK_)));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var start__$1 = (function (){var G__113818 = start;
if(cljs.core.truth_((function (){var and__3911__auto__ = start;
if(cljs.core.truth_(and__3911__auto__)){
return cursor_block_QMARK_;
} else {
return and__3911__auto__;
}
})())){
var x__4006__auto__ = G__113818;
var y__4007__auto__ = cursor_x;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
} else {
return G__113818;
}
})();
var end__$1 = (function (){var G__113819 = end;
if(cljs.core.truth_((function (){var and__3911__auto__ = end;
if(cljs.core.truth_(and__3911__auto__)){
return cursor_block_QMARK_;
} else {
return and__3911__auto__;
}
})())){
var x__4006__auto__ = G__113819;
var y__4007__auto__ = cursor_x;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
} else {
return G__113819;
}
})();
var vec__113814 = ((cljs.core._EQ_.call(null,start__$1,end__$1))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end__$1], null));
var start__$2 = cljs.core.nth.call(null,vec__113814,(0),null);
var end__$2 = cljs.core.nth.call(null,vec__113814,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start__$2,new cljs.core.Keyword(null,"end","end",-268185958),end__$2], null));
});
/**
 * Update the state by removing our marked delim trail.
 *   We remove the delims from the appropriate line of text,
 *   while also restoring their matching delims onto the stack.
 * 
 *   Example:
 * 
 *   (foo (+ 2 3) [(bar)] )    ;; a potential comment
 *   ^            ^^   ^^^^
 *   |            |     |
 *   |____________|     +-- Remove these from the text.
 *       |
 *       +-- Restore these onto the delim stack.
 *           (fyi, we originally popped them off to validate
 *            the closing delims. now we need them back to
 *            infer closing delims for indented lines.)
 *   
 */
parinfer.indent_mode.remove_delim_trail = (function parinfer$indent_mode$remove_delim_trail(p__113820){
var map__113821 = p__113820;
var map__113821__$1 = ((((!((map__113821 == null)))?(((((map__113821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113821):map__113821);
var state = map__113821__$1;
var delim_trail = cljs.core.get.call(null,map__113821__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var insert = cljs.core.get.call(null,map__113821__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var line_no = cljs.core.get.call(null,map__113821__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var lines = cljs.core.get.call(null,map__113821__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var backup = cljs.core.get.call(null,map__113821__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var stack = cljs.core.get.call(null,map__113821__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var map__113823 = delim_trail;
var map__113823__$1 = ((((!((map__113823 == null)))?(((((map__113823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113823):map__113823);
var start = cljs.core.get.call(null,map__113823__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__113823__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_((function (){var and__3911__auto__ = start;
if(cljs.core.truth_(and__3911__auto__)){
return end;
} else {
return and__3911__auto__;
}
})())){
var line = cljs.core.get.call(null,lines,line_no);
var delims = cljs.core.filter.call(null,parinfer.reader.closing_delim_QMARK_,cljs.core.map.call(null,cljs.core.str,cljs.core.subs.call(null,line,start,end)));
var remove_count = cljs.core.count.call(null,delims);
var ignore_count = (cljs.core.count.call(null,backup) - remove_count);
var vec__113825 = (function (){var backup__$1 = backup;
var stack__$1 = stack;
while(true){
if(cljs.core._EQ_.call(null,ignore_count,cljs.core.count.call(null,backup__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backup__$1,stack__$1], null);
} else {
var G__113829 = cljs.core.pop.call(null,backup__$1);
var G__113830 = cljs.core.conj.call(null,stack__$1,cljs.core.peek.call(null,backup__$1));
backup__$1 = G__113829;
stack__$1 = G__113830;
continue;
}
break;
}
})();
var backup__$1 = cljs.core.nth.call(null,vec__113825,(0),null);
var stack__$1 = cljs.core.nth.call(null,vec__113825,(1),null);
var state__$1 = cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),parinfer.string.remove_str_range,start,end),new cljs.core.Keyword(null,"backup","backup",26347393),backup__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),delims);
var insert_line_QMARK_ = (new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert) === (0));
var state__$2 = (function (){var G__113828 = state__$1;
if(insert_line_QMARK_){
return cljs.core.update_in.call(null,G__113828,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783)], null),cljs.core.min,start);
} else {
return G__113828;
}
})();
return state__$2;
} else {
return state;
}
});
/**
 * Update the state's trailing delimiter insertion point as we scan the line.
 * 
 *   Example:
 * 
 *   (defn foo [a b] ret)
 *   ^^^^^ ^^^ ^^ ^  ^^^
 *                  |
 *                  +-- final insertion point candidate
 * 
 *   Special rules allow the user to freely position the trailing
 *   delimiters while editing a line.
 * 
 *   
 */
parinfer.indent_mode.update_insertion_pt = (function parinfer$indent_mode$update_insertion_pt(p__113831){
var map__113832 = p__113831;
var map__113832__$1 = ((((!((map__113832 == null)))?(((((map__113832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113832):map__113832);
var state = map__113832__$1;
var track_indent_QMARK_ = cljs.core.get.call(null,map__113832__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var cursor_line = cljs.core.get.call(null,map__113832__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var lines = cljs.core.get.call(null,map__113832__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__113832__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var stack = cljs.core.get.call(null,map__113832__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var x_pos = cljs.core.get.call(null,map__113832__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.call(null,map__113832__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var prev_ch = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.get.call(null,lines,line_no)))].join('');
var insert_at_char_QMARK_ = (function (){var and__3911__auto__ = parinfer.reader.in_code_QMARK_.call(null,stack);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not_EQ_.call(null,"",ch)) && (((cljs.core.not.call(null,parinfer.reader.whitespace_QMARK_.call(null,ch))) || (cljs.core._EQ_.call(null,"\\",prev_ch)))) && (((cljs.core.not.call(null,parinfer.reader.closing_delim_QMARK_.call(null,ch))) || (cljs.core._EQ_.call(null,line_no,cursor_line)))));
} else {
return and__3911__auto__;
}
})();
var insert = (cljs.core.truth_(insert_at_char_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),(0),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),(x_pos + (1))], null):null);
var G__113834 = state;
if(cljs.core.truth_(insert)){
return cljs.core.assoc.call(null,G__113834,new cljs.core.Keyword(null,"insert","insert",1286475395),insert);
} else {
return G__113834;
}
});
parinfer.indent_mode.get_cached_state = (function parinfer$indent_mode$get_cached_state(state){
return cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"insert","insert",1286475395)], null));
});
/**
 * Cache a subset of the state after some event.
 *   This is used by process-text-change.
 */
parinfer.indent_mode.commit_cached_state = (function parinfer$indent_mode$commit_cached_state(state,key_){
return cljs.core.update.call(null,state,key_,cljs.core.conj,parinfer.indent_mode.get_cached_state.call(null,state));
});
/**
 * Update the state by handling a possible indentation trigger.
 * 
 *   Example:
 * 
 *   (defn foo [a b
 *   ret           ;; <---  When we process `r`, we detect indentation, then
 *                 ;;       we start backtracking to insert closing delimiters on a previous line.
 * 
 * 
 *   (defn foo [a b]
 *   )             ;; <---  If a line starts with a closing delimiter, it is not
 *                 ;;       considered an indentation trigger.  In fact, we skip
 *                 ;;       the character completely, removing it from the line.
 *   
 */
parinfer.indent_mode.process_indent = (function parinfer$indent_mode$process_indent(p__113835){
var map__113836 = p__113835;
var map__113836__$1 = ((((!((map__113836 == null)))?(((((map__113836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113836):map__113836);
var state = map__113836__$1;
var stack = cljs.core.get.call(null,map__113836__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var track_indent_QMARK_ = cljs.core.get.call(null,map__113836__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var lines = cljs.core.get.call(null,map__113836__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__113836__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.get.call(null,map__113836__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.call(null,map__113836__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var check_indent_QMARK_ = (function (){var and__3911__auto__ = track_indent_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = parinfer.reader.in_code_QMARK_.call(null,stack);
if(cljs.core.truth_(and__3911__auto____$1)){
return ((cljs.core.not.call(null,parinfer.reader.whitespace_QMARK_.call(null,ch))) && (cljs.core.not_EQ_.call(null,";",ch)));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var skip_QMARK_ = (function (){var and__3911__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return parinfer.reader.closing_delim_QMARK_.call(null,ch);
} else {
return and__3911__auto__;
}
})();
var at_indent_QMARK_ = (function (){var and__3911__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,skip_QMARK_);
} else {
return and__3911__auto__;
}
})();
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"process?","process?",-106844121),cljs.core.not.call(null,skip_QMARK_));
if(cljs.core.truth_(at_indent_QMARK_)){
return cljs.core.assoc.call(null,parinfer.indent_mode.commit_cached_state.call(null,parinfer.indent_mode.close_delims.call(null,state__$1,x_pos),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728)),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),false,new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923),true);
} else {
return state__$1;
}
});
/**
 * Update the state by adding processed character to the line.
 */
parinfer.indent_mode.update_line = (function parinfer$indent_mode$update_line(p__113838){
var map__113839 = p__113838;
var map__113839__$1 = ((((!((map__113839 == null)))?(((((map__113839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113839):map__113839);
var state = map__113839__$1;
var ch = cljs.core.get.call(null,map__113839__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var line_no = cljs.core.get.call(null,map__113839__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),cljs.core.str,ch);
});
/**
 * Save the text of a line before trailing delims were inserted.
 *   This allows to restore them when skipping to changed lines in
 *   process-text-change.
 */
parinfer.indent_mode.save_preinsert_line = (function parinfer$indent_mode$save_preinsert_line(p__113841){
var map__113842 = p__113841;
var map__113842__$1 = ((((!((map__113842 == null)))?(((((map__113842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113842):map__113842);
var state = map__113842__$1;
var line_no = cljs.core.get.call(null,map__113842__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var insert = cljs.core.get.call(null,map__113842__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var lines = cljs.core.get.call(null,map__113842__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var G__113844 = state;
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert))){
return cljs.core.assoc_in.call(null,G__113844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.get.call(null,lines,line_no));
} else {
return G__113844;
}
});
parinfer.indent_mode.process_char_STAR_ = (function parinfer$indent_mode$process_char_STAR_(state){
return parinfer.indent_mode.update_line.call(null,parinfer.indent_mode.update_insertion_pt.call(null,parinfer.reader.push_char.call(null,parinfer.indent_mode.update_delim_trail.call(null,state))));
});
/**
 * Update the state by processing the given character and its position.
 */
parinfer.indent_mode.process_char = (function parinfer$indent_mode$process_char(p__113845,ch){
var map__113846 = p__113845;
var map__113846__$1 = ((((!((map__113846 == null)))?(((((map__113846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113846):map__113846);
var state = map__113846__$1;
var lines = cljs.core.get.call(null,map__113846__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__113846__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.count.call(null,cljs.core.get.call(null,lines,line_no));
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),x_pos,new cljs.core.Keyword(null,"ch","ch",-554717905),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''));
var state__$2 = parinfer.indent_mode.process_indent.call(null,state__$1);
var G__113848 = state__$2;
if(cljs.core.truth_(new cljs.core.Keyword(null,"process?","process?",-106844121).cljs$core$IFn$_invoke$arity$1(state__$2))){
return parinfer.indent_mode.process_char_STAR_.call(null,G__113848);
} else {
return G__113848;
}
});
/**
 * Update the state by processing the given line of text.
 */
parinfer.indent_mode.process_line = (function parinfer$indent_mode$process_line(var_args){
var G__113851 = arguments.length;
switch (G__113851) {
case 1:
return parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$1 = (function (line){
return parinfer.indent_mode.process_line.call(null,parinfer.indent_mode.initial_state,line);
});

parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2 = (function (p__113852,line){
var map__113853 = p__113852;
var map__113853__$1 = ((((!((map__113853 == null)))?(((((map__113853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113853):map__113853);
var state = map__113853__$1;
var stack = cljs.core.get.call(null,map__113853__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var lines = cljs.core.get.call(null,map__113853__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__113853__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.call(null,map__113853__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no__$1 = (line_no + (1));
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),false,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),((cljs.core.seq.call(null,stack)) && (cljs.core.not.call(null,parinfer.reader.in_str_QMARK_.call(null,stack)))),new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923),false,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj.call(null,lines,""),new cljs.core.Keyword(null,"line-no","line-no",-666819466),line_no__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),cljs.core.PersistentVector.EMPTY);
var state__$2 = cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line-dy","line-dy",41667486)], null),((function (line_no__$1,state__$1,map__113853,map__113853__$1,state,stack,lines,line_no,cursor_line){
return (function (p1__113849_SHARP_){
if(cljs.core.truth_(p1__113849_SHARP_)){
return (p1__113849_SHARP_ - (1));
} else {
return null;
}
});})(line_no__$1,state__$1,map__113853,map__113853__$1,state,stack,lines,line_no,cursor_line))
);
var state__$3 = cljs.core.reduce.call(null,parinfer.indent_mode.process_char,state__$2,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"\n"].join(''));
var state__$4 = parinfer.indent_mode.commit_cached_state.call(null,parinfer.indent_mode.save_preinsert_line.call(null,parinfer.indent_mode.remove_delim_trail.call(null,parinfer.indent_mode.block_delim_trail.call(null,state__$3))),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678));
var state__$5 = (function (){var G__113855 = state__$4;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923).cljs$core$IFn$_invoke$arity$1(state__$4))){
return cljs.core.update.call(null,G__113855,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.conj,null);
} else {
return G__113855;
}
})();
return state__$5;
});

parinfer.indent_mode.process_line.cljs$lang$maxFixedArity = 2;

parinfer.indent_mode.finalize_state = (function parinfer$indent_mode$finalize_state(p__113857){
var map__113858 = p__113857;
var map__113858__$1 = ((((!((map__113858 == null)))?(((((map__113858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113858):map__113858);
var state = map__113858__$1;
var stack = cljs.core.get.call(null,map__113858__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var valid_QMARK_ = cljs.core.not.call(null,parinfer.reader.in_str_QMARK_.call(null,stack));
var close_delims_QMARK_ = ((valid_QMARK_) && (cljs.core.seq.call(null,stack)));
var G__113860 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"valid?","valid?",-212412379),valid_QMARK_);
if(close_delims_QMARK_){
return parinfer.indent_mode.close_delims.call(null,G__113860);
} else {
return G__113860;
}
});
/**
 * Fully processes the given text.  Returns new state.
 *   See `format-text` for usage.
 */
parinfer.indent_mode.process_text = (function parinfer$indent_mode$process_text(var_args){
var G__113862 = arguments.length;
switch (G__113862) {
case 1:
return parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.indent_mode.process_text.call(null,text,null);
});

parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = cljs.core.merge.call(null,parinfer.indent_mode.initial_state,options);
var lines = parinfer.string.get_lines.call(null,text);
var state__$1 = cljs.core.reduce.call(null,parinfer.indent_mode.process_line,state,lines);
return parinfer.indent_mode.finalize_state.call(null,state__$1);
});

parinfer.indent_mode.process_text.cljs$lang$maxFixedArity = 2;

parinfer.indent_mode.safe_subvec = (function parinfer$indent_mode$safe_subvec(v,i){
if((i < cljs.core.count.call(null,v))){
return cljs.core.subvec.call(null,v,i);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * restore the text of a line before trailing delimiters were inserted
 */
parinfer.indent_mode.restore_insert_line = (function parinfer$indent_mode$restore_insert_line(p__113864){
var map__113865 = p__113864;
var map__113865__$1 = ((((!((map__113865 == null)))?(((((map__113865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113865):map__113865);
var state = map__113865__$1;
var insert = cljs.core.get.call(null,map__113865__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var line_no = cljs.core.get.call(null,map__113865__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var map__113867 = insert;
var map__113867__$1 = ((((!((map__113867 == null)))?(((((map__113867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113867):map__113867);
var line_dy = cljs.core.get.call(null,map__113867__$1,new cljs.core.Keyword(null,"line-dy","line-dy",41667486));
var line = cljs.core.get.call(null,map__113867__$1,new cljs.core.Keyword(null,"line","line",212345235));
if(cljs.core.truth_((function (){var and__3911__auto__ = line_dy;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = line;
if(cljs.core.truth_(and__3911__auto____$1)){
return (line_no >= (0));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
var insert_line_no = (line_dy + line_no);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),insert_line_no], null),line);
} else {
return state;
}
});
/**
 * fill the rest of the lines with info from cache.
 */
parinfer.indent_mode.fill_rest_with_cache = (function parinfer$indent_mode$fill_rest_with_cache(prev_state,state,last_i){
var state__$1 = cljs.core.merge.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.pop),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.into,parinfer.indent_mode.safe_subvec.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state),last_i)),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),cljs.core.into,parinfer.indent_mode.safe_subvec.call(null,new cljs.core.Keyword(null,"postline-states","postline-states",1667653678).cljs$core$IFn$_invoke$arity$1(prev_state),(last_i + (1)))),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.into,parinfer.indent_mode.safe_subvec.call(null,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(prev_state),(last_i + (1)))),cljs.core.last.call(null,new cljs.core.Keyword(null,"postline-states","postline-states",1667653678).cljs$core$IFn$_invoke$arity$1(prev_state)));
var state__$2 = parinfer.indent_mode.restore_insert_line.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466),(cljs.core.count.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state__$1)) - (1))));
return state__$2;
});
/**
 * process a line that comes after those that have changed.
 *   'reduced' will halt further processing.
 */
parinfer.indent_mode.process_unchanged_line_STAR_ = (function parinfer$indent_mode$process_unchanged_line_STAR_(prev_state,state,p__113869){
var vec__113870 = p__113869;
var old_i = cljs.core.nth.call(null,vec__113870,(0),null);
var line = cljs.core.nth.call(null,vec__113870,(1),null);
var cache = cljs.core.nth.call(null,vec__113870,(2),null);
var state__$1 = parinfer.indent_mode.process_line.call(null,state,line);
var new_cache = cljs.core.last.call(null,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(state__$1));
var more_QMARK_ = ((old_i + (1)) < cljs.core.count.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state)));
var can_skip_QMARK_ = (function (){var and__3911__auto__ = new_cache;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new_cache,cache);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = can_skip_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return more_QMARK_;
} else {
return and__3911__auto__;
}
})())){
return cljs.core.reduced.call(null,parinfer.indent_mode.fill_rest_with_cache.call(null,prev_state,state__$1,old_i));
} else {
return state__$1;
}
});
/**
 * process the lines after those that have changed.
 */
parinfer.indent_mode.process_unchanged_lines = (function parinfer$indent_mode$process_unchanged_lines(prev_state,state,start_i){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,parinfer.indent_mode.process_unchanged_line_STAR_,prev_state),state,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,start_i),parinfer.indent_mode.safe_subvec.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state),start_i),parinfer.indent_mode.safe_subvec.call(null,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(prev_state),start_i)));
});
/**
 * build an initial state based on our starting line and previous cache.
 */
parinfer.indent_mode.initial_cached_state = (function parinfer$indent_mode$initial_cached_state(p__113873,options,i){
var map__113874 = p__113873;
var map__113874__$1 = ((((!((map__113874 == null)))?(((((map__113874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113874):map__113874);
var prev_state = map__113874__$1;
var lines = cljs.core.get.call(null,map__113874__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var postline_states = cljs.core.get.call(null,map__113874__$1,new cljs.core.Keyword(null,"postline-states","postline-states",1667653678));
var postindent_states = cljs.core.get.call(null,map__113874__$1,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728));
var line_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.subvec.call(null,lines,(0),i),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.subvec.call(null,postindent_states,(0),i),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),cljs.core.subvec.call(null,postline_states,(0),i),new cljs.core.Keyword(null,"line-no","line-no",-666819466),(i - (1))], null);
var last_cache = cljs.core.get.call(null,postline_states,(i - (1)));
return parinfer.indent_mode.restore_insert_line.call(null,cljs.core.merge.call(null,parinfer.indent_mode.initial_state,options,line_data,last_cache));
});
/**
 * Processes the given change for the given state.  Returns new state.
 *   See `format-text-change` for usage.
 */
parinfer.indent_mode.process_text_change = (function parinfer$indent_mode$process_text_change(var_args){
var G__113877 = arguments.length;
switch (G__113877) {
case 2:
return parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$2 = (function (prev_state,change){
return parinfer.indent_mode.process_text_change.call(null,prev_state,change,null);
});

parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3 = (function (prev_state,p__113878,options){
var map__113879 = p__113878;
var map__113879__$1 = ((((!((map__113879 == null)))?(((((map__113879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113879):map__113879);
var change = map__113879__$1;
var line_no = cljs.core.get.call(null,map__113879__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var new_line = cljs.core.get.call(null,map__113879__$1,new cljs.core.Keyword(null,"new-line","new-line",1060819447));
var vec__113881 = ((typeof line_no === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,(line_no + (1))], null):line_no);
var start_line_no = cljs.core.nth.call(null,vec__113881,(0),null);
var end_line_no = cljs.core.nth.call(null,vec__113881,(1),null);
var line_replacements = ((typeof new_line === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_line], null):new_line);
var state = parinfer.indent_mode.initial_cached_state.call(null,prev_state,options,start_line_no);
var state__$1 = cljs.core.reduce.call(null,parinfer.indent_mode.process_line,state,line_replacements);
var state__$2 = parinfer.indent_mode.process_unchanged_lines.call(null,prev_state,state__$1,end_line_no);
return parinfer.indent_mode.finalize_state.call(null,state__$2);
});

parinfer.indent_mode.process_text_change.cljs$lang$maxFixedArity = 3;

/**
 * Fully process the given text using Indent Mode.
 * 
 *   'text' is the full text.
 * 
 *   'options' is an optional map with supported keys:
 *  :cursor-x     - x position of the cursor (zero-based)
 *  :cursor-line  - line number of the cursor (zero-based)
 * 
 *   Returns a map:
 *  :text     - full text output
 *  :valid?   - indicates if the input was valid
 *  :state    - cached state to be passed to `format-text-change`
 *   
 */
parinfer.indent_mode.format_text = (function parinfer$indent_mode$format_text(var_args){
var G__113886 = arguments.length;
switch (G__113886) {
case 1:
return parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.indent_mode.format_text.call(null,text,null);
});

parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = parinfer.indent_mode.process_text.call(null,text,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.indent_mode.format_text.cljs$lang$maxFixedArity = 2;

/**
 * Process changed lines in a previously processed text using Indent Mode.
 * 
 *   'text' is the full text (including the change).
 * 
 *   'prev-state' is the state after processing 'text' before the 'change' occurred.
 *  - found in the :state key of the result returned by `format-text` or this function.
 * 
 *   'change' is a map:
 * 
 *  KEY        |  DESCRIPTION             |  TYPE
 *  -----------+--------------------------+------------------------------------
 *  :line-no   |  line range to replace   |  a num or min,max line range
 *  :new-line  |  new line(s) to insert   |  a string or seq if multiple lines
 * 
 *   'options' is an optional map with supported keys:
 *  :cursor-x     - x position of the cursor (zero-based)
 *  :cursor-line  - line number of the cursor (zero-based)
 * 
 *   Returns a map:
 *  :text     - full text output
 *  :valid?   - indicates if the input was valid
 *  :state    - cached state to be passed to `format-text-change`
 *   
 */
parinfer.indent_mode.format_text_change = (function parinfer$indent_mode$format_text_change(var_args){
var G__113889 = arguments.length;
switch (G__113889) {
case 3:
return parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$3 = (function (text,prev_state,change){
return parinfer.indent_mode.format_text_change.call(null,text,prev_state,change,null);
});

parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4 = (function (text,prev_state,change,options){
var state = parinfer.indent_mode.process_text_change.call(null,prev_state,change,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.indent_mode.format_text_change.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=indent_mode.js.map
