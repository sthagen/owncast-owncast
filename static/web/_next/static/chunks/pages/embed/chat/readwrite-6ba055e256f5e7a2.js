(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955,1496],{20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(4942),o=n(87462),i=n(97685),c=n(97937),a=n(94184),l=n.n(a),s=n(98423),u=n(67294),f=n(53124),p=n(98787),d=n(68349),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},b=RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),m=RegExp("^(".concat(p.E.join("|"),")$")),g=u.forwardRef(function(e,t){var n,a=e.prefixCls,p=e.className,v=e.style,g=e.children,x=e.icon,y=e.color,j=e.onClose,O=e.closeIcon,C=e.closable,_=h(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=u.useContext(f.E_),w=E.getPrefixCls,Z=E.direction,k=u.useState(!0),N=(0,i.Z)(k,2),P=N[0],T=N[1];u.useEffect(function(){"visible"in _&&T(_.visible)},[_.visible]);var I=function(){return!!y&&(b.test(y)||m.test(y))},S=(0,o.Z)({backgroundColor:y&&!I()?y:void 0},v),H=I(),$=w("tag",a),R=l()($,(n={},(0,r.Z)(n,"".concat($,"-").concat(y),H),(0,r.Z)(n,"".concat($,"-has-color"),y&&!H),(0,r.Z)(n,"".concat($,"-hidden"),!P),(0,r.Z)(n,"".concat($,"-rtl"),"rtl"===Z),n),p),U=function(e){e.stopPropagation(),null==j||j(e),!e.defaultPrevented&&("visible"in _||T(!1))},D="onClick"in _||g&&"a"===g.type,F=(0,s.Z)(_,["visible"]),J=x||null,M=J?u.createElement(u.Fragment,null,J,u.createElement("span",null,g)):g,A=u.createElement("span",(0,o.Z)({},F,{ref:t,className:R,style:S}),M,void 0!==C&&C?O?u.createElement("span",{className:"".concat($,"-close-icon"),onClick:U},O):u.createElement(c.Z,{className:"".concat($,"-close-icon"),onClick:U}):null);return D?u.createElement(d.Z,null,A):A});g.CheckableTag=function(e){var t,n=e.prefixCls,i=e.className,c=e.checked,a=e.onChange,s=e.onClick,p=v(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,u.useContext(f.E_).getPrefixCls)("tag",n),h=l()(d,(t={},(0,r.Z)(t,"".concat(d,"-checkable"),!0),(0,r.Z)(t,"".concat(d,"-checkable-checked"),c),t),i);return u.createElement("span",(0,o.Z)({},p,{className:h,onClick:function(e){null==a||a(!c),null==s||s(e)}}))};var x=g},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),o=n(89607),i=n(2333),c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):i(e)}},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(o){}var l=c.call(e);return r&&(t?e[a]=n:delete e[a]),l}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),i=n(14841),c=Math.max,a=Math.min;e.exports=function(e,t,n){var l,s,u,f,p,d,v=0,h=!1,b=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=l,r=s;return l=s=void 0,v=t,f=e.apply(r,n)}function x(e){var n=e-d,r=e-v;return void 0===d||n>=t||n<0||b&&r>=u}function y(){var e,n,r,i=o();if(x(i))return j(i);p=setTimeout(y,(e=i-d,n=i-v,r=t-e,b?a(r,u-n):r))}function j(e){return(p=void 0,m&&l)?g(e):(l=s=void 0,f)}function O(){var e,n=o(),r=x(n);if(l=arguments,s=this,d=n,r){if(void 0===p)return v=e=d,p=setTimeout(y,t),h?g(e):f;if(b)return clearTimeout(p),p=setTimeout(y,t),g(d)}return void 0===p&&(p=setTimeout(y,t)),f}return t=i(t)||0,r(n)&&(h=!!n.leading,u=(b="maxWait"in n)?c(i(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==p&&clearTimeout(p),v=0,l=d=s=p=void 0},O.flush=function(){return void 0===p?f:j(o())},O}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),o=n(13218),i=n(33448),c=0/0,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):a.test(e)?c:+e}},30672:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readwrite",function(){return n(34986)}])},6097:function(e,t,n){"use strict";n.d(t,{h:function(){return v}});var r=n(85893),o=n(94199),i=n(20550),c=n(94184),a=n.n(c),l=n(5152),s=n.n(l),u=n(50738),f=n(31764),p=n.n(f);let d=s()(()=>Promise.all([n.e(3013),n.e(850)]).then(n.bind(n,80850)).then(e=>e.UserDropdown),{loadableGenerated:{webpack:()=>[80850]},ssr:!1}),v=e=>{let{name:t="Your stream title",chatAvailable:n,chatDisabled:c}=e;return(0,r.jsxs)("header",{className:a()(["".concat(p().header)],"global-header"),children:[(0,r.jsxs)("div",{className:p().logo,children:[(0,r.jsx)("div",{id:"header-logo",className:p().logoImage,children:(0,r.jsx)(u.C,{variant:"contrast"})}),(0,r.jsx)("h1",{className:p().title,id:"global-header-text",title:t,children:t})]}),n&&!c&&(0,r.jsx)(d,{}),!n&&!c&&(0,r.jsx)(o.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,r.jsx)(i.Z,{style:{cursor:"pointer"},children:"Chat offline"})})]})};t.Z=v},34986:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(85893),o=n(4480),i=n(94977),c=n(77466),a=n(6097);function l(){let e=(0,o.sJ)(c.db),t=(0,o.sJ)(c.pH),n=(0,o.sJ)(c.g1),{name:l,chatDisabled:s}=n;if(!e)return null;let{id:u,displayName:f,isModerator:p}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.me,{}),(0,r.jsx)(a.Z,{name:l,chatAvailable:!0,chatDisabled:s}),(0,r.jsx)(i.ChatContainer,{messages:t,usernameToHighlight:f,chatUserId:u,isModerator:p,showInput:!0,height:"80vh"})]})}},31764:function(e){e.exports={header:"Header_header__U4Ro1",logoImage:"Header_logoImage__beIL2",logo:"Header_logo__HLZ6Z",title:"Header_title__FIts2"}}},function(e){e.O(0,[1272,8700,6395,4986,7466,4977,9774,2888,179],function(){return e(e.s=30672)}),_N_E=e.O()}]);
//# sourceMappingURL=readwrite-6ba055e256f5e7a2.js.map