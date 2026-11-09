import{i as bt}from"./chunk-DSslel-A.js";import{A as S,tt as o}from"./main-72PK7OKX.js";import"./chunk-tOnncOWn.js";import{n as Z,s as qe}from"./chunk-BrHceUG-.js";import{A as E,Aa as wM,Ct as Lt,Dt as MM,Ia as ye,Na as wr,T as DM,Tr as de,Wn as Y,Wr as gn,Z as Hn,Zi as q,_ as CM,a as $p,dr as b,dt as K,ea as qe$1,en as Pt,et as IM,fr as bM,gi as le,jn as Ve,na as qn,ot as JA,t as $,vt as L,w as D,yr as ce,za as yr,zt as Ne}from"./chunk-CwZ5dsYL.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&(K(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),Ve(3,`bx-icon`,13)(4,`bx-tag`,14),$(),K(5,`p`),Ne(6),$(),K(7,`code`),Ne(8),$()(),K(9,`a`,15),Ne(10,` Explore utility `),Ve(11,`bx-icon`,16),$()()),r&2){let e=l.$implicit;le(`title`,e.title)(`headingLevel`,2),D(),le(`gap`,4),D(),le(`gap`,3),D(),le(`name`,e.icon),D(),le(`focusable`,!1),D(2),qe$1(e.description),D(2),qe$1(e.symbol),D(),le(`routerLink`,JA(10,R,e.id)),Y(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=yr();Ve(0,`bx-alert`,17),K(1,`button`,18),ye(`click`,function(){Pt(e);let d=L();return Lt(d.query.set(``))}),Ne(2,`Clear search`),$()}}var F=class r{query=E(``);examples=b(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=q({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(K(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),ye(`valueChange`,function(j){return c.query.set(j??``)}),$(),K(4,`p`,4),Ne(5),$()(),K(6,`bx-grid`,5),Hn(7,W,12,12,`bx-card`,6,V),$(),ce(9,B,3,0),Ve(10,`bx-alert`,7),K(11,`section`,8)(12,`h2`,9),Ne(13,`Scroll boundaries and progressive rendering`),$(),Ve(14,`app-infinite-scroll-examples`),$(),K(15,`section`,10),Ve(16,`app-readme`,11),$()()()),e&2&&(D(),le(`gap`,6),D(),le(`gap`,3),D(),le(`value`,c.query()),D(2),wr(``,c.examples().length,` utilities`),D(),le(`gap`,4),D(),qn(c.examples()),D(2),de(c.examples().length?-1:9))},dependencies:[IM,wM,Z,CM,DM,gn,S,$p,qe,MM,bM,bt],styles:[`
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