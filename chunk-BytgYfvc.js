import{H as ie}from"./main-HW2XYL5W.js";import{$i as v,Bi as se,Gr as je,N as Fe,Pa as zn,Si as p,W as H,Zr as k,aa as vn,hn as U,ka as z,ma as xM,na as vM,nr as ae,p as Bt,q as Hp,qr as jn,un as Te,wn as Vs,yi as oe}from"./chunk-Dt37D5SH.js";var P=(n,e)=>e.id;function w(n,e){n&1&&(U(0,`p`),Te(1,`Explore modal layouts, sizes, actions, and content with a live preview.`),H())}function M(n,e){n&1&&(U(0,`p`),Te(1,`Try notification styles, placement, timing, and actions before copying your configuration.`),H())}function D(n,e){if(n&1&&(U(0,`a`,2),Fe(1,`bx-icon`,3),U(2,`h2`),Te(3),H(),ae(4,w,2,0,`p`)(5,M,2,0,`p`),H()),n&2){let t=e.$implicit;oe(`routerLink`,t.route),k(),oe(`name`,t.icon?.name??`wrench`),k(2),je(t.label),k(),se(t.route===`/modal`?4:t.route===`/toastr`?5:-1)}}var T=class n{navigationService=p(ie);tools=v(()=>this.navigationService.menuTreeGroups().find(e=>e.id===`Tools`)?.items.filter(e=>e.route!==`/tools`)??[]);static ɵfac=function(t){return new(t||n)};static ɵcmp=z({type:n,selectors:[[`app-tools`]],decls:5,vars:1,consts:[[`sectionTitle`,`Playground`,`pageTitle`,`Tools`,`pageDescription`,`Configure Blocks interactions, preview them with your active theme, and copy the settings into your application.`],[`minColumnWidth`,`16rem`,3,`gap`],[`bxSurface`,``,1,`tool-card`,3,`routerLink`],[`size`,`24`,3,`name`]],template:function(t,N){t&1&&(U(0,`bx-page-container`),Fe(1,`bx-page-header`,0),U(2,`bx-grid`,1),jn(3,D,6,4,`a`,2,P),H()()),t&2&&(k(2),oe(`gap`,4),k(),zn(N.tools()))},dependencies:[Hp,Bt,vn,vM,xM,Vs],styles:[`
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