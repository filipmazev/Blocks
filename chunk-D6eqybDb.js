import{A as S,I as se,P as re,Y as _,Z as a,x as nr}from"./main-UTR3HEAF.js";import{r as Ne$1,s as kn}from"./chunk-SvZqUTHT.js";import"./chunk-CaOOrMjs.js";import{n as Z}from"./chunk-C1FSODuM.js";import{A as E,An as V,B as Ft,C as Co,F,G as H,Gr as hn,Hi as p,La as ye,Li as oa,Oa as we$1,P as Er,Tn as UC,U as GA,Ur as hM,X as He,Xi as q,Z as Hn,Zi as qC,_ as CM,a as $p,bn as Te,ct as Jc,dr as be,dt as K,ea as qn,er as _M,et as IM,g as C,h as Be,it as It,jr as eo,ki as na,la as rp,li as kC,ln as Re,mi as le,pa as ss,rn as Qc,sa as rn,t as $,vt as L,wa as v,wn as U,xi as mn,ya as tf,yn as Tb,yr as cr,z as Fe,zt as Nn}from"./chunk-CmtaEU9W.js";var Ce=[`ring`];var Pe=[`surfacePanel`];function Me(l,a){if(l&1&&($(0,`div`,5),Be(1,`bx-card`,6,1),q()),l&2){let i=a.$implicit;we$1(`--%NS%panel-index`,i),E(),le(`bxSurfaceInteractive`,!1)(`surfaceEffects`,!1)}}var P=class l{bxA11yService=p(Re);nativeElement=p(V).nativeElement;destroyRef=p(U);ngZone=p(K);aperture=new eo(0,Er.soft);mounted=C(!1);visible=C(!1);documentVisible=C(!1);ring=mn(`ring`);panelElements=rp(`surfacePanel`,{read:V});panels=[0,1,2,3,4,5];elapsed=0;stopFrame;finePointer;constructor(){Fe(()=>this.ngZone.runOutsideAngular(()=>this.connect())),be(()=>{let a=this.bxA11yService.isReducedMotion(),i=this.mounted(),r=i&&this.visible()&&this.documentVisible()&&!a;F(()=>this.ngZone.runOutsideAngular(()=>this.syncMotion(r,i&&a)))}),this.destroyRef.onDestroy(()=>this.stopFrame?.())}setHovered(a,i){a.pointerType===`touch`||!this.finePointer?.matches||this.bxA11yService.isReducedMotion()||!this.stopFrame||(this.aperture.target=i?1:0)}connect(){let a=this.nativeElement.ownerDocument,i=()=>this.documentVisible.set(!a.hidden),r=new IntersectionObserver(([c])=>this.visible.set(c.isIntersecting));this.finePointer=a.defaultView?.matchMedia(`(hover: hover) and (pointer: fine)`),i(),r.observe(this.nativeElement),a.addEventListener(`visibilitychange`,i),this.mounted.set(!0),this.destroyRef.onDestroy(()=>{r.disconnect(),a.removeEventListener(`visibilitychange`,i)})}syncMotion(a,i){if(!a){this.stopFrame?.(),this.stopFrame=void 0,this.aperture.snap(0),i&&(this.elapsed=0,this.paint(!1));return}this.stopFrame||(this.stopFrame=cr(r=>(this.elapsed+=r,this.aperture.step(r),this.paint(!0),!0)))}paint(a){let i=this.ring()?.nativeElement;if(!i)return;let r=Math.max(0,Math.min(1,this.aperture.value)),c=a?this.elapsed*2%360:0;ss(i,{transform:`rotate(${c.toFixed(3)}deg)`}),this.panelElements().forEach(({nativeElement:d},k)=>{let D=this.elapsed*Math.PI*2/(9+k*.8)+k*Math.PI/3,z=a?Math.sin(D):0,Se=a?Math.cos(D)*.3:0,ye=r*9+z*.65,_e=-14+r*4+z*.25;ss(d,{transform:`translate(${Se.toFixed(3)}%, ${ye.toFixed(3)}%) rotate(${_e.toFixed(3)}deg)`},!0)})}static ɵfac=function(i){return new(i||l)};static ɵcmp=H({type:l,selectors:[[`app-theme-palette-preview`]],viewQuery:function(i,r){i&1&&Nn(r.ring,Ce,5)(r.panelElements,Pe,5,V),i&2&&It(2)},hostAttrs:[`aria-hidden`,`true`],decls:5,vars:0,consts:[[`ring`,``],[`surfacePanel`,``],[1,`palette-stage`,3,`pointerenter`,`pointerleave`,`pointercancel`],[1,`palette-ring`],[1,`panel-position`,3,`--%NS%panel-index`],[1,`panel-position`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`glass-panel`,3,`bxSurfaceInteractive`,`surfaceEffects`]],template:function(i,r){i&1&&($(0,`div`,2),ye(`pointerenter`,function(d){return r.setHovered(d,!0)})(`pointerleave`,function(d){return r.setHovered(d,!1)})(`pointercancel`,function(d){return r.setHovered(d,!1)}),$(1,`div`,3,0),Hn(3,Me,3,4,`div`,4,na),q()()),i&2&&(E(3),qn(r.panels))},dependencies:[CM,Ft],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  align-self: center;
}
.palette-stage[_ngcontent-%COMP%] {
  position: relative;
  inline-size: min(100%, 27rem);
  aspect-ratio: 1;
  margin-inline: auto;
  overflow: clip;
}
.palette-ring[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
}
.panel-position[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  transform: rotate(calc(var(--%NS%panel-index) * 60deg + 8deg));
  pointer-events: none;
}
.panel-position[_ngcontent-%COMP%]:nth-child(1) {
  --%NS%panel-color: var(--%NS%bx-primary);
}
.panel-position[_ngcontent-%COMP%]:nth-child(2) {
  --%NS%panel-color: color-mix(in srgb, var(--%NS%bx-text-info) 70%, var(--%NS%bx-accent));
}
.panel-position[_ngcontent-%COMP%]:nth-child(3) {
  --%NS%panel-color: color-mix(in srgb, var(--%NS%bx-text-success) 80%, var(--%NS%bx-primary));
}
.panel-position[_ngcontent-%COMP%]:nth-child(4) {
  --%NS%panel-color: var(--%NS%bx-accent);
}
.panel-position[_ngcontent-%COMP%]:nth-child(5) {
  --%NS%panel-color: color-mix(in srgb, var(--%NS%bx-text-warn) 80%, var(--%NS%bx-primary));
}
.panel-position[_ngcontent-%COMP%]:nth-child(6) {
  --%NS%panel-color: color-mix(in srgb, var(--%NS%bx-text-danger) 75%, var(--%NS%bx-accent));
}
.glass-panel[_ngcontent-%COMP%] {
  --%NS%bx-card-radius: var(--%NS%bx-rounded-xl, 1rem);
  --%NS%bx-card-background: var(--%NS%panel-color);
  --%NS%bx-card-border: color-mix(in srgb, var(--%NS%panel-color) 45%, var(--%NS%bx-border-default));
  --%NS%bx-card-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  --%NS%bx-glass-min-opacity: 0.4;
  --%NS%bx-refraction-min-opacity: 0.4;
  position: absolute;
  inset-block-start: 8%;
  inset-inline-start: 29%;
  inline-size: 42%;
  block-size: 30%;
  transform: rotate(-14deg);
  pointer-events: auto;
}
@media (forced-colors: active) {
  .glass-panel[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
  }
}`]})};var M=class l extends kn{note=C(`A theme travels with every overlay.`);static ɵfac=(()=>{let a;return function(r){return(a||(a=Co(l)))(r||l)}})();static ɵcmp=H({type:l,selectors:[[`app-theme-studio-preview-dialog`]],hostAttrs:[`role`,`dialog`,`aria-modal`,`true`,`aria-label`,`Preview a themed dialog`],features:[rn],decls:5,vars:1,consts:[[`label`,`Sample field`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(i,r){i&1&&($(0,`p`),Te(1,`This dialog inherits the active surface, border, radius and colors. Theme changes apply while it stays open.`),q(),$(2,`bx-input-field`,0),UC(`valueChange`,function(d){return GA(r.note,d)||(r.note=d),d}),q(),$(3,`button`,1),ye(`click`,function(){return r.close()}),Te(4,`Done`),q()),i&2&&(E(2),qC(`value`,r.note))},dependencies:[Z,nr],styles:[`
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  gap: var(--%NS%bx-space-4, 1rem);
}`]})};var xe=[{label:`Primary`,token:`--bx-primary`,description:`Main actions and brand emphasis.`},{label:`Accent`,token:`--bx-accent`,description:`Highlights and secondary emphasis.`},{label:`Surface`,token:`--bx-bg-surface`,description:`Cards, panels and overlay backgrounds.`},{label:`Text`,token:`--bx-text-primary`,description:`The default foreground on surfaces.`},{label:`Border`,token:`--bx-border-default`,description:`Contours and content separators.`},{label:`Hover`,token:`--bx-bg-element-hover`,description:`Feedback when a control is pointed at.`}];var Oe=(l,a)=>a.token;function we(l,a){if(l&1&&($(0,`div`,20),Be(1,`span`,55),$(2,`h3`),Te(3),q(),$(4,`code`),Te(5),q(),$(6,`p`),Te(7),q()()),l&2){let i=a.$implicit;E(),we$1(`background-color`,`var(`+i.token+`)`),E(2),He(i.label),E(2),He(i.token),E(2),He(i.description)}}function Ee(l,a){if(l&1&&Be(0,`app-code`,56),l&2){let i=L();le(`files`,i.exportFiles())}}function Ne(l,a){l&1&&Be(0,`app-readme`,57)}var fe=class l{modalService=p(Ne$1);themeStudioService=p(se);colors=xe;paletteLabel=v(()=>tf.find(a=>a.id===this.themeStudioService.themingService.palette())?.label??`Custom palette`);exportFiles=v(()=>[{title:`styles.scss`,path:`studio-home-export.scss`,language:`scss`,content:this.themeStudioService.scss()}]);setMode(a){(a===`light`||a===`dark`)&&this.themeStudioService.themingService.setApplicationTheme(a)}showDialog(){this.modalService.open(M,{header:{text:`Theme inheritance`,icon:{name:`layers`}},style:{layout:`center`,breakpoints:{sm:`bottom-sheet`}}})}openSetup(){this.themeStudioService.finishEdit(),this.modalService.open(re,{header:a.configure,style:{layout:`center`,breakpoints:{sm:`bottom-sheet`},wrapperStyles:`inline-size: 48rem; max-inline-size: 100%; block-size: min(52rem, 88dvh);`}})}static ɵfac=function(i){return new(i||l)};static ɵcmp=H({type:l,selectors:[[`app-theme-studio-demo`]],decls:154,vars:6,consts:[[`exportCode`,``],[`guide`,``],[`pageDescription`,`Explore how a Blocks theme connects colors, layout and materials across your application.`],[`aria-labelledby`,`studio-intro-title`,1,`studio-intro`],[1,`intro-copy`],[1,`eyebrow`],[`name`,`palette`,`size`,`16`],[`id`,`studio-intro-title`],[1,`action-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`name`,`sliders-horizontal`,`size`,`18`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`name`,`dices`,`size`,`18`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/tokens`],[`name`,`arrow-up-right`,`size`,`16`],[1,`palette-summary`],[`aria-labelledby`,`color-heading`,1,`showcase-section`],[1,`section-heading`],[`id`,`color-heading`],[1,`color-roles`],[1,`color-role`],[`name`,`arrow-right`,`size`,`16`],[`aria-labelledby`,`layout-heading`,1,`showcase-section`,`split-section`],[1,`section-copy`],[`id`,`layout-heading`],[1,`section-note`],[1,`geometry-sample`,3,`surfaceEffects`],[1,`geometry-content`],[1,`sample-heading`],[`name`,`ruler`,`size`,`22`],[`aria-label`,`Spacing scale: 4, 8 and 12`,1,`spacing-scale`],[1,`space-four`],[1,`space-eight`],[1,`space-twelve`],[`label`,`Sample field`,`value`,`Focus to inspect the outline`,`subscriptSizing`,`dynamic`,3,`readOnly`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`name`,`layers`,`size`,`18`],[1,`geometry-labels`],[`aria-labelledby`,`mode-heading`,1,`showcase-section`,`split-section`],[`id`,`mode-heading`],[1,`mode-example`],[`ariaLabel`,`Preview theme mode`,3,`selectedValueChange`,`selectedValue`],[`label`,`Light`,`icon`,`sun`,`value`,`light`],[`label`,`Dark`,`icon`,`moon`,`value`,`dark`],[1,`foreground-pairs`],[1,`primary-pair`],[1,`accent-pair`],[`aria-labelledby`,`export-heading`,1,`showcase-section`,`export-section`],[`id`,`export-heading`],[`name`,`copy`,`size`,`18`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/studio/new-project`],[`name`,`plus`,`size`,`18`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/installation`],[`title`,`Inspect generated SCSS`,3,`contentTemplate`],[`title`,`Theme Studio guide`,3,`contentTemplate`],[`aria-hidden`,`true`,1,`color-swatch`],[`maxHeight`,`20rem`,3,`files`],[`path`,`projects/playground/src/app/components/shared/theme-studio/README.md`]],template:function(i,r){if(i&1&&($(0,`bx-page-container`,2)(1,`section`,3)(2,`div`,4)(3,`span`,5),Be(4,`bx-icon`,6),Te(5,`Theme Studio`),q(),$(6,`h2`,7),Te(7,`Make Blocks`),Be(8,`br`),Te(9,`your own.`),q(),$(10,`p`),Te(11,`Start with a palette, adjust the shared tokens and see the result across the playground. Export your theme when it is ready.`),q(),$(12,`div`,8)(13,`button`,9),ye(`click`,function(){return r.themeStudioService.open.set(!0)}),Be(14,`bx-icon`,10),Te(15,`Customize theme `),q(),$(16,`button`,11),ye(`click`,function(){return r.themeStudioService.randomize()}),Be(17,`bx-icon`,12),Te(18,`Randomize theme `),q(),$(19,`a`,13),Te(20,`Explore tokens`),Be(21,`bx-icon`,14),q()(),$(22,`p`,15),Te(23,` Current palette `),$(24,`strong`),Te(25),q()()(),Be(26,`app-theme-palette-preview`),q(),Be(27,`bx-divider`),$(28,`section`,16)(29,`div`,17)(30,`div`)(31,`span`,5),Te(32,`01 / Colors`),q(),$(33,`h2`,18),Te(34,`Give colors a role.`),q()(),$(35,`p`),Te(36,`Components read semantic tokens rather than individual palette shades. A surface edit carries through cards, menus and dialogs.`),q()(),$(37,`div`,19),Hn(38,we,8,5,`div`,20,Oe),q(),$(40,`a`,13),Te(41,`Browse the token catalog`),Be(42,`bx-icon`,21),q()(),Be(43,`bx-divider`),$(44,`section`,22)(45,`div`,23)(46,`span`,5),Te(47,`02 / Layout`),q(),$(48,`h2`,24),Te(49,`Set the shape and spacing.`),q(),$(50,`p`),Te(51,` Corner radii, borders, spacing and shadows form a shared scale. Adjust them in the editor’s Layout and Shadows tabs to change the feel of the interface. `),q(),$(52,`p`,25),Te(53,`This sample uses the same tokens as the components around it. Light and dark modes share these measurements.`),q()(),$(54,`bx-card`,26)(55,`div`,27)(56,`div`,28),Be(57,`bx-icon`,29),$(58,`strong`),Te(59,`Shared measurements`),q()(),$(60,`div`,30)(61,`div`),Be(62,`span`,31),$(63,`code`),Te(64,`--bx-space-4`),q()(),$(65,`div`),Be(66,`span`,32),$(67,`code`),Te(68,`--bx-space-8`),q()(),$(69,`div`),Be(70,`span`,33),$(71,`code`),Te(72,`--bx-space-12`),q()()(),Be(73,`bx-input-field`,34),$(74,`button`,35),ye(`click`,function(){return r.showDialog()}),Be(75,`bx-icon`,36),Te(76,`Inspect a themed dialog`),q(),Be(77,`bx-divider`),$(78,`dl`,37)(79,`div`)(80,`dt`),Te(81,`Corner`),q(),$(82,`dd`)(83,`code`),Te(84,`--bx-rounded-lg`),q()()(),$(85,`div`)(86,`dt`),Te(87,`Contour`),q(),$(88,`dd`)(89,`code`),Te(90,`--bx-border-width`),q()()(),$(91,`div`)(92,`dt`),Te(93,`Depth`),q(),$(94,`dd`)(95,`code`),Te(96,`--bx-shadow-md`),q()()()()()()(),Be(97,`bx-divider`),$(98,`section`,38)(99,`div`,23)(100,`span`,5),Te(101,`03 / Preview`),q(),$(102,`h2`,39),Te(103,`Check both sides of your theme.`),q(),$(104,`p`),Te(105,`Light and dark colors can be edited independently. Check the foreground as well as the fill: readable text is part of the theme.`),q(),$(106,`p`,25),Te(107,` The field and dialog above use these same roles. Open the dialog to inspect its material and focus states; it inherits your live theme too. `),q()(),$(108,`div`,40)(109,`bx-tabs`,41),ye(`selectedValueChange`,function(d){return r.setMode(d)}),Be(110,`bx-tab`,42)(111,`bx-tab`,43),q(),$(112,`div`,44)(113,`div`,45)(114,`strong`),Te(115,`Aa`),q(),$(116,`span`),Te(117,`Primary / on-primary`),q()(),$(118,`div`,46)(119,`strong`),Te(120,`Aa`),q(),$(121,`span`),Te(122,`Accent / on-accent`),q()()(),$(123,`p`,25),Te(124,`These are the active fill and foreground pairs. Custom colors still need a contrast check.`),q()()(),Be(125,`bx-divider`),$(126,`section`,47)(127,`div`,17)(128,`div`)(129,`span`,5),Te(130,`04 / Use your theme`),q(),$(131,`h2`,48),Te(132,`From preview to application.`),q()(),$(133,`p`),Te(134,`Export SCSS for your application’s `),$(135,`code`),Te(136,`styles.scss`),q(),Te(137,`. Save Studio JSON from the editor to keep an editable copy you can import later.`),q()(),$(138,`div`,8)(139,`button`,11),ye(`click`,function(){return r.openSetup()}),Be(140,`bx-icon`,49),Te(141,`Copy / setup`),q(),$(142,`a`,50),Be(143,`bx-icon`,51),Te(144,`Start a new project`),q(),$(145,`a`,52),Te(146,`Package setup`),Be(147,`bx-icon`,14),q()(),$(148,`bx-collapsible`,53),kC(149,Ee,1,1,`ng-template`,null,0,Tb),q(),$(151,`bx-collapsible`,54),kC(152,Ne,1,0,`ng-template`,null,1,Tb),q()()()),i&2){let c=oa(150),d=oa(153);E(25),He(r.paletteLabel()),E(13),qn(r.colors),E(16),le(`surfaceEffects`,!1),E(19),le(`readOnly`,!0),E(36),le(`selectedValue`,r.themeStudioService.themingService.activeTheme()),E(39),le(`contentTemplate`,c),E(3),le(`contentTemplate`,d)}},dependencies:[$p,Z,nr,hn,CM,Jc,_M,IM,Qc,hM,_,S,P],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-divider-margin: 0;
}
.studio-intro[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  container-type: inline-size;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  align-items: center;
  gap: var(--%NS%bx-space-8, 2rem);
  padding-block: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-10, 2.5rem);
}
.intro-copy[_ngcontent-%COMP%], 
.section-copy[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-4, 1rem);
}
.intro-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.section-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  max-inline-size: 46ch;
}
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%], 
p[_ngcontent-%COMP%] {
  margin: 0;
}
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
}
h2[_ngcontent-%COMP%] {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.2;
  letter-spacing: -0.025em;
}
p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
.intro-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
}
.eyebrow[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-accent);
  font-size: 0.75rem;
  font-weight: 600;
}
.action-row[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.palette-summary[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
  font-size: 0.875rem;
}
.palette-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-primary);
  font-weight: 500;
}
.showcase-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--%NS%bx-space-6, 1.5rem);
  padding-block: var(--%NS%bx-space-12, 3rem);
}
.showcase-section[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {
  align-self: flex-start;
}
.section-heading[_ngcontent-%COMP%], 
.split-section[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 23rem), 1fr));
  gap: var(--%NS%bx-space-8, 2rem);
  align-items: center;
}
.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-3, 0.75rem);
}
.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  max-inline-size: 52ch;
}
.color-roles[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
  gap: var(--%NS%bx-space-5, 1.25rem);
}
.color-role[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
}
.color-role[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.color-role[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
}
.color-swatch[_ngcontent-%COMP%] {
  display: block;
  block-size: 5rem;
  margin-block-end: var(--%NS%bx-space-2, 0.5rem);
  border: var(--%NS%bx-border-width) var(--%NS%bx-border-style) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
code[_ngcontent-%COMP%] {
  overflow-wrap: anywhere;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.section-note[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
.geometry-sample[_ngcontent-%COMP%] {
  --%NS%bx-card-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-card-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
  --%NS%bx-card-padding: var(--%NS%bx-space-6, 1.5rem);
  margin: var(--%NS%bx-space-2, 0.5rem);
}
.geometry-content[_ngcontent-%COMP%], 
.mode-example[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  gap: var(--%NS%bx-space-5, 1.25rem);
}
.sample-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  color: var(--%NS%bx-text-heading);
}
.sample-heading[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
}
.spacing-scale[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.spacing-scale[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.spacing-scale[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: block;
  flex: none;
  block-size: var(--%NS%bx-space-2, 0.5rem);
  max-inline-size: 60%;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: var(--%NS%bx-accent);
}
.space-four[_ngcontent-%COMP%] {
  inline-size: var(--%NS%bx-space-4, 1rem);
}
.space-eight[_ngcontent-%COMP%] {
  inline-size: var(--%NS%bx-space-8, 2rem);
}
.space-twelve[_ngcontent-%COMP%] {
  inline-size: var(--%NS%bx-space-12, 3rem);
}
.geometry-labels[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin: 0;
  font-size: 0.8125rem;
}
.geometry-labels[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {
  margin: var(--%NS%bx-space-1, 0.25rem) 0 0;
}
.foreground-pairs[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--%NS%bx-space-4, 1rem);
}
.foreground-pairs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  padding: var(--%NS%bx-space-5, 1.25rem);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.foreground-pairs[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 3rem;
  line-height: 1.2;
}
.foreground-pairs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  overflow-wrap: anywhere;
}
.primary-pair[_ngcontent-%COMP%] {
  color: var(--%NS%bx-on-primary);
  background: var(--%NS%bx-primary);
}
.accent-pair[_ngcontent-%COMP%] {
  color: var(--%NS%bx-on-accent);
  background: var(--%NS%bx-accent);
}
.export-section[_ngcontent-%COMP%]   app-code[_ngcontent-%COMP%] {
  display: block;
  padding-inline-end: var(--%NS%bx-space-3, 0.75rem);
}
@container (max-width: 768px) {
  .intro-copy[_ngcontent-%COMP%] {
    position: relative;
    z-index: 1;
    grid-column: 1/-1;
  }
  app-theme-palette-preview[_ngcontent-%COMP%] {
    position: absolute;
    inset-block-start: var(--%NS%bx-space-2, 0.5rem);
    inset-inline-end: 0;
    inline-size: min(46%, 11rem);
    opacity: 0.26;
  }
  @media (forced-colors: active), (prefers-contrast: more) {
    app-theme-palette-preview[_ngcontent-%COMP%] {
      display: none;
    }
  }
}
@media (forced-colors: active) {
  .color-swatch[_ngcontent-%COMP%], 
   .foreground-pairs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
    outline: 1px solid CanvasText;
  }
}`]})};export{fe as ThemeStudioDemo};