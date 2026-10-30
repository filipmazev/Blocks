import{An as _,Ci as zr,Or as le,P as Gr,R as Hd,Zn as fe,_r as je,br as jx,ci as w,dr as hn,dt as M9,ft as Me,gi as ye,gn as X,gt as NP,k as Fk,ln as W,ni as tt,qr as q0,ui as wr,ut as M,vi as z0,xr as k9}from"./chunk-DQTC9SUR.js";import{O as e}from"./main-2QOMNNZQ.js";var I=t=>[`/components`,t];var k=(t,n)=>n.title;var T=(t,n)=>n.id;function D(t,n){if(t&1&&(W(0,`a`,7)(1,`h3`),je(2),X(),W(3,`p`),je(4),X(),W(5,`code`),je(6),X()()),t&2){let e=n.$implicit;fe(`routerLink`,Fk(4,I,e.id)),M(2),tt(e.title),M(2),tt(e.description),M(2),tt(e.selector)}}function F(t,n){if(t&1&&(W(0,`section`,5)(1,`h2`),je(2),X(),W(3,`div`,6),zr(4,D,7,6,`a`,7,T),X()()),t&2){let e=n.$implicit;ye(`aria-label`,e.title),M(2),tt(e.title),M(2),Gr(e.entries)}}function z(t,n){t&1&&(W(0,`p`),je(1,`No components match this search. Try a shorter name.`),X())}var N=class t{query=_(``);filtered=w(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n))});groups=w(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=le({type:t,selectors:[[`app-component-index`]],decls:15,vars:3,consts:[[1,`catalog-page`],[1,`eyebrow`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,l){e&1&&(W(0,`article`,0)(1,`header`)(2,`p`,1),je(3,`Blocks reference`),X(),W(4,`h1`),je(5,`Components`),X(),W(6,`p`),je(7,`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),X()(),W(8,`div`,2)(9,`bx-search-input`,3),q0(),Me(`ngModelChange`,function(w){return l.query.set(w)}),X()(),W(10,`p`,4),je(11),X(),zr(12,F,6,2,`section`,5,k,!1,z,2,0,`p`),X()),e&2&&(M(9),fe(`ngModel`,l.query()),z0(),M(2),wr(``,l.filtered().length,` components and directives`),M(),Gr(l.groups()))},dependencies:[Hd,hn,k9,M9,NP,jx],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.catalog-page[_ngcontent-%COMP%] {
  max-width: 70rem;
  margin: auto;
  padding: 2rem;
  color: var(--%NS%bx-text-primary);
}
header[_ngcontent-%COMP%] {
  max-width: 48rem;
  margin-bottom: 2rem;
}
.eyebrow[_ngcontent-%COMP%], 
.result-count[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-secondary);
}
h1[_ngcontent-%COMP%] {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0.5rem 0 1rem;
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
}
@media (max-width: 640px) {
  .catalog-page[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}`]})};export{N as ComponentIndex};