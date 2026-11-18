import{t as o}from"./chunk-DfE9UpOf.js";import{S as re,a as S,b as Oe$1,c as ue,o as it,s as nt}from"./main-B5BGPZDX.js";import"./chunk-CaUpi_rr.js";import"./chunk-DErdAUDp.js";import"./chunk-Cb7n2Fk0.js";import{r as Me$1}from"./chunk-DMISDq0g.js";import{L as xe$1}from"./chunk-HfEiycvf.js";import{H as il,J as nl,U as ji,_ as Ls,a as Bn,n as $s,rt as zn}from"./chunk-DyZGtlM9.js";import{$n as YC,C as Br,Ci as ik,Cn as TA,Co as wz,Cr as b,Dn as U,Er as bA,Gn as Wy,K as Fr,Ko as zr,Kr as ed,Li as ka,Lr as db,Oi as jT,On as UC,Or as bo,Ri as ke$1,Ua as sk,Ui as le,Va as sb,Vo as z,Xa as td,Ya as tb,Yr as er,Yt as Od,_o as vr,ao as ub,c as $o,ci as hA,ei as fk,et as Go,fi as he,ia as nb,ja as qs,kr as br,l as $r,mr as aA,o as $e,pa as ob,pt as IT,rr as Yn,u as $s$1,zi as kz,zr as de}from"./chunk-DflWScik.js";var Ce=[`ring`];var Pe=[`surfacePanel`];function Me(r,o){if(r&1&&(bo(0,`div`,5),td(1,`bx-card`,6,1),Go()),r&2){let i=o.$implicit;ka(`--%NS%panel-index`,i),qs(),$o(`bxSurfaceInteractive`,!1)(`surfaceEffects`,!1)}}var M=class r{bxA11yService=b(Br);nativeElement=b(ke$1).nativeElement;destroyRef=b(he);ngZone=b(le);aperture=new zr(0,vr.soft);mounted=z(!1);visible=z(!1);documentVisible=z(!1);ring=kz(`ring`);panelElements=wz(`surfacePanel`,{read:ke$1});panels=[0,1,2,3,4,5];elapsed=0;stopFrame;finePointer;constructor(){er(()=>this.ngZone.runOutsideAngular(()=>this.connect())),$e(()=>{let o=this.bxA11yService.isReducedMotion(),i=this.mounted(),a=i&&this.visible()&&this.documentVisible()&&!o;de(()=>this.ngZone.runOutsideAngular(()=>this.syncMotion(a,i&&o)))}),this.destroyRef.onDestroy(()=>this.stopFrame?.())}setHovered(o,i){o.pointerType===`touch`||!this.finePointer?.matches||this.bxA11yService.isReducedMotion()||!this.stopFrame||(this.aperture.target=i?1:0)}connect(){let o=this.nativeElement.ownerDocument,i=()=>this.documentVisible.set(!o.hidden),a=new IntersectionObserver(([s])=>this.visible.set(s.isIntersecting));this.finePointer=o.defaultView?.matchMedia(`(hover: hover) and (pointer: fine)`),i(),a.observe(this.nativeElement),o.addEventListener(`visibilitychange`,i),this.mounted.set(!0),this.destroyRef.onDestroy(()=>{a.disconnect(),o.removeEventListener(`visibilitychange`,i)})}syncMotion(o,i){if(!o){this.stopFrame?.(),this.stopFrame=void 0,this.aperture.snap(0),i&&(this.elapsed=0,this.paint(!1));return}this.stopFrame||(this.stopFrame=$r(a=>(this.elapsed+=a,this.aperture.step(a),this.paint(!0),!0)))}paint(o){let i=this.ring()?.nativeElement;if(!i)return;let a=Math.max(0,Math.min(1,this.aperture.value)),s=o?this.elapsed*2%360:0;Yn(i,{transform:`rotate(${s.toFixed(3)}deg)`}),this.panelElements().forEach(({nativeElement:d},x)=>{let v=this.elapsed*Math.PI*2/(9+x*.8)+x*Math.PI/3,L=o?Math.sin(v):0,ve=o?Math.cos(v)*.3:0,fe=a*9+L*.65,Se=-14+a*4+L*.25;Yn(d,{transform:`translate(${ve.toFixed(3)}%, ${fe.toFixed(3)}%) rotate(${Se.toFixed(3)}deg)`},!0)})}static ɵfac=function(i){return new(i||r)};static ɵcmp=Fr({type:r,selectors:[[`app-theme-palette-preview`]],viewQuery:function(i,a){i&1&&Wy(a.ring,Ce,5)(a.panelElements,Pe,5,ke$1),i&2&&db(2)},hostAttrs:[`aria-hidden`,`true`],decls:5,vars:0,consts:[[`ring`,``],[`surfacePanel`,``],[1,`palette-stage`,3,`pointerenter`,`pointerleave`,`pointercancel`],[1,`palette-ring`],[1,`panel-position`,3,`--%NS%panel-index`],[1,`panel-position`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`glass-panel`,3,`bxSurfaceInteractive`,`surfaceEffects`]],template:function(i,a){i&1&&(bo(0,`div`,2),br(`pointerenter`,function(d){return a.setHovered(d,!0)})(`pointerleave`,function(d){return a.setHovered(d,!1)})(`pointercancel`,function(d){return a.setHovered(d,!1)}),bo(1,`div`,3,0),nb(3,Me,3,4,`div`,4,IT),Go()()),i&2&&(qs(3),sb(a.panels))},dependencies:[$s,UC],styles:[`
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
}`]})};var Oe=(r,o)=>o.token;var we=(r,o)=>o.background;function Ne(r,o){if(r&1&&(bo(0,`div`,19)(1,`div`,56),td(2,`span`,57),bo(3,`h3`,58),aA(4),Go()(),bo(5,`code`),aA(6),Go(),bo(7,`p`),aA(8),Go()()),r&2){let i=o.$implicit;qs(2),ka(`background-color`,`var(`+i.token+`)`),qs(),ka(`color`,`var(`+i.textColorToken+`)`),qs(),sk(i.label),qs(2),sk(i.token),qs(2),sk(i.description)}}function Ee(r,o){r&1&&aA(0,` Working on the dark side? We'll bring it to light. `)}function Te(r,o){r&1&&aA(0,` On the light side? We'll bring in the dark. `)}function ke(r,o){if(r&1&&(bo(0,`div`,33)(1,`div`,59)(2,`strong`),aA(3,`Aa`),Go(),bo(4,`span`),aA(5),Go(),bo(6,`small`),aA(7),Go()(),bo(8,`div`,60)(9,`span`),aA(10),Go(),bo(11,`strong`),aA(12,`Aa`),Go()()()),r&2){let i=o.$implicit,a=$s$1(),s=hA(35),d=hA(36);qs(),ka(`background-color`,a.themeStudioService.effective(i.background,s))(`color`,a.themeStudioService.effective(i.foreground,s)),qs(4),ik(``,i.label,` / `,i.foregroundLabel),qs(2),ub(``,s===`light`?`Light`:`Dark`,` mode`),qs(),ka(`background-color`,a.themeStudioService.effective(i.background,d))(`color`,a.themeStudioService.effective(i.foreground,d)),qs(2),ub(``,d===`light`?`Light`:`Dark`,` mode`)}}function ze(r,o){if(r&1&&td(0,`app-code`,61),r&2){let i=$s$1();$o(`files`,i.exportFiles())}}function De(r,o){r&1&&td(0,`app-readme`,62)}var xe=class r{modalService=b(Me$1);themeStudioService=b(Oe$1);modes=[`light`,`dark`];colors=o;colorPairs=[{label:`Primary`,foregroundLabel:`on-primary`,background:`--bx-primary`,foreground:`--bx-on-primary`},{label:`Accent`,foregroundLabel:`on-accent`,background:`--bx-accent`,foreground:`--bx-on-accent`}];paletteLabel=U(()=>Od.find(o=>o.id===this.themeStudioService.themingService.palette())?.label??`Custom palette`);exportFiles=U(()=>[{title:`styles.scss`,path:`studio-home-export.scss`,language:`scss`,content:this.themeStudioService.scss()}]);setMode(o){it(this.themeStudioService,o)}openSetup(){nt(this.modalService,this.themeStudioService)}static ɵfac=function(i){return new(i||r)};static ɵcmp=Fr({type:r,selectors:[[`app-theme-studio-demo`]],decls:131,vars:10,consts:[[`exportCode`,``],[`guide`,``],[3,`showBreadcrumbs`,`autoResolveTitlesFromNavigation`],[1,`hero`],[1,`hero-content`],[1,`hero-subtitle`],[1,`hero-actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`primary`,3,`click`],[`name`,`sliders-horizontal`,`size`,`18`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`dices`,`size`,`18`],[1,`studio-content`],[1,`showcase-sections`],[`aria-labelledby`,`color-heading`,1,`showcase-section`,`split-section`],[1,`section-copy`],[1,`eyebrow`],[`id`,`color-heading`],[1,`color-section-container`],[1,`color-roles`],[1,`color-role`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/tokens`],[`name`,`arrow-right`,`size`,`16`],[`aria-labelledby`,`mode-heading`,1,`showcase-section`,`split-section`],[`id`,`mode-heading`],[1,`mode-description`],[1,`mode-description__highlight`],[`name`,`sparkles`,`size`,`16`,`color`,`accent`],[`ariaLabel`,`Preview theme mode`,3,`selectedValueChange`,`selectedValue`],[`label`,`Light`,`icon`,`sun`,`value`,`light`],[`label`,`Dark`,`icon`,`moon`,`value`,`dark`],[`label`,`Auto`,`icon`,`monitor`,`value`,`auto`],[1,`mode-example`],[1,`foreground-pairs`],[1,`color-pair`],[`aria-labelledby`,`layout-heading`,1,`showcase-section`,`split-section`],[`id`,`layout-heading`],[1,`geometry-sample`,3,`surfaceEffects`],[1,`geometry-content`],[1,`sample-heading`],[`name`,`ruler`,`size`,`22`],[`aria-label`,`Spacing scale: 4, 8 and 12`,1,`spacing-scale`],[1,`space-four`],[1,`space-eight`],[1,`space-twelve`],[1,`geometry-labels`],[`aria-labelledby`,`export-heading`,1,`showcase-section`,`export-section`],[`id`,`export-heading`],[1,`action-row`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`name`,`copy`,`size`,`18`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/new-project`],[`name`,`plus`,`size`,`18`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/installation`],[`name`,`arrow-up-right`,`size`,`16`],[`title`,`Inspect generated SCSS`,3,`contentTemplate`],[`title`,`Theme Studio guide`,3,`contentTemplate`],[1,`color-swatch-container`],[`aria-hidden`,`true`,1,`color-swatch`],[1,`color-label`],[1,`color-pair-current`],[1,`color-pair-opposite`],[`maxHeight`,`20rem`,3,`files`],[`path`,`projects/playground/src/app/components/shared/theme-studio/README.md`]],template:function(i,a){if(i&1&&(bo(0,`bx-page-container`,2)(1,`bx-page-content`)(2,`header`,3)(3,`div`,4)(4,`h1`),aA(5,`Theme Studio`),Go(),bo(6,`p`,5),aA(7,`Customize palettes and shared tokens, preview changes, and export your theme.`),Go(),bo(8,`div`,6)(9,`button`,7),br(`click`,function(){return a.themeStudioService.open.set(!0)}),td(10,`bx-icon`,8),aA(11,` Customize theme `),Go(),bo(12,`button`,9),br(`click`,function(){return a.themeStudioService.randomize()}),td(13,`bx-icon`,10),aA(14,` Randomize theme `),Go()()(),td(15,`app-theme-palette-preview`),Go(),bo(16,`div`,11)(17,`div`,12)(18,`section`,13)(19,`div`,14)(20,`span`,15),aA(21,`01 / Color Foundation`),Go(),bo(22,`h2`,16),aA(23,`Build your theme from the colors up.`),Go(),bo(24,`p`),aA(25,` Start with a palette and make it your own. Blocks uses semantic tokens to give each color a role, so changing a single value carries through buttons, cards, menus, and more. `),Go(),td(26,`app-theme-palette-select`),Go(),bo(27,`div`,17)(28,`div`,18),nb(29,Ne,9,7,`div`,19,Oe),Go(),bo(31,`a`,20),aA(32,`Browse the token catalog`),td(33,`bx-icon`,21),Go()()(),bo(34,`section`,22),fk(35)(36),bo(37,`div`,14)(38,`span`,15),aA(39,`02 / Color Harmony`),Go(),bo(40,`h2`,23),aA(41,`Bring your colors together in perfect harmony.`),Go(),bo(42,`p`,24),tb(43,Ee,1,0)(44,Te,1,0),aA(45,` Theme Studio `),bo(46,`span`,25),td(47,`bx-icon`,26),aA(48,` automatically `),Go(),aA(49),Go(),bo(50,`bx-tabs`,27),br(`selectedValueChange`,function(d){return a.setMode(d)}),td(51,`bx-tab`,28)(52,`bx-tab`,29)(53,`bx-tab`,30),Go()(),bo(54,`div`,31)(55,`div`,32),nb(56,ke,13,12,`div`,33,we),Go()()(),bo(58,`section`,34)(59,`div`,14)(60,`span`,15),aA(61,`03 / Shape & Space`),Go(),bo(62,`h2`,35),aA(63,`Give every detail its own character.`),Go(),bo(64,`p`),aA(65,` Colors are only part of the story. Fine-tune corner radii, borders, spacing, and shadows through shared design tokens that keep your components beautifully consistent. From subtle adjustments to bold changes, every detail helps shape the look and feel of your interface. `),Go()(),bo(66,`bx-card`,36)(67,`div`,37)(68,`div`,38),td(69,`bx-icon`,39),bo(70,`strong`),aA(71,`Shared measurements`),Go()(),bo(72,`div`,40)(73,`div`),td(74,`span`,41),bo(75,`code`),aA(76,`--bx-space-4`),Go()(),bo(77,`div`),td(78,`span`,42),bo(79,`code`),aA(80,`--bx-space-8`),Go()(),bo(81,`div`),td(82,`span`,43),bo(83,`code`),aA(84,`--bx-space-12`),Go()()(),bo(85,`dl`,44)(86,`div`)(87,`dt`),aA(88,`Corner`),Go(),bo(89,`dd`)(90,`code`),aA(91,`--bx-rounded-lg`),Go()()(),bo(92,`div`)(93,`dt`),aA(94,`Contour`),Go(),bo(95,`dd`)(96,`code`),aA(97,`--bx-border-width`),Go()()(),bo(98,`div`)(99,`dt`),aA(100,`Depth`),Go(),bo(101,`dd`)(102,`code`),aA(103,`--bx-shadow-md`),Go()()()()()()(),bo(104,`section`,45)(105,`div`,14)(106,`span`,15),aA(107,`03 / Use your theme`),Go(),bo(108,`h2`,46),aA(109,`From preview to application.`),Go(),bo(110,`p`),aA(111,` Export SCSS for your application's `),bo(112,`code`),aA(113,`styles.scss`),Go(),aA(114,`. Save Studio JSON from the editor to keep an editable copy you can import later. `),Go()(),bo(115,`div`,47)(116,`button`,48),br(`click`,function(){return a.openSetup()}),td(117,`bx-icon`,49),aA(118,` Copy / setup `),Go(),bo(119,`a`,50),td(120,`bx-icon`,51),aA(121,` Start a new project `),Go(),bo(122,`a`,52),aA(123,` Package setup `),td(124,`bx-icon`,53),Go()(),bo(125,`bx-collapsible`,54),ed(126,ze,1,1,`ng-template`,null,0,TA),Go(),bo(128,`bx-collapsible`,55),ed(129,De,1,0,`ng-template`,null,1,TA),Go()()()()()()),i&2){let s=jT(127),d=jT(130);$o(`showBreadcrumbs`,!1)(`autoResolveTitlesFromNavigation`,!1),qs(29),sb(a.colors),qs(6);let x=bA(a.themeStudioService.themingService.activeTheme());qs();let v=bA(a.themeStudioService.oppositeMode());qs(7),ob(x===`dark`?43:44),qs(6),ub(` generates the `,v,` counterpart, but you're free to fine-tune both independently. `),qs(),$o(`selectedValue`,a.themeStudioService.themingService.applicationTheme()??`auto`),qs(6),sb(a.colorPairs),qs(10),$o(`surfaceEffects`,!1),qs(59),$o(`contentTemplate`,s),qs(3),$o(`contentTemplate`,d)}},dependencies:[ji,xe$1,YC,$s,Bn,nl,il,zn,Ls,re,S,M,ue],styles:[`
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
.showcase-sections[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  min-inline-size: 0;
  margin-block-start: 4rem;
}
@media (max-width: 1024px) {
  .showcase-sections[_ngcontent-%COMP%] {
    gap: 7rem;
  }
}
@media (max-width: 768px) {
  .showcase-sections[_ngcontent-%COMP%] {
    gap: var(--%NS%bx-space-12, 3rem);
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
.showcase-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.showcase-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.showcase-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.showcase-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.showcase-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
}
.showcase-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.2;
  letter-spacing: -0.025em;
}
.showcase-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
.intro-copy[_ngcontent-%COMP%], 
.section-copy[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
}
.split-section[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: var(--%NS%bx-space-12, 3rem);
  inline-size: 100%;
  min-inline-size: 0;
}
.split-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.split-section[_ngcontent-%COMP%]:nth-of-type(even)    > [_ngcontent-%COMP%]:first-child {
  grid-column: 2;
  grid-row: 1;
}
.split-section[_ngcontent-%COMP%]:nth-of-type(even)    > [_ngcontent-%COMP%]:last-child {
  grid-column: 1;
  grid-row: 1;
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
  .split-section[_ngcontent-%COMP%]:nth-of-type(even)    > [_ngcontent-%COMP%]:first-child, 
   .split-section[_ngcontent-%COMP%]:nth-of-type(even)    > [_ngcontent-%COMP%]:last-child {
    grid-column: auto;
    grid-row: auto;
  }
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
code[_ngcontent-%COMP%] {
  overflow-wrap: anywhere;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.section-note[_ngcontent-%COMP%] {
  font-size: 0.875rem;
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
}`]})};export{xe as ThemeStudioDemo};