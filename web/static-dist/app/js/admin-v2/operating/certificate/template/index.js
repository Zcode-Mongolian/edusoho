!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static-dist/",n(n.s=734)}({734:function(t,e){$("#search").on("click",(function(){$.get($("#list-search").attr("action"),$("#list-search").serialize(),(function(t){$(".table-list").html(t)}))})),$(".table-list").on("click",".pagination li",(function(){var t=$(this).data("url");void 0!==t&&$.get(t,$("#list-search").serialize(),(function(t){$(".table-list").html(t)}))})),$("body").keydown((function(t){if(13===t.keyCode)return!1})),$(".table-list").on("click",".js-item-select",(function(){$(".js-template-name").html($(this).data("title"));var t=$(this).parents("tr").find(".js-select").val();$("#templateId").val(t),$("#modal").modal("hide")}))}});