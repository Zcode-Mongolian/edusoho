!function(t){var n={};function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(o,a,function(n){return t[n]}.bind(null,a));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/static-dist/",e(e.s=973)}({973:function(t,n){var e=$("#class-teacher-column .show-more");e.data("toggle",!0),e.click((function(){var t=$(this);t.data("toggle")?($(this).siblings("ul").animate({"max-height":"2160px"},300),$(this).find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up"),t.data("toggle",!1)):($(this).siblings("ul").animate({"max-height":"324px"},300),$(this).find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down"),t.data("toggle",!0))}));var o=$("#class-teacher-column");o.on("click",".follow-btn",(function(){var t=$(this);$.post(t.data("url"),(function(){})).always((function(){t.hide(),o.find(".unfollow-btn").show()}))})).on("click",".unfollow-btn",(function(){var t=$(this);$.post(t.data("url"),(function(){})).always((function(){t.hide(),o.find(".follow-btn").show()}))}))}});