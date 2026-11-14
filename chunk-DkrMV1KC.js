import{t as te}from"./chunk-DeyFdnqc.js";import{n as ht}from"./chunk-CgMwNfxR.js";import{a as Oe,t as S}from"./main-B4QJR6Z4.js";import{D as me,N as xo,P as yo,i as Ft}from"./chunk-g_MLkDaC.js";import{Ba as te$1,Cr as ae,Dr as b,Eo as yP,Ft as Le,Hn as Vt,Ii as kr,Ir as ce,Na as sT,Oi as jie,Po as zA,Q as G,Qa as un,Ro as zie,Si as j,To as y,U as F,Xn as Wt,Za as ul,Zn as X,Zr as f,aa as oT,br as aB,en as Pa,fr as _,g as B,ga as qA,ii as g,j as D,ji as kT,kn as Tt,l as $t,lo as w,mn as R$1,mr as _e$1,po as wt,sa as ol,sr as Zd,ti as fe$1,ua as pT,va as qi,xo as xe$1,y as Be,yo as xb,zn as Ve}from"./chunk-CpeWzSSw.js";var A=class r{themingService=f(ul);paletteClass=g(()=>[this.themingService.palettes.find(i=>i.id===this.themingService.palette())?.className,this.themingService.highContrast()?`high-contrast`:``].join(` `));mode=b.required();static ɵfac=function(e){return new(e||r)};static ɵcmp=G({type:r,selectors:[[`app-appearance-mode-preview`]],hostAttrs:[`aria-hidden`,`true`,`inert`,``,`data-bx-light-scope`,``],hostVars:3,hostBindings:function(e,a){e&2&&(B(`data-theme`,a.mode()),yP(a.paletteClass()))},inputs:{mode:[1,`mode`]},decls:22,vars:5,consts:[[1,`mini-window`],[1,`mini-toolbar`],[`name`,`layers`,`size`,`16`],[1,`mini-toolbar-dot`],[1,`mini-workspace`],[1,`mini-sidebar`],[1,`mini-nav-active`],[`title`,`Workspace`,3,`headingLevel`,`opaque`],[1,`mini-card-row`],[1,`mini-avatar`],[`name`,`check`,`size`,`16`],[`label`,`Project progress`,3,`value`],[1,`mini-card-footer`],[`text`,`Ready`,`size`,`small`,`color`,`accent`,3,`opaque`,`tooltipOnTruncate`]],template:function(e,a){e&1&&(_(0,`div`,0)(1,`div`,1),xe$1(2,`bx-icon`,2),_(3,`span`),X(4,`Blocks`),D(),xe$1(5,`span`,3),D(),_(6,`div`,4)(7,`div`,5),xe$1(8,`span`,6)(9,`span`)(10,`span`),D(),_(11,`bx-card`,7)(12,`div`,8)(13,`span`,9),xe$1(14,`bx-icon`,10),D(),_(15,`span`),X(16,`Design system`),D()(),xe$1(17,`bx-progress-bar`,11),_(18,`div`,12)(19,`span`),X(20,`12 components`),D(),xe$1(21,`bx-tag`,13),D()()()()),e&2&&(y(11),R$1(`headingLevel`,4)(`opaque`,!0),y(6),R$1(`value`,68),y(4),R$1(`opaque`,!0)(`tooltipOnTruncate`,!1))},dependencies:[pT,Vt,oT,sT],styles:[`
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
}`]})};var q=[{value:`light`,label:`Light`},{value:`dark`,label:`Dark`},{value:`auto`,label:`Auto`}];var se=[{value:`auto`,label:`Automatic`},{value:`baseline`,label:`Baseline`}];var pe=[{value:`auto`,label:`Automatic`},{value:`off`,label:`Off`},{value:`on`,label:`Opt in on this browser`}];var R=(r,i)=>i.value;var ue=(r,i)=>i.id;function be(r,i){r&1&&xe$1(0,`app-appearance-mode-preview`,49)(1,`app-appearance-mode-preview`,50)}function ve(r,i){if(r&1&&xe$1(0,`app-appearance-mode-preview`,45),r&2){let e=w().$implicit;R$1(`mode`,e.value)}}function ye(r,i){if(r&1){let e=wt();_(0,`bx-card`,42),te$1(`activated`,function(){let d=Be(e).$implicit,p=w();return Ve(p.setMode(d.value))}),_(1,`span`,43)(2,`span`,44),j(3,be,2,0)(4,ve,1,1,`app-appearance-mode-preview`,45),D(),_(5,`span`,46)(6,`span`,47),X(7),xe$1(8,`bx-icon`,48),D()()()()}if(r&2){let e=i.$implicit,a=w();R$1(`clickable`,!0)(`selected`,a.selectedMode()===e.value)(`ariaLabel`,e.label),y(2),ae(`is-auto`,e.value===`auto`),y(),F(e.value===`auto`?3:4),y(4),fe$1(e.label),y(),R$1(`name`,a.selectedMode()===e.value?`circle-check`:`circle`)}}function xe(r,i){if(r&1){let e=wt();_(0,`bx-slide-toggle`,51),zA(),te$1(`ngModelChange`,function(d){Be(e);let p=w();return Ve(p.setAutomaticMode(d))}),D()}if(r&2){let e=w();R$1(`ngModel`,e.themingService.applicationTheme()===null),qA()}}function he(r,i){if(r&1){let e=wt();_(0,`bx-radio`,52),zA(),te$1(`ngModelChange`,function(d){Be(e);let p=w();return Ve(p.updateAppearance({quality:d}))}),D()}if(r&2){let e=i.$implicit,a=w();R$1(`label`,e.label)(`value`,e.value)(`ngModel`,a.appearance().quality),qA()}}function Se(r,i){if(r&1){let e=wt();_(0,`bx-radio`,53),zA(),te$1(`ngModelChange`,function(d){Be(e);let p=w();return Ve(p.updateAppearance({glassiness:d}))}),D()}if(r&2){let e=i.$implicit,a=w();R$1(`label`,e.label)(`value`,e.value)(`disabled`,a.appearance().quality===`baseline`)(`ngModel`,a.appearance().glassiness??`auto`),qA()}}function _e(r,i){if(r&1){let e=wt();_(0,`button`,54),te$1(`click`,function(){let d=Be(e).$implicit,p=w();return Ve(p.themingService.setPalette(d.id))}),_(1,`span`,55),xe$1(2,`span`)(3,`span`),D(),X(4),D()}if(r&2){let e=i.$implicit,a=w();R$1(`color`,a.themingService.palette()===e.id?`accent`:`grayscale`),B(`aria-pressed`,a.themingService.palette()===e.id),y(2),_e$1(`background-color`,e.colors[0]),y(),_e$1(`background-color`,e.colors[1]),y(),un(``,e.label,` `)}}function fe(r,i){if(r&1&&(_(0,`div`,56)(1,`div`)(2,`h3`),X(3,`One configuration. Every component.`),D(),_(4,`p`),X(5,`Surfaces follow the existing semantic theme. Use the controls above, or configure the theming service in your application.`),D()(),_(6,`pre`,57),xe$1(7,`code`,58),D()(),xe$1(8,`app-readme`,59)),r&2){let e=w();y(7),R$1(`highlight`,e.codeExample)}}var de=class r{bxA11yService=f(Le);windowDimensionsService=f(ol);themingService=f(ul);themeStudioService=f(Oe);appearance=this.themingService.appearance;reducedMotion=this.bxA11yService.isReducedMotion;compactModes=g(()=>this.windowDimensionsService.dimensions().width<=this.windowDimensionsService.breakpoints.sm);modes=g(()=>this.compactModes()?q.filter(i=>i.value!==`auto`):q);selectedMode=g(()=>this.compactModes()?this.themingService.activeTheme():this.themingService.applicationTheme()??`auto`);translucencyDescription=g(()=>{let i=this.appearance().translucency;return i<.25?`Lighter tint and blur`:i<.75?`Balanced tint and blur`:`Stronger tint and blur`});qualities=se;glassinessModes=pe;codeExample=`const themingService = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
themingService.setAppearance({ translucency: 0.5 });

// Browser policy for explicitly selected glassy controls.
themingService.setAppearance({ glassiness: 'auto' });

// Opaque surfaces are an accessibility preference.
themingService.setAppearance({ reducedTransparency: true });

// Opt in only the controls that benefit from refraction.
<button bx-button variant="icon" glassiness="auto">\u2026</button>
<section bxSurface bxSurfaceGlassiness="auto">\u2026</section>`;constructor(){ce(()=>{this.qualities.some(i=>i.value===this.appearance().quality)||this.themingService.setAppearance({quality:`auto`})})}updateAppearance(i){this.themingService.setAppearance(i)}setMode(i){this.compactModes()&&this.themingService.applicationTheme()===null&&i===this.themingService.activeTheme()||this.themingService.setApplicationTheme(i===`auto`?null:i)}setAutomaticMode(i){this.themingService.setApplicationTheme(i?null:this.themingService.activeTheme())}setMotion(i){this.bxA11yService.setReducedMotion(i)}reset(){this.themingService.resetAppearance()}static ɵfac=function(e){return new(e||r)};static ɵcmp=G({type:r,selectors:[[`app-appearance`]],decls:82,vars:18,consts:[[`translucency`,``],[`documentation`,``],[`pageDescription`,`Configure the shared theme, palette, surfaces, and effects used throughout the playground.`],[`role`,`group`,`aria-label`,`Appearance mode`,1,`mode-picker`],[`highlightColor`,`accent`,1,`mode-choice`,3,`clickable`,`selected`,`ariaLabel`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModel`],[`aria-labelledby`,`surfaces-title`,1,`settings-section`,`surfaces-section`],[1,`section-heading`],[`id`,`surfaces-title`],[`size`,`full`,1,`surface-layout`],[1,`surface-introduction`],[1,`panel-heading`],[`id`,`surface-appearance-title`],[`bx-button`,``,`type`,`button`,`variant`,`text`,`color`,`grayscale`,`aria-label`,`Reset surface appearance`,3,`click`],[1,`surface-demo-column`],[1,`preview-column`],[`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,1,`translucency-controls`,3,`bxTooltip`],[1,`translucency-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Lighter tint`,3,`decorative`],[`id`,`appearance-translucency`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`translucency-tinted-icon`,3,`decorative`],[`id`,`translucency-note`,1,`section-note`],[`title`,`Advanced settings`,1,`advanced-settings`,3,`headingLevel`],[1,`advanced-grid`],[1,`rendering-options`],[1,`quality-picker`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`ngModel`],[1,`section-note`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`disabled`,`ngModel`],[`aria-labelledby`,`theme-title`,1,`settings-section`],[`id`,`theme-title`],[1,`palette-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`aria-controls`,`theme-studio-panel`,3,`click`],[`name`,`plus`,`size`,`18`],[`aria-labelledby`,`accessibility-title`,1,`settings-section`],[`id`,`accessibility-title`],[1,`accessibility-options`],[`label`,`Reduce motion`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`High contrast`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`title`,`Appearance API, performance, and accessibility`,1,`appearance-documentation`,3,`headingLevel`,`contentTemplate`],[`highlightColor`,`accent`,1,`mode-choice`,3,`activated`,`clickable`,`selected`,`ariaLabel`],[1,`mode-content`],[1,`mode-visual`],[3,`mode`],[1,`mode-caption`],[1,`mode-label`],[`size`,`20`,3,`name`],[`mode`,`light`],[`mode`,`dark`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModelChange`,`ngModel`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`ngModel`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`disabled`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`aria-hidden`,`true`,1,`palette-swatches`],[1,`implementation`],[`tabindex`,`0`,`aria-label`,`TypeScript appearance configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`path`,`projects/playground/src/app/components/screens/appearance/README.md`]],template:function(e,a){if(e&1){let d=wt();_(0,`bx-page-container`,2)(1,`div`,3),$t(2,ye,9,8,`bx-card`,4,R),j(4,xe,1,1,`bx-slide-toggle`,5),D(),_(5,`section`,6)(6,`header`,7)(7,`div`)(8,`h2`,8),X(9,`Surfaces`),D()()(),_(10,`bx-container`,9)(11,`div`,10)(12,`div`,11)(13,`h3`,12),X(14,`Surface Appearance`),D(),_(15,`button`,13),te$1(`click`,function(){return a.reset()}),X(16,`Reset`),D()()(),_(17,`div`,14)(18,`div`,15),xe$1(19,`app-appearance-preview`),D(),_(20,`section`,16)(21,`div`,17),xe$1(22,`bx-icon`,18),_(23,`input`,19,0),te$1(`input`,function(){Be(d);let u=Tt(24);return Ve(a.updateAppearance({translucency:+u.value}))}),D(),xe$1(25,`bx-icon`,20),D()(),_(26,`p`,21),X(27),D()()(),_(28,`bx-collapsible`,22)(29,`div`,23)(30,`div`)(31,`fieldset`,24)(32,`legend`),X(33,`Rendering`),D(),_(34,`div`,25),$t(35,he,1,3,`bx-radio`,26,R),D()(),_(37,`p`,27),X(38,`Automatic balances detail and performance. Baseline uses blur and tint and turns glassiness off.`),D()(),_(39,`div`)(40,`fieldset`,24)(41,`legend`),X(42,`Glassiness`),D(),_(43,`div`,25),$t(44,Se,1,4,`bx-radio`,28,R),D()(),_(46,`p`,27),X(47,` Refraction enhances selected controls on supported browsers. Text and icons keep their theme colors. Accessibility preferences take precedence. `),D()()()()(),_(48,`section`,29)(49,`header`,7)(50,`div`)(51,`h2`,30),X(52,`Theme`),D()()(),_(53,`div`,31),$t(54,_e,5,7,`button`,32,ue),_(56,`button`,33),te$1(`click`,function(){return a.themeStudioService.open.set(!0)}),xe$1(57,`bx-icon`,34),X(58,`Create a theme `),D()(),_(59,`p`,27),X(60,`Customize the current palette in Theme Studio, preview your changes here, then export it for your application.`),D()(),_(61,`section`,35)(62,`header`,7)(63,`div`)(64,`h2`,36),X(65,`Accessibility`),D()()(),_(66,`div`,37)(67,`div`)(68,`bx-slide-toggle`,38),zA(),te$1(`ngModelChange`,function(u){return a.setMotion(u)}),D(),_(69,`p`,27),X(70,`Keep transitions and decorative movement to a minimum.`),D()(),_(71,`div`)(72,`bx-slide-toggle`,39),zA(),te$1(`ngModelChange`,function(u){return a.updateAppearance({reducedTransparency:u})}),D(),_(73,`p`,27),X(74,`Use opaque surfaces while preserving your translucency preference.`),D()(),_(75,`div`)(76,`bx-slide-toggle`,40),zA(),te$1(`ngModelChange`,function(u){return a.themingService.setHighContrast(u)}),D(),_(77,`p`,27),X(78,`Strengthen the separation between content and its background.`),D()()()(),xe$1(79,`bx-collapsible`,41),Pa(80,fe,9,1,`ng-template`,null,1,kr),D()}if(e&2){let d=Tt(81);y(2),Wt(a.modes()),y(2),F(a.compactModes()?4:-1),y(16),ae(`is-disabled`,a.appearance().reducedTransparency),R$1(`bxTooltip`,a.appearance().reducedTransparency?`Turn off Reduce transparency to adjust translucency.`:``),B(`tabindex`,a.appearance().reducedTransparency?0:null),y(2),R$1(`decorative`,!1),y(),R$1(`value`,a.appearance().translucency)(`disabled`,a.appearance().reducedTransparency),B(`aria-valuetext`,a.translucencyDescription()),y(2),R$1(`decorative`,!1),y(2),un(` `,a.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust translucency.`:`Slide from a lighter tint to a richer finish. Glassiness always keeps a readable backing.`,` `),y(),R$1(`headingLevel`,3),y(7),Wt(a.qualities),y(9),Wt(a.glassinessModes),y(10),Wt(a.themingService.palettes),y(2),B(`aria-expanded`,a.themeStudioService.open()),y(12),R$1(`ngModel`,a.reducedMotion()),qA(),y(4),R$1(`ngModel`,a.appearance().reducedTransparency),qA(),y(4),R$1(`ngModel`,a.themingService.highContrast()),qA(),y(3),R$1(`headingLevel`,2)(`contentTemplate`,d)}},dependencies:[kT,ht,zie,jie,aB,xo,yo,Ft,me,pT,xb,Vt,Zd,qi,S,te,A],styles:[`
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
.palette-picker[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
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