!function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={372:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([1395,0]),n()}({1395:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(131),o=$("[data-role=saved-message]");Object(a.a)();var i,l=function(){o.html(Translator.trans("task.plugin_redmine_save_hint")).show()},s=function(){var e=(new Date).Format("yyyy-MM-dd hh:mm:ss");o.html(Translator.trans("task.plugin_redmine_save_success_hint",{date:e})).show(),Object(r.a)("success",Translator.trans("site.save_success_hint")),setTimeout((function(){o.hide()}),3e3)},u=function(){o.html("")},c=$(".js-sidebar-pane").height()-175,f=$("#note-content-field"),p=CKEDITOR.replace("note-content-field",{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:f.data("imageUploadUrl"),allowedContent:!0,height:c<300?200:c});function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(f.val(p.getData()),$.trim(f.val())){var t=$("#task-note-plugin-form"),n=t.serializeArray();i!==n[0].value&&(l(),e&&e.attr("disabled","disabled"),$.post(t.attr("action"),n).then((function(t){s(),e&&e.removeAttr("disabled"),i=n[0].value})).catch((function(t){e.removeAttr("disabled"),u()})))}else e&&Object(r.a)("danger",Translator.trans("course.notebook.empty_note_content_notice"))}p.on("change",(function(){f.val(p.getData())})),$("#note-save-btn").click((function(e){var t=$(this);e.preventDefault(),d(t)})),setInterval(d,3e4)},22:function(e,t){e.exports=jQuery}});