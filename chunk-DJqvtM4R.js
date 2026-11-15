import{i as ft}from"./chunk-DRdjY1Lj.js";import{O as o,t as S}from"./main-AKVTKJWF.js";import"./chunk-DlJTjSOR.js";import{A as kn,O as fe}from"./chunk-BHj6x81D.js";import{Dn as ST,E as D,F as ET,Ft as Lt,Ga as qt,Gi as j,Ia as pn,It as M,Ji as je,Nn as T,No as yT,Nr as _,Oi as g,Pt as Le,Zi as jt,an as Q,br as Yf,f as B$1,fo as vT,ho as ve,jo as y,jt as L,pa as mT,pt as J,t as $,uo as ut,vo as w,w as Cs,wi as fe$1,zt as MT}from"./chunk-2VndCPnC.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&(_(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),ve(3,`bx-icon`,13)(4,`bx-tag`,14),D(),_(5,`p`),Q(6),D(),_(7,`code`),Q(8),D()(),_(9,`a`,15),Q(10,` Explore utility `),ve(11,`bx-icon`,16),D()()),r&2){let e=l.$implicit;T(`title`,e.title)(`headingLevel`,2),y(),T(`gap`,4),y(),T(`gap`,3),y(),T(`name`,e.icon),y(),T(`focusable`,!1),y(2),fe$1(e.description),y(2),fe$1(e.symbol),y(),T(`routerLink`,Cs(10,R,e.id)),B$1(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=ut();ve(0,`bx-alert`,17),_(1,`button`,18),J(`click`,function(){Le(e);let d=w();return je(d.query.set(``))}),Q(2,`Clear search`),D()}}var F=class r{query=M(``);examples=g(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=$({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(_(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),J(`valueChange`,function(j){return c.query.set(j??``)}),D(),_(4,`p`,4),Q(5),D()(),_(6,`bx-grid`,5),Lt(7,W,12,12,`bx-card`,6,V),D(),L(9,B,3,0),ve(10,`bx-alert`,7),_(11,`section`,8)(12,`h2`,9),Q(13,`Scroll boundaries and progressive rendering`),D(),ve(14,`app-infinite-scroll-examples`),D(),_(15,`section`,10),ve(16,`app-readme`,11),D()()()),e&2&&(y(),T(`gap`,6),y(),T(`gap`,3),y(),T(`value`,c.query()),y(2),pn(``,c.examples().length,` utilities`),y(),T(`gap`,4),y(),jt(c.examples()),y(2),j(c.examples().length?-1:9))},dependencies:[MT,vT,fe,yT,ST,qt,S,Yf,kn,ET,mT,ft],styles:[`
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