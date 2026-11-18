import{t as le}from"./chunk-DwCw5GGt.js";import{i as re,r as S,v as _e}from"./main-JBIMOPO7.js";import{n as ht}from"./chunk-00B19EKY.js";import"./chunk-BbVUWv06.js";import{C as ni,I as xe$1,o as Qr,r as Gr}from"./chunk-nJHBcAmt.js";import{C as Qi,et as qs,f as Hn,s as Bs,tt as rl,u as Fs,x as Pt}from"./chunk-D2mL-a4s.js";import{$a as sd,Ai as hM,Bi as ik,Ca as ni$1,Co as vo,Fr as ab,J as Fr,Jr as bo,K as FT,Kn as We,Na as pb,Qr as cb,Ro as xo,Sa as nd,T as Br,Ta as od,Vr as b,Wa as rd,X as G,Xn as Wo,Yr as br,_r as ZC,_t as JT,da as mK,fa as mM,ha as mb,na as lA,nn as RA,pa as mN,pi as ee,q as Fd,ri as cl,rr as Xl,so as tr,tt as Go,yo as vK,zr as al}from"./chunk-4Vch4aoV.js";var A=class r{themingService=b(ni$1);paletteClass=G(()=>[this.themingService.palettes.find(i=>i.id===this.themingService.palette())?.className,this.themingService.highContrast()?`high-contrast`:``].join(` `));mode=ee.required();static ɵfac=function(t){return new(t||r)};static ɵcmp=Fr({type:r,selectors:[[`app-appearance-mode-preview`]],hostAttrs:[`aria-hidden`,`true`,`inert`,``,`data-bx-light-scope`,``],hostVars:3,hostBindings:function(t,a){t&2&&(vo(`data-theme`,a.mode()),JT(a.paletteClass()))},inputs:{mode:[1,`mode`]},decls:22,vars:5,consts:[[1,`mini-window`],[1,`mini-toolbar`],[`name`,`layers`,`size`,`16`],[1,`mini-toolbar-dot`],[1,`mini-workspace`],[1,`mini-sidebar`],[1,`mini-nav-active`],[`title`,`Workspace`,3,`headingLevel`,`opaque`],[1,`mini-card-row`],[1,`mini-avatar`],[`name`,`check`,`size`,`16`],[`label`,`Project progress`,3,`value`],[1,`mini-card-footer`],[`text`,`Ready`,`size`,`small`,`color`,`accent`,3,`opaque`,`tooltipOnTruncate`]],template:function(t,a){t&1&&(bo(0,`div`,0)(1,`div`,1),sd(2,`bx-icon`,2),bo(3,`span`),lA(4,`Blocks`),Go(),sd(5,`span`,3),Go(),bo(6,`div`,4)(7,`div`,5),sd(8,`span`,6)(9,`span`)(10,`span`),Go(),bo(11,`bx-card`,7)(12,`div`,8)(13,`span`,9),sd(14,`bx-icon`,10),Go(),bo(15,`span`),lA(16,`Design system`),Go()(),sd(17,`bx-progress-bar`,11),bo(18,`div`,12)(19,`span`),lA(20,`12 components`),Go(),sd(21,`bx-tag`,13),Go()()()()),t&2&&(Xl(11),xo(`headingLevel`,4)(`opaque`,!0),Xl(6),xo(`value`,68),Xl(4),xo(`opaque`,!0)(`tooltipOnTruncate`,!1))},dependencies:[qs,ZC,Bs,Fs],styles:[`
[_nghost-%COMP%] {
  display: block;
  block-size: 10rem;
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background: var(--%NS%bx-bg-neutral);
  color: var(--%NS%bx-text-primary);
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}
[data-theme=light][_nghost-%COMP%] {
  color-scheme: light;
}
.mini-window[_ngcontent-%COMP%] {
  min-inline-size: 15rem;
  font-size: 0.625rem;
  text-align: start;
}
.mini-toolbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  border-block-end: 1px solid var(--%NS%bx-border-default);
  background: var(--%NS%bx-bg-surface);
  font-weight: 600;
}
.mini-toolbar-dot[_ngcontent-%COMP%] {
  margin-inline-start: auto;
  inline-size: 0.375rem;
  block-size: 0.375rem;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-accent);
}
.mini-workspace[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: var(--%NS%bx-space-3, 0.75rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
}
.mini-sidebar[_ngcontent-%COMP%] {
  display: grid;
  align-content: start;
  gap: var(--%NS%bx-space-3, 0.75rem);
  padding-block: var(--%NS%bx-space-2, 0.5rem);
}
.mini-sidebar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  block-size: 0.375rem;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-border-default);
}
.mini-sidebar[_ngcontent-%COMP%]   .mini-nav-active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-primary);
}
bx-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-2, 0.5rem);
  --%NS%bx-card-radius: var(--%NS%bx-rounded-md, 0.5rem);
  --%NS%bx-card-title-size: 0.75rem;
}
.mini-card-row[_ngcontent-%COMP%], 
.mini-card-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
@media (max-width: 640px) {
  [_nghost-%COMP%] {
    block-size: auto;
    min-block-size: 13rem;
    aspect-ratio: 3/4;
  }
  .mini-window[_ngcontent-%COMP%] {
    min-inline-size: 0;
  }
  .mini-toolbar[_ngcontent-%COMP%] {
    gap: var(--%NS%bx-space-1, 0.25rem);
    padding: var(--%NS%bx-space-2, 0.5rem);
  }
  .mini-workspace[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--%NS%bx-space-2, 0.5rem);
    padding: var(--%NS%bx-space-2, 0.5rem);
  }
  .mini-sidebar[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--%NS%bx-space-2, 0.5rem);
    padding-block: 0;
  }
  .mini-card-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: start;
  }
  .mini-card-footer[_ngcontent-%COMP%] {
    flex-wrap: wrap;
  }
}
.mini-card-row[_ngcontent-%COMP%] {
  margin-block-end: var(--%NS%bx-space-2, 0.5rem);
}
.mini-avatar[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  inline-size: 1.25rem;
  block-size: 1.25rem;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-primary);
  color: var(--%NS%bx-on-primary);
}
.mini-card-footer[_ngcontent-%COMP%] {
  justify-content: space-between;
  margin-block-start: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
}`]})};var D=[{value:`light`,label:`Light`},{value:`dark`,label:`Dark`},{value:`auto`,label:`Auto`}];var se=[{value:`auto`,label:`Automatic`},{value:`baseline`,label:`Baseline`}];var pe=[{value:`auto`,label:`Automatic`},{value:`off`,label:`Off`},{value:`on`,label:`Opt in on this browser`}];var I=(r,i)=>i.value;function ue(r,i){r&1&&sd(0,`app-appearance-mode-preview`,49)(1,`app-appearance-mode-preview`,50)}function be(r,i){if(r&1&&sd(0,`app-appearance-mode-preview`,45),r&2){let t=Wo().$implicit;xo(`mode`,t.value)}}function ve(r,i){if(r&1){let t=pb();bo(0,`bx-card`,42),br(`activated`,function(){let d=al(t).$implicit,p=Wo();return cl(p.setMode(d.value))}),bo(1,`span`,43)(2,`span`,44),od(3,ue,2,0)(4,be,1,1,`app-appearance-mode-preview`,45),Go(),bo(5,`span`,46)(6,`span`,47),lA(7),sd(8,`bx-icon`,48),Go()()()()}if(r&2){let t=i.$implicit,a=Wo();xo(`clickable`,!0)(`selected`,a.selectedMode()===t.value)(`ariaLabel`,t.label),Xl(2),tr(`is-auto`,t.value===`auto`),Xl(),nd(t.value===`auto`?3:4),Xl(4),ik(t.label),Xl(),xo(`name`,a.selectedMode()===t.value?`circle-check`:`circle`)}}function ye(r,i){if(r&1){let t=pb();bo(0,`bx-slide-toggle`,51),mM(),br(`ngModelChange`,function(d){al(t);let p=Wo();return cl(p.setAutomaticMode(d))}),Go()}if(r&2){let t=Wo();xo(`ngModel`,t.themingService.applicationTheme()===null),hM()}}function xe(r,i){if(r&1){let t=pb();bo(0,`bx-radio`,52),mM(),br(`ngModelChange`,function(d){al(t);let p=Wo();return cl(p.updateAppearance({quality:d}))}),Go()}if(r&2){let t=i.$implicit,a=Wo();xo(`label`,t.label)(`value`,t.value)(`ngModel`,a.appearance().quality),hM()}}function he(r,i){if(r&1){let t=pb();bo(0,`bx-radio`,53),mM(),br(`ngModelChange`,function(d){al(t);let p=Wo();return cl(p.updateAppearance({glassiness:d}))}),Go()}if(r&2){let t=i.$implicit,a=Wo();xo(`label`,t.label)(`value`,t.value)(`disabled`,a.appearance().quality===`baseline`)(`ngModel`,a.appearance().glassiness??`auto`),hM()}}function Se(r,i){if(r&1&&(bo(0,`div`,54)(1,`div`)(2,`h3`),lA(3,`One configuration. Every component.`),Go(),bo(4,`p`),lA(5,`Surfaces follow the existing semantic theme. Use the controls above, or configure the theming service in your application.`),Go()(),bo(6,`pre`,55),sd(7,`code`,56),Go()(),sd(8,`app-readme`,57)),r&2){let t=Wo();Xl(7),xo(`highlight`,t.codeExample)}}var de=class r{bxA11yService=b(Br);windowDimensionsService=b(Fd);themingService=b(ni$1);themeStudioService=b(_e);appearance=this.themingService.appearance;reducedMotion=this.bxA11yService.isReducedMotion;compactModes=G(()=>this.windowDimensionsService.dimensions().width<=this.windowDimensionsService.breakpoints.sm);modes=G(()=>this.compactModes()?D.filter(i=>i.value!==`auto`):D);selectedMode=G(()=>this.compactModes()?this.themingService.activeTheme():this.themingService.applicationTheme()??`auto`);translucencyDescription=G(()=>{let i=this.appearance().translucency;return i<.25?`Lighter tint and blur`:i<.75?`Balanced tint and blur`:`Stronger tint and blur`});qualities=se;glassinessModes=pe;codeExample=`const themingService = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
themingService.setAppearance({ translucency: 0.5 });

// Browser policy for explicitly selected glassy controls.
themingService.setAppearance({ glassiness: 'auto' });

// Opaque surfaces are an accessibility preference.
themingService.setAppearance({ reducedTransparency: true });

// Opt in only the controls that benefit from refraction.
<button bx-button variant="icon" glassiness="auto">\u2026</button>
<section bxSurface bxSurfaceGlassiness="auto">\u2026</section>`;constructor(){We(()=>{this.qualities.some(i=>i.value===this.appearance().quality)||this.themingService.setAppearance({quality:`auto`})})}updateAppearance(i){this.themingService.setAppearance(i)}setMode(i){this.compactModes()&&this.themingService.applicationTheme()===null&&i===this.themingService.activeTheme()||this.themingService.setApplicationTheme(i===`auto`?null:i)}setAutomaticMode(i){this.themingService.setApplicationTheme(i?null:this.themingService.activeTheme())}setMotion(i){this.bxA11yService.setReducedMotion(i)}reset(){this.themingService.resetAppearance()}static ɵfac=function(t){return new(t||r)};static ɵcmp=Fr({type:r,selectors:[[`app-appearance`]],decls:81,vars:18,consts:[[`translucency`,``],[`documentation`,``],[`pageDescription`,`Configure the shared theme, palette, surfaces, and effects used throughout the playground.`],[`role`,`group`,`aria-label`,`Appearance mode`,1,`mode-picker`],[`highlightColor`,`accent`,1,`mode-choice`,3,`clickable`,`selected`,`ariaLabel`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModel`],[`aria-labelledby`,`surfaces-title`,1,`settings-section`,`surfaces-section`],[1,`section-heading`],[`id`,`surfaces-title`],[`size`,`full`,1,`surface-layout`],[1,`surface-introduction`],[1,`panel-heading`],[`id`,`surface-appearance-title`],[`bx-button`,``,`type`,`button`,`variant`,`text`,`color`,`grayscale`,`aria-label`,`Reset surface appearance`,3,`click`],[1,`surface-demo-column`],[1,`preview-column`],[`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,1,`translucency-controls`,3,`bxTooltip`],[1,`translucency-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Lighter tint`,3,`decorative`],[`id`,`appearance-translucency`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`translucency-tinted-icon`,3,`decorative`],[`id`,`translucency-note`,1,`section-note`],[`title`,`Advanced settings`,1,`advanced-settings`,3,`headingLevel`],[1,`advanced-grid`],[1,`rendering-options`],[1,`quality-picker`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`ngModel`],[1,`section-note`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`disabled`,`ngModel`],[`aria-labelledby`,`theme-title`,1,`settings-section`],[`id`,`theme-title`],[1,`palette-picker`],[`customGroup`,`Custom Themes`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`aria-controls`,`theme-studio-panel`,3,`click`],[`name`,`plus`,`size`,`18`],[`aria-labelledby`,`accessibility-title`,1,`settings-section`],[`id`,`accessibility-title`],[1,`accessibility-options`],[`label`,`Reduce motion`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`High contrast`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`title`,`Appearance API, performance, and accessibility`,1,`appearance-documentation`,3,`headingLevel`,`contentTemplate`],[`highlightColor`,`accent`,1,`mode-choice`,3,`activated`,`clickable`,`selected`,`ariaLabel`],[1,`mode-content`],[1,`mode-visual`],[3,`mode`],[1,`mode-caption`],[1,`mode-label`],[`size`,`20`,3,`name`],[`mode`,`light`],[`mode`,`dark`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModelChange`,`ngModel`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`ngModel`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`disabled`,`ngModel`],[1,`implementation`],[`tabindex`,`0`,`aria-label`,`TypeScript appearance configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`path`,`projects/playground/src/app/components/screens/appearance/README.md`]],template:function(t,a){if(t&1){let d=pb();bo(0,`bx-page-container`,2)(1,`div`,3),ab(2,ve,9,8,`bx-card`,4,I),od(4,ye,1,1,`bx-slide-toggle`,5),Go(),bo(5,`section`,6)(6,`header`,7)(7,`div`)(8,`h2`,8),lA(9,`Surfaces`),Go()()(),bo(10,`bx-container`,9)(11,`div`,10)(12,`div`,11)(13,`h3`,12),lA(14,`Surface Appearance`),Go(),bo(15,`button`,13),br(`click`,function(){return a.reset()}),lA(16,`Reset`),Go()()(),bo(17,`div`,14)(18,`div`,15),sd(19,`app-appearance-preview`),Go(),bo(20,`section`,16)(21,`div`,17),sd(22,`bx-icon`,18),bo(23,`input`,19,0),br(`input`,function(){al(d);let u=FT(24);return cl(a.updateAppearance({translucency:+u.value}))}),Go(),sd(25,`bx-icon`,20),Go()(),bo(26,`p`,21),lA(27),Go()()(),bo(28,`bx-collapsible`,22)(29,`div`,23)(30,`div`)(31,`fieldset`,24)(32,`legend`),lA(33,`Rendering`),Go(),bo(34,`div`,25),ab(35,xe,1,3,`bx-radio`,26,I),Go()(),bo(37,`p`,27),lA(38,`Automatic balances detail and performance. Baseline uses blur and tint and turns glassiness off.`),Go()(),bo(39,`div`)(40,`fieldset`,24)(41,`legend`),lA(42,`Glassiness`),Go(),bo(43,`div`,25),ab(44,he,1,4,`bx-radio`,28,I),Go()(),bo(46,`p`,27),lA(47,` Refraction enhances selected controls on supported browsers. Text and icons keep their theme colors. Accessibility preferences take precedence. `),Go()()()()(),bo(48,`section`,29)(49,`header`,7)(50,`div`)(51,`h2`,30),lA(52,`Theme`),Go()()(),bo(53,`div`,31),sd(54,`app-theme-palette-select`,32),bo(55,`button`,33),br(`click`,function(){return a.themeStudioService.open.set(!0)}),sd(56,`bx-icon`,34),lA(57,`Create a theme `),Go()(),bo(58,`p`,27),lA(59,`Customize the current palette in Theme Studio, preview your changes here, then export it for your application.`),Go()(),bo(60,`section`,35)(61,`header`,7)(62,`div`)(63,`h2`,36),lA(64,`Accessibility`),Go()()(),bo(65,`div`,37)(66,`div`)(67,`bx-slide-toggle`,38),mM(),br(`ngModelChange`,function(u){return a.setMotion(u)}),Go(),bo(68,`p`,27),lA(69,`Keep transitions and decorative movement to a minimum.`),Go()(),bo(70,`div`)(71,`bx-slide-toggle`,39),mM(),br(`ngModelChange`,function(u){return a.updateAppearance({reducedTransparency:u})}),Go(),bo(72,`p`,27),lA(73,`Use opaque surfaces while preserving your translucency preference.`),Go()(),bo(74,`div`)(75,`bx-slide-toggle`,40),mM(),br(`ngModelChange`,function(u){return a.themingService.setHighContrast(u)}),Go(),bo(76,`p`,27),lA(77,`Strengthen the separation between content and its background.`),Go()()()(),sd(78,`bx-collapsible`,41),rd(79,Se,9,1,`ng-template`,null,1,RA),Go()}if(t&2){let d=FT(80);Xl(2),cb(a.modes()),Xl(2),nd(a.compactModes()?4:-1),Xl(16),tr(`is-disabled`,a.appearance().reducedTransparency),xo(`bxTooltip`,a.appearance().reducedTransparency?`Turn off Reduce transparency to adjust translucency.`:``),vo(`tabindex`,a.appearance().reducedTransparency?0:null),Xl(2),xo(`decorative`,!1),Xl(),xo(`value`,a.appearance().translucency)(`disabled`,a.appearance().reducedTransparency),vo(`aria-valuetext`,a.translucencyDescription()),Xl(2),xo(`decorative`,!1),Xl(2),mb(` `,a.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust translucency.`:`Slide from a lighter tint to a richer finish. Glassiness always keeps a readable backing.`,` `),Xl(),xo(`headingLevel`,3),Xl(7),cb(a.qualities),Xl(9),cb(a.glassinessModes),Xl(11),vo(`aria-expanded`,a.themeStudioService.open()),Xl(12),xo(`ngModel`,a.reducedMotion()),hM(),Xl(4),xo(`ngModel`,a.appearance().reducedTransparency),hM(),Xl(4),xo(`ngModel`,a.themingService.highContrast()),hM(),Xl(3),xo(`headingLevel`,2)(`contentTemplate`,d)}},dependencies:[rl,ht,vK,mK,mN,Gr,Qr,ni,xe$1,qs,Qi,ZC,Hn,Pt,S,le,A,re],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.mode-picker[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--%NS%bx-space-4, 1rem);
}
.mode-choice[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-3, 0.75rem);
  --%NS%bx-card-radius: var(--%NS%bx-rounded-xl, 1rem);
  min-inline-size: 0;
}
.mode-content[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--%NS%bx-space-4, 1rem);
  inline-size: 100%;
  min-inline-size: 0;
}
.mode-visual[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  overflow: hidden;
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  pointer-events: none;
}
.mode-visual.is-auto[_ngcontent-%COMP%] {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.mode-visual.is-auto[_ngcontent-%COMP%]   app-appearance-mode-preview[_ngcontent-%COMP%]:first-child {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-inline-end-width: 0;
}
.mode-visual.is-auto[_ngcontent-%COMP%]   app-appearance-mode-preview[_ngcontent-%COMP%]:last-child {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}
.mode-visual[_ngcontent-%COMP%]   app-appearance-mode-preview[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.mode-caption[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: 0 var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-1, 0.25rem);
}
.mode-label[_ngcontent-%COMP%], 
.panel-heading[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.mode-label[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
}
.mode-label[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--%NS%bx-text-secondary);
}
.mode-choice[data-selected=true][_ngcontent-%COMP%]   .mode-label[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  color: var(--%NS%bx-card-highlight, var(--%NS%bx-accent));
}
.mode-description[_ngcontent-%COMP%], 
.section-note[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
}
.settings-section[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-10, 2.5rem);
  padding-block-start: var(--%NS%bx-space-8, 2rem);
  border-block-start: 1px solid var(--%NS%bx-border-default);
}
.section-heading[_ngcontent-%COMP%] {
  align-items: start;
  margin-block-end: var(--%NS%bx-space-5, 1.25rem);
}
.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0 0 var(--%NS%bx-space-2, 0.5rem);
  font-size: 1.5rem;
}
.surface-layout[_ngcontent-%COMP%] {
  --%NS%bx-container-padding: var(--%NS%bx-space-5, 1.25rem);
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 5fr);
  gap: var(--%NS%bx-space-6, 1.5rem);
  align-items: start;
  padding: var(--%NS%bx-space-5, 1.25rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-xl, 1rem);
}
.surface-introduction[_ngcontent-%COMP%], 
.surface-demo-column[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.preview-column[_ngcontent-%COMP%] {
  display: flex;
  min-inline-size: 0;
  block-size: 32rem;
}
.panel-heading[_ngcontent-%COMP%] {
  flex-wrap: wrap;
  margin-block-end: var(--%NS%bx-space-3, 0.75rem);
}
.panel-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.125rem;
}
.translucency-controls[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-3, 0.75rem);
  padding: var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-5, 1.25rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-bg-surface);
}
.translucency-range[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  color: var(--%NS%bx-text-secondary);
}
.translucency-tinted-icon[_ngcontent-%COMP%] {
  background:
    radial-gradient(
      circle,
      currentcolor 48%,
      transparent 52%);
  opacity: 0.8;
}
input[type=range][_ngcontent-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
  margin: 0;
  min-block-size: 1.5rem;
  cursor: pointer;
}
.translucency-controls.is-disabled[_ngcontent-%COMP%], 
input[type=range][_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
}
input[type=range][_ngcontent-%COMP%]:disabled {
  pointer-events: none;
}
.advanced-settings[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-5, 1.25rem);
}
.advanced-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--%NS%bx-space-6, 1.5rem);
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0 0 var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
}
legend[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  margin-block-end: var(--%NS%bx-space-3, 0.75rem);
}
.quality-picker[_ngcontent-%COMP%], 
.accessibility-options[_ngcontent-%COMP%] {
  --%NS%bx-field-padding-bottom: 0;
  display: grid;
  gap: var(--%NS%bx-space-3, 0.75rem);
  font-size: 0.875rem;
}
.palette-picker[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--%NS%bx-space-2, 0.5rem);
  margin-bottom: var(--%NS%bx-space-2, 0.5rem);
  flex-wrap: wrap;
}
.palette-picker[_ngcontent-%COMP%]    > app-theme-palette-select[_ngcontent-%COMP%] {
  flex: 1 1 18rem;
  max-inline-size: 28rem;
}
.palette-picker[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  align-self: stretch;
  padding-inline: var(--%NS%bx-space-3, 0.75rem);
}
.palette-choice[_ngcontent-%COMP%] {
  justify-content: start;
  gap: var(--%NS%bx-space-3, 0.75rem);
  max-inline-size: 100%;
  min-inline-size: 0;
  padding: var(--%NS%bx-space-4, 1rem);
  text-align: start;
  white-space: normal;
}
.palette-choice[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
  margin-inline-start: auto;
}
.palette-swatches[_ngcontent-%COMP%] {
  display: inline-flex;
  flex: none;
  align-items: center;
}
.palette-swatches[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {
  width: 0.875rem;
  height: 0.875rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 50%;
}
.palette-swatches[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {
  margin-inline-start: -0.25rem;
}
.accessibility-options[_ngcontent-%COMP%] {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--%NS%bx-space-5, 1.25rem);
}
.accessibility-options[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  min-inline-size: 0;
  padding: var(--%NS%bx-space-4, 1rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.accessibility-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-3, 0.75rem);
}
.appearance-documentation[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-10, 2.5rem) var(--%NS%bx-space-6, 1.5rem);
}
.implementation[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: var(--%NS%bx-space-5, 1.25rem);
  margin-block-end: var(--%NS%bx-space-6, 1.5rem);
}
.implementation[_ngcontent-%COMP%]   .playground-code-block[_ngcontent-%COMP%] {
  margin: 0;
}
@media (max-width: 1536px) {
  .surface-layout[_ngcontent-%COMP%], 
   .implementation[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .preview-column[_ngcontent-%COMP%] {
    block-size: 30rem;
  }
}
@media (max-width: 640px) {
  .advanced-grid[_ngcontent-%COMP%], 
   .accessibility-options[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .mode-picker[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--%NS%bx-space-3, 0.75rem);
  }
  .mode-auto[_ngcontent-%COMP%] {
    --%NS%bx-toggle-inline-size: 100%;
    --%NS%bx-toggle-justify-content: space-between;
    grid-column: 1/-1;
    margin-block-start: var(--%NS%bx-space-2, 0.5rem);
  }
  .mode-description[_ngcontent-%COMP%] {
    font-size: 0.8125rem;
  }
  .settings-section[_ngcontent-%COMP%] {
    margin-block-start: calc(var(--%NS%bx-space-6, 1.5rem) + var(--%NS%bx-space-1, 0.25rem));
    padding-block-start: var(--%NS%bx-space-6, 1.5rem);
  }
  .surface-layout[_ngcontent-%COMP%] {
    --%NS%bx-container-padding: var(--%NS%bx-space-4, 1rem);
    padding: var(--%NS%bx-space-4, 1rem);
  }
  .translucency-controls[_ngcontent-%COMP%] {
    padding-inline: var(--%NS%bx-space-4, 1rem);
  }
}`]})};export{de as Appearance};