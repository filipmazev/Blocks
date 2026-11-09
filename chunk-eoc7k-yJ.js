import{t as F}from"./chunk-DUygIVtz.js";import{A as S,F as Oe$1,X as v,a as Qn,p as ar,w as rr}from"./main-72PK7OKX.js";import{n as ht}from"./chunk-tOnncOWn.js";import{n as Z,s as qe}from"./chunk-BrHceUG-.js";import{A as E,Bt as Nn,Cn as Tt,Ct as Lt,Fa as yF,Gt as OM,Ia as ye,Ir as fe,Ma as we,Mr as ed,Na as wr,Oa as vF,Rr as fne,Sa as td,Tr as de,Ui as p,Wi as pD,Wn as Y,Wr as gn,Yn as ZR,Yr as hn,Z as Hn,Zi as q,Zr as ia,Zt as PM,at as J,ca as rd,ct as Jc,dr as b,dt as K,ea as qe$1,en as Pt,et as IM,f as BC,g as Bt,gi as le,h as Be$1,ha as sa,i as $ie,in as QR,j as EM,jn as Ve$1,m as Ba,mn as Sa,mt as Kie,na as qn,nn as QA,pr as be,s as AM,t as $,ui as kC,un as RM,vt as L,w as D,xn as Tb,xr as cne,yr as ce,za as yr,zn as Wie,zt as Ne$1}from"./chunk-CwZ5dsYL.js";import{t as r}from"./chunk-DFgPOoGa.js";var I={size:24,strokeWidth:1.5,categories:[]};var Oe={color:`neutral`,variant:`tonal`};var ze={color:`accent`,variant:`filled`};var ke=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Text`,value:`text-primary`},{label:`Secondary text`,value:`text-secondary`},{label:`Success`,value:`text-success`},{label:`Information`,value:`text-info`},{label:`Warning`,value:`text-warn`},{label:`Danger`,value:`text-danger`}];var M=class s{initial=I;static ɵfac=function(t){return new(t||s)};static ɵprov=J({token:s,factory:s.ɵfac})};var Ae=[`results`];var Re=[`catalogScroll`];var We=()=>({name:`sliders-horizontal`,color:`accent`,bgColor:`auto`});var Ve=()=>({name:`info`,color:`accent`,bgColor:`auto`});var Fe=(s,n)=>n.id;function Ge(s,n){if(s&1&&(K(0,`span`,42),Ve$1(1,`bx-icon`,43),Ne$1(2),$()),s&2){let t=n.$implicit;D(2),qe$1(t)}}function He(s,n){if(s&1){let t=yr();K(0,`bx-chip`,44),ye(`selectedChange`,function(r){let c=Pt(t).$implicit,k=L();return Lt(k.toggleCategory(c.id,r))}),$()}if(s&2){let t=n.$implicit,e=L();le(`label`,t.label)(`config`,e.selectedCategoryIds().has(t.id)?e.selectedCategoryChipConfig:e.categoryChipConfig)(`selected`,e.selectedCategoryIds().has(t.id))(`deselectable`,!0)}}function Be(s,n){if(s&1){let t=yr();K(0,`div`,11)(1,`div`,45),Ve$1(2,`bx-icon`,46),$(),K(3,`label`,47),Ne$1(4,`Size `),K(5,`output`,47),Ne$1(6),$()(),K(7,`input`,48),ZR(),ye(`ngModelChange`,function(r){Pt(t);let c=L();return Lt(c.customize({size:r}))}),$(),K(8,`label`,49),Ne$1(9,`Stroke width `),K(10,`output`,49),Ne$1(11),$()(),K(12,`input`,50),ZR(),ye(`ngModelChange`,function(r){Pt(t);let c=L();return Lt(c.customize({strokeWidth:r}))}),$(),K(13,`bx-select`,51),ZR(),ye(`ngModelChange`,function(r){Pt(t);let c=L();return Lt(c.customize({color:r}))}),$(),K(14,`bx-slide-toggle`,52),ZR(),ye(`ngModelChange`,function(r){Pt(t);let c=L();return Lt(c.customize({background:r}))}),$(),K(15,`div`,53)(16,`h3`),Ne$1(17,`Angular code`),$(),K(18,`button`,54),ye(`click`,function(){Pt(t);let r=L();return Lt(r.copyCode())}),Ve$1(19,`bx-icon`,55),Ne$1(20,` Copy `),$()(),K(21,`pre`,56),Ve$1(22,`code`,57),$(),K(23,`p`,58),Ne$1(24),$(),K(25,`dl`,59)(26,`dt`),Ne$1(27,`Identifier`),$(),K(28,`dd`)(29,`code`),Ne$1(30),$()(),K(31,`dt`),Ne$1(32,`Categories`),$(),K(33,`dd`),Ne$1(34),$()()()}if(s&2){let t=n,e=L();D(),fe(`preview-background`,e.details().background),D(),le(`name`,t)(`size`,e.details().size)(`strokeWidth`,e.details().strokeWidth)(`color`,e.details().color)(`bgColor`,e.details().background?`auto`:void 0),D(4),wr(``,e.details().size,` px`),D(),le(`ngModel`,e.details().size),QR(),D(4),qe$1(e.details().strokeWidth),D(),le(`ngModel`,e.details().strokeWidth),QR(),D(),le(`clearable`,!1)(`options`,e.colors)(`ngModel`,e.details().color),QR(),D(),le(`ngModel`,e.details().background),QR(),D(8),le(`highlight`,e.selectedCode()),D(2),qe$1(e.copyStatus()),D(6),qe$1(t),D(4),qe$1(e.selectedCategoryLabels().join(`, `))}}function je(s,n){s&1&&Ve$1(0,`app-readme`,60)}function $e(s,n){if(s&1){let t=yr();K(0,`button`,61),ye(`click`,function(){let r=Pt(t).$implicit,c=L();return Lt(c.selectIcon(r))}),K(1,`span`,62)(2,`span`,63),Ve$1(3,`bx-icon`,64),$(),K(4,`span`,65),Ne$1(5),$()()()}if(s&2){let t=n.$implicit,e=L();fe(`selected`,e.highlightedIcon()===t),le(`surfaceEffects`,!1),Y(`aria-pressed`,e.highlightedIcon()===t)(`aria-label`,`Customize `+t),D(3),le(`name`,t)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),D(2),qe$1(t)}}function Ue(s,n){s&1&&(K(0,`p`,39),Ne$1(1,`No icons match these filters. Try another name, choose another category, or reset the filters.`),$())}function Ye(s,n){if(s&1){let t=yr();K(0,`div`,40)(1,`button`,24),ye(`click`,function(){Pt(t);let r=L();return Lt(r.renderMore())}),Ne$1(2,`Show more icons`),$()()}}var Ne=class s{clipboard=p(v);themeStudioService=p(Oe$1);iconCatalogPreferencesService=p(M);windowDimensionsService=p(Sa);allIcons=$ie;batchSize=72;categoryLabels=new Map(Wie.map(n=>[n.id,n.label]));customizations=E(/* @__PURE__ */ new Map);results=hn(`results`);catalogScroll=hn(`catalogScroll`);filtersPanelBreakpoints={"2xl":`push`};iconKey=n=>n;isOnSmallerScreen=b(()=>this.windowDimensionsService.isBelow(`2xl`));virtualConfig=b(()=>({layout:`grid`,minColumnWidth:`7rem`,estimatedRowHeight:this.selectedSize()+80,overscan:800}));categoryChipConfig=Oe;selectedCategoryChipConfig=ze;colors=ke;categories=Wie;activePanel=E(null);selectedIcon=E(null);scrollContainer=E(void 0);searchTerm=E(``);copyStatus=E(``);selectedSize=E(this.iconCatalogPreferencesService.initial.size);selectedStrokeWidth=E(this.iconCatalogPreferencesService.initial.strokeWidth);selectedCategories=E(this.iconCatalogPreferencesService.initial.categories);selectedCategoryIds=b(()=>new Set(this.selectedCategories()));highlightedIcon=b(()=>this.activePanel()===`details`?this.selectedIcon():null);filteredIcons=b(()=>{let n=this.searchTerm().toLowerCase().trim().split(/[\s_-]+/).filter(Boolean),t=this.selectedCategoryIds();return this.allIcons.filter(e=>n.every(r=>e.includes(r))&&(!t.size||Kie[e].some(r=>t.has(r))))});renderedCount=sa({source:this.filteredIcons,computation:()=>this.batchSize});hasActiveFilters=b(()=>this.selectedCategories().length>0);visibleIcons=b(()=>this.filteredIcons().slice(0,this.renderedCount()));hasMore=b(()=>this.visibleIcons().length<this.filteredIcons().length);details=b(()=>{let n=this.selectedIcon();return(n?this.customizations().get(n):void 0)??this.initialCustomization()});selectedCategoryLabels=b(()=>{let n=this.selectedIcon();return n?Kie[n].map(t=>this.categoryLabels.get(t)??t):[]});selectedCode=b(()=>{let n=this.details(),t=[`name="${this.selectedIcon()??`blocks`}"`];return n.size!==24&&t.push(`[size]="${n.size}"`),n.strokeWidth!==1.5&&t.push(`[strokeWidth]="${n.strokeWidth}"`),t.push(`color="${n.color}"`),n.background&&t.push(`bgColor="auto"`),`<bx-icon ${t.join(` `)} />`});constructor(){be(()=>{this.themeStudioService.open()&&this.activePanel.set(null)}),Be$1(()=>{this.scrollContainer.set(this.catalogScroll()?.nativeElement)}),be(()=>{this.selectedCode(),this.copyStatus.set(``)})}search(n){this.searchTerm.set(n),this.resetScroll()}filterCategories(n){this.selectedCategories.set(n?.slice(0,1)??[]),this.resetScroll()}toggleCategory(n,t){this.filterCategories(t?[n]:this.selectedCategories().filter(e=>e!==n))}renderMore(){this.hasMore()&&this.renderedCount.update(n=>Math.min(n+this.batchSize,this.filteredIcons().length))}selectIcon(n){this.customizations().has(n)||this.customizations.update(t=>new Map(t).set(n,this.initialCustomization())),this.selectedIcon.set(n),this.panelChanged(`details`,!0)}panelChanged(n,t){t?(this.themeStudioService.open.set(!1),this.activePanel.set(n)):this.activePanel()===n&&this.activePanel.set(null)}customize(n){let t=this.selectedIcon();t&&this.customizations.update(e=>new Map(e).set(t,r(r({},this.details()),n)))}resetCustomization(){this.customize(this.initialCustomization())}resetFilters(){this.selectedSize.set(I.size),this.selectedStrokeWidth.set(I.strokeWidth),this.selectedCategories.set([]),this.resetScroll()}copyCode(){this.copyStatus.set(this.clipboard.copy(this.selectedCode())?`Copied icon code.`:`Copy failed. Select the code and copy it manually.`)}initialCustomization(){return{size:Math.max(64,this.selectedSize()),strokeWidth:this.selectedStrokeWidth(),color:`accent`,background:!0}}resetScroll(){let n=this.scrollContainer(),t=this.results()?.nativeElement;if(!n||!t)return;let r=n===n.ownerDocument.scrollingElement?0:n.getBoundingClientRect().top+n.clientTop,c=t.getBoundingClientRect().top-r;c<0&&n.scrollTo({top:Math.max(0,n.scrollTop+c),behavior:`instant`})}static ɵfac=function(t){return new(t||s)};static ɵcmp=q({type:s,selectors:[[`app-icon-catalog`]],viewQuery:function(t,e){t&1&&Nn(e.results,Ae,5)(e.catalogScroll,Re,5),t&2&&Tt(2)},features:[Bt([M])],decls:64,vars:45,consts:[[`filtersPanel`,``],[`categoryHeading`,``],[`detailsPanel`,``],[`catalogRegion`,``],[`catalogScroll`,``],[`documentation`,``],[`results`,``],[`iconRows`,``],[1,`catalog-layout`],[`placement`,`left`,`panelId`,`icon-filters-panel`,`ariaLabel`,`Icon filters`,`labelledBy`,`icon-filters-title`,3,`openChange`,`headerIcon`,`breakpoints`,`resizable`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-filters-title`,1,`panel-title`],[1,`panel-controls`],[1,`slider-heading`],[`for`,`catalog-size`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog icon size`,`bxTooltip`,`Changes every icon in the catalog. Inspector settings are separate.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`64`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`catalog-stroke`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog stroke width`,`bxTooltip`,`Changes the SVG stroke width throughout the catalog, independently of icon size.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`title`,`Category`,1,`category-section`,3,`headingLevel`,`expanded`,`titleTemplate`],[`role`,`group`,`aria-label`,`Filter icons by category`,1,`category-options`],[3,`label`,`config`,`selected`,`deselectable`],[1,`control-hint`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`placement`,`right`,`ariaLabel`,`Icon details`,`labelledBy`,`icon-details-title`,3,`openChange`,`headerIcon`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-details-title`,1,`panel-title`],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[`pageDescription`,`Browse Lucide icons, filter official categories, and customize an Angular example.`],[`title`,`Icon API and catalog guide`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`filter-bar`],[`bx-button`,``,`type`,`button`,`aria-controls`,`icon-filters-panel`,3,`click`,`variant`,`color`],[`name`,`sliders-horizontal`,`size`,`20`],[`ariaLabel`,`Search icons`,`placeholder`,`Search icons by name…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`catalog-summary`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[`aria-label`,`Icon results`,3,`items`,`trackBy`,`config`,`measurementRevision`,`scrollContainer`],[3,`bxVirtualItem`],[`role`,`status`,1,`no-results`],[1,`catalog-more`],[3,`container`,`boundary`,`suppressed`],[1,`category-heading`],[`name`,`folder`,`size`,`20`],[3,`selectedChange`,`label`,`config`,`selected`,`deselectable`],[1,`icon-preview`],[3,`name`,`size`,`strokeWidth`,`color`,`bgColor`],[`for`,`detail-size`],[`id`,`detail-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`128`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`detail-stroke`],[`id`,`detail-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`label`,`Themed color`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Icon background`,3,`ngModelChange`,`ngModel`],[1,`code-heading`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`aria-label`,`Copy icon code`,3,`click`],[`name`,`copy`,`size`,`16`],[`tabindex`,`0`,`aria-label`,`Selected icon Angular example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`role`,`status`,1,`copy-status`],[1,`icon-metadata`],[`path`,`projects/playground/src/app/components/screens/icon-catalog/README.md`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(t,e){if(t&1&&(K(0,`bx-side-panel-layout`,8)(1,`bx-side-panel`,9,0),ye(`openChange`,function(c){return e.panelChanged(`filters`,c)}),K(3,`h2`,10),Ne$1(4,`Filters`),$(),K(5,`div`,11)(6,`h3`),Ne$1(7,`Customize catalog`),$(),K(8,`div`,12)(9,`label`,13),Ne$1(10,`Icon size `),K(11,`output`,13),Ne$1(12),$()(),Ve$1(13,`bx-icon`,14),$(),K(14,`input`,15),ZR(),ye(`ngModelChange`,function(c){return e.selectedSize.set(c)}),$(),K(15,`div`,12)(16,`label`,16),Ne$1(17,`Stroke width `),K(18,`output`,16),Ne$1(19),$()(),Ve$1(20,`bx-icon`,17),$(),K(21,`input`,18),ZR(),ye(`ngModelChange`,function(c){return e.selectedStrokeWidth.set(c)}),$(),K(22,`bx-collapsible`,19),kC(23,Ge,3,1,`ng-template`,null,1,Tb),K(25,`div`,20),Hn(26,He,1,4,`bx-chip`,21,Fe),$(),K(28,`p`,22),Ne$1(29,`Choose one category to narrow the results. Reset all restores the complete catalog.`),$()()(),K(30,`div`,23)(31,`button`,24),ye(`click`,function(){return e.resetFilters()}),Ne$1(32,`Reset all`),$()()(),K(33,`bx-side-panel`,25,2),ye(`openChange`,function(c){return e.panelChanged(`details`,c)}),K(35,`h2`,26),Ne$1(36),$(),ce(37,Be,35,19,`div`,11),K(38,`div`,23)(39,`button`,24),ye(`click`,function(){return e.resetCustomization()}),Ne$1(40,`Reset customization`),$()()(),K(41,`div`,27,3)(43,`div`,28,4)(45,`bx-page-container`,29),Ve$1(46,`bx-collapsible`,30),kC(47,je,1,0,`ng-template`,null,5,Tb),K(49,`div`,31)(50,`button`,32),ye(`click`,function(){return e.panelChanged(`filters`,e.activePanel()!==`filters`)}),Ve$1(51,`bx-icon`,33),Ne$1(52,` Filters `),$(),K(53,`bx-search-input`,34),ZR(),ye(`ngModelChange`,function(c){return e.search(c??``)}),$()(),K(54,`p`,35),Ne$1(55),$(),K(56,`div`,36,6),ye(`scrollEnd`,function(){return e.renderMore()}),K(58,`bx-virtual-collection`,37,7),kC(60,$e,6,9,`ng-template`,38),$(),ce(61,Ue,2,0,`p`,39),ce(62,Ye,3,0,`div`,40),$()()(),Ve$1(63,`app-scroll-to-top`,41),$()()),t&2){let r,c=ia(2),k=ia(24),Ee=ia(34),F=ia(44),Te=ia(48),we$1=ia(57),Le=ia(59);D(),le(`headerIcon`,QA(43,We))(`breakpoints`,e.filtersPanelBreakpoints)(`resizable`,!e.isOnSmallerScreen())(`width`,e.isOnSmallerScreen()?420:360)(`open`,e.activePanel()===`filters`),D(11),wr(``,e.selectedSize(),` px`),D(2),le(`ngModel`,e.selectedSize()),QR(),D(5),qe$1(e.selectedStrokeWidth()),D(2),le(`ngModel`,e.selectedStrokeWidth()),QR(),D(),le(`headingLevel`,3)(`expanded`,!0)(`titleTemplate`,k),D(4),qn(e.categories),D(7),le(`headerIcon`,QA(44,Ve))(`width`,420)(`open`,e.activePanel()===`details`),D(3),qe$1(e.selectedIcon()??`Icon details`),D(),de((r=e.selectedIcon())?37:-1,r),D(9),le(`headingLevel`,2)(`contentTemplate`,Te),D(4),le(`variant`,e.hasActiveFilters()?`filled`:`tonal`)(`color`,e.hasActiveFilters()?`accent`:`grayscale`),Y(`aria-expanded`,e.activePanel()===`filters`),D(3),le(`ngModel`,e.searchTerm()),QR(),D(2),BC(`Showing `,e.visibleIcons().length,` of `,e.filteredIcons().length,` icons`),D(),le(`infiniteScrollContainer`,e.scrollContainer())(`infiniteScrollDisabled`,!e.hasMore()||!e.scrollContainer())(`infiniteScrollRevision`,e.visibleIcons())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,400),D(2),we(`--%NS%catalog-icon-size`,e.selectedSize(),`px`),le(`items`,e.visibleIcons())(`trackBy`,e.iconKey)(`config`,e.virtualConfig())(`measurementRevision`,e.selectedSize())(`scrollContainer`,F),D(2),le(`bxVirtualItem`,Le),D(),de(e.filteredIcons().length?-1:61),D(),de(e.hasMore()?62:-1),D(),le(`container`,F)(`boundary`,we$1)(`suppressed`,e.activePanel()===`filters`&&c.currentLayoutMode()===`overlay`||e.activePanel()===`details`&&Ee.currentLayoutMode()===`overlay`)}},dependencies:[IM,ht,gn,fne,pD,yF,cne,vF,qe,rr,Z,S,Jc,EM,AM,RM,OM,PM,rd,td,ed,Qn,ar,Ba,F],styles:[`
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