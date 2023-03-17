(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7722],{2976:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/server",function(){return n(23140)}])},44716:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(85893),s=n(67294),r=n(94594),i=n(91332),l=n(57520),o=n(24044),c=n(38631);let d=e=>{let{apiPath:t,checked:n,reversed:d=!1,configPath:u="",disabled:h=!1,fieldName:m,label:f,tip:y,useSubmit:p,onChange:g}=e,[x,v]=(0,s.useState)(null),j=null,b=(0,s.useContext)(c.aC),{setFieldInConfigState:k}=b||{},w=()=>{v(null),clearTimeout(j),j=null},N=async e=>{if(p){v((0,i.kg)(i.Jk));let n=d?!e:e;await (0,o.Si)({apiPath:t,data:{value:n},onSuccess:()=>{k({fieldName:m,value:n,path:u}),v((0,i.kg)(i.zv))},onError:e=>{v((0,i.kg)(i.Un,"There was an error: ".concat(e)))}}),j=setTimeout(w,o.sI)}g&&g(e)},C=null!==x&&x.type===i.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[f&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:f})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(r.Z,{className:"switch field-".concat(m),loading:C,onChange:N,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,a.jsx)(l.E,{status:x})]}),(0,a.jsx)("p",{className:"field-tip",children:y})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},23140:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var a=n(85893),s=n(67294),r=n(44526),i=n(85818),l=n(79292),o=n(79531),c=n(71577),d=n(26713),u=n(14670),h=n(54398),m=n(5152),f=n.n(m),y=n(38631),p=n(81453),g=n(24044);let{Paragraph:x}=i.Z,v=f()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),j=f()(()=>Promise.all([n.e(2074),n.e(9918)]).then(n.t.bind(n,29918,23)),{loadableGenerated:{webpack:()=>[29918]},ssr:!1}),b=f()(()=>Promise.all([n.e(2074),n.e(54)]).then(n.t.bind(n,20054,23)),{loadableGenerated:{webpack:()=>[20054]},ssr:!1}),k=async(e,t)=>{try{await (0,p.rQ)(p.um,{method:"POST",auth:!0,data:{value:e}})}catch(e){console.error(e),t(e)}},w=()=>{let e="",t=!1,n=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,192}$/,a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";for(;!t;){let s=Array.apply(20,Array(30)).map(()=>a.charAt(Math.floor(Math.random()*a.length))).join("");n.test(s)&&(t=!0,e=s)}return e},N=e=>{let{setShowAddKeyForm:t,setFieldInConfigState:n,streamKeys:r,setError:i}=e,[d,u]=(0,s.useState)(!0),[h]=l.Z.useForm(),{Item:m}=l.Z,f=[];(0,s.useEffect)(()=>{g.RQ.forEach(e=>{f.push(e)})},[]);let y=e=>{let a=[...r,e];n({fieldName:"streamKeys",value:a}),k(a,i),t(!1)},p=e=>{let t=e.target.value;g.Uq.test(t)?u(!0):u(!1)},x=w();return(0,a.jsxs)(l.Z,{layout:"horizontal",autoComplete:"off",onFinish:y,form:h,style:{display:"flex",flexDirection:"row"},children:[(0,a.jsx)(m,{style:{width:"60%",marginRight:"5px"},label:"Key",name:"key",tooltip:(0,a.jsx)("p",{children:"The key you provide your broadcasting software. Please note that the key must be a minimum of eight characters and must include at least one uppercase letter, at least one lowercase letter, at least one special character, and at least one number."}),rules:g.RQ,children:(0,a.jsx)(o.Z,{placeholder:"def456",defaultValue:x,onChange:p})}),(0,a.jsx)(m,{style:{width:"60%",marginRight:"5px"},label:"Comment",name:"comment",tooltip:"For remembering why you added this key",children:(0,a.jsx)(o.Z,{placeholder:"My OBS Key"})}),(0,a.jsx)(c.Z,{type:"primary",htmlType:"submit",disabled:!d,children:"Add"})]})},C=e=>{let{setShowAddKeyForm:t}=e;return(0,a.jsx)(c.Z,{type:"default",onClick:()=>t(!0),children:(0,a.jsx)(b,{})})},S=()=>{let e=(0,s.useContext)(y.aC),{serverConfig:t,setFieldInConfigState:n}=e||{},{streamKeys:r}=t,[i,l]=(0,s.useState)(!1),[o,m]=(0,s.useState)({}),[f,p]=(0,s.useState)(null),g=e=>{let t=r.filter(t=>t!==e);n({fieldName:"streamKeys",value:t}),k(t,p)},b=e=>{m({...o,[e]:!o[e]})};return(0,a.jsxs)("div",{children:[(0,a.jsx)(x,{children:"A streaming key is used with your broadcasting software to authenticate itself to Owncast. Most people will only need one. However, if you share a server with others or you want different keys for different broadcasting sources you can add more here."}),(0,a.jsx)(x,{children:"These keys are unrelated to the admin password and will not grant you access to make changes to Owncast's configuration."}),(0,a.jsxs)(x,{children:["Read more about broadcasting at"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"the documentation"}),"."]}),(0,a.jsxs)(d.Z,{direction:"vertical",style:{width:"70%"},children:[f&&(0,a.jsx)(u.Z,{type:"error",message:"Saving Keys Error",description:f}),0===r.length&&(0,a.jsx)(u.Z,{message:"No stream keys!",description:"You will not be able to stream until you create at least one stream key and add it to your broadcasting software.",type:"error"}),(0,a.jsx)(h.Z,{rowKey:"key",columns:[{title:"Key",dataIndex:"key",key:"key",render:e=>(0,a.jsxs)(d.Z,{direction:"horizontal",children:[(0,a.jsx)(x,{copyable:!0,children:o[e]?e:"**********"}),(0,a.jsx)(c.Z,{type:"link",style:{top:"-7px"},icon:(0,a.jsx)(j,{}),onClick:()=>b(e)})]})},{title:"Comment",dataIndex:"comment",key:"comment"},{title:"",key:"delete",render:e=>(0,a.jsx)(c.Z,{onClick:()=>g(e),icon:(0,a.jsx)(v,{})})}],dataSource:r,pagination:!1,footer:()=>i?(0,a.jsx)(N,{setShowAddKeyForm:l,streamKeys:r,setFieldInConfigState:n,setError:p}):(0,a.jsx)(C,{setShowAddKeyForm:l})}),(0,a.jsx)("br",{})]})]})};var Z=n(54907),P=n(67032),E=n(78353),T=n(91762),O=n(65360),K=n(91332),z=n(57520);let A=()=>{let{setMessage:e}=(0,s.useContext)(T.k),[t,n]=(0,s.useState)(null),r=()=>{n(null),clearTimeout(null)},l=async()=>{n((0,K.kg)(K.Jk));try{await (0,p.rQ)(p.UJ),e(""),n((0,K.kg)(K.zv)),setTimeout(r,g.sI)}catch(e){n((0,K.kg)(K.Un,"There was an error: ".concat(e))),setTimeout(r,g.sI)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z.Title,{level:3,className:"section-title",children:"Reset Directory"}),(0,a.jsx)("p",{className:"description",children:'If you are experiencing issues with your listing on the Owncast Directory and were asked to "reset" your connection to the service, you can do that here. The next time you go live it will try and re-register your server with the directory from scratch.'}),(0,a.jsx)(O.Z,{placement:"topLeft",title:"Are you sure you want to reset your connection to the Owncast directory?",onConfirm:l,okText:"Yes",cancelText:"No",children:(0,a.jsx)(c.Z,{type:"primary",children:"Reset Directory Connection"})}),(0,a.jsx)("p",{children:(0,a.jsx)(z.E,{status:t})})]})},{Panel:_}=Z.Z;function F(){let[e,t]=(0,s.useState)(null),n=(0,s.useContext)(y.aC),{setMessage:r}=(0,s.useContext)(T.k),{serverConfig:l}=n||{},{adminPassword:o,ffmpegPath:c,rtmpServerPort:d,webServerPort:u,yp:h,socketHostOverride:m}=l;if((0,s.useEffect)(()=>{t({adminPassword:o,ffmpegPath:c,rtmpServerPort:d,webServerPort:u,socketHostOverride:m})},[l]),!e)return null;let f=n=>{let{fieldName:a,value:s}=n;t({...e,[a]:s})},p=()=>{r("Updating server settings requires a restart of your Owncast server.")},x=()=>{r("Changing your stream key will log you out of the admin and block you from streaming until you change the key in your broadcasting software.")},v=()=>{n.online&&r("The updated ffmpeg path will be used when starting your next live stream.")};return(0,a.jsxs)("div",{className:"edit-server-details-container",children:[(0,a.jsx)("div",{className:"field-container field-streamkey-container",children:(0,a.jsx)("div",{className:"left-side",children:(0,a.jsx)(E.$7,{fieldName:"adminPassword",...g.tQ,value:e.adminPassword,initialValue:o,type:P.A8,onChange:f,onSubmit:x})})}),(0,a.jsx)(E.$7,{fieldName:"ffmpegPath",...g.KB,value:e.ffmpegPath,initialValue:c,onChange:f,onSubmit:v}),(0,a.jsx)(E.$7,{fieldName:"webServerPort",...g.rE,value:e.webServerPort,initialValue:u,type:P.mG,onChange:f,onSubmit:p}),(0,a.jsx)(E.$7,{fieldName:"rtmpServerPort",...g.lT,value:e.rtmpServerPort,initialValue:d,type:P.mG,onChange:f,onSubmit:p}),(0,a.jsx)(Z.Z,{className:"advanced-settings",children:(0,a.jsxs)(_,{header:"Advanced Settings",children:[(0,a.jsx)(i.Z.Paragraph,{children:"If you have a CDN in front of your entire Owncast instance, specify your origin server here for the websocket to connect to. Most people will never need to set this."}),(0,a.jsx)(E.$7,{fieldName:"socketHostOverride",...g.ME,value:e.socketHostOverride,initialValue:m||"",type:P.xA,onChange:f}),h.enabled&&(0,a.jsx)(A,{})]},"1")})]})}function I(){return(0,a.jsxs)("div",{className:"config-server-details-form",children:[(0,a.jsx)("p",{className:"description",children:"You should change your admin password from the default and keep it safe. For most people it's likely the other settings will not need to be changed."}),(0,a.jsx)("div",{className:"form-module config-server-details-container",children:(0,a.jsx)(F,{})})]})}var $=n(94184),D=n.n($),U=n(89126),M=n(44716);let{Panel:R}=Z.Z;function V(){let[e,t]=(0,s.useState)(null),[n,r]=(0,s.useState)(null),[i,l]=(0,s.useState)(!1),o=(0,s.useContext)(y.aC),{serverConfig:d,setFieldInConfigState:u}=o||{},{setMessage:h}=(0,s.useContext)(T.k),{s3:m}=d,{accessKey:f="",acl:p="",bucket:x="",enabled:v=!1,endpoint:j="",region:b="",secret:k="",servingEndpoint:w="",forcePathStyle:N=!1}=m;if((0,s.useEffect)(()=>{t({accessKey:f,acl:p,bucket:x,enabled:v,endpoint:j,region:b,secret:k,servingEndpoint:w,forcePathStyle:N}),l(v)},[m]),!e)return null;let C=()=>{r(null),clearTimeout(null)},S=n=>{let{fieldName:a,value:s}=n;t({...e,[a]:s})},E=async()=>{r((0,K.kg)(K.Jk));let t=e;if(null==t?void 0:t.servingEndpoint){var n;t.servingEndpoint=null==t?void 0:null===(n=t.servingEndpoint)||void 0===n?void 0:n.replace(/\/+$/g,"")}await (0,g.Si)({apiPath:g.$w,data:{value:t},onSuccess:()=>{u({fieldName:"s3",value:t,path:""}),r((0,K.kg)(K.zv,"Updated.")),setTimeout(C,g.sI),h("Changing your storage configuration will take place the next time you start a new stream.")},onError:e=>{r((0,K.kg)(K.Un,e)),setTimeout(C,g.sI)}})},O=e=>{l(e),S({fieldName:"enabled",value:e})},A=e=>{S({fieldName:"forcePathStyle",value:e})},_=D()({"edit-storage-container":!0,"form-module":!0,enabled:i}),F=function(e,t){let{endpoint:n,accessKey:a,secret:s,bucket:r,region:i,enabled:l,servingEndpoint:o,acl:c,forcePathStyle:d}=e;if(l){if(n&&(0,U.jv)(n)&&a&&s&&r&&i&&(l!==t.enabled||n!==t.endpoint||a!==t.accessKey||s!==t.secret||r!==t.bucket||i!==t.region||!t.servingEndpoint&&""!==o||t.servingEndpoint&&o!==t.servingEndpoint||!t.acl&&""!==c||t.acl&&c!==t.acl||d!==t.forcePathStyle))return!0}else if(l!==t.enabled)return!0;return!1}(e,m);return(0,a.jsxs)("div",{className:_,children:[(0,a.jsx)("div",{className:"enable-switch",children:(0,a.jsx)(M.Z,{apiPath:"",fieldName:"enabled",label:"Use S3 Storage Provider",checked:e.enabled,onChange:O})}),(0,a.jsxs)("div",{className:"form-fields",children:[(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(P.nv,{...g.zm.endpoint,value:e.endpoint,onChange:S})}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(P.nv,{...g.zm.accessKey,value:e.accessKey,onChange:S})}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(P.nv,{...g.zm.secret,value:e.secret,onChange:S})}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(P.nv,{...g.zm.bucket,value:e.bucket,onChange:S})}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(P.nv,{...g.zm.region,value:e.region,onChange:S})}),(0,a.jsx)(Z.Z,{className:"advanced-section",children:(0,a.jsxs)(R,{header:"Optional Settings",children:[(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(P.nv,{...g.zm.acl,value:e.acl,onChange:S})}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(P.nv,{...g.zm.servingEndpoint,value:e.servingEndpoint,onChange:S})}),(0,a.jsx)("div",{className:"enable-switch",children:(0,a.jsx)(M.Z,{...g.zm.forcePathStyle,fieldName:"forcePathStyle",checked:e.forcePathStyle,onChange:A})})]},"1")})]}),(0,a.jsxs)("div",{className:"button-container",children:[(0,a.jsx)(c.Z,{type:"primary",onClick:E,disabled:!F,children:"Save"}),(0,a.jsx)(z.E,{status:n})]})]})}function G(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"description",children:["Owncast supports optionally using external storage providers to stream your video. Learn more about this by visiting our"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/storage/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Storage Documentation"}),"."]}),(0,a.jsx)("p",{className:"description",children:"Configuring this incorrectly will likely cause your video to be unplayable. Double check the documentation for your storage provider on how to configure the bucket you created for Owncast."}),(0,a.jsx)("p",{className:"description",children:"Keep in mind this is for live streaming, not for archival, recording or VOD purposes."}),(0,a.jsx)(V,{})]})}var J=n(34261);function Q(){let e=(0,s.useContext)(y.aC),{serverConfig:t}=e||{},{streamKeyOverridden:n}=t;return(0,a.jsx)("div",{className:"config-public-details-page",children:(0,a.jsx)(r.Z,{defaultActiveKey:"1",centered:!0,items:[{label:"Server Config",key:"1",children:(0,a.jsx)(I,{})},!n&&{label:"Stream Keys",key:"2",children:(0,a.jsx)(S,{})},{label:"S3 Object Storage",key:"3",children:(0,a.jsx)(G,{})}]})})}Q.getLayout=function(e){return(0,a.jsx)(J.l,{page:e})}}},function(e){e.O(0,[173,5874,2184,2364,4931,5402,5257,5818,1664,8014,9915,4041,3698,3013,4398,4526,5258,8035,4261,9774,2888,179],function(){return e(e.s=2976)}),_N_E=e.O()}]);