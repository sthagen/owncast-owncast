(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6109],{25378:function(e,t,r){"use strict";var n=r(67294),a=r(57838),s=r(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,n.useRef)({}),r=(0,a.Z)();return(0,n.useEffect)(function(){var n=s.ZP.subscribe(function(n){t.current=n,e&&r()});return function(){return s.ZP.unsubscribe(n)}},[]),t.current}},77349:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(83946),a=r(19013),s=r(13882);function i(e,t){(0,s.Z)(2,arguments);var r=(0,a.Z)(e),i=(0,n.Z)(t);return isNaN(i)?new Date(NaN):(i&&r.setDate(r.getDate()+i),r)}},11640:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(83946),a=r(19013),s=r(13882);function i(e,t){(0,s.Z)(2,arguments);var r=(0,a.Z)(e),i=(0,n.Z)(t);if(isNaN(i))return new Date(NaN);if(!i)return r;var l=r.getDate(),o=new Date(r.getTime());return(o.setMonth(r.getMonth()+i+1,0),l>=o.getDate())?o:(r.setFullYear(o.getFullYear(),o.getMonth(),l),r)}},92794:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/viewer-info",function(){return r(84501)}])},54615:function(e,t,r){"use strict";r.d(t,{k:function(){return d}});var n=r(85893),a=r(58091),s=r(67294),i=r(23430),l=r(23148),o=r(26495),u=r(71577);function c(e){let t={};return e.forEach(e=>{let r=new Date(e.time),n=(0,a.Z)(r,"H:mma");t[n]=e.value}),t}l.kL.register(l.uw,l.WV,l.f$,l.od,l.jn,l.Dx,l.u,l.De);let d=e=>{let{data:t,title:r,color:a,unit:l,dataCollections:d,yFlipped:f,yLogarithmic:h,minYValue:x,yStepSize:m=0}=e,g=[],p=(0,s.useRef)(null);return t&&t.length>0&&g.push({id:r,label:r,backgroundColor:a,borderColor:a,borderWidth:3,data:c(t)}),d.forEach(e=>{g.push({id:e.name,label:e.name,data:c(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,n.jsxs)("div",{className:"line-chart-container",children:[(0,n.jsx)(o.x1,{ref:p,data:{datasets:g},options:{responsive:!0,clip:!1,scales:{y:{type:h?"logarithmic":"linear",reverse:f,min:x,ticks:{stepSize:m},title:{display:!0,text:l}}}},height:"70vh"}),(0,n.jsx)(u.Z,{size:"small",onClick:()=>{if(p.current){let e=document.createElement("a");e.download="chart.png",e.href=p.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,n.jsx)(i.Z,{}),className:"download-btn"})]})};d.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},15014:function(e,t,r){"use strict";r.d(t,{m:function(){return h}});var n=r(85893),a=r(85818),s=r(93471),i=r(74763),l=r(59652);let{Text:o}=a.default,u={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},c=e=>{let{prefix:t,value:r,suffix:a,title:s}=e;return(0,n.jsxs)("div",{children:[t,(0,n.jsx)("div",{children:(0,n.jsx)(o,{type:"secondary",children:s})}),(0,n.jsx)("div",{children:(0,n.jsxs)(o,{type:"secondary",children:[r,a||"%"]})})]})},d=e=>{let{title:t,value:r,prefix:a,suffix:i,color:l}=e,o=(0,n.jsx)(c,{prefix:a,value:r,suffix:i,title:t});return(0,n.jsx)(s.Z,{type:"dashboard",percent:r,width:120,strokeColor:{"0%":l,"90%":r>90?"red":l},format:()=>o})};d.defaultProps=u;let f=e=>{let{title:t,value:r,prefix:a,formatter:s}=e;return(0,n.jsx)(i.Z,{title:t,value:r,prefix:a,formatter:s})};f.defaultProps=u;let h=e=>{let{progress:t,centered:r}=e,a=t?d:f;return(0,n.jsx)(l.default,{type:"inner",children:(0,n.jsx)("div",{style:r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},children:(0,n.jsx)(a,{...e})})})};h.defaultProps=u},84501:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(85893),a=r(67294),s=r(66516),i=r(85818),l=r(71230),o=r(15746),u=r(14670),c=r(11382),d=r(13013),f=r(71002),h=r(77349),x=r(13882),m=r(83946),g=r(11640);function p(e,t){if((0,x.Z)(2,arguments),!t||"object"!==(0,f.Z)(t))return new Date(NaN);var r=t.years?(0,m.Z)(t.years):0,n=t.months?(0,m.Z)(t.months):0,a=t.weeks?(0,m.Z)(t.weeks):0,s=t.days?(0,m.Z)(t.days):0,i=t.hours?(0,m.Z)(t.hours):0,l=t.minutes?(0,m.Z)(t.minutes):0,o=t.seconds?(0,m.Z)(t.seconds):0,u=function(e,t){(0,x.Z)(2,arguments);var r=(0,m.Z)(t);return(0,h.Z)(e,-r)}(function(e,t){(0,x.Z)(2,arguments);var r=(0,m.Z)(t);return(0,g.Z)(e,-r)}(e,n+12*r),s+7*a);return new Date(u.getTime()-1e3*(o+60*(l+60*i)))}var Z=r(19013),w=r(5152),j=r.n(w),v=r(54615),y=r(15014),b=r(54398),k=r(45938),D=r(37135);let N=e=>{let{data:t}=e,r=[{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:e=>(0,D.AB)(e)},{title:"Location",dataIndex:"geo",key:"geo",render:e=>e?"".concat(e.regionName,", ").concat(e.countryCode):"-"},{title:"Watch Time",dataIndex:"firstSeen",key:"firstSeen",defaultSortOrder:"ascend",render:e=>(0,k.Z)(new Date(e)),sorter:(e,t)=>new Date(e.firstSeen).getTime()-new Date(t.firstSeen).getTime(),sortDirections:["descend","ascend"]}];return(0,n.jsx)(b.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:r,dataSource:t,size:"small",rowKey:"id"})};var S=r(38631),C=r(81453),_=r(34261);let P=j()(()=>Promise.all([r.e(2074),r.e(5085)]).then(r.t.bind(r,5085,23)),{loadableGenerated:{webpack:()=>[5085]},ssr:!1}),E=j()(()=>Promise.all([r.e(2074),r.e(5412)]).then(r.t.bind(r,95412,23)),{loadableGenerated:{webpack:()=>[95412]},ssr:!1});function L(){let e;let t=(0,a.useContext)(S.a),{online:r,broadcaster:f,viewerCount:h,overallPeakViewerCount:m,sessionPeakViewerCount:g}=t||{};f&&f.time&&(e=new Date(f.time));let w=[{title:"Current stream",start:e},{title:"Last 12 hours",start:p(new Date,{hours:12})},{title:"Last 24 hours",start:p(new Date,{hours:24})},{title:"Last 7 days",start:p(new Date,{days:7})},{title:"Last 30 days",start:p(new Date,{days:30})},{title:"Last 3 months",start:p(new Date,{months:3})},{title:"Last 6 months",start:p(new Date,{months:6})}],[j,b]=(0,a.useState)(!0),[k,D]=(0,a.useState)([]),[_,L]=(0,a.useState)([]),[T,I]=(0,a.useState)(w[1]),M=async()=>{try{let e="".concat(C.iV,"?windowStart=").concat(function(e){return(0,x.Z)(1,arguments),Math.floor(function(e){return(0,x.Z)(1,arguments),(0,Z.Z)(e).getTime()}(e)/1e3)}(T.start)),t=await (0,C.rQ)(e);D(t),b(!1)}catch(e){console.log("==== error",e)}try{let e=await (0,C.rQ)(C.a_);L(e)}catch(e){console.log("==== error",e)}};(0,a.useEffect)(()=>{let e=null;return(M(),r)?(e=setInterval(M,6e4),()=>{clearInterval(e)}):()=>[]},[r,T]);let A=e=>{let{key:t}=e;I(w[t])},V=(0,n.jsxs)(s.Z,{children:[r&&e&&(0,n.jsx)(s.Z.Item,{onClick:A,children:w[0].title},"0"),w.slice(1).map((e,t)=>(0,n.jsx)(s.Z.Item,{onClick:A,children:e.title},t+1))]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default.Title,{children:"Viewer Info"}),(0,n.jsx)("br",{}),(0,n.jsxs)(l.Z,{gutter:[16,16],justify:"space-around",children:[r&&(0,n.jsx)(o.Z,{span:8,md:8,children:(0,n.jsx)(y.m,{title:"Current viewers",value:h.toString(),prefix:(0,n.jsx)(E,{})})}),(0,n.jsx)(o.Z,{md:r?8:12,children:(0,n.jsx)(y.m,{title:r?"Max viewers this stream":"Max viewers last stream",value:g.toString(),prefix:(0,n.jsx)(E,{})})}),(0,n.jsx)(o.Z,{md:r?8:12,children:(0,n.jsx)(y.m,{title:"All-time max viewers",value:m.toString(),prefix:(0,n.jsx)(E,{})})})]}),!k.length&&(0,n.jsx)(u.Z,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No viewer data has been collected yet.",type:"info"}),(0,n.jsxs)(c.Z,{spinning:!k.length||j,children:[(0,n.jsx)(d.Z,{overlay:V,trigger:["click"],children:(0,n.jsxs)("button",{type:"button",style:{float:"right",background:"transparent",border:"unset"},children:[T.title," ",(0,n.jsx)(P,{})]})}),k.length>0&&(0,n.jsx)(v.k,{title:"Viewers",data:k,color:"#2087E2",unit:"viewers",minYValue:0,yStepSize:1}),(0,n.jsx)(N,{data:_})]})]})}L.getLayout=function(e){return(0,n.jsx)(_.l,{page:e})}}},function(e){e.O(0,[2196,173,5874,7311,5634,4931,5402,5257,1664,5348,9915,4041,3698,3013,4398,4526,7940,5938,428,7809,4559,4261,9774,2888,179],function(){return e(e.s=92794)}),_N_E=e.O()}]);