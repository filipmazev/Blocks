import{H as le}from"./main-RICJTCGQ.js";import"./chunk-BonxRREY.js";import"./chunk-DZ1I1_Lc.js";import{D as D$1,F as E,Ni as j,Nr as be,Nt as L,S as Cl,To as y,Vn as W,Xn as X,Yn as Wt,at as Hf,gi as g,gt as It,ii as f,l as A,po as we,s as $t,v as Bt,wa as pT,wi as hT}from"./chunk-DzvvGvUq.js";var P=(n,e)=>e.id;function w(n,e){n&1&&(E(0,`p`),X(1,`Explore modal layouts, sizes, actions, and content with a live preview.`),D$1())}function M(n,e){n&1&&(E(0,`p`),X(1,`Try notification styles, placement, timing, and actions before copying your configuration.`),D$1())}function D(n,e){if(n&1&&(E(0,`a`,2),we(1,`bx-icon`,3),E(2,`h2`),X(3),D$1(),L(4,w,2,0,`p`)(5,M,2,0,`p`),D$1()),n&2){let t=e.$implicit;A(`routerLink`,t.route),y(),A(`name`,t.icon?.name??`wrench`),y(2),be(t.label),y(),j(t.route===`/modal`?4:t.route===`/toastr`?5:-1)}}var T=class n{navigationService=f(le);tools=g(()=>this.navigationService.menuTreeGroups().find(e=>e.id===`Tools`)?.items.filter(e=>e.route!==`/tools`)??[]);static ɵfac=function(t){return new(t||n)};static ɵcmp=W({type:n,selectors:[[`app-tools`]],decls:5,vars:1,consts:[[`sectionTitle`,`Playground`,`pageTitle`,`Tools`,`pageDescription`,`Configure Blocks interactions, preview them with your active theme, and copy the settings into your application.`],[`minColumnWidth`,`16rem`,3,`gap`],[`bxSurface`,``,1,`tool-card`,3,`routerLink`],[`size`,`24`,3,`name`]],template:function(t,N){t&1&&(E(0,`bx-page-container`),we(1,`bx-page-header`,0),E(2,`bx-grid`,1),$t(3,D,6,4,`a`,2,P),D$1()()),t&2&&(y(2),A(`gap`,4),y(),Wt(N.tools()))},dependencies:[Hf,It,Bt,pT,hT,Cl],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.tool-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
  padding: var(--%NS%bx-space-5, 1.25rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  color: var(--%NS%bx-text-primary);
  text-decoration: none;
  overflow-wrap: anywhere;
}
.tool-card[_ngcontent-%COMP%]:hover {
  border-color: var(--%NS%bx-border-strong);
}
.tool-card[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 3px;
}
h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.125rem;
}
p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}`]})};export{T as Tools};