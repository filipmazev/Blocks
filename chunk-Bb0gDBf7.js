import{X as qe,k as e}from"./main-HW2XYL5W.js";import{$i as v,$n as a2,Ai as qR,Bt as P,D as E,Gr as je,Na as zR,Ni as qte,Pa as zn,Si as p,Tn as Vte,W as H,Zr as k,_a as xe,ga as xY,hn as U,ji as qr,ka as z$1,ma as xM,p as Bt,pi as mr,q as Hp,qr as jn,t as $$1,un as Te,wn as Vs,yi as oe}from"./chunk-Dt37D5SH.js";function w(t){return t.layout?[`/components/layout`,t.id]:[`/components`,t.id]}var L=(t,e)=>e.title;var $=(t,e)=>e.id;function z(t,e){if(t&1&&(U(0,`a`,7)(1,`h3`),Te(2),H(),U(3,`p`),Te(4),H(),U(5,`code`),Te(6),H()()),t&2){let n=e.$implicit,r=P(2);oe(`routerLink`,r.componentRoute(n)),k(2),je(n.title),k(2),je(n.description),k(2),je(n.selector)}}function q(t,e){if(t&1&&(U(0,`section`,5)(1,`h2`),Te(2),H(),U(3,`div`,6),jn(4,z,7,4,`a`,7,$),H()()),t&2){let n=e.$implicit;$$1(`aria-label`,n.title),k(2),je(n.title),k(2),zn(n.entries)}}function B(t,e){t&1&&(U(0,`p`),Te(1,`No components match this search. Try a shorter name.`),H())}var R=class t{activatedRoute=p(qr);routeData=xY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});componentRoute=w;layoutOnly=v(()=>this.routeData().layout===!0);category=v(()=>{let e=this.routeData().category;return typeof e==`string`?e:void 0});query=E(``);filtered=v(()=>{let e$1=this.query().trim().toLowerCase();return e.filter(n=>(!this.layoutOnly()||n.layout)&&(!this.category()||n.group===this.category())&&(!e$1||`${n.title} ${n.group} ${n.description}`.toLowerCase().includes(e$1)))});groups=v(()=>[...new Set(this.filtered().map(e=>e.group))].map(e=>({title:e,entries:this.filtered().filter(n=>n.group===e)})));static ɵfac=function(n){return new(n||t)};static ɵcmp=z$1({type:t,selectors:[[`app-component-index`]],decls:14,vars:6,consts:[[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(n,r){n&1&&(U(0,`bx-page-container`)(1,`bx-page-header`,0)(2,`p`),Te(3,`For viewport signals, device detection, scroll locking and shared helpers, explore the `),U(4,`a`,1),Te(5,`Utilities playground`),H(),Te(6,`.`),H()(),U(7,`div`,2)(8,`bx-search-input`,3),zR(),xe(`ngModelChange`,function(F){return r.query.set(F)}),H()(),U(9,`p`,4),Te(10),H(),jn(11,q,6,2,`section`,5,L,!1,B,2,0,`p`),H()),n&2&&(k(),oe(`sectionTitle`,r.layoutOnly()?`Primitives`:r.category()?`Components`:`Blocks reference`)(`pageTitle`,r.layoutOnly()?`Layout`:r.category()??`Components`)(`pageDescription`,r.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),k(7),oe(`ngModel`,r.query()),qR(),k(2),mr(``,r.filtered().length,` components and directives`),k(),zn(r.groups()))},dependencies:[xM,Vs,Hp,Bt,qte,Vte,a2,qe],styles:[`
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