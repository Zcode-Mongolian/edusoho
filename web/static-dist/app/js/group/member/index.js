!function(e){function r(r){for(var n,a,s=r[0],u=r[1],c=r[2],m=0,f=[];m<s.length;m++)a=s[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(r);f.length;)f.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,r=0;r<i.length;r++){for(var t=i[r],n=!0,s=1;s<t.length;s++){var u=t[s];0!==o[u]&&(n=!1)}n&&(i.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},o={233:0},i=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=r,s=s.slice();for(var c=0;c<s.length;c++)r(s[c]);var l=u;i.push([1388,0]),t()}({1388:function(e,r,t){"use strict";t.r(r);var n=t(2),o=t.n(n),i=t(3),a=t.n(i);new(function(){function e(){o()(this,e),this.$group=$(".js-group-section"),this.init()}return a()(e,[{key:"init",value:function(){this.bindEvent()}},{key:"bindEvent",value:function(){var e=this;this.$group.on("click","#delete-btn",(function(){return e.deleteMember()})),this.$group.on("click","#remove-admin-btn",(function(){return e.removeAdminer()})),this.$group.on("click","#set-admin-btn",(function(){return e.setAdminer()}))}},{key:"setAdminer",value:function(){var e=$("#set-admin-url").attr("value"),r=$("#member-form");this.adminerOperated({choose:"group.manage.choose_setting_member_hint",confirm:"group.manage.setting_member_permission_hint",error:"site.save_error_hint"},e,r)}},{key:"removeAdminer",value:function(){var e=$("#admin-form").attr("action"),r=$("#admin-form");this.adminerOperated({choose:"group.manage.choose_setting_member_hint",confirm:"group.manage.cancel_member_permission",error:"site.save_error_hint"},e,r)}},{key:"deleteMember",value:function(){var e=$("#member-form").attr("action"),r=$("#member-form");this.adminerOperated({choose:"group.manage.delete_required_error_hint",confirm:"group.manage.delete_member_hint",error:"site.delete_fail_hint"},e,r,!0)}},{key:"adminerOperated",value:function(e,r,t,n){return $(":checkbox:checked").length<1?(alert(Translator.trans(e.choose)),!1):!!confirm(Translator.trans(e.confirm))&&void $.post(r,t.serialize(),(function(){var e=n?"site.delete_success_hint":"site.save_success_hint";cd.message({type:"success",message:Translator.trans(e)}),setTimeout((function(){window.location.reload()}),1500)})).error((function(){cd.message({type:"danger",message:Translator.trans(e.error)})}))}}]),e}())}});