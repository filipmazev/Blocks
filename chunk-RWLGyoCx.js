import{Bi as xr,Bt as Re,Cr as j,E as Er,Et as P,Fi as vx,Hr as mk,Ht as S,Ir as lr,Kt as Sr,Mi as vk,Nn as ae,Oi as v,Ri as x,Un as bt,Vn as be,Wn as bx,di as qf,fi as qn,gt as N7,mr as hT,qn as ce,r as $n,st as L,ti as pF,u as Al,vr as hne,wi as ue,wr as je,wt as Oe,xn as Z,xt as O7,yi as te,z as H$1}from"./chunk-BjKrh6Fv.js";import{E as ki,t as ht}from"./main-VO4IVRBX.js";import{n as w}from"./chunk-Bf8a64Dt.js";function R(l,o){if(l&1&&(P(0,`div`,10)(1,`span`),Re(2),L(),P(3,`pre`,19),Oe(4,`code`,20),L()()),l&2){let n=ae();S(2),lr(`Selected: `,n.selectedIcon()),S(2),te(`highlight`,n.selectedCode())}}function q(l,o){if(l&1){let n=Er();P(0,`button`,21),be(`click`,function(){let p=$n(n).$implicit,d=ae();return qn(d.selectedIcon.set(p))}),P(1,`span`,22)(2,`span`,23),Oe(3,`bx-icon`,24),L(),P(4,`span`,25),Re(5),L()()()}if(l&2){let n=o.$implicit,e=ae();Z(`selected`,e.selectedIcon()===n),te(`surfaceEffects`,!1),j(`aria-pressed`,e.selectedIcon()===n),S(3),te(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),S(2),je(n)}}function G(l,o){if(l&1&&(P(0,`p`,13),Re(1),L()),l&2){let n=ae();S(),lr(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var H=class l{pageSize=48;allIcons=hne;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(o=>({label:`${o}px`,value:o}));strokeSelectOptions=this.strokeWidths.map(o=>({label:`${o}px`,value:o}));searchTerm=x(``);selectedSize=x(`24`);selectedStrokeWidth=x(1.5);page=x(0);selectedIcon=x(null);filteredIcons=v(()=>{let o=this.searchTerm().toLowerCase().trim();return o?this.allIcons.filter(n=>n.includes(o)):this.allIcons});pageCount=v(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=v(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=v(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=v(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=v(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(o){this.searchTerm.set(o),this.page.set(0)}changePage(o){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+o)))}static ɵfac=function(n){return new(n||l)};static ɵcmp=H$1({type:l,selectors:[[`app-icon-catalog`]],decls:33,vars:18,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`surfaceEffects`,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[`tabindex`,`0`,`aria-label`,`Selected icon HTML example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(P(0,`section`,0)(1,`header`,1)(2,`p`,2),Re(3,`Foundations`),L(),P(4,`h1`,3),Re(5,`Icons`),L(),P(6,`p`),Re(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),L()(),P(8,`div`,4)(9,`bx-search-input`,5),mk(),be(`ngModelChange`,function(d){return e.search(d)}),L(),P(10,`bx-select`,6),mk(),be(`ngModelChange`,function(d){return e.selectedSize.set(d)}),L(),P(11,`bx-select`,7),mk(),be(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),L()(),P(12,`div`,8)(13,`p`,9),Re(14),L(),P(15,`span`),Re(16,`48 per page`),L()(),ce(17,R,5,2,`div`,10),P(18,`div`,11),xr(19,q,6,8,`button`,12,Al,!1,G,2,1,`p`,13),L(),P(22,`nav`,14)(23,`button`,15),be(`click`,function(){return e.changePage(-1)}),Re(24,`Previous`),L(),P(25,`span`,16),Re(26),L(),P(27,`button`,15),be(`click`,function(){return e.changePage(1)}),Re(28,`Next`),L()(),P(29,`details`,17)(30,`summary`),Re(31,`Icon API and accessibility`),L(),Oe(32,`app-readme`,18),L()()),n&2&&(S(9),te(`ngModel`,e.searchTerm()),vk(),S(),te(`clearable`,!1)(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),vk(),S(),te(`clearable`,!1)(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),vk(),S(3),bx(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),S(3),ue(e.selectedIcon()?17:-1),S(2),Sr(e.visibleIcons()),S(4),te(`outlined`,!0)(`disabled`,e.page()===0),S(3),vx(`Page `,e.page()+1,` of `,e.pageCount()),S(),te(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[ht,bt,O7,N7,pF,hT,ki,qf,w],styles:[`
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