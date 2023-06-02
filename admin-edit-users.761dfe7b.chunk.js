"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4263],{50935:(I,l,e)=>{e.d(l,{R:()=>c});var t=e(88767),a=e(73599),s=e(80129);function c(o={},u={}){const{id:n="",...m}=o,i=(0,s.stringify)(m,{encode:!1}),{get:d}=(0,a.kY)(),{data:r,isError:y,isLoading:C,refetch:A}=(0,t.useQuery)(["users",n,m],async()=>{const{data:{data:D}}=await d(`/admin/users/${n}${i?`?${i}`:""}`);return D},u);let M=[];return n&&r?M=[r]:Array.isArray(r?.results)&&(M=r.results),{users:M,pagination:r?.pagination??null,isLoading:C,isError:y,refetch:A}}},22282:(I,l,e)=>{e.r(l),e.d(l,{default:()=>Ee});var t=e(67294),a=e(73599),s=e(16550),c=e(87751),o=e(87462),u=e(15861),n=e(70885),m=e(64687),i=e.n(m),d=e(86896),r=e(45697),y=e.n(r),C=e(78718),A=e.n(C),M=e(27361),D=e.n(M),Z=e(57557),R=e.n(Z),Q=e(14916),F=e(185),j=e(53979),N=e(29728),O=e(49066),W=e(41580),K=e(11047),H=e(75515),X=e(11276),Y=e(74571),h=e(85018),k=e(67109),J=e(19631);const ie=async(S,z)=>{const{put:L}=(0,a.tg)(),{data:B}=await L(`/admin/users/${S}`,z);return B.data},de=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var ce=e(17405),me=e(81288),ue=e(50935),ge=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),q=["email","firstname","lastname","username","isActive","roles"],ee=function(z){var L=z.canUpdate,B=(0,d.Z)(),g=B.formatMessage,b=(0,s.$B)("/settings/users/:id"),$=b.params.id,fe=(0,s.k6)(),ve=fe.push,Me=(0,a.L7)(),he=Me.setUserDisplayName,G=(0,a.lm)(),te=(0,a.o1)(),Pe=te.lockApp,ye=te.unlockApp;(0,a.go)();var ae=(0,ue.R)({id:$},{onError:function(f){var p=f.response.status;p===403?(G({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),ve("/")):G({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Le=(0,n.Z)(ae.users,1),P=Le[0],se=ae.isLoading,Ae=function(){var E=(0,u.Z)(i().mark(function f(p,U){var x,w,T,_,re;return i().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return Pe(),v.prev=1,v.next=4,ie($,R()(p,"confirmPassword"));case 4:x=v.sent,G({type:"success",message:g({id:"notification.success.saved",defaultMessage:"Saved"})}),w=a.I8.getUserInfo(),$.toString()===w.id.toString()&&(a.I8.setUserInfo(x),T=D()(p,"username")||(0,J.Pp)(p.firstname,p.lastname),he(T)),U.setValues(A()(p,q)),v.next=17;break;case 11:v.prev=11,v.t0=v.catch(1),_=(0,J.Iz)(v.t0.response.data),re=Object.keys(_).reduce(function(oe,le){return oe[le]=_[le].id,oe},{}),U.setErrors(re),G({type:"warning",message:D()(v.t0,"response.data.error.message","notification.error")});case 17:ye();case 18:case"end":return v.stop()}},f,null,[[1,11]])}));return function(p,U){return E.apply(this,arguments)}}(),De=se?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},V=Object.keys(A()(P,q)).reduce(function(E,f){return f==="roles"?(E[f]=(P?.roles||[]).map(function(p){var U=p.id;return U}),E):(E[f]=P?.[f],E)},{}),Oe=V.username||(0,J.Pp)(V.firstname,V.lastname),ne=g(De,{name:Oe});return se?t.createElement(F.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"Users"}),t.createElement(j.T,{primaryAction:t.createElement(N.z,{disabled:!0,startIcon:t.createElement(h.Z,null),type:"button",size:"L"},g({id:"global.save",defaultMessage:"Save"})),title:ne,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(k.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},g({id:"global.back",defaultMessage:"Back"}))}),t.createElement(O.D,null,t.createElement(a.dO,null))):t.createElement(F.o,null,t.createElement(a.SL,{name:"Users"}),t.createElement(Q.J9,{onSubmit:Ae,initialValues:V,validateOnChange:!1,validationSchema:ce.YM},function(E){var f=E.errors,p=E.values,U=E.handleChange,x=E.isSubmitting;return t.createElement(a.l0,null,t.createElement(j.T,{primaryAction:t.createElement(N.z,{disabled:x||!L,startIcon:t.createElement(h.Z,null),loading:x,type:"submit",size:"L"},g({id:"global.save",defaultMessage:"Save"})),title:ne,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(k.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},g({id:"global.back",defaultMessage:"Back"}))}),t.createElement(O.D,null,P?.registrationToken&&t.createElement(W.x,{paddingBottom:6},t.createElement(ge,{registrationToken:P.registrationToken})),t.createElement(K.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(W.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(K.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(H.Z,{variant:"delta",as:"h2"},g({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(X.r,{gap:5},de.map(function(w){return w.map(function(T){return t.createElement(Y.P,(0,o.Z)({key:T.name},T.size),t.createElement(a.jm,(0,o.Z)({},T,{disabled:!L,error:f[T.name],onChange:U,value:p[T.name]||""})))})})))),t.createElement(W.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(K.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(H.Z,{variant:"delta",as:"h2"},g({id:"global.roles",defaultMessage:"User's role"})),t.createElement(X.r,{gap:5},t.createElement(Y.P,{col:6,xs:12},t.createElement(me.Z,{disabled:!L,error:f.roles,onChange:U,value:p.roles}))))))))}))};ee.propTypes={canUpdate:y().bool.isRequired};const pe=ee,Ee=()=>{const S=(0,a.lm)(),z=(0,t.useMemo)(()=>({read:c.Z.settings.users.read,update:c.Z.settings.users.update}),[]),{isLoading:L,allowedActions:{canRead:B,canUpdate:g}}=(0,a.ss)(z),{state:b}=(0,s.TH)(),$=b?.from??"/";return(0,t.useEffect)(()=>{L||!B&&!g&&S({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[L,B,g,S]),L?t.createElement(a.dO,null):!B&&!g?t.createElement(s.l_,{to:$}):t.createElement(pe,{canUpdate:g})}},82464:(I,l,e)=>{e.d(l,{Z:()=>i});var t=e(67294),a=e(45697),s=e.n(a),c=e(12028),o=e(73599),u=e(65186),n=e(86896);const m=({children:d,target:r})=>{const y=(0,o.lm)(),{formatMessage:C}=(0,n.Z)(),{copy:A}=(0,o.VP)(),M=C({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),D=async()=>{await A(r)&&y({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(o.Y_,{endAction:t.createElement(c.h,{label:M,noBorder:!0,icon:t.createElement(u.Z,null),onClick:D}),title:r,titleEllipsis:!0,subtitle:d,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};m.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const i=m},31605:(I,l,e)=>{e.d(l,{Z:()=>m});var t=e(67294),a=e(86896),s=e(45697),c=e.n(s),o=e(63871),u=e(82464);const n=({registrationToken:i})=>{const{formatMessage:d}=(0,a.Z)(),r=`${window.location.origin}${o.Z}auth/register?registrationToken=${i}`;return t.createElement(u.Z,{target:r},d({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:c().string};const m=n},81288:(I,l,e)=>{e.d(l,{Z:()=>D});var t=e(67294),a=e(45697),s=e.n(a),c=e(86896),o=e(40619),u=e(82562),n=e(88767),m=e(1565),i=e(86647),d=e(73599);const r=m.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,y=m.ZP.div`
  animation: ${r} 2s infinite linear;
