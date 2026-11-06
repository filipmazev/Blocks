import{t as D}from"./chunk-DBA60k9e.js";import"./chunk-DTPx3lgi.js";import{G as o}from"./main-2GBJQHUZ.js";import{Ai as tt,Di as te,Jt as Se,Q as JM,Qi as y,X as Ir,ci as p,ea as ye,ir as eI,jr as k,oi as oe,rr as dv,wr as j,xn as XM,zi as wX}from"./chunk-CfQ5k3AW.js";var x=class d{activatedRoute=p(Ir);routeData=wX(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});entry=y(()=>o.find(e=>e.id===this.routeData().utilityId)??o[0]);codeFiles=y(()=>{let e=this.entry().id,t=[{title:`${e}.ts`,path:`assets/code-snippets/utilities/components/${e}/${e}.ts.txt`,language:`typescript`},{title:`${e}.html`,path:`assets/code-snippets/utilities/components/${e}/${e}.html.txt`,language:`html`},{title:`utility-demo.scss`,path:`assets/code-snippets/utilities/utility-demo.scss.txt`,language:`scss`}];return(e===`color-tokens`||e===`overlay-positioning`)&&t.push({title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`}),e===`scroll-lock`&&t.push({title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}),t});static ɵfac=function(t){return new(t||d)};static ɵcmp=j({type:d,selectors:[[`app-utility-page`]],decls:13,vars:5,consts:[[3,`pageDescription`],[`aria-labelledby`,`utility-demo-title`,1,`demo-section`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,1,`section-heading`,3,`gap`],[`id`,`utility-demo-title`],[3,`decorative`],[`aria-labelledby`,`utility-documentation-title`,1,`documentation-section`],[`id`,`utility-documentation-title`],[3,`readmePath`,`codeFiles`]],template:function(t,l){t&1&&(te(0,`bx-page-container`,0)(1,`section`,1)(2,`bx-stack`,2)(3,`h2`,3),Se(4,`Interactive example`),oe(),te(5,`span`),Se(6,`Uses your active palette`),oe()(),tt(7,`router-outlet`),oe(),tt(8,`bx-divider`,4),te(9,`section`,5)(10,`h2`,6),Se(11,`Documentation and source`),oe(),tt(12,`app-component-info`,7),oe()()),t&2&&(ye(`pageDescription`,l.entry().description),k(2),ye(`gap`,2),k(6),ye(`decorative`,!0),k(4),ye(`readmePath`,l.entry().readme)(`codeFiles`,l.codeFiles()))},dependencies:[eI,D,XM,dv,JM],styles:[`
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
  margin-block-end: 1rem;
}
.demo-section[_ngcontent-%COMP%] {
  margin-block-end: 2rem;
}
.documentation-section[_ngcontent-%COMP%] {
  min-inline-size: 0;
  margin-block-start: 2rem;
}
.documentation-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-block-end: 1rem;
}`]})};export{x as UtilityPage};