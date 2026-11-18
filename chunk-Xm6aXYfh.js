import{t as F}from"./chunk-B42Tvkqt.js";import{t as v}from"./chunk-CaUpi_rr.js";import{a as S,b as Oe$1}from"./main-B5BGPZDX.js";import{n as ht}from"./chunk-DErdAUDp.js";import{E as jn,L as xe,M as qo,a as At,n as $n}from"./chunk-HfEiycvf.js";import{$ as qs,J as nl,K as ll,N as al,W as jn$1,Y as ol,a as Bn,c as Fn,d as Hn,tt as sl,v as Pt}from"./chunk-DyZGtlM9.js";import{$a as tr,$i as mN,$n as YC,Ci as ik,Cn as TA,Cr as b,Dn as U,Fo as yA,Gn as Wy,Gt as Nd,Hi as lb,K as Fr,Ki as lre,Kr as ed,La as rr,Li as ka,Lr as db,Nn as V,Oi as jT,Or as bo,Pt as ME,Qi as mM,Rr as dd,Sr as al$1,Ta as pre,Ua as sk,Va as sb,Vo as z,Xa as td,Ya as tb,Yr as er,ao as ub,ba as pM,c as $o,et as Go,fa as oZ,go as vo,gr as aZ,ia as nb,ja as qs$1,kr as br,lo as ure,mr as aA,o as $e$1,pa as ob,u as $s,wi as il,xa as pN,zi as kz}from"./chunk-DflWScik.js";import{t as r}from"./chunk-C9yOwMO6.js";var I={size:24,strokeWidth:1.5,categories:[]};var Oe={color:`neutral`,variant:`tonal`};var ze={color:`accent`,variant:`filled`};var ke=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Text`,value:`text-primary`},{label:`Secondary text`,value:`text-secondary`},{label:`Success`,value:`text-success`},{label:`Information`,value:`text-info`},{label:`Warning`,value:`text-warn`},{label:`Danger`,value:`text-danger`}];var M=class s{initial=I;static ɵfac=function(t){return new(t||s)};static ɵprov=V({token:s,factory:s.ɵfac})};var Ae=[`results`];var Re=[`catalogScroll`];var We=()=>({name:`sliders-horizontal`,color:`accent`,bgColor:`auto`});var Ve=()=>({name:`info`,color:`accent`,bgColor:`auto`});var Fe=(s,n)=>n.id;function Ge(s,n){if(s&1&&(bo(0,`span`,42),td(1,`bx-icon`,43),aA(2),Go()),s&2){let t=n.$implicit;qs$1(2),sk(t)}}function He(s,n){if(s&1){let t=lb();bo(0,`bx-chip`,44),br(`selectedChange`,function(r){let c=il(t).$implicit,k=$s();return al$1(k.toggleCategory(c.id,r))}),Go()}if(s&2){let t=n.$implicit,e=$s();$o(`label`,t.label)(`config`,e.selectedCategoryIds().has(t.id)?e.selectedCategoryChipConfig:e.categoryChipConfig)(`selected`,e.selectedCategoryIds().has(t.id))(`deselectable`,!0)}}function Be(s,n){if(s&1){let t=lb();bo(0,`div`,11)(1,`div`,45),td(2,`bx-icon`,46),Go(),bo(3,`label`,47),aA(4,`Size `),bo(5,`output`,47),aA(6),Go()(),bo(7,`input`,48),pM(),br(`ngModelChange`,function(r){il(t);let c=$s();return al$1(c.customize({size:r}))}),Go(),bo(8,`label`,49),aA(9,`Stroke width `),bo(10,`output`,49),aA(11),Go()(),bo(12,`input`,50),pM(),br(`ngModelChange`,function(r){il(t);let c=$s();return al$1(c.customize({strokeWidth:r}))}),Go(),bo(13,`bx-select`,51),pM(),br(`ngModelChange`,function(r){il(t);let c=$s();return al$1(c.customize({color:r}))}),Go(),bo(14,`bx-slide-toggle`,52),pM(),br(`ngModelChange`,function(r){il(t);let c=$s();return al$1(c.customize({background:r}))}),Go(),bo(15,`div`,53)(16,`h3`),aA(17,`Angular code`),Go(),bo(18,`button`,54),br(`click`,function(){il(t);let r=$s();return al$1(r.copyCode())}),td(19,`bx-icon`,55),aA(20,` Copy `),Go()(),bo(21,`pre`,56),td(22,`code`,57),Go(),bo(23,`p`,58),aA(24),Go(),bo(25,`dl`,59)(26,`dt`),aA(27,`Identifier`),Go(),bo(28,`dd`)(29,`code`),aA(30),Go()(),bo(31,`dt`),aA(32,`Categories`),Go(),bo(33,`dd`),aA(34),Go()()()}if(s&2){let t=n,e=$s();qs$1(),tr(`preview-background`,e.details().background),qs$1(),$o(`name`,t)(`size`,e.details().size)(`strokeWidth`,e.details().strokeWidth)(`color`,e.details().color)(`bgColor`,e.details().background?`auto`:void 0),qs$1(4),ub(``,e.details().size,` px`),qs$1(),$o(`ngModel`,e.details().size),mM(),qs$1(4),sk(e.details().strokeWidth),qs$1(),$o(`ngModel`,e.details().strokeWidth),mM(),qs$1(),$o(`clearable`,!1)(`options`,e.colors)(`ngModel`,e.details().color),mM(),qs$1(),$o(`ngModel`,e.details().background),mM(),qs$1(8),$o(`highlight`,e.selectedCode()),qs$1(2),sk(e.copyStatus()),qs$1(6),sk(t),qs$1(4),sk(e.selectedCategoryLabels().join(`, `))}}function je(s,n){s&1&&td(0,`app-readme`,60)}function $e(s,n){if(s&1){let t=lb();bo(0,`button`,61),br(`click`,function(){let r=il(t).$implicit,c=$s();return al$1(c.selectIcon(r))}),bo(1,`span`,62)(2,`span`,63),td(3,`bx-icon`,64),Go(),bo(4,`span`,65),aA(5),Go()()()}if(s&2){let t=n.$implicit,e=$s();tr(`selected`,e.highlightedIcon()===t),$o(`surfaceEffects`,!1),vo(`aria-pressed`,e.highlightedIcon()===t)(`aria-label`,`Customize `+t),qs$1(3),$o(`name`,t)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),qs$1(2),sk(t)}}function Ue(s,n){s&1&&(bo(0,`p`,39),aA(1,`No icons match these filters. Try another name, choose another category, or reset the filters.`),Go())}function Ye(s,n){if(s&1){let t=lb();bo(0,`div`,40)(1,`button`,24),br(`click`,function(){il(t);let r=$s();return al$1(r.renderMore())}),aA(2,`Show more icons`),Go()()}}var Ne=class s{clipboard=b(v);themeStudioService=b(Oe$1);iconCatalogPreferencesService=b(M);windowDimensionsService=b(Nd);allIcons=lre;batchSize=72;categoryLabels=new Map(ure.map(n=>[n.id,n.label]));customizations=z(/* @__PURE__ */ new Map);results=kz(`results`);catalogScroll=kz(`catalogScroll`);filtersPanelBreakpoints={"2xl":`push`};iconKey=n=>n;isOnSmallerScreen=U(()=>this.windowDimensionsService.isBelow(`2xl`));virtualConfig=U(()=>({layout:`grid`,minColumnWidth:`7rem`,estimatedRowHeight:this.selectedSize()+80,overscan:800}));categoryChipConfig=Oe;selectedCategoryChipConfig=ze;colors=ke;categories=ure;activePanel=z(null);selectedIcon=z(null);scrollContainer=z(void 0);searchTerm=z(``);copyStatus=z(``);selectedSize=z(this.iconCatalogPreferencesService.initial.size);selectedStrokeWidth=z(this.iconCatalogPreferencesService.initial.strokeWidth);selectedCategories=z(this.iconCatalogPreferencesService.initial.categories);selectedCategoryIds=U(()=>new Set(this.selectedCategories()));highlightedIcon=U(()=>this.activePanel()===`details`?this.selectedIcon():null);filteredIcons=U(()=>{let n=this.searchTerm().toLowerCase().trim().split(/[\s_-]+/).filter(Boolean),t=this.selectedCategoryIds();return this.allIcons.filter(e=>n.every(r=>e.includes(r))&&(!t.size||pre[e].some(r=>t.has(r))))});renderedCount=dd({source:this.filteredIcons,computation:()=>this.batchSize});hasActiveFilters=U(()=>this.selectedCategories().length>0);visibleIcons=U(()=>this.filteredIcons().slice(0,this.renderedCount()));hasMore=U(()=>this.visibleIcons().length<this.filteredIcons().length);details=U(()=>{let n=this.selectedIcon();return(n?this.customizations().get(n):void 0)??this.initialCustomization()});selectedCategoryLabels=U(()=>{let n=this.selectedIcon();return n?pre[n].map(t=>this.categoryLabels.get(t)??t):[]});selectedCode=U(()=>{let n=this.details(),t=[`name="${this.selectedIcon()??`blocks`}"`];return n.size!==24&&t.push(`[size]="${n.size}"`),n.strokeWidth!==1.5&&t.push(`[strokeWidth]="${n.strokeWidth}"`),t.push(`color="${n.color}"`),n.background&&t.push(`bgColor="auto"`),`<bx-icon ${t.join(` `)} />`});constructor(){$e$1(()=>{this.themeStudioService.open()&&this.activePanel.set(null)}),er(()=>{this.scrollContainer.set(this.catalogScroll()?.nativeElement)}),$e$1(()=>{this.selectedCode(),this.copyStatus.set(``)})}search(n){this.searchTerm.set(n),this.resetScroll()}filterCategories(n){this.selectedCategories.set(n?.slice(0,1)??[]),this.resetScroll()}toggleCategory(n,t){this.filterCategories(t?[n]:this.selectedCategories().filter(e=>e!==n))}renderMore(){this.hasMore()&&this.renderedCount.update(n=>Math.min(n+this.batchSize,this.filteredIcons().length))}selectIcon(n){this.customizations().has(n)||this.customizations.update(t=>new Map(t).set(n,this.initialCustomization())),this.selectedIcon.set(n),this.panelChanged(`details`,!0)}panelChanged(n,t){t?(this.themeStudioService.open.set(!1),this.activePanel.set(n)):this.activePanel()===n&&this.activePanel.set(null)}customize(n){let t=this.selectedIcon();t&&this.customizations.update(e=>new Map(e).set(t,r(r({},this.details()),n)))}resetCustomization(){this.customize(this.initialCustomization())}resetFilters(){this.selectedSize.set(I.size),this.selectedStrokeWidth.set(I.strokeWidth),this.selectedCategories.set([]),this.resetScroll()}copyCode(){this.copyStatus.set(this.clipboard.copy(this.selectedCode())?`Copied icon code.`:`Copy failed. Select the code and copy it manually.`)}initialCustomization(){return{size:Math.max(64,this.selectedSize()),strokeWidth:this.selectedStrokeWidth(),color:`accent`,background:!0}}resetScroll(){let n=this.scrollContainer(),t=this.results()?.nativeElement;if(!n||!t)return;let r=n===n.ownerDocument.scrollingElement?0:n.getBoundingClientRect().top+n.clientTop,c=t.getBoundingClientRect().top-r;c<0&&n.scrollTo({top:Math.max(0,n.scrollTop+c),behavior:`instant`})}static ɵfac=function(t){return new(t||s)};static ɵcmp=Fr({type:s,selectors:[[`app-icon-catalog`]],viewQuery:function(t,e){t&1&&Wy(e.results,Ae,5)(e.catalogScroll,Re,5),t&2&&db(2)},features:[rr([M])],decls:64,vars:45,consts:[[`filtersPanel`,``],[`categoryHeading`,``],[`detailsPanel`,``],[`catalogRegion`,``],[`catalogScroll`,``],[`documentation`,``],[`results`,``],[`iconRows`,``],[1,`catalog-layout`],[`placement`,`left`,`panelId`,`icon-filters-panel`,`ariaLabel`,`Icon filters`,`labelledBy`,`icon-filters-title`,3,`openChange`,`headerIcon`,`breakpoints`,`resizable`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-filters-title`,1,`panel-title`],[1,`panel-controls`],[1,`slider-heading`],[`for`,`catalog-size`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog icon size`,`bxTooltip`,`Changes every icon in the catalog. Inspector settings are separate.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`64`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`catalog-stroke`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog stroke width`,`bxTooltip`,`Changes the SVG stroke width throughout the catalog, independently of icon size.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`title`,`Category`,1,`category-section`,3,`headingLevel`,`expanded`,`titleTemplate`],[`role`,`group`,`aria-label`,`Filter icons by category`,1,`category-options`],[3,`label`,`config`,`selected`,`deselectable`],[1,`control-hint`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`placement`,`right`,`ariaLabel`,`Icon details`,`labelledBy`,`icon-details-title`,3,`openChange`,`headerIcon`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-details-title`,1,`panel-title`],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[`pageDescription`,`Browse Lucide icons, filter official categories, and customize an Angular example.`],[`title`,`Icon API and catalog guide`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`filter-bar`],[`bx-button`,``,`type`,`button`,`aria-controls`,`icon-filters-panel`,3,`click`,`variant`,`color`],[`name`,`sliders-horizontal`,`size`,`20`],[`ariaLabel`,`Search icons`,`placeholder`,`Search icons by name…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`catalog-summary`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[`aria-label`,`Icon results`,3,`items`,`trackBy`,`config`,`measurementRevision`,`scrollContainer`],[3,`bxVirtualItem`],[`role`,`status`,1,`no-results`],[1,`catalog-more`],[3,`container`,`boundary`,`suppressed`],[1,`category-heading`],[`name`,`folder`,`size`,`20`],[3,`selectedChange`,`label`,`config`,`selected`,`deselectable`],[1,`icon-preview`],[3,`name`,`size`,`strokeWidth`,`color`,`bgColor`],[`for`,`detail-size`],[`id`,`detail-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`128`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`detail-stroke`],[`id`,`detail-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`label`,`Themed color`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Icon background`,3,`ngModelChange`,`ngModel`],[1,`code-heading`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`aria-label`,`Copy icon code`,3,`click`],[`name`,`copy`,`size`,`16`],[`tabindex`,`0`,`aria-label`,`Selected icon Angular example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`role`,`status`,1,`copy-status`],[1,`icon-metadata`],[`path`,`projects/playground/src/app/components/screens/icon-catalog/README.md`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(t,e){if(t&1&&(bo(0,`bx-side-panel-layout`,8)(1,`bx-side-panel`,9,0),br(`openChange`,function(c){return e.panelChanged(`filters`,c)}),bo(3,`h2`,10),aA(4,`Filters`),Go(),bo(5,`div`,11)(6,`h3`),aA(7,`Customize catalog`),Go(),bo(8,`div`,12)(9,`label`,13),aA(10,`Icon size `),bo(11,`output`,13),aA(12),Go()(),td(13,`bx-icon`,14),Go(),bo(14,`input`,15),pM(),br(`ngModelChange`,function(c){return e.selectedSize.set(c)}),Go(),bo(15,`div`,12)(16,`label`,16),aA(17,`Stroke width `),bo(18,`output`,16),aA(19),Go()(),td(20,`bx-icon`,17),Go(),bo(21,`input`,18),pM(),br(`ngModelChange`,function(c){return e.selectedStrokeWidth.set(c)}),Go(),bo(22,`bx-collapsible`,19),ed(23,Ge,3,1,`ng-template`,null,1,TA),bo(25,`div`,20),nb(26,He,1,4,`bx-chip`,21,Fe),Go(),bo(28,`p`,22),aA(29,`Choose one category to narrow the results. Reset all restores the complete catalog.`),Go()()(),bo(30,`div`,23)(31,`button`,24),br(`click`,function(){return e.resetFilters()}),aA(32,`Reset all`),Go()()(),bo(33,`bx-side-panel`,25,2),br(`openChange`,function(c){return e.panelChanged(`details`,c)}),bo(35,`h2`,26),aA(36),Go(),tb(37,Be,35,19,`div`,11),bo(38,`div`,23)(39,`button`,24),br(`click`,function(){return e.resetCustomization()}),aA(40,`Reset customization`),Go()()(),bo(41,`div`,27,3)(43,`div`,28,4)(45,`bx-page-container`,29),td(46,`bx-collapsible`,30),ed(47,je,1,0,`ng-template`,null,5,TA),bo(49,`div`,31)(50,`button`,32),br(`click`,function(){return e.panelChanged(`filters`,e.activePanel()!==`filters`)}),td(51,`bx-icon`,33),aA(52,` Filters `),Go(),bo(53,`bx-search-input`,34),pM(),br(`ngModelChange`,function(c){return e.search(c??``)}),Go()(),bo(54,`p`,35),aA(55),Go(),bo(56,`div`,36,6),br(`scrollEnd`,function(){return e.renderMore()}),bo(58,`bx-virtual-collection`,37,7),ed(60,$e,6,9,`ng-template`,38),Go(),tb(61,Ue,2,0,`p`,39),tb(62,Ye,3,0,`div`,40),Go()()(),td(63,`app-scroll-to-top`,41),Go()()),t&2){let r,c=jT(2),k=jT(24),Ee=jT(34),F=jT(44),Te=jT(48),we=jT(57),Le=jT(59);qs$1(),$o(`headerIcon`,yA(43,We))(`breakpoints`,e.filtersPanelBreakpoints)(`resizable`,!e.isOnSmallerScreen())(`width`,e.isOnSmallerScreen()?440:380)(`open`,e.activePanel()===`filters`),qs$1(11),ub(``,e.selectedSize(),` px`),qs$1(2),$o(`ngModel`,e.selectedSize()),mM(),qs$1(5),sk(e.selectedStrokeWidth()),qs$1(2),$o(`ngModel`,e.selectedStrokeWidth()),mM(),qs$1(),$o(`headingLevel`,3)(`expanded`,!0)(`titleTemplate`,k),qs$1(4),sb(e.categories),qs$1(7),$o(`headerIcon`,yA(44,Ve))(`width`,420)(`open`,e.activePanel()===`details`),qs$1(3),sk(e.selectedIcon()??`Icon details`),qs$1(),ob((r=e.selectedIcon())?37:-1,r),qs$1(9),$o(`headingLevel`,2)(`contentTemplate`,Te),qs$1(4),$o(`variant`,e.hasActiveFilters()?`filled`:`tonal`)(`color`,e.hasActiveFilters()?`accent`:`grayscale`),vo(`aria-expanded`,e.activePanel()===`filters`),qs$1(3),$o(`ngModel`,e.searchTerm()),mM(),qs$1(2),ik(`Showing `,e.visibleIcons().length,` of `,e.filteredIcons().length,` icons`),qs$1(),$o(`infiniteScrollContainer`,e.scrollContainer())(`infiniteScrollDisabled`,!e.hasMore()||!e.scrollContainer())(`infiniteScrollRevision`,e.visibleIcons())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,400),qs$1(2),ka(`--%NS%catalog-icon-size`,e.selectedSize(),`px`),$o(`items`,e.visibleIcons())(`trackBy`,e.iconKey)(`config`,e.virtualConfig())(`measurementRevision`,e.selectedSize())(`scrollContainer`,F),qs$1(2),$o(`bxVirtualItem`,Le),qs$1(),ob(e.filteredIcons().length?-1:61),qs$1(),ob(e.hasMore()?62:-1),qs$1(),$o(`container`,F)(`boundary`,we)(`suppressed`,e.activePanel()===`filters`&&c.currentLayoutMode()===`overlay`||e.activePanel()===`details`&&Ee.currentLayoutMode()===`overlay`)}},dependencies:[nl,ht,YC,aZ,ME,mN,oZ,pN,At,jn,xe,S,Bn,qs,ol,al,sl,ll,jn$1,Fn,Hn,$n,qo,Pt,F],styles:[`
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