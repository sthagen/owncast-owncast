(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8399,1496],{62705:function(t,n,e){var r=e(55639).Symbol;t.exports=r},44239:function(t,n,e){var r=e(62705),o=e(89607),i=e(2333),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},27561:function(t,n,e){var r=e(67990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},31957:function(t,n,e){var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=r},89607:function(t,n,e){var r=e(62705),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,c),e=t[c];try{t[c]=void 0;var r=!0}catch(o){}var f=u.call(t);return r&&(n?t[c]=e:delete t[c]),f}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},55639:function(t,n,e){var r=e(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},67990:function(t){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},23279:function(t,n,e){var r=e(13218),o=e(7771),i=e(14841),u=Math.max,c=Math.min;t.exports=function(t,n,e){var f,a,s,l,v,p,d=0,h=!1,b=!1,x=!0;if("function"!=typeof t)throw TypeError("Expected a function");function g(n){var e=f,r=a;return f=a=void 0,d=n,l=t.apply(r,e)}function y(t){var e=t-p,r=t-d;return void 0===p||e>=n||e<0||b&&r>=s}function m(){var t,e,r,i=o();if(y(i))return j(i);v=setTimeout(m,(t=i-p,e=i-d,r=n-t,b?c(r,s-e):r))}function j(t){return(v=void 0,x&&f)?g(t):(f=a=void 0,l)}function O(){var t,e=o(),r=y(e);if(f=arguments,a=this,p=e,r){if(void 0===v)return d=t=p,v=setTimeout(m,n),h?g(t):l;if(b)return clearTimeout(v),v=setTimeout(m,n),g(p)}return void 0===v&&(v=setTimeout(m,n)),l}return n=i(n)||0,r(e)&&(h=!!e.leading,s=(b="maxWait"in e)?u(i(e.maxWait)||0,n):s,x="trailing"in e?!!e.trailing:x),O.cancel=function(){void 0!==v&&clearTimeout(v),d=0,f=p=a=v=void 0},O.flush=function(){return void 0===v?l:j(o())},O}},13218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,n,e){var r=e(44239),o=e(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},7771:function(t,n,e){var r=e(55639);t.exports=function(){return r.Date.now()}},14841:function(t,n,e){var r=e(27561),o=e(13218),i=e(33448),u=0/0,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return u;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=f.test(t);return e||a.test(t)?s(t.slice(2),e?2:8):c.test(t)?u:+t}},88054:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readonly",function(){return e(81484)}])},81484:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var r=e(85893),o=e(4480),i=e(94977),u=e(77466);function c(){let t=(0,o.sJ)(u.db),n=(0,o.sJ)(u.pH);if(!t)return null;let{id:e,displayName:c}=t;return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.me,{}),(0,r.jsx)(i.ChatContainer,{messages:n,usernameToHighlight:c,chatUserId:e,isModerator:!1,showInput:!1,height:"100vh"})]})}}},function(t){t.O(0,[1272,8700,6395,4986,7466,4977,9774,2888,179],function(){return t(t.s=88054)}),_N_E=t.O()}]);
//# sourceMappingURL=readonly-a2731d2ac23f3132.js.map