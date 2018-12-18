// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('parinfer.reader');
goog.require('cljs.core');
parinfer.reader.matching_delim = new cljs.core.PersistentArrayMap(null, 6, ["{","}","}","{","[","]","]","[","(",")",")","("], null);
parinfer.reader.opening_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
parinfer.reader.closing_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
parinfer.reader.whitespace_QMARK_ = (function parinfer$reader$whitespace_QMARK_(ch){
return cljs.core.re_find.call(null,/\s/,ch);
});
parinfer.reader.prev_ch = (function parinfer$reader$prev_ch(stack){
return new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,stack));
});
/**
 * Next character will be escaped.
 */
parinfer.reader.escaping_QMARK_ = (function parinfer$reader$escaping_QMARK_(stack){
return cljs.core._EQ_.call(null,"\\",parinfer.reader.prev_ch.call(null,stack));
});
/**
 * Next character is inside a string.
 */
parinfer.reader.in_str_QMARK_ = (function parinfer$reader$in_str_QMARK_(stack){
var ch = parinfer.reader.prev_ch.call(null,(function (){var G__37201 = stack;
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return cljs.core.pop.call(null,G__37201);
} else {
return G__37201;
}
})());
return cljs.core._EQ_.call(null,"\"",ch);
});
/**
 * Next character is inside a comment.
 */
parinfer.reader.in_comment_QMARK_ = (function parinfer$reader$in_comment_QMARK_(stack){
return cljs.core._EQ_.call(null,";",parinfer.reader.prev_ch.call(null,stack));
});
/**
 * Next character is inside actual code.
 */
parinfer.reader.in_code_QMARK_ = (function parinfer$reader$in_code_QMARK_(stack){
return (((!(parinfer.reader.in_str_QMARK_.call(null,stack)))) && ((!(parinfer.reader.in_comment_QMARK_.call(null,stack)))));
});
/**
 * Determine if the given closing delimiter can be used next, assuming we are inside code.
 */
parinfer.reader.valid_closer_QMARK_ = (function parinfer$reader$valid_closer_QMARK_(stack,ch){
return cljs.core._EQ_.call(null,parinfer.reader.prev_ch.call(null,stack),parinfer.reader.matching_delim.call(null,ch));
});
if((typeof parinfer !== 'undefined') && (typeof parinfer.reader !== 'undefined') && (typeof parinfer.reader.push_char_STAR_ !== 'undefined')){
} else {
/**
 * Update the delimiter stack with the given character.
 */
parinfer.reader.push_char_STAR_ = (function (){var method_table__18894__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18895__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18896__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18897__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18898__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"parinfer.reader","push-char*"),((function (method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__,hierarchy__18898__auto__){
return (function (p__37202){
var map__37203 = p__37202;
var map__37203__$1 = (((((!((map__37203 == null))))?(((((map__37203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37203):map__37203);
var ch = cljs.core.get.call(null,map__37203__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_(parinfer.reader.opening_delim_QMARK_.call(null,ch))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(parinfer.reader.closing_delim_QMARK_.call(null,ch))){
return new cljs.core.Keyword(null,"close","close",1835149582);
} else {
return ch;

}
}
});})(method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__,hierarchy__18898__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18898__auto__,method_table__18894__auto__,prefer_table__18895__auto__,method_cache__18896__auto__,cached_hierarchy__18897__auto__));
})();
}
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\t",(function (p__37205){
var map__37206 = p__37205;
var map__37206__$1 = (((((!((map__37206 == null))))?(((((map__37206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37206):map__37206);
var stack = cljs.core.get.call(null,map__37206__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if((!(parinfer.reader.in_str_QMARK_.call(null,stack)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),"  "], null);
} else {
return null;

}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"open","open",-1763596448),(function (p__37208){
var map__37209 = p__37208;
var map__37209__$1 = (((((!((map__37209 == null))))?(((((map__37209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37209):map__37209);
var state = map__37209__$1;
var stack = cljs.core.get.call(null,map__37209__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_code_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)], null)))], null);
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"close","close",1835149582),(function (p__37211){
var map__37212 = p__37211;
var map__37212__$1 = (((((!((map__37212 == null))))?(((((map__37212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37212):map__37212);
var stack = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var backup = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var ch = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_code_QMARK_.call(null,stack)){
if(parinfer.reader.valid_closer_QMARK_.call(null,stack,ch)){
var opener = cljs.core.peek.call(null,stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack),new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.conj.call(null,backup,opener)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),""], null);
}
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,";",(function (p__37214){
var map__37215 = p__37214;
var map__37215__$1 = (((((!((map__37215 == null))))?(((((map__37215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37215):map__37215);
var state = map__37215__$1;
var stack = cljs.core.get.call(null,map__37215__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_code_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\n",(function (p__37217){
var map__37218 = p__37217;
var map__37218__$1 = (((((!((map__37218 == null))))?(((((map__37218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37218):map__37218);
var stack = cljs.core.get.call(null,map__37218__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var stack__$1 = (function (){var G__37220 = stack;
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return cljs.core.pop.call(null,G__37220);
} else {
return G__37220;
}
})();
var stack__$2 = (function (){var G__37221 = stack__$1;
if(parinfer.reader.in_comment_QMARK_.call(null,stack__$1)){
return cljs.core.pop.call(null,G__37221);
} else {
return G__37221;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),"",new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$2], null);
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\\",(function (p__37222){
var map__37223 = p__37222;
var map__37223__$1 = (((((!((map__37223 == null))))?(((((map__37223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37223):map__37223);
var state = map__37223__$1;
var stack = cljs.core.get.call(null,map__37223__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_comment_QMARK_.call(null,stack)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\"",(function (p__37225){
var map__37226 = p__37225;
var map__37226__$1 = (((((!((map__37226 == null))))?(((((map__37226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37226):map__37226);
var state = map__37226__$1;
var stack = cljs.core.get.call(null,map__37226__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_str_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_comment_QMARK_.call(null,stack)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37228){
var map__37229 = p__37228;
var map__37229__$1 = (((((!((map__37229 == null))))?(((((map__37229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37229):map__37229);
var stack = cljs.core.get.call(null,map__37229__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
return null;

}
}));
parinfer.reader.push_char = (function parinfer$reader$push_char(state){
var new_data = parinfer.reader.push_char_STAR_.call(null,state);
return cljs.core.merge_with.call(null,((function (new_data){
return (function (p1__37232_SHARP_,p2__37231_SHARP_){
var or__17816__auto__ = p2__37231_SHARP_;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return p1__37232_SHARP_;
}
});})(new_data))
,state,new_data);
});

//# sourceMappingURL=reader.js.map
