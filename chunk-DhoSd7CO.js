import{$ as R9,An as pr,En as oy,F as K,H as Mt,Hn as sy,Jn as uY,Lt as ck,N as Jt,Nt as at,O as I,On as pY,Qn as ut,Qt as hr,Rn as rx,Tn as ox,V as Mo,Vt as dd,W as Np,Yt as fr,cn as ko,fr as yi,g as Dw,hn as mk,i as $t,jt as _w,mt as WN,o as Ar,q as Op,st as Ut,tr as vi,vr as zc,wn as ot}from"./chunk-D44OVyuP.js";import{f as te,n as ue,t as S}from"./main-WUOVILFZ.js";import{t as A}from"./chunk-DXG8OZ8F.js";function q(l,a){if(l&1&&(Mt(0,`div`,10)(1,`span`),ko(2),$t(),vi(3,`code`,19),$t()),l&2){let n=pr();Ut(2),yi(`Selected: `,n.selectedIcon()),Ut(),Mo(`textContent`,n.selectedCode())}}function G(l,a){if(l&1){let n=mk();Mt(0,`button`,20),at(`click`,function(){let p=oy(n).$implicit,d=pr();return sy(d.selectedIcon.set(p))}),Mt(1,`span`,21),vi(2,`bx-icon`,22),$t(),Mt(3,`span`,23),ko(4),$t()()}if(l&2){let n=a.$implicit,e=pr();ut(`selected`,e.selectedIcon()===n),Jt(`aria-pressed`,e.selectedIcon()===n),Ut(2),Mo(`name`,n)(`size`,e.selectedSize())(`strokeWidth`,e.selectedStrokeWidth()),Ut(2),zc(n)}}function H(l,a){if(l&1&&(Mt(0,`p`,13),ko(1),$t()),l&2){let n=pr();Ut(),yi(`No icons match “`,n.searchTerm(),`”. Try a shorter name.`)}}var R=class l{pageSize=48;allIcons=R9;sizes=[`16`,`20`,`24`,`28`,`32`,`36`,`40`,`44`,`48`];strokeWidths=[.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];sizeSelectOptions=this.sizes.map(a=>({label:`${a}px`,value:a}));strokeSelectOptions=this.strokeWidths.map(a=>({label:`${a}px`,value:a}));searchTerm=I(``);selectedSize=I(`24`);selectedStrokeWidth=I(1.5);page=I(0);selectedIcon=I(null);filteredIcons=K(()=>{let a=this.searchTerm().toLowerCase().trim();return a?this.allIcons.filter(n=>n.includes(a)):this.allIcons});pageCount=K(()=>Math.max(1,Math.ceil(this.filteredIcons().length/this.pageSize)));visibleIcons=K(()=>this.filteredIcons().slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize));rangeStart=K(()=>this.filteredIcons().length?this.page()*this.pageSize+1:0);rangeEnd=K(()=>Math.min((this.page()+1)*this.pageSize,this.filteredIcons().length));selectedCode=K(()=>`<bx-icon name="${this.selectedIcon()??`blocks`}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`);search(a){this.searchTerm.set(a),this.page.set(0)}changePage(a){this.page.update(n=>Math.max(0,Math.min(this.pageCount()-1,n+a)))}static ɵfac=function(n){return new(n||l)};static ɵcmp=ot({type:l,selectors:[[`app-icon-catalog`]],decls:33,vars:16,consts:[[`aria-labelledby`,`icon-title`,1,`catalog-container`],[1,`page-heading`],[1,`eyebrow`],[`id`,`icon-title`],[1,`filter-bar`],[`label`,`Search icons`,`placeholder`,`Search by name…`,3,`ngModelChange`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`options`,`ngModel`],[`label`,`Stroke`,3,`ngModelChange`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`role`,`status`,1,`selected-example`],[`aria-label`,`Icon results`,1,`icon-grid`],[`type`,`button`,`bxSurface`,``,1,`icon-card`,3,`selected`],[1,`no-results`],[`aria-label`,`Icon result pages`,1,`pagination`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`grayscale`,3,`click`,`outlined`,`disabled`],[`aria-live`,`polite`],[1,`icon-documentation`],[`path`,`projects/blocks/icons/components/README.md`],[3,`textContent`],[`type`,`button`,`bxSurface`,``,1,`icon-card`,3,`click`],[1,`icon-wrapper`],[`color`,`primary`,`bgColor`,`auto`,3,`name`,`size`,`strokeWidth`],[1,`icon-name`]],template:function(n,e){n&1&&(Mt(0,`section`,0)(1,`header`,1)(2,`p`,2),ko(3,`Foundations`),$t(),Mt(4,`h1`,3),ko(5,`Icons`),$t(),Mt(6,`p`),ko(7,`Find a Lucide icon, tune its proportions, and select it for the usage example.`),$t()(),Mt(8,`div`,4)(9,`bx-search-input`,5),rx(),at(`ngModelChange`,function(d){return e.search(d)}),$t(),Mt(10,`bx-select`,6),rx(),at(`ngModelChange`,function(d){return e.selectedSize.set(d)}),$t(),Mt(11,`bx-select`,7),rx(),at(`ngModelChange`,function(d){return e.selectedStrokeWidth.set(d)}),$t()(),Mt(12,`div`,8)(13,`p`,9),ko(14),$t(),Mt(15,`span`),ko(16,`48 per page`),$t()(),hr(17,q,4,2,`div`,10),Mt(18,`div`,11),Np(19,G,5,7,`button`,12,ck,!1,H,2,1,`p`,13),$t(),Mt(22,`nav`,14)(23,`button`,15),at(`click`,function(){return e.changePage(-1)}),ko(24,`Previous`),$t(),Mt(25,`span`,16),ko(26),$t(),Mt(27,`button`,15),at(`click`,function(){return e.changePage(1)}),ko(28,`Next`),$t()(),Mt(29,`details`,17)(30,`summary`),ko(31,`Icon API and accessibility`),$t(),vi(32,`app-readme`,18),$t()()),n&2&&(Ut(9),Mo(`ngModel`,e.searchTerm()),ox(),Ut(),Mo(`options`,e.sizeSelectOptions)(`ngModel`,e.selectedSize()),ox(),Ut(),Mo(`options`,e.strokeSelectOptions)(`ngModel`,e.selectedStrokeWidth()),ox(),Ut(3),_w(``,e.rangeStart(),`–`,e.rangeEnd(),` of `,e.filteredIcons().length,` icons`),Ut(3),fr(e.selectedIcon()?17:-1),Ut(2),Op(e.visibleIcons()),Ut(4),Mo(`outlined`,!0)(`disabled`,e.page()===0),Ut(3),Dw(`Page `,e.page()+1,` of `,e.pageCount()),Ut(),Mo(`outlined`,!0)(`disabled`,e.page()+1>=e.pageCount()))},dependencies:[dd,pY,uY,WN,te,ue,S,A,Ar],styles:[`
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