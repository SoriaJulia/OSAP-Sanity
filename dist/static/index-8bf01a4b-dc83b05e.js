import{r as u,j as i,ae as oe,a9 as U,aI as ae,af as ie,cn as ce,m as H,p as le,w as ue,ar as de,h as _,P as me,co as pe,H as fe,cp as he,cq as ye,cr as ge,av as Te,aY as Ie,x as V,a as A,a7 as k,a0 as ve,bu as Le,Z as x,Y as j,aa as Se,F as be,aQ as Pe,cs as Re,a5 as q,b as _e,k as Ce,l as xe,b4 as F,ct as Ee,cu as je,i as we,cv as De,cw as Oe,aO as N,d as Ae,cx as Fe,c5 as Me,c6 as $e,aS as ke,cy as qe,cz as Ne,by as B,bA as Be,cA as We,bp as Ye,aT as Ue,b5 as He,cB as Ve,cC as ze,cD as Ge,bq as Ke}from"./sanity-6a0bd3a6.js";import{useDeskTool as Xe,useDeskToolSetting as W,Delay as Qe}from"./index-63f13ccc-091597c9.js";import{P as Ze}from"./PaneItem-7d791ca0-980ae8a6.js";import"./index-74580352.js";const Y=100,M=2e3,z={by:[{field:"_updatedAt",direction:"desc"}]},Je={};function et(e,s){return e._id?V(e._id):"item-".concat(s)}function tt(e){return De(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const nt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function st(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(nt);if(!t)return null;const n=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(n[0]==="$"){const r=n.slice(1),c=s[r];return typeof c=="string"?c:null}return n}function rt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function ot(e){return e.map(s=>[at(s),(s.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function at(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function it(e,s){const t=e.by.map(n=>{if(n.mapWith)return n;const r=ct(s,n.field);return r?ut(r,"datetime")?{...n,mapWith:"dateTime"}:r.jsonType==="string"?{...n,mapWith:"lower"}:n:n});return t.every((n,r)=>n===e.by[r])?e:{...e,by:t}}function ct(e,s){const t=fe(s);let n=e;for(const r of t){if(!n)return;if(typeof r=="string"){n=lt(n,r);continue}if(!(he(r)||ye(r))||n.jsonType!=="array")return;const[o,a]=n.of||[];if(a||!o)return;if(!ge(o)){n=o;continue}const[m,p]=o.to||[];if(p||!m)return;n=m}return n}function lt(e,s){if(!("fields"in e))return;const t=e.fields.find(n=>n.name===s);return t?t.type:void 0}function ut(e,s){let t=e.type;for(;t;){if(t.name===s||!t.type&&t.jsonType===s)return!0;t=t.type}return!1}function dt(e){const{childItemId:s,error:t,filterIsSimpleTypeContraint:n,fullList:r,isActive:c,isLoading:o,items:a,layout:m,onListChange:p,onRetry:l,showIcons:y}=e,S=H(),{collapsed:v}=Te(),{collapsed:L,index:g}=Ie(),[b,P]=u.useState(!1);u.useEffect(()=>{if(L)return;const d=setTimeout(()=>{P(!0)},0);return()=>{clearTimeout(d)}},[L]);const T=u.useCallback(d=>{const I=V(d._id),f=s===I;return i(Ze,{icon:y===!1?!1:void 0,id:I,pressed:!c&&f,selected:c&&f,layout:m,schemaType:S.get(d._type),value:d})},[s,c,m,S,y]),h=u.useMemo(()=>{if(!b)return null;if(t)return i(A,{align:"center",direction:"column",height:"fill",justify:"center",children:i(k,{width:1,children:_(ve,{paddingX:4,paddingY:5,space:4,children:[i(Le,{as:"h3",children:"Could not fetch list items"}),_(x,{as:"p",children:["Error: ",i("code",{children:t.message})]}),l&&i(j,{children:i(U,{icon:Se,onClick:l,text:"Retry",tone:"primary"})})]})})});if(a===null)return i(A,{align:"center",direction:"column",height:"fill",justify:"center",children:i(Qe,{ms:300,children:_(be,{children:[i(Pe,{muted:!0}),i(j,{marginTop:3,children:i(x,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!o&&a.length===0)return i(A,{align:"center",direction:"column",height:"fill",justify:"center",children:i(k,{width:1,children:i(j,{paddingX:4,paddingY:5,children:i(x,{align:"center",muted:!0,size:2,children:n?"No documents of this type":"No matching documents"})})})});const d=r&&a.length===M;return _(j,{padding:2,children:[a.length>0&&i(Re,{gap:1,getItemKey:et,items:a,renderItem:T,onChange:p},"".concat(g,"-").concat(L)),o&&i(q,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:i(x,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&i(q,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:_(x,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",M," documents"]})})]})},[t,n,r,p,o,a,l,T,b,L,g]);return i(_e,{overflow:v?void 0:"auto",children:h})}const G=u.memo(e=>{let{index:s,initialValueTemplates:t=[],menuItems:n=[],menuItemGroups:r=[],setLayout:c,setSortOrder:o,title:a}=e;const{features:m}=Xe(),p=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{o(l)}}),[c,o]);return i(oe,{backButton:m.backButton&&s>0&&i(U,{as:ae,"data-as":"a",icon:ie,mode:"bleed"}),title:a,actions:i(ce,{initialValueTemplateItems:t,actionHandlers:p,menuItemGroups:r,menuItems:n})})});G.displayName="DocumentListPaneHeader";const mt={result:null,error:!1},pt=e=>({result:{documents:e},loading:!1,error:!1}),ft=e=>({result:null,loading:!1,error:e}),ht=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new Oe,n=t.next.bind(t);return e.pipe(N(o=>({client:o.client,query:o.query,params:o.params})),Ae(Fe),Me(1),$e()).pipe(ke(o=>{const a=qe(o.client,o.query,o.params,s).pipe(N(pt),Ne());return B(F({loading:!0}).pipe(Be(400),We(a)),a)})).pipe(Ye(mt),Ue((o,a)=>He(F(ft(o)),B(Ve(window,"online"),t).pipe(ze(1),Ge(a)))),Ke((o,a)=>({...o,...a,onRetry:n})))};function yt(e){var s;const{apiVersion:t,filter:n,params:r,sortOrder:c}=e,o=Ce(xe),[a,m]=u.useState(!1),p=u.useRef(a),[l,y]=u.useState(null),S=(l==null?void 0:l.error)||null,v=(l==null?void 0:l.loading)||l===null,L=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,b=u.useMemo(()=>g?tt(g):null,[g]),P=u.useMemo(()=>{const h=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),f=(c==null?void 0:c.by)||[],C=a?M:Y,R=f.length>0?f:z.by,E=ot(R);if(h){const w=d.concat(h).join(",");return["*[".concat(n,"] {").concat(w,"}"),"order(".concat(E,") [0...").concat(C,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(n,"]|order(").concat(E,")[0...").concat(C,"]{").concat(I,"}")},[n,a,c]),T=u.useCallback(h=>{let{toIndex:d}=h;v||p.current||d>=Y/2&&(m(!0),p.current=!0)},[v]);return u.useEffect(()=>{const h=a?f=>!!f.result:()=>!0;y(f=>f?{...f,loading:!0}:null);const I=ht(F({client:o,query:P,params:r}),{apiVersion:t,tag:"desk.document-list"}).pipe(Ee(h)).subscribe(y);return()=>I.unsubscribe()},[t,o,a,P,r]),u.useEffect(()=>{y(null),m(!1),p.current=!1},[n,r,c,t]),{error:S,fullList:a,handleListChange:T,isLoading:v,items:b,onRetry:L}}const $=[];function gt(e){const s=u.useRef(e);return je(s.current,e)||(s.current=e),s.current}const Tt=e=>{const{menuItems:s,sortOrder:t,layout:n}=e;return s==null?void 0:s.map(r=>{var c,o,a,m,p,l;return(c=r.params)!=null&&c.layout?{...r,selected:n===((o=r.params)==null?void 0:o.layout)}:(a=r==null?void 0:r.params)!=null&&a.extendedProjection?{...r,selected:(t==null?void 0:t.extendedProjection)===((m=r==null?void 0:r.params)==null?void 0:m.extendedProjection)}:(p=r==null?void 0:r.params)!=null&&p.by?{...r,selected:we(t==null?void 0:t.by,((l=r==null?void 0:r.params)==null?void 0:l.by)||$)}:{...r,selected:!1}})},bt=u.memo(function(s){const{childItemId:t,index:n,isActive:r,isSelected:c,pane:o,paneKey:a}=s,m=H(),{name:p}=le(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:S=$,menuItems:v,menuItemGroups:L,options:g,title:b}=o,{apiVersion:P,defaultOrdering:T=$,filter:h}=g,d=gt(g.params||Je),I=o.source,f=u.useMemo(()=>st(h,d),[h,d]),C=(y==null?void 0:y.showIcons)!==!1,[R,E]=W(f,"layout",l),w=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:z,[T]),[D,K]=W(f,"sortOrder",w),X=f&&D?it(D,m.get(f)):D,O=ue(X),Q=rt(h),{error:Z,fullList:J,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=yt({filter:h,params:d,sortOrder:O,apiVersion:P}),re=u.useMemo(()=>Tt({menuItems:v,sortOrder:O,layout:R}),[R,v,O]);return i(de,{name:I||p,children:_(me,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:c,children:[pe,i(G,{index:n,initialValueTemplates:S,menuItems:re,menuItemGroups:L,setLayout:E,setSortOrder:K,title:b}),i(dt,{childItemId:t,error:Z,filterIsSimpleTypeContraint:Q,fullList:J,isActive:r,isLoading:te,items:ne,layout:R,onListChange:ee,onRetry:se,showIcons:C})]})})});export{bt as default};
