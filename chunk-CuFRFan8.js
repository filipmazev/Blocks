import{Ci as v,E as FJ,Fr as ne,Jt as X,Lt as T,M as G9,Mi as we,Oi as vn,Qt as Xn,Rt as TN,Sr as k,Ti as vL,Ut as V,X as Je,_i as tl,an as Z,c as Bp,ct as MN,f as D,fr as ie,g as DM,ii as re,it as L,k as Fr,ln as _,on as Z9,pn as _e,rr as gn,sn as Zn,tt as Kn,ut as Me,vn as aD,wr as lD,zn as de}from"./chunk-zHe8pzQe.js";import{E as ki,t as ht}from"./main-5RV6DQBL.js";import{n as w}from"./chunk-cyGuHfQv.js";function R(l,o){if(l&1&&(T(0,`div`,10)(1,`span`),we(2),k(),T(3,`pre`,19),_e(4,`code`,20),k()()),l&2){let n=ne();D(2),Fr(`Selected: `,n.selectedIcon()),D(2),Z(`highlight`,n.selectedCode())}}function q(l,o){if(l&1){let n=Xn();T(0,`button`,21),de(`click`,function(){let p=gn(n).$implicit,d=ne();return vn(d.selectedIcon.set(p))}),T(1,`span`,22)(2,`span`,23),_e(3,`bx-icon`,24),k(),T(4,`span`,25),we(5),k()()()}if(l&2){let n=o.$implicit,e=ne();X(`selected`,e.selectedIcon()===n),Z(`surfaceEffects`,!1),L(`aria-pressed`,e.selectedIcon()===n),D(3),Z(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),D(2),Me(n)}}function G(l,o){if(l&1&&(T(0,`p`,13),we(1),k()),l&2){let n=ne();D(),Fr(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var H=class l{pageSize=48;allIcons=FJ;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(o=>({label:`${o}px`,value:o}));strokeSelectOptions=this.strokeWidths.map(o=>({label:`${o}px`,value:o}));searchTerm=_(``);selectedSize=_(`24`);selectedStrokeWidth=_(1.5);page=_(0);selectedIcon=_(null);filteredIcons=v(()=>{let o=this.searchTerm().toLowerCase().trim();return o?this.allIcons.filter(n=>n.includes(o)):this.allIcons});pageCount=v(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=v(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=v(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=v(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=v(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(o){this.searchTerm.set(o),this.page.set(0)}changePage(o){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+o)))}static ɵfac=function(n){return new(n||l)};static ɵcmp=V({type:l,selectors:[[`app-icon-catalog`]],decls:33,vars:18,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`surfaceEffects`,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[`tabindex`,`0`,`aria-label`,`Selected icon HTML example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(T(0,`section`,0)(1,`header`,1)(2,`p`,2),we(3,`Foundations`),k(),T(4,`h1`,3),we(5,`Icons`),k(),T(6,`p`),we(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),k()(),T(8,`div`,4)(9,`bx-search-input`,5),MN(),de(`ngModelChange`,function(d){return e.search(d)}),k(),T(10,`bx-select`,6),MN(),de(`ngModelChange`,function(d){return e.selectedSize.set(d)}),k(),T(11,`bx-select`,7),MN(),de(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),k()(),T(12,`div`,8)(13,`p`,9),we(14),k(),T(15,`span`),we(16,`48 per page`),k()(),re(17,R,5,2,`div`,10),T(18,`div`,11),Kn(19,q,6,8,`button`,12,tl,!1,G,2,1,`p`,13),k(),T(22,`nav`,14)(23,`button`,15),de(`click`,function(){return e.changePage(-1)}),we(24,`Previous`),k(),T(25,`span`,16),we(26),k(),T(27,`button`,15),de(`click`,function(){return e.changePage(1)}),we(28,`Next`),k()(),T(29,`details`,17)(30,`summary`),we(31,`Icon API and accessibility`),k(),_e(32,`app-readme`,18),k()()),n&2&&(D(9),Z(`ngModel`,e.searchTerm()),TN(),D(),Z(`clearable`,!1)(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),TN(),D(),Z(`clearable`,!1)(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),TN(),D(3),lD(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),D(3),ie(e.selectedIcon()?17:-1),D(2),Zn(e.visibleIcons()),D(4),Z(`outlined`,!0)(`disabled`,e.page()===0),D(3),aD(`Page `,e.page()+1,` of `,e.pageCount()),D(),Z(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[ht,Je,Z9,G9,vL,DM,ki,Bp,w],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.catalog-container[_ngcontent-%COMP%] {
  max-width: 88rem;
  margin-inline: auto;
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
.icon-documentation[_ngcontent-%COMP%] {
  border-top: 1px solid var(--%NS%bx-border-default);
  padding-block: 1.5rem;
}
.icon-documentation[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {
  cursor: pointer;
  margin-bottom: 1rem;
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
}`]})};export{H as IconCatalog};