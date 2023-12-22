import{_ as m,j as e}from"./index-0B0yB9ef.js";import{I as a}from"./Gallery-rc9SLUWk.js";import"./Divider-UA-mIJMt.js";import"./helper-Oi49T1hx.js";import"./index-5dkmL82r.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-xM7ZshqH.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-xM7ZshqH.js","./index-0B0yB9ef.js","./index-56MkI4ud.css","./index-gJ1Ncjnn.js","./helper-Oi49T1hx.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}