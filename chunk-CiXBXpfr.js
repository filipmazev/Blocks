import{t as o}from"./chunk-DfE9UpOf.js";import{a as Oe$1,i as ue,n as it,r as nt,t as S,y as _}from"./main-AKVTKJWF.js";import{r as Me$1}from"./chunk-B9KWZ97F.js";import"./chunk-DlJTjSOR.js";import{O as fe}from"./chunk-BHj6x81D.js";import{Aa as om,Cn as Rt,Ct as Kd,Da as oe,E as D,Ft as Lt,Ga as qt,Gi as j,Hn as Tt,Ia as pn,It as M$1,Ka as ri,Mo as yE,Na as pT,Nn as T,No as yT,Nr as _$1,O as DE,Oi as g,Or as Zd,Rn as Ti,Rr as _e,So as wr,Wn as UP,Yt as Nt,Zi as jt,Zn as Va,an as Q,br as Yf,c as Ae,dt as Ir,fa as lt,gr as Y,ho as ve,ia as ko,jo as y,jt as L,kr as Ze,la as le,pr as Xt,pt as J,qn as Un,r as $P,sr as X,st as IT,t as $,to as sf,vo as w,wi as fe$1,xi as f,za as q,zt as MT}from"./chunk-2VndCPnC.js";var Ce=[`ring`];var Pe=[`surfacePanel`];function Me(r,o){if(r&1&&(_$1(0,`div`,5),ve(1,`bx-card`,6,1),D()),r&2){let i=o.$implicit;_e(`--%NS%panel-index`,i),y(),T(`bxSurfaceInteractive`,!1)(`surfaceEffects`,!1)}}var M=class r{bxA11yService=f(Ae);nativeElement=f(Y).nativeElement;destroyRef=f(X);ngZone=f(oe);aperture=new ko(0,Un.soft);mounted=M$1(!1);visible=M$1(!1);documentVisible=M$1(!1);ring=Nt(`ring`);panelElements=sf(`surfacePanel`,{read:Y});panels=[0,1,2,3,4,5];elapsed=0;stopFrame;finePointer;constructor(){Ze(()=>this.ngZone.runOutsideAngular(()=>this.connect())),le(()=>{let o=this.bxA11yService.isReducedMotion(),i=this.mounted(),a=i&&this.visible()&&this.documentVisible()&&!o;q(()=>this.ngZone.runOutsideAngular(()=>this.syncMotion(a,i&&o)))}),this.destroyRef.onDestroy(()=>this.stopFrame?.())}setHovered(o,i){o.pointerType===`touch`||!this.finePointer?.matches||this.bxA11yService.isReducedMotion()||!this.stopFrame||(this.aperture.target=i?1:0)}connect(){let o=this.nativeElement.ownerDocument,i=()=>this.documentVisible.set(!o.hidden),a=new IntersectionObserver(([s])=>this.visible.set(s.isIntersecting));this.finePointer=o.defaultView?.matchMedia(`(hover: hover) and (pointer: fine)`),i(),a.observe(this.nativeElement),o.addEventListener(`visibilitychange`,i),this.mounted.set(!0),this.destroyRef.onDestroy(()=>{a.disconnect(),o.removeEventListener(`visibilitychange`,i)})}syncMotion(o,i){if(!o){this.stopFrame?.(),this.stopFrame=void 0,this.aperture.snap(0),i&&(this.elapsed=0,this.paint(!1));return}this.stopFrame||(this.stopFrame=Ir(a=>(this.elapsed+=a,this.aperture.step(a),this.paint(!0),!0)))}paint(o){let i=this.ring()?.nativeElement;if(!i)return;let a=Math.max(0,Math.min(1,this.aperture.value)),s=o?this.elapsed*2%360:0;ri(i,{transform:`rotate(${s.toFixed(3)}deg)`}),this.panelElements().forEach(({nativeElement:d},x)=>{let v=this.elapsed*Math.PI*2/(9+x*.8)+x*Math.PI/3,L=o?Math.sin(v):0,ve=o?Math.cos(v)*.3:0,fe=a*9+L*.65,Se=-14+a*4+L*.25;ri(d,{transform:`translate(${ve.toFixed(3)}%, ${fe.toFixed(3)}%) rotate(${Se.toFixed(3)}deg)`},!0)})}static ɵfac=function(i){return new(i||r)};static ɵcmp=$({type:r,selectors:[[`app-theme-palette-preview`]],viewQuery:function(i,a){i&1&&Xt(a.ring,Ce,5)(a.panelElements,Pe,5,Y),i&2&&lt(2)},hostAttrs:[`aria-hidden`,`true`],decls:5,vars:0,consts:[[`ring`,``],[`surfacePanel`,``],[1,`palette-stage`,3,`pointerenter`,`pointerleave`,`pointercancel`],[1,`palette-ring`],[1,`panel-position`,3,`--%NS%panel-index`],[1,`panel-position`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`glass-panel`,3,`bxSurfaceInteractive`,`surfaceEffects`]],template:function(i,a){i&1&&(_$1(0,`div`,2),J(`pointerenter`,function(d){return a.setHovered(d,!0)})(`pointerleave`,function(d){return a.setHovered(d,!1)})(`pointercancel`,function(d){return a.setHovered(d,!1)}),_$1(1,`div`,3,0),Lt(3,Me,3,4,`div`,4,Va),D()()),i&2&&(y(3),jt(a.panels))},dependencies:[yT,Rt],styles:[`
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
}`]})};var Oe=(r,o)=>o.token;var we=(r,o)=>o.background;function Ne(r,o){if(r&1&&(_$1(0,`div`,19)(1,`div`,56),ve(2,`span`,57),_$1(3,`h3`,58),Q(4),D()(),_$1(5,`code`),Q(6),D(),_$1(7,`p`),Q(8),D()()),r&2){let i=o.$implicit;y(2),_e(`background-color`,`var(`+i.token+`)`),y(),_e(`color`,`var(`+i.textColorToken+`)`),y(),fe$1(i.label),y(2),fe$1(i.token),y(2),fe$1(i.description)}}function Ee(r,o){r&1&&Q(0,` Working on the dark side? We'll bring it to light. `)}function Te(r,o){r&1&&Q(0,` On the light side? We'll bring in the dark. `)}function ke(r,o){if(r&1&&(_$1(0,`div`,33)(1,`div`,59)(2,`strong`),Q(3,`Aa`),D(),_$1(4,`span`),Q(5),D(),_$1(6,`small`),Q(7),D()(),_$1(8,`div`,60)(9,`span`),Q(10),D(),_$1(11,`strong`),Q(12,`Aa`),D()()()),r&2){let i=o.$implicit,a=w(),s=$P(35),d=$P(36);y(),_e(`background-color`,a.themeStudioService.effective(i.background,s))(`color`,a.themeStudioService.effective(i.foreground,s)),y(4),yE(``,i.label,` / `,i.foregroundLabel),y(2),pn(``,s===`light`?`Light`:`Dark`,` mode`),y(),_e(`background-color`,a.themeStudioService.effective(i.background,d))(`color`,a.themeStudioService.effective(i.foreground,d)),y(2),pn(``,d===`light`?`Light`:`Dark`,` mode`)}}function ze(r,o){if(r&1&&ve(0,`app-code`,61),r&2){let i=w();T(`files`,i.exportFiles())}}function De(r,o){r&1&&ve(0,`app-readme`,62)}var xe=class r{modalService=f(Me$1);themeStudioService=f(Oe$1);modes=[`light`,`dark`];colors=o;colorPairs=[{label:`Primary`,foregroundLabel:`on-primary`,background:`--bx-primary`,foreground:`--bx-on-primary`},{label:`Accent`,foregroundLabel:`on-accent`,background:`--bx-accent`,foreground:`--bx-on-accent`}];paletteLabel=g(()=>om.find(o=>o.id===this.themeStudioService.themingService.palette())?.label??`Custom palette`);exportFiles=g(()=>[{title:`styles.scss`,path:`studio-home-export.scss`,language:`scss`,content:this.themeStudioService.scss()}]);setMode(o){it(this.themeStudioService,o)}openSetup(){nt(this.modalService,this.themeStudioService)}static ɵfac=function(i){return new(i||r)};static ɵcmp=$({type:r,selectors:[[`app-theme-studio-demo`]],decls:131,vars:10,consts:[[`exportCode`,``],[`guide`,``],[3,`showBreadcrumbs`,`autoResolveTitlesFromNavigation`],[1,`hero`],[1,`hero-content`],[1,`hero-subtitle`],[1,`hero-actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`primary`,3,`click`],[`name`,`sliders-horizontal`,`size`,`18`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`dices`,`size`,`18`],[1,`studio-content`],[1,`showcase-sections`],[`aria-labelledby`,`color-heading`,1,`showcase-section`,`split-section`],[1,`section-copy`],[1,`eyebrow`],[`id`,`color-heading`],[1,`color-section-container`],[1,`color-roles`],[1,`color-role`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/tokens`],[`name`,`arrow-right`,`size`,`16`],[`aria-labelledby`,`mode-heading`,1,`showcase-section`,`split-section`],[`id`,`mode-heading`],[1,`mode-description`],[1,`mode-description__highlight`],[`name`,`sparkles`,`size`,`16`,`color`,`accent`],[`ariaLabel`,`Preview theme mode`,3,`selectedValueChange`,`selectedValue`],[`label`,`Light`,`icon`,`sun`,`value`,`light`],[`label`,`Dark`,`icon`,`moon`,`value`,`dark`],[`label`,`Auto`,`icon`,`monitor`,`value`,`auto`],[1,`mode-example`],[1,`foreground-pairs`],[1,`color-pair`],[`aria-labelledby`,`layout-heading`,1,`showcase-section`,`split-section`],[`id`,`layout-heading`],[1,`geometry-sample`,3,`surfaceEffects`],[1,`geometry-content`],[1,`sample-heading`],[`name`,`ruler`,`size`,`22`],[`aria-label`,`Spacing scale: 4, 8 and 12`,1,`spacing-scale`],[1,`space-four`],[1,`space-eight`],[1,`space-twelve`],[1,`geometry-labels`],[`aria-labelledby`,`export-heading`,1,`showcase-section`,`export-section`],[`id`,`export-heading`],[1,`action-row`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`name`,`copy`,`size`,`18`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/new-project`],[`name`,`plus`,`size`,`18`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/installation`],[`name`,`arrow-up-right`,`size`,`16`],[`title`,`Inspect generated SCSS`,3,`contentTemplate`],[`title`,`Theme Studio guide`,3,`contentTemplate`],[1,`color-swatch-container`],[`aria-hidden`,`true`,1,`color-swatch`],[1,`color-label`],[1,`color-pair-current`],[1,`color-pair-opposite`],[`maxHeight`,`20rem`,3,`files`],[`path`,`projects/playground/src/app/components/shared/theme-studio/README.md`]],template:function(i,a){if(i&1&&(_$1(0,`bx-page-container`,2)(1,`bx-page-content`)(2,`header`,3)(3,`div`,4)(4,`h1`),Q(5,`Theme Studio`),D(),_$1(6,`p`,5),Q(7,`Customize palettes and shared tokens, preview changes, and export your theme.`),D(),_$1(8,`div`,6)(9,`button`,7),J(`click`,function(){return a.themeStudioService.open.set(!0)}),ve(10,`bx-icon`,8),Q(11,` Customize theme `),D(),_$1(12,`button`,9),J(`click`,function(){return a.themeStudioService.randomize()}),ve(13,`bx-icon`,10),Q(14,` Randomize theme `),D()()(),ve(15,`app-theme-palette-preview`),D(),_$1(16,`div`,11)(17,`div`,12)(18,`section`,13)(19,`div`,14)(20,`span`,15),Q(21,`01 / Color Foundation`),D(),_$1(22,`h2`,16),Q(23,`Build your theme from the colors up.`),D(),_$1(24,`p`),Q(25,` Start with a palette and make it your own. Blocks uses semantic tokens to give each color a role, so changing a single value carries through buttons, cards, menus, and more. `),D(),ve(26,`app-theme-palette-select`),D(),_$1(27,`div`,17)(28,`div`,18),Lt(29,Ne,9,7,`div`,19,Oe),D(),_$1(31,`a`,20),Q(32,`Browse the token catalog`),ve(33,`bx-icon`,21),D()()(),_$1(34,`section`,22),DE(35)(36),_$1(37,`div`,14)(38,`span`,15),Q(39,`02 / Color Harmony`),D(),_$1(40,`h2`,23),Q(41,`Bring your colors together in perfect harmony.`),D(),_$1(42,`p`,24),L(43,Ee,1,0)(44,Te,1,0),Q(45,` Theme Studio `),_$1(46,`span`,25),ve(47,`bx-icon`,26),Q(48,` automatically `),D(),Q(49),D(),_$1(50,`bx-tabs`,27),J(`selectedValueChange`,function(d){return a.setMode(d)}),ve(51,`bx-tab`,28)(52,`bx-tab`,29)(53,`bx-tab`,30),D()(),_$1(54,`div`,31)(55,`div`,32),Lt(56,ke,13,12,`div`,33,we),D()()(),_$1(58,`section`,34)(59,`div`,14)(60,`span`,15),Q(61,`03 / Shape & Space`),D(),_$1(62,`h2`,35),Q(63,`Give every detail its own character.`),D(),_$1(64,`p`),Q(65,` Colors are only part of the story. Fine-tune corner radii, borders, spacing, and shadows through shared design tokens that keep your components beautifully consistent. From subtle adjustments to bold changes, every detail helps shape the look and feel of your interface. `),D()(),_$1(66,`bx-card`,36)(67,`div`,37)(68,`div`,38),ve(69,`bx-icon`,39),_$1(70,`strong`),Q(71,`Shared measurements`),D()(),_$1(72,`div`,40)(73,`div`),ve(74,`span`,41),_$1(75,`code`),Q(76,`--bx-space-4`),D()(),_$1(77,`div`),ve(78,`span`,42),_$1(79,`code`),Q(80,`--bx-space-8`),D()(),_$1(81,`div`),ve(82,`span`,43),_$1(83,`code`),Q(84,`--bx-space-12`),D()()(),_$1(85,`dl`,44)(86,`div`)(87,`dt`),Q(88,`Corner`),D(),_$1(89,`dd`)(90,`code`),Q(91,`--bx-rounded-lg`),D()()(),_$1(92,`div`)(93,`dt`),Q(94,`Contour`),D(),_$1(95,`dd`)(96,`code`),Q(97,`--bx-border-width`),D()()(),_$1(98,`div`)(99,`dt`),Q(100,`Depth`),D(),_$1(101,`dd`)(102,`code`),Q(103,`--bx-shadow-md`),D()()()()()()(),_$1(104,`section`,45)(105,`div`,14)(106,`span`,15),Q(107,`03 / Use your theme`),D(),_$1(108,`h2`,46),Q(109,`From preview to application.`),D(),_$1(110,`p`),Q(111,` Export SCSS for your application's `),_$1(112,`code`),Q(113,`styles.scss`),D(),Q(114,`. Save Studio JSON from the editor to keep an editable copy you can import later. `),D()(),_$1(115,`div`,47)(116,`button`,48),J(`click`,function(){return a.openSetup()}),ve(117,`bx-icon`,49),Q(118,` Copy / setup `),D(),_$1(119,`a`,50),ve(120,`bx-icon`,51),Q(121,` Start a new project `),D(),_$1(122,`a`,52),Q(123,` Package setup `),ve(124,`bx-icon`,53),D()(),_$1(125,`bx-collapsible`,54),Ti(126,ze,1,1,`ng-template`,null,0,wr),D(),_$1(128,`bx-collapsible`,55),Ti(129,De,1,0,`ng-template`,null,1,wr),D()()()()()()),i&2){let s=Tt(127),d=Tt(130);T(`showBreadcrumbs`,!1)(`autoResolveTitlesFromNavigation`,!1),y(29),jt(a.colors),y(6);let x=UP(a.themeStudioService.themingService.activeTheme());y();let v=UP(a.themeStudioService.oppositeMode());y(7),j(x===`dark`?43:44),y(6),pn(` generates the `,v,` counterpart, but you're free to fine-tune both independently. `),y(),T(`selectedValue`,a.themeStudioService.themingService.applicationTheme()??`auto`),y(6),jt(a.colorPairs),y(10),T(`surfaceEffects`,!1),y(59),T(`contentTemplate`,s),y(3),T(`contentTemplate`,d)}},dependencies:[Yf,fe,qt,yT,Zd,MT,IT,Kd,pT,_,S,M,ue],styles:[`
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