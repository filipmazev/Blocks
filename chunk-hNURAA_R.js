import{n as te,t as Z}from"./chunk-BAwoAnP2.js";import{n as k}from"./chunk-BpRItq3P.js";import{A as ht,S as oo,X as qe$1,a as Qn,p as ao,q as Z$1}from"./main-HW2XYL5W.js";import{$i as v,$n as a2,$r as kb,Ai as qR,Ar as gr,Bi as se,Bt as P,D as E,Et as NS,F as Fs,Fn as Xc,Gn as Zc,Gr as je$1,I as Ft,Ii as rk,Li as rs,Mr as hS,N as Fe$1,Na as zR,Ni as qte,Oi as q,Pa as zn,Si as p,Tn as Vte,Tr as ft,U as Goe,Vr as j1,W as H,Wi as te$1,Wn as Z$2,Yn as _M,Zr as k$1,_ as CM,_a as xe,aa as vn,an as SM,ca as wM,cr as bn,dn as Tn,et as It,gi as ns,hn as U,jn as Woe,ka as z,kr as ge,ma as xM,mr as de,mt as Le$1,nr as ae,pa as ws,pi as mr,pn as Tt,qr as jn,ri as l2,t as $,tt as Jc,u as At,ua as we,ui as mM,un as Te$1,xn as Uoe,yi as oe,zn as Yc,zt as Ot}from"./chunk-Dt37D5SH.js";import{t as r}from"./chunk-C9yOwMO6.js";var h={version:1,size:24,strokeWidth:1.5,categories:[]};var G=`blocks.icon-catalog.v1`;var Ee={color:`neutral`,variant:`tonal`};var Te={color:`accent`,variant:`filled`};var Ne=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Text`,value:`text-primary`},{label:`Secondary text`,value:`text-secondary`},{label:`Success`,value:`text-success`},{label:`Information`,value:`text-info`},{label:`Warning`,value:`text-warn`},{label:`Danger`,value:`text-danger`}];var O=class s{document=p(te$1);destroyRef=p(q);browser=Tt(p(ft));initial=this.restore();timer;pending;constructor(){let t=()=>this.flush();this.browser&&this.document.defaultView?.addEventListener(`pagehide`,t),this.destroyRef.onDestroy(()=>{this.document.defaultView?.clearTimeout(this.timer),this.flush(),this.document.defaultView?.removeEventListener(`pagehide`,t)})}save(t){this.browser&&(this.pending=t,this.document.defaultView?.clearTimeout(this.timer),this.timer=this.document.defaultView?.setTimeout(()=>this.flush(),200))}flush(){if(!(!this.pending||!this.browser)){try{this.document.defaultView?.localStorage.setItem(G,JSON.stringify(this.pending))}catch{}this.pending=void 0}}restore(){if(!this.browser)return h;try{let t=JSON.parse(this.document.defaultView?.localStorage.getItem(G)??`null`);if(!t||typeof t!=`object`||!(`version`in t)||t.version!==1)return h;let n=`size`in t&&typeof t.size==`number`&&Number.isInteger(t.size)&&t.size>=16&&t.size<=64?t.size:h.size,e=`strokeWidth`in t&&typeof t.strokeWidth==`number`&&Number.isFinite(t.strokeWidth)&&t.strokeWidth>=.5&&t.strokeWidth<=3?t.strokeWidth:h.strokeWidth,r=`categories`in t&&Array.isArray(t.categories)?t.categories:[];return{version:1,size:n,strokeWidth:e,categories:Goe.filter(x=>r.includes(x.id)).slice(0,1).map(x=>x.id)}}catch{return h}}static ɵfac=function(n){return new(n||s)};static ɵprov=Z$2({token:s,factory:s.ɵfac})};var Ge=[`results`];var Fe=[`catalogScroll`];var He=()=>({name:`sliders-horizontal`,color:`accent`,bgColor:`auto`});var Be=()=>({name:`info`,color:`accent`,bgColor:`auto`});var je=(s,t)=>t.id;function $e(s,t){if(s&1&&(U(0,`span`,42),Fe$1(1,`bx-icon`,43),Te$1(2),H()),s&2){let n=t.$implicit;k$1(2),je$1(n)}}function Ue(s,t){if(s&1){let n=gr();U(0,`bx-chip`,44),xe(`selectedChange`,function(r){let l=At(n).$implicit,x=P();return Ot(x.toggleCategory(l.id,r))}),H()}if(s&2){let n=t.$implicit,e=P();oe(`label`,n.label)(`config`,e.selectedCategoryIds().has(n.id)?e.selectedCategoryChipConfig:e.categoryChipConfig)(`selected`,e.selectedCategoryIds().has(n.id))(`deselectable`,!0)}}function Ye(s,t){if(s&1){let n=gr();U(0,`div`,11)(1,`div`,45),Fe$1(2,`bx-icon`,46),H(),U(3,`label`,47),Te$1(4,`Size `),U(5,`output`,47),Te$1(6),H()(),U(7,`input`,48),zR(),xe(`ngModelChange`,function(r){At(n);let l=P();return Ot(l.customize({size:r}))}),H(),U(8,`label`,49),Te$1(9,`Stroke width `),U(10,`output`,49),Te$1(11),H()(),U(12,`input`,50),zR(),xe(`ngModelChange`,function(r){At(n);let l=P();return Ot(l.customize({strokeWidth:r}))}),H(),U(13,`bx-select`,51),zR(),xe(`ngModelChange`,function(r){At(n);let l=P();return Ot(l.customize({color:r}))}),H(),U(14,`bx-slide-toggle`,52),zR(),xe(`ngModelChange`,function(r){At(n);let l=P();return Ot(l.customize({background:r}))}),H(),U(15,`div`,53)(16,`h3`),Te$1(17,`Angular code`),H(),U(18,`button`,54),xe(`click`,function(){At(n);let r=P();return Ot(r.copyCode())}),Fe$1(19,`bx-icon`,55),Te$1(20,` Copy `),H()(),U(21,`pre`,56),Fe$1(22,`code`,57),H(),U(23,`p`,58),Te$1(24),H(),U(25,`dl`,59)(26,`dt`),Te$1(27,`Identifier`),H(),U(28,`dd`)(29,`code`),Te$1(30),H()(),U(31,`dt`),Te$1(32,`Categories`),H(),U(33,`dd`),Te$1(34),H()()()}if(s&2){let n=t,e=P();k$1(),de(`preview-background`,e.details().background),k$1(),oe(`name`,n)(`size`,e.details().size)(`strokeWidth`,e.details().strokeWidth)(`color`,e.details().color)(`bgColor`,e.details().background?`auto`:void 0),k$1(4),mr(``,e.details().size,` px`),k$1(),oe(`ngModel`,e.details().size),qR(),k$1(4),je$1(e.details().strokeWidth),k$1(),oe(`ngModel`,e.details().strokeWidth),qR(),k$1(),oe(`clearable`,!1)(`options`,e.colors)(`ngModel`,e.details().color),qR(),k$1(),oe(`ngModel`,e.details().background),qR(),k$1(8),oe(`highlight`,e.selectedCode()),k$1(2),je$1(e.copyStatus()),k$1(6),je$1(n),k$1(4),je$1(e.selectedCategoryLabels().join(`, `))}}function Ke(s,t){s&1&&Fe$1(0,`app-readme`,60)}function Qe(s,t){if(s&1){let n=gr();U(0,`button`,61),xe(`click`,function(){let r=At(n).$implicit,l=P();return Ot(l.selectIcon(r))}),U(1,`span`,62)(2,`span`,63),Fe$1(3,`bx-icon`,64),H(),U(4,`span`,65),Te$1(5),H()()()}if(s&2){let n=t.$implicit,e=P();de(`selected`,e.highlightedIcon()===n),oe(`surfaceEffects`,!1),$(`aria-pressed`,e.highlightedIcon()===n)(`aria-label`,`Customize `+n),k$1(3),oe(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),k$1(2),je$1(n)}}function Je(s,t){s&1&&(U(0,`p`,39),Te$1(1,`No icons match these filters. Try another name, choose another category, or reset the filters.`),H())}function qe(s,t){if(s&1){let n=gr();U(0,`div`,40)(1,`button`,24),xe(`click`,function(){At(n);let r=P();return Ot(r.renderMore())}),Te$1(2,`Show more icons`),H()()}}var Le=class s{clipboard=p(te);iconCatalogPreferencesService=p(O);windowDimensionsService=p(ws);allIcons=Uoe;batchSize=72;categoryLabels=new Map(Goe.map(t=>[t.id,t.label]));customizations=E(/* @__PURE__ */ new Map);results=bn(`results`);catalogScroll=bn(`catalogScroll`);filtersPanelBreakpoints={"2xl":`push`};iconKey=t=>t;isOnSmallerScreen=v(()=>this.windowDimensionsService.isBelow(`2xl`));virtualConfig=v(()=>({layout:`grid`,minColumnWidth:`7rem`,estimatedRowHeight:this.selectedSize()+80,overscan:800}));categoryChipConfig=Ee;selectedCategoryChipConfig=Te;colors=Ne;categories=Goe;activePanel=E(null);selectedIcon=E(null);scrollContainer=E(void 0);searchTerm=E(``);copyStatus=E(``);selectedSize=E(this.iconCatalogPreferencesService.initial.size);selectedStrokeWidth=E(this.iconCatalogPreferencesService.initial.strokeWidth);selectedCategories=E(this.iconCatalogPreferencesService.initial.categories);selectedCategoryIds=v(()=>new Set(this.selectedCategories()));highlightedIcon=v(()=>this.activePanel()===`details`?this.selectedIcon():null);filteredIcons=v(()=>{let t=this.searchTerm().toLowerCase().trim().split(/[\s_-]+/).filter(Boolean),n=this.selectedCategoryIds();return this.allIcons.filter(e=>t.every(r=>e.includes(r))&&(!n.size||Woe[e].some(r=>n.has(r))))});renderedCount=rs({source:this.filteredIcons,computation:()=>this.batchSize});hasActiveFilters=v(()=>this.selectedCategories().length>0);visibleIcons=v(()=>this.filteredIcons().slice(0,this.renderedCount()));hasMore=v(()=>this.visibleIcons().length<this.filteredIcons().length);details=v(()=>{let t=this.selectedIcon();return(t?this.customizations().get(t):void 0)??this.initialCustomization()});selectedCategoryLabels=v(()=>{let t=this.selectedIcon();return t?Woe[t].map(n=>this.categoryLabels.get(n)??n):[]});selectedCode=v(()=>{let t=this.details(),n=[`name="${this.selectedIcon()??`blocks`}"`];return t.size!==24&&n.push(`[size]="${t.size}"`),t.strokeWidth!==1.5&&n.push(`[strokeWidth]="${t.strokeWidth}"`),n.push(`color="${t.color}"`),t.background&&n.push(`bgColor="auto"`),`<bx-icon ${n.join(` `)} />`});constructor(){Le$1(()=>{this.scrollContainer.set(this.catalogScroll()?.nativeElement)}),ge(()=>{this.iconCatalogPreferencesService.save({version:1,size:this.selectedSize(),strokeWidth:this.selectedStrokeWidth(),categories:this.selectedCategories()})}),ge(()=>{this.selectedCode(),this.copyStatus.set(``)})}search(t){this.searchTerm.set(t),this.resetScroll()}filterCategories(t){this.selectedCategories.set(t?.slice(0,1)??[]),this.resetScroll()}toggleCategory(t,n){this.filterCategories(n?[t]:this.selectedCategories().filter(e=>e!==t))}renderMore(){this.hasMore()&&this.renderedCount.update(t=>Math.min(t+this.batchSize,this.filteredIcons().length))}selectIcon(t){this.customizations().has(t)||this.customizations.update(n=>new Map(n).set(t,this.initialCustomization())),this.selectedIcon.set(t),this.activePanel.set(`details`)}panelChanged(t,n){n?this.activePanel.set(t):this.activePanel()===t&&this.activePanel.set(null)}customize(t){let n=this.selectedIcon();n&&this.customizations.update(e=>new Map(e).set(n,r(r({},this.details()),t)))}resetCustomization(){this.customize(this.initialCustomization())}resetFilters(){this.selectedSize.set(h.size),this.selectedStrokeWidth.set(h.strokeWidth),this.selectedCategories.set([]),this.iconCatalogPreferencesService.save(h),this.iconCatalogPreferencesService.flush(),this.resetScroll()}copyCode(){this.copyStatus.set(this.clipboard.copy(this.selectedCode())?`Copied icon code.`:`Copy failed. Select the code and copy it manually.`)}initialCustomization(){return{size:Math.max(64,this.selectedSize()),strokeWidth:this.selectedStrokeWidth(),color:`accent`,background:!0}}resetScroll(){let t=this.scrollContainer(),n=this.results()?.nativeElement;if(!t||!n)return;let r=t===t.ownerDocument.scrollingElement?0:t.getBoundingClientRect().top+t.clientTop,l=n.getBoundingClientRect().top-r;l<0&&t.scrollTo({top:Math.max(0,t.scrollTop+l),behavior:`instant`})}static ɵfac=function(n){return new(n||s)};static ɵcmp=z({type:s,selectors:[[`app-icon-catalog`]],viewQuery:function(n,e){n&1&&Tn(e.results,Ge,5)(e.catalogScroll,Fe,5),n&2&&It(2)},features:[Ft([O])],decls:64,vars:45,consts:[[`filtersPanel`,``],[`categoryHeading`,``],[`detailsPanel`,``],[`catalogRegion`,``],[`catalogScroll`,``],[`documentation`,``],[`results`,``],[`iconRows`,``],[1,`catalog-layout`],[`placement`,`left`,`panelId`,`icon-filters-panel`,`ariaLabel`,`Icon filters`,`labelledBy`,`icon-filters-title`,3,`openChange`,`headerIcon`,`breakpoints`,`resizable`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-filters-title`,1,`panel-title`],[1,`panel-controls`],[1,`slider-heading`],[`for`,`catalog-size`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog icon size`,`bxTooltip`,`Changes every icon in the catalog. Inspector settings are separate.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`64`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`catalog-stroke`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog stroke width`,`bxTooltip`,`Changes the SVG stroke width throughout the catalog, independently of icon size.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`title`,`Category`,1,`category-section`,3,`headingLevel`,`expanded`,`titleTemplate`],[`role`,`group`,`aria-label`,`Filter icons by category`,1,`category-options`],[3,`label`,`config`,`selected`,`deselectable`],[1,`control-hint`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`placement`,`right`,`ariaLabel`,`Icon details`,`labelledBy`,`icon-details-title`,3,`openChange`,`headerIcon`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-details-title`,1,`panel-title`],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[`pageDescription`,`Browse Lucide icons, filter official categories, and customize an Angular example.`],[`title`,`Icon API and catalog guide`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`filter-bar`],[`bx-button`,``,`type`,`button`,`aria-controls`,`icon-filters-panel`,3,`click`,`variant`,`color`],[`name`,`sliders-horizontal`,`size`,`20`],[`ariaLabel`,`Search icons`,`placeholder`,`Search icons by name…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`catalog-summary`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[`aria-label`,`Icon results`,3,`items`,`trackBy`,`config`,`measurementRevision`,`scrollContainer`],[3,`bxVirtualItem`],[`role`,`status`,1,`no-results`],[1,`catalog-more`],[3,`container`,`boundary`,`suppressed`],[1,`category-heading`],[`name`,`folder`,`size`,`20`],[3,`selectedChange`,`label`,`config`,`selected`,`deselectable`],[1,`icon-preview`],[3,`name`,`size`,`strokeWidth`,`color`,`bgColor`],[`for`,`detail-size`],[`id`,`detail-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`128`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`detail-stroke`],[`id`,`detail-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`label`,`Themed color`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Icon background`,3,`ngModelChange`,`ngModel`],[1,`code-heading`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`aria-label`,`Copy icon code`,3,`click`],[`name`,`copy`,`size`,`16`],[`tabindex`,`0`,`aria-label`,`Selected icon Angular example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`role`,`status`,1,`copy-status`],[1,`icon-metadata`],[`path`,`projects/playground/src/app/components/screens/icon-catalog/README.md`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){if(n&1&&(U(0,`bx-side-panel-layout`,8)(1,`bx-side-panel`,9,0),xe(`openChange`,function(l){return e.panelChanged(`filters`,l)}),U(3,`h2`,10),Te$1(4,`Filters`),H(),U(5,`div`,11)(6,`h3`),Te$1(7,`Customize catalog`),H(),U(8,`div`,12)(9,`label`,13),Te$1(10,`Icon size `),U(11,`output`,13),Te$1(12),H()(),Fe$1(13,`bx-icon`,14),H(),U(14,`input`,15),zR(),xe(`ngModelChange`,function(l){return e.selectedSize.set(l)}),H(),U(15,`div`,12)(16,`label`,16),Te$1(17,`Stroke width `),U(18,`output`,16),Te$1(19),H()(),Fe$1(20,`bx-icon`,17),H(),U(21,`input`,18),zR(),xe(`ngModelChange`,function(l){return e.selectedStrokeWidth.set(l)}),H(),U(22,`bx-collapsible`,19),hS(23,$e,3,1,`ng-template`,null,1,kb),U(25,`div`,20),jn(26,Ue,1,4,`bx-chip`,21,je),H(),U(28,`p`,22),Te$1(29,`Choose one category to narrow the results. Reset all restores the complete catalog.`),H()()(),U(30,`div`,23)(31,`button`,24),xe(`click`,function(){return e.resetFilters()}),Te$1(32,`Reset all`),H()()(),U(33,`bx-side-panel`,25,2),xe(`openChange`,function(l){return e.panelChanged(`details`,l)}),U(35,`h2`,26),Te$1(36),H(),ae(37,Ye,35,19,`div`,11),U(38,`div`,23)(39,`button`,24),xe(`click`,function(){return e.resetCustomization()}),Te$1(40,`Reset customization`),H()()(),U(41,`div`,27,3)(43,`div`,28,4)(45,`bx-page-container`,29),Fe$1(46,`bx-collapsible`,30),hS(47,Ke,1,0,`ng-template`,null,5,kb),U(49,`div`,31)(50,`button`,32),xe(`click`,function(){return e.activePanel.set(e.activePanel()===`filters`?null:`filters`)}),Fe$1(51,`bx-icon`,33),Te$1(52,` Filters `),H(),U(53,`bx-search-input`,34),zR(),xe(`ngModelChange`,function(l){return e.search(l??``)}),H()(),U(54,`p`,35),Te$1(55),H(),U(56,`div`,36,6),xe(`scrollEnd`,function(){return e.renderMore()}),U(58,`bx-virtual-collection`,37,7),hS(60,Qe,6,9,`ng-template`,38),H(),ae(61,Je,2,0,`p`,39),ae(62,qe,3,0,`div`,40),H()()(),Fe$1(63,`app-scroll-to-top`,41),H()()),n&2){let r,l=ns(2),x=ns(24),Ae=ns(34),F=ns(44),De=ns(48),Re=ns(57),We=ns(59);k$1(),oe(`headerIcon`,j1(43,He))(`breakpoints`,e.filtersPanelBreakpoints)(`resizable`,!e.isOnSmallerScreen())(`width`,e.isOnSmallerScreen()?420:360)(`open`,e.activePanel()===`filters`),k$1(11),mr(``,e.selectedSize(),` px`),k$1(2),oe(`ngModel`,e.selectedSize()),qR(),k$1(5),je$1(e.selectedStrokeWidth()),k$1(2),oe(`ngModel`,e.selectedStrokeWidth()),qR(),k$1(),oe(`headingLevel`,3)(`expanded`,!0)(`titleTemplate`,x),k$1(4),zn(e.categories),k$1(7),oe(`headerIcon`,j1(44,Be))(`width`,420)(`open`,e.activePanel()===`details`),k$1(3),je$1(e.selectedIcon()??`Icon details`),k$1(),se((r=e.selectedIcon())?37:-1,r),k$1(9),oe(`headingLevel`,2)(`contentTemplate`,De),k$1(4),oe(`variant`,e.hasActiveFilters()?`filled`:`tonal`)(`color`,e.hasActiveFilters()?`accent`:`grayscale`),$(`aria-expanded`,e.activePanel()===`filters`),k$1(3),oe(`ngModel`,e.searchTerm()),qR(),k$1(2),NS(`Showing `,e.visibleIcons().length,` of `,e.filteredIcons().length,` icons`),k$1(),oe(`infiniteScrollContainer`,e.scrollContainer())(`infiniteScrollDisabled`,!e.hasMore()||!e.scrollContainer())(`infiniteScrollRevision`,e.visibleIcons())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,400),k$1(2),we(`--%NS%catalog-icon-size`,e.selectedSize(),`px`),oe(`items`,e.visibleIcons())(`trackBy`,e.iconKey)(`config`,e.virtualConfig())(`measurementRevision`,e.selectedSize())(`scrollContainer`,F),k$1(2),oe(`bxVirtualItem`,We),k$1(),se(e.filteredIcons().length?-1:61),k$1(),se(e.hasMore()?62:-1),k$1(),oe(`container`,F)(`boundary`,Re)(`suppressed`,e.activePanel()===`filters`&&l.currentLayoutMode()===`overlay`||e.activePanel()===`details`&&Ae.currentLayoutMode()===`overlay`)}},dependencies:[xM,ht,vn,qte,rk,l2,Vte,a2,qe$1,oo,Z$1,k,Yc,mM,CM,wM,SM,_M,Jc,Xc,Zc,Qn,ao,Fs,Z],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  min-block-size: 0;
  block-size: 100%;
}
.filter-bar[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: stretch;
}
.filter-bar[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  align-self: stretch;
  min-block-size: 2.5rem;
}
.filter-bar[_ngcontent-%COMP%]   bx-search-input[_ngcontent-%COMP%] {
  flex: 1 1 16rem;
  min-inline-size: 0;
}
.catalog-summary[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  margin-block: 1rem;
}
.icon-card[_ngcontent-%COMP%] {
  min-block-size: calc(var(--%NS%catalog-icon-size, 24px) + 5rem);
  block-size: auto;
  padding: 0.75rem;
  color: var(--%NS%bx-text-primary);
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 72%, transparent);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  cursor: pointer;
}
.icon-card-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-inline-size: 0;
  gap: 0.5rem;
}
.icon-card.selected[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-brand);
  box-shadow: inset 0 0 0 1px var(--%NS%bx-border-brand);
}
.icon-card[_ngcontent-%COMP%]:hover, 
.icon-card.selected[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-surface-alt);
}
.icon-card[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.icon-wrapper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-block-size: calc(var(--%NS%catalog-icon-size, 24px) + 1rem);
}
.icon-name[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  overflow-wrap: anywhere;
}
.no-results[_ngcontent-%COMP%] {
  grid-column: 1/-1;
  padding: 2rem;
  text-align: center;
}
.catalog-more[_ngcontent-%COMP%] {
  padding-block: 1.5rem;
}
.catalog-documentation[_ngcontent-%COMP%] {
  margin-block-end: 1.5rem;
}
.panel-title[_ngcontent-%COMP%] {
  font: inherit;
  margin: 0;
  overflow-wrap: anywhere;
}
.panel-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.25rem;
  min-inline-size: 0;
}
.panel-controls[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.panel-controls[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.panel-controls[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.panel-controls[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {
  inline-size: 100%;
  margin: 0;
}
.panel-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}
.panel-controls[_ngcontent-%COMP%]   output[_ngcontent-%COMP%], 
.panel-controls[_ngcontent-%COMP%]   .control-hint[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.panel-controls[_ngcontent-%COMP%]   .playground-code-block[_ngcontent-%COMP%] {
  margin: 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.slider-heading[_ngcontent-%COMP%], 
.code-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.slider-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
.code-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  flex: 1;
}
.icon-preview[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-block-size: 12rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
}
.icon-preview.preview-background[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-surface-alt);
}
.copy-status[_ngcontent-%COMP%] {
  min-block-size: 1.5em;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.icon-metadata[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.5rem;
  margin: 0;
}
.icon-metadata[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {
  font-weight: 600;
}
.icon-metadata[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {
  margin: 0 0 0.75rem;
  overflow-wrap: anywhere;
  color: var(--%NS%bx-text-secondary);
}
@media (forced-colors: active) {
  .icon-card.selected[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
    outline-offset: -3px;
  }
}
.catalog-layout[_ngcontent-%COMP%], 
.catalog-region[_ngcontent-%COMP%] {
  block-size: 100%;
  min-block-size: 0;
  min-inline-size: 0;
}
.catalog-region[_ngcontent-%COMP%] {
  position: relative;
  outline: none;
}
.catalog-scroll[_ngcontent-%COMP%] {
  block-size: 100%;
  overflow: auto;
  overflow-anchor: none;
  overscroll-behavior: contain;
  outline: none;
}
.slider-heading[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--%NS%bx-text-secondary);
  border-radius: 0.25rem;
}
.slider-heading[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0.25rem;
}
.category-heading[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}
.category-options[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 8rem), 1fr));
  gap: 0.5rem;
  margin-block-end: 1rem;
}
.category-options[_ngcontent-%COMP%]   bx-chip[_ngcontent-%COMP%] {
  --%NS%bx-chip-radius: 0.75rem;
  display: grid;
}`]})};export{Le as IconCatalog};