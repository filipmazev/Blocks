import{t as F}from"./chunk-Ci0HdnWZ.js";import{t as v}from"./chunk-BERE-vL_.js";import{n as ht}from"./chunk-DJNJ3luF.js";import{C as Oe$1,r as S}from"./main-ZZPER4U3.js";import{D as fe,k as kn,l as Ft,w as Vt,y as Sa}from"./chunk-BEm-ihzG.js";import{$ as sl,J as ol,P as al,Q as rl,T as Ws,U as jn,c as Hn,g as Pt,i as Bn,o as Fn,tt as tl}from"./chunk-DE1qZ0OS.js";import{i as re,n as ie,r as oe,t as U}from"./chunk-1rrlZ2Ss.js";import{$a as tm,$r as fa,Ao as y1,Ba as rm,Cn as V,Di as iR,En as W,Gr as el,Hr as eM,Ia as rM,In as XT,Jr as er,Kr as em,Lt as Os,Mr as d1,Nr as d4,On as WY,Sr as ba,St as Ly,Xt as Ql,_t as Ky,ai as gT,ar as Zy,b as Cy,ct as K,i as $n,it as Jc,k as Ey,la as nd,lt as KY,nn as Ro,no as tt,nr as Zb,qi as m,qn as Yb,rt as Jb,to as tr,v as CT,va as oR,vo as vw,wr as br,xn as Ul,xr as bT,xt as Lr,y as Cd}from"./chunk-CVY9_LoB.js";import{t as r}from"./chunk-C9yOwMO6.js";var I={size:24,strokeWidth:1.5,categories:[]};var Oe={color:`neutral`,variant:`tonal`};var ze={color:`accent`,variant:`filled`};var ke=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Text`,value:`text-primary`},{label:`Secondary text`,value:`text-secondary`},{label:`Success`,value:`text-success`},{label:`Information`,value:`text-info`},{label:`Warning`,value:`text-warn`},{label:`Danger`,value:`text-danger`}];var M=class s{initial=I;static ɵfac=function(t){return new(t||s)};static ɵprov=V({token:s,factory:s.ɵfac})};var Ae=[`results`];var Re=[`catalogScroll`];var We=()=>({name:`sliders-horizontal`,color:`accent`,bgColor:`auto`});var Ve=()=>({name:`info`,color:`accent`,bgColor:`auto`});var Fe=(s,n)=>n.id;function Ge(s,n){if(s&1&&(Os(0,`span`,42),Cy(1,`bx-icon`,43),XT(2),ba()),s&2){let t=n.$implicit;Ul(2),Zy(t)}}function He(s,n){if(s&1){let t=Jb();Os(0,`bx-chip`,44),br(`selectedChange`,function(r){let c=Jc(t).$implicit,k=Ql();return el(k.toggleCategory(c.id,r))}),ba()}if(s&2){let t=n.$implicit,e=Ql();fa(`label`,t.label)(`config`,e.selectedCategoryIds().has(t.id)?e.selectedCategoryChipConfig:e.categoryChipConfig)(`selected`,e.selectedCategoryIds().has(t.id))(`deselectable`,!0)}}function Be(s,n){if(s&1){let t=Jb();Os(0,`div`,11)(1,`div`,45),Cy(2,`bx-icon`,46),ba(),Os(3,`label`,47),XT(4,`Size `),Os(5,`output`,47),XT(6),ba()(),Os(7,`input`,48),eM(),br(`ngModelChange`,function(r){Jc(t);let c=Ql();return el(c.customize({size:r}))}),ba(),Os(8,`label`,49),XT(9,`Stroke width `),Os(10,`output`,49),XT(11),ba()(),Os(12,`input`,50),eM(),br(`ngModelChange`,function(r){Jc(t);let c=Ql();return el(c.customize({strokeWidth:r}))}),ba(),Os(13,`bx-select`,51),eM(),br(`ngModelChange`,function(r){Jc(t);let c=Ql();return el(c.customize({color:r}))}),ba(),Os(14,`bx-slide-toggle`,52),eM(),br(`ngModelChange`,function(r){Jc(t);let c=Ql();return el(c.customize({background:r}))}),ba(),Os(15,`div`,53)(16,`h3`),XT(17,`Angular code`),ba(),Os(18,`button`,54),br(`click`,function(){Jc(t);let r=Ql();return el(r.copyCode())}),Cy(19,`bx-icon`,55),XT(20,` Copy `),ba()(),Os(21,`pre`,56),Cy(22,`code`,57),ba(),Os(23,`p`,58),XT(24),ba(),Os(25,`dl`,59)(26,`dt`),XT(27,`Identifier`),ba(),Os(28,`dd`)(29,`code`),XT(30),ba()(),Os(31,`dt`),XT(32,`Categories`),ba(),Os(33,`dd`),XT(34),ba()()()}if(s&2){let t=n,e=Ql();Ul(),Lr(`preview-background`,e.details().background),Ul(),fa(`name`,t)(`size`,e.details().size)(`strokeWidth`,e.details().strokeWidth)(`color`,e.details().color)(`bgColor`,e.details().background?`auto`:void 0),Ul(4),rm(``,e.details().size,` px`),Ul(),fa(`ngModel`,e.details().size),rM(),Ul(4),Zy(e.details().strokeWidth),Ul(),fa(`ngModel`,e.details().strokeWidth),rM(),Ul(),fa(`clearable`,!1)(`options`,e.colors)(`ngModel`,e.details().color),rM(),Ul(),fa(`ngModel`,e.details().background),rM(),Ul(8),fa(`highlight`,e.selectedCode()),Ul(2),Zy(e.copyStatus()),Ul(6),Zy(t),Ul(4),Zy(e.selectedCategoryLabels().join(`, `))}}function je(s,n){s&1&&Cy(0,`app-readme`,60)}function $e(s,n){if(s&1){let t=Jb();Os(0,`button`,61),br(`click`,function(){let r=Jc(t).$implicit,c=Ql();return el(c.selectIcon(r))}),Os(1,`span`,62)(2,`span`,63),Cy(3,`bx-icon`,64),ba(),Os(4,`span`,65),XT(5),ba()()()}if(s&2){let t=n.$implicit,e=Ql();Lr(`selected`,e.highlightedIcon()===t),fa(`surfaceEffects`,!1),Ro(`aria-pressed`,e.highlightedIcon()===t)(`aria-label`,`Customize `+t),Ul(3),fa(`name`,t)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),Ul(2),Zy(t)}}function Ue(s,n){s&1&&(Os(0,`p`,39),XT(1,`No icons match these filters. Try another name, choose another category, or reset the filters.`),ba())}function Ye(s,n){if(s&1){let t=Jb();Os(0,`div`,40)(1,`button`,24),br(`click`,function(){Jc(t);let r=Ql();return el(r.renderMore())}),XT(2,`Show more icons`),ba()()}}var Ne=class s{clipboard=m(v);themeStudioService=m(Oe$1);iconCatalogPreferencesService=m(M);windowDimensionsService=m(Cd);allIcons=ie;batchSize=72;categoryLabels=new Map(re.map(n=>[n.id,n.label]));customizations=W(/* @__PURE__ */ new Map);results=d4(`results`);catalogScroll=d4(`catalogScroll`);filtersPanelBreakpoints={"2xl":`push`};iconKey=n=>n;isOnSmallerScreen=K(()=>this.windowDimensionsService.isBelow(`2xl`));virtualConfig=K(()=>({layout:`grid`,minColumnWidth:`7rem`,estimatedRowHeight:this.selectedSize()+80,overscan:800}));categoryChipConfig=Oe;selectedCategoryChipConfig=ze;colors=ke;categories=re;activePanel=W(null);selectedIcon=W(null);scrollContainer=W(void 0);searchTerm=W(``);copyStatus=W(``);selectedSize=W(this.iconCatalogPreferencesService.initial.size);selectedStrokeWidth=W(this.iconCatalogPreferencesService.initial.strokeWidth);selectedCategories=W(this.iconCatalogPreferencesService.initial.categories);selectedCategoryIds=K(()=>new Set(this.selectedCategories()));highlightedIcon=K(()=>this.activePanel()===`details`?this.selectedIcon():null);filteredIcons=K(()=>{let n=this.searchTerm().toLowerCase().trim().split(/[\s_-]+/).filter(Boolean),t=this.selectedCategoryIds();return this.allIcons.filter(e=>n.every(r=>e.includes(r))&&(!t.size||oe[e].some(r=>t.has(r))))});renderedCount=nd({source:this.filteredIcons,computation:()=>this.batchSize});hasActiveFilters=K(()=>this.selectedCategories().length>0);visibleIcons=K(()=>this.filteredIcons().slice(0,this.renderedCount()));hasMore=K(()=>this.visibleIcons().length<this.filteredIcons().length);details=K(()=>{let n=this.selectedIcon();return(n?this.customizations().get(n):void 0)??this.initialCustomization()});selectedCategoryLabels=K(()=>{let n=this.selectedIcon();return n?oe[n].map(t=>this.categoryLabels.get(t)??t):[]});selectedCode=K(()=>{let n=this.details(),t=[`name="${this.selectedIcon()??`blocks`}"`];return n.size!==24&&t.push(`[size]="${n.size}"`),n.strokeWidth!==1.5&&t.push(`[strokeWidth]="${n.strokeWidth}"`),t.push(`color="${n.color}"`),n.background&&t.push(`bgColor="auto"`),`<bx-icon ${t.join(` `)} />`});constructor(){tt(()=>{this.themeStudioService.open()&&this.activePanel.set(null)}),er(()=>{this.scrollContainer.set(this.catalogScroll()?.nativeElement)}),tt(()=>{this.selectedCode(),this.copyStatus.set(``)})}search(n){this.searchTerm.set(n),this.resetScroll()}filterCategories(n){this.selectedCategories.set(n?.slice(0,1)??[]),this.resetScroll()}toggleCategory(n,t){this.filterCategories(t?[n]:this.selectedCategories().filter(e=>e!==n))}renderMore(){this.hasMore()&&this.renderedCount.update(n=>Math.min(n+this.batchSize,this.filteredIcons().length))}selectIcon(n){this.customizations().has(n)||this.customizations.update(t=>new Map(t).set(n,this.initialCustomization())),this.selectedIcon.set(n),this.panelChanged(`details`,!0)}panelChanged(n,t){t?(this.themeStudioService.open.set(!1),this.activePanel.set(n)):this.activePanel()===n&&this.activePanel.set(null)}customize(n){let t=this.selectedIcon();t&&this.customizations.update(e=>new Map(e).set(t,r(r({},this.details()),n)))}resetCustomization(){this.customize(this.initialCustomization())}resetFilters(){this.selectedSize.set(I.size),this.selectedStrokeWidth.set(I.strokeWidth),this.selectedCategories.set([]),this.resetScroll()}copyCode(){this.copyStatus.set(this.clipboard.copy(this.selectedCode())?`Copied icon code.`:`Copy failed. Select the code and copy it manually.`)}initialCustomization(){return{size:Math.max(64,this.selectedSize()),strokeWidth:this.selectedStrokeWidth(),color:`accent`,background:!0}}resetScroll(){let n=this.scrollContainer(),t=this.results()?.nativeElement;if(!n||!t)return;let r=n===n.ownerDocument.scrollingElement?0:n.getBoundingClientRect().top+n.clientTop,c=t.getBoundingClientRect().top-r;c<0&&n.scrollTo({top:Math.max(0,n.scrollTop+c),behavior:`instant`})}static ɵfac=function(t){return new(t||s)};static ɵcmp=$n({type:s,selectors:[[`app-icon-catalog`]],viewQuery:function(t,e){t&1&&Ly(e.results,Ae,5)(e.catalogScroll,Re,5),t&2&&em(2)},features:[tr([M])],decls:64,vars:45,consts:[[`filtersPanel`,``],[`categoryHeading`,``],[`detailsPanel`,``],[`catalogRegion`,``],[`catalogScroll`,``],[`documentation`,``],[`results`,``],[`iconRows`,``],[1,`catalog-layout`],[`placement`,`left`,`panelId`,`icon-filters-panel`,`ariaLabel`,`Icon filters`,`labelledBy`,`icon-filters-title`,3,`openChange`,`headerIcon`,`breakpoints`,`resizable`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-filters-title`,1,`panel-title`],[1,`panel-controls`],[1,`slider-heading`],[`for`,`catalog-size`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog icon size`,`bxTooltip`,`Changes every icon in the catalog. Inspector settings are separate.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`64`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`catalog-stroke`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog stroke width`,`bxTooltip`,`Changes the SVG stroke width throughout the catalog, independently of icon size.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`title`,`Category`,1,`category-section`,3,`headingLevel`,`expanded`,`titleTemplate`],[`role`,`group`,`aria-label`,`Filter icons by category`,1,`category-options`],[3,`label`,`config`,`selected`,`deselectable`],[1,`control-hint`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`placement`,`right`,`ariaLabel`,`Icon details`,`labelledBy`,`icon-details-title`,3,`openChange`,`headerIcon`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-details-title`,1,`panel-title`],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[`pageDescription`,`Browse Lucide icons, filter official categories, and customize an Angular example.`],[`title`,`Icon API and catalog guide`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`filter-bar`],[`bx-button`,``,`type`,`button`,`aria-controls`,`icon-filters-panel`,3,`click`,`variant`,`color`],[`name`,`sliders-horizontal`,`size`,`20`],[`ariaLabel`,`Search icons`,`placeholder`,`Search icons by name…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`catalog-summary`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[`aria-label`,`Icon results`,3,`items`,`trackBy`,`config`,`measurementRevision`,`scrollContainer`],[3,`bxVirtualItem`],[`role`,`status`,1,`no-results`],[1,`catalog-more`],[3,`container`,`boundary`,`suppressed`],[1,`category-heading`],[`name`,`folder`,`size`,`20`],[3,`selectedChange`,`label`,`config`,`selected`,`deselectable`],[1,`icon-preview`],[3,`name`,`size`,`strokeWidth`,`color`,`bgColor`],[`for`,`detail-size`],[`id`,`detail-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`128`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`detail-stroke`],[`id`,`detail-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`label`,`Themed color`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Icon background`,3,`ngModelChange`,`ngModel`],[1,`code-heading`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`aria-label`,`Copy icon code`,3,`click`],[`name`,`copy`,`size`,`16`],[`tabindex`,`0`,`aria-label`,`Selected icon Angular example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`role`,`status`,1,`copy-status`],[1,`icon-metadata`],[`path`,`projects/playground/src/app/components/screens/icon-catalog/README.md`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(t,e){if(t&1&&(Os(0,`bx-side-panel-layout`,8)(1,`bx-side-panel`,9,0),br(`openChange`,function(c){return e.panelChanged(`filters`,c)}),Os(3,`h2`,10),XT(4,`Filters`),ba(),Os(5,`div`,11)(6,`h3`),XT(7,`Customize catalog`),ba(),Os(8,`div`,12)(9,`label`,13),XT(10,`Icon size `),Os(11,`output`,13),XT(12),ba()(),Cy(13,`bx-icon`,14),ba(),Os(14,`input`,15),eM(),br(`ngModelChange`,function(c){return e.selectedSize.set(c)}),ba(),Os(15,`div`,12)(16,`label`,16),XT(17,`Stroke width `),Os(18,`output`,16),XT(19),ba()(),Cy(20,`bx-icon`,17),ba(),Os(21,`input`,18),eM(),br(`ngModelChange`,function(c){return e.selectedStrokeWidth.set(c)}),ba(),Os(22,`bx-collapsible`,19),Ey(23,Ge,3,1,`ng-template`,null,1,y1),Os(25,`div`,20),Yb(26,He,1,4,`bx-chip`,21,Fe),ba(),Os(28,`p`,22),XT(29,`Choose one category to narrow the results. Reset all restores the complete catalog.`),ba()()(),Os(30,`div`,23)(31,`button`,24),br(`click`,function(){return e.resetFilters()}),XT(32,`Reset all`),ba()()(),Os(33,`bx-side-panel`,25,2),br(`openChange`,function(c){return e.panelChanged(`details`,c)}),Os(35,`h2`,26),XT(36),ba(),bT(37,Be,35,19,`div`,11),Os(38,`div`,23)(39,`button`,24),br(`click`,function(){return e.resetCustomization()}),XT(40,`Reset customization`),ba()()(),Os(41,`div`,27,3)(43,`div`,28,4)(45,`bx-page-container`,29),Cy(46,`bx-collapsible`,30),Ey(47,je,1,0,`ng-template`,null,5,y1),Os(49,`div`,31)(50,`button`,32),br(`click`,function(){return e.panelChanged(`filters`,e.activePanel()!==`filters`)}),Cy(51,`bx-icon`,33),XT(52,` Filters `),ba(),Os(53,`bx-search-input`,34),eM(),br(`ngModelChange`,function(c){return e.search(c??``)}),ba()(),Os(54,`p`,35),XT(55),ba(),Os(56,`div`,36,6),br(`scrollEnd`,function(){return e.renderMore()}),Os(58,`bx-virtual-collection`,37,7),Ey(60,$e,6,9,`ng-template`,38),ba(),bT(61,Ue,2,0,`p`,39),bT(62,Ye,3,0,`div`,40),ba()()(),Cy(63,`app-scroll-to-top`,41),ba()()),t&2){let r,c=CT(2),k=CT(24),Ee=CT(34),F=CT(44),Te=CT(48),we=CT(57),Le=CT(59);Ul(),fa(`headerIcon`,d1(43,We))(`breakpoints`,e.filtersPanelBreakpoints)(`resizable`,!e.isOnSmallerScreen())(`width`,e.isOnSmallerScreen()?440:380)(`open`,e.activePanel()===`filters`),Ul(11),rm(``,e.selectedSize(),` px`),Ul(2),fa(`ngModel`,e.selectedSize()),rM(),Ul(5),Zy(e.selectedStrokeWidth()),Ul(2),fa(`ngModel`,e.selectedStrokeWidth()),rM(),Ul(),fa(`headingLevel`,3)(`expanded`,!0)(`titleTemplate`,k),Ul(4),Zb(e.categories),Ul(7),fa(`headerIcon`,d1(44,Ve))(`width`,420)(`open`,e.activePanel()===`details`),Ul(3),Zy(e.selectedIcon()??`Icon details`),Ul(),gT((r=e.selectedIcon())?37:-1,r),Ul(9),fa(`headingLevel`,2)(`contentTemplate`,Te),Ul(4),fa(`variant`,e.hasActiveFilters()?`filled`:`tonal`)(`color`,e.hasActiveFilters()?`accent`:`grayscale`),Ro(`aria-expanded`,e.activePanel()===`filters`),Ul(3),fa(`ngModel`,e.searchTerm()),rM(),Ul(2),Ky(`Showing `,e.visibleIcons().length,` of `,e.filteredIcons().length,` icons`),Ul(),fa(`infiniteScrollContainer`,e.scrollContainer())(`infiniteScrollDisabled`,!e.hasMore()||!e.scrollContainer())(`infiniteScrollRevision`,e.visibleIcons())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,400),Ul(2),tm(`--%NS%catalog-icon-size`,e.selectedSize(),`px`),fa(`items`,e.visibleIcons())(`trackBy`,e.iconKey)(`config`,e.virtualConfig())(`measurementRevision`,e.selectedSize())(`scrollContainer`,F),Ul(2),fa(`bxVirtualItem`,Le),Ul(),gT(e.filteredIcons().length?-1:61),Ul(),gT(e.hasMore()?62:-1),Ul(),fa(`container`,F)(`boundary`,we)(`suppressed`,e.activePanel()===`filters`&&c.currentLayoutMode()===`overlay`||e.activePanel()===`details`&&Ee.currentLayoutMode()===`overlay`)}},dependencies:[tl,ht,U,KY,vw,iR,WY,oR,kn,Vt,fe,S,Bn,Ws,al,rl,ol,sl,jn,Fn,Hn,Ft,Sa,Pt,F],styles:[`
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