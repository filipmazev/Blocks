import{i as bt}from"./chunk-edgNxWUq.js";import{A as S,tt as o}from"./main-5HCVZCER.js";import"./chunk-C9jkJ9AU.js";import{n as Z,s as qe}from"./chunk-BbcioGCK.js";import{A as E,Cr as de,Da as wM,Dt as MM,G as H,Gr as hn,Jt as Ot,La as ye,T as DM,V as G,X as He,Xi as q,Z as Hn,_ as CM,a as $p,bn as Te,ea as qn,et as IM,g as C,gr as ce,h as Be,ka as wr,mi as le,ot as JA,t as $,u as At,ur as bM,vt as L,wa as v,za as yr}from"./chunk-7QWHf5Iu.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&($(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),Be(3,`bx-icon`,13)(4,`bx-tag`,14),q(),$(5,`p`),Te(6),q(),$(7,`code`),Te(8),q()(),$(9,`a`,15),Te(10,` Explore utility `),Be(11,`bx-icon`,16),q()()),r&2){let e=l.$implicit;le(`title`,e.title)(`headingLevel`,2),E(),le(`gap`,4),E(),le(`gap`,3),E(),le(`name`,e.icon),E(),le(`focusable`,!1),E(2),He(e.description),E(2),He(e.symbol),E(),le(`routerLink`,JA(10,R,e.id)),G(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=yr();Be(0,`bx-alert`,17),$(1,`button`,18),ye(`click`,function(){At(e);let d=L();return Ot(d.query.set(``))}),Te(2,`Clear search`),q()}}var F=class r{query=C(``);examples=v(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=H({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&($(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),ye(`valueChange`,function(j){return c.query.set(j??``)}),q(),$(4,`p`,4),Te(5),q()(),$(6,`bx-grid`,5),Hn(7,W,12,12,`bx-card`,6,V),q(),ce(9,B,3,0),Be(10,`bx-alert`,7),$(11,`section`,8)(12,`h2`,9),Te(13,`Scroll boundaries and progressive rendering`),q(),Be(14,`app-infinite-scroll-examples`),q(),$(15,`section`,10),Be(16,`app-readme`,11),q()()()),e&2&&(E(),le(`gap`,6),E(),le(`gap`,3),E(),le(`value`,c.query()),E(2),wr(``,c.examples().length,` utilities`),E(),le(`gap`,4),E(),qn(c.examples()),E(2),de(c.examples().length?-1:9))},dependencies:[IM,wM,Z,CM,DM,hn,S,$p,qe,MM,bM,bt],styles:[`
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