import{O as o,b as re,r as S}from"./main-2C33VDGB.js";import"./chunk-my8my469.js";import"./chunk-N1vXFbwO.js";import"./chunk-00B19EKY.js";import"./chunk-nJHBcAmt.js";import{P as Zs,_ as Js,a as As,b as Ln,g as Jr,i as An,rt as st,tt as rl}from"./chunk-D2mL-a4s.js";import{$a as sd,Hn as Vk,J as Fr,Jr as bo,Ro as xo,Vr as b,Wa as rd,X as G,Xn as Wo,j as CU,na as lA,pi as ee,rr as Xl,ta as ke,tt as Go}from"./chunk-4Vch4aoV.js";function R(n,t){if(n&1&&sd(0,`app-readme`,5),n&2){let e=Wo();xo(`path`,e.readmePath())}}function H(n,t){if(n&1&&sd(0,`app-code`,6),n&2){let e=Wo();xo(`files`,e.codeFiles())}}var u=class n{nativeElement=b(ke).nativeElement;matchHeight=ee();codeFiles=ee.required();readmePath=ee.required();constructor(){Vk(t=>{let e=this.matchHeight();if(!e)return;let a=()=>this.nativeElement.style.height=`${e.getBoundingClientRect().height}px`;a();let h=new ResizeObserver(a);h.observe(e),t(()=>{h.disconnect(),this.nativeElement.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Fr({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,a){e&1&&(bo(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),rd(3,R,1,1,`ng-template`,3),Go(),bo(4,`bx-tab`,4),rd(5,H,1,1,`ng-template`,3),Go()()())},dependencies:[S,re,As,An,Ln],styles:[`
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
}`]})};var T=class n{activatedRoute=b(st);routeData=CU(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});entry=G(()=>o.find(t=>t.id===this.routeData().utilityId)??o[0]);codeFiles=G(()=>{let t=this.entry().id,e=[{title:`${t}.ts`,path:`assets/code-snippets/utilities/components/${t}/${t}.ts.txt`,language:`typescript`},{title:`${t}.html`,path:`assets/code-snippets/utilities/components/${t}/${t}.html.txt`,language:`html`},{title:`utility-demo.scss`,path:`assets/code-snippets/utilities/utility-demo.scss.txt`,language:`scss`}];return(t===`color-tokens`||t===`overlay-positioning`)&&e.push({title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`}),t===`scroll-lock`&&e.push({title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}),e});static ɵfac=function(e){return new(e||n)};static ɵcmp=Fr({type:n,selectors:[[`app-utility-page`]],decls:13,vars:5,consts:[[3,`pageDescription`],[`aria-labelledby`,`utility-demo-title`,1,`demo-section`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,1,`section-heading`,3,`gap`],[`id`,`utility-demo-title`],[3,`decorative`],[`aria-labelledby`,`utility-documentation-title`,1,`documentation-section`],[`id`,`utility-documentation-title`],[3,`readmePath`,`codeFiles`]],template:function(e,a){e&1&&(bo(0,`bx-page-container`,0)(1,`section`,1)(2,`bx-stack`,2)(3,`h2`,3),lA(4,`Interactive example`),Go(),bo(5,`span`),lA(6,`Uses your active palette`),Go()(),sd(7,`router-outlet`),Go(),sd(8,`bx-divider`,4),bo(9,`section`,5)(10,`h2`,6),lA(11,`Documentation and source`),Go(),sd(12,`app-component-info`,7),Go()()),e&2&&(xo(`pageDescription`,a.entry().description),Xl(2),xo(`gap`,2),Xl(6),xo(`decorative`,!0),Xl(4),xo(`readmePath`,a.entry().readme)(`codeFiles`,a.codeFiles()))},dependencies:[rl,u,Zs,Jr,Js],styles:[`
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