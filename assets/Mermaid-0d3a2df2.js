import{r as t,_ as x,j as n}from"./index-d5de9a17.js";import{y as I}from"./Markdown-72f2f6f7.js";import{u as w,F as k}from"./Gallery-2f4913ae.js";import"./helper-cbdea6f1.js";import"./spring-668e5fdc.js";import"./index-94d83f10.js";import"./LinkCard.module-12ebf4d8.js";import"./Divider-ef4746be.js";import"./env-d87a2338.js";import"./Collapse-377e2165.js";import"./RichLink-abed7247.js";const N=o=>{const[E,m]=t.useState(!0),[v,a]=t.useState(""),[c,u]=t.useState(""),[h,l]=t.useState(),[_,f]=t.useState(),g=I().theme==="dark";t.useEffect(()=>{x(()=>import("./mermaid.core-e2e3e9e4.js").then(r=>r.b4),["./mermaid.core-e2e3e9e4.js","./index-d5de9a17.js","./index-37946cb3.css","./LinkCard.module-12ebf4d8.js","./Divider-ef4746be.js","./helper-cbdea6f1.js","./env-d87a2338.js","./spring-668e5fdc.js","./index-94d83f10.js","./LinkCard-b879cb74.css"],import.meta.url).then(async r=>{r.default.initialize({theme:g?"dark":"default"})})},[g]);const d=t.useId().split(":").join("");t.useEffect(()=>{if(!o.content)return;a(""),m(!0);let r=!1;x(()=>import("./mermaid.core-e2e3e9e4.js").then(i=>i.b4),["./mermaid.core-e2e3e9e4.js","./index-d5de9a17.js","./index-37946cb3.css","./LinkCard.module-12ebf4d8.js","./Divider-ef4746be.js","./helper-cbdea6f1.js","./env-d87a2338.js","./spring-668e5fdc.js","./index-94d83f10.js","./LinkCard-b879cb74.css"],import.meta.url).then(async i=>{var p;const y=i.default;let s;try{s=await y.render(`mermaid-${d}`,o.content)}catch(e){(p=document.getElementById(`dmermaid-${d}`))==null||p.remove(),e instanceof Error&&a(e.message),u(""),l(void 0),f(void 0)}if(!r){if(s){u(s.svg);const e=s.svg.match(/viewBox="[^"]*\s([\d.]+)\s([\d.]+)"/);e!=null&&e[1]&&(e!=null&&e[2])&&(l(parseInt(e==null?void 0:e[1])),f(parseInt(e==null?void 0:e[2]))),a("")}return m(!1),()=>{r=!0}}})},[d,o.content]);const{w:S}=w(),b=new TextEncoder().encode(c),j=`data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(b)))}`;return E?n.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-slate-100 text-sm dark:bg-neutral-800",children:"Mermaid Loading..."}):c?n.jsx("div",{children:n.jsx(k,{containerWidth:S,src:j,width:h,height:_})}):n.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-red-100 text-sm",children:v||"Error"})};export{N as Mermaid};