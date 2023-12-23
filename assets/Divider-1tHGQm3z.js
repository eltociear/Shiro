import{r as u,R as M,j as g}from"./index-1EKZBxmd.js";import{c as j}from"./helper-H2rpVDS9.js";var p=new Map,b=new WeakMap,S=0,V=void 0;function L(e){return e?(b.has(e)||(S+=1,b.set(e,S.toString())),b.get(e)):"0"}function _(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?L(e.root):e[t]}`).toString()}function z(e){let t=_(e),r=p.get(t);if(!r){const n=new Map;let o;const a=new IntersectionObserver(i=>{i.forEach(s=>{var c;const v=s.isIntersecting&&o.some(f=>s.intersectionRatio>=f);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=v),(c=n.get(s.target))==null||c.forEach(f=>{f(v,s)})})},e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:n},p.set(t,r)}return r}function A(e,t,r={},n=V){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const c=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:o,observer:a,elements:i}=z(r);let s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),a.unobserve(e)),i.size===0&&(a.disconnect(),p.delete(o))}}function C({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:o,triggerOnce:a,skip:i,initialInView:s,fallbackInView:c,onChange:v}={}){var f;const[h,D]=u.useState(null),m=u.useRef(),[w,y]=u.useState({inView:!!s,entry:void 0});m.current=v,u.useEffect(()=>{if(i||!h)return;let l;return l=A(h,(E,R)=>{y({inView:E,entry:R}),m.current&&m.current(E,R),R.isIntersecting&&a&&l&&(l(),l=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:r,delay:t},c),()=>{l&&l()}},[Array.isArray(e)?e.toString():e,h,o,n,a,i,r,c,t]);const x=(f=w.entry)==null?void 0:f.target,I=u.useRef();!h&&x&&!a&&!i&&I.current!==x&&(I.current=x,y({inView:!!s,entry:void 0}));const d=[D,w.inView,w.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}const $=e=>{const{placeholder:t=null,offset:r=0,...n}=e,{ref:o,inView:a}=C({triggerOnce:!0,rootMargin:`${r||0}px`,...n}),[i,s]=M.useState(!1);return u.useEffect(()=>{a&&s(!0)},[a]),g.jsxs(g.Fragment,{children:[!i&&g.jsx("span",{"data-hide-print":!0,"data-testid":"lazyload-indicator",ref:o}),a?e.children:t]})},T=()=>{const e=u.useRef(!1);return u.useEffect(()=>()=>{e.current=!0},[]),e},B=({width:e,height:t,max:r})=>{if(e===0||t===0)throw new Error("Invalid image size");const{width:n,height:o}=r,a=n/e||1,i=o/t||1,s=Math.min(a,i,1);return{width:e*s,height:t*s}};function W(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=1,t.height=1,r.drawImage(e,0,0,1,1);const n=r.getImageData(0,0,1,1).data;return`#${((1<<24)+(n[0]<<16)+(n[1]<<8)+n[2]).toString(16).slice(1)}`}const F=e=>{const{className:t,...r}=e;return g.jsx("hr",{className:j("my-4 h-[0.5px] border-0 bg-always-black !bg-opacity-30 dark:bg-always-white",t),...r})},H=e=>{const{className:t,...r}=e;return g.jsx("span",{className:j("mx-4 inline-block h-full w-[0.5px] select-none bg-always-black !bg-opacity-30 text-transparent dark:bg-always-white",t),...r,children:"w"})};export{F as D,$ as L,C as a,H as b,B as c,W as g,T as u};
