import{t as F}from"./chunk-BWrMQyfJ.js";import{t as v}from"./chunk-my8my469.js";import{r as S,v as _e}from"./main-2C33VDGB.js";import{n as ht}from"./chunk-00B19EKY.js";import{C as ni,I as xe,L as zt,N as ti,o as Qr}from"./chunk-nJHBcAmt.js";import{E as Un,G as jn,I as cl,f as Hn,l as Fn,nt as sl,q as ll,tt as rl,x as Pt,y as Ks,z as dl}from"./chunk-D2mL-a4s.js";import{$a as sd,$i as ka,Ai as hM,Bi as ik,Co as vo,Eo as wA,Fr as ab,J as Fr,Jr as bo,K as FT,Kn as We$1,Kr as bd,Na as pb,P as Cre,Qr as cb,Ro as xo,Rr as ak,Sa as nd,Ta as od,Vr as b,Wa as rd,X as G,Xn as Wo,Yr as br,_n as Sz,_r as ZC,d as AE,da as mK,fa as mM,ha as mb,hr as Yy,ji as hN,kr as _re,mi as er,mn as Sre,na as lA,nn as RA,pa as mN,q as Fd,qa as rr,ri as cl$1,rr as Xl,so as tr,t as $,tt as Go,y as B,yi as fb,yo as vK,zr as al}from"./chunk-4Vch4aoV.js";import{t as r}from"./chunk-C9yOwMO6.js";var I={size:24,strokeWidth:1.5,categories:[]};var Oe={color:`neutral`,variant:`tonal`};var ze={color:`accent`,variant:`filled`};var ke=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Text`,value:`text-primary`},{label:`Secondary text`,value:`text-secondary`},{label:`Success`,value:`text-success`},{label:`Information`,value:`text-info`},{label:`Warning`,value:`text-warn`},{label:`Danger`,value:`text-danger`}];var M=class s{initial=I;static ɵfac=function(t){return new(t||s)};static ɵprov=B({token:s,factory:s.ɵfac})};var Ae=[`results`];var Re=[`catalogScroll`];var We=()=>({name:`sliders-horizontal`,color:`accent`,bgColor:`auto`});var Ve=()=>({name:`info`,color:`accent`,bgColor:`auto`});var Fe=(s,n)=>n.id;function Ge(s,n){if(s&1&&(bo(0,`span`,42),sd(1,`bx-icon`,43),lA(2),Go()),s&2){let t=n.$implicit;Xl(2),ik(t)}}function He(s,n){if(s&1){let t=pb();bo(0,`bx-chip`,44),br(`selectedChange`,function(r){let c=al(t).$implicit,k=Wo();return cl$1(k.toggleCategory(c.id,r))}),Go()}if(s&2){let t=n.$implicit,e=Wo();xo(`label`,t.label)(`config`,e.selectedCategoryIds().has(t.id)?e.selectedCategoryChipConfig:e.categoryChipConfig)(`selected`,e.selectedCategoryIds().has(t.id))(`deselectable`,!0)}}function Be(s,n){if(s&1){let t=pb();bo(0,`div`,11)(1,`div`,45),sd(2,`bx-icon`,46),Go(),bo(3,`label`,47),lA(4,`Size `),bo(5,`output`,47),lA(6),Go()(),bo(7,`input`,48),mM(),br(`ngModelChange`,function(r){al(t);let c=Wo();return cl$1(c.customize({size:r}))}),Go(),bo(8,`label`,49),lA(9,`Stroke width `),bo(10,`output`,49),lA(11),Go()(),bo(12,`input`,50),mM(),br(`ngModelChange`,function(r){al(t);let c=Wo();return cl$1(c.customize({strokeWidth:r}))}),Go(),bo(13,`bx-select`,51),mM(),br(`ngModelChange`,function(r){al(t);let c=Wo();return cl$1(c.customize({color:r}))}),Go(),bo(14,`bx-slide-toggle`,52),mM(),br(`ngModelChange`,function(r){al(t);let c=Wo();return cl$1(c.customize({background:r}))}),Go(),bo(15,`div`,53)(16,`h3`),lA(17,`Angular code`),Go(),bo(18,`button`,54),br(`click`,function(){al(t);let r=Wo();return cl$1(r.copyCode())}),sd(19,`bx-icon`,55),lA(20,` Copy `),Go()(),bo(21,`pre`,56),sd(22,`code`,57),Go(),bo(23,`p`,58),lA(24),Go(),bo(25,`dl`,59)(26,`dt`),lA(27,`Identifier`),Go(),bo(28,`dd`)(29,`code`),lA(30),Go()(),bo(31,`dt`),lA(32,`Categories`),Go(),bo(33,`dd`),lA(34),Go()()()}if(s&2){let t=n,e=Wo();Xl(),tr(`preview-background`,e.details().background),Xl(),xo(`name`,t)(`size`,e.details().size)(`strokeWidth`,e.details().strokeWidth)(`color`,e.details().color)(`bgColor`,e.details().background?`auto`:void 0),Xl(4),mb(``,e.details().size,` px`),Xl(),xo(`ngModel`,e.details().size),hM(),Xl(4),ik(e.details().strokeWidth),Xl(),xo(`ngModel`,e.details().strokeWidth),hM(),Xl(),xo(`clearable`,!1)(`options`,e.colors)(`ngModel`,e.details().color),hM(),Xl(),xo(`ngModel`,e.details().background),hM(),Xl(8),xo(`highlight`,e.selectedCode()),Xl(2),ik(e.copyStatus()),Xl(6),ik(t),Xl(4),ik(e.selectedCategoryLabels().join(`, `))}}function je(s,n){s&1&&sd(0,`app-readme`,60)}function $e(s,n){if(s&1){let t=pb();bo(0,`button`,61),br(`click`,function(){let r=al(t).$implicit,c=Wo();return cl$1(c.selectIcon(r))}),bo(1,`span`,62)(2,`span`,63),sd(3,`bx-icon`,64),Go(),bo(4,`span`,65),lA(5),Go()()()}if(s&2){let t=n.$implicit,e=Wo();tr(`selected`,e.highlightedIcon()===t),xo(`surfaceEffects`,!1),vo(`aria-pressed`,e.highlightedIcon()===t)(`aria-label`,`Customize `+t),Xl(3),xo(`name`,t)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),Xl(2),ik(t)}}function Ue(s,n){s&1&&(bo(0,`p`,39),lA(1,`No icons match these filters. Try another name, choose another category, or reset the filters.`),Go())}function Ye(s,n){if(s&1){let t=pb();bo(0,`div`,40)(1,`button`,24),br(`click`,function(){al(t);let r=Wo();return cl$1(r.renderMore())}),lA(2,`Show more icons`),Go()()}}var Ne=class s{clipboard=b(v);themeStudioService=b(_e);iconCatalogPreferencesService=b(M);windowDimensionsService=b(Fd);allIcons=Cre;batchSize=72;categoryLabels=new Map(_re.map(n=>[n.id,n.label]));customizations=$(/* @__PURE__ */ new Map);results=Sz(`results`);catalogScroll=Sz(`catalogScroll`);filtersPanelBreakpoints={"2xl":`push`};iconKey=n=>n;isOnSmallerScreen=G(()=>this.windowDimensionsService.isBelow(`2xl`));virtualConfig=G(()=>({layout:`grid`,minColumnWidth:`7rem`,estimatedRowHeight:this.selectedSize()+80,overscan:800}));categoryChipConfig=Oe;selectedCategoryChipConfig=ze;colors=ke;categories=_re;activePanel=$(null);selectedIcon=$(null);scrollContainer=$(void 0);searchTerm=$(``);copyStatus=$(``);selectedSize=$(this.iconCatalogPreferencesService.initial.size);selectedStrokeWidth=$(this.iconCatalogPreferencesService.initial.strokeWidth);selectedCategories=$(this.iconCatalogPreferencesService.initial.categories);selectedCategoryIds=G(()=>new Set(this.selectedCategories()));highlightedIcon=G(()=>this.activePanel()===`details`?this.selectedIcon():null);filteredIcons=G(()=>{let n=this.searchTerm().toLowerCase().trim().split(/[\s_-]+/).filter(Boolean),t=this.selectedCategoryIds();return this.allIcons.filter(e=>n.every(r=>e.includes(r))&&(!t.size||Sre[e].some(r=>t.has(r))))});renderedCount=bd({source:this.filteredIcons,computation:()=>this.batchSize});hasActiveFilters=G(()=>this.selectedCategories().length>0);visibleIcons=G(()=>this.filteredIcons().slice(0,this.renderedCount()));hasMore=G(()=>this.visibleIcons().length<this.filteredIcons().length);details=G(()=>{let n=this.selectedIcon();return(n?this.customizations().get(n):void 0)??this.initialCustomization()});selectedCategoryLabels=G(()=>{let n=this.selectedIcon();return n?Sre[n].map(t=>this.categoryLabels.get(t)??t):[]});selectedCode=G(()=>{let n=this.details(),t=[`name="${this.selectedIcon()??`blocks`}"`];return n.size!==24&&t.push(`[size]="${n.size}"`),n.strokeWidth!==1.5&&t.push(`[strokeWidth]="${n.strokeWidth}"`),t.push(`color="${n.color}"`),n.background&&t.push(`bgColor="auto"`),`<bx-icon ${t.join(` `)} />`});constructor(){We$1(()=>{this.themeStudioService.open()&&this.activePanel.set(null)}),er(()=>{this.scrollContainer.set(this.catalogScroll()?.nativeElement)}),We$1(()=>{this.selectedCode(),this.copyStatus.set(``)})}search(n){this.searchTerm.set(n),this.resetScroll()}filterCategories(n){this.selectedCategories.set(n?.slice(0,1)??[]),this.resetScroll()}toggleCategory(n,t){this.filterCategories(t?[n]:this.selectedCategories().filter(e=>e!==n))}renderMore(){this.hasMore()&&this.renderedCount.update(n=>Math.min(n+this.batchSize,this.filteredIcons().length))}selectIcon(n){this.customizations().has(n)||this.customizations.update(t=>new Map(t).set(n,this.initialCustomization())),this.selectedIcon.set(n),this.panelChanged(`details`,!0)}panelChanged(n,t){t?(this.themeStudioService.open.set(!1),this.activePanel.set(n)):this.activePanel()===n&&this.activePanel.set(null)}customize(n){let t=this.selectedIcon();t&&this.customizations.update(e=>new Map(e).set(t,r(r({},this.details()),n)))}resetCustomization(){this.customize(this.initialCustomization())}resetFilters(){this.selectedSize.set(I.size),this.selectedStrokeWidth.set(I.strokeWidth),this.selectedCategories.set([]),this.resetScroll()}copyCode(){this.copyStatus.set(this.clipboard.copy(this.selectedCode())?`Copied icon code.`:`Copy failed. Select the code and copy it manually.`)}initialCustomization(){return{size:Math.max(64,this.selectedSize()),strokeWidth:this.selectedStrokeWidth(),color:`accent`,background:!0}}resetScroll(){let n=this.scrollContainer(),t=this.results()?.nativeElement;if(!n||!t)return;let r=n===n.ownerDocument.scrollingElement?0:n.getBoundingClientRect().top+n.clientTop,c=t.getBoundingClientRect().top-r;c<0&&n.scrollTo({top:Math.max(0,n.scrollTop+c),behavior:`instant`})}static ɵfac=function(t){return new(t||s)};static ɵcmp=Fr({type:s,selectors:[[`app-icon-catalog`]],viewQuery:function(t,e){t&1&&Yy(e.results,Ae,5)(e.catalogScroll,Re,5),t&2&&fb(2)},features:[rr([M])],decls:64,vars:45,consts:[[`filtersPanel`,``],[`categoryHeading`,``],[`detailsPanel`,``],[`catalogRegion`,``],[`catalogScroll`,``],[`documentation`,``],[`results`,``],[`iconRows`,``],[1,`catalog-layout`],[`placement`,`left`,`panelId`,`icon-filters-panel`,`ariaLabel`,`Icon filters`,`labelledBy`,`icon-filters-title`,3,`openChange`,`headerIcon`,`breakpoints`,`resizable`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-filters-title`,1,`panel-title`],[1,`panel-controls`],[1,`slider-heading`],[`for`,`catalog-size`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog icon size`,`bxTooltip`,`Changes every icon in the catalog. Inspector settings are separate.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`64`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`catalog-stroke`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog stroke width`,`bxTooltip`,`Changes the SVG stroke width throughout the catalog, independently of icon size.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`title`,`Category`,1,`category-section`,3,`headingLevel`,`expanded`,`titleTemplate`],[`role`,`group`,`aria-label`,`Filter icons by category`,1,`category-options`],[3,`label`,`config`,`selected`,`deselectable`],[1,`control-hint`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`placement`,`right`,`ariaLabel`,`Icon details`,`labelledBy`,`icon-details-title`,3,`openChange`,`headerIcon`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-details-title`,1,`panel-title`],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[`pageDescription`,`Browse Lucide icons, filter official categories, and customize an Angular example.`],[`title`,`Icon API and catalog guide`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`filter-bar`],[`bx-button`,``,`type`,`button`,`aria-controls`,`icon-filters-panel`,3,`click`,`variant`,`color`],[`name`,`sliders-horizontal`,`size`,`20`],[`ariaLabel`,`Search icons`,`placeholder`,`Search icons by name…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`catalog-summary`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[`aria-label`,`Icon results`,3,`items`,`trackBy`,`config`,`measurementRevision`,`scrollContainer`],[3,`bxVirtualItem`],[`role`,`status`,1,`no-results`],[1,`catalog-more`],[3,`container`,`boundary`,`suppressed`],[1,`category-heading`],[`name`,`folder`,`size`,`20`],[3,`selectedChange`,`label`,`config`,`selected`,`deselectable`],[1,`icon-preview`],[3,`name`,`size`,`strokeWidth`,`color`,`bgColor`],[`for`,`detail-size`],[`id`,`detail-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`128`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`detail-stroke`],[`id`,`detail-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`label`,`Themed color`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Icon background`,3,`ngModelChange`,`ngModel`],[1,`code-heading`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`aria-label`,`Copy icon code`,3,`click`],[`name`,`copy`,`size`,`16`],[`tabindex`,`0`,`aria-label`,`Selected icon Angular example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`role`,`status`,1,`copy-status`],[1,`icon-metadata`],[`path`,`projects/playground/src/app/components/screens/icon-catalog/README.md`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(t,e){if(t&1&&(bo(0,`bx-side-panel-layout`,8)(1,`bx-side-panel`,9,0),br(`openChange`,function(c){return e.panelChanged(`filters`,c)}),bo(3,`h2`,10),lA(4,`Filters`),Go(),bo(5,`div`,11)(6,`h3`),lA(7,`Customize catalog`),Go(),bo(8,`div`,12)(9,`label`,13),lA(10,`Icon size `),bo(11,`output`,13),lA(12),Go()(),sd(13,`bx-icon`,14),Go(),bo(14,`input`,15),mM(),br(`ngModelChange`,function(c){return e.selectedSize.set(c)}),Go(),bo(15,`div`,12)(16,`label`,16),lA(17,`Stroke width `),bo(18,`output`,16),lA(19),Go()(),sd(20,`bx-icon`,17),Go(),bo(21,`input`,18),mM(),br(`ngModelChange`,function(c){return e.selectedStrokeWidth.set(c)}),Go(),bo(22,`bx-collapsible`,19),rd(23,Ge,3,1,`ng-template`,null,1,RA),bo(25,`div`,20),ab(26,He,1,4,`bx-chip`,21,Fe),Go(),bo(28,`p`,22),lA(29,`Choose one category to narrow the results. Reset all restores the complete catalog.`),Go()()(),bo(30,`div`,23)(31,`button`,24),br(`click`,function(){return e.resetFilters()}),lA(32,`Reset all`),Go()()(),bo(33,`bx-side-panel`,25,2),br(`openChange`,function(c){return e.panelChanged(`details`,c)}),bo(35,`h2`,26),lA(36),Go(),od(37,Be,35,19,`div`,11),bo(38,`div`,23)(39,`button`,24),br(`click`,function(){return e.resetCustomization()}),lA(40,`Reset customization`),Go()()(),bo(41,`div`,27,3)(43,`div`,28,4)(45,`bx-page-container`,29),sd(46,`bx-collapsible`,30),rd(47,je,1,0,`ng-template`,null,5,RA),bo(49,`div`,31)(50,`button`,32),br(`click`,function(){return e.panelChanged(`filters`,e.activePanel()!==`filters`)}),sd(51,`bx-icon`,33),lA(52,` Filters `),Go(),bo(53,`bx-search-input`,34),mM(),br(`ngModelChange`,function(c){return e.search(c??``)}),Go()(),bo(54,`p`,35),lA(55),Go(),bo(56,`div`,36,6),br(`scrollEnd`,function(){return e.renderMore()}),bo(58,`bx-virtual-collection`,37,7),rd(60,$e,6,9,`ng-template`,38),Go(),od(61,Ue,2,0,`p`,39),od(62,Ye,3,0,`div`,40),Go()()(),sd(63,`app-scroll-to-top`,41),Go()()),t&2){let r,c=FT(2),k=FT(24),Ee=FT(34),F=FT(44),Te=FT(48),we=FT(57),Le=FT(59);Xl(),xo(`headerIcon`,wA(43,We))(`breakpoints`,e.filtersPanelBreakpoints)(`resizable`,!e.isOnSmallerScreen())(`width`,e.isOnSmallerScreen()?440:380)(`open`,e.activePanel()===`filters`),Xl(11),mb(``,e.selectedSize(),` px`),Xl(2),xo(`ngModel`,e.selectedSize()),hM(),Xl(5),ik(e.selectedStrokeWidth()),Xl(2),xo(`ngModel`,e.selectedStrokeWidth()),hM(),Xl(),xo(`headingLevel`,3)(`expanded`,!0)(`titleTemplate`,k),Xl(4),cb(e.categories),Xl(7),xo(`headerIcon`,wA(44,Ve))(`width`,420)(`open`,e.activePanel()===`details`),Xl(3),ik(e.selectedIcon()??`Icon details`),Xl(),nd((r=e.selectedIcon())?37:-1,r),Xl(9),xo(`headingLevel`,2)(`contentTemplate`,Te),Xl(4),xo(`variant`,e.hasActiveFilters()?`filled`:`tonal`)(`color`,e.hasActiveFilters()?`accent`:`grayscale`),vo(`aria-expanded`,e.activePanel()===`filters`),Xl(3),xo(`ngModel`,e.searchTerm()),hM(),Xl(2),ak(`Showing `,e.visibleIcons().length,` of `,e.filteredIcons().length,` icons`),Xl(),xo(`infiniteScrollContainer`,e.scrollContainer())(`infiniteScrollDisabled`,!e.hasMore()||!e.scrollContainer())(`infiniteScrollRevision`,e.visibleIcons())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,400),Xl(2),ka(`--%NS%catalog-icon-size`,e.selectedSize(),`px`),xo(`items`,e.visibleIcons())(`trackBy`,e.iconKey)(`config`,e.virtualConfig())(`measurementRevision`,e.selectedSize())(`scrollContainer`,F),Xl(2),xo(`bxVirtualItem`,Le),Xl(),nd(e.filteredIcons().length?-1:61),Xl(),nd(e.hasMore()?62:-1),Xl(),xo(`container`,F)(`boundary`,we)(`suppressed`,e.activePanel()===`filters`&&c.currentLayoutMode()===`overlay`||e.activePanel()===`details`&&Ee.currentLayoutMode()===`overlay`)}},dependencies:[rl,ht,ZC,vK,AE,hN,mK,mN,zt,ti,xe,S,Hn,Ks,ll,sl,dl,cl,Un,jn,Fn,ni,Qr,Pt,F],styles:[`
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