!function(t){function n(n){for(var e,c,s=n[0],u=n[1],l=n[2],f=0,d=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);for(i&&i(n);d.length;)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,n=0;n<a.length;n++){for(var r=a[n],e=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(e=!1)}e&&(a.splice(n--,1),t=c(c.s=r[0]))}return t}var e={},o={281:0},a=[];function c(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=e,c.d=function(t,n,r){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)c.d(r,e,function(n){return t[n]}.bind(null,e));return r},c.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var i=u;a.push([920,0]),r()}({22:function(t,n){t.exports=jQuery},920:function(t,n,r){"use strict";r.r(n);var e=r(8);$("#orders-table").on("click",".js-cancel-refund",(function(){var t=$(this);cd.confirm({title:Translator.trans("user.account.refund_cancel_title"),content:Translator.trans("user.account.refund_cancel_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t.data("url"),(function(){Object(e.a)("success",Translator.trans("user.account.refund_cancel_success_hint")),setTimeout((function(){window.location.reload()}),3e3)}))}))})),$("#orders-table").on("click",".js-cancel",(function(){var t=$(this);cd.confirm({title:Translator.trans("user.account.cancel_order_title"),content:Translator.trans("user.account.cancel_order_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t.data("url"),(function(t){1!=t&&Object(e.a)("danger",Translator.trans("user.account.cancel_order_fail_hint")),Object(e.a)("success",Translator.trans("user.account.cancel_order_success_hint")),setTimeout((function(){window.location.reload()}),3e3)}))}))})),$("#orders-table").on("click",".js-pay",(function(){var t=$(this);cd.confirm({title:Translator.trans("user.account.order_pay_"+t.data("type")+"_close_title"),content:Translator.trans("user.account.order_pay_"+t.data("type")+"_close_hint"),okText:Translator.trans("user.account.order_not_pay"),cancelText:Translator.trans("user.account.order_pay")}).on("cancel",(function(){window.location.href=t.data("url")}))}))}});