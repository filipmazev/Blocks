import{i as ft}from"./chunk-DY0Y9goL.js";import{a as S,k as o}from"./main-B5BGPZDX.js";import"./chunk-DErdAUDp.js";import{L as xe,a as At}from"./chunk-HfEiycvf.js";import{G as js,J as nl,O as Ys,U as ji,h as Ks,n as $s,o as Bs}from"./chunk-DyZGtlM9.js";import{$n as YC,Dn as U,Hi as lb,K as Fr,Or as bo,Sa as pb,Sr as al,Ua as sk,Va as sb,Vo as z,Xa as td,Ya as tb,ao as ub,c as $o,et as Go,go as vo,ia as nb,ja as qs,kr as br,mr as aA,pa as ob,u as $s$1,wi as il}from"./chunk-DflWScik.js";var R=r=>[`/utilities`,r];var V=(r,o)=>o.id;function W(r,o){if(r&1&&(bo(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,15),td(3,`bx-icon`,16)(4,`bx-tag`,17),Go(),bo(5,`p`),aA(6),Go(),bo(7,`code`),aA(8),Go()(),bo(9,`a`,18),aA(10,` Explore utility `),td(11,`bx-icon`,19),Go()()),r&2){let e=o.$implicit;$o(`title`,e.title)(`headingLevel`,2),qs(),$o(`gap`,4),qs(),$o(`gap`,3),qs(),$o(`name`,e.icon),qs(),$o(`focusable`,!1),qs(2),sk(e.description),qs(2),sk(e.symbol),qs(),$o(`routerLink`,pb(10,R,e.id)),vo(`aria-label`,`Explore `+e.title)}}function B(r,o){if(r&1){let e=lb();td(0,`bx-alert`,20),bo(1,`button`,21),br(`click`,function(){il(e);let d=$s$1();return al(d.query.set(``))}),aA(2,`Clear search`),Go()}}var F=class r{query=z(``);examples=U(()=>{let o$1=this.query().trim().toLowerCase();return o.filter(e=>!o$1||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(o$1))});static ɵfac=function(e){return new(e||r)};static ɵcmp=Fr({type:r,selectors:[[`app-utilities`]],decls:24,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-labelledby`,`utility-popup-heading`],[`id`,`utility-popup-heading`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/components/menu-item`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(bo(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),br(`valueChange`,function(j){return c.query.set(j??``)}),Go(),bo(4,`p`,4),aA(5),Go()(),bo(6,`bx-grid`,5),nb(7,W,12,12,`bx-card`,6,V),Go(),tb(9,B,3,0),td(10,`bx-alert`,7),bo(11,`section`,8)(12,`h2`,9),aA(13,`Scroll boundaries and progressive rendering`),Go(),td(14,`app-infinite-scroll-examples`),Go(),bo(15,`section`,10)(16,`h2`,11),aA(17,`Owned popup interactions`),Go(),bo(18,`p`),aA(19,`The shared containsOverlayTarget helper keeps nested context surfaces owned by their parent menu.`),Go(),bo(20,`a`,12),aA(21,`Explore nested menu actions`),Go()(),bo(22,`section`,13),td(23,`app-readme`,14),Go()()()),e&2&&(qs(),$o(`gap`,6),qs(),$o(`gap`,3),qs(),$o(`value`,c.query()),qs(2),ub(``,c.examples().length,` utilities`),qs(),$o(`gap`,4),qs(),sb(c.examples()),qs(2),ob(c.examples().length?-1:9))},dependencies:[nl,js,xe,$s,Ks,YC,S,ji,At,Ys,Bs,ft],styles:[`
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