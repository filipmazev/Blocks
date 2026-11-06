import{k as e}from"./main-2GBJQHUZ.js";import{t as Ae}from"./chunk-DUDY88j1.js";import{A as Es,Di as te,F as G,Fn as _p,Jt as Se,Ki as xR,Pi as vR,Qi as y,X as Ir,Xi as xr,at as LF,ci as p,ea as ye,in as U,ir as eI,jr as k,l as Be,la as zt,lt as M,mt as Mee,na as yr,oi as oe,vt as Ne,wr as j,yi as rr,yt as Nee,zi as wX}from"./chunk-CfQ5k3AW.js";function w(t){return t.layout?[`/components/layout`,t.id]:[`/components`,t.id]}var L=(t,n)=>n.title;var $=(t,n)=>n.id;function z(t,n){if(t&1&&(te(0,`a`,7)(1,`h3`),Se(2),oe(),te(3,`p`),Se(4),oe(),te(5,`code`),Se(6),oe()()),t&2){let e=n.$implicit,l=U(2);ye(`routerLink`,l.componentRoute(e)),k(2),Be(e.title),k(2),Be(e.description),k(2),Be(e.selector)}}function q(t,n){if(t&1&&(te(0,`section`,5)(1,`h2`),Se(2),oe(),te(3,`div`,6),yr(4,z,7,4,`a`,7,$),oe()()),t&2){let e=n.$implicit;G(`aria-label`,e.title),k(2),Be(e.title),k(2),xr(e.entries)}}function B(t,n){t&1&&(te(0,`p`),Se(1,`No components match this search. Try a shorter name.`),oe())}var R=class t{activatedRoute=p(Ir);routeData=wX(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});componentRoute=w;layoutOnly=y(()=>this.routeData().layout===!0);query=M(``);filtered=y(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>(!this.layoutOnly()||e.layout)&&(!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n)))});groups=y(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=j({type:t,selectors:[[`app-component-index`]],decls:14,vars:6,consts:[[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,l){e&1&&(te(0,`bx-page-container`)(1,`bx-page-header`,0)(2,`p`),Se(3,`For viewport signals, device detection, scroll locking and shared helpers, explore the `),te(4,`a`,1),Se(5,`Utilities playground`),oe(),Se(6,`.`),oe()(),te(7,`div`,2)(8,`bx-search-input`,3),vR(),Ne(`ngModelChange`,function(F){return l.query.set(F)}),oe()(),te(9,`p`,4),Se(10),oe(),yr(11,q,6,2,`section`,5,L,!1,B,2,0,`p`),oe()),e&2&&(k(),ye(`sectionTitle`,l.layoutOnly()?`Primitives`:`Blocks reference`)(`pageTitle`,l.layoutOnly()?`Layout`:`Components`)(`pageDescription`,l.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),k(7),ye(`ngModel`,l.query()),xR(),k(2),rr(``,l.filtered().length,` components and directives`),k(),xr(l.groups()))},dependencies:[eI,Es,_p,zt,Nee,Mee,LF,Ae],styles:[`
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