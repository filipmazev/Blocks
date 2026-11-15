import{i as ft}from"./chunk-DI1fvR1i.js";import{k as o,r as S}from"./main-ZZPER4U3.js";import"./chunk-DJNJ3luF.js";import{D as fe,k as kn}from"./chunk-BEm-ihzG.js";import{C as Vs,O as Xs,b as Us,it as zs,s as Gs,tt as tl,x as Vi}from"./chunk-DE1qZ0OS.js";import{t as U}from"./chunk-1rrlZ2Ss.js";import{$r as fa,Ba as rm,En as W$1,Gr as el,In as XT,Lt as Os,Sr as ba,Xt as Ql,ai as gT,ar as Zy,b as Cy,ct as K,fa as nm,i as $n,it as Jc,nn as Ro,nr as Zb,qn as Yb,rt as Jb,wr as br,xn as Ul,xr as bT}from"./chunk-CVY9_LoB.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&(Os(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),Cy(3,`bx-icon`,13)(4,`bx-tag`,14),ba(),Os(5,`p`),XT(6),ba(),Os(7,`code`),XT(8),ba()(),Os(9,`a`,15),XT(10,` Explore utility `),Cy(11,`bx-icon`,16),ba()()),r&2){let e=l.$implicit;fa(`title`,e.title)(`headingLevel`,2),Ul(),fa(`gap`,4),Ul(),fa(`gap`,3),Ul(),fa(`name`,e.icon),Ul(),fa(`focusable`,!1),Ul(2),Zy(e.description),Ul(2),Zy(e.symbol),Ul(),fa(`routerLink`,nm(10,R,e.id)),Ro(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=Jb();Cy(0,`bx-alert`,17),Os(1,`button`,18),br(`click`,function(){Jc(e);let d=Ql();return el(d.query.set(``))}),XT(2,`Clear search`),ba()}}var F=class r{query=W$1(``);examples=K(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=$n({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(Os(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),br(`valueChange`,function(j){return c.query.set(j??``)}),ba(),Os(4,`p`,4),XT(5),ba()(),Os(6,`bx-grid`,5),Yb(7,W,12,12,`bx-card`,6,V),ba(),bT(9,B,3,0),Cy(10,`bx-alert`,7),Os(11,`section`,8)(12,`h2`,9),XT(13,`Scroll boundaries and progressive rendering`),ba(),Cy(14,`app-infinite-scroll-examples`),ba(),Os(15,`section`,10),Cy(16,`app-readme`,11),ba()()()),e&2&&(Ul(),fa(`gap`,6),Ul(),fa(`gap`,3),Ul(),fa(`value`,c.query()),Ul(2),rm(``,c.examples().length,` utilities`),Ul(),fa(`gap`,4),Ul(),Zb(c.examples()),Ul(2),gT(c.examples().length?-1:9))},dependencies:[tl,Vs,fe,Us,Gs,U,S,Vi,kn,Xs,zs,ft],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.utility-search[_ngcontent-%COMP%] {
  inline-size: 100%;
  max-inline-size: 32rem;
}
.result-count[_ngcontent-%COMP%] {
  flex-shrink: 0;
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.utility-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-5, 1.25rem);
}
.utility-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
.utility-card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
}
.utility-card[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-brand);
}
.utility-documentation[_ngcontent-%COMP%] {
  min-inline-size: 0;
  margin-block-start: var(--%NS%bx-space-4, 1rem);
}`]})};export{F as Utilities};