import{$ as Ge,$a as sd$1,$i as ka,$t as Qr$1,An as Tt$1,Ar as _w,At as Ly,Bi as ik,Bn as VQ,Br as an$1,C as Bn$1,Cn as TR,Co as vo,Da as ot$1,Di as gt$1,Do as wD,Dr as _k,Dt as LQ,E as C6,Ea as op$1,En as Te,Er as _i$1,Fn as Ub,Fr as ab,Ft as Mb,G as FC,Ga as re,Gi as ja,Gn as WQ,Gr as bb,Gt as OD,Hn as Vk,Ht as Nt$1,Ia as po,Io as xe,Ir as ad$1,J as Fr$1,Ja as sC,Ji as k1,Jo as zh,Jr as bo,Jt as Pk,K as FT,Ki as jc$1,Kn as We,Kr as bd$1,Kt as Ot,L as DR,La as ps$1,Li as id$1,Lo as xm$1,Mn as UD,Mr as aI,N as Cr,Na as pb,Nn as UQ,No as xQ,Nr as aS,Nt as MR,On as Tr,Or as _o,Ot as Ld$1,Pa as pe,Pn as US,Pt as MT,Q as GQ,Qa as sb,Qn as Ws$1,Qr as cb,Qt as Qo$1,R as Dr,Ra as q,Ri as ie,Rn as Us$1,Ro as xo,Rt as Mn$1,Sa as nd$1,Sn as TD,St as Jt$1,T as Br$1,Ta as od$1,Ti as ge,Tn as Ta,Tt as Kn,Ui as j$1,Ur as bU,Ut as Nw,V as EA,Vi as ip$1,Vn as Vg,Vr as b,Wa as rd$1,Wi as jC,Wn as WC,Wo as yr,Wt as OA,X as G,Xi as kN,Xn as Wo$1,Xr as bt,Y as Fy,Yi as kC,Yr as br,Z as GC,Zn as Wr$1,_ as Ay,_a as mr,_n as Sz,_r as ZC,a as $r$1,aa as ld$1,ao as tb,at as HS,b as BK,bi as fi$1,br as Zn,ci as de,cn as S1,di as ds$1,do as ud$1,ea as kd$1,eo as sn$1,f as AR,fi as eD,fo as ue,ft as Iz,go as v0,gr as Z,h as Ah,ha as mb,hr as Yy,ht as JK,i as $k,ia as lb,in as Re$1,ir as Xr$1,ja as pT,jn as UC,jo as xC,jr as _z,k as CM,ki as hC,kt as Lk,l as AA,li as dg,lr as Ye,lt as IR,mi as er$1,na as lA,nn as RA,nr as XT,nt as Gr$1,o as $s$1,oa as le,on as Ry,or as Y,p as Ae$1,pi as ee,pr as Yte,pt as J,q as Fd$1,qa as rr$1,qi as jt,qn as Wg,qr as bi$1,qt as PD,r as $h,ri as cl$1,rn as RK,rr as Xl$1,s as $t,si as dd$1,so as tr$1,sr as YN,t as $,ta as ke,tr as XK,tt as Go$1,u as AD,ua as lp$1,un as SA,ur as Yg,ut as Ii$1,v as Az,vn as T,vo as vC,vt as Jc$1,w as Bo$1,wa as np$1,wn as TT,wo as vr,xa as nc$1,xi as fr,xr as _1,xt as Jo$1,y as B,yi as fb,yr as Ze$1,yt as Jh,z as Dz,za as qK,zi as ig,zn as Uy,zo as yC,zr as al$1,zt as Mz}from"./chunk-4Vch4aoV.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var j=`primary`;var Rn=Symbol(`RouteTitle`);var Lr=class{params;constructor(t){this.params=t||{}}has(t){return Object.hasOwn(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function At(i){return new Lr(i)}function Rr(i,t,e){for(let n=0;n<i.length;n++){let r=i[n],a=t[n];if(r[0]===`:`)e[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function Po(i,t,e){let n=e.path.split(`/`),r=n.indexOf(`**`);if(r===-1){if(n.length>i.length||e.pathMatch===`full`&&(t.hasChildren()||n.length<i.length))return null;let l={},u=i.slice(0,n.length);return Rr(n,u,l)?{consumed:u,posParams:l}:null}if(r!==n.lastIndexOf(`**`))return null;let a=n.slice(0,r),o=n.slice(r+1);if(a.length+o.length>i.length||e.pathMatch===`full`&&t.hasChildren()&&e.path!==`**`)return null;let s={};return!Rr(a,i.slice(0,a.length),s)||!Rr(o,i.slice(i.length-o.length),s)?null:{consumed:i,posParams:s}}function vi(i){return new Promise((t,e)=>{i.pipe(OD()).subscribe({next:n=>t(n),error:n=>e(n)})})}function yl(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;++e)if(!at(i[e],t[e]))return!1;return!0}function at(i,t){let e=i?zr(i):void 0,n=t?zr(t):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let a=0;a<e.length;a++)if(r=e[a],!Oo(i[r],t[r]))return!1;return!0}function zr(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Oo(i,t){if(Array.isArray(i)&&Array.isArray(t)){if(i.length!==t.length)return!1;let e=[...i].sort(),n=[...t].sort();return e.every((r,a)=>n[a]===r)}else return i===t}function xl(i){return i.length>0?i[i.length-1]:null}function En(i){return Vg(i)?i:Us$1(i)?Cr(Promise.resolve(i)):Ii$1(i)}function ko(i){return Vg(i)?vi(i):Promise.resolve(i)}var Sl={exact:Ao,subset:Bo};var Lo={exact:Cl,subset:_l,ignored:()=>!0};var zo={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var yi={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function Ar(i,t,e){let n=r(r({},yi),e||{});return Sl[n.paths](i.root,t.root,n.matrixParams)&&Lo[n.queryParams](i.queryParams,t.queryParams)&&!(n.fragment===`exact`&&i.fragment!==t.fragment)}function Cl(i,t){return at(i,t)}function Ao(i,t,e){if(!zt(i.segments,t.segments)||!bi(i.segments,t.segments,e)||i.numberOfChildren!==t.numberOfChildren)return!1;for(let n in t.children)if(!i.children[n]||!Ao(i.children[n],t.children[n],e))return!1;return!0}function _l(i,t){return Object.keys(t).length<=Object.keys(i).length&&Object.keys(t).every(e=>Oo(i[e],t[e]))}function Bo(i,t,e){return Ho(i,t,t.segments,e)}function Ho(i,t,e,n){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!zt(r,e)||t.hasChildren()||!bi(r,e,n))}else if(i.segments.length===e.length){if(!zt(i.segments,e)||!bi(i.segments,e,n))return!1;for(let r in t.children)if(!i.children[r]||!Bo(i.children[r],t.children[r],n))return!1;return!0}else{let r=e.slice(0,i.segments.length),a=e.slice(i.segments.length);return!zt(i.segments,r)||!bi(i.segments,r,n)||!i.children[j]?!1:Ho(i.children[j],t,a,n)}}function bi(i,t,e){return t.every((n,r)=>Lo[e](i[r].parameters,n.parameters))}var He=class{root;queryParams;fragment;_queryParamMap;constructor(t=new te([],{}),e={},n=null){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=At(this.queryParams),this._queryParamMap}toString(){return Tl.serialize(this)}};var te=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return hi(this)}};var wt=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=At(this.parameters),this._parameterMap}toString(){return jo(this)}};function wl(i,t){return zt(i,t)&&i.every((e,n)=>at(e.parameters,t[n].parameters))}function zt(i,t){return i.length!==t.length?!1:i.every((e,n)=>e.path===t[n].path)}function Nl(i,t){let e=[];return Object.entries(i.children).forEach(([n,r])=>{n===j&&(e=e.concat(t(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==j&&(e=e.concat(t(r,n)))}),e}var It=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:()=>new gt})}return i})();var gt=class{parse(t){let e=new Hr(t);return new He(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${qt(t.root,!0)}`;Ml(e)&&(e=`/`);let n=El(t.queryParams),r=typeof t.fragment==`string`?`#${Il(t.fragment)}`:``;return`${e}${n}${r}`}};var No=`http://fake`;function Ml(i){try{let t=new URL(i,No);return t.origin!==No||t.pathname.startsWith(`//`)}catch{return!0}}var Tl=new gt;function hi(i){return i.segments.map(t=>jo(t)).join(`/`)}function qt(i,t){if(!i.hasChildren())return hi(i);if(t){let e=i.children[j]?qt(i.children[j],!1):``,n=[];return Object.entries(i.children).forEach(([r,a])=>{r!==j&&n.push(`${r}:${qt(a,!1)}`)}),n.length>0?`${e}(${n.join(`//`)})`:e}else{if(Object.keys(i.children).length===1&&i.children[j]!=null)return`${hi(i)}/${qt(i.children[j],!1)}`;let e=Nl(i,(n,r)=>r===j?[Dl(qt(i.children[j],!1))]:[`${r}:${qt(n,!1)}`]);return`${hi(i)}/(${e.join(`//`)})`}}function Dl(i){return i.replace(Vo,t=>t.replace(/:/g,`%3A`))}function Fo(i){return encodeURIComponent(i).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function mi(i){return Fo(i).replace(/%3B/gi,`;`)}function Il(i){return encodeURI(i)}function Br(i){return Fo(i).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function fi(i){return decodeURIComponent(i)}function Mo(i){return fi(i.replace(/\+/g,`%20`))}function jo(i){return`${Br(i.path)}${Rl(i.parameters)}`}function Rl(i){return Object.entries(i).map(([t,e])=>`;${Br(t)}=${Br(e)}`).join(``)}function El(i){let t=Object.entries(i).map(([e,n])=>Array.isArray(n)?n.map(r=>`${mi(e)}=${mi(r)}`).join(`&`):`${mi(e)}=${mi(n)}`).filter(e=>e);return t.length?`?${t.join(`&`)}`:``}var Er=1073741824;function xi(i,t,e){Number(t)>=32&&!Object.hasOwn(i,Er)&&(i[Er]=e,delete i[Er]),i[t]=e}var Vo=/^[^\/()?;#]+/;function Pr(i){let t=i.match(Vo);return t?t[0]:``}var Pl=/^[^\/()?;=#]+/;function Ol(i){let t=i.match(Pl);return t?t[0]:``}var kl=/^[^=?&#]+/;function Ll(i){let t=i.match(kl);return t?t[0]:``}var zl=/^[^&#]+/;function Al(i){let t=i.match(zl);return t?t[0]:``}var Hr=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new te([],{}):new te([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional(`?`))do this.parseQueryParam(t);while(this.consumeOptional(`&`));return t}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new j$1(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let n={};this.peekStartsWith(`/(`)&&(this.capture(`/`),n=this.parseParens(!0,t));let r={};return this.peekStartsWith(`(`)&&(r=this.parseParens(!1,t)),(e.length>0||Object.keys(n).length>0)&&(r[j]=new te(e,n)),r}parseSegment(){let t=Pr(this.remaining);if(t===``&&this.peekStartsWith(`;`))throw new j$1(4009,!1);return this.capture(t),new wt(fi(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(`;`);)this.parseParam(t);return t}parseParam(t){let e=Ol(this.remaining);if(!e)return;this.capture(e);let n=``;if(this.consumeOptional(`=`)){let r=Pr(this.remaining);r&&(n=r,this.capture(n))}xi(t,fi(e),fi(n))}parseQueryParam(t){let e=Ll(this.remaining);if(!e)return;this.capture(e);let n=``;if(this.consumeOptional(`=`)){let o=Al(this.remaining);o&&(n=o,this.capture(n))}let r=Mo(e),a=Mo(n);if(Object.hasOwn(t,r)){let o=t[r];Array.isArray(o)||(o=[o],t[r]=o),o.push(a)}else t[r]=a}parseParens(t,e){let n=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let r=Pr(this.remaining),a=this.remaining[r.length];if(a!==`/`&&a!==`)`&&a!==`;`)throw new j$1(4010,!1);let o;r.indexOf(`:`)>-1?(o=r.slice(0,r.indexOf(`:`)),this.capture(o),this.capture(`:`)):t&&(o=j);let s=this.parseChildren(e+1),l=Object.keys(s).length===1&&s[j]?s[j]:new te([],s);xi(n,o??j,l),this.consumeOptional(`//`)}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new j$1(4011,!1)}};function Uo(i){return i.segments.length>0?new te([],{[j]:i}):i}function $o(i){let t=Object.create(null);for(let[n,r]of Object.entries(i.children)){let a=$o(r);if(n===j&&a.segments.length===0&&a.hasChildren())for(let[o,s]of Object.entries(a.children))xi(t,o,s);else(a.segments.length>0||a.hasChildren())&&xi(t,n,a)}return Bl(new te(i.segments,t))}function Bl(i){if(i.numberOfChildren===1&&i.children[j]){let t=i.children[j];return new te(i.segments.concat(t.segments),t.children)}return i}function Nt(i){return i instanceof He}function Wo(i,t,e=null,n=null,r=new gt){return Go(qo(i),t,e,n,r)}function qo(i){let t;function e(a){let o={};for(let l of a.children){let u=e(l);o[l.outlet]=u}let s=new te(a.url,o);return a===i&&(t=s),s}let r=Uo(e(i.root));return t??r}function Go(i,t,e,n,r){let a=i;for(;a.parent;)a=a.parent;if(t.length===0)return Or(a,a,a,e,n,r);let o=Hl(t);if(o.toRoot())return Or(a,a,new te([],{}),e,n,r);let s=Fl(o,a,i),l=s.processChildren?xn(s.segmentGroup,s.index,o.commands):Zo(s.segmentGroup,s.index,o.commands);return Or(a,s.segmentGroup,l,e,n,r)}function Si(i){return typeof i==`object`&&i!=null&&!i.outlets&&!i.segmentPath}function _n(i){return typeof i==`object`&&i!=null&&i.outlets}function To(i,t,e){i||=`ɵ`;let n=new He;return n.queryParams={[i]:t},e.parse(e.serialize(n)).queryParams[i]}function Or(i,t,e,n,r,a){let o={};for(let[u,p]of Object.entries(n??{}))p!=null&&(o[u]=Array.isArray(p)?p.map(f=>To(u,f,a)):To(u,p,a));let s;i===t?s=e:s=Ko(i,t,e);return new He(Uo($o(s)),o,r)}function Ko(i,t,e){let n=Object.create(null);return Object.entries(i.children).forEach(([r,a])=>{a===t?n[r]=e:n[r]=Ko(a,t,e)}),new te(i.segments,n)}var Ci=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&Si(n[0]))throw new j$1(4003,!1);let r=n.find(_n);if(r&&r!==xl(n))throw new j$1(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Hl(i){if(typeof i[0]==`string`&&i.length===1&&i[0]===`/`)return new Ci(!0,0,i);let t=0,e=!1,n=i.reduce((r,a,o)=>{if(typeof a==`object`&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([l,u])=>{s[l]=typeof u==`string`?u.split(`/`):u}),[...r,{outlets:s}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!=`string`?[...r,a]:o===0?(a.split(`/`).forEach((s,l)=>{l==0&&s===`.`||(l==0&&s===``?e=!0:s===`..`?t++:s!=``&&r.push(s))}),r):[...r,a]},[]);return new Ci(e,t,n)}var Kt=class{segmentGroup;processChildren;index;constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}};function Fl(i,t,e){if(i.isAbsolute)return new Kt(t,!0,0);if(!e)return new Kt(t,!1,NaN);if(e.parent===null)return new Kt(e,!0,0);let n=Si(i.commands[0])?0:1;return jl(e,e.segments.length-1+n,i.numberOfDoubleDots)}function jl(i,t,e){let n=i,r=t,a=e;for(;a>r;){if(a-=r,n=n.parent,!n)throw new j$1(4005,!1);r=n.segments.length}return new Kt(n,!1,r-a)}function Vl(i){return _n(i[0])?i[0].outlets:{[j]:i}}function Zo(i,t,e){if(i??=new te([],{}),i.segments.length===0&&i.hasChildren())return xn(i,t,e);let n=Ul(i,t,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let a=new te(i.segments.slice(0,n.pathIndex),{});return a.children[j]=new te(i.segments.slice(n.pathIndex),i.children),xn(a,0,r)}else return n.match&&r.length===0?new te(i.segments,{}):n.match&&!i.hasChildren()?Fr(i,t,e):n.match?xn(i,0,r):Fr(i,t,e)}function xn(i,t,e){if(e.length===0)return new te(i.segments,{});{let n=Vl(e),r=Object.create(null);if(Object.keys(n).some(a=>a!==j)&&i.children[j]&&i.numberOfChildren===1&&i.children[j].segments.length===0){let a=xn(i.children[j],t,e);return new te(i.segments,a.children)}return Object.entries(n).forEach(([a,o])=>{typeof o==`string`&&(o=[o]),o!==null&&(r[a]=Zo(i.children[a],t,o))}),Object.entries(i.children).forEach(([a,o])=>{n[a]===void 0&&(r[a]=o)}),new te(i.segments,r)}}function Ul(i,t,e){let n=0,r=t,a={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=e.length)return a;let o=i.segments[r],s=e[n];if(_n(s))break;let l=`${s}`,u=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&u&&typeof u==`object`&&u.outlets===void 0){if(!Io(l,u,o))return a;n+=2}else{if(!Io(l,{},o))return a;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Fr(i,t,e){let n=i.segments.slice(0,t),r=0;for(;r<e.length;){let a=e[r];if(_n(a))return new te(n,$l(a.outlets));if(r===0&&Si(e[0])){let l=i.segments[t];n.push(new wt(l.path,Do(e[0]))),r++;continue}let o=_n(a)?a.outlets[j]:`${a}`,s=r<e.length-1?e[r+1]:null;o&&s&&Si(s)?(n.push(new wt(o,Do(s))),r+=2):(n.push(new wt(o,{})),r++)}return new te(n,{})}function $l(i){let t={};return Object.entries(i).forEach(([e,n])=>{typeof n==`string`&&(n=[n]),n!==null&&(t[e]=Fr(new te([],{}),0,n))}),t}function Do(i){let t={};return Object.entries(i).forEach(([e,n])=>t[e]=`${n}`),t}function Io(i,t,e){return i==e.path&&at(t,e.parameters)}var _i=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Mt(this.rootInjector)}resetChildren(){this.children=new Mt(this.rootInjector)}};var Mt=(()=>{class i{rootInjector;contexts=/* @__PURE__ */ new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=/* @__PURE__ */ new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new _i(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(n){return new(n||i)(re(gt$1))};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var wi=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=jr(t,this._root);return e?e.children.map(n=>n.value):[]}firstChild(t){let e=jr(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=Vr(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return Vr(t,this._root).map(e=>e.value)}};function jr(i,t){if(i===t.value)return t;for(let e of t.children){let n=jr(i,e);if(n)return n}return null}function Vr(i,t){if(i===t.value)return[t];for(let e of t.children){let n=Vr(i,e);if(n.length)return n.unshift(t),n}return[]}var Re=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function Gt(i){let t={};return i&&i.children.forEach(e=>t[e.value.outlet]=e),t}var wn=class extends wi{snapshot;constructor(t,e){super(t),this.snapshot=e,Qr(this,t)}toString(){return this.snapshot.toString()}};function Xo(i,t){let e=Wl(i,t),n=new sn$1([new wt(``,{})]),r=new sn$1({}),a=new sn$1({}),l=new st(n,r,new sn$1({}),new sn$1(``),a,j,i,e.root);return l.snapshot=e.root,new wn(new Re(l,[]),e)}function Wl(i,t){return new Nn(``,new Re(new Yt([],{},{},``,{},j,i,null,{},t),[]))}var st=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(t,e,n,r,a,o,s,l){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(Tt$1(u=>u[Rn]))??Ii$1(void 0),this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Tt$1(t=>At(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Tt$1(t=>At(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(t){this._futureSnapshot=t,this.pending?.set(!0)}};var ql=`always`;function Yr(i,t,e){let n,{routeConfig:r$1}=i;return t!==null&&(e===`always`||r$1?.path===``||!t.component&&!t.routeConfig?.loadComponent)?n={params:Object.keys(i.params).length===0?t.params:Object.freeze(r(r({},t.params),i.params)),data:Object.freeze(r(r({},t.data),i.data)),resolve:r(r(r(r({},i.data),t.data),r$1?.data),i._resolvedData)}:n={params:Object.freeze(r({},i.params)),data:Object.freeze(r({},i.data)),resolve:r(r({},i.data),i._resolvedData??{})},r$1&&Qo(r$1)&&(n.resolve[Rn]=r$1.title),n}var Yt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Rn]}constructor(t,e,n,r,a,o,s,l,u,p){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=a,this.outlet=o,this.component=s,this.routeConfig=l,this._resolve=u,this._environmentInjector=p}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=At(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=At(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(n=>n.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Nn=class extends wi{url;constructor(t,e){super(e),this.url=t,Qr(this,e)}toString(){return Yo(this._root)}};function Qr(i,t){t.value._routerState=i,t.children.forEach(e=>Qr(i,e))}function Yo(i){let t=i.children.length>0?` { ${i.children.map(Yo).join(`, `)} } `:``;return`${i.value}${t}`}function kr(i){if(i.snapshot){let t=i.snapshot,e=i._futureSnapshot;i.snapshot=e,at(t.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),at(t.params,e.params)||i.paramsSubject.next(e.params),yl(t.url,e.url)||i.urlSubject.next(e.url),at(t.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Ur(i,t){let e=at(i.params,t.params)&&wl(i.url,t.url),n=!i.parent!=!t.parent;return e&&!n&&(!i.parent||Ur(i.parent,t.parent))}function Qo(i){return typeof i.title==`string`||i.title===null}var Jo=new T(``);var Jr=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=j;activateEvents=new Re$1;deactivateEvents=new Re$1;attachEvents=new Re$1;detachEvents=new Re$1;routerOutletData=ee();parentContexts=b(Mt);location=b(fr);changeDetector=b(Bn$1);inputBinder=b(Pn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new j$1(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new j$1(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new j$1(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new j$1(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new $r(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Ot]})}return i})();var $r=class{route;childContexts;parent;outletData;constructor(t,e,n,r){this.route=t,this.childContexts=e,this.parent=n,this.outletData=r}get(t,e){return t===st?this.route:t===Mt?this.childContexts:t===Jo?this.outletData:this.parent.get(t,e)}};var Pn=new T(``);var es=(()=>{class i{options;feature;outletDataSubscriptions=/* @__PURE__ */ new Map;outletSeenKeys=/* @__PURE__ */ new Map;outletEffects=/* @__PURE__ */ new Map;constructor(e,n=null){this.options=e,this.feature=n,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e,n){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e,n)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e),this.outletEffects.get(e)?.forEach(n=>n.destroy()),this.outletEffects.delete(e)}subscribeToRouteData(e,n){let{activatedRoute:r$2}=e,a=[],o=[];if(this.feature?.createResourceOutletBindingEffects&&e.activatedComponentRef){let{handledKeys:l,createdEffects:u}=this.feature.createResourceOutletBindingEffects(e.activatedComponentRef,r$2);a.push(...u),o=l}a.length>0&&this.outletEffects.set(e,a);let s=op$1([this.options.queryParams?r$2.queryParams:Ii$1({}),r$2.params,r$2.data]).pipe(lp$1(([l,u,p],f)=>(p=r(r(r(r({},l),u),p),r$2.resources),f===0?Ii$1(p):Promise.resolve(p)))).subscribe(l=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==r$2||r$2.component===null){this.unsubscribeFromRouteData(e);return}let u=Az(r$2.component);if(!u){this.unsubscribeFromRouteData(e);return}let p=this.outletSeenKeys.get(e);p||(p=/* @__PURE__ */ new Set,this.outletSeenKeys.set(e,p));for(let y of Object.keys(l))p.add(y);let f=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:y}of u.inputs){if(o.includes(y))continue;let E=l[y];(E!==void 0||f===`alwaysUndefined`||p.has(y))&&e.activatedComponentRef.setInput(y,E)}});this.outletDataSubscriptions.set(e,s)}static ɵfac=function(n){CM()};static ɵprov=B({token:i,factory:i.ɵfac})}return i})();var ea=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Fr$1({type:i,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(n,r){n&1&&sd$1(0,`router-outlet`)},dependencies:[Jr],encapsulation:2,changeDetection:1})}return i})();function ta(i){let t=i.children&&i.children.map(ta),e=t?s(r({},i),{children:t}):r({},i);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==j&&(e.component=ea),e}var Zt=`imperative`;var _e=(function(i){return i[i.NavigationStart=0]=`NavigationStart`,i[i.NavigationEnd=1]=`NavigationEnd`,i[i.NavigationCancel=2]=`NavigationCancel`,i[i.NavigationError=3]=`NavigationError`,i[i.RoutesRecognized=4]=`RoutesRecognized`,i[i.ResolveStart=5]=`ResolveStart`,i[i.ResolveEnd=6]=`ResolveEnd`,i[i.GuardsCheckStart=7]=`GuardsCheckStart`,i[i.GuardsCheckEnd=8]=`GuardsCheckEnd`,i[i.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,i[i.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,i[i.ChildActivationStart=11]=`ChildActivationStart`,i[i.ChildActivationEnd=12]=`ChildActivationEnd`,i[i.ActivationStart=13]=`ActivationStart`,i[i.ActivationEnd=14]=`ActivationEnd`,i[i.Scroll=15]=`Scroll`,i[i.NavigationSkipped=16]=`NavigationSkipped`,i})(_e||{});var Fe=class{id;url;constructor(t,e){this.id=t,this.url=e}};var Tt=class extends Fe{type=_e.NavigationStart;navigationTrigger;restoredState;constructor(t,e,n=`imperative`,r=null){super(t,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var Xe=class extends Fe{urlAfterRedirects;type=_e.NavigationEnd;constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var Me=(function(i){return i[i.Redirect=0]=`Redirect`,i[i.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,i[i.NoDataFromResolver=2]=`NoDataFromResolver`,i[i.GuardRejected=3]=`GuardRejected`,i[i.Aborted=4]=`Aborted`,i})(Me||{});var Qt=(function(i){return i[i.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,i[i.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,i})(Qt||{});var Ze=class extends Fe{reason;code;type=_e.NavigationCancel;constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ts(i){return i instanceof Ze&&(i.code===Me.Redirect||i.code===Me.SupersededByNewNavigation)}var lt=class extends Fe{reason;code;type=_e.NavigationSkipped;constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r}};var Bt=class extends Fe{error;target;type=_e.NavigationError;constructor(t,e,n,r){super(t,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var Mn=class extends Fe{urlAfterRedirects;state;type=_e.RoutesRecognized;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Ni=class extends Fe{urlAfterRedirects;state;type=_e.GuardsCheckStart;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Mi=class extends Fe{urlAfterRedirects;state;shouldActivate;type=_e.GuardsCheckEnd;constructor(t,e,n,r,a){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var Ti=class extends Fe{urlAfterRedirects;state;type=_e.ResolveStart;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Di=class extends Fe{urlAfterRedirects;state;type=_e.ResolveEnd;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Ii=class{route;type=_e.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var Ri=class{route;type=_e.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var Ei=class{snapshot;type=_e.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Pi=class{snapshot;type=_e.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Oi=class{snapshot;type=_e.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ki=class{snapshot;type=_e.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Jt=class{routerEvent;position;anchor;scrollBehavior;type=_e.Scroll;constructor(t,e,n,r){this.routerEvent=t,this.position=e,this.anchor=n,this.scrollBehavior=r}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}};var en=class{};var Tn=class{};var tn=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function Gl(i){return!(i instanceof en)&&!(i instanceof tn)&&!(i instanceof Tn)}function Kl(i,t,e){let n=/* @__PURE__ */ new Set;return{newlyCreatedRoutes:n,state:new wn(Dn(i,t._root,e?e._root:void 0,n),t)}}function Dn(i,t,e,n){if(e&&i.shouldReuseRoute(t.value,e.value.snapshot)){let r=e.value;r._setPending(t.value);return new Re(r,Zl(i,t,e,n))}else{if(i.shouldAttach(t.value)){let o=i.retrieve(t.value);if(o!==null){let s=o.route;return s.value._setPending(t.value),s.children=t.children.map(l=>Dn(i,l,void 0,n)),s}}let r=Xl(t.value);r._setPending(t.value),n.add(r);return new Re(r,t.children.map(o=>Dn(i,o,void 0,n)))}}function Zl(i,t,e,n){return t.children.map(r=>{for(let a of e.children)if(i.shouldReuseRoute(r.value,a.value.snapshot))return Dn(i,r,a,n);return Dn(i,r,void 0,n)})}function Xl(i){return new st(new sn$1(i.url),new sn$1(i.params),new sn$1(i.queryParams),new sn$1(i.fragment),new sn$1(i.data),i.outlet,i.component,i)}var Dt=class i extends Error{redirectTo;navigationBehaviorOptions;constructor(t,e){super(),this.redirectTo=t,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,i.prototype)}};var ns=`ngNavigationCancelingError`;function Sn(i,t){let{redirectTo:e,navigationBehaviorOptions:n}=Nt(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=is(!1,Me.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function is(i,t){let e=/* @__PURE__ */ new Error(`NavigationCancelingError: ${i||``}`);return e[ns]=!0,e.cancellationCode=t,e}function Yl(i){return rs(i)&&Nt(i.url)}function rs(i){return!!i&&i[ns]}var Wr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,n,r,a){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=a}activate(t){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),kr(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){let r=Gt(e);t.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],n),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,n)})}deactivateRoutes(t,e,n){let r=t.value,a=e?e.value:null;if(r===a)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(t,e,o.children)}else this.deactivateChildRoutes(t,e,n);else a&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,a=Gt(t);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),s=n.children.contexts;n.resetChildren(),this.routeReuseStrategy.store(t.value.snapshot,{componentRef:o,route:t,contexts:s})}}deactivateRouteAndOutlet(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,a=Gt(t);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null),t.value._localInjector?.destroy()}activateChildRoutes(t,e,n){let r=Gt(e);t.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],n),this.forwardEvent(new ki(a.value.snapshot))}),t.children.length&&this.forwardEvent(new Pi(t.value.snapshot))}activateRoutes(t,e,n){let r=t.value,a=e?e.value:null;if(kr(r),r===a)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,o.children)}else this.activateChildRoutes(t,e,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),kr(s.route.value),this.activateChildRoutes(t,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(t,null,o.children)}else this.activateChildRoutes(t,null,n)}};var Li=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}};var Xt=class{component;route;constructor(t,e){this.component=t,this.route=e}};function Ql(i,t,e){let n=i._root;return yn(n,t?t._root:null,e,[n.value])}function Jl(i){let t=i.routeConfig?i.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:i,guards:t}}function rn(i,t){let e=Symbol(),n=t.get(i,e);return n===e?typeof i==`function`&&!UD(i)?i:t.get(i):n}function yn(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=Gt(t);return i.children.forEach(o=>{ed(o,a[o.value.outlet],e,n.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,s])=>Cn(s,e.getContext(o),e,r)),r}function ed(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=i.value,o=t?t.value:null,s=e?e.getContext(i.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let l=td(o,a,a.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Li(n)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?yn(i,t,s?s.children:null,n,r):yn(i,t,e,n,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Xt(s.outlet.component,o))}else o&&Cn(t,s,e,r),r.canActivateChecks.push(new Li(n)),a.component?yn(i,null,s?s.children:null,n,r):yn(i,null,e,n,r);return r}function td(i,t,e){if(typeof e==`function`)return Jc$1(t._environmentInjector,()=>e(i,t));switch(e){case`pathParamsChange`:return!zt(i.url,t.url);case`pathParamsOrQueryParamsChange`:return!zt(i.url,t.url)||!at(i.queryParams,t.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Ur(i,t)||!at(i.queryParams,t.queryParams);default:return!Ur(i,t)}}function Cn(i,t,e,n){let r=Gt(i),a=i.value;Object.entries(r).forEach(([o,s])=>{a.component?t?Cn(s,t.children.getContext(o),t.children,n):Cn(s,null,null,n):Cn(s,e?e.getContext(o):null,e,n)}),a.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new Xt(t.outlet.component,a)):n.canDeactivateChecks.push(new Xt(null,a)):n.canDeactivateChecks.push(new Xt(null,a))}function On(i){return typeof i==`function`}function nd(i){return typeof i==`boolean`}function id(i){return i&&On(i.canLoad)}function rd(i){return i&&On(i.canActivate)}function ad(i){return i&&On(i.canActivateChild)}function od(i){return i&&On(i.canDeactivate)}function sd(i){return i&&On(i.canMatch)}function as(i){return i instanceof an$1||i?.name===`EmptyError`}var gi=Symbol(`INITIAL_VALUE`);function nn(){return lp$1(i=>op$1(i.map(t=>t.pipe(ps$1(1),ip$1(e=>{if(e instanceof Dt)return Ii$1(e);throw e}),jc$1(gi)))).pipe(Tt$1(t=>{for(let e of t)if(e!==!0){if(e===gi)return gi;if(e===!1||ld(e))return e}return!0}),Dr(t=>t!==gi),ps$1(1)))}function ld(i){return Nt(i)||i instanceof Dt}function os(i){return new Z(t=>{if(i.aborted){t.next(),t.complete();return}let e=()=>{t.next(),t.complete()};return i.addEventListener(`abort`,e),()=>i.removeEventListener(`abort`,e)})}function ss(i){return Qr$1(os(i))}function dd(i){return Xr$1(t=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r$3,canDeactivateChecks:a}}=t;return a.length===0&&r$3.length===0?Ii$1(s(r({},t),{guardsResult:!0})):cd(a,e,n).pipe(Xr$1(o=>o&&nd(o)?ud(e,r$3,i):Ii$1(o)),Tt$1(o=>s(r({},t),{guardsResult:o})))})}function cd(i,t,e){return Cr(i).pipe(Xr$1(n=>hd(n.component,n.route,e,t)),OD(n=>n!==!0,!0))}function ud(i,t,e){return Cr(t).pipe(AD(n=>ds$1(md(n.route.parent,e),pd(n.route,e),bd(i,n.path),gd(i,n.route))),OD(n=>n!==!0,!0))}function pd(i,t){return i!==null&&t&&t(new Oi(i)),Ii$1(!0)}function md(i,t){return i!==null&&t&&t(new Ei(i)),Ii$1(!0)}function gd(i,t){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return Ii$1(!0);let n=e.map(r=>TD(()=>{let a=t._environmentInjector,o=rn(r,a);return En(rd(o)?o.canActivate(t,i):Jc$1(a,()=>o(t,i))).pipe(OD())}));return Ii$1(n).pipe(nn())}function bd(i,t){let e=t[t.length-1],r=t.slice(0,t.length-1).reverse().map(a=>Jl(a)).filter(a=>a!==null).map(a=>TD(()=>{let o=a.guards.map(s=>{let l=a.node._environmentInjector,u=rn(s,l);return En(ad(u)?u.canActivateChild(e,i):Jc$1(l,()=>u(e,i))).pipe(OD())});return Ii$1(o).pipe(nn())}));return Ii$1(r).pipe(nn())}function hd(i,t,e,n){let r=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!r||r.length===0)return Ii$1(!0);let a=r.map(o=>{let s=t._environmentInjector,l=rn(o,s);return na(()=>od(l)?l.canDeactivate(i,t,e,n):Jc$1(s,()=>l(i,t,e,n))).pipe(OD())});return Ii$1(a).pipe(nn())}function fd(i,t,e,n,r){let a=t.canLoad;if(a===void 0||a.length===0)return Ii$1(!0);let o=a.map(s=>{let l=rn(s,i),u=na(()=>id(l)?l.canLoad(t,e):Jc$1(i,()=>l(t,e)));return r?u.pipe(ss(r)):u});return Ii$1(o).pipe(nn(),ls(n))}function na(i){try{return En(i())}catch(t){return new Z(e=>e.error(t))}}function ls(i){return eD(Yg(t=>{if(typeof t!=`boolean`)throw Sn(i,t)}),Tt$1(t=>t===!0))}function vd(i,t,e,n,r,a){let o=t.canMatch;if(!o||o.length===0)return Ii$1(!0);let s=o.map(l=>{let u=rn(l,i);return na(()=>sd(u)?u.canMatch(t,e,r):Jc$1(i,()=>u(t,e,r))).pipe(ss(a))});return Ii$1(s).pipe(nn(),ls(n))}var rt=class i extends Error{name=`NoMatch`;segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,i.prototype)}};var In=class i extends Error{urlTree;name=`AbsoluteRedirect`;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,i.prototype)}};function yd(i){throw new j$1(4e3,!1)}function xd(i){throw is(!1,Me.GuardRejected)}var qr=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}async lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[j])throw yd(`${t.redirectTo}`);r=r.children[j]}}async applyRedirectCommands(t,e,n,r,a){let o=await Sd(e,r,a);if(o instanceof He)throw new In(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),t,n);if(o[0]===`/`)throw new In(s);return s}applyRedirectCreateUrlTree(t,e,n,r){return new He(this.createSegmentGroup(t,e.root,n,r),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let n={};return Object.entries(t).forEach(([r,a])=>{if(typeof a==`string`&&a[0]===`:`){let s=a.substring(1);n[r]=e[s]}else n[r]=a}),n}createSegmentGroup(t,e,n,r){let a=this.createSegments(t,e.segments,n,r),o=Object.create(null);return Object.entries(e.children).forEach(([s,l])=>{o[s]=this.createSegmentGroup(t,l,n,r)}),new te(a,o)}createSegments(t,e,n,r){return e.map(a=>a.path[0]===`:`?this.findPosParam(t,a,r):this.findOrReturn(a,n))}findPosParam(t,e,n){let r=n[e.path.substring(1)];if(!r)throw new j$1(4001,!1);return r}findOrReturn(t,e){let n=0;for(let r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}};function Sd(i,t,e){if(typeof i==`string`)return Promise.resolve(i);let n=i;return vi(En(Jc$1(e,()=>n(t))))}function Cd(i,t){return i.providers&&!i._injector&&(i._injector=Ry(i.providers,t,`Route: ${i.path}`)),i._injector??t}function ot(i){return i.outlet||j}function _d(i,t){let e=i.filter(n=>ot(n)===t);return e.push(...i.filter(n=>ot(n)!==t)),e}var Gr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ds(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function wd(i,t,e,n,r$4,a,o){let s=cs(i,t,e);if(!s.matched)return Ii$1(s);let l=ds(a(s));return n=Cd(t,n),vd(n,t,e,r$4,l,o).pipe(Tt$1(u=>u===!0?s:r({},Gr)))}function cs(i,t,e){if(t.path===``)return t.pathMatch===`full`&&(i.hasChildren()||e.length>0)?r({},Gr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r$5=(t.matcher||Po)(e,i,t);if(!r$5)return r({},Gr);let a={};Object.entries(r$5.posParams??{}).forEach(([s,l])=>{a[s]=l.path});let o=r$5.consumed.length>0?r(r({},a),r$5.consumed[r$5.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r$5.consumed,remainingSegments:e.slice(r$5.consumed.length),parameters:o,positionalParamSegments:r$5.posParams??{}}}function Ro(i,t,e,n){return e.length>0&&Td(i,e,n)?{segmentGroup:new te(t,Md(n,new te(e,i.children))),slicedSegments:[]}:e.length===0&&Dd(i,e,n)?{segmentGroup:new te(i.segments,Nd(i,e,n,i.children)),slicedSegments:e}:{segmentGroup:new te(i.segments,i.children),slicedSegments:e}}function Nd(i,t,e,n){let r$6={};for(let a of e)if(Ai(i,t,a)&&!n[ot(a)]){let o=new te([],{});r$6[ot(a)]=o}return r(r({},n),r$6)}function Md(i,t){let e={};e[j]=t;for(let n of i)if(n.path===``&&ot(n)!==j){let r=new te([],{});e[ot(n)]=r}return e}function Td(i,t,e){return e.some(n=>Ai(i,t,n)&&ot(n)!==j)}function Dd(i,t,e){return e.some(n=>Ai(i,t,n))}function Ai(i,t,e){return(i.hasChildren()||t.length>0)&&e.pathMatch===`full`?!1:e.path===``}function Id(i,t,e){return t.length===0&&!i.hasChildren()}var Kr=class{};async function Rd(i,t,e,n,r,a,o,s){return new Zr(i,t,e,n,r,o,a,s).recognize()}var Ed=31;var Zr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(t,e,n,r$7,a,o,s,l){this.injector=t,this.configLoader=e,this.rootComponentType=n,this.config=r$7,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new qr(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(r({},this.urlTree.queryParams))}noMatchError(t){return new j$1(4002,`'${t.segmentGroup}'`)}async recognize(){let t=Ro(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(t),a=new Nn(``,new Re(n,e)),o=Wo(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(t){let e=new Yt([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),j,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,t,j,e),rootSnapshot:e}}catch(n){if(n instanceof In)return this.absoluteRedirectCount++,this.absoluteRedirectCount>Ed&&(this.allowRedirects=!1),this.urlTree=n.urlTree,this.queryParams=Object.freeze(r({},this.urlTree.queryParams)),this.match(n.urlTree.root);throw n instanceof rt?this.noMatchError(n):n}}async processSegmentGroup(t,e,n,r,a){if(n.segments.length===0&&n.hasChildren())return this.processChildren(t,e,n,a);let o=await this.processSegment(t,e,n,n.segments,r,!0,a);return o instanceof Re?[o]:[]}async processChildren(t,e,n,r){let a=[];for(let l of Object.keys(n.children))l===`primary`?a.unshift(l):a.push(l);let o=[];for(let l of a){let u=n.children[l],p=_d(e,l),f=await this.processSegment(t,p,u,u.segments,l,!0,r);f instanceof Re&&o.push(f)}let s=us(o);return Pd(s),s}async processSegment(t,e,n,r,a,o,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??t,e,l,n,r,a,o,s)}catch(u){if(u instanceof rt||as(u))continue;throw u}if(Id(n,r))return new Kr;throw new rt(n)}async processSegmentAgainstRoute(t,e,n,r,a,o,s,l){if(ot(n)!==o&&(o===j||!Ai(r,a,n)||!n.children?.length&&!n.loadChildren||a.length===0&&!r.hasChildren()))throw new rt(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,r,n,a,o,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(t,r,e,n,a,o,l);throw new rt(r)}async expandSegmentAgainstRouteUsingRedirect(t,e,n,r,a,o,s){let{matched:l,parameters:u,consumedSegments:p,positionalParamSegments:f,remainingSegments:y}=cs(e,r,a);if(!l)throw new rt(e);let E=this.createSnapshot(t,r,a,u,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let z=await this.applyRedirects.applyRedirectCommands(p,r.redirectTo,f,ds(E),t),F=await this.applyRedirects.lineralizeSegments(r,z);return this.processSegment(t,n,e,F.concat(y),o,!1,s)}createSnapshot(t,e,n,r,a){let o=new Yt(n,r,this.queryParams,this.urlTree.fragment,Ld(e),ot(e),e.component??e._loadedComponent??null,e,zd(e),t),s=Yr(o,a,this.paramsInheritanceStrategy);return o.params=s.params,o.data=s.data,o}async matchSegmentAgainstRoute(t,e,n,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=xe=>this.createSnapshot(t,n,xe.consumedSegments,xe.parameters,o),l=await vi(wd(e,n,r,t,this.urlSerializer,s,this.abortSignal));if(n.path===`**`&&(e.children={}),!l?.matched)throw new rt(e);t=n._injector??t;let{routes:u}=await this.getChildConfig(t,n,r),p=n._loadedInjector??t,{parameters:f,consumedSegments:y,remainingSegments:E}=l,z=this.createSnapshot(t,n,y,f,o),F=ot(n)===a,{segmentGroup:X,slicedSegments:A}=F?Ro(e,y,E,u):{segmentGroup:e,slicedSegments:E};if(F&&A.length===0&&X.hasChildren())return new Re(z,await this.processChildren(p,u,X,z));if(F&&u.length===0&&A.length===0)return new Re(z,[]);let ae=await this.processSegment(p,u,X,A,F?j:a,!0,z);if(!F&&!(ae instanceof Re))throw new rt(e);return new Re(z,ae instanceof Re?[ae]:[])}async getChildConfig(t,e,n){if(e.children)return{routes:e.children,injector:t};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(t).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await vi(fd(t,e,n,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(t,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw xd(e)}return{routes:[],injector:t}}};function Pd(i){i.sort((t,e)=>t.value.outlet===j?-1:e.value.outlet===j?1:t.value.outlet.localeCompare(e.value.outlet))}function Od(i){let t=i.value.routeConfig;return t&&t.path===``}function us(i){let t=[],e=/* @__PURE__ */ new Set;for(let r of i){if(!Od(r)){t.push(r);continue}let a=t.find(o=>r.value.routeConfig===o.value.routeConfig);a!==void 0?(a.children.push(...r.children),e.add(a)):t.push(r)}for(let r of e){let a=us(r.children);t.push(new Re(r.value,a))}let n=t.filter(r=>!e.has(r));return kd(n),n}function kd(i){let t=Object.create(null);i.forEach(e=>{let n=t[e.value.outlet];if(n){n.url.map(o=>o.toString()).join(`/`);e.value.url.map(o=>o.toString()).join(`/`);throw new j$1(4006,!1)}t[e.value.outlet]=e.value})}function Ld(i){return i.data||{}}function zd(i){return i.resolve||{}}function Ad(i,t,e,n,r$8,a,o){return Xr$1(async s$1=>{let{state:l,tree:u}=await Rd(i,t,e,n,s$1.extractedUrl,r$8,a,o);return s(r({},s$1),{targetSnapshot:l,urlAfterRedirects:u})})}function Bd(i){return Xr$1(t=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return Ii$1(t);let r=new Set(n.map(s=>s.route)),a=/* @__PURE__ */ new Set;for(let s of r)if(!a.has(s))for(let l of ps(s))a.add(l);let o=0;return Cr(a).pipe(AD(s=>r.has(s)?Hd(s,e,i):(s.data=Yr(s,s.parent,i).resolve,Ii$1(void 0))),Yg(()=>o++),PD(1),Xr$1(s=>o===a.size?Ii$1(t):_i$1))})}function ps(i){return[i,...i.children.map(e=>ps(e)).flat()]}function Hd(i,t,e){let n=i.routeConfig,r$9=i._resolve;return n?.title!==void 0&&!Qo(n)&&(r$9[Rn]=n.title),TD(()=>(i.data=Yr(i,i.parent,e).resolve,Fd(r$9,i,t).pipe(Tt$1(a=>(i._resolvedData=a,i.data=r(r({},i.data),a),null)))))}function Fd(i,t,e){let n=zr(i);if(n.length===0)return Ii$1({});let r={};return Cr(n).pipe(Xr$1(a=>jd(i[a],t,e).pipe(OD(),Yg(o=>{if(o instanceof Dt)throw Sn(new gt,o);r[a]=o}))),PD(1),Tt$1(()=>r),ip$1(a=>as(a)?_i$1:wD(a)))}function jd(i,t,e){let n=t._environmentInjector,r=rn(i,n);return En(r.resolve?r.resolve(t,e):Jc$1(n,()=>r(t,e)))}var ia=new T(``);function Xr(i){return lp$1(t=>{let e=i(t);return e?Cr(e).pipe(Tt$1(()=>t)):Ii$1(t)})}var ra=(()=>{class i{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(a=>a.outlet===j);return n}getResolvedTitleForRoute(e){return e.data[Rn]}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:()=>b(ms)})}return i})();var ms=(()=>{class i extends ra{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static ɵfac=function(n){return new(n||i)(re(bU))};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var Rt=new T(``,{factory:()=>({})});var Ht=new T(``);var Bi=(()=>{class i{componentLoaders=/* @__PURE__ */ new WeakMap;childrenLoaders=/* @__PURE__ */ new WeakMap;onLoadStartListener;onLoadEndListener;compiler=b(OA);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let a=await ko(Jc$1(e,()=>n.loadComponent())),o=await bs(Dz(a));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o,o}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let a=await gs(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();async function gs(i,t,e,n){let r=await ko(Jc$1(e,()=>i.loadChildren())),a=await bs(Dz(r)),o;a instanceof Ay||Array.isArray(a)?o=a:o=await t.compileModuleAsync(a),n&&n(i);let s,l,p;return Array.isArray(o)?l=o:(s=o.create(e).injector,p=o,l=s.get(Ht,[],{optional:!0,self:!0}).flat()),{routes:l.map(ta),injector:s,factory:p}}async function bs(i){return i}var Hi=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:()=>b(Vd)})}return i})();var Vd=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();var aa=new T(``);var oa=new T(``);function hs(i,t,e,n){let r=i.get(oa),a=i.get(q);if(n){r.skipNextTransition=!1;return}if(!a.startViewTransition||r.skipNextTransition)return r.skipNextTransition=!1,new Promise(p=>setTimeout(p));let o,s=new Promise(p=>{o=p}),l=a.startViewTransition(()=>(o(),Ud(i)));l.updateCallbackDone.catch(p=>{}),l.ready.catch(p=>{}),l.finished.catch(p=>{});let{onViewTransitionCreated:u}=r;return u&&Jc$1(i,()=>u({transition:l,from:t,to:e})),s}function Ud(i){return new Promise(t=>{er$1({read:()=>setTimeout(t)},{injector:i})})}var $d=()=>{};var sa=new T(``);var Fi=(()=>{class i{currentNavigation=$(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=$(null);events=new xe;transitionAbortWithErrorSubject=new xe;configLoader=b(Bi);environmentInjector=b(gt$1);destroyRef=b(ge);urlSerializer=b(It);rootContexts=b(Mt);location=b(kd$1);inputBindingEnabled=b(Pn,{optional:!0})!==null;titleStrategy=b(ra);options=b(Rt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||ql;urlHandlingStrategy=b(Hi);createViewTransition=b(aa,{optional:!0});navigationErrorHandler=b(sa,{optional:!0});routerResourcesFeature=b(ia,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ii$1(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Ii(r)),n=r=>this.events.next(new Ri(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;de(()=>{this.transitions?.next(s(r({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new sn$1(null),this.transitions.pipe(Dr(n=>n!==null),lp$1(n=>{let r$10=!0,a=!1,o=new AbortController,s$2=()=>!a&&this.currentTransition?.id===n.id;return Ii$1(n).pipe(lp$1(l=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,``,Me.SupersededByNewNavigation),_i$1;this.currentTransition=n;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl==`string`?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:u?s(r({},u),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});let p=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!p&&f!==`reload`)return this.events.next(new lt(l.id,this.urlSerializer.serialize(l.rawUrl),``,Qt.IgnoredSameUrlNavigation)),l.resolve(!1),_i$1;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ii$1(l).pipe(lp$1(y=>(this.events.next(new Tt(y.id,this.urlSerializer.serialize(y.extractedUrl),y.source,y.restoredState)),y.id!==this.navigationId?_i$1:Promise.resolve(y))),Ad(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Yg(y=>{n.targetSnapshot=y.targetSnapshot,n.urlAfterRedirects=y.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=y.urlAfterRedirects,E)),this.events.next(new Tn)}),lp$1(y=>Cr(n.routesRecognizeHandler.deferredHandle??Ii$1(void 0)).pipe(Tt$1(()=>y))),Yg(()=>{let y=new Mn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(y)}));if(p&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:y,extractedUrl:E,source:z,restoredState:F,extras:X}=l,A=new Tt(y,this.urlSerializer.serialize(E),z,F);this.events.next(A);let ae=Xo(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=s(r({},l),{targetSnapshot:ae,urlAfterRedirects:E,extras:s(r({},X),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(xe=>(xe.finalUrl=E,xe)),Ii$1(n)}else return this.events.next(new lt(l.id,this.urlSerializer.serialize(l.extractedUrl),``,Qt.IgnoredByUrlHandlingStrategy)),l.resolve(!1),_i$1}),Tt$1(l=>{let u=new Ni(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(u),this.currentTransition=n=s(r({},l),{guards:Ql(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),n}),dd(l=>this.events.next(l)),lp$1(l=>{if(n.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!=`boolean`)throw Sn(this.urlSerializer,l.guardsResult);let u=new Mi(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(u),!s$2())return _i$1;if(!l.guardsResult)return this.cancelNavigationTransition(l,``,Me.GuardRejected),_i$1;if(l.guards.canActivateChecks.length===0)return Ii$1(l);let p=new Ti(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(p),!s$2())return _i$1;let f=!1;return Ii$1(l).pipe(Bd(this.paramsInheritanceStrategy),Yg({next:()=>{f=!0;let y=new Di(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(y)},complete:()=>{f||this.cancelNavigationTransition(l,``,Me.NoDataFromResolver)}}))}),Xr(l=>{let u=f=>{let y=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let E=f._environmentInjector;y.push(this.configLoader.loadComponent(E,f.routeConfig).then(z=>{f.component=z}))}for(let E of f.children)y.push(...u(E));return y},p=u(l.targetSnapshot.root);return p.length===0?Ii$1(l):Cr(Promise.all(p).then(()=>l))}),lp$1(l=>{let{newlyCreatedRoutes:u,state:p}=Kl(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=n=l=s(r({},l),{targetRouterState:p,newlyCreatedRoutes:u}),this.currentNavigation.update(f=>(f.targetRouterState=p,f)),Ii$1(l)}),this.routerResourcesFeature?.setupAndRunResources(o.signal)??(l=>l),Xr(()=>this.afterPreactivation()),lp$1(()=>{let{currentSnapshot:l,targetSnapshot:u}=n,p=this.createViewTransition?.(this.environmentInjector,l.root,u.root,n.hasUAVisualTransition);return p?Cr(p).pipe(Tt$1(()=>n)):Ii$1(n)}),ps$1(1),lp$1(l=>{r$10=!1,this.events.next(new en);let u=n.beforeActivateHandler.deferredHandle;return u?Cr(u.then(()=>l)):Ii$1(l)}),Yg(l=>{new Wr(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),l.newlyCreatedRoutes?.clear(),s$2()&&(fs(l.targetRouterState),a=!0,this.currentNavigation.update(u=>(u.abort=$d,u)),this.lastSuccessfulNavigation.set(de(this.currentNavigation)),this.events.next(new Xe(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),Qr$1(os(o.signal).pipe(Dr(()=>!a&&r$10),Yg(()=>{this.cancelNavigationTransition(n,o.signal.reason+``,Me.Aborted)}))),Yg({complete:()=>{a=!0}}),Qr$1(this.transitionAbortWithErrorSubject.pipe(Yg(l=>{throw l}))),Wg(()=>{o.abort(),a||this.cancelNavigationTransition(n,``,Me.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ip$1(l=>{if(a=!0,Eo(n),this.destroyed)return n.resolve(!1),_i$1;if(l instanceof Dt&&(l=Sn(this.urlSerializer,l)),rs(l))this.events.next(new Ze(n.id,this.urlSerializer.serialize(n.extractedUrl),l.message,l.cancellationCode)),Yl(l)?this.events.next(new tn(l.url,l.navigationBehaviorOptions)):n.resolve(!1);else{let u=new Bt(n.id,this.urlSerializer.serialize(n.extractedUrl),l,n.targetSnapshot??void 0);try{let p=Jc$1(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(p instanceof Dt){let{message:f,cancellationCode:y}=Sn(this.urlSerializer,p);this.events.next(new Ze(n.id,this.urlSerializer.serialize(n.extractedUrl),f,y)),this.events.next(new tn(p.redirectTo,p.navigationBehaviorOptions))}else throw this.events.next(u),l}catch(p){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(p)}}return _i$1}))}))}cancelNavigationTransition(e,n,r){Eo(e);let a=new Ze(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=de(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();function Wd(i){return i!==Zt}function Eo(i){for(let t of i.newlyCreatedRoutes??[])t._localInjector?.destroy(),t._localInjector=void 0;fs(i.targetRouterState)}function fs(i){if(!i)return;let t=e=>{e.value.pending?.set(!1),e.children.forEach(t)};t(i._root)}var vs=new T(``);var ys=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:()=>b(qd)})}return i})();var zi=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}shouldDestroyInjector(t){return!0}};var qd=(()=>{class i extends zi{static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();var ji=(()=>{class i{urlSerializer=b(It);options=b(Rt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=b(kd$1);urlHandlingStrategy=b(Hi);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new He;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,o=r??a;return o instanceof He?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Xo(null,b(gt$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:()=>b(Gd)})}return i})();var Gd=(()=>{class i extends ji{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type===`popstate`&&setTimeout(()=>{e(n.url,n.state,`popstate`,{replaceUrl:!0},n.hasUAVisualTransition)})})}handleRouterEvent(e,n){e instanceof Tt?this.updateStateMemento():e instanceof lt?this.commitTransition(n):e instanceof Mn?this.urlUpdateStrategy===`eager`&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof en?(this.commitTransition(n),this.urlUpdateStrategy===`deferred`&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ze?ts(e)?e.code===Me.Redirect&&this.routerState===n.targetRouterState&&this.resetInternalState(n):this.restoreHistory(n):e instanceof Bt?this.restoreHistory(n,!0):e instanceof Xe&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:r$11,id:a}=n,{replaceUrl:o,state:s}=r$11;if(this.location.isCurrentPathEqualTo(e)||o){let l=this.browserPageId,u=r(r({},s),this.generateNgRouterState(a,l,n));this.location.replaceState(e,``,u)}else{let l=r(r({},s),this.generateNgRouterState(a,this.browserPageId+1,n));this.location.go(e,``,l)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution===`computed`){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,r$12){return this.canceledNavigationResolution===`computed`?r({navigationId:e,ɵrouterPageId:n},this.routerUrlState(r$12)):r({navigationId:e},this.routerUrlState(r$12))}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();function Vi(i,t){i.events.pipe(Dr(e=>e instanceof Xe||e instanceof Ze||e instanceof Bt||e instanceof lt),Tt$1(e=>e instanceof Xe||e instanceof lt?0:(e instanceof Ze?e.code===Me.Redirect||e.code===Me.SupersededByNewNavigation:!1)?2:1),Dr(e=>e!==2),ps$1(1)).subscribe(()=>{t()})}var dt=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=b(Fy);stateManager=b(ji);options=b(Rt,{optional:!0})||{};pendingTasks=b(Mn$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=b(Fi);urlSerializer=b(It);location=b(kd$1);urlHandlingStrategy=b(Hi);injector=b(gt$1);_events=new xe;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=b(ys);injectorCleanup=b(vs,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=b(Ht,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!b(Pn,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ae$1;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r$13=this.navigationTransitions.currentTransition,a=de(this.navigationTransitions.currentNavigation);if(r$13!==null&&a!==null){if(this.stateManager.handleRouterEvent(n,a),n instanceof Ze&&n.code!==Me.Redirect&&n.code!==Me.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Xe)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof tn){let o=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r$13.currentRawUrl),l=r({scroll:r$13.extras.scroll,browserUrl:r$13.extras.browserUrl,info:r$13.extras.info,skipLocationChange:r$13.extras.skipLocationChange,replaceUrl:r$13.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Wd(r$13.source)},o);this.scheduleNavigation(s,Zt,null,l,r$13.hasUAVisualTransition,{resolve:r$13.resolve,reject:r$13.reject,promise:r$13.promise})}}Gl(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Zt,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,a,o)=>{this.navigateToSyncWithBrowser(e,r,n,a,o)})}navigateToSyncWithBrowser(e,n,r$14,a,o){let s$3=r$14?.navigationId?r$14:null,l=r$14?.ɵrouterUrl??e;if(r$14?.ɵrouterUrl&&(a=s(r({},a),{browserUrl:e})),r$14){let p=r({},r$14);delete p.navigationId,delete p.ɵrouterPageId,delete p.ɵrouterUrl,Object.keys(p).length!==0&&(a.state=p)}let u=this.parseUrl(l);this.scheduleNavigation(u,n,s$3,a,o).catch(p=>{this.disposed||this.injector.get(po)(p)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return de(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ta),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r$15,queryParams:a,fragment:o,queryParamsHandling:s,preserveFragment:l}=n,u=l?this.currentUrlTree.fragment:o,p=null;switch(s??this.options.defaultQueryParamsHandling){case`merge`:p=r(r({},this.currentUrlTree.queryParams),a);break;case`preserve`:p=this.currentUrlTree.queryParams;break;default:p=a||null}let f;try{f=qo(r$15?r$15.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),f=this.currentUrlTree.root}return Go(f,e,p,u??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Nt(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,Zt,null,n)}navigate(e,n={skipLocationChange:!1}){return Kd(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Tr(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,n){let r$16;if(n===!0?r$16=r({},zo):n===!1?r$16=r({},yi):r$16=r(r({},yi),n),Nt(e))return Ar(this.currentUrlTree,e,r$16);let a=this.parseUrl(e);return Ar(this.currentUrlTree,a,r$16)}scheduleNavigation(e,n,r,a,o,s){if(this.disposed)return Promise.resolve(!1);let l,u,p;s?(l=s.resolve,u=s.reject,p=s.promise):p=new Promise((y,E)=>{l=y,u=E});let f=this.pendingTasks.add();return Vi(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,hasUAVisualTransition:o,resolve:l,reject:u,promise:p,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),p.catch(Promise.reject.bind(Promise))}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();function Kd(i){for(let t=0;t<i.length;t++)if(i[t]==null)throw new j$1(4008,!1)}var Xd=(()=>{class i{router=b(dt);stateManager=b(ji);fragment=$(``);queryParams=$({});path=$(``);serializer=b(It);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Xe&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new He(n)))}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();var Ui=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=b(new _k(`href`),{optional:!0});reactiveHref=bd$1(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=n=>n===`preserve`||n===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return de(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return de(this._target)}_target=$(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return de(this._queryParams)}_queryParams=$(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return de(this._fragment)}_fragment=$(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return de(this._queryParamsHandling)}_queryParamsHandling=$(void 0);set state(e){this._state.set(e)}get state(){return de(this._state)}_state=$(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return de(this._info)}_info=$(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return de(this._relativeTo)}_relativeTo=$(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return de(this._preserveFragment)}_preserveFragment=$(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return de(this._skipLocationChange)}_skipLocationChange=$(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return de(this._replaceUrl)}_replaceUrl=$(!1);browserUrl=ee(void 0);isAnchorElement;onChanges=new xe;applicationErrorHandler=b(po);options=b(Rt,{optional:!0});reactiveRouterState=b(Xd);constructor(e,n,r,a,o,s){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=a,this.el=o,this.locationStrategy=s;let l=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l===`a`||l===`area`||!!(typeof customElements==`object`&&customElements.get(l)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=$(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Nt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,n,r$17,a,o){let s=this.urlTree;if(s===null||this.isAnchorElement&&(e!==0||n||r$17||a||o||typeof this.target==`string`&&this.target!=`_self`))return!0;let l=this.browserUrl(),u=r({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},l!==void 0&&{browserUrl:l});return this.router.navigateByUrl(s,u)?.catch(p=>{this.applicationErrorHandler(p)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let r=this.renderer,a=this.el.nativeElement;n!==null?r.setAttribute(a,e,n):r.removeAttribute(a,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:Nt(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return de(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(n){return new(n||i)(Y(dt),Y(st),xm$1(`tabindex`),Y(Nt$1),Y(ke),Y(Ws$1))};static ɵdir=pe({type:i,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(n,r){n&1&&br(`click`,function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),n&2&&vo(`href`,r.reactiveHref(),HS)(`target`,r._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,Ye],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,Ye],replaceUrl:[2,`replaceUrl`,`replaceUrl`,Ye],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Ot]})}return i})();var kn=class{};var xs=(()=>{class i{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,a){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(Dr(e=>e instanceof Xe),AD(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let r=[];for(let a of n){a.providers&&!a._injector&&(a._injector=Ry(a.providers,e,``));let o=a._injector??e;a._loadedNgModuleFactory&&!a._loadedInjector&&(a._loadedInjector=a._loadedNgModuleFactory.create(o).injector);let s=a._loadedInjector??o;(a.loadChildren&&!a._loadedRoutes&&a.canLoad===void 0||a.loadComponent&&!a._loadedComponent)&&r.push(this.preloadConfig(o,a)),(a.children||a._loadedRoutes)&&r.push(this.processRoutes(s,a.children??a._loadedRoutes))}return Cr(r).pipe(np$1())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return Ii$1(null);let r;n.loadChildren&&n.canLoad===void 0?r=Cr(this.loader.loadChildren(e,n)):r=Ii$1(null);let a=r.pipe(Xr$1(o=>o===null?Ii$1(void 0):(n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,this.processRoutes(o.injector??e,o.routes))));if(n.loadComponent&&!n._loadedComponent){let o=this.loader.loadComponent(e,n);return Cr([a,o]).pipe(np$1())}else return a})}static ɵfac=function(n){return new(n||i)(re(dt),re(gt$1),re(kn),re(Bi))};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var da=new T(``);var Ss=(()=>{class i{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Zt;restoredId=0;store={};isHydrating=b(aS,{optional:!0})??!1;urlSerializer=b(It);zone=b(le);viewportScroller=b(C6);transitions=b(Fi);constructor(e){this.options=e,this.options.scrollPositionRestoration||=`disabled`,this.options.anchorScrolling||=`disabled`,this.isHydrating&&b(mr).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.setHistoryScrollRestoration(`manual`),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Tt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Xe?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof lt&&e.code===Qt.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Jt)||e.scrollBehavior===`manual`)return;let n={behavior:`instant`};e.position?this.options.scrollPositionRestoration===`top`?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration===`enabled`&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling===`enabled`?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){if(this.isHydrating)return;let r=de(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(a=>{setTimeout(a),typeof requestAnimationFrame<`u`&&requestAnimationFrame(a)}),this.zone.run(()=>{this.transitions.events.next(new Jt(e,this.lastSource===`popstate`?this.store[this.restoredId]:null,n,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static ɵfac=function(n){CM()};static ɵprov=B({token:i,factory:i.ɵfac})}return i})();function Yd(i,...t){return Bo$1([{provide:Ht,multi:!0,useValue:i},{provide:st,useFactory:Cs},{provide:sb,multi:!0,useFactory:_s},t.map(e=>e.ɵproviders)])}function Cs(){return b(dt).routerState.root}function an(i,t){return{ɵkind:i,ɵproviders:t}}function Qd(i={}){return an(4,[{provide:da,useFactory:()=>new Ss(i)}])}function _s(){let i=b(ie);return t=>{let e=i.get(mr);if(t!==e.components[0])return;let n=i.get(dt),r=i.get(ws);i.get(ca)===1&&n.initialNavigation(),i.get(Ts,null,{optional:!0})?.setUpPreloading(),i.get(da,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ws=new T(``,{factory:()=>new xe});var ca=new T(``,{factory:()=>1});function Ns(){return an(2,[{provide:v0,useValue:!0},{provide:ca,useValue:0},pT(()=>{let t=b(ie);return t.get(k1,Promise.resolve()).then(()=>new Promise(n=>{let r=t.get(dt),a=t.get(ws);Vi(r,()=>{n(!0)}),t.get(Fi).afterPreactivation=()=>(n(!0),a.closed?Ii$1(void 0):a),r.initialNavigation()}))})])}function Ms(){return an(3,[pT(()=>{b(dt).setUpLocationChangeListener()}),{provide:ca,useValue:2}])}var Ts=new T(``);function Ds(i){return an(0,[{provide:Ts,useExisting:xs},{provide:kn,useExisting:i}])}function Is(i={}){return an(8,[{provide:Pn,useFactory:()=>new es(i,b(ia,{optional:!0}))}])}function Rs(i){Jt$1(`NgRouterViewTransitions`);return an(9,[{provide:aa,useValue:hs},{provide:oa,useValue:r({skipNextTransition:!!i?.skipInitialTransition},i)}])}var Es=[kd$1,{provide:It,useClass:gt},dt,Mt,{provide:st,useFactory:Cs},Bi];var Jd=(()=>{class i{constructor(){}static forRoot(e,n){return{ngModule:i,providers:[Es,[],{provide:Ht,multi:!0,useValue:e},[],n?.errorHandler?{provide:sa,useValue:n.errorHandler}:[],{provide:Rt,useValue:n||{}},n?.useHash?tc():nc(),ec(),n?.preloadingStrategy?Ds(n.preloadingStrategy).ɵproviders:[],n?.initialNavigation?ic(n):[],n?.bindToComponentInputs?Is(typeof n.bindToComponentInputs==`object`?n.bindToComponentInputs:{}).ɵproviders:[],n?.enableViewTransitions?Rs().ɵproviders:[],rc()]}}static forChild(e){return{ngModule:i,providers:[{provide:Ht,multi:!0,useValue:e}]}}static ɵfac=function(n){return new(n||i)};static ɵmod=ot$1({type:i});static ɵinj=Ze$1({})}return i})();function ec(){return{provide:da,useFactory:()=>{let i=b(C6),t=b(Rt);return t.scrollOffset&&i.setOffset(t.scrollOffset),new Ss(t)}}}function tc(){return{provide:Ws$1,useClass:_1}}function nc(){return{provide:Ws$1,useClass:$k}}function ic(i){return[i.initialNavigation===`disabled`?Ms().ɵproviders:[],i.initialNavigation===`enabledBlocking`?Ns().ɵproviders:[]]}var la=new T(``);function rc(){return[{provide:la,useFactory:_s},{provide:sb,multi:!0,useExisting:la}]}var Et=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);resolvedLabel=G(()=>LQ(this.label(),this.i18n));size=ee(20);decorative=ee(!1);label=ee(`Loading`);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-loading-spinner`]],hostVars:7,hostBindings:function(e,n){e&2&&(vo(`role`,n.decorative()?null:`status`)(`aria-label`,n.decorative()?null:n.resolvedLabel())(`aria-hidden`,n.decorative()?`true`:null),ka(`--%NS%bx-spinner-size`,n.size()+`px`),tr$1(`is-reduced-motion`,n.bxA11yService.isReducedMotion()))},inputs:{size:[1,`size`],decorative:[1,`decorative`],label:[1,`label`]},decls:1,vars:0,consts:[[1,`bx-spinner-ring`]],template:function(e,n){e&1&&lb(0,`span`,0)},styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  flex: 0 0 auto;
  inline-size: var(--%NS%bx-spinner-size, 20px);
  block-size: var(--%NS%bx-spinner-size, 20px);
  color: var(--%NS%bx-spinner-color, currentColor);
  vertical-align: middle;
}
.bx-spinner-ring[_ngcontent-%COMP%] {
  box-sizing: border-box;
  inline-size: 100%;
  block-size: 100%;
  border: var(--%NS%bx-spinner-stroke, 2px) solid currentcolor;
  border-inline-end-color: transparent;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_bx-spinner-turn 0.75s linear infinite;
}
.is-reduced-motion[_nghost-%COMP%]   .bx-spinner-ring[_ngcontent-%COMP%] {
  animation: none;
}
@keyframes _ngcontent-%COMP%_bx-spinner-turn {
  to {
    transform: rotate(360deg);
  }
}`]})};function ac(i,t){if(i&1&&lA(0),i&2){let e=Wo$1();mb(` `,e.resolvedText(),` `)}}var $i=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);resolvedText=G(()=>{this.i18n?.version?.();let t=this.text();if(t)return LQ(t,this.i18n)});isAnimated=G(()=>!this.bxA11yService.isReducedMotion());text=ee.required();static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-tooltip`]],inputs:{text:[1,`text`]},decls:2,vars:3,consts:[[`bxSurface`,``,1,`bx-tooltip-surface`]],template:function(e,n){e&1&&(bo(0,`div`,0),od$1(1,ac,1,1),Go$1()),e&2&&(tr$1(`bx-tooltip-animated`,n.isAnimated()),Xl$1(),nd$1(n.resolvedText()?1:-1))},dependencies:[GC],styles:[`
[_nghost-%COMP%] {
  display: block;
  pointer-events: auto;
  z-index: 600;
}
.bx-tooltip-surface[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  position: relative;
  padding: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius, var(--%NS%bx-rounded-sm, 0.25rem));
  font-size: 0.75rem;
  font-family: inherit;
  max-width: min(22rem, 100vw - var(--%NS%bx-space-6, 1.5rem));
  white-space: normal;
  overflow-wrap: anywhere;
  --%NS%bx-glass-unified-lighting: 1;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-decoration-opacity: 0;
  --%NS%bx-glass-rim-visibility: 0.35;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
}
.bx-tooltip-surface[data-bx-surface][_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: var(--%NS%bx-space-2, 0.5rem);
  height: var(--%NS%bx-space-2, 0.5rem);
  box-sizing: border-box;
  border-radius: var(--%NS%bx-rounded-none, 0);
  background: var(--%NS%bx-glass-surface);
  border: 0 var(--%NS%bx-border-style, solid) var(--%NS%bx-tooltip-arrow-edge, var(--%NS%bx-glass-edge));
  transform: translate(-50%, -50%) rotate(45deg);
  pointer-events: none;
}
@media (prefers-contrast: more) {
  .bx-tooltip-surface[data-bx-surface][_ngcontent-%COMP%] {
    --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
    --%NS%bx-glass-edge: currentcolor;
  }
  .bx-tooltip-surface[data-bx-surface][_ngcontent-%COMP%]::after {
    border-color: currentcolor;
  }
}
.bx-overlay-pos-bottom[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%], .bx-overlay-pos-bottom   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%] {
  --%NS%bx-tooltip-arrow-edge: var(--%NS%bx-glass-lit-edge-top, var(--%NS%bx-glass-edge));
}
.bx-overlay-pos-bottom[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after, .bx-overlay-pos-bottom   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after {
  top: calc(-1 * var(--%NS%bx-border-width, 1px));
  left: clamp(var(--%NS%bx-space-3, 0.75rem), var(--%NS%bx-tooltip-arrow-x, 50%), 100% - var(--%NS%bx-space-3, 0.75rem));
  border-top-width: var(--%NS%bx-border-width, 1px);
  border-left-width: var(--%NS%bx-border-width, 1px);
}
.bx-overlay-pos-top[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%], .bx-overlay-pos-top   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%] {
  --%NS%bx-tooltip-arrow-edge: var(--%NS%bx-glass-lit-edge-bottom, var(--%NS%bx-glass-edge));
}
.bx-overlay-pos-top[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after, .bx-overlay-pos-top   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after {
  top: calc(100% + var(--%NS%bx-border-width, 1px));
  left: clamp(var(--%NS%bx-space-3, 0.75rem), var(--%NS%bx-tooltip-arrow-x, 50%), 100% - var(--%NS%bx-space-3, 0.75rem));
  border-right-width: var(--%NS%bx-border-width, 1px);
  border-bottom-width: var(--%NS%bx-border-width, 1px);
}
.bx-overlay-pos-left[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%], .bx-overlay-pos-left   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%] {
  --%NS%bx-tooltip-arrow-edge: var(--%NS%bx-glass-lit-edge-right, var(--%NS%bx-glass-edge));
}
.bx-overlay-pos-left[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after, .bx-overlay-pos-left   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after {
  left: calc(100% + var(--%NS%bx-border-width, 1px));
  top: clamp(var(--%NS%bx-space-2, 0.5rem), var(--%NS%bx-tooltip-arrow-y, 50%), 100% - var(--%NS%bx-space-2, 0.5rem));
  border-top-width: var(--%NS%bx-border-width, 1px);
  border-right-width: var(--%NS%bx-border-width, 1px);
}
.bx-overlay-pos-right[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%], .bx-overlay-pos-right   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%] {
  --%NS%bx-tooltip-arrow-edge: var(--%NS%bx-glass-lit-edge-left, var(--%NS%bx-glass-edge));
}
.bx-overlay-pos-right[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after, .bx-overlay-pos-right   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after {
  left: calc(-1 * var(--%NS%bx-border-width, 1px));
  top: clamp(var(--%NS%bx-space-2, 0.5rem), var(--%NS%bx-tooltip-arrow-y, 50%), 100% - var(--%NS%bx-space-2, 0.5rem));
  border-bottom-width: var(--%NS%bx-border-width, 1px);
  border-left-width: var(--%NS%bx-border-width, 1px);
}
@media (forced-colors: active) {
  .bx-tooltip-surface[data-bx-surface][_ngcontent-%COMP%]::after {
    background: Canvas;
    border-color: CanvasText;
  }
}`]})};var Ae=new T(`BX_OVERLAY_CONTEXT`);var Wi=class i{overlay=b(Ld$1);bxOverlayPositionService=b(_w);overlayContext=b(Ae,{optional:!0});elementRef=b(ke);bxA11yService=b(Br$1);ngZone=b(le);viewContainerRef=b(fr);scrollLockService=b(Nw);scrollLockId=qK();onPointerDown=t=>{if(this.lastPointerType=t.pointerType,this.cancelTouchPress(),t.isPrimary&&this.clearTouchGuard(),t.pointerType!==`touch`||!t.isPrimary||t.button!==0||!this.bxContextMenuLongPress()||this.hasNativeTouchAction(t))return;let n=this.elementRef.nativeElement.ownerDocument,r=n.defaultView;if(!r||this.hasTextSelection())return;let a={pointerId:t.pointerId,x:t.clientX,y:t.clientY,timer:0,opened:!1,events:new AbortController};this.touchPress=a;let o={capture:!0,passive:!0,signal:a.events.signal},s=()=>this.cancelTouchPress();n.addEventListener(`pointermove`,l=>{l.pointerId===a.pointerId&&!a.opened&&Math.hypot(l.clientX-a.x,l.clientY-a.y)>10&&s()},o);for(let l of[`pointerup`,`pointercancel`])n.addEventListener(l,u=>{u.pointerId===a.pointerId&&s()},o);n.addEventListener(`pointerdown`,l=>{l.pointerId!==a.pointerId&&s()},o),n.addEventListener(`scroll`,s,o),n.addEventListener(`visibilitychange`,()=>{n.hidden&&s()},o),r.addEventListener(`blur`,s,{signal:a.events.signal}),a.timer=r.setTimeout(()=>this.ngZone.run(()=>this.openTouchMenu(a)),500)};bxContextMenu=ee.required();bxContextMenuLongPress=ee(!0,{transform:Ye});openingOrigin;overlayRef=null;transition;point;disconnectBackdropOwnership;disconnectTheme;disconnectLighting;subscriptions=new Ae$1;revision=0;touchPress;touchGuard;touchGuardTimer;lastPointerType=``;constructor(){let t=this.elementRef.nativeElement;t.ownerDocument.defaultView&&this.ngZone.runOutsideAngular(()=>t.addEventListener(`pointerdown`,this.onPointerDown,{passive:!0})),b(ge).onDestroy(()=>{++this.revision,t.removeEventListener(`pointerdown`,this.onPointerDown),this.cancelTouchPress(),this.clearTouchGuard(),this.dispose()})}open(t){if(t.type===`contextmenu`&&this.lastPointerType===`touch`){let e=this.touchPress;if(!e)return;if(!this.bxContextMenuLongPress()||this.hasNativeTouchAction(t)||this.hasTextSelection()){this.cancelTouchPress();return}t.preventDefault(),this.openTouchMenu(e);return}t.preventDefault(),this.cancelTouchPress(),this.clearTouchGuard(),this.openAt(t.clientX,t.clientY)}openFrom(t,e){e.preventDefault(),this.cancelTouchPress(),this.clearTouchGuard();let n=e instanceof KeyboardEvent,r=t.getBoundingClientRect();this.openAt(n?r.left:e.clientX,n?r.bottom:e.clientY,t),n&&this.items()[0]?.focus()}close(t=!1){if(!this.overlayRef)return;let e=++this.revision;this.scrollLockService.enableScroll(this.scrollLockId),(t||this.overlayRef.overlayElement.contains(this.elementRef.nativeElement.ownerDocument.activeElement))&&(this.openingOrigin??this.elementRef.nativeElement).focus({preventScroll:!0}),this.overlayRef.overlayElement.inert=!0;let n=this.transition;n&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>n.exit()).then(()=>{e===this.revision&&this.dispose()}).catch(()=>{e===this.revision&&this.dispose()}):this.dispose()}onKey(t){if(t.key!==`ContextMenu`&&!(t.shiftKey&&t.key===`F10`))return;t.preventDefault(),this.lastPointerType=``,this.cancelTouchPress(),this.clearTouchGuard();let e=this.elementRef.nativeElement.getBoundingClientRect();this.openAt(e.left+Math.min(24,e.width/2),e.bottom),this.items()[0]?.focus()}onDocumentClick(t){let e=t.target;e&&this.overlayRef?.overlayElement.contains(e)&&e.closest(`button, a, [role="menuitem"]`)&&this.close()}hasNativeTouchAction(t){let e=this.elementRef.nativeElement;for(let n of t.composedPath())if(n instanceof HTMLElement){if(n.isContentEditable||n.matches(`input, textarea, select, :disabled, [aria-disabled="true"], [inert]`))return!0;if(n===e)break}return!!e.closest(`:disabled, [aria-disabled="true"], [inert]`)}hasTextSelection(){let t=this.elementRef.nativeElement,e=t.ownerDocument.getSelection();return!!e&&!e.isCollapsed&&(t.contains(e.anchorNode)||t.contains(e.focusNode))}openTouchMenu(t){if(this.touchPress!==t||t.opened)return;let e=this.elementRef.nativeElement;if(!this.bxContextMenuLongPress()||!e.isConnected||e.isContentEditable||e.closest(`:disabled, [aria-disabled="true"], [inert]`)||this.hasTextSelection()){this.cancelTouchPress();return}t.opened=!0,this.elementRef.nativeElement.ownerDocument.defaultView?.clearTimeout(t.timer),this.guardTouchRelease(),this.openAt(t.x,t.y+12)}cancelTouchPress(){let t=this.touchPress;if(!t)return;this.touchPress=void 0;let e=this.elementRef.nativeElement.ownerDocument.defaultView;e?.clearTimeout(t.timer),t.events.abort(),t.opened&&e&&(this.touchGuardTimer=e.setTimeout(()=>this.clearTouchGuard(),800))}guardTouchRelease(){this.clearTouchGuard();let t=this.elementRef.nativeElement.ownerDocument,e=new AbortController;this.touchGuard=e;let n={capture:!0,signal:e.signal};t.addEventListener(`click`,r=>{r.detail!==0&&(r.preventDefault(),r.stopImmediatePropagation(),this.clearTouchGuard())},n),t.addEventListener(`contextmenu`,r=>{r.preventDefault(),r.stopImmediatePropagation()},n),t.addEventListener(`pointerdown`,r=>{r.isPrimary&&this.clearTouchGuard()},s(r({},n),{passive:!0})),t.addEventListener(`keydown`,()=>this.clearTouchGuard(),n)}clearTouchGuard(){this.touchGuard?.abort(),this.touchGuard=void 0,this.elementRef.nativeElement.ownerDocument.defaultView?.clearTimeout(this.touchGuardTimer),this.touchGuardTimer=void 0}openAt(t,e,n=this.elementRef.nativeElement){this.dispose(),++this.revision;let r=n;this.openingOrigin=n,this.overlayRef=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getCoordinateStrategy(t,e),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.overlayContext?.useTopLayer||!!r.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`),hasBackdrop:!0,backdropClass:`cdk-overlay-transparent-backdrop`}),this.subscriptions=new Ae$1,this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let a=r.ownerDocument.defaultView;a&&this.ngZone.runOutsideAngular(()=>{let u=p=>{let f=p.target;this.overlayRef?.overlayElement.inert||(f===a||f instanceof Node&&f.contains(r))&&this.ngZone.run(()=>this.close())};a.addEventListener(`scroll`,u,{capture:!0,passive:!0}),this.subscriptions.add(()=>a.removeEventListener(`scroll`,u,!0))}),this.subscriptions.add(this.overlayRef.backdropClick().subscribe(u=>{u.stopPropagation(),this.close()})),this.subscriptions.add(this.overlayRef.detachments().subscribe(()=>this.dispose())),this.subscriptions.add(this.overlayRef.keydownEvents().subscribe(u=>this.onMenuKey(u)));let o=this.overlayRef.overlayElement;this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(r,o)),this.disconnectLighting=DR(o,r);let s=this.overlayRef.attach(new ja(this.bxContextMenu(),this.viewContainerRef)),l=this.overlayRef.backdropElement;if(l&&(this.disconnectBackdropOwnership=zh(r,l)),s.detectChanges(),this.overlayRef.updatePosition(),!this.bxA11yService.isReducedMotion()){let u=r.ownerDocument.createElement(`span`);u.setAttribute(`aria-hidden`,`true`),Object.assign(u.style,{position:`fixed`,left:`${t}px`,top:`${e}px`,width:`1px`,height:`1px`,pointerEvents:`none`}),r.ownerDocument.body.append(u),this.point=u;let p=this.ngZone.runOutsideAngular(()=>MR(u,o));this.transition=p,this.ngZone.runOutsideAngular(()=>p.enter()).catch(()=>{this.transition?.destroy(),this.transition=void 0})}}items(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button:not(:disabled), a[href], [role="menuitem"]`)??[]).filter(t=>!t.matches(`[disabled], [aria-disabled="true"]`)&&!t.closest(`[hidden], [inert]`))}onMenuKey(t){if(t.key===`Escape`){t.preventDefault(),t.stopPropagation(),this.close(!0);return}if(t.target?.closest(`input,textarea,[contenteditable="true"]`)||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key))return;let e=this.items();if(!e.length)return;t.preventDefault();let n=e.indexOf(this.elementRef.nativeElement.ownerDocument.activeElement);e[t.key===`Home`?0:t.key===`End`?e.length-1:t.key===`ArrowDown`?(n+1)%e.length:n<0?e.length-1:(n-1+e.length)%e.length].focus()}dispose(){this.subscriptions.unsubscribe(),this.disconnectBackdropOwnership?.(),this.disconnectBackdropOwnership=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.transition?.destroy(),this.transition=void 0,this.point?.remove(),this.point=void 0;let t=this.overlayRef;this.overlayRef=null,this.openingOrigin=void 0,t?.dispose(),this.scrollLockService.enableScroll(this.scrollLockId),this.disconnectLighting?.(),this.disconnectLighting=void 0}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxContextMenu`,``]],hostBindings:function(e,n){e&1&&br(`contextmenu`,function(a){return n.open(a)})(`keydown`,function(a){return n.onKey(a)})(`click`,function(a){return n.onDocumentClick(a)},US)},inputs:{bxContextMenu:[1,`bxContextMenu`],bxContextMenuLongPress:[1,`bxContextMenuLongPress`]}})};var Pt=class i{elementRef=b(ke);overlay=b(Ld$1);bxOverlayPositionService=b(_w);bxA11yService=b(Br$1);ngZone=b(le);focusMonitor=b(ig);ariaDescriber=b(xQ);overlayContext=b(Ae,{optional:!0});i18n=b(VQ,{optional:!0});contextMenuDirective=b(Wi,{optional:!0});id=`bx-tooltip-${qK()}`;bxTooltip=ee.required();placement=ee(`bottom`);bxTooltipTouch=ee(`none`);bxTooltipHover=ee(!0);bxTooltipDwell=ee(0,{transform:Mb});bxTooltipTruncatedOnly=ee(!1,{transform:Ye});overlayRef=null;tooltipComponent;transition;disconnectOrigin;disconnectTheme;disconnectLighting;positionSubscription;keyboardSubscription;revision=0;hovered=!1;bubbleHovered=!1;hoverGap=!1;hoverHideTimer;hoverEvents;dwellTimer;dwellEvents;focused=!1;lastPointerType=``;touchEvents;holdTimer;touchHideTimer;touchVisible=!1;closeTouchTap=!1;constructor(){let t=this.elementRef.nativeElement,e=t.ownerDocument.defaultView?this.focusMonitor.monitor(t,!0).subscribe(n=>this.ngZone.run(()=>{this.focused=n===`keyboard`,this.focused?(this.clearTouchInteraction(),this.scheduleShow()):!this.hovered&&!this.bubbleHovered&&!this.touchEvents&&this.scheduleHoverHide()})):void 0;We(n=>{this.i18n?.version?.(),this.bxTooltipDwell(),this.cancelDwell();let r=this.bxTooltip(),a=LQ(r,this.i18n);if(!a){this.overlayRef&&this.hide();return}this.tooltipComponent?.setInput(`text`,r),(this.hovered||this.focused)&&this.scheduleShow(),this.ariaDescriber.describe(t,a,`tooltip`),n(()=>this.ariaDescriber.removeDescription(t,a,`tooltip`))}),b(ge).onDestroy(()=>{++this.revision,e?.unsubscribe(),e&&this.focusMonitor.stopMonitoring(t),this.clearTouchInteraction(),this.dispose()})}show(){if(this.cancelDwell(),clearTimeout(this.hoverHideTimer),this.hoverHideTimer=void 0,!this.bxTooltip()||this.bxTooltipTruncatedOnly()&&!this.isTruncated())return;let t=++this.revision;if(!this.overlayRef){let e=this.bxOverlayPositionService.getElementStrategy(this.elementRef.nativeElement,this.placement()).withFlexibleDimensions(!1);this.overlayRef=this.overlay.create({positionStrategy:e,scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:this.overlayContext?.useTopLayer??!0,hasBackdrop:!1,panelClass:`bx-tooltip-pane`});let n=this.overlayRef.overlayElement;n.id=this.id,n.setAttribute(`role`,`tooltip`),n.setAttribute(`aria-hidden`,`true`),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(this.elementRef.nativeElement,n)),this.disconnectLighting=DR(n,this.elementRef.nativeElement);let r=this.overlayRef.attach(new Ub($i));this.tooltipComponent=r,n.style.pointerEvents=`auto`,this.hoverEvents=new AbortController,this.elementRef.nativeElement.ownerDocument.addEventListener(`pointermove`,s=>this.onHoverMove(s),{passive:!0,signal:this.hoverEvents.signal}),n.addEventListener(`pointerenter`,s=>{s.pointerType===`mouse`&&(this.bubbleHovered=!0,clearTimeout(this.hoverHideTimer),this.hoverHideTimer=void 0)},{signal:this.hoverEvents.signal}),n.addEventListener(`pointerleave`,s=>{s.pointerType===`mouse`&&(this.bubbleHovered=!1,this.onHoverMove(s),this.scheduleHoverHide())},{signal:this.hoverEvents.signal}),this.keyboardSubscription=this.overlayRef.keydownEvents().subscribe(s=>this.onEscape(s)),r.setInput(`text`,this.bxTooltip()),r.changeDetectorRef.detectChanges();let a=()=>{let s=this.elementRef.nativeElement.getBoundingClientRect(),l=n.getBoundingClientRect();n.style.setProperty(`--bx-tooltip-arrow-x`,`${s.left+s.width/2-l.left}px`),n.style.setProperty(`--bx-tooltip-arrow-y`,`${s.top+s.height/2-l.top}px`),this.transition?.refresh()};this.positionSubscription=e.positionChanges.subscribe(a),this.overlayRef.updatePosition(),a();let o=this.overlayRef;this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>RK(o,this.elementRef.nativeElement,{onPosition:a})),this.bxA11yService.isReducedMotion()||(this.transition=this.ngZone.runOutsideAngular(()=>MR(this.elementRef.nativeElement,n)))}Promise.resolve(this.ngZone.runOutsideAngular(()=>this.transition?.enter())).catch(()=>{t===this.revision&&(this.transition?.destroy(),this.transition=void 0)})}hide(){this.cancelDwell(),clearTimeout(this.hoverHideTimer),this.hoverHideTimer=void 0,this.clearTouchInteraction(),this.hoverGap=!1;let t=++this.revision;if(!this.overlayRef)return;let e=this.transition;e&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>e.exit()).then(()=>{t===this.revision&&this.dispose()}).catch(()=>{t===this.revision&&this.dispose()}):this.dispose()}onEnter(t){t.pointerType!==`mouse`||!this.bxTooltipHover()||(this.clearTouchInteraction(),this.hovered=!0,this.scheduleShow())}onLeave(t){t.pointerType===`mouse`&&(this.hovered=!1,this.onHoverMove(t),this.scheduleHoverHide())}onPointerDown(t){this.lastPointerType=t.pointerType,t.pointerType===`touch`&&(this.closeTouchTap=this.touchVisible&&this.bxTooltipTouch()===`tap`,this.hovered=!1,this.focused=!1,this.hide(),this.bxTooltipTouch()===`longpress`&&t.isPrimary&&t.button===0&&this.canUseTouch(t)&&this.ngZone.runOutsideAngular(()=>this.startTouchInteraction(t)))}onClick(t){if(!(t.detail===0||this.lastPointerType!==`touch`||this.bxTooltipTouch()!==`tap`||!this.canUseTouch(t))){if(this.closeTouchTap){this.closeTouchTap=!1;return}this.ngZone.runOutsideAngular(()=>this.startTouchInteraction())}}onEscape(t){t.key===`Escape`&&(this.overlayRef||this.dwellTimer!==void 0)&&(t.preventDefault(),t.stopPropagation(),this.hovered=!1,this.focused=!1,this.hide())}scheduleShow(){if(this.overlayRef){this.show();return}if(this.dwellTimer!==void 0||!this.bxTooltip())return;let t=this.bxTooltipDwell(),e=Number.isFinite(t)?Math.max(0,t):0,n=this.elementRef.nativeElement,r=n.ownerDocument.defaultView;if(!e||!r){this.show();return}this.dwellEvents=new AbortController;let a={signal:this.dwellEvents.signal,capture:!0,passive:!0};n.ownerDocument.addEventListener(`scroll`,()=>this.cancelDwell(),a),n.ownerDocument.addEventListener(`visibilitychange`,()=>{n.ownerDocument.hidden&&this.cancelDwell()},a),r.addEventListener(`blur`,()=>this.cancelDwell(),a),this.dwellTimer=setTimeout(()=>{this.dwellTimer=void 0,this.dwellEvents?.abort(),this.dwellEvents=void 0,(this.hovered&&this.bxTooltipHover()||this.focused)&&n.isConnected&&!n.closest(`[inert], [hidden], [aria-hidden="true"]`)&&!n.ownerDocument.hidden&&this.ngZone.run(()=>this.show())},e)}cancelDwell(){clearTimeout(this.dwellTimer),this.dwellTimer=void 0,this.dwellEvents?.abort(),this.dwellEvents=void 0}onHoverMove(t){if(t.pointerType!==`mouse`||!this.overlayRef)return;let e=this.elementRef.nativeElement.getBoundingClientRect(),n=this.overlayRef.overlayElement.getBoundingClientRect(),r=t.clientX,a=t.clientY,o=(a>=n.bottom&&a<=e.top||a>=e.bottom&&a<=n.top)&&r>=Math.min(e.left,n.left)&&r<=Math.max(e.right,n.right),s=(r>=n.right&&r<=e.left||r>=e.right&&r<=n.left)&&a>=Math.min(e.top,n.top)&&a<=Math.max(e.bottom,n.bottom);this.hoverGap=o||s,this.scheduleHoverHide()}scheduleHoverHide(){if(!this.hovered&&!this.focused&&this.cancelDwell(),this.hovered||this.bubbleHovered||this.hoverGap||this.focused||this.touchVisible){clearTimeout(this.hoverHideTimer),this.hoverHideTimer=void 0;return}this.hoverHideTimer===void 0&&(this.hoverHideTimer=setTimeout(()=>{this.hoverHideTimer=void 0,!this.hovered&&!this.bubbleHovered&&!this.hoverGap&&!this.focused&&!this.touchVisible&&this.hide()},180))}isTruncated(){let t=this.elementRef.nativeElement;return t.scrollWidth>t.clientWidth||t.scrollHeight>t.clientHeight}canUseTouch(t){return this.contextMenuDirective&&this.bxTooltipTouch()===`longpress`||this.elementRef.nativeElement.closest(`:disabled, [aria-disabled="true"], [inert]`)?!1:!t.composedPath().some(n=>n instanceof HTMLElement&&(n.isContentEditable||n.matches(`input, textarea, select`)))}hasTextSelection(){let t=this.elementRef.nativeElement,e=t.ownerDocument.getSelection();return!!e&&!e.isCollapsed&&(t.contains(e.anchorNode)||t.contains(e.focusNode))}startTouchInteraction(t){let e=this.elementRef.nativeElement,n=e.ownerDocument,r$18=n.defaultView;if(!r$18||this.hasTextSelection())return;this.clearTouchInteraction();let a=new AbortController;this.touchEvents=a;let o={capture:!0,passive:!0,signal:a.signal},s$4=()=>this.ngZone.run(()=>this.hide()),l=!1;if(n.addEventListener(`pointerdown`,u=>{!t&&u.target instanceof Node&&e.contains(u.target)||s$4()},o),n.addEventListener(`scroll`,s$4,o),n.addEventListener(`visibilitychange`,()=>{n.hidden&&s$4()},o),r$18.addEventListener(`blur`,s$4,{signal:a.signal}),!t){this.touchVisible=!0,this.ngZone.run(()=>this.show());return}n.addEventListener(`pointermove`,u=>{u.pointerId===t.pointerId&&!this.touchVisible&&Math.hypot(u.clientX-t.clientX,u.clientY-t.clientY)>10&&s$4()},o),n.addEventListener(`pointerup`,u=>{u.pointerId===t.pointerId&&(this.touchVisible?this.touchHideTimer=r$18.setTimeout(s$4,1500):s$4())},o),n.addEventListener(`pointercancel`,u=>{u.pointerId===t.pointerId&&s$4()},o),n.addEventListener(`click`,u=>{!l||u.detail===0||(u.preventDefault(),u.stopImmediatePropagation(),l=!1)},s(r({},o),{passive:!1})),n.addEventListener(`contextmenu`,u=>{u.target instanceof Node&&e.contains(u.target)&&!this.hasTextSelection()&&u.preventDefault()},s(r({},o),{passive:!1})),this.holdTimer=r$18.setTimeout(()=>{if(this.bxTooltipTouch()!==`longpress`||!e.isConnected||e.closest(`:disabled, [aria-disabled="true"], [inert]`)||this.hasTextSelection()){s$4();return}this.touchVisible=!0,l=!0,this.ngZone.run(()=>this.show())},500)}clearTouchInteraction(){this.touchEvents?.abort(),this.touchEvents=void 0;let t=this.elementRef.nativeElement.ownerDocument.defaultView;t?.clearTimeout(this.holdTimer),t?.clearTimeout(this.touchHideTimer),this.holdTimer=void 0,this.touchHideTimer=void 0,this.touchVisible=!1}dispose(){this.cancelDwell(),clearTimeout(this.hoverHideTimer),this.hoverHideTimer=void 0,this.hoverEvents?.abort(),this.hoverEvents=void 0,this.bubbleHovered=!1,this.hoverGap=!1,this.keyboardSubscription?.unsubscribe(),this.keyboardSubscription=void 0,this.positionSubscription?.unsubscribe(),this.positionSubscription=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.transition?.destroy(),this.transition=void 0,this.overlayRef?.dispose(),this.overlayRef=null,this.tooltipComponent=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxTooltip`,``]],hostBindings:function(e,n){e&1&&br(`pointerenter`,function(a){return n.onEnter(a)})(`pointerleave`,function(a){return n.onLeave(a)})(`pointerdown`,function(a){return n.onPointerDown(a)})(`click`,function(a){return n.onClick(a)})(`keydown`,function(a){return n.onEscape(a)},US)},inputs:{bxTooltip:[1,`bxTooltip`],placement:[1,`placement`],bxTooltipTouch:[1,`bxTooltipTouch`],bxTooltipHover:[1,`bxTooltipHover`],bxTooltipDwell:[1,`bxTooltipDwell`],bxTooltipTruncatedOnly:[1,`bxTooltipTruncatedOnly`]}})};var ct=class i{nativeElement=b(ke).nativeElement;destroyRef=b(ge);ngZone=b(le);clipped=$(!1);content=$(``);truncated=this.clipped.asReadonly();text=this.content.asReadonly();enabled=ee(!0,{alias:`bxTruncate`,transform:Ye});truncatedChange=Pk();rendered=!1;frame;resize;mutations;listeners;textContext;constructor(){er$1(()=>this.observeLayout()),aI(()=>this.scheduleMeasure()),this.destroyRef.onDestroy(()=>{this.frame!==void 0&&this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.frame),this.resize?.disconnect(),this.mutations?.disconnect(),this.listeners?.abort()})}refresh(){if(!this.rendered||this.destroyRef.destroyed)return;let t=this.nativeElement.tagName===`INPUT`?this.nativeElement.value||this.nativeElement.placeholder:this.nativeElement.textContent??``,e=this.enabled()&&this.nativeElement.getClientRects().length>0&&this.measureOverflow(t);e===this.clipped()&&t===this.content()||this.ngZone.run(()=>{this.content.set(t),e!==this.clipped()&&(this.clipped.set(e),this.truncatedChange.emit(e))})}measureOverflow(t){if(this.nativeElement.tagName!==`INPUT`)return this.nativeElement.scrollWidth>this.nativeElement.clientWidth||this.nativeElement.scrollHeight>this.nativeElement.clientHeight;if(!t)return!1;let e=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement);if(this.textContext??=this.nativeElement.ownerDocument.createElement(`canvas`).getContext(`2d`),!e||!this.textContext)return this.nativeElement.scrollWidth>this.nativeElement.clientWidth;this.textContext.font=e.font||`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;let n=parseFloat(e.letterSpacing)||0,r=parseFloat(e.wordSpacing)||0;return this.textContext.measureText(t).width+n*Math.max(0,[...t].length-1)+r*(t.match(/\s/g)?.length??0)>this.nativeElement.clientWidth-(parseFloat(e.paddingInlineStart)||0)-(parseFloat(e.paddingInlineEnd)||0)+.5}observeLayout(){let t=this.nativeElement.ownerDocument.defaultView;t&&(this.rendered=!0,this.ngZone.runOutsideAngular(()=>{typeof ResizeObserver<`u`&&(this.resize=new ResizeObserver(()=>this.scheduleMeasure()),this.resize.observe(this.nativeElement)),typeof MutationObserver<`u`&&(this.mutations=new MutationObserver(()=>this.scheduleMeasure()),this.mutations.observe(this.nativeElement,{childList:!0,characterData:!0,subtree:!0}));let e=new AbortController;this.listeners=e;let n={passive:!0,signal:e.signal};t.addEventListener(`resize`,()=>this.scheduleMeasure(),n),t.visualViewport?.addEventListener(`resize`,()=>this.scheduleMeasure(),n);let r=this.nativeElement.ownerDocument.fonts;r?.addEventListener(`loadingdone`,()=>this.scheduleMeasure(),n),r?.ready.then(()=>this.scheduleMeasure()),this.scheduleMeasure()}))}scheduleMeasure(){let t=this.nativeElement.ownerDocument.defaultView;!this.rendered||this.destroyRef.destroyed||!t||this.frame!==void 0||this.ngZone.runOutsideAngular(()=>{this.frame=t.requestAnimationFrame(()=>{this.frame=void 0,this.refresh()})})}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxTruncate`,``]],hostVars:4,hostBindings:function(e,n){e&2&&(ka(`display`,n.enabled()?`block`:null),tr$1(`bx-truncate`,n.enabled()))},inputs:{enabled:[1,`bxTruncate`,`enabled`]},outputs:{truncatedChange:`truncatedChange`},exportAs:[`bxTruncate`]})};function qi(i,t,e=!0){return e&&t?i??``:``}var on=class i{transform(t,e,n=!0){return qi(t,e,n)}static ɵfac=function(e){return new(e||i)};static ɵpipe=tb({name:`bxTruncatedText`,type:i,pure:!0})};var oc=[[[``,`bxIconEnd`,``]],[[``,`bxIconStart`,``]],`*`];var sc=[`[bxIconEnd]`,`[bxIconStart]`,`*`];function lc(i,t){i&1&&sd$1(0,`bx-loading-spinner`,3),i&2&&xo(`size`,20)}function dc(i,t){if(i&1&&sd$1(0,`bx-icon`,8),i&2){let e=Wo$1(3);xo(`name`,e.icon())(`contentTemplate`,e.iconTemplate())}}function cc(i,t){if(i&1&&od$1(0,dc,1,2,`bx-icon`,8),i&2){let e=Wo$1(2);nd$1(e.icon()||e.iconTemplate()?0:-1)}}function uc(i,t){i&1&&(bo(0,`span`,4),dd$1(1,1,null,cc,1,1),Go$1())}function pc(i,t){if(i&1&&lA(0),i&2){let e=Wo$1();mb(` `,e.resolvedLabel(),` `)}}function mc(i,t){i&1&&dd$1(0,2)}function gc(i,t){if(i&1&&(bo(0,`kbd`),lA(1),Go$1()),i&2){let e=t.$implicit;Xl$1(),ik(e)}}function bc(i,t){if(i&1&&(bo(0,`span`,6),ab(1,gc,2,1,`kbd`,null,MT),Go$1()),i&2){let e=Wo$1();vo(`aria-hidden`,e.shortcutAria()?!0:null),Xl$1(),cb(e.resolvedShortcut())}}function hc(i,t){if(i&1&&sd$1(0,`bx-icon`,8),i&2){let e=Wo$1(2);xo(`name`,e.endIcon())(`contentTemplate`,e.endIconTemplate())}}function fc(i,t){if(i&1&&od$1(0,hc,1,2,`bx-icon`,8),i&2){let e=Wo$1();nd$1(e.endIcon()||e.endIconTemplate()?0:-1)}}var Gi=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);bxShortcutService=b(kC);resolvedLabel=G(()=>{this.i18n?.version?.();let t=this.label();if(t)return LQ(t,this.i18n)});resolvedAriaLabel=G(()=>(this.i18n?.version?.(),this.ariaLabel()?LQ(this.ariaLabel(),this.i18n):null));resolvedShortcut=G(()=>this.bxShortcutService.resolve(this.shortcut()));shortcutAria=G(()=>this.bxShortcutService.toAriaKeyshortcuts(this.shortcut()));isAnimated=G(()=>!this.bxA11yService.isReducedMotion());icon=ee(void 0);iconTemplate=ee(void 0);endIconTemplate=ee(void 0);endIcon=ee(void 0);label=ee(void 0);ariaLabel=ee(void 0);wrapLabel=ee(!1);tooltipOnTruncate=ee(!0,{transform:Ye});disabled=ee(!1);loading=ee(!1);danger=ee(!1);shortcut=ee(void 0);action=Pk();onClick(t){if(this.disabled()||this.loading()){t.preventDefault(),t.stopPropagation();return}this.action.emit(t)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-menu-item`]],inputs:{icon:[1,`icon`],iconTemplate:[1,`iconTemplate`],endIconTemplate:[1,`endIconTemplate`],endIcon:[1,`endIcon`],label:[1,`label`],ariaLabel:[1,`ariaLabel`],wrapLabel:[1,`wrapLabel`],tooltipOnTruncate:[1,`tooltipOnTruncate`],disabled:[1,`disabled`],loading:[1,`loading`],danger:[1,`danger`],shortcut:[1,`shortcut`]},outputs:{action:`action`},ngContentSelectors:sc,decls:13,vars:22,consts:[[`menuText`,`bxTruncate`],[`bxSurface`,``,`type`,`button`,`role`,`menuitem`,`bxTooltipTouch`,`longpress`,1,`bx-menu-item-btn`,3,`click`,`bxSurfaceEmission`,`disabled`,`bxTooltip`],[`bxSwipeContent`,``,1,`bx-menu-item-visual`],[`aria-hidden`,`true`,1,`bx-menu-item-leading`,3,`size`],[1,`bx-menu-item-leading`],[1,`bx-menu-item-content`,3,`bxTruncate`],[1,`bx-menu-item-shortcut`],[1,`bx-icon-pos-end`],[`size`,`20`,3,`name`,`contentTemplate`]],template:function(e,n){if(e&1&&(ld$1(oc),bo(0,`button`,1),SA(1,`bxTruncatedText`),br(`click`,function(a){return n.onClick(a)}),bo(2,`span`,2),od$1(3,lc,1,1,`bx-loading-spinner`,3)(4,uc,3,0,`span`,4),bo(5,`span`,5,0),od$1(7,pc,1,1)(8,mc,1,0),Go$1(),od$1(9,bc,3,1,`span`,6),bo(10,`span`,7),dd$1(11,0,null,fc,1,1),Go$1()()()),e&2){let r=FT(6);tr$1(`is-disabled`,n.disabled()||n.loading())(`is-danger`,n.danger())(`bx-menu-item-animated`,n.isAnimated()),xo(`bxSurfaceEmission`,!1)(`disabled`,n.disabled()||n.loading())(`bxTooltip`,AA(1,18,n.resolvedLabel()??r.text().trim(),r.truncated(),n.tooltipOnTruncate())),vo(`aria-label`,n.resolvedAriaLabel())(`aria-busy`,n.loading()?!0:null)(`aria-keyshortcuts`,n.disabled()||n.loading()?null:n.shortcutAria()),Xl$1(3),nd$1(n.loading()?3:4),Xl$1(2),tr$1(`bx-menu-item-content-wrapped`,n.wrapLabel()),xo(`bxTruncate`,!n.wrapLabel()),Xl$1(2),nd$1(n.resolvedLabel()?7:8),Xl$1(2),nd$1(n.resolvedShortcut()?9:-1)}},dependencies:[Et,ZC,GC,Pt,ct,on],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
[bxSwipeActions][_nghost-%COMP%] {
  border-radius: var(--%NS%bx-menu-item-radius, var(--%NS%bx-menu-inner-radius, max(0px, var(--%NS%bx-rounded-lg, 0.75rem) - (calc(var(--%NS%bx-space-1, 0.25rem) + var(--%NS%bx-border-width, 1px))))));
}
.bx-menu-item-btn[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: transparent !important;
  border: none;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  text-align: start;
  border-radius: var(--%NS%bx-menu-item-radius, var(--%NS%bx-menu-inner-radius, max(0px, var(--%NS%bx-rounded-lg, 0.75rem) - (calc(var(--%NS%bx-space-1, 0.25rem) + var(--%NS%bx-border-width, 1px))))));
  color: var(--%NS%bx-menu-item-color, var(--%NS%bx-text-primary));
  --%NS%bx-glass-decoration-opacity: 0;
  --%NS%bx-glass-rim-visibility: 0;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  box-shadow: none;
}
.bx-menu-item-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-menu-item-btn.bx-menu-item-animated[_ngcontent-%COMP%] {
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
}
.bx-menu-item-btn.bx-menu-item-animated[_ngcontent-%COMP%]   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  transition: color 0.1s ease-in-out;
}
.bx-menu-item-btn[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: var(--%NS%bx-bg-element-hover) !important;
}
.bx-menu-item-btn[_ngcontent-%COMP%]:hover:not(.is-disabled)   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: inherit;
  opacity: 1;
}
.bx-menu-item-btn[_ngcontent-%COMP%]:active:not(.is-disabled) {
  background: var(--%NS%bx-bg-element-active) !important;
}
.bx-menu-item-btn[_ngcontent-%COMP%]:active:not(.is-disabled)   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: inherit;
  opacity: 1;
}
.bx-menu-item-btn.is-danger[_ngcontent-%COMP%] {
  color: var(--%NS%bx-menu-item-color, var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger)));
}
.bx-menu-item-btn.is-danger[_ngcontent-%COMP%]   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: var(--%NS%bx-menu-item-color, var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger)));
  opacity: 0.7;
}
.bx-menu-item-btn.is-danger[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: var(--%NS%bx-bg-danger-hover) !important;
}
.bx-menu-item-btn.is-danger[_ngcontent-%COMP%]:active:not(.is-disabled) {
  background: var(--%NS%bx-bg-danger-active) !important;
}
.bx-menu-item-btn.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
.bx-menu-item-btn[aria-disabled=true][_ngcontent-%COMP%] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
.bx-menu-item-content[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
  line-height: 1.4;
  text-align: start;
}
.bx-menu-item-content-wrapped[_ngcontent-%COMP%] {
  white-space: normal;
  overflow-wrap: anywhere;
}
.bx-menu-item-shortcut[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  margin-inline-start: var(--%NS%bx-space-3, 0.75rem);
  flex-wrap: wrap;
  justify-content: flex-end;
  max-inline-size: 50%;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.bx-menu-item-shortcut[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {
  font-family: inherit;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  color: inherit;
}
.bx-menu-item-leading[_ngcontent-%COMP%] {
  flex: none;
  margin-inline-end: var(--%NS%bx-space-2, 0.5rem);
}
.bx-menu-item-visual[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  inline-size: 100%;
  min-inline-size: 0;
}
.bx-menu-item-leading[_ngcontent-%COMP%], 
.bx-icon-pos-end[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  flex: none;
}
.bx-menu-item-leading[_ngcontent-%COMP%]:empty, 
.bx-icon-pos-end[_ngcontent-%COMP%]:empty {
  display: none;
}`]})};var vc=[`*`];var Ki=class i{bxA11yService=b(Br$1);nativeElement=b(ke).nativeElement;isAnimated=G(()=>!this.bxA11yService.isReducedMotion());selectionMotion;constructor(){er$1(()=>{let t=this.nativeElement.querySelector(`[role="menu"]`);t&&(this.selectionMotion=TR(t,{reducedMotion:this.bxA11yService.isReducedMotion()}))}),We(()=>{let t=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:t})}),b(ge).onDestroy(()=>this.selectionMotion?.destroy())}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-menu`]],ngContentSelectors:vc,decls:2,vars:3,consts:[[`bxSurface`,``,`data-bx-surface`,`glass`,`role`,`menu`,1,`bx-menu-wrapper`,3,`bxSurfaceInteractive`]],template:function(e,n){e&1&&(ld$1(),bo(0,`div`,0),dd$1(1),Go$1()),e&2&&(tr$1(`bx-menu-animated`,n.isAnimated()),xo(`bxSurfaceInteractive`,!1))},dependencies:[GC],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-menu-wrapper[_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: var(--%NS%bx-dropdown-min-opacity, 0);
  --%NS%bx-glass-opacity: var(--%NS%bx-dropdown-opacity, min(1, var(--%NS%bx-glass-material-opacity, 0.5) + 0.18));
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  --%NS%bx-glass-radius: var(--%NS%bx-menu-radius, var(--%NS%bx-rounded-lg, 0.75rem));
  --%NS%bx-menu-inner-radius: max(0px, var(--%NS%bx-glass-radius) - (calc(var(--%NS%bx-menu-padding, var(--%NS%bx-space-1, 0.25rem)) + var(--%NS%bx-border-width, 1px))));
  background-color: var(--%NS%bx-glass-surface);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius, var(--%NS%bx-rounded-lg, 0.75rem));
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  padding: var(--%NS%bx-menu-padding, var(--%NS%bx-space-1, 0.25rem));
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-menu-item-gap, 0);
  box-sizing: border-box;
  min-width: var(--%NS%bx-menu-min-width, 12rem);
  max-width: 100%;
}
.bx-menu-wrapper.bx-menu-animated[_ngcontent-%COMP%] {
  transition: transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}
.bx-menu-wrapper[_ngcontent-%COMP%] {
  transform-origin: top;
}
.bx-menu-wrapper.is-hidden[_ngcontent-%COMP%] {
  opacity: 0;
  transform: scaleY(0.95);
  pointer-events: none;
}
[data-bx-surface][_nghost-%COMP%] {
  border-radius: var(--%NS%bx-menu-radius, var(--%NS%bx-glass-radius, var(--%NS%bx-rounded-lg, 0.75rem)));
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  color: var(--%NS%bx-glass-text, var(--%NS%bx-text-primary));
}
[data-bx-surface][_nghost-%COMP%]   .bx-menu-wrapper[_ngcontent-%COMP%] {
  background: transparent;
  border-color: transparent;
  border-radius: inherit;
  box-shadow: none;
}`]})};var Ln=class i{templateRef=b($t);static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[`ng-template`,`bxTabContent`,``]]})};var Ps=`segmented`;var Os=`Tabs`;var ks=/* @__PURE__ */ new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]);var Ls=`primary`;var zs=.15;var ua={primary:`primary`,accent:`accent`,success:`text-success`,danger:`text-danger`,info:`text-info`,warn:`text-warn`,grayscale:`text-primary`};var Je={threshold:6,holdDelay:200,releaseSlop:32,edgeSize:32,scrollSpeed:480};function Zi(i,t){return t?.version?.(),UC(i)?t?.translate(i.key)??i.key:i}function zn(i){return i?$h(i):null}var yc=[`content`];var xc=[`*`];function Sc(i,t){i&1&&dd$1(0)}var An=class i{i18n=b(VQ,{optional:!0});id=qK();projectedContent=Sz(`content`);lazyContent=Lk(Ln);triggerId=`bx-tab-${this.id}`;panelId=`bx-tab-panel-${this.id}`;resolvedLabel=G(()=>Zi(this.label(),this.i18n));resolvedHighlight=G(()=>zn(this.highlightColor()??ua[this.color()]));resolvedEmission=G(()=>`color-mix(in srgb, ${this.resolvedHighlight()} ${zs*100}%, transparent)`);resolvedTextColor=G(()=>zn(this.textColor()));resolvedSelectedText=G(()=>this.resolvedTextColor()??zn(this.color()===`primary`?`text-brand`:this.color()===`accent`?`text-accent`:ua[this.color()]));resolvedContentColor=G(()=>zn(this.contentColor()));template=G(()=>this.lazyContent()?.templateRef??this.projectedContent());label=ee.required();value=ee(this.id);disabled=ee(!1,{transform:Ye});color=ee(Ls);textColor=ee();highlightColor=ee();contentColor=ee();icon=ee();iconTemplate=ee(void 0);endIconTemplate=ee(void 0);endIcon=ee();static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-tab`]],contentQueries:function(e,n,r){e&1&&ud$1(r,n.lazyContent,Ln,5),e&2&&fb()},viewQuery:function(e,n){e&1&&Yy(n.projectedContent,yc,5),e&2&&fb()},inputs:{label:[1,`label`],value:[1,`value`],disabled:[1,`disabled`],color:[1,`color`],textColor:[1,`textColor`],highlightColor:[1,`highlightColor`],contentColor:[1,`contentColor`],icon:[1,`icon`],iconTemplate:[1,`iconTemplate`],endIconTemplate:[1,`endIconTemplate`],endIcon:[1,`endIcon`]},ngContentSelectors:xc,decls:2,vars:0,consts:[[`content`,``]],template:function(e,n){e&1&&(ld$1(),Ly(0,Sc,1,0,`ng-template`,null,0,RA))},styles:[`
[_nghost-%COMP%] {
  display: none;
}`]})};var Cc=[`tabList`];var _c=[`tabViewport`];var wc=[`selection`];var Nc=[`trigger`];var Mc=[[[`bx-tab`]]];var Tc=[`bx-tab`];function Dc(i,t){if(i&1&&sd$1(0,`bx-icon`,13),i&2){let e=Wo$1().$implicit;xo(`name`,e.icon())(`contentTemplate`,e.iconTemplate())}}function Ic(i,t){if(i&1&&sd$1(0,`bx-icon`,13),i&2){let e=Wo$1().$implicit;xo(`name`,e.endIcon())(`contentTemplate`,e.endIconTemplate())}}function Rc(i,t){if(i&1){let e=pb();bo(0,`button`,12,3),br(`pointerdown`,function(r){al$1(e);let a=Wo$1();return cl$1(a.onPointerDown(r))})(`pointermove`,function(r){al$1(e);let a=Wo$1();return cl$1(a.onPointerMove(r))})(`pointerup`,function(r){al$1(e);let a=Wo$1();return cl$1(a.onPointerEnd(r,!1))})(`pointercancel`,function(r){al$1(e);let a=Wo$1();return cl$1(a.onPointerEnd(r,!0))})(`lostpointercapture`,function(r){al$1(e);let a=Wo$1();return cl$1(a.onPointerEnd(r,!0))})(`click`,function(r){let a=al$1(e).$implicit,o=Wo$1();return cl$1(o.onTriggerClick(r,a))})(`keydown`,function(r){let a=al$1(e).$implicit,o=Wo$1();return cl$1(o.onTabKey(r,a))}),od$1(2,Dc,1,2,`bx-icon`,13),bo(3,`span`),lA(4),Go$1(),od$1(5,Ic,1,2,`bx-icon`,13),Go$1()}if(i&2){let e=t.$implicit,n=Wo$1();ka(`--%NS%bx-tab-highlight`,e.resolvedHighlight())(`--%NS%bx-tab-text`,e.resolvedTextColor())(`--%NS%bx-tab-selected-text`,e.resolvedSelectedText()),tr$1(`is-selected`,e===n.activeTab()),xo(`bxSurfaceEmission`,e.resolvedEmission())(`bxSurfaceEmissionStrength`,e===n.activeTab()?n.variant()===`underline`?.7:1:.35)(`id`,e.triggerId)(`disabled`,e.disabled()),vo(`aria-controls`,e.panelId)(`aria-selected`,e===n.activeTab())(`tabindex`,e===n.activeTab()?0:-1),Xl$1(2),nd$1(e.icon()||e.iconTemplate()?2:-1),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.endIcon()||e.endIconTemplate()?5:-1)}}function Ec(i,t){if(i&1&&$s$1(0,15),i&2){let e=Wo$1().$implicit;xo(`ngTemplateOutlet`,e.template())}}function Pc(i,t){if(i&1&&(bo(0,`div`,14),od$1(1,Ec,1,1,`ng-container`,15),Go$1()),i&2){let e=t.$implicit,n=Wo$1();ka(`color`,e.resolvedContentColor()),xo(`id`,e.panelId)(`hidden`,e!==n.activeTab()),vo(`aria-labelledby`,e.triggerId),Xl$1(),nd$1(e===n.activeTab()?1:-1)}}var As=class i{i18n=b(VQ,{optional:!0});destroyRef=b(ge);nativeElement=b(ke).nativeElement;bxA11yService=b(Br$1);tabList=Sz(`tabList`);tabViewport=Sz(`tabViewport`);selection=Sz(`selection`);triggers=Iz(`trigger`);hasRendered=$(!1);selectionVisible=$(!1);dragging=$(!1);activeTab=G(()=>{let t=this.tabs().filter(e=>!e.disabled());return t.find(e=>e.value()===this.selectedValue())??t[0]});resolvedLabel=G(()=>Zi(this.ariaLabel(),this.i18n));tabs=Mz(An);variant=ee(Ps);ariaLabel=ee(Os);dragSelection=ee(!0,{transform:Ye});selectedValue=_z(null);selectionMotion;selectionReady=!1;restoreSelectionFocus=!1;drag=null;suppressClick=!1;stopDragScroll;constructor(){We(()=>{let t=this.activeTab(),e=this.nativeElement.ownerDocument.activeElement,n=e?.closest(`[role="tabpanel"]`),r=e?.closest(`[role="tab"]`);(n&&this.nativeElement.contains(n)&&n.id!==t?.panelId||r&&this.nativeElement.contains(r)&&r.hasAttribute(`disabled`))&&(this.restoreSelectionFocus=!0)}),er$1(()=>this.hasRendered.set(!0)),Vk(()=>{let t=this.activeTab()?.value()??null;this.selectedValue()!==t&&this.selectedValue.set(t),this.restoreSelectionFocus&&(this.triggers().find(e=>e.nativeElement.id===this.activeTab()?.triggerId)?.nativeElement.focus({preventScroll:!0}),this.restoreSelectionFocus=!1)}),Vk(t=>{let e=this.tabList()?.nativeElement,n=this.triggers();this.activeTab(),this.bxA11yService.isReducedMotion(),this.variant(),this.dragSelection(),this.drag&&(!this.dragSelection()||this.drag.committedValue!==this.selectedValue()||this.geometryChanged()||!n.some(s=>s.nativeElement===this.drag?.origin&&!s.nativeElement.disabled))&&this.finishDrag(!0),this.drag?.moved?this.previewDrag():this.positionSelection();let r=e?.ownerDocument.defaultView,a=r?.ResizeObserver?new r.ResizeObserver(()=>{this.drag&&this.finishDrag(!0),this.positionSelection()}):void 0;e&&a?.observe(e);let o=this.tabViewport()?.nativeElement;o&&a?.observe(o),n.forEach(s=>a?.observe(s.nativeElement)),t(()=>a?.disconnect())}),this.destroyRef.onDestroy(()=>{this.finishDrag(!0),this.selectionMotion?.destroy()})}select(t){this.tabs().find(n=>n.value()===t&&!n.disabled())&&this.selectedValue.set(t)}onTabKey(t,e){if(this.onDragKey(t),t.altKey||t.ctrlKey||t.metaKey||!ks.has(t.key))return;let n=this.tabs().filter(f=>!f.disabled()),r=n.indexOf(e);if(r<0)return;t.preventDefault(),t.stopPropagation();let a=t.currentTarget,o=a.ownerDocument.defaultView?.getComputedStyle(a).direction===`rtl`,s=(t.key===`ArrowRight`?1:-1)*(o?-1:1),u=n[t.key===`Home`?0:t.key===`End`?n.length-1:(r+s+n.length)%n.length];this.select(u.value());let p=this.triggers().find(f=>f.nativeElement.id===u.triggerId)?.nativeElement;p?.focus({preventScroll:!0}),p?.scrollIntoView({block:`nearest`,inline:`nearest`})}onTriggerClick(t,e){if(this.suppressClick&&t.detail>0){this.suppressClick=!1,t.preventDefault();return}this.select(e.value())}onPointerDown(t){if(!this.dragSelection()||!t.isPrimary||t.button!==0||t.altKey||t.ctrlKey||t.metaKey)return;let e=t.currentTarget,n=this.measureTabs(),r=n.find(z=>z.element===e);if(!r)return;this.finishDrag(!0),this.suppressClick=!1;let a=e.getBoundingClientRect(),o=e.ownerDocument,s=t.pointerType===`touch`,l=()=>this.finishDrag(!0),u=()=>{o.hidden&&this.finishDrag(!0)},p=z=>{z.touches.length!==1?this.finishDrag(!0):this.drag?.armed&&z.cancelable&&z.preventDefault()},f=z=>{z.touches.length>1&&this.finishDrag(!0)},y=z=>{this.drag?.armed&&z.preventDefault()},E=s?o.defaultView?.setTimeout(()=>{this.drag?.pointerId===t.pointerId&&(this.drag.armed=!0,this.moveSelection([r.left,r.top,r.width,r.height,1]))},Je.holdDelay):void 0;s&&(o.addEventListener(`touchmove`,p,{passive:!1}),o.addEventListener(`touchstart`,f,{passive:!0}),e.addEventListener(`contextmenu`,y)),o.defaultView?.addEventListener(`blur`,l),o.addEventListener(`visibilitychange`,u),this.drag={pointerId:t.pointerId,origin:e,startX:t.clientX,startY:t.clientY,grabOffset:t.clientX-a.left-a.width/2,committedValue:this.selectedValue(),moved:!1,armed:!s,lastX:t.clientX,lastY:t.clientY,lastTime:t.timeStamp,velocity:new Ah(t.clientX,t.timeStamp),candidate:r,geometry:n,cleanup:()=>{o.defaultView?.clearTimeout(E),o.removeEventListener(`touchmove`,p),o.removeEventListener(`touchstart`,f),e.removeEventListener(`contextmenu`,y),o.defaultView?.removeEventListener(`blur`,l),o.removeEventListener(`visibilitychange`,u)}},e.setPointerCapture(t.pointerId),s||this.moveSelection([r.left,r.top,r.width,r.height,1])}onPointerMove(t){let e=this.drag,n=this.tabList()?.nativeElement,r=this.tabViewport()?.nativeElement;if(!e||t.pointerId!==e.pointerId||!n||!r)return;let a=Math.abs(t.clientX-e.startX),o=Math.abs(t.clientY-e.startY);if(!e.moved&&(o>a&&o>Je.threshold||!e.armed&&Math.max(a,o)>Je.threshold)){this.finishDrag(!0);return}!e.armed||!e.moved&&a<Je.threshold||(e.moved||(e.moved=!0,this.dragging.set(!0)),t.preventDefault(),this.sampleDrag(t),this.previewDrag(),this.updateDragScroll())}onPointerEnd(t,e){let n=this.drag;if(!n||n.pointerId!==t.pointerId)return;let r=this.tabViewport()?.nativeElement.getBoundingClientRect(),a=r?t.clientY<r.top-Je.releaseSlop||t.clientY>r.bottom+Je.releaseSlop:!0;!e&&!a&&n.moved&&(this.sampleDrag(t),this.previewDrag(),this.previewDrag(!0)),this.finishDrag(e||a)}onDragKey(t){t.key!==`Escape`||!this.drag||(t.preventDefault(),t.stopPropagation(),this.finishDrag(!0))}sampleDrag(t){let e=this.drag;e&&(e.velocity.update(t.clientX,t.timeStamp),e.lastTime=t.timeStamp,e.lastX=t.clientX,e.lastY=t.clientY)}previewDrag(t=!1){let e=this.drag,n=this.tabList()?.nativeElement;if(!e||!n)return;let r=e.geometry,a=r[0],o=r[r.length-1],s=e.lastX-n.getBoundingClientRect().left-e.grabOffset,l=Math.max(a.left+a.width/2,Math.min(o.left+o.width/2,s)),u=r.findIndex(Se=>Se.left+Se.width/2>=l),p=r[Math.max(0,u)],f=r[Math.max(0,u-1)],y=p.left+p.width/2-f.left-f.width/2,E=Math.max(0,Math.min(1,(l-f.left-f.width/2)/(y||1))),z=f.width+(p.width-f.width)*E,F=f.height+(p.height-f.height)*E,X=Math.max(f.width,p.width,y),A=e.velocity.velocity(e.lastTime),ae=l<=a.left+a.width/2&&A<0||l>=o.left+o.width/2&&A>0?0:A,xe=t?AR(l,ae,X):l;if(e.candidate=r.reduce((Se,bt)=>Math.abs(bt.left+bt.width/2-xe)<Math.abs(Se.left+Se.width/2-xe)?bt:Se),!t){let Se=y?(p.width-f.width)*ae/y:0;this.moveSelection([l-z/2,f.top+(p.top-f.top)*E,z,F,1],[ae-Se/2,0,Se,0,0])}}updateDragScroll(){this.stopDragScroll||!this.drag?.moved||(this.stopDragScroll=$r$1((t,e)=>{let n=this.drag,r=this.tabViewport()?.nativeElement;if(!n||!r)return!1;let a=r.getBoundingClientRect(),o=n.lastY>=a.top-Je.releaseSlop&&n.lastY<=a.bottom+Je.releaseSlop,s=Math.min(Je.edgeSize,a.width/3),l=o?Math.max(-1,Math.min(1,(n.lastX-a.left-s)/s)):0,u=l<0?l:o?Math.max(0,Math.min(1,(n.lastX-a.right+s)/s)):0,p=r.scrollLeft;return r.scrollBy({left:u*Je.scrollSpeed*t,behavior:`instant`}),!u||r.scrollLeft===p?(this.stopDragScroll=void 0,!1):(n.lastTime=e,this.previewDrag(),!0)}))}geometryChanged(){let t=this.drag?.geometry,e=this.measureTabs();return!t||t.length!==e.length||e.some((n,r)=>{let a=t[r];return n.element!==a.element||n.value!==a.value||n.left!==a.left||n.top!==a.top||n.width!==a.width||n.height!==a.height})}measureTabs(){let t=this.tabs();return this.triggers().flatMap(({nativeElement:e})=>{let n=t.find(r=>r.triggerId===e.id);return!n||e.disabled?[]:[{element:e,value:n.value(),left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}]}).sort((e,n)=>e.left-n.left)}positionSelection(){if(this.drag)return;let t=this.selection()?.nativeElement,e=this.activeTab(),n=this.triggers().find(r=>r.nativeElement.id===e?.triggerId)?.nativeElement;if(t){if(!n||!n.offsetWidth||!n.offsetHeight){t.style.visibility=`hidden`,this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.selectionReady=!1,this.selectionVisible.set(!1);return}this.moveSelection([n.offsetLeft,n.offsetTop,n.offsetWidth,n.offsetHeight,0]),t.style.visibility=`visible`,this.selectionReady=!0,this.selectionVisible.set(!0)}}moveSelection(t,e){let n=this.selection()?.nativeElement;n&&(this.selectionMotion??=Zn(t,([r,a,o,s,l],[u])=>{let p=this.bxA11yService.isReducedMotion(),f=p?0:Math.min(.065,Math.abs(u)/18e3),y=p?0:Math.max(-.15,Math.min(1.1,l));Kn(n,{transform:`translate3d(${r}px, ${a}px, 0) scale(${1+f+y*.018}, ${1-f/3-y*.045})`,width:`${Math.max(1,o)}px`,height:`${Math.max(1,s)}px`},!0)},vr.fluid),e&&!this.bxA11yService.isReducedMotion()?this.selectionMotion.track(t,e):this.selectionMotion.retarget(t,this.bxA11yService.isReducedMotion()||!this.selectionReady))}finishDrag(t){let e=this.drag;e&&(this.drag=null,this.stopDragScroll?.(),this.stopDragScroll=void 0,this.dragging.set(!1),e.cleanup(),e.origin.hasPointerCapture(e.pointerId)&&e.origin.releasePointerCapture(e.pointerId),this.suppressClick=e.moved,e.moved&&!t&&this.tabs().some(n=>n.value()===e.candidate.value&&!n.disabled())&&(this.select(e.candidate.value),e.candidate.element.focus({preventScroll:!0}),e.candidate.element.scrollIntoView({block:`nearest`,inline:`nearest`})),this.positionSelection())}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-tabs`]],contentQueries:function(e,n,r){e&1&&ud$1(r,n.tabs,An,4),e&2&&fb()},viewQuery:function(e,n){e&1&&Yy(n.tabList,Cc,5)(n.tabViewport,_c,5)(n.selection,wc,5)(n.triggers,Nc,5),e&2&&fb(4)},hostVars:10,hostBindings:function(e,n){e&2&&tr$1(`bx-tabs-underline`,n.variant()===`underline`)(`bx-tabs-has-selection`,n.selectionVisible())(`bx-tabs-draggable`,n.dragSelection())(`bx-tabs-dragging`,n.dragging())(`bx-tabs-animated`,n.hasRendered()&&!n.bxA11yService.isReducedMotion())},inputs:{variant:[1,`variant`],ariaLabel:[1,`ariaLabel`],dragSelection:[1,`dragSelection`],selectedValue:[1,`selectedValue`]},outputs:{selectedValue:`selectedValueChange`},ngContentSelectors:Tc,decls:14,vars:5,consts:[[`tabViewport`,``],[`tabList`,``],[`selection`,``],[`trigger`,``],[`bxSurface`,``,`data-bx-surface`,`glass`,`role`,`tablist`,`aria-orientation`,`horizontal`,1,`bx-tab-header`],[1,`bx-tab-viewport`],[1,`bx-tab-list`],[`aria-hidden`,`true`,1,`bx-tab-selection-layer`],[`bxSurface`,``,`data-bx-surface`,`glass`,`aria-hidden`,`true`,1,`bx-tab-selection`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`bxSurface`,``,`data-bx-surface`,`glass`,`type`,`button`,`role`,`tab`,1,`bx-tab-trigger`,3,`bxSurfaceEmission`,`bxSurfaceEmissionStrength`,`--%NS%bx-tab-highlight`,`--%NS%bx-tab-text`,`--%NS%bx-tab-selected-text`,`id`,`disabled`,`is-selected`],[1,`bx-tab-panels`],[`role`,`tabpanel`,`tabindex`,`0`,1,`bx-tab-panel`,3,`id`,`color`,`hidden`],[`bxSurface`,``,`data-bx-surface`,`glass`,`type`,`button`,`role`,`tab`,1,`bx-tab-trigger`,3,`pointerdown`,`pointermove`,`pointerup`,`pointercancel`,`lostpointercapture`,`click`,`keydown`,`bxSurfaceEmission`,`bxSurfaceEmissionStrength`,`id`,`disabled`],[`size`,`16`,3,`name`,`contentTemplate`],[`role`,`tabpanel`,`tabindex`,`0`,1,`bx-tab-panel`,3,`id`,`hidden`],[3,`ngTemplateOutlet`]],template:function(e,n){e&1&&(ld$1(Mc),dd$1(0),bo(1,`div`,4)(2,`div`,5,0)(4,`div`,6,1)(6,`div`,7),sd$1(7,`span`,8,2),Go$1(),ab(9,Rc,6,18,`button`,9,TT),Go$1()()(),bo(11,`div`,10),ab(12,Pc,2,6,`div`,11,TT),Go$1()),e&2&&(Xl$1(),vo(`aria-label`,n.resolvedLabel()),Xl$1(6),ka(`--%NS%bx-tab-highlight`,n.activeTab()?.resolvedHighlight()),xo(`bxSurfaceInteractive`,!1)(`bxSurfaceEmission`,!1),Xl$1(2),cb(n.tabs()),Xl$1(3),cb(n.tabs()))},dependencies:[Ta,GC,ZC],styles:[`
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  gap: var(--%NS%bx-tabs-panel-gap, var(--%NS%bx-space-6, 1.5rem));
}
.bx-tab-header[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface-alt);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-min-opacity: 0;
  --%NS%bx-glass-opacity: calc(0.1 + 0.25 * var(--%NS%bx-glass-material-strength, 0.1469));
  --%NS%bx-glass-radius: var(--%NS%bx-tabs-radius, var(--%NS%bx-rounded-md, 0.5rem));
  --%NS%bx-tabs-inner-radius: max(0px, var(--%NS%bx-glass-radius) - (calc(var(--%NS%bx-tabs-header-padding, var(--%NS%bx-space-1, 0.25rem)) + var(--%NS%bx-border-width, 1px) + 1px)));
  display: flex;
  align-self: flex-start;
  flex: none;
  box-sizing: border-box;
  width: fit-content;
  max-width: 100%;
  padding: var(--%NS%bx-tabs-header-padding, var(--%NS%bx-space-1, 0.25rem));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-glass-radius);
}
.bx-tab-viewport[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  overflow: auto hidden;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
}
.bx-tab-list[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  display: flex;
  box-sizing: border-box;
  gap: var(--%NS%bx-space-1, 0.25rem);
  width: max-content;
  min-width: 100%;
  padding: 1px;
}
.bx-tab-selection-layer[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  overflow: clip;
  pointer-events: none;
}
.bx-tab-selection[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: color-mix(in srgb, var(--%NS%bx-tab-highlight, var(--%NS%bx-primary)) 35%, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-tab-highlight, var(--%NS%bx-primary)) 35%, transparent);
  --%NS%bx-glass-min-opacity: 0;
  --%NS%bx-glass-opacity: 0.45;
  --%NS%bx-glass-decoration-opacity: 0.5;
  --%NS%bx-glass-rim-visibility: 0.65;
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  --%NS%bx-glass-radius: var(--%NS%bx-tabs-item-radius, var(--%NS%bx-tabs-inner-radius));
  position: absolute;
  inset: 0 auto auto 0;
  box-sizing: border-box;
  visibility: hidden;
  pointer-events: none;
  transform-origin: center;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
}
.bx-tabs-draggable[_nghost-%COMP%]   .bx-tab-trigger[_ngcontent-%COMP%]:not(:disabled) {
  -webkit-user-select: none;
  user-select: none;
}
.bx-tabs-dragging[_nghost-%COMP%]   .bx-tab-trigger[_ngcontent-%COMP%]:not(:disabled) {
  cursor: grabbing;
}
.bx-tab-trigger[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
  --%NS%bx-glass-opaque-surface: transparent;
  --%NS%bx-glass-text: var(--%NS%bx-tab-text, var(--%NS%bx-text-secondary));
  --%NS%bx-glass-edge: transparent;
  --%NS%bx-glass-radius: var(--%NS%bx-tabs-item-radius, var(--%NS%bx-tabs-inner-radius));
  --%NS%bx-glass-min-opacity: 0;
  --%NS%bx-glass-opacity: 0;
  --%NS%bx-glass-decoration-opacity: 0;
  --%NS%bx-glass-rim-visibility: 0;
  --%NS%bx-glass-shadow: none;
  display: inline-flex;
  position: relative;
  z-index: 1;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex: none;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) transparent;
  border-radius: var(--%NS%bx-glass-radius);
  font: inherit;
  font-size: 0.875rem;
  white-space: nowrap;
  cursor: pointer;
}
.bx-tab-trigger[_ngcontent-%COMP%]:hover:not(:disabled, .is-selected) {
  --%NS%bx-glass-opaque-surface: var(--%NS%bx-bg-element-hover);
  --%NS%bx-glass-text: var(--%NS%bx-tab-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-opacity: 0.15;
}
.bx-tab-trigger.is-selected[_ngcontent-%COMP%] {
  --%NS%bx-glass-text: var(--%NS%bx-tab-selected-text, var(--%NS%bx-text-brand));
}
.bx-tab-trigger[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.bx-tab-trigger[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-tab-highlight, var(--%NS%bx-border-brand));
  outline-offset: -2px;
}
.bx-tab-panels[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  max-height: var(--%NS%bx-tabs-max-panel-height, none);
  overflow: var(--%NS%bx-tabs-panel-overflow, visible);
}
[_nghost-%COMP%]:not(.bx-tabs-has-selection)   .bx-tab-trigger.is-selected[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: color-mix(in srgb, var(--%NS%bx-tab-highlight, var(--%NS%bx-primary)) 35%, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-opaque-surface: var(--%NS%bx-glass-surface);
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-tab-highlight, var(--%NS%bx-primary)) 35%, transparent);
  --%NS%bx-glass-min-opacity: 0;
  --%NS%bx-glass-opacity: 0.45;
  --%NS%bx-glass-decoration-opacity: 0.5;
  --%NS%bx-glass-rim-visibility: 0.65;
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
}
.bx-tab-panel[_ngcontent-%COMP%] {
  min-width: 0;
}
.bx-tab-panel[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-tabs-animated[_nghost-%COMP%]   .bx-tab-trigger[_ngcontent-%COMP%] {
  transition:
    background-color 0.1s ease-in-out,
    color 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
}
.bx-tabs-underline[_nghost-%COMP%] {
  gap: var(--%NS%bx-tabs-panel-gap, 0);
}
.bx-tabs-underline[_nghost-%COMP%]   .bx-tab-header[_ngcontent-%COMP%] {
  align-self: stretch;
  width: auto;
  padding: 0;
  border: 0;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-tabs-edge-radius, inherit);
  overflow: clip;
}
.bx-tabs-underline[_nghost-%COMP%]   .bx-tab-list[_ngcontent-%COMP%] {
  gap: 0;
  border-radius: inherit;
}
.bx-tabs-underline[_nghost-%COMP%]   .bx-tab-trigger[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-4, 1rem);
  border-inline-end: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  border-radius: 0;
  font-size: 0.8rem;
}
.bx-tabs-underline[_nghost-%COMP%]   .bx-tab-trigger[_ngcontent-%COMP%]:first-child {
  border-start-start-radius: var(--%NS%bx-tabs-edge-radius, inherit);
  border-end-start-radius: var(--%NS%bx-tabs-edge-radius, inherit);
}
.bx-tabs-underline[_nghost-%COMP%]   .bx-tab-trigger[_ngcontent-%COMP%]:last-child {
  border-start-end-radius: var(--%NS%bx-tabs-edge-radius, inherit);
  border-end-end-radius: var(--%NS%bx-tabs-edge-radius, inherit);
}
.bx-tabs-underline[_nghost-%COMP%]   .bx-tab-selection[_ngcontent-%COMP%] {
  --%NS%bx-glass-radius: 0;
  --%NS%bx-glass-shadow: inset 0 -2px 0 var(--%NS%bx-tab-highlight, var(--%NS%bx-border-brand));
  border-radius: 0;
}
@media (forced-colors: active) {
  .bx-tab-selection[_ngcontent-%COMP%] {
    display: none;
  }
  .bx-tab-trigger.is-selected[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
    outline-offset: -2px;
  }
}`]})};var Oc=[`*`];var Xi=class i{i18n=b(VQ,{optional:!0});resolvedLabel=G(()=>LQ(this.label(),this.i18n));label=ee(`Loading`);size=ee(20);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-loading-indicator`]],hostAttrs:[`role`,`status`,`aria-live`,`polite`,`aria-busy`,`true`],inputs:{label:[1,`label`],size:[1,`size`]},ngContentSelectors:Oc,decls:4,vars:3,consts:[[3,`size`,`decorative`]],template:function(e,n){e&1&&(ld$1(),sd$1(0,`bx-loading-spinner`,0),bo(1,`span`),lA(2),Go$1(),dd$1(3)),e&2&&(xo(`size`,n.size())(`decorative`,!0),Xl$1(2),ik(n.resolvedLabel()))},dependencies:[Et],styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--%NS%bx-loading-gap, var(--%NS%bx-space-2, 0.5rem));
  color: var(--%NS%bx-loading-color, var(--%NS%bx-text-secondary));
  font: inherit;
  overflow-wrap: anywhere;
}`]})};function kc(i,t){if(i&1&&lb(0,`span`,2),i&2){let e=Wo$1();ka(`width`,e.buffer(),`%`)}}var Bs=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);resolvedLabel=G(()=>LQ(this.label(),this.i18n));progress=G(()=>Number.isFinite(this.value())?Math.min(100,Math.max(0,this.value())):0);buffer=G(()=>Math.max(this.progress(),Number.isFinite(this.bufferValue())?Math.min(100,Math.max(0,this.bufferValue())):0));indeterminate=G(()=>this.mode()===`indeterminate`||this.mode()===`query`);mode=ee(`determinate`);value=ee(0);bufferValue=ee(100);label=ee(`Progress`);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`],hostVars:8,hostBindings:function(e,n){e&2&&(vo(`aria-valuenow`,n.indeterminate()?null:n.progress())(`aria-label`,n.resolvedLabel()),tr$1(`is-indeterminate`,n.indeterminate())(`is-reduced-motion`,n.bxA11yService.isReducedMotion())(`is-query`,n.mode()===`query`))},inputs:{mode:[1,`mode`],value:[1,`value`],bufferValue:[1,`bufferValue`],label:[1,`label`]},decls:2,vars:3,consts:[[1,`bx-progress-buffer`,3,`width`],[1,`bx-progress-value`],[1,`bx-progress-buffer`]],template:function(e,n){e&1&&(od$1(0,kc,1,2,`span`,0),lb(1,`span`,1)),e&2&&(nd$1(n.mode()===`buffer`?0:-1),Xl$1(),ka(`width`,n.indeterminate()?40:n.progress(),`%`))},styles:[`
[_nghost-%COMP%] {
  display: block;
  position: relative;
  inline-size: 100%;
  block-size: var(--%NS%bx-progress-height, 4px);
  overflow: hidden;
  border-radius: var(--%NS%bx-progress-radius, var(--%NS%bx-rounded-pill, 9999px));
  background: var(--%NS%bx-progress-track, var(--%NS%bx-bg-element));
}
.bx-progress-value[_ngcontent-%COMP%], 
.bx-progress-buffer[_ngcontent-%COMP%] {
  display: block;
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  background: var(--%NS%bx-progress-color, var(--%NS%bx-accent));
}
.bx-progress-buffer[_ngcontent-%COMP%] {
  opacity: 0.3;
}
.is-indeterminate[_nghost-%COMP%]   .bx-progress-value[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bx-progress-travel 1.3s ease-in-out infinite;
}
.is-query[_nghost-%COMP%] {
  transform: scaleX(-1);
}
[_nghost-%COMP%]:dir(rtl)   .bx-progress-value[_ngcontent-%COMP%] {
  animation-direction: reverse;
}
.is-reduced-motion[_nghost-%COMP%]   .bx-progress-value[_ngcontent-%COMP%] {
  animation: none;
}
@media (forced-colors: active) {
  [_nghost-%COMP%] {
    background: Canvas;
    outline: 1px solid CanvasText;
  }
  .bx-progress-value[_ngcontent-%COMP%], 
   .bx-progress-buffer[_ngcontent-%COMP%] {
    background: Highlight;
  }
}
@keyframes _ngcontent-%COMP%_bx-progress-travel {
  from {
    inset-inline-start: -40%;
  }
  to {
    inset-inline-start: 100%;
  }
}`]})};var Hs=class i{elementRef=b(ke);overlay=b(Ld$1);bxOverlayPositionService=b(_w);overlayContext=b(Ae,{optional:!0});scrollLockService=b(Nw);bxA11yService=b(Br$1);ngZone=b(le);viewContainerRef=b(fr);isBrowser=bt(b(Ge));scrollLockId=qK();_isOpen=$(!1);_state=$(`closed`);overlayId=$(null);isOpen=this._isOpen.asReadonly();state=this._state.asReadonly();bxDropdown=ee.required();placement=ee(`bottom`);bxTransition=ee(`fade`);overlayRef=null;transition=null;subscriptions=new Ae$1;revision=0;disconnectTheme;disconnectLighting;constructor(){b(ge).onDestroy(()=>{++this.revision,this.dispose()}),We(()=>{this.bxA11yService.isReducedMotion()&&this.transition&&(++this.revision,this.transition.destroy(),this.transition=null,this.isOpen()?this._state.set(`open`):this.dispose())})}toggle(t){this.isDisabled()||(t?.stopPropagation(),this.isOpen()?this.close():this.open())}onTriggerKeydown(t){if(this.bxTransition()===`none`||this.isDisabled()||this.isEditing(t.target)||t.key!==`ArrowDown`&&t.key!==`ArrowUp`)return;t.preventDefault(),t.stopPropagation(),this.open();let e=this.menuItems();(t.key===`ArrowUp`?e[e.length-1]:e[0])?.focus({preventScroll:!0})}open(){if(!this.isBrowser||this.isOpen()||this.isDisabled())return;let t=++this.revision;this._isOpen.set(!0),this._state.set(`opening`),this.overlayRef||this.attachOverlay();let e=this.overlayRef;if(e)if(e.overlayElement.inert=!1,e.overlayElement.style.removeProperty(`pointer-events`),this.bxTransition()!==`none`&&!this.bxA11yService.isReducedMotion()){let n=this.transition??=this.ngZone.runOutsideAngular(()=>MR(this.elementRef.nativeElement,e.overlayElement));this.ngZone.runOutsideAngular(()=>n.enter()).then(()=>{t===this.revision&&this.isOpen()&&this.ngZone.run(()=>this._state.set(`open`))}).catch(()=>{t===this.revision&&this.isOpen()&&(this.transition?.destroy(),this.transition=null,this._state.set(`open`))})}else this._state.set(`open`)}close(t=!1){if(!this.overlayRef||!this.isOpen())return;let e=++this.revision,n=this.overlayRef;this._isOpen.set(!1),this._state.set(`closing`),this.scrollLockService.enableScroll(this.scrollLockId);let r=this.elementRef.nativeElement;(t||n.overlayElement.contains(r.ownerDocument.activeElement))&&r.focus({preventScroll:!0}),n.overlayElement.inert=!0,n.overlayElement.style.pointerEvents=`none`;let a=this.transition;a&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>a.exit()).then(()=>{e===this.revision&&!this.isOpen()&&this.ngZone.run(()=>this.dispose())}).catch(()=>{e===this.revision&&!this.isOpen()&&this.dispose()}):this.dispose()}onDocumentClick(t){if(!this.overlayRef?.hasAttached()||!this.isOpen())return;let e=t.target;if(!e||this.elementRef.nativeElement.contains(e))return;(!kN(this.overlayRef.overlayElement,e)||this.bxTransition()===`none`||e instanceof Element&&e.closest(`button, a, [role="menuitem"]`))&&this.close()}attachOverlay(){let t=this.bxOverlayPositionService.getElementStrategy(this.elementRef.nativeElement,this.placement(),4),e=this.overlay.create({positionStrategy:t,scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.overlayContext?.useTopLayer||!!this.elementRef.nativeElement.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`),hasBackdrop:this.bxTransition()===`none`,backdropClass:`cdk-overlay-transparent-backdrop`});this.overlayRef=e,this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0}),this.overlayId.set(e.overlayElement.id||null),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(this.elementRef.nativeElement,e.overlayElement)),this.disconnectLighting=DR(e.overlayElement,this.elementRef.nativeElement),this.subscriptions=new Ae$1,this.subscriptions.add(this.ngZone.runOutsideAngular(()=>RK(e,this.elementRef.nativeElement))),this.subscriptions.add(e.backdropClick().subscribe(()=>this.close())),this.subscriptions.add(e.outsidePointerEvents().subscribe(r=>{r.type===`auxclick`&&r.button===2||!kN(this.elementRef.nativeElement,r.target)&&!kN(e.overlayElement,r.target)&&this.close()})),this.subscriptions.add(e.keydownEvents().subscribe(r=>{r.key===`Escape`&&this.isOpen()?(r.preventDefault(),r.stopPropagation(),this.close(!0)):!r.defaultPrevented&&this.bxTransition()!==`none`&&this.isOpen()&&this.navigateMenu(r)})),this.subscriptions.add(t.positionChanges.subscribe(()=>{this.ngZone.runOutsideAngular(()=>this.transition?.refresh())})),e.attach(new ja(this.bxDropdown(),this.viewContainerRef)).detectChanges(),e.updatePosition()}isDisabled(){let t=this.elementRef.nativeElement;return t.hasAttribute(`disabled`)||t.getAttribute(`aria-disabled`)===`true`}menuItems(){let t=this.overlayRef?.overlayElement;return t?Array.from(t.querySelectorAll(`button, a[href], [role="menuitem"]`)).filter(e=>{if(e.matches(`:disabled, [disabled], [aria-disabled="true"]`)||e.closest(`[aria-disabled="true"]`)||e.closest(`[hidden], [inert], [aria-hidden="true"]`)||e.tabIndex<0&&!e.hasAttribute(`tabindex`))return!1;let n=e.ownerDocument.defaultView?.getComputedStyle(e);return!!n&&n.display!==`none`&&n.visibility!==`hidden`&&e.getClientRects().length>0}):[]}navigateMenu(t){if(this.isEditing(t.target)||!(t.target instanceof Node)||!this.overlayRef?.overlayElement.contains(t.target)||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key))return;let e=this.menuItems();if(!e.length)return;let n=e.indexOf(this.elementRef.nativeElement.ownerDocument.activeElement),r;t.key===`Home`?r=0:t.key===`End`?r=e.length-1:t.key===`ArrowDown`?r=n<0?0:(n+1)%e.length:r=n<0?e.length-1:(n-1+e.length)%e.length,t.preventDefault(),t.stopPropagation(),e[r].focus({preventScroll:!0})}isEditing(t){return t instanceof Element&&!!t.closest(`input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]`)}dispose(){this.disconnectTheme?.(),this.disconnectTheme=void 0,this.transition?.destroy(),this.transition=null,this.subscriptions.unsubscribe(),this.overlayRef?.dispose(),this.overlayRef=null,this.scrollLockService.enableScroll(this.scrollLockId),this.disconnectLighting?.(),this.disconnectLighting=void 0,this.overlayId.set(null),this._isOpen.set(!1),this._state.set(`closed`)}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxDropdown`,``]],hostVars:3,hostBindings:function(e,n){e&1&&br(`click`,function(a){return n.toggle(a)})(`keydown`,function(a){return n.onTriggerKeydown(a)})(`click`,function(a){return n.onDocumentClick(a)},US),e&2&&vo(`aria-expanded`,n.isOpen())(`aria-haspopup`,`menu`)(`aria-controls`,n.overlayId())},inputs:{bxDropdown:[1,`bxDropdown`],placement:[1,`placement`],bxTransition:[1,`bxTransition`]},exportAs:[`bxDropdown`]})};var Bn=class i{elementRef=b(ke);static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxIconStart`,``],[``,`bxIconEnd`,``]],hostAttrs:[2,`display`,`inline-flex`,`align-items`,`center`,`flex`,`none`]})};var sn={primary:{text:`var(--bx-text-brand)`,fill:`var(--bx-primary)`,onFill:`var(--bx-on-primary)`,tonal:`var(--bx-primary-subtle)`,border:`var(--bx-border-brand)`},accent:{text:`var(--bx-text-accent)`,fill:`var(--bx-accent)`,onFill:`var(--bx-on-accent)`,tonal:`var(--bx-accent-subtle)`,border:`var(--bx-border-accent)`},neutral:{text:`var(--bx-text-primary)`,fill:`var(--bx-bg-element-active)`,onFill:`var(--bx-text-primary)`,tonal:`var(--bx-bg-element)`,border:`var(--bx-border-strong)`},success:{text:`var(--bx-text-success)`,readableText:`var(--bx-text-success-readable, var(--bx-text-success))`,fill:`var(--bx-bg-success)`,onFill:`var(--bx-on-success, var(--bx-text-success))`,tonal:`var(--bx-bg-success-subtle)`,border:`var(--bx-border-success)`},danger:{text:`var(--bx-text-danger)`,readableText:`var(--bx-text-danger-readable, var(--bx-text-danger))`,fill:`var(--bx-bg-danger)`,onFill:`var(--bx-on-danger, var(--bx-text-danger))`,tonal:`var(--bx-bg-danger-subtle)`,border:`var(--bx-border-danger)`},info:{text:`var(--bx-text-info)`,readableText:`var(--bx-text-info-readable, var(--bx-text-info))`,fill:`var(--bx-bg-info)`,onFill:`var(--bx-on-info, var(--bx-text-info))`,tonal:`var(--bx-bg-info-subtle)`,border:`var(--bx-border-info)`},warn:{text:`var(--bx-text-warn)`,readableText:`var(--bx-text-warn-readable, var(--bx-text-warn))`,fill:`var(--bx-bg-warn)`,onFill:`var(--bx-on-warn, var(--bx-text-warn))`,tonal:`var(--bx-bg-warn-subtle)`,border:`var(--bx-border-warn)`}};function pa(i,t){if(i==null)return``;if(typeof i==`string`)return i;if(!Number.isFinite(i))return``;try{return new Intl.NumberFormat(t).format(i)}catch{return String(i)}}var Lc=[[[``,`bxIconStart`,``]],[[``,`bxIconEnd`,``]]];var zc=[`[bxIconStart]`,`[bxIconEnd]`];function Ac(i,t){if(i&1&&sd$1(0,`bx-icon`,3),i&2){let e=Wo$1(2);xo(`name`,t)(`size`,e.resolvedIconSize())}}function Bc(i,t){if(i&1&&od$1(0,Ac,1,2,`bx-icon`,3),i&2){let e,n=Wo$1();nd$1((e=n.resolvedLeadingIcon())?0:-1,e)}}function Hc(i,t){if(i&1&&(bo(0,`span`,1),lA(1),Go$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedLeadingNumber())}}function Fc(i,t){if(i&1&&(bo(0,`span`,2),lA(1),Go$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedText())}}function jc(i,t){if(i&1&&(bo(0,`span`,1),lA(1),Go$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedTrailingNumber())}}function Vc(i,t){if(i&1&&sd$1(0,`bx-icon`,3),i&2){let e=Wo$1(2);xo(`name`,t)(`size`,e.resolvedIconSize())}}function Uc(i,t){if(i&1&&od$1(0,Vc,1,2,`bx-icon`,3),i&2){let e,n=Wo$1();nd$1((e=n.resolvedTrailingIcon())?0:-1,e)}}var Fs=class i{i18n=b(VQ,{optional:!0});iconContent=Lk(Bn);textOverflow=Sz(ct);resolvedText=G(()=>LQ(this.text(),this.i18n));resolvedTooltip=G(()=>{let t=this.tooltip()??this.config().tooltip;return t!==void 0?LQ(t,this.i18n):qi(this.resolvedText(),this.textOverflow()?.truncated()??!1,this.tooltipOnTruncate()??this.config().tooltipOnTruncate??!0)});resolvedAriaLabel=G(()=>LQ(this.ariaLabel(),this.i18n));resolvedVariant=G(()=>this.variant()??this.config().variant??`tonal`);resolvedSize=G(()=>this.size()??this.config().size??`medium`);resolvedLeadingIcon=G(()=>this.leadingIcon()??this.config().leadingIcon);resolvedTrailingIcon=G(()=>this.trailingIcon()??this.config().trailingIcon);resolvedIconSize=G(()=>this.iconSize()??this.config().iconSize??`16`);resolvedLeadingNumber=G(()=>(this.i18n?.version?.(),pa(this.leadingNumber()===void 0?this.config().leadingNumber:this.leadingNumber(),this.locale())));resolvedTrailingNumber=G(()=>(this.i18n?.version?.(),pa(this.trailingNumber()===void 0?this.config().trailingNumber:this.trailingNumber(),this.locale())));palette=G(()=>sn[this.color()??this.config().color??`accent`]);isNumberOnly=G(()=>!this.iconContent()&&!this.resolvedText()&&!this.resolvedLeadingIcon()&&!this.resolvedTrailingIcon()&&!!this.resolvedLeadingNumber()!=!!this.resolvedTrailingNumber());opaque=ee(void 0);text=ee(void 0);config=ee({});color=ee(void 0);variant=ee(void 0);size=ee(void 0);disabled=ee(!1,{transform:Ye});leadingIcon=ee(void 0);trailingIcon=ee(void 0);iconSize=ee(void 0);leadingNumber=ee(void 0);trailingNumber=ee(void 0);locale=ee(void 0);tooltip=ee(void 0);tooltipOnTruncate=ee(void 0);tooltipPlacement=ee(`top`);ariaLabel=ee(void 0);focusable=ee(!0);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-tag`]],contentQueries:function(e,n,r){e&1&&ud$1(r,n.iconContent,Bn,5),e&2&&fb()},viewQuery:function(e,n){e&1&&Yy(n.textOverflow,ct,5),e&2&&fb()},hostVars:10,hostBindings:function(e,n){e&2&&ka(`--%NS%bx-tag-role-text`,n.palette().readableText??n.palette().text)(`--%NS%bx-tag-role-fill`,n.palette().fill)(`--%NS%bx-tag-role-on-fill`,n.palette().onFill)(`--%NS%bx-tag-role-tonal`,n.palette().tonal)(`--%NS%bx-tag-role-border`,n.palette().border)},inputs:{opaque:[1,`opaque`],text:[1,`text`],config:[1,`config`],color:[1,`color`],variant:[1,`variant`],size:[1,`size`],disabled:[1,`disabled`],leadingIcon:[1,`leadingIcon`],trailingIcon:[1,`trailingIcon`],iconSize:[1,`iconSize`],leadingNumber:[1,`leadingNumber`],trailingNumber:[1,`trailingNumber`],locale:[1,`locale`],tooltip:[1,`tooltip`],tooltipOnTruncate:[1,`tooltipOnTruncate`],tooltipPlacement:[1,`tooltipPlacement`],ariaLabel:[1,`ariaLabel`],focusable:[1,`focusable`]},ngContentSelectors:zc,decls:8,vars:21,consts:[[`bxSurface`,``,`bxTooltipTouch`,`longpress`,1,`bx-tag`,3,`bxSurfaceInteractive`,`bxReducedTransparency`,`bxTooltip`,`placement`],[1,`bx-tag-number`],[`bxTruncate`,``,1,`bx-tag-text`],[3,`name`,`size`]],template:function(e,n){e&1&&(ld$1(Lc),bo(0,`span`,0),dd$1(1,0,null,Bc,1,1),od$1(3,Hc,2,1,`span`,1),od$1(4,Fc,2,1,`span`,2),od$1(5,jc,2,1,`span`,1),dd$1(6,1,null,Uc,1,1),Go$1()),e&2&&(tr$1(`is-filled`,n.resolvedVariant()===`filled`)(`is-outlined`,n.resolvedVariant()===`outlined`)(`is-small`,n.resolvedSize()===`small`)(`is-disabled`,n.disabled())(`is-number-only`,n.isNumberOnly()),xo(`bxSurfaceInteractive`,!1)(`bxReducedTransparency`,n.opaque()??n.config().opaque?!0:void 0)(`bxTooltip`,n.resolvedTooltip())(`placement`,n.tooltipPlacement()),vo(`aria-disabled`,n.disabled()?`true`:null)(`role`,n.resolvedAriaLabel()?`group`:null)(`aria-label`,n.resolvedAriaLabel()||null)(`tabindex`,n.resolvedTooltip()&&n.focusable()?0:null),Xl$1(3),nd$1(n.resolvedLeadingNumber()?3:-1),Xl$1(),nd$1(n.resolvedText()?4:-1),Xl$1(),nd$1(n.resolvedTrailingNumber()?5:-1))},dependencies:[ZC,Pt,ct,GC],styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  min-inline-size: 0;
  max-inline-size: 100%;
  vertical-align: middle;
}
.bx-tag[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-tag-background, var(--%NS%bx-tag-role-tonal));
  --%NS%bx-glass-text: var(--%NS%bx-tag-color, var(--%NS%bx-tag-role-text));
  --%NS%bx-glass-edge: var(--%NS%bx-tag-border, var(--%NS%bx-tag-role-border));
  --%NS%bx-glass-radius: var(--%NS%bx-tag-radius, var(--%NS%bx-rounded-sm, 0.25rem));
  --%NS%bx-glass-shadow: var(--%NS%bx-tag-shadow, none);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-inline-size: 0;
  max-inline-size: 100%;
  box-sizing: border-box;
  gap: var(--%NS%bx-tag-gap, var(--%NS%bx-space-1, 0.25rem));
  padding: var(--%NS%bx-tag-padding, var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
  background: var(--%NS%bx-glass-surface);
  color: var(--%NS%bx-glass-text);
  font: inherit;
  font-size: var(--%NS%bx-tag-font-size, 0.8125rem);
  line-height: 1.4;
  white-space: nowrap;
}
.bx-tag.is-filled[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-tag-background, var(--%NS%bx-tag-role-fill));
  --%NS%bx-glass-text: var(--%NS%bx-tag-color, var(--%NS%bx-tag-role-on-fill));
  --%NS%bx-glass-min-opacity: var(--%NS%bx-tag-fill-opacity, 0.85);
}
.bx-tag.is-outlined[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-tag-background, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-opacity: var(--%NS%bx-tag-outline-opacity, 0.12);
}
.bx-tag.is-small[_ngcontent-%COMP%] {
  font-size: var(--%NS%bx-tag-font-size, 0.75rem);
  padding-block: 0.125rem;
}
.bx-tag.is-disabled[_ngcontent-%COMP%] {
  opacity: var(--%NS%bx-tag-disabled-opacity, 0.5);
}
.bx-tag.is-number-only[_ngcontent-%COMP%] {
  --%NS%bx-glass-radius: 50%;
  inline-size: max-content;
  min-inline-size: var(--%NS%bx-tag-number-size, 1.875rem);
  aspect-ratio: 1;
  padding-block: 0;
  padding-inline: var(--%NS%bx-tag-number-padding, 0.35em);
}
.bx-tag.is-number-only.is-small[_ngcontent-%COMP%] {
  min-inline-size: var(--%NS%bx-tag-number-size, 1.5rem);
}
.bx-tag[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.bx-tag-number[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  min-inline-size: 1.1em;
  padding-inline: 0.25em;
  border-radius: var(--%NS%bx-tag-counter-radius, var(--%NS%bx-rounded-sm, 0.25rem));
  background: var(--%NS%bx-tag-counter-background, color-mix(in srgb, currentcolor 12%, transparent));
  font-variant-numeric: tabular-nums;
}
.is-number-only[_ngcontent-%COMP%]   .bx-tag-number[_ngcontent-%COMP%] {
  background: transparent;
  padding: 0;
}
@media (forced-colors: active) {
  .bx-tag.is-disabled[_ngcontent-%COMP%] {
    color: GrayText;
    border-color: GrayText;
    opacity: 1;
  }
}`]})};var Yi=new T(`BX_ACCORDION_COORDINATOR`);var $c=[`*`];function Wc(i,t){if(i&1&&$s$1(0,4),i&2){let e=Wo$1();xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.titleContext())}}function qc(i,t){if(i&1&&lA(0),i&2){let e=Wo$1();mb(` `,e.resolvedTitle(),` `)}}function Gc(i,t){if(i&1&&(bo(0,`span`,5),$s$1(1,4),Go$1()),i&2){let e=Wo$1();Xl$1(),xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.titleContext())}}function Kc(i,t){i&1&&$s$1(0,10),i&2&&xo(`ngTemplateOutlet`,t)}var Hn=class i{i18n=b(VQ,{optional:!0});coordinator=b(Yi,{optional:!0});nativeElement=b(ke).nativeElement;bxA11yService=b(Br$1);generatedId=`bx-collapsible-`+qK();hasRendered=$(!1);resolvedTitle=G(()=>LQ(this.title(),this.i18n));level=G(()=>Number.isFinite(this.headingLevel())?Math.max(1,Math.min(6,Math.floor(this.headingLevel()))):3);titleContext=G(()=>({$implicit:this.resolvedTitle(),expanded:this.expanded()}));isReadonly=G(()=>this.readonly()||this.readOnly());panelId=G(()=>(this.id()??this.generatedId)+`-panel`);triggerId=G(()=>(this.id()??this.generatedId)+`-trigger`);id=ee(void 0);title=ee.required();titleTemplate=ee();trailingTemplate=ee();expanded=_z(!1);disabled=ee(!1,{transform:Ye});readonly=ee(!1,{transform:Ye});readOnly=ee(!1,{transform:Ye});headingLevel=ee(3);contentTemplate=ee(void 0);region=ee(!1,{transform:Ye});constructor(){er$1(()=>this.hasRendered.set(!0)),We(()=>{if(this.expanded())return;this.nativeElement.querySelector(`.bx-collapsible-reveal`)?.contains(this.nativeElement.ownerDocument.activeElement)&&this.focus()})}toggle(){this.disabled()||this.isReadonly()||(this.expanded()||this.coordinator?.requestExpansion(this.panelId()),this.expanded.update(t=>!t))}focus(){this.nativeElement.querySelector(`[data-bx-collapsible-trigger]`)?.focus({preventScroll:!0})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-collapsible`],[`bx-accordion-item`]],inputs:{id:[1,`id`],title:[1,`title`],titleTemplate:[1,`titleTemplate`],trailingTemplate:[1,`trailingTemplate`],expanded:[1,`expanded`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],headingLevel:[1,`headingLevel`],contentTemplate:[1,`contentTemplate`],region:[1,`region`]},outputs:{expanded:`expandedChange`},ngContentSelectors:$c,decls:13,vars:21,consts:[[`bxSurface`,``,1,`bx-collapsible`,3,`bxSurfaceInteractive`],[`role`,`heading`],[`bxSurface`,``,`type`,`button`,`data-bx-collapsible-trigger`,``,1,`bx-collapsible-trigger`,3,`click`,`bxSurfaceEmission`,`id`,`disabled`],[1,`bx-collapsible-title`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-collapsible-trailing`],[`size`,`20`,3,`name`],[1,`bx-collapsible-reveal`,3,`id`],[1,`bx-collapsible-clip`],[1,`bx-collapsible-content`],[3,`ngTemplateOutlet`]],template:function(e,n){if(e&1&&(ld$1(),bo(0,`div`,0)(1,`div`,1)(2,`button`,2),br(`click`,function(){return n.toggle()}),bo(3,`span`,3),od$1(4,Wc,1,2,`ng-container`,4)(5,qc,1,1),Go$1(),od$1(6,Gc,2,2,`span`,5),sd$1(7,`bx-icon`,6),Go$1()(),bo(8,`div`,7)(9,`div`,8)(10,`div`,9),dd$1(11),od$1(12,Kc,1,1,`ng-container`,10),Go$1()()()()),e&2){let r,a,o;xo(`bxSurfaceInteractive`,!1),Xl$1(),vo(`aria-level`,n.level()),Xl$1(),xo(`bxSurfaceEmission`,!1)(`id`,n.triggerId())(`disabled`,n.disabled()),vo(`aria-disabled`,n.isReadonly()?`true`:null)(`aria-expanded`,n.expanded())(`aria-controls`,n.panelId()),Xl$1(2),nd$1((r=n.titleTemplate())?4:5,r),Xl$1(2),nd$1((a=n.trailingTemplate())?6:-1,a),Xl$1(),xo(`name`,n.expanded()?`chevron-up`:`chevron-down`),Xl$1(),tr$1(`is-expanded`,n.expanded())(`is-animated`,n.hasRendered()&&!n.bxA11yService.isReducedMotion()),xo(`id`,n.panelId()),vo(`aria-hidden`,!n.expanded())(`inert`,n.expanded()?null:``)(`role`,n.region()?`region`:null)(`aria-labelledby`,n.region()?n.triggerId():null),Xl$1(4),nd$1((o=n.expanded()&&n.contentTemplate())?12:-1,o)}},dependencies:[ZC,GC,Ta],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.bx-collapsible[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-collapsible-background, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-edge: var(--%NS%bx-collapsible-border, var(--%NS%bx-border-default));
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-radius: var(--%NS%bx-collapsible-radius, var(--%NS%bx-rounded-md, 0.5rem));
  --%NS%bx-glass-shadow: none;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
  background: var(--%NS%bx-glass-surface);
  color: var(--%NS%bx-glass-text);
}
.bx-collapsible-trigger[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: transparent;
  --%NS%bx-glass-edge: transparent;
  --%NS%bx-glass-opacity: 0;
  --%NS%bx-glass-decoration-opacity: 0;
  --%NS%bx-glass-rim-visibility: 0;
  --%NS%bx-glass-shadow: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--%NS%bx-space-3, 0.75rem);
  box-sizing: border-box;
  inline-size: 100%;
  min-block-size: var(--%NS%bx-space-12, 3rem);
  padding: var(--%NS%bx-collapsible-padding, var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-4, 1rem));
  border: 0;
  border-radius: max(0px, var(--%NS%bx-glass-radius) - (var(--%NS%bx-border-width, 1px)));
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 600;
  text-align: start;
  cursor: pointer;
}
.bx-collapsible-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.bx-collapsible-trigger[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
.bx-collapsible-trigger[_ngcontent-%COMP%]:hover:not(:disabled, [aria-disabled=true]) {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-element-hover);
  --%NS%bx-glass-opacity: 1;
  background: var(--%NS%bx-bg-element-hover);
}
.bx-collapsible-trigger[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.bx-collapsible-trigger[_ngcontent-%COMP%]:disabled {
  --%NS%bx-glass-text: var(--%NS%bx-text-disabled);
  color: var(--%NS%bx-text-disabled);
  opacity: var(--%NS%bx-disabled-opacity, 0.5);
  cursor: not-allowed;
}
.bx-collapsible-trigger[aria-disabled=true][_ngcontent-%COMP%] {
  cursor: default;
}
.bx-collapsible-trigger[aria-expanded=true][_ngcontent-%COMP%] {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}
.bx-collapsible-content[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-collapsible-content-padding, var(--%NS%bx-space-4, 1rem));
  overflow-wrap: anywhere;
}
.bx-collapsible-reveal[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: 0fr;
}
.bx-collapsible-reveal.is-expanded[_ngcontent-%COMP%] {
  grid-template-rows: 1fr;
}
.bx-collapsible-reveal.is-animated[_ngcontent-%COMP%] {
  transition: grid-template-rows var(--%NS%bx-collapsible-duration, 120ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}
.bx-collapsible-clip[_ngcontent-%COMP%] {
  min-block-size: 0;
  overflow: hidden;
}
.bx-collapsible-title[_ngcontent-%COMP%] {
  flex: 1 1 auto;
}
.bx-collapsible-trailing[_ngcontent-%COMP%] {
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--%NS%bx-space-2, 0.5rem);
}`]})};var Zc=[`*`];var js=class i{items=Mz(Hn);multiple=ee(!1,{transform:Ye});previousOpened=[];constructor(){We(()=>{let t=this.items().filter(n=>n.expanded());if(!this.multiple()&&t.length>1){let n=t.find(r=>!this.previousOpened.includes(r))??t[0];de(()=>t.filter(r=>r!==n).forEach(r=>r.expanded.set(!1))),this.previousOpened=[n]}else this.previousOpened=t})}requestExpansion(t){this.multiple()||this.items().filter(e=>e.panelId()!==t).forEach(e=>e.expanded.set(!1))}collapseAll(){this.items().forEach(t=>t.expanded.set(!1))}onKeydown(t){if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key))return;let e=this.items().filter(a=>!a.disabled()),n=e.findIndex(a=>a.triggerId()===t.target.id);if(n<0)return;let r=t.key===`Home`?0:t.key===`End`?e.length-1:(n+(t.key===`ArrowDown`?1:-1)+e.length)%e.length;t.preventDefault(),t.stopPropagation(),e[r].focus()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-accordion`]],contentQueries:function(e,n,r){e&1&&ud$1(r,n.items,Hn,4),e&2&&fb()},hostBindings:function(e,n){e&1&&br(`keydown`,function(a){return n.onKeydown(a)})},inputs:{multiple:[1,`multiple`]},features:[rr$1([{provide:Yi,useExisting:jt(()=>i)}])],ngContentSelectors:Zc,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},styles:[`
[_nghost-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-accordion-gap, var(--%NS%bx-space-2, 0.5rem));
  min-inline-size: 0;
}`]})};var Vs={default:`neutral`,info:`info`,danger:`danger`,warning:`warn`,success:`success`};var Us={default:`message-square`,info:`info`,danger:`circle-alert`,warning:`triangle-alert`,success:`circle-check`};var Xc=[`surface`];var Yc=[[[``,`bxIconStart`,``]],`*`,[[``,`bxAlertActions`,``]]];var Qc=[`[bxIconStart]`,`*`,`[bxAlertActions]`];function Jc(i,t){if(i&1&&sd$1(0,`bx-icon`,6),i&2){let e=Wo$1();xo(`name`,e.icon())}}function eu(i,t){if(i&1&&(bo(0,`div`,3),lA(1),Go$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedTitle())}}function tu(i,t){if(i&1&&(bo(0,`div`),lA(1),Go$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedMessage())}}function nu(i,t){if(i&1){let e=pb();bo(0,`button`,7),br(`click`,function(){al$1(e);let r=Wo$1();return cl$1(r.dismiss())}),sd$1(1,`bx-icon`,8),Go$1()}if(i&2){let e=Wo$1();vo(`aria-label`,e.resolvedDismissLabel())}}var $s=class i{i18n=b(VQ,{optional:!0});nativeElement=b(ke).nativeElement;injector=b(ie);destroyRef=b(ge);bxGlassLightingService=b(WC);rendered=$(!1);surface=Sz(`surface`);palette=G(()=>sn[Vs[this.tone()]]);icon=G(()=>Us[this.tone()]);resolvedTitle=G(()=>LQ(this.title(),this.i18n));resolvedMessage=G(()=>LQ(this.message(),this.i18n));resolvedDismissLabel=G(()=>LQ(this.dismissLabel(),this.i18n));tone=ee(`default`);title=ee(void 0);message=ee(void 0);dismissible=ee(!1,{transform:Ye});dismissLabel=ee(`Dismiss notification`);emissive=ee(!0,{transform:Ye});emissionColor=ee(void 0);emissionIntensity=ee(.6);emissionRadius=ee(320);visible=_z(!0);announcement=ee(`off`);dismissFocusTarget=ee(void 0);dismissed=Pk();light;constructor(){er$1(()=>this.rendered.set(!0)),We(()=>this.syncLight()),this.destroyRef.onDestroy(()=>this.light?.destroy())}dismiss(){if(!this.dismissible()||!this.visible())return;let t=this.dismissFocusTarget(),e=this.nativeElement.ownerDocument.activeElement,n=this.nativeElement.contains(e);this.visible.set(!1),this.dismissed.emit(),n&&t&&er$1(()=>{if(this.destroyRef.destroyed||this.visible())return;let r=this.nativeElement.ownerDocument,a=r.activeElement,o=typeof t==`string`?r.getElementById(t):t;o?.isConnected&&(a===r.body||a===e)&&o.focus({preventScroll:!0})},{injector:this.injector})}syncLight(){let t=this.surface()?.nativeElement;if(!this.rendered()||!t||!this.visible()||!this.emissive()){this.light?.destroy(),this.light=void 0;return}let e={element:t,edge:`bottom`,color:this.emissionColor()??this.palette().text,intensity:this.emissionIntensity(),radius:this.emissionRadius(),z:48,excludeSource:!0};this.light?this.light.update(e):this.light=this.bxGlassLightingService.register(IR(t),e)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-alert`],[`bx-banner`]],viewQuery:function(e,n){e&1&&Yy(n.surface,Xc,5),e&2&&fb()},hostVars:13,hostBindings:function(e,n){e&2&&(Uy(`hidden`,!n.visible()),ka(`display`,n.visible()?null:`none`)(`--%NS%bx-alert-role-background`,n.palette().fill)(`--%NS%bx-alert-role-color`,n.palette().text)(`--%NS%bx-alert-readable-color`,n.palette().readableText??n.palette().text)(`--%NS%bx-alert-role-border`,n.palette().border)(`--%NS%bx-alert-emission`,n.emissionColor()??n.palette().text))},inputs:{tone:[1,`tone`],title:[1,`title`],message:[1,`message`],dismissible:[1,`dismissible`],dismissLabel:[1,`dismissLabel`],emissive:[1,`emissive`],emissionColor:[1,`emissionColor`],emissionIntensity:[1,`emissionIntensity`],emissionRadius:[1,`emissionRadius`],visible:[1,`visible`],announcement:[1,`announcement`],dismissFocusTarget:[1,`dismissFocusTarget`]},outputs:{visible:`visibleChange`,dismissed:`dismissed`},ngContentSelectors:Qc,decls:12,vars:8,consts:[[`surface`,``],[`bxSurface`,``,1,`bx-alert`,3,`bxSurfaceInteractive`],[1,`bx-alert-content`],[1,`bx-alert-title`],[1,`bx-alert-actions`],[`type`,`button`,1,`bx-alert-dismiss`],[`size`,`20`,1,`bx-alert-icon`,3,`name`],[`type`,`button`,1,`bx-alert-dismiss`,3,`click`],[`name`,`x`,`size`,`20`]],template:function(e,n){e&1&&(ld$1(Yc),bo(0,`div`,1,0),dd$1(2,0,null,Jc,1,1),bo(4,`div`,2)(5,`div`),od$1(6,eu,2,1,`div`,3),od$1(7,tu,2,1,`div`),dd$1(8,1),Go$1(),bo(9,`div`,4),dd$1(10,2),Go$1()(),od$1(11,nu,2,1,`button`,5),Go$1()),e&2&&(tr$1(`has-emission`,n.emissive()),xo(`bxSurfaceInteractive`,!1),Xl$1(5),vo(`role`,n.announcement()===`off`?null:n.announcement()===`assertive`?`alert`:`status`)(`aria-atomic`,n.announcement()===`off`?null:`true`),Xl$1(),nd$1(n.resolvedTitle()?6:-1),Xl$1(),nd$1(n.resolvedMessage()?7:-1),Xl$1(4),nd$1(n.dismissible()?11:-1))},dependencies:[ZC,GC],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.bx-alert[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-alert-background, color-mix(in srgb, var(--%NS%bx-bg-surface) 92%, var(--%NS%bx-alert-role-background)));
  --%NS%bx-glass-edge: var(--%NS%bx-alert-border, color-mix(in srgb, var(--%NS%bx-alert-role-border) 44.8%, transparent));
  --%NS%bx-glass-text: var(--%NS%bx-alert-color, var(--%NS%bx-alert-role-color));
  --%NS%bx-glass-radius: var(--%NS%bx-alert-radius, var(--%NS%bx-rounded-lg, 0.75rem));
  --%NS%bx-glass-shadow: var(--%NS%bx-alert-shadow, var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)));
  --%NS%bx-glass-min-opacity: var(--%NS%bx-alert-min-opacity, 0.2);
  --%NS%bx-glass-decoration-opacity: var(--%NS%bx-alert-light-opacity, 0.32);
  --%NS%bx-glass-rim-visibility: var(--%NS%bx-alert-rim-opacity, 0.8);
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: var(--%NS%bx-alert-gap, var(--%NS%bx-space-3, 0.75rem));
  padding: var(--%NS%bx-alert-padding, var(--%NS%bx-space-4, 1rem));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
  background: var(--%NS%bx-glass-surface);
  color: var(--%NS%bx-glass-text);
  line-height: 1.5;
  overflow-wrap: anywhere;
}
.bx-alert.has-emission[_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: var(--%NS%bx-alert-shadow, var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)), 0 8px 24px -16px color-mix(in srgb, var(--%NS%bx-alert-emission) 44%, transparent));
}
.bx-alert.has-emission[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse at 50% 100%,
      color-mix(in srgb, var(--%NS%bx-alert-emission) 6.4%, transparent),
      transparent 70%);
}
.bx-alert-icon[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  margin-block-start: 0.125rem;
  color: var(--%NS%bx-alert-role-color);
}
.bx-alert-content[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-inline-size: 0;
}
.bx-alert-title[_ngcontent-%COMP%] {
  margin-block-end: var(--%NS%bx-space-1, 0.25rem);
  font-weight: 600;
}
.bx-alert-actions[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-3, 0.75rem);
}
.bx-alert-actions[_ngcontent-%COMP%]:empty {
  display: none;
}
.bx-alert-dismiss[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  min-inline-size: var(--%NS%bx-space-10, 2.5rem);
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
  margin-block: calc(-1 * var(--%NS%bx-space-2, 0.5rem));
  margin-inline-end: calc(-1 * var(--%NS%bx-space-2, 0.5rem));
  border: 0;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: inherit;
  cursor: pointer;
}
.bx-alert-dismiss[_ngcontent-%COMP%]:hover {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-alert-dismiss[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
@media (forced-colors: active), (prefers-contrast: more) {
  .bx-alert[_ngcontent-%COMP%] {
    --%NS%bx-glass-edge: var(--%NS%bx-alert-border, var(--%NS%bx-alert-role-border));
  }
  .bx-alert.has-emission[_ngcontent-%COMP%] {
    --%NS%bx-glass-shadow: none;
  }
  .bx-alert.has-emission[_ngcontent-%COMP%]::after {
    display: none;
  }
}
.bx-alert-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-alert-color, var(--%NS%bx-alert-readable-color, var(--%NS%bx-alert-role-color)));
}`]})};var Ws=`button, a[href], input, select, textarea, summary, label, [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="switch"], [role="menuitem"], [role="tab"], [role="combobox"], [role="textbox"], [role="slider"], [contenteditable]:not([contenteditable="false"])`;var iu=[[[``,`bxCardMedia`,``]],[[``,`bxCardHeader`,``]],`*`,[[``,`bxCardFooter`,``]]];var ru=[`[bxCardMedia]`,`[bxCardHeader]`,`*`,`[bxCardFooter]`];function au(i,t){if(i&1&&(id$1(0,`div`,2),lA(1),ad$1()),i&2){let e=Wo$1();vo(`aria-level`,e.level()),Xl$1(),mb(` `,e.resolvedTitle(),` `)}}function ou(i,t){if(i&1&&(id$1(0,`div`,3),lA(1),ad$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedSubtitle())}}var qs=class i{i18n=b(VQ,{optional:!0});nativeElement=b(ke).nativeElement;originalRole=this.nativeElement.getAttribute(`role`);originalTabIndex=this.nativeElement.getAttribute(`tabindex`);originalAriaLabel=this.nativeElement.getAttribute(`aria-label`);originalAriaLabelledBy=this.nativeElement.getAttribute(`aria-labelledby`);originalAriaDescribedBy=this.nativeElement.getAttribute(`aria-describedby`);nativeButton=this.nativeElement.tagName===`BUTTON`;keyboardPressed=$(!1);resolvedTitle=G(()=>LQ(this.title(),this.i18n));resolvedSubtitle=G(()=>LQ(this.subtitle(),this.i18n));level=G(()=>Number.isFinite(this.headingLevel())?Math.max(1,Math.min(6,Math.floor(this.headingLevel()))):3);resolvedAriaLabel=G(()=>LQ(this.ariaLabel(),this.i18n));resolvedHighlight=G(()=>{let t=this.highlightColor();return t?$h(t):null});isClickable=G(()=>this.clickable()||this.nativeButton);isReadonly=G(()=>this.readonly()||this.readOnly());title=ee(void 0);subtitle=ee(void 0);headingLevel=ee(3);variant=ee(`outlined`);opaque=ee(void 0);surfaceEffects=ee(!0,{transform:Ye});clickable=ee(!1,{transform:Ye});selected=ee();disabled=ee(!1,{transform:Ye});readonly=ee(!1,{transform:Ye});readOnly=ee(!1,{transform:Ye});highlightColor=ee();ariaLabel=ee();ariaLabelledBy=ee();ariaDescribedBy=ee();activated=Pk();selectedChange=Pk();constructor(){Yte(()=>({interactive:this.isClickable()&&!this.disabled()&&!this.isReadonly(),reducedTransparency:this.opaque(),emission:this.isClickable()?`var(--bx-card-highlight, var(--bx-primary))`:void 0}),()=>this.surfaceEffects()),We(()=>{(!this.isClickable()||this.disabled()||this.isReadonly())&&this.keyboardPressed.set(!1)})}activate(){!this.isClickable()||this.disabled()||this.isReadonly()||(this.selected()!==void 0&&this.selectedChange.emit(!this.selected()),this.activated.emit())}focus(t){this.isClickable()&&!this.disabled()&&this.nativeElement.focus?.(t)}onClick(t){if(!(!this.isClickable()||this.isNestedAction(t.target))){if(this.disabled()||this.isReadonly()){t.preventDefault(),t.stopImmediatePropagation();return}this.activate()}}onKeydown(t){if(!(t.target!==this.nativeElement||!this.isClickable()||![`Enter`,` `].includes(t.key)||t.altKey||t.ctrlKey||t.metaKey)){if(this.disabled()||this.isReadonly()){t.preventDefault();return}this.nativeButton||(t.key===` `&&t.preventDefault(),!t.repeat&&(this.keyboardPressed.set(!0),t.key===`Enter`&&this.activate()))}}onKeyup(t){if(t.target!==this.nativeElement||this.nativeButton||![`Enter`,` `].includes(t.key))return;let e=this.keyboardPressed();this.keyboardPressed.set(!1),t.key===` `&&e&&this.activate()}isNestedAction(t){let e=t?.closest?.(Ws);return!!e&&e!==this.nativeElement&&this.nativeElement.contains(e)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-card`],[`button`,`bx-card`,``]],hostVars:20,hostBindings:function(e,n){e&1&&br(`click`,function(a){return n.onClick(a)})(`keydown`,function(a){return n.onKeydown(a)})(`keyup`,function(a){return n.onKeyup(a)})(`blur`,function(){return n.keyboardPressed.set(!1)}),e&2&&(vo(`data-variant`,n.variant())(`data-clickable`,n.isClickable()?`true`:null)(`data-selected`,n.isClickable()&&n.selected()===!0?`true`:null)(`role`,n.isClickable()&&!n.nativeButton?`button`:n.originalRole)(`tabindex`,n.isClickable()?n.disabled()?-1:n.originalTabIndex??`0`:n.originalTabIndex)(`type`,n.nativeButton?`button`:null)(`disabled`,n.nativeButton&&n.disabled()?``:null)(`aria-disabled`,n.isClickable()?n.disabled()||n.isReadonly():null)(`aria-pressed`,n.isClickable()&&n.selected()!==void 0?n.selected():null)(`aria-label`,n.resolvedAriaLabel()||n.originalAriaLabel)(`aria-labelledby`,n.ariaLabelledBy()??n.originalAriaLabelledBy)(`aria-describedby`,n.ariaDescribedBy()??n.originalAriaDescribedBy),ka(`--%NS%bx-card-highlight`,n.resolvedHighlight()),tr$1(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-pressed`,n.keyboardPressed()&&!n.disabled()&&!n.isReadonly()))},inputs:{title:[1,`title`],subtitle:[1,`subtitle`],headingLevel:[1,`headingLevel`],variant:[1,`variant`],opaque:[1,`opaque`],surfaceEffects:[1,`surfaceEffects`],clickable:[1,`clickable`],selected:[1,`selected`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],highlightColor:[1,`highlightColor`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`]},outputs:{activated:`activated`,selectedChange:`selectedChange`},ngContentSelectors:ru,decls:10,vars:2,consts:[[1,`bx-card-media`],[1,`bx-card-header`],[`role`,`heading`,1,`bx-card-title`],[1,`bx-card-subtitle`],[1,`bx-card-content`],[1,`bx-card-footer`]],template:function(e,n){e&1&&(ld$1(iu),id$1(0,`div`,0),dd$1(1),ad$1(),id$1(2,`div`,1),od$1(3,au,2,2,`div`,2),od$1(4,ou,2,1,`div`,3),dd$1(5,1),ad$1(),id$1(6,`div`,4),dd$1(7,2),ad$1(),id$1(8,`div`,5),dd$1(9,3),ad$1()),e&2&&(Xl$1(3),nd$1(n.resolvedTitle()?3:-1),Xl$1(),nd$1(n.resolvedSubtitle()?4:-1))},styles:[`
[_nghost-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-card-background, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-edge: var(--%NS%bx-card-border, var(--%NS%bx-border-default));
  --%NS%bx-glass-text: var(--%NS%bx-card-color, var(--%NS%bx-text-primary));
  --%NS%bx-glass-radius: var(--%NS%bx-card-radius, var(--%NS%bx-rounded-lg, 0.75rem));
  --%NS%bx-glass-shadow: var(--%NS%bx-card-shadow, none);
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-inline-size: 0;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
  background: var(--%NS%bx-glass-surface);
  color: var(--%NS%bx-glass-text);
  box-shadow: var(--%NS%bx-glass-shadow);
  overflow-wrap: anywhere;
  font: inherit;
  text-align: start;
  appearance: none;
}
[data-variant=elevated][_nghost-%COMP%] {
  --%NS%bx-glass-shadow: var(--%NS%bx-card-shadow, var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12)));
}
[data-variant=filled][_nghost-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-card-background, var(--%NS%bx-bg-element));
}
[data-clickable=true][_nghost-%COMP%] {
  cursor: pointer;
  padding: 0;
}
[data-clickable=true][_nghost-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-card-focus-color, var(--%NS%bx-card-highlight, var(--%NS%bx-border-brand)));
  outline-offset: 2px;
}
[data-clickable=true][_nghost-%COMP%]:is(:active, .is-keyboard-pressed):not(.is-disabled, .is-readonly) {
  --%NS%bx-glass-surface: var(--%NS%bx-card-pressed-background, var(--%NS%bx-bg-element-active));
  --%NS%bx-glass-shadow: inset 0 2px 4px var(--%NS%bx-border-default);
}
@media (hover: hover) {
  [data-clickable=true][_nghost-%COMP%]:hover:not(.is-disabled, .is-readonly) {
    --%NS%bx-glass-surface: var(--%NS%bx-card-hover-background, var(--%NS%bx-bg-element-hover));
    --%NS%bx-glass-edge: var(--%NS%bx-border-strong);
  }
}
[data-selected=true][_nghost-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-card-selected-background, var(--%NS%bx-bg-element-active));
  --%NS%bx-glass-edge: var(--%NS%bx-card-selected-border, var(--%NS%bx-card-border, var(--%NS%bx-border-brand)));
}
.is-disabled[_nghost-%COMP%] {
  opacity: var(--%NS%bx-card-disabled-opacity, 0.6);
  cursor: not-allowed;
}
.is-readonly[_nghost-%COMP%]:not(.is-disabled) {
  cursor: default;
}
@media (forced-colors: active) {
  [data-selected=true][_nghost-%COMP%] {
    border-color: Highlight;
  }
  .is-disabled[_nghost-%COMP%] {
    color: GrayText;
    border-color: GrayText;
    opacity: 1;
  }
}
.bx-card-header[_ngcontent-%COMP%], 
.bx-card-content[_ngcontent-%COMP%], 
.bx-card-footer[_ngcontent-%COMP%] {
  min-inline-size: 0;
  padding: var(--%NS%bx-card-padding, var(--%NS%bx-space-4, 1rem));
}
.bx-card-header[_ngcontent-%COMP%]:empty, 
.bx-card-content[_ngcontent-%COMP%]:empty, 
.bx-card-footer[_ngcontent-%COMP%]:empty {
  display: none;
}
.bx-card-header[_ngcontent-%COMP%] {
  padding-block-end: 0;
}
.bx-card-title[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
  font-size: var(--%NS%bx-card-title-size, 1.125rem);
  font-weight: 600;
  line-height: 1.4;
}
.bx-card-subtitle[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-1, 0.25rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.bx-card-content[_ngcontent-%COMP%] {
  flex: 1 1 auto;
}
.bx-card-footer[_ngcontent-%COMP%] {
  border-block-start: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
}
.bx-card-media[_ngcontent-%COMP%] {
  min-inline-size: 0;
  overflow: hidden;
  border-start-start-radius: max(0px, var(--%NS%bx-glass-radius) - (var(--%NS%bx-border-width, 1px)));
  border-start-end-radius: max(0px, var(--%NS%bx-glass-radius) - (var(--%NS%bx-border-width, 1px)));
}
.bx-card-media[_ngcontent-%COMP%]:empty {
  display: none;
}`]})};var Gs=new T(`BX_CHIP_DEFAULTS`);var su=[[[``,`bxIconStart`,``]]];var lu=[`[bxIconStart]`];function du(i,t){i&1&&sd$1(0,`bx-icon`,2)}function cu(i,t){i&1&&sd$1(0,`bx-icon`,4),i&2&&xo(`name`,t)}function uu(i,t){if(i&1&&od$1(0,cu,1,1,`bx-icon`,4),i&2){let e,n=Wo$1(2);nd$1((e=n.settings().icon)?0:-1,e)}}function pu(i,t){i&1&&dd$1(0,0,null,uu,1,1)}function mu(i,t){if(i&1){let e=pb();bo(0,`button`,5),br(`click`,function(){al$1(e);let r=Wo$1();return cl$1(r.remove())}),sd$1(1,`bx-icon`,6),Go$1()}if(i&2){let e=Wo$1();xo(`disabled`,e.disabled()),vo(`aria-disabled`,e.isReadonly()?`true`:null)(`aria-label`,e.resolvedRemoveLabel())}}var Ks=class i{i18n=b(VQ,{optional:!0});defaults=b(Gs,{optional:!0});elementRef=b(ke);settings=G(()=>{let t=this.config();return{color:t.color??this.defaults?.color??`primary`,variant:t.variant??this.defaults?.variant??`tonal`,size:t.size??this.defaults?.size??`medium`,icon:t.icon??this.defaults?.icon,removeLabel:t.removeLabel??this.defaults?.removeLabel??`Remove {label}`}});palette=G(()=>sn[this.settings().color??`primary`]);resolvedLabel=G(()=>LQ(this.label(),this.i18n));resolvedRemoveLabel=G(()=>LQ(this.settings().removeLabel??`Remove {label}`,this.i18n,{label:this.resolvedLabel()}).replaceAll(`{label}`,this.resolvedLabel()));isReadonly=G(()=>this.readonly()||this.readOnly());label=ee.required();config=ee({});selected=_z(!1);selectable=ee(!0,{transform:Ye});deselectable=ee(!0,{transform:Ye});removable=ee(!1,{transform:Ye});disabled=ee(!1,{transform:Ye});readonly=ee(!1,{transform:Ye});readOnly=ee(!1,{transform:Ye});activated=Pk();removed=Pk();focus(t){this.elementRef.nativeElement.querySelector(`.bx-chip-action`)?.focus(t)}activate(){this.disabled()||this.isReadonly()||(this.selectable()&&this.selected.set(this.deselectable()?!this.selected():!0),this.activated.emit())}remove(){this.disabled()||this.isReadonly()||!this.removable()||this.removed.emit()}onKeydown(t){!this.removable()||this.disabled()||this.isReadonly()||![`Delete`,`Backspace`].includes(t.key)||(t.preventDefault(),t.stopPropagation(),this.remove())}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-chip`]],hostVars:10,hostBindings:function(e,n){e&2&&ka(`--%NS%bx-chip-role-text`,n.palette().text)(`--%NS%bx-chip-role-background`,n.palette().tonal)(`--%NS%bx-chip-role-border`,n.palette().border)(`--%NS%bx-chip-role-fill`,n.palette().fill)(`--%NS%bx-chip-role-on-fill`,n.palette().onFill)},inputs:{label:[1,`label`],config:[1,`config`],selected:[1,`selected`],selectable:[1,`selectable`],deselectable:[1,`deselectable`],removable:[1,`removable`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`]},outputs:{selected:`selectedChange`,activated:`activated`,removed:`removed`},ngContentSelectors:lu,decls:7,vars:17,consts:[[`bxSurface`,``,1,`bx-chip`,3,`bxSurfaceInteractive`],[`type`,`button`,1,`bx-chip-action`,3,`click`,`keydown`,`disabled`],[`name`,`check`,`size`,`16`],[`type`,`button`,1,`bx-chip-remove`,3,`disabled`],[`size`,`16`,3,`name`],[`type`,`button`,1,`bx-chip-remove`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`]],template:function(e,n){e&1&&(ld$1(su),bo(0,`span`,0)(1,`button`,1),br(`click`,function(){return n.activate()})(`keydown`,function(a){return n.onKeydown(a)}),od$1(2,du,1,0,`bx-icon`,2)(3,pu,2,0),bo(4,`span`),lA(5),Go$1()(),od$1(6,mu,2,3,`button`,3),Go$1()),e&2&&(tr$1(`is-selected`,n.selected())(`is-disabled`,n.disabled())(`is-filled`,n.settings().variant===`filled`)(`is-outlined`,n.settings().variant===`outlined`)(`is-small`,n.settings().size===`small`),xo(`bxSurfaceInteractive`,!1),Xl$1(),xo(`disabled`,n.disabled()),vo(`aria-disabled`,n.isReadonly()?`true`:null)(`aria-pressed`,n.selectable()?n.selected():null),Xl$1(),nd$1(n.selectable()&&n.selected()?2:3),Xl$1(3),ik(n.resolvedLabel()),Xl$1(),nd$1(n.removable()?6:-1))},dependencies:[ZC,GC],styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  min-inline-size: 0;
  max-inline-size: 100%;
}
.bx-chip[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-chip-background, var(--%NS%bx-chip-role-background));
  --%NS%bx-glass-text: var(--%NS%bx-chip-color, var(--%NS%bx-chip-role-text));
  --%NS%bx-glass-edge: var(--%NS%bx-chip-border, var(--%NS%bx-chip-role-border));
  --%NS%bx-glass-radius: var(--%NS%bx-chip-radius, var(--%NS%bx-rounded-pill, 9999px));
  --%NS%bx-glass-shadow: none;
  --%NS%bx-chip-action-size: var(--%NS%bx-chip-min-height, var(--%NS%bx-space-10, 2.5rem));
  position: relative;
  display: inline-flex;
  align-items: stretch;
  min-inline-size: 0;
  max-inline-size: 100%;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
  background: var(--%NS%bx-glass-surface);
  color: var(--%NS%bx-glass-text);
}
.bx-chip.is-filled[_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: var(--%NS%bx-chip-fill-opacity, 1);
  --%NS%bx-glass-surface: var(--%NS%bx-chip-background, var(--%NS%bx-chip-role-fill));
  --%NS%bx-glass-text: var(--%NS%bx-chip-color, var(--%NS%bx-chip-role-on-fill));
}
.bx-chip.is-filled[_ngcontent-%COMP%]   .bx-chip-action[_ngcontent-%COMP%]:hover:not(:disabled, [aria-disabled=true])::before {
  background: var(--%NS%bx-chip-hover-background, transparent);
  box-shadow: inset 0 0 0 1px currentcolor;
}
.bx-chip.is-outlined[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-chip-background, var(--%NS%bx-bg-surface));
}
.bx-chip.is-selected[_ngcontent-%COMP%] {
  border-color: currentcolor;
  box-shadow: inset 0 0 0 1px currentcolor;
}
.bx-chip.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.6;
}
.bx-chip.is-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  min-block-size: var(--%NS%bx-chip-min-height, var(--%NS%bx-space-8, 2rem));
  padding-block: var(--%NS%bx-space-1, 0.25rem);
  font-size: 0.8125rem;
}
.bx-chip.is-small[_ngcontent-%COMP%] {
  --%NS%bx-chip-action-size: var(--%NS%bx-chip-min-height, var(--%NS%bx-space-8, 2rem));
}
button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--%NS%bx-space-1, 0.25rem);
  min-inline-size: 0;
  min-block-size: var(--%NS%bx-chip-min-height, var(--%NS%bx-space-10, 2.5rem));
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-radius: inherit;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.875rem;
  text-align: start;
  cursor: pointer;
}
button[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
button[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
}
button[aria-disabled=true][_ngcontent-%COMP%] {
  cursor: default;
}
.bx-chip-action[_ngcontent-%COMP%] {
  position: static;
  flex: 1 1 auto;
  border-radius: max(0px, var(--%NS%bx-chip-radius, var(--%NS%bx-rounded-pill, 9999px)) - (var(--%NS%bx-border-width, 1px)));
  text-align: center;
}
.bx-chip-action[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}
.bx-chip-action[_ngcontent-%COMP%]:hover:not(:disabled, [aria-disabled=true])::before {
  background: var(--%NS%bx-chip-hover-background, color-mix(in srgb, currentcolor 10%, transparent));
}
.bx-chip-action[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  position: relative;
}
.bx-chip-action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.bx-chip-remove[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  align-self: center;
  inline-size: var(--%NS%bx-chip-action-size);
  block-size: var(--%NS%bx-chip-action-size);
  min-inline-size: var(--%NS%bx-chip-action-size);
  margin: -1px;
  margin-inline-start: 0;
  padding: 0;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: 50%;
  background: var(--%NS%bx-chip-remove-background, var(--%NS%bx-glass-surface));
}
.bx-chip-remove[_ngcontent-%COMP%]:hover:not(:disabled, [aria-disabled=true]) {
  background: color-mix(in srgb, currentcolor 10%, var(--%NS%bx-chip-remove-background, var(--%NS%bx-glass-surface)));
}
@media (forced-colors: active) {
  .bx-chip.is-selected[_ngcontent-%COMP%] {
    border: 2px solid Highlight;
  }
  .bx-chip.is-disabled[_ngcontent-%COMP%] {
    color: GrayText;
    opacity: 1;
  }
}`]})};var gu=[`*`];var Qi=class i{i18n=b(VQ,{optional:!0});resolvedLabel=G(()=>LQ(this.ariaLabel(),this.i18n));size=ee(`lg`);landmark=ee(void 0);ariaLabel=ee(void 0);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-container`]],hostVars:3,hostBindings:function(e,n){e&2&&vo(`data-size`,n.size())(`role`,n.landmark()??null)(`aria-label`,n.landmark()&&n.resolvedLabel()||null)},inputs:{size:[1,`size`],landmark:[1,`landmark`],ariaLabel:[1,`ariaLabel`]},ngContentSelectors:gu,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},styles:[`
[_nghost-%COMP%] {
  display: block;
  box-sizing: border-box;
  inline-size: 100%;
  min-inline-size: 0;
  margin-inline: auto;
  padding-inline: var(--%NS%bx-container-padding, var(--%NS%bx-space-4, 1rem));
}
[data-size=sm][_nghost-%COMP%] {
  max-inline-size: var(--%NS%bx-container-max-width, 640px);
}
[data-size=md][_nghost-%COMP%] {
  max-inline-size: var(--%NS%bx-container-max-width, 768px);
}
[data-size=lg][_nghost-%COMP%] {
  max-inline-size: var(--%NS%bx-container-max-width, 1024px);
}
[data-size=xl][_nghost-%COMP%] {
  max-inline-size: var(--%NS%bx-container-max-width, 1280px);
}
[data-size=full][_nghost-%COMP%] {
  max-inline-size: var(--%NS%bx-container-max-width, none);
}`]})};function bu(i,t){if(i&1&&(id$1(0,`span`,0),lA(1),ad$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedLabel())}}var Zs=class i{i18n=b(VQ,{optional:!0});resolvedLabel=G(()=>LQ(this.label(),this.i18n));orientation=ee(`horizontal`);lineStyle=ee(`solid`);label=ee(void 0);decorative=ee(!1,{transform:Ye});static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-divider`]],hostVars:10,hostBindings:function(e,n){e&2&&(vo(`role`,n.decorative()?null:`separator`)(`aria-hidden`,n.decorative()?`true`:null)(`aria-orientation`,n.decorative()?null:n.orientation())(`aria-label`,n.decorative()?null:n.resolvedLabel()||null),ka(`--%NS%bx-divider-style`,n.lineStyle()),tr$1(`is-vertical`,n.orientation()===`vertical`)(`has-label`,!!n.resolvedLabel()))},inputs:{orientation:[1,`orientation`],lineStyle:[1,`lineStyle`],label:[1,`label`],decorative:[1,`decorative`]},decls:1,vars:1,consts:[[1,`bx-divider-label`]],template:function(e,n){e&1&&od$1(0,bu,2,1,`span`,0),e&2&&nd$1(n.resolvedLabel()?0:-1)},styles:[`
[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-divider-gap, var(--%NS%bx-space-3, 0.75rem));
  inline-size: 100%;
  min-inline-size: 0;
  margin-block: var(--%NS%bx-divider-margin, var(--%NS%bx-space-4, 1rem));
  color: var(--%NS%bx-divider-text, var(--%NS%bx-text-secondary));
}
[_nghost-%COMP%]::before, 
.has-label[_nghost-%COMP%]::after {
  content: "";
  flex: 1 1 var(--%NS%bx-divider-segment-min-length, var(--%NS%bx-space-4, 1rem));
  border-block-start: var(--%NS%bx-divider-thickness, var(--%NS%bx-border-width, 1px)) var(--%NS%bx-divider-style, var(--%NS%bx-border-style, solid)) var(--%NS%bx-divider-color, var(--%NS%bx-border-default));
}
.is-vertical[_nghost-%COMP%] {
  flex-direction: column;
  align-self: stretch;
  inline-size: auto;
  min-block-size: var(--%NS%bx-divider-min-height, var(--%NS%bx-space-6, 1.5rem));
  margin-block: 0;
  block-size: auto;
  margin-inline: var(--%NS%bx-divider-margin, var(--%NS%bx-space-3, 0.75rem));
}
.is-vertical[_nghost-%COMP%]::before, 
.is-vertical.has-label[_nghost-%COMP%]::after {
  border-block-start: 0;
  border-inline-start: var(--%NS%bx-divider-thickness, var(--%NS%bx-border-width, 1px)) var(--%NS%bx-divider-style, var(--%NS%bx-border-style, solid)) var(--%NS%bx-divider-color, var(--%NS%bx-border-default));
}
.bx-divider-label[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  min-inline-size: 0;
  overflow-wrap: anywhere;
  font-size: var(--%NS%bx-divider-font-size, 0.8125rem);
}`]})};var hu=[`*`];var Xs=class i{columnTemplate=G(()=>{let t=this.columns();return t!==void 0&&Number.isFinite(t)?`repeat(`+Math.max(1,Math.min(24,Math.floor(t)))+`, minmax(0, 1fr))`:null});columns=ee(void 0);minColumnWidth=ee(`16rem`);gap=ee(4);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-grid`]],hostVars:5,hostBindings:function(e,n){e&2&&(vo(`data-gap`,n.gap()),ka(`--%NS%bx-grid-columns`,n.columnTemplate())(`--%NS%bx-grid-min-column`,n.minColumnWidth()))},inputs:{columns:[1,`columns`],minColumnWidth:[1,`minColumnWidth`],gap:[1,`gap`]},ngContentSelectors:hu,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},styles:[`
[data-gap="0"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-0, 0);
}
[data-gap="1"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-1, 0.25rem);
}
[data-gap="2"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-2, 0.5rem);
}
[data-gap="3"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-3, 0.75rem);
}
[data-gap="4"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-4, 1rem);
}
[data-gap="5"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-5, 1.25rem);
}
[data-gap="6"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-6, 1.5rem);
}
[data-gap="8"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-8, 2rem);
}
[data-gap="10"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-10, 2.5rem);
}
[data-gap="12"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-12, 3rem);
}
[_nghost-%COMP%] {
  display: grid;
  grid-template-columns: var(--%NS%bx-grid-columns, repeat(auto-fit, minmax(min(100%, var(--%NS%bx-grid-min-column, 16rem)), 1fr)));
  min-inline-size: 0;
  gap: var(--%NS%bx-grid-gap, var(--%NS%bx-layout-gap, var(--%NS%bx-space-4, 1rem)));
}
@media (max-width: 640px) {
  [_nghost-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}`]})};var fu=[`*`];var Ys=class i{opaque=ee(void 0);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-popover`]],inputs:{opaque:[1,`opaque`]},ngContentSelectors:fu,decls:3,vars:2,consts:[[`bxSurface`,``,1,`bx-popover-surface`,3,`bxSurfaceInteractive`,`bxReducedTransparency`],[1,`bx-popover-content`]],template:function(e,n){e&1&&(ld$1(),bo(0,`div`,0)(1,`div`,1),dd$1(2),Go$1()()),e&2&&xo(`bxSurfaceInteractive`,!1)(`bxReducedTransparency`,n.opaque())},dependencies:[GC],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  max-inline-size: 100%;
}
.bx-popover-surface[_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: var(--%NS%bx-dropdown-min-opacity, 0);
  --%NS%bx-glass-opacity: var(--%NS%bx-dropdown-opacity, min(1, var(--%NS%bx-glass-material-opacity, 0.5) + 0.18));
  --%NS%bx-glass-surface: var(--%NS%bx-popover-background, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-popover-color, var(--%NS%bx-text-primary));
  --%NS%bx-glass-edge: var(--%NS%bx-popover-border, var(--%NS%bx-border-default));
  --%NS%bx-glass-radius: var(--%NS%bx-popover-radius, var(--%NS%bx-rounded-lg, 0.75rem));
  --%NS%bx-glass-shadow: var(--%NS%bx-popover-shadow, var(--%NS%bx-shadow-lg, 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)));
  box-sizing: border-box;
  inline-size: var(--%NS%bx-popover-width, max-content);
  max-inline-size: min(var(--%NS%bx-popover-max-width, 24rem), 100vw - var(--%NS%bx-space-4, 1rem));
  overflow: clip;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
  background: var(--%NS%bx-glass-surface);
  color: var(--%NS%bx-glass-text);
  box-shadow: var(--%NS%bx-glass-shadow);
  overflow-wrap: anywhere;
}
.bx-popover-content[_ngcontent-%COMP%] {
  box-sizing: border-box;
  min-inline-size: 0;
  max-inline-size: 100%;
  max-block-size: calc(100dvh - var(--%NS%bx-space-4, 1rem) - 2px);
  padding: var(--%NS%bx-popover-padding, var(--%NS%bx-space-4, 1rem));
  overflow: hidden auto;
  overscroll-behavior: contain;
}`]})};function vu(i,t){i&1&&lb(0,`span`,0)}var Qs=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);resolvedLabel=G(()=>LQ(this.label(),this.i18n));rows=G(()=>Array.from({length:this.shape()===`text`?Math.max(1,Math.min(100,Math.floor(this.lines())||1)):1},(t,e)=>e));shape=ee(`text`);lines=ee(1);width=ee(void 0);height=ee(void 0);animated=ee(!0,{transform:Ye});decorative=ee(!0,{transform:Ye});label=ee(`Loading content`);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-skeleton`]],hostVars:14,hostBindings:function(e,n){e&2&&(vo(`aria-hidden`,n.decorative()?`true`:null)(`role`,n.decorative()?null:`status`)(`aria-label`,n.decorative()?null:n.resolvedLabel())(`aria-busy`,n.decorative()?null:`true`),ka(`inline-size`,n.width())(`--%NS%bx-skeleton-height`,n.height()),tr$1(`is-static`,!n.animated()||n.bxA11yService.isReducedMotion())(`is-circle`,n.shape()===`circle`)(`is-text`,n.shape()===`text`))},inputs:{shape:[1,`shape`],lines:[1,`lines`],width:[1,`width`],height:[1,`height`],animated:[1,`animated`],decorative:[1,`decorative`],label:[1,`label`]},decls:2,vars:0,consts:[[1,`bx-skeleton-line`]],template:function(e,n){e&1&&ab(0,vu,1,0,`span`,0,TT),e&2&&cb(n.rows())},styles:[`
[_nghost-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-skeleton-gap, var(--%NS%bx-space-2, 0.5rem));
  inline-size: 100%;
  min-inline-size: 0;
}
.bx-skeleton-line[_ngcontent-%COMP%] {
  display: block;
  block-size: var(--%NS%bx-skeleton-height, 1rem);
  border-radius: var(--%NS%bx-skeleton-radius, var(--%NS%bx-rounded-sm, 0.25rem));
  background: var(--%NS%bx-skeleton-background, var(--%NS%bx-bg-element-active));
  animation: _ngcontent-%COMP%_bx-skeleton-pulse var(--%NS%bx-skeleton-duration, 1.6s) ease-in-out infinite;
}
.is-text[_nghost-%COMP%]   .bx-skeleton-line[_ngcontent-%COMP%]:last-child:not(:first-child) {
  inline-size: var(--%NS%bx-skeleton-last-line-width, 70%);
}
.is-circle[_nghost-%COMP%] {
  inline-size: var(--%NS%bx-skeleton-height, var(--%NS%bx-space-10, 2.5rem));
}
.is-circle[_nghost-%COMP%]   .bx-skeleton-line[_ngcontent-%COMP%] {
  block-size: auto;
  aspect-ratio: 1;
  border-radius: 50%;
}
.is-static[_nghost-%COMP%]   .bx-skeleton-line[_ngcontent-%COMP%] {
  animation: none;
}
@keyframes _ngcontent-%COMP%_bx-skeleton-pulse {
  50% {
    opacity: 0.45;
  }
}
@media (forced-colors: active) {
  .bx-skeleton-line[_ngcontent-%COMP%] {
    background: GrayText;
    animation: none;
  }
}`]})};var yu=[`*`];var Js=class i{direction=ee(`vertical`);gap=ee(4);align=ee(`stretch`);justify=ee(`start`);wrap=ee(!1,{transform:Ye});static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-stack`]],hostVars:8,hostBindings:function(e,n){e&2&&(vo(`data-direction`,n.direction())(`data-gap`,n.gap()),ka(`align-items`,n.align())(`justify-content`,n.justify()===`between`?`space-between`:n.justify()),tr$1(`is-wrapping`,n.wrap()))},inputs:{direction:[1,`direction`],gap:[1,`gap`],align:[1,`align`],justify:[1,`justify`],wrap:[1,`wrap`]},ngContentSelectors:yu,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},styles:[`
[data-gap="0"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-0, 0);
}
[data-gap="1"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-1, 0.25rem);
}
[data-gap="2"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-2, 0.5rem);
}
[data-gap="3"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-3, 0.75rem);
}
[data-gap="4"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-4, 1rem);
}
[data-gap="5"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-5, 1.25rem);
}
[data-gap="6"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-6, 1.5rem);
}
[data-gap="8"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-8, 2rem);
}
[data-gap="10"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-10, 2.5rem);
}
[data-gap="12"][_nghost-%COMP%] {
  --%NS%bx-layout-gap: var(--%NS%bx-space-12, 3rem);
}
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  gap: var(--%NS%bx-stack-gap, var(--%NS%bx-layout-gap, var(--%NS%bx-space-4, 1rem)));
}
[data-direction=horizontal][_nghost-%COMP%] {
  flex-direction: row;
}
.is-wrapping[_nghost-%COMP%] {
  flex-wrap: wrap;
}
@media (min-width: 640px) {
  [data-direction=responsive][_nghost-%COMP%] {
    flex-direction: row;
  }
}`]})};var el=new T(`BX_POPOVER_DEFAULTS`);var tl=class i{bxA11yService=b(Br$1);nativeElement=b(ke).nativeElement;overlay=b(Ld$1);bxOverlayPositionService=b(_w);viewContainerRef=b(fr);ngZone=b(le);interactivityChecker=b(jC);scrollLockService=b(Nw);context=b(Ae,{optional:!0});i18n=b(VQ,{optional:!0});defaults=b(el,{optional:!0});browser=bt(b(Ge));scrollLockId=qK();opened=$(!1);settings=G(()=>{let t=this.popoverConfig();return{placement:t.placement??this.defaults?.placement??`bottom`,offset:t.offset??this.defaults?.offset??8,ariaLabel:t.ariaLabel??this.defaults?.ariaLabel??`Details`,autoFocus:t.autoFocus??this.defaults?.autoFocus??!0,closeOnOutside:t.closeOnOutside??this.defaults?.closeOnOutside??!0,closeOnEscape:t.closeOnEscape??this.defaults?.closeOnEscape??!0,closeOnFocusOutside:t.closeOnFocusOutside??this.defaults?.closeOnFocusOutside??!0}});accessibleName=G(()=>LQ(this.settings().ariaLabel??`Details`,this.i18n));panelId=`bx-popover-`+qK();isOpen=this.opened.asReadonly();bxPopover=ee.required();popoverConfig=ee({});popoverDisabled=ee(!1,{transform:Ye});openedChange=Pk();overlayRef;subscriptions=new Ae$1;disconnectTheme;disconnectLighting;disconnectOrigin;transition;presentationRevision=0;constructor(){b(ge).onDestroy(()=>this.dispose()),We(()=>{this.popoverDisabled()&&this.isOpen()&&this.close();let t=this.settings(),e=this.accessibleName(),n=this.overlayRef;n&&(n.overlayElement.setAttribute(`aria-label`,e),this.disconnectOrigin?.(),n.updatePositionStrategy(this.bxOverlayPositionService.getElementStrategy(this.nativeElement,t.placement??`bottom`,t.offset??8)),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>RK(n,this.nativeElement)))})}toggle(){this.isOpen()?this.close():this.open()}open(){if(!this.browser||this.isOpen()||this.popoverDisabled()||this.nativeElement.matches(`:disabled, [aria-disabled="true"]`))return;this.overlayRef&&this.dispose();let t=this.settings(),e=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getElementStrategy(this.nativeElement,t.placement??`bottom`,t.offset??8),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.context?.useTopLayer||!!this.nativeElement.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=e,this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0}),this.opened.set(!0);let n=e.overlayElement;n.id=this.panelId,n.tabIndex=-1,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,this.accessibleName()),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(this.nativeElement,n)),this.disconnectLighting=DR(n,this.nativeElement),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>RK(e,this.nativeElement)),this.subscriptions.add(e.outsidePointerEvents().subscribe(a=>{(this.settings().closeOnOutside??!0)&&!this.nativeElement.contains(a.target)&&this.close(!1)})),this.subscriptions.add(e.keydownEvents().subscribe(a=>this.onPanelKey(a))),e.attach(new ja(this.bxPopover(),this.viewContainerRef)).detectChanges(),e.updatePosition(),this.transition=this.ngZone.runOutsideAngular(()=>MR(this.nativeElement,n)),this.ngZone.runOutsideAngular(()=>this.transition?.enter()),(t.autoFocus??!0)&&(this.tabbableElements()[0]??n).focus({preventScroll:!0}),this.openedChange.emit(!0)}close(t=!0){if(!this.overlayRef)return;let e=this.overlayRef.overlayElement;t&&e.contains(this.nativeElement.ownerDocument.activeElement)&&this.nativeElement.focus({preventScroll:!0});let n=++this.presentationRevision,r=this.transition;this.opened.set(!1),e.inert=!0,this.scrollLockService.enableScroll(this.scrollLockId);let a=()=>{n===this.presentationRevision&&this.dispose()};r&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>r.exit()).then(a,a):a(),this.openedChange.emit(!1)}onFocusIn(t){let e=t.target;e instanceof Element&&e.closest(`.cdk-overlay-pane`)||this.isOpen()&&(this.settings().closeOnFocusOutside??!0)&&e&&!this.nativeElement.contains(e)&&!this.overlayRef?.overlayElement.contains(e)&&this.close(!1)}onPanelKey(t){if(!t.defaultPrevented){if(t.key===`Escape`&&(this.settings().closeOnEscape??!0))t.preventDefault(),t.stopPropagation(),this.close();else if(t.key===`Tab`){let e=this.tabbableElements(),n=this.nativeElement.ownerDocument.activeElement;if(!(!e.length||(t.shiftKey?n===e[0]:n===e[e.length-1])))return;t.shiftKey&&t.preventDefault(),this.close()}}}tabbableElements(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button, a[href], input, select, textarea, [tabindex]`)??[]).filter(t=>this.interactivityChecker.isTabbable(t))}dispose(){++this.presentationRevision,this.transition?.destroy(),this.transition=void 0,this.opened.set(!1),this.subscriptions.unsubscribe(),this.subscriptions=new Ae$1,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId)}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxPopover`,``]],hostAttrs:[`aria-haspopup`,`dialog`],hostVars:2,hostBindings:function(e,n){e&1&&br(`click`,function(){return n.toggle()})(`focusin`,function(a){return n.onFocusIn(a)},US),e&2&&vo(`aria-expanded`,n.isOpen())(`aria-controls`,n.isOpen()?n.panelId:null)},inputs:{bxPopover:[1,`bxPopover`],popoverConfig:[1,`popoverConfig`],popoverDisabled:[1,`popoverDisabled`]},outputs:{openedChange:`openedChange`},exportAs:[`bxPopover`]})};var Ji=new T(`BX_PAGE_NAVIGATION`);var xu=[`*`];function Su(i,t){if(i&1&&(id$1(0,`p`,0),lA(1),ad$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedSectionTitle())}}function Cu(i,t){if(i&1&&(id$1(0,`h1`,3),lA(1),ad$1()),i&2){let e=Wo$1(2);Xl$1(),ik(e.resolvedPageTitle())}}function _u(i,t){if(i&1&&(id$1(0,`h2`,3),lA(1),ad$1()),i&2){let e=Wo$1(2);Xl$1(),ik(e.resolvedPageTitle())}}function wu(i,t){if(i&1&&(id$1(0,`h3`,3),lA(1),ad$1()),i&2){let e=Wo$1(2);Xl$1(),ik(e.resolvedPageTitle())}}function Nu(i,t){if(i&1&&(id$1(0,`h4`,3),lA(1),ad$1()),i&2){let e=Wo$1(2);Xl$1(),ik(e.resolvedPageTitle())}}function Mu(i,t){if(i&1&&(id$1(0,`h5`,3),lA(1),ad$1()),i&2){let e=Wo$1(2);Xl$1(),ik(e.resolvedPageTitle())}}function Tu(i,t){if(i&1&&(id$1(0,`h6`,3),lA(1),ad$1()),i&2){let e=Wo$1(2);Xl$1(),ik(e.resolvedPageTitle())}}function Du(i,t){if(i&1&&od$1(0,Cu,2,1,`h1`,3)(1,_u,2,1,`h2`,3)(2,wu,2,1,`h3`,3)(3,Nu,2,1,`h4`,3)(4,Mu,2,1,`h5`,3)(5,Tu,2,1,`h6`,3),i&2){let e,n=Wo$1();nd$1((e=n.level())===1?0:e===2?1:e===3?2:e===4?3:e===5?4:e===6?5:-1)}}function Iu(i,t){if(i&1&&(id$1(0,`p`,1),lA(1),ad$1()),i&2){let e=Wo$1();Xl$1(),ik(e.resolvedPageDescription())}}var ln=class i{i18n=b(VQ,{optional:!0});pageNavigation=b(Ji,{optional:!0});resolvedSectionTitle=G(()=>LQ(this.sectionTitle()??(this.autoResolveTitlesFromNavigation()?this.pageNavigation?.().sectionTitle:void 0),this.i18n));resolvedPageTitle=G(()=>LQ(this.pageTitle()??(this.autoResolveTitlesFromNavigation()?this.pageNavigation?.().pageTitle:void 0),this.i18n));resolvedPageDescription=G(()=>LQ(this.pageDescription(),this.i18n));level=G(()=>Math.min(6,Math.max(1,Math.trunc(this.headingLevel())||1)));sectionTitle=ee(void 0);pageTitle=ee(void 0);pageDescription=ee(void 0);autoResolveTitlesFromNavigation=ee(!0);headingLevel=ee(1);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-page-header`]],inputs:{sectionTitle:[1,`sectionTitle`],pageTitle:[1,`pageTitle`],pageDescription:[1,`pageDescription`],autoResolveTitlesFromNavigation:[1,`autoResolveTitlesFromNavigation`],headingLevel:[1,`headingLevel`]},ngContentSelectors:xu,decls:5,vars:3,consts:[[1,`section-title`],[1,`page-description`],[1,`header-content`],[1,`page-title`]],template:function(e,n){e&1&&(ld$1(),od$1(0,Su,2,1,`p`,0),od$1(1,Du,6,1),od$1(2,Iu,2,1,`p`,1),id$1(3,`div`,2),dd$1(4),ad$1()),e&2&&(nd$1(n.resolvedSectionTitle()?0:-1),Xl$1(),nd$1(n.resolvedPageTitle()?1:-1),Xl$1(),nd$1(n.resolvedPageDescription()?2:-1))},styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.section-title[_ngcontent-%COMP%] {
  margin: 0 0 var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-page-section-color, var(--%NS%bx-text-brand));
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  line-height: 1.5;
  text-transform: uppercase;
}
.page-title[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-page-title-color, var(--%NS%bx-text-heading));
  font-size: var(--%NS%bx-page-title-size, clamp(2rem, 4vw, 3rem));
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.2;
  text-wrap: balance;
}
.page-description[_ngcontent-%COMP%] {
  max-inline-size: var(--%NS%bx-page-description-width, 48rem);
  margin: var(--%NS%bx-space-4, 1rem) 0 0;
  color: var(--%NS%bx-page-description-color, var(--%NS%bx-text-secondary));
  line-height: 1.65;
}
.header-content[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-4, 1rem);
}
.header-content[_ngcontent-%COMP%]:empty {
  display: none;
}`]})};function nl(i,t,e={}){let n=e.orientation===`horizontal`,r=n?e.rtl?`ArrowLeft`:`ArrowRight`:`ArrowDown`;if(![r,n?e.rtl?`ArrowRight`:`ArrowLeft`:`ArrowUp`,`Home`,`End`].includes(i.key))return!1;let o=Array.from(t.querySelectorAll(`[role="menuitem"]`)).filter(u=>u.closest(`[role="menu"], [role="menubar"]`)===t&&!u.matches(`:disabled, [aria-disabled="true"]`)&&!u.closest(`[inert], [hidden], [aria-hidden="true"]`)&&u.getClientRects().length>0);if(!o.length)return!1;let s=o.indexOf(t.ownerDocument.activeElement),l=i.key===`Home`?0:i.key===`End`?o.length-1:i.key===r?s<0?0:(s+1)%o.length:s<0?o.length-1:(s-1+o.length)%o.length;return i.preventDefault(),i.stopPropagation(),(e.roving??n)&&o.forEach((u,p)=>u.tabIndex=p===l?0:-1),o[l].focus(),!0}var er=class i{entries=/* @__PURE__ */ new Set;activate(t){let e=/* @__PURE__ */ new Set,n=t.menuParent();for(;n;)e.add(n),n=n.menuParent();for(let r of[...this.entries])!e.has(r)&&r!==t&&r.close();this.entries.add(t)}remove(t){this.entries.delete(t)}closeChildren(t){for(let e of[...this.entries])e.menuParent()===t&&e.close()}contains(t,e){return t.contains(e)||[...this.entries].some(n=>n.menuParent()===t&&this.contains(n,e))}hasOpenMenus(){return this.entries.size>0}repositionChildren(t){for(let e of[...this.entries])e.menuParent()===t&&e.reposition()}closeAll(t=!1){[...this.entries].find(n=>!n.menuParent())?.close(t)}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var dn=class i{nativeElement=b(ke).nativeElement;overlay=b(Ld$1);overlayContext=b(Ae,{optional:!0});ngZone=b(le);bxOverlayPositionService=b(_w);menuCascadeService=b(er);viewContainerRef=b(fr);focusTrapFactory=b(FC);scrollLockService=b(Nw);scrollLockId=qK();opened=$(!1);overlayId=$(null);isOpen=this.opened.asReadonly();bxMenuTrigger=ee.required();menuOrigin=ee(void 0);menuParent=ee(void 0);menuSide=ee(`right`);menuPlacement=ee(void 0);menuHover=ee(!0);menuManual=ee(!1);menuLabel=ee(``);menuPinned=ee(!1);menuOpened=Pk();menuClosing=Pk();menuClosed=Pk();overlayRef;trap;subscriptions=new Ae$1;disconnectTheme;hoverTimer;positionTracker;constructor(){b(ge).onDestroy(()=>this.close()),We(()=>{let t=this.menuLabel(),e=this.isOpen();de(()=>{e&&this.overlayRef?.overlayElement.querySelector(`[role="menu"]`)?.setAttribute(`aria-label`,t||this.nativeElement.getAttribute(`aria-label`)||this.nativeElement.textContent?.trim()||``)})})}toggle(t){this.menuManual()||(t.preventDefault(),t.stopPropagation(),this.isOpen()?this.close(!0):this.open(!0))}open(t=!1,e=this.menuOrigin()??this.nativeElement){if(this.cancelClose(),this.isOpen()){t&&this.focusFirst();return}if(!this.nativeElement.ownerDocument.defaultView||this.nativeElement.matches(`:disabled, [aria-disabled="true"]`))return;this.menuCascadeService.activate(this);let n=this.menuPlacement(),r=this.overlay.create({positionStrategy:n?this.bxOverlayPositionService.getElementStrategy(e,n,4).withFlexibleDimensions(!1):this.bxOverlayPositionService.getSubmenuStrategy(e,this.menuSide()),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.overlayContext?.useTopLayer||!!this.nativeElement.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`),direction:`ltr`,hasBackdrop:!1});this.overlayRef=r,this.overlayId.set(r.overlayElement.id),this.opened.set(!0),this.disconnectTheme=BK(this.nativeElement,r.overlayElement),this.subscriptions=new Ae$1,r.attach(new ja(this.bxMenuTrigger(),this.viewContainerRef)).detectChanges();let o=r.overlayElement.querySelector(`[role="menu"]`);o&&o.setAttribute(`aria-label`,this.menuLabel()||this.nativeElement.getAttribute(`aria-label`)||this.nativeElement.textContent?.trim()||``),this.trap=this.focusTrapFactory.create(r.overlayElement);let s=this.ngZone.runOutsideAngular(()=>RK(r,e,{onPosition:()=>this.menuCascadeService.repositionChildren(this),onOriginHidden:()=>this.ngZone.run(()=>this.close())}));if(this.positionTracker=s,this.subscriptions.add(()=>{s(),this.positionTracker=void 0}),this.overlayRef!==r)return;this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0}),this.subscriptions.add(r.keydownEvents().subscribe(p=>this.onMenuKey(p))),this.subscriptions.add(r.outsidePointerEvents().subscribe(p=>{p.target instanceof Node&&!this.menuCascadeService.contains(this,p.target)&&this.close()})),this.subscriptions.add(r.detachments().subscribe(()=>this.close()));let l=()=>this.cancelClose(),u=()=>this.scheduleClose();r.overlayElement.addEventListener(`pointerenter`,l),r.overlayElement.addEventListener(`pointerleave`,u),this.subscriptions.add(()=>{r.overlayElement.removeEventListener(`pointerenter`,l),r.overlayElement.removeEventListener(`pointerleave`,u)}),r.updatePosition(),t&&this.focusFirst(),this.menuOpened.emit()}close(t=!1){if(this.cancelClose(),!this.overlayRef)return;this.menuCascadeService.closeChildren(this);let e=this.overlayRef;this.overlayRef=void 0,this.menuClosing.emit(),(t||e.overlayElement.contains(this.nativeElement.ownerDocument.activeElement))&&this.nativeElement.focus({preventScroll:!0}),this.subscriptions.unsubscribe(),this.trap?.destroy(),this.trap=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,e.dispose(),this.scrollLockService.enableScroll(this.scrollLockId),this.menuCascadeService.remove(this),this.overlayId.set(null),this.opened.set(!1),this.menuClosed.emit()}reposition(){this.positionTracker?.reposition()}contains(t){return kN(this.nativeElement,t)||!!this.overlayRef&&kN(this.overlayRef.overlayElement,t)}scheduleClose(){this.menuManual()||this.menuPinned()||(this.cancelClose(),this.hoverTimer=this.nativeElement.ownerDocument.defaultView?.setTimeout(()=>{let t=this.nativeElement.ownerDocument.activeElement;(!t||!this.menuCascadeService.contains(this,t))&&this.close()},240))}onPointerEnter(t){!this.menuManual()&&this.menuHover()&&t.pointerType!==`touch`&&this.open()}onKey(t){this.menuManual()||![this.menuSide()===`right`?`ArrowRight`:`ArrowLeft`,`ArrowDown`,`ArrowUp`].includes(t.key)||(t.preventDefault(),t.stopPropagation(),this.open(!0))}cancelClose(){this.nativeElement.ownerDocument.defaultView?.clearTimeout(this.hoverTimer),this.hoverTimer=void 0,this.menuParent()?.cancelClose()}focusFirst(){this.overlayRef?.overlayElement.querySelector(`[role="menuitem"]:not(:disabled):not([aria-disabled="true"])`)?.focus()}onMenuKey(t){if(t.defaultPrevented)return;let e=this.menuSide()===`right`?`ArrowLeft`:`ArrowRight`;if(t.key===`Escape`||t.key===e){t.preventDefault(),t.stopPropagation(),this.close(!0);return}let n=t.target?.closest(`[role="menu"]`);n&&nl(t,n)}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxMenuTrigger`,``]],hostVars:3,hostBindings:function(e,n){e&1&&br(`click`,function(a){return n.toggle(a)})(`pointerleave`,function(){return n.scheduleClose()})(`pointerenter`,function(a){return n.onPointerEnter(a)})(`keydown`,function(a){return n.onKey(a)}),e&2&&vo(`aria-haspopup`,n.menuManual()?null:`menu`)(`aria-expanded`,n.menuManual()?null:n.isOpen())(`aria-controls`,n.menuManual()?null:n.overlayId())},inputs:{bxMenuTrigger:[1,`bxMenuTrigger`],menuOrigin:[1,`menuOrigin`],menuParent:[1,`menuParent`],menuSide:[1,`menuSide`],menuPlacement:[1,`menuPlacement`],menuHover:[1,`menuHover`],menuManual:[1,`menuManual`],menuLabel:[1,`menuLabel`],menuPinned:[1,`menuPinned`]},outputs:{menuOpened:`menuOpened`,menuClosing:`menuClosing`,menuClosed:`menuClosed`},exportAs:[`bxMenuTrigger`]})};var il=new T(`BX_BREADCRUMB_DEFAULTS`);var ga=i=>({$implicit:i});var ma=(i,t)=>t.index;function Ru(i,t){if(i&1&&$s$1(0,14),i&2){Wo$1(2);let e=FT(8);xo(`ngTemplateOutlet`,e)}}function Eu(i,t){if(i&1&&(bo(0,`li`),$s$1(1,13),od$1(2,Ru,1,1,`ng-container`,14),Go$1()),i&2){let e=t.$implicit,n=t.$index,r=t.$count,a=Wo$1(),o=FT(10);Xl$1(),xo(`ngTemplateOutlet`,o)(`ngTemplateOutletContext`,bb(3,ga,e)),Xl$1(),nd$1(n!==r-1||a.truncated()?2:-1)}}function Pu(i,t){if(i&1&&(bo(0,`button`,15),$s$1(1,14),Go$1()),i&2){let e=Wo$1(2),n=FT(16),r=FT(18);xo(`bxMenuTrigger`,r)(`menuHover`,e.hover())(`menuParent`,e.menuParent())(`menuPlacement`,e.placement())(`menuLabel`,e.overflowLabel()),vo(`aria-label`,e.overflowLabel()),Xl$1(),xo(`ngTemplateOutlet`,n)}}function Ou(i,t){if(i&1&&(bo(0,`span`,16),$s$1(1,14),Go$1()),i&2){let e=Wo$1(2),n=FT(16);xo(`bxTooltip`,e.hiddenDescription())(`bxTooltipHover`,e.hover())(`placement`,e.placement()),Xl$1(),xo(`ngTemplateOutlet`,n)}}function ku(i,t){if(i&1&&(bo(0,`li`,12),od$1(1,Pu,2,7,`button`,15)(2,Ou,2,4,`span`,16),$s$1(3,14),Go$1()),i&2){let e=Wo$1(),n=FT(8);Xl$1(),nd$1(e.interactive()?1:2),Xl$1(2),xo(`ngTemplateOutlet`,n)}}function Lu(i,t){if(i&1&&$s$1(0,14),i&2){Wo$1(2);let e=FT(8);xo(`ngTemplateOutlet`,e)}}function zu(i,t){if(i&1&&(bo(0,`li`),$s$1(1,13),od$1(2,Lu,1,1,`ng-container`,14),Go$1()),i&2){let e=t.$implicit,n=t.$index,r=t.$count;Wo$1();let a=FT(10);Xl$1(),xo(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,bb(3,ga,e)),Xl$1(),nd$1(n!==r-1?2:-1)}}function Au(i,t){if(i&1&&sd$1(0,`bx-icon`,17),i&2){let e=Wo$1(2);xo(`name`,e.divider())(`contentTemplate`,e.dividerTemplate())}}function Bu(i,t){if(i&1&&(bo(0,`span`,18),lA(1),Go$1()),i&2){let e=Wo$1(2);Xl$1(),ik(e.separatorText())}}function Hu(i,t){if(i&1&&od$1(0,Au,1,2,`bx-icon`,17)(1,Bu,2,1,`span`,18),i&2){let e=Wo$1();nd$1(e.divider()||e.dividerTemplate()?0:1)}}function Fu(i,t){if(i&1&&$s$1(0,13),i&2){let e=t.$implicit,n=Wo$1(),r=FT(12),a=FT(14);xo(`ngTemplateOutlet`,n.compact()?a:r)(`ngTemplateOutletContext`,bb(2,ga,e))}}function ju(i,t){if(i&1&&(bo(0,`span`,19),lA(1),Go$1()),i&2){let e=Wo$1().$implicit;Xl$1(),ik(e.label)}}function Vu(i,t){if(i&1&&(bo(0,`span`),lA(1),Go$1()),i&2){let e=Wo$1().$implicit;Xl$1(),ik(e.label)}}function Uu(i,t){if(i&1){let e=pb();bo(0,`button`,22),br(`click`,function(r){al$1(e);let a=Wo$1().$implicit,o=Wo$1();return cl$1(o.activate(a,r))}),lA(1),Go$1()}if(i&2){let e=Wo$1().$implicit;xo(`disabled`,e.item.disabled),Xl$1(),mb(` `,e.label,` `)}}function $u(i,t){if(i&1){let e=pb();bo(0,`a`,23),br(`click`,function(r){al$1(e);let a=Wo$1().$implicit,o=Wo$1();return cl$1(o.activate(a,r))}),lA(1),Go$1()}if(i&2){let e=Wo$1().$implicit;xo(`routerLink`,e.item.disabled?null:e.item.route),vo(`aria-disabled`,e.item.disabled||null)(`tabindex`,e.item.disabled?-1:null),Xl$1(),mb(` `,e.label,` `)}}function Wu(i,t){if(i&1&&(bo(0,`span`),lA(1),Go$1()),i&2){let e=Wo$1().$implicit;Xl$1(),ik(e.label)}}function qu(i,t){if(i&1&&od$1(0,ju,2,1,`span`,19)(1,Vu,2,1,`span`)(2,Uu,2,2,`button`,20)(3,$u,2,4,`a`,21)(4,Wu,2,1,`span`),i&2){let e=t.$implicit,n=Wo$1();nd$1(n.currentLast()&&e.index===n.items().length-1?0:n.interactive()?e.item.action?2:e.item.route!==void 0?3:4:1)}}function Gu(i,t){if(i&1&&(bo(0,`span`,24,6),SA(2,`bxTruncatedText`),lA(3),Go$1()),i&2){let e=FT(1),n=Wo$1().$implicit,r=Wo$1();xo(`bxTruncate`,r.compact())(`bxTooltip`,AA(2,3,n.label,e.truncated(),r.compact())),Xl$1(3),ik(n.label)}}function Ku(i,t){if(i&1&&(bo(0,`span`,25,7),SA(2,`bxTruncatedText`),lA(3),Go$1()),i&2){let e=FT(1),n=Wo$1().$implicit,r=Wo$1();xo(`bxTruncate`,r.compact())(`bxTooltip`,AA(2,3,n.label,e.truncated(),r.compact())),Xl$1(3),ik(n.label)}}function Zu(i,t){if(i&1){let e=pb();bo(0,`button`,28),SA(1,`bxTruncatedText`),br(`click`,function(r){al$1(e);let a=Wo$1().$implicit,o=Wo$1();return cl$1(o.activate(a,r))}),bo(2,`span`,29,8),lA(4),Go$1()()}if(i&2){let e=FT(3),n=Wo$1().$implicit,r=Wo$1();xo(`bxTooltip`,AA(1,4,n.label,e.truncated(),r.compact()))(`disabled`,n.item.disabled),Xl$1(2),xo(`bxTruncate`,r.compact()),Xl$1(2),ik(n.label)}}function Xu(i,t){if(i&1){let e=pb();bo(0,`a`,30),SA(1,`bxTruncatedText`),br(`click`,function(r){al$1(e);let a=Wo$1().$implicit,o=Wo$1();return cl$1(o.activate(a,r))}),bo(2,`span`,29,9),lA(4),Go$1()()}if(i&2){let e=FT(3),n=Wo$1().$implicit,r=Wo$1();xo(`bxTooltip`,AA(1,6,n.label,e.truncated(),r.compact()))(`routerLink`,n.item.disabled?null:n.item.route),vo(`aria-disabled`,n.item.disabled||null)(`tabindex`,n.item.disabled?-1:null),Xl$1(2),xo(`bxTruncate`,r.compact()),Xl$1(2),ik(n.label)}}function Yu(i,t){if(i&1&&(bo(0,`span`,25,10),SA(2,`bxTruncatedText`),lA(3),Go$1()),i&2){let e=FT(1),n=Wo$1().$implicit,r=Wo$1();xo(`bxTruncate`,r.compact())(`bxTooltip`,AA(2,3,n.label,e.truncated(),r.compact())),Xl$1(3),ik(n.label)}}function Qu(i,t){if(i&1&&od$1(0,Gu,4,7,`span`,24)(1,Ku,4,7,`span`,25)(2,Zu,5,8,`button`,26)(3,Xu,5,10,`a`,27)(4,Yu,4,7,`span`,25),i&2){let e=t.$implicit,n=Wo$1();nd$1(n.currentLast()&&e.index===n.items().length-1?0:n.interactive()?e.item.action?2:e.item.route!==void 0?3:4:1)}}function Ju(i,t){if(i&1&&lA(0),i&2){let e=Wo$1(2);mb(` `,e.overflowText(),` `)}}function ep(i,t){i&1&&sd$1(0,`bx-icon`,31)}function tp(i,t){if(i&1&&od$1(0,Ju,1,1)(1,ep,1,0,`bx-icon`,31),i&2){let e=Wo$1();nd$1(e.customOverflowText()?0:1)}}function np(i,t){if(i&1){let e=pb();bo(0,`bx-menu-item`,36),br(`action`,function(r){al$1(e);let a=Wo$1().$implicit,o=Wo$1(2);return cl$1(o.activate(a,r))}),Go$1()}if(i&2){let e=Wo$1().$implicit;xo(`label`,e.label)(`wrapLabel`,!0)(`disabled`,e.item.disabled??!1)}}function ip(i,t){if(i&1){let e=pb();bo(0,`a`,37),br(`click`,function(r){al$1(e);let a=Wo$1().$implicit,o=Wo$1(2);return cl$1(o.activate(a,r))}),lA(1),Go$1()}if(i&2){let e=Wo$1().$implicit;xo(`routerLink`,e.item.disabled?null:e.item.route),vo(`aria-disabled`,e.item.disabled||null)(`tabindex`,e.item.disabled?-1:null),Xl$1(),mb(` `,e.label,` `)}}function rp(i,t){if(i&1&&(bo(0,`span`,35),lA(1),Go$1()),i&2){let e=Wo$1().$implicit;Xl$1(),ik(e.label)}}function ap(i,t){if(i&1&&od$1(0,np,1,3,`bx-menu-item`,33)(1,ip,2,4,`a`,34)(2,rp,2,1,`span`,35),i&2){let e=t.$implicit;nd$1(e.item.action?0:e.item.route!==void 0?1:2)}}function op(i,t){if(i&1&&(bo(0,`bx-menu`,32),ab(1,ap,3,1,null,null,ma),Go$1()),i&2){let e=Wo$1();Xl$1(),cb(e.hidden())}}var tr=class i{nativeElement=b(ke).nativeElement;ngZone=b(le);i18n=b(VQ,{optional:!0});defaults=b(il,{optional:!0});compactCapacity=$(1/0);menuTriggerDirective=Sz(dn);entries=G(()=>this.items().map((t,e)=>({item:t,index:e,label:LQ(t.label,this.i18n)})));limit=G(()=>{let t=this.config().maxVisibleItems,e=t===void 0?this.defaults?.maxVisibleItems:t,n=e===null?1/0:Number.isFinite(e??3)?Math.max(2,Math.trunc(e??3)):3;return this.compact()?Math.min(n,this.compactCapacity()):n});truncated=G(()=>this.entries().length>this.limit());leading=G(()=>this.truncated()?this.entries().slice(0,1):this.entries());hidden=G(()=>this.truncated()?this.entries().slice(1,1-this.limit()):[]);trailing=G(()=>this.truncated()?this.entries().slice(1-this.limit()):[]);resolvedLabel=G(()=>{let t=LQ(this.ariaLabel(),this.i18n);return this.interactive()?t:`${t}: ${this.entries().map(e=>e.label).join(` › `)}`});overflowLabel=G(()=>LQ(this.config().overflowLabel??this.defaults?.overflowLabel??`Show hidden breadcrumbs`,this.i18n));overflowText=G(()=>LQ(this.config().overflowText??this.defaults?.overflowText??`…`,this.i18n));customOverflowText=G(()=>this.config().overflowText!==void 0||this.defaults?.overflowText!==void 0);hiddenDescription=G(()=>this.hidden().map(t=>t.label).join(` › `));separatorText=G(()=>LQ(this.separator(),this.i18n));hover=G(()=>this.config().openOnHover??this.defaults?.openOnHover??!0);placement=G(()=>this.config().placement??this.defaults?.placement??`bottom`);items=ee.required();config=ee({});ariaLabel=ee(`Breadcrumbs`);dividerTemplate=ee(void 0);divider=ee(void 0);separator=ee(`›`);currentLast=ee(!0);interactive=ee(!0);compact=ee(!1);menuParent=ee(void 0);selected=Pk();constructor(){Vk(t=>{if(!this.compact())return;let e=this.nativeElement.ownerDocument.defaultView;e&&this.ngZone.runOutsideAngular(()=>{let n=()=>{let a=this.nativeElement.getBoundingClientRect().width,o=parseFloat(e.getComputedStyle(this.nativeElement).fontSize)||12;if(a<=0)return;let s=Math.max(2,Math.floor((a-o*2)/(o*4)));s!==de(this.compactCapacity)&&this.ngZone.run(()=>this.compactCapacity.set(s))},r=typeof ResizeObserver>`u`?void 0:new ResizeObserver(n);r?.observe(this.nativeElement),e.addEventListener(`resize`,n),n(),t(()=>{r?.disconnect(),e.removeEventListener(`resize`,n)})})}),We(()=>{this.entries(),this.config(),this.limit(),de(()=>this.menuTriggerDirective()?.close())})}activate(t,e){if(t.item.disabled){e.preventDefault();return}e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(this.menuTriggerDirective()?.close(),this.selected.emit({item:t.item,index:t.index,event:e}))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-breadcrumb-trail`]],viewQuery:function(e,n){e&1&&Yy(n.menuTriggerDirective,dn,5),e&2&&fb()},hostVars:2,hostBindings:function(e,n){e&2&&tr$1(`is-compact`,n.compact())},inputs:{items:[1,`items`],config:[1,`config`],ariaLabel:[1,`ariaLabel`],dividerTemplate:[1,`dividerTemplate`],divider:[1,`divider`],separator:[1,`separator`],currentLast:[1,`currentLast`],interactive:[1,`interactive`],compact:[1,`compact`],menuParent:[1,`menuParent`]},outputs:{selected:`selected`},decls:19,vars:2,consts:[[`separatorTemplate`,``],[`item`,``],[`regularItem`,``],[`compactItem`,``],[`overflowSymbol`,``],[`overflowMenu`,``],[`currentText`,`bxTruncate`],[`descriptionText`,`bxTruncate`],[`actionText`,`bxTruncate`],[`linkText`,`bxTruncate`],[`staticText`,`bxTruncate`],[1,`bx-breadcrumb-trail`],[1,`bx-breadcrumb-overflow-entry`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`ngTemplateOutlet`],[`type`,`button`,1,`bx-breadcrumb-action`,`bx-breadcrumb-overflow-trigger`,3,`bxMenuTrigger`,`menuHover`,`menuParent`,`menuPlacement`,`menuLabel`],[1,`bx-breadcrumb-overflow-description`,3,`bxTooltip`,`bxTooltipHover`,`placement`],[`size`,`16`,`aria-hidden`,`true`,1,`bx-breadcrumb-divider`,3,`name`,`contentTemplate`],[`aria-hidden`,`true`,1,`bx-breadcrumb-divider`],[`aria-current`,`page`,1,`bx-breadcrumb-current`],[`type`,`button`,1,`bx-breadcrumb-action`,3,`disabled`],[1,`bx-breadcrumb-action`,3,`routerLink`],[`type`,`button`,1,`bx-breadcrumb-action`,3,`click`,`disabled`],[1,`bx-breadcrumb-action`,3,`click`,`routerLink`],[`aria-current`,`page`,`bxTooltipTouch`,`longpress`,1,`bx-breadcrumb-current`,3,`bxTruncate`,`bxTooltip`],[`bxTooltipTouch`,`longpress`,3,`bxTruncate`,`bxTooltip`],[`type`,`button`,`bxTooltipTouch`,`longpress`,1,`bx-breadcrumb-action`,3,`bxTooltip`,`disabled`],[`bxTooltipTouch`,`longpress`,1,`bx-breadcrumb-action`,3,`bxTooltip`,`routerLink`],[`type`,`button`,`bxTooltipTouch`,`longpress`,1,`bx-breadcrumb-action`,3,`click`,`bxTooltip`,`disabled`],[3,`bxTruncate`],[`bxTooltipTouch`,`longpress`,1,`bx-breadcrumb-action`,3,`click`,`bxTooltip`,`routerLink`],[`name`,`ellipsis`,`size`,`16`,`aria-hidden`,`true`],[1,`bx-breadcrumb-overflow-menu`],[3,`label`,`wrapLabel`,`disabled`],[`role`,`menuitem`,1,`bx-breadcrumb-menu-item`,3,`routerLink`],[1,`bx-breadcrumb-menu-description`],[3,`action`,`label`,`wrapLabel`,`disabled`],[`role`,`menuitem`,1,`bx-breadcrumb-menu-item`,3,`click`,`routerLink`]],template:function(e,n){e&1&&(bo(0,`nav`)(1,`ol`,11),ab(2,Eu,3,5,`li`,null,ma),od$1(4,ku,4,2,`li`,12),ab(5,zu,3,5,`li`,null,ma),Go$1()(),rd$1(7,Hu,2,1,`ng-template`,null,0,RA)(9,Fu,1,4,`ng-template`,null,1,RA)(11,qu,5,1,`ng-template`,null,2,RA)(13,Qu,5,1,`ng-template`,null,3,RA)(15,tp,2,1,`ng-template`,null,4,RA)(17,op,3,0,`ng-template`,null,5,RA)),e&2&&(vo(`aria-label`,n.resolvedLabel()),Xl$1(2),cb(n.leading()),Xl$1(2),nd$1(n.truncated()?4:-1),Xl$1(),cb(n.trailing()))},dependencies:[Ta,Ui,ZC,Ki,Gi,dn,Pt,ct,on],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  color: var(--%NS%bx-text-secondary);
  font: inherit;
}
.bx-breadcrumb-trail[_ngcontent-%COMP%], 
.bx-breadcrumb-trail[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-breadcrumb-gap, var(--%NS%bx-space-2, 0.5rem));
  min-inline-size: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}
.bx-breadcrumb-trail[_ngcontent-%COMP%] {
  flex-wrap: wrap;
}
.bx-breadcrumb-trail[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {
  max-inline-size: 100%;
  overflow-wrap: anywhere;
}
.is-compact[_nghost-%COMP%]   nav[_ngcontent-%COMP%], 
.is-compact[_nghost-%COMP%]   .bx-breadcrumb-trail[_ngcontent-%COMP%] {
  block-size: 100%;
}
.is-compact[_nghost-%COMP%]   .bx-breadcrumb-trail[_ngcontent-%COMP%] {
  flex-wrap: nowrap;
}
.is-compact[_nghost-%COMP%]   .bx-breadcrumb-trail[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  max-inline-size: 100%;
  block-size: 100%;
}
.is-compact[_nghost-%COMP%]   .bx-breadcrumb-trail[_ngcontent-%COMP%]    > .bx-breadcrumb-overflow-entry[_ngcontent-%COMP%] {
  flex: none;
}
.is-compact[_nghost-%COMP%]   .bx-breadcrumb-action[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  max-inline-size: 100%;
  padding-block: 0;
  line-height: inherit;
}
.is-compact[_nghost-%COMP%]   .bx-breadcrumb-overflow-trigger[_ngcontent-%COMP%], 
.is-compact[_nghost-%COMP%]   .bx-breadcrumb-overflow-description[_ngcontent-%COMP%] {
  min-block-size: 0;
  block-size: 100%;
}
.bx-breadcrumb-action[_ngcontent-%COMP%] {
  border: 0;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: inherit;
  padding: var(--%NS%bx-breadcrumb-action-padding, var(--%NS%bx-space-1, 0.25rem) 0);
  min-inline-size: 0;
  font: inherit;
  text-align: start;
  text-decoration: none;
  overflow-wrap: anywhere;
  cursor: pointer;
}
.bx-breadcrumb-action[_ngcontent-%COMP%]:hover:not(:disabled, [aria-disabled=true]) {
  color: var(--%NS%bx-text-accent);
  text-decoration: underline;
}
.bx-breadcrumb-action[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.bx-breadcrumb-action[_ngcontent-%COMP%]:disabled, 
.bx-breadcrumb-action[aria-disabled=true][_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: default;
}
.bx-breadcrumb-current[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-primary);
  font-weight: 600;
  overflow-wrap: anywhere;
}
.bx-breadcrumb-divider[_ngcontent-%COMP%] {
  flex: none;
}
.bx-breadcrumb-divider[_ngcontent-%COMP%]:dir(rtl) {
  transform: scaleX(-1);
}
.bx-breadcrumb-overflow-trigger[_ngcontent-%COMP%], 
.bx-breadcrumb-overflow-description[_ngcontent-%COMP%] {
  flex: none;
  min-inline-size: var(--%NS%bx-space-8, 2rem);
  min-block-size: var(--%NS%bx-space-8, 2rem);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.bx-breadcrumb-overflow-menu[_ngcontent-%COMP%] {
  --%NS%bx-menu-min-width: min(var(--%NS%bx-breadcrumb-overflow-min-width, 12rem), calc(100dvw - var(--%NS%bx-space-4, 1rem)));
  max-inline-size: min(var(--%NS%bx-breadcrumb-overflow-max-width, 24rem), 100dvw - var(--%NS%bx-space-4, 1rem));
  max-block-size: min(var(--%NS%bx-breadcrumb-overflow-max-height, 20rem), 100dvh - var(--%NS%bx-space-8, 2rem));
  overflow: auto;
  overscroll-behavior: contain;
  font-size: var(--%NS%bx-breadcrumb-overflow-font-size, 0.875rem);
  color: var(--%NS%bx-text-primary);
}
.bx-breadcrumb-menu-item[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: transparent !important;
  border: none;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  text-align: start;
  border-radius: var(--%NS%bx-menu-item-radius, var(--%NS%bx-menu-inner-radius, max(0px, var(--%NS%bx-rounded-lg, 0.75rem) - (calc(var(--%NS%bx-space-1, 0.25rem) + var(--%NS%bx-border-width, 1px))))));
  color: var(--%NS%bx-menu-item-color, var(--%NS%bx-text-primary));
  --%NS%bx-glass-decoration-opacity: 0;
  --%NS%bx-glass-rim-visibility: 0;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  box-shadow: none;
}
.bx-breadcrumb-menu-item[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-breadcrumb-menu-item.bx-menu-item-animated[_ngcontent-%COMP%] {
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
}
.bx-breadcrumb-menu-item.bx-menu-item-animated[_ngcontent-%COMP%]   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  transition: color 0.1s ease-in-out;
}
.bx-breadcrumb-menu-item[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: var(--%NS%bx-bg-element-hover) !important;
}
.bx-breadcrumb-menu-item[_ngcontent-%COMP%]:hover:not(.is-disabled)   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: inherit;
  opacity: 1;
}
.bx-breadcrumb-menu-item[_ngcontent-%COMP%]:active:not(.is-disabled) {
  background: var(--%NS%bx-bg-element-active) !important;
}
.bx-breadcrumb-menu-item[_ngcontent-%COMP%]:active:not(.is-disabled)   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: inherit;
  opacity: 1;
}
.bx-breadcrumb-menu-item.is-danger[_ngcontent-%COMP%] {
  color: var(--%NS%bx-menu-item-color, var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger)));
}
.bx-breadcrumb-menu-item.is-danger[_ngcontent-%COMP%]   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: var(--%NS%bx-menu-item-color, var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger)));
  opacity: 0.7;
}
.bx-breadcrumb-menu-item.is-danger[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: var(--%NS%bx-bg-danger-hover) !important;
}
.bx-breadcrumb-menu-item.is-danger[_ngcontent-%COMP%]:active:not(.is-disabled) {
  background: var(--%NS%bx-bg-danger-active) !important;
}
.bx-breadcrumb-menu-item.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
.bx-breadcrumb-menu-item[aria-disabled=true][_ngcontent-%COMP%] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
.bx-breadcrumb-menu-item[_ngcontent-%COMP%] {
  text-decoration: none;
  text-align: start;
  white-space: normal;
  overflow-wrap: anywhere;
  line-height: 1.4;
}
.bx-breadcrumb-menu-description[_ngcontent-%COMP%] {
  display: block;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  overflow-wrap: anywhere;
  line-height: 1.4;
}`]})};var sp=[[[`bx-page-header`]],`*`,[[`bx-page-footer`]]];var lp=[`bx-page-header`,`*`,`bx-page-footer`];function dp(i,t){if(i&1&&sd$1(0,`bx-breadcrumb-trail`,1),i&2){let e=Wo$1();xo(`items`,e.resolvedBreadcrumbs())(`config`,e.breadcrumbConfig())(`ariaLabel`,e.resolvedBreadcrumbLabel())}}function cp(i,t){if(i&1&&sd$1(0,`bx-page-header`,2),i&2){let e=Wo$1();xo(`sectionTitle`,e.sectionTitle())(`pageTitle`,e.pageTitle())(`pageDescription`,e.pageDescription())(`autoResolveTitlesFromNavigation`,e.autoResolveTitlesFromNavigation())}}var rl=class i{i18n=b(VQ,{optional:!0});pageNavigation=b(Ji,{optional:!0});resolvedBreadcrumbs=G(()=>{let t=this.breadcrumbs()??this.pageNavigation?.().breadcrumbs??[],e=Math.max(0,Math.trunc(this.breadcrumbsAfter())||0);return this.showBreadcrumbs()&&t.length>e?t.map(n=>s(r({},n),{label:LQ(n.label,this.i18n)})):[]});resolvedBreadcrumbLabel=G(()=>LQ(this.breadcrumbLabel(),this.i18n));projectedHeader=Lk(ln);size=ee(`xl`);sectionTitle=ee(void 0);pageTitle=ee(void 0);pageDescription=ee(void 0);autoResolveTitlesFromNavigation=ee(!0);breadcrumbs=ee(void 0);showBreadcrumbs=ee(!0);breadcrumbsAfter=ee(1);breadcrumbLabel=ee(`Breadcrumbs`);breadcrumbConfig=ee({});static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-page-container`]],contentQueries:function(e,n,r){e&1&&ud$1(r,n.projectedHeader,ln,5),e&2&&fb()},inputs:{size:[1,`size`],sectionTitle:[1,`sectionTitle`],pageTitle:[1,`pageTitle`],pageDescription:[1,`pageDescription`],autoResolveTitlesFromNavigation:[1,`autoResolveTitlesFromNavigation`],breadcrumbs:[1,`breadcrumbs`],showBreadcrumbs:[1,`showBreadcrumbs`],breadcrumbsAfter:[1,`breadcrumbsAfter`],breadcrumbLabel:[1,`breadcrumbLabel`],breadcrumbConfig:[1,`breadcrumbConfig`]},ngContentSelectors:lp,decls:7,vars:3,consts:[[1,`page-layout`,3,`size`],[`separator`,`/`,1,`breadcrumbs`,3,`items`,`config`,`ariaLabel`],[3,`sectionTitle`,`pageTitle`,`pageDescription`,`autoResolveTitlesFromNavigation`],[1,`page-content`]],template:function(e,n){e&1&&(ld$1(sp),bo(0,`bx-container`,0),od$1(1,dp,1,3,`bx-breadcrumb-trail`,1),od$1(2,cp,1,4,`bx-page-header`,2),dd$1(3),bo(4,`div`,3),dd$1(5,1),Go$1(),dd$1(6,2),Go$1()),e&2&&(xo(`size`,n.size()),Xl$1(),nd$1(n.resolvedBreadcrumbs().length?1:-1),Xl$1(),nd$1(n.projectedHeader()?-1:2))},dependencies:[Qi,ln,tr],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  color: var(--%NS%bx-text-primary);
  overflow-wrap: anywhere;
}
.page-layout[_ngcontent-%COMP%] {
  --%NS%bx-container-padding: var(--%NS%bx-page-padding-inline, clamp(var(--%NS%bx-space-4, 1rem), 3vw, var(--%NS%bx-space-10, 2.5rem)));
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-page-gap, var(--%NS%bx-space-8, 2rem));
  padding-block: var(--%NS%bx-page-padding-block, clamp(var(--%NS%bx-space-4, 1rem), 3vw, var(--%NS%bx-space-10, 2.5rem)));
}
.page-content[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.breadcrumbs[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}`]})};var up=[`*`];var al=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-page-content`]],ngContentSelectors:up,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  overflow-wrap: anywhere;
}`]})};var pp=[`*`];var ol=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-page-footer`]],ngContentSelectors:pp,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  overflow-wrap: anywhere;
}`]})};var cn=class i{nativeElement=b(ke).nativeElement;destroyRef=b(ge);ngZone=b(le);i18n=b(VQ,{optional:!0});isReducedMotion=b(Br$1).isReducedMotion;active=$(!1);recentActivity=$(!1);referenceSize=$(null);containerSize=$(null);originalSize=G(()=>{let t=this.resizeInitialSize()??this.referenceSize()??this.resizeValue();return Number.isFinite(t)?Math.max(0,t):0});horizontal=G(()=>this.resizeEdge()===`left`||this.resizeEdge()===`right`);accessibleLabel=G(()=>LQ(this.resizeLabel(),this.i18n));boundedValue=G(()=>this.clamp(this.resizeValue()));finiteMax=G(()=>Number.isFinite(this.maxSize())?this.maxSize():null);resizing=this.active.asReadonly();indicatorVisible=G(()=>!this.resizeDisabled()&&(this.recentActivity()||this.active()));minSize=G(()=>{let t=this.resizeMinSize(),e=t!==void 0&&Number.isFinite(t)?Math.max(0,t):this.originalSize()*.3;return Math.min(this.maxSize(),this.resizeDisableShrink()?Math.max(e,this.originalSize()):e)});maxSize=G(()=>{let t=this.resizeMaxSize(),e=this.containerSize()??Number.POSITIVE_INFINITY,n=t!==void 0&&Number.isFinite(t)?Math.max(0,t):e*.5;return Math.min(e,n)});resizeValue=_z(0);resizeEdge=ee(`right`);resizeTarget=ee(void 0);resizeContainer=ee(void 0);resizeActivityContainer=ee(void 0);resizeMinSize=ee(void 0);resizeMaxSize=ee(void 0);resizeInitialSize=ee(void 0);resizeDisableShrink=ee(!0);resizeDisabled=ee(!1,{transform:Ye});resizeLabel=ee(`Resize`);resizeControls=ee(void 0);resizeStep=ee(10);resizeIdleDelay=ee(2e3);resizeStart=Pk();resizeEnd=Pk();mounted=!1;previousEdge=`right`;session;pointerFrame;pendingPointerValue;disconnectGeometry;disconnectGesture;constructor(){er$1(()=>{this.mounted=!0,this.observeGeometry();let t=e=>this.onPointerDown(e);this.ngZone.runOutsideAngular(()=>this.nativeElement.addEventListener(`pointerdown`,t)),this.destroyRef.onDestroy(()=>this.nativeElement.removeEventListener(`pointerdown`,t))}),We(()=>{let t=this.resizeEdge(),e=this.resizeDisabled();de(()=>{(e||t!==this.previousEdge)&&this.finish(!0),(t===`left`||t===`right`)!=(this.previousEdge===`left`||this.previousEdge===`right`)&&this.referenceSize.set(null),this.previousEdge=t})}),Vk(t=>{this.resizeTarget(),this.resizeContainer(),this.resizeActivityContainer(),this.resizeEdge(),this.resizeDisabled(),this.resizeIdleDelay(),de(()=>{if(!this.mounted)return;t(this.observeGeometry())})}),this.destroyRef.onDestroy(()=>{this.finish(!0,!1),this.disconnectGeometry?.()})}onKeydown(t){if(t.key===`Escape`&&this.session){t.preventDefault(),t.stopPropagation(),this.finish(!0);return}if(this.resizeDisabled()||this.session?.source===`pointer`||t.altKey||t.ctrlKey||t.metaKey)return;if(t.key===`Enter`){t.preventDefault(),t.stopPropagation(),t.repeat||this.reset(`keyboard`);return}let e=this.horizontal(),n=e?`ArrowLeft`:`ArrowUp`,r=e?`ArrowRight`:`ArrowDown`;if(![n,r,`Home`,`End`].includes(t.key))return;if(t.preventDefault(),t.stopPropagation(),!this.session){let l=this.begin(`keyboard`);this.commit(l)}let a=this.resizeStep(),o=(Number.isFinite(a)&&a>0?a:10)*(t.shiftKey?5:1),s=this.resizeEdge()===`left`||this.resizeEdge()===`top`?-1:1;t.key===`Home`?this.commit(this.minSize()):t.key===`End`?Number.isFinite(this.maxSize())&&this.commit(this.maxSize()):this.commit(this.resizeValue()+(t.key===r?o:-o)*s)}onKeyup(t){this.session?.source===`keyboard`&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(t.key)&&this.finish(!1)}onBlur(){this.session?.source===`keyboard`&&this.finish(!1)}onDoubleClick(t){this.resizeDisabled()||t.button!==0||(t.preventDefault(),t.stopPropagation(),this.reset(`pointer`))}reset(t){this.finish(!1),this.begin(t),this.commit(this.originalSize()),this.finish(!1)}observeGeometry(){this.disconnectGeometry?.();let t=this.resizeContainer()??this.resizeTarget()?.parentElement??this.nativeElement.parentElement,e=this.nativeElement.ownerDocument.defaultView;if(!t||!e)return this.containerSize.set(null),()=>{};let n=()=>{let r=this.horizontal()?t.clientWidth:t.clientHeight;r!==this.containerSize()&&this.ngZone.run(()=>this.containerSize.set(r))};return this.ngZone.runOutsideAngular(()=>{let r=typeof ResizeObserver>`u`?void 0:new ResizeObserver(n),a=this.observeActivity(this.resizeActivityContainer()??t,e);r?r.observe(t):e.addEventListener(`resize`,n),n();let o=()=>{r?.disconnect(),a(),r||e.removeEventListener(`resize`,n)};return this.disconnectGeometry=o,o})}observeActivity(t,e){if(this.resizeDisabled())return()=>{};let n=this.resizeIdleDelay(),r=Number.isFinite(n)?Math.max(0,n):2e3,a,o=()=>{this.recentActivity()||this.ngZone.run(()=>this.recentActivity.set(!0)),e.clearTimeout(a),r>0&&(a=e.setTimeout(()=>{a=void 0,this.destroyRef.destroyed||this.ngZone.run(()=>this.recentActivity.set(!1))},r))};return r>0&&(t.addEventListener(`pointermove`,o,{passive:!0}),t.addEventListener(`pointerdown`,o,{passive:!0})),o(),()=>{e.clearTimeout(a),t.removeEventListener(`pointermove`,o),t.removeEventListener(`pointerdown`,o),this.destroyRef.destroyed||this.ngZone.run(()=>this.recentActivity.set(!1))}}begin(t,e){let n=this.resizeTarget()?.getBoundingClientRect(),r=n?this.horizontal()?n.width:n.height:this.resizeValue(),a=this.nativeElement.ownerDocument.documentElement.style;this.referenceSize()===null&&this.referenceSize.set(Math.max(0,Number.isFinite(r)?r:0));let o=this.clamp(r);return this.session={source:t,initialValue:o,position:e?this.horizontal()?e.clientX:e.clientY:0,pointerId:e?.pointerId,userSelect:a.getPropertyValue(`user-select`),userSelectPriority:a.getPropertyPriority(`user-select`),cursor:a.getPropertyValue(`cursor`),cursorPriority:a.getPropertyPriority(`cursor`)},this.ngZone.run(()=>{this.active.set(!0),this.resizeStart.emit({value:o,initialValue:o,source:t,canceled:!1})}),t===`pointer`&&(a.setProperty(`user-select`,`none`,`important`),a.setProperty(`cursor`,this.horizontal()?`col-resize`:`row-resize`,`important`)),o}onPointerDown(t){if(this.resizeDisabled()||this.session||!t.isPrimary||t.button!==0)return;t.preventDefault(),this.nativeElement.focus({preventScroll:!0}),this.begin(`pointer`,t);let e=this.nativeElement.ownerDocument,n=p=>{let f=this.session;if(!f||p.pointerId!==f.pointerId)return;p.preventDefault();let y=this.horizontal()?p.clientX:p.clientY,E=this.resizeEdge()===`left`||this.resizeEdge()===`top`?-1:1;this.pendingPointerValue=f.initialValue+(y-f.position)*E,this.pointerFrame===void 0&&(this.pointerFrame=e.defaultView?.requestAnimationFrame(()=>this.flushPointer()))},r=p=>{p.pointerId===this.session?.pointerId&&(n(p),this.flushPointer(),this.finish(!1))},a=p=>{p.pointerId===this.session?.pointerId&&this.finish(!0)},o=p=>{p.key===`Escape`&&(p.preventDefault(),p.stopPropagation(),this.finish(!0))},s=p=>p.preventDefault(),l=()=>{this.session?.source===`pointer`&&this.finish(!0)},u=()=>this.finish(!0);e.defaultView?.addEventListener(`blur`,u),e.addEventListener(`pointermove`,n,{capture:!0,passive:!1}),e.addEventListener(`pointerup`,r,!0),e.addEventListener(`pointercancel`,a,!0),e.addEventListener(`keydown`,o,!0),e.addEventListener(`selectstart`,s,!0),this.nativeElement.addEventListener(`lostpointercapture`,l),this.disconnectGesture=()=>{e.defaultView?.removeEventListener(`blur`,u),e.removeEventListener(`pointermove`,n,!0),e.removeEventListener(`pointerup`,r,!0),e.removeEventListener(`pointercancel`,a,!0),e.removeEventListener(`keydown`,o,!0),e.removeEventListener(`selectstart`,s,!0),this.nativeElement.removeEventListener(`lostpointercapture`,l)};try{this.nativeElement.setPointerCapture(t.pointerId)}catch{}}clamp(t){let e=Number.isFinite(t)?t:this.minSize();return Math.max(this.minSize(),Math.min(this.maxSize(),e))}commit(t){let e=this.clamp(Math.round(this.clamp(t)*100)/100);e!==this.resizeValue()&&this.ngZone.run(()=>this.resizeValue.set(e))}flushPointer(){this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.pointerFrame??0),this.pointerFrame=void 0;let t=this.pendingPointerValue;this.pendingPointerValue=void 0,t!==void 0&&this.session&&this.commit(t)}event(t){return{value:this.clamp(this.resizeValue()),initialValue:this.session?.initialValue??this.resizeValue(),source:this.session?.source??`pointer`,canceled:t}}finish(t,e=!0){let n=this.session;if(!n)return;this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.pointerFrame??0),this.pointerFrame=void 0,this.pendingPointerValue=void 0,t&&e&&this.commit(n.initialValue);let r=this.event(t);this.session=void 0,this.disconnectGesture?.(),this.disconnectGesture=void 0;let a=this.nativeElement.ownerDocument.documentElement.style;n.source===`pointer`&&(n.userSelect?a.setProperty(`user-select`,n.userSelect,n.userSelectPriority):a.removeProperty(`user-select`),n.cursor?a.setProperty(`cursor`,n.cursor,n.cursorPriority):a.removeProperty(`cursor`),n.pointerId!==void 0&&this.nativeElement.hasPointerCapture?.(n.pointerId)&&this.nativeElement.releasePointerCapture(n.pointerId)),this.ngZone.run(()=>{this.active.set(!1),e&&this.resizeEnd.emit(r)})}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxResizeHandle`,``]],hostAttrs:[`role`,`separator`,`aria-keyshortcuts`,`Enter`,1,`bx-resize-handle`],hostVars:21,hostBindings:function(e,n){e&1&&br(`keydown`,function(a){return n.onKeydown(a)})(`keyup`,function(a){return n.onKeyup(a)})(`dblclick`,function(a){return n.onDoubleClick(a)})(`blur`,function(){return n.onBlur()}),e&2&&(vo(`tabindex`,n.resizeDisabled()?-1:0)(`aria-disabled`,n.resizeDisabled()?!0:null)(`aria-label`,n.accessibleLabel())(`aria-controls`,n.resizeControls()??n.resizeTarget()?.id??null)(`aria-orientation`,n.horizontal()?`vertical`:`horizontal`)(`aria-valuenow`,n.boundedValue())(`aria-valuemin`,n.minSize())(`aria-valuemax`,n.finiteMax())(`data-bx-resize-axis`,n.horizontal()?`horizontal`:`vertical`),ka(`touch-action`,`none`)(`user-select`,`none`)(`cursor`,n.resizeDisabled()?`default`:n.horizontal()?`col-resize`:`row-resize`),tr$1(`bx-resizing`,n.resizing())(`bx-resize-visible`,n.indicatorVisible())(`bx-resize-reduced-motion`,n.isReducedMotion()))},inputs:{resizeValue:[1,`resizeValue`],resizeEdge:[1,`resizeEdge`],resizeTarget:[1,`resizeTarget`],resizeContainer:[1,`resizeContainer`],resizeActivityContainer:[1,`resizeActivityContainer`],resizeMinSize:[1,`resizeMinSize`],resizeMaxSize:[1,`resizeMaxSize`],resizeInitialSize:[1,`resizeInitialSize`],resizeDisableShrink:[1,`resizeDisableShrink`],resizeDisabled:[1,`resizeDisabled`],resizeLabel:[1,`resizeLabel`],resizeControls:[1,`resizeControls`],resizeStep:[1,`resizeStep`],resizeIdleDelay:[1,`resizeIdleDelay`]},outputs:{resizeValue:`resizeValueChange`,resizeStart:`resizeStart`,resizeEnd:`resizeEnd`},exportAs:[`bxResizeHandle`]})};var Fn=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSidePanelFooter`,``]]})};var jn=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSidePanelHeader`,``]]})};var Vn=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSidePanelBanner`,``]]})};var nr=new T(`BX_SIDE_PANEL_LAYOUT`);var mp=[`layer`];var gp=[`surface`];var bp=[[[``,`bxSidePanelBanner`,``]],[[``,`bxIconStart`,``]],[[``,`bxSidePanelHeader`,``]],`*`,[[``,`bxSidePanelFooter`,``]]];var hp=[`[bxSidePanelBanner]`,`[bxIconStart]`,`[bxSidePanelHeader]`,`*`,`[bxSidePanelFooter]`];function fp(i,t){if(i&1){let e=pb();bo(0,`div`,12),br(`click`,function(){al$1(e);let r=Wo$1();return cl$1(r.onBackdrop())}),Go$1()}}function vp(i,t){if(i&1&&sd$1(0,`bx-icon`,13),i&2){let e=t;xo(`name`,e.name)(`contentTemplate`,e.template)(`size`,e.size??`24`)(`color`,e.color)(`bgColor`,e.bgColor)(`strokeWidth`,e.strokeWidth)}}function yp(i,t){if(i&1&&od$1(0,vp,1,6,`bx-icon`,13),i&2){let e,n=Wo$1();nd$1((e=n.headerIcon())?0:-1,e)}}function xp(i,t){if(i&1){let e=pb();bo(0,`button`,14),br(`click`,function(){al$1(e);let r=Wo$1();return cl$1(r.dismiss())}),sd$1(1,`bx-icon`,15),Go$1()}if(i&2){let e=Wo$1();vo(`aria-label`,e.closeText())}}function Sp(i,t){if(i&1){let e=pb();bo(0,`div`,16),br(`resizeStart`,function(){al$1(e);let r=Wo$1();return cl$1(r.onResizeStart())})(`resizeValueChange`,function(r){al$1(e);let a=Wo$1();return cl$1(a.width.set(r))})(`resizeEnd`,function(r){al$1(e);let a=Wo$1();return cl$1(a.onResizeEnd(r))}),Go$1()}if(i&2){let e=Wo$1(),n=FT(1),r=FT(4);ka(`--%NS%bx-panel-rendered-width`,e.measuredWidth(),`px`),tr$1(`resize-right`,e.placement()===`left`)(`resize-left`,e.placement()===`right`),xo(`resizeEdge`,e.placement()===`left`?`right`:`left`)(`resizeValue`,e.resizeValue())(`resizeTarget`,r)(`resizeContainer`,n)(`resizeActivityContainer`,e.resizeActivityContainer())(`resizeMinSize`,e.resizeMinWidth())(`resizeMaxSize`,e.resizeMaxWidth())(`resizeInitialSize`,e.resizeInitialWidth())(`resizeDisableShrink`,e.resizeDisableShrink())(`resizeDisabled`,!e.open())(`resizeLabel`,e.resizeLabel())(`resizeIdleDelay`,e.resizeIdleDelay())(`resizeControls`,e.panelId()),vo(`inert`,e.open()?null:``)(`aria-hidden`,e.open()?null:!0)}}var sl=class i{nativeElement=b(ke).nativeElement;destroyRef=b(ge);ngZone=b(le);bxA11yService=b(Br$1);windowDimensionsService=b(Fd$1);layout=b(nr,{optional:!0});i18n=b(VQ,{optional:!0});resizeHandle=Sz(cn);layer=Sz(`layer`);surface=Sz(`surface`);measuredWidth=$(400);local=G(()=>!!this.layout&&(this.container()===void 0||this.container()===this.layout.nativeElement));reservedWidth=G(()=>!this.open()||this.currentLayoutMode()!==`push`?`0px`:this.resizable()?`calc(${this.resolvedWidth()} + var(--bx-panel-resize-gutter))`:this.resolvedWidth());accessibleName=G(()=>LQ(this.ariaLabel(),this.i18n));closeText=G(()=>LQ(this.closeLabel(),this.i18n));duration=G(()=>{let t=this.animationDuration();return this.bxA11yService.isReducedMotion()||this.resizeHandle()?.resizing()?0:Number.isFinite(t)?Math.max(0,t):175});resolvedWidth=G(()=>{let t=this.width(),e=typeof t==`number`?`${Number.isFinite(t)&&t>0?t:400}px`:t;if(!this.resizable())return e;let n=this.resizeMaxWidth(),r=this.resizeMinWidth(),a=n!==void 0&&Number.isFinite(n)?`min(100%, ${Math.max(0,n)}px)`:`50%`;return`clamp(min(${r!==void 0&&Number.isFinite(r)?`${Math.max(0,r)}px`:`0px`}, ${a}), ${e}, ${a})`});resizeValue=G(()=>{let t=this.width();return typeof t==`number`&&Number.isFinite(t)?t:this.measuredWidth()});resizeActivityContainer=G(()=>{let t=this.container();return typeof t==`object`?t:this.local()&&this.layout?this.layout.nativeElement:this.nativeElement.ownerDocument.documentElement});header=Lk(jn);footer=Lk(Fn);banner=Lk(Vn);currentLayoutMode=G(()=>this.local()?this.windowDimensionsService.resolveResponsiveValue(this.breakpoints()??{},this.layoutMode()):`overlay`);open=_z(!1);panelId=ee(`bx-side-panel-${qK()}`);placement=ee(`right`);headerIcon=ee(void 0);width=_z(400);resizable=ee(!1);resizeMinWidth=ee(void 0);resizeMaxWidth=ee(void 0);resizeInitialWidth=ee(void 0);resizeDisableShrink=ee(!0);resizeLabel=ee(`Resize panel width`);resizeIdleDelay=ee(2e3);container=ee(void 0);layoutMode=ee(`overlay`);breakpoints=ee(void 0);backdrop=ee(!1);closeOnBackdrop=ee(!0);closeOnEscape=ee(!0);showCloseButton=ee(!0);ariaLabel=ee(`Side panel`);closeLabel=ee(`Close panel`);labelledBy=ee(void 0);autoFocus=ee(!0);restoreFocus=ee(!0);animationDuration=ee(175);originalGestureWidth;disconnectWidth;mounted=!1;wasOpen=!1;opener=null;focusFrame;disconnectBounds;disconnectTheme;disconnectLighting;boundContainer;localHosting;disconnectKeyboard;constructor(){er$1(()=>{this.mounted=!0,this.updateHosting(),this.syncOpen(),this.observeWidth();let t=n=>this.onKeydown(n),e=this.nativeElement.ownerDocument;this.ngZone.runOutsideAngular(()=>e.addEventListener(`keydown`,t)),this.disconnectKeyboard=()=>e.removeEventListener(`keydown`,t)}),We(()=>{this.open(),this.mounted&&this.syncOpen()}),Vk(()=>{this.open(),this.container(),this.width(),this.placement(),this.mounted&&(this.currentLayoutMode(),this.updateHosting())}),this.destroyRef.onDestroy(()=>{this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.focusFrame??0),this.returnFocus(),this.disconnectBounds?.(),this.disconnectWidth?.(),this.disconnectKeyboard?.(),this.disconnectTheme?.(),this.disconnectLighting?.(),this.layer()?.nativeElement.remove()})}onResizeStart(){this.originalGestureWidth=this.width()}onResizeEnd(t){t.canceled&&this.originalGestureWidth!==void 0&&this.width.set(this.originalGestureWidth),this.originalGestureWidth=void 0}dismiss(){this.open.set(!1)}onKeydown(t){if(t.key!==`Escape`||t.defaultPrevented||!this.closeOnEscape()||!this.open())return;let e=t.target;e instanceof Element&&e.closest(`.cdk-overlay-pane, dialog, [role="dialog"], [role="alertdialog"], [popover]`)||queueMicrotask(()=>{this.destroyRef.destroyed||t.defaultPrevented||!this.open()||!this.closeOnEscape()||this.ngZone.run(()=>this.dismiss())})}onBackdrop(){this.closeOnBackdrop()&&this.dismiss()}syncOpen(){let t=this.open();if(this.wasOpen===t)return;this.wasOpen=t;let e=this.nativeElement.ownerDocument,n=e.defaultView;n?.cancelAnimationFrame(this.focusFrame??0),t?(this.opener=e.activeElement instanceof HTMLElement?e.activeElement:null,this.measureBounds(),this.autoFocus()&&(this.focusFrame=n?.requestAnimationFrame(()=>{!this.destroyRef.destroyed&&this.open()&&this.surface()?.nativeElement.focus({preventScroll:!0})}))):this.returnFocus()}returnFocus(){if(!(!this.restoreFocus()||!this.layer()?.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)))if(this.opener?.isConnected&&!this.opener.closest(`[inert]`))this.opener.focus({preventScroll:!0});else{let t=this.container(),e=typeof t==`object`?t:this.layout?.nativeElement;e?.hasAttribute(`tabindex`)&&e.focus({preventScroll:!0})}}observeWidth(){let t=this.surface()?.nativeElement;if(!t)return;let e=()=>{let n=t.getBoundingClientRect().width;n>0&&Math.abs(n-this.measuredWidth())>=.01&&this.ngZone.run(()=>this.measuredWidth.set(n))};this.ngZone.runOutsideAngular(()=>{let n=typeof ResizeObserver>`u`?void 0:new ResizeObserver(e);n?.observe(t),e(),this.disconnectWidth=()=>n?.disconnect()})}updateHosting(){let t=this.layer()?.nativeElement,e=this.local();if(t){if(this.localHosting!==e){this.disconnectBounds?.(),this.disconnectTheme?.(),this.disconnectLighting?.(),this.disconnectTheme=void 0,this.disconnectLighting=void 0,this.localHosting=e,(e?this.nativeElement:this.nativeElement.ownerDocument.body).append(t),t.classList.toggle(`local-layer`,e);for(let n of[`top`,`left`,`width`,`height`])t.style.removeProperty(n);e||(this.disconnectTheme=BK(this.nativeElement,t),this.disconnectLighting=DR(t,this.nativeElement)),this.bindBounds()}else this.boundContainer!==this.container()&&this.bindBounds();this.measureBounds()}}bindBounds(){if(this.disconnectBounds?.(),this.boundContainer=this.container(),this.local())return;let t=this.nativeElement.ownerDocument,e=t.defaultView;e&&this.ngZone.runOutsideAngular(()=>{let n=()=>this.measureBounds(),r=o=>{let s=this.container(),l=o.target;typeof s==`object`&&l instanceof Node&&l.contains(s)&&n()},a=typeof ResizeObserver>`u`?void 0:new ResizeObserver(n);if(typeof this.boundContainer==`object`)for(let o=this.boundContainer;o;o=o.parentElement)a?.observe(o);t.addEventListener(`scroll`,r,{capture:!0,passive:!0}),e.addEventListener(`resize`,n),e.visualViewport?.addEventListener(`resize`,n),e.visualViewport?.addEventListener(`scroll`,n),this.disconnectBounds=()=>{a?.disconnect(),t.removeEventListener(`scroll`,r,!0),e.removeEventListener(`resize`,n),e.visualViewport?.removeEventListener(`resize`,n),e.visualViewport?.removeEventListener(`scroll`,n)}})}measureBounds(){if(this.local()||!this.open())return;let t=this.nativeElement.ownerDocument.defaultView,e=this.layer()?.nativeElement;if(!t||!e)return;let n=t.visualViewport,r=n?.offsetLeft??0,a=n?.offsetTop??0,o=r+(n?.width??t.innerWidth),s=a+(n?.height??t.innerHeight),l=this.container(),u=typeof l==`object`?l.getBoundingClientRect():void 0,p=Math.max(r,u?.left??r),f=Math.max(a,u?.top??a),y=Math.min(o,u?.right??o),E=Math.min(s,u?.bottom??s);e.style.left=`${p}px`,e.style.top=`${f}px`,e.style.width=`${Math.max(0,y-p)}px`,e.style.height=`${Math.max(0,E-f)}px`}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-side-panel`]],contentQueries:function(e,n,r){e&1&&ud$1(r,n.header,jn,5)(r,n.footer,Fn,5)(r,n.banner,Vn,5),e&2&&fb(3)},viewQuery:function(e,n){e&1&&Yy(n.resizeHandle,cn,5)(n.layer,mp,5)(n.surface,gp,5),e&2&&fb(3)},hostVars:10,hostBindings:function(e,n){e&2&&(ka(`--%NS%bx-panel-duration`,n.duration(),`ms`)(`inline-size`,n.reservedWidth())(`flex-basis`,n.reservedWidth())(`order`,n.placement()===`left`?0:2),tr$1(`local-panel`,n.local()))},inputs:{open:[1,`open`],panelId:[1,`panelId`],placement:[1,`placement`],headerIcon:[1,`headerIcon`],width:[1,`width`],resizable:[1,`resizable`],resizeMinWidth:[1,`resizeMinWidth`],resizeMaxWidth:[1,`resizeMaxWidth`],resizeInitialWidth:[1,`resizeInitialWidth`],resizeDisableShrink:[1,`resizeDisableShrink`],resizeLabel:[1,`resizeLabel`],resizeIdleDelay:[1,`resizeIdleDelay`],container:[1,`container`],layoutMode:[1,`layoutMode`],breakpoints:[1,`breakpoints`],backdrop:[1,`backdrop`],closeOnBackdrop:[1,`closeOnBackdrop`],closeOnEscape:[1,`closeOnEscape`],showCloseButton:[1,`showCloseButton`],ariaLabel:[1,`ariaLabel`],closeLabel:[1,`closeLabel`],labelledBy:[1,`labelledBy`],autoFocus:[1,`autoFocus`],restoreFocus:[1,`restoreFocus`],animationDuration:[1,`animationDuration`]},outputs:{open:`openChange`,width:`widthChange`},features:[rr$1([{provide:Ae,useValue:{useTopLayer:!0}}])],ngContentSelectors:hp,decls:18,vars:22,consts:[[`layer`,``],[`surface`,``],[1,`panel-layer`],[`aria-hidden`,`true`,1,`panel-backdrop`],[`bxSurface`,``,`tabindex`,`-1`,1,`panel-surface`,3,`id`,`bxSurfaceInteractive`],[1,`panel-banner`,3,`hidden`],[1,`panel-header`,3,`hidden`],[1,`panel-heading`],[`type`,`button`,1,`panel-close`],[1,`panel-body`],[1,`panel-footer`,3,`hidden`],[`bxResizeHandle`,``,1,`panel-resize-handle`,3,`resize-right`,`resize-left`,`--%NS%bx-panel-rendered-width`,`resizeEdge`,`resizeValue`,`resizeTarget`,`resizeContainer`,`resizeActivityContainer`,`resizeMinSize`,`resizeMaxSize`,`resizeInitialSize`,`resizeDisableShrink`,`resizeDisabled`,`resizeLabel`,`resizeIdleDelay`,`resizeControls`],[`aria-hidden`,`true`,1,`panel-backdrop`,3,`click`],[`aria-hidden`,`true`,3,`name`,`contentTemplate`,`size`,`color`,`bgColor`,`strokeWidth`],[`type`,`button`,1,`panel-close`,3,`click`],[`name`,`x`],[`bxResizeHandle`,``,1,`panel-resize-handle`,3,`resizeStart`,`resizeValueChange`,`resizeEnd`,`resizeEdge`,`resizeValue`,`resizeTarget`,`resizeContainer`,`resizeActivityContainer`,`resizeMinSize`,`resizeMaxSize`,`resizeInitialSize`,`resizeDisableShrink`,`resizeDisabled`,`resizeLabel`,`resizeIdleDelay`,`resizeControls`]],template:function(e,n){e&1&&(ld$1(bp),bo(0,`div`,2,0),od$1(2,fp,1,0,`div`,3),bo(3,`aside`,4,1)(5,`div`,5),dd$1(6),Go$1(),bo(7,`div`,6)(8,`div`,7),dd$1(9,1,null,yp,1,1),dd$1(11,2),Go$1(),od$1(12,xp,2,1,`button`,8),Go$1(),bo(13,`div`,9),dd$1(14,3),Go$1(),bo(15,`div`,10),dd$1(16,4),Go$1()(),od$1(17,Sp,1,21,`div`,11),Go$1()),e&2&&(ka(`--%NS%bx-panel-duration`,n.duration(),`ms`),tr$1(`is-open`,n.open()),Xl$1(2),nd$1(n.backdrop()?2:-1),Xl$1(),ka(`inline-size`,n.resolvedWidth()),tr$1(`panel-left`,n.placement()===`left`)(`panel-right`,n.placement()===`right`),xo(`id`,n.panelId())(`bxSurfaceInteractive`,!1),vo(`inert`,n.open()?null:``)(`aria-hidden`,n.open()?null:`true`)(`aria-label`,n.labelledBy()?null:n.accessibleName())(`aria-labelledby`,n.labelledBy()),Xl$1(2),xo(`hidden`,!n.banner()),Xl$1(2),xo(`hidden`,!n.header()&&!n.headerIcon()&&!n.showCloseButton()),Xl$1(5),nd$1(n.showCloseButton()?12:-1),Xl$1(3),xo(`hidden`,!n.footer()),Xl$1(2),nd$1(n.resizable()?17:-1))},dependencies:[GC,ZC,cn],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-panel-resize-gutter: var(--%NS%bx-space-6, 1.5rem);
  display: contents;
}
.local-panel[_nghost-%COMP%] {
  display: block;
  flex: 0 0 0;
  min-inline-size: 0;
  max-inline-size: 100%;
  overflow: visible;
  transition: flex-basis var(--%NS%bx-panel-duration, 175ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1), inline-size var(--%NS%bx-panel-duration, 175ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}
.panel-layer[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  z-index: var(--%NS%bx-panel-z-index, 300);
  pointer-events: none;
  overflow: clip;
  visibility: hidden;
  transition: visibility 0s linear var(--%NS%bx-panel-duration, 175ms);
}
.panel-layer.is-open[_ngcontent-%COMP%] {
  visibility: visible;
  transition-delay: 0s;
}
.panel-layer.local-layer[_ngcontent-%COMP%] {
  position: absolute;
}
.panel-surface[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-inline-size: 0;
  min-block-size: 0;
  overflow: hidden;
  --%NS%bx-glass-surface: var(--%NS%bx-panel-bg, var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface)));
  --%NS%bx-glass-text: var(--%NS%bx-panel-text, var(--%NS%bx-modal-text, var(--%NS%bx-text-primary)));
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  --%NS%bx-glass-min-opacity: var(--%NS%bx-panel-material-opacity, clamp(0.52, var(--%NS%bx-glass-material-opacity, 0.4561) + 0.45, 1));
  --%NS%bx-glass-rim-opacity: 1;
  background: var(--%NS%bx-panel-bg, var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface)));
  color: var(--%NS%bx-panel-text, var(--%NS%bx-modal-text, var(--%NS%bx-text-primary)));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  box-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  border-radius: 0;
  position: absolute;
  inset-block: 0;
  max-inline-size: 100%;
  padding: var(--%NS%bx-panel-padding, var(--%NS%bx-space-4, 1rem));
  gap: var(--%NS%bx-panel-gap, var(--%NS%bx-space-4, 1rem));
  transition: transform var(--%NS%bx-panel-duration, 175ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  outline: none;
}
.panel-surface.panel-left[_ngcontent-%COMP%] {
  left: 0;
  transform: translateX(-100%);
}
.panel-surface.panel-right[_ngcontent-%COMP%] {
  right: 0;
  transform: translateX(100%);
}
.is-open[_ngcontent-%COMP%]    > .panel-surface[_ngcontent-%COMP%] {
  transform: translateX(0);
  pointer-events: auto;
}
.panel-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-shrink: 0;
  min-inline-size: 0;
  align-items: flex-start;
  gap: var(--%NS%bx-space-8, 2rem);
  min-block-size: 2rem;
  padding-block-end: var(--%NS%bx-space-4, 1rem);
  border-block-end: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
}
.panel-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex: 1;
  min-inline-size: 0;
  gap: var(--%NS%bx-space-4, 1rem);
  font-weight: bold;
  font-size: 1.25rem;
  overflow-wrap: anywhere;
}
.panel-heading[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.panel-close[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: var(--%NS%bx-panel-close-size, 2rem);
  block-size: var(--%NS%bx-panel-close-size, 2rem);
  padding: 0;
  border: none;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: inherit;
  cursor: pointer;
}
.panel-close[_ngcontent-%COMP%]:hover {
  background: var(--%NS%bx-bg-element-hover);
}
.panel-close[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.panel-banner[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-shrink: 0;
  min-inline-size: 0;
  align-items: flex-start;
  gap: var(--%NS%bx-space-8, 2rem);
  min-block-size: 2rem;
  padding-block-end: var(--%NS%bx-space-4, 1rem);
  border-block-end: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
}
.panel-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-shrink: 0;
  flex-wrap: wrap;
  border-block-start: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  padding-block-start: var(--%NS%bx-space-4, 1rem);
}
.panel-body[_ngcontent-%COMP%] {
  flex: 1;
  min-block-size: 0;
  min-inline-size: 0;
  overflow-block: auto;
  overflow-inline: clip;
  overscroll-behavior: contain;
}
.panel-backdrop[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: var(--%NS%bx-panel-backdrop, var(--%NS%bx-modal-backdrop-background, rgba(0, 0, 0, 0.32)));
  opacity: 0;
  transition: opacity var(--%NS%bx-panel-duration, 175ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}
.is-open[_ngcontent-%COMP%]    > .panel-backdrop[_ngcontent-%COMP%] {
  pointer-events: auto;
  opacity: 1;
}
[hidden][_ngcontent-%COMP%] {
  display: none;
}
@media (prefers-reduced-motion: reduce) {
  .local-panel[_nghost-%COMP%] {
    transition-duration: 0s;
  }
  .panel-layer[_ngcontent-%COMP%] {
    --%NS%bx-panel-duration: 0ms !important;
  }
}
.panel-resize-handle[_ngcontent-%COMP%] {
  outline: none;
}
.panel-resize-handle[_ngcontent-%COMP%]::before, 
.panel-resize-handle[_ngcontent-%COMP%]::after {
  transition-property:
    opacity,
    background-color,
    color;
  transition-duration: calc(var(--%NS%bx-resize-grip-duration, 150ms) * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
  content: "";
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.panel-resize-handle[_ngcontent-%COMP%]::before {
  background: var(--%NS%bx-resize-rail-color, var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element)));
}
.panel-resize-handle[_ngcontent-%COMP%]::after {
  left: 50%;
  top: 50%;
  inline-size: var(--%NS%bx-space-2, 0.5rem);
  block-size: var(--%NS%bx-space-6, 1.5rem);
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-resize-grip-border, var(--%NS%bx-border-default));
  color: var(--%NS%bx-resize-grip-color, var(--%NS%bx-text-secondary));
  background-color: var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element));
  background-image:
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px),
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px),
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px);
  background-size: 3px 3px;
  background-position:
    center calc(50% - 4px),
    center,
    center calc(50% + 4px);
  background-repeat: no-repeat;
}
.panel-resize-handle[data-bx-resize-axis=horizontal][_ngcontent-%COMP%]::before {
  inset-block: var(--%NS%bx-space-2, 0.5rem);
  left: 50%;
  inline-size: var(--%NS%bx-space-1, 0.25rem);
  transform: translateX(-50%);
}
.panel-resize-handle[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::before {
  inset-inline: var(--%NS%bx-space-2, 0.5rem);
  top: 50%;
  block-size: var(--%NS%bx-space-1, 0.25rem);
  transform: translateY(-50%);
}
.panel-resize-handle[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.panel-resize-handle.bx-resize-visible[_ngcontent-%COMP%]::after, 
.panel-resize-handle[_ngcontent-%COMP%]:focus-visible::before, 
.panel-resize-handle[_ngcontent-%COMP%]:focus-visible::after {
  opacity: 1;
}
.panel-resize-handle[_ngcontent-%COMP%]:hover::before, 
.panel-resize-handle.bx-resizing[_ngcontent-%COMP%]::before {
  opacity: 1;
}
.panel-resize-handle[_ngcontent-%COMP%]:hover::after, 
.panel-resize-handle.bx-resizing[_ngcontent-%COMP%]::after {
  opacity: 0;
}
.panel-resize-handle[_ngcontent-%COMP%]:focus-visible::before {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: var(--%NS%bx-space-1, 0.25rem);
}
.panel-resize-handle.bx-resize-reduced-motion[_ngcontent-%COMP%]::before, 
.panel-resize-handle.bx-resize-reduced-motion[_ngcontent-%COMP%]::after {
  transition-duration: 0s;
}
@media (hover: none), (pointer: coarse), (forced-colors: active) {
  .panel-resize-handle[_ngcontent-%COMP%]::after {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .panel-resize-handle[_ngcontent-%COMP%]::before, 
   .panel-resize-handle[_ngcontent-%COMP%]::after {
    transition-duration: 0s;
  }
}
@media (forced-colors: active) {
  .panel-resize-handle[_ngcontent-%COMP%]::before {
    background: CanvasText;
  }
  .panel-resize-handle[_ngcontent-%COMP%]::after {
    forced-color-adjust: none;
    background-color: Canvas;
    border-color: CanvasText;
    color: CanvasText;
  }
  .panel-resize-handle[_ngcontent-%COMP%]:focus-visible::before {
    outline-color: Highlight;
  }
}
.panel-resize-handle[_ngcontent-%COMP%] {
  position: absolute;
  inset-block: 0;
  inline-size: var(--%NS%bx-panel-resize-gutter, var(--%NS%bx-space-6, 1.5rem));
  z-index: 1;
  transition: transform var(--%NS%bx-panel-duration, 175ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}
.panel-resize-handle.resize-right[_ngcontent-%COMP%] {
  left: var(--%NS%bx-panel-rendered-width);
  transform: translateX(calc(0px - var(--%NS%bx-panel-rendered-width)));
}
.is-open[_ngcontent-%COMP%]    > .panel-resize-handle.resize-right[_ngcontent-%COMP%] {
  transform: translateX(0);
}
.panel-resize-handle.resize-left[_ngcontent-%COMP%] {
  right: var(--%NS%bx-panel-rendered-width);
  transform: translateX(var(--%NS%bx-panel-rendered-width));
}
.is-open[_ngcontent-%COMP%]    > .panel-resize-handle.resize-left[_ngcontent-%COMP%] {
  transform: translateX(0);
}
.is-open[_ngcontent-%COMP%]    > .panel-resize-handle[_ngcontent-%COMP%] {
  pointer-events: auto;
}
@media (forced-colors: active) {
  .panel-surface[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
    background: Canvas;
    color: CanvasText;
  }
}`]})};var ll=class i{nativeElement=b(ke).nativeElement;ngZone=b(le);destroyRef=b(ge);overflow=$(!1);overflowing=this.overflow.asReadonly();infiniteScrollContainer=ee(void 0);infiniteScrollThreshold=ee(128);infiniteScrollDisabled=ee(!1);infiniteScrollLoading=ee(!1);infiniteScrollRevision=ee(void 0);infiniteScrollCheckOnRender=ee(!1);infiniteScrollEndOffset=ee(0);scrollEnd=Pk();connectedContainer;pendingCheck=!1;mounted=!1;requested=!1;previousRevision;wasLoading=!1;frame;disconnect;constructor(){er$1(()=>{this.mounted=!0,this.connect()}),Vk(()=>{let t=this.infiniteScrollContainer(),e=this.infiniteScrollLoading(),n=this.infiniteScrollRevision();this.infiniteScrollDisabled(),this.infiniteScrollThreshold(),this.infiniteScrollEndOffset(),this.infiniteScrollCheckOnRender(),de(()=>{(n!==this.previousRevision||this.wasLoading&&!e)&&(this.requested=!1),this.previousRevision=n,this.wasLoading=e,this.mounted&&(t!==this.connectedContainer&&this.connect(),this.schedule(this.infiniteScrollCheckOnRender()))})}),this.destroyRef.onDestroy(()=>{this.disconnect?.(),this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.frame??0)})}complete(){this.requested=!1}connect(){this.disconnect?.(),this.requested=!1,this.pendingCheck=!1,this.connectedContainer=this.infiniteScrollContainer();let t=this.connectedContainer??this.nativeElement;this.ngZone.runOutsideAngular(()=>{this.disconnect=WQ(this.nativeElement,t,()=>this.schedule(!0),()=>this.schedule(this.infiniteScrollCheckOnRender()))})}schedule(t){this.pendingCheck||=t,!(this.frame!==void 0||this.destroyRef.destroyed)&&this.ngZone.runOutsideAngular(()=>{this.frame=this.nativeElement.ownerDocument.defaultView?.requestAnimationFrame(()=>{this.frame=void 0;let e=this.pendingCheck;this.pendingCheck=!1,this.measure(e)})})}measure(t){let e=this.connectedContainer??this.nativeElement,{distance:n,overflowing:r,viewportHeight:a}=GQ(this.nativeElement,e,this.infiniteScrollEndOffset()),o=this.infiniteScrollThreshold(),s=n<=(Number.isFinite(o)?Math.max(0,o):0);if(r!==this.overflow()&&this.ngZone.run(()=>this.overflow.set(r)),s||(this.requested=!1),!(!t||!s||this.requested||a<=0||!this.nativeElement.getClientRects().length)){if(e!==this.nativeElement){let l=e===e.ownerDocument.scrollingElement?0:e.getBoundingClientRect().top;if(this.nativeElement.getBoundingClientRect().bottom<l-Math.max(0,Number.isFinite(o)?o:0))return}this.infiniteScrollDisabled()||this.infiniteScrollLoading()||(this.requested=!0,this.ngZone.run(()=>this.scrollEnd.emit()))}}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxInfiniteScroll`,``]],inputs:{infiniteScrollContainer:[1,`infiniteScrollContainer`],infiniteScrollThreshold:[1,`infiniteScrollThreshold`],infiniteScrollDisabled:[1,`infiniteScrollDisabled`],infiniteScrollLoading:[1,`infiniteScrollLoading`],infiniteScrollRevision:[1,`infiniteScrollRevision`],infiniteScrollCheckOnRender:[1,`infiniteScrollCheckOnRender`],infiniteScrollEndOffset:[1,`infiniteScrollEndOffset`]},outputs:{scrollEnd:`scrollEnd`},exportAs:[`bxInfiniteScroll`]})};var Cp=[[[`bx-side-panel`]],`*`];var _p=[`bx-side-panel`,`*`];var dl=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-side-panel-layout`]],features:[rr$1([{provide:nr,useFactory:()=>({nativeElement:b(ke).nativeElement})}])],ngContentSelectors:_p,decls:3,vars:0,consts:[[1,`panel-layout-content`]],template:function(e,n){e&1&&(ld$1(Cp),dd$1(0),id$1(1,`div`,0),dd$1(2,1),ad$1())},styles:[`
[_nghost-%COMP%] {
  position: relative;
  isolation: isolate;
  display: flex;
  min-inline-size: 0;
  min-block-size: 0;
  block-size: 100%;
  overflow: clip;
}
.panel-layout-content[_ngcontent-%COMP%] {
  position: relative;
  order: 1;
  flex: 1 1 0;
  min-inline-size: 0;
  min-block-size: 0;
  overflow: hidden;
}`]})};var Un=class i{templateRef=b($t);bxVirtualItem=ee.required();static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[`ng-template`,`bxVirtualItem`,``]],inputs:{bxVirtualItem:[1,`bxVirtualItem`]}})};var ir=class{values=[];tree=[0];get length(){return this.values.length}get total(){return this.prefix(this.values.length)}reset(t){this.values=[...t],this.tree=Array.from({length:t.length+1},()=>0);for(let e=0;e<t.length;e++){let n=e+1;this.tree[n]+=t[e];let r=n+(n&-n);r<this.tree.length&&(this.tree[r]+=this.tree[n])}}set(t,e){if(t<0||t>=this.values.length||!Number.isFinite(e)||e<=0||Math.abs(this.values[t]-e)<.5)return!1;let n=e-this.values[t];this.values[t]=e;for(let r=t+1;r<this.tree.length;r+=r&-r)this.tree[r]+=n;return!0}prefix(t){let e=0;for(let n=Math.min(this.values.length,Math.max(0,t));n>0;n-=n&-n)e+=this.tree[n];return e}indexAt(t){let e=0,n=0,r=1;for(;r*2<=this.values.length;)r*=2;for(;r>0;r=Math.floor(r/2)){let a=e+r;a<=this.values.length&&n+this.tree[a]<=Math.max(0,t)&&(e=a,n+=this.tree[a])}return Math.min(e,Math.max(0,this.values.length-1))}};var wp=[`probe`];var Np=[`row`];var ul=(i,t)=>t.key;function Mp(i,t){if(i&1&&(bo(0,`div`,5),$s$1(1,6),Go$1()),i&2){let e=t.$implicit,n=Wo$1(2);vo(`data-bx-virtual-index`,e.context.index)(`role`,n.itemRole())(`aria-posinset`,e.context.index+1)(`aria-setsize`,n.items().length),Xl$1(),xo(`ngTemplateOutlet`,n.itemTemplate()?.templateRef??null)(`ngTemplateOutletContext`,e.context)}}function Tp(i,t){if(i&1&&(sd$1(0,`div`,3),bo(1,`div`,4,1),ab(3,Mp,2,6,`div`,5,ul),Go$1()),i&2){let e=t.$implicit,n=Wo$1();ka(`block-size`,e.before,`px`),Xl$1(),ka(`padding-block-end`,e.startIndex+e.items.length<n.items().length?`var(--bx-virtual-row-gap)`:`0px`),vo(`data-bx-virtual-row`,e.index),Xl$1(2),cb(e.items)}}var cl=class i{nativeElement=b(ke).nativeElement;ngZone=b(le);destroyRef=b(ge);bxA11yService=b(Br$1);metrics=new ir;heights=/* @__PURE__ */ new Map;observedRows=/* @__PURE__ */ new Map;probe=Sz(`probe`);rowElements=Iz(`row`);columns=$(1);state=$({range:{start:0,end:0,columns:1},rows:[],bottom:0});minimumColumnWidth=G(()=>{let t=this.config().minColumnWidth??`7rem`;return typeof t==`number`?`${Math.max(1,t)}px`:t});itemTemplate=Lk(Un);renderedRange=G(()=>this.state().range);renderedItems=G(()=>this.state().rows.flatMap(t=>t.items.map(e=>e.context.$implicit)));items=ee([]);trackBy=ee.required();config=ee({});scrollContainer=ee(void 0);measurementRevision=ee(void 0);itemRole=ee(`listitem`);mounted=!1;target;rowResize;disconnect;data=[];keys=[];rowColumns=1;rowGap=12;measuredWidth=0;previousWidth=0;previousRevision;previousEstimate=0;lastPinned=-1;pendingIndex;rebuilding=!1;pendingScrollDelta=0;pendingScrollTop;pendingFocus;constructor(){er$1(()=>{this.mounted=!0,this.connect(),this.measureLayout()}),Vk(()=>{let t=this.items(),e=this.columns(),n=this.config(),r=this.measurementRevision(),a=this.trackBy(),o=this.scrollContainer();de(()=>{this.mounted&&this.target!==(o??UQ(this.nativeElement))&&this.connect();let s=this.probe()?.nativeElement,l=this.nativeElement.ownerDocument.defaultView,u=this.mounted&&s&&l?l.getComputedStyle(s):void 0,p=n.layout===`grid`?u?Math.max(1,u.gridTemplateColumns.split(/\s+/).filter(Boolean).length):e:1;u&&(this.measuredWidth=this.nativeElement.clientWidth,this.rowGap=Number.parseFloat(u.rowGap)||0),p!==this.columns()&&this.columns.set(p),this.rebuild(t,p,n,r,a)})}),Vk(()=>{let t=this.rowElements();this.state(),de(()=>{this.applyScrollCorrection(),this.observeRows(t),this.restoreFocusedItem()})}),this.destroyRef.onDestroy(()=>{this.disconnect?.(),this.rowResize?.disconnect(),this.observedRows.clear()})}scrollToIndex(t,e=`auto`){if(!Number.isFinite(t))return;if(!this.mounted||!this.target||!this.data.length){this.pendingIndex=t;return}let n=Math.max(0,Math.min(this.data.length-1,Math.trunc(t)));this.pendingScrollDelta=0,this.pendingScrollTop=void 0;let r=this.viewportOffset(),a=this.target.scrollTop+this.metrics.prefix(Math.floor(n/this.rowColumns))-r;this.target.scrollTo({top:Math.max(0,a),behavior:this.bxA11yService.isReducedMotion()?`instant`:e}),this.updateWindow(!0)}scrollToItem(t,e=`auto`){let n=this.keys.indexOf(t);n>=0&&this.scrollToIndex(n,e)}refreshMeasurements(){this.heights.clear(),this.rebuild(this.items(),this.columns(),this.config(),this.measurementRevision(),this.trackBy())}onFocusChanged(){queueMicrotask(()=>{this.destroyRef.destroyed||this.updateWindow()})}connect(){this.disconnect?.(),this.target=this.scrollContainer()??UQ(this.nativeElement);let t=this.target,e=this.nativeElement.ownerDocument,n=e.defaultView;!t||!n||this.ngZone.runOutsideAngular(()=>{let r=t===e.scrollingElement?e:t,a=()=>this.updateWindow(),o=()=>this.measureLayout(),s=typeof ResizeObserver>`u`?void 0:new ResizeObserver(o);s?.observe(this.nativeElement),s?.observe(t),r.addEventListener(`scroll`,a,{passive:!0}),n.addEventListener(`resize`,o),n.visualViewport?.addEventListener(`resize`,o),this.disconnect=()=>{s?.disconnect(),r.removeEventListener(`scroll`,a),n.removeEventListener(`resize`,o),n.visualViewport?.removeEventListener(`resize`,o)}})}measureLayout(){let t=this.probe()?.nativeElement,e=this.nativeElement.ownerDocument.defaultView;if(!t||!e||this.nativeElement.clientWidth<=0)return;let n=e.getComputedStyle(t),r=this.config().layout===`grid`?Math.max(1,n.gridTemplateColumns.split(/\s+/).filter(Boolean).length):1,a=Math.abs(this.measuredWidth-this.nativeElement.clientWidth)>=.5,o=Number.parseFloat(n.rowGap)||0;this.measuredWidth=this.nativeElement.clientWidth,r!==this.columns()?this.ngZone.run(()=>this.columns.set(r)):a||o!==this.rowGap?(this.heights.clear(),this.rowGap=o,this.rebuild(this.items(),r,this.config(),this.measurementRevision(),this.trackBy())):this.updateWindow()}rebuild(t,e,n,r,a){if(this.rebuilding)return;this.rebuilding=!0;let o=this.captureAnchor(),s=n.estimatedRowHeight??128,l=Number.isFinite(s)&&s>0?s:128,u=e!==this.rowColumns||Math.abs(this.previousWidth-this.measuredWidth)>=.5;u&&this.captureFocusedItem(),(u||r!==this.previousRevision||l!==this.previousEstimate)&&this.heights.clear(),this.data=t,this.keys=t.map((y,E)=>a(y,E)),this.rowColumns=n.layout===`grid`?e:1,this.previousWidth=this.measuredWidth,this.previousRevision=r,this.previousEstimate=l;let p=new Set(this.keys);for(let y of this.heights.keys())p.has(y)||this.heights.delete(y);let f=Math.ceil(t.length/this.rowColumns);if(this.metrics.reset(Array.from({length:f},(y,E)=>this.heights.get(this.keys[E*this.rowColumns])??l+(E+1<f?this.rowGap:0))),this.restoreAnchor(o),this.rebuilding=!1,this.updateWindow(!0),this.pendingIndex!==void 0&&this.mounted&&this.data.length){let y=this.pendingIndex;this.pendingIndex=void 0,this.scrollToIndex(y)}}viewportOffset(){let t=this.target;return t?(t===t.ownerDocument.scrollingElement?0:t.getBoundingClientRect().top+t.clientTop)-this.nativeElement.getBoundingClientRect().top:0}viewportHeight(){let t=this.target;return t?t===t.ownerDocument.scrollingElement?t.ownerDocument.defaultView?.innerHeight??t.clientHeight:t?.clientHeight??800:800}captureAnchor(){if(!this.mounted||!this.metrics.length||!this.keys.length)return;let t=this.viewportOffset()+this.pendingScrollDelta;if(t<0||t>=this.metrics.total)return;let e=this.metrics.indexAt(t),n=this.metrics.prefix(e);return{key:this.keys[e*this.rowColumns],offset:t-n,top:n}}restoreAnchor(t){if(!t||!this.target)return;let e=this.keys.indexOf(t.key);if(e<0)return;let n=Math.floor(e/this.rowColumns),r=this.metrics.prefix(n),a=this.metrics.prefix(n+1)-r,o=r-t.top+Math.min(t.offset,Math.max(0,a-1))-t.offset;Math.abs(o)>=.5&&(this.pendingScrollTop=(this.pendingScrollTop??this.target.scrollTop)+o,this.pendingScrollDelta+=o)}applyScrollCorrection(){if(!this.target||this.pendingScrollTop===void 0)return;let t=this.pendingScrollTop;this.pendingScrollDelta=0,this.pendingScrollTop=void 0,this.target.scrollTo({top:Math.max(0,t),behavior:`instant`}),this.updateWindow()}updateWindow(t=!1){if(this.destroyRef.destroyed)return;let e=this.viewportOffset()+this.pendingScrollDelta,n=this.viewportHeight(),r=this.config().overscan??800,a=Number.isFinite(r)?Math.max(0,r):800,o=e+n+a<0||e-a>this.metrics.total,s=o||!this.metrics.length?0:this.metrics.indexAt(Math.max(0,e-a)),l=o||!this.metrics.length?0:Math.min(this.metrics.length,this.metrics.indexAt(Math.max(0,e+n+a))+1),u=this.nativeElement.ownerDocument.activeElement,p=[...this.observedRows].find(([ae])=>ae.contains(u)),f=this.pendingFocus?this.keys.indexOf(this.pendingFocus.key):-1,y=f>=0?Math.floor(f/this.rowColumns):p?.[1]??-1,E={start:s*this.rowColumns,end:Math.min(this.data.length,l*this.rowColumns),columns:this.rowColumns},z=this.state().range;if(!t&&E.start===z.start&&E.end===z.end&&E.columns===z.columns&&y===this.lastPinned)return;this.lastPinned=y;let F=Array.from({length:Math.max(0,l-s)},(ae,xe)=>xe+s);y>=0&&y<this.metrics.length&&!F.includes(y)&&F.push(y),F.sort((ae,xe)=>ae-xe);let X=0,A=F.map(ae=>{let xe=this.metrics.prefix(ae),Se=ae*this.rowColumns,bt={key:this.keys[Se],index:ae,startIndex:Se,items:this.data.slice(Se,Se+this.rowColumns).map((or,sr)=>{let qn=Se+sr;return{key:this.keys[qn],context:{$implicit:or,index:qn,count:this.data.length}}}),before:Math.max(0,xe-X)};return X=this.metrics.prefix(ae+1),bt});this.ngZone.run(()=>this.state.set({range:E,rows:A,bottom:Math.max(0,this.metrics.total-X)}))}observeRows(t){!this.mounted||typeof ResizeObserver>`u`||this.ngZone.runOutsideAngular(()=>{this.rowResize??=new ResizeObserver(n=>this.measureRows(n));let e=new Set(t.map(n=>n.nativeElement));for(let n of this.observedRows.keys())e.has(n)||(this.rowResize.unobserve(n),this.observedRows.delete(n));for(let n of t){let r=n.nativeElement,a=Number(r.dataset.bxVirtualRow);Number.isInteger(a)&&(this.observedRows.set(r,a),this.rowResize.observe(r))}})}captureFocusedItem(){let t=this.nativeElement.ownerDocument.activeElement;if(!(t instanceof HTMLElement)||!this.nativeElement.contains(t))return;let e=t.closest(`[data-bx-virtual-index]`),n=Number(e?.dataset.bxVirtualIndex);if(!e||!Number.isInteger(n)||n<0||n>=this.keys.length)return;let r=Array.from(e.querySelectorAll(`button, input, select, textarea, a[href], [tabindex]`));this.pendingFocus={key:this.keys[n],control:Math.max(0,r.indexOf(t))}}restoreFocusedItem(){let t=this.pendingFocus;if(!t)return;let e=this.keys.indexOf(t.key),n=this.nativeElement.querySelector(`[data-bx-virtual-index="${e}"]`);if(!n)return;let r=n.querySelectorAll(`button, input, select, textarea, a[href], [tabindex]`);this.pendingFocus=void 0,(r[t.control]??r[0])?.focus({preventScroll:!0})}measureRows(t){let e=this.captureAnchor(),n=!1;for(let r of t){let a=this.observedRows.get(r.target),o=r.borderBoxSize[0]?.blockSize??r.contentRect.height;a===void 0||a>=this.metrics.length||o<=0||this.metrics.set(a,o)&&(this.heights.set(this.keys[a*this.rowColumns],o),n=!0)}n&&(this.restoreAnchor(e),this.updateWindow(!0))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-virtual-collection`]],contentQueries:function(e,n,r){e&1&&ud$1(r,n.itemTemplate,Un,5),e&2&&fb()},viewQuery:function(e,n){e&1&&Yy(n.probe,wp,5)(n.rowElements,Np,5),e&2&&fb(2)},hostAttrs:[`role`,`list`],hostVars:4,hostBindings:function(e,n){e&1&&br(`focusin`,function(){return n.onFocusChanged()})(`focusout`,function(){return n.onFocusChanged()}),e&2&&ka(`--%NS%bx-virtual-min-column-width`,n.minimumColumnWidth())(`--%NS%bx-virtual-columns`,n.columns())},inputs:{items:[1,`items`],trackBy:[1,`trackBy`],config:[1,`config`],scrollContainer:[1,`scrollContainer`],measurementRevision:[1,`measurementRevision`],itemRole:[1,`itemRole`]},decls:5,vars:2,consts:[[`probe`,``],[`row`,``],[`aria-hidden`,`true`,1,`column-probe`],[`aria-hidden`,`true`,1,`virtual-spacer`],[`role`,`presentation`,1,`virtual-row`],[1,`virtual-item`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(e,n){e&1&&(sd$1(0,`div`,2,0),ab(2,Tp,5,5,null,null,ul),sd$1(4,`div`,3)),e&2&&(Xl$1(2),cb(n.state().rows),Xl$1(2),ka(`block-size`,n.state().bottom,`px`))},dependencies:[Ta],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-virtual-row-gap: var(--%NS%bx-space-3, 0.75rem);
  --%NS%bx-virtual-column-gap: var(--%NS%bx-space-3, 0.75rem);
  display: block;
  position: relative;
  min-inline-size: 0;
  overflow-anchor: none;
}
.column-probe[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: 0;
  block-size: 0;
  visibility: hidden;
  pointer-events: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--%NS%bx-virtual-min-column-width, 7rem)), 1fr));
  gap: var(--%NS%bx-virtual-column-gap);
  row-gap: var(--%NS%bx-virtual-row-gap);
}
.virtual-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(var(--%NS%bx-virtual-columns, 1), minmax(0, 1fr));
  gap: var(--%NS%bx-virtual-column-gap);
  box-sizing: border-box;
  min-inline-size: 0;
}
.virtual-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
}
.virtual-spacer[_ngcontent-%COMP%] {
  pointer-events: none;
  overflow-anchor: none;
}`]})};var Ep=[`surfaceTemplate`];var Pp=[`handleZone`];var Op=[`surface`];var kp=[`*`,[[``,`bxDrawerFooter`,``]],[[``,`bxIconStart`,``]],[[``,`bxDrawerHeader`,``]]];var Lp=[`*`,`[bxDrawerFooter]`,`[bxIconStart]`,`[bxDrawerHeader]`];var zp=(i,t)=>[i,t];function Ap(i,t){if(i&1){let e=pb();bo(0,`div`,5,2)(2,`button`,10),br(`click`,function(){al$1(e);let r=Wo$1(2);return cl$1(r.onHandleClick())}),sd$1(3,`span`,11),Go$1()()}if(i&2){let e=Wo$1(2);Xl$1(2),xo(`disabled`,!e.isDismissible()),vo(`aria-label`,e.resolvedCloseLabel())}}function Bp(i,t){i&1&&sd$1(0,`bx-icon`,17),i&2&&xo(`name`,t)(`decorative`,!0)}function Hp(i,t){if(i&1&&od$1(0,Bp,1,2,`bx-icon`,17),i&2){let e,n=Wo$1(3);nd$1((e=n.icon())?0:-1,e)}}function Fp(i,t){if(i&1&&(bo(0,`h2`,13),lA(1),Go$1()),i&2){let e=Wo$1(3);xo(`id`,e.titleId),Xl$1(),ik(e.resolvedTitle())}}function jp(i,t){if(i&1&&(bo(0,`p`,14),lA(1),Go$1()),i&2){let e=Wo$1(3);Xl$1(),ik(e.resolvedSubtitle())}}function Vp(i,t){i&1&&sd$1(0,`bx-loading-spinner`,15),i&2&&xo(`size`,18)(`decorative`,!0)}function Up(i,t){if(i&1){let e=pb();bo(0,`button`,18),br(`click`,function(){al$1(e);let r=Wo$1(3);return cl$1(r.onCloseClick())}),sd$1(1,`bx-icon`,19),Go$1()}if(i&2){let e=Wo$1(3);xo(`disabled`,!e.isDismissible()),vo(`aria-label`,e.resolvedCloseLabel()),Xl$1(),xo(`decorative`,!0)}}function $p(i,t){if(i&1&&(bo(0,`header`,6),dd$1(1,2,null,Hp,1,1),bo(3,`div`,12),od$1(4,Fp,2,2,`h2`,13),od$1(5,jp,2,1,`p`,14),Go$1(),dd$1(6,3),od$1(7,Vp,1,2,`bx-loading-spinner`,15),od$1(8,Up,2,3,`button`,16),Go$1()),i&2){let e=Wo$1(2);Xl$1(4),nd$1(e.title()?4:-1),Xl$1(),nd$1(e.subtitle()?5:-1),Xl$1(2),nd$1(e.busy()?7:-1),Xl$1(),nd$1(e.showCloseButton()?8:-1)}}function Wp(i,t){if(i&1&&(bo(0,`div`,4,1),od$1(2,Ap,4,2,`div`,5),od$1(3,$p,9,4,`header`,6),bo(4,`div`,7)(5,`div`,8),dd$1(6),Go$1(),bo(7,`div`,9),dd$1(8,1),Go$1()()()),i&2){let e=Wo$1();XT(e.panelStyle()),ka(`--%NS%bx-drawer-max-height`,e.maxHeight())(`--%NS%bx-drawer-duration`,e.animationDuration(),`ms`)(`--%NS%bx-drawer-offset`,e.surfaceOffset()),tr$1(`is-dragging`,e.isDragging())(`is-entering`,e.isEntering())(`is-closing`,e.isClosing())(`is-embedded`,e.embedded())(`is-busy`,e.busy())(`is-disabled`,e.disabled()),xo(`ngClass`,EA(34,zp,e.sizeClass(),e.panelClass()))(`id`,e.surfaceId())(`cdkTrapFocus`,e.modal()&&!e.embedded())(`cdkTrapFocusAutoCapture`,!1),vo(`role`,e.modal()&&!e.embedded()?`dialog`:null)(`aria-modal`,e.modal()&&!e.embedded()?`true`:null)(`aria-label`,e.title()?null:e.resolvedAriaLabel()||null)(`aria-labelledby`,e.title()?e.titleId:null)(`aria-busy`,e.busy())(`tabindex`,-1),Xl$1(2),nd$1(e.showHandle()?2:-1),Xl$1(),nd$1(e.showHeader()?3:-1),Xl$1(),tr$1(`is-sticky-footer`,e.stickyFooter())}}function qp(i,t){if(i&1&&$s$1(0,3),i&2){Wo$1();let e=FT(1);xo(`ngTemplateOutlet`,e)}}var pl=class i{overlay=b(Ld$1);viewContainerRef=b(fr);i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);scrollLockService=b(Nw);destroyRef=b(ge);platformId=b(Ge);document=b(q);browser=bt(this.platformId);isDragging=$(!1);isEntering=$(!1);isClosing=$(!1);lockId=`bx-drawer-${qK()}`;surfaceTemplate=Sz(`surfaceTemplate`);handleZone=Sz(`handleZone`);surface=Sz(`surface`);titleId=`bx-drawer-title-${qK()}`;resolvedTitle=G(()=>LQ(this.title(),this.i18n));resolvedSubtitle=G(()=>LQ(this.subtitle(),this.i18n));resolvedAriaLabel=G(()=>LQ(this.ariaLabel(),this.i18n));resolvedCloseLabel=G(()=>LQ(this.closeLabel(),this.i18n));isDismissible=G(()=>this.dismissible()&&!this.busy()&&!this.disabled());showHeader=G(()=>this.headerVisible()??!!(this.title()||this.subtitle()||this.icon()||this.showCloseButton()||this.busy()));surfaceOffset=G(()=>this.isEntering()||this.isClosing()||!this.open()?`100%`:`${Math.max(0,this.offset())}px`);open=_z(!1);offset=_z(0);animationDuration=ee(280);modal=ee(!0,{transform:Ye});embedded=ee(!1,{transform:Ye});dismissible=ee(!0,{transform:Ye});autoClose=ee(!0,{transform:Ye});closeOnBackdrop=ee(!0,{transform:Ye});showBackdrop=ee(!0,{transform:Ye});showHandle=ee(!0,{transform:Ye});swipeToDismiss=ee(!0,{transform:Ye});showCloseButton=ee(!0,{transform:Ye});stickyFooter=ee(!0,{transform:Ye});autoFocus=ee(!0,{transform:Ye});busy=ee(!1,{transform:Ye});disabled=ee(!1,{transform:Ye});size=ee(`auto`);maxHeight=ee(`92dvh`);title=ee(void 0);subtitle=ee(void 0);icon=ee(void 0);ariaLabel=ee(void 0);closeLabel=ee(`Close`);headerVisible=ee(void 0);panelClass=ee(``);panelStyle=ee(``);surfaceId=ee(``);closeGuard=ee(void 0);closeRequest=Pk();closed=Pk();closeCancelled=Pk();cleanupDrag;disconnectTheme;disconnectLighting;overlayRef;originElement;returnMotion;detachTimeout;guardRevision=0;suppressClick=!1;constructor(){We(()=>{let t=this.open(),e=this.embedded(),n=this.modal();!this.browser||e||(t?this.attach(n):this.detach())}),We(()=>{if(!this.browser||!this.embedded())return;let t=this.open();if(de(()=>{this.cleanupDrag?.(),this.cleanupDrag=void 0,this.returnMotion?.destroy(),this.returnMotion=void 0,this.isClosing.set(!1),this.offset.set(0)}),!t){this.isEntering.set(!1);return}this.isEntering.set(!0),this.document.defaultView?.requestAnimationFrame(()=>{!this.open()||this.destroyRef.destroyed||(this.isEntering.set(!1),this.startDragDetection())})}),this.destroyRef.onDestroy(()=>{this.guardRevision+=1,this.cleanup(),this.scrollLockService.enableScroll(this.lockId)})}show(){this.open.set(!0)}close(t=`programmatic`){this.requestClose(t)}onHandleClick(){if(this.suppressClick){this.suppressClick=!1;return}this.isDismissible()&&this.requestClose(`close-button`)}onCloseClick(){this.isDismissible()&&this.requestClose(`close-button`)}sizeClass(){return`is-size-${this.size()}`}requestClose(t){if(!this.open()||this.isClosing())return;if(this.closeRequest.emit(t),t!==`programmatic`&&!this.isDismissible()){this.closeCancelled.emit(t);return}if(this.busy()){this.closeCancelled.emit(t);return}if(!this.autoClose())return;let e=this.closeGuard(),n=++this.guardRevision;if(!e){this.commitClose(t);return}Promise.resolve(e()).then(r=>{n===this.guardRevision&&(r?this.commitClose(t):this.closeCancelled.emit(t))}).catch(()=>{n===this.guardRevision&&this.closeCancelled.emit(t)})}commitClose(t){this.isClosing.set(!0),this.open.set(!1),this.closed.emit(t)}attach(t){if(clearTimeout(this.detachTimeout),this.detachTimeout=void 0,this.overlayRef){this.isClosing.set(!1),this.isEntering.set(!1);return}let e=this.surfaceTemplate();if(!e)return;this.originElement=this.document.activeElement instanceof HTMLElement?this.document.activeElement:void 0,this.isEntering.set(!0);let n=this.overlay.create({positionStrategy:this.overlay.position().global().bottom(`0`).centerHorizontally(),scrollStrategy:this.overlay.scrollStrategies.noop(),hasBackdrop:t&&this.showBackdrop(),backdropClass:`bx-drawer-backdrop`,panelClass:`bx-drawer-overlay-pane`});this.overlayRef=n;let r=n.overlayElement;r.setAttribute(`role`,`presentation`),this.disconnectTheme=BK(this.originElement??this.viewContainerRef.element.nativeElement,r),this.originElement&&(this.disconnectLighting=DR(r,this.originElement)),n.attach(new ja(e,this.viewContainerRef)),n.updatePosition(),t&&this.scrollLockService.disableScroll(this.lockId,{animationDuration:0,handleTouchInput:!0,mobileOnlyTouchPrevention:!0}),t&&n.keydownEvents().subscribe(a=>{a.key!==`Escape`||a.defaultPrevented||(a.preventDefault(),a.stopPropagation(),this.requestClose(`escape`))}),n.backdropClick().subscribe(()=>{this.closeOnBackdrop()&&this.requestClose(`backdrop`)}),this.document.defaultView?.requestAnimationFrame(()=>{this.isEntering.set(!1),this.startDragDetection(),this.focusInitial()})}detach(){let t=this.overlayRef;if(!t)return;this.cleanupDrag?.(),this.cleanupDrag=void 0,this.isClosing.set(!0);let e=()=>{clearTimeout(this.detachTimeout),this.detachTimeout=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,t.dispose(),this.overlayRef=void 0,this.offset.set(0),this.isClosing.set(!1),this.scrollLockService.enableScroll(this.lockId),this.restoreFocus()};if(this.bxA11yService.isReducedMotion()){e();return}this.detachTimeout=setTimeout(e,Math.max(0,this.animationDuration()))}focusInitial(){if(!this.modal()||!this.autoFocus()||this.embedded())return;let t=this.surface()?.nativeElement;if(!t)return;(t.querySelector(`button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])`)??t).focus({preventScroll:!0})}restoreFocus(){let t=this.originElement;this.originElement=void 0,t&&t.isConnected&&t.focus({preventScroll:!0})}startDragDetection(){if(!this.browser||this.cleanupDrag)return;let t=this.handleZone()?.nativeElement,e=t?.ownerDocument;if(!t||!e)return;let n=this.surface()?.nativeElement??t,r,a=0,o=0,s=!1,l,u=(A,ae)=>{if(r===void 0)return;let xe=r;r=void 0,this.isDragging.set(!1),t.hasPointerCapture(xe)&&t.releasePointerCapture(xe);let Se=Math.max(0,this.offset()),bt=A?0:l?.velocity(ae)??0,or=Math.max(96,Math.min(n.offsetHeight,this.ownerWindow()?.innerHeight??800)*.22),sr=s&&!A&&this.swipeToDismiss()&&this.isDismissible()&&(Se>or||bt>720);if(this.suppressClick=s,sr){this.requestClose(`swipe`);return}this.returnMotion?.destroy(),this.returnMotion=Zn([Se],([qn])=>this.offset.set(Math.max(0,qn)),vr.snappy),this.returnMotion.track([Se],[bt]),this.returnMotion.retarget([0],!this.isAnimated())},p=()=>u(!0,0),f=A=>{!A.isPrimary||A.button!==0||r!==void 0||!this.open()||this.isEntering()||!this.isDismissible()||(this.returnMotion?.destroy(),this.returnMotion=void 0,r=A.pointerId,a=A.clientY,o=this.offset(),s=!1,l=new Ah(A.clientY,A.timeStamp),t.setPointerCapture(A.pointerId),this.isDragging.set(!0))},y=A=>{if(A.pointerId!==r)return;let ae=A.clientY-a;s||=Math.abs(ae)>4,l?.update(A.clientY,A.timeStamp),A.cancelable&&A.preventDefault(),this.offset.set(Math.max(0,o+ae))},E=A=>{A.pointerId===r&&(y(A),u(!1,A.timeStamp))},z=A=>{A.pointerId===r&&p()},F=A=>{A.key!==`Escape`||r===void 0||(A.preventDefault(),A.stopPropagation(),p())},X=()=>{e.hidden&&p()};t.addEventListener(`pointerdown`,f),t.addEventListener(`pointermove`,y,{passive:!1}),t.addEventListener(`pointerup`,E),t.addEventListener(`pointercancel`,z),t.addEventListener(`lostpointercapture`,z),e.addEventListener(`keydown`,F,!0),e.addEventListener(`visibilitychange`,X),e.defaultView?.addEventListener(`blur`,p),e.defaultView?.addEventListener(`resize`,p),this.cleanupDrag=()=>{p(),t.removeEventListener(`pointerdown`,f),t.removeEventListener(`pointermove`,y),t.removeEventListener(`pointerup`,E),t.removeEventListener(`pointercancel`,z),t.removeEventListener(`lostpointercapture`,z),e.removeEventListener(`keydown`,F,!0),e.removeEventListener(`visibilitychange`,X),e.defaultView?.removeEventListener(`blur`,p),e.defaultView?.removeEventListener(`resize`,p)}}isAnimated(){return!this.bxA11yService.isReducedMotion()}ownerWindow(){return this.surface()?.nativeElement.ownerDocument.defaultView??void 0}cleanup(){clearTimeout(this.detachTimeout),this.cleanupDrag?.(),this.cleanupDrag=void 0,this.returnMotion?.destroy(),this.returnMotion=void 0,this.disconnectTheme?.(),this.disconnectLighting?.(),this.overlayRef?.dispose(),this.overlayRef=void 0}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-bottom-drawer`]],viewQuery:function(e,n){e&1&&Yy(n.surfaceTemplate,Ep,5)(n.handleZone,Pp,5)(n.surface,Op,5),e&2&&fb(3)},inputs:{open:[1,`open`],offset:[1,`offset`],animationDuration:[1,`animationDuration`],modal:[1,`modal`],embedded:[1,`embedded`],dismissible:[1,`dismissible`],autoClose:[1,`autoClose`],closeOnBackdrop:[1,`closeOnBackdrop`],showBackdrop:[1,`showBackdrop`],showHandle:[1,`showHandle`],swipeToDismiss:[1,`swipeToDismiss`],showCloseButton:[1,`showCloseButton`],stickyFooter:[1,`stickyFooter`],autoFocus:[1,`autoFocus`],busy:[1,`busy`],disabled:[1,`disabled`],size:[1,`size`],maxHeight:[1,`maxHeight`],title:[1,`title`],subtitle:[1,`subtitle`],icon:[1,`icon`],ariaLabel:[1,`ariaLabel`],closeLabel:[1,`closeLabel`],headerVisible:[1,`headerVisible`],panelClass:[1,`panelClass`],panelStyle:[1,`panelStyle`],surfaceId:[1,`surfaceId`],closeGuard:[1,`closeGuard`]},outputs:{open:`openChange`,offset:`offsetChange`,closeRequest:`closeRequest`,closed:`closed`,closeCancelled:`closeCancelled`},ngContentSelectors:Lp,decls:3,vars:1,consts:[[`surfaceTemplate`,``],[`surface`,``],[`handleZone`,``],[3,`ngTemplateOutlet`],[`bxSurface`,``,`data-bx-light-scope`,``,1,`bx-drawer`,3,`ngClass`,`id`,`cdkTrapFocus`,`cdkTrapFocusAutoCapture`],[1,`bx-drawer-handle-zone`],[1,`bx-drawer-header`],[1,`bx-drawer-scroll`],[1,`bx-drawer-body`],[1,`bx-drawer-footer`],[`type`,`button`,1,`bx-drawer-handle`,3,`click`,`disabled`],[`aria-hidden`,`true`,1,`bx-drawer-handle-bar`],[1,`bx-drawer-heading`],[1,`bx-drawer-title`,3,`id`],[1,`bx-drawer-subtitle`],[1,`bx-drawer-busy`,3,`size`,`decorative`],[`type`,`button`,1,`bx-drawer-close`,3,`disabled`],[`size`,`20`,1,`bx-drawer-icon`,3,`name`,`decorative`],[`type`,`button`,1,`bx-drawer-close`,3,`click`,`disabled`],[`name`,`x`,`size`,`18`,3,`decorative`]],template:function(e,n){e&1&&(ld$1(kp),rd$1(0,Wp,9,37,`ng-template`,null,0,RA),od$1(2,qp,1,1,`ng-container`,3)),e&2&&(Xl$1(2),nd$1(n.embedded()&&n.open()?2:-1))},dependencies:[GC,YN,ZC,Et,S1,Ta],styles:[`
[_nghost-%COMP%] {
  display: contents;
}
.bx-drawer[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-modal-bg, var(--%NS%bx-panel-bg, var(--%NS%bx-bg-surface)));
  --%NS%bx-glass-text: var(--%NS%bx-modal-text, var(--%NS%bx-panel-text, var(--%NS%bx-text-primary)));
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  --%NS%bx-glass-min-opacity: var(--%NS%bx-panel-material-opacity, clamp(0.52, var(--%NS%bx-glass-material-opacity, 0.4561) + 0.45, 1));
  --%NS%bx-glass-rim-opacity: 1;
  background: var(--%NS%bx-modal-bg, var(--%NS%bx-panel-bg, var(--%NS%bx-bg-surface)));
  color: var(--%NS%bx-modal-text, var(--%NS%bx-panel-text, var(--%NS%bx-text-primary)));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  box-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  inline-size: var(--%NS%bx-drawer-width, min(100%, 34rem));
  max-inline-size: 100vw;
  min-block-size: var(--%NS%bx-drawer-min-height, 0);
  max-block-size: var(--%NS%bx-drawer-max-height, 92dvh);
  margin-inline: auto;
  border-radius: var(--%NS%bx-rounded-3xl, 1.875rem) var(--%NS%bx-rounded-3xl, 1.875rem) 0 0;
  overflow: hidden;
  outline: none;
  transform: translateY(var(--%NS%bx-drawer-offset, 0));
  transform-origin: bottom center;
  transition: transform var(--%NS%bx-drawer-duration, 280ms) linear(0, 0.32 12%, 0.78 30%, 0.97 52%, 1.012 70%, 1);
  padding-block-end: env(safe-area-inset-bottom, 0);
  isolation: isolate;
  pointer-events: auto;
}
.bx-drawer.is-dragging[_ngcontent-%COMP%] {
  transition: none;
  cursor: grabbing;
}
.bx-drawer.is-entering[_ngcontent-%COMP%], 
.bx-drawer.is-closing[_ngcontent-%COMP%] {
  transition: transform var(--%NS%bx-drawer-duration, 280ms) linear(0, 0.32 12%, 0.78 30%, 0.97 52%, 1.012 70%, 1);
}
.bx-drawer.is-size-sm[_ngcontent-%COMP%] {
  max-block-size: min(42dvh, var(--%NS%bx-drawer-max-height-limit, 28rem));
}
.bx-drawer.is-size-md[_ngcontent-%COMP%] {
  max-block-size: min(68dvh, var(--%NS%bx-drawer-max-height-limit, 44rem));
}
.bx-drawer.is-size-lg[_ngcontent-%COMP%] {
  max-block-size: min(88dvh, var(--%NS%bx-drawer-max-height-limit, 56rem));
}
.bx-drawer.is-size-full[_ngcontent-%COMP%] {
  block-size: 100dvh;
  max-block-size: 100dvh;
  border-radius: 0;
}
.bx-drawer.is-embedded[_ngcontent-%COMP%] {
  inline-size: 100%;
  max-inline-size: none;
  margin: 0;
  box-shadow: none;
  border: 0;
}
.bx-drawer.is-disabled[_ngcontent-%COMP%]   .bx-drawer-handle[_ngcontent-%COMP%] {
  cursor: default;
}
.bx-drawer-handle-zone[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  block-size: var(--%NS%bx-space-6, 1.5rem);
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: grab;
}
.bx-drawer-handle-zone[_ngcontent-%COMP%]:active {
  cursor: grabbing;
}
.bx-drawer-handle[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  inline-size: 100%;
  block-size: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.bx-drawer-handle[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-drawer-handle[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: -2px;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.bx-drawer-handle-bar[_ngcontent-%COMP%] {
  inline-size: 3.5rem;
  block-size: 0.33rem;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background-color: var(--%NS%bx-drawer-handle-color, var(--%NS%bx-border-default));
  opacity: 0.6;
}
.bx-drawer-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  flex-shrink: 0;
  padding: 0 var(--%NS%bx-space-5, 1.25rem) var(--%NS%bx-space-4, 1rem);
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
}
.bx-drawer-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  color: var(--%NS%bx-text-accent);
}
.bx-drawer-heading[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-1, 0.25rem);
  min-inline-size: 0;
  flex: 1;
}
.bx-drawer-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.35;
  color: var(--%NS%bx-text-primary);
  overflow-wrap: anywhere;
}
.bx-drawer-subtitle[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
}
.bx-drawer-busy[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.bx-drawer-close[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: 2.25rem;
  block-size: 2.25rem;
  padding: 0;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) transparent;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
}
.bx-drawer-close[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-bg-element-hover);
  color: var(--%NS%bx-text-primary);
}
.bx-drawer-close[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 2px;
}
.bx-drawer-close[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-drawer-scroll[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-block-size: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}
.bx-drawer-body[_ngcontent-%COMP%] {
  flex: 1 0 auto;
  padding: var(--%NS%bx-drawer-body-padding, 0 var(--%NS%bx-space-5, 1.25rem) var(--%NS%bx-space-5, 1.25rem));
  min-block-size: 0;
}
.bx-drawer-footer[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-shrink: 0;
  padding: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-5, 1.25rem);
  border-block-start: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-drawer-footer-border-color, var(--%NS%bx-border-subtle));
  background: var(--%NS%bx-drawer-footer-background, var(--%NS%bx-bg-surface));
}
.bx-drawer-footer[_ngcontent-%COMP%]:empty {
  display: none;
}
.is-sticky-footer[_ngcontent-%COMP%]   .bx-drawer-footer[_ngcontent-%COMP%] {
  position: sticky;
  inset-block-end: 0;
  z-index: 1;
}
@media (max-width: 768px) {
  .bx-drawer[_ngcontent-%COMP%] {
    --%NS%bx-drawer-width: 100%;
    border-radius: var(--%NS%bx-rounded-3xl, 1.875rem) var(--%NS%bx-rounded-3xl, 1.875rem) 0 0;
  }
  .bx-drawer.is-size-full[_ngcontent-%COMP%] {
    max-block-size: 100dvh;
  }
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .bx-drawer[_ngcontent-%COMP%] {
    background: var(--%NS%bx-bg-surface);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
}
[data-bx-reduced-transparency=true][_nghost-%COMP%]   .bx-drawer[_ngcontent-%COMP%], [data-bx-reduced-transparency=true]   [_nghost-%COMP%]   .bx-drawer[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-surface);
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
}`]})};function $n(i,t,e,n,r,a,o=`short`){let s=t.getMonthStart(i,e),l=t.addMonths(s,1,e),u=Math.max(1,Wr$1(s,l)),p=(Gr$1(s)-n+7)%7,f=a?42:Math.ceil((p+u)/7)*7,y=ue(s,-p),E=Array.from({length:f},(z,F)=>{let X=ue(y,F),A=yr(X,n),ae=Gp(A,n,r);return{date:X,day:t.getDateParts(X,e).day,inMonth:fi$1(X,s)>=0&&fi$1(X,l)<0,weekNumber:JK(ae,e),weekStart:A,weekday:Gr$1(X)}});return{monthStart:s,label:t.getMonthLabel(s,e,o),key:t.getMonthKey(s,e),cells:E}}function rr(i,t,e,n,r,a=`short`){let o=e.getDateParts(t,n);if(i===`months`){let s=un(t,o.year,e,n),l=[],u=s,p=0;for(;p<13&&e.getDateParts(u,n).year===o.year;)l.push({date:u,label:e.getMonthName(u,n,a)||e.getMonthLabel(u,n),index:p,inPeriod:!0}),u=e.addMonths(u,1,n),p+=1;return{label:e.getYearLabel(t,n),cells:l}}if(i===`quarters`){let s=un(t,o.year,e,n),l=Array.from({length:4},(u,p)=>({date:e.addMonths(s,p*3,n),label:`Q${p+1}`,index:p,inPeriod:!0}));return{label:e.getYearLabel(t,n),cells:l}}if(i===`years`){let s=Math.floor(o.year/10)*10,l=Array.from({length:12},(u,p)=>({date:e.addYears(un(t,o.year,e,n),s+p-o.year,n),label:String(s+p),index:p,inPeriod:p<10}));return{label:`${s} \u2013 ${s+9}`,cells:l}}if(i===`decades`){let s=Math.floor(o.year/100)*100,l=Array.from({length:12},(u,p)=>{let f=s+p*10;return{date:e.addYears(un(t,o.year,e,n),f-o.year,n),label:`${f} \u2013 ${f+9}`,index:p,inPeriod:p<10}});return{label:`${s} \u2013 ${s+99}`,cells:l}}return{label:``,cells:[]}}function ar(i,t,e){return Jo$1(i,t,e)}function ml(i,t,e){return t===`week`?yr(i,e):t===`month`?Qo$1(i):t===`quarter`?bi$1(i):nc$1(i)}function ba(i,t,e){return Jo$1(i,t,e).end}function Wn(i,t,e,n,r){switch(t){case`days`:return n.addMonths(i,e,r);case`months`:return n.addYears(i,e,r);case`quarters`:return n.addYears(i,e,r);case`years`:return _o(nc$1(i),e*10);case`decades`:return _o(nc$1(i),e*100)}}function un(i,t,e,n){return e.isGregorian?nc$1(i):e.fromDateParts({year:t,monthIndex:0,day:1},n)??nc$1(i)}function Gp(i,t,e){let n=ue(i,7-e),r=Te(n)?.year??0,a=yr(`${String(r).padStart(4,`0`)}-01-01`,t);return(Te(ue(a,7-e))?.year??0)<r&&(a=ue(a,7)),Math.floor(Wr$1(a,i)/7)+1}function ha(i,t){return i.map((e,n)=>{let r=n%t,a=r>0?n-1:-1,o=r+1<t?n+1:-1,s=n-t,l=n+t,u=f=>!!i[f]?.inRange&&i[f].isPreview===e.isPreview,p=(f,y,E)=>{let z=i[f];return e.inRange||!z?.inRange||!i[y]?.inRange||!i[E]?.inRange||z.isPreview!==i[y].isPreview||z.isPreview!==i[E].isPreview?null:z.isPreview?`preview`:`selection`};return{startStart:e.inRange&&!u(s)&&!u(a),startEnd:e.inRange&&!u(s)&&!u(o),endStart:e.inRange&&!u(l)&&!u(a),endEnd:e.inRange&&!u(l)&&!u(o),concaveStartStart:p(s,a,a<0?-1:a-t),concaveStartEnd:p(s,o,o<0?-1:o-t),concaveEndStart:p(l,a,a<0?-1:a+t),concaveEndEnd:p(l,o,o<0?-1:o+t)}})}var Kp=[`grid`];var Zp=(i,t)=>t[0]?.date;var bl=(i,t)=>t.date;function Xp(i,t){i&1&&sd$1(0,`bx-icon`,7),i&2&&xo(`decorative`,!0)}function Yp(i,t){if(i&1&&(bo(0,`div`,16),lA(1),Go$1()),i&2){let e=Wo$1().$index,n=Wo$1(2);Xl$1(),ik(n.monthGrids()[e].label)}}function Qp(i,t){i&1&&(bo(0,`th`,18)(1,`span`,20),lA(2,`Week`),Go$1()())}function Jp(i,t){if(i&1&&(bo(0,`th`,19),lA(1),Go$1()),i&2){let e=t.$implicit,n=t.$index,r=Wo$1(3);vo(`aria-label`,r.weekdayFullNames()[n]),Xl$1(),ik(e)}}function em(i,t){if(i&1&&$s$1(0,23),i&2){let e=Wo$1(2).$implicit,n=Wo$1(3);xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,n.weekContext(e))}}function tm(i,t){if(i&1&&(bo(0,`span`),lA(1),Go$1()),i&2){let e=Wo$1(2).$implicit;Xl$1(),ik(e[0]?.weekNumber)}}function nm(i,t){if(i&1&&(bo(0,`th`,21),od$1(1,em,1,2,`ng-container`,23)(2,tm,2,1,`span`),Go$1()),i&2){let e,n=Wo$1(4);Xl$1(),nd$1((e=n.weekNumberTemplate())?1:2,e)}}function im(i,t){if(i&1&&$s$1(0,23),i&2){let e=Wo$1().$implicit,n=Wo$1(4);xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,n.dayContext(e))}}function rm(i,t){if(i&1&&(bo(0,`span`,27),lA(1),Go$1()),i&2){let e=Wo$1(2).$implicit;Xl$1(),ik(e.metadata.badge)}}function am(i,t){if(i&1&&sd$1(0,`span`,28),i&2){let e=Wo$1(2).$implicit;vo(`data-tone`,e.metadata.tone??`neutral`)}}function om(i,t){if(i&1&&(bo(0,`span`,26),lA(1),Go$1(),od$1(2,rm,2,1,`span`,27),od$1(3,am,1,1,`span`,28)),i&2){let e=Wo$1().$implicit;Xl$1(),ik(e.day),Xl$1(),nd$1(e.metadata?.badge?2:-1),Xl$1(),nd$1(e.metadata?3:-1)}}function sm(i,t){if(i&1){let e=pb();bo(0,`td`,24)(1,`button`,25),br(`click`,function(r){let a=al$1(e).$implicit,o=Wo$1(4);return cl$1(o.onDayClick(a,r))})(`mouseenter`,function(){let r=al$1(e).$implicit,a=Wo$1(4);return cl$1(a.onDayHover(r))})(`focus`,function(){let r=al$1(e).$implicit,a=Wo$1(4);return cl$1(a.onDayFocus(r))}),od$1(2,im,1,2,`ng-container`,23)(3,om,4,3),Go$1()()}if(i&2){let e,n=t.$implicit,r=t.$index,a=Wo$1().$index,o=Wo$1().$index,s=Wo$1(2);tr$1(`is-outside`,!n.inMonth)(`is-weekend`,n.isWeekend)(`is-in-range`,n.inRange)(`is-preview`,n.isPreview)(`is-range-start`,n.isRangeStart)(`is-range-end`,n.isRangeEnd)(`has-start-start-corner`,s.dayRangeCorners()[o][a*7+r].startStart)(`has-start-end-corner`,s.dayRangeCorners()[o][a*7+r].startEnd)(`has-end-start-corner`,s.dayRangeCorners()[o][a*7+r].endStart)(`has-end-end-corner`,s.dayRangeCorners()[o][a*7+r].endEnd)(`has-concave-start-start`,!!s.dayRangeCorners()[o][a*7+r].concaveStartStart)(`is-concave-start-start-preview`,s.dayRangeCorners()[o][a*7+r].concaveStartStart===`preview`)(`has-concave-start-end`,!!s.dayRangeCorners()[o][a*7+r].concaveStartEnd)(`is-concave-start-end-preview`,s.dayRangeCorners()[o][a*7+r].concaveStartEnd===`preview`)(`has-concave-end-start`,!!s.dayRangeCorners()[o][a*7+r].concaveEndStart)(`is-concave-end-start-preview`,s.dayRangeCorners()[o][a*7+r].concaveEndStart===`preview`)(`has-concave-end-end`,!!s.dayRangeCorners()[o][a*7+r].concaveEndEnd)(`is-concave-end-end-preview`,s.dayRangeCorners()[o][a*7+r].concaveEndEnd===`preview`),vo(`aria-selected`,n.isSelected)(`aria-disabled`,n.disabled),Xl$1(),tr$1(`is-selected`,n.isSelected&&!n.inRange)(`is-range-start`,n.isRangeStart)(`is-range-end`,n.isRangeEnd)(`is-in-range`,n.inRange)(`is-preview`,n.isPreview)(`is-today`,s.showToday()&&n.isToday)(`is-disabled`,n.disabled)(`is-outside`,!n.inMonth)(`has-metadata`,!!n.metadata),vo(`data-focus-date`,n.date)(`data-date`,n.date)(`tabindex`,n.tabIndex)(`aria-label`,n.label)(`aria-current`,s.showToday()&&n.isToday?`date`:null)(`aria-disabled`,n.disabled),Xl$1(),nd$1((e=s.dayTemplate())?2:3,e)}}function lm(i,t){if(i&1&&(bo(0,`tr`),od$1(1,nm,3,1,`th`,21),ab(2,sm,4,63,`td`,22,bl),Go$1()),i&2){let e=t.$implicit,n=Wo$1(3);Xl$1(),nd$1(n.showWeekNumbers()?1:-1),Xl$1(),cb(e)}}function dm(i,t){if(i&1&&(bo(0,`div`,15),od$1(1,Yp,2,1,`div`,16),bo(2,`table`,17)(3,`thead`)(4,`tr`),od$1(5,Qp,3,0,`th`,18),ab(6,Jp,2,2,`th`,19,MT),Go$1()(),bo(8,`tbody`),ab(9,lm,4,1,`tr`,null,Zp),Go$1()()()),i&2){let e=t.$implicit,n=t.$index,r=Wo$1(2);Xl$1(),nd$1(r.hasMultipleMonths()?1:-1),Xl$1(),vo(`aria-label`,r.monthGrids()[n].label),Xl$1(3),nd$1(r.showWeekNumbers()?5:-1),Xl$1(),cb(r.weekdayNames()),Xl$1(3),cb(e)}}function cm(i,t){if(i&1&&(bo(0,`div`,11),ab(1,dm,11,3,`div`,15,MT),Go$1()),i&2){let e=Wo$1();Xl$1(),cb(e.weekRows())}}function um(i,t){if(i&1&&$s$1(0,23),i&2){let e=Wo$1().$implicit,n=Wo$1(2);xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,n.periodContext(e))}}function pm(i,t){if(i&1&&lA(0),i&2){let e=Wo$1().$implicit;mb(` `,e.label,` `)}}function mm(i,t){if(i&1){let e=pb();bo(0,`button`,31),br(`click`,function(r){let a=al$1(e).$implicit,o=Wo$1(2);return cl$1(o.onPeriodClick(a,r))})(`mouseenter`,function(){let r=al$1(e).$implicit,a=Wo$1(2);return cl$1(a.onPeriodHover(r))})(`focus`,function(){let r=al$1(e).$implicit,a=Wo$1(2);return cl$1(a.onPeriodFocus(r))}),od$1(1,um,1,2,`ng-container`,23)(2,pm,1,1),Go$1()}if(i&2){let e,n=t.$implicit,r=t.$index,a=Wo$1(2);tr$1(`is-selected`,n.isSelected)(`is-in-range`,n.inRange)(`is-preview`,n.isPreview)(`is-range-start`,n.isRangeStart)(`is-range-end`,n.isRangeEnd)(`has-start-start-corner`,a.periodRangeCorners()[r].startStart)(`has-start-end-corner`,a.periodRangeCorners()[r].startEnd)(`has-end-start-corner`,a.periodRangeCorners()[r].endStart)(`has-end-end-corner`,a.periodRangeCorners()[r].endEnd)(`has-concave-start-start`,!!a.periodRangeCorners()[r].concaveStartStart)(`is-concave-start-start-preview`,a.periodRangeCorners()[r].concaveStartStart===`preview`)(`has-concave-start-end`,!!a.periodRangeCorners()[r].concaveStartEnd)(`is-concave-start-end-preview`,a.periodRangeCorners()[r].concaveStartEnd===`preview`)(`has-concave-end-start`,!!a.periodRangeCorners()[r].concaveEndStart)(`is-concave-end-start-preview`,a.periodRangeCorners()[r].concaveEndStart===`preview`)(`has-concave-end-end`,!!a.periodRangeCorners()[r].concaveEndEnd)(`is-concave-end-end-preview`,a.periodRangeCorners()[r].concaveEndEnd===`preview`)(`is-current`,n.isSelected&&!a.modeInfo().isPeriod)(`is-disabled`,n.disabled)(`is-outside`,!n.inPeriod)(`is-today`,a.showToday()&&n.isToday),vo(`tabindex`,n.tabIndex)(`data-focus-date`,n.date)(`aria-selected`,n.isSelected)(`aria-disabled`,n.disabled)(`aria-label`,n.label),Xl$1(),nd$1((e=a.periodTemplate())?1:2,e)}}function gm(i,t){if(i&1&&(bo(0,`div`,29),ab(1,mm,3,48,`button`,30,bl),Go$1()),i&2){let e=Wo$1();tr$1(`is-four-columns`,e.viewMode()!==`months`),vo(`aria-label`,e.headerLabel()),Xl$1(),cb(e.periodGrid().cells)}}function bm(i,t){if(i&1&&sd$1(0,`bx-loading-indicator`,32),i&2){let e=Wo$1(2);xo(`size`,20)(`label`,e.resolvedLoadingLabel())}}function hm(i,t){if(i&1&&$s$1(0,23),i&2){let e=Wo$1(4);xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.retryContext())}}function fm(i,t){if(i&1){let e=pb();bo(0,`button`,36),br(`click`,function(){al$1(e);let r=Wo$1(4);return cl$1(r.retry())}),sd$1(1,`bx-icon`,37),lA(2),Go$1()}if(i&2){let e=Wo$1(4);Xl$1(),xo(`decorative`,!0),Xl$1(),mb(``,e.resolvedRetryLabel(),` `)}}function vm(i,t){if(i&1&&od$1(0,hm,1,2,`ng-container`,23)(1,fm,3,2,`button`,35),i&2){let e,n=Wo$1(3);nd$1((e=n.retryTemplate())?0:1,e)}}function ym(i,t){if(i&1&&(bo(0,`span`,34),lA(1),Go$1(),od$1(2,vm,2,1)),i&2){let e=Wo$1(2);Xl$1(),ik(e.availabilityError()),Xl$1(),nd$1(e.availability()?.retryable!==!1?2:-1)}}function xm(i,t){if(i&1&&(bo(0,`span`,33),lA(1),Go$1()),i&2){let e=Wo$1(2);Xl$1(),ik(e.resolvedEmptyLabel())}}function Sm(i,t){if(i&1&&(bo(0,`div`,13),od$1(1,bm,1,2,`bx-loading-indicator`,32)(2,ym,3,2)(3,xm,2,1,`span`,33),Go$1()),i&2){let e=Wo$1();Xl$1(),nd$1(e.availabilityLoading()?1:e.availabilityError()?2:3)}}function Cm(i,t){if(i&1){let e=pb();bo(0,`div`,14)(1,`button`,38),br(`click`,function(){al$1(e);let r=Wo$1();return cl$1(r.selectToday())}),lA(2),Go$1()()}if(i&2){let e=Wo$1();Xl$1(),xo(`disabled`,e.todayDisabled()),Xl$1(),ik(e.resolvedTodayLabel())}}var gl=class i{bxDateTimeConfigService=b(vC);clock=b(hC);i18n=b(VQ,{optional:!0});focusDateState=$(null);draftStart=$(null);previewFocusDate=$(null);hoverDate=$(null);viewModeState=$(null);retryRevision=$(0);gridElement=Sz(`grid`);settings=G(()=>this.bxDateTimeConfigService.resolve({locale:this.locale(),calendar:this.calendarId(),timeZone:this.timeZone(),weekStartsOn:this.weekStartsOn(),minimalDaysInFirstWeek:this.minimalDaysInFirstWeek()}));adapter=G(()=>this.bxDateTimeConfigService.adapter(this.settings().calendar));modeInfo=G(()=>Jh(this.mode()));today=G(()=>{let t=this.clock.now(),e=new Intl.DateTimeFormat(`en-CA`,{timeZone:this.settings().timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(t),n=r=>e.find(a=>a.type===r)?.value??``;return`${n(`year`)}-${n(`month`)}-${n(`day`)}`});effectiveViewDate=G(()=>this.viewDate()??this.valueAnchor()??this.today());viewMode=G(()=>{let t=this.viewModeState();if(t)return t;let e=this.startView();if(e)return e;let n=this.modeInfo().period;return n===`month`?`months`:n===`quarter`?`quarters`:n===`year`?`years`:`days`});adapterContext=G(()=>({locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));previousDisabled=G(()=>!this.canNavigate(-1));nextDisabled=G(()=>!this.canNavigate(1));weekdayNames=G(()=>{let t=this.adapter().getWeekdayNames(this.settings().locale,this.weekdayNameFormat());return Array.from({length:7},(e,n)=>t[(this.settings().weekStartsOn+n)%7])});weekdayFullNames=G(()=>{let t=this.adapter().getWeekdayNames(this.settings().locale,`long`);return Array.from({length:7},(e,n)=>t[(this.settings().weekStartsOn+n)%7])});monthGrids=G(()=>{let t=this.effectiveViewDate(),e=Math.max(1,Math.min(4,this.months()));return Array.from({length:e},(n,r)=>$n(this.adapter().addMonths(t,r,this.settings().locale),this.adapter(),this.settings().locale,this.settings().weekStartsOn,this.settings().minimalDaysInFirstWeek,this.fixedWeeks(),this.monthNameFormat()))});visibleRange=G(()=>{let t=this.monthGrids();return{start:t[0]?.cells[0]?.date??this.today(),end:t[t.length-1]?.cells.at(-1)?.date??this.today(),monthKeys:t.map(r=>r.key)}});metadataMap=G(()=>{let t=/* @__PURE__ */ new Map;for(let e of this.availability()?.dates??[])t.set(e.date,e);for(let e of this.metadata())t.has(e.date)||t.set(e.date,e);return t});availabilityActive=G(()=>this.availability()!==void 0);availabilityLoading=G(()=>this.availability()?.loading===!0);availabilityError=G(()=>LQ(this.availability()?.error,this.i18n));availabilityEmpty=G(()=>{let t=this.availability();return!!t&&!t.loading&&!t.error&&(t.dates?.length??0)===0&&(t.revision??0)>0});resolvedLoadingLabel=G(()=>LQ(this.loadingLabel(),this.i18n));resolvedRetryLabel=G(()=>LQ(this.retryLabel(),this.i18n));retryContext=G(()=>({label:this.resolvedRetryLabel(),retry:()=>this.retry()}));resolvedEmptyLabel=G(()=>LQ(this.emptyLabel(),this.i18n));resolvedAriaLabel=G(()=>LQ(this.ariaLabel(),this.i18n));resolvedPreviousLabel=G(()=>LQ(this.previousLabel(),this.i18n));resolvedNextLabel=G(()=>LQ(this.nextLabel(),this.i18n));todayDisabled=G(()=>this.readOnly()||this.evaluateRestriction(this.today()).disabled);resolvedTodayLabel=G(()=>LQ(this.todayLabel(),this.i18n));restrictionConfig=G(()=>({min:this.min(),max:this.max(),disabledDates:this.disabledDates(),disabledIntervals:this.disabledIntervals(),disabledWeekdays:this.disabledWeekdays(),isDateDisabled:this.dateFilter(),metadata:[...this.metadataMap().values()],blockUnknownAvailability:this.blockUnverifiedAvailability()}));dayCellGroups=G(()=>{let t=this.draftStart()?null:this.committedRange(),e=this.draftPreview(),n=this.draftStart()?/* @__PURE__ */ new Set:this.selectedSet(),r=this.focusCellDate(),a=this.today();return this.monthGrids().map(o=>o.cells.map(s=>{let l=this.evaluateRestriction(s.date),u=this.metadataMap().get(s.date),p=!!t&&sC(s.date,t),f=!!e&&sC(s.date,e),y=f&&!p,E=y?e:t,z=p||f;return{date:s.date,day:s.day,inMonth:s.inMonth,inRange:z,isRangeStart:!!E?.start&&s.date===E.start,isRangeEnd:!!E?.end&&s.date===E.end,isPreview:y,isSelected:n.has(s.date)||p,isToday:s.date===a,isWeekend:s.weekday===0||s.weekday===6,disabled:l.disabled||this.readOnly(),restriction:l.reason,metadata:u,weekNumber:s.weekNumber,tabIndex:s.date===r?0:-1,label:this.dayLabel(s.date,u)}}))});dayCells=G(()=>this.dayCellGroups().flat());dayRangeCorners=G(()=>this.dayCellGroups().map(t=>ha(t,7)));weekRows=G(()=>this.dayCellGroups().map(t=>{let e=[];for(let n=0;n<t.length;n+=7)e.push(t.slice(n,n+7));return e}));periodGrid=G(()=>{let t=this.viewMode();if(t===`days`)return{label:``,cells:[]};let e=rr(t,this.effectiveViewDate(),this.adapter(),this.settings().locale,this.settings().weekStartsOn,this.monthNameFormat()),n=t===`months`?`month`:t===`quarters`?`quarter`:t===`years`?`year`:`decade`,r=this.draftStart()?null:this.committedRange(),a=this.draftPreview(),o=n===this.modeInfo().period,s=this.focusCellDate();return{label:e.label,cells:e.cells.map(l=>{let u=this.evaluateRestriction(l.date),p=n===`decade`?`year`:n,f=this.previewPeriodBounds(l.date,p),y=o&&!!r?.start&&!!r.end&&l.date<=r.end&&f.end>=r.start,E=o&&!!a?.start&&!!a.end&&l.date<=a.end&&f.end>=a.start,z=E&&!y,F=z?a:r,X=o?y:this.sameView(l.date,this.effectiveViewDate()),A=o&&this.modeInfo().isRange&&(y||E);return{date:l.date,label:l.label,kind:n,index:l.index,inPeriod:l.inPeriod,inRange:A,isPreview:z,isRangeStart:A&&!!F?.start&&l.date<=F.start&&f.end>=F.start,isRangeEnd:A&&!!F?.end&&l.date<=F.end&&f.end>=F.end,isSelected:X,isToday:n!==`decade`&&l.date<=this.today()&&f.end>=this.today(),disabled:u.disabled&&!this.periodContainsSelectable(l.date,p,f.end)||this.readOnly(),tabIndex:l.date===s?0:-1}})}});periodRangeCorners=G(()=>ha(this.periodGrid().cells,this.viewMode()===`months`?3:4));headerLabel=G(()=>{if(this.viewMode()===`days`){let e=this.monthGrids();return e.length>1?`${e[0]?.label??``} \u2013 ${e[e.length-1]?.label??``}`:e[0]?.label??``}return this.periodGrid().label});headerStepLabel=G(()=>this.viewMode()===`days`?`month`:this.viewMode());hasMultipleMonths=G(()=>this.months()>1);weekdayNameFormat=ee(`narrow`);monthNameFormat=ee(`short`);mode=ee(`single`);value=_z(null);viewDate=_z(null);startView=ee(void 0);locale=ee(void 0);calendarId=ee(void 0);timeZone=ee(void 0);weekStartsOn=ee(void 0);minimalDaysInFirstWeek=ee(void 0);months=ee(1,{transform:Mb});fixedWeeks=ee(!0,{transform:Ye});showWeekNumbers=ee(!1,{transform:Ye});showAdjacentDays=ee(!0,{transform:Ye});showToday=ee(!0,{transform:Ye});showTodayButton=ee(!0,{transform:Ye});min=ee(void 0);max=ee(void 0);disabledDates=ee([]);disabledIntervals=ee([]);disabledWeekdays=ee([]);dateFilter=ee(void 0);metadata=ee([]);availability=ee(void 0);blockUnverifiedAvailability=ee(!0,{transform:Ye});crossingPolicy=ee(`reject`);minRangeLength=ee(1);maxRangeLength=ee(null);allowSameDay=ee(!0,{transform:Ye});selectionLimit=ee(null);readOnly=ee(!1,{transform:Ye});ariaLabel=ee(`Calendar`);loadingLabel=ee(void 0);retryTemplate=ee(void 0);retryLabel=ee(`Retry`);emptyLabel=ee(`No dates available.`);previousLabel=ee(`Previous period`);nextLabel=ee(`Next period`);todayLabel=ee(void 0);dayTemplate=ee(void 0);periodTemplate=ee(void 0);weekNumberTemplate=ee(void 0);viewChange=Pk();monthSelected=Pk();yearSelected=Pk();dateSelect=Pk();rangeStart=Pk();selectionRejected=Pk();visibleRangeChange=Pk();requestAvailability=Pk();retryAvailability=Pk();lastRequestSignature=``;constructor(){We(()=>this.viewChange.emit(this.viewMode())),We(()=>{let t=this.value(),e=this.modeInfo();this.draftStart.set(e.selection===`range`&&yC(t)&&!t.end?t.start:null),this.hoverDate.set(null)}),We(()=>{let t=this.visibleRange(),e=this.settings(),n=this.retryRevision(),r=`${e.calendar}|${e.locale}|${e.timeZone}|${t.start}|${t.end}|${n}`;if(r===this.lastRequestSignature)return;let a=this.lastRequestSignature.split(`|`),o=a[2],s=this.lastRequestSignature?n>0&&r.endsWith(`|${n}`)&&a.length===6&&a[5]===String(n-1)?`retry`:o!==e.timeZone?`timezone`:`navigate`:`initial`;this.lastRequestSignature=r,this.visibleRangeChange.emit(t),this.requestAvailability.emit({start:t.start,end:t.end,monthKeys:t.monthKeys,calendar:e.calendar,locale:e.locale,timeZone:e.timeZone,revision:n,source:s})})}goToToday(){this.viewDate.set(this.today()),this.viewModeState.set(this.modeInfo().period?null:`days`),this.focusDateState.set(this.today())}selectToday(){let t=this.today();this.readOnly()||this.evaluateRestriction(t).disabled||(this.goToToday(),!(this.mode()===`multiple`&&Array.isArray(this.value())&&this.value().includes(t))&&this.selectDate(t,!0))}retry(){this.availabilityLoading()||this.availability()?.retryable===!1||this.retryRevision.update(t=>t+1)}focusDate(t){this.focusDateState.set(t),this.viewDate.set(t),this.focusRenderedCell(t)}dayContext(t){return{$implicit:t,selected:t.isSelected,inRange:t.inRange,endpoint:t.isRangeStart||t.isRangeEnd,today:t.isToday,disabled:t.disabled,metadata:t.metadata}}periodContext(t){return{$implicit:t,selected:t.isSelected,inRange:t.inRange,endpoint:t.isRangeStart||t.isRangeEnd,disabled:t.disabled}}weekContext(t){return{$implicit:t[0]?.weekNumber??``,weekStart:t[0]?.date??this.today()}}onDayFocus(t){this.focusDateState.set(t.date),this.previewFocusDate.set(t.disabled?null:t.date)}onPeriodFocus(t){this.focusDateState.set(t.date),this.previewFocusDate.set(t.disabled?null:t.date)}onPeriodHover(t){t.disabled||this.readOnly()||this.hoverDate.set(t.date)}onGridBlur(t){let e=t.relatedTarget;e instanceof HTMLElement&&this.gridElement()?.nativeElement.contains(e)&&e.hasAttribute(`data-focus-date`)||this.previewFocusDate.set(null)}onDayClick(t,e){t.disabled||this.readOnly()||(e.preventDefault(),this.focusDateState.set(t.date),this.selectDate(t.date,t.inMonth))}onDayHover(t){t.disabled||this.readOnly()||!this.draftStart()&&this.modeInfo().period!==`week`||this.hoverDate.set(t.date)}onGridLeave(){this.hoverDate.set(null)}onPeriodClick(t,e){if(t.disabled||this.readOnly())return;e.preventDefault(),this.focusDateState.set(t.date);let n=this.viewMode(),r=this.modeInfo().period;if(n===`months`?this.monthSelected.emit(t.date):n===`years`&&this.yearSelected.emit(t.date),n===`months`&&r===`month`){this.selectPeriod(t.date);return}if(n===`quarters`&&r===`quarter`){this.selectPeriod(t.date);return}if(n===`years`){r===`year`?this.selectPeriod(t.date):(this.viewDate.set(t.date),this.viewModeState.set(r===`quarter`?`quarters`:`months`));return}if(n===`decades`){this.viewDate.set(t.date),this.viewModeState.set(`years`);return}this.viewDate.set(t.date),this.viewModeState.set(`days`)}onHeaderClick(){this.hoverDate.set(null),this.previewFocusDate.set(null);let t=this.viewMode();t===`days`?this.viewModeState.set(this.modeInfo().period===`quarter`?`quarters`:`months`):t===`months`||t===`quarters`?this.viewModeState.set(`years`):t===`years`&&this.viewModeState.set(`decades`)}onHeaderKey(t){t.key!==`Enter`&&t.key!==` `||(t.preventDefault(),this.onHeaderClick())}onPrevious(){this.hoverDate.set(null),this.previewFocusDate.set(null),!this.previousDisabled()&&this.viewDate.set(Wn(this.effectiveViewDate(),this.viewMode(),-1,this.adapter(),this.settings().locale))}onNext(){this.hoverDate.set(null),this.previewFocusDate.set(null),!this.nextDisabled()&&this.viewDate.set(Wn(this.effectiveViewDate(),this.viewMode(),1,this.adapter(),this.settings().locale))}onGridKeydown(t){if(t.defaultPrevented||t.ctrlKey||t.metaKey||t.altKey&&t.key!==`PageUp`&&t.key!==`PageDown`||t.target instanceof HTMLElement&&t.target.closest(`.bx-calendar-header, .bx-calendar-footer`))return;let e=this.focusableDates();if(!e.length)return;let n=this.focusCellDate(),r=Math.max(0,e.indexOf(n??e[0])),a=this.viewMode()===`days`?7:this.viewMode()===`months`?3:4;if(t.key===`Enter`||t.key===` `){if(t.preventDefault(),this.viewMode()===`days`){let F=this.dayCells().find(X=>X.date===e[r]);F&&this.onDayClick(F,new MouseEvent(`click`))}else{let F=this.periodGrid().cells[r];F&&this.onPeriodClick(F,new MouseEvent(`click`))}return}let o=this.viewMode(),s=this.settings().locale,l=this.adapter(),u=n??e[0],p=t.key===`ArrowRight`?1:t.key===`ArrowLeft`?-1:t.key===`ArrowDown`?a:t.key===`ArrowUp`?-a:0,f=t.key===`PageDown`?1:t.key===`PageUp`?-1:0,y;if(o===`days`){if(p){let F=this.gridElement()?.nativeElement,X=F?.ownerDocument.defaultView?.getComputedStyle(F).direction===`rtl`,A=(t.key===`ArrowLeft`||t.key===`ArrowRight`)&&X?-p:p;y=ue(u,A)}else if(f)y=t.altKey?l.addYears(u,f,s):l.addMonths(u,f,s);else if(t.key===`Home`||t.key===`End`){let F=$n(u,l,s,this.settings().weekStartsOn,this.settings().minimalDaysInFirstWeek,!0).cells.filter(X=>X.inMonth);y=t.key===`Home`?F[0]?.date:F.at(-1)?.date}}else p?y=o===`months`?l.addMonths(u,p,s):o===`quarters`?l.addMonths(u,p*3,s):l.addYears(u,p*(o===`decades`?10:1),s):f?y=Wn(u,o,f,l,s):t.key===`Home`?y=e[0]:t.key===`End`&&(y=e.at(-1));if(!y)return;t.preventDefault();let E=this.min(),z=this.max();if(E&&y<E&&(y=E),z&&y>z&&(y=z),o!==`days`){let F=y;y=rr(o,F,l,s,this.settings().weekStartsOn).cells.find(X=>this.sameView(X.date,F))?.date??F}this.focusDateState.set(y),(o!==`days`||!this.monthGrids().some(F=>F.cells.some(X=>X.inMonth&&X.date===y)))&&this.viewDate.set(y),this.focusRenderedCell(y)}valueAnchor(){let t=this.value();return t?typeof t==`string`?t:Array.isArray(t)?t[0]??null:xC(t)||yC(t)?t.start:null:null}valueAnchors(){let t=this.value();return t?typeof t==`string`?{start:t,end:t}:Array.isArray(t)?{start:t[0]??null,end:t.at(-1)??null}:xC(t)?{start:t.start,end:t.end}:yC(t)?{start:t.start,end:t.end}:{start:null,end:null}:{start:null,end:null}}committedRange(){let t=this.modeInfo(),e=this.valueAnchors();return t.selection===`multiple`||!t.isRange&&!t.period||!e.start||!e.end?null:t.period?{start:this.previewPeriodBounds(e.start,t.period).start,end:this.previewPeriodBounds(e.end,t.period).end}:{start:e.start,end:e.end}}draftPreview(){if(this.readOnly())return null;let t=this.modeInfo(),e=this.draftStart(),n=this.hoverDate()??this.previewFocusDate()??e,r=this.viewMode(),a=t.period===`week`?r===`days`:r===`${t.period}s`;if(!n||t.selection===`multiple`||t.period&&!a)return null;if(t.period&&(t.isRange||t.period===`week`)){let o=this.previewPeriodBounds(e??n,t.period),s=this.previewPeriodBounds(n,t.period);return{start:o.start<s.start?o.start:s.start,end:o.end>s.end?o.end:s.end}}return e?e<=n?{start:e,end:n}:{start:n,end:e}:null}previewPeriodBounds(t,e){if(e===`week`)return ar(t,e,this.settings().weekStartsOn);let n=this.adapter(),r=this.settings().locale,a=n.getDateParts(t,r),o=un(t,a.year,n,r),s=Math.min(3,Math.floor(a.monthIndex/3)),l=e===`month`?n.getMonthStart(t,r):e===`quarter`?n.addMonths(o,s*3,r):o,u=e===`year`||e===`quarter`&&s===3?n.addYears(o,1,r):n.addMonths(l,e===`quarter`?3:1,r);return{start:l,end:ue(u,-1)}}selectedSet(){let t=this.value();return t?typeof t==`string`?/* @__PURE__ */ new Set([t]):Array.isArray(t)?new Set(t):`kind`in t?/* @__PURE__ */ new Set:/* @__PURE__ */ new Set:/* @__PURE__ */ new Set}focusCellDate(){return this.focusDateState()||(this.viewMode()===`days`?this.monthGrids()[0]?.cells.find(e=>e.inMonth)?.date??null:this.effectiveViewDate())}focusableDates(){return this.viewMode()===`days`?this.dayCells().map(t=>t.date):this.periodGrid().cells.map(t=>t.date)}focusRenderedCell(t){setTimeout(()=>this.gridElement()?.nativeElement.querySelector(`[data-focus-date="${t}"]`)?.focus({preventScroll:!0}))}selectDate(t,e){let n=this.modeInfo();if(!e&&n.selection!==`multiple`&&this.viewDate.set(t),n.period){this.selectPeriod(ml(t,n.period,this.settings().weekStartsOn));return}if(n.selection===`multiple`){this.toggleMultiple(t);return}if(n.selection===`single`){this.commit(t);return}let r=this.draftStart();if(!r){this.draftStart.set(t),this.hoverDate.set(t),this.rangeStart.emit(t);return}this.completeRange(r,t)}selectPeriod(t){let e=this.modeInfo();if(!e.period)return;if(!e.isRange){this.commit(t);return}let n=this.draftStart();if(!n){this.draftStart.set(t),this.hoverDate.set(t),this.rangeStart.emit(t);return}let r=e.period===`week`&&t<n?t:n,o=ba(e.period===`week`&&n>t?n:t,e.period,this.settings().weekStartsOn),s=ba(n,e.period,this.settings().weekStartsOn),l=this.validateRange(r,o,e.period===`week`?o:s);if(!l.valid){this.selectionRejected.emit(l.reason);return}if(e.period===`week`&&l.range.end!==o){this.selectionRejected.emit(`crossing`);return}let u=n<=t?{start:n,end:t,kind:e.period}:{start:t,end:n,kind:e.period};this.draftStart.set(null),this.hoverDate.set(null),this.commit(u)}completeRange(t,e){let n=this.validateRange(t,e,e);if(!n.valid){this.selectionRejected.emit(n.reason);return}let r=t<=e?{start:t,end:e}:{start:e,end:t},a=n.range.start&&n.range.end?n.range:r;this.draftStart.set(null),this.hoverDate.set(null),this.commit({start:a.start,end:a.end})}validateRange(t,e,n){let r=this.restrictionConfig(),a=t<=e?{start:t,end:e}:{start:e,end:t},o=a.start??t,s=a.end??e,l=Math.abs(this.dayDifference(o,n))+1;if(r.min&&(o<r.min||s<r.min))return{valid:!1,reason:`endpoint`,range:a};if(r.max&&(o>r.max||s>r.max))return{valid:!1,reason:`endpoint`,range:a};if(!this.allowSameDay()&&t===e)return{valid:!1,reason:`min-length`,range:a};if(l<Math.max(1,this.minRangeLength()))return{valid:!1,reason:`min-length`,range:a};if(this.maxRangeLength()!==null&&l>Math.max(1,this.maxRangeLength()??1))return{valid:!1,reason:`max-length`,range:a};if(this.evaluateRestriction(o).disabled||this.evaluateRestriction(s).disabled)return{valid:!1,reason:`endpoint`,range:a};let u=this.firstBlockedDate(a);if(!u)return{valid:!0,reason:`crossing`,range:a};if(this.crossingPolicy()===`allow`)return{valid:!0,reason:`crossing`,range:a};if(this.crossingPolicy()===`truncate`){let p={start:a.start,end:this.addDays(u,-1)};if(p.start&&p.end&&p.start<=p.end&&this.dayDifference(p.start,p.end)+1>=Math.max(1,this.minRangeLength()))return{valid:!0,reason:`crossing`,range:p}}return{valid:!1,reason:`crossing`,range:a}}toggleMultiple(t){let e=Array.isArray(this.value())?[...this.value()]:[],n=e.indexOf(t),r=this.selectionLimit();if(n>=0)e.splice(n,1);else{if(r!==null&&e.length>=r){this.selectionRejected.emit(`limit`);return}e.push(t)}this.commit([...e].sort((a,o)=>a<o?-1:a>o?1:0))}commit(t){this.value.set(t);let e=this.valueAnchor();e&&this.dateSelect.emit(e)}evaluateRestriction(t){if(this.modeInfo().period===`week`){let e=ar(t,`week`,this.settings().weekStartsOn).start;for(let n=0;n<7;n++){let r=this.evaluateDayRestriction(ue(e,n));if(r.disabled)return r}}return this.evaluateDayRestriction(t)}evaluateDayRestriction(t){let e=dg(t,this.restrictionConfig());return this.availability()?this.metadataMap().get(t)?e:this.blockUnverifiedAvailability()?{disabled:!0,reason:`unknown`}:e:e}periodContainsSelectable(t,e,n){let r=ar(t,e,this.settings().weekStartsOn).start,a=this.min(),o=this.max();return!(a&&n<a||o&&r>o)}sameView(t,e){let n=this.viewMode(),r=this.adapter().getDateParts(t,this.settings().locale),a=this.adapter().getDateParts(e,this.settings().locale);return n===`months`?r.year===a.year&&r.monthIndex===a.monthIndex:n===`quarters`?r.year===a.year&&Math.floor(r.monthIndex/3)===Math.floor(a.monthIndex/3):n===`years`?r.year===a.year:Math.floor(r.year/10)===Math.floor(a.year/10)}canNavigate(t){let e=this.adapter(),n=this.settings().locale,r=this.viewMode(),a=Wn(this.effectiveViewDate(),r,t,e,n),o=this.min(),s=this.max(),l,u;if(r===`days`){let p=$n(a,e,n,this.settings().weekStartsOn,this.settings().minimalDaysInFirstWeek,!0),f=$n(e.addMonths(a,Math.max(1,Math.min(4,this.months()))-1,n),e,n,this.settings().weekStartsOn,this.settings().minimalDaysInFirstWeek,!0);l=p.monthStart,u=f.cells.filter(y=>y.inMonth).at(-1)?.date??l}else{let p=rr(r,a,e,n,this.settings().weekStartsOn).cells.filter(f=>f.inPeriod);l=p[0]?.date??a,u=p.at(-1)?.date??l,u=r===`months`?ue(e.addMonths(u,1,n),-1):r===`quarters`?ue(e.addMonths(u,3,n),-1):ue(e.addYears(u,r===`decades`?10:1,n),-1)}return(!o||u>=o)&&(!s||l<=s)}dayLabel(t,e){let n=XK(t,`EEEE d MMMM yyyy`,this.adapterContext()),r=LQ(e?.description,this.i18n);return r?`${n}. ${r}`:n}firstBlockedDate(t){if(!t.start||!t.end)return null;let e=t.start,n=0;for(;e<=t.end&&n<3700;){if(this.evaluateRestriction(e).disabled)return e;e=this.addDays(e,1),n+=1}return null}dayDifference(t,e){return Math.round((Date.parse(`${e}T00:00:00Z`)-Date.parse(`${t}T00:00:00Z`))/864e5)}addDays(t,e){let n=Date.parse(`${t}T00:00:00Z`)+e*864e5;return new Date(n).toISOString().slice(0,10)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-calendar`]],viewQuery:function(e,n){e&1&&Yy(n.gridElement,Kp,5),e&2&&fb()},inputs:{weekdayNameFormat:[1,`weekdayNameFormat`],monthNameFormat:[1,`monthNameFormat`],mode:[1,`mode`],value:[1,`value`],viewDate:[1,`viewDate`],startView:[1,`startView`],locale:[1,`locale`],calendarId:[1,`calendarId`],timeZone:[1,`timeZone`],weekStartsOn:[1,`weekStartsOn`],minimalDaysInFirstWeek:[1,`minimalDaysInFirstWeek`],months:[1,`months`],fixedWeeks:[1,`fixedWeeks`],showWeekNumbers:[1,`showWeekNumbers`],showAdjacentDays:[1,`showAdjacentDays`],showToday:[1,`showToday`],showTodayButton:[1,`showTodayButton`],min:[1,`min`],max:[1,`max`],disabledDates:[1,`disabledDates`],disabledIntervals:[1,`disabledIntervals`],disabledWeekdays:[1,`disabledWeekdays`],dateFilter:[1,`dateFilter`],metadata:[1,`metadata`],availability:[1,`availability`],blockUnverifiedAvailability:[1,`blockUnverifiedAvailability`],crossingPolicy:[1,`crossingPolicy`],minRangeLength:[1,`minRangeLength`],maxRangeLength:[1,`maxRangeLength`],allowSameDay:[1,`allowSameDay`],selectionLimit:[1,`selectionLimit`],readOnly:[1,`readOnly`],ariaLabel:[1,`ariaLabel`],loadingLabel:[1,`loadingLabel`],retryTemplate:[1,`retryTemplate`],retryLabel:[1,`retryLabel`],emptyLabel:[1,`emptyLabel`],previousLabel:[1,`previousLabel`],nextLabel:[1,`nextLabel`],todayLabel:[1,`todayLabel`],dayTemplate:[1,`dayTemplate`],periodTemplate:[1,`periodTemplate`],weekNumberTemplate:[1,`weekNumberTemplate`]},outputs:{value:`valueChange`,viewDate:`viewDateChange`,viewChange:`viewChange`,monthSelected:`monthSelected`,yearSelected:`yearSelected`,dateSelect:`dateSelect`,rangeStart:`rangeStart`,selectionRejected:`selectionRejected`,visibleRangeChange:`visibleRangeChange`,requestAvailability:`requestAvailability`,retryAvailability:`retryAvailability`},decls:17,vars:16,consts:[[`grid`,``],[`tabindex`,`-1`,1,`bx-calendar`,3,`keydown`,`mouseleave`,`focusout`],[1,`bx-calendar-header`],[`type`,`button`,1,`bx-calendar-nav`,3,`click`,`disabled`],[`name`,`chevron-left`,`size`,`18`,3,`decorative`],[`type`,`button`,1,`bx-calendar-title`,3,`click`,`keydown`],[`aria-live`,`polite`],[`name`,`chevron-down`,`size`,`14`,1,`bx-calendar-title-icon`,3,`decorative`],[`name`,`chevron-right`,`size`,`18`,3,`decorative`],[1,`bx-calendar-body`],[1,`bx-calendar-content`],[1,`bx-calendar-months`],[`role`,`grid`,1,`bx-calendar-periods`,3,`is-four-columns`],[1,`bx-calendar-feedback`],[1,`bx-calendar-footer`],[1,`bx-calendar-month`],[1,`bx-calendar-month-caption`],[`role`,`grid`,1,`bx-calendar-grid`],[`scope`,`col`,1,`bx-calendar-week-column`],[`scope`,`col`,1,`bx-calendar-weekday`],[1,`bx-visually-hidden`],[`scope`,`row`,1,`bx-calendar-week-number`],[`role`,`gridcell`,1,`bx-calendar-cell`,3,`is-outside`,`is-weekend`,`is-in-range`,`is-preview`,`is-range-start`,`is-range-end`,`has-start-start-corner`,`has-start-end-corner`,`has-end-start-corner`,`has-end-end-corner`,`has-concave-start-start`,`is-concave-start-start-preview`,`has-concave-start-end`,`is-concave-start-end-preview`,`has-concave-end-start`,`is-concave-end-start-preview`,`has-concave-end-end`,`is-concave-end-end-preview`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`role`,`gridcell`,1,`bx-calendar-cell`],[`type`,`button`,1,`bx-calendar-day`,3,`click`,`mouseenter`,`focus`],[1,`bx-calendar-day-number`],[1,`bx-calendar-day-badge`],[`aria-hidden`,`true`,1,`bx-calendar-day-marker`],[`role`,`grid`,1,`bx-calendar-periods`],[`type`,`button`,`role`,`gridcell`,1,`bx-calendar-period`,3,`is-selected`,`is-in-range`,`is-preview`,`is-range-start`,`is-range-end`,`has-start-start-corner`,`has-start-end-corner`,`has-end-start-corner`,`has-end-end-corner`,`has-concave-start-start`,`is-concave-start-start-preview`,`has-concave-start-end`,`is-concave-start-end-preview`,`has-concave-end-start`,`is-concave-end-start-preview`,`has-concave-end-end`,`is-concave-end-end-preview`,`is-current`,`is-disabled`,`is-outside`,`is-today`],[`type`,`button`,`role`,`gridcell`,1,`bx-calendar-period`,3,`click`,`mouseenter`,`focus`],[3,`size`,`label`],[`role`,`status`],[`role`,`alert`,1,`bx-calendar-status-text`],[`type`,`button`,1,`bx-calendar-retry`],[`type`,`button`,1,`bx-calendar-retry`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`type`,`button`,1,`bx-calendar-today`,3,`click`,`disabled`]],template:function(e,n){e&1&&(bo(0,`div`,1,0),br(`keydown`,function(a){return n.onGridKeydown(a)})(`mouseleave`,function(){return n.onGridLeave()})(`focusout`,function(a){return n.onGridBlur(a)}),bo(2,`div`,2)(3,`button`,3),br(`click`,function(){return n.onPrevious()}),sd$1(4,`bx-icon`,4),Go$1(),bo(5,`button`,5),br(`click`,function(){return n.onHeaderClick()})(`keydown`,function(a){return n.onHeaderKey(a)}),bo(6,`span`,6),lA(7),Go$1(),od$1(8,Xp,1,1,`bx-icon`,7),Go$1(),bo(9,`button`,3),br(`click`,function(){return n.onNext()}),sd$1(10,`bx-icon`,8),Go$1()(),bo(11,`div`,9)(12,`div`,10),od$1(13,cm,3,0,`div`,11)(14,gm,3,3,`div`,12),Go$1(),od$1(15,Sm,4,1,`div`,13),Go$1(),od$1(16,Cm,3,2,`div`,14),Go$1()),e&2&&(vo(`aria-label`,n.resolvedAriaLabel())(`aria-busy`,n.availabilityLoading()),Xl$1(3),xo(`disabled`,n.previousDisabled()),vo(`aria-label`,n.resolvedPreviousLabel()),Xl$1(),xo(`decorative`,!0),Xl$1(),vo(`aria-label`,n.headerLabel()),Xl$1(2),ik(n.headerLabel()),Xl$1(),nd$1(n.viewMode()!==`decades`?8:-1),Xl$1(),xo(`disabled`,n.nextDisabled()),vo(`aria-label`,n.resolvedNextLabel()),Xl$1(),xo(`decorative`,!0),Xl$1(2),vo(`inert`,n.availabilityLoading()||n.availabilityError()||n.availabilityEmpty()?``:null)(`aria-hidden`,n.availabilityLoading()||n.availabilityError()||n.availabilityEmpty()?!0:null),Xl$1(),nd$1(n.viewMode()===`days`?13:14),Xl$1(2),nd$1(n.availabilityLoading()||n.availabilityError()||n.availabilityEmpty()?15:-1),Xl$1(),nd$1(n.showTodayButton()&&n.resolvedTodayLabel()?16:-1))},dependencies:[ZC,Xi,Ta],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.bx-calendar[_ngcontent-%COMP%] {
  --%NS%bx-calendar-range-fill: var(--%NS%bx-calendar-range-background, color-mix(in srgb, var(--%NS%bx-accent) 20%, transparent));
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
  color: var(--%NS%bx-calendar-text, var(--%NS%bx-text-primary));
}
.bx-calendar-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--%NS%bx-space-1, 0.25rem);
  min-block-size: 2.5rem;
}
.bx-calendar-nav[_ngcontent-%COMP%], 
.bx-calendar-title[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--%NS%bx-space-1, 0.25rem);
  padding: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) transparent;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  font: inherit;
  cursor: pointer;
}
.bx-calendar-nav[_ngcontent-%COMP%]:hover, 
.bx-calendar-title[_ngcontent-%COMP%]:hover {
  background: var(--%NS%bx-bg-element-hover);
  color: var(--%NS%bx-text-primary);
}
.bx-calendar-nav[_ngcontent-%COMP%]:focus-visible, 
.bx-calendar-title[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 2px;
}
.bx-calendar-nav[_ngcontent-%COMP%] {
  inline-size: 2.25rem;
  block-size: 2.25rem;
  padding: 0;
  flex-shrink: 0;
}
.bx-calendar-title[_ngcontent-%COMP%] {
  flex: 1;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--%NS%bx-text-primary);
  text-align: center;
  min-inline-size: 0;
}
.bx-calendar-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bx-calendar-title-icon[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-tertiary);
  flex-shrink: 0;
}
.bx-calendar-months[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
}
.bx-calendar-month[_ngcontent-%COMP%] {
  flex: 1 1 0;
  min-inline-size: 0;
}
.bx-calendar-month-caption[_ngcontent-%COMP%] {
  padding-block-end: var(--%NS%bx-space-1, 0.25rem);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--%NS%bx-text-secondary);
  text-align: center;
}
.bx-calendar-grid[_ngcontent-%COMP%] {
  inline-size: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.bx-calendar-weekday[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-1, 0.25rem);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--%NS%bx-text-tertiary);
  text-align: center;
  text-transform: uppercase;
}
.bx-calendar-week-column[_ngcontent-%COMP%], 
.bx-calendar-week-number[_ngcontent-%COMP%] {
  inline-size: 2rem;
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--%NS%bx-text-tertiary);
  text-align: center;
  font-variant-numeric: tabular-nums;
}
.bx-calendar-cell[_ngcontent-%COMP%] {
  padding: 1px;
  text-align: center;
  vertical-align: middle;
}
.bx-calendar-day[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  inline-size: 100%;
  block-size: var(--%NS%bx-calendar-cell-size, 2.375rem);
  padding: 0;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) transparent;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  font-size: 0.875rem;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition: background-color 120ms ease-out, color 120ms ease-out;
}
.bx-calendar-day[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
}
.bx-calendar-day[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  z-index: 1;
}
.bx-calendar-day.is-outside[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-tertiary);
}
.bx-calendar-day.is-weekend[_ngcontent-%COMP%]:not(.is-selected, .is-in-range) {
  color: var(--%NS%bx-text-secondary);
}
.bx-calendar-day.is-today[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-accent);
  font-weight: 700;
}
.bx-calendar-day.is-in-range[_ngcontent-%COMP%] {
  border-radius: inherit;
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font-weight: 600;
}
.bx-calendar-day.is-preview[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
  font-weight: 500;
}
.bx-calendar-day.is-selected[_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent);
  border-color: var(--%NS%bx-accent);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  color: var(--%NS%bx-on-accent);
  font-weight: 600;
  box-shadow: 0 0 0 1px var(--%NS%bx-border-accent);
}
.bx-calendar-day.is-disabled[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-tertiary);
  opacity: 0.38;
  cursor: not-allowed;
  background: transparent;
}
.bx-calendar-day.has-metadata[_ngcontent-%COMP%] {
  font-weight: 600;
}
.bx-calendar-day-number[_ngcontent-%COMP%] {
  line-height: 1;
}
.bx-calendar-day-badge[_ngcontent-%COMP%] {
  font-size: 0.5625rem;
  line-height: 1;
  color: var(--%NS%bx-text-tertiary);
  overflow: hidden;
  max-inline-size: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bx-calendar-day-marker[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-end: 3px;
  inline-size: 4px;
  block-size: 4px;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-text-tertiary);
}
.bx-calendar-day-marker[data-tone=accent][_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent);
}
.bx-calendar-day-marker[data-tone=info][_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-info);
}
.bx-calendar-day-marker[data-tone=success][_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-success);
}
.bx-calendar-day-marker[data-tone=warn][_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-warn);
}
.bx-calendar-day-marker[data-tone=danger][_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-danger);
}
.bx-calendar-periods[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  padding-block: var(--%NS%bx-space-2, 0.5rem);
}
.bx-calendar-period[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-block-size: 2.75rem;
  padding: var(--%NS%bx-space-2, 0.5rem);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) transparent;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
}
.bx-calendar-period[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-calendar-period[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 1px;
}
.bx-calendar-period.is-selected[_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent);
  border-color: var(--%NS%bx-accent);
  color: var(--%NS%bx-on-accent);
  font-weight: 600;
}
.bx-calendar-period.is-in-range[_ngcontent-%COMP%] {
  background: var(--%NS%bx-calendar-range-fill);
  color: var(--%NS%bx-text-primary);
  border-color: transparent;
  border-radius: 0;
}
.bx-calendar-period.is-range-start[_ngcontent-%COMP%] {
  border-start-start-radius: var(--%NS%bx-rounded-md, 0.5rem);
  border-end-start-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.bx-calendar-period.is-range-end[_ngcontent-%COMP%] {
  border-start-end-radius: var(--%NS%bx-rounded-md, 0.5rem);
  border-end-end-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.bx-calendar-period.is-outside[_ngcontent-%COMP%]:not(.is-in-range, .is-selected) {
  color: var(--%NS%bx-text-tertiary);
}
.bx-calendar-period.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-calendar-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-block-size: 2rem;
}
.bx-calendar-today[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem);
  border: 0;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  color: var(--%NS%bx-text-accent);
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
}
.bx-calendar-today[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
}
.bx-calendar-today[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 2px;
}
.bx-calendar-today[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-calendar-body[_ngcontent-%COMP%] {
  position: relative;
}
.bx-calendar-content[inert][_ngcontent-%COMP%] {
  opacity: 0.2;
  pointer-events: none;
}
.bx-calendar-feedback[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  text-align: center;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  overflow-y: auto;
}
.bx-calendar-status-text[_ngcontent-%COMP%] {
  overflow-wrap: anywhere;
  color: var(--%NS%bx-text-danger);
}
.bx-calendar-retry[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem);
  border: 0;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  color: var(--%NS%bx-text-accent);
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
}
.bx-calendar-retry[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
}
.bx-calendar-retry[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 2px;
}
.bx-calendar-retry[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-calendar-retry[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-block-size: 2.25rem;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  font-weight: 500;
  font-size: 0.875rem;
}
.bx-visually-hidden[_ngcontent-%COMP%] {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
@media (max-width: 768px) {
  .bx-calendar-day[_ngcontent-%COMP%] {
    block-size: var(--%NS%bx-calendar-cell-size, 2.75rem);
  }
  .bx-calendar-months[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: var(--%NS%bx-space-3, 0.75rem);
  }
}
@media (forced-colors: active) {
  .bx-calendar-day.is-selected[_ngcontent-%COMP%], 
   .bx-calendar-period.is-selected[_ngcontent-%COMP%] {
    border-color: Highlight;
    background: Highlight;
    color: HighlightText;
    forced-color-adjust: none;
  }
}
.bx-calendar-cell.is-in-range[_ngcontent-%COMP%] {
  background: var(--%NS%bx-calendar-range-fill);
  color: var(--%NS%bx-text-primary);
}
.bx-calendar-cell.is-in-range.is-preview[_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
}
.bx-calendar-day.is-in-range[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: transparent;
  color: var(--%NS%bx-text-primary);
}
.bx-calendar-day.is-selected.is-in-range[_ngcontent-%COMP%] {
  border-radius: inherit;
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.bx-calendar-day.is-preview[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  color: var(--%NS%bx-text-accent);
}
.bx-calendar-period.is-in-range[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: var(--%NS%bx-calendar-range-fill);
  color: var(--%NS%bx-text-primary);
}
.bx-calendar-period.is-preview[_ngcontent-%COMP%], 
.bx-calendar-period.is-preview[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
  border-color: transparent;
}
.bx-calendar-cell.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end), 
.bx-calendar-period.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end) {
  isolation: isolate;
  color: var(--%NS%bx-on-accent);
}
.bx-calendar-cell.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end)::after, 
.bx-calendar-period.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end)::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-accent);
  pointer-events: none;
}
.bx-calendar-period.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end)::after {
  inset: calc(-1 * var(--%NS%bx-border-width, 1px));
}
.bx-calendar-cell.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end)   .bx-calendar-day[_ngcontent-%COMP%] {
  color: var(--%NS%bx-on-accent);
}
.bx-calendar-cell.is-in-range[_ngcontent-%COMP%], 
.bx-calendar-period.is-in-range[_ngcontent-%COMP%] {
  border-radius: 0;
}
.bx-calendar-cell.is-in-range.has-start-start-corner[_ngcontent-%COMP%], 
.bx-calendar-period.is-in-range.has-start-start-corner[_ngcontent-%COMP%] {
  border-start-start-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.bx-calendar-cell.is-in-range.has-start-end-corner[_ngcontent-%COMP%], 
.bx-calendar-period.is-in-range.has-start-end-corner[_ngcontent-%COMP%] {
  border-start-end-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.bx-calendar-cell.is-in-range.has-end-start-corner[_ngcontent-%COMP%], 
.bx-calendar-period.is-in-range.has-end-start-corner[_ngcontent-%COMP%] {
  border-end-start-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.bx-calendar-cell.is-in-range.has-end-end-corner[_ngcontent-%COMP%], 
.bx-calendar-period.is-in-range.has-end-end-corner[_ngcontent-%COMP%] {
  border-end-end-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.bx-calendar-day.is-in-range[_ngcontent-%COMP%]:is(.is-range-start, .is-range-end), 
.bx-calendar-day.is-today[_ngcontent-%COMP%] {
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.bx-calendar-cell[_ngcontent-%COMP%], 
.bx-calendar-period[_ngcontent-%COMP%] {
  --%NS%bx-calendar-inline-start: 0%;
  --%NS%bx-calendar-inline-end: 100%;
  position: relative;
  --%NS%bx-calendar-concave-start-start: transparent;
}
.bx-calendar-cell.has-concave-start-start[_ngcontent-%COMP%], 
.bx-calendar-period.has-concave-start-start[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-start-start: var(--%NS%bx-calendar-range-fill);
}
.bx-calendar-cell.is-concave-start-start-preview[_ngcontent-%COMP%], 
.bx-calendar-period.is-concave-start-start-preview[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-start-start: var(--%NS%bx-accent-subtle);
}
.bx-calendar-cell[_ngcontent-%COMP%], 
.bx-calendar-period[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-start-end: transparent;
}
.bx-calendar-cell.has-concave-start-end[_ngcontent-%COMP%], 
.bx-calendar-period.has-concave-start-end[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-start-end: var(--%NS%bx-calendar-range-fill);
}
.bx-calendar-cell.is-concave-start-end-preview[_ngcontent-%COMP%], 
.bx-calendar-period.is-concave-start-end-preview[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-start-end: var(--%NS%bx-accent-subtle);
}
.bx-calendar-cell[_ngcontent-%COMP%], 
.bx-calendar-period[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-end-start: transparent;
}
.bx-calendar-cell.has-concave-end-start[_ngcontent-%COMP%], 
.bx-calendar-period.has-concave-end-start[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-end-start: var(--%NS%bx-calendar-range-fill);
}
.bx-calendar-cell.is-concave-end-start-preview[_ngcontent-%COMP%], 
.bx-calendar-period.is-concave-end-start-preview[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-end-start: var(--%NS%bx-accent-subtle);
}
.bx-calendar-cell[_ngcontent-%COMP%], 
.bx-calendar-period[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-end-end: transparent;
}
.bx-calendar-cell.has-concave-end-end[_ngcontent-%COMP%], 
.bx-calendar-period.has-concave-end-end[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-end-end: var(--%NS%bx-calendar-range-fill);
}
.bx-calendar-cell.is-concave-end-end-preview[_ngcontent-%COMP%], 
.bx-calendar-period.is-concave-end-end-preview[_ngcontent-%COMP%] {
  --%NS%bx-calendar-concave-end-end: var(--%NS%bx-accent-subtle);
}
.bx-calendar-cell[_ngcontent-%COMP%]:dir(rtl), 
.bx-calendar-period[_ngcontent-%COMP%]:dir(rtl) {
  --%NS%bx-calendar-inline-start: 100%;
  --%NS%bx-calendar-inline-end: 0%;
}
.bx-calendar-cell[_ngcontent-%COMP%]:is(.has-concave-start-start, .has-concave-start-end, .has-concave-end-start, .has-concave-end-end)::before, 
.bx-calendar-period[_ngcontent-%COMP%]:is(.has-concave-start-start, .has-concave-start-end, .has-concave-end-start, .has-concave-end-end)::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background-image:
    radial-gradient(
      circle at var(--%NS%bx-calendar-inline-end) 100%,
      transparent calc(var(--%NS%bx-rounded-md, 0.5rem) - 0.5px),
      var(--%NS%bx-calendar-concave-start-start) var(--%NS%bx-rounded-md, 0.5rem)),
    radial-gradient(
      circle at var(--%NS%bx-calendar-inline-start) 100%,
      transparent calc(var(--%NS%bx-rounded-md, 0.5rem) - 0.5px),
      var(--%NS%bx-calendar-concave-start-end) var(--%NS%bx-rounded-md, 0.5rem)),
    radial-gradient(
      circle at var(--%NS%bx-calendar-inline-end) 0%,
      transparent calc(var(--%NS%bx-rounded-md, 0.5rem) - 0.5px),
      var(--%NS%bx-calendar-concave-end-start) var(--%NS%bx-rounded-md, 0.5rem)),
    radial-gradient(
      circle at var(--%NS%bx-calendar-inline-start) 0%,
      transparent calc(var(--%NS%bx-rounded-md, 0.5rem) - 0.5px),
      var(--%NS%bx-calendar-concave-end-end) var(--%NS%bx-rounded-md, 0.5rem));
  background-size: var(--%NS%bx-rounded-md, 0.5rem) var(--%NS%bx-rounded-md, 0.5rem);
  background-position:
    var(--%NS%bx-calendar-inline-start) 0%,
    var(--%NS%bx-calendar-inline-end) 0%,
    var(--%NS%bx-calendar-inline-start) 100%,
    var(--%NS%bx-calendar-inline-end) 100%;
  background-repeat: no-repeat;
}
.bx-calendar-period[_ngcontent-%COMP%]:is(.has-concave-start-start, .has-concave-start-end, .has-concave-end-start, .has-concave-end-end)::before {
  inset: calc(-1 * var(--%NS%bx-border-width, 1px));
}
@media (forced-colors: active) {
  .bx-calendar-cell.is-in-range[_ngcontent-%COMP%]:not(.is-preview), 
   .bx-calendar-period.is-in-range[_ngcontent-%COMP%]:not(.is-preview), 
   .bx-calendar-cell.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end), 
   .bx-calendar-period.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end) {
    background: Highlight;
    color: HighlightText;
    forced-color-adjust: none;
  }
  .bx-calendar-cell.is-in-range[_ngcontent-%COMP%]:not(.is-preview)   .bx-calendar-day[_ngcontent-%COMP%], 
   .bx-calendar-cell.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end)   .bx-calendar-day[_ngcontent-%COMP%] {
    color: HighlightText;
  }
  .bx-calendar-cell.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end)::after, 
   .bx-calendar-period.is-in-range[_ngcontent-%COMP%]:not(.is-preview):is(.is-range-start, .is-range-end)::after {
    background: Highlight;
  }
  .bx-calendar-period.is-preview[_ngcontent-%COMP%], 
   .bx-calendar-cell.is-preview[_ngcontent-%COMP%] {
    outline: 1px dashed Highlight;
    outline-offset: -1px;
  }
}
.bx-calendar-periods.is-four-columns[_ngcontent-%COMP%] {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}`]})};var hl=class i{bxOverlayContext=ee({});get useTopLayer(){return this.bxOverlayContext().useTopLayer}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxOverlayContext`,``]],inputs:{bxOverlayContext:[1,`bxOverlayContext`]},features:[rr$1([{provide:Ae,useExisting:jt(()=>i)}])]})};export{qi as $,Xi as A,dn as B,Qi as C,Vn as D,Un as E,al as F,jn as G,er as H,cl as I,ln as J,js as K,cn as L,Yd as M,Ys as N,Wi as O,Zs as P,pl as Q,ct as R,Qd as S,Ui as T,gl as U,dt as V,hl as W,ol as X,nl as Y,on as Z,Js as _,As as a,tr as at,Ln as b,Et as c,Gi as d,qs as et,Hn as f,Jr as g,Ji as h,An as i,tl as it,Xs as j,Xe as k,Fn as l,Jd as m,$s as n,sl as nt,Bn as o,Hs as p,ll as q,Ae as r,st as rt,Bs as s,$i as t,rl as tt,Fs as u,Ki as v,Qs as w,Pt as x,Ks as y,dl as z};