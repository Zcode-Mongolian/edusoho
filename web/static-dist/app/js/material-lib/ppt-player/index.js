!function(l){function t(t){for(var e,n,a=t[0],r=t[1],i=t[2],s=0,o=[];s<a.length;s++)n=a[s],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&o.push(u[n][0]),u[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(l[e]=r[e]);for(f&&f(t);o.length;)o.shift()();return p.push.apply(p,i||[]),c()}function c(){for(var t,e=0;e<p.length;e++){for(var n=p[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==u[i]&&(a=!1)}a&&(p.splice(e--,1),t=s(s.s=n[0]))}return t}var n={},u={236:0},p=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=l,s.c=n,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],a=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var f=a;p.push([705,0]),c()}({355:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var a=n(2),i=n.n(a),r=n(0),o=n.n(r),s=n(1),l=n.n(s),c=n(8),u=n.n(c),p=n(9),f=n.n(p),h=n(5),d=n.n(h),g=n(103),v=n(54),y=n.n(v);function A(a){var r=function(){if("undefined"==typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(i()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n=d()(a);return e=r?(t=d()(this).constructor,i()(n,arguments,t)):n.apply(this,arguments),f()(this,e)}}var _=function(t){u()(s,t);var i=A(s);function s(t){var e,n=t.element,a=t.slides,r=t.watermark;return o()(this,s),(e=i.call(this)).element=$(n),e.slides=a||[],e.watermark=r||"",e._KEY_ACTION_MAP={37:e._onPrev,39:e._onNext,38:e._onLast,40:e._onFirst},e.total=e.slides.length,e._page=0,e.placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",e._init(),e}return l()(s,[{key:"_render",value:function(){this.element.html('\n      <div class="slide-player">\n        <div class="slide-player-body loading-background"></div>\n        <div class="slide-notice">\n          <div class="header">{{ \'site.data_last_picture\'|trans }}\n            <button type="button" class="close">×</button>\n          </div>\n        </div>\n      \n        <div class="slide-player-control clearfix">\n          <a href="javascript:" class="goto-first">\n            <span class="glyphicon glyphicon-step-backward"></span>\n          </a>\n          <a href="javascript:" class="goto-prev">\n            <span class="glyphicon glyphicon-chevron-left"></span>\n          </a>\n          <a href="javascript:" class="goto-next">\n            <span class="glyphicon glyphicon-chevron-right"></span>\n          </a>\n          <a href="javascript:" class="goto-last">\n            <span class="glyphicon glyphicon-step-forward"></span>\n          </a>\n          <a href="javascript:" class="fullscreen">\n            <span class="glyphicon glyphicon-fullscreen"></span>\n          </a>\n          <div class="goto-page-input">\n            <input type="text" class="goto-page form-control input-sm" value="1">&nbsp;/&nbsp;\n              <span class="total"></span>\n          </div>\n        </div>\n      </div>'),this.element.find(".total").text(this.total);var t=this.slides.reduce(function(t,e,n){return t+='<img data-src="'.concat(e,'" class="slide" data-page="').concat(n+1,'">')},"");this.element.find(".slide-player-body").html(t),this.watermark&&this.element.append('<div class="slide-player-watermark">'.concat(this.watermark,"</div>"))}},{key:"_init",value:function(){this._render(),this._bindEvents(),this._onFirst()}},{key:"_lazyLoad",value:function(t){for(var e=t;e<t+4&&!(e>this.total);e++){var n=this._getSlide(e);n.attr("src")||n.attr("src",n.data("src"))}}},{key:"_getSlide",value:function(t){return this.element.find(".slide-player-body .slide").eq(t-1)}},{key:"_bindEvents",value:function(){var n=this;$(document).on("keydown",function(t){n._KEY_ACTION_MAP[t.keyCode]&&n._KEY_ACTION_MAP[t.keyCode].call(n)}),this.element.on("click",".goto-next",function(t){return n._onNext(t)}),this.element.on("click",".goto-prev",function(t){return n._onPrev(t)}),this.element.on("click",".goto-first",function(t){return n._onFirst(t)}),this.element.on("click",".goto-last",function(t){return n._onLast(t)}),this.element.on("click",".fullscreen",function(t){return n._onFullScreen(t)}),this.element.on("change",".goto-page",function(t){return n._onChangePage(t)});var a=this;this.on("change",function(t){var e=t.current;t.before;e==a.total&&a.emit("end",{page:n.total})})}},{key:"_onNext",value:function(){this.page!==this.total?this.page++:this.emit("end",{page:this.total})}},{key:"_onPrev",value:function(){1!=this.page&&this.page--}},{key:"_onFirst",value:function(){this.page=1}},{key:"_onLast",value:function(){this.page=this.total}},{key:"_onFullScreen",value:function(){var t=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);y.a.enabled?y.a.isFullscreen?y.a.toggle():y.a.request():t&&$("#task-content-iframe",parent.document).toggleClass("ios-full-screen")}},{key:"_onChangePage",value:function(t){this.page=$(t.target).val()}},{key:"page",get:function(){return this._page},set:function(t){var e=this,n=this.page,a=t;a>this.total&&(this.element.find(".goto-page").val(a),this._page=a),a<1&&(this.element.find(".goto-page").val(n),this._page=n),n&&this.element.find(".slide-player-body .slide").eq(n-1).removeClass("active");var r=this._getSlide(a);r.attr("src")?r.addClass("active"):(r.load(function(){e._page==r.data("page")&&r.addClass("active")}),r.attr("src",r.data("src"))),this._lazyLoad(a),this.element.find(".goto-page").val(a),this._page=a,this.emit("change",{current:a,before:n})}}]),s}(g.a)},705:function(t,e,n){"use strict";n.r(e);var a=n(355),r=$("#ppt-player").data("params");new a.a({element:"#ppt-player",slides:r.images})}});