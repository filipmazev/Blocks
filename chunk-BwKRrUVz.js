import{i as bt}from"./chunk-B0vdNpru.js";import{n as k}from"./chunk-BpRItq3P.js";import{X as qe,q as Z,rt as o}from"./main-HW2XYL5W.js";import{$i as v,Aa as z1,Ar as gr,Bi as se,Bt as P,D as E,Gr as je,N as Fe,Pa as zn,Ti as pM,W as H,Zr as k$1,_a as xe,aa as vn,hn as U,ii as lM,jr as hM,ka as z,ma as xM,na as vM,nr as ae,pi as mr,q as Hp,qr as jn,t as $,u as At,un as Te,xa as yM,yi as oe,zt as Ot}from"./chunk-Dt37D5SH.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&(U(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),Fe(3,`bx-icon`,13)(4,`bx-tag`,14),H(),U(5,`p`),Te(6),H(),U(7,`code`),Te(8),H()(),U(9,`a`,15),Te(10,` Explore utility `),Fe(11,`bx-icon`,16),H()()),r&2){let e=l.$implicit;oe(`title`,e.title)(`headingLevel`,2),k$1(),oe(`gap`,4),k$1(),oe(`gap`,3),k$1(),oe(`name`,e.icon),k$1(),oe(`focusable`,!1),k$1(2),je(e.description),k$1(2),je(e.symbol),k$1(),oe(`routerLink`,z1(10,R,e.id)),$(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=gr();Fe(0,`bx-alert`,17),U(1,`button`,18),xe(`click`,function(){At(e);let d=P();return Ot(d.query.set(``))}),Te(2,`Clear search`),H()}}var F=class r{query=E(``);examples=v(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=z({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(U(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),xe(`valueChange`,function(j){return c.query.set(j??``)}),H(),U(4,`p`,4),Te(5),H()(),U(6,`bx-grid`,5),jn(7,W,12,12,`bx-card`,6,V),H(),ae(9,B,3,0),Fe(10,`bx-alert`,7),U(11,`section`,8)(12,`h2`,9),Te(13,`Scroll boundaries and progressive rendering`),H(),Fe(14,`app-infinite-scroll-examples`),H(),U(15,`section`,10),Fe(16,`app-readme`,11),H()()()),e&2&&(k$1(),oe(`gap`,6),k$1(),oe(`gap`,3),k$1(),oe(`value`,c.query()),k$1(2),mr(``,c.examples().length,` utilities`),k$1(),oe(`gap`,4),k$1(),zn(c.examples()),k$1(2),se(c.examples().length?-1:9))},dependencies:[xM,pM,Z,hM,vM,vn,k,Hp,qe,yM,lM,bt],styles:[`
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