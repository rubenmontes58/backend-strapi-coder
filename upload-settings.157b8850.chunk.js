"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[695],{85078:(T,f,t)=>{t.r(f),t.d(f,{SettingsPage:()=>R,default:()=>H});var e=t(67294),i=t(64593),h=t(86896),c=t(73599),E=t(85018),x=t(185),o=t(53979),v=t(29728),y=t(49066),j=t(17034),M=t(11047),P=t(41580),n=t(75515),l=t(11276),d=t(74571),s=t(20707),g=t(52861),u=t(18446),b=t.n(u),r=t(57197);const L=a=>a;var k=t(18172),N=t(36968),Z=t.n(N);const W={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},K=(a,O)=>(0,k.ZP)(a,m=>{switch(O.type){case"CANCEL_CHANGES":{m.modifiedData=a.initialData;break}case"GET_DATA_SUCCEEDED":{m.isLoading=!1,m.initialData=O.data,m.modifiedData=O.data;break}case"ON_CHANGE":{Z()(m,["modifiedData",...O.keys.split(".")],O.value);break}case"ON_SUBMIT":{m.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{m.initialData=a.modifiedData,m.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{m.isSubmiting=!1;break}default:return a}});var G=t(16838);const R=()=>{const{formatMessage:a}=(0,h.Z)(),{lockApp:O,unlockApp:m}=(0,c.o1)(),F=(0,c.lm)(),{get:$,put:X}=(0,c.kY)();(0,c.go)();const[{initialData:Y,isLoading:J,isSubmiting:Q,modifiedData:C},B]=(0,e.useReducer)(K,W,L),z=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const D=g.default.CancelToken.source(),w=async()=>{try{const{data:{data:A}}=await $((0,r.IF)("settings"),{cancelToken:D.token});B({type:"GET_DATA_SUCCEEDED",data:A})}catch(A){console.error(A)}};return z.current&&w(),()=>{D.cancel("Operation canceled by the user."),z.current=!1}},[]);const U=b()(Y,C),V=async p=>{if(p.preventDefault(),!U){O(),B({type:"ON_SUBMIT"});try{await X((0,r.IF)("settings"),C),B({type:"SUBMIT_SUCCEEDED"}),F({type:"success",message:{id:"notification.form.success.fields"}})}catch(D){console.error(D),B({type:"ON_SUBMIT_ERROR"})}m()}},S=({target:{name:p,value:D}})=>{B({type:"ON_CHANGE",keys:p,value:D})};return e.createElement(x.o,{tabIndex:-1},e.createElement(i.q,{title:a({id:(0,r.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:V},e.createElement(o.T,{title:a({id:(0,r.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(v.z,{disabled:U,"data-testid":"save-button",loading:Q,type:"submit",startIcon:e.createElement(E.Z,null),size:"S"},a({id:"global.save",defaultMessage:"Save"})),subtitle:a({id:(0,r.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(y.D,null,J?e.createElement(c.dO,null):e.createElement(j.A,null,e.createElement(M.k,{direction:"column",alignItems:"stretch",gap:12},e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(M.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(M.k,null,e.createElement(n.Z,{variant:"delta",as:"h2"},a({id:(0,r.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(l.r,{gap:6},e.createElement(d.P,{col:6,s:12},e.createElement(s.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:C.responsiveDimensions,hint:a({id:(0,r.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:a({id:(0,r.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:p=>{S({target:{name:"responsiveDimensions",value:p.target.checked}})}})),e.createElement(d.P,{col:6,s:12},e.createElement(s.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:C.sizeOptimization,hint:a({id:(0,r.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:a({id:(0,r.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:p=>{S({target:{name:"sizeOptimization",value:p.target.checked}})}})),e.createElement(d.P,{col:6,s:12},e.createElement(s.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:C.autoOrientation,hint:a({id:(0,r.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:a({id:(0,r.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:p=>{S({target:{name:"autoOrientation",value:p.target.checked}})}}))))))))))},H=()=>e.createElement(c.O4,{permissions:G.Z.settings},e.createElement(R,null))},49066:(T,f,t)=>{t.d(f,{D:()=>h});var e=t(85893),i=t(41580);const h=({children:c})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:c})},53979:(T,f,t)=>{t.d(f,{T:()=>j});var e=t(85893),i=t(67294),h=t(1565);const c=n=>{const l=(0,i.useRef)(null),[d,s]=(0,i.useState)(!0),g=([u])=>{s(u.isIntersecting)};return(0,i.useEffect)(()=>{const u=l.current,b=new IntersectionObserver(g,n);return u&&b.observe(l.current),()=>{u&&b.disconnect()}},[l,n]),[l,d]};var E=t(79698);const x=(n,l)=>{const d=(0,E.W)(l);(0,i.useLayoutEffect)(()=>{const s=new ResizeObserver(d);return Array.isArray(n)?n.forEach(g=>{g.current&&s.observe(g.current)}):n.current&&s.observe(n.current),()=>{s.disconnect()}},[n,d])};var o=t(41580),v=t(11047),y=t(75515);const j=n=>{const l=(0,i.useRef)(null),[d,s]=(0,i.useState)(null),[g,u]=c({root:null,rootMargin:"0px",threshold:0});return x(g,()=>{g.current&&s(g.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{l.current&&s(l.current.getBoundingClientRect())},[l]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:g,children:u&&(0,e.jsx)(P,{ref:l,...n})}),!u&&(0,e.jsx)(P,{...n,sticky:!0,width:d?.width})]})};j.displayName="HeaderLayout";const M=(0,h.ZP)(o.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,P=i.forwardRef(({navigationAction:n,primaryAction:l,secondaryAction:d,subtitle:s,title:g,sticky:u,width:b,...r},I)=>{const L=typeof s=="string";return u?(0,e.jsx)(M,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:b,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{children:[n&&(0,e.jsx)(o.x,{paddingRight:3,children:n}),(0,e.jsxs)(o.x,{children:[(0,e.jsx)(y.Z,{variant:"beta",as:"h1",...r,children:g}),L?(0,e.jsx)(y.Z,{variant:"pi",textColor:"neutral600",children:s}):s]}),d?(0,e.jsx)(o.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(v.k,{children:l?(0,e.jsx)(o.x,{paddingLeft:2,children:l}):void 0})]})}):(0,e.jsxs)(o.x,{ref:I,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(o.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{minWidth:0,children:[(0,e.jsx)(y.Z,{as:"h1",variant:"alpha",...r,children:g}),d?(0,e.jsx)(o.x,{paddingLeft:4,children:d}):null]}),l]}),L?(0,e.jsx)(y.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:s}):s]})})},17034:(T,f,t)=>{t.d(f,{A:()=>x});var e=t(85893),i=t(1565),h=t(41580);const c=(0,i.ZP)(h.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:o})=>o?"auto 1fr":"1fr"};
`,E=(0,i.ZP)(h.x)`
  overflow-x: hidden;
`,x=({sideNav:o,children:v})=>(0,e.jsxs)(c,{hasSideNav:!!o,children:[o,(0,e.jsx)(E,{paddingBottom:10,children:v})]})},185:(T,f,t)=>{t.d(f,{o:()=>E});var e=t(85893),i=t(1565),h=t(41580);const c=(0,i.ZP)(h.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,E=({labelledBy:x="main-content-title",...o})=>(0,e.jsx)(c,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...o})}}]);
