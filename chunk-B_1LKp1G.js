import{t as F}from"./chunk-BZLgzddG.js";import{J as v,N as Oe,P as S,_ as ar,k as sr,t as S$1}from"./main-EL5HAC26.js";import{n as ht}from"./chunk-BH16pVAk.js";import{n as Z,s as qe}from"./chunk-41uhicSi.js";import{$r as hs,B as Hne,Bi as p,Ci as lt,D as Et,Da as vi,Di as nR,Fi as oR,Fr as ep,Gi as pm,Hn as Zne,Hr as g,I as Gne,Ii as od,Jt as SM,K as In$1,Kt as S$2,Ma as w_,Mt as Ot,N as G,Ni as oO,Nr as ee,Nt as P,Pa as wn$1,R as HD,Sa as um,Ti as me,Ut as RM,V as IM,Va as yn$1,Vi as pJ,Wa as zM,Xi as qa,Xn as aJ,Y as It,Yi as qM,_ as CM,_a as uJ,_t as Me,ba as ua,bi as lf,c as Ae,ca as sJ,ci as jM,cr as cJ,g as C,gn as Vt,ha as tn,ii as iJ,k as Fn$1,ki as ne,kt as Oe$1,ln as V,lt as La,mr as cp,ni as hx,nr as at,nt as KC,o as A$1,or as bt,pa as te,pr as cm,qn as _r,qt as SF,rr as bJ,t as $,ta as qr,tt as K,ur as ca,v as Ce,vi as ld,xa as ue,y as D,yi as le,yn as WC,yt as Mn$1}from"./chunk-BWickaUR.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var H=`blocks.token-catalog.theme-only.v1`;var z=[{value:`colors`,label:`Colors`},{value:`pairs`,label:`Color pairs`},{value:`spacing`,label:`Spacing`},{value:`radii`,label:`Corner radii`},{value:`shadows`,label:`Shadows`},{value:`borders`,label:`Border geometry`},{value:`layers`,label:`Stacking layers`},{value:`effects`,label:`Glass and effects`},{value:`components`,label:`Component variables`},{value:`other`,label:`Accessibility and other variables`},{value:`breakpoints`,label:`Sass breakpoints`},{value:`utilities`,label:`Utility classes`}];var Y=[`Backgrounds and surfaces`,`Primary and brand`,`Accent`,`Text`,`Borders`,`Danger`,`Warning`,`Information`,`Success`,`Scrollbars`];var Xe=[`variable`,`name`,`hex`,`rgb`,`rgba`];var Ze={variable:`Copy CSS variable`,name:`Copy token name`,hex:`Copy HEX code`,rgb:`Copy RGB`,rgba:`Copy RGBA`};function en(){let t=Zne.flatMap(a=>{return Je(a.group.startsWith(`Palette · `)?a.group.slice(10):void 0,!1,a.group).map(S=>({id:a.name,name:a.name,reference:a.reference,category:a.category,group:S,kind:a.kind,scope:`${a.scope} \xB7 ${a.themeEditable?`Theme control`:`Advanced inventory`}`,defaults:[...a.defaults,...a.fallbacks.map(f=>`Fallback: ${f}`)],companion:``,companionReference:``,search:a.sources.join(` `)}))}),n=pJ.flatMap(a=>{let _=HD(a),S=qa(a);return Je(S?a.replace(/-\d+$/,``):void 0,!0,`Semantic pairs`).map(f=>({id:`pair:${a}`,name:a,reference:hs(a),companion:_,companionReference:hs(_),category:`pairs`,group:f,kind:`pair`,scope:S?`Palette companion rule`:Object.hasOwn(hx,a)?`Explicit semantic mapping`:`Default surface companion`,defaults:[],search:``}))}),e=Object.entries(_r).map(([a,_])=>({id:`breakpoint:${a}`,name:a,reference:`@include respond-up(${a}) { /* styles */ }`,category:`breakpoints`,group:`Responsive breakpoints`,kind:`breakpoint`,scope:`Sass only · not a CSS variable`,defaults:[`${_}px`],companion:``,companionReference:``,search:``})),o=bJ.map(a=>({id:`class:${a}`,name:`.${a}`,reference:a,category:`utilities`,group:/^bx-(bg|text|border)-/.test(a)?`Color utility classes`:`Layout and accessibility utility classes`,kind:`utility`,scope:`CSS class`,defaults:[],companion:``,companionReference:``,search:``})),i=z.map(a=>a.value),l={spacing:Object.keys(iJ),radii:Object.keys(sJ),shadows:Object.keys(aJ),layers:Object.keys(cJ)};return[...t,...n,...e,...o].sort((a,_)=>{let S=i.indexOf(a.category)-i.indexOf(_.category),f=Y.indexOf(a.group),q=Y.indexOf(_.group),tn=(f<0?100:f)-(q<0?100:q)||a.group.localeCompare(_.group),G=l[a.category],on=G?G.indexOf(a.name.slice(a.name.lastIndexOf(`-`)+1))-G.indexOf(_.name.slice(_.name.lastIndexOf(`-`)+1)):0;return S||tn||on||a.name.localeCompare(_.name,`en`,{numeric:!0})}).map(a=>s(r({},a),{search:[a.name,a.search,a.reference,a.category,a.group,a.kind,a.scope,a.companion,a.name.includes(`bg-`)?`background backgrounds`:``,...a.defaults].join(` `).toLowerCase()}))}function Je(t,n,e){if(!t)return[e];let o=lf.filter(i=>{let l=uJ[i.id];return l.brand===t||l.accent===t});return o.length?o.map(i=>`${n?`Theme companions`:`Theme palettes`} \xB7 ${i.label}`):t===`primary`||t===`accent`?[n?`Current theme companions · Primary / Accent`:`Current theme · Primary / Accent`]:[`${n?`Palette companions`:`Other palettes`} \xB7 ${t}`]}var A=class t{document=p(le);browser=Ot(p(bt));initialThemeOnly=this.restoreThemeOnly();saveThemeOnly(n){if(this.browser)try{this.document.defaultView?.localStorage.setItem(H,String(n))}catch{}}restoreThemeOnly(){if(!this.browser)return!0;try{return this.document.defaultView?.localStorage.getItem(H)!==`false`}catch{return!0}}static ɵfac=function(e){return new(e||t)};static ɵprov=ee({token:t,factory:t.ɵfac})};var rn=()=>[];var ln=(t,n)=>n.id;function cn(t,n){t&1&&Ae(0,`app-readme`,26)}function sn(t,n){if(t&1&&(A$1(0,`div`,27)(1,`h2`),me(2),P(),Ae(3,`bx-divider`,30),P()),t&2){let e=S$2().$implicit,o=S$2();C(2),Me(o.categoryTitle(e.entries[0].category)),C(),V(`decorative`,!0)}}function pn(t,n){if(t&1&&(A$1(0,`span`,31)(1,`span`),me(2),P()()),t&2){let e=n.$implicit;C(2),Me(e)}}function dn(t,n){if(t&1&&Ae(0,`bx-tag`,32),t&2){let e=n.$implicit;V(`text`,e)(`focusable`,!1)(`opaque`,!0)}}function mn(t,n){if(t&1&&Mn$1(0,dn,1,3,`bx-tag`,32,ca),t&2){let e=S$2().$implicit,o=S$2();In$1(o.groupTags(e))}}function gn(t,n){if(t&1){let e=tn();A$1(0,`bx-menu-item`,46),ue(`action`,function(){at(e);let i=S$2().$implicit,l=S$2(2).$implicit,d=S$2(3);return lt(d.copy(l,i))}),P()}if(t&2){let e=S$2().$implicit,o=S$2(2).$implicit,i=S$2(3);V(`label`,i.copyLabel(o,e))}}function _n(t,n){if(t&1&&te(0,gn,1,1,`bx-menu-item`,45),t&2){let e=n.$implicit,o=S$2(2).$implicit,i=S$2(3);ne(i.canCopy(o,e)?0:-1)}}function un(t,n){if(t&1&&(A$1(0,`bx-menu`),Mn$1(1,_n,1,1,null,null,ca),P()),t&2){let e=S$2(4);C(),In$1(e.copyFormats)}}function yn(t,n){if(t&1&&Ae(0,`div`,47),t&2){let e=S$2().$implicit;Ce(`background-color`,e.reference)}}function Cn(t,n){if(t&1&&(A$1(0,`div`,39),Ae(1,`span`)(2,`span`),P()),t&2){let e=S$2().$implicit;C(),Ce(`background-color`,e.reference),C(),Ce(`background-color`,e.companionReference)}}function bn(t,n){if(t&1&&(A$1(0,`div`,40),Ae(1,`span`),P()),t&2){let e=S$2().$implicit;C(),Ce(`border-radius`,e.reference)}}function fn(t,n){if(t&1&&(A$1(0,`div`,41),Ae(1,`span`),P()),t&2){let e=S$2().$implicit;C(),Ce(`box-shadow`,e.reference)}}function hn(t,n){if(t&1&&(A$1(0,`div`,42),Ae(1,`span`),P()),t&2){let e=S$2().$implicit;C(),Ce(`inline-size`,e.reference)}}function vn(t,n){if(t&1&&(A$1(0,`code`,44),me(1),P()),t&2){let e=S$2().$implicit,o=S$2(3);C(),Me(o.colors()[e.name]?.hex||o.liveValues()[e.name])}}function xn(t,n){if(t&1&&(A$1(0,`code`,49),me(1),P()),t&2){let e=S$2(2).$implicit;C(),wn$1(`↔ `,e.companion)}}function kn(t,n){if(t&1&&(A$1(0,`pre`,50),Ae(1,`code`,53),P()),t&2){let e=S$2(2).$implicit;C(),V(`highlight`,e.reference)}}function Sn(t,n){if(t&1&&(A$1(0,`code`,51),me(1),P()),t&2){let e=S$2(2).$implicit;C(),Me(e.reference)}}function Tn(t,n){if(t&1&&(A$1(0,`code`,51),me(1),P()),t&2){let e=S$2(2).$implicit;C(),Me(e.companionReference)}}function On(t,n){if(t&1&&(A$1(0,`code`,52),me(1),P()),t&2){let e=S$2(2).$implicit,o=S$2(3);C(),Me(o.liveValues()[e.name])}}function Mn(t,n){if(t&1&&(A$1(0,`code`),me(1),P()),t&2){let e=n.$implicit;C(),Me(e)}}function En(t,n){if(t&1&&(A$1(0,`bx-collapsible`,55),ue(`contextmenu`,function(o){return o.stopPropagation()})(`pointerdown`,function(o){return o.stopPropagation()}),Mn$1(1,Mn,2,1,`code`,null,ca),P()),t&2){let e=S$2(3).$implicit;V(`headingLevel`,5),C(),In$1(e.defaults)}}function wn(t,n){if(t&1&&(A$1(0,`code`,52),me(1),P()),t&2){let e=S$2(3).$implicit;C(),Me(e.defaults[0])}}function Pn(t,n){if(t&1&&te(0,En,3,1,`bx-collapsible`,54)(1,wn,2,1,`code`,52),t&2){let e=S$2(2).$implicit;ne(e.defaults.length>1?0:1)}}function Nn(t,n){if(t&1&&(A$1(0,`p`,48),me(1),P(),te(2,xn,2,1,`code`,49),te(3,kn,2,1,`pre`,50)(4,Sn,2,1,`code`,51),te(5,Tn,2,1,`code`,51),te(6,On,2,1,`code`,52)(7,Pn,2,1)),t&2){let e=S$2().$implicit,o=S$2(3);C(),Me(e.scope),C(),ne(e.companion?2:-1),C(),ne(e.kind===`breakpoint`?3:4),C(2),ne(e.companionReference?5:-1),C(),ne(o.liveValues()[e.name]?6:e.defaults.length?7:-1)}}function In(t,n){if(t&1&&(A$1(0,`bx-card`,37),ep(1,un,3,0,`ng-template`,null,8,qr),te(3,yn,1,2,`div`,38)(4,Cn,3,4,`div`,39)(5,bn,2,2,`div`,40)(6,fn,2,2,`div`,41)(7,hn,2,2,`div`,42),A$1(8,`div`,43)(9,`h4`)(10,`code`),me(11),P()(),te(12,vn,2,1,`code`,44)(13,Nn,8,5),P()()),t&2){let e,o=n.$implicit,i=It(2);V(`surfaceEffects`,!1)(`opaque`,!0)(`bxContextMenu`,i)(`ariaLabel`,o.name),K(`data-token`,o.id),C(3),ne((e=o.kind)===`color`?3:e===`pair`?4:e===`radius`?5:e===`shadow`?6:e===`spacing`?7:-1),C(8),Me(o.name),C(),ne(o.kind===`color`?12:13)}}function Rn(t,n){if(t&1){let e=tn();A$1(0,`button`,56),ue(`click`,function(){at(e);let i=S$2(2).$implicit,l=S$2();return lt(l.renderMore(i))}),me(1),P()}if(t&2){let e=S$2(2).$implicit;C(),wn$1(`Show more `,e.label,` tokens`)}}function $n(t,n){if(t&1){let e=tn();A$1(0,`div`,33),ue(`scrollEnd`,function(){at(e);let i=S$2().$implicit,l=S$2();return lt(l.renderMore(i))}),A$1(1,`bx-virtual-collection`,34,7),ep(3,In,14,8,`ng-template`,35),P(),te(4,Rn,2,1,`button`,36),P()}if(t&2){let e=It(2),o=S$2().$implicit,i=S$2(),l=It(3);V(`infiniteScrollContainer`,l)(`infiniteScrollDisabled`,(i.visibleChunks().get(o.id)?.length??0)>=o.chunks.length)(`infiniteScrollRevision`,i.visibleEntries().get(o.id))(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,600),C(),V(`items`,i.visibleEntries().get(o.id)??oO(12,rn))(`trackBy`,i.entryKey)(`config`,o.entries[0].kind===`color`?i.colorVirtualConfig:i.tokenVirtualConfig)(`scrollContainer`,l),K(`aria-label`,`Tokens in `+o.label),C(2),V(`bxVirtualItem`,e),C(),ne((i.visibleChunks().get(o.id)?.length??0)<o.chunks.length?4:-1)}}function An(t,n){if(t&1){let e=tn();te(0,sn,4,2,`div`,27),A$1(1,`bx-accordion-item`,28),ue(`expandedChange`,function(i){let l=at(e).$implicit,d=S$2();return lt(d.toggleGroup(l.id,i))}),ep(2,pn,3,1,`ng-template`,null,5,qr)(4,mn,2,0,`ng-template`,null,6,qr),te(6,$n,5,13,`div`,29),P()}if(t&2){let e=n.$implicit,o=n.$index,i=It(3),l=It(5),d=S$2();ne(o===0||d.groups()[o-1].entries[0].category!==e.entries[0].category?0:-1),C(),V(`title`,e.label)(`titleTemplate`,i)(`trailingTemplate`,l)(`headingLevel`,3)(`expanded`,d.isExpanded(e)),C(5),ne(d.isExpanded(e)?6:-1)}}function Fn(t,n){t&1&&(A$1(0,`bx-card`,24)(1,`h2`),me(2,`No tokens found`),P(),A$1(3,`p`),me(4,`Try fewer words or clear the category filter to show all tokens.`),P()()),t&2&&V(`surfaceEffects`,!1)}function Ln(t,n){if(t&1&&(A$1(0,`span`,57),me(1),P()),t&2){let e=n.$implicit;V(`bxTooltip`,e.disabled?`Disabled in the "Theme controls only" mode.`:``),C(),Me(e.resolvedStr)}}var nn=class t{bxA11yService=p(Oe$1);themeStudioService=p(Oe);clipboard=p(v);tokenCatalogPreferencesService=p(A);nativeElement=p($).nativeElement;themingService=p(La);entries=en();themeNames=new Set(w_);themeCategories=new Set(this.entries.filter(n=>this.themeNames.has(n.name)).map(n=>n.category));liveTokens=Zne.filter(n=>n.scope===`global`||n.scope===`theme`);colorCache=/* @__PURE__ */ new Map;normalizedLiveValues=g(()=>new Map(Object.entries(this.liveValues()).map(([n,e])=>[n,e.toLowerCase()])));colorSearch=g(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.liveTokens){let o=this.resolveColor(e.name);o&&n.set(e.name,`${o.hex} ${o.rgb} ${o.rgba}`)}return n});viewports=cp(qM);entryKey=n=>n.id;colorVirtualConfig={layout:`grid`,minColumnWidth:`10rem`,estimatedRowHeight:288,overscan:800};tokenVirtualConfig={layout:`grid`,minColumnWidth:`15rem`,estimatedRowHeight:576,overscan:800};copyFormats=Xe;variableCount=Zne.length;searchTerm=D(``);copyStatus=D(``);themeOnly=D(this.tokenCatalogPreferencesService.initialThemeOnly);selectedCategories=D([]);liveValues=D({});expansionOverrides=D(/* @__PURE__ */ new Map);categories=g(()=>z.map(n=>s(r({},n),{disabled:this.themeOnly()&&!this.themeCategories.has(n.value)})));filteredEntries=g(()=>{let n=this.searchTerm().toLowerCase().trim().split(/\s+/).filter(Boolean),e=this.selectedCategories(),o=this.themeOnly(),i=n.length?this.normalizedLiveValues():void 0,l=n.some(d=>/#|rgba?\(/.test(d))?this.colorSearch():void 0;return this.entries.filter(d=>{if(o&&!this.themeNames.has(d.name)||e.length&&!e.includes(d.category))return!1;if(!n.length||n.every(f=>d.search.includes(f)))return!0;let a=d.reference.startsWith(`var(`)?d.reference.slice(4,-1):d.name,_=d.companionReference.slice(4,-1),S=`${d.search} ${i?.get(a)??``} ${i?.get(_)??``} ${l?.get(a)??``} ${l?.get(_)??``}`;return n.every(f=>S.includes(f))})});groups=g(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.filteredEntries()){let o=`${e.category} / ${e.group}`,i=n.get(o)??[];i.push(e),n.set(o,i)}return[...n].map(([e,o])=>({id:e,label:this.resolveGroupLabel(o[0].group),total:o.length,entries:o,chunks:Array.from({length:Math.ceil(o.length/24)},(i,l)=>({id:`${e}:${l}`,entries:o.slice(l*24,(l+1)*24)}))}))});renderedChunks=ua({source:this.groups,computation:()=>/* @__PURE__ */ new Map});visibleChunks=g(()=>new Map(this.groups().map(n=>[n.id,n.chunks.slice(0,this.renderedChunks().get(n.id)??2)])));visibleEntries=g(()=>new Map([...this.visibleChunks()].map(([n,e])=>[n,e.flatMap(o=>o.entries)])));colors=g(()=>{let n={};for(let e of this.viewports())for(let o of e.renderedItems())for(let i of[o.reference,o.companionReference]){if(!i.startsWith(`var(`))continue;let l=i.slice(4,-1),d=this.resolveColor(l);d&&(n[l]=d)}return n});colorContext=null;constructor(){this.themeOnly()&&this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!0]))),Fn$1(()=>{if(this.themeStudioService.revision(),this.themingService.activeTheme(),this.themingService.palette(),this.themingService.highContrast(),this.themingService.appearance(),this.bxA11yService.isReducedMotion(),!this.colorContext){let o=this.nativeElement.ownerDocument.createElement(`canvas`);o.width=1,o.height=1,this.colorContext=o.getContext(`2d`,{willReadFrequently:!0})}let n=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement),e={};for(let o of this.liveTokens){let i=n?.getPropertyValue(o.name).trim()??``;e[o.name]=i===`currentColor`?n?.color??``:i}this.colorCache.clear(),this.liveValues.set(e)})}copy(n,e){let i=(n.kind===`pair`?[n.reference,n.companionReference]:[n.reference]).map(d=>{let a=d.startsWith(`var(`)?d.slice(4,-1):d;return e===`variable`?d:e===`name`?a:this.colors()[a]?.[e]});if(i.some(d=>d===void 0)){this.copyStatus.set(`Cannot resolve ${e} for ${n.name}. Choose Copy CSS variable or Copy token name.`);return}let l=i.join(`
`);this.copyStatus.set(this.clipboard.copy(l)?`Copied ${n.name} as ${e}.`:`Copy failed. Select and copy this value: ${l}`)}copyLabel(n,e){return n.kind===`utility`?`Copy class`:n.kind===`breakpoint`?`Copy Sass`:Ze[e]}categoryTitle(n){let e=this.categories().find(o=>o.value===n);return typeof e?.label==`string`?e.label:n}canCopy(n,e){return n.kind===`utility`||n.kind===`breakpoint`?e===`variable`:e===`variable`||e===`name`||!!(this.colors()[n.reference.slice(4,-1)]&&(n.kind!==`pair`||this.colors()[n.companionReference.slice(4,-1)]))}groupTags(n){let e=n.entries[0].group.split(` · `)[0],o=[],i=e.includes(`palette`)||e.includes(`theme`)||e===`Theme companions`,l=e.startsWith(`Current theme`)||!this.themingService.highContrast()&&i&&n.label===this.themingService.paletteLabel();return l&&o.push(`Current theme`),n.entries[0].kind===`pair`?o.push(`Companions`):i&&!l&&o.push(`Palette`),o}isExpanded(n){return this.expansionOverrides().get(n.id)??this.groups()[0]?.id===n.id}collapseAll(){this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!1])))}updateSearch(n){this.searchTerm.set(n),this.expansionOverrides.set(/* @__PURE__ */ new Map)}updateCategories(n){this.selectedCategories.set((n??[]).filter(e=>!this.themeOnly()||this.themeCategories.has(e)))}updateThemeOnly(n){this.themeOnly.set(n),this.tokenCatalogPreferencesService.saveThemeOnly(n),this.updateCategories(this.selectedCategories())}renderMore(n){this.renderedChunks.update(e=>new Map(e).set(n.id,Math.min(n.chunks.length,(e.get(n.id)??2)+2)))}toggleGroup(n,e){this.expansionOverrides.update(o=>new Map(o).set(n,e))}resolveGroupLabel(n){let e=n.indexOf(` · `);return e<0?n===`Semantic pairs`?`Semantic`:n:n.slice(e+3).split(` `).map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(` `)}resolveColor(n){let e=this.liveValues()[n];if(!(!e||!this.colorContext))return this.colorCache.has(e)||this.colorCache.set(e,S(e,this.colorContext)??null),this.colorCache.get(e)??void 0}static ɵfac=function(e){return new(e||t)};static ɵcmp=G({type:t,selectors:[[`app-token-catalog`]],viewQuery:function(e,o){e&1&&yn$1(o.viewports,qM,5),e&2&&Et()},features:[Vt([A])],decls:32,vars:20,consts:[[`tokenRegion`,``],[`tokenScroll`,``],[`documentation`,``],[`tokenResults`,``],[`categoryOption`,``],[`groupTitle`,``],[`groupStatus`,``],[`tokenRows`,``],[`copyActions`,``],[`tabindex`,`-1`,1,`token-region`],[`tabindex`,`-1`,1,`token-scroll`],[`pageDescription`,`Browse the semantic tokens, palette colors, spacing, shapes, and motion values that power Blocks.`],[`title`,`Using and extending Blocks tokens`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`catalog-filters`],[`ariaLabel`,`Search tokens`,`placeholder`,`Search names, palettes, roles, or values…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Categories`,`placeholder`,`All categories`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all categories`,3,`ngModelChange`,`clearable`,`showSelectAll`,`options`,`optionTemplate`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`label`,`Theme controls only`,`hint`,`Show shared colors, borders, corners, shadows, and spacing for creating themes. Turn off to browse component hooks, effects, and other advanced tokens.`,`subscriptSizing`,`dynamic`,1,`theme-filter`,3,`checkedChange`,`checked`],[1,`catalog-summary`],[`role`,`status`],[`id`,`token-copy-help`,1,`catalog-note`],[`role`,`status`,1,`copy-status`],[`tabindex`,`-1`,1,`token-results`],[1,`catalog-groups`,3,`multiple`],[1,`empty-results`,3,`surfaceEffects`],[3,`container`,`boundary`],[`path`,`projects/playground/src/app/components/screens/token-catalog/README.md`],[1,`catalog-category-heading`],[1,`token-group`,3,`expandedChange`,`title`,`titleTemplate`,`trailingTemplate`,`headingLevel`,`expanded`],[`bxInfiniteScroll`,``,3,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`decorative`],[1,`group-heading`],[`size`,`small`,`color`,`neutral`,3,`text`,`focusable`,`opaque`],[`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`role`,`group`,`aria-haspopup`,`menu`,`tabindex`,`0`,`ariaDescribedBy`,`token-copy-help`,1,`token-card`,3,`surfaceEffects`,`opaque`,`bxContextMenu`,`ariaLabel`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`,3,`background-color`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`pair-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`radius-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`shadow-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`space-preview`],[1,`token-content`],[1,`token-color-value`],[3,`label`],[3,`action`,`label`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`],[1,`token-scope`],[1,`companion`],[`tabindex`,`0`,`aria-label`,`Responsive Sass example`,1,`playground-code-block`,`token-code`],[1,`token-reference`],[1,`token-value`],[`language`,`scss`,3,`highlight`],[`title`,`Source defaults`,1,`token-metadata`,3,`headingLevel`],[`title`,`Source defaults`,1,`token-metadata`,3,`contextmenu`,`pointerdown`,`headingLevel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`category-option-label`,3,`bxTooltip`]],template:function(e,o){if(e&1&&(A$1(0,`div`,9,0)(2,`div`,10,1)(4,`bx-page-container`,11),Ae(5,`bx-collapsible`,12),ep(6,cn,1,0,`ng-template`,null,2,qr),A$1(8,`div`,13)(9,`bx-search-input`,14),nR(),ue(`ngModelChange`,function(l){return o.updateSearch(l)}),P(),A$1(10,`bx-multi-select`,15),nR(),ue(`ngModelChange`,function(l){return o.updateCategories(l)}),P(),A$1(11,`button`,16),ue(`click`,function(){return o.collapseAll()}),me(12,`Collapse all`),P(),A$1(13,`bx-slide-toggle`,17),ue(`checkedChange`,function(l){return o.updateThemeOnly(l)}),P()(),A$1(14,`div`,18)(15,`p`,19),me(16),P(),A$1(17,`p`),me(18),P()(),A$1(19,`p`,20),me(20,` Right-click a card or touch and hold to choose a copy format. or focus a card and press Shift + F10. Colors follow the current theme. `),P(),A$1(21,`p`,21),me(22),P(),A$1(23,`div`,22,3)(25,`bx-accordion`,23),Mn$1(26,An,7,7,null,null,ln,!1,Fn,5,1,`bx-card`,24),P()()()(),Ae(29,`app-scroll-to-top`,25),P(),ep(30,Ln,2,2,`ng-template`,null,4,qr)),e&2){let i=It(3),l=It(7),d=It(24),a=It(31);C(5),V(`headingLevel`,2)(`contentTemplate`,l),C(4),V(`ngModel`,o.searchTerm()),oR(),C(),V(`clearable`,!0)(`showSelectAll`,!1)(`options`,o.categories())(`optionTemplate`,a)(`ngModel`,o.selectedCategories()),oR(),C(),V(`disabled`,!o.groups().length),C(2),V(`checked`,o.themeOnly()),C(3),KC(``,o.filteredEntries().length,` results in `,o.groups().length,` groups · `,o.variableCount,` CSS variables`),C(2),WC(``,o.themingService.paletteLabel(),` · `,o.themingService.activeTheme()),C(4),Me(o.copyStatus()),C(3),V(`multiple`,!0),C(),In$1(o.groups()),C(3),V(`container`,i)(`boundary`,d)}},dependencies:[jM,Gne,Hne,SF,Z,sr,qe,ar,SM,RM,IM,od,S$1,ht,qM,ld,F,zM,cm,pm,um,CM,vi],styles:[`
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