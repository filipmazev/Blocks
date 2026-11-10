import{t as F}from"./chunk-BV0QAgWi.js";import{K as v,a as Qn,j as Oe$1,k as S,p as ar,w as rr}from"./main-SAGFAVWF.js";import{n as ht}from"./chunk-BGaRK6pN.js";import{n as Z,s as qe}from"./chunk-ufdcSnea.js";import{A as EF,Ba as yn,Br as g,Bt as P,Ct as Me,Di as nn,Ei as ne,Et as Mt,Hi as pe,Ia as yD,Ii as on,It as Oe$2,Jn as _se,K as HM,Ka as ze$1,Ki as qM,Ma as wn,Mr as ee,N as Ese,Na as xe,Ni as oR,Ot as NM,Pi as od,Pr as ep,Ri as p,S as Cse,Sn as WC,Ta as vi,Tt as Mn,Wa as zM,Z as Ia,Zi as qr,da as te,ii as jM,ji as oO,la as st,mn as VM,ni as id,nn as St,o as A,pa as tn,pi as ld,qa as zne,r as $ne,rr as at,sa as sd,si as k,t as $,tt as In,u as B,v as C,va as ua,w as D,wi as nR,x as Ce,xi as me,xn as W,y as CF,ya as ue,yn as Vt}from"./chunk-BR06ksVJ.js";import{t as r}from"./chunk-DFgPOoGa.js";var I={size:24,strokeWidth:1.5,categories:[]};var Oe={color:`neutral`,variant:`tonal`};var ze={color:`accent`,variant:`filled`};var ke=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Text`,value:`text-primary`},{label:`Secondary text`,value:`text-secondary`},{label:`Success`,value:`text-success`},{label:`Information`,value:`text-info`},{label:`Warning`,value:`text-warn`},{label:`Danger`,value:`text-danger`}];var M=class s{initial=I;static ɵfac=function(t){return new(t||s)};static ɵprov=ee({token:s,factory:s.ɵfac})};var Ae=[`results`];var Re=[`catalogScroll`];var We=()=>({name:`sliders-horizontal`,color:`accent`,bgColor:`auto`});var Ve=()=>({name:`info`,color:`accent`,bgColor:`auto`});var Fe=(s,n)=>n.id;function Ge(s,n){if(s&1&&(A(0,`span`,42),Oe$2(1,`bx-icon`,43),me(2),P()),s&2){let t=n.$implicit;k(2),Me(t)}}function He(s,n){if(s&1){let t=tn();A(0,`bx-chip`,44),ue(`selectedChange`,function(r){let c=st(t).$implicit,k=C();return at(k.toggleCategory(c.id,r))}),P()}if(s&2){let t=n.$implicit,e=C();B(`label`,t.label)(`config`,e.selectedCategoryIds().has(t.id)?e.selectedCategoryChipConfig:e.categoryChipConfig)(`selected`,e.selectedCategoryIds().has(t.id))(`deselectable`,!0)}}function Be(s,n){if(s&1){let t=tn();A(0,`div`,11)(1,`div`,45),Oe$2(2,`bx-icon`,46),P(),A(3,`label`,47),me(4,`Size `),A(5,`output`,47),me(6),P()(),A(7,`input`,48),nR(),ue(`ngModelChange`,function(r){st(t);let c=C();return at(c.customize({size:r}))}),P(),A(8,`label`,49),me(9,`Stroke width `),A(10,`output`,49),me(11),P()(),A(12,`input`,50),nR(),ue(`ngModelChange`,function(r){st(t);let c=C();return at(c.customize({strokeWidth:r}))}),P(),A(13,`bx-select`,51),nR(),ue(`ngModelChange`,function(r){st(t);let c=C();return at(c.customize({color:r}))}),P(),A(14,`bx-slide-toggle`,52),nR(),ue(`ngModelChange`,function(r){st(t);let c=C();return at(c.customize({background:r}))}),P(),A(15,`div`,53)(16,`h3`),me(17,`Angular code`),P(),A(18,`button`,54),ue(`click`,function(){st(t);let r=C();return at(r.copyCode())}),Oe$2(19,`bx-icon`,55),me(20,` Copy `),P()(),A(21,`pre`,56),Oe$2(22,`code`,57),P(),A(23,`p`,58),me(24),P(),A(25,`dl`,59)(26,`dt`),me(27,`Identifier`),P(),A(28,`dd`)(29,`code`),me(30),P()(),A(31,`dt`),me(32,`Categories`),P(),A(33,`dd`),me(34),P()()()}if(s&2){let t=n,e=C();k(),pe(`preview-background`,e.details().background),k(),B(`name`,t)(`size`,e.details().size)(`strokeWidth`,e.details().strokeWidth)(`color`,e.details().color)(`bgColor`,e.details().background?`auto`:void 0),k(4),wn(``,e.details().size,` px`),k(),B(`ngModel`,e.details().size),oR(),k(4),Me(e.details().strokeWidth),k(),B(`ngModel`,e.details().strokeWidth),oR(),k(),B(`clearable`,!1)(`options`,e.colors)(`ngModel`,e.details().color),oR(),k(),B(`ngModel`,e.details().background),oR(),k(8),B(`highlight`,e.selectedCode()),k(2),Me(e.copyStatus()),k(6),Me(t),k(4),Me(e.selectedCategoryLabels().join(`, `))}}function je(s,n){s&1&&Oe$2(0,`app-readme`,60)}function $e(s,n){if(s&1){let t=tn();A(0,`button`,61),ue(`click`,function(){let r=st(t).$implicit,c=C();return at(c.selectIcon(r))}),A(1,`span`,62)(2,`span`,63),Oe$2(3,`bx-icon`,64),P(),A(4,`span`,65),me(5),P()()()}if(s&2){let t=n.$implicit,e=C();pe(`selected`,e.highlightedIcon()===t),B(`surfaceEffects`,!1),W(`aria-pressed`,e.highlightedIcon()===t)(`aria-label`,`Customize `+t),k(3),B(`name`,t)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),k(2),Me(t)}}function Ue(s,n){s&1&&(A(0,`p`,39),me(1,`No icons match these filters. Try another name, choose another category, or reset the filters.`),P())}function Ye(s,n){if(s&1){let t=tn();A(0,`div`,40)(1,`button`,24),ue(`click`,function(){st(t);let r=C();return at(r.renderMore())}),me(2,`Show more icons`),P()()}}var Ne=class s{clipboard=p(v);themeStudioService=p(Oe$1);iconCatalogPreferencesService=p(M);windowDimensionsService=p(Ia);allIcons=Cse;batchSize=72;categoryLabels=new Map(Ese.map(n=>[n.id,n.label]));customizations=D(/* @__PURE__ */ new Map);results=nn(`results`);catalogScroll=nn(`catalogScroll`);filtersPanelBreakpoints={"2xl":`push`};iconKey=n=>n;isOnSmallerScreen=g(()=>this.windowDimensionsService.isBelow(`2xl`));virtualConfig=g(()=>({layout:`grid`,minColumnWidth:`7rem`,estimatedRowHeight:this.selectedSize()+80,overscan:800}));categoryChipConfig=Oe;selectedCategoryChipConfig=ze;colors=ke;categories=Ese;activePanel=D(null);selectedIcon=D(null);scrollContainer=D(void 0);searchTerm=D(``);copyStatus=D(``);selectedSize=D(this.iconCatalogPreferencesService.initial.size);selectedStrokeWidth=D(this.iconCatalogPreferencesService.initial.strokeWidth);selectedCategories=D(this.iconCatalogPreferencesService.initial.categories);selectedCategoryIds=g(()=>new Set(this.selectedCategories()));highlightedIcon=g(()=>this.activePanel()===`details`?this.selectedIcon():null);filteredIcons=g(()=>{let n=this.searchTerm().toLowerCase().trim().split(/[\s_-]+/).filter(Boolean),t=this.selectedCategoryIds();return this.allIcons.filter(e=>n.every(r=>e.includes(r))&&(!t.size||_se[e].some(r=>t.has(r))))});renderedCount=ua({source:this.filteredIcons,computation:()=>this.batchSize});hasActiveFilters=g(()=>this.selectedCategories().length>0);visibleIcons=g(()=>this.filteredIcons().slice(0,this.renderedCount()));hasMore=g(()=>this.visibleIcons().length<this.filteredIcons().length);details=g(()=>{let n=this.selectedIcon();return(n?this.customizations().get(n):void 0)??this.initialCustomization()});selectedCategoryLabels=g(()=>{let n=this.selectedIcon();return n?_se[n].map(t=>this.categoryLabels.get(t)??t):[]});selectedCode=g(()=>{let n=this.details(),t=[`name="${this.selectedIcon()??`blocks`}"`];return n.size!==24&&t.push(`[size]="${n.size}"`),n.strokeWidth!==1.5&&t.push(`[strokeWidth]="${n.strokeWidth}"`),t.push(`color="${n.color}"`),n.background&&t.push(`bgColor="auto"`),`<bx-icon ${t.join(` `)} />`});constructor(){xe(()=>{this.themeStudioService.open()&&this.activePanel.set(null)}),ze$1(()=>{this.scrollContainer.set(this.catalogScroll()?.nativeElement)}),xe(()=>{this.selectedCode(),this.copyStatus.set(``)})}search(n){this.searchTerm.set(n),this.resetScroll()}filterCategories(n){this.selectedCategories.set(n?.slice(0,1)??[]),this.resetScroll()}toggleCategory(n,t){this.filterCategories(t?[n]:this.selectedCategories().filter(e=>e!==n))}renderMore(){this.hasMore()&&this.renderedCount.update(n=>Math.min(n+this.batchSize,this.filteredIcons().length))}selectIcon(n){this.customizations().has(n)||this.customizations.update(t=>new Map(t).set(n,this.initialCustomization())),this.selectedIcon.set(n),this.panelChanged(`details`,!0)}panelChanged(n,t){t?(this.themeStudioService.open.set(!1),this.activePanel.set(n)):this.activePanel()===n&&this.activePanel.set(null)}customize(n){let t=this.selectedIcon();t&&this.customizations.update(e=>new Map(e).set(t,r(r({},this.details()),n)))}resetCustomization(){this.customize(this.initialCustomization())}resetFilters(){this.selectedSize.set(I.size),this.selectedStrokeWidth.set(I.strokeWidth),this.selectedCategories.set([]),this.resetScroll()}copyCode(){this.copyStatus.set(this.clipboard.copy(this.selectedCode())?`Copied icon code.`:`Copy failed. Select the code and copy it manually.`)}initialCustomization(){return{size:Math.max(64,this.selectedSize()),strokeWidth:this.selectedStrokeWidth(),color:`accent`,background:!0}}resetScroll(){let n=this.scrollContainer(),t=this.results()?.nativeElement;if(!n||!t)return;let r=n===n.ownerDocument.scrollingElement?0:n.getBoundingClientRect().top+n.clientTop,c=t.getBoundingClientRect().top-r;c<0&&n.scrollTo({top:Math.max(0,n.scrollTop+c),behavior:`instant`})}static ɵfac=function(t){return new(t||s)};static ɵcmp=$({type:s,selectors:[[`app-icon-catalog`]],viewQuery:function(t,e){t&1&&yn(e.results,Ae,5)(e.catalogScroll,Re,5),t&2&&St(2)},features:[Vt([M])],decls:64,vars:45,consts:[[`filtersPanel`,``],[`categoryHeading`,``],[`detailsPanel`,``],[`catalogRegion`,``],[`catalogScroll`,``],[`documentation`,``],[`results`,``],[`iconRows`,``],[1,`catalog-layout`],[`placement`,`left`,`panelId`,`icon-filters-panel`,`ariaLabel`,`Icon filters`,`labelledBy`,`icon-filters-title`,3,`openChange`,`headerIcon`,`breakpoints`,`resizable`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-filters-title`,1,`panel-title`],[1,`panel-controls`],[1,`slider-heading`],[`for`,`catalog-size`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog icon size`,`bxTooltip`,`Changes every icon in the catalog. Inspector settings are separate.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`64`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`catalog-stroke`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog stroke width`,`bxTooltip`,`Changes the SVG stroke width throughout the catalog, independently of icon size.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`title`,`Category`,1,`category-section`,3,`headingLevel`,`expanded`,`titleTemplate`],[`role`,`group`,`aria-label`,`Filter icons by category`,1,`category-options`],[3,`label`,`config`,`selected`,`deselectable`],[1,`control-hint`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`placement`,`right`,`ariaLabel`,`Icon details`,`labelledBy`,`icon-details-title`,3,`openChange`,`headerIcon`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-details-title`,1,`panel-title`],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[`pageDescription`,`Browse Lucide icons, filter official categories, and customize an Angular example.`],[`title`,`Icon API and catalog guide`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`filter-bar`],[`bx-button`,``,`type`,`button`,`aria-controls`,`icon-filters-panel`,3,`click`,`variant`,`color`],[`name`,`sliders-horizontal`,`size`,`20`],[`ariaLabel`,`Search icons`,`placeholder`,`Search icons by name…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`catalog-summary`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[`aria-label`,`Icon results`,3,`items`,`trackBy`,`config`,`measurementRevision`,`scrollContainer`],[3,`bxVirtualItem`],[`role`,`status`,1,`no-results`],[1,`catalog-more`],[3,`container`,`boundary`,`suppressed`],[1,`category-heading`],[`name`,`folder`,`size`,`20`],[3,`selectedChange`,`label`,`config`,`selected`,`deselectable`],[1,`icon-preview`],[3,`name`,`size`,`strokeWidth`,`color`,`bgColor`],[`for`,`detail-size`],[`id`,`detail-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`128`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`detail-stroke`],[`id`,`detail-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`label`,`Themed color`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Icon background`,3,`ngModelChange`,`ngModel`],[1,`code-heading`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`aria-label`,`Copy icon code`,3,`click`],[`name`,`copy`,`size`,`16`],[`tabindex`,`0`,`aria-label`,`Selected icon Angular example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`role`,`status`,1,`copy-status`],[1,`icon-metadata`],[`path`,`projects/playground/src/app/components/screens/icon-catalog/README.md`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(t,e){if(t&1&&(A(0,`bx-side-panel-layout`,8)(1,`bx-side-panel`,9,0),ue(`openChange`,function(c){return e.panelChanged(`filters`,c)}),A(3,`h2`,10),me(4,`Filters`),P(),A(5,`div`,11)(6,`h3`),me(7,`Customize catalog`),P(),A(8,`div`,12)(9,`label`,13),me(10,`Icon size `),A(11,`output`,13),me(12),P()(),Oe$2(13,`bx-icon`,14),P(),A(14,`input`,15),nR(),ue(`ngModelChange`,function(c){return e.selectedSize.set(c)}),P(),A(15,`div`,12)(16,`label`,16),me(17,`Stroke width `),A(18,`output`,16),me(19),P()(),Oe$2(20,`bx-icon`,17),P(),A(21,`input`,18),nR(),ue(`ngModelChange`,function(c){return e.selectedStrokeWidth.set(c)}),P(),A(22,`bx-collapsible`,19),ep(23,Ge,3,1,`ng-template`,null,1,qr),A(25,`div`,20),Mn(26,He,1,4,`bx-chip`,21,Fe),P(),A(28,`p`,22),me(29,`Choose one category to narrow the results. Reset all restores the complete catalog.`),P()()(),A(30,`div`,23)(31,`button`,24),ue(`click`,function(){return e.resetFilters()}),me(32,`Reset all`),P()()(),A(33,`bx-side-panel`,25,2),ue(`openChange`,function(c){return e.panelChanged(`details`,c)}),A(35,`h2`,26),me(36),P(),te(37,Be,35,19,`div`,11),A(38,`div`,23)(39,`button`,24),ue(`click`,function(){return e.resetCustomization()}),me(40,`Reset customization`),P()()(),A(41,`div`,27,3)(43,`div`,28,4)(45,`bx-page-container`,29),Oe$2(46,`bx-collapsible`,30),ep(47,je,1,0,`ng-template`,null,5,qr),A(49,`div`,31)(50,`button`,32),ue(`click`,function(){return e.panelChanged(`filters`,e.activePanel()!==`filters`)}),Oe$2(51,`bx-icon`,33),me(52,` Filters `),P(),A(53,`bx-search-input`,34),nR(),ue(`ngModelChange`,function(c){return e.search(c??``)}),P()(),A(54,`p`,35),me(55),P(),A(56,`div`,36,6),ue(`scrollEnd`,function(){return e.renderMore()}),A(58,`bx-virtual-collection`,37,7),ep(60,$e,6,9,`ng-template`,38),P(),te(61,Ue,2,0,`p`,39),te(62,Ye,3,0,`div`,40),P()()(),Oe$2(63,`app-scroll-to-top`,41),P()()),t&2){let r,c=Mt(2),k$1=Mt(24),Ee=Mt(34),F=Mt(44),Te=Mt(48),we=Mt(57),Le=Mt(59);k(),B(`headerIcon`,oO(43,We))(`breakpoints`,e.filtersPanelBreakpoints)(`resizable`,!e.isOnSmallerScreen())(`width`,e.isOnSmallerScreen()?420:360)(`open`,e.activePanel()===`filters`),k(11),wn(``,e.selectedSize(),` px`),k(2),B(`ngModel`,e.selectedSize()),oR(),k(5),Me(e.selectedStrokeWidth()),k(2),B(`ngModel`,e.selectedStrokeWidth()),oR(),k(),B(`headingLevel`,3)(`expanded`,!0)(`titleTemplate`,k$1),k(4),In(e.categories),k(7),B(`headerIcon`,oO(44,Ve))(`width`,420)(`open`,e.activePanel()===`details`),k(3),Me(e.selectedIcon()??`Icon details`),k(),ne((r=e.selectedIcon())?37:-1,r),k(9),B(`headingLevel`,2)(`contentTemplate`,Te),k(4),B(`variant`,e.hasActiveFilters()?`filled`:`tonal`)(`color`,e.hasActiveFilters()?`accent`:`grayscale`),W(`aria-expanded`,e.activePanel()===`filters`),k(3),B(`ngModel`,e.searchTerm()),oR(),k(2),WC(`Showing `,e.visibleIcons().length,` of `,e.filteredIcons().length,` icons`),k(),B(`infiniteScrollContainer`,e.scrollContainer())(`infiniteScrollDisabled`,!e.hasMore()||!e.scrollContainer())(`infiniteScrollRevision`,e.visibleIcons())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,400),k(2),Ce(`--%NS%catalog-icon-size`,e.selectedSize(),`px`),B(`items`,e.visibleIcons())(`trackBy`,e.iconKey)(`config`,e.virtualConfig())(`measurementRevision`,e.selectedSize())(`scrollContainer`,F),k(2),B(`bxVirtualItem`,Le),k(),ne(e.filteredIcons().length?-1:61),k(),ne(e.hasMore()?62:-1),k(),B(`container`,F)(`boundary`,we)(`suppressed`,e.activePanel()===`filters`&&c.currentLayoutMode()===`overlay`||e.activePanel()===`details`&&Ee.currentLayoutMode()===`overlay`)}},dependencies:[jM,ht,on,$ne,yD,EF,zne,CF,qe,rr,Z,S,od,NM,zM,VM,HM,qM,ld,sd,id,Qn,ar,vi,F],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  min-block-size: 0;
  block-size: 100%;
}
.filter-bar[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-4, 1rem);
  align-items: stretch;
}
.filter-bar[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  align-self: stretch;
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
}
.filter-bar[_ngcontent-%COMP%]   bx-search-input[_ngcontent-%COMP%] {
  flex: 1 1 16rem;
  min-inline-size: 0;
}
.catalog-summary[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  margin-block: var(--%NS%bx-space-4, 1rem);
}
.icon-card[_ngcontent-%COMP%] {
  min-block-size: calc(var(--%NS%catalog-icon-size, 24px) + 5rem);
  block-size: auto;
  padding: var(--%NS%bx-space-3, 0.75rem);
  color: var(--%NS%bx-text-primary);
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 72%, transparent);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  cursor: pointer;
}
.icon-card-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-inline-size: 0;
  gap: var(--%NS%bx-space-2, 0.5rem);
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
  padding: var(--%NS%bx-space-8, 2rem);
  text-align: center;
}
.catalog-more[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-6, 1.5rem);
}
.catalog-documentation[_ngcontent-%COMP%] {
  margin-block-end: var(--%NS%bx-space-6, 1.5rem);
}
.panel-title[_ngcontent-%COMP%] {
  font: inherit;
  margin: 0;
  overflow-wrap: anywhere;
}
.panel-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  padding: var(--%NS%bx-space-1, 0.25rem);
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
  gap: var(--%NS%bx-space-2, 0.5rem);
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
  gap: var(--%NS%bx-space-2, 0.5rem);
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
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
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
  gap: var(--%NS%bx-space-2, 0.5rem);
  margin: 0;
}
.icon-metadata[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {
  font-weight: 600;
}
.icon-metadata[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {
  margin: 0 0 var(--%NS%bx-space-3, 0.75rem);
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
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
}
.slider-heading[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: var(--%NS%bx-space-1, 0.25rem);
}
.category-heading[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.category-options[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 8rem), 1fr));
  gap: var(--%NS%bx-space-2, 0.5rem);
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}
.category-options[_ngcontent-%COMP%]   bx-chip[_ngcontent-%COMP%] {
  --%NS%bx-chip-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  display: grid;
}`]})};export{Ne as IconCatalog};