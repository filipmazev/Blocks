import{n as w$1}from"./chunk-DTPx3lgi.js";import{A as ht,l as hn$1}from"./main-2GBJQHUZ.js";import{r as Z$1,t as Ae}from"./chunk-DUDY88j1.js";import{Ai as tt,Bn as ar,Cn as Xw,Di as te,F as G,Ft as Pi,G as Hv,I as GS,Jn as cb,Jt as Se,K as IX,Ki as xR,Mt as Pc,On as Z$2,Or as je,Pi as vR,Pr as kX,Pt as Pee,Qi as y,Rn as ab,T as EX,Tn as YA,Vi as wr,Vr as lM,Wr as ln$1,Xi as xr,Yt as Ss,ar as ee,at as LF,bn as X$1,ci as p,di as pe,dn as Vf,dt as MX,ea as ye,en as TX,er as de,fi as qM,fr as g,gt as NX,in as U,ir as eI,it as L,jn as Zi,jr as k,jt as PM,ki as to,kn as ZM,l as Be,lr as fn$1,lt as M,mr as hS,mt as Mee,n as $M,na as yr,nt as Ke$1,o as B$1,oa as zS,oi as oe,or as eo,ot as LM,pi as qa,pr as gS,st as Lp,t as $,ti as ms,vt as Ne,wr as j,x as DX,xn as XM,yi as rr,yt as Nee,z as H}from"./chunk-CfQ5k3AW.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var Z=class{_document;_textarea;constructor(n,e){this._document=e;let t=this._textarea=this._document.createElement(`textarea`),i=t.style;i.position=`fixed`,i.top=i.opacity=`0`,i.left=`-999em`,t.setAttribute(`aria-hidden`,`true`),t.value=n,t.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(t)}copy(){let n=this._textarea,e=!1;try{if(n){let t=this._document.activeElement;n.select(),n.setSelectionRange(0,n.value.length),e=this._document.execCommand(`copy`),t&&t.focus()}}catch{}return e}destroy(){let n=this._textarea;n&&(n.remove(),this._textarea=void 0)}};var Ke=(()=>{class o{_document=p(Z$2);copy(e){let t=this.beginCopy(e),i=t.copy();return t.destroy(),i}beginCopy(e){return new Z(e,this._document)}static ɵfac=function(t){return new(t||o)};static ɵprov=H({token:o,factory:o.ɵfac})}return o})();var B=[{value:`colors`,label:`Colors`},{value:`pairs`,label:`Color pairs`},{value:`spacing`,label:`Spacing`},{value:`radii`,label:`Corner radii`},{value:`shadows`,label:`Shadows`},{value:`layers`,label:`Stacking layers`},{value:`effects`,label:`Glass and effects`},{value:`components`,label:`Component variables`},{value:`other`,label:`Accessibility and other variables`},{value:`breakpoints`,label:`Sass breakpoints`},{value:`utilities`,label:`Utility classes`}];var X=[`Backgrounds and surfaces`,`Primary and brand`,`Accent`,`Text`,`Borders`,`Danger`,`Warning`,`Information`,`Success`,`Scrollbars`];var Ue=[`variable`,`name`,`hex`,`rgb`,`rgba`];var qe={variable:`Copy CSS variable`,name:`Copy token name`,hex:`Copy HEX code`,rgb:`Copy RGB`,rgba:`Copy RGBA`};var E=class o{destroyRef=p(ee);targets=/* @__PURE__ */ new Map;intersectionObserver;resizeObserver;constructor(){this.destroyRef.onDestroy(()=>{this.intersectionObserver?.disconnect(),this.resizeObserver?.disconnect(),this.targets.clear()})}observe(n,e){return this.targets.set(n,e),typeof IntersectionObserver>`u`||typeof ResizeObserver>`u`?(e.intersect(!0),()=>this.targets.delete(n)):(this.intersectionObserver??=new IntersectionObserver(t=>{for(let i of t)this.targets.get(i.target)?.intersect(i.isIntersecting)},{rootMargin:`600px 0px`}),this.resizeObserver??=new ResizeObserver(t=>{for(let i of t)this.targets.get(i.target)?.resize(i.contentRect.width,i.contentRect.height)}),this.intersectionObserver.observe(n),this.resizeObserver.observe(n),()=>{this.intersectionObserver?.unobserve(n),this.resizeObserver?.unobserve(n),this.targets.delete(n)})}static ɵfac=function(e){return new(e||o)};static ɵprov=B$1({token:o,factory:o.ɵfac})};var w=class o{destroyRef=p(ee);nativeElement=p(X$1).nativeElement;tokenViewportService=p(E);mounted=M(!1);placeholderHeight=M(1);visible=y(()=>!this.enabled()||this.mounted());chunk=g.required();compact=g(!1);enabled=g(!0);label=g.required();intersecting=!1;rowHeight=0;constructor(){GS(()=>{this.chunk(),this.compact(),L(()=>this.measure(this.nativeElement.clientWidth,this.nativeElement.clientHeight))}),GS(n=>{if(!this.enabled()){this.mounted.set(!1);return}n(this.tokenViewportService.observe(this.nativeElement,{intersect:t=>{this.intersecting=t,this.mounted.set(t||this.nativeElement.contains(this.nativeElement.ownerDocument.activeElement))},resize:(t,i)=>this.measure(t,i)}))})}onFocus(){this.mounted.set(!0)}onBlur(){queueMicrotask(()=>{this.destroyRef.destroyed||this.intersecting||this.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)||this.mounted.set(!1)})}measure(n,e){if(n<=0)return;let t=this.nativeElement.ownerDocument,i=Number.parseFloat(t.defaultView?.getComputedStyle(t.documentElement).fontSize??`16`),r=(this.compact()?.5:1)*i,p=(this.compact()?10:15)*i,a=Math.max(1,Math.floor((n+r)/(p+r))),m=Math.ceil(this.chunk().entries.length/a);if(this.visible()&&e>0)this.rowHeight=(e+r)/m,this.placeholderHeight.set(e);else{let g=this.rowHeight||(this.compact()?18:36)*i;this.placeholderHeight.set(Math.max(1,m*g-r))}}static ɵfac=function(e){return new(e||o)};static ɵdir=$({type:o,selectors:[[``,`appTokenViewport`,``]],hostAttrs:[`role`,`group`],hostVars:4,hostBindings:function(e,t){e&1&&Ne(`focusin`,function(){return t.onFocus()})(`focusout`,function(){return t.onBlur()}),e&2&&(G(`tabindex`,t.visible()?null:0)(`aria-label`,t.label()),je(`min-block-size`,t.visible()?null:t.placeholderHeight(),`px`))},inputs:{chunk:[1,`chunk`],compact:[1,`compact`],enabled:[1,`enabled`],label:[1,`label`]},exportAs:[`appTokenViewport`]})};function Ze(){let o=Pee.flatMap(a=>{return Ye(a.group.startsWith(`Palette · `)?a.group.slice(10):void 0,!1,a.group).map(g=>({id:a.name,name:a.name,reference:a.reference,category:a.category,group:g,kind:a.kind,scope:a.scope,defaults:a.defaults,companion:``,companionReference:``,search:``}))}),n=TX.flatMap(a=>{let m=lM(a),g=Ss(a);return Ye(g?a.replace(/-\d+$/,``):void 0,!0,`Semantic pairs`).map(F=>({id:`pair:${a}`,name:a,reference:Zi(a),companion:m,companionReference:Zi(m),category:`pairs`,group:F,kind:`pair`,scope:g?`Palette companion rule`:Object.hasOwn(Hv,a)?`Explicit semantic mapping`:`Default surface companion`,defaults:[],search:``}))}),e=Object.entries(ar).map(([a,m])=>({id:`breakpoint:${a}`,name:a,reference:`@include respond-up(${a}) { /* styles */ }`,category:`breakpoints`,group:`Responsive breakpoints`,kind:`breakpoint`,scope:`Sass only · not a CSS variable`,defaults:[`${m}px`],companion:``,companionReference:``,search:``})),t=NX.map(a=>({id:`class:${a}`,name:`.${a}`,reference:a,category:`utilities`,group:/^bx-(bg|text|border)-/.test(a)?`Color utility classes`:`Layout and accessibility utility classes`,kind:`utility`,scope:`CSS class`,defaults:[],companion:``,companionReference:``,search:``})),i=B.map(a=>a.value),r$1={spacing:Object.keys(DX),radii:Object.keys(EX),shadows:Object.keys(MX),layers:Object.keys(IX)};return[...o,...n,...e,...t].sort((a,m)=>{let g=i.indexOf(a.category)-i.indexOf(m.category),F=X.indexOf(a.group),$=X.indexOf(m.group),Je=(F<0?100:F)-($<0?100:$)||a.group.localeCompare(m.group),G=r$1[a.category],en=G?G.indexOf(a.name.slice(a.name.lastIndexOf(`-`)+1))-G.indexOf(m.name.slice(m.name.lastIndexOf(`-`)+1)):0;return g||Je||en||a.name.localeCompare(m.name,`en`,{numeric:!0})}).map(a=>s(r({},a),{search:[a.name,a.reference,a.category,a.group,a.kind,a.scope,a.companion,a.name.includes(`bg-`)?`background backgrounds`:``,...a.defaults].join(` `).toLowerCase()}))}function Ye(o,n,e){if(!o)return[e];let t=Lp.filter(i=>{let r=kX[i.id];return r.brand===o||r.accent===o});return t.length?t.map(i=>`${n?`Theme companions`:`Theme palettes`} \xB7 ${i.label}`):o===`primary`||o===`accent`?[n?`Current theme companions · Primary / Accent`:`Current theme · Primary / Accent`]:[`${n?`Palette companions`:`Other palettes`} \xB7 ${o}`]}function Qe(o,n){n.fillStyle=`#010203`,n.fillStyle=o;let e=n.fillStyle;if(n.fillStyle=`#030201`,n.fillStyle=o,n.fillStyle!==e)return;n.clearRect(0,0,1,1),n.fillRect(0,0,1,1);let t=n.getImageData(0,0,1,1).data,i=String(n.fillStyle),r=i.startsWith(`rgba(`)?i.match(/[\d.]+/g)?.map(Number):void 0,p=i.match(/\/\s*([\d.]+)(%)?\s*\)$/),a=r?.[3]??(p?Number(p[1])/(p[2]?100:1):t[3]/255),m=Math.round(a*1e4)/1e4,g=r?r.slice(0,3).map(Math.round):[t[0],t[1],t[2]];return{hex:`#${[...g,...m<1?[Math.round(m*255)]:[]].map($=>$.toString(16).padStart(2,`0`)).join(``)}`,rgb:m<1?`rgba(${g.join(`, `)}, ${m})`:`rgb(${g.join(`, `)})`,rgba:`rgba(${g.join(`, `)}, ${m})`}}var J=(o,n)=>n.id;function nn(o,n){o&1&&tt(0,`app-readme`,17)}function tn(o,n){if(o&1&&(te(0,`div`,18)(1,`h2`),Se(2),oe(),tt(3,`bx-divider`,20),oe()),o&2){let e=U().$implicit,t=U();k(2),Be(t.categoryTitle(e.entries[0].category)),k(),ye(`decorative`,!0)}}function on(o,n){if(o&1&&(te(0,`span`,21)(1,`span`),Se(2),oe()()),o&2){let e=n.$implicit;k(2),Be(e)}}function an(o,n){if(o&1&&tt(0,`bx-tag`,22),o&2){let e=n.$implicit;ye(`text`,e)(`focusable`,!1)(`opaque`,!0)}}function rn(o,n){if(o&1&&yr(0,an,1,3,`bx-tag`,22,qa),o&2){let e=U().$implicit,t=U();xr(t.groupTags(e))}}function ln(o,n){if(o&1){let e=Pi();te(0,`bx-menu-item`,34),Ne(`action`,function(){eo(e);let i=U().$implicit,r=U(2).$implicit,p=U(5);return to(p.copy(r,i))}),oe()}if(o&2){let e=U().$implicit,t=U(2).$implicit,i=U(5);ye(`label`,i.copyLabel(t,e))}}function cn(o,n){if(o&1&&de(0,ln,1,1,`bx-menu-item`,33),o&2){let e=n.$implicit,t=U(2).$implicit,i=U(5);pe(i.canCopy(t,e)?0:-1)}}function sn(o,n){if(o&1&&(te(0,`bx-menu`),yr(1,cn,1,1,null,null,qa),oe()),o&2){let e=U(6);k(),xr(e.copyFormats)}}function dn(o,n){if(o&1&&tt(0,`div`,35),o&2){let e=U().$implicit;je(`background-color`,e.reference)}}function pn(o,n){if(o&1&&(te(0,`div`,27),tt(1,`span`)(2,`span`),oe()),o&2){let e=U().$implicit;k(),je(`background-color`,e.reference),k(),je(`background-color`,e.companionReference)}}function mn(o,n){if(o&1&&(te(0,`div`,28),tt(1,`span`),oe()),o&2){let e=U().$implicit;k(),je(`border-radius`,e.reference)}}function un(o,n){if(o&1&&(te(0,`div`,29),tt(1,`span`),oe()),o&2){let e=U().$implicit;k(),je(`box-shadow`,e.reference)}}function gn(o,n){if(o&1&&(te(0,`div`,30),tt(1,`span`),oe()),o&2){let e=U().$implicit;k(),je(`inline-size`,e.reference)}}function _n(o,n){if(o&1&&(te(0,`code`,32),Se(1),oe()),o&2){let e=U().$implicit,t=U(5);k(),Be(t.colors()[e.name]?.hex||t.liveValues()[e.name])}}function Cn(o,n){if(o&1&&(te(0,`code`,37),Se(1),oe()),o&2){let e=U(2).$implicit;k(),rr(`↔ `,e.companion)}}function yn(o,n){if(o&1&&(te(0,`pre`,38),tt(1,`code`,41),oe()),o&2){let e=U(2).$implicit;k(),ye(`highlight`,e.reference)}}function fn(o,n){if(o&1&&(te(0,`code`,39),Se(1),oe()),o&2){let e=U(2).$implicit;k(),Be(e.reference)}}function bn(o,n){if(o&1&&(te(0,`code`,39),Se(1),oe()),o&2){let e=U(2).$implicit;k(),Be(e.companionReference)}}function hn(o,n){if(o&1&&(te(0,`code`,40),Se(1),oe()),o&2){let e=U(2).$implicit,t=U(5);k(),Be(t.liveValues()[e.name])}}function vn(o,n){if(o&1&&(te(0,`code`),Se(1),oe()),o&2){let e=n.$implicit;k(),Be(e)}}function xn(o,n){if(o&1&&(te(0,`bx-collapsible`,43),Ne(`contextmenu`,function(t){return t.stopPropagation()})(`pointerdown`,function(t){return t.stopPropagation()}),yr(1,vn,2,1,`code`,null,qa),oe()),o&2){let e=U(3).$implicit;ye(`headingLevel`,5),k(),xr(e.defaults)}}function kn(o,n){if(o&1&&(te(0,`code`,40),Se(1),oe()),o&2){let e=U(3).$implicit;k(),Be(e.defaults[0])}}function Tn(o,n){if(o&1&&de(0,xn,3,1,`bx-collapsible`,42)(1,kn,2,1,`code`,40),o&2){let e=U(2).$implicit;pe(e.defaults.length>1?0:1)}}function Sn(o,n){if(o&1&&(te(0,`p`,36),Se(1),oe(),de(2,Cn,2,1,`code`,37),de(3,yn,2,1,`pre`,38)(4,fn,2,1,`code`,39),de(5,bn,2,1,`code`,39),de(6,hn,2,1,`code`,40)(7,Tn,2,1)),o&2){let e=U().$implicit,t=U(5);k(),Be(e.scope),k(),pe(e.companion?2:-1),k(),pe(e.kind===`breakpoint`?3:4),k(2),pe(e.companionReference?5:-1),k(),pe(t.liveValues()[e.name]?6:e.defaults.length?7:-1)}}function Mn(o,n){if(o&1&&(te(0,`bx-card`,25),Xw(1,sn,3,0,`ng-template`,null,4,cb),de(3,dn,1,2,`div`,26)(4,pn,3,4,`div`,27)(5,mn,2,2,`div`,28)(6,un,2,2,`div`,29)(7,gn,2,2,`div`,30),te(8,`div`,31)(9,`h4`)(10,`code`),Se(11),oe()(),de(12,_n,2,1,`code`,32)(13,Sn,8,5),oe()()),o&2){let e,t=n.$implicit,i=ab(2);ye(`surfaceEffects`,!1)(`opaque`,!0)(`bxContextMenu`,i)(`ariaLabel`,t.name),G(`data-token`,t.id),k(3),pe((e=t.kind)===`color`?3:e===`pair`?4:e===`radius`?5:e===`shadow`?6:e===`spacing`?7:-1),k(8),Be(t.name),k(),pe(t.kind===`color`?12:13)}}function On(o,n){if(o&1&&(te(0,`div`),yr(1,Mn,14,8,`bx-card`,25,J),oe()),o&2){let e=U().$implicit,t=U(2).$implicit;YA(t.entries[0].kind===`color`?`color-grid`:`token-grid`),k(),xr(e.entries)}}function En(o,n){if(o&1&&(te(0,`div`,23,3),de(2,On,3,2,`div`,24),oe()),o&2){let e=n.$implicit,t=ab(1),i=U(2).$implicit,r=U();ye(`chunk`,e)(`enabled`,r.lazyEnabled())(`compact`,i.entries[0].kind===`color`)(`label`,`Tokens in `+i.label),k(2),pe(t.visible()?2:-1)}}function wn(o,n){if(o&1&&yr(0,En,3,5,`div`,23,J),o&2){let e=U().$implicit;xr(e.chunks)}}function Fn(o,n){if(o&1){let e=Pi();de(0,tn,4,2,`div`,18),te(1,`bx-accordion-item`,19),Ne(`expandedChange`,function(i){let r=eo(e).$implicit,p=U();return to(p.toggleGroup(r.id,i))}),Xw(2,on,3,1,`ng-template`,null,1,cb)(4,rn,2,0,`ng-template`,null,2,cb),de(6,wn,2,0),oe()}if(o&2){let e=n.$implicit,t=n.$index,i=ab(3),r=ab(5),p=U();pe(t===0||p.groups()[t-1].entries[0].category!==e.entries[0].category?0:-1),k(),ye(`title`,e.label)(`titleTemplate`,i)(`trailingTemplate`,r)(`headingLevel`,3)(`expanded`,p.isExpanded(e)),k(5),pe(p.isExpanded(e)?6:-1)}}function Pn(o,n){o&1&&(te(0,`bx-card`,16)(1,`h2`),Se(2,`No tokens found`),oe(),te(3,`p`),Se(4,`Try fewer words or clear the category filter to show all tokens.`),oe()()),o&2&&ye(`surfaceEffects`,!1)}var Xe=class o{bxA11yService=p(Ke$1);clipboard=p(Ke);nativeElement=p(X$1).nativeElement;themingService=p(ms);entries=Ze();liveTokens=Pee.filter(n=>n.scope===`global`||n.scope===`theme`);colorCache=/* @__PURE__ */ new Map;normalizedLiveValues=y(()=>new Map(Object.entries(this.liveValues()).map(([n,e])=>[n,e.toLowerCase()])));colorSearch=y(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.liveTokens){let t=this.resolveColor(e.name);t&&n.set(e.name,`${t.hex} ${t.rgb} ${t.rgba}`)}return n});viewports=zS(w);categories=B;copyFormats=Ue;variableCount=Pee.length;searchTerm=M(``);copyStatus=M(``);selectedCategories=M([]);liveValues=M({});expansionOverrides=M(/* @__PURE__ */ new Map);filteredEntries=y(()=>{let n=this.searchTerm().toLowerCase().trim().split(/\s+/).filter(Boolean),e=this.selectedCategories(),t=n.length?this.normalizedLiveValues():void 0,i=n.some(r=>/#|rgba?\(/.test(r))?this.colorSearch():void 0;return this.entries.filter(r=>{if(e.length&&!e.includes(r.category))return!1;if(!n.length||n.every(g=>r.search.includes(g)))return!0;let p=r.reference.startsWith(`var(`)?r.reference.slice(4,-1):r.name,a=r.companionReference.slice(4,-1),m=`${r.search} ${t?.get(p)??``} ${t?.get(a)??``} ${i?.get(p)??``} ${i?.get(a)??``}`;return n.every(g=>m.includes(g))})});groups=y(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.filteredEntries()){let t=`${e.category} / ${e.group}`,i=n.get(t)??[];i.push(e),n.set(t,i)}return[...n].map(([e,t])=>({id:e,label:this.resolveGroupLabel(t[0].group),total:t.length,entries:t,chunks:Array.from({length:Math.ceil(t.length/24)},(i,r)=>({id:`${e}:${r}`,entries:t.slice(r*24,(r+1)*24)}))}))});lazyEnabled=y(()=>this.groups().reduce((n,e)=>n+(this.isExpanded(e)?e.total:0),0)>=48);colors=y(()=>{let n={};for(let e of this.viewports())if(e.visible())for(let t of e.chunk().entries)for(let i of[t.reference,t.companionReference]){if(!i.startsWith(`var(`))continue;let r=i.slice(4,-1),p=this.resolveColor(r);p&&(n[r]=p)}return n});colorContext=null;constructor(){GS(()=>{if(this.themingService.activeTheme(),this.themingService.palette(),this.themingService.highContrast(),this.themingService.appearance(),this.bxA11yService.isReducedMotion(),!this.colorContext){let t=this.nativeElement.ownerDocument.createElement(`canvas`);t.width=1,t.height=1,this.colorContext=t.getContext(`2d`,{willReadFrequently:!0})}let n=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement),e={};for(let t of this.liveTokens){let i=n?.getPropertyValue(t.name).trim()??``;e[t.name]=i===`currentColor`?n?.color??``:i}this.colorCache.clear(),this.liveValues.set(e)})}copy(n,e){let i=(n.kind===`pair`?[n.reference,n.companionReference]:[n.reference]).map(p=>{let a=p.startsWith(`var(`)?p.slice(4,-1):p;return e===`variable`?p:e===`name`?a:this.colors()[a]?.[e]});if(i.some(p=>p===void 0)){this.copyStatus.set(`Cannot resolve ${e} for ${n.name}. Choose Copy CSS variable or Copy token name.`);return}let r=i.join(`
`);this.copyStatus.set(this.clipboard.copy(r)?`Copied ${n.name} as ${e}.`:`Copy failed. Select and copy this value: ${r}`)}copyLabel(n,e){return n.kind===`utility`?`Copy class`:n.kind===`breakpoint`?`Copy Sass`:qe[e]}categoryTitle(n){let e=this.categories.find(t=>t.value===n);return typeof e?.label==`string`?e.label:n}canCopy(n,e){return n.kind===`utility`||n.kind===`breakpoint`?e===`variable`:e===`variable`||e===`name`||!!(this.colors()[n.reference.slice(4,-1)]&&(n.kind!==`pair`||this.colors()[n.companionReference.slice(4,-1)]))}groupTags(n){let e=n.entries[0].group.split(` · `)[0],t=[],i=e.includes(`palette`)||e.includes(`theme`)||e===`Theme companions`,r=e.startsWith(`Current theme`)||!this.themingService.highContrast()&&i&&n.label===this.themingService.paletteLabel();return r&&t.push(`Current theme`),n.entries[0].kind===`pair`?t.push(`Companions`):i&&!r&&t.push(`Palette`),t}isExpanded(n){return this.expansionOverrides().get(n.id)??this.groups()[0]?.id===n.id}collapseAll(){this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!1])))}updateSearch(n){this.searchTerm.set(n),this.expansionOverrides.set(/* @__PURE__ */ new Map)}updateCategories(n){this.selectedCategories.set(n??[]),this.expansionOverrides.set(/* @__PURE__ */ new Map)}toggleGroup(n,e){this.expansionOverrides.update(t=>new Map(t).set(n,e))}resolveGroupLabel(n){let e=n.indexOf(` · `);return e<0?n===`Semantic pairs`?`Semantic`:n:n.slice(e+3).split(` `).map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(` `)}resolveColor(n){let e=this.liveValues()[n];if(!(!e||!this.colorContext))return this.colorCache.has(e)||this.colorCache.set(e,Qe(e,this.colorContext)??null),this.colorCache.get(e)??void 0}static ɵfac=function(e){return new(e||o)};static ɵcmp=j({type:o,selectors:[[`app-token-catalog`]],viewQuery:function(e,t){e&1&&wr(t.viewports,w,5),e&2&&fn$1()},features:[ln$1([E])],decls:22,vars:16,consts:[[`documentation`,``],[`groupTitle`,``],[`groupStatus`,``],[`viewport`,`appTokenViewport`],[`copyActions`,``],[`pageDescription`,`Browse the semantic tokens, palette colors, spacing, shapes, and motion values that power Blocks.`],[`title`,`Using and extending Blocks tokens`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`catalog-filters`],[`ariaLabel`,`Search tokens`,`placeholder`,`Search names, palettes, roles, or values…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Categories`,`placeholder`,`All tokens`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all tokens`,3,`ngModelChange`,`clearable`,`showSelectAll`,`options`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[1,`catalog-summary`],[`role`,`status`],[`id`,`token-copy-help`,1,`catalog-note`],[`role`,`status`,1,`copy-status`],[1,`catalog-groups`,3,`multiple`],[1,`empty-results`,3,`surfaceEffects`],[`path`,`projects/playground/src/app/components/screens/token-catalog/README.md`],[1,`catalog-category-heading`],[1,`token-group`,3,`expandedChange`,`title`,`titleTemplate`,`trailingTemplate`,`headingLevel`,`expanded`],[3,`decorative`],[1,`group-heading`],[`size`,`small`,`color`,`neutral`,3,`text`,`focusable`,`opaque`],[`appTokenViewport`,``,1,`token-chunk`,3,`chunk`,`enabled`,`compact`,`label`],[3,`class`],[`role`,`group`,`aria-haspopup`,`menu`,`tabindex`,`0`,`ariaDescribedBy`,`token-copy-help`,1,`token-card`,3,`surfaceEffects`,`opaque`,`bxContextMenu`,`ariaLabel`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`,3,`background-color`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`pair-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`radius-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`shadow-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`space-preview`],[1,`token-content`],[1,`token-color-value`],[3,`label`],[3,`action`,`label`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`],[1,`token-scope`],[1,`companion`],[`tabindex`,`0`,`aria-label`,`Responsive Sass example`,1,`playground-code-block`,`token-code`],[1,`token-reference`],[1,`token-value`],[`language`,`scss`,3,`highlight`],[`title`,`Source defaults`,1,`token-metadata`,3,`headingLevel`],[`title`,`Source defaults`,1,`token-metadata`,3,`contextmenu`,`pointerdown`,`headingLevel`]],template:function(e,t){if(e&1&&(te(0,`bx-page-container`,5),tt(1,`bx-collapsible`,6),Xw(2,nn,1,0,`ng-template`,null,0,cb),te(4,`div`,7)(5,`bx-search-input`,8),vR(),Ne(`ngModelChange`,function(r){return t.updateSearch(r)}),oe(),te(6,`bx-multi-select`,9),vR(),Ne(`ngModelChange`,function(r){return t.updateCategories(r)}),oe(),te(7,`button`,10),Ne(`click`,function(){return t.collapseAll()}),Se(8,`Collapse all`),oe()(),te(9,`div`,11)(10,`p`,12),Se(11),oe(),te(12,`p`),Se(13),oe()(),te(14,`p`,13),Se(15,` Right-click a card or touch and hold to choose a copy format. or focus a card and press Shift + F10. Colors follow the current theme. `),oe(),te(16,`p`,14),Se(17),oe(),te(18,`bx-accordion`,15),yr(19,Fn,7,7,null,null,J,!1,Pn,5,1,`bx-card`,16),oe()()),e&2){let i=ab(3);k(),ye(`headingLevel`,2)(`contentTemplate`,i),k(4),ye(`ngModel`,t.searchTerm()),xR(),k(),ye(`clearable`,!0)(`showSelectAll`,!1)(`options`,t.categories)(`ngModel`,t.selectedCategories()),xR(),k(),ye(`disabled`,!t.groups().length),k(4),gS(``,t.filteredEntries().length,` results in `,t.groups().length,` groups · `,t.variableCount,` CSS variables`),k(2),hS(``,t.themingService.paletteLabel(),` · `,t.themingService.activeTheme()),k(4),Be(t.copyStatus()),k(),ye(`multiple`,!0),k(),xr(t.groups())}},dependencies:[eI,Nee,Mee,LF,Z$1,hn$1,Ae,$M,XM,ZM,Pc,w$1,ht,w,Vf,LM,PM,qM],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.catalog-filters[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 0.75rem;
  align-items: end;
}
.catalog-filters[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  align-self: stretch;
  min-block-size: 2.5rem;
}
bx-search-input[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.catalog-summary[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-block-start: 1rem;
}
.catalog-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.catalog-note[_ngcontent-%COMP%], 
.copy-status[_ngcontent-%COMP%], 
.token-scope[_ngcontent-%COMP%], 
.token-value[_ngcontent-%COMP%], 
.token-color-value[_ngcontent-%COMP%], 
.companion[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8125rem;
}
.catalog-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.copy-status[_ngcontent-%COMP%] {
  min-block-size: 1.5em;
  margin-block: 0.5rem;
  overflow-wrap: anywhere;
}
.catalog-groups[_ngcontent-%COMP%] {
  --%NS%bx-accordion-gap: 0.75rem;
  --%NS%bx-collapsible-content-padding: 0.75rem;
}
.group-heading[_ngcontent-%COMP%] {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}
.catalog-category-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-inline-size: 0;
  margin-block: 1.5rem 0.5rem;
}
.catalog-category-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  min-inline-size: 0;
  margin: 0;
  color: var(--%NS%bx-text-heading);
  font-size: 1.125rem;
  overflow-wrap: anywhere;
}
.catalog-category-heading[_ngcontent-%COMP%]   bx-divider[_ngcontent-%COMP%] {
  --%NS%bx-divider-margin: 0;
  flex: 1 1 0;
}
.token-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
  gap: 1rem;
}
.color-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 10rem), 1fr));
  gap: 0.5rem;
}
.token-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: 1rem;
  --%NS%bx-card-radius: 0.5rem;
  --%NS%bx-card-background: var(--%NS%bx-bg-canvas);
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
.token-card[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.token-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  block-size: 100%;
  overflow-wrap: anywhere;
}
.token-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.token-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.token-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  line-height: 1.4;
}
.token-reference[_ngcontent-%COMP%], 
.token-metadata[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.75rem;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.token-metadata[_ngcontent-%COMP%] {
  --%NS%bx-collapsible-padding: 0.5rem;
  --%NS%bx-collapsible-content-padding: 0.5rem;
  font-size: 0.8125rem;
  -webkit-user-select: text;
  user-select: text;
  -webkit-touch-callout: default;
}
.token-metadata[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  padding-block: 0.5rem;
  color: var(--%NS%bx-text-secondary);
}
.token-code[_ngcontent-%COMP%] {
  margin-block: 0.5rem;
  padding: 0.75rem;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.token-swatch[_ngcontent-%COMP%], 
.pair-preview[_ngcontent-%COMP%] {
  block-size: 2.5rem;
  border-block-end: 1px solid var(--%NS%bx-border-default);
}
.pair-preview[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.shape-preview[_ngcontent-%COMP%], 
.space-preview[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-block-size: 10rem;
  padding: 1.5rem;
  border-block-end: 1px solid var(--%NS%bx-border-default);
  background: var(--%NS%bx-bg-surface-alt);
}
.shape-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  inline-size: min(100%, 10rem);
  block-size: 8rem;
  border: 1px solid var(--%NS%bx-border-brand);
  border-radius: 0.5rem;
  background: var(--%NS%bx-bg-element);
}
.shadow-preview[_ngcontent-%COMP%] {
  min-block-size: 12rem;
  background: var(--%NS%bx-color-neutral-200);
}
.shadow-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  block-size: 3rem;
  border-color: var(--%NS%bx-color-neutral-300);
  background: var(--%NS%bx-color-neutral-50);
}
.space-preview[_ngcontent-%COMP%] {
  min-block-size: 3rem;
  justify-content: start;
  padding-inline: 0.75rem;
}
.space-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  block-size: 1rem;
  max-inline-size: 100%;
  border-inline-start: 1px solid var(--%NS%bx-border-brand);
  background: var(--%NS%bx-primary);
}
.copy-button[_ngcontent-%COMP%] {
  align-self: start;
  min-block-size: 2rem;
  margin-block-start: auto;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}
.empty-results[_ngcontent-%COMP%] {
  padding: 1rem;
  text-align: center;
}
.catalog-documentation[_ngcontent-%COMP%] {
  margin-block: 1.5rem;
}
.token-chunk[_ngcontent-%COMP%] {
  display: block;
  min-inline-size: 0;
  overflow-anchor: auto;
}
.token-chunk[_ngcontent-%COMP%]    + .token-chunk[_ngcontent-%COMP%] {
  margin-block-start: 1rem;
}
.token-chunk[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0.25rem;
  border-radius: 0.25rem;
}
@media (min-width: 640px) {
  .catalog-filters[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}
@media (min-width: 1024px) {
  .catalog-filters[_ngcontent-%COMP%] {
    grid-template-columns: minmax(12rem, 1fr) minmax(12rem, 22rem) auto;
  }
  bx-search-input[_ngcontent-%COMP%] {
    grid-column: auto;
  }
}
@media (forced-colors: active) {
  .token-swatch[_ngcontent-%COMP%], 
   .pair-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
   .shape-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
   .space-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    forced-color-adjust: none;
  }
}`]})};export{Xe as TokenCatalog};