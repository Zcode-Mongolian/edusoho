!function(i){function r(r){for(var e,t,n=r[0],o=r[1],a=r[2],u=0,s=[];u<n.length;u++)t=n[u],Object.prototype.hasOwnProperty.call(c,t)&&c[t]&&s.push(c[t][0]),c[t]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(i[e]=o[e]);for(p&&p(r);s.length;)s.shift()();return f.push.apply(f,a||[]),l()}function l(){for(var r,e=0;e<f.length;e++){for(var t=f[e],n=!0,o=1;o<t.length;o++){var a=t[o];0!==c[a]&&(n=!1)}n&&(f.splice(e--,1),r=u(u.s=t[0]))}return r}var t={},c={277:0},f=[];function u(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return i[r].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=i,u.c=t,u.d=function(r,e,t){u.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},u.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return u.d(e,"a",e),e},u.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},u.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=r,e=e.slice();for(var o=0;o<e.length;o++)r(e[o]);var p=n;f.push([687,0]),l()}({17:function(r,e){r.exports=jQuery},687:function(r,e,t){"use strict";t.r(e);var n=t(4),o=$("#pay-password-reset-update-form"),a=o.validate({rules:{"form[currentUserLoginPassword]":{required:!0},"form[payPassword]":{required:!0,minlength:5,maxlength:20},"form[confirmPayPassword]":{required:!0,equalTo:"#form_payPassword"}}});console.log(a),$("#payPassword-save-btn").on("click",function(r){var e=$(r.currentTarget);a.form()&&(e.button("loading"),o.submit())});var u=$(".alert-danger").text(),s=$(".alert-success").text();u&&Object(n.a)("danger",Translator.trans(u)),s&&Object(n.a)("success",Translator.trans(s))}});