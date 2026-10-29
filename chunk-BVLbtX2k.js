import{A as Di,F as FZ,G as Hn,H as HT,J as Jw,Kt as ar,Ln as uY,St as SO,Tn as qo,Un as x,Ut as _i,W as He,Yt as ce,_n as nn,bn as pY,d as $T,dn as ke,et as Ma,g as Ae,gn as mu,ht as Qw,k as De,kt as Ue,m as $o,mt as Qe,n as fe,p as $e,sn as ie,t as Se,un as jn,ut as PS,wn as qe,xn as pe,xt as S,yn as ot,yt as Rr}from"./main-NYZXUFEE.js";import{n as T}from"./chunk-CkXz_dvF.js";function q(l,a){if(l&1&&(ce(0,`div`,10)(1,`span`),nn(2),pe(),ot(3,`code`,19),pe()),l&2){let n=ke();ie(2),ar(`Selected: `,n.selectedIcon()),ie(),Qe(`textContent`,n.selectedCode())}}function G(l,a){if(l&1){let n=Ma();ce(0,`button`,20),qe(`click`,function(){let p=_i(n).$implicit,d=ke();return Di(d.selectedIcon.set(p))}),ce(1,`span`,21),ot(2,`bx-icon`,22),pe(),ce(3,`span`,23),nn(4),pe()()}if(l&2){let n=a.$implicit,e=ke();Ae(`selected`,e.selectedIcon()===n),He(`aria-pressed`,e.selectedIcon()===n),ie(2),Qe(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),ie(2),Rr(n)}}function H(l,a){if(l&1&&(ce(0,`p`,13),nn(1),pe()),l&2){let n=ke();ie(),ar(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var R=class l{pageSize=48;allIcons=FZ;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(a=>({label:`${a}px`,value:a}));strokeSelectOptions=this.strokeWidths.map(a=>({label:`${a}px`,value:a}));searchTerm=S(``);selectedSize=S(`24`);selectedStrokeWidth=S(1.5);page=S(0);selectedIcon=S(null);filteredIcons=x(()=>{let a=this.searchTerm().toLowerCase().trim();return a?this.allIcons.filter(n=>n.includes(a)):this.allIcons});pageCount=x(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=x(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=x(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=x(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=x(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(a){this.searchTerm.set(a),this.page.set(0)}changePage(a){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+a)))}static ɵfac=function(n){return new(n||l)};static ɵcmp=De({type:l,selectors:[[`app-icon-catalog`]],decls:33,vars:16,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`type`,`button`,`bxSurface`,``,1,`icon-card`,3,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[3,`textContent`],[`type`,`button`,`bxSurface`,``,1,`icon-card`,3,`click`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(ce(0,`section`,0)(1,`header`,1)(2,`p`,2),nn(3,`Foundations`),pe(),ce(4,`h1`,3),nn(5,`Icons`),pe(),ce(6,`p`),nn(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),pe()(),ce(8,`div`,4)(9,`bx-search-input`,5),HT(),qe(`ngModelChange`,function(d){return e.search(d)}),pe(),ce(10,`bx-select`,6),HT(),qe(`ngModelChange`,function(d){return e.selectedSize.set(d)}),pe(),ce(11,`bx-select`,7),HT(),qe(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),pe()(),ce(12,`div`,8)(13,`p`,9),nn(14),pe(),ce(15,`span`),nn(16,`48 per page`),pe()(),Ue(17,q,4,2,`div`,10),ce(18,`div`,11),$o(19,G,5,7,`button`,12,mu,!1,H,2,1,`p`,13),pe(),ce(22,`nav`,14)(23,`button`,15),qe(`click`,function(){return e.changePage(-1)}),nn(24,`Previous`),pe(),ce(25,`span`,16),nn(26),pe(),ce(27,`button`,15),qe(`click`,function(){return e.changePage(1)}),nn(28,`Next`),pe()(),ce(29,`details`,17)(30,`summary`),nn(31,`Icon API and accessibility`),pe(),ot(32,`app-readme`,18),pe()()),n&2&&(ie(9),Qe(`ngModel`,e.searchTerm()),$T(),ie(),Qe(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),$T(),ie(),Qe(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),$T(),ie(3),Jw(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),ie(3),$e(e.selectedIcon()?17:-1),ie(2),qo(e.visibleIcons()),ie(4),Qe(`outlined`,!0)(`disabled`,e.page()===0),ie(3),Qw(`Page `,e.page()+1,` of `,e.pageCount()),ie(),Qe(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[jn,pY,uY,SO,PS,Se,fe,T,Hn],styles:[`
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