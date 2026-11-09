import{U as ae}from"./main-72PK7OKX.js";import"./chunk-tgYQWv5a.js";import"./chunk-BrHceUG-.js";import{Ga as za,Nn as Vt,T as DM,Tr as de,Ui as p,Wr as gn,Z as Hn,Zi as q,a as $p,dr as b,dt as K,ea as qe,et as IM,gi as le,jn as Ve,na as qn,t as $,w as D$1,yr as ce,zt as Ne}from"./chunk-CwZ5dsYL.js";var P=(n,e)=>e.id;function w(n,e){n&1&&(K(0,`p`),Ne(1,`Explore modal layouts, sizes, actions, and content with a live preview.`),$())}function M(n,e){n&1&&(K(0,`p`),Ne(1,`Try notification styles, placement, timing, and actions before copying your configuration.`),$())}function D(n,e){if(n&1&&(K(0,`a`,2),Ve(1,`bx-icon`,3),K(2,`h2`),Ne(3),$(),ce(4,w,2,0,`p`)(5,M,2,0,`p`),$()),n&2){let t=e.$implicit;le(`routerLink`,t.route),D$1(),le(`name`,t.icon?.name??`wrench`),D$1(2),qe(t.label),D$1(),de(t.route===`/modal`?4:t.route===`/toastr`?5:-1)}}var T=class n{navigationService=p(ae);tools=b(()=>this.navigationService.menuTreeGroups().find(e=>e.id===`Tools`)?.items.filter(e=>e.route!==`/tools`)??[]);static ɵfac=function(t){return new(t||n)};static ɵcmp=q({type:n,selectors:[[`app-tools`]],decls:5,vars:1,consts:[[`sectionTitle`,`Playground`,`pageTitle`,`Tools`,`pageDescription`,`Configure Blocks interactions, preview them with your active theme, and copy the settings into your application.`],[`minColumnWidth`,`16rem`,3,`gap`],[`bxSurface`,``,1,`tool-card`,3,`routerLink`],[`size`,`24`,3,`name`]],template:function(t,N){t&1&&(K(0,`bx-page-container`),Ve(1,`bx-page-header`,0),K(2,`bx-grid`,1),Hn(3,D,6,4,`a`,2,P),$()()),t&2&&(D$1(2),le(`gap`,4),D$1(),qn(N.tools()))},dependencies:[$p,Vt,gn,DM,IM,za],styles:[`
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