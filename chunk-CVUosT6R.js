import{t as C$1}from"./chunk-FHiYLBmb.js";import{O as o}from"./main-LZG75TJU.js";import"./chunk-BwR-4wZp.js";import{Ba as tJ,Br as bo,Eo as y,Ir as bT,Yn as X,Z as G,hi as gT,jo as yT,k as D,pi as g,pn as R,ri as f,sr as Yx,vr as _,xo as xe}from"./chunk-BO-KJF5K.js";var C=class d{activatedRoute=f(bo);routeData=tJ(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});entry=g(()=>o.find(e=>e.id===this.routeData().utilityId)??o[0]);codeFiles=g(()=>{let e=this.entry().id,t=[{title:`${e}.ts`,path:`assets/code-snippets/utilities/components/${e}/${e}.ts.txt`,language:`typescript`},{title:`${e}.html`,path:`assets/code-snippets/utilities/components/${e}/${e}.html.txt`,language:`html`},{title:`utility-demo.scss`,path:`assets/code-snippets/utilities/utility-demo.scss.txt`,language:`scss`}];return(e===`color-tokens`||e===`overlay-positioning`)&&t.push({title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`}),e===`scroll-lock`&&t.push({title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}),t});static ɵfac=function(t){return new(t||d)};static ɵcmp=G({type:d,selectors:[[`app-utility-page`]],decls:13,vars:5,consts:[[3,`pageDescription`],[`aria-labelledby`,`utility-demo-title`,1,`demo-section`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,1,`section-heading`,3,`gap`],[`id`,`utility-demo-title`],[3,`decorative`],[`aria-labelledby`,`utility-documentation-title`,1,`documentation-section`],[`id`,`utility-documentation-title`],[3,`readmePath`,`codeFiles`]],template:function(t,l){t&1&&(_(0,`bx-page-container`,0)(1,`section`,1)(2,`bx-stack`,2)(3,`h2`,3),X(4,`Interactive example`),D(),_(5,`span`),X(6,`Uses your active palette`),D()(),xe(7,`router-outlet`),D(),xe(8,`bx-divider`,4),_(9,`section`,5)(10,`h2`,6),X(11,`Documentation and source`),D(),xe(12,`app-component-info`,7),D()()),t&2&&(R(`pageDescription`,l.entry().description),y(2),R(`gap`,2),y(6),R(`decorative`,!0),y(4),R(`readmePath`,l.entry().readme)(`codeFiles`,l.codeFiles()))},dependencies:[yT,C$1,bT,Yx,gT],styles:[`
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
}`]})};export{C as UtilityPage};