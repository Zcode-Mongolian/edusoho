!function(t){function e(e){for(var r,o,l=e[0],u=e[1],c=e[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={43:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var s=u;i.push([1237,0]),n()}({1237:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),i=n(3),o=n.n(i),l=n(316);n(107);new(function(){function t(e){a()(this,t),this._init()}return o()(t,[{key:"_init",value:function(){var t=this;this._inItStep2form(),this._inItStep3form(),this._lanuchAutoSave(),$(".js-continue-edit").on("click",(function(e){var n=$(e.currentTarget),r=n.data("content");t.editor.setData(r),n.remove()}))}},{key:"_inItStep2form",value:function(){var t=$("#step2-form"),e=t.data("validator");e=t.validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},content:{required:!0,trim:!0}}});var n=$('[name="content"]');this.editor=Object(l.a)(n,e),this._contentCache=n.val()}},{key:"_lanuchAutoSave",value:function(){var t=this,e=$("#modal .modal-title",parent.document);this._originTitle=e.text(),setInterval((function(){t._saveDraft()}),5e3)}},{key:"_saveDraft",value:function(){var t=this,e=this.editor.getData();if(e!==this._contentCache){var n=$('[name="content"]');$.post(n.data("saveDraftUrl"),{content:e}).done((function(){var n=new Date,r=$("#modal .modal-title",parent.document),a=Translator.trans("site.date_format_his",{hours:n.getHours(),minutes:n.getMinutes(),seconds:n.getSeconds()});r.text(t._originTitle+Translator.trans("activity.text_manage.save_draft_hint",{createdTime:a})),t._contentCache=e}))}}},{key:"_inItStep3form",value:function(){var t=$("#step3-form");t.data("validator");t.validate({rules:{finishDetail:{required:!0,positive_integer:!0,max:300}},messages:{finishDetail:{required:Translator.trans("activity.text_manage.finish_detail_required_error_hint")}}})}}]),t}())},316:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){var n=CKEDITOR.replace("text-content-field",{toolbar:"Task",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#text-content-field").data("imageUploadUrl"),filebrowserFlashUploadUrl:$("#text-content-field").data("flashUploadUrl"),allowedContent:!0,height:300});return n.on("change",(function(){console.log("change"),t.val(n.getData()),e&&e.form()})),n.on("blur",(function(){console.log("blur"),t.val(n.getData()),e&&e.form()})),n}}});