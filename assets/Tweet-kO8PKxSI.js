import{_ as m,j as e}from"./index-V7kCl7XU.js";import{I as a}from"./Gallery-YVvmNggF.js";import"./Divider-F1DnoWhm.js";import"./helper-H2rpVDS9.js";import"./utils-hIfdWIGJ.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-R52AaWJL.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-R52AaWJL.js","./index-V7kCl7XU.js","./index-56MkI4ud.css","./index-aW85_E-k.js","./helper-H2rpVDS9.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}