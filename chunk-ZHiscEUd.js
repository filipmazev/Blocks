import{t as D}from"./chunk-c6e8hTnJ.js";import"./chunk-D3SC-bT8.js";import{q as o}from"./main-GAA3IH53.js";import{$t as Te,Hn as ae,Ur as j,Vn as aY,Yr as jr,Zi as uM,an as V,b as D$1,hr as fM,ln as Ve,nn as U,ta as v,vi as p,y as Cv,yi as pM}from"./chunk-DhMqzCIY.js";var x=class d{activatedRoute=p(jr);routeData=aY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});entry=v(()=>o.find(e=>e.id===this.routeData().utilityId)??o[0]);codeFiles=v(()=>{let e=this.entry().id,t=[{title:`${e}.ts`,path:`assets/code-snippets/utilities/components/${e}/${e}.ts.txt`,language:`typescript`},{title:`${e}.html`,path:`assets/code-snippets/utilities/components/${e}/${e}.html.txt`,language:`html`},{title:`utility-demo.scss`,path:`assets/code-snippets/utilities/utility-demo.scss.txt`,language:`scss`}];return(e===`color-tokens`||e===`overlay-positioning`)&&t.push({title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`}),e===`scroll-lock`&&t.push({title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}),t});static ɵfac=function(t){return new(t||d)};static ɵcmp=V({type:d,selectors:[[`app-utility-page`]],decls:13,vars:5,consts:[[3,`pageDescription`],[`aria-labelledby`,`utility-demo-title`,1,`demo-section`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,1,`section-heading`,3,`gap`],[`id`,`utility-demo-title`],[3,`decorative`],[`aria-labelledby`,`utility-documentation-title`,1,`documentation-section`],[`id`,`utility-documentation-title`],[3,`readmePath`,`codeFiles`]],template:function(t,l){t&1&&(j(0,`bx-page-container`,0)(1,`section`,1)(2,`bx-stack`,2)(3,`h2`,3),Te(4,`Interactive example`),U(),j(5,`span`),Te(6,`Uses your active palette`),U()(),Ve(7,`router-outlet`),U(),Ve(8,`bx-divider`,4),j(9,`section`,5)(10,`h2`,6),Te(11,`Documentation and source`),U(),Ve(12,`app-component-info`,7),U()()),t&2&&(ae(`pageDescription`,l.entry().description),D$1(2),ae(`gap`,2),D$1(6),ae(`decorative`,!0),D$1(4),ae(`readmePath`,l.entry().readme)(`codeFiles`,l.codeFiles()))},dependencies:[fM,D,uM,Cv,pM],styles:[`
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