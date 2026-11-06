import{i as bt}from"./chunk-DYFNxhk9.js";import{n as k}from"./chunk-DGiA6seu.js";import{J as o}from"./main-U2OBHRR6.js";import{r as Z,t as Ae}from"./chunk-Ugx93LBR.js";import{$t as Te,Br as ie,Dr as gr,Et as O1,Hn as ae,Jr as jn,Kr as je,Nn as _,Nr as hr,Ri as sM,Rr as iM,Ur as j,W as H,Xn as bn,an as V$1,b as D,dn as Vn,hr as fM,ia as vn,j as F$1,jt as Op,ln as Ve,mi as oe,nn as U,or as dM,qi as tM,ra as ve,ta as v,vr as fn,yi as pM}from"./chunk-DBDMpaTC.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&(j(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),Ve(3,`bx-icon`,13)(4,`bx-tag`,14),U(),j(5,`p`),Te(6),U(),j(7,`code`),Te(8),U()(),j(9,`a`,15),Te(10,` Explore utility `),Ve(11,`bx-icon`,16),U()()),r&2){let e=l.$implicit;ae(`title`,e.title)(`headingLevel`,2),D(),ae(`gap`,4),D(),ae(`gap`,3),D(),ae(`name`,e.icon),D(),ae(`focusable`,!1),D(2),je(e.description),D(2),je(e.symbol),D(),ae(`routerLink`,O1(10,R,e.id)),H(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=hr();Ve(0,`bx-alert`,17),j(1,`button`,18),ve(`click`,function(){bn(e);let d=F$1();return vn(d.query.set(``))}),Te(2,`Clear search`),U()}}var F=class r{query=_(``);examples=v(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=V$1({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(j(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),ve(`valueChange`,function(j){return c.query.set(j??``)}),U(),j(4,`p`,4),Te(5),U()(),j(6,`bx-grid`,5),Vn(7,W,12,12,`bx-card`,6,V),U(),oe(9,B,3,0),Ve(10,`bx-alert`,7),j(11,`section`,8)(12,`h2`,9),Te(13,`Scroll boundaries and progressive rendering`),U(),Ve(14,`app-infinite-scroll-examples`),U(),j(15,`section`,10),Ve(16,`app-readme`,11),U()()()),e&2&&(D(),ae(`gap`,6),D(),ae(`gap`,3),D(),ae(`value`,c.query()),D(2),gr(``,c.examples().length,` utilities`),D(),ae(`gap`,4),D(),jn(c.examples()),D(2),ie(c.examples().length?-1:9))},dependencies:[fM,iM,Z,sM,dM,fn,k,Op,Ae,pM,tM,bt],styles:[`
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
  --%NS%bx-card-padding: 1.25rem;
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
  margin-block-start: 1rem;
}`]})};export{F as Utilities};