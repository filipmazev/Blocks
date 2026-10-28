import{$t as fi,Bt as bp,Dn as n5,Dt as Zt,En as mt,F as It,Rn as p,S as Dr,Xn as sN,Y as OT,Yn as s5,bt as W,cr as vo,er as td,f as Co,gn as jt,it as Rc,j as Hv,p as Cp,pr as xT,pt as Uv,q as Mr,rn as gx,sr as ur,un as it,vt as Vt,xr as yx,yn as ke}from"./chunk-DtVVo_Bz.js";import{c as K,l as Z,s as J,t as S}from"./main-IWM4S6MK.js";import{t as A}from"./chunk-BYTtg_hc.js";var I=(s,i)=>i.id;var $=(s,i)=>i.value;function G(s,i){if(s&1){let r=xT();It(0,`button`,24),it(`click`,function(){let g=Hv(r).$implicit,c=ur();return Uv(c.theme.setPalette(g.id))}),Co(1),jt()}if(s&2){let r=i.$implicit,t=ur();vo(`color`,t.theme.palette()===r.id?`primary`:`grayscale`),Zt(`aria-pressed`,t.theme.palette()===r.id),Vt(),Rc(r.label)}}function L(s,i){if(s&1){let r=xT();It(0,`bx-radio`,39),gx(),it(`ngModelChange`,function(g){Hv(r);let c=ur();return Uv(c.updateAppearance({quality:g}))}),jt()}if(s&2){let r=i.$implicit,t=ur();vo(`label`,r.label)(`value`,r.value)(`ngModel`,t.appearance().quality),yx()}}var F=class s{a11y=p(ke);theme=p(Dr);appearance=this.theme.appearance;reducedMotion=this.a11y.isReducedMotion;glassinessDescription=W(()=>{let i=this.appearance().glassiness;return i<.25?`Nearly transparent glass`:i<.75?`Balanced glass`:`Richly tinted glass`});qualities=[{value:`auto`,label:`Automatic`},{value:`baseline`,label:`Baseline`},{value:`enhanced`,label:`Enhanced when supported`}];codeExample=`const theme = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
theme.setAppearance({ glassiness: 0.5 });

// Opaque surfaces are an accessibility preference.
theme.setAppearance({ reducedTransparency: true });

// Custom surfaces inherit the same appearance.
<article bxSurface>\u2026</article>`;updateAppearance(i){this.theme.setAppearance(i)}setMotion(i){this.a11y.setReducedMotion(i)}reset(){this.theme.resetAppearance(),this.theme.setPalette(`orange`),this.a11y.setReducedMotion(null)}static ɵfac=function(r){return new(r||s)};static ɵcmp=mt({type:s,selectors:[[`app-appearance`]],decls:79,vars:14,consts:[[`glassiness`,``],[`aria-labelledby`,`appearance-title`,1,`appearance`],[1,`page-heading`],[1,`eyebrow`],[`id`,`appearance-title`],[1,`lab-layout`],[1,`preview-column`],[`aria-label`,`Material preview over a mountain photograph`,1,`stage`],[`src`,`assets/images/mountains.webp`,`alt`,``,`aria-hidden`,`true`,`width`,`5868`,`height`,`4016`,`decoding`,`async`,1,`scene-background`],[`bxSurface`,``,1,`preview-surface`],[`name`,`layers`,`size`,`28`],[`bxSurface`,``,`aria-labelledby`,`glassiness-title`,1,`glassiness-controls`],[`id`,`glassiness-title`],[`id`,`glassiness-note`,1,`section-note`],[1,`glassiness-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Nearly transparent`,3,`decorative`],[`id`,`appearance-glassiness`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-labelledby`,`glassiness-title`,`aria-describedby`,`glassiness-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`glassiness-tinted-icon`,3,`decorative`],[`bxSurface`,``,`aria-labelledby`,`global-title`,1,`global-controls`],[1,`panel-heading`],[`id`,`global-title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`],[1,`section-note`],[1,`mode-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`name`,`sun`,`size`,`16`],[`name`,`moon`,`size`,`16`],[1,`palette-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[1,`quality-picker`],[`name`,`appearance-quality`,3,`label`,`value`,`ngModel`],[1,`preferences`],[`label`,`Reduce motion`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,3,`ngModelChange`,`ngModel`],[`aria-labelledby`,`implementation-title`,1,`implementation`],[`id`,`implementation-title`],[3,`textContent`],[1,`appearance-documentation`],[`path`,`documentation/appearance/README.md`],[`name`,`appearance-quality`,3,`ngModelChange`,`label`,`value`,`ngModel`]],template:function(r,t){if(r&1){let g=xT();It(0,`section`,1)(1,`header`,2)(2,`p`,3),Co(3,`Appearance · application wide`),jt(),It(4,`h1`,4),Co(5,`Appearance`),jt(),It(6,`p`),Co(7,`Find your balance of clear and tinted glass, then preview it over a mountain landscape.`),jt()(),It(8,`div`,5)(9,`div`,6)(10,`section`,7),fi(11,`img`,8),It(12,`article`,9),fi(13,`bx-icon`,10),It(14,`h2`),Co(15,`This is blocks.`),jt(),It(16,`p`),Co(17,`Theme the application. Keep the interaction simple.`),jt()()(),It(18,`section`,11)(19,`h2`,12),Co(20,`Glassiness`),jt(),It(21,`p`,13),Co(22),jt(),It(23,`div`,14),fi(24,`bx-icon`,15),It(25,`input`,16,0),it(`input`,function(){Hv(g);let u=OT(26);return Uv(t.updateAppearance({glassiness:+u.value}))}),jt(),fi(27,`bx-icon`,17),jt()()(),It(28,`aside`,18)(29,`div`,19)(30,`h2`,20),Co(31,`Global appearance`),jt(),It(32,`button`,21),it(`click`,function(){return t.reset()}),Co(33,`Reset`),jt()(),It(34,`p`,22),Co(35,`Changes apply to every Blocks component, including open menus, dialogs, and notifications.`),jt(),It(36,`fieldset`)(37,`legend`),Co(38,`Mode`),jt(),It(39,`div`,23)(40,`button`,24),it(`click`,function(){return t.theme.setApplicationTheme(`light`)}),fi(41,`bx-icon`,25),Co(42,`Light`),jt(),It(43,`button`,24),it(`click`,function(){return t.theme.setApplicationTheme(`dark`)}),fi(44,`bx-icon`,26),Co(45,`Dark`),jt()()(),It(46,`fieldset`)(47,`legend`),Co(48,`Color`),jt(),It(49,`div`,27),bp(50,G,2,3,`button`,28,I),jt()(),It(52,`fieldset`)(53,`legend`),Co(54,`Rendering`),jt(),It(55,`div`,29),bp(56,L,1,3,`bx-radio`,30,$),jt()(),It(58,`div`,31)(59,`bx-slide-toggle`,32),gx(),it(`ngModelChange`,function(u){return t.setMotion(u)}),jt(),It(60,`bx-slide-toggle`,33),gx(),it(`ngModelChange`,function(u){return t.updateAppearance({reducedTransparency:u})}),jt()(),It(61,`p`,22),Co(62,`Automatic rendering uses supported enhancements. Your system accessibility settings remain respected.`),jt()()(),It(63,`section`,34)(64,`div`)(65,`p`,3),Co(66,`Existing Blocks API`),jt(),It(67,`h2`,35),Co(68,`One configuration. Every component.`),jt(),It(69,`p`),Co(70,`Glass follows the existing semantic theme. Use the appearance controls above, or configure the theming service in your application.`),jt(),It(71,`p`,22),Co(72,`Glassiness adjusts tint and blur together. Reduced transparency provides an opaque backing while keeping your glassiness preference.`),jt()(),It(73,`pre`),fi(74,`code`,36),jt()(),It(75,`details`,37)(76,`summary`),Co(77,`Appearance API, performance, and accessibility`),jt(),fi(78,`app-readme`,38),jt()()}r&2&&(Vt(11),Zt(`data-bx-reduced-motion`,t.reducedMotion()),Vt(11),Rc(t.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust glassiness.`:`Slide from nearly clear glass to a richer tint. The middle balances clarity and depth.`),Vt(2),vo(`decorative`,!1),Vt(),vo(`value`,t.appearance().glassiness)(`disabled`,t.appearance().reducedTransparency),Zt(`aria-valuetext`,t.glassinessDescription()),Vt(2),vo(`decorative`,!1),Vt(13),vo(`color`,t.theme.activeTheme()===`light`?`primary`:`grayscale`),Zt(`aria-pressed`,t.theme.activeTheme()===`light`),Vt(3),vo(`color`,t.theme.activeTheme()===`dark`?`primary`:`grayscale`),Zt(`aria-pressed`,t.theme.activeTheme()===`dark`),Vt(7),Cp(t.theme.palettes),Vt(6),Cp(t.qualities),Vt(3),vo(`ngModel`,t.reducedMotion()),yx(),Vt(),vo(`ngModel`,t.appearance().reducedTransparency),yx(),Vt(14),vo(`textContent`,t.codeExample))},dependencies:[s5,n5,sN,K,Z,J,S,Mr,td,A],styles:[`
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
  align-items: start;
}
.stage[_ngcontent-%COMP%] {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 29rem;
  padding: 2rem;
  background: var(--%NS%bx-bg-surface-alt);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  overflow: clip;
}
.preview-surface[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  width: 100%;
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
.global-controls[_ngcontent-%COMP%], 
.glassiness-controls[_ngcontent-%COMP%] {
  padding: 1.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 85%, transparent);
}
.global-controls[_ngcontent-%COMP%] {
  align-self: stretch;
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
.global-controls[_ngcontent-%COMP%]    > .section-note[_ngcontent-%COMP%] {
  margin-block: 0.75rem 1.5rem;
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0 0 1.5rem;
  min-width: 0;
}
legend[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.mode-picker[_ngcontent-%COMP%], 
.palette-picker[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.glassiness-controls[_ngcontent-%COMP%] {
  margin-top: 1.5rem;
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
.quality-picker[_ngcontent-%COMP%], 
.preferences[_ngcontent-%COMP%] {
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
.preferences[_ngcontent-%COMP%] {
  border-top: 1px solid var(--%NS%bx-border-default);
  padding-top: 1rem;
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
    padding: 1rem;
    min-height: 25rem;
  }
  .preview-surface[_ngcontent-%COMP%] {
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