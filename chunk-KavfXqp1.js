import{I as Q}from"./main-U2OBHRR6.js";import"./chunk-Ugx93LBR.js";import{$t as Te,Br as ie,Hn as ae,Jr as jn,Kr as je,Nt as Ot,Ur as j,an as V,b as D$1,dn as Vn,hr as fM,jt as Op,ln as Ve,mi as oe,nn as U,or as dM,ta as v,vi as p,vr as fn,wt as Ns}from"./chunk-DBDMpaTC.js";var P=(n,e)=>e.id;function w(n,e){n&1&&(j(0,`p`),Te(1,`Explore modal layouts, sizes, actions, and content with a live preview.`),U())}function M(n,e){n&1&&(j(0,`p`),Te(1,`Try notification styles, placement, timing, and actions before copying your configuration.`),U())}function D(n,e){if(n&1&&(j(0,`a`,2),Ve(1,`bx-icon`,3),j(2,`h2`),Te(3),U(),oe(4,w,2,0,`p`)(5,M,2,0,`p`),U()),n&2){let t=e.$implicit;ae(`routerLink`,t.route),D$1(),ae(`name`,t.icon?.name??`wrench`),D$1(2),je(t.label),D$1(),ie(t.route===`/modal`?4:t.route===`/toastr`?5:-1)}}var T=class n{navigationService=p(Q);tools=v(()=>this.navigationService.menuTreeGroups().find(e=>e.id===`Tools`)?.items.filter(e=>e.route!==`/tools`)??[]);static ɵfac=function(t){return new(t||n)};static ɵcmp=V({type:n,selectors:[[`app-tools`]],decls:5,vars:1,consts:[[`sectionTitle`,`Playground`,`pageTitle`,`Tools`,`pageDescription`,`Configure Blocks interactions, preview them with your active theme, and copy the settings into your application.`],[`minColumnWidth`,`16rem`,3,`gap`],[`bxSurface`,``,1,`tool-card`,3,`routerLink`],[`size`,`24`,3,`name`]],template:function(t,N){t&1&&(j(0,`bx-page-container`),Ve(1,`bx-page-header`,0),j(2,`bx-grid`,1),Vn(3,D,6,4,`a`,2,P),U()()),t&2&&(D$1(2),ae(`gap`,4),D$1(),jn(N.tools()))},dependencies:[Op,Ot,fn,dM,fM,Ns],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.tool-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  min-inline-size: 0;
  padding: 1.25rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
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