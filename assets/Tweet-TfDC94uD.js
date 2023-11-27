import{_ as m,j as e}from"./index-qwU-jOla.js";import{I as a}from"./Gallery-LHbVOHcQ.js";import"./Divider-Xk933t4v.js";import"./helper-ZdHdqNRt.js";import"./index-iAcAeRlm.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-QcehyUU2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-QcehyUU2.js","./index-qwU-jOla.js","./index-TXVuxgf3.css","./index-qG3KLtnX.js","./LinkCard-mR3vJxsp.js","./Divider-Xk933t4v.js","./helper-ZdHdqNRt.js","./spring-Uc5SlGKZ.js","./index-iAcAeRlm.js","./env-jTYMx4r5.js","./LinkCard-TdGDteo_.css","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}