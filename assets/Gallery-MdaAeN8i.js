import{r as f,j as l,R as he,i as q}from"./index-_vmuberR.js";import{a as D,j as Te,u as ge,s as He,b as Pe,L as _e,D as ce,c as ke}from"./Divider-C5DhtwMK.js";import{c as pe,a as W}from"./helper-Oi49T1hx.js";import{s as Me}from"./index-iAcAeRlm.js";const We=t=>{const e=f.useRef();return e.current||(e.current=t()),e.current},ve=f.createContext(D([])),Pt=({children:t,images:e})=>{const n=We(()=>D(e));return f.useEffect(()=>{Te.set(n,e)},[e]),l.jsx(ve.Provider,{value:n,children:t})},ne=t=>ge(He(f.useContext(ve),f.useCallback(e=>e.find(n=>n.src===t),[t]))),De=typeof window<"u"?f.useLayoutEffect:f.useEffect,Ke=({contexts:t,children:e})=>t.reduceRight((n,r)=>he.cloneElement(r,{children:n}),e),J=t=>{const e=f.useRef(t);return f.useEffect(()=>{e.current=t},[t]),e};D(!1);const Fe=(t,e,n={})=>{let r,a,i;const u=()=>{r=void 0,a!==void 0&&(t.apply(void 0,a),a=void 0,i=Date.now(),r=setTimeout(u,e))};return function(...s){const g=Date.now();i===void 0&&n.leading===!1&&(i=g);const h=e-(g-(i??0));h<=0||h>e?(r!==void 0&&clearTimeout(r),t.apply(this,s),i=g,r=setTimeout(u,e)):n.trailing!==!1&&(a=s,r===void 0&&(r=setTimeout(u,h)))}},_t=t=>t[Math.floor(Math.random()*t.length)];D(0);const Ue=D(null),$e=()=>ge(Ue),[Ge,qe,Be]=q(void 0),[Ye,Ze,Ve]=q({h:0,w:0}),[Xe,kt,Qe]=q({x:0,y:0}),[Je,Mt,et]=q(!1),tt=[l.jsx(Ge,{},"ArticleElementProviderInternal"),l.jsx(Ye,{},"ElementSizeProviderInternal"),l.jsx(Xe,{},"ElementPositsionProviderInternal"),l.jsx(Je,{},"IsEOArticleElementProviderInternal")],Wt=({children:t,className:e})=>l.jsxs(Ke,{contexts:tt,children:[l.jsx(nt,{}),l.jsx(ye,{className:e,children:t})]}),nt=()=>{const t=Ve(),e=Qe(),n=qe();return De(()=>{if(!n)return;const{height:r,width:a,x:i,y:u}=n.getBoundingClientRect();t({h:r,w:a}),e({x:i,y:u});const s=new ResizeObserver(g=>{const h=g[0],{height:I,width:O,x:A,y:S}=h.contentRect;t({h:I,w:O}),e({x:A,y:S})});return s.observe(n),()=>{s.unobserve(n),s.disconnect()}},[n]),null},ye=f.memo(({children:t,className:e})=>{const n=Be();return l.jsxs("div",{className:pe("relative",e),ref:n,children:[t,l.jsx(ot,{})]})});ye.displayName="ArticleElementProviderContent";const ot=()=>{const t=$e(),e=J(t),n=et(),r=f.useRef(null);return f.useEffect(()=>{if(!r.current)return;const a=r.current,i=new IntersectionObserver(u=>{const s=u[0];!s.isIntersecting&&e.current==="down"||n(s.isIntersecting)},{rootMargin:"0px 0px 0px 0px"});return i.observe(a),()=>{i.unobserve(a),i.disconnect()}},[]),l.jsx("div",{ref:r})};var rt=typeof window>"u"||"Deno"in window;function Dt(){}function Kt(t,e){return typeof t=="function"?t(e):t}function Ft(t){return typeof t=="number"&&t>=0&&t!==1/0}function Ut(t,e){return Math.max(t+(e||0)-Date.now(),0)}function $t(t,e){const{type:n="all",exact:r,fetchStatus:a,predicate:i,queryKey:u,stale:s}=t;if(u){if(r){if(e.queryHash!==it(u,e.options))return!1}else if(!oe(e.queryKey,u))return!1}if(n!=="all"){const g=e.isActive();if(n==="active"&&!g||n==="inactive"&&g)return!1}return!(typeof s=="boolean"&&e.isStale()!==s||typeof a<"u"&&a!==e.state.fetchStatus||i&&!i(e))}function Gt(t,e){const{exact:n,status:r,predicate:a,mutationKey:i}=t;if(i){if(!e.options.mutationKey)return!1;if(n){if(ee(e.options.mutationKey)!==ee(i))return!1}else if(!oe(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||a&&!a(e))}function it(t,e){return((e==null?void 0:e.queryKeyHashFn)||ee)(t)}function ee(t){return JSON.stringify(t,(e,n)=>te(n)?Object.keys(n).sort().reduce((r,a)=>(r[a]=n[a],r),{}):n)}function oe(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!oe(t[n],e[n])):!1}function ze(t,e){if(t===e)return t;const n=le(t)&&le(e);if(n||te(t)&&te(e)){const r=n?t.length:Object.keys(t).length,a=n?e:Object.keys(e),i=a.length,u=n?[]:{};let s=0;for(let g=0;g<i;g++){const h=n?g:a[g];u[h]=ze(t[h],e[h]),u[h]===t[h]&&s++}return r===i&&s===r?t:u}return e}function qt(t,e){if(t&&!e||e&&!t)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function le(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function te(t){if(!de(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!de(n)||!n.hasOwnProperty("isPrototypeOf"))}function de(t){return Object.prototype.toString.call(t)==="[object Object]"}function at(t){return new Promise(e=>{setTimeout(e,t)})}function Bt(t){at(0).then(t)}function Yt(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?ze(t,e):e}function Zt(t){return t}function Vt(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function Xt(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},U=function(e){return e.tagName==="IMG"},st=function(e){return NodeList.prototype.isPrototypeOf(e)},$=function(e){return e&&e.nodeType===1},ue=function(e){var n=e.currentSrc||e.src;return n.substr(-4).toLowerCase()===".svg"},me=function(e){try{return Array.isArray(e)?e.filter(U):st(e)?[].slice.call(e).filter(U):$(e)?[e].filter(U):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(U):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},ct=function(e){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=e,n},lt=function(e){var n=e.getBoundingClientRect(),r=n.top,a=n.left,i=n.width,u=n.height,s=e.cloneNode(),g=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,h=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return s.removeAttribute("id"),s.style.position="absolute",s.style.top=r+g+"px",s.style.left=a+h+"px",s.style.width=i+"px",s.style.height=u+"px",s.style.transform="",s},k=function(e,n){var r=H({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(e,r);var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,r.bubbles,r.cancelable,r.detail),a},dt=function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(c){function d(){}c(d,d)},a=function(c){var d=c.target;if(d===K){v();return}E.indexOf(d)!==-1&&N({target:d})},i=function(){if(!(P||!o.original)){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ae-c)>p.scrollOffset&&setTimeout(v,150)}},u=function(c){var d=c.key||c.keyCode;(d==="Escape"||d==="Esc"||d===27)&&v()},s=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c;if(c.background&&(K.style.background=c.background),c.container&&c.container instanceof Object&&(d.container=H({},p.container,c.container)),c.template){var y=$(c.template)?c.template:document.querySelector(c.template);d.template=y}return p=H({},p,d),E.forEach(function(z){z.dispatchEvent(k("medium-zoom:update",{detail:{zoom:x}}))}),x},g=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t(H({},p,c))},h=function(){for(var c=arguments.length,d=Array(c),y=0;y<c;y++)d[y]=arguments[y];var z=d.reduce(function(m,w){return[].concat(m,me(w))},[]);return z.filter(function(m){return E.indexOf(m)===-1}).forEach(function(m){E.push(m),m.classList.add("medium-zoom-image")}),T.forEach(function(m){var w=m.type,L=m.listener,_=m.options;z.forEach(function(R){R.addEventListener(w,L,_)})}),x},I=function(){for(var c=arguments.length,d=Array(c),y=0;y<c;y++)d[y]=arguments[y];o.zoomed&&v();var z=d.length>0?d.reduce(function(m,w){return[].concat(m,me(w))},[]):E;return z.forEach(function(m){m.classList.remove("medium-zoom-image"),m.dispatchEvent(k("medium-zoom:detach",{detail:{zoom:x}}))}),E=E.filter(function(m){return z.indexOf(m)===-1}),x},O=function(c,d){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E.forEach(function(z){z.addEventListener("medium-zoom:"+c,d,y)}),T.push({type:"medium-zoom:"+c,listener:d,options:y}),x},A=function(c,d){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E.forEach(function(z){z.removeEventListener("medium-zoom:"+c,d,y)}),T=T.filter(function(z){return!(z.type==="medium-zoom:"+c&&z.listener.toString()===d.toString())}),x},S=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target,y=function(){var m={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},w=void 0,L=void 0;if(p.container)if(p.container instanceof Object)m=H({},m,p.container),w=m.width-m.left-m.right-p.margin*2,L=m.height-m.top-m.bottom-p.margin*2;else{var _=$(p.container)?p.container:document.querySelector(p.container),R=_.getBoundingClientRect(),Y=R.width,be=R.height,we=R.left,je=R.top;m=H({},m,{width:Y,height:be,left:we,top:je})}w=w||m.width-p.margin*2,L=L||m.height-p.margin*2;var M=o.zoomedHd||o.original,Ie=ue(M)?w:M.naturalWidth||w,Se=ue(M)?L:M.naturalHeight||L,F=M.getBoundingClientRect(),Oe=F.top,Ce=F.left,Z=F.width,V=F.height,Le=Math.min(Math.max(Z,Ie),w)/Z,Ae=Math.min(Math.max(V,Se),L)/V,X=Math.min(Le,Ae),Ne=(-Ce+(w-Z)/2+p.margin+m.left)/X,Re=(-Oe+(L-V)/2+p.margin+m.top)/X,se="scale("+X+") translate3d("+Ne+"px, "+Re+"px, 0)";o.zoomed.style.transform=se,o.zoomedHd&&(o.zoomedHd.style.transform=se)};return new r(function(z){if(d&&E.indexOf(d)===-1){z(x);return}var m=function Y(){P=!1,o.zoomed.removeEventListener("transitionend",Y),o.original.dispatchEvent(k("medium-zoom:opened",{detail:{zoom:x}})),z(x)};if(o.zoomed){z(x);return}if(d)o.original=d;else if(E.length>0){var w=E;o.original=w[0]}else{z(x);return}if(o.original.dispatchEvent(k("medium-zoom:open",{detail:{zoom:x}})),ae=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,P=!0,o.zoomed=lt(o.original),document.body.appendChild(K),p.template){var L=$(p.template)?p.template:document.querySelector(p.template);o.template=document.createElement("div"),o.template.appendChild(L.content.cloneNode(!0)),document.body.appendChild(o.template)}if(o.original.parentElement&&o.original.parentElement.tagName==="PICTURE"&&o.original.currentSrc&&(o.zoomed.src=o.original.currentSrc),document.body.appendChild(o.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),o.original.classList.add("medium-zoom-image--hidden"),o.zoomed.classList.add("medium-zoom-image--opened"),o.zoomed.addEventListener("click",v),o.zoomed.addEventListener("transitionend",m),o.original.getAttribute("data-zoom-src")){o.zoomedHd=o.zoomed.cloneNode(),o.zoomedHd.removeAttribute("srcset"),o.zoomedHd.removeAttribute("sizes"),o.zoomedHd.removeAttribute("loading"),o.zoomedHd.src=o.zoomed.getAttribute("data-zoom-src"),o.zoomedHd.onerror=function(){clearInterval(_),console.warn("Unable to reach the zoom image target "+o.zoomedHd.src),o.zoomedHd=null,y()};var _=setInterval(function(){o.zoomedHd.complete&&(clearInterval(_),o.zoomedHd.classList.add("medium-zoom-image--opened"),o.zoomedHd.addEventListener("click",v),document.body.appendChild(o.zoomedHd),y())},10)}else if(o.original.hasAttribute("srcset")){o.zoomedHd=o.zoomed.cloneNode(),o.zoomedHd.removeAttribute("sizes"),o.zoomedHd.removeAttribute("loading");var R=o.zoomedHd.addEventListener("load",function(){o.zoomedHd.removeEventListener("load",R),o.zoomedHd.classList.add("medium-zoom-image--opened"),o.zoomedHd.addEventListener("click",v),document.body.appendChild(o.zoomedHd),y()})}else y()})},v=function(){return new r(function(c){if(P||!o.original){c(x);return}var d=function y(){o.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(o.zoomed),o.zoomedHd&&document.body.removeChild(o.zoomedHd),document.body.removeChild(K),o.zoomed.classList.remove("medium-zoom-image--opened"),o.template&&document.body.removeChild(o.template),P=!1,o.zoomed.removeEventListener("transitionend",y),o.original.dispatchEvent(k("medium-zoom:closed",{detail:{zoom:x}})),o.original=null,o.zoomed=null,o.zoomedHd=null,o.template=null,c(x)};P=!0,document.body.classList.remove("medium-zoom--opened"),o.zoomed.style.transform="",o.zoomedHd&&(o.zoomedHd.style.transform=""),o.template&&(o.template.style.transition="opacity 150ms",o.template.style.opacity=0),o.original.dispatchEvent(k("medium-zoom:close",{detail:{zoom:x}})),o.zoomed.addEventListener("transitionend",d)})},N=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target;return o.original?v():S({target:d})},B=function(){return p},j=function(){return E},C=function(){return o.original},E=[],T=[],P=!1,ae=0,p=n,o={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?p=e:(e||typeof e=="string")&&h(e),p=H({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},p);var K=ct(p.background);document.addEventListener("click",a),document.addEventListener("keyup",u),document.addEventListener("scroll",i),window.addEventListener("resize",v);var x={open:S,close:v,toggle:N,update:s,clone:g,attach:h,detach:I,on:O,off:A,getOptions:B,getImages:j,getZoomedImage:C};return x};function ut(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}var mt=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ut(mt);const ft=dt,ht=t=>he.createElement("img",t,t.children),gt=({width:t,height:e,max:n})=>{if(t===0||e===0)throw new Error("Invalid image size");const{width:r,height:a}=n,i=r/t||1,u=a/e||1,s=Math.min(i,u,1);return{width:t*s,height:e*s}},pt="_error_hef56_1",vt="_loading_hef56_2",yt="_loaded_hef56_6",zt="_imageLoad_hef56_1",fe={error:pt,loading:vt,loaded:yt,imageLoad:zt},re=Me({base:"rounded-xl overflow-hidden text-center inline-flex items-center justify-center duration-200",variants:{status:{loading:"hidden opacity-0",loaded:"opacity-100 block",error:"hidden opacity-0"}}});let Q;const xt=({alt:t,src:e,title:n,zoom:r,placeholder:a,height:i,width:u})=>{const[s]=f.useState(()=>{if(rt)return null;if(Q)return Q;const v=ft(void 0);return Q=v,v}),g=n||t,[h,I]=f.useState("loading"),O=Pe(),A=f.useCallback(v=>{O.current||I(v)},[O]),S=f.useRef(null);return f.useEffect(()=>{if(h!=="loaded"||!r)return;const v=S.current;if(v)return s.attach(v),()=>{s.detach(v)}},[r,s,h]),l.jsxs("figure",{children:[l.jsx("span",{className:"relative flex justify-center","data-hide-print":!0,children:l.jsxs(_e,{placeholder:a,offset:30,children:[l.jsx("span",{children:h!=="loaded"&&a}),h==="error"&&l.jsxs("div",{className:"absolute inset-0 z-[1] flex flex-col gap-8 center",children:[l.jsx("i",{className:"icon-[mingcute--close-line] text-4xl text-red-500"}),l.jsx("span",{children:"图片加载失败"}),l.jsx(ce,{className:"w-[80px] opacity-80"}),l.jsx("a",{href:e,target:"_blank",rel:"noreferrer",children:l.jsx("span",{children:"查看原图"})})]}),l.jsx(xe,{height:i,width:u,src:e,title:n,alt:t||n||"",ref:S,onLoad:()=>{A("loaded")},onError:()=>A("error"),className:re({status:h,className:fe.loaded}),onAnimationEnd:v=>{v.target.classList.remove(fe.loaded)}})]})}),l.jsx("img",{className:"max-w-1/3 hidden print:block",src:e,alt:t||n}),!!g&&l.jsxs("figcaption",{className:"mt-1 flex flex-col items-center justify-center",children:[l.jsx(ce,{className:"w-[80px] opacity-80"}),l.jsx("span",{children:g})]})]})},Et=t=>{const e=f.useMemo(()=>l.jsx(bt,{...t}),[t]);return l.jsx(xt,{zoom:!0,placeholder:e,...t})},bt=({src:t,containerWidth:e,height:n,width:r,accent:a})=>{const i=ne(t),u=a||(i==null?void 0:i.accent),s=f.useMemo(()=>{let g=n,h=r;if(!g||!h){if(!i)return;g=i.height,h=i.width}if(e<=0)return;const{height:I,width:O}=gt({width:h,height:g,max:{width:e,height:1/0}});return{scaleHeight:I,scaleWidth:O}},[n,r,e,i]);return s?l.jsx("span",{className:`image-placeholder ${re.base}`,"data-width":s.scaleWidth,"data-height":s.scaleHeight,"data-from-record-height":i==null?void 0:i.height,"data-from-record-width":i==null?void 0:i.width,"data-src":t,style:{height:s.scaleHeight,width:s.scaleWidth,backgroundColor:u}}):l.jsx(wt,{accent:u})},wt=({accent:t})=>l.jsx("span",{className:pe("image-placeholder",re.base,"h-[300px] w-full bg-slate-300 dark:bg-slate-700"),style:{backgroundColor:t,outline:void 0}}),xe=f.forwardRef(({src:t,alt:e,placeholder:n,...r},a)=>{const{height:i,width:u}=ne(t)||r;return!i||!u?l.jsx("img",{alt:e,src:t,ref:a,...r}):l.jsx(ht,{alt:e||"",fetchPriority:"high",priority:!0,src:t,...r,height:+i,width:+u,ref:a})});xe.displayName="OptimizedImage";const jt="_root_1ug9l_1",It="_indicator_1ug9l_2",St="_container_1ug9l_7",Ot="_child_1ug9l_17",G={root:jt,indicator:It,container:St,child:Ot},ie=60,Ct=15,Lt=5e3,Qt=t=>{const{images:e}=t,[n,r]=f.useState(null),[,a]=f.useState({}),i=f.useRef(0);f.useEffect(()=>{if(!n)return;const j=new ResizeObserver(()=>{a({}),C(n)});function C(E){const T=E.children.item(0);T&&(i.current=T.clientWidth)}return C(n),j.observe(n),()=>{j.disconnect()}},[n]);const[u,s]=f.useState(0),g=f.useCallback(Fe(j=>{const C=j.target,E=Math.floor((C.scrollLeft+ie+15)/i.current);s(E)},60),[]),h=f.useCallback(j=>{n&&n.scrollTo({left:i.current*j,behavior:"smooth"})},[n]),I=f.useRef(null),O=J(u),A=J(e.length),S=f.useRef(!0),v=f.useRef(!0),N=f.useCallback(()=>{v.current&&(v.current=!1,clearInterval(I.current))},[]),{ref:B}=ke({initialInView:!1,triggerOnce:e.length<2,onChange(j){A.current<2||!v.current||(j?I.current=setInterval(()=>{O.current+1>A.current-1&&S.current&&(S.current=!1),O.current-1<0&&!S.current&&(S.current=!0);const C=O.current+(S.current?1:-1);h(C)},Lt):I.current=clearInterval(I.current))}});return f.useEffect(()=>()=>{clearInterval(I.current)},[]),l.jsxs("div",{className:W("w-full","relative",G.root),ref:B,onTouchMove:N,onWheel:N,children:[l.jsx("div",{className:W("w-full overflow-auto whitespace-nowrap",G.container),onTouchStart:N,onScroll:g,ref:r,onTouchMove:N,onWheel:N,children:e.map(j=>l.jsx(Ee,{image:j},j.url))}),l.jsx("div",{className:W(G.indicator,"space-x-2"),children:Array.from({length:e.length}).map((j,C)=>l.jsx("div",{className:W("h-[6px] w-[6px] cursor-pointer rounded-full bg-stone-600 opacity-50 transition-opacity duration-200 ease-in-out",u==C&&"!opacity-100"),onClick:h.bind(null,C)},C))})]})},At={width:`calc(100% - ${ie}px)`,marginRight:`${Ct}px`},Ee=f.memo(({image:t})=>{const e=ne(t.url),n=t.name,a=t.footnote||(["!","¡"].some(u=>u==(n==null?void 0:n[0]))?n==null?void 0:n.slice(1):"")||"",{w:i}=Ze();return l.jsx("div",{style:At,className:W(G.child,"inline-block self-center"),children:l.jsx(Et,{accent:e==null?void 0:e.accent,src:t.url,alt:a,containerWidth:i-ie})},`${t.url}-${t.name||""}`)});Ee.displayName="GalleryItem";export{Et as F,Qt as G,ht as I,Pt as M,Wt as W,Xt as a,Vt as b,rt as c,Gt as d,ee as e,Kt as f,We as g,it as h,Ft as i,qt as j,Zt as k,at as l,$t as m,Dt as n,Bt as o,oe as p,Yt as r,_t as s,Ut as t,Ze as u};
