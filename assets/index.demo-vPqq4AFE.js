var G=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var i=(e,t,n)=>(G(e,t,"read from private field"),n?n.call(e):t.get(e)),h=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},r=(e,t,n,s)=>(G(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n);var _=(e,t,n,s)=>({set _(a){r(e,t,a,n)},get _(){return i(e,t,s)}}),f=(e,t,n)=>(G(e,t,"access private method"),n);import{j as D}from"./index-33dwo9K-.js";import{r as ot,n as b,t as lt,h as ut,m as Y,d as Z,f as dt,e as tt,p as et}from"./Gallery-8bUGafna.js";import{c as ft,n as l,i as z,a as mt,S as ct,f as nt,o as it,Q as pt,$ as yt,M as bt}from"./Markdown-wJ0uSamB.js";import{R as gt,M as vt}from"./mutation-FPHN5wz8.js";import{i as Ct}from"./infiniteQueryBehavior-omAdkR1U.js";import{k as It}from"./LinkCard-ffF9KqDX.js";import"./Divider-Oi9OD1qc.js";import"./helper-wV2Sx7aH.js";import"./index-5dkmL82r.js";import"./spring-v-SIdMkd.js";import"./env-jTYMx4r5.js";import"./Collapse-8BoKkbA5.js";import"./RichLink-IEVR7UGc.js";var q,x,m,k,p,o,j,F,T,N,g,I,st,Mt=(st=class extends gt{constructor(t){super();h(this,T);h(this,g);h(this,q,void 0);h(this,x,void 0);h(this,m,void 0);h(this,k,void 0);h(this,p,void 0);h(this,o,void 0);h(this,j,void 0);h(this,F,void 0);r(this,F,!1),r(this,j,t.defaultOptions),f(this,T,N).call(this,t.options),r(this,o,[]),r(this,m,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,r(this,q,t.state||wt(this.options)),this.state=i(this,q),this.scheduleGc()}get meta(){return this.options.meta}optionalRemove(){!i(this,o).length&&this.state.fetchStatus==="idle"&&i(this,m).remove(this)}setData(t,n){const s=ot(this.state.data,t,this.options);return f(this,g,I).call(this,{data:s,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),s}setState(t,n){f(this,g,I).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var s;const n=i(this,k);return(s=i(this,p))==null||s.cancel(t),n?n.then(b).catch(b):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(i(this,q))}isActive(){return i(this,o).some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||i(this,o).some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!lt(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=i(this,o).find(s=>s.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=i(this,p))==null||n.continue()}onOnline(){var n;const t=i(this,o).find(s=>s.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=i(this,p))==null||n.continue()}addObserver(t){i(this,o).includes(t)||(i(this,o).push(t),this.clearGcTimeout(),i(this,m).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){i(this,o).includes(t)&&(r(this,o,i(this,o).filter(n=>n!==t)),i(this,o).length||(i(this,p)&&(i(this,F)?i(this,p).cancel({revert:!0}):i(this,p).cancelRetry()),this.scheduleGc()),i(this,m).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return i(this,o).length}invalidate(){this.state.isInvalidated||f(this,g,I).call(this,{type:"invalidate"})}fetch(t,n){var W,X,J,V;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(i(this,k))return(W=i(this,p))==null||W.continueRetry(),i(this,k)}if(t&&f(this,T,N).call(this,t),!this.options.queryFn){const c=i(this,o).find(C=>C.options.queryFn);c&&f(this,T,N).call(this,c.options)}const s=new AbortController,a={queryKey:this.queryKey,meta:this.meta},d=c=>{Object.defineProperty(c,"signal",{enumerable:!0,get:()=>(r(this,F,!0),s.signal)})};d(a);const M=()=>this.options.queryFn?(r(this,F,!1),this.options.persister?this.options.persister(this.options.queryFn,a,this):this.options.queryFn(a)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),w={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:M};d(w),(X=this.options.behavior)==null||X.onFetch(w,this),r(this,x,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((J=w.fetchOptions)==null?void 0:J.meta))&&f(this,g,I).call(this,{type:"fetch",meta:(V=w.fetchOptions)==null?void 0:V.meta});const B=c=>{var C,H,$,L;z(c)&&c.silent||f(this,g,I).call(this,{type:"error",error:c}),z(c)||((H=(C=i(this,m).config).onError)==null||H.call(C,c,this),(L=($=i(this,m).config).onSettled)==null||L.call($,this.state.data,c,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return r(this,p,ft({fn:w.fetchFn,abort:s.abort.bind(s),onSuccess:c=>{var C,H,$,L;if(typeof c>"u"){B(new Error(`${this.queryHash} data is undefined`));return}this.setData(c),(H=(C=i(this,m).config).onSuccess)==null||H.call(C,c,this),(L=($=i(this,m).config).onSettled)==null||L.call($,c,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:B,onFail:(c,C)=>{f(this,g,I).call(this,{type:"failed",failureCount:c,error:C})},onPause:()=>{f(this,g,I).call(this,{type:"pause"})},onContinue:()=>{f(this,g,I).call(this,{type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay,networkMode:w.options.networkMode})),r(this,k,i(this,p).promise),i(this,k)}},q=new WeakMap,x=new WeakMap,m=new WeakMap,k=new WeakMap,p=new WeakMap,o=new WeakMap,j=new WeakMap,F=new WeakMap,T=new WeakSet,N=function(t){this.options={...i(this,j),...t},this.updateGcTime(this.options.gcTime)},g=new WeakSet,I=function(t){const n=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:mt(this.options.networkMode)?"fetching":"paused",...!s.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=t.error;return z(a)&&a.revert&&i(this,x)?{...i(this,x),fetchStatus:"idle"}:{...s,error:a,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=n(this.state),l.batch(()=>{i(this,o).forEach(s=>{s.onQueryUpdate()}),i(this,m).notify({query:this,type:"updated",action:t})})},st);function wt(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",s=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var v,rt,kt=(rt=class extends ct{constructor(t={}){super();h(this,v,void 0);this.config=t,r(this,v,new Map)}build(t,n,s){const a=n.queryKey,d=n.queryHash??ut(a,n);let M=this.get(d);return M||(M=new Mt({cache:this,queryKey:a,queryHash:d,options:t.defaultQueryOptions(n),state:s,defaultOptions:t.getQueryDefaults(a)}),this.add(M)),M}add(t){i(this,v).has(t.queryHash)||(i(this,v).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=i(this,v).get(t.queryHash);n&&(t.destroy(),n===t&&i(this,v).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){l.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return i(this,v).get(t)}getAll(){return[...i(this,v).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(s=>Y(n,s))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(s=>Y(t,s)):n}notify(t){l.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){l.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){l.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},v=new WeakMap,rt),y,K,S,at,Ot=(at=class extends ct{constructor(t={}){super();h(this,y,void 0);h(this,K,void 0);h(this,S,void 0);this.config=t,r(this,y,[]),r(this,K,0)}build(t,n,s){const a=new vt({mutationCache:this,mutationId:++_(this,K)._,options:t.defaultMutationOptions(n),state:s});return this.add(a),a}add(t){i(this,y).push(t),this.notify({type:"added",mutation:t})}remove(t){r(this,y,i(this,y).filter(n=>n!==t)),this.notify({type:"removed",mutation:t})}clear(){l.batch(()=>{i(this,y).forEach(t=>{this.remove(t)})})}getAll(){return i(this,y)}find(t){const n={exact:!0,...t};return i(this,y).find(s=>Z(n,s))}findAll(t={}){return i(this,y).filter(n=>Z(t,n))}notify(t){l.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){return r(this,S,(i(this,S)??Promise.resolve()).then(()=>{const t=i(this,y).filter(n=>n.state.isPaused);return l.batch(()=>t.reduce((n,s)=>n.then(()=>s.continue().catch(b)),Promise.resolve()))}).then(()=>{r(this,S,void 0)})),i(this,S)}},y=new WeakMap,K=new WeakMap,S=new WeakMap,at),u,O,Q,R,U,A,P,E,ht,Qt=(ht=class{constructor(e={}){h(this,u,void 0);h(this,O,void 0);h(this,Q,void 0);h(this,R,void 0);h(this,U,void 0);h(this,A,void 0);h(this,P,void 0);h(this,E,void 0);r(this,u,e.queryCache||new kt),r(this,O,e.mutationCache||new Ot),r(this,Q,e.defaultOptions||{}),r(this,R,new Map),r(this,U,new Map),r(this,A,0)}mount(){_(this,A)._++,i(this,A)===1&&(r(this,P,nt.subscribe(()=>{nt.isFocused()&&(this.resumePausedMutations(),i(this,u).onFocus())})),r(this,E,it.subscribe(()=>{it.isOnline()&&(this.resumePausedMutations(),i(this,u).onOnline())})))}unmount(){var e,t;_(this,A)._--,i(this,A)===0&&((e=i(this,P))==null||e.call(this),r(this,P,void 0),(t=i(this,E))==null||t.call(this),r(this,E,void 0))}isFetching(e){return i(this,u).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return i(this,O).findAll({...e,status:"pending"}).length}getQueryData(e){var t;return(t=i(this,u).find({queryKey:e}))==null?void 0:t.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);return t!==void 0?Promise.resolve(t):this.fetchQuery(e)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:n})=>{const s=n.data;return[t,s]})}setQueryData(e,t,n){const s=i(this,u).find({queryKey:e}),a=s==null?void 0:s.state.data,d=dt(t,a);if(typeof d>"u")return;const M=this.defaultQueryOptions({queryKey:e});return i(this,u).build(this,M).setData(d,{...n,manual:!0})}setQueriesData(e,t,n){return l.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,t,n)]))}getQueryState(e){var t;return(t=i(this,u).find({queryKey:e}))==null?void 0:t.state}removeQueries(e){const t=i(this,u);l.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=i(this,u),s={type:"active",...e};return l.batch(()=>(n.findAll(e).forEach(a=>{a.reset()}),this.refetchQueries(s,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},s=l.batch(()=>i(this,u).findAll(e).map(a=>a.cancel(n)));return Promise.all(s).then(b).catch(b)}invalidateQueries(e={},t={}){return l.batch(()=>{if(i(this,u).findAll(e).forEach(s=>{s.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},s=l.batch(()=>i(this,u).findAll(e).filter(a=>!a.isDisabled()).map(a=>{let d=a.fetch(void 0,n);return n.throwOnError||(d=d.catch(b)),a.state.fetchStatus==="paused"?Promise.resolve():d}));return Promise.all(s).then(b)}fetchQuery(e){const t=this.defaultQueryOptions(e);typeof t.retry>"u"&&(t.retry=!1);const n=i(this,u).build(this,t);return n.isStaleByTime(t.staleTime)?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(b).catch(b)}fetchInfiniteQuery(e){return e.behavior=Ct(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(b).catch(b)}resumePausedMutations(){return i(this,O).resumePausedMutations()}getQueryCache(){return i(this,u)}getMutationCache(){return i(this,O)}getDefaultOptions(){return i(this,Q)}setDefaultOptions(e){r(this,Q,e)}setQueryDefaults(e,t){i(this,R).set(tt(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...i(this,R).values()];let n={};return t.forEach(s=>{et(e,s.queryKey)&&(n={...n,...s.defaultOptions})}),n}setMutationDefaults(e,t){i(this,U).set(tt(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...i(this,U).values()];let n={};return t.forEach(s=>{et(e,s.mutationKey)&&(n={...n,...s.defaultOptions})}),n}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const t={...i(this,Q).queries,...(e==null?void 0:e.queryKey)&&this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=ut(t.queryKey,t)),typeof t.refetchOnReconnect>"u"&&(t.refetchOnReconnect=t.networkMode!=="always"),typeof t.throwOnError>"u"&&(t.throwOnError=!!t.suspense),typeof t.networkMode>"u"&&t.persister&&(t.networkMode="offlineFirst"),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...i(this,Q).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){i(this,u).clear(),i(this,O).clear()}},u=new WeakMap,O=new WeakMap,Q=new WeakMap,R=new WeakMap,U=new WeakMap,A=new WeakMap,P=new WeakMap,E=new WeakMap,ht);const At=`## List and GFM Tasks

1. First
2. Second
   1. 2.1
   2. 2.2
      1. 3.1
3. Third
4. Fourth

- [ ] Checkbox
- [x] Checkbox Completed

---

- Line
  - Line 1.1
- Line 2

## Definition lists

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

## [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\\*[HTML]: Hyper Text Markup Language

## Table

| 表达内容                                                                                                                                 | 示例          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 表示文件                                                                                                                                 | \`options.txt\` |
| 表示变量                                                                                                                                 | <版本名>      |
| 在文件或文件夹末尾加上 \`!\` 表示 Minecraft 本体，分发这些文件违反了 [Minecraft Eula](https://account.mojang.com/documents/minecraft_eula) | libraries !   |
| 在文件或文件夹末尾加上 \`*\` 表示可删除，\`**\` 表示建议删除，\`***\` 表示必须删除                                                             | libraries \\*  |

## Token

This is a ||Spoiler||

A \`code\`.

==mark== it.

++Something Insert++

## Latex

$ c = \\pm\\sqrt{a^2 + b^2} $

## Container

::: warning
_here be dragons_
:::

::: banner {error}
_here be dragons_
:::

::: gallery
https://loremflickr.com/640/480/city?1
https://loremflickr.com/640/480/city?2
https://loremflickr.com/640/480/city?3
![](https://loremflickr.com/640/480/city?4 'Image')
:::

## Rich Link

\`\`\`
https://github.com/Innei/Shiro
\`\`\`

https://github.com/Innei/Shiro

\`\`\`
https://twitter.com/zhizijun/status/1649822091234148352?s=20
\`\`\`

https://twitter.com/zhizijun/status/1649822091234148352?s=20

\`\`\`
https://www.youtube.com/watch?v=N93cTbtLCIM
\`\`\`

https://www.youtube.com/watch?v=N93cTbtLCIM

\`\`\`
https://gist.github.com/Innei/94b3e8f078d29e1820813a24a3d8b04e
\`\`\`

https://gist.github.com/Innei/94b3e8f078d29e1820813a24a3d8b04e

\`\`\`
https://github.com/vuejs/vitepress/commit/71eb11f72e60706a546b756dc3fd72d06e2ae4e2
\`\`\`

https://github.com/vuejs/vitepress/commit/71eb11f72e60706a546b756dc3fd72d06e2ae4e2

\`\`\`
https://codesandbox.io/s/framer-motion-layoutroot-prop-forked-p39g96
\`\`\`

https://codesandbox.io/s/framer-motion-layoutroot-prop-forked-p39g96

\`\`\`
https://github.com/Innei/Shiro/blob/108d4c3e927e1c9c9304e41a0631f91958477d9f/src/providers/root/modal-stack-provider.tsx
\`\`\`

https://github.com/Innei/Shiro/blob/108d4c3e927e1c9c9304e41a0631f91958477d9f/src/providers/root/modal-stack-provider.tsx

\`\`\`
https://github.com/Innei/Shiro/pull/129
\`\`\`

https://github.com/Innei/Shiro/pull/129


\`\`\`
https://github.com/Innei/Shiro/commit/6957e011439eb2d3cbf42bfb67ed81b07d4bcc2a
\`\`\`

https://github.com/Innei/Shiro/commit/6957e011439eb2d3cbf42bfb67ed81b07d4bcc2a

\`\`\`
https://trpc.io/docs/client/react/useInfiniteQuery
\`\`\`

https://trpc.io/docs/client/react/useInfiniteQuery

\`\`\`
[TRPC](https://trpc.io/docs/client/react/useInfiniteQuery)
\`\`\`

[TRPC](https://trpc.io/docs/client/react/useInfiniteQuery)

## LinkCard

\`\`\`
<LinkCard source="gh" id="mx-space/kami">
\`\`\`

<LinkCard source="gh" id="mx-space/kami">

\`\`\`
<LinkCard source="gh-commit" id="mx-space/kami/commit/e1eee4136c21ab03ab5690e17025777984c362a0">
\`\`\`

<LinkCard source="gh-commit" id="mx-space/kami/commit/e1eee4136c21ab03ab5690e17025777984c362a0">

## Inline Link Parser

\`\`\`
Inline [Innei](https://github.com/Innei)
\`\`\`

Inline [Innei](https://github.com/Innei)

\`\`\`
Inline [pseudoyu](https://twitter.com/pseudo_yu)
\`\`\`

Inline [pseudoyu](https://twitter.com/pseudo_yu)

\`\`\`
Inline <https://github.com/Innei>
\`\`\`

Inline <https://github.com/Innei>

\`\`\`
Inline https://github.com/Innei
\`\`\`

Inline https://github.com/Innei

## Mention

\`\`\`
[Innei]{GH@Innei}
\`\`\`

[Innei 太菜了]{GH@Innei}

## Alerts

\`\`\`
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.
\`\`\`

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

## KateX

\`\`\`
$ c = \\pm\\sqrt{a^2 + b^2} $
\`\`\`

$ c = \\pm\\sqrt{a^2 + b^2} $

\`\`\`
$c = \\pm\\sqrt{a^2 + b^2}$
\`\`\`
$c = \\pm\\sqrt{a^2 + b^2}$

\`\`\`
$$

P\\left(U,T\\right)=100\\left.\\left(0.6\\min\\left(1,\\frac{U-0.70}{0.90-0.70}\\right)+0.4\\min\\left(1,\\frac{T-4000}{14000-4000}\\right)\\right)\\right.

$$
\`\`\`

$$

P\\left(U,T\\right)=100\\left.\\left(0.6\\min\\left(1,\\frac{U-0.70}{0.90-0.70}\\right)+0.4\\min\\left(1,\\frac{T-4000}{14000-4000}\\right)\\right)\\right.

$$

-`,Dt=new Qt,Ft=()=>D.jsx(pt,{client:Dt,children:D.jsxs(yt,{children:[D.jsx("main",{className:"relative m-auto mt-6 max-w-[800px]",children:D.jsx(bt,{extendsRules:{codeBlock:{react(e,t,n){return D.jsx("pre",{children:D.jsx("code",{children:e.content})})}}},value:At,className:"prose",as:"article"})}),D.jsx(It,{})]})});Ft.meta={title:"Markdown Customize"};export{Ft as MarkdownCustomize};
