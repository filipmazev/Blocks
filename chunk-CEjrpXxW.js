import{$r as tN,Dn as Zx,H as J0,On as _,Qr as se,Y as KK,Zt as W,_n as Yr,ai as vn,at as Kr,f as Ce,fr as jP,gi as y,gr as kE,hn as Yk,ir as he,mi as xr,n as $K,qt as Ve,ri as tt,st as M,vi as ye,xt as Q}from"./chunk-C74CBOi9.js";import{k as e}from"./main-UM7HDCHR.js";var I=t=>[`/components`,t];var k=(t,n)=>n.title;var T=(t,n)=>n.id;function D(t,n){if(t&1&&(W(0,`a`,7)(1,`h3`),Ve(2),Q(),W(3,`p`),Ve(4),Q(),W(5,`code`),Ve(6),Q()()),t&2){let e=n.$implicit;he(`routerLink`,Yk(4,I,e.id)),M(2),tt(e.title),M(2),tt(e.description),M(2),tt(e.selector)}}function F(t,n){if(t&1&&(W(0,`section`,5)(1,`h2`),Ve(2),Q(),W(3,`div`,6),Yr(4,D,7,6,`a`,7,T),Q()()),t&2){let e=n.$implicit;ye(`aria-label`,e.title),M(2),tt(e.title),M(2),Kr(e.entries)}}function z(t,n){t&1&&(W(0,`p`),Ve(1,`No components match this search. Try a shorter name.`),Q())}var N=class t{query=_(``);filtered=y(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n))});groups=y(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=se({type:t,selectors:[[`app-component-index`]],decls:15,vars:3,consts:[[1,`catalog-page`],[1,`eyebrow`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,l){e&1&&(W(0,`article`,0)(1,`header`)(2,`p`,1),Ve(3,`Blocks reference`),Q(),W(4,`h1`),Ve(5,`Components`),Q(),W(6,`p`),Ve(7,`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),Q()(),W(8,`div`,2)(9,`bx-search-input`,3),J0(),Ce(`ngModelChange`,function(w){return l.query.set(w)}),Q()(),W(10,`p`,4),Ve(11),Q(),Yr(12,F,6,2,`section`,5,k,!1,z,2,0,`p`),Q()),e&2&&(M(9),he(`ngModel`,l.query()),tN(),M(2),xr(``,l.filtered().length,` components and directives`),M(),Kr(l.groups()))},dependencies:[kE,vn,KK,$K,jP,Zx],styles:[`
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