import{Bt as bp,Dn as n5,Dt as Zt,E as Eu,En as mt,F as It,Tn as mk,Xn as sN,Yn as s5,an as hi,at as S,bt as W,cr as vo,f as Co,gn as jt,it as Rc,p as Cp,q as Mr,rn as gx,un as it,vt as Vt,xr as yx}from"./chunk-DtVVo_Bz.js";import{f as te,o as e}from"./main-IWM4S6MK.js";var I=t=>[`/components`,t];var k=(t,n)=>n.title;var T=(t,n)=>n.id;function D(t,n){if(t&1&&(It(0,`a`,7)(1,`h3`),Co(2),jt(),It(3,`p`),Co(4),jt(),It(5,`code`),Co(6),jt()()),t&2){let e=n.$implicit;vo(`routerLink`,mk(4,I,e.id)),Vt(2),Rc(e.title),Vt(2),Rc(e.description),Vt(2),Rc(e.selector)}}function F(t,n){if(t&1&&(It(0,`section`,5)(1,`h2`),Co(2),jt(),It(3,`div`,6),bp(4,D,7,6,`a`,7,T),jt()()),t&2){let e=n.$implicit;Zt(`aria-label`,e.title),Vt(2),Rc(e.title),Vt(2),Cp(e.entries)}}function z(t,n){t&1&&(It(0,`p`),Co(1,`No components match this search. Try a shorter name.`),jt())}var N=class t{query=S(``);filtered=W(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n))});groups=W(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=mt({type:t,selectors:[[`app-component-index`]],decls:15,vars:3,consts:[[1,`catalog-page`],[1,`eyebrow`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,l){e&1&&(It(0,`article`,0)(1,`header`)(2,`p`,1),Co(3,`Blocks reference`),jt(),It(4,`h1`),Co(5,`Components`),jt(),It(6,`p`),Co(7,`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),jt()(),It(8,`div`,2)(9,`bx-search-input`,3),gx(),it(`ngModelChange`,function(w){return l.query.set(w)}),jt()(),It(10,`p`,4),Co(11),jt(),bp(12,F,6,2,`section`,5,k,!1,z,2,0,`p`),jt()),e&2&&(Vt(9),vo(`ngModel`,l.query()),yx(),Vt(2),hi(``,l.filtered().length,` components and directives`),Vt(),Cp(l.groups()))},dependencies:[Eu,Mr,s5,n5,sN,te],styles:[`
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