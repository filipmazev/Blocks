import{Br as g,Bt as P,Ct as Me,D as Do,Ei as ne$1,Et as Mt,F as Fn,Gr as h,Hi as pe,Hn as Z$1,Ht as Pe,Ii as on$1,Ir as fM,It as Oe,J as I,Ka as ze$1,Li as oo,Lr as fe,Lt as Og,Ma as wn,Mr as ee,Na as xe,Oa as wF,Ri as p,Si as mr,Sr as da,Ta as vi,Tt as Mn,Ua as z$1,Va as yp,Vr as gF,W as H,Ya as zt,ai as jn,ca as so,da as te$1,er as am,hn as Va,ht as LA,in as To,ir as be,ja as wm,jr as ed,jt as No,la as st,nn as St,o as A,on as Ua,or as bt,p as Ba,pa as tn$1,rn as Te,rr as at,si as k,t as $,tn as Se,tt as In,u as B,un as Ur,v as C,w as D,x as Ce,xa as un$1,xi as me,xn as W,ya as ue,z as G,zn as Yn}from"./chunk-BR06ksVJ.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var z=class t{elementRef=p(H);static ɵfac=function(e){return new(e||t)};static ɵdir=G({type:t,selectors:[[``,`bxButtonIcon`,``]]})};var ke={text:0,icon:.45,outlined:.45,tonal:.65,filled:1.1};var Be={primary:1,accent:1,success:1,info:1,warn:1.04,danger:1.1,grayscale:.35};function je(t,r,e){return ke[t===`text`?`text`:r?`outlined`:t===`tonal`?`tonal`:t===`icon`?`icon`:`filled`]*Be[e]}var We=[`*`];function $e(t,r){if(t&1&&Oe(0,`bx-loading-spinner`,1),t&2){let e=C();B(`size`,e.spinnerSize())(`decorative`,!0)}}var Z=class t{bxA11yService=p(Pe);projectedIcon=Ur(on$1);iconElement=Ur(on$1,{read:H});customIcon=Ur(z);spinnerSize=D(20);isAnimated=g(()=>!this.bxA11yService.isReducedMotion());isDisabled=g(()=>this.disabled()||this.loading());variant=h(`text`);color=h(`primary`);outlined=h(!1);elevated=h(!1);disabled=h(!1,{transform:z$1});loading=h(!1,{transform:z$1});interactive=h(!0,{transform:z$1});surfaceEffects=h(!0,{transform:z$1});glassiness=h();constructor(){fM(()=>({glassiness:this.glassiness(),emissionStrength:je(this.variant(),this.outlined(),this.color()),interactive:this.variant()===`text`||!this.interactive()||this.isDisabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.isDisabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:this.color()===`accent`?`var(--bx-accent)`:`var(--bx-text-${this.color()})`:void 0}),()=>this.surfaceEffects()),Fn(r=>{let e=this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement,n=Number(this.projectedIcon()?.size()),a=e?.offsetWidth;if(this.spinnerSize.set(a||(Number.isFinite(n)&&n>0?n:20)),!e||!this.loading())return;let u=e.style.display;e.style.display=`none`,r(()=>{e.style.display=u})})}onClick(r){this.isDisabled()&&(r.preventDefault(),r.stopImmediatePropagation())}static ɵfac=function(e){return new(e||t)};static ɵcmp=$({type:t,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],contentQueries:function(e,n,a){e&1&&jn(a,n.projectedIcon,on$1,5)(a,n.iconElement,on$1,5,H)(a,n.customIcon,z,5),e&2&&St(3)},hostVars:14,hostBindings:function(e,n){e&1&&ue(`click`,function(u){return n.onClick(u)}),e&2&&(W(`disabled`,n.isDisabled()?!0:null)(`aria-disabled`,n.isDisabled())(`aria-busy`,n.loading()?`true`:null)(`tabindex`,n.isDisabled()?`-1`:null),LA(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),pe(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],loading:[1,`loading`],interactive:[1,`interactive`],surfaceEffects:[1,`surfaceEffects`],glassiness:[1,`glassiness`]},ngContentSelectors:We,decls:3,vars:1,consts:[[1,`bx-btn-content-wrapper`],[3,`size`,`decorative`]],template:function(e,n){e&1&&(Te(),A(0,`span`,0),te$1(1,$e,1,2,`bx-loading-spinner`,1),fe(2),P()),e&2&&(k(),ne$1(n.loading()?1:-1))},dependencies:[wm],styles:[`
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
}`]})};var Ge=[`*`];var V=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=$({type:t,selectors:[[`bx-error`]],hostAttrs:[`aria-live`,`polite`],ngContentSelectors:Ge,decls:1,vars:0,template:function(e,n){e&1&&(Te(),fe(0))},encapsulation:2})};var Xe=[`*`];var q=class t{align=h(`start`);static ɵfac=function(e){return new(e||t)};static ɵcmp=$({type:t,selectors:[[`bx-hint`]],hostVars:2,hostBindings:function(e,n){e&2&&Ce(`margin-inline-start`,n.align()===`end`?`auto`:null)},inputs:{align:[1,`align`]},ngContentSelectors:Xe,decls:1,vars:0,template:function(e,n){e&1&&(Te(),fe(0))},encapsulation:2})};var ce=new I(`BX_FORM_FIELD_CONTROL`);var Ue=[[[``,`bxPrefix`,``]],`*`,[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Qe=[`[bxPrefix]`,`*`,`[bxSuffix]`,`bx-error`,`bx-hint`];var Ye=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ke=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Je(t,r){t&1&&(A(0,`span`,11),me(1,`*`),P())}function Ze(t,r){if(t&1&&(A(0,`div`,1)(1,`label`,10),me(2),te$1(3,Je,2,0,`span`,11),P()()),t&2){let e=C();k(),W(`for`,e.controlId()),k(),wn(``,e.resolvedLabel(),` `),k(),ne$1(e.isRequired()&&!e.hideRequiredMarker()?3:-1)}}function en(t,r){t&1&&Oe(0,`bx-loading-spinner`,3),t&2&&B(`size`,16)(`decorative`,!0)}function nn(t,r){if(t&1&&(A(0,`button`,4),Oe(1,`bx-icon`,12),P()),t&2){let e=C();B(`bxTooltip`,e.tooltip()),W(`aria-label`,e.resolvedTooltipLabel())}}function tn(t,r){t&1&&Oe(0,`bx-icon`,14)}function rn(t,r){if(t&1&&(A(0,`div`,15),me(1),P()),t&2){let e=r.$implicit;k(),Me(e)}}function on(t,r){if(t&1&&(A(0,`div`,13),te$1(1,tn,1,0,`bx-icon`,14),A(2,`div`),Mn(3,rn,2,1,`div`,15,Og),P()()),t&2){let e=C();pe(`bx-animated`,e.isAnimated()),k(),ne$1(e.messages().length?1:-1),k(2),In(e.messages())}}var ne=class t{i18n=p(Se,{optional:!0});bxA11yService=p(Pe);nativeElement=p(H).nativeElement;bxGlassLightingService=p(am);generatedId=`bx-field-${oo()}`;projectedControl=Ur(ce);activeControl=g(()=>this.control()??this.projectedControl());controlId=g(()=>this.forId()||this.activeControl()?.controlId()||this.generatedId);resolvedLabel=g(()=>be(this.label()??(this.inline()?void 0:this.activeControl()?.label()),this.i18n));resolvedError=g(()=>be(this.error(),this.i18n));resolvedHint=g(()=>be(this.hint(),this.i18n));resolvedHintEnd=g(()=>be(this.hintEnd(),this.i18n));resolvedTooltipLabel=g(()=>be(this.tooltipLabel(),this.i18n));showErrors=g(()=>this.activeControl()?.showError()??(!!this.error()||!!this.projectedError()||this.errors().length>0));messages=g(()=>this.resolvedError()?[this.resolvedError()]:this.activeControl()?.errorTexts()??this.errors());isRequired=g(()=>this.required()||this.activeControl()?.required());isLoading=g(()=>this.loading()||this.activeControl()?.pending());hideSubscript=g(()=>this.subscriptSizing()===`dynamic`&&!this.showErrors()&&!this.resolvedHint()&&!this.resolvedHintEnd()&&!this.projectedHint());projectedError=Ur(V);projectedHint=Ur(q);isAnimated=g(()=>!this.bxA11yService.isReducedMotion());inline=h(!1);control=h(void 0);label=h(void 0);tooltip=h(void 0);tooltipLabel=h(`More information`);error=h(void 0);errors=h([]);hint=h(void 0);hintEnd=h(void 0);required=h(!1);hideRequiredMarker=h(!1);loading=h(!1);showLoadingIndicator=h(!0);forId=h(``);subscriptSizing=h(`fixed`);constructor(){Fn(r=>{this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);let e=this.nativeElement.querySelector(`input,textarea,select,button[role="combobox"]`);if(e){let L=new Set((e.getAttribute(`aria-describedby`)??``).split(` `).filter(Boolean));L.add(`${this.controlId()}-description`),e.setAttribute(`aria-describedby`,[...L].join(` `)),e.setAttribute(`aria-invalid`,String(this.showErrors())),e.setAttribute(`aria-required`,String(!!this.isRequired()))}if(!this.showErrors())return;let n=this.nativeElement.parentElement,a=this.nativeElement.closest(`form, fieldset`)??n,u=this.nativeElement.querySelector(`.bx-field-control > [data-bx-surface]`);if(!a||!u)return;let D=this.bxGlassLightingService.register(a,{element:u,edge:`bottom`,offsetX:.5,offsetY:1,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});r(()=>D.destroy())})}static ɵfac=function(e){return new(e||t)};static ɵcmp=$({type:t,selectors:[[`bx-form-field`]],contentQueries:function(e,n,a){e&1&&jn(a,n.projectedControl,ce,5)(a,n.projectedError,V,5)(a,n.projectedHint,q,5),e&2&&St(3)},inputs:{inline:[1,`inline`],control:[1,`control`],label:[1,`label`],tooltip:[1,`tooltip`],tooltipLabel:[1,`tooltipLabel`],error:[1,`error`],errors:[1,`errors`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],required:[1,`required`],hideRequiredMarker:[1,`hideRequiredMarker`],loading:[1,`loading`],showLoadingIndicator:[1,`showLoadingIndicator`],forId:[1,`forId`],subscriptSizing:[1,`subscriptSizing`]},ngContentSelectors:Qe,decls:18,vars:17,consts:[[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[3,`size`,`decorative`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-subscript`,3,`hidden`,`id`],[1,`bx-field-error-projected`,3,`hidden`],[`aria-live`,`polite`,1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-hints`,3,`hidden`],[1,`bx-field-hint-end`],[1,`bx-field-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`name`,`help-circle`,`size`,`16`],[`aria-live`,`polite`,1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(Te(Ue),A(0,`div`,0),te$1(1,Ze,4,3,`div`,1),A(2,`div`,2),fe(3),fe(4,1),fe(5,2),te$1(6,en,1,2,`bx-loading-spinner`,3),te$1(7,nn,2,2,`button`,4),P(),A(8,`div`,5)(9,`div`,6),fe(10,3,Ye),P(),te$1(11,on,5,3,`div`,7),A(12,`div`,8)(13,`span`),me(14),P(),fe(15,4,Ke),A(16,`span`,9),me(17),P()()()()),e&2&&(pe(`is-invalid`,n.showErrors())(`dynamic-subscript`,n.subscriptSizing()===`dynamic`),W(`data-bx-field-invalid`,n.showErrors()),k(),ne$1(n.resolvedLabel()?1:-1),k(),pe(`bx-field-control-inline`,n.inline()),k(4),ne$1(n.showLoadingIndicator()&&n.isLoading()?6:-1),k(),ne$1(n.tooltip()?7:-1),k(),B(`hidden`,n.hideSubscript())(`id`,n.controlId()+`-description`),k(),B(`hidden`,!n.showErrors()),k(2),ne$1(n.showErrors()&&!n.projectedError()?11:-1),k(),B(`hidden`,n.showErrors()),k(2),Me(n.resolvedHint()),k(3),Me(n.resolvedHintEnd()))},dependencies:[on$1,vi,wm],styles:[`
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
}`]})};var Ae={errorPolicy:`touched`,errorMode:`first`,errorMessages:{required:`This field is required.`,email:`Enter a valid email address.`,minLength:({params:t})=>`Enter at least ${t.minLength??t.requiredLength} characters.`,maxLength:({params:t})=>`Enter no more than ${t.maxLength??t.requiredLength} characters.`,min:({params:t})=>`Enter a value of at least ${t.min}.`,max:({params:t})=>`Enter a value of no more than ${t.max}.`,pattern:`Enter a value in the required format.`,parse:`Enter a valid value.`,invalid:`Invalid value.`},appearance:`fill`,floatLabel:`auto`,hideRequiredMarker:!1,subscriptSizing:`fixed`,tooltipOnTruncate:!0};var ze={minlength:`minLength`,maxlength:`maxLength`};function Ve(t,r$1,e,n){let a=ze[t.kind]??t.kind,u=`context`in t?t.context:void 0,D=u!==null&&typeof u==`object`?r({},u):r({},t),L=r$1[t.kind]??r$1[a],He=t.message??(typeof u==`string`?u:typeof D.message==`string`?D.message:void 0),oe=L??He??e[t.kind]??e[a]??e.invalid??`Invalid value.`;return be(typeof oe==`function`?oe({kind:a,error:t,params:D}):oe,n,D)}var te=class t{state=D(r({},Ae));settings=this.state.asReadonly();update(r$2){this.state.update(e=>s(r(r({},e),r$2),{errorMessages:r(r({},e.errorMessages),r$2.errorMessages)}))}static ɵfac=function(e){return new(e||t)};static ɵprov=ee({token:t,factory:t.ɵfac,providedIn:`root`})};var re=class t{textAdapter=p(Se,{optional:!0});formSettingsService=p(te);formGroupDirective=p(wF,{optional:!0,skipSelf:!0});ngForm=p(gF,{optional:!0,skipSelf:!0});focusMonitor=p(ed);destroyRef=p(Z$1);nativeElement=p(H).nativeElement;ngControl=p(mr,{optional:!0,self:!0});generatedId=`bx-field-${oo()}`;submittedByParent=D(!1);extraDescriptions=D([]);localTouched=D(!1);controlVersion=D(0);currentErrors=g(()=>{if(this.controlVersion(),this.errors().length)return this.errors();let r=this.ngControl?.errors;return r?Object.entries(r).map(([e,n])=>({kind:e,context:n})):[]});keyboardFocused=D(!1);isReadonly=g(()=>this.readonly()||this.readOnly());controlId=g(()=>this.id()??this.generatedId);resolvedLabel=g(()=>be(this.label(),this.textAdapter));resolvedPlaceholder=g(()=>be(this.placeholder(),this.textAdapter));resolvedAppearance=g(()=>this.appearance()??this.formSettingsService.settings().appearance);resolvedFloatLabel=g(()=>this.floatLabel()??this.formSettingsService.settings().floatLabel);resolvedHideRequiredMarker=g(()=>this.hideRequiredMarker()??this.formSettingsService.settings().hideRequiredMarker);resolvedSubscriptSizing=g(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);resolvedTooltipOnTruncate=g(()=>this.tooltipOnTruncate()??this.formSettingsService.settings().tooltipOnTruncate??!0);describedBy=g(()=>[...new Set([this.ariaDescribedBy(),`${this.controlId()}-description`,...this.extraDescriptions()].filter(Boolean))].join(` `));effectiveDisabled=g(()=>(this.controlVersion(),this.disabled()||this.ngControl?.disabled===!0));effectiveRequired=g(()=>{this.controlVersion();let r=this.ngControl?.control;return this.required()||!!r?.hasValidator?.(Ba.required)||!!r?.hasValidator?.(Ba.requiredTrue)});showError=g(()=>{this.controlVersion();let r={invalid:this.invalid()||this.currentErrors().length>0||!!this.error(),touched:this.ngControl?.touched??(this.touched()||this.localTouched()),dirty:this.ngControl?.dirty??this.dirty(),submitted:this.submitted()||this.submittedByParent(),disabled:this.effectiveDisabled(),pending:this.pending()},e=this.errorPolicy()??this.formSettingsService.settings().errorPolicy;return r.disabled||!r.invalid?!1:typeof e==`function`?e(r):e===`always`||r.submitted||(e===`dirty`?r.dirty:e===`touched`?r.touched:!1)});errorTexts=g(()=>{if(!this.showError())return[];if(this.error())return[be(this.error(),this.textAdapter)];let r=this.errorPriority(),e=[...this.currentErrors()].sort((a,u)=>{let D=r.indexOf(a.kind),L=r.indexOf(u.kind);return(D<0?r.length:D)-(L<0?r.length:L)});return((this.errorMode()??this.formSettingsService.settings().errorMode)===`all`?e:e.slice(0,1)).map(a=>Ve(a,this.errorMessages(),this.formSettingsService.settings().errorMessages,this.textAdapter))});fieldControl;id=h(void 0);label=h(void 0);placeholder=h(void 0);tooltip=h(void 0);hint=h(void 0);hintEnd=h(void 0);error=h(void 0);ariaLabel=h(void 0);ariaLabelledBy=h(void 0);ariaDescribedBy=h(void 0);dataTestId=h(void 0);name=h(``);errors=h([]);invalid=h(!1);pending=h(!1);touched=h(!1);dirty=h(!1);disabled=h(!1,{transform:z$1});readonly=h(!1,{transform:z$1});readOnly=h(!1,{transform:z$1});hidden=h(!1,{transform:z$1});required=h(!1,{transform:z$1});loading=h(!1,{transform:z$1});disabledReasons=h([]);submitted=h(!1);errorMessages=h({});errorPriority=h([]);errorPolicy=h(void 0);errorMode=h(void 0);appearance=h(void 0);floatLabel=h(void 0);hideRequiredMarker=h(void 0);subscriptSizing=h(void 0);tooltipOnTruncate=h(void 0);touch=bt();constructor(){this.fieldControl={controlId:this.controlId,label:this.label,showError:this.showError,errorTexts:this.errorTexts,required:this.effectiveRequired,disabled:this.effectiveDisabled,pending:this.pending,focus:e=>this.focus(e),setDescribedByIds:e=>{this.extraDescriptions().join(` `)!==e.join(` `)&&this.extraDescriptions.set(e)}},ze$1(()=>{this.focusMonitor.monitor(this.nativeElement,!0).pipe(yp(this.destroyRef)).subscribe(a=>this.keyboardFocused.set(a===`keyboard`)),this.destroyRef.onDestroy(()=>this.focusMonitor.stopMonitoring(this.nativeElement));let e=this.nativeElement.closest(`form`),n=()=>{this.submittedByParent.set(!0),this.commitPendingValue()};e?.addEventListener(`submit`,n,{capture:!0}),this.destroyRef.onDestroy(()=>e?.removeEventListener(`submit`,n,{capture:!0}))}),(this.formGroupDirective??this.ngForm)?.ngSubmit.pipe(yp(p(Z$1))).subscribe(()=>{this.submittedByParent.set(!0),this.commitPendingValue()})}ngOnInit(){this.ngControl?.control?.events?.pipe(yp(this.destroyRef)).subscribe(()=>{this.controlVersion.update(e=>e+1)}),this.ngControl?.control?.valueChanges?.pipe(yp(this.destroyRef)).subscribe(()=>this.clearPendingEdit()),(this.formGroupDirective??this.ngForm)?.form.events.pipe(yp(this.destroyRef)).subscribe(e=>{e instanceof Va&&this.reset()})}focus(r){this.nativeElement.querySelector(`input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)`)?.focus(r)}reset(){this.localTouched.set(!1),this.submittedByParent.set(!1)}markAsTouched(){this.localTouched.set(!0),this.commitPendingValue(`blur`),this.touch.emit()}onControlPointerDown(){this.isReadonly()&&this.keyboardFocused.set(!1)}commitPendingValue(r){}clearPendingEdit(){}static ɵfac=function(e){return new(e||t)};static ɵdir=G({type:t,hostVars:7,hostBindings:function(e,n){e&1&&ue(`pointerdown`,function(){return n.onControlPointerDown()}),e&2&&(da(`hidden`,n.hidden()),Ce(`display`,n.hidden()?`none`:null),pe(`bx-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()))},inputs:{id:[1,`id`],label:[1,`label`],placeholder:[1,`placeholder`],tooltip:[1,`tooltip`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],error:[1,`error`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],dataTestId:[1,`dataTestId`],name:[1,`name`],errors:[1,`errors`],invalid:[1,`invalid`],pending:[1,`pending`],touched:[1,`touched`],dirty:[1,`dirty`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],hidden:[1,`hidden`],required:[1,`required`],loading:[1,`loading`],disabledReasons:[1,`disabledReasons`],submitted:[1,`submitted`],errorMessages:[1,`errorMessages`],errorPriority:[1,`errorPriority`],errorPolicy:[1,`errorPolicy`],errorMode:[1,`errorMode`],appearance:[1,`appearance`],floatLabel:[1,`floatLabel`],hideRequiredMarker:[1,`hideRequiredMarker`],subscriptSizing:[1,`subscriptSizing`],tooltipOnTruncate:[1,`tooltipOnTruncate`]},outputs:{touch:`touch`}})};var ie=class t extends re{edit=D(void 0);internalValue=g(()=>{let r=this.edit();return r?r.value:this.value()});value=Yn(null);reset(){super.reset(),this.edit.set(void 0)}clearPendingEdit(){this.edit.set(void 0)}updateValue(r){if(this.disabled()||this.isReadonly())return;let e=this.ngControl?.control?.updateOn;e===`blur`||e===`submit`?this.edit.set({value:r}):this.value.set(r)}commitPendingValue(r){let e=this.edit();!e||r===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.value.set(e.value),this.edit.set(void 0))}static ɵfac=(()=>{let r;return function(n){return(r||(r=Do(t)))(n||t)}})();static ɵdir=G({type:t,inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[un$1]})};var an=[[[`bx-error`]],[[`bx-hint`]]];var ln=[`bx-error`,`bx-hint`];var dn=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var sn=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function bn(t,r){t&1&&Oe(0,`bx-loading-spinner`,4),t&2&&B(`size`,16)(`decorative`,!0)}function cn(t,r){t&1&&Oe(0,`bx-icon`,5)}function un(t,r){if(t&1){let e=tn$1();A(0,`button`,12),ue(`click`,function(){st(e);let a=C();return at(a.clear())}),Oe(1,`bx-icon`,13),P()}if(t&2){let e=C();B(`disabled`,e.disabled()||e.isReadonly()),W(`aria-label`,e.resolvedClearLabel())}}function pn(t,r){if(t&1&&(A(0,`span`,14),me(1),P(),A(2,`span`,14),me(3),P()),t&2){let e=C();k(),Me(e.resolvedRetainedError()),k(2),Me(e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel())}}function gn(t,r){if(t&1){let e=tn$1();A(0,`button`,15),ue(`click`,function(){st(e);let a=C();return at(a.retrySearch())}),Oe(1,`bx-icon`,16),me(2),P()}if(t&2){let e=C();LA(e.retryConfig().buttonClass??``),B(`variant`,e.retryConfig().variant??`text`)(`color`,e.retryConfig().color??`primary`)(`outlined`,e.retryConfig().outlined??!1)(`disabled`,e.disabled()||e.isReadonly())(`loading`,e.isBusy()),W(`aria-label`,e.resolvedRetryAriaLabel()),k(2),wn(``,e.resolvedRetryLabel(),` `)}}var qe=class t extends ie{i18n=p(Se,{optional:!0});retryError=D(void 0);retrying=g(()=>this.retryError()!==void 0);resolvedClearLabel=g(()=>be(this.clearLabel(),this.i18n));resolvedLoadError=g(()=>be(this.loadError(),this.i18n));resolvedLoadingLabel=g(()=>be(this.loadingLabel(),this.i18n));resolvedLoadingAriaLabel=g(()=>be(this.loadingAriaLabel(),this.i18n));resolvedRetryLabel=g(()=>be(this.retryLabel(),this.i18n));resolvedRetryAriaLabel=g(()=>be(this.retryConfig().ariaLabel,this.i18n)||this.resolvedRetryLabel());resolvedRetainedError=g(()=>be(this.retryError()??this.loadError(),this.i18n));isBusy=g(()=>this.loading()||this.pending());showRetry=g(()=>!!this.loadError()||this.retrying());showStatus=g(()=>!!this.resolvedLoadError()||this.isBusy()&&(!!this.resolvedLoadingLabel()||this.showRetry()));searchDescribedBy=g(()=>`${this.describedBy()} ${this.controlId()}-search-status`);isCompact=g(()=>!!this.label()||this.compact());clearLabel=h(`Clear search`);autocomplete=h(`off`);loadError=h(void 0);loadingLabel=h(void 0);loadingAriaLabel=h(`Searching`);retryLabel=h(`Retry search`);retryConfig=h({});compact=h(!1);search=bt();retry=bt();composing=!1;constructor(){super(),xe(()=>{this.retrying()&&!this.loading()&&this.retryError.set(void 0)})}clear(){this.disabled()||this.isReadonly()||(this.retryError.set(void 0),this.updateValue(``),this.search.emit(``),this.focus())}retrySearch(){this.disabled()||this.isReadonly()||this.isBusy()||this.retrying()||!this.loadError()||(this.retryError.set(this.loadError()),this.focus(),this.retry.emit(this.internalValue()??``))}onInput(r){if(this.composing||this.disabled()||this.isReadonly())return;let e=r.target.value;this.retryError.set(void 0),this.updateValue(e),this.search.emit(e)}onCompositionStart(){this.composing=!0}onCompositionEnd(r){this.composing=!1,this.onInput(r)}onBlur(){this.markAsTouched()}static ɵfac=function(e){return new(e||t)};static ɵcmp=$({type:t,selectors:[[`bx-search-input`]],inputs:{clearLabel:[1,`clearLabel`],autocomplete:[1,`autocomplete`],loadError:[1,`loadError`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],retryLabel:[1,`retryLabel`],retryConfig:[1,`retryConfig`],compact:[1,`compact`]},outputs:{search:`search`,retry:`retry`},features:[un$1],ngContentSelectors:ln,decls:17,vars:50,consts:[[`searchOverflow`,`bxTruncate`],[3,`control`,`label`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`bxSurface`,``,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-search-input-wrapper`,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-search-icon-left`],[3,`size`,`decorative`],[`name`,`search`,`size`,`16`],[`type`,`search`,`bxTruncate`,``,1,`bx-native-search-input`,3,`input`,`blur`,`compositionstart`,`compositionend`,`id`,`placeholder`,`required`,`readOnly`,`disabled`,`value`],[`type`,`button`,1,`bx-search-clear-btn`,3,`disabled`],[1,`bx-search-feedback`],[1,`bx-search-status`],[`role`,`status`,3,`id`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`type`,`button`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`],[`aria-hidden`,`true`,1,`bx-search-status-reserve`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&(Te(an),A(0,`bx-form-field`,1)(1,`div`,2),To(2,`bxTruncatedText`),A(3,`span`,3),te$1(4,bn,1,2,`bx-loading-spinner`,4)(5,cn,1,0,`bx-icon`,5),P(),A(6,`input`,6,0),ue(`input`,function(u){return n.onInput(u)})(`blur`,function(){return n.onBlur()})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(u){return n.onCompositionEnd(u)}),P(),te$1(8,un,2,2,`button`,7),P(),A(9,`div`,8)(10,`div`,9),te$1(11,pn,4,2),A(12,`span`,10),me(13),P()(),te$1(14,gn,3,9,`button`,11),P(),fe(15,0,dn),fe(16,1,sn),P()),e&2){let a=Mt(7);B(`control`,n.fieldControl)(`label`,n.label())(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),k(),pe(`is-compact`,n.isCompact())(`is-invalid`,n.showError())(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),B(`bxTooltip`,No(2,46,a.text(),a.truncated(),n.resolvedTooltipOnTruncate())),k(3),ne$1(n.isBusy()&&!n.showRetry()?4:5),k(2),B(`id`,n.controlId())(`placeholder`,n.resolvedPlaceholder())(`required`,n.effectiveRequired())(`readOnly`,n.isReadonly())(`disabled`,n.disabled())(`value`,n.internalValue()??``),W(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`autocomplete`,n.autocomplete())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.searchDescribedBy())(`aria-busy`,n.isBusy())(`aria-invalid`,n.showError()),k(2),ne$1(n.internalValue()&&!n.isReadonly()?8:-1),k(),pe(`has-status`,n.showStatus()),k(),pe(`cdk-visually-hidden`,!n.showStatus()),k(),ne$1(n.showRetry()?11:-1),k(),pe(`bx-search-error`,!n.isBusy()&&!!n.resolvedLoadError()),B(`id`,n.controlId()+`-search-status`),k(),Me(n.isBusy()?n.resolvedLoadingLabel()||n.resolvedLoadingAriaLabel():n.resolvedLoadError()),k(),ne$1(n.showRetry()?14:-1)}},dependencies:[zt,ne,on$1,wm,Z,vi,so,Ua],styles:[`
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
}`]})};export{ne as a,re as c,ie as i,te as l,Z as n,q as o,ce as r,qe as s,V as t};