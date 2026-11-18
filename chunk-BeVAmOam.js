import{S as re,a as S,k as o}from"./main-B5BGPZDX.js";import"./chunk-CaUpi_rr.js";import"./chunk-DErdAUDp.js";import"./chunk-Cb7n2Fk0.js";import"./chunk-HfEiycvf.js";import{J as nl,O as Ys,_ as Ls,b as Qr,g as Ln,nt as st,rt as zn,u as Gs}from"./chunk-DyZGtlM9.js";import{Cr as b,Dn as U,Ia as re$1,K as Fr,Kr as ed,Or as bo,Ri as ke,Xa as td,c as $o,et as Go,ho as vU,ja as qs,mr as aA,u as $s,x as Bk}from"./chunk-DflWScik.js";function R(n,t){if(n&1&&td(0,`app-readme`,5),n&2){let e=$s();$o(`path`,e.readmePath())}}function H(n,t){if(n&1&&td(0,`app-code`,6),n&2){let e=$s();$o(`files`,e.codeFiles())}}var u=class n{nativeElement=b(ke).nativeElement;matchHeight=re$1();codeFiles=re$1.required();readmePath=re$1.required();constructor(){Bk(t=>{let e=this.matchHeight();if(!e)return;let a=()=>this.nativeElement.style.height=`${e.getBoundingClientRect().height}px`;a();let h=new ResizeObserver(a);h.observe(e),t(()=>{h.disconnect(),this.nativeElement.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Fr({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,a){e&1&&(bo(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),ed(3,R,1,1,`ng-template`,3),Go(),bo(4,`bx-tab`,4),ed(5,H,1,1,`ng-template`,3),Go()()())},dependencies:[S,re,Ls,zn,Ln],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  min-height: 0;
}
.info-container[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 86%, transparent);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  border: 1px solid var(--%NS%bx-border-default);
  min-width: 0;
  padding: var(--%NS%bx-space-6, 1.5rem);
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.info-tabs[_ngcontent-%COMP%] {
  --%NS%bx-tabs-panel-overflow: auto;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
}`]})};var T=class n{activatedRoute=b(st);routeData=vU(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});entry=U(()=>o.find(t=>t.id===this.routeData().utilityId)??o[0]);codeFiles=U(()=>{let t=this.entry().id,e=[{title:`${t}.ts`,path:`assets/code-snippets/utilities/components/${t}/${t}.ts.txt`,language:`typescript`},{title:`${t}.html`,path:`assets/code-snippets/utilities/components/${t}/${t}.html.txt`,language:`html`},{title:`utility-demo.scss`,path:`assets/code-snippets/utilities/utility-demo.scss.txt`,language:`scss`}];return(t===`color-tokens`||t===`overlay-positioning`)&&e.push({title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`}),t===`scroll-lock`&&e.push({title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}),e});static ɵfac=function(e){return new(e||n)};static ɵcmp=Fr({type:n,selectors:[[`app-utility-page`]],decls:13,vars:5,consts:[[3,`pageDescription`],[`aria-labelledby`,`utility-demo-title`,1,`demo-section`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,1,`section-heading`,3,`gap`],[`id`,`utility-demo-title`],[3,`decorative`],[`aria-labelledby`,`utility-documentation-title`,1,`documentation-section`],[`id`,`utility-documentation-title`],[3,`readmePath`,`codeFiles`]],template:function(e,a){e&1&&(bo(0,`bx-page-container`,0)(1,`section`,1)(2,`bx-stack`,2)(3,`h2`,3),aA(4,`Interactive example`),Go(),bo(5,`span`),aA(6,`Uses your active palette`),Go()(),td(7,`router-outlet`),Go(),td(8,`bx-divider`,4),bo(9,`section`,5)(10,`h2`,6),aA(11,`Documentation and source`),Go(),td(12,`app-component-info`,7),Go()()),e&2&&($o(`pageDescription`,a.entry().description),qs(2),$o(`gap`,2),qs(6),$o(`decorative`,!0),qs(4),$o(`readmePath`,a.entry().readme)(`codeFiles`,a.codeFiles()))},dependencies:[nl,u,Gs,Qr,Ys],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
h2[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-heading);
  font-size: 1.125rem;
}
code[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8125rem;
}
.section-heading[_ngcontent-%COMP%] {
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}
.demo-section[_ngcontent-%COMP%] {
  margin-block-end: var(--%NS%bx-space-8, 2rem);
}
.documentation-section[_ngcontent-%COMP%] {
  min-inline-size: 0;
  margin-block-start: var(--%NS%bx-space-8, 2rem);
}
.documentation-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}`]})};export{T as UtilityPage};