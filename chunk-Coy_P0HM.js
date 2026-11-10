import{A as re,G as _,j as Oe$1,k as S,q as a,w as rr}from"./main-SAGFAVWF.js";import{r as Ne$1}from"./chunk-CzeB_D_5.js";import"./chunk-BGaRK6pN.js";import{n as Z}from"./chunk-ufdcSnea.js";import{Ar as eS,Ba as yn,Br as g,Bt as P,Ct as Me$1,Di as nn,Ei as ne,Et as Mt,Hn as Z$1,Ht as Pe$1,Ii as on,It as Oe$2,Ka as ze$1,Lt as Og,Ma as wn,Mn as Xp,Na as xe,O as Dr,Oi as no,On as X,P as FM,Pi as od,Pr as ep,Ri as p,Rr as fr,Sn as WC,Tt as Mn,W as H,Wi as ps,X as IM,Ya as zt,Zi as qr,da as te,dr as ca,ea as rd,hi as lf,hr as cp,ii as jM,it as JA,ka as wM,kr as eO,nn as St,o as A,pn as V,si as k$1,t as $,tt as In,u as B,v as C,w as D,x as Ce,xi as me,ya as ue}from"./chunk-BR06ksVJ.js";var Pe=[`ring`];var Me=[`surfacePanel`];function Oe(r,t){if(r&1&&(A(0,`div`,5),Oe$2(1,`bx-card`,6,1),P()),r&2){let n=t.$implicit;Ce(`--%NS%panel-index`,n),k$1(),B(`bxSurfaceInteractive`,!1)(`surfaceEffects`,!1)}}var k=class r{bxA11yService=p(Pe$1);nativeElement=p(H).nativeElement;destroyRef=p(Z$1);ngZone=p(X);aperture=new no(0,Dr.soft);mounted=D(!1);visible=D(!1);documentVisible=D(!1);ring=nn(`ring`);panelElements=cp(`surfacePanel`,{read:H});panels=[0,1,2,3,4,5];elapsed=0;stopFrame;finePointer;constructor(){ze$1(()=>this.ngZone.runOutsideAngular(()=>this.connect())),xe(()=>{let t=this.bxA11yService.isReducedMotion(),n=this.mounted(),a=n&&this.visible()&&this.documentVisible()&&!t;V(()=>this.ngZone.runOutsideAngular(()=>this.syncMotion(a,n&&t)))}),this.destroyRef.onDestroy(()=>this.stopFrame?.())}setHovered(t,n){t.pointerType===`touch`||!this.finePointer?.matches||this.bxA11yService.isReducedMotion()||!this.stopFrame||(this.aperture.target=n?1:0)}connect(){let t=this.nativeElement.ownerDocument,n=()=>this.documentVisible.set(!t.hidden),a=new IntersectionObserver(([s])=>this.visible.set(s.isIntersecting));this.finePointer=t.defaultView?.matchMedia(`(hover: hover) and (pointer: fine)`),n(),a.observe(this.nativeElement),t.addEventListener(`visibilitychange`,n),this.mounted.set(!0),this.destroyRef.onDestroy(()=>{a.disconnect(),t.removeEventListener(`visibilitychange`,n)})}syncMotion(t,n){if(!t){this.stopFrame?.(),this.stopFrame=void 0,this.aperture.snap(0),n&&(this.elapsed=0,this.paint(!1));return}this.stopFrame||(this.stopFrame=fr(a=>(this.elapsed+=a,this.aperture.step(a),this.paint(!0),!0)))}paint(t){let n=this.ring()?.nativeElement;if(!n)return;let a=Math.max(0,Math.min(1,this.aperture.value)),s=t?this.elapsed*2%360:0;ps(n,{transform:`rotate(${s.toFixed(3)}deg)`}),this.panelElements().forEach(({nativeElement:d},_)=>{let C=this.elapsed*Math.PI*2/(9+_*.8)+_*Math.PI/3,P=t?Math.sin(C):0,z=t?Math.cos(C)*.3:0,ye=a*9+P*.65,Se=-14+a*4+P*.25;ps(d,{transform:`translate(${z.toFixed(3)}%, ${ye.toFixed(3)}%) rotate(${Se.toFixed(3)}deg)`},!0)})}static ɵfac=function(n){return new(n||r)};static ɵcmp=$({type:r,selectors:[[`app-theme-palette-preview`]],viewQuery:function(n,a){n&1&&yn(a.ring,Pe,5)(a.panelElements,Me,5,H),n&2&&St(2)},hostAttrs:[`aria-hidden`,`true`],decls:5,vars:0,consts:[[`ring`,``],[`surfacePanel`,``],[1,`palette-stage`,3,`pointerenter`,`pointerleave`,`pointercancel`],[1,`palette-ring`],[1,`panel-position`,3,`--%NS%panel-index`],[1,`panel-position`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`glass-panel`,3,`bxSurfaceInteractive`,`surfaceEffects`]],template:function(n,a){n&1&&(A(0,`div`,2),ue(`pointerenter`,function(d){return a.setHovered(d,!0)})(`pointerleave`,function(d){return a.setHovered(d,!1)})(`pointercancel`,function(d){return a.setHovered(d,!1)}),A(1,`div`,3,0),Mn(3,Oe,3,4,`div`,4,ca),P()()),n&2&&(k$1(3),In(a.panels))},dependencies:[IM,zt],styles:[`
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
}`]})};var ve=[{label:`Primary`,token:`--bx-primary`,textColorToken:`--bx-on-primary`,description:`Main actions and brand emphasis.`},{label:`Accent`,token:`--bx-accent`,textColorToken:`--bx-on-accent`,description:`Highlights and secondary emphasis.`},{label:`Surface`,token:`--bx-bg-surface`,textColorToken:`--bx-text-primary`,description:`Cards, panels and overlay backgrounds.`}];var we=(r,t)=>t.token;var Ne=(r,t)=>t.background;function Ee(r,t){if(r&1&&Oe$2(0,`span`),r&2){let n=t.$implicit;Ce(`background-color`,n)}}function Te(r,t){if(r&1&&(A(0,`span`,58)(1,`span`,59),Mn(2,Ee,1,2,`span`,60,Og),P(),me(4),P()),r&2){let n=t.$implicit,a=C();k$1(2),In(a.paletteColors(n.value)),k$1(2),Me$1(n.label)}}function ke(r,t){if(r&1&&Oe$2(0,`span`),r&2){let n=t.$implicit;Ce(`background-color`,n)}}function ze(r,t){if(r&1&&(A(0,`span`,58)(1,`span`,59),Mn(2,ke,1,2,`span`,60,Og),P(),me(4),P()),r&2){let n=t.$implicit,a=t.labels,s=C();k$1(2),In(s.paletteColors(n)),k$1(2),Me$1(a.join(`, `))}}function De(r,t){if(r&1&&(A(0,`div`,22)(1,`div`,61),Oe$2(2,`span`,62),A(3,`h3`,63),me(4),P()(),A(5,`code`),me(6),P(),A(7,`p`),me(8),P()()),r&2){let n=t.$implicit;k$1(2),Ce(`background-color`,`var(`+n.token+`)`),k$1(),Ce(`color`,`var(`+n.textColorToken+`)`),k$1(),Me$1(n.label),k$1(2),Me$1(n.token),k$1(2),Me$1(n.description)}}function Le(r,t){r&1&&me(0,` Working on the dark side? We'll bring it to light. `)}function Ie(r,t){r&1&&me(0,` Playing on the light side? We'll bring in the dark! `)}function Re(r,t){if(r&1&&(A(0,`div`,35)(1,`div`,64)(2,`strong`),me(3,`Aa`),P(),A(4,`span`),me(5),P(),A(6,`small`),me(7),P()(),A(8,`div`,65)(9,`span`),me(10),P(),A(11,`strong`),me(12,`Aa`),P()()()),r&2){let n=t.$implicit,a=C(),s=eO(39),d=eO(40);k$1(),Ce(`background-color`,a.themeStudioService.effective(n.background,s))(`color`,a.themeStudioService.effective(n.foreground,s)),k$1(4),WC(``,n.label,` / `,n.foregroundLabel),k$1(2),wn(``,s===`light`?`Light`:`Dark`,` mode`),k$1(),Ce(`background-color`,a.themeStudioService.effective(n.background,d))(`color`,a.themeStudioService.effective(n.foreground,d)),k$1(2),wn(``,d===`light`?`Light`:`Dark`,` mode`)}}function Fe(r,t){if(r&1&&Oe$2(0,`app-code`,66),r&2){let n=C();B(`files`,n.exportFiles())}}function Ae(r,t){r&1&&Oe$2(0,`app-readme`,67)}var fe=class r{modalService=p(Ne$1);themeStudioService=p(Oe$1);palettes=lf.map(t=>({label:t.label,value:t.id}));modes=[`light`,`dark`];colors=ve;colorPairs=[{label:`Primary`,foregroundLabel:`on-primary`,background:`--bx-primary`,foreground:`--bx-on-primary`},{label:`Accent`,foregroundLabel:`on-accent`,background:`--bx-accent`,foreground:`--bx-on-accent`}];paletteLabel=g(()=>lf.find(t=>t.id===this.themeStudioService.themingService.palette())?.label??`Custom palette`);exportFiles=g(()=>[{title:`styles.scss`,path:`studio-home-export.scss`,language:`scss`,content:this.themeStudioService.scss()}]);setMode(t){(t===`light`||t===`dark`)&&this.themeStudioService.themingService.setApplicationTheme(t)}openSetup(){this.themeStudioService.finishEdit(),this.modalService.open(re,{header:a.configure,style:{layout:`center`,breakpoints:{sm:`bottom-sheet`},wrapperStyles:`inline-size: 48rem; max-inline-size: 100%; block-size: min(52rem, 88dvh);`}})}paletteColors(t){return lf.find(n=>n.id===t)?.colors??[]}paletteChanged(t){let n=lf.find(a=>a.id===t);n&&this.themeStudioService.setPalette(n.id)}static ɵfac=function(n){return new(n||r)};static ɵcmp=$({type:r,selectors:[[`app-theme-studio-demo`]],decls:134,vars:15,consts:[[`paletteOption`,``],[`paletteTrigger`,``],[`exportCode`,``],[`guide`,``],[3,`showBreadcrumbs`,`autoResolveTitlesFromNavigation`],[1,`hero`],[1,`hero-content`],[1,`hero-subtitle`],[1,`hero-actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`primary`,3,`click`],[`name`,`sliders-horizontal`,`size`,`18`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`dices`,`size`,`18`],[1,`studio-content`],[1,`studio-sections`],[`aria-labelledby`,`color-heading`,1,`showcase-section`,`split-section`],[1,`section-copy`],[1,`eyebrow`],[`id`,`color-heading`],[`label`,`Theme`,`subscriptSizing`,`dynamic`,3,`valueChange`,`options`,`value`,`clearable`,`optionTemplate`,`triggerTemplate`],[1,`color-section-container`],[1,`color-roles`],[1,`color-role`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/tokens`],[`name`,`arrow-right`,`size`,`16`],[`aria-labelledby`,`mode-heading`,1,`showcase-section`,`split-section`],[`id`,`mode-heading`],[1,`mode-description`],[1,`mode-description__highlight`],[`name`,`sparkles`,`size`,`16`,`color`,`accent`],[`ariaLabel`,`Preview theme mode`,3,`selectedValueChange`,`selectedValue`],[`label`,`Light`,`icon`,`sun`,`value`,`light`],[`label`,`Dark`,`icon`,`moon`,`value`,`dark`],[1,`mode-example`],[1,`foreground-pairs`],[1,`color-pair`],[`aria-labelledby`,`layout-heading`,1,`showcase-section`,`split-section`],[`id`,`layout-heading`],[1,`geometry-sample`,3,`surfaceEffects`],[1,`geometry-content`],[1,`sample-heading`],[`name`,`ruler`,`size`,`22`],[`aria-label`,`Spacing scale: 4, 8 and 12`,1,`spacing-scale`],[1,`space-four`],[1,`space-eight`],[1,`space-twelve`],[1,`geometry-labels`],[`aria-labelledby`,`export-heading`,1,`showcase-section`,`export-section`],[`id`,`export-heading`],[1,`action-row`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`name`,`copy`,`size`,`18`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/studio/new-project`],[`name`,`plus`,`size`,`18`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/installation`],[`name`,`arrow-up-right`,`size`,`16`],[`title`,`Inspect generated SCSS`,3,`contentTemplate`],[`title`,`Theme Studio guide`,3,`contentTemplate`],[1,`palette-choice`],[`aria-hidden`,`true`,1,`palette-swatches`],[3,`background-color`],[1,`color-swatch-container`],[`aria-hidden`,`true`,1,`color-swatch`],[1,`color-label`],[1,`color-pair-current`],[1,`color-pair-opposite`],[`maxHeight`,`20rem`,3,`files`],[`path`,`projects/playground/src/app/components/shared/theme-studio/README.md`]],template:function(n,a){if(n&1&&(A(0,`bx-page-container`,4)(1,`bx-page-content`)(2,`header`,5)(3,`div`,6)(4,`h1`),me(5,`Theme Studio`),P(),A(6,`p`,7),me(7,`Customize palettes and shared tokens, preview changes, and export your theme.`),P(),A(8,`div`,8)(9,`button`,9),ue(`click`,function(){return a.themeStudioService.open.set(!0)}),Oe$2(10,`bx-icon`,10),me(11,` Customize theme `),P(),A(12,`button`,11),ue(`click`,function(){return a.themeStudioService.randomize()}),Oe$2(13,`bx-icon`,12),me(14,` Randomize theme `),P()()(),Oe$2(15,`app-theme-palette-preview`),P(),A(16,`div`,13)(17,`div`,14)(18,`section`,15)(19,`div`,16)(20,`span`,17),me(21,`01 / Color Foundation`),P(),A(22,`h2`,18),me(23,`Build your theme from the colors up.`),P(),A(24,`p`),me(25,` Start with a palette and make it your own. Blocks uses semantic tokens to give each color a role, so changing a single value carries through buttons, cards, menus, and more. `),P(),A(26,`bx-select`,19),ue(`valueChange`,function(d){return a.paletteChanged(d)}),P(),ep(27,Te,5,1,`ng-template`,null,0,qr)(29,ze,5,1,`ng-template`,null,1,qr),P(),A(31,`div`,20)(32,`div`,21),Mn(33,De,9,7,`div`,22,we),P(),A(35,`a`,23),me(36,`Browse the token catalog`),Oe$2(37,`bx-icon`,24),P()()(),A(38,`section`,25),eS(39)(40),A(41,`div`,16)(42,`span`,17),me(43,`02 / Color Harmony`),P(),A(44,`h2`,26),me(45,`Bring your colors together in perfect harmony.`),P(),A(46,`p`,27),te(47,Le,1,0)(48,Ie,1,0),me(49,` Theme Studio `),A(50,`span`,28),Oe$2(51,`bx-icon`,29),me(52,` automatically `),P(),me(53),P(),A(54,`bx-tabs`,30),ue(`selectedValueChange`,function(d){return a.setMode(d)}),Oe$2(55,`bx-tab`,31)(56,`bx-tab`,32),P()(),A(57,`div`,33)(58,`div`,34),Mn(59,Re,13,12,`div`,35,Ne),P()()(),A(61,`section`,36)(62,`div`,16)(63,`span`,17),me(64,`03 / Shape & Space`),P(),A(65,`h2`,37),me(66,`Give every detail its own character.`),P(),A(67,`p`),me(68,` Colors are only part of the story. Fine-tune corner radii, borders, spacing, and shadows through shared design tokens that keep your components beautifully consistent. From subtle adjustments to bold changes, every detail helps shape the look and feel of your interface. `),P()(),A(69,`bx-card`,38)(70,`div`,39)(71,`div`,40),Oe$2(72,`bx-icon`,41),A(73,`strong`),me(74,`Shared measurements`),P()(),A(75,`div`,42)(76,`div`),Oe$2(77,`span`,43),A(78,`code`),me(79,`--bx-space-4`),P()(),A(80,`div`),Oe$2(81,`span`,44),A(82,`code`),me(83,`--bx-space-8`),P()(),A(84,`div`),Oe$2(85,`span`,45),A(86,`code`),me(87,`--bx-space-12`),P()()(),A(88,`dl`,46)(89,`div`)(90,`dt`),me(91,`Corner`),P(),A(92,`dd`)(93,`code`),me(94,`--bx-rounded-lg`),P()()(),A(95,`div`)(96,`dt`),me(97,`Contour`),P(),A(98,`dd`)(99,`code`),me(100,`--bx-border-width`),P()()(),A(101,`div`)(102,`dt`),me(103,`Depth`),P(),A(104,`dd`)(105,`code`),me(106,`--bx-shadow-md`),P()()()()()()(),A(107,`section`,47)(108,`div`,16)(109,`span`,17),me(110,`03 / Use your theme`),P(),A(111,`h2`,48),me(112,`From preview to application.`),P(),A(113,`p`),me(114,` Export SCSS for your application's `),A(115,`code`),me(116,`styles.scss`),P(),me(117,`. Save Studio JSON from the editor to keep an editable copy you can import later. `),P()(),A(118,`div`,49)(119,`button`,50),ue(`click`,function(){return a.openSetup()}),Oe$2(120,`bx-icon`,51),me(121,` Copy / setup `),P(),A(122,`a`,52),Oe$2(123,`bx-icon`,53),me(124,` Start a new project `),P(),A(125,`a`,54),me(126,` Package setup `),Oe$2(127,`bx-icon`,55),P()(),A(128,`bx-collapsible`,56),ep(129,Fe,1,1,`ng-template`,null,2,qr),P(),A(131,`bx-collapsible`,57),ep(132,Ae,1,0,`ng-template`,null,3,qr),P()()()()()()),n&2){let s=Mt(28),d=Mt(30),_=Mt(130),C=Mt(133);B(`showBreadcrumbs`,!1)(`autoResolveTitlesFromNavigation`,!1),k$1(26),B(`options`,a.palettes)(`value`,a.themeStudioService.themingService.palette())(`clearable`,!1)(`optionTemplate`,s)(`triggerTemplate`,d),k$1(7),In(a.colors),k$1(6);let P=JA(a.themeStudioService.themingService.activeTheme());k$1();let z=JA(a.themeStudioService.oppositeMode());k$1(7),ne(P===`dark`?47:48),k$1(6),wn(` resolves the `,z,` counterpart, but you're free to fine-tune both independently. `),k$1(),B(`selectedValue`,a.themeStudioService.themingService.activeTheme()),k$1(5),In(a.colorPairs),k$1(10),B(`surfaceEffects`,!1),k$1(59),B(`contentTemplate`,_),k$1(3),B(`contentTemplate`,C)}},dependencies:[Xp,Z,rr,on,IM,od,jM,FM,rd,wM,_,S,k],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-divider-margin: 0;
  display: block;
  min-inline-size: 0;
}
.hero[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  container-type: inline-size;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 23rem), 1fr));
  gap: var(--%NS%bx-space-12, 3rem);
  align-items: center;
  padding-block: var(--%NS%bx-space-12, 3rem);
}
.hero-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-6, 1.5rem);
}
.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  max-inline-size: 12ch;
  margin: 0;
  font-size: clamp(2.5rem, 4.3vw, 4.5rem);
  line-height: 1.08;
}
.hero-subtitle[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 1.125rem;
  max-inline-size: 30ch;
  margin: 0;
  line-height: 1.6;
}
.hero-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-start: var(--%NS%bx-space-2, 0.5rem);
}
.studio-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  min-inline-size: 0;
}
@media (max-width: 1024px) {
  .studio-content[_ngcontent-%COMP%] {
    gap: 3rem;
  }
}
@media (max-width: 768px) {
  .studio-content[_ngcontent-%COMP%] {
    gap: var(--%NS%bx-space-12, 3rem);
  }
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
code[_ngcontent-%COMP%] {
  overflow-wrap: anywhere;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.studio-sections[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  margin-top: 4rem;
}
@media (max-width: 1024px) {
  .studio-sections[_ngcontent-%COMP%] {
    gap: 7rem;
  }
}
.showcase-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--%NS%bx-space-6, 1.5rem);
  min-inline-size: 0;
}
.showcase-section[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {
  align-self: flex-start;
}
.intro-copy[_ngcontent-%COMP%], 
.section-copy[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
}
.section-note[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
.split-section[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: var(--%NS%bx-space-12, 3rem);
  min-inline-size: 0;
}
.split-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
@media (min-width: 1536px) {
  .split-section[_ngcontent-%COMP%] {
    column-gap: 5rem;
  }
}
@media (max-width: 1024px) {
  .split-section[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
.studio-intro[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  container-type: inline-size;
}
.intro-copy[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
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
  margin-bottom: 3rem;
}
.split-section[_ngcontent-%COMP%] {
  width: 100%;
  align-items: center;
}
.split-section[_ngcontent-%COMP%]:nth-of-type(2n)    > [_ngcontent-%COMP%]:first-child {
  grid-column: 2;
  grid-row: 1;
}
.split-section[_ngcontent-%COMP%]:nth-of-type(2n)    > [_ngcontent-%COMP%]:last-child {
  grid-column: 1;
  grid-row: 1;
}
@media (max-width: 1024px) {
  .split-section[_ngcontent-%COMP%]:nth-of-type(2n)    > [_ngcontent-%COMP%]:first-child, 
   .split-section[_ngcontent-%COMP%]:nth-of-type(2n)    > [_ngcontent-%COMP%]:last-child {
    grid-column: auto;
    grid-row: auto;
  }
}
.color-section-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-12, 3rem);
}
@media (max-width: 768px) {
  .color-section-container[_ngcontent-%COMP%] {
    gap: var(--%NS%bx-space-6, 1.5rem);
  }
}
.color-roles[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
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
.color-swatch-container[_ngcontent-%COMP%] {
  position: relative;
  display: block;
  block-size: 5rem;
  margin-block-end: var(--%NS%bx-space-2, 0.5rem);
}
.color-label[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  place-self: center;
}
.color-swatch[_ngcontent-%COMP%] {
  display: block;
  block-size: inherit;
  border: var(--%NS%bx-border-width) var(--%NS%bx-border-style) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.mode-example[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-5, 1.25rem);
  min-inline-size: 0;
}
.mode-description__highlight[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: baseline;
  gap: var(--%NS%bx-space-1, 0.25rem);
  color: var(--%NS%bx-accent);
  font-weight: 600;
  white-space: nowrap;
}
.mode-description__highlight[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  display: inline-flex;
  align-self: center;
}
.foreground-pairs[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--%NS%bx-space-4, 1rem);
}
.color-pair[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
  row-gap: var(--%NS%bx-space-2, 0.5rem);
  min-width: 0;
}
.color-pair-current[_ngcontent-%COMP%], 
.color-pair-opposite[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: var(--%NS%bx-space-5, 1.25rem);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  text-align: center;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.color-pair-current[_ngcontent-%COMP%] {
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.color-pair-current[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1;
}
.color-pair-current[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
.color-pair-current[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  opacity: 0.75;
}
.color-pair-opposite[_ngcontent-%COMP%] {
  min-height: 4rem;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-4, 1rem);
  flex-direction: row;
  justify-content: space-between;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.color-pair-opposite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.75rem;
}
.color-pair-opposite[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  line-height: 1;
}
.geometry-sample[_ngcontent-%COMP%] {
  --%NS%bx-card-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-card-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
  --%NS%bx-card-padding: var(--%NS%bx-space-6, 1.5rem);
  display: block;
  width: 100%;
  min-inline-size: 0;
}
.geometry-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-5, 1.25rem);
  min-inline-size: 0;
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
  min-inline-size: 0;
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
  font-size: 0.8125rem;
}
.geometry-labels[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {
  margin: var(--%NS%bx-space-1, 0.25rem) 0 0;
}
.export-section[_ngcontent-%COMP%]   app-code[_ngcontent-%COMP%] {
  display: block;
  padding-inline-end: var(--%NS%bx-space-3, 0.75rem);
}
.palette-choice[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
}
.palette-swatches[_ngcontent-%COMP%] {
  display: inline-flex;
  flex: none;
}
.palette-swatches[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {
  inline-size: 0.875rem;
  block-size: 0.875rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 50%;
}
.palette-swatches[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {
  margin-inline-start: -0.25rem;
}
@container (max-width: 768px) {
  .hero-content[_ngcontent-%COMP%] {
    position: relative;
    z-index: 1;
    grid-column: 1/-1;
  }
  app-theme-palette-preview[_ngcontent-%COMP%] {
    position: absolute;
    inset-block-start: var(--%NS%bx-space-12, 3rem);
    inset-inline-end: 0;
    inline-size: min(65%, 20rem);
    opacity: 0.35;
    pointer-events: none !important;
  }
}
@media (forced-colors: active), (prefers-contrast: more) {
  @container (max-width: 768px) {
    app-theme-palette-preview[_ngcontent-%COMP%] {
      display: none;
    }
  }
}
@media (forced-colors: active) {
  .foreground-pairs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
    outline: 1px solid CanvasText;
  }
}`]})};export{fe as ThemeStudioDemo};