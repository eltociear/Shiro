import{_ as m,j as e}from"./index-VDWwZU6U.js";import{I as a}from"./Gallery-st7_pMaY.js";import"./Divider-kVUI-438.js";import"./helper-H2rpVDS9.js";import"./utils-DxUuTa81.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-RM4ckxWD.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-RM4ckxWD.js","./index-VDWwZU6U.js","./index-56MkI4ud.css","./index-bjw6-69y.js","./helper-H2rpVDS9.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}