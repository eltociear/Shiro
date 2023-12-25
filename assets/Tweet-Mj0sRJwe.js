import{_ as m,j as e}from"./index-mxrb5MHF.js";import{I as a}from"./Gallery-4ahMU8Bn.js";import"./Divider-rwaxxRao.js";import"./helper-H2rpVDS9.js";import"./utils-aJqR1RFS.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-encvxbVQ.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-encvxbVQ.js","./index-mxrb5MHF.js","./index-56MkI4ud.css","./index-rpZ-FivL.js","./helper-H2rpVDS9.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}