!function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static-dist/",r(r.s=973)}({973:function(t,e){var r=echarts.init(document.getElementById("line-data")),a=$.parseJSON($("#data").val());r.setOption({color:["#0E4D93","#687F92"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{bottom:"5%",containLabel:!0},xAxis:[{type:"category",name:Translator.trans("homework_manage.result_graph.status_distribution"),nameLocation:"middle",nameGap:25,data:a.xScore,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",name:Translator.trans("testpaper_manage.result_graph.person_num"),minInterval:1}],series:[{name:Translator.trans("homework_manage.result_graph.first_status_num"),type:"bar",data:a.yFirstNum},{name:Translator.trans("homework_manage.result_graph.max_status_num"),type:"bar",data:a.yMaxNum}]})}});