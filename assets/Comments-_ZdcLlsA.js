import{r as n,j as e,a as U}from"./index-oT9nI0PV.js";import{h as G,j as W,k as X,s as J,u as Y,L as Z,l as ee,m as te}from"./Markdown-S_M53pfr.js";import{i as M,h as se,a as re}from"./infiniteQueryBehavior-uROswwlW.js";import{S as ne,s as A,m as ae}from"./spring-OYvg0HZa.js";import{c as oe,p as le,A as ie,C as ce,a as me}from"./utils-pwvlULwd.js";import{c as O}from"./LinkCard-d2-T82nk.js";import{c as ue,a as x,j as v,d as y,u as h,s as F}from"./Divider-1rFCjeJ6.js";import{c as E,a as b}from"./helper-Oi49T1hx.js";import{F as de,u as xe}from"./FlexText-g7iEl_Ol.js";import{P as he}from"./PinIconToggle-nn43Me3q.js";import{s as fe,g as pe}from"./Gallery-NYsfwRoO.js";var ge=class extends G{constructor(t,s){super(t,s)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,s){super.setOptions({...t,behavior:M()},s)}getOptimisticResult(t){return t.behavior=M(),super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,s){var m,u,d,p;const{state:r}=t,a=super.createResult(t,s),{isFetching:o,isRefetching:i}=a,l=o&&((u=(m=r.fetchMeta)==null?void 0:m.fetchMore)==null?void 0:u.direction)==="forward",c=o&&((p=(d=r.fetchMeta)==null?void 0:d.fetchMore)==null?void 0:p.direction)==="backward";return{...a,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:se(s,r.data),hasPreviousPage:re(s,r.data),isFetchingNextPage:l,isFetchingPreviousPage:c,isRefetching:i&&!l&&!c}}};function ye(t,s){return W(t,ge,s)}const ve=n.createContext(null),R={didCatch:!1,error:null};let Ce=class extends n.Component{constructor(s){super(s),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=R}static getDerivedStateFromError(s){return{didCatch:!0,error:s}}resetErrorBoundary(){const{error:s}=this.state;if(s!==null){for(var r,a,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];(r=(a=this.props).onReset)===null||r===void 0||r.call(a,{args:i,reason:"imperative-api"}),this.setState(R)}}componentDidCatch(s,r){var a,o;(a=(o=this.props).onError)===null||a===void 0||a.call(o,s,r)}componentDidUpdate(s,r){const{didCatch:a}=this.state,{resetKeys:o}=this.props;if(a&&r.error!==null&&je(s.resetKeys,o)){var i,l;(i=(l=this.props).onReset)===null||i===void 0||i.call(l,{next:o,prev:s.resetKeys,reason:"keys"}),this.setState(R)}}render(){const{children:s,fallbackRender:r,FallbackComponent:a,fallback:o}=this.props,{didCatch:i,error:l}=this.state;let c=s;if(i){const m={error:l,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")c=r(m);else if(a)c=n.createElement(a,m);else if(o===null||n.isValidElement(o))c=o;else throw l}return n.createElement(ve.Provider,{value:{didCatch:i,error:l,resetErrorBoundary:this.resetErrorBoundary}},c)}};function je(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==s.length||t.some((r,a)=>!Object.is(r,s[a]))}const be=()=>e.jsxs("div",{className:"flex w-full flex-col py-6 center",children:["Something went wrong. Please contract to"," ",e.jsx("a",{href:"mailto:i@innei.ren",className:"shiro-link--underline",children:"i@innei.ren"}),".",e.jsx(ne,{onClick:()=>{window.location.reload()},children:"Reload Page"})]}),we=({children:t})=>e.jsx(Ce,{FallbackComponent:be,onError:s=>{console.error(s)},children:t}),Ne=t=>{const{shadow:s=!0,lazy:r=!0,wrapperProps:a={},size:o,imageUrl:i,text:l,url:c,randomColor:m,radius:u,...d}=t,p=n.useRef(null),[w,k]=n.useState(!r),[B,N]=n.useState(!1),{className:C,...K}=a,g=n.useMemo(()=>(l||i)&&m&&X(J(l||i)),[l,i,m]),I=Y()?g==null?void 0:g.dark.background:g==null?void 0:g.light.background;return e.jsx("div",{className:E("box-border backface-hidden",s&&"shadow-sm",C),ref:p,style:{...o?{height:`${o||80}px`,width:`${o||80}px`}:void 0,...I?{backgroundColor:I}:void 0,...u?{borderRadius:`${u}px`}:void 0},...K,children:n.createElement(c?"a":"div",{className:"relative inline-block h-full w-full",...c?{href:c,target:"_blank",rel:"noreferrer"}:{}},i&&!B?e.jsx("div",{className:E("h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-300",C),children:e.jsx("img",{src:i,style:{opacity:w?1:0,...u?{borderRadius:`${u}px`}:void 0},height:o,width:o,onLoad:()=>k(!0),onError:()=>N(!0),loading:r?"lazy":"eager",...d,className:E("aspect-square rounded-full duration-200",d.className)})}):l?e.jsx("div",{className:"relative flex h-full w-full flex-grow select-none items-center justify-center",children:e.jsx(de,{scale:.5,text:l})}):null)})},Pe=({text:t})=>e.jsx("div",{className:"flex h-[100px] items-center justify-center text-lg font-medium",children:t||"您当前所在地区暂不支持此功能"}),ke=oe({from:{opacity:1e-5,scale:.96,y:10},to:{y:0,scale:1,opacity:1},preset:A}),Be=({onLoading:t,children:s,className:r})=>{const{ref:a}=ue({rootMargin:"1px",onChange(o){o&&t()}});return e.jsx("div",{className:r,ref:a,children:s??e.jsx(Z,{})})},Ee="_comment__message_1lfmp_1",Re={comment__message:Ee},Se=["在这里说点什么呢。","小可爱，你想说点什么呢？","或许此地可以留下足迹","你的留言是我前进的动力！","说点什么吧，我会好好听的。","来一发评论，送你一个小星星！","你的评论会让我更加努力哦！","留下你的足迹，让我知道你来过。","我在这里等你的留言呢！","你的评论是我最大的动力！","来一发评论，让我知道你的想法吧！"],lt=()=>fe(Se),Le=500,j="comment-",Ie=()=>({refId:x(""),text:x(""),author:y(`${j}author`,""),mail:y(`${j}mail`,""),url:y(`${j}url`,""),avatar:x(""),source:x(""),isWhisper:y(`${j}is-whisper`,!1),syncToRecently:y(`${j}sync-to-recently`,!0)}),f=n.createContext(null),V=n.createContext(null),Me=t=>{const{refId:s,children:r,afterSubmit:a,initialValue:o}=t,i=pe(()=>({...Ie(),refId:x(s)}));return xe(()=>{o&&v.set(i.text,o)}),e.jsx(f.Provider,{value:i,children:e.jsx(V.Provider,{value:n.useMemo(()=>({afterSubmit:a}),[a]),children:r})},s)},H=n.createContext(!1),_=n.createContext(""),D=n.createContext(null),ze=t=>{const{isReply:s,originalRefId:r,onCompleted:a,children:o}=t;return e.jsx(_.Provider,{value:r,children:e.jsx(H.Provider,{value:s,children:e.jsx(D.Provider,{value:a||null,children:o})})})},Te=n.memo(t=>{const{children:s}=t;return n.useEffect(()=>(z(s),()=>{z(null)}),[s]),null}),Ae=n.memo(()=>Oe());Ae.displayName="CommentBoxSlotProvider";Te.displayName="CommentBoxSlotPortal";const it=()=>n.useContext(H),ct=()=>{const t=h(n.useContext(f).refId);return n.useContext(_)||t},mt=()=>n.useContext(D),ut=()=>h(n.useContext(f).text),Q=()=>h(n.useContext(f).refId),dt=()=>n.useContext(f),xt=()=>n.useContext(V),$=x(null),Oe=()=>h($),z=t=>v.set($,t),ht=()=>h(F(n.useContext(f).text,n.useCallback(t=>t.length>0,[]))),ft=()=>h(F(n.useContext(f).text,n.useCallback(t=>t.length>Le,[]))),pt=()=>{const t=n.useContext(f);return(s,r)=>{const a=t[s];if(!a)throw new Error(`atom ${s} not found`);v.set(a,r)}};var Fe=(t=>(t[t.legacy=0]="legacy",t[t["with-auth"]=1]="with-auth",t))(Fe||{});const q=y("comment-mode",1),gt=()=>h(q),yt=t=>v.set(q,t),Ve=({comment:t})=>{const s=ee(),r=Q();return e.jsx(he,{pin:!!t.pin,onPinChange:async a=>{s.setQueryData(L(r),o=>le(o,i=>{if(!i)return i;let l=null;return i.pages.forEach(c=>c.data.forEach(m=>{t.id===m.id&&(l=m)})),l&&(l.pin=a),i})),await O.comment.proxy(t.id).patch({data:{pin:a}})}})};function He(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.88em",height:"1em",viewBox:"0 0 14 16",...t,children:e.jsx("path",{fillRule:"evenodd",d:"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3L5 2L4 5h6L9 2zm4.03 7.75L10 9l1 2l-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3l1-2z",fill:"currentColor"})})}const _e=({commentId:t})=>{const[s,r]=n.useState(!1),a=Q(),o=n.useCallback(()=>{r(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-label":"回复",className:b("absolute bottom-0 right-0 translate-x-2/3 translate-y-1/4 text-xs opacity-90","aspect-square rounded-full","box-content flex h-6 w-6 p-[2px] center","border border-slate-200 bg-zinc-100 dark:border-neutral-700 dark:bg-gray-800","invisible cursor-pointer opacity-0","group-[:hover]:visible group-[:hover]:opacity-70"),onClick:()=>{r(i=>!i)},children:e.jsx("i",{className:"icon-[mingcute--comment-line]"})}),e.jsx($e,{children:e.jsx(ze,{isReply:!0,originalRefId:a,onCompleted:o,children:e.jsx(ie,{duration:.2,children:s&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-6"}),e.jsx(ce,{refId:t}),e.jsx("div",{className:"h-6"})]})})})})]})},De=n.memo(function t(s){var N;const{comment:r,className:a}=s,o=n.useMemo(()=>x(null),[]);if(typeof r=="string")return null;const{id:i,avatar:l,author:c,text:m,key:u,location:d,isWhispers:p,url:w}=r,k=typeof r.parent=="string"?r.parent:(N=r.parent)==null?void 0:N.id,B=w?e.jsx("a",{href:w,className:"ml-2 max-w-full flex-shrink-0 break-all",target:"_blank",rel:"noreferrer",children:c}):e.jsx("span",{className:"ml-2 max-w-full flex-shrink-0 break-all",children:c});return e.jsxs(e.Fragment,{children:[e.jsxs(S.Provider,{value:o,children:[e.jsx(ae.li,{initial:r.new?{opacity:0,scale:.93,y:20}:!0,transition:A,animate:r.new?{opacity:1,y:0,scale:1}:void 0,"data-comment-id":i,"data-parent-id":k,className:b("relative my-2",a),children:e.jsxs("div",{className:"group flex w-full items-stretch gap-2",children:[e.jsx("div",{className:"relative flex w-9 shrink-0 self-end",children:e.jsx(Ne,{shadow:!1,imageUrl:l,alt:`${c}'s avatar`,className:"h-9 w-9 select-none rounded-full bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-800",width:24,height:24})}),e.jsxs("div",{className:b("flex flex-1 flex-col","w-full min-w-0 items-start"),children:[e.jsxs("span",{className:b("flex items-center gap-2 font-semibold text-zinc-800 dark:text-zinc-200","relative mb-2 w-full min-w-0 justify-center"),children:[e.jsxs("span",{className:"flex flex-grow flex-wrap items-center gap-2",children:[B,e.jsxs("span",{className:"flex min-w-0 flex-shrink select-none flex-wrap items-center space-x-2 self-end",children:[e.jsx("span",{className:"inline-flex flex-shrink-0 text-[0.71rem] font-medium opacity-40",children:e.jsx(me,{date:r.created})}),e.jsx("span",{className:"break-all text-[0.71rem] opacity-30",children:u}),!!d&&e.jsxs("span",{className:"min-w-0 max-w-full truncate break-all text-[0.71rem] opacity-[0.35]",children:["来自：",d]}),!!p&&e.jsx(He,{})]})]}),e.jsx("span",{className:"flex-shrink-0",children:e.jsx(Ve,{comment:r})})]}),e.jsxs("div",{className:b(Re.comment__message,"relative inline-block rounded-xl px-2 py-1 text-zinc-800 dark:text-zinc-200","rounded-bl-sm bg-zinc-600/5 dark:bg-zinc-500/20","max-w-[calc(100%-3rem)]"),children:[e.jsx(te,{options:{disabledTypes:qe,disableParsingRawHTML:!0,forceBlock:!0},children:m}),e.jsx(_e,{commentId:r.id})]})]})]})}),e.jsx(Qe,{})]}),r.children&&r.children.length>0&&e.jsx("ul",{className:"my-2 space-y-2",children:r.children.map(C=>e.jsx(t,{comment:C,className:"ml-9"},C.id))})]})}),S=n.createContext(x(null)),Qe=()=>{const t=n.useRef(null),s=n.useContext(S);return n.useLayoutEffect(()=>(v.set(s,t.current),()=>{v.set(s,null)}),[s]),e.jsx("div",{ref:t})},$e=t=>{const s=h(n.useContext(S));return s?U.createPortal(t.children,s):null},qe=["footnote","footnoteReference","image","htmlComment","htmlSelfClosing","htmlBlock"],P=()=>e.jsxs("li",{className:"relative animate-pulse list-none",children:[e.jsxs("div",{className:"group flex w-full items-stretch gap-2",children:[e.jsx("div",{className:"flex w-9 shrink-0 items-end",children:e.jsx("div",{className:"h-9 w-9 rounded-full bg-gray-300 dark:bg-neutral-600"})}),e.jsxs("div",{className:"flex w-full min-w-0 flex-1 flex-col items-start",children:[e.jsx("span",{className:"relative mb-2 flex w-full min-w-0 items-center justify-center gap-2",children:e.jsxs("span",{className:"flex flex-grow items-center gap-2",children:[e.jsx("span",{className:"ml-2 h-4 w-20 bg-gray-300 dark:bg-neutral-600"}),e.jsxs("span",{className:"flex select-none items-center space-x-2",children:[e.jsx("span",{className:"inline-flex h-4 w-20 bg-gray-300 text-[0.71rem] font-medium opacity-40 dark:bg-neutral-600"}),e.jsx("span",{className:"h-4 w-20 bg-gray-300 text-[0.71rem] opacity-30 dark:bg-neutral-600"})]})]})}),e.jsxs("div",{className:"relative flex w-full flex-col gap-2",children:[e.jsx("div",{className:"relative ml-2 inline-block h-4 w-[calc(100%-3rem)] rounded-xl bg-gray-300 px-2 py-1 dark:bg-neutral-600"}),e.jsx("div",{className:"relative ml-2 inline-block h-4 w-[120px] rounded-xl bg-gray-300 px-2 py-1 dark:bg-neutral-600"})]})]})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]}),T=()=>e.jsxs("div",{className:"flex min-h-[400px] flex-col space-y-4",children:[e.jsx(P,{}),e.jsx(P,{}),e.jsx(P,{}),e.jsx(P,{})]}),L=t=>["comments",t],Ke=({refId:t})=>{const s=n.useMemo(()=>L(t),[t]),{data:r,isLoading:a,fetchNextPage:o,hasNextPage:i}=ye({queryKey:s,queryFn:async({queryKey:l,pageParam:c})=>{const m=c,[,u]=l;return(await O.comment.getByRefId(u,{page:m})).$serialized},meta:{persist:!1},getNextPageParam:l=>l.pagination.hasNextPage?l.pagination.currentPage+1:void 0,getPreviousPageParam:l=>l.pagination.currentPage-1,initialPageParam:1});return a?e.jsx(T,{}):!r||!r.pages.length||!r.pages[0].data.length?e.jsx("div",{className:"flex min-h-[400px] center",children:e.jsx(Pe,{text:"这里还没有评论呢"})}):e.jsxs(we,{children:[e.jsx("ul",{className:"min-h-[400px] list-none space-y-4",children:r==null?void 0:r.pages.map((l,c)=>e.jsx(ke,{children:l.data.map(m=>e.jsx(Ue,{comment:m,refId:t},m.id))},c))}),i&&e.jsx(Be,{onLoading:o,children:e.jsx(T,{})})]})},Ue=n.memo(function({comment:s,refId:r}){return e.jsx(Me,{refId:r,children:e.jsx(De,{comment:s})})}),vt=Object.freeze(Object.defineProperty({__proto__:null,Comments:Ke,buildQueryKey:L},Symbol.toStringTag,{value:"Module"}));export{Ke as C,we as E,Le as M,Ae as a,Q as b,dt as c,xt as d,it as e,ct as f,mt as g,ft as h,ut as i,pt as j,L as k,lt as l,Te as m,Fe as n,gt as o,Me as p,vt as q,yt as s,ht as u};
