import{j as e}from"./main-AN27WKZA.js";import{$t as Ue,Bi as xr,Bt as Re,C as D$1,Et as P,Fi as x,Mn as b,O as Dr,Oi as vk,Tr as kF,Ur as ne,Ut as Rt,W as H,Wi as ye,_r as iE,f as B,li as see,or as gI,ot as L,sr as gO,u as An,x as Ck,xi as uee}from"./chunk-CoBsbWg5.js";var I=o=>[`/components`,o];var k=(o,n)=>n.title;var F=(o,n)=>n.id;function T(o,n){if(o&1&&(P(0,`a`,8)(1,`h3`),Re(2),L(),P(3,`p`),Re(4),L(),P(5,`code`),Re(6),L()()),o&2){let e=n.$implicit;ne(`routerLink`,gO(4,I,e.id)),D$1(2),Ue(e.title),D$1(2),Ue(e.description),D$1(2),Ue(e.selector)}}function D(o,n){if(o&1&&(P(0,`section`,6)(1,`h2`),Re(2),L(),P(3,`div`,7),xr(4,T,7,6,`a`,8,F),L()()),o&2){let e=n.$implicit;B(`aria-label`,e.title),D$1(2),Ue(e.title),D$1(2),Dr(e.entries)}}function z(o,n){o&1&&(P(0,`p`),Re(1,`No components match this search. Try a shorter name.`),L())}var N=class o{query=x(``);filtered=b(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n))});groups=b(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||o)};static ɵcmp=H({type:o,selectors:[[`app-component-index`]],decls:20,vars:3,consts:[[1,`catalog-page`],[1,`eyebrow`],[`routerLink`,`/utilities`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,m){e&1&&(P(0,`article`,0)(1,`header`)(2,`p`,1),Re(3,`Blocks reference`),L(),P(4,`h1`),Re(5,`Components`),L(),P(6,`p`),Re(7,`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),L(),P(8,`p`),Re(9,`For viewport signals, device detection, scroll locking and shared helpers, explore the `),P(10,`a`,2),Re(11,`Utilities playground`),L(),Re(12,`.`),L()(),P(13,`div`,3)(14,`bx-search-input`,4),vk(),ye(`ngModelChange`,function(w){return m.query.set(w)}),L()(),P(15,`p`,5),Re(16),L(),xr(17,D,6,2,`section`,6,k,!1,z,2,0,`p`),L()),e&2&&(D$1(14),ne(`ngModel`,m.query()),Ck(),D$1(2),An(``,m.filtered().length,` components and directives`),D$1(),Dr(m.groups()))},dependencies:[iE,Rt,uee,see,kF,gI],styles:[`
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