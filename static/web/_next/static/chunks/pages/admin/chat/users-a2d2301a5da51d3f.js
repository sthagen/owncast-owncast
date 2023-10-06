(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9522],{57096:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},20054:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(32615))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},32615:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(42122)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var d=l?Object.getOwnPropertyDescriptor(e,s):null;d&&(d.get||d.set)?Object.defineProperty(a,s,d):a[s]=e[s]}return a.default=e,n&&n.set(e,a),a}(n(67294)),d=a(n(57096)),o=a(n(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}var PlusOutlined=function(e,t){return s.createElement(o.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:d.default}))};PlusOutlined.displayName="PlusOutlined";var i=s.forwardRef(PlusOutlined);t.default=i},42698:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return null}},1286:function(e,t,n){"use strict";var a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,l.default)({inkBar:!0},"object"===(0,r.default)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,l.default)((0,l.default)({},d),{motionName:(0,s.getTransitionName)(e,"switch")})),t};var r=a(n(18698)),l=a(n(10434)),s=n(53683),d={motionAppear:!1,motionEnter:!0,motionLeave:!0}},47397:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e||(0,d.default)(t).map(function(e){if(s.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,r=__rest(n,["tab"]);return(0,l.default)((0,l.default)({key:String(t)},r),{label:a})}return null}).filter(function(e){return e})};var l=r(n(10434)),s=a(n(67294)),d=r(n(45598));r(n(13594));var __rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n}},20838:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(38416)),s=r(n(10434)),d=r(n(40753)),o=r(n(26937)),i=r(n(20054)),c=r(n(94184)),u=r(n(93068)),f=a(n(67294)),p=n(31929),m=r(n(3236));r(n(13594));var b=r(n(1286)),y=r(n(47397)),h=r(n(42698)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function Tabs(e){var t,n=e.type,a=e.className,r=e.size,h=e.onEdit,v=e.hideAdd,g=e.centered,j=e.addIcon,x=e.children,w=e.items,P=e.animated,O=__rest(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),_=O.prefixCls,k=O.moreIcon,C=void 0===k?f.createElement(o.default,null):k,I=f.useContext(p.ConfigContext),A=I.getPrefixCls,N=I.direction,E=I.getPopupContainer,T=A("tabs",_);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null==h||h("add"===e?a:n,e)},removeIcon:f.createElement(d.default,null),addIcon:j||f.createElement(i.default,null),showAdd:!0!==v});var M=A(),S=(0,y.default)(w,x),B=(0,b.default)(T,P);return f.createElement(m.default.Consumer,null,function(e){var d,o=void 0!==r?r:e;return f.createElement(u.default,(0,s.default)({direction:N,getPopupContainer:E,moreTransitionName:"".concat(M,"-slide-up")},O,{items:S,className:(0,c.default)((d={},(0,l.default)(d,"".concat(T,"-").concat(o),o),(0,l.default)(d,"".concat(T,"-card"),["card","editable-card"].includes(n)),(0,l.default)(d,"".concat(T,"-editable-card"),"editable-card"===n),(0,l.default)(d,"".concat(T,"-centered"),g),d),a),editable:t,moreIcon:C,prefixCls:T,animated:B}))})}Tabs.TabPane=h.default,t.default=Tabs},55583:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/users",function(){return n(90472)}])},90472:function(e,t,n){"use strict";n.r(t),n.d(t,{FETCH_INTERVAL:function(){return w},default:function(){return ChatUsers}});var a=n(85893),r=n(67294),l=n(20838),s=n(3273),d=n(3111),o=n(15851),i=n(51024),c=n(2307),u=n(45938),f=n(5152),p=n.n(f),m=n(60708),b=n(20250),y=n(21119);let h=p()(()=>Promise.resolve().then(n.t.bind(n,49153,23)),{loadableGenerated:{webpack:()=>[49153]},ssr:!1}),ClientTable=e=>{let{data:t}=e,n=[{title:"Display Name",key:"username",render:e=>{let{user:t,connectedAt:n,messageCount:r,userAgent:l}=e;return(0,a.jsx)(m.Z,{user:t,connectionInfo:{connectedAt:n,messageCount:r,userAgent:l},children:(0,a.jsx)("span",{className:"display-name",children:t.displayName})})},sorter:(e,t)=>t.user.displayName.localeCompare(e.user.displayName),filterIcon:(0,a.jsx)(h,{}),filterDropdown:e=>{let{setSelectedKeys:t,selectedKeys:n,confirm:r}=e;return(0,a.jsx)("div",{style:{padding:8},children:(0,a.jsx)(i.default,{placeholder:"Search display names...",value:n[0],onChange:e=>{t(e.target.value?[e.target.value]:[]),r({closeDropdown:!1})}})})},onFilter:(e,t)=>t.user.displayName.includes(e),sortDirections:["descend","ascend"]},{title:"Messages sent",dataIndex:"messageCount",key:"messageCount",className:"number-col",width:"12%",sorter:(e,t)=>e.messageCount-t.messageCount,sortDirections:["descend","ascend"],render:e=>(0,a.jsx)("div",{style:{textAlign:"center"},children:e})},{title:"Connected Time",dataIndex:"connectedAt",key:"connectedAt",defaultSortOrder:"ascend",render:e=>(0,u.Z)(new Date(e)),sorter:(e,t)=>new Date(t.connectedAt).getTime()-new Date(e.connectedAt).getTime(),sortDirections:["descend","ascend"]},{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:e=>(0,y.AB)(e)},{title:"Location",dataIndex:"geo",key:"geo",render:e=>e?"".concat(e.regionName,", ").concat(e.countryCode):"-"},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,a.jsx)(b.e,{user:t.user,isEnabled:!t.user.disabledAt})}];return(0,a.jsx)(c.Z,{className:"table-container",pagination:{hideOnSinglePage:!0},columns:n,dataSource:t,size:"small",rowKey:"id"})};var v=n(65400),g=n(58091);let j=p()(()=>n.e(6773).then(n.t.bind(n,6773,23)),{loadableGenerated:{webpack:()=>[6773]},ssr:!1});async function removeIPAddressBan(e){try{await (0,d.rQ)(d.RB,{data:{value:e},method:"POST",auth:!0})}catch(e){console.error(e)}}let BannedIPsTable=e=>{let{data:t}=e,n=[{title:"IP Address",dataIndex:"ipAddress",key:"ipAddress"},{title:"Reason",dataIndex:"notes",key:"notes"},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>(0,g.Z)(new Date(e),"MMM d H:mma"),sorter:(e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,a.jsx)(v.default,{title:"Remove IP Address Ban",onClick:()=>removeIPAddressBan(t.ipAddress),icon:(0,a.jsx)(j,{twoToneColor:"#ff4d4f"}),className:"block-user-button"})}];return(0,a.jsx)(c.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"large",rowKey:"ipAddress"})};var x=n(90695);let w=1e4;function ChatUsers(){let e=(0,r.useContext)(s.a),{online:t}=e||{},[n,i]=(0,r.useState)([]),[c,u]=(0,r.useState)([]),[f,p]=(0,r.useState)([]),[m,b]=(0,r.useState)([]),getInfo=async()=>{try{let e=await (0,d.rQ)(d.qk);i(e)}catch(e){console.log("==== error",e)}try{let e=await (0,d.rQ)(d.Kp);p(e)}catch(e){console.log("==== error",e)}try{let e=await (0,d.rQ)(d.GC);b(e)}catch(e){console.error("error fetching moderators",e)}try{let e=await (0,d.rQ)(d.Bu);u(e)}catch(e){console.error("error fetching banned ips",e)}};(0,r.useEffect)(()=>{let e=null;return getInfo(),e=setInterval(getInfo,w),()=>{clearInterval(e)}},[t]);let y=t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ClientTable,{data:f}),(0,a.jsxs)("p",{className:"description",children:["Visit the"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/viewers/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"documentation"})," ","to configure additional details about your viewers."]})]}):(0,a.jsx)("p",{className:"description",children:"When a stream is active and chat is enabled, connected chat clients will be displayed here."}),h=(0,a.jsxs)("span",{children:["Connected ",t?"(".concat(f.length,")"):"(offline)"]}),v=(0,a.jsxs)("span",{children:["Banned Users (",n.length,")"]}),g=(0,a.jsx)(o.K,{data:n}),j=(0,a.jsxs)("span",{children:["IP Bans (",c.length,")"]}),x=(0,a.jsx)(BannedIPsTable,{data:c}),P=(0,a.jsxs)("span",{children:["Moderators (",m.length,")"]}),O=(0,a.jsx)(o.K,{data:m});return(0,a.jsx)(l.default,{defaultActiveKey:"1",items:[{label:h,key:"1",children:y},{label:v,key:"2",children:g},{label:j,key:"3",children:x},{label:P,key:"4",children:O}]})}ChatUsers.getLayout=function(e){return(0,a.jsx)(x.l,{page:e})}}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,7752,5891,2891,4749,6627,8966,3068,8091,5938,686,695,5861,9774,2888,179],function(){return e(e.s=55583)}),_N_E=e.O()}]);