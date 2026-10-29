import{G as Hn,H as HT,Kt as ar,L as Fk,Ln as uY,St as SO,Tn as qo,Un as x,W as He,Yt as ce,Zt as dd,_n as nn,bn as pY,d as $T,k as De,m as $o,mt as Qe,o as e,sn as ie,ut as PS,wn as qe,xn as pe,xt as S,yt as Rr}from"./main-NYZXUFEE.js";var I=t=>[`/components`,t];var k=(t,n)=>n.title;var T=(t,n)=>n.id;function D(t,n){if(t&1&&(ce(0,`a`,7)(1,`h3`),nn(2),pe(),ce(3,`p`),nn(4),pe(),ce(5,`code`),nn(6),pe()()),t&2){let e=n.$implicit;Qe(`routerLink`,Fk(4,I,e.id)),ie(2),Rr(e.title),ie(2),Rr(e.description),ie(2),Rr(e.selector)}}function F(t,n){if(t&1&&(ce(0,`section`,5)(1,`h2`),nn(2),pe(),ce(3,`div`,6),$o(4,D,7,6,`a`,7,T),pe()()),t&2){let e=n.$implicit;He(`aria-label`,e.title),ie(2),Rr(e.title),ie(2),qo(e.entries)}}function z(t,n){t&1&&(ce(0,`p`),nn(1,`No components match this search. Try a shorter name.`),pe())}var N=class t{query=S(``);filtered=x(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n))});groups=x(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=De({type:t,selectors:[[`app-component-index`]],decls:15,vars:3,consts:[[1,`catalog-page`],[1,`eyebrow`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,l){e&1&&(ce(0,`article`,0)(1,`header`)(2,`p`,1),nn(3,`Blocks reference`),pe(),ce(4,`h1`),nn(5,`Components`),pe(),ce(6,`p`),nn(7,`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),pe()(),ce(8,`div`,2)(9,`bx-search-input`,3),HT(),qe(`ngModelChange`,function(w){return l.query.set(w)}),pe()(),ce(10,`p`,4),nn(11),pe(),$o(12,F,6,2,`section`,5,k,!1,z,2,0,`p`),pe()),e&2&&(ie(9),Qe(`ngModel`,l.query()),$T(),ie(2),ar(``,l.filtered().length,` components and directives`),ie(),qo(l.groups()))},dependencies:[dd,Hn,pY,uY,SO,PS],styles:[`
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