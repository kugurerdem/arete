// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('arete.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
arete.core.header_infos = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disciple,"Working out for about 6 months.",cljs.core.cst$kw$artisan,"Working out for about 2 years.",cljs.core.cst$kw$master,"Working out for approximately 5 years."], null);
if((typeof arete !== 'undefined') && (typeof arete.core !== 'undefined') && (typeof arete.core.exercise_map !== 'undefined')){
} else {
arete.core.exercise_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
fetch("exercises.json").then((function (response){
return response.json();
})).then((function (json_data){
return cljs.core.reset_BANG_(arete.core.exercise_map,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)));
})).catch((function (error){
return console.error("Error loading Exercises",error);
}));
if((typeof arete !== 'undefined') && (typeof arete.core !== 'undefined') && (typeof arete.core.selected_gender !== 'undefined')){
} else {
arete.core.selected_gender = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$male);
}
if((typeof arete !== 'undefined') && (typeof arete.core !== 'undefined') && (typeof arete.core.selected_table_type !== 'undefined')){
} else {
arete.core.selected_table_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bw);
}
if((typeof arete !== 'undefined') && (typeof arete.core !== 'undefined') && (typeof arete.core.selected_weight_unit !== 'undefined')){
} else {
arete.core.selected_weight_unit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$kg);
}
arete.core.init_value = (70);
if((typeof arete !== 'undefined') && (typeof arete.core !== 'undefined') && (typeof arete.core.selected_value !== 'undefined')){
} else {
arete.core.selected_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(arete.core.init_value);
}
arete.core.radio_option = (function arete$core$radio_option(p__10496){
var map__10497 = p__10496;
var map__10497__$1 = cljs.core.__destructure_map(map__10497);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10497__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10497__$1,cljs.core.cst$kw$label);
var selected_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10497__$1,cljs.core.cst$kw$selected_DASH_value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_value),value),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.reset_BANG_(selected_value,value);
})], null)], null),label], null);
});
arete.core.option_selector = (function arete$core$option_selector(p__10498){
var map__10499 = p__10498;
var map__10499__$1 = cljs.core.__destructure_map(map__10499);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10499__$1,cljs.core.cst$kw$name);
var selected_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10499__$1,cljs.core.cst$kw$selected_DASH_value);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10499__$1,cljs.core.cst$kw$options);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,clojure.string.capitalize(name)], null),(function (){var iter__4652__auto__ = (function arete$core$option_selector_$_iter__10500(s__10501){
return (new cljs.core.LazySeq(null,(function (){
var s__10501__$1 = s__10501;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10501__$1);
if(temp__5720__auto__){
var s__10501__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10501__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__10501__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__10503 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__10502 = (0);
while(true){
if((i__10502 < size__4651__auto__)){
var map__10504 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__10502);
var map__10504__$1 = cljs.core.__destructure_map(map__10504);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10504__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10504__$1,cljs.core.cst$kw$label);
cljs.core.chunk_append(b__10503,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.radio_option,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$label,label,cljs.core.cst$kw$selected_DASH_value,selected_value,cljs.core.cst$kw$name,name,cljs.core.cst$kw$key,value], null)], null));

var G__10506 = (i__10502 + (1));
i__10502 = G__10506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10503),arete$core$option_selector_$_iter__10500(cljs.core.chunk_rest(s__10501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10503),null);
}
} else {
var map__10505 = cljs.core.first(s__10501__$2);
var map__10505__$1 = cljs.core.__destructure_map(map__10505);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10505__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10505__$1,cljs.core.cst$kw$label);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.radio_option,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$label,label,cljs.core.cst$kw$selected_DASH_value,selected_value,cljs.core.cst$kw$name,name,cljs.core.cst$kw$key,value], null)], null),arete$core$option_selector_$_iter__10500(cljs.core.rest(s__10501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(options);
})()], null);
});
arete.core.input_with_label = (function arete$core$input_with_label(p__10508){
var map__10509 = p__10508;
var map__10509__$1 = cljs.core.__destructure_map(map__10509);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10509__$1,cljs.core.cst$kw$label);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10509__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,arete.core.init_value,cljs.core.cst$kw$on_DASH_change,(function (p1__10507_SHARP_){
return cljs.core.reset_BANG_(state,(p1__10507_SHARP_.target.value | (0)));
})], null)], null)], null);
});
arete.core.create_standards_table_by = (function arete$core$create_standards_table_by(p__10512){
var vec__10513 = p__10512;
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10513,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10513,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10513,(2),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__10511_SHARP_){
return (- cljs.core.cst$kw$disciple.cljs$core$IFn$_invoke$arity$1(p1__10511_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10516){
var vec__10517 = p__10516;
var exercise = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10517,(0),null);
var standards = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10517,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exercise,exercise], null),cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__10510_SHARP_){
var G__10520 = (value - cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__10510_SHARP_));
return Math.abs(G__10520);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(standards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,type], null)))));
}),cljs.core.deref(arete.core.exercise_map)));
});
arete.core.tooltip = (function arete$core$tooltip(tooltiptext){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tooltip,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tooltiptext,tooltiptext], null)], null);
});
arete.core.table_component = (function arete$core$table_component(p__10521){
var map__10522 = p__10521;
var map__10522__$1 = cljs.core.__destructure_map(map__10522);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10522__$1,cljs.core.cst$kw$headers);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10522__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(function (){var iter__4652__auto__ = (function arete$core$table_component_$_iter__10523(s__10524){
return (new cljs.core.LazySeq(null,(function (){
var s__10524__$1 = s__10524;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10524__$1);
if(temp__5720__auto__){
var s__10524__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10524__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__10524__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__10526 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__10525 = (0);
while(true){
if((i__10525 < size__4651__auto__)){
var header = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__10525);
cljs.core.chunk_append(b__10526,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,clojure.string.capitalize(cljs.core.name(header)),(function (){var temp__5720__auto____$1 = (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(arete.core.header_infos) : header.call(null,arete.core.header_infos));
if(cljs.core.truth_(temp__5720__auto____$1)){
var tooltip_text = temp__5720__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.tooltip,tooltip_text], null);
} else {
return null;
}
})()], null));

var G__10539 = (i__10525 + (1));
i__10525 = G__10539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10526),arete$core$table_component_$_iter__10523(cljs.core.chunk_rest(s__10524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10526),null);
}
} else {
var header = cljs.core.first(s__10524__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,clojure.string.capitalize(cljs.core.name(header)),(function (){var temp__5720__auto____$1 = (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(arete.core.header_infos) : header.call(null,arete.core.header_infos));
if(cljs.core.truth_(temp__5720__auto____$1)){
var tooltip_text = temp__5720__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.tooltip,tooltip_text], null);
} else {
return null;
}
})()], null),arete$core$table_component_$_iter__10523(cljs.core.rest(s__10524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(headers);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4652__auto__ = (function arete$core$table_component_$_iter__10527(s__10528){
return (new cljs.core.LazySeq(null,(function (){
var s__10528__$1 = s__10528;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10528__$1);
if(temp__5720__auto__){
var s__10528__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10528__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__10528__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__10530 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__10529 = (0);
while(true){
if((i__10529 < size__4651__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__10529);
cljs.core.chunk_append(b__10530,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(function (){var iter__4652__auto__ = ((function (i__10529,row,c__4650__auto__,size__4651__auto__,b__10530,s__10528__$2,temp__5720__auto__,map__10522,map__10522__$1,headers,data){
return (function arete$core$table_component_$_iter__10527_$_iter__10531(s__10532){
return (new cljs.core.LazySeq(null,((function (i__10529,row,c__4650__auto__,size__4651__auto__,b__10530,s__10528__$2,temp__5720__auto__,map__10522,map__10522__$1,headers,data){
return (function (){
var s__10532__$1 = s__10532;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__10532__$1);
if(temp__5720__auto____$1){
var s__10532__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10532__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__10532__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__10534 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__10533 = (0);
while(true){
if((i__10533 < size__4651__auto____$1)){
var header = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto____$1,i__10533);
cljs.core.chunk_append(b__10534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,clojure.string.capitalize(clojure.string.trim(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header)),/[-:]/," ")))], null));

var G__10540 = (i__10533 + (1));
i__10533 = G__10540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10534),arete$core$table_component_$_iter__10527_$_iter__10531(cljs.core.chunk_rest(s__10532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10534),null);
}
} else {
var header = cljs.core.first(s__10532__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,clojure.string.capitalize(clojure.string.trim(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header)),/[-:]/," ")))], null),arete$core$table_component_$_iter__10527_$_iter__10531(cljs.core.rest(s__10532__$2)));
}
} else {
return null;
}
break;
}
});})(i__10529,row,c__4650__auto__,size__4651__auto__,b__10530,s__10528__$2,temp__5720__auto__,map__10522,map__10522__$1,headers,data))
,null,null));
});})(i__10529,row,c__4650__auto__,size__4651__auto__,b__10530,s__10528__$2,temp__5720__auto__,map__10522,map__10522__$1,headers,data))
;
return iter__4652__auto__(headers);
})()], null));