`,C=()=>t.createElement(y,null,t.createElement(i.Z,null)),A=async()=>{const{get:Z}=(0,d.tg)(),{data:R}=await Z("/admin/roles");return R.data},M=({disabled:Z,error:R,onChange:Q,value:F})=>{const{status:j,data:N}=(0,n.useQuery)(["roles"],A,{staleTime:5e4}),{formatMessage:O}=(0,c.Z)(),W=R?O({id:R,defaultMessage:R}):"",K=O({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),H=O({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),X=O({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Y=j==="loading"?t.createElement(C,null):void 0;return t.createElement(o.P,{id:"roles",disabled:Z,error:W,hint:H,label:K,name:"roles",onChange:h=>{Q({target:{name:"roles",value:h}})},placeholder:X,multi:!0,startIcon:Y,value:F.map(h=>h.toString()),withTags:!0,required:!0},(N||[]).map(h=>t.createElement(u.W,{key:h.id,value:h.id.toString()},O({id:`global.${h.code}`,defaultMessage:h.name}))))};M.defaultProps={disabled:!1,error:void 0},M.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const D=M},17405:(I,l,e)=>{e.d(l,{YM:()=>i,Rw:()=>o});var t=e(87561),a=e(73599);const s={firstname:t.Z_().trim().required(a.I0.required),lastname:t.Z_(),email:t.Z_().email(a.I0.email).lowercase().required(a.I0.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.I0.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(d,r)=>d?r.required(a.I0.required):r)},o={...s,currentPassword:t.Z_().when(["password","confirmPassword"],(d,r,y)=>d||r?y.required(a.I0.required):y),preferedLanguage:t.Z_().nullable()},n={roles:t.IX().min(1,a.I0.required).required(a.I0.required)},i=t.Ry().shape({...s,isActive:t.Xg(),...n})},12201:(I,l,e)=>{e.d(l,{Z:()=>m});var t=e(67294),a=e(86896),s=e(45697),c=e.n(s),o=e(63871),u=e(82464);const n=({registrationToken:i})=>{const{formatMessage:d}=(0,a.Z)();return i?t.createElement(u.Z,{target:`${window.location.origin}${o.Z}auth/register?registrationToken=${i}`},d({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(u.Z,{target:`${window.location.origin}${o.Z}auth/login`},d({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:c().string};const m=n},67109:(I,l,e)=>{e.d(l,{Z:()=>s});var t=e(85893);const a=c=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),s=a}}]);
