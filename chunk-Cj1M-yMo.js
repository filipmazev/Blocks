import{A as S,F as Oe$1,P as re,Y as _,Z as a,x as nr}from"./main-72PK7OKX.js";import{r as Ne$1,s as kn}from"./chunk-tgYQWv5a.js";import"./chunk-tOnncOWn.js";import{n as Z}from"./chunk-BrHceUG-.js";import{A as E,Bt as Nn,C as Co,Ca as tf,Cn as Tt,I as F,Ia as ye,Ma as we$1,Nn as Vt,P as Er,Pn as W,Pr as eo,Qi as qC,Sr as cr,Tn as UC,U as GA,Ui as p,Va as z,Vn as X,Wr as gn,Yr as hn,Z as Hn,Zi as q,Zr as ia,_ as CM,a as $p,ct as Jc,dr as b,dt as K,ea as qe,er as _M,et as IM,fa as rp,ga as sn,gi as le,h as Be,jn as Ve,l as Ae,lr as as,na as qn,on as Qc,pr as be,qr as hM,sa as ra,t as $,ui as kC,vt as L,w as D,xn as Tb,zt as Ne$2}from"./chunk-CwZ5dsYL.js";var Ce=[`ring`];var Pe=[`surfacePanel`];function Me(l,a){if(l&1&&(K(0,`div`,5),Ve(1,`bx-card`,6,1),$()),l&2){let i=a.$implicit;we$1(`--%NS%panel-index`,i),D(),le(`bxSurfaceInteractive`,!1)(`surfaceEffects`,!1)}}var P=class l{bxA11yService=p(Ae);nativeElement=p(z).nativeElement;destroyRef=p(W);ngZone=p(X);aperture=new eo(0,Er.soft);mounted=E(!1);visible=E(!1);documentVisible=E(!1);ring=hn(`ring`);panelElements=rp(`surfacePanel`,{read:z});panels=[0,1,2,3,4,5];elapsed=0;stopFrame;finePointer;constructor(){Be(()=>this.ngZone.runOutsideAngular(()=>this.connect())),be(()=>{let a=this.bxA11yService.isReducedMotion(),i=this.mounted(),r=i&&this.visible()&&this.documentVisible()&&!a;F(()=>this.ngZone.runOutsideAngular(()=>this.syncMotion(r,i&&a)))}),this.destroyRef.onDestroy(()=>this.stopFrame?.())}setHovered(a,i){a.pointerType===`touch`||!this.finePointer?.matches||this.bxA11yService.isReducedMotion()||!this.stopFrame||(this.aperture.target=i?1:0)}connect(){let a=this.nativeElement.ownerDocument,i=()=>this.documentVisible.set(!a.hidden),r=new IntersectionObserver(([c])=>this.visible.set(c.isIntersecting));this.finePointer=a.defaultView?.matchMedia(`(hover: hover) and (pointer: fine)`),i(),r.observe(this.nativeElement),a.addEventListener(`visibilitychange`,i),this.mounted.set(!0),this.destroyRef.onDestroy(()=>{r.disconnect(),a.removeEventListener(`visibilitychange`,i)})}syncMotion(a,i){if(!a){this.stopFrame?.(),this.stopFrame=void 0,this.aperture.snap(0),i&&(this.elapsed=0,this.paint(!1));return}this.stopFrame||(this.stopFrame=cr(r=>(this.elapsed+=r,this.aperture.step(r),this.paint(!0),!0)))}paint(a){let i=this.ring()?.nativeElement;if(!i)return;let r=Math.max(0,Math.min(1,this.aperture.value)),c=a?this.elapsed*2%360:0;as(i,{transform:`rotate(${c.toFixed(3)}deg)`}),this.panelElements().forEach(({nativeElement:d},k)=>{let D=this.elapsed*Math.PI*2/(9+k*.8)+k*Math.PI/3,z=a?Math.sin(D):0,Se=a?Math.cos(D)*.3:0,ye=r*9+z*.65,_e=-14+r*4+z*.25;as(d,{transform:`translate(${Se.toFixed(3)}%, ${ye.toFixed(3)}%) rotate(${_e.toFixed(3)}deg)`},!0)})}static ɵfac=function(i){return new(i||l)};static ɵcmp=q({type:l,selectors:[[`app-theme-palette-preview`]],viewQuery:function(i,r){i&1&&Nn(r.ring,Ce,5)(r.panelElements,Pe,5,z),i&2&&Tt(2)},hostAttrs:[`aria-hidden`,`true`],decls:5,vars:0,consts:[[`ring`,``],[`surfacePanel`,``],[1,`palette-stage`,3,`pointerenter`,`pointerleave`,`pointercancel`],[1,`palette-ring`],[1,`panel-position`,3,`--%NS%panel-index`],[1,`panel-position`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`glass-panel`,3,`bxSurfaceInteractive`,`surfaceEffects`]],template:function(i,r){i&1&&(K(0,`div`,2),ye(`pointerenter`,function(d){return r.setHovered(d,!0)})(`pointerleave`,function(d){return r.setHovered(d,!1)})(`pointercancel`,function(d){return r.setHovered(d,!1)}),K(1,`div`,3,0),Hn(3,Me,3,4,`div`,4,ra),$()()),i&2&&(D(3),qn(r.panels))},dependencies:[CM,Vt],styles:[`
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
}`]})};var M=class l extends kn{note=E(`A theme travels with every overlay.`);static ɵfac=(()=>{let a;return function(r){return(a||(a=Co(l)))(r||l)}})();static ɵcmp=q({type:l,selectors:[[`app-theme-studio-preview-dialog`]],hostAttrs:[`role`,`dialog`,`aria-modal`,`true`,`aria-label`,`Preview a themed dialog`],features:[sn],decls:5,vars:1,consts:[[`label`,`Sample field`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(i,r){i&1&&(K(0,`p`),Ne$2(1,`This dialog inherits the active surface, border, radius and colors. Theme changes apply while it stays open.`),$(),K(2,`bx-input-field`,0),UC(`valueChange`,function(d){return GA(r.note,d)||(r.note=d),d}),$(),K(3,`button`,1),ye(`click`,function(){return r.close()}),Ne$2(4,`Done`),$()),i&2&&(D(2),qC(`value`,r.note))},dependencies:[Z,nr],styles:[`
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  gap: var(--%NS%bx-space-4, 1rem);
}`]})};var xe=[{label:`Primary`,token:`--bx-primary`,description:`Main actions and brand emphasis.`},{label:`Accent`,token:`--bx-accent`,description:`Highlights and secondary emphasis.`},{label:`Surface`,token:`--bx-bg-surface`,description:`Cards, panels and overlay backgrounds.`},{label:`Text`,token:`--bx-text-primary`,description:`The default foreground on surfaces.`},{label:`Border`,token:`--bx-border-default`,description:`Contours and content separators.`},{label:`Hover`,token:`--bx-bg-element-hover`,description:`Feedback when a control is pointed at.`}];var Oe=(l,a)=>a.token;function Ee(l,a){if(l&1&&(K(0,`div`,19),Ve(1,`span`,54),K(2,`h3`),Ne$2(3),$(),K(4,`code`),Ne$2(5),$(),K(6,`p`),Ne$2(7),$()()),l&2){let i=a.$implicit;D(),we$1(`background-color`,`var(`+i.token+`)`),D(2),qe(i.label),D(2),qe(i.token),D(2),qe(i.description)}}function we(l,a){if(l&1&&Ve(0,`app-code`,55),l&2){let i=L();le(`files`,i.exportFiles())}}function Ne(l,a){l&1&&Ve(0,`app-readme`,56)}var fe=class l{modalService=p(Ne$1);themeStudioService=p(Oe$1);colors=xe;paletteLabel=b(()=>tf.find(a=>a.id===this.themeStudioService.themingService.palette())?.label??`Custom palette`);exportFiles=b(()=>[{title:`styles.scss`,path:`studio-home-export.scss`,language:`scss`,content:this.themeStudioService.scss()}]);setMode(a){(a===`light`||a===`dark`)&&this.themeStudioService.themingService.setApplicationTheme(a)}showDialog(){this.modalService.open(M,{header:{text:`Theme inheritance`,icon:{name:`layers`}},style:{layout:`center`,breakpoints:{sm:`bottom-sheet`}}})}openSetup(){this.themeStudioService.finishEdit(),this.modalService.open(re,{header:a.configure,style:{layout:`center`,breakpoints:{sm:`bottom-sheet`},wrapperStyles:`inline-size: 48rem; max-inline-size: 100%; block-size: min(52rem, 88dvh);`}})}static ɵfac=function(i){return new(i||l)};static ɵcmp=q({type:l,selectors:[[`app-theme-studio-demo`]],decls:151,vars:6,consts:[[`exportCode`,``],[`guide`,``],[`pageDescription`,`Explore how a Blocks theme connects colors, layout and materials across your application.`],[`aria-labelledby`,`studio-intro-title`,1,`studio-intro`],[1,`intro-copy`],[`id`,`studio-intro-title`],[1,`action-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`name`,`sliders-horizontal`,`size`,`18`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`name`,`dices`,`size`,`18`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/tokens`],[`name`,`arrow-up-right`,`size`,`16`],[1,`palette-summary`],[`aria-labelledby`,`color-heading`,1,`showcase-section`],[1,`section-heading`],[1,`eyebrow`],[`id`,`color-heading`],[1,`color-roles`],[1,`color-role`],[`name`,`arrow-right`,`size`,`16`],[`aria-labelledby`,`layout-heading`,1,`showcase-section`,`split-section`],[1,`section-copy`],[`id`,`layout-heading`],[1,`section-note`],[1,`geometry-sample`,3,`surfaceEffects`],[1,`geometry-content`],[1,`sample-heading`],[`name`,`ruler`,`size`,`22`],[`aria-label`,`Spacing scale: 4, 8 and 12`,1,`spacing-scale`],[1,`space-four`],[1,`space-eight`],[1,`space-twelve`],[`label`,`Sample field`,`value`,`Focus to inspect the outline`,`subscriptSizing`,`dynamic`,3,`readOnly`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`name`,`layers`,`size`,`18`],[1,`geometry-labels`],[`aria-labelledby`,`mode-heading`,1,`showcase-section`,`split-section`],[`id`,`mode-heading`],[1,`mode-example`],[`ariaLabel`,`Preview theme mode`,3,`selectedValueChange`,`selectedValue`],[`label`,`Light`,`icon`,`sun`,`value`,`light`],[`label`,`Dark`,`icon`,`moon`,`value`,`dark`],[1,`foreground-pairs`],[1,`primary-pair`],[1,`accent-pair`],[`aria-labelledby`,`export-heading`,1,`showcase-section`,`export-section`],[`id`,`export-heading`],[`name`,`copy`,`size`,`18`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/studio/new-project`],[`name`,`plus`,`size`,`18`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/installation`],[`title`,`Inspect generated SCSS`,3,`contentTemplate`],[`title`,`Theme Studio guide`,3,`contentTemplate`],[`aria-hidden`,`true`,1,`color-swatch`],[`maxHeight`,`20rem`,3,`files`],[`path`,`projects/playground/src/app/components/shared/theme-studio/README.md`]],template:function(i,r){if(i&1&&(K(0,`bx-page-container`,2)(1,`section`,3)(2,`div`,4)(3,`h2`,5),Ne$2(4,`Make Blocks`),Ve(5,`br`),Ne$2(6,`your own.`),$(),K(7,`p`),Ne$2(8,`Start with a palette, adjust the shared tokens and see the result across the playground. Export your theme when it is ready.`),$(),K(9,`div`,6)(10,`button`,7),ye(`click`,function(){return r.themeStudioService.open.set(!0)}),Ve(11,`bx-icon`,8),Ne$2(12,`Customize theme `),$(),K(13,`button`,9),ye(`click`,function(){return r.themeStudioService.randomize()}),Ve(14,`bx-icon`,10),Ne$2(15,`Randomize theme `),$(),K(16,`a`,11),Ne$2(17,`Explore tokens`),Ve(18,`bx-icon`,12),$()(),K(19,`p`,13),Ne$2(20,` Current palette `),K(21,`strong`),Ne$2(22),$()()(),Ve(23,`app-theme-palette-preview`),$(),Ve(24,`bx-divider`),K(25,`section`,14)(26,`div`,15)(27,`div`)(28,`span`,16),Ne$2(29,`01 / Colors`),$(),K(30,`h2`,17),Ne$2(31,`Give colors a role.`),$()(),K(32,`p`),Ne$2(33,`Components read semantic tokens rather than individual palette shades. A surface edit carries through cards, menus and dialogs.`),$()(),K(34,`div`,18),Hn(35,Ee,8,5,`div`,19,Oe),$(),K(37,`a`,11),Ne$2(38,`Browse the token catalog`),Ve(39,`bx-icon`,20),$()(),Ve(40,`bx-divider`),K(41,`section`,21)(42,`div`,22)(43,`span`,16),Ne$2(44,`02 / Layout`),$(),K(45,`h2`,23),Ne$2(46,`Set the shape and spacing.`),$(),K(47,`p`),Ne$2(48,` Corner radii, borders, spacing and shadows form a shared scale. Adjust them in the editor’s Layout and Shadows tabs to change the feel of the interface. `),$(),K(49,`p`,24),Ne$2(50,`This sample uses the same tokens as the components around it. Light and dark modes share these measurements.`),$()(),K(51,`bx-card`,25)(52,`div`,26)(53,`div`,27),Ve(54,`bx-icon`,28),K(55,`strong`),Ne$2(56,`Shared measurements`),$()(),K(57,`div`,29)(58,`div`),Ve(59,`span`,30),K(60,`code`),Ne$2(61,`--bx-space-4`),$()(),K(62,`div`),Ve(63,`span`,31),K(64,`code`),Ne$2(65,`--bx-space-8`),$()(),K(66,`div`),Ve(67,`span`,32),K(68,`code`),Ne$2(69,`--bx-space-12`),$()()(),Ve(70,`bx-input-field`,33),K(71,`button`,34),ye(`click`,function(){return r.showDialog()}),Ve(72,`bx-icon`,35),Ne$2(73,`Inspect a themed dialog`),$(),Ve(74,`bx-divider`),K(75,`dl`,36)(76,`div`)(77,`dt`),Ne$2(78,`Corner`),$(),K(79,`dd`)(80,`code`),Ne$2(81,`--bx-rounded-lg`),$()()(),K(82,`div`)(83,`dt`),Ne$2(84,`Contour`),$(),K(85,`dd`)(86,`code`),Ne$2(87,`--bx-border-width`),$()()(),K(88,`div`)(89,`dt`),Ne$2(90,`Depth`),$(),K(91,`dd`)(92,`code`),Ne$2(93,`--bx-shadow-md`),$()()()()()()(),Ve(94,`bx-divider`),K(95,`section`,37)(96,`div`,22)(97,`span`,16),Ne$2(98,`03 / Preview`),$(),K(99,`h2`,38),Ne$2(100,`Check both sides of your theme.`),$(),K(101,`p`),Ne$2(102,`Light and dark colors can be edited independently. Check the foreground as well as the fill: readable text is part of the theme.`),$(),K(103,`p`,24),Ne$2(104,` The field and dialog above use these same roles. Open the dialog to inspect its material and focus states; it inherits your live theme too. `),$()(),K(105,`div`,39)(106,`bx-tabs`,40),ye(`selectedValueChange`,function(d){return r.setMode(d)}),Ve(107,`bx-tab`,41)(108,`bx-tab`,42),$(),K(109,`div`,43)(110,`div`,44)(111,`strong`),Ne$2(112,`Aa`),$(),K(113,`span`),Ne$2(114,`Primary / on-primary`),$()(),K(115,`div`,45)(116,`strong`),Ne$2(117,`Aa`),$(),K(118,`span`),Ne$2(119,`Accent / on-accent`),$()()(),K(120,`p`,24),Ne$2(121,`These are the active fill and foreground pairs. Custom colors still need a contrast check.`),$()()(),Ve(122,`bx-divider`),K(123,`section`,46)(124,`div`,15)(125,`div`)(126,`span`,16),Ne$2(127,`04 / Use your theme`),$(),K(128,`h2`,47),Ne$2(129,`From preview to application.`),$()(),K(130,`p`),Ne$2(131,`Export SCSS for your application’s `),K(132,`code`),Ne$2(133,`styles.scss`),$(),Ne$2(134,`. Save Studio JSON from the editor to keep an editable copy you can import later.`),$()(),K(135,`div`,6)(136,`button`,9),ye(`click`,function(){return r.openSetup()}),Ve(137,`bx-icon`,48),Ne$2(138,`Copy / setup`),$(),K(139,`a`,49),Ve(140,`bx-icon`,50),Ne$2(141,`Start a new project`),$(),K(142,`a`,51),Ne$2(143,`Package setup`),Ve(144,`bx-icon`,12),$()(),K(145,`bx-collapsible`,52),kC(146,we,1,1,`ng-template`,null,0,Tb),$(),K(148,`bx-collapsible`,53),kC(149,Ne,1,0,`ng-template`,null,1,Tb),$()()()),i&2){let c=ia(147),d=ia(150);D(22),qe(r.paletteLabel()),D(13),qn(r.colors),D(16),le(`surfaceEffects`,!1),D(19),le(`readOnly`,!0),D(36),le(`selectedValue`,r.themeStudioService.themingService.activeTheme()),D(39),le(`contentTemplate`,c),D(3),le(`contentTemplate`,d)}},dependencies:[$p,Z,nr,gn,CM,Jc,_M,IM,Qc,hM,_,S,P],styles:[`
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