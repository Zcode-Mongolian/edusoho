!function(l){function t(t){for(var e,n,i=t[0],r=t[1],a=t[2],o=0,s=[];o<i.length;o++)n=i[o],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&s.push(u[n][0]),u[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(l[e]=r[e]);for(f&&f(t);s.length;)s.shift()();return d.push.apply(d,a||[]),c()}function c(){for(var t,e=0;e<d.length;e++){for(var n=d[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==u[a]&&(i=!1)}i&&(d.splice(e--,1),t=o(o.s=n[0]))}return t}var n={},u={294:0},d=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=l,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var f=i;d.push([751,0]),c()}({751:function(t,e,n){"use strict";n.r(e);var i=n(6),r=n.n(i),a=n(0),o=n.n(a),s=n(1),l=n.n(s),c=n(43),u=n(14);new(function(){function e(t){o()(this,e),this.$form=t,this.$description=this.$form.find('[name="description"]'),this.validator=null,this.difficultySlider=null,this._initEvent(),this._initValidate(),this._initSortList(),this._initSelect(),this.scoreSlider=null}return l()(e,[{key:"_initEvent",value:function(){var e=this;this.$form.on("click",'[data-role="submit"]',function(t){return e._submit(t)}),this.$form.on("click",'[name="mode"]',function(t){return e.changeMode(t)}),this.$form.on("click",'[name="range"]',function(t){return e.changeRange(t)}),this.$form.on("blur",'[data-role="count"]',function(t){return e.changeCount(t)})}},{key:"_initSelect",value:function(){$('[name="ranges[categoryId]"]').select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first"})}},{key:"initScoreSlider",value:function(t,n){var e=document.getElementById("score-slider"),i={start:t,connect:[!0,!1],tooltips:[!0],step:1,range:{min:0,max:n}};this.scoreSlider?this.scoreSlider.updateOptions(i):(this.scoreSlider=noUiSlider.create(e,i),e.noUiSlider.on("update",function(t,e){$(".noUi-tooltip").text("".concat((t[e]/n*100).toFixed(0),"%")),$(".js-passScore").text(r()(t[e]))})),$(".noUi-handle").attr("data-placement","top").attr("data-original-title",Translator.trans("activity.testpaper_manage.pass_score_hint",{passScore:t})).attr("data-container","body"),$(".noUi-handle").tooltip({html:!0}),$(".noUi-tooltip").text("".concat((t/n*100).toFixed(0),"%"))}},{key:"changeMode",value:function(t){"difficulty"==$(t.currentTarget).val()?(this.$form.find("#difficulty-form-group").removeClass("hidden"),this.initDifficultySlider()):this.$form.find("#difficulty-form-group").addClass("hidden")}},{key:"changeRange",value:function(t){"course"==$(t.currentTarget).val()?this.$form.find("#testpaper-range-selects").addClass("hidden"):this.$form.find("#testpaper-range-selects").removeClass("hidden")}},{key:"initDifficultySlider",value:function(){var t;this.difficultySlider||(t=document.getElementById("difficulty-percentage-slider"),this.difficultySlider=noUiSlider.create(t,{start:[30,70],margin:30,range:{min:0,max:100},step:1,connect:[!0,!0,!0],serialization:{resolution:1}}),t.noUiSlider.on("update",function(t){var e=r()(t[0]),n=t[1]-t[0],i=100-t[1];$(".js-simple-percentage-text").html(Translator.trans("activity.testpaper_manage.simple_percentage",{simplePercentage:e})),$(".js-normal-percentage-text").html(Translator.trans("activity.testpaper_manage.normal_percentage",{normalPercentage:n})),$(".js-difficulty-percentage-text").html(Translator.trans("activity.testpaper_manage.difficulty_percentage",{difficultyPercentage:i})),$('input[name="percentages[simple]"]').val(e),$('input[name="percentages[normal]"]').val(n),$('input[name="percentages[difficulty]"]').val(i)}))}},{key:"_initEditor",value:function(t){var e=this,n=CKEDITOR.replace(this.$description.attr("id"),{toolbar:"Simple",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.$description.data("imageUploadUrl"),height:100});n.on("change",function(){e.$description.val(Object(u.c)(n.getData()))}),n.on("blur",function(){e.$description.val(Object(u.c)(n.getData())),t.form()})}},{key:"changeCount",value:function(){var n=0;this.$form.find('[data-role="count"]').each(function(t,e){n+=r()($(e).val())}),this.$form.find('[name="questioncount"]').val(0<n?n:null)}},{key:"_initValidate",value:function(){this.validator=this.$form.validate({rules:{name:{required:!0,maxlength:50,trim:!0},description:{maxlength:500,trim:!0},limitedTime:{min:0,max:1e4,digits:!0},mode:{required:!0},range:{required:!0},questioncount:{required:!0}},messages:{questioncount:Translator.trans("activity.testpaper_manage.question_required_error_hint"),name:{required:Translator.trans("activity.testpaper_manage.input_title_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:50})},description:{required:Translator.trans("activity.testpaper_manage.input_description_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:500})},mode:Translator.trans("activity.testpaper_manage.generate_mode_hint"),range:Translator.trans("activity.testpaper_manage.question_scope")}}),this.$form.find(".testpaper-question-option-item").each(function(){var t=$(this);t.find('[data-role="count"]').rules("add",{min:0,max:function(){return r()(t.find('[role="questionNum"]').text())},digits:!0}),t.find('[data-role="score"]').rules("add",{min:0,max:1e3,es_score:!0}),0<t.find('[data-role="missScore"]').length&&t.find('[data-role="missScore"]').rules("add",{min:0,max:function(){return r()(t.find('[data-role="score"]').val())},es_score:!0})}),this._initEditor(this.validator)}},{key:"_initSortList",value:function(){Object(c.a)({element:"#testpaper-question-options",itemSelector:".testpaper-question-option-item",handle:".question-type-sort-handler",ajax:!1})}},{key:"_submit",value:function(t){var e=this,n=$(t.currentTarget),i=this.validator.form(),r=0;this.$form.find('[data-role="count"]').each(function(){var t=$(this);r+=Number(t.val())}),i&&(2e3<r?cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.questions_length_hint")}):$.post(n.data("checkUrl"),this.$form.serialize(),function(t){t?($(".js-build-check").html(""),n.button("loading").addClass("disabled"),e.$form.submit()):$(".js-build-check").html(Translator.trans("activity.testpaper_manage.question_num_error"))}))}}]),e}())($("#testpaper-form")),$('[name="ranges[categoryId]"]').change(function(){var t,e,n,i=$(this).data("checkNumUrl");t=i,e=$('[name="ranges[categoryId]"]').data("bankId"),n=$('[name="ranges[categoryId]"]').val(),$.post(t,{bankId:e,categoryId:n},function(t){$('[role="questionNum"]').text(0),$.each(t,function(t,e){$("[type='"+t+"']").text(e.itemNum)})})})}});