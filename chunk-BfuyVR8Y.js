import{t as F}from"./chunk-CVmLukfl.js";import{t as v}from"./chunk-f3601J_B.js";import{n as ht}from"./chunk-DLVB7YEv.js";import{_ as v$1,g as _e,t as S}from"./main-QG7H2MDR.js";import{V as tn,n as Br,p as Rr,v as _e$1}from"./chunk-BaHVKixO.js";import{B as dl,C as Un,F as al,J as js,N as Zi,T as Vs,b as Pt,d as Gs,f as Hn,k as Xs,nt as qi,ot as ul,v as Ki}from"./chunk-C1xhQ_ri.js";import{$ as Ge,$a as sd,$i as ka,Ai as hM,B as E9,Bi as ik,Bt as N9,Ca as ni,Co as vo,D as C9,Ei as gr,Eo as wA,Fr as ab,Hn as Vk,J as Fr,Jr as bo,K as FT,Kr as bd,Na as pb,Oo as wK,Qr as cb,Ra as q,Ro as xo,Rr as ak,Sa as nd,Sr as _9,T as Br$1,Ta as od,To as w9,Vr as b,Wa as rd,X as G,Xn as Wo,Xr as bt,Yr as br,ct as I9,da as mK,ei as ch,fa as mM,ft as Iz,g as Aw,ha as mb,hr as Yy,jt as M9,mt as JE,na as lA,ni as ck,nn as RA,pa as mN,po as ui,qa as rr,r as $h,ri as cl,rr as Xl,t as $,ta as ke,tt as Go,wn as TT,x as Bd,y as B,yi as fb,yo as vK,zr as al$1}from"./chunk-zTlCv55u.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var H=`blocks.token-catalog.theme-only.v1`;var z=[{value:`colors`,label:`Colors`},{value:`pairs`,label:`Color pairs`},{value:`spacing`,label:`Spacing`},{value:`radii`,label:`Corner radii`},{value:`shadows`,label:`Shadows`},{value:`borders`,label:`Border geometry`},{value:`layers`,label:`Stacking layers`},{value:`effects`,label:`Glass and effects`},{value:`components`,label:`Component variables`},{value:`other`,label:`Accessibility and other variables`},{value:`breakpoints`,label:`Sass breakpoints`},{value:`utilities`,label:`Utility classes`}];var Y=[`Backgrounds and surfaces`,`Primary and brand`,`Accent`,`Text`,`Borders`,`Danger`,`Warning`,`Information`,`Success`,`Scrollbars`];var Xe=[`variable`,`name`,`hex`,`rgb`,`rgba`];var Ze={variable:`Copy CSS variable`,name:`Copy token name`,hex:`Copy HEX code`,rgb:`Copy RGB`,rgba:`Copy RGBA`};function en(){let t=wK.flatMap(a=>{return Je(a.group.startsWith(`Palette · `)?a.group.slice(10):void 0,!1,a.group).map(S=>({id:a.name,name:a.name,reference:a.reference,category:a.category,group:S,kind:a.kind,scope:`${a.scope} \xB7 ${a.themeEditable?`Theme control`:`Advanced inventory`}`,defaults:[...a.defaults,...a.fallbacks.map(f=>`Fallback: ${f}`)],companion:``,companionReference:``,search:a.sources.join(` `)}))}),n=M9.flatMap(a=>{let _=JE(a),S=ui(a);return Je(S?a.replace(/-\d+$/,``):void 0,!0,`Semantic pairs`).map(f=>({id:`pair:${a}`,name:a,reference:$h(a),companion:_,companionReference:$h(_),category:`pairs`,group:f,kind:`pair`,scope:S?`Palette companion rule`:Object.hasOwn(ch,a)?`Explicit semantic mapping`:`Default surface companion`,defaults:[],search:``}))}),e=Object.entries(gr).map(([a,_])=>({id:`breakpoint:${a}`,name:a,reference:`@include respond-up(${a}) { /* styles */ }`,category:`breakpoints`,group:`Responsive breakpoints`,kind:`breakpoint`,scope:`Sass only · not a CSS variable`,defaults:[`${_}px`],companion:``,companionReference:``,search:``})),o=N9.map(a=>({id:`class:${a}`,name:`.${a}`,reference:a,category:`utilities`,group:/^bx-(bg|text|border)-/.test(a)?`Color utility classes`:`Layout and accessibility utility classes`,kind:`utility`,scope:`CSS class`,defaults:[],companion:``,companionReference:``,search:``})),i=z.map(a=>a.value),l={spacing:Object.keys(w9),radii:Object.keys(E9),shadows:Object.keys(C9),layers:Object.keys(_9)};return[...t,...n,...e,...o].sort((a,_)=>{let S=i.indexOf(a.category)-i.indexOf(_.category),f=Y.indexOf(a.group),q=Y.indexOf(_.group),tn=(f<0?100:f)-(q<0?100:q)||a.group.localeCompare(_.group),G=l[a.category],on=G?G.indexOf(a.name.slice(a.name.lastIndexOf(`-`)+1))-G.indexOf(_.name.slice(_.name.lastIndexOf(`-`)+1)):0;return S||tn||on||a.name.localeCompare(_.name,`en`,{numeric:!0})}).map(a=>s(r({},a),{search:[a.name,a.search,a.reference,a.category,a.group,a.kind,a.scope,a.companion,a.name.includes(`bg-`)?`background backgrounds`:``,...a.defaults].join(` `).toLowerCase()}))}function Je(t,n,e){if(!t)return[e];let o=Bd.filter(i=>{let l=I9[i.id];return l.brand===t||l.accent===t});return o.length?o.map(i=>`${n?`Theme companions`:`Theme palettes`} \xB7 ${i.label}`):t===`primary`||t===`accent`?[n?`Current theme companions · Primary / Accent`:`Current theme · Primary / Accent`]:[`${n?`Palette companions`:`Other palettes`} \xB7 ${t}`]}var A=class t{document=b(q);browser=bt(b(Ge));initialThemeOnly=this.restoreThemeOnly();saveThemeOnly(n){if(this.browser)try{this.document.defaultView?.localStorage.setItem(H,String(n))}catch{}}restoreThemeOnly(){if(!this.browser)return!0;try{return this.document.defaultView?.localStorage.getItem(H)!==`false`}catch{return!0}}static ɵfac=function(e){return new(e||t)};static ɵprov=B({token:t,factory:t.ɵfac})};var rn=()=>[];var ln=(t,n)=>n.id;function cn(t,n){t&1&&sd(0,`app-readme`,26)}function sn(t,n){if(t&1&&(bo(0,`div`,27)(1,`h2`),lA(2),Go(),sd(3,`bx-divider`,30),Go()),t&2){let e=Wo().$implicit,o=Wo();Xl(2),ik(o.categoryTitle(e.entries[0].category)),Xl(),xo(`decorative`,!0)}}function pn(t,n){if(t&1&&(bo(0,`span`,31)(1,`span`),lA(2),Go()()),t&2){let e=n.$implicit;Xl(2),ik(e)}}function dn(t,n){if(t&1&&sd(0,`bx-tag`,32),t&2){let e=n.$implicit;xo(`text`,e)(`focusable`,!1)(`opaque`,!0)}}function mn(t,n){if(t&1&&ab(0,dn,1,3,`bx-tag`,32,TT),t&2){let e=Wo().$implicit,o=Wo();cb(o.groupTags(e))}}function gn(t,n){if(t&1){let e=pb();bo(0,`bx-menu-item`,46),br(`action`,function(){al$1(e);let i=Wo().$implicit,l=Wo(2).$implicit,d=Wo(3);return cl(d.copy(l,i))}),Go()}if(t&2){let e=Wo().$implicit,o=Wo(2).$implicit,i=Wo(3);xo(`label`,i.copyLabel(o,e))}}function _n(t,n){if(t&1&&od(0,gn,1,1,`bx-menu-item`,45),t&2){let e=n.$implicit,o=Wo(2).$implicit,i=Wo(3);nd(i.canCopy(o,e)?0:-1)}}function un(t,n){if(t&1&&(bo(0,`bx-menu`),ab(1,_n,1,1,null,null,TT),Go()),t&2){let e=Wo(4);Xl(),cb(e.copyFormats)}}function yn(t,n){if(t&1&&sd(0,`div`,47),t&2){let e=Wo().$implicit;ka(`background-color`,e.reference)}}function Cn(t,n){if(t&1&&(bo(0,`div`,39),sd(1,`span`)(2,`span`),Go()),t&2){let e=Wo().$implicit;Xl(),ka(`background-color`,e.reference),Xl(),ka(`background-color`,e.companionReference)}}function bn(t,n){if(t&1&&(bo(0,`div`,40),sd(1,`span`),Go()),t&2){let e=Wo().$implicit;Xl(),ka(`border-radius`,e.reference)}}function fn(t,n){if(t&1&&(bo(0,`div`,41),sd(1,`span`),Go()),t&2){let e=Wo().$implicit;Xl(),ka(`box-shadow`,e.reference)}}function hn(t,n){if(t&1&&(bo(0,`div`,42),sd(1,`span`),Go()),t&2){let e=Wo().$implicit;Xl(),ka(`inline-size`,e.reference)}}function vn(t,n){if(t&1&&(bo(0,`code`,44),lA(1),Go()),t&2){let e=Wo().$implicit,o=Wo(3);Xl(),ik(o.colors()[e.name]?.hex||o.liveValues()[e.name])}}function xn(t,n){if(t&1&&(bo(0,`code`,49),lA(1),Go()),t&2){let e=Wo(2).$implicit;Xl(),mb(`↔ `,e.companion)}}function kn(t,n){if(t&1&&(bo(0,`pre`,50),sd(1,`code`,53),Go()),t&2){let e=Wo(2).$implicit;Xl(),xo(`highlight`,e.reference)}}function Sn(t,n){if(t&1&&(bo(0,`code`,51),lA(1),Go()),t&2){let e=Wo(2).$implicit;Xl(),ik(e.reference)}}function Tn(t,n){if(t&1&&(bo(0,`code`,51),lA(1),Go()),t&2){let e=Wo(2).$implicit;Xl(),ik(e.companionReference)}}function On(t,n){if(t&1&&(bo(0,`code`,52),lA(1),Go()),t&2){let e=Wo(2).$implicit,o=Wo(3);Xl(),ik(o.liveValues()[e.name])}}function Mn(t,n){if(t&1&&(bo(0,`code`),lA(1),Go()),t&2){let e=n.$implicit;Xl(),ik(e)}}function En(t,n){if(t&1&&(bo(0,`bx-collapsible`,55),br(`contextmenu`,function(o){return o.stopPropagation()})(`pointerdown`,function(o){return o.stopPropagation()}),ab(1,Mn,2,1,`code`,null,TT),Go()),t&2){let e=Wo(3).$implicit;xo(`headingLevel`,5),Xl(),cb(e.defaults)}}function wn(t,n){if(t&1&&(bo(0,`code`,52),lA(1),Go()),t&2){let e=Wo(3).$implicit;Xl(),ik(e.defaults[0])}}function Pn(t,n){if(t&1&&od(0,En,3,1,`bx-collapsible`,54)(1,wn,2,1,`code`,52),t&2){let e=Wo(2).$implicit;nd(e.defaults.length>1?0:1)}}function Nn(t,n){if(t&1&&(bo(0,`p`,48),lA(1),Go(),od(2,xn,2,1,`code`,49),od(3,kn,2,1,`pre`,50)(4,Sn,2,1,`code`,51),od(5,Tn,2,1,`code`,51),od(6,On,2,1,`code`,52)(7,Pn,2,1)),t&2){let e=Wo().$implicit,o=Wo(3);Xl(),ik(e.scope),Xl(),nd(e.companion?2:-1),Xl(),nd(e.kind===`breakpoint`?3:4),Xl(2),nd(e.companionReference?5:-1),Xl(),nd(o.liveValues()[e.name]?6:e.defaults.length?7:-1)}}function In(t,n){if(t&1&&(bo(0,`bx-card`,37),rd(1,un,3,0,`ng-template`,null,8,RA),od(3,yn,1,2,`div`,38)(4,Cn,3,4,`div`,39)(5,bn,2,2,`div`,40)(6,fn,2,2,`div`,41)(7,hn,2,2,`div`,42),bo(8,`div`,43)(9,`h4`)(10,`code`),lA(11),Go()(),od(12,vn,2,1,`code`,44)(13,Nn,8,5),Go()()),t&2){let e,o=n.$implicit,i=FT(2);xo(`surfaceEffects`,!1)(`opaque`,!0)(`bxContextMenu`,i)(`ariaLabel`,o.name),vo(`data-token`,o.id),Xl(3),nd((e=o.kind)===`color`?3:e===`pair`?4:e===`radius`?5:e===`shadow`?6:e===`spacing`?7:-1),Xl(8),ik(o.name),Xl(),nd(o.kind===`color`?12:13)}}function Rn(t,n){if(t&1){let e=pb();bo(0,`button`,56),br(`click`,function(){al$1(e);let i=Wo(2).$implicit,l=Wo();return cl(l.renderMore(i))}),lA(1),Go()}if(t&2){let e=Wo(2).$implicit;Xl(),mb(`Show more `,e.label,` tokens`)}}function $n(t,n){if(t&1){let e=pb();bo(0,`div`,33),br(`scrollEnd`,function(){al$1(e);let i=Wo().$implicit,l=Wo();return cl(l.renderMore(i))}),bo(1,`bx-virtual-collection`,34,7),rd(3,In,14,8,`ng-template`,35),Go(),od(4,Rn,2,1,`button`,36),Go()}if(t&2){let e=FT(2),o=Wo().$implicit,i=Wo(),l=FT(3);xo(`infiniteScrollContainer`,l)(`infiniteScrollDisabled`,(i.visibleChunks().get(o.id)?.length??0)>=o.chunks.length)(`infiniteScrollRevision`,i.visibleEntries().get(o.id))(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,600),Xl(),xo(`items`,i.visibleEntries().get(o.id)??wA(12,rn))(`trackBy`,i.entryKey)(`config`,o.entries[0].kind===`color`?i.colorVirtualConfig:i.tokenVirtualConfig)(`scrollContainer`,l),vo(`aria-label`,`Tokens in `+o.label),Xl(2),xo(`bxVirtualItem`,e),Xl(),nd((i.visibleChunks().get(o.id)?.length??0)<o.chunks.length?4:-1)}}function An(t,n){if(t&1){let e=pb();od(0,sn,4,2,`div`,27),bo(1,`bx-accordion-item`,28),br(`expandedChange`,function(i){let l=al$1(e).$implicit,d=Wo();return cl(d.toggleGroup(l.id,i))}),rd(2,pn,3,1,`ng-template`,null,5,RA)(4,mn,2,0,`ng-template`,null,6,RA),od(6,$n,5,13,`div`,29),Go()}if(t&2){let e=n.$implicit,o=n.$index,i=FT(3),l=FT(5),d=Wo();nd(o===0||d.groups()[o-1].entries[0].category!==e.entries[0].category?0:-1),Xl(),xo(`title`,e.label)(`titleTemplate`,i)(`trailingTemplate`,l)(`headingLevel`,3)(`expanded`,d.isExpanded(e)),Xl(5),nd(d.isExpanded(e)?6:-1)}}function Fn(t,n){t&1&&(bo(0,`bx-card`,24)(1,`h2`),lA(2,`No tokens found`),Go(),bo(3,`p`),lA(4,`Try fewer words or clear the category filter to show all tokens.`),Go()()),t&2&&xo(`surfaceEffects`,!1)}function Ln(t,n){if(t&1&&(bo(0,`span`,57),lA(1),Go()),t&2){let e=n.$implicit;xo(`bxTooltip`,e.disabled?`Disabled in the "Theme controls only" mode.`:``),Xl(),ik(e.resolvedStr)}}var nn=class t{bxA11yService=b(Br$1);themeStudioService=b(_e);clipboard=b(v);tokenCatalogPreferencesService=b(A);nativeElement=b(ke).nativeElement;themingService=b(ni);entries=en();themeNames=new Set(Aw);themeCategories=new Set(this.entries.filter(n=>this.themeNames.has(n.name)).map(n=>n.category));liveTokens=wK.filter(n=>n.scope===`global`||n.scope===`theme`);colorCache=/* @__PURE__ */ new Map;normalizedLiveValues=G(()=>new Map(Object.entries(this.liveValues()).map(([n,e])=>[n,e.toLowerCase()])));colorSearch=G(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.liveTokens){let o=this.resolveColor(e.name);o&&n.set(e.name,`${o.hex} ${o.rgb} ${o.rgba}`)}return n});viewports=Iz(ul);entryKey=n=>n.id;colorVirtualConfig={layout:`grid`,minColumnWidth:`10rem`,estimatedRowHeight:288,overscan:800};tokenVirtualConfig={layout:`grid`,minColumnWidth:`15rem`,estimatedRowHeight:576,overscan:800};copyFormats=Xe;variableCount=wK.length;searchTerm=$(``);copyStatus=$(``);themeOnly=$(this.tokenCatalogPreferencesService.initialThemeOnly);selectedCategories=$([]);liveValues=$({});expansionOverrides=$(/* @__PURE__ */ new Map);categories=G(()=>z.map(n=>s(r({},n),{disabled:this.themeOnly()&&!this.themeCategories.has(n.value)})));filteredEntries=G(()=>{let n=this.searchTerm().toLowerCase().trim().split(/\s+/).filter(Boolean),e=this.selectedCategories(),o=this.themeOnly(),i=n.length?this.normalizedLiveValues():void 0,l=n.some(d=>/#|rgba?\(/.test(d))?this.colorSearch():void 0;return this.entries.filter(d=>{if(o&&!this.themeNames.has(d.name)||e.length&&!e.includes(d.category))return!1;if(!n.length||n.every(f=>d.search.includes(f)))return!0;let a=d.reference.startsWith(`var(`)?d.reference.slice(4,-1):d.name,_=d.companionReference.slice(4,-1),S=`${d.search} ${i?.get(a)??``} ${i?.get(_)??``} ${l?.get(a)??``} ${l?.get(_)??``}`;return n.every(f=>S.includes(f))})});groups=G(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.filteredEntries()){let o=`${e.category} / ${e.group}`,i=n.get(o)??[];i.push(e),n.set(o,i)}return[...n].map(([e,o])=>({id:e,label:this.resolveGroupLabel(o[0].group),total:o.length,entries:o,chunks:Array.from({length:Math.ceil(o.length/24)},(i,l)=>({id:`${e}:${l}`,entries:o.slice(l*24,(l+1)*24)}))}))});renderedChunks=bd({source:this.groups,computation:()=>/* @__PURE__ */ new Map});visibleChunks=G(()=>new Map(this.groups().map(n=>[n.id,n.chunks.slice(0,this.renderedChunks().get(n.id)??2)])));visibleEntries=G(()=>new Map([...this.visibleChunks()].map(([n,e])=>[n,e.flatMap(o=>o.entries)])));colors=G(()=>{let n={};for(let e of this.viewports())for(let o of e.renderedItems())for(let i of[o.reference,o.companionReference]){if(!i.startsWith(`var(`))continue;let l=i.slice(4,-1),d=this.resolveColor(l);d&&(n[l]=d)}return n});colorContext=null;constructor(){this.themeOnly()&&this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!0]))),Vk(()=>{if(this.themeStudioService.revision(),this.themingService.activeTheme(),this.themingService.palette(),this.themingService.highContrast(),this.themingService.appearance(),this.bxA11yService.isReducedMotion(),!this.colorContext){let o=this.nativeElement.ownerDocument.createElement(`canvas`);o.width=1,o.height=1,this.colorContext=o.getContext(`2d`,{willReadFrequently:!0})}let n=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement),e={};for(let o of this.liveTokens){let i=n?.getPropertyValue(o.name).trim()??``;e[o.name]=i===`currentColor`?n?.color??``:i}this.colorCache.clear(),this.liveValues.set(e)})}copy(n,e){let i=(n.kind===`pair`?[n.reference,n.companionReference]:[n.reference]).map(d=>{let a=d.startsWith(`var(`)?d.slice(4,-1):d;return e===`variable`?d:e===`name`?a:this.colors()[a]?.[e]});if(i.some(d=>d===void 0)){this.copyStatus.set(`Cannot resolve ${e} for ${n.name}. Choose Copy CSS variable or Copy token name.`);return}let l=i.join(`
`);this.copyStatus.set(this.clipboard.copy(l)?`Copied ${n.name} as ${e}.`:`Copy failed. Select and copy this value: ${l}`)}copyLabel(n,e){return n.kind===`utility`?`Copy class`:n.kind===`breakpoint`?`Copy Sass`:Ze[e]}categoryTitle(n){let e=this.categories().find(o=>o.value===n);return typeof e?.label==`string`?e.label:n}canCopy(n,e){return n.kind===`utility`||n.kind===`breakpoint`?e===`variable`:e===`variable`||e===`name`||!!(this.colors()[n.reference.slice(4,-1)]&&(n.kind!==`pair`||this.colors()[n.companionReference.slice(4,-1)]))}groupTags(n){let e=n.entries[0].group.split(` · `)[0],o=[],i=e.includes(`palette`)||e.includes(`theme`)||e===`Theme companions`,l=e.startsWith(`Current theme`)||!this.themingService.highContrast()&&i&&n.label===this.themingService.paletteLabel();return l&&o.push(`Current theme`),n.entries[0].kind===`pair`?o.push(`Companions`):i&&!l&&o.push(`Palette`),o}isExpanded(n){return this.expansionOverrides().get(n.id)??this.groups()[0]?.id===n.id}collapseAll(){this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!1])))}updateSearch(n){this.searchTerm.set(n),this.expansionOverrides.set(/* @__PURE__ */ new Map)}updateCategories(n){this.selectedCategories.set((n??[]).filter(e=>!this.themeOnly()||this.themeCategories.has(e)))}updateThemeOnly(n){this.themeOnly.set(n),this.tokenCatalogPreferencesService.saveThemeOnly(n),this.updateCategories(this.selectedCategories())}renderMore(n){this.renderedChunks.update(e=>new Map(e).set(n.id,Math.min(n.chunks.length,(e.get(n.id)??2)+2)))}toggleGroup(n,e){this.expansionOverrides.update(o=>new Map(o).set(n,e))}resolveGroupLabel(n){let e=n.indexOf(` · `);return e<0?n===`Semantic pairs`?`Semantic`:n:n.slice(e+3).split(` `).map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(` `)}resolveColor(n){let e=this.liveValues()[n];if(!(!e||!this.colorContext))return this.colorCache.has(e)||this.colorCache.set(e,v$1(e,this.colorContext)??null),this.colorCache.get(e)??void 0}static ɵfac=function(e){return new(e||t)};static ɵcmp=Fr({type:t,selectors:[[`app-token-catalog`]],viewQuery:function(e,o){e&1&&Yy(o.viewports,ul,5),e&2&&fb()},features:[rr([A])],decls:32,vars:20,consts:[[`tokenRegion`,``],[`tokenScroll`,``],[`documentation`,``],[`tokenResults`,``],[`categoryOption`,``],[`groupTitle`,``],[`groupStatus`,``],[`tokenRows`,``],[`copyActions`,``],[`tabindex`,`-1`,1,`token-region`],[`tabindex`,`-1`,1,`token-scroll`],[`pageDescription`,`Browse the semantic tokens, palette colors, spacing, shapes, and motion values that power Blocks.`],[`title`,`Using and extending Blocks tokens`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`catalog-filters`],[`ariaLabel`,`Search tokens`,`placeholder`,`Search names, palettes, roles, or values…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Categories`,`placeholder`,`All categories`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all categories`,3,`ngModelChange`,`clearable`,`showSelectAll`,`options`,`optionTemplate`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`label`,`Theme controls only`,`hint`,`Show shared colors, borders, corners, shadows, and spacing for creating themes. Turn off to browse component hooks, effects, and other advanced tokens.`,`subscriptSizing`,`dynamic`,1,`theme-filter`,3,`checkedChange`,`checked`],[1,`catalog-summary`],[`role`,`status`],[`id`,`token-copy-help`,1,`catalog-note`],[`role`,`status`,1,`copy-status`],[`tabindex`,`-1`,1,`token-results`],[1,`catalog-groups`,3,`multiple`],[1,`empty-results`,3,`surfaceEffects`],[3,`container`,`boundary`],[`path`,`projects/playground/src/app/components/screens/token-catalog/README.md`],[1,`catalog-category-heading`],[1,`token-group`,3,`expandedChange`,`title`,`titleTemplate`,`trailingTemplate`,`headingLevel`,`expanded`],[`bxInfiniteScroll`,``,3,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`decorative`],[1,`group-heading`],[`size`,`small`,`color`,`neutral`,3,`text`,`focusable`,`opaque`],[`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`role`,`group`,`aria-haspopup`,`menu`,`tabindex`,`0`,`ariaDescribedBy`,`token-copy-help`,1,`token-card`,3,`surfaceEffects`,`opaque`,`bxContextMenu`,`ariaLabel`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`,3,`background-color`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`pair-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`radius-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`shadow-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`space-preview`],[1,`token-content`],[1,`token-color-value`],[3,`label`],[3,`action`,`label`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`],[1,`token-scope`],[1,`companion`],[`tabindex`,`0`,`aria-label`,`Responsive Sass example`,1,`playground-code-block`,`token-code`],[1,`token-reference`],[1,`token-value`],[`language`,`scss`,3,`highlight`],[`title`,`Source defaults`,1,`token-metadata`,3,`headingLevel`],[`title`,`Source defaults`,1,`token-metadata`,3,`contextmenu`,`pointerdown`,`headingLevel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`category-option-label`,3,`bxTooltip`]],template:function(e,o){if(e&1&&(bo(0,`div`,9,0)(2,`div`,10,1)(4,`bx-page-container`,11),sd(5,`bx-collapsible`,12),rd(6,cn,1,0,`ng-template`,null,2,RA),bo(8,`div`,13)(9,`bx-search-input`,14),mM(),br(`ngModelChange`,function(l){return o.updateSearch(l)}),Go(),bo(10,`bx-multi-select`,15),mM(),br(`ngModelChange`,function(l){return o.updateCategories(l)}),Go(),bo(11,`button`,16),br(`click`,function(){return o.collapseAll()}),lA(12,`Collapse all`),Go(),bo(13,`bx-slide-toggle`,17),br(`checkedChange`,function(l){return o.updateThemeOnly(l)}),Go()(),bo(14,`div`,18)(15,`p`,19),lA(16),Go(),bo(17,`p`),lA(18),Go()(),bo(19,`p`,20),lA(20,` Right-click a card or touch and hold to choose a copy format. or focus a card and press Shift + F10. Colors follow the current theme. `),Go(),bo(21,`p`,21),lA(22),Go(),bo(23,`div`,22,3)(25,`bx-accordion`,23),ab(26,An,7,7,null,null,ln,!1,Fn,5,1,`bx-card`,24),Go()()()(),sd(29,`app-scroll-to-top`,25),Go(),rd(30,Ln,2,2,`ng-template`,null,4,RA)),e&2){let i=FT(3),l=FT(7),d=FT(24),a=FT(31);Xl(5),xo(`headingLevel`,2)(`contentTemplate`,l),Xl(4),xo(`ngModel`,o.searchTerm()),hM(),Xl(),xo(`clearable`,!0)(`showSelectAll`,!1)(`options`,o.categories())(`optionTemplate`,a)(`ngModel`,o.selectedCategories()),hM(),Xl(),xo(`disabled`,!o.groups().length),Xl(2),xo(`checked`,o.themeOnly()),Xl(3),ck(``,o.filteredEntries().length,` results in `,o.groups().length,` groups · `,o.variableCount,` CSS variables`),Xl(2),ak(``,o.themingService.paletteLabel(),` · `,o.themingService.activeTheme()),Xl(4),ik(o.copyStatus()),Xl(3),xo(`multiple`,!0),Xl(),cb(o.groups()),Xl(3),xo(`container`,i)(`boundary`,d)}},dependencies:[al,vK,mK,mN,_e$1,Br,tn,Rr,Vs,Xs,Gs,Hn,S,ht,ul,Un,F,dl,qi,Zi,Ki,js,Pt],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  min-block-size: 0;
  block-size: 100%;
}
.catalog-filters[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--%NS%bx-space-3, 0.75rem);
  align-items: end;
}
.catalog-filters[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  align-self: stretch;
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
}
.theme-filter[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
bx-search-input[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.catalog-summary[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-4, 1rem);
  margin-block-start: var(--%NS%bx-space-4, 1rem);
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
  margin-block: var(--%NS%bx-space-2, 0.5rem);
  overflow-wrap: anywhere;
}
.catalog-groups[_ngcontent-%COMP%] {
  --%NS%bx-accordion-gap: var(--%NS%bx-space-3, 0.75rem);
  --%NS%bx-collapsible-content-padding: var(--%NS%bx-space-3, 0.75rem);
}
.group-heading[_ngcontent-%COMP%] {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.catalog-category-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
  margin-block: var(--%NS%bx-space-6, 1.5rem) var(--%NS%bx-space-2, 0.5rem);
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
  --%NS%bx-card-padding: var(--%NS%bx-space-4, 1rem);
  --%NS%bx-card-radius: var(--%NS%bx-rounded-md, 0.5rem);
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
  gap: var(--%NS%bx-space-3, 0.75rem);
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
  --%NS%bx-collapsible-padding: var(--%NS%bx-space-2, 0.5rem);
  --%NS%bx-collapsible-content-padding: var(--%NS%bx-space-2, 0.5rem);
  font-size: 0.8125rem;
  -webkit-user-select: text;
  user-select: text;
  -webkit-touch-callout: default;
}
.token-metadata[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
}
.token-code[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.token-swatch[_ngcontent-%COMP%], 
.pair-preview[_ngcontent-%COMP%] {
  block-size: var(--%NS%bx-space-10, 2.5rem);
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
  padding: var(--%NS%bx-space-6, 1.5rem);
  border-block-end: 1px solid var(--%NS%bx-border-default);
  background: var(--%NS%bx-bg-surface-alt);
}
.shape-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  inline-size: min(100%, 10rem);
  block-size: 8rem;
  border: 1px solid var(--%NS%bx-border-brand);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-element);
}
.shadow-preview[_ngcontent-%COMP%] {
  min-block-size: 12rem;
  background: var(--%NS%bx-color-neutral-200);
}
.shadow-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  block-size: var(--%NS%bx-space-12, 3rem);
  border-color: var(--%NS%bx-color-neutral-300);
  background: var(--%NS%bx-color-neutral-50);
}
.space-preview[_ngcontent-%COMP%] {
  min-block-size: var(--%NS%bx-space-12, 3rem);
  justify-content: start;
  padding-inline: var(--%NS%bx-space-3, 0.75rem);
}
.space-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  block-size: var(--%NS%bx-space-4, 1rem);
  max-inline-size: 100%;
  border-inline-start: 1px solid var(--%NS%bx-border-brand);
  background: var(--%NS%bx-primary);
}
.copy-button[_ngcontent-%COMP%] {
  align-self: start;
  min-block-size: 2rem;
  margin-block-start: auto;
  padding: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem);
  font-size: 0.75rem;
}
.empty-results[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-4, 1rem);
  text-align: center;
}
.catalog-documentation[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-6, 1.5rem);
}
.token-chunk[_ngcontent-%COMP%] {
  display: block;
  min-inline-size: 0;
  overflow-anchor: auto;
}
.token-chunk[_ngcontent-%COMP%]    + .token-chunk[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-4, 1rem);
}
.token-chunk[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: var(--%NS%bx-space-1, 0.25rem);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
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
  .theme-filter[_ngcontent-%COMP%] {
    grid-column: 1/-1;
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
}
.category-option-label[_ngcontent-%COMP%] {
  flex: 1;
  text-align: start;
}`]})};export{nn as TokenCatalog};