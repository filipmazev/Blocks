import{N as e}from"./main-2D43OMMH.js";import{Ai as wR,Ar as mO,Br as ne,Ci as vR,Dt as QZ,It as S,Q as L,Rr as nQ,Sn as _,Vt as Sr,Wi as ze,Zt as V,bt as P,d as B,jn as b,kr as mM,lr as iD,mt as Ne,u as An,vt as Nt,wn as _r,xi as vF,zi as ye}from"./chunk-EuYK8zUg.js";var I=t=>[`/components`,t];var k=(t,n)=>n.title;var T=(t,n)=>n.id;function F(t,n){if(t&1&&(P(0,`a`,7)(1,`h3`),Ne(2),L(),P(3,`p`),Ne(4),L(),P(5,`code`),Ne(6),L()()),t&2){let e=n.$implicit;ne(`routerLink`,mO(4,I,e.id)),_(2),ze(e.title),_(2),ze(e.description),_(2),ze(e.selector)}}function D(t,n){if(t&1&&(P(0,`section`,5)(1,`h2`),Ne(2),L(),P(3,`div`,6),Sr(4,F,7,6,`a`,7,T),L()()),t&2){let e=n.$implicit;V(`aria-label`,e.title),_(2),ze(e.title),_(2),_r(e.entries)}}function z(t,n){t&1&&(P(0,`p`),Ne(1,`No components match this search. Try a shorter name.`),L())}var N=class t{query=S(``);filtered=b(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n))});groups=b(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=B({type:t,selectors:[[`app-component-index`]],decls:15,vars:3,consts:[[1,`catalog-page`],[1,`eyebrow`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,m){e&1&&(P(0,`article`,0)(1,`header`)(2,`p`,1),Ne(3,`Blocks reference`),L(),P(4,`h1`),Ne(5,`Components`),L(),P(6,`p`),Ne(7,`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),L()(),P(8,`div`,2)(9,`bx-search-input`,3),vR(),ye(`ngModelChange`,function(w){return m.query.set(w)}),L()(),P(10,`p`,4),Ne(11),L(),Sr(12,D,6,2,`section`,5,k,!1,z,2,0,`p`),L()),e&2&&(_(9),ne(`ngModel`,m.query()),wR(),_(2),An(``,m.filtered().length,` components and directives`),_(),_r(m.groups()))},dependencies:[iD,Nt,nQ,QZ,vF,mM],styles:[`
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