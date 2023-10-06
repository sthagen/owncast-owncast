"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3430],{42843:function(e,t,n){let a;n.d(t,{gG:function(){return i},me:function(){return ClientConfigStore},FI:function(){return I},Q:function(){return T},L4:function(){return _},j$:function(){return k},vZ:function(){return P},g1:function(){return N},g8:function(){return U},db:function(){return O},ap:function(){return G},di:function(){return H},hz:function(){return L},YW:function(){return x},We:function(){return M},RI:function(){return v},pH:function(){return j},Gt:function(){return D}});var r,o,s,i,c=n(67294),l=n(4480),u=n(99717);let d=(0,c.createContext)(class{static async getConfig(){let e=await fetch("/api/config"),t=await e.json();return t}});var h=n(3111);let f=(0,c.createContext)(class{static async getChatHistory(e){try{let t=await (0,h.$l)("".concat("/api/chat","?accessToken=").concat(e));return t}catch(e){return[]}}static async registerUser(e){let t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:e})},n=await (0,h.$l)("/api/chat/register",t);return n}});var E=n(53150);let WebsocketService=class WebsocketService{createAndConnect(){if(!this.host||this.isShutdown)return;let e=new URL(this.host);e.protocol="https:"===window.location.protocol?"wss:":"ws:",e.pathname="/ws",e.port="3000"===window.location.port?"8080":window.location.port,e.searchParams.append("accessToken",this.accessToken);let t=new WebSocket(e.toString());t.onopen=this.onOpen.bind(this),t.onerror=this.onError.bind(this),t.onmessage=this.onMessage.bind(this),this.websocket=t}onOpen(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer),this.socketConnected(),this.backOff=0}onError(){console.error("Chat has been disconnected and is likely not working for you. It's possible you were removed from chat. If this is a server configuration issue, visit troubleshooting steps to resolve. https://owncast.online/docs/troubleshooting/#chat-is-disabled"),this.socketDisconnected(),this.websocket.close(),this.isShutdown||this.scheduleReconnect()}scheduleReconnect(){this.isShutdown||(this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer),this.websocketReconnectTimer=setTimeout(this.createAndConnect,Math.min(this.backOff,1e4)),this.backOff+=1e3)}shutdown(){this.isShutdown=!0,this.websocket.close()}onMessage(e){let t;let n=e.data.split("\n");for(let e=0;e<n.length;e++){try{t=JSON.parse(n[e]),this.handleMessage&&this.handleMessage(t)}catch(e){console.error(e,e.data);return}if(!t.type){console.error("No type provided",t);return}if(t.type===E.C.PING){this.sendPong();return}}}isConnected(){var e,t;return(null===(e=this.websocket)||void 0===e?void 0:e.readyState)===(null===(t=this.websocket)||void 0===t?void 0:t.OPEN)}send(e){e.type&&E.C[e.type]||console.warn('Outbound message: Unknown socket message type: "'.concat(e.type,'" sent.'));let t=JSON.stringify(e);this.websocket.send(t)}sendPong(){let e={type:E.C.PONG};this.send(e)}constructor(e,t,n){this.isShutdown=!1,this.backOff=0,this.accessToken=e,this.path=t,this.websocketReconnectTimer=null,this.isShutdown=!1,this.host=n,this.createAndConnect=this.createAndConnect.bind(this),this.shutdown=this.shutdown.bind(this),this.createAndConnect()}};var g=n(4723);let p={chatAvailable:!0,chatLoading:!1,videoAvailable:!0,appLoading:!1};(r=s||(s={})).Loading="LOADING",r.Loaded="LOADED",r.Online="ONLINE",r.Offline="OFFLINE",r.NeedsRegister="NEEDS_REGISTER",r.Fail="FAIL",r.ChatUserDisabled="CHAT_USER_DISABLED";let y=(0,g.C)({id:"appState",initial:"loading",predictableActionArguments:!0,states:{loading:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!0},on:{NEEDS_REGISTER:{target:"loading"},LOADED:{target:"ready"},FAIL:{target:"serverFailure"}}},ready:{initial:"offline",states:{online:{meta:{...p},on:{OFFLINE:{target:"goodbye"},CHAT_USER_DISABLED:{target:"chatUserDisabled"}}},offline:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!1},on:{ONLINE:{target:"online"}}},goodbye:{on:{ONLINE:{target:"online"}},meta:{chatAvailable:!0,chatLoading:!1,videoAvailable:!1,appLoading:!1},after:{3e5:{target:"offline"}}},chatUserDisabled:{meta:{...p,chatAvailable:!1}}}},serverFailure:{type:"final"},userfailure:{type:"final"}}});var S=n(93633),b=n(76233);let w=(0,c.createContext)(class{static async getStatus(){let e=await fetch("/api/status"),t=await e.json();return t}});l.zl.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=!1;let C="accessToken",m=!1,R=!1,A="Cannot connect to the Owncast service. Please check your internet connection and verify this Owncast server is running.",v=(0,l.cn)({key:"serverStatusState",default:{online:!1,viewerCount:0,serverTime:new Date}}),N=(0,l.cn)({key:"clientConfigState",default:{name:"",summary:"",offlineMessage:"",logo:"",tags:[],nsfw:!1,extraPageContent:"",socialHandles:[],chatDisabled:!1,externalActions:[],customStyles:"",appearanceVariables:new Map,maxSocketPayloadSize:0,federation:{enabled:!1,account:"",followerCount:0},notifications:{browser:{enabled:!1,publicKey:""}},authentication:{indieAuthEnabled:!1}}}),I=(0,l.cn)({key:"accessTokenAtom",default:null}),O=(0,l.cn)({key:"currentUserAtom",default:null}),k=(0,l.cn)({key:"chatMessages",default:[]}),_=(0,l.cn)({key:"chatAuthenticatedAtom",default:!1}),D=(0,l.cn)({key:"websocketServiceAtom",default:null,dangerouslyAllowMutability:!0}),T=(0,l.cn)({key:"appState",default:{chatAvailable:!1,chatLoading:!0,videoAvailable:!1,appLoading:!0}}),L=(0,l.cn)({key:"isMobileAtom",default:void 0}),M=(0,l.cn)({key:"isVideoPlayingAtom",default:!1}),G=(0,l.cn)({key:"fatalErrorStateAtom",default:null}),U=(0,l.cn)({key:"clockSkewAtom",default:0}),F=(0,l.cn)({key:"removedMessageIds",default:[]}),H=(0,l.nZ)({key:"isChatAvailableSelector",get:e=>{let{get:t}=e,n=t(T),a=t(I);return a&&n.chatAvailable&&!R}});(o=i||(i={}))[o.VISIBLE=0]="VISIBLE",o[o.HIDDEN=1]="HIDDEN",o[o.POPPED_OUT=2]="POPPED_OUT",o[o.EMBEDDED=3]="EMBEDDED";let P=(0,l.cn)({key:"chatState",default:(()=>{var e;let t=globalThis;return(null==t?void 0:null===(e=t.location)||void 0===e?void 0:e.pathname)==="/embed/chat/readwrite/"?3:0})()}),x=(0,l.nZ)({key:"isOnlineSelector",get:e=>{let{get:t}=e,n=t(T),a=t(M);return n.videoAvailable||a}}),j=(0,l.nZ)({key:"visibleChatMessagesSelector",get:e=>{let{get:t}=e,n=t(k),a=t(F);return n.filter(e=>!a.includes(e.id))}}),ClientConfigStore=()=>{let e;let t=(0,c.useContext)(d),n=(0,c.useContext)(f),r=(0,c.useContext)(w),[o,i,h]=(0,u.e)(y),[g,p]=(0,l.FV)(O),L=(0,l.Zl)(_),[M,H]=(0,l.FV)(N),P=(0,l.Zl)(v),x=(0,l.Zl)(U),j=(0,l.Zl)(k),[V,B]=(0,l.FV)(I),Y=(0,l.Zl)(T),Z=(0,l.Zl)(G),W=(0,l.Zl)(D),J=(0,l.Zl)(F),[K,Q]=(0,c.useState)(!1),setGlobalFatalError=(e,t)=>{Z({title:e,message:t})},sendEvent=e=>{i(e)},handleStatusChange=e=>{if(o.matches("loading")){let t=[s.Loaded];e.online?t.push(s.Online):t.push(s.Offline),sendEvent(t);return}e.online&&o.matches("ready")?sendEvent([s.Online]):e.online||o.matches("ready.offline")||sendEvent([s.Offline])},updateClientConfig=async()=>{try{let e=await t.getConfig();H(e),Z(null),Q(!0)}catch(e){setGlobalFatalError("Unable to reach Owncast server",A),console.error("ClientConfigService -> getConfig() ERROR: \n",e)}},updateServerStatus=async()=>{try{let e=await r.getStatus();handleStatusChange(e),P(e);let{serverTime:t}=e,n=new Date(t).getTime()-Date.now();x(n),Z(null)}catch(e){sendEvent([s.Fail]),setGlobalFatalError("Unable to reach Owncast server",A),console.error("serverStatusState -> getStatus() ERROR: \n",e)}},handleUserRegistration=async e=>{let t=(0,S.$o)(C);if(t){B(t);return}try{sendEvent([s.NeedsRegister]);let t=await n.registerUser(e),{accessToken:a,displayName:r,displayColor:o}=t;if(!a)return;p({...g,displayName:r,displayColor:o}),B(a),(0,S.qQ)(C,a)}catch(e){sendEvent([s.Fail]),console.error("ChatService -> registerUser() ERROR: \n".concat(e))}},resetAndReAuth=()=>{(0,S.qQ)(C,""),B(null),null==e||e.shutdown(),handleUserRegistration()},handleMessageVisibilityChange=e=>{let{ids:t,visible:n}=e;n?J(e=>e.filter(e=>!t.includes(e))):J(e=>[...e,...t])},handleSocketDisconnect=()=>{R=!0},handleSocketConnected=()=>{R=!1},handleMessage=e=>{var t;switch(e.type){case E.C.ERROR_NEEDS_REGISTRATION:resetAndReAuth();break;case E.C.CONNECTED_USER_INFO:if(!function(e,t,n){let{user:a}=e,{id:r,displayName:o,displayColor:s,scopes:i,authenticated:c}=a;t(c),n({id:r.toString(),displayName:o,displayColor:s,isModerator:null==i?void 0:i.includes("MODERATOR")})}(e,L,p),e){let n=new E.s(e);!m&&(null===(t=n.user)||void 0===t?void 0:t.isModerator)&&(j(t=>[...t,e]),m=!0)}break;case E.C.CHAT:j(t=>[...t,e]);break;case E.C.NAME_CHANGE:p(t=>t.id===e.user.id?{...t,displayName:e.user.displayName}:t),j(t=>[...t,e]);break;case E.C.USER_JOINED:j(t=>[...t,e]);break;case E.C.USER_PARTED:j(t=>[...t,e]);break;case E.C.SYSTEM:j(t=>[...t,e]);break;case E.C.CHAT_ACTION:j(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_FOLLOW:j(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_LIKE:j(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_REPOST:j(t=>[...t,e]);break;case E.C.VISIBILITY_UPDATE:handleMessageVisibilityChange(e);break;case E.C.ERROR_USER_DISABLED:console.log("User has been disabled"),sendEvent([s.ChatUserDisabled]);break;default:console.error("Unknown socket message type: ",e.type)}},getChatHistory=async()=>{try{let e=await n.getChatHistory(V);e&&j(t=>[...t,...e])}catch(e){console.error("ChatService -> getChatHistory() ERROR: \n".concat(e))}},startChat=async()=>{try{e&&(null==e||e.shutdown(),W(null),e=null);let{socketHostOverride:t}=M,n=window.location;n.hash="";let a=n.toString().replaceAll("#",""),r=t||a;(e=new WebsocketService(V,"/ws",r)).handleMessage=handleMessage,e.socketDisconnected=handleSocketDisconnect,e.socketConnected=handleSocketConnected,W(e)}catch(e){console.error("ChatService -> startChat() ERROR: \n".concat(e)),sendEvent([s.ChatUserDisabled])}};return(0,c.useEffect)(()=>{try{if(window.configHydration){let e=JSON.parse(window.configHydration);H(e),Q(!0)}}catch(e){console.error("Error parsing config hydration",e)}try{if(window.statusHydration){let e=JSON.parse(window.statusHydration);P(e),handleStatusChange(e)}}catch(e){console.error("error parsing status hydration",e)}try{window.configHydration&&window.statusHydration&&sendEvent([s.Loaded])}catch(e){console.error("error sending loaded event",e)}},[]),(0,c.useEffect)(()=>{!M.chatDisabled&&V&&K&&!e&&startChat()},[K,V]),(0,c.useEffect)(()=>(window.configHydration||updateClientConfig(),handleUserRegistration(),window.statusHydration||updateServerStatus(),clearInterval(a),a=setInterval(()=>{updateServerStatus()},5e3),()=>{clearInterval(a)}),[]),(0,c.useEffect)(()=>{V&&getChatHistory()},[V]),(0,c.useEffect)(()=>{h.onTransition(e=>{let t=(0,b.YR)(e.meta);Y(t)})},[]),null}},21426:function(e,t,n){n.d(t,{Q:function(){return Theme}});var a=n(85893),r=n(9008),o=n.n(r),s=n(67294),i=n(4480),c=n(42843);let Theme=()=>{let e=(0,i.sJ)(c.g1),{appearanceVariables:t,customStyles:n}=e,r=Object.keys(t||{}).filter(e=>!!t[e]).map(e=>"--".concat(e,": ").concat(t[e])),[l,u]=(0,s.useState)("#fff");return(0,s.useEffect)(()=>{let e=getComputedStyle(document.documentElement).getPropertyValue("--theme-color-background-header");u(e)},[r]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{children:(0,a.jsx)("meta",{name:"theme-color",content:l})}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(r.join(";\n"),"\n				}\n			")}}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				".concat(n,"\n			")}})]})}},86658:function(e,t,n){n.d(t,{A:function(){return ComponentError}});var a=n(85893),r=n(4863),o=n(65400);let openBugReport=()=>{window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=e=>{let{message:t,componentName:n,details:r,canRetry:o}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."}),!!o&&(0,a.jsx)("p",{children:"You may optionally retry, however functionality might not work as expected."}),(0,a.jsxs)("code",{children:[(0,a.jsx)("div",{children:t&&"Error: ".concat(t)}),(0,a.jsxs)("div",{children:["Component: ",n]}),(0,a.jsx)("div",{children:r&&r})]})]})},ComponentError=e=>{let{message:t,componentName:n,details:s,retryFunction:i}=e;return(0,a.jsx)(r.default,{message:"Error",showIcon:!0,description:(0,a.jsx)(ErrorContent,{message:t,details:s,componentName:n,canRetry:!!i}),type:"error",action:(0,a.jsxs)(a.Fragment,{children:[i&&(0,a.jsx)(o.default,{ghost:!0,size:"small",onClick:i,children:"Retry"}),(0,a.jsx)(o.default,{ghost:!0,size:"small",danger:!0,onClick:openBugReport,children:"Report Error"})]})})}},53150:function(e,t,n){n.d(t,{C:function(){return r},s:function(){return ChatEvent}});var a,r,o=n(2780);(a=r||(r={})).CHAT="CHAT",a.PING="PING",a.NAME_CHANGE="NAME_CHANGE",a.COLOR_CHANGE="COLOR_CHANGE",a.PONG="PONG",a.SYSTEM="SYSTEM",a.USER_JOINED="USER_JOINED",a.USER_PARTED="USER_PARTED",a.CHAT_ACTION="CHAT_ACTION",a.FEDIVERSE_ENGAGEMENT_FOLLOW="FEDIVERSE_ENGAGEMENT_FOLLOW",a.FEDIVERSE_ENGAGEMENT_LIKE="FEDIVERSE_ENGAGEMENT_LIKE",a.FEDIVERSE_ENGAGEMENT_REPOST="FEDIVERSE_ENGAGEMENT_REPOST",a.CONNECTED_USER_INFO="CONNECTED_USER_INFO",a.ERROR_USER_DISABLED="ERROR_USER_DISABLED",a.ERROR_NEEDS_REGISTRATION="ERROR_NEEDS_REGISTRATION",a.ERROR_MAX_CONNECTIONS_EXCEEDED="ERROR_MAX_CONNECTIONS_EXCEEDED",a.VISIBILITY_UPDATE="VISIBILITY-UPDATE";let ChatEvent=class ChatEvent{constructor(e){this.id=e.id,this.timestamp=e.timestamp,this.type=e.type,this.body=e.body,e.user&&(this.user=new o.n(e.user))}}},2780:function(e,t,n){n.d(t,{n:function(){return User}});let User=class User{constructor(e){this.id=e.id,this.displayName=e.displayName,this.displayColor=e.displayColor,this.createdAt=e.createdAt,this.previousNames=e.previousNames,this.nameChangedAt=e.nameChangedAt,this.scopes=e.scopes,this.authenticated=e.authenticated,this.isBot=e.isBot,this.scopes&&this.scopes.length>0&&(this.isModerator=this.scopes.includes("MODERATOR"))}}},3111:function(e,t,n){n.d(t,{$i:function(){return M},$l:function(){return getUnauthedData},Bu:function(){return y},E8:function(){return F},Ff:function(){return I},GC:function(){return w},GR:function(){return upgradeVersionAvailable},HP:function(){return U},IO:function(){return _},Kp:function(){return E},Kt:function(){return getGithubRelease},M_:function(){return T},N$:function(){return j},NE:function(){return c},NM:function(){return p},Q_:function(){return l},Qc:function(){return N},RB:function(){return S},UJ:function(){return B},WB:function(){return s},WE:function(){return A},WQ:function(){return R},Wr:function(){return k},XA:function(){return D},Y9:function(){return H},a_:function(){return f},ao:function(){return d},bl:function(){return u},e_:function(){return G},hn:function(){return v},iG:function(){return L},iV:function(){return h},jr:function(){return b},kb:function(){return P},kg:function(){return fetchExternalData},ms:function(){return O},nx:function(){return C},op:function(){return x},qk:function(){return g},rQ:function(){return fetchData},sG:function(){return m},um:function(){return V}});var a=n(34155);let r=a.env.NEXT_PUBLIC_ADMIN_USERNAME,o=a.env.NEXT_PUBLIC_ADMIN_STREAMKEY,s="/",i="".concat(s,"api/admin/"),c=15e3,l="".concat(i,"status"),u="".concat(i,"serverconfig"),d="".concat(i,"config"),h="".concat(i,"viewersOverTime"),f="".concat(i,"viewers"),E="".concat(i,"chat/clients"),g="".concat(i,"chat/users/disabled"),p="".concat(i,"chat/users/setenabled"),y="".concat(i,"chat/users/ipbans"),S="".concat(i,"chat/users/ipbans/remove"),b="".concat(i,"chat/users/setmoderator"),w="".concat(i,"chat/users/moderators"),C="".concat(i,"hardwarestats"),m="".concat(i,"logs"),R="".concat(i,"logs/warnings"),A="".concat(i,"chat/messages"),v="/api/admin/chat/messagevisibility",N="".concat(i,"emoji/upload"),I="".concat(i,"emoji/delete"),O="".concat(i,"accesstokens"),k="".concat(i,"accesstokens/delete"),_="".concat(i,"accesstokens/create"),D="".concat(i,"webhooks"),T="".concat(i,"webhooks/delete"),L="".concat(i,"webhooks/create"),M="".concat(s,"api/socialplatforms"),G="".concat(i,"federation/send"),U="".concat(i,"followers"),F="".concat(i,"followers/pending"),H="".concat(i,"followers/blocked"),P="".concat(i,"followers/approve"),x="".concat(i,"federation/actions"),j="".concat(i,"metrics/video"),V="".concat(i,"config/streamkeys"),B="".concat(i,"yp/reset");async function fetchData(e,t){let{data:n,method:a="GET",auth:s=!0}=t||{},i={method:a};if(n&&(i.body=JSON.stringify(n)),s&&r&&o){let e=btoa("".concat(r,":").concat(o));i.headers={Authorization:"Basic ".concat(e)},i.mode="cors",i.credentials="include"}let c=await fetch(e,i),l=await c.json();if(!c.ok){let e=l.message||"An error has occurred: ".concat(c.status);throw Error(e)}return l}async function getUnauthedData(e,t){let n={method:"GET",auth:!1,...t};return fetchData(e,n)}async function fetchExternalData(e){try{let t=await fetch(e,{referrerPolicy:"no-referrer",referrer:""});if(!t.ok){let e="An error has occured: ".concat(t.status);throw Error(e)}let n=await t.json();return n}catch(e){console.log(e)}return{}}async function getGithubRelease(){return fetchExternalData("https://api.github.com/repos/owncast/owncast/releases/latest")}let Y=/^\d+(\.\d+){0,2}$/;async function upgradeVersionAvailable(e){let t=await getGithubRelease(),n=t.tag_name;return("v"===n.substr(0,1)&&(n=n.substr(1)),!function(e,t){if(!e||!t||0===e.length||0===t.length)return!1;if(e===t)return!0;if(Y.test(e)&&Y.test(t)){let n=e.split(".");for(;n.length<3;)n.push("0");let a=t.split(".");for(;a.length<3;)a.push("0");for(let e=0;e<3;e++){let t=parseInt(n[e],10),r=parseInt(a[e],10);if(t!==r)return t>r}return!0}return e>=t}(e,n))?n:null}},76233:function(e,t,n){n.d(t,{C9:function(){return isMobileSafariIos},Xb:function(){return getDiffInDaysFromNow},YR:function(){return mergeMeta},_6:function(){return pluralize},rZ:function(){return isMobileSafariHomeScreenApp}});var a=n(42238),r=n.n(a);function pluralize(e,t){return 1===t?e:"".concat(e,"s")}function getDiffInDaysFromNow(e){let t="string"==typeof e?new Date(e):e;return(new Date-t)/864e5}function mergeMeta(e){return Object.keys(e).reduce((t,n)=>{let a=e[n];return Object.assign(t,a),t},{})}let isMobileSafariIos=()=>{try{let e=navigator.userAgent,t=new(r())(e),n=t.getBrowser(),a=t.getDevice();if("Apple"!==a.vendor||"mobile"!==a.type&&"tablet"!==a.type)return!1;return"Mobile Safari"===n.name||"Safari"===n.name}catch(e){return!1}},isMobileSafariHomeScreenApp=()=>!!isMobileSafariIos()&&"standalone"in window.navigator&&window.navigator.standalone},93633:function(e,t,n){n.d(t,{$o:function(){return getLocalStorage},dA:function(){return a},qQ:function(){return setLocalStorage}});let a={username:"username",hasDisplayedNotificationModal:"HAS_DISPLAYED_NOTIFICATION_MODAL",userVisitCount:"USER_VISIT_COUNT"};function getLocalStorage(e){try{return localStorage.getItem(e)}catch(e){console.error(e)}return null}function setLocalStorage(e,t){try{return""!==t&&null!==t?localStorage.setItem(e,t):localStorage.removeItem(e),!0}catch(e){console.error(e)}return!1}}}]);