import{N as Oe$1,i as ue,n as it,q as _,r as nt,t as S}from"./main-EL5HAC26.js";import{r as Ne$1}from"./chunk-3vc9iEWX.js";import"./chunk-BH16pVAk.js";import{n as Z}from"./chunk-41uhicSi.js";import{Aa as wM,Ai as nn,An as Xp,Ar as eO,Bi as p,D as Et,En as X,Fr as ep,Hr as g,Ia as xe$1,Ii as od,K as In,Ka as ze$1,Ki as ps,Kt as S$1,L as H,N as G,Nt as P,O as FM,Pa as wn,Ri as on,S as Dr,Ti as me,V as IM,Va as yn,X as JA,Y as It,Ya as zt,_t as Me$1,bi as lf,c as Ae,ci as jM,g as C,ji as no,jr as eS,ki as ne,kt as Oe$2,ln as V,mr as cp,o as A,pa as te,ra as rd,t as $,ta as qr,ur as ca,v as Ce$1,xa as ue$1,y as D,yn as WC,yt as Mn,zn as Z$1,zr as fr}from"./chunk-BWickaUR.js";var Ce=[`ring`];var Pe=[`surfacePanel`];function Me(r,o){if(r&1&&(A(0,`div`,5),Ae(1,`bx-card`,6,1),P()),r&2){let i=o.$implicit;Ce$1(`--%NS%panel-index`,i),C(),V(`bxSurfaceInteractive`,!1)(`surfaceEffects`,!1)}}var M=class r{bxA11yService=p(Oe$2);nativeElement=p($).nativeElement;destroyRef=p(Z$1);ngZone=p(X);aperture=new no(0,Dr.soft);mounted=D(!1);visible=D(!1);documentVisible=D(!1);ring=nn(`ring`);panelElements=cp(`surfacePanel`,{read:$});panels=[0,1,2,3,4,5];elapsed=0;stopFrame;finePointer;constructor(){ze$1(()=>this.ngZone.runOutsideAngular(()=>this.connect())),xe$1(()=>{let o=this.bxA11yService.isReducedMotion(),i=this.mounted(),a=i&&this.visible()&&this.documentVisible()&&!o;H(()=>this.ngZone.runOutsideAngular(()=>this.syncMotion(a,i&&o)))}),this.destroyRef.onDestroy(()=>this.stopFrame?.())}setHovered(o,i){o.pointerType===`touch`||!this.finePointer?.matches||this.bxA11yService.isReducedMotion()||!this.stopFrame||(this.aperture.target=i?1:0)}connect(){let o=this.nativeElement.ownerDocument,i=()=>this.documentVisible.set(!o.hidden),a=new IntersectionObserver(([s])=>this.visible.set(s.isIntersecting));this.finePointer=o.defaultView?.matchMedia(`(hover: hover) and (pointer: fine)`),i(),a.observe(this.nativeElement),o.addEventListener(`visibilitychange`,i),this.mounted.set(!0),this.destroyRef.onDestroy(()=>{a.disconnect(),o.removeEventListener(`visibilitychange`,i)})}syncMotion(o,i){if(!o){this.stopFrame?.(),this.stopFrame=void 0,this.aperture.snap(0),i&&(this.elapsed=0,this.paint(!1));return}this.stopFrame||(this.stopFrame=fr(a=>(this.elapsed+=a,this.aperture.step(a),this.paint(!0),!0)))}paint(o){let i=this.ring()?.nativeElement;if(!i)return;let a=Math.max(0,Math.min(1,this.aperture.value)),s=o?this.elapsed*2%360:0;ps(i,{transform:`rotate(${s.toFixed(3)}deg)`}),this.panelElements().forEach(({nativeElement:d},h)=>{let v=this.elapsed*Math.PI*2/(9+h*.8)+h*Math.PI/3,L=o?Math.sin(v):0,ve=o?Math.cos(v)*.3:0,fe=a*9+L*.65,Se=-14+a*4+L*.25;ps(d,{transform:`translate(${ve.toFixed(3)}%, ${fe.toFixed(3)}%) rotate(${Se.toFixed(3)}deg)`},!0)})}static ɵfac=function(i){return new(i||r)};static ɵcmp=G({type:r,selectors:[[`app-theme-palette-preview`]],viewQuery:function(i,a){i&1&&yn(a.ring,Ce,5)(a.panelElements,Pe,5,$),i&2&&Et(2)},hostAttrs:[`aria-hidden`,`true`],decls:5,vars:0,consts:[[`ring`,``],[`surfacePanel`,``],[1,`palette-stage`,3,`pointerenter`,`pointerleave`,`pointercancel`],[1,`palette-ring`],[1,`panel-position`,3,`--%NS%panel-index`],[1,`panel-position`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`glass-panel`,3,`bxSurfaceInteractive`,`surfaceEffects`]],template:function(i,a){i&1&&(A(0,`div`,2),ue$1(`pointerenter`,function(d){return a.setHovered(d,!0)})(`pointerleave`,function(d){return a.setHovered(d,!1)})(`pointercancel`,function(d){return a.setHovered(d,!1)}),A(1,`div`,3,0),Mn(3,Me,3,4,`div`,4,ca),P()()),i&2&&(C(3),In(a.panels))},dependencies:[IM,zt],styles:[`
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
}`]})};var xe=[{label:`Primary`,token:`--bx-primary`,textColorToken:`--bx-on-primary`,description:`Main actions and brand emphasis.`},{label:`Accent`,token:`--bx-accent`,textColorToken:`--bx-on-accent`,description:`Highlights and secondary emphasis.`},{label:`Surface`,token:`--bx-bg-surface`,textColorToken:`--bx-text-primary`,description:`Cards, panels and overlay backgrounds.`}];var Oe=(r,o)=>o.token;var we=(r,o)=>o.background;function Ne(r,o){if(r&1&&(A(0,`div`,19)(1,`div`,56),Ae(2,`span`,57),A(3,`h3`,58),me(4),P()(),A(5,`code`),me(6),P(),A(7,`p`),me(8),P()()),r&2){let i=o.$implicit;C(2),Ce$1(`background-color`,`var(`+i.token+`)`),C(),Ce$1(`color`,`var(`+i.textColorToken+`)`),C(),Me$1(i.label),C(2),Me$1(i.token),C(2),Me$1(i.description)}}function Ee(r,o){r&1&&me(0,` Working on the dark side? We'll bring it to light. `)}function Te(r,o){r&1&&me(0,` Playing on the light side? We'll bring in the dark! `)}function ke(r,o){if(r&1&&(A(0,`div`,33)(1,`div`,59)(2,`strong`),me(3,`Aa`),P(),A(4,`span`),me(5),P(),A(6,`small`),me(7),P()(),A(8,`div`,60)(9,`span`),me(10),P(),A(11,`strong`),me(12,`Aa`),P()()()),r&2){let i=o.$implicit,a=S$1(),s=eO(35),d=eO(36);C(),Ce$1(`background-color`,a.themeStudioService.effective(i.background,s))(`color`,a.themeStudioService.effective(i.foreground,s)),C(4),WC(``,i.label,` / `,i.foregroundLabel),C(2),wn(``,s===`light`?`Light`:`Dark`,` mode`),C(),Ce$1(`background-color`,a.themeStudioService.effective(i.background,d))(`color`,a.themeStudioService.effective(i.foreground,d)),C(2),wn(``,d===`light`?`Light`:`Dark`,` mode`)}}function ze(r,o){if(r&1&&Ae(0,`app-code`,61),r&2){let i=S$1();V(`files`,i.exportFiles())}}function De(r,o){r&1&&Ae(0,`app-readme`,62)}var he=class r{modalService=p(Ne$1);themeStudioService=p(Oe$1);modes=[`light`,`dark`];colors=xe;colorPairs=[{label:`Primary`,foregroundLabel:`on-primary`,background:`--bx-primary`,foreground:`--bx-on-primary`},{label:`Accent`,foregroundLabel:`on-accent`,background:`--bx-accent`,foreground:`--bx-on-accent`}];paletteLabel=g(()=>lf.find(o=>o.id===this.themeStudioService.themingService.palette())?.label??`Custom palette`);exportFiles=g(()=>[{title:`styles.scss`,path:`studio-home-export.scss`,language:`scss`,content:this.themeStudioService.scss()}]);setMode(o){it(this.themeStudioService,o)}openSetup(){nt(this.modalService,this.themeStudioService)}static ɵfac=function(i){return new(i||r)};static ɵcmp=G({type:r,selectors:[[`app-theme-studio-demo`]],decls:131,vars:10,consts:[[`exportCode`,``],[`guide`,``],[3,`showBreadcrumbs`,`autoResolveTitlesFromNavigation`],[1,`hero`],[1,`hero-content`],[1,`hero-subtitle`],[1,`hero-actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`primary`,3,`click`],[`name`,`sliders-horizontal`,`size`,`18`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`dices`,`size`,`18`],[1,`studio-content`],[1,`studio-sections`],[`aria-labelledby`,`color-heading`,1,`showcase-section`,`split-section`],[1,`section-copy`],[1,`eyebrow`],[`id`,`color-heading`],[1,`color-section-container`],[1,`color-roles`],[1,`color-role`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/tokens`],[`name`,`arrow-right`,`size`,`16`],[`aria-labelledby`,`mode-heading`,1,`showcase-section`,`split-section`],[`id`,`mode-heading`],[1,`mode-description`],[1,`mode-description__highlight`],[`name`,`sparkles`,`size`,`16`,`color`,`accent`],[`ariaLabel`,`Preview theme mode`,3,`selectedValueChange`,`selectedValue`],[`label`,`Light`,`icon`,`sun`,`value`,`light`],[`label`,`Dark`,`icon`,`moon`,`value`,`dark`],[`label`,`Auto`,`icon`,`monitor`,`value`,`auto`],[1,`mode-example`],[1,`foreground-pairs`],[1,`color-pair`],[`aria-labelledby`,`layout-heading`,1,`showcase-section`,`split-section`],[`id`,`layout-heading`],[1,`geometry-sample`,3,`surfaceEffects`],[1,`geometry-content`],[1,`sample-heading`],[`name`,`ruler`,`size`,`22`],[`aria-label`,`Spacing scale: 4, 8 and 12`,1,`spacing-scale`],[1,`space-four`],[1,`space-eight`],[1,`space-twelve`],[1,`geometry-labels`],[`aria-labelledby`,`export-heading`,1,`showcase-section`,`export-section`],[`id`,`export-heading`],[1,`action-row`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`name`,`copy`,`size`,`18`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/studio/new-project`],[`name`,`plus`,`size`,`18`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/installation`],[`name`,`arrow-up-right`,`size`,`16`],[`title`,`Inspect generated SCSS`,3,`contentTemplate`],[`title`,`Theme Studio guide`,3,`contentTemplate`],[1,`color-swatch-container`],[`aria-hidden`,`true`,1,`color-swatch`],[1,`color-label`],[1,`color-pair-current`],[1,`color-pair-opposite`],[`maxHeight`,`20rem`,3,`files`],[`path`,`projects/playground/src/app/components/shared/theme-studio/README.md`]],template:function(i,a){if(i&1&&(A(0,`bx-page-container`,2)(1,`bx-page-content`)(2,`header`,3)(3,`div`,4)(4,`h1`),me(5,`Theme Studio`),P(),A(6,`p`,5),me(7,`Customize palettes and shared tokens, preview changes, and export your theme.`),P(),A(8,`div`,6)(9,`button`,7),ue$1(`click`,function(){return a.themeStudioService.open.set(!0)}),Ae(10,`bx-icon`,8),me(11,` Customize theme `),P(),A(12,`button`,9),ue$1(`click`,function(){return a.themeStudioService.randomize()}),Ae(13,`bx-icon`,10),me(14,` Randomize theme `),P()()(),Ae(15,`app-theme-palette-preview`),P(),A(16,`div`,11)(17,`div`,12)(18,`section`,13)(19,`div`,14)(20,`span`,15),me(21,`01 / Color Foundation`),P(),A(22,`h2`,16),me(23,`Build your theme from the colors up.`),P(),A(24,`p`),me(25,` Start with a palette and make it your own. Blocks uses semantic tokens to give each color a role, so changing a single value carries through buttons, cards, menus, and more. `),P(),Ae(26,`app-theme-palette-select`),P(),A(27,`div`,17)(28,`div`,18),Mn(29,Ne,9,7,`div`,19,Oe),P(),A(31,`a`,20),me(32,`Browse the token catalog`),Ae(33,`bx-icon`,21),P()()(),A(34,`section`,22),eS(35)(36),A(37,`div`,14)(38,`span`,15),me(39,`02 / Color Harmony`),P(),A(40,`h2`,23),me(41,`Bring your colors together in perfect harmony.`),P(),A(42,`p`,24),te(43,Ee,1,0)(44,Te,1,0),me(45,` Theme Studio `),A(46,`span`,25),Ae(47,`bx-icon`,26),me(48,` automatically `),P(),me(49),P(),A(50,`bx-tabs`,27),ue$1(`selectedValueChange`,function(d){return a.setMode(d)}),Ae(51,`bx-tab`,28)(52,`bx-tab`,29)(53,`bx-tab`,30),P()(),A(54,`div`,31)(55,`div`,32),Mn(56,ke,13,12,`div`,33,we),P()()(),A(58,`section`,34)(59,`div`,14)(60,`span`,15),me(61,`03 / Shape & Space`),P(),A(62,`h2`,35),me(63,`Give every detail its own character.`),P(),A(64,`p`),me(65,` Colors are only part of the story. Fine-tune corner radii, borders, spacing, and shadows through shared design tokens that keep your components beautifully consistent. From subtle adjustments to bold changes, every detail helps shape the look and feel of your interface. `),P()(),A(66,`bx-card`,36)(67,`div`,37)(68,`div`,38),Ae(69,`bx-icon`,39),A(70,`strong`),me(71,`Shared measurements`),P()(),A(72,`div`,40)(73,`div`),Ae(74,`span`,41),A(75,`code`),me(76,`--bx-space-4`),P()(),A(77,`div`),Ae(78,`span`,42),A(79,`code`),me(80,`--bx-space-8`),P()(),A(81,`div`),Ae(82,`span`,43),A(83,`code`),me(84,`--bx-space-12`),P()()(),A(85,`dl`,44)(86,`div`)(87,`dt`),me(88,`Corner`),P(),A(89,`dd`)(90,`code`),me(91,`--bx-rounded-lg`),P()()(),A(92,`div`)(93,`dt`),me(94,`Contour`),P(),A(95,`dd`)(96,`code`),me(97,`--bx-border-width`),P()()(),A(98,`div`)(99,`dt`),me(100,`Depth`),P(),A(101,`dd`)(102,`code`),me(103,`--bx-shadow-md`),P()()()()()()(),A(104,`section`,45)(105,`div`,14)(106,`span`,15),me(107,`03 / Use your theme`),P(),A(108,`h2`,46),me(109,`From preview to application.`),P(),A(110,`p`),me(111,` Export SCSS for your application's `),A(112,`code`),me(113,`styles.scss`),P(),me(114,`. Save Studio JSON from the editor to keep an editable copy you can import later. `),P()(),A(115,`div`,47)(116,`button`,48),ue$1(`click`,function(){return a.openSetup()}),Ae(117,`bx-icon`,49),me(118,` Copy / setup `),P(),A(119,`a`,50),Ae(120,`bx-icon`,51),me(121,` Start a new project `),P(),A(122,`a`,52),me(123,` Package setup `),Ae(124,`bx-icon`,53),P()(),A(125,`bx-collapsible`,54),ep(126,ze,1,1,`ng-template`,null,0,qr),P(),A(128,`bx-collapsible`,55),ep(129,De,1,0,`ng-template`,null,1,qr),P()()()()()()),i&2){let s=It(127),d=It(130);V(`showBreadcrumbs`,!1)(`autoResolveTitlesFromNavigation`,!1),C(29),In(a.colors),C(6);let h=JA(a.themeStudioService.themingService.activeTheme());C();let v=JA(a.themeStudioService.oppositeMode());C(7),ne(h===`dark`?43:44),C(6),wn(` resolves the `,v,` counterpart, but you're free to fine-tune both independently. `),C(),V(`selectedValue`,a.themeStudioService.themingService.applicationTheme()??`auto`),C(6),In(a.colorPairs),C(10),V(`surfaceEffects`,!1),C(59),V(`contentTemplate`,s),C(3),V(`contentTemplate`,d)}},dependencies:[Xp,Z,on,IM,od,jM,FM,rd,wM,_,S,M,ue],styles:[`
.hero[_ngcontent-%COMP%] {
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
[_nghost-%COMP%] {
  --%NS%bx-divider-margin: 0;
  display: block;
  min-inline-size: 0;
}
.hero[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  container-type: inline-size;
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
}`]})};export{he as ThemeStudioDemo};