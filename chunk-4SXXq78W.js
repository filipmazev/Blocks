import{t as r}from"./chunk-C9yOwMO6.js";import{B as Kn,F as Jl,Fn as ob,K as Mb,Nt as Zn,P as JT,Pn as oA,Rn as or,Rt as ab,S as Fl,Sn as lA,Tn as ly,Ut as cy,Wn as qM,_ as E,b as FA,en as fA,f as CC,ft as Tn,gr as y8,hn as jh,i as $h,mt as UM,nt as QA,rt as QT,sn as h8,st as R_,v as E_,wn as lr,xn as kk,xt as XT,zn as p}from"./chunk-BTQvnuSt.js";import{_ as Se,c as K,d as Ee,h as Oe,l as Z$1,s as J$1,t as S}from"./main-UZ7SQ7UX.js";import{t as A}from"./chunk-SYKn8XKf.js";var J=(l,r)=>r.id;var Q=(l,r)=>r.value;function W(l,r){if(l&1){let i=oA();Fl(0,`button`,33),Kn(`click`,function(){let m=ly(i).$implicit,c=lA();return cy(c.setMaterial(m))}),FA(1),jh()}if(l&2){let i=r.$implicit,t=lA();ab(`color`,t.appearance().material===i?`primary`:`grayscale`),Tn(`aria-pressed`,t.appearance().material===i),CC(),Mb(i)}}function X(l,r){if(l&1){let i=oA();Fl(0,`button`,33),Kn(`click`,function(){let m=ly(i).$implicit,c=lA();return cy(c.theme.setPalette(m.id))}),FA(1),jh()}if(l&2){let i=r.$implicit,t=lA();ab(`color`,t.theme.palette()===i.id?`primary`:`grayscale`),Tn(`aria-pressed`,t.theme.palette()===i.id),CC(),Mb(i.label)}}function Z(l,r){if(l&1){let i=oA();Fl(0,`bx-radio`,47),UM(),Kn(`ngModelChange`,function(m){ly(i);let c=lA();return cy(c.updateAppearance({quality:m}))}),jh()}if(l&2){let i=r.$implicit,t=lA();ab(`label`,i.label)(`value`,i.value)(`ngModel`,t.appearance().quality),qM()}}function ee(l,r){if(l&1){let i=oA();Fl(0,`bx-menu-item`,49),Kn(`action`,function(){let m=ly(i).$implicit,c=lA(2);return cy(c.setMaterial(m))}),jh()}if(l&2){let i=r.$implicit,t=lA(2);ab(`label`,`Use `+i+` material`)(`icon`,t.appearance().material===i?`check`:void 0)}}function ne(l,r){if(l&1&&(Fl(0,`bx-menu`),QT(1,ee,1,2,`bx-menu-item`,48,XT),jh()),l&2){let i=lA();CC(),JT(i.materials)}}var H=class l{theme=p(lr);a11y=p(or);appearance=this.theme.appearance;reducedMotion=this.a11y.isReducedMotion;status=E(`Open the menu to preview a gentle fade with stable, readable content.`);materials=[`glass`,`frosted`,`solid`];qualities=[{value:`auto`,label:`Automatic`},{value:`baseline`,label:`Baseline`},{value:`enhanced`,label:`Enhanced when supported`}];codeExample=`// Change the material across the application, including open overlays.
const theme = inject(ThemingService);
theme.setAppearance({ material: 'glass', blur: 10, tint: 0.5 });

// Existing Blocks components inherit these settings.
<button bx-button [bxDropdown]="actions" bxTransition="fade">
  Explore actions
</button>

// Custom native DOM surfaces use bxSurface.
<article bxSurface>\u2026</article>`;updateAppearance(r){this.theme.setAppearance(r)}setMaterial(r$1){let i={glass:{blur:10,tint:.5},frosted:{blur:24,tint:.65},solid:{blur:0,tint:1}}[r$1];this.theme.setAppearance(r({material:r$1},i)),this.status.set(`${r$1[0].toUpperCase()}${r$1.slice(1)} applied throughout Blocks. Open another component page to see the same settings.`)}setMotion(r){this.a11y.setReducedMotion(r)}reset(){this.theme.resetAppearance(),this.theme.setPalette(`orange`),this.a11y.setReducedMotion(null),this.status.set(`Global appearance defaults restored. Motion follows the system preference.`)}static ɵfac=function(i){return new(i||l)};static ɵcmp=Zn({type:l,selectors:[[`app-appearance`]],decls:101,vars:17,consts:[[`menu`,`bxDropdown`],[`blur`,``],[`tint`,``],[`actions`,``],[`aria-labelledby`,`appearance-title`,1,`appearance`],[1,`page-heading`],[1,`eyebrow`],[`id`,`appearance-title`],[1,`lab-layout`],[1,`preview-column`],[`aria-label`,`Material preview over a mountain photograph`,1,`stage`],[`src`,`assets/images/mountains.webp`,`alt`,``,`aria-hidden`,`true`,`width`,`5868`,`height`,`4016`,`decoding`,`async`,1,`scene-background`],[`bxSurface`,``,1,`preview-surface`],[1,`preview-heading`],[`name`,`layers`,`size`,`28`],[1,`material-badge`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`bxTransition`,`fade`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`role`,`status`,1,`interaction-status`],[`bxSurface`,``,`aria-labelledby`,`material-title`,1,`material-controls`],[`id`,`material-title`],[1,`section-note`],[`aria-labelledby`,`material-title`],[1,`material-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[`for`,`appearance-blur`,1,`range-control`],[`id`,`appearance-blur`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`40`,3,`input`,`value`,`disabled`],[`for`,`appearance-tint`,1,`range-control`],[`id`,`appearance-tint`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,3,`input`,`value`,`disabled`],[`bxSurface`,``,`aria-labelledby`,`global-title`,1,`global-controls`],[1,`panel-heading`],[`id`,`global-title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`name`,`sun`,`size`,`16`],[`name`,`moon`,`size`,`16`],[1,`palette-picker`],[1,`quality-picker`],[`name`,`appearance-quality`,3,`label`,`value`,`ngModel`],[1,`preferences`],[`label`,`Reduce motion`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,3,`ngModelChange`,`ngModel`],[`aria-labelledby`,`implementation-title`,1,`implementation`],[`id`,`implementation-title`],[3,`textContent`],[1,`appearance-documentation`],[`path`,`documentation/appearance/README.md`],[`name`,`appearance-quality`,3,`ngModelChange`,`label`,`value`,`ngModel`],[3,`label`,`icon`],[3,`action`,`label`,`icon`]],template:function(i,t){if(i&1){let m=oA();Fl(0,`section`,4)(1,`header`,5)(2,`p`,6),FA(3,`Appearance · application wide`),jh(),Fl(4,`h1`,7),FA(5,`Appearance`),jh(),Fl(6,`p`),FA(7,`Configure the shared material, then preview it over a mountain landscape.`),jh()(),Fl(8,`div`,8)(9,`div`,9)(10,`section`,10),Jl(11,`img`,11),Fl(12,`article`,12)(13,`div`,13),Jl(14,`bx-icon`,14),Fl(15,`span`,15),FA(16),jh()(),Fl(17,`h2`),FA(18,`This is blocks.`),jh(),Fl(19,`p`),FA(20,`Theme the application. Keep the interaction simple.`),jh(),Fl(21,`button`,16,0),FA(23,`Explore actions`),Jl(24,`bx-icon`,17),jh()()(),Fl(25,`p`,18),FA(26),jh(),Fl(27,`section`,19)(28,`h2`,20),FA(29,`Material`),jh(),Fl(30,`p`,21),FA(31,`Choose a material and adjust its blur and tint.`),jh(),Fl(32,`fieldset`,22)(33,`div`,23),QT(34,W,2,3,`button`,24,XT),jh()(),Fl(36,`label`,25),FA(37,`Backdrop blur `),Fl(38,`output`),FA(39),jh(),Fl(40,`input`,26,1),Kn(`input`,function(){ly(m);let u=fA(41);return cy(t.updateAppearance({blur:+u.value}))}),jh()(),Fl(42,`label`,27),FA(43,`Tint density `),Fl(44,`output`),FA(45),jh(),Fl(46,`input`,28,2),Kn(`input`,function(){ly(m);let u=fA(47);return cy(t.updateAppearance({tint:+u.value}))}),jh()()()(),Fl(48,`aside`,29)(49,`div`,30)(50,`h2`,31),FA(51,`Global appearance`),jh(),Fl(52,`button`,32),Kn(`click`,function(){return t.reset()}),FA(53,`Reset`),jh()(),Fl(54,`p`,21),FA(55,`Changes apply to every Blocks component, including open menus, dialogs, and notifications.`),jh(),Fl(56,`fieldset`)(57,`legend`),FA(58,`Mode`),jh(),Fl(59,`div`,23)(60,`button`,33),Kn(`click`,function(){return t.theme.setApplicationTheme(`light`)}),Jl(61,`bx-icon`,34),FA(62,`Light`),jh(),Fl(63,`button`,33),Kn(`click`,function(){return t.theme.setApplicationTheme(`dark`)}),Jl(64,`bx-icon`,35),FA(65,`Dark`),jh()()(),Fl(66,`fieldset`)(67,`legend`),FA(68,`Color`),jh(),Fl(69,`div`,36),QT(70,X,2,3,`button`,24,J),jh()(),Fl(72,`fieldset`)(73,`legend`),FA(74,`Rendering`),jh(),Fl(75,`div`,37),QT(76,Z,1,3,`bx-radio`,38,Q),jh()(),Fl(78,`div`,39)(79,`bx-slide-toggle`,40),UM(),Kn(`ngModelChange`,function(u){return t.setMotion(u)}),jh(),Fl(80,`bx-slide-toggle`,41),UM(),Kn(`ngModelChange`,function(u){return t.updateAppearance({reducedTransparency:u})}),jh()(),Fl(81,`p`,21),FA(82,`Automatic rendering uses supported enhancements. Your system accessibility settings remain respected.`),jh()()(),Fl(83,`section`,42)(84,`div`)(85,`p`,6),FA(86,`Existing Blocks API`),jh(),Fl(87,`h2`,43),FA(88,`One configuration. Every component.`),jh(),Fl(89,`p`),FA(90,`The material follows the existing semantic theme. Use the appearance controls above, or configure the theming service in your application.`),jh(),Fl(91,`p`,21),FA(92,`The translucent surface samples the photograph behind it. Solid material and reduced transparency keep an opaque backing.`),jh()(),Fl(93,`pre`),Jl(94,`code`,44),jh()(),Fl(95,`details`,45)(96,`summary`),FA(97,`Appearance API, performance, and accessibility`),jh(),Jl(98,`app-readme`,46),jh()(),ob(99,ne,3,0,`ng-template`,null,3,QA)}if(i&2){let m=fA(100);CC(11),Tn(`data-bx-reduced-motion`,t.reducedMotion()),CC(5),Mb(t.appearance().material),CC(5),ab(`bxDropdown`,m),CC(5),Mb(t.status()),CC(8),JT(t.materials),CC(5),$h(``,t.appearance().blur,` px`),CC(),ab(`value`,t.appearance().blur)(`disabled`,t.appearance().material===`solid`),CC(5),$h(``,(t.appearance().tint*100).toFixed(0),`%`),CC(),ab(`value`,t.appearance().tint)(`disabled`,t.appearance().material===`solid`),CC(14),ab(`color`,t.theme.activeTheme()===`light`?`primary`:`grayscale`),Tn(`aria-pressed`,t.theme.activeTheme()===`light`),CC(3),ab(`color`,t.theme.activeTheme()===`dark`?`primary`:`grayscale`),Tn(`aria-pressed`,t.theme.activeTheme()===`dark`),CC(7),JT(t.theme.palettes),CC(6),JT(t.qualities),CC(3),ab(`ngModel`,t.reducedMotion()),qM(),CC(),ab(`ngModel`,t.appearance().reducedTransparency),qM(),CC(14),ab(`textContent`,t.codeExample)}},dependencies:[y8,h8,kk,K,Z$1,J$1,S,E_,Oe,Se,Ee,R_,A],styles:[`
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
.preview-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.material-badge[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: var(--%NS%bx-text-heading);
  border: 1px solid var(--%NS%bx-border-default);
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
}
.preview-surface[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  margin-block: 1.5rem 0.75rem;
}
.preview-surface[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
}
.preview-surface[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
.motion-state[_ngcontent-%COMP%] {
  margin: 0.75rem 0 0;
  font-size: 0.75rem;
  text-transform: capitalize;
}
.interaction-status[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-secondary);
  min-height: 2.7rem;
  padding-top: 0.75rem;
}
.global-controls[_ngcontent-%COMP%], 
.material-controls[_ngcontent-%COMP%] {
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
.material-controls[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
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
.material-picker[_ngcontent-%COMP%], 
.palette-picker[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.material-picker[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  text-transform: capitalize;
}
.range-control[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.875rem;
}
.range-control[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
output[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-variant-numeric: tabular-nums;
}
input[type=range][_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  margin: 0.5rem 0 0;
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
.material-controls[_ngcontent-%COMP%]   .section-note[_ngcontent-%COMP%] {
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
   .material-controls[_ngcontent-%COMP%] {
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
}
.material-controls[_ngcontent-%COMP%]    > .range-control[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}`]})};export{H as Appearance};