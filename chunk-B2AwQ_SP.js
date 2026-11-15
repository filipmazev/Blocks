import{m as be}from"./main-AKVTKJWF.js";import"./chunk-B9KWZ97F.js";import"./chunk-BHj6x81D.js";import{Cn as Rt,Dn as ST,E as D$1,Ft as Lt,Ga as qt,Gi as j,Nn as T$1,Nr as _,Oi as g,Zi as jt,an as Q,br as Yf,ho as ve,jo as y,jt as L,t as $,wi as fe,xi as f,zr as _l,zt as MT}from"./chunk-2VndCPnC.js";var P=(n,e)=>e.id;function w(n,e){n&1&&(_(0,`p`),Q(1,`Explore modal layouts, sizes, actions, and content with a live preview.`),D$1())}function M(n,e){n&1&&(_(0,`p`),Q(1,`Try notification styles, placement, timing, and actions before copying your configuration.`),D$1())}function D(n,e){if(n&1&&(_(0,`a`,2),ve(1,`bx-icon`,3),_(2,`h2`),Q(3),D$1(),L(4,w,2,0,`p`)(5,M,2,0,`p`),D$1()),n&2){let t=e.$implicit;T$1(`routerLink`,t.route),y(),T$1(`name`,t.icon?.name??`wrench`),y(2),fe(t.label),y(),j(t.route===`/modal`?4:t.route===`/toastr`?5:-1)}}var T=class n{navigationService=f(be);tools=g(()=>this.navigationService.menuTreeGroups().find(e=>e.id===`Tools`)?.items.filter(e=>e.route!==`/tools`)??[]);static ɵfac=function(t){return new(t||n)};static ɵcmp=$({type:n,selectors:[[`app-tools`]],decls:5,vars:1,consts:[[`sectionTitle`,`Playground`,`pageTitle`,`Tools`,`pageDescription`,`Configure Blocks interactions, preview them with your active theme, and copy the settings into your application.`],[`minColumnWidth`,`16rem`,3,`gap`],[`bxSurface`,``,1,`tool-card`,3,`routerLink`],[`size`,`24`,3,`name`]],template:function(t,N){t&1&&(_(0,`bx-page-container`),ve(1,`bx-page-header`,0),_(2,`bx-grid`,1),Lt(3,D,6,4,`a`,2,P),D$1()()),t&2&&(y(2),T$1(`gap`,4),y(),jt(N.tools()))},dependencies:[Yf,Rt,qt,ST,MT,_l],styles:[`
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