(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6559],{10887:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/emojis",function(){return n(16490)}])},16490:function(e,t,n){"use strict";n.r(t);var i=n(85893),o=n(59652),s=n(85818),a=n(71577),r=n(71230),l=n(15746),c=n(94199),u=n(24093),d=n(28465),m=n(67294),h=n(5152),p=n.n(h),j=n(57520),f=n(81453),g=n(80693),y=n(91332),w=n(24044),x=n(34261);let{Meta:k}=o.Z,b=p()(()=>Promise.resolve().then(n.t.bind(n,40753,23)),{loadableGenerated:{webpack:()=>[40753]},ssr:!1}),{Title:E,Paragraph:Z}=s.Z,_=()=>{let[e,t]=(0,m.useState)([]),[n,s]=(0,m.useState)(!1),[h,p]=(0,m.useState)(null),[x,_]=(0,m.useState)(null),T=null,B=()=>{p(null),clearTimeout(T),T=null};async function v(){s(!0);try{let e=await (0,f.rQ)("/api/emoji");t(e)}catch(e){console.error("error fetching emojis",e)}s(!1)}async function N(e){let t="/".concat(e.split("/").slice(3).join("/"));console.log(t),s(!0),p((0,y.kg)(y.Jk,"Deleting emoji..."));try{let e=await (0,f.rQ)(f.Ff,{method:"POST",data:{name:t}});if(e instanceof Error)throw e;p((0,y.kg)(y.zv,"Emoji deleted")),T=setTimeout(B,w.sI)}catch(e){p((0,y.kg)(y.Un,"".concat(e))),s(!1),T=setTimeout(B,w.sI)}v()}async function P(){s(!0);try{p((0,y.kg)(y.Jk,"Converting emoji..."));let e=await new Promise((e,t)=>{if(!g.dr.includes(x.type)){let e="File type is not supported: ".concat(x.type);return t(e)}(0,g.y3)(x,t=>e({name:x.name,url:t}))});p((0,y.kg)(y.Jk,"Uploading emoji..."));let t=await (0,f.rQ)(f.Qc,{method:"POST",data:{name:e.name,data:e.url}});if(t instanceof Error)throw t;p((0,y.kg)(y.zv,"Emoji uploaded successfully!")),v()}catch(e){p((0,y.kg)(y.Un,"".concat(e)))}T=setTimeout(B,w.sI),s(!1)}return(0,m.useEffect)(()=>{v()},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(E,{children:"Emojis"}),(0,i.jsx)(Z,{children:"Here you can upload new custom emojis for usage in the chat. When uploading a new emoji, the filename will be used as emoji name."}),(0,i.jsx)("br",{}),(0,i.jsx)(d.Z,{name:"emoji",listType:"picture",className:"emoji-uploader",showUploadList:!1,accept:g.dr.join(","),beforeUpload:_,customRequest:P,disabled:n,children:(0,i.jsx)(a.Z,{type:"primary",disabled:n,children:"Upload new emoji"})}),(0,i.jsx)(j.Z,{status:h}),(0,i.jsx)("br",{}),(0,i.jsx)(r.Z,{children:e.map(e=>(0,i.jsx)(l.Z,{style:{padding:"10px"},children:(0,i.jsx)(o.Z,{style:{width:120,marginTop:16},actions:[],children:(0,i.jsx)(k,{description:[(0,i.jsxs)("div",{style:{display:"flex",justifyItems:"center",alignItems:"center",flexDirection:"column",gap:"20px"},children:[(0,i.jsx)(c.Z,{title:e.name,children:(0,i.jsx)(u.C,{style:{height:50,width:50},src:e.url})}),(0,i.jsx)(a.Z,{size:"small",type:"ghost",title:"Delete emoji",style:{position:"absolute",right:0,top:0,height:24,width:24,border:"none",color:"gray"},onClick:()=>N(e.url),icon:(0,i.jsx)(b,{})})]})]})})},e.name))}),(0,i.jsx)("br",{})]})};_.getLayout=function(e){return(0,i.jsx)(x.l,{page:e})},t.default=_},80693:function(e,t,n){"use strict";n.d(t,{Z7:function(){return i},dr:function(){return o},kR:function(){return a},y3:function(){return s}});let i=2097152,o=["image/png","image/jpeg","image/gif"];function s(e,t){let n=new FileReader;n.addEventListener("load",()=>t(n.result)),n.readAsDataURL(e)}function a(e){let t=Math.floor(Math.log(e)/Math.log(1024)),n=1*Number((e/Math.pow(1024,t)).toFixed(2));return"".concat(n," ").concat(["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t])}}},function(e){e.O(0,[2074,173,5874,9151,2414,4931,5402,5257,1664,8014,5818,9915,4526,9961,2118,6356,6766,4261,9774,2888,179],function(){return e(e.s=10887)}),_N_E=e.O()}]);