var G__10541 = (i__10529 + (1));
i__10529 = G__10541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10530),arete$core$table_component_$_iter__10527(cljs.core.chunk_rest(s__10528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10530),null);
}
} else {
var row = cljs.core.first(s__10528__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(function (){var iter__4652__auto__ = ((function (row,s__10528__$2,temp__5720__auto__,map__10522,map__10522__$1,headers,data){
return (function arete$core$table_component_$_iter__10527_$_iter__10535(s__10536){
return (new cljs.core.LazySeq(null,(function (){
var s__10536__$1 = s__10536;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__10536__$1);
if(temp__5720__auto____$1){
var s__10536__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10536__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__10536__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__10538 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__10537 = (0);
while(true){
if((i__10537 < size__4651__auto__)){
var header = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__10537);
cljs.core.chunk_append(b__10538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,clojure.string.capitalize(clojure.string.trim(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header)),/[-:]/," ")))], null));

var G__10542 = (i__10537 + (1));
i__10537 = G__10542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10538),arete$core$table_component_$_iter__10527_$_iter__10535(cljs.core.chunk_rest(s__10536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10538),null);
}
} else {
var header = cljs.core.first(s__10536__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,clojure.string.capitalize(clojure.string.trim(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header)),/[-:]/," ")))], null),arete$core$table_component_$_iter__10527_$_iter__10535(cljs.core.rest(s__10536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__10528__$2,temp__5720__auto__,map__10522,map__10522__$1,headers,data))
;
return iter__4652__auto__(headers);
})()], null),arete$core$table_component_$_iter__10527(cljs.core.rest(s__10528__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(data);
})()], null)], null);
});
arete.core.app = (function arete$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Arete!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"How strong you are?"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_inputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.option_selector,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$selected_DASH_value,arete.core.selected_gender,cljs.core.cst$kw$name,"gender",cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$male,cljs.core.cst$kw$label," Male"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$female,cljs.core.cst$kw$label," Female"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.option_selector,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$selected_DASH_value,arete.core.selected_table_type,cljs.core.cst$kw$name,"table type",cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$bw,cljs.core.cst$kw$label," Bodyweight"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$age,cljs.core.cst$kw$label," Age"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.option_selector,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$selected_DASH_value,arete.core.selected_weight_unit,cljs.core.cst$kw$name,"unit",cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$kg,cljs.core.cst$kw$label," kg"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$lbs,cljs.core.cst$kw$label," lbs"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.input_with_label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(arete.core.selected_table_type),cljs.core.cst$kw$age))?"Your age:":["Bodyweight (",cljs.core.name(cljs.core.deref(arete.core.selected_weight_unit)),") "].join('')),cljs.core.cst$kw$state,arete.core.selected_value], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Standards for You"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.table_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$headers,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exercise,cljs.core.cst$kw$disciple,cljs.core.cst$kw$artisan,cljs.core.cst$kw$master], null),cljs.core.cst$kw$data,arete.core.create_standards_table_by(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(arete.core.selected_gender),cljs.core.deref(arete.core.selected_table_type),(cljs.core.deref(arete.core.selected_value) * (function (){var G__10544 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lbs,(1),cljs.core.cst$kw$kg,2.2], null);
var fexpr__10543 = cljs.core.deref(arete.core.selected_weight_unit);
return (fexpr__10543.cljs$core$IFn$_invoke$arity$1 ? fexpr__10543.cljs$core$IFn$_invoke$arity$1(G__10544) : fexpr__10543.call(null,G__10544));
})())], null))], null)], null)], null);
});
arete.core.mount = (function arete$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arete.core.app], null),el);
});
arete.core.mount_app_element = (function arete$core$mount_app_element(){
var temp__5720__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return arete.core.mount(el);
} else {
return null;
}
});
arete.core.mount_app_element();
arete.core.on_reload = (function arete$core$on_reload(){
return arete.core.mount_app_element();
});
