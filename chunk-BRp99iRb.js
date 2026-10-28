import{B as Lu,F as K,H as Mt,Jn as uY,N as Jt,Nt as at,O as I$1,On as pY,Rn as rx,Tn as ox,V as Mo,W as Np,_n as nA,cn as ko,fr as yi,i as $t,mt as WN,o as Ar,q as Op,st as Ut,vr as zc,wn as ot}from"./chunk-D44OVyuP.js";import{f as te,o as e}from"./main-WUOVILFZ.js";var I=t=>[`/components`,t];var k=(t,n)=>n.title;var T=(t,n)=>n.id;function D(t,n){if(t&1&&(Mt(0,`a`,7)(1,`h3`),ko(2),$t(),Mt(3,`p`),ko(4),$t(),Mt(5,`code`),ko(6),$t()()),t&2){let e=n.$implicit;Mo(`routerLink`,nA(4,I,e.id)),Ut(2),zc(e.title),Ut(2),zc(e.description),Ut(2),zc(e.selector)}}function F(t,n){if(t&1&&(Mt(0,`section`,5)(1,`h2`),ko(2),$t(),Mt(3,`div`,6),Np(4,D,7,6,`a`,7,T),$t()()),t&2){let e=n.$implicit;Jt(`aria-label`,e.title),Ut(2),zc(e.title),Ut(2),Op(e.entries)}}function z(t,n){t&1&&(Mt(0,`p`),ko(1,`No components match this search. Try a shorter name.`),$t())}var N=class t{query=I$1(``);filtered=K(()=>{let n=this.query().trim().toLowerCase();return e.filter(e=>!n||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(n))});groups=K(()=>[...new Set(this.filtered().map(n=>n.group))].map(n=>({title:n,entries:this.filtered().filter(e=>e.group===n)})));static ɵfac=function(e){return new(e||t)};static ɵcmp=ot({type:t,selectors:[[`app-component-index`]],decls:15,vars:3,consts:[[1,`catalog-page`],[1,`eyebrow`],[1,`catalog-search`],[`label`,`Find a component`,`placeholder`,`Search by name or purpose`,3,`ngModelChange`,`ngModel`],[`role`,`status`,1,`result-count`],[`bxSurface`,``,1,`catalog-group`],[1,`catalog-grid`],[`bxSurface`,``,1,`catalog-card`,3,`routerLink`]],template:function(e,l){e&1&&(Mt(0,`article`,0)(1,`header`)(2,`p`,1),ko(3,`Blocks reference`),$t(),Mt(4,`h1`),ko(5,`Components`),$t(),Mt(6,`p`),ko(7,`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),$t()(),Mt(8,`div`,2)(9,`bx-search-input`,3),rx(),at(`ngModelChange`,function(w){return l.query.set(w)}),$t()(),Mt(10,`p`,4),ko(11),$t(),Np(12,F,6,2,`section`,5,k,!1,z,2,0,`p`),$t()),e&2&&(Ut(9),Mo(`ngModel`,l.query()),ox(),Ut(2),yi(``,l.filtered().length,` components and directives`),Ut(),Op(l.groups()))},dependencies:[Lu,Ar,pY,uY,WN,te],styles:[`
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