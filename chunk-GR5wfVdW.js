import{i as _t}from"./chunk-6wTcGAGW.js";import{it as o,t as S}from"./main-RICJTCGQ.js";import"./chunk-C3hH_sJR.js";import{c as qe,r as Z}from"./chunk-DZ1I1_Lc.js";import{D,F as E,Ha as sT,Ni as j,No as yt,Nr as be,Nt as L,To as y,Tr as an,U as F$1,Vn as W$1,Vt as M,Xn as X,Y as Fe,Yi as lT,Yn as Wt,ai as fT,at as Hf,cn as Pc,do as w,gi as g,l as A,pa as nT,po as we,s as $t,ti as ee,v as Bt,wa as pT,wi as hT,zi as je}from"./chunk-DzvvGvUq.js";var R=r=>[`/utilities`,r];var V=(r,l)=>l.id;function W(r,l){if(r&1&&(E(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,12),we(3,`bx-icon`,13)(4,`bx-tag`,14),D(),E(5,`p`),X(6),D(),E(7,`code`),X(8),D()(),E(9,`a`,15),X(10,` Explore utility `),we(11,`bx-icon`,16),D()()),r&2){let e=l.$implicit;A(`title`,e.title)(`headingLevel`,2),y(),A(`gap`,4),y(),A(`gap`,3),y(),A(`name`,e.icon),y(),A(`focusable`,!1),y(2),be(e.description),y(2),be(e.symbol),y(),A(`routerLink`,Pc(10,R,e.id)),F$1(`aria-label`,`Explore `+e.title)}}function B(r,l){if(r&1){let e=yt();we(0,`bx-alert`,17),E(1,`button`,18),ee(`click`,function(){je(e);let d=w();return Fe(d.query.set(``))}),X(2,`Clear search`),D()}}var F=class r{query=M(``);examples=g(()=>{let l=this.query().trim().toLowerCase();return o.filter(e=>!l||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(l))});static ɵfac=function(e){return new(e||r)};static ɵcmp=W$1({type:r,selectors:[[`app-utilities`]],decls:17,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-labelledby`,`utility-scroll-heading`],[`id`,`utility-scroll-heading`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,c){e&1&&(E(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),ee(`valueChange`,function(j){return c.query.set(j??``)}),D(),E(4,`p`,4),X(5),D()(),E(6,`bx-grid`,5),$t(7,W,12,12,`bx-card`,6,V),D(),L(9,B,3,0),we(10,`bx-alert`,7),E(11,`section`,8)(12,`h2`,9),X(13,`Scroll boundaries and progressive rendering`),D(),we(14,`app-infinite-scroll-examples`),D(),E(15,`section`,10),we(16,`app-readme`,11),D()()()),e&2&&(y(),A(`gap`,6),y(),A(`gap`,3),y(),A(`value`,c.query()),y(2),an(``,c.examples().length,` utilities`),y(),A(`gap`,4),y(),Wt(c.examples()),y(2),j(c.examples().length?-1:9))},dependencies:[hT,sT,Z,lT,pT,Bt,S,Hf,qe,fT,nT,_t],styles:[`
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