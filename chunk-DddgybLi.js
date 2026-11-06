import{n as w}from"./chunk-DTPx3lgi.js";import{A as ht,v as Ni}from"./main-2GBJQHUZ.js";import{r as Z,t as Ae}from"./chunk-DUDY88j1.js";import{Ai as tt,Bi as wn,Di as te,F as G$1,Ft as Pi,Jt as Se,Ki as xR,Mt as Pc,Pi as vR,Qi as y,Xi as xr,at as LF,di as pe,ea as ye,er as de,h as Ce,ht as Mre,in as U,ir as eI,jr as k,ki as to,l as Be,lt as M,mr as hS,mt as Mee,na as yr,oi as oe,or as eo,pr as gS,vt as Ne,wr as j,xt as Nl,yi as rr,yt as Nee}from"./chunk-CfQ5k3AW.js";function G(r,t){if(r&1&&(te(0,`div`,9)(1,`span`),Se(2),oe(),te(3,`pre`,16),tt(4,`code`,17),oe()()),r&2){let n=U();k(2),rr(`Selected: `,n.selectedIcon()),k(2),ye(`highlight`,n.selectedCode())}}function J(r,t){if(r&1){let n=Pi();te(0,`button`,18),Ne(`click`,function(){let p=eo(n).$implicit,d=U();return to(d.selectedIcon.set(p))}),te(1,`span`,19)(2,`span`,20),tt(3,`bx-icon`,21),oe(),te(4,`span`,22),Se(5),oe()()()}if(r&2){let n=t.$implicit,e=U();Ce(`selected`,e.selectedIcon()===n),ye(`surfaceEffects`,!1),G$1(`aria-pressed`,e.selectedIcon()===n),k(3),ye(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),k(2),Be(n)}}function K(r,t){if(r&1&&(te(0,`p`,12),Se(1),oe()),r&2){let n=U();k(),rr(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var q=class r{pageSize=48;allIcons=Mre;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(t=>({label:`${t}px`,value:t}));strokeSelectOptions=this.strokeWidths.map(t=>({label:`${t}px`,value:t}));searchTerm=M(``);selectedSize=M(`24`);selectedStrokeWidth=M(1.5);page=M(0);selectedIcon=M(null);filteredIcons=y(()=>{let t=this.searchTerm().toLowerCase().trim();return t?this.allIcons.filter(n=>n.includes(t)):this.allIcons});pageCount=y(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=y(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=y(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=y(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=y(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(t){this.searchTerm.set(t),this.page.set(0)}changePage(t){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+t)))}static ɵfac=function(n){return new(n||r)};static ɵcmp=j({type:r,selectors:[[`app-icon-catalog`]],decls:24,vars:19,consts:[[`pageDescription`,`Browse the icon library and try sizes, stroke widths, and themed colors.`],[`title`,`Icon API and accessibility`,1,`catalog-documentation`,3,`headingLevel`],[`path`,`projects/blocks/icons/components/README.md`],[1,`filter-bar`],[`placeholder`,`Search icons by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`surfaceEffects`,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[`tabindex`,`0`,`aria-label`,`Selected icon HTML example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(te(0,`bx-page-container`,0)(1,`bx-collapsible`,1),tt(2,`app-readme`,2),oe(),te(3,`div`,3)(4,`bx-search-input`,4),vR(),Ne(`ngModelChange`,function(d){return e.search(d)}),oe(),te(5,`bx-select`,5),vR(),Ne(`ngModelChange`,function(d){return e.selectedSize.set(d)}),oe(),te(6,`bx-select`,6),vR(),Ne(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),oe()(),te(7,`div`,7)(8,`p`,8),Se(9),oe(),te(10,`span`),Se(11,`48 per page`),oe()(),de(12,G,5,2,`div`,9),te(13,`div`,10),yr(14,J,6,8,`button`,11,Nl,!1,K,2,1,`p`,12),oe(),te(17,`nav`,13)(18,`button`,14),Ne(`click`,function(){return e.changePage(-1)}),Se(19,` Previous `),oe(),te(20,`span`,15),Se(21),oe(),te(22,`button`,14),Ne(`click`,function(){return e.changePage(1)}),Se(23,` Next `),oe()()()),n&2&&(k(),ye(`headingLevel`,2),k(3),ye(`ngModel`,e.searchTerm()),xR(),k(),ye(`clearable`,!1)(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),xR(),k(),ye(`clearable`,!1)(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),xR(),k(3),gS(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),k(3),pe(e.selectedIcon()?12:-1),k(2),xr(e.visibleIcons()),k(4),ye(`outlined`,!0)(`disabled`,e.page()===0),k(3),hS(`Page `,e.page()+1,` of `,e.pageCount()),k(),ye(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[eI,ht,wn,Nee,Mee,LF,Ae,Ni,Z,w,Pc],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.filter-bar[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(12rem, 1fr) 9rem 9rem;
  gap: 1rem;
  align-items: end;
}
.catalog-summary[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  margin-top: 1rem;
}
.icon-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: 0.75rem;
}
.icon-card[_ngcontent-%COMP%] {
  min-height: 7rem;
  height: auto;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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
  gap: 0.5rem;
}
.icon-card.selected[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-brand);
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
  min-height: 3rem;
}
.icon-name[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  overflow-wrap: anywhere;
}
.selected-example[_ngcontent-%COMP%] {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--%NS%bx-border-brand);
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  background: var(--%NS%bx-bg-surface);
}
.pagination[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-block: 1.5rem;
}
.no-results[_ngcontent-%COMP%] {
  grid-column: 1/-1;
  padding: 2rem;
  text-align: center;
}
.catalog-documentation[_ngcontent-%COMP%] {
  margin-block: 1.5rem;
}
@media (max-width: 640px) {
  .filter-bar[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
  }
  bx-search-input[_ngcontent-%COMP%] {
    grid-column: 1/-1;
  }
  .icon-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.5rem;
  }
  .pagination[_ngcontent-%COMP%] {
    gap: 0.5rem;
    font-size: 0.8rem;
  }
}
.selected-example[_ngcontent-%COMP%]   .playground-code-block[_ngcontent-%COMP%] {
  flex: 1 1 100%;
  margin: 0;
}`]})};export{q as IconCatalog};