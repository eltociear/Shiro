import{_ as m,j as e}from"./index-oT9nI0PV.js";import{I as a}from"./Gallery-NYsfwRoO.js";import"./Divider-1rFCjeJ6.js";import"./helper-Oi49T1hx.js";import"./index-5dkmL82r.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-RA52qvRM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-RA52qvRM.js","./index-oT9nI0PV.js","./index-IJFDAUAX.css","./index-E01TxhRC.js","./LinkCard-d2-T82nk.js","./Divider-1rFCjeJ6.js","./helper-Oi49T1hx.js","./spring-OYvg0HZa.js","./index-5dkmL82r.js","./env-jTYMx4r5.js","./LinkCard-TdGDteo_.css","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}