import{_ as m,j as e}from"./index-HRfeE_7B.js";import{I as a}from"./Gallery-32-V3LXo.js";import"./Divider-sIhvLlX0.js";import"./helper-Oi49T1hx.js";import"./index-iAcAeRlm.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-ZMZX_aB9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-ZMZX_aB9.js","./index-HRfeE_7B.js","./index-rkaKEyS4.css","./index-GZJTCUEG.js","./LinkCard-gCgkDO82.js","./Divider-sIhvLlX0.js","./helper-Oi49T1hx.js","./spring-0AHu48BV.js","./index-iAcAeRlm.js","./env-jTYMx4r5.js","./LinkCard-TdGDteo_.css","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}