import{rt as e}from"./main-RICJTCGQ.js";import{c as qe}from"./chunk-DZ1I1_Lc.js";import{D,F as E,Nr as be,Ra as rB,Rn as VA,S as Cl,To as y,Tr as an,U as F,Vn as W,Vt as M,W as FA,Xn as X,Yn as Wt,at as Hf,do as w$1,gi as g,gt as It,ii as f,l as A,mn as QQ,pi as fo,qt as Nie,s as $t,ti as ee,un as Pie,wi as hT}from"./chunk-DzvvGvUq.js";function w(t){return t.layout?[`/components/layout`,t.id]:[`/components`,t.id]}var L=(t,e)=>e.title;var $=(t,e)=>e.id;function z(t,e){if(t&1&&(E(0,`a`,7)(1,`h3`),X(2),D(),E(3,`p`),X(4),D(),E(5,`code`),X(6),D()()),t&2){let n=e.$implicit,a=w$1(2);A(`routerLink`,a.componentRoute(n)),y(2),be(n.title),y(2),be(n.description),y(2),be(n.selector)}}function q(t,e){if(t&1&&(E(0,`section`,5)(1,`h2`),X(2),D(),E(3,`div`,6),$t(4,z,7,4,`a`,7,$),D()()),t&2){let n=e.$implicit;F(`aria-label`,n.title),y(2),be(n.title),y(2),Wt(n.entries)}}function B(t,e){t&1&&(E(0,`p`),X(1,`No components match this search. Try a shorter name.`),D())}var R=class t{activatedRoute=f(fo);routeData=QQ(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});componentRoute=w;layoutOnly=g(()=>this.routeData().layout===!0);category=g(()=>{let e=this.routeData().category;return typeof e==`string`?e:void 0});query=M(``);filtered=g(()=>{let e$1=this.query().trim().toLowerCase();return e.filter(n=>(!this.layoutOnly()||n.layout)&&(!this.category()||n.group===this.category())&&(!e$1||`${n.title} ${n.group} ${n.description}`.toLowerCase().includes(e$1)))});groups=g(()=>[...new Set(this.filtered().map(e=>e.group))].map(e=>({title:e,entries:this.filtered().filter(n=>n.group===e)})));static ɵfac=function(n){return new(n||t)};static ɵcmp=W({type:t,selectors:[[`app-component-index`]],decls:14,vars:6,consts:[[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(n,a){n&1&&(E(0,`bx-page-container`)(1,`bx-page-header`,0)(2,`p`),X(3,`For viewport signals, device detection, scroll locking and shared helpers, explore the `),E(4,`a`,1),X(5,`Utilities playground`),D(),X(6,`.`),D()(),E(7,`div`,2)(8,`bx-search-input`,3),FA(),ee(`ngModelChange`,function(F){return a.query.set(F)}),D()(),E(9,`p`,4),X(10),D(),$t(11,q,6,2,`section`,5,L,!1,B,2,0,`p`),D()),n&2&&(y(),A(`sectionTitle`,a.layoutOnly()?`Primitives`:a.category()?`Components`:`Blocks reference`)(`pageTitle`,a.layoutOnly()?`Layout`:a.category()??`Components`)(`pageDescription`,a.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),y(7),A(`ngModel`,a.query()),VA(),y(2),an(``,a.filtered().length,` components and directives`),y(),Wt(a.groups()))},dependencies:[hT,Cl,Hf,It,Pie,Nie,rB,qe],styles:[`
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