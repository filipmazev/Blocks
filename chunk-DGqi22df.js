import{k as e}from"./main-GAA3IH53.js";import{t as Ae}from"./chunk-CjIjxXph.js";import{$t as Te,Dr as gr,Hn as ae,Jr as jn,Kr as je,Nn as _,Nt as Ot,Ur as j,Vn as aY,W as H,Yr as jr,_i as ote,an as V,b as D,dn as Vn,ft as LR,hr as fM,j as F,jt as Op,kt as OR,ni as lte,nn as U,ra as ve,ta as v,tt as JF,vi as p,wt as Ns}from"./chunk-DhMqzCIY.js";function w(t){return t.layout?[`/components/layout`,t.id]:[`/components`,t.id]}var L=(t,n)=>n.title;var $=(t,n)=>n.id;function z(t,n){if(t&1&&(j(0,`a`,7)(1,`h3`),Te(2),U(),j(3,`p`),Te(4),U(),j(5,`code`),Te(6),U()()),t&2){let e=n.$implicit,l=F(2);ae(`routerLink`,l.componentRoute(e)),D(2),je(e.title),D(2),je(e.description),D(2),je(e.selector)}}function q(t,n){if(t&1&&(j(0,`section`,5)(1,`h2`),Te(2),U(),j(3,`div`,6),Vn(4,z,7,4,`a`,7,$),U()()),t&2){let e=n.$implicit;H(`aria-label`,e.title),D(2),je(e.title),D(2),jn(e.entries)}}function B(t,n){t&1&&(j(0,`p`),Te(1,`No components match this search. Try a shorter name.`),U())}var R=class t{activatedRoute=p(jr);routeData=aY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});componentRoute=w;layoutOnly=v(()=>this.routeData().layout===!0);query=_(``);filtered=v(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>(!this.layoutOnly()||e.layout)&&(!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n)))});groups=v(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=V({type:t,selectors:[[`app-component-index`]],decls:14,vars:6,consts:[[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,l){e&1&&(j(0,`bx-page-container`)(1,`bx-page-header`,0)(2,`p`),Te(3,`For viewport signals, device detection, scroll locking and shared helpers, explore the `),j(4,`a`,1),Te(5,`Utilities playground`),U(),Te(6,`.`),U()(),j(7,`div`,2)(8,`bx-search-input`,3),OR(),ve(`ngModelChange`,function(F){return l.query.set(F)}),U()(),j(9,`p`,4),Te(10),U(),Vn(11,q,6,2,`section`,5,L,!1,B,2,0,`p`),U()),e&2&&(D(),ae(`sectionTitle`,l.layoutOnly()?`Primitives`:`Blocks reference`)(`pageTitle`,l.layoutOnly()?`Layout`:`Components`)(`pageDescription`,l.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),D(7),ae(`ngModel`,l.query()),LR(),D(2),gr(``,l.filtered().length,` components and directives`),D(),jn(l.groups()))},dependencies:[fM,Ns,Op,Ot,lte,ote,JF,Ae],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.result-count[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-secondary);
}
h2[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  margin: 0 0 1rem;
}
.catalog-group[_ngcontent-%COMP%] {
  padding: 1.25rem;
  margin: 1.5rem 0;
  border-radius: 0.75rem;
}
h3[_ngcontent-%COMP%] {
  font-size: 1rem;
  margin: 0;
}
p[_ngcontent-%COMP%] {
  line-height: 1.65;
  color: var(--%NS%bx-text-secondary);
}
.catalog-search[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 30rem;
  font-size: 0.875rem;
}
.catalog-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));
  gap: 1rem;
}
.catalog-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  text-decoration: none;
  background: transparent;
  color: inherit;
}
.catalog-card[_ngcontent-%COMP%]:hover {
  border-color: var(--%NS%bx-border-strong);
}
.catalog-card[_ngcontent-%COMP%]:focus-visible, 
input[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 3px;
}
.catalog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0.75rem 0 1rem;
  font-size: 0.875rem;
  flex: 1;
}
code[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
}`]})};export{R as ComponentIndex};