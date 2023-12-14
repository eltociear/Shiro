import{_ as m,j as e}from"./index-YtW5Ehdx.js";import{I as a}from"./Gallery-25fytDoO.js";import"./Divider-o4AsWQ-1.js";import"./helper-Oi49T1hx.js";import"./index-iAcAeRlm.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-F9S-VaGA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-F9S-VaGA.js","./index-YtW5Ehdx.js","./index-VR966d7N.css","./index-foj2t8n5.js","./LinkCard-p2kPdmJq.js","./Divider-o4AsWQ-1.js","./helper-Oi49T1hx.js","./spring-48DFd_uj.js","./index-iAcAeRlm.js","./env-jTYMx4r5.js","./LinkCard-TdGDteo_.css","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}