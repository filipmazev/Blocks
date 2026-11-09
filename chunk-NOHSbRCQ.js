import{t as C$1}from"./chunk-icMV_q9V.js";import{tt as o}from"./main-UTR3HEAF.js";import"./chunk-CaOOrMjs.js";import{A as E,Dt as MM,G as H,Hi as p,It as NY,Xi as q,bn as Te,d as Av,er as _M,et as IM,h as Be,ht as Kr,mi as le,t as $,wa as v}from"./chunk-CmtaEU9W.js";var C=class d{activatedRoute=p(Kr);routeData=NY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});entry=v(()=>o.find(e=>e.id===this.routeData().utilityId)??o[0]);codeFiles=v(()=>{let e=this.entry().id,t=[{title:`${e}.ts`,path:`assets/code-snippets/utilities/components/${e}/${e}.ts.txt`,language:`typescript`},{title:`${e}.html`,path:`assets/code-snippets/utilities/components/${e}/${e}.html.txt`,language:`html`},{title:`utility-demo.scss`,path:`assets/code-snippets/utilities/utility-demo.scss.txt`,language:`scss`}];return(e===`color-tokens`||e===`overlay-positioning`)&&t.push({title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`}),e===`scroll-lock`&&t.push({title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}),t});static ɵfac=function(t){return new(t||d)};static ɵcmp=H({type:d,selectors:[[`app-utility-page`]],decls:13,vars:5,consts:[[3,`pageDescription`],[`aria-labelledby`,`utility-demo-title`,1,`demo-section`],[`direction`,`responsive`,`align`,`center`,`justify`,`between`,1,`section-heading`,3,`gap`],[`id`,`utility-demo-title`],[3,`decorative`],[`aria-labelledby`,`utility-documentation-title`,1,`documentation-section`],[`id`,`utility-documentation-title`],[3,`readmePath`,`codeFiles`]],template:function(t,l){t&1&&($(0,`bx-page-container`,0)(1,`section`,1)(2,`bx-stack`,2)(3,`h2`,3),Te(4,`Interactive example`),q(),$(5,`span`),Te(6,`Uses your active palette`),q()(),Be(7,`router-outlet`),q(),Be(8,`bx-divider`,4),$(9,`section`,5)(10,`h2`,6),Te(11,`Documentation and source`),q(),Be(12,`app-component-info`,7),q()()),t&2&&(le(`pageDescription`,l.entry().description),E(2),le(`gap`,2),E(6),le(`decorative`,!0),E(4),le(`readmePath`,l.entry().readme)(`codeFiles`,l.codeFiles()))},dependencies:[IM,C$1,_M,Av,MM],styles:[`
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