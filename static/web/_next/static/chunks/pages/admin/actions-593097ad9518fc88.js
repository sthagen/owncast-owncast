(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5685],{26803:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}},56338:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(5661))&&n.__esModule?n:{default:n};t.default=r,e.exports=r},5661:function(e,t,a){"use strict";var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(67294)),u=n(a(26803)),c=n(a(92074));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var i=function(e,t){return o.createElement(c.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:u.default}))};i.displayName="UpOutlined";var s=o.forwardRef(i);t.default=s},8799:function(e,t,a){"use strict";var n=a(75263).default,r=a(64836).default;t.Z=void 0;var l=r(a(10434)),o=r(a(38416)),u=r(a(18698)),c=r(a(27424)),d=r(a(5085)),i=r(a(56338)),s=r(a(94184)),f=r(a(82122)),p=n(a(67294)),m=a(31929),v=r(a(93319)),h=r(a(3236)),x=a(51130),y=a(46549),b=a(47419),g=a(71434),j=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},w=p.forwardRef(function(e,t){var a=p.useContext(m.ConfigContext),n=a.getPrefixCls,r=a.direction,w=p.useContext(h.default),O=p.useState(!1),C=(0,c.default)(O,2),E=C[0],k=C[1],I=p.useRef(null);p.useImperativeHandle(t,function(){return I.current});var S=e.className,N=e.size,_=e.disabled,P=e.prefixCls,M=e.addonBefore,T=e.addonAfter,L=e.prefix,R=e.bordered,Z=void 0===R||R,F=e.readOnly,U=e.status,A=e.controls,H=j(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),B=n("input-number",P),z=(0,y.useCompactItemContext)(B,r),q=z.compactSize,D=z.compactItemClassnames,W=p.createElement(i.default,{className:"".concat(B,"-handler-up-inner")}),G=p.createElement(d.default,{className:"".concat(B,"-handler-down-inner")}),X="boolean"==typeof A?A:void 0;"object"===(0,u.default)(A)&&(W=void 0===A.upIcon?W:p.createElement("span",{className:"".concat(B,"-handler-up-inner")},A.upIcon),G=void 0===A.downIcon?G:p.createElement("span",{className:"".concat(B,"-handler-down-inner")},A.downIcon));var K=(0,p.useContext)(x.FormItemInputContext),V=K.hasFeedback,Y=K.status,J=K.isFormItemInput,Q=K.feedbackIcon,$=(0,g.getMergedStatus)(Y,U),ee=q||N||w,et=p.useContext(v.default),ea=null!=_?_:et,en=(0,s.default)((el={},(0,o.default)(el,"".concat(B,"-lg"),"large"===ee),(0,o.default)(el,"".concat(B,"-sm"),"small"===ee),(0,o.default)(el,"".concat(B,"-rtl"),"rtl"===r),(0,o.default)(el,"".concat(B,"-borderless"),!Z),(0,o.default)(el,"".concat(B,"-in-form-item"),J),el),(0,g.getStatusClassNames)(B,$),D,S),er=p.createElement(f.default,(0,l.default)({ref:I,disabled:ea,className:en,upHandler:W,downHandler:G,prefixCls:B,readOnly:F,controls:X},H));if(null!=L||V){var el,eo,eu=(0,s.default)("".concat(B,"-affix-wrapper"),(0,g.getStatusClassNames)("".concat(B,"-affix-wrapper"),$,V),(eo={},(0,o.default)(eo,"".concat(B,"-affix-wrapper-focused"),E),(0,o.default)(eo,"".concat(B,"-affix-wrapper-disabled"),e.disabled),(0,o.default)(eo,"".concat(B,"-affix-wrapper-sm"),"small"===w),(0,o.default)(eo,"".concat(B,"-affix-wrapper-lg"),"large"===w),(0,o.default)(eo,"".concat(B,"-affix-wrapper-rtl"),"rtl"===r),(0,o.default)(eo,"".concat(B,"-affix-wrapper-readonly"),F),(0,o.default)(eo,"".concat(B,"-affix-wrapper-borderless"),!Z),(0,o.default)(eo,"".concat(S),!(M||T)&&S),eo));er=p.createElement("div",{className:eu,style:e.style,onMouseUp:function(){return I.current.focus()}},L&&p.createElement("span",{className:"".concat(B,"-prefix")},L),(0,b.cloneElement)(er,{style:null,value:e.value,onFocus:function(t){var a;k(!0),null===(a=e.onFocus)||void 0===a||a.call(e,t)},onBlur:function(t){var a;k(!1),null===(a=e.onBlur)||void 0===a||a.call(e,t)}}),V&&p.createElement("span",{className:"".concat(B,"-suffix")},Q))}if(null!=M||null!=T){var ec,ed="".concat(B,"-group"),ei="".concat(ed,"-addon"),es=M?p.createElement("div",{className:ei},M):null,ef=T?p.createElement("div",{className:ei},T):null,ep=(0,s.default)("".concat(B,"-wrapper"),ed,(0,o.default)({},"".concat(ed,"-rtl"),"rtl"===r)),em=(0,s.default)("".concat(B,"-group-wrapper"),(ec={},(0,o.default)(ec,"".concat(B,"-group-wrapper-sm"),"small"===w),(0,o.default)(ec,"".concat(B,"-group-wrapper-lg"),"large"===w),(0,o.default)(ec,"".concat(B,"-group-wrapper-rtl"),"rtl"===r),ec),(0,g.getStatusClassNames)("".concat(B,"-group-wrapper"),$,V),S);er=p.createElement("div",{className:em,style:e.style},p.createElement("div",{className:ep},es&&p.createElement(y.NoCompactStyle,null,p.createElement(x.NoFormStyle,{status:!0,override:!0},es)),(0,b.cloneElement)(er,{style:null,disabled:ea}),ef&&p.createElement(y.NoCompactStyle,null,p.createElement(x.NoFormStyle,{status:!0,override:!0},ef))))}return er});t.Z=w},16373:function(e,t,a){"use strict";var n=a(64836).default,r=a(75263).default;t.default=void 0;var l=r(a(62704)),o=n(a(87412)),u=l.default;u.Header=l.Header,u.Footer=l.Footer,u.Content=l.Content,u.Sider=o.default,t.default=u},89277:function(e,t,a){"use strict";var n=a(75263).default,r=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(10434));r(a(18698));var o=n(a(67294));r(a(13594));var u=r(a(28460)),c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},d=o.forwardRef(function(e,t){var a=e.ellipsis,n=e.rel,r=c(e,["ellipsis","rel"]),d=(0,l.default)((0,l.default)({},r),{rel:void 0===n&&"_blank"===r.target?"noopener noreferrer":n});return delete d.navigate,o.createElement(u.default,(0,l.default)({},d,{ref:t,ellipsis:!!a,component:"a"}))});t.default=d},21987:function(e,t,a){"use strict";var n=a(75263).default,r=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(10434)),o=n(a(67294)),u=r(a(28460)),c=o.forwardRef(function(e,t){return o.createElement(u.default,(0,l.default)({ref:t},e,{component:"div"}))});t.default=c},15394:function(e,t,a){"use strict";var n=a(75263).default,r=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(10434)),o=r(a(18698)),u=r(a(18475)),c=n(a(67294));r(a(13594));var d=r(a(28460)),i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},s=c.forwardRef(function(e,t){var a=e.ellipsis,n=i(e,["ellipsis"]),r=c.useMemo(function(){return a&&"object"===(0,o.default)(a)?(0,u.default)(a,["expandable","rows"]):a},[a]);return c.createElement(d.default,(0,l.default)({ref:t},n,{ellipsis:r,component:"span"}))});t.default=s},53740:function(e,t,a){"use strict";var n=a(64836).default;t.default=void 0;var r=n(a(89277)),l=n(a(21987)),o=n(a(15394)),u=n(a(11700)),c=n(a(89652)).default;c.Text=o.default,c.Link=r.default,c.Title=u.default,c.Paragraph=l.default,t.default=c},93645:function(e,t,a){"use strict";a.d(t,{u:function(){return r}});var n={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function r(e){return e?n[e]:n.trunc}},59910:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(19013),r=a(13882);function l(e,t){return(0,r.Z)(2,arguments),(0,n.Z)(e).getTime()-(0,n.Z)(t).getTime()}},11699:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(59910),r=a(13882),l=a(93645);function o(e,t,a){(0,r.Z)(2,arguments);var o=(0,n.Z)(e,t)/1e3;return(0,l.u)(null==a?void 0:a.roundingMethod)(o)}},54005:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/actions",function(){return a(93870)}])},93870:function(e,t,a){"use strict";a.r(t);var n=a(85893),r=a(65400),l=a(31059),o=a(97538),u=a(51024),c=a(56697),d=a(64749),i=a(74048),s=a(2307),f=a(53740),p=a(95089),m=a(58909),v=a(82261),h=a(5152),x=a.n(h),y=a(67294),b=a(57520),g=a(24044),j=a(91332),w=a(38631),O=a(53899),C=a(34261);let{Title:E,Paragraph:k}=f.default,I=x()(()=>a.e(7949).then(a.t.bind(a,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),S=x()(()=>Promise.resolve().then(a.t.bind(a,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),N=e=>{let{onOk:t,onCancel:a,open:r,action:i}=e,[s,f]=(0,y.useState)("url"),[h,x]=(0,y.useState)(""),[b,g]=(0,y.useState)(""),[j,w]=(0,y.useState)(""),[C,E]=(0,y.useState)(""),[k,I]=(0,y.useState)(""),[S,N]=(0,y.useState)(""),[_,P]=(0,y.useState)(!1);(0,y.useEffect)(()=>{var e;f(((null==i?void 0:null===(e=i.html)||void 0===e?void 0:e.length)||0)>0?"html":"url"),x((null==i?void 0:i.url)||""),g((null==i?void 0:i.html)||""),w((null==i?void 0:i.title)||""),E((null==i?void 0:i.description)||""),I((null==i?void 0:i.icon)||""),N((null==i?void 0:i.color)||""),P((null==i?void 0:i.openExternally)||!1)},[i]);let M={disabled:!("html"===s?""!==b&&""!==j:(0,O.jv)(h,["https:"])&&""!==j)};return(0,n.jsx)(c.default,{destroyOnClose:!0,title:null==i?"Create New Action":"Edit Action",open:r,onOk:function(){t(i,e.index,"html"===s?"":h,"html"===s?b:"",j,C,k,S,_),x(""),g(""),w(""),E(""),I(""),N(""),P(!1)},onCancel:a,okButtonProps:M,children:(0,n.jsxs)(o.default,{initialValues:i,children:["Add the URL for the external action you want to present."," ",(0,n.jsx)("strong",{children:"Only HTTPS URLs and embeds are supported."}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://owncast.online/thirdparty/actions/",target:"_blank",rel:"noopener noreferrer",children:"Read more about external actions."})}),(0,n.jsx)(o.default.Item,{children:(0,n.jsx)(d.default,{value:s,onChange:f,placeholder:"Select an action type",options:[{label:"Link or embed an URL",value:"url"},{label:"Custom HTML",value:"html"}]})}),"html"===s?(0,n.jsx)(o.default.Item,{name:"html",children:(0,n.jsx)(p.ZP,{value:b,placeholder:"HTML embed code (required)",theme:m.FZ,height:"200px",extensions:[(0,v.html)()],onChange:e=>{g(e)}})}):(0,n.jsx)(o.default.Item,{name:"url",children:(0,n.jsx)(u.default,{required:!0,placeholder:"https://myserver.com/action (required)",onChange:e=>x(e.currentTarget.value.trim()),type:"url",pattern:O.ax})}),(0,n.jsx)(o.default.Item,{name:"title",children:(0,n.jsx)(u.default,{value:j,required:!0,placeholder:"Your action title (required)",onChange:e=>w(e.currentTarget.value)})}),(0,n.jsx)(o.default.Item,{name:"description",children:(0,n.jsx)(u.default,{value:C,placeholder:"Optional description",onChange:e=>E(e.currentTarget.value)})}),(0,n.jsx)(o.default.Item,{name:"icon",children:(0,n.jsx)(u.default,{value:k,placeholder:"https://myserver.com/action/icon.png (optional)",onChange:e=>I(e.currentTarget.value)})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.default.Item,{name:"color",style:{marginBottom:"0px"},children:(0,n.jsx)(u.default,{type:"color",value:S,onChange:e=>N(e.currentTarget.value)})}),"Optional background color of the action button."]}),"html"===s?null:(0,n.jsx)(o.default.Item,{name:"openExternally",children:(0,n.jsx)(l.default,{checked:_,defaultChecked:_,onChange:e=>{P(e.target.checked)},children:"Open in a new tab instead of within your page."})})]})})},_=()=>{let e=(0,y.useContext)(w.a),{serverConfig:t,setFieldInConfigState:a}=e||{},{externalActions:l}=t,[o,u]=(0,y.useState)(null),[c,d]=(0,y.useState)(!1),[f,p]=(0,y.useState)(null),[m,v]=(0,y.useState)(null),[h,x]=(0,y.useState)(-1),O=()=>{p(null),clearTimeout(null)};async function C(e){await (0,g.Si)({apiPath:g.os,data:{value:e},onSuccess:()=>{a({fieldName:"externalActions",value:e,path:""}),p((0,j.kg)(j.zv,"Updated.")),setTimeout(O,g.sI)},onError:e=>{console.log(e),p((0,j.kg)(j.Un,e)),setTimeout(O,g.sI)}})}async function _(e){let t=[...o];t.splice(e,1);try{u(t),C(t)}catch(e){console.error(e)}}async function P(e,t,a,n,r,l,c,d,i){try{let e=[...o],s={url:a,html:n,title:r,description:l,icon:c,color:d,openExternally:i};t>=0?e[t]=s:e.push(s),u(e),await C(e)}catch(e){console.error(e)}}async function M(e,t){x(t),v(e),d(!0)}(0,y.useEffect)(()=>{u(l||[])},[l]);let T=[{title:"",key:"delete-edit",render:(e,t,a)=>(0,n.jsxs)(i.default,{size:"middle",children:[(0,n.jsx)(r.default,{onClick:()=>_(a),icon:(0,n.jsx)(I,{})}),(0,n.jsx)(r.default,{onClick:()=>M(t,a),icon:(0,n.jsx)(S,{})})]})},{title:"Name",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"URL / Embed",key:"url",dataIndex:"url",render:(e,t)=>t.html?"HTML embed":t.url},{title:"Icon",dataIndex:"icon",key:"icon",render:e=>e?(0,n.jsx)("img",{style:{width:"2vw"},src:e,alt:""}):null},{title:"Color",dataIndex:"color",key:"color",render:e=>e?(0,n.jsx)("div",{style:{backgroundColor:e,height:"30px"},children:e}):null},{title:"Opens",key:"openExternally",dataIndex:"openExternally",render:(e,t)=>!e||t.html?"In the same tab":"In a new tab"}];return(0,n.jsxs)("div",{children:[(0,n.jsx)(E,{children:"External Actions"}),(0,n.jsx)(k,{children:"External action URLs are 3rd party UI you can display, embedded, into your Owncast page when a user clicks on a button to launch your action."}),(0,n.jsxs)(k,{children:["Read more about how to use actions, with examples, at"," ",(0,n.jsx)("a",{href:"https://owncast.online/thirdparty/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,n.jsx)(s.Z,{rowKey:e=>"".concat(e.title,"-").concat(e.url),columns:T,dataSource:o,pagination:!1}),(0,n.jsx)("br",{}),(0,n.jsx)(r.default,{type:"primary",onClick:()=>{v(null),x(-1),d(!0)},children:"Create New Action"}),(0,n.jsx)(b.E,{status:f}),(0,n.jsx)(N,{action:m,index:h,open:c,onOk:(e,t,a,n,r,l,o,u,c)=>{d(!1),P(e,t,a,n,r,l,o,u,c),v(null),x(-1)},onCancel:()=>{d(!1)}})]})};_.getLayout=function(e){return(0,n.jsx)(C.l,{page:e})},t.default=_},11163:function(e,t,a){e.exports=a(96885)}},function(e){e.O(0,[5762,5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,9552,7752,5891,2891,4749,6627,8966,5056,4261,9774,2888,179],function(){return e(e.s=54005)}),_N_E=e.O()}]);