import{m as b,a6 as D,v as x,bL as _,r as o,cE as F,j as e,cF as L,cG as k,Z as T,cH as j,cI as E,cJ as M,cK as R,h as p,a8 as W}from"./sanity-54b8457a.js";const B=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(W,{})});function G(t){const{layout:n,value:s}=t;return e(k,{...B(s._id,s._type),layout:n})}function P(t,n,s){return t===!1?!1:t||n&&n.icon||s||!1}function K(t){const{icon:n,id:s,layout:i="default",pressed:v,schemaType:a,selected:r,title:u,value:c}=t,I=b(),l=D(),{ChildLink:d}=x(),m=_(s),f=!!(a&&a.name&&I.get(a.name)),[y,h]=o.useState(!1),g=o.useMemo(()=>c&&F(c)?!a||!f?e(G,{value:c}):e(L,{documentPreviewStore:l,icon:P(n,a,M),layout:i,schemaType:a,value:c,presence:m}):e(k,{status:e(T,{muted:!0,children:e(j,{})}),icon:P(n,a,R),layout:i,title:u}),[l,f,n,i,a,u,c,m]),C=o.useMemo(()=>function(w){return e(d,{...w,childId:s})},[d,s]),S=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(E,{__unstable_focusRing:!0,as:C,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:S,pressed:v,selected:r||y,tone:"inherit",children:g})}export{K as P};
