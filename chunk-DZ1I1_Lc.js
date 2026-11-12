import{$ as Ge$1,At as Ko,Br as cb,D,F as E,Ir as bt,Jn as Wn,Ka as tB,Kt as N,Li as ja,Mn as Tr,N as Dt,Ni as j,No as yt,Nr as be,Nt as L,Qn as XF,Qr as dr,R as El,Ro as zi,To as y,Tr as an$1,U as F,Un as WI,Vn as W,Vt as M,Wa as so,Xn as X,Xr as de,Y as Fe,Yn as Wt,Yt as O,Zi as ln$1,_r as _e,_t as J,aa as me,ao as uf,cr as Z$1,di as fl,do as w,et as Gn,gi as g,gt as It,h as Be$1,i as $o,ii as f,it as Hd,jo as yn,k as De,ka as pl,ki as ie$1,kr as b,l as A,ln as Pe,mo as wl,nr as Y,on as Pa,or as Yo,pn as Q,po as we,s as $t,ti as ee,v as Bt,vi as gP,wr as ae,xn as Re,yr as _o,zi as je$1}from"./chunk-DzvvGvUq.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var z=class t{elementRef=f(Y);static ɵfac=function(e){return new(e||t)};static ɵdir=Z$1({type:t,selectors:[[``,`bxButtonIcon`,``]]})};var ke={text:0,icon:.45,outlined:.45,tonal:.65,filled:1.1};var Be={primary:1,accent:1,success:1,info:1,warn:1.04,danger:1.1,grayscale:.35};function je(t,r,e){return ke[t===`text`?`text`:r?`outlined`:t===`tonal`?`tonal`:t===`icon`?`icon`:`filled`]*Be[e]}var We=[`*`];function $e(t,r){if(t&1&&we(0,`bx-loading-spinner`,1),t&2){let e=w();A(`size`,e.spinnerSize())(`decorative`,!0)}}var Z=class t{bxA11yService=f(Pe);projectedIcon=so(Bt);iconElement=so(Bt,{read:Y});customIcon=so(z);spinnerSize=M(20);isAnimated=g(()=>!this.bxA11yService.isReducedMotion());isDisabled=g(()=>this.disabled()||this.loading());variant=b(`text`);color=b(`primary`);outlined=b(!1);elevated=b(!1);disabled=b(!1,{transform:O});loading=b(!1,{transform:O});interactive=b(!0,{transform:O});surfaceEffects=b(!0,{transform:O});glassiness=b();constructor(){WI(()=>({glassiness:this.glassiness(),emissionStrength:je(this.variant(),this.outlined(),this.color()),interactive:this.variant()===`text`||!this.interactive()||this.isDisabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.isDisabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:this.color()===`accent`?`var(--bx-accent)`:`var(--bx-text-${this.color()})`:void 0}),()=>this.surfaceEffects()),Gn(r=>{let e=this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement,n=Number(this.projectedIcon()?.size()),a=e?.offsetWidth;if(this.spinnerSize.set(a||(Number.isFinite(n)&&n>0?n:20)),!e||!this.loading())return;let u=e.style.display;e.style.display=`none`,r(()=>{e.style.display=u})})}onClick(r){this.isDisabled()&&(r.preventDefault(),r.stopImmediatePropagation())}static ɵfac=function(e){return new(e||t)};static ɵcmp=W({type:t,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],contentQueries:function(e,n,a){e&1&&Wn(a,n.projectedIcon,Bt,5)(a,n.iconElement,Bt,5,Y)(a,n.customIcon,z,5),e&2&&bt(3)},hostVars:14,hostBindings:function(e,n){e&1&&ee(`click`,function(u){return n.onClick(u)}),e&2&&(F(`disabled`,n.isDisabled()?!0:null)(`aria-disabled`,n.isDisabled())(`aria-busy`,n.loading()?`true`:null)(`tabindex`,n.isDisabled()?`-1`:null),gP(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),ae(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],loading:[1,`loading`],interactive:[1,`interactive`],surfaceEffects:[1,`surfaceEffects`],glassiness:[1,`glassiness`]},ngContentSelectors:We,decls:3,vars:1,consts:[[1,`bx-btn-content-wrapper`],[3,`size`,`decorative`]],template:function(e,n){e&1&&(Re(),E(0,`span`,0),L(1,$e,1,2,`bx-loading-spinner`,1),me(2),D()),e&2&&(y(),j(n.loading()?1:-1))},dependencies:[El],styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) transparent;
}
.bx-btn-animated[_nghost-%COMP%] {
  transition: color 0.1s ease-out, box-shadow 0.1s ease-in-out;
}
.bx-btn-non-interactive[_nghost-%COMP%] {
  cursor: default;
}
[disabled][_nghost-%COMP%], 
[aria-disabled=true][_nghost-%COMP%] {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
  box-shadow: none !important;
}
.bx-btn-color-primary[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-primary);
  --%NS%btn-theme-hover: var(--%NS%bx-primary-hover);
  --%NS%btn-theme-active: var(--%NS%bx-primary-active);
  --%NS%btn-theme-text: var(--%NS%bx-on-primary);
  --%NS%btn-theme-hover-text: var(--%NS%bx-on-primary-hover);
  --%NS%btn-theme-active-text: var(--%NS%bx-on-primary-active);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-primary-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-brand);
  --%NS%btn-theme-border: var(--%NS%bx-border-brand);
}
.bx-btn-color-accent[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-accent);
  --%NS%btn-theme-hover: var(--%NS%bx-accent-hover);
  --%NS%btn-theme-active: var(--%NS%bx-accent-active);
  --%NS%btn-theme-text: var(--%NS%bx-on-accent);
  --%NS%btn-theme-hover-text: var(--%NS%bx-on-accent-hover);
  --%NS%btn-theme-active-text: var(--%NS%bx-on-accent-active);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-accent-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-accent);
  --%NS%btn-theme-border: var(--%NS%bx-border-accent);
}
.bx-btn-color-danger[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-danger);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-danger-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-danger-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-danger);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-danger-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-danger);
  --%NS%btn-theme-border: var(--%NS%bx-border-danger);
}
.bx-btn-color-success[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-success);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-success-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-success-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-success);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-success-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-success);
  --%NS%btn-theme-border: var(--%NS%bx-border-success);
}
.bx-btn-color-info[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-info);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-info-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-info-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-info);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-info-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-info);
  --%NS%btn-theme-border: var(--%NS%bx-border-info);
}
.bx-btn-color-warn[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-warn);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-warn-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-warn-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-warn);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-warn-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-warn);
  --%NS%btn-theme-border: var(--%NS%bx-border-warn);
}
.bx-btn-color-grayscale[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-element);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-element-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-element-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-primary);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-surface-alt);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-primary);
  --%NS%btn-theme-border: var(--%NS%bx-border-strong);
}
.bx-btn-text[_nghost-%COMP%] {
  width: fit-content;
}
.bx-btn-filled[_nghost-%COMP%], 
.bx-btn-tonal[_nghost-%COMP%] {
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-4, 1rem);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
}
.bx-btn-icon[_nghost-%COMP%], 
.bx-btn-fab[_nghost-%COMP%], 
.bx-btn-mini-fab[_nghost-%COMP%] {
  padding: 0;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.bx-btn-icon[_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%], 
.bx-btn-fab[_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%], 
.bx-btn-mini-fab[_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%] {
  gap: 0;
}
.bx-btn-icon[_nghost-%COMP%], 
.bx-btn-mini-fab[_nghost-%COMP%] {
  width: 2.5rem;
  height: 2.5rem;
}
.bx-btn-fab[_nghost-%COMP%] {
  width: 3.5rem;
  height: 3.5rem;
}
.bx-btn-extended-fab[_nghost-%COMP%] {
  padding: 0 1.5rem;
  height: 3.5rem;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.bx-btn-is-outlined[_nghost-%COMP%] {
  border-color: var(--%NS%btn-theme-border);
}
.bx-btn-is-elevated[_nghost-%COMP%] {
  box-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
}
.bx-btn-is-elevated[_nghost-%COMP%]:not(.bx-btn-non-interactive):active {
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
}
.bx-btn-content-wrapper[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  color: inherit;
}
[data-bx-surface][_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]) {
  border-radius: var(--%NS%bx-glass-radius, var(--%NS%bx-rounded-md, 0.5rem));
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-text: var(--%NS%btn-theme-tonal-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-min-opacity: 0;
  border-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-control, 0 2px 4px rgba(0, 0, 0, 0.08));
  color: var(--%NS%bx-glass-text);
  background: var(--%NS%bx-glass-surface);
}
@supports (background: color-mix(in srgb, white, transparent)) {
  [data-bx-surface][_nghost-%COMP%], 
   [_nghost-%COMP%]:not([data-bx-surface]) {
    background: color-mix(in srgb, var(--%NS%bx-glass-surface) calc(max(var(--%NS%bx-glass-min-opacity, 0), var(--%NS%bx-glass-opacity, var(--%NS%bx-glass-material-opacity, 0.5))) * 100%), transparent);
  }
}
[data-bx-surface].bx-btn-is-elevated[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-is-elevated {
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
}
[data-bx-surface].bx-btn-icon[_nghost-%COMP%], 
[data-bx-surface].bx-btn-fab[_nghost-%COMP%], 
[data-bx-surface].bx-btn-mini-fab[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-icon, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-fab, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-mini-fab {
  border-radius: var(--%NS%bx-glass-radius, var(--%NS%bx-rounded-pill, 9999px));
}
[data-bx-surface].bx-btn-extended-fab[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-extended-fab {
  border-radius: var(--%NS%bx-glass-radius, var(--%NS%bx-rounded-pill, 9999px));
}
[data-bx-surface].bx-btn-color-danger[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-danger {
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
[data-bx-surface].bx-btn-color-success[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-success {
  --%NS%bx-glass-text: var(--%NS%bx-text-success);
}
[data-bx-surface].bx-btn-color-info[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-info {
  --%NS%bx-glass-text: var(--%NS%bx-text-info);
}
[data-bx-surface].bx-btn-color-warn[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-warn {
  --%NS%bx-glass-text: var(--%NS%bx-text-warn);
}
[data-bx-surface][_nghost-%COMP%]:focus-visible, 
[_nghost-%COMP%]:not([data-bx-surface]):focus-visible {
  outline: 2px solid var(--%NS%btn-theme-border, var(--%NS%bx-border-brand, currentColor));
  outline-offset: -2px;
}
[data-bx-surface].bx-btn-tonal[_nghost-%COMP%]:not(.bx-btn-non-interactive):hover, 
[data-bx-surface].bx-btn-tonal[_nghost-%COMP%]:not(.bx-btn-non-interactive):active, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-tonal:not(.bx-btn-non-interactive):hover, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-tonal:not(.bx-btn-non-interactive):active {
  opacity: 1;
}
@media (hover: hover) {
  [data-bx-surface][_nghost-%COMP%]:hover:not(.bx-btn-non-interactive, [aria-disabled=true]) {
    --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
    --%NS%bx-glass-edge: var(--%NS%bx-border-strong);
  }
}
[_nghost-%COMP%]:active:not(.bx-btn-non-interactive, [disabled], [aria-disabled=true]) {
  --%NS%bx-glass-shadow: var(--%NS%bx-button-press-shadow, inset 0 2px 4px var(--%NS%bx-border-default));
  box-shadow: var(--%NS%bx-glass-shadow);
}
[_nghost-%COMP%]:is([aria-pressed=true], [aria-selected=true], [aria-expanded=true][aria-haspopup]:not([aria-haspopup=false]), [aria-current]:not([aria-current=false], [aria-current=""])):not(.bx-btn-non-interactive, [aria-disabled=true]) {
  --%NS%bx-glass-surface: var(--%NS%btn-selected-surface, var(--%NS%bx-bg-neutral-active));
  --%NS%bx-glass-edge: var(--%NS%bx-glass-text);
  --%NS%bx-glass-shadow: inset 0 0 0 2px var(--%NS%bx-glass-text);
}
@media (forced-colors: active) {
  [_nghost-%COMP%]:is([aria-pressed=true], [aria-selected=true], [aria-expanded=true][aria-haspopup]:not([aria-haspopup=false]), [aria-current]:not([aria-current=false], [aria-current=""])):not(.bx-btn-non-interactive, [aria-disabled=true]) {
    outline: 2px solid Highlight;
    outline-offset: -2px;
  }
}
.bx-btn-tonal[_nghost-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-tonal-bg);
  --%NS%btn-selected-surface: var(--%NS%btn-theme-tonal-bg);
}
@media (hover: hover) {
  .bx-btn-tonal[_nghost-%COMP%]:hover:not(.bx-btn-non-interactive, [aria-disabled=true]) {
    --%NS%bx-glass-surface: var(--%NS%btn-theme-tonal-bg);
  }
}
.bx-btn-tonal[_nghost-%COMP%]:active:not(.bx-btn-non-interactive, [aria-disabled=true]) {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-tonal-bg);
}
[_nghost-%COMP%]:is(.bx-btn-filled, .bx-btn-fab, .bx-btn-mini-fab, .bx-btn-extended-fab):not(.bx-btn-is-outlined) {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-base);
  --%NS%btn-selected-surface: var(--%NS%btn-theme-base);
  --%NS%bx-glass-text: var(--%NS%btn-theme-text);
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-press-opacity: 0;
  --%NS%bx-button-press-shadow: none;
}
@media (hover: hover) {
  [_nghost-%COMP%]:is(.bx-btn-filled, .bx-btn-fab, .bx-btn-mini-fab, .bx-btn-extended-fab):not(.bx-btn-is-outlined):hover:not(.bx-btn-non-interactive, [aria-disabled=true]) {
    --%NS%bx-glass-surface: var(--%NS%btn-theme-hover);
    --%NS%btn-selected-surface: var(--%NS%btn-theme-hover);
    --%NS%bx-glass-text: var(--%NS%btn-theme-hover-text, var(--%NS%btn-theme-text));
  }
}
[_nghost-%COMP%]:is(.bx-btn-filled, .bx-btn-fab, .bx-btn-mini-fab, .bx-btn-extended-fab):not(.bx-btn-is-outlined):active:not(.bx-btn-non-interactive, [aria-disabled=true]) {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-active);
  --%NS%btn-selected-surface: var(--%NS%btn-theme-active);
  --%NS%bx-glass-text: var(--%NS%btn-theme-active-text, var(--%NS%btn-theme-text));
}
.bx-btn-text[_nghost-%COMP%] {
  background: transparent !important;
  border: 0;
  box-shadow: none !important;
  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
  --%NS%bx-glass-decoration-opacity: 0;
  --%NS%bx-glass-rim-visibility: 0;
}
.bx-btn-text[_nghost-%COMP%]:is([aria-pressed=true], [aria-selected=true], [aria-expanded=true][aria-haspopup]:not([aria-haspopup=false]), [aria-current]:not([aria-current=false], [aria-current=""])) {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
.bx-btn-text[_nghost-%COMP%]:active:not(.bx-btn-non-interactive, [aria-disabled=true]) {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
@media (hover: hover) {
  .bx-btn-text[_nghost-%COMP%]:hover:not(.bx-btn-non-interactive, [aria-disabled=true]) {
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
}
@media (forced-colors: active) {
  [_nghost-%COMP%]:active:not(.bx-btn-non-interactive, [disabled], [aria-disabled=true]) {
    outline: 2px solid Highlight;
    outline-offset: -2px;
  }
}`]})};var Ge=[`*`];var V=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=W({type:t,selectors:[[`bx-error`]],hostAttrs:[`aria-live`,`polite`],ngContentSelectors:Ge,decls:1,vars:0,template:function(e,n){e&1&&(Re(),me(0))},encapsulation:2})};var Xe=[`*`];var q=class t{align=b(`start`);static ɵfac=function(e){return new(e||t)};static ɵcmp=W({type:t,selectors:[[`bx-hint`]],hostVars:2,hostBindings:function(e,n){e&2&&De(`margin-inline-start`,n.align()===`end`?`auto`:null)},inputs:{align:[1,`align`]},ngContentSelectors:Xe,decls:1,vars:0,template:function(e,n){e&1&&(Re(),me(0))},encapsulation:2})};var ce=new N(`BX_FORM_FIELD_CONTROL`);var Ue=[[[``,`bxPrefix`,``]],`*`,[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Qe=[`[bxPrefix]`,`*`,`[bxSuffix]`,`bx-error`,`bx-hint`];var Ye=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ke=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Je(t,r){t&1&&(E(0,`span`,11),X(1,`*`),D())}function Ze(t,r){if(t&1&&(E(0,`div`,1)(1,`label`,10),X(2),L(3,Je,2,0,`span`,11),D()()),t&2){let e=w();y(),F(`for`,e.controlId()),y(),an$1(``,e.resolvedLabel(),` `),y(),j(e.isRequired()&&!e.hideRequiredMarker()?3:-1)}}function en(t,r){t&1&&we(0,`bx-loading-spinner`,3),t&2&&A(`size`,16)(`decorative`,!0)}function nn(t,r){if(t&1&&(E(0,`button`,4),we(1,`bx-icon`,12),D()),t&2){let e=w();A(`bxTooltip`,e.tooltip()),F(`aria-label`,e.resolvedTooltipLabel())}}function tn(t,r){t&1&&we(0,`bx-icon`,14)}function rn(t,r){if(t&1&&(E(0,`div`,15),X(1),D()),t&2){let e=r.$implicit;y(),be(e)}}function on(t,r){if(t&1&&(E(0,`div`,13),L(1,tn,1,0,`bx-icon`,14),E(2,`div`),$t(3,rn,2,1,`div`,15,Pa),D()()),t&2){let e=w();ae(`bx-animated`,e.isAnimated()),y(),j(e.messages().length?1:-1),y(2),Wt(e.messages())}}var ne=class t{i18n=f(_e,{optional:!0});bxA11yService=f(Pe);nativeElement=f(Y).nativeElement;bxGlassLightingService=f(cb);generatedId=`bx-field-${dr()}`;projectedControl=so(ce);activeControl=g(()=>this.control()??this.projectedControl());controlId=g(()=>this.forId()||this.activeControl()?.controlId()||this.generatedId);resolvedLabel=g(()=>J(this.label()??(this.inline()?void 0:this.activeControl()?.label()),this.i18n));resolvedError=g(()=>J(this.error(),this.i18n));resolvedHint=g(()=>J(this.hint(),this.i18n));resolvedHintEnd=g(()=>J(this.hintEnd(),this.i18n));resolvedTooltipLabel=g(()=>J(this.tooltipLabel(),this.i18n));showErrors=g(()=>!!this.error()||!!this.projectedError()||this.errors().length>0||(this.activeControl()?.showError()??!1));messages=g(()=>this.resolvedError()?[this.resolvedError()]:this.activeControl()?.errorTexts()??this.errors());isRequired=g(()=>this.required()||this.activeControl()?.required());isLoading=g(()=>this.loading()||this.activeControl()?.pending());hideSubscript=g(()=>this.subscriptSizing()===`dynamic`&&!this.showErrors()&&!this.resolvedHint()&&!this.resolvedHintEnd()&&!this.projectedHint());projectedError=so(V);projectedHint=so(q);isAnimated=g(()=>!this.bxA11yService.isReducedMotion());inline=b(!1);control=b(void 0);label=b(void 0);tooltip=b(void 0);tooltipLabel=b(`More information`);error=b(void 0);errors=b([]);hint=b(void 0);hintEnd=b(void 0);required=b(!1);hideRequiredMarker=b(!1);loading=b(!1);showLoadingIndicator=b(!0);forId=b(``);subscriptSizing=b(`fixed`);constructor(){Gn(r=>{this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);let e=this.nativeElement.querySelector(`input,textarea,select,button[role="combobox"]`);if(e){let L=new Set((e.getAttribute(`aria-describedby`)??``).split(` `).filter(Boolean));L.add(`${this.controlId()}-description`),e.setAttribute(`aria-describedby`,[...L].join(` `)),e.setAttribute(`aria-invalid`,String(this.showErrors())),e.setAttribute(`aria-required`,String(!!this.isRequired()))}if(!this.showErrors())return;let n=this.nativeElement.parentElement,a=this.nativeElement.closest(`form, fieldset`)??n,u=this.nativeElement.querySelector(`.bx-field-control > [data-bx-surface]`);if(!a||!u)return;let D=this.bxGlassLightingService.register(a,{element:u,edge:`bottom`,offsetX:.5,offsetY:1,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});r(()=>D.destroy())})}static ɵfac=function(e){return new(e||t)};static ɵcmp=W({type:t,selectors:[[`bx-form-field`]],contentQueries:function(e,n,a){e&1&&Wn(a,n.projectedControl,ce,5)(a,n.projectedError,V,5)(a,n.projectedHint,q,5),e&2&&bt(3)},inputs:{inline:[1,`inline`],control:[1,`control`],label:[1,`label`],tooltip:[1,`tooltip`],tooltipLabel:[1,`tooltipLabel`],error:[1,`error`],errors:[1,`errors`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],required:[1,`required`],hideRequiredMarker:[1,`hideRequiredMarker`],loading:[1,`loading`],showLoadingIndicator:[1,`showLoadingIndicator`],forId:[1,`forId`],subscriptSizing:[1,`subscriptSizing`]},ngContentSelectors:Qe,decls:18,vars:17,consts:[[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[3,`size`,`decorative`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-subscript`,3,`hidden`,`id`],[1,`bx-field-error-projected`,3,`hidden`],[`aria-live`,`polite`,1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-hints`,3,`hidden`],[1,`bx-field-hint-end`],[1,`bx-field-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`name`,`help-circle`,`size`,`16`],[`aria-live`,`polite`,1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(Re(Ue),E(0,`div`,0),L(1,Ze,4,3,`div`,1),E(2,`div`,2),me(3),me(4,1),me(5,2),L(6,en,1,2,`bx-loading-spinner`,3),L(7,nn,2,2,`button`,4),D(),E(8,`div`,5)(9,`div`,6),me(10,3,Ye),D(),L(11,on,5,3,`div`,7),E(12,`div`,8)(13,`span`),X(14),D(),me(15,4,Ke),E(16,`span`,9),X(17),D()()()()),e&2&&(ae(`is-invalid`,n.showErrors())(`dynamic-subscript`,n.subscriptSizing()===`dynamic`),F(`data-bx-field-invalid`,n.showErrors()),y(),j(n.resolvedLabel()?1:-1),y(),ae(`bx-field-control-inline`,n.inline()),y(4),j(n.showLoadingIndicator()&&n.isLoading()?6:-1),y(),j(n.tooltip()?7:-1),y(),A(`hidden`,n.hideSubscript())(`id`,n.controlId()+`-description`),y(),A(`hidden`,!n.showErrors()),y(2),j(n.showErrors()&&!n.projectedError()?11:-1),y(),A(`hidden`,n.showErrors()),y(2),be(n.resolvedHint()),y(3),be(n.resolvedHintEnd()))},dependencies:[Bt,zi,El],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-field-wrapper[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-1, 0.25rem);
  position: relative;
  padding-bottom: var(--%NS%bx-field-padding-bottom, 0);
}
.bx-field-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-1, 0.25rem);
  min-height: 1.25rem;
}
.bx-field-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--%NS%bx-text-primary);
  -webkit-user-select: none;
  user-select: none;
}
.bx-field-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
  margin-left: 0.125rem;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  color: var(--%NS%bx-text-secondary);
  cursor: help;
  outline: none;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%]:hover, 
.bx-field-tooltip-trigger[_ngcontent-%COMP%]:focus-visible {
  color: var(--%NS%bx-text-brand);
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%]   bx-tooltip[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}
.bx-spin[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bx-spin 1s linear infinite;
  color: var(--%NS%bx-text-secondary);
}
.bx-field-error[_ngcontent-%COMP%], 
.bx-field-error-projected[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  font-size: 0.75rem;
  color: var(--%NS%bx-text-danger);
  position: relative;
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
}
.bx-field-error.bx-animated[_ngcontent-%COMP%], 
.bx-field-error-projected.bx-animated[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bx-slide-down 0.12s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1) forwards;
}
.bx-field-error[_ngcontent-%COMP%]   .bx-field-error-text[_ngcontent-%COMP%], 
.bx-field-error-projected[_ngcontent-%COMP%]   .bx-field-error-text[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
@keyframes _ngcontent-%COMP%_bx-spin {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes _ngcontent-%COMP%_bx-slide-down {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%], 
.bx-inline-tooltip-trigger[_ngcontent-%COMP%] {
  border: 0;
  padding: 0.25rem;
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  cursor: help;
}
.bx-field-error-projected[_ngcontent-%COMP%]:empty {
  display: none;
}
.bx-field-control[_ngcontent-%COMP%] {
  min-width: 0;
}
.bx-field-control-inline[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-1, 0.25rem);
}
.bx-field-control-inline[_ngcontent-%COMP%]   .bx-field-tooltip-trigger[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%] {
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  padding: var(--%NS%bx-space-1, 0.25rem);
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-field-error[_ngcontent-%COMP%] {
  align-items: flex-start;
}
.bx-field-subscript[_ngcontent-%COMP%] {
  min-block-size: var(--%NS%bx-field-subscript-height, var(--%NS%bx-space-6, 1.5rem));
}
.dynamic-subscript[_ngcontent-%COMP%]   .bx-field-subscript[_ngcontent-%COMP%] {
  min-block-size: 0;
}
.bx-field-hints[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-1, 0.25rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
  overflow-wrap: anywhere;
}
.bx-field-hint-end[_ngcontent-%COMP%] {
  margin-inline-start: auto;
}
[hidden][_ngcontent-%COMP%] {
  display: none !important;
}
.bx-field-hints[_ngcontent-%COMP%], 
.bx-field-error[_ngcontent-%COMP%], 
.bx-field-error-projected[_ngcontent-%COMP%] {
  padding-inline: var(--%NS%bx-field-support-padding, var(--%NS%bx-space-3, 0.75rem));
}`]})};var Ae={errorPolicy:`touched`,errorMode:`first`,errorMessages:{required:`This field is required.`,email:`Enter a valid email address.`,minLength:({params:t})=>`Enter at least ${t.minLength??t.requiredLength} characters.`,maxLength:({params:t})=>`Enter no more than ${t.maxLength??t.requiredLength} characters.`,min:({params:t})=>`Enter a value of at least ${t.min}.`,max:({params:t})=>`Enter a value of no more than ${t.max}.`,pattern:`Enter a value in the required format.`,parse:`Enter a valid value.`,invalid:`Invalid value.`},appearance:`fill`,floatLabel:`auto`,hideRequiredMarker:!1,subscriptSizing:`fixed`,tooltipOnTruncate:!0};var ze={minlength:`minLength`,maxlength:`maxLength`};function Ve(t,r$1,e,n){let a=ze[t.kind]??t.kind,u=`context`in t?t.context:void 0,D=u!==null&&typeof u==`object`?r({},u):r({},t),L=r$1[t.kind]??r$1[a],He=t.message??(typeof u==`string`?u:typeof D.message==`string`?D.message:void 0),oe=L??He??e[t.kind]??e[a]??e.invalid??`Invalid value.`;return J(typeof oe==`function`?oe({kind:a,error:t,params:D}):oe,n,D)}var te=class t{state=M(r({},Ae));settings=this.state.asReadonly();update(r$2){this.state.update(e=>s(r(r({},e),r$2),{errorMessages:r(r({},e.errorMessages),r$2.errorMessages)}))}static ɵfac=function(e){return new(e||t)};static ɵprov=ie$1({token:t,factory:t.ɵfac,providedIn:`root`})};var re=class t{textAdapter=f(_e,{optional:!0});formGroupDirective=f(tB,{optional:!0,skipSelf:!0});ngForm=f(XF,{optional:!0,skipSelf:!0});focusMonitor=f(Hd);formSettingsService=f(te);destroyRef=f(Q);nativeElement=f(Y).nativeElement;ngControl=f(Tr,{optional:!0,self:!0});generatedId=`bx-field-${dr()}`;submittedByParent=M(!1);extraDescriptions=M([]);localTouched=M(!1);controlVersion=M(0);currentErrors=g(()=>{if(this.controlVersion(),this.errors().length)return this.errors();let r=this.ngControl?.errors;return r?Object.entries(r).map(([e,n])=>({kind:e,context:n})):[]});keyboardFocused=M(!1);isReadonly=g(()=>this.readonly()||this.readOnly());controlId=g(()=>this.id()??this.generatedId);resolvedLabel=g(()=>J(this.label(),this.textAdapter));resolvedPlaceholder=g(()=>J(this.placeholder(),this.textAdapter));resolvedAppearance=g(()=>this.appearance()??this.formSettingsService.settings().appearance);resolvedFloatLabel=g(()=>this.floatLabel()??this.formSettingsService.settings().floatLabel);resolvedHideRequiredMarker=g(()=>this.hideRequiredMarker()??this.formSettingsService.settings().hideRequiredMarker);resolvedSubscriptSizing=g(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);resolvedTooltipOnTruncate=g(()=>this.tooltipOnTruncate()??this.formSettingsService.settings().tooltipOnTruncate??!0);describedBy=g(()=>[...new Set([this.ariaDescribedBy(),`${this.controlId()}-description`,...this.extraDescriptions()].filter(Boolean))].join(` `));effectiveDisabled=g(()=>(this.controlVersion(),this.disabled()||this.ngControl?.disabled===!0));effectiveRequired=g(()=>{this.controlVersion();let r=this.ngControl?.control;return this.required()||!!r?.hasValidator?.(pl.required)||!!r?.hasValidator?.(pl.requiredTrue)});showError=g(()=>{this.controlVersion();let r={invalid:this.invalid()||this.currentErrors().length>0||!!this.error(),touched:this.ngControl?.touched??(this.touched()||this.localTouched()),dirty:this.ngControl?.dirty??this.dirty(),submitted:this.submitted()||this.submittedByParent(),disabled:this.effectiveDisabled(),pending:this.pending()},e=this.errorPolicy()??this.formSettingsService.settings().errorPolicy;return r.disabled||!r.invalid?!1:typeof e==`function`?e(r):e===`always`||r.submitted||(e===`dirty`?r.dirty:e===`touched`?r.touched:!1)});errorTexts=g(()=>{if(!this.showError())return[];if(this.error())return[J(this.error(),this.textAdapter)];let r=this.errorPriority(),e=[...this.currentErrors()].sort((a,u)=>{let D=r.indexOf(a.kind),L=r.indexOf(u.kind);return(D<0?r.length:D)-(L<0?r.length:L)});return((this.errorMode()??this.formSettingsService.settings().errorMode)===`all`?e:e.slice(0,1)).map(a=>Ve(a,this.errorMessages(),this.formSettingsService.settings().errorMessages,this.textAdapter))});fieldControl;id=b(void 0);label=b(void 0);placeholder=b(void 0);tooltip=b(void 0);hint=b(void 0);hintEnd=b(void 0);error=b(void 0);ariaLabel=b(void 0);ariaLabelledBy=b(void 0);ariaDescribedBy=b(void 0);dataTestId=b(void 0);name=b(``);errors=b([]);invalid=b(!1);pending=b(!1);touched=b(!1);dirty=b(!1);disabled=b(!1,{transform:O});readonly=b(!1,{transform:O});readOnly=b(!1,{transform:O});hidden=b(!1,{transform:O});required=b(!1,{transform:O});loading=b(!1,{transform:O});disabledReasons=b([]);submitted=b(!1);errorMessages=b({});errorPriority=b([]);errorPolicy=b(void 0);errorMode=b(void 0);appearance=b(void 0);floatLabel=b(void 0);hideRequiredMarker=b(void 0);subscriptSizing=b(void 0);tooltipOnTruncate=b(void 0);touch=Be$1();constructor(){this.fieldControl={controlId:this.controlId,label:this.label,showError:this.showError,errorTexts:this.errorTexts,required:this.effectiveRequired,disabled:this.effectiveDisabled,pending:this.pending,focus:e=>this.focus(e),setDescribedByIds:e=>{this.extraDescriptions().join(` `)!==e.join(` `)&&this.extraDescriptions.set(e)}},Ge$1(()=>{this.focusMonitor.monitor(this.nativeElement,!0).pipe(uf(this.destroyRef)).subscribe(a=>this.keyboardFocused.set(a===`keyboard`)),this.destroyRef.onDestroy(()=>this.focusMonitor.stopMonitoring(this.nativeElement));let e=this.nativeElement.closest(`form`),n=()=>{this.submittedByParent.set(!0),this.commitPendingValue()};e?.addEventListener(`submit`,n,{capture:!0}),this.destroyRef.onDestroy(()=>e?.removeEventListener(`submit`,n,{capture:!0}))}),(this.formGroupDirective??this.ngForm)?.ngSubmit.pipe(uf(f(Q))).subscribe(()=>{this.submittedByParent.set(!0),this.commitPendingValue()})}ngOnInit(){this.ngControl?.control?.events?.pipe(uf(this.destroyRef)).subscribe(()=>{this.controlVersion.update(e=>e+1)}),this.ngControl?.control?.valueChanges?.pipe(uf(this.destroyRef)).subscribe(()=>this.clearPendingEdit()),(this.formGroupDirective??this.ngForm)?.form.events.pipe(uf(this.destroyRef)).subscribe(e=>{e instanceof fl&&this.reset()})}focus(r){this.nativeElement.querySelector(`input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)`)?.focus(r)}reset(){this.localTouched.set(!1),this.submittedByParent.set(!1)}markAsTouched(){this.localTouched.set(!0),this.commitPendingValue(`blur`),this.touch.emit()}onControlPointerDown(){this.isReadonly()&&this.keyboardFocused.set(!1)}commitPendingValue(r){}clearPendingEdit(){}static ɵfac=function(e){return new(e||t)};static ɵdir=Z$1({type:t,hostVars:7,hostBindings:function(e,n){e&1&&ee(`pointerdown`,function(){return n.onControlPointerDown()}),e&2&&(ja(`hidden`,n.hidden()),De(`display`,n.hidden()?`none`:null),ae(`bx-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()))},inputs:{id:[1,`id`],label:[1,`label`],placeholder:[1,`placeholder`],tooltip:[1,`tooltip`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],error:[1,`error`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],dataTestId:[1,`dataTestId`],name:[1,`name`],errors:[1,`errors`],invalid:[1,`invalid`],pending:[1,`pending`],touched:[1,`touched`],dirty:[1,`dirty`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],hidden:[1,`hidden`],required:[1,`required`],loading:[1,`loading`],disabledReasons:[1,`disabledReasons`],submitted:[1,`submitted`],errorMessages:[1,`errorMessages`],errorPriority:[1,`errorPriority`],errorPolicy:[1,`errorPolicy`],errorMode:[1,`errorMode`],appearance:[1,`appearance`],floatLabel:[1,`floatLabel`],hideRequiredMarker:[1,`hideRequiredMarker`],subscriptSizing:[1,`subscriptSizing`],tooltipOnTruncate:[1,`tooltipOnTruncate`]},outputs:{touch:`touch`}})};var ie=class t extends re{edit=M(void 0);internalValue=g(()=>{let r=this.edit();return r?r.value:this.value()});value=ln$1(null);reset(){super.reset(),this.edit.set(void 0)}clearPendingEdit(){this.edit.set(void 0)}updateValue(r){if(this.disabled()||this.isReadonly())return;let e=this.ngControl?.control?.updateOn;e===`blur`||e===`submit`?this.edit.set({value:r}):this.value.set(r)}commitPendingValue(r){let e=this.edit();!e||r===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.value.set(e.value),this.edit.set(void 0))}static ɵfac=(()=>{let r;return function(n){return(r||(r=$o(t)))(n||t)}})();static ɵdir=Z$1({type:t,inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[yn]})};var an=[[[`bx-error`]],[[`bx-hint`]]];var ln=[`bx-error`,`bx-hint`];var dn=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var sn=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function bn(t,r){t&1&&we(0,`bx-loading-spinner`,4),t&2&&A(`size`,16)(`decorative`,!0)}function cn(t,r){t&1&&we(0,`bx-icon`,5)}function un(t,r){if(t&1){let e=yt();E(0,`button`,12),ee(`click`,function(){je$1(e);let a=w();return Fe(a.clear())}),we(1,`bx-icon`,13),D()}if(t&2){let e=w();A(`disabled`,e.disabled()||e.isReadonly()),F(`aria-label`,e.resolvedClearLabel())}}function pn(t,r){if(t&1&&(E(0,`span`,14),X(1),D(),E(2,`span`,14),X(3),D()),t&2){let e=w();y(),be(e.resolvedRetainedError()),y(2),be(e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel())}}function gn(t,r){if(t&1){let e=yt();E(0,`button`,15),ee(`click`,function(){je$1(e);let a=w();return Fe(a.retrySearch())}),we(1,`bx-icon`,16),X(2),D()}if(t&2){let e=w();gP(e.retryConfig().buttonClass??``),A(`variant`,e.retryConfig().variant??`text`)(`color`,e.retryConfig().color??`primary`)(`outlined`,e.retryConfig().outlined??!1)(`disabled`,e.disabled()||e.isReadonly())(`loading`,e.isBusy()),F(`aria-label`,e.resolvedRetryAriaLabel()),y(2),an$1(``,e.resolvedRetryLabel(),` `)}}var qe=class t extends ie{i18n=f(_e,{optional:!0});retryError=M(void 0);retrying=g(()=>this.retryError()!==void 0);resolvedClearLabel=g(()=>J(this.clearLabel(),this.i18n));resolvedLoadError=g(()=>J(this.loadError(),this.i18n));resolvedLoadingLabel=g(()=>J(this.loadingLabel(),this.i18n));resolvedLoadingAriaLabel=g(()=>J(this.loadingAriaLabel(),this.i18n));resolvedRetryLabel=g(()=>J(this.retryLabel(),this.i18n));resolvedRetryAriaLabel=g(()=>J(this.retryConfig().ariaLabel,this.i18n)||this.resolvedRetryLabel());resolvedRetainedError=g(()=>J(this.retryError()??this.loadError(),this.i18n));isBusy=g(()=>this.loading()||this.pending());showRetry=g(()=>!!this.loadError()||this.retrying());showStatus=g(()=>!!this.resolvedLoadError()||this.isBusy()&&(!!this.resolvedLoadingLabel()||this.showRetry()));searchDescribedBy=g(()=>`${this.describedBy()} ${this.controlId()}-search-status`);isCompact=g(()=>!!this.label()||this.compact());clearLabel=b(`Clear search`);autocomplete=b(`off`);loadError=b(void 0);loadingLabel=b(void 0);loadingAriaLabel=b(`Searching`);retryLabel=b(`Retry search`);retryConfig=b({});compact=b(!1);search=Be$1();retry=Be$1();composing=!1;constructor(){super(),de(()=>{this.retrying()&&!this.loading()&&this.retryError.set(void 0)})}clear(){this.disabled()||this.isReadonly()||(this.retryError.set(void 0),this.updateValue(``),this.search.emit(``),this.focus())}retrySearch(){this.disabled()||this.isReadonly()||this.isBusy()||this.retrying()||!this.loadError()||(this.retryError.set(this.loadError()),this.focus(),this.retry.emit(this.internalValue()??``))}onInput(r){if(this.composing||this.disabled()||this.isReadonly())return;let e=r.target.value;this.retryError.set(void 0),this.updateValue(e),this.search.emit(e)}onCompositionStart(){this.composing=!0}onCompositionEnd(r){this.composing=!1,this.onInput(r)}onBlur(){this.markAsTouched()}static ɵfac=function(e){return new(e||t)};static ɵcmp=W({type:t,selectors:[[`bx-search-input`]],inputs:{clearLabel:[1,`clearLabel`],autocomplete:[1,`autocomplete`],loadError:[1,`loadError`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],retryLabel:[1,`retryLabel`],retryConfig:[1,`retryConfig`],compact:[1,`compact`]},outputs:{search:`search`,retry:`retry`},features:[yn],ngContentSelectors:ln,decls:17,vars:50,consts:[[`searchOverflow`,`bxTruncate`],[3,`control`,`label`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`bxSurface`,``,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-search-input-wrapper`,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-search-icon-left`],[3,`size`,`decorative`],[`name`,`search`,`size`,`16`],[`type`,`search`,`bxTruncate`,``,1,`bx-native-search-input`,3,`input`,`blur`,`compositionstart`,`compositionend`,`id`,`placeholder`,`required`,`readOnly`,`disabled`,`value`],[`type`,`button`,1,`bx-search-clear-btn`,3,`disabled`],[1,`bx-search-feedback`],[1,`bx-search-status`],[`role`,`status`,3,`id`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`type`,`button`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`],[`aria-hidden`,`true`,1,`bx-search-status-reserve`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&(Re(an),E(0,`bx-form-field`,1)(1,`div`,2),Yo(2,`bxTruncatedText`),E(3,`span`,3),L(4,bn,1,2,`bx-loading-spinner`,4)(5,cn,1,0,`bx-icon`,5),D(),E(6,`input`,6,0),ee(`input`,function(u){return n.onInput(u)})(`blur`,function(){return n.onBlur()})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(u){return n.onCompositionEnd(u)}),D(),L(8,un,2,2,`button`,7),D(),E(9,`div`,8)(10,`div`,9),L(11,pn,4,2),E(12,`span`,10),X(13),D()(),L(14,gn,3,9,`button`,11),D(),me(15,0,dn),me(16,1,sn),D()),e&2){let a=Dt(7);A(`control`,n.fieldControl)(`label`,n.label())(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),y(),ae(`is-compact`,n.isCompact())(`is-invalid`,n.showError())(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),A(`bxTooltip`,Ko(2,46,a.text(),a.truncated(),n.resolvedTooltipOnTruncate())),y(3),j(n.isBusy()&&!n.showRetry()?4:5),y(2),A(`id`,n.controlId())(`placeholder`,n.resolvedPlaceholder())(`required`,n.effectiveRequired())(`readOnly`,n.isReadonly())(`disabled`,n.disabled())(`value`,n.internalValue()??``),F(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`autocomplete`,n.autocomplete())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.searchDescribedBy())(`aria-busy`,n.isBusy())(`aria-invalid`,n.showError()),y(2),j(n.internalValue()&&!n.isReadonly()?8:-1),y(),ae(`has-status`,n.showStatus()),y(),ae(`cdk-visually-hidden`,!n.showStatus()),y(),j(n.showRetry()?11:-1),y(),ae(`bx-search-error`,!n.isBusy()&&!!n.resolvedLoadError()),A(`id`,n.controlId()+`-search-status`),y(),be(n.isBusy()?n.resolvedLoadingLabel()||n.resolvedLoadingAriaLabel():n.resolvedLoadError()),y(),j(n.showRetry()?14:-1)}},dependencies:[It,ne,Bt,El,Z,zi,_o,wl],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
  min-inline-size: 0;
}
.bx-search-input-wrapper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 3.85rem;
  padding: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-3, 0.75rem);
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.bx-search-input-wrapper[_ngcontent-%COMP%]:hover:not(.is-disabled, .is-readonly) {
  border-color: var(--%NS%bx-border-strong);
}
.bx-search-input-wrapper[_ngcontent-%COMP%]:focus-within:not(.is-disabled, .is-readonly) {
  border-color: var(--%NS%bx-border-brand);
  box-shadow: 0 0 0 3px var(--%NS%bx-primary-subtle);
}
.bx-search-input-wrapper.is-compact[_ngcontent-%COMP%] {
  min-height: var(--%NS%bx-space-10, 2.5rem);
}
.bx-search-input-wrapper.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-search-input-wrapper.is-invalid[_ngcontent-%COMP%]:focus-within:not(.is-readonly) {
  box-shadow: 0 0 0 3px var(--%NS%bx-bg-danger-subtle);
}
.bx-search-input-wrapper.is-disabled[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  cursor: not-allowed;
}
.bx-search-icon-left[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 1rem;
  block-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  flex-shrink: 0;
}
.bx-native-search-input[_ngcontent-%COMP%] {
  flex: 1 1 0;
  min-width: 0;
  width: 0;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-2, 0.5rem) 0;
  background: transparent;
  border: none;
  outline: none;
  appearance: none;
  font-family: inherit;
  font-size: 0.875rem;
  color: var(--%NS%bx-text-heading);
}
.bx-native-search-input[_ngcontent-%COMP%]::-webkit-search-cancel-button, 
.bx-native-search-input[_ngcontent-%COMP%]::-webkit-search-decoration {
  appearance: none;
  display: none;
}
.bx-native-search-input[_ngcontent-%COMP%]::placeholder {
  color: var(--%NS%bx-text-secondary);
}
.bx-native-search-input[_ngcontent-%COMP%]:disabled {
  color: var(--%NS%bx-text-secondary);
  cursor: not-allowed;
}
.bx-native-search-input[readonly][_ngcontent-%COMP%]:not(:disabled) {
  cursor: default;
}
.bx-search-clear-btn[_ngcontent-%COMP%] {
  transition-property: color;
  transition-duration: calc(0.15s * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: transparent;
  border: none;
  padding: var(--%NS%bx-space-1, 0.25rem);
  inline-size: var(--%NS%bx-space-6, 1.5rem);
  block-size: var(--%NS%bx-space-6, 1.5rem);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
  flex-shrink: 0;
}
.bx-search-clear-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-search-clear-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-search-clear-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-search-clear-btn.hidden[_ngcontent-%COMP%] {
  opacity: 0;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}
.bx-search-feedback[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-items: start;
  gap: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.bx-search-feedback.has-status[_ngcontent-%COMP%] {
  padding-block-start: var(--%NS%bx-search-feedback-gap, var(--%NS%bx-space-2, 0.5rem));
}
.bx-readonly[_nghost-%COMP%]:not(:has(input:disabled))   button[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-search-status[_ngcontent-%COMP%] {
  display: grid;
  inline-size: 100%;
  min-inline-size: 0;
  line-height: 1.5;
}
.bx-search-status[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {
  grid-area: 1/1;
  overflow-wrap: anywhere;
}
.bx-search-status-reserve[_ngcontent-%COMP%] {
  visibility: hidden;
}
.bx-search-error[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-shadow: none;
}
.bx-search-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
}
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-search-input-wrapper[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-search-input-wrapper[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-search-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}`]})};export{ie as a,qe as c,ce as i,re as l,Ve as n,ne as o,Z as r,q as s,V as t,te as u};