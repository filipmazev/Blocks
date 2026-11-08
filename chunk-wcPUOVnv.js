import{t as F}from"./chunk-CRzeXBQe.js";import{A as S,F as M,I as se,T as sr,X as v,p as ar}from"./main-5HCVZCER.js";import{n as ht}from"./chunk-C9jkJ9AU.js";import{n as Z,s as qe}from"./chunk-BbcioGCK.js";import{$t as QA,A as E,An as V,Cr as de,E as DQ,Ea as vM,G as H$1,Hi as p,Ht as OD,Ir as fne,Jr as ia,Jt as Ot,L as Fa,La as ye,Li as oa,Lt as Na,Mr as f_,Oa as we,Pt as NM,Sn as Tt,Ta as vF,Un as X,V as G,X as He,Xi as q,Xn as ZR,Yi as pt,Yr as ie,Z as Hn,_ as CM,bn as Te,br as cs,c as AQ,cn as RQ,ct as Jc,ea as qn,er as _M,et as IM,f as BC,fr as bne,g as C,gr as ce,h as Be,ia as rd,it as It,jn as VC,ka as wr,ki as na,kt as MQ,la as rp,li as kC,ln as Re,m as Ba,mi as le,mn as Sr,mr as cM,ni as jQ,oa as rm,pi as lM,s as AM,si as jt,t as $,tn as QR,tr as _Q,u as At,ua as rr,ur as bM,vi as lx,vn as TQ,vr as cne,vt as L,wa as v$1,ya as tf,yn as Tb,za as yr,zt as Nn$1}from"./chunk-7QWHf5Iu.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var H=`blocks.token-catalog.theme-only.v1`;var z=[{value:`colors`,label:`Colors`},{value:`pairs`,label:`Color pairs`},{value:`spacing`,label:`Spacing`},{value:`radii`,label:`Corner radii`},{value:`shadows`,label:`Shadows`},{value:`borders`,label:`Border geometry`},{value:`layers`,label:`Stacking layers`},{value:`effects`,label:`Glass and effects`},{value:`components`,label:`Component variables`},{value:`other`,label:`Accessibility and other variables`},{value:`breakpoints`,label:`Sass breakpoints`},{value:`utilities`,label:`Utility classes`}];var Y=[`Backgrounds and surfaces`,`Primary and brand`,`Accent`,`Text`,`Borders`,`Danger`,`Warning`,`Information`,`Success`,`Scrollbars`];var Xe=[`variable`,`name`,`hex`,`rgb`,`rgba`];var Ze={variable:`Copy CSS variable`,name:`Copy token name`,hex:`Copy HEX code`,rgb:`Copy RGB`,rgba:`Copy RGBA`};function en(){let t=bne.flatMap(a=>{return Je(a.group.startsWith(`Palette · `)?a.group.slice(10):void 0,!1,a.group).map(S=>({id:a.name,name:a.name,reference:a.reference,category:a.category,group:S,kind:a.kind,scope:`${a.scope} \xB7 ${a.themeEditable?`Theme control`:`Advanced inventory`}`,defaults:[...a.defaults,...a.fallbacks.map(f=>`Fallback: ${f}`)],companion:``,companionReference:``,search:a.sources.join(` `)}))}),n=AQ.flatMap(a=>{let _=OD(a),S=Fa(a);return Je(S?a.replace(/-\d+$/,``):void 0,!0,`Semantic pairs`).map(f=>({id:`pair:${a}`,name:a,reference:cs(a),companion:_,companionReference:cs(_),category:`pairs`,group:f,kind:`pair`,scope:S?`Palette companion rule`:Object.hasOwn(lx,a)?`Explicit semantic mapping`:`Default surface companion`,defaults:[],search:``}))}),e=Object.entries(Sr).map(([a,_])=>({id:`breakpoint:${a}`,name:a,reference:`@include respond-up(${a}) { /* styles */ }`,category:`breakpoints`,group:`Responsive breakpoints`,kind:`breakpoint`,scope:`Sass only · not a CSS variable`,defaults:[`${_}px`],companion:``,companionReference:``,search:``})),o=jQ.map(a=>({id:`class:${a}`,name:`.${a}`,reference:a,category:`utilities`,group:/^bx-(bg|text|border)-/.test(a)?`Color utility classes`:`Layout and accessibility utility classes`,kind:`utility`,scope:`CSS class`,defaults:[],companion:``,companionReference:``,search:``})),i=z.map(a=>a.value),l={spacing:Object.keys(_Q),radii:Object.keys(DQ),shadows:Object.keys(MQ),layers:Object.keys(TQ)};return[...t,...n,...e,...o].sort((a,_)=>{let S=i.indexOf(a.category)-i.indexOf(_.category),f=Y.indexOf(a.group),q=Y.indexOf(_.group),tn=(f<0?100:f)-(q<0?100:q)||a.group.localeCompare(_.group),G=l[a.category],on=G?G.indexOf(a.name.slice(a.name.lastIndexOf(`-`)+1))-G.indexOf(_.name.slice(_.name.lastIndexOf(`-`)+1)):0;return S||tn||on||a.name.localeCompare(_.name,`en`,{numeric:!0})}).map(a=>s(r({},a),{search:[a.name,a.search,a.reference,a.category,a.group,a.kind,a.scope,a.companion,a.name.includes(`bg-`)?`background backgrounds`:``,...a.defaults].join(` `).toLowerCase()}))}function Je(t,n,e){if(!t)return[e];let o=tf.filter(i=>{let l=RQ[i.id];return l.brand===t||l.accent===t});return o.length?o.map(i=>`${n?`Theme companions`:`Theme palettes`} \xB7 ${i.label}`):t===`primary`||t===`accent`?[n?`Current theme companions · Primary / Accent`:`Current theme · Primary / Accent`]:[`${n?`Palette companions`:`Other palettes`} \xB7 ${t}`]}var A=class t{document=p(ie);browser=Tt(p(pt));initialThemeOnly=this.restoreThemeOnly();saveThemeOnly(n){if(this.browser)try{this.document.defaultView?.localStorage.setItem(H,String(n))}catch{}}restoreThemeOnly(){if(!this.browser)return!0;try{return this.document.defaultView?.localStorage.getItem(H)!==`false`}catch{return!0}}static ɵfac=function(e){return new(e||t)};static ɵprov=X({token:t,factory:t.ɵfac})};var rn=()=>[];var ln=(t,n)=>n.id;function cn(t,n){t&1&&Be(0,`app-readme`,26)}function sn(t,n){if(t&1&&($(0,`div`,27)(1,`h2`),Te(2),q(),Be(3,`bx-divider`,30),q()),t&2){let e=L().$implicit,o=L();E(2),He(o.categoryTitle(e.entries[0].category)),E(),le(`decorative`,!0)}}function pn(t,n){if(t&1&&($(0,`span`,31)(1,`span`),Te(2),q()()),t&2){let e=n.$implicit;E(2),He(e)}}function dn(t,n){if(t&1&&Be(0,`bx-tag`,32),t&2){let e=n.$implicit;le(`text`,e)(`focusable`,!1)(`opaque`,!0)}}function mn(t,n){if(t&1&&Hn(0,dn,1,3,`bx-tag`,32,na),t&2){let e=L().$implicit,o=L();qn(o.groupTags(e))}}function gn(t,n){if(t&1){let e=yr();$(0,`bx-menu-item`,46),ye(`action`,function(){At(e);let i=L().$implicit,l=L(2).$implicit,d=L(3);return Ot(d.copy(l,i))}),q()}if(t&2){let e=L().$implicit,o=L(2).$implicit,i=L(3);le(`label`,i.copyLabel(o,e))}}function _n(t,n){if(t&1&&ce(0,gn,1,1,`bx-menu-item`,45),t&2){let e=n.$implicit,o=L(2).$implicit,i=L(3);de(i.canCopy(o,e)?0:-1)}}function un(t,n){if(t&1&&($(0,`bx-menu`),Hn(1,_n,1,1,null,null,na),q()),t&2){let e=L(4);E(),qn(e.copyFormats)}}function yn(t,n){if(t&1&&Be(0,`div`,47),t&2){let e=L().$implicit;we(`background-color`,e.reference)}}function Cn(t,n){if(t&1&&($(0,`div`,39),Be(1,`span`)(2,`span`),q()),t&2){let e=L().$implicit;E(),we(`background-color`,e.reference),E(),we(`background-color`,e.companionReference)}}function bn(t,n){if(t&1&&($(0,`div`,40),Be(1,`span`),q()),t&2){let e=L().$implicit;E(),we(`border-radius`,e.reference)}}function fn(t,n){if(t&1&&($(0,`div`,41),Be(1,`span`),q()),t&2){let e=L().$implicit;E(),we(`box-shadow`,e.reference)}}function hn(t,n){if(t&1&&($(0,`div`,42),Be(1,`span`),q()),t&2){let e=L().$implicit;E(),we(`inline-size`,e.reference)}}function vn(t,n){if(t&1&&($(0,`code`,44),Te(1),q()),t&2){let e=L().$implicit,o=L(3);E(),He(o.colors()[e.name]?.hex||o.liveValues()[e.name])}}function xn(t,n){if(t&1&&($(0,`code`,49),Te(1),q()),t&2){let e=L(2).$implicit;E(),wr(`↔ `,e.companion)}}function kn(t,n){if(t&1&&($(0,`pre`,50),Be(1,`code`,53),q()),t&2){let e=L(2).$implicit;E(),le(`highlight`,e.reference)}}function Sn(t,n){if(t&1&&($(0,`code`,51),Te(1),q()),t&2){let e=L(2).$implicit;E(),He(e.reference)}}function Tn(t,n){if(t&1&&($(0,`code`,51),Te(1),q()),t&2){let e=L(2).$implicit;E(),He(e.companionReference)}}function On(t,n){if(t&1&&($(0,`code`,52),Te(1),q()),t&2){let e=L(2).$implicit,o=L(3);E(),He(o.liveValues()[e.name])}}function Mn(t,n){if(t&1&&($(0,`code`),Te(1),q()),t&2){let e=n.$implicit;E(),He(e)}}function En(t,n){if(t&1&&($(0,`bx-collapsible`,55),ye(`contextmenu`,function(o){return o.stopPropagation()})(`pointerdown`,function(o){return o.stopPropagation()}),Hn(1,Mn,2,1,`code`,null,na),q()),t&2){let e=L(3).$implicit;le(`headingLevel`,5),E(),qn(e.defaults)}}function wn(t,n){if(t&1&&($(0,`code`,52),Te(1),q()),t&2){let e=L(3).$implicit;E(),He(e.defaults[0])}}function Pn(t,n){if(t&1&&ce(0,En,3,1,`bx-collapsible`,54)(1,wn,2,1,`code`,52),t&2){let e=L(2).$implicit;de(e.defaults.length>1?0:1)}}function Nn(t,n){if(t&1&&($(0,`p`,48),Te(1),q(),ce(2,xn,2,1,`code`,49),ce(3,kn,2,1,`pre`,50)(4,Sn,2,1,`code`,51),ce(5,Tn,2,1,`code`,51),ce(6,On,2,1,`code`,52)(7,Pn,2,1)),t&2){let e=L().$implicit,o=L(3);E(),He(e.scope),E(),de(e.companion?2:-1),E(),de(e.kind===`breakpoint`?3:4),E(2),de(e.companionReference?5:-1),E(),de(o.liveValues()[e.name]?6:e.defaults.length?7:-1)}}function In(t,n){if(t&1&&($(0,`bx-card`,37),kC(1,un,3,0,`ng-template`,null,8,Tb),ce(3,yn,1,2,`div`,38)(4,Cn,3,4,`div`,39)(5,bn,2,2,`div`,40)(6,fn,2,2,`div`,41)(7,hn,2,2,`div`,42),$(8,`div`,43)(9,`h4`)(10,`code`),Te(11),q()(),ce(12,vn,2,1,`code`,44)(13,Nn,8,5),q()()),t&2){let e,o=n.$implicit,i=oa(2);le(`surfaceEffects`,!1)(`opaque`,!0)(`bxContextMenu`,i)(`ariaLabel`,o.name),G(`data-token`,o.id),E(3),de((e=o.kind)===`color`?3:e===`pair`?4:e===`radius`?5:e===`shadow`?6:e===`spacing`?7:-1),E(8),He(o.name),E(),de(o.kind===`color`?12:13)}}function Rn(t,n){if(t&1){let e=yr();$(0,`button`,56),ye(`click`,function(){At(e);let i=L(2).$implicit,l=L();return Ot(l.renderMore(i))}),Te(1),q()}if(t&2){let e=L(2).$implicit;E(),wr(`Show more `,e.label,` tokens`)}}function $n(t,n){if(t&1){let e=yr();$(0,`div`,33),ye(`scrollEnd`,function(){At(e);let i=L().$implicit,l=L();return Ot(l.renderMore(i))}),$(1,`bx-virtual-collection`,34,7),kC(3,In,14,8,`ng-template`,35),q(),ce(4,Rn,2,1,`button`,36),q()}if(t&2){let e=oa(2),o=L().$implicit,i=L(),l=oa(3);le(`infiniteScrollContainer`,l)(`infiniteScrollDisabled`,(i.visibleChunks().get(o.id)?.length??0)>=o.chunks.length)(`infiniteScrollRevision`,i.visibleEntries().get(o.id))(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,600),E(),le(`items`,i.visibleEntries().get(o.id)??QA(12,rn))(`trackBy`,i.entryKey)(`config`,o.entries[0].kind===`color`?i.colorVirtualConfig:i.tokenVirtualConfig)(`scrollContainer`,l),G(`aria-label`,`Tokens in `+o.label),E(2),le(`bxVirtualItem`,e),E(),de((i.visibleChunks().get(o.id)?.length??0)<o.chunks.length?4:-1)}}function An(t,n){if(t&1){let e=yr();ce(0,sn,4,2,`div`,27),$(1,`bx-accordion-item`,28),ye(`expandedChange`,function(i){let l=At(e).$implicit,d=L();return Ot(d.toggleGroup(l.id,i))}),kC(2,pn,3,1,`ng-template`,null,5,Tb)(4,mn,2,0,`ng-template`,null,6,Tb),ce(6,$n,5,13,`div`,29),q()}if(t&2){let e=n.$implicit,o=n.$index,i=oa(3),l=oa(5),d=L();de(o===0||d.groups()[o-1].entries[0].category!==e.entries[0].category?0:-1),E(),le(`title`,e.label)(`titleTemplate`,i)(`trailingTemplate`,l)(`headingLevel`,3)(`expanded`,d.isExpanded(e)),E(5),de(d.isExpanded(e)?6:-1)}}function Fn(t,n){t&1&&($(0,`bx-card`,24)(1,`h2`),Te(2,`No tokens found`),q(),$(3,`p`),Te(4,`Try fewer words or clear the category filter to show all tokens.`),q()()),t&2&&le(`surfaceEffects`,!1)}function Ln(t,n){if(t&1&&($(0,`span`,57),Te(1),q()),t&2){let e=n.$implicit;le(`bxTooltip`,e.disabled?`Disabled in the "Theme controls only" mode.`:``),E(),He(e.resolvedStr)}}var nn=class t{bxA11yService=p(Re);themeStudioService=p(se);clipboard=p(v);tokenCatalogPreferencesService=p(A);nativeElement=p(V).nativeElement;themingService=p(Na);entries=en();themeNames=new Set(f_);themeCategories=new Set(this.entries.filter(n=>this.themeNames.has(n.name)).map(n=>n.category));liveTokens=bne.filter(n=>n.scope===`global`||n.scope===`theme`);colorCache=/* @__PURE__ */ new Map;normalizedLiveValues=v$1(()=>new Map(Object.entries(this.liveValues()).map(([n,e])=>[n,e.toLowerCase()])));colorSearch=v$1(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.liveTokens){let o=this.resolveColor(e.name);o&&n.set(e.name,`${o.hex} ${o.rgb} ${o.rgba}`)}return n});viewports=rp(AM);entryKey=n=>n.id;colorVirtualConfig={layout:`grid`,minColumnWidth:`10rem`,estimatedRowHeight:288,overscan:800};tokenVirtualConfig={layout:`grid`,minColumnWidth:`15rem`,estimatedRowHeight:576,overscan:800};copyFormats=Xe;variableCount=bne.length;searchTerm=C(``);copyStatus=C(``);themeOnly=C(this.tokenCatalogPreferencesService.initialThemeOnly);selectedCategories=C([]);liveValues=C({});expansionOverrides=C(/* @__PURE__ */ new Map);categories=v$1(()=>z.map(n=>s(r({},n),{disabled:this.themeOnly()&&!this.themeCategories.has(n.value)})));filteredEntries=v$1(()=>{let n=this.searchTerm().toLowerCase().trim().split(/\s+/).filter(Boolean),e=this.selectedCategories(),o=this.themeOnly(),i=n.length?this.normalizedLiveValues():void 0,l=n.some(d=>/#|rgba?\(/.test(d))?this.colorSearch():void 0;return this.entries.filter(d=>{if(o&&!this.themeNames.has(d.name)||e.length&&!e.includes(d.category))return!1;if(!n.length||n.every(f=>d.search.includes(f)))return!0;let a=d.reference.startsWith(`var(`)?d.reference.slice(4,-1):d.name,_=d.companionReference.slice(4,-1),S=`${d.search} ${i?.get(a)??``} ${i?.get(_)??``} ${l?.get(a)??``} ${l?.get(_)??``}`;return n.every(f=>S.includes(f))})});groups=v$1(()=>{let n=/* @__PURE__ */ new Map;for(let e of this.filteredEntries()){let o=`${e.category} / ${e.group}`,i=n.get(o)??[];i.push(e),n.set(o,i)}return[...n].map(([e,o])=>({id:e,label:this.resolveGroupLabel(o[0].group),total:o.length,entries:o,chunks:Array.from({length:Math.ceil(o.length/24)},(i,l)=>({id:`${e}:${l}`,entries:o.slice(l*24,(l+1)*24)}))}))});renderedChunks=ia({source:this.groups,computation:()=>/* @__PURE__ */ new Map});visibleChunks=v$1(()=>new Map(this.groups().map(n=>[n.id,n.chunks.slice(0,this.renderedChunks().get(n.id)??2)])));visibleEntries=v$1(()=>new Map([...this.visibleChunks()].map(([n,e])=>[n,e.flatMap(o=>o.entries)])));colors=v$1(()=>{let n={};for(let e of this.viewports())for(let o of e.renderedItems())for(let i of[o.reference,o.companionReference]){if(!i.startsWith(`var(`))continue;let l=i.slice(4,-1),d=this.resolveColor(l);d&&(n[l]=d)}return n});colorContext=null;constructor(){this.themeOnly()&&this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!0]))),rr(()=>{if(this.themeStudioService.revision(),this.themingService.activeTheme(),this.themingService.palette(),this.themingService.highContrast(),this.themingService.appearance(),this.bxA11yService.isReducedMotion(),!this.colorContext){let o=this.nativeElement.ownerDocument.createElement(`canvas`);o.width=1,o.height=1,this.colorContext=o.getContext(`2d`,{willReadFrequently:!0})}let n=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement),e={};for(let o of this.liveTokens){let i=n?.getPropertyValue(o.name).trim()??``;e[o.name]=i===`currentColor`?n?.color??``:i}this.colorCache.clear(),this.liveValues.set(e)})}copy(n,e){let i=(n.kind===`pair`?[n.reference,n.companionReference]:[n.reference]).map(d=>{let a=d.startsWith(`var(`)?d.slice(4,-1):d;return e===`variable`?d:e===`name`?a:this.colors()[a]?.[e]});if(i.some(d=>d===void 0)){this.copyStatus.set(`Cannot resolve ${e} for ${n.name}. Choose Copy CSS variable or Copy token name.`);return}let l=i.join(`
`);this.copyStatus.set(this.clipboard.copy(l)?`Copied ${n.name} as ${e}.`:`Copy failed. Select and copy this value: ${l}`)}copyLabel(n,e){return n.kind===`utility`?`Copy class`:n.kind===`breakpoint`?`Copy Sass`:Ze[e]}categoryTitle(n){let e=this.categories().find(o=>o.value===n);return typeof e?.label==`string`?e.label:n}canCopy(n,e){return n.kind===`utility`||n.kind===`breakpoint`?e===`variable`:e===`variable`||e===`name`||!!(this.colors()[n.reference.slice(4,-1)]&&(n.kind!==`pair`||this.colors()[n.companionReference.slice(4,-1)]))}groupTags(n){let e=n.entries[0].group.split(` · `)[0],o=[],i=e.includes(`palette`)||e.includes(`theme`)||e===`Theme companions`,l=e.startsWith(`Current theme`)||!this.themingService.highContrast()&&i&&n.label===this.themingService.paletteLabel();return l&&o.push(`Current theme`),n.entries[0].kind===`pair`?o.push(`Companions`):i&&!l&&o.push(`Palette`),o}isExpanded(n){return this.expansionOverrides().get(n.id)??this.groups()[0]?.id===n.id}collapseAll(){this.expansionOverrides.set(new Map(this.groups().map(n=>[n.id,!1])))}updateSearch(n){this.searchTerm.set(n),this.expansionOverrides.set(/* @__PURE__ */ new Map)}updateCategories(n){this.selectedCategories.set((n??[]).filter(e=>!this.themeOnly()||this.themeCategories.has(e)))}updateThemeOnly(n){this.themeOnly.set(n),this.tokenCatalogPreferencesService.saveThemeOnly(n),this.updateCategories(this.selectedCategories())}renderMore(n){this.renderedChunks.update(e=>new Map(e).set(n.id,Math.min(n.chunks.length,(e.get(n.id)??2)+2)))}toggleGroup(n,e){this.expansionOverrides.update(o=>new Map(o).set(n,e))}resolveGroupLabel(n){let e=n.indexOf(` · `);return e<0?n===`Semantic pairs`?`Semantic`:n:n.slice(e+3).split(` `).map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(` `)}resolveColor(n){let e=this.liveValues()[n];if(!(!e||!this.colorContext))return this.colorCache.has(e)||this.colorCache.set(e,M(e,this.colorContext)??null),this.colorCache.get(e)??void 0}static ɵfac=function(e){return new(e||t)};static ɵcmp=H$1({type:t,selectors:[[`app-token-catalog`]],viewQuery:function(e,o){e&1&&Nn$1(o.viewports,AM,5),e&2&&It()},features:[jt([A])],decls:32,vars:20,consts:[[`tokenRegion`,``],[`tokenScroll`,``],[`documentation`,``],[`tokenResults`,``],[`categoryOption`,``],[`groupTitle`,``],[`groupStatus`,``],[`tokenRows`,``],[`copyActions`,``],[`tabindex`,`-1`,1,`token-region`],[`tabindex`,`-1`,1,`token-scroll`],[`pageDescription`,`Browse the semantic tokens, palette colors, spacing, shapes, and motion values that power Blocks.`],[`title`,`Using and extending Blocks tokens`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`catalog-filters`],[`ariaLabel`,`Search tokens`,`placeholder`,`Search names, palettes, roles, or values…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Categories`,`placeholder`,`All categories`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all categories`,3,`ngModelChange`,`clearable`,`showSelectAll`,`options`,`optionTemplate`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`label`,`Theme controls only`,`hint`,`Show shared colors, borders, corners, shadows, and spacing for creating themes. Turn off to browse component hooks, effects, and other advanced tokens.`,`subscriptSizing`,`dynamic`,1,`theme-filter`,3,`checkedChange`,`checked`],[1,`catalog-summary`],[`role`,`status`],[`id`,`token-copy-help`,1,`catalog-note`],[`role`,`status`,1,`copy-status`],[`tabindex`,`-1`,1,`token-results`],[1,`catalog-groups`,3,`multiple`],[1,`empty-results`,3,`surfaceEffects`],[3,`container`,`boundary`],[`path`,`projects/playground/src/app/components/screens/token-catalog/README.md`],[1,`catalog-category-heading`],[1,`token-group`,3,`expandedChange`,`title`,`titleTemplate`,`trailingTemplate`,`headingLevel`,`expanded`],[`bxInfiniteScroll`,``,3,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`decorative`],[1,`group-heading`],[`size`,`small`,`color`,`neutral`,3,`text`,`focusable`,`opaque`],[`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`role`,`group`,`aria-haspopup`,`menu`,`tabindex`,`0`,`ariaDescribedBy`,`token-copy-help`,1,`token-card`,3,`surfaceEffects`,`opaque`,`bxContextMenu`,`ariaLabel`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`,3,`background-color`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`pair-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`radius-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`shape-preview`,`shadow-preview`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`space-preview`],[1,`token-content`],[1,`token-color-value`],[3,`label`],[3,`action`,`label`],[`bxCardMedia`,``,`aria-hidden`,`true`,1,`token-swatch`],[1,`token-scope`],[1,`companion`],[`tabindex`,`0`,`aria-label`,`Responsive Sass example`,1,`playground-code-block`,`token-code`],[1,`token-reference`],[1,`token-value`],[`language`,`scss`,3,`highlight`],[`title`,`Source defaults`,1,`token-metadata`,3,`headingLevel`],[`title`,`Source defaults`,1,`token-metadata`,3,`contextmenu`,`pointerdown`,`headingLevel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`category-option-label`,3,`bxTooltip`]],template:function(e,o){if(e&1&&($(0,`div`,9,0)(2,`div`,10,1)(4,`bx-page-container`,11),Be(5,`bx-collapsible`,12),kC(6,cn,1,0,`ng-template`,null,2,Tb),$(8,`div`,13)(9,`bx-search-input`,14),ZR(),ye(`ngModelChange`,function(l){return o.updateSearch(l)}),q(),$(10,`bx-multi-select`,15),ZR(),ye(`ngModelChange`,function(l){return o.updateCategories(l)}),q(),$(11,`button`,16),ye(`click`,function(){return o.collapseAll()}),Te(12,`Collapse all`),q(),$(13,`bx-slide-toggle`,17),ye(`checkedChange`,function(l){return o.updateThemeOnly(l)}),q()(),$(14,`div`,18)(15,`p`,19),Te(16),q(),$(17,`p`),Te(18),q()(),$(19,`p`,20),Te(20,` Right-click a card or touch and hold to choose a copy format. or focus a card and press Shift + F10. Colors follow the current theme. `),q(),$(21,`p`,21),Te(22),q(),$(23,`div`,22,3)(25,`bx-accordion`,23),Hn(26,An,7,7,null,null,ln,!1,Fn,5,1,`bx-card`,24),q()()()(),Be(29,`app-scroll-to-top`,25),q(),kC(30,Ln,2,2,`ng-template`,null,4,Tb)),e&2){let i=oa(3),l=oa(7),d=oa(24),a=oa(31);E(5),le(`headingLevel`,2)(`contentTemplate`,l),E(4),le(`ngModel`,o.searchTerm()),QR(),E(),le(`clearable`,!0)(`showSelectAll`,!1)(`options`,o.categories())(`optionTemplate`,a)(`ngModel`,o.selectedCategories()),QR(),E(),le(`disabled`,!o.groups().length),E(2),le(`checked`,o.themeOnly()),E(3),VC(``,o.filteredEntries().length,` results in `,o.groups().length,` groups · `,o.variableCount,` CSS variables`),E(2),BC(``,o.themingService.paletteLabel(),` · `,o.themingService.activeTheme()),E(4),He(o.copyStatus()),E(3),le(`multiple`,!0),E(),qn(o.groups()),E(3),le(`container`,i)(`boundary`,d)}},dependencies:[IM,fne,cne,vF,Z,sr,qe,ar,vM,_M,CM,Jc,S,ht,AM,rd,F,NM,rm,cM,lM,bM,Ba],styles:[`
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