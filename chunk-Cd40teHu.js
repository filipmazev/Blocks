import{Cn as lr,Dn as nd,G as M9,L as It,Pn as ow,Rt as at,S as Cx,Ut as cr,V as Kt,Y as Nc,Yn as sw,_n as kT,an as gt,b as Co,bn as lN,cn as hi,dr as wp,fn as it,g as Bt,gn as jt,ht as Uv,it as S,kt as _T,ln as i5,or as vo,q as Mr,rr as ur,s as $v,tn as fi,x as Cp,xr as yx,yn as l5,yt as W}from"./chunk-CNPhXHsc.js";import{f as te,n as le,t as S$1}from"./main-ZPS4CPYA.js";import{t as A}from"./chunk-D7S6Hi50.js";function q(l,a){if(l&1&&(It(0,`div`,10)(1,`span`),Co(2),Bt(),fi(3,`code`,19),Bt()),l&2){let n=ur();jt(2),hi(`Selected: `,n.selectedIcon()),jt(),vo(`textContent`,n.selectedCode())}}function G(l,a){if(l&1){let n=kT();It(0,`button`,20),it(`click`,function(){let p=Uv(n).$implicit,d=ur();return $v(d.selectedIcon.set(p))}),It(1,`span`,21),fi(2,`bx-icon`,22),Bt(),It(3,`span`,23),Co(4),Bt()()}if(l&2){let n=a.$implicit,e=ur();at(`selected`,e.selectedIcon()===n),Kt(`aria-pressed`,e.selectedIcon()===n),jt(2),vo(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),jt(2),Nc(n)}}function H(l,a){if(l&1&&(It(0,`p`,13),Co(1),Bt()),l&2){let n=ur();jt(),hi(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var R=class l{pageSize=48;allIcons=M9;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(a=>({label:`${a}px`,value:a}));strokeSelectOptions=this.strokeWidths.map(a=>({label:`${a}px`,value:a}));searchTerm=S(``);selectedSize=S(`24`);selectedStrokeWidth=S(1.5);page=S(0);selectedIcon=S(null);filteredIcons=W(()=>{let a=this.searchTerm().toLowerCase().trim();return a?this.allIcons.filter(n=>n.includes(a)):this.allIcons});pageCount=W(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=W(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=W(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=W(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=W(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(a){this.searchTerm.set(a),this.page.set(0)}changePage(a){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+a)))}static ɵfac=function(n){return new(n||l)};static ɵcmp=gt({type:l,selectors:[[`app-icon-catalog`]],decls:33,vars:16,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`type`,`button`,`bxSurface`,``,1,`icon-card`,3,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[3,`textContent`],[`type`,`button`,`bxSurface`,``,1,`icon-card`,3,`click`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(It(0,`section`,0)(1,`header`,1)(2,`p`,2),Co(3,`Foundations`),Bt(),It(4,`h1`,3),Co(5,`Icons`),Bt(),It(6,`p`),Co(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),Bt()(),It(8,`div`,4)(9,`bx-search-input`,5),yx(),it(`ngModelChange`,function(d){return e.search(d)}),Bt(),It(10,`bx-select`,6),yx(),it(`ngModelChange`,function(d){return e.selectedSize.set(d)}),Bt(),It(11,`bx-select`,7),yx(),it(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),Bt()(),It(12,`div`,8)(13,`p`,9),Co(14),Bt(),It(15,`span`),Co(16,`48 per page`),Bt()(),lr(17,q,4,2,`div`,10),It(18,`div`,11),Cp(19,G,5,7,`button`,12,_T,!1,H,2,1,`p`,13),Bt(),It(22,`nav`,14)(23,`button`,15),it(`click`,function(){return e.changePage(-1)}),Co(24,`Previous`),Bt(),It(25,`span`,16),Co(26),Bt(),It(27,`button`,15),it(`click`,function(){return e.changePage(1)}),Co(28,`Next`),Bt()(),It(29,`details`,17)(30,`summary`),Co(31,`Icon API and accessibility`),Bt(),fi(32,`app-readme`,18),Bt()()),n&2&&(jt(9),vo(`ngModel`,e.searchTerm()),Cx(),jt(),vo(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),Cx(),jt(),vo(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),Cx(),jt(3),sw(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),jt(3),cr(e.selectedIcon()?17:-1),jt(2),wp(e.visibleIcons()),jt(4),vo(`outlined`,!0)(`disabled`,e.page()===0),jt(3),ow(`Page `,e.page()+1,` of `,e.pageCount()),jt(),vo(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[nd,l5,i5,lN,te,le,S$1,A,Mr],styles:[`
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