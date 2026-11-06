import{n as te,t as Z}from"./chunk-CUyRMuJq.js";import{n as k}from"./chunk-DGiA6seu.js";import{A as ht,c as hn$1}from"./main-U2OBHRR6.js";import{r as Z$1,t as Ae}from"./chunk-Ugx93LBR.js";import{$t as Te,B as Gc,Bn as aS,Br as ie,Ci as pte,Dr as gr,En as Xv,F as Fe,Fn as _S,Gn as bM,Hn as ae,Ji as tQ,Jr as jn,K as Hc,Kr as je$1,Mn as Za,Ni as rQ,Nn as _,Nr as hr,On as Ya,Ri as sM,Sr as gM,St as Mt,U as Gk,Ur as j,V as Gd,W as H,Xn as bn$1,Yn as bk,Zi as uM,_a as ye,_i as ote,_n as Wf,ai as mr,an as V$1,b as D,ci as nQ,dn as Vn,ft as LR,ga as yb,hn as Wa,hr as fM,ia as vn$1,j as F,ki as qp,kt as OR,ln as Ve,mi as oe,ni as lte,nn as U,o as A1,pi as oQ,pr as ea,qi as tM,qt as SS,ra as ve,si as nM,ta as v,tt as JF,ua as ws,va as yr,vi as p,xt as Ms,ya as z,yn as Wk,yt as Mn,zi as sQ,zn as aQ,zr as iQ}from"./chunk-DBDMpaTC.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var V=[{value:`colors`,label:`Colors`},{value:`pairs`,label:`Color pairs`},{value:`spacing`,label:`Spacing`},{value:`radii`,label:`Corner radii`},{value:`shadows`,label:`Shadows`},{value:`layers`,label:`Stacking layers`},{value:`effects`,label:`Glass and effects`},{value:`components`,label:`Component variables`},{value:`other`,label:`Accessibility and other variables`},{value:`breakpoints`,label:`Sass breakpoints`},{value:`utilities`,label:`Utility classes`}];var W=[`Backgrounds and surfaces`,`Primary and brand`,`Accent`,`Text`,`Borders`,`Danger`,`Warning`,`Information`,`Success`,`Scrollbars`];var ze=[`variable`,`name`,`hex`,`rgb`,`rgba`];var De={variable:`Copy CSS variable`,name:`Copy token name`,hex:`Copy HEX code`,rgb:`Copy RGB`,rgba:`Copy RGBA`};function Be(){let o=pte.flatMap(i=>{return Ge(i.group.startsWith(`Palette · `)?i.group.slice(10):void 0,!1,i.group).map(u=>({id:i.name,name:i.name,reference:i.reference,category:i.category,group:u,kind:i.kind,scope:i.scope,defaults:i.defaults,companion:``,companionReference:``,search:``}))}),n=aQ.flatMap(i=>{let m=bk(i),u=Ms(i);return Ge(u?i.replace(/-\d+$/,``):void 0,!0,`Semantic pairs`).map(S=>({id:`pair:${i}`,name:i,reference:ea(i),companion:m,companionReference:ea(m),category:`pairs`,group:S,kind:`pair`,scope:u?`Palette companion rule`:Object.hasOwn(Xv,i)?`Explicit semantic mapping`:`Default surface companion`,defaults:[],search:``}))}),e=Object.entries(yr).map(([i,m])=>({id:`breakpoint:${i}`,name:i,reference:`@include respond-up(${i}) { /* styles */ }`,category:`breakpoints`,group:`Responsive breakpoints`,kind:`breakpoint`,scope:`Sass only · not a CSS variable`,defaults:[`${m}px`],companion:``,companionReference:``,search:``})),t=sQ.map(i=>({id:`class:${i}`,name:`.${i}`,reference:i,category:`utilities`,group:/^bx-(bg|text|border)-/.test(i)?`Color utility classes`:`Layout and accessibility utility classes`,kind:`utility`,scope:`CSS class`,defaults:[],companion:``,companionReference:``,search:``})),a=V.map(i=>i.value),r$1={spacing:Object.keys(tQ),radii:Object.keys(nQ),shadows:Object.keys(rQ),layers:Object.keys(oQ)};return[...o,...n,...e,...t].sort((i,m)=>{let u=a.indexOf(i.category)-a.indexOf(m.category),S=W.indexOf(i.group),A=W.indexOf(m.group),We=(S<0?100:S)-(A<0?100:A)||i.group.localeCompare(m.group),z=r$1[i.category],Ue=z?z.indexOf(i.name.slice(i.name.lastIndexOf(`-`)+1))-z.indexOf(m.name.slice(m.name.lastIndexOf(`-`)+1)):0;return u||We||Ue||i.name.localeCompare(m.name,`en`,{numeric:!0})}).map(i=>s(r({},i),{search:[i.name,i.reference,i.category,i.group,i.kind,i.scope,i.companion,i.name.includes(`bg-`)?`background backgrounds`:``,...i.defaults].join(` `).toLowerCase()}))}function Ge(o,n,e){if(!o)return[e];let t=qp.filter(a=>{let r=iQ[a.id];return r.brand===o||r.accent===o});return t.length?t.map(a=>`${n?`Theme companions`:`Theme palettes`} \xB7 ${a.label}`):o===`primary`||o===`accent`?[n?`Current theme companions · Primary / Accent`:`Current theme · Primary / Accent`]:[`${n?`Palette companions`:`Other palettes`} \xB7 ${o}`]}function je(o,n){n.fillStyle=`#010203`,n.fillStyle=o;let e=n.fillStyle;if(n.fillStyle=`#030201`,n.fillStyle=o,n.fillStyle!==e)return;n.clearRect(0,0,1,1),n.fillRect(0,0,1,1);let t=n.getImageData(0,0,1,1).data,a=String(n.fillStyle),r=a.startsWith(`rgba(`)?a.match(/[\d.]+/g)?.map(Number):void 0,p=a.match(/\/\s*([\d.]+)(%)?\s*\)$/),i=r?.[3]??(p?Number(p[1])/(p[2]?100:1):t[3]/255),m=Math.round(i*1e4)/1e4,u=r?r.slice(0,3).map(Math.round):[t[0],t[1],t[2]];return{hex:`#${[...u,...m<1?[Math.round(m*255)]:[]].map(A=>A.toString(16).padStart(2,`0`)).join(``)}`,rgb:m<1?`rgba(${u.join(`, `)}, ${m})`:`rgb(${u.join(`, `)})`,rgba:`rgba(${u.join(`, `)}, ${m})`}}var He=()=>[];var qe=(o,n)=>n.id;function Ye(o,n){o&1&&Ve(0,`app-readme`,24)}function Qe(o,n){if(o&1&&(j(0,`div`,25)(1,`h2`),Te(2),U(),Ve(3,`bx-divider`,28),U()),o&2){let e=F().$implicit,t=F();D(2),je$1(t.categoryTitle(e.entries[0].category)),D(),ae(`decorative`,!0)}}function Xe(o,n){if(o&1&&(j(0,`span`,29)(1,`span`),Te(2),U()()),o&2){let e=n.$implicit;D(2),je$1(e)}}function Ze(o,n){if(o&1&&Ve(0,`bx-tag`,30),o&2){let e=n.$implicit;ae(`text`,e)(`focusable`,!1)(`opaque`,!0)}}function Je(o,n){if(o&1&&Vn(0,Ze,1,3,`bx-tag`,30,Wa),o&2){let e=F().$implicit,t=F();jn(t.groupTags(e))}}function en(o,n){if(o&1){let e=hr();j(0,`bx-menu-item`,44),ve(`action`,function(){bn$1(e);let a=F().$implicit,r=F(2).$implicit,p=F(3);return vn$1(p.copy(r,a))}),U()}if(o&2){let e=F().$implicit,t=F(2).$implicit,a=F(3);ae(`label`,a.copyLabel(t,e))}}function nn(o,n){if(o&1&&oe(0,en,1,1,`bx-menu-item`,43),o&2){let e=n.$implicit,t=F(2).$implicit,a=F(3);ie(a.canCopy(t,e)?0:-1)}}function tn(o,n){if(o&1&&(j(0,`bx-menu`),Vn(1,nn,1,1,null,null,Wa),U()),o&2){let e=F(4);D(),jn(e.copyFormats)}}function on(o,n){if(o&1&&Ve(0,`div`,45),o&2){let e=F().$implicit;ye(`background-color`,e.reference)}}function an(o,n){if(o&1&&(j(0,`div`,37),Ve(1,`span`)(2,`span`),U()),o&2){let e=F().$implicit;D(),ye(`background-color`,e.reference),D(),ye(`background-color`,e.companionReference)}}function rn(o,n){if(o&1&&(j(0,`div`,38),Ve(1,`span`),U()),o&2){let e=F().$implicit;D(),ye(`border-radius`,e.reference)}}function ln(o,n){if(o&1&&(j(0,`div`,39),Ve(1,`span`),U()),o&2){let e=F().$implicit;D(),ye(`box-shadow`,e.reference)}}function cn(o,n){if(o&1&&(j(0,`div`,40),Ve(1,`span`),U()),o&2){let e=F().$implicit;D(),ye(`inline-size`,e.reference)}}function sn(o,n){if(o&1&&(j(0,`code`,42),Te(1),U()),o&2){let e=F().$implicit,t=F(3);D(),je$1(t.colors()[e.name]?.hex||t.liveValues()[e.name])}}function dn(o,n){if(o&1&&(j(0,`code`,47),Te(1),U()),o&2){let e=F(2).$implicit;D(),gr(`↔ `,e.companion)}}function pn(o,n){if(o&1&&(j(0,`pre`,48),Ve(1,`code`,51),U()),o&2){let e=F(2).$implicit;D(),ae(`highlight`,e.reference)}}function mn(o,n){if(o&1&&(j(0,`code`,49),Te(1),U()),o&2){let e=F(2).$implicit;D(),je$1(e.reference)}}function gn(o,n){if(o&1&&(j(0,`code`,49),Te(1),U()),o&2){let e=F(2).$implicit;D(),je$1(e.companionReference)}}function _n(o,n){if(o&1&&(j(0,`code`,50),Te(1),U()),o&2){let e=F(2).$implicit,t=F(3);D(),je$1(t.liveValues()[e.name])}}function un(o,n){if(o&1&&(j(0,`code`),Te(1),U()),o&2){let e=n.$implicit;D(),je$1(e)}}function Cn(o,n){if(o&1&&(j(0,`bx-collapsible`,53),ve(`contextmenu`,function(t){return t.stopPropagation()})(`pointerdown`,function(t){return t.stopPropagation()}),Vn(1,un,2,1,`code`,null,Wa),U()),o&2){let e=F(3).$implicit;ae(`headingLevel`,5),D(),jn(e.defaults)}}function yn(o,n){if(o&1&&(j(0,`code`,50),Te(1),U()),o&2){let e=F(3).$implicit;D(),je$1(e.defaults[0])}}function fn(o,n){if(o&1&&oe(0,Cn,3,1,`bx-collapsible`,52)(1,yn,2,1,`code`,50),o&2){let e=F(2).$implicit;ie(e.defaults.length>1?0:1)}}function bn(o,n){if(o&1&&(j(0,`p`,46),Te(1),U(),oe(2,dn,2,1,`code`,47),oe(3,pn,2,1,`pre`,48)(4,mn,2,1,`code`,49),oe(5,gn,2,1,`code`,49),oe(6,_n,2,1,`code`,50)(7,fn,2,1)),o&2){let e=F().$implicit,t=F(3);D(),je$1(e.scope),D(),ie(e.companion?2:-1),D(),ie(e.kind===`breakpoint`?3:4),D(2),ie(e.companionReference?5:-1),D(),ie(t.liveValues()[e.name]?6:e.defaults.length?7:-1)}}function hn(o,n){if(o&1&&(j(0,`bx-card`,35),aS(1,tn,3,0,`ng-template`,null,7,yb),oe(3,on,1,2,`div`,36)(4,an,3,4,`div`,37)(5,rn,2,2,`div`,38)(6,ln,2,2,`div`,39)(7,cn,2,2,`div`,40),j(8,`div`,41)(9,`h4`)(10,`code`),Te(11),U()(),oe(12,sn,2,1,`code`,42)(13,bn,8,5),U()()),o&2){let e,t=n.$implicit,a=Ya(2);ae(`surfaceEffects`,!1)(`opaque`,!0)(`bxContextMenu`,a)(`ariaLabel`,t.name),H(`data-token`,t.id),D(3),ie((e=t.kind)===`color`?3:e===`pair`?4:e===`radius`?5:e===`shadow`?6:e===`spacing`?7:-1),D(8),je$1(t.name),D(),ie(t.kind===`color`?12:13)}}function xn(o,n){if(o&1){let e=hr();j(0,`button`,54),ve(`click`,function(){bn$1(e);let a=F(2).$implicit,r=F();return vn$1(r.renderMore(a))}),Te(1),U()}if(o&2){let e=F(2).$implicit;D(),gr(`Show more `,e.label,` tokens`)}}function vn(o,n){if(o&1){let e=hr();j(0,`div`,31),ve(`scrollEnd`,function(){bn$1(e);let a=F().$implicit,r=F();return vn$1(r.renderMore(a))}),j(1,`bx-virtual-collection`,32,6),aS(3,hn,14,8,`ng-template`,33),U(),oe(4,xn,2,1,`button`,34),U()}if(o&2){let e=Ya(2),t=F().$implicit,a=F(),r=Ya(3);ae(`infiniteScrollContainer`,r)(`infiniteScrollDisabled`,(a.visibleChunks().get(t.id)?.length??0)>=t.chunks.length)(`infiniteScrollRevision`,a.visibleEntries().get(t.id))(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,600),D(),ae(`items`,a.visibleEntries().get(t.id)??A1(12,He))(`trackBy`,a.entryKey)(`config`,t.entries[0].kind===`color`?a.colorVirtualConfig:a.tokenVirtualConfig)(`scrollContainer`,r),H(`aria-label`,`Tokens in `+t.label),D(2),ae(`bxVirtualItem`,e),D(),ie((a.visibleChunks().get(t.id)?.length??0)<t.chunks.length?4:-1)}}function kn(o,n){if(o&1){let e=hr();oe(0,Qe,4,2,`div`,25),j(1,`bx-accordion-item`,26),ve(`expandedChange`,function(a){let r=bn$1(e).$implicit,p=F();return vn$1(p.toggleGroup(r.id,a))}),aS(2,Xe,3,1,`ng-template`,null,4,yb)(4,Je,2,0,`ng-template`,null,5,yb),oe(6,vn,5,13,`div`,27),U()}if(o&2){let e=n.$implicit,t=n.$index,a=Ya(3),r=Ya(5),p=F();ie(t===0||p.groups()[t-1].entries[0].category!==e.entries[0].category?0:-1),D(),ae(`title`,e.label)(`titleTemplate`,a)(`trailingTemplate`,r)(`headingLevel`,3)(`expanded`,p.isExpanded(e)),D(5),ie(p.isExpanded(e)?6:-1)}}function Tn(o,n){o&1&&(j(0,`bx-card`,22)(1,`h2`),Te(2,`No tokens found`),U(),j(3,`p`),Te(4,`Try fewer words or clear the category filter to show all tokens.`),U()()),o&2&&ae(`surfaceEffects`,!1)}var Ke=class o{bxA11yService=p(Fe);clipboard=p(te);nativeElement=p(z).nativeElement;themingService=p(ws);entries=Be();liveTokens=pte.filter(n=>n.scope===`global`||n.scope===`theme`);colorCache=/* @__PURE__ */ new Map;normalizedLiveValues=v(()=>new Map(Object.entries(this.liveValues()).map(([n,e])=>[n,e.toLowerCase()])));colorSearch=v(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.liveTokens){let t=this.resolveColor(e.name);t&&n.set(e.name,`${t.hex} ${t.rgb} ${t.rgba}`)}return n});viewports=Gd(bM);entryKey=n=>n.id;colorVirtualConfig={layout:`grid`,minColumnWidth:`10rem`,estimatedRowHeight:288,overscan:800};tokenVirtualConfig={layout:`grid`,minColumnWidth:`15rem`,estimatedRowHeight:576,overscan:800};categories=V;copyFormats=ze;variableCount=pte.length;searchTerm=_(``);copyStatus=_(``);selectedCategories=_([]);liveValues=_({});expansionOverrides=_(/* @__PURE__ */ new Map);filteredEntries=v(()=>{let n=this.searchTerm().toLowerCase().trim().split(/\s+/).filter(Boolean),e=this.selectedCategories(),t=n.length?this.normalizedLiveValues():void 0,a=n.some(r=>/#|rgba?\(/.test(r))?this.colorSearch():void 0;return this.entries.filter(r=>{if(e.length&&!e.includes(r.category))return!1;if(!n.length||n.every(u=>r.search.includes(u)))return!0;let p=r.reference.startsWith(`var(`)?r.reference.slice(4,-1):r.name,i=r.companionReference.slice(4,-1),m=`${r.search} ${t?.get(p)??``} ${t?.get(i)??``} ${a?.get(p)??``} ${a?.get(i)??``}`;return n.every(u=>m.includes(u))})});groups=v(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.filteredEntries()){let t=`${e.category} / ${e.group}`,a=n.get(t)??[];a.push(e),n.set(t,a)}return[...n].map(([e,t])=>({id:e,label:this.resolveGroupLabel(t[0].group),total:t.length,entries:t,chunks:Array.from({length:Math.ceil(t.length/24)},(a,r)=>({id:`${e}:${r}`,entries:t.slice(r*24,(r+1)*24)}))}))});renderedChunks=Za({source:this.groups,computation:()=>/* @__PURE__ */ new Map});visibleChunks=v(()=>new Map(this.groups().map(n=>[n.id,n.chunks.slice(0,this.renderedChunks().get(n.id)??2)])));visibleEntries=v(()=>new Map([...this.visibleChunks()].map(([n,e])=>[n,e.flatMap(t=>t.entries)])));colors=v(()=>{let n={};for(let e of this.viewports())for(let t of e.renderedItems())for(let a of[t.reference,t.companionReference]){if(!a.startsWith(`var(`))continue;let r=a.slice(4,-1),p=this.resolveColor(r);p&&(n[r]=p)}return n});colorContext=null;constructor(){mr(()=>{if(this.themingService.activeTheme(),this.themingService.palette(),this.themingService.highContrast(),this.themingService.appearance(),this.bxA11yService.isReducedMotion(),!this.colorContext){let t=this.nativeElement.ownerDocument.createElement(`canvas`);t.width=1,t.height=1,this.colorContext=t.getContext(`2d`,{willReadFrequently:!0})}let n=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement),e={};for(let t of this.liveTokens){let a=n?.getPropertyValue(t.name).trim()??``;e[t.name]=a===`currentColor`?n?.color??``:a}this.colorCache.clear(),this.liveValues.set(e)})}copy(n,e){let a=(n.kind===`pair`?[n.reference,n.companionReference]:[n.reference]).map(p=>{let i=p.startsWith(`var(`)?p.slice(4,-1):p;return e===`variable`?p:e===`name`?i:this.colors()[i]?.[e]});if(a.some(p=>p===void 0)){this.copyStatus.set(`Cannot resolve ${e} for ${n.name}. Choose Copy CSS variable or Copy token name.`);return}let r=a.join(`
`);this.copyStatus.set(this.clipboard.copy(r)?`Copied ${n.name} as ${e}.`:`Copy failed. Select and copy this value: ${r}`)}copyLabel(n,e){return n.kind===`utility`?`Copy class`:n.kind===`breakpoint`?`Copy Sass`:De[e]}categoryTitle(n){let e=this.categories.find(t=>t.value===n);return typeof e?.label==`string`?e.label:n}canCopy(n,e){return n.kind===`utility`||n.kind===`breakpoint`?e===`variable`:e===`variable`||e===`name`||!!(this.colors()[n.reference.slice(4,-1)]&&(n.kind!==`pair`||this.colors()[n.companionReference.slice(4,-1)]))}groupTags(n){let e=n.entries[0].group.split(` · `)[0],t=[],a=e.includes(`palette`)||e.includes(`theme`)||e===`Theme companions`,r=e.startsWith(`Current theme`)||!this.themingService.highContrast()&&a&&n.label===this.themingService.paletteLabel();return r&&t.push(`Current theme`),n.entries[0].kind===`pair`?t.push(`Companions`):a&&!r&&t.push(`Palette`),t}isExpanded(n){return this.expansionOverrides().get(n.id)??this.groups()[0]?.id===n.id}collapseAll(){this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!1])))}updateSearch(n){this.searchTerm.set(n),this.expansionOverrides.set(/* @__PURE__ */ new Map)}updateCategories(n){this.selectedCategories.set(n??[]),this.expansionOverrides.set(/* @__PURE__ */ new Map)}renderMore(n){this.renderedChunks.update(e=>new Map(e).set(n.id,Math.min(n.chunks.length,(e.get(n.id)??2)+2)))}toggleGroup(n,e){this.expansionOverrides.update(t=>new Map(t).set(n,e))}resolveGroupLabel(n){let e=n.indexOf(` · `);return e<0?n===`Semantic pairs`?`Semantic`:n:n.slice(e+3).split(` `).map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(` `)}resolveColor(n){let e=this.liveValues()[n];if(!(!e||!this.colorContext))return this.colorCache.has(e)||this.colorCache.set(e,je(e,this.colorContext)??null),this.colorCache.get(e)??void 0}static ɵfac=function(e){return new(e||o)};static ɵcmp=V$1({type:o,selectors:[[`app-token-catalog`]],viewQuery:function(e,t){e&1&&Mn(t.viewports,bM,5),e&2&&Mt()},decls:29,vars:18,consts:[[`tokenRegion`,``],[`tokenScroll`,``],[`documentation`,``],[`tokenResults`,``],[`groupTitle`,``],[`groupStatus`,``],[`tokenRows`,``],[`copyActions`,``],[`tabindex`,`-1`,1,`token-region`],[`tabindex`,`-1`,1,`token-scroll`],[`pageDescription`,`Browse the semantic tokens, palette colors, spacing, shapes, and motion values that power Blocks.`],[`title`,`Using and extending Blocks tokens`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`catalog-filters`],[`ariaLabel`,`Search tokens`,`placeholder`,`Search names, palettes, roles, or values…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Categories`,`placeholder`,`All tokens`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all tokens`,3,`ngModelChange`,`clearable`,`showSelectAll`,`options`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[1,`catalog-summary`],[`role`,`status`],[`id`,`token-copy-help`,1,`catalog-note`],[`role`,`status`,1,`copy-status`],[`tabindex`,`-1`,1,`token-results`],[1,`catalog-groups`,3,`multiple`],[1,`empty-results`,3,`surfaceEffects`],[3,`container`,`boundary`],[`path`,`projects/playground/src/app/components/screens/token-catalog/README.md`],[1,`catalog-category-heading`],[1,`token-group`,3,`expandedChange`,`title`,`titleTemplate`,`trailingTemplate`,`headingLevel`,`expanded`],[`bxInfiniteScroll`,``,3,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`decorative`],[1,`group-heading`],[`size`,`small`,`color`,`neutral`,3,`text`,`focusable`,`opaque`],[`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`role`,`group`,`aria-haspopup`,`menu`,`tabindex`,`0`,`ariaDescribedBy`,`token-copy-help`,1,`token-card`,3,`surfaceEffects`,`opaque`,`bxContextMenu`,`ariaLabel`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`,3,`background-color`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`pair-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`radius-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`shadow-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`space-preview`],[1,`token-content`],[1,`token-color-value`],[3,`label`],[3,`action`,`label`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`],[1,`token-scope`],[1,`companion`],[`tabindex`,`0`,`aria-label`,`Responsive Sass example`,1,`playground-code-block`,`token-code`],[1,`token-reference`],[1,`token-value`],[`language`,`scss`,3,`highlight`],[`title`,`Source defaults`,1,`token-metadata`,3,`headingLevel`],[`title`,`Source defaults`,1,`token-metadata`,3,`contextmenu`,`pointerdown`,`headingLevel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,t){if(e&1&&(j(0,`div`,8,0)(2,`div`,9,1)(4,`bx-page-container`,10),Ve(5,`bx-collapsible`,11),aS(6,Ye,1,0,`ng-template`,null,2,yb),j(8,`div`,12)(9,`bx-search-input`,13),OR(),ve(`ngModelChange`,function(r){return t.updateSearch(r)}),U(),j(10,`bx-multi-select`,14),OR(),ve(`ngModelChange`,function(r){return t.updateCategories(r)}),U(),j(11,`button`,15),ve(`click`,function(){return t.collapseAll()}),Te(12,`Collapse all`),U()(),j(13,`div`,16)(14,`p`,17),Te(15),U(),j(16,`p`),Te(17),U()(),j(18,`p`,18),Te(19,` Right-click a card or touch and hold to choose a copy format. or focus a card and press Shift + F10. Colors follow the current theme. `),U(),j(20,`p`,19),Te(21),U(),j(22,`div`,20,3)(24,`bx-accordion`,21),Vn(25,kn,7,7,null,null,qe,!1,Tn,5,1,`bx-card`,22),U()()()(),Ve(28,`app-scroll-to-top`,23),U()),e&2){let a=Ya(3),r=Ya(7),p=Ya(23);D(5),ae(`headingLevel`,2)(`contentTemplate`,r),D(4),ae(`ngModel`,t.searchTerm()),LR(),D(),ae(`clearable`,!0)(`showSelectAll`,!1)(`options`,t.categories)(`ngModel`,t.selectedCategories()),LR(),D(),ae(`disabled`,!t.groups().length),D(4),_S(``,t.filteredEntries().length,` results in `,t.groups().length,` groups · `,t.variableCount,` CSS variables`),D(2),SS(``,t.themingService.paletteLabel(),` · `,t.themingService.activeTheme()),D(4),je$1(t.copyStatus()),D(3),ae(`multiple`,!0),D(),jn(t.groups()),D(3),ae(`container`,a)(`boundary`,p)}},dependencies:[fM,lte,ote,JF,Z$1,hn$1,Ae,nM,uM,sM,Hc,k,ht,bM,Gc,Z,gM,Wf,Wk,Gk,tM],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  min-block-size: 0;
  block-size: 100%;
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
}
.token-region[_ngcontent-%COMP%] {
  position: relative;
  block-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  outline: none;
}
.token-scroll[_ngcontent-%COMP%] {
  block-size: 100%;
  overflow: auto;
  overflow-anchor: none;
  overscroll-behavior: contain;
  outline: none;
}`]})};export{Ke as TokenCatalog};