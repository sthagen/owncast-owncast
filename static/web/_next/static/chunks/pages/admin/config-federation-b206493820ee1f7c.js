(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2532],{15746:function(e,n,t){"use strict";var a=t(21584);n.Z=a.Z},97183:function(e,n,t){"use strict";var a=t(2897),l=t(7293),r=a.ZP;r.Header=a.h4,r.Footer=a.$_,r.Content=a.VY,r.Sider=l.Z,n.Z=r},71230:function(e,n,t){"use strict";var a=t(92820);n.Z=a.Z},94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var a=t(87462),l=t(4942),r=t(50888),s=t(94184),i=t.n(s),o=t(97685),c=t(45987),u=t(67294),d=t(21770),h=t(15105),f=u.forwardRef(function(e,n){var t,a=e.prefixCls,r=void 0===a?"rc-switch":a,s=e.className,f=e.checked,p=e.defaultChecked,m=e.disabled,g=e.loadingIcon,b=e.checkedChildren,v=e.unCheckedChildren,x=e.onClick,y=e.onChange,w=e.onKeyDown,j=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,d.Z)(!1,{value:f,defaultValue:p}),Z=(0,o.Z)(k,2),C=Z[0],N=Z[1];function E(e,n){var t=C;return m||(N(t=e),null==y||y(t,n)),t}var O=i()(r,s,(t={},(0,l.Z)(t,"".concat(r,"-checked"),C),(0,l.Z)(t,"".concat(r,"-disabled"),m),t));return u.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":C,disabled:m,className:O,ref:n,onKeyDown:function(e){e.which===h.Z.LEFT?E(!1,e):e.which===h.Z.RIGHT&&E(!0,e),null==w||w(e)},onClick:function(e){var n=E(!C,e);null==x||x(n,e)}}),g,u.createElement("span",{className:"".concat(r,"-inner")},C?b:v))});f.displayName="Switch";var p=t(53124),m=t(98866),g=t(97647),b=t(68349),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>n.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},x=u.forwardRef(function(e,n){var t,s=e.prefixCls,o=e.size,c=e.disabled,d=e.loading,h=e.className,x=v(e,["prefixCls","size","disabled","loading","className"]),y=u.useContext(p.E_),w=y.getPrefixCls,j=y.direction,k=u.useContext(g.Z),Z=u.useContext(m.Z),C=w("switch",s),N=u.createElement("div",{className:"".concat(C,"-handle")},d&&u.createElement(r.Z,{className:"".concat(C,"-loading-icon")})),E=i()((t={},(0,l.Z)(t,"".concat(C,"-small"),"small"===(o||k)),(0,l.Z)(t,"".concat(C,"-loading"),d),(0,l.Z)(t,"".concat(C,"-rtl"),"rtl"===j),t),void 0===h?"":h);return u.createElement(b.Z,{insertExtraNode:!0},u.createElement(f,(0,a.Z)({},x,{prefixCls:C,className:E,disabled:(null!=c?c:Z)||d,ref:n,loadingIcon:N})))});x.__ANT_SWITCH=!0;var y=x},20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(4942),l=t(87462),r=t(97685),s=t(97937),i=t(94184),o=t.n(i),c=t(98423),u=t(67294),d=t(53124),h=t(98787),f=t(68349),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>n.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>n.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},g=new RegExp("^(".concat(h.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(h.E.join("|"),")$")),v=u.forwardRef(function(e,n){var t,i=e.prefixCls,h=e.className,p=e.style,v=e.children,x=e.icon,y=e.color,w=e.onClose,j=e.closeIcon,k=e.closable,Z=m(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=u.useContext(d.E_),N=C.getPrefixCls,E=C.direction,O=u.useState(!0),P=(0,r.Z)(O,2),S=P[0],_=P[1];u.useEffect(function(){"visible"in Z&&_(Z.visible)},[Z.visible]);var T=function(){return!!y&&(g.test(y)||b.test(y))},I=(0,l.Z)({backgroundColor:y&&!T()?y:void 0},p),U=T(),F=N("tag",i),R=o()(F,(t={},(0,a.Z)(t,"".concat(F,"-").concat(y),U),(0,a.Z)(t,"".concat(F,"-has-color"),y&&!U),(0,a.Z)(t,"".concat(F,"-hidden"),!S),(0,a.Z)(t,"".concat(F,"-rtl"),"rtl"===E),t),h),L=function(e){e.stopPropagation(),null==w||w(e),!e.defaultPrevented&&("visible"in Z||_(!1))},D="onClick"in Z||v&&"a"===v.type,M=(0,c.Z)(Z,["visible"]),Y=x||null,K=Y?u.createElement(u.Fragment,null,Y,u.createElement("span",null,v)):v,V=u.createElement("span",(0,l.Z)({},M,{ref:n,className:R,style:I}),K,void 0!==k&&k?j?u.createElement("span",{className:"".concat(F,"-close-icon"),onClick:L},j):u.createElement(s.Z,{className:"".concat(F,"-close-icon"),onClick:L}):null);return D?u.createElement(f.Z,null,V):V});v.CheckableTag=function(e){var n,t=e.prefixCls,r=e.className,s=e.checked,i=e.onChange,c=e.onClick,h=p(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,u.useContext(d.E_).getPrefixCls)("tag",t),m=o()(f,(n={},(0,a.Z)(n,"".concat(f,"-checkable"),!0),(0,a.Z)(n,"".concat(f,"-checkable-checked"),s),n),r);return u.createElement("span",(0,l.Z)({},h,{className:m,onClick:function(e){null==i||i(!s),null==c||c(e)}}))};var x=v},93645:function(e,n,t){"use strict";t.d(n,{u:function(){return l}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function l(e){return e?a[e]:a.trunc}},59910:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var a=t(19013),l=t(13882);function r(e,n){return(0,l.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(n).getTime()}},11699:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(59910),l=t(13882),r=t(93645);function s(e,n,t){(0,l.Z)(2,arguments);var s=(0,a.Z)(e,n)/1e3;return(0,r.u)(null==t?void 0:t.roundingMethod)(s)}},18957:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-federation",function(){return t(78810)}])},4349:function(e,n,t){"use strict";t.d(n,{Q:function(){return u},Y:function(){return d}});var a=t(85893),l=t(67294),r=t(85818),s=t(20550),i=t(67032),o=t(57520);let{Title:c}=r.Z,u="#5a67d8",d=e=>{let{title:n,description:t,placeholder:r,maxLength:d,values:h,handleDeleteIndex:f,handleCreateString:p,submitStatus:m,continuousStatusMessage:g}=e,[b,v]=(0,l.useState)(""),x=e=>{let{value:n}=e;v(n)},y=()=>{let e=b.trim();p(e),v("")};return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(c,{level:3,className:"section-title",children:n}),(0,a.jsx)("p",{className:"description",children:t}),(0,a.jsx)("div",{className:"edit-current-strings",children:null==h?void 0:h.map((e,n)=>{let t=()=>{f(n)};return(0,a.jsx)(s.Z,{closable:!0,onClose:t,color:u,children:e},"tag-".concat(e,"-").concat(n))})}),g&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(o.E,{status:g})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(i.nv,{fieldName:"string-input",value:b,onChange:x,onPressEnter:y,maxLength:d,placeholder:r,status:m})})]})};d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},44716:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(85893),l=t(67294),r=t(94594),s=t(91332),i=t(57520),o=t(24044),c=t(38631);let u=e=>{let{apiPath:n,checked:t,reversed:u=!1,configPath:d="",disabled:h=!1,fieldName:f,label:p,tip:m,useSubmit:g,onChange:b}=e,[v,x]=(0,l.useState)(null),y=null,w=(0,l.useContext)(c.a),{setFieldInConfigState:j}=w||{},k=()=>{x(null),clearTimeout(y),y=null},Z=async e=>{if(g){x((0,s.kg)(s.Jk));let t=u?!e:e;await (0,o.Si)({apiPath:n,data:{value:t},onSuccess:()=>{j({fieldName:f,value:t,path:d}),x((0,s.kg)(s.zv))},onError:e=>{x((0,s.kg)(s.Un,"There was an error: ".concat(e)))}}),y=setTimeout(k,o.sI)}b&&b(e)},C=null!==v&&v.type===s.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:p})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(r.Z,{className:"switch field-".concat(f),loading:C,onChange:Z,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,a.jsx)(i.E,{status:v})]}),(0,a.jsx)("p",{className:"field-tip",children:m})]})]})};u.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},78810:function(e,n,t){"use strict";t.r(n);var a=t(85893),l=t(85402),r=t(71577),s=t(85818),i=t(14670),o=t(71230),c=t(15746),u=t(67294),d=t(67032),h=t(78353),f=t(44716),p=t(4349),m=t(24044),g=t(38631),b=t(91332),v=t(34261);let x=e=>{let{cancelPressed:n,okPressed:t}=e;return(0,a.jsxs)(l.Z,{width:"70%",title:"Enable Social Features",visible:!0,onCancel:n,footer:(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{onClick:n,children:"Do not enable"}),(0,a.jsx)(r.Z,{type:"primary",onClick:t,children:"Enable Social Features"})]}),children:[(0,a.jsx)(s.Z.Title,{level:3,children:"How do Owncast's social features work?"}),(0,a.jsxs)(s.Z.Paragraph,{children:["Owncast's social features are accomplished by having your server join The"," ",(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",rel:"noopener noreferrer",target:"_blank",children:"Fediverse"}),", a decentralized, open, collection of independent servers, like yours."]}),"Please"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"read more"})," ","about these features, the details behind them, and how they work.",(0,a.jsx)(s.Z.Paragraph,{}),(0,a.jsx)(s.Z.Title,{level:3,children:"What do you need to know?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"These features are brand new. Given the variability of interfacing with the rest of the world, bugs are possible. Please report anything that you think isn't working quite right."}),(0,a.jsx)("li",{children:"You must always host your Owncast server with SSL using a https url."}),(0,a.jsx)("li",{children:"You should not change your server name URL or social username once people begin following you, as your server will be seen as a completely different user on the Fediverse, and the old user will disappear."}),(0,a.jsxs)("li",{children:["Turning on ",(0,a.jsx)("i",{children:"Private mode"})," will allow you to manually approve each follower and limit the visibility of your posts to followers only."]})]}),(0,a.jsx)(s.Z.Title,{level:3,children:"Learn more about The Fediverse"}),(0,a.jsxs)(s.Z.Paragraph,{children:["If these concepts are new you should discover more about what this functionality has to offer. Visit"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"our documentation"})," ","to be pointed at some resources that will help get you started on The Fediverse."]})]})},y=()=>{let{Title:e}=s.Z,[n,t]=(0,u.useState)(null),[l,r]=(0,u.useState)(!1),v=(0,u.useContext)(g.a),{serverConfig:y,setFieldInConfigState:w}=v||{},[j,k]=(0,u.useState)(null),{federation:Z,yp:C,instanceDetails:N}=y,{enabled:E,isPrivate:O,username:P,goLiveMessage:S,showEngagement:_,blockedDomains:T}=Z,{instanceUrl:I}=C,{nsfw:U}=N,F=e=>{let{fieldName:a,value:l}=e;t({...n,[a]:l})},R=e=>{e?r(!0):t({...n,enabled:!1})},L=()=>{let e=""!==n.instanceUrl,a=n.instanceUrl.startsWith("https://");e&&a||((0,m.Si)({apiPath:m.Kl.apiPath,data:{value:!1}}),t({...n,enabled:!1}))};function D(){k(null)}function M(){try{(0,m.Si)({apiPath:m.pE,data:{value:n.blockedDomains},onSuccess:()=>{w({fieldName:"forbiddenUsernames",value:n.forbiddenUsernames}),k(b.zv),setTimeout(D,m.sI)},onError:e=>{k((0,b.kg)(b.Un,e)),setTimeout(D,m.sI)}})}catch(e){console.error(e),k(b.Un)}}if((0,u.useEffect)(()=>{t({enabled:E,isPrivate:O,username:P,goLiveMessage:S,showEngagement:_,blockedDomains:T,nsfw:U,instanceUrl:C.instanceUrl})},[y,C]),!n)return null;let Y=""!==I,K=I.startsWith("https://"),V=!K&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,a.jsx)("br",{}),(0,a.jsx)(h.$7,{fieldName:"instanceUrl",...m.yi,value:n.instanceUrl,initialValue:C.instanceUrl,type:d.xA,onChange:F,onSubmit:L,required:!0})]}),$=(0,a.jsx)(i.Z,{message:"Only Owncast instances available on the default SSL port 443 support this feature.",type:"warning",showIcon:!0}),z=I&&""!==new URL(I).port&&"443"!==new URL(I).port;return(0,a.jsxs)("div",{children:[(0,a.jsx)(e,{children:"Configure Social Features"}),(0,a.jsx)("p",{children:"Owncast provides the ability for people to follow and engage with your instance. It's a great way to promote alerting, sharing and engagement of your stream."}),(0,a.jsx)("p",{children:"Once enabled you'll alert your followers when you go live as well as gain the ability to compose custom posts to share any information you like."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"Read more about the specifics of these social features."})}),(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(c.Z,{span:15,className:"form-module",style:{marginRight:"15px"},children:[V,z&&$,(0,a.jsx)(f.Z,{fieldName:"enabled",onChange:R,...m.Kl,checked:n.enabled,disabled:z||!Y||!K}),(0,a.jsx)(f.Z,{fieldName:"isPrivate",...m.LC,checked:n.isPrivate,disabled:!E}),(0,a.jsx)(f.Z,{fieldName:"nsfw",useSubmit:!0,...m.B_,checked:n.nsfw,disabled:z||!Y}),(0,a.jsx)(h.$7,{required:!0,fieldName:"username",type:d.Kx,...m.Xc,value:n.username,initialValue:P,onChange:F,disabled:!E}),(0,a.jsx)(h.$7,{fieldName:"goLiveMessage",...m.BF,type:d.Sk,value:n.goLiveMessage,initialValue:S,onChange:F,disabled:!E}),(0,a.jsx)(f.Z,{fieldName:"showEngagement",...m.FE,checked:n.showEngagement,disabled:!E})]}),(0,a.jsx)(c.Z,{span:8,className:"form-module",children:(0,a.jsx)(p.Y,{title:m.dR.label,placeholder:m.dR.placeholder,description:m.dR.tip,values:n.blockedDomains,handleDeleteIndex:function(e){n.blockedDomains.splice(e,1),M()},handleCreateString:function(e){let t;try{let n=new URL(e);t=n.host}catch(n){t=e}n.blockedDomains.push(t),F({fieldName:"blockedDomains",value:n.blockedDomains}),M()},submitStatus:(0,b.kg)(j)})})]}),l&&(0,a.jsx)(x,{cancelPressed:function(){r(!1),t({...n,enabled:!1})},okPressed:function(){r(!1),t({...n,enabled:!0})}})]})};y.getLayout=function(e){return(0,a.jsx)(v.l,{page:e})},n.default=y},11163:function(e,n,t){e.exports=t(96885)}},function(e){e.O(0,[173,5874,9151,2414,4931,5402,5257,1664,8014,5818,9915,4261,9774,2888,179],function(){return e(e.s=18957)}),_N_E=e.O()}]);