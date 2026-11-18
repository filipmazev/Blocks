import{t as Et}from"./chunk-pCjt_SHr.js";import{O as o,r as S}from"./main-WFN5NS76.js";import"./chunk-00B19EKY.js";import{I as xe,L as zt}from"./chunk-0rSpyq6Z.js";import{T as Ui,_ as Js,et as qs,j as Xs,n as $s,tt as rl,u as Fs}from"./chunk-D2mL-a4s.js";import{$a as sd,Bi as ik,Co as vo,Fr as ab,Gr as bb,J as Fr,Jr as bo,Na as pb,Qr as cb,Ro as xo,Sa as nd,Ta as od,X as G,Xn as Wo,Yr as br,_r as ZC,ha as mb,na as lA,ri as cl,rr as Xl,t as $,tt as Go,zr as al}from"./chunk-4Vch4aoV.js";var R=r=>[`/utilities`,r];var V=(r,o)=>o.id;function W(r,o){if(r&1&&(bo(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,15),sd(3,`bx-icon`,16)(4,`bx-tag`,17),Go(),bo(5,`p`),lA(6),Go(),bo(7,`code`),lA(8),Go()(),bo(9,`a`,18),lA(10,` Explore utility `),sd(11,`bx-icon`,19),Go()()),r&2){let e=o.$implicit;xo(`title`,e.title)(`headingLevel`,2),Xl(),xo(`gap`,4),Xl(),xo(`gap`,3),Xl(),xo(`name`,e.icon),Xl(),xo(`focusable`,!1),Xl(2),ik(e.description),Xl(2),ik(e.symbol),Xl(),xo(`routerLink`,bb(10,R,e.id)),vo(`aria-label`,`Explore `+e.title)}}function B(r,o){if(r&1){let e=pb();sd(0,`bx-alert`,20),bo(1,`button`,21),br(`click`,function(){al(e);let d=Wo();return cl(d.query.set(``))}),lA(2,`Clear search`),Go()}}var F=class r{query=$(``);examples=G(()=>{let o$1=this.query().trim().toLowerCase();return o.filter(e=>!o$1||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(o$1))});static ɵfac=function(e){return new(e||r)};static ɵcmp=Fr({type:r,selectors:[[`app-utilities`]],decls:24,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-labelledby`,`utility-popup-heading`],[`id`,`utility-popup-heading`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/components/menu-item`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(bo(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),br(`valueChange`,function(j){return c.query.set(j??``)}),Go(),bo(4,`p`,4),lA(5),Go()(),bo(6,`bx-grid`,5),ab(7,W,12,12,`bx-card`,6,V),Go(),od(9,B,3,0),sd(10,`bx-alert`,7),bo(11,`section`,8)(12,`h2`,9),lA(13,`Scroll boundaries and progressive rendering`),Go(),sd(14,`app-infinite-scroll-examples`),Go(),bo(15,`section`,10)(16,`h2`,11),lA(17,`Owned popup interactions`),Go(),bo(18,`p`),lA(19,`The shared containsOverlayTarget helper keeps nested context surfaces owned by their parent menu.`),Go(),bo(20,`a`,12),lA(21,`Explore nested menu actions`),Go()(),bo(22,`section`,13),sd(23,`app-readme`,14),Go()()()),e&2&&(Xl(),xo(`gap`,6),Xl(),xo(`gap`,3),Xl(),xo(`value`,c.query()),Xl(2),mb(``,c.examples().length,` utilities`),Xl(),xo(`gap`,4),Xl(),cb(c.examples()),Xl(2),nd(c.examples().length?-1:9))},dependencies:[rl,$s,xe,qs,Xs,ZC,S,Ui,zt,Js,Fs,Et],styles:[`
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