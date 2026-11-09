import{k as e}from"./main-72PK7OKX.js";import{s as qe}from"./chunk-BrHceUG-.js";import{A as E,Ga as za,Ia as ye,It as NY,Na as wr,Nn as Vt,Oa as vF,Rr as fne,Ui as p,Wn as Y,Yn as ZR,Z as Hn,Zi as q$1,a as $p,dr as b,dt as K,ea as qe$1,et as IM,gi as le,gt as Kr,in as QR,na as qn,t as $$1,vt as L$1,w as D,xr as cne,zt as Ne}from"./chunk-CwZ5dsYL.js";function w(t){return t.layout?[`/components/layout`,t.id]:[`/components`,t.id]}var L=(t,e)=>e.title;var $=(t,e)=>e.id;function z(t,e){if(t&1&&(K(0,`a`,7)(1,`h3`),Ne(2),$$1(),K(3,`p`),Ne(4),$$1(),K(5,`code`),Ne(6),$$1()()),t&2){let n=e.$implicit,a=L$1(2);le(`routerLink`,a.componentRoute(n)),D(2),qe$1(n.title),D(2),qe$1(n.description),D(2),qe$1(n.selector)}}function q(t,e){if(t&1&&(K(0,`section`,5)(1,`h2`),Ne(2),$$1(),K(3,`div`,6),Hn(4,z,7,4,`a`,7,$),$$1()()),t&2){let n=e.$implicit;Y(`aria-label`,n.title),D(2),qe$1(n.title),D(2),qn(n.entries)}}function B(t,e){t&1&&(K(0,`p`),Ne(1,`No components match this search. Try a shorter name.`),$$1())}var R=class t{activatedRoute=p(Kr);routeData=NY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});componentRoute=w;layoutOnly=b(()=>this.routeData().layout===!0);category=b(()=>{let e=this.routeData().category;return typeof e==`string`?e:void 0});query=E(``);filtered=b(()=>{let e$1=this.query().trim().toLowerCase();return e.filter(n=>(!this.layoutOnly()||n.layout)&&(!this.category()||n.group===this.category())&&(!e$1||`${n.title} ${n.group} ${n.description}`.toLowerCase().includes(e$1)))});groups=b(()=>[...new Set(this.filtered().map(e=>e.group))].map(e=>({title:e,entries:this.filtered().filter(n=>n.group===e)})));static ɵfac=function(n){return new(n||t)};static ɵcmp=q$1({type:t,selectors:[[`app-component-index`]],decls:14,vars:6,consts:[[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(n,a){n&1&&(K(0,`bx-page-container`)(1,`bx-page-header`,0)(2,`p`),Ne(3,`For viewport signals, device detection, scroll locking and shared helpers, explore the `),K(4,`a`,1),Ne(5,`Utilities playground`),$$1(),Ne(6,`.`),$$1()(),K(7,`div`,2)(8,`bx-search-input`,3),ZR(),ye(`ngModelChange`,function(F){return a.query.set(F)}),$$1()(),K(9,`p`,4),Ne(10),$$1(),Hn(11,q,6,2,`section`,5,L,!1,B,2,0,`p`),$$1()),n&2&&(D(),le(`sectionTitle`,a.layoutOnly()?`Primitives`:a.category()?`Components`:`Blocks reference`)(`pageTitle`,a.layoutOnly()?`Layout`:a.category()??`Components`)(`pageDescription`,a.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),D(7),le(`ngModel`,a.query()),QR(),D(2),wr(``,a.filtered().length,` components and directives`),D(),qn(a.groups()))},dependencies:[IM,za,$p,Vt,fne,cne,vF,qe],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.result-count[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-secondary);
}
h2[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  margin: 0 0 var(--%NS%bx-space-4, 1rem);
}
.catalog-group[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-5, 1.25rem);
  margin: var(--%NS%bx-space-6, 1.5rem) 0;
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
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
  gap: var(--%NS%bx-space-2, 0.5rem);
  max-width: 30rem;
  font-size: 0.875rem;
}
.catalog-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));
  gap: var(--%NS%bx-space-4, 1rem);
}
.catalog-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  padding: var(--%NS%bx-space-5, 1.25rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
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
  margin: var(--%NS%bx-space-3, 0.75rem) 0 var(--%NS%bx-space-4, 1rem);
  font-size: 0.875rem;
  flex: 1;
}
code[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
}`]})};export{R as ComponentIndex};