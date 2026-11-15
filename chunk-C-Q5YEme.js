import{t as F}from"./chunk-CXkJNFvp.js";import{a as Oe$1,b as v,t as S}from"./main-AKVTKJWF.js";import{n as ht}from"./chunk-DlJTjSOR.js";import{A as kn,O as fe,T as Vt,b as Sa,u as Ft}from"./chunk-BHj6x81D.js";import{$i as kT,E as D,Er as ZO,Ft as Lt,Ga as qt,Gi as j,Go as zpe,Hi as ie,Hn as Tt,Ia as pn,It as M$1,Ji as je$1,Kn as Ui,Mo as yE,Nn as T,Nr as _,Oi as g,Or as Zd,Pt as Le,Rn as Ti,Rr as _e,So as wr,St as KP,Tt as Kie,Ui as il,Vo as za,W as Fpe,Wt as NT,Yt as Nt,Zi as jt,Zr as bB,Zt as OT,_n as RT,_t as Jie,an as Q,cn as Qd,eo as se,er as Vpe,f as B,fa as lt,hn as Qt,ho as ve,jo as y,jt as L,ki as gB,kr as Ze,la as le,lr as Xd,pr as Xt,pt as J,q as GM,s as AT,sn as QO,t as $,uo as ut,vo as w,wi as fe$1,xi as f,yi as eu,zt as MT}from"./chunk-2VndCPnC.js";import{t as r}from"./chunk-DFgPOoGa.js";var I={size:24,strokeWidth:1.5,categories:[]};var Oe={color:`neutral`,variant:`tonal`};var ze={color:`accent`,variant:`filled`};var ke=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Text`,value:`text-primary`},{label:`Secondary text`,value:`text-secondary`},{label:`Success`,value:`text-success`},{label:`Information`,value:`text-info`},{label:`Warning`,value:`text-warn`},{label:`Danger`,value:`text-danger`}];var M=class s{initial=I;static ɵfac=function(t){return new(t||s)};static ɵprov=ie({token:s,factory:s.ɵfac})};var Ae=[`results`];var Re=[`catalogScroll`];var We=()=>({name:`sliders-horizontal`,color:`accent`,bgColor:`auto`});var Ve=()=>({name:`info`,color:`accent`,bgColor:`auto`});var Fe=(s,n)=>n.id;function Ge(s,n){if(s&1&&(_(0,`span`,42),ve(1,`bx-icon`,43),Q(2),D()),s&2){let t=n.$implicit;y(2),fe$1(t)}}function He(s,n){if(s&1){let t=ut();_(0,`bx-chip`,44),J(`selectedChange`,function(r){let c=Le(t).$implicit,k=w();return je$1(k.toggleCategory(c.id,r))}),D()}if(s&2){let t=n.$implicit,e=w();T(`label`,t.label)(`config`,e.selectedCategoryIds().has(t.id)?e.selectedCategoryChipConfig:e.categoryChipConfig)(`selected`,e.selectedCategoryIds().has(t.id))(`deselectable`,!0)}}function Be(s,n){if(s&1){let t=ut();_(0,`div`,11)(1,`div`,45),ve(2,`bx-icon`,46),D(),_(3,`label`,47),Q(4,`Size `),_(5,`output`,47),Q(6),D()(),_(7,`input`,48),ZO(),J(`ngModelChange`,function(r){Le(t);let c=w();return je$1(c.customize({size:r}))}),D(),_(8,`label`,49),Q(9,`Stroke width `),_(10,`output`,49),Q(11),D()(),_(12,`input`,50),ZO(),J(`ngModelChange`,function(r){Le(t);let c=w();return je$1(c.customize({strokeWidth:r}))}),D(),_(13,`bx-select`,51),ZO(),J(`ngModelChange`,function(r){Le(t);let c=w();return je$1(c.customize({color:r}))}),D(),_(14,`bx-slide-toggle`,52),ZO(),J(`ngModelChange`,function(r){Le(t);let c=w();return je$1(c.customize({background:r}))}),D(),_(15,`div`,53)(16,`h3`),Q(17,`Angular code`),D(),_(18,`button`,54),J(`click`,function(){Le(t);let r=w();return je$1(r.copyCode())}),ve(19,`bx-icon`,55),Q(20,` Copy `),D()(),_(21,`pre`,56),ve(22,`code`,57),D(),_(23,`p`,58),Q(24),D(),_(25,`dl`,59)(26,`dt`),Q(27,`Identifier`),D(),_(28,`dd`)(29,`code`),Q(30),D()(),_(31,`dt`),Q(32,`Categories`),D(),_(33,`dd`),Q(34),D()()()}if(s&2){let t=n,e=w();y(),se(`preview-background`,e.details().background),y(),T(`name`,t)(`size`,e.details().size)(`strokeWidth`,e.details().strokeWidth)(`color`,e.details().color)(`bgColor`,e.details().background?`auto`:void 0),y(4),pn(``,e.details().size,` px`),y(),T(`ngModel`,e.details().size),QO(),y(4),fe$1(e.details().strokeWidth),y(),T(`ngModel`,e.details().strokeWidth),QO(),y(),T(`clearable`,!1)(`options`,e.colors)(`ngModel`,e.details().color),QO(),y(),T(`ngModel`,e.details().background),QO(),y(8),T(`highlight`,e.selectedCode()),y(2),fe$1(e.copyStatus()),y(6),fe$1(t),y(4),fe$1(e.selectedCategoryLabels().join(`, `))}}function je(s,n){s&1&&ve(0,`app-readme`,60)}function $e(s,n){if(s&1){let t=ut();_(0,`button`,61),J(`click`,function(){let r=Le(t).$implicit,c=w();return je$1(c.selectIcon(r))}),_(1,`span`,62)(2,`span`,63),ve(3,`bx-icon`,64),D(),_(4,`span`,65),Q(5),D()()()}if(s&2){let t=n.$implicit,e=w();se(`selected`,e.highlightedIcon()===t),T(`surfaceEffects`,!1),B(`aria-pressed`,e.highlightedIcon()===t)(`aria-label`,`Customize `+t),y(3),T(`name`,t)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),y(2),fe$1(t)}}function Ue(s,n){s&1&&(_(0,`p`,39),Q(1,`No icons match these filters. Try another name, choose another category, or reset the filters.`),D())}function Ye(s,n){if(s&1){let t=ut();_(0,`div`,40)(1,`button`,24),J(`click`,function(){Le(t);let r=w();return je$1(r.renderMore())}),Q(2,`Show more icons`),D()()}}var Ne=class s{clipboard=f(v);themeStudioService=f(Oe$1);iconCatalogPreferencesService=f(M);windowDimensionsService=f(il);allIcons=Fpe;batchSize=72;categoryLabels=new Map(Vpe.map(n=>[n.id,n.label]));customizations=M$1(/* @__PURE__ */ new Map);results=Nt(`results`);catalogScroll=Nt(`catalogScroll`);filtersPanelBreakpoints={"2xl":`push`};iconKey=n=>n;isOnSmallerScreen=g(()=>this.windowDimensionsService.isBelow(`2xl`));virtualConfig=g(()=>({layout:`grid`,minColumnWidth:`7rem`,estimatedRowHeight:this.selectedSize()+80,overscan:800}));categoryChipConfig=Oe;selectedCategoryChipConfig=ze;colors=ke;categories=Vpe;activePanel=M$1(null);selectedIcon=M$1(null);scrollContainer=M$1(void 0);searchTerm=M$1(``);copyStatus=M$1(``);selectedSize=M$1(this.iconCatalogPreferencesService.initial.size);selectedStrokeWidth=M$1(this.iconCatalogPreferencesService.initial.strokeWidth);selectedCategories=M$1(this.iconCatalogPreferencesService.initial.categories);selectedCategoryIds=g(()=>new Set(this.selectedCategories()));highlightedIcon=g(()=>this.activePanel()===`details`?this.selectedIcon():null);filteredIcons=g(()=>{let n=this.searchTerm().toLowerCase().trim().split(/[\s_-]+/).filter(Boolean),t=this.selectedCategoryIds();return this.allIcons.filter(e=>n.every(r=>e.includes(r))&&(!t.size||zpe[e].some(r=>t.has(r))))});renderedCount=za({source:this.filteredIcons,computation:()=>this.batchSize});hasActiveFilters=g(()=>this.selectedCategories().length>0);visibleIcons=g(()=>this.filteredIcons().slice(0,this.renderedCount()));hasMore=g(()=>this.visibleIcons().length<this.filteredIcons().length);details=g(()=>{let n=this.selectedIcon();return(n?this.customizations().get(n):void 0)??this.initialCustomization()});selectedCategoryLabels=g(()=>{let n=this.selectedIcon();return n?zpe[n].map(t=>this.categoryLabels.get(t)??t):[]});selectedCode=g(()=>{let n=this.details(),t=[`name="${this.selectedIcon()??`blocks`}"`];return n.size!==24&&t.push(`[size]="${n.size}"`),n.strokeWidth!==1.5&&t.push(`[strokeWidth]="${n.strokeWidth}"`),t.push(`color="${n.color}"`),n.background&&t.push(`bgColor="auto"`),`<bx-icon ${t.join(` `)} />`});constructor(){le(()=>{this.themeStudioService.open()&&this.activePanel.set(null)}),Ze(()=>{this.scrollContainer.set(this.catalogScroll()?.nativeElement)}),le(()=>{this.selectedCode(),this.copyStatus.set(``)})}search(n){this.searchTerm.set(n),this.resetScroll()}filterCategories(n){this.selectedCategories.set(n?.slice(0,1)??[]),this.resetScroll()}toggleCategory(n,t){this.filterCategories(t?[n]:this.selectedCategories().filter(e=>e!==n))}renderMore(){this.hasMore()&&this.renderedCount.update(n=>Math.min(n+this.batchSize,this.filteredIcons().length))}selectIcon(n){this.customizations().has(n)||this.customizations.update(t=>new Map(t).set(n,this.initialCustomization())),this.selectedIcon.set(n),this.panelChanged(`details`,!0)}panelChanged(n,t){t?(this.themeStudioService.open.set(!1),this.activePanel.set(n)):this.activePanel()===n&&this.activePanel.set(null)}customize(n){let t=this.selectedIcon();t&&this.customizations.update(e=>new Map(e).set(t,r(r({},this.details()),n)))}resetCustomization(){this.customize(this.initialCustomization())}resetFilters(){this.selectedSize.set(I.size),this.selectedStrokeWidth.set(I.strokeWidth),this.selectedCategories.set([]),this.resetScroll()}copyCode(){this.copyStatus.set(this.clipboard.copy(this.selectedCode())?`Copied icon code.`:`Copy failed. Select the code and copy it manually.`)}initialCustomization(){return{size:Math.max(64,this.selectedSize()),strokeWidth:this.selectedStrokeWidth(),color:`accent`,background:!0}}resetScroll(){let n=this.scrollContainer(),t=this.results()?.nativeElement;if(!n||!t)return;let r=n===n.ownerDocument.scrollingElement?0:n.getBoundingClientRect().top+n.clientTop,c=t.getBoundingClientRect().top-r;c<0&&n.scrollTo({top:Math.max(0,n.scrollTop+c),behavior:`instant`})}static ɵfac=function(t){return new(t||s)};static ɵcmp=$({type:s,selectors:[[`app-icon-catalog`]],viewQuery:function(t,e){t&1&&Xt(e.results,Ae,5)(e.catalogScroll,Re,5),t&2&&lt(2)},features:[Qt([M])],decls:64,vars:45,consts:[[`filtersPanel`,``],[`categoryHeading`,``],[`detailsPanel`,``],[`catalogRegion`,``],[`catalogScroll`,``],[`documentation`,``],[`results`,``],[`iconRows`,``],[1,`catalog-layout`],[`placement`,`left`,`panelId`,`icon-filters-panel`,`ariaLabel`,`Icon filters`,`labelledBy`,`icon-filters-title`,3,`openChange`,`headerIcon`,`breakpoints`,`resizable`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-filters-title`,1,`panel-title`],[1,`panel-controls`],[1,`slider-heading`],[`for`,`catalog-size`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog icon size`,`bxTooltip`,`Changes every icon in the catalog. Inspector settings are separate.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`64`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`catalog-stroke`],[`name`,`info`,`size`,`16`,`tabindex`,`0`,`role`,`img`,`aria-label`,`About catalog stroke width`,`bxTooltip`,`Changes the SVG stroke width throughout the catalog, independently of icon size.`,`bxTooltipTouch`,`tap`],[`id`,`catalog-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`title`,`Category`,1,`category-section`,3,`headingLevel`,`expanded`,`titleTemplate`],[`role`,`group`,`aria-label`,`Filter icons by category`,1,`category-options`],[3,`label`,`config`,`selected`,`deselectable`],[1,`control-hint`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`placement`,`right`,`ariaLabel`,`Icon details`,`labelledBy`,`icon-details-title`,3,`openChange`,`headerIcon`,`width`,`open`],[`bxSidePanelHeader`,``,`id`,`icon-details-title`,1,`panel-title`],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[`pageDescription`,`Browse Lucide icons, filter official categories, and customize an Angular example.`],[`title`,`Icon API and catalog guide`,1,`catalog-documentation`,3,`headingLevel`,`contentTemplate`],[1,`filter-bar`],[`bx-button`,``,`type`,`button`,`aria-controls`,`icon-filters-panel`,3,`click`,`variant`,`color`],[`name`,`sliders-horizontal`,`size`,`20`],[`ariaLabel`,`Search icons`,`placeholder`,`Search icons by name…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`catalog-summary`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[`aria-label`,`Icon results`,3,`items`,`trackBy`,`config`,`measurementRevision`,`scrollContainer`],[3,`bxVirtualItem`],[`role`,`status`,1,`no-results`],[1,`catalog-more`],[3,`container`,`boundary`,`suppressed`],[1,`category-heading`],[`name`,`folder`,`size`,`20`],[3,`selectedChange`,`label`,`config`,`selected`,`deselectable`],[1,`icon-preview`],[3,`name`,`size`,`strokeWidth`,`color`,`bgColor`],[`for`,`detail-size`],[`id`,`detail-size`,`bxSlider`,``,`type`,`range`,`min`,`16`,`max`,`128`,`step`,`4`,3,`ngModelChange`,`ngModel`],[`for`,`detail-stroke`],[`id`,`detail-stroke`,`bxSlider`,``,`type`,`range`,`min`,`0.5`,`max`,`3`,`step`,`0.25`,3,`ngModelChange`,`ngModel`],[`label`,`Themed color`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Icon background`,3,`ngModelChange`,`ngModel`],[1,`code-heading`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`aria-label`,`Copy icon code`,3,`click`],[`name`,`copy`,`size`,`16`],[`tabindex`,`0`,`aria-label`,`Selected icon Angular example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`role`,`status`,1,`copy-status`],[1,`icon-metadata`],[`path`,`projects/playground/src/app/components/screens/icon-catalog/README.md`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(t,e){if(t&1&&(_(0,`bx-side-panel-layout`,8)(1,`bx-side-panel`,9,0),J(`openChange`,function(c){return e.panelChanged(`filters`,c)}),_(3,`h2`,10),Q(4,`Filters`),D(),_(5,`div`,11)(6,`h3`),Q(7,`Customize catalog`),D(),_(8,`div`,12)(9,`label`,13),Q(10,`Icon size `),_(11,`output`,13),Q(12),D()(),ve(13,`bx-icon`,14),D(),_(14,`input`,15),ZO(),J(`ngModelChange`,function(c){return e.selectedSize.set(c)}),D(),_(15,`div`,12)(16,`label`,16),Q(17,`Stroke width `),_(18,`output`,16),Q(19),D()(),ve(20,`bx-icon`,17),D(),_(21,`input`,18),ZO(),J(`ngModelChange`,function(c){return e.selectedStrokeWidth.set(c)}),D(),_(22,`bx-collapsible`,19),Ti(23,Ge,3,1,`ng-template`,null,1,wr),_(25,`div`,20),Lt(26,He,1,4,`bx-chip`,21,Fe),D(),_(28,`p`,22),Q(29,`Choose one category to narrow the results. Reset all restores the complete catalog.`),D()()(),_(30,`div`,23)(31,`button`,24),J(`click`,function(){return e.resetFilters()}),Q(32,`Reset all`),D()()(),_(33,`bx-side-panel`,25,2),J(`openChange`,function(c){return e.panelChanged(`details`,c)}),_(35,`h2`,26),Q(36),D(),L(37,Be,35,19,`div`,11),_(38,`div`,23)(39,`button`,24),J(`click`,function(){return e.resetCustomization()}),Q(40,`Reset customization`),D()()(),_(41,`div`,27,3)(43,`div`,28,4)(45,`bx-page-container`,29),ve(46,`bx-collapsible`,30),Ti(47,je,1,0,`ng-template`,null,5,wr),_(49,`div`,31)(50,`button`,32),J(`click`,function(){return e.panelChanged(`filters`,e.activePanel()!==`filters`)}),ve(51,`bx-icon`,33),Q(52,` Filters `),D(),_(53,`bx-search-input`,34),ZO(),J(`ngModelChange`,function(c){return e.search(c??``)}),D()(),_(54,`p`,35),Q(55),D(),_(56,`div`,36,6),J(`scrollEnd`,function(){return e.renderMore()}),_(58,`bx-virtual-collection`,37,7),Ti(60,$e,6,9,`ng-template`,38),D(),L(61,Ue,2,0,`p`,39),L(62,Ye,3,0,`div`,40),D()()(),ve(63,`app-scroll-to-top`,41),D()()),t&2){let r,c=Tt(2),k=Tt(24),Ee=Tt(34),F=Tt(44),Te=Tt(48),we=Tt(57),Le=Tt(59);y(),T(`headerIcon`,KP(43,We))(`breakpoints`,e.filtersPanelBreakpoints)(`resizable`,!e.isOnSmallerScreen())(`width`,e.isOnSmallerScreen()?440:380)(`open`,e.activePanel()===`filters`),y(11),pn(``,e.selectedSize(),` px`),y(2),T(`ngModel`,e.selectedSize()),QO(),y(5),fe$1(e.selectedStrokeWidth()),y(2),T(`ngModel`,e.selectedStrokeWidth()),QO(),y(),T(`headingLevel`,3)(`expanded`,!0)(`titleTemplate`,k),y(4),jt(e.categories),y(7),T(`headerIcon`,KP(44,Ve))(`width`,420)(`open`,e.activePanel()===`details`),y(3),fe$1(e.selectedIcon()??`Icon details`),y(),j((r=e.selectedIcon())?37:-1,r),y(9),T(`headingLevel`,2)(`contentTemplate`,Te),y(4),T(`variant`,e.hasActiveFilters()?`filled`:`tonal`)(`color`,e.hasActiveFilters()?`accent`:`grayscale`),B(`aria-expanded`,e.activePanel()===`filters`),y(3),T(`ngModel`,e.searchTerm()),QO(),y(2),yE(`Showing `,e.visibleIcons().length,` of `,e.filteredIcons().length,` icons`),y(),T(`infiniteScrollContainer`,e.scrollContainer())(`infiniteScrollDisabled`,!e.hasMore()||!e.scrollContainer())(`infiniteScrollRevision`,e.visibleIcons())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,400),y(2),_e(`--%NS%catalog-icon-size`,e.selectedSize(),`px`),T(`items`,e.visibleIcons())(`trackBy`,e.iconKey)(`config`,e.virtualConfig())(`measurementRevision`,e.selectedSize())(`scrollContainer`,F),y(2),T(`bxVirtualItem`,Le),y(),j(e.filteredIcons().length?-1:61),y(),j(e.hasMore()?62:-1),y(),T(`container`,F)(`boundary`,we)(`suppressed`,e.activePanel()===`filters`&&c.currentLayoutMode()===`overlay`||e.activePanel()===`details`&&Ee.currentLayoutMode()===`overlay`)}},dependencies:[MT,ht,qt,Jie,GM,gB,Kie,bB,kn,Vt,fe,S,Zd,kT,RT,NT,OT,AT,eu,Qd,Xd,Ft,Sa,Ui,F],styles:[`
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