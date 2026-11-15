import{T as re,k as o,r as S}from"./main-ZZPER4U3.js";import"./chunk-BERE-vL_.js";import"./chunk-DJNJ3luF.js";import"./chunk-CdNFuxUl.js";import"./chunk-BEm-ihzG.js";import{A as Yr,O as Xs,W as ks,Z as qs,et as st,m as Ln,rt as zn,tt as tl}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Po as ye,Sr as ba,Xt as Ql,b as Cy,cn as Sk,ct as K,i as $n,k as Ey,pr as a9,qi as m,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";function R(n,t){if(n&1&&Cy(0,`app-readme`,5),n&2){let e=Ql();fa(`path`,e.readmePath())}}function H(n,t){if(n&1&&Cy(0,`app-code`,6),n&2){let e=Ql();fa(`files`,e.codeFiles())}}var u=class n{nativeElement=m(ye).nativeElement;matchHeight=ke();codeFiles=ke.required();readmePath=ke.required();constructor(){Sk(t=>{let e=this.matchHeight();if(!e)return;let a=()=>this.nativeElement.style.height=`${e.getBoundingClientRect().height}px`;a();let h=new ResizeObserver(a);h.observe(e),t(()=>{h.disconnect(),this.nativeElement.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=$n({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,a){e&1&&(Os(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),Ey(3,R,1,1,`ng-template`,3),ba(),Os(4,`bx-tab`,4),Ey(5,H,1,1,`ng-template`,3),ba()()())},dependencies:[S,re,ks,zn,Ln],styles:[`
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
}`]})};var T=class n{activatedRoute=m(st);routeData=a9(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});entry=K(()=>o.find(t=>t.id===this.routeData().utilityId)??o[0]);codeFiles=K(()=>{let t=this.entry().id,e=[{title:`${t}.ts`,path:`assets/code-snippets/utilities/components/${t}/${t}.ts.txt`,language:`typescript`},{title:`${t}.html`,path:`assets/code-snippets/utilities/components/${t}/${t}.html.txt`,language:`html`},{title:`utility-demo.scss`,path:`assets/code-snippets/utilities/utility-demo.scss.txt`,language:`scss`}];return(t===`color-tokens`||t===`overlay-positioning`)&&e.push({title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`}),t===`scroll-lock`&&e.push({title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}),e});static ɵfac=function(e){return new(e||n)};static ɵcmp=$n({type:n,selectors:[[`app-utility-page`]],decls:13,vars:5,consts:[[3,`pageDescription`],[`aria-labelledby`,`utility-demo-title`,1,`demo-section`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,1,`section-heading`,3,`gap`],[`id`,`utility-demo-title`],[3,`decorative`],[`aria-labelledby`,`utility-documentation-title`,1,`documentation-section`],[`id`,`utility-documentation-title`],[3,`readmePath`,`codeFiles`]],template:function(e,a){e&1&&(Os(0,`bx-page-container`,0)(1,`section`,1)(2,`bx-stack`,2)(3,`h2`,3),XT(4,`Interactive example`),ba(),Os(5,`span`),XT(6,`Uses your active palette`),ba()(),Cy(7,`router-outlet`),ba(),Cy(8,`bx-divider`,4),Os(9,`section`,5)(10,`h2`,6),XT(11,`Documentation and source`),ba(),Cy(12,`app-component-info`,7),ba()()),e&2&&(fa(`pageDescription`,a.entry().description),Ul(2),fa(`gap`,2),Ul(6),fa(`decorative`,!0),Ul(4),fa(`readmePath`,a.entry().readme)(`codeFiles`,a.codeFiles()))},dependencies:[tl,u,qs,Yr,Xs],styles:[`
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