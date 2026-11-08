import{U as ie}from"./main-VEYCVDKS.js";import{$r as je,Et as Ns,Ft as Ot,S as D$1,Sr as fn,Xr as j,br as fM,hn as Ve,in as Te,ka as zn,on as U,qn as ae,qr as ie$1,ra as v,ti as jn,un as V,ur as dM,wi as p,yi as oe,zt as Pp}from"./chunk-B79cUMdP.js";var P=(n,e)=>e.id;function w(n,e){n&1&&(j(0,`p`),Te(1,`Explore modal layouts, sizes, actions, and content with a live preview.`),U())}function M(n,e){n&1&&(j(0,`p`),Te(1,`Try notification styles, placement, timing, and actions before copying your configuration.`),U())}function D(n,e){if(n&1&&(j(0,`a`,2),Ve(1,`bx-icon`,3),j(2,`h2`),Te(3),U(),oe(4,w,2,0,`p`)(5,M,2,0,`p`),U()),n&2){let t=e.$implicit;ae(`routerLink`,t.route),D$1(),ae(`name`,t.icon?.name??`wrench`),D$1(2),je(t.label),D$1(),ie$1(t.route===`/modal`?4:t.route===`/toastr`?5:-1)}}var T=class n{navigationService=p(ie);tools=v(()=>this.navigationService.menuTreeGroups().find(e=>e.id===`Tools`)?.items.filter(e=>e.route!==`/tools`)??[]);static ɵfac=function(t){return new(t||n)};static ɵcmp=V({type:n,selectors:[[`app-tools`]],decls:5,vars:1,consts:[[`sectionTitle`,`Playground`,`pageTitle`,`Tools`,`pageDescription`,`Configure Blocks interactions, preview them with your active theme, and copy the settings into your application.`],[`minColumnWidth`,`16rem`,3,`gap`],[`bxSurface`,``,1,`tool-card`,3,`routerLink`],[`size`,`24`,3,`name`]],template:function(t,N){t&1&&(j(0,`bx-page-container`),Ve(1,`bx-page-header`,0),j(2,`bx-grid`,1),jn(3,D,6,4,`a`,2,P),U()()),t&2&&(D$1(2),ae(`gap`,4),D$1(),zn(N.tools()))},dependencies:[Pp,Ot,fn,dM,fM,Ns],styles:[`
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