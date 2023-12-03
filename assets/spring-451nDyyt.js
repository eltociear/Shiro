import{r as b,j as Ve,R as bn}from"./index-ZT6B9tma.js";import{a as Ze}from"./helper-Oi49T1hx.js";import{s as xn}from"./index-iAcAeRlm.js";const ut=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ue=b.createContext({}),ft=b.createContext(null),dt=typeof document<"u",An=dt?b.useLayoutEffect:b.useEffect,mt=b.createContext({strict:!1}),ht=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),wn="framerAppearId",pt="data-"+ht(wn);function Cn(e,t,n,r){const{visualElement:s}=b.useContext(ue),a=b.useContext(mt),o=b.useContext(ft),c=b.useContext(ut).reducedMotion,l=b.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:s,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:c}));const i=l.current;b.useInsertionEffect(()=>{i&&i.update(n,o)});const u=b.useRef(!!n[pt]);return An(()=>{i&&(i.render(),u.current&&i.animationState&&i.animationState.animateChanges())}),b.useEffect(()=>{i&&(i.updateFeatures(),!u.current&&i.animationState&&i.animationState.animateChanges(),u.current&&(window.HandoffAppearAnimations=!1,u.current=!1))}),i}function Vn(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Tn(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Vn(n)&&(n.current=r))},[t])}function Te(e){return typeof e=="string"||Array.isArray(e)}function gt(e){return typeof e=="object"&&typeof e.start=="function"}const Mn=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sn=["initial",...Mn];function Fe(e){return gt(e.animate)||Sn.some(t=>Te(e[t]))}function vn(e){return!!(Fe(e)||e.variants)}function kn(e,t){if(Fe(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Te(n)?n:void 0,animate:Te(r)?r:void 0}}return e.inherit!==!1?t:{}}function Pn(e){const{initial:t,animate:n}=kn(e,b.useContext(ue));return b.useMemo(()=>({initial:t,animate:n}),[_e(t),_e(n)])}function _e(e){return Array.isArray(e)?e.join(" "):e}const Xe={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Me={};for(const e in Xe)Me[e]={isEnabled:t=>Xe[e].some(n=>!!t[n])};function Dn(e){for(const t in e)Me[t]={...Me[t],...e[t]}}const On=b.createContext({}),Fn=b.createContext({}),Rn=Symbol.for("motionComponentSymbol");function In({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:s}){e&&Dn(e);function a(c,l){let i;const u={...b.useContext(ut),...c,layoutId:Bn(c)},{isStatic:f}=u,d=Pn(c),m=r(c,f);if(!f&&dt){d.visualElement=Cn(s,m,u,t);const h=b.useContext(Fn),x=b.useContext(mt).strict;d.visualElement&&(i=d.visualElement.loadFeatures(u,x,e,h))}return b.createElement(ue.Provider,{value:d},i&&d.visualElement?b.createElement(i,{visualElement:d.visualElement,...u}):null,n(s,c,Tn(m,d.visualElement,l),m,f,d.visualElement))}const o=b.forwardRef(a);return o[Rn]=s,o}function Bn({layoutId:e}){const t=b.useContext(On).id;return t&&e!==void 0?t+"-"+e:e}function Ln(e){function t(r,s={}){return In(e(r,s))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,s)=>(n.has(s)||n.set(s,t(s)),n.get(s))})}const Wn=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function yt(e){return typeof e!="string"||e.includes("-")?!1:!!(Wn.indexOf(e)>-1||/[A-Z]/.test(e))}const bt={};function ea(e){Object.assign(bt,e)}const fe=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],de=new Set(fe);function xt(e,{layout:t,layoutId:n}){return de.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!bt[e]||e==="opacity")}const B=e=>!!(e&&e.getVelocity),zn={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},jn=fe.length;function En(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,s){let a="";for(let o=0;o<jn;o++){const c=fe[o];if(e[c]!==void 0){const l=zn[c]||c;a+=`${l}(${e[c]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(e,r?"":a):n&&r&&(a="none"),a}const At=e=>t=>typeof t=="string"&&t.startsWith(e),Nn=At("--"),ta=At("var(--"),$n=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Hn=(e,t)=>t&&typeof e=="number"?t.transform(e):e,H=(e,t,n)=>Math.min(Math.max(n,e),t),G={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},X={...G,transform:e=>H(0,1,e)},re={...G,default:1},Y=e=>Math.round(e*1e5)/1e5,me=/(-)?([\d]*\.?[\d])+/g,wt=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Gn=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function J(e){return typeof e=="string"}const ee=e=>({test:t=>J(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),F=ee("deg"),$=ee("%"),p=ee("px"),Kn=ee("vh"),Un=ee("vw"),Ye={...$,parse:e=>$.parse(e)/100,transform:e=>$.transform(e*100)},Qe={...G,transform:Math.round},Ct={borderWidth:p,borderTopWidth:p,borderRightWidth:p,borderBottomWidth:p,borderLeftWidth:p,borderRadius:p,radius:p,borderTopLeftRadius:p,borderTopRightRadius:p,borderBottomRightRadius:p,borderBottomLeftRadius:p,width:p,maxWidth:p,height:p,maxHeight:p,size:p,top:p,right:p,bottom:p,left:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,rotate:F,rotateX:F,rotateY:F,rotateZ:F,scale:re,scaleX:re,scaleY:re,scaleZ:re,skew:F,skewX:F,skewY:F,distance:p,translateX:p,translateY:p,translateZ:p,x:p,y:p,z:p,perspective:p,transformPerspective:p,opacity:X,originX:Ye,originY:Ye,originZ:p,zIndex:Qe,fillOpacity:X,strokeOpacity:X,numOctaves:Qe};function Vt(e,t,n,r){const{style:s,vars:a,transform:o,transformOrigin:c}=e;let l=!1,i=!1,u=!0;for(const f in t){const d=t[f];if(Nn(f)){a[f]=d;continue}const m=Ct[f],h=Hn(d,m);if(de.has(f)){if(l=!0,o[f]=h,!u)continue;d!==(m.default||0)&&(u=!1)}else f.startsWith("origin")?(i=!0,c[f]=h):s[f]=h}if(t.transform||(l||r?s.transform=En(e.transform,n,u,r):s.transform&&(s.transform="none")),i){const{originX:f="50%",originY:d="50%",originZ:m=0}=c;s.transformOrigin=`${f} ${d} ${m}`}}const Re=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Tt(e,t,n){for(const r in t)!B(t[r])&&!xt(r,n)&&(e[r]=t[r])}function qn({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Re();return Vt(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Zn(e,t,n){const r=e.style||{},s={};return Tt(s,r,e),Object.assign(s,qn(e,t,n)),e.transformValues?e.transformValues(s):s}function _n(e,t,n){const r={},s=Zn(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=s,r}const Xn=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function oe(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||Xn.has(e)}let Mt=e=>!oe(e);function Yn(e){e&&(Mt=t=>t.startsWith("on")?!oe(t):e(t))}try{Yn(require("@emotion/is-prop-valid").default)}catch{}function Qn(e,t,n){const r={};for(const s in e)s==="values"&&typeof e.values=="object"||(Mt(s)||n===!0&&oe(s)||!t&&!oe(s)||e.draggable&&s.startsWith("onDrag"))&&(r[s]=e[s]);return r}function Je(e,t,n){return typeof e=="string"?e:p.transform(t+n*e)}function Jn(e,t,n){const r=Je(t,e.x,e.width),s=Je(n,e.y,e.height);return`${r} ${s}`}const er={offset:"stroke-dashoffset",array:"stroke-dasharray"},tr={offset:"strokeDashoffset",array:"strokeDasharray"};function nr(e,t,n=1,r=0,s=!0){e.pathLength=1;const a=s?er:tr;e[a.offset]=p.transform(-r);const o=p.transform(t),c=p.transform(n);e[a.array]=`${o} ${c}`}function St(e,{attrX:t,attrY:n,attrScale:r,originX:s,originY:a,pathLength:o,pathSpacing:c=1,pathOffset:l=0,...i},u,f,d){if(Vt(e,i,u,d),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:h,dimensions:x}=e;m.transform&&(x&&(h.transform=m.transform),delete m.transform),x&&(s!==void 0||a!==void 0||h.transform)&&(h.transformOrigin=Jn(x,s!==void 0?s:.5,a!==void 0?a:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),o!==void 0&&nr(m,o,c,l,!1)}const vt=()=>({...Re(),attrs:{}}),kt=e=>typeof e=="string"&&e.toLowerCase()==="svg";function rr(e,t,n,r){const s=b.useMemo(()=>{const a=vt();return St(a,t,{enableHardwareAcceleration:!1},kt(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Tt(a,e.style,e),s.style={...a,...s.style}}return s}function sr(e=!1){return(n,r,s,{latestValues:a},o)=>{const l=(yt(n)?rr:_n)(r,a,o,n),u={...Qn(r,typeof n=="string",e),...l,ref:s},{children:f}=r,d=b.useMemo(()=>B(f)?f.get():f,[f]);return b.createElement(n,{...u,children:d})}}function ar(e,{style:t,vars:n},r,s){Object.assign(e.style,t,s&&s.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const or=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ir(e,t,n,r){ar(e,t,void 0,r);for(const s in t.attrs)e.setAttribute(or.has(s)?s:ht(s),t.attrs[s])}function Pt(e,t){const{style:n}=e,r={};for(const s in n)(B(n[s])||t.style&&B(t.style[s])||xt(s,e))&&(r[s]=n[s]);return r}function cr(e,t){const n=Pt(e,t);for(const r in e)if(B(e[r])||B(t[r])){const s=fe.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=e[r]}return n}function Dt(e,t,n,r={},s={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,s)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,s)),t}function lr(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const ur=e=>Array.isArray(e),fr=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),dr=e=>ur(e)?e[e.length-1]||0:e;function mr(e){const t=B(e)?e.get():e;return fr(t)?t.toValue():t}function hr({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,s,a){const o={latestValues:pr(r,s,a,e),renderState:t()};return n&&(o.mount=c=>n(r,c,o)),o}const Ot=e=>(t,n)=>{const r=b.useContext(ue),s=b.useContext(ft),a=()=>hr(e,t,r,s);return n?a():lr(a)};function pr(e,t,n,r){const s={},a=r(e,{});for(const d in a)s[d]=mr(a[d]);let{initial:o,animate:c}=e;const l=Fe(e),i=vn(e);t&&i&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),c===void 0&&(c=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?c:o;return f&&typeof f!="boolean"&&!gt(f)&&(Array.isArray(f)?f:[f]).forEach(m=>{const h=Dt(e,m);if(!h)return;const{transitionEnd:x,transition:w,...M}=h;for(const g in M){let y=M[g];if(Array.isArray(y)){const T=u?y.length-1:0;y=y[T]}y!==null&&(s[g]=y)}for(const g in x)s[g]=x[g]}),s}const D=e=>e;class et{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function gr(e){let t=new et,n=new et,r=0,s=!1,a=!1;const o=new WeakSet,c={schedule:(l,i=!1,u=!1)=>{const f=u&&s,d=f?t:n;return i&&o.add(l),d.add(l)&&f&&s&&(r=t.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(s){a=!0;return}if(s=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let i=0;i<r;i++){const u=t.order[i];u(l),o.has(u)&&(c.schedule(u),e())}s=!1,a&&(a=!1,c.process(l))}};return c}const se=["prepare","read","update","preRender","render","postRender"],yr=40;function br(e,t){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=se.reduce((f,d)=>(f[d]=gr(()=>n=!0),f),{}),o=f=>a[f].process(s),c=()=>{const f=performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(f-s.timestamp,yr),1),s.timestamp=f,s.isProcessing=!0,se.forEach(o),s.isProcessing=!1,n&&t&&(r=!1,e(c))},l=()=>{n=!0,r=!0,s.isProcessing||e(c)};return{schedule:se.reduce((f,d)=>{const m=a[d];return f[d]=(h,x=!1,w=!1)=>(n||l(),m.schedule(h,x,w)),f},{}),cancel:f=>se.forEach(d=>a[d].cancel(f)),state:s,steps:a}}const{schedule:R,cancel:Ft,state:Q,steps:na}=br(typeof requestAnimationFrame<"u"?requestAnimationFrame:D,!0),xr={useVisualState:Ot({scrapeMotionValuesFromProps:cr,createRenderState:vt,onMount:(e,t,{renderState:n,latestValues:r})=>{R.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),R.render(()=>{St(n,r,{enableHardwareAcceleration:!1},kt(t.tagName),e.transformTemplate),ir(t,n)})}})},Ar={useVisualState:Ot({scrapeMotionValuesFromProps:Pt,createRenderState:Re})};function wr(e,{forwardMotionProps:t=!1},n,r){return{...yt(e)?xr:Ar,preloadedFeatures:n,useRender:sr(t),createVisualElement:r,Component:e}}const Cr=(e,t)=>n=>t(e(n)),Rt=(...e)=>e.reduce(Cr);function Vr(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Tr(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ie(e,t,n){const r=e.getProps();return Dt(r,t,n!==void 0?n:r.custom,Vr(e),Tr(e))}let Mr=D,It=D;const z=e=>e*1e3,I=e=>e/1e3,Sr={current:!1},Bt=e=>Array.isArray(e)&&typeof e[0]=="number";function Lt(e){return!!(!e||typeof e=="string"&&Wt[e]||Bt(e)||Array.isArray(e)&&e.every(Lt))}const _=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Wt={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_([0,.65,.55,1]),circOut:_([.55,0,1,.45]),backIn:_([.31,.01,.66,-.59]),backOut:_([.33,1.53,.69,.99])};function zt(e){if(e)return Bt(e)?_(e):Array.isArray(e)?e.map(zt):Wt[e]}function vr(e,t,n,{delay:r=0,duration:s,repeat:a=0,repeatType:o="loop",ease:c,times:l}={}){const i={[t]:n};l&&(i.offset=l);const u=zt(c);return Array.isArray(u)&&(i.easing=u),e.animate(i,{delay:r,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function kr(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const jt=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Pr=1e-7,Dr=12;function Or(e,t,n,r,s){let a,o,c=0;do o=t+(n-t)/2,a=jt(o,r,s)-e,a>0?n=o:t=o;while(Math.abs(a)>Pr&&++c<Dr);return o}function te(e,t,n,r){if(e===t&&n===r)return D;const s=a=>Or(a,0,1,e,n);return a=>a===0||a===1?a:jt(s(a),t,r)}const Fr=te(.42,0,1,1),Rr=te(0,0,.58,1),Et=te(.42,0,.58,1),Ir=e=>Array.isArray(e)&&typeof e[0]!="number",Nt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,$t=e=>t=>1-e(1-t),Ht=e=>1-Math.sin(Math.acos(e)),Gt=$t(Ht),Br=Nt(Gt),Kt=te(.33,1.53,.69,.99),Be=$t(Kt),Lr=Nt(Be),Wr=e=>(e*=2)<1?.5*Be(e):.5*(2-Math.pow(2,-10*(e-1))),zr={linear:D,easeIn:Fr,easeInOut:Et,easeOut:Rr,circIn:Ht,circInOut:Br,circOut:Gt,backIn:Be,backInOut:Lr,backOut:Kt,anticipate:Wr},tt=e=>{if(Array.isArray(e)){It(e.length===4);const[t,n,r,s]=e;return te(t,n,r,s)}else if(typeof e=="string")return zr[e];return e},Le=(e,t)=>n=>!!(J(n)&&Gn.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Ut=(e,t,n)=>r=>{if(!J(r))return r;const[s,a,o,c]=r.match(me);return{[e]:parseFloat(s),[t]:parseFloat(a),[n]:parseFloat(o),alpha:c!==void 0?parseFloat(c):1}},jr=e=>H(0,255,e),be={...G,transform:e=>Math.round(jr(e))},W={test:Le("rgb","red"),parse:Ut("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+be.transform(e)+", "+be.transform(t)+", "+be.transform(n)+", "+Y(X.transform(r))+")"};function Er(e){let t="",n="",r="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const Se={test:Le("#"),parse:Er,transform:W.transform},N={test:Le("hsl","hue"),parse:Ut("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+$.transform(Y(t))+", "+$.transform(Y(n))+", "+Y(X.transform(r))+")"},k={test:e=>W.test(e)||Se.test(e)||N.test(e),parse:e=>W.test(e)?W.parse(e):N.test(e)?N.parse(e):Se.parse(e),transform:e=>J(e)?e:e.hasOwnProperty("red")?W.transform(e):N.transform(e)},he=(e,t,n)=>-n*e+n*t+e;function xe(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Nr({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,a=0,o=0;if(!t)s=a=o=n;else{const c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;s=xe(l,c,e+1/3),a=xe(l,c,e),o=xe(l,c,e-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}const Ae=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},$r=[Se,W,N],Hr=e=>$r.find(t=>t.test(e));function nt(e){const t=Hr(e);let n=t.parse(e);return t===N&&(n=Nr(n)),n}const qt=(e,t)=>{const n=nt(e),r=nt(t),s={...n};return a=>(s.red=Ae(n.red,r.red,a),s.green=Ae(n.green,r.green,a),s.blue=Ae(n.blue,r.blue,a),s.alpha=he(n.alpha,r.alpha,a),W.transform(s))};function Gr(e){var t,n;return isNaN(e)&&J(e)&&(((t=e.match(me))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(wt))===null||n===void 0?void 0:n.length)||0)>0}const Zt={regex:$n,countKey:"Vars",token:"${v}",parse:D},_t={regex:wt,countKey:"Colors",token:"${c}",parse:k.parse},Xt={regex:me,countKey:"Numbers",token:"${n}",parse:G.parse};function we(e,{regex:t,countKey:n,token:r,parse:s}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...a.map(s)))}function ie(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&we(n,Zt),we(n,_t),we(n,Xt),n}function Yt(e){return ie(e).values}function Qt(e){const{values:t,numColors:n,numVars:r,tokenised:s}=ie(e),a=t.length;return o=>{let c=s;for(let l=0;l<a;l++)l<r?c=c.replace(Zt.token,o[l]):l<r+n?c=c.replace(_t.token,k.transform(o[l])):c=c.replace(Xt.token,Y(o[l]));return c}}const Kr=e=>typeof e=="number"?0:e;function Ur(e){const t=Yt(e);return Qt(e)(t.map(Kr))}const K={test:Gr,parse:Yt,createTransformer:Qt,getAnimatableNone:Ur},Jt=(e,t)=>n=>`${n>0?t:e}`;function en(e,t){return typeof e=="number"?n=>he(e,t,n):k.test(e)?qt(e,t):e.startsWith("var(")?Jt(e,t):nn(e,t)}const tn=(e,t)=>{const n=[...e],r=n.length,s=e.map((a,o)=>en(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=s[o](a);return n}},qr=(e,t)=>{const n={...e,...t},r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=en(e[s],t[s]));return s=>{for(const a in r)n[a]=r[a](s);return n}},nn=(e,t)=>{const n=K.createTransformer(t),r=ie(e),s=ie(t);return r.numVars===s.numVars&&r.numColors===s.numColors&&r.numNumbers>=s.numNumbers?Rt(tn(r.values,s.values),n):Jt(e,t)},rn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},rt=(e,t)=>n=>he(e,t,n);function Zr(e){return typeof e=="number"?rt:typeof e=="string"?k.test(e)?qt:nn:Array.isArray(e)?tn:typeof e=="object"?qr:rt}function _r(e,t,n){const r=[],s=n||Zr(e[0]),a=e.length-1;for(let o=0;o<a;o++){let c=s(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||D:t;c=Rt(l,c)}r.push(c)}return r}function sn(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const a=e.length;if(It(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=_r(t,r,s),c=o.length,l=i=>{let u=0;if(c>1)for(;u<e.length-2&&!(i<e[u+1]);u++);const f=rn(e[u],e[u+1],i);return o[u](f)};return n?i=>l(H(e[0],e[a-1],i)):l}function Xr(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const s=rn(0,t,r);e.push(he(n,1,s))}}function Yr(e){const t=[0];return Xr(t,e.length-1),t}function Qr(e,t){return e.map(n=>n*t)}function Jr(e,t){return e.map(()=>t||Et).splice(0,e.length-1)}function ce({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const s=Ir(r)?r.map(tt):tt(r),a={done:!1,value:t[0]},o=Qr(n&&n.length===t.length?n:Yr(t),e),c=sn(o,t,{ease:Array.isArray(s)?s:Jr(t,s)});return{calculatedDuration:e,next:l=>(a.value=c(l),a.done=l>=e,a)}}function an(e,t){return t?e*(1e3/t):0}const es=5;function on(e,t,n){const r=Math.max(t-es,0);return an(n-e(r),t-r)}const Ce=.001,ts=.01,st=10,ns=.05,rs=1;function ss({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let s,a;Mr(e<=z(st));let o=1-t;o=H(ns,rs,o),e=H(ts,st,I(e)),o<1?(s=i=>{const u=i*o,f=u*e,d=u-n,m=ve(i,o),h=Math.exp(-f);return Ce-d/m*h},a=i=>{const f=i*o*e,d=f*n+n,m=Math.pow(o,2)*Math.pow(i,2)*e,h=Math.exp(-f),x=ve(Math.pow(i,2),o);return(-s(i)+Ce>0?-1:1)*((d-m)*h)/x}):(s=i=>{const u=Math.exp(-i*e),f=(i-n)*e+1;return-Ce+u*f},a=i=>{const u=Math.exp(-i*e),f=(n-i)*(e*e);return u*f});const c=5/e,l=os(s,a,c);if(e=z(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const i=Math.pow(l,2)*r;return{stiffness:i,damping:o*2*Math.sqrt(r*i),duration:e}}}const as=12;function os(e,t,n){let r=n;for(let s=1;s<as;s++)r=r-e(r)/t(r);return r}function ve(e,t){return e*Math.sqrt(1-t*t)}const is=["duration","bounce"],cs=["stiffness","damping","mass"];function at(e,t){return t.some(n=>e[n]!==void 0)}function ls(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!at(e,cs)&&at(e,is)){const n=ss(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function cn({keyframes:e,restDelta:t,restSpeed:n,...r}){const s=e[0],a=e[e.length-1],o={done:!1,value:s},{stiffness:c,damping:l,mass:i,velocity:u,duration:f,isResolvedFromDuration:d}=ls(r),m=u?-I(u):0,h=l/(2*Math.sqrt(c*i)),x=a-s,w=I(Math.sqrt(c/i)),M=Math.abs(x)<5;n||(n=M?.01:2),t||(t=M?.005:.5);let g;if(h<1){const y=ve(w,h);g=T=>{const C=Math.exp(-h*w*T);return a-C*((m+h*w*x)/y*Math.sin(y*T)+x*Math.cos(y*T))}}else if(h===1)g=y=>a-Math.exp(-w*y)*(x+(m+w*x)*y);else{const y=w*Math.sqrt(h*h-1);g=T=>{const C=Math.exp(-h*w*T),O=Math.min(y*T,300);return a-C*((m+h*w*x)*Math.sinh(O)+y*x*Math.cosh(O))/y}}return{calculatedDuration:d&&f||null,next:y=>{const T=g(y);if(d)o.done=y>=f;else{let C=m;y!==0&&(h<1?C=on(g,y,T):C=0);const O=Math.abs(C)<=n,S=Math.abs(a-T)<=t;o.done=O&&S}return o.value=o.done?a:T,o}}}function ot({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:a=500,modifyTarget:o,min:c,max:l,restDelta:i=.5,restSpeed:u}){const f=e[0],d={done:!1,value:f},m=A=>c!==void 0&&A<c||l!==void 0&&A>l,h=A=>c===void 0?l:l===void 0||Math.abs(c-A)<Math.abs(l-A)?c:l;let x=n*t;const w=f+x,M=o===void 0?w:o(w);M!==w&&(x=M-f);const g=A=>-x*Math.exp(-A/r),y=A=>M+g(A),T=A=>{const v=g(A),j=y(A);d.done=Math.abs(v)<=i,d.value=d.done?M:j};let C,O;const S=A=>{m(d.value)&&(C=A,O=cn({keyframes:[d.value,h(d.value)],velocity:on(y,A,d.value),damping:s,stiffness:a,restDelta:i,restSpeed:u}))};return S(0),{calculatedDuration:null,next:A=>{let v=!1;return!O&&C===void 0&&(v=!0,T(A),S(A)),C!==void 0&&A>C?O.next(A-C):(!v&&T(A),d)}}}const us=e=>{const t=({timestamp:n})=>e(n);return{start:()=>R.update(t,!0),stop:()=>Ft(t),now:()=>Q.isProcessing?Q.timestamp:performance.now()}},it=2e4;function ct(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<it;)t+=n,r=e.next(t);return t>=it?1/0:t}const fs={decay:ot,inertia:ot,tween:ce,keyframes:ce,spring:cn};function le({autoplay:e=!0,delay:t=0,driver:n=us,keyframes:r,type:s="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:c="loop",onPlay:l,onStop:i,onComplete:u,onUpdate:f,...d}){let m=1,h=!1,x,w;const M=()=>{w=new Promise(V=>{x=V})};M();let g;const y=fs[s]||ce;let T;y!==ce&&typeof r[0]!="number"&&(T=sn([0,100],r,{clamp:!1}),r=[0,100]);const C=y({...d,keyframes:r});let O;c==="mirror"&&(O=y({...d,keyframes:[...r].reverse(),velocity:-(d.velocity||0)}));let S="idle",A=null,v=null,j=null;C.calculatedDuration===null&&a&&(C.calculatedDuration=ct(C));const{calculatedDuration:pe}=C;let U=1/0,E=1/0;pe!==null&&(U=pe+o,E=U*(a+1)-o);let P=0;const ge=V=>{if(v===null)return;m>0&&(v=Math.min(v,V)),m<0&&(v=Math.min(V-E/m,v)),A!==null?P=A:P=Math.round(V-v)*m;const q=P-t*(m>=0?1:-1),$e=m>=0?q<0:q>E;P=Math.max(q,0),S==="finished"&&A===null&&(P=E);let He=P,Ge=C;if(a){const ye=P/U;let ne=Math.floor(ye),L=ye%1;!L&&ye>=1&&(L=1),L===1&&ne--,ne=Math.min(ne,a+1);const Ue=!!(ne%2);Ue&&(c==="reverse"?(L=1-L,o&&(L-=o/U)):c==="mirror"&&(Ge=O));let qe=H(0,1,L);P>E&&(qe=c==="reverse"&&Ue?1:0),He=qe*U}const Z=$e?{done:!1,value:r[0]}:Ge.next(He);T&&(Z.value=T(Z.value));let{done:Ke}=Z;!$e&&pe!==null&&(Ke=m>=0?P>=E:P<=0);const yn=A===null&&(S==="finished"||S==="running"&&Ke);return f&&f(Z.value),yn&&gn(),Z},ze=()=>{g&&g.stop(),g=void 0},je=()=>{S="idle",ze(),x(),M(),v=j=null},gn=()=>{S="finished",u&&u(),ze(),x()},Ee=()=>{if(h)return;g||(g=n(ge));const V=g.now();l&&l(),A!==null?v=V-A:(!v||S==="finished")&&(v=V),S==="finished"&&M(),j=v,A=null,S="running",g.start()};e&&Ee();const Ne={then(V,q){return w.then(V,q)},get time(){return I(P)},set time(V){V=z(V),P=V,A!==null||!g||m===0?A=V:v=g.now()-V/m},get duration(){const V=C.calculatedDuration===null?ct(C):C.calculatedDuration;return I(V)},get speed(){return m},set speed(V){V===m||!g||(m=V,Ne.time=I(P))},get state(){return S},play:Ee,pause:()=>{S="paused",A=P},stop:()=>{h=!0,S!=="idle"&&(S="idle",i&&i(),je())},cancel:()=>{j!==null&&ge(j),je()},complete:()=>{S="finished"},sample:V=>(v=0,ge(V))};return Ne}function ds(e){let t;return()=>(t===void 0&&(t=e()),t)}const ms=ds(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),hs=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ae=10,ps=2e4,gs=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Lt(t.ease);function ys(e,t,{onUpdate:n,onComplete:r,...s}){if(!(ms()&&hs.has(t)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,c,l;const i=()=>{l=new Promise(g=>{c=g})};i();let{keyframes:u,duration:f=300,ease:d,times:m}=s;if(gs(t,s)){const g=le({...s,repeat:0,delay:0});let y={done:!1,value:u[0]};const T=[];let C=0;for(;!y.done&&C<ps;)y=g.sample(C),T.push(y.value),C+=ae;m=void 0,u=T,f=C-ae,d="linear"}const h=vr(e.owner.current,t,u,{...s,duration:f,ease:d,times:m});s.syncStart&&(h.startTime=Q.isProcessing?Q.timestamp:document.timeline?document.timeline.currentTime:performance.now());const x=()=>h.cancel(),w=()=>{R.update(x),c(),i()};return h.onfinish=()=>{e.set(kr(u,s)),r&&r(),w()},{then(g,y){return l.then(g,y)},attachTimeline(g){return h.timeline=g,h.onfinish=null,D},get time(){return I(h.currentTime||0)},set time(g){h.currentTime=z(g)},get speed(){return h.playbackRate},set speed(g){h.playbackRate=g},get duration(){return I(f)},play:()=>{o||(h.play(),Ft(x))},pause:()=>h.pause(),stop:()=>{if(o=!0,h.playState==="idle")return;const{currentTime:g}=h;if(g){const y=le({...s,autoplay:!1});e.setWithVelocity(y.sample(g-ae).value,y.sample(g).value,ae)}w()},complete:()=>h.finish(),cancel:w}}function bs({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const s=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:D,pause:D,stop:D,then:a=>(a(),Promise.resolve()),cancel:D,complete:D});return t?le({keyframes:[0,1],duration:0,delay:t,onComplete:s}):s()}const xs={type:"spring",stiffness:500,damping:25,restSpeed:10},As=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ws={type:"keyframes",duration:.8},Cs={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Vs=(e,{keyframes:t})=>t.length>2?ws:de.has(e)?e.startsWith("scale")?As(t[1]):xs:Cs,ke=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(K.test(t)||t==="0")&&!t.startsWith("url(")),Ts=new Set(["brightness","contrast","saturate","opacity"]);function Ms(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(me)||[];if(!r)return e;const s=n.replace(r,"");let a=Ts.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+s+")"}const Ss=/([a-z-]*)\(.*?\)/g,Pe={...K,getAnimatableNone:e=>{const t=e.match(Ss);return t?t.map(Ms).join(" "):e}},vs={...Ct,color:k,backgroundColor:k,outlineColor:k,fill:k,stroke:k,borderColor:k,borderTopColor:k,borderRightColor:k,borderBottomColor:k,borderLeftColor:k,filter:Pe,WebkitFilter:Pe},ks=e=>vs[e];function ln(e,t){let n=ks(e);return n!==Pe&&(n=K),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const un=e=>/^0[^.\s]+$/.test(e);function Ps(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||un(e)}function Ds(e,t,n,r){const s=ke(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const o=r.from!==void 0?r.from:e.get();let c;const l=[];for(let i=0;i<a.length;i++)a[i]===null&&(a[i]=i===0?o:a[i-1]),Ps(a[i])&&l.push(i),typeof a[i]=="string"&&a[i]!=="none"&&a[i]!=="0"&&(c=a[i]);if(s&&l.length&&c)for(let i=0;i<l.length;i++){const u=l[i];a[u]=ln(t,c)}return a}function Os({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:a,repeatType:o,repeatDelay:c,from:l,elapsed:i,...u}){return!!Object.keys(u).length}function fn(e,t){return e[t]||e.default||e}const Fs=(e,t,n,r={})=>s=>{const a=fn(r,e)||{},o=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-z(o);const l=Ds(t,e,n,a),i=l[0],u=l[l.length-1],f=ke(e,i),d=ke(e,u);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()}};if(Os(a)||(m={...m,...Vs(e,m)}),m.duration&&(m.duration=z(m.duration)),m.repeatDelay&&(m.repeatDelay=z(m.repeatDelay)),!f||!d||Sr.current||a.type===!1)return bs(m);if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const h=ys(t,e,m);if(h)return h}return le(m)};function Rs(e){return!!(B(e)&&e.add)}const Is=e=>/^\-?\d*\.?\d+$/.test(e);function Bs(e,t){e.indexOf(t)===-1&&e.push(t)}function Ls(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ws{constructor(){this.subscriptions=[]}add(t){return Bs(this.subscriptions,t),()=>Ls(this.subscriptions,t)}notify(t,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,r);else for(let a=0;a<s;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const zs=e=>!isNaN(parseFloat(e));class js{constructor(t,n={}){this.version="10.16.12",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,s=!0)=>{this.prev=this.current,this.current=r;const{delta:a,timestamp:o}=Q;this.lastUpdated!==o&&(this.timeDelta=a,this.lastUpdated=o,R.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>R.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=zs(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ws);const r=this.events[t].add(n);return t==="change"?()=>{r(),R.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?an(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function dn(e,t){return new js(e,t)}const mn=e=>t=>t.test(e),Es={test:e=>e==="auto",parse:e=>e},hn=[G,p,$,F,Un,Kn,Es],ra=e=>hn.find(mn(e)),Ns=[...hn,k,K],$s=e=>Ns.find(mn(e));function Hs(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,dn(n))}function We(e,t){const n=Ie(e,t);let{transitionEnd:r={},transition:s={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const o in a){const c=dr(a[o]);Hs(e,o,c)}}function De(e,t){[...t].reverse().forEach(r=>{const s=e.getVariant(r);s&&We(e,s),e.variantChildren&&e.variantChildren.forEach(a=>{De(a,t)})})}function sa(e,t){if(Array.isArray(t))return De(e,t);if(typeof t=="string")return De(e,[t]);We(e,t)}function aa(e,t,n){var r,s;const a=Object.keys(t).filter(c=>!e.hasValue(c)),o=a.length;if(o)for(let c=0;c<o;c++){const l=a[c],i=t[l];let u=null;Array.isArray(i)&&(u=i[0]),u===null&&(u=(s=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&s!==void 0?s:t[l]),u!=null&&(typeof u=="string"&&(Is(u)||un(u))?u=parseFloat(u):!$s(u)&&K.test(i)&&(u=ln(l,i)),e.addValue(l,dn(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function Gs(e,t){return t?(t[e]||t.default||t).from:void 0}function oa(e,t,n){const r={};for(const s in e){const a=Gs(s,t);if(a!==void 0)r[s]=a;else{const o=n.getValue(s);o&&(r[s]=o.get())}}return r}function Ks({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function pn(e,t,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...c}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(a=r);const i=[],u=s&&e.animationState&&e.animationState.getState()[s];for(const f in c){const d=e.getValue(f),m=c[f];if(!d||m===void 0||u&&Ks(u,f))continue;const h={delay:n,elapsed:0,...fn(a||{},f)};let x=!0;if(window.HandoffAppearAnimations&&!d.hasAnimated){const g=e.getProps()[pt];g&&(x=!1,h.elapsed=window.HandoffAppearAnimations(g,f,d,R),h.syncStart=!0)}let w=x&&m===d.get();if(h.type==="spring"&&(d.getVelocity()||h.velocity)&&(w=!1),d.animation&&(w=!1),w)continue;d.start(Fs(f,d,m,e.shouldReduceMotion&&de.has(f)?{type:!1}:h));const M=d.animation;Rs(l)&&(l.add(f),M.then(()=>l.remove(f))),i.push(M)}return o&&Promise.all(i).then(()=>{o&&We(e,o)}),i}function Oe(e,t,n={}){const r=Ie(e,t,n.custom);let{transition:s=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const a=r?()=>Promise.all(pn(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:i=0,staggerChildren:u,staggerDirection:f}=s;return Us(e,t,i+l,u,f,n)}:()=>Promise.resolve(),{when:c}=s;if(c){const[l,i]=c==="beforeChildren"?[a,o]:[o,a];return l().then(()=>i())}else return Promise.all([a(),o(n.delay)])}function Us(e,t,n=0,r=0,s=1,a){const o=[],c=(e.variantChildren.size-1)*r,l=s===1?(i=0)=>i*r:(i=0)=>c-i*r;return Array.from(e.variantChildren).sort(qs).forEach((i,u)=>{i.notify("AnimationStart",t),o.push(Oe(i,t,{...a,delay:n+l(u)}).then(()=>i.notify("AnimationComplete",t)))}),Promise.all(o)}function qs(e,t){return e.sortNodePosition(t)}function ia(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const s=t.map(a=>Oe(e,a,n));r=Promise.all(s)}else if(typeof t=="string")r=Oe(e,t,n);else{const s=typeof t=="function"?Ie(e,t,n.custom):t;r=Promise.all(pn(e,s,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Zs=Ln(wr),_s=b.memo(b.forwardRef(({children:e,...t},n)=>Ve.jsx(Zs.button,{initial:!0,whileFocus:{scale:1.02},whileHover:{scale:1.02},whileTap:{scale:.95},...t,ref:n,children:e}))),Xs=e=>bn.createElement("a",e,e.children),lt=xn({base:"inline-flex items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none",variants:{variant:{primary:Ze("bg-accent text-zinc-100","active:contrast-125 hover:contrast-[1.10]","font-semibold","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed","dark:text-neutral-800"),secondary:Ze("group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed")}}}),ca=({variant:e="primary",className:t,href:n,...r})=>n?Ve.jsx(Xs,{href:n,className:lt({variant:e,className:t}),...r}):Ve.jsx(_s,{className:lt({variant:e,className:t}),...r}),la={type:"spring",damping:24},ua={type:"spring",stiffness:300,damping:20},fa={duration:.35,type:"spring",stiffness:120,damping:20};export{Fe as $,Vn as A,Fs as B,$ as C,p as D,K as E,ea as F,Fn as G,Gt as H,Bs as I,Ls as J,Ws as K,On as L,_s as M,fn as N,na as O,ft as P,mr as Q,bt as R,ca as S,ta as T,Is as U,fe as V,ra as W,It as X,dt as Y,G as Z,Rs as _,lr as a,vn as a0,de as a1,Dt as a2,Me as a3,Sn as a4,oa as a5,aa as a6,ks as a7,Nn as a8,Vt as a9,Pt as aa,ar as ab,or as ac,ht as ad,cr as ae,St as af,ir as ag,kt as ah,yt as ai,Dn as aj,mt as ak,le as al,sa as am,ua as b,Xs as c,la as d,dn as e,R as f,ut as g,Ft as h,B as i,gt as j,ur as k,Te as l,Zs as m,D as n,ia as o,Rt as p,z as q,Ie as r,fa as s,I as t,An as u,Mn as v,Q as w,he as x,rn as y,H as z};