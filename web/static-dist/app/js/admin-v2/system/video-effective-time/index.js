!function(c){function e(e){for(var t,n,a=e[0],i=e[1],r=e[2],s=0,o=[];s<a.length;s++)n=a[s],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&o.push(u[n][0]),u[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(c[t]=i[t]);for(p&&p(e);o.length;)o.shift()();return f.push.apply(f,r||[]),l()}function l(){for(var e,t=0;t<f.length;t++){for(var n=f[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==u[r]&&(a=!1)}a&&(f.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},u={87:0},f=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=c,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var p=a;f.push([577,0]),l()}({15:function(e,t){e.exports=jQuery},577:function(e,t,n){"use strict";n.r(t);var a=n(4),i=$("#video-effective-time-form");$(".js-setting-submit").click(function(){var e=$(".js-check-radio"),t=e.data("value"),n=$('input:radio[name="statistical_dimension"]:checked').val();t!==n?cd.confirm({content:'<div style="text-align:center;">'+Translator.trans("admin_v2.video_effective_time_setting.cancel.hint")+"</div>",okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel"),className:""}).on("ok",function(){$.get(e.data("url"),function(e){e?$.post(i.data("url"),i.serialize()).success(function(e){$(".js-check-radio").data("value",n),Object(a.a)("success",Translator.trans("site.save_success_hint"))}).fail(function(e,t,n){Object(a.a)("danger",e.responseJSON.error.message)}):Object(a.a)("danger",Translator.trans("admin_v2.video_effective_time_setting.refreshing_hint"))})}).on("cancel",function(){}):$.post(i.data("url"),i.serialize()).success(function(e){Object(a.a)("success",Translator.trans("site.save_success_hint"))}).fail(function(e,t,n){Object(a.a)("danger",e.responseJSON.error.message)})}),$('input:radio[name="play_rule"]').click(function(){"auto_pause"==$('input:radio[name="play_rule"]:checked').val()?$(".js-play-role-help").html(Translator.trans("admin_v2.video_effective_time_setting.play_rule.auto_pause.help_block")):$(".js-play-role-help").html(Translator.trans("admin_v2.video_effective_time_setting.play_rule.no_action.help_block"))}),$('input:radio[name="statistical_dimension"]').click(function(){"playing"==$('input:radio[name="statistical_dimension"]:checked').val()?$(".js-statistical-dimension-help").html(Translator.trans("admin_v2.video_effective_time_setting.statistical_dimension.playing.help_block")):$(".js-statistical-dimension-help").html(Translator.trans("admin_v2.video_effective_time_setting.statistical_dimension.page.help_block"))})}});