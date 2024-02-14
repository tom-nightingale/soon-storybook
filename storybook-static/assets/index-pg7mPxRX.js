var D=Object.defineProperty;var P=(t,n,e)=>n in t?D(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var w=(t,n,e)=>(P(t,typeof n!="symbol"?n+"":n,e),e);import{a as p,c as I}from"./lifecycle-jjb-yVwd.js";function b(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function A(){return Object.create(null)}function y(t){t.forEach(O)}function H(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function G(t,...n){if(t==null){for(const i of n)i(void 0);return b}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t,n,e){t.$$.on_destroy.push(G(n,e))}function _t(t,n,e,i){if(t){const r=M(t,n,e,i);return t[0](r)}}function M(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(n.dirty.length,r.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,l){if(r){const o=M(n,e,i,l);t.p(o,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function yt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function gt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function xt(t){const n={};for(const e in t)n[e]=!0;return n}let $=!1;function J(){$=!0}function K(){$=!1}function L(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:L(1,r,g=>n[e[g]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],o=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);u>=c;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<l.length&&o[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[c],a)}}function U(t,n){if($){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function bt(t,n,e){$&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function W(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function $t(){return S(" ")}function wt(){return S("")}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Nt(t){return t.dataset.svelteH}function Q(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){X(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Y(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(n))}function Et(t,n,e){return Y(t,n,e,W)}function Z(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function St(t){return Z(t," ")}function jt(t,n){return new t(n)}const h=[],C=[];let m=[];const B=[],tt=Promise.resolve();let N=!1;function nt(){N||(N=!0,tt.then(q))}function E(t){m.push(t)}const v=new Set;let _=0;function q(){if(_!==0)return;const t=I;do{try{for(;_<h.length;){const n=h[_];_++,p(n),et(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;B.length;)B.pop()();N=!1,v.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}function it(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const x=new Set;let d;function kt(){d={r:0,c:[],p:d}}function At(){d.r||y(d.c),d=d.p}function rt(t,n){t&&t.i&&(x.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Bt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[l]=u}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function It(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function Ht(t,n){t&&t.l(n)}function ct(t,n,e){const{fragment:i,after_update:r}=t.$$;i&&i.m(n,e),E(()=>{const l=t.$$.on_mount.map(O).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...l):y(l),t.$$.on_mount=[]}),r.forEach(E)}function ot(t,n){const e=t.$$;e.fragment!==null&&(it(e.after_update),y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Mt(t,n,e,i,r,l,o=null,u=[-1]){const c=I;p(t);const s=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:r,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:A(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...j)=>{const k=j.length?j[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=k)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](k),a&&ut(t,f)),g}):[],s.update(),a=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){J();const f=Q(n.target);s.fragment&&s.fragment.l(f),f.forEach(V)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor),K(),q()}p(c)}class Tt{constructor(){w(this,"$$");w(this,"$$set")}$destroy(){ot(this,1),this.$destroy=b}$on(n,e){if(!H(e))return b;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const st="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(st);export{vt as A,U as B,b as C,yt as D,gt as E,dt as F,_t as G,mt as H,pt as I,ht as J,xt as K,Tt as S,bt as a,rt as b,At as c,V as d,wt as e,C as f,kt as g,jt as h,Mt as i,Ot as j,Ht as k,ot as l,ct as m,Bt as n,It as o,z as p,W as q,$t as r,at as s,Ct as t,S as u,Et as v,Q as w,Nt as x,St as y,Z as z};
