import{t as F}from"./chunk-DLdZUEbc.js";import{J as Oe$1,X as v,b as er,l as Nn,p as Tn,t as S}from"./main-RICJTCGQ.js";import{n as ht}from"./chunk-C3hH_sJR.js";import{c as qe,r as Z}from"./chunk-DZ1I1_Lc.js";import{$ as Ge$1,$n as Xd,D,Di as iB,Do as yT,Dr as ape,F as E,Gt as Mt,Ir as bt,K as Fa,N as Dt,Ni as j,No as yt,Nr as be,Nt as L,Ot as Kd,Q as Gd,Ra as rB,Rn as VA,Ro as zi,To as y,Tr as an,U as F$1,Ui as kT,Vn as W,Vt as M$1,W as FA,Wr as cpe,Xi as l_,Xn as X,Xr as de,Xt as OM,Y as Fe$1,Yn as Wt,Zr as dpe,_a as nl,d as Aa,do as w,er as Xt,fo as wT,gi as g,ii as f,ir as Yd,k as De,ki as ie,l as A,m as BP,po as we,pr as Zt,qr as dT,qt as Nie,s as $t,ti as ee,un as Pie,v as Bt,w as Cr,wi as hT,wr as ae,yo as xT,zi as je$1}from"./chunk-DzvvGvUq.js";import{t as r}from"./chunk-DFgPOoGa.js";var I={size:24,strokeWidth:1.5,categories:[]};var Oe={color:`neutral`,variant:`tonal`};var ze={color:`accent`,variant:`filled`};var ke=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Text`,value:`text-primary`},{label:`Secondary text`,value:`text-secondary`},{label:`Success`,value:`text-success`},{label:`Information`,value:`text-info`},{label:`Warning`,value:`text-warn`},{label:`Danger`,value:`text-danger`}];var M=class s{initial=I;static ɵfac=function(t){return new(t||s)};static ɵprov=ie({token:s,factory:s.ɵfac})};var Ae=[`results`];var Re=[`catalogScroll`];var We=()=>({name:`sliders-horizontal`,color:`accent`,bgColor:`auto`});var Ve=()=>({name:`info`,color:`accent`,bgColor:`auto`});var Fe=(s,n)=>n.id;function Ge(s,n){if(s&1&&(E(0,`span`,42),we(1,`bx-icon`,43),X(2),D()),s&2){let t=n.$implicit;y(2),be(t)}}function He(s,n){if(s&1){let t=yt();E(0,`bx-chip`,44),ee(`selectedChange`,function(r){let c=je$1(t).$implicit,k=w();return Fe$1(k.toggleCategory(c.id,r))}),D()}if(s&2){let t=n.$implicit,e=w();A(`label`,t.label)(`config`,e.selectedCategoryIds().has(t.id)?e.selectedCategoryChipConfig:e.categoryChipConfig)(`selected`,e.selectedCategoryIds().has(t.id))(`deselectable`,!0)}}function Be(s,n){if(s&1){let t=yt();E(0,`div`,11)(1,`div`,45),we(2,`bx-icon`,46),D(),E(3,`label`,47),X(4,`Size `),E(5,`output`,47),X(6),D()(),E(7,`input`,48),FA(),ee(`ngModelChange`,function(r){je$1(t);let c=w();return Fe$1(c.customize({size:r}))}),D(),E(8,`label`,49),X(9,`Stroke width `),E(10,`output`,49),X(11),D()(),E(12,`input`,50),FA(),ee(`ngModelChange`,function(r){je$1(t);let c=w();return Fe$1(c.customize({strokeWidth:r}))}),D(),E(13,`bx-select`,51),FA(),ee(`ngModelChange`,function(r){je$1(t);let c=w();return Fe$1(c.customize({color:r}))}),D(),E(14,`bx-slide-toggle`,52),FA(),ee(`ngModelChange`,function(r){je$1(t);let c=w();return Fe$1(c.customize({background:r}))}),D(),E(15,`div`,53)(16,`h3`),X(17,`Angular code`),D(),E(18,`button`,54),ee(`click`,function(){je$1(t);let r=w();return Fe$1(r.copyCode())}),we(19,`bx-icon`,55),X(20,` Copy `),D()(),E(21,`pre`,56),we(22,`code`,57),D(),E(23,`p`,58),X(24),D(),E(25,`dl`,59)(26,`dt`),X(27,`Identifier`),D(),E(28,`dd`)(29,`code`),X(30),D()(),E(31,`dt`),X(32,`Categories`),D(),E(33,`dd`),X(34),D()()()}if(s&2){let t=n,e=w();y(),ae(`preview-background`,e.details().background),y(),A(`name`,t)(`size`,e.details().size)(`strokeWidth`,e.details().strokeWidth)(`color`,e.details().color)(`bgColor`,e.details().background?`auto`:void 0),y(4),an(``,e.details().size,` px`),y(),A(`ngModel`,e.details().size),VA(),y(4),be(e.details().strokeWidth),y(),A(`ngModel`,e.details().strokeWidth),VA(),y(),A(`clearable`,!1)(`options`,e.colors)(`ngModel`,e.details().color),VA(),y(),A(`ngModel`,e.details().background),VA(),y(8),A(`highlight`,e.selectedCode()),y(2),be(e.copyStatus()),y(6),be(t),y(4),be(e.selectedCategoryLabels().join(`, `))}}function je(s,n){s&1&&we(0,`app-readme`,60)}function $e(s,n){if(s&1){let t=yt();E(0,`button`,61),ee(`click`,function(){let r=je$1(t).$implicit,c=w();return Fe$1(c.selectIcon(r))}),E(1,`span`,62)(2,`span`,63),we(3,`bx-icon`,64),D(),E(4,`span`,65),X(5),D()()()}if(s&2){let t=n.$implicit,e=w();ae(`selected`,e.highlightedIcon()===t),A(`surfaceEffects`,!1),F$1(`aria-pressed`,e.highlightedIcon()===t)(`aria-label`,`Customize `+t),y(3),A(`name`,t)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),y(2),be(t)}}function Ue(s,n){s&1&&(E(0,`p`,39),X(1,`No icons match these filters. Try another name, choose another category, or reset the filters.`),D())}function Ye(s,n){if(s&1){let t=yt();E(0,`div`,40)(1,`button`,24),ee(`click`,function(){je$1(t);let r=w();return Fe$1(r.renderMore())}),X(2,`Show more icons`),D()()}}var Ne=class s{clipboard=f(v);themeStudioService=f(Oe$1);iconCatalogPreferencesService=f(M);windowDimensionsService=f(nl);allIcons=ape;batchSize=72;categoryLabels=new Map(cpe.map(n=>[n.id,n.label]));customizations=M$1(/* @__PURE__ */ new Map);results=Mt(`results`);catalogScroll=Mt(`catalogScroll`);filtersPanelBreakpoints={"2xl":`push`};iconKey=n=>n;isOnSmallerScreen=g(()=>this.windowDimensionsService.isBelow(`2xl`));virtualConfig=g(()=>({layout:`grid`,minColumnWidth:`7rem`,estimatedRowHeight:this.selectedSize()+80,overscan:800}));categoryChipConfig=Oe;selectedCategoryChipConfig=ze;colors=ke;categories=cpe;activePanel=M$1(null);selectedIcon=M$1(null);scrollContainer=M$1(void 0);searchTerm=M$1(``);copyStatus=M$1(``);selectedSize=M$1(this.iconCatalogPreferencesService.initial.size);selectedStrokeWidth=M$1(this.iconCatalogPreferencesService.initial.strokeWidth);selectedCategories=M$1(this.iconCatalogPreferencesService.initial.categories);selectedCategoryIds=g(()=>new Set(this.selectedCategories()));highlightedIcon=g(()=>this.activePanel()===`details`?this.selectedIcon():null);filteredIcons=g(()=>{let n=this.searchTerm().toLowerCase().trim().split(/[\s_-]+/).filter(Boolean),t=this.selectedCategoryIds();return this.allIcons.filter(e=>n.every(r=>e.includes(r))&&(!t.size||dpe[e].some(r=>t.has(r))))});renderedCount=Fa({source:this.filteredIcons,computation:()=>this.batchSize});hasActiveFilters=g(()=>this.selectedCategories().length>0);visibleIcons=g(()=>this.filteredIcons().slice(0,this.renderedCount()));hasMore=g(()=>this.visibleIcons().length<this.filteredIcons().length);details=g(()=>{let n=this.selectedIcon();return(n?this.customizations().get(n):void 0)??this.initialCustomization()});selectedCategoryLabels=g(()=>{let n=this.selectedIcon();return n?dpe[n].map(t=>this.categoryLabels.get(t)??t):[]});selectedCode=g(()=>{let n=this.details(),t=[`name="${this.selectedIcon()??`blocks`}"`];return n.size!==24&&t.push(`[size]="${n.size}"`),n.strokeWidth!==1.5&&t.push(`[strokeWidth]="${n.strokeWidth}"`),t.push(`color="${n.color}"`),n.background&&t.push(`bgColor="auto"`),`<bx-icon ${t.join(` `)} />`});constructor(){de(()=>{this.themeStudioService.open()&&this.activePanel.set(null)}),Ge$1(()=>{this.scrollContainer.set(this.catalogScroll()?.nativeElement)}),de(()=>{this.selectedCode(),this.copyStatus.set(``)})}search(n){this.searchTerm.set(n),this.resetScroll()}filterCategories(n){this.selectedCategories.set(n?.slice(0,1)??[]),this.resetScroll()}toggleCategory(n,t){this.filterCategories(t?[n]:this.selectedCategories().filter(e=>e!==n))}renderMore(){this.hasMore()&&this.renderedCount.update(n=>Math.min(n+this.batchSize,this.filteredIcons().length))}selectIcon(n){this.customizations().has(n)||this.customizations.update(t=>new Map(t).set(n,this.initialCustomization())),this.selectedIcon.set(n),this.panelChanged(`details`,!0)}panelChanged(n,t){t?(this.themeStudioService.open.set(!1),this.activePanel.set(n)):this.activePanel()===n&&this.activePanel.set(null)}customize(n){let t=this.selectedIcon();t&&this.customizations.update(e=>new Map(e).set(t,r(r({},this.details()),n)))}resetCustomization(){this.customize(this.initialCustomization())}resetFilters(){this.selectedSize.set(I.size),this.selectedStrokeWidth.set(I.strokeWidth),this.selectedCategories.set([]),this.resetScroll()}copyCode(){this.copyStatus.set(this.clipboard.copy(this.selectedCode())?`Copied icon code.`:`Copy failed. Select the code and copy it manually.`)}initialCustomization(){return{size:Math.max(64,this.selectedSize()),strokeWidth:this.selectedStrokeWidth(),color:`accent`,background:!0}}resetScroll(){let n=this.scrollContainer(),t=this.results()?.nativeElement;if(!n||!t)return;let r=n===n.ownerDocument.scrollingElement?0:n.getBoundingClientRect().top+n.clientTop,c=t.getBoundingClientRect().top-r;c<0&&n.scrollTo({top:Math.max(0,n.scrollTop+c),behavior:`instant`})}static ɵfac=function(t){return new(t||s)};static ɵcmp=W({type:s,selectors:[[`app-icon-catalog`]],viewQuery:function(t,e){t&1&&Zt(e.results,Ae,5)(e.catalogScroll,Re,5),t&2&&bt(2)},features:[Xt([M])],decls:64,vars:45,consts:[[`filtersPanel`,``],[`categoryHeading`,``],[`detailsPanel`,``],[`catalogRegion`,``],[`catalogScroll`,``],[`documentation`,``],[`results`,``],[`iconRows`,``],[1,`catalog-layout`],[`placement`,`left`,`panelId`,`icon-filters-panel`,`ariaLabel`,`Icon filters`,`labelledBy`,`icon-filters-title`,3,`openChange`,`headerIcon`,`breakpoints`,`resizable`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-filters-title`,1,`panel-title`],[1,`panel-controls`],[1,`slider-heading`],[`for`,`catalog-size`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog icon size`,`bxTooltip`,`Changes every icon in the catalog. Inspector settings are separate.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`64`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`catalog-stroke`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog stroke width`,`bxTooltip`,`Changes the SVG stroke width throughout the catalog, independently of icon size.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`title`,`Category`,1,`category-section`,3,`headingLevel`,`expanded`,`titleTemplate`],[`role`,`group`,`aria-label`,`Filter icons by category`,1,`category-options`],[3,`label`,`config`,`selected`,`deselectable`],[1,`control-hint`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`placement`,`right`,`ariaLabel`,`Icon details`,`labelledBy`,`icon-details-title`,3,`openChange`,`headerIcon`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-details-title`,1,`panel-title`],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[`pageDescription`,`Browse Lucide icons, filter official categories, and customize an Angular example.`],[`title`,`Icon API and catalog guide`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`filter-bar`],[`bx-button`,``,`type`,`button`,`aria-controls`,`icon-filters-panel`,3,`click`,`variant`,`color`],[`name`,`sliders-horizontal`,`size`,`20`],[`ariaLabel`,`Search icons`,`placeholder`,`Search icons by name…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`catalog-summary`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[`aria-label`,`Icon results`,3,`items`,`trackBy`,`config`,`measurementRevision`,`scrollContainer`],[3,`bxVirtualItem`],[`role`,`status`,1,`no-results`],[1,`catalog-more`],[3,`container`,`boundary`,`suppressed`],[1,`category-heading`],[`name`,`folder`,`size`,`20`],[3,`selectedChange`,`label`,`config`,`selected`,`deselectable`],[1,`icon-preview`],[3,`name`,`size`,`strokeWidth`,`color`,`bgColor`],[`for`,`detail-size`],[`id`,`detail-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`128`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`detail-stroke`],[`id`,`detail-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`label`,`Themed color`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Icon background`,3,`ngModelChange`,`ngModel`],[1,`code-heading`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`aria-label`,`Copy icon code`,3,`click`],[`name`,`copy`,`size`,`16`],[`tabindex`,`0`,`aria-label`,`Selected icon Angular example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`role`,`status`,1,`copy-status`],[1,`icon-metadata`],[`path`,`projects/playground/src/app/components/screens/icon-catalog/README.md`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(t,e){if(t&1&&(E(0,`bx-side-panel-layout`,8)(1,`bx-side-panel`,9,0),ee(`openChange`,function(c){return e.panelChanged(`filters`,c)}),E(3,`h2`,10),X(4,`Filters`),D(),E(5,`div`,11)(6,`h3`),X(7,`Customize catalog`),D(),E(8,`div`,12)(9,`label`,13),X(10,`Icon size `),E(11,`output`,13),X(12),D()(),we(13,`bx-icon`,14),D(),E(14,`input`,15),FA(),ee(`ngModelChange`,function(c){return e.selectedSize.set(c)}),D(),E(15,`div`,12)(16,`label`,16),X(17,`Stroke width `),E(18,`output`,16),X(19),D()(),we(20,`bx-icon`,17),D(),E(21,`input`,18),FA(),ee(`ngModelChange`,function(c){return e.selectedStrokeWidth.set(c)}),D(),E(22,`bx-collapsible`,19),Aa(23,Ge,3,1,`ng-template`,null,1,Cr),E(25,`div`,20),$t(26,He,1,4,`bx-chip`,21,Fe),D(),E(28,`p`,22),X(29,`Choose one category to narrow the results. Reset all restores the complete catalog.`),D()()(),E(30,`div`,23)(31,`button`,24),ee(`click`,function(){return e.resetFilters()}),X(32,`Reset all`),D()()(),E(33,`bx-side-panel`,25,2),ee(`openChange`,function(c){return e.panelChanged(`details`,c)}),E(35,`h2`,26),X(36),D(),L(37,Be,35,19,`div`,11),E(38,`div`,23)(39,`button`,24),ee(`click`,function(){return e.resetCustomization()}),X(40,`Reset customization`),D()()(),E(41,`div`,27,3)(43,`div`,28,4)(45,`bx-page-container`,29),we(46,`bx-collapsible`,30),Aa(47,je,1,0,`ng-template`,null,5,Cr),E(49,`div`,31)(50,`button`,32),ee(`click`,function(){return e.panelChanged(`filters`,e.activePanel()!==`filters`)}),we(51,`bx-icon`,33),X(52,` Filters `),D(),E(53,`bx-search-input`,34),FA(),ee(`ngModelChange`,function(c){return e.search(c??``)}),D()(),E(54,`p`,35),X(55),D(),E(56,`div`,36,6),ee(`scrollEnd`,function(){return e.renderMore()}),E(58,`bx-virtual-collection`,37,7),Aa(60,$e,6,9,`ng-template`,38),D(),L(61,Ue,2,0,`p`,39),L(62,Ye,3,0,`div`,40),D()()(),we(63,`app-scroll-to-top`,41),D()()),t&2){let r,c=Dt(2),k=Dt(24),Ee=Dt(34),F=Dt(44),Te=Dt(48),we=Dt(57),Le=Dt(59);y(),A(`headerIcon`,BP(43,We))(`breakpoints`,e.filtersPanelBreakpoints)(`resizable`,!e.isOnSmallerScreen())(`width`,e.isOnSmallerScreen()?440:380)(`open`,e.activePanel()===`filters`),y(11),an(``,e.selectedSize(),` px`),y(2),A(`ngModel`,e.selectedSize()),VA(),y(5),be(e.selectedStrokeWidth()),y(2),A(`ngModel`,e.selectedStrokeWidth()),VA(),y(),A(`headingLevel`,3)(`expanded`,!0)(`titleTemplate`,k),y(4),Wt(e.categories),y(7),A(`headerIcon`,BP(44,Ve))(`width`,420)(`open`,e.activePanel()===`details`),y(3),be(e.selectedIcon()??`Icon details`),y(),j((r=e.selectedIcon())?37:-1,r),y(9),A(`headingLevel`,2)(`contentTemplate`,Te),y(4),A(`variant`,e.hasActiveFilters()?`filled`:`tonal`)(`color`,e.hasActiveFilters()?`accent`:`grayscale`),F$1(`aria-expanded`,e.activePanel()===`filters`),y(3),A(`ngModel`,e.searchTerm()),VA(),y(2),l_(`Showing `,e.visibleIcons().length,` of `,e.filteredIcons().length,` icons`),y(),A(`infiniteScrollContainer`,e.scrollContainer())(`infiniteScrollDisabled`,!e.hasMore()||!e.scrollContainer())(`infiniteScrollRevision`,e.visibleIcons())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,400),y(2),De(`--%NS%catalog-icon-size`,e.selectedSize(),`px`),A(`items`,e.visibleIcons())(`trackBy`,e.iconKey)(`config`,e.virtualConfig())(`measurementRevision`,e.selectedSize())(`scrollContainer`,F),y(2),A(`bxVirtualItem`,Le),y(),j(e.filteredIcons().length?-1:61),y(),j(e.hasMore()?62:-1),y(),A(`container`,F)(`boundary`,we)(`suppressed`,e.activePanel()===`filters`&&c.currentLayoutMode()===`overlay`||e.activePanel()===`details`&&Ee.currentLayoutMode()===`overlay`)}},dependencies:[hT,ht,Bt,Pie,OM,iB,Nie,rB,qe,Nn,Z,S,Gd,dT,yT,xT,wT,kT,Xd,Kd,Yd,Tn,er,zi,F],styles:[`
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