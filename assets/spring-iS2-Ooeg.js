import{r as kt,n as S,e as X,s as vt,g as Y,h as G,j as We,k as ge,l as L,p as ce,o as Ue,q as St,f as K,d as je,t as le,v as Ge,w as wt,i as Pt,x as Ot,y as Ft,z as It,A as Rt,B as Bt,C as Nt}from"./StyledButton-lCltMQZu.js";const Kt=(e,t)=>n=>t(e(n)),Le=(...e)=>e.reduce(Kt);function zt(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function qt(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ye(e,t,n){const r=e.getProps();return kt(r,t,n!==void 0?n:r.custom,zt(e),qt(e))}let Wt=S,$e=S;const I=e=>e*1e3,P=e=>e/1e3,Ut={current:!1},He=e=>Array.isArray(e)&&typeof e[0]=="number";function _e(e){return!!(!e||typeof e=="string"&&Ze[e]||He(e)||Array.isArray(e)&&e.every(_e))}const j=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ze={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:j([0,.65,.55,1]),circOut:j([.55,0,1,.45]),backIn:j([.31,.01,.66,-.59]),backOut:j([.33,1.53,.69,.99])};function Je(e){if(e)return He(e)?j(e):Array.isArray(e)?e.map(Je):Ze[e]}function jt(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:a="loop",ease:c,times:l}={}){const o={[t]:n};l&&(o.offset=l);const u=Je(c);return Array.isArray(u)&&(o.easing=u),e.animate(o,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}function Gt(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Qe=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Lt=1e-7,$t=12;function Ht(e,t,n,r,i){let s,a,c=0;do a=t+(n-t)/2,s=Qe(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>Lt&&++c<$t);return a}function $(e,t,n,r){if(e===t&&n===r)return S;const i=s=>Ht(s,0,1,e,n);return s=>s===0||s===1?s:Qe(i(s),t,r)}const _t=$(.42,0,1,1),Zt=$(0,0,.58,1),Xe=$(.42,0,.58,1),Jt=e=>Array.isArray(e)&&typeof e[0]!="number",Ye=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ee=e=>t=>1-e(1-t),be=e=>1-Math.sin(Math.acos(e)),Qt=Ee(be),Xt=Ye(be),et=$(.33,1.53,.69,.99),Ae=Ee(et),Yt=Ye(Ae),Et=e=>(e*=2)<1?.5*Ae(e):.5*(2-Math.pow(2,-10*(e-1))),en={linear:S,easeIn:_t,easeInOut:Xe,easeOut:Zt,circIn:be,circInOut:Xt,circOut:Qt,backIn:Ae,backInOut:Yt,backOut:et,anticipate:Et},Fe=e=>{if(Array.isArray(e)){$e(e.length===4);const[t,n,r,i]=e;return $(t,n,r,i)}else if(typeof e=="string")return en[e];return e},Ve=(e,t)=>n=>!!(X(n)&&vt.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),tt=(e,t,n)=>r=>{if(!X(r))return r;const[i,s,a,c]=r.match(Y);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},tn=e=>L(0,255,e),re={...ge,transform:e=>Math.round(tn(e))},F={test:Ve("rgb","red"),parse:tt("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+re.transform(e)+", "+re.transform(t)+", "+re.transform(n)+", "+G(We.transform(r))+")"};function nn(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const ue={test:Ve("#"),parse:nn,transform:F.transform},N={test:Ve("hsl","hue"),parse:tt("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ce.transform(G(t))+", "+ce.transform(G(n))+", "+G(We.transform(r))+")"},k={test:e=>F.test(e)||ue.test(e)||N.test(e),parse:e=>F.test(e)?F.parse(e):N.test(e)?N.parse(e):ue.parse(e),transform:e=>X(e)?e:e.hasOwnProperty("red")?F.transform(e):N.transform(e)},E=(e,t,n)=>-n*e+n*t+e;function se(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function rn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;i=se(l,c,e+1/3),s=se(l,c,e),a=se(l,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}const ie=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},sn=[ue,F,N],an=e=>sn.find(t=>t.test(e));function Ie(e){const t=an(e);let n=t.parse(e);return t===N&&(n=rn(n)),n}const nt=(e,t)=>{const n=Ie(e),r=Ie(t),i={...n};return s=>(i.red=ie(n.red,r.red,s),i.green=ie(n.green,r.green,s),i.blue=ie(n.blue,r.blue,s),i.alpha=E(n.alpha,r.alpha,s),F.transform(i))};function on(e){var t,n;return isNaN(e)&&X(e)&&(((t=e.match(Y))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Ue))===null||n===void 0?void 0:n.length)||0)>0}const rt={regex:St,countKey:"Vars",token:"${v}",parse:S},st={regex:Ue,countKey:"Colors",token:"${c}",parse:k.parse},it={regex:Y,countKey:"Numbers",token:"${n}",parse:ge.parse};function ae(e,{regex:t,countKey:n,token:r,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(i)))}function Z(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ae(n,rt),ae(n,st),ae(n,it),n}function at(e){return Z(e).values}function ot(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Z(e),s=t.length;return a=>{let c=i;for(let l=0;l<s;l++)l<r?c=c.replace(rt.token,a[l]):l<r+n?c=c.replace(st.token,k.transform(a[l])):c=c.replace(it.token,G(a[l]));return c}}const cn=e=>typeof e=="number"?0:e;function ln(e){const t=at(e);return ot(e)(t.map(cn))}const z={test:on,parse:at,createTransformer:ot,getAnimatableNone:ln},ct=(e,t)=>n=>`${n>0?t:e}`;function lt(e,t){return typeof e=="number"?n=>E(e,t,n):k.test(e)?nt(e,t):e.startsWith("var(")?ct(e,t):ft(e,t)}const ut=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,a)=>lt(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}},un=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=lt(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},ft=(e,t)=>{const n=z.createTransformer(t),r=Z(e),i=Z(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Le(ut(r.values,i.values),n):ct(e,t)},ht=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Re=(e,t)=>n=>E(e,t,n);function fn(e){return typeof e=="number"?Re:typeof e=="string"?k.test(e)?nt:ft:Array.isArray(e)?ut:typeof e=="object"?un:Re}function hn(e,t,n){const r=[],i=n||fn(e[0]),s=e.length-1;for(let a=0;a<s;a++){let c=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||S:t;c=Le(l,c)}r.push(c)}return r}function pt(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if($e(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=hn(t,r,i),c=a.length,l=o=>{let u=0;if(c>1)for(;u<e.length-2&&!(o<e[u+1]);u++);const p=ht(e[u],e[u+1],o);return a[u](p)};return n?o=>l(L(e[0],e[s-1],o)):l}function pn(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ht(0,t,r);e.push(E(n,1,i))}}function dn(e){const t=[0];return pn(t,e.length-1),t}function mn(e,t){return e.map(n=>n*t)}function gn(e,t){return e.map(()=>t||Xe).splice(0,e.length-1)}function J({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Jt(r)?r.map(Fe):Fe(r),s={done:!1,value:t[0]},a=mn(n&&n.length===t.length?n:dn(t),e),c=pt(a,t,{ease:Array.isArray(i)?i:gn(t,i)});return{calculatedDuration:e,next:l=>(s.value=c(l),s.done=l>=e,s)}}function dt(e,t){return t?e*(1e3/t):0}const yn=5;function mt(e,t,n){const r=Math.max(t-yn,0);return dt(n-e(r),t-r)}const oe=.001,bn=.01,Be=10,An=.05,Vn=1;function xn({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s;Wt(e<=I(Be));let a=1-t;a=L(An,Vn,a),e=L(bn,Be,P(e)),a<1?(i=o=>{const u=o*a,p=u*e,m=u-n,h=fe(o,a),f=Math.exp(-p);return oe-m/h*f},s=o=>{const p=o*a*e,m=p*n+n,h=Math.pow(a,2)*Math.pow(o,2)*e,f=Math.exp(-p),A=fe(Math.pow(o,2),a);return(-i(o)+oe>0?-1:1)*((m-h)*f)/A}):(i=o=>{const u=Math.exp(-o*e),p=(o-n)*e+1;return-oe+u*p},s=o=>{const u=Math.exp(-o*e),p=(n-o)*(e*e);return u*p});const c=5/e,l=Mn(i,s,c);if(e=I(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const o=Math.pow(l,2)*r;return{stiffness:o,damping:a*2*Math.sqrt(r*o),duration:e}}}const Tn=12;function Mn(e,t,n){let r=n;for(let i=1;i<Tn;i++)r=r-e(r)/t(r);return r}function fe(e,t){return e*Math.sqrt(1-t*t)}const Cn=["duration","bounce"],Dn=["stiffness","damping","mass"];function Ne(e,t){return t.some(n=>e[n]!==void 0)}function kn(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Ne(e,Dn)&&Ne(e,Cn)){const n=xn(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function gt({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],a={done:!1,value:i},{stiffness:c,damping:l,mass:o,velocity:u,duration:p,isResolvedFromDuration:m}=kn(r),h=u?-P(u):0,f=l/(2*Math.sqrt(c*o)),A=s-i,V=P(Math.sqrt(c/o)),D=Math.abs(A)<5;n||(n=D?.01:2),t||(t=D?.005:.5);let d;if(f<1){const y=fe(V,f);d=T=>{const b=Math.exp(-f*V*T);return s-b*((h+f*V*A)/y*Math.sin(y*T)+A*Math.cos(y*T))}}else if(f===1)d=y=>s-Math.exp(-V*y)*(A+(h+V*A)*y);else{const y=V*Math.sqrt(f*f-1);d=T=>{const b=Math.exp(-f*V*T),w=Math.min(y*T,300);return s-b*((h+f*V*A)*Math.sinh(w)+y*A*Math.cosh(w))/y}}return{calculatedDuration:m&&p||null,next:y=>{const T=d(y);if(m)a.done=y>=p;else{let b=h;y!==0&&(f<1?b=mt(d,y,T):b=0);const w=Math.abs(b)<=n,M=Math.abs(s-T)<=t;a.done=w&&M}return a.value=a.done?s:T,a}}}function Ke({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:c,max:l,restDelta:o=.5,restSpeed:u}){const p=e[0],m={done:!1,value:p},h=g=>c!==void 0&&g<c||l!==void 0&&g>l,f=g=>c===void 0?l:l===void 0||Math.abs(c-g)<Math.abs(l-g)?c:l;let A=n*t;const V=p+A,D=a===void 0?V:a(V);D!==V&&(A=D-p);const d=g=>-A*Math.exp(-g/r),y=g=>D+d(g),T=g=>{const C=d(g),R=y(g);m.done=Math.abs(C)<=o,m.value=m.done?D:R};let b,w;const M=g=>{h(m.value)&&(b=g,w=gt({keyframes:[m.value,f(m.value)],velocity:mt(y,g,m.value),damping:i,stiffness:s,restDelta:o,restSpeed:u}))};return M(0),{calculatedDuration:null,next:g=>{let C=!1;return!w&&b===void 0&&(C=!0,T(g),M(g)),b!==void 0&&g>b?w.next(g-b):(!C&&T(g),m)}}}const vn=e=>{const t=({timestamp:n})=>e(n);return{start:()=>K.update(t,!0),stop:()=>je(t),now:()=>le.isProcessing?le.timestamp:performance.now()}},ze=2e4;function qe(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ze;)t+=n,r=e.next(t);return t>=ze?1/0:t}const Sn={decay:Ke,inertia:Ke,tween:J,keyframes:J,spring:gt};function Q({autoplay:e=!0,delay:t=0,driver:n=vn,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:c="loop",onPlay:l,onStop:o,onComplete:u,onUpdate:p,...m}){let h=1,f=!1,A,V;const D=()=>{V=new Promise(x=>{A=x})};D();let d;const y=Sn[i]||J;let T;y!==J&&typeof r[0]!="number"&&(T=pt([0,100],r,{clamp:!1}),r=[0,100]);const b=y({...m,keyframes:r});let w;c==="mirror"&&(w=y({...m,keyframes:[...r].reverse(),velocity:-(m.velocity||0)}));let M="idle",g=null,C=null,R=null;b.calculatedDuration===null&&s&&(b.calculatedDuration=qe(b));const{calculatedDuration:ee}=b;let q=1/0,B=1/0;ee!==null&&(q=ee+a,B=q*(s+1)-a);let v=0;const te=x=>{if(C===null)return;h>0&&(C=Math.min(C,x)),h<0&&(C=Math.min(x-B/h,C)),g!==null?v=g:v=Math.round(x-C)*h;const W=v-t*(h>=0?1:-1),ke=h>=0?W<0:W>B;v=Math.max(W,0),M==="finished"&&g===null&&(v=B);let ve=v,Se=b;if(s){const ne=v/q;let H=Math.floor(ne),O=ne%1;!O&&ne>=1&&(O=1),O===1&&H--,H=Math.min(H,s+1);const Pe=!!(H%2);Pe&&(c==="reverse"?(O=1-O,a&&(O-=a/q)):c==="mirror"&&(Se=w));let Oe=L(0,1,O);v>B&&(Oe=c==="reverse"&&Pe?1:0),ve=Oe*q}const U=ke?{done:!1,value:r[0]}:Se.next(ve);T&&(U.value=T(U.value));let{done:we}=U;!ke&&ee!==null&&(we=h>=0?v>=B:v<=0);const Dt=g===null&&(M==="finished"||M==="running"&&we);return p&&p(U.value),Dt&&Ct(),U},Te=()=>{d&&d.stop(),d=void 0},Me=()=>{M="idle",Te(),A(),D(),C=R=null},Ct=()=>{M="finished",u&&u(),Te(),A()},Ce=()=>{if(f)return;d||(d=n(te));const x=d.now();l&&l(),g!==null?C=x-g:(!C||M==="finished")&&(C=x),M==="finished"&&D(),R=C,g=null,M="running",d.start()};e&&Ce();const De={then(x,W){return V.then(x,W)},get time(){return P(v)},set time(x){x=I(x),v=x,g!==null||!d||h===0?g=x:C=d.now()-x/h},get duration(){const x=b.calculatedDuration===null?qe(b):b.calculatedDuration;return P(x)},get speed(){return h},set speed(x){x===h||!d||(h=x,De.time=P(v))},get state(){return M},play:Ce,pause:()=>{M="paused",g=v},stop:()=>{f=!0,M!=="idle"&&(M="idle",o&&o(),Me())},cancel:()=>{R!==null&&te(R),Me()},complete:()=>{M="finished"},sample:x=>(C=0,te(x))};return De}function wn(e){let t;return()=>(t===void 0&&(t=e()),t)}const Pn=wn(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),On=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),_=10,Fn=2e4,In=(e,t)=>t.type==="spring"||e==="backgroundColor"||!_e(t.ease);function Rn(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Pn()&&On.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let a=!1,c,l;const o=()=>{l=new Promise(d=>{c=d})};o();let{keyframes:u,duration:p=300,ease:m,times:h}=i;if(In(t,i)){const d=Q({...i,repeat:0,delay:0});let y={done:!1,value:u[0]};const T=[];let b=0;for(;!y.done&&b<Fn;)y=d.sample(b),T.push(y.value),b+=_;h=void 0,u=T,p=b-_,m="linear"}const f=jt(e.owner.current,t,u,{...i,duration:p,ease:m,times:h}),A=()=>f.cancel(),V=()=>{K.update(A),c(),o()};return f.onfinish=()=>{e.set(Gt(u,i)),r&&r(),V()},{then(d,y){return l.then(d,y)},attachTimeline(d){return f.timeline=d,f.onfinish=null,S},get time(){return P(f.currentTime||0)},set time(d){f.currentTime=I(d)},get speed(){return f.playbackRate},set speed(d){f.playbackRate=d},get duration(){return P(p)},play:()=>{a||(f.play(),je(A))},pause:()=>f.pause(),stop:()=>{if(a=!0,f.playState==="idle")return;const{currentTime:d}=f;if(d){const y=Q({...i,autoplay:!1});e.setWithVelocity(y.sample(d-_).value,y.sample(d).value,_)}V()},complete:()=>f.finish(),cancel:V}}function Bn({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:S,pause:S,stop:S,then:s=>(s(),Promise.resolve()),cancel:S,complete:S});return t?Q({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Nn={type:"spring",stiffness:500,damping:25,restSpeed:10},Kn=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),zn={type:"keyframes",duration:.8},qn={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Wn=(e,{keyframes:t})=>t.length>2?zn:Ge.has(e)?e.startsWith("scale")?Kn(t[1]):Nn:qn,he=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(z.test(t)||t==="0")&&!t.startsWith("url(")),Un=new Set(["brightness","contrast","saturate","opacity"]);function jn(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Y)||[];if(!r)return e;const i=n.replace(r,"");let s=Un.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Gn=/([a-z-]*)\(.*?\)/g,pe={...z,getAnimatableNone:e=>{const t=e.match(Gn);return t?t.map(jn).join(" "):e}},Ln={...wt,color:k,backgroundColor:k,outlineColor:k,fill:k,stroke:k,borderColor:k,borderTopColor:k,borderRightColor:k,borderBottomColor:k,borderLeftColor:k,filter:pe,WebkitFilter:pe},$n=e=>Ln[e];function yt(e,t){let n=$n(e);return n!==pe&&(n=z),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const bt=e=>/^0[^.\s]+$/.test(e);function Hn(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||bt(e)}function _n(e,t,n,r){const i=he(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const a=r.from!==void 0?r.from:e.get();let c;const l=[];for(let o=0;o<s.length;o++)s[o]===null&&(s[o]=o===0?a:s[o-1]),Hn(s[o])&&l.push(o),typeof s[o]=="string"&&s[o]!=="none"&&s[o]!=="0"&&(c=s[o]);if(i&&l.length&&c)for(let o=0;o<l.length;o++){const u=l[o];s[u]=yt(t,c)}return s}function Zn({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:c,from:l,elapsed:o,...u}){return!!Object.keys(u).length}function At(e,t){return e[t]||e.default||e}const Jn=(e,t,n,r={})=>i=>{const s=At(r,e)||{},a=s.delay||r.delay||0;let{elapsed:c=0}=r;c=c-I(a);const l=_n(t,e,n,s),o=l[0],u=l[l.length-1],p=he(e,o),m=he(e,u);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-c,onUpdate:f=>{t.set(f),s.onUpdate&&s.onUpdate(f)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(Zn(s)||(h={...h,...Wn(e,h)}),h.duration&&(h.duration=I(h.duration)),h.repeatDelay&&(h.repeatDelay=I(h.repeatDelay)),!p||!m||Ut.current||s.type===!1)return Bn(h);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const f=Rn(t,e,h);if(f)return f}return Q(h)};function Qn(e){return!!(Pt(e)&&e.add)}const Xn=e=>/^\-?\d*\.?\d+$/.test(e);function Yn(e,t){e.indexOf(t)===-1&&e.push(t)}function En(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class er{constructor(){this.subscriptions=[]}add(t){return Yn(this.subscriptions,t),()=>En(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tr=e=>!isNaN(parseFloat(e));class nr{constructor(t,n={}){this.version="10.16.16",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:a}=le;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,K.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>K.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=tr(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new er);const r=this.events[t].add(n);return t==="change"?()=>{r(),K.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?dt(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vt(e,t){return new nr(e,t)}const xt=e=>t=>t.test(e),rr={test:e=>e==="auto",parse:e=>e},Tt=[ge,Ot,ce,Ft,It,Rt,rr],pr=e=>Tt.find(xt(e)),sr=[...Tt,k,z],ir=e=>sr.find(xt(e));function ar(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Vt(n))}function xe(e,t){const n=ye(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const a in s){const c=Bt(s[a]);ar(e,a,c)}}function de(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&xe(e,i),e.variantChildren&&e.variantChildren.forEach(s=>{de(s,t)})})}function dr(e,t){if(Array.isArray(t))return de(e,t);if(typeof t=="string")return de(e,[t]);xe(e,t)}function mr(e,t,n){var r,i;const s=Object.keys(t).filter(c=>!e.hasValue(c)),a=s.length;if(a)for(let c=0;c<a;c++){const l=s[c],o=t[l];let u=null;Array.isArray(o)&&(u=o[0]),u===null&&(u=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),u!=null&&(typeof u=="string"&&(Xn(u)||bt(u))?u=parseFloat(u):!ir(u)&&z.test(o)&&(u=yt(l,o)),e.addValue(l,Vt(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function or(e,t){return t?(t[e]||t.default||t).from:void 0}function gr(e,t,n){const r={};for(const i in e){const s=or(i,t);if(s!==void 0)r[i]=s;else{const a=n.getValue(i);a&&(r[i]=a.get())}}return r}function cr({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function lr(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Mt(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:a,...c}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const o=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const p in c){const m=e.getValue(p),h=c[p];if(!m||h===void 0||u&&cr(u,p))continue;const f={delay:n,elapsed:0,...At(s||{},p)};if(window.HandoffAppearAnimations){const D=e.getProps()[Nt];if(D){const d=window.HandoffAppearAnimations(D,p,m,K);d!==null&&(f.elapsed=d,f.isHandoff=!0)}}let A=!f.isHandoff&&!lr(m,h);if(f.type==="spring"&&(m.getVelocity()||f.velocity)&&(A=!1),m.animation&&(A=!1),A)continue;m.start(Jn(p,m,h,e.shouldReduceMotion&&Ge.has(p)?{type:!1}:f));const V=m.animation;Qn(l)&&(l.add(p),V.then(()=>l.remove(p))),o.push(V)}return a&&Promise.all(o).then(()=>{a&&xe(e,a)}),o}function me(e,t,n={}){const r=ye(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Mt(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:o=0,staggerChildren:u,staggerDirection:p}=i;return ur(e,t,o+l,u,p,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[l,o]=c==="beforeChildren"?[s,a]:[a,s];return l().then(()=>o())}else return Promise.all([s(),a(n.delay)])}function ur(e,t,n=0,r=0,i=1,s){const a=[],c=(e.variantChildren.size-1)*r,l=i===1?(o=0)=>o*r:(o=0)=>c-o*r;return Array.from(e.variantChildren).sort(fr).forEach((o,u)=>{o.notify("AnimationStart",t),a.push(me(o,t,{...s,delay:n+l(u)}).then(()=>o.notify("AnimationComplete",t)))}),Promise.all(a)}function fr(e,t){return e.sortNodePosition(t)}function yr(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>me(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=me(e,t,n);else{const i=typeof t=="function"?ye(e,t,n.custom):t;r=Promise.all(Mt(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const br={type:"spring",damping:24},Ar={type:"spring",stiffness:300,damping:20},Vr={duration:.35,type:"spring",stiffness:120,damping:20};export{er as S,br as a,Vt as b,yr as c,dr as d,I as e,P as f,E as g,ht as h,Jn as i,z as j,Qt as k,Yn as l,Ar as m,En as n,At as o,Le as p,Xn as q,ye as r,Vr as s,pr as t,$e as u,Qn as v,gr as w,mr as x,$n as y,Q as z};