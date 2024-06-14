var altcha=function(B){"use strict";var Pt=Object.defineProperty;var Ht=(B,V,O)=>V in B?Pt(B,V,{enumerable:!0,configurable:!0,writable:!0,value:O}):B[V]=O;var D=(B,V,O)=>Ht(B,typeof V!="symbol"?V+"":V,O);var V=typeof document<"u"?document.currentScript:null;function O(){}function we(r){return r()}function ye(){return Object.create(null)}function re(r){r.forEach(we)}function ve(r){return typeof r=="function"}function Je(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function We(r){return Object.keys(r).length===0}function w(r,e){r.appendChild(e)}function T(r,e,t){r.insertBefore(e,t||null)}function R(r){r.parentNode&&r.parentNode.removeChild(r)}function I(r){return document.createElement(r)}function Z(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function ze(r){return document.createTextNode(r)}function Y(){return ze(" ")}function ue(r,e,t,i){return r.addEventListener(e,t,i),()=>r.removeEventListener(e,t,i)}function c(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Ke(r){return Array.from(r.childNodes)}function ke(r,e,t){r.classList.toggle(e,!!t)}function Qe(r,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:i})}function et(r){const e={};return r.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let ne;function ie(r){ne=r}function ae(){if(!ne)throw new Error("Function called outside component initialization");return ne}function tt(r){ae().$$.on_mount.push(r)}function rt(r){ae().$$.on_destroy.push(r)}function nt(){const r=ae();return(e,t,{cancelable:i=!1}={})=>{const l=r.$$.callbacks[e];if(l){const o=Qe(e,t,{cancelable:i});return l.slice().forEach(s=>{s.call(r,o)}),!o.defaultPrevented}return!0}}const Q=[],he=[];let ee=[];const pe=[],Ee=Promise.resolve();let de=!1;function $e(){de||(de=!0,Ee.then(y))}function it(){return $e(),Ee}function ge(r){ee.push(r)}const me=new Set;let te=0;function y(){if(te!==0)return;const r=ne;do{try{for(;te<Q.length;){const e=Q[te];te++,ie(e),lt(e.$$)}}catch(e){throw Q.length=0,te=0,e}for(ie(null),Q.length=0,te=0;he.length;)he.pop()();for(let e=0;e<ee.length;e+=1){const t=ee[e];me.has(t)||(me.add(t),t())}ee.length=0}while(Q.length);for(;pe.length;)pe.pop()();de=!1,me.clear(),ie(r)}function lt(r){if(r.fragment!==null){r.update(),re(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(ge)}}function ot(r){const e=[],t=[];ee.forEach(i=>r.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),ee=e}const st=new Set;function ct(r,e){r&&r.i&&(st.delete(r),r.i(e))}function ft(r,e,t){const{fragment:i,after_update:l}=r.$$;i&&i.m(e,t),ge(()=>{const o=r.$$.on_mount.map(we).filter(ve);r.$$.on_destroy?r.$$.on_destroy.push(...o):re(o),r.$$.on_mount=[]}),l.forEach(ge)}function ut(r,e){const t=r.$$;t.fragment!==null&&(ot(t.after_update),re(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function at(r,e){r.$$.dirty[0]===-1&&(Q.push(r),$e(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function ht(r,e,t,i,l,o,s=null,u=[-1]){const f=ne;ie(r);const a=r.$$={fragment:null,ctx:[],props:o,update:O,not_equal:l,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:ye(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};s&&s(a.root);let j=!1;if(a.ctx=t?t(r,e.props||{},(C,P,...H)=>{const q=H.length?H[0]:P;return a.ctx&&l(a.ctx[C],a.ctx[C]=q)&&(!a.skip_bound&&a.bound[C]&&a.bound[C](q),j&&at(r,C)),P}):[],a.update(),j=!0,re(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){const C=Ke(e.target);a.fragment&&a.fragment.l(C),C.forEach(R)}else a.fragment&&a.fragment.c();e.intro&&ct(r.$$.fragment),ft(r,e.target,e.anchor),y()}ie(f)}let xe;typeof HTMLElement=="function"&&(xe=class extends HTMLElement{constructor(e,t,i){super();D(this,"$$ctor");D(this,"$$s");D(this,"$$c");D(this,"$$cn",!1);D(this,"$$d",{});D(this,"$$r",!1);D(this,"$$p_d",{});D(this,"$$l",{});D(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,i&&this.attachShadow({mode:"open"})}addEventListener(e,t,i){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const l=this.$$c.$on(e,t);this.$$l_u.set(t,l)}super.addEventListener(e,t,i)}removeEventListener(e,t,i){if(super.removeEventListener(e,t,i),this.$$c){const l=this.$$l_u.get(t);l&&(l(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return()=>{let s;return{c:function(){s=I("slot"),o!=="default"&&c(s,"name",o)},m:function(a,j){T(a,s,j)},d:function(a){a&&R(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},i=et(this);for(const o of this.$$s)o in i&&(t[o]=[e(o)]);for(const o of this.attributes){const s=this.$$g_p(o.name);s in this.$$d||(this.$$d[s]=le(s,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const l=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const s=le(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1};this.$$c.$$.after_update.push(l),l();for(const o in this.$$l)for(const s of this.$$l[o]){const u=this.$$c.$on(o,s);this.$$l_u.set(s,u)}this.$$l={}}}attributeChangedCallback(e,t,i){var l;this.$$r||(e=this.$$g_p(e),this.$$d[e]=le(e,i,this.$$p_d,"toProp"),(l=this.$$c)==null||l.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function le(r,e,t,i){var o;const l=(o=t[r])==null?void 0:o.type;if(e=l==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!t[r])return e;if(i==="toAttribute")switch(l){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(l){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function dt(r,e,t,i,l,o){let s=class extends xe{constructor(){super(r,t,l),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(u=>(e[u].attribute||u).toLowerCase())}};return Object.keys(e).forEach(u=>{Object.defineProperty(s.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(f){var a;f=le(u,f,e),this.$$d[u]=f,(a=this.$$c)==null||a.$set({[u]:f})}})}),i.forEach(u=>{Object.defineProperty(s.prototype,u,{get(){var f;return(f=this.$$c)==null?void 0:f[u]}})}),o&&(s=o(s)),r.element=s,s}class gt{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){ut(this,1),this.$destroy=O}$on(e,t){if(!ve(t))return O;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const l=i.indexOf(t);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!We(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mt);const bt=new TextEncoder;function _t(r){return[...new Uint8Array(r)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function wt(r,e="SHA-256",t=1e5){const i=Date.now().toString(16);r||(r=Math.round(Math.random()*t));const l=await Ce(i,r,e);return{algorithm:e,challenge:l,salt:i,signature:""}}async function Ce(r,e,t){return _t(await crypto.subtle.digest(t.toUpperCase(),bt.encode(r+e)))}function yt(r,e,t="SHA-256",i=1e6,l=0){const o=new AbortController,s=Date.now();return{promise:(async()=>{for(let f=l;f<=i;f+=1){if(o.signal.aborted)return null;if(await Ce(e,f,t)===r)return{number:f,took:Date.now()-s}}return null})(),controller:o}}var m=(r=>(r.ERROR="error",r.VERIFIED="verified",r.VERIFYING="verifying",r.UNVERIFIED="unverified",r.EXPIRED="expired",r))(m||{});function Le(r){let e,t,i;return{c(){e=Z("svg"),t=Z("path"),i=Z("path"),c(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),c(t,"fill","currentColor"),c(t,"opacity",".25"),c(i,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),c(i,"fill","currentColor"),c(i,"class","altcha-spinner"),c(e,"width","24"),c(e,"height","24"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(l,o){T(l,e,o),w(e,t),w(e,i)},d(l){l&&R(e)}}}function vt(r){let e,t=r[9].label+"",i;return{c(){e=I("label"),c(e,"for",i=r[3]+"_checkbox")},m(l,o){T(l,e,o),e.innerHTML=t},p(l,o){o[0]&512&&t!==(t=l[9].label+"")&&(e.innerHTML=t),o[0]&8&&i!==(i=l[3]+"_checkbox")&&c(e,"for",i)},d(l){l&&R(e)}}}function kt(r){let e,t=r[9].verifying+"";return{c(){e=I("span")},m(i,l){T(i,e,l),e.innerHTML=t},p(i,l){l[0]&512&&t!==(t=i[9].verifying+"")&&(e.innerHTML=t)},d(i){i&&R(e)}}}function pt(r){let e,t=r[9].verified+"",i,l;return{c(){e=I("span"),i=Y(),l=I("input"),c(l,"type","hidden"),c(l,"name",r[3]),l.value=r[4]},m(o,s){T(o,e,s),e.innerHTML=t,T(o,i,s),T(o,l,s)},p(o,s){s[0]&512&&t!==(t=o[9].verified+"")&&(e.innerHTML=t),s[0]&8&&c(l,"name",o[3]),s[0]&16&&(l.value=o[4])},d(o){o&&(R(e),R(i),R(l))}}}function Ie(r){let e,t,i,l,o,s,u;return{c(){e=I("div"),t=I("a"),i=Z("svg"),l=Z("path"),o=Z("path"),s=Z("path"),c(l,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),c(l,"fill","currentColor"),c(o,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),c(o,"fill","currentColor"),c(s,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),c(s,"fill","currentColor"),c(i,"width","22"),c(i,"height","22"),c(i,"viewBox","0 0 20 20"),c(i,"fill","none"),c(i,"xmlns","http://www.w3.org/2000/svg"),c(t,"href",Te),c(t,"target","_blank"),c(t,"class","altcha-logo"),c(t,"aria-label",u=r[9].ariaLinkLabel)},m(f,a){T(f,e,a),w(e,t),w(t,i),w(i,l),w(i,o),w(i,s)},p(f,a){a[0]&512&&u!==(u=f[9].ariaLinkLabel)&&c(t,"aria-label",u)},d(f){f&&R(e)}}}function Ae(r){let e,t,i,l;function o(f,a){return f[5]===m.EXPIRED?$t:Et}let s=o(r),u=s(r);return{c(){e=I("div"),t=Z("svg"),i=Z("path"),l=Y(),u.c(),c(i,"stroke-linecap","round"),c(i,"stroke-linejoin","round"),c(i,"d","M6 18L18 6M6 6l12 12"),c(t,"width","14"),c(t,"height","14"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"fill","none"),c(t,"viewBox","0 0 24 24"),c(t,"stroke-width","1.5"),c(t,"stroke","currentColor"),c(e,"class","altcha-error")},m(f,a){T(f,e,a),w(e,t),w(t,i),w(e,l),u.m(e,null)},p(f,a){s===(s=o(f))&&u?u.p(f,a):(u.d(1),u=s(f),u&&(u.c(),u.m(e,null)))},d(f){f&&R(e),u.d()}}}function Et(r){let e,t=r[9].error+"";return{c(){e=I("div"),c(e,"title",r[8])},m(i,l){T(i,e,l),e.innerHTML=t},p(i,l){l[0]&512&&t!==(t=i[9].error+"")&&(e.innerHTML=t),l[0]&256&&c(e,"title",i[8])},d(i){i&&R(e)}}}function $t(r){let e,t=r[9].expired+"";return{c(){e=I("div"),c(e,"title",r[8])},m(i,l){T(i,e,l),e.innerHTML=t},p(i,l){l[0]&512&&t!==(t=i[9].expired+"")&&(e.innerHTML=t),l[0]&256&&c(e,"title",i[8])},d(i){i&&R(e)}}}function Re(r){let e,t,i=r[9].footer+"";return{c(){e=I("div"),t=I("div"),c(e,"class","altcha-footer")},m(l,o){T(l,e,o),w(e,t),t.innerHTML=i},p(l,o){o[0]&512&&i!==(i=l[9].footer+"")&&(t.innerHTML=i)},d(l){l&&R(e)}}}function xt(r){let e,t,i,l,o,s,u,f,a,j,C,P,H,q,k=r[5]===m.VERIFYING&&Le();function J(d,A){return d[5]===m.VERIFIED?pt:d[5]===m.VERIFYING?kt:vt}let G=J(r),p=G(r),E=r[2]!==!0&&Ie(r),g=(r[8]||r[5]===m.EXPIRED)&&Ae(r),_=r[9].footer&&r[1]!==!0&&Re(r);return{c(){e=I("div"),t=I("div"),k&&k.c(),i=Y(),l=I("div"),o=I("input"),f=Y(),a=I("div"),p.c(),j=Y(),E&&E.c(),C=Y(),g&&g.c(),P=Y(),_&&_.c(),c(o,"type","checkbox"),c(o,"id",s=r[3]+"_checkbox"),o.required=u=r[0]!=="onsubmit",c(l,"class","altcha-checkbox"),ke(l,"altcha-hidden",r[5]===m.VERIFYING),c(a,"class","altcha-label"),c(t,"class","altcha-main"),c(e,"class","altcha"),c(e,"data-state",r[5])},m(d,A){T(d,e,A),w(e,t),k&&k.m(t,null),w(t,i),w(t,l),w(l,o),o.checked=r[6],w(t,f),w(t,a),p.m(a,null),w(t,j),E&&E.m(t,null),w(e,C),g&&g.m(e,null),w(e,P),_&&_.m(e,null),r[31](e),H||(q=[ue(o,"change",r[30]),ue(o,"change",r[10]),ue(o,"invalid",r[11])],H=!0)},p(d,A){d[5]===m.VERIFYING?k||(k=Le(),k.c(),k.m(t,i)):k&&(k.d(1),k=null),A[0]&8&&s!==(s=d[3]+"_checkbox")&&c(o,"id",s),A[0]&1&&u!==(u=d[0]!=="onsubmit")&&(o.required=u),A[0]&64&&(o.checked=d[6]),A[0]&32&&ke(l,"altcha-hidden",d[5]===m.VERIFYING),G===(G=J(d))&&p?p.p(d,A):(p.d(1),p=G(d),p&&(p.c(),p.m(a,null))),d[2]!==!0?E?E.p(d,A):(E=Ie(d),E.c(),E.m(t,null)):E&&(E.d(1),E=null),d[8]||d[5]===m.EXPIRED?g?g.p(d,A):(g=Ae(d),g.c(),g.m(e,P)):g&&(g.d(1),g=null),d[9].footer&&d[1]!==!0?_?_.p(d,A):(_=Re(d),_.c(),_.m(e,null)):_&&(_.d(1),_=null),A[0]&32&&c(e,"data-state",d[5])},i:O,o:O,d(d){d&&R(e),k&&k.d(),p.d(),E&&E.d(),g&&g.d(),_&&_.d(),r[31](null),H=!1,re(q)}}}const Me="Visit Altcha.org",Te="https://altcha.org/";function Se(r){return JSON.parse(r)}function Ct(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Lt(r,e,t){var Ze,qe;let i,l,o,{auto:s=void 0}=e,{blockspam:u=void 0}=e,{challengeurl:f=void 0}=e,{challengejson:a=void 0}=e,{debug:j=!1}=e,{expire:C=void 0}=e,{hidefooter:P=!1}=e,{hidelogo:H=!1}=e,{name:q="altcha"}=e,{maxnumber:k=1e6}=e,{mockerror:J=!1}=e,{refetchonexpire:G=!0}=e,{spamfilter:p=!1}=e,{strings:E=void 0}=e,{test:g=!1}=e,{verifyurl:_=void 0}=e,{workers:d=Math.min(16,navigator.hardwareConcurrency||8)}=e,{workerurl:A=void 0}=e;const be=nt(),Ne=["SHA-256","SHA-384","SHA-512"],De=(qe=(Ze=document.documentElement.lang)==null?void 0:Ze.split("-"))==null?void 0:qe[0];let X=!1,oe,b=null,_e=null,W=null,F=m.UNVERIFIED,U=null;rt(()=>{b&&(b.removeEventListener("submit",Oe),b.removeEventListener("reset",Pe),b.removeEventListener("focusin",Ve),b=null),U&&(clearTimeout(U),U=null)}),tt(()=>{L("mounted","0.5.0"),L("workers",d),g&&L("using test mode"),C&&se(C),s!==void 0&&L("auto",s),b=oe.closest("form"),b&&(b.addEventListener("submit",Oe),b.addEventListener("reset",Pe),s==="onfocus"&&b.addEventListener("focusin",Ve)),s==="onload"&&z()});function L(...n){(j||n.some(h=>h instanceof Error))&&console[n[0]instanceof Error?"error":"log"]("ALTCHA",...n)}function Ve(n){F===m.UNVERIFIED&&z()}function Oe(n){b&&s==="onsubmit"&&F===m.UNVERIFIED&&(n.preventDefault(),n.stopPropagation(),z().then(()=>{b==null||b.requestSubmit()}))}function Pe(){ce()}function He(n,h){return btoa(JSON.stringify({algorithm:n.algorithm,challenge:n.challenge,number:h.number,salt:n.salt,signature:n.signature,test:g?!0:void 0,took:h.took}))}function Fe(n){if(!n.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(n.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!Ne.includes(n.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${Ne.join(", ")}`);if(!n.challenge||n.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!n.salt||n.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function It(){var n;if(J)throw L("mocking error"),new Error("Mocked error.");if(i)return L("using provided json data"),i;if(g)return L("generating test challenge",{test:g}),wt(typeof g!="boolean"?+g:void 0);{if(!f)throw new Error("Attribute challengeurl not set.");L("fetching challenge from",f);const h=await fetch(f,{headers:{"x-altcha-spam-filter":p?"1":"0"}});if(h.status!==200)throw new Error(`Server responded with ${h.status}.`);const v=h.headers.get("Expires"),M=h.headers.get("X-Altcha-Config"),S=await h.json(),N=new URLSearchParams((n=S.salt.split("?"))==null?void 0:n[1]),K=N.get("expires")||N.get("expire");if(K){const $=new Date(+K*1e3),x=isNaN($.getTime())?0:$.getTime()-Date.now();x>0&&se(x)}if(M)try{const $=JSON.parse(M);$&&typeof $=="object"&&($.verifyurl&&($.verifyurl=new URL($.verifyurl,new URL(f)).toString()),Be($))}catch($){L("unable to configure from X-Altcha-Config",$)}if(!C&&(v!=null&&v.length)){const $=Date.parse(v);if($){const x=$-Date.now();x>0&&se(x)}}return S}}function Ue(){f&&G&&F===m.VERIFIED?z():ce(m.EXPIRED,o.expired)}async function At(n){let h=null;if("Worker"in window){try{h=await Rt(n.challenge,n.salt,n.algorithm,n.maxnumber)}catch(v){L(v)}if((h==null?void 0:h.number)!==void 0)return{data:n,solution:h}}return{data:n,solution:await yt(n.challenge,n.salt,n.algorithm,n.maxnumber||k).promise}}async function Rt(n,h,v,M=typeof g=="number"?g:k,S=Math.ceil(d)){const N=[];if(S<1)throw new Error("Wrong number of workers configured.");if(S>16)throw new Error("Too many workers. Max. 16 allowed workers.");for(let x=0;x<S;x++)N.push(createAltchaWorker(A));const K=Math.ceil(M/S),$=await Promise.all(N.map((x,fe)=>{const Ge=fe*K;return new Promise(Ot=>{x.addEventListener("message",Xe=>{if(Xe.data)for(const Ye of N)Ye!==x&&Ye.postMessage({type:"abort"});Ot(Xe.data)}),x.postMessage({payload:{alg:v,challenge:n,max:Ge+K,salt:h,start:Ge},type:"work"})})}));for(const x of N)x.terminate();return $.find(x=>!!x)||null}function Mt(){[m.UNVERIFIED,m.ERROR,m.EXPIRED].includes(F)?p&&(b==null?void 0:b.reportValidity())===!1?t(6,X=!1):z():t(6,X=!0)}function Tt(){F===m.VERIFYING&&alert(o.waitAlert)}function se(n){L("expire",n),U&&(clearTimeout(U),U=null),n<1?Ue():U=setTimeout(Ue,n)}function St(n){var v;const h=b==null?void 0:b.querySelector(typeof n=="string"?`input[name="${n}"]`:'input[type="email"]:not([data-no-spamfilter])');return((v=h==null?void 0:h.value)==null?void 0:v.slice(h.value.indexOf("@")))||void 0}function jt(n){return[...(b==null?void 0:b.querySelectorAll(n!=null&&n.length?n.map(v=>`input[name="${v}"]`).join(", "):'input[type="email"]:not([data-no-spamfilter]), input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((v,M)=>{const S=M.name,N=M.value.trim();return S&&N&&(v[S]=N),v},{})}async function Nt(n){if(!_)throw new Error("Attribute verifyurl not set.");L("requesting server verification from",_);const h={payload:n};if(p){const{email:S,expectedLanguages:N,expectedCountries:K,fields:$,ipAddress:x,timeZone:fe}=typeof p=="object"?p:{email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,timeZone:void 0};h.ipAddress=x===!1?void 0:x||"auto",h.email=S===!1?void 0:St(S),h.fields=$===!1?void 0:jt($),h.timeZone=fe===!1?void 0:fe||Ct(),h.expectedCountries=K,h.expectedLanguages=N||(De?[De]:void 0)}const v=await fetch(_,{body:JSON.stringify(h),headers:{"content-type":"application/json"},method:"POST"});if(v.status!==200)throw new Error(`Server responded with ${v.status}.`);const M=await v.json();if(M!=null&&M.payload&&t(4,W=M.payload),be("serververification",M),u&&M.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function Be(n){n.auto!==void 0&&(t(0,s=n.auto),s==="onload"&&z()),n.expire!==void 0&&(se(n.expire),t(14,C=n.expire)),n.challenge&&(Fe(n.challenge),i=n.challenge),n.challengeurl!==void 0&&t(12,f=n.challengeurl),n.debug!==void 0&&t(13,j=!!n.debug),n.hidefooter!==void 0&&t(1,P=!!n.hidefooter),n.hidelogo!==void 0&&t(2,H=!!n.hidelogo),n.maxnumber!==void 0&&t(15,k=+n.maxnumber),n.mockerror!==void 0&&t(16,J=!!n.mockerror),n.name!==void 0&&t(3,q=n.name),n.refetchonexpire!==void 0&&t(17,G=!!n.refetchonexpire),n.spamfilter!==void 0&&t(18,p=typeof n.spamfilter=="object"?n.spamfilter:!!n.spamfilter),n.strings&&t(29,l=n.strings),n.test!==void 0&&t(19,g=typeof n.test=="number"?n.test:!!n.test),n.verifyurl!==void 0&&t(20,_=n.verifyurl),n.workers!==void 0&&t(21,d=+n.workers)}function ce(n=m.UNVERIFIED,h=null){U&&(clearTimeout(U),U=null),t(6,X=!1),t(8,_e=h),t(4,W=null),t(5,F=n)}async function z(){return ce(m.VERIFYING),It().then(n=>(Fe(n),L("challenge",n),At(n))).then(({data:n,solution:h})=>{if(L("solution",h),(h==null?void 0:h.number)!==void 0){if(_)return Nt(He(n,h));t(4,W=He(n,h)),L("payload",W)}else throw L("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{it().then(()=>{t(5,F=m.VERIFIED),t(6,X=!0),L("verified"),be("verified",{payload:W})})}).catch(n=>{L(n),t(5,F=m.ERROR),t(6,X=!1),t(8,_e=n.message)})}function Dt(){X=this.checked,t(6,X)}function Vt(n){he[n?"unshift":"push"](()=>{oe=n,t(7,oe)})}return r.$$set=n=>{"auto"in n&&t(0,s=n.auto),"blockspam"in n&&t(22,u=n.blockspam),"challengeurl"in n&&t(12,f=n.challengeurl),"challengejson"in n&&t(23,a=n.challengejson),"debug"in n&&t(13,j=n.debug),"expire"in n&&t(14,C=n.expire),"hidefooter"in n&&t(1,P=n.hidefooter),"hidelogo"in n&&t(2,H=n.hidelogo),"name"in n&&t(3,q=n.name),"maxnumber"in n&&t(15,k=n.maxnumber),"mockerror"in n&&t(16,J=n.mockerror),"refetchonexpire"in n&&t(17,G=n.refetchonexpire),"spamfilter"in n&&t(18,p=n.spamfilter),"strings"in n&&t(24,E=n.strings),"test"in n&&t(19,g=n.test),"verifyurl"in n&&t(20,_=n.verifyurl),"workers"in n&&t(21,d=n.workers),"workerurl"in n&&t(25,A=n.workerurl)},r.$$.update=()=>{r.$$.dirty[0]&8388608&&(i=a?Se(a):void 0),r.$$.dirty[0]&16777216&&t(29,l=E?Se(E):{}),r.$$.dirty[0]&536870912&&t(9,o={ariaLinkLabel:Me,error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${Te}" target="_blank" aria-label="${l.ariaLinkLabel||Me}">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...l}),r.$$.dirty[0]&48&&be("statechange",{payload:W,state:F})},[s,P,H,q,W,F,X,oe,_e,o,Mt,Tt,f,j,C,k,J,G,p,g,_,d,u,a,E,A,Be,ce,z,l,Dt,Vt]}class je extends gt{constructor(e){super(),ht(this,e,Lt,xt,Je,{auto:0,blockspam:22,challengeurl:12,challengejson:23,debug:13,expire:14,hidefooter:1,hidelogo:2,name:3,maxnumber:15,mockerror:16,refetchonexpire:17,spamfilter:18,strings:24,test:19,verifyurl:20,workers:21,workerurl:25,configure:26,reset:27,verify:28},null,[-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),y()}get blockspam(){return this.$$.ctx[22]}set blockspam(e){this.$$set({blockspam:e}),y()}get challengeurl(){return this.$$.ctx[12]}set challengeurl(e){this.$$set({challengeurl:e}),y()}get challengejson(){return this.$$.ctx[23]}set challengejson(e){this.$$set({challengejson:e}),y()}get debug(){return this.$$.ctx[13]}set debug(e){this.$$set({debug:e}),y()}get expire(){return this.$$.ctx[14]}set expire(e){this.$$set({expire:e}),y()}get hidefooter(){return this.$$.ctx[1]}set hidefooter(e){this.$$set({hidefooter:e}),y()}get hidelogo(){return this.$$.ctx[2]}set hidelogo(e){this.$$set({hidelogo:e}),y()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),y()}get maxnumber(){return this.$$.ctx[15]}set maxnumber(e){this.$$set({maxnumber:e}),y()}get mockerror(){return this.$$.ctx[16]}set mockerror(e){this.$$set({mockerror:e}),y()}get refetchonexpire(){return this.$$.ctx[17]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),y()}get spamfilter(){return this.$$.ctx[18]}set spamfilter(e){this.$$set({spamfilter:e}),y()}get strings(){return this.$$.ctx[24]}set strings(e){this.$$set({strings:e}),y()}get test(){return this.$$.ctx[19]}set test(e){this.$$set({test:e}),y()}get verifyurl(){return this.$$.ctx[20]}set verifyurl(e){this.$$set({verifyurl:e}),y()}get workers(){return this.$$.ctx[21]}set workers(e){this.$$set({workers:e}),y()}get workerurl(){return this.$$.ctx[25]}set workerurl(e){this.$$set({workerurl:e}),y()}get configure(){return this.$$.ctx[26]}get reset(){return this.$$.ctx[27]}get verify(){return this.$$.ctx[28]}}return customElements.define("altcha-widget",dt(je,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},expire:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{},workerurl:{}},[],["configure","reset","verify"],!1)),globalThis.createAltchaWorker=r=>new Worker(new URL(r||"./worker.js",V&&V.src||new URL("altcha.iife.js",document.baseURI).href)),B.Altcha=je,Object.defineProperty(B,Symbol.toStringTag,{value:"Module"}),B}({});
