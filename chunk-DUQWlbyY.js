import{V as ie}from"./main-BD2MVIMM.js";import{$ as Hn,Fa as za,G as Ft,Mi as p,N as E,Q as He,Ri as q,Vi as qn,X as H,br as de,ci as le,fa as v,fn as Te,in as SM,ni as kM,pr as ce,s as $p,t as $,v as Be,zr as hn}from"./chunk-cpWQWn_p.js";var P=(n,e)=>e.id;function w(n,e){n&1&&($(0,`p`),Te(1,`Explore modal layouts, sizes, actions, and content with a live preview.`),q())}function M(n,e){n&1&&($(0,`p`),Te(1,`Try notification styles, placement, timing, and actions before copying your configuration.`),q())}function D(n,e){if(n&1&&($(0,`a`,2),Be(1,`bx-icon`,3),$(2,`h2`),Te(3),q(),ce(4,w,2,0,`p`)(5,M,2,0,`p`),q()),n&2){let t=e.$implicit;le(`routerLink`,t.route),E(),le(`name`,t.icon?.name??`wrench`),E(2),He(t.label),E(),de(t.route===`/modal`?4:t.route===`/toastr`?5:-1)}}var T=class n{navigationService=p(ie);tools=v(()=>this.navigationService.menuTreeGroups().find(e=>e.id===`Tools`)?.items.filter(e=>e.route!==`/tools`)??[]);static ɵfac=function(t){return new(t||n)};static ɵcmp=H({type:n,selectors:[[`app-tools`]],decls:5,vars:1,consts:[[`sectionTitle`,`Playground`,`pageTitle`,`Tools`,`pageDescription`,`Configure Blocks interactions, preview them with your active theme, and copy the settings into your application.`],[`minColumnWidth`,`16rem`,3,`gap`],[`bxSurface`,``,1,`tool-card`,3,`routerLink`],[`size`,`24`,3,`name`]],template:function(t,N){t&1&&($(0,`bx-page-container`),Be(1,`bx-page-header`,0),$(2,`bx-grid`,1),Hn(3,D,6,4,`a`,2,P),q()()),t&2&&(E(2),le(`gap`,4),E(),qn(N.tools()))},dependencies:[$p,Ft,hn,kM,SM,za],styles:[`
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