import{B as FZ,Et as Vn,Hn as x,Ht as ce,Jn as zo,K as He,Kt as en,L as Ea,Mt as Xw,P as Di,Pn as uY,R as Ei,S as BT,T as Bn,Tn as pY,Un as xe,W as HT,_n as me,_t as SO,an as ir,gt as S,ht as RS,jn as re,kn as qo,ln as je,mt as Qw,n as ye,on as it,rn as hu,t as Se,tt as Ke,v as Ar,w as Be,wt as Ue,yt as Te,zn as we}from"./main-ERZQBNJW.js";import{n as T}from"./chunk-DA_pRWAu.js";function q(l,a){if(l&1&&(ce(0,`div`,10)(1,`span`),en(2),me(),it(3,`code`,19),me()),l&2){let n=xe();re(2),ir(`Selected: `,n.selectedIcon()),re(),Ke(`textContent`,n.selectedCode())}}function G(l,a){if(l&1){let n=Ea();ce(0,`button`,20),Ue(`click`,function(){let p=Di(n).$implicit,d=xe();return Ei(d.selectedIcon.set(p))}),ce(1,`span`,21),it(2,`bx-icon`,22),me(),ce(3,`span`,23),en(4),me()()}if(l&2){let n=a.$implicit,e=xe();Te(`selected`,e.selectedIcon()===n),Be(`aria-pressed`,e.selectedIcon()===n),re(2),Ke(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),re(2),Ar(n)}}function H(l,a){if(l&1&&(ce(0,`p`,13),en(1),me()),l&2){let n=xe();re(),ir(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var R=class l{pageSize=48;allIcons=FZ;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(a=>({label:`${a}px`,value:a}));strokeSelectOptions=this.strokeWidths.map(a=>({label:`${a}px`,value:a}));searchTerm=S(``);selectedSize=S(`24`);selectedStrokeWidth=S(1.5);page=S(0);selectedIcon=S(null);filteredIcons=x(()=>{let a=this.searchTerm().toLowerCase().trim();return a?this.allIcons.filter(n=>n.includes(a)):this.allIcons});pageCount=x(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=x(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=x(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=x(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=x(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(a){this.searchTerm.set(a),this.page.set(0)}changePage(a){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+a)))}static ɵfac=function(n){return new(n||l)};static ɵcmp=we({type:l,selectors:[[`app-icon-catalog`]],decls:33,vars:16,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`type`,`button`,`bxSurface`,``,1,`icon-card`,3,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[3,`textContent`],[`type`,`button`,`bxSurface`,``,1,`icon-card`,3,`click`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(ce(0,`section`,0)(1,`header`,1)(2,`p`,2),en(3,`Foundations`),me(),ce(4,`h1`,3),en(5,`Icons`),me(),ce(6,`p`),en(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),me()(),ce(8,`div`,4)(9,`bx-search-input`,5),BT(),Ue(`ngModelChange`,function(d){return e.search(d)}),me(),ce(10,`bx-select`,6),BT(),Ue(`ngModelChange`,function(d){return e.selectedSize.set(d)}),me(),ce(11,`bx-select`,7),BT(),Ue(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),me()(),ce(12,`div`,8)(13,`p`,9),en(14),me(),ce(15,`span`),en(16,`48 per page`),me()(),je(17,q,4,2,`div`,10),ce(18,`div`,11),qo(19,G,5,7,`button`,12,hu,!1,H,2,1,`p`,13),me(),ce(22,`nav`,14)(23,`button`,15),Ue(`click`,function(){return e.changePage(-1)}),en(24,`Previous`),me(),ce(25,`span`,16),en(26),me(),ce(27,`button`,15),Ue(`click`,function(){return e.changePage(1)}),en(28,`Next`),me()(),ce(29,`details`,17)(30,`summary`),en(31,`Icon API and accessibility`),me(),it(32,`app-readme`,18),me()()),n&2&&(re(9),Ke(`ngModel`,e.searchTerm()),HT(),re(),Ke(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),HT(),re(),Ke(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),HT(),re(3),Qw(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),re(3),He(e.selectedIcon()?17:-1),re(2),zo(e.visibleIcons()),re(4),Ke(`outlined`,!0)(`disabled`,e.page()===0),re(3),Xw(`Page `,e.page()+1,` of `,e.pageCount()),re(),Ke(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[Vn,pY,uY,SO,RS,Se,ye,T,Bn],styles:[`
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
.icon-card.selected[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-brand);
}
.icon-card[_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.72;
  --%NS%bx-glass-shadow: none;
}
.icon-card[_ngcontent-%COMP%]:hover, 
.icon-card.selected[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface-alt);
}
.icon-card.selected[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
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
.selected-example[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  overflow-wrap: anywhere;
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
}`]})};export{R as IconCatalog};