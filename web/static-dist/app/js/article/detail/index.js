!function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(u&&u(e);d.length;)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={118:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([866,0]),n()}({198:function(t,e,n){"use strict";var a=n(10),o=n.n(a),r=n(2),s=n.n(r),i=n(3),c=n.n(i),l=n(8),u=new(n(190).a)({drag:{limitType:"article",bar:"#drag-btn",target:".js-jigsaw"}}),p=function(){function t(e){s()(this,t),this.ele=$(e.element),this.init()}return c()(t,[{key:"init",value:function(){this.initEvent(),this.initPostForm()}},{key:"initEvent",value:function(){var t=this,e=this.ele;console.log(e),e.on("click",".js-post-more",(function(e){return t.onClickPostMore(e)})),e.on("click",".js-reply",(function(e){return t.onClickReply(e)})),e.on("click",".js-post-delete",(function(e){return t.onPostDelete(e)})),e.on("click",".js-post-up",(function(e){return t.onPostUp(e)})),e.on("click","[data-role=confirm-btn]",(function(e){return t.onConfirmBtn(e)})),e.on("click",".js-toggle-subpost-form",(function(e){return t.onClickToggleSubpostForm(e)})),e.on("click",".js-event-cancel",(function(e){return t.onClickEventCancelBtn(e)})),e.on("click",".thread-subpost-container .pagination a",(function(e){return t.onClickSubpost(e)}))}},{key:"onClickPostMore",value:function(t){t.stopPropagation();var e=$(t.currentTarget);e.parents(".thread-subpost-moretext").addClass("hide"),e.parents(".thread-post").find(".thread-subpost").removeClass("hide"),e.parents(".thread-post").find(".pagination").removeClass("hide")}},{key:"onClickReply",value:function(t){console.log("ok"),t.stopPropagation();var e=$(t.currentTarget),n=e.parents(".thread-subpost-list").length>0,a=e.parents(".thread-post").find(".thread-subpost-container"),o=a.find(".thread-subpost-form");if(n){o.removeClass("hide");var r=Translator.trans("thread.post.reply")+" @ "+e.parents(".thread-post").data("authorName")+"： ";o.find("textarea").val(r).trigger("focus")}else a.toggleClass("hide");e.html()==Translator.trans("thread.post.reply")?e.html(Translator.trans("thread.post.put_away")):e.html(Translator.trans("thread.post.reply")),this.initSubpostForm(o)}},{key:"onPostDelete",value:function(t){t.stopPropagation();var e=this.ele,n=$(t.currentTarget);if(confirm(Translator.trans("thread.post.delete_hint"))){var a=n.parents(".thread-subpost-list").length>0;$.post(n.data("url"),(function(){if(a){var t=n.parents(".thread-post").find(".subposts-num");t.text(o()(t.text())-1)}else e.find(".thread-post-num").text(o()(e.find(".thread-post-num").text())-1);$(n.data("for")).remove()}))}}},{key:"onPostUp",value:function(t){t.stopPropagation();var e=$(t.currentTarget);$.post(e.data("url"),(function(t){"ok"==t.status?e.find(".post-up-num").text(o()(e.find(".post-up-num").text())+1):"votedError"==t.status?Object(l.a)("danger",Translator.trans("thread.post.like_hint")):Object(l.a)("danger",Translator.trans("thread.post.like_error_hint"))}),"json")}},{key:"onConfirmBtn",value:function(t){t.stopPropagation();var e=$(t.currentTarget);confirm(e.data("confirmMessage"))&&$.post(e.data("url"),(function(){e.data("afterUrl")?window.location.href=e.data("afterUrl"):window.location.reload()}))}},{key:"onClickToggleSubpostForm",value:function(t){t.stopPropagation();var e=$(t.currentTarget).parents(".thread-subpost-container").find(".thread-subpost-form");e.toggleClass("hide"),this.initSubpostForm(e)}},{key:"onClickEventCancelBtn",value:function(t){$.post($(t.currentTarget).data("url"),(function(){window.location.reload()}))}},{key:"onClickSubpost",value:function(t){t.preventDefault();var e=$(t.currentTarget);$.post(e.attr("href"),(function(t){var n=e.parents(".thread-post").attr("id");$("body,html").animate({scrollTop:$("#"+n).offset().top},300),e.closest(".thread-subpost-container .thread-subpost-content").html(t)}))}},{key:"initPostForm",value:function(){var t=$(".thread-pripost-list"),e=$("#thread-post-form");if(0!=e.length){var n=null,a=e.find("textarea[name=content]");a.data("imageUploadUrl")&&(n=CKEDITOR.replace(a.attr("id"),{toolbar:"Thread",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:a.data("imageUploadUrl")})).on("change",(function(){a.val(n.getData())}));var r=null;1==$("input[name=enable_anti_brush_captcha]").val()&&(r={captchaClass:u,isShowCaptcha:$(u.params.maskClass).length?1:0});var s=e.find("[type=submit]"),i=e.validate({ajax:!0,currentDom:s,rules:{content:"required"},captcha:r,submitSuccess:function(r){s.button("reset"),a.data("imageUploadUrl")?(t.append(r),n.setData("")):(t.prepend(r),a.val(""));var c=t.find("li:last-child").offset();$("body").scrollTop(c.top),e.find(".thread-post-num").text(o()(e.find(".thread-post-num").text())+1),t.find("li.empty").remove(),t.closest(".top-reply").removeClass("hidden"),$(".js-attachment-list").empty(),$(".js-attachment-ids").val(""),$(".js-upload-file").show(),i.settings.captcha.isShowCaptcha=1,u.hideDrag()},submitError:function(t){i.settings.captcha.isShowCaptcha=1,u.hideDrag(),s.button("reset")}});e.on("submitHandler",(function(){u.setType("comment")})),u.on("success",(function(t){"comment"==t.type&&(i.settings.captcha.isShowCaptcha=0,e.find("input[name=_dragCaptchaToken]").val(t.token),e.submit())}))}}},{key:"initSubpostForm",value:function(t){var e=null;1==$("input[name=enable_anti_brush_captcha]").val()&&(e={captchaClass:u,isShowCaptcha:$(u.params.maskClass).length?1:0}),t.off("submitHandler"),u.off("success");var n=t.find("[type=submit]"),a=t.validate({ajax:!0,currentDom:n,rules:{content:"required"},captcha:e,submitSuccess:function(e){if(e.error)Object(l.a)("danger",e.error);else{n.button("reset"),t.parents(".thread-subpost-container").find(".thread-subpost-list").append(e),t.find("textarea").val("");var r=t.parents(".thread-post").find(".subposts-num");r.text(o()(r.text())+1),r.parent().removeClass("hide"),a.settings.captcha.isShowCaptcha=1,u.hideDrag()}},submitError:function(t){a.settings.captcha.isShowCaptcha=1,u.hideDrag(),n.button("reset")}});t.on("submitHandler",(function(){u.setType("reply")})),u.on("success",(function(e){"reply"==e.type&&(a.settings.captcha.isShowCaptcha=0,t.find("input[name=_dragCaptchaToken]").val(e.token),t.submit())}))}},{key:"undelegateEvents",value:function(t,e){this.ele.off(t,e)}}]),t}();e.a=p},22:function(t,e){t.exports=jQuery},866:function(t,e,n){"use strict";n.r(e);var a="#detail-content";new(n(198).a)({element:a});$(".js-article-copy-body").data("copy")&&(document.onselectstart=new Function("return false"),document.oncontextmenu=new Function("return false"),window.sidebar&&(document.onmousedown=new Function("return true"),document.onclick=new Function("return true"),document.oncut=new Function("return false"),document.oncopy=new Function("return false")),document.addEventListener("keydown",(function(t){83===t.keyCode&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&(t.preventDefault(),t.stopPropagation())}),!1)),$(a).on("click",".js-article-like",(function(){var t=$(this);t.hasClass("color-primary")?$.post(t.data("cancelLikeUrl"),(function(t){$(".article-content").find(".js-like-num").html(t.upsNum)})).always((function(){t.removeClass("color-primary"),t.closest(".icon-favour").removeClass("active")})):$.post(t.data("likeUrl"),(function(t){$(".article-content").find(".js-like-num").html(t.upsNum)})).always((function(){t.addClass("color-primary"),t.closest(".icon-favour").addClass("active")}))}))}});