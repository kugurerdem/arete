// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__15053_SHARP_){
var k = f.call(null,p1__15053_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15054){
var vec__15055 = p__15054;
var k = cljs.core.nth.call(null,vec__15055,(0),null);
var v = cljs.core.nth.call(null,vec__15055,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___15059 = arguments.length;
var i__4865__auto___15060 = (0);
while(true){
if((i__4865__auto___15060 < len__4864__auto___15059)){
args__4870__auto__.push((arguments[i__4865__auto___15060]));

var G__15061 = (i__4865__auto___15060 + (1));
i__4865__auto___15060 = G__15061;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq15058){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15058));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__15064){
var map__15065 = p__15064;
var map__15065__$1 = cljs.core.__destructure_map.call(null,map__15065);
var message = cljs.core.get.call(null,map__15065__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__15065__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__15063_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15063_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__15062_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__15062_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__15067){
var map__15068 = p__15067;
var map__15068__$1 = cljs.core.__destructure_map.call(null,map__15068);
var message_data = map__15068__$1;
var message = cljs.core.get.call(null,map__15068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__15068__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__15068__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__15068__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__15069 = file_excerpt;
var map__15069__$1 = cljs.core.__destructure_map.call(null,map__15069);
var start_line = cljs.core.get.call(null,map__15069__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__15069__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__15069__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__15070 = cljs.core.split_with.call(null,(function (p1__15066_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__15066_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__15070,(0),null);
var end = cljs.core.nth.call(null,vec__15070,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__15073){
var map__15074 = p__15073;
var map__15074__$1 = cljs.core.__destructure_map.call(null,map__15074);
var file = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__15075 = "";
var G__15075__$1 = (cljs.core.truth_(file)?[G__15075,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__15075);
var G__15075__$2 = (cljs.core.truth_(line)?[G__15075__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__15075__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__15075__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__15075__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_15133 = (new goog.debug.Console());
var G__15082_15134 = c_15133.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__15082_15134,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__15082_15134,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_15133);

}

var temp__5720__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__15083 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__15083,"data",(function (){var or__4253__auto__ = data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__15083;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4251__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4251__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4251__auto__;
}
});

var last_reload_timestamp_15135 = cljs.core.atom.call(null,(0));
var promise_chain_15136 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__4251__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_15135) < ts);
if(and__4251__auto__){
return ts;
} else {
return and__4251__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_15135,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_15136.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__15084 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__15085 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__15085);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__15086 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__15087 = null;
var count__15088 = (0);
var i__15089 = (0);
while(true){
if((i__15089 < count__15088)){
var w = cljs.core._nth.call(null,chunk__15087,i__15089);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__15137 = seq__15086;
var G__15138 = chunk__15087;
var G__15139 = count__15088;
var G__15140 = (i__15089 + (1));
seq__15086 = G__15137;
chunk__15087 = G__15138;
count__15088 = G__15139;
i__15089 = G__15140;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15086);
if(temp__5720__auto__){
var seq__15086__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15086__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15086__$1);
var G__15141 = cljs.core.chunk_rest.call(null,seq__15086__$1);
var G__15142 = c__4679__auto__;
var G__15143 = cljs.core.count.call(null,c__4679__auto__);
var G__15144 = (0);
seq__15086 = G__15141;
chunk__15087 = G__15142;
count__15088 = G__15143;
i__15089 = G__15144;
continue;
} else {
var w = cljs.core.first.call(null,seq__15086__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__15145 = cljs.core.next.call(null,seq__15086__$1);
var G__15146 = null;
var G__15147 = (0);
var G__15148 = (0);
seq__15086 = G__15145;
chunk__15087 = G__15146;
count__15088 = G__15147;
i__15089 = G__15148;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__15084);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_15136.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__15090 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__15091 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__15091);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__15090);
}}));
} else {
return promise_chain_15136.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4253__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4251__auto____$1){
var or__4253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4870__auto__ = [];
var len__4864__auto___15149 = arguments.length;
var i__4865__auto___15150 = (0);
while(true){
if((i__4865__auto___15150 < len__4864__auto___15149)){
args__4870__auto__.push((arguments[i__4865__auto___15150]));

var G__15151 = (i__4865__auto___15150 + (1));
i__4865__auto___15150 = G__15151;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__15094){
var vec__15095 = p__15094;
var n = cljs.core.nth.call(null,vec__15095,(0),null);
var mdata = cljs.core.nth.call(null,vec__15095,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__15098 = cljs.core.seq.call(null,hooks);
var chunk__15099 = null;
var count__15100 = (0);
var i__15101 = (0);
while(true){
if((i__15101 < count__15100)){
var vec__15110 = cljs.core._nth.call(null,chunk__15099,i__15101);
var n = cljs.core.nth.call(null,vec__15110,(0),null);
var f = cljs.core.nth.call(null,vec__15110,(1),null);
var temp__5718__auto___15152 = cljs.core.reduce.call(null,((function (seq__15098,chunk__15099,count__15100,i__15101,vec__15110,n,f,hooks){
return (function (p1__15076_SHARP_,p2__15077_SHARP_){
if(cljs.core.truth_(p1__15076_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__15076_SHARP_,p2__15077_SHARP_);
} else {
return null;
}
});})(seq__15098,chunk__15099,count__15100,i__15101,vec__15110,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___15152)){
var hook_15153 = temp__5718__auto___15152;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_15153,args);
}catch (e15113){if((e15113 instanceof Error)){
var e_15154 = e15113;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_15154);
} else {
throw e15113;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__15155 = seq__15098;
var G__15156 = chunk__15099;
var G__15157 = count__15100;
var G__15158 = (i__15101 + (1));
seq__15098 = G__15155;
chunk__15099 = G__15156;
count__15100 = G__15157;
i__15101 = G__15158;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15098);
if(temp__5720__auto__){
var seq__15098__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15098__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15098__$1);
var G__15159 = cljs.core.chunk_rest.call(null,seq__15098__$1);
var G__15160 = c__4679__auto__;
var G__15161 = cljs.core.count.call(null,c__4679__auto__);
var G__15162 = (0);
seq__15098 = G__15159;
chunk__15099 = G__15160;
count__15100 = G__15161;
i__15101 = G__15162;
continue;
} else {
var vec__15114 = cljs.core.first.call(null,seq__15098__$1);
var n = cljs.core.nth.call(null,vec__15114,(0),null);
var f = cljs.core.nth.call(null,vec__15114,(1),null);
var temp__5718__auto___15163 = cljs.core.reduce.call(null,((function (seq__15098,chunk__15099,count__15100,i__15101,vec__15114,n,f,seq__15098__$1,temp__5720__auto__,hooks){
return (function (p1__15076_SHARP_,p2__15077_SHARP_){
if(cljs.core.truth_(p1__15076_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__15076_SHARP_,p2__15077_SHARP_);
} else {
return null;
}
});})(seq__15098,chunk__15099,count__15100,i__15101,vec__15114,n,f,seq__15098__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___15163)){
var hook_15164 = temp__5718__auto___15163;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_15164,args);
}catch (e15117){if((e15117 instanceof Error)){
var e_15165 = e15117;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_15165);
} else {
throw e15117;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__15166 = cljs.core.next.call(null,seq__15098__$1);
var G__15167 = null;
var G__15168 = (0);
var G__15169 = (0);
seq__15098 = G__15166;
chunk__15099 = G__15167;
count__15100 = G__15168;
i__15101 = G__15169;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq15092){
var G__15093 = cljs.core.first.call(null,seq15092);
var seq15092__$1 = cljs.core.next.call(null,seq15092);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15093,seq15092__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15118){
var vec__15119 = p__15118;
var k = cljs.core.nth.call(null,vec__15119,(0),null);
var v = cljs.core.nth.call(null,vec__15119,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__15078_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__15078_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__15078_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__15079_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__15079_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__4251__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4251__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__15080_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__15080_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__15122_15170 = cljs.core.seq.call(null,to_reload);
var chunk__15123_15171 = null;
var count__15124_15172 = (0);
var i__15125_15173 = (0);
while(true){
if((i__15125_15173 < count__15124_15172)){
var ns_15174 = cljs.core._nth.call(null,chunk__15123_15171,i__15125_15173);
goog.require(cljs.core.name.call(null,ns_15174),true);


var G__15175 = seq__15122_15170;
var G__15176 = chunk__15123_15171;
var G__15177 = count__15124_15172;
var G__15178 = (i__15125_15173 + (1));
seq__15122_15170 = G__15175;
chunk__15123_15171 = G__15176;
count__15124_15172 = G__15177;
i__15125_15173 = G__15178;
continue;
} else {
var temp__5720__auto___15179 = cljs.core.seq.call(null,seq__15122_15170);
if(temp__5720__auto___15179){
var seq__15122_15180__$1 = temp__5720__auto___15179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15122_15180__$1)){
var c__4679__auto___15181 = cljs.core.chunk_first.call(null,seq__15122_15180__$1);
var G__15182 = cljs.core.chunk_rest.call(null,seq__15122_15180__$1);
var G__15183 = c__4679__auto___15181;
var G__15184 = cljs.core.count.call(null,c__4679__auto___15181);
var G__15185 = (0);
seq__15122_15170 = G__15182;
chunk__15123_15171 = G__15183;
count__15124_15172 = G__15184;
i__15125_15173 = G__15185;
continue;
} else {
var ns_15186 = cljs.core.first.call(null,seq__15122_15180__$1);
goog.require(cljs.core.name.call(null,ns_15186),true);


var G__15187 = cljs.core.next.call(null,seq__15122_15180__$1);
var G__15188 = null;
var G__15189 = (0);
var G__15190 = (0);
seq__15122_15170 = G__15187;
chunk__15123_15171 = G__15188;
count__15124_15172 = G__15189;
i__15125_15173 = G__15190;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_15191 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_15191);
} else {
setTimeout(after_reload_fn_15191,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__15126 = cljs.core.seq.call(null,warnings);
var chunk__15127 = null;
var count__15128 = (0);
var i__15129 = (0);
while(true){
if((i__15129 < count__15128)){
var warning = cljs.core._nth.call(null,chunk__15127,i__15129);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__15192 = seq__15126;
var G__15193 = chunk__15127;
var G__15194 = count__15128;
var G__15195 = (i__15129 + (1));
seq__15126 = G__15192;
chunk__15127 = G__15193;
count__15128 = G__15194;
i__15129 = G__15195;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15126);
if(temp__5720__auto__){
var seq__15126__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15126__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15126__$1);
var G__15196 = cljs.core.chunk_rest.call(null,seq__15126__$1);
var G__15197 = c__4679__auto__;
var G__15198 = cljs.core.count.call(null,c__4679__auto__);
var G__15199 = (0);
seq__15126 = G__15196;
chunk__15127 = G__15197;
count__15128 = G__15198;
i__15129 = G__15199;
continue;
} else {
var warning = cljs.core.first.call(null,seq__15126__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__15200 = cljs.core.next.call(null,seq__15126__$1);
var G__15201 = null;
var G__15202 = (0);
var G__15203 = (0);
seq__15126 = G__15200;
chunk__15127 = G__15201;
count__15128 = G__15202;
i__15129 = G__15203;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__15130){
var map__15131 = p__15130;
var map__15131__$1 = cljs.core.__destructure_map.call(null,map__15131);
var exception_data = map__15131__$1;
var file = cljs.core.get.call(null,map__15131__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__15131__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__15131__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__15081_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__15081_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__15132 = "Compile Exception - ";
var G__15132__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return message;
}
})())?[G__15132,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__15132);
if(cljs.core.truth_(file)){
return [G__15132__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__15132__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
