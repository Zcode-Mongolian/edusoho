!function(u){function e(e){for(var t,n,i=e[0],a=e[1],r=e[2],s=0,o=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&o.push(l[n][0]),l[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(f&&f(e);o.length;)o.shift()();return d.push.apply(d,r||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var n=d[t],i=!0,a=1;a<n.length;a++){var r=n[a];0!==l[r]&&(i=!1)}i&&(d.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},l={335:0},d=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=u,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var f=i;d.push([871,0]),c()}({15:function(e,t){e.exports=jQuery},154:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:$("html");a()(this,e),t.attr("unselectable","on").css("user-select","none").on("selectstart",!1)}},281:function(e,t,n){"use strict";var i=n(18),a=n.n(i),r=n(6),s=n.n(r),o=n(0),u=n.n(o),c=n(1),l=n.n(c),d=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}(),f=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}(),h=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[],n=$("[name="+e+"]").val();return t.push(n),t}},{key:"getAttachment",value:function(e){var t=[],n=$("[name="+e+"]").parent().find('[data-role="fileId"]').val();return""!=n&&t.push(n),t}}]),e}(),p=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]").each(function(){t.push($(this).val())}),t}}]),e}(),v=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}(),g=function(){function t(e){u()(this,t),this.type=e}return l()(t,null,[{key:"getTypeBuilder",value:function(e){var t=null;switch(e){case"choice":t=new d;break;case"determine":t=new f;break;case"essay":t=new h;break;case"fill":t=new p;break;case"single_choice":case"uncertain_choice":t=new v;break;default:t=null}return t}}]),t}(),m=n(154),y=n(139),b=n(4),k=function(){function t(e){u()(this,t),this.$container=e,this.answers={},this.usedTime=0<e.find(".js-used-time").length?s()(e.find(".js-used-time").val()):0,this.$form=e.find("form"),this._initEvent(),this._initUsedTimer(),this._isCopy(),this._alwaysSave()}return l()(t,[{key:"_initEvent",value:function(){var t=this;this.$container.on("focusin","textarea",function(e){return t._showEssayInputEditor(e)}),this.$container.on("click",'[data-role="test-suspend"],[data-role="paper-submit"]',function(e){return t._btnSubmit(e)}),this.$container.on("click",".js-testpaper-question-list li",function(e){return t._choiceList(e)}),this.$container.on("click","*[data-anchor]",function(e){return t._quick2Question(e)}),this.$container.find(".js-testpaper-question-label").on("click","input",function(e){return t._choiceLable(e)}),this.$container.on("click",".js-marking",function(e){return t._markingToggle(e)}),this.$container.on("click",".js-favorite",function(e){return t._favoriteToggle(e)}),this.$container.on("click",".js-analysis",function(e){return t._analysisToggle(e)}),this.$container.on("blur",'[data-type="fill"]',function(e){return t.fillChange(e)})}},{key:"_isCopy",value:function(){this.$container.find(".js-testpaper-body").data("copy")&&new m.a}},{key:"fillChange",value:function(e){var t=$(e.currentTarget);this._renderBtnIndex(t.attr("name"),!!t.val())}},{key:"_markingToggle",value:function(e){var t=$(e.currentTarget).addClass("hidden");t.siblings(".js-marking.hidden").removeClass("hidden");var n=t.closest(".js-testpaper-question").attr("id");$('[data-anchor="#'.concat(n,'"]')).find(".js-marking-card").toggleClass("hidden")}},{key:"_favoriteToggle",value:function(e){var t=$(e.currentTarget),n=t.data("targetType"),i=t.data("targetId");$.post(t.data("url"),{targetType:n,targetId:i},function(e){t.addClass("hidden").siblings(".js-favorite.hidden").data("url",e.url),t.addClass("hidden").siblings(".js-favorite.hidden").removeClass("hidden")}).error(function(e){Object(b.a)("error",e.error.message)})}},{key:"_analysisToggle",value:function(e){var t=$(e.currentTarget);t.addClass("hidden"),t.siblings(".js-analysis.hidden").removeClass("hidden"),t.closest(".js-testpaper-question").find(".js-testpaper-question-analysis").slideToggle()}},{key:"_initUsedTimer",value:function(){var e=this;this.$usedTimer=window.setInterval(function(){e.usedTime+=1},1e3)}},{key:"_choiceLable",value:function(e){var t=$(e.currentTarget),n=t.closest(".js-testpaper-question-label");this.changeInput(n,t)}},{key:"_choiceList",value:function(e){var t=$(e.currentTarget),n=t.index(),i=t.closest(".js-testpaper-question").find(".js-testpaper-question-label"),a=i.find("label").eq(n).find("input");a.prop("checked",!a.prop("checked")).change(),this.changeInput(i,a)}},{key:"changeInput",value:function(e,t){var n=0;e.find("label").each(function(e,t){$(t).find("input").prop("checked")?($(t).addClass("active"),n++):$(t).removeClass("active")});var i=t.attr("name");this._renderBtnIndex(i,0<n)}},{key:"_renderBtnIndex",value:function(e,t,n){var i=!(1<arguments.length&&void 0!==t)||t,a=2<arguments.length&&void 0!==n&&n,r=$('[data-anchor="#question'.concat(e,'"]'));i?r.addClass("done"):r.removeClass("done"),a?r.addClass("doing").siblings(".doing").removeClass("doing"):r.removeClass("doing")}},{key:"_showEssayInputEditor",value:function(e){var t,n,i,a=this,r=$(e.currentTarget);r.hasClass("essay-input-short")&&(e.preventDefault(),e.stopPropagation(),$(this).blur(),t=r.siblings(".essay-input-long"),n=t.siblings(".essay-input-btn"),r.hide(),t.show(),n.show(),(i=CKEDITOR.replace(t.attr("id"),{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:t.data("imageUploadUrl")})).on("blur",function(){i.updateElement(),setTimeout(function(){t.val(i.getData()),t.change(),t.val()?a._renderBtnIndex(t.attr("name"),!0):a._renderBtnIndex(t.attr("name"),!1)},1)}),i.on("instanceReady",function(){this.focus(),n.one("click",function(){r.val($(i.getData()).text()),i.destroy(),t.hide(),n.hide(),r.show()})}),i.on("key",function(){i.updateElement(),setTimeout(function(){t.val(i.getData()),t.change()},1)}),i.on("insertHtml",function(){i.updateElement(),setTimeout(function(){t.val(i.getData()),t.change()},1)}))}},{key:"_quick2Question",value:function(e){var t=$(e.currentTarget);window.location.hash=t.data("anchor")}},{key:"_suspendSubmit",value:function(e){var t=this._getAnswers(),n=this._getAttachments();$.post(e,{data:t,usedTime:this.usedTime,attachments:n}).done(function(){}).error(function(e){Object(b.a)("error",e.error.message)})}},{key:"_btnSubmit",value:function(e){var t=$(e.currentTarget);t.button("loading"),clearInterval(this.saveTimer),this._submitTest(t.data("url"),t.data("goto"))}},{key:"_submitTest",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:"",i=this._getAnswers(),a=new y.a,r=this._getAttachments();$.post(e,{data:i,usedTime:this.usedTime,attachments:r}).done(function(e){e.result&&a.emit("finish",{data:""}),""!=n||""!=e.goto?window.location.href=n:""!=e.goto?window.location.href=e.goto:""!=e.message&&Object(b.a)("error",e.message)}).error(function(e){Object(b.a)("error",e.error.message)})}},{key:"_getAnswers",value:function(){var i={};return $("*[data-type]").each(function(){var e=$(this).attr("name"),t=$(this).data("type"),n=g.getTypeBuilder(t).getAnswer(e);i[e]=n}),a()(i)}},{key:"_getAttachments",value:function(){var n={};return $('[data-type="essay"]').each(function(){var e=$(this).attr("name"),t=g.getTypeBuilder("essay").getAttachment(e);n[e]=t}),n}},{key:"_alwaysSave",value:function(){var t,n;0<$('input[name="testSuspend"]').length&&(t=this,n=$('input[name="testSuspend"]').data("url"),this.saveTimer=setInterval(function(){t._suspendSubmit(n);var e=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds();Object(b.a)("success",e+Translator.trans("testpaper.widget.save_success_hint"))},18e4))}}]),t}();t.a=k},52:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u});n(287);var i=n(16),r=function(){var e=$(".js-panel-card");e.perfectScrollbar(),e.perfectScrollbar("update")},a=function(){var t,n;console.log("ok"),Object(i.f)()||((t=$(".js-testpaper-card")).length<=0||(n=t.offset().top,$(window).scroll(function(){var e=$(window).scrollTop();n<=e?t.addClass("affix"):t.removeClass("affix")})))},s=function(){$(".js-btn-index").click(function(e){var t=$(e.currentTarget);$(".js-testpaper-heading").length<=0&&t.addClass("doing").siblings(".doing").removeClass("doing")})},o=function(){$("#showWrong").change(function(e){var a=$(e.currentTarget);$(".js-answer-notwrong").each(function(e,t){var n=$($(t).data("anchor")),i=n.closest(".js-testpaper-question-block");a.prop("checked")?(n.hide(),i.find(".js-testpaper-question:visible").length<=0&&i.hide()):(n.show(),i.show())}),r()})},u=function(){var t=$(".js-testpaper-watermark");0<t.length&&$.get(t.data("watermark-url"),function(e){t.each(function(){$(this).WaterMark({yPosition:"center",style:{"font-size":10},opacity:.6,contents:e})})})}},871:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),a=n(0),s=n.n(a),o=n(1),u=n.n(o),c=n(8),l=n.n(c),d=n(9),f=n.n(d),h=n(5),p=n.n(h),v=n(281),g=n(52);function m(i){var a=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(r()(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n=p()(i);return t=a?(e=p()(this).constructor,r()(n,arguments,e)):n.apply(this,arguments),f()(this,t)}}var y=function(e){l()(i,e);var n=m(i);function i(e){var t;return s()(this,i),(t=n.call(this,e)).$timePauseDialog=t.$container.find("#time-pause-dialog"),t.$timer=e.find(".js-testpaper-timer"),t._init(),t}return u()(i,[{key:"_init",value:function(){var t=this;Object(g.a)(),Object(g.b)(),Object(g.d)(),Object(g.e)(),Object(g.c)(),this._initTimer(),this.$container.on("click",".js-btn-pause",function(e){return t._clickBtnPause(e)}),this.$container.on("click",".js-btn-resume",function(e){return t._clickBtnReume(e)})}},{key:"_initTimer",value:function(){var e=this;this.$timer&&this.$timer.timer({countdown:!0,duration:this.$timer.data("time"),format:"%H:%M:%S",callback:function(){e.$container.find("#time-finish-dialog").modal("show"),clearInterval(e.$usedTimer),0==$('input[name="preview"]').length&&e._submitTest(e.$container.find('[data-role="paper-submit"]').data("url"))},repeat:!0,start:function(){e.usedTime=0}})}},{key:"_clickBtnPause",value:function(e){$(e.currentTarget).toggleClass("active").hasClass("active")?(this.$timer.timer("pause"),clearInterval(this.$usedTimer),this.$timePauseDialog.modal("show")):(this.$timer.timer("resume"),this._initUsedTimer(),this.$timePauseDialog.modal("hide"))}},{key:"_clickBtnReume",value:function(){this.$timer.timer("resume"),this._initUsedTimer(),this.$container.find(".js-btn-pause").removeClass("active"),this.$timePauseDialog.modal("hide")}}]),i}(v.a),b=n(97);$("#facein-init-modal").length<1&&new y($(".js-task-testpaper-body")),new b.a($(".js-task-testpaper-body"))}});