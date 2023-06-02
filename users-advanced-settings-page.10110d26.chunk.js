"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9460],{98352:(A,h,t)=>{t.r(h),t.d(h,{default:()=>G});var e=t(67294),o=t(88767),y=t(86896),v=t(14916),i=t(73599),j=t(14087),l=t(185),p=t(53979),g=t(49066),E=t(29728),S=t(41580),x=t(11047),n=t(75515),s=t(11276),d=t(74571),r=t(40619),c=t(82562),f=t(85018),O=t(81912),a=t(89031);const R=[{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,a.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,a.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,a.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var L=t(87561);const C=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),w=L.Ry().shape({email_confirmation_redirection:L.nK().when("email_confirmation",{is:!0,then:L.Z_().matches(C).required(),otherwise:L.Z_().nullable()}),email_reset_password:L.Z_(i.I0.string).matches(C,i.I0.regex).nullable()}),z=async()=>{const{get:u}=(0,i.tg)(),{data:B}=await u((0,a.Gc)("advanced"));return B},U=u=>{const{put:B}=(0,i.tg)();return B((0,a.Gc)("advanced"),u)},W=()=>e.createElement(i.O4,{permissions:O.Z.readAdvancedSettings},e.createElement(N,null)),N=()=>{const{formatMessage:u}=(0,y.Z)(),B=(0,i.lm)(),{lockApp:H,unlockApp:F}=(0,i.o1)(),{notifyStatus:K}=(0,j.G)(),$=(0,o.useQueryClient)();(0,i.go)();const Q=(0,e.useMemo)(()=>({update:O.Z.updateAdvancedSettings}),[]),{isLoading:X,allowedActions:{canUpdate:J}}=(0,i.ss)(Q),{status:V,data:D}=(0,o.useQuery)("advanced",()=>z(),{onSuccess(){K(u({id:(0,a.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){B({type:"warning",message:{id:(0,a.OB)("notification.error"),defaultMessage:"An error occured"}})}}),Y=X||V!=="success",I=(0,o.useMutation)(M=>U(M),{async onSuccess(){await $.invalidateQueries("advanced"),B({type:"success",message:{id:(0,a.OB)("notification.success.saved"),defaultMessage:"Saved"}}),F()},onError(){B({type:"warning",message:{id:(0,a.OB)("notification.error"),defaultMessage:"An error occured"}}),F()},refetchActive:!0}),{isLoading:k}=I,q=async M=>{H();const b=M.email_confirmation?M.email_confirmation_redirection:"";await I.mutateAsync({...M,email_confirmation_redirection:b})};return Y?e.createElement(l.o,{"aria-busy":"true"},e.createElement(i.SL,{name:u({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(p.T,{title:u({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(g.D,null,e.createElement(i.dO,null))):e.createElement(l.o,{"aria-busy":k},e.createElement(i.SL,{name:u({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(v.J9,{onSubmit:q,initialValues:D.settings,validateOnChange:!1,validationSchema:w,enableReinitialize:!0},({errors:M,values:b,handleChange:Z,isSubmitting:_})=>e.createElement(i.l0,null,e.createElement(p.T,{title:u({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(E.z,{loading:_,type:"submit",disabled:!J,startIcon:e.createElement(f.Z,null),size:"S"},u({id:"global.save",defaultMessage:"Save"}))}),e.createElement(g.D,null,e.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(x.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(n.Z,{variant:"delta",as:"h2"},u({id:"global.settings",defaultMessage:"Settings"})),e.createElement(s.r,{gap:6},e.createElement(d.P,{col:6,s:12},e.createElement(r.P,{label:u({id:(0,a.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:b.default_role,hint:u({id:(0,a.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:m=>Z({target:{name:"default_role",value:m}})},D.roles.map(m=>e.createElement(c.W,{key:m.type,value:m.type},m.name)))),R.map(m=>{let T=b[m.name];return T||(T=m.type==="bool"?!1:""),e.createElement(d.P,{key:m.name,...m.size},e.createElement(i.jm,{...m,value:T,error:M[m.name],disabled:m.name==="email_confirmation_redirection"&&b.email_confirmation===!1,onChange:Z}))}))))))))},G=W},89031:(A,h,t)=>{t.d(h,{YX:()=>v,Gc:()=>l,OB:()=>p.Z});var e=t(41609),o=t.n(e);const v=g=>Object.keys(g).reduce((E,S)=>{const x=g[S].controllers,n=Object.keys(x).reduce((s,d)=>(o()(x[d])||(s[d]=x[d]),s),{});return o()(n)||(E[S]={controllers:n}),E},{});var i=t(31498);const l=g=>`/${i.Z}/${g}`;var p=t(84757)},49066:(A,h,t)=>{t.d(h,{D:()=>y});var e=t(85893),o=t(41580);const y=({children:v})=>(0,e.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:v})},53979:(A,h,t)=>{t.d(h,{T:()=>E});var e=t(85893),o=t(67294),y=t(1565);const v=n=>{const s=(0,o.useRef)(null),[d,r]=(0,o.useState)(!0),c=([f])=>{r(f.isIntersecting)};return(0,o.useEffect)(()=>{const f=s.current,O=new IntersectionObserver(c,n);return f&&O.observe(s.current),()=>{f&&O.disconnect()}},[s,n]),[s,d]};var i=t(79698);const j=(n,s)=>{const d=(0,i.W)(s);(0,o.useLayoutEffect)(()=>{const r=new ResizeObserver(d);return Array.isArray(n)?n.forEach(c=>{c.current&&r.observe(c.current)}):n.current&&r.observe(n.current),()=>{r.disconnect()}},[n,d])};var l=t(41580),p=t(11047),g=t(75515);const E=n=>{const s=(0,o.useRef)(null),[d,r]=(0,o.useState)(null),[c,f]=v({root:null,rootMargin:"0px",threshold:0});return j(c,()=>{c.current&&r(c.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{s.current&&r(s.current.getBoundingClientRect())},[s]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:c,children:f&&(0,e.jsx)(x,{ref:s,...n})}),!f&&(0,e.jsx)(x,{...n,sticky:!0,width:d?.width})]})};E.displayName="HeaderLayout";const S=(0,y.ZP)(l.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,x=o.forwardRef(({navigationAction:n,primaryAction:s,secondaryAction:d,subtitle:r,title:c,sticky:f,width:O,...a},P)=>{const R=typeof r=="string";return f?(0,e.jsx)(S,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:O,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{children:[n&&(0,e.jsx)(l.x,{paddingRight:3,children:n}),(0,e.jsxs)(l.x,{children:[(0,e.jsx)(g.Z,{variant:"beta",as:"h1",...a,children:c}),R?(0,e.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:r}):r]}),d?(0,e.jsx)(l.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(p.k,{children:s?(0,e.jsx)(l.x,{paddingLeft:2,children:s}):void 0})]})}):(0,e.jsxs)(l.x,{ref:P,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(l.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{minWidth:0,children:[(0,e.jsx)(g.Z,{as:"h1",variant:"alpha",...a,children:c}),d?(0,e.jsx)(l.x,{paddingLeft:4,children:d}):null]}),s]}),R?(0,e.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:r}):r]})})},185:(A,h,t)=>{t.d(h,{o:()=>i});var e=t(85893),o=t(1565),y=t(41580);const v=(0,o.ZP)(y.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,i=({labelledBy:j="main-content-title",...l})=>(0,e.jsx)(v,{"aria-labelledby":j,as:"main",id:"main-content",tabIndex:-1,...l})}}]);
