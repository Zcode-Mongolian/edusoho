!function(c){function t(t){for(var e,n,a=t[0],i=t[1],r=t[2],o=0,s=[];o<a.length;o++)n=a[o],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&s.push(l[n][0]),l[n]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(c[e]=i[e]);for(h&&h(t);s.length;)s.shift()();return d.push.apply(d,r||[]),u()}function u(){for(var t,e=0;e<d.length;e++){for(var n=d[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==l[r]&&(a=!1)}a&&(d.splice(e--,1),t=o(o.s=n[0]))}return t}var n={},l={329:0},d=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=c,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],a=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var h=a;d.push([781,0]),u()}({52:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return c});n(287);var a=n(16),r=function(){var t=$(".js-panel-card");t.perfectScrollbar(),t.perfectScrollbar("update")},i=function(){var e,n;console.log("ok"),Object(a.f)()||((e=$(".js-testpaper-card")).length<=0||(n=e.offset().top,$(window).scroll(function(){var t=$(window).scrollTop();n<=t?e.addClass("affix"):e.removeClass("affix")})))},o=function(){$(".js-btn-index").click(function(t){var e=$(t.currentTarget);$(".js-testpaper-heading").length<=0&&e.addClass("doing").siblings(".doing").removeClass("doing")})},s=function(){$("#showWrong").change(function(t){var i=$(t.currentTarget);$(".js-answer-notwrong").each(function(t,e){var n=$($(e).data("anchor")),a=n.closest(".js-testpaper-question-block");i.prop("checked")?(n.hide(),a.find(".js-testpaper-question:visible").length<=0&&a.hide()):(n.show(),a.show())}),r()})},c=function(){var e=$(".js-testpaper-watermark");0<e.length&&$.get(e.data("watermark-url"),function(t){e.each(function(){$(this).WaterMark({yPosition:"center",style:{"font-size":10},opacity:.6,contents:t})})})}},781:function(t,e,n){"use strict";n.r(e);var a=n(18),i=n.n(a),r=n(0),o=n.n(r),s=n(1),c=n.n(s),u=n(52);$.validator.addMethod("score",function(t,e){return!!/^\d+(\.\d)?$/.test(t)&&Number(t)<=Number($(e).data("score"))},$.validator.format(Translator.trans("activity.testpaper_manage.marking_validate_error_hint"))),new(function(){function e(t){o()(this,e),this.$container=t,this.checkContent={},this.$form=t.find("form"),this.$dialog=t.find("#testpaper-checked-dialog"),this.validator=null,this._initEvent(),this._init(),this._initValidate(),Object(u.d)(),this.isContinue=!1,this.passStatus="passed"}return c()(e,[{key:"_initEvent",value:function(){var e=this;this.$container.on("focusin","textarea",function(t){return e._showEssayInputEditor(t)}),this.$container.on("click",'[data-role="check-submit"]',function(t){return e._submitValidate(t)}),this.$container.on("click","*[data-anchor]",function(t){return e._quick2Question(t)}),this.$dialog.on("click",'[data-role="finish-check"]',function(t){return e._submit(t)}),this.$dialog.on("click",".js-next-check",function(t){return e._continue(t)}),this.$dialog.on("change","select",function(t){return e._teacherSayFill(t)})}},{key:"_init",value:function(){}},{key:"_showEssayInputEditor",value:function(t){var e,n,a,i=$(t.currentTarget);i.hasClass("essay-teacher-say-short")&&(t.preventDefault(),t.stopPropagation(),$(this).blur(),e=i.siblings(".essay-teacher-say-long"),n=e.siblings(".essay-teacher-say-btn"),i.hide(),e.show(),n.show(),(a=CKEDITOR.replace(e.attr("id"),{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:e.data("imageUploadUrl")})).on("blur",function(){a.updateElement(),setTimeout(function(){e.val(a.getData()),e.change()},1)}),a.on("instanceReady",function(){this.focus(),n.one("click",function(){i.val($(a.getData()).text()),a.destroy(),e.hide(),n.hide(),i.show()})}),a.on("key",function(){a.updateElement(),setTimeout(function(){e.val(a.getData()),e.change()},1)}),a.on("insertHtml",function(){a.updateElement(),setTimeout(function(){e.val(a.getData()),e.change()},1)}))}},{key:"_initValidate",value:function(){this.validator=this.$form.validate(),0<$("*[data-score]:visible").length&&$("*[data-score]:visible").each(function(){$(this).rules("add",{required:!0,score:!0,min:0,messages:{required:Translator.trans("activity.testpaper_manage.required_error_hint")}})})}},{key:"_quick2Question",value:function(t){var e=$(t.currentTarget),n=$(e.data("anchor")).offset();$(document).scrollTop(n.top-55)}},{key:"_submitValidate",value:function(){var n,t,e,a,i,r=0;null!=this.validator&&!this.validator.form()||(n=this,$("*[data-score]").each(function(){var t={},e=$(this).data("id");t.score=Number($(this).val()),t.teacherSay=$('[name="teacherSay_'+e+'"]').val(),n.checkContent[e]=t,r+=Number($(this).val())}),t=this.$dialog.find(".js-student-score"),e=this.$dialog.find(".js-pass-score").data("passScore"),a=Number(t.data("objectiveScore")),i=Number(r)+a,t.html(i),e<=i?(t.removeClass("color-danger").addClass("color-success"),this.passStatus="passed"):(t.removeClass("color-success").addClass("color-danger"),this.passStatus="unpassed"),this.$dialog.modal("show"))}},{key:"_continue",value:function(t){this.isContinue=!0,this._submit(t)}},{key:"_submit",value:function(t){var e=$(t.currentTarget),n=this.$dialog.find("textarea").val(),a="",a=0<this.$dialog.find('[name="passedStatus"]:checked').length?this.$dialog.find('[name="passedStatus"]:checked').val():this.passStatus;e.button("loading"),$.post(e.data("postUrl"),{result:i()(this.checkContent),teacherSay:n,passedStatus:a,isContinue:this.isContinue},function(t){""!=t.goto?window.location.href=t.goto:window.location.reload()})}},{key:"_teacherSayFill",value:function(t){var e=$(t.currentTarget).find("option:selected");""==e.val()?this.$dialog.find("textarea").val(""):this.$dialog.find("textarea").val(e.text())}}]),e}())($(".js-testpaper-container"))}});