import{X as qe,k as e}from"./main-6HCYTG5A.js";import{$ as Hn,Bn as Xte,Dn as WR,Fa as za,G as Ft,K as G,Ma as yr,Mi as p,N as E,Q as He,Ri as q$1,Vi as qn,X as H,aa as tne,ci as le,fa as v,fn as Te,gt as Kr,i as $R,in as SM,ja as ye,on as SY,s as $p,t as $$1,vr as dF,y as C,yt as L$1}from"./chunk-cpWQWn_p.js";function w(t){return t.layout?[`/components/layout`,t.id]:[`/components`,t.id]}var L=(t,e)=>e.title;var $=(t,e)=>e.id;function z(t,e){if(t&1&&($$1(0,`a`,7)(1,`h3`),Te(2),q$1(),$$1(3,`p`),Te(4),q$1(),$$1(5,`code`),Te(6),q$1()()),t&2){let n=e.$implicit,a=L$1(2);le(`routerLink`,a.componentRoute(n)),E(2),He(n.title),E(2),He(n.description),E(2),He(n.selector)}}function q(t,e){if(t&1&&($$1(0,`section`,5)(1,`h2`),Te(2),q$1(),$$1(3,`div`,6),Hn(4,z,7,4,`a`,7,$),q$1()()),t&2){let n=e.$implicit;G(`aria-label`,n.title),E(2),He(n.title),E(2),qn(n.entries)}}function B(t,e){t&1&&($$1(0,`p`),Te(1,`No components match this search. Try a shorter name.`),q$1())}var R=class t{activatedRoute=p(Kr);routeData=SY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});componentRoute=w;layoutOnly=v(()=>this.routeData().layout===!0);category=v(()=>{let e=this.routeData().category;return typeof e==`string`?e:void 0});query=C(``);filtered=v(()=>{let e$1=this.query().trim().toLowerCase();return e.filter(n=>(!this.layoutOnly()||n.layout)&&(!this.category()||n.group===this.category())&&(!e$1||`${n.title} ${n.group} ${n.description}`.toLowerCase().includes(e$1)))});groups=v(()=>[...new Set(this.filtered().map(e=>e.group))].map(e=>({title:e,entries:this.filtered().filter(n=>n.group===e)})));static ɵfac=function(n){return new(n||t)};static ɵcmp=H({type:t,selectors:[[`app-component-index`]],decls:14,vars:6,consts:[[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(n,a){n&1&&($$1(0,`bx-page-container`)(1,`bx-page-header`,0)(2,`p`),Te(3,`For viewport signals, device detection, scroll locking and shared helpers, explore the `),$$1(4,`a`,1),Te(5,`Utilities playground`),q$1(),Te(6,`.`),q$1()(),$$1(7,`div`,2)(8,`bx-search-input`,3),$R(),ye(`ngModelChange`,function(F){return a.query.set(F)}),q$1()(),$$1(9,`p`,4),Te(10),q$1(),Hn(11,q,6,2,`section`,5,L,!1,B,2,0,`p`),q$1()),n&2&&(E(),le(`sectionTitle`,a.layoutOnly()?`Primitives`:a.category()?`Components`:`Blocks reference`)(`pageTitle`,a.layoutOnly()?`Layout`:a.category()??`Components`)(`pageDescription`,a.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),E(7),le(`ngModel`,a.query()),WR(),E(2),yr(``,a.filtered().length,` components and directives`),E(),qn(a.groups()))},dependencies:[SM,za,$p,Ft,tne,Xte,dF,qe],styles:[`
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