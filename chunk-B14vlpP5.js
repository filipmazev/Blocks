import{t as D}from"./chunk-BJCSLbY4.js";import"./chunk-BpRItq3P.js";import{rt as o}from"./main-HW2XYL5W.js";import{$i as v,N as Fe,Si as p,W as H,Zr as k,ga as xY,hn as U,ji as qr,ka as z,ma as xM,mn as Tv,or as bM,un as Te,xa as yM,yi as oe}from"./chunk-Dt37D5SH.js";var x=class d{activatedRoute=p(qr);routeData=xY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});entry=v(()=>o.find(e=>e.id===this.routeData().utilityId)??o[0]);codeFiles=v(()=>{let e=this.entry().id,t=[{title:`${e}.ts`,path:`assets/code-snippets/utilities/components/${e}/${e}.ts.txt`,language:`typescript`},{title:`${e}.html`,path:`assets/code-snippets/utilities/components/${e}/${e}.html.txt`,language:`html`},{title:`utility-demo.scss`,path:`assets/code-snippets/utilities/utility-demo.scss.txt`,language:`scss`}];return(e===`color-tokens`||e===`overlay-positioning`)&&t.push({title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`}),e===`scroll-lock`&&t.push({title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}),t});static ɵfac=function(t){return new(t||d)};static ɵcmp=z({type:d,selectors:[[`app-utility-page`]],decls:13,vars:5,consts:[[3,`pageDescription`],[`aria-labelledby`,`utility-demo-title`,1,`demo-section`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,1,`section-heading`,3,`gap`],[`id`,`utility-demo-title`],[3,`decorative`],[`aria-labelledby`,`utility-documentation-title`,1,`documentation-section`],[`id`,`utility-documentation-title`],[3,`readmePath`,`codeFiles`]],template:function(t,l){t&1&&(U(0,`bx-page-container`,0)(1,`section`,1)(2,`bx-stack`,2)(3,`h2`,3),Te(4,`Interactive example`),H(),U(5,`span`),Te(6,`Uses your active palette`),H()(),Fe(7,`router-outlet`),H(),Fe(8,`bx-divider`,4),U(9,`section`,5)(10,`h2`,6),Te(11,`Documentation and source`),H(),Fe(12,`app-component-info`,7),H()()),t&2&&(oe(`pageDescription`,l.entry().description),k(2),oe(`gap`,2),k(6),oe(`decorative`,!0),k(4),oe(`readmePath`,l.entry().readme)(`codeFiles`,l.codeFiles()))},dependencies:[xM,D,bM,Tv,yM],styles:[`
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