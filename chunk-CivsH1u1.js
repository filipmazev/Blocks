import{B as le}from"./main-KDO6NRGB.js";import"./chunk-DfiujzSG.js";import"./chunk-Crf--m4R.js";import{An as Xp,Bi as p,F as Ga,Hr as g,K as In,N as G,Nt as P$1,Ri as on,Ti as me,Ya as zt,_t as Me,c as Ae,ci as jM,g as C,ki as ne,ln as V,o as A,pa as te,s as AM,yt as Mn}from"./chunk-zW9dIJoT.js";var P=(n,e)=>e.id;function w(n,e){n&1&&(A(0,`p`),me(1,`Explore modal layouts, sizes, actions, and content with a live preview.`),P$1())}function M(n,e){n&1&&(A(0,`p`),me(1,`Try notification styles, placement, timing, and actions before copying your configuration.`),P$1())}function D(n,e){if(n&1&&(A(0,`a`,2),Ae(1,`bx-icon`,3),A(2,`h2`),me(3),P$1(),te(4,w,2,0,`p`)(5,M,2,0,`p`),P$1()),n&2){let t=e.$implicit;V(`routerLink`,t.route),C(),V(`name`,t.icon?.name??`wrench`),C(2),Me(t.label),C(),ne(t.route===`/modal`?4:t.route===`/toastr`?5:-1)}}var T=class n{navigationService=p(le);tools=g(()=>this.navigationService.menuTreeGroups().find(e=>e.id===`Tools`)?.items.filter(e=>e.route!==`/tools`)??[]);static ɵfac=function(t){return new(t||n)};static ɵcmp=G({type:n,selectors:[[`app-tools`]],decls:5,vars:1,consts:[[`sectionTitle`,`Playground`,`pageTitle`,`Tools`,`pageDescription`,`Configure Blocks interactions, preview them with your active theme, and copy the settings into your application.`],[`minColumnWidth`,`16rem`,3,`gap`],[`bxSurface`,``,1,`tool-card`,3,`routerLink`],[`size`,`24`,3,`name`]],template:function(t,N){t&1&&(A(0,`bx-page-container`),Ae(1,`bx-page-header`,0),A(2,`bx-grid`,1),Mn(3,D,6,4,`a`,2,P),P$1()()),t&2&&(C(2),V(`gap`,4),C(),In(N.tools()))},dependencies:[Xp,zt,on,AM,jM,Ga],styles:[`
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