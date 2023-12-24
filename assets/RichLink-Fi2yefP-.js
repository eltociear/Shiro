import{j as e}from"./index-8pOXASz2.js";import{c as u}from"./helper-H2rpVDS9.js";import{i as w,g as x}from"./owner-YO0Rx1Bo.js";const I=t=>t.pathname.split("/").pop(),c="github.com",L=t=>t.hostname===c&&t.pathname.startsWith("/")&&t.pathname.split("/").length===3,M=t=>t.hostname===c&&t.pathname.includes("/pull/"),N=t=>t.hostname==="www.youtube.com"&&t.pathname.startsWith("/watch"),k=t=>t.hostname==="gist.github.com",z=t=>{const[n,,,s]=t.pathname.split("/");return t.hostname===c&&s==="commit"},_=t=>t.hostname===c&&t.pathname.split("/").length===2,A=t=>{const[n,,,s]=t.pathname.split("/");return t.hostname===c&&s==="blob"},P=t=>a(t)&&t.pathname.startsWith("/"),R=t=>a(t)&&t.pathname.split("/").length===2,d=t=>t.hostname===c,a=t=>t.hostname==="twitter.com"||t.hostname==="x.com",C=t=>t.hostname==="t.me",S=t=>t.hostname==="codesandbox.io"&&t.pathname.split("/").length===3,g=t=>t.hostname.includes("bilibili.com"),E=t=>{if(!w)return!1;const n=x(),s=n?new URL(n).hostname:"";return(t.hostname===location.hostname||s===t.hostname)&&["/posts/","/notes/"].some(i=>t.pathname.startsWith(i))},l=t=>t.hostname==="www.zhihu.com",D=t=>l(t)&&t.pathname.startsWith("/people/"),v=t=>t.hostname.includes("wikipedia.org"),V=t=>{const[n,s,i]=t.pathname.split("/");return{owner:s,id:i}},$=t=>{const n=t.pathname.split("/"),[s,i,r,o,m]=n,p=n.slice(4).join("/");return{owner:i,repo:r,type:o,id:m,afterTypeString:p}},q=t=>{const[n,s,i]=t.pathname.split("/");return{type:s,id:i}},O=t=>{const[n,s,i,r,o]=t.pathname.split("/");return{owner:s,repo:i,type:r,pr:o}},f=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 1 1 1.415 1.414L16.414 6H18.5A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.414ZM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.355L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8ZM8 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"})});function b(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8187 2.14687 13.6219 5.12812 14.6156C5.50312 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02812 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33438 10.425C2.925 10.4156 3.34688 10.9687 3.4875 11.1937C4.1625 12.3281 5.24063 12.0094 5.67188 11.8125C5.7375 11.325 5.93437 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29062 3.02813 5.61562 3.50625 5.09062C3.43125 4.90312 3.16875 4.13437 3.58125 3.10312C3.58125 3.10312 4.20938 2.90625 5.64375 3.87188C6.24375 3.70313 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70313 9.39375 3.87188C10.8281 2.89688 11.4563 3.10312 11.4563 3.10312C11.8688 4.13437 11.6063 4.90312 11.5313 5.09062C12.0094 5.61562 12.3 6.28125 12.3 7.10625C12.3 9.98437 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4938 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51563 14.6906 9.89063 14.6156C12.8531 13.6219 15 10.8094 15 7.5C15 3.35625 11.6438 0 7.5 0Z",fill:"currentColor"})})}function U(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"})})}function j(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"})})}function G(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"m14.97 18.95l-2.56-6.03c-1.02 1.99-2.14 4.08-3.1 6.03c-.01.01-.47 0-.47 0C7.37 15.5 5.85 12.1 4.37 8.68C4.03 7.84 2.83 6.5 2 6.5v-.45h5.06v.45c-.6 0-1.62.4-1.36 1.05c.72 1.54 3.24 7.51 3.93 9.03c.47-.94 1.8-3.42 2.37-4.47c-.45-.88-1.87-4.18-2.29-5c-.32-.54-1.13-.61-1.75-.61c0-.15.01-.25 0-.44l4.46.01v.4c-.61.03-1.18.24-.92.82c.6 1.24.95 2.13 1.5 3.28c.17-.34 1.07-2.19 1.5-3.16c.26-.65-.13-.91-1.21-.91c.01-.12.01-.33.01-.43c1.39-.01 3.48-.01 3.85-.02v.42c-.71.03-1.44.41-1.82.99L13.5 11.3c.18.51 1.96 4.46 2.15 4.9l3.85-8.83c-.3-.72-1.16-.87-1.5-.87v-.45l4 .03v.42c-.88 0-1.43.5-1.75 1.25c-.8 1.79-3.25 7.49-4.85 11.2h-.43Z"})})}function T(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.171H9.384a58.104 58.104 0 0 1-.112 3.797h2.712c.388.023.393 1.251.393 1.266H9.183a9.223 9.223 0 0 1-.408 2.102l.757-.604c.452.456 1.512 1.712 1.906 2.177c.473.681.063 2.081.063 2.081l-2.794-3.382c-.653 2.518-1.845 3.607-1.845 3.607c-.523.468-1.58.82-2.64.516c2.218-1.73 3.44-3.917 3.667-6.497H4.491c0-.015.197-1.243.806-1.266h2.71c.024-.32.086-3.254.086-3.797H6.598c-.136.406-.158.447-.268.753c-.594 1.095-1.603 1.122-1.907 1.155c.906-1.821 1.416-3.6 1.591-4.064c.425-1.124 1.671-1.125 1.671-1.125zM13.078 6h6.377v11.33h-2.573l-2.184 1.373l-.401-1.373h-1.219zm1.313 1.219v8.86h.623l.263.937l1.455-.938h1.456v-8.86z"})})}const h={GH:e.jsx(b,{className:"text-[#1D2127] dark:text-[#FFFFFF]"}),TW:e.jsx(j,{className:"text-[#1DA1F2]"}),TG:e.jsx(U,{className:"text-[#2AABEE]"}),BL:e.jsx(f,{className:"text-[#469ECF]"}),ZH:e.jsx(T,{className:"text-[#0084FF]"}),WI:e.jsx(G,{className:"text-current"})},y=t=>{var s;return(s=[{type:"GH",test:d},{type:"TW",test:a},{type:"TG",test:C},{type:"BL",test:g},{type:"ZH",test:l},{type:"WI",test:v}].find(i=>i.test(t)))==null?void 0:s.type},H=t=>{const{source:n,href:s,className:i}=t;let r=n;try{if(s){const o=new URL(s);r=y(o)??n}}catch{}return h[r]?e.jsx("span",{className:u("mr-1 align-text-bottom [&_svg]:inline",i),children:h[r]}):null},B={GH:"https://github.com/",TW:"https://twitter.com/",TG:"https://t.me/",ZH:"https://www.zhihu.com/people/",WI:"https://zh.wikipedia.org/wiki/"},Y=({name:t,source:n,href:s})=>{const i=B[n];return i?e.jsxs("span",{className:"mx-1 inline-flex items-center space-x-1 align-text-bottom",children:[e.jsx(H,{source:n}),e.jsx("a",{target:"_blank",rel:"noreferrer nofollow",href:s??`${i}${t}`,className:"underline-offset-2",children:t})]}):null};export{H as F,b as G,Y as R,C as a,R as b,_ as c,E as d,S as e,N as f,P as g,I as h,D as i,d as j,A as k,$ as l,z as m,M as n,O as o,q as p,k as q,V as r,L as s};
