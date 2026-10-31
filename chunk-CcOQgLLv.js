import{Ci as v,In as ct,Lt as T$1,M as G9,Mi as we,P as GS,Rt as TN,Sr as k$1,Ti as vL,Ut as V,an as Z,ct as MN,f as D$1,g as DM,it as L,k as Fr,ln as _,on as Z9,p as DA,sn as Zn,tt as Kn,ut as Me,zn as de}from"./chunk-BAxYodTU.js";import{A as e}from"./main-7ZEREQS6.js";var I=t=>[`/components`,t];var k=(t,n)=>n.title;var T=(t,n)=>n.id;function D(t,n){if(t&1&&(T$1(0,`a`,7)(1,`h3`),we(2),k$1(),T$1(3,`p`),we(4),k$1(),T$1(5,`code`),we(6),k$1()()),t&2){let e=n.$implicit;Z(`routerLink`,DA(4,I,e.id)),D$1(2),Me(e.title),D$1(2),Me(e.description),D$1(2),Me(e.selector)}}function F(t,n){if(t&1&&(T$1(0,`section`,5)(1,`h2`),we(2),k$1(),T$1(3,`div`,6),Kn(4,D,7,6,`a`,7,T),k$1()()),t&2){let e=n.$implicit;L(`aria-label`,e.title),D$1(2),Me(e.title),D$1(2),Zn(e.entries)}}function z(t,n){t&1&&(T$1(0,`p`),we(1,`No components match this search. Try a shorter name.`),k$1())}var N=class t{query=_(``);filtered=v(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n))});groups=v(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=V({type:t,selectors:[[`app-component-index`]],decls:15,vars:3,consts:[[1,`catalog-page`],[1,`eyebrow`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,l){e&1&&(T$1(0,`article`,0)(1,`header`)(2,`p`,1),we(3,`Blocks reference`),k$1(),T$1(4,`h1`),we(5,`Components`),k$1(),T$1(6,`p`),we(7,`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),k$1()(),T$1(8,`div`,2)(9,`bx-search-input`,3),MN(),de(`ngModelChange`,function(w){return l.query.set(w)}),k$1()(),T$1(10,`p`,4),we(11),k$1(),Kn(12,F,6,2,`section`,5,k,!1,z,2,0,`p`),k$1()),e&2&&(D$1(9),Z(`ngModel`,l.query()),TN(),D$1(2),Fr(``,l.filtered().length,` components and directives`),D$1(),Zn(l.groups()))},dependencies:[GS,ct,Z9,G9,vL,DM],styles:[`
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