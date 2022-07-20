// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.eval_special_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.string');
goog.require('klipse_clj.lang.clojure');
klipse_clj.eval_special_test.aa = (function klipse_clj$eval_special_test$aa(){
return cljs.test.test_var.call(null,klipse_clj.eval_special_test.aa.cljs$lang$var);
});
klipse_clj.eval_special_test.aa.cljs$lang$test = (function (){
try{var values__22397__auto__ = (new cljs.core.List(null,(1),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__22398__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22397__auto__);
if(cljs.core.truth_(result__22398__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22397__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22397__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22398__auto__;
}catch (e32251){var t__22442__auto__ = e32251;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22442__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse_clj.eval_special_test.aa.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_special_test.aa;},new cljs.core.Symbol("klipse-clj.eval_special_test","aa","klipse-clj.eval_special_test/aa",-802281406,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval_special_test","klipse-clj.eval_special_test",-275131777,null),new cljs.core.Symbol(null,"aa","aa",-668078617,null),"test/klipse_clj/eval_special_test.cljs",12,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_special_test.aa)?klipse_clj.eval_special_test.aa.cljs$lang$test:null)]));

//# sourceMappingURL=eval_special_test.js.map
