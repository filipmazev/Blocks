import{n as te,t as Z}from"./chunk-BAwoAnP2.js";import{n as k}from"./chunk-BpRItq3P.js";import{A as ht,T as so,X as qe$1,q as Z$1}from"./main-HW2XYL5W.js";import{$ as Is,$i as v,$n as a2,$r as kb,Ai as qR,Ar as gr,Bi as se,Bt as P,Ca as yQ,Cn as V$1,Cr as es,D as E,Dr as gQ,Et as NS,Ft as Oe,Gr as je$1,Ji as tr,Li as rs,Mr as hS,N as Fe,Na as zR,Ni as qte,Nn as Wte,Oa as yr,Pa as zn,Si as p,Tn as Vte,Vr as j1,W as H,Yn as _M,Zr as k$1,Zt as Qp,_ as CM,_a as xe,_t as Ls,br as eh,di as mQ,dn as Tn$1,et as It,gi as ns,ha as xQ,hn as U,ii as lM,jr as hM,k as Ek,ka as z,la as wQ,ma as xM,nr as ae,or as bM,pi as mr,qr as jn,ra as vQ,rt as Jk,sr as bQ,t as $,tn as RS,tr as aa,tt as Jc,u as At,ua as we,un as Te,ur as cM,vr as eM,xr as ep,yi as oe,zn as Yc,zr as iy,zt as Ot}from"./chunk-Dt37D5SH.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var V=[{value:`colors`,label:`Colors`},{value:`pairs`,label:`Color pairs`},{value:`spacing`,label:`Spacing`},{value:`radii`,label:`Corner radii`},{value:`shadows`,label:`Shadows`},{value:`layers`,label:`Stacking layers`},{value:`effects`,label:`Glass and effects`},{value:`components`,label:`Component variables`},{value:`other`,label:`Accessibility and other variables`},{value:`breakpoints`,label:`Sass breakpoints`},{value:`utilities`,label:`Utility classes`}];var W=[`Backgrounds and surfaces`,`Primary and brand`,`Accent`,`Text`,`Borders`,`Danger`,`Warning`,`Information`,`Success`,`Scrollbars`];var ze=[`variable`,`name`,`hex`,`rgb`,`rgba`];var De={variable:`Copy CSS variable`,name:`Copy token name`,hex:`Copy HEX code`,rgb:`Copy RGB`,rgba:`Copy RGBA`};function Be(){let o=Wte.flatMap(i=>{return Ge(i.group.startsWith(`Palette · `)?i.group.slice(10):void 0,!1,i.group).map(u=>({id:i.name,name:i.name,reference:i.reference,category:i.category,group:u,kind:i.kind,scope:i.scope,defaults:i.defaults,companion:``,companionReference:``,search:``}))}),n=xQ.flatMap(i=>{let m=Ek(i),u=Ls(i);return Ge(u?i.replace(/-\d+$/,``):void 0,!0,`Semantic pairs`).map(S=>({id:`pair:${i}`,name:i,reference:aa(i),companion:m,companionReference:aa(m),category:`pairs`,group:S,kind:`pair`,scope:u?`Palette companion rule`:Object.hasOwn(iy,i)?`Explicit semantic mapping`:`Default surface companion`,defaults:[],search:``}))}),e=Object.entries(yr).map(([i,m])=>({id:`breakpoint:${i}`,name:i,reference:`@include respond-up(${i}) { /* styles */ }`,category:`breakpoints`,group:`Responsive breakpoints`,kind:`breakpoint`,scope:`Sass only · not a CSS variable`,defaults:[`${m}px`],companion:``,companionReference:``,search:``})),t=wQ.map(i=>({id:`class:${i}`,name:`.${i}`,reference:i,category:`utilities`,group:/^bx-(bg|text|border)-/.test(i)?`Color utility classes`:`Layout and accessibility utility classes`,kind:`utility`,scope:`CSS class`,defaults:[],companion:``,companionReference:``,search:``})),a=V.map(i=>i.value),r$1={spacing:Object.keys(gQ),radii:Object.keys(mQ),shadows:Object.keys(bQ),layers:Object.keys(vQ)};return[...o,...n,...e,...t].sort((i,m)=>{let u=a.indexOf(i.category)-a.indexOf(m.category),S=W.indexOf(i.group),A=W.indexOf(m.group),We=(S<0?100:S)-(A<0?100:A)||i.group.localeCompare(m.group),z=r$1[i.category],Ue=z?z.indexOf(i.name.slice(i.name.lastIndexOf(`-`)+1))-z.indexOf(m.name.slice(m.name.lastIndexOf(`-`)+1)):0;return u||We||Ue||i.name.localeCompare(m.name,`en`,{numeric:!0})}).map(i=>s(r({},i),{search:[i.name,i.reference,i.category,i.group,i.kind,i.scope,i.companion,i.name.includes(`bg-`)?`background backgrounds`:``,...i.defaults].join(` `).toLowerCase()}))}function Ge(o,n,e){if(!o)return[e];let t=Qp.filter(a=>{let r=yQ[a.id];return r.brand===o||r.accent===o});return t.length?t.map(a=>`${n?`Theme companions`:`Theme palettes`} \xB7 ${a.label}`):o===`primary`||o===`accent`?[n?`Current theme companions · Primary / Accent`:`Current theme · Primary / Accent`]:[`${n?`Palette companions`:`Other palettes`} \xB7 ${o}`]}function je(o,n){n.fillStyle=`#010203`,n.fillStyle=o;let e=n.fillStyle;if(n.fillStyle=`#030201`,n.fillStyle=o,n.fillStyle!==e)return;n.clearRect(0,0,1,1),n.fillRect(0,0,1,1);let t=n.getImageData(0,0,1,1).data,a=String(n.fillStyle),r=a.startsWith(`rgba(`)?a.match(/[\d.]+/g)?.map(Number):void 0,p=a.match(/\/\s*([\d.]+)(%)?\s*\)$/),i=r?.[3]??(p?Number(p[1])/(p[2]?100:1):t[3]/255),m=Math.round(i*1e4)/1e4,u=r?r.slice(0,3).map(Math.round):[t[0],t[1],t[2]];return{hex:`#${[...u,...m<1?[Math.round(m*255)]:[]].map(A=>A.toString(16).padStart(2,`0`)).join(``)}`,rgb:m<1?`rgba(${u.join(`, `)}, ${m})`:`rgb(${u.join(`, `)})`,rgba:`rgba(${u.join(`, `)}, ${m})`}}var He=()=>[];var qe=(o,n)=>n.id;function Ye(o,n){o&1&&Fe(0,`app-readme`,24)}function Qe(o,n){if(o&1&&(U(0,`div`,25)(1,`h2`),Te(2),H(),Fe(3,`bx-divider`,28),H()),o&2){let e=P().$implicit,t=P();k$1(2),je$1(t.categoryTitle(e.entries[0].category)),k$1(),oe(`decorative`,!0)}}function Xe(o,n){if(o&1&&(U(0,`span`,29)(1,`span`),Te(2),H()()),o&2){let e=n.$implicit;k$1(2),je$1(e)}}function Ze(o,n){if(o&1&&Fe(0,`bx-tag`,30),o&2){let e=n.$implicit;oe(`text`,e)(`focusable`,!1)(`opaque`,!0)}}function Je(o,n){if(o&1&&jn(0,Ze,1,3,`bx-tag`,30,es),o&2){let e=P().$implicit,t=P();zn(t.groupTags(e))}}function en(o,n){if(o&1){let e=gr();U(0,`bx-menu-item`,44),xe(`action`,function(){At(e);let a=P().$implicit,r=P(2).$implicit,p=P(3);return Ot(p.copy(r,a))}),H()}if(o&2){let e=P().$implicit,t=P(2).$implicit,a=P(3);oe(`label`,a.copyLabel(t,e))}}function nn(o,n){if(o&1&&ae(0,en,1,1,`bx-menu-item`,43),o&2){let e=n.$implicit,t=P(2).$implicit,a=P(3);se(a.canCopy(t,e)?0:-1)}}function tn(o,n){if(o&1&&(U(0,`bx-menu`),jn(1,nn,1,1,null,null,es),H()),o&2){let e=P(4);k$1(),zn(e.copyFormats)}}function on(o,n){if(o&1&&Fe(0,`div`,45),o&2){let e=P().$implicit;we(`background-color`,e.reference)}}function an(o,n){if(o&1&&(U(0,`div`,37),Fe(1,`span`)(2,`span`),H()),o&2){let e=P().$implicit;k$1(),we(`background-color`,e.reference),k$1(),we(`background-color`,e.companionReference)}}function rn(o,n){if(o&1&&(U(0,`div`,38),Fe(1,`span`),H()),o&2){let e=P().$implicit;k$1(),we(`border-radius`,e.reference)}}function ln(o,n){if(o&1&&(U(0,`div`,39),Fe(1,`span`),H()),o&2){let e=P().$implicit;k$1(),we(`box-shadow`,e.reference)}}function cn(o,n){if(o&1&&(U(0,`div`,40),Fe(1,`span`),H()),o&2){let e=P().$implicit;k$1(),we(`inline-size`,e.reference)}}function sn(o,n){if(o&1&&(U(0,`code`,42),Te(1),H()),o&2){let e=P().$implicit,t=P(3);k$1(),je$1(t.colors()[e.name]?.hex||t.liveValues()[e.name])}}function dn(o,n){if(o&1&&(U(0,`code`,47),Te(1),H()),o&2){let e=P(2).$implicit;k$1(),mr(`↔ `,e.companion)}}function pn(o,n){if(o&1&&(U(0,`pre`,48),Fe(1,`code`,51),H()),o&2){let e=P(2).$implicit;k$1(),oe(`highlight`,e.reference)}}function mn(o,n){if(o&1&&(U(0,`code`,49),Te(1),H()),o&2){let e=P(2).$implicit;k$1(),je$1(e.reference)}}function gn(o,n){if(o&1&&(U(0,`code`,49),Te(1),H()),o&2){let e=P(2).$implicit;k$1(),je$1(e.companionReference)}}function _n(o,n){if(o&1&&(U(0,`code`,50),Te(1),H()),o&2){let e=P(2).$implicit,t=P(3);k$1(),je$1(t.liveValues()[e.name])}}function un(o,n){if(o&1&&(U(0,`code`),Te(1),H()),o&2){let e=n.$implicit;k$1(),je$1(e)}}function Cn(o,n){if(o&1&&(U(0,`bx-collapsible`,53),xe(`contextmenu`,function(t){return t.stopPropagation()})(`pointerdown`,function(t){return t.stopPropagation()}),jn(1,un,2,1,`code`,null,es),H()),o&2){let e=P(3).$implicit;oe(`headingLevel`,5),k$1(),zn(e.defaults)}}function yn(o,n){if(o&1&&(U(0,`code`,50),Te(1),H()),o&2){let e=P(3).$implicit;k$1(),je$1(e.defaults[0])}}function fn(o,n){if(o&1&&ae(0,Cn,3,1,`bx-collapsible`,52)(1,yn,2,1,`code`,50),o&2){let e=P(2).$implicit;se(e.defaults.length>1?0:1)}}function bn(o,n){if(o&1&&(U(0,`p`,46),Te(1),H(),ae(2,dn,2,1,`code`,47),ae(3,pn,2,1,`pre`,48)(4,mn,2,1,`code`,49),ae(5,gn,2,1,`code`,49),ae(6,_n,2,1,`code`,50)(7,fn,2,1)),o&2){let e=P().$implicit,t=P(3);k$1(),je$1(e.scope),k$1(),se(e.companion?2:-1),k$1(),se(e.kind===`breakpoint`?3:4),k$1(2),se(e.companionReference?5:-1),k$1(),se(t.liveValues()[e.name]?6:e.defaults.length?7:-1)}}function hn(o,n){if(o&1&&(U(0,`bx-card`,35),hS(1,tn,3,0,`ng-template`,null,7,kb),ae(3,on,1,2,`div`,36)(4,an,3,4,`div`,37)(5,rn,2,2,`div`,38)(6,ln,2,2,`div`,39)(7,cn,2,2,`div`,40),U(8,`div`,41)(9,`h4`)(10,`code`),Te(11),H()(),ae(12,sn,2,1,`code`,42)(13,bn,8,5),H()()),o&2){let e,t=n.$implicit,a=ns(2);oe(`surfaceEffects`,!1)(`opaque`,!0)(`bxContextMenu`,a)(`ariaLabel`,t.name),$(`data-token`,t.id),k$1(3),se((e=t.kind)===`color`?3:e===`pair`?4:e===`radius`?5:e===`shadow`?6:e===`spacing`?7:-1),k$1(8),je$1(t.name),k$1(),se(t.kind===`color`?12:13)}}function xn(o,n){if(o&1){let e=gr();U(0,`button`,54),xe(`click`,function(){At(e);let a=P(2).$implicit,r=P();return Ot(r.renderMore(a))}),Te(1),H()}if(o&2){let e=P(2).$implicit;k$1(),mr(`Show more `,e.label,` tokens`)}}function vn(o,n){if(o&1){let e=gr();U(0,`div`,31),xe(`scrollEnd`,function(){At(e);let a=P().$implicit,r=P();return Ot(r.renderMore(a))}),U(1,`bx-virtual-collection`,32,6),hS(3,hn,14,8,`ng-template`,33),H(),ae(4,xn,2,1,`button`,34),H()}if(o&2){let e=ns(2),t=P().$implicit,a=P(),r=ns(3);oe(`infiniteScrollContainer`,r)(`infiniteScrollDisabled`,(a.visibleChunks().get(t.id)?.length??0)>=t.chunks.length)(`infiniteScrollRevision`,a.visibleEntries().get(t.id))(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,600),k$1(),oe(`items`,a.visibleEntries().get(t.id)??j1(12,He))(`trackBy`,a.entryKey)(`config`,t.entries[0].kind===`color`?a.colorVirtualConfig:a.tokenVirtualConfig)(`scrollContainer`,r),$(`aria-label`,`Tokens in `+t.label),k$1(2),oe(`bxVirtualItem`,e),k$1(),se((a.visibleChunks().get(t.id)?.length??0)<t.chunks.length?4:-1)}}function kn(o,n){if(o&1){let e=gr();ae(0,Qe,4,2,`div`,25),U(1,`bx-accordion-item`,26),xe(`expandedChange`,function(a){let r=At(e).$implicit,p=P();return Ot(p.toggleGroup(r.id,a))}),hS(2,Xe,3,1,`ng-template`,null,4,kb)(4,Je,2,0,`ng-template`,null,5,kb),ae(6,vn,5,13,`div`,27),H()}if(o&2){let e=n.$implicit,t=n.$index,a=ns(3),r=ns(5),p=P();se(t===0||p.groups()[t-1].entries[0].category!==e.entries[0].category?0:-1),k$1(),oe(`title`,e.label)(`titleTemplate`,a)(`trailingTemplate`,r)(`headingLevel`,3)(`expanded`,p.isExpanded(e)),k$1(5),se(p.isExpanded(e)?6:-1)}}function Tn(o,n){o&1&&(U(0,`bx-card`,22)(1,`h2`),Te(2,`No tokens found`),H(),U(3,`p`),Te(4,`Try fewer words or clear the category filter to show all tokens.`),H()()),o&2&&oe(`surfaceEffects`,!1)}var Ke=class o{bxA11yService=p(Oe);clipboard=p(te);nativeElement=p(V$1).nativeElement;themingService=p(Is);entries=Be();liveTokens=Wte.filter(n=>n.scope===`global`||n.scope===`theme`);colorCache=/* @__PURE__ */ new Map;normalizedLiveValues=v(()=>new Map(Object.entries(this.liveValues()).map(([n,e])=>[n,e.toLowerCase()])));colorSearch=v(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.liveTokens){let t=this.resolveColor(e.name);t&&n.set(e.name,`${t.hex} ${t.rgb} ${t.rgba}`)}return n});viewports=ep(_M);entryKey=n=>n.id;colorVirtualConfig={layout:`grid`,minColumnWidth:`10rem`,estimatedRowHeight:288,overscan:800};tokenVirtualConfig={layout:`grid`,minColumnWidth:`15rem`,estimatedRowHeight:576,overscan:800};categories=V;copyFormats=ze;variableCount=Wte.length;searchTerm=E(``);copyStatus=E(``);selectedCategories=E([]);liveValues=E({});expansionOverrides=E(/* @__PURE__ */ new Map);filteredEntries=v(()=>{let n=this.searchTerm().toLowerCase().trim().split(/\s+/).filter(Boolean),e=this.selectedCategories(),t=n.length?this.normalizedLiveValues():void 0,a=n.some(r=>/#|rgba?\(/.test(r))?this.colorSearch():void 0;return this.entries.filter(r=>{if(e.length&&!e.includes(r.category))return!1;if(!n.length||n.every(u=>r.search.includes(u)))return!0;let p=r.reference.startsWith(`var(`)?r.reference.slice(4,-1):r.name,i=r.companionReference.slice(4,-1),m=`${r.search} ${t?.get(p)??``} ${t?.get(i)??``} ${a?.get(p)??``} ${a?.get(i)??``}`;return n.every(u=>m.includes(u))})});groups=v(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.filteredEntries()){let t=`${e.category} / ${e.group}`,a=n.get(t)??[];a.push(e),n.set(t,a)}return[...n].map(([e,t])=>({id:e,label:this.resolveGroupLabel(t[0].group),total:t.length,entries:t,chunks:Array.from({length:Math.ceil(t.length/24)},(a,r)=>({id:`${e}:${r}`,entries:t.slice(r*24,(r+1)*24)}))}))});renderedChunks=rs({source:this.groups,computation:()=>/* @__PURE__ */ new Map});visibleChunks=v(()=>new Map(this.groups().map(n=>[n.id,n.chunks.slice(0,this.renderedChunks().get(n.id)??2)])));visibleEntries=v(()=>new Map([...this.visibleChunks()].map(([n,e])=>[n,e.flatMap(t=>t.entries)])));colors=v(()=>{let n={};for(let e of this.viewports())for(let t of e.renderedItems())for(let a of[t.reference,t.companionReference]){if(!a.startsWith(`var(`))continue;let r=a.slice(4,-1),p=this.resolveColor(r);p&&(n[r]=p)}return n});colorContext=null;constructor(){tr(()=>{if(this.themingService.activeTheme(),this.themingService.palette(),this.themingService.highContrast(),this.themingService.appearance(),this.bxA11yService.isReducedMotion(),!this.colorContext){let t=this.nativeElement.ownerDocument.createElement(`canvas`);t.width=1,t.height=1,this.colorContext=t.getContext(`2d`,{willReadFrequently:!0})}let n=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement),e={};for(let t of this.liveTokens){let a=n?.getPropertyValue(t.name).trim()??``;e[t.name]=a===`currentColor`?n?.color??``:a}this.colorCache.clear(),this.liveValues.set(e)})}copy(n,e){let a=(n.kind===`pair`?[n.reference,n.companionReference]:[n.reference]).map(p=>{let i=p.startsWith(`var(`)?p.slice(4,-1):p;return e===`variable`?p:e===`name`?i:this.colors()[i]?.[e]});if(a.some(p=>p===void 0)){this.copyStatus.set(`Cannot resolve ${e} for ${n.name}. Choose Copy CSS variable or Copy token name.`);return}let r=a.join(`
`);this.copyStatus.set(this.clipboard.copy(r)?`Copied ${n.name} as ${e}.`:`Copy failed. Select and copy this value: ${r}`)}copyLabel(n,e){return n.kind===`utility`?`Copy class`:n.kind===`breakpoint`?`Copy Sass`:De[e]}categoryTitle(n){let e=this.categories.find(t=>t.value===n);return typeof e?.label==`string`?e.label:n}canCopy(n,e){return n.kind===`utility`||n.kind===`breakpoint`?e===`variable`:e===`variable`||e===`name`||!!(this.colors()[n.reference.slice(4,-1)]&&(n.kind!==`pair`||this.colors()[n.companionReference.slice(4,-1)]))}groupTags(n){let e=n.entries[0].group.split(` · `)[0],t=[],a=e.includes(`palette`)||e.includes(`theme`)||e===`Theme companions`,r=e.startsWith(`Current theme`)||!this.themingService.highContrast()&&a&&n.label===this.themingService.paletteLabel();return r&&t.push(`Current theme`),n.entries[0].kind===`pair`?t.push(`Companions`):a&&!r&&t.push(`Palette`),t}isExpanded(n){return this.expansionOverrides().get(n.id)??this.groups()[0]?.id===n.id}collapseAll(){this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!1])))}updateSearch(n){this.searchTerm.set(n),this.expansionOverrides.set(/* @__PURE__ */ new Map)}updateCategories(n){this.selectedCategories.set(n??[]),this.expansionOverrides.set(/* @__PURE__ */ new Map)}renderMore(n){this.renderedChunks.update(e=>new Map(e).set(n.id,Math.min(n.chunks.length,(e.get(n.id)??2)+2)))}toggleGroup(n,e){this.expansionOverrides.update(t=>new Map(t).set(n,e))}resolveGroupLabel(n){let e=n.indexOf(` · `);return e<0?n===`Semantic pairs`?`Semantic`:n:n.slice(e+3).split(` `).map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(` `)}resolveColor(n){let e=this.liveValues()[n];if(!(!e||!this.colorContext))return this.colorCache.has(e)||this.colorCache.set(e,je(e,this.colorContext)??null),this.colorCache.get(e)??void 0}static ɵfac=function(e){return new(e||o)};static ɵcmp=z({type:o,selectors:[[`app-token-catalog`]],viewQuery:function(e,t){e&1&&Tn$1(t.viewports,_M,5),e&2&&It()},decls:29,vars:18,consts:[[`tokenRegion`,``],[`tokenScroll`,``],[`documentation`,``],[`tokenResults`,``],[`groupTitle`,``],[`groupStatus`,``],[`tokenRows`,``],[`copyActions`,``],[`tabindex`,`-1`,1,`token-region`],[`tabindex`,`-1`,1,`token-scroll`],[`pageDescription`,`Browse the semantic tokens, palette colors, spacing, shapes, and motion values that power Blocks.`],[`title`,`Using and extending Blocks tokens`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`catalog-filters`],[`ariaLabel`,`Search tokens`,`placeholder`,`Search names, palettes, roles, or values…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Categories`,`placeholder`,`All tokens`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all tokens`,3,`ngModelChange`,`clearable`,`showSelectAll`,`options`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[1,`catalog-summary`],[`role`,`status`],[`id`,`token-copy-help`,1,`catalog-note`],[`role`,`status`,1,`copy-status`],[`tabindex`,`-1`,1,`token-results`],[1,`catalog-groups`,3,`multiple`],[1,`empty-results`,3,`surfaceEffects`],[3,`container`,`boundary`],[`path`,`projects/playground/src/app/components/screens/token-catalog/README.md`],[1,`catalog-category-heading`],[1,`token-group`,3,`expandedChange`,`title`,`titleTemplate`,`trailingTemplate`,`headingLevel`,`expanded`],[`bxInfiniteScroll`,``,3,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`decorative`],[1,`group-heading`],[`size`,`small`,`color`,`neutral`,3,`text`,`focusable`,`opaque`],[`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`role`,`group`,`aria-haspopup`,`menu`,`tabindex`,`0`,`ariaDescribedBy`,`token-copy-help`,1,`token-card`,3,`surfaceEffects`,`opaque`,`bxContextMenu`,`ariaLabel`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`,3,`background-color`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`pair-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`radius-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`shadow-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`space-preview`],[1,`token-content`],[1,`token-color-value`],[3,`label`],[3,`action`,`label`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`],[1,`token-scope`],[1,`companion`],[`tabindex`,`0`,`aria-label`,`Responsive Sass example`,1,`playground-code-block`,`token-code`],[1,`token-reference`],[1,`token-value`],[`language`,`scss`,3,`highlight`],[`title`,`Source defaults`,1,`token-metadata`,3,`headingLevel`],[`title`,`Source defaults`,1,`token-metadata`,3,`contextmenu`,`pointerdown`,`headingLevel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,t){if(e&1&&(U(0,`div`,8,0)(2,`div`,9,1)(4,`bx-page-container`,10),Fe(5,`bx-collapsible`,11),hS(6,Ye,1,0,`ng-template`,null,2,kb),U(8,`div`,12)(9,`bx-search-input`,13),zR(),xe(`ngModelChange`,function(r){return t.updateSearch(r)}),H(),U(10,`bx-multi-select`,14),zR(),xe(`ngModelChange`,function(r){return t.updateCategories(r)}),H(),U(11,`button`,15),xe(`click`,function(){return t.collapseAll()}),Te(12,`Collapse all`),H()(),U(13,`div`,16)(14,`p`,17),Te(15),H(),U(16,`p`),Te(17),H()(),U(18,`p`,18),Te(19,` Right-click a card or touch and hold to choose a copy format. or focus a card and press Shift + F10. Colors follow the current theme. `),H(),U(20,`p`,19),Te(21),H(),U(22,`div`,20,3)(24,`bx-accordion`,21),jn(25,kn,7,7,null,null,qe,!1,Tn,5,1,`bx-card`,22),H()()()(),Fe(28,`app-scroll-to-top`,23),H()),e&2){let a=ns(3),r=ns(7),p=ns(23);k$1(5),oe(`headingLevel`,2)(`contentTemplate`,r),k$1(4),oe(`ngModel`,t.searchTerm()),qR(),k$1(),oe(`clearable`,!0)(`showSelectAll`,!1)(`options`,t.categories)(`ngModel`,t.selectedCategories()),qR(),k$1(),oe(`disabled`,!t.groups().length),k$1(4),RS(``,t.filteredEntries().length,` results in `,t.groups().length,` groups · `,t.variableCount,` CSS variables`),k$1(2),NS(``,t.themingService.paletteLabel(),` · `,t.themingService.activeTheme()),k$1(4),je$1(t.copyStatus()),k$1(3),oe(`multiple`,!0),k$1(),zn(t.groups()),k$1(3),oe(`container`,a)(`boundary`,p)}},dependencies:[xM,qte,Vte,a2,Z$1,so,qe$1,cM,bM,hM,Yc,k,ht,_M,Jc,Z,CM,eh,eM,Jk,lM],styles:[`
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