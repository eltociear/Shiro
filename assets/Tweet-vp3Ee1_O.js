import{_ as m,j as e}from"./index-0kVIQtLJ.js";import{I as a}from"./Gallery-it7BJC_C.js";import"./Divider-gFOVdBFG.js";import"./helper-Oi49T1hx.js";import"./index-iAcAeRlm.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-A15BYsao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-A15BYsao.js","./index-0kVIQtLJ.js","./index-rkaKEyS4.css","./index-edn88EDb.js","./LinkCard-pfXnT0j8.js","./Divider-gFOVdBFG.js","./helper-Oi49T1hx.js","./spring-Gqn2h2Gt.js","./index-iAcAeRlm.js","./env-jTYMx4r5.js","./LinkCard-TdGDteo_.css","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}