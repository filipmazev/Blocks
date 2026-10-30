import{An as _,Ci as zr,G as If,Jr as q_,Lr as ne,Mn as _t,Mr as me,O as Fe,Or as le,P as Gr,Pn as aQ,Wr as pe,Zn as fe,_r as je,br as jx,ci as w,dt as M9,en as U_,ft as Me,gi as ye,gn as X,gt as NP,j as Ga,ln as W,ni as tt,oi as us,p as Br,qr as q0,ri as ue,ui as wr,ut as M,vi as z0,vr as jr,xr as k9}from"./chunk-DQTC9SUR.js";import{b as Oi}from"./main-2QOMNNZQ.js";import{n as q$1}from"./chunk-BLjMr5wS.js";function R(l,a){if(l&1&&(W(0,`div`,10)(1,`span`),je(2),X(),Fe(3,`code`,19),X()),l&2){let n=ue();M(2),wr(`Selected: `,n.selectedIcon()),M(),fe(`textContent`,n.selectedCode())}}function q(l,a){if(l&1){let n=us();W(0,`button`,20),Me(`click`,function(){let m=Br(n).$implicit,d=ue();return jr(d.selectedIcon.set(m))}),W(1,`span`,21)(2,`span`,22),Fe(3,`bx-icon`,23),X(),W(4,`span`,24),je(5),X()()()}if(l&2){let n=a.$implicit,e=ue();ne(`selected`,e.selectedIcon()===n),fe(`surfaceEffects`,!1),ye(`aria-pressed`,e.selectedIcon()===n),M(3),fe(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),M(2),tt(n)}}function G(l,a){if(l&1&&(W(0,`p`,13),je(1),X()),l&2){let n=ue();M(),wr(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var L=class l{pageSize=48;allIcons=aQ;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(a=>({label:`${a}px`,value:a}));strokeSelectOptions=this.strokeWidths.map(a=>({label:`${a}px`,value:a}));searchTerm=_(``);selectedSize=_(`24`);selectedStrokeWidth=_(1.5);page=_(0);selectedIcon=_(null);filteredIcons=w(()=>{let a=this.searchTerm().toLowerCase().trim();return a?this.allIcons.filter(n=>n.includes(a)):this.allIcons});pageCount=w(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=w(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=w(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=w(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=w(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(a){this.searchTerm.set(a),this.page.set(0)}changePage(a){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+a)))}static ɵfac=function(n){return new(n||l)};static ɵcmp=le({type:l,selectors:[[`app-icon-catalog`]],decls:33,vars:16,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`surfaceEffects`,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[3,`textContent`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(W(0,`section`,0)(1,`header`,1)(2,`p`,2),je(3,`Foundations`),X(),W(4,`h1`,3),je(5,`Icons`),X(),W(6,`p`),je(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),X()(),W(8,`div`,4)(9,`bx-search-input`,5),q0(),Me(`ngModelChange`,function(d){return e.search(d)}),X(),W(10,`bx-select`,6),q0(),Me(`ngModelChange`,function(d){return e.selectedSize.set(d)}),X(),W(11,`bx-select`,7),q0(),Me(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),X()(),W(12,`div`,8)(13,`p`,9),je(14),X(),W(15,`span`),je(16,`48 per page`),X()(),pe(17,R,4,2,`div`,10),W(18,`div`,11),zr(19,q,6,8,`button`,12,Ga,!1,G,2,1,`p`,13),X(),W(22,`nav`,14)(23,`button`,15),Me(`click`,function(){return e.changePage(-1)}),je(24,`Previous`),X(),W(25,`span`,16),je(26),X(),W(27,`button`,15),Me(`click`,function(){return e.changePage(1)}),je(28,`Next`),X()(),W(29,`details`,17)(30,`summary`),je(31,`Icon API and accessibility`),X(),Fe(32,`app-readme`,18),X()()),n&2&&(M(9),fe(`ngModel`,e.searchTerm()),z0(),M(),fe(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),z0(),M(),fe(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),z0(),M(3),q_(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),M(3),me(e.selectedIcon()?17:-1),M(2),Gr(e.visibleIcons()),M(4),fe(`outlined`,!0)(`disabled`,e.page()===0),M(3),U_(`Page `,e.page()+1,` of `,e.pageCount()),M(),fe(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[_t,k9,M9,NP,jx,Oi,If,q$1],styles:[`
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
}`]})};export{L as IconCatalog};