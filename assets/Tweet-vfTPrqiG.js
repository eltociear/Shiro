import{_ as m,j as e}from"./index-ZT6B9tma.js";import{I as a}from"./Gallery-lqCeoYzY.js";import"./Divider-oiFI8QNN.js";import"./helper-Oi49T1hx.js";import"./index-iAcAeRlm.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-Vd8bPOS6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-Vd8bPOS6.js","./index-ZT6B9tma.js","./index--GFDkD6D.css","./index-BjJLoqGe.js","./LinkCard-AoS5ovLA.js","./Divider-oiFI8QNN.js","./helper-Oi49T1hx.js","./spring-451nDyyt.js","./index-iAcAeRlm.js","./env-jTYMx4r5.js","./LinkCard-TdGDteo_.css","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}