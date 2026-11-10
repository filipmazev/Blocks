import{i as bt}from"./chunk-BjYmbJhH.js";import{nt as o,t as S}from"./main-CHCNDXPW.js";import"./chunk-Cgvoq887.js";import{n as Z,s as qe}from"./chunk-C_Cm-KTR.js";import{An as Xp,Ci as lt,Dt as OM,Hr as g,K as In,Kt as S$1,N as G,Nt as P,Oi as nc,Pa as wn,Ri as on,Ti as me,V as IM,_ as CM,_t as Me,b as DM,c as Ae,ci as jM,g as C,ha as tn,ki as ne,ln as V$1,nr as at,o as A,pa as te,s as AM,tt as K,xa as ue,y as D,yt as Mn}from"./chunk-Cn9-98lL.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&(A(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),Ae(3,`bx-icon`,13)(4,`bx-tag`,14),P(),A(5,`p`),me(6),P(),A(7,`code`),me(8),P()(),A(9,`a`,15),me(10,` Explore utility `),Ae(11,`bx-icon`,16),P()()),r&2){let e=l.$implicit;V$1(`title`,e.title)(`headingLevel`,2),C(),V$1(`gap`,4),C(),V$1(`gap`,3),C(),V$1(`name`,e.icon),C(),V$1(`focusable`,!1),C(2),Me(e.description),C(2),Me(e.symbol),C(),V$1(`routerLink`,nc(10,R,e.id)),K(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=tn();Ae(0,`bx-alert`,17),A(1,`button`,18),ue(`click`,function(){at(e);let d=S$1();return lt(d.query.set(``))}),me(2,`Clear search`),P()}}var F=class r{query=D(``);examples=g(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=G({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(A(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),ue(`valueChange`,function(j){return c.query.set(j??``)}),P(),A(4,`p`,4),me(5),P()(),A(6,`bx-grid`,5),Mn(7,W,12,12,`bx-card`,6,V),P(),te(9,B,3,0),Ae(10,`bx-alert`,7),A(11,`section`,8)(12,`h2`,9),me(13,`Scroll boundaries and progressive rendering`),P(),Ae(14,`app-infinite-scroll-examples`),P(),A(15,`section`,10),Ae(16,`app-readme`,11),P()()()),e&2&&(C(),V$1(`gap`,6),C(),V$1(`gap`,3),C(),V$1(`value`,c.query()),C(2),wn(``,c.examples().length,` utilities`),C(),V$1(`gap`,4),C(),In(c.examples()),C(2),ne(c.examples().length?-1:9))},dependencies:[jM,DM,Z,IM,AM,on,S,Xp,qe,OM,CM,bt],styles:[`
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