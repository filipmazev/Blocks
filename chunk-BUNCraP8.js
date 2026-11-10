import{tt as e}from"./main-CHCNDXPW.js";import{s as qe}from"./chunk-C_Cm-KTR.js";import{An as Xp,B as Hne,Bi as p,Di as nR,F as Ga,Fi as oR,Hr as g,I as Gne,K as In,Kt as S,N as G,Nt as P,Pa as wn,Ti as me,Un as Zr,Ya as zt,_t as Me,ci as jM,g as C,ln as V,o as A,qt as SF,tt as K,xa as ue,xr as dZ,y as D,yt as Mn}from"./chunk-Cn9-98lL.js";function w(t){return t.layout?[`/components/layout`,t.id]:[`/components`,t.id]}var L=(t,e)=>e.title;var $=(t,e)=>e.id;function z(t,e){if(t&1&&(A(0,`a`,7)(1,`h3`),me(2),P(),A(3,`p`),me(4),P(),A(5,`code`),me(6),P()()),t&2){let n=e.$implicit,a=S(2);V(`routerLink`,a.componentRoute(n)),C(2),Me(n.title),C(2),Me(n.description),C(2),Me(n.selector)}}function q(t,e){if(t&1&&(A(0,`section`,5)(1,`h2`),me(2),P(),A(3,`div`,6),Mn(4,z,7,4,`a`,7,$),P()()),t&2){let n=e.$implicit;K(`aria-label`,n.title),C(2),Me(n.title),C(2),In(n.entries)}}function B(t,e){t&1&&(A(0,`p`),me(1,`No components match this search. Try a shorter name.`),P())}var R=class t{activatedRoute=p(Zr);routeData=dZ(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});componentRoute=w;layoutOnly=g(()=>this.routeData().layout===!0);category=g(()=>{let e=this.routeData().category;return typeof e==`string`?e:void 0});query=D(``);filtered=g(()=>{let e$1=this.query().trim().toLowerCase();return e.filter(n=>(!this.layoutOnly()||n.layout)&&(!this.category()||n.group===this.category())&&(!e$1||`${n.title} ${n.group} ${n.description}`.toLowerCase().includes(e$1)))});groups=g(()=>[...new Set(this.filtered().map(e=>e.group))].map(e=>({title:e,entries:this.filtered().filter(n=>n.group===e)})));static ɵfac=function(n){return new(n||t)};static ɵcmp=G({type:t,selectors:[[`app-component-index`]],decls:14,vars:6,consts:[[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(n,a){n&1&&(A(0,`bx-page-container`)(1,`bx-page-header`,0)(2,`p`),me(3,`For viewport signals, device detection, scroll locking and shared helpers, explore the `),A(4,`a`,1),me(5,`Utilities playground`),P(),me(6,`.`),P()(),A(7,`div`,2)(8,`bx-search-input`,3),nR(),ue(`ngModelChange`,function(F){return a.query.set(F)}),P()(),A(9,`p`,4),me(10),P(),Mn(11,q,6,2,`section`,5,L,!1,B,2,0,`p`),P()),n&2&&(C(),V(`sectionTitle`,a.layoutOnly()?`Primitives`:a.category()?`Components`:`Blocks reference`)(`pageTitle`,a.layoutOnly()?`Layout`:a.category()??`Components`)(`pageDescription`,a.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),C(7),V(`ngModel`,a.query()),oR(),C(2),wn(``,a.filtered().length,` components and directives`),C(),In(a.groups()))},dependencies:[jM,Ga,Xp,zt,Gne,Hne,SF,qe],styles:[`
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