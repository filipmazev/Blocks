import{$r as tN,A as Ga,Dn as Zx,Dr as ne,H as J0,On as _,Qr as se,Qt as W_,Ut as Ur,V as If,Vn as de,Wr as qr,Y as KK,Zt as W,_n as Yr,at as Kr,f as Ce,fr as jP,gi as y,ir as he,k as G_,mi as xr,mt as NQ,n as $K,qt as Ve,ri as tt,sr as hs,st as M,tr as ge,vi as ye,x as Et,xr as me,xt as Q,yt as Pe}from"./chunk-C74CBOi9.js";import{T as ki,t as ht}from"./main-UM7HDCHR.js";import{n as w}from"./chunk-Du0uqn1q.js";function R(l,o){if(l&1&&(W(0,`div`,10)(1,`span`),Ve(2),Q(),W(3,`pre`,19),Pe(4,`code`,20),Q()()),l&2){let n=de();M(2),xr(`Selected: `,n.selectedIcon()),M(2),he(`highlight`,n.selectedCode())}}function q(l,o){if(l&1){let n=hs();W(0,`button`,21),Ce(`click`,function(){let p=Ur(n).$implicit,d=de();return qr(d.selectedIcon.set(p))}),W(1,`span`,22)(2,`span`,23),Pe(3,`bx-icon`,24),Q(),W(4,`span`,25),Ve(5),Q()()()}if(l&2){let n=o.$implicit,e=de();ne(`selected`,e.selectedIcon()===n),he(`surfaceEffects`,!1),ye(`aria-pressed`,e.selectedIcon()===n),M(3),he(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),M(2),tt(n)}}function G(l,o){if(l&1&&(W(0,`p`,13),Ve(1),Q()),l&2){let n=de();M(),xr(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var H=class l{pageSize=48;allIcons=NQ;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(o=>({label:`${o}px`,value:o}));strokeSelectOptions=this.strokeWidths.map(o=>({label:`${o}px`,value:o}));searchTerm=_(``);selectedSize=_(`24`);selectedStrokeWidth=_(1.5);page=_(0);selectedIcon=_(null);filteredIcons=y(()=>{let o=this.searchTerm().toLowerCase().trim();return o?this.allIcons.filter(n=>n.includes(o)):this.allIcons});pageCount=y(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=y(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=y(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=y(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=y(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(o){this.searchTerm.set(o),this.page.set(0)}changePage(o){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+o)))}static ɵfac=function(n){return new(n||l)};static ɵcmp=se({type:l,selectors:[[`app-icon-catalog`]],decls:33,vars:18,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`surfaceEffects`,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[`tabindex`,`0`,`aria-label`,`Selected icon HTML example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(W(0,`section`,0)(1,`header`,1)(2,`p`,2),Ve(3,`Foundations`),Q(),W(4,`h1`,3),Ve(5,`Icons`),Q(),W(6,`p`),Ve(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),Q()(),W(8,`div`,4)(9,`bx-search-input`,5),J0(),Ce(`ngModelChange`,function(d){return e.search(d)}),Q(),W(10,`bx-select`,6),J0(),Ce(`ngModelChange`,function(d){return e.selectedSize.set(d)}),Q(),W(11,`bx-select`,7),J0(),Ce(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),Q()(),W(12,`div`,8)(13,`p`,9),Ve(14),Q(),W(15,`span`),Ve(16,`48 per page`),Q()(),me(17,R,5,2,`div`,10),W(18,`div`,11),Yr(19,q,6,8,`button`,12,Ga,!1,G,2,1,`p`,13),Q(),W(22,`nav`,14)(23,`button`,15),Ce(`click`,function(){return e.changePage(-1)}),Ve(24,`Previous`),Q(),W(25,`span`,16),Ve(26),Q(),W(27,`button`,15),Ce(`click`,function(){return e.changePage(1)}),Ve(28,`Next`),Q()(),W(29,`details`,17)(30,`summary`),Ve(31,`Icon API and accessibility`),Q(),Pe(32,`app-readme`,18),Q()()),n&2&&(M(9),he(`ngModel`,e.searchTerm()),tN(),M(),he(`clearable`,!1)(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),tN(),M(),he(`clearable`,!1)(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),tN(),M(3),W_(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),M(3),ge(e.selectedIcon()?17:-1),M(2),Kr(e.visibleIcons()),M(4),he(`outlined`,!0)(`disabled`,e.page()===0),M(3),G_(`Page `,e.page()+1,` of `,e.pageCount()),M(),he(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[ht,Et,KK,$K,jP,Zx,ki,If,w],styles:[`
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