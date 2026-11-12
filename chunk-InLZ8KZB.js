import{i as _t}from"./chunk-DdSKl6q0.js";import{it as o,t as S}from"./main-WBF72U3M.js";import"./chunk-DgmuKgJN.js";import{c as qe,r as Z}from"./chunk-D2hLzyEs.js";import{Bn as Ve,Di as jc,Fr as cT,Or as bT,Q as G,Qa as un,Qn as X,Si as j,To as y,U as F$1,Un as Vt,Zn as Wt,_o as xT,co as w,g as B$1,hn as R$1,i as $f,ii as g,j as D,l as $t,po as wt,pr as _,qa as uT,ti as fe,ui as hT,xo as xe,y as Be,yi as iT,za as te,zt as M}from"./chunk-BCj0j6SD.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&(_(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),xe(3,`bx-icon`,13)(4,`bx-tag`,14),D(),_(5,`p`),X(6),D(),_(7,`code`),X(8),D()(),_(9,`a`,15),X(10,` Explore utility `),xe(11,`bx-icon`,16),D()()),r&2){let e=l.$implicit;R$1(`title`,e.title)(`headingLevel`,2),y(),R$1(`gap`,4),y(),R$1(`gap`,3),y(),R$1(`name`,e.icon),y(),R$1(`focusable`,!1),y(2),fe(e.description),y(2),fe(e.symbol),y(),R$1(`routerLink`,jc(10,R,e.id)),B$1(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=wt();xe(0,`bx-alert`,17),_(1,`button`,18),te(`click`,function(){Be(e);let d=w();return Ve(d.query.set(``))}),X(2,`Clear search`),D()}}var F=class r{query=M(``);examples=g(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=G({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(_(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),te(`valueChange`,function(j){return c.query.set(j??``)}),D(),_(4,`p`,4),X(5),D()(),_(6,`bx-grid`,5),$t(7,W,12,12,`bx-card`,6,V),D(),j(9,B,3,0),xe(10,`bx-alert`,7),_(11,`section`,8)(12,`h2`,9),X(13,`Scroll boundaries and progressive rendering`),D(),xe(14,`app-infinite-scroll-examples`),D(),_(15,`section`,10),xe(16,`app-readme`,11),D()()()),e&2&&(y(),R$1(`gap`,6),y(),R$1(`gap`,3),y(),R$1(`value`,c.query()),y(2),un(``,c.examples().length,` utilities`),y(),R$1(`gap`,4),y(),Wt(c.examples()),y(2),F$1(c.examples().length?-1:9))},dependencies:[xT,cT,Z,uT,bT,Vt,S,$f,qe,hT,iT,_t],styles:[`
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