import{C as Cp,Cn as l5,S as Co,St as W,Tr as yx,U as Kt,W as LT,Y as Mr,Z as Nc,_ as Bt,an as fi,bn as jt,cr as ur,dr as vo,gn as it,gr as wp,jn as nd,k as Dr,ln as gt,pn as i5,s as $v,u as Ae,vt as Uv,w as Cx,wn as lN,xn as kT,z as It,zn as p}from"./chunk-Cx6yy8Y4.js";import{c as K,l as Z,s as J,t as S}from"./main-5YIHW4HX.js";import{t as A}from"./chunk-CJ-pL4VN.js";var I=(s,i)=>i.id;var $=(s,i)=>i.value;function G(s,i){if(s&1){let r=kT();It(0,`button`,24),it(`click`,function(){let u=Uv(r).$implicit,c=ur();return $v(c.theme.setPalette(u.id))}),Co(1),Bt()}if(s&2){let r=i.$implicit,t=ur();vo(`color`,t.theme.palette()===r.id?`primary`:`grayscale`),Kt(`aria-pressed`,t.theme.palette()===r.id),jt(),Nc(r.label)}}function H(s,i){if(s&1){let r=kT();It(0,`bx-radio`,45),yx(),it(`ngModelChange`,function(u){Uv(r);let c=ur();return $v(c.updateAppearance({quality:u}))}),Bt()}if(s&2){let r=i.$implicit,t=ur();vo(`label`,r.label)(`value`,r.value)(`ngModel`,t.appearance().quality),Cx()}}var F=class s{a11y=p(Ae);theme=p(Dr);appearance=this.theme.appearance;reducedMotion=this.a11y.isReducedMotion;glassinessDescription=W(()=>{let i=this.appearance().glassiness;return i<.25?`Nearly transparent glass`:i<.75?`Balanced glass`:`Richly tinted glass`});qualities=[{value:`auto`,label:`Automatic`},{value:`baseline`,label:`Baseline`}];codeExample=`const theme = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
theme.setAppearance({ glassiness: 0.5 });

// Opaque surfaces are an accessibility preference.
theme.setAppearance({ reducedTransparency: true });

// Custom surfaces inherit the same appearance.
<article bxSurface>\u2026</article>`;updateAppearance(i){this.theme.setAppearance(i)}setMotion(i){this.a11y.setReducedMotion(i)}reset(){this.theme.resetAppearance(),this.theme.setPalette(`orange`),this.theme.setHighContrast(!1),this.a11y.setReducedMotion(null)}static ɵfac=function(r){return new(r||s)};static ɵcmp=gt({type:s,selectors:[[`app-appearance`]],decls:82,vars:15,consts:[[`glassiness`,``],[`aria-labelledby`,`appearance-title`,1,`appearance`],[1,`page-heading`],[1,`eyebrow`],[`id`,`appearance-title`],[1,`lab-layout`],[1,`preview-column`],[`aria-label`,`Appearance preview and glassiness controls`,1,`material-preview`],[`role`,`group`,`aria-label`,`Material preview over a mountain photograph`,1,`stage`],[`src`,`assets/images/mountains.webp`,`alt`,``,`aria-hidden`,`true`,`width`,`5868`,`height`,`4016`,`decoding`,`async`,1,`scene-background`],[`bxSurface`,``,1,`preview-surface`],[`name`,`layers`,`size`,`28`],[`aria-labelledby`,`glassiness-title`,1,`glassiness-controls`],[`id`,`glassiness-title`],[`id`,`glassiness-note`,1,`section-note`],[1,`glassiness-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Nearly transparent`,3,`decorative`],[`id`,`appearance-glassiness`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-labelledby`,`glassiness-title`,`aria-describedby`,`glassiness-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`glassiness-tinted-icon`,3,`decorative`],[`bxSurface`,``,`aria-labelledby`,`global-title`,1,`global-controls`],[1,`panel-heading`],[`id`,`global-title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`],[1,`mode-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`name`,`sun`,`size`,`16`],[`name`,`moon`,`size`,`16`],[1,`palette-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[1,`rendering-options`],[1,`quality-picker`],[`name`,`appearance-quality`,3,`label`,`value`,`ngModel`],[1,`section-note`,`rendering-note`],[`role`,`group`,`aria-labelledby`,`accessibility-title`,1,`accessibility-controls`],[`id`,`accessibility-title`],[1,`accessibility-options`],[`label`,`Reduce motion`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,3,`ngModelChange`,`ngModel`],[`label`,`High contrast`,3,`ngModelChange`,`ngModel`],[`aria-labelledby`,`implementation-title`,1,`implementation`],[`id`,`implementation-title`],[1,`section-note`],[3,`textContent`],[1,`appearance-documentation`],[`path`,`documentation/appearance/README.md`],[`name`,`appearance-quality`,3,`ngModelChange`,`label`,`value`,`ngModel`]],template:function(r,t){if(r&1){let u=kT();It(0,`section`,1)(1,`header`,2)(2,`p`,3),Co(3,`Appearance · application wide`),Bt(),It(4,`h1`,4),Co(5,`Appearance`),Bt(),It(6,`p`),Co(7,`Find your balance of clear and tinted glass, then preview it over a mountain landscape.`),Bt()(),It(8,`div`,5)(9,`div`,6)(10,`section`,7)(11,`div`,8),fi(12,`img`,9),It(13,`article`,10),fi(14,`bx-icon`,11),It(15,`h2`),Co(16,`This is blocks.`),Bt(),It(17,`p`),Co(18,`Theme the application. Keep the interaction simple.`),Bt()()(),It(19,`section`,12)(20,`h2`,13),Co(21,`Glassiness`),Bt(),It(22,`p`,14),Co(23),Bt(),It(24,`div`,15),fi(25,`bx-icon`,16),It(26,`input`,17,0),it(`input`,function(){Uv(u);let m=LT(27);return $v(t.updateAppearance({glassiness:+m.value}))}),Bt(),fi(28,`bx-icon`,18),Bt()()()(),It(29,`aside`,19)(30,`div`,20)(31,`h2`,21),Co(32,`Global appearance`),Bt(),It(33,`button`,22),it(`click`,function(){return t.reset()}),Co(34,`Reset`),Bt()(),It(35,`fieldset`)(36,`legend`),Co(37,`Mode`),Bt(),It(38,`div`,23)(39,`button`,24),it(`click`,function(){return t.theme.setApplicationTheme(`light`)}),fi(40,`bx-icon`,25),Co(41,`Light`),Bt(),It(42,`button`,24),it(`click`,function(){return t.theme.setApplicationTheme(`dark`)}),fi(43,`bx-icon`,26),Co(44,`Dark`),Bt()()(),It(45,`fieldset`)(46,`legend`),Co(47,`Color`),Bt(),It(48,`div`,27),Cp(49,G,2,3,`button`,28,I),Bt()(),It(51,`fieldset`,29)(52,`legend`),Co(53,`Rendering`),Bt(),It(54,`div`,30),Cp(55,H,1,3,`bx-radio`,31,$),Bt()(),It(57,`p`,32),Co(58,`Baseline keeps the standard glass blur, tint, and lighting, without extra reflections and specular highlights. Automatic adds those details when supported and suitable for this device.`),Bt(),It(59,`div`,33)(60,`h3`,34),Co(61,`Accessibility`),Bt(),It(62,`div`,35)(63,`bx-slide-toggle`,36),yx(),it(`ngModelChange`,function(m){return t.setMotion(m)}),Bt(),It(64,`bx-slide-toggle`,37),yx(),it(`ngModelChange`,function(m){return t.updateAppearance({reducedTransparency:m})}),Bt(),It(65,`bx-slide-toggle`,38),yx(),it(`ngModelChange`,function(m){return t.theme.setHighContrast(m)}),Bt()()()()(),It(66,`section`,39)(67,`div`)(68,`p`,3),Co(69,`Existing Blocks API`),Bt(),It(70,`h2`,40),Co(71,`One configuration. Every component.`),Bt(),It(72,`p`),Co(73,`Glass follows the existing semantic theme. Use the appearance controls above, or configure the theming service in your application.`),Bt(),It(74,`p`,41),Co(75,`Glassiness adjusts tint and blur together. Reduced transparency provides an opaque backing while keeping your glassiness preference.`),Bt()(),It(76,`pre`),fi(77,`code`,42),Bt()(),It(78,`details`,43)(79,`summary`),Co(80,`Appearance API, performance, and accessibility`),Bt(),fi(81,`app-readme`,44),Bt()()}r&2&&(jt(12),Kt(`data-bx-reduced-motion`,t.reducedMotion()),jt(11),Nc(t.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust glassiness.`:`Slide from nearly clear glass to a richer tint. The middle balances clarity and depth.`),jt(2),vo(`decorative`,!1),jt(),vo(`value`,t.appearance().glassiness)(`disabled`,t.appearance().reducedTransparency),Kt(`aria-valuetext`,t.glassinessDescription()),jt(2),vo(`decorative`,!1),jt(11),vo(`color`,t.theme.activeTheme()===`light`?`primary`:`grayscale`),Kt(`aria-pressed`,t.theme.activeTheme()===`light`),jt(3),vo(`color`,t.theme.activeTheme()===`dark`?`primary`:`grayscale`),Kt(`aria-pressed`,t.theme.activeTheme()===`dark`),jt(7),wp(t.theme.palettes),jt(6),wp(t.qualities),jt(8),vo(`ngModel`,t.reducedMotion()),Cx(),jt(),vo(`ngModel`,t.appearance().reducedTransparency),Cx(),jt(),vo(`ngModel`,t.theme.highContrast()),Cx(),jt(12),vo(`textContent`,t.codeExample))},dependencies:[l5,i5,lN,K,Z,J,S,Mr,nd,A],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.appearance[_ngcontent-%COMP%] {
  max-width: 88rem;
  margin-inline: auto;
}
.lab-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(17rem, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}
.preview-column[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.material-preview[_ngcontent-%COMP%] {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background: var(--%NS%bx-bg-surface);
}
.stage[_ngcontent-%COMP%] {
  position: relative;
  display: grid;
  place-items: center;
  flex: 1;
  min-height: 29rem;
  min-width: 0;
  padding: 0;
  background: var(--%NS%bx-bg-surface-alt);
  border-top-left-radius: calc(0.75rem - 1px);
  border-top-right-radius: calc(0.75rem - 1px);
  overflow: clip;
}
.preview-surface[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  width: calc(100% - 2rem);
  max-width: 23rem;
  margin-block: 1rem;
  border: 1px solid var(--%NS%bx-border-default);
  padding: 2rem;
  border-radius: 0.75rem;
  --%NS%bx-glass-radius: 0.75rem;
}
.preview-surface[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  margin-block: 1.5rem 0.75rem;
}
.preview-surface[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
}
.global-controls[_ngcontent-%COMP%] {
  padding: 1.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 85%, transparent);
}
.panel-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.glassiness-controls[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.25rem;
}
.section-note[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.global-controls[_ngcontent-%COMP%]    > .rendering-note[_ngcontent-%COMP%] {
  margin: 0 0 1rem;
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0 0 1.5rem;
  min-width: 0;
}
.rendering-options[_ngcontent-%COMP%] {
  margin-bottom: 0.5rem;
}
legend[_ngcontent-%COMP%], 
.accessibility-controls[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}
.mode-picker[_ngcontent-%COMP%], 
.palette-picker[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.glassiness-controls[_ngcontent-%COMP%] {
  flex: none;
  padding: 1.5rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.glassiness-range[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  color: var(--%NS%bx-text-secondary);
}
.glassiness-tinted-icon[_ngcontent-%COMP%] {
  background:
    radial-gradient(
      circle,
      currentcolor 48%,
      transparent 52%);
  opacity: 0.8;
}
input[type=range][_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  min-width: 0;
  margin: 0;
  min-height: 1.5rem;
  cursor: pointer;
}
.quality-picker[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.75rem;
  font-size: 0.875rem;
}
.quality-picker[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], 
.check-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
}
.accessibility-controls[_ngcontent-%COMP%] {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.accessibility-controls[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-top: 0;
}
.accessibility-options[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.75rem;
  font-size: 0.875rem;
}
.glassiness-controls[_ngcontent-%COMP%]   .section-note[_ngcontent-%COMP%] {
  margin-block: 0.75rem 1.5rem;
}
.implementation[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 2rem;
  margin-block: 3rem 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.implementation[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {
  margin: 0;
  padding: 1.5rem;
  background: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  overflow-x: auto;
  font-size: 0.8rem;
  line-height: 1.7;
}
.appearance-documentation[_ngcontent-%COMP%] {
  border-top: 1px solid var(--%NS%bx-border-default);
  padding-block: 1.5rem;
}
.appearance-documentation[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {
  cursor: pointer;
  margin-bottom: 1rem;
}
@media (max-width: 1280px) {
  .lab-layout[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .global-controls[_ngcontent-%COMP%] {
    order: -1;
  }
  .implementation[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 640px) {
  .stage[_ngcontent-%COMP%] {
    min-height: 25rem;
  }
  .preview-surface[_ngcontent-%COMP%] {
    width: calc(100% - 1rem);
    padding: 1.5rem;
  }
  .global-controls[_ngcontent-%COMP%], 
   .glassiness-controls[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}
.lab-layout[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], 
.implementation[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  min-width: 0;
}
.scene-background[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: 0;
  top: calc(-25% - 1px);
  width: 100%;
  height: calc(125% + 2px);
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  animation: _ngcontent-%COMP%_backdrop-drift 30s ease-in-out infinite alternate;
}
@keyframes _ngcontent-%COMP%_backdrop-drift {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20%);
  }
}
.scene-background[data-bx-reduced-motion=true][_ngcontent-%COMP%] {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .scene-background[_ngcontent-%COMP%]:not([data-bx-reduced-motion=false]) {
    animation-play-state: paused;
  }
}`]})};export{F as Appearance};