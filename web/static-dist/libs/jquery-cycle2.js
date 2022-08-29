/*! For license information please see jquery-cycle2.js.LICENSE.txt */
!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/",i(i.s=514)}({514:function(e,t,i){e.exports=i(515)},515:function(e,t,i){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){var e;e=function(e){!function(e){"use strict";function t(e){return(e||"").toLowerCase()}e.fn.cycle=function(i){var n;return 0!==this.length||e.isReady?this.each((function(){var n,o,s,c,l=e(this),r=e.fn.cycle.log;if(!l.data("cycle.opts")){for(var a in(!1===l.data("cycle-log")||i&&!1===i.log||o&&!1===o.log)&&(r=e.noop),r("--c2 init--"),n=l.data())n.hasOwnProperty(a)&&/^cycle[A-Z]+/.test(a)&&(c=n[a],r((s=a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t))+":",c,"("+typeof c+")"),n[s]=c);(o=e.extend({},e.fn.cycle.defaults,n,i||{})).timeoutId=0,o.paused=o.paused||!1,o.container=l,o._maxZ=o.maxZ,o.API=e.extend({_container:l},e.fn.cycle.API),o.API.log=r,o.API.trigger=function(e,t){return o.container.trigger(e,t),o.API},l.data("cycle.opts",o),l.data("cycle.API",o.API),o.API.trigger("cycle-bootstrap",[o,o.API]),o.API.addInitialSlides(),o.API.preInitSlideshow(),o.slides.length&&o.API.initSlideshow()}})):(n={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e((function(){e(n.s,n.c).cycle(i)})),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var t=this.opts(),i=t.slides;t.slideCount=0,t.slides=e(),i=i.jquery?i:t.container.find(i),t.random&&i.sort((function(){return Math.random()-.5})),t.API.add(i)},preInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-pre-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.preInit)&&i.preInit(t),t._preInitialized=!0},postInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-post-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.postInit)&&i.postInit(t)},initSlideshow:function(){var t,i=this.opts(),n=i.container;i.API.calcFirstSlide(),"static"==i.container.css("position")&&i.container.css("position","relative"),e(i.slides[i.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),i.API.stackSlides(i.slides[i.currSlide],i.slides[i.nextSlide],!i.reverse),i.pauseOnHover&&(!0!==i.pauseOnHover&&(n=e(i.pauseOnHover)),n.hover((function(){i.API.pause(!0)}),(function(){i.API.resume(!0)}))),i.timeout&&(t=i.API.getSlideOpts(i.currSlide),i.API.queueTransition(t,t.timeout+i.delay)),i._initialized=!0,i.API.updateView(!0),i.API.trigger("cycle-initialized",[i]),i.API.postInitSlideshow()},pause:function(t){var i=this.opts(),n=i.API.getSlideOpts(),o=i.hoverPaused||i.paused;t?i.hoverPaused=!0:i.paused=!0,o||(i.container.addClass("cycle-paused"),i.API.trigger("cycle-paused",[i]).log("cycle-paused"),n.timeout&&(clearTimeout(i.timeoutId),i.timeoutId=0,i._remainingTimeout-=e.now()-i._lastQueue,(i._remainingTimeout<0||isNaN(i._remainingTimeout))&&(i._remainingTimeout=void 0)))},resume:function(e){var t=this.opts(),i=!t.hoverPaused&&!t.paused;e?t.hoverPaused=!1:t.paused=!1,i||(t.container.removeClass("cycle-paused"),0===t.slides.filter(":animated").length&&t.API.queueTransition(t.API.getSlideOpts(),t._remainingTimeout),t.API.trigger("cycle-resumed",[t,t._remainingTimeout]).log("cycle-resumed"))},add:function(t,i){var n,o=this.opts(),s=o.slideCount;"string"==e.type(t)&&(t=e.trim(t)),e(t).each((function(){var t,n=e(this);i?o.container.prepend(n):o.container.append(n),o.slideCount++,t=o.API.buildSlideOpts(n),o.slides=i?e(n).add(o.slides):o.slides.add(n),o.API.initSlide(t,n,--o._maxZ),n.data("cycle.opts",t),o.API.trigger("cycle-slide-added",[o,t,n])})),o.API.updateView(!0),o._preInitialized&&2>s&&o.slideCount>=1&&(o._initialized?o.timeout&&(n=o.slides.length,o.nextSlide=o.reverse?n-1:1,o.timeoutId||o.API.queueTransition(o)):o.API.initSlideshow())},calcFirstSlide:function(){var e,t=this.opts();((e=parseInt(t.startingSlide||0,10))>=t.slides.length||0>e)&&(e=0),t.currSlide=e,t.reverse?(t.nextSlide=e-1,t.nextSlide<0&&(t.nextSlide=t.slides.length-1)):(t.nextSlide=e+1,t.nextSlide==t.slides.length&&(t.nextSlide=0))},calcNextSlide:function(){var e,t=this.opts();t.reverse?(e=t.nextSlide-1<0,t.nextSlide=e?t.slideCount-1:t.nextSlide-1,t.currSlide=e?0:t.nextSlide+1):(e=t.nextSlide+1==t.slides.length,t.nextSlide=e?0:t.nextSlide+1,t.currSlide=e?t.slides.length-1:t.nextSlide-1)},calcTx:function(t,i){var n,o=t;return o._tempFx?n=e.fn.cycle.transitions[o._tempFx]:i&&o.manualFx&&(n=e.fn.cycle.transitions[o.manualFx]),n||(n=e.fn.cycle.transitions[o.fx]),o._tempFx=null,this.opts()._tempFx=null,n||(n=e.fn.cycle.transitions.fade,o.API.log('Transition "'+o.fx+'" not found.  Using fade.')),n},prepareTx:function(e,t){var i,n,o,s,c,l=this.opts();return l.slideCount<2?void(l.timeoutId=0):(!e||l.busy&&!l.manualTrump||(l.API.stopTransition(),l.busy=!1,clearTimeout(l.timeoutId),l.timeoutId=0),void(l.busy||(0!==l.timeoutId||e)&&(n=l.slides[l.currSlide],o=l.slides[l.nextSlide],s=l.API.getSlideOpts(l.nextSlide),c=l.API.calcTx(s,e),l._tx=c,e&&void 0!==s.manualSpeed&&(s.speed=s.manualSpeed),l.nextSlide!=l.currSlide&&(e||!l.paused&&!l.hoverPaused&&l.timeout)?(l.API.trigger("cycle-before",[s,n,o,t]),c.before&&c.before(s,n,o,t),i=function(){l.busy=!1,l.container.data("cycle.opts")&&(c.after&&c.after(s,n,o,t),l.API.trigger("cycle-after",[s,n,o,t]),l.API.queueTransition(s),l.API.updateView(!0))},l.busy=!0,c.transition?c.transition(s,n,o,t,i):l.API.doTransition(s,n,o,t,i),l.API.calcNextSlide(),l.API.updateView()):l.API.queueTransition(s))))},doTransition:function(t,i,n,o,s){var c=t,l=e(i),r=e(n),a=function(){r.animate(c.animIn||{opacity:1},c.speed,c.easeIn||c.easing,s)};r.css(c.cssBefore||{}),l.animate(c.animOut||{},c.speed,c.easeOut||c.easing,(function(){l.css(c.cssAfter||{}),c.sync||a()})),c.sync&&a()},queueTransition:function(t,i){var n=this.opts(),o=void 0!==i?i:t.timeout;return 0===n.nextSlide&&0==--n.loop?(n.API.log("terminating; loop=0"),n.timeout=0,o?setTimeout((function(){n.API.trigger("cycle-finished",[n])}),o):n.API.trigger("cycle-finished",[n]),void(n.nextSlide=n.currSlide)):void 0!==n.continueAuto&&(!1===n.continueAuto||e.isFunction(n.continueAuto)&&!1===n.continueAuto())?(n.API.log("terminating automatic transitions"),n.timeout=0,void(n.timeoutId&&clearTimeout(n.timeoutId))):void(o&&(n._lastQueue=e.now(),void 0===i&&(n._remainingTimeout=t.timeout),n.paused||n.hoverPaused||(n.timeoutId=setTimeout((function(){n.API.prepareTx(!1,!n.reverse)}),o))))},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var t=this.opts();return clearTimeout(t.timeoutId),t.timeoutId=0,t.nextSlide=t.currSlide+e,t.nextSlide<0?t.nextSlide=t.slides.length-1:t.nextSlide>=t.slides.length&&(t.nextSlide=0),t.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(i){var n,o,s=this.opts(),c=i.data()||{};for(var l in c)c.hasOwnProperty(l)&&/^cycle[A-Z]+/.test(l)&&(n=c[l],o=l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),s.API.log("["+(s.slideCount-1)+"]",o+":",n,"("+typeof n+")"),c[o]=n);(c=e.extend({},e.fn.cycle.defaults,s,c)).slideNum=s.slideCount;try{delete c.API,delete c.slideCount,delete c.currSlide,delete c.nextSlide,delete c.slides}catch(e){}return c},getSlideOpts:function(t){var i=this.opts();void 0===t&&(t=i.currSlide);var n=i.slides[t],o=e(n).data("cycle.opts");return e.extend({},i,o)},initSlide:function(t,i,n){var o=this.opts();i.css(t.slideCss||{}),n>0&&i.css("zIndex",n),isNaN(t.speed)&&(t.speed=e.fx.speeds[t.speed]||e.fx.speeds._default),t.sync||(t.speed=t.speed/2),i.addClass(o.slideClass)},updateView:function(e,t){var i=this.opts();if(i._initialized){var n=i.API.getSlideOpts(),o=i.slides[i.currSlide];!e&&!0!==t&&(i.API.trigger("cycle-update-view-before",[i,n,o]),i.updateView<0)||(i.slideActiveClass&&i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass),e&&i.hideNonActive&&i.slides.filter(":not(."+i.slideActiveClass+")").css("visibility","hidden"),0===i.updateView&&setTimeout((function(){i.API.trigger("cycle-update-view",[i,n,o,e])}),n.speed/(i.sync?2:1)),0!==i.updateView&&i.API.trigger("cycle-update-view",[i,n,o,e]),e&&i.API.trigger("cycle-update-view-after",[i,n,o]))}},getComponent:function(t){var i=this.opts(),n=i[t];return"string"==typeof n?/^\s*[\>|\+|~]/.test(n)?i.container.find(n):e(n):n.jquery?n:e(n)},stackSlides:function(t,i,n){var o=this.opts();t||(t=o.slides[o.currSlide],i=o.slides[o.nextSlide],n=!o.reverse),e(t).css("zIndex",o.maxZ);var s,c=o.maxZ-2,l=o.slideCount;if(n){for(s=o.currSlide+1;l>s;s++)e(o.slides[s]).css("zIndex",c--);for(s=0;s<o.currSlide;s++)e(o.slides[s]).css("zIndex",c--)}else{for(s=o.currSlide-1;s>=0;s--)e(o.slides[s]).css("zIndex",c--);for(s=l-1;s>o.currSlide;s--)e(o.slides[s]).css("zIndex",c--)}e(i).css("zIndex",o.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: 2.1.6"},e.fn.cycle.transitions={custom:{},none:{before:function(e,t,i,n){e.API.stackSlides(i,t,n),e.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(t,i,n,o){var s=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,o),t.cssBefore=e.extend(s,{opacity:0,visibility:"visible",display:"block"}),t.animIn={opacity:1},t.animOut={opacity:0}}},fadeout:{before:function(t,i,n,o){var s=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,o),t.cssBefore=e.extend(s,{opacity:1,visibility:"visible",display:"block"}),t.animOut={opacity:0}}},scrollHorz:{before:function(e,t,i,n){e.API.stackSlides(t,i,n);var o=e.container.css("overflow","hidden").width();e.cssBefore={left:n?o:-o,top:0,opacity:1,visibility:"visible",display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:n?-o:o}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},e(document).ready((function(){e(e.fn.cycle.defaults.autoSelector).cycle()}))}(e),function(e){"use strict";function t(t,i){var n,o,s,c=i.autoHeight;if("container"==c)o=e(i.slides[i.currSlide]).outerHeight(),i.container.height(o);else if(i._autoHeightRatio)i.container.height(i.container.width()/i._autoHeightRatio);else if("calc"===c||"number"==e.type(c)&&c>=0){if(s="calc"===c?function(t,i){var n=0,o=-1;return i.slides.each((function(t){var i=e(this).height();i>o&&(o=i,n=t)})),n}(0,i):c>=i.slides.length?0:c,s==i._sentinelIndex)return;i._sentinelIndex=s,i._sentinel&&i._sentinel.remove(),(n=e(i.slides[s].cloneNode(!0))).removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),n.css({position:"static",visibility:"hidden",display:"block"}).prependTo(i.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),n.find("*").css("visibility","hidden"),i._sentinel=n}}function i(t,i,n,o){var s=e(o).outerHeight();i.container.animate({height:s},i.autoHeightSpeed,i.autoHeightEasing)}function n(o,s){s._autoHeightOnResize&&(e(window).off("resize orientationchange",s._autoHeightOnResize),s._autoHeightOnResize=null),s.container.off("cycle-slide-added cycle-slide-removed",t),s.container.off("cycle-destroyed",n),s.container.off("cycle-before",i),s._sentinel&&(s._sentinel.remove(),s._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),e(document).on("cycle-initialized",(function(o,s){function c(){t(0,s)}var l,r=s.autoHeight,a=e.type(r),d=null;("string"===a||"number"===a)&&(s.container.on("cycle-slide-added cycle-slide-removed",t),s.container.on("cycle-destroyed",n),"container"==r?s.container.on("cycle-before",i):"string"===a&&/\d+\:\d+/.test(r)&&(l=(l=r.match(/(\d+)\:(\d+)/))[1]/l[2],s._autoHeightRatio=l),"number"!==a&&(s._autoHeightOnResize=function(){clearTimeout(d),d=setTimeout(c,50)},e(window).on("resize orientationchange",s._autoHeightOnResize)),setTimeout(c,30))}))}(e),function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",(function(t,i,n,o){"caption"===i.captionModule&&e.each(["caption","overlay"],(function(){var e=n[this+"Template"],t=i.API.getComponent(this);t.length&&e?(t.html(i.API.tmpl(e,n,i,o)),t.show()):t.hide()}))})),e(document).on("cycle-destroyed",(function(t,i){e.each(["caption","overlay"],(function(){var e=i[this+"Template"];i[this]&&e&&i.API.getComponent("caption").empty()}))}))}(e),function(e){"use strict";var t=e.fn.cycle;e.fn.cycle=function(i){var n,o,s,c=e.makeArray(arguments);return"number"==e.type(i)?this.cycle("goto",i):"string"==e.type(i)?this.each((function(){var l;return n=i,void 0===(s=e(this).data("cycle.opts"))?void t.log('slideshow must be initialized before sending commands; "'+n+'" ignored'):(n="goto"==n?"jump":n,o=s.API[n],e.isFunction(o)?((l=e.makeArray(c)).shift(),o.apply(s.API,l)):void t.log("unknown command: ",n))})):t.apply(this,arguments)},e.extend(e.fn.cycle,t),e.extend(t.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?-1:1;!1===e.allowWrap&&e.currSlide+t>=e.slideCount||(e.API.advanceSlide(t),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?1:-1;!1===e.allowWrap&&e.currSlide+t<0||(e.API.advanceSlide(t),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){this.stop();var t=this.opts(),i=e.isFunction(e._data)?e._data:e.noop;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stop(),t.API.trigger("cycle-destroyed",[t]).log("cycle-destroyed"),t.container.removeData(),i(t.container[0],"parsedAttrs",!1),t.retainStylesOnDestroy||(t.container.removeAttr("style"),t.slides.removeAttr("style"),t.slides.removeClass(t.slideActiveClass)),t.slides.each((function(){var n=e(this);n.removeData(),n.removeClass(t.slideClass),i(this,"parsedAttrs",!1)}))},jump:function(e,t){var i,n=this.opts();if(!n.busy||n.manualTrump){var o=parseInt(e,10);if(isNaN(o)||0>o||o>=n.slides.length)return void n.API.log("goto: invalid slide index: "+o);if(o==n.currSlide)return void n.API.log("goto: skipping, already on slide",o);n.nextSlide=o,clearTimeout(n.timeoutId),n.timeoutId=0,n.API.log("goto: ",o," (zero-index)"),i=n.currSlide<n.nextSlide,n._tempFx=t,n.API.prepareTx(!0,i)}},stop:function(){var t=this.opts(),i=t.container;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stopTransition(),t.pauseOnHover&&(!0!==t.pauseOnHover&&(i=e(t.pauseOnHover)),i.off("mouseenter mouseleave")),t.API.trigger("cycle-stopped",[t]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(t){for(var i,n,o=this.opts(),s=[],c=1,l=0;l<o.slides.length;l++)i=o.slides[l],l==t?n=i:(s.push(i),e(i).data("cycle.opts").slideNum=c,c++);n&&(o.slides=e(s),o.slideCount--,e(n).remove(),t==o.currSlide?o.API.advanceSlide(1):t<o.currSlide?o.currSlide--:o.currSlide++,o.API.trigger("cycle-slide-removed",[o,t,n]).log("cycle-slide-removed"),o.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",(function(t){t.preventDefault();var i=e(this),n=i.data("cycle-cmd"),o=i.data("cycle-context")||".cycle-slideshow";e(o).cycle(n,i.data("cycle-arg"))}))}(e),function(e){"use strict";function t(t,i){var n;return t._hashFence?void(t._hashFence=!1):(n=window.location.hash.substring(1),void t.slides.each((function(o){if(e(this).data("cycle-hash")==n){if(!0===i)t.startingSlide=o;else{var s=t.currSlide<o;t.nextSlide=o,t.API.prepareTx(!0,s)}return!1}})))}e(document).on("cycle-pre-initialize",(function(i,n){t(n,!0),n._onHashChange=function(){t(n,!1)},e(window).on("hashchange",n._onHashChange)})),e(document).on("cycle-update-view",(function(e,t,i){i.hash&&"#"+i.hash!=window.location.hash&&(t._hashFence=!0,window.location.hash=i.hash)})),e(document).on("cycle-destroyed",(function(t,i){i._onHashChange&&e(window).off("hashchange",i._onHashChange)}))}(e),function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",(function(t,i){var n;i.loader&&(n=i.API.add,i.API.add=function(t,o){function s(t){var s;"wait"==i.loader?(l.push(t),0===a&&(l.sort(c),n.apply(i.API,[l,o]),i.container.removeClass("cycle-loading"))):(s=e(i.slides[i.currSlide]),n.apply(i.API,[t,o]),s.show(),i.container.removeClass("cycle-loading"))}function c(e,t){return e.data("index")-t.data("index")}var l=[];if("string"==e.type(t))t=e.trim(t);else if("array"===e.type(t))for(var r=0;r<t.length;r++)t[r]=e(t[r])[0];var a=(t=e(t)).length;a&&(t.css("visibility","hidden").appendTo("body").each((function(t){function c(){0==--r&&(--a,s(d))}var r=0,d=e(this),u=d.is("img")?d:d.find("img");return d.data("index",t),(u=u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])')).length?(r=u.length,void u.each((function(){this.complete?c():e(this).load((function(){c()})).on("error",(function(){0==--r&&(i.API.log("slide skipped; img not loaded:",this.src),0==--a&&"wait"==i.loader&&n.apply(i.API,[l,o]))}))}))):(--a,void l.push(d))})),a&&i.container.addClass("cycle-loading"))})}))}(e),function(e){"use strict";function t(t,i,n){var o;t.API.getComponent("pager").each((function(){var s=e(this);if(i.pagerTemplate){var c=t.API.tmpl(i.pagerTemplate,i,t,n[0]);o=e(c).appendTo(s)}else o=s.children().eq(t.slideCount-1);o.on(t.pagerEvent,(function(e){t.pagerEventBubble||e.preventDefault(),t.API.page(s,e.currentTarget)}))}))}function i(e,t){var i=this.opts();if(!i.busy||i.manualTrump){var n=e.children().index(t),o=i.currSlide<n;i.currSlide!=n&&(i.nextSlide=n,i._tempFx=i.pagerFx,i.API.prepareTx(!0,o),i.API.trigger("cycle-pager-activated",[i,e,t]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",(function(e,i,n){n.buildPagerLink=t})),e(document).on("cycle-slide-added",(function(e,t,n,o){t.pager&&(t.API.buildPagerLink(t,n,o),t.API.page=i)})),e(document).on("cycle-slide-removed",(function(t,i,n){i.pager&&i.API.getComponent("pager").each((function(){var t=e(this);e(t.children()[n]).remove()}))})),e(document).on("cycle-update-view",(function(t,i){i.pager&&i.API.getComponent("pager").each((function(){e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)}))})),e(document).on("cycle-destroyed",(function(e,t){var i=t.API.getComponent("pager");i&&(i.children().off(t.pagerEvent),t.pagerTemplate&&i.empty())}))}(e),function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",(function(e,t){if(t.API.getComponent("next").on(t.nextEvent,(function(e){e.preventDefault(),t.API.next()})),t.API.getComponent("prev").on(t.prevEvent,(function(e){e.preventDefault(),t.API.prev()})),t.swipe){var i=t.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",n=t.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";t.container.on(i,(function(){t._tempFx=t.swipeFx,t.API.next()})),t.container.on(n,(function(){t._tempFx=t.swipeFx,t.API.prev()}))}})),e(document).on("cycle-update-view",(function(e,t){if(!t.allowWrap){var i=t.disabledClass,n=t.API.getComponent("next"),o=t.API.getComponent("prev"),s=t._prevBoundry||0,c=void 0!==t._nextBoundry?t._nextBoundry:t.slideCount-1;t.currSlide==c?n.addClass(i).prop("disabled",!0):n.removeClass(i).prop("disabled",!1),t.currSlide===s?o.addClass(i).prop("disabled",!0):o.removeClass(i).prop("disabled",!1)}})),e(document).on("cycle-destroyed",(function(e,t){t.API.getComponent("prev").off(t.nextEvent),t.API.getComponent("next").off(t.prevEvent),t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")}))}(e),function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",(function(t,i){if(i.progressive){var n,o,s=i.API,c=s.next,l=s.prev,r=s.prepareTx,a=e.type(i.progressive);if("array"==a)n=i.progressive;else if(e.isFunction(i.progressive))n=i.progressive(i);else if("string"==a){if(o=e(i.progressive),!(n=e.trim(o.html())))return;if(/^(\[)/.test(n))try{n=e.parseJSON(n)}catch(e){return void s.log("error parsing progressive slides",e)}else(n=n.split(new RegExp(o.data("cycle-split")||"\n")))[n.length-1]||n.pop()}r&&(s.prepareTx=function(e,t){var o,s;return e||0===n.length?void r.apply(i.API,[e,t]):void(t&&i.currSlide==i.slideCount-1?(s=n[0],n=n.slice(1),i.container.one("cycle-slide-added",(function(e,t){setTimeout((function(){t.API.advanceSlide(1)}),50)})),i.API.add(s)):t||0!==i.currSlide?r.apply(i.API,[e,t]):(o=n.length-1,s=n[o],n=n.slice(0,o),i.container.one("cycle-slide-added",(function(e,t){setTimeout((function(){t.currSlide=1,t.API.advanceSlide(-1)}),50)})),i.API.add(s,!0)))}),c&&(s.next=function(){var e=this.opts();if(n.length&&e.currSlide==e.slideCount-1){var t=n[0];n=n.slice(1),e.container.one("cycle-slide-added",(function(e,t){c.apply(t.API),t.container.removeClass("cycle-loading")})),e.container.addClass("cycle-loading"),e.API.add(t)}else c.apply(e.API)}),l&&(s.prev=function(){var e=this.opts();if(n.length&&0===e.currSlide){var t=n.length-1,i=n[t];n=n.slice(0,t),e.container.one("cycle-slide-added",(function(e,t){t.currSlide=1,t.API.advanceSlide(-1),t.container.removeClass("cycle-loading")})),e.container.addClass("cycle-loading"),e.API.add(i,!0)}else l.apply(e.API)})}}))}(e),function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(t,i){var n=new RegExp(i.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),o=e.makeArray(arguments);return o.shift(),t.replace(n,(function(t,i){var n,s,c,l,r=i.split(".");for(n=0;n<o.length;n++)if(c=o[n]){if(r.length>1)for(l=c,s=0;s<r.length;s++)c=l,l=l[r[s]]||i;else l=c[i];if(e.isFunction(l))return l.apply(c,o);if(null!=l&&l!=i)return l}return i}))}})}(e)},e(jQuery)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)},98:function(e,t){e.exports=jQuery}});