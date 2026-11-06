import{n as w}from"./chunk-DTPx3lgi.js";import{G as o}from"./main-2GBJQHUZ.js";import{r as Z,t as Ae}from"./chunk-DUDY88j1.js";import{Ai as tt,Bi as wn,Bt as QM,Di as te,F as G,Fn as _p,Ft as Pi,Jt as Se,Q as JM,Qi as y,Wn as bO,Xi as xr,di as pe,ea as ye,er as de,fi as qM,in as U,ir as eI,jr as k,ki as to,kn as ZM,l as Be,lt as M,na as yr,oi as oe,or as eo,tt as KM,vt as Ne,wr as j$1,yi as rr}from"./chunk-CfQ5k3AW.js";var j=n=>[`/utilities`,n];var R=(n,o)=>o.id;function V(n,o){if(n&1&&(te(0,`bx-card`,6)(1,`bx-stack`,1)(2,`bx-stack`,10),tt(3,`bx-icon`,11)(4,`bx-tag`,12),oe(),te(5,`p`),Se(6),oe(),te(7,`code`),Se(8),oe()(),te(9,`a`,13),Se(10,` Explore utility `),tt(11,`bx-icon`,14),oe()()),n&2){let e=o.$implicit;ye(`title`,e.title)(`headingLevel`,2),k(),ye(`gap`,4),k(),ye(`gap`,3),k(),ye(`name`,e.icon),k(),ye(`focusable`,!1),k(2),Be(e.description),k(2),Be(e.symbol),k(),ye(`routerLink`,bO(10,j,e.id)),G(`aria-label`,`Explore `+e.title)}}function W(n,o){if(n&1){let e=Pi();tt(0,`bx-alert`,15),te(1,`button`,16),Ne(`click`,function(){eo(e);let d=U();return to(d.query.set(``))}),Se(2,`Clear search`),oe()}}var $=class n{query=M(``);examples=y(()=>{let o$1=this.query().trim().toLowerCase();return o.filter(e=>!o$1||`${e.title} ${e.description} ${e.symbol}`.toLowerCase().includes(o$1))});static ɵfac=function(e){return new(e||n)};static ɵcmp=j$1({type:n,selectors:[[`app-utilities`]],decls:13,vars:6,consts:[[`pageDescription`,`Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.`],[3,`gap`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,3,`gap`],[`ariaLabel`,`Search utilities`,`placeholder`,`Search utilities or API names…`,`subscriptSizing`,`dynamic`,1,`utility-search`,3,`valueChange`,`value`],[`role`,`status`,1,`result-count`],[`minColumnWidth`,`20rem`,3,`gap`],[1,`utility-card`,3,`title`,`headingLevel`],[`title`,`Explore the foundations`,`message`,`All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation.`],[`aria-label`,`Utilities guide and coverage`,1,`utility-documentation`],[`path`,`projects/playground/src/app/components/screens/utilities/README.md`],[`direction`,`horizontal`,`align`,`center`,3,`gap`],[`size`,`24`,3,`name`],[`text`,`Core`,`size`,`small`,`color`,`neutral`,3,`focusable`],[`bxCardFooter`,``,`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`16`],[`title`,`No utilities found`,`message`,`Try another name or clear your search to browse all utilities.`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(e,l){e&1&&(te(0,`bx-page-container`,0)(1,`bx-stack`,1)(2,`bx-stack`,2)(3,`bx-search-input`,3),Ne(`valueChange`,function(F){return l.query.set(F??``)}),oe(),te(4,`p`,4),Se(5),oe()(),te(6,`bx-grid`,5),yr(7,V,12,12,`bx-card`,6,R),oe(),de(9,W,3,0),tt(10,`bx-alert`,7),te(11,`section`,8),tt(12,`app-readme`,9),oe()()()),e&2&&(k(),ye(`gap`,6),k(),ye(`gap`,3),k(),ye(`value`,l.query()),k(2),rr(``,l.examples().length,` utilities`),k(),ye(`gap`,4),k(),xr(l.examples()),k(2),pe(l.examples().length?-1:9))},dependencies:[eI,KM,Z,ZM,QM,wn,w,_p,Ae,JM,qM],styles:[`
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
}`]})};export{$ as Utilities};