import{$ as Is,$t as Te,An as Z$1,Ar as he,Br as ie$1,Ca as zn,Cn as XF,Dr as gr,E,Er as go,F as Fe,Fi as rp,Hi as si,Hn as ae,In as _e,Jr as jn,Jt as Se,Kr as je$1,Ln as _s,Mt as Or,Nn as _,Nr as hr,Nt as Ot,On as Ya,Pt as P,St as Mt,T as Ds,Un as ar,Ur as j,Vi as se,W as H,Xn as bn$1,_a as ye,ai as mr,an as V$1,ar as d1,at as K,b as D,bn as Wr,br as g,dn as Vn,fa as xe,fn as WF,g as Bl,gn as We$1,h as Bc,ia as vn,j as F,kn as Yf,li as nh,ln as Ve$1,ma as xt,mi as oe,n as $f,na as vb,nn as U,ot as Ka,p as B,qn as bb,r as $k,ra as ve,ta as v,ti as kn,ui as nn$1,vi as p,vr as fn,vt as Me,ya as z$1}from"./chunk-DhMqzCIY.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var z=class t{elementRef=p(z$1);static ɵfac=function(e){return new(e||t)};static ɵdir=B({type:t,selectors:[[``,`bxButtonIcon`,``]]})};var Ve=[`*`];function qe(t,r){if(t&1&&Ve$1(0,`bx-loading-spinner`,1),t&2){let e=F();ae(`size`,e.spinnerSize())(`decorative`,!0)}}var Z=class t{bxA11yService=p(Fe);projectedIcon=Or(fn);iconElement=Or(fn,{read:z$1});customIcon=Or(z);spinnerSize=_(20);isAnimated=v(()=>!this.bxA11yService.isReducedMotion());isDisabled=v(()=>this.disabled()||this.loading());variant=g(`text`);color=g(`primary`);outlined=g(!1);elevated=g(!1);disabled=g(!1,{transform:P});loading=g(!1,{transform:P});interactive=g(!0,{transform:P});surfaceEffects=g(!0,{transform:P});glassiness=g();constructor(){$k(()=>({glassiness:this.glassiness(),interactive:this.variant()===`text`||!this.interactive()||this.isDisabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.isDisabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:this.color()===`accent`?`var(--bx-accent)`:`var(--bx-text-${this.color()})`:void 0}),()=>this.surfaceEffects()),mr(r=>{let e=this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement,n=Number(this.projectedIcon()?.size()),a=e?.offsetWidth;if(this.spinnerSize.set(a||(Number.isFinite(n)&&n>0?n:20)),!e||!this.loading())return;let u=e.style.display;e.style.display=`none`,r(()=>{e.style.display=u})})}onClick(r){this.isDisabled()&&(r.preventDefault(),r.stopImmediatePropagation())}static ɵfac=function(e){return new(e||t)};static ɵcmp=V$1({type:t,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],contentQueries:function(e,n,a){e&1&&kn(a,n.projectedIcon,fn,5)(a,n.iconElement,fn,5,z$1)(a,n.customIcon,z,5),e&2&&Mt(3)},hostVars:14,hostBindings:function(e,n){e&1&&ve(`click`,function(u){return n.onClick(u)}),e&2&&(H(`disabled`,n.isDisabled()?!0:null)(`aria-disabled`,n.isDisabled())(`aria-busy`,n.loading()?`true`:null)(`tabindex`,n.isDisabled()?`-1`:null),d1(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),he(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],loading:[1,`loading`],interactive:[1,`interactive`],surfaceEffects:[1,`surfaceEffects`],glassiness:[1,`glassiness`]},ngContentSelectors:Ve,decls:3,vars:1,consts:[[1,`bx-btn-content-wrapper`],[3,`size`,`decorative`]],template:function(e,n){e&1&&(Me(),j(0,`span`,0),oe(1,qe,1,2,`bx-loading-spinner`,1),se(2),U()),e&2&&(D(),ie$1(n.loading()?1:-1))},dependencies:[nh],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-button-pressure: var(--%NS%bx-glass-press, 0);
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
  border: 1px solid transparent;
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
.bx-btn-text[_nghost-%COMP%], 
.bx-btn-filled[_nghost-%COMP%], 
.bx-btn-tonal[_nghost-%COMP%] {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.bx-btn-icon[_nghost-%COMP%], 
.bx-btn-fab[_nghost-%COMP%], 
.bx-btn-mini-fab[_nghost-%COMP%] {
  padding: 0;
  border-radius: 9999px;
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
  border-radius: 9999px;
}
.bx-btn-is-outlined[_nghost-%COMP%] {
  border-color: var(--%NS%btn-theme-border);
}
.bx-btn-is-elevated[_nghost-%COMP%] {
  box-shadow: 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12);
}
.bx-btn-is-elevated[_nghost-%COMP%]:not(.bx-btn-non-interactive):active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
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
.bx-btn-animated[_nghost-%COMP%]:not(.bx-btn-non-interactive, [disabled], [aria-disabled=true], [data-bx-reduced-motion=true])   .bx-btn-content-wrapper[_ngcontent-%COMP%] {
  transform: translateY(calc(var(--%NS%bx-button-pressure) * var(--%NS%bx-button-press-offset, 1px))) scale(calc(1 - var(--%NS%bx-button-pressure) * var(--%NS%bx-button-press-compression, 0.035)));
}
[data-bx-reduced-motion=true][_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%] {
  transform: none;
  transition: none;
}
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-animated   .bx-btn-content-wrapper[_ngcontent-%COMP%], 
.bx-btn-text.bx-btn-animated[_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%] {
  transition: transform 140ms ease-out;
}
[_nghost-%COMP%]:not([data-bx-surface]):active:not(.bx-btn-non-interactive, [disabled], [aria-disabled=true]), 
.bx-btn-text[_nghost-%COMP%]:active:not(.bx-btn-non-interactive, [disabled], [aria-disabled=true]) {
  --%NS%bx-button-pressure: 1;
}
[data-bx-surface][_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]) {
  border-radius: var(--%NS%bx-glass-radius, 0.5rem);
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-text: var(--%NS%btn-theme-tonal-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-min-opacity: 0;
  border-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 2px 4px rgb(0 0 0 / 8%);
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
  --%NS%bx-glass-shadow: 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12);
}
[data-bx-surface].bx-btn-icon[_nghost-%COMP%], 
[data-bx-surface].bx-btn-fab[_nghost-%COMP%], 
[data-bx-surface].bx-btn-mini-fab[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-icon, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-fab, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-mini-fab {
  border-radius: var(--%NS%bx-glass-radius, 9999px);
}
[data-bx-surface].bx-btn-extended-fab[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-extended-fab {
  border-radius: var(--%NS%bx-glass-radius, 9999px);
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
}`]})};var He=[`*`];var V=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=V$1({type:t,selectors:[[`bx-error`]],hostAttrs:[`aria-live`,`polite`],ngContentSelectors:He,decls:1,vars:0,template:function(e,n){e&1&&(Me(),se(0))},encapsulation:2})};var We=[`*`];var q=class t{align=g(`start`);static ɵfac=function(e){return new(e||t)};static ɵcmp=V$1({type:t,selectors:[[`bx-hint`]],hostVars:2,hostBindings:function(e,n){e&2&&ye(`margin-inline-start`,n.align()===`end`?`auto`:null)},inputs:{align:[1,`align`]},ngContentSelectors:We,decls:1,vars:0,template:function(e,n){e&1&&(Me(),se(0))},encapsulation:2})};var ce=new E(`BX_FORM_FIELD_CONTROL`);var $e=[[[``,`bxPrefix`,``]],`*`,[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Ge=[`[bxPrefix]`,`*`,`[bxSuffix]`,`bx-error`,`bx-hint`];var Xe=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Qe=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Ye(t,r){t&1&&(j(0,`span`,11),Te(1,`*`),U())}function Ue(t,r){if(t&1&&(j(0,`div`,1)(1,`label`,10),Te(2),oe(3,Ye,2,0,`span`,11),U()()),t&2){let e=F();D(),H(`for`,e.controlId()),D(),gr(``,e.resolvedLabel(),` `),D(),ie$1(e.isRequired()&&!e.hideRequiredMarker()?3:-1)}}function Ke(t,r){t&1&&Ve$1(0,`bx-loading-spinner`,3),t&2&&ae(`size`,16)(`decorative`,!0)}function Je(t,r){if(t&1&&(j(0,`button`,4),Ve$1(1,`bx-icon`,12),U()),t&2){let e=F();ae(`bxTooltip`,e.tooltip()),H(`aria-label`,e.resolvedTooltipLabel())}}function Ze(t,r){t&1&&Ve$1(0,`bx-icon`,14)}function en(t,r){if(t&1&&(j(0,`div`,15),Te(1),U()),t&2){let e=r.$implicit;D(),je$1(e)}}function nn(t,r){if(t&1&&(j(0,`div`,13),oe(1,Ze,1,0,`bx-icon`,14),j(2,`div`),Vn(3,en,2,1,`div`,15,Bl),U()()),t&2){let e=F();he(`bx-animated`,e.isAnimated()),D(),ie$1(e.messages().length?1:-1),D(2),jn(e.messages())}}var ne=class t{i18n=p(_e,{optional:!0});bxA11yService=p(Fe);nativeElement=p(z$1).nativeElement;bxGlassLightingService=p($f);generatedId=`bx-field-${Wr()}`;projectedControl=Or(ce);activeControl=v(()=>this.control()??this.projectedControl());controlId=v(()=>this.forId()||this.activeControl()?.controlId()||this.generatedId);resolvedLabel=v(()=>xe(this.label()??(this.inline()?void 0:this.activeControl()?.label()),this.i18n));resolvedError=v(()=>xe(this.error(),this.i18n));resolvedHint=v(()=>xe(this.hint(),this.i18n));resolvedHintEnd=v(()=>xe(this.hintEnd(),this.i18n));resolvedTooltipLabel=v(()=>xe(this.tooltipLabel(),this.i18n));showErrors=v(()=>this.activeControl()?.showError()??(!!this.error()||!!this.projectedError()||this.errors().length>0));messages=v(()=>this.resolvedError()?[this.resolvedError()]:this.activeControl()?.errorTexts()??this.errors());isRequired=v(()=>this.required()||this.activeControl()?.required());isLoading=v(()=>this.loading()||this.activeControl()?.pending());hideSubscript=v(()=>this.subscriptSizing()===`dynamic`&&!this.showErrors()&&!this.resolvedHint()&&!this.resolvedHintEnd()&&!this.projectedHint());projectedError=Or(V);projectedHint=Or(q);isAnimated=v(()=>!this.bxA11yService.isReducedMotion());inline=g(!1);control=g(void 0);label=g(void 0);tooltip=g(void 0);tooltipLabel=g(`More information`);error=g(void 0);errors=g([]);hint=g(void 0);hintEnd=g(void 0);required=g(!1);hideRequiredMarker=g(!1);loading=g(!1);showLoadingIndicator=g(!0);forId=g(``);subscriptSizing=g(`fixed`);constructor(){mr(r=>{this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);let e=this.nativeElement.querySelector(`input,textarea,select,button[role="combobox"]`);if(e){let L=new Set((e.getAttribute(`aria-describedby`)??``).split(` `).filter(Boolean));L.add(`${this.controlId()}-description`),e.setAttribute(`aria-describedby`,[...L].join(` `)),e.setAttribute(`aria-invalid`,String(this.showErrors())),e.setAttribute(`aria-required`,String(!!this.isRequired()))}if(!this.showErrors())return;let n=this.nativeElement.parentElement,a=this.nativeElement.closest(`form, fieldset`)??n,u=this.nativeElement.querySelector(`.bx-field-control > [data-bx-surface]`);if(!a||!u)return;let D=this.bxGlassLightingService.register(a,{element:u,edge:`bottom`,offsetX:.5,offsetY:1,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});r(()=>D.destroy())})}static ɵfac=function(e){return new(e||t)};static ɵcmp=V$1({type:t,selectors:[[`bx-form-field`]],contentQueries:function(e,n,a){e&1&&kn(a,n.projectedControl,ce,5)(a,n.projectedError,V,5)(a,n.projectedHint,q,5),e&2&&Mt(3)},inputs:{inline:[1,`inline`],control:[1,`control`],label:[1,`label`],tooltip:[1,`tooltip`],tooltipLabel:[1,`tooltipLabel`],error:[1,`error`],errors:[1,`errors`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],required:[1,`required`],hideRequiredMarker:[1,`hideRequiredMarker`],loading:[1,`loading`],showLoadingIndicator:[1,`showLoadingIndicator`],forId:[1,`forId`],subscriptSizing:[1,`subscriptSizing`]},ngContentSelectors:Ge,decls:18,vars:17,consts:[[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[3,`size`,`decorative`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-subscript`,3,`hidden`,`id`],[1,`bx-field-error-projected`,3,`hidden`],[`aria-live`,`polite`,1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-hints`,3,`hidden`],[1,`bx-field-hint-end`],[1,`bx-field-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`name`,`help-circle`,`size`,`16`],[`aria-live`,`polite`,1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(Me($e),j(0,`div`,0),oe(1,Ue,4,3,`div`,1),j(2,`div`,2),se(3),se(4,1),se(5,2),oe(6,Ke,1,2,`bx-loading-spinner`,3),oe(7,Je,2,2,`button`,4),U(),j(8,`div`,5)(9,`div`,6),se(10,3,Xe),U(),oe(11,nn,5,3,`div`,7),j(12,`div`,8)(13,`span`),Te(14),U(),se(15,4,Qe),j(16,`span`,9),Te(17),U()()()()),e&2&&(he(`is-invalid`,n.showErrors())(`dynamic-subscript`,n.subscriptSizing()===`dynamic`),H(`data-bx-field-invalid`,n.showErrors()),D(),ie$1(n.resolvedLabel()?1:-1),D(),he(`bx-field-control-inline`,n.inline()),D(4),ie$1(n.showLoadingIndicator()&&n.isLoading()?6:-1),D(),ie$1(n.tooltip()?7:-1),D(),ae(`hidden`,n.hideSubscript())(`id`,n.controlId()+`-description`),D(),ae(`hidden`,!n.showErrors()),D(2),ie$1(n.showErrors()&&!n.projectedError()?11:-1),D(),ae(`hidden`,n.showErrors()),D(2),je$1(n.resolvedHint()),D(3),je$1(n.resolvedHintEnd()))},dependencies:[fn,Is,nh],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-field-wrapper[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
  padding-bottom: var(--%NS%bx-field-padding-bottom, 0);
}
.bx-field-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
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
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--%NS%bx-text-danger);
  position: relative;
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
}
.bx-field-error.bx-animated[_ngcontent-%COMP%], 
.bx-field-error-projected.bx-animated[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bx-slide-down 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
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
  gap: 0.25rem;
}
.bx-field-control-inline[_ngcontent-%COMP%]   .bx-field-tooltip-trigger[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%] {
  border-radius: 0.25rem;
  padding: 0.25rem;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-field-error[_ngcontent-%COMP%] {
  align-items: flex-start;
}
.bx-field-subscript[_ngcontent-%COMP%] {
  min-block-size: var(--%NS%bx-field-subscript-height, 1.5rem);
}
.dynamic-subscript[_ngcontent-%COMP%]   .bx-field-subscript[_ngcontent-%COMP%] {
  min-block-size: 0;
}
.bx-field-hints[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
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
  padding-inline: var(--%NS%bx-field-support-padding, 0.75rem);
}`]})};var ke={errorPolicy:`touched`,errorMode:`first`,errorMessages:{required:`This field is required.`,email:`Enter a valid email address.`,minLength:({params:t})=>`Enter at least ${t.minLength??t.requiredLength} characters.`,maxLength:({params:t})=>`Enter no more than ${t.maxLength??t.requiredLength} characters.`,min:({params:t})=>`Enter a value of at least ${t.min}.`,max:({params:t})=>`Enter a value of no more than ${t.max}.`,pattern:`Enter a value in the required format.`,parse:`Enter a valid value.`,invalid:`Invalid value.`},appearance:`fill`,floatLabel:`auto`,hideRequiredMarker:!1,subscriptSizing:`fixed`,tooltipOnTruncate:!0};var Be={minlength:`minLength`,maxlength:`maxLength`};function je(t,r$1,e,n){let a=Be[t.kind]??t.kind,u=`context`in t?t.context:void 0,D=u!==null&&typeof u==`object`?r({},u):r({},t),L=r$1[t.kind]??r$1[a],ze=t.message??(typeof u==`string`?u:typeof D.message==`string`?D.message:void 0),oe=L??ze??e[t.kind]??e[a]??e.invalid??`Invalid value.`;return xe(typeof oe==`function`?oe({kind:a,error:t,params:D}):oe,n,D)}var te=class t{state=_(r({},ke));settings=this.state.asReadonly();update(r$2){this.state.update(e=>s(r(r({},e),r$2),{errorMessages:r(r({},e.errorMessages),r$2.errorMessages)}))}static ɵfac=function(e){return new(e||t)};static ɵprov=K({token:t,factory:t.ɵfac,providedIn:`root`})};var re=class t{textAdapter=p(_e,{optional:!0});formSettingsService=p(te);formGroupDirective=p(XF,{optional:!0,skipSelf:!0});ngForm=p(WF,{optional:!0,skipSelf:!0});focusMonitor=p(Bc);destroyRef=p(Z$1);nativeElement=p(z$1).nativeElement;ngControl=p(ar,{optional:!0,self:!0});generatedId=`bx-field-${Wr()}`;submittedByParent=_(!1);extraDescriptions=_([]);localTouched=_(!1);controlVersion=_(0);currentErrors=v(()=>{if(this.controlVersion(),this.errors().length)return this.errors();let r=this.ngControl?.errors;return r?Object.entries(r).map(([e,n])=>({kind:e,context:n})):[]});keyboardFocused=_(!1);isReadonly=v(()=>this.readonly()||this.readOnly());controlId=v(()=>this.id()??this.generatedId);resolvedLabel=v(()=>xe(this.label(),this.textAdapter));resolvedPlaceholder=v(()=>xe(this.placeholder(),this.textAdapter));resolvedAppearance=v(()=>this.appearance()??this.formSettingsService.settings().appearance);resolvedFloatLabel=v(()=>this.floatLabel()??this.formSettingsService.settings().floatLabel);resolvedHideRequiredMarker=v(()=>this.hideRequiredMarker()??this.formSettingsService.settings().hideRequiredMarker);resolvedSubscriptSizing=v(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);resolvedTooltipOnTruncate=v(()=>this.tooltipOnTruncate()??this.formSettingsService.settings().tooltipOnTruncate??!0);describedBy=v(()=>[...new Set([this.ariaDescribedBy(),`${this.controlId()}-description`,...this.extraDescriptions()].filter(Boolean))].join(` `));effectiveDisabled=v(()=>(this.controlVersion(),this.disabled()||this.ngControl?.disabled===!0));effectiveRequired=v(()=>{this.controlVersion();let r=this.ngControl?.control;return this.required()||!!r?.hasValidator?.(_s.required)||!!r?.hasValidator?.(_s.requiredTrue)});showError=v(()=>{this.controlVersion();let r={invalid:this.invalid()||this.currentErrors().length>0||!!this.error(),touched:this.ngControl?.touched??(this.touched()||this.localTouched()),dirty:this.ngControl?.dirty??this.dirty(),submitted:this.submitted()||this.submittedByParent(),disabled:this.effectiveDisabled(),pending:this.pending()},e=this.errorPolicy()??this.formSettingsService.settings().errorPolicy;return r.disabled||!r.invalid?!1:typeof e==`function`?e(r):e===`always`||r.submitted||(e===`dirty`?r.dirty:e===`touched`?r.touched:!1)});errorTexts=v(()=>{if(!this.showError())return[];if(this.error())return[xe(this.error(),this.textAdapter)];let r=this.errorPriority(),e=[...this.currentErrors()].sort((a,u)=>{let D=r.indexOf(a.kind),L=r.indexOf(u.kind);return(D<0?r.length:D)-(L<0?r.length:L)});return((this.errorMode()??this.formSettingsService.settings().errorMode)===`all`?e:e.slice(0,1)).map(a=>je(a,this.errorMessages(),this.formSettingsService.settings().errorMessages,this.textAdapter))});fieldControl;id=g(void 0);label=g(void 0);placeholder=g(void 0);tooltip=g(void 0);hint=g(void 0);hintEnd=g(void 0);error=g(void 0);ariaLabel=g(void 0);ariaLabelledBy=g(void 0);ariaDescribedBy=g(void 0);dataTestId=g(void 0);name=g(``);errors=g([]);invalid=g(!1);pending=g(!1);touched=g(!1);dirty=g(!1);disabled=g(!1,{transform:P});readonly=g(!1,{transform:P});readOnly=g(!1,{transform:P});hidden=g(!1,{transform:P});required=g(!1,{transform:P});loading=g(!1,{transform:P});disabledReasons=g([]);submitted=g(!1);errorMessages=g({});errorPriority=g([]);errorPolicy=g(void 0);errorMode=g(void 0);appearance=g(void 0);floatLabel=g(void 0);hideRequiredMarker=g(void 0);subscriptSizing=g(void 0);tooltipOnTruncate=g(void 0);touch=xt();constructor(){this.fieldControl={controlId:this.controlId,label:this.label,showError:this.showError,errorTexts:this.errorTexts,required:this.effectiveRequired,disabled:this.effectiveDisabled,pending:this.pending,focus:e=>this.focus(e),setDescribedByIds:e=>{this.extraDescriptions().join(` `)!==e.join(` `)&&this.extraDescriptions.set(e)}},We$1(()=>{this.focusMonitor.monitor(this.nativeElement,!0).pipe(rp(this.destroyRef)).subscribe(a=>this.keyboardFocused.set(a===`keyboard`)),this.destroyRef.onDestroy(()=>this.focusMonitor.stopMonitoring(this.nativeElement));let e=this.nativeElement.closest(`form`),n=()=>{this.submittedByParent.set(!0),this.commitPendingValue()};e?.addEventListener(`submit`,n,{capture:!0}),this.destroyRef.onDestroy(()=>e?.removeEventListener(`submit`,n,{capture:!0}))}),(this.formGroupDirective??this.ngForm)?.ngSubmit.pipe(rp(p(Z$1))).subscribe(()=>{this.submittedByParent.set(!0),this.commitPendingValue()})}ngOnInit(){this.ngControl?.control?.events?.pipe(rp(this.destroyRef)).subscribe(()=>{this.controlVersion.update(e=>e+1)}),this.ngControl?.control?.valueChanges?.pipe(rp(this.destroyRef)).subscribe(()=>this.clearPendingEdit()),(this.formGroupDirective??this.ngForm)?.form.events.pipe(rp(this.destroyRef)).subscribe(e=>{e instanceof Ds&&this.reset()})}focus(r){this.nativeElement.querySelector(`input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)`)?.focus(r)}reset(){this.localTouched.set(!1),this.submittedByParent.set(!1)}markAsTouched(){this.localTouched.set(!0),this.commitPendingValue(`blur`),this.touch.emit()}onControlPointerDown(){this.isReadonly()&&this.keyboardFocused.set(!1)}commitPendingValue(r){}clearPendingEdit(){}static ɵfac=function(e){return new(e||t)};static ɵdir=B({type:t,hostVars:7,hostBindings:function(e,n){e&1&&ve(`pointerdown`,function(){return n.onControlPointerDown()}),e&2&&(Ka(`hidden`,n.hidden()),ye(`display`,n.hidden()?`none`:null),he(`bx-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()))},inputs:{id:[1,`id`],label:[1,`label`],placeholder:[1,`placeholder`],tooltip:[1,`tooltip`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],error:[1,`error`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],dataTestId:[1,`dataTestId`],name:[1,`name`],errors:[1,`errors`],invalid:[1,`invalid`],pending:[1,`pending`],touched:[1,`touched`],dirty:[1,`dirty`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],hidden:[1,`hidden`],required:[1,`required`],loading:[1,`loading`],disabledReasons:[1,`disabledReasons`],submitted:[1,`submitted`],errorMessages:[1,`errorMessages`],errorPriority:[1,`errorPriority`],errorPolicy:[1,`errorPolicy`],errorMode:[1,`errorMode`],appearance:[1,`appearance`],floatLabel:[1,`floatLabel`],hideRequiredMarker:[1,`hideRequiredMarker`],subscriptSizing:[1,`subscriptSizing`],tooltipOnTruncate:[1,`tooltipOnTruncate`]},outputs:{touch:`touch`}})};var ie=class t extends re{edit=_(void 0);internalValue=v(()=>{let r=this.edit();return r?r.value:this.value()});value=zn(null);reset(){super.reset(),this.edit.set(void 0)}clearPendingEdit(){this.edit.set(void 0)}updateValue(r){if(this.disabled()||this.isReadonly())return;let e=this.ngControl?.control?.updateOn;e===`blur`||e===`submit`?this.edit.set({value:r}):this.value.set(r)}commitPendingValue(r){let e=this.edit();!e||r===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.value.set(e.value),this.edit.set(void 0))}static ɵfac=(()=>{let r;return function(n){return(r||(r=go(t)))(n||t)}})();static ɵdir=B({type:t,inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[nn$1]})};var tn=[[[`bx-error`]],[[`bx-hint`]]];var rn=[`bx-error`,`bx-hint`];var on=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var an=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function ln(t,r){t&1&&Ve$1(0,`bx-loading-spinner`,4),t&2&&ae(`size`,16)(`decorative`,!0)}function dn(t,r){t&1&&Ve$1(0,`bx-icon`,5)}function sn(t,r){if(t&1){let e=hr();j(0,`button`,12),ve(`click`,function(){bn$1(e);let a=F();return vn(a.clear())}),Ve$1(1,`bx-icon`,13),U()}if(t&2){let e=F();ae(`disabled`,e.disabled()||e.isReadonly()),H(`aria-label`,e.resolvedClearLabel())}}function bn(t,r){if(t&1&&(j(0,`span`,14),Te(1),U(),j(2,`span`,14),Te(3),U()),t&2){let e=F();D(),je$1(e.resolvedRetainedError()),D(2),je$1(e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel())}}function cn(t,r){if(t&1){let e=hr();j(0,`button`,15),ve(`click`,function(){bn$1(e);let a=F();return vn(a.retrySearch())}),Ve$1(1,`bx-icon`,16),Te(2),U()}if(t&2){let e=F();d1(e.retryConfig().buttonClass??``),ae(`variant`,e.retryConfig().variant??`text`)(`color`,e.retryConfig().color??`primary`)(`outlined`,e.retryConfig().outlined??!1)(`disabled`,e.disabled()||e.isReadonly())(`loading`,e.isBusy()),H(`aria-label`,e.resolvedRetryAriaLabel()),D(2),gr(``,e.resolvedRetryLabel(),` `)}}var Ae=class t extends ie{i18n=p(_e,{optional:!0});retryError=_(void 0);retrying=v(()=>this.retryError()!==void 0);resolvedClearLabel=v(()=>xe(this.clearLabel(),this.i18n));resolvedLoadError=v(()=>xe(this.loadError(),this.i18n));resolvedLoadingLabel=v(()=>xe(this.loadingLabel(),this.i18n));resolvedLoadingAriaLabel=v(()=>xe(this.loadingAriaLabel(),this.i18n));resolvedRetryLabel=v(()=>xe(this.retryLabel(),this.i18n));resolvedRetryAriaLabel=v(()=>xe(this.retryConfig().ariaLabel,this.i18n)||this.resolvedRetryLabel());resolvedRetainedError=v(()=>xe(this.retryError()??this.loadError(),this.i18n));isBusy=v(()=>this.loading()||this.pending());showRetry=v(()=>!!this.loadError()||this.retrying());showStatus=v(()=>!!this.resolvedLoadError()||this.isBusy()&&(!!this.resolvedLoadingLabel()||this.showRetry()));searchDescribedBy=v(()=>`${this.describedBy()} ${this.controlId()}-search-status`);isCompact=v(()=>!!this.label()||this.compact());clearLabel=g(`Clear search`);autocomplete=g(`off`);loadError=g(void 0);loadingLabel=g(void 0);loadingAriaLabel=g(`Searching`);retryLabel=g(`Retry search`);retryConfig=g({});compact=g(!1);search=xt();retry=xt();composing=!1;constructor(){super(),Se(()=>{this.retrying()&&!this.loading()&&this.retryError.set(void 0)})}clear(){this.disabled()||this.isReadonly()||(this.retryError.set(void 0),this.updateValue(``),this.search.emit(``),this.focus())}retrySearch(){this.disabled()||this.isReadonly()||this.isBusy()||this.retrying()||!this.loadError()||(this.retryError.set(this.loadError()),this.focus(),this.retry.emit(this.internalValue()??``))}onInput(r){if(this.composing||this.disabled()||this.isReadonly())return;let e=r.target.value;this.retryError.set(void 0),this.updateValue(e),this.search.emit(e)}onCompositionStart(){this.composing=!0}onCompositionEnd(r){this.composing=!1,this.onInput(r)}onBlur(){this.markAsTouched()}static ɵfac=function(e){return new(e||t)};static ɵcmp=V$1({type:t,selectors:[[`bx-search-input`]],inputs:{clearLabel:[1,`clearLabel`],autocomplete:[1,`autocomplete`],loadError:[1,`loadError`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],retryLabel:[1,`retryLabel`],retryConfig:[1,`retryConfig`],compact:[1,`compact`]},outputs:{search:`search`,retry:`retry`},features:[nn$1],ngContentSelectors:rn,decls:17,vars:50,consts:[[`searchOverflow`,`bxTruncate`],[3,`control`,`label`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`bxSurface`,``,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-search-input-wrapper`,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-search-icon-left`],[3,`size`,`decorative`],[`name`,`search`,`size`,`16`],[`type`,`search`,`bxTruncate`,``,1,`bx-native-search-input`,3,`input`,`blur`,`compositionstart`,`compositionend`,`id`,`placeholder`,`required`,`readOnly`,`disabled`,`value`],[`type`,`button`,1,`bx-search-clear-btn`,3,`disabled`],[1,`bx-search-feedback`],[1,`bx-search-status`],[`role`,`status`,3,`id`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`type`,`button`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`],[`aria-hidden`,`true`,1,`bx-search-status-reserve`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&(Me(tn),j(0,`bx-form-field`,1)(1,`div`,2),bb(2,`bxTruncatedText`),j(3,`span`,3),oe(4,ln,1,2,`bx-loading-spinner`,4)(5,dn,1,0,`bx-icon`,5),U(),j(6,`input`,6,0),ve(`input`,function(u){return n.onInput(u)})(`blur`,function(){return n.onBlur()})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(u){return n.onCompositionEnd(u)}),U(),oe(8,sn,2,2,`button`,7),U(),j(9,`div`,8)(10,`div`,9),oe(11,bn,4,2),j(12,`span`,10),Te(13),U()(),oe(14,cn,3,9,`button`,11),U(),se(15,0,on),se(16,1,an),U()),e&2){let a=Ya(7);ae(`control`,n.fieldControl)(`label`,n.label())(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),D(),he(`is-compact`,n.isCompact())(`is-invalid`,n.showError())(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),ae(`bxTooltip`,vb(2,46,a.text(),a.truncated(),n.resolvedTooltipOnTruncate())),D(3),ie$1(n.isBusy()&&!n.showRetry()?4:5),D(2),ae(`id`,n.controlId())(`placeholder`,n.resolvedPlaceholder())(`required`,n.effectiveRequired())(`readOnly`,n.isReadonly())(`disabled`,n.disabled())(`value`,n.internalValue()??``),H(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`autocomplete`,n.autocomplete())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.searchDescribedBy())(`aria-busy`,n.isBusy())(`aria-invalid`,n.showError()),D(2),ie$1(n.internalValue()&&!n.isReadonly()?8:-1),D(),he(`has-status`,n.showStatus()),D(),he(`cdk-visually-hidden`,!n.showStatus()),D(),ie$1(n.showRetry()?11:-1),D(),he(`bx-search-error`,!n.isBusy()&&!!n.resolvedLoadError()),ae(`id`,n.controlId()+`-search-status`),D(),je$1(n.isBusy()?n.resolvedLoadingLabel()||n.resolvedLoadingAriaLabel():n.resolvedLoadError()),D(),ie$1(n.showRetry()?14:-1)}},dependencies:[Ot,ne,fn,nh,Z,Is,si,Yf],styles:[`
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
  padding: 0.25rem 0.5rem 0.25rem 0.75rem;
  gap: 0.5rem;
}
.bx-search-input-wrapper[_ngcontent-%COMP%]:hover:not(.is-disabled, .is-readonly) {
  border-color: var(--%NS%bx-border-strong);
}
.bx-search-input-wrapper[_ngcontent-%COMP%]:focus-within:not(.is-disabled, .is-readonly) {
  border-color: var(--%NS%bx-border-brand);
  box-shadow: 0 0 0 3px var(--%NS%bx-primary-subtle);
}
.bx-search-input-wrapper.is-compact[_ngcontent-%COMP%] {
  min-height: 2.5rem;
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
  padding: 0.5rem 0;
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
  padding: 0.25rem;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  border-radius: 0.25rem;
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
  gap: 0.5rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.bx-search-feedback.has-status[_ngcontent-%COMP%] {
  padding-block-start: var(--%NS%bx-search-feedback-gap, 0.5rem);
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
  border: 1px solid var(--%NS%bx-glass-edge);
  border-radius: 0.75rem;
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
}`]})};export{ie as a,re as c,ce as i,te as l,V as n,ne as o,Z as r,q as s,Ae as t};