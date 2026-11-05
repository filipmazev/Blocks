import{n as w}from"./chunk-DGgo5410.js";import{t as ht,y as Ni}from"./main-2D43OMMH.js";import{Ai as wR,An as ae,Bn as de,Br as ne,Ci as vR,Dt as QZ,Ei as vt,It as S,Mr as mS,N as Gh,Nn as bS,P as Gn,Q as L,Rr as nQ,S as Dr,Sn as _,Vt as Sr,Wi as ze,Zt as V,bt as P,d as B,gn as Z,jn as b,kr as mM,mt as Ne,o as $n,ot as Lne,rt as Ll,u as An,vi as ue,wn as _r,xi as vF,yt as Oe,zi as ye}from"./chunk-EuYK8zUg.js";function H(n,i){if(n&1&&(P(0,`div`,10)(1,`span`),Ne(2),L(),P(3,`pre`,19),Oe(4,`code`,20),L()()),n&2){let r=ae();_(2),An(`Selected: `,r.selectedIcon()),_(2),ne(`highlight`,r.selectedCode())}}function R(n,i){if(n&1){let r=Dr();P(0,`button`,21),ye(`click`,function(){let p=$n(r).$implicit,c=ae();return Gn(c.selectedIcon.set(p))}),P(1,`span`,22)(2,`span`,23),Oe(3,`bx-icon`,24),L(),P(4,`span`,25),Ne(5),L()()()}if(n&2){let r=i.$implicit,e=ae();Z(`selected`,e.selectedIcon()===r),ne(`surfaceEffects`,!1),V(`aria-pressed`,e.selectedIcon()===r),_(3),ne(`name`,r)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),_(2),ze(r)}}function G(n,i){if(n&1&&(P(0,`p`,13),Ne(1),L()),n&2){let r=ae();_(),An(`No icons match “`,r.searchTerm(),`”. Try a shorter name.`)}}var A=class n{pageSize=48;allIcons=Lne;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(i=>({label:`${i}px`,value:i}));strokeSelectOptions=this.strokeWidths.map(i=>({label:`${i}px`,value:i}));searchTerm=S(``);selectedSize=S(`24`);selectedStrokeWidth=S(1.5);page=S(0);selectedIcon=S(null);filteredIcons=b(()=>{let i=this.searchTerm().toLowerCase().trim();return i?this.allIcons.filter(r=>r.includes(i)):this.allIcons});pageCount=b(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=b(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=b(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=b(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=b(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(i){this.searchTerm.set(i),this.page.set(0)}changePage(i){this.page.update(r=>Math.max(0,Math.min(this.pageCount()-1,r+i)))}static ɵfac=function(r){return new(r||n)};static ɵcmp=B({type:n,selectors:[[`app-icon-catalog`]],decls:33,vars:18,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`surfaceEffects`,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[`tabindex`,`0`,`aria-label`,`Selected icon HTML example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`icon-card`,3,`click`,`surfaceEffects`],[1,`icon-card-content`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(r,e){r&1&&(P(0,`section`,0)(1,`header`,1)(2,`p`,2),Ne(3,`Foundations`),L(),P(4,`h1`,3),Ne(5,`Icons`),L(),P(6,`p`),Ne(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),L()(),P(8,`div`,4)(9,`bx-search-input`,5),vR(),ye(`ngModelChange`,function(c){return e.search(c)}),L(),P(10,`bx-select`,6),vR(),ye(`ngModelChange`,function(c){return e.selectedSize.set(c)}),L(),P(11,`bx-select`,7),vR(),ye(`ngModelChange`,function(c){return e.selectedStrokeWidth.set(c)}),L()(),P(12,`div`,8)(13,`p`,9),Ne(14),L(),P(15,`span`),Ne(16,`48 per page`),L()(),ue(17,H,5,2,`div`,10),P(18,`div`,11),Sr(19,R,6,8,`button`,12,Ll,!1,G,2,1,`p`,13),L(),P(22,`nav`,14)(23,`button`,15),ye(`click`,function(){return e.changePage(-1)}),Ne(24,` Previous `),L(),P(25,`span`,16),Ne(26),L(),P(27,`button`,15),ye(`click`,function(){return e.changePage(1)}),Ne(28,` Next `),L()(),P(29,`details`,17)(30,`summary`),Ne(31,`Icon API and accessibility`),L(),Oe(32,`app-readme`,18),L()()),r&2&&(_(9),ne(`ngModel`,e.searchTerm()),wR(),_(),ne(`clearable`,!1)(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),wR(),_(),ne(`clearable`,!1)(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),wR(),_(3),bS(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),_(3),de(e.selectedIcon()?17:-1),_(2),_r(e.visibleIcons()),_(4),ne(`outlined`,!0)(`disabled`,e.page()===0),_(3),mS(`Page `,e.page()+1,` of `,e.pageCount()),_(),ne(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[ht,vt,nQ,QZ,vF,mM,Ni,Gh,w],styles:[`
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
}`]})};export{A as IconCatalog};