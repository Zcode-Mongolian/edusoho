!function(c){function t(t){for(var e,n,r=t[0],o=t[1],u=t[2],a=0,i=[];a<r.length;a++)n=r[a],Object.prototype.hasOwnProperty.call(f,n)&&f[n]&&i.push(f[n][0]),f[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(c[e]=o[e]);for(s&&s(t);i.length;)i.shift()();return p.push.apply(p,u||[]),l()}function l(){for(var t,e=0;e<p.length;e++){for(var n=p[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==f[u]&&(r=!1)}r&&(p.splice(e--,1),t=a(a.s=n[0]))}return t}var n={},f={323:0},p=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=c,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var s=r;p.push([734,0]),l()}({137:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(38),o=n.n(r),u=function(t){t.on("click",function(t){$.post($(t.currentTarget).data("url"),function(t){"object"===o()(t)?window.location.href=t.url:$("#modal").modal("show").html(t)})})}},734:function(t,e,n){"use strict";n.r(e);var r,o,u=n(137);Object(u.a)($(".js-task-preview-buy-btn")),$("#modal").on("hidden.bs.modal",function(){$("#viewerIframe").attr("src","")}),$("#js-buy-btn").on("click",function(){$("#modal").modal("hide")}),r=$("#modal-event-report"),o=r.data(),$.post(r.data("url"),o)}